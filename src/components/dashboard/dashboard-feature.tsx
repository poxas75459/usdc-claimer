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
    "3Aikvx5ArVxyRg5LXs3ZiCDman45FgXEZCDLqaAif2cxzBuJf6EFnrnrd33wRXkFR8TH6CwfqMZAkGBFWMYtXGNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HBbTdL9dmaJrpdFUaHJRWaGKVkg3mAUBpGv9g3bGDy7yHdXzfatavZH5b41yDQo7tPBi289u2qwa8Roon5gnWfJ",
  "key1": "UkFLxme5zqVR2XoJZBPWBYDWNKV7vtHiCmfPHrz8WMjvPNWGdarLfzweUs7oQDbPaA8Qx5j3mFvx7zdJhsHTT7h",
  "key2": "4aQZBX8oyyAqvWyxyWL7XH3ik1jyn8vuzWGNAMcmqThCZmmn2L1mexMYsxRTNAQn8U8oCPyfZdfH94L4K3sH6g3j",
  "key3": "4mc3SxKKehp4fiHhLW3Pqdjfzs2wpRUwDvk6dJbK5WtA8QQjaczwvaLHm5RyDiwinCrkw4aH3hS8eN2pvq2k3czt",
  "key4": "MChk2qJ6XtXNQo5NHH92U2k2ZpvUAh8ztCHD373bsX5ToV8PGZbd8SE958ahEqpyKM7mm7d5KZZC33waWqtX6df",
  "key5": "4mAbjWKHQoZP8AHEF6imTTgMwDpcN99zTXHquP7mhECiVMN4BFzrYvPiApabVqBEMNdXvT8mg8TfFCwzptwKND3i",
  "key6": "2fnTYwZNMTMcDGn7BpG7gfodu11Ji4hrpfhPFjPqczFizdypx33cAHyZMax4KqskrGViBemGaRAVf2Qn8SqM6nnb",
  "key7": "5DjKipFSJkS7hC3mYEqEpBkkZViq9JrKP64o9fFnuWmH6mDmN5avQ1HjS2B6tv8RCc6DK8iuH6YA3yLyga4CJYCa",
  "key8": "5avreAV9mM3EyqGBRhGKEzEMXXnU6inacFfdxixainFuaY3FkjCbGFSkoeZsptZHj5DuTyTHXd2rKwajWaL1qfso",
  "key9": "hqcLuQsbANjd91VeLYs6JKktsHq5oXkUpUusyqAAvkXSTVbKN4UizXmVVMUV26E1nZzjFUjkrzF2fYno4xbcHU9",
  "key10": "2XTSihqQVmi1kJEqLoqvedwEd9iXDBpdMaFsE1Yk9Lu7mHK6zUQHPfGb1xQ6Z2xMWCdmPpgAjghRXuoD4G96iXHg",
  "key11": "3D1VgcmrteLADUsVPz1LZoh8DTQxjytuXEUVdfb2ckXEbu9wwB2VmGoWKGTAEBmp9i9REkdRDFxEQRPFBp4eXVpA",
  "key12": "2dPpnhSY2BvQ6iB89XE7MKE5v5P6ZuJshHgcedGr7QwYU1fZo9fegQLRA94rMDNWUwp8AoAZixXkSpJKKc4sVrrt",
  "key13": "5Gho8mVnGFsbsSQUmdYSaWk2BfYwWu1ZfTAGPG21bpsndYgHiPXCtCyB5Qfgt37u4bLCALLAjy7vDM9PWwaFQbBv",
  "key14": "5W9FZpRaBAzcmd6sEFJVNimYcjBEtWRJYUZNKNG8TW9JbY6cf4d4fsoa8iBR9KsE5MdxR3qkA471Ec6g4B4hwdo1",
  "key15": "3vbQqVkCHUNF5ZDKj4N1BArtxytPKrAx6RmAx28rcX4RXy4MFZG42aZMkc8gywgWAH3XGtTegmEZSTafRScQCMT6",
  "key16": "QWxoWiq2j5U3FXSLQnfusywiYYYRTckgD6zvJsD1pGkq1hvzQazvev4Co89iFcfsieUnLAzw3CkwJoGsWWjP48p",
  "key17": "3CnVVaaqPW84X5Yx15RNboCQAeNzuJiAJn5n3XGbdDHwgp5maVXSzL59jj99SnZPU2rbmHSAKF2Ex4ZwtVwH7i2X",
  "key18": "3UbSX816ZcFzELFFLhUuLSFcszDrLGRAT2kFQacUMp5VPB3Hxeh8NLC3oKpfKbd6HAmavbdh1KiwusmbQ22hL4ji",
  "key19": "2ibNhKt73uoA6i6Mwi573yBB1vdSdH2KWQq5GAPvsqbFYURxfvQrW741bq8UwTfLCLoW2VNNaFLvmfri2cjFe36N",
  "key20": "32ffyZnFQaRefLnWcpsFxdDjjngt26oAEpC1DbhTG3567gxt1reG4UP3PkbwrkvvmJoM6DKC9rJNNoToGVMTAS3o",
  "key21": "4Z34md6j2wAwvvebhdo2t92kKgJ3uZnGwHB9cTJ1xRgzHqRjCxYcohc4XuUuQX9YTqhBNrZhLjqtgicZd1YLDZoo",
  "key22": "ztzAaEddhAPQhHFQYzcCCtW2UqP8RiixNPTjpfRQkWKXSPMBhYEPM8M5odJjwKMH3hf2EnMMbVSE2vnGmsxbP67",
  "key23": "3d7fvozjd2F6ZwTbcuMYGZedHuojwZSjJ8xDfDgg4pzsZt2gRV5z5TCCaX6JDJi3KSrAw5w8fGBAtiWvMcwm5UPB",
  "key24": "5xhgi4MuxuLXggyjxXsLXHduYmSBpTDDwrNJAYTuiAZojKqTcWsMBatsrKY5GnkRPyVA2Ar8i38cYSwiezurVXjt",
  "key25": "NmQgdUfv841KpeHYBG3rGtSJoPUiV4s8iCsf6E47yseoB6hBE9QX2ZQCPyvXLpa78wKPJRJHDYsyG18mGF1mCSn",
  "key26": "cYj7gof46HE6BieQ84sqL1zByPB6FNWqYoedmPNWoe3VFAKB8tsVkv65qagYFgj783DsdTtQsTWVWL91Syr1CTW",
  "key27": "8Z2Y4pgzqn3MdWYuVXR7Vnz1jffvRzU1cnywii3XS3EVNwadmJurnjWKPjtfXTYM7La2n758sikHVTrC9hp9HKG",
  "key28": "w7Bk1wWbaKFcdLwg3tzZsNWTYmpncYQWAoWyyMf1ZdXUHBQwVYJ2CZkb8PKVS68wyP6uh4PAabGdozAk2VJaowr",
  "key29": "2ndcLZFvAKYb6QXR7WnLMCyMGZjQLHSa6aXdYLwouLov2egX3bTKirqAcH5TVAfB9KnL1gJGmZPW2EQZTiXfCsHv",
  "key30": "5GLiZeQs6hTFQm1dVpRjAAbpwg1fzuuHSnP3MSWib1LBeP6UgACVMZnjJapd4UWk2TfozcVyUPKj7ZYFsEF5rUi9",
  "key31": "2DmBQFUPFnqz6xE1Uox3yzE4Tk44iktk1ng4bfJTY9tg41oJdiMTUtGNF6yUrNPLodB68hmSMAxpuatkfYTHGjUb",
  "key32": "5ynj4rYcWALtToyHohTdL7yzBBx77WzXj4WUaNZk6f4QJ654biR29xSawqAY3YULQiXTgApaA29N3VVQek4rreDn"
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
