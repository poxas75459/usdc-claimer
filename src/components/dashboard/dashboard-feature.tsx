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
    "3yqmz2nAP2tx43PNmHxbLkENQvhDQPMK5Zep4JaRB7gdo1o7ExGosuoHfEVM9Cu9tBnf28dFbynDBw6VwxkcJfnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1FZ5eP4QGav9SK4gfQWJub62wpYm39PnfH1nYQGzAJ7p9sJGj8kKvDjWtbZYa2v9iVDJLcuNw1qjrc27VaNbQe",
  "key1": "2CXzHMSvhyw4v47d2az2pnKzueyW39CQunCRem7Bdt7czYKC3G9jDqkxTjcHMeN9XoGkcTDjr3TxDcWhuVha6RGT",
  "key2": "WWtoqqmG4bPc6TbZi6bcXVkwQGgmMN3R1UmkoaPTKaFc1borNNgiPdWqV1nUeDm4RBGY2yoAAhdEPPH4yL7GSxx",
  "key3": "2zHvUV5aLA5qUrh374ncKjhdmQDrYbibL9deKBDBMa6axA5bqu9FTnJiaWDDeRBbxACj5cgChrsqkM5QtnV9pfZu",
  "key4": "2F7yncL5jpxNFQQhtGtuw9QTQRtVvtcEuh6fHCSn2RU9cYiTGeWX31bTLyppVtGUYiDEJ7kMsSmn4F3UteegF2KV",
  "key5": "48LeTTbDmFEVFyvr2aFy8Rdaizr68KzSuAwQT1y1nmGQRKdp595tL5Yks1GpSt9qcwyvjXRKAG9CVtQ1Sy3bkLnc",
  "key6": "4w8dzothUhuemb2kxjHCBTChgYnjT6acfG3ztozhLT98cHNJ6h7Qd6DHzQHCkAMLNiQKWoLo4JhXH2GXxFgRbWMx",
  "key7": "291gkvMg3ipa2EpFcFjuB4PaiUxY77Yv7LKquJWHEJra3gvmpH3vXcDP8utVxzcYEW5zZmwPDZAytthrn4pozmZV",
  "key8": "45b8sWvQpXX8G8dP1cNwUKvYPwjn6G7DAWhoyZDCjbJCGxEYHepmLuXdPw5QxEwBZnFUnTosys5F4zHG9BVT1Ubg",
  "key9": "4outxgCRydtXN69f61uT8hJkXKErE8Lq88kmfEkjsf49fEfxpZDscagoVNQ8RnySgGMd1nBjjzZ3XCtPpbh6ujqZ",
  "key10": "62mLSmNurpbASqDTXm2Egi5mY3tXCvUvxZM4fcj19b4o1eYc8xgYXF6ngE2xykXPWv5AP9RqMrDfcZzUgas592i7",
  "key11": "5k9NMb18yn9V2zUtSoTGVJUAAFDSVj2bY535Cy5C8c19YzS7WM8fKVHeK7sHAe2tKiuRZDXHNFuD2w8HenzTPjuS",
  "key12": "5sScdoYQojJ41r3LFRJpTbbsf3G1aACRcWvCYxHtRWNSmzxVSwYRUmGLoBGpzauFJcd3RZ7f9Af4DX8cFgMg74U1",
  "key13": "3VHRmSrorafwN6DhtMDQEe9X98mccV4ypshkQqyogqRHRVNjHvopeLtN4ecDHGuonRiPWeJhSrBNfa1dwrZmNYM8",
  "key14": "4SjSMAKji1UbymiLGebe7kj6L2RwoxmRgVvuJ8rm7mMeosonWmdV1zGNHaByXLbBeoAS3vRRnwqKdWR9iqe1cjJf",
  "key15": "3pTf6MdNdpbBw2cU8amzTCD5sdWWxJ6Y8kkCzgCAJmTRBtyMmT84yu4G8qWdXo8cmAVRTK75mRuiJyZuisD3gf5T",
  "key16": "5C5Wg8jxJzfzPWst9e8dCZgC8W7M9bH6SVdN86KkCV1DaiBJcNjS7aTsAQe1c91Z3ME9WsQh8BRMqj63i3VctgZ5",
  "key17": "4RgZbbwDv79ATcca82MAbojZTzWnuV1iKenTroiWJsVJAuNyvgh98LUeGrteZovW79hRanfpvgV8WgDkP54Zig4G",
  "key18": "5E88KDZnr77wcKT8z5bXW4B8MP3pHTTjnHDVszTX8TWmEZzhqzXqhe2ZYhGZ4t86GshNPhcpQNyDTPu7YJFxvNqj",
  "key19": "JUxgdbCJBgQMGgfQfTPiTYU2UvdkgrEM2d6afci2VW1gpE5r1D3ZS8Wtec1LFL2LDPbWfPDWwvtCrMNYzCPiEWS",
  "key20": "3eQtQSmF2uMg9rAFVUoRUytPisjGoD5RmwfLKoxtxzf9MrNJ6se4oSpd9aR89Wq4qu3ZHYQjPeQacsYLWZGyyEjh",
  "key21": "5FGguSUDKwjHLN8pmmW2W7A2bSmCoUDmxPHbftunXPkF9WXFKnoUdxLPwn8f2U5wnA3sxjhy9NHGhZC1SxWTx9xW",
  "key22": "4xx39Kfe8C8U88YrnkjniJdqG3RdD1jETEUDwMJ51cVE7Z1jweMmN1TmkYfuot9xwskSJwhg2R4AbQ9bq3z2339L",
  "key23": "xvp5Cbj3Hpd1XFPVxHrxKW8dNsXU5y5A5f5KWzpn2RNy4h4sr7R1JmtGEGcx5DD99SN1xEbLx87yeoyte1EYw2k",
  "key24": "okPrqgb9JFCpexdZJ6JqaTqNXerMxFyfCw7bTEFX9rwEpiei4EYBf1BvgkVVgBNJXZcgiMisn4hCn3GPxUad5GL",
  "key25": "4wCCiR7pwjQydxww7HioBMEnSrUMTk9A8umgCEDfYBFjRauRthhBCa5zoxNN5yy84yuKJvKwC12dB6X8z5ryVxEj",
  "key26": "UvyoZ48RWWRDD7KLF4ChkYAdaxKhCYFb4pybGTWN5V5UoQeiMtKCpXn6rnXPnhQ1KUkj1jz7wX7LRxXLYi1dmt6",
  "key27": "42QjCCYX8zjhXpguVZugD9xDAqGM9P7tA7K1jzr6fKLSLPc4PoL6RYPaMJqdohtCetQbTiFENNze5vsevRtGVCsA",
  "key28": "2yZcAaxUByNf7DVzrYwgKhpxa88rEEyn6Uhv7jcDBkat89C4yaAtRFEDk24bUfcBuR7Q5eb3EbBRShLVBzQi9Ddc",
  "key29": "4N1N9uGEMsu8Ws4t8iaQeszwyU3wPnifC46ymg6fvzGt86kGYWvrFgSSSGZHNNuc4jY9N4jFuvy3T57WqupqKHdf",
  "key30": "3Y3xZqp6QPBG9zi94ZCT5WNJmY9k235577nRRN1n2mcfJ4Z8DcjWBBfkaXaTQ33sW6PGQnkzmkR1KwDpgsh7jt38",
  "key31": "1KZWVN8qTnjDWx7DYPdESKsJJS6eycy3JDxkNgoRoztFvmum6J8XxQdN3kzUTy6J4ZJTJwwWm2x9qEcuXLioWEH",
  "key32": "3NXhBYsFnneTXMcJyBEf7GstDAoLEC2hRBn9CDCpJUqf6ix2zkntZ7gL5fY7mzz6DvG7e9BAyK2KcniT55eMjagD",
  "key33": "2JkyZhwpTeJzNSv7yvPdx8rz49KMj1i3R7wGcpNqBi8BNGDmvGxDqm2ntGKB3f1Sy9j4rur1NTq9Ev8c54sRCAgS",
  "key34": "Uz1gxtiVbCf7sxnjkzpknxfvqzBxV4vFmajQzWx8tUUwPxccoZbVadFnnqh2ax3yiaw64F7C9i2bZ8DBhYq55TT",
  "key35": "3WeBhPdVbFFeW19Sybay1tSfhixB1pV6c3KoNxFVnGxzo3y1FH36HrCW9YJRrW2hTSJ5oUk2Fgkdz8JKUysf7hra",
  "key36": "4XZBAELwjKuJo2WdjosUw28Rj4h8SSBEjEs4dVsEjYJhHdVUkazX5VjNusF4DvSXr5fx7xe8WvUX2oZEx3BsPxUy",
  "key37": "26i5Ujc3wkuSLcKU16YRPYkAEu4HN5VcsMWTwbX9MTUk4dqkWp9DdfQofuEXkCvfBf6W1S9MuT6NQSdZCDMpMD9g",
  "key38": "4Ltjzcpm1bTXL1QXapmb51u57qqhWc5LcX3D1SamcBxxG6XUTaTm3JvFN4Pu9hVZUJkT1nbrjHqtBmHkLkgXqtqQ",
  "key39": "4x1ibzk3XZ2JzRYup4joeJgYrmPNxd7LS8QWpPjALigYVdsPJtfJ2HveM2zGyxicfZaZ4XiP4KXqiZ4VHAFZmszp",
  "key40": "67qatmJY6PehfJQ2ZVbjqEj3sz45ySUFZMq6Xxz2Zc93i3Jm4YjPphrL1cTUDeg27ycZqKBpAwzFuQZ24qzg3Mwy",
  "key41": "58F6nstLpwowemndWuPUajPkvq8vATJSUDhedWc9GXJYsAV8FBKvLYVrDWeYdxX5pFHh4m9MpGZ7YkGeAf5p1r7z",
  "key42": "ANQUPnG5iZ6U3Lm6C8SPn6LimXCYKnHTHhEYiDpX9A2CTUWshCKGoPfnujny4PFZnejpgkEmfkzDx4GuyF5v9L4",
  "key43": "2kNnQMVu7TGLPZct9GooTkq2pvShkzXT5E7M4v1Lz136t6sfy6xdKHTx39XaFBpnK7TT57VVvDmn3vEo5xUWekee",
  "key44": "aMb2J1qvqczSpwZWTqyrH83eseoykZVzU5hYk7tMRTjxwZarDPN9VTw23aPu1GPdMDETWiATpBEXCQhxQhsR4Ng"
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
