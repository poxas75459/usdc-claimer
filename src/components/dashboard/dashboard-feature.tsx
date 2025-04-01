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
    "dktvFwiK4xYu5CC25aegBk7uhZjKz3SuLgDFa3Tuh6m7Pi1sPrd96SYAv9NcVcMM2a5APTKpgFpMxiXquan6Ej4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47jomdggoH8y5khjW62vPXa6vkCNy6x14UYwaZG16K26qSFisMDtbLbGTXbxaQXb4aVkuW8pXjPSXGchLiBcWaPH",
  "key1": "jXSCmCF1d2h1AhMYfi3a1VJ8Aozf5F1hDCHRMt3hzxhqy5zp1jCfqoSJ4iAPUUXuVNB8JLHn34E2SFvmszbx5c8",
  "key2": "5oXsQdGNMj417ENKNuYfwS9trctuLVpM4NbXr6s5A1pYv25GPWZ8XC8v12qyGEwm8bZjYSvy257PsCFXp9b3xAw9",
  "key3": "2WjJcobYUNAzwcyopvgS9oXW1DebhFWgVVhShJRX91QqkzwoJ33ThB1iRsKGJ6nNDdkZ5vm9E2q7PDZL4xcifdCb",
  "key4": "541yxMx5BWHuBNm7FmgyC8sFwXmbmJC4R2PGTXjqEkdVxod6qhKnrSU7b4f9HRvR6GcP4SACwCsXJ7hZ45kJL3LE",
  "key5": "4yaTVHrU6XrBtqNAviXhLyBvdgFV9vhLknoGpHqK5mv3a1tH3Nv2wVxFNuRrBJzDP2hETR6BNdMN89FwR33ua3Rb",
  "key6": "3yRPXV1bnE4gxaXwL1fP8eiF6yTdp8y9ipgtUeHXbtJfDPkT5nJKtfQPwsduMaXALy9pzy59EYtHYjjBm7sZr3DF",
  "key7": "3f3bdcZo9YBUsMwpumWHWjcHADBnameCYnMDRQf7ATieG2tzQJmU3jifbpRX29VLnCLvV2kHud9GeV9CUHeTKr5A",
  "key8": "R1vcSUU5131HEWULkkwCdKSHRfbJyFhpq4586gfwWfsXkDitSu9pz1LcRvfoDpTuJGz743orhwoEzABR3i2ukWs",
  "key9": "gxuA7mQ1qbu233bwhAHgmt6EZHbW9Ctckry2fLkLrCEPNmgbRXmEwrePvfSzEypuiXf5n9vCFapcDKjcu5yZANW",
  "key10": "2auzUhwWvou22NZDhgtMVQz2L88wpMWhojTUrKXG6PGFt4hbtFVfBJ8gpoGDaE91c8oGMVtkL1W4ZHMquVVfpv9V",
  "key11": "3hvUv7n7JBcYJv5ZPvXZ6nSYDVkb8isEqETKwHo7paBnqjxA7MJLiyh2GoZfHXxnLs88JiEG1zhHUViiQpo6PsDU",
  "key12": "4j1Cyi9RDcxePTyfgWC2kon9NBh9wu8yJY4U33uU76GEUwXU4Pv8vZSJzgAPVhExuect3MAymQHDdpC4FEzNxe32",
  "key13": "3NTZiQgDc4HCUDZo8J5X3PGdadC6r8BU7GL1TWW7sigdJtZwUvTrgAsBgfsBV3AYWGtpfqUiGP5RfCXufTpn7AEh",
  "key14": "3zDA27vQkgMuo1FZLKnMEETLbgkeUhnarJVAmshXd7ySeVVqWsY9JTWwd5xexzxFeLK7zojaTVMQQfMQMzBNk1Q9",
  "key15": "5wKHt6Q1xNLVCWURfg5xR4auVUVRBa8txv6yLrsDfjpGJ2fwfF7ZxR4nPvSNJd2QFFzLWjhzFC7aJqs7LtXR3pSK",
  "key16": "3ESKRvbjZgEThDkXUupdYYTM3he2xykbXHah5cThW9wNUxsTpwwAtDNwuai1URNA8fgBq1kshCmkp8YZ8RmiQJAT",
  "key17": "5qXwXv4FGap4rpUArxjjzA9zYRUj4muYwNVmjD9x3FxqjYsv9WqZBfDpBD9LQBrnZGdsg1KACBRuSjkZeqD1m1hZ",
  "key18": "3zzYHgQCJrYrRm2xYEunCxxejhdZJ9nkNPYQqudrPiTRvRBR1PAUwRdpeufRafsCLMVY4aiJZb8iEE6Y3ZNdVrRF",
  "key19": "2zWj58E6xckHCL8oFGVRUJeHro7B3EGmhx1tQUvrU4JgWmzxUZKmUuFhbtRp7SGbjdqD4kgHmPRLT9yoxRBfVUz6",
  "key20": "3F3QXH4AEtsGquFVDoERVRoUaq7JaRUr2AfoWJY65JnkfDXKmyLaX9naQEt4bxKJxMM2zFXUUe5jz27f6S5kL98H",
  "key21": "3jW2Ah97qaBwHUsjwr8EJE8AvysW3ub2nzk8NTimttUKMBtq6Y5Xh4EaK2vPfD5jshC2HoM466kJbup4wvqSmAhV",
  "key22": "3TaecXzxcGSu7cJL54daMQ7zR1mZNoP5VhKnqock7yop2XWZUd5pbnaMwAJNUBtXDo4RDMAU3zuuMd4rUXia4Mbh",
  "key23": "na8VPE2UaKAS6NmXyZYdpSnTp6VdBYJAGVnyYLJJRLnN4jkE9Mg9Bhn9S7RAr32VxbsCoTMQvaaXZ9rLVhgvFkz",
  "key24": "3edAq8k3bg4TDfrdCe2u321NfYgDu762gE8yDznxGVBnR6oExFAyvF6VY7hinYc6JzXZBFZSkdLZHtSN7b6j9q7q",
  "key25": "56qztofLr5xeS2e2YWjThkMmNskFXFtZ33erP5W9NZpbtKqPVaavii2LT7EiGkt28a4f2ZeE9fdGgdUaz1TopkSZ",
  "key26": "2kvBCHR8MK5Eetp4P8vs9f2tdqJX1TiUhmSMLX4xhbB2qojUr4MMkRptoYkKybTDmrDn9XT8oEqRbArwwgrNix8q",
  "key27": "4CfgmHcVYs1SzFqXjgN3UrCM73VRaujXbsjJM3nK5SRw1chH2ASXq98z73gU62FVnejZ3isqfr66UCrbxtZkx8HD",
  "key28": "3uxMTXbV5MKPXuL25eaFJ5uniM7EAKDX4FjiQhrKw8NfjuoxdVknYXDbUpETmkBduoMLEakFAT88S1VKHGhPRzSX",
  "key29": "3wxZ4zVvJMM5BZUtEpuM8n9Y5ipxTzZzPstEWcc8uuPooT4SnEsyFzJfjDJscyMgGsruDBBbcP1DpcWq1hph12qF",
  "key30": "3NaasDh3AEShKMv4U7FRbFytZZyCNKaprCxhUZG7cRLLVpsNpXYnZwG7Y2Rb7erkgjuN3L6mtJYLChgXQfKWHTK5",
  "key31": "Hg22zSQnVqFyFfECEBA9q5mB2jtQqXM98LERCGK8PRGDQJPCneJiw1Ri3eggtAsEbSACoe1F5mFbtLPjJ1Ue7ki",
  "key32": "2EZxaEKKFoGgH2yLdJnNZxiiRgeSdhXS7trDoaUu4sPp2tCh8ZBoybELJiht7YC55q2fFgk5azDGzMqxSWqV7DT2",
  "key33": "48ixqtPjUkdMDoRDeA4NjkG1zDRpidSDDxEH1CzieabHFeMq1hXpWTmZWkVWW4XuQqDsMEV4FdvFwF3HBBnGojsX",
  "key34": "3Pa9w8mv756opJLYP7KetAKZ6GbmmqL8Hj7o4yFbEY5DtizBmXpECSMVhj16yy7MDpBp5cjcYcKmjGnQwGXcq2w6",
  "key35": "5z5n4Xe3ZJVor22eFSnBxNPJrxdU6n24Gk9VknjrUQZcTyPfYrG52WZ2H7PaihC9FtJTvnbUNgsQVSupdvu2fwZ1",
  "key36": "25pwcHAKDaxLVJbuiNi5LG9cZrREQiFmGStYFDxzqS2cVSoJ4xw9ABTtEXYL6zEQXiQBADown9BWNmGgppYdRSYS",
  "key37": "2DenjJt67GkavWiRoaPSTFugTdXcKimg6HxVab6B2aT565vwgTZgFukBbLMjZXYrYEZh5egPHJ3jT5ibuTMRsa4e",
  "key38": "452Up8g2gtsdeLwb7odmJVs2jhxTdyKgdSb1gmEejL3LMYzyq1Cah13b3drAp4ftpqWVDRQwfjHgFYoPjTc3TKmM",
  "key39": "3Ud9tidUGKSyTH3AEXTWArwLqktmHb4LCA6WFxRwKik3r8qQ4ibhD9zF8z5yvpbYbKmK6NSVdjm7JYmaKaXEEv5k"
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
