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
    "3LG5aZZM9TL4g6AxtqjuZnUsbTGSyeUxGGiq5jjYLnXAf72AfqLoLY86M3TfHoiMCx5v51oB4Fa4JHPVcB6pcgWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22vGKM8QHTXwfwdevHmMvAGbX2eyugMH3ixFMouBduZ6RG8kgAF3ASSLnkhf3t86wKJmn64BAL8nJxqiH3LfsP1s",
  "key1": "662okdJQS1sfSJqR3oFH4LeEu2wUDJzfsYK4HErNzEf8pAy8nxKHLnZqqxbt9iH9qSePeLTxWXmmFnrkcpoqYBPp",
  "key2": "bYH5jwB72dbHvaBUUMqeqHhjb12aGhwZKaeRpYTU9QdideJ6Ht6c7Uf74uZHRexv49LPxWfVDFiK1qR6yEQQr7P",
  "key3": "2y2FrkbJ7XASyikJAkfhJz2yLWxpgxirTPjHLxE7vKkhAabcegsC7USumBe7njhjjtJ12L3A8GhteCKXoXkPjgNb",
  "key4": "66bWLH4VJHHx2qtCco9kN7GKriniaAg6YXPv74LNw4hwPiRPHLEUbMmdja1esZkfyfjQUrMVBFYno182JhxExALL",
  "key5": "4i4k8Ep46WRzxkzLZFoWmTuc5Y9YqC5LLhzYDEdd9XPCBDy9iv49Fgzdy9wjz1Kx9qDjCjDYHHef7HJaiSgsxeh8",
  "key6": "2SNKMxo3rBfQ7SzjvmJMrXHC8aWSEDF9A8uUVfajjAxvPXrFLdNqsDYh1gAG8h2UmHZNmWfFrUEhn5UDSYzgRJaf",
  "key7": "231f6eM7avAy9WN1mVCfyDkvmQFee8MwGJN9EVgpWqiNLbCFDznmzucQFRTHJevV77inYo3CocxfX6A3Z5ZVio4c",
  "key8": "4YhcaxaTERdp5VjD5U9dcyUfk6QXEWGVW1fBTYUMh5FDaoZ4LqBJYdMYSCqUBPxxFxFDCa5DqygzL2wLkRT5XNTi",
  "key9": "gfi6qBxJh2eyqgx8r81xi7eXcLucydwsrai8XQjSPc1rYecS7CCkDNTNf84pnrNZpU9toqKzQMBLFVPdCmj89wk",
  "key10": "598m4RyiGSGkkYgtJ1Tdu4oo8WitudPLAfUAXegwYTdryKtfhY8QfbyESaRZLZk9hS1v39UGBkDB1isETWfe7rn9",
  "key11": "4cb1sweF7komwpmmMZr9Ezj7XaPHGdk25D7tn1hLJu6ig5YcAkaBS9dWRBGD34PSh55cX8gFAHpau4CziW451P9m",
  "key12": "2dZsEbPtCtnNkpY8oQKaPQTzYUwA48e2TqVCLqb62tyHVVEpCwVMJYV8nDZi9YaqCx98iRBTHXXnQP2WjsuSdku8",
  "key13": "4mXSrPuQwzw8swFroF27oDP7z8jTXFsoyLw4LUDyjxpJUHwMxfNSrY15NEzBvsGGs2vZgUXRKtYWJsdE8izPLpaA",
  "key14": "2v8zG7pkciYYXvHo79tow3Zf2pF1ixh7vPjDgwScofEjjrMN2fv1ptTHKPLKB7VHkSvi9uCK3FPkamu5tjbw6aZW",
  "key15": "2JdMQPGQvbEMYDZWKYoFBER8YyPLJMcBnaXsmrH5JzrXeBsEibaWWJ1Zgq7bSNHTqPRBeJf6JzA4HWsZfvNyY13G",
  "key16": "3Ck6qBxPL2PnLX7tKxvmnXHMpWB6u3hghcQi5SeDMcQfkTDq2DZCyB4A7hJHpDJojmW37vXcaxxBWbzCYaYLZcTt",
  "key17": "JHfmNrw9spM8YrLishGVQAx3Wt5vSi5dMRc7CzPaN5JyqY12dp6r6PiTu8kyU7pLpnNk7Vt8SwLfabyHrddgQCZ",
  "key18": "29SeZoHdHxSPACBA4isT9pFTLKGaebhe7Pg7daEdgEzy6MjiJWMatCZLPTSc2VtNzWicx7NvyJY665aCpwDGVchE",
  "key19": "PvVofGjZEEJhDgPDEF5fAgBz1eUUTaDqvCmQDFTXgmCLy5pUwryCCGXdNNJLicV35hy4q5zPw723UMHg1F1GveV",
  "key20": "4xDFax9iiWHFSugswF7J93zfacn8pKxp7fCSZDnuUXwAFae5RMmyzvxhFxkpnKdbHYhRJSUUjRo2xXaXTs8BTwTB",
  "key21": "5tSWqFeBSvcyWc6XkE7NaL3uEtzpiYLXFMSLKYw7Taqn9usmQ84GNtVSRppd5sbx6gHCEShoh63H9dRTAmjKwDbx",
  "key22": "2PVARDKSJaRrzrSEKhNcWLNPQDqUzSSjd9sTP5VnRd2dVtQVtDh8pPiEeQPyqAenRNUHrUpFXTuHEPgPA3EUe7nG",
  "key23": "5Raw5JNXitQLog1vJcYXQCR6v6SiSb14cQYdpa8eCXXmsv2on4NK1vwKUKdJ9dB31jHUzFSP3YPkoW4cJGWcEgKG",
  "key24": "347LNRKNMjUADSEVP62CcGCAYRVzCTnhuqRFYbGswyuAWud9Z9F6Nwg1Wh9BnowZMwNaVbb66Z1neW9pJEzpqJze",
  "key25": "3VWyoB7eawHkzwnSYUCxgjxo4MPpFe3QiLsmr9ppqZMdwnqpaXUEx2rXxibKNHGgbE394GbZhLqSBe1B2riMXDhM"
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
