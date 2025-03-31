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
    "4PBMWWDU6qWjwF4T9nQem631SycxhpX52Vk2hEVsd75VFo2AvUEtuZhkmz8KZqrWv9uQUBS1JrY1jEtM6t8ytz4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9np1JK7SsXc8TeZDXtQpN5Jn9zDyrKNAkHCb5CLtrCCMbU7aFf5a7abbJLX7jHnXciJQhC6QpivVXfzxFFJsPCe",
  "key1": "Yp8xX78MybQxnczVRwhei3UcWY2SW7fmxYSuwnuTXWY2ngLqfzVJERXscLHqtLJw25dorv7aeoSQ9jVabNm7df6",
  "key2": "2qgFCVHjAPNuur3m29AfofKobtVHmamaEPpSnMS1xoQpaNh9Yu3JY6smTvPKfbKMSFWg79ARzRwMQhBpo2fVVDHG",
  "key3": "qxrbH4bjhKgYTzrVrKF783nGNwkEqS8ZbdRwiZhfJ3ENkB8Eek9Dr6C9dXP8WidJpYerQpvkeCKj6qydmKwqC75",
  "key4": "621yAr7XFs2mBmfBVUVCFsYE442MZh97Ac2MDoCLN6w3AvKoiGKZ9StfgwWNtUAPS6wMdVt9Qzk7n6JUXKv4kT5a",
  "key5": "63ibyxdKuCGWvobutoqTHdg4KQaT5Rptz1MsNtjSaaoKK22hHpstStKb1Jdbi96R6MVrPg1XNi5XXZYzkyKsLkcq",
  "key6": "2NSHhtiHrAmHd18YyV5H3kmFEXDwvh1kNaqRefNNqSDvWfNJyKxtb12NQenVMFCAnXKabEjujkkQRfdN285HpT91",
  "key7": "24iNoPMp9cD8pdRTKdioFbpBd67MNYYoTuUd3xXLBa4bfboHPMxU3jzhxFPDwCWXASYkzxvU12sfK7Hhfj9wusJC",
  "key8": "4ZtyqitERycoZHkCnj8rGDMy5FpYNH2qijHBgrwoZ5kooeC11tWRTX6JexrTHp26RVw357ixtdkpdMZdnVh4bRbq",
  "key9": "rUdthtiACMjF3Gc5juL4eZw2EeEM2KmeDRzjb3ZCH7g8u9dRyHhFSjJW22JRs5z8rGyuN5ej9CVpfUZui6S8SoA",
  "key10": "5fQCVXsEdzYQe2gTashZMvfPiK254kJXzdKLsuKtCwxWUzMKouD3m6KHS7katgPkSJK2mkt8TMLiueGw21DNMtdL",
  "key11": "ZFg9eyEt1WksJmnVMjJZvKkqJHGU1DYytBL3JzkQxitVu69au4ZvJLxVdEdtfpqonSYYm2Kd6m2VDh9w8E55GbC",
  "key12": "3iPKzzn5ZrQd6PnpR4CqAdgbWS9QXoDd9drWsYjiy2C9Qat4TRKxyR7nc5ppFRdyZ7TpJbYkvUpkzQ1VQLyyBfEK",
  "key13": "4oCPUTHPuTv1MKCLpiMB5RUSHFru929ZFH3wNxszRoQz281623RBc7yKQcJFhDMhucwvrYMHt7rRrKZMSok6qtAY",
  "key14": "2Kej3k8CiHbDEw6vzCLutd14QbeJ73Yf2e1sU38yDMwSDL1a8KY2rxsYxkoPDJdtWaXhDhzaV8shFwDjiDPN58yQ",
  "key15": "4eUgju7eELTnasV3xxbtWmUPtDzpukvZrSDPYz6CeohGio48tcqhvXqyVQz2TWPgvMVYHMqpFAHWDkLBZNng6VQk",
  "key16": "3naX5ZqRgiVxY9SBjQkBw5L2e1qXgAtGfPENv16Rks8wsy2G9kWr377MyRjrRmnneJfsmifiqoLZDYjMKyGY1G3y",
  "key17": "2M3NPLHTqjehF3nnizUJhp77EqCFuvK1exx2z3w4EPgUqzF1ErjaPMNJR5SwppEnCGqBcJ7gjEqeeUS1RSaVYeQs",
  "key18": "5cp7aESrp8Hh9QE1o34eFHeB5SxPv5Zb5wRrY7eJN1tn97srsmpLNdKiAB75yWPezbkQTFNB8qJodG2h3p9kQnsR",
  "key19": "5ek4RBww3uBE9wyia6KfhYTZBKYL7hTSmAPCZwhuUefmeq6DHRWgXBfxhwaLy1t7BsHHPbHBunny4ZWHy4Qw7vPq",
  "key20": "5qJqv2wVkfc8CiiSodrA49xcfDNSTHiX6Jf8UywRxUtBL88Z2aFh6C77ZXWjWCGruLSgKSou3EoYTZepdvDGDgkp",
  "key21": "5ca54VkZCkX5nTK3JNoVWnyQsE8UXFLvoBwWHq4UethbuhfXHe4Wj8CMT3d2RCxP3dngWRUudoig3hiyCT1jQHv3",
  "key22": "3Lhurf17AgEHPqwQDrfCUdk8J6oRC5MX2Vfr1NB5EM1cuGMctqavM9Ax7DjJjZfPQjLkJfVsHb1o7PjJvznooago",
  "key23": "4Lk4vb1kAZaLUnZsG64n7uj9g3YV5t9ZpeLeRJCaBqLSnpQDRxf2BRMLHjZKjGuyqA8YLbYJvkSCyK7PT8YhFFyk",
  "key24": "4EQ5LDt9CtF6xNXWVT3W2ZF3TD7HDWWoaiJAAe2bnYwn37CW82zFRwj5SxwRYg9zrZ524DdhiX81LJgfzv9KUpXJ",
  "key25": "3KPYBQBS3Y27RFJv14PdV73zrwsBeyQqAq1fprBeNpE28MGDJrqmQpuwJ2WvbKdVq1LXQz8V5JwYAG5YL6nDA5kq",
  "key26": "4jSYinVQKpNpjorT7RAMe1JFmH8xMGnf7e4viN4BX3AXtNksbR4Hc2UBzXZKDCGRBZL6Fx6egrM2rvLHg8GmUwR1",
  "key27": "36Fm8fgcQrpoSTXqQwnULMUahrURTx1yjZ2xbQacSAipaVygvpz37bvdXsyWftT2cdWRt5soW7LmX9f1EwvPvwM7",
  "key28": "56CdpvUBTcCxNQdaaTsk3FZTFbYWAMZUk5vNSJtJrCcYS7z1NeuoRaNLbPMmjtr3XLHCKhra1TGQ6uzsRJdRXq3d",
  "key29": "5jMQjt4kvGTErb42cVFe5q69k1UEBtMNHdwWy9V5Sf5bJZ58F1XSrL3dnzCDYjraX7J4V8RGdtobypoyqpdtEYw6",
  "key30": "4VDhnjv9DB77EVeJjPoSPw2VC3Svk3joMaqx9puBbmJJNJParo22sXJig5ZKz1X3tiU9Q9cDvf6Y5yACc7jGmcVW",
  "key31": "hPcJMFUw7T1sELNSsk71nBKoGNsMebXq8CYnfQ7RJniQ3CFBrvioDZMqhWjriUsJxZFSt2jdrK56KqYZE3cR582",
  "key32": "5XZ7ZZwxASVNxAW5Yw7HpLcdos5QxWhYUu3Ga489SBmRFqGm1PVGbtKWti57e36DVL8nj3foiv6U4fG4hr5WurN1",
  "key33": "5Ef5nM8ux5XRV15ipvisRHpcu2926pDKToKBaxkVsYzpDY22jAdbarpCnoEZsv8BimsrxfptQwFus47cR3ZdU5YQ",
  "key34": "2Rx726fgUD1vVjkAMNiKd4CBGa9QCqDTAjLvFjYhQFAXQMDjnXRNX3oHSg2KjWehF7fQqUXhZ5uH9MgErjC5gfsu",
  "key35": "3RAG7sn3jMUbmX4iYaJbxSNcHuwxirPhSq4J7HePejBwkmHaXVbhjxLJN4yCewaBnLcYaXnzLp6DXXFXASpoyBpw",
  "key36": "3t8xmb9i1VMwsdCTt1JabPEnAKM2tr2TQQ8eDWozQNpfg4q4nZKRjPuNmymkXgaJYHckr9wZBLYtFvaGfV9GoBjS",
  "key37": "49PteWatTHjZEeHPKqNMuQsJJsXvbREpwn8LH9j6c4hR1wiGrMARNcWqpHRJuG2Fa6bVAbAuCrkdvNspWQj7WVc2",
  "key38": "zTGNNn8r9bakf6fhwMfyrS4Vjsr5tb5Pdn44wpyEb6xgJc9yktLPuHXjWw6J1AZEWdKzQE3cQpfEcVsYUPFcTXn",
  "key39": "5od2j3LZvpM2o8tWEE6vfr7QKzReBV1q3cgE7p9dUmuotLUzA2Rn9V4EAcCFYJewWqtKNtaSvorzpR1nXnTwnMFJ",
  "key40": "2WAWM299hziZD5xYwuDUDSfeHSajrjrcVMghFBryBTRxoT6ENw9B5rjURkdyDGGehrrTJ1WMyoNwu8vNSoaKUq3S",
  "key41": "3tZUardYKP6rFJF9jwoXpEdXVDZ5ycxP1j954Zc3s6DWrtAeLSRzuD4sEPyygwrgKbeDRCR8hwF6oJox9JSsXbj9",
  "key42": "2ZRsKyJLfUMkVBhgpV2aH9GcMUnB2phNbGMdE1prYLVv6evRxUexVYnwTD55CTSZ379FahmnBjj7auapNJEQmoTK",
  "key43": "4ZtoX3WwFPwEMAebADo9K8tGMQaEvWWBPR1oNn1mkQyjKGp4hJPCD7i4un7hgJBJDMK1QeaN2oWC17ivgVnQjeFH",
  "key44": "3N7FgVqaUhqXM1prtw5cu5mXPGaomzLRSuZSiRuhrqyxo5bWPKqd1Lq4BJm4f7265hNd6kMXLNH8kifgz5gqqtQx",
  "key45": "4EcccAqDwxU9rH1FJnTT6HsUvJWezbgXGi3tQfJpt3cscahdcLmBbxpknw6vhq1TJgF4M6kjh6G6vd4YeVqFTJHZ"
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
