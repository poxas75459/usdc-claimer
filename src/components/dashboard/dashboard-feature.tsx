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
    "48B7SS2Kc2QDm5eV5vxNdh7jKimj2Z3gJvAruyukRTB8uDasAS3xJ26A3eGYoXCG4qjDy5JyoXJWE2Tj1FM1rg2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23aZR32KaesXNCNbocFxaviDC3j21RFCcKXy17mWwY2XXQzYryQcF3Q9cwQNCwARPVvattgyqBruzX8B55YeK2xU",
  "key1": "4RNVg9uzzBdEbhh9y3G1D76WpRsnA9F7paUzghXezZKT2GtUuCzv27pLwF9sXRu9y2AY4vNFHuVBY1wDYif323vH",
  "key2": "5Z25v2PELHDWrc5L5zkhQPCYybTRaooJZgVKC6ra1UrzeWxYtjizJAVB6KyhaTo73tp8F3ip8R3ncRW9Hn5Ve9LZ",
  "key3": "ajDQv3VZXdaEvDtWynZjuaagnWRE4Sxbsacoof59JhwVXbcRVfrW7kJsUdxQsLdwpgweWLvhEF44zZ6cqSourYX",
  "key4": "67PAxzSmMiZjgaNX9PKTx4gUVeEusEqyY6jpydyH8SweNTBXG1LtA4eVFG7PSsDKE45o2r5vWQZSrrnjya831KWA",
  "key5": "5Fip2Jb6qrB6HiWKKvww1s9uqdTSHsuSguEyikpxKLHEeRjpufFJrDCr4Q5yqHrKJa1hS7Ev5VNpp7ZmuFoEbBL4",
  "key6": "2pgRtsxxCBt6bH111tWmUXnSQXcywLtykGAb2kffQrpMkyLsiFTTNLbcu7E29N4ChzvSBTj5ZHCR1Yh6mReMFj2M",
  "key7": "2p82B7Dd81FRNhqhfeoskd22gagVnumMh9QP48KXF91x3xNKh8BxbioKHKUGuBNgsh8aq9v4yuWDbBjEzqsAYA9J",
  "key8": "cfTj8MRK9mWPyQypAKJ4bwwC5PwcPAa8wN1rjuvukhzhSWurio1uuPa39X3BhJe6b7Mw6iDrKHhwpWQnbTLaJYb",
  "key9": "4XPzcNUEq2BzF9fjsduyYKnVEa17jM6B6h7fsL19McuPQ1kojy33Jc8KsRqmEkWzuQbs6ztxuNKSPEiKwaQybRct",
  "key10": "hXFBEqbRVxdXJA8Z98TtpTz3ryhBptZWfLxxiURad6SAkMJZ1rZrEpyXSyP8EKfFxqsAgqaTDm5gtCMQkrgTvzz",
  "key11": "hP5wdc6i6jp7yZ6Np3MdD89pKGgxqeFYdWennq61tCDZfmgi6uWn4za9AKbTYD2drdvLoxP4UpFjWdnXgtFPRA5",
  "key12": "4iC5scR3znKqTf13hSNCp93hnuRyQD3sJ1M5rN1wpMN1JbBh6Vqzk5Wg8UUSDd7MyQcDuZdCjBCeWmJBD7ugCpz5",
  "key13": "3mfgeRTaWzrUhYRqipMjx5He4kGpoV98JnVr6QycXCLVWzQ7KLDf7SPT74KFeXAvM9x1AgZvreMafZKxakM3S1Ce",
  "key14": "3hgZho8qur51VumNwXArdfauJF32jX2JW99HuJHqCtKjJGYDSuVQUq8UjSRsKTABDu9b7dh4ZaLr8kMBi7bGPvKm",
  "key15": "4wPtAZRqQowDnLpDE9VcMuUPE6wmxqv13XFsGXwkko8r6WEbwbrzhF6FTfiYtGWjww51ShJcP8LKDFApzQdn2nir",
  "key16": "5YdeNwy4HsyWf6bNxm2nnuKYKHznX1upJkBWfT1tWZrAJLMNE7yEGuShpJHKewvVbJi5DKat6GHe3zSUJX1Y3fCF",
  "key17": "4E61T8iWp46Fe6QTT85vT4FazDTYRVBr7tzxRdQzw2KDetSbtPnDgFYeTkkPEej9MM27AqWUz1dr9DvmvcGAWMKc",
  "key18": "3Qcr6EMi3aerwmH8z7h7rwpUxGtUeERbo6TV1M8T7DQqPQbGjty9AuLzFhybUPMPC3eEnmco77su34Ek96rVENhm",
  "key19": "2Z5T6J4JaBLKarhqaf83JnGiUWijnGHVv5dFjRFwRTt9wMK6SUW8T8ZCDQD3FLzC4RmbtWi6zusHp1deoJub8Ng5",
  "key20": "3gxsPL8yfEMrsc4UNAVNgTJzQnY9na1chuZ4vS1oheVQQ9kXZum3yCDQ2FeTAK4V5MbRQ5PHzSsnpCR7wS6zTVtg",
  "key21": "34mz1fq98Y6f5181NBNQaomPRwFGweZMgLA7YfreH4ZkSymnLNtLEZm1tNikRXw91XdRhSAyeJCE47GGujmKm1u9",
  "key22": "aRfJjBsuU67EgMhPuAE4mrLS2FoP5rJjFmZ584o7eFSeymT6XFVZ8egNRV2XrYM89RSqHPr5gTtkqyKwH2PwnWc",
  "key23": "Y2wHujCte51wDnoD8wZYtBAJfLaDwgFEfWhvHKgy1h6jM3oLwAuWQTy69tzRTfmjyxwnjSvM1Vv8djgv1Bqwq7y",
  "key24": "GdESiNQRkZk1xiRpUenLdBAJJZJdDZXBzHzLktdYSrsj58ApuH3H4BJaqXDUrSQMb7orcJvC7N35QfsauVnmrxF",
  "key25": "3MfsnoWntg2LLMHQTggcdAL7FkofwvMN3mTjmVodzyNuigvrhU9Vy4DhfGuTYBXK1RB3GQ8m3wNpb8Dr1C2fsv6",
  "key26": "5WRmiVw3yu3QGG6HYPwsSaNQ7Mr5fRw9knYp6bnbgfd7ctD9makWSreon7ufFeqFuCWiBVxriXEEJvuBdn9SSTBq",
  "key27": "4pycr8gykTSiD62Q9YeJg83567npXfnwFUTzP3AUJwaDT3wQDSj7L4ceczG9gJG6gRSdPnATnpZBWVU7m5EanUUS",
  "key28": "556BDszNH5W7F3t2Svbn3DjxWbEZFG5a9vGACSKrBoPC7EoFoLB6KW8teyuAvQxXkpXetf24qeQ6PDSqKY6NwDqZ",
  "key29": "5tKwZaLWDb5kSBRsXdEX4yrSkpZ3ZemKjVvzF3avnUQQf2aCFjEAv8afZt985y75FCWbRNqu4Ma2emuuP9cXLdze",
  "key30": "55uw62fKG8Y4jXAFV6YC4C3jpdfVK2jFyeJ137yNS7wrNNBbxREzMAmu2DeFLqPd8JJK26YpwiAW6zZbcv2sG5w7",
  "key31": "5N1EP4KYGT88p4kwczScXPtN2QMrKMT21vpVuA9qxU3qzNGKJE5kuVcwFiDE45Lt3LghvEHv2HBYsHZhP1Q9iQBV",
  "key32": "5a6UZaxio8ayRGoVtJQH126FQDScsP9BxqAu4JcqXHQxmQ71eB44iscPoLEdH4GJZgbkWYU3kDYHNG62HjyC3JKU",
  "key33": "2TFwTzAazQkNdwHwRHVeH8g4pMfrcwr6PU2SU1tVtJzBwDNTzGV9EJ7VEYBVSRXFsVM81LnD3jezKGkNRBwpVsZp",
  "key34": "2X5vwFYBcbzPsZzHRDdA1XXGU7GLmrQSm1W4cVjcUvku6bYLePHhNmiEzEMsyyeJwEf6NPGQXC9UKu5mfGKNy1s6",
  "key35": "2zwGQ6bS469YkDDsdzJQUN3ADbQ75w13cQBdenLoiUxAuNVvMpNWgcLR3YrkNJuJSG46t3xfBAVbDA8A9Lkwo7P3"
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
