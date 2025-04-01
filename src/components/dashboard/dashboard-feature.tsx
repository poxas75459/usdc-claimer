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
    "1PvkihUzEkVZgABe8jFMnXwjuobuW9N3HzKjAWZUeKcxQPYm5otLBFknPLeUyaqFYAMokMAEVJsioX2ZKx1sGTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MgPM8HHQuYvmQzvCejd1Y6G823vfTvVrYw6X2rRXhixtAFQqY4PLHVa9FyhsQCfriX6GXD4v6ixiXDeWJAgFiy",
  "key1": "4iETVP5AgBu8UjtTc2APpcfztwMSYBuu2LusN5gDiSPzva2wY3QAYks4FisfVvYyWBdkdDauadicecqsctPcvPuX",
  "key2": "3MS9Ai6bmvbBfXqFiSnPuM4NRmfSZv8VJoyCDN4fzwihfcjkrCuPoBwtECeNuwaCXfSQ15CzonFZtQDY2n9xuz4W",
  "key3": "4ZrGVLf4rpkCFmUiVoEdGkF9zY5AtgEv9VdzMhbS8j9ipRjXfYGhenAuT7cM5YCX9EGExwLsPuYcZnoGGWRFKMK9",
  "key4": "5vGoDbDBrRgEVPhJXF1kVLUvSjgQcHr5y5aPK1VjWaSyHTSDuYmpWT2TQ1x8M3wQaKzm2rN3r2iix2MT5fngUVmd",
  "key5": "3kN3xY76hUAah12XzSu9mYg1n7yboCv5ekaKXcKHB62SdsmrQ1GNpbZRLUC1FEJoNUfqzRf8zR9GXsV3hgUhxCDE",
  "key6": "2XUpgWRg6yjKaZLVAu2aWsYDqkwGZ84d5Nkc9zsvyWZ9b4aASJK1MPRi8fG2zGkveqbVJq9Gpw8qJ7HGFcKQc7CS",
  "key7": "5oqxfV4dgBja7hogMu5keUr9ZNbLmjR8TEyFnHvVt2mMWKnLjX7nHwY4yzFbbYJMQbS2NrZC5XKUJrQao6wXMtxn",
  "key8": "4Bz9paXK7yurnzsqKnddDNPy3Z17QwHNWeyCHwSqZ5Xfkpp1KM2ZypcQAgJT1SNcvSj4u3AzRB5mq85AQKVw8k7K",
  "key9": "1qcGm1uEsQJUNHEBThoSdL8NLAALxC3Zpy6dct3R7bbAwENtrAGiDnuqtRMA5JaNL3jhPexBwRjTohGeCiPQuSe",
  "key10": "3FTACsJ3A4i2MCmQLGW1sLFzAk3yhoKLm4nMa9AXx4U8g6stSnt5PVGs1aNnFb9JfoRTV9hM28URi3AEWcyfvDMF",
  "key11": "5iMEN9uVCjexnzJ13zeYEeaVgVvzchKFVkwkejTUccMbGWU21RBTcw54zJjh2Z29EazD5QwTWSPV4a5cB55dpVE",
  "key12": "2cqUvyqTj37aAVgom38DtDqaSvCLJgbTaqbWoJbKoQwzpW9jFF5wAApoHo9c1oqszUYfFJVitPjmrqmCNiyunwjn",
  "key13": "2HavjuHKn1LA4gronNxM3mD5KYwkMRi9Ain5GPnYfa6XRqVY93KFiS3X6HjuWTteARg5Qn6fRBDhqta1YCBmV15k",
  "key14": "J5vjDF6JTcEs9cw4btJWE1MEw6jzZ2SaihdJMWKhEaf4XdiQ77G9nszfYxJfWHWjUjZieie1mXqsL61ZBegwwzy",
  "key15": "4xYYoDLcZmp6opzk3bLcCke7ECr9cwr1pcCfUwH4fpzhjX14YGDjMUitDaqdzuQ4v7TqxKeSttMXPvim8wAmp6ka",
  "key16": "21e43aXgP33yPWonaaZqLStgkmmjd44nBYKCjnZfRtcz614srspQprReUSCr2nnwMWuUtsics5Kyp8sh7pVj1aP2",
  "key17": "oXiNcjC91v6cQnQCz1ehGmtWQ4PJW8VoYP7ji8TuDjrmXJZQVoa2ymVDUx5FoSaHbw6YrtmNsoLYjwNCdZ5Pavr",
  "key18": "ZTv2M31uSEGnwEa5mNMFSBuoNvTThtPyVNt4GXmDcsnajm2TD8BeWeTMVcSR8FsPRgjmqJ3bvtm4f7SsVoQzNwW",
  "key19": "54pD7TP7Q4xcZ29tM4oCEyBNowb7zpoSoVatXwrQg8PamSyUxCmyvntwKa3xLm9aP6RGGJmNJUj5YfjF2q9Lq89i",
  "key20": "59xAs3XZVxYmsavKLUcyLJ5X9jNxwV5M3GqnZcdSL17HZ2bsqEzRN3Tj3CdYwtLtkmbWactUyJr2MsYQRAXGVbrq",
  "key21": "5s9QaGZAg7mZnCT5zLXfUdAsyCxegH3MLvqSMP3mjhsQNWXE462HLMsK36GvMS6S722rGQYhBGUXrVYXAcvStotc",
  "key22": "2u6J6X39EXx4z3ez4QzyVoHmtWW8CrEa4X3bxi9YnSJwN1ykcCkwrQC4g9C7P4vbGu3nQKkBTpVP3ohLqfnhSJ4V",
  "key23": "3WxBx829jb2BgBqAETtL7dH6zPgDCUv1kJYrYuRqa4uq747Uyp4RNDu5XSxAXYvp2tZNYH4k4wc6KdijrhbVQhpn",
  "key24": "2oHnSqrTXKZC6MKXj3j5x72BaN5JAAZyje8LS3kjvXWVS5g4eH9SmkfVtxL8TJ3CgB9n3tP85bDw4cAaxR5sE3o4",
  "key25": "43SmmhVyXh5qeViH3PhcTxuMfzmmr8ofriXovazN5TvkX1UPvwciF1mBg1hrFgFLG6a5z277PibeKb8HXmwMjMUx",
  "key26": "4zXG2jRaPTbn5n2Ei8xbSiA63J9uEqG5RimBQZmB5BqiFYCCK8Qx8SrAhAwi4erGpyWR13UCv7YgwbZ3871vaZso",
  "key27": "2gZTtVibjeL3uBSP5jszwBVXMMoP6mAVGpcGEx6Z4mYu83tvYri4KPACqSP2HxGF15j6VRzCJfxdsKw21Dc7C8Jq",
  "key28": "2MiGn3vhTSV4c4cFkWdcU47hG7BzpGBgdg8HFambPvQEaevNf7G231EEL7A76MaMQa8GE9ck8tv1SQfj6Ct29QLq",
  "key29": "55dNRsSBevdCdzhdWU9foh4oaPsF4rF4z9qDsDAaxGvgN3qfAfsMymEqpfct6dhAarJBT67Fkv3Ni3SNN5DKevSy",
  "key30": "22MMkzm2tMxoBRP4Nz4KE8efBpmHs4UUYWRK39vhZwsxeaBLNV5ouQ9yjT9iHjqg4HujVL7P98xLGLePR6pquM97",
  "key31": "52vJZCQox4D19TrkVtVRS4r9KdVTJwWH2Ti9YmDLMFjyLhwQNEnWaYzAYJBwowo5NfRzfd4brs5cjGN5ZsVzyhUg",
  "key32": "3uJMVwfKNNRqSn3FzyiTeCReZJ6TPuAvRSjx25PU182GYqbAaAEtcSEQd8Hjv5vAaX47XBn2wnbQvFCDMt3iWjC3",
  "key33": "5Yaird3jMGL62LuV5ckmmKtwwE7XTymBD5dgf15DeczBi8gYVxwpV2XPv5YTtTV2NUkrPguoRsgNfdkVmBXye7d",
  "key34": "g114yZuHQqYk7wMgvaA7Fdc6rTGfYDEf77tF9PWjghUz9ri8XiM7quVsFWv4bpsQwY7ju65Z9KKN8bqQiTEwvQY",
  "key35": "4sGkwKsmM8WmcdZAZ22iRTv2TvojaMv5mGkxXXD2LH9xXwRByJvjQnP7yojsavmWm3FG1wz84WEf9JWy1rJyPovN",
  "key36": "3a15xShH1GQjAjwCNsGk4JvfM58kzvMbhsX3Z1NSqd2WC8QYYWhxDUEYWCj4dz17JNWjZ7TLjv3AoTKsAXKZXk71",
  "key37": "4AFD8r8bhEowWbJXocQVMsRW9yGnpp6BgvGM8NimpmApEdJZNMx4s9gJqZzwW6oJ5FvuZg8yCaz4RT7zYPnuYZUT",
  "key38": "62j1gpctN4vHKz59YcnPYuvEGMaKhAU9VAX5FTiUAULxE4Y2j5AJ8K8He1G1rkzBib2xZEJt13BAXcp3MuJayRgf",
  "key39": "5sSeXhcwHdNzKmzXT9dZqPJuVWWTfgXuPSGAj4GiraESkzstzAi4jFiJduAm9kwYQHgiCwiGmj5D87KtSvZrSN3A",
  "key40": "2x3He495Aif3Uzdkg96APJfmmZarEUAothu9X1gEY6AEJRHbhr29TvPrW8QmhE7u6t57SBkBhMe1RfkopNxU1MT8",
  "key41": "3FJJ8StBp6s1UPLD8SFgKXSvztGeZ8zqkbUGTdk7fD5JsBv2kdRqCBbAXE9NhssRWruebRmptefdYS3kgBZ1aQSM",
  "key42": "2KpeG8qMSFgWPvdWx2UmREKAraD43tPfEAjG8mZD2ruDmAdHAKUD5Gp5t7nTxsY2Zh6ENd3iqSaaT7sk393nNbNC",
  "key43": "3mzBTbHqtKgTe1T4ygVpwgXFVRE9jXsmSfwGhcurWwXDXvy4qo7ugqbVs9TpDaSKs9HchR5PnEePmKBR7RWRybVd"
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
