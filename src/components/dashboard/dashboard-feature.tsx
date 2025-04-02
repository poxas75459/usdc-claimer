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
    "2UmRj9SMvscVSi1tk7L7yY5CuF6GEmKbGGzhDZbmoKCaDcKsiX3CuqprtYydN566fZBYMyUGEMeUwLw2EB96WSAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PVnoPexhVYosP3Fpv7pqcr6xxBtjWTHH3jV9JhCpH6Gd7CWyfyEpoG2sLkqQMp71GvwZmoNFijdYBmweypQ8sir",
  "key1": "2i5gxRv3tnsQQHaaQWcw9zfEpswevfRh1itj6JzjugBrjmCRqg7d5G9rbwkC4qXDKJ8nK8tDgr64LautqqJTBWWL",
  "key2": "4p7t3qEFyYmDyJPNUZxJ5sJnJkCe2WTEqtEtJ4PANQefJRqtyPtBsn6xy7kvAVwtzLogaUytVEqHV27KFumQeQHB",
  "key3": "4AZy9uJ5ftjurKkVuCPX6TVtuJAfFe1izyqeuZPFJT7x1Bi2Z4VJ2VXNdrmnX7WYjL7sFAvTcqnVDQMYYFkssyTe",
  "key4": "5a2cobRtSztPu4MKs6NxUXaGes8VSKng5oYEBjHWGLfQzyAJpcrcPUf1sJTYJ1Na2wKgnz1tMy7jLaoj1tZCAG5P",
  "key5": "6YXxTy7WBmhxPKD7Pcdjriigb62jyQyK9UtmGCWdLSESn9P5dGHKFbxewW4oA1n4tuvtyK6hGwy7LSCSMZ8zJH7",
  "key6": "5E5sWr1fbuykindyP8UNVd8gR2SVuQVYMGfJCnVvrbCdGganpp61QufotoywDtjvfrK68xZvcPLTXwNLqxBkxjFc",
  "key7": "2RiKmVnJzNgvG2w9eU1L5S6oNPWo2CXCojwCudr3gGYggieBaWXE718Y62eNES6fePmGuHqXgwQiuDBXWWBsB7NU",
  "key8": "2QP8cXvphmZmsrv4tBVtRMA5ignyUUtohv9UgosW9ABPMpmUa6fGQGf3ERieFnnJ8nBuaxUzXQzrbCWTDhWCyGLM",
  "key9": "5yCymTrc5i2ZVCAtU4caJp5B68ucRqZTVquWCbQ8xTmwYgkhu8YJgkYurGy1ffryDFzenUJxKk7rJVZBk1xFMaZD",
  "key10": "2L1zhkXwDUku2iLDXJPK2JRKq93ydcsSiNR3HYMENinBQV7D9TtwDXev1TDZEo3iY6qQc8U3zUnVuERxJszH5HRG",
  "key11": "4B5gP9F9RXpL6JcHtgesueP3SdzsKJRLi5o7SFjautdQVD14XsBcEjUkM5dLtJBjTZ1Zg5jnXJYXyf2LB5qpPWp1",
  "key12": "2DujeLqZ13tk5TtpcEw3stQkBVYp7s3pNWK7Gtu6MZwoVs6xoqaRHNKqgsVyHznF2ZAdGf2xwMZbszyx7vn13p4e",
  "key13": "51PKHgM1JgH7UzzW8FzrqtmqmWKh9hhoZS3Q6hZTonr5YtF8NnAzkQb4trS6ZeuhpUHrBm6WWtDqwmWY4XCyBjAJ",
  "key14": "4v1t5xrnWPXEUDVbqNk3tAVNUvqB3sjxj6mP69ABM62rFGk2pgcXgHFpXjkYUsaz2gNJfrPjM7Lkm8N8N9sxfHx5",
  "key15": "4A8E1pZDEb2pHrQDbxWyjpsqunrdWasYXuvYEZXhjSzqYDiMvBcW1pqk7ZUR8C5oakDKWsuMh77FXawsEQ3W67Ax",
  "key16": "2ovzefpNSWt3ngb2B8z5Wpq6TUDNPh5WV8dyaVMjbLziRAAMj83kBPaoHcdCKXbSK5UAdJxtRxPnCcnwikkFD99n",
  "key17": "37TJdNxM6yDKR8HyqyAXiF55yjB1ZDwYfrNLmv17XQix9vpCcE1fZv3dhJZ3T5iEdrB9TaLe69hyQqGZLWB8GZti",
  "key18": "5VzG5XYwZXcPxKCM1Z7jpfkrSRWEQMHuhikUbTK4h2btnVx5yzPXyxEPggibp2xAeAAK7QwLAMWJsvGSWWCHGEHh",
  "key19": "2ErtaEpxgFKpNtPVym3mRraiUksCgn5fss8oK7puz73VE2qHEHmHZCShq5ote8iUJSFQfAt8amKxqdf7FsfmokrH",
  "key20": "5HiUwTuDYxKGMpM2VKncszA3tfQ4c8R3qQcDFkb4xUfkrix3E3SkvnAFb8XXbKYv5FGroqbHeKdDjpEcr5Cog1ji",
  "key21": "5PkdMLhhbMToUeUiM7SkX2DarEmWu2nVbNw5ZfCP1iTwhXMnqBUs99AZRRksn2osCpWC8gTGjdRsThtg2XWzXnMb",
  "key22": "4oioJRH1ujem68xNNzMKQ4mX6DuNQYMHKdAHJEDhqAw4XMRjtV15cvZRbwqMiq6fegYiYRDqKhby7VvgQByZM8EW",
  "key23": "LggEohuAPhCvFRXVmApquHQkb2uzmAEeg9rp76Ta6PfdkKm255dvLwb7HC9TG2ejJdm2mE5XNb4ZGRDU3azHjJn",
  "key24": "51gwc3vhqP3BH4EB1wbARnL8fUX787dzr2ypoXeeRRsq6VbiG85G9YkpUSpLuaQuQzDFDzdVgq6kWH7dyMsDjea7",
  "key25": "5MAJr7r6rMRMhVmSymFTWXbNqph1q5XEZrHGL8AS45pVa8aouvptaQWKVrAiVLXLsvt4XdvubHbECfLJQNbqMiSN"
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
