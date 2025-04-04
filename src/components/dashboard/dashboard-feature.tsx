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
    "bQ8pwDzQX68bnsJg1ZRoBJNA6Cjt9jXzEX3LLuUd1vP7r7vfogifjHeMk4TcQhbeEhCM4kq3GGrTXSt4FKyT5zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DjMyEQLzvrGi4U5RyP5rXEYyMkwuQbGnvvTFtcobCVm8bKBqVygyYuCUttoUgYkzrcEwTSsDvYW7yiCbd6TWNxW",
  "key1": "NP4gTkoCuYnCwp8th3aTfg9UpdbRGhtENDb8i2CNejtngNCnXg4gCtsePf4rbzGisnSMprDYkMAtKFYTm14Fti7",
  "key2": "5ioTgv3YRjC8NGxbJGGE6kmpgt8X2r3UrSEtb6ni7Q3F5XJqvXp49HGYEo8YT7HGwMKjCkkvoPVBvHjDUf3a8rUr",
  "key3": "5eUZD4F7DFeFaJ8KJPX9Z2rKrTLNNu865GouCM8zepdtPruAkpFXDjSXwxLJnMqsHyGKbessc2DBd1u5Ni19T4ok",
  "key4": "rfuTGexHDDzS7t12V7iVLqG7GPGHKLumZ8BXmvii4h5pv6QqqsPaH4DVGp2GVguXtTqc2FM7fmEBQeC4oWupQTZ",
  "key5": "LQrrKtUs36iQphDZJQLZZpoRL9ymCdHX32vCYBXPbPwRzD91SoAaDof6dPbmZgz8ZURBrsXJXZo21sxMBAjDzi2",
  "key6": "B377QfXphFwKy68cPzL8ZHDh7i7jaRNDFHxMQL8gTXLtj1zSFMsYVcnY8QRSKtWoi9qgWoSCU2tf9WdKJNuPiHj",
  "key7": "5qX3m2FvhG9u76LwU1zPk1NLmjukE7G3wL9MzdjPiGm2adNHWQmoTwWuzjM44UmJHhiySpmzReRQmn5gocUFZHv7",
  "key8": "346tXofEbPUEQ5wPacuQR9GLjX5k9XhtG2HLqhupjaqqYqMoxJcNyjTuviqhbcChKx83ZTsqMbYqxSHgR5QEecs6",
  "key9": "43jVT2u5krCjNcSVhFC7gRjiiomNWDdgqzkVhPiAALzFEhnn5Zn1spbhZRjSHhELvFAy3kPpgJKEpBoVfB7EUkip",
  "key10": "LtfZtCH6cmwgfFmvSPbnqEbq4AnmZLEHDPzHQ8SdkjzxhPoJGP2vnq5yQSed7inxfdFomKccX488GmgMHHVL6dK",
  "key11": "23bngWFmiiuGj35xn5webcChS1spwToxozunre7SnDGBpNFKH5Hr4KTE9qeGPR4v87cxs1TrQBzjqxPWu29tbZbB",
  "key12": "2a9hv9JW9g7rLabeb71ZCXo9epYLcWb4BGoVG1pFZU9Kf4MpPmdX8maxevCc1pY6Ggp8gqCfoPEaMSjbsgCpn7ho",
  "key13": "DALcwZrH9ynhjVGUr72V5xm7BpH59HPqxT8aRXSjkQNEC5y2Z4yeGK9918Ly2DNYdTwbAMcw1tjHbcYDZKeoZJQ",
  "key14": "2aJnn2QehSBXyMErL1Fy4EAcSThMUVTEKEZr9ubCTUrY2RZgFtVZqJp7aTpdz39CfapuZYFvFEtKmKszPTegHG7R",
  "key15": "4w1Eno1AHbXRBNToteRtcYULq8AGZkyueSFBDffFgxwWm9sYiwS3u8GWo2cFhjM1mx57aWyxfoQEzabh2Qazbhz9",
  "key16": "33SBZk2LTnUwL3SwzF15RecgvJ2cZR4svzzDA387RwxaBzprKefPB43LYkgr5v8KF1DD7yvEAqJkeyXmj6t9DrXH",
  "key17": "4AUU5obFa6CowiQDT3o29baFErFrMD7jbJMdu1RSMc8vQRF5UfDbbkKd7MsNpDRBb35PaUboo43DbFf1sQvqgeTt",
  "key18": "GY2LwXq4DGND6Z93L1RefiSFd8GvPSmWdWDK5r8ZjMPmXjqJGWVqUoW7quQw5WJXYgDtpezyVdw21AKZynSEUfA",
  "key19": "4PxzHpV5j8kkpyfmKrUGJFebDybozNqjLtqdFR5fmFZG4JFri4AQqF7DKPX77KN6zHea5EQ73ppTRcV5waFbzzwb",
  "key20": "3imbcs14mt55jgipULMsC8jVmttCPwQyoR43hDCpfdknax3DwvAArchWbLjJeLZcNL78zFkEXwj8Y6uKpQqmJdTR",
  "key21": "59khazBeYoHn7qTZCm9wD1Z6WhyJkrt2QksziLyFAP4bi9staLAbPHrXQUZDqcHLd6kPakTvUXgNcLfsfGhe2SfL",
  "key22": "4nkNS8XKa4roYwgA8a1pfRLnc6NR8GyEbVmBCHi2NfqvgFwiDRVZuhMB6R2stovtuaLnChNzEEjvcfdtcHs5BHAY",
  "key23": "4SqpfGxaXVYnZeQbmxTrchvNQfkW1vbnL9rneuXjjPRYB6WURDmyQBTSLQD8sLbro8mKuAEtP3LcnD2miQKCHjyW",
  "key24": "62Hb4KCAgWr2rQxJnAMvTFPczs8ogQMbqZActjdmsEmtsVFW1VJ3FBDzmGDnCJtPMZGTpDvZxC6cD1i3iwmMjoRJ",
  "key25": "4aLSmRpYUxzCUQdNPoBewCQ3ZmQVaZFPWbTDXWZ1PM32RQdwLyDGp8XdjMkpqKfGMectE7LZdfXqeCBjWfQuxn3o",
  "key26": "4JgbpWAtjgFYdiXAkdHjYiDkzi4gD8LwxeQmjg9DDNtWLXDHJKLBtG5FNnvkJWidLPWCxJMA344kXHf1eu1Y8GwL",
  "key27": "3kXRcW5LBw9uk1D4tFqSwuWCPAhmDHwsPP1JHeRxpGvRitmfB1PweUr7teTztmtwLxHs5tzWE9tk5Y9CSWpJAK9c"
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
