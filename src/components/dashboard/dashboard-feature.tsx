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
    "37CbJoMTWuLUF6Mxju3otrMuUa9aQnGLKLgPXrZeeEEGwghEkqgJKLs9jBzCwNduFmFe2aNr1dSEAgECtjVaZeAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABFFANcryirBxsCkQCy4XTjxwE5dpPSqMTLgcJyTydiUF2qUTBNuF9dvsJkiwFqEcshf2tXhYwgwHH58ZBKRd3E",
  "key1": "57rFeAbLb5r1bDEQrRiHUiv1fqmezkGMvHv6AM165CbmsLXbYR5ZBc9Jw6kQd7Dvv187JaYZBMWTKu5RzNs4cewn",
  "key2": "3oAjwpWuhXwgbBwZZv83LuddRk97nmtJV7WdtGSazy385wmoCs2C5nrUS8ZCiqdTFtJLdde91jTFGsegiZ3Viw9Q",
  "key3": "4jU8ZCLMeuhUvr7toT75ruMcYoHrCxAdjPiguR4PcqjjxavH1e1oXoiHMWkk4YGMX5w4KPxnxNhxzP65busgbQQZ",
  "key4": "9ArS3nVzdfqAcGa2ptwtAo6T3bzGm17N7a7aXTdz39zSe9ELBKWpETfBrEBT8Kv3c3kVE2YTpa4qztZBEv8Z4jt",
  "key5": "3U6XZ3oz3jy9HnNQDKeriqoq5uggk97wz4SemkJZBbCYv1qeAYHsKKwzerigQa3wqbMMjnJZKMg1mDN24wJKWoku",
  "key6": "EMuRre1QRy93kqXBWLMHzTrW1nEtZT1Fb3bMG3omHnamWACAfR1p5zASne6o1uJ6zZGZbGqGWCnYYjCdMhYPkz3",
  "key7": "2FnMnBGLgaDE5i1Ri4SfYX7Dmx7MP5UVq78SwgS3NYnEuUcmrgPLjsL53NmUe1p62BFtFBtZNoN28E2qAE9ymR84",
  "key8": "4nFrHPXk6P34gsbH7ueaevoSqWZJp3vhCbGZwE6fSv23bgaXfZcW7xSwLbg4cbasYDgZpFqPVAbxbJgLzoEdfjxj",
  "key9": "22QWHVEym1kqW5c7RQXTzVotiosXXb6BRnz97S6tC23iebVFhTiEQ8jhNqEYMH27Wcg326E9ppDqaY1dFdJZq91X",
  "key10": "29vrGHrV5wiAdhQf6xQc4XfWp6WcqFVmnHdUpUKw67VMZiokqYRm3gPsnXh1AGrCZhUszX1BVRsJAq6vqCB2N38V",
  "key11": "xt2oXWLzktqYLZBFSkGv2H62SfMxt2nugmHrS2EUwKEju8iAQ1fRkxUY6paeoXDunDu4trwXvmQbGvoob8mwsUE",
  "key12": "4BsujbMDvxAnG7oyoFLNXG81C6z56yyrzRwS75cA5ftodrhsMG7vRyU9GiA6xLng6ubfiqWjstZjDgo4mLMzaRwA",
  "key13": "2U5gS3qHbaDSSeH6ohUjmkRUFXCEEr2rVfig61EDc8Cd6dErzb8LuQPa8dxFbJPjfyKja7LEBYd5bsK9UUcwJfyY",
  "key14": "4U7jfB1FtXzSazhPivYq84VPuSA1Rwdx5L8vBJ3oGMdhD18RwunNxC55nWHHGhz4dRQaveFcoTpH2yZRATesHzUX",
  "key15": "5DVjyFF476ohWLXa9NiJvWvzBKSsE75qpWg9tSrGMkxH3UnvhxkbhdRvpyw7AmxgHt6XaN2fQW49x31cXGu39M65",
  "key16": "tLKdL68hVeNmKqetJq1uohVNi7D63vj6nJNFye7giU1MXPDUePsvL5FtzSLFsw8KHsbb2ivYwgQm2XJU8FKJtd6",
  "key17": "63D9T4dAmtypVxy95MQ7DskrAQV1cQ3WSPSjYPe4hhyyXh7JNNC3rK322e5A1rY3TzgnZABvrr3hf4YvBL9nqj9M",
  "key18": "2SLZXN9zL2x6QDjmePJPG7TAsBa9R6pnC3WZDmNzSisiDvj6VREN6ojFxcgQPCRJ4w4iJcPwfNcQ86d6gAqwiyqi",
  "key19": "xJfKWXVcPcoZtJwdbsKWeuvFLGKkycfdUsBoEeReGY1C15m9q2XUFvETTwT2GNGmq1V1KKMXQXL5WnpPcdwJT5W",
  "key20": "5s5oD7sUtU4c3EtSYSAjNQ7TxDjMPmXqKmYwD5P71VS5n74YevRs5v5GA3oGbaq1piLEdZRz1ujkKy3ydKrjFnnX",
  "key21": "4qvV8GqyQ1jxSCxtvmb6oxEgZwNQYQ2ABqTH3UnR76Y6JRcaA14qvmLqJGfKXNXKjqYAifiVpSQdyUndaV7voFv8",
  "key22": "4NjzS9uDc7AJfEG1Kd8XiTVcEq642fSsh8x8DGPoJ6KEoL8NsxGwjJMNAma4wXJeyfy7X4UusjkBkNnKzUQSP9s1",
  "key23": "53RPZRFG7vDEX1ndVV5NVc9TnraEyeKMB9iBVJZMzz3n2JVTKuFc5vGTK9Wmj7enGwHxnrdNfB2bdZ5qVSrVVK4Y",
  "key24": "5b3ViENfLYEHGVbXB8ooL8k23BuFJ1uy1s7mcWWcJDMFii1V3KXxQBjoVFpxNZb49N8y1pJuAgxTXFbtXZnJ92zA",
  "key25": "5Cq1xz5iUf98QEzsnp2x9kMgZ7S2f5eEJLKcDp4HsoM9jzYn2Ks4vPUmD9xuTY9MSTQF6PyUkVBKe82aA15NSYwA",
  "key26": "5w2gK7RSmquFdNvjbqriSbNv1cyPuB3iGDF9q9Q4vfjbnJp5byupHuiGiRqSkn4YnYgmp1xvq5JYRioJXsCvhodk",
  "key27": "21JRjcA6VUxqBv2UcHpwsfTNusA3HgyCKynoGzYsn6GVUiaVhJcDu4hAQhGDfmbj3TF74Y4spmLBYDzbmuRikQdr",
  "key28": "64RB6N7ykNh5u5284F9znoJgw8S7mFerbidG4nCsjSD4p5ntqxQYxcDFZUmhAYvxtuhpiFzP8r31EBB2snRZvLeu",
  "key29": "3KeDuAwpaRmXUrTDKvQ5RwPNz18SXQfrDfws9cUs67nUE6FPqogL21S9NxYM68iRyfdtp1MRuqF8DnPivT1mu9Lg",
  "key30": "4qWjuZQS6pefqDiV9UbZsLfBBJ2cvX4eps4gFiX4iuw7P6anzNFVLnw4NBZVGa2za6Waagq6nKKa9tWgQLPcnjm4",
  "key31": "2aWyp88vLCrNg49bRHaP5TyDyMHVj7ded6AG6RGo4zBEWjXJmwb1MGLqSbec4jKgfGD6dKbiG1GphBjY5P9Do7nV",
  "key32": "35PUdDKnQNfQSf9hTv25XWUacY3TWhWM91sy9rnow5tH3WisBEPqJN68phXrfQp4BtxaaHpB8PmuHTsZYCkaEjna",
  "key33": "3TzAhoBfh5jB5oPq43hPe1asYGHeaVRDBThgAUcmz1Sae1W682hNv2SBECiKYWTLq5WM8hq8zLbXmoVUnnRb34ca",
  "key34": "3HzGpePcM8Xasot2Weh5xzaZKptxfSz34MaGjcRhFCH2ktEBg6DMFw7hGTTywDjbskCz13B2ZKYX7TAvga854JE2",
  "key35": "3jQEeyQ2ZhRVQmpxEorBU8sECMiV7uU9Kim5ypdLtQR6b3w1cEMpBovDKA1DdbUgHBh8ydgGaDC9C8ZfzQmCQB8n",
  "key36": "4pF238JrMn86DbUxQkZTqARBZQWz5dBpn3Mvgqqw28QNvsuAhie9qGRPTEGaYspwfVHyfqLuv8iSBWnpNm1b4YYW"
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
