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
    "4tG4vpKxPwrkHkGivf7aYhM2NBkH6icmScxWgoQTi6EVW61YUbUum4u5m3k35mEt4nPxoi8nFWBM8WVaKwjfaUbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "161VHUBMaJ2RePr3PFWLQda3JhTUEf1pymbTPxsW52HDmP7ei9No7L2Y1hSYDSZe6dLeJ9d7uUsu7cWF4aqmCJi",
  "key1": "5oxSdC9Eywe2SyqJQT1CEon6W7R5EP4CXwjowkwA7iPUcLRepuiQXHfMqxkj6wFXREZgt1qkuE9pVTGSQMADoQVA",
  "key2": "5YGHBLcCNN3CTos1P4g2g87r8ikGHT9SdHBD7EeMedf418T7avio2GPRhgdCgvPYNhvYTN9MX5LXAhqr7J2jevLW",
  "key3": "2kCgWpsFyWpUmaP47442ehpLwu63kh4qRH9buYBvU9m8kYvG4QmgTEVELwcSiiU9beLiPEN6vtAtAcYyCDjyxdc1",
  "key4": "3RxbS1Dsj6VBJ5houxKWwqnPu5PMWsfPTBtRsP1t7SDaFjAuUGYQP8D66H6zdkQa1i5KHsixdAsNvjRxZkZZws4y",
  "key5": "3aAqo85UxFVdvjbE8qMyKeecLt39eAkbbCm68ibGfp5QFAabucsuh7d4tACytc3GLgWxgTY2GkahsTsjSK6RAGHP",
  "key6": "27Pbrc4474TpCeCkCP6ep24ivkrzaHAgNthHuk4ipFnGHLFN9sciX6mN5iGfkUMA6krP951VuUskWHajiVzsfjVn",
  "key7": "24TMMYsSR7CPT5HY6EE6Lb3WZd5JUCekAhdsCRVx1EiyoBAKezaMUBJ7SeSzyvNdLH61euoLr6NuMKvtCHo5ie2a",
  "key8": "2axCuXXpNbiyvah6tFjdmCZskHNkUPkQiNmAQDbq1nbUyhqqRUpG71Pzym9J7vatp4fS2cxBAnyx7LqypBiAhZ3c",
  "key9": "3XV4iLuru7VUbhzsdgzrwYMMLY52r6PVeosnZZYBCjTYdNt2BhFbpZ55ZmLbEqAtuqQHeRd8mMWF3xFwEJKyJ1vC",
  "key10": "5e5JBtdEuiRxJ68TEt7fFsSHhv6C9F1PkvMzwruGwUstk56DgWVSo3qiwDHDo4FfZmwaCSKbCK2gJy7nbXpMwaaY",
  "key11": "ro42xRGMZZQ3veE1FPBtWdfSgReKkS58VDQpMe5W2hs87DZ4HEAqqpebMd6JRxLgWx4ei4mAqHMc1ogzEFJwnSt",
  "key12": "26sNXfp88Ks7f8yTXXPu4tFM5u1BmqG1Gm9rsJ9wVFMHYt1MZRPDidnVKeD6Ymy9arepfWqyZAEAnNpqYcVGtBqr",
  "key13": "hPQE96RmqTXniYrm2Tzyds9XBS1cFWk214Ps2EzYy92H7yUZYqttL5VA3xosJyh7E6XzBUTcMbeJKW889cAFZFN",
  "key14": "4dobnnMG79xyzwFc9Hwvn1k8iPinkQWauHfb9LnXxwvqSsJc2VVVoomMesa7phMdnLx41tBMXcFLLMukbfyaTWC9",
  "key15": "5NYEmZ4RTxqhVfvG4kZZVXhjH2V9hDt2xt97uddQzb3YRSv1Knx6cN2RS4md2TFNMbF7cJtz3k2XAbsptGkhJfwE",
  "key16": "2dNwdyK1u2wsgx3o6MpDCmPY2UiDfGd75iw8KFAg3eRHCT3NziYsLddztre4jUVPNXWuHjmRzK6wer9h5GUcf9kx",
  "key17": "5vAmSYFCa2YtfSuWBdY1QHFwz18N2Hot9MZhyZPcKQCxBn3yo45u7PfJ9TPxjLoorFBbph13JoRuRBCgUxE8VXg8",
  "key18": "5mBJfm9ftfu7ydA8gyzvrwJA9GYDLr3vRRpTMHQR8xkuAUorWp4ZKgMGYXxa88WP7bYJDLbL1rUskG5hMncKuBA",
  "key19": "2NZnvfFcP88qQs5ndqqR9VKexFjquxiSmssHHxPy7wfKGuHmTEcg9JaZGpmzDvkEjzQUS6E13XH9DVodLHgScBoC",
  "key20": "5KU3s6ZPMW4MR6Zff8ao8ULqSArgxkYSWb2k9SUSjwkXPp7r3GE2dxSGWf1CtDT5iQnGw6utJJo8daiXYBVytE4T",
  "key21": "41PJQksZnpZxKUDxQj7whciiJWn8uoUnwyKdq1SZRY8vw3oKkhbcQmck3Dk2Uoh6ChdXZYwWKNk3xaoY3cev9Kjp",
  "key22": "3QHxDmqLcUtsHgWpsrvuNjkCdEWEghjf9C1g62isUr1bn1Kx8JKWRX5EYv1hdm5uhU8qrEEC7GRnjRdrCyyL81GL",
  "key23": "2XofezYsPkMZYQ2cLQ3EcEgNzLfqWZrckMAk6fVRqX826ksxp7nfVrevQwEZTMhWCkeUwJsXxTUPZiY4su1gQDLP",
  "key24": "uDipNrLprErAawjbGXhj1RnFRemhY8dzLcUJLtny5XZewBKGwFbrnjnNdPxJXJQwTBTwpvx19nkbgrnGny5Nos7",
  "key25": "4JnmtesKgTJfC9L7SwjM8GRBj7bdgB9cYAAGKUzgPYGHC7VCrwT2nqw9xKyybe7iwJyBFnoggwxJLkWhYhp528Wk",
  "key26": "3gwB9QMCdE8xAvrZSd4DiE44XQ4FfR2g5ztrwoSeTwKYeJZWC9wAhrrn7zXNFEmJ3ydyjtQ7aBc5QpJ74X3zokJ4",
  "key27": "zWqE3G4372QseMyX5PbWDs1e8bbmpeByLw7DV5dxcu1K7nHp1jmgtbwpxmmNq5aVW7JCzxm8eJgVuQXy31ppiYU",
  "key28": "Wb6DMGDqhNekPMeLF9AXBqpAUgcwiVBq7HzKWmXjCkFaoZELpRmme3oZGjZc3bomaVbWPFSJpnNdh84TVw8GZAK",
  "key29": "E72H3HG3ECBuN7jbjphd3hbxkG3Dng2F72uXaZU8Ny8w9FiKUdQPZSY9P7n56CZeFaaAu2sLtJCgWRTUfWDx1BD",
  "key30": "5J6dN1wszS1RKjSKnp7FUp1e3M7fsXsZR8VpX1HWA1wMFEJX63hSSe5QcXiJpdUgiebT3CibuTii2HaMQZ7pnzvh",
  "key31": "4ESMYesZBH7hC3XTsMdJ9q9ZE4RgCP1Jar9E74D2gdpSL1WRyprHE7hP1YFpTacpL7KiRbYitocCPS7ecTMWhiVa",
  "key32": "2Mwtd9QQ1E1NKPBY7BJUDuefegyK74vnPkCsis5LfMjyaGFAsWXU6ZaKfBzGoCCML1hW3aEoSANdaVeRCYgp63BG",
  "key33": "2L8SbExtb3PmyXUUp64aBBSECojcau9mpQxaqhmNrSau1eWB2yCe1h79sBxvmoz4KW9LGQfh7qF1gAqGhvRtN7gp"
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
