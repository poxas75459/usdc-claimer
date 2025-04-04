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
    "3AberxLsmKbx5RAW5RQMotpEH3n7uexP2wKaT3M2TUi9qWPAq3yDkETkUp9G3731kMn2KaEpFEnspN2faqmsHaXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BdKhMKvyx6Q4BDTA5AV8kp4Ef4aqbcYtVfYArgGBVTpwo3oWNkBXc7yy7dp2PHz1yMLRJLDgtqM3wBpyKpDCHJG",
  "key1": "4MdNVonPgoLZEtFvKeBJ8Axa3j9FQEd3tDoK4YaZP4kvAofoCSSojr3VHRYHeARi9xSRSb9nsWBBkDqyTwmEnzoR",
  "key2": "3h52LVZDV2pmvDxzyjn25QwrzZ2NcVAnR4sAJMxHDK11BoXmnKPzPhpBGaSnTCM7hiA11auMFBVd4GHsoqQR1qmU",
  "key3": "5Gm5dvZHic8UmS7XAcQSDoHGcG8CyLJJYXdm4ZE1N1U4c5byD5GmgrktRPnwUNx5p6QJCByn6rEHiPnG4BZNJZWs",
  "key4": "5WknT7ZENPt6FuN1SdSoTkko7hkpGMdqUkZLMG3Em9TckF3SoCZ6K51VNYouzuuCvL6QqybYFi2wxkw2qCWJ7jXt",
  "key5": "5MTphe3qJxvUj5Vmf7gSBzVrRiXaKDbGCuNbVx1t3oREfta9GrZD1SpCHWzmeMFz2mDoETFz4xvEiU4HemCZGL6k",
  "key6": "39GMAGCgmDVCuBCDqu3mHSn3VYFMybbVbcyNjjfqsJ3J7kKiqPe557BTpaqJwZgzrFiKQBnbyfjaAyiBoBv7tNkW",
  "key7": "4AHfv2h9edUvtEV9zKJ4zwNo2ctkBZw67Pw6pXmqUxTJCN4CEtmx7HYua5YRiyLe45HfRTace2ogKXFxW7CHkj7m",
  "key8": "5xpygbk2wna8osevVzsv4rS9PKQUDo8cm2AC2WqPRBLd6EUbY9DKWtuB9TxTG5DFwvmwit5wVA4DmqDPW9FWUqaU",
  "key9": "6rdVWoz656poWRwQ75v9xHpKerBsCg522JYLeSNK9cW7s5uup6V5vye5Zty8H5htzizJ3obQ9ZPurSbAxcfY41W",
  "key10": "4rXKNMTYR8LX9WBh5VU7cBe14GhhS4ju7rbSC26of8rTsbbjc2HYRsDng726LY2W8YY6fYFcgcqRqSaEQhNMc9Zj",
  "key11": "5XhyHMLAnV4KfAEAMef4FgN2ykorziYwCr1Y2h3iUEWXtQJQ5WiwP78a591YjwEfsF6Hg8zQYGtDWNmeuzJZAJty",
  "key12": "4irxZE3Tzg6yJi2AuaQf1TPjshmmSTeLTC3rcy1ib7riEsBMrtjh9K7cXMTtrsxLEKgXFYDB9tHLaUu7rxDDLhWF",
  "key13": "3Br4L9HMJjAgXMhAmysC6BUTcxHqKhZADRQUzi8LYwqPdad4aT8ErUj3eU9iSJUXxRsrudJpq5E8vnHo52P9Vm2M",
  "key14": "5vvapHBoBj8wMT1XoFgHuxfCR8FL19zEojixzPuZ6aT4wLyb7io868CVGi7DWbuCPL3oRGtU5VVKjTRJTLMMwGqT",
  "key15": "3K6goXrtDHKmPHSdJ1sm5NAMz1UwZ8rRXyqUxNqtejCP1mieDcKwVneAUjWbCwiQu2He9aMH2czYiyfT9YdXp7WT",
  "key16": "2mwc9TdqgTUrKsDtDvgfaM1fASi4FqXxNsAEuUpQNGT3DapcSLU25vNX7WTDbg4JFHATspf6BKqtZqJQ4M4yEkAc",
  "key17": "3M1tSie2mVTFAoUUn3njvW1ZfZJB1ys3qvYxhKJMMTW9SdJLmtRQqCGFqFGvkK75BrRnY2HKUsmo39x8rXobfbgX",
  "key18": "3NZXAKHybr6gaqVBdL251kya9NMQjsxsQXLXUrGj4HhjZveRdypzDNUAwrQiixziNYGeA2GTKwhT9ZJDSHKzYDbE",
  "key19": "6A3mAXWoyZ8QzvkQopJCBPrQsAqQi8W18D1xFd2FfUZ221Jp47LQGL6m54msUHauMYtyVLgCUdiqxJpUicNKNLD",
  "key20": "LMThCGRAbH2KWqUADU4APvinsSniRAXdGa7FbPp59v17JW5vfuDtqtqLGqTy24xPayicFCP48ZP5pCyW6ADpCyC",
  "key21": "3h8bq12GfnkwqxAUYPLH8XM2yi3jK43MatsK9L7cqvyEVexXFGLV22VX1azCtwQYM2Vtonk7mS12KXiwLZkijUrG",
  "key22": "2DpJFHTv3zr61JqHB4eeL15ZWb4ikmEiJD6GXQcM7oP2gaKmXVCTVxtewfNEy5VH7Pbr1opZ3ZyeWgf1U8sMXd9f",
  "key23": "5khRwPVAkLLB2xBYnERkoRGTAZcXDB4mqGSwqnKXWYmASXq8a5JKsdz4SK8KLUxwWq49GLmbfqCFr8z8AmdrC7kD",
  "key24": "4HYiwKLTEBhmx7Yk8wD6GxdacndgbvBtVSRbdnsCVxniregHjXqfAsaEZriiJmB4wNiuzVCrd5TMWyVhwTF63Lt1",
  "key25": "3dRcEYhW5LiDTMrU8979gVGdvt14PZr4sAACgGPbj91v8AN8s6Ub9SwhANMKfUKsZw1zSziKfjYrAXaFSVv7ndwp",
  "key26": "2RtGyV8KnW38owFMFrnkXoMemunPG5sEdv79Exe7bjKqayeCawu6RFbNH8FnHwT2dGjdoykpBj9GNNa4Qt7jHRU8",
  "key27": "4N9zEj7CuaweoEnkw5v8a9SFAUrVCXqm5qNqMdR2CrJQVKBM2zVbjdko6J7fT3j1xeGDYZT4iyLZWcv4beWzSt2Q",
  "key28": "3xYY7qfQG2LcefMJBtYBCR56FE2LzPW2eYAhV9XBuy8RvGQQrkwXxk9rcmiaiRiQztofWeMtpSuu3X2DJiUacR8i",
  "key29": "4Mtax5UkfTUsE7fLnEqCCf2SsoAGMyv386LUF7yKCdFHy9YEjkJiAcK7dJGbjFW6ZCS1sfj2MkzzL2h3c8BUmysk",
  "key30": "2J9jjks7Pvim7sqZSaeagiwW5NsYnPBrrTfw2pdCSjXkUkB9SXAeTRfpWHbW1TYM4BX939eDjDTQtbRTVw7FPnad",
  "key31": "5ptLLo54JM2wtp78xK1MUTCQ9DEBTZh7kSRtEVB1ADNFMfQyvBk7QtQj3qTrYTmurn7y7GfaTecYiLG53AkkXZeR",
  "key32": "2BQJ5ArQhVLRWx69n5TqwbWXeiw2a9XMguWJQ5HzqjcbC8H5UgcMc4gbNHWyPByzxjp6NfGLJfScED9PgJ3f2C8E",
  "key33": "2aYwPwWS6L3GNpWTnwKqZ9R7w67r4X7HvpVSg4F8xerazkZhHqDCxdTnFJqCZc74cg482X3hN4XPvQ573Mc8ffFf",
  "key34": "3yggv6PAPYCYAuukVVSAdCU96L8u8yDbuURKVJ73ZEB6a3mGYUzpoX5AB7jgepHUydis1aGVw8JZgyhDZpDnkAke",
  "key35": "3N3BTRwroH4aDfLEgbdNVi18Jb3BVyAHAivT9BJWNrjsFnZXnSdYVTddzHzwAn6kobyiPFCAVQD87tKAhaG4dLcd",
  "key36": "63PfXH7v4nF3S51ggc4W7KzcLNoVHrGQ8Qg858BNLhhJbEDZAkG79fewsEX1ana6DyjGcSskgiHoZCBLDJfEG2DG",
  "key37": "5Jnf5fBATse15R4RAhm3wybJznCDMCxqQgQqtebYtiUTGx6noBPnDDMYNJmBNAG2PLcB4uNQiQnuLwqayZi3a4Ru",
  "key38": "4rVhSBTaUbMjMBsJSUezzNbKJyMKMQpr7eMvJnYhpfXjnpgBotKAqdb7nFBtBEfyq9wAb9BgQaFcdpV8KfpGJmgb",
  "key39": "3ZZPQ8UQFqosxGgyskjZ3wikcthRSUKbKezsVfLkqco6zgpNP9qgHSdE6wCubkUTYdFp3HHQjVPwsH6ehK8EL5PH",
  "key40": "LQMNeTFBueHhiQMKb1RRz4nEQU9TaQgQgz2gyFYZZSMGtrCfwp6qT6DYpCs5Ytd2pkhKZStL97RYn2ysby5avnn",
  "key41": "J2Hp6KHXDFwbMpyrq9dKNMyKe4BQspEnaHjZ4nkTYNtth9qQcHZS4A97JFct9rH4VjT9EkoVqTxsens5Ew3V1D5",
  "key42": "5A6DCAmkk3mY5tggytNQM2rhKtAaAmdcLMQBJDu5WfyDSH8UkD8HLTABCs831HYR6em7kZYzotZmNAwVtQVBgV39"
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
