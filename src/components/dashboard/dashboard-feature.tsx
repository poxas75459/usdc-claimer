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
    "wUaqoSKVaGt3wGeoTVEUbUcg7vAufwcsdR9fWzFy1D2MDy72hJvJWi61HvLTE5KLBoQYf7vJ8GFxxFi1dDTa5UG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ndfrJ7gp91CFwQfDTikedbbkBtajAA11EB1mpXrY7L97E1U5hFXvSFLigyoZrf2XFwue4thRwPHT45qrKoG4s8j",
  "key1": "36NRRVqqWohKw9a3qeNwgxxs2nYdJKc2C2soEnxTLup4gNtwKy48FEMJqSYQpQFGyYkGYZ3hg3kWF669EgQK7Ax8",
  "key2": "3WiHZXLLag4DjJXDxvEzDYNEYnXwXyxfNrfgvrS6rqgzRSnJN4L53eMPxEsYZxuGh8qykCkoMjt3dyK6yKm21FL9",
  "key3": "4nMErECSLY3zLsj6tzLYSrRLA9ovtU6TNAg9o9YLGBkU71R1ppSkUnvxaUJ8tNC3jkMDjooimMVpHvefrA5bsyjJ",
  "key4": "2Yyzsidd3UApZdapRDYhTfHbqH65Uq68LYQfgKBSbGQdpcukqcWr7ceL4VxR5e5gm2owTSaU9DKpUmth7wK9j3Fg",
  "key5": "3bB79zwVXAgLQPkt1SAqiFtua4ncf6C5749gmKcDYftNe8KDbBzW1vKQnMJHT3bFNkWkevD2dJz6QABFQ6cAHCNE",
  "key6": "mhwK7TMZdpudHXtgzx77uMXJ1r1tZxdEgxUTWVYo2nxn8zyjpRWZsdDefT27dkZ17JRtY9ZTJsA4wc1exRgBFVF",
  "key7": "AinY46qiFuoFJXChBP6SDDt6ygbkngEK32azS1pHF3npsmL9ZZAxVHZJi4grA85z8EsFtWRgy7Ati2yiUbNyXnT",
  "key8": "3hwLUmCi7YkaxVQmhbEsePXfgoCGh4P73tvw5YY1mMkz3VwpJA97w1EpWPmBvsJnd1PPQBUPasaQuRwWQBoSKSXx",
  "key9": "3wjryxMENFBMwBfbi5TD7QArwirQgC62Mx9CRNomsXoV4i1HHqi3vhCRpoS8jz6DMVrRUYgZpFStCgaQN65guy63",
  "key10": "3CJ9mJFZKN8oS6QkCeeSjtyETSLx8fJbEUGkFHQxv3aCf11F83qmtZsYpnG2nvTqTn3WJ6rDFqheZgomoCmzL1tm",
  "key11": "5BAffSpCW59P6bU9QVZMrMRXR1UReNdMdzjEhWRfa376UCkBQmHhifZdA7BLkWg9YvDpXiymZiwgmR9jxqfQVNjW",
  "key12": "3B1cBh3aEQMgDqF1M189qhxgF92DjQuMA4Dz62jy2YGTujyBeycawLHC8r1BHRfJrkVbHSRA1jF8wrC9MuaWaRAX",
  "key13": "5q8pBsvHVXbUnjaXpEQowm5UxdMAhGGV7VjK8ixeUNJLJuGKuBmQi7qeChmgDwkUybb6V1MqYvt4ok237DiMebgX",
  "key14": "Cf4cPcfUajASkGe46wEXfKjQmwvfwaGor2mdQuH3XsZLM2vod4Z74WHidWVjw2k1AR1bTfKbzkpP8s7bhp4M5RK",
  "key15": "V51zSwqaZiTCfYh7Q1ehhRKxgHDac1xZWdsuriMH22MxYtY6PVDa5CkQKX8Ban5i8Scse48W8kbfWTQbnT5pshj",
  "key16": "45meiwLBSt2HwaX78ShnKRKgMoi5BwErNPyH1CSrqR7Hc9cJCWPWHAuJ3XcJJqvPcmcTdMFQ2SJ7PCrb9f6khsia",
  "key17": "5yQs9sK6g6MxQXNrTC17Qqg3MJzeAe8MrVdHAXqGTChA263ZG6NZFUr3tbhmvNBp9Hv9UWZFBqvfoEdiiGo9ceRA",
  "key18": "3AtwHD3esYantifcovsyrwek5s7t2uN6YTT5iV8XV5dRNbqNXfRb9umqJTkxyfLtgTLrmzxUUGMmerkJxFMQHLv3",
  "key19": "4fVKjjjnETGBh2iGWsyfL6nTuor4G6ctyx5Zp7gedU5nFW4ktWWzHupVP8XNdKFY1KL1mU94W74k9AKmSz9bkCw9",
  "key20": "4aKCx9R1fhL8t96p1R1T9N9vtWfTkjDMRGa7FWJMPygCmuxVr5enDqd89C5kUvTRov6DjSFHDAA6aupZq6pSuiGz",
  "key21": "4dhMkodQy9nYhc9MV2wMEgHzpgMQuhZaqcGQ7DvAvVHvjtdMZitrNoRE4MHTPG8rAMEuu6vKDqjvuKxkD3rsaW12",
  "key22": "55aLA5cv5EzY5UpfS2WfxYwtEcsh1KStPpq1oHpdmKSoYbeNdGxcRVNMDugmXZLgBPUHiwLX4TRihqmY5mVVJmFa",
  "key23": "2iyBT16M5JdPDnQtjJ8ZB5zHTmEto7QpC5TpZ7EkS5KSPUvdY1uv2VFRQ8YSBXLMmegbL4eHGP6KH48fNGWXNa2J",
  "key24": "3sb2aA9mqS1k73wqGtkvcp1XRFJV2uxHFABmhMhxiEps4rQ7SzfbEHYyy4AFLHwFyiYMZWnSKwwTvnB6iCENpe5G",
  "key25": "46hvEXtwd2mjY378NVTU6RSJnEuZKCMehPaRefSqAzYEt8v4gE2s7M8eCghySvkxidbyX4jK27EaJna26rZkvp1m",
  "key26": "DTRRRr4uPttCseqWbaiNfiANMk5tuWRwxV75EAekudZWCgE2dmbJiS6dLtqURpBc1E2mNPBbwuadJr6xTxs5gbY",
  "key27": "FW3nNxhioKWBbJPYviVd8vGaewFQsHnPjXnVgoYf5QVDpU6hK9GpVqarVAgizv93Bfy4XTjU9S6LC1ngvopyxHC",
  "key28": "2qafMkBKwxSrrzQzMgbSvPQuwnFAnCTPm6JkFEN3vBHHWrsXmExN5mYEjcDan2AGm6oEyF3yPSijgEzqCmu8zy1H",
  "key29": "672a9fWdPGJhnoLpiJwxYfpR3SFiXnFQQjbdP4o3eAbyR83yTHsieWuRFdo88vgC1L4TK5oukEQKp2jTeGS5hcMD",
  "key30": "2ubcrKTVQoUMutuGgc34P5AnYbf8Bi7RRinFBLerJ4EtuFQTHRCPXFh1fVz68XQRyvSnLHG64MmvLWCLfdAYVSXS",
  "key31": "5BXz7rsj5ufRi9qDV2cyWifZ78mJpGTaass1X9JavJnMtSHVabsTzojraN6dgC6qezdFmt6rUHoe3wyFkieDuNBb",
  "key32": "5c7pyJSWs2Qvxo3r8tMc7YVU8P5obwA6NuKBmRxDLUnVqfPtsvu71etDew1ZTLmkZNut6S85PeDYMCaeebMqVXfX",
  "key33": "6hTz3f5GQPQHTsVPvML3EtBE9zccpFfbN6fnCkvR1CxJJMVRiDvKP8e8vhYp9ZU7V3xtkh7L87FMXet6YaUwqVW",
  "key34": "ziVfLSZWNitfSsnzyj6qwZiWMrESqUw5wgfPPso4ZpKVftQce2o7pBjBF8rBVM8TaCcBpKf6EQym2x34FuZUPUC",
  "key35": "28nD9spnkfSwPFdw8PafesbjiF5uFH1gSf9NESed28iNZxgWCbcaeFyL6AE2pJxeW4ZvbGg8DD2Vs5qBoupDvBRn",
  "key36": "5y2aHfrub8U4abjpGpfhS3zLQMTM349rWfQmV8VjAfwKprQMn6cMSubcU4j8K6b3oNj5qWB5B61d5VYbqZqbjxro",
  "key37": "3eYnbPjMqN6TjUBhNrPUEEsMwsyKEyuLZ7nJKFtzEpnZZWd9P4Xi2g4XLKuTgsNAhjUYeRBQhi89rTaXVVo9dvBT",
  "key38": "3LofVFkFMdfsxgEfjY7tJQntxRWxLicVmnD7M5ngrR4WffE2rguvBfiWsd8zbEHAhErdt1CHWWPB3djQ65JNAMxu",
  "key39": "2GZ5pkTbyqpwgUBmnhDjzfGwWx5bEXDg6scN5oYTpSfzbQhzfcgUjCe4sdRQgLCS5BqbbZGWUMWRyUEWivt6S3RR",
  "key40": "dyFc5mPDjZuXVXPoD2LHxso3XKHSAk3vsuX7T3RAc7djaHDsoJMnPex93nZYreyHFLdkD1eqfryRwCiyAndcEyD",
  "key41": "6Kjw8YJh4zHcbdqRj5LDP1rFnHRgcCHjDz1HTb995SRbCCNL4eetmB1aB8viuYtFosS4SVTVRisr3nZtrkif1w1",
  "key42": "5Tzw6LQ8CK9osUjqB7GLDGppPbq7j3SeSnDd5U23ynLt91t2eAkiCHNF9vHszf1JbVjb5duJm7hCN1dtnX96jXp"
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
