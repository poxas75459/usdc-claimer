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
    "2o1qGMdtd7wRy46BTpxQwrc8U8DG5fhnAYZPn7MKyGQzL7KBSdYGJeDYaDx4tbubr1GJr6G8MB3PgB3TsBP3vYwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FTTfMHpPkHURaurjdqgK4qCFerurez8namfZsW78siQhFwa1ateHmUhQUYQVbpi1LDYgpAi4XpQVVUDf6JnSRUD",
  "key1": "49jLTAgr4C1MPhCxqRXHQZGJbPXaJeBW3FfTBwbE7tGwnG81gWwJUX7XQ7X21ojigakLAf6KFzdKHFYwanesMHMV",
  "key2": "3VY1fRo3QtjvnJotFiwBXy3v5UoVk8GvdbjaiWwKh6HpoXUgA33KaCGx7pkUsNnmVeFqs93mBB17dQXgUqL197pL",
  "key3": "65nfmT7hdP9pSsCNF29bKFj2AWZTKi5LYF229um9QAU5D2xtbydtjcioXLJbJWeR7CyH2SwSNk7yBwG9dovgiZu2",
  "key4": "3HppCLCEq1xCWpyiXY79fhdJPq4xHcJXq6ekrkFLkrmaPSbAhkshb2p5jxsL57HiJF5dN3WshXcG6dgTZ24rqMgT",
  "key5": "2CJs35mK6SbFiJ8yMm3xuPsbcgKN6ULGK9J2MtSRCrVmf1NTKC9cgFydiX2x3D1doW4PfeyNc91RFjgzeDEBAiia",
  "key6": "5Yb9S4KzyZWeGtnf6tk1ZkMjyZVytiSdnd4yv8z3NuYb6Rp7GH2AJNLz81uqGyeaN3EiWQcNDpmEHQ77gZxdsLGe",
  "key7": "36LfKCVTX8eM8XdVR22AQT4VEV3kEPTtVRzz9Zjronte9qzU32a32GqTNfhqjDzWtH4nSYYn5hhx7SUnRkCquAEb",
  "key8": "3cEU4nq1mMb1BC5zPmtfXDn2TiQ2oDZBVzEAGkXWRP57oE5hFoqtB67VczwCxRVopABkrokt6WSHTKrCXaDKaRdY",
  "key9": "4uvYC429BqigXUQ2BPv3Lt1MHstCH5fq4EDqTRoZoPxDDHr5h5wEt1mCnBqgVAAjcSafhEvpmZWCtFqFHDKiLc7Z",
  "key10": "mkuic8adp6KNVEcnEkqEkr17iroLXtP2kNBzaFjYoRSfq9AMQ9GikAUx8JYD4j14PEicid86x126aDJAYaQZ7ZP",
  "key11": "ozr2u68sgG4vANvhCNvy1CSE2zaYR5dkpGyS3gvAZd4dhkFMB4Aycg3kjqBAg6BfomxGdiPjdKVzuDMmh44u9E1",
  "key12": "4ZFKri67qvtuB4iocSBFDtHbZ7E5XQ9SPg8Gy3ujZ4xegNho5cJi5KX5vy1cjj3gEema2eBtR7bn2o9W4R5dtf4u",
  "key13": "2eZ82r7HZ4nFU5i4ULeqJLm2Q71vFBBXRATsKRYXtnNBDc18mD2ZctfrBjyqifuUFvTqkD6joXHjRpJwX2xDv9ej",
  "key14": "5kuKpxtQGvaEEDTUqUBKMU4Pm6cNmncREpxBs7PPtHb1UC8d92TUJjSxPq9nWXcLhufMu1TmNR5asNUXHMKCA5gZ",
  "key15": "RUPqGdhx1TSgT9Npb1ghJFsXRdDsux9nRcBQXhAEyZhsAMYXp5JGvhCzbsBH8AEbhKGWuHK3YhaoBNdnm88odcN",
  "key16": "5ybMcrCj1dus1aguNR6sSsdV6sa8xppHZKA4tgaLsRpGX5WzLmQCBUWXGAvoYwmBEauWsKZpRXsUGy1V3MQC8VQG",
  "key17": "3svgT3kyBbKAi9d9PACjwcqtvrdJkk13nGWNxyBCgcYF21wmbZjcnP9nhPtxc4m4og6FpgQzdjKnb2VKeXySgALn",
  "key18": "4mdqYrNJPW1Hsu77PKHVcCrQwr9Lznp8Sri87Tb4xqwedyJhUs3sEZ6HeSdVXCwQoGa5aN93NmNRnUWcZxSgcBK8",
  "key19": "5WqMkXPSnhVagyiXfCtjFUecawuQhN3ia9CKP9CtsrJS63wNA4tCiJF7TCf4oqHc2PMmfRND2UxSoHRTuEY2gqJ7",
  "key20": "3mDmBM5rSnxvEC16HjnJQTCQSYrnNCchtavc32wC4VhCeiwCjoorpvfASbKMjwMnTZwErddsXS98ejbfXWzvobiT",
  "key21": "5qryezucTYBRmGQBdqQKQUGG79W2mXZf73EY7tqEHgjLXkV8kZUD4YXzbyvVE1YAeUJCzx1ao529Eq2CJMnQFjVQ",
  "key22": "2NbCQXrjQKmj5prN9QxvXSUf1k2SJ6yRNv5ou97x75W9BjFU37v9TUKxTZYWQMnvTx4cviALnSJSYhkiRbnDTwem",
  "key23": "aoWyvbeBHVSpFwXrAg3HCorNa4FPyhHJ8P7gzagajAAgGUgAkyVZLe5hxriNvZvV25pm3eSpKt16FUVGvrGNP63",
  "key24": "46NYvm6LuZJtvzRGEvCBX359bBsaRzY9dnSSSZzz51daWVfc6eLNBxLbcPr2v92Tms5pTQRtpnhFmQkDQiMPyLGf",
  "key25": "4dAsZ3i8bH3fT4k1bwrGVfvAwcFpFobBxyn8q4enACXLAASnW6cmkKF45EHA4b4UiPuTfS7CzhfXCjxdXPabZs7s",
  "key26": "5fQUSo3Dgc73zrBaK2Epb31doSoa6nQid8yvWmdAo2xzn67Erjr8np7cAysvPYcd3NGK4KGg21N8uqwaqQsUPCyM",
  "key27": "4yhimAfd5tDXSFbhwrx8PgPZbaBrADvNPLp1AnY55PAW9Mrz869kpmGmwViGppa7agXzcW3Ae8RzQQj2cRpZf6MH",
  "key28": "5bn7J4NMF6wrdhMa5AFrhvcYP8ubfoMvauZLxjZGBPQzUTCZ8MxzZQNoDVEFEWgV1aRSeEGsd44d7emznZtmMyW4",
  "key29": "3FSHZUZ89sfntgN41C8qSZ5vvRtQCzDjfjsK1UfQhcTu1M8urzu4J8ZLSuwiCGe1921duZtCgBZmNMWL1dtD1GFq",
  "key30": "3cDED5otHh7S9S4eBTYNTP6tJP9WFZNdJFzhAMry4tV21W2Ya4LoehHhA5TQDqvACS8J6F3ypSWTwqBubvwxfkmh",
  "key31": "jkchbe7PXzd2C7gNY4zjsKRafcMRr35PbjAgkY6Bwj5vQmptPC77qpyhWfebkUCn24wnYdB93NqBbQaaHCmthpd",
  "key32": "4KNi3ymtLs7moK9Nkew9SQoCsQDbTQCPw3pwxahpyLcmFWnmoVCsdzvbcLHRxUjkU1UzQKWxGRrSYfKGEbv9cBhD",
  "key33": "3PKNQYE7NmatqyL774Y9BAbMkVTiHy84KCTJZgvNdwcqTks5FRTqSSsDW4xdQfp3eUVUUjJCjLpemLTCoUSS8xqz",
  "key34": "3evWiXmNsSfWDwVaGSXULXszzN1C5mAE4hksrAeVdP4eJ3fmZNCYMydW4Z6hPnvU5xussXYeLQHg1jiQ75hXjyJ4",
  "key35": "5DR5ra4orsUDJs1QfDnLWQSaLfNzgLUSvaeeMjdd5rvZaVTSjCdXdmWny6QMSFpVDS71XTKkgasBEf33hTdQykBk",
  "key36": "4r42ny6xidiSQfXGZXKHAV89v9JAg8286nRYR1aWdZyAnx75cYzajBNHBMeAWNMTKycncJviSA89efR86cmSeSvz",
  "key37": "4kSwnQmd2VMvd57s3dTT5HjayjLRvCAFTCEsikHiS5pTLYbUA7jPodW6r292dJgNTWq2Z1fe5vZjJKXabPHbAdzB",
  "key38": "4p6gT4joVujf2Pwn4XmU3pEkLK1sFXQQryV9sGDzVqR7571d57FTmkVJPTLfdmrNTUgGeZMnpszeTMoEFJAonrEj",
  "key39": "3QoGqUMmGzFjUq5hds8JphXHq7hM644MT9chm8sN8B2bbexGZrQQUSBd6a4oU319WEAQAE2xiDCZaJm4cV7RMpxZ",
  "key40": "BVivKrdGB3c9gF4PESW9MXmhMhBkDk8DzBcDSXkVZ76KZfvUqe4unaaQh3q993F8XEzyarKsAb8iszHBiz9S85w",
  "key41": "3zzA9S7QYWzRHv473LFcajM2ko9kMrKu4CDAFNJDJtvTya3EzG9iyPEJdNHuW7PEw2yetgWeXCLzQvHCwPbqZaTF",
  "key42": "572LFxwA7D4MtRL2M1sRAJYzCWpm2cvLhQwW8HrrFKyvkzoXdTbEu6xaMDjEAiWPAvgudAfneVUpoyChhxrwLBzu",
  "key43": "3avmzjoZuQMwQch4N1nMJp9uqLL1oBRNKUw9VguNagqQE4WRTeuXzAkg8kkwFtCts9gRHfXngYih4uyFo9EcdK6w",
  "key44": "3jTptst8BXP4G9WRv1apXmssDxhwnNKQbNGHBAE9UVKAbWg6x4Ynhs7cGXHxG2RsNb9Y435fzBhbqJAHV3SPeNsn"
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
