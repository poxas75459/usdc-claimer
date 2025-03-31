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
    "2aw4e3egp8guDhio315DtKWMJihGSPp6vbic1QExQiNz4MDQBgqJvc2tVQe6MK7vC9Nfk9wx1JUWWnjM3G54BeVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54XN6bgp54aPYHxM85dKKkyWhesEqDGP8aLobJb5FAcyAMViJd8zNzj8w2F3L3254qWT7FDvVj3sJ2efAj9pfzJ",
  "key1": "4KM5B6BhA3jcNZA6UukUFVGpQwCU9XXbgMxny97w7Wicgv5MLKJxgw2ysrucSuV7p6om7VwDeSz7n7GfPbR4gTp1",
  "key2": "2DefivYg5amMciiYbsApvP3xhG5D9HeEUJnPuxH2vhrSUVKVAHjPNUEX7rgLxcbZCEkuqQok6bAcd1DT6cGdzBFd",
  "key3": "2K7YrRzd79bCWZxsEACyanTGPNkyuMfkoLkJoWEDrqFQEiE1NH9LCXqsrQ1mie3hG24G7vVM8VrxTn6h9ZnsAECC",
  "key4": "35XfNdzKnBvnFyRbQVbnydgLc4kbfeRDtdBwLt3sDFwYWGreothaA9CJaxD2LTj9RWpaXSS2yLR9HwVbvNWSq3wj",
  "key5": "4zFBB9Kmy3apB9haeosMLeNbdnmWEw9RgbRq11TgBeZeWvFoAghCkgQ19Gkv6sNLbE6oSpWG5MRiQQN2ohMfVWZD",
  "key6": "5Y39KEPpfwnnPFYGst1ssB1CCAFcuVFLp5PdtGtHLYVgstCDUMmLpzj6b54meRcZGLXGK23dgu4pV4EW4jjaoYVc",
  "key7": "2FNtDtBTk2iJmdtHPS5XpxtS9jdPMb2uhcNVgYr4b2W9TjCdt1av5irfg4weu3cq6WsViBSdyZsRAFP3ZydCB7Qi",
  "key8": "41zQxE9ef5vr7UZTfAq25MhGAvhcsEZcmMAuvEtVwrfjSPN8oQa3QkwQc9kir9mWs3gD9HGx2RUPbt59bEHoHGYd",
  "key9": "2cYo5WffjF4CH6UgReDMaTsmKf8WpEzmfk8G312qSd8vnMAXgPNegc6kV5fsx1YnTacrhH5BnFNSHJBoeqANfxyj",
  "key10": "2XGWNyfK827DMQuXBVnwHuqiehEi78wzg1vyGod47oq1e6dtm7fy4hKrkPNVFpJMdaq3oRoC4ezxoNbMA4QDCfYC",
  "key11": "5tW7GFNeUqTztuDcntSZafb8dMW2Qg2bdxD4zcgvsB8iJBZ5ifaMGNtYQCbPGytuP1XujakUfN3HGfQ3AK6tqPuQ",
  "key12": "2dFgfgzLo3TDxn4YcU7B7kgeGkTUsLyPTUXT4fiqMQyt9YRnbqSQG2kfHY9SfNgMJaLbeAp4crAid458zDRmbntQ",
  "key13": "49C2HjvuPyh4KhGxL3HFj1b2x778qxoTKLBHfrKzYw9FrLg1VdMiSWGSZB92UEaV9f72Yx2JW3pARX43xdBhyHZM",
  "key14": "4n5VMCyqkVk81Tj93G6DoYLJ24RfS348Bi9JMjQf9QsrrNwcyrApRvgsm1NqcsBSEhks1gmEXGwWqT3f4Xv4JjGk",
  "key15": "5MLYftdmMJQ7Q7dinVbV9PR8TdHX9wbGY1ZuuHcQDPL2gqnay6aQu41k3zT2Bjp8PM6sqjwTBbS2Sg1eDiasQazq",
  "key16": "2syJhhxTrJTPC2u4uZRViBsYg98YWYGTykVTj8Vo1BY6BHz8wzweiX7GS9hLV9FpED72yxZeL6GDzpQBDt1a3TXv",
  "key17": "32Hk2yG4ck5pghaDdQre15EU7VbmM75zTMPDbN7mD8y9pKCAWohUSAHAEaZKvU2Bfvj6GCgs6onjjutscz7wrCAG",
  "key18": "2AYzY6LKHHtFQw996BeVKD9Ffgosg5rubSRKE9z3LdtwoxnLUwtw743EviuVzE9doeguFvcXhaKULqBj2br1W39e",
  "key19": "59dWhmszLe1RUeEhtvdYoRBD1TiTAgmzro4QwbRDjqAiB68eiefwWnQHxHe4u4dUcsTzpSa6TTjKja4J6MUfzqyG",
  "key20": "4d5DoSGAdph5DR464yFtxjxDCmX7LS5uvogHjLHJ2TVdM8bjsUYVsgcKfJUeQ7cEUFZwgoEpv5DNnEFeQLkPx3hh",
  "key21": "2G5JYK3WQbPChgyvmLmqQm9jpZ41yom2ZTiuphmKfEKiB7SEehRsQfbAMSgH8WgwvysGnFbJtqpo1ZdKmruXecor",
  "key22": "5H8Dy6TwKNNcmvBhnMPjs8pbftTnX87Sytij37iew89oGsGgv2rnqmNymuxUhzEAaL2KH2NzwGpiypsbssPX617H",
  "key23": "2ywimMX99rXgsYhh5KPBsQ1vtaztAngU3qh3uk4oAyPmJ6ix192bYjHTKV9ckKH4h47JxLZfAzRaahj8hSB6wySj",
  "key24": "4C8cQ4sPEYm8VYiWoX5iKimM6LoVhjb6ByjedGdsdiWgs8PKM5JJtZaDUzSa4iJva1eLhaCKqpnJ8PnTx3DPmHqH",
  "key25": "3NjRX1yo1bYUiAy8yFQeeCdqN8Y71imeGT12C1ZGRXVPMj452ms6VtqPPqpjV8fWT7BUu5CS6gRFp4duWX6LgEXK",
  "key26": "2suiWF7nyZyBWt5Es7Ri5aQJBDZAern3AEfaw9FZ8EbvWT8aEmETYVbyrV2o5EzvKBur5mabwx7QWpidLSXtJi4H",
  "key27": "64Ew9bq6M3mXZzLrBoBuXM8WJgpp5ECumMqZQfRT2VbY3ArhFdRG8m2uVkqbm3H2fmxF1CuwSYfq8rKRKkHUnmWS",
  "key28": "MW6rmmqD4tBSV4XVdzEw7CSf2LaVhQHvZGtn94wcLHQjAVyXDumi1PQeKKFBYftWu2ogXuAU3bA3swA6gk1uQuu",
  "key29": "2zBqa1A2nZKGHuuVpqpBbybw2EGdsX8xB1MBi64GDgrx2S4ZENdvYhaDuqpuBpGRT16knnNg93VLQTJG49kYGqpw",
  "key30": "4UNLdBU6NegjrWMJB9T6FfaB5dARU31jhvH6b2kSbCUVSRLEV8Gt63QxshBxhw9JPsUQ4GuRLob2WNXgJu1EcuDv"
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
