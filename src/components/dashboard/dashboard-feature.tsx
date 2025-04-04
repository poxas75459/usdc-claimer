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
    "39znf71EzvtF2psukVt3syYR2CG3fuxaWxpcb6pjqD6im8Qup7ECyxk2UU7L3WrsHAhP7AjcVfJRJedShrAYTykY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WLcbVY2qLPGuAiNez56SvqrYg61PWSRMY1PPxueqrhoQZJYekz7SgF5o2uX3yaq1ZkAPNwieLwMFoLqYYCThqEj",
  "key1": "SEzLzyhPk9Zbj1gcWrupMoXVRRFZWMrjYatHJxgnXN6ftXuReAjXyyHsyr8XB7H7uFWmc6fpvVLJDbc8YDFcHJG",
  "key2": "355ij9VgT83FA46dtHHR7pi9pjEPj4aLpJkapMSgQWNkQXKJoDkKYSpt37pbuaf2kG4iNNjnJYZDtJ2GYyH1sjRs",
  "key3": "4pgy3bUCvBHxCZQbNZd55S8TR5YEyhCspozbUWNoRqejg1MXnQLsi44cw5VQawkMg5khvbQQdVEQ3Mupgyjpq569",
  "key4": "3U4qdTQvYEz4N9TGJPxyNXZ1DAj5GAxM3XAUAg239e2pNF9Xo86dejSZBgN6QCKko2Fo8C2L74KtgjnzLvhLTJwR",
  "key5": "29Tfa8vDwy7eVjwAFwMHRMEiauM9562rSFesnvWWM1tCTKt6Z3heiBBNwGRmEr1mFKcXmCRNRFx5hqvKVBMD646t",
  "key6": "5gwHrc7Sd8dbmE8AFBFFS4GVrtPHAuHVitWozDsCcXR4wxTcZwaFxdZBU155DVGBM5k2eHovurHy5snthtaTjKFY",
  "key7": "4nCHWXUgbFbQ7BBL3hLRHrsRBNZazKaS4Fht6CfZbyczEZvEA4k2bU97djo1ce4Ag8Q2DnmYAkSRTZv5GW6CpqjW",
  "key8": "3zqNbDQG9XcDxHWJoyg13fLiZ28CF3eop7rXiGMBhEF9oDR4QDoVDzPJJixBrYUzFPZ9CmGRDGNrka7wuiUMahvN",
  "key9": "2aFwCqpUVVqgAZuz4TupqcDsgsFiUzv3JuHXmLpys2bpcD99oTAzWJSrqkSzLYxGAAYnDHJL6yuKJvyd1RB1UbmJ",
  "key10": "3wV7bGfuQzVNfMPUGmckppe629kY1mzmDLvrddNCD42SJGKr7CRTJj9m5KPWmog23AsUHvkW6nLqFVsBP5sEB7gU",
  "key11": "f5Fw7h2TQ5QMzSbjvmWkrWyciG6y71EpkFSCKNTM62THfMN1jiFogEAL8wcKHMRvYriabDiBMmazXTX98S8mQu6",
  "key12": "2NmK8vbNY6d9WKxMux9w1NzSHGY7aS8kTceDwRxJLu8S1CQW2wRZV8WXStw9y9x6DJT7hrnrLoKufNXLXxzKKXuf",
  "key13": "yQ6M1GAFf81sdfcs2xz8Y2vPREzbtYVhg6vPj3yptdcuS5C6sGQEM8fNZcYhVJfGzTaNC5vr2pzzQ99qJGXF5Kx",
  "key14": "5cx4YT9jP8hM6fBQrskU1yKdYiU2oq5B1DaL8yiHtNBh5wjqxFGoNkFhpKauVkk3NwU6Yi1yvUMRvoeNfG47Xm1x",
  "key15": "5a6xT1zHonZnu67MCyd5PsbJmGutJ2VeJtpTFnmfXGfvyURffZHcb6NtHcauhQfppEEUGf8Kxu2AgAuJLe1fmLg1",
  "key16": "KhFXjbYZZRAcDEpuxnAmc7P7pqH6C1qkgUnL4cEdpHR2P1ZXWSRA1t3QnjxCpvhJrnNofoAqAJPZ49CSH8SGHw1",
  "key17": "4yM1yzbwwKECWwBrcSG2dWWCC26A8xnqUQTdhh3KrsPBmj3NB2iSr2AEbakRDdyBC2WYUV4SFyejkcEcZFwUjAFL",
  "key18": "Q3zDK2tinVuruhdp7yNzk48Uo2ggCvWkBEuYfGE4Ywjf3tmARa3oA9NXAV6bVMPhBcvBiTvJaHK7Y1KszTLN8WE",
  "key19": "5CUw5jVetJyyzfjKN94gWgbeM1hTp3P7DFEjidwiWvLVsFpfaG6GM4SiRQK4S1Yt81kmAGTLv9LcUt4pqrDTfUgS",
  "key20": "22AnTmxs7SQNNZAjuAW95JSKhRPd8m9RqrnxL7Zzn46PfajiXSpxCF7PMTRpDiuy7tfhLWZ9yaD15XgwUTBifYd6",
  "key21": "2vsmYTcPDYVHAL8LkimPruNoaUoxAQ1mCVfr7eYv9rWvafUZeyYg7bvLKCzSMn1VjG4pqQdEn8jgfLXq5dnTbpFu",
  "key22": "5KVTVAUputLQ3Gy4ksNgTRUsdMoeRxCxbvGhMD6w8kSCpWaDUjJAghyjKQoAbPbwF8fPBF6SLUw5dUoQXKeK6oNW",
  "key23": "5ZhLAB1fopVjce8RJSyrUZfAMSM9ohdzRZkSNm1C74KZCyFesrdhxUmZ1yZ3gNH1YaFJZ3jQPiiEndPbj2nWgVKV",
  "key24": "2gVt3iTgtkWNNr4mq1EE57QcBeSjVR78YqkN4cT8CxEH4xjJJ4j4s5Pb19CxUfoe7m1Y6vbqHcZiWQe2VHB8BKxk",
  "key25": "61J2cHkT5fCWe2WMVHYkXUvVN1jYpFcDPdkCm5GzWh47DxspHcWv6eoLRs7f8ZAjFfyvDs266dinvgv4oBozzZwa",
  "key26": "4vCfLQXekbMHo1nvj4mfAzPY9To6wotr84QoPioWzcQrHcHpy3YmiECBeQM2Dwgrp6ykLc3W9mieqRzSJ6QzMXNb",
  "key27": "3xwKZndWcDxtTwMSzp2hr6oxhw613oLddqW1g1wtH1X5JWCMfhzWVUMdRMzSx5b2Twymnh9divKdssGvtME48Hvf",
  "key28": "3CTa4myP4UFz43qBGjFbuxKgQM253cUtv1L4p3sVV9cX5bUDaxT4R2wFqnkCP3YXtKdPvKALad1XKPbVzUG79vyk",
  "key29": "4F3XFDqBttoU87noHSU3XNQStPH1jYX5diWVhJxHpp6mksZn4DC7kLyPvwta1gf9QSYo96TFocHMtXREdJ46qzAU",
  "key30": "fg8gdAfi5q1CMNoL8iGTgEq8cVmcJYmLcAJq6fxN7mmvr7CgZTYFjfGQphrTZvGAbcn9J8zSYUQwPtNyZ6rTB97",
  "key31": "5mcazV2CAzFupJ2LrdR9dYn3PX71ww774NbNJLPiwHGiFTgnHSJcE4peTvLnxUEgSHCpqmYd1VwiZAK6vx8QmnA9",
  "key32": "VB2vVtrQScPa7jzWHn1EUhB9d4PnqCo4HxTQXUjjNZ6euMVqtYJKTymkGLgoAqx1HxDBDdeX9rCMXZNePGHGaBM",
  "key33": "5yq5EDCwsKGtmeNgTD1gnbPmD9AxnpGnR4uCiuT8f1Y2F6bDQmkwakBjpedwmpHPhtiYcneaRR4iSXBeJw3M61o9",
  "key34": "55sJwcQY3EwuSDwU7DAfeJYzDkTejutVVK8c1m6Sb9mwy44ti3SYQgXTdaEfxL8AW1X9LqAHPCLSdUDpj55x36zK",
  "key35": "52SaJyz5DhFPaFfnPqFUC1737CEt1s6G1FYM2pVLiSLKM6Qt3WCZ3F2uhQtGE1GMQiDReWzp8if4fh6rMLo2Y1rR",
  "key36": "5ZKatG4gobsERqDeVUHQsCQboD8EfYJQ5KBxdq81er4UPBBFWkgRaTxU3GDftH8hF6PC6V3gRAVdpVzfR4NjDkMm",
  "key37": "4bmS4wMvgZetxjFoRXbFDqnpJHY2tU8XbxDPSTf5phLL6MpdJH9PcPXk7stDvnPjPX7H9qvzFU9Fd6sFRmN2nB3y"
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
