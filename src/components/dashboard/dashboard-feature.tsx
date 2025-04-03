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
    "4D5tbwbTsi2kkb4Msth9cPDYVz5ahYXFskHVavjF6zUYg7McPdJcVy4R4WgxWAhLk1BoKsgWN2cfdL5LRPgbbLLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEnpbMHWgHCEaGQdnvXx6ArV1xUrUD1XjnkGJEyxnodD1W3nxmAzQ9RziUJdg2METCxMvF3N87mWWjsw6jwum1D",
  "key1": "3PJaEaqdRZV2iKXhxbkMKyLQ67a6DnFPXvNgoraFhCtn9a28PFJk4ZNMUnweDczKWaYdKGY9reV88vnEu9ZvxbDZ",
  "key2": "55Fy5KBp4q7iurgZJiUPSduxGSmf7XjWE9YXW1sL9F7p4yopX3C32wf4knQ2VmgFHxLaEsCc3CLsr6mK8CbXMYhv",
  "key3": "2a7iiDKV9kWyhFwBUy9LmTBQBR4yor6Y5NUk5Z6ZrQxHDC9Ei547SeTGp9TM3DMhcCREbL6JDM6Go1wHpLtNUUQ2",
  "key4": "4oCkvqiVYtaymwRWh2qsYsDUEDHgEeQJoje5mLUB9NGXwKruL546GBSt9UhucCmWLr6zmqhDA3QrqCFzcZe8MK7s",
  "key5": "2ffFGJAhii2Bs78AhE9adF8PXXqtqbY7VUTxEwcgpEANcc7rCx9uraW86L8GyNRrgafvY4T9iNySDv8H7cGDjfij",
  "key6": "4vbBub1FXYU3BaecSFKXaFFkpRR4Gg7AEhrnyED3c6KaFbHg586rFHACxG9qQHaLwk1KqYmqhNcfzayXcEveEbNJ",
  "key7": "5VbESGcDYicsMv9WnW7Jy3DvZpgQ1T8VXcdibXEeuy7hBuwpx7wEov45hc4ru88ksAAEfg2eY2Lw1nW1JmXFLM1V",
  "key8": "4kj5vD8kPqb8bqDe25G9j1rWHwYiHJrXSWmjiCbCFdFD3YUFNVn9QFF5XBsjjiXpi985LoYEPGDotEjHW8B3ykC2",
  "key9": "3uktdKCHCFrjdP5xyJDT3nUtA7faLtTR6CZvQgbE5GtyjKGf1VSdQmdtwSyra2k5QDXEXKbzPwhenBK8U8UFRUpW",
  "key10": "3kZKadYsiowZaSsZxBn49tUMdE5RjsXSsd2ZEm83UvC4etLcSyZ82cjH6ixBfHyAWnFb26Y4J7ta9LwcSBtaHPic",
  "key11": "4nCBRBTxjvZLg56in2h4TTkjJ5mA9iqGnBYw4moprrAL8p4qbyyYiQVSvvGQj6LeZQZk9bLyHGjcjGzX9YTNUpkS",
  "key12": "3dj2a5BW7fmv8bo5GSmNeSi5PHQj3oRbYt7vSJw3a5VURDb4prntjbiUb8Zpv8QeafyvM95tmFhX955h9bCLNhWo",
  "key13": "4Sk4yngYXuWUHs19kqarLheef3hEMDU1oXgQCqBs7UUWGqqm84FHXGsUTYiVhaQ4CdRCJVJoBCkULvWj7e5S33yk",
  "key14": "678QYDBxZ8R44PAQoLPfRpiRJQZnne1qr34FUGyZGvKr5GWGgxQvwuC1KGJKvuczZwD7dHzdUSVi6LUqfHkT37UE",
  "key15": "47EdrpFjyFWDRdaWHqZ6KT6uUFzsYvHgMJPXsJTZB4AQm1t2SkvDAWxoVDEGW6EFiocbTdwSsiRhYBnBhzCmDBQC",
  "key16": "GFsTeUHrbjKB9Z5kbXz7xheLPP27ieUuTQf3ouHzHppqmHdgojfdiNqoSMK3tLvc8Zmhs1g69Z4sa4su5WokgzZ",
  "key17": "41GUvqLFFhDVRD34ub1CEbHyT2guUiGYyo9GDmNNuJL8hSS383362KgTCEXApoWh7vfCjJWqFNDCNxaok1RPVB6x",
  "key18": "449NftZo3dQux4sJbAtPsT5znawwSECFbHsE2HFtby5mbMasy8cVZgLAAm54Fnug8cPFxCjvBwDFJhCc584vzsec",
  "key19": "2QChEazTGJ1Wn3nu1HZJwGUX7Bw4DfeyGWMwf7LF4BZqiFyqj6S8dMvvoSAvNPq2mE7ojcXmbAjSTPeYfeADMVkq",
  "key20": "66nH46W7ZRfnyWDMqbxrmXvDUwN5pKumTqowYNjZcG9SFUFdydQo1szDwLEtPoPCneaDG7Tp93k82x9UgdW2nLsH",
  "key21": "4eRmcCS7sGRYeg47zHXryk5oi2Y8bR2LYuPv6K6Q9QsoukmR1LqCCMnfv1YARZm6KSb8U8ADg8sXQTTGtyiv2aGo",
  "key22": "27qD3k3rYHmD49tfMGNbjQFqyEBXgeFncBVS4fjAGQ8C5xunBu2ZYZ4EgDrBDHFyJTfxvLmxgEQK59DBoNcYDiuW",
  "key23": "hCnawz32UVECEk41cx2M4DhJ5C3efj3MLjQKHnkT9xvspJgBYb7599FrBeRUXxJiLuyqiPAZxhtsSRJhXPgMeVf",
  "key24": "5nhB11CWjphByYXACgWnqjfF2Hzsm7hQiEn7AhYyCoqRZntA45EcP8kEppLeWgFon1rZrHoMnaB3kQjCjrjM1UUP",
  "key25": "2Hv5WLh9b7yjA9msZsqzZ5cY6NMC7nxNinkLGpvPK4A4RY6WGAA1HsdBxPgYBYmNBMHdjsJJ7gnubDfxVYkaPhWo",
  "key26": "2VdoePMXhcLFnKmstAMA5SAQGwFCMfw1RnWdYrNfzJWd1nKHUvtTNoHAVDFdHMfsUSUcVMZVogqLrGuKvum1Vo4V"
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
