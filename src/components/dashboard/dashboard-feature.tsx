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
    "3dKeY8wyiULiHAwBUGUuaD96LUAjfPiwUco3CpWM1QPxoLpbUcUt4wCPUy6rq3o3R6sL3NGvaCgvPTdSgLnD1skr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CyWb64766T37JdNB2jLa63GhFZfacwdT5ZbT3Z1pLQxhkVGoKN6MKVQ2DdavVmTm4FiudpmSfu1cvBgn4M17jst",
  "key1": "2ZHAVeoCxUPPNsQxANuNXUY5m6X9VQ54nEHbQ6siRdQ6Tf8JUbA5n6b6cVbhRfLcBdbDwiDQpJSmyJRVniVWN5Qx",
  "key2": "cfLL64fDsnEHS5zu8FT6ng89Uu11CQPeEpSGQHzUtJodfHuAU1BNHrzcW4ygvcbiQFYMSebsXBkkZE3GJBpya6g",
  "key3": "4by8u12P8Wmcun6mUtthc2GNXYekcHLyJV8VfQGsfx5y37HXW2RtbNg1xX6dpo9jESE7gs86ntWCUF6ZXe83iYmk",
  "key4": "3YoJfaemWjrtpzLSWZMTpE8DyeLcDUVaPnGqQRENJgHuDRaJgQc7gU3QZKxTSbiFjtEX6FM1ywmb8pB8mU62yDGb",
  "key5": "4EMfMnr9cCbH5LxgfaUadduBVQGa4pM99jmc2RYUj3wsg9Z2RaF6XbEedeT4NTGbY6WpUhPm9fxJhHBVmFh3LjQQ",
  "key6": "2ceUvt5Ne2vWTfuMXmQGcZpJcWXMEERZnBkjFQRqxspS2RteBTppbCQbYpe9e62SyZtrLH4envq3rVNjtvq29Lqy",
  "key7": "7geDn1M71VBtvQKjV7svuHbDujJkqsa3V2VLhNvVbq66QiuPuAQtMv6CmNEAkNwdeyaWELfmB2axvL3BvWyic73",
  "key8": "2Y36JF3wctAC5nJeyBvnTEuGawJEfd1ZTYCxtxAzUE3T7XXBbcpHVfrofyfiKXdcw8PxCfy7vKE2cBvj3RYyUjSJ",
  "key9": "oJkcv1iwYPhGo5oq2SVkCgnp2ZPoJwMwUjzwcz3VdCJbi272B4yeBv1YFFgPhBAezHbM7puEukv1NUejWAoBuww",
  "key10": "5pk3kcz5SMc8HYfUKhMavffWHiSzSP5sRUXCFUPefSYyJJocUh6P61ytkuUhsMLdmDk4NjJkDmUfjW5qrZcn92Zg",
  "key11": "4mj8iGf27WVrBtEuph9fEM2NQ9GRYnJoWPEKrFXBZYAn5XP8vQboTNaYpQsdCcxYmu8y98DJdBe8ux1FMTAndxqa",
  "key12": "3Qizsns4qY7TDQKQAJ2LftqJXYoQU9w3FKx7Ap3u9Q2LUJNXHkLNVSR8S1hCwfpmnYkN7oPrLQrxKNAnmojFyZAd",
  "key13": "5edpJjZDwfTvm4RvtWNrarz8ouiZsWb4kugdxMRAA6C41dmFBv9gUtVKe3ZfVBeqpbW3HGRejgHrBptkUggFDvQZ",
  "key14": "3CaDCRryJdkCokyXvgXNLVCFGBD9KtmHPeC6Uom5MgzbqANcf8EdowKLLc5vk3pNKuvjCyAG73jF8gTy8ZfGEpcx",
  "key15": "5GfMNLDK3CVVkSMLmini1cTGZjBZN7EBJzCWZA99SNQ66dNHeYr3ooTkms5NFpJYpHFJL7S6YT7rg4akYcPVuJMu",
  "key16": "5hWpVWB4A4x4CBWtGShiYx7AeWdAjV5nW4HC8GeNjH4xmQ5cyikbDx53AWFmuopXckh8kiMnyJHNiXQT66Duvn9J",
  "key17": "3cAQpsMScxNrpq2gNKyTpd9xC1QqFjbn997czgrhFSRMfyc9B2h18gNLLawJCVG1t35Yisv6mT6uBnntajMx4Wih",
  "key18": "HsZd6jbFyXcsthVrSnpNSCZaHCpkdpxqcTqBdWk8YpfsZNpuKuoUnD9WQ5yXuuaLcpr49rJMB5z7Vnvp1sgV9DR",
  "key19": "5Mh5Gjeu8Ky75XVz9s9z1ThcLcGS3CtAHBRYj189FdFJuKrcZH8kpM2aJF1a772jmnoifhaM3fMPn3wdLP93jJqu",
  "key20": "phnHRKLzy4nvavpSGcEPwswbz41PS8LmSHATstaUxRSw94jBRrKxxhvkYBFLtj1QVf8Bp26L58DSyochFidExyo",
  "key21": "31pwjJiSwPvYaQJGKgg6HNKHMaXQ6RU783ibLqXPUBdSzdV6Cc38c3V3uJ8yCwabcQh6tPRRpZBWHAqLXpZiRyzz",
  "key22": "2njyTdEFaCyBprB5QM4NijGfQMd7atw5Mz94SJMSmxrHPL5gGFYjs1REhmj8KfzdJmgf4VcX1YtMKuHG1tezxBHY",
  "key23": "rbYJ6bUNoPZP9yXGn96SVUGPKk5zJfn9zhrLn4kFhULZK94YidMpAxThE2DTjELTKwJhgKn52uEjp1QbnkLFLLQ",
  "key24": "5pJW8bGZ9doZtT8HRsDSECihzpXbj8TiLcW95DUrQUUFnDfQD1gVJ5sekTRMR3jNtB4R7AhVFfmpxZiMGc3DQuRr",
  "key25": "37kvDjasw1TFBFy8h9cg7PcBNwWUmDB9s6TvKaZEFtpHzNvBVWSYSjMYd8DEH8quDiDCeNhuR9F5e1D1xgST2XKo",
  "key26": "2rG2NzeZc2dNhj3amrTRnMSPmskrMxcSpjqhLJMeuWbWMdhVTRYtcHF426sqtwMRSNFRprAsFZVC8BS6B3bEDXx1",
  "key27": "5HoDAy5SJJUUpSAo8YLPBSid4JkRTw6e5CVQmAMDJtosJFYxac8pSs8YddA2EMhtcS7MMiqMAboknLBbGjdimRs4",
  "key28": "4Dn3rK4EgVorgaZmdCbcVynQFVpjwykSNpvhBfkXEC7h5jCMNM54UYxNoHTZXP3a5xVjT8ADiNY9WwCVH51ZyQQZ",
  "key29": "oxA1oNFG5s3dfakbxjsvZ2zYeMGxTy3BPozv13ViggaqR9NPED7d4BH8cp9mc8WoTeaPas9ARiwGJb5LJX8LDAs",
  "key30": "457EDP81KVmPz1oM35yUdbEVbDnmDtM4PP3XLzPfhYBQ1pQdUiuoNH2t9XWzYqYgrvabdgciiewSq9HDQKrUyF2J",
  "key31": "4XtsErYpW9weWWC13npkVWUGY4C1XXjrRAAoVBjBWkNjnmmpG9SPzMibfwPWJwimAeaeSvTpx2hW4sBrd1LJZuvP",
  "key32": "2FTsESkgypooAsPjA2CBtWN4Eqqoxv482uoYTBQm7yFnLJEakryodFZVeicgCKH8V4S8Tt97UsxMVEkHFujAySKU",
  "key33": "4JgRBu8vkhjjZS7QXgoAsRRrH7if8XWTEVFpNNYxrgJUU6ddKRL9DwSMfzqYd9DwVrV8v26DAx3ayUj3XXXRbWfx",
  "key34": "59uomZzL8GrF6UducNknpwCHiXtot7cs99fikgFYrtr4hiHFaRM76n1DiR1f5NNrUW2pZYmQNyv9MPgNCxoT1k3u",
  "key35": "46eBGUhdbSWjUFw8ddqu73sQNhyzNNswbNF842v6qw1Gn7Tghgk65U7Z4scvAzbwuC5JyTopqpoHmgveYJqZg3X2",
  "key36": "267JXes96mvZEEYXXBEXWXDZBo1cU7Lx99GSFE9MSFApygC4wjLznx1zXkHkoV9NSyHNLzB11dr6dJaFaVNiK3zh",
  "key37": "2TPFxQ6Ft3Ywr8ZbbWKokwjMB66EBXoX4KD2dC1pyZpAjbFH7GK7CMSjY9EzPm4XfKni9RjT2hWK1L5BLSrNKLd6"
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
