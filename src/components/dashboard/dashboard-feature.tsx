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
    "5EcvFkByLgPbtBeaHv5EUQ1nYrsAEgBxZUK262jLgHu53i1swufoHoRDLLnWSEEUuso2PHzAVZCjFpMhfupKye1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDvp2SpYUaUVrXQ5t9A51kR1cGeyQTHvXJasm2B4gx68s6s8Bpvo6zPBRQD1c2rovkvgX9XPP7DfDptQNv8b6az",
  "key1": "57fJcJaLZuc9FNxoB4oaMxE1EKfLDjJmHFAoxqD3PN2XujEajcesbDQoTQwrFMP5HzKLj2Xvm2NvHmv4NTJoVRt6",
  "key2": "4LqDWJJJsmVewS35pBVRHrbmpZLViAGA745Nisi6nrh1dnMn5NwwDzUgxqjg6fcApURnhhHBJMU64DF5xJPD2UaJ",
  "key3": "5sTAMt1wmGuRMfK9eZtFwaa4huSmXdrK1B3tNdohrniCkxUZxwweE1YjJjUf1k7ETKJF5pcvnZy5xUWKzEnky4y2",
  "key4": "2woiJRYwDsjLjeXUqap3KpYZJBAp1kSNZtUMnATvJiSAx11ywbzrDjzRQwBDTHkAuvLyF45fNoWSAPT5fbkdYan8",
  "key5": "3Eb4ihrwmZ4We9xx1iWYsB7b7CZS8vqzQTyoTrs21bef5ii29hRFMmHN2DbeCCkR546qnGya3zT1cq5herz2TRsz",
  "key6": "5avZ3666J9mbhbetkPut6Yy6F9NJTqoNyLvny2WpbzYo8Yw4RY831F4stxRWKf3HyNh6Ph5gdjekBZ2CVKZ9TC3G",
  "key7": "MyCDra2t7rtfTNYN6bbdSn35RYkJZz2EVvV77ua6km1WWTFs1cPwWsjXtSQdzyY3LR6kcHjg4WrnGE9wfZXa7jK",
  "key8": "64WU5dWuEfTuZtUw2MU7Lq9tXd6KaAKGZ8buoFq9QtpxvaR9oFGCEmS47JVN1t5t3qQ9R7Zu8ZNy2LdQYdGBeVc3",
  "key9": "sFXcNnFkXKTJfA9JiJaQjn1bH8cGQzVYUtixsMUW2EP25UhR72zdUxf4RkNomahuZwTeKnDXekHJ8yRxx9wFHhw",
  "key10": "QaJHRbK9jANePdGcH2ND4toXFy6HRUPWZrTCscEpBt4iqBZwu7MaccH9XkhoXk8svKdunHvuT58Pk4aycmGvgwJ",
  "key11": "3VyJ6xsYit1DTzaXXECewbUvLpspyhthHKkC3fvoZwmcM5CKv6US9fm9byUGn47Z4EJTDCSge4sFZFCzXYMJTLX1",
  "key12": "2QuLXGPv1eWY1CruGov7mB9hv28iFSUTsbBkSgRgxtp14zF88xw7hC1HJ46SgGZB9wJUA5WiAs6dxXSQqRPoC7T2",
  "key13": "3E23vWYjvVFCFKmxcSooJm73t87ytFtFgF4tdGLALgrBBaUSXqLopt3oz9bWwhUX5rEUA4dqhse8DxFGvhVhLZxe",
  "key14": "vy7Hpp1VqT9Sc88F7vtVG173CfzLwMHbaxVPb2ErBGSSdAVHU3G91CE6HFcBgorLviaZiwUe1oJDfYLSaSoWrNe",
  "key15": "3dKJtskoztGQsAmJTLZwa6aQqN822czyouijSkM9ZtJ9cfyTZFEuLFmnPyJFyGsQQQkNm7QN7HfZqcvkCUCaekNj",
  "key16": "9dZ9AkeHSqa4kfcBxHWR2fhSSJpE7SEgjd2mfZYAufNUD2iJQdmzwYBUVVGmfueKj1PP3vT15JUpJzPzUhDDfxJ",
  "key17": "467yvd4o1xREbqdqxSna6vpQSdubQ6pwenRxaicHnQEQhaHZDnvxAJXSkC5pNnLsWbToA2vSVUMjTmkimt2VU4p5",
  "key18": "3pSGrrTqBepE9uPjJJfw2jqqJcgNHDvv1bVwjmMymUzo88R6TH3wjpuJtoXjR8AF4LEfjbjvvzPaQQBc8ZxV9AA5",
  "key19": "2T7sN49eBRqTLKV7jmXACtuqfQpYxdM9cJTJTGJy9p61WR32nvdntJ6DgEYcFgajPkXZmdbgssL5LohEdjpNCwqA",
  "key20": "2mCJXWTtCJvoNok5hNeeBdNjfh7b92d97ozugNv7RwavZVhTwuVEXFWbvn6fxhxmAiK2EwJXTHqSs86ZgyARFTRi",
  "key21": "49kMuET9orA5RFxLfD9CXfmJyBe9ZCQ3622YfjZuUaF31ieu3VDjVa3U1eEF3b28bvzqvLoxDvunMMrr93ehAEKq",
  "key22": "2m6kUB7RGPSTbNx8e9TqcP9H4g6oXmfVwXVaQnq6JAK17JAQ3wq7uH9e5NP8XnkHjYGDXKkbhS2Eag6gBmtDmQ7s",
  "key23": "4YGw6oaGf8iWSbgDqPCiH9VRBuJn9nSWYgnghLjAyn8ni55Zb74751EQ6tAxBSPTjVgub6JVXwDfRwxarb3FWnLX",
  "key24": "55tVj6DUgViD6j9M2qGfEDLNdRfRwZ3XjC4v7gqLuQZgD8sje1YrMERdxczTUwy3Wzgn4MZnd9chYSxQ6GD3dHX",
  "key25": "6aZHy74HwbaoAEUdUcKkx2BSp3DT1vR2niAjJSQwyqWPcmDCNu2dQhCKGBCUjUjwfUDvNKHgQhibvUBZPJdxF1V",
  "key26": "5Z4L9ZbtN3sVh7fvP9GgRuxZz6u2qriardBK1XZfy5yHdnp5Zan9M9mF5VeT9NZPzCFVdFv9uXmVKbGWMp7su6Wm",
  "key27": "ze5Wa5i2dPeXrbDbUAJQuqcYKAU55Wkc9qNGBVKL9b5J6u4Uy3Lfmf6BKNB6rhZFCRdi2cUdeTwXcwAiiD4x4QG",
  "key28": "4MpjCQmQEnHkXC5m8qYRamhMNJn2JP8VZMkhFThNiTpYzMc2NzbrTNRDZ3ujESegyziauxoZYBmhe9fgdDYidmrD",
  "key29": "3Xeo1p3YLjpuwV8cd1UW6cVcL2WTLiEZQAgWaWWHdvVfRr4BysLGnddziKJxDFYajGpzivME2GhtcpettAcebwCD",
  "key30": "7q8SvguETd8h5QH3EnpE4x6gFsNrhsM9Jpb83uKAx8xBBratqmuQfkAbvA9LgsWfvCAc7J95t8nxGUDmEgVuvWL",
  "key31": "GVpbqRPDvrF52PPQ55kWemd7rjToDzVp5cHWLLXpbif4X6NERJLV7icKNjS12G1KgFrHUzLHTDpoJCXUDBdpaiY",
  "key32": "4AXmvJHA2AwEe3CYJRFaHKqeHB26yBRC24SGiqDdRaBsF4kCLAdWLMVNnCAHe9Z3ZvKBdoVVNQpvGpBnsKx2JUJ4",
  "key33": "4JZkCq5VUiy2NtV5BC5tgvYUYhYgWrCUbwdq6Fsfo8fdEssTwj1KRXh8nbnFitEf9ZSJngp6Vt1tEt4Qc6TBUmxE",
  "key34": "2YnMNCMcVAU4eNXyyH8HFCx8spH1q4SJMNwYYWf27gdeJZ3W7pzwNMvjmazJ6S1vSdBnALeaRk7vWpDAuL9oA5X2",
  "key35": "6ETkVMqxXymexMwUP2gtPMEs2eZXqeZ6gsHZTH7Ph2e2BhoSyazstvWBuLbe7RYW4xBKsxNYXc6nE1nbgp4XXFf",
  "key36": "KoBbGYK7bKjsiY8p1xRVyJQARhrsPqADZt7u9agWvWQe1MahP2jUCrZRX2PSAqksWWRPXTNH7s9bwBYtfnjNhcv",
  "key37": "5PEbSXrLGwBXDZkhG6nvAWVu4FATspsTuSEukNrCU3jScevTjttVyQN4bp6urorHLNrE8rbXAEPeYJYhGVWFM4YB",
  "key38": "5grgdULpWVjxLFWEwFLx2UjfiQsNnNV2Wz4JZLRBAsauzXe8ddwvUbMZG3Sibfue8ksg2rcqF9Xyj3wMEm7qeAcH",
  "key39": "27mgf6DPvdh2asNrUBzYqg8iBc5xRatxNmJL5LuE6XE3zaQUi1uJzdVJiLGZGTZJSPwTMonUvvJjUoKui6Re3wDz",
  "key40": "4Gw3jDp6jBXtdk9s7WMZfDmRxArvBHLP9mH5uXcEJB7ddcqPXDXmaxnnMpaUbD5p29snyxu2PfgZR8DN2SyjbDMg"
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
