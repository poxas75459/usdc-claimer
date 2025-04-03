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
    "4FjD9DLP7jN1R24nLK6cwT1VWtGB5Tu5mp8AX4HmBRiEXUYxRacKTEUft4pRrMq6iaHCrjMEUVboMvjxMiAQJaNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VkyfkNEVM329hqQ39cYAro9PX9WKwwhg9NDrvXeeeQLSR8q8VvfZb5Ziet3k7wM56XfTDDhVVsTugW4xSfGZwGW",
  "key1": "5DvYnPV2o7F1sZ8mQUpS41ubTFqnZDRx6N4xdvCieF75MYxqXGLB38UAnuS91EpdpLsBVdUj4iwhZGie6MJ4Umtc",
  "key2": "Y1oAteEXBiv75poj9VcKr9p5jfBDoBi8hSZrZViRta6VYKuZC774TBaKkcoS3pUWqyJmJ5JBeREdH4U6dvZR3bk",
  "key3": "cQkoT3Q5F7so5bq1VikFJaEucAfPsht2A8R2ssoYRUYqSDU1F7TdTwectzHmBryo9Yq9Sm5mWGpBo9Nwu2VNm2y",
  "key4": "42h4EL45BYBu8eSzSHUwLwF3Q7216MY81RwXt1WPBJ5j8Lbxk2Ajw6j54pbcsyoLBpMbz5q5EAK3yiTqyXxTCJWY",
  "key5": "2PF1dNxVsMtPCFDaERaXF6RFWgybd4Ub8fV2Dd3iAA5ZBm8fFCDoQEZ5qZmyAoKgpVd3JCifHwLkRCp67W3nSLB7",
  "key6": "2DgKSapT8Foo8Z3yvXDKdQ7japjPszruttSEmoQcz817T4LSnARHGZvh4MWB2ZE4Hnc8MpmjM6wfMHua3D5H5wNz",
  "key7": "T7b4JWi7DctS7Y1E4yJSJY2YqfUapzV74TtQRsfo7sn3JgfFTC29nwnFGrFQbgFNg6yjktKrCn5id7L6QJsGKTp",
  "key8": "4DJuVYyEfABG5pxTYHNkwvyaAu3UAiXkpoEu5LyUUVieVL6GbvToqskLyaQzhSj8GWqGEnyxT8wpmBaRRFdFmvt8",
  "key9": "4MLrhUcdqvjwrbpcsmR4cpUWkuHrLTN8ADj772MBZ79wWKirEMqNBDR786LbcougCurBM8d7FR8ZxEfs7XeGLx2B",
  "key10": "NpnPAkjfAhdWSzRvhxYEqHWuhgpJNToLEHFh4cd8HsQ38yAZuXAZZcbkdL5ishT5BNevkhuTiEd4sDRZXznuDv8",
  "key11": "xq5zToEdVqLr6ZDeaYM9DJQm4yc62vGRiRsgkyKSKRYNRFB2ohyw3cq1ocJ9YMXhpUgEQRBn4VCcYVpArLeVfxk",
  "key12": "4rKgnZWNHyp5SuJ8yeviJoLZ4XsCgBxbREPnnKmDPC8fPtjWEcfzzSjbpZJfGgbL4LX6uQ4mghJ8zjdmjdS4E5r",
  "key13": "63CeSFBUZ36HvPgW2VBgvyTQLVroGbZM3azcgJkMteZBrnbMRNFouTiLJJBNJfNCdgx4DtDZMNeRFxzCZP25WvoC",
  "key14": "CaSbtLgoyHycioeq2rDbHn5WjC7oU4egddpo2donw1VztHP7AdW5shujLaATcL8YPBU8wZ7grgd6zx4CPxk8Nu3",
  "key15": "5FPAYiyzD62gcnSFiPvqkdirja74hBjsX3g7GYkoygkaZR2jR8X9WGwxPds1MutbdU6MeV5an87J9h9j4WgsL1WB",
  "key16": "nwGme8hPHcnZzghzVJNfg1Qj17mEdfAg5d49LSMP62DkMQg5o1u8F5gaDpaKiQWf2bwNj6DPdxXckw9iUvxG4jm",
  "key17": "2qMemv9rYVvDGX2AG3vSWTBAiKWUVVdMAsqgGVqZx9WbCNVAwPbBqavpJkiuyZRNrFC9CQUw2zHkfhAdA7W984J",
  "key18": "3RMQewfywridp99CkuLchGabeAHU4JhiVzNqyfeNJmzoS5dBEbbMxKRQCPuG6NwPnL5am4YYwJg1oDU3nwQXK7Ex",
  "key19": "2RMCXNiXEdFiEJNPkpFAmNydufyZFwqibnzWbzAtHJiBU4bnN1cmaYqyh54NaANCKJqfQgYW1zh9B3Ktmtagf4Ad",
  "key20": "9P147ywfNA9gjWFXnQ6YJ9mvUfV8gG3jSTUqYmeBJAY4FosfcqUFWoV9SZi3ZjwUHTu7ei8Rp8dfRQJVYDPqzTK",
  "key21": "5qWRDkYdVGLQk1D7Mu8iszbyNLqFhDNbM83NGH7C7jpPz91qrZ9XWCasaBaGvhyU8VuJjqkPGKYvAiNZL7w5BxNn",
  "key22": "3tHeFi5eMYocou4UjMxDhirjeHQP9St6WgF2EkGXYgnMNgcRY7WNRNMSStWBBW2qXubU6wEWpDihDPqcdHASeW7D",
  "key23": "4w4R2K8YnLBY6VdnyUqicvntHUeAViVvS5EV9zPMnzMwbVLVwy8stqnSfy3F2RP45KMfUzQCPNga4Y49f9mxRsQr",
  "key24": "3xiGzWVo6mCeKt55BYyQXFDESdgeRX8WMAtb3Zrom7AykJFhq6zhAceaPX682ygF3zVd5F9BRysvqzqZRtE9sAKn",
  "key25": "VQK6qAfmX8RSVasjYJGrhMemCoGqdK3gGD4vzq29ftRftSxsapszDFb5Y2hpoaYSZJ28YMvHFCkGjiz7BDo31FB",
  "key26": "4qke4ubxzJCekLrh3MNc9DDXG3y9gMMiyqsfN5zMp5KJtcKEu3uEMKbWv4GjLvWvbfEdpjdnYqfXASFQXBFcsyuT",
  "key27": "2vdBAQj9DcKar3GwMvVoSY4LkvFsFWULHgXisCVAwBvEVQu8fQSHJdCVFWpTazghBoRShCpSyx8V2fmqpiTuN4J8",
  "key28": "22ZLeEeQj3GDyQxoiKdC1pWA3gSy6gqzNPVob9CoovDvabNFHCq76JDAVqrAe2uwerRUsTz8kANE5jN7UvVdmJQn",
  "key29": "4Brzcu63Xhk83giedUCZ921S9T9EeyvYy22CtEaCE26KFRBBjexYfFZk8oJEgYiDAqCUmgbPBHXWpyMxefpC94nJ",
  "key30": "3WokjDrWv5c9E1eooM3G2AciSGiGcqeqjqJeWSAAgiy7aCv3CFfXJ2pzXqK8wpKuXeAqL4ZShcTg62UUVkA5SF9j",
  "key31": "5znXu1qrW4ya2ctEj49DpbjAWM3TdKPrG5ZVgVQzcw6EEtsXVk6whRCxQuSZwtM2dmwcYCEiVKHCCL6xFfsdpQ21",
  "key32": "4GsGN7YcXLB7kPY1vkHg2Fh42iJjFPbuoMPt4JJagkBjTZMq5grHjWUJmQutGCcZPkxX5EXdqJwY79eQ27esKVh6",
  "key33": "2jxyMjYZGeLxFQcc4CgbzYikHgyNwFX7rBtZB2wQ9MsfWHgRGnezUSBKXpyyP5KYzvgknSDUgDomGL4pCcv3sShk"
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
