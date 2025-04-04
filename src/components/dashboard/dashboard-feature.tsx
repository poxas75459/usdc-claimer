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
    "62YddLKENDKQYpKCmoyzd8gQN1HtmuVJVRu26quNnw5PJw5s97LBXczopC44x8RPFnVoVhyv9KSyHZmxmGhsKZFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zeB5pQgRJZm3pLRnLEoDPH38Ay3224dLSq2wdtw6B41TSoMWCNE4AowVVS21D2d59BkShnUXHVEcx782iEBzJ5X",
  "key1": "65aEYTetcYLHX1a9gGfT8P1P9QVUvGWJQXxUqW9PgfPddGXC72Z7SBiMyF61mQpLsYptVyHR3BMsAFspw3SvYJmz",
  "key2": "5bcKveg53pZZjJegUaw2z5gkj2n5wNgyGuuhHxuZoqLQM4tfyQxCUfTEJ2HhevVLWMbFoQ1GN6u1JokqWkpi15JN",
  "key3": "4cGjZyySTuhPMJ1rseWuUFNqKH2A1MZAS9ZPWMuT6FdasUuSuTA5rUvBb5FcsUFvVcJVDYjb4tfNMExwTZCKWjSE",
  "key4": "tAPFCNX7vZmT5GFWKMg7HsoML6YsdmYo6X7kboafFJQ3AFLHUCJ79oSYH8vPZkhJx9MarFMTgYUGxHBjYfF8cMr",
  "key5": "4URgM943Mn2SXCv357saSyDv6AjLaG2aedgHM5du7K4aQKs1zWvQUZhjZnouW6bFmNWSMMedBgVkUTZfdzDXPn6U",
  "key6": "4iP1X4d6GDbf7ZLWDfSTFGdjHVbzV3tGMHParqghgEdN3JFqytuDvU8c9yBxTx65pc88yaNsW2owmBdfTrXcXvEP",
  "key7": "2SketZi9dwdTEXi2PkTiErDshQAfAGLiwHa9RnoDQu8B639KhfNZN4SmrBEXgJCuTfDvKMV1bfZvA6WGRK9e276K",
  "key8": "5xoXC2uoB7rhiwoKoGJ85rKNYksGJ5nGWtmiE4bFNKUFosK89pcQ6FzLECxkUepVmb5mDqXxmcFGesCNy7DdgRxm",
  "key9": "3AXxQ8fpxLf5CtLh64ApRmVwEhw151F3YjKHnqEPMcq9kz2XgSNcEXkiaFuZe6oAX4wAt18rJWATxG5BTXkKgaBQ",
  "key10": "63Vj7dePb9jHTSLLmAof5T7SPQtX3bizAYTSdLGVdej2hW5oU5zPKdCWYsEgGBUp69Dq617ikSoLrBuMHsfvs9Y",
  "key11": "5gkjqQWncYuWWxBSSGZFdgWUkW49uTa4FSYXSwTc5Q5bUsirbtyFvr5prrvzkPezgijtAARzcZwByjmE8J6ZUE4p",
  "key12": "DfXYcAGiYAWjpu1oEJtEux8wRHkpxPQV9hL9SauuYN5sAoqyqPomK8JqeoGGCgBQjRVP1PwCdDTNgTV4jD6hroE",
  "key13": "4KeP8HJ664PEiGNpT48gc29N3DMpE2e2MQ3xbudCiRV5RjGdKGvG4CzabgVJieq5Y2abxrHx3A6dStTBaUBWMr1t",
  "key14": "T9NB2gv42tS4xQ6c4yCNzx65Vefr6h8CJfwqwfrLcA9ZLSjPw4ULWU6CZ1wk9GgjLeWseCafFR8qBYUfow2W1Fb",
  "key15": "2bbRVr13BATqiiL5KWijeJ4TCYkrFZnzJYy6UTRAdjsdW15GmXzXEHxHJqXjoCEg6N3ef5B62PypaBcptjLQGerb",
  "key16": "5zZY2Ju1DsMhVRv1e5mtwtFmTGR67zLbCrr2Qr1wj4mLfsnFj1poj594uHFN9dk8ThiSm8zCBRYJ6bnH4NEJsjR9",
  "key17": "7pb42JXzUCtKENk3dBj9sD5TfY67KocLRRPsin33kkL6WwGuYiJALEeP31HrvYkk6moYjspUhj6txWZDk1qWV9F",
  "key18": "45MnBek1CuZGKHVzqPCL7cieXvh9f23ZpLusJr9okQ3XpWjhPH1kxRLYQuHi6dETPxkhN9V2qtTkqgkc7QPnrjhU",
  "key19": "4dp4ae7PgiWVtBQdpSTSunzywfk5na4ZBJAWXTDz8ApJnkd7z5yo8yjVBEvWEkgvp39PYtLm6dp5wmE5GrirPmgM",
  "key20": "5EWpvXL6e7gaCcYmUPAg7HGDiEV9CunmqFK3NYaMoapRnGe7PBa3x4ryYc24F3tZ1guTrmaNXg4vGir7hpNNqeM8",
  "key21": "4qPPrLUi23gBztvZNG1hrNQDLND3UTyvC4pG8RE2jRFiabS5WQRY5FtkWSsjUp7qgqoiASuBNdFaComtSriw5aE",
  "key22": "3rWitJQvwqiFXX71UatbjH6M1NgPeFXyS3z2bHqK5Dm9SWx6zQD4MEDLeUMbQbXuZE9xt3duESJCpZf96GxNKUTj",
  "key23": "5wK2EGwQAmHq18Fmn6DB1BEFBzRePV5Can3im8j23gpzdhA5D4npERmEXHB1Z4LxKMgsH6KJn6uL2ZJu8BFkTBSu",
  "key24": "3LK3F2g8ysiXoSeeCUS1MU7pY64Rwn6c4EnZQgfGrstFshsBrkuSF8U9XYuFZ69CnPUvDSTs7bVpb82Mjr5JBcLj",
  "key25": "2N5Dpf5Pefrc3oJ7cyykv1TZvfaHfPWQbKhe68jkd6WzN3ESfMrh5uejUMD4MNayLjn337otDHmBi2CMBN7wUf22",
  "key26": "2SBPDhaM7NKnN1eYDcjCXB6dsrQn6PLUQcfeU9RGcMcFvqXiW9gecyMj7rErt2mt78w5X5rCeAMxS7n9nbPXRVz5",
  "key27": "4KN4d6mB3CdYQU2p8WaoZJXqm1ursz5CtmWfv38g8DCzhdiZqZDiDKAuXqARuMZuq63RLvkKJwx9yoVWErwcsWB1",
  "key28": "TJo6CLNEpndqqE6ps2g9GXLHenzRop6MjBXRRSZweMdnZrx2u7ZUiS4G9EsZvxzFmh3FNcdquyo2nQbwqt42BB7"
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
