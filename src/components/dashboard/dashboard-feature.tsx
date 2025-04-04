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
    "5dCHTS9NdTeTX8vbY5gp8RSk1SsQdf7NGTWfSPmNxRQoSuTpJH1fKzBS6KMvCh1mePRohwSFgp93StgZ1ssxa5HJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LosYoAr9v7UdTPd6Z4h6EXYEPikFz4oNQw4Yg14H9Dhi7pgq74psZVhFRpgjstDvZvc3Zoone1tx6nRbaEv83s3",
  "key1": "4cLjkdExJyBT7w9BLoaYLcaL2wcBEKfdx7bTWLUGr74Bt345uViAp44noADCPXm6W6BKopr6soMN6nvQh1riJyhu",
  "key2": "JwaTeZoMPd9m8FpRmQvXirsGLD5Nkyvpb2L5ZRDNJarrxzkwiDnjiwVBG7R5prTgRUxEjC1Ny8BYTYusKKVGd8E",
  "key3": "5BWb3NRNws6MEYVqnYdQ4vhCFPWSSvCjhF7ZEQYjRkjFUPS8qUTTRK1DsW7bGztikzD8hBmmhLhKxuKXnLJAA2Fb",
  "key4": "tMuNQMRz9eta3oNN35CukfgVtXy23A9LqFiQFFxkzDRAM3rxtntrrUaL5dGzuezL6VgDUmGLSTu1zK9FbTcBUFE",
  "key5": "4gwNKSQ6d9k8B5sDxs8QtzmF6PW5fsD8osFT9aDpsQ9pXEhWbpm5xqpq4CY14SNTSQXN2gkCBWFr6LANfojj5ttV",
  "key6": "3brNDbJoYRKUEqf9PYgZZHF8HJnXNUSuDiRHfr97Xuwy3riNfz4isGkj6TXn8eTki8gTgNqmwHthzneSqgCai9z3",
  "key7": "3Kw9UKjsEJSvtpSqEMu95rnFhP7sUDUeeYAwBS76EuV46KyPTx1fvNuknY1gsMLmP5dsKvxtKNcy5akf5ZAiGoRm",
  "key8": "66JoMRsDRz7SfpzifReG8S8wu1Jokv5cCW6KvqUTHfiT58hNdVZzGeJfuDR46QQcXnaiqTGRN5SwSX8ms1iwgxsU",
  "key9": "5WCV2C3MY1ghL3N7eifR9SAceG1doDEJ8n8dfnu374DSDR4jrxeGsZ1rSb7NCqVDqUCdFU9ewpiyh8WRADoSujjc",
  "key10": "3R4iWPzJqrdgHzfeWdJ7rhHkzHTzFws77DgPne7fsWrrr4EvthebRza24zDpknAcs8j9cJfN3KKCtNQcKFUbDnQ7",
  "key11": "3qs9TgLb34ny7t3RTsfbpwn4Wcrxi6Qqd3hxgobEeqk6dnD3Zy9EZbk4x7Ugas7EgfvTLjyHmGF2yTGYmwGEgkN1",
  "key12": "34yHaKkXuEo3XAeSRxNhoHo95wqhLrKU9oJZ5ReKfQxnsTSRabb6HCuAaSyxa65LKDXXe4bBCXBELfq2xKtLPZnn",
  "key13": "4HSv3ERfR2vxx8XxKSg1nRpPSXtMW6E9cSHw8JvPGp9oXjwcxLFcNQfe27h2KQksq2opqEU72sWUT7mLRT1qLwM5",
  "key14": "2VWesZNL7my9vZ1jj9xjpqXbtbV9hWJJBMabwWi95EQx3QFYkk6Yu7kNrQctgBQiBM7PWtwRsrmBf5h9eJFR3fx3",
  "key15": "26yzRwjeXNVmHKG9nfrcD6Wu5XzajfS1ynoq3vv1pzXQNByAUAgLtRMKk9CqHs37NUEQF6dcVnJBNLi39NMt7Th2",
  "key16": "2GxpwGB4YT6QXtTQ2XVD4P38Sp4AqjQVeqZJCEJk8jA2a6TgxiFhD621zNLwzCYLQ4wpyfp3feCMWhqHom9TRUyT",
  "key17": "4Aw7qbhJkRy5VbsP4zVeBz4LEVC3KAETLT2i7PwXZ2yNPJ9Prg3vYNkdKke19L3gVCU8MuQSDVUaPq84hAY5LQ2v",
  "key18": "4W4PDapax4kEM25bZ8NHKAKnq3Yj9RJvMngZ9sxGM3HYnD8pW1BfvgeQvYGszpM4etyztphs9DoHfApeJTZgnTFA",
  "key19": "5XZe8WeVbyfKUzTnnVycaXmeKZttJiPfghknfe4NmFwhSqwEHe9p2PRpHg1czYd1b2tqyE41GVH6vG6TRZkYqf3E",
  "key20": "AUrxpwLKAqjPVbNDkK5M9cHFs6GYYebN3HxthUH3KzvoJsceSsCAZDryoBx6kkrjGw5yQtmEQk7hBzfyS4hRToQ",
  "key21": "nBNBieuatnkfB4jugeenfagy2Ffq5H9KJvL2SvsQMXVsLa5BX59WeVvPpnLfHoRR23X6QAN8QSNykxTiMojwhDg",
  "key22": "2LNkEZDYMPjmLXmENo3vXdUybdfov3C619tYGDvKaEiUteiJtcBuAPax9zna7p9kuxVtgaM5QfXgBCc6gRSPGBj8",
  "key23": "5egG2RdG4fcGatKQHzJZg93HS4nwhroHzpUQdU16prB4enuA4aMv5c8XpVDdKRMeyvmMZ5FrX36w5N8PDn43UCwT",
  "key24": "4XVnUcao9y31hPntMNYrtJ8M8yL8zMDbVnkc5qm3JcW8DxUXTLsBKon1yVVrkk8A8Mw36k9SJNzUmaJE4PMMYK2E"
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
