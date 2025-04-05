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
    "x7BYz1RmBJKoKNjuF1h1SqoNWFDdLSdK9k98PPW68MFuAmaXNNwdoMeihgkWkVaAcmrJxR4y9R2yKdotch1D3sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2STtVYFgfjR9WrR81A8di2wpsj1yaHzJrrjqPFd8arWbYfL8yM94Vc95NchGfYzxeRdWnioQeVPjV6dzNqJxgiXn",
  "key1": "5djniCnMS5ezzFizr43b616iBGTU2ECjausqJgQxovZqYFaVFXM44gAPHtr3UFo8noxaSt2kfGgdaLPjwoG9wHuh",
  "key2": "4A6VcuArATdW5a6V8iJ3gyeL5DkFMEtduX9Vw9cCB9iX2MYuPbzp63fMX3M7iKi29WKZBp2PSS1dXT392tuC8YUA",
  "key3": "2bK3vLwGYssr5pQRf9pPPA9XU4xXki4zfK9eZyaUo8MDRk7pAcN9jQX7Zvh7KhmE1NZxAkqfXcoVfhMLLXpCuNUq",
  "key4": "ocfLHWV8mTS7UpH49TzMLYV6XFZbc9pKPFwofUuzrKgLGTaj6j9Hx2x8o8KbJZwvQ6srYnb5W4Da7cY3bMxHLdL",
  "key5": "4PcPmf4MbWEFJGmgPu211AGvS9CaLZe5ZJR83gB8L3N33dBawAnMvwdZCwzTWYE29fciFXzPikF6pMbNJpEx99qT",
  "key6": "7VCyaS3GKi9nckpqjHjESkMiTp4jpeBxdqtWcN25nGMSpaBu754qBzSDUdSyieGwkUiJ16swyvLMESWPyAAodSU",
  "key7": "BaRkcxNybnNFMeBaspexj3kngXAhEQqnaaGa9FdioAHmAFkSy5NdCq4kD2meYBBNByURDtfUsMeqEAGWzEGxvKb",
  "key8": "2RpYHdVx9uYJq1Q6KYSuBS3i5ryLHSrTEaFMAoLbf8DHWWT6T9uFUNSNfekymmoMaDgkJ7FZADuKxNfAZ1kUrLdX",
  "key9": "3AH6VJ88uRymPgtduubSaNGYq44sp99NX4RFMEfp74oJfAV2ERCewYbHX6B4jG8K6yvomht9UxxCAGpGw3jDGZcz",
  "key10": "RCd2CBWzZNsmRcce2dzqNr6vzxhXv9ZaJDeYjD2GrkGsnmVdBAmbfa7wU7rAZEECba1srYYWNtYBujkUfZsNYbV",
  "key11": "3ttsZ5sKSgSSMaK6xkaBn4jgytFWrwrGj4vnFFBhhiZZR8JfnGRgDhBgk2HKphaeaWL1QdxhAv1Ff5JYCxxjgLHa",
  "key12": "4ZRR6BfUm4xThqnykFPVrTZxubVvkPNd3s3WbEcATQbaBF4aTKXAo2hrPC4JGh4QwNqThVpYdpSvaZKTjiPQ9MbT",
  "key13": "3y3Mefu1osVyQqjPYHRLgrAvkow43SPPqvQ1q3VBzcNKy4w867haMKyaDxed9QU9tuR8MNPVNaEEfzSQy51ZXbk2",
  "key14": "zp9UgrKQEnfgxD1pb1n9W9d7y74jVuAceTGktmcPedMSqSSdFKfbmnKbAPRJVsfFPenWs7GAXgbqpwapjHHjzNo",
  "key15": "4J1ZKtFoPBTDNsMGswVot4TToKBmJ5fHQ276G1BVPm6Cg2yDwUwDobhey1Ur1Xi5Nb3m6CDRQD9dzTpYyjycNvAh",
  "key16": "3wCeQ7vCij1uKHwxWT7ayMvpVDWd8sWDE6oUrejr3Su8XRzANc7MEzUwfNC17r9pNnhb6uvQBCLqTvBkgkrfT9pf",
  "key17": "4JC9Zhow2QvvnnDNfQb4UtxVBA3HsrAtxpbvVbUXqHk7XmzTGvJDrS3VGdo9wPtPZFk2C7KcVcQ2oFn8vaWoV58z",
  "key18": "2XhRszFKnCTvhwBHnEWaKfJrMEKv2d9ZScLRVZ9Awj7pTWgkNmti2M1yhkBqH5hV5QCrRqkzSdGLhwzdGL8eXLXr",
  "key19": "3S3HC2u1b7FftUz7RvNy61NW14kHXYjfUrgRD5qh9mkz4voyEpfzdJfkeRk5xygksLKRNK38b9B4s3Lokum6z76i",
  "key20": "4sxCSpJqnQCagTFLLwWVXAKSunoWHqS2F7m8NX1dsWXiAc7SEnRCY2yZ4b3qfdujtx1rodst2xWcGrHKEesKQfdK",
  "key21": "2vUAB1NeQYzc7EgtMJCNJyF1pXRchPRWYAPD6cCzM2Ci2TZWKgqpAbV3HVBcGGx1suWPParQQ1YTpTKJWnAkweYR",
  "key22": "585rvGtbS5BF5NBrCk1PsXegkgaGosuSYUmGg1LSPtVDYaAzikeAQPAdq9d8obvKibgt3R7r5qAvFZpSnb8ASpAz",
  "key23": "59n3J2M17PzjRnvZvmWfYvQEfJiCJNz7UwdeGeSaqhx4yiPaNEViff5W8y14DhRQurhppC5iudATRo45hFaSWhJo",
  "key24": "szU64NQZPj1ns6anmPgqBfUdteZFPNw975KAUiEvWz15Mr8bNEW6NHFHTcq2bBMM1rUoRmry97v8ftodc62XGWV",
  "key25": "49hcGUu2nD3UbzQLfXhRGNM4Lu4YhZUJihY7XsPVjdJfDNnQ48Cxv7Jm5jJi1yY7E2Rmg8gjmm97t4gBsiZdm9xr",
  "key26": "nGfwccMaarrMEvcyLkvKCcQcKegCWXPwTm6r7R2TfC9q3mM1GBCLbcW4tXFwAKXm1urSZbaWt6i4ba3UFc1BGjw",
  "key27": "xMeQmSjb41mnjFCWM6yC6pJujEhiCTTppxmVkEdqSxu1UR7JeyQ4j9S4ju93KxJcV1PTcxHDLJkNdwf7k2nn5CB",
  "key28": "4pnTfp93tKiqbWqEYnUkX6CMB4oR8hef31Bk7iBba3EYHwyiqpo24iFWjfhQ6A4EF4Ks3jZYQGm4MZgeU3dfuiJQ",
  "key29": "Q1GJfQdeGrjA5zKSe8pPpV1WepzF4VQCLD5Mf5p76K8aBtbVxX9smcdHs8BK2jz5xNGeBZzSwr3pdirGWpGzTMj",
  "key30": "4qDFzM2NRA2ZGPbbnLh8FwfnMEX46SNrbP5xSYQ6dpQGM1RAYsoeUbp256nLa6rj7uYo7ATTWQ9Wn7rHybNWGgXQ",
  "key31": "3V3sysAYdqCZWst2A5iCLnL2wNJsJPt2hhy7MpK6e6UjkrVLXKfS31gmyGGBx83nrJB3N7kKpc7uBSjqgUcYmvFY",
  "key32": "5odsyQSXcdKq5DEnnBYFFbjjZ2FaWsa6DGtB8aFGk4ZLxpi1m33b8rqPhDBoQshpmr473TcVH5XxyA13Jt53x7F2",
  "key33": "2cTvvtbkxPAp4YyhNu1F5JH3W8fXrE8BNKLtFDKAvonTseXBovCEMTeNXuD8oGrBunV9JnB6mhzZLLS4PGCGhs4Y",
  "key34": "EUSzNKguQQTgCPKCj45NArWZhVxAvhUJp1R7hbYCq7WM4ng4UvrqYSHkQwfdp2mnCb2wzcAaRyGNt4qPkZB4vEz",
  "key35": "5wVZbAZfGkwzx7jAUvBW1BFgWaW6BrJCmcZqHSZzRZJzuoxKdoQu6VEKimYQWiMJq92uDt1LoTjioisqXZefyZaw",
  "key36": "4gUAk5w5BV5srugMk9qGhaQCNcsX7UkBK5qDA68AbU2MwLHzCbiqUSvsSCzRTvKZxc2ZVpXp7tJZxZETBTFpU4CJ",
  "key37": "Ee5SSBKxFkWVhf6R4qDoyQGWhuofgHmPBjTM6L5uMdRQAwDsvWNzX8RTxdN5dgiTgWhnrseu8eisoxnQdPAdpDC",
  "key38": "jETQi93YG7c29YajJmqeSKV6qmi9Dkx9tRXj1AztfKKs9jyWwsmZrAP2NB46LExogqAdWfVkbMvmeHHw5thZF2k",
  "key39": "PpH96qETjMq6ybjGBFSkHvqD86SzqF1jjXRXPpCBm849RrBferETQ8YKGPghVE5cCtAAAqqefkmtDz2K7dJVqJy",
  "key40": "3GmERpc8xMniuQdoRgztAebcd3BjngQHc411ioRyAKJtoodZ3GcZjACLfq171LE1wDFQBC3PWpFgx5aTGdyagJtQ"
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
