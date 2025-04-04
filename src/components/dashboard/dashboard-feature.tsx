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
    "4jykbEMoz3josCBwEZBS9vS1Y1zweYVuFawbhoWm1WcH3GnQarWp1VoqqVaceaxkKtinxc8gVzsgghpafpaTKvWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JWaE2ANscSZvEZfLegHCfGhJoisNKTV6GMt8ZoKegYAcNYZeDbR8U1nhCfF4A7BszDMLPDn3XfvzktBj8JuwN74",
  "key1": "afTprpUkumUCMeaq3iwmFwwVo9em8TaPtAvw6RFp9EToEjqX5Bp816BTgDki4qYmbZvsct72TpDnBNRTcCR1Xrm",
  "key2": "4RhZod8gQWccCwi7G7avwyGK8KGcwrqispik7dUxCogc9DHxZ8vuJHBsViSKopjjsKvC8KFK4ye22Zv4vE6QkJgH",
  "key3": "3HpTM24FeZjfFC4qDBfgvqAGQXEKEALLGzARN2zdhdik5ND7wRYdqLECwsiEaHe4RaEJ95QKkgwL6HN5vcaFjLAk",
  "key4": "5nmEtXux6Wm8YyEMexaaEYfckombZHtEm8qiBWJ8vwFuuJtR9kLxc2URAo3bVpmv34p9ACk3hjk2WtoJRRvShEw9",
  "key5": "2T5XPa8inWn3aVd4cyn1oHgFo4SKaDxBL5Ff49keZezRBYConcvxV5CVySKa9QdMdLkcNwwaUM5m1DXM8VhJFWkt",
  "key6": "4UuCdZzridbjQvYhZHMY6orZBqR968JQkyCLv4RvnsWaFG9AjSjYQdjvPtKWNW7eUL49MDangTPAz9C9ody9CKJy",
  "key7": "3HXRU8fvWj4cQSqZJndCXAajbWTLRRKrRJNYWVWiTa4TpecwNnJ1RPUcSMfftBa8uCA2HE6gFRvtRL68JoeHuw5r",
  "key8": "2tbwttZ8NgVgAsMi6R922n33pF1xEkuzXsLm6TxnXQ4LyfroAHM13MQCnrmkuN7GoRjkneDiLmBxoFCCbfdjbmm6",
  "key9": "2ZaRrGQSoqQ9Mt8VjvatbdVwqRphFrsmh9Ey6xB2vhLPis3hd2hnSxx1LANajwFqXqSmpo6zJcKojL8c5jq8kgct",
  "key10": "2Dzes4SaTQG1uuv2ZKvkTkhAMQ5Szh5D8emMscXZ6vZJW4MUN4aHMUHLeFh7FPMUtYGKqmCRY48Y9br5QX3viMHz",
  "key11": "uL7Y5xuDtjDY7utLtgj9AAJNe2LUsicycZ8EXvqnxgLREoVAkkjZVYiBNtJQuRT9pwPvSpSBqR3EXKT4csU2zwh",
  "key12": "5hbXHBcJToZXayQNcFDskyncfX6knrmqWZgGbFQ93c5vJsXYh2JHxZU6C9qgVjAiYGUmBiwqikajupwT69MfBDuc",
  "key13": "2NBxyrpoNbDPGcUhNx2pVka7uS7LpNhLz7sNrA9HhSTti5xSUM45n7AAaXcoH9hKnVkXck58LcSL9oAGbBaLyc1H",
  "key14": "4m7BcZgdqY3voDkoGv96fWwNBqXyaMDbvvWdY9pVygh4g4y1WrvZAX3Jx29eDoviWCBruGVDmVRUPcDcu72MkCbw",
  "key15": "72tCGRq4epBmnLcSCm3pxnBMmAcGRsDeS98SbSMVrrPGxSGWhMAK3348JXcD2edEsFz436NuoH12euQwYq6nCfU",
  "key16": "5MCaXmMJ1YGUXvZMjUc5dj1oje9zv8GCBS6HEAEBfRcaDhZTZmPCnCPbsHeJSN8PgxuTkpS5vegLXp583zA2GzEb",
  "key17": "64tvrGVyBTUScMGZ8TkL7x8ZyhLCxT5KYhjs3Duuo3brQbY2sqqQuUcj6VNdQjcR1vt4TiB1FZmpqQ89HgPVxUWg",
  "key18": "4x8RnVLUXey7QF5GtubTiz1MJgvdqXiJPoW9Zy5xkNStrzhLNy6xT4XvCbKzkzM4GNqaXJjFHuGa8MjSW2x1ss43",
  "key19": "J3kQ7RRXQFw26d3X2EWWGquVqPxdSQETE2SDfcwJ6N7nY8aWPejZiMEDLW5GQSYrxoTA1SrBjyNuAnMq4B7ZcTj",
  "key20": "3mTqLyhcEWJsULXcUPudscoi5ds1gPH9ujY41PottLwbRtN4E9ZQh3p1j9hYwUvxWz4gvpwz8xdRKTCX5Kc9MkN2",
  "key21": "a7PopgiaHAWWJhTkCAED13p8zUo6xvJTje6izEB7bBY9gokTEEcBm7m8na1hAjG46vBHPo7feRJp736nUP2gZXw",
  "key22": "3qCQww3FB1jGbZeuDXnjJjBKS3ik5d5MxH7bo8rWdCGK6hd7V2LtDiaLjddCPQwSRpy6w8XTbzAkgfdhPoLBKiLy",
  "key23": "Yn1Wc14MCXZMJ4RtNkJ3usjBWcQtmcH3NtBWPvmRJQuBKhWA3Db9EMFZ7PTDsaS7rmjfeJWBK6d4SBNDFWcFrFA",
  "key24": "4F6MgJvHuYcWSi7Mm4ihSeaTzeKpLLKiP4Dcrp63kWKLSPZ24GTMaovXHtRy24pFFJc4BDvAkAx2H6jNXXWhDGqo",
  "key25": "35EWLHLv6vo1sQLqh2iD5KqCkdkQK7UPEDhmuycx8ruP595JTP1aoX8yvyso2EKyh56pW71tFZdYRfVpwWgztkwo",
  "key26": "5So3wJVZJkL1QcdQJPyecJMz8ZWHDdDzghJN89TvLDswegu4LEoWLXFFy1E6pZQLHotwGmRxQdzDWGv4y8BD6NyL",
  "key27": "3Wkken77pG1hzqeaNFUrnmtpV9AHJuHdsSHig9Cqw4afbbjR6KnMLt4NNgBPT2feLRvFBCAsdwRRtvPHfgwDsCoB",
  "key28": "4GpWGNVWCNDQ8HDoFzpehGhvPjuEaidrSJXv44muSACz5diyxRgCJDhjJdPqWjAWK8kk6zPRPjaoDXz9HZLsF446",
  "key29": "4UFuzZdv8Gmjx51SjVS5pKkmM6d1B6eyDRmK42eBsRYGVuR16UUgX6ST1NYyepLsAj2NyhGswkQEywEJH954h6TK",
  "key30": "5s1c8q26URucXgTUBp3ATg6MP43R6cEEFVonmF4w9iY54DaDYF75CmNV2hD95budYbA4cvFukxnHYsoEUi22eayn",
  "key31": "jYPDjbKmATc6X7Xdqf6SgFHZ1fLx1Nv7x7E6C4FRcA9yNvoK9xUaUKF9omQWYUfsvFPeQn48KpAVZ2xP5FnVZsy",
  "key32": "59it45qBcibJb9axy16jBeeqqunGCKF6nopvYbvamn9gS83cSqfdn7fF5wHKNJogfqk4fuEYxVxBuPNRh2Vv3Pbb",
  "key33": "24dsYdNZMzkbApwdUGa8EtxiTJ4MBy2AgjifYAMxLTvT8WqQFajFcX2GqXmDCtRGgP4Rfq1AzayApq8AXjCUduzd",
  "key34": "AxwY4tVTm1KctKzqyMkmnxAuCyXkFyE3D5zaKkmxrWEVzfVwbm4xUfVStft4UqBiTQBGUZdwyx2hE94mMQggUup",
  "key35": "4etsVzog9JthRbARpmkdzifXy4RY5j4vBhLiYTWdnWYFMbdbSyiPwa34jyU8hbDxKqAtZgYWNrVV949HCp5AwUUE",
  "key36": "4Sa1RdzYarLvPirhpSvEbmyCD2ZhxGptdmFLc53LeHDJrxtLAGAutk9KPHTcygpMj6phag2t2NXF9QCkXPVrkgEn",
  "key37": "xCi5e74KARwu4d9MV61tB9FnodRL9RRBhJhGCpG1NtM9fYmQk3MVBCt3rkLrehBrpKi3chVAKKMgW2AwAYRDuhp"
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
