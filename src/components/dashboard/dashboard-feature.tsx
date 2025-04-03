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
    "gh65oUPyY97Y7kxm3dV93ntZv3DqGCbjxumeBsRCTQ4FdfjEX1LrwkkytKkdvAPXeYHsahK894CwN5CDJ7B8Qr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sKEbdRgNi3on4hjwMvXMFSfABnWiC9op7JxejJQdZEDzQGqNyvU3UqiQ8m8LK8hvEYcordwPaUNGbY3uJdn1gLX",
  "key1": "KrCR7sTyAGyBwJ9KeP1TErhBDVcs92BnGMw1eZ1rNbAwoa6dVB6tv7btiTXTtXRwX4fY377eUUzqsab7xbDpRL3",
  "key2": "3KhnjR7EZvWimyZir2ZVNbZdqqseqyKdfRQywvoYFfdcs2VrVCJ8a4PWzDWrqqG1zbGV84Y8utfa9d1xYqMAGSNj",
  "key3": "56UBXyBZxzGDju49Zb69hLdUNae4kAsMGgxBoBVct7obaj5P8iQw7hp9dc9wtK2WDDBP1CKLBdEPpZGYs2ov7Jt",
  "key4": "2Nst758mMFPmXqreA6ysqyfn3dEGPf2EN2rLoTkZik1RkCxeuGusRty8NqNuA4mSs63JJYFfWSWmVgYoHynDqJmF",
  "key5": "2dmDG7o5XzfFXd39u6KxgszddCyzYYXwPXLXYdu4bEdqGXVEQ1F78KGpbcQ2ZsjwDRxnXmUBZE3cVJJZ13Brtstb",
  "key6": "3wUjhK8PfJoyoV7b6xDSUk4rbC8zib4cKVU2KbDjFRkU6i1PceLNRprdwd4S6Ejb2CX51PmWxnCgE8znwKs6efgv",
  "key7": "3dNcjEJGEAkULCHQw7ZbG3gHtnKjST4KPLci8PgAKwJZwimeuMEGAyLEXo9VkhU2TX2jgn1vpExf1N8Hwm4iRpxJ",
  "key8": "3JDBMDc2q82FPRvgozDgQovoVNUxyvjJzjqYEHK6FddpdjesCM6M1JcNbKcNFoEjxC7whojD6Ut81k6fT5c32DSy",
  "key9": "5Gd9hNbXJtXKj4r9YeD74DVohwbCHfHUBHH29azdiraTWHU2kAmakYiZueASXWteV7f9xWNNJBxqRYw96veCUHAS",
  "key10": "4HXWpbX5Z29pGSjKMbPv6fyPxg9NJjBRwDzM4frmGzTgVHhcEfM1fwnCrcVEB6kAreZi7aypQq5XqsPJGndcTMnw",
  "key11": "5Sm1jZGHM1A9zYS9YjZrr7s2bBxg65xAah25L3h4SRxiGhvWntYE4LYQQ5iLVVsuV6vdRFoXKWZLdKHPBLbyZcKa",
  "key12": "3xZDMhCAUdoYbFchx46AaFkrC9ettgsXWpaPdByKC3sud37zTwZMHxUAfpKJMqJryDNhxqhjM2dnnYiLndRYZEif",
  "key13": "624xQLoweYQwF4RkuB2uCCQDcMPoEB7TmVcoY6xJSYeo2ZpbaLNuc6kQXZC3Z9DkMzW6CREM7f7L4h16xdR1JdpW",
  "key14": "443GwokvNAurhPRdefjEVF3bFCjRMnDSJ3SMbHDFSMYxNj9pJgrv21h7HiLbxzq2rmf7s4iR1QSyUoDBeBSTTTyw",
  "key15": "3utRJHZN2ddhbsGH9QjyTsFkbZi6pZBRtHXUqG7HvNx9bgqTyF4ETq4RvF41G7oRtTDhp9CVS9MDhS8ZGsZ8RJcu",
  "key16": "58g6DJobVBRAPEUebeSZFZcA7t6sZuKVTER46P43gkE3cdf8yXoDteaLwuFdgNGqzpDoDgP7CD9m9iZ2A2ZKsZk3",
  "key17": "4otebebeb3pcHfULqGtBMk7EZWCeeXLP78oDG7gzjTdo4FooXbZCfbdRg9ScJZ1VNYzzgSkewkAXhHRzwqfJmghu",
  "key18": "3JunAVzZZp3PnRSngRcZVqvQnB1uNL39Ch7h8m2P5ZUrj34ye1QG2ENwoxmM6y1mgUCFFoEWsafSiJjgicgkh4q6",
  "key19": "4J8yZeZgDs7z7gg76cuLtsZuig9x9iuVcFAScm4cByAJXw9oGkLkwJt2oTzFVRSpYBWieJvdQo4WBzn4R4uMkGaz",
  "key20": "3yeJtqeXMuKxq6VWnkyFp1Diav9QstUEVAXtR2oTZ5kkvbzUicnxxjaPzxombX7sp7AMwpzkPzbnAEV8kRiN5kX8",
  "key21": "59iVr6WWfasvGZB8peE8Q3YQyn8Ar4YaC44yonT9noEtQU2e6DPn1cMBmTvYBEQDXdPm6suDdZeY6HLQfLc5kTBY",
  "key22": "5BPMJa6fBNj9e1Sgf5yZksWLbE5UedezhjEUc4NTTtyZjNByUvpyeA7htoMUwvsrzkzaAje4G1BP9mV9wNeb7DHn",
  "key23": "Tc6xpgqeKzLQCJgKDUPwxidfWzXicvqNvNWHgwHhwMtm9c5Uzg9PAEGxMi8eRupbnUtQh5sgCARTQUeFo9mpYGK",
  "key24": "23416Vi5BPjY5iR3zTbeDccLw2d4Ege6qkxg7E2yrhHBqgFTv6Gqx4DdkY6SAm1xT2RTZfii4sshN8Lxg8KCE67J",
  "key25": "hnTYFNjtC3A65rEtg3YHQ5UgxYxjyQGcYp7EF8DqWNRK3M3FVh6YgeXz7TSiQW9gSPpK4iTNNx9bxQriULuNwHr",
  "key26": "dMEFhuMgeLQmn3rwqhHSPXHT8TZWNRX5ExfmfT3RUBGg3r8rLteypfpLMdFWcLM5A1J75WDiYSDvmMBLDWwybLP",
  "key27": "4kmLwoe4fTsXp3t8FNcaTtyH8GVFpdaLvKzbhjz1p6mSXF2LTkHQSMwXkZ9Ty2xy6QGFqHpaSjSy6BmS2zbxYk2v",
  "key28": "i8fDj6eQUgKYFSNGpq1ZCRbceCeqzWyUjCWDKxgXHpC5jZA26hUsCVDfWRUeBwT71N5nGbamBz4b8umC7X8PWZC"
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
