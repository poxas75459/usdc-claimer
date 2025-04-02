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
    "38MVF6cdf2jrFJGnU1CXfqABoLhcN6dMHntLnHqPswkrq6wz1b8etiUDcbjUa7WDAnkWrCUmkMNvgi8QAExj95Ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "315un2TS8R3wZn4vMdTeu31A9mGebxjLafdzZwVAd2x97HSFeyLjtzdc2AoGn7rPwgcycZeNfGa7sdCN4BPRNmYF",
  "key1": "67V9ZdAf1VsziTmQfJgDaKt9UN78M8TZRh3XcNayVxNzhjqjEZoNzsbJeByUsV4S5GuRqWyxcVTvYPy98HuFyfj2",
  "key2": "2iEdrT59dkzXPVxUM1z3a2B3rLuT6HwVxBwKkJsrDdVqpHrn2mvxSb9NVfE5xqEu3NgJ343mWcntwC6PrgkVntTJ",
  "key3": "269xgMuif3hQDuVXe5qDtyQH66bUkfmDPYyj7eoC4LeRJPkqAF9x1TcT61qemQvkb8QHjoN3C3cxc1DDLd5h6nPQ",
  "key4": "4vbcEPDqB7KujRnpzakBWXkPwTkyairKQwiToHTD3J3D6JnAQxEeayq1aMApZFDXXMgk4MNHgbUAjY3MMYgL6cBy",
  "key5": "gTJn4Gn6Co5kDqyQLwxhdqxQCKnnJCMj9NGqmrQ66B1HY995xaeG8J77XiA8HHPw4BALVKoXzhZki3i66NS335Y",
  "key6": "6jMvNSuCL96rJ7QWwTKzhTLzWtmUDbcn9oSRKrEkbZ6qt55jK78VTpDAnbFap4m4JMtfNKw2t2YZfUNRtkz6sXS",
  "key7": "2FyuZMb3CbfKUyN7R2MTzFZXMWTWzrVQiMwVDmuaz4n1Vo19MCH74WuD7WeXBMJSb7GNAXKzFLVZ9huu5bsAc3N2",
  "key8": "CNRrpgL1hxaieUiqrLt6q3TNiei4gnG2t58mXw5x2oYcnAxH8enBi9ttvmwKiTAy4W2YNb6ak19bC61MQdyfTEm",
  "key9": "2JPBFyZBPimMcRxEcYYJ1wUnMChS6vS6ScWqhEPnUuQxPg5YE9u1dyXmQQ7LswJu8Dp8USCMSDXvH4uZsmx3G3nx",
  "key10": "2PKdr4if2PJJy7GVFHN7x6B9aQTFEGtPhKui187tSvFCwBDaUae9CdBAxgVEC5EtQg1dE4ZxGGye8zzX4rRJZc4K",
  "key11": "48eJhgA9gz2M9NUdgkQPwpE5SNQnWmJ5QAudfERBmVp6kmx6e3h4WiBMiqjySmPMdKkRbtGh7vX778bs1xw2Gri4",
  "key12": "4xZBw9tdW5fjNPnP1M3p7z46mQoy8ZYMigAZYqdt62pBrajhVy7R6HA6FQjfZu9T5KZkvNPp5jTLwvSqeiBezaYg",
  "key13": "21NZ6rsDMYM9RXY2fezVPcUxdH94nurALuTkuvMF7DHE9FGBriWKPHoZdvLwm7wfnrzaqpqqJCkEqmUUo9M39WgR",
  "key14": "2KGdCKXZes99YbF3sFdXqCwXfphvi7ypT36BNicYiVKkBonQpKNaoCdjSGW6ynwqacoT6KVKgeaZZFsavSvFMHnu",
  "key15": "2cUxgy2CVZAvykPgSL36z1nm2q4qj6xNdYdE1R9JdAH3gy8CiGMLHPL9nCJ7cbABzwp9YXD47AAf8sXwhURzV858",
  "key16": "2XeZcv6GKBi7XECRuxZcWbobJiTyWBQb9az65kycxM2Ej1UNUbHQuhTU8F19qfjTPFa8kx3S1aiDgGiYwu3gDVs6",
  "key17": "2aAfX49PLBztDLvbYm673BZw1m5kWSin4Sg21Rb9hyCTQR5hNUSGZ3aWtfyzhKMYVw7B6Z95b1yfBEgk62cCgGhH",
  "key18": "2633BSUmgBNGq2KeFwhDoL9k1cFV96nZSorwNv8A3AqPdE5ePZNzKzY4uMvLtNrALGsY2t8nPBenas73JwhWZ4KF",
  "key19": "2JvA3TgcZHLmW3X69zYcwus5B7Ae6tfqisNLMSNx6WUk3EvQ8JiPu6Hws3Sn9iyVy7VTYMqd9SnSgpY1qTgps5qM",
  "key20": "3dVfR6qgYXn4mFQbA5dKzfinSKWPgPf62zn8LLyEktFszap5Hh86UixRkF7HNfgVqXno74obrJYuETxNHkaCErRH",
  "key21": "5jEfpkRJXRvBCP71M3SzMMSje1fcWZ9mx2YWvrC54qraTfH2kXU6eKtU1Rx6TYcM534AgixT3jyoNB6DpJaYqbva",
  "key22": "5QJQmr4N7Rm9QnAaibVP31shXxAiBZURfjzS5JdtP9usqmtNEnhwob97t5bePcK5T888KuAk9UDEpnrdjEURoyv",
  "key23": "5hiXb57HJArD1TKbJb6YgsdACGijMLGyBUnAV83fw2Z5pqQonGwWPdY288dxEgSc9kyP6dvfyWVJmNMyecoh3S8e",
  "key24": "4LQmAzvfaEBF2WJdo3jL1GvnUQWNyA3pzFYjV951qXjkqLjxygtqg8uGH2pmb6bnMJTjkdM32aARcSLSXveZFbsJ",
  "key25": "4ps5pm7zz9k5TjjnRsgex6KiV76MtpMhSWMitmHVvPTWCAZYJ9rg9gSy4uezSyiLTXE2ZVrakxs7KbaWXG2PzFqu",
  "key26": "jXJFM43u1ZnJDYUUJu3hyUpETZwPJa6ajB5MWGhKEjsAHC6b6NkzxhSVUFUinXxhbiFvdFRrMoo3jTWGEEXG82j",
  "key27": "241ZT71pR28T2DxNjd14CJXUiVz9UAF2g7vSW1JEBKXh3mKuNxR8AdiEmrDH5QwTBykrgE4ReF6J6mv9SCXKYgsg",
  "key28": "2Qec7xrzCXXZieg5tEqPc7pzMyNU32a3XvFHn4N8FxTJWoMHg1KMtBJaqKNq5EHs43to8o6WRbgVuTaQd3p8pk2z",
  "key29": "2XAXvo4oxgHkX9gtLmmjCWMdaGqyyp5uhtLATkoRJWGRSsncCAnafUpYEq6cneM28imghRWKyNCbr4WCMiALdktK",
  "key30": "4LFMM4VdVCaWtMnXzawcrwweTA2PvDmTphNDhpetQkmLvhESXcZZY4P9tJAmTshgQ7QGNYaBtH8UkLvykCDd8C2o",
  "key31": "4kj7jArLLbMofp2njhk38TnevbSaiRCiN4weWan1wXsprF6ACXUAAmkbcxaFkn6KexJJNGJBa5wjcxSBf4dstAZE",
  "key32": "4ycUWftbE2AZDT4GY58kHd2ncBsXv5np41drXWFerV1rpbBjoP1k1DSUqBBVWjj33Fzkc5qFxrskFbtwGCAVS1aF",
  "key33": "2remVxsVkRxs8x4mdDb9dgmdHAxJGKHweed254VU3GRmYuAzZBDVosBzTCgbesC6vUjBsYHdFjrTemh1oKb7eg8s",
  "key34": "2TBFJ7mUxY9Qcp2eo3ygRx1EwcCHPHLbEC6mmwrX7mcYfGoJ7j4HdjxH8jhYBmGj2K2E2zDStpWXHFM6zJ2WuJfA",
  "key35": "DnrjWJeYCuDhrKXB1Ud7rXuDTxx7iWbqT9Jn8fxtBMdxw1cNS3PjM8rAd1sjs79n35C9AHqnE9F7LTmqVtufKdR",
  "key36": "3FjWZFwqfWDB6X9X9XHpEMemNFF2hyM1hUyoJDt5hq4J5m36K1Qn3frszV9yTAMJNmxBZ281RKzhLsvF3xBckATD",
  "key37": "5k2Am7Q4FyN4DpUH7mXVzNz7MrAXAF31iiM7aF37jfH3YteKvss7aKE3QYrgFRd5TtREixg1DcGnqT3U4feSMt3c",
  "key38": "5GzZcejnirFSjiBdEdoAeTqyGky8gSJaJseeuooKsXsDFfRMHdZ5sQ88Z3Ln8XjSX7RGy9Bh1HWpsjCzYA23Un6R",
  "key39": "5oA7CKevvgrwsyXDTXfDCzLuA8yeftLfLPASH3A4z7xYYwjukMxDztRYRN6DQtdaj5zDEYECe8xdGSH47yMoMhfX",
  "key40": "4acgMX4w5fbgJPvFu7nu6im3RtdhUQ7ZvbbQuSRWQoWDCgreFiXySZpGJvxfGVdMLSGGWZYEYKtnNogUeUpQWHto",
  "key41": "5KES2GkqN6jTygyS4avpyVha5A42YgiqKckpYtyyVm5uT9dm4hA2FSdy3ELEDKZm1jZtMKugr68z8yYUADAjtsj1"
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
