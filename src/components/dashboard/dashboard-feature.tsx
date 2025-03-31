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
    "3UZARiSj8uRFXgVpE7gcWaJgUWjp1G3ceHnBNx2YMDqEUitjhQnAgkpYjSfVC2v3ta66JJH5EdvWEtFAkKzjfQ55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qbHR1RkSQyGXSyWsYhwcvyKs6pQZSwofL8SkJa2ym5ASvUNbx4mHMLiJ77BJdtJdJ2xXoZyev4WDUxzEJuxp8bJ",
  "key1": "3GhthqCDE72sbcob39H7qrdBCYiC1eD1BTS6CAXm18fgyJ8MHuB1pmoznvJ2GxUwacbcaCdo5nKE6mdhnitP1zcg",
  "key2": "3h8xozwd1DzCg1PAY8Dwyj7Wq1W4dmfmHAWnfiQpn1tDQBtyjPAmgNTRwQH1VQmmV3nbvX362ym8Uu2jsJbZ2nz8",
  "key3": "4VZHH9VpDVWEJNRN62fScgG8mqc1uWpmSJqz1K7429Zkugjv1o3A7ECaRukHJEEEtHSYKCik5ztEcrKMFbA27aJB",
  "key4": "4rUHDg2gzmr8dbzpSN5WPVz29JEshCe6XPrVLB6wTfHS6pBHJDxRV2TWXpzCj1KuB4vAtFgK7Cyw4bQpZUKK9zd9",
  "key5": "51987buVdEVcX2M8xXX2fgUqofNKeYM6pxRMB3cBmLgrYmviqT8CMJ7uAJnE3eerJ3y96ZGEmEHAgLJRDTBEujTF",
  "key6": "43toQKvTBXymK5C1g3pMeRiMJi8sB79ygzaFqWDNW2QtTXgN9tr6vMz4hwBGiPyqKBqn4uHKUBvMLwcgmpSSYrtu",
  "key7": "4PuWev4oF2qDURTbgvpMXZEZY7ekT3pKM2VxM513vtgAkVMzc81pDEYmTzgxYbhAbQBkTnKDHChkK37S5Bj23JE",
  "key8": "5QPX2uFWaxfdQG8Fb5fmHaNHMP6YMPzwRVv7Dtee54FNp1Bv3jkzo6tNsjChMsSzf9UL5zsjAPq8QbNi2DpK75Me",
  "key9": "4RW3zd2fjbCAihE75k98riqpTRbLs8c9h2PTiByxh9E83k2ondEGZYjy4KoKoPvAY8gD1hG9fLtdvA64YoQ3cQGu",
  "key10": "35votkeBq9wurRnVghVSPfUeqZz47AyCTVTDzyXjn9rVEzsWcSsYsHBrNb79vqptT9bssJookecHC4ALvQZS6Jyi",
  "key11": "445ar8tYeiSdc4TQhpB6TPm8YCSHhcpmiJGrLdZ9X7fjg5KnkEuWP3cdKyXFtR4CdkeqFd32ouJeBjy3qyUomWqD",
  "key12": "42XkdGbAwcDnqm8KPYTAHBPR1DZA935S4SSjhnrVmefdGLq8mKHju1LDyYUjJyZ3R8EmgzrN1jHjYgxreL15hRt5",
  "key13": "49wyCxXzGzb955yDufAR8BdobyXaFjwmXkybrPp4r9DZrLth2sVWdDM4scwGGx6wP9rRFmEej889fEZdg6avZqW7",
  "key14": "mUDNbutWxVVNuTgE83jNkJcs9JeN2jBWLAkhCvsCrs3yTPsBRiahAXbtk144WjuzVGkhPR5DbXRujf2Ekea66pj",
  "key15": "5eoPFiqKSxLcHmLRDtKReUMWpihw8YnSziNTjR2ppv35nTNHoTtAjW4JETZVGTpieWBTfmWJFabSEpgxkU9AmPts",
  "key16": "4HZyHLYjno36f2azNi8YhmnP2Xea9b6hTnGcJmCaJ75ZLC5AEPxGiAx4ShT9w3Si2sJVWeeaD2sSDH6xT1aCWicg",
  "key17": "D9xyEC6Tw3kfNSVvghjFgf7eBU5zNoLx7RcgewPCgCcZ5KsnnJ2wBhdtyJfqC6GgGq1mhfiPDhMMnq5CBcfWuXm",
  "key18": "3viC88VuBLp24n2qcNfUEeB7eoHQyDz3PRcoQjDkXSmnQbjQ4iSVrxGqiCw9AzHLQMUNQ95n7NgefyPPFru65H6K",
  "key19": "3EtbjbdJ95qPkswe99bSmWruPMrQmwh2mLSWkodU5LYSVn68MTecQiDcyokU9Ya3KYeUcGZ8VFWFvMM5fQ8nf39q",
  "key20": "2vEtttKVR9JaPUVNtUWY4sz6qbCqN2Mbp8eWmM4JQW2iWnN9kYfQynMjF9AcB4UdAtpMxDxrS7CWk4EZFqenqpmp",
  "key21": "4zWzSmeipJTaK9gZ2Zr76pVcMtpH6RbQphZJaFxqasbg31p6buePYr87rnXkFk15GGm11fpK5rTV1HQHf1EPGjK5",
  "key22": "5BiecY8CttC3mwpanhktryyHy6fGqX5bC2XDpSuRQefKA3D6PvveYAydkVjbX84NjL3ZWfL39j7tEucVYmC5Z44R",
  "key23": "4TK5itE58GwNkKWQvN16CWuweDGwxyxEQWk5bpzyssEcC98n4cLFrocDXnWUE46G3F8SYXnNAbhtkmrz22w51hYW",
  "key24": "4caAzkyNTzV8RqH3i9YjGMU2yy4KF9WG8aDj3HAReUV88gjiLiivEkDokptNtFNRtCQ3XvLCNxzMi9KLicAhPiUp",
  "key25": "3od3CX6sptdKwaJvw4PDRSj9xwE47UVUFewdAkrEEhc64sMLBzKyiWAuwc6HR4gZmK5n9z7FqXxP14WyyebyYMDx",
  "key26": "37pGccXxfnsY51szAzCahkkap4XrkCLrJq9FdLXL5cr3vW4HjMeqFTBV5fZKHouaMwXpJjP9BYBMxK8zf3pq5RCW",
  "key27": "4t5zrLXXu6bQDa1PtyM8zDAYi1KRAmnEPYzyCkB6Rfix5TpAnZvpia6qTMhMpUrRwYDu6muf5Spp8Kj54AgrtFPq",
  "key28": "3pJ6fcZVYaM9sNYqXv9EX1Bvoh3fmXLyGsiM7DB5oW5eKuiVL46FNuoX6E32quxdqyhH9sCv9SGQG1MmWBkUdv91",
  "key29": "4QiSWwxTvULkPeJn9rsrHFbMfm11N67C3z821eeJY6KnbmdQnRviR5jke39xjJQw2VTKHksdX62G6YD7dfqj7CEF",
  "key30": "2NidGPqYGKhjUaPaffqpMh8545RydVwxXBj4WjLyXtc7wWLpsx6voCzzuBGWuFsh2hWcoevVsX3BkcVnqu2v5o4c",
  "key31": "4URoWzZXyXRh1LDdskHkgWU4GHhETgtXWUJdFvhMsczrpC8skDFukLGVKzkrtzpHvpeNqJExsDjRu2LnsGzqmkXb",
  "key32": "5xMvkdG9e2ngFYuACMRUnBJqEUa7GQ7KYkfRuHDmtnR79DRTJHcpfHd7s8UNXt4cCzFX2QKQhYhdaMRvn1PnGFBB",
  "key33": "42zRJdnFKYNLL7USRu3q6a5oY4tGrmpMR9irxemdgHFConB22ohXaxomFMmbR3zeiyGffpbA9jpp49Yzj6Vmwcfa"
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
