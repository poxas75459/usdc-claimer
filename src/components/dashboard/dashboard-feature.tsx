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
    "3ZW4rGxzVZR251nbDPbKL8ti2Yf2LfSw7mha8NdrPvbFa7yMcMYYfPQQdh3hZ4TtRnJV7jiGdo6tNjbFGDAMoNSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AeuCgnTT4yz2pPdURZjFXAXa6uwwu3DoLRRcPC1qhjhFnMtoh3PLvDSdVQSGKtb1CrsAQsFmEy7dYo2NKSmLu6F",
  "key1": "2TxMmMFNnB8ofU7Y3DENKt7sgHfrv54znNdLEujduxZZeXAPy9wt1DdApLuKsJV67YQJ6B5uewK6DibofCjDqpUW",
  "key2": "285yAW6pwSN1KVLSs6EShsMk5hF6zZtgYy1s85Wd695bFBDX64jNTdVcueMMNEWC3sL8d5TZnR21zZJJwqkBvWoy",
  "key3": "5dkvCd452zU8Ushexgu4C7XZUMiLK6RHUpjrkFnGcgzwpyEuscdJ55AWWxYXeMqm7YUzEkSwbRbonF3kVpUfhFmf",
  "key4": "2v2bQg8Dhuq7kMKYP4PaAcS9JuE9Hmppg3iWi2GW5pLMqpFpvVsDiRkWJZc6hyrc18HFWX4v21bMH3gHmkoqeeto",
  "key5": "EA3V6DmLwgyVvYLqwh9Rcfn4zstbcoNszmHJs9i7Se6knmnWvx3i7BGub34t6HNCH5xUkDnLHb5KVA6u8vUQBXJ",
  "key6": "2j81Wipv1ccgxPhNaeaeQ54yUqnyE7SDg27EDq15j4c4aAtpLsqdjYekF7Mr8Mh5qYBBHnuMFic93jenSEp2GeJa",
  "key7": "4E7kfP9khYeHVr6amTo6EAuimRfmfxEGHWnwwVCkDfU6qYUGvsNbVsGnFoRre9MD9YNN6wjr3iTTPMvQ4UiHnP6s",
  "key8": "21qLnKx6mx94miCzFnjax4Hi5keLHG5eXGR8QJVFnAZaMJhc8eHNKMei9hA9GNrPuNiT2kRosCZswE4VdJ3iRUvd",
  "key9": "4RkYyJP1NjHV9NNCZQLAydeo2jmVyDg2mwraMQP9GiaT6iEKauit3HLdgZC5wToDrPrZFouVPXTTAgVB64GC4Awe",
  "key10": "3qqhe9bCpkyAVyvWxrUybdeo89hckGPH7rQW5RWAWRQLwvC2Pdoera1bCe82tmJwvJRq4iiFcn85YA4UiW399bgY",
  "key11": "34W8gk1YMpGSycSrVqoQnzgq2NQkjysRMUzbqWgHckvAUx4Ed6xR1he5YUSRnJULLUi1A55k6faYrFq9Sdrbv9gb",
  "key12": "2bKQgbHj5hH71qT7yDYkBiVKJ2VZpKcc26p3hJbJBAg3EBLyDGQVie8frHgncTGMKBP7QYVtjQe6dZSHcbabKzuN",
  "key13": "5Mo5rzAD7PwhLCAHgHW9QJZmvmuSxaKqN84oQTpGGBE2qTGonRmn9nqLSetKANsyGBPoUAs5wyZiaYfSZXtr1GaC",
  "key14": "5MZXzCLf6seArh4AHwE4ojpyzmHdrAcgQbPtBbEwCxHS9ZB9ffomYGSjHZdwiPtho8ztCo9auyiVZbCYNT4PTDZd",
  "key15": "5aaupqF8bqzxG6kbTEb3iJbcktSTvu4vQ3Z5Kpq6SyR3KvLTgBUmQbStERLjd6oFTakiWgHFGTLByEjktwgsYueK",
  "key16": "2U9yzeFMmCt8Hk4QhWYkvbZ6bZrPg38LqLX2jQZDHR8pUFU3LeRi5NqSnxmMxEnRhs3KGiUj7X9kdwmGnLd4bqVg",
  "key17": "2rv25tHWvJFcD6cLtadGm2GQy8qBvu2oZm3zRuuNF8aWqkUPCjnpY5BGZQmHfoxeYZqjFnUvMXebxuSaidwynJna",
  "key18": "2QaRYHMbX5pvNfAkUJP8E1Bu9gqmsHMDzLEHYJpQuCYGoXnTWEnmXfvgXncFPjn1HDBTeoQ6a9YzxTWHTN8q3NKK",
  "key19": "58qa4AremmCUfksGSnHLpPzF5d2TJj57VXDjVGxfcebVgwGaZU8KSuHtz94GyhW5whLrHqSrtLeFaRHRqxcrtGB7",
  "key20": "23671af3UoZFw7Ux2NP9YDbutrT8q3ssTc7KqtytBYdLJjXCuFYquB4rjQ9NJ3v2fdG8vhEEpX1GMVZsxDmtDxeW",
  "key21": "WZnmH1GWdTxUWdBSXTUou9SfGneN8s7S2yDRiUq9bKxZ5LAL5RsYDQPro9Sn3CUy2zLSvNb1fxEtsZKNwHwaUHx",
  "key22": "5KAHLVmo3yz89NJZXq5h1Y2UJcWKCe5sKPfEjzS3EE1oRWi67wYWzMyYJQGthbUrEPaTFh4jX2YsyYrXsT7LV1MT",
  "key23": "2Gyrrcw1JVs7LCFwkxsD9VDMS33yRg1nmhiwEPS22mmAxNtxcEH43K9Jaw4aB8633im3UkaJY15Go7Nb1AuvPKoJ",
  "key24": "3ksr2ha6EteSv9sd5TEsni5GLRtAmGzWwirHfMafr9WwwNZ8h5Smke2ZmXR38H1czskqVXMCReZyuPg7zzqsSUTc",
  "key25": "2hbTnKcUfD7GYz4hJRweERcToYCKdm1wHRf6orUrHZupKSyGQNjN9e5VTxGsGWDCxvkeUog5ex4uJzEx2J2sPNPT",
  "key26": "5TYigQq6dfenCJSPsawTV9RX6pU3S9TVVc6Zt7JqgfXS2LcYLNTT2wQMARHSwSWsd78Buz9h2ksed1qDtZLMKYRx",
  "key27": "4nHB1C4rammjryBmiaqkUVwsNwhPvdG41KUZniBAfVzzZju95ZEPE9KbFSc1R9FyY4LqTDCNphXat7HdMkR13GS6"
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
