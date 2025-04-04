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
    "2pZPRRFw5CM5GebBLw2HbqG3WusQkK5FWUAtb2oTSgG7QogkjTArw47Xk3wLYnLPXLq2DaE4rsyUFb2oMShyJw4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tt2v72X96EBn68wmYcgmKi9i443iLjXY9kAFtAXuCSyTdvhC4rWmqBPnnYCVktfsvNia7dkdvq8SJ43vpeWLDPK",
  "key1": "33ZepLt9hsg6UWDTrpFqYUBu1bT2rQAE9AchG75duLFrWVPsTYpRmf8bRJovcLJNmbntrDtJih8mJKCgw8iC3Zev",
  "key2": "3s67sYLJtbnSBEmy1nxny8GipieTsLYVZ2MPszRzkt8dHjgs64U4JPbpVKcuTvh1iopvXS4ztSeBF3KA5XntVd6n",
  "key3": "ypvwxvHUPc7uotqsVvLrovFQm67XZPXgShfFqwFhw8djtJciuv2kQkcKhCbaU1zhTuM9qJr7cKKZTzQv896ih1L",
  "key4": "5tQAQFeWG6Y1zRBhUxSa7QX1X1doV8mh4KsxY4NuzYkjdLeiGh822hBSrs4nrxYvYBGZAzgytTEMVZd9kfEHohST",
  "key5": "4DSRGRPvj444XVDCCU3TM1wAPqEMQtzRZQGHEiERZEYTBaQ26PeBE4uSV5eBZq5mkPz3uZfbrsVhjsfXGdUEXsir",
  "key6": "66gVjQYES1dVrRQPKd4hQFHJYc53hvm8mtk59Wa6K1Yw5FtywAS5cLxA5LMa2JhHxMGkpWDrYTKJySFy8eEw8xwY",
  "key7": "3fQB1FTntwqRJ1swv1LNbyFYzgDhHSzrDxPMVentoS1VPvJjWyoro1Bdco7HNjSKzDMQZEJZ2qWbX5aQ64j6JYjh",
  "key8": "311vSwDu7JnhvTfmjPuqFZZ1iQiSNiqQgXrBCT2wDnBQgitXxDqchD4oDvQSWJUPniKRE6MrWX3toty2cXbfZejR",
  "key9": "Z3N61jwTZktQca1pjJLCusmbsWBbQuA3V58HFxUgywN2cvUY5NeEi7yxxS3QHc9afWbCsNj2iudWtp6hdoyv1tX",
  "key10": "5wFPSPzSZEH454i59pizXVMJoLi99WA77nfceSXN42tK35JjyZbm2DvJ3zjT8PjaFgSuTrgWeFQdiAN48pZSjRfE",
  "key11": "3mwSXsXq8upy6Eo6jNBALNBJoezNXoK5Uw3hcWzcHYFYTzJe9U8zcHkYCBSd4ZwzEGnuCErKVDfzdQDXvpE2aw2W",
  "key12": "caP4BXkGcWXXKj7wgK5SmnyEDBc9e6gnLEoTrtfyJUmYmURCJtRn6J1VVHBT3KC6uYAwUcJNmbcFcdBekMYGVfx",
  "key13": "4WecMMtUDyg7qF5rCNgdZPvjmtkEgS9p76VPjL9KtS9LN3p7iWSgvVWKzPJ42UFA4uuxtxpWGQVPZKCgkH8E8cWF",
  "key14": "EkC2Dq6y6cnYeDtGzQCxtxZfTFTyxzPzEqENULCPfzEgnYgS5N6EEd2ZXLb2SYSVWXKb1jsiifFyhqHQHH1B2MX",
  "key15": "xXycGA1Bq5QNPuU5Vn9eant8wyNyKUHkV67zVmuXpecC7VCt9YGy94166JvEtm3xBs3TvDBrqfVMkqDuuLztKkv",
  "key16": "Vdieit3e2pnAA6EAZVsxBWrmofWs4rgPtvcBRSkoYDhDb6PTxfc6dmskjt45EP8Ztqz1z2uG6qmWkRaWVxLs8KV",
  "key17": "2WL7CEwYioLZHh9yLhe9gFuh2VWKfdx6562JaT53yQpWWmjMY7DB6xav89pyJQtRSdJo67MCnN5kPqd2RjUBaiWp",
  "key18": "3XEhrFNc2rPEWKDA7W8PD8TpDw73TRK1Pyh5VVSCQ7zp2pe4ieEtyetbHnV4vG9mQe6SDDveK3MWDzzkxrJoqgrt",
  "key19": "2Yv8MHQfCktnhWr1pMsXdHeb8ct9HBkdhtbuG956whU7fkQ5bEcMEGSL9ZqzeQichyhWyLSA56hksm7ifQwNY5nS",
  "key20": "2EWei4PQMhYtWxrYWgDAXJHWZwQaWtNGC5bi7FDL8py3jGpFGRzCgdudVGpkYcTBNXUaPSviCS8LwE4wMox3u5EZ",
  "key21": "2TQ4oWinkEY7m2j9dPVhsqpNbyVUucMUKGC8V7qufxnSRDb7zmZJKjZgtMv4U9bS6yWSzBjxjqNMzt86tskwxHzG",
  "key22": "37HwWYAVH8WJg5iwH9FhzHpr9kQ2R9x2vQUYrzuhSRxs6rATfNJADcTypBgy1PupLyaorktyudzLm467Hx8Sby2D",
  "key23": "DuLFJx7YHuTcVam4jTdR5D87ZEXf6Vw9dAQnXrT6aE1jLoxV3oc8gxBwcodQ34piycvbTt2vC1GtnK1gdYXSGQr",
  "key24": "5htDr9siofpeHDMC6c6HdRH2npfH4XkpNefzPAmEr9zdDqWk6TENgH29fCVa8VbLPvXEcm6PXj7G1Van97zBYUbE",
  "key25": "4JpVGfs8ggWpppYJ6ftzwXp3h1t1f6r3jJuKSTEyUj6Eb58MF46dsZqca4pYdRMyHbTTTkg4jKzoja9tTj38z3Th",
  "key26": "3aMW9iYnEXzN6A6Z5ZQAL1Fvt6Vnsgs99SNqmQSV6tUEbagFUoj4rCRsbJzMv3c3kYfg4LdfnnCgsxjPAqvLfQmy",
  "key27": "bHWkSMVPc8AS6JCxpPFR45z5cWzt6PpDHXpe13XrnkVrXwSMda9XeEPMHSHKPB1gHPcW2LhF3FdabNrqvWsrc7F",
  "key28": "7hzaNSb6u7s1YnaETBCM6gj3QsXQbRFhfxXDpmNuJUXcnKkH8TCYLL3Q99fNresJPMxJjcyVSvybAHk5kBQaZYT",
  "key29": "5VpGW1G5kNiRvEiR9NRAXY9M774jMSyXfD7VexTdHf2mBw8hPtxJZxpAKB8eAwGemMxQ3poo9VXX3L1AxqZ33V4X",
  "key30": "3bJU2whaweCXQy3d59FM988BtJEGMEMcSiKujCnDQdVGnsQ7rt7kUzQ6pDFj9WNgWMiZCdSGJ72Yz1sZLxoMYL9w",
  "key31": "MQWMoV5mpQT3mKWC8uVDqYF6DtVZT9nzhRPDzXs8SkpmVeLAiFQ8kP8QpiYRSMmKfHHky3QyE4tQWWiHZQHgKnd",
  "key32": "3pYHw7BSG8RXhYzY8Mg5LxXm7hvPtMk8ESru23qtxGEZNkWhZgx7Pb8qjKuKzR5R89YQz3rSGjRJ4iPiV3NXJHWj",
  "key33": "2M22Gp3vPwVf5gsaCnybvVkXKBhP1mHQeXqFpYBi6wMvWLH3TvZkwLv6JmxW7itXLSU1c7VRTCyXyZUK5PQntBvY",
  "key34": "3CKT9MB9vHEBT7aH7LX4WcopE27kkJp7LR5K1VcayXPNyomBS94aprNspWi3WAjL4XxVyUHTK7UVbMcn8X3TfHz5",
  "key35": "2evNvkMse9cUhT8o1gythRF7nPcRDYXZP1gafJ1d6ydrBF4vJF6kyG85s8MSbF37CtRtRzBfAu73NvhiZmHtMHZx",
  "key36": "b8EMzd12ixowJ79CKjFfXcVUHh7ExbtEW4hjQTAMjs2JwUggNcNETY3qPFRGppKZy5859L83nPmtoHLPCzmVFZM",
  "key37": "3GXWXSfFFxWhfcXLrceWftgC2BAfcpVY7npHhUSWV2zLMWaHXCRpkQjt9jiJhs6PdLkecPD3J1SbQ5WngyhU2UVa",
  "key38": "3VyXxxuX7U7e9SkN5qd2eJ4PqxsCdgruukL7kd3t4ykx5cBLgVgGNDNitb21k7NYvUMFAg3vwfspgd2LKtmJ1BTv",
  "key39": "GZNNaQuQxWc1GVb4yXHAjG3eFqqdoRpqGXny4Di796GWea9YGp3QJ2cHjSjufx8Zqtg9mRBWXTtq3LJUZSuG9H4",
  "key40": "5Rmnm49CRA7sWiQgaRKJ9fX9GdqvaChABrnhLPDi4LVzE1qUn2CnekFBFhBmTJPY8TRvM7bWqdcT9scDG4FoXmyU",
  "key41": "2vstJFGZfE5QB7UMxJJmbq4Ro7mffnRWgTr9DCcDGsf4Q2Pjdjxe9gJGrG9rcMj4zz2NSA3nwrQuvai6iyCMXhiL",
  "key42": "i7YZou6uj6gM1ap8DasZ3JA9LGZ34N5S7pB74jWj1m5ddYwDGB2mAX9PZFPsC16gEHYg7b3JVvPokfEJpHT2mNe",
  "key43": "bzV6mgov4siMXH4PVHS8753e4YXestcb8uqE2dceu4sA3PMiV2qKin9fTHWkTSGaoGwperMqZ33m43VzXjU8e3q",
  "key44": "5YMfJ2Ugiu1b3KLJvGt48xqF6nQW9T3TYtuEY15xMYjMXrDVBtEa1KUo9FcGNQLSABxA67x8k7n9BTZmPNQ7LXRC",
  "key45": "2jLR5E7nyqcVNJaBnuZNX9ktJrRmWJjTGxgSX9L75Zkxjw85FANE84YmTJWUiaTXh1JSGZsqckezLRgeYpMyGt1C",
  "key46": "4XyVdUSiCmY1ZGSote117G7m3VfvUo2fxefTjwPWbC5SmPY6cyHKk98esTFj1MNgJvmCfPAkwEkS5XeRJfHAVQRP"
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
