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
    "36ijr9vqKYgjw7ycXC5FvFHNpnoU9mX3Z2xnSJxtmtAN1Vjt3mG7DLVsVyG9aUR5sjyahwyRVm5VSafTH6HTXvbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Tq9nk9ktHkKFBSxPeLtAqYcdHmXfCLb6YJiP9c7k8R1KDiNfhtorEJhoC8mmuTzvQHsbKp5iBtSBjvM7esgt5b",
  "key1": "4Pzhbp5i8AGKgdBBEPX6X4SfPCJphgzsEZTM5LZcZutTwq1oZBzZf9U5x92TcH7V7XN7qboACUsFPKbbSjdpW5RR",
  "key2": "3rHZAacK3Yrn7n8wxdSZTfdYyLM6U6F6xTxuCg7sv3k567Dbyd2HUEHGBiAamiZZb7PoYV3Sz2LsrZekzzLhRJ4j",
  "key3": "2ysvFphvvEsBnx7T7qA3Z97Rmo1VdZDd37Ks4WchsFzLyC1fphFk8TKm1so1ci7sbZKPFr9bisLBivqoiw5sHWUc",
  "key4": "xn5hLwNdbhkBF195XjMiuVXtvF3VGQoUGViT5oZcCqaXUW17nheyfuUYwHXPK6WwWR2BuCjMdDe5WW5b8G9Vhdy",
  "key5": "2LhcC3DksgK2zY43gbiKN8XHPAHM2XuATnokeN8EXvLs67g2JKXRLwunTJCSs8Y5zxp3xrUdTthUKfWCjKqGxQJj",
  "key6": "3ruScdednGDGJP558P2pEj47fWJTvkaTrbQMATiM36cMMGhfz4nmtEWevuNPLZtCUErjsNvN8Zze6orGNn9Z3Z5L",
  "key7": "4De1xbmc6upkRkHiEXjij6KvF6fRs3mpF3CXCYpYFbt4Fz7fdo8yfYUfdxT2FCxaYdFPjE2gJwb9gD3rXRQgFaTM",
  "key8": "3dHT1K2RCsDHzFAuJwgrpWNrXc8TjhuHUkFXJe7LxQGRZZZjYwXx3gmwD6ztec4Dhdw54WNv4SgA6Mjx8fPZb4Pu",
  "key9": "DHTDFhvZtPmN5G8d2H9pyACDLehaZqU6JhzsFh4WZZ4ndz5reQ6jsL8KdXBz6dKBTxz4caajuvadC4GkDNd8F2X",
  "key10": "3JwknabMcRpgXUATPrtFQHqri7BfkSC8cdwFBpdLCyhB6kV86KmZcBxMEtXwMbHyjz4b5mTBB7DW9BNxUKADsHcC",
  "key11": "3NJBzdf6xWWUqCsxunJXtZxtpkLqEorkgT3MUZw763D9npWh5tCQCvgsbHxFc8swusA9RAsLshTmMgjvfnu2TFLV",
  "key12": "3W3R7LfXJdZxXfJSXzYoHuq3oM4yPwgV8dd3LYTSxaw2WWLK1xLVjLmz7qUemdFe1nMMhrYNe2DBK4L8gCxGo9Jx",
  "key13": "367R7YEZsAbc7XSJjfpZ77qiPGsXhDt97ZwYJqFZRAMqXtyxP45VkDUYTqqnpcxFDTbGwEouXMrPuGQEETBV9ukf",
  "key14": "45k3zwhZgQYcfFbWNmjELPa1kyNaw6dfk33g5ZGGkXih2m9c21UzQgwFPxYtBL7kd7dRC14PB1emrfcJWLZL1Bzx",
  "key15": "2dwdydfBnxLfrMiVPPVzUfZJ2W2jHDdf2f8ZGj7p2ykQsaiGip6RMMaVnmkv82s4MhqoKyuuhf68fq41YKBYPp4x",
  "key16": "5mwwX1mTu133B9x5bNZyCSzzhxoGoAetKVdc3M5VZ6anwpDHcsUmSaL9YzDHqqT587Ptj3fQbk83RMUgtZ1gsvoW",
  "key17": "2GrQHeVDuqH8xpHFkhKNg8Lc6Jw2r7WNL3pCn5rnkVDmnfRN8F1KP3tJEg9UUS2euY59sFvyyMETbrGpz3vthfvE",
  "key18": "3YXehrAh5FNUXLUj4i6sVsk1rcpn3HbhsGB6ea1duEwEn1qoBcfhWQ1QQYjmiE1uH4pPMX2fueFerUwNdmbTBACf",
  "key19": "EDFRgqB8JpToBE56NfSziRJma5efCJksTSaaBaG4KaNfDpgDNSGWYxRZAFR3YCpdAqUu7PLVYZUfq7tdBardewt",
  "key20": "5MGGMytAa5CpyB6aAxhb65fAdmbwssa9BPV8KNy3eNVuEyr4FfynULYjNpF4Q3LMaDBLcoFL4bYx8hX4CpryMDcX",
  "key21": "HtwpGRTMSWeSSX1oBp65fWjyB4CfAGeqdZtFy4cvF7JQi8NDVmGw8v55MuKUT9h2ThUpX5YuCSdjXLy27usW7rr",
  "key22": "352Smxs1Y5G5QPrDrTCn2rK1dMLG8Q7a6Ks7ChW92bMhvacH4o75XA8WVWQpHVDjGcABG7BJGkGAengdiPC2dUn1",
  "key23": "4FaDnvb5m6QaZ6fWST2ymgsTywjL9brdNEzYhrRzmJvv48sVwuZwLyoEGmQeLXRZeHv1YxixEiEKKrMYVt6LJQc4",
  "key24": "xHxiH6AjFPtKhqT8s8NK18GuRAMPbdon8YBiJfBdq6mVBhDPgU4ZDL6uGQaisMYiEHtiS9tpWaxKc5jCKd1TfFc",
  "key25": "646mHggGVRQKqjurSyGstQHver38rTNtQqxBBSJMcG6QYfMVbcgTVvR3kSdBFZLJTmQzZAYLqnxRXBsVTd8ezwfc",
  "key26": "53rCXnFtCRkMhCzXtsttgMXK1tceCtmdQ5FU5k6ex4zJguLoDyYuZF8PMJBE5aZd2BfkVZ1wD3ERKw5PyDhJsmhw",
  "key27": "35AF8iexd9yzn3GJGZ9EphYSXXZB74DLhen2nKxgcEFzMBhBgEtiz6MVp5RP3pZxGS56Wf8HVN79A27Vw2jfuBXg",
  "key28": "43fVuAKCJgEM6cp5Mu7Vs5skmrd5uMWj8L7iyHv68FTnMU6EnytNq5fJg3qciJoXvETjFgHxpQdWCqn3wsv2BVz9",
  "key29": "3KvfT7M4sqqVcP5WiXqnW5oaj9FnZfr9RnXkLxgaZBQNRq4CwHK1Uqw5n1vMDzsFRohKVUTT4gZTLsq5ewvwGh9u",
  "key30": "5x3uUdAwN1Gf6aKji5YfmDyVsMavsEkK4Vo46YhL15BMXnS5RqgE3Z27tfFeP9u6hsp6gN49ZpmYXb1c1jy9pmtJ",
  "key31": "25QrWTs32wn1Ayf2gUyKZEJ5Gsv9U3YoGbnxYQDAaNAsa3TUfCqpMDrGqJBSvyKCff3uQsr1kj6dRN3AcqSiivZo",
  "key32": "5rhqY2r5xJ4iqwaG1uiehQsGkpHTVYKAgRwqpTva8jRPRu4mhFfAdrYgjSxGFNKKGETT3KDroWYfUyQMQCs944vW",
  "key33": "4reuN3gBmKdvQNyqZX5TZqHUzYT4uGLN6i96MJAUTocXTBPnr7HnoM6SvAohNsxHtjQkvFGkFVX7VbSizVHwTsJB",
  "key34": "2dGZqZvXknAdN8KkUqDZJx82QqVipKwCjajbFha9uSDRGyuPMy3kQ16Pv6xuK5V5AttfHu5UrctuYtTZaJa457WD",
  "key35": "4KpEQDdkA47ToJDDQmHV8LvLyrfvRaRSQaisFgdzwM5snKYrRXFdq3rpGAxLmduzbjHsrpX4mBKAYn2gvJMWWvJT",
  "key36": "2BgRMKiMDEWT4knF3aPQNwQymt6jFrsuxYhiUyvVrLbv2YaXNgZ4JxD7kYrYcxmZzj5W9jmsX7fn8MkcAgQB7PYG",
  "key37": "4V9Qno47rbxxrM8CbLDeYKEnbKvkg3Uu9NtYWHq2NMbu228K2yPhsArxXuPyhYzSMaAGMx9t8X36mgDqRgr53daU",
  "key38": "4XpqvLZPpKThYW7338TWSzPyJrH5pLoFxY8Gg4iFYdkYFuwjGqUYgGChXNBDfGhuGxU2AN69FrbP1H15azH8itN5",
  "key39": "542MGTCorDXqVcgbY5oUvzR7PN8aTzCaRUfoKushzLVAyhU8PZuqY1a3kDkDrhBNMqnSRkw8TMqZRhNHebu2F3tm",
  "key40": "nJfXVfyjaSyMRMqpYtu4wEeyHtExGMM6aAcFhTQwoTqLsQJbnm8SJek4CREUzNvUDXZ161goBcMWTyWgmQSWXNp",
  "key41": "4f6hw2bMpfvFPoYurRSK5JvC32QJ9bLHVacFTMfi37PkP1oeupNG22Mh1ZZSA7atnUNEquh9pDeZCQNcDYgspTbZ",
  "key42": "3zgkmQu89mJfoKYp7j2hDaMt1XeJkmNutCdWsvg2kvjz8DzRwnypCRPSZ6hbcspg9VFuW4xhvDUQ89LqhoaWWj7w",
  "key43": "2uMNgF7crSnkny8QjucUMy2bw4uLCCu1gLS9ftfEZiYJ91S1guGifbX7XocbwobHFTa8o5L5SMjcWZicxGhd5R4A",
  "key44": "iVXp9YgWuRrizvxxRKMXLVnQRykMgQNjpCQBvveQVwhHfRDSFVYx8ZUXFs2nhCBG21v8Uz6QoFDFYhLbdeLJAdX",
  "key45": "3y3pj3zfXTo8XPiG2nRVZzmr4W19hADbHMNBByUpnakU3u3Hpn9g8yQXRd7gD5vbbzgRYzpu5Ej77d4e1CszuMMB",
  "key46": "4r9gT42YT3rQsqGSwcVY5myozfs8nCSRoUzchhBhEqHj7VyEqb3ghrAYxMZKhsGdc5gH649QYtB3F62fJtusKSNZ",
  "key47": "4ERwmX9LZc4TyXStvxM7vVGu9yHTcxNC2ZqKDxzJnicavMVemMmM2yCsGaqR7USqXba8jWsv4kgqG3qnouPMJqs9",
  "key48": "5GjhVpH17cbLPVR8DpuEeb5eWbP6D6zgZ6QpU497r142kiPwBZP1UdPCkWjxGaDuua5pxub6woZpH8NeKfKJ96K3",
  "key49": "Ah4eZfA1Z62WFJkjuFbbwk21qtgttTHLFhCbcrGKkatEVUDshweyeKjRZ5oFGw4PgAaEca6DDJ7vLHyWXRaeeS1"
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
