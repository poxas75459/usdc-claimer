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
    "5mcNtPrThcJycNUNaHTevL8Zdqkc98TSLSLFT5KWNNGtSFgSPsfDGPe1pXoRrHJXCz5u4wBYKSCTAhmJWP7D2RYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gx4b6go7yE3YizS5wmgTPD81wWcsfns4GrGK5cQ3NrN6TPz76PwkjudLRuFWidinkRu2CAKZGEZdQZkJEQbymJ4",
  "key1": "4FCnV9T1z3FUyHPURhYbZgFDNwdbXog96dtAmE6nsTu4E1QpwrriDM69dgsDjbRMijegmQsTCoFzedSu8cy3xmNh",
  "key2": "3ZnW4vmBUEH21pQMfYDbf6V8JJNvvJfXLXV3VxkP6YQVx7FuEAyendoFs4tnQhmhEeSK2sEpeDeSik23pRJ2viuY",
  "key3": "2AHH8hQk35JNgBDWuhQfrcQaM6B6h1GsbpqMxcqsw1JhiG4WmAtXtUagfbjxinfyZMjMPELLnyY42jw2tVcGQo3h",
  "key4": "oK9DAR2yHBFVtrbKbAM2XmjBn79dp6StSpZATBLnTL9oHRMQsNYCA4YsGHwjQbUcyb6DtMQrCSH2J88hrinrDgd",
  "key5": "499HSNQbB6piFVkezP3kTNKgbsBGQkXoGhqy6bthSNZsho12NgtnaZSo6KJ98AXmhJgNPwLTTeae19EYgA3cM4WJ",
  "key6": "AzqXc3PYUVG1e6WS8Cw8Wf8LqeWGRj4muhE6xVQy1LCobh3yZ12WufQDTYFmDFQHU8eBKLJzf4SEnQAP5HPMcTK",
  "key7": "3mYv5LavdBrVwy9JApmjJAS5oRLk2bubogo7Ai2wVYqW89de7ydW1ELFjCoh4shX17aNond9eH6NfA7tJv7wWJxk",
  "key8": "5LvShK5qH9KxhWJ7eHSMBRxUiCAnMZ3H7WyUfp11dCEjLJRYdEfkdQhCS7WSmyQLtFrmqUm3nTjiutaXPSbfzcKE",
  "key9": "2yqDLgmQs381ghy362A5DrF3ELDXtQXBhvZLXrBxum2xhneK5EzzLQSNdvvFK3X96DSvPLYQ1LDuBapBqyJYrNFq",
  "key10": "4awT51gVVCsP89En8b2GE38Ty8fDTMe4Hw6vsPKET9TmMadwKLdFJExJcLJ4c6yW8kG5BiUbdLr42ct13wrzUrRb",
  "key11": "4XqMvgNYYSTNvcQBxPW3FJvqpzR9gGoSHNHpeW7h8sFp5TGwCcHY6qCFEWwkyjWasTnwmfaUzZUXkXLNdnzuz144",
  "key12": "4wupr3LgZbHVPibbjvmWxBpkJE6VyPNcfTrQYJKyq9yfjC7SNz89QmFAro3uBksHBe9uETd7R77gFTZ128kNkrrR",
  "key13": "5WSVsKvQRB3KWnMfWJAwPT57aQ4cNyLTFaokZF7J9ivmCbRxotLQ5heY1f8eW7iseNcHjnR13qNEG6kmzRnHSkcE",
  "key14": "5CQ4dSnMf4wvq9yvoY8Mv6yPCYZupccp725h7ACFiVe2hhRNG5vGUJVanjeF32MhSMWr39QYt9qCuWvzvJxBi76w",
  "key15": "3FG9SWuoWV3gwNxQTMR2DsSMFLpy1C4g7CLcdWvEEEdVcRNdV9FJfSDFgMrkGaFwByeUfNd6sfy1eHyCKWBA4uNx",
  "key16": "ZTDHcnvP29MFAsSjTQgYAv5RKRcnqp8BKyVTqtdRLbVqobkZJm8YBt6XyA3zkuvdd6ENK4RXc6LSaX5paELfPSY",
  "key17": "4iY7f25dwCV42yW8GKcgdMyL39AGgxEh1A5fWpyk2gP9z7pJs6mJ64uDz6DafrcgjGZJQCbTmexvTjTWzDfjyaMU",
  "key18": "2xNofuMjtSZjmxidynb4h2makRbpnzGWmbmBjzyCVHDmpQeKRTtZQHDwuGLaFHfYarX1Tthx7Uchq2GeYnzS75GJ",
  "key19": "3LvqugvRzFted6huzy4imXNzbaqjHYgJ4t98ruQygu3GwF8CZfsiP5G3Bwj4MweDCbmivuGv767Tq1DJPNaVNy1d",
  "key20": "3zDtLGZ5v7YW3pWAB7iZVHTKTTT9qkjGu9phX6DYnPM3zsWria3KhU6wiYbbufVjXA88NPbxi1RqsNsJHJmAcHnX",
  "key21": "2EFGSTjdr38j15ZWX8i4FyvRZPjBS9PjeuGXcKT1pTa6eRkKUPTykEqQH9M2LXF9jX7pRvNvkThXqupDU6RW7qLq",
  "key22": "4CNwrbu3GubU3jgqcfEdiGBG7To4gVNDkpa8VVaNkc4GTB7JPkaLWkwMXMuXgPuMW7ZeJF6prLcmPP7mDS7bsuPp",
  "key23": "iSRad3SPndMbPE9pkDrU5AfQW7TmyJ6UBU3arafJYJELP7E3eyUaxA4fiAgFWDdctfc1D5zZPE9zwjsJGfcMeVU",
  "key24": "49wEXK1vXgbB7A1tVVydPaNxY3c2V9U5VdCqyWamXUJnF4DZ8s8LrFj6b2t3fo4g33MGy7ymP8eUNkRPdkpjHgC6",
  "key25": "62MndpEdzAsusAQ22yyKbdjz2JNhadWyzwFXdc1mTLS6F3pX8bQQ5Ryg9mCG7WevFhZ8TERGxAD6yyYPS9mrg8QC",
  "key26": "4HvrA8thEcnBsuEPGzNa1tffW8HnKWCYPf6M6gZjFQ57yGCkrNHpiYnnEMrP4Vfb8HgZctqUxQTpPYtrdjwbKamZ",
  "key27": "tKfD5n1ygqNyZ8cPtHJt4VJedKFfCt8RVzA4CqyRSbKwVKoRNhNSwE2NzYARxULF4eRLCK6dbibWNuwCoUCGdFX",
  "key28": "3KyjSJ7w2Hu1v8yCkNqzBeGKFRWNKdLG2AxfJ3ADVi1T8fP6Q3rQ2SHFtnCbKisgVhKV3M37JDCwFtbdwoGncEGo",
  "key29": "2T2s1SAEShxeatMAhasyfxd5fNMC28a3FDiyra8sTTkQZStuZkhYFrUQojoRciLCSPcigU3Xjap2AHH5QWWKKFFM",
  "key30": "4rChaBdCYnr4s1Cob7YCM7oVPgTnnUd8pxjb7EWaadkfdt1aUfmqdd7ix8NH61jzBf5C7yzjCHC3wbZHZWhCPGa5",
  "key31": "5oURDxJH3hHsewFEX5gzNutbRTqHeXJD48cMYueRoEhTL6ZrFh5m8VSvmmUbZUG721H7YYBYi4vxxtZ3mXG7HxeN",
  "key32": "2dr5VVoGjNkU5199drbrxaB4HDddpcYqjUWQ6e5ecMXHZLaXSHdZSaxwUmeHwJDkywvio9EB9r46xfhwS2eG4S53",
  "key33": "4MoVJvcfWBbdnvtoHQNRQYAYUVsKHptm2ZAZbuwrDwyi55tR6a9fzrffonW2KqvEue9CRo5mFKUKiTX6254LKsZ2",
  "key34": "2ZK6qChaMgZL518Ypp9tFS2hqqfkUtMcqjDV9icyPkrHwddapB7NhZvZB2BcEB2iiUZYbBvQ5hxkjseyFgCgQskK",
  "key35": "491pNm3qua423a1qX7iv5z8BE9FMEmYJ7tzoi5reVjN1tVHZe6vVU3fi96fcXGsZ6hQ7AAuW8taL2JHj8tp6rAUH",
  "key36": "2GYchEjpUkZZiMgJGEgmVw68zC783texUQWTEggt76mN8cbsgG6HyE2xsLSUQbkcmuf12uPXXk96PxUojXqXt4AB",
  "key37": "2uPdWpLH3z9TBmCCEagj4dojtQcGJotuFTZKF5B8383UJEBtinKm6hehTdULgtxGutUkujp4QBPRAsfyY9siGZ7A",
  "key38": "5n42ndJEMYx7tMfbb6J9DSdyNzjVyKTb7bbviFqkad7zmywnbdUWAKpspifFxazeZPVbkDYVPRxW4mYdarDsviJB",
  "key39": "43whQqdoBaWd5RwgcVcaiWRCZLU4f29NZvT26f5EpbQEm6ipGqxqvkNVBSmfsjPyXpsQeJRRnzHFSckUEpyyHcko",
  "key40": "2oBfYadJ2bmUjKkXV1Pvb2Wj3DRgQo1Vx6RVGk57vmhYN9GugfimgvA3gPteGwmaK1e87WtWD4KvHmdWYyb9yTZt",
  "key41": "3JLtvKGFfjkYwd1ZwM5tiSbfDVRYuWnsNQeyr8FNsha2EehYvb25sGL3XHyqSs9vD7HanFWPDjAd9wvg92H4XJCB",
  "key42": "5Y7bmn2m9BHhzfMaEMtcnfmY4BvH4CqKMNvF6oSbbtdoHDKcYoY6XCMdJg4P5hVaTJtZfKt4SCKBanpzVksLhxvC",
  "key43": "38qebxSHYxaCrXWU7WfmMmxG8Lfdwbjni8QFMG1PLdNqzknem7SWr8b2FtzASDWjQ14zUtvYMQUnaps5R51MBrin",
  "key44": "5tMVH9cXfDpV9SKokJrfBg5BEwZ3Q9X6FfffDqJn75SAiksDUbX4rFoNbKAdKhhDeujS5babjw6nAGyKnxcKjs94",
  "key45": "huddRzQgsjpeeKc1r7pHZWXbLChfXy7pPmEKkkdDJSgiZb3kxcQGL1vLhj5C9nUmombdHGvx5MV7bc2T6b3WSfn",
  "key46": "2UAK4hj3cJi3DGf3F96nS9zZtosyYbzxaArD7koA5KbaGVvB8wc6E3x5X4wQjK5aVzPn9X1YTuhzWud3sCzT2cAz"
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
