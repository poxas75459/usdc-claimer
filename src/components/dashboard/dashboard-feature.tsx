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
    "5w3RDR47ANMFxpfXAcMjSwvvGXAdQ2f5mJgc4XyrK4qzsGm3yGt8zbemmiPnVMX5fX8R16RUuCAqEs2MWW738Jac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6cY7z1f4vZpKa75YchxnzRHrqf1yTTYo4JyUvyQuZd8JdMKsk1S1EuXaSPsvERQsfyeuLUXQhzVF5dCaYqCiZ",
  "key1": "3unC3NET5UPan7ecrdpn7PRPiKJVZtjj1sqdzvHNHuEeoT4RP69FAYodUR7YKP4ZncCZkWjGxAazVxjxbFySy164",
  "key2": "4BSK58ULtpZQcXTNRRmbRPMc5jJAb5XBQWSTyQWQKSwobQ9EYB32XuJQwYGVAkiV2qee1GbCxn1sFDKKSGW2TrXT",
  "key3": "4qDsRxoJQuPEdHsygyTRQ8ZGBoJywfzjRvy6SYQDLzCVqWwzyqJcHNe8Xk2Gs5v5uVRcsCRM1VUc6CDXvFQM4qKk",
  "key4": "3PdQSueZtpMYXi1BFSRmzEQoif83vaKqWJSDJBznxUMHzpkssLd2Csy6cCkp9CND6JAkZSCGQtyYDnGLm7crLbhs",
  "key5": "5toX689gQQmtdQRTUwL28PmNBheUzFVEmpqicQEPDZV1u7J48PSx5GmZg12BEyX5zR1XyzNWZzKzxLZ1di9keQtA",
  "key6": "2rt1pLKz22UyRVEmvTZvUiizqYwbA9kRkSFwTHUaqSuHKB8cg2scY7Zbu6WG2wp6oz27CLvWQH2XxjDeP38YWhjT",
  "key7": "3ADZGpeWZbRvBr6b2Ya9M1GmLmNbAzeRiceicfn6V9vBhNSg8RndJEwUwV7qxaMzDdBnfMphGyo3Z2CwgjPwdGrg",
  "key8": "3kS1kSUDp7UvEX9hti3f34iNr5Aa64tJeAiuLbLZgXKGTGWnDs9BchVHdCW4icC4yotfSurQFJUJnPYyE2AZMWaD",
  "key9": "5Y2eCxciqAaYoXRBTPxPgTpxbHghM9ToB5zzpBrnZeyB1cbM4K53rX2uXNtWMWKghWFf9sX6i2hZBVqVUc2e9ABB",
  "key10": "5hd4bvZ7LvjEnegqAhpurqDKBS5AYFga3qMsiY9HhFy63vWykWEMdHm1iLrctw6HnAn2b2tTF6ByyjovXzYU9TrG",
  "key11": "5dJ7sTmdbrqBFN4KMiszFFHf4igjjdWna99io66s5nrXGCiH2ECLr8HPFbgo52TLr5VMSocW15SARLP2txiX9n8B",
  "key12": "xGMo4HkD11MjtfcFprVuxDFkoPZLyQHW35xFRdyRJ2QYFd6UBrMTGPiHSttyNhF5JWPzBRCAtT2bWQygQ5MnrJt",
  "key13": "4Q6EQmL3F3wJSbzHUc9ky4fS4oUqc7RbSzXp7NYpxvwFvTbRqBBt5afmbteYniJfYVdMoqS8cJpDorbyjJkpisyH",
  "key14": "4PVP1qLigErmnEpthcBH2XGeKCjfFWf8tZiy6PoG8BLd7GvN6nxYZYMz3UoYKyFFG67stdaDVPnnhcMKfpddoheS",
  "key15": "2RKERaGFGmE4zdoUniSJohaYgFA6TTZTFx26s9p9qvLatcU1787sroGb3wz4KTdWENUNtjWQuKygsP6JbYh98nw1",
  "key16": "2WrCtZiTXPDma9uq3F34tGRa1T1DQNGnPKy4ycm3S6tRu8wGiqDKpXLaYWjN4uYhqxwf1H5tMS6mdMZrtavyvitb",
  "key17": "2STfCzXzaFgRwc2T4kPrrnwnKexhu7Z5a53z6a8K9FyVxVK9MjqCxjUzQAZyNj87U19q5cjvhnvj6rFHUf4twX5X",
  "key18": "nK591XfuZ5bXYZA7FVwKx8KkbvpRKv4Lb4yEJ23ubXJiEm8R1Hvtsa8dk3iGmr9c9kgz6HKbcrHLgWwa2RKBJzX",
  "key19": "2swXL4NJCj529nog7a5YQ4xdUTQmiRwHuBiQB9L2CpqDkpJkRwbu4Spf2ChrubzCvP5NUVAT1RKMDEyVB3r5xqvz",
  "key20": "4e7gExPJtkWyi5jxm9mjTJu6RzhTcQ5q43QvRoH7wwCU6DNYrp6MyNcU3G4iSsJFvqr8hMM9gZqpgcTzK7jT9qwj",
  "key21": "n5DLP13JttGJJpHEdgwuH7vK7PJRDz6DSt1wuU3eXjSJxFbFSoYrsMd2SsuEELHPhWQobvKuDFNiGBvtwUunuxF",
  "key22": "5nSSaze5rTGmQaw9QTjEwpyoxg3icMcZLF62HELaEcBx14Pk3naAUxEmFps5v7GdknEscJce7vAnAWcxBSVwNKgB",
  "key23": "5ubRUHqNypv9bx8jjCazjHmRUiwpkEufRymhAi4srt29NhBrHQstutWY9sLD6J8rd4T9eDFvPKLRiWM7mdnCPYfE",
  "key24": "3xGMFEm6cprQTTu26wdVxicX3LpsV9v4FqH3XziRF1X4k771ArD7yW1A9x7KEDfxPwER6fn2ywCjFoSKjLUm7ys4",
  "key25": "1deQNeDprFmktNdxJm1vCfZpyNRu5Y8P3wQgG2Pzzj6PSffE9TZAwRBbpU25rqZUC8mqnvAYCMPUJZQ2U7wQ8jD",
  "key26": "4cK7Nyqocre7rFGufq1VGTFBhnSFUtZwY5GjpLvvNnRH6Dp7Ebwxa9Hotv5BSbMkWuC5bQKW2H3xZEDJJHeHm1pV",
  "key27": "3hKa7R26oZkGNWxVwF32n3BodtCnDCZCtArfr8aSfJfF3KEtdM1ygqv92UVbtRGhMEZ1qmLmeeimp6jyW22bqEy4",
  "key28": "5ef4YyzDNjHoGSbErte51SGtuLxsT9FteM84BqbqPC1qjNhsggHkejkGif8ro9UoUYR4sjqaLH16GfngZ2Le2Dkr"
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
