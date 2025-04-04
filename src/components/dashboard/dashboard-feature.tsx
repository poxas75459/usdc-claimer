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
    "532oMAEnGts9wdKbYmxiWcuoHP3T2EugEdaWKQvPSxaSdopwJSj2UawhHjCJ4C5EEn7sWPoZYZZE8WqMowUUEegJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qJBXbL4P8XcAENeVWMh192QmCwKSHpr58DE3nrXSFt17NnVvJuRuZCQYnNkDmP6W7rWhXZggEvZYkvJjNmZeBmj",
  "key1": "29bceBRiUEMKHT2vba4C4ykmT9TXrroSk85qJUxLEyfvtXzbyttTWrGcvmpXSR6w7FPXtfJi5MXKt27J21KLwf8n",
  "key2": "3o4xyhG8aPkkEZr493hNmqRj2wMykduTijE3Zo8iVugM41Ke6HidiYL8NR3EVtNsn8F7gfuBtriRe3fa5ak48Xyd",
  "key3": "5biyAd7yDZYhCCbNiRQfVT2iEEZPvEiVwPZDwyiQQP4ycRaH78ShiVYQDJM8XCpughATTmtmDcocj4483ECHPA3x",
  "key4": "2b2nicefL61NADb1YHQJPoGMrB1EYoVF9vpqBKsznMtgrnpj7kfBicmAkWzFXrrd4zdN6BsWfYE6Y6wW7QX14xm5",
  "key5": "3AVEhdgdPqB64rN9EWrcRxAVXxsKiibWZGGjZa9rEF4NffUyhCe7BLDvb8zVwQRMNVK5MVo74kqabuTjWCbUETT2",
  "key6": "4pUU6GxXGMDdbfQZiEu2v29yvKh8pLcXwoSogd8ANfCeGjkKYLfeoQRtqQsidShugqwo9E21NUjLLEyBc4jwhfef",
  "key7": "38W2EoqHGBaQWhqcNZvrDUjgrsSpBQPMMN8KRdBAWuzMMZUYJVbH3D5oVvuvRQHir7322DJVEGRLzeJQZ8DKgM9o",
  "key8": "54S7s9rXdBPpVjc7vUZEfDrFVPkXhiaVt9HKTifAMWPYjNu3Qv3hz283g7jGTqNdzULEYrXr91XoUiJsuWVb4JxU",
  "key9": "VCFAAF9JpgqxmydKEUscK5WXLW1DC5H7ysRuKwCnGnMfSt67ZHpNFTbeyV7qtx1DeYzdh3wbRiZrw9q3R8ejQNY",
  "key10": "wyq3jjz1Qf9XgAqTuzmvHwFXByVWJL885XdkrH6ThSr2MiL4FgAysNuj1sUFSaftQJ3X7YCSLtVm4ERsBQDUTpZ",
  "key11": "4XyPRCt3GV5Xfmtzw7Z3j9Vy7mZkedzxKx4UHp7q5RuHU318TfME2SvDNBMhRyVAYQabNkwpS5kX4i6tchVvAGFu",
  "key12": "2dd6hjs197gquJPi9sbRAwiGNQ7jYxtDmaPFnM8uEBhV6F95Ws29viJ9GdNQqsCaueDdKcHKicd7TRee9JUC9tsV",
  "key13": "2ZvbtJma9RPh192t9EabiaXTSRi7t6LX2kb2vkDf6ZouKF9BxRAPC97JyUHiocojsx5zj3P3CkK8xFm1ZdT6Zmei",
  "key14": "4ML9JC42JW1yxe4KhDhStqqXanKgbHBpXtNMhhRMeRtoSQJQpSkmv2y537qrRcMDDEiNsPQpfugKaYFqCUxxijD9",
  "key15": "ut4YaPkw1kYpdAftzF17GJjHcnKxaQwhJTbZ83NRHJvtWh4MD2R86VnuAC6YYej8mKTKqLQ7Lr2xgfqgV5Vbewo",
  "key16": "3yjgHy7hbPsyuMsDAW2G88HUxvWnj2mjfv7J9GKKJYtoK5JowQwZ8LxwzTQ4Jc5GL8Xt2uWtyRz7B6MpGRqrbXDL",
  "key17": "2APV5nhyQxfaURVxTmjjnT47geYhCmciaN3r8xUdnxni65HwmXo1Ua7gwMbmMRnfqhwQQvEoA7kRV9RzhVnW5vQ6",
  "key18": "5CAnQNiMhVNUmuJ5Zug7QMzFg9Bc3hrMiibUmsK1X49utQdokZqaDMz9JNf5TE9BuqzMb5jGus4HoZvnsqCUzW1t",
  "key19": "5o2FcQmrx9rfgPbCzaAf4kuoZh9VzPxv6TdhGwQXur2UEoap8U7Ybade4zfPoZxrRwcftYyVxN8YMsQ3m71yJe2Q",
  "key20": "3MRjrxHapn313xnZe5B95riReMGbG5AJDUP1GxPtvJuBEX6WBkLkzSjUDqK7vvyDDm3YnmKFauefwqKMFpFnwpHZ",
  "key21": "eNdPL3e4dqCBKLFnEehucpAQ1Yb9W2uzGaNhK2zZ4A3WLnsV6qeAQiFzeRzLBVtEAoU2LoB2CxGQeScDTVC1SPZ",
  "key22": "66uzGSaeknpaSVQRKsqTZvieuqd3N85sYCBKfW3TEJqpdHhwdDnQRj226BTmzr2d5ZFH8bxc6qvhzu2DWQhdHPFm",
  "key23": "5PVg3yK29BpkJBxrEhZGEjJQ7shi2ZiA3Z72y8PKqv3zU8xR6PZu1Yu3vZnFHeeRFNEoe76UYXWBHCtUcAZPeq7K",
  "key24": "3Hs42L5vsoMYwocoobf6Mr97Ko6zJkuABjWYb4mTGik5L8Znhxg7D7JqNdP3oyU7VtRYKx15vmzQf9ZPMk2gizy4",
  "key25": "3KjTZ8dRP3nYKjkigdyv9swa3uWkonRVrGdLGUdHhv5zzktHoBRYVSi7Qa7SbUppCZVdbCecKSfksif8SBj9bxj4",
  "key26": "43fxdu8M3C19oURvrV7Ps1VUnzyMP7kaqqvoHs2VcsWzZMkoTd53qkfyBfFnDtnAMEBxaPtRzff4KLKvBDXceA95",
  "key27": "5kCKV9JNdvnXpu5AATAkd1UYUfLssGo9M4kB2Zv9XPtz5xyeP9snzxn8LLkFMzGYiNL8Lyoba3pEvYEacQJmMJ8",
  "key28": "4w83eD76wr3tMepxjFsMRaRDCcuFhgcAhFTfK8SJYvYrN8HZqVeLPMQLQRcYUfCgtR9DoBP1taVFpdMJiMkdhzYU",
  "key29": "5uZv4dYskWx25gS2nBeDavcrGtwRfu5iJNY4VPST2hGgkccXWH3RZUWh3swKrNBZwBWxRXLhS7FQp5inmQmQMw9x",
  "key30": "4G7sHapLcyrXLKYoA5yLgYgfe4L7TSTLr7CmrGfBcWz8VwYWCCwg5sawLfztwktkUTYUmvpBYfxQ9fDsqMsbeDi2",
  "key31": "BQwyEyXCuyvvCSuB3VWJH95SGgGca3ANs3xtEx8y5bs9ZdbRjFFAjszGbDbkDEuT9FcYsYVNo3C5tfkn1DYMDHN",
  "key32": "jwq4Q72RWnNwnREjytNtdNN3CrmTT2UDzLZsijUdPxfJnCwc7mJFfcbd3TCgwW1FNdWZ1jHbh39MfkLwrPHthu3"
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
