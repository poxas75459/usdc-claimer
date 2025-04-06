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
    "3WxPRFEzwQ7gigB4Y1oU1wuYivn8d9i9qVCxzcdNPaTSaLodrQNPjfVcvHuuJeQDo46PEqzixiEASNdRo7NJjMpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5Ah2Re95r6oiMcT7qmdEnJfTbpXyB2HfFJEqYs6Zy2PxUEHE6d2SRcktq7er7ehi8xRg8a6MMGrb33WnEpbqig",
  "key1": "4Lg4H8eoVugfMeCoFE6fGAtDywASQX8K7gGTmAAiouWrw1Hx3VdU5TnNr2tr9QyTPgLnN8GvcW61bRBYaRHTKnbi",
  "key2": "urqtV6X3WePYe3K6ygrNjF9PT48nT3LvZuQdLFDBTHwVtAXFXUJHwKDaJ8TMN9bUYdrUPWkjUHfCUYmRJz9p9Rs",
  "key3": "64KtscARG1u11QwtBLGuYRsoH5629tzwuyW2HMpV9vknD2UY2zXEc44XhAj3h7qMMPZ2Rz7PvQ51h6Xq8kdDmEFD",
  "key4": "4wMd3VJRd3evwGtH7aSFzxvVXhW1D6GqoiMMC5iXjQAYjby2kQUpRcsMqSo37BYVHZ7bMZLWA6dXFekHDPuo9CnR",
  "key5": "2twRdQQEmjfuzjx8nSDZX5o3cjtCribEBsXbQE48n64joVCHU21YePqn5PchNd4hbFWFfjEr4hYKAmBPEn2fE3gq",
  "key6": "675xKJLTz5BvNGumabR9J8mrcNN81uAkGr1eZAPWAKtQTwxth9SjvPD4yFbRaJuoLzQQThsGUTz86uQM4DLoeXt4",
  "key7": "4R6sTz7fNCRzkVDw4nZy6cEEQsPkQKzFJodUToq1cAt3xKuD5WSC1T9yfdh5n9HxNo3ZtWeXVVE9Ueuazr63cJVC",
  "key8": "iL7gscCtPDTbcYETr8a4VpU1yedqdBP5MQ62bazm91rg1MoVMPjo4thjJTVxwXX1LXrMGVjgheSVeQHjMEhtiCc",
  "key9": "3VEZ4emCr2nXqUpKd2kZEWt3eXuFBMuwJVv9GeJNqgUYGXctGqp8jq8Uz7LwGESDogWmEBcWYLhkTL6PcqB8zqrE",
  "key10": "w9i2Tu32biGuNrzvq3wnASCk6MYbZHsXAfimevnwap8C76SsJ7x4Zm4Ghec27axK55593tu2p9Cc5kLdLiYVBAf",
  "key11": "oY8QSurwnLxF3ANy9X4i5KRtPUDWHofEAfdXyEk473wRnMvLBDhvqBzV4cwW1oWrR4pps6t6xCqNGmBXgHMVgZ6",
  "key12": "5x51cq2bGDgV5hPt5fv9fKn8zttvgYBGS89FZqB2DxjawVRSQMKe23KkNgrdq5VTMCYqZaPGRwT7yu1PGdAVcawH",
  "key13": "5Ba3V54CL4snYKWawtNVZkArc3rp1gWfK53qU6znAc3BiDxAhLqz98qUkzAYPtrdwNMtcmgZfU7KhwBkNmwUcCDf",
  "key14": "64xD1ESy4XaRF841C6Q2nNshCEMKBiMdeKLeQDT5GD5zH31WLsQbAioufxRLfU9FnjHAoHhRSp1nrj2Ew2K7Y4JP",
  "key15": "53TgMhZ6ERc3c2pvNQ4W58GTsampdJSYsdpAZSG8DbSoQ67Rh4R9pyF6jk396JT8vMfpZswzHVz3arsS8LK31es6",
  "key16": "Cs6Nf4vB2p6vnDSm7yNjn3438oiDqw3Hnshb8tm2y7Fp64jAknuRrrgPiQAL1LQPnpfiAJMsUXZrHiWX7GKXZSi",
  "key17": "5uCteot4isnZaJ8jCmtECt7kPcHBMhiz4hvv9F5Du2PrqHkg5fCaq6GJMxYTELhpDcJXmfpAkRMLk5WKiHP7ycYd",
  "key18": "4r9vt8KjrV1icPTf7osaVixwUc417SQ2z14EN1r8qC4kbRiTrHC3E6p83M9rs6tEDWdu1R3844MkqTQohTPw233w",
  "key19": "kMtYH74Kxf5XS3vGQ7mWg8Zfw9amboiQRpQ2krf5xw6teodoT5gAGckfvhgLDpnzuVBsC2sr8gJkQTz6ZXDSgjH",
  "key20": "3xkYBesuds2kzAjEZjwVSMF2BwHb7HDXHCerTKZdUUWe68dXgKBsV4arHbWU5hRUJFpeJ7qUgc1iwpYaiFCxCzbd",
  "key21": "JcVK3zAX9FyHzQx84mTiHKmnJ7VGUkB3zcLJNPJ6A7TP8YnwnPk67EQximh7D8ZoMRgUqWavo6cJABdeAQqbZAt",
  "key22": "5j4h4U7vvsF2wY7Da7wAiNsTK8EZwuTExF791hgkxLXmUdL6c6WDw2be57UsPmVTKb17DT4MzfjycJFfpA85gkn9",
  "key23": "5uVoUAZFon7r8a8T7Lvm9xpJTRbu8jF4b89R5XWEGCBMCKhRY2d2bHDUPq78pd8WZ5LRkvWtsB69q8kxySxtXW7z",
  "key24": "5Aj9ZDPuN91brDzxARUR7198zBv8Qv67gXCRFYKaPYyYwYG3obmGUh6kmDpZoPd5dg9b2VkwgzFpnegRJT8ZA9bM",
  "key25": "54sTscHyj8XDREYtBwk2gRyUiR81u4YF6iundExuwbYQHB8eSbpdJ7D6Cj9aJsPHuLK82Sn3uvgdGxHMn1NMDerB",
  "key26": "5uwtg6CbNLsEGaUPreBLh87H7g7dn4NwLRfNetMyBBSNPCYPmiC4rfLCSTUzS9JvdMXM9TSDAYL4e8BVg9NMuvsq",
  "key27": "39boWAiUG37g24FvUECrGWCx1xtR2roG6Tyh1WdxsSGBqa7ZXSbtAzF98ozjn3imNP29XjHGzW2b1mSC5ZKhRDWs",
  "key28": "nz5yT49Unwey2999jBfHrCUxWsJtGzCX41HMMqWnBLpDBdFg3a7MVZAFwyy5mKFWnPvQXtoQ1Y9snCbxrAqf1R7",
  "key29": "4gL9hPfXSdv6n2tKmSddJVK9dwA4md4V4Me2ENYGpsfzpwyYRVDtLntbbF7PGUVWfkPkehaLUkPNipXg67RfB7fW",
  "key30": "5g5fvSghu55bxM1vwAeTQYFDPwNM6A1iYoVioqDiQkB92ecf7AhUbrmEW9W1sGs2J9eUu3b4BHAzoM7Ybbo3z2Ay",
  "key31": "37zDyZbLtGgurT6xGNRYrQG6hUW7EDqqCEsd5tvXdL5CkyaQaWagYzwnuyRqd3TE3Tam75mzetf4r9Qkj5WzR4PF",
  "key32": "64JD7yZoQCVXs1ogHx2e883CNzvPMyHfPVfW6TH84Eywx1FCg5PzqVD1ttV5hKtZQNtEu6sSy1rDY6JqVLqQnrn",
  "key33": "3jQdRh1MnVHzo6XoQi1ft2N8SUkxPQSTuoHVPYqipaZhDKNMcwD6n3NqgjPAy5cGHiYbWmY5QGQXyPuMNfpoduqw",
  "key34": "3vFH4L2ULdKMHibvrLFd81fEi4YTb4ME7e2gKTPnYkuRcRJApRRS5sAPPJdEHa3jQxYGTrM3v6Z2jTHefpbHo3sB",
  "key35": "3yEji3AypL8Z6DDVR4Q8NKH29znUzwCMMxyma3Gm71mLYwJ6UgcEDy3uNTVWRdyPWvrjBS369EBAmu16CxnrgMjd",
  "key36": "5jnz4bo6SJC83ef4ZHUYt143A1EA8KuhPpwiGaWLt5Biya7hwnp8enYZUqMM4YHusSYS5Bm9Nr8qjAGWbE7rQMmn",
  "key37": "5uY1SBA3sC8ozjwNNcuStfdfRgfnDANHnNvNKkA3jHwQDA2qwrsrUi7kvK346HiByZVbnRxGkWkZrEtMZHTBM93M",
  "key38": "5RTFpUhxXmHDdsbdnK1kJGvcD56SAzR55qWaDE4XCHfeeVxBMA8SUfcwasUuoosNxmFXPVFd9ikrToeQUyQkHgLP",
  "key39": "5YJjZKj5Sj7Dt3dwX2SqJLncYjBeQR4UcA3ijZnBzTvbhjGR4gKTXjQJjGJNbr9eQowB47ZCci5Vsk2nDas16GfB",
  "key40": "5oA1nF4LqCiWhfEUdksVoqfoXL96RWgEwehSeoeui9eJ6wEC2VczDXcjy7gwxQLKTv8iyvKjUNKSB7Bj1MvodVVY",
  "key41": "5vxcxQjEeCTccWqKqAjGPMkkoK5rmAarQ1fxWSZs57YsNRpNNj9AbmrDyq8KoCM7exKeaj8A2oTchiBGKcuv8uxU",
  "key42": "3hgWg3SSzK4ZeX3iNjtrZBjUVgXJq4unb32cCKHCfXcUt5ecocmWhJKfLwhg3g94s9ytK7UxsnQNdtFjTwYi19gv",
  "key43": "rifE7CmKe2zeFzqSxeEmHzzJrLgg28g44Q9wViLNGwhGLMiw4WuGYu4uzMvgAvU8oZyU8Tp79eBScuULsESaZuu",
  "key44": "3SkwJgxbhNda6xDM5yvHtcapVgGdAgP4VBx7r1Ubd9xJTJARSE5FhcqvvvYba4YgfQdAVG1oujpyRDMTts7to3yb",
  "key45": "2HQAUYFT2P772zGsqFH7NJzzcymrZS6aNSWV34HhwJEt7Y69xnEabqLdkdnxC8r9jxaTPKKQ4B6fKrP7YQaEWtui",
  "key46": "2YXV3FpbYeJDnhG2kAHNVtkdmvk5FRZg9u7UDrgRwXSD8r6t1s1bQWRG1zXoa2i7uncff4HqUVNbeTzx3ViYAXUX",
  "key47": "VSv1C1hiPYH2b2BmCVaacQUmfYW6bDyAmaWG3Zr9hBvqCtQ9cHHszVdUqXBUL815eznaLWSFDjRmwnBLGgxyVhD",
  "key48": "2nbStZRQcUgoJwrn8KCKp5eBkJi2tK8CMyp3tHbM38mM2Dn7RtZw3QFPc6HjxmUZeyjxBdkpoDnkwCFDEsHoPM7M",
  "key49": "3b1qbByNtWx8bLFDpCAwKnpszYeD6TRQMD6Q5L6RXwkyDWQrrytn7aWmhMpm4BLBjp3ZvMVKpS28rXXvYpPTp5tZ"
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
