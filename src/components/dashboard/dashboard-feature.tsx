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
    "3GtpMfU7NtpTWL3xb4SBiGeUvfpGRDbV44U6mX8D879QARPH4MTBMh3m4y8WvVTvvFWZp8VGJbYfeBR5FCWbbPYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Joqxf4asmeMKMV2tvkqBAUp9zSMCtfftiSsTi7aFLMAE2mEJmV3YJt1vxS3Mkz335xxrcJonkjzeZ6Kw4fFgBhp",
  "key1": "2rfcmQAdLN4qycv5qXYtrtBqa2Vrp2QRg9CUCiRYbYm4PxW9x8bdhv3qx7x3aPhENx2T72q8ULWg5rYNHb6cnyWR",
  "key2": "3gG44F2wpWHDdcUz5moRMA8naqELaGPrqv9dfVS7fhdVgenf8tYiy4h1g5x1ACoe3GBoJykKztrth6LDhHozuQQk",
  "key3": "21MYMKV3NdhzeembSBym1aP46TXxT5MttQm5YhgttekrQbiqtyDMWKJjXz3y4AnUDRu2SsQZY4uB4BS1ytCCK5xw",
  "key4": "53d3intn2vRSkyvvtYSttNw1AJgaUSt6NE681vqz885yy7YAheNCLEqQKa4RAoHQWGWTvfsLPBWxZqEDynUfEyeq",
  "key5": "e1DZFo2KhhTHYtRLT8jiU1HU2gPgUiK1iRoXTqH4ymUzRXiFA3cH65BUjD5wtKajggyx5z3tKeRChoYrLeF6roh",
  "key6": "5mGqSFc4m4qWibYzf68SpdYKWyENMQS2QMuj11TasmZVEjZjJAV61cLu9xv8dwR6dXBJ1LHzccvYVc1BjXnPrtws",
  "key7": "45GpFMk4bMAUv1mvKSmj9q3AL7Jk97P3JBDWZDMCFRD6RZYWXhujdszEbEoMo7Euzv6bVH2vitpKyNRafT58LCFw",
  "key8": "4E4H8XwUvonAaaGXwAfXN2dQEGpvowimHwEhgzQBgF355dxLQn5a1pvW3fV2A8K9A4CiP5k2zyCwzbePaycqPYn5",
  "key9": "2MP32y4X952FNYecDavXwMN9PX6uRqyQutDUiod3vU4M4ZSWY3kiTdRcF9uZwL6eZoNxRcm6347XBmaRkZRvYja",
  "key10": "2iSRqtTTMxo7R6Cc5DX6EVkoBNY5NFphLMZWjbdtaSh43SJHYTWRSUyYPoPJdsGamdtHVvnr4xxN6B5f2awRd997",
  "key11": "3BicjgwoLKtL4Bzc3zy692jKRKVBu4NUW3G2ghTovdCkkrcmwc1zGtzckCuGnE1csyRQSDVvMV47hCnUHh1ymbHv",
  "key12": "4V3NX7rdtv6UqZsizJWEtzSZT1HHXTWLLEzx1qF4EzPBSGcACC2T3bPUWoMgLS2n1eN5ar2ziuPnjRyy9wyTnbNB",
  "key13": "5bmEMteCSmVF1WCWpkRP84oDKWHUoDqnrkQYjQQnVLsGHApK1ettoVm496RM3jZbYRE8FdHaa7Y8J5yeg8pCSjd8",
  "key14": "sYYDejwLjok9EuCZpaTmByANYWCZQ6cHZf7TLLdiDKyZwSqs27XxYoZCtnMeg2JjXUnC5hG9AU33fS48bAwJ6CB",
  "key15": "4E7QhMAr7fWV1iXwkN7BFM182AgVq4vm7cqW5CzGaxN97UFDVsZNd7g1A8d1vRLU7soZH4Dyh8AyB8HSMsH3jdXK",
  "key16": "3z5hZNRGV18QzxtQqYzeTHJLodcdpLm5J5kzTdVMj381DNHA3eTPUBQqy8qcTG1YwAotxJF3jy3Bqezxf1Qhprz9",
  "key17": "2xs3WnD8n8eFVMRbbej8RVBqPE456iLRKFWkdkHVB2FoW9KS9oj9Fjwwo8pP7XQfDAuZBHoBhY2xuiBFEnbDoaiu",
  "key18": "2y5QpKnVRiZkakRdxX4N177b9tm6j32emny6GWyG8zxKmmPxroyvrum44yPsxb4TH2ESSDPnxa4AJhNogKewZqeG",
  "key19": "2PWkkg3WSs9bg3rXUoMLAmF2xfURAnJTBq32wmwDBijyLkYymwyqZktTTGuGZ2jnJiAzgNPgbUAwrwZjxHjaKBrK",
  "key20": "58K3PNvPNquPYH5Si2dF36W15HxZo6wS8EvGPshKJQcfWwYpf3LYiWU5AkG98dbSw6MNuHHyNcHauYu565kLPbUE",
  "key21": "35NtTmYeYG5aD7dBVeGV4Dj6ycMsMStS1uF6t4eZ7UzodYKevvGahNMT7vP73BcatCyVvscunndLeMBtLGnpsgKx",
  "key22": "4W3ZA7tzB4vg8aFDcBHVEKVXUtZ73HxfAJJPg64Dh7kKE1tBnP5nMJY49FpkEWQsRPFbkXCqmR5iVpAPKm3ok71h",
  "key23": "4epbMCcCM5eRB6Vqbif6jBSLi29Dzfn5Gyfwjef8CryL9xyABGjWZeWhDs1GdkrEWrFrgD3z52UCDSzKVA63RLHU",
  "key24": "5kb9YR9qHR6dqB3qSskzfPvfV4kB9xP1w7EFb38nj2xXsWwDZYJUP9KmuyJHnJTDm9MDrQEWcF2ojAiBakf92A9j",
  "key25": "4fBq5LmMiCXxQMGBtQZbELhDFdX2XA1opxqe9Adg3ZHXopGXWT7bVzvNF9DdeddYxh6ZnybYPFFmhpPdKMWF3WQC",
  "key26": "5zq4vdpoWkCCaqkFHAqdz2JbZdLQbthZEt47h8o43e4ytLVgtCjWqo1sjkWfUudftiSTKuNjMwvQiwomac7edYLn",
  "key27": "2M93Ah7PR5MC96YdYZp8QY6QpjHp2BJ2UQPDGPnSgD1QNjLEu9ABUCMoq6KPQG6Gj4nbJMGahgZj8oMb4sEwmJsm",
  "key28": "fAQzWrJ4vtF8hTigXHDpm2JBznidQUJihmMV7gCrAJ89Scj9FrQ4XqX1sWc3PTzmGDLkc9wjcTusd4ASANjWcJj",
  "key29": "4cRfpbp2qq4xBstrh5FDNYxsyXoChresAHzx4EN5f6R42z4fA6zLvkHDsSKPWDPTTZPCMxm6CKV831qmCsbvGPJV",
  "key30": "3YPbVLRUGutkeZAPCNapFAgEUXgU6W42aXswLC9sWQGMEWuSMDm5kAX3cV5bgcStEeXkKCQMtVQSVVf7GAL5VD51",
  "key31": "8AhgP7fgVpe8igd64fgXj8cJk8EfNw6b1gNQCjumnrhEGS8769RS4xHBW5EEeeCYux5FUan29R37b75FJTvPu4g",
  "key32": "4Ru45A11A4p8Kef3B9f9XMEQCaDx7tMgG8XcjJ3fS4Dfc5rU5euv5vASVLVgKLbkpRK81n4GengwXaTV7whi59yr",
  "key33": "53NajSstphqDnj14CtvEVtDDFM9JAtHTT9bo9mmPhEAShXpVq2WERKtdFMkhZniUScm2kmrffC2zGozEfviXyqM1",
  "key34": "4TsCfGvNH12iCWuzTNBbDw7ZGbGvB1cAbEpHt9C4SCCcE3Bnu6X6kBDF96WwBRYuZuDPcSzPwPddzb7jBqFCcShM",
  "key35": "42mVH6DCtzfmLqPbQz8W68AZ2Rve29TUUVf47r3QkzLFFZ6mWznpR4miL5cGP2mrkwGqACEX8478SyEsXTQMLPnr"
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
