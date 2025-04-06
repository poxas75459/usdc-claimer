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
    "5j1JdQjoLRvCRHWeZt3DvFQBv9yn6hXwbtVtzKjxadD2yAWhS3ARCsc9az6vAkhviF82zLx1Ju6quTUyWVwcSgot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHZPT4s1P3ZThuWaqH8LAoWLNuNdC2hbWtZoRS5HyU7RXwtburXxE8wYHPDbUpXrzQkRdLJenYLQ12PBpBk6p6d",
  "key1": "N2TtvKNs7ZHkjhpxqy3jUD5o5LocChR4sxpRxgaZePXSrvo2arGU1ikm4JHW1LPDX99MBDWmmCpneEtJWBVDG7D",
  "key2": "e2oiaLgToXfRRpDzcZGPskhkZ1pRfpZFYANsksQmzUQYXjafjAGMEVxUAGoRv8BYE3bG5tbkLXa3VewR6xXG7mH",
  "key3": "5TAXrTSfZJG9hu5FCPXtsqyhsLwjYt7KasPupHbRyBnGANy8t4oSv4a8MpNJJaDdX5NgMNsT8BJS7Yc6ZyfaStT4",
  "key4": "28ejDpDTiq2ZEAjGhRzAnZz1rv7vNFaiJ1S9wpwfyCbmaJBzyczh3fCYQ1eZKppeLnHn7P8h3jZZxZqhkxvfQugR",
  "key5": "rF7zUfs4dC383hVTw3V7TAYCrEE6MSDnWf6gK6R3DQFC7r8qzcB22tDdVNNAPua6S7kg8PF2qbCfvsrPwYSamDP",
  "key6": "24KJeCjtnCkapGk5U5eMey8mXN4EDH9ivhUmA2LSK3B4e9vuGvQ9NZZoXTK68Q7eCftp4BRCj1odgo6eeyz2wEqa",
  "key7": "F8KzLbBzjURvxqiLY8ehYQwpBWHfdYUNAawoziLxRv6o8diFVN43cCZBSDkxejvsgdL8GRiYsJUrEPPBMkog2xv",
  "key8": "33BSHfHaKaetsLknogoXsxmmwccWVf3bsjvXphnBpqTyyCQq8C8w1w49v3cb7drf36fALawiNRKQWnnPCxuV9bqH",
  "key9": "4PUTSXTENPNt4Ni6mP93bFXB7vuCFAkviCzSdg9zuFYUsiLHB7RQzKq8e9mt5jyxUgUSjvPghFFm5dKWoa1YVSDY",
  "key10": "21BS48iqHw3d6rzsiYDuqjrWba9B2N6oP6aFyjPumxQugtaboG88EgN8aQqC7PvAVhEXAd3tX9i43sUU4Ehqxngf",
  "key11": "4qCzgNosCx5QGG2csBdjyCTm327rAaXqur9VruiwbbRwPmwefYwBEQMy8mvMjaKjYLQWoPqbYSHRyWUPu4RybJ7F",
  "key12": "2hP3CmkaQfx6Q6FdSAHxUboG8ZRRRUGT74vHpAft1HYLky3pQBvszEiWRnpvTofYquUxfbKHVK1JMdDpTWrC4hw1",
  "key13": "ynQKEDHw2vV4vXAQ2Nvmqogc2ddPefeogpxv8t8p7ZvgYxFCypbZJNTHkYMsjg6jkTgY8ZL24DdAPHg6tcbRvzJ",
  "key14": "HenAnWJqTQVkGdqF4oisDcvkjjXXCtRdFGx7EnaZTxQPmwSJXj7RRSwxjSN8sDVAgHM6gfLkYfUL1tV1QCp1bDN",
  "key15": "3gdmeuWBBQvDUq3YGRCJpd2PLbz47UTUUvgYBAFYXqa2RqDwsp8KAyNP5uNXTEt1d8zBrHDYjy4uhRasSUcR65ao",
  "key16": "2qncif7nyY3Q2aNDPth3iv7ucDJi9biDQsvTGfMnWkiu7Raz8D428Sa9tbCD3sM8t3VgSg5q1Ambg8yKA5nXZ2DF",
  "key17": "4AzafmPmr1F1EeX4UUtio4eTMqYUMX2fVRzepFVuuE8ybnije4r7rbxyxYWBMfatr9LC67FuXpPuxc52XDC8MPev",
  "key18": "2RmzZQ9ZCLoMDZrhPztvZ9SFG9X852KiUBh9UjbUdoA9fWYv1t8ZGMFG1ftFJ65LrsCjFKsxFdfqf8KD4xtxG1xf",
  "key19": "tmAYWPWzxSZgyzLKUmdMq6HBAXsP8XrbwX4EgCntvv83csk745qKytKw5cZsoW3HJ4Wk8BwBmgYywakGV4hMJvC",
  "key20": "53xwVUE6CxkrZjqm4EtfnTpF8bZ9v6AEh31tYjkefBUzMzYU55rHoz788Gv1LfT8YTMoxFSkhg7hnbP76wbvpxh7",
  "key21": "3cAN9At9aSuyEnvSL4sBb2b9r6ER2QMyp5YEDGrB3HvVZ1tQsMZyemLAhg5ShqAHt978ySuVvtAxJJpa7kFPPkNd",
  "key22": "3EYX4i9SS4hidFBL5HmVKHvvMqM6WLmpf1Sgr7HQigPC151j7EP1vFjHfA1U8sQWauLWpN5fwN99FWmirPopSjcE",
  "key23": "4RQmpE1Qks3tEokuYDGrhni8pNmihrNurdvtStXbwWsVYZ8RW9TPQrTPGD574mNwdao44Sk6Ye7pWBZuBZKMWtJs",
  "key24": "3u8PnSyZocjP3zSmFtUitDF3WjHWPdXeYQZ9pEa8RuEEaVMQBDqiu34pbf7dRyY4TsbtcuPHSpW3WbWVeGkX9nRx",
  "key25": "3zRgZH3AdJp9ovqmDeGER3xQPwBFm7igCDzWwQWMPh9nE7MGD18ny7ySpqQsT8UuDSUss9BoURbLNw726K3h6PdS",
  "key26": "5APQB1gn4eXmAEybw6UzgnpahSCMePXWtG3vvFxXRotFgL3P3f7KzJiFyFDYePFXXwjz2GHRUyF8r3KdPEQs9z1t",
  "key27": "2cjbg6qqK6WVuaQeZbLJYEFgoo9xR1PbaY5pEgw7pddGygsbQWQjHcZaiMgvWP4PTh9m5XELDRv91uCbahyxy95X",
  "key28": "32j2Jbn1MXL8C7h4c5p43Tbse8A4webeDvtLQ7ko5mn1Xdm3D1sAMuGi21UfyzzwoP2FK4pybVxaGDCYk92fG8j9",
  "key29": "5gYUcAfCqKtrVpLzyx2Js3w9RS6NHPDrwhnJu3xAFT8eoJRBqLPjooKu3jQmF88BjReNCs9BDwZpLcLUwV9NRd4U",
  "key30": "5E21FUnk2517hHd6CvSeY9Taigb9ELi29t1LBdQKpVbbDLELyTTMMACyHL2hqP45N4V2J3ir5jZdwpRU1h4FU3Q4",
  "key31": "35bRQGFaWSKTk1xtdZkGAE46EDoQejr1RUwn1ntCeDjvy6P8udnKR6TeqtRC4oKpQFbCUKUMPkx9ydBHcDVcWrp6",
  "key32": "2AEo4C3J1vVS9mkKcReBLXQstYRsKsk2F5GbGcj43EfwNDQaXqocaTKP4rGud6PcUH9XnXs7h5ix9C4JTc1PqTQq",
  "key33": "316NmsVNSKWmFNhp1vPt8pY8TY2XkRiVE3VjK2RaYWk7q5AFofzT2wwbftULqR4GDCURFvw45jN8GN1wgt3iECPY",
  "key34": "4umAsw9rr9wHDJJbtZ7ptBZAguXagHaeZc2636Dr9v9Uxg533hLScNb4LxfbHFxJihEbpYJQjHeQpFMZvJMQF3kS",
  "key35": "5ZVeGLRxD5nzixnbvvmYZ1BzKXw63CrEGeW4rDgh13APtQzhtzEY51Vnb2jjwwqTNUqVakiZot8D3E6obYPjrkPc",
  "key36": "58GkFHjuem8hVsE9W4mgiaZ5fuX7kH1cMDDW3YSL2B9i5DnUy1KQ7CWHQdqs8k1J6J9CuU5TAELt2mYBTKWNrNgk",
  "key37": "273ZEHrMhWmBAX6g7WFXcGm2xSuLeDmkbbRHeJCFNQjfUsSdDEiMv4bYFQFNuGoyqRs1ELBA8NVLgBS5jL6hbJhh",
  "key38": "3HHjdSH6aVsSTVFKDYA6nNoPTinRX2tDzKmqdSHLknJPxypNbkmSv26juepD993GHV7Y8kgv3xLVhiaWkz8wn93S",
  "key39": "5hc48cbFhbBptwcBPFcrwm6Z5ShFm3jQ3ngv3sn1fRC8NK8zBgMHPmN7ZBSYeowjDdWPUFbEWV6moVbVoehm9JXB",
  "key40": "VPfY57DjXPtNFjQaaLYnXQLTtdzf4QhQ6tWr5X3CyJtBbey52HpPWGwkDiNTxaH6V3TSrNWHsc89fWvBMotdmtP",
  "key41": "2rKPphodQKEWvnhydsSqqwgqTaci5T3GFriFt2sRKbw64jcEzVK6EDTzWoXSQwv5aBDXaqoYyQppW6PLfNFV2zw1",
  "key42": "3p5nThmt1zkMCdenrVkgBWDmyw6QtVsRAy8UyyiL7CAjdWWdqvVftJsRTt4nEWCd1YASqykhyBoQD7diQ1zGgrH8",
  "key43": "3PeYkUupySP6w2dgvL3DC3dw6q532XpGLWQy6LtuoKpPiUniJMVA6sUneyjiA1wcfEsLMQXjGVwz2WqmuThABA8Y",
  "key44": "59DYQUkRKDd1hz8PHDBP2NjcTXQCJHv8apYfpRxQ3ETbsPCy3WCDUQ4PT78XfF2qdvwQAvkbgPzt9ZAEKRrtGGmK",
  "key45": "62j8QB5GfAWMjMW3ShvRX3qQZ3BkGRV44aK67nd55VgkEERjZ3X5PDdq3om9Z8sjQPBN3w74SdPPs4RiDtSRbk8E",
  "key46": "2zVwTn4nu9c2BGexKCGJLYNs2yi35EgAb8EvzMhu3tLnKa3ttNFbYJ56oNbREjbJxWtmbXGh6Wy5hEjnQLFFHuhq",
  "key47": "572jyN5Wy13cECtKjyfu8dQUb97ZQJzWzStqDQbYj4fVomxNQcSGoPY8twChthaTaCxGbafqdKTVmGgs5SjsmaWb"
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
