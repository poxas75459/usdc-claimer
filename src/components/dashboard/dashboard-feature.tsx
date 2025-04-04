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
    "3sBFoamWMKVb4CkPxcKfrtuu9unyYFio2LUHM4ndSRmQxqeHzgWCSm5wJvvatLymWbQNPTyUqWbL36DGSaH9wcYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMJ9Efiqk6VxN3wJYj4NvpvABmj73g59Me8VpG9eFPKFYFSbizWVoCPHDTyJJjik8GXKmbekoq2C8vdA1CNg2yi",
  "key1": "5zejRXVym1pyMrXim7RfRgTU7yaNWUrXhtyDP7K3jiZRSrDqNHoubUbxjgTcJdpgX5ZvB1GKgGd2n3ik9chPDEqB",
  "key2": "2wAEEnjK9Jhbm7PdLzuKNY8M57PvHz1bK1GP4hS92YXbW4nLBtnsYP8sa1qcdoM3BUPp6PNTCcaQEjLZ62kNfRkx",
  "key3": "51WXPmZAKorY8sWvYDtLAwEZu8sATMXz3A3XZmNKjkFbputF7rUsjb2BdKddKdK8YUtgrbGevvtg8ZCNNeVapsr3",
  "key4": "wAdQFLtgPZhVuH4wFw27D4QDfQaqRBJ4urCzDx7EtaTEjQETW8AhsE3Z2c1y7Huk2nBGCpcUtew3ZFXw9p4sZ8T",
  "key5": "3wAuRZP7mbtqEx4336vHqkHNy46C2DNJzcua3hVY3M9QzvWEBEKuNkwDzoG9jjuhbpDVS1h61oEpccGzm5wJEiEX",
  "key6": "buzzoDsyv3Jqv7LXdwZQWd71Ndjwm4wPL2Ai9fEDEWkVDQxdTbQEgzNfcsnKqjaLYuoat2QpY4D3tHEZE61b2iR",
  "key7": "5q8cTELfZjfrguDCctT7S5NFQrKrqkdj2pqDnX6FYt3Y9UDztKRdF9dKYmk39D7oteYFutF9tA4kw2Huo5oJWmwb",
  "key8": "4rAHxkyt1FMzHiYCXkqC73g46DbVq8w3JFgKBbvsYXqhj6XZd1ZiNZ9b7S3eaYP2ujBBwp2mhZnA4mGBuoqTmbSH",
  "key9": "5FUqkyXuYbzg2bxdHKcxHVzBHGWLggQ8L6nrhLz3ez2RTEfarX7UGtbLP2nzvXmXkGvmSS7YHYVr2qWqCLHHdR3z",
  "key10": "53ajgbD4Kw1sZPMwPL36EXesWRYd58Hm2TC5jF3CjNGckAaJi1arPAb7oTZtVWEzM2Q5teaR1g8Q2BTTCtYWoc13",
  "key11": "2rNgBtRGrXWNguVmxiGLxqARq5jZhowSWBYtFfTGzprsC9F4863fAcpGaFkegyKEe77vqW9NS1XCPHyk9j5qDaTm",
  "key12": "3CA5yfnfY92V97WuuqFFymJc2Yduzu6GNDfkPeyuHTrifiy5VTckXx9re2sriKybkvMF7XP2isvSc3Z16VMQUdQ6",
  "key13": "3ep5wcJ6E9XSLhvvKiQ6YkEkBuwRzMXxeLEEaJQejebsrqNUHb5hvNZ8xgbzWGdUNUgEFLq7aoqUpH8CoXQUuVEW",
  "key14": "5C5nKsStaT6BYzUh6Ua9ev6zwYg4ErXN7NZyJimusXrTz3jTTSM1dXBxyYBeboyEDathdmvC4AwtSb3bencqsvRr",
  "key15": "uipWyVqH4vPZ6GJCMtYpxiiNhVyRMdAihFnCHcvgqrjUx9eWmaYMX72yTzCsbZUVpC4droBZKZTJKLENTpYDk9E",
  "key16": "3PqunVhwstUDz9z4Aogxd6Fgec7kxNe1PPwAKpNtN7sgGaCYnPiS3e4qQJEHBmR2ckiiysBAmpadRePoFGwkkWUU",
  "key17": "2WbX76XmyoVeCL9yGY3v5YRCom1RfezNVmZUXBQvDRqnPQhW7fgMp2rn4jCQuSvdPnZGNZ4PMz7T6iTvPYuPJr4",
  "key18": "2HCe1APTocKXZLVC5NomhUzsomrPzNeY1k8uawxm7Ub8cUVTfbNkFvMJJCP5eH6BfQqH5AMfYVjajYnCM76Nwcd6",
  "key19": "5AZY7Mp2YG7hLpdrYxPTZy4ogHuiELARMQE6b5HHuTjveQEGMphTmkzYVeem1B9cfVDsAPVojKa6FYnQM2WtpfpS",
  "key20": "4GUv5hCgLAWFUfLWCUBaAHg7Rxznwhr18KSobEseuY3Xu9Aw9ccqcRDdiuFnFFc9FUR6kS3Gtu6qqWJsWFXdJ5SX",
  "key21": "jArpXrYVXMCBDWbCnvcPBiBg5cUP4e5Aio5aMpXZjYjX5NJ9DffsKzR4Ux3YhpQttc9iqviAFG9Vi9T3cPkV6c7",
  "key22": "3NUbscAibwx6G7HGNLZU6GUeRo2Ru7F21jaZKneoj5L4GfSHZgXrTFeEsuYbkxaSRpzj4WtwXU4zDaEwLSCumXbh",
  "key23": "4DaiqEjMcADoqRTdcNAoY7bz1Q6tsSLRnevcrSfaZGHG3eJVN5p7e1gAMvnvY1wfUmBjyt8Stm22Cr3jBqmjMc6p",
  "key24": "47aBYVQx7xChx33xcEYVXfKz4f4nD14phUqWXD1epdCRu2srcuHPB3ZJmKgPoZciGfomVoY5hDJH9njAFT857Kdh"
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
