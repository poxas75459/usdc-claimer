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
    "4Kjvh5HW4PZrzryv2XvLs4N1LeSm97vt2kJZMDC1Y1ifAz6TvpYdT8yovTgVCATuym9DPzw2ABTmXE6xA2nmxjSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PUN3DMhGZQ43UK5via3kCFvH9DGKsV1WNCtPa4goCaAGm5vae11jHCN5k6wYC4dxSEbk7W78MqPavVoJ2bnN8ch",
  "key1": "5dMgt4mZA9tUuxzomaT9MfmXUjiTpEy1FhBrtP9jGox4aJpV5fRgvwEvfdXbEK8V9NKwwCdLkBRVw8E6rp5fNbWq",
  "key2": "5d7p1VT3e6b6E25aHv6FsjyVb1XTdP1E3Fee2nAFtiU1j4YJeYkGhGJdwuVpMg7Pthxy8wnSePTmSnPStT9RtdGD",
  "key3": "56D7C2WksBMjrxErBe9g3JwRcXa5ksRU2QWNJ5gwPwVPrv9GciBaPuE5144ggWAMZuJQfcPtRe2LFvxBCERXLVas",
  "key4": "5oFUovBvuXveuAb1zkZ2qN1cvdgm3rR19g7vPTUwNR8gLSwHTT65dYXittPyUGpCxbuajzoeNGfjrXBMJJkttRqr",
  "key5": "3Mo5uF35PNMWvMCLYS1emMnQhXsfqyQGJy1STWVdYGxJzL5BVqSwAG3N29rBWMFYGRrXz2Q8ofhHcDQPYahucnpm",
  "key6": "5npsMjWJcz7SMpiCt1nEPm9P4EGCBfBqsMEeyEBJQDdmfJSjf1BgfoXBD6NET1ffQYgcBY5SbHnbB3N1PxVS1AmA",
  "key7": "5K2kUgWgBHoeqq9Db7oAk4riXF6cjSH7Q2awBSu5aCsHc7gMiT18xgPQXoLiq33UyTFFfhzKdQqyvJZWzm7SChp2",
  "key8": "4v5SzNJsd4ebWg7UcPjHqFfcDyye3SZopxsbwrUDjGwgLmaUHfVRLhPzJy2YMVk2VbzXnagZ7MVhBtRneiuMPTpM",
  "key9": "52AH1Uo9eNJmG4HBr5e6wEKvCHvq1iWz1K6TwjbbyqBN9Q3Uq9Nw6isCu7Q5g9zVjurcYDEGM41aSVYGLEU96PfZ",
  "key10": "2ZfD9jeN2QMbh6yNncuMXmFmm61i8PGTuRn8n1U1NR4mDxouPyD1wGSrMvBoByvWLWZLE8aYG9VYnarCPwMNccoV",
  "key11": "4YDymanDmZigyHhN4HYeqvSHxa5jfjXVvNaz9K7jjafjpyeXXNCEAS5kJnAENLzQTSqN3KoCEvPnxJvKQhAJ6Sys",
  "key12": "jj4ym9uNiBLnqenzXa2HBxXnm2mkQuVEzUx2TVZiNJzkXcLyAGcrGcentw3SUo4G4ccRQQCG812GWkvpqbuVcDR",
  "key13": "SpaWd6m7ukp2EZaTJpF3yb5RZwtPubLphrWmyUhqiKDnQAjYwasgSZbbzsmBHgG2QXPvUnGTWiJkKrTb2B6HEPM",
  "key14": "25wgCgbtbsdwiNStGPpAk6MxgRdK2VEoay8soXQDLmvq4YjWR2KkFWXHejWBwLuHZvncA7mgmHgNGJRAN1C22pL2",
  "key15": "2DCVbScsj4fewaWiLHHHNEci48LhGhyBMkt2qt9W9qPPBYmzjSEp9DFzVM1UUk2gQXSALUfVsk4W13jNQ9A42x5f",
  "key16": "25h8Y7tVFkJcmhuopv5bHh5CfbH1q1SQJgU8yT1SMzMWGHj6W5KoL4fNVfewsUVzJ8WhwphcYkWJU8bS64t6UNWC",
  "key17": "cEWbbFhbD3V4h1vos5YhS9quoWCrPEEoeoBWKdpgTyVco26yg2qqwxw48XTPxD3fmaMiaDYqscvkcYB7xXSRLst",
  "key18": "5JumN2iabCxgeTGDmcxkP2KdMHj7vT7sxv8CoKmrbnkCrRVuxHX2PmyhcWrWq6xvQ7JAD6dgf8ntfUBgYYrgqcJ5",
  "key19": "2mxXrAF4G54wGBExNwSqHbnJFoSZuGmR41TydvDiRJpgw97EAo8BdrTZbM1AJmMy5rTVufk2apqJ3pP6VFqFQZtU",
  "key20": "38kioLDieULmVvc1ASuteN7QnycfFdhRA6qQFrCinGuhbLt5yrGDgc2b94AT3hior26hUtw4HikDgdNmCUN9BC7A",
  "key21": "3iLvq6gFjKprA9Fo7dzAPR3o4SB24o9THPtxMmyWUobuFUtwXpWPH9T3ZSw21pawq3YwnME7fUYXfJpc5VAPYkgo",
  "key22": "2C8gtk3LWTorpkqZophmBBs7sWnfqRHt2r1j6p9oDUjGC8ZQkX1S4iTeENqfmPoecsiD2FU199XBk1zUwMaTBzbu",
  "key23": "2oQC3FXGMueQdbRUywUtfRjw35bKTX8tnjXq4V5ucWQMUBTUf2pp4Y7HpxweEPkYuRYyPVNT5d9GaZ6pH5D75wnv",
  "key24": "584DvFt3m7uQWf2M4AB11Bv3zux2QxBLq2XTRK9wf9Lh3MDoffqUjCVyWvY3sBqsovB1eM9Yf8b5bDVstmsFSuCe",
  "key25": "s6bNLDkqhjogdGA1jm3Kf9uTr54zj4J87LVWZQqBAS6zSC1LdSKxkaEKEVfPgsdVRnxZLwvHvwJrmGzCVMBMm1p",
  "key26": "5GYuykSaGBRfDYKbfuTKQZ3ndLtAgvhT4GFyRDNx3yc2NPmFuDHysyhYbSkqpgUCfY2kPvVkdzMUhdya2C3bJnyQ",
  "key27": "2Zvy5dggLtEx1Qk8Nxwgkp3zU3bSXJu25NpmWuaiRJW2Z3dXtAyHqhPRRA5QXL6o8d3n3giexZVQGrt7DRPRuHFi",
  "key28": "3up4U9uZcgfZEB5Y9QDnUT5TENbmeC4iZmAyoNESg9vc2ABdBtq93bivoTn6E16vteLpX4rYsUM6mAdCBtkGx21Q",
  "key29": "4DJtRQEmoxo5Fz2YqurQzFM4tK7qqPenXjpfXKKSm1sYipHSeJxsbFG2kk5svBXMJPHSCVZevYfUsJV3JCAMQt1i",
  "key30": "5beXjecAzbAVasnUnckB5h35qeK9EgcRvxvYtGQcBVzFz1PdjWDW8coC1pYSkkuNKTGHiBk8d3B5RZBQ5F9yjHuT",
  "key31": "5H1rxk2gRtVbzo7PWbFhDpHqKDNdUixBQY3rv4P3AiKBKoAT7fEvdiwsHmmcy34WWNi1iw6TGPfGMnvPBXnFthGq",
  "key32": "kZGQnP82oE8TTQUAZ38sExy1EBxuWRfsxGHoYYtgejAFryK8QcVgqEq1XpBDzu5MGAzmxNCSbX5Wc1CBneY8bZz",
  "key33": "4SRFaBe4Pb7CGJZKGSQQk7V4rKtMcWq7yM6MTdETjFvFexmJyNhDvnjx2H1zis8JAv45whn7TUcpYrsH8XuoqRHF",
  "key34": "65MxA1kjb6FFAhn44HquyZYnMEQr11wPeGDz5U7Cmd8GQG58rkEFcjHkMUonPQaxYdfQHwNiWkEeKuRkuzsSwAN4",
  "key35": "27kkYE4MaeduQ4m3VCLdVGSrGwFZuCTYd2bUiSbeH3BkV4NyPKcFZDRCwG8Ys9cUSy7xnwsjVEhT6bmu9mpjpxLX",
  "key36": "3XBUkDYiEz7bpLL2pkvH48dEKxTfyf5VFR4jayQDYjxzseuj1rHgEwoAbV5QUxQJJKrNqu8ruXwkQz7e9BrkJLEs",
  "key37": "57rdxxwwXeonVj7eGJwrJe2oRc28wjSG1WvTETsHrbXdzCe8aP7EG3CzZ347L82GbRD8J5UEntMp71o3c6sG9Xif",
  "key38": "ZAW82MpQPRBwYbpkua6183pmx7F9KDBDvA9qTaAF71Bc48TgB5yCEEjK4Lk9vmHKdSy2TmREsKkrCaChY6XY7ap",
  "key39": "4FWJ4s5DMFJ7wZuE5ai73SLDsuTbcx6JaNSwGsC3tTprxgzKpJLLshHU765BxKTEF6ts5zVJn3VBwqahSNnURfYB",
  "key40": "4pJdXYAA99AbqZt7nGjNtTxYc6PHdJHgveSZe6iafS2QC4HBff7LUPkZmGzQX8sVrC8DrKwkm4suhK3ZYepRmFZi",
  "key41": "2SXhYwvjxWCKNU1PPzcp3zq8iiZpqkpp2x7cy9sdF5YGHrXdX4a6igpKmHWPZQs99xRSjo8gnCvxWqDNtzhNDKZM",
  "key42": "69wq5ttEkYqLMJ5q5qwNMjMHhUDetvk7nu8t8sqeGnbPpmnoho4rKVksVHoAKApPAfHGWbpNiMRx7sVmN7qr6Ju",
  "key43": "4jS52WUYad1kGV5pcxrLVFhVTZtEi2n2PHHJpgb57MyzatqC2HXuz79gYUGdvAUo1dmuuc7xD2JPWdsJNBHm7VrJ",
  "key44": "21ZNAZvjoTx7UoCGEVSB4jpuUzQpGsaE6vRiDkV2HKWdgs93W6eQCovx5vKdSKgVc7QpTpQaeU2JaQM2amBk3jxC",
  "key45": "2qGtpnUxJTwuZUUHDypHuRTH2a85UkXdZg8oZg3ZK2wHL8T3p4hT4w1yAMXLdyaJZpTnrwRqbyTB5UifxV8vkmu8",
  "key46": "26j933rwByny5rtDNxRi9wjnFh5Lq9wbAndEWde8JJyb2vUPYhoUUsX44X6v2ibvVw7V3VHhjjszpQSuqx7Fx1ch",
  "key47": "2F41yTnpSyLEJEsK3DwdQYt1uSzPi6fRVwSFxwqZHpg6ewGkU2wgEoR3ypBuFGyiUtXJvVBYr3XyKLVhQkWSJGPd"
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
