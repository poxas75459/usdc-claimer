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
    "2p4kpipQRitP5shWp1QnYTVCNtwQCAfg6Jz7VcNZAvHXkVGf6QHjeQ3Psso7rPKfZMevEwpyKPmDkTfQPdcr9Q5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oDEhRfZmjVf6AXMdCLbCpoU5NTM2KF3HHdfxuyjN92m3GBrSuGgg28cZsSEifyzv3hmG4uCjoFzT3fqvoYmUoTo",
  "key1": "5DnJmTw2WV1DhUVQLFh4nParQdgQmRNGnnrCDpYQyWAVvtQ2ieWwvDdRjiq2Sc9uQX5PQoe4vQKXyjxLsqEhyP6j",
  "key2": "4nw9KD1MZSMP2EHgipi991BCoPvzeCCzZaunAvXTScEbfVtz3csgoihMP2QKMP27Jxdy15xb2BBUhMFLGnkuNQ7D",
  "key3": "39V7F1eDuhsYV9xWScKq795kvJWBiAeqNeKQxnpTDGRvjE2j3HNzUUoTA1B9zMYWtyPnrEZznFfDmTUa8fRq2Uwg",
  "key4": "gZoxNfnGZM6u5yz2hWWnNJfLvvH7AkqMPV39ZR2KuL9rYyt56taambVbDE1YoTngQ6JACQ95AYA73YcwuodmK1L",
  "key5": "3gEejdAtXXuB61mNUsktod3X7kVYr7RWuLKMHE8rcJcVb7EQHDGszXHGovGjYHBvTsgtM5fFMxAhFFPfmp25U2rf",
  "key6": "FDEau8dFNimGK51XiX93vb3poAPVDAvubZ2yEmQDui1sd3HPwGdKqZKCURq24eCe6djkx5ZdQhafRkoQ5aNAN89",
  "key7": "25n8av738ntfauqiS96cJA8w2LQ763pXDvJr66rHH9mQnr4VYqj7j3wHRuqER2SdMrQ7tjVrbpbXHJKdYcH6SVte",
  "key8": "HfHt4U2sbZ6TW5xFgKRTU7EEkSErXnfiPwV7B7ecLaPSit3u3hne2rFquXueMqYKMZ6d6BuLFXTL5xPFsqkRzcv",
  "key9": "2sMSwWriNPKAvfV4p6cJc5WVrFLNmV9EwWouxCc7SSPzNf6q7j8a2GD4yGYE5uCKWJxnnBtYJymgtBoiodSUVihn",
  "key10": "2uWRmgtmpqFL84cEGEgrgN4EjpBu3YC7sBxwQffY9boFBqMaNxvcxmeeiWU1eURPocPDykY2K5hvX9JoVLoFYqsc",
  "key11": "ffghpxzxJ5jxiaSJ59gkeUC6SaunK8zmKTqPBQfEWfmzBoVaguK9mRmt2jCvjcg6GNGpckmxrkcaoRetPSQNjB2",
  "key12": "4gy2ZXGVmpN7V8SiyGHtj55yPA16gVJPgWsHT7XNbMzmgwFLfQHTa3VFvMJjzb4NqroZQu863NDeM7ApCLSxVA3y",
  "key13": "HWNgKr8k3xPuF61aEHLis5kNRWuV9AEzLWceXWm24APM7nsMz2PsqaZA8tEJPV2uw6TyLRqe2XoLcESQpYq3k5W",
  "key14": "41aSNHcgTseh1RvLt9UUoHa2qoHMy4zMxD6QTXgEwvjJf5tZNJRoxtVYzBmg8rxACZzXfDDESQ9FSTrg8dNEXbjb",
  "key15": "4tKSaizjjk12EyDPYxrNhxY3s5poWWL5c5pZnMUHpgLyHf1w9pMVrs5YLkn1fzHjqr11p5UkbebvwDw7e5JUtEXe",
  "key16": "39zbHYvqmwE4Am6yYiRJAwsGWpxTpC8N4wBPqwCt3f65vzCt8CXxuUAACzutHPRcebMmsv86q4R899ym494ohHe7",
  "key17": "Cmg93tGnqGEeg8GVQdfYT3c5hmD5f8yfj8k3VrPmZDtZkBKKsdKrRpp52zhfYSqAAhWmT7DvK3J8jxxWBz2FbU7",
  "key18": "K7gpUtDsQAHT2MdQZjUZ6oPF6zitVt2D3hZXe2uRjMXzDQfH71WDdUmCs9wUcp2SRzy43u5H8NoQTC81kzHQBXw",
  "key19": "35VgVoEfeo55T65uWkMdtJJ2uqRoRhEjoHms7jbkxLoyetaQ8YVBmDjJBFLcerWMvPsYqcWGpFt7KxhBsfQQ3tkB",
  "key20": "53ky1FsxSKVWDkKx3YtWVwh4AYsHCo9yDgcJcr85NdbSS4cw2PXB83R3LGunJZJzrked8F5z6zKJa5QbsQ1EE2UU",
  "key21": "4ubwB9VtXYCJps6nwRpsQmh9irGwEb9nTLRCj9d8Ape4P9G6yjxBbG5djqQPByr7V2fDif5i1nHJcZfMYQTGewDE",
  "key22": "2CC7vpdEawepuBMz7bFctA3MdcFDZdLYT8cBETA4pUqFTsEnz6a77HnVMDSEU6zTZDMf5bgFzNAUvC2XqJ7gizbC",
  "key23": "2t7qGM8bFpD5qMp97r4bWVwbJo92TEaHUcd2ULkL2JtJGvu2KV8sPxkbBXFW9ZPSF3ZmaS8us2tN2GjpEkPj7QcF",
  "key24": "5opYN4EX27X8VM69c4CFkgENMyn1zB2FN6FZwopwtDgbWVQuX3NAmcf1onvBkSfMJ9FGCCQJUZMLiEwfHG8AfBeG",
  "key25": "2skdifmUEa8vAZWgvP2DVdNqm8fJuxn1VHd2zEwwX9w2ZhqvkqfhPsUBEEeKvpQE3PtLz1LrvTKqC5q43Xh4Wvnb",
  "key26": "4qWEZLsyVeZ9cJYfT18tzdbRwo3Rk3buZzpyYeopHbqjhkmPFcDPZaJmmJc78DuLHEAb5euCaCdphUSmpWeeHPXQ",
  "key27": "651SCL6UH5KZBmL6D4KpWqyPxgJPmmNREsb6n7tK1buFpAFVMDMsXXHkxvMi7u99YmYsLGgQG7bK8gsLCcw9MNwC",
  "key28": "5XUeZb2ibJhnEyPyoP8WesqUoWrkh9SfkTYQKbFkwxq4jfLCpxMTuyvhDZYf8kxdoUZHXpnn4a7gMMag9pbqr1xU",
  "key29": "5ZZ7ezRYoumzQinaNk8yFgqk1TvJwQtXK5V5PH2kRHJkyaCnyEk9suW5fg5vSSmRCUjbuw17jU36fEwvai2yUDz4",
  "key30": "5GyGpBDASE7edR1Cd831UhWRgw1MPkPzK61x5wXG98DGi243c3mfAiXWFCmnJ2K4E3fqgWo63vafFG2e37SFAdSy",
  "key31": "2L4BYeiZUvrJ3qBPh6hfL2StPUDe2SaE2LaQdf7Zv271cjNxASqrCVz7xeoMfQzw5ASFrE76imA7DjBsoU1EM2cd",
  "key32": "34FcfkJgzfizk79kwciCsFhRRDN3t9JhwC1H3VpnwrJHwWzXYGyeManifrg7fXThDrdX8J7HEw3iABMqq2RKxuGf"
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
