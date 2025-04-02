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
    "2oi3rEbCFgcW8gvdGioRMzWJCJHU9UiqHdAxEXEmutKxnoNUQsTadAcKBBAoX7m3t67GnBjbYGEqYr6mozTuSB6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w8bhihBPa89Ucicdc814g1yAsc2Fw6u9wAzgqLcNNuPELTwTrjoNzDo55PAb1uBXraCf2kLDG47wx5W28LKfJsx",
  "key1": "4H9s3bw2WC8JN11gYnAPHzJjwJUPt1Ds5CyntB874F9scmriW71YSTqFjc9QPuae1ZwvaRdsEmcABnFX7ix25ha6",
  "key2": "5qB8xkxvwXQ6WEWUHiNM8vtdtchXVkfb4QiJMszqtGN84HBXjCcWTrRYUFfBuGqXHn75dYBUY27D82LPTzWf8gEa",
  "key3": "5sWWJyJTe4b3HgDXym7jWQTuPjAQLMK3nG9ZX74m23fqYeXdrRTcKRD9i9R66QPrq8yrmmu5wqKxXamhdzk1nMNA",
  "key4": "4uLBKJ8QS8D3GsXorS7wKaNZwbz7SxfsYSb56SCh1SmCw5ZNWN8ACijPnEq7gVH7ZB5mURHV8NYun5msd5ZU7vLQ",
  "key5": "52xdEGeJUEqDhwERcwxu61cJYadi97HgkU5cNKXeDTSgs66zYX7wfTNsySvpWF1f2wrgWSqd8FPGKtLhPu2fBCMH",
  "key6": "3br8GWP4mEU5kee1pR4tpUwfrPpEnVYBKiQD3NqMErHvYhDp9ysq4W3bJXi8MginKkn7TDKPFb8P22v9j9wtAKKN",
  "key7": "2uihtgtw71nD5Nd453YxydstBPgK8Jqdxfk6LcaVLoCBNYGxAnd7zWiaz21Yjuv1rebjhNhsHMdsDYEdEPogPZWK",
  "key8": "2quiaWpHYxMKLkeTJaGp6NDkkKayJtqdL8ugcsZYi8wtzwjmFnZpzk6pFmokqxmyYTtWBSWrcN18VPLRJErD77JX",
  "key9": "35DBZKiNUpV41PcPZLEa3NBrdvEJYEq1aUyuqGxLUjWksvndq8BpuckZYyu2WKxAbUZ9BnmkkE2eMceAxkAVVtvB",
  "key10": "2ixjfYZBzY9ztLWEhRV6fEkJR7QszB6y95RvnCmmUKFwKxmf7LmJoX6sedxJzFnt9AEPWfDinnvzrjbRVz98yxtM",
  "key11": "235fB9qmRTrGmsnf1PWa1oGvLEps7qTxH4xojBnjYmaVnsmaWExpGJNGHhPs2CsoYcGCkZeuGctaB3X7XPqcpaqv",
  "key12": "3uuonAF5P3ZFuT6YBGUcVcgtk8veTeLErYKUPRTND3niFnUxvWoh7pdFkAT5Fw5P71sioWzV6XuDsAW3FZpY7krZ",
  "key13": "38JBTASvshs2VH3DnzDyXN6XWq5vvrUnQ5hVeUCT2cqm9xxyzD5dAUEo4N1usosho8phQLtGEJ4koWuKSTUfJzQ8",
  "key14": "62nBYpsEchRc5tgaAXtomhZ5zBvGcgNJkxCEVKqwhnJfTdAVJFieyGb1dYxdRpYiLtLoYnGfq5wVikLmfQXtbToP",
  "key15": "5MK24sSQUrk8TYnzX2UicCfKAWSTJ4HxG8oKU8kroLckCEHCrCT6XvrPak1Hi5Eg6dhfQ7ShLTgEkiFDs3GiC5S3",
  "key16": "De8zBq5xf9VkXVUn2MFZGgC5qLXTdc3T3mFdPEKLvCtEfr8BRAdoZ3ghTNCfCN26VHhvct2J2sPthCvbMUtmuWg",
  "key17": "5qDB8LDQMdviB9M6UxBRi4qNZ1tHaVhHDGUP3iEMDT4PmQ4wVUWcCkeuAYCSMjvJzPxL89mzagtn4fEsSHCD8pUr",
  "key18": "2ukWL9MuyQBpK2L39vDcNHrZXE7QzbnoaTWNUmFu5284HAnpCCtcBckasBi3EvZYiovN4vh85E7fNdpe2yVwXqEE",
  "key19": "66Vo2fve8L22YULhads9tNGQT5mXJqrMVEYye5ZY9fuJ89fQRmoyy81e2ftiUWgijKobezZ7mmVsFctUr4aBFYP",
  "key20": "3HKNukMFvx31U739oTyGmTx3FJAXNEusrHicfHGoEwBs6wHsusyYJLSbvyW68wzzQeFetXPTvKhzX9CTXpQpzrdJ",
  "key21": "5gtjd4nWSKPFoeZjNGX4MNkYmEyZLM6QqaZPUBiEYW5852BrUnREPfMScWgUCw5ZZhJRwp74iCzPJpdGiab8m4r7",
  "key22": "2Rdi9KL2QKBwUiuLEbjNp7TQHwzuCVnQPEJFTFBsQktB1K6RDZXhZA1YwpHhAEE9WnW8rJBCu7wmS5XL2ywYn7kY",
  "key23": "3DDXP51RHn7cRsvMtoPwBXiswZRoaetTE1GVpu6dRLjqtWZdYMWEz271PeZDgqr6pduLA8fUN2rNTMMUTfEoa66y",
  "key24": "5RZEukDVLoLPb96ajJDfj4T7zvNAerjEPP1MdxM56PKYKgMe6LaSKiDGqqyuunFmTyT1nAS8kfhLnL3xNVDVVrDG",
  "key25": "28yAU68Axk2xxjUnPZCpztxQHPfeXg7dq7EG4mQYrYgK2UCo7j5FKoYb7n9bg6vtNkSR9YuE7UWLUNYoXiPvFLTA",
  "key26": "586Js3rua2N3xPSj3LH9ZWrXtYtFgmV1uZEnqbqxAFQ4VYKgh7KRBYhhCqPJN3q8ZgNtccnmx6bomRgqZQrDQz4B",
  "key27": "4iPCis2MSrkuhJoPVX8Qbm4nYVX6iHXYE3ysVUHMwp5nGniotDm3StTXVj5aoW7ejXsChJFzUSddMqYiqeJhcyXg",
  "key28": "2ERJYhKy8jwy2fxtjYApfCx8YBGWsZgXw59UFqNDvLak8x5R4jd7SL3VEVGVBpZchgRdb41qiifa3AS4survt9dC",
  "key29": "3s96LVyDjXQgn35NS6j1n5RcJzF6rDSevC7PXd9tKTPvdsNUps5NpCwHrxCGccc9vnX8fioAkEoa7vci3C4VqF5M",
  "key30": "VgUBcRUrmmHdbjvuyx57unRQ3zzK4HabYVmnBpxZAwzYpvam6BeqBUYPsDfkfJ1QB8Ytp722SsnGChqZQgd9Qbm",
  "key31": "3kfktQEMiMwkM2kFTeYE67yRfF94m73qEAmjqTnEDX2ZCqk6NySwt5RFvF76MQGNPewGo6m9PFvKwTPGSdVPLg3b",
  "key32": "3Wiq4iTCr491gvFD4uvuerZUhRK88p77wKJWkHme2ByL85TvXDgzomvSALqqNd9XEaeqtsq4nWPN7A77799WNBnB",
  "key33": "n5SnnJTaFaENUZvtC7AZHfaXw5iWUVeELDbeUDcBDX4jU2e1oNHWFaxA5Eqgkd2GjByNERbFt5JgPJTD7uRJ2Lm",
  "key34": "65hDmPj7FmWBENQ11kvyJZwaj2qnyGDG9MSBtHjs2mk41PHyMMgb4c8To6jzuowVZ3E4WNjK6JZxMJsKmRLPJGV8",
  "key35": "4W3kqAYWf9RfTkLHzuMAnSRrCnhgUFWkh3wkMNSs5NkyScjAXJhNXQdz3xDs8czgfMozsLwR9DD4qv4Cjz9QXqya",
  "key36": "iLQsdJZJ7CtBmjvDWastVrEMnoPf1oMc15oHQQfaGemi7Kz9s3ug9RrG93X2NJp5yMfJw8qcKyHzTqNQTCY9Css",
  "key37": "4LFdtw2R9itD9DRfvvXNdaPzbJo4ZB44LbemxGcaiZMdwVqydS43CwTsCc7pK4o3XAtK6TvqDMrtpYtWUAYm2rX1",
  "key38": "c1Po8ttzmyJLUKCvLmYzWN1iGBC3GNEHiNbSHdgVDLvRU9GeH6DRkvHRSrNvMhYFh15pt9N3Bauy5B5QEEgehyv"
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
