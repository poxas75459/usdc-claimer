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
    "2cpkNBEkkLq6z1F1nfr5vD45depbyPftiZiWcXWTbf6s9RsXBnCfPFqMA8Sqw6XvRAx93Tz6AQqxAzUvepid7wHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iiLTBUfnWtVS5VoWdQMu81ic5jJx4pLgNQaDWda33NtdTSNuMyn8iA5gwDjgkHyMw2an1nryPSAUx6HBTnwrn5g",
  "key1": "3RquDrXyEiGGfA6pY8GVepxDGtGJTvW2zsKDoqRYQ5DzL1fjuTGr9vHVV7zvAAfgCPs5WMckm1dZGhkGigj6hswT",
  "key2": "3PcN1wLVQmCkSU8GVLx5SABnpqSiXN1MNqyssvs4A3aaNjJHj38LXj91c7KdpVrZcsX3Gaha8Leg29yvnNeWWi6Q",
  "key3": "2Er352LicvbWZLUcmJ26DMm69k7v64Vu9E8z9GDfdCU1XeFZJzt6j1Guo7kQv46yWyY5PMY5aSTqk6pJuHh8gFvo",
  "key4": "29qPd3W4j6ZXu5pNsJCK13C9j9ReM6oKM1R1ZDQWb92ZKPHdbfkDKuEKVB7ofpW2koMTQFt1Vd1puUjKJBDK1nNu",
  "key5": "3RLWgUW4SZ13xGRMwqzaLHRbBC5rAweG1gY6oSCyK2TGx5PdLmscDpQjdWfBAvdgMKExa4wFeY2y8UvEq7b7f1Go",
  "key6": "3ruCnZv4GoX7iF8Ru2t94494qARGFTMHMradBBhLGFMM1GTNxUGzk5pR7RjNZQJVfHD1MSfc8F3z59BTDQvy99u5",
  "key7": "4RwiDEBhYX1HFd8a76RD6qLt8Eq1igH8B16tm1CGAGjeeVMk3WncG5vZDyJBjoH6wQdp8qzbTeUXimRps47Zq2E5",
  "key8": "2potMWNsDZNUkXwrbD3UvgZysvSXisAtFBBUrdbD6ndgr1tT6qTbYk1KvSGAug6ioY2qry5ash7pfdiiWN5H4BYe",
  "key9": "51wLF3Juxh2jdWJgcr3UqqKLgqbd8ijktvNgWtkLW5sSSzTLkgcKtAC3pfu7uBFsVtEUiK4dsozMT2xJVBGc9Pu5",
  "key10": "3PmaUL49Hp6oKRcxAR5SqrN3cDbTLaLFAnEEYQEzdcphQQta44mr5f4FHFsU4BQUEAeMZo5Sy3pCv3BtXP3ZuLEG",
  "key11": "2xoS6fZDZPGp251gd3NqHDtfGdRHyqCq1cpseU61JtaB8pa3zjytKSjq22BLF7tMYo4Mwi6yWzgXiWYGpiwPej8e",
  "key12": "5iHaWK6rqQxk7ASJ2btfnjmQfAC1wrujhRKkHAakwgNabqm1UvhMQaGuF5s41SUmwvRNz5m3WPEKFZcPd5ZECvx1",
  "key13": "hWaErBzKkGnVrWLyGnv8mxXRjtXL3VjGvYkLgoPfuyGPJP1MKQsoaiTjjtjBN3vW7uuHstoxLUTdHp2BRmySLnF",
  "key14": "2n9Dtm2FqgfgdWL3kPFcTtFnqnBxheFeNYV3p88w6S4Hpd2nJ8kY3FcQDjumDC17V1aSyYt1hqJGji53V4i9Lp4Z",
  "key15": "5pZZQ7DqXFKd7BRzrTD9DDmK1v8X6d6189xb2Eu363GpZhDPnZ4cks6vEpTbnV49kRkHaPQG1ccmurjvSXxM4vro",
  "key16": "5uAXb2C9V2PwHdxLYCHPXUteCupJm4GYEvdK1rCqwvbt2FkeCmDKvc36X1S5Q3SANWoPRsvLmBSfrrNLn6dubRzZ",
  "key17": "5sdkwJMpdcPSf7QxatBFtvV5rtW3YsmgJpBVzZyHLNydbhR2M5U4NrcJsvuHq61hLMKCf5vGrLSqDRfVEhuvy26o",
  "key18": "3GVHuQnBkAvnTw4B3kiJjYFNeW8ncn8WQnbzhaiB7Y3UtvedWwhMHgrerhUAZV5PMf7CrbkDHF2SsJPChCtKV36Y",
  "key19": "2jAa3io7vurkZ17X4E3Dwfzu8ceexnHHgRAj8BKA7K7jbZHwoFDdzFN26fz8t8z7edxKe7xSAARFfMZPHmBKfzMZ",
  "key20": "5sYe8t5RCnws17yLNrVj7QQVHPSi1wF6gFfQXujbxnE6tEzfrSPtP98RVfQiufec9HTJZ6V4p83fwpdsUAfnSGdQ",
  "key21": "2Pe7CxbzYB2ozvBDUdzbzBBUqcRPJ1eFbVDWxuDoCnE2xmaXXpJcbBPHY5Fn2ps9u4ahTrUc1vVuvx6e7apfRJmb",
  "key22": "2TRR37wpAkK9Ap3pgCSd3T5EMqsoM4PQCDQhEX9z8Z2hkn12gpSa6SbNTCwV7wZ3DiprtgGbUChiBBzWLyLwFZST",
  "key23": "2hiBapLs7Xgc4L4eU6QVDf1Mo41m53tgNWb1U994PdF8taRAzCfz1rGW4MZHywRqZE63CRrJ4BNQaagd75EwGnV4",
  "key24": "3CS9KxGja8fWveoTMBZfXj48kWEgSwT1jpfi86QoY7tcULe9YH7mTvDAmrKydzGLXNxMc2FVBFxaWCrXZftLQhMD",
  "key25": "4XU2z7LazBrsqNCRMw2iLuqoL3BZZPZ4RZAnxYzmPEN3zfG464mqWqXzynhkdJKbNWJzecYKUTXUZ1m9EGJPCh1H",
  "key26": "4gGQtBCVUA6FBYNXHb3atn7LRyGWSXcZdie7BAq8yEmbWw2cqkgZKSHoBeb6iVxVrgdmFq8iep9nSBRQbXWcjiu6",
  "key27": "5uHnuGZSigecvkoJxep1PBHuazd7y57RFyS9CBnw4P6mkajj6HYttR4kN8k3tgNxJo2qA9K87wodcSgWRfYkp2rA",
  "key28": "3fNsvXT2bwzshyHGZC8wt3SGWT7STDyNJABkEXePkXmsCvrHontKUwFMZdikWXdKVakUDUjWYLwv2WhzZsYkRqny",
  "key29": "3fjgay4Md77pH83V9ry6Md7j57Njf65Un3j3w7QqhSfa716V62rtSmWjayPceDyTRyb94gNU7f2VMD4aKeZZe9f9",
  "key30": "P4UnBDHhRpAYqEaJtqmmKUkSbt3kzHgxepxSD3Uo39QfM8k8GJqh1jVmK1Wnc29xXhfzqxCGgxFr6im3ACXrThy",
  "key31": "mVyLM5bh7iviZDXpGQj8c8mNUn77gKkqqcQcU2y6r6r6fkxrbLaYLW7oj8pu1NigcaGVw4UD48VnrH8RFwA1fPp",
  "key32": "4zgx7uFWe4f8QCpxUZYg4oBDJRZDs6FroCmwbm57ZerunzDZNT3tenhohAWarVj8f2q2shwPTwPyTcR8KnKKhr9j",
  "key33": "4JagVFiDdSoEBvcFHbjzMpnoaL1D2Q9kvejXgdrjxpJZtJMwGu6YPac2MRZLBGQmHYZNrziRPAEAGmQKm1wLfajQ",
  "key34": "5RupMcjxgdMNqKExLnAX4fXGH72JCBf2YxN8Xsxqrybt5o15FYRAcSENUFwNcYH5GM76inj62nK9zYpfHaTJ7MDJ",
  "key35": "ZpHa4zJbSJVpri9zuudrtFiCRhVwuL6mNJVL3RoUB4752dntjVaAV15AhoaFechHmqoKdePdppQshigin95FC2E",
  "key36": "2ZgH6fnEH2cgVBtKWgnkjoQWgkMHoa8Rv7D12VJigPGma2G7wijwbiPiF2YXxQdTHR5ZGQtN3uab6FEPLJysftHY"
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
