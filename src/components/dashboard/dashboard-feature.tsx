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
    "d8go3KAwhTaD8c5bkuDJaHQLT1m9Vc47chsWeb2Jy1DBETpXxzT9oZUon2qVkNWk3HgevtePUeYLRD7ARHBJcPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W56be9yxxmNRkT1o61YMybWKL1HZTJDEznSfsjDT6ELQ1ZdnEu5NNBFqBujD4AfGQSfyFDZ5vJLSQH486HWuJqe",
  "key1": "3J4KwCtBvGAAA2W9Ys1EoBcgmZ8Mqfcqsppj57BQ7yj16fxNiLnd7KSbw4dvFLwky5ygAbA9bq8JVm1krsSL4bEg",
  "key2": "3BJm3JDrza6tcHicEsMTAuoib1iDaapSgJS6DJdAwJ6tYtCug3HqxubFnRiU3c5cs44wU1h8QRr6pskebq4gH1SA",
  "key3": "3jB4J8yXoRoi7qexerwpEdFWh6C1fmU4hWjMEQFNeu4fmfvy8BbyeDUameUjFMvd7oZQWzKAgk9Xzb6HGwfhMTKP",
  "key4": "3aw6SEcR2GVvjnYibQBXYXWrouNZkv3rEj7Yeze5zX9F83gEEpsXRi2meSLy8uzEh1uuiGEZNRFw1FvRbTL4wnSn",
  "key5": "5Lgh7fZEut9un4p7cn5686TiPRf9aRuKneChQUGneYH6YNBmBESr2JwU3cDv7AgfbMzjpF3bivb95gQ32p3xowdM",
  "key6": "5NSrCAvhje7rs7mFKzprFFQJkc4eH3rYYxwLvoFhRjsDqDyHXgWy9ZMi3oCjSAgUQ8UuWufGXHwGQSDCem35Yya8",
  "key7": "4SKCGKdxi9cRuWGzH6KuCLzdqfLtbCAVTezVuy1krjAX7fVxLb4v2s2Gttue7jYRDc3zfCYUTRTEgeB3EVM79E7y",
  "key8": "3dXYBoavu65M2fz2euojVR44ZCLnVpV6DGtXhXNHFNQtT24h3eM325AVjNY1WuU4AjKdRJqg8oQypzKfZZkpPYjv",
  "key9": "64ZUfogzDfayBHxvcr19qGDJaFrBJNCd8vQoWaKJ2zGS9ZjUD42snXdg2RK8jA6mTpvHKNfK3RhbcZYZHBhcMc3f",
  "key10": "3CWJWgiALhLpW1eA54ToGhQ7RqyBMj5Pf5uDHqdEb26sz1BVMDHrBacv2DnTgporTrA5qn6YFbYB9rikcWUQrbAe",
  "key11": "4kgv3KcEYXYmC2EvFsYMgNJNT1SJCdTfqqUv3dXsJRUfd58HkykrEy61sKTQjB9oBBtkb8diwi37iFhxoRHvGBJg",
  "key12": "2XYMgmcgYxa8zo5pvhPkjBP5rmKYj3QHzQgrsMjZQD3PSfVnHAtJFYCy56QzEGKAY1T9BFEoG51N3pEDVuvjtkn9",
  "key13": "5Cvyyjjnns3Yv3XWpBQ7hC7ErxV2MnrTPnET4nExphRBY1XnNnf4wV3LLGvgFvZjZkB9Lzyhd4WbnuSFHYmz1jpX",
  "key14": "J5DVRMJ9gGgwXzZWzSZA8mBPMKMYD5aQjQWAS958LgYsorQdfHqiYRRYo8Ja6se6TWiwF5Hwi41rk8SaDuDmMPa",
  "key15": "3mthQ8V4Dn41mkrr14gbrsNwzPGtM6n3n3y9wNFL4zvephSsp1NBU3KSUzSmeqqC5jUPYiset1KQ1UqaSTSws5Ae",
  "key16": "uQTzLKXEm6119jb3GwBm1g2dhoMbFCacM2BJcsdUL4tgtYXzavZqQWfcS56SNAjUJJCLZLZfDECvv9FQgunyX4k",
  "key17": "GxK5JEiaKbbbNZX8FRJshW6K3SPDtvJqMSTjh2sATvePY6CFXJhBNkMCLQGTjLxvXvhuP3TtQNYedSrdyYxToFn",
  "key18": "2xT8ViVBjTkSsqAXcxYGTJmhj8ykhm9gDbZtpG5iY6YKYFRbATdjQudGePZiYuwmKvifB7p3kjSr37JMvMPdpNsv",
  "key19": "3Sopm1KB8L58zdT1JvYut4TcJDbeWjpTk6x7gVeXHQa6apy2Vo5VxKsxfFvZuD3KX6ov3WjNJ7LkMe7spdz5ceyu",
  "key20": "4DePL1a37eXfjr731StzyDuZXC7XXreyfyt4UjMSQwbyWwm5h5JU7nMFgsyheFDpEzwvf2fkkNFwhdFPLFnnTp8L",
  "key21": "LhNohUUcnwdFc1EJK9eKv2Fqkt6euHhT7VBj9JTAeQtiEv7QKy5M8wpgMpX9Prc9WZ19Uyr6JEdztefAzDtmjse",
  "key22": "28tDG79SufQ5mskmcYE5U55UbkNgJT9Kq2gNGr9rp1CJNnU2oCtySbiywL6BhJtm5QDgDsvmk9GCgPV5XxEtBp9D",
  "key23": "2sbtsZYep6x5E5KdYJqv6UN79uufDUkGymPrQsyEKYmHe1UHAmtsRUDBZVhDEQrkHhhixQM3QctjAnnWYhZ6M9WD",
  "key24": "5U6gE6nyooYAzkJzQrJWpPiu5K1odgvSoENrRVbjRtawHbTWHTnyhsecfsAsMML5W82X79rVW1Exypxp7rhns6Kv",
  "key25": "2p3BgixvgSw3k3E5cW87shc8XonciMrcTDhLG7ux5mbW981sEr97Z8Dx6az3B2E4QV2UJSHBpytMC4PVhix3saLj",
  "key26": "41pcVvpcows97z3CiFs1eaiT9Q64tyxHBEHyTRf7DXkTHv62NYuqMcXqvrCJpXqALZTZPjRQ4MfEg686fiLu42fZ",
  "key27": "4ULLraDQXKvXZvUJAVyM4NVf1ZjC3LUNAueXdeuTusi9AAuyze8RTEfnoF6A3hCNMjcCzQgErWmQtA8FPCCttU1A",
  "key28": "3EswpkWwqgnUwyMcr39eXVopqpF4vNMvEvAjMYUZ9nnDHixM6vxDbrw8Gb8BLwg9EAaTzx18Ura1mKq5s5DbfAos",
  "key29": "355GLz4iqNCn9BMuSvQMK4qEDFbfQN4s2WzLukcCQxGGNkF6joJTDb6BFh31GrA8Lgbc7JJ8CepDt85FGxW3eDVS",
  "key30": "3KckkpGGWyrqgna72HG4eFATDcbstsSW84fcdhGaGGf6mrDg694V9ftT3H1ipjTYVCzKJeT5DyiKz4ffdQK2uRRG",
  "key31": "5NYtQXs6i1ZTX7X6RtkFtmAsYm5pQRR87foEdEiuxemvPT3PvqZ6KcuACcMambdTeiVBxngG72fsZmxZyHUPbzJ2",
  "key32": "bZV24Sksbn7L7yXUZLp3iqzz1jDGpNuKh2FegX5JFXuVhreQA3x8KULw5yJfAvA3Ay2ogWaTDaMh4M9dQEQDEuH",
  "key33": "2nK342uHZFtL3AR4ygmnm72a5Uh8xAMi3EhT6GRQ4ghcqx7qk6gyJY1VG234fNuj8nMp2VUvrn2j2pPzbBaorUki",
  "key34": "4JvS3EAgicgYx3fTuGcmur4r738p6HD3D2kx5vvU657vY4ge5UWWjZEXSzJ7oFaAefpCXWwFbAvVNykH3HfWmSNx",
  "key35": "58Cqvttrr6c25Fb6vefAtBMXTAjhqB9w6qZNEfthUfKFMxp2FTewB8MUksv3qFUt44Yg6x293AcNVCFXDS1KQQmn",
  "key36": "4NAeEcuBPjtADNDNiCFTA52vF7nr1F5Zw4xe9673f7z23BCTvdaWo8GfHSsAzUd5m3GtM5WD7FkxHiRatbMA5qLo"
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
