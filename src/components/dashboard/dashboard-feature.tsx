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
    "5F3W8HYbxhJkCVM8F41xYDy1XGp9YUBCqTxHcp32a5UXYFyL8aoeL9iBaa8foBi3roeYpN8v6oJqvf6ogBAdETq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y5N6eMdhJMBBj1pZiNDVL8apvKvAfQfevz3Q1ZPGAzJRCa7yqCsfDGBQjZg1EegsvRiTW2LS54i7Fw6tLje7xSg",
  "key1": "5319TnAPQQV7W2zjZy8LSumaMTZon5CwkLCrYUYkZtvyefVhwLMh4yepirAY3cRXxQByzSufWUVBVv4EiA7fqQVW",
  "key2": "24849UwFrRfSGidYXs2TGbKRpEwaaoR2Y3vLHNMpVQAJWzc2JhdZNF9XDsszEBnfZvuZcK46sHZmnPctUPPk4QEv",
  "key3": "XzKaq2XZLyTLujvERzBhht3rkTJsASeXQ6pTELu5sLk9rYnEtxd8qs6RBUAs4wLQE5K62rbm7DcoQpbbKrbHV7T",
  "key4": "3XzuhEZ1swbBpEfSgiQtqeeBnf6DAba2n9eVJKZNzoyxArxqVPHXGnBhjuLfvQAoyQtwGpEMU4v2UWoKbkMEZcx6",
  "key5": "5TuqWdrz3BbVBqghSPRFMSE5vWyZcwUuhJ5KW38M4Tk2KyYJvnG2KvMddKSfWwiSPLqAhRXVJhKZCWAMhGevBF3P",
  "key6": "36J1iPPAvWBcjTCtGJoWWrBRQwNRQK1rSMdhwHCLbHCAsXq33sFmyUEVtH6SfCCbVTr43xbQXMKUeot4dAqfBQKu",
  "key7": "58XLWTNct1WmFqqsLVLBQxDNgUpKSsSN7TudzfbQ3iYs6Vuwn1ECu2dtLmb9sSe6NomSYXdyJZpwRkJ7LpM8UQAP",
  "key8": "GWuHjPpzswsJgwbm8MRfEXBuzgrLSo5Fm5FcN1kmeGarQQhRPfpmCYuFoxncG3Ge24cxoKchMVBdeRCx3UBxfGt",
  "key9": "5DjYPHJr2SMDn23ucaujs9b9PTPbPZvt5aPczh1FCeJm4gJDw9QqGhj4CSiMiGr3LRkuKcXAEayCTBgtw9TBqxfW",
  "key10": "3FnK6ccGpyZZb3ZMmmJ47FJSMtfiAQ5uyHhNeN1hi1cqyWsoqt8hGDJ3HLW7zpepeWDy4J59nTrgzoA9iuXqNnfj",
  "key11": "3M1X4uE96y79S8yLWZcjmUxjuBQEJFzckhV6Ux54DhzgR987fQYGoFfSpUh5ZaV7zrVsLvGHt4fW4GAnUYjszP1d",
  "key12": "2Y6syjY6Ac9Vvs8HczJ6td2kxB8qwUFMuuJse3msX5cZBeHUgLG2sqVvVvEszb5mSHS99dcyh36rCVutkJqSjVDp",
  "key13": "2MZwrFTPFcziFukAuP7Vcw1GnCHL7NAx92vJzEHu47sEFQENyntNgCyhEAzW8tNcJYoTCp6BgLpKzrnZzaNcnydS",
  "key14": "3GEfUi3VypdUbJMUd3KXnZgajBP8ncMRUBW8vX9ZAgmXJu5q5vnXLEmhSYtv4sCSSH3Qg5TtpSeCh4UTRzAnqzRq",
  "key15": "37ZcZcGYdPwhTZv3HiyLoAh3nCSjTga3GJuzEt8H5hEc6N4Ab7K3VMcev7MKnmmwPwRj8cEf5vrHUqhJCAnFCUoK",
  "key16": "3PZK73GWXnvfAhK77C8nBvrAM1XqjdXJBqn2WY6tJAfSFuVaQAZYaTTfwuj6odaf94ZxBA9G6zYdwSrTLJKn5NHx",
  "key17": "5LTJ8m8WiEQitPH2ktLu9k87uEPkfdL12bQs13vZjBQHDYsfhfajvUKKS19jDK2WpaXroPqUqRjPc8sonHMxakrH",
  "key18": "4oJEBQ6iL4418VAR953kUhou7AMNaZWt5k5Vb9FUr3ukWorxYmGAeq2Z8PXYRYfJSq7uSRrZC8zmRKQ2VdyuigUh",
  "key19": "5WJkigDu1CJDp14WDBUuSiemCtBfNgjYJqkN6dEeTn5v6FT3jJu2uQy1R8UbVP1RG4Hf2a6iJ9LFHh5gHrnz2PWV",
  "key20": "gGsVsf6eEHTPBPB9n4XQJzeCmWxZLUwA9ivQgjirZNuCEJAg5nfoJT1CXEVL6AJpknAqk3obQHar8jmDPXwe2DB",
  "key21": "4c8XTxPk8ZFYJbthEEfx74hYycvCBU8xbgE3kYJbTQgCCUnEF3KT7i3CQF4FbYBA3GkqBDB6wX6WAaV5iZgEB2wE",
  "key22": "krUEezzTWPof3qLudmu3ww2AijqDiN9oWdv7vWXv1zJMsWEKU2fPjkqyXVYaDPU7Amh7aRTyyMKLLPu2J3rvpf2",
  "key23": "248D4FGiUVA4LmeiuiZtcNfmmfJD9R3jBEY4yvAGNF7nHQrqhuKeT7cBuLCXuWt27nq1gn24GfvsoppAPBQ5sNJD",
  "key24": "t88hT8PnAL2gEVQXJzdJ5AQb7N3dHSDxu8s8isyDoCMk7yo8rZUKYpgvxU2zbb8WCgvZZi1QfHQSdfqroT7r3gV"
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
