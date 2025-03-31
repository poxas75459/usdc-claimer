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
    "ZxW6HqUpfMHEVFaGZKfvnjfBXo7i8gcYe3SeTd58E7FQq6cXmcmaavGf4bNnGKJ83Z9mTMxMu36XtWVm1LDraYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ADrgE59PdeaB3fDfK6QnFS5KRo4pknWTo3yrGhZawxp6A6jug7VfjSxWfQiFcv6tm9Dj2m1adukYMf7jqjdvU2U",
  "key1": "mgsnBw3KdhwdFd5nuB6Q6GCMgQDukw2SFmk8Uyqm6Qyg9a12JQpkDCifFbsgV6tksipAEPT8AxG2VivpN92uxBD",
  "key2": "4V6Pim69Bgj4i3BRq4tP6DAro44pTd2UtSYpwNW3BFVy3YRoDegSvgqfVpkCahkoFDdmgbM1Dor1mUvsoF8HVESs",
  "key3": "56HEjW14c8RvAqCzpGcqAvQNBX1SCmvRX5ZDoYQeTCYkGdK7U3yQvE3P4U4i6sWU8TVZLy8p7wgXCqMkS8dPg5Pb",
  "key4": "2nMA5WkoPbiQqqTsffs2RTis2wu6ZSSrCddTPX85sRBChhioqayjkq5qYVEzfsE1UkLNFBudxfFAcwPUSaxZWmbh",
  "key5": "3kx7v6Rws4gCk657sfeYSd1SA7c7maRenFxts2q9dF5vN1vG2eSapW8skaVEYLGeigBiTon2hye5vAf3CUfroB2e",
  "key6": "2c2wZreCLcJJvzqRCaWpD7DiyUbgRhaDTvhrUdg4pJUEubJQmKpwagrLmCQUZUPfYUpbfmqRkZXVepVfJWpc3SX7",
  "key7": "28FqecVcZ61oU3xBNBo9BYei4UTSEYTXnVbgKZPyMnDsBzDteeDJ5Ba2XtEhbpRtEXLgFr4EHmdpYcn32ECzmDBn",
  "key8": "5Yx42Crw5y8C6GdEok5u5bV63M4MCxyS566oEaGaNopwWjBaRZsBCJRbhGRN4yUuKqwHunMF8LwdS3f6ytDWgZfT",
  "key9": "5DhFnmgN6UmhoKyidcTW3G2igU9xi88M4A8cEmMcThofmvJFwas6LrZwMHCttoLwYHk9N6DeydtriSo3UxHz13yR",
  "key10": "3fM6Hk1YD5ME2DUUHnpTWYV9MA3oWPt6sxtrCPcUZ34EPrk7JWDnR6Tex6iKLajtpj6XCdB3zeM48knviPggcGVf",
  "key11": "uas2Yp3QkPTitQ6coFNoSRv2T5cutwg1cwchpn8SSm1WL6KfwvbyHh4YMtVgkmKqRL67MoKpMdGpiaWhaypJcns",
  "key12": "eBjLs3SHkXz4Km7AiZvb57dBJ2i9ub1sQ7Em2gBpeifMchEPp1pwxRg6N6iVJZY2mGPx2x6dzYvfrnkoi8okdZf",
  "key13": "2FofxP3UNFx4BzuYhHEcaFC3t8poAgiF66UiRSKnkb81QsQHvGsPnypG5AkfggsLN8fNn3sttaG9Snj6zaFmENUV",
  "key14": "Ho8z7eycQeBo5zewDdhk99TsHKzN8NVXVo3dwDWjWwM3PN9TUp786Ng1CZzRmmwiAfnXVtnfDZTLx3Awk3vj8bd",
  "key15": "2zVoAKLWeNkjTsnNxJ2F7Wawz4YNzmdt3nFKWP1yQ3AcMfisTY1igrUjNJHUeWzhWJQeWAWJbtBJbvSsnaRHPoM4",
  "key16": "4jB39vGLSZeNPBnM5KYZXY1riQwJNUyiHYAzFdyt82x1yZC3dq6uvJdDh8SkeJiqbsLiy7zer1QGkWyJzCdn91ep",
  "key17": "ywVBxW6UHz3fqb1kHKfnrjV1LpTGFMofApKn5Njb8tgHYwoKLJXrvZdJaGGdYsdA1exmsyAcTc1CZeYLnNcMtoQ",
  "key18": "7Q7zYndPNJ5gBz1uZJ3LXR3zAiJnaPeNVyG9M96dZxkjF9vu7GujN4PynB4FmrwbLESmZUB3EzutEFrqnQehfxp",
  "key19": "3mhpNABU9BixpNSgzVPHLGqokEUvY1bhXdBG9UvgYqmeGrmKFWJDSdvKPqL22Rw9AM2dh5VEAHk9WAtvExHHUikL",
  "key20": "4c3kwE4nofzh6QBrC57uoq6ShopUTTyisLkXns89YFpgeGEQtKvyXUbXzQu37tTwV2qQR5W5X2LRSsdNFSR5RCUT",
  "key21": "5Fdn8j87xyy79txvVPsmpFbtuAZnkJ7UxGgTpyGLNFns96fWYkqNWUFGe1XJLKzHDC9DQcVBhUM6wjP9JAKaaHAL",
  "key22": "N9fJxKwGYxtid3vnCxKGrSFphxk1HweDRkQjrhtm6yWUoFoTwMjmSt8KzBeqQh9jUxm94KJpHM7JiMbrUf9dC6G",
  "key23": "7mMxfEpkkztmAUV9JcyGxYsvmfrSNKQVp5pTvbjb6oNVB2NUdDsrX9RzPEM61cQyEGfYrPiHmNmvGt9fuuinAdK",
  "key24": "38Zie24xG7kSMk8o8WhGMqsWNjFSorZu1hoJE6pA6uN1Yx1ZZA5ftRwRDBDLmF6fHvFHWPM5kjvTvZ4QJ3p2Uxt",
  "key25": "4Yf8A13fsVX6CEULBHX6BvTZN6rSLx3HQMB59HDzXdfwZxkvwQp3QyJeqQUPUPGGDGYuLLjCaJpdjsp1K7FH5yKc",
  "key26": "4DJrhXZJjVzyQfK8rNeGNVqsDx9R41d3rqXc3vdLNqtafwh129u7Z2TDePcTEMbC8zac3ogmhA3txCXgAZ9BJFHb",
  "key27": "3nYXxc3QF8rXY2c36zhRw9j3Ah2B1XRg74fQ3NnrKpN6n8Ns25saxbP6AvhZ5v8QSFgMQ5uT6CxgzvCdUFe6A6cL",
  "key28": "3SSecZL8nbeLdpJMEKLgEYEtfrnK6Qpmyeq5QbkQRi2gT26puM7sSYqe7PB9JxvdjDgyj36NXhZeoZQuFq1n2py7",
  "key29": "4j41NpCtCp9kapM99ktTtmPNJttwjJDkxiBQArUwQfCtv19UEfvqGRXiqi4qYpK15UnSmspiJcPnD2uCywpALyGJ",
  "key30": "4RfUVadcjhk95A7U35QubDqLhyBqGYUcfZFcL7Yza38gehBzGsBBjYCPc3JYgJFQdAWnwCuJva6gdLtzk8Rbxr4u",
  "key31": "2bUA59sRm3dHMxMDKgAyp8tBE2Agk3F8GQoHbxCVPfmR1VVs48URN1ezuhdcunyyNCpEJEH1HnLzPq3hypyUcPHc",
  "key32": "5fF8aW4nfDonndCuinC3APjRiWVZAwh5StR3HigtRy8iuzcEzZLyAyWBhHmCyG7qJJEf7a1VXUytGpdfgbzVCLAc",
  "key33": "3ou6S3UKQWfm34WhM8RaH8GedPkToCTCeqz91wf9vTK7MS9U9UbaoMKzvKQXj21nMbK4CRwxDG3G5fJce2zAa5Cd",
  "key34": "2f8YuLuZ6FuMYmxjzSsyosT2xRJjAfhLUWBKJfYM5iEQPjUKLUueGxzzWXjJNxxSEdZuCH5UCKutt53F1h2uyXAc",
  "key35": "5mTPTNBLcAfcaUsDVL5V3H4u5AZDKH35mmMESMPNGDSsyimgURDKX5mrqcSh11rq57V5DtR8zdU3C62gnfaXDJSe",
  "key36": "4NbA9Zv461QvCZ2iSruYAajKCjDgyHsDuvN6HkUUiAKkCg5erZj1v5p9DYuhygPfuTvSAN9jvNPwoLrWQ7gBeVpo",
  "key37": "5zGg7yYKQv9MAZyYe54fdRijmnqsN6T3X5xjDHaWtrCf6dqF6Mq7Y7EfKCjving1RH5HAy1iKdWvC7pL2HSP8Kir",
  "key38": "3ysVz7NfCg7SKp3MGW9w5kVwny7AcA3yfccyzfGJ6v63mCiDp1SLnDFprDQRaoNywrJw72NHK5GfRkFZ3qhwXfLV",
  "key39": "6Zh7MpJRCwV7fviNvha54xVzX2UStW6sT9wUmucSxYoSauxgzmQhYLNQTxUijvvg2b863srU8NQSpYfxWF2886R"
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
