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
    "4cA7iDD3vwZDtiZPudLzM5Qd2QuYs6i8oLgga6cEeU64xdxyakjorbbrnfMejnFNu7MAE6A5MN8fXPMsSMMtS9nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dajzrPtnT5qRS8Lv8CVRhce8avuy3cVSpDkfogLdKVq7etfy5ud4imtrovc34ZEUNvsCJS2J9Hih9DCceXZM6rd",
  "key1": "3h6G2wnFsQVkPwjT5ZUtKS4NCtYpe8exCeFvoRiaYmH82aogybauRfty7oPHHPNPCvymcd5wPRZHdEZidbJgtbXx",
  "key2": "2315DoSyJKe4C555SbDAcvH3eujLFofm7Q6wpEbNhVZvzrKaDREsfnci6r3stKcURNpqbvcByyKpTAXEd76euuJF",
  "key3": "5TApJMaYrG43jBxsxvUAATVk1FaBNwcU69AJQ366TQ6jbTuTiq3MFR7S8AySKnLCXb2CE4Khydz1u6CbwFQHsktj",
  "key4": "2GcVx1B7dJZGrV386Dq7Ec5qcFFsRboBs2UFNpAgMMQCcDMPUhAt2LwBGntkiqYBRp8zWGEpUCWWroGq76XtS7hz",
  "key5": "4BTxvPp782XgDq9o5vCVKbnrc5Laqo3eVZBU5NJsTModjknZyWebzBG1iizwnvf2iA3TxyQGBksepqKfZA1kAGLv",
  "key6": "5ZxRESkkdRzGduvbarHq8A3mXk2rXqQ1HByrtvXx6LuFwgEYEbeYf2gMCbuuzbevSmLKAN1dnvzEebEbVDvdh96U",
  "key7": "h6m2uSYu5tbKQSFiUgoQjxZw2nGaTqvdW1js6auBK8bFrh37XCat1kxkKQGqkT4JDjSGVdNDRb3qCErbPcLfgXF",
  "key8": "48eWhmq9MJ2GM9bNXByKPV7UDZkS98LBhjBKWgkcouN7MJvuKE3jnZvNAgmxpnY4Prp4fgYq59uAV52CB4fAKW6w",
  "key9": "3Yb1QXM8p45dB81uzCYUwbjzFvJ2vkU2yReyVuYykX43djP7ihXzb8A2rXsgDaWwJbkATX4Xz9aenzVHMHPK2zVw",
  "key10": "hyfQinPYNisKg6VH2hvURKDozEfL5pHtxyRVQWbnyQxTPyBjTtFN52wzjyPCwRiMHqvKVqyab3p5RC1wbrA2Kum",
  "key11": "413eELrXntCJFgZDHveCRBZ1C49vPNgWmyQxBSLdEsFtFzmXKrsKUMa7aoKm1sqanRB3LE4ss2CRuziyg5VLU9Cg",
  "key12": "294f1KEYS7mNFJUpg5VvovaSuXAkNoZ2xskHaBNnbMjzo3naH2pLNuUN5LDndGQ6775d2vniCh2zbHyBPh6cfsnq",
  "key13": "2BgC1rks8VxDqQNnzfe9cn3qwuZXrafYp78fS16TiXaE1YfadXyxQF4veYQUD7xvxLfXwKktMpmJQ88V2BL6S7Mp",
  "key14": "hhyAnSeofJqcd4r2TfQYFA8kZUKNWkb7rs5NvgdXbzqFLvosf4YjBWPg8yZ1nFHfNN6dwzdfcNameNBKZUtThHd",
  "key15": "33vi4tC6H2d6MsEFD46jjUidTao9y82gmRZnBy721T31CcByVjGPmh1f6o9QkgrJWofCjktuajBWTEoGVD3bo9W",
  "key16": "4A8uzAXdYG72yaiBS1NP56kLsKdxnAwunPbhsR38G5Ri9fk8Ap9W4XXcavriT3tDLHsRJbtxLrMwc56zyACskKQ9",
  "key17": "2txpAZFWJqacRYfW1bHhgFM1hRQFPj1y8AJmGu4cAfc1FrgCKfxtqe4u3eEBKnbCw7pGiNwKq451HHJBM8GZLUB3",
  "key18": "2ekUGjC75rGZUbeLo9tFgXxZnPJWYR4SrbaRtURNctTZcQa21YsnT9rrAthteFFPfqV9unbQGkUZAfsVbVSiKeYL",
  "key19": "4Qj497m14paUVGPMhFovw7JEnS6apVUbWiSEZ9j7mxUoQVKLSGrSjXkmh78i8W9DN6R9wFZMucNGNjccJX8msTck",
  "key20": "4JGoMsaPyDKQjVFbpcHDDsMxCbEHxWvEVuCmG3TKm6PiMpRDo9Spfi8sEq2WZuMXSn6uo3LabrX3TgyZmBHi8N5S",
  "key21": "5dKwkJwuc8rjamTcjw8UHS5nPfZisXkQ9Dbfdz3eVCzLtXnLMuBdg64zL2njQ8b6D1BBytKk8fh7QG488zgybVN7",
  "key22": "5dUY8xxTMVHSkL9Mfxz7HNw3VLwjehUULet7v4aLnx3ean9MQLTgFSiAJdqANst16XFbWe6cpmZTM25p9P9X5diY",
  "key23": "5SYbJ99jp3EjKB8kNtU3Yo3AwuxgcQkfBcAR4yiRvXRH5Zk93fM8r2Rf2jHdfSTuNAh9UJzktususHsEAcZaBA5j",
  "key24": "5DX2r3Ft7V7pgVPJaGMui6icb47KzaaiELx2MGWwDm2n2G2Gq4gRAXQvumj993UdUvquMshP3qMZvgjfWeEkKApC",
  "key25": "54R1wMwdZPz7s5WaLVJYVs7YgGG9yiaBeiQ5JXa5ifEM5R2jm5XkD2KNitcp95xj6UEpkRCtqH5qrrzPx6KCYfLw",
  "key26": "4ECYdP9wZFYCAGtEGEL756NpjvNhAGbHDnFCZMG4RVaX9aj1NbmxX7dGZek9F9SwZrspE9m18YbkMU6xaH53qDRa",
  "key27": "3R7naoh5DPtqApjVD3UW9pmsFhtaZY2gJFxi3UoX6ub2dDyaNdYsGzxwAz6ie8y9Ucd64USUxJ4Tvc2F6egTzR7u",
  "key28": "3BpAVTL3RbgvprXEtb739YKx5Zb3C9wQ9bMT1ggEswV7shs316mkNMXFTtU9mHuj7Sj7S8aGgWvzXiEPgc7WaMVf"
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
