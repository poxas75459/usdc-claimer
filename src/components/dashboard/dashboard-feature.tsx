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
    "38CA3y7FB4bYfcWByMnxGFA2Wm8RZbyaf9fUZGbU1CCnk73Qu5QHETrGp7YJFCxdgt8v94ytkjj5TGrnS9o5G7tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ypPAJkhyiC7GeQ1g117aoNnHN3N6KSMhr32vrJFWwJN8fzUdgJB2Edy3nB85zHupF42rGcsGi3ABMgt9dYV31Qv",
  "key1": "3xF7pJ7J7pGfYBQZNy6kVHXyL8GZGuHTWnzPYSNwKyvZ38S1iW6RoG8J46hxx46qVUf9KL1YxPRC6TLd3Cqy2SPs",
  "key2": "5pXPs72GzvmciSEegQZBmRxRchJ4CUFPcRLKBXyPVHYjmUngp1VPXsJxTayuBppZr2stjgeYeojWQuF4TzPUbM4F",
  "key3": "pL8pAXdHv6ZmydyFQjVJLLvowHP3nJBNetzoFFSQaCzeComPt5pBCR33dd5DB29joMf4e1GDdvk99tyvJyKb9bA",
  "key4": "4X9X6wRkjBwRJbuWeqgHhCXWw3sZMtwRnvoP2bokwdAcodXE4XqUPqbUTxFAAyWyhbG8RHbxWXYao2gqdS412BQd",
  "key5": "2YT2tRmtmuwNqtU9SrCsmdSbrdBcFauXTWkFDXyh5qVmV9UL7BwYkm8btXHVu4hDK1MUWjeJqcFK9WtmLrgP3U5d",
  "key6": "2oa3f5FLFzDWFPY9hXB4dUuF2dUMgfuwawqLfBEn5eQU1KjF5xhqYsoFYPEgPp6gz9f39EiQDArVFX3NHPBk6t8y",
  "key7": "63HjgMFbcZGqBdnbGb8xZSxPycyw45ygRbcWD5FDrG8uypWveNHA6nKoUjzmuEaYcT7zLGCnjooL4BvGTcnh7YKG",
  "key8": "4X82p2tzmNtkWyPprtcjETbRK343qako9yH8tVViq3ETJ8SeLETqcD1PJauDHyEord5jCUFaw8UBb3iS4xv2b614",
  "key9": "5jiPadaqdCswTMXuMwquCGY7xQvDryccmr2nwiYu3CxSrd81QT8yNfKY4yswXqdfJHMksAk6vBhGHCD39PA48x6U",
  "key10": "59pMXtYw4S8VZxazyejw1nfv2Ywb2Bihmd2t5ZjwnNNBjiGYLkWfHBwYcLZn7tYPC8Z4RntTXpKLybM2LpMCCGMK",
  "key11": "XcnE8sqHTQxpYfsJ447w2vfsoAgJwPn8QJW7DZ3uQiYgm88nJRzVEwHJoUJCiW8quSqzZcH2ijk6NQQyUZGHWkU",
  "key12": "43Wi6s6YBkK528r34ypM1dwR5JVWbq1KngbxoYKYYP6tnuCzWi6R7ffcPpHF2Y8gmEyjUNk2eywaRPoP1EaZkmhf",
  "key13": "5dqeRHjyKfek2acYpsgrkkbubvYjYPGJKcufPMRjxiScSyrtB4NPQTiWVST2bp2CCkVF3i9ttLWHqTH1ZoSCfbVN",
  "key14": "z7SG4T4wSts8stGxywSmQ6WW8Y35DG9EaqfMHrG5nwHwTc5CtXqjpVbiSncx1NnRQygFNS127g9T8kc3iP54kEg",
  "key15": "5daKnEkZnzAe9jQgu1BKYmUkFD2UXoNvLS7uipPKzYyBCrjePBePRmyJGYEsubEBxr9zBXv4sWmBAfoYENNWkzeW",
  "key16": "2fWdpTSsYopuVSDDyYTDtcQKLDMhamojwWjw8RjR58vicX8aSBiv91FTL8hg2KvP7DpJU7XLKtuicFdN31Qk4FNg",
  "key17": "349xd4bkiKJ1ZwNLU3hvoqJUkMSy9QLpnNuyeTNYECPTE7UgXVoLQj9P8eRnfKy5z9E1ESjz4zUXfCmEnC6R4SyA",
  "key18": "56XzJejsDzWiY6WD4mNZ7JaJ3APZsb6Ecj9AdSUFXdg1NdwYFXiPLJzBAy8apezWgZ2eVyseKQwDpZz1JRJUu2i9",
  "key19": "2ndtoH7KpZEhQcTBbfpGAunSEJDDrWnTzQ6VcDjoGumhtLj4WCs7UvyCSKcCPPjVhCqM3tt16bveNNYdTP9S17Qf",
  "key20": "jd8KL6YwHffnKyHSHW8xJ4wzsQoSPiWjH2in6U42wkNicJDURkQ2rzEsuYJGyK1MdoCxsw8j27U8yBXiMYy3GT7",
  "key21": "4Jwz32Wedq2ZZHaytvzfHvLL8B4msGX5q23ucavUm3QzUvgnr5kN2cvUsXHgPhiVF7t2HYRnPK7bKkqdqhQvVgLZ",
  "key22": "4VBdjM8gzFded5UC244HskQCed5ZibYj1JTgGUH5BYdF6tCwhH1Ug2fhvT9istSAuw6fG2jen6PjMs4eorDe5prX",
  "key23": "3jRDG8i7v3jKYeZyuMcQUTT9WDTC479MnRqcNmF86rKH78DLuZTxcd2Rb17xLNrH71uQhgKqWYeTthX9deW3HyhT",
  "key24": "2i4iASx6myw6EhLqXHvT3esXgvjhzWPzhBMAhA4kPdRs1YPf2emZ4czcp2Vt6wmcvRFZ5vsmzpw5KwrnWqQ5Lp5e",
  "key25": "Lzo61kQ9x8fY4fJ7R2rftkZ2S4swB4j8TRb1hj7Ay1vCCu9pmmnGTWztFfH65CbR8epq3zEVZoqUvYfUYJ2j9mv"
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
