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
    "4HB5LoGRTPBgM66zn3deMeisW67TmFUmTqzWH7kCzKiVi1dukbRsgSzzDkY9ALSRjzt4Gi2B7rwyG55tMPG8Cj3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HyaEQdhrBEYRhJLmXHFAvqw1FqRk3GFrw1Ak95mEh3i6yz8CCD7pDSEHf1HCgJjTnz4QhPNX3SkqNrjgMEY8CX6",
  "key1": "rcVW2cVs5wFRdybNBP44kJDR4icAWTdHWuhHiFtAxEzMmTHYePcShXb4Jdpvw9343UcenEARs7EVt3Vp85Aobcc",
  "key2": "57BA3AB46hda9g3yWtAPCuPDifYS5dWUwDcaGmHfG5LmWQG7dPJXWNiXCpsf41zKJuZLjPYqPXSCLJ66EU9DsSMR",
  "key3": "53Xz68LNGUF8Rd67WabBYH3PRoui8v7kVkQmm8N8SnAmVXaCz29EXuyqVEWLg258xzAQ14PqnxGeRR4Xrq9L6rjo",
  "key4": "4opVupfY8w12HvAyXBnwfWZZ8786DkGykAu9EvurNq5rYmqYgoKtMWvSbFdz8a6xkqGJcyS1nVfS4GR2VB59mDAZ",
  "key5": "5GVySjomD63Dxv5zqAjLTyg8yaM5Etk4mzM33NgPEHBT5JWr6zSWG4FyDXtCb5WV3VFpQZjYjfaWS3DqeucU3xoY",
  "key6": "5nsgCPmbnX4yqNKJiGdktycGnWLYt7RF3oevi5wK7zesg2qx1RdTfgkLRP6RyB5uTWuzWvvU5MhvbxdwDfa9i67K",
  "key7": "53gfetrFhsrTpwEwYwHisPtbg6JKn28KhKjjLe82f7kKooCui9tn1HSFbKJzwdLS7g6YUiS6MiwSVgv4GxLGMSSW",
  "key8": "4wXU4YNaZceQBxHXMamj9HrnU7cyqEFte4D8Kfd8xHzCfMisg73zgzwGDKms283iEs1bykjaRmatUwicZfXF6zM7",
  "key9": "3VbBLwJG5TihLtmRXM5qirMJijYmZiwbtP4RKkqMh9XcoNRHg2in5sdcxjfvM261ED3poHrqUuMpbjXUoAtFBpxT",
  "key10": "37hn6hTj4fxTxDeQi2hrqQpuV2mZ7fV4MAVd3sUd2mBQLpasrq1Zsr8fg3YaycLwGD4RmtQGifVnyJr3JASp5DcY",
  "key11": "53faDpqpzbc44BNYKA3HBFm3YvF4KdqAfKzKPgWtsAjKZ39KqC2cnjG8q9omTC2eR1Rf4aBKq5iYJpwdyEL54bcg",
  "key12": "grB3zxVzuLm2PU49gQB7pZQqDTUqGx6vh6sQeTsS6WhB2TjM4SinFP11Sf7XK8a9pPEQRiCPHM68JszyrSZMuoh",
  "key13": "4X2ceK8Ni7DFDedRFihB16kyvjzgo6m9yyT9CK7QRbF74YZkjAEpkUFAErT24jQb3x86K3fkrCCJexXaQHehV8RS",
  "key14": "NJWGpZt1YHsPjAQk6Tcf5iFzoGmGf4gDeQEh6MamicpPQZsWmPQesH7zXzGWfQDpkawE3fMZuv3XTcQrg8HbnJH",
  "key15": "3SqBZM96bUJDkJHgqnugV2rQYyVNXiU6VtouT2JhcxNx5hykT2FGMbEM1k7rH67JFuxTp8t4fPcovADjtVDxBLmG",
  "key16": "3HZNMaoozfBzuwoqC94G9Ea3BMsQNAtUgsw9zybu32jPgVCghRMUzWTRxedJpqGCqCSp5eFwuq7S7q1P8PQRUkVY",
  "key17": "4PN87UXWFXiYfGxExq1VTVuB133t8V1FiribXDSNPiJLHt64NhYsnC8ZBifCnvcaqDjpo1quxN4Sc41et3gNwD5Z",
  "key18": "4Wa8sZgPRti82jEo1Xr26Zq41ttH1V3z6yUDHvmH1MqJFLWMo4WqkapFaGyNXMkoDEncm6FVbBhNu6gU3Mjek8bp",
  "key19": "5qAg8qf33ZLBDVhgkKm58dF3cpPDJuv5QXygiHP1rMkzzp5AbpGiWj7tc5KyVSWvYCm4TUF1c4ZtwRbkREyfF67P",
  "key20": "4PeTa6uu44zEvUKV3nKvzeDqMu3kmmoAfK3P88frV7y8ApgLdQoW95Y86zCjWGHWoSKJoPRoPzRuF6uWoMawcxD6",
  "key21": "3z4eYg4ZLEQkQEEzSLYjQxaWadKzmJkjB5sbD9P4jSZhCVvF4a9BfWUmYEWB32LgvoTwArZFiTKyWArLsXNGcdDJ",
  "key22": "5Wjws7LSzTLvCruiQiWRqKUy53ZtLWN7kcpy6bebMbQ8YrAaerhjF8ArKGua8GNFSDtj2yAhhBopPvhTejokeKnT",
  "key23": "3AqsuZD9A1Y2FBG2dDpdH2KsgFT1Nbwww7GYu7s1Q93xfLBPg9yTSQvRxYj8kGgU5V5W9JUrMz2mfbpq8oLLfKfZ",
  "key24": "2K7hp979Tj355Hv3QTdmAmAhvGap22o4nJFDVkjUy6C8AiythrBz1D5VtRVZJQS1W36oQhmh7tR1DVibrQn8rHwY",
  "key25": "5icMaoj7nGjj7nsKwi7KP1qkYTqhzn9gXHsCe9RiAixxWygYBrJiVoN2dGfZzhd6sBdi48atYEqiKRGmd8JRGxXU",
  "key26": "5MrTDUYPNe6Wh8eYaYnMbnM8FaKBHEkgUZdS5P2yjTSVsg3nqqjPGP8QyuxZpaX7SngT6r4XaEU4Zxher9EkJM15",
  "key27": "5nTxA2swP9ZX1c5u6PUnoTmVhZ9omVQwKZioPu8RpNHknxQCfdAPF4UxXdoJb1n3zoMnNd59vgWJZ4kjqQz1koHq",
  "key28": "3oeMPU2R43x1M4SijLDXmL5tWpLuSmfdVNyv94GeVWDBvXRWNSuwgZPtt7tTDWX1gTuRH9hCyKF7UFzbi4k3rcNr",
  "key29": "EXdohLJJit6pQCopUKLpEDNKRhUBVS2y3KiyBhPi31ThDyx1g5b4gKVApmMqHmiwiqcjzr33KuCqrNChysjSPyA",
  "key30": "3h8UZhChLUd85Cnd6FFYgMmxn37nbNZoNsdpFRsEmWMA3JKhCmj4B5L8pwNyQPncVAnLHjvhS9FkPc5ELjb15imu",
  "key31": "2fJUFkeeXbyAbctwjFetwEhUtr2LYPabgf52v38hKjgTS7KnsEwQseoHf4Vk9FHE4rkEDBsbpweMjizkxjWzKJks",
  "key32": "61XhghrRSyoQUksmx1MjQM5qmNKP4RdT2f8EMWzwFXs1KumrG5CUi4r6DHSsBaxreGkQakemRJ5grhoywxArnRQ2",
  "key33": "3pkMjvuYzaxWkJcB9vho8ndr3wFhi8DvM8zqTVcj47PbPMmDfe9CU6AHvvwQbUJo35i2t2AJCdUy89euCTRkb82d",
  "key34": "3JfLbUWhahVoUJYoSSWpQvnAnVMxaCzi7Sm7UWEYUwz8B2jFLtcbqR3mHggTLH1JAUUZuD3XmnBAcud2VRDYswRR",
  "key35": "2hhx3U2UQPDNA689jdhqJmrr72eSvu1k6j9cxzcAMwWPzQbfRbzYNfutVCigAhCuRgbp2r6oBpz2FUKJ4u7hXcuR",
  "key36": "5WnRWF1aqEJ98ZsF4fnrcJihB6bbJj1gMYWAkoHi2tQ79MW5vMwWKvBXAiytdEigB4YsWMbZA1iKJZVuCpN6Y5Po",
  "key37": "4nKv1aKKWBtqmPJjqkBMCAv4FnSrwHMQjNW4WYgSzpGJLfaws7jLju5M58vKYKQ7X2CZceMB19BfUDrmy81u59CP",
  "key38": "2CwH72Hw7myGCFZhRoTejwCu6ymPSFq41YfiopBX7X8ZV4cBbpPqxbDuM4kuv3FLfqKGnw1edWWPdGEdEHGD8u7t",
  "key39": "2HwHh4uNErXKqkkUFXT2qDQqZnbi6nsdhZdacZmnkcV82P5JTmVZ6n5m9VLnLkFmAzQkyGdE447WxkW7VDNxkKY6",
  "key40": "5QYoWhgDJRNBdKFonQwBPvQH2mgKKEMvCxSeNXced5BgEzZgnNrziBdXwE5WmnRAVY3L2gY6v74XuxGRHNS4pRwa",
  "key41": "22s9AasNYPYLvYPqfA3xQ2JSuJRt7m4TNLrKC13DdshQrFYRAo9tDxyYgXoKusi9cGJYD2uFLptzqA9DfE5NAkAG",
  "key42": "5HbdHbT9DMmv7PmLJjd5XwnAKeGCp3UcKW5uZSD8sD8MaADRz9FopgnFoVKQ8vnv8jeXeZRtZjKJfNu7gT75GA8H",
  "key43": "2ZYbG7EaasrjJjFYfu6bzZrvEqNQgn1XZhTS19f1cHh76pLA7gDF2bV6cyZYwyTrWWrjDi5JubX2rzsTERXKwy6v"
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
