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
    "4d56wWsj4NWYUKb3XbAd2WKjiV7nmko3cdMfDc6x6uW7PQMSHCBoG8YkijLA4RkJtcqs4f9KgcshmHjte5sDTbru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42vCbxwTEEcgVhpP2euysABknRzTWAWk9ZkqmV5Br38FjSqi84c6XxGabQLLWWyTM2SpqcuemHuu5FX3RVJS2DvK",
  "key1": "5t4Rino1X1KAqAUpxciGMmYRFpBiRDbyAp5iae7K3YHJ7eVkFbxQdVGsunQrBsdJcZehh4XhxdLTzeFKVCH1LokM",
  "key2": "5QmR1ETQyC7YBZ5H9KyaM5p8i5hJEeuWAQPYj2rMBM7LsQo2XLJyyVymtu2aqURXUrBQm4zq9crJMroZ12jL19yG",
  "key3": "MtWRF1EdX81dkqbRKFgMzxcUf3vSHcFwaTkH6ZQFG3y2CaHBAwHjT51gVNiSaF7SpB8BpQ2sqVycrfdaKa87FfY",
  "key4": "5Bvf95osy2kYKCp1Av24kovzrDbpP9hN5j8qPVtnXpVJok9cCiAT6CeCH9ovfp331UwjR5mmJU8TCu9xKi1aQaxq",
  "key5": "64Ck1ZQ1VwzA3cocYtfaEy61fjj6LXhS4q2NMRyZhss9NnRZzNvXErN5Kj8GSKKHHfZAKvwmPXZZTyopZXgK6v1U",
  "key6": "L5w9QysNJNGfTnTRXoh8FwLkVf36cKsUbK1je7B2eys16Bom4pSwp9uzaHHPQ43Mj5fET94xFxZwZqHwZ6bJMVt",
  "key7": "2zJjSdAjeySBiwqnBaWHeLZA2Ki62dUHVnv91hfXgTbP28CGmP6h8Dh1i9JpHodc2sBUmUyvdsPWwYnVDumvyEYm",
  "key8": "3BA84TEDHSSgJKFZCvETH9xyrdaTZsAbvYV5SGSwXoao87G4T6c3t7zuAGbY9CeGMgC74SBbxdyM3LB5t3fQ34W1",
  "key9": "3g6ySU38rt9EjzRvdNdexJ3TvvrNoRCP8Qz8z4Bhywgo9uD4HDpR2LW5DK6dNTiScKkd2EECPhf5p3mDPeMLfVZL",
  "key10": "3KqWp5GLn86VUTuXFWnmAEnuXgKMtiCRs9ztYPoJ2PgqA8dHn2EKPdCFa9GLqofKWo9SSQHU7NfdwYM4GgeNdzS9",
  "key11": "5XA4LfnmvTroxi9R2fBvQ4fYgQKrG5M3RVeC5znf1rLYwfEgpxuWyuJy2WTJbQRTb1XcQoV7d3KHRZq6tehWXhvo",
  "key12": "qBg7Wb5FZbmcXoFG6rJzkwG67UyDByE9d2mfTPTweMhTEmbxKziGydvYSmBfMZyBp33D3oPc3BMryKuPpwhTx3B",
  "key13": "2jvQ9Rv9rkWZmYBThPbV1nSexHhwbTfTtUHVpvMca3Y561v3xuZjqQz3wc85ctMPbdqxV9YnqBwC1ppn2b8DUoK",
  "key14": "5Nanen17F8LR9ETJNbfa9j9fYq8kTCRTjP7gTcPXsLWqFZfT3isw28Zt2bR1m2F2AWGuoMCXE75DuPyzgyGXE84a",
  "key15": "63VMk2X5WCj4s6JVumn8tZD4DuMyECZ6cumRC8NVC63X52c1rKKbj9PJLGpCwp6rFJWQxGunEasrX3QTS1TyJ5u7",
  "key16": "62sdKxjxG3P46bGVaFqU9M4uVivj3mWzUpqBSzzrnoUBrEH7DAYrjXhfjkB8NYQfeLwXdSTStrKSqKDQQXS2N9Hp",
  "key17": "65nA6yf1gyBrMQ9FuYcdfD8HQbVLsAjVAcfeeKgTerTGcaFjbG1BJmMNNGJ5TJkPqNziYDcoafsy3APncbjHpmYe",
  "key18": "346Jsb6nXpi6i1HeVn48roFUmXHGesRsYqx8TULd9xo3L3jtpD2eg2V2bzpc3LecK5XvEC5NjXBC7AdNPatNMuK7",
  "key19": "5VbKFjteFUK3YahaqmpdHnSGXcjZXFVssSHSQwCpv2DFL6eEQfcLMZfwh7kZjWERyVxvZgz1v71rX3khaad8wT4H",
  "key20": "5p3eWgX5veAbSxT8rMaTsoC95wQixz67b6nPet8T2XJJ4pb92zbd86Zcxk7L8UMif4VXuMHvA7KgMWFquWadQCSY",
  "key21": "3Ctjm9xyQYWZtT7seMhSnZAbpjEjRaenYK6DZNWxbqDPtWNerJQn2huXiCNb9xdpzpUhJtLvxUkzrsdcvejYdAwy",
  "key22": "4Kde7dpsVHiLzcmwGyUV3Sehf2nWCpjENurDYBJK4XWKPw2rpqd2dcPQSHLUGtkgAnJu8ip1RGk9tRc5WdMg8eMc",
  "key23": "3XtPFT9MLPdj7ofPDpojkLWcVfmXnbqsi32PdLD8ULmNFKtHJnvrUt1dgz7PeSx8yLfgx846TWnZLCqfoPjGSMid",
  "key24": "2WjbsbjdTzVX9Yr3dwDU44GtqgazKPTMu6CWuuA6nruR1k7F3T17WqPFiSsdZARfQmXJaaUgUijW6TvuSLtxL358",
  "key25": "5YupSFgtypgP1XT6J59LwTQ3DZ2wBCDrufYSe4i4PEcoHeS217H2SuyKcdYdmsHhXu8uJ7UoqfVzprhq6QTLQtTD",
  "key26": "DzQcC7PEyDivuRj5Rg8ugDVdd4uegRNYdbMZx7zHhGCxYC9ySKGR1xH3q2FVzGdTdBftzQyePHuMVKp66yXScRF",
  "key27": "2Bq71vySXQfxBiuW5SDXqu3ppmh7uDaQGcKEvoT47VAT2xcuKxYbEGSL6MVhpfHfrdZMMcCuM8WiobhqvdMg4ncp",
  "key28": "3Z7A4xKDZCDY8osc3o6Sj4xTeWziovCykTkVtqhvxPiBiPmwNf91MsoHaweexmL3MWLqMeHLincisF1auGTkwfQp",
  "key29": "4LuKFy2Aam4XdMpXdRWvFnFdePKv78gu2AteJkCk6JAkGhJMxrs5bfdSh1eg5dyusc9FesCdVg8BBPvFqsP7NWiT",
  "key30": "GZhfd9iMm7rGzFjypRwcnZwztaeJj3Xez8YDcA3kiUFWpXUGjGSHwftPcefhzN4SpFDhfWazkDCU7rbYbRcDcUX",
  "key31": "4yiGip1HcMQitaL4e7S1ytQxpoY3T5mnMgQFE39cMQW2woE9EpmQdr5rLB5gKndeJnpf4fyPnBkBhxS7YhbZPXeX",
  "key32": "4wEcqyYTgb43iuzk9PQUyRGi7WHriTbXg8tMTQwUkNqEch9PgCwdP9i9tigMhnwHswz5wPq6dXPS1SSdY6pB1kJw",
  "key33": "2sbfMViT2GRSGAA4AR32PDGbQ6oZFBrzFgbJvJJj6sowURJqzYXdsHW7ECgFVHtouVNwJYJzRzF8j4SZzT6eFyX1",
  "key34": "24WMrCdeWo5xHkKVnssgNKWWsoPtzn9x1EyKU2RbhmbTnPucr9FXwUTagZgEGT4psxAU1NareDd1X5GRroH8wQEo",
  "key35": "2nZXAFFAPd7vtMMmp7XYD2CsCwrGwsPCijZKoEHrKT3xWUtLdfW256MjJ8WiZ14kpm1yjNJkB4uydXkXPKbC8Umc",
  "key36": "4xvi1UZvTQfuyCw91xwQpBWhPS1eSg9K9dSUanPH1Kqe62Pd2551hMCSfuHqKp1g97JZsrRnn3Sw4QeTQnSofHWZ",
  "key37": "3s3uWeurbXygFLzvCVPY4XE3JyHmdCm5RvR565KPet9mwYumf8QhdgXwD3hcZzsnKex977k36fAgi8MetEjGKYcD",
  "key38": "4RQb5oaXegfRgHscDhymjtR7SNtjdAbZqJq2DEhK1P52fNTVxsaaKsbdbeEz9kBvJYn4gqhnSarQTgQMU6zLriRW",
  "key39": "2gqgkPpK8evQgeGBaTRq6kHqvTSB9QBfbr8xYH4RbbMdwfAzYVTPaFq4tK37SbvXRn6SdJjG4EMWPuth8AzmfR7H",
  "key40": "3Nj8yN1yVYDpmkHUoAiujLjLfAip8gCK1B61P1uhCTxJsCRdtMmN7Wce28TF1iiqxbzCLymQSCuT6gqM99hfcPat",
  "key41": "5RdDsrePqMehkQ2dqAMFug8Mmk36wNuFbUiEDmgKrKT6DrWC6UM6D7XS6Bz7M8Cu4S2wtT1KMdLs8QpHVAJLuE6f",
  "key42": "4e9tt2komSE2gSs6m64TxuYTxzybsPa81gZ5DZ5aNcnmJuxcmZXjTQt93FumpjsWLsYQVnMisgN1cipfDFk36QeB"
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
