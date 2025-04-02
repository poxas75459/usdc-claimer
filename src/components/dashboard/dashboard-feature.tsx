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
    "3Ls51K9ELNJGe38rt4dEN1U2sJKraXMYH2J662uWs5hTBK1XGTHiy4yjy4VtdBQWESQQeDYzSnXERYoqWmbCFNWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKpqgcZNne8vESEzu7DXmzfkcHpJNTx3bt5AFvb6HEYKrBvBZqwUbM76wShQ5Zee32XGCFqyNyszwr21D23PauJ",
  "key1": "3umtXpwa236x6SejJ1NudBqQTFozSicd3SBYCJZpeHbQCJ7WNq83vxcUgvig2kkLFsX7qmgrzBWEpnZszin3hc43",
  "key2": "2SvAkEhV4JzUdiH8NxLN8dMxSPttfBT9NeD6Qh2GV55ng715HvXrJxG1ymU6ExRX9FxXUEeGfQjXtbCA9USPwr5i",
  "key3": "4fM8ydtnHokcnjEhki76DdqsyCjqABLbVg4egw4CzZ7YnQ6X5kxg9zT1LZ6awxcKrdGjNgw44PuRaWaBea8WLk9q",
  "key4": "3k2obYHNCaBEzqpzn6bBWcZstEh7Vo9teZ5S8nzu8MzzmawinHShqjkJD5cD4LZahRb4cmbLkiy8ueNNHoUCtf86",
  "key5": "5Rr7MsYPdMh6iDN2Z1JHJnnjiF7dP12S5vUqSqdUHy9QznVox26biFEcxFTDtnUExrxSZwEgw22Sv2keTf3ZYcX",
  "key6": "5yfRdjzvxVv7u6B8YVD5WRPzDzKAwcVZhiNi7qKbuDSo9FjJSSJP1tgueBCj5YSjK6is4xpygG4UJkTVS3pu3YSk",
  "key7": "5MgcWDGhXj5mUEX2sM4P9xpDKPiZNCbYJvTeGUhG2LLi7a16WoKXfnjtD68Dk7DdZ1bVTQFKCGCNrJxrmsxfNuSB",
  "key8": "Ue6XKFbV6jHuZTEKv4s7ukDtiqQToq9d6juU2pzjyisLP1eqjjg28RM5x4Dz4XxddZ7Dcitz8TuSTbqxaJpybRa",
  "key9": "u7no5ceau9bUWYesZNW15RVmGnm39tDvMt91g6qa8MbCwqeuLPQTi6AtB9x8V2Gg2P6DGbJmNYMK2hZ4q3Emjae",
  "key10": "2LYgE76M7kyLFqqMDFEVkArKwBZ4aAK5JfXmEW6ukDvs2JdJxvDYSDmA7Pdguqgvy3K6pNSeAdS5e9xkwKDwebs",
  "key11": "53BGcDcfcq2727i9tkM1ueKmtjMPa41MkhTGhfGyAA1m6vwxa6uAyBMsVJnBLmWKSpo9sFkvAi28VsCZ9nJMmND4",
  "key12": "4GSG1Gb8BSoA5Ap31H6tRnuV6cknGUSoNVqtcQPqKJWeJHX8rFzuDd6vUqdgTVBhS8qDc23tmwaKkzuWXLzu9tJS",
  "key13": "3mtTZmDjKkMJXC43fsDNkdfipGhM3zXzN7XYvpLvMDQZqT8a97jFSVAJ9myiD9CE7d4EVr5t8SGAf3n4SzY6CutA",
  "key14": "2wxmu5AEy4HSHrEbwPDiz9S5n4Pc8evoKxxMn4TBQP3msoDpvpKwc5f1qGYNaUyMzLBffJ1CZ152PjBQRLa9d2Lh",
  "key15": "32EgDJNtMcrsqhkNyuPmj5GhxALNx518g7Jpgtb8rpY88BcrpFN5LCsgDg8fufHpyvFNmzqf8rE4FBtgZsDxtZS7",
  "key16": "35DaH24h9ufksWXxFihJ8XwUcovUoKU6y63ydxrPBymnkuoTXn6if6Y3XakC1b8X2vsMmktxYmyRmJ2xH1Wi6REE",
  "key17": "4EN97cptqQh2zEtMbCQ1HoqtQeuSQ9sXVQCF9PmaTBoofG552sjPTYWRZYSJJhXJxi11hZm8QmPM718FC4P6k622",
  "key18": "3FingMuVRgYz74zpgEhDzmBFyxvkHwcLyAPAXqxXxhxuQ9hgPBvrn1H4v9w9MznyN9aj2bhbPNDaX7Ea8eysWmj7",
  "key19": "5mWJnzdwXfSEU7f5yD4B8LcED3nLsMsZaFvnWQm7TojHLMjGmVmhueTCR433ahFwf8y84SikgaUsMYb4YYWpNazW",
  "key20": "78xFiJB4GJXWtgQjxamWY6JromCmtTRzSNqsoefELGvmRKJoA9DALPcxFuNTcuJyDGBn7wnriePq5hWyvgVn4H4",
  "key21": "4LQoMQtCkR8qtn4gpkcQepygcWNRUqzYux5PpmNSb99vR7MDCp6Yc1BLMrXjPCqGq5LN3MwCTFPgAGc25YBjZWH4",
  "key22": "64qYvg5AiherF1DvZmeAV357C22vbKC1kwVB8eF9kBKr11Qm8MH8XgHMhHxcK6sGqYH1RGc68uVE3xaqqJQNce9w",
  "key23": "jnADu7PpRExaxXYXQp6L1ovJy9oNehHyhLWabkWW2fFGeRwfo47uFLxdg13xGPXFPkBdygk1K7KrJ8sawwVmZnW",
  "key24": "4vzzG6nzrKN49fTkZb8yPTJuxBUhePwDctz4AWVZMKddTMTvwi5yRTqDz3XjSaEQCkqHCkoF38wB4ynSXQNoqsZp",
  "key25": "2XhFDeFxG1gKTtckMoUCAXez59KpfnEuycVCozitP2YbtFnHytjTGZrBDoxYg5ics2nQgVQmo2mnWEwzKUFhooub",
  "key26": "5Bxoerd2pUSsc9ris2yXcGbtzxfg9QFm2iY2o1ASFWX8FSa7KXtrfetiyEC462fUrvxuZ3aGP8TAhqqHJ1KVJTPm",
  "key27": "2QLCsMoDwfGpAhZnTqmWtjsKVDJk1ac2xztGyLVaqoYneGtHv6bY5ZWQTrPEYhD7ZzGSX236V4raw98Kq8dKEWw8"
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
