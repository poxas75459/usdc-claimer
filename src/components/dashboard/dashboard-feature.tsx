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
    "4MQj3bGu6Ym7MsCjekNUPVmYjz5pitj9XSRq1oXrrnymxv8PZLuaxNuAGyS9Umso6hFh36ZgrEjFHuSHzXHuFepp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Qeu1iirwCtcFY2766WQEjewuv9stDB7vGZ4XQk61PeN4ouEdVSGgpeUJRChELwJ8TZqMQXzAX3R136XTafvYsN",
  "key1": "3ribwznB9rsejhgYGB7KtefYZ3KqD97cj9aX9cp55JnP86x1HdmGoivQPzDB8fmQ239iA2TFs4qRpyF4wXdUWxgH",
  "key2": "5ZweYvZsBRTy4rTbu8qWGrZQBkDDAuWAho6WsrHjrpc5i7NAb3DZwAy7xHWEocFE7XZj1qd8busMBAJFHDdaK4Fx",
  "key3": "2V4PuXz72Lx3qJynFbJJJpCk75MQw41krQwZUXMkPN5EoY3MwDC2RyEBaYk4i5rEY9wDBN8nL6UH4subFasNBWr7",
  "key4": "55uhXMS2BfP5AJKXKGAea7JmLuHjJ5yy9BgLRHZUNJMsDaaiY9WY4i37YkoCgWhAzvGbKHgDBGSco6x7WJe3MQcw",
  "key5": "4rntiWaN8sLELndNtxR7LHfnYg7DLVLrZuaF5rMgPsY9ALucEayqX5fuUxBiFS8gM54gvWLLnB8LQoELm7e8T59g",
  "key6": "2FkXatDmZrAYE5gByenGRemxwog1T9Lts6T32A9HmE2VavvPqdxPndy4EVo4bEnUYvXmj6btEzaZsrfYqpm7eUSZ",
  "key7": "jjjLPUAPVA1JwPGGaiMHtoDseHh3j3dMiFQgarMBUxeDJMsoVNaydhA4sEHQ1Ka4SZgHbcuTTPgyz82ZhVAWTfX",
  "key8": "2mUamFvyVKdk4zYotzxvZT3j8158MT7mraCoCfZ3CxaoKMGxLAdjFNx4rUH9k4Qo7kNbZiHhTqZYS6fe2BSVRt8z",
  "key9": "56N5ghp6aDZeupwSzstfTmpD1mJoQxQr2EfoJUXWc45qqDs6TvS2wLCWYjg5G65dsuip3au9NJvz5dymkodvXT72",
  "key10": "26qs2iC3uAVDyX3ixYUURwVYwC6P3nXGGZyS4BEhiK9aq9aScgFaFxdGpjitjsp9Hhc2V6hunm4UeRTPL9uPBJ7t",
  "key11": "4KNhNkCaqKetKgUX6Z9yaPgtyPcjgBcPMGZFc9F6TTRGUGoSXSyUDypDoJn7cJwXJNHKx2i3AfBTvbMQpmW1LpUL",
  "key12": "2iPQR2omSWbbWnkB2f4gNRKj9U9et6ibgGW2vyAB26rB7etHpAgt9U8LaRwD8YP21ppa1h1pvtmcku4YJkGU82SE",
  "key13": "HPaJGrVzZSVBWm4SMgQHzKA8p1FYbavFXDq7AqgW17oYEYmAwxMSkwTgGmGtN5WSBFRJVZvsbLLGQDC2oVLLUL8",
  "key14": "61p9Ap7ZeuiGWj9DAsc3kBHuZJfp34E7JYoRQQgPK9oQE3M9AnY4vrFgAULhnSZBWDR8pZ61cFvpeZ9tFGsCEXpZ",
  "key15": "4YJXB2RaRbYk6uT7GgGDCS3UwGNLZxFMJTWdYRiFoqHRraBkAeuqXXvyxDMFyFtEJUbY2XUyu2SdgQPwqr1gTyba",
  "key16": "3vLrXATwAcNEdAtsdZG7xtVUoc1vQGsDnFHr4KcGiMwPxZ7CoPWyWiL5i5VLPpWXefv2evBmUa27oTZs9kqNDiaP",
  "key17": "4zGM3Ukd9gudbJpBEb4er9Z31Z6KFUFua5rbcREezuoJySbSQniV87htZNRi4JLdW5Np5zitfVCncNhTXVBvkpES",
  "key18": "4dRsrbvQi4xGgdmur82KxchkhLzho9chgrKV1CnndifUjh3JtwHRqbpjojpac2kixgT31jGpidtFPPuTWEr8YgNJ",
  "key19": "3QT2H3KLhKktHLvg6zak4gySG1yiUo65ZaP1mBd3xNTseoQkwV2MgKmB2L4RhByJRnQBhxQTKCQ9NxMSdLRiVLVw",
  "key20": "4ovsex4StiZzv9RiocFVBEKwFHBnDJnrAwB5S1d2WWujxBY4NrvV5GgU3CpwnZzAeXqh4bg4rMyN4vb2Zxp7nUdF",
  "key21": "3T8TwLsVkHuMNhp6hVLqBwzayV79bedVHobRoPUsXD1DjEXs1XkConDFZLmoSFGMyPi9NXC3x54TqHoTpsFqYqym",
  "key22": "46c2i9AXgFb4Tm7f3c11WqmY2Pj1RNDZXyp2a2JsXBG25dSD38CmU5cA7jLKHJUGpHGzeHBSeFpUXdpLtAsiXT5y",
  "key23": "4pxRXqoz7rpASY1Y2BxoKV7BdqUGNZfkPaBcqwGZE83P6XDiHn4e9B4zHh2C7gYz7YDQyhvjFjT1DZeaYq2jLgFn",
  "key24": "3MkWwTM1YeYubVhvp3w3ziSaYXasozwo7MVWwnM6CqHizs8XS41NknbvvWXuUS8y6Zzsi7TUZtJSxg89gdQ5yEzY",
  "key25": "3uTaPnzQjCvmLMNkir5ys6sp3PJjCtkmbmZ2EeRhQm94CvbNVAvwb8eQ94fBe31xnfzUcVJ28ZXqzkL1xjMivjXJ",
  "key26": "31tnNsaicSCa1vcH4SSA85ovabwf2BDanchbtov7p4NbcANh2GnSqeHcp9WzZ6tieQCxCzxwRZLQfmahucwqPrkN",
  "key27": "3hHETVxoir2LxnGCoLHuV63KifidrYA1BfjxEmsXP1ZMhpKUQEqzwEG2j6iCxdGsXkaG3ATLnSiu782iQdmfu4QK",
  "key28": "PMQhM7bEYBc8FaZjregnF6S59mUrG7y6hPn7pjvcT9NThXo3rtfmjKF4ykPBfuvBzVN9DHM26pNerT9847etMbz"
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
