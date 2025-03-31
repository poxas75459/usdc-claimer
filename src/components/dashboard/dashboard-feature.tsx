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
    "44PFgHHPpWMDqq7mwZ2p8qK3vXFyQjm4774YW35ouDVMBzzt2f6QWRh5VG4iV3cMmpHfyQ68EAXuf3wMGLj1qxYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ziJzN4FfeBfyLp19kC6V4cDiVqhSPmrUsHtDKje8q4LRQFGxX4sAz3kpwaou4EZU5osLP2ViPWoeKTxKDaeioxd",
  "key1": "kfJoXatjXWnYes3LaG4z4CMg8eAZXgVHy6wWdBYQgG1qHzGgv7jZxHdKJyjYW5LgDdPyFuMKWwL1tXFhp3N13Ep",
  "key2": "LSeLmZ9RnYV3vQ6Whj6zoKa5xMXmnzJuLAzqpJRJWHPL7LhYL1hMMHBgmEkKYdKsA6AiiNTmzE2u8QhMPQMKD78",
  "key3": "48V8zsH1Ch65qZo8UXbWjpcS5yvDAFRXg6636ENYEtBW1tPuaxwNewpETvghGchBRj13dUVCcXpqbEGRAYsuiVXH",
  "key4": "5s2GcJwNq8YwB4TjyqnBsc8maA61zMhiUN7EHFxwW4vzRRpcQGBz61Hbkh4TKkPUrLN675TZD978CiVpURb98aUz",
  "key5": "2yNef5iCRibb7WFvuEYjLb2QXUBYPeyXZtFsCpFkGk2qbwQZGCAz9FMRDzbXtf5kQ944KajmZmLjHiiRJ2vT2ydf",
  "key6": "3G7CGE1iwsAybd6Q4aAmzRam5YwxCZ1oCDuzTRXFEPZDpcj2zGXuVwbwUrb6T6ftp2yGtWqqPAb5A1k4LbdEAaLw",
  "key7": "3etU4BRM2qVwY141oJVMJX2wPdLmDU2CMhUA7FHJ8UwTFMKg1nYuWaVdq893wQfXPjv5G9hP1ZAnqGY1VFTs2UK5",
  "key8": "5kmk4X3sz4eFuj41KqAfGsjr3ajkj6YitYMsKemyQA2Mcze5U1tyABAH5opyiB3dPufsxEbLWUkjTSbjX6y7U5Qe",
  "key9": "4PJP3j7vpWzxawU6ki9G6V4equk7bTQY5Eo79t5PRRwxMvmX123GT3wqd8vGKPC7SthhiVqdiMLm25J9Js5jiMof",
  "key10": "32Jrb44MXgkkAcgYKYGjDuLjvY82Gf2LpCjDBHCfFGnnMrAXJuUCVRcSZQikLjaJyFZkwC4HKZL9wv73oRAS9R7J",
  "key11": "4Wj2DVKiUrJWgUUrEBszKtmVLbHBSyzorTr7Nexp9zddaButUxqm6mJ6XYpkeZhU9DgwYXt8LPkGeVLMgFMaypW2",
  "key12": "2mPnHjULgoedVCYbw8dJoRXeTJvknN8nwAgr6vruGW4voBQfUuj5g6UGuo5EaFVnfmFBJSAUV9qggs9k2ufmkanr",
  "key13": "4wmDsTTcg5SxPahREEdUW2DVyAVzJ31HTaijkDwZFCCtHv4xrcGmRTRy7Gqt29bpCcerkpDcmH7PFXV4aXD1MxEj",
  "key14": "367F6nFSZ59S4MceAE9K1DUM42ALKVRHJiSQnxEYmmX7uzAqBjR8jQn69WybzbpTav8YVeJejLrcM16wBb3oX8U7",
  "key15": "46GBt4ggryqmmYXnMmgG2JvCV6jydwHvP6BLGkSwpoGVj6DucjdxGwWtZpocAyLcPWwNMnvcqUxRPp8eZvaM3jq4",
  "key16": "3fd9bk83NuP3cTxp87DDphqMpaCR6eVHarXV3K9EyNdyx6pwzM2E3iKxHtCzpP5rGfqUWDXBsdfwuvofzEfbRzoP",
  "key17": "2Tf2ePT8x7KNbCk3smcyGnRkg7LeCH84HyQVZJyfpidTqyJyoDJA64Yt2epcsPePNaCGRF5zN3Q3YzBGScGw3KpN",
  "key18": "2B9o66axTvamvJ9RLA5G9jcirtZKaagQmXsRBaP8V55ZZJMJY35w19Z8nh6tccjA9EYEkA9X8Ueceh9gUt2A4ukB",
  "key19": "5UohBETi759ZhLTZMdFqciGoNcqqXfnALgNaR92HhGtDsUnFmVSbWzKgkeikU11G9REzWH9uhAxgzv1G67LUikAf",
  "key20": "3Crx7FxGLaS9JhSiQmYKDBmiCWd5q29nCtmsTW9JpxREsS3t3fDLoyfeVYyJ3tKpMLt7dKtuL91iLBTihs9ndy8s",
  "key21": "25arKdYh9gqZKBtcYmn1SmFzmq2d1fVaRyWspVnAJvtM3Fj6AHDZiK3FNk9b9iBok3hzg4kRAP2gxk7X9AYC7f8M",
  "key22": "45XtQACYVDMqt4TCtBZj2wEyY3BBf2wAXtvQn4LsMv8yuTRGNQ5CReF4DTrvz92etTnVcFUvhyy5Zxv3FYxEspPe",
  "key23": "314dJ2y66NYrZbkdFL4pMbMnYctp7nqaNkwdnZ1ap1ZNFWJ3Khu4n4ad7v7mQdxF4gBwXurGtHdWpuwy2QT72HHp",
  "key24": "28EqWMPheG7GrjkjW3rdFsKNNB8EiN3TKyWn1ztN2RrM3F8L4hgeu46Evc5t86HLMMjzbkcBARsaCvvCHd3Gjbzw",
  "key25": "59f1LmTjMNcZosw499oXaaGg7bVxLPUenf9cdWSx22QtuEJuKYYU7q7EZaiBZhP361U6ex5sNZTfswwX8s2Gy8Ly",
  "key26": "4PhygsTHtkhGTg1F1m24Nx3e1dcH9u8AJVCJzhwMg59spxdrxU4kCUYUYm8iHG7bJm8n1zZVDP4R1iKEbscAf5RH",
  "key27": "5jBDgoWXBaPugkfzxz8D1Fu1mnVdYMwqB4ZNNQc8RDKU2cReKn6b7U6iCuvojkXGAWb6YsozPj5QkooeZNYHcPeA",
  "key28": "3EnQVE9TcDmZHg1PWZnYzxbmgdG4kS8qUdJB7kV55PMNcaqWmQ2AhDoMbwBAdKF2pTeTLMToirAzHeDEbDepMJfD",
  "key29": "38Lq4wA7WGWJT8R1np6vrhDa1gocyAsFy5pvhJrq9gGsx8ym8WHzBQZVCg1yUnGMuXinkrcfsTyJgencxteq8LfF",
  "key30": "2HZ3LtL6hHXeWDF9GMFRFMYkSRxUJnDPGhTuV5KQ3UQxpnWWFhMNKjjtiu6URhKDLyqtndRjNz8qvtSudRJyogMm",
  "key31": "N7FoAMfw7j6j7SJ9NL1VnvXj7ZBPkfsCS5P5r7j8bnmqpKE5S2WrweTXbGoVxUb4x9GhSKztvMrH3djUouggiEF",
  "key32": "57a3m7siLQc1hpPfgmWHwZfNMEFKboV8jgcYSzSkrcxtY9m6LKNHGZJAsUXWhzU3ysAvBzPTkL6ZzT71obmgVVMM",
  "key33": "5gJvRvr7krRueQR6bLhQ5HdGSUzabNHoi28agL9yRsEhXZBtSsuv7NYgqkc4tvng2b1vhBeuoTFrTX8VjKedodzX",
  "key34": "wYjHRvrGHgL3g2Rg7htm7EiPwxEhA8RzbXwXPCsXNdGdG2UbFeVHrrPxQru7i33JLdPCBNQRsRwVqNfUC14eTy6",
  "key35": "4iXc5VitsbESPUoREZbWs15Nmg92R7LRTsdGeegvjVLPHeKFgut9hpPbbhQpKipzUPWmB1nQgSu65KXQadpXHnt3",
  "key36": "3XjVquqQCiTZbx7b6fLki4p7JnjD8sPwSnZE3AUvkQgeJWnU7J4rd2oaUUcg46tryPjCtazNmHxXh42WF9zbph4N",
  "key37": "i78zC9hnp9FXKSZQZ4GHpaiUcDFtR7MGghJRp8rhuXsifr1SUFyM7SoxcuKBzcFCf3t5vVuAUqEYBs8HWJLZSk9"
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
