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
    "51FK2zsCgRyqXMge5ZSDLcBuZU3KfET98po8sp2rEf3iz5pJmmgByGX5rETgSpaNWQVoKSvTAbkjHZzFi3MTDcmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TxgFGimh7Ryr9AQuEzvWFGD9xLyMFmWXYqQdLPtEAqGwK7ZjBmmwjP4yYyQA3TpuZt6qpbopQjp9wvzMmKFzhpR",
  "key1": "59TAec4R4kdQg2pFw9Px6yb7pd1SgfVYup6yrgEx8XoBAouF4jC2RfkjJQim2VB8FCGM7TSGMzxh2Uhd3s3fdoD4",
  "key2": "4icZZkSP6WwtbqPafokZGPkesug2ZNLZtiJKRu3HAKRo5KXzLGXe3nkAkzAB4DDJWU87k7dSfzKqpuFbVjrcYHBE",
  "key3": "5smzRsMBAirjjoNJkHbp6N9CvW15BuaDdjQWpNzPHpEnP7qihWXEYYB7kEQg3XAHxG6P63twd7hyFwF5qZvUKWye",
  "key4": "5bN2qPjqTLE66B8Z2a9sx3AubQk8bpZzHGYwu2H7L4b7BPzFKfbnnRH7wUjNrNmRhSWZJzANbxnevm3G75ck2XmW",
  "key5": "4rhaPn7vvLL7XYTaWZxjWFruFrPGRDx2H6NcQKDm3jwkTGodR7nYGWrzuxj3StJK97mztCTzLHUYvRmznwJJn3Fm",
  "key6": "5m7WxES9ca5FAbmCukqN7Yvrw9D6VvJJAWWrX4oJXafLxTNKdtNYDnNYA2f2VECRJsCAkxmGmYzCUBbM16hNmTkt",
  "key7": "5Xhq8zpkHEAVNb4MCrZbsZ4ZChPpEDZ66PsXyPbWqVPHPYAawuGgNCE5bHJMppQ1ahdieU9gJLVDi12FmiSk4PGx",
  "key8": "z3ixhTUzCaNVKXeLyZrG5LcsRXJAebiXmeyShFaKsiHEwNynXge3dJpNmwBSVyme38BUkhVbLyc5xR45a1LE7s4",
  "key9": "4uj5xbsetxUutfN5Rjm8JFMvuQkicNBk99xYtqzt9jW6bz8XQ37j47HQQFuahbcaBKwhhqo12iHvQazK3JL6uuJh",
  "key10": "5ckMzDrPLYrgV2WDB77P4pfv1erYVm4f6DmtFpeCk5aJAkx6M9hGZxno1dkgjZrjiyHw18TZycDBW4x6YcGzwXUH",
  "key11": "4mKnj6wMZnureZMkwFtcJtHCUbL16Yo1ZbPmEmTm7JScYhYtGjjeVuiAN5hQVf8Sq8DKruXxwveUuSptxjcSGE9w",
  "key12": "4LtCRo1rW2B9i6vkFULDZWyQxQRvTsBtWMGb2o3jq1paapBoBSh25SVUiXLhqQfbVmNz6Y4uSbefPH1dbrWWjhoY",
  "key13": "zEwAm4EApmEqavVKogV7aLifeEeVRoJs568rJxav8uZ6195srLNcRtBhQSJoYrfXvG7uJqmjJigzreXnEgP1s8S",
  "key14": "5wjahgw2EU8ttSDbw8hWBMDg9eZh2YZbvuMHAtsDWGJtkuaLZyWsB71XdDxHQYCJ3dNMakyAjNybgSXNUncrEVxW",
  "key15": "2BbwukdVUdBZDge8xTdqmFD1Tt7ujDuFYiMyPi5T8seVog4aD1PpVQsYDthwNc3APUU1gcoBKwxNEpP6qcSwETen",
  "key16": "5bojZ8nriFdMaWhkdxFtbAKggdQNDYaPrQML6PnmLL1nfdXu5jLwX8CGemxojkfXz3XJFQ8w9oeCHgWiYBU94Zbh",
  "key17": "3kPn6nd1A5AsyVJVnvk5CFhbAR3q5AEYkcwrwPPPRp7FhwpzrRXu3ikS1cxYqGBYXusdXnNpg8Ej3UQi2AwmHCd6",
  "key18": "5axahaZiFNL7Bzr4xsyX8er7vyhj1CWBc3LsBrweLfSkmuLZx4catqAsxNpuCrBayVF6zxp3nN3bDJ7qkhh3SF5i",
  "key19": "5y2B2gUWHpLBrwHH9ViH8nL7Fbk3iqGAk2JVAuhqKF8LKwm4HqWvmH4YRBBuQg2eZNDtPn5QBnrit1x8zVSV6r1L",
  "key20": "6m5hjsBY7otcsffLxpzKbHSYQRRF3B2KKNMkk9bQLGPmxFGXALsjjfvYu6yQg9pC9K3bqcMZPd1GnT28F35XikK",
  "key21": "2bqcJFBabPZ2PDPfb9a281BSsN2ZM4kYotyQSMSiqwBDD8uby1nmMxWny8h2EDCeyfanTjubxFWfrb9piE158t5H",
  "key22": "2R8o21MLPnKUqALovPVpA87UktdX12JDcaZoMtX7bHmXmrNaH8gE6udzU7RtNALjccfVx19GqRTD7k3Cnb88g66s",
  "key23": "26Q3EZ8vQt79JeJByZDQJtraEunNHoD19HmBpupd1H5ZsbfEGg5gj7WA7UUzZsccYwfjPtiqyE7DgUBqJPSWZSwY",
  "key24": "ja2HP7nN5mEQoRpJGrKS4LQk9WmaUwuy6YVnKp5GBxYTnbr8LvSJ4j5eU2j3Jaag7ARmAJ458zuTiVUEzyTi6Gt",
  "key25": "zMeGg5kUXTVTA1dF2PQHbHhBuzpTyHQcdg2oYSCdZkA1tphXame1z8kStL8pPRdDMKqeA5tbPeQpBpKhAwidsxz",
  "key26": "x2tPmLtbXbaxNUTaRmnc7wb6qjHjnNNffRYs7Z1dNDkordm27orvnwPdDtALNrSr6Emrscay6fmmgTXYb6eoPYq",
  "key27": "643fhK2xSzibUc3652EDN2xQQ7gvagTsjao9AroByXEveDrGR7u1nD5xb96qxx6AyTNfxgFMsfNPHK3f3HYDHuYe",
  "key28": "5eYhp9P9xdq5aGRRbCWhscS1MsmbTHAXiUs4NNyx1tU3ezK2W9S6BbWBKLmicy7RXkPL1NbDXR1aWGCWyAXhdgfF",
  "key29": "4KQbLN3h7xKAekxyYpJ7ondrAeqccdnpHHD2W2fhLyMZ6N8AWNx12ijGezA8bjpTDzXCJk1dfqFDuiKY76TpEQVF",
  "key30": "4xKrJDeCt7eqiz1cGJkQVJj3TahVNDoXeWQFBQ1ZUcYCfJ4hwtfhHukgemEHHNT1WNFp81HRmg2wSnpguvAN4qhT",
  "key31": "2kGkpsL1Qo9fdPDnrsdEBBMSABKrSNVZ9d2V2yJCdphm9qfGAJToFwFL8BWYqiEJo11h5hpJsLYeMEs4nvZSBgPn",
  "key32": "2nXHdQpeSDUeTVXttEHsNgmNnKiy95QXubF1Twyc72HAfBqLQa986g2w8PNzA3Vo4koZojWgNpoz8VAeNo3xippg",
  "key33": "2tMigRTiwRaZJjtmAwzgrVK4FY5y59VvSiHfDi4VtjZpyMrmyTQcw9MkfRQQW1iexw6D5qFUK79vGHc28aEM8Jqx",
  "key34": "4zhdnXuZH6r1mpuy19pojciaXS2gkx5hqE8o6aEcFCkAhxJ2ZUe4ys28pwUQEi7oVVTjaAoDxCAtZjSh92spb58W",
  "key35": "2qKCpR7QBsw9fZCaHbqQ6KqN4dBwxDRmcT49ZJQZZ2Cg47aaxXH6c22GVg9sq7WMEP6WEG52zhabfQnKZqepF45m",
  "key36": "4rpCMwRiJfuMB25bhLvhLDaKTXCy3PiPkuSBhyTkbMtezKJ4LhYj7uuaK5DbejNmKaqfbdWZuCCiZTyLB2hybKZJ",
  "key37": "6y6pKsAez4fGDPttyJjQdPkBfC3Z2F5eTLENQuNAN8g8DM7xz8CnmZ7cn3H1m4XTkAuHv7cNncbvyawenYnqjuv",
  "key38": "66EYha3nNLCrrtHoHDZ4UpoBFPVzJnkcRu2NRnFztZj1MXxW4MLQn6XCM2j6mNWJ7Rn58m9qpSJWhTPXfSmqCGy2",
  "key39": "67WNiH4HudoW45uM51yWWHkGxxw1hoJkXzChmviM5BemFDCBQedYdcnAuTYL44rHhzPJcf8uLwwqnRs7qrA1YYML",
  "key40": "3q4WqsLBmt55Qq7H4CZwo588xZVECRReaWG53aSZWmyAfp1U65vtZweVjqn1dcqkrEpvpJXBi4VWD42rN7PNTo98",
  "key41": "4zuiu5WGtgtSfu7PLK97jEd5FJTWVeZfxVXyatqkRsiw2nNkyHagxBwRohcDHBVewqLUbho1i6gYWQZ1dWn3Q9Lz",
  "key42": "5JuqPXmpbKqTMP82KQ1komxCmVffueaPtZgZgmDkWcFW6FtBDrHqenituen4btvp8KFoh6KYsAigJhAF47ur6sdq",
  "key43": "eZ6VXefSBieNTwndMEef8B5wBKAq6nUqEHjgqeYuaLEWMevAa8P5sPnrMnRHWRr6Q6AFLWmTVsrGR2iHiqYi7GS",
  "key44": "HRqkvncgUvZNK9byVSnKwnhc1VW7WstHqoh3uhBaGFEdq5xRC2rZuXz83rKDQsfr76byonpTUgkwdyM9ToiNKE7",
  "key45": "4wZtduNFrGBiGraBTpeGo7cpjBTK4UfrgxPRY4nM8BNYkAgzkgEAmemJmVZsVQ4wvERjftEFQoNvKy5xB2FwQgzo",
  "key46": "4XU679bH2WD3cJgvMumWkvgUgasAUbX6y8pCHu3NR8A1FBoiCgbkjNYkt2aY73GLorHgeBNiSHQ2URF5YU8xNReL",
  "key47": "k7shmBqa17xGKBvNszg1rqmurTghndxDeTJDZcJxXsFU21HW7U1pupbrSbbvNtQUBt4S6zUdVm9SFgQVKWKNDrT",
  "key48": "3WaMT6zJYzgKsdbJPMydf5PMxxL63Z2rjG1Y2oC2X28a7Zfzn9fYuFF1CY6Pha4g2xSqup2WmBpyPMZUBtv3ww6F",
  "key49": "2bhyYyFVovqqLvv6Mz8sXqYwowppxuSqnsoeBU9JNtA5KzAZe24GkGa9ZPEXvMzEgBWvAC3U5gsAPcDYFbYC69ez"
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
