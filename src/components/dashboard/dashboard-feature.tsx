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
    "2RySVQZ9dSn9c8M4aQ2V1zRJBQ3xgV3sDCQ9noREj9NFtqzEeCtAR3YyAmx15DZciDC4aKTZMTRjNQpz1LjdMjCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "657hYy2t2wwqZSSrfYxhRtptFu1YGURF89XZqKHV7X1i93EDptVqknTwsXd74mYXNiANRcNh433ZLD2mdWrAX1qd",
  "key1": "5vvvWaaCFKkqMdpvXyJCQWKTezTaXEA7oLc4k2rqtsXaSGnW5AJ4VEr4NBGHv2rbNXsecxAgocrmZ6sDUjsG9GAq",
  "key2": "3RCEYui38Lf8qzC8WmVUwLQLKTRw7opWz3F18xJbdzHiZkxQWyrFEtt4fTZerN3NvJEkW5c5NnUNn1QgnLpcjHKd",
  "key3": "2cpZogsEoP4RHn4e8gEjMyzZWTcx2jw4xSWAmzutc2G3i1QmDytuUsmykv82jBxJWaJvY26wYZ2GifQZ276TX1qV",
  "key4": "39SmTkog7iHASHJweW3A7Df4MPWSKsfQFXShQ2scw5Xtpwp2LauK73sp1CWvxSuW7pk1J3JPwhteondJh6iKnY6j",
  "key5": "3CunoP8wTeKrpho4sAjuhhnZQZMWr9HCMJryWRTLqf5Ap7gJZr82bH9Wu2McBJ4QyakbBk3TJzSwv7f9spW259y5",
  "key6": "qYXQcWcNroZXCFNxBiiRuBV32Y1JJVz1cGQ9rk7fRsXo2DzkTNJuw4DgmKB2Dm2qW5RdPYRy76ecxiiDEqSgVDM",
  "key7": "51uQYjwDEcpD4Yq4CznBA9juMz5A5mQNePFaRX6hxWd3g8YTaYBc2UMEqMN6XM6DefF9zYhtYU8KQ3E5tMnUZ2f6",
  "key8": "3KUQRpCwYyqnhTwSoHhUvz1M5PRmJPCdg3gSWy1dMj1UuzBbky3urT6YC2JXKC4r5iyjMHGuHTB7BbetNZSyarC8",
  "key9": "2up5kZwUzA5SHnZcCNBBhGedVy3dvy23bArAJ6XYXVTFc2NB7AcCzFVyCUiUqKpqpcZM2TxaC23EAQZYNP3APT96",
  "key10": "eAY39zSg7z1YyrURjyUoACxbdWUKKAMs8iaHjKo3PKymBCyJXUi7xV4LzhZo4f4YqiQb5hsFZh8ogpGjRkvGK7j",
  "key11": "bvxzuW9E219st2ypoZ2pJxX4jwzuatHYkrnuUWAck3EurNssxwgB78mSVF7J2QdEbLzgpJwpgxWtD15XNAMcozS",
  "key12": "5fp1KjVNwMPsivvd12kyNV9QgzrVE7uhuqXnXBBN9EWkGGrJgiaAP5EGNKJBxybzMYT48wxgyMJdMK9TdQju8eSE",
  "key13": "2LcoAFGSSTtbkcr848125An9QioLUCM4PoZkwZoFMrsCXdP4DAVfJSrDhwspwPasUpXkscovPZHbMSM7rqMmcqXC",
  "key14": "53Nu3pVZX5cZJV7nYB2FR8A4D2yJ2a3C6sjVh6UUQaLSjX5BhBPJgSZcWLo36w4fLoVab138bw9Bm6mEsH5PULUF",
  "key15": "5eMAKjW8LPZs8B8Wtu4EoF113yKd6juruGDeA9tUvysjw2Nzb5F7bfHDiVA9ZnGxtd1EcJDii4VTAdgZ7y1TrDWG",
  "key16": "5o8fpgsC3G8XYYqHUrW9sWBbpzYpAULCg9e5VXcEuKUDF47xr6BVyWsLkSM2btvZCEwjuuyCQwudFjZpkZGwVi4R",
  "key17": "59a3iR7VwmBRm17iHJpg1rDGdPnccwM9Vi75EX3JdPuYLcWuaTRZVx7HupkkzqjVGZHbvtUtwCyVvL1tse5K3kAr",
  "key18": "4w35K9xSj4YmqeLJNkEHD2TZGDyhKJ6viveXgChvJi3xWnU9ZUuE5ZZskGhZyhbSznYuwQJD9VWQ3n3neWpdQAZp",
  "key19": "Ap5925AXsBCyr9Zheu9iCpM2rbFGmHSfMmNp55KB78npk7LkrB2CFvx4eEGWGxFsuvLCRmfcwt5Zyth7ds4JM7E",
  "key20": "DhRedH8Q4DT5f4t2d9SsHgSRVck9JpGCYMHPAqB9UJxw9GCRoBKdEdDT7Q2sdfFGaH3Aq4QAbsEnHG4SZEn49Qe",
  "key21": "4y1go4mtnJMMzLwsoHGuwtNUJzJ6bqgryAEHjQAVDgggDgAppT4NUsZudgDn9246mZ5q86Dek8HBt5pwWkfhfGBu",
  "key22": "5jMmXYW392dVrBtXbj1Uqk9cjRCqMpVbN4c6T9w2DjCf3b9MjztU1gz6mUoUrB7AVUdGsjkGsikqToeYXVdFYqSo",
  "key23": "3g6nwQfrU4dmMCNNiB2xm7E2veNNAxPyTSBAhHr8mdw5UducFxJFYqya5Ui6RVxwboP3nzqxkk5vGf1tbiQzgGsC",
  "key24": "4DuCw4K7KGrZG2X37S8ofyT8SwwSNM5NrWkwniQjwVEEhZZjNTs6jmofZUXUEPAoZXqGHpx96gaHKNcceazfGmNv",
  "key25": "5FN8FAJscVmmHH4vQfZz3yazGaV13VdNUmBbojcpDaAjib9HkUhxUxCyokaXafFQ4fTSfHUjwC7KDXR9WuHCTfJz",
  "key26": "5PCJ7c4FUAzFy24XEkub5t2kk2wUx6UykgEwjR2tbQbgu5T97CL22jM3PdzsMi3CzNB8WbMcyNJ3fPoCr1XuyqFS",
  "key27": "3iTnSXrQkP43C2cCwtPpAPM3N2JxyLJ1jQJzDKfU4aGBAGh3TLoUcH1ypME8xeidxrsE88AjFt2yYDyA8RBpNKjH",
  "key28": "5MfchyH1jNetSnaydpQGKgJ7mwabeGb8JzG45s8aWDWV4jSM8FGThvN4KwPWKzWB3BZ53iENE3AWkroBHmanthSw",
  "key29": "39VQvE6JGbvFc49URYRvVyLwTEN5VfdN8Jj5tNF9b4fsCxeXqbMgeHsKr79nxtRQpAmtffbUdJCTo8NJpenaMySe",
  "key30": "53KMSKmmE4tvAG4GMwkRyQBUCs9c8SiTquqEDGBzmnQpx6HaQwhLQR8a8eZwG9FE49GGcBcRtPjWdpNdmvGx7nmQ"
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
