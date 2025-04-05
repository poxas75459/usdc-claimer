/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "kiDwrHkGcAFibLkX3R6xKPPDDb6iNcWMPYLQ43RF4dv3saAVpnFQkwhTefVJkTyUeqnHS5hCLo9jap9jgL7FNq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZKpcD7TxnDYFm1RHsJqFStFgJPmkq29Ubv1FV1HwfyJthhzykiqS25op6v7wa8eRBF3Vf5KPcT1Q9Prt3S7DWo",
  "key1": "3SQ7uEqk44swmgoZdpd35BeoJvt7cbyo4yMAZ1LAyk1DNN5DiJsxSW3vooaKxiD53qT39p7j9GDxJv24LXayV7YZ",
  "key2": "21vbeJeVGmdgRQMrN15gGMgF84ek5QoUnBnMi4JHDsnA79Pm5QBxS8cf5icCgrmgyQbiKkr4hXdcz7tzFLHJJZii",
  "key3": "2o5aiFaWgfq1m9xSphfMjjokZKBMfXUjusU417shQUw1rXsKQLuDXwgqRG1mcwkiHMq67uAthXbSbh3UgpmvX3Ca",
  "key4": "9VziYMgwzMJbsswKZvD1BvrQJwn6GT3SwwdeqfCRPwz5j3ZAi2z3d6149ZasnZ2VewR35SiKvMJJC5wKms2m91m",
  "key5": "Dh2VcDAxrkBPqgAeWZzYw6WDZFwXhvcteUafyELDZ3EEjccEhMFbc4JZ4RPV7p7kseCPGFMi2gqvKBaSE2gzsVs",
  "key6": "2pejiw3sKRgM24PBzAuhnVCHq6CGPZ32vjTLqz5sUPBgzor2Rh6y1D3jkkBqPydT7Ag1JQTDuegQAjSnCKsDcZe1",
  "key7": "2ua8CSXT7JvU51nv2UhbftXVSZQKUxDAg9TKAYNVWi8LikVUjw9cRpbxvfCyExSFEuMe2AXkQy3rLXGGFpfrwy9H",
  "key8": "5QVr5au42Ziiv9igV7FS6QzBpp9sfeXHivNP55Hx6qLb9YPTH4i4N7VomvsmVgFGDDfkrpJFJcCm42jGVPSrmBkQ",
  "key9": "4HakQuHEKaEsrzCi9r4t8YuvqyVKbtHe5FnKgVWasCDNWqzQGqWa56jHvhaZf1rQ1nauMbu4xgCBRaMvfwfnvWmM",
  "key10": "42GmcEawd7FtDjKuwLWRzn24475o9jWHUYn41qAVxkY2F7hemKat6gYJUUg2fLZo7UN7DKuHzMEq8uwCizgwsyLv",
  "key11": "4qSjmCYnUYxWJwbWhTGXvBX8Z5MBuU8BHebecvzwdVLAoBZotUJEZ7mD4VzMbt49e4RdGJLVu1Mwc8S5aRap3wbb",
  "key12": "51Nw7pciTVHD1oLbJ6QPRkKk21Zz8PkSNJvam3FWHeJVwEqGEfgnWXZcQMyk9XUgRjcyiztNv7S592ZfDFMp28Hr",
  "key13": "WACkDMaUYSV5X489JfCfA1YFPZiRjMECEMdUahg6NCRaJULSQrv5gtkMCRSX9D5znErrzFKk59J5LrrPNok7ws6",
  "key14": "w31aKjBk5vf18tKaFN8XUB4kBdnYeKigdSA59xhG44odJm8eWHSNWa2WxTavFpZiKyBuxHn8oroGH74WGHejwaG",
  "key15": "2awCkZHNrAaTZ3ksRpvTnrYG5cpqfPyYhun8uZ84Xc7qWHjb4tDzcefEdkjSTdZewRvD2a1dGn3kp5FxMH9giGgT",
  "key16": "59Q9s4Yi35CvARiuevhtJ554fCk8kUwsme6wXuid1gLzARkUjnLj7ox7zZBVWoxPCEt5244YD6HzCoafHcBs3JS",
  "key17": "5GrggxtAnQEbismM9vyQsZSfcLYt6n9Wpr83CGa3uX2DsRicTZvifdHTMDuh3Fc1qDBPjhf4j3HHivhRAh71bSny",
  "key18": "Bj1w9YsYZ7dwgasx39TaeHZGehuKorf3rymAWNK8Me6E7vqeWVM63dya5JvQWw91CQ2r3swRN8mxbWyiH69E5hJ",
  "key19": "5rdGfFGCKFDUtsC4pgGfj8w7Ufcbya3eBM7Mi6i84X6r8XjCNpuUbnFD6A9fWhqYTC9iMAhbaKa4chWD1WtA5fCK",
  "key20": "23QhDNsvEHp2JbHdXKiSiwVUiz6vnq4eA3F8accxiBemVs5k2ufdYYiWHQcsw3CGdMtdh1ok88kdcajrK6GAW6V6",
  "key21": "AYHJ5xa2pWdoEU7WLAgLn5KYZoW2eYsNPxfLPoyAzTPryFBajC71ZENYTSYX63QNhnATtdFo9LdjthYkT3ruEAU",
  "key22": "613bHRVK1srpuQ16RmxAGJj1gN8LaiUidGsazE5qH3dFcQs733MCjBSzfD1JPgz8PLmKhLQW8etbur2LLRKhxYJF",
  "key23": "37qJ269Mx2aDmzA5b3vBWca49NYk9BkZ2VhQ1AV6C82tQSEHVqejPDuAwxY8xCGnnijrGEKkmRr8bC91zaXxwBLJ",
  "key24": "2s9fuvQLQsqFoN7vG9XQ3RSf8doSFimJBRhFPLtWgW6hqbrLzVSwfGWU8PKeHmQanYr9dYWN4rsiYsbJD8iP773L",
  "key25": "2jrVwwMPRAUgzbvKTURSW21y4q6z7LtNUSB44nmciViBDmhV5wHs75sq5sQE2PUV94z9HSu4tUFEk3MinuTdNp9Z",
  "key26": "4EqFhTzyGEiYEHxjp3AD5wAPjEk4LZBESB7MR8BgFf5mjcvLyKmpnqgWDx6mWnFEV55xAu7mhuqeGmh4GMVmuict",
  "key27": "YrozaZsGP5wH5sP8vodzw2X3Tx8R4AKPfBsit5CSirnzPqqijyr5c8oHeXyCfENj9sCctGAe1Y36fpHP3Ws1e2a",
  "key28": "55zNb39itMPUNxwwqS1LSd97RxmFrDUGt3x6KLbwzJhVU4YRasMdJWh6TWG5EFLzfJUScp2hh6bcYCnxh8jd5Edk",
  "key29": "3HWsdYnVksUjQjyn6B2EDrMKDJ5jxKGbFXt9jB2V7s7MKJdKHGmsXYuAYAAKTTom4LHdvzjiKQcjF6r6UvQ6pEj1",
  "key30": "4g22aLgvNVed2KALgJJWLfgB3LAijhNJvovEhRhpUkGPntGyEkYY2vfbiFyEGZbdwZpNtWRqTZMDX8M2DC6ewfsX",
  "key31": "4gRN61MjXDyQZeK254SzHcd2F84RxGHdq6CGu1Yj8by1PiZoV3EyZfX65oKAN4qUa4Ds6vedVWMBb9eGrEvZP3Ku",
  "key32": "3Dxa5YY75k7PEABtnWPoGBY2rwcy2MCtiZR3kbuopkuvvZVe4mgVN7wMs4Ro4fwbCJyhjGt8dAMBqmQ9e3NkKb6W",
  "key33": "3rMFrB8DMFmTmdPjzej2CeYgwnhhz17JTdNtFdSoS8P2uQKXT9oRKTkoYtR1dzoe4CWyWE6xUQkPvzZT8H59vQHZ",
  "key34": "5U88RjA9DCrPKvWeoDVifuHpJxw5TszgULiTtsfrkowNzgTYDgxu9GXScmarzGAfQwqoGWQjgQNqhsJg18RrFWqY",
  "key35": "4reNEenH4eHZDvbr18oDtxeXAdWQZKxG4BsNZfxLs1Xe3wLvqYHXv47bEV66uSSgVA5WWDC9eEDkcfbZ8rVPh3nN",
  "key36": "4ugxtKYeQTr2nuRwDTbytHMFjpkfFPY7esyHY8CyHWoNisU2TtkpfRxcYeT1gR37EBuxyzMxBbGfQT91dxgN6Wi3",
  "key37": "37a2GcSFRLuvjXEsL9sBTLNhUdYyZgaBRmdw6criBqDp8wKkLMX8z9RmtoBsYXcyT2GmKDLxmpBJnspiwx18Juha",
  "key38": "2D9Ewxu6tkkGF4tz4dbiPxVMwW3CWr1kPBGWTG8padPMNTxLMc7npw5AchVJ9aYxQPK1kW5UegQzBokFQhYMAWNj"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
