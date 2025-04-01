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
    "4j5Wef94dEUQ33ajezDdmDdzAX2x2ZqwbrzS5SH9k3ruCNQ4VnSRhX55aYLUcTzUiYJ7pc5cDTdDP8ADbPHyZuBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o668YgHhNSxuhG6kMyQbthpQCWvTHoufCtQMyF826aretffb9EuEEDeAoQGy83LjXfGCGRZzRZS5HUB5JMUEX7k",
  "key1": "2pCLrYTcucHcivAJrzuHjfZLtaqcaUKHudC55hEa8zhZejNYvkbwAjcEqBKv7v4HkhYwpb4aRTYU3b9QyidHxyb2",
  "key2": "3AhLaAY4oQ7Jsb2aCYAcEvX2RkJfHUXsJPFMBqjPehDrq1FWzudB9n1jfuGC3UUYi92i6HtrnrqdM67QNUANoggh",
  "key3": "3THbi1qE3hi5VDmdN1gqw73sbXSXuQzgq5jwmF8ZKQfegqko8CFkgiqAHVYsYpPtUzoxN5QeT7mkSesM7oAhWA2H",
  "key4": "5tDgw1StLkNmym9qWJBU1Qt2bXaiXct3yFTymU5xheHGrBmfWQ6rsyEUjftLzhUKsqS5L7hEbp8H9iAgssLcpBVf",
  "key5": "378jHRrXPdHmFbM9ecsGDG1v91UC5TGcw44TvVFAdPUXQfr6vpLzUPkUUrhe1MYtyrSQqETtnJb574KzAcs8Hc9q",
  "key6": "2eNBVrno7WQiK3Ui8X89FwNDP12WNnovS26GZPAB3hWyUdFXeFD5N2EnRJvzxy72MRp4bzrTfFJRH9GnbWRJr1pi",
  "key7": "3KEZJPWEAN1mNdZV2oPGnni1a3YkRgGuKY4RZXKLmfiQt6Qbkcc8epjdQgrBP32pyrX9KEiErAUaRc5ZNZ3oTKY5",
  "key8": "5VoAvNg2feWC5rL76kGCDNY5kF8fbV8VSBcSxEz2qQfwmRmcZdGy1QyWA3tgZihcbWutaEi9WNEjZuXHWPDphdA",
  "key9": "4vniSUER19aYCp1btrhDYqAtPC9f88DkjU7jkCS3RNKxhxLJqCviNK9PB4AvNyUbMgeyVwTNxwnakah7aea8ohpF",
  "key10": "4QfC8sSD66q1dkTPWNGRUFTmgQc4tYtdR5ndJFBH5pmWzLLYUbjvpTkRqcPqRLGEDnyNbktM1JUMAEAz9db7hpAJ",
  "key11": "2qxxXwBc8fUX3Kubmw94jWX11g1ijxW1H7kb79bjnAPcE9BmC4GzGDq3qJBv3jycq69udV8amPBzAxGwe8KqeWMM",
  "key12": "2tUtJbSe3bVZ8aTSc8vhtTkNvQj8YMvXS1JzpVKgrT87rrz3z6QVYrTiZCTab7r7AjU1eUSyGn8Rmn3TtdFXAegZ",
  "key13": "4NCcp88nuKdZpehoAF4x3Hm6BSpqRi93d6kBxRvo3aKStnVR9VtDgjpHurm2YfsHqWi6qu56aqCW45tPzN79krf6",
  "key14": "2SkpyemvnwBmREms1KYEw5fQxGdmcbzpTPCkiQZrb2Tr9yQo8E5erBcuZetxTZ9SbFpDBt8b7CrsRxskDsHGgnXe",
  "key15": "5b1LgxQdYsEtWsNWzCfhqaGHjP8NrtkhMcW8E3eDA3Psf1g9xCLFq9ys97QRCKMPzVVAjDo3YG4zgEdy6vEz6qbv",
  "key16": "39Qbq8HdCDymtvXnWAwNdENGFrDHALHSdgN8w7uMW9qpahXFDX5iwmGrAUVwaL2YsJfiJvS7mqyKRkumJEXfGfuH",
  "key17": "3NbKgxemCzds4ZJ9ajwm39mWJj6JARcDnNCihHCauKrVZYSVoRo2p7pm9McWjPgtp4hqzYvsDNFWvR2QZodPDeYK",
  "key18": "5zphyD1MEqZQgwYwCwkmSJxjkDSkdhbK9VLBxxHzu5kHuKF22Zkx5JADxRuvf4dhyFgBSQSEi68USM7sdxYAJGua",
  "key19": "4qi9GcuGJr272CAgSy4KB8b17gtFbixZK3NNhb2nU3uUoaRJs7z2VQP2kRQ751UtjRgN7jY5CCfsKBUrNCVaJ8YG",
  "key20": "4dpET4NYgbqj4bgdS6BxF27y558e1nDABWbrw5NtmpZLtwBk3k1sPwjxLdg9ebCQkrt1ZyeP5EpsET3YM3kmKa3c",
  "key21": "WkpkGhtczzBQyArswucvT23zsKM8UzaHWYraFYTiMUTjg9rHc47izwxq1RoxmsTQreQFGXF1mMaKUJHcE3YGDvW",
  "key22": "Rz4E3yZX5J6qHJ5u34nNp5BX2HvKnETaGvKDerPE8YC2MrCHfsR5X4bLFQBLtGEmGH3JNtGQm7YyqsKTQX3CGar",
  "key23": "wiDY2XPLXsgNcSBB1tXV4QZm6grQ2zSo9hu8RvddG9VdKoaXdrf4mNosgkhwgd9F55Ep6EYWt6eBUwTY38sFKU1",
  "key24": "2Fy3ULG9JjMFJUvY3ZciF3ojtCoGJE3Now2t3E7reFYT1suwj2ghbgngLs5DZJSKmiBAZMFm1ebz52yeJb4Qxvdu",
  "key25": "2UJQJeTDHJTERtYiUQcDA9paGcqqoS4BiM4XPXAvz25HH3EJ7D7CgnjqXvRHZTms63Yb4oNULKwQgf3zdmYE8ad5",
  "key26": "4xbtfYq4T316bdi4kDbSrfQcd2rFBfc2Ckc6zFx1hFGUtwRizwzDwnZVBdA42HQdNPTx39rAz4SdBkPdMFZ8xHx9"
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
