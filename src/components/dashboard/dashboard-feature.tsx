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
    "3DH9hyYBARmvf7YFGjK8g2psP9DSYbhYVMAD1yjScZW5J3VUWGshBUMcH2hsCKtZsnmSGnUhkT3VdSNCQmmdtcmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKPV1MpXwjY3jrbVSzg7i6gqSQ9ZY7PvHP7w1YXevpo4hErX1b2ZuGo5tnsGmG39N3pcqU5T43j83CTHGgoeFu3",
  "key1": "2tLnnvete1pYqFx3U3VXimFaSHkKhVZL923ASEWSdwmW9diXGcmdnHvsrnXUVfmKLpM9DMT9uDt1hdzSPP4HSvYB",
  "key2": "xr8JfNuAMMr6R3VsC5U6K3tgfTFMb3tSwp1t7ZQG9GXB4XYP8CD28C2mhVEgs3nCN9PVEZLyrQ6ymQQE7Pd3NAg",
  "key3": "34UrRnUojTbMQTqVYV6m8eJBNwgkqZhr8SBAEscS4p81NPNhUmN51XoxiYcMaZz7LzNacHThQ943FdJQoZG25HK7",
  "key4": "GPETfqMaXDZeW1YLLHDmYkX8JHMyLZUEphoEeZPfoUqoLkqYMCtZtaN8moQ6pYh1RDEWmko4QjXnyxwspGKK5jG",
  "key5": "5oyiSLqjpFUdZkf2QySHay3iepEQRq69Fum9Z7C87iGwmA6UpZxrN5t9rV2gXofCdst2cvcfsiXGmowzt7hguNmi",
  "key6": "4UgvganMikXLYUTHzVkmzkS5MpozTzCF9d2QohZ7yagDxK3RESmUhqG6cCYPXkGPbBVWXhyFKitcaRDLuwGVy8ra",
  "key7": "2RnLBE4PDCWqm2VuyYcdz4JV2ipxnAs17LT2u3AHBbsjEyqa8uXRAEZFejfaZY4aquR3vss8opMeTpXg8PUUvQMh",
  "key8": "e2jnbx4GssEA9Tzn3jipGYez4G5Pcbqu82P6RwBcueF69VkdPqSbYKzHaUxcwhCHUiX1EHKUXqmzbwG7Y7wqt17",
  "key9": "MV1igQXxcsWgqMZhxkFoGo1QikTGFkLqqTsgsAisAgN3kUJ8hHbxTBJdxfdHjUafyfEsha9cZpMYiBZNwQ5RHk6",
  "key10": "i9PcRkvJL9E4bPZmHHqvUTM3eMpyv3C5zEUMMTE4pno4mraUNtdFuXQtsqsXnJLKsBdQyyucLKLw2L4b4iLBdNg",
  "key11": "3mDh6PvSvSQwapM411zww7oCQZbjX1HkVffAdjriLbnAA1n5R8Fu72UctGM8PuUckZNgTJjWk6PkuCntNKdbMwtc",
  "key12": "37VBiABtWo3GBkC5zmoRHL8PtZdbzoTjq7NKUsc7HLpUkuxg4DScTmeBUVgibVCXLWTce7zPtNp2xGJ5omF5D6qX",
  "key13": "2AyZSg3JftA8jXBRh8RcaFUvnGA3EDA3zEGaHSw2r8eoaxWTPafxy9d53dRfjWouKgbco5q5yNC3hNsM3Dr7sxvc",
  "key14": "5UZFgG4w3qSG4Ug7P7UvoNZS5Tb8hAhUtMvWdZwPr96UeHcCumK1QfM4n71uf6pPC8544fzP5eur4NQmahe38ebx",
  "key15": "QxB6V88EUShZedEE3pJ17y2orBQ2hPa1PEi7WwWZ9mU8qycRViqZc2RsJZzXxB8z6Ses5s6LWPGdSv1ieHhqfSE",
  "key16": "3Y7ENUMCbbMECbKCDniT8puJ3wxXWUEsUYi8Lm33RDTprJ8GkSToK38NS46wHL3fdxn7v6V7ESyDtPuBGogk8hT1",
  "key17": "MYk3T7kdjxzyTsCZohXq9DtCsg6B5XXL2cXiVgqrWsRbw5CDYwfLEnqkYHXYtRdzRRMKwTGdq1myifkfLbThUrQ",
  "key18": "62PM7dvYDEf3Pb32MAP7A1zcPkTLMwqmRrdFQGXXDFXdDXdBHy1TqQeCVF1APiM6wu7cCrKfAdNA8bfzrX2G4dnV",
  "key19": "4sixgeKUhQq6k2SGQU7AbgNEMJtH3UKL7U2dfkog99vLUHtfVDRgmZ9ifcnbiDschMydYEDo9PXFHiX3BSp1JtbQ",
  "key20": "4Xz8SfaPMoPmy6j2kRfKJyT3a7NgQ5JoJsoa851N46KoAXRieMHvZ6kwuzvd3DCVbVYz8zzhtVuhu1bTq7hfABqa",
  "key21": "2AxeZMGy8bkSLM8ijmeGNpWBeJwNq3cKT8CzaiDsm3fXM5cHKxuqvkfT5L6SyxycvGpZNWp145ZKaPNLnMd9mCwE",
  "key22": "3VatMaiGNYGwEWcpnqhuNj5VQdhXVkkq1ACWQNhAfreFqHeUtHWPf3k97zHDu3GEmtb7K33cUqEyR5PmPThcbWdD",
  "key23": "51eNfLo81nSV1psbrgRYUNoodetSjjyk64AoDFUAgEyBeqtrbFeJLqxnxaRycZ2ym94aLgyv2SEML5NSsGDpjEZG",
  "key24": "51h7cSNAte2UJEiS9QS1wy44Gzq83sqFqfHsdpYHsQLQ3NXB4BBTGAecUbGMGYU6PhWcNjNB9gu4QxxxdWUc5JrS",
  "key25": "2cSNzBB6hz9P1V6ujMC6shyz91UNkQzTh8fBhDgnZWfzMQamoJT1dY15C4MQnQLwayQV9jLJ4YBi6M6voqYBCHuQ",
  "key26": "4pY5YBU8pnVVeithcE7xwEjYTHUaBWhDuDpJKitsYbRWHrW4SffPUG7dZdehXFVVa7pfoSt7q6VBgjHdncKp36K1",
  "key27": "55b11qZiR6TuGkgVCMNxdadXgQKh1RvSy8b75aENJsYRStewm6oKDwgXADsjf6QruqP2JeZ9n6QdL7ZmTGPvKGEw",
  "key28": "53p5F4hRGTKbdpmRCj2sR3PZVKNsoHzjV9Dr28xZy8pUM7C9WtGq2bwcoH8bLPzLVB3K8bdh1V9Xm1ipN1qyaeL6",
  "key29": "j5hjxTShUi2Zb6n1NhC5vzQBCbeq1auypUh4BWbwhwDHoL2ssYe8j5aw1a85To5gnuq9wS8r4LjpWU19qLKzYgE",
  "key30": "FX33y1NjJJsToBwuwQS13vvi9b7by7UPyTwGAuMPpjuwk3L92oEHsrkreJu1Dq5LXomZw6d5LRYQo3C1YPwensJ",
  "key31": "Bb5UfM2xLhyDXSV6C7njcSGN1nXCEDBbKeCozeNuSSefjdbpDFZ98G5DT3JVeD3FBcJqpRbjzSTyyS3jVSjP7mi",
  "key32": "4hc6KNxVKQoLqVS1NAeZsPiG1yXfHBu6BkybPy8CCvPNA439tZ3PxNBfuthwYMVCaRo1Hzwbkrdon5u1Nv7k9bUi",
  "key33": "2ySey4SKLFoWAFMPMGbkZUDG8zCTkSAXZKjX7DgCccTwunRjkt77bfmT5zcTEJxJUebDyeub1Ke57XKyhNxkoYXH",
  "key34": "5MbjSv6cEHjPMoE9mPd6MQo4BirP4a4fLBaRtvjcpnfcp9oJUXqCytB7eDMqEBdssmcvhp329ZXqLG4K5q6Qpr5W",
  "key35": "5e7ksY5K1DQRhi3YisGNEgdz2CFT63XwCwTefuPWe1zYt8FVSyFJjQsq2FSjFekjJyAv4jMLSLkWX3K3JPPqHrw4",
  "key36": "3AvoxpHTAV2uZKWNLcS9Rdhgj3cyrF1Usp7dDVAocD129PiWet5WVwSaL1uSvYU9PGMoriVmqYkjFKJyySmiztju",
  "key37": "657aMaEcvdpRw9tAimCGAEAWjLUUhwJLgtcnyk7yGygjwc6tAm4Q8Ru2dkVS7Qiq6w2rJ72bzyFahPc8PYjDnUKF",
  "key38": "4Zi2VzqJD2fVQy5oNwZ5CFCJjizaqchuDadmSAwSN8AKcEwSFJ85KDDAJsHC8AqJfuueEFnBcjFThNMi96w8okUD",
  "key39": "2R7QH9vn2NUeyEB9M4RUM5WZTqTCtVS6LZLCZicCBvXF5p8JTjNp1ETdtFBQnoSQZoMZY2Ttb3x6GtRnhqdhoQG4",
  "key40": "4oDdFghPFTpFKgJzgWoKHzHw4hQvpRcXgYu4GjfjcR9oodRyktYhAPx8xZs4U79c4DSiHkm4Grix48tus38aeQp6",
  "key41": "2sH8HwRQ312ab3Vct95hnaFDBN1aSetU4gYyZGiDPsFf66QSx4wiLhjuvoUDdqNQiq2bQCXAmYTAg6etv1RmvGuR",
  "key42": "YgqsahVfsjRdJLi2Mw3nQSttZTZsSg79ozcidM1WMgseYgd74Tnwdrp5fTUxceSXLyNzeMx62HvByxTdFxFtxFd",
  "key43": "2rS192FLikJy9hX8imBHEQcmovojgz6QRQtjNzDAiLuWVXgMJNFdAgLjU6GVnq8XPMgq3YCTn53VmZr3vWe7Rgw7",
  "key44": "X2fuRFwzjb6KcERPj8kEES48GxPGjCnJVMEcFcuqPW4pyQTBiyHPbcL4rau1hEbHNcxuTp5aLAptvLe5jXhyRDB",
  "key45": "gYHvJCXRfzFSiBbHopCeovHd3WxHE2mor6Q9zLN8Y8dQq3w7hV4FHfuXHVsLa4TL8YCpSDVVwT9gSq9tjLBJQ6M",
  "key46": "5ac5WDazRSibLqvyBWfm7aKgaaMcuvUAxR4CnLX5LnPmHYYRErXaWNhjVMboGoxPJgU7vaGc6Ekj34bXvgj8NjX5",
  "key47": "57DDJdFXkgi5yi3ZqKj5cDbs9QH8jCSuA4Pd3eGpcT5t4AvvYQqUejp4pTjtLFSpAMN2oNj8SLnZVCuzo1zsKhXR",
  "key48": "4JT5BtM5uEeAvA9zGeu4h1kk5XV3yiykVgufXin1j5of81vqB7DtJrwky3J1UkAbW42Cms22y4m3A5yS6zTzjtXa"
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
