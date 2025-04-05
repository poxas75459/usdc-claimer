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
    "5gBmtduvyemvhxP9oCdgM7jFnAhmbWLTdP7Qa6yGUS17rMGS5kEY66JWgBtQ8ZWSGgLvYwFCshPdbZcJ3G9P15Uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uhKDEMi5ceMY6dpLkYGrvgwbPfwCf8wetZJNUHqhaGkCxR2KiCwrNBi9VCa7suuk1rwrWmKVztT2rHiSbjSm5rF",
  "key1": "4N98kARLKYA1Z2C4XNDMc4ewWjKMhcFCnDrPibT62wERVJCVDGw4aKEo1mCqQxWtstxr82d5dL9EXVy1PGGAMBhS",
  "key2": "4fhXRzFMUHv88UMdroNYnDwyHiP8BbqCNyREB2krpSfnBPjroSaKTK6Pv4Kb4xHVCxnnF9UVm5gQ3MFo1CzAZoA9",
  "key3": "5L7EcuJVpDCnHReqVBoXm1u9r7d7Q6exGsYq5V6UWqygfRVaUgsy5cMWDzrRgKqPfE8wYiiRe9NJjDjiBLk8yY9H",
  "key4": "3Hm4LkAdAPLuLRzcth51wWnooManr98v7uhxTXq5yau94UBVxZHixoiYkYPzihv51WSJeGYNtjHbUGsHdvfZVgCQ",
  "key5": "4P8rapUxwKNLswcZNz24stX3m4x7g4QQ6MtBcn9sbnSejzBheZLZrmFHimtEApCkZtSKUCK4gfV8qQBx6QdWDEfD",
  "key6": "5QaEawKoTrnc2MWDqDiaHrEQmbx7ZvY5fGn3xjsBUD6zRBPjNAhXEwKMCQppkWLfk5qy7c8zqzKRKCHV4vjRezY5",
  "key7": "4EfGzaWAJjUnrRDoDnjw4QkM6K1NA4UCRw5XZhZQr8KSEk6gjxr9EnEpgQBtwWCACcnX2dCXRYxwhKuBS5g34a4F",
  "key8": "57w2XjdCkxppj6txyUf61pkzsyU69CWuhg9yPHetM6ChNDMuHe1KgKJYxyex5Ad4qy35EnaQ1vUiYYrLWSjNpt5y",
  "key9": "wLcRMfSoUU5YDqiuxKmaKzyAEXv77jW9qk7Y9TY7KhmizkzJm3NEyg5tv6gP9FDfGAho5D9jjtinwtEB9iWih8s",
  "key10": "5AFPKa5JVgW2uhLUR3FaeGmrVsZtW2eqJKZN8wqJ8uP4u5NrAhQn27J9oyqY2wNwSs2HGUfzbZXsubuLHW17or9q",
  "key11": "X8V3LcJxPASmvNSRBrwYQxxpyuYspRxoVpnErAtM1J8xrSpnT7qRVPdMFTmVvJnrbJqpHWW3swzk3Hx9b7YVUrJ",
  "key12": "2gFrW5aPijwK2f6Q6x9TBDWtd2J1eQfePgifok7E2JjrFBS5n8oYin28FKKjgUxL1WNZNUtoM5eB6jjUUspzZ5ux",
  "key13": "n2Q2GYZSnFpX2sBbxm7cg3sYNriJKZsXAoQLdrssMGUn9mwRgXGPM96LJZFCc32yAZF9dAGiXX3s9nRvrse2tLu",
  "key14": "3cpmC62a1qmayUrB5LeoYxduUJPvv9Cz2vkejFzFxr3CAAtFGhiGXDx3ENssZMZzy4HCuPKJoXBRh1Qq5HYZXKxL",
  "key15": "23cMsaxymoc5wGZLetHiFWRrSbLaXP3L4FFbBk7tyAEaRrVUWRHbRvSj1urYaTctbNLNcQTTa4fNn1BFwRkV3Zg6",
  "key16": "67ZTdRBmHbCECpvyPcKMUafKVVg28yJsZDg4ffRifLozWt6JxTa9Dzx57qfKQPDmYiRzrXfvNbvLH8GJE4Z6z8qs",
  "key17": "4wLDiKZHht5mptpvPkCAkhiv97mxhc5hLEzRMdApbGG92LGAaBgs3be3wMjPYgKTbcedSRcFnwxXAE8ZXnjicUcv",
  "key18": "5GUptyA5pkAQfPZqq2rV6KDSP77QLPgKHBwCNJbz4zJfLKWDMj8ze9L9cXbFSf6u8FBJoLosAF71AUfgpjezpzz6",
  "key19": "BV6LcXrXLK1bPM8ywxdhKbA8StnurJ3vnWfi9NxWVex4e9MuSDr6M1rH2FgKJ5ps2ZNZDefqbga2dC9wXgbCZMz",
  "key20": "2oMN27jKuenQFmF4tmFPXPC7LAmxyYnidA2qBNq4oh99Voa7hyZJjg3S9ApTwVKqBboHUzyCWnQyD48PqywABu4b",
  "key21": "2CfFs7ekL9P2hz7UkqBFv5CPhWsZHbfp2XUa3Wq2mdquHVY6qV5nQYf88uQ2yhP23wu9naGEaXceXAwbH4mgfU33",
  "key22": "fW9Siuzp5E985shb5baxApzcreCYhMo6fF5MPWNXbMGzFgAF4yxMNARg5jKMF5x4sZwGGoCgYPZKuQY3aWKymxW",
  "key23": "4CDNDPUsc7itNvpLVVZonx81nftsB7EojkCyTckrYaPsqztiyhXjFPDn9WdBVchvxTxW4pUReNCBZkg3SqV1wUX6",
  "key24": "3eZdQCtmPiETd5hwpB1FNX21rsqxadDG7UY5K5mP2RALoZm4mrTDV2S5ykTUHXRkDBcka6XYtNBX6uqkV6m77E9n",
  "key25": "2KPUHScytaW3uVBh6iqCcnHdS3juHFsPpJr3ANWBEwczjG2APvM9AytQ4HcqB1vbs4TWk7WdYmywxaPKycEzPppN",
  "key26": "2zYcFZbL5Po9RzrweMf44hH87Sz7UCybByrh9vuD3Uvd3cKnwaXo1Z4ZWvREuAyRqNAVTcxog3mHGpoUFdN5CzrK"
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
