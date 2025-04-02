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
    "sxzGTpYkz27y6CVFczuQAuGiqsA7WaRzmMPvBQxiKugrAAtJfBF1o4gajX4kBjLeTfyLRHqQfzKASW8FXYt2WpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xS292M2oTrkxrPjuiDPQ724iP87gKbxMKCWAG4VvCzzsKUSbuUTEbaEjC9hyk6rsvDyFgN68DhQEQGJjk8RHF4y",
  "key1": "56a4GCFYPPfaQRvdHsc2jkEpr9ho39xfADeP2MbQCe5PouxWgTuKHFBunBhu7NuCTXqSJVpZKTUmQrdYGpvMjMkK",
  "key2": "2WJ2tfpXvudhM1PMwtpn7JpxjVUy4snxk9YZNo79GQBBViSFPKiQCnb3br1eDNCAiGXxVXi3cnZKFvwPFMeJjgjZ",
  "key3": "5dQvBhyUQzUc3aRpHWnAFduCdsnkaXSxEwKKrZEavMwt5JwJEg5L4UtKrP1wSETv9rCHoo2RFyrwTkPBzZAfVWdD",
  "key4": "p2jJyfQHo4L3j8MMi2UqfG9AVFbMViSQpRuRcr3LRBHTsWN7b3piy1KFkNmnPazjkkqyATvTdx93mqEZ2D4fj4d",
  "key5": "3QtXWMyj4BY4qiEsz3eYRkWWQsGhGCHUzDYoX2acAGuTEYNU3DKmXzz9ri99M6z4qT3i5nrV8kfCGjQ1rUot1eKJ",
  "key6": "vv285AtoF7egzQ8G42ye1iznbvnxbd1AmudMhmPih4cxqhEVUYNfLwG5XYEFWyYmCpDwd8b7uat6up9dejJaawp",
  "key7": "2t6mrARn5KJWtr6sf765MrGQpeKB3nk6BgaqGLYQkEhVCGGQM8A46R5AWndEZ76hqrwm8ibaxNhwrXBVBaTTrBJY",
  "key8": "21GTTh8gB9j3XAGndCPncAv8rXQCaCqJ7mSoD56xRzGjtc8BCczn2wQmUQ74tB5CG7v9KsYeKyWPByCdQefBXXWS",
  "key9": "3dzxTrbBJhRjKMcDhvsctq2BLtj9AWLShEdqiTGQqoNDUt1PxS5NzKhLkc4KmtdyHkpgckBRgZBh33mHB3MDQguq",
  "key10": "3RfJ8fLKZk69oMDrdi9J7zt2VwTseKyv2WuG2CXvmS3fvN1YLzKexRpjBFAdTeizLZcngeDEksqEY5CzdEAkaRZ2",
  "key11": "4ArWtwvMa2btFFTY4DPXwUtZWuqJi22GxaTPXLnBPW4YZotA5YtEzWg91ecQ8JeKSwdCG8odoJxrLYt1RoLAK6rk",
  "key12": "pRd4AGiWAD4HgvWhvtpoxqXYD35V8wapBp4KLarRLgUUxoyn2VweKXRzN2mP5vaoBb6QUDhyPzsKaz4srvfnMk4",
  "key13": "587K89suLqyR6EPEvGS2LhVoVpJLs7KCzC5bCz6KTauhTxqdLMt8NvocTWXML69PPnSL6bXuTX2iSpQF5K8B11pX",
  "key14": "455HER7bLhFhXvqF8pq5iHHjP91wG1wDBQVBjwyxBBGzYG8WRc2rGFhWxkG3xSxY3kPidgiTCBjpzd2hsEGc6opb",
  "key15": "5p5UFeE92mTewcUWkxqxF9X7dAcD9qEUn8YNJsC9JHCEDuMtY9Sn1jawDKDvZShtkYk9nDta5TUMVoBomBfsvCyj",
  "key16": "2ZTvHssGKinfF3qbudyHkUBSgs4XVYvqD9Lw4zF2XvYRxdC9i2ptWxheXnXgiiQ4RX2ZSvijqo9XWZwEFbC968dQ",
  "key17": "5Nksqkk2y8mq3NhtGJJQC6GkWBU9ZKgZioT4oDUxYGQFrZPYvFTe5VUf7XnL3Aeumo3JbPrX1uEEAyS3xhRdBEwA",
  "key18": "5K6WthZ6QXE68GhmHEqYteWY8Z6gCKBWWyfHe8oP1zunuCphihb4DYYPv2Sgv398bz2tgq19davqYQY6rq2FmEiz",
  "key19": "4722X2Cfr1voxcvWSNWjz7VBhf73TC52FA7JHDW9ERsMuL7pCSFeYRWwQH7TZxmyVroShSRtT6VKU4STTWqBFHA3",
  "key20": "5DvhfnYNyVLZ4Lob4beQ4WQAL46UZF2jajyvbH3YiPstkBsTFTfRey2V9A6hsvTPaGKseLzVV8TufJrEba51gD8Y",
  "key21": "3zBj6dRjwJ2M6R3mhWHBSVxbpXKVjxyJVXQwBa19yKnikF5avqaqdypLyrmz8KW9UL65e8pCHc388Pac4iP3sLWg",
  "key22": "5fWVXjxtnG7N24242DxJt1eGKAfLcRssyo9xt18N7JUupnX2tNV6EJNN97peb75SEgJya8iASBW9mfwswrRkcvnq",
  "key23": "5PobG833WELvnJ6UjPLbK9gDKtFpYb9eVQUDUAwUMfMUk8H44Mzrb5zALyBHf9FTYS75UbKi6PGsvMhKb4AfV2Pr",
  "key24": "2dLtAFbbs41mtU9JVLbTh36NPK1hwBp6hGdLspXY3arXa1V1i9uy9HCzEbeTcqmFSQtF3LYJUBcLCJzhjZM5KpVP",
  "key25": "5HbThadtiiFr4r4CjDD8qt6bxHo9dyRVcGRUoqAiFYj4SEnwSYaHHYX29gxHGz1Hf2T4KPj51C2zP5NYbStCH935",
  "key26": "3dGZZkHHL9Cr9UcLdVVvyD1d1fxjGXpB8ne4vNpxdGNGTzgWUtGSfFUt454DeUoNP1UgZ9cMUbmr4LYwjrc67jqV",
  "key27": "5sdKiBwujxabtQYy9zooHAAEnwZ4tQMmsarR64GQ7duy7MAZg1oj5cZVFFzAzTSBrMGk6WDvCoi3b2poGzn8FC8T",
  "key28": "5eVx9NXi7bBhmALDdnUCXuQUtWBHaRQoXsERpxAmTVRJkEjANtiB2NGnrVcE2F6Ym6xUYfUswSGs5dMATh2JHWi3",
  "key29": "4xStbDSEUXCPm4F8XRtjjeBEEyf6NpUuqShXFjGJxx2kUmppHv6sKGW3LGZAndRjvpREVviw4nLZAhN3GaJgmuQH"
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
