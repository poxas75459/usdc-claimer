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
    "1bgQVgKgsykUJurVn47X83JrWoW6a6oFr6GsSLPw5cDRzB6x9B8ZRYjyuGxnaiwj7fvBo1sS5UfYRpA5WUSX7DQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uCdt2TknrYPturdFKRUqGtR8hYFQ2XHzbPf2B5K45ocwunf84q2X2L6Z9G7wrNReJoPf9kFNSfzSZ1KhPQ8nMQc",
  "key1": "274CVknDXXjLzrwmKGHpYdvPfeKFCHvC6qxLkqwJWX2mQnN7j3M31P5o5NdVeZwCSaX3w3FmKuUBf2TDYk1jzWjg",
  "key2": "4HGDQ7bR8M2TuFwVGE5cChm6u2RUg2Un2X3xkZAJ1fEiSkqt3mGu5F2bagVe8tdfXf6U46A8JrV3oUpD52oBFLyS",
  "key3": "sPVuXvQrdHRQVrbjA3ERRqFggMEYMYfPTQu88wSnQDWgPctwiU8mj1c2E7h7szFJCgnU16jaZz1ssB9RwGQsCj5",
  "key4": "PyAXR7WGTRBeYuA8ap74qg2xP3x3Up2DuekjtWc5EDeW8xJKaLmm4BpQp51vQQSm3XLrFPXEwjH1TM6dmDhzNHA",
  "key5": "taqr7UzaQMHLDsv7tbYtLDfmhUfGCebmHzmLMkuZSZfGS7HDhMc29Y6DvbgJt15Cv8e6Bubw7aRGuGRxndQLqsE",
  "key6": "66YdrCD3aVSZ1HjLxvRYTv9hveZDBvGgy3AB6qtPpdT1S25zKSPdXqr2eFVHhFNhv6H7UPGgtR1LJRmdf5Mny8LW",
  "key7": "4gMBZwtWZX3UZFYT9dKW8c8P7o9gvkfVp1gruH3faVd7b5QFALyyQL1AYw8AT9N9ry2nMqxaQnPUkspon5RrT7C8",
  "key8": "duwuomzUDvzrScF63q3PLaACFcAYgCEfbh3bUcLTA9rhor769qnBRGYyWDQKMjdW7zUKB1MfHzqk8xG9hMC1ixq",
  "key9": "48W3vpLZ7TbaSjgUABQFfyJHo4dYPPWC4Xa9WXMz93N1EadGXTuRvZxmqp7aDUPKdoQYJgSAbTSjEnrXvRS6KXRB",
  "key10": "12ADidq1THZrD1L2dQfjMVoVSBhjshRk2FLaadG2rXSaUYruobjBDChqj7afdjSpfWDPMkcfiAR7538AmkDLjbTu",
  "key11": "4gnzfFMVBz26X5TaiwcQ3DFeTJAYr8EByPNQx3VvgwB3Yc3vtoKcVsfjWATqxffDXV6rdLfYgaaqLZuvk6jVx42S",
  "key12": "29wgvG6JHYbQJVfGxycpjnbdn7PwcVkQEm6LqHRFroeBxk5m9aFQAKQfyXL5Hh5N7uLbyUFb6ELQqvK8r4DthWfn",
  "key13": "W5QkGeqHbSHHHk2n7DyW5iT6M8oApFUAiLpSKACcxLb4MChLTKtbyoPSrb2k2o3Au7gUQrW58txhujAqZHR6U9s",
  "key14": "5qkNC2fYGfvh9TRzRYXWUVw15rdtxjZLeSvKmDn998RDq1yheSt85UfCPW1YMEnMD39jvQ8dry6qEfoKEDcQDn7P",
  "key15": "5HyhqC3ooeB7B96n7RdzpBc41yM7XBSFeq6f12zEsshDzNAm19DAPjnFTjBjL24VVWcfT9R7dGPEv67zsLd6mgdk",
  "key16": "5gonX56bze9aYxzMBCJJvaKZJviS5FagRqE92GFf5Vd1Ao7WC5G4wPz8sj1aS4oHLFhFaECzPmh1LXJmXcBZJG6W",
  "key17": "KcpfEEYeAGXfw1KpjL9tcwHHBnKZQGc6W727aAAEVPUVuJyejsefAWdUt2YRSLhfuFbAUSjxjXzfpMF9f5UpF52",
  "key18": "dNPCLHzTmH5GMoidK514uNeYpkU6GMgpc6nBuCMKjRMhxQ8Y4n2kPDDGCyqp3Z88EeyW4g23eY9zHt7iKYhSp8s",
  "key19": "4yTma6WaeZzxo2rsrNmJXqPYdsxhurwvh5qpyQ6wWsxfKbZTk9vrY4bffmX4UnMj6jdLfsDWUF6RzKpo9gknoiZz",
  "key20": "5Kwwh1uqSdJ82n69ueGh5DUGAXz5kL84z4HgQF5yQhxLYQR2t2UMVoh9XLL7o3vKJZHtR8mS9KKUJMsf9JZNDhgh",
  "key21": "3XLJQY92c21XKE24Rauakd6FANBV9jYX1B25GsaUvc725qq8Kdg3PSRMUXwvHGMtJkZXzs8ykVCFz31pbmDyqKda",
  "key22": "3SeBPbRJZq68ocEpZGsdvTUsiAuYSWBnBKHy6MPhfgy1eu44QTC1hd4z8dxSYma8arQJCnqih8KFBKHrxZXumvg1",
  "key23": "5bcU2ByBXtmJKNsZ7CzvdbWHVFuGFKDzZJ863CCtjWc2Vk8MspFJnfb5fLTt3PsU19kuGj6NKPPEqoM9n2xqHAFM",
  "key24": "2LTeHTxhkaZPNwHyjX9GjJg7Zeo3j2RPNS79tdkQEEYcbHL7s8yZo3ercoF5mG26CmvEeB7sLmeWp2mJwFv5MD9h",
  "key25": "5z8BBW7wABRPQATpoZY9nyAms5U1Aj9m6ABDsVuug2egG3ezExUVK7n498UXWHcZCa9pbomdcQbJx7qK8C7DqT3u",
  "key26": "5zcNg9TB3nDp51qpaqMshkxsnXAxjvc8sUV8PaMCK9hEmTAJCqE6KygHwKAZEujs2RC8grNN119rmhvLUZbpeaaM",
  "key27": "4mzcfK5d9bs3rSDKAzbwtpkckaNrPCnxsL1QDthGZ6NaHMfKNsGuUyYAFUe2ydYnHGrHr471N4fN1GQLnocPuEJS",
  "key28": "5fDTzkLQ6cuM2VuoX6cPHUst8Re3Xn5xWCkeuKYsq8QNMjjTVMccLuMTyERoVvLPutLJQzu8DdkoaYVBbks5c7db",
  "key29": "2wtPCdyfYTBjAmDwAycd8PRJZpwV7MbVsNTPiJ8GnSQCgHHNxXFNfPKM5To5bPsd3JtHqzfnNu5RYvaVGSuYEcAH",
  "key30": "66iqZXD3zoWFFfK2WjLkP8qf6hPjFvLwwsKmbWD5TV9iwHfGYCCVLkQUX1uUbu5mEVU79eygdr8FT68ekrTMAftB",
  "key31": "2FZ6KPRwqeCZ24rZTtXDbRYujsGoiAnYqE2iaNyVf9BUjBCpdwNqGu1cSd37THkr4kH7PW4yd9vEQDv9RViMzXjW",
  "key32": "2neincFRiejuBXUYshaJnRhTugojSMuo7exPED7CGJoa96TCxSzsu8K47JdosJxsKsy61cP9rNiLJKZBaH2tbFPW",
  "key33": "yT4RR3bZFP59JF8Fvw5bH7ZWtr8cYVoPaLMKW9BxJZXKLTUVnPttdEYhbvx62d8TNyqbJsSgACPUxtYWqiNCw85",
  "key34": "haSDuq837VWwN8jfFxRQwmBdj3rnu7pH3kphx3UvrbWTg5P9M2CxYRVhjcaZmqz4xetVdxYwf6xxCnJSjoxwRdq",
  "key35": "4XFy1tq3TFvBBtG9ghyif8eAh5MSzHwbRQxaWVz5gw3qEJkbXooeSmneNXy4XDjuNZ4i41XZ8sS9V96aYWR4VWKi",
  "key36": "4CCUxvKwzrwQtwEtukjBoXxHoiGwKZJadBCywkkQDd2phZGrfFnSpz69hAdhECFi8wXSNLyaDgbVc4GKKufcMyeJ",
  "key37": "56bh37BT1X8ccfENWztvznr2jrCa6h4jEAagTvTspFiVfoiZxfRuTdcH1fbTc4hADDYGkHaUWEW3PPQorvzuFEWE",
  "key38": "4r13AMfp7TyCSk4Mz4HFymxQ6SiwJDTLZNUasE9Yxc1yRzJQfBb7fwzvJV3Bp47yycuBQwBsKWrzcbiKUeWKMN1z",
  "key39": "4iPiDtv9LJm2MmADwCDAmhuWkLgxtsHkugexHNPMsmRvHVhH7Xq5PSdAJqJfhWXc1C18MsGdRnipGgYmeGojToww",
  "key40": "4SdCywWL9273yDnGk5sNL8gaawoDNGAzccgfK68s6dNVNVqrpfQwAygtbRgqH8ERg1WcNypbfA9vCmPFu6aDobET",
  "key41": "63FR2eYTy415PnjU2rCbSY7KPKWdRcgmTtSzcgxgLAqWezXzrFMN7Ss6VZqdowUgrTkskRAsct8q5Dxfx36chq6n",
  "key42": "3UFBKEHJ4GfKVRdq9bR3E9dEz9qr2uCXCzWk5MJjAvNnjBBwwdVSTsJ6uqnsraJXKfqJvYveGenKQU3cBdbpAUk6",
  "key43": "39FybN3pmWWkPvmXSmfmdUotHjH8kiVhzdKtM9q3qVxAyrn6bGCadXmgA8EVNT5enwMQKkXDJAhBTzwzQepepajz",
  "key44": "22jBjhV6VPN7yRmD64ctYKVibAseJyXKtFxZhh4WQc6JjsERMWNxF2EgihtBUT645kF1uDsfaAMM7KDTJMXTD8UN",
  "key45": "jQiZQ6TzLyZ1czcKr4mGhSWN5JKFwcnxHZkKsd1j5qtbdR4u8ESjQaFygNTcJMm9gNTbqqro5ExuN3CSriTCwS5",
  "key46": "5Ptt6P4C58zaYx5zFoqhreMfyJKuxcj3i8yvCvkvBGs5F4JXiJzFiVgjtFxDK9dbLq69rR83HVjqqopmmM4vwB1x",
  "key47": "2xEXFb3hGZm3f62XdmRLUW9vDBfJCqsnVfPkxh77rVNGRvgqNA4QYvC1mXkvjYfAtRetbbcvpQE3LqXKUamj8D7H",
  "key48": "273C5HSBZcW6MJNDNNeyvoackeobotNaWmb8Es9UVNDfJ7ZTUzs5k61pQ9bkNMUNujhqutE5VPdabrMdXyiGRxG6",
  "key49": "4gAdCVztdH79aHvYnHSDwV5dWBNo4VM2wuZNNoRQJHKtep7RGY2XVjHszuNBzRymu1m3xcALEjAMmn1tXJKQWfC4"
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
