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
    "2ZSQ7qepr1ketd5UubBvFaPCJ28w8SVuzXf23aUe1hZRvzC53fQBAJCCxJvrqCZdttzvtuhpk93g3hz4bNG7UaoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8aFBN4XjLxspa1ZXi9JGVKGL17acfeqyaSQLZUp84FRgRarHCT4ejawErRcykkaRp5ou2MqQnonrqj9b64P1dc",
  "key1": "4JqYJ8FbeVQ792poivdrFjFLAQ11MSqvXUtVnMeSaHcBRhPXyizzirR2mHjffLtDjp7U12kNkVky3dPcXQxYdmih",
  "key2": "4Vx3nAL9auWbafEg7HDKuWFC9kNuJZpWwvyaFuJfnVCNguWCBqjN3vxTmh1Z3oiLMijhjXPGizFHobNPoEFJjmUZ",
  "key3": "4UHpjh2qGUXo6V5ngW3ZxwXGv21o6JcJxk24vUnPqrqLYpBZHELFTXDWupVyuiXT4guHgrBFLyLPiJT24FHr2r7w",
  "key4": "2icFS8AtZtw1WSbuKhhzPHLe7FpsQ9xCbsuAe44PqdJtHoG2TDMUFy51RStidNcVJoazM3B7MJ2TiWwTuEfRhedA",
  "key5": "4rMZrvCanThxnfzpqVWneQpT4sB7D1huDqdKnByqRRD8VVhtDER5AksCGXf5hXWLF7kKpecq6DpoE7wKYEUzQB7R",
  "key6": "2r6uh8CCG191CBtr3UwGs4zU6B3hFi2K6J2gx3mPNVXT57Ktra86fayTzh4mgQUQZmpexo8bQ54v4EGEzSRTfFVZ",
  "key7": "XVm3wLtG8nkkQq5xMF1S1MsimoEdpJxxWWt35yGg1X6jLiBhBeAUYKkbkat4SGbKZdDaPisnu7aMQovag6Vken9",
  "key8": "4rptwFj1fies5Lx6c5TqLTu3BEpDCbdwk1RJRmMksz9uqNV5yDLkBmexvr9TpFNTazYFC77XuVN4SSh123WuL1XW",
  "key9": "4prQqceUuRb1dtyiBvM8EiuTMSwg5V49VvkQVr5vze4oQfTNQ8CY4spAU5TTYu8rPPGgyBrX4NctjUkd2mkAVXKv",
  "key10": "5wgXvcLUmuFwiQaqks5Dnm1z3q1fTz3ZyQbeNA5Xp1yAcmZ6jjUYpD5HjfWoW4tHUTcVNjm85Xjj2hwPfFN5s991",
  "key11": "4rFrrNGdmEywEZVVmZ9SGtaxZoU3EzbBxD4hpZ8WbePAQNT1RZke1EYvArF655NBAq7pWRT4tVvK3vuVKUtQGfqU",
  "key12": "3umCpjbwoRLgVcqV4GoubNmon5i9cTCvWJZDAoicUmKJjDX6eJDS8aa1aQsCEZAxsnyy3nALPCgr8NAociELpcUh",
  "key13": "4jhMJUkSutyC5hNNBaqRW8hvEghQNWmZBMWyss1GGX6Kr5hDXvHU22KmZsnL5k6uWxZ9R8UJpoJtC8LjgBhZFwtc",
  "key14": "5ZJk3mwwUryXeFi6VVUFGcNQqKfzEP1jRREnp1WcGHaXFMzb6em2qW9doVAw7cM8KbMWo6eUoKsSrW8TMTjicgrc",
  "key15": "2WKMKE2eu2tTo3Dt2WCZeAJpxp3v6WvtrkPGbJFER9NthM2Le74nDngADUZSHCGe5Y37v3yqUeiEx2xrPrEfqAFC",
  "key16": "W2GCsv964VZ37im1HazfFouv5CCLfq8Ebxhw1cCn742wk9HdEiv7aDiad7tvd3NoKAYHB1qSMWv9HtDKhiZWxpC",
  "key17": "3QQtgmcYoxs4gvqewvP5nRqawJksdnCEGRcHMrvsd69Gpa5q5ijm4SV7m76J62RfddmGBrGg5y7ipxLJEUsxEHpR",
  "key18": "3c69uvh5iPje1UQaBaJPR1JCyaznBKrMHkYThuBg14h4qesNDgUswEhe9HCYVHwQgGvU4YZLs6KYnCY99HAcAmDe",
  "key19": "3xmBF9TSAGYpS5zoZYreoRwHdnKySFAms9gAe6x9c8fktGkXQcMifxL5nzpYktbjLBxuBFX1a3SyPxtbvkcwcneQ",
  "key20": "GNzQyyi1SW4h4L6RAhQJkSo2RhTRdo4pphKAFzmmSndDj1VZpFRSyBGFkMeUM8jcRSyHLfcfdAKz8wHzqXtTYYJ",
  "key21": "3bCyiCMAGogUdhVaeQFEe1nLQxHdTXYkVeeNEZz26S7467SAmB6vqtWwaej6dB2yQeG124pcUUZkCJ6ui7xHuihA",
  "key22": "3brAfRXmmh8ZqZ4wsWSSEU834TZEUF42rkHKVuAvoAMpQw6Q7CXYQTHA2vVnDAmKwqjnWnrhAZvd8WyJuFiM8LvR",
  "key23": "31Lsu3v2ZxMJ7CzCuGi49AH4Dzm5Nft5Fgvsv3WdF535KeNkVV3bbQfwkrvJp4RCUoidorG9sjGPZNpievE9JJwP",
  "key24": "1kxcXSMkyR4332QHdtUNa7gtvFWqMsxbTHaSFepbgm67VXadxufNPb1R1P3deLdsKuRrGrDVsshHBph2goNdqCP",
  "key25": "4d3ptAq4uQdw4f4Yva7qAYhw6B48GooDAuWY8dDaZdRAdi3sgFuCJara2BmXz7yPYUSYrWBGXy1eM8ktM4wU7SrM",
  "key26": "4rb2W7Nzg1oW1asgPrPaYyZa6fSNKoE99SaJS8F52HsbV4eSwMSmDHxbHxvjAiV2sxNBa9ACG1FM7n3dLYq4e9Xd",
  "key27": "2swSd1KsFLiQMQEWYVGjuK9pkh6uwfV8REx51eAMkUQKsFtRRnXaWYa45hy8JdZjY3zFraVK3qZn1D8xqdaYdZUU",
  "key28": "5RtJSGWNH2e1SJC8CJXgUdxjS9n8avU5iQX7mMAwdrjmwb5g9peAvazrAGjKeKzhaVTadmNB14zuxQjqVPcqzDic",
  "key29": "39wSGYf6rjgHhPXfjaNCJrvqXRgG1zn88oxNP5wbK6PryeCyHVyfUiLEELhygBXpgxayaQBL91tXVbcK1397ufCk",
  "key30": "3T37EJyzw1zJQNGVkCHLGCkqpdadmgRZAtqFS1TenQ7WcnKDZK6EeuWhJ61WjRznA6URRMKDuVwbBWhR1irmdaVY",
  "key31": "2DUstDBMYBjdSEgRcKap6AWidQUSPknEawJ4q6K2m9R3b2g4DoFcoVwgsHJUY5n7D4hs4heTT4VJCdfm347D984D",
  "key32": "5wGkoraFv9qW7kQKjceDEPsBYAPNoLKiDaP9155NRb2zpkVFbiKjGAy9ioRK1PX3gBgByuvbV12jUmB3o937DD2U",
  "key33": "5VgNmy2LeuojsDWU5erm7QyHg1XwiJ8npsKisjVtk6CiGBBpCBS5oZD7bkmjZQ8UTPLrkDWC8ZppprfNkvdK4gVq",
  "key34": "2Fb9YoLUSLGQLcZ7mdgXJN9LRrZs3rGaWQW51DDpXXw17qimAEhxE8ntvJh6PvF36n8qWqsfhdC4drLcbBRpLMVq",
  "key35": "4j85zMqSvpymyN7uouH1V6aM6B94y7ojKv9Dm28Azq2edH9e9jjrgYqs6JDLXW8nYh7hGUC7rrZr2drhtqSZro3D",
  "key36": "2wZiXC6tGhQU4eeDotBhpTK6pv7Gmy3NgYLspp3n9fhen9bTey19WkafBPy6zEo1TghRTuFGMJALzraA8XKBZ62D",
  "key37": "27iBqvDUNAFtYxHCkc87zRs11H2uzadVpEPLLCRFhYhFiwu6ec59wU7yAMj3EzyN6ackZXPf8EmWbrDDxrijEjAp",
  "key38": "4TzuKhYRC5vbPanXHec71DTWaj7DDMc9ugtFQbeGv8S3oN2hBGzmquYdnxbPJuyKqagGMk7mbQh8cTb7coKY5cR7",
  "key39": "YW8f5N2o37pEsEw8EKGVcXRUt4V6BtxyxruJMNjRf7XWyRUviFnmkpQj6cNUGoejCA3GEZDPBwCyD6M5BJTaa8Q",
  "key40": "ZkfaBzaVxVaNKWWmQdQfQ2FmPewgGFhXcCU2xgCjGt1Mfqg8FhT5S6uApWYBgi5tCWkWGoGrMvfMrmAR7bVMKSj",
  "key41": "KUx12EpiUhCXZjtUtYk8LL1YSVz5RoWoUMtsH7A8dsyPHKHkN4tGQskkTaZcK28gx1v39vSYhoSvgnq6cPhAMWm",
  "key42": "2ivDFP5UgZUFNuiHo9J6DXxa4xutor8afQBDBvWbCqFqMTvmHpDBsQtc76iLwWJLwdBKxTnX8co7xE86C5JoVY5b",
  "key43": "3Kruvy4GBhJFmqog1SfBHntUR22RUrkoeiXTaiKUHBu4CV3dGYnZG4MK9yMV33QksUPto1Jk1vEgtdgJbGT3H3qM",
  "key44": "5Ki49JQtaFaHhd2n2NbfF9Q7UKrzKuHBdjQiomPVwThfTHSCC4qrh3fwqQLtf3XJKK3EJ1J8tgG8n8zdRWpyiN5m"
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
