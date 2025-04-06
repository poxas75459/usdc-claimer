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
    "2XN6dPiyWdxhXvPNU1C6TV2tTDnwZ5NrZyQ2i3aVEkbxNzysrv5EVrHitXxeyfTF2L9xTE3au5pJAmtm3dMsyeA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WdxUnF6NYfmHi2NUFuJDgZCCNctqMxhiWm9YovuLThQXU6ERTuhAmTP2eCMAxhm7R4kQCMHrrJaT2d1TzEZU2hw",
  "key1": "5Cp4dfPmQ8SmoicAPGhkecjgUuLKcWZfGdBGVsBa6849ReCnCaCSYJBBek2wCn6qpipvYSJYyooCfYx4u469Khpb",
  "key2": "3SUKFG3tBFJQinXXxjr37R6tC43m6229w2xoQGfCcnPxKFN9zDGB4b1ouzgskevxXx3WUJCn8fGYj1VX3fqZUVUc",
  "key3": "5wJcqEXSe6sR9gZd7xm3vRvRJYpNdUiL6Y6qehdFrvFYaHmXNyCUFMxyrecMZFe4mmzi7QmmHrtBEbS4KgK7Vvj9",
  "key4": "58SkajiaXwiV4S6gBR3BhaSbPKijMEbhvj1Gh5TmimNtKy4QK3t2g1KeS62JJ28T97MgWCwXJsdVjbKzR4hZ9ydP",
  "key5": "2Mxnr9EBoz4HgEH2sW16QQjoE7zF3QjfoAKEjRdzpoQhBcxrvDtQncXzpJUfGpLp811R6TxacK8BomhVzdWrHspm",
  "key6": "42gr9LAvGoZPiQauAj7EyQpgiHgq8v6dexx41xsTTby38qSAKFivbWb3kigTG92QVhm959rCCpaWw9hL2oyYVcxk",
  "key7": "5vGXYzobptc93MtZhJipWmd1wAtZeKPts3Dmm5GaikSxDK6bqTkx5TsvTqWwCuqmkrPYeE7XFjvirLK82C9g6NvL",
  "key8": "2YHKW9royhFDB8kDy46CxdKsTiGPvbwy7DL1YhbZrzxYjgMJbtR1RGK3awz8hv8yxHSN1JXxEvHcVv6HZSwAfyjN",
  "key9": "4DPNf6CNvB2Lih2KkdZHExD6ybvWtfZJv1VgjxJk6y5Fb7mZ3NCvcbXPHnML7Stfehx33NkURaCrG8tRKrLiEpi",
  "key10": "5EcX2tJUyvttrR2i3k1Kt6JXdNb7Y1omumTAWHV2uBrEXgZNvxHfyKyjx7jiqFKEq2GM26an4ZT3s8e4tb8EZu94",
  "key11": "2U6hsKg6YdyxLT9exMjN3xGAuL2s23Ukt6Z1eNDDUAAyFDzM8fqMUMJJWS84MVC1a3D5aoMQmjUpyrP595xYm7jZ",
  "key12": "2z9DCMjB7V5K1FdmhSuYE9VejBa4ptRzgbwYb33yYd7p8KNc5MEhLw2q1JEAikoggzjKmrrF1YUgtvko7qSxhRo7",
  "key13": "4HX1ywdG75Tk25zJ6XR6FGmVLPm2PHTvx8UnCSdwoFvod2jinnoe79YA4j4Z3R2xja2n8idCA46yDf9ioRAyYNjf",
  "key14": "3jfFTW3EgBzaxbX9h5ShiyGHNSGSyxe8kxkA9KGS6iUPXAX5qwq9pxf14GFUqRhXEBpQkNRzNB5uf4opqgdDS7TE",
  "key15": "5s3y74GUBdNNW2xiGu9A2r4vEjkuzeczFjxcXMxtZmmgUrLdDNZyWHfPGu9Mf63uPYcD7bv199UKd4dWSQNrjpC1",
  "key16": "4UvPbymft7ecnBafsbUA53kcXRQeNhjLy8kZuD9QyN3Lvmdc7A4j5gya5G2ACeF9H28zL8jGU9PC2EXK5dRCmauY",
  "key17": "Qz7YyACMKmWgubja21PQyu6GSJvsBb5ocpiysiPvmoV6HCJ2f8EKCV8kPDH5wd2EYuDeGtwXbySSHCeLyXqTdus",
  "key18": "5CBQe2RmkPycsiB2qUQW7BLBgLSVYYh2cQ111M5q7bZ895Ltzi1wb6yjxnEfXQcwVfGa1jbb5xBR3A6PYG3Sp9R",
  "key19": "3uBGAvM78xzCsKtpMCnhdpooNDzH4MF71vdpoKz9r83csBjJ3cbmnk1gVZRmy2tSjC4JfkCmecknx9nNqGRJcsNN",
  "key20": "65V9yPh7ecYHZAWQyANgUH4NmagifBBnKh7FAujTE4AFNrJCAh5GEmdG84MJ45KM6FpcTMz6bbtLCGCLBBsHy4FJ",
  "key21": "4873wRN1wc4RHfbRHrDcSxx4jLEq329kT8TDoE89w1DcnGBEEU9iZT2ewNNhgAiviCoxwHEx3jZg7xWEJuYxcVk9",
  "key22": "kM5yTyuEwhmbUKMcecL8M4oHE4ebnxejVWGiZSwyXFmog4RWiAPEKoZDbvr1NnVRssJgmMwmzxBxWgPahfCTCJL",
  "key23": "61QbgtdtHzeHwm9rcV6gHiSGhMwipLhboseNEs8tjHMv1KqnufsSe6Rqfds3oUJBuDuDiXSB1BQaNRsftpm6pfaY",
  "key24": "2LzJ1M2QK3EwZyo2Ae68SrMHXfrUDYMXwQ1mMZpA4Ju6RcVCVkh46fBKsyBcgN9A3epsDgJYZUpvnagt91HCk7y4",
  "key25": "4gCLUMXEaXst2c8gxaa5ehgYMUnjYo9raGVHcuVtnSqUhQwTxzKoMbw41WxjU45yx2GRSqjDbx9CkuJWXUEUfKmr",
  "key26": "2JvuCuRun9QvpMgDmEh8vbdz71wKHvwrEJiVJNanXMD3YLqtY3s6cTsAzNBwmZRAuRfRD5wg4cyDeqZtHMxZuUoq",
  "key27": "5tKDxTtnBAZJWcE5YUu6U7AeRXmicczsKSYmiNbQVw8K1QVUgrhpubAGQGA9apWTrN9Lmjjg6zqnMbVe41SS8MRc",
  "key28": "2mxc89YeNoiGziFMAQeYsuHjPk6MsuGiQcMkPwPEg8dUMLo8JdrQXvKvRNZq1E2hbvj5TX9GmyMQckq5V7hCcMky",
  "key29": "uftbtToZ1UgnWZh7fsmZ3EmPqUKoY7YAiDD5weQYHeGcghHAoHiG8VrZRBwKDBYhmCKLeYSGzLbz3xFFv9Bs5PJ",
  "key30": "28Ky9k7EAhWNquATzsEUbgoRfuqqLu5HE22XMfc5xdzmukyitFzr1fJG7wHAjcHuHz9BxzFydn83pwrFfWUAnyrj",
  "key31": "4yEtWACrJBjdcopbweMJkRHLJSAh3g2pCcfNPjUQapTX9aVJFtbkaJTLmE3J7SdUj9h2oNNWZNeNa48Vv4nJZYjB",
  "key32": "5WxcbbZMoNeFRSqSV1ArtRuiY4VDU3kQKFEH3y6JNqSno9CLp8bGdPjmPrn4QoE7wbDXW6KCKM5gQWQ5AXBFvXPL",
  "key33": "2YmbakCr8cFvH7ErUBSuhqB78e72SAv14rdCAbPiQB3tXKBzUp9DcuBF6g1G48QbhRSjjB7rogQcSLtKEQJUoH2h"
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
