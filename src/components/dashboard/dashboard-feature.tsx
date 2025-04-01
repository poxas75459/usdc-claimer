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
    "4vKzgKYvD3TN4X5EUkwDCiQhNg2q2MoP4LsDbU8xTqY9PTojp6qPAmVNGoYX9waJ2SAz1KTuvxT1RLkAvo6Mhtga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgB8kcNBGSp6eJswPAihboribkyr26DPE1upEqPX7GVHsLDX5TtvA9zKALk1PgTtbEL7hvoxuToMqRDmwiEMPPL",
  "key1": "2VDcRirtXscvZqQpesLQ2BALnaiiZXUfsLxTjsRVs2t9CKB3R4SLLxrCNa8uP7NVQU3MZuTxSDovttp9HvuXDYFF",
  "key2": "toahNFYBoqvUqpgt4TC97ARq4bGhtS7UR1UE8EaGUy84yUg3NXmRjei1aa3sPmFB3v85GFz4jbN2URXDYvDtJcs",
  "key3": "3C7YyFFVpQoPtzMKfGfNsKhBswGUmMfLu5WGsiZ6d9DvfdGhuw7zwLFHZYiiUNAvuz4JGEJVeexZzoom7SuEL3nr",
  "key4": "2SFGqNvPk9QzF9LoacWpvWx2yRo34Lbh2y3X1zE9duvXzboQGBTsWxTpmbQgNWxyuUcPG9yv1cZq4hYzCAwUm6QP",
  "key5": "3B8xtab2HJAUnVEwf8zz8wyuv21CVxktD88Sy5Lezd92zN3HWyVJR6grDzYpKMV9hPcZnpo91heZESBSw23pc35w",
  "key6": "cmwaYSCYAypGHhhmYisrL9ieHxHTFABtfXSsHFNaVM7KnY6ENUnoKBbYjsNZYNVFyq9joqJU8gmHcbA7qvywUMd",
  "key7": "57aDKEDtAUzUHsnr297U5Hzd3CZqSLtMYP9tVSCq85dxaVBGPsTLZfHdN8nGuqKukCE1DSBki6ucFFZHEYxBBQ4f",
  "key8": "3RCA1vJKme2Xnxmfsh7TNzq6DkmKRzf6Wby2QVwXWF2TBQTn41KXkkQTSSBHFWY6uoMaw8iMJrd5MFgGx66UVa8U",
  "key9": "34XB4qyyFTx56CCp4RsmRLxvqBT3nYqCm3RZfUh17nsnnumcDe1dCDFX5ZdL87UbrjY5WZKUk3AQjRrw8cfzVggX",
  "key10": "3pkEQvT2uBNRy5PDyxg35BVdAQBnYxZhvQ3EKqGXvfAtkLtzXXhPBuQwap8KQyRjvVWakLjj9crnvZUg96mYG3a4",
  "key11": "S5WzUk5rVVNeP3xvxCg9DcUnoTcCX7SdQHNDDFBi1kfqdcawk8wMvDjWwQRgA5YAkLKepBtDgA6CWzLT5Tnss49",
  "key12": "2ARmvUfnVXDs6dBV5cd778zYuoVJb3FLtHgdxZY9RPGFRw4Q63LMf1n2GSGN6QhFTCNJ8LXPQH7VRSE1V1oWLvk1",
  "key13": "5LzKVkYjZxTRZh96koZuqv7xcbucuxjY9p52WXtn2JsEQR3WHB7tpXj3PkbdEsBfT4z7YTBjUCwCEJQMXJEMasXa",
  "key14": "4mbdj1zV6oFTAiGuyhdtFFpTJfnJQRg2jVDYq21dfRXnsjcGhz6uuJ86zvrHANzQ6iqAYh5ggAKfhQvuhfX8mhSy",
  "key15": "SBXUkSEXxVCNkxQD5sufUJuYf3cXobpet2C6iXfGDGGfbcpsATzTVLPYzKeGcHarr6D7mMC3j64joaeMB2pLy2s",
  "key16": "3PWswgXmQnCVTKDMfyjxNNt86Cz2zaTnZSeD13hXVsGa349GJbc1qggDzwCM2BH664PUVeZD3c6hbgifwER4DtMu",
  "key17": "NhQnSFSxE8WrvL1Qbfj2N8DpXwUqcD7cbmZW29ffXfoFGNzfYm6EuiX2Gk8nbZs2AB6PbKb5ZpPeyrsSXxCHRRy",
  "key18": "36x3poQmm4RriVBVCYqYUaShLDn4Pii1XXLtxG8VkFBaYBjHaC1XMoT8kXxvG3KYdDeYYBGpNky7mm15J57uGHUW",
  "key19": "4Wj9kddMSEh2Dqqhe8bsxECx6Ru6GjT9mNtfevK6AP9D458fRXGZMfe138WSWqba6sWTcb8JWrhLb7tpxxPjjhas",
  "key20": "3j5xaSNmVdpZ7SXXwUMh1gnx7AT3tcyyLhMvFKagWHUhvY9noYqyttrppKsanjqHhfVHfPW2Gd9HcqHPuS3UTcAA",
  "key21": "3rxJF2FkN9ATbF6URCXbs8nTD1qmLHGvjxEKar4j2adFPjLqu6W84Vxvq7CcgrWsGM15ukgPbsSsj6YqkiY5MRGf",
  "key22": "2hVdKEu2YamNGysdqNWwLLSFkRTQ9z7G71vv8ekkbcvytgiZ62dsBS1GHXVNVQ2pgKMrjaxh1movzDjxTMgVqR7g",
  "key23": "32Te9nfa2ZFV5BztCNexb9VRCSSBCVFYvzWWqs3tfdGRXPtziNWYxwpwFDTRc5cZ4fSzLJg9aCoYrp2gNzqKE9EN",
  "key24": "2RMkVEAbw6rdcGq4EDNKKg19zZ8zxzZr4CXFM5pbR96JpKjCBUCZrvAnffdABKzQve55bizwQW8YQmjpUFqghXw9",
  "key25": "56eu1iBahAZAYgFoPtkaHq3XHqjmUkUjQiTdaGRY4PhLD2fTFes7AhkxXjmXCbtSz5riPtKKD1FLu11HoXRTguUT",
  "key26": "4uVoY89QnJZSExwTBWZJxB7EMxis6J1ZRnhK4n4cLpfJ5HQ6Brq5GHjJuR3FXLp62Fdf4ys2c5suEihdmY5HWnD5",
  "key27": "4s6C73oei9U6tP3USVkeQ2YJEH3KYKozduao3iDRvPRQgWPosJzQikNycPBAUyKSCxJssb1HNHYMDihLrS5zpzMu",
  "key28": "5UzYgHg5f7oBNFA7G7aMdBGaYRKC7huDvpUvuvxbUDSjUzAzMxQoLh7K4zgLLFDXjU6tiZgHG4LcHedD93jW4iSs",
  "key29": "3Lb1hjzj2AF9ukSX9QpEq458j9y12ofUnZbpPDWNRRELEMXBtagPQeVtVu23ug6T4ME7QDiEDooqYVRzCb31Z5QE",
  "key30": "3np4ftNeYt4BvcD4A5Ds1EBhPnGQxEpytvW8R3JBZ6wkMPFUfFw151vk6GARvFx6fZz6teQmmF2nsUpLsSESLyF5",
  "key31": "4pseHLtLcSFKo4rpR2gwS869NFZLuY44iF6N9XX3wcFHPeu3uKSLkki5YDp2BaRTzrio1uJ5ywDNv2JnaZeSxV8o",
  "key32": "44kwGWTJqmsnzvg6FMDSjdXBi7sesbuskfgdYzpjkRhggpg5T6opMLXsVu32b2y2FBQ3bBCYt4RyHQyHDoMRn3ty",
  "key33": "44G1WnnpipJdna7CDSgZfcd7aiNrLtwecipkvbuSx24YtXbcMYHFeFiA2VUS3ACVR6ZJv8cTWYwqx3Y71oEx4ebk",
  "key34": "37aaVN2GWuLhDdowwt4PpPiZcd2Yq88d3baqmx18WSuo4JfjVYp6aF5yCvsnFgHfoBYdJWFWNrr8JgrmCvXUbqiN",
  "key35": "3zR3jP6xTfcaQVXyxZ44zmrZ1KrixzRPrK5BT6xiugVdZHmdpQxhoEbTxemJssRGZB1hbcikc1ee2UAMPQZdU6Xs",
  "key36": "x9Lo1gGxUnTCJ4WbU4G6QWN5BsS1S5HNqR8qvnTkbS8nCY6bYyfPw6LpEeZFqYeM2JZhsvv6N8ki6T7Y15HNfZZ",
  "key37": "8f2X3b7diUFSwXde3rybfny1ox44chSrU9reSn9uJbQqNxmxEGQ422cpeG3SxUrEy2k1RnjnWDxCygYEF8eQ2b2",
  "key38": "4cTKMKTjwYiakb97wfwAFnBWQmJKVT9En6LKzX3sMyNqMva3DkMtc54Bg5QCK5saRhy4ivvDHcBDmNuTipSTKm5N",
  "key39": "5M3qw4apg4E6AGt5R75QRMVUQC7RAN8eatzrCt6HGXYhRmbEoiLMr9Lgm46teHwTDuFQRejQjjJY7smL6wxuegV5",
  "key40": "2pnNoB8t1vZQekarKaUY87CGrCXBMsMmo4BLDqwuVQfDvVYfkEqoRGA5hv69HsQ8SA5FxYPpPtwTy5u7GDMgQssA",
  "key41": "4VGiZtsB2n191b1DxBkkquCxo2iE4Pz1oDozKGRUtdoodS3tK4nCuoGELiH2s8pnTnskcxvR365UDTwRF4N2CKwU",
  "key42": "2JoWbrUdmGHVxX1KDsR9yZjcNZ3D5sseXwWpKxT5BWPTdfbizFrF1kb2gv738RcB6C5js4wmPaHoWqWW1mEaP3Nr",
  "key43": "3ccugYi31D5nLZoXWoJuEUbuyqp32g4qfk9kjko4BN9Ks2iXZJppMgqJ5Ndrm2bakWwaQaBUhXZsTcVhHrQHuM7t",
  "key44": "4Ej5eV6A6MXdzD5qizAJj8GJAgw1K45vNQnfxZHWLGqQmzr98cnDsxzWc4U4zZc7Gk29oYBAQsLNGcYCBR5HB334",
  "key45": "2LUFCxmu9Zh29WGtjWAJ2kpSePhBubQNZQF4FJSjNSpGmMRQwuCaqNppdmQ1WkUt71Q1LXFn9MKR5XMteQNNj18R",
  "key46": "5Q958D1eD9TgMVYywjJbyP8bSsXx8PzS6SKZZQXFLUf6jwthQ6iPEHKXv1atiuuiSjSUzrw5mWhUTtSn68HUosxX",
  "key47": "3jiSLMeQjYbnNZCLUEJkKkxWZsR4wvb3tRX73WQZTTyp2LHjqyzed76caq3L1GVfxMhXmaPUZFZugtSNsnaarFco",
  "key48": "5Uqc5GJHne1Z4B8twtFasjaN4qK3WRM7DuHXcjpKQsC7PgFGEgVGKowCAgBYvyDLBqZDCVxXkdkkPeKxQbsPwqQ4",
  "key49": "3Wihuz6Cu8aq8pHMVtL9PAbaaz6J7De4Eq1SF1knLrnnRMUChjPMiggwr4U8rVfwN66XYuA3QAxWCrokA8723Yfu"
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
