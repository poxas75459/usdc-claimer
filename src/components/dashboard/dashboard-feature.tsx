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
    "4juCAVtfiEKECjHzRGyKQNxRqjqp36q2Pj7yyRVfwBr4n2Eou48T5b8Mcz38CN7GMWYavAreJ5F1JzLgoB93CUYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "338yjz8SuJyr5U8z3nZpHxh69zWpM8aiBEZQt5d8CKfM6pM7oGnLLwW6Nfcrsx77RLHxrhp7YKBSdEX4BKi4okEt",
  "key1": "3B5PmMrghFQ8BMUc3uBGYpjEkxtajnwAHFwfqmsBZeTgwkLcjMF5KKoWgV7joMGvBZdUoGGFSwm5zMiX9KCRgPtz",
  "key2": "2bsUZPfuPXMistYWUJEQgZYxEYyNTtBjbBpLf45S4F6CmhmQhDztCZ7exmv1uPQxD343Bu3rk97S98DS42TK1yx9",
  "key3": "4dGDL49wjMCnzp2LkTnJkWhgw1JyiFCYXZJFMWSnNsJPdpj6yi9TrLRcnHyrfejHZRD23rdz9UPWudev5VAgyd6K",
  "key4": "caoHgqTtXw89n9aUPKVZk8emX8sAeAupU5pJ4CYLxDA6n3K6PL97eKJ9FcEdoLgBTgmgQTXfKGELZPJDoqhsYPm",
  "key5": "4dvEaJsFqMJW1NxSvvCPmRR77kxD9vMUQ68cwHps3HuLHkYjHX3XiSS8xZ9sGnK59kk9z9KGvjZRuVwUFPYz2iGt",
  "key6": "2iNti9Di2FBqXvTDbHbAsVQF29EcQyMrfeRtu74JA3gD9T4XyNwZLJ2ejMZVmEw8cWJaQZKCsdBL8v4QSGFXkWDi",
  "key7": "4v1RaAQoW4bMXFhtzRnhBLJTRoeST95Znhwm9D4rskK9zU3rhqCXZCszFDr4Jv6YHJZR5TjoFBJvyzRE8y1fAs1K",
  "key8": "5yUicgnfAWdNtE61XDhoVV2demYD2xS5iBwwQaghRwfCqg3WsNGgUS6DEmewh1FUpMtP5tRVZAwFQE7b6uJiXFpN",
  "key9": "4ywFHFeFJS1tfd8Ypc4Gn6duzNDy5oBHmWv1bKDCp1jPZnjMQqZCanEFHsyn1cjzL1ZtgEA4F1a4nr9sWqGCLWWu",
  "key10": "4udaiK668P53gNQDvmE9pzmj1mBGeqCLHWXsUXa2LNMgvvzYupv4XnWeN2t5atJ2udhB4f9KD5dfoWaxiyqBTkZM",
  "key11": "5ZD8GiXKoV7ST1GzBUBbREPk173kXqzvaHfEjAbHpKpHHAARZTrd5Mhf4Wuir1LdEr1YGfxWyPBwRzNxqJfiv9a2",
  "key12": "2cTvjSjGjQ7Sfac29E4ZCpUT4fQ1fYUpmp3Re4j9PUhWLEkcPPLzHSU3bYGPtnhZgWua39RkmX9jFhDTVKBvDm1C",
  "key13": "3fz3NHB77pEq82MeC1EWGUcodVebRAidXhvWk8spqRcNvtPZvx16yzXRCXos7G4PhMDxqwGyQKfZmtL3Vb1ZkWCJ",
  "key14": "TRgs6M3zpzyUjUPA89yhAKbujum38itn5BgoaSu9BsoNaZQPeKbvdKLgj4Mx1W7dzzduoo4pdDeC4TBJhnuobUy",
  "key15": "4bKNLBfFNCx1sPj7RhXQQZzpq55Xra1SxegYzYStTVUwJZaZxpb8419vLsAzLtpJTYnLy4Uv4K7kR2X2qPjvoRbF",
  "key16": "2D4rkzWBjALVNd6F8jZ8P4WdeTQr3TrhAzQeHHkB26GAvXx8oNnnzhkVgqpJgR3ctCB6j5tn67x8nLGs842gXB2L",
  "key17": "3ED22VLiwefJMtGcooRsEzwFmbw521afaHKkVH7w7VGYtLroKk8sFgQEDpvAjBit5yREBqdCSdtwENadu27EdHpF",
  "key18": "9LhXCoMYwmCSW6T1WScoFZjzbtfLTvet9Kmc8pTZxwRCshmULxh7r6kos5dyCnJy97DSnwxVatweDNBvzezCF9L",
  "key19": "3BHMekasZ4T1TDXRBgeKrJLC4sU7gohKTKq1ZZf5FfrC7iQK2tB8FsH7vXcEs4fBNB1dBeEDaXtTBkE7THEyqE8R",
  "key20": "2zbekw1rVYfV6renuWmoe9MKXiHnujFTTCE6KLRb9abv5WLgcc6MmRXbpPKof4bDq1kGe4an4M3JD61W2AWqvcV5",
  "key21": "2BHQPFeW7bWmS9zXuptsdauXrYrXha68L2kvtTmfjpBJPVpPCKzi7ib7j2kBJZjr36mf311tCv9TXbLAhVfVir3R",
  "key22": "3M47knCMSKcJS8XWRQurWvfxEBxYwuw7U7sUe3FAgjQyfxiVe6hGX5nZyJ4WM7FydMp3GjB4RQB6hwkVuz8nzZ5S",
  "key23": "4fYePpTtCkGA9q863Au9BS57K8jxWMpZnudpUUdcwQWRLEqRZF9FmWancFwztHwCTjye42oaeC11SGiE6i7ETk9e",
  "key24": "2PLZuF7wjFcRCV5Lx12ryfPfiFiTayUicD6m5Lr6ukiRPApEqqvyW4ynF1x1hXicFYbJrKsZh4eG3suigKVgeTBv",
  "key25": "2oYwCaZaU8ydcXzyq3kpZYEtS2BDFMV1a3jmZCe8deBpHrLKFBsHEYf8DDSYUFm2jCX8C6dE1MkrsPj7r743yd3U",
  "key26": "2u8YCDKhwz8CnrT1pz2iQ9nUsfq9de6rgiP2wTbHZ8GYqUyTAj5h4LFmZyuxiR1vUFA6JCcpgPmSAoeEDEfPkmfk",
  "key27": "JNbHHTYCdxsEhpnyyQHZ2CvCe7dpdQ6vJ6bf5XzHCTXAMCgxdk3zRPNtKARuPVcsGo2aP2vbWskrQ8xuaLPYNLt",
  "key28": "5aHmysJv9PgQNyx6u7DGPMGhJ21UZi2YMnrVf8fw4gjT8p72DWcoyxDy7m1DvAtHjCTq85FrxgodbrQnMRo5wYtJ",
  "key29": "5pzKoj9jX9FgHScCKNaKXSKtmkQveyyzPvZRuFwNBdQ1dn9vuqJMhLEFTiiH4rEMwK5ntcABbwAnbL8zNp1VfB8o",
  "key30": "57SLUZZvhUfwwVzyZ9KXPJBZdRuMQXKtRXUsFkdFSYNiJMKntHSv9K8Xmpmng9Nxu3dnKbpxcVNJBic3AijYrqJW",
  "key31": "3BRz9ByaAKj5UL2Ked8QRSwfrqX7hBBcmmX3YTm2ZRG4CzJPadz1xg33QbdYEztjche4YM7ANmnny97d9MYWEiNJ",
  "key32": "5yDNmuAgVpMx5bszDiknxGKybU2NmBctjezJsomWPhVKFnrN6CxfXYra9FM22AGddeJkp82Vx2HKVP9DzEEyE23g",
  "key33": "4rPAS5hJSmreRfTzqDKPbKaVQzYQfsVd7aSPeD7YVKUUAMfG6XdtXbYrp7jxhNSVzEV7Ld6udqjWigrpqQ2xps6j",
  "key34": "5NoaWiQVvJesqHT2xbgtkRjARA4BTBqLZGNJ7tddpLgu3Z5ixgchXAbhzC6fnBZEQ9FQx7HfDK8T6vgJVqcUUfik",
  "key35": "3KxXzEygweUsydwgZNMeCgo5qjCtoVPvLYQyyqfzMpntgUoYXJzeUUBmD163bm2i7PYwJYLGeBbdyBKojAf7SSAN",
  "key36": "4VKusxfYSxAis9w6bLcPa4LZhd9ZBJ39aR6YLQUuPiy2HuBQur6ihZC4s5UADeDz2FFMduKdyp2Ss3oD4rqSHo5P",
  "key37": "3cbEeSBDDytVYYEQQDBPqd8eAksVGSAbjuzC21hWo93FjkpvGCvpnwEH1VMXaSmPFKak7EoJLPzWUtfPKfCdLPSJ",
  "key38": "3EjZzzN8Zap4eZT5T9xEbtCe4z1u9nx4KjjSZ5cWLhx7qbJUspNtBJmVqXoUyzTDLSmrD3t6ww87WmvFddHg3JJH",
  "key39": "2vWB69MwoaEmuw9pPjNPe6iYgG67C9eCk56yzoWemkmZkK5gejmnjWkKLxnDBQ4RVMZwmkNXPR8Ga8GiU2NFmYF4",
  "key40": "5TTdZGGnYEAorNqEdAncxULALNtYHK6D5JhrJQKcgsbL2bcusUbbgP1aRKUo8F63SFz61LJg3pETVm5SbziyznbJ",
  "key41": "5AQmY5vNP1qEwPZtRDEXLh3wsRwgpfXzHXWcvj4LzhH8sjf4o9bjeja3cQ4Evjf6NoXWJS9uERYP5YhpYFbADi7x",
  "key42": "517tXybkQfNRD93shwdLt2hwRXpg5WBAq8VipZeAherZU9RmX5LpkQWYXQbsWQ7jHnb383wLwwnVb8wWZ8hnhL1D"
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
