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
    "3LLHSRW1wQiVJ3QbmhPWYqh9wdP89cpYdobXeyMyLFHNN7qpetVzxkRTgv5MpGPZDHgjhsmV86WepbqFpgkthv7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ux5VdxmwFx8z51aVW4KmRtBnhTJXymsxfyAjv1BfPkrsyMAQWFdEhm6S6PAaFe3eKAcgEG42rZGZG2ndke4zt6Z",
  "key1": "x38SMKa3XK1HMN3mpWd3SbGDAxdMiJV7En81Bx5GcGGnHbhfQf8ZYu4bZeSxLSZEJJnT6hQ9GT1GDpcii1xTWkC",
  "key2": "5AMXKSmZhgsHL5sA7d5mXYM1qH4RbxEH52ZV4YxWQonVQiVqiQq8k5Z6ujf84utcvDBLdwUtrSPBrLFjkKVHeqAm",
  "key3": "2CB7AiogTjGKhH4u2JEsPDYR19jL9STiXRTqoF1xuZfNtrUn7aHhkvSdmjSzTX5nd9YgXCqDbJ1Nu4T77GARReMr",
  "key4": "39jsKVPnW1XVhrv1QvnHpKsJdKaSiqGo7FjRehTbBtBYAN3p7SkSdNzrd4sfeWe5nZqN47fjuimGUXJdmaHejtbL",
  "key5": "351J4x9E8hU5iaoQRRbMN242ogV9zyn1oBpQMLzyQhxcysgsvXTkGRLUPGbBTxWv4ottVX9cYWv7SyRzQrt2snEc",
  "key6": "5Wbts4e7JyuBnbRGkXhWpKtSkxwDRzvUMfgB3pZkexWWrRY81tMzmjkDMhcPKmjkGRwVKmQE1oT1DU65J6spgkSy",
  "key7": "3cW43gvzsvp8wdD5BctoAsBKf7CL8VzeoNWdRQvLkiRnQG32k5NEbVPpsCNMzYY8QeMEfV6qibdqwCKNMK6Sa7b1",
  "key8": "441xUzR17apa5cNcJ8Dcrt2scQqiNnJpf7hiPEYM4PUvxqFyKr6jBp2HdGsSNMrREg6hsKGpvY9MvMix3spAYffo",
  "key9": "zjhJWMTKtQAitahR2dft6G81T4iW6JArdBXpvyhP9AZtUWqKxma6QW545Wi3wqbStJzjhMcryGfzKD9Lo7N4drf",
  "key10": "5xWzDzaYT1rc8uGZC2Rv1xDZXRnwJM2VMCE3fQCzFjuFYto3MpPujGpApP8h2UnrJ7cTyyMmzKzzbuvp795VJKZ9",
  "key11": "3zCsAtbeBUVFT6zZKmF4BE9AGwuF93CQKw9nFKLrJS3bRKxDRiPg7aiAjDoLNTECitFSp1vx3331Q9Sq6j2nvfYE",
  "key12": "KEpppqgun38WFKUtQNwTrFJgVGSxT9YVNMJbT9Uew6p7CyXMAPiWsQwSi4mSw391XdHzWG6Ycr4757Tnqy4XJe4",
  "key13": "ZAb3mmQHXie7549rHYS7VJNRxiB9adiL2uA7DTDavfX8ucbhLfGGN8niW1wF9jQuhbPeVT2qhLGEHgVT8mUARAL",
  "key14": "61xbpuQBYHfEfR6qoZxPLxgFSDX59zLxR1HfrdhDr23GZfimMDZ7AKi7jxqdCpjaRXdQntVhspkNPTqNwVsEKC4",
  "key15": "49uyKmMDKoBKi9kV8fSUpygZGMZMwmwe5e4W7mgfD8ZbiWdpzTfN43bdtrC48LU5rJjawkvDYbUWsfVSqMzWH9Zt",
  "key16": "55cgQtEBMLHbYrNPY3FB6489RW4QERakZABaksTsimRntMxTtnvNs2g91Qk52Eso4sDcszS5MuMka3qBvQQxJ5zS",
  "key17": "58V834Ef7UAfTD4tYFMx5oEefUu1Pw2VYNqTTzJ2NbP5pUh5BhShkPDPsCXu7dk1iBHmMr8Q3tscr3ug3wq5xwqM",
  "key18": "2hwhQxW2jGdAEtSCQWLGmzxryWPmSStEzWCRvBiSpAwCUJeCh87xwTAMHWZdwYb2RdzuJ5eQH4nvcPsXSdH15GzC",
  "key19": "4DTCGmQBX4XN8APmDvd1yjFMkEdbS1Ysj6ZzkNNpFyF4PRA277xWbtdmRcve7UxXUCt9EJ8WwzG4xExbY5uYUi7F",
  "key20": "4zKtcPpvn8fmL4qS2qJnNLNCCuCwg7YgCk2uJ4fsUHVFqS5RYURA7vS5ijrZgJN7dAqZgasCY3N95sGCeDwWooWh",
  "key21": "2pn82Xdq4QprCQgoLwDyLZZsph6AExxMiKhfkAwkxkLQcXhWx8ZtSFuGBkZTD2C1tNRGptWQuoimYpNKsjgTC12h",
  "key22": "2dCHFS8NV9sBFUeyoQpUNimaZNoHJUFMwn4frHm4hVKXPCZ7rqqoNYFR1hECpXVpMMTdEqvr3gorakgjUjEnCJYE",
  "key23": "5HD6pzHnSxC6P9swuWoogMeYPDrmRaNhGhE5vpw5GafeG2efMUrJCRZr55CzEy4UEczUtUg7AAbeTKCLKtRM37P9",
  "key24": "32hUKh8zCpvmg9vAazYqRKq6eUvNKptDAzaecmwEXyEXJV7DdKVUi6ABm1D4D3k7JUajkvGfTXYo7Yd5aJcbJs7K",
  "key25": "3asr2aT4QTibbbe9Heh7EfRxAy1gWNAF99tjeCPJhfputCwy7mEdvpSXaATDRRQqFdvGKmpVvWW4EbZAhn8hMC3Y",
  "key26": "3pHobHnECgMCCigtsEFFQM4jwYCux25qma4tRDEJ5G7Wu6JfsgWUKvyy3aMpKPrCTjWaSMqv6o8kkq6dyMiRv3xn",
  "key27": "2QNmSapqtHo7F4AYCui7mmPaPw2vzKvL65aKuCaViNNE5r7PyH4zrRXfw9yu5ooisJVPSCWyARbwMXn9Ku5hKKGZ",
  "key28": "5PY4MNdVKdorny88SE73YsYrvBJstYqqFFo5J37ivEw7NhVNpAUepPxjnbxiU8XQLjfwSit5xPiz4RLp7XexVLGu",
  "key29": "61MzkaLM45pNBZZa794nVMigHVbcE7tyUU8hQuQ4n3CxoFBrxR9wU4cM3ppF8AZTFQWLoHytkjN1GqggnwyViJkV"
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
