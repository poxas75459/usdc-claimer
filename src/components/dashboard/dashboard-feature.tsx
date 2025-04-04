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
    "2uVyxupKdEpqXSGyZyfKAiyxiRzzWKdXUQxC1vuKrqXwKCn32UUJaDPNWyk5pGYB2529c7NEg7dtiWdMERcYQcXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PCbeo7aF74Syb9FDy77MEdZv7fuNJYn7wWGeEsjQGroQ7q5KCeN4gb6BGGjfjr5Qm5G9k1B5xQAL93fzoRHGohQ",
  "key1": "3XgVAyE88mJCc79xy55Tztz4hibVvY4zH35jCcoYt7WrKaZ3bGwPEtT5KeunCNiHdSRgGim1Hw3euR91jpaVWw8d",
  "key2": "2q23pkJgH6DZ5MfnAVT2dsbMr239RosgnPYGZoAZuMxReaA9637oYgfxStVS8nK4uvbJ2ooG9LKrnv851fTxkSsJ",
  "key3": "D6Z7eEABGjkpghumRSh3YUoLQ8ZLukYukA1WbeLqrS8QSpvSTVJkp5wpijZvzeTjFNCfDrPufC2MmeoR15zXRi6",
  "key4": "BkL1ZVPfA3Qr5NSnN28XxSogmQsQdA3cWnx7chBHcHzevUParTQx6ccXUhBHuqpdVHCvdDb1J9eQ8w43wLpmcov",
  "key5": "2TqLB9UxwC6YMvy3avHnWpzmdyo8Qz62yLXXUW91nTpEsFc8ieSso6qL4YJb1dgPHgsDG5ZSe3yjKg4KSnV7X7fp",
  "key6": "2F996nHb2wpoGLqxajkckXipraa9fVEXSFzP4uXegBWAWzomNtUQbQWB48wRCyrcShpEhti3LUZE8LEFTDTXPpnH",
  "key7": "43s6atfqpuegsccqcfPsHxJMjAVN5sMdKYCfpxBdo8ZuPjDerzQEjkjvxwFuEtJeshuutV4BaLKKg7CJs5DkZQh1",
  "key8": "623sgndZ7bitBbaw3Kqkna2NJYamEtiXx7iq3pLFZEgXNDBeiXVLPjmkHVZ1AL62Cu8EjG4SJpdqCDxPKELBr4qM",
  "key9": "4oeWgrYv3hFsE3dAbUryum4zGwwQ5zhxVFLVbbEXSDG5LG2ZeFxA64uqkjB9KLvYAW9CGud66s3XGecpK47kiRBJ",
  "key10": "2b8fiftyUBk5nWRRsYZWZDv9gjSU9Cpr4UhcKSpLymMm5n7ssxNLvDr7PzrfMRsetne6agvC3jRf19uH8EMBJ96X",
  "key11": "2NtEAZuWrRBj5JCy1zvJXSyyLa4cisW4Lpdn7PnWM1NRYPDk3kJba6mPTsY2EX27k2MXdgaAfmnPKmW175E34qvM",
  "key12": "43KS7CnCQ2z8SCirii6KXZgmSMNyXmabiPFiYXAVLEfJZNUmZ3TdqYxME8jmWbj5ofnjQcVH8PDGNpiuHhFNkhNT",
  "key13": "g5sRgJVCudLXNvVtU4PHiZzFB8Nvb7uYtS1JwJ8UWVaCDR11G88YZX1FLUZTuGHD16QUQVmmyycsxw6uxsWJC51",
  "key14": "h1GS882g9DiMqVof1SM5QCeA3ZQucCLVXd9zWSfzd2iu6iACV58FGN8ADAiLKKxDQo26dSBhVUGuGYhjyvNVAih",
  "key15": "2KtHGHkNeYsrbmX4BZV5nPbBhABN9xziiRrWaYeMDmi2xkoWrTJQUqun2zMN5YxWGTY7guwWYMFCiZZ3BssN8e1Z",
  "key16": "4oRCbzLy7skhfyXNG3oXyvRZqUsk4jCumLxSN5rcKguMviA5qnfHn8bEmrEWEGGePNNXXLu7FPFYvBqwd2e76TJq",
  "key17": "3M6WroA1EFxR2FjYDnx9cUbSv46N6C2cwmkamMzV6Jtd3x7cpwwrih7PyJ29EC1omarUkG2rTLKesrnvx3PnFuVi",
  "key18": "3Y8KVz6nCtrFaetpaU4LQynVMZ2izCzyEgsbPvhPmwE1rZnBfN99sZnefychtkn37uhsePCGF9y3D6iHApyCAEaR",
  "key19": "5wrVu9Re2YfgY8MVBJdT2H1LT19mikCSdQPmcXDThWc21rAyvfya42hpkTQE5o8EThxDV2TnUFn2aDY1oPsFN7zS",
  "key20": "9NY67jRNLaMQJh1tPhmxiZHVJ5qazquFzchU2YKPDb8ZcF1nCjnLjR6QKQNKeFJ7V93THDNjLwqJwF2djoW479n",
  "key21": "5bcwC2fXfbSPbFLhp22hW4ZfhNk37Cto7HfFTKqHHeuN7humYAmAiWbmr82ZSHX26Va86iWt4sHUj3D6mPBurcqa",
  "key22": "4RMPWaBNDDyzbB5MoaFhLjaG3ri7kG4hUzMxyDhBRHGrMtqTHaqoR3U52LM8koit1sBs2jzxGbt2rmwBRXLyUdB6",
  "key23": "52ykkNd5V8ziFMAWvU91Sobu8S8y3t2S6tKazQwx5ZDZPrs5WRC2UoVY9TqEszeNkfFxpRfBoNdxRQCji7csnFZ7",
  "key24": "4x8uiL2WNNDX5WFNjiQRYaX4adnW9VsFVZSzxFy1cafDx4i4stuuo62kwkNdX22HZGcNz4F7hX2E5pPxTX9P6X89",
  "key25": "5fVewSt3Lr6WwXjrf6LMajQCHwyYZUjfmQt9t99mWFxStdVXENKdHHWbaFMCmUAoccgLctXRZJDjxNzzTsq96zZm",
  "key26": "5rNYeqt5ydBjZtSfWWVxWppcmdfJpFMeJxn2wxk55HDH61W5CYrfrXtjy3GCswFsNLoyxoqQnMeWrzSzGDS3JMft",
  "key27": "5NX1vcfURvhhxi9AkRtfYiauMYoAbyoVFo4bT1AmQn7vJcjF6eyA6yHpXqGuZTjYH3n8zZ64Gwnpj1FcMckEUKn",
  "key28": "47ie8a2JEPcSPAVvd6jC3KRbxWTmtrktq1YrzLhcZRg7yMM3PG3KXrdZ55ZTQoH3S9PZmjPzg9GUo4DumDsMearL",
  "key29": "9ayJCQPdFdACn582uf4GArrikqUh5VppTWeGPMN6yNELtXk5McrpA79RWqaaWVdsBSSPMiTq7DhbYUrYuHnUWfJ",
  "key30": "25mCXwNoLPcpXYMXukSax5Eu7xZcddC6s3d6XjgPtzSRMUWDKFhaFA1hD5nwcvAuqoYxnfzEcpQHvQFso9FfGhMk",
  "key31": "7eLaQXqevfGGpQG3ALhQcPYVJrjvpJk9JY2VvrtXSYnFvHwdbdwiYEZtV4SHXE9sLZBBFEK9tin1FTHRW1vKaaF",
  "key32": "5ga1tvd7wcgbSu6dDacFsKdjbDPYVmrmqyDzqbVUYjjDHahHDeof5RY6Quy8gbAhte1qnUNgpJoxLMEQt9bkT2G8",
  "key33": "4owr4AuFEpK7uV48SFesNgUGF8E1qG6StNXXmAbAbsY7SVNu7jof28K6eHNH9fPTNKfCu34B4H8gnrZxdMFCZWUt",
  "key34": "3rVgyC8zhgaCob12iRpT75CHQUJzBbkU8gKYvHijFZ7g1m5nXnNwiWioJQi2g9YHS3r84xZUUrwYU1SF2NUVk84K",
  "key35": "41XVNKmZSgCCdWRzDENCnLkKJZHfAVqbPRUFR3Na1KE6uuG9nZU1zejikqwjoja6e8MP34foHPswhYjrqW56HmXH",
  "key36": "5cR4vCMbjxPULqPTHDx5NpZUt3c8oPMXTveAoxZDDpp1JyxQ3NxzW8bYHHytwdTeVSxtL7MqX556Z7nuWbMQMGok",
  "key37": "38jxsNYRo7WXx8q9NyxBRi2xurKArfb7BdWhibCnqLnjKzxZkAvosanmi7Ahpj5tFj6tu1jnosutvzTfQYcLpJYG",
  "key38": "3LR4tgNHa2vTnNc8GQcwLwwCB4y28jtECRmZupwHe7fWydjVVHe118nnxNffb9cXdvdjCVMXz77X1Gsq2k6EzNKJ",
  "key39": "5Cm2QcuFTGDNcZs25VYejZFkHwzpATh5Pnkrbch3ggWG4QptMAxLXZeZ4jnyAEeFq1PzZ71BVw4JLG9ghNr3i2Hg",
  "key40": "4cJXTRhWASDuUgkkiYjApCy98CCnSnvThSxk6a2rfQYpTD9uAELBN4GgSviuAKnF9ePpscYSwezMThFgEX48NJCM",
  "key41": "5d7BtB54Mi5R3uqLkewxyuCD2HdvVugZcAFnUHY1ZBzxdcXaXRZrW7zdgBehgpR5CxYLj9P8J3uVyAjxW25Mb892",
  "key42": "21k8F3yhjcMtfZ3mCWesJvphtY6tDoFY1AmUPSVDfJnkCpyBos8nexJRNdTjE8ymb5M77yBGvBh156WC93H8FgVd",
  "key43": "vq89MQjV8vco3W6LZvgQ2ZjK9msawwY8qNcLiMHxcBnFMAkBUvk4giJCcqDQWX8yvwCU1cmbdKA7jydS7HTDrDn",
  "key44": "5uiZsbPL7kdUp1Y9KHinv6bh4aB6otkQTLA3Bfpb2BFsg9UUbmgKizY4FsgdqKtseFP3w54q9Evz6P41zauDjLZS",
  "key45": "5eDnGX6wxQacJ5uD7vVBRAQ2HWKTsz584MQUFAo1s4EoGgpvWZDpJu77Mb8tGTjNirgjtL6F9J19KLfo8f6M2jwu"
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
