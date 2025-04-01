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
    "29EbHWQhSr13WLByfKJooU4AxaY5W3CgGis6c7yMkHJUbW3KN4RRjvsjJ3Cz5sisMb2nqT7f18jT265fLAh62JqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VXx7NcN4yP1CDDRau5UhThBDxJiaS1eUFWNzN5LwQiArh3hWcUVueokvuuAVurdgFPR8mgyinoRKTAJxYRsx7mX",
  "key1": "zfUdCU6dpHRbRDq5gNK8gVWF6JYF7tM2NREzHKwWFZdZmnbe1bKWyV1V3RCMiAmaNZ6d6rA5RarnCouFK3QGoEU",
  "key2": "2kqG6Q6ifsZKnWDTfnYFYNiCpSeatq2seALKq1P7fhzDjeQ5eLocJLGKxmnnYug7dtm37kPQvj7tRHXxtgZHU4Xq",
  "key3": "5PXiCXaUFuhMcTbBSmeBB9QLp7uo8V3zPcgM2CtwDAPAp5PCqaCTwFa716TWoA3vEGnJCWuFxYUxD2sfWx3BcKnC",
  "key4": "5UyiQcU2Q3C5kUFoP1J657sRKAZNwN17h8eiXzFYGhNfWFqfqXbNQWrghL6vEnxw55u81dmvxp4Mwct5GUGyrCne",
  "key5": "5iyhDzrf1h8oxyf7TEbM137HDcDZMtfnzxoG5eb2kiJTQhSy6L2gU5UvtjoAeXGM2bQtYJMpNFEcWdGwEwkm6WCT",
  "key6": "2bAs8qZhwkJXrH54Qf3HK2kLJpHuVAVF4N3PSKe2omyJoeteQCue2jY56R6Dyh7rbMbSoie798rVca2d1MDmNbbp",
  "key7": "2uQt7ev65MYxmqPhiU6gBsixg3BspR6wr4JuckGpjxmuWaXT4QfQUExUXJdvt845Jc9S54A6MJ4Evf12GKVro3zj",
  "key8": "4i7fJNTZLSFd4BtZHKVUqRG7krVmrAYAycMU8DsbHCwG9mEeVNFo3utdBpqZjYHLDeNWE44paKeQCmd4J4ab6Fjk",
  "key9": "5H8kvaJg5GidUhimgbouMtNabyz8h89KNwAqnQvZeTWMHXoVWBE2xQRbj5F2xRZXXZyHSwH8iMVMtrAmaw1gPDEB",
  "key10": "31ryvCLfREjGALfM2xkv4No938VmCe3kNnnWZQz4LxdZdqMC6F9xELWSCettHNEJfLHKk6wvd49Mm9M9cb9LU8ng",
  "key11": "4VxyApdNDkeScX1SejWSGqCyQ5G1AoJhnmkphfw63No9pZx94YKF4joBz81V5kUWmL8AfuohPqx1bGmYHboxvDKN",
  "key12": "ByDtwtoGEXddsMHr3GzXRg67yHebBhYBsjgkAmP18DeFvMxevMCFFrJrANLNcZNawC6BHxxSep6FY7U4NhH3xEq",
  "key13": "5YpGCYSPPf1J3NhdVGrnPzAXPLBRqyseZDs9c2poEaKpfZzYeHV8cgPh3kYZPvr3iCf2yErEh3BjcJdP39iPoPyi",
  "key14": "21y3ZmCKTMmrenD41pXTkLmvDHSbTcHvkycwVKY1jpwMxwapLZmcU154P4uTsnj7SX4RKkAh9PJtyL62CqXLgT36",
  "key15": "4FYZGikzppcqCgM6qEfKdLn3wmGXWNRt4KzztfkC8C8hsEogHTyM93H6Z3vRD8rw8Q9eEU5z9qhcsHhLWsWPZJzo",
  "key16": "ef6iSSQjLkcqsxTFcnPMAbZhev6LdBhadXZopTDBERccXtVK9QnDX2oGZCfZJ7qC3PzsBvKgWmuekq9dbTmprzT",
  "key17": "2p1s84o8Aw2nyzxoazutx25H2emJHzpJ2tfoLWbdp9e9FkH8tAcJkjqZnbcoMbmTfA5XqHGTpREfntSeh3SDPP9e",
  "key18": "JexywQtrjTaiepj7xfQfHhyJmkk54QofUquRxQqx8rhs9WwCQceptj3MYsWZ9R8eevfbymWVaiPu4hsnAseaDMV",
  "key19": "4PfZFg8tnoYAGdSThd6iSXoFxBGQ83r5MPaukHtA1n9KrXiMMHEk8z7D9QQ8AyhHu2cuHFKJ87aLqGPEBLBCvoKH",
  "key20": "cDpFjU8JCrdJcL9qnJ4ugMxpMP2weXQnWcLamTVHg5oMzDWKLHbCiCSrjBcxgu6YoovYqxBnHaoPEmm3dDXCa7g",
  "key21": "5QMUyzYJAHmgCzi5Smn7QZeiuJikbU4FUsVXMpwAAquUeW97gYnxqcbQRfhdYWyfyR7KJE92g5YWLDoGKChpDETE",
  "key22": "3taTRekqvU2G7GZa6S7uu3sgn2ARRP5v9nbxNoozSB6ZsQ4U8pvVUCDYMhgcgXXhwyQCoU5gqJSXq7V4YiQBGb6H",
  "key23": "FJ1EdTsZtHTnuNGuRTN5SD9K25jzMbTMNZ3kmTYvcKqBn4Nzc1GVTVcknqKCStVjHq5yrNSpShzjn5zYmeARMam",
  "key24": "2uqKpXAW1uKQjmiiDtUnBBhDQGHTs8j3MHVpneyqXCtVZSBtUFUAtoH99Vs4soXQucDmKTnLhgSP7961KskbWESa",
  "key25": "3gdWzHyx96tpVMVa2RG9cFcs9b94PopmCTV6ZrDGAnNXEkWQS22pFwpg6hXqnCSECqqSvaNNgJ8KuoFKmoP2FXLY",
  "key26": "2cGSZXu7qaz9Ly3hDMbkDgbhsJYfXsqotA4FWrCHkx9TJyER1wYKBeYfJMW8cC16knBxkVk2cwhVUfUPtgLEU4SH",
  "key27": "Ac3fVWEFSsTtzNq4fWS84ugHCW1Sd2E7RdY1wNDrCMKcaX2RkXjkZBbwLDmdGo2r8qMASKjShCAC2Q7con9memZ",
  "key28": "3XuZ3vqcRfZUpqMPuywdPdCcSrbfd6UW4n38oRadBzKRST8MHzHWf9QEq8tNgTqqdRsioJwdZY69cBpHnZGLVq1v",
  "key29": "5NA2qcmQeGw53djPTWmXqwuKyu4VCDdJcovf97nEntRgKYy1d5NLmMioLJ6htxSMnQbZ7fnoNnuTw98KhnM8cgvS",
  "key30": "5qeRXazss5zCquSpDiWs6WSBdmZAebntXZSAYD4ynVZYP3ipc65dYRhxaeyNExuhfVBsCFAB8ceR293TVjjGiPND",
  "key31": "5QcEoF8FUya4QJy5pXtyNxQWEVhRoVcjYnHh3ZnA6z3PKoQqiEzoEFB5grybiKyuVxdE5bVMiexZ6ULPPM8UCWdY",
  "key32": "5oMFW4fQvEgj7oBVTRHA2PuAucqLgTh6VGfJxNedQbe2BgoGrKMjb5MCwGgP6CgAYAcjMh1QDorsYPzk88vDRHnH",
  "key33": "5YXu1U5BDm2ckta3bUmuycnau76AtAArBgfwkx6MFW3sM4b7s1acMZsERithXe3PWtLUE59zxceXzJpsKCkrqJJL",
  "key34": "21pi24Rfg1ntjQmmTrGe1ivbo25dshA9c7cJeM2ZVhhWCXaWuSbMfMqNtpT5A7ngVJ8aCzGnreHWSjzvQ1CAyzZS",
  "key35": "h3DTzy1dm7CvU9Dnjx8XN7YJ1DizfsaLgXffCPBXdHfW2koVjwyNcFQsuZg97ZhkhEEjU5a236Pt4YXQdBY53m8",
  "key36": "3sXbvU5kth4kvR7fAurcjhxUxAFYsmRi3BwvFnTrDeaWxB6QhpqE21kgSzj3Qj41Fjowtht4xwjczMWBuMdU6pW4",
  "key37": "5uDaBmVsvNg12tLPgyN3vybY63y7ueoWLCPHf76GAtQtv4ZtsiAzhNkYSumy1vNGHTxRgTp5kCNDUjTuhz9hDyq",
  "key38": "5N6mHBHwUiD234AesH8mzmKqiLLmvPCDiXPxmoahq7faDHWn872EvpYv6gz2iSqRg4eYgPXheJQv4g1JmcyBHA6o",
  "key39": "3rX1moffGiHr7CwD9Vaow7URxw5XbYCSy4xpp6WHMS5yZeRrVrh1gZXmXYvmHUZVfYygKn9Fa9X1D7hsTV8D7jfd",
  "key40": "5nxCtSgLeemRNrE8jCBRUiN72PATF5jxVNG9tW5PNk4V7e7t5fJjev13JyoV8bmJcQDFyNU8KaPVnmsm6pmN4LnS",
  "key41": "5C3Uh3szJ2MbdSfnrdrMT7UnRLdFbWDA44QNyfHLMnwDgWk1Rxp1PT2wEr9BwnxJsFmUSXTrazk2oYFvr93JQRGB",
  "key42": "4u8X2CCyLhxLyW77tMprWhY6nPt3j7Loskg7yGPpDfyTT5CBCpHGbjCq7ERZQYpdnoVf7njngQjPWixRcbz3mAD6",
  "key43": "7VNU6r2PsE2QiG3dibuUC1mseqTTYRWaAav6axnDDqR4dJPUo97bG1Lnxu5PwKHiczqPHcP4tKjBaozv3NXJwr1",
  "key44": "9gVWSxe6vSXsHDRfXbvFgpPJq3jWWgqeiVaexSMfJyFaMB3M6WJT4YzoHii5arZdnXvakeDLEac6GCG5DmyX7kH",
  "key45": "BNsAkWzVas4tc3uXfVf5PtwoDhSFpJCQo4uPmDw8uNidLbuAG6d6uafFeCtjBLNJHqrMKVdCoc1sHD14dcLZ9yX",
  "key46": "5fGTaWWwEn3RYBqS7xC6TjuEzrjpLcvGcTbuDfe8wGPjYSygFABKPb6qhPLxY857QDt4ExQUo3UqGJyD821VXfnX",
  "key47": "2MYGaFBP32peXSCQqDxc6RYgahLcWWpDMyLMAVT7oRVFSUFwTZJNVVGvRJHVw2bpeEbq13gFJqPSe21EtzUg13iJ",
  "key48": "2yiQxv6tT42eydsYQ4AmbBHQZjb98DCzbjUwrk5Vuis924bhUCAu3dEcF3T7JtSyttNwrBRaciiZWk7meo6kCsbB"
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
