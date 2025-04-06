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
    "66MfufmHaHozPfsDuKiBAxRxsRs2SjVSYAiV8DkcnUdzBrfhnRvJw3jjStEnenfFMSywxJ4VBmmWZDDU2wkWgQEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LHkEbU5X63RbWHBs7P5U4L8tk7ikRpKi32d9WLm1ELZKgCQn4TKQt6zmkjRG2jKvQvF48czEYoJoLNHeiUWy4pC",
  "key1": "9iTJNc5tnMXUZuhLsCtyF1akWw7TxFap7LBEs5tvPGbVyUcWcUpzbrnDWKekqvnjNzCB85k6LqEmcyYZYFdhhdw",
  "key2": "4c5AdRR7PicL8DFympoxViYvhWoDB2FDL1Q9h3uyg6jyL96RJV9jHqVvTzDapke3pJmrCPtQyfUmXDsaa7ZrNRsk",
  "key3": "47BRoYNkHLdsh8wbWHoNUxK72Zmkz7ymFVkES5Z6AaUbdYZXrY1wyttF7TLRtuUzW4oGq4vAqcQa8JDu9vqgoMzd",
  "key4": "41jonQTGuRLrdRdHW3XHh3rhguE6hHD75eUEfAMvfiMp7SxG9Ku6r99WPctZhFQ7Fz1NR69yFeZWQD3UVvUgEsjz",
  "key5": "439DP7fZFv3hvwbL7fnya8kqTzo8yrXK2GYCUXN3PGkuTh4Ne3JLyogYxksVnERujDFUyuMaXPLSA3kNxh7EvgMh",
  "key6": "5ftgcZQF5EpFvGYCwCvRP2bFZndckyXH9Gm5iQH4eujn5GRgZvaXZF3gXykBeDGiq7DhqbuV2a8Dfh8Ps5mjUz4p",
  "key7": "36kHwPtYFTpuiLLt9AuxQs3CZZM5rNqsQdcBqFucaThRbkWj5GL4Jqg6T4wSKMghmBufSMwLaPV1Jxwe2NSNAivA",
  "key8": "4bHvMkA79HHFjKgnKz6CYXrBdTY27JBinKQxa4EqHN51kpmVmPy7J5HtvD9n3U6VDh7FnvX9jf4HBgLcnh8tv55g",
  "key9": "5NWixjyxFA7HBnzbfVxxV5pRdgdZJVyhEohRFrzdFmedeE8Wy68p8tpsXNyuMGDALH82TdtSi9EJxjc1LehPNpoR",
  "key10": "5CMhEZM9Uhcrfme8V7U23XDv593NhTYKrkTydupqMidDrHiWtikwksahfDufSaw6wmDPAGkdKMf5tS84Aw8hyNDb",
  "key11": "5SZAFKtczuNXULhFB5hsDW6CobDiQYJftp4DgGHMpEZ7VdStvV9ejFitg8AGd9g4xTd1pBjZx4MYATMoj3En8Weq",
  "key12": "2iMPJnUYqp9z5Hd84gDdK6Fmho5oEfsz2BsaXrigjkEXcs5mdbjdYjpMZuHNSskoqkCY7NoW3k2gWNnAiBd3o1cf",
  "key13": "2Gn4spmm3b65YkHT3PfGvDMqjQrZyPd6wHUbkDiqp9eJeZZt2GNV9T3nuX4CS5tj3S1jy4ktP7RqqBWAoL8e3st",
  "key14": "4UsU49xri2JkAGUK6a7vkaeZoggExoC9NVxxQFB53YifgMitPTD5JuUHu3vDKaPpfKjZfPPH4hp6uMkoX3yKXJx",
  "key15": "51gh65XcnXHmz58cY9ymqfZcq63q8uGVCq3FWNMYc43De9Bhe3KAe23QE5cdhaCMdyvyeL8P9q7CZ6fSvkSumM4w",
  "key16": "3wgLztDqkUUuRczkgD2U4RpYvXJamp3HnMkJbNS9b7gg5niuDZNHM1zqXenQP9DmA5ZfqoYHhAkPGdq5Pb53bgTe",
  "key17": "5AjEqYnufym332WmhCvYSNM4UMKxnYnV6TmMzjZ4wajuTZ4vTeJ7QNst85kVeAy2U66veSDuSesAuKx3xAY2hoxQ",
  "key18": "411xDaATzsmMK5WZsZkWNutqyiWfWJgy2AVdobAdMgezkcmEHyX6AWGa6V8QK8v2278aJafZtfjG9E64sWJsyqrm",
  "key19": "3KSGHwE6NbNnTXeBX2WwA1G6xCjySSGGrsuFt7zXQaHXk9V8FjZGXopfuTYg6y7qMdih4DrTttf2N1ABo3MSCvf6",
  "key20": "4TDq1qxQmmK1nL2qv1aBpm5vUaZkGW93BzbFjmNaHsQoJ96dkvk4RMAWBg8MXPbbj2HvyexVhnEXHxD1AGp4u3mT",
  "key21": "SEdjvchoC31gWdLCGuoKAtjbUixiJf524F1nZTx7sQRXNVE74FYyAJk3AXXZoRmDT26J3p2RQ3e3S7N2YGbsREi",
  "key22": "4R6tKiqEpW4SDRMtDztksYQBc3MYHyq2FHhbmCahJeUpdoHtGYMbeRsyCcYxE9PJdCMxVwScrBduGUHW22NtZKjD",
  "key23": "4np6YLies9HqUMX3qeRF4BztMrHQK9wVZHn3VrfJRZe3zNKSWeLna8jwEgw6BvYEZ34z8j1ct99NWrBCp5vAzodh",
  "key24": "3BGWVNT6XKUALnRKKABHgF6hWZ7cAvLo3LjjH1TKZZMtN96UuLn4WAXLc5r5nPtPphEhbRvEBKtuBUedDyZVs5Hv"
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
