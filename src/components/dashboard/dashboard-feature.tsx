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
    "3nsZ4nAxd7satLSMQd2Dj629xfGmNXMrY3UesaLMxH9TWXtWRVHf87ymm1cjqNTsggRenchj9hfxX7k69Ba3gqKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vSQrNKWjsHStkhCaqwQFBj1e4KCfqKmBv5tK3h4Tniue1u5fa3Z7FH4mzBDdiS1LX5dXodjCnH8KqCG5QKx7j4",
  "key1": "3qGcvaTjLGKQDfMjweKQGK3N7Q3PqsupzRfcDKemSi262hHueotfxwmh85SmYirN1C1jkeq4t4fKwmZaK52o7C7g",
  "key2": "27jB5jeSt8VRQMnJfFAqEhfCjTTfbNZRpsoj2AKfqVBuhfCTjycZm2k5aMYjteELnsr4u63ZHMnXCvoTAa6jVK2P",
  "key3": "4i8A2wvDqwHengWbezAMPKt68Hy9G2z5YMwxFw2Bo6MKpYxc6Bff3tYRMVtx3r1zEJd9fJGooiBke4aRN49gfMT3",
  "key4": "2cCKT71vNwcGoxzCC1i56o6adMKYcy2YLfXzeCLLzkvn61C8n2aRdgvoJfMVKvi9KyDYkNP8U9Be9Ju6tHYMPNcW",
  "key5": "4X5sje6hj559qUqY5vE1cUKFSaWNsNnSWsCibmrzakfPk4aiEaeCPKpkuHee2R94YLujabeQJsuTkM8ck43JnzGv",
  "key6": "4S2mQy8RbgftqNpm3tGBYXMwfxr9SeFTbNaCr5cfD4YRNnbWaYn4NDN89ReNJTz8LZVhwq1PsqszPmb1BvLaRJna",
  "key7": "3pjXRRy5EDb953k7NAyyHcHh67WjA4faFxxjPQj3xw9B1GnRH155VkXbQrsnZfMjtUsSUPGktzdz2fvKR5W5BAZf",
  "key8": "AE34pFTRLkMQnH1VDk43Zv4tFBecsJV8WfFrv4dmCtziw8CZvFQ25gtz7bbMKG2ZTnCYmeJG5iuohLJ67oD9MfH",
  "key9": "2drXchdC6eGjm58tr23PB5jVMbtX89STwQM8F8JrVNhmTf4QmkQYCFwpYyPAWqng1dBzo6XAkaZkapYuqsRtafyf",
  "key10": "3tERuy1eVAdbmKU53tni9JszPXWfjRzJQHxoSrAdqTrqdyxmhgV1FCeftWhTycBvthWTa9VskpHaoqWqWuRNqY7P",
  "key11": "5dSn1vWRDanDfqB52EYM8N3QMNuyH1Drv7aA3XqWJLxjTEc4iVLsDCP3zaMWXfw2gtmm53DZDkc91QXojkFe5u34",
  "key12": "5Uu7FJGPYVoxVsMF9deCmdiPbAnoRKvv5sTNig5p6pkXgfc9rEq71ccpMPaNw53MBatAe1RbxRDBKEKtTAZUmQUX",
  "key13": "25FyLaZMYSKDtZ5mvCpiyijMjvLtVWBPWzuTNYtHdCsDyzqa3m1pTFkeCdLVZ6nCeR2YNAz1RUsYemyopAEpKJKj",
  "key14": "2qWHHofheABBRWHo5bUZQPXFLk9y32om2DdS5PudhC4arXuqeEGXaTtDRUWcWhP2zwwtuVvFDAYExXRMjzX8C6KZ",
  "key15": "3sd5dcjGhsFLDHdHXnXHW25B9dSd2wuu7N5JgnxGcV5dDMnBdtrpsBXbnr2177tGnMMaTWqDyn1MHajpWpFobzba",
  "key16": "4nomxdnD7WHuQdc3feZCJSk7S1z7D7yUFRqb6pK4i7JA3PXbTzf5oNW1tdPwZ9ZSZH1CL6zRyWy9k9PfPCTtjtD2",
  "key17": "219AWbYHDiymAW31SQLQhaRkrtTDJWFpdBH2Rz3c7MuZ5cnNRs6kzvw6mmJkYiFg482SrtCTb7Lt9mqhj3WpuPgB",
  "key18": "4mEGaQ9wnBj8U3W9wyjpU2vGQ9yBconQrrrUbp6k2ZHJHomwm2EbsiaWRE6V5L5fjqTdU2JUuHM8CDBy9g2DiBcZ",
  "key19": "UrniR6V1zdcpdPtDJ93BBF2YZqxnZ21rjKABcNQACxp5CgwVyauEn2eMDJ6o3t1LkZC88rdNtKQsSsrmZEQWd7m",
  "key20": "5SaQuhAncz7eqfr1FF9ASmZR9UWKLCfbeC8qwJ77t7qRNoQ6AVYAApQWC2CCvPdjdmkqC3CyqihBEcR8rzr7YjhN",
  "key21": "27Hqr2acjMoBYyW8ERL39JF4HmgBJ4nBmqKEwqtzYX7BNi3PXBXE7a3fRfbd18ZnjkeqYs1nKNyp4ng9Z2XUL46C",
  "key22": "cZNtCuyATebvdoXQUqmbxkJQTg3nxuHdCcWF29RBE42P1sqgB2iYD9KevXD4W9S2AVW4YGH1KAYy7S5EaoH4JZm",
  "key23": "62gPicrEyELN85ujW2VVtzEX63TAGm2UeCtVpzKCZzD9qR4d2VM7EzLQCafeeHpQHRG3koqjnVG95sJPDYxr63dQ",
  "key24": "4RqTFe8qhfHXwWPXH6EUS13zueQuEJDeVD4mQp9Gqeqr6uFmkHPzFr4ui8dGV6M41E3fkFN9ZJhCPkmMx3M9EbL1",
  "key25": "57h62VQZxAqwPxGcDnjXnZCDSnJLji5JK7M4SWs2vUXYtdU583x4V1diqSK66hubaR3SjKnvATUfWjJ7sQQCW49e",
  "key26": "5SyS212MKJncjPNWYBp7p1uA1MWWLNkGsshC2svdiaCTQGxBFSUJeZFYnwdARbtEujCF4yEDyjcrhWmz1BAHbbuC",
  "key27": "5fyxJBDdYFDu3jCQcM3rWC3q9f36qHyqfoRTvP34giT5c2LjCzQE4rv7cN2S77NEYEgsqHHXDUPVGoDvzoWaggkY"
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
