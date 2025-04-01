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
    "2xhYtfePfUrBgzzj3EXcVzkt7VsqLuPQ1GbrEosnQyCjYa7stqzZyGDJ6d4vZTsLaHY8PB9F8zwywXYgP8t2DVK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a51UosfMbeKVtZo2ipAQGcCVnmR7Z81xKs2o2oUiWYNuJeNCoaAyf2ML8t9dEYEEWnN1xdyWTRCBtquHTZsJ65d",
  "key1": "64wJmjqHMyM36muWd14YKycEhErADJtgwU7mZd8Ayn2zvRmip7JbRpLBqFm82b58k3xh3WWi3JtaZQwsABZ18my2",
  "key2": "ptb4CqYk8U13cDVdxY3Qjo24ioHu8JEsvpkkEdQwAYpT2KCn9PV9BR75nxqLZuXKByCpeASzqFRwjCNK52F7EeE",
  "key3": "AJWZKMZWiDY4c8WZ4tW2zd92wp1UoTkyXzuKyMygGcyHHSjZzLEpsRka4zCX1T56rQtf5HHCnLwH4ESAeWmWWXV",
  "key4": "4x9wSs79ryfXfTHksPRXL81tNf36yRiQ8iPQLMcDgvNQQ31KJ2Ac63JemfpeS7pCamDwfiowp7wMSkCqavtbLfEN",
  "key5": "CBnv3EyoHhvnYM86E9Z9jMWxEiBvNfrZfxsz5we9vQrNybX19V4hxrJ6ijYqvEe3SDhKDekDk6qYJMnrctmKfvU",
  "key6": "1GZFcVBGUMtE1hLCRdSGAAeBe53wWVCZDtuNcvNTg9DZTTMtdryfe8BQqRifqCLF1QZjbu875J7YxSeBZkLSEpY",
  "key7": "4rnkxyWhJCbDVV7Thtiar9oszFkw6N9WUhkogY755GvxYKFwdLeHvEvQbG25u83Yfbs65CKEhh24Se8G3yti3bUj",
  "key8": "4q8g3U4oR1jVLDg8Y7Sp5rESKRCkTFvouaj2ComJaFuMJPZiUZK8cMjy6k92XptybJ8H9p4fHfpspX3xB6PVRWAf",
  "key9": "5qejsqfdzwemXPTRtRac5ziMwQ4DDHF811ekqPcn8xSFrnr6rtiDgWJPWYHT6aLjNJjuTp4W3BLjPWYKpJ5sbw1Y",
  "key10": "2tv1bzDPy42km4u46M7Z6GvcbtiaP1XQS4tijStevy225n4ARc2C4bHpHqj8AdELVDWUwpC8mU193SyiqFBFhyew",
  "key11": "3WgrDFU3RCMuCemTrQoBKartkzj6TV7bRTrVX7YrCpWuA6fN61EqXnHLAHvEjrmVi9MNsCZFTazVL68fngDMLh3j",
  "key12": "uGvVkp1fGnaNWoj8bmrxaazx1dtVBt5CqhGEGdB8k5r9Jrx5z4Nj4FG1BMA2c5MWvF3cZXshJTJkS6JND5jabAi",
  "key13": "4xtKQVeGoj6NjzkP2TEiAwaARb24FR3wacsS2JzU7DBN2rVExBHEaqiDu9Vj8UKeYofXKJCNJD5fjRvmnN6bNgcn",
  "key14": "3nLTCKYM39EWcrTy7YF6FurnDLD4H4towsH9SThbTGirfwFxh9hVXDLtQK8mtQuEP4VGzF9nm5YtzEngNLXpU3bz",
  "key15": "5QG1CCb9kEfgXiEZbTRGBaVLGxKbPLrBa5AqbZeDVypfwsiBQKa9biHHPiG3xY9SiqWTTGyw7zEvJbygYcy7ZF22",
  "key16": "5TLheet1yT47GzVzeTzjScMWLSbN2BW4p7aLoN8QcWxvvuMSDBL61LhmhGkzUKsWmzGWRzieXgUw7nYssePFpB7D",
  "key17": "fmmKzpLj6xDUgxdLZqDg7QrcKJrnDhgFW3jXB7EuP9JW9Hbbfja4LemzsFv9B5K24qhxVppLEivvnPrM92Bniwf",
  "key18": "3URvo1bepWukidm35gqtbDrXJgeT6TqVqf4HR5a3fFD6sqqKBVLXg8SB1MBPEdfue2rqJNKVgp7XRkygUVvU7YEH",
  "key19": "4b6hS3DYmdPTF2aEHNrGJ8kGKXnuNMinK3KatfpKLdmK77KG1keH2GoziDdVU3fgsP8hZGVYp7HLwSs4MhQvQwkP",
  "key20": "49ebs7Rk6xqSzL1rRHvFwoiHYYFxmWwWzbwCfffy7XJ8vvra1BmHyZHGxuCUstLieYKVrJi8PmCpEQ7qGVjg21yh",
  "key21": "2Tbi63b1MMEG28saUAehhhoh8tcybw77ktTK1gHHhERBVuEf5c9AYn1FLSog6kFRc2Ndz3AwFudZcCKVSbunUuTA",
  "key22": "41tYkaWBAMrXrb1PUmAHHvMzNJJhnMbMqWjPe63PLr1v8P6qNQ6fjNzPBsfo21923feq5FnotdXV2GQWtdJTj6hi",
  "key23": "2DP7VgxFnXTLiPhGWLFo6bZmvpZQtk4rqFxHDys724B5muVVZ7PUotHiJmKCXPPjyC5J4N3jg4iXkLBqutdR1cKB",
  "key24": "4dk5eJ1ZR5rynna29aGoHko2axDrEGT4rwgmzsaDGaaoSS4eYXFpPY3siFdCDTcYSuNwybwoksntMEWnxiVv8BRP",
  "key25": "cPrxiu9uWue57qv85BQmhJKNqPSZqT3rAZmaUR4TZEPK7MXHS1xm3vLmSoebeF42gpNKS9mqeDc94QJvBbzt451",
  "key26": "2bJWk3u4xXHLee1ahjTSbct3XconhEiLVJM3NwLNfpqovit3d6ZzJxrAkZiiD1tv5UsZX2j4c5V6yAPZAvXow3yd",
  "key27": "x1ujBrRRN6BG7qsq5DX4nmNnfd1bMEtxLhziwQASvj6ZmiUK56iphUHocxHLv7CuvC6vWkaqNKuBs6SVeiG1ao1",
  "key28": "3JvoFGwMLgsmta8rGPreAgLeLNpwVpyZavYBFdkkHT8aBuAVzCztdXaCTeXL1BjTVEV67npf64baqA7RNcaSUVxS",
  "key29": "2AKFRwCXS3c6ujadygafwbugyGwPe49XkJRahrx9dcQQaMktMPpEnUnVQacn65pu6WqcVCKEDFkN5hNxvJfnjxhF",
  "key30": "3BCiH2sRC84FxWxJMVad6fh5YWsQuYaph9PAQjEpkCDKq1fcMgnq5E1tveEAUcZq2XVL7ogV5bNRZYC8T4o1XAgj",
  "key31": "3vTcjK2kfDpQ1F4vXhbFe81B8KHZWL3Pso7XT4CKFX992KN6q9j6LGHHNtPkzV4eJT7vqVt6PPbTaayudv4NQZfH",
  "key32": "62zCWhWm4BRN53MNPwpCkEgj7UFnKFcnmzTomCe1yPaMimLQur68GQ9ecFoD611FKYPuzQ5RdnDJczNWCRi4LUub",
  "key33": "gohRDu2JZjc1sw11ZpnCGmJ37MiBRPMFom5LhHpaDUWvTkwJfxmimrmzyvuCkQRXCU2wa3XaUtvtKKECq3A1qNo",
  "key34": "3HoWwNG9AwRakF1rR5q6g1pVctfzDyriuZFMoefJcwnE9hNDvykyNpn6Z5w13CSFDDZqtNsN1ePG4ShPNouze3zv",
  "key35": "4a5nUZYoFg15DKim4qUXFi7EDcykSj7TB4qfZD1RDaR3cbBRAhDkpxUV6ioVozHZs8FRp2SQuveQRELzxhD6pqD",
  "key36": "5LJQgadvk1gMUdqNcVTy52gAvyYwg2NgXrCmsfy4SAPCUcK1tjXL4eJL1bS1nZSLNV9oXdgqKAtumavGQdUfayoc",
  "key37": "5fy38ZoWJ6nFrWjKuehqU966Lb4h2DoZohEA1yjsSs9jFhdxRHPb716xnzdzNBNVxNgSD4opGhGoooLzetoWTKTQ",
  "key38": "KTwEg6djjd19fyHD9ds62poXqsqbe4BTKvkFSzLVm2oKKecWqPiKTSKJQwPmCuSKh4As8svDnGEu7WeREQFELSx",
  "key39": "2gUg8BgTTbG7WE5oJ6LwJcF5zyB1gWR4GMho9pGH4jBK3tXn4pAuNAXK3W3baX9ienGwjZpJ9DWEVoGQTtFXyiYt"
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
