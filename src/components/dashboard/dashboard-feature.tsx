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
    "4GhubvctoWcRi5gVnqRfsCNaMu1Ed5c3cMJKEs7hsLQxPgR8xSKUnwUiNLXMjfkTbt8WC6GzMFZifPn7rS1U5p9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43r96jNKVrzpDHMrNyjaWu5Cyu78tp8Bn6yyUam4rvyBsDQBysQcPaVSpggrotW45etBixLWi3JvBYT5Lqf6ceKc",
  "key1": "5HnjPjzGNDnvebQLGjhPhXv8gxuvEyPCyD9ux8tWQJzAbSjR42qD6nEuhohMLEUBhHZUvf45S7WapZDw26XXcWLB",
  "key2": "46oKYJAQnVwoJFnXyMeuz3EVxhhAofZQm3HVtFiP3Du7RQuXkRAQ1ksbSd11woCR6WaXXQAQVgaYyeMrmBRVJjjj",
  "key3": "EjdWJ4iRsht2dg9bwUDxDRt2vTpa2x21ctz3JEE8yuNcnzEt3P2C9KUQgXQU1ik9GJDB6yZdskcCgSjXSQS7VEP",
  "key4": "Ambx6x75Xgd5w5NkivxFxPWmGbFG8oJiQ4LLHbioJW4MwboF1RjFcuHoYria6dhMxhwjHDjq2MXxqcbxNEB9HRg",
  "key5": "2vkyRgT6Cwcj5YefC2SqoiBFf7vqze3nsvXvt6YPUQsWUAD9e4rimHSkkVS1kKg8HrCUUwKbLkFz9rjFSdDXHRNz",
  "key6": "3EBi15K9oaeH3nChjGZ71mszYWAt7wS46vJUZS4sdNhQ7fXi3ox1m54Ls67XuHmGpRBX969nxiejbbRWVLMQ1SeU",
  "key7": "3qKNhhQHbtMSdcjgB9ABAhmEy53mW8RYn2nc7kZMSqvxk6a2ikW8jLnTBGKBcVqWzBLqQfP3Fiex9LdkZ8SCUWyH",
  "key8": "5bHQNTtR5YRXkgHWYF5g6AKEh8wUrJhSkrEkjdWpB2gSRPEFjNWzXBhEnGBpVHKZx5f9a4tbmH3CvSsTkEvzeFJm",
  "key9": "61kuMKN111nmJpgwLycCbV5tBHP2bCrVPmJ3g8biMmDkzuLJSgLFbqPnumHMfzZ9UCrvWB5KRenfHkS8xfGqWdCS",
  "key10": "ibLyHu2rVyNBns6JtWLK2V7CLL1fksNa9QEB7qdhyDJ3xeX7hJ2yqwwEhytsJwgm42XR5iJbUcsp2ccDxqHRTqU",
  "key11": "cPKAc3WoiMxDjnsZ8sL9aiAykjV7v1KLCQB2nqPVh9Usv1XshVv6fFSpx58rAuHisHSzg3uxcZAGwGmoYVFDGeZ",
  "key12": "3ScNGufqsg4ui9KZzMYkWPMAjdhhJprKZvmArbaMAvrgEWVx5BhoDhA8g85YcjMcqnsmjXZySHPiYtqafUUZoNjj",
  "key13": "5ZrG222SfLBVzT3HR8a1QSt2sFyNegTuxDMATHoBmNDywn21c8LwrJCfvSKYFaXWBwTJ7KstHcv8CMJqA55Fc5g5",
  "key14": "5Ndo6Eci2pQhji7tRLaYXodPv8FQtDuDX2iCigxPgaiidX3Q3Chs9FgrKmsc236GivwctGRGioFqywkps4LFh9dG",
  "key15": "2LgYHcCWcpPSLEFFZhMBixK1LwYBrftZU9Qn7cxSBXqPTE4w1LdefZ2CRzZDRebNNtEez8tSWdr5MpUcQVxFz7gL",
  "key16": "3w4wc13mk6M76uBkjw26NY2JopWV27NKiZTR3ow7w1Fo71QJJ5cgoijgrDwAU2oi2h7ANaFvjt2W61R8g4iJKsjD",
  "key17": "5bVJ9gw1DHwsAxoekQ86w3Z11wzSz5SvuPgKE9VXpwmtQwDxGixSzviXx5sgsZuzFYrffwvYsT5BSqXD4aqcfW1q",
  "key18": "4aSLiLFiXdDYBtdtBpBJipPEDSWhbm6VjHoiaDz75nZ6DzHEHaooejrt9NT3CBsiNvFBPDLe9BGMnymHSnsJjFdr",
  "key19": "MKTk3j1UWGomvxgJAj9BG6RvbUP9p5a1qWNP47HtjWYW1d8HMLr3MApHynQDDCjWHeje4gRs9U1CiDi5WV5bzoW",
  "key20": "53XFYotZDQkHVJLrdXubDdPAGgV2a5V2mCkvUiSxC2fvdJ4BuugawNGbYSj8onwyZgwzWJHJA2LUJ9ixyqFDA6KK",
  "key21": "3viHidxC7eTjpTqD43ddYy2Ai9kKw1tKGVKpq4owEgaSfavinUQy9Xe3zoybMePbVpm1aG6JH4gvfshEHowjYj1x",
  "key22": "2pWRiahxa6L6vQ59SgEPcaZXukF8JvEoAtVQRwNnADvG2mohDxMvDBNLx9cZDWor5AuhoN552YCcRDFBE6DmUxsZ",
  "key23": "2FEk2ydvs9gcQm5cCWpVfzdKoZhzdtaGUv3uwGv4SL4sojADh9mXmUPmFBHarEj7heS3R7v7Y3Y9HNHPG3ixZKha",
  "key24": "3H5H52pqdrGzjbbeetyTup6hy833muXLPAgcZeqQMhoRNJp5jGEknqs7zchSbKfweR5ofMbUesF6rZaXFUvtV7oE",
  "key25": "4tGqgzR39HGiQ4jSdqL4MvTmE35Duj1fWyfzuBBHGe3gtrwiBhH3uc5qrL2A75Tmkdn2RhseEoafznDb3Bar57aH",
  "key26": "5KwxV12uJQ8iT4eDvMwpGzkbjWQfpMMWtaGN6JmrK1LUYuDWWEFtLysTULnhD2e1Kfd5fBr65yXhfb9if4UUQ8jm",
  "key27": "5gc2P1eXj4mDd1dqrC5szVQeiLj8ccZW4D6yvZqjfZtJ8m9xoGgVwmcAe54nS2dLUy4XSkYjWFnDR9Firxp7zxqG",
  "key28": "2s3FpanifV3b6fFYrFiWNUkAEFBY4on7DUXak7U5e1nNZvb8HZQDAmxJNkEHTTDSRJnczgQqcNybuvf8MNBYDPeQ",
  "key29": "2jg2yqeX3P4wGppHz2rHaG7WvJknbPqdzjdAjAXmyBNpWHDtXyThyBvXmVy4kVJNDmmMDUJx8gAL5dJaHGZCou1E",
  "key30": "dUxTa6gsQc7dutvz6oyT1ZvxWSpnwoVW2fyqfAepdmvxixhkXHCniKf4PLc5Kv9A4KB7TQ1HxRwbmLAMRKcnJYZ",
  "key31": "5yNQBKc65CAbuoDKDLwxPyotxibVPbZxq4Y1TW7qA8MdMn6hvDsaU6VDmpC8mWSPrDCQ8VcEFCzxafZranfRyMia",
  "key32": "5rZbWNArGCMKhDqJ6nEFJLemk1swzCqLUqVpAarmxSaTpoX274LY67saQptKJdycAZ5q5ff7c2KQSSwX8kXDjki1",
  "key33": "2BcjeoVRVbYm23Rvw21NPMuDmzTf5NjZyxpuwyPN9XwhfopaWxKYyJuUNxprRoZGHySRe8bLBcu1jsw1ZAbZqhTi",
  "key34": "4Fjd69nwvtVpVyvdHkpxZK2ETtRLkHhLe14HZLyHRmeJGk6pm89gbbjxjaMFqr2SY4vVJV1NJkDhi4LkLxHJzeZX",
  "key35": "57mQoCdiZ9aAfRj2ZVoJLz589v4rZrsGZyDYdDbAWqFS1GCQag9hYgLCFDRDePZtmSpy9AmqxqCoWGqZUmM68rS1",
  "key36": "3spL21DoWQJdfWZqeDW1gEidpm9WL1dAy6dgqAvZ9ke24wXFFQeWZZ4yaPFKDzPAWUhMMuPcTgyZqYb3j9cySyMz",
  "key37": "121o7FCJTGSHLWcjaSjMPvYTduFjAPoe1QAVhh8pRDWNHcNSP9qRcZjw1Vwm9cSoxGTcNVi8eEfaMKm7SF29M72h",
  "key38": "5qGbReAnAkSqpxejLYWwYzEfg3oGPhHvg8UfouwJWt1F1NW6Q9D9pjZgvt2PE4ozau1rjj24ZBawgYe6oR4zg2Mr",
  "key39": "wmHRZ6VJcsUmGT8JSbbuPoZM6Z5yS6D5kX9hYS8KAMr3NL9UfNT2J8EYPCNjhe5mW2CmUhmJ8gn7WUqnB6oaXgP",
  "key40": "M4DARGhTbqmCSG7ZKkjzm2GbnvQxjB62tgXArkiTCEkfdqwY7vzGmspKHjKvGBHTP114ZLrgRHLuZjuBDetzvo9",
  "key41": "4Wp8tzfvr1arTqB2k2JA4CXu13h8XBVoUtTENgddoPvmMs7cUhnP1qkzm371FW5JcPVzsWMgRDKX8uk5V2n4YxPR",
  "key42": "31xCApfH92y5nFiYxV8dKwdZBhLD4V6Efy9uBztKFcARZMgKfmLD5dn9DcYAmck2HAfQsPCxNTrVVvHHPGL2qPDp",
  "key43": "3ZbodJGQzpyVKzur8jbzUPyohyP3Zv8FBWr2aipma4aGGYNipXFNMSJz1QQWmdjEfuPiN1wJY2BgYosxvfHAq2z1",
  "key44": "35Rjp7yJbRoiRx2tqv31nnngd35JAe2yU3TQvnkAW7NBzu2afxaWCzmchxra2zWL3dMqwgvEiaAFkqy6kqw4qiMV",
  "key45": "3snL1XubAg1iHxosBWHA7s96XGL1ry8xoZKrQGdkk29zDQRrvj8gxR1ZxLfJ8oPAVDfz3dxPJPRieaPtFC5fof9S",
  "key46": "3pkf6xwXwhNWXrGTRtZ2Fs4kx65T1JHiFoeLV3ebxRwVRwZGt3gdrFN2VLtTLCSrw12Fyu9wdwnxo5krKUch9xBs",
  "key47": "SB45ptRXZvfMRUzb413wqBX84aMZXrEaKQjEexmBVmgSCXmxVhwViawcEh7FGSySX4hHo55wbRFrjnGF8HjJGDM",
  "key48": "2XiGZScp7KqNtEfHkPY1jbwEZ6KdXvAqB9F2j4fzh1qGikPf8dvjXuwopJ2Y6P6jimEsdx16Vrtu6oEqAG8nWyHk"
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
