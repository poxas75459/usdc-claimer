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
    "3HVkhHC4wfFqUzauBjodMY3WcFyUDoQBazxVGFoa9NdWFur9VFTVGdJCDMxfSj7qd5zBAZnrCgDUtusJaSWWq5sy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tb7sQ4rRsWAH54Qn9YtRBuZjwUSnumsAWnymengZ7dFQQ4QWatH63saiFuVEE5KVf3Zk7nNzT9bU8x5KWMtCwrm",
  "key1": "4TJqNyMFtSbyu7EFqVqDBR8ga4xG9Ncy2QsVW1UnnuFPAy5Hbsc8fVQdPDVxGdTnFfR6C9ytdevE1A314e9iZrB7",
  "key2": "2zz39wwMhW5kZyp1GdPbU2TxeNVGj9kv6axH6enzPWUQLFgAdiApK6jM4W2EeMCbN252NaiAUKULuu4VXpggBXqJ",
  "key3": "2JKshQFX6A3mgHLCBSuLsjEJqWnauHt5RCX45KwJjtw53qFBe5aY5yhZNfNLK5p8wnPVPVpxAdSpyaCJTycNGrdr",
  "key4": "7Sb6QGjQidrTzT3TKfARi4RoydAuuPKUtn66Ftc9mRWbwkkVzXXWbNWJTKizWMKuh863ZSMt3ULfKfs8uGsQmqE",
  "key5": "4KiJLDdGhPpFZ5yNWBffRy1zRjRKhUtX6utHut5EWkD4YHU1gycYGPCuEz5WEZyTiexz3LNypY3Em4d1keS3oRsr",
  "key6": "5pK61Ghj6rPPWqUXuQs1bwdM1Pyck9WGH8K9PHrA8ZNM6xRjzmXpPEESQNhitJqm6FQdFcw5y4mAGe3A2qje4U5o",
  "key7": "qYdmkGTrUwQ8jHP5zFVyf4psuWPM6vSothrf152Mudkkj4YgZHNouxfTUSfHpiiSgFCXdK4gzwgzhjEfy8RTvhv",
  "key8": "5XLDWAkjf29onMimXrPUCH9B6VLLxAMZu5GYzXLzWb9f3XWFARMth7hctfwbhM9CfM49Rhxd7czfvP3TRp3f88wE",
  "key9": "3BiArKo6siou2WfVzG6iRjJdbMZUF5NqQdFoo9WrhhkXa5F1mbeZLYJvaM5VoQJDydFZfQR2aQM1eUSqQNpPmKd5",
  "key10": "4wbdLchBL7an9TvENY52Dpyqgniec1qupCvRN5uALp9VfPQ2tQHb6n7b8MucdheZMN5Rzx6aWmhurPypDrjXg1Ne",
  "key11": "4DvodNQ1kPNppRAjKK5DLqMBgx8VzHFd23jPqhtnkKCzDk7y52qALbhedJjzQF6wc7v9JKWw9xJVEgcxWeFGZqcG",
  "key12": "3dddRTdvamBGrVXoUKfNwJEG549tKRdxn9KVMvJzvrycqjVUEv2yuAbJHYJjqopu7P6uaRKUDYz74oQXoaXaRjAC",
  "key13": "46ed9y21A9CqYvyJw7Gn1dUn2gpgEDZcMPrr92Xh9qZ6A17fZFCvxTJtxbT2dsvf6EKvKDj6YxuQq1R2XPbhCCyb",
  "key14": "4VxMvckzdGcWfGaAP3gDWA7M6m2qRiWoK19oq4A7ZstxJKNGzAUKGaagjq8qS5v6Y4tt2w4wmeoaV55K3CYjd8hZ",
  "key15": "BGJFNEfKKhhzCLgDTPZvMuZjJKgxudrbXhEiFzrtbJXs43Mvg4ygJC2eCyPr14P12qNZQquiP7g5Vgi6oHd2Ej4",
  "key16": "5bJcHJgMYzfrACU92qAGacobCRSPXTQGszFh5NNsdM6bDkT8PCyweYJc5cHzPVc9aUih1c8dWhe3ULsfcDGhtETQ",
  "key17": "5YJCFiHmF3nsqTHWYJ4sQY3yxUPFGKfgn2rm74z2ukt6GAjdWeJddpnwXcyt4z75yaAz7mwpackP88Ajz7VPUhFo",
  "key18": "37epkFtTSjc4j4Gj8bqDGmaWXwdcU23MJKNftfbWqByq4UpW5XNJn3zg2bjd8J4pbTqCff9CvsEBpuido1nEGbAd",
  "key19": "5nMAHXaaATp6FfgDxg651vvvie6Gj8uLSFRShjKDtNzsa2AptFmPejkvskzjEWeQTr3QkBLLPqUA4iDHz1dpSfyy",
  "key20": "3T2LSK8L7Vhtrumeqc6rAHAmV8ewZQ1WVdmiknjKJkawfniYEEfzcxyHwYuw2tdXqTAJjt2JKCnn6QMLm6jmdwxp",
  "key21": "3T3euZEPtECsXexDiQ3eRbF5qji4WTsqKy9DHaDwnCPRNHJQ322XShwG9HdxC13trE5KX2Twvz5o9qoabZ2zSXn8",
  "key22": "24ydCUysaKqpew83HFhcJbx6tiJ2vU1q1GwMM8a72jUeUkrA3CUj8hceXY8u8Vs7Fae2r4chFejSXdG2kzADgsti",
  "key23": "27frKE9tWXLfJSs2vCCRSVCNnUZQ9xkfpn7YY1fotbpt4eB5W29jFyY7Yc1CtFU74AagUNsDbofj98U6H3oBuX8B",
  "key24": "i1h2njn2JXC8EUonseuqNR1jQ18zpWYjRyyjYUYgcbQpMiyCxXGYUq4c6uJzzTEYQUG3BUaaArKHM9JjY5gZQ2R",
  "key25": "3UeVhxpFuaJC4ZVjmCFSp5K9sJrUXn33miL5twhsp91q5C6o4Qrkp1WrWNqPGFqGBVRGL2Ax2SsccPdxVhcApVgF",
  "key26": "2pA5ziwCyPaQv4MAH9dmRtyhQGEKZcAtCtiebTLTepx8Xu9VhhyP8FY5o82cq85sDw2e1gZPdgFiBuA4FyWPDQGC",
  "key27": "2u4S5hxQN2jTTejEj1LrXxHzf6ggfYZ2i7zBi5F9ZPu5m74x6sBDk3uEvYvSuHLjK5ZxLcYsZxUNBigcZzS4wUdd",
  "key28": "rQBLoKht4DhNvqhN8ZhUc1DU1c4jv9xrFhFc9shsTsUjdjWm496gsRA7UVThjiNEkNHrCfsUXzNzRtjjwT7grkZ",
  "key29": "4MCQnBPpyhu4Fo3LSiAzESHGjddMMsQD2vS8LZ977mjXoR5A9HGakx7nnZZn8p5bhurCAqrWbiXNwmArkSzNkJGS",
  "key30": "E43ttPzX9Uvfszv1iHx5vthkRnMbTDb7sH1AsWh47vs3RKNoTtAvRwbYRKCBoiShKyhW7oqHuG2LJjZR75tpEcB",
  "key31": "4w4aCedBuh27rJLtj9btsaeB1zcDRHHvnuGJ16eQVT2bhz43gyx4fCSNjQmo6eVtjWiZmTTeVFh4yZcm8qNfz36E",
  "key32": "677bH13gZhephoFpDjd13kYDnHFRVkkTDZ5vbVAmuPCpXamftTx5Ey6hMjTkUFVBtJg4CPzExxhiXFEXSLH6mHpL",
  "key33": "4dVeqXtzL5a7rt71umFbCjwZsxges3BWwMEK8JU7z6QSdjYtJo9vZeLw3YV9o2QGBd8Zp7wmSDNvY6eqC11bJyXB",
  "key34": "ZDzebMEzscD26AUEyJJ9w4E3XzDaYfYwREuXtGJScpQTXDjFqcV8rJxd6Eq84H6sZjWdcb6YUMP6crCqoNQUcUD",
  "key35": "3fsFD7qMv9V6GEbtdEJhepHxrGEAVxRKNWfSUoTmTEqLScHPLFQLiVCoGgUtLyns2etMRfftXix96zrdfSsG79Bu",
  "key36": "5bAfa9qnxH1EzRYppNQXXWwt9v2BeTjSsC4z2wnFSZ1euYUDRZwJg8xYpPDghmEQCJtFnSKzMYmaKUWqQ54TPd6P",
  "key37": "23uNiJvz72t6pq6eVwC55C9m6N6khD4Hx3aNM6CL5ZXiqjffMp3FCeFtQbDDpRWyWxyVyv2u8tspS7YVb9MiQCNC",
  "key38": "5B5t2TASxiii6bGy8ogzgi75SNXgVaGZTZJe9QBvZNEFzBmTi66uayq8LpjtDXvbZRB34njd2QMapZq6boTrgdGj",
  "key39": "28XY3jFsJCgRgLkoFW92eWShkWBnJU4tSaJrDEKk5sxVgd7Qqgv2BEDoHmhoXLFYo2gavhTyEtBQo3jwh2PXJWLG",
  "key40": "312EeoLouHou41k8LspswPBuHLz47BLxmVhmGWwH8K6bPcisy66S6zfewuSviBX8exPhjmnjn6uLkEcvjmVtyW3U",
  "key41": "4ntJThbGmgMiUBgJfGGLKxGFw4rhcUJncbaMq2cqchvu7fKR16KHhaFeyke4hhauQwHEEZLGUfixGLixTYSVoFSa",
  "key42": "5EqSHD9jXaZg3KzZ8VvRpfM4sdL3GzYnV3rKwYCUT28kQQhNQMLem4KbpdvPtTMJNVNM8H8UNMqGLtCVWyHAhvrz",
  "key43": "4WoQbGLzDdaNTomBh9yhTdnJDhDCSyVgnX2Bv7QNBSy5v5zCasUDNgDMxrUfevvhKoRhSejjsPUEeLFoXaatKXgu",
  "key44": "3RJw2h864nWPtWdGRYHYTwiMXp2ze1w2RwtrzZ6QCtG3GqcRcvwzKM7Z9Bft69cTCSAiZuAu5Zp4hqNafPn2QwPn",
  "key45": "3UzF4s23GjmJdodn1rcCDR8yZhK9sbJz3GwiTRhdMfhtAKVNpR5A2TghdSgfGAmteFsQ5vfU11EBmiJc96akardS"
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
