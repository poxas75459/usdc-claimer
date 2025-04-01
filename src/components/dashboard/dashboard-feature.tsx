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
    "5EQfZGycSrsypdgHsTKbEanqKnxeAyAxkFX5mGnHHvYjXkCkYmwbEPrbeecr2WsbczoikozgznSrsPxMiUCtJMib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CLE1HrmjwMwaAg7vRpUgo111rRiRrFB7nUfcJW8MQKyUCat4RPESuyJ8jUVmL3ssNtpBEFWPri5YAnFD1JMny1m",
  "key1": "62MPcCvpTv2LmDqCuqpLn81TobAryMSLzDnf8Rymim5A6rPukVe4FopQCs72qzU3C3ppXPX2hR3dP8hsPDmhRc7a",
  "key2": "4S7tXgSisuoauHFpHp2tNkyYgvpAJoPavAi7BwWTagwyYizfFtAurqNbaiDf9ZkFS4kEvi18J6s42oVHg3zCBKDV",
  "key3": "4w4wLtkDyaQRseFF3maBbcv6nV6K2wcZZ9CFvV8ZQ9wPrNAfaX6gc4teoKd2RaJhBGoX2xgmShqrRyKkcmq5b9fx",
  "key4": "z1u9h9XVbyWM5jnsefNqcLkYxB3ab7zmRTmzteEwqgrZVAp3aRaGsMLUpdi3xB5W6neaEpETf6LEqT6kYu8MLZt",
  "key5": "nTUrxnBnWZ7yp2noDde2rZx26vvvx4PrEy8czhY8npwXSiCAbxgyQEweHdQ7bAWVMvASkwZChbkuKzMjpA7QakS",
  "key6": "2QyuTRBQoezmpoCUtHynzHrw4ky3KfbyFWi7VJ9Jk1sFM68CYupSsB85qCbADsiuAMjkDT2dvqCoVGZxarHDGkwZ",
  "key7": "4eXbfs2ZtMQsiJY5YzhTiZ3psFsSTSoxbMoRaFwLez2rm2aeMQbeiqtXz6Dv9SSV5cRMCzgJayYcNXCzwRfGkGxp",
  "key8": "2JEjS5CcoF7hBDYcSw8AEEDmv2ums4RCDHUXQReSsWMPiGmND7ZQF5gpJ7cKQjKf6h3FuZXuKx97syJbWofAcQx",
  "key9": "2PhHgrx7J5595jr9gqHEsYszFGSH6ku8xu6L9R8udzTJmVXn2GTHD7sJmxUrSiJh1G3oBwMjgCNh8LVCxRzKWiRc",
  "key10": "jN254eCsi4Ehdwx4NPV5owzCiZ4EEM6UcbDMMzNyN9arcCiBTM1RireExfbwdZDjXFiKJbdAxktHka7MwHWhGi7",
  "key11": "2MvCewLwLbasPBaTLHqf4baBj4k1ei2jiCgQ5C3QyLDpHijwdVXUrGyWiyECriRdFS4riqi8DuQGRKavq23QZkbB",
  "key12": "4GDQL2U5HQ3JiNLm6PKFA5cuZ8kWFCarSBcXw5pDzonZQSgZcuEXVoo8oaDAG2pcA2zT1tpoBtypto4PE6yaV2uK",
  "key13": "4VWFWFuRjHWzTcR4picoLYYGVm4cxJGKs9oQrzWeXHSuRmeKeKCM4So9FHFEj9AxfNoUmE44ZXJpU3L72zpmNvw8",
  "key14": "4WhKFxCXV83pD6RJ2dna64rxk8oWs1jDbEnXhXRo85QE2JsoUgkgCQeLxU5x3Ka3nR91kV6DzAQPgxhPZYLoYFFc",
  "key15": "65ACVnsRkvdwb339bEs4hcEHAtRHfbjgmNAdRtxP4PWsNynFSYwrUqaqR4y5fTNzmn17jQDD3SKrBMc4F51bvGyu",
  "key16": "2ZobvY8jZP71AwghyYHV2uuqH9aujeqQwUxADHVqcfo8pnwfhRuWUoskhUgFMfWFfyNChHXSGTWeZ4jN9jL5aftd",
  "key17": "2hFQmwzaqEUP2o5fHBUY41HWJbZgwenEmQoa6drXH83HFUphD5NAqg3cFTjohQvrfHr7yJSAoQPn1BwGriaEpc5v",
  "key18": "5aFEPzMewPHNe3UyJ8Sh4i4zHpFkip8s6aYbPJiBxLCCgs4CtMHXFUB6ee2ZwSJN13DQ9dCs7xdjS8doLadp7Fd6",
  "key19": "5viin8iMRt2xW4zt5mcUR49m7GdgoEManPKbHyeSWGbrLyL6NampyB22LdADJwbJmYdKwNpnEtSEbpBBwADcaQQe",
  "key20": "32Fxegm6RCQwsqnWtAGFKo7rVZPeZL9ciXvE3NwvXfNdoQ5FVaXCDSTiYetPnmujEbBhDUBmCYHbM2KSakBtqa49",
  "key21": "2WW7npDYrzfF1Wp4DdpycKeWWo1wpmkMJ1vx37wNX9xVxDvQMyA3tuo8FWfv4frXkDe21fjCgssk4yJ1CbceDEE5",
  "key22": "3ygQdsu2MtBW32SStYuXMUmfY84P4pWQcMJUxmoxLFFNSnkZ9Ry9MvDR7L9tndwASCm4x9zZFt2Cd9FMz487c7Sw",
  "key23": "2PSxozpGTd2CXHM2ivKxVJN33M6xqH5JjDhMfWPPnZwKPSZQrSKV6uve7pVw2jK1JaHp6FwU2y8N9xMD99iG9Epb",
  "key24": "3aSy6U9WYPFcchvQkXbMq9bWEgNqyKsgDiQ8GpwsqudZVDFhB3TtWGTFTAN9yP8Ye1hDhJTuRs3S5K5FNMTLY7eK",
  "key25": "4HBSgcYXfyBu5Lc5AndrwkBMZzFdnLcW7iNLAzERNqY6oCXPoQ4E8e2z543vFsGPFqUfwgagVN3HcNTUxP2K4RKs",
  "key26": "2EJfTw1J32rY971vQ5PdDhnfJorm1kkyzhPkSonEccNAjLCvYGcbo7UqKmLL6UBxEFQNZ1FtthkA3hvjqQ2ce72e",
  "key27": "5Fv4uwXBs2XTXjED22CPa7WNUFjaXQ2iM2R7dxmDbTY9vK4TvtCZXsXmKR1gVVi1UzGeAAyQMY2dos8FcZmk814k",
  "key28": "2HUBFgDXUbqFtD9K4fE9oVf3N6wjgovy5vntVwTA8ccCiM8LnsebSEmACStKhtAZevsF579hC51pLZmLhRRBGJHP",
  "key29": "zi1y1iC5N7XehyXEMnxQCWoYpfMwP48PBXT56prrogLjvhLRGfyzVudrZFyZEDqf5P9KX549i2CHNFRqFM9hs46",
  "key30": "2v9gAAA17cxmGyYFeK3FRbxbjVLHYrdVkpePdsxzUViv22EZyTixhs9RwBxX6c5kukv6uDGMDTWqKxrSFpS9xdS2",
  "key31": "65zxxqnr3LZidT6bcWEay8CjprxWNPEj696M1t3mUsRbSai2oLtSJwWf1SLh2v2RD1uzUtWj3BTckDdqgW1Tmg4C",
  "key32": "3SzcwghWbCniJjr3SgoG1An78KHmGNsVz5Frq7UYUQ5tBLZWoaByRcjJ4q4p8rr6oCQcRbT9rQLRXXKN3KJZLLdB",
  "key33": "5xapz88QQUj8PS89wHpcK8WDJeH2VF4bChujWBrVmTVS5NFaMEPssNcmHe2dQRsrzH8hWRRZiezAZbzZsk442EsP",
  "key34": "3tiEDd553YJVXLqpL9jpUCx4fJVXuYPkLZey6pzxGLY7QmBLVHSTKU2nSgeLoTgLE3sJoZyqMj8vq1Y9EsU1yKqr",
  "key35": "4n7SxukvCLYrZLr1L2zqKdfgQdaFfJQKa1LdRMWSKixDqAXwgHEqWJFCUPzG9Pv2asvQrSY1FZtcajcsLJdexmdn",
  "key36": "4GPpXtbsqvvLqbdE32yagpspZ9g56MYpYPhNQFzcc3CoF6tBiawj13AJDoLriE8zAGGhxgLbCDN5BYdyGDq9R8sC",
  "key37": "58md7eTTxZHU9vnmjg5mREE3AyRTUaY6wTKSfbTVeB4P1memHReJ6WghprQmH4TwpVLvth49NUs8pGZCQJPLibn",
  "key38": "zfC1to2DEPyyUkSTLdjrVQrmcaAMRFersq8nQvCyURzmuup1o8jRTmBU2x7MzzfLJ9QshvvG2sq6VbSgT2Abf1P",
  "key39": "4sqVbJ8q8UBjmkQ15r7YJ5EasnRFELBwTLSm1npLdZjaipNQGUJZG65jntMHR4H9aoQfdwqMbZYyKxvVgLAAqWSm",
  "key40": "2NqJrHmsRih1UskCvUATnfQ3pKsnPDeNQ6qgJrenGyyPDttii5uvprxgWVxRQw48582jvZ8TKx3kxkDRNZrE96Q4",
  "key41": "z2NbcW54Z2FgCkRs6aW84QTMC2sNWhakeXUqBPCUU8PpGrwxoWzmyjvRTD9WJMMSG2bPAaBvaoeHNXuMaGLn1cS",
  "key42": "5iu55ZAMXuPCLeQEqALNc4GHYpShhex91jcVN9aANWBX8uVYuskVBxCkPWdBFjca6Acju5PaeNgcWxoKrM579vST",
  "key43": "4KJmCrG5vYfWLW3YHnm66GvKYJGu7qAgD4UHTLLaxVMUuc2Q5So115QGjbskGjMdLwtyCZ8bsAEbRJo6bCTXduw1",
  "key44": "3jvCJcWbTdcYCge1NXGLM5c8NY5upR6FJw2KYYjgaZgXkb9jt3TczfkJHRKrKEnBcgGrqgz4Kz7f6Ziaicp5T6Dz",
  "key45": "3LXwz4UKesTncnJQBwKrHnybYDqJ7Xpvd64tdxj3kuWZHWnXDwXhQphn9W4zUSbZjXhiqgFSiiNgVfYCLmbvVxuE"
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
