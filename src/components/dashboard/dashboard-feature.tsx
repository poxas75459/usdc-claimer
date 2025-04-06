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
    "63dc4bk3oqGTiK8i45tDEXcE5qpoM8zpXDByne87CysMd67otiq2BWu7oa9oeMPd3sdEbn1QAoG1K23urQVbFdx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vpjwnTPFASx46A3DWvSrMKrnqacHNuvm6ZjMihymN65uPeqJpwhpxc1VroQ6hFXxMCtaqChSgvxsiz1J6EfLGcv",
  "key1": "5WNw6aHZoP52UKPhENLeV4qrbeFHo64NK1hBo3ZT2vkPMwxDjRay9myUYN4ngkPRgCamRAnbEdVGpD49PhY2npyW",
  "key2": "3vww2J8jezuLSD9Jh4j6SDhQp2hx18CrXeNmRsNKmpqHk6pJsQCWKCzCfUuiMfP55KTSGDNtp7dRxgqCJKBUNdCn",
  "key3": "5KXmwmBfavj46cV5tS1tcPiPk53BvfYPshA8R79B87FBJ7FhYkczjXqN81i4GkTpVVucuZiBY4Gknf7q2Vyxi9ki",
  "key4": "3c7JTDKtfwp2g1B3AoK8BBWgCMYBLzbvFkv8JwQgsJUmBqkgAR6XR4BrhPGM6YusDEXVUQB7NAGZYyMq9BHWhioe",
  "key5": "5tq1RjFxZUm3HUf1knsawtDmFjXQNgS2nmDTZKPT16Dr7BVQzMEhm4DjhiNsmtbdASYZkJaPGa3ZGZeaGuYNRa6B",
  "key6": "4KMy9XzBRMec7jDWHQhhTZ2kSXY8ReSi7cErHZdFwTHgUxWRmNRQNFpcVvyCmSZvnLZVUr9Pz5wqrFYbJRZB9Vjm",
  "key7": "38yCUGGsM2Y6E3jfqHNHqnZEFczqfC27pSUF5ZanzxW9fsRR3tKEu2E1ZwuPg8TarMG5ej5Uj5YQwsRVzPkWEtZh",
  "key8": "4UD6A8yTTcR4yqNaKATBV1VPKHgERaJ46aVVpVuZVvnDB28C1VSQoyKUWLRyzx6Egx3ZqZuczVAPz1t1EcFuqERo",
  "key9": "4HDNKicJwAkKCpkszeF57HxdUGPamWmnTibhS9piSZYmyfsArJaFsRp5FrksRBvjGGBbJFkfRMpJQoL65kbSyNVv",
  "key10": "3mxfx7tFkySS5tH4bmS5HAgWXYGyykamSARfF1EVbvSg5XFqNKy8qsu5fYwzigG6N5LV5ACqd6nWC2J5rqtF823y",
  "key11": "3ELqow2sVATEmVTtR28uPAY5Zd99zw6qo2QoT91dsC7ME9xwQvWSqStezQMEGxHEKgziweCWb9XLkuAiwHoF1qoW",
  "key12": "5b6qwPgxj4JCRuBGM5gnBmH5rfBjtmK3HJfwW2qascVd7RYJprWJH9c5tBbLhUKeZpxo1N3VT9p334dHZAwZRmCL",
  "key13": "yzaRCjoVJ9muUhaviD1dkFuF3nkZPFJnajYeF4pK9X3GKUFzV7hvHo2UKb8hdqxsAJnw4BycfU2v9pRzcQ3NHCr",
  "key14": "5m8q9yWCM2qXmp6hJ46bpZRwocC2AJ2NLwZpjRQwS8eJ9azbua2tJZss1iR4PyvYCWXY8EUbgAVuEtz8keErG3dk",
  "key15": "2S8gGh8zxeejNGWEELTAc9ixhoD8QZded1MPgnFPxqYT3rdJnSr4J5aoKdJ7LHNTmxQtdQGMKVgAdPRAp8cK8ALi",
  "key16": "3tKTJhMVi9DvF8JuxUzfmhoghyFJgANUQUAzCvTcrhiucbWfXfnex7Ko2qEF3s7T9c8faZyxeQw7pEfqMczHKTEA",
  "key17": "4KNMS7DQ5iAAbWHxCCYdg9XWPg6GJ2BSaWZqaXBTQzFf55kvAbXBtdbkPWwDokfLfdjibT94QtcNNgJXWwY9YpGy",
  "key18": "26ufADiv9uxrXnkcW8X3ctSeqcrorsuyAEfNb7h3dPqt4CsajCXFKU4JtQxgHpyX3j4ca6LYUeLAAX6ACrP4exuG",
  "key19": "5KG3amRo6FfkQ7hHCC2yiJZLbhRFjsLuEvhKxkdG3py12HmF7MmqxzcMBBgiK6fYBF3DzcAgcLSCEvmwickvipjP",
  "key20": "3ycQaCwUr54fwKT2UZkazSPAAVrTY2aBrEJPjZyZSnPnEQxzdMbjXakhv39dRkRtK6xAmXjhVyH9qF1RzwgC6quJ",
  "key21": "52kD9iJyLzJiP8vXAqGXKYBnrrPJmNfDRDfb6FfFJtgDvrM8KJz5dNeTPDmt2hFu7TotMLkenRmb1nmzJrDQnxCT",
  "key22": "4NcfWAyK54o6T73pbt7r9NAhFCQ8EmgZtntnBE2ZaHz6pn5AWhZ2wgRWACHcDXd8mMXEPdCVESFZj6PJMy9dnUDs",
  "key23": "2Lfm9KZh43guAoyWX55MduvcgDtBLdxEr72Ui3cvVbKZg16yFyLfSqP39guJieAB5PeGbQbUHtjEfvmzvdfFU73x",
  "key24": "5pb53kgT9yMuks8P26s3Gn8U5sG5HSidRGHBKw1rUXtUemGSQeakt8vqRLwvoSrnKibY8Kmaa2BYCvDK3cmZCEAY",
  "key25": "5BEcLDoj9qMyPipfT2bQ67pWCiPtZCFkgrdhYNeQ1aDC1MyjRLZzecstat68V6nJKgmLBc2jb4Tc1tEacJB6VUkE",
  "key26": "4LV5EwcZKqaU5HhMBf2kYErshWuMY4Whu1KCErtkcktKEmc29B7EYuXKhdpSvoqva4AQvqbxMtZfafxPWXttjgAZ",
  "key27": "5GATREvdVvx88JJy3Dh7YvfCPr6FokSEdRdraqZqk8hYgNfiBVgVdrhVtaUCXPV5Vr6MGCwvwJVHomACNgeAf8YX",
  "key28": "44TeR55HBDsaRpyv5aLSMXwTxMnZUcpMawoaWU84MY9M47BwkLnAJwbAPnAhHBEVjP81LFVGLJcoMVmxLR6STxy"
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
