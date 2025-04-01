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
    "5qiZZaXRFAwWcXMBaoup4RdEDnu2B7tvqyRiXbnGrd65Pnc6WZsSsFkbdRU3Ga3qk7HvSQq584pAE8CLXpvKWbWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RpvUFB2MDrbLL88VhXhs8hTQbi7jNwkDR98Bii5ADaNHVrRU4o4yAijfxSB3TzoBazALbtSp8DwuPpcqygaSwsc",
  "key1": "3Usrpe2A7KXjdeqPb9v7zg8CMH37wpBJDH2E4jd3Q9wCYbGtifZBzXmr51r8Rue18Raaz4CUbncFz9QahHvYH9nh",
  "key2": "3Uz7pEHEy9ni2D3kWmRC4h7LKU22NSAiQvsaySNvPeRgMwGVZkegZRCWHxQaSP4eP3wicwLGXejKVJCAB6GMFYjP",
  "key3": "25WKs6Sar7mPEC6umQyQfgUaBUVou8NBe7jV9zR8u2Fi9aD2t3uPthNKX83YsgBGhoh4bDz9m9DXuxza346dTxyF",
  "key4": "57UDZdAPCRqG21nz7aqu44jDFovrCv5t2nTnSGMKv8ggeedkKU6ejzuZe1UjE8jDeGkn1HquZsAhAkxVFFms6ECW",
  "key5": "7BNJxn3raCHimJ1PyqsVSU4p14pDgLuq9Je63zFJtnLP5PMAqLN7oVKTG4drUxPJ6NJxDFKNTsQitiRa1z72JWA",
  "key6": "5JabLftS8qvqHW2YnXe8UFJgz7m1iiJzkqYo1ZgVcnQkhq7EikRdeaczWadjDa2QzHdhR17iHm8282moq43RnQoe",
  "key7": "QhS6fPtANz5KoZBWSVJnd3u2fjJEMM5oaRyh52HyYEicJ5iGoeAFkbJ7UNJm7gSQt6MCexV9WkdFHQeJgmZcSrC",
  "key8": "3ZMSGb7zAM6iG8N4bAJ7Dmb5xTZVewymzQ58cnsP4ciwFVFGFEDMHnEGZuVEZ8gaJ9476hhKTrRBxyF5KFGHkib8",
  "key9": "3BiFFj9nKfAz4UBc18q39idg1yhs8MzAb4N1CCaekszQ2cQsQ47GnHLsYggzWHZScTjRXHoJpLbRPPGzWtUe9LKS",
  "key10": "5Uj7T6XQt6nLiiKVLcVrQ2vrjgZ97XfsTe152Wp8MHKqK41CHjFqbnFAs7GDR4zxTmc4hqYJbqL7ZQqHU1CUXdpA",
  "key11": "3ajybKHbYjUS1PrFVJZdKEn1xmNL7KG7DEWz4gfVan7f4ufy1gQe2sFEkkusEe5gRUjngPJELKdNH62YQs5KGJjv",
  "key12": "VAvCyoP77jLyHogLsfAASi17NpaK9ERicK6s4w3V7Cs4NNmudB6yL2HeLyTpZjwqqxDVKNjnd8bqL8UgpWoGdrS",
  "key13": "3LHpdtCp4RyNKebbVxLoowXXyvsNgNhcBc3ghnUvm5zhc5Kjaar3Pzhv9MCXUt6BF2QUiC9UAhR5uGGjZxkT6Crm",
  "key14": "5QKrmP4ynRUXjfcZxWzr85cZ9VdHBYu5PMc8cUfHRxx1EYx7C8cdE2yBCXGHmCKjCuGNtpk5j86nnEWrLJ3sKiga",
  "key15": "3JZxpxotRVZT6gEW7Xfn8AgwsfRt5kpYB5GPS7NpTaiRWDS2BuwpwzeWNqKeMRHbQZQsKyagcEz9Q3fYS3YfViLa",
  "key16": "4bggyvVmj1ZFfG61WJ59Eg2MEvBCVQ5Gs83iDWuUD2cdBVg7M9wajqqxy5idPb8yqPMDfJSXsPo3zi6pZFZzpvLF",
  "key17": "3dE1GbinPSpE3c2WRAN4wDed1BbZQ4Rz4idWDvB8Att4V1jL329pMxJzYg3CD3amAaLQfjut9ak5WMpHyu14Ai7f",
  "key18": "5avcZbGAtt6yFpAurSs7R7M3D9u6jHbWaxiHZyudW2ixEcEfN6qHh8kcBTqkehJbqgGBLymyZP3iDETxhzrb6xyk",
  "key19": "5DzRY4eC8XKWEn986myhU9vu41wKWToy2AWvPeDf5y6qcERxHBsh25YzZX8PntuCtT1ZC2ZGE8LwS3iPsqpWszxs",
  "key20": "5Hau38L2v71p4ptwvWN44xQD5VjP3erZRcKYC1AJZERPHGaBn7NZNNUYvQH3eizHDXNohzXDZbqmLTb2h52NnMfF",
  "key21": "4dML76JBTiCoav8mqqLu3RbUjFxPgnb3Ws3aGkKTbDGQgQG5GNa8vUbRrpcbo3P8ZJLM5jtgbzbRz9Ghgo3MQtym",
  "key22": "2KBAwKchFub43ZRJNgwtZ8vWmQoBGxJqx7CTdF8HXAFE2eSsdypM9vqhVB6gDbBwSnpNoTmempp8Aa73n26tfUpU",
  "key23": "5RfbPtVy3wSXW7D6Aeg8TKfQGM7StHXgk2c6MxEHJEjPHBfWn4JAU7o8xG1E8dG8qswhEMwUWy1tzVAXxaiEXw5Z",
  "key24": "2wsYTUMC5C1Rm6yGqnersAKizJz3bUfHaUzBaNpSq8Nge5XL2hWJX3iFu2GL2CuwYBXEayTde3tH7PBgd8AscpfJ",
  "key25": "4EqJ4GAQDUf2B4zwjpbG9r1jpVQ47ayVGpEZR9eTvH1hpDYnhgaCLV661dsUsE8coh1c5qQFRqZgCxVH8X6HoHg7",
  "key26": "qjwAjnuxHWkKx7THppXzQSbsNWr46rHUp9nA5Dr5rCoJNF7a3udBq1tSxGhM1xfeFmKdYuZQVBxUVGjw5o6ooSt",
  "key27": "4hEsqYMwhRATV5h5LG5Pc3bYHXXg6CyuCCknYEhmYZBdzeVzmBJR4u1MAfsAYMmEPPhxRo7KzcxAUNL2ntHHwooq",
  "key28": "42Mci8yQRqfWepxrKbq5wDhi3t9stukoeVGQ5hjADZaCLcMKCgkTaY8Rk7bkPjDFdm3R1Tjc13m1wH2HisM3ox2C",
  "key29": "2psCEoyHCTm1ffGh6aPwWKGgNLiFJEgGtrFnmZ8kizrsYf3WbTh89mAAY3KVd96oDk8vyzw8XQQVwmqWbyWkWDVb",
  "key30": "4ZGuvkeTorMkxduq72P4ZtUdBnjnmT4bc9GG8rdvjszVCvgF9YGaygv8woGXuYRqU41cjKiTJQV5DzWYK5gRC4iF",
  "key31": "3CPAZH6twD6wXUsNsEZq2mEjnPLyLkMZFL2RLURU6JsyTSAjJ3eGtvMxkgt3EqUjuP6hntfuTDmPmAxw6LDxVRq5",
  "key32": "3vVQ27YJ2V9wxwskxyLGtR8S4zhY9uJrSeja8J4L2ooTHcGRoEqc1X8gPfP2fWHcs5woHA1Ys4yPvKwgUgRbW8C1",
  "key33": "2bmuc42n47mAU9koCX8vDL37CcsVAhWwK8YPGQJjf5L9X2npboWKg9tYBZB6rBNjGADBccRrxHAHQTGuyqfzXsS8",
  "key34": "2JdmrzpsV2pi11SVzQ1HMLB29bkvSXqDPcvkbrod88AJAkpBoT4q4vgqf9KkK3LuGGCYGfczufMaeJtzJBXhYraV",
  "key35": "32vdeXi6EhJd2ukaQP4Zra3GQxFkabLrVfJMHFYrJc5W8kcGkKqzXQZdxXu8qaoWhLtsZuN8MJySpRafVBM6sSnw",
  "key36": "43ZX9DSJjPFAyv5cu8YPHLCiJEpqunVZVXFgTBN6yzymY8N3SgQgMsH5Y3NPSQa4sYcoYpboybP49Xa6jPm8xhs1",
  "key37": "5ri9FyWs3jNGJRJDaNgPMpngTEYiBbaxqfyiSa957CUcNzAVT8mDD5hkH22nRjPy6h3ccVToWNgxwQFcNDy3PK6q",
  "key38": "14mNMPA8M8Cv4Fpw9nx6RQ2RrbmBHqp2Mtj6cRppdNcsSbgNVpEBs4bkpnnDDsNgMJjwgqkfjnkZVCxHJttfFxM",
  "key39": "2L5oMxuzj7ENihs2eLkaH3EQyBjXQSPm3XKymCTkiWXpkoFigs8Eqe3ebaW8dVZbBsE9NjA6VPo2BMGEheCBqLaS",
  "key40": "21JPJ4xpLoLADSwYMCRzb1NKP9sjMUeuJKtpvazrf7mJ68wjCLagevDcSrZQpNTPxY5dDfaZFpuzthjCvYyEAdeq"
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
