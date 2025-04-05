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
    "3CVjMPkL5TG78QPLgtzAgeono8su5tqYfk5fNPXse78BMJTgpJaeT3hg7VNZprxkGmrVCBAQM7FHFyNdy9dKZvaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fUfgt2enapdcCq8HU6Xgwb5QHHS2MzZFKQ227Tb9ShT3SHRKK6akCCAigZaZZhjVhMa1wvVr5cJki91eJ1P6bTU",
  "key1": "2c1WvPin4TBNivd53HGnQnhPAQHtsekpj6NnZRfE59StKZm5mr1UpttoMdfDiCRHmHUo3YFc1TyMFKFU9Nuv87g8",
  "key2": "BEV5xUPq9tcqV8bdANW75pHZCY2ZuGt1sbg1J79U1itec4Khy4HoBCj3U1Q3NoahfgCS13Ero3wR1UT2NryVXGN",
  "key3": "qwgWWrKdzeM2Lv6tx1HuX1srEHKi7H2JM9J1XHDKCqPYkzjvznCqc6qFE22BzkYvann61dg23yukcevSvV62kNy",
  "key4": "3XkBYLoyuoS8BcsjAfPVtPCggAJg5zgGzvtRMdQBpRTS5R9jviRZ4HU95ydLshd19gfkW2YxsjQuqVRfw3RaX7Bz",
  "key5": "5XyZN7GcV3KhiYkUce7prVnB1Mh8f7UJAwufCTGretr7542QrxJDBaUWH5AUu43yYbV2ckF7xQUhAFv2mTbYXaFw",
  "key6": "SAHizjpcjqkLqC6VprpNuoTvnrAL74grU2rvsEpuGJ2LucE5dc8sMRmkJ4cUj3KYmJ3GHDFM1LfJA4xppQoEsNZ",
  "key7": "2ERFqo59LknB2u2smhybzSoWdxTRodVhnPtV1qcJ5JftXdCdtiexo6qjwLR8PhxEHFsidP8Y14ia97rLTKmPpeW8",
  "key8": "5NeSt5UJEaGLTeVS241L1oFqSdroHMkumh9QuoViKuihvBciq8sWrjjrQiPC1WyMBFEBGvntiX8kprsyXrKCz6Q8",
  "key9": "2GTc6Pt1ojk4uHiGNtkGkShgKpupvbcN3G8R6LA1zweTn3jEBQPyQycgUgtWYS8bz3PGLfpQYbmgWD7vyMJUWu94",
  "key10": "24u5czWZhAa3JTjdBuqdNpNq6JTToRH1j91YfJ2EfkTQ8LXNHRhfzrqs7UK5FmzhJVjsfkz3nQEVRkRuhQeohPk7",
  "key11": "5dKjpqJzGBnSF3cMowGnYgWrR2tFKKgwyWwiYCap91mxaFQCGeGiY9jYzTRBmHNMqfY5PithTcnkZaNYkJyHupGx",
  "key12": "2jiD7WNGrS1KkxLJeCnoY4cZmbrmthQ4RP7bqQhnEa3UuM3LmwYCJ229qPW9SjoaFUCfTpmLnmxGmvXbs1r6kMDG",
  "key13": "pxN341VnksDz39ZwNJUcdBT7tE6XgRneBfR4gd9mDvUdPpYciHM5mec2GjbXY3GhmyHLnwL6MRf1thBmX5fHKo2",
  "key14": "tPBdCDpUEHbh49cRFwtP9NyXsSF5M1Yc8wNXcnF5ang6TxcgRZC52v5wt7GHi7hWKBbBuhge3hDYrzfZQogAVVr",
  "key15": "5Bqs4YyJpRokcJ9yM5wEQuLFccHztLKK7xWrizFhyNWJuvPR3RHxWztrSSW1XVYNbcYbRutRBfrqM6a8BAaL8wRw",
  "key16": "2BWXeqWHD9Vzag9R6AXmLH35QTUc8PeD8JYBTzMB8J4cGDQ9DW7EBjmZcD23HNjs6Le622DvmvzPTDGGdJEsdaXU",
  "key17": "4YWJUbiyTj3f7ezLVcTroQ6xhS6GTUo5H6f3NFayhufKQKTkNBGPQoiq5PFQtJtL6gqd5GCQReTtkNYxgSLZJU56",
  "key18": "34ADPTk1r3XfKowU5puiCF1DuHGY91doB354htt6ZRCmhQmbrZTr6SWXF1XBnAFycMxgYT4SDy14xcpNLVuUW3kU",
  "key19": "2zS5ajgsZyynkqFec7JQdZR66kSiJGCC8dDicKSku7HDuLd7FFzYWyfu9rigVEMfmfp814Emf6oq8FZDNCRHpwK3",
  "key20": "2SXdb8AjtNaiSJqYMykY4n1TM5xyrzHdD2gy34YJmysFbRiSWjJLLZerjLu1LLm6SoGLxPQxUtBcF2xvq1QUaG48",
  "key21": "5ESmKrBK5nJzxQD15zhCgbPnpdsKzcU4QwZ8nCQrJGGu76kwTEDrC42LJCpzdMoh18QcLbC7Uobf6Z4LxFyWLGAc",
  "key22": "5rRqDk1hP6aHEyE9uQ3uPLYpWVdMjeGGWqiU11jLmzob6gHUkMJ6RA67zv773asmx464RvsxqPQW7jtX97aTbRHk",
  "key23": "2TkYZC5Su6Jit5iQNMksVuE2FUreY8djYcpvLVPNetJ8gMX2aTCXdhQK2HEvFrqHSaaePpGjShPQ94RNcGcZxQ18",
  "key24": "5G2D4WgZHHMCHxAbWuq4mRS4syktBo9i8hCA8x6sgK8RF6mqUGqgsV3SsbBWNwwBG4dS6GjiMMaCLkguQ6HCpVWz",
  "key25": "4RMuS5Q4emA9P7fZYex8JVg756Sr2UC6mYqX1FFrMAcCobsHHnn4jVgXCRaPaY1Tjc6cFUAKtnKuX2zDA3UMt6F9",
  "key26": "Xj812pbrbcPv5FSNnPnaRirY7a2kvdpeQaV5VCVpvPLsFTSjsgxdFAhmxdo583QuxyKQgVkD2e9kqkzHM9CTSkh",
  "key27": "3B8Dabss8xVwH2LtXnjorVFZkUipYD4sxkks3E9sP7mnzmcDEuBTESTmPweTcp5HXHdQdWv6h8g1fDW2zdW2YK8z",
  "key28": "kpVAeKqR4i4sW27x4gfhKvnbZSWYyKz5CqMCrXk3FCwCEUvp3skqNZfyH3LBiKAZaaDpXpThg55N5MJP6Cppad1",
  "key29": "4MomcejBfiyNssG3ShzX2ogPShy54Purpqaa1NzvCaYxDx7S41rivQSmGYuacCtfcVbwJdjZhFVDc3PZdBaWTkHC",
  "key30": "4E4jeNQCYQUvaskhUrwqejYaMJbmN1xeTDMxMHMpgfAmdGREefRsPuR296V97gSdekpB5xqvbRiuBMs5LojGmBdF",
  "key31": "67SJEhGphcYJ4ELontCBvWCuBC6XVZTx4eT6JpaS6EFQkKJSzbFEidUPfXc4N2m84fh54694Zpo7wk9aG8qVVJVf",
  "key32": "66vNfnkdhPtZjoVbwKet5cdPX5DcrVL8ro7rXXrtpPNVvuNNS6p3iWGfWJ1mKtpncSpv1DiNdpy6YrA5TeumGEHL",
  "key33": "4jMfTnL6MPa87tgpt7YiqUe7QV4nsUcdFycncNbavTHWmMX5cSapj6mx1VKPRBPz1EJTjSTWbBWFpegYavmgigrb"
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
