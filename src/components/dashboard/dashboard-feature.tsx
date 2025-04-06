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
    "2jk1JUDUvDgzGk1iiovNK5ZVoWqYnzNCTXG7NBfCAwfmEM65XvYLuFQJ9qT62MAePz8GziiaqwMiKbKtHVhzCEJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GkTm5iL8nheqr66oeZcXY69Meo6Pbusy7uoq9ntnSoJh6zzdtGmdxM3b2ZnAGYP6fQWZ1dd7vMgv9Z4vvVJhT9q",
  "key1": "5UVZ3G2pjfSXwCMWdpYXtmNZB8PRuSTMLvAL1K5LqbgpRAvX498ygSkBUU853h5AbVNX648aknLePY5TkCRFkgEi",
  "key2": "55CKZrjmXRZ2TeL94foZMoiWJnbLvgLyRXyYQtZH8vLxhEdF7Ym6G6m7cFiaDSsssGtC9XEyZVRxQHdQ3Ttkjvjk",
  "key3": "3AWPE8XxaGiEm17Yh3D1n7MooSS7ZooHTAZjLPj6GcsABDqAtrdboiagxckobPby3PmVaM4Uc57YTdsgNmHK5b31",
  "key4": "67oTEMbD4Kznj5vewEv3A4WRBi3LKEqWW2svxeFmzshYndvpa5aKst2WnPTywff3WVRXmAJ2XRdgK1K5gSo4Cwqb",
  "key5": "4PBcRpzQ3e4NtmJWFAhgFCuFsFC9hUS7MzJbugMubx4TJPnUxY57wQhwzJCFguYNczXhxRFBQK1MJmWf9ybnqoiE",
  "key6": "5cCzVSXeeJiyHFavPUKZD74psmVrVSZNLmUqvcksZ2sousdw8cRYxym4a3gvMh3P9Wj5L8UCPJCiWDPS1z9VHdxL",
  "key7": "vtF7KNEUHxZJTVawCG7QQGxbD6PnSDmaS1Ex1otFLhQuVtRhu9pe6ZDVAHQ9S6afjDLbCfyzsaZeXECHP5mpgLm",
  "key8": "3ZmxL9JjMmxVY2EAKCjG3Y8G511JBFMaMMnXkSoQzLukiUYDAiqz5gmwj5TQwcL7QQd58mhdiwSqeBT7QsLNaWFy",
  "key9": "5eRNArRH5PLB38koGUuaYv2wKXaqKV79bU7rV6mLeViRsMj8rwoLo5Li5YQJAEzjArzJ6j85mdtVxFEzQQX1LTP2",
  "key10": "MdDLmyiFCGoLUGVHZqLfQdXwBEFX59wm2qW4SkxqxbFURrKbMFNWkaJY55tHg3tQuorf1d93xhXiHwh857NTZUG",
  "key11": "2y37A4uxiv87m3XkFcfuosUZddiV8bXbg9bNemQWKdWhphbqRueHX3VDRZhapgcNyzCaVoQdZdnCmNZWXZVqSs5c",
  "key12": "5iLKzi6wec6ProTjpVbefjhggiKJxZxHGUA49EbYPjw9obdRFiGiq1PKwTVT298znCDoJcR5CpgV3rZZDr8kE5sx",
  "key13": "wJB18n53QSQxmi8LELL132RpbWpPeGsFqJi7MKvG4vmDdB3K1c7KMjt3PXtroutbzaYQL8r7f9Ff6F9W8Bt5wT8",
  "key14": "5DqoUpsdffnEnv4SwohrqHRmCZ7UEtk4W56tGbt8VH5rJSm59wBBkVzyox7XHCASwX26hkseb2tMwGzt7webB5n4",
  "key15": "4qtdXucKbietvWu9ZX8r4JnXncfF4QER6krgZUZjgy4YvbX2UiDVoH2vHk9MKcp2pFxRTAZbnHWmTHQRefeFXVCp",
  "key16": "66J8uuX2WAbwp4BuDJHN9sCc8JrsipHw7h3zM13cukBBUdXKxQo5EUT6S6kKdD1cdAAGShXMh8PuLPgP32pgKyYH",
  "key17": "4JMT6XNXuwPtgo76jYFLhjYNWzvWrUf9YatSaDzc78XhbaGmfa86xrUUYG4Lcw78xj8xW8TLeZ1DdEFUzUzTtpV1",
  "key18": "3Tb92Lqik1zGmXqwE1PpruXXsWZmTbrEwWRBUpnS5KQ4dQXqYfZvy6suarTPjdudyCadskeL2mEDHLU6LeZKShkM",
  "key19": "2pA6Hwwvv51xXV8aomR2k6MBW2gCNR5N5HyMREFDCyHpbH76eC3UdinCKTQ9YTESKCnhg1CQFgj2g1LiKW2w4tCa",
  "key20": "5vLaiGpuf64wA8aVUaycC16fqDZwAuyHu5NqaohdQZ7PGgzPzNsVnDuxEQL1gXW3r9DkwPC3C6Ai6iHcYTwKAmU7",
  "key21": "4K1wfAF2sL1ebCkyLnwLVCuANLN2HEbuBX4gP5GYaW4oryQV5yt71AgV1qStyS73MrBKVwiU5FLs6A1TSCfkxnJn",
  "key22": "2i5Eub19LfUmR1j7qZeRNUYqUQLW3uk83wpM7A9wXoRUHSZUthznANnJkLdvCkpdBLCKeYa8o76rwJKVFpsQreht",
  "key23": "2mnE6HF7nNCKgiBbJ8wtoVe8yz9MDTF6dHgx5ZUXiU4uq4wujN96h4M5UwruTC4hVigJqMvrzvA1XsETdSgkqPrh",
  "key24": "3cZxEd92TbPsQSj5yQtcaknMotatumhFMBGyoMsq22aFPH7YtKDzZYWH44hdqPHGuhqGgJEmaoTtvngaYDhF3BYy",
  "key25": "66XBMKZmpaZtiKuSxXk3TWKU12hxGdnGoReK5yi8VTAYF1HaXeUNJdchPvwU53F5LqmKb4MJovG5Hzw8TJK4xnnk",
  "key26": "35vHaEZLVwHHCYEFAtth8XX5yiAtwxS4K3THUtucxWVJEm5y7PHrmU29zwzR2G7fqJJQCbdUTPCjnBSMzHobbtfP",
  "key27": "4mcNAohdGS69NXtKJ7v6f7bptY3ZkemNVa5YtTzs6z7FJNtUJWBrEuQaParRiLA5oHpTY9DXyQZD9jhdNj1Awovv",
  "key28": "KjiFK3ZQMh5GDcRezteQaQQGVUeYMgVNXa94wRNWr2mufbCnLmhcebfHaLQYZYFQbwkSACicrrHGpoC1pCQf16a",
  "key29": "4ozmfPq1WFzSXgnHE5rhnP4KYHepToHHi1P4KMjPpMZ8fFSZUMwM4MiF7pQH9zLhmPm3J8zvaUpicGwivz3SN24o",
  "key30": "5ZeTYaLovdTD2gngy2Sts5ratytKmYxEdXRvD8YcfcuDBiW8uDwgkAzpDfxi4PyrgE6RJF1Euz5tEog9M3qh1UYA",
  "key31": "mXBCLGK1UMJEJ6eUqrLXVfyyiPX7YEECN2w2uDW2ztGTZgx8a6yej3MVXVPfhUeCKN5vuVwFr7LRLSoefAwDrPy",
  "key32": "GkwwK6UghyZRTue8F3vP3gzMULEzwpjr3Fb6jjP1kYao3SjbiwsnneJtAdtYtC7PWGs2dxh8kUZhWm8sKX3ngYX",
  "key33": "5yetC5489fEhPFFYrrX1FPvZpEd6ka6VV4bCtq66zCbcMMZ8BiFrNR4HeGh4ZwJUF7NpU9nTLiPRhPPBNLkMkJzo",
  "key34": "3khb2mqyhEg8aRsU4UGQ2A7A1EgmsTxFbs7bS5dFrnk25z1E9hQnhZ4fr96A2GciNhX7X1tgbABhLRVshkghganp",
  "key35": "FFSoJvKTgrFYjaDCx3Ygb2xM8TuNQnC8qdjJkPUcvMMC2F33Si5qPZVVKF8n4vHS5ipC2vUbmMfPcxerU1Nnx2Z",
  "key36": "57YMohEayofKSQkKKuWx8Kk462t527YsszJAWDpgY8uJEnZaPEkJN1GC2BSnDMLNy7jVY5kiRPCgGzHoTTpcCeHh",
  "key37": "5DdPTFabSsB5HMN9pKjhr3GxYupy5iUHj751aEGX9fRo49kDYxFUtLHaxCSv3pisgFkAi69JiJm8rWLcFk8vuaCj",
  "key38": "61LJnUTjFQcLFi656veNdjpKa45T1CpMaGaTe7KgprxV68aL1ntL956NCF7LNJ6xuX4Z3dtbqJbe81TnUGuQjDu6",
  "key39": "3YvxU4jrUHguoB6FRRzT2pUUguR4XzY5yMQa7Tz6WTySuS9BGQSoHE3Md4JWa3XvGhdkyS5jL3Awv5k53KC2B7uw",
  "key40": "g5bw932pCB9meBEAy6hwUzagCnskADocfKJFYM2HUbELV47vXGQKnAb9T9RpdQjAUFvNyRe7ZUdui5VMFs7nKdb",
  "key41": "3HHwdvShobAoJBvVan8r37T6RvfxhxKWV3zXpTybK3mBjyjJfTGYb5szXJt8D2p5hqo4nYjdFZj7A2RNDq3fyMLk"
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
