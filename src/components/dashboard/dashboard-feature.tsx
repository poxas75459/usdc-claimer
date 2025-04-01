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
    "2tWvTT6hBbWZrYUwqg5mS5TEL41svPJNKjAZkdvkDwyBzoS2BFXVvwef51tmgVtLzrNe9PCiCADwrprTTLV4vqU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rNpxMwTGHJ4wH12b8JpkhVPv8WPX3tqkoY73Njo2SFhBYHCzNefRsA8s1F84Hc8xAidqku8ZceZY1nsFib6F5xV",
  "key1": "2CB4CNMCaqs2WqR9mfExH2UAHF2iz1zNPFKhXZWAcCfE48Nt1uzaeqG5FauAx3kYZixNUoKgMGKsi9HbquU5dtTy",
  "key2": "8RrUAZcnxeobZy1yU1e8SEnMcqhNn6F5v32otvMc7qQFX9TSbY8wKjCrspjCAMxZWXwtBKnDN1TDN4pvxiiF3Cn",
  "key3": "3YqvqNFJWVfxzQSkwczeiPE2s3tWJomrALGt89M1RJPsk6wRPTbeaUDwurMPjGBqptoGyG4htAPpyHd2jNPAW6jG",
  "key4": "ywiAKNqzfMHH31NK6ajPvUFK5UL9SQLZ2b1HvB4jBaDupzJU28W15G5SdhEAj7qvDtck3ZtEsw8Ztet1jCSqWrH",
  "key5": "JoJafHLbWm88TGisGP2Yi88h74mHGPkXWJzXjhwA3EXAqpdVD1i1fXRLRA4V4w5wBxHmWQPHc9x5UbW66YGWUUB",
  "key6": "3Ch1te2KZCCxzGPx2jEczpQBNKbxYT6ABzWdVSF8vwgXubHsF3Mw2QH5GmUd9d2VU6ofczc4ucERZRSC8vtCYkqt",
  "key7": "4tRXmxKtW6GsqaRWioTqtY4Doe68NbtadbT1XUcks567Na8SvcMsakWTdgTB65w6yiLcsAmbuEww26bZafHPSGdS",
  "key8": "3anBixQgCpL3rpSpzp1di5jkZkHLyoa8kUzu72Pb3fCMZj1G2wwBUZKkJWZtLVnnELo5d1wqNzvqBB3NneWURTrA",
  "key9": "2owG89yUhitZaGbQaTMXSsnm9wpp1wZn8UcLXRVn7toXCpWueMYdxFhQEXL9Dn8zo6B2unrq2KRFPDrDp49aMZT3",
  "key10": "47ZX1z2BAqzsgbbFCnyFE3LGTvQ3Ys6X5DQGKgDqXxjVANrKx5DzGKpuq5zAjHNKYu8cikTzXPGZgxjqwnUa113r",
  "key11": "5A1xPJR4BMZaB8gqNgM7c5ZbdNtESAThpTiucHe91GgRoBpGnxH6v82m8GgRGrF19DAetGov1FxVg6evca3wg7MC",
  "key12": "B8QQShEyJGELH48h8oXKXggXDRvfkSWMCs7twUKnjfeE8iU5KX3dy1pVSiPgsQtnejr5QocJiue1ZGkgHFX5KUz",
  "key13": "kUbH7pFTBotFdtKCnkSje9hiNFuvtWMMmF2BPwhPiT5zdWQTGjtNTpckCtkQ62K9MCRJ9ZvHgZeCoTW9h1iLhWj",
  "key14": "2VA35FDg9LK7rvsMKwAfZx8SGn468KVnp2VFFrTPeSzVc6ZY3pAt5cKZSw1XMCUCxj1QaTm1F71E4RaS8j6kaXnQ",
  "key15": "5NXAAEdFScS4JrTdX9EnRxjJneVqtSvgCmSS33YvcwrFrLY3duGHf1quQUBhm8jqGeRZp99u7kZtyzTA5DT5rSvT",
  "key16": "ffxiyCwsBVBqMKjqeQ5m35VXc23BYK6YoFiLDA9smLbbpk8spjyQUgczj4bo2N4EEZFfX7D6nwWzxKEaGXmk9Jk",
  "key17": "bA9Hqymaw3AsjKE5Fp58xrfVsB5riqjenHqBg9Jwq9nqbeG5bRVehoBwvZRQc9xEke1Nn1uBS8rsFVaDLmGrdT9",
  "key18": "odSj3ucaKKiC9BDgPWgQ5jtVZoV6UWGBvd3Qs1V9zusLScnvsv7GW9ShL6EZf63Fxg31kw8QKY4TMTGKiyZQV8J",
  "key19": "2cvpTiCj3zZ6afmKyf1pBCuMSqkGScNR4JysJJgtJSCtBDkTtNT35FvfKak7yfttGytbuJJ2pSu5HKFa7tRxVZ4x",
  "key20": "3dNHjQW7GsP46xgwiSjpTFGST1pEEVfvFzEYC9qc7CcQgmScB4WvcbuEspg1GjcXyfto7haPrbK6wJvJsF7WwMdE",
  "key21": "64qxRncDeqHnVsv8PGSFztyqjK1casZhCfPJnsNTCbGjPC2JzYzYjvo62M2c4QuEZ5CdBEJCg5bjDjpTVwRJ9VZw",
  "key22": "57VsnUxigADsBk4emLkEpCLGgMVpfaKhYLs6e7162LLxqAgGMmPPuEJHp6LWufZnPS9NVsxvAFgquu2pxmSs8ULS",
  "key23": "4S1FKMvp35SbtmHhMpurDEZpThukRnapbWLywoQ85n8GF38N4EW17fsjoBavvq4ZpPUCxjQZM67AqykLZtnVSdVG",
  "key24": "2uYK4hjq56vzLyyuXvE8z9JJa91ynh9Axu39Hu31Ce2LcJ6Dde3w1hRHYx1fkxFNAF9bdJU1umhrz1HLdjbx3dDm",
  "key25": "mWwkFgtsBC9vL79xozH9reqKtGQ84sUzPTDWY79KpzJDAoGhbRWUWktwMCqtmNBWeSWQotRXPnC9xpyXaorKhTs",
  "key26": "5EERE4sJihHTEoy7wMdZ2EkGw7ooKp4bWtv7VqWHRGkwdJiBR1NLtgqsMLzmPy96hP11ksph7mpVRTDERe4AYfiD",
  "key27": "472KszGLk6qotD4M9YQ5xKk6JhZwhEVZ8qppZW1zv8UqJq5RBi2DTwfmRV1xrCRvnTFGCeCouzFUdouc5RnzjPc4",
  "key28": "5teS8tDi9Xd7AhMaVJwZbzDLrTVdm933utqq8okP5Ypd1evmh9uZxcaN7534vsHnxh94AvNq7WfgWauknbvcQ9gd",
  "key29": "5FzC4fzSBHGyD6ikL68avAirmC5xBCd1AX4esZ5VPWh6CBj8563UmfH6oRJcrN4HPY65mXtbwMPcjgHXFrDm58R4",
  "key30": "4QKY51fhrmhnqj9fkQjRbDPoTS4d9XPfjSHtRrUgueL8xrNrwyduZBGDY9tUoFAhWKTrXR2K3zoDGtjh5RUcQE35",
  "key31": "26ZLgzC2SVmLA4XeFcu48dQ8uekQ2iXf2EjRPNyXp8tPDrXb1ipVvvBqNMVojxr2HSJEWd2PSxikoqz9GZCtYd6J",
  "key32": "5XdUicJZjsyEM6tR8EXzUrWVMFGHfgaCdHxjVNQhz6v6QvXk8EBdTq7izdBjSzQq1Y6v4HN83MQub9S4urAhVtt7",
  "key33": "mfvWcgHCAthm3hktMETtc8wccr3z27CpDzse7pz4Hujxxi1FQrRDAatVzQBmMmtrBqJkZY2iAspFGw2gCPUHokm",
  "key34": "5JMajdPW3DrR9nBsA4cJdaFgQvwRLvNbq6mygp7XQEf9RYPaasiwR6bxCZcJi4Y5u2S5CfKLhDbFLG31Fh2s9c9x",
  "key35": "2T9D9YDkBN5BECYtW75ijJvh8TxQ6y53JaHrZZQUEAAmTgAbvdd4v4H6SnPy9tQEV3oUUR277hQavPEm9iyA769H",
  "key36": "3kGinJac6WXu8W85ipVUNKYs31Ns3HTzARcQjDFnirvq4kw6upQ1NLeBjmHaLcYM6Ss26ngSaoBfkfbFmLM4vUmM",
  "key37": "2HRyBmNpLjwTMQezsQT8e3862ADCZruNxB4Ak8PWaDdGg8GsCGk8jUmeVwjkF7hPMbY1F1VRB3pVeRzAw2bqwAmW",
  "key38": "WgfhU7CVajwYAWTHsDcghFQF1DJFGKgRNzPxdCDjet3vZRyYK6pNGr9Zr5Dkp8t3cvaH2Gc2nhuVSHYA8bn4max"
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
