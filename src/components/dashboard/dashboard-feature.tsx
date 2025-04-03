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
    "4EpD1WrqSUJpPQybyGYwNzygxEKncCw2tLE3qy5KKFPSDtQnBstnzFXGUQStxtDRFwoqRh39s1AmkYVZNJYLNejH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mb4Q1BTauVer7dvVgXPi6R5ERC8pNGjMRdzaooemUDMqDog2rnp5sx2aWicxtG4xHwc6xkfRZ2wyF4Bbx7iSGWM",
  "key1": "5TjVxZ8Cgj7bCdwA116Jo4WXY8rpBbEVkgupdrQ262p4sTuZLZ9FA8L55YWHVVcArbQGqw83jpND9YBjar14yLEh",
  "key2": "3NuMxD29XH2JGAteParMnJpjdE6FxXTZdeQhmhnxXdpAqfCnvbMAEfDsXLFPwgZ4nvHyhu2CSdxq3vyaqY2NMTQw",
  "key3": "5seE51hCgqctScYH4HwoWJ4Gm9MwnLuA3knBxT6WfnsRBGbZjqbM7f9VfbHE34daKnkWb1CzEU7Gs47dtxYpDYAj",
  "key4": "2yTFTVucAqnYKmTS1ytFbU5kL4d9okT7EekPHwaSP3EDSMBr7GtifmhD42wAaATsXdH9Ko9GEExKZ7CQTKARU18M",
  "key5": "3HXJCW2ihwshGSX5dWqfYxNo5mfV345gjH553i8DCshdFPBstGt6g9ZvTZDMLGpCcAUa7QDatrq85CUUEWNXxNvm",
  "key6": "45pBhD2kvVWQf3cZjpk29DTveCbs2AaHbY6rMmZuCpg9cSRakThH6VcjuiLKnBgKUttUZ6YreM7HcdnjXaSVCrfG",
  "key7": "VaRoDQ7Qoki81WoMyFX6tWKSrCsWtJsCyAjMtg5P7hXBsVJYmhLLCDpKzRPJWnRc6YsmmL84n1LnSHtYXaQ4yyy",
  "key8": "ya2wBWf49kYb7tgBt13pCy2ATgYoHa8XtMtgDKmWg3AZ2DrDHzj1ntTgEsY74rLcEUHX2fex5BZjrtFMWVEJhQP",
  "key9": "WPsWos2kaXA2kobxWvwDfqzgPM7zFoYjduJeCKwwwWhtYy5rKEVHRnaKgFjUS1WwfzobsuaQ86ESrjtnYF6Hei9",
  "key10": "21WNixMWxS8k6VxgPT8znWicHteGwuuv4KcwwV2cxEkCccP1hw62zrNXpYzrPP45gxKUjZjWS2pNmb42Tdr2at37",
  "key11": "5KnYSmQbnAzx8nrDQRXkfEa5YzfmsyUgZ4nMJVpGA4vnYGjwe38eWzj1E8HxYw9Nj8gNADn4beLr9nyq7oCAFrD8",
  "key12": "2Cj11BzcpgVfsuGc1bbFkaPTjehbo5xx7vPdWF5ZUBokH97BcpMLkP3whAq514WjhyXHxsX4ZW2dCkS2j9wrzoLa",
  "key13": "4f7W4qaZ1xB7d9ZGRR8zwsBBjszLg4zA7qGhJdY3RZmG1KM45sXbV6YiMBDrQjzTganMTJZZD1VHHATRK7BwJJhw",
  "key14": "4ZQ6vjAd3LyTeyCVsXE4iqAZY8EX5WkieE6zZRXvQCsAkMhdTHGUkHSa3swtoZkGf5wZ79N39MYBbuL4YaFFKfMy",
  "key15": "4qwiaF9JdXmJKdmBvMThGgqUULM9afQ2xnKw8SyCnXQevwkNoH3X97kc9GLpak9VjbvFnW74vCvdxRL8Z3v6dKMp",
  "key16": "5EvF61V8ErA79A7evETL5rmGqvHCTQiRsBPodn7qnz8prtfjRoA4p93VW3MqfChPUevqU8dGPwL5NkTCaXQqa2oV",
  "key17": "3yByg7z544AF8tW2WNYUkWYjMyQXUpnKhpfaF1Mszi7JjXm6s8aA9LbMhDvJ4ss7XMXzxC1S5HCFdVzv3zunfCYX",
  "key18": "36F7usmsK73Lh2BqGDDYbouFdget8ygMabtqNehdfCqUxobBr3az3y3izhRAetJ98y1Aaz2sgtnFbxFeaqK7k3GD",
  "key19": "4R6Cn8xP2ZShAEdiBvnZyZqB3E8maEZpoV12E6PDxw84XTH78U6XbtUdsCm3zyvahbyX1apdmnLXmKjUeLLCWrD5",
  "key20": "5rrGqBzqfc7jqqAv78SKWg5aUmRPyKKXSztH9VPPyALBo87fUP6rS6siN9xoHFqvkUWDBaN9yisX2eR2fnQL7w2g",
  "key21": "3H516b6vSr7kjMFLJTB9tXDac2V49t5ekzs8GChvUaCnPaxCtPQB4SumjEo4ivzHUuSVfPy15AdB2Ve19Lpm4cC9",
  "key22": "3nHScouyffWzYop99NxLvLG8VPdQQTDpEKLcCZHHphkBYXw92XfSHJtU1UobWE4vnHZzThDHpfHhDj8HvTHVeHQr",
  "key23": "HnmSeKf7yRyWGQbm2WWHgSEB3BvePz6o68u8Nk3MUsGCJg5ayR9vGZLXpL9XhZm9v6d6VVmKYJA6ps5CnTxaqs3",
  "key24": "2zV3N87EBzRuFv2pQZoDFaJ92AY7jfieJ6GHdv6YyqZHTf7mKSo8RsjyZaGmvtogv2thHhLMdA9k1wYbEY7FV1J",
  "key25": "2UVJxRqdQRCMWmyaCyXnMZqjwn5EANDFX3cw4LFFGBHkoBxZ7ifZkwMKeboDVMcyEFpR4TJxNy7SDLaGArcE1591",
  "key26": "3ZHibPDt1vHAXAQcBKC8XPUVkyT254ySuSETFZ2iUBdNEMkUdmBvqtJp6LkbKv5ADXs2TxXEWnXYkET1pbZZbYAH",
  "key27": "46pYvbT2xRBcZGdJyFt8cBLUP8oJqXvHGNSvUbdbRkh1U1cZaK2ZsSEgAYx2N4HUDJmQtZZ14eeYV68ggWkNw63L",
  "key28": "GiSAso2tFZh9XyYSuzznP2nUJYBcBHuJhQtj1oCZjPahe81NLyvQ9XQ5JYWxe8Yc8FWisPyFkaUtgiFqmFC9cpg",
  "key29": "3SfAe4hq3yRksXeMeYNJZ2VBjeHvEt33YCAfu4u4H8tqCRG1CGBMrx1w7UcVcCC8jZMQPgLkAWAQgR3MfN1BAirw",
  "key30": "4NPtE99aPoHtTjRwYGdNcMXRe7Mk9cfzAMaruUt4uHec4743FeXqMbwyRevL6WEfRY4wBNMYkH1o7wPHZjnzf1gx",
  "key31": "5Dghci6EX1g7ABQzFtPqup2JKt7QbeuUTYSM9m5HjYUZiKwWc8tsFDe4Lbtacy5duhs3w44wWrrr1F8aDeS91ZcT",
  "key32": "WHx1GRYh2QuVaxEpmHXPMq7ezAUJnBXq8AurWWSc1Auo798yWNYv721RPQjpsTrFfBfjKCJnLB9WbRgV6LR79tU",
  "key33": "2tLz7BAtFuZxQSKZcgY6tjZU9CFBwQZPTDqqY7tgyMvpZPSE92kb7aaqEXcf9LEdDAM99RiSu7V26EARtZykpmPv",
  "key34": "5jdcyRXqnUGnmcgn7oU6nbkg5KFb9Xs1X9icTpdL1EbEauM56YAvcnoKyJnwuiriq693TaZEpAsrY5mF3sRrdBjs",
  "key35": "37N9tYJ3RBY7uFRSyjZ7dryNnVJMehWgtFvghQuX9hMgmR1QHHXLWk36ugkkjRcwrit3y3aT1ZfraUeGHR2vq5V",
  "key36": "615M8gN1V2hJXRVp4fsgurMC1B8Y2mXWQGkAcFNvH8Q1bepHvDLCfFyvmMajxRqeBuqxxDDQxH4AFa6wNqR5ZzjB",
  "key37": "5jCpzYq66GsLFwSwoNqwoPTeaQ554DKghjBNfyMcTSUV3WZhCGHadNrThgSkLuE3P6GdzithtHPNPUTeLL967uCj",
  "key38": "5T3Hcb7PRN2B1TuEYQakyQM8UTWcW9AaHm3aaoXEVonwCe7WuhV5XKUeWJZuBMSjeEhChihq4rLGSxWV5porEST3",
  "key39": "3bWcXEbX3Z3yeZNQ7htxCxgG9rM6fut2nKMHPWVUQX3PLTrGVnNZsKQRuiaCA8zLgFX94Q7QarJVBgFpaVM6uXip",
  "key40": "5Af7fjgS3osjB9ywHAoenirGRVzstTygTM8iSRieWvDSTjKmHAy4NqDA8sCu8KMVcm19t6oyizzzVrWqiahk8tBD",
  "key41": "32Sb2p2kjyB1WB5aNZT8WHYHegoBxW8cygoRvDiLupkzCodJxxAfpYQxqRdp2g3v8sRAXpntevfxLLJXkGtuQPiZ",
  "key42": "4FwdmjUg6qyMzZ5923eViyzDnfiEGQ1pxA3D8d7hufB96Xp7hhQqW6spwYmfnqL3gyjdDxZ3oibv1Vet6UihQPUY",
  "key43": "5pngaRZtt9nSe1ZPTT1bhFU2RtrzGHxWiEmX4e9DK4tPLL7BLtE3JjwyW9zMXZtg6J63MkPrWexyD55jfaQd1DwX",
  "key44": "3PCoTPBvG9ntKeNAAohXrWKnfjYsP2x8yz7GkJDLVDvnCjQSqCCLfHW1jzUJ7Rt7iHfaMcXcGBmKvmVYCqDgQt8F",
  "key45": "2kATP5ku5WVonSo8qb5YUYip1cVXfrpjktAhYcD7WUYDG2AMK3dJitcDC8EJEwjsAsLLavsDCDavuWUoRrNx23yZ",
  "key46": "p2gczjyUVkMTyyBT8hYwMh5FHKhej2Ga4aedQfaPdrtRNRkdMCVVvmEAJmn2xd3AUbQCj7CoxeYyTU3G9K3W82Z",
  "key47": "cYo4fPHgAH9v4hS1mbjH5wETSv5wzFZKVBzL4qZcjzz7g2zKJRoQSP6aVQ8SJMMKtpATDYkaDmFAhg2u9nzqvX8"
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
