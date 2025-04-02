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
    "3PyKhVEgzvsVh9MFSVExLdHjA9R4iHjuqMhVzA2GGqs568f9CvxRiaL2d78eELKGi93TD48PZXnAGpUt3uFgJvsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cGjE6Txf5ErCWRAEnGBdBmtFMaTTTcsV2t5DaMFb8dwGbLtaXFWfXEZtwqs9YSrgBbvjZSsPN67W3uQeqvXfFeh",
  "key1": "3L2T74PqpNCsUY9MVTx4UT8hVLGpNUrxvQYYELQ49LNEo8tJ65DUVXgX5c2pc9use7TQJaorgTTJUL5jXjMvxkpW",
  "key2": "3P3DJmwX57Yf8NvDL1NdzPcPHGbbNdTiaceH7bRUd9L7HgXo6EWjKfNuDoE3EqtwbPV6cSi7ccweB5di5YuiHJvT",
  "key3": "54bGBxVSA5cfpJ7qDUJ26tWPL5aUhaC1wwJpRz84zmFzZcTfFMQBQXoqPzsyiiHjruwnxUDRFjqkmWD6qDrh3gZo",
  "key4": "7H3eY9EsvtuJLkbvm9c95Tdwaywr8rRBQXGusq9hm1VrjQRDk74iXBAKZoS8q285fXMzyKF7TKB5WtByBM54raA",
  "key5": "5UfEN5mFu3CNWL9cY5BHXJKhDhbd5HxhdW7h7x7myckQQJzCQvoy6EEG359LM2L7CrEiUsfDUwuQFnGHkwXbuS9g",
  "key6": "2pUrTqZyMgpqmmNH3TcrhGHAUPMGocJd3jgQPbY3LhDUNuHsomkGQiehub5faWT79yzFehwvvAVKMSdubrEW6zkD",
  "key7": "45q26CNBMPi1GghwLa9nUh2HkBEzkkC2G8iGhKT6DydRaGtrbzgScjnZp8rYvXt1Qi9cBVrKsuWZtSkE9Nyq6aG5",
  "key8": "5wgn7Y86mXm1e3SaSXHu7QbfAYQ4HQmiaiBKjNKt4g1mLj4QVno4xn3PLERxHypS2AEy43wHpZxKU1dpPW6p1cmv",
  "key9": "2TGYdUTuJF81TnxdiZVW6PhKEGyKHpgnCyvWvS4571yNNwW7r6tip8D3qnnGyJum9e94R3aEtuXStzf3jmQWq21i",
  "key10": "5dJbfJ57CaV7dbbxrz5uFdpkpkax6EJB7nsFc4XZeeZWwEtc5YcjUGB9FTpizXvB3XnAzrgpvrA5uMGjeBjWY8UN",
  "key11": "3hffDwjudfis8U6gGAhS1Gwa5U25EmCs3JmHNWdVsXiDofmbPBuKzUFyhjNDhEvLxuyevR4zJVz41zFbkQQ7HEHX",
  "key12": "xSwjnaFJDBbV8LtRn9wnoYLY6KuV5VpPAQczfd8H3qzUApuSod2VyB713ZqhxEdu2qPHxQX4A9cCoZnYVNqtWqx",
  "key13": "2m45UWCsPXVamQ1zAbMJ6gSdi9Dqa6318asQHeMCMNYeqCGMQW133HHxBhjNexqsV6XRMrbqWdnkC3tmmr2bWwZM",
  "key14": "5843D2w1YAjLTUVMEtZGZfs1udz37ypqihWYzegdm6xVxQdhr4CHURVgzFa5xMrhhczAsqBTQwPKxENfBwnVwjcZ",
  "key15": "2UzFJVL7jsk7wM6o7Uc7JCgtvivTK7BGVoxkWRw5p3GRumwwC7fxjJwDPK4AdgCr4c1j2RKcTu6SK5GtbekX2KVn",
  "key16": "573hJp3VcXsJZwouG2TAZmQ3RJmeMFEJ3aZj5F3YtygcPKVadNRvdemtp6rQH7DoHb7bTJZMPV5R478ZDTbTq7ni",
  "key17": "4WUzQ1z759x62Mp5QMt8fmaqWYdG3RKEcguk77Co4xx3Eh1B7YtDJxN8JXQvtAxoKhDN98YbYy92PbNJ1osLH3LD",
  "key18": "551tsdtFsPoRupk4dtmtMYyiLhQ9LaZvpVtHZDctaaRkftGdgsPkHuEHFJX9agQHgJa2599TwUDzamrqPtmxvgzv",
  "key19": "31Nz3JRziaJV8UTcjso9iJ5ztEKmgPtnZhRc2gAG3uezireJ9YiemZLCrcjJRavpJRvvc1CcvkWhaTKGpziJ6sVW",
  "key20": "3wapn2WAgvpie8gxHRa6du2tZw9rG5Et9Q2tg63CMuMmUUofVz4VYNjnxAj3JUJX7ePBWtPXSJEWepk9WtK3FMTR",
  "key21": "48gEhKoztD1K5L8AKsG4xTKgpqt4YANg96FnDSHnLE8VB7a4xN5FR4YJsbWd1sRLzuA95syt8vHcLhjS1nHbNk7s",
  "key22": "5dZNiLoZLwxXY2kZCCavZCZjeUKesD9CZ3nWVVnV22ZrW3ttgMSG9S6PheJs2LRUQ2LyiVGCuMagqUJDCZv3tfHY",
  "key23": "VpD2nkaaC1X88HyuDUcY5jtUjEDSEVfNkvGM8pyXF9BHdf11SwEkJMebgsNMDGGGYTu26A8Rtos3R8showq6Guh",
  "key24": "2X65hSZSYDyHABVEao5YdsRwD8GzRHCwjB5vCgYWa5DvZ6MJtU3Q73VcDDSo7hfEvyvQiDJNpMDat9YWRULRtPWy",
  "key25": "5dsHTXHcwzCY6KsWMKJGHBntdKXSxhQ5q94EWScayJAKCSVBfsb5SJH1Dpusp5kGn6UemQewQPP6LJqL7GRqH7Tq",
  "key26": "2QwGhyWoDiDaQtTiND7ETjRoXZkMh5ehShAiXENuSu44u9Lj8u5hyxtS5qbQCV6B81itckGZrW3NezRzqyL1YuEN",
  "key27": "7pXS5XukquqzvhzFoaSJ11ktQAGYdquqiVhnBDaHEu8qrVDrmJuJXX8eErc1cTuFr5doPHTsSVZwG4L5Wt8EegE",
  "key28": "jUc5eGB38Sx281KaS3A6g66c8W1m8RMS5rxSqum2hZPx5K5DzXYoE4mNEn3bDGMbcb1DWaTJBqLyGkyP6sZQpaF",
  "key29": "8hj91QrWJydcpteR8nDPkSZc6xQrheKHn336PyzQm2NpgFynv3qJ44S4zbwGJ35DRAYVYyLo6CWhSPMS7ZEgmhb",
  "key30": "5dCcnnqMiyCRaSb468PZrT989W3j8TV3qVVXsu8WGX9ebbPu2tyotHNxn3jDS8iP48GvDX6VU8CMMaiFPkaHhgN9",
  "key31": "349FXpe3wcshWAKfM4fLGU8cd1Le6YSN4GuXoNFTXa234NqX24w31pKhzj9qigq3ccgvxdD6wZqWgH7tdL4iERD8",
  "key32": "44c8oHmJCiSAJj8yk2ReCSXx5vHNWP1QMaEKGSd9cgvNdrv4ysmdKbMCFCF63MZ9ZrqZrS7UWYZbivToobEYiBd5",
  "key33": "4GA3EPP5GWsBkdXuK9LbgEXfQJGvWuLP1keoBxL8bVs4DCs6WixLFjGBxVye67k6fxMwxnPLY1qu4rMx2M3wXjHr",
  "key34": "38LdswUEGjtxfXCdbvDKrTJsSEgDFAyVxkn7sgq7oErcmtraLmHu94C7YcxeyMKyLM938SDET8e8ks9fjiPXDJ4w",
  "key35": "4QvJZxxSN1SHxvCnSvnRTgj4u8hxPhaHBWfY8jkzoUWVBEa6ADGUW6TRphGsU1YDPLQpT5Svs2JxhBibQcsx9bqx",
  "key36": "2hoVdDW54HPAMYPkGECGfhVWrozwrtXZnXdCb4VmL6aKhgW6q7abC92Y1qkYUUbZbNq9r9w8kWCDbBNgmTWyvK8a",
  "key37": "2bRqzUmjCtFenH9iHxSZgAM8qyQbKfHHmUKFSJ2YT3DqK5JPu3GsUL7GqnwrhyneWRigSw57uchp7PgxyrmZNmAP",
  "key38": "52DoiY93WKh5ZATuRKeEYC5EvkicLoJKEoN4UK84UZ8dLKhgf3gzczdH52ugUzW6ESGtx5V5oF6ceXgxCyMwYHeY"
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
