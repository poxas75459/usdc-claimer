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
    "2f8G5JGF4L6fMUHuGLZ5GkuxzYDtAqVbFW3Dgb6JMwBVNGpm4F6YFXQR7imjeohEVPSvksPqV9jL3DKYK5F6iaSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxGptNi7KjWDsYKCbbec6h1UKffjJRKjtnRtun3Lku5efyRNLXeCmggLByu4fiexNNLCrzWKKFRW5H57xrcSA8E",
  "key1": "3spiKtb4wg7mMCCHSqj3pWUbNGFhsZCX88kAjwEZYcqJRcxV8qgXjqv6oFYD9EYADgMeCtprQCU2U8wmQtNYBNeS",
  "key2": "5WQ9frk9VauyVwjYiGTCPeGAidjYGHrXaVCTYxzPsp6kWGAt3pGyG7VnV2fiRsia6aY7NnbNWzKPmvHRESPY53ge",
  "key3": "5Tc6SRTjUwjeRd9iPkgYDPDAbN4kfPuXitpyJVXHTQdH4zQ29kq9YFhaakGptfLGtwoY42JWaZoR6ktTW5fX6851",
  "key4": "3V6d4Jd6XwNX7uv9Q3mdYySLEqoQkokh7Zb7Z9CCLdGpWKxdMjfnhhyaTXRFDjqA5rxbcSikW4kDsYmsjFAfhfvD",
  "key5": "VsM79sP7ZpbN2dXndGMhRmjg8rnAwUzexgcp7zR3pdN52EQ7gVg8xZtckFBx1f8LKgq89cWgVZZLM1qTxt3M73p",
  "key6": "5q8ENv6XDvj4zR2zvtmH8dRSfh1MSAsqjxfE2x5GDqWt7TWip8FZgeX8BK8MMmyfCZbq1JE1RBbbaKrVUGZMcymD",
  "key7": "33FLNdB63d8SXb4jZHN7KZnxvF39KurSw6dDT9PAdRKeBha3nnaUqYxcj5UoHJZHvsJS3qbch5fuPjeJvDMf4biG",
  "key8": "3oWeBxWcNXRq9BLvDMbruXUhSaakMUz8eFFrXtrGdA4Vx6A398HDkfLhTg25K9hiwqNJK9HKb4AMSMAskmbhHSuv",
  "key9": "2NPfzoNtBz2iRmBiZmbj6qZHua1NQK2a697pc3QudWP3VeLG6MWdnbPRfP7P58A3gaMEJBetmuxAAQGakEGHq76M",
  "key10": "4wbFEHAhgzY5bbcxAAnwfGnp1mNcf8NciGn4APsPwtnVAouJp77DidtxjKuva9mbUgFZrYoqaXXEVAvk31xvz4i8",
  "key11": "61gYUUDA3r9oVFx8rrZXGTihnA8q9XQDTCWiMa7HYzUq2R3KFy2upwC1zrzvXc9DE3jjNCzw2h4cKW2MD335RZmp",
  "key12": "52tzuaKwkVMJpfQw4b4UH6z1qXYqyP2QjDp9HRDeyhnNfUyLowGicoD2y88JeWnybSBPNSbgmctmaiP57vAHSb6Y",
  "key13": "52GX9wivxkEEzQBcGDfrkwCHmGC1JXQNtPXzCstgj2izJ9Gi9JynETH3EfGTgKn1ybVpvjMcyXFcdwgayhcu8xbd",
  "key14": "2qPWr496c1TBUVUvMXCoZwuRX1hytaHGLzg8WWxqrMFh1RmA8353uL3A3xzX6y3agWakHQyvsVwyrUKQ2p7BY762",
  "key15": "2PMfTt8cWrrv8mu2iiBPqJtcBw8p2pPBES33jHJCX9qbgrtHz3oue9FWaYrznT8zm3cRAHd3ZNCXC5etCCQsj2E",
  "key16": "3ZxGHRc4zgFouCzDMdmMhYhVYe6kqpzh83MvxGfgMsAJtFyWaAg4Dhz12QAKY6c8pBZw82qqC9cFLJSqTE4BB77t",
  "key17": "3mQJtJEQnKciADLAX4Kcco7atwPqV6KNSrqfdUDvKkktUs4aTEAn4T4zneJqNiQBhcdMXvAnu2brDhpf21J1KYjg",
  "key18": "4kD4CAMfGcnkNnnq5DBBSkTSEexRAiyN7dfVdca86GcQLjx4MHhc6L2uYN3jiDYcpobs6nitEE9d5kKYT7rNb2WE",
  "key19": "52piVjLK4KgAvBvNg4cdLgSG3gZw5mZSLDpeDSt77DWSPJWzMw2sguKMVBk33HpmiNVgwPH7JoZYbFGMqWHJM7w6",
  "key20": "5nEQfbUo7TYtg8JHsZxFYsYSVnGrPVDpVvJZi4fZgLP1JtHARqiHUGXv4QM4b8HkHbBha1WDB7ZrP3ryviKXGPFr",
  "key21": "x76TvcX9uVi81wpoXS2MAAEtf5rEhkZwbAzBQgaLck2BtwyLtaR9GdZiHcBfKDw2WvSKzCjecto2nZDbYvR8ntk",
  "key22": "oWBiKeMTXbrvWSAJpDJjPny3RJMwnrzXJfq9Yb4qusXTv7agAJFJzSW4UjK9iTT7F9ajeyQd654VyVpYuvvEvzc",
  "key23": "61xTgwqHaFR2DPBQuqZqdCmNoD2ZLjqcbvuXtiKhjU2yoV5WbhcAKGQSuXvxckqF24P9hfFbJ9N8SjMTuq3cCtYL",
  "key24": "56CrQN5oVEN8SdkFMtTZ7aKHVDwYChUx2vxTM3tctpSBRbh3sAzgErnsYnsjWdubc6yP5f1mUoHqRZZ9haRBCkaG",
  "key25": "NNLvDmLvFBdEEXB1sJnhPwy9KsY9SYV3QRZ7Lv5eBuoRhxELknYZSpzXv5sF15csYELoccYfFdrw7rD5HoqUQ8Q",
  "key26": "2DjZHPrrSqCA5xG5ZBX4jeK5RrGPn3D1AsWg5xjsWhGovr3Fnv8Kdef5vWfjaXFnBBrDoazgEFpmqo7b84KssTjm",
  "key27": "2muC3TGqGp4e9TAAvb91ciBdTK3nCJbLotXJqRnDV8w1WD8aqCkekoQzU1xHP3LLkmWQ9xxNq8i7tLoyczRXAAVb",
  "key28": "3NJq7cd1EMqeaZaF3RAmvaM6SpprNr9RCNk18AyieRSoVWGVqn56aijrw2gHNwRGLahFoXThfML6yJAw5baWZZ5K",
  "key29": "32tNYD16uBJuGgSUY1uoDZ1Vpg7Sc4vd7HCtwgZKNvLRPhZtfSzpDDGwnnp9sAZ3xYgD5dfdWiWsCFLRt2JeCbvg",
  "key30": "4MGomYspHFGPUagHqvxmxGhG2kPqHBYDVefWJbvhaYctk8wck2SyLeAJsmQsC4tPvScZ8penzdh6wgyq2STceBjf",
  "key31": "3G4SebmbVd12k9ro8owQbD21gSAQNUeKgqwWjvph4G8gsTYLYYo7G4oVRr8mZJdFshHkt8xJaxm9oDhukwe3Rmmr",
  "key32": "2Xq1hnKDZm3X1rG6Jy4RUcwuL2i5oTQX2fGMZq5cpm1cLagzuGUxN7QXvR7V1JQvvadrGPkpxCptQRcMXDSyBFPC",
  "key33": "2rqtHLhRE5TxDJYrd9LKNMXzxbpJHGuummAaBVBVhXi5WG3XVtgtuL8oKJENPFNPbFLVMzEeXvUt7UUhLpgnYq3R",
  "key34": "2yAyuga6WYAhPHZwyyTVZ1ed64xdHrQwbeAPz6g7XhXF5SQDuUN2WEHG7hsGHYMNbiqjLmviXh51BsUVzcdm253n",
  "key35": "5AANMKmjiuNRd2zhY39PoiigrpZGUBhLqzVWJYSjXFMYJZpRGu4CTaj8avZSQtddnwbScUgMPhEVdPRjwJhRD8eJ",
  "key36": "vYSa2RFyxi9i2okrqAkej75AkXeFhQLDgE572KLigiWHPjz91aHaJdGUo3D7wb8cXz2mbfbJn1w43f6WCZA4Vhm",
  "key37": "wX6DL4bhhiQUPSWgUhsks6k2aSTiQDVSe8MqsfkqNJWsyY6McDcRUjxrr5NJ3uYtvb3LXfoTugevE7w7dfNHXEy",
  "key38": "4kcN7RXt7GXoqL4XLGUSWVU5Cv63mDfVZoSm6XiWnwnWzjEFhRDzumt7NpC1dib9zX8Td4teQ7TA1udH6nBN6za8",
  "key39": "4z39ANn9MD5vsVcJiw8NbdL3Rs12yjzu5ZxXZRWzGqbuorftopx3UKeRwcjnhfxCPAGE5kCPqXLfmnApEtdVzs7M",
  "key40": "gRLRgYJvA6mD2yg9XEHnRq571WiEwqgDaqUMb97oukcLydo9PbLtmiQni8qHRvSiTB9d57v1PQpYAgA3xoZfTJx",
  "key41": "1j4n9asDwaaahkiZ52bB9zJqQYKgZsvELoDDRhGFPusHRNePyrknBeJqeVLyftURcMbf3qSJB8sTqaRXkWWyEHH",
  "key42": "35wtQr1v6PJmpKzHcyn4KDECYpSKbTZFtZ9X4vkyZFoKqcJ5sMn2FCqnaXhgxWFEjW6doYFGxBugnfBq8NNZZEjF",
  "key43": "26MC915cG413cZ8iCnY67VWQdXgquKFwNmArfxgrCjZiXGX2VLba9F5aMFhVyTTvk6Vgv3cmktXHjoH5K29DMk6J",
  "key44": "4fvD8PTvKhQzhgSvUfnJQxGNTuKnnFEuazhk2keEJkK4wdRtr4GpPZVnfYFbrsfE9NDRBAVumV7o7AxMtNo9NN5g",
  "key45": "3PUtgGARSoQLWhneW58hvCAe2nUtDnqjorm4GHMGpMWztDffikzTZarLXFL9YHMNBQRYZFnifnb6xT34ufFsV3xf",
  "key46": "2f8ZDyk7SsZATK8WTqLpRX3pG7qifvdL8K8z3sQnaNjT8wxingHsBwHqDFMJQTvMg4hc5LDeFz97ZyLS1KU7X2Bk",
  "key47": "nPTSkezEYsnabQtLKEZc59kAj3xihzcZpsANtabWEPmvVMackXzm7bXSjF2vUcneBVFihDm8UriLvNvNzFqthAA",
  "key48": "42BKxvSh24PJQbFV7x1GxT18hzRffZFJC7eAVi2MyGT5CvsCHV9wnResU9wKLmYVqM5LaRb8ZscankyHwcrXjvRY",
  "key49": "36dzsiLptbXAGZJAgWxe2RSDM2fBTDUHymmTG62jrdSNVY5MTrf9Du9K8MuA7m1C8y9FQdAnPmjLd4AzyiKKBxZB"
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
