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
    "4AZS9tKyS9f7e9zDjjTBQ6ZLKQdioZh9duy6P7BsMye7rhoskM5JNXLFStVD6cZZW7tMSZaxAfK5TqYqwtC33Tus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JoQE5GLJ6wd5JwEKzG2mCLsiSDh1z9zTzjdkfpDqtpaeATW2HUqYwaCJ8bvxtqp5JSNgceUDXZsvxXMW7MAQ6aL",
  "key1": "3aLEiDKEbn6KPgSLyB8CBB7aEN3XbWVBE4XtpwWb3JLnvDgvPjbQAEXEbonQKkiNWhsFrySp7tHoaWHAoYCVCkoG",
  "key2": "483n6Foyxesra5HiXSb4HEb328ifCTmaj65Bx18KuvDYHdiPgr4vNEp9WYmk8CvLLJxMGj265kUdD8waxFzrAqhW",
  "key3": "4Kyk3GYL61ucUgaWJfrvccZg2GYTutCVoArPaq4L4EDqTog38CGrVKmjA2B4sgbbNa9BEbqcSyxDvWoFnYDrJhr2",
  "key4": "56w9XCTvwNj64cEK1D95PVX6eMJbLiN48EgsYNvNV6cr8tJHpVK7fBxA2pR5JEJVg1rLv6ncYiLpQKjqFofQm6eS",
  "key5": "3nLFosE87QNmfUDDtkfaaYnLbwG9XEHq9TdxSJi9HJaBkRoZRHyqF4J7UhqNNyQN8Y7teMtJs7rgQnjsk7NgmSW3",
  "key6": "Qr4JkQ2isaFMUj2VqTdeZS8ktpfyHTGrpUAnoHUwbzfsBBf73QM2HELy1QM1HQAnnG522A1uXb46uX7UtZ5ekfC",
  "key7": "2Txj6i6R9vtEbJGTmWBSFMuWrv1DEgZAJHRHEbtLir2ss7G2GjN8DWDQ8G4Gg5fGmdzaio8MBZeGe3Wo8dQ7HTFa",
  "key8": "5YH5oUtLnSnpCLYnpXwi7zF9FhLSTf32VTsEAeYcXBcfUxHSEakMAcw3BrTZh71pZitwG4iVFU5qvRjuERgbX9Ev",
  "key9": "4e2V9Fr5VtQSZNhYfNk7ooDCW7Qy8ydRN8ZUYX5PR1eFyeYntT2cvzcWEhz9fMnTE8As4nSiNYN5Dxq4DkfeggNu",
  "key10": "3X5mhtch9QgeicbyuBuanKnYAPhAARAe4LgXyERQtgDtDbph5cgUeiUB1a3busFndNnbAP9o6cnMpZfBwfcRdUG",
  "key11": "2aXBpi6p3hqbJcnNJ65Rs2UcS6HC4tCwFXqi2RQRMggDutJCAVa6Vi7FZrtATv82GqgFkffpEideGDHem6W2EoL1",
  "key12": "3DPxY76UyYvkF1y581vTK3M46wUJhxY4qgDsCEvyKGYEQKxnLmYSMMVgfm2K69dW2ePsH6r85Uoxvae2F4EaLCSx",
  "key13": "51TSD9y9jwhDHiDN7MPxkNUf6SFKccDLsSfvskh9xCiDmYF6KFs64DNdRyzgevFjSqXuQkQabCLxHjMt5aECveqF",
  "key14": "27mkpvUL3DKYSp6eXHLQH8pxFGoFKTPCubKuXrHjis99siFZQzHtyoEXUK17em42nm8owomHuRNsbWWgpmaEhhzv",
  "key15": "5D6vEEgtUxFKSn8oqEhzMBAgGwHLVL26XjgZZDNBssGWwTit2drnXyKATaUaUokZP8HWu1k7TcpHYjD6EHZfGjGv",
  "key16": "rNQ2beaGikCHwVNiryCtrYLw6EmwQGKRkMjM72nRtPjwsbzbjUd1PUn19Wy9psQFsUxYQAoa83oDyWYajgQDuwR",
  "key17": "44UBSrpxhm5fS4PLTRFmSwPZ8oKn8sH6Ckvm7XuR9hf1AhvfGRPE2Wa1NW8BRqdQe3BFDebTbaJAKwEh3pZCpACU",
  "key18": "2A8yNWXpghSq6QhVGeb6S3vzrXF2E5H9ChuQQQUWqPPGhYD95uNmQiayDGhcidpQJPsyKnTEEo4BNF5f6byQqTQ2",
  "key19": "4B1tQwRdkWjUCNmDJj1WWN4NUzzA6CuiJmEwQ9EUs5ZqxcrJFWgniWDnzRSULfWBUf6V1Gtr8Lmt2nvk3H4NHUUJ",
  "key20": "64edmQqTHTfSYcjStWjFXBufGBw28fVkoyw44muE7WWvhMhMdA52tXEChFi8hsogVGKhmLF7rF5ZKi6ayvbHcRA5",
  "key21": "4XD7svsHNccCoSTojzHewBAr8cTHE4HxqtpgbHfjCLM333XL1oZ9pjVB6sycV7384cuxiM3eMsnebkVbxNyfjXAu",
  "key22": "4XGtRqywSPRzAjrEEvBqTW93NUyE99hfEAWT5J8P5siog7994fyXe58s2rQNqhNhQnovpi3XtGKHArxvw4QqMAc5",
  "key23": "4VNYbvctsokhKhLTabS9qzNmdy6zZXG3CUtkmivZvKKNR5NCjAarQ3HAKCQDHQz6MJKmZdGYmBqT7TZHZ3Dh2fTe",
  "key24": "4bwWoKd9dmFeTFMcnKqn1kKg7SzMnV4Wh1iZuA4vQuWaVgqC61fyn1ANcw4TBojh2qhoGyhY4LPP9z33tGqrf47J",
  "key25": "3LMAG4DWsHMbf8CUchRQFzaosWoHnWVGv6bfHvk6ug5WH8mhdstL7b6XTbQH19xUiG6onEn3myqDmSCmGqhxg3JH",
  "key26": "5s8AJxZadHzxV8MNxp7ktmctVjEnmrRdTmYREj3RyoeMRnrZcY5Tdec1mG8aBJAxZUgBm3VeaMMj46zQmzwQp1iv",
  "key27": "3uwYqectoqzm3iLui9Qf5fzoaXAQSHACKZru5zCRXMKXMvjMhXWHNGiUaokMrZd2VAAcEqtLYzVhZFLC7vYCvg5B",
  "key28": "4UhQbsGGFEgMuHVFM6rFFgsXw7yDmBKqBaAF2aGJippgXHpf9b5RDSrwAwEBh5Qmajw26pQcfHj2nLQ5Z2zAipE8"
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
