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
    "2X2hvEju9qZLS4aW8SzQk9XN5PkJXsWZ8hEeyJJSqp9uM48MxhE879BVVmiZ8UWNs5fmCov8tntC3P1SM9M1ZAkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZYPzVz9GUQn1UZY6jmxuFQCaM8HgSAoaQkEoyDx9Prp7tvB3B6vJUGWzwFednCxwvQw7e8ooKoeZaUhdyi7smHW",
  "key1": "3Z9tgFGESiqZUCprB7VRhmgE9qouPEyxaBqQ6uzcci4Hfkcea2zfag1Cwj9PSZ8r8ULEYgQQXyQt8CD6Y6wpbZP",
  "key2": "39wW14K9e7Dvh1Q69P6VyByb8D9eGVJqJz5SRjQEVUTzCApb42YxQnZ9pqJVm7K2MYVb3KQNe6iY95P6Qy8sUDEa",
  "key3": "4fJo8Dv3Zh5wA6AaiDD2BqGjwraunhX388gS6efxVxHKdcG8yS1fGPV5vse4B6yDsUijHv9zUigE4XfGMGMpFRGe",
  "key4": "64FdeD7KUKVCCjBuNDEd4j4fbVYQFafZSzZVSkpvB48xFA8vUURphvNF8bEZY4DPVNT8ynpTU8k64s68mQAoyFzn",
  "key5": "g2eKQMPUitTaT1ainr3QiyhKaeH9Z6FF5MHDCgXrzcfvABSjwvayHfEfrqQ2pjNw4VEqhQS9ZiBwtNN42AKj6W3",
  "key6": "5jLwEZ8CrvqfoRFaL2Ny8eMzhNGVioA9Ey7NETYcWDN8z8Ad9ZDHDveoY6QJSyX2o3a7bQaGai1ahrhZtfR1wdEC",
  "key7": "2Z2QmoroPJ8aQtEBmPJUtpGZvvrXxasoZPQKT42osiePANnavEHTQEAi7BAo4A6TgDsTmRqRow1zXSarmbnbfdFs",
  "key8": "3cAW96bqoX1xJ5khFGpR4ZfNZyqReYQ9q21HGSgwef3b2it6bUKjLF2eceXDeGq8EPY61orEtQixRL3p1h3D6inb",
  "key9": "2SFqijonsZhxf6CUV3zFK2xZ1YphGVf3zbBPdP1SY52Mf65j9YxmXn7YPLDb65aTtUgZHmLiTnz2V5NPUYNDLbS1",
  "key10": "2cT7QEiU7ipUJJsxeoyzPF6DbjN3g9Ww8sYc6PAnjUxW2DMLuPzCCNc3EtK96y4G71vBzY5qsVHnpuWqLNXYxRVe",
  "key11": "2B7DVcbU7tbjDgYch9Zm4a6mFiSSiw2bRS21oDxLLBoqht8aui8wT1c3C13mXkj4w9yACzY8bbwankGJTwGfjtfc",
  "key12": "3ho1aRZZHheZWqoDcBRfWxSWnrEQsJEiKL9wCcoDQ8sSRrWe3Fo4aj3uLtBynaoRpTYwiGkPuAJwrrq1SS54MVta",
  "key13": "kpE53RKFJrkA4uNV8z2NPqMN8XPprgBF2ETioGHQ1HJbQr1mRQGVYEdiYqXWrV7qHmgW7cxnxmaDyottWDSQ7tK",
  "key14": "5eRXhS379eQYbQyYfPWnU9BG2zdNp3u7ZfrhReFhebp1wo167FLxvk73ifDa2JqCz2pubeFxZqg8Pp11ZxmyQQ6P",
  "key15": "4VNE1nY44WzXxKJH2gbmLVPr8aG5Gz7nUHCwG95u2bMaNEQ4vQzxu8mjQLeyyhoCitrgQnUtiut8VbgBcLEgVr5r",
  "key16": "5ADfsscoSJP5oKkz4rMMtN23HPgzNbwM429jB45d5w5CWebMe1MEynzTuwn4k4g6sUr9oboevQsc4HdQQJ7fezp",
  "key17": "534bgZuUg9gKthHJcGEubnHrj3ZbV782Wwh7tR5WMwTTaaw9njKYDnTKUQ2LgvnzetW3RZ26dkKhhR82mJDgHbxx",
  "key18": "PgtuH3SU99e3Pd6iQk5esbY54kUhe39E9YtyvdftoxzhvxVFUYzSa5aS2RqQdrgYqiqoQk6CgKb1JP7DQaBV9xM",
  "key19": "QyVptCcXeGvqLrQPxEw532Ef5Jt5hGD975gF9J6SnU9mmcesRt2UWEZac1bBxBWLQngEDQg6QiSDdvBLrVRtALR",
  "key20": "5VyCkDmtxHaD5kp8D7yC2xGZhem1m2ScFf4XLCezeqfFwy3YjEDdDDsehaoTaeBHtn8ox1KpQbFiVE4jx7JmaccE",
  "key21": "2FkuXpLVHdhA84d4LrkFEZbJND8DaYV39vef7SRLVmdoMWFfC2sQSZ63Pr14oovmAQoPGTX5Upfk61MGprBeWntT",
  "key22": "3nuzWs9BWpwTYUbvuhPzostyX5BG46feKtgnFX9SEfu3RJpa8AimPKx4q6JTnTANtBP4L4GFxiAfXcCMkU5pmrix",
  "key23": "36sfhcCTsEbWQPm8bTeRESbFJU1QKMrbCux5FBvutRVctDaJ19HfLAj4Cvxss591WcJTnDu5GHBRMm7tzRV7CH19",
  "key24": "2W7hVYgwBfUmLGUBmxJ2DJGF6LZ4FES67JQGT7D6Fztu8bJ7UqAegMZAeWsFR2RHyMeu9GWBqHr7DpEeE2N5K6fN",
  "key25": "35Efzdwkqjn1LYDYHghGA9Qrmcr6FrkfxS879wMoYyNT9kDqABRaxXzyjAEWxxZTCuv7GRbYhTfyuncEUtHn7KGD",
  "key26": "2udRAESh7cTgXPiRLRncKgNfMCBUQqtQH4E6QMtCygNgrFAQjud3aYA588XGLAWXnWZeX4QfPzt5o2Jeu8eVT3J6",
  "key27": "jYKowfQ53u5JsepLFPzV74hRhLQQEjwVirSJJNJuGLD5CtVGvVcBkeqUu1UuY9eQD3zsiAXmjmtHafPWZj1yZtH",
  "key28": "2om7H7S7Ku2Kk2j2HA9zy7GgrCJpoceLzVn2cgEx9dotzALkbBYkWZr5xS4EUbVHWyjtpW1BRzp2vhGZLsbnwgHq",
  "key29": "63aqXev1p9mePWzuXMa5BghPub5dEEXG4a2UQcpGtcj5TjfETZ6Xt7PfWGPfLRBZ4Lw1f8LEsbRyA3kdvtJ7YLXj",
  "key30": "2MHBTKMEqHBzKQ5Hc18bdmVbUDkDRdxDQy5C3qjRFUTYjfM1VkwDLQp4cuPYrXvAVK3ZigcT9AQ3AdHG7eHMMbRY",
  "key31": "5fsmNaBX14yxppmJ1UJRC1r9K84PVKWkgSteswKbyCsm3MTBBsnv3Satdo26tsowLV9jTAa6evtjzJR6r42Qftn5",
  "key32": "RdByVK495ueMCMU691qeEsB9WzsPMhHVbXiumjMxH4eQp8RE1oHXT6FJvYZVa16G6mp5BvFBTaafKVEjQhc1fS8",
  "key33": "2ks19uDfnqWqCPB2bSMVLf1EreQuVNY38GkdiTfHBHd6117eHSed4MBgzt4Xah6s2QW55nWuyrf6GJnnG8qSkNFx",
  "key34": "2Wb7ZhjNJ7DvRKm7t846kUCc6dS4dQqgA9E2RBpWN1ATCkn8sGtVbSxWgmRE4mhCFFgV3PGtoFrYbK7shjiY4Rdo",
  "key35": "5agnMaVTgjbjPePjtBQGse8qkqepvWiYF9pvZGvnAbhyhCoUwYvaciNeEwnYUijahKqbV9BHP5TeVgqJ78HX9kWx"
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
