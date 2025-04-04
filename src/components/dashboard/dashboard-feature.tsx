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
    "22YMvnvdmSRD2YRYYzUnsp23zmZ8sSfw4aS8PW9itKRFhPe1KnFDHKtG1Mt6ZjzdARCG5XJECtuKDuxeAeyAkSjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tAnCsUTUX3bvNAJxRHnZ74nJopTTCrhCu9s7ePH2YVCaYu8xjDdKJc64LRJ3g9zqm6AeBQ8FfJVk2Kxz6dMKdqo",
  "key1": "4UmLPY5uYRXqMkHQ2VcHhQ7z9ancGibGZKY2nFviYL92FEZ1dHHVw6PvFayD7C6LNmcmxDPLFDJQsfBv5VEtaWK1",
  "key2": "M1c3bJf5ctukqAx3hCUaLpLnVRB4JRnnfXBG7hUE3Nw1vsqKNwywEYavFPCCT1LogQMwEYxc9BEcBje1eJo9JHp",
  "key3": "5ohAfeWUADaWUJ2TadTNpV3ZPRRwRCLXT1ShoUK28myoKXq6Lpq1cVf3YvxMRdDZ9AoowFDUu67H16Nn9iDwLdcA",
  "key4": "rqE2z7ehW3dtsAd2E6hyLZcFJ7PDyk8X81HS3hyCzN7WSAaZNXXQKgsVe68FDBDziR8BCtSt4NrGKeUqHVjkXrt",
  "key5": "25hXy5eMMQpwBj9k613zCdVdBq4jL6C7diUdXM86bAQ22VQ8SpXEyx9PgCVArZLtnDjWoLfCABQNEDqc3PwnsCMj",
  "key6": "4pK6EjcYK6buGqZgrHDBgEfX3eXHm7GKLNYPeNX7aN7KUz6cKpAiSEYtABqd3H1GLLTk7jSwv8LTs4st8Q5Sgqnk",
  "key7": "BdFU84G291vGkA24hWbFxp4HeSfvLKu2aj8Ev6NJqRNDsu6nMbrZTkHaC5ucaZqA8RtEas6DmYyakbZoFuCvU9v",
  "key8": "4C1otMxgpMJVNEnRmFZGnY74AZMHY1yFPxtK3YtcxTyQfaZmCUxVrEvGoCp4CYE37j64mxmG8YxxxevbhR4fAKWN",
  "key9": "5dBB7LvFCMEkeDKSvVLVc74yd9K3bgXdvmQMiaYUyiCJDj1L7HNLKyS5yNvyjwezpBfgZXEnjvmd2BpegtUcbw3T",
  "key10": "4wVppP6ABRFmgpn1uY5T3EaJDPspvZH4KefYUwWhQM1EMBbqaWB9MTipqS6x2QbGxiYyWEXsRW2RHcrppZVcZY16",
  "key11": "3hzeBocU7ozgB7nzcqnjMp3bH6cxPESrV9h5ij4R6ZjddLcyMQMiCHQSzT6eAGFEZ8hu7FdagELCvkKfkVrKYbo2",
  "key12": "3gGg6sz9XqovBTB9kco7fwoGcgSAZK9bjHnxo8HWhZetMY2SawBcwDSER9HnN96LdRe9sJFbxG944rqbvMGAqgVG",
  "key13": "aRsu5fM7EiBAJgui7HpuV66ogHt19LBD5jus7ZzUejge3xPHdx1UR1to1z294cXjDvxwzJM8hSt2dwyF6qXWuZR",
  "key14": "52KCTJXFTodHahrHjkAiqLcNwwXgevufkxw8Fd1gkkK9kUkZhkyS5dByJJPyFnE3VphxWuSG8nsk9t5Ro3AUAmV9",
  "key15": "5qpdZpcAA3Jw91jpV9UFZUa3QGoWcRY15moCgi6XjJKwr3sKVx8CwYx6T7VyWXhdktSCkhoR6nDvtsdCQf3FXCcm",
  "key16": "3tWKQXwa7SnXA1QM7TK6TAB5gbwuYgNN751sEA39y6qpdK5TSEJ7e7np5qRZzYMD2GQTAUWZEKUupi4N7qh9bwxy",
  "key17": "2Po5S7n9nS48iakCF2iYatBS4kyEbwYV8jQkKnupcW9ZdfCGgX8LckYbkPw3nimbu7tx3Yn1xKXuBarSLv4wYh6D",
  "key18": "5igZBXpSVjMDgXgV36YXQTGsSs57Bu4BcyQBjjrFtY6gvQ5c5aNFL3gNNEt62prLkgSLy5WoBKrG7t4QJoYrhSgU",
  "key19": "2PqfJjGDGsbN4KkxdY98FVSzeumEKHxFRQ2GprFJd54QJFb6gFUfB2ryhax7TCUjZigt1zxp2ghZKbgjF6v2JZ2J",
  "key20": "4qNZogM6HEZnPGjovwcu5d9oQdbWTySvzfdUWf4QB1TqvUkHrPE4RqeYgwGd2ARzYanEZ7ipCj5xJLFiMy8okhiU",
  "key21": "5EnKBHFptmLdKNH6yfhPzTkGYQK18vAesY9qDDyeqZADMKKthQvMCottytoAZH1sbt98EP6aQu8yndsgnADvTiYe",
  "key22": "5Af1Z6ontuacYfTWd5doWTUBhgEk7PAYNXVMyUXogqWytc7okrv2KF2uDkK5yVsNfE8RfuoZ98bUFYNDqRFQbR5H",
  "key23": "mtCuKNqLD9pN64LF1kVhftpDk9YZXiGRkZPZHL5D2pUQHv83MUhvEnnzxJyCuXL7pVKh5ePkL6wbJumKs56Ew9i",
  "key24": "42r15U9LAT7ZPmRx33QB5UeakVcsN9gSyBSFoBEb1xTh7iL7KiP9xp9adnQhsYdzt7Qy3J6Aef7J1yLJ8Lzho7Xj",
  "key25": "2WGd9qxaWaM2eQrdZ8W63ZxjobemkddNjCD1NbREJs27G4RuQ8S3c3dR19dHY9ueoNmoh7XatF5vdTekqJ6e1hsW",
  "key26": "5XhuXYYhhaevZJUcLW2TTqFM5QCMvVZxynaTBV8gK7oHA9n1r7BNx8Q79NoHH7FcrPoHhXzYMP9q1GSL5d8FYwem",
  "key27": "4zKc8hesRfo6TUCj3ih8NcZzimuzTWHienwbqLxG9VktfyNtdSUp9zYx3YbRgRycNnCrCQTepCvwwQFFK2JGVdeR",
  "key28": "EDybmxGTs7PTtZKsRDThX62QLtSuGk9NnJXqbLNbmoNSkHNetvmRmmLPpMFayNK2bjL2u2qW8Pfn62fGWcccf2j",
  "key29": "4kc56sF7vcHxQGS7QKP4cVGwLD8Nk6r2VHJzEw53zHYuSKpudZ1TJrTxdpMzwDFPotYCB46wi5aBP3FUPNtpsg7X",
  "key30": "5RtQLBcwhepXfXyT11uMjKJVAmCBhaLhmbn6feDde4xXnc29DGFwJLWTVdBxKyKeeMS3zgknoWGYhr4rpqDHqbdn",
  "key31": "tssFSAd7ikUVEVRWwi37uJ974bW2ekTe6mBUsmNaEqr4LnxY5f9FFSJVq4j3bhiCVXV3eTiqFN41kJCpWxvt7cV",
  "key32": "4zHDvMYZd1VomVp1D6dLBvNTQLffZJuj4J69rf1muBf4CQFq9mEKYXDxoNEJWgFXBDGDWdnyWuuLcS7T4Rcho1KF"
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
