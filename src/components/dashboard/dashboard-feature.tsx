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
    "4tv3PEHk3a3zNWyUxEEbMJL4ffe7EMqi1CBbYobbLriLLSxQKtZcPj9g6F5SsHkLRp8SPTwAfCnGc7NduaQkzLW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zh3Tyy7HDpq3yFnrJJXwN8bDGMsduhaoGv3ZuJWhjp4abNPLUH859gUMYRhR5zZfaZ2AmGSBjJaWgEeQ8eoUeUN",
  "key1": "56uCxECeCZzo7z277TDDVq4m2Z4apAj9CHkSCVdNwZ7Hw9MofjYSZf5MEL7Bf8g6d2KAvpFT8LCpL7Lh3jpcetnA",
  "key2": "3rqidb6V2hA5V1oheozT8gYyndEap56oQaGMqK7Lsj2H5q8QXSSMgn3uEsFU2r6cCYT91gWex2dQGHqq1ZLAoMC8",
  "key3": "3k6pS1JC6TR5RFXEnfUGsyFm3ApfcLWBhaYYvZzLFTzf1GDj8e5S91gZLwVPSmohSyDbHyC73RyuEgZCw7JUhn49",
  "key4": "Bi5VsUYBiqdbWjQc3ZD9Nw2tcmWU6rmCHmSuWDEBu9ToVNhRZ8FMMBqdGPZFoecbPusm1gEWB8av6rm1yKrU9BQ",
  "key5": "3r3RXWpFyZ3rnZsRdfrNBYhzs5KGoRFVLKLia5QHkGvjPmKqbUFDDnyHMbrWddgHuXWtj7rzGQWwztXN3vr6eMyC",
  "key6": "26G4D1zyFC681WWY4XaJGqztwPjT4LdAn1n1RCXsEH14KYxb64pfbjGqK2JCuhVDi4mUZgZYETT1WhM4sTvv6bDc",
  "key7": "5nRCbnamJHw7X2gaq8pwUfLaQrGHuLRwjz2bNGYmVrZ5CoDk6XJn5mgEq2qnLVvfSUgr6R3vCh8ZNHjammCN6fsn",
  "key8": "2BKvr9ZPKh6CVVq8Jw8yRkq7RJfYU1mgBRdJWzrJqCX4yPWRXrE69t7ooPgU8T5JreX8gtHu5kj77kbtXzB3zmmz",
  "key9": "4dqY5jf2KC9q3VNRHNZkuYhg367yPy636ApjKQTCtT6WZK8fkPy5W9ahqby83B9ZLX2DoYe1rbW8fGB91wdA4DDy",
  "key10": "3fpTBrSXCT9XAzuDVSrzWJVP8xRjJH4B4A6naginG49jTiFJKvGACi2W5HQVCsJJaytWPJjt2XMHoH8m2JKfpEkd",
  "key11": "2wqGWiv3tK37VyB9orgdYgoBbqP35eZm7azQiEnepApEYEfTsjvSwe2ZZ8GfCDtUhgfAwsdUkVx6BVkr65uqZK9k",
  "key12": "4TT5pBehNqpLb9rS8tmb5Nq1mLAe8rjgi6GArFmUG9QogmFrEDxofSVmGZt6BFJ9BDVKfyYS6KUUC2qKtoW3rUo9",
  "key13": "oLGNWxQ2KMg2URRBrsBEtPKNr9gLTX4oQem9C6Sjk3Hpoz4RJuX85CJGVN4FXgb6ziq2TMiAKdLn7Ar5oKbw84e",
  "key14": "5AkzHHNQvVLoTdR1bXRzmj3BaqfHrnUZhyFnNPhctGkXrPbLf6NnAofqGRdEsF7jmXYkTocjr1PMLNMrBnMXhX2N",
  "key15": "udCUwikvXKsTnwvt8aB39tBtCzfrDAWkp54wpkxbHckWzQejHhKn5GEJqjM4q9YwzForxw6nhow31W3xPH56VZK",
  "key16": "2GQttVEzojxaxTpd2s1ayaofmSAb8CukNP2cQFBFmrLvtSr2kqY2NMs48vZWjXt3S1EWNNJBcQ5xtLtKeB1d2Pcc",
  "key17": "5wDwGcYzt79bPNmTjrxZL9wDQyE8hMHWX4gTdhPxbmyw97vVx7hZ8JvqNJv9DAXe8xnME5ASH5aMsPzdAnLrYaSj",
  "key18": "3cxcuF3kRRgN5KxEyBJWTNUizLSUFFbnMHjjLs7juuXou4qaW5Bz4frLnAT6184TqdcmSTy3WVQ5nqFQy6EuJo4Y",
  "key19": "314qc7fPrq2CDAhaAVPUYyCMuoM6JiWTaSJSwsHvdPmMjzjNDt52h1R73VcbFF9jVt3HmvhK6v2cRLMWFTG1WCu",
  "key20": "aV5YNU1GxLMGUmZn74DqSPErxZtQi5ZimMaTfcKHvxUfkfL3HUYLL88GZ2e46LDyEZuBUz2sAgUxef3TnNz4Jiu",
  "key21": "4JihmEb1FgD7jfxx2fwksBp4QVomz5n4jyx1ePBwwEfphHPY3tRrwZT2NN6DW6w89vfthK63oxsKMvCo68BuWQgo",
  "key22": "645nqjPcanJcYkFE3VrHpNHU6nHbq9USfck2hvuggKWNFw3bJPTjHZ4f23BZrrwF9MNmveJn1XFBpjPTpVavNhd1",
  "key23": "61pNVbvtnNc1v5HWj4qWvbHkxSrd8tc8AMGSZf6wQ4onz2QrPnuagfUq7EPJsFs1M2gJmus94gwyWK7DHhJMCAxD",
  "key24": "nN6rcm6MooZp1ZMVEVByNWXMjZHoHD4pZK3KqvaZpQKErMmwbxxKByKmnjH5FkpQ9mtCZERDdLTQ4PGBgPFkGpi",
  "key25": "57YA3r5joMLafePNmaem66KWMAACU252CKDZ8g8TLKJRDqHAUaLiqT42wRGgvBcHXd14TGpXT7qFB8sYMjCugyGo",
  "key26": "2xetjm1AYn8kMqrrudkRKvmwQX6F4Wd2kpsY4rKanMzvLUAqrtPmE6b8VSX5vc7eYEz48Gbz6eKLLAJ4xW6FLSyp",
  "key27": "5d33io4dY4SBZUNshTJNTXeRcy14ABP2xPyTSKgAEuhHZq5ZRpLEveGGKz1is7PKaKcHoSt2aPhPFZgQW595YGNL",
  "key28": "8JE8KEsddwqNsqoKZtf3iuGWMyZqcx7ZDFmTYRLF2dw6pZCPhX3JKMfQy8u4Btf43ridUzz8KDNAZcDC6KWBU8y",
  "key29": "5AWA6YaP8xwpVeXSoXNSPhjYcJF6e9HeHoWgv7aFrmbepJ9QpUXReJNeRzwhHJLjTqe1ixffDZacpothkE9bPUbf",
  "key30": "5g47beYxx8im5BDwrA2XveVVj7B1Ef1Ciuk8jNuhtwnq8UJYbTZdFBfY9U2pABafy7gh4k7ZBMi6rPvjCozb6mtE",
  "key31": "4jMa32M7YYaffdCUg2ZBFwaXZm7bL1nhAN3Xv38pJ3Ur7iyqyyFdjCipv8qWSjCsjQbSmr17xcd689cBtctQCkGX"
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
