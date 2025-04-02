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
    "5A75MW7RJ897tHDajcCcwbe1DkJp1qSYMwZSTfHogvt1UNgTo2z9ucu7FE72ypPHFhpUWST8RXhm3nZQLJZ8iuNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eYVLLkkZv62WcUVa3kMSo9dY8nZBCmthww4G6d1NyQpx7NS8KRHkaJXMekn3sZGAeMpjdUrhTFZJn8SiSjDmDJX",
  "key1": "2sNC8xd6uP2E9cimr8s5UF4uKkA53L2tG9REV7x2LPQ8otmtiaxxFpJVXJa3R6hmvqGYR2LHrfgZgi3s5DESBUFL",
  "key2": "4kBPJpduESad6thgLwVaiYHrwra8Y1BWtrmMLp7A83AFXhAwGMwg3TtgwkKRWGbf4k83kJdScyu3KsGT1kyPPAV7",
  "key3": "s4bo3d6TWP1moRYo7SzvAEL2WZ7j8Pk28M3nFzZnVzXJksdV3ejjz6aG4JTTHfoxHKVVKjLS34weYpshVrHArya",
  "key4": "ZQgnMiSmmDsQVjvezcSA1QYJqupNnuHZEYKB62ybs7z9kstcE5MAFSq2nWqVNQZeGho1GRf4dMwoMNKmPCRL4rA",
  "key5": "5gTQwDz82csf2hEibxFsPeufojSvZFSsxbv9ZB2XMtYtHaafR4USDagg1ozVmF4xFAQmp8p1PkkSSx4J13ZPzHAT",
  "key6": "24zTtEA9TudQjFZaGUrmTDm57WRqRmY9byKp1DaD7gRFpE12qpjT2B3ue62rQxz84M8JeUt7ZXJh8cwHXTgSbGsv",
  "key7": "2WESkgUyaS7xA5CQR4Nne3z2xT5zmNF72ddG7D2tNCgSzPqzJte5rikjNfqqgL1oT93KauCV465TQSW1dqs8iX9y",
  "key8": "5SmA5VJGYudnKG2tFsSf18hdLSXoXtaEaUnCJRGvzwpXjcUdvqU23RpAeZP8UfK7Hvm4ZdKBYQ1n4PmfLgxqJuyh",
  "key9": "3Z6smSfgRj8kHwjgg85AeZDq2X9CJRgoHCi4EZUq9DyPMHr9VXwtoU2EGxF2LjPgC5NtmSxKf8x4ga46bosneGnU",
  "key10": "CQA8K6oDh422YYQgUs8X1AGcm6aj5TXhtr733hibLG9CyZP46sGxu32FGtw5QYjTjVWGSrS64dHY1BWXo9efJbr",
  "key11": "4uLaQZxbhJTLGGTSwRDZV2MMFBUfhij3yNu1ZEeCsYUjeJPJZfLdnJRpTE56YPsWbkKcSrAr97WRuaWQmThqw23d",
  "key12": "3q1oMnfx2LrzaFwJp11EpweRAzhpLXKCi6udgfEbf8xZGibuuV6XUAsF96GSKL7rqqS3AnURxQb26j7H8RFkp4dU",
  "key13": "3wFDjxTR5Y13ffCDGJLZvTiLhQsSyV53VXBKyQpRogokLmJmnuQcpzMBroNXTPEjSLD5F1dWF2DQw9xG6fUbJ74s",
  "key14": "gC1KvrpHQEAENgDLkNU38hfUGLT89UbVKMPqJwB8SSYECusPWuyBY7trn6AZ765uBFqoCMgJenmcRwmmqvae7bc",
  "key15": "2dNEtjeZuZnfSLQVfMbLUNWHkkm7m6xL6zu3Wk7LffE3zwrv4GjhU75sWpXY7rhV7YT1Sx9VurKFgdCLWzseyvkB",
  "key16": "3qsgW3HWECZrefARhZ5fhkQbMzy1DPf6XsRNsLjnJ2GXFKkutchEdAo1q1wc1JuCf9UUiSeBHNPDePfzpQCGAyuP",
  "key17": "4ssDg5wYuNe7UESiXoVV8iJQFg33FnvwnLcAx4poBBbetHjyTd8xBXptG7JE3KMBnJnMR9usVkP6Vq2aEuoXMwFK",
  "key18": "6rqC7ndzfoU93t2UVrhgA8gSY5vUE3ZbKi98rcHaEs5tEczb4Cu4UvoPCQ2grKjUh8PAm5zpUuSqHXDkRNibJCs",
  "key19": "3QvNykiXFpRjMxj6pgzihMhjfa9a5ZJavSpHNm4Y22aVX4oGnPm81zcjheKor4jk55FMAUw3aEfi5x21Mc8Z1EeL",
  "key20": "3h8TkTHjzg1UtsHnTfqcgbMo4woPGeqF42pXLEz9C5UqrwTbEggzZF584X9xKSZoofTMKUBxG6VNLQmCebvjUPTx",
  "key21": "3SLHzZ4mxkKSoJkTvZXFUS6ADCsTu8GjNUaTAqWGbgoCXjp4xZi9edM3TEgqSQEPWKphKABRYKZwLpXLNsLEaSYr",
  "key22": "ArFEnJoAasNyQEfAkdCpGVxkjZbNE2fkJaoSZyyvPMgtaHNHHqK6fjk7zs76p8EP1HWjJimBmCv8K4UKUoBSS4K",
  "key23": "2dDnSL41fmh7GRhRb1CConfY9uf1nB3V3xFCUYaYxpEXam7k8DCMDiLgRaPVJySqZhuth6TihZ6vcPBdVf4kH3oa",
  "key24": "zcCNucCiSYNJSjCLnWxYWRLy6qyo1dhhuHR63HhNcGDvrw8CQW9b39C612fD3txVs5DoFAjRCYyqNGNKZBbZkZa",
  "key25": "14RZ441aVHC9sHGChP94CCpp4UGu7kQK8HkhKiVbd5FLpaTTjEjhYMYH3n9XRtRjYSHQfQmVofN2XuQra9tpzJS",
  "key26": "2T8jTP3RvyE8ceRgF7yDGQM6yw8gMiNnzT55ZzrdQjAPjScMuYYPftLJ3yjc3oAEYPZPoBVMATB17PhQYo2R8zeV",
  "key27": "6N2LCaqngbxEL9tZqgCR7jG9txFXpj5xRziT9JhRWXKnuTjxqes2sroR2SdaAxvTUKznowxwTY28c1SD3unJ8YJ",
  "key28": "4QfbZ193dtxxVDJM1nisUtv9uMH2MtzEPmW6K5fjY4jrXRqNCYXxP5bpKLeJ5pjcSgapBd2jRnE75AvKppGumZ6t",
  "key29": "4kS4Ds2YGH8eD21j6V86jGfFt3it1tqsoaUzB2HXQWdv267h1NFDiQuiZCkNZa6WDDyJRUp8nn5BtTmULfZWzBJM",
  "key30": "2j2n4JbnpdnbETGoHnaAJ1Kd8BfzkBGeJqLVMrrB292ENxiXgQD3hLZoiUB2GMK4rXoTrmsMw98G5JGVTzrzPDx",
  "key31": "aJFJMbxoHgFPWWRExe1TjeVJo128BfZJinFf7aoUPXdaGrN7GNt71fwYomASCTaeq3kz9PZvWek6mc6MDpd8xcf",
  "key32": "2X97TMRPVEiE7xvCVfFw1DoBpoSLEauwadoA3v9hiba3ENugHBAbhUXZKojGyziGkk1RgsKWkPkUg78RjqJyRzaZ"
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
