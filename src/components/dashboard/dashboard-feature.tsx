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
    "3eUBC1Rbt2HWUd6gErTV5RsMHakKdDKYh1oWcDarGxjxEMWX8XjNGtSBpwN4jYMR84BFF7q5iVLdH16p1dvBnqCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLRoDNkRBHSTUL8zPyBMgYnMmexwbKUp63xe7oURFyU3Zfar1mVmmFrTxHdLGS77wMhy5suBmAjd5LMQPxoagaj",
  "key1": "39wH2vV9Fi21oohxDY5qT9xKaiU2nJCGfnQxrsLbNij3ziL8CdzuXqW3tYmeLJpE5etxP2ydjA2JDwA5bDF5JsSL",
  "key2": "5cmx54qzqfoxbeVUAwtJRQqrZhEQWEj4JA6GdfPygeTbzPgEYkgzUA5qLu6uWkN9LRx57g5y6ujyA2S5ATEn2qXW",
  "key3": "37syzLHTGcKmaAxamFq7s9dFK7cAyTC7JVMBFdzqu2k5cxAHZYQruUYJBfPZQNF8S1KzrhuXLikDs6PxzZbbrCTy",
  "key4": "75MYUgSQ7C6asfe6dM1TvxGTnwXzDRzdVcekGvwBpDpYap7N2G4X19pMWGJYmD1qNXAeSwk9f3cCgeGsPTG735J",
  "key5": "tTAeyynf76cTLjJ5GjzuHdy56QCcs47jNPWB7syYG3zDfX2fhp22jXgpiK4nLyc7DJRSwUYUnzBq9Rfy9cjuxpt",
  "key6": "agS4eVxVfb8F1Toun92PG1WBqbTUMmuFuyNJgqaUkXxCZJMf6fMNEpZdtz8YyMQSUax8angm8JooEgUm9Jj8mMu",
  "key7": "37KPRRaaCfAWajHT8w8bXZ89FFXzsx5RXgW79nv84Y1TvWiYH7r6HHTxRmmr9r1Y9LzMrX51TKGo9k5TqVRpijsw",
  "key8": "5YJX7CgeKhzrHtraivqQTikr9DHrkiJHuRkRcdAHHvmLKkrTiQftY5crR2bTmjuAha6bBCh3tkv4G7CuZgTT5g2u",
  "key9": "rcctYZBAPJsUWD7AdrtjuNg1myjduYHzaXb4EL4kNYLkhavvFGhDfxN7LwRaubCt5HW59LxtX4ctXpXamVKLUs3",
  "key10": "3HmfK8yMp2ANM6bk5ap3srwLse9iYJjNatJmvnv1BSwvsz4iQYzBue6MKdpm6j2AYEQEaFFLg65n6Zp7RwTpWzEz",
  "key11": "XKcEmr3DDAhP9DrtUdUVUuzG7Usa5yGSkQqvWodBSzpMRn8Y5KTZMYTa3Y4mBxLyNkFUo4949ydizykiobSRMny",
  "key12": "4Hh1iEtrqbtqH4Aj83s26anb3f1NjRqbiuE3MS5Zw2ggFaNgDjiQCbzT72QZd8YVms7o1WpFZGpXPKeTDVGYUiUE",
  "key13": "5z7MryerXN94aLCWBdLxuj1Rwj79b9sTEG8ChtLNnCxnNu8T82QJjsSfKzsAJ4sTd2Muat1bLwvZT27w5ZdQmVsH",
  "key14": "627wLJv27CEZyzTqxNLLXZ77pi5pvDBrb2mWeEz1t1WxgjpZrUPJnCc8hzGnQSs6aovErnNrhD5VbTxJYqS43pd5",
  "key15": "uQWXYQG3a4T6z8RGsJEjdjQC657LAb2XrthVgasZCP8vQAsYQX31XBWzJbMR47xzgtRJZ6WDNRKF3AYSabJKYje",
  "key16": "5dayoBSZKLxWnEm53Q1yqMVndAkYkaHYpYiLjvoLMmwAwPnTCGGuGrgqzYewLhmvdQSeZUx38hv8UwJhxCuHjTpQ",
  "key17": "3JJxbjmdmUCo7c99DRNtz469hK6U5Cqs1rwE4oSoR6Wy6q83EXo6rJfRufimraVomr8v7ZD9NXMsVartLeLBxA1z",
  "key18": "2562uYbU3XJEGkpXDCVNv3KDk97zQyw2sQjAF5cEGVMtSytMEjBTLWtQmGwBjcmfFbgFiHwTrba4egGg2nK2H8kK",
  "key19": "25XLhLxbT7pG2YNTZBGiStWLYvHvAsxT6t5Gh4LvaYQzCexzmzc7aBfXgbnWSR1DR8Nq3LCMcynMzHtcAwVofiSz",
  "key20": "2xwzLaT6MRTXpBpXJjMHNLaZMEpwpfo9uc511V3ryrBNoHnGGsWvzvrucgwGf6LhJq3xjqy8hhQUV96kScVn641Q",
  "key21": "AgXe55VdKEEiFtF4GiXb9q1KbJUEKrMV8UiDCpGfF4382BHyimnw4CNodGbcar395uH3rVRop9BnyJDraSjJmsA",
  "key22": "4CeGc63VrrzesRUuJykKYk6SUbYRCtAskdjYCtn6XGzGduC15W9qQSxdrEkmwxCQTuoGe5qgFMyjcp53QoPr2UtW",
  "key23": "7DtXJWKDfEZ6wck9YtS7zBpjLJ6hcELGWwHHf2Z9d8bFq94jAq3UA3v5d22J5pUSRSFccqByk6TxAzBi7Jqu1rN",
  "key24": "33A7MZHA4yY54sts7UHnhXCM7niC1C65NxbBuBDvAEXhZMMitxbNL3KWaoZVhQL6ptGFPrt7rkNsX5b2TJkachuB",
  "key25": "tJy3eKdCVtTWoDTSJteYAL8DTbzRuA19fj9BLw9g6mBTmU9ebBHwSu98GkQPRVoEf7Rt55XZ7aHS31NpBiMy4nb",
  "key26": "3fqbfJMMnYvQUDQu59iPpahsctx5hRfAvB6kUiBNSiwUtaXqaBK4nvLarJcFy72UAKngmVorJtMrgrwKuGVYHwo5",
  "key27": "52nPpNq9A2R5CjRauWNCZFPt4sj8VJBL5cQKZ9AhHkURCCwAqqUA2NRyj5SpKQV4LYXCQZZJL1rgwebraCms7kaB",
  "key28": "4fEzPre5bwP5eyQXVQC1UAdqLfmRqxjy6xX9zUcqF5hpKfayj9Vr2FiRDZF3wDCt11rKdRdQiwRbuMDCTCkCrtGM",
  "key29": "5g48KH1pnpa1RnB4Xz8stzP91Mm9eQiVQoRZHHRtCvKKMpgkozPkXtpboGZyUK2g2XXvobtP1gVHfZDLMU5hHCEd",
  "key30": "2w6YHRWr4VaT6WVm6c2aV7zggvNhN89joqDrEMMgpdLogQ46VaKoc1H1Wp8u5SZSJy2hH2Krz7YJiD7EYgoDPhoM",
  "key31": "2Xcx5QKkDBzX3nSnSG47UUSYtMSb9AMXFxTy6jxczmysuoFPJ5mnsvTamZEhEoeY93TLCXr27BnMdqWubpsF76H3",
  "key32": "5c9uRypZ64znzdCtV5iCY5np2t7C7jdmDMJTLyY4h7XXvRUv4LtJwQsxEFmPzgf1u1VGzG4kSWuhmaARDa5S8NZr",
  "key33": "9Y72ZqHrMdDxLhuvdwsiVuWvHwRcfX6yB8FL89erRCbZFXaCtgBMmq617pPSob15hBZZVvptCmviUWbQz53SBYL",
  "key34": "M3uzBiZce66tHoEaYEUjAdL3YDCbRycsqBaJ4mWAb5Z8ks7rE8cSD3uxWQx62WWf3vJkUv2UA3wDtEBc2F7VFve",
  "key35": "2n2QddGRQEE9f6shRgncjaZBjaoaCXzmqPqiYnNFr7wkZ2BhrCZTzY4MftRzuifC8WFkFV1oRAV3VUpcJW45mHdM",
  "key36": "2ip6jmbFLpJYc7BCPYBRwn7JgaBfausBWnH6Q3Cbwiu7w4nJCHiezraLC2hWj7meRAbhkgYAcs2MzM2JFaC7fnfF"
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
