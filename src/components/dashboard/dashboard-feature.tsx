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
    "2sjyCz5Ms64PJDuVsqPfQCdkQ7CouW5tAzKxy9aUwZrooj4Fi2vxNTyHWSRKtkPDXDmnYzFmzmkvPzGtr4whfoTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xn14m6o1ZETWPzMuSYBWNnTm8NFFANnxUFH7wbnjLgRFutLHrXucbLRKE4tMt3XP7tCfwQmCUo4zMEA4e8jR2oW",
  "key1": "fDesmWAXMZASEtjScrayCtb1eKX7zqf8XDUhWxXyq5FBfkUNCd2FpnYG76567NKrnheJ66JLSDCjgfTXX1Pdes3",
  "key2": "AEZdF7YZnWs3b5QNnVxzMffUM4eWhHudtGJyzKJCbMbcmS66fSyV4SsKTgQLJZsqtduk38Vf3i3jrEs8R7cxdz4",
  "key3": "5JpuzvWLKPhgQoatU2LKr5XbQUbne3v2uJtNbYXnLYNa7P7Ug222H6rTh6wBkKKL39xkEbmApZK5fF19yo8uoEyu",
  "key4": "4oe983s7Nix4vo1YdrU6KX2H5JbqLGfQLkzmUpxDySEGWjzWYyddk6maXBvwnsFkp4DxUXEs4W2A4qcWnNiSA2Cq",
  "key5": "5CEe4ygFMF3PipkvaEFCK8ht1rkrsDgQsbdNhyaDKZtMqG5VALhHift7cFszf8t6U52S5uBbeMETYXGqR1gAJn7H",
  "key6": "3Bs5mmpiNQB13NpF7ceCnZLvC2HM9XbGtrE8oZWRQKRpkD3NJyiXHWVad2NWJYabA7x6dsRCjzo5AUX3By21ZKKN",
  "key7": "3L6Cv6Q8BnzpGMEt4mEQxGJBKN63TFW4vQkMGsS4bU6gMsiDNk54ryUST3wibuEtzMnbBQsEM3VZrCkSuADQa4DG",
  "key8": "5YZyhD2DSoBPdCY7sGtixKsSt9sDRRFVmy2cdQggQEhW5WvEvChC1WCLjRB27syDoyqNPgHAERdV2dGHFduCDBin",
  "key9": "2L1Us6Mn1kKRynRXMCdzEpUpqdpn7JwYbgywVkX1g8sVugnXMa4RzAasKzri2GbnKFgpWnZDrdTfWxxPaYUSpKGw",
  "key10": "26YYWzjEiarqMBy8uhFrBE8DvDUbpfajsJs9jc4mPvH1ev5WJRv9JrMUHdNHgGUcyueYvhqjbFrSroYhrxQNaSc8",
  "key11": "3nsPWjnWPTRjuHSpL6nxQr2FPdyB4JAZc6wmA41APVe1i3KQZx5xyvAQDDhuHLTvVyxMQPJwBdYYumMsQTegr7t5",
  "key12": "3PPQ7VyBcqHvjasuyLJwfmi7d2uYYXyxdAYNVS2QHdCd3sm6RV6SW8myZHPcCnitRLtFQqnE4eK7h2xojboPYTZX",
  "key13": "5f8Wep8bNETghVAVFuPcqRaQ2wBokig7m3w5n3omVCv68AQ53CCEsFF3345D7kvQegMskb2HGXyE55EXth1yTRi9",
  "key14": "mHsPz3SZTpt2Xht8iRDc17bqvm2cgmakbX89NNuXGaDLV6GqwstadoN73L89DayVhFPZLVTjQkYUmZHcUSWgVT5",
  "key15": "3fMFxBjrNF7o5wQcDzzZAi9zWwiffZunQXCKyE1m2rD7TtP5Q7rJxJ4sHiPqWauqteqYof1w4hHUNECjuV72vTCC",
  "key16": "4fEg11f15XQbDJczQ6dmmJdAtC7BRCxKT4Etwo3UHgfdxmf4MoSEhSyR2sGvj8Hq6mhb2HHZ4vzBKHhkXhLEnZDV",
  "key17": "2mCxvdPG1eLrcCfBzgQrppo6TQ2NgxeeniCbeVdQ1jdvx2PgWH1qSu8uzRgfzb1iDyaCNJNnHAiVKZnWaquDXrXz",
  "key18": "4KBzgouSUhxztWq3TQ6gESJ4FNqt9eoWPi5MQghUPzMUWCZ3koAEKDkTfwpgQ8XeuKfHVi1BxaATqdsqLa57XRMU",
  "key19": "CKfGj89J4ghx1WdGrWzH9LeGAZVRiDaFvTZtGGuBptKXfmjyvEZLFkdxh9YzttGLe4KsQ5SCaKueczqf2zFTXkn",
  "key20": "3WfyozUEMdbrpoXX9rP9LaJgQD7KK6Ro8B7TawqJKgJRgNis4mUYmw82eipSiGGQQptfJAB1ydh2ML7W4orKmBTx",
  "key21": "4vGbiacpGGJi5wARbDfJPkLX1dKZVDW7DxZrnUcD7QUUCX9ifpQM74RLHmxSUZdxghnQ72PuASz8oJ4AHzsif9a3",
  "key22": "4JNDWYwYdqj4eacjfzN6UktwSArZPE13RFDMqZDBPDkHwEbNpV4YPTPijY18iDtyCkn5JDTQwhxUqEkzDaPtzygS",
  "key23": "3KWq8NS6pLv5qHcjTRgdJqXn4j1Z2Ld6Kb9yVEsSrJWutAN5TdzQsez7HWPyV7uRG9DeTN8BxxkgxSiEJpFd3hBf",
  "key24": "2WwNvhkxh3zdh3h1Jx3GvvzNGUvTfVCq3uD5sAANSDEq5irsXUuxiv9hgREYkfQM5onfkY1NCLVGHJdBJrqqaLCA",
  "key25": "27PNwaJdGmtTvzwH7xFJU4CDEkLyXQMM1ko5oRhfc2SNYLMXP4J63GQcDDugp7f4T8GLWKt3dZXkogZfFvPaiada",
  "key26": "3hLqutcSFHCuPjXX3K2gqyER5cUDhQQNmmX7mUju3mPiMiW84dNqqC5cPhC23Cq4a4Pif3yH1GdCr2GXKbGdvDvZ",
  "key27": "5LT3SDLyv9r65vExY56FZCP3swUm2AWwtNpo2t8zGSS8yQtoEXFjBrQR7v82btsGDXTd4RFUQJV9ZeMphFQo6Uc9",
  "key28": "4Swwunr3mUJWXKSABDaPfZ7PMhsS1yZgjTmpnYiUwTnPdcgCRd4SuBUtnAu8HtrfGeYbX8VX5wfEEGi58mchmbff",
  "key29": "iCKLKVnWJVUBABEkYxnnFDNFn5syfPVQ2rHwZTC6rhJCtmS7fN7Rh4C2ipwRC5zv36D1Thw6Nud1nRkD3nDh4WP",
  "key30": "2cU6R34Du97mDrNZwZykiMqtxTuBqXYXgWLXiBRo13nRCwmFNuoxXTND7ie3ErQp14JN9iQtM7sP3ovTXddgJfiT",
  "key31": "4LUA37XDRPTq8a2vZkZiHeD1WxPaxW1CLwPJ2miyB8MTkyv937KQTAQoFh4NcNcQys64ZRE2uW3Upeg8b2R2hxLE"
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
