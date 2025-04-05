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
    "5GkLiheGbRcxwRmUUgEBFdb4vnHWsxYGLpAQLTeX7vhHabMbhTxTwDRFNDdSC5wS2uncJpYkh1ygwLGEGmLtkivJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D9oA2XC3DyrKURf3HVRVmameFS8iMMwG8iyFx3uAKQwdwUy6rbCp5q4R8XjoogJPoQ5KpW35JqGKartCaNG1pNf",
  "key1": "3qxvmnxR4qnjcnvHkF6HABQYMuenvmCTxaDKXYLJVdv3eY7K2tBmnbqmrsbTz2P1Rh5bXFfSUMju9Mu7J54KjZMU",
  "key2": "PWFvghr6Zg75e3LQbLQ8k69LbmCzDgFhzXdQGg4L1npYF2jMJKpHaQjYvyhxBWAty8qhBFWJucr9qRs1Doza6yf",
  "key3": "44gsHxL9uHqpLwzhkgWrT55UjNekbEibEh9CQhtiWdGoffCsYB3jWFs7hKUiVXJnpwdbZRmiT7Kn49ExwDmutqgK",
  "key4": "3kJqbR7h4rNtbNQmRiaSGM9uxScMQHGpsaqrv772YvRCaUDeq8HfoQv2Kj8QFNHvHw5KxU4qsZWg5VnRrT7FX8YL",
  "key5": "4BNDayQxa2CM7kPnhg9GkCED2xDVGbsEK7DdNTq3GGXDwMttsjrnbwCsiLXynh3qM6hm443PQUYvZWiCK55dcHMn",
  "key6": "MHghTesHkYyC2RqXJEQ9S1NB6YK5zk3QPYMyCq7j4C2SFJaAeYJNbdxZ6nnNrpSkB73MtjWzFePvnKiHYLstSvm",
  "key7": "4LXk3qTW693BMejMj5UJpAzgsM1FH2ytfHtYdNXjEH6wQ2qRPL9EkzHKaaxbicJFKjoqj1pUFR391AHfmVBv39ff",
  "key8": "27m5E6qzWEDJhgWHNAWx2RsjEV1EqWfQBJ8LU9LWkLetJrUvLSGk5gk6McPcnmcC8CqCk8PGhC9ZdnT1613v4Kr8",
  "key9": "86ELzmcoc5wz1jGz4uZejsVWEW8pRzGFdYioNdnxrM7AfkEjSoh4KxhVg3vBcMsT1KFVWvAN3NAiTLcFRL4g5q6",
  "key10": "4dwY97v9nQW1YjbAPzTND6sLtrBibJQZZgLcbvkAfRg2qdvgxMdbhFnqqFSNBT35YVqfko6Hav7KCeMQJ37UhKcC",
  "key11": "5x8KUJUedxLJuR6N9oVrufyNQwp2LnNvy1kMEqa2b6JrpWe6rBjADe4jREKP9PJmkVYQUyB5sgsbZPRzfj7KXyHG",
  "key12": "4HuBnDdTiv3cQnxmx8eL8mitkQHmyGBiUvMrMSftAduMqxWbvXxqCFsHXokPRijuGytBK7FgRweJfvfrgPTZPDuE",
  "key13": "5dtuwrSm1EeQmvDszxgdUiMsWNLDDRsYttDVzt9UKSZU3snqDJFSnqXMF7kLg8DkwqXTJWc4wg7MKuhn2G22tKeF",
  "key14": "2YPs4QmNQAERazNhr1VVUigofsRyjGHNacf3pgW2HGBPUygMH7i55PayeFZCSNJtj3noSFu73X75F9FmSU33GyZd",
  "key15": "3FoRNM6B31PsRD2QXqxKj8F3Rn3xqUPcBY4mwhqMmxyVL5w6Gt16Wpidv7nB87eFJ2nyabLgtg6RquwWnWmPE8QG",
  "key16": "2hLfEtMjrmFhS1mJZW2rdY8RjT2aHqLAxxnejniNnFqpkHhHcnUNUhQgU8f1GsCcsL3i2TD25PFJ7H8o7VBCRDPR",
  "key17": "3Ny1KQzDthvPvJVH5ac83Kh5pYrYYQWP9erkC6u3efpgrnvx98JQqRJm9w3ez8xbErsgtTVMyZbw47FWY4jVXUHK",
  "key18": "V93MxMsbXg2pU64haZ2W3rAEekqNEifidv7xfRn25RPthELM2UipqgAd4waQpsbZpSBCgzZsDtbe1XMvStHYKei",
  "key19": "54K95vSrvwsjssxEEoa1FtiAhrTiBPh7i29MhFUrbZ8eUinJHRVoUsnptLenC8cyKcg66gkHohNvEW7Augw5ZP5t",
  "key20": "3sUxVPrgwvnfY5d2LKmGqsn4w8c9g9LBUY7w6iKsYi8A2kycZ5H4xeYFkBu2XGMzqT6yoCnhMa68KLRZhFJ2K7HK",
  "key21": "2BsoFyYzGgRNEhuQk8Z52cSoY4mbzjrZ5kT5hWo1CdVjbKBMPTjYn4KYanAJtrYSRjQfSbTFrS7m6q8GF2EnG8gn",
  "key22": "5Z3P5aUqkJNyJAW6JNoKbZ6Cxq8esLsCgNNpneDDuYZLv7eELV4Zoajn2ABDsG4imvWVvBdQZJ7qjkkQY7LCuwdm",
  "key23": "5wHxNkmGCVKgqu2YStUKr8VVLLXziuWMzjauSQSpqKYkmiJ8c5kQ6j6j8Q88PpXmRzv4rAQaWUjHPEEiKZiqeZGF",
  "key24": "3FouHAVgqhXY4Xg1acppvnyCs7CcsAjP5ZMnEXLpgYnfpQXz3Zt7DWfgd8jaHYaVatxMSfG3RSbeAtS8TV2Bxxev",
  "key25": "3sdXKQy29DfbhN16EXtjxyoFEJP8XJAQsM6uaPnLvV5c9YPMG8CpRYd7L78KBwLPxzXaqHe8m2GtBuoFuTqKFFSk",
  "key26": "2Xao3SjP5o1xGzPxLRFXkbzhP9GdLbf4TizFFfhoJcBAxBKLfwkbAyihSn4i43k1sA5RtBz1PHPtkVd64RnFHbLH",
  "key27": "2ND4PiCyGbBC5iFvjR6aFFXps4Qjw4BmmDvsj5fu9MBoqLAcheKsTL2U8RtNbTihFMxUopXTWMNVDPLVCfQXGHyk",
  "key28": "4JHsZxiWEfc6HY8wBRjtYXXZATNPs3j1bjehhnX3tZTpWVe7d9xDKx6VyCZJedGZb4VZCXdWeiUsU7H1yiTrbBKU",
  "key29": "2EKhMN5kv1aGgcQfk2fyTzhsyaHqoC4rcVRoLfuF2U2bVQmbzSUqALoX5VkuaMDZmbcQ5pmb6cLyj954JwHqxBmV",
  "key30": "5NUa7woDfnmXGdfrCzANyndXj2Am5TAmaqYgH5QNf2UZRWcA32B6DPimjUfNJff7neKE5J1M5ZrUCYUPbMy84bST",
  "key31": "EzZ9n55Y9rS6CJmkix1xX9TFyGc9VXRMXb5Lb9c1pn8ZxMVpRNeGaR3jEBWZNGaa5T3LA79uAj9Fd6UZeHeQcxm",
  "key32": "37mXcKCPWcDdgyjhGBSKpuQRrsyFwVmtCLigny5zu2F3bNrMgEyqc889K7hDExP7JkX7fzpqRReHH2ftYRUuerRZ",
  "key33": "4Hxgw5m5x9rcj9A7GWyCxeVH8dXaPEQ12zM3V1Mx1zstaUq1yPByTXNsG16gnQaSF2KMRsZH1ZXPGeyqjYepKWuo",
  "key34": "2U7sxDxPZ8n6isdH758R9heu8eTs5KuCeggFdWm9GWejMX7U1EERYPyYrap9wb3unwhNFdX9EZc51nNQ2RsGeu8Q",
  "key35": "4Zm56WP1VWRo2qhDWgXnv93vZbp4qJJuwgP6mF5XcAPeDUqoedWCHGRU74qdY7FM38NZiv76vqpXWxzHF9rq4gqV",
  "key36": "2zEchcXD5951Qqd5VTbVKbbiVWM2i3QDGbyzoWeyr72aeExPmu6bR4Hi6SdbNhCWgfob8uzUKVZC7McCrsCgAuZM",
  "key37": "x6AjGp3tDyNBCW4zpbWwpnG1r4Z28WzR6dCvR62a64MNtHAVcuEJfY9XNBxU1m5i28YTqYKvcHvxfvCBKNtCg8n",
  "key38": "4iLiQ2DnxVkaTBy9Wh34daSwFRxX8HVbZHkptXqGHZ7L6gxB88y5NhPRLUp7L2Wma7ZXQ8CWxH9uCN4SpT456LKs",
  "key39": "5C5K7hr8aVfWjAE5g1TUd79cohiF4Kz5gDkK4hrrn6dai4gBdC4yGW3zMxmFq4o9juZR1YAUeFwZeRDuPYA1CTLy",
  "key40": "s4PvR2aZm8CWuETuqVayCzDFsdhX4GuBBA8xTgTDkG4R9bgmZv551JTeEMUZWxRmanEQixCHsCeLkSbB6BF3aH1",
  "key41": "yUdKvuE93q6jNU2pgUwb56ASNnrnHS2chQdzmUrqSYWAt8WE6z41Trmj95sR2DMNYSZQSWGspNk6nhtidcxX3T9",
  "key42": "3mmRUTqra4b19Chhto6hxgSNuZjwwZfX4abXhA15Dx8ScYBYaaEtkXQK5mmxThtPEE1csZcbu9XgR3kQZDhagMet"
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
