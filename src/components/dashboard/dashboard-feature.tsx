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
    "3XEuedViACXb1kZ5TmRzbKqbg6arE1s1r4fCx5dDaYMsAQM6AkCmJHnp7XaeCwRDWK5g1CWfNAPpsU8bcrC9MvRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sHTNFfa47Ds4EPd9SCTYD9Vx7yDZ6XJy9qP5t6fEXe4dThjfAEaA7aGSKgMDXFKuvfMxNNqf1YK2awQX7mV73aR",
  "key1": "67gihukL57M3pV52CM8xpFVo7TXWkgr2bs6WbTbSbeqgnrrh5ii6DW74xmg1emMR8c5SbHAdoS21wRTR2xKddQWN",
  "key2": "3LppiKh7v2g8WvQtfB3XU7Q4yQ1CnjwojJ5WoE2sFrjHmtgaMQNgiFRvyu7T1oTQYPToQKw5n4PPcyPkcTem4y8a",
  "key3": "67gZ2hNVpcDnQBwWcZGmQ3XotCX4S3sKd2q7YueEYaq6KfXZXxPwyXdfWL1iUeY4bJxYtrs9GXiQfmA4Z6DfHbHT",
  "key4": "3tVrnbEX93FzaiuCWLLzfhYLEPopqFqdm4Psx1AsKWGcrTRMfonSFdH9yJdR3dwQEbjnKu26Zm5i7tyuqU1fa39V",
  "key5": "42C2vJwYVzhpiYYg1G9ApnkXZUuSKjWNrdJBofBFjxJeWa41kKeLj9ot5UsvEuqEAxo9FpVtB1wBv9GRqcykFE6U",
  "key6": "4myGRFCRqk4YMfDdpY6yDn46H4fcvNRc2ph3D5tmzdHhiiHRGFwMZRctt5eKmjMkLgPBNheM1iuHNmMoNzF1x4NQ",
  "key7": "4LSof2QcX452z3u88Zw5nhWb18oWALhKFLASLwXepeTWY5dMczQYJkt8LZhgwTyQVSvGJGnjG4LcxGPmnyxgpwYh",
  "key8": "3VbS3GVnxVJa9qJFy8yCB5QxT74LkMQPfz1biDVtTvJ5DpfAafVDBDnbE9zchyNCcUZZZtpm4dFmdrobWQtpMMw1",
  "key9": "2G53wArEFajD6prxAiirqVv6UoN8CBmhsgtYSvvbsdQQU4UfW6wtVahnkXoeSjsxu426gWPYU8uCiLmqBwQ6UMCd",
  "key10": "4UqijmrqJZ9RC1nPYS2gLjFa6La71T72gTEsLpTRY37dAG1hiaEmgg5fjwQscyDxid38RyGiqWD47PijSjedP7tn",
  "key11": "5M4sUBn3LxhbPjzfAL2jFm9bmmFuqZJBy9zH71EzBS8UfD1bGaYix8N4WktDiQTA6M63wPdVacXQ5TtVEtFd4VeX",
  "key12": "4XQUYvuFExjLPNJjq8m5j1AjDfov6gkX1VM2W3XvddGj3CaYNha95K5oPYxQA1dB1Kxs5RVzgJmTFP36Fihsnzkc",
  "key13": "2fM5ft1ueEYkFnKLia55WVFBcD775up3UZDgZWSdffyeKZ2PMcqt6KzVdGXTQWze3ULKQPTPuBMvENqs2WyKjXhZ",
  "key14": "Qr8Wi1uFUBK5K5gFoVLdh3vdVGRmavZnT5dfuMsbwfHiTRMXyNqm3vmujYXpHRMuf5jRPag2Nk88ZrXxgtaosWd",
  "key15": "3JmQmdek772kjE2LpE3z9m11SvUwj1z1mwegGi6S2WcKBbzGSJ73696V4U5hp8dwPE41qe135aq26qZQ1iRgXorQ",
  "key16": "oFJffFYC24qHbXNnGE8QBvSWNDG18WVVka5parcSWhCFHWXsCFeFdZQGgUq6nVeCZvKWDFwfDAdncixBa8wp3VM",
  "key17": "4urm3KkRsEHSBwiCg1N8bS7k2PCB7qjEEXxzyahUPMCpssyX6ND1EKQGsQdTuvT3YuMw6XJDH8gdPpZB9L1bCZqJ",
  "key18": "5TtzXJAgkxxKT4N3xEiFhvsxAyMa89EgAqgAwtyaLTsDQViJvsQQw4pMmXnYdwunw9K64i67SvoACLJ1tSpj2YJ4",
  "key19": "PvQ8u6p3aih7xBfVgvMDEkGjTRkZPFN8GrTC1jrqV2v2rP6EWAEdY84rfqDrdzn4zNfBG1rdJHucCK4wvTjmL33",
  "key20": "22UviCmNncbxeZtAftWuyW6LA7QdtfrTyQFJPEfGxKfYeiEGQjiMbkKKHGtSzW9e1ezmzSb2ByKAhYfB9iXzRSA5",
  "key21": "2nZurS6AUZDZQ1vAzr7XBhcQ7WYGkHSEQcLkEQz89ifUq1F5P18wunF19X4pjWb9fFyEG9D1L1oqBSsd4kGpvV7M",
  "key22": "3ZXqCLWUpfniDNhU5w2ezyfoD5QBnr4Cq5dsgLG75vwHy9p21hAaixzQmt75vKtBWe8ZFM3BVpGPxDg9kMHCYcPD",
  "key23": "53z9BDhYnYGnizpcKx4K8QkEPQ2NrtF9nDax9ZofjucwyGkfnoE3wk3KRWbKkbAe8Fb9WLP8B91Gx4sTns39iGiP",
  "key24": "2TY3qe1NpnBd1LhRESnkWbYZkvoUzYk1ga2uGoq45JW1ESGy7FvLscjUxenhByfZXZcFGNY2opL1heXBv4PFMt9Y",
  "key25": "5juCABxvvf5RYa1QCSqjjGYmKDEiEEnDEdCv6PKEKM9VZqVuuMiQoDzTLAs4W3Rg5s4JG3nQxoPb17X3TZ7LEMw",
  "key26": "3ndVt1GnMWcJziYU4os66dvji6Hbxr1RXiZr2YccmUaSpVCxQcrMXt67PW43v2TE2iKtm9KHBcYWUkxRrsVwDHLC",
  "key27": "3rky4oLxcRmpPPia2JMmcEJEQH6oaB9jvbV3h7Y4obfinsDA4YNtb3B81vhEWK88VUivPgFfw1LGHDZ26xGkesRx",
  "key28": "3vwsvmToNkHRXkNKSoohoqCALdXxKYbkvQextbw6i65do7DizgnV7icWA7v6B1f1uWZRDNAKjY3TmB987pHoVxtN",
  "key29": "4ehWuadKy3rYpPTSBbbDU7KB128jAAy9DQM7eu8PFDn5pVCoFbjkYvVrXpYNouBKAL7uQrSFFxffZN72BzXB2U4Z",
  "key30": "63MHrWtvM88MMzXuXwBNWRnPYzSZM4RSpxpcPa4xVfSVj4KGQJ6bFehsevB6BSAdU8UedGjwK9ZoQKJ9cC6jBoTK",
  "key31": "5sa6kLyN64RTNgdTaJ6ihaEWJ12FSiEUwy2yXdFsqJkDmJ5prHNoSGzqCokbHcBijdSD4Tdrn61sVNka7C3qh1iS",
  "key32": "2UDSnDAcGnrs7SDKD1Jr9GVDGcwS7y6aYQtAFuRa8P6ggtsdp13VbPq8GJVBNrwRCo4yxirn3oTy8vDGjGYx3GTp",
  "key33": "3CKBxUV6bYkynL4JKHLEu2gXviwg4PqRNGgDF15Wvk5yXup7svfnqWK1CcTy1y6LAQu1seWyKMQHn9VcYmaD5YG4",
  "key34": "5eZRu7iU6v4vGer5y8E1dAbBoriEYWpCnmKzD4r9z7S5t8HZkpUmx2rj2myz1m2ABpe5AdE2yT218yVdyzUQkPbx"
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
