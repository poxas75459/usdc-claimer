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
    "5LGnuZAcB3UFitzwHniVkGFXY5f8EsWWXnbdC1j9ZkcukcuMnwJeKTTZu6jnCSXguZXv5xMpcKfGCvDmjSEvowjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yetgr5zJgChm62hkjWexGqzgZtXMqzn2GSZpRhs4GDuWFQ3h8mUCCFdFvxEXZJW9kTdo9wMMGJrh3mALBteZCSf",
  "key1": "fkVzfkWo7TAeCUPUE3K7S4iABSypjjZqDJGqHaLr44wP5hk3iLk39E4NNyLFrWX4hiNoLcHvPcpNjEbPf7giCw7",
  "key2": "5iTyRUF2ZKKjfR5fpXr2ZCQMo1eo9GEcnR7LvavF3UXJ36x6s5EhhRb4iWBpkSrjLyuYnAQ7y3qBqV7Awzq3FJsD",
  "key3": "4iDq3orqKMcFDUem8xhJ9GWTf5SJRouvQch2mhy3YriKWBfjij5Tc3t7qAjgjn7rAGjWncgVKy4hSNigiE6eKNTM",
  "key4": "2VAy9MCHnjujN843RjFCkBbYT7DgK6yvZT7BQXwCW21hs7G9u3ohAmjwrrhFMLzxr7HfZNNjwxMpFs3HhtfsVvz6",
  "key5": "2aXL8ML5B2D6Au686HWDGKo5i9uGrE4iYyr1G3RNigMY2Y9v9oGyhG7oraU1cGZVGQZ5Aky2sXzAYVc8j8Tttq48",
  "key6": "5aNwmzFqeaeh2xH6e4AfFYWZAe6ByqLyh6QfNRBjSwnodJFcvCpG8sn6nCKuTvZeff92soGx2sYyLjKYCtVCCNj7",
  "key7": "4X6bEpzDkN8FSPPqyieoEQYWY3tZs2DdofyWD26ZKDBo5czRzLcr6KXUB8PKEWSMptCYvjQNnLwwfQwW8aEemJZy",
  "key8": "67kfYe9DaBPGa8dYLdGFityyeXNkNPL5iHsbbCwTN1yVMWuHqAkmzCz7iqBqbTuGhDGshri2FRdfkUST3JdT7H5f",
  "key9": "fp8xVGtJdNFZBCCRAK1u97FTdDLfjQWFaXbPSjfRWyQGSkvZsLJMjhfVoiuL6TWAB1SDUT6mZnAdbZy4EM56F5R",
  "key10": "CFvthGuMRTHYtvj7dW1Sdif7UYh9mo42bjVTUEoc2bpjWWihrLThhjZ28igfRFFG9T24gvf6g4vQm1PCG6Z4CEc",
  "key11": "4e82u5zmGDGd6RKjAJCf93nj2tTggpph7WHu7NgAMimkhq2gM7kvadggxyH9rH3ZS5K2vkoRWhx8Rp8U8VXVhBGu",
  "key12": "3oQrv3xuaB8Fn17EZf1A3eUgACkLPPkmZkb18BSixN5drTxkAthuQhVSqdu1btKoju8djYWzJQuineJPkgEB9okZ",
  "key13": "3iuK1NXiuYJi4WhtN7Twssusx2WsJ5PZ7dXAEkxT2Hf57udErJrmB97MPeUy1AmQFogvQV26veyywwryqVDDQHck",
  "key14": "229RUMphj96hfWpMwb2Zqf7oHFdUS1pHGY5HUSwfqVNc1KgtsDRTF3jATY3vQef7CX6PJ9W8YHZR2wy9wqAVL9y3",
  "key15": "aUGnMGApgbR78RfAkQ2dPh7vbyLJtVgF2Biqbk7cmEMzbhZ9PyuwKkY8w1xaw1j4JJwrxRscVBoR2jWXNwmh3Cq",
  "key16": "52ndsVMyNsMbB8g3RTxPhtGVDsH9WayDVDNeyfbwmpcnBoPpmNCC41Z2Wbzw7MYrXyRxGve5sXXZygtRBwweSgW2",
  "key17": "62mEL1fZBj8FDPGT8v4P8Ec8qwa388717JzkUsDkgR7fwJrStJt8WvaiFb8GPe4eWVpt473QuARkfGPuoZAdJixz",
  "key18": "3TJckJ2fgL1zQ83Hh1gtcFD2yAz5EWfUCnLDu5Ug3UmXsBStV81UVNF5rmSBJatJnyGg6WASR3MKMSzuxjsAX9Wq",
  "key19": "3SV6KE98195r9q8kJLsm4HmCpQDTvNq71JPLqCAPewZzupKHnqAQU8RghVp9ye4d77eN88AFmaT6hNMbuHYJPkGH",
  "key20": "2LD9EQvuY55xHcoJLYr81fRNci5beR9HsUJ741MWvfJp2ZppZLsHzh9VKWqMiG6nDffwbdUcgYGbHzHwaQXNhYJw",
  "key21": "2EpvQVFQ6y3gugDpC9ZUfXckAyiAgt2yRSX4bBEqUo2k2eCf5Aw1EM1RN7Yk7Ysa63vKy6VGZiDcue2H1asSxYd",
  "key22": "3FsPKER71oT6y4ufQKNySGkpspqDzrJQN3wNgC1xDv4rVaeN2WopBCSt8Cn1QEivD5gcbznh5J19qSGsvpLj1P6y",
  "key23": "5zCPyaUsG7YBnM4TTCSkbU5W4d1o4k2eKaJTxj1tMNPyC7JohjStLxkytn4iEksqTAoFx3xonZpbAcFC2zd1ch3T",
  "key24": "2eBafJV2rs8VM7wEY4cXmaEYv3nASCdaxbh6vWTFUfmcd29VrNwteXYdLFXFAj3gx7tdXmaXKFsnjmouL3SGcsJd",
  "key25": "F93z9vjb2mNHEF6kDm95UH6w4uWh7Bf6tWZJ6kzkdWcazRtSAGKvx4FyS6QvJBVaeTgTGjurKLeG2j2UjKqFBHx",
  "key26": "3GmD9kZHpw266r1gLwm82nVpJbPN77pNPNcHXXxmKeC6Q8pqKAgvoiqLDK1GNiyYD5W3zgerPMFhYkyCkPXyDQLk",
  "key27": "5yfQGLZsvVTsTfecvQe6cZpvHMjQ8feMjRK9S1gsesa8iWQ8Dw2DDQrbDbSL5WEtQzFgdFxqkaSftKmuvPYHp5Tq",
  "key28": "5UjCbaXoAqb3VhS6Q91fat3ewSXyeWsCZqQaDREDQQses6scGwSmjBxKt9hCjyn6XZAyhwSk41eT1Bkto3yfRBXF",
  "key29": "4G3TGA2mpm9pTttSqcuGjrQ55eCLXf3SS721AAxDstp4pxNQX6sHzxtsmUu89ESgFok8wN2eLRprGwtGvmVo8Udn",
  "key30": "5vAxS1xHi3vbhdpsMZz8gGp6UU32b8dhXGnFUgC6dy4APsk2hMT9yNWhK7ejE67HFANdrJNQMYRnaR2Mv5kupUA6",
  "key31": "4QpZ8PhLj1aJzoXU2kvgevWS1YdGkixNf4CsKN2XAoN5uhdw7uwUZGtbBgvatipoT3aoTYyS5Hbc89ArAZn4ERWN",
  "key32": "pU1WR2iD2VwKUEgHFbNMGaebPkKzqXGaX7z9Rrh6tqaZxkxBF6gknutk7CudDfFQrKE4uLFL2GbWiwqPUyLenqo",
  "key33": "51YwwmUbfwnwxqZ1Phm1rgqxrLxTq9iWRhiGVZaMBDm66uxXhnGXQvcXhyxbRiRuAMQdJHzbAGMme9SiDQ3nGm4v",
  "key34": "48fqt8UhjXeSP49izEZsWjVy1eF73of9sPhaQR3K1tqPx7aeZELP9m5BPjowj6vUhNPismDFiKWdAmRUmhjyYQML",
  "key35": "64eQ5DDjzq41CF1EVt2XYs5kXT6Dc2aKqP7AtMHFdVrRnUsWsdosMMvFBi2tfu77rxqsKChqSAMLQ6AsmXwfC7dM",
  "key36": "5bqF8AyokyNucvEvyBrH8s7cAbrSmygftvvb58z2fWjngfwx4C6H2kQvYohjz163YF9JrkEjc9ECweRNjQX4sdSt",
  "key37": "itpeEct3qNwRgGzT6nWrgbxp3QH3QuAowW5fZ35BUXoJ7wKq1yy8dwcytChHmSi3MoqGt3KRAWbouq3TARaR6nV",
  "key38": "5ydxx3jkZdHRJyDYpvLDAf2qTVumnjncjGR4YsXTuiuNahsG8HXvriLQ18EJB8ev1VabdcBEh3yYTF2ASAzDxJZG",
  "key39": "3MWuLs26LUbzoKxFgYFQJWdtpQgG7nbnnSKQ7ZLDqe6nhJSyzzT7qvk3c1BJxjo45sACzTXpzPHE77frTX8nw5aL",
  "key40": "33FcFHM8FjYZsKL91CP8AY3pC5HFKwgbSJamr4cnsAy1tGBxcGji3DbNBWeT4jCXSMxDjGTeqaPVtu1SkaFx13Up",
  "key41": "4RCpH1Bm7kgob7ibjqjgBcNawpTy9wePA1iCbB8rsYsikq7QyuL4PTo5r8jTtN3nGSc6X2BsPS7Wy3BNFtpK1spf",
  "key42": "5vHwN6F1WecuBZmcccPtCGK7omaPPt547A3JN4SMQpuL7rfjFCMGsLJMrh6sZPonyG6kavzbfNSns4mcSerZsNBZ",
  "key43": "2jkj1kxwo9j6zZNdpNQaiC7Sui5WzJCoYAEYCSaD7mDNDBnfX8i7ZhVTGviZevn4hv9EuhkL7ymFi6P72x1mnyhW",
  "key44": "3pdosMUT8ztx5hMGUsF3XpCRdRfXMNNstE1xUwFgAoyEA9pZD9HyMfEkY8VxgoraWxbDQQnGyzwfRcinFMa6o8eK",
  "key45": "3MeE6J8iHjdFRwrWoRnx7XPE34ENzVs2UoJ2diuuVfrPu93CWZgTwJNY29SpHRvuz9pzaMjf5q3pkEqt3skpCXsF",
  "key46": "4jxR1sY92z8fLWcNEdvQjvZG5zcfPhMVVKQhkzizWe9ExKW2tuwhs1BwvTFCvnHdgE1PGzgRmsTmVShfsMJZ36v7",
  "key47": "517m5iC34ggWmQf67VwaTWfn2Eo5gtBbMaY7Cjtgz4qrbkwM7keH3rJNMekeBqLhgaxtNHWpm95pZkwC5CNFuEU6"
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
