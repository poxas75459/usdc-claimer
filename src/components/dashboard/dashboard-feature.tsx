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
    "4YBitoinYaTtAHje8qvjNUdEVufgkdXDE29E83QKWmXZnFEEr8YZUrmeRVkEuh24pCabuxkEbKccvBFnkRoM6MdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B1UaTguE6v6FVLeW6S6CBFWAuzSk82SL9M8s94bEBV9wUFrwrzkGxViPnzWajVsu1uKvDGJtvVuoo9fGQ4kuefP",
  "key1": "3qp5MFaRHByjQL6o2PfvJCNdsNaSczJWkHhXLMj2co8mvgdHLkbWQxWjQ28EEC5hyU1cW6ZDXMVAEkm6ji9NtEvG",
  "key2": "3sH75FNy5myEU4sJGgL9tEUwizuJCs1Rpa23MJNdeiBCMJpmQNbXqvw4SQxCm6R6ACJhva7qhQbFZDGcJ4vkHVcE",
  "key3": "3goAdZnjUgw28xnA161e1SQkVryFQxKM2fuTDz7BtxhXwUmaBjHzrM9dv3enVsoUpD21yBGCQiKFzpVFHm36stq",
  "key4": "5cfpo56aCgBSStRp9kd6jXUU8gVtjQyNKGpLjz47wVRFNmGNKK2qQRfS9LXZ6fYVRh8DcohRKUQsEY9KKivKx8Qr",
  "key5": "4jneF6xUvXc3cE6P3zFDEcasXLm532oxD9brvXus9B45JQ1eQimsfD7kQHDK5xRdrLZutBDvyzNDHVDP9dxC8e1f",
  "key6": "3igLX2g5UTxuAZHFEFZg6V5GzJcyvPSfBGSDoxph9BBNA4LZo7dCVkPWUL9ie5XFFL8uRd1QwwVEosctWBuFM6eB",
  "key7": "4osfJhshjNkzLwct8VoNLa3hZ9itRrUaCZbHGtVw78fWuqEc5bt13jb553yTqbuvdK8h3LgRasG3HTLaNrv4T9Vt",
  "key8": "3MR11N9bjePeKh75gwTLb6AGNZeMvfDy71QEo25QkcTuo23paDTqpytZWZMjLQK7NyaNW7isNfSkzCzhP4CRgHa6",
  "key9": "N3hbhdYKVhFNhfL3gkBsfDhdHmU5hdDwgt1J3W5bJ3LyFfhwYStbfcpaN44rw4ZU5f87BJ12cg7Lm6WvFQoHsqX",
  "key10": "5f5JJvsaTJwmFUgDCsXsTjLAoqFw5NqEUDDkoSFLJKtYSDrRBng8D2SBfq3PZ2zvhurJLEpFCh87f15CDrJ6ExSE",
  "key11": "2svCy8KnJj85StkgosJae5iB3AuAk39cYR9kAXMPr35mjpDYvTAFvAAxS5f2awKKrWiRabVJfgf6PMqVBkJKzSXC",
  "key12": "33dm99EFhzGgtVCYY6J8J5vqQ6ZiufjWZMpo3YNyF1KBHgjgBbJRQRDNX512Ur9eXvQp2KxFVmg2ymXnDgTi39Pz",
  "key13": "4VLRaFRuwrDCQDZEjavH8psuqPpz4ToRtVsJjzmoCUs7CbgN29Sn2cJkU29D12cV1SNz6MBhzXQGmfHgwKEiK8PC",
  "key14": "5dW68rGbfNPFWgGC1ZMLfQkPFe4Ex9F9Ts84HsgEkiEGjdPYogj7tGg4PTvKfDfBSpo7LJvxsCbNNN7sPrjzjmZy",
  "key15": "4XzQcyCjF8h5FPDpd3tWfkbpJvbqzr3cHjiUsA5kj85QcpaHNG5iqBz9BYjzM4thuSz4DZBJRD3CRbzxPp5E5eMH",
  "key16": "4vx1Kreot9y3W8GYMhaAacUdBRUMXe9gd48L4WMdauXKLPdAxpQreqDpYC1vvr7soqQFadyx2SCrXwg8x1qr89hm",
  "key17": "4jR9JEMHKmtJvSnfZaj6L72GxT9Srp5waDRajftxX2PTnvntj7pr9Utzvm779xq1nhfE6uisQaFsfcu8xYWiatUz",
  "key18": "4459DGhgm6yDCQHjm6gZ2J52UYv8fFAmZpcxqTUM8rUnon91xsHiqM5MZzzF2HNXXoYCL2Q1v1W4D65GKXwS8teW",
  "key19": "2zkCfLZPBcuBwYBL3N6Lfd5nE2ug1oax8rKt8Woq5CnVt7paaUdqNkQ9ddzx8vRHsZRUrWxY4ZjggaUoyRKEG2Jq",
  "key20": "3bz6pk5Q3HkN6uwTf58g3d2RsSyU9BuyrtF6nMpHfhJjw364EpybTJXkSDDeUjrSCfFcbBWCEZchAU5RQ7dg2oTd",
  "key21": "4rhhaQTh1Riq5KdTugjVX8NDAKNXjtuTrcyL8KhtTUb1p7D5kKM7woJr31wDFwQVB1Yywt98L5jM8GUxXxj2mi3V",
  "key22": "3o7Vak74jGbSr4hZdFPQXCjaYJQgBzybSmWYnq45BsjqpoYDxo1FJZVTUKfvYkqi4mC1yAxqGCnHhhnae5rdMoVJ",
  "key23": "HaW7vUGMVKgHyJGV6yQsFuPm2MewkCWGEMmpyhr85U7SVtHRpRbNmwdhHoFzvSANKwAz51dNfGjRpxNEpQxaAJT",
  "key24": "432Nd34tFGjquDAbFdikNuagtQhaEnihKo1SBXCXE566aCUcd4UVzZ9gV55AywtfcrqYGwkW5yoeJ6Upj8DyprB",
  "key25": "3sHiMpAWxkJMMJywuAQtb6E5S1Dj6bwN9iJq3euqdnrgR8B7jcUyGAMvrgK5Yx1f5o384ksLXoiei3e5SxW9Xh6C",
  "key26": "5mMWnaMdSjRH7BKP59LG4zhT7peHKYvCDjBhAQZefRdxrnYvjqhN3S6wcyVAt9GCWk1nhYPisfXw3XgKfXy3mNT9",
  "key27": "4NmWFwf2aSeWtmt4UThsx3weha9PjzEVr6wSeQFZEeNa7R1MqCgpqf7j4w4yBejbxHqypeNhnpf2waKoj4WyS2PL",
  "key28": "2nZkNztowfsYZfAtbVAhJFU1EqBJH2cxzN2M3nLFBWQJSmNeCJr76cPfWJdPBdruovzAYpzG4xMChMSPdUiAbYD",
  "key29": "5kQZHQJdSAfp3MYitMr7sJYWVDSxTVv3rCzXJwetceZtqUBdtwvEjruR9QdQpxPEVsqg2EDoG3KC8MmVXYs28w3f",
  "key30": "5SLxuwLBfBnVf4gCys3ric1T2H382eDdNXUPXajegA9doJvpE2rtqWpwj46VhnQHYBwh5csvQrbrNFCtr9gjtFa6",
  "key31": "tBHHHg6YXUVQUcn7uxB3iXJVR9z9EjXZzRJqpBM81vYyCzSriZVzeFMJAaUYxkNc61Hf2uAkug8H4sR8vkYDvbf",
  "key32": "29m4DxknUEMtAMudTntoAeBnHP67WYNVmJfKpuHtit4d6NvSpeNkvgFCQc9p2MZooRguK31Y4y4jDd7P2DwHopPq",
  "key33": "3qDBFvQNC3UH9zrMVsVq1NuHuKmuhJkcK5V85kaVwGUkjvEipDWBrgjXt9ciMdnZddpfum9AJE7qvmtPRRbcNE6m",
  "key34": "3k9cw3cKMgfUPYdZzxB4k6xVSFcJsERZ2usoeY1AK7uyC7uz3ofHxYMK4MgRQEWc7PVrayDe9Rty8u2WvYkHtToB",
  "key35": "2NV9Xmvj2xuyyWW66nNPf1F8Tqi4oKyEdTeKUibB7WwKCYda3V8NL1bZ6LwrK4CSkaiV7DYoR53nndqDVM1x9pGi",
  "key36": "2cqAfNrWk3Zzm6tskhjV36opVAjmndjcSEdSbTjYPx1wrhYPK7bkVgtuTFqTVemvyvnf3zYfH2g9rSFF2KRxg8Y",
  "key37": "22GgTx6Tsg2SpnbTCsionUVJXAKFAUqRBBfkt6u4wKT4rqgbAPdFxYVRb58maqVhuLJsaAtrVhH8mfVpEL7kecYa",
  "key38": "5zjZRmSEMWrrbtMaKpB1jjgz2UJKBFoGvrQk1jEc2PsCfsvWxeiS2gwDkf1rwAB2ikHpyHGQ5SgVbCzviRK9ko5j",
  "key39": "EWKxBTKSD998xYsVPthDz9ynNstds67zbwnq7uPk1G4o82MqfQb8h67qm2zNr8ZRBnjxkyGm5VxEqKy43xu2Eqp",
  "key40": "5S6ofBAAZZ5uo6xQseWE7tGfA2qbXN59yp4zjANf82hUctqw2csXpGP5d1jcCCN8qszExdRWQhhBAm865tQzA3kS",
  "key41": "4YbkV24KHdZMrExPL2YbSmhdTefnP6NQK5tCTb4TLrkUBY7xAJjKfhyyatrCra4rq51tdX95LhuZcZSwnuvehZig",
  "key42": "2qLWGQGxxXJhDo3pgx2ZesiQR7MR7E3FgrkFxzte9PuGHUc3wncH3XsNa1fvM59A4YMQqtcyfyzetyML689DmVyz",
  "key43": "5Q8B5iBJm5AGYY2EriZLpscdwshLUQ9i5BZEUz6qXS4nGXibf6ycJVcJXJTv7TZ9tkAQb8gNHTEGu2qwo9MqNPsy",
  "key44": "4PL7DiSPeyGcxZZuAn2uoJMe8qNv6NmAThNNkAijyEnj8oZBKJQz3HgxUWmQvjEamA2srGgAbDca314W8w1tuUuT"
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
