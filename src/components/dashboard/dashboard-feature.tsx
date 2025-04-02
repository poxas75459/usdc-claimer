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
    "3psNfHchMk6A2B4m2srQNUKg4S4MnZen2gJYWXc97wh4cW6UKV87gVKtay2NR9fkoXdR67vkTzJ3BqxNLVHfoAQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R9bVeo6Z35JogjafyzshpDLHxhrgsbBAAFsGZvB86PKzJd4JqXi6KBBuMejevZPCwhTDW73Z3LxB4Tz35tf7WAc",
  "key1": "4NFp1s29S98jXkHhgPACKCmnmvZdF3aA6J2EVWcHABxMugKo2siYogPRjmyQhztmJGXAmRUDEizjGZtgdpKybVmk",
  "key2": "4s1RtcnRPiPhPhL76qBF2bCa1rF4ZDxK4gGtTWoVj8yJhS3X4dooG6aZiDomXkKCYSDaSoDcpneT4YijCZAMUfL4",
  "key3": "3hhGSXZrRhzXt3oHUoTEUTUybjrtfziFiNWMvGC8uDHyBdkRzq13BdYzCau8ENaPsS2RmdEzR2jxKUk9XdVa7zMR",
  "key4": "PqxGqBxBAEW5smVNo8WqYkATzBX1GB8aimTNWykw79P52eSXZiBTZcqFqV3s5rfySh4EPNZqPnFCuk69vuuyt6D",
  "key5": "3Xd4nEDD9tehrysPTvrRWVQsRBGqgHY25NuHJCS47VQN8F5FZVR67XXA33JhkKgq2tacMrN7n9F8nQnVHeh1Nomk",
  "key6": "4LjasDsuMNdHZKTadMotkMD12Wx7zgiXAryyJ5R2YdnJ1et4Twu5bzsxeUzQAP1xxePzfghqSYpjTwPzJvYa5xFF",
  "key7": "5YSUVE46srWBNU7bi14z76UmVJV6MZY3p4V2ioB3ZV7S8XX4HmsjEBFHT9CW8fbfRx5UNrevQYCWDW9R7Jr3cQay",
  "key8": "2vxUQ9mrGTswtUdnU1C1dHTaENfZMRfoJzUztmjJ9Wn1HBtNnD5hydfVBMkZe9HemHwHH62Bq63fxLUxcXPPnWjo",
  "key9": "4zjCtUpgPdyUPe347NLr9JrmmZZPt7SmP4xBHYN9RXpWzYbUe8nEW95FEfXXevTwH2jaHHBpWt2QXKJma54bkfri",
  "key10": "pdP3W4EDGfKUhjGVBkJbwGxyAH6uuseb6mNNAjqFKUfHVLBJGQtQmVDcqxM1jvq5JFZyhN1AkyBfsy8aMBEUZX5",
  "key11": "3hLcaaGXn4aS1otUtfdWyMfGYL8xpYkwSiuzLZvM16jmZ1oNHL5SRxLawmuQtPnoW9vDYQdVYzueD2fqnDuyeYwK",
  "key12": "5jNvcc2vZNAwzauZxH962LhceaFzKxALZMhuFSFAbRY6XS3aJQNgQhzbaqpTf37RkbyesULEAfSm4hKU3vRfZhZe",
  "key13": "5HiLNu9guJFHgiQmRghEfqApbnK1f8RVuHktFfCByRwZm8LoCmWYC5w5LJtb6T8GNDo8PS63djBrunHkjZk7R9Pa",
  "key14": "LKHw7aekRbVMdZNd27YXPA466JQ4ze6LYbnqoyAijZoqSG3SQ15mk5CFTnPEscemoVDyPjuwKxXrESdfNSFtmuS",
  "key15": "3CgQm6euimaCSEiWMJGMx83h2FjCMsY4KwTi9LJjGBqxxVpgrwya2pJVDvufcDB7QtmN8HhNfJQhugYy3qDXjMX",
  "key16": "56ohE2HnhoStSBHhhoBJLhUz67kp2WiE9nTsKN8PJjS9AeyU4CUtjTn4aqad6JMsCkXCuZdsRQ1ZZ46zgtgq9nqY",
  "key17": "5bH7EiScRaEeM7TCEmiWbjwgwZ43g4Pk9i2J2JHQf2ZLtiUYAsNe3bZVs8GBERgJN3bRS8LMxAMyXSbYLPV2fF2r",
  "key18": "4kSyiuwCTQeRakFW9XTNWdmzKL3C4FqYVbGkJM1hN32dz9Weeq8Fz5aGVSuY74hHVmuiew8FwjxTR5JBcnKXr4hS",
  "key19": "4MPekDzKnJKGRwQ1U2LWWbcELYpmjZ3jS6ZXiosqgjd2tDW7WPAn1YUPse2oBxEaYL6fx2N8eLzayYMidwsvf5Ez",
  "key20": "3vPA6gZD1NXwBXCkNVumuxSCEs8MZsNpM95pmLAPzrqJh2wuko6G1fFgzyXofzeVC4D1VTgfin8afvaNxqsxDkAx",
  "key21": "29Aqovk7q4n8ZR65eaZeJA5hu8JJEkcMHfWCQsTGEEeSyK7WWjwXj5N47GSvRvsEJP2Y9DPrsD6h4wc2bxjbvsLE",
  "key22": "5cdC1FDGSuNXHJqdUmQz5xKF61NDv6qRXi1uFvmw4My7oknAMGkVo7HgKBJZm9yonXAJuDdamwY8x9jF3Dx6DBeQ",
  "key23": "4rVymG85xctQAKioq3mvPX9bxdhdfUAnTN9awFA7izQ4aW9xUCE3J4VhBkttnrTY2w4cXE3tnqygrBmRfrTvRHhY",
  "key24": "4jVyHitoE5BoCCm6j7gXHJXycD5GXQrHMj8u3CLjLfNZTKzLJGLgySkMKKS7NH44tKdeVsYHXqVT5HhEj3yVMzqN",
  "key25": "2pT1nnNJu9HJPZkXZ79umbj3CRuYFsjAL1mzqGsr4PL6pD8AKA9e8zVBaNDxMC4DctY36ec2h2QJkL8ZNaN7j1g8",
  "key26": "2akULe9FUikEbeDhECVXTQGxv5JYcu1nN9Hub2ZaAiSgkXNs6nbiykY1s6mE2UxfGShnx6PHnozTrS4sgWYa4kp9",
  "key27": "28HR3fuAvUxL47oK6gxm53Ffk6xin4AtVNFh6Ut5riypqgxCwX8NTyx6JzrJhM8FY8Qj1MBpLuSmmNuKUmRAybFN",
  "key28": "5yQV9EootRsoRcCf7Eo4VFbh8ydCcHRf1KAUPjZ4LidMaBhpPt3oGUF2c8C5gVyXQacfityGuWDsAvPrAqPNjM2p",
  "key29": "Da3nK3QCDwe27bYXbK3xuPbqn8LvG9XwTdqXgNiaYBrVcgFMudY63Tw4yoLGyC7MmVmmksVcxKi1vyCnT7Hkm9k",
  "key30": "3mun7miaTcznfVKwuVVBCNNez6eik7r1xFVxMc51tR7GHZ8w23cFfmdkrSaFTyHTNpe9cWUSVoUYYtNoDwBhmVoP",
  "key31": "bbNRNZoqFoZG8e4Gwu7n3aMRmdsPiSGX3fs3auQXNQzyczas9toFihc5uYYjEm6vA5rX32UAzCtFt6K91jiQHH7",
  "key32": "4dVMLwUZ8UkqkxcxMeNtNsjMThoKajCP2yp9HAmhMZFpbBZwiX3yWUWF7cGWLxi4oUB1W6nHQUxv5rcWsLLtaWoz",
  "key33": "4tECFfBoiSm3w8NbJv8MSDgZvoEgXcSgzQ3xU41XxdrUG2Lc48kTWYRoe5EdELEn2yigACB2dYdorpETh2gMG8p6",
  "key34": "5QucjQQEB9zs8UFY8v19DDAzifFZsjd6FXxvgUJo4wHEPZ6W43xVZeWF39gHanc6EgumV5JUKSypFwVwtaJYuVk6",
  "key35": "5GKrPvrnYyMZvnon9rGZNk9nypotoeEtpkbETYC2eMD3HgX6Y1QyW1PUTb1o53vwg59J9nnxnBxgXZ87c1hqCtam",
  "key36": "4BBQKpvmrxaxCokYhr28JXoYguoBagKDqPNzZAvTcAxzMvvqGgfBv3V2z4KuyKwr7VZ3w71c1pWk5Yfhy4zzCpe3",
  "key37": "5GKib8NT1ohP8LvaQzWerRyxBLz4tfM2wWsnTD1JfhyBVCmCVXhHgg57R7wBB3pizXZ919MdmtRjGhiawNeVhpmL",
  "key38": "5nm63niMsH46a5S6o5nuFWdCBYuea6mEpZb4rZ6Y3Sc7WbwndyNka3nMCdKkmup68S4eUFwH68qhzbungBx6LMSX",
  "key39": "2jHFRS7K4kYSvytq4guKwcAKoLYSFLiKjKoBgXn17ZF1XjFS46zkyhtzJeqjdAvU1PKhGPu76KBqF8M39JqG9cSB",
  "key40": "2rjub8p1cymbAsKNYYasdRCin124rskwXPb3m3nm8UsRTznCZTxBrPn7BHdgMcxZUZD9YR4srnZrpWeB7jWPjgQF",
  "key41": "2ShNGmwTGT8YYgLkg55Ca1G5HmVcJQTvDSBfu2bTNeYWJT9bPFabKZyYMyXA2Xup7PT7frCRUhpLfM3qm8yt2D47",
  "key42": "5JwHWHDTAQ1nPS9y1TbazPzM5gJMmP47jqS8XcLu21sNT3GjEVfbxWuA8yN1u6FLweYkkEigHVfNpiZKPrg9etVy",
  "key43": "47fzD1Qys9W4fkNR7o7k9pkirufKdHCddMASWbPXbRrf1zVrZWTY9rJP1dsqLTyHzEzJ2aRoHeV7rN2UHvT7Zma9",
  "key44": "2hJqQQoQuW8B2NpXDnwrPgLjhuT7iZGRQG9Y6egwtc7JEZVaxy6BVjioTEeuuyZR31R9ry8xCXPwzFzRvsWoSvip",
  "key45": "uGt2RiYzt6khsePEQuMFsm2ekRyNpVHdzRDw5Pj8VaMw3qGsaxgVS6dw4jSteQpAoHSNhUzFnK45pNjyVw64Uhj",
  "key46": "4RSoWReCSoXNs2eU1Gb7ebtXUyc6Gh96TRed4KBQGe4bAhJtyX3XdEedEooZdsXsBk3P5QQyW4KA7P4MVfK2y68N",
  "key47": "46nNQUwtAX4PgKZ35rLEcdrcgMKAfc1wmahNM4nXj9yC8MN1kMGng7CrpKqKhKJ1wVWVDWAPzjasnvCYBC3FKnEX",
  "key48": "Bqa351JhWaTpW8QX9wRGFmXaFxCd8d8Noa8LTuQsjJp5vwDmvqu3PgPUS5rhGEG7Z8qSiYoFJaxSGW8j8Sh3K9c"
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
