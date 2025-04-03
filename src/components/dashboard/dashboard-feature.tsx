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
    "9RFpQzN8Sq4kRqFMhJFe54N5rhbunN7g8RunX8pAKi35kZZyQ3t4WcV8vUBbEA9NmPVBrvNSn6cL3kehDjcZGDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z9mJMGmqibvdE3FfActztV9tYF3xozTeNjW6NBv2Aty7qRGs6dwyn6PwFQx1PC1ig5r2Q6z6b929BSTvYduViYM",
  "key1": "42WNGcW2ULTTJnKEq62n91qJ6CZaV1cKDzsHRJA9Nh2kAfHzZAtrexFkp1puBW2KQ2ABQSnJYWcdLVmqhWkXX7oF",
  "key2": "2yJVAmFwNLF3DN8CAje3GBdAkdA79LemDUiLNx5p4eVtmT97P9LkqwfAcwEXGAeaBH6BmWkMpA5t6SaYdjws9Hz",
  "key3": "5vfLReADuypBQBJYUKtoAC7iDyZs63szZgNp76cz1ZscgQatLkuUPVDc5AjmogPCc1GLHKyxVD6sSmRgQPTghLoW",
  "key4": "tprsW8XzBv8KNxxiRsS2uMYNt2DfSvCgaxq6P173y6BQhn9oGS6H8FAx5ZJEPTsMcnuqgNvuD9MdxcqXTSnbBPn",
  "key5": "2mDvhPVe8Lzcm74VXKamKS2q7qhTfSmUpL9MSmSgbbs2JCQKS5Q1Ln8R7TGX29RiR63spHG2ZQjSXyEnHY71PwsT",
  "key6": "4XkfKNUBQ2fJqmJDwBNM2bVUVizWDZaYaXv6fbgAYwhqWoe2Tb9EVG1yc5ugwRpsT8m4WaArVEBzAahbntdxMPBu",
  "key7": "2VZUdCpdsfF5CUK9TEsGYYX7hxaC381QJpP99QSobiygPBXrpihHq17D7KuqoGfRDNHvwNDF8EDBf6BAfkmBAopg",
  "key8": "5dBmfcprt58jjGZMMCg1cmt5HJcLeP3XKzUTp1vozsvgasM6S3ira1bWWRMaaxUXbxBGDsPXgdqMrJXrTMipyLgi",
  "key9": "mQDcwkVjKmCzRx7ULYHKS2iXC8FoFYoNFi8vyZH4WPQFs3PdeVUcPF5361k2ruwZQqu9UxXuhQPqMd41LLGnpcK",
  "key10": "5CmePUtKiCWMXAygm8VvDuqzNDopfUktcNisQLSgTiQtET27TaeNTLUGzTucyw8aRnupSbZHud5TCKo6Vs5vHdbM",
  "key11": "5tJ7tRttECU9b5yxAyMAC7577Ei7KnYENhRGubrb4zAxwWiNYm1755w7KYTCuzc9Yn2kktxMhyWZJdd6mJgAmSU7",
  "key12": "4oHSkVjCJrovCCBMjkNdgUJAnz21eMDTQicuAW5HoJy5z5HNVKgocTNorKNDL2ZTFDULxgJPLc7obnuHVLJoif3A",
  "key13": "3B3tHAMz7WDrxGuQR6RBCnrWwETxZFpRtCVHaK6ebCHcpfW3Ewbyn5CsungvLwk59XASN9DUHWPm4EpRaRd6TKHv",
  "key14": "5oHqhKJkKTFtj5WdAiNAGvDoLKGE9i6146bjFYkQo5bVgkgi6YYM95vAZbA6tJ3ck5P8Kr35HtE7sa3mEsimjCm2",
  "key15": "2TFJCFzogVZZnkYdow4BUJ5dPkzcdhREXKTbf1ujMsL21DST3NyuCLn82wdTUWmfpHnL9nuRoFS64kGb8xGLBAiQ",
  "key16": "u5zUTWnSSupQT68FctHcqGWchw2LUNWcZq7PKkDqKdcGiJqdn9YYtw3DFq3g3LjXVoQVeezx4o3shnwwhvj9czj",
  "key17": "2fYnRQQ7zK7BWgh6Gyprd4siS55LPC5f8MFV58vcKfHrtPLS7kecz8rHNZmDE9aeNM6F25fATFMS2ownTMW5GF1E",
  "key18": "2tNnj8zN2G84DKNpHYpGN9pBXKZPETP2unUYNy18aenxxVSeMY22rnjzXTTVNqwTGyYumwpyHRLaDDQ4gkajUaDW",
  "key19": "4d7JggkZD7gzDXnuZMxQGYou8QQEsXEWcorLbPMs6agJ5Eeb27htLcPqwntd7zeMJhtqsu1gi5vEEAyb5WQzaF9x",
  "key20": "3QbKxrThfhm2ovDRrrSVLFk1D8gT44ZeQVZm2TqipRg8KrhfWktQqXVgB7ZMYxkofzDWup42QcvcqCgehRDuKxuf",
  "key21": "5qKw3TeJKoeFhp5mRxcLsKGrzpcWgqP6qqFKbuG7qf51Nxbwa9WKiqGDG83ncAFobZjQuHtreNKhirwuvwBZvJgw",
  "key22": "9QH8CFTuuxSoNSB2PeWxJb6sXbJ3T6dwxA5p8ZHf1GrhFWNPQKXcGs1dvybpritrn4dGVRcQihp5bwkUWUehhND",
  "key23": "Ko8d3xVYuTxkLdwYqJ2PJhDLHMBTZG8QLTuaW3FbTdvEZLhbk7cwp4hnYytS7LM2AatbSGfT14bC7pMvtE5r92q",
  "key24": "4r7q5aZeahMbkNiWACn2jDYDGAUcTscYuD4ov4UrNxfwa9EGLSbcdd3JjibFFjQZ3P1UUTCiSeMLxSo3EbdF12U1",
  "key25": "4C6EeRR6bx7Jxs3tx2JFNtRmGj5zFmNXg7diS5c8t58rggmeKtvN4nv6iCRDk3EptHgMtCBcmymFmyjf6RmX6zvv",
  "key26": "4TAUVyB4q53SeHjo6gxVLvexdkjbbygzitdPWo9RbJWj3N8sz7z8YVcBtQVFSfphx7w881pGm3eetYudLbJry6k7",
  "key27": "3i9PhKkmQhPr3ewpVXmrTjGN64iehDASrza44YEchA4avFauwrvzV5RfohrrZ54Gb2ZZ99Mgi8p6CZQWFTHmcrVw",
  "key28": "3seZCruSFzyVLigjVmwsujK4ZN4iVDLXsBfmmpoerVGW5W22HjZrw2kMhEBmKGoe799ZCmYzt9QHTw6CXwFMkpJx",
  "key29": "3ZTnm3LBBJvGc24NTAokQEZxs8oznvgJoRX52DdNSwNZgnyaQRHfKwmjWhwBkqUBYwtSPSjZPcLuowvfu8YAwzik",
  "key30": "9sS8gK8puArSAGzoomJmViJaBYnjexDDYDjt4jFVVV8PuvGWVGPP4qJWKgQZWa3gWXKaSTPG1SC5JjmSkRSS8QZ",
  "key31": "sU6eA7cno17NLysB9ybjVLG4AcnPxpyCaayGqKY5CYoWzE5kFfbfdUPzhfRasxXKNfnK1iWuUZygmvPijayMux5",
  "key32": "128RCG159RKWS8B95Mmk8tQodagBw26Cf7L9epLPU3zAAgDKxcxYQi9wMfjdZ6Whg9t2xQx7y4ApKn1LLnT1vha",
  "key33": "FFfATPW5nYYxGTBrcKh4UhDjprTLFg1FH63Mi4GnQxJHZLnuvk3NWEYKfujz5gSFSkLsxScEjtHBinTSKECFsmQ",
  "key34": "53M2rgZHxgoWu7fTgw7wkMQTnR8fULvft8sDbHMwGHiDgBxwwLTK1i2pAUh5gKnc9W4WY3LSe1YKJGhGzpD1R1KM",
  "key35": "3aEk6VvUcTXP3cg8VVykfMGE19v53J8BZAjNqMPdEmNyTvZXfZt1UheNptHFxFM9oGt9oiSauVCg4QYzDv66R7LS",
  "key36": "i4EiQ3MHZJhk3uNvLHjiabpjtqsNPPtdvAsi4ZjajKe5jnxxrZtxoxYrHNB8SwXEw2u3MVJiNzHZqhACZFjifdr",
  "key37": "3HTAYSaxcEHaHvPa8De1AbASNtDmCyscAZWPgGbyFDL4K72bhtfbNWgGGFNc4DzjkGS1h2Ao2cDKD35BWhquqxdi",
  "key38": "2c7QifR1h2a8W9ctDPQ2LCaJ5ej5MtX4Poj11BiYpPuWu1rHVU6BP24KsHossGKK2b5zMzs8AkWUyQD9EtU5tJJ9",
  "key39": "3gwMCgyZzY3qbjmwUmz2pdkdr6AoQKjU6zxURZYMhmndHKKWdeEJSMiw4eq8k3mpGDXZi5rXwUwfgFEA8b1wLyQK",
  "key40": "54kgTG3iuxnLmpUbWkg7yqTz1DZeXsnDqieHHMoFaVH2dFEXNUAesTCGREFhVKmzaN2uctrft5v1LDG1tTxKfXHJ",
  "key41": "2JJXNZSqc1sysKuRP5ubq3j5iT5eGGnb5rbMXL3dXmArSppJm6BR8xe7mcgePAZ6ADgmknm857ptuzYyXPURhfjP",
  "key42": "3YBgixkeRwVurUs7JfyEkpxW48fUjHuVdz2G5SuuYkpe1C9N9TLGfhZVDX8iFc3F61E1kobduNph2Fjx1CyJDLx7"
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
