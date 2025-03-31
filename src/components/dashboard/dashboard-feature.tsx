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
    "4xyfTxmKyPwnUeZ1BCj7BsYXk6qStXSJ19QkZSf3jKRFwvZLXn9vdf5YEramfzrkW3T8W7DPipHZ3qxzwGTwXeXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MkqnPPBScbHcR5kf8qE6qhoBFj4fynkPJF6Y8LAq5K83oCL2Bcxq3WV2wu25Br1ZCf6wKVgtJpuq6ScHrrqTrx5",
  "key1": "3JnvWXzdh5ENoaEoAK3bFrcGLvKfPmBSXF3N1PkBbpxQfa3TqGNSLpWmgi5uJyvvGM7hNGLVPM2izGprSioy2oqt",
  "key2": "47CDNuK2XMCnyHUWDaLoofrjUxiDE6Snkr6XUCTrC1uNmBczXm9obBf5dUmWpoPijmRrQMvCxdbehoMvPMUvGMZW",
  "key3": "2v5LLQcHBxiz3Gp2iNUnrCokgRJLhWPbUuLTmkiDdhLdDQKHxWAge3u33ZXswzd7hYNxZwT7yEKs8C1aHgVL6UeA",
  "key4": "3hRg1cZFWG26dM8c3J6LWQBu3LkGwGsP4oD4cp5Nc8beR5QEvkXC6Um7QzAjDxnqbSgsvTwANfGFoXVsx2okSCnR",
  "key5": "5GAUeuGyY786b379ZuBKcdHfqEjPFEGFLWnTqJ8EQqRtdLqe9ZF5ATjSwPNMa2jzoYUobjXuBRTCKrH5AqJYocjk",
  "key6": "4EQXzJQufAdzrPefC7PTNG4JrWsn1sMT5ucqVBYS2mwuFBUUaXsNigiqdj1fBea5fFJsJjxqQy367XjnveZigK5b",
  "key7": "3wUYLentc3rte4REwN6FQ5bxm9HWFnsLoAdsaAAieo58oCRvHpMWxRtDHgUFrHWn7HgYZZkZAoVE3TXzkqQZrcj1",
  "key8": "2fo97h3ZkvFESwp3w5FheBU1y1pxFDVr5gpnxTMHg3XaTX9Wmy4pvBEDkijrxszu4yzLL6d8UfNheHrikBWdWLWq",
  "key9": "47W6AfwfWuzS4nizWthcup9Xd7euCYTxZ7y2A2VNzMMTuYoSCJ5732tJKBmtsfDyNyELQQd38tAJm4rGjGRKZwe5",
  "key10": "4sjJs6GVVFirfDiXB33DiWaZFay8iX5Fey5tLUrYc7LQoiLKeGSzhHvLtpJs5fT7rQ2dcr7CimgkTZ4xvXvK93zv",
  "key11": "57WcDR1ynScSy3Q8bkXhZd5Xas1JdotN67BEwpw9DZ4uMh7VShgkQaytrfqBQ5QvFdHvUrPDQqGPekPzWCPqhhYV",
  "key12": "3yEE6YaHvT34TkaWCJj1eApEzqyoa24BugVHYDGVFA82eQ3zXdsocof74pP3PH1GAEuJKDRsTq46kNGpz73o9Nfa",
  "key13": "5LCsW2UmbW78e3KmZL86Pidr7dxcKtgLv8YVS3M4fmwU4rnSsf1JYqiBsPP9G5JhEAu9VGtkhJTMDkVAAMyPTd6N",
  "key14": "4UyuctwGkXzqffQysrXvvvpUNGgdgUa4mZs3uUnnur18MTPvWNgtvVMwcWn3a4Hb4C4kkyB7v1qJid3KJ2hazXhg",
  "key15": "3eDrYxtX75onRh2FvSycb8xQiK45oXeUQFJztDcPDs6A3ThFP3BraKJyuhNnqN5sqwpfKyYuJD34vKBaY7A5qK8d",
  "key16": "XxjW33wZD7qEwcX9eji1YdA36gmzuNBbLDoQehUaKZwfMzsfVW2MoXCAbHs3wLpBojqapBoxDQEBYBi6ZoL7RYX",
  "key17": "5rJ1dBudAF1CtiGtzijgBtvXm7yQwpe2s6NeDPwZeEvEdDAw1UMnK2r3a2dX72qr95n3NqQb6NCNGAaLinKwwWC9",
  "key18": "3ukcNk71TVk4Bi3bwwS82rsBwkQNMCE7a4GnnyZVCYGi2HRGQWtq6reCLMdueDWqviYum5fCfdEUDE72WRvFtR1V",
  "key19": "4tqrFvJKD5JFvT4twn3pTC8CCUXWYgisMbZb3gcguDRBsth857JLRD7Wo6Khv711Xee2ZpxFZ9PKoPfKkQe9kdeB",
  "key20": "4g4PQ1rQbJdpW2vShxUzmwXuqKf9agpk9pXBGbFXzxLrAZwmzfNH6NzjahrpPAUQQeTEV66xbHorTGquNDc1wcnA",
  "key21": "3vdKit4DvKcENuBCMgkwTt5DgSoMyoR9FUSWHSEpA7TMpfuZUan5iAQD7T6jrxwagHFzgweHCpsCwLWGjuBFmwzr",
  "key22": "2HqYwyGpdxSdxgrztTfxTfXvvVTsQXgHPuUtrKr3xx9PmUVMtriv54zsv22Xkrf3JAGKLZV2cbhJZmJx1dijivdp",
  "key23": "3tovU76wst55JJZMB1j9GtwuaowiHPHhRzCi4woJFsKySyp3qb1ihsw1Mw1wX5K7SBeGTTtPEgwGo889xv7fJKHq",
  "key24": "wepK7WNFTCf3WM6NDcwomirDkx5KnHykREQFfkMVzbD4KiNWUCp7VerVWdqMRohjfrnHqGgMwcydatoFksYUyZg",
  "key25": "u2GKBNNcJozuKoxAfhtVHEF7TFp5gujRoWKJBwWoi2HoShUAnjSRbkfA11bD5YDX9VPFCepjdodVKQ54b342WYQ",
  "key26": "cgdgyAaLbskuLd2pQT7KvY9sSkRzZLXJMqyWPwAT5qdscFWLkNHm9QrxqCg4ixBsK6cpPvkFiLVrygTp5srpA8w",
  "key27": "2TJJsZSwCgSoe7FXit9Lzxx82tWthLDxqNtBLLeVDdED2cQjLzacuRTjfmhnkShfu2CZ2FixbV186gcG47JX1ojH",
  "key28": "3kNHhJ5RRmAdPqZv1vcDbRQWW5SdiffT8yrcm24Pmr9mQ1TNZevebdgSmC4oZa42un9XTUJNc64uEqtJ5uDp3HLc",
  "key29": "4J6CaysF81xL6fhVqv559m9Gxi718iJ85mHHA1BX4QTvbKfr6hc4b8dJhr4zdEDnFzB9h1WKnenQnneLHkstfqSf",
  "key30": "3svMh1hw1FHRcJEGtmS8P3ZBPtDJWzwn9wTDN6XXVSutGKbr3tmrTjgSf1EEetYHBQiLP3ws5aZ941KLCkM1hK5C",
  "key31": "3Hccb9RmCk3TjnZUWTNtL21zAKbK5HCWM9Cuk5JctBMVh5TRYcWAteSvwjLjNC8MQDkY8MGJVMuURk7kFJAawqYC",
  "key32": "owANKSbwLZecB5vr2jV1FQ1V4N9tZ4cNiTFoqqujSHdYL7uzMDeFKaGYFqkAYtGCGhakYmuEmDoe55tfaCEWhXG",
  "key33": "5RfYi78k6sLMEELeXvFLiGwvPLtVUjiqD2NXWpi5xR9YTNFV3FkEE299W4f4vaHJQRwuUzMwbVdVoZzjXTg9Z7JB",
  "key34": "2oBgU7yJo3RwPB1m6YY35tkmB2fsJey8KF939TCFpvrx7SFm88mWYEXuhoVYSfRbu9sgjeYuNwqVrmxF7BgL8u4m",
  "key35": "379E9tdwCFxo2omo916Dkyti1SUQe5cM5Jz3eW56t6x5DHsctAtsFRVm7bbuh6AvJb92WTiLUPDjPzd8yUPL8mmG"
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
