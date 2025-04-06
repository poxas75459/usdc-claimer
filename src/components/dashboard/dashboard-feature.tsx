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
    "3wV1xsCgCsX4zaHTTJ8WbCxsbkZHdwu3ANdC1PaiEdw42ZtQWe2yeM8PVzrPTYt9QKhiwgJEMymMztgXdQoKkQJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L9znKwxXVyNVivgT2qH1kJTqyWq8UHuV7Fs5Qp6hhomqfintFdMc3iWUCrAc8dZJRKh3sRH8NsHoDswAzYFCe1h",
  "key1": "2Ydt7hJ8meNQR2UVvfdiNzkVzUifLPUdkumTnjLDqEpzMooswhmsERPe2rBWBqBihfPURsaLmGHBHM42jnEhmKqk",
  "key2": "2kor4zNmfaQsLLXT3nm9ELXN92aeFffEKVNdB9nmJhArEU5TrTJMc9jQiaHnXpRxorfStuGZGSjKZrWjjKg75HvC",
  "key3": "4rKCuD3mRnFtqxRDA1sjtgWxCXKqSbXcE4A3Rt5foYP6GbxbwUWivwatCzUBdg6GSihM3yT98MhZZsg8tXXRQh6x",
  "key4": "4wzhUdYCaAaq3oAkvqezQLU5Y8DU5Np23KpyUc8hf7xHH43dDPiK2YkRyRTuW43KidYxzEHJxG1qexJ6L94rXLqs",
  "key5": "3AgpVyUmop3bgXdNPcrYe5k6hqwKwZXR4wQ6T9zsY5SMaK79zQPaH39NfkcNUuju9quQ5kMReQvqzNzXeSqo9q2W",
  "key6": "5ePGokftMNY2kHaJPmn7q3tPBe9kc2q1Zs4x5avT7FEjaBwjTo6aC5LpFagrUggGmuxvf1PTixzuixnGSb9dXYD4",
  "key7": "4zdifTELnRHywMFVPYij6m3m49aBYxpeeTyjvGrsCb6AAJ57Dqn1UDYzDGvHRhVFVdkjYSatf8HSoGdWyTpDZRLG",
  "key8": "2VydHJvtpGVmJwWEew2RFbAaRwJ1L4rpCnABuJQFDfwTFpzenb6dXQNWhnXGr79f7YrjwK3BVwMphdmsoXtrq9k1",
  "key9": "3pawoH3DMqsa4KpPB8jGnHsCahjsrg6tmKfboqqq6LnRLYT2Q3FP8MYEYtbcNvs31HPeq4NDzu1ZcZMa3LcxgbyC",
  "key10": "2pQnkxdLZZMHZBNq8uCNiHJ4FZxfei3FzTScSiyMS2UBTBnEbucRdruP59Q7gVwBSaHQwhTpAGQ8HJRrDCLtGPrU",
  "key11": "526sn9a1NsBAfb1kFDMnfU2hsnx73FmMFqfCveetkBKftieBccgAjDD2Ma7dcHP4j31DMp5fKNa39YAPWS4a5U1p",
  "key12": "jkN1mBBLuKmwH5AhoWyzNLvuB6f9rzSCEZ68hADjTctgSGLrVkXG2FmGA7WEB6XWkHQxbuTKe6Yq2QWFcJiJQHK",
  "key13": "49AovZgR9S6wjVYVZuuCWAWoXrFX3RHQTSyiFBTda7xs41R3sVexWibfxoej6uzDqVATByxMXVet43kCVSMPBv2S",
  "key14": "2VLtLyB8fMZo3pAANicaMR5XHwEb7NwxxRr96qJpdqrXR5PjEcySaURVJCu5iHFGcxXQoCbHTDBVNmrH4BHizegN",
  "key15": "2QRxL3prAJWZXqciW2VwrtPQRMbm9StP9vZe2WiKBveMpw2AXpahbbU3YaasRKEiDNmB3FuUHWGdsRjh4u4NjRL",
  "key16": "6SycQfByAvoskKyU2st9LjchYFLMdKhtNJmMn5LPyhWh6YqjSqxVjuHg5jL6NFjBctGNQ6NMJxdAvNeWCyr45sL",
  "key17": "3X8SiBSThYbamQhBi62Bgk2rW9tbH7WFkDX5X5qLCtSk7aPevA5Ez3VQV7jgocLvxmJv3KKFTXCe7po19XTRgvrk",
  "key18": "5wE3jyRQN4bwy3ypEJWyW7FwkgEGvwXBQ8YSrSoJVNX4xjUVsaw86oNC9cDVQfgJ76ZGCVerBdwD2AqJB8hCnTjw",
  "key19": "258EWD3rQGxMHqgW15xo87GR5xzrABZxzLu26XtHEZsF5R49ge325stuhFQ6BuhiDUKLHFW5KZj3kz9roNaLHF1E",
  "key20": "2xrDHaVML9ncmtCuMipjYUsYYtNbXbMjYWTmjC5w3u4A3ZnF9N3wJvN7oTNHgDW9HTEiCBKeUbXPYZyo3qfpBSiv",
  "key21": "5mQ53wZzQW4uT1xM1vCk6TsdQ5ciJf2ioMTA1xAdfXvKQq6yYJnbjXzHYix8tJ9Lu3LyA8pPZhrJS9U2PbaGnL3U",
  "key22": "VQtUkKoT1Jc9TLwPCpbZrZRRyu9tJwbGvsV16tMjqBVj3UhBVCLRD2i1RSZ3sL5CaNpQQaxzbuvJKNTDFFTyS4r",
  "key23": "gJdmeeBHYeyb1WGYC81XDw9dWqix5KmWPy5x1uTR1sG6d7nfhM6nbZHGeWB85gZu5Mif4X1bAsHiPQbPuGygTHF",
  "key24": "4bkjwFgduSCGnYkd6ni8i3LVtnjPkfApeFKV65kJKGvEFUdovbUmMRRrZvJuHynuJAHMF1C5ewUBHmSzYPmgHbem",
  "key25": "r2vUDJMmcxVxRrbSM27ohaAKdwkruqTuW2yca7TC8MroiFwb73tTg17KMh9rPQcQBtD47oUJg47iWYmwAFeGaJT",
  "key26": "3bWWJUvoCsPS6FShyaavTLJbEfFLRxyBgHvYkegCQYrXBz5x99ZpthBFCpHkXZbHu1bqXzUvTg3D1VFrfp7iAXhE",
  "key27": "3dYP6BqP7PCiXNPpXsyroKVvL52u5m12bRr4NDPA9oiBTt1fdZ5se2XhtJdbZmPCoqmYqk7hB5v74C7c5rVdPbNu",
  "key28": "5WrVfmpGepU9SfEZ1TLYsRsrLRHcG61cfRxBhUvoS95LPhcEfrRgKs8cMo1NcP9oY43rRUbyPeMxVS4PeDrXCoax",
  "key29": "HfodZGteD3YLAeMB6JC2qcpkot3ikAjRQQgReT1sxmSVY8yDLzNXPrmUXbm855xceCQRdBzDeiWLvZ8aeVGDnT7"
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
