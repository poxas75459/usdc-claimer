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
    "66HAKZdqha9cwSgmf9CpBBJpMDb3uwT9dxUBcmmHwa5xjKC27E1yRt5yTz6mF7FmFHkivcYnVm4f4Rye4CcgJpsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "369bAQkdp6gzucE1VtZY521JBKxTs6sb8prvZap3syTRWW7RirntEiNfe3tQZujueNQoE3oZv4D7DhZKXs3bwVgY",
  "key1": "2pq5Qw8YsByRyGpuoka8bNc8ZPHpPPz8pLgNwBpMXu79g2wtDbE33mtqLPPRSNpksLpyiiBa4ygLDUfvTyD6rrvT",
  "key2": "61zYE3sEy4MgFAD7NfN5JnRWAL3bCbYWsN3W4R7z2q4d1unfsT33kAn6bk9KX6y81zX12ahD4aof9zSocgQP9bQH",
  "key3": "5rqBffLENtj7Z336bspEVWs2f4ZgtD6XXwRqzfjX8VnyaYqrFVgB4HnYkWYqZoKLKKUMxjrVpeR69ZuuS1brQsSd",
  "key4": "2wcnKTtRg17TeJn234DXGSFPu1EjKPh6QnczMNZsg7VVDnahVz8Ax3pGWh8JfpaJo1gC8WeLXBUVzPWJXGb6wPL9",
  "key5": "5b75TsrqxPvSysoeiRX3edGLrvDxgfx8G6TkNDs7i8LkYtDxdgKYCuBsD95wdejSroJyx32sBWZPmtdjoCofJr9A",
  "key6": "44PFmwRQV2AMscFke2uC6eiQgvLfN8i2FaLzmQrKNRALbe8NjJzXX7roWFTiBy7tzX6kWCw3CBDiUR55WJwqNjsC",
  "key7": "2DL7upqHQTGbJ3B5274MjNR7cUXeUJ7AW7zDAcgxkb3a24ibdqn2WT1pVZkMAZzhuajQuukugeZkCF6MQz3fXDVg",
  "key8": "J6umJWp27xnbT6SdeBer8dEik2uCxYpYe3Spqrtd1WSYuokKzmqQFjzqabbtWh4YKu4PNXJzCCiTNDgVs2q9FuW",
  "key9": "3H77WCziVNaeGqvr7qrNievbE9t4inAPD73t4dYrdpRe4f5JEcKwacLPuBWAtZxDVdd9RJT5Cz9fS63ZknbfVPbt",
  "key10": "3H6hNhy8ZbyfUTVqEPzBcGLxFQcdFUkdEcRrCGqgREkA2Xpb9tdkYhoXYcR6Q53aFL2Fuo8oxEQmF2ZkuuhEnjvG",
  "key11": "2DkqPJQHozMdX1N6BX6d9MyqWdWzd6XDmpkgwZHYGGSwAL7S1ZxdUr9c3cnRW7JmWr9H41PapsD9tYtRCrPZv3zv",
  "key12": "5dKLmnjwrczcmoW6rgiG8ySyfRMbwT6rjq2jYfoaShoQTJAqzdRWVgPXRiFh6CZsQrPsE9MyDuDa13Aq2eEL22j6",
  "key13": "3NmQfF4JySiMvhGG5RMqifEai1FcbNW8mvN9yFQMx9CFYr2YVrt66VD1bEAiVaV8Udbz8P1VvguHy9TWjhgGjSUk",
  "key14": "598Rq5bmGKrdfGGtfSBtNUFRZTGKhwVHfXEbTbkuZhvi4pk7EsoRh4kfypVYYZHAvLxdaawFz31AWH1s5HoUd8vA",
  "key15": "2tN3hbPQbjnxWQW6dYfJpRLj4hF9oUsnddAk2MVqktn1Ch5FkRHmMoSXDV5wVPUyBA23dUjAuSYJYjx7REFfMpi4",
  "key16": "4umAvp3UPSZZvC3rPefvja32MLdAftBR8Ygi3766u4BEbvM6oNonFU8bPdjnEZBh85yo3ZDTqGRHTN8hp4nL1eKZ",
  "key17": "5arqucvsPCVeLmZp4oSGUUiKavRJT7ktZznqEcA6wgaavC6MPdpW1rg8WT7NnyPvzTBDW9Uqegiv5GQApzGFWSkY",
  "key18": "2JNHbejHZSbKWXpUyr5XTP34eSw3D38u4zu7u2UDfSNaS4dufg6CbaxtwLUYNE5oP7KqqghZXsbkcJmp8atVL763",
  "key19": "54bjGARAaiGSNEdtJ9h16dkvxBg6iJGZN1asfYj1r2WNz6wKGRunVU1ruBPtHGnS9cDRcPs44EgeR3RM5RmamJeZ",
  "key20": "KUsR2mRHcksJrpTZS7saZUDyZxjj3YSujpRmqwXHGpZuczh92PCgvGCUfq13VfMadHHoDhUF1AX6mTics9GVoJy",
  "key21": "4ChsZ3dHM4MVzQnBJJnWuZVUS7oKw7inz9upGBCCF16EUSDY3NFHjoomGvWmAcYm5AjVDsUP3zcdwGCwSD4wpRd2",
  "key22": "59FkzCLLGX4S9Z1hCqA5zARV5iUZSsYdv2k8AuU82TDtzp7ghD3A9baUMsQ1haZ4SQtH2Rsg9t99Qic1UMBU2qj2",
  "key23": "2dYEdMca7moxNXeXRcnChzh7HxJRHmBZHBBADW45EjvF52bjJFxWupHcYMA9jDF5Ndyrcvms8wSbT6mtwhAtmZ25",
  "key24": "4viQ9t18WSk1Eb5wNxAA9KVCktMxJ7AfdZAqp1rhCxhAZNbMLNXF8usjhCNY5SnqpCmSBUtKPMCeQyzqfs3eV7zR",
  "key25": "3ZxXqYJgnC2J2MjBX8ewiVYWBYpNKin1hpsxkRRSHJFYPaAQZoK6gKyZcGwHGsJryWxaBZZMDBSjCeCvr1WYPahw",
  "key26": "4Mq3D2Sd3D7qx9CuDk33F7NDL5Yp9Fafpa5uMYoYASaTpdbJLnyJCbiFBTZkAgV9AJuex1TrfuT2gvDy9dMkLrMQ",
  "key27": "5fQHYUnjgbR3QbK9KDmMb3Q3NXzXDUUHaM92wkjxeLtXp2jjWFSvzVfM7YAhCnnFyQ8XZvysb2zx5g2T32bPYdfc",
  "key28": "3YG3JsycuYHJxuC4QgCd8cN7jJkNrovqZYJq6oXYRpxZ345Y4MPRJrnkHZcsjjzhu62W4r7fM7r2CXHWfouqbEFg",
  "key29": "312RjYBDtpJVpab7fmzPQ9yXNP6yNMbE2xqiTFXszmWQXun6RKvYgcYwYHXZqvRS4bRJdWNjqMbpBHUqjRzKNCKd",
  "key30": "5weWApGRsE68U1CpHfYVN5b8pgAd63bcaBYZukbdipmrnPSt7em5wTKVajdvjUg78oMdsNbCiBUurfEEUNLtkkap",
  "key31": "43yXozaCQe26qScTjaBMHCcSfemnRQDKey1eaKdhHSQSdH5rDGF3mwKTCSN6Ux4rMK1mrnYpSbhVyZ5iyihU64p6",
  "key32": "5oQtH243P6pwvZ7CX6mCNV5FtJhUqRGzvrZjFUcisJmqy122izE8sRjgRjoif1Sqf3qz95MFC8coqZPEAWUpjfD9",
  "key33": "2YC4sQT2APWbVc8njJL6sUkjC8o3jPn99jzxhqcf6B1RkhjAzrc8k2sV5Sq9Dzr1qz1jJ38rLdAW4GD4j2FoDLRs"
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
