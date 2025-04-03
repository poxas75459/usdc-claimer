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
    "47icGychnmERC7shnDz6ZEuBQzAtyiPcrJAt6zMuri3yPtVHcB9F4WtEsmJ8kVfYaqVKG2pN5CBLUh762xiELUXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "esJFQDsrW4QE6uXm9gioTKjjqKNQXXZKAYRWn9LQG8vQNT3qdKn3qSqKEZD4tnWgAQq96RPdCFfWSj6Xp4rMiZb",
  "key1": "4uvTjxgkyys16u6seQoLvouUnEuarMN6nsPhKEPvkDv3uB9WrUY16U22fNUB9LzLwhc3HzMuUbfqVzqJJicbPUJ5",
  "key2": "3tuhBoAdXQNbRb6uBnWf1dBFMaExZPedGzU71FAVvB8bHZuMeDDWBX9C23N7TbDfrGUt6TVxFVHhCkFq6BPB8a2m",
  "key3": "2w2mnUNoqbUKHwZ6qRCzNaEdqXuTPhd4MsxdzM7eFNdpKmr88QkQDbAQDYwTyEyct64Nm4myjHmKq7ayP2vs4F69",
  "key4": "2ba2DWdvubCsTUnXQvAjZwaAN8nRHK9JwQw5q7PD5XfnCV1u9vC2esoavovbjaiB3H7seK2gZ6LQ8GoFzpDEnfec",
  "key5": "4g55oLVcZLrh7qz3KGNfdLicE9tJPnMgPTx7PrPj9DiiJxnSn3dXBHPjPftY9DPa93PkRfrwBXLhyHjiwTJwGeHK",
  "key6": "Ua5LQW2AeRvHgKuU53CsbWEmg35L7Y3fFUV9d5XQAmNtgz4CAdhW6YqWu6qgbHLpGCRBSatUTUxAjkJAEBd9F1Q",
  "key7": "5fU33k6ni9X81zEoPQhFB86pLEwuEJuEA4CydfU1BLy7zvPgmALnT8meJBEB61LmLY9jb2n9ivbFq65eJDQx7Yfc",
  "key8": "3GbsiqX3b5EXZ2nssmHjXDHS48xJvQ3EVARjj2fMcPjsajyTRgiLD2vrVQuKCBgoaPK3mdzVhbf2ZgDDEm6eceAc",
  "key9": "5ZbYtVDfLFtgP8jc6oc4i4g7yWekSCYeoFPvq6LVSP8RmLKhWxkXJ15eP94NEPTUs8w6PyDfYDhmz4igRDXN4Ku6",
  "key10": "5q8E15kJuvoNDe2JovGSUpak2HMc3bPPczCmGePemFNwqAW6fkkLTMevBAT8faR7GvrU6sH3VfzWphYFBoDFRJTA",
  "key11": "4Q9yJeZD5k1ZtjGYw6Qsf1vnbhSvLAJpGX2TkvFaELopR66uSaBEtcQKbPipqo9zmq1TiirXX7xPLQjwwQ7sV5LQ",
  "key12": "5gcSPMDvTbLLjASimfgwQweVfsWoPeoTqtA1Ui3Zd9Q14cczCz6TPPPJi76Q7UsLUWjDSsrehojdVb7iGWGSaGQ1",
  "key13": "2xUtbutaN16s5zCFExVnpgtRzcRyouXpFx2YJs9haeAEk6E56eTxazsQ7Jyhty9o4jtzbnBm12fJ3pZsExAp82fU",
  "key14": "3JCjK8ato3CE6DdAQ2ZHkVVt2P71but8AvK2Hyc66kq3wxNipBDR986ZauubQFjiiRgMqgD4DAejyKJ9h6ZKJ9i2",
  "key15": "4a8j1mTB9wNX3aHt6VLpWj2YTEnMmknnrxDt3TGSAwcWtB96hoKBNDudyoz5yihTvWNMgnb4PkMq1Ti4uuoNbuPt",
  "key16": "uR2qfQqUPm9CodANn5beCDEF49836vsMMH7vxZDqyWTndNk9Vq3fLcfqpUmCteY6rSkgd6AwHgUGyvJAT1ZXmSH",
  "key17": "2S9VzURc5t5okQc1p3u5ZG61rMNqZboZpUVc711anzb1SGNGoyzhgJGt7bNjawJZpJ7gtDMBCDETZTNsNq5PQMt3",
  "key18": "4d4qq5CgY7VH95cr4cZu4forwAYmmkds8uEbkduwfaQVuj1jvBj3ABRrzhd6rCY4N7Cot1HLYYfagzLRS4G96ETk",
  "key19": "3ugE9QE73BhLFCCTJuxyYpsCsMVHrgvf4WJUQj3kFKjdX7LhYmgtyE7JR9uXWCg2UVH3J5XYRwpwCPyB8KYBsfCM",
  "key20": "5imJzYYCWzNXmtoVtZ1KSDGfMpbdrtMqsKdV3orhop9eyNuNBq2UWQBjazEf6it6G9XySu7r77vosgWQDcCvGmxk",
  "key21": "4qr2AaYdoEanEd6KHEc2PLCsKccWUbM8mFEvrefUifioGNQUfPVMpwS2s4DakVnT8kP8fYm7e9LUZhrXnw3M4ywD",
  "key22": "35zh8vzqaFcsnp3pZAhoHnuqQqEzzvDybdAjHYxwju2KMiEZxBZn9V5AN4vP6Q1v3iGpKm1FoLTnp167kjoXjxWX",
  "key23": "48RpdDeBq7sNUfh5b2Xco2TbLdJjz3YCXMk97Hc6UR6LuGpMPDh8YSQsNsTgDybyk8Dt7WuZCKCFfq5L9RKoRb14",
  "key24": "3YWuNjqzrJzqjnus1sZSUun2Y4mYtZ84nzR21J5e54ewSUF8R1vfpBSReqn5K3ZUecBgrp8aqtqnUMhSVJ79KDay",
  "key25": "4z3J1a2x6kj9vxM9j4x9mxEz8bYxFiiaCntEKqSprhJcnDYThsKHEHe7xkqfGdDPZEJCcUadszBw5s5FjR5r7jHC",
  "key26": "qfGFqfnoYnrTx2q6ckkq9X6ziGC9dg76XWscR88x6wqWqD9PNg5q7h9crHebw25oUX7rL4dT2CPWbrzEJuxP2P3",
  "key27": "62poq8wi8Gkp6hRKLsCH46NP4ctG6t1DYFHZEFf7N3ZzZdq5BL8DSpRPYKPMCXfv3AHY4Ve2RfSDitwJki3FjjAm",
  "key28": "3viUTsMidXae5dWH2J9HwkEsYbs4vrDfhK3UgxFEF91DkhMuS5tZQovD7sfVrUkTbhTY7iFMJPvM5g8bTjDAXhCr",
  "key29": "nKmJ7nRUuxynMLqRcrUW2vxi3nKLjaukbeRrSjojiX5eTuedqFynkynSHBekMrwihEnJbcLyG2L9LH28jfkjPZU",
  "key30": "2knJQfKZR5HDRargDHb6cn8e69ZGWERet2CUo6xqy5tFrysj4T2cpo42jD2EWXYX11wUKxvbeJiXqdwHbbiHuPp7",
  "key31": "RSrbnFmSSsFVYroSjLNc2mASBdyey8p3sXiJfP4GDVmqh8mSxDe9kuiSm9FKV8kYatYSkfTGhRDru3bNy3XiGwS",
  "key32": "4V91PiFsKyhGGY5rjfJAKAPgmeuw3vbWLHPWD5GN4hp9rUryLK7CHDtcmNJ67V2znLiKYm8btbsZ6c738d3NFdBZ",
  "key33": "3PqzBinjneSTkP1qFxU45TWTWhFqsSf8at5Jwm5DifXbSXreLVAXRVeheNWdSKqBH1KhfBCbc55ft4NBrz89yapE",
  "key34": "4m6FyiDrG7jSSdWjbhjqf4YQsp1KrR5By5P14xiw1uwQ1YfpD2q4ZZVuzpoZVvSJ1oXsLXVjnTNkE1Wcf6kpN7UB",
  "key35": "3SpDBJBchsK9UV5nCwg54JVtE7BXpEqb9KoK3zr2UpKT7zs2uoGjPmcqsXrGYr85tt1njbFwEPqrHgBrUuHpFXk",
  "key36": "5zkH9KkHZ8DinFS6Q5FqRF4XehmFQ37yXy1zi1UNbEqMEKF8dGrToeSyXSYKAXsU2HNwp5gn88KiUKYSBUDYsPsV",
  "key37": "2Js5m5fNzn6Q4mLkJhv1vKugrxQUCYnDCxEeeeKvB9HLMFyRX17iStKtg6PS8dGMdp5p9H45u7KfEgDCgiPhBubv",
  "key38": "2yzsWMRR4xtgGL1THjhDrM3FhWRPZapM8VswH8DSnisaYcPFS19o9fAmnrtPSAqpvK4sKrMVpwue2F3JWvARaFev"
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
