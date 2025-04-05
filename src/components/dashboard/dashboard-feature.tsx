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
    "5Bcz6AAQTMAquwMCFKCX9CMog4Lf9ZXBH2eLXVTcPxNoUygrzS78waUjxQzuK4Kopec5Cv3NCgDT84ygvye4GN4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xGZauMNSmeppLcq2t2Djk6PMu7MFRWrKNRcCp6Hi5UVEk1gs4a3UyLMgnVPEB2xHoJYzjk5dKtrd3KFUNyTcTF5",
  "key1": "2Q9nNtHaseVrWGwjphAQfe7WxbK83KAsx2FSryADLTDxFdGiiP34WAZq1EEMN2UsKhGewaTai4ozdWnuVXtKrdGp",
  "key2": "2by4FWznyurfT31Spn7oeJsYJMNttrFjUvTHnioxPHAtR2bpnqShgb66cD37u8EsFfEV6w2FTzdwB2Kce4LkEqrs",
  "key3": "TrkRksy4RCv5Uh8FqR6uFuRuKLa1ghCpHp5mMiiXDqpWHXLsF1yzqYVG5edisozEWt5bQkdJDgALk51aYngZK9U",
  "key4": "3of9iumgNzBMH5AcF5X7FTkjak1c3QAyp98fV5eHFm54aAVaET2y35WVtMYEE5yShYp8J1vNgoR9CK1iBG2sQ5nP",
  "key5": "5KAAeecnYmEp8kPSAbSWM3fKoExG9qrac1JkxjbKZcqPBxPa9wKCJ8zt2R2GyZoMY9kNTBo4qkEBPCAZRqP52SDX",
  "key6": "amKueuhfAGk7rXw6LnwQXK3NHzbKAVHjMwMFWHFyDLArwCmXVEQTYMecuA8Njmyyi4yuMErczwnyNeDWN5aXaBy",
  "key7": "56efvq4AwGgoxfsJEZvPrxsrWMwGdBQGLGtbAyJvJPsdmiQ47gzjTd2AW4iv86157AQueSiGMRA9kBa9LHx6gpoD",
  "key8": "3GJnGj2UZ6n9ZdVZ1LqZAcyuGbcfc5CiY53jxSffHfCBMWg7yazg5WRA4BLmiGi7bDcD8KdjcUHamsn9tM5ZkUyJ",
  "key9": "2t8Pw5SGgkFUNWJB332rV7o1ef8ffEEMsUyYsDb3xqayU5XbytGPVBM7BPc1yfdZCvoXGqcMnwVNZKJeUVmxFg6A",
  "key10": "4Yn7WNai9JeR2r9W2s6tSDBZhGztD7duAz3TCdFewPRqs9iLqDbussKJnr6rtbkCoEv87ukyt1nWC7UfMETPx38a",
  "key11": "wXY2iuiK6zwtcUyQLiE1dvuPvwfs9M8hhbcriSU7BNC7AwzC1jy81o6CgTJma64P2zbdRh5Lr57gYMBJCDfoNgT",
  "key12": "56DSaRzSv6mkqYZpFWa73Bwd7EhcCLF6tTzk6wxJMpabyZ7VXpHGCGpf9nARFz4RhK3NyyFarkZqqkk6EondGEdy",
  "key13": "2pVx28sAGHgnPqALguze45bjzKHwc5UdFXpEBytds7UUNpk9pY6DgMHjqEkUbnpgvcysqg8hRQMFRY7cyhTFG3Yw",
  "key14": "4eXv3sJ2U8CKKGBjCKkQ9CZyJ7ZbvttF4AJmSXxUMZJbe7iW8vx4XXRAfXdUThaB5GTuH5YxWkxi55zorkWEJb1y",
  "key15": "6wzaPZ6AdVYJSPGXjP8g76YvP2A69yYVBNY3gNhW1HrBb2fsaYS5nVhwQRSaPcGPT1EyvQNSJPPXLAxPZKp2UQP",
  "key16": "5RpmY5G9dUqyaNScxuNtUp7kc9HCXPx6KAAyoBb5iNy5yYn9UQbNPsmU3HuSPNR7LBBVtBFVUKwf6ytiM41Zkn1m",
  "key17": "5LKP3zRgive3rLHDFY9jVQDhbcDCYU7kKVmA1bDYd7hHxjv4CSLhfVHEn1K1fdGUw7i9BE39JQ446dvvGHDkGRKL",
  "key18": "64e3XPaZfgwfRY36Gc572BUUqwL6XoF5oA11bgxGyZEPANhWdinXQz5vj39nqKW6e36bbhF8FkNReUQL1tqqcieg",
  "key19": "3wcN9X145iebxV48ErckBTHCSo3KoeW3s96ztYT13TYYq5i8WK8YnL3VE59n8YMBeVoaMV1pGxkYNmyPNj17gUQr",
  "key20": "bUzNnyZvkDWbsxtRLbyMrYfQ47psFwakdFbyPJdR8RGM52C7E1MmS5DREyTJ34eAo9BHo7hAsTH8Htb2M5W9qVN",
  "key21": "N1MARJcJ4phrinfY7eNu2dJwVCcfywuQsSGC5PZeif8aDBzb8rcz3hRi9SSFwE8og6oFY1H1JZYGftQUgbyuZ3L",
  "key22": "21QFescg3cAj2RvnkwyUczK1JSdgjFNnrjT1g7p8mPmrXqn2MFc79wKwR8wCj6fLSVC5Se3MJrYGAenQGAPAWWoS",
  "key23": "3SMXyYQvGc3R75xCtdNpcHfkuKwN5oDxJyREnnsjpoeig1BSnF1Noeuz1reknvQPCombJrp6Eu5ekatGWHz7PJJh",
  "key24": "2xSMRueyckcGEMK1YgySH1QH8SYDHScehVoK5BDSuZWeYj6wCwNkbWpBdxzvrrEP6Ymzc4KfEBuvtQBkdpUgJSTU",
  "key25": "2VJ7pbi2vW3fD9NKLTfCV2t6rEMvfL3t2di37pspgjcaBJDjwXXoRFRrf3n3oy3RqG2AgouwGaUWoCGvXHbU9C9B",
  "key26": "621pz5hEokVXoFKQTbRuMZMVz3CDW26uYmbQV7beH2tzAWLVL8NaYBMjcdrr1X9nBLFDuvyLbpnN8A4c7a2oRtCh"
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
