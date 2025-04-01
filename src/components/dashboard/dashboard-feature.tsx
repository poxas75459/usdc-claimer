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
    "51D5hCtrWnXJVFhWF32Uzen4MgBsuPPSRH1f4VZnTmb7QorMsyUQN4neMkBhryiMe37umo6bKUeG8pWw24q5tNbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eNUhqn6xjnZuGH5uq1RpW3PmmVrYbFWsZ4z22oFUZqEQWWYSM2d5zwgNXCyPwSWGCk1v6KvL9HoduGuZBT6PvQb",
  "key1": "2Z1Jyzwqr5jbB7qYdUc1syfQSPdcvJG26C8q1Pac8K9X8TqqVHmWG9AwSNJeSwJ9rk1aSsy5LQxHXBoekEj5YF9q",
  "key2": "XWXsRBBBhX6rMtNocQh7zeTingDzmvQ3DN1z2vw9yhCjDpydwDJcGqpq6DCJ1yrsnGL1WYWdpoTZm2hySDtwroa",
  "key3": "4K2KaWEjHre9K8rsksgmKfYDfZdGmNNW3ji9ovQYcjX8KT4N9SxhCqDeCgCmCKVmnMAYzLa14DneDidreDCCgEsd",
  "key4": "xUPLb5nQqXrR9w51GEXDdhthHjMX28YQT5LGNSpFYFF2VQuyCToQUcv1mmVwNRr4dphgMKnPgxqSSqRBBxBVfSy",
  "key5": "4FithXVzYqWbuonFtykaUZgtvh7AQThR5AjCMNeDeYEmhf8vVUMijpbn9Y771Uv5nxRTCrQsDHQUhsQ7ATVV5fU8",
  "key6": "31CNEAtrRhvdQEDNzvpNVrSuCtdnGcB1F2veGcABcwmcHQs4gvpT8xU9rFwq7qVjHMhkiiPx5JiRKTUWsZA4RxqR",
  "key7": "j8cn1yDJuuYMfwtjfPkGdaGVjjMAMXSB3vQmkxiohBcCzytst5s7WUvF86fWJWKNLVUaVRtnGzz3VKUYLdyFeMi",
  "key8": "3hutof4st2YvQgRWQJnhApKKJdpVhX9tP3EdwHEPM4JtK9czWTuxZbSYm22CZjrergguUDBsYa1soMXp9dY6k9BV",
  "key9": "51tDJjJ7kag5bak46rCL6wb9VvcsgQ5T6piDAuyxiq3vYHxz7MysZG7xGejRyxascJAyJAr3Ki5BCgrnp7L3Hs4x",
  "key10": "2U8yLRi8vY4xfNmumnimvnikSmVHZwjbxXGXrYYhoP71DUGgwjC1fcjv7cbso991xYYe7GeWwm5Cywndyx68MyfJ",
  "key11": "4oE7voMwJMyhjKEFR1zjUYJVhD9rFJDwB32faKG1WiYC6P6TZnDc654azL7yeoXKhMG1UfFFDtTeM16igXbE13vJ",
  "key12": "Ma1aTMJ1rRcnbtWLQhMSmVae8Gq6KPGaHf5kYwSSyBATR3DZ3M9SnaKgFsW6QXmxbtJuSejGECUQbzpUZcfDBfD",
  "key13": "3wwLEW365MedAieU22f7B2oxQrPx8FcBnbGh4XS54uMBmiSQrprF11QJYW7DaFZtCVok9dR72c7Z6APsxLaZv21W",
  "key14": "5E8jTpFy2b8z42bJLao3fP67gYZMLpH8vw524v5LSBzXpz1MKmCzE5nSaS8jezKs9gALron6VWtdeQcofqqLk6iU",
  "key15": "2QyFZ3NkWqVnso8TE93iSh5HpAezzs3WVxetxVSsTKPwSNyPbSAKK3GBBpJjZ21V3n6CXwKJgjbzGoEdMCRFMHWM",
  "key16": "4GGChwGYCD7WU5AEjYzW6Bvq8krT5Meo7tKsorKypTUrQwqrbYVtGFXespDN6M63jVPdFghHU52S8VLaCtZ6kZPe",
  "key17": "274C7D4kjbUtZ5MWJH9iUgxjQjhJqgBXw68SszT8Q253sqjDWaScEVhDY7YuYuUezqW4BHxz1MkhVLExrh2jUjBz",
  "key18": "5qBxUtCPm8Mu6d8opmTrmLgB4VwZASK7bd7sRhTdweaomTEQzS6JJc3ns7F8qpFoQE4M1kHRQUiTnefFVdD8wj2w",
  "key19": "3qEzWq6ThMkXTAfkEbH55RacfhVwNLpoDckH33fWE263hNewemm5XJrXwyGvAe4x87s96iZCHa1FdW1yToJugw5Z",
  "key20": "4aDw7YsCdCAp43VJr49VUaDAog6zy4eLUbz5kYhBJRufsvCYxRAn4wVpjpRQtL3ehWYM6bUtwXRF1DFSfQG7cwpQ",
  "key21": "B42aaoiTUPfkyid2MqhPdYACZfEHmP8TubakKNcasGU2vq8bdzcPXm4cf935DHczVwJkXfwaYVqvs3eromykGnd",
  "key22": "3owC5mnEVBGH38QjU1gbU1HtKKQ7nMVx4ADUHWAqkzJEihBLBcsKFqKu7yXxqjg2bMxviGd91tfA7AsEQBtUTEEA",
  "key23": "3rtScJjt88T9HnRHziyQeoXrt2YTVdsapBt87HwhZsFDGHYg7rL1mSmtcbMsypwM9scTdnGmjWz2LTZStBdsPH3W",
  "key24": "5Hiaft9rAi93bemvHjGVWujgyKBrshbhmYcML7UwkWzq4dngFjAz3jip84xqRxbUQUsyzqJgk2WPnCFAH8kDBjUv",
  "key25": "66sKC7KhJLRMSqZswV4U5TfFpYRasKznUK2g1TWfUCEpLJmHY2STY5FNYh4Pyavg4ZnDrjfLDzrfi91wMo6SfSX1",
  "key26": "9bdfXyCSo9TCLHiChxjgnQbkRNbcXVsrqnngCNy9o28Rj21nGyFVDdW667A4PmLm6UH9wfxMSBDzpnZMvjJBzBi",
  "key27": "QATFTrTfmHZp3d3wGaDh5P8m7Mb5EMPTDTLiz2uLg1UHk3NVCAj936tDh635FGWPFm72So4Uk9xtC5aa9v5z3Tn",
  "key28": "274jtqdFw6QS8x9WciE8H479cGxSPJVT49iteCjowNRhX7vbRh9dQq7bKg5B77N9QgoTGyacMH3oyRLT829mioFU",
  "key29": "3rH4qWHUdH8Qgd1jQ1SJBj2SJ1FYegccig2EQ3NbqKZ5haD2Uzwx6gjFw84vewQizrnhU2a3hoJZ1MLEMi94sFeX",
  "key30": "2KjGyxGwJ5H3G4SNHoh5fXcuKbJ23UK6j5jekZhSK1RzcXKfULfEimqhPDN3uS2ZVj4aZxC4CDX5jhJaurCLanda",
  "key31": "3j6VzEJrp4p3SsSmMiPB52fjVLNWEfvAkJ4EKH3PnuGaNEvyLdQJXeBrN4o5HPDLpcVcYmQaMUD5M6Zq2skbBqtp",
  "key32": "tsVzQ2ED9Vgd3PvMit69ScQj6i4Kx1gFyE7GKTMKMPcak38ai53nwyH5RgwoDoKKchDdTR4S7eUdTam1BposoCH",
  "key33": "6qEHKv6F8Ce9RoFhHJB2fuwFHema3hvEQMWAF2UW9dV5UUgEihYK17j3s8Xt5pxVSM6CJyRA5Qpnh8dmHUSiVQF",
  "key34": "6NiDHiDowbkxAqNJsZzCU3X6kjsfLHeYEEAUDswFCpzUPA2vaejKgRijsUXhKKd1vvRVrrjhSqHfcstcXhg6nwQ",
  "key35": "y6hmpqC6XadJTdu7f9Ya3GXZNs8oJnD8LVo7GJzTiYqj2JjPLiX4qmoRB8g7KeaMPqzCzu9kyA5awv6K1ZbKJYQ"
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
