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
    "2ewM2qgFPxY3s43vxqGV7dtatRBu9VK4GSg4ta2ANf6W7q5VksBkfjPCFyBkFuAvEkp8UishvfgG1ev8LrG7o9Dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EHjU8pjh6gdWTSy6rEKQePJnGRxzitTCZNF26UyZSMjokk7RoufAGydV8S9ydMAXcsjcQcVoxa5pYjpxcHAtqsE",
  "key1": "3g7ZLBA5S1o4XZ36eseirvj3otvYqXeBCHRwVHKCNHyA94vdF5KTRw8DQrigA6cxtk1Ut3fWvGB742m3AtGCSFPe",
  "key2": "57Sae3Mt8bRGYdCvDjpff15X51NdAn6PR4YPMSm1TRQCuG6TKjzD5tL83hJQi9qxKMCbKNVnDbggNXx8LqxEf5sP",
  "key3": "568qkDVqHCjUeU1C7wVtsqngbpbzeSXdbFznVRbzbMSHB1yAv1SLz8NwnjDbTN176iGe7qQV1DLqvmvsphKraqDA",
  "key4": "25iXuQd5evDjeCFJZnYPsR524CstSaFotBhftyPSQRjN5rxQEn5kDvdNvXmnXHtEMRJ5e1pbddn2UEBwS75i4HRF",
  "key5": "D7j4x5AZxisyVocbfDL2R3kZ22Gd36ev7Zv75G4fPMV4gCzrdT5HaV7i9BffZhkNSVgoYUFYJ6Po3jiDBripvhX",
  "key6": "6TomLBdus8bmQedAYLgHCjex8nKBDG67FkcV7Ry1Widi6hfR2bZzy7tEcCsa5YmzWfDkRqjmbW5aGSPayMUdd3N",
  "key7": "4UevJ1y8DMncyGokWEh7JEb8Mjs1D4VN2gvtXZ8dLCgwrwQJh2E9iwaHXaCeYyaSr4PrnPbZmfn2tZfeVT1U62H8",
  "key8": "YjiyFDWgM4RQovfaCX5mSgK8YMEonfJGXYZ3fBSU1M3XJdYXCbp5uWHFcHnGyD9WK5DpRU5d2CXurWf6iGAoP8U",
  "key9": "55xixwR8Y92LkyQuLbniE3GZ1C1tusogLiqHxbaBSCcby1xjqWezwZE2ZcLEdeW4fgiZQ2pGwh2JGnzgqPv4sE6J",
  "key10": "3TqisXT53tGCFF3fYjKFvCvXCh3iPNj3Y6cyJuVXvbUbad9LB9r7yBHhhFgXHUgjJGwnEMwdJ9RxRoKqNGPx7FCq",
  "key11": "5C6LSDR8RM2Fq9YQvZT2W77iiNbu2z3Mj8ZtzUT7nvuqXJNnsgarBY7USbRPzxsx5Z5V4wsErTGkvLQ8BDXDWPBM",
  "key12": "3fBdHKEg9RZgfPLjbuqa2impCJ7bLuBc5BWjrZmbiinExJnvRNaZPTVZqygAJyn3vp7AquzbfibYudfHjVMXU9kG",
  "key13": "2iEck9D7WH5TNqCWbBaksWz9UmJ1MVwSRB4ae4R1pfGHsZxss3QVJmd6TxEXMGDgMdwZwRKdyCyj4FrvfXz6KiA9",
  "key14": "AGwCQp596cEpJa6bzuRx6hCm1tSNdyazmyEHpeRnyNjK7kA5dzaLDxQQMhuFTgcghubbwjMN3stWZ4JsZQyexCo",
  "key15": "4x6e82iQd4CZGaMXBJHEnW4U1X3cx15bJkn4c7qvsrBb4FGcsiGEBApJE7HoXLwbwFwtepDew9uYyBoBx24rZqX9",
  "key16": "uLVFJ9Yydz1bZQ5BqYWb6zuTENSBbU9YZuAonHrTc8hnkhaSeQ35KVW4ptxNoqCon8AS2cwhAqB1KLKTQnsTrTB",
  "key17": "2qArJ5rwzgpZFogdBb1UACX1FvVwkPdP2vPLDt2idTjXU7AsvmBZQpgbcbFdX6Sf8C8Ls6gdmJkUwnmFfTihgxag",
  "key18": "sdZ3vsgAr79XeK5EQXZCRaN2bBN6t8jYUA1jFpb5GWoyiEJ21StKVZj3oJbdq95abCwV4Dnu267phpK5h6hnu5F",
  "key19": "2TotfufXBcvwCZ7Prk5EG4QvzYe8ua9FXjhbBn5tZiq6Py639BTcysNeJJuuijYPSVsoGSfwjL95KQ6woMjjKdMo",
  "key20": "5yf7izcJdX3yDRyWzNju7JKpxbmNUTVpQKjXn4Tq8vuohjG4C6k8p1HFSveR6QUj2LjPaymnjYXvTxV65jEXjhhi",
  "key21": "mkjmtGFsLcGbzTQfapoMiGr9uMFDAzJj71dLzWMXPVttSkUdpvgnryU1j54GRhMap1y1Rsaj31oJBzKbT1jygn3",
  "key22": "4wh3CC3hT3Z2F4MWRTBcHdPUUUn3xyyECiQRKuCJBr8Noi8ZbYg7gSNGLxutkiDiSBL98AZwkMiu5UfmwiZ7GLhV",
  "key23": "2AZot7NoxQYLR2wrjw3K9evmppyPHRjDMPkCmfeVDFaZJ8bSE1bt4uaNd4CKaV1S4W8o4LaCDUNyXz8GuvisXrSy",
  "key24": "4jJJCbqMmUbj7F85x6XqdgFZwjmtyjwfLFmMEpgubJnFYhxyyfjkgczsYjwuub6At1y4qy8ZSE1eYoeYKFR7cYRi",
  "key25": "3GtKNSYArfkGmm5tZwT1tGHZx9EuFAwM22knj57tWUJ4eitFryMR5WVhmnfZuz4S7pjvctsDuD6CZnq1MCPGtrnk",
  "key26": "3hti2zFa55gVwKni2x1d3FajeFEJregwRAWot7xjRGJ9iCTx7ZmEycQGQCAM9qMAvLzJqVEMiHm9nRGPtSJWXEFK",
  "key27": "5cWh63xacFChtnGREwqiMSxpQmnBKQ718qEqc9UR3CsLgJXyYCRecgTxCJgVT6XVKjsgdd1acttg4iN4Ay1Vi8zr",
  "key28": "7Lq4uLRwpwW5ovjsaUoqR4nKHg2eQGqsrhsdt3aS92zJ7CJT3C6J4xhrQH5RFsxpWwmbMspyFKFG3k9CEmqZAqL",
  "key29": "De1drqMLhpUbdLNrsMBtQLNQpVYHrgFF46BrJxCJRocqC29q8pAu5Q1YaM7DiEkeAGpvc9VTJcyEVPSquMrcxaa",
  "key30": "47Sfs6AXsP87EqH1uBU8Gw3njog1oJwd7aGxHuSbrqptW8uVMQYohcJ7kgFvgYN4XtTY9jNa47MPTVYxhafCt8np",
  "key31": "4Aw6EsH95VmscGGSEmnhGFkBtXukcKYtd8JiHxkTYxzJpKW3fNhhJxH6jGPMQV7u28AhJyQUDRr7rZqCLsLfqGg6",
  "key32": "3n8JqMrmPYX31RWvkbZ5U5SonY3gA4uMozW2kKAwSG6RkzNkqzj6dYSetUuUUzZp8HDL1VNMJyGfgrgsjce8GprR",
  "key33": "4e4wARUac5yFB2CkDAhrN661wvBuPsSCm5spoKyw8CLjJ23kZ1RdEd9FmkB9K45m5qVEYHMJby821rdHGfXigWK6",
  "key34": "p5MFuAYrmMXBMrPYXhSdRfYbooeHXenkUKA8Pqc3Lrs3TBXB9JA5Ecg31W3xmoAxjPCXmJr26UPcbMmwAT5dXs2",
  "key35": "7VtHtQcpk9PYmrAiwn87ADkmc7KToYorsRqT4S95pasV8BvmwqVjxxBuskxPTHhRWZ8V86rTFbk6WgCvdf6LHfB",
  "key36": "1eHrDDwf5hTCaZZT1dj3fX2KmHdDhHBEtBcyfKTEMCzV3ve6W6R91scWf5RcjwFLzggDUkzRAxNEiXC85ZFkzpZ",
  "key37": "4uVf2oXqXVftBv3pmJfSmfR3dRdAixj6MhXR3rrvsWS9zLQWZ41Qgv7vHTtTU3b2DavLgS2YjEWrL9HZwTEswoRw",
  "key38": "4wNiq68f2eH2u62dSoHfMp7VaN5hrAZLDiqghb8hLczPhkARCzFFsYnLwEgR9sA3UDaneQaNWxtHKY4yhh8L6piH",
  "key39": "54QpFHwYau81FD3DRFAADVvRJAac5mbnmiJj2MzRk2txPZgNHtCfU7qNQBmr8TtinQPB4P9eJcRXtvg13mkdq891",
  "key40": "HHrZRT2YcTDJ1afUNUmWKxDHWKHrzBzR7D75WH96bGb3z5HpmrE3R78tAhzcJKnTzzsULT2FezTNHjPzG7pwQzU",
  "key41": "bTReiypiEEpb9UmCkLTrPr3iDexqKRFyAy741jDd9jRTb6xtMSneGkFHdU1qKkJpPR4tq8M8fQq5gj7MuGa8Bei",
  "key42": "5Eo1Q8BgPWWzJQwzVkvZ9t5GhguwW9BQ2UcC3j8aXPX5wxUaGm2Gtb1cEjt8A2FBafVSTeBGsUAfCBZw2VRiS663",
  "key43": "56MkB7uU8hZ449YjQKWsXXGmdUeKxei4Lk4W6wffVPX9xLKTK34ooVhpmuzZdub78nrhaDF4xR7o5vVHmpQ57HiJ",
  "key44": "567UF2feGMMQ8wDx8RNopPXT6y6EE293j1UFoDoDB3wdmucWSHBzmoCLAWvdAWSkPBhGySXGXJP1ph89rmWzUW62",
  "key45": "4ENsJxaMf8EzPFvByB9u8mUq2khecpqBLQucNNH3hzWedy5JtrrXbU1xBe1W4a7rMwV4yydDF78bmG7fANYCA48K",
  "key46": "Ykt5K1vkgUamVrvkqpXts2EozJy7TkaTpfr8c5n53U2dzWjZFmy4Vw5YEKj7e5eXENUoGvw3ivbBxa6Nb36TejW",
  "key47": "2Jj3K6s6sUFAhjkiQp3iQ61DpZ2E82EmQiZEXknsN2wHys8PBnH2LRRTZH8AL4C319kgork5wvNBVhkSDp8qd93v"
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
