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
    "B1YH8nPZL3sAQJWJ92FHRFe8AT7ndcfK9Ackh6MA5XutdyYSXjMhwdri8QDhPjZJyHf7U6LDgbjWKK48XV7CAnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mTgC6i1N2C4ftEgxJx4g45z8KjqckRfhScfNYuDkyH95TpKdcS6DyAEipUwbPc6odvZiEhbrh3PaGPss592NRqB",
  "key1": "3y38CM5hEpsvj3wvPe58BJ9a3GHnk3SCA4cLxredqEpGQwFEuy4yRYBxZ4syHYzAkXVG7pkfrrqWSRuvggWv8Q84",
  "key2": "3G8q11CaSWp7i8uAEFnhGBWezCvQiSfBMcvZgMLhDUP2HyqV7342abqj9NojSgsP3RZv7ksnwX5fTwRKTDRi4k3G",
  "key3": "2FiRWgdGuHv3FEsYb1tCDEnr4PNeZJwe2m6zu9itHRdUfeMFEKsdBJP7czUeAUTziSRCdy5Zwn7DTK3JjJ7ikKts",
  "key4": "3bSjiWnyEBw4iQTZ6eHaiFxizLbQiMpNq4jHKEskTHYMmjKwtTFJvtMbVgdoRYgBksY12fpGdmgQ7CJnAxtQcujU",
  "key5": "5Vkrj2NUR8bs7V4xhQ7tX3eTp3pYhwydHXavxekrdzyr5XBUUbwHzbYWPebBDDW3z2T8wRy8PujqaqnErdyKMmKN",
  "key6": "BMbjo3jAvXEVdF31zVWCz8fAthrgNp8z2ovUwgSqmFGA9TsvfSispmH5tgLgMzRJutxqqXLbnemEQqaGf7UMFKr",
  "key7": "4qXED5mnXcnNRtEJfDF4uPssUuy8GGzbByw6m2CV6WPy4SJN8SG53c3ejS8yieGEoWyrMCjxQ45DtXrsquDEZhEN",
  "key8": "6DnkWLYLkWwXw9Y1Yf4DTJV6HCCaJXCVySgGJ1TE8aiTwexQo3CzvcRGdVaRrhBHEJTEwTH3LgDgMnoxmHxkms4",
  "key9": "3oJi91DjbRzrrq9F4RiUKB29tkvUo2H1AUY3D71itJVEqRhj4ohghgLzhXNz5hQQ9STM5RKCdhVnawkEKJxsFRRF",
  "key10": "3Kj6QECpnnsGKienx4TZvzXSRhKudcGd5kYbkLLW5PQz7juhgjnn4tngoz5kdVUy4aemNLpp2GFvVVs7sS4bivsm",
  "key11": "5CEXE382TfcoXZu8gwwy9pkcGx4ctrEgZD2anHnYcq2ZZAphKetdbhgewQwKxitw6yRLkssRfFyJ7pBh1VuuNdHd",
  "key12": "GhfvJfeKsEchozVHzXpd3D5ZEc2tnNyHWEfH9BCi6arcGvLkopg7kDL6mAY6uGELcwvhX1rxejVd7eJQZb8zhrb",
  "key13": "2Ve4C7vp9n1zFV6UsgFaJnxquBDEduq4oojVn8DchCxMQtT9nF9xdWmfwDvLkj5GgD5bGWMVRyrCN8p4BL6ViLSn",
  "key14": "2rAVBpduvR35gBoRazHZgrtBbqnZEAcNPuwJAkQxYPfMoPy6yVCf9wx1ZBwcsKK93ZgopYi4HKxYUwErxvAN2RNr",
  "key15": "2HohtW5FK45RatGtp8V2kmpaSzRHSY1pgQ3a1gQnC3zfy6EnimuiJsoF4EV5u7DHeZUyh6jfs9w7LmZTiGExC2dU",
  "key16": "5eJknQfgFr7gGCiACU1w5KYq7cta8rUS8iSYPpZaRWnGpuYmTqYfjVFWvV913C4jA1bhjEBG334WkE75WGaQ1NEN",
  "key17": "zsFPxTVwDwmzynDuATxPVmjVFwauT2kJKjsiQBRVrR8sBQkdc7LjXdR8JuBrxgFEx1QiVVfmgKcBJb9CwN4nZfg",
  "key18": "4GqAiWm1F6Y7NmnVdw6Jse34vEmo7qZU9VrYo5R6dw9AonHFKHa3ekX8fPGTTVF2kKfryvCYXwgUTWNet9op5cSV",
  "key19": "3up6ZmgfPSxfGZQZKUqGVveZ4g8Hq6gSARRN3ksaM75fboZBWwdUXUKrJSed6TrRzaTDvhWi9xYz2WCLdTjnZ7Xt",
  "key20": "3dVQoeNxqaaYTyKpAZMfpg8Y2Xn6jafueisYGkoTVyVfgJeVCwZhBwSJkMgboXJPtFzGst9sSuw4KLZQJLi74AFT",
  "key21": "3U3RdByqRr7rRK1PvxYGAENMDXQXc7nogcogJvj92zaGpmjcpYBVR5a84gdQ6udQTgyBBePjAQ6Y8Gyd5js53d3s",
  "key22": "23uEAZfgEYhpVNkMaMsJMgnjwrH17EFyiNEmeMm9ooF96fsRMgDuybmHPiU1B5mjGXVQxS7Z54uUXB9c7jUXEQTy",
  "key23": "2WgZQxpQjvfT388vwKwBfHAwg5rGXL1BoJuMQERdJBdxqNtJGLpj6Sus6Av3dbDQr9axXNh3PcYimXXGHtCF1Tmh",
  "key24": "3fKdcEQJfeChprXWmN8E15899PEUofA7GpxBktVQ4vWDg6MaoYpczcg9TXA9DWxfZbv7VNLc4czH8Zed2yNLrkQf",
  "key25": "PmA6sREK1x8ioWnn936DAe79bLFEa8Ysy4JPsdRNHdiHLQEeBFT3n8q9HhpUUMEoJudxsTcPPoutaFD4eMhKM8P",
  "key26": "2Bm7wPRvCwQWMSNMTqu8Hd2KWNQeFxWkZig6Q5g21wAiHkd3Dp9CTZfLLT6etT9T6J6quXf7Htn1YvYDtqQdXpkr",
  "key27": "Pw2dZzG2kF2x6R6QVLaziKhaZkqSNJbNpJZQkJhTqCiW9RkCrpbzFU1zGziF8UvtbDE7jgNt2q4zUjDaEKQMCo1",
  "key28": "2ZQ2TbmkrTxGkZYZayTUqfu2eLz7AGnBrdmBuiMia43SfDVAWXgjrwCohGhDVkfJCFvZoKipZpcsF2tLZr6Sd3Lb",
  "key29": "5X3FpPr9osDXbG9eBNExpuNjLGKhRq8tcSHniesT4SexQn1K2QAt61KCbV4Q1XbCh6FQ6xuugWdYozdREydxfqNB",
  "key30": "26ZNas8M3KBeYLKZajafC367k3Fe6ir7raps9soijYL8BsD9ky791D97HPgRDxvR4gGqM45wwdAbDBvBssAGZqU1",
  "key31": "4QpkKrxogbuN9yHaWdbcUVwiKeefCUt5rAcmKVGjqASL2qBbd4jrabX7KGXzd4rJphVRYHBzZpGbbsGjyBXBUhBM",
  "key32": "4xXKoy6xkv87dDbFnTCYiRZDCCaApGW8bQVtgx5M9tBZ8WvBp3MF43ggk7UVrVWKmsWzsx7z6gha2qPtu4T968XH",
  "key33": "5cSGyfgQPtmfajsKH1emARyinyFuDDLKob1ZBVk57RGNFjsFdkunfvfBgSeRMgpdvLLTNXoz4awQnCYyLauyUGXE"
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
