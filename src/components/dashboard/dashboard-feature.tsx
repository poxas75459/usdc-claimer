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
    "4YBSzBp8HWburXDycsqqNU1HqZrhjUTpKR5jdcuCZmiL7Uk8eF5FdhjQftUo3UEriRqYR5DmwkQKHo8kHtqrXEF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23e8ThH1y8ERD49rDhMKY18ZPsL7bCta9x4FPtAuNQYnWs9DWsECpGgV3TuYN3KWvoMeiVuDF8psdRCoEJ4P9tn7",
  "key1": "2kDoiPs1njYD8Lnjzscmk8rhaw3nAGMHDfh8ALpZtfm2pKL2hBZ9cAsQViNDnpY7ZkU9QgWaZ1NTar3fy9WgGhiJ",
  "key2": "3cxwGyJ5xgNQ9oj1b3XzGvjSGr82iEuUToByYfVudYfzaLCnV4s5EGbDmdiBJV42wzHMVUJSw23Srhm63DtkKwF7",
  "key3": "5p7R25dqemRdNQesDLVMje4PeCQpDtcsGSrrwALHFbKmKjghYwwVa4gPj3KuZeQFW8GohjF6SMbDU5BS3GEzw1LX",
  "key4": "24trQSJByBtRYWPqRnBagAEcKHzFkbaTrsGsW4UDvNCZTLSxSXwGTTGDxVbeWsbjyZneX7M5BeuRFJhzkVav7KKK",
  "key5": "3j46PJRe9ZykwCdTdJoRDtTPgVWqD5r6EgiaTxsqTNoJHGVyFJK3MknUXvJMPGVXrQapzyvhrghrAHvkkstBrUPy",
  "key6": "5zTYKdFjNc5byFgQpMH2MVYVPAqTimx7cxTvzwm1juqq9Dn4Cp2Rnd2iJNYP7TVHVFyxaHVJoTbta52DovZaB6eV",
  "key7": "47TMmegC7CoCbEBo9bxrXsSTng3dzEDXYEK3iGt4vgDyjTtSs1hEoegy6DAYfFFVhsRUHLhtstUpNaWV3pgGZA5R",
  "key8": "5DWLCQVzot4r9fYonJoZarTwya4524UY5AtUJw13Z1cxhTzVofz3Ajzsm3KGcpYAEavcWjUT33eaEJ5JVjs9g8bY",
  "key9": "4Aq3Z6CC9aL6yF5t43NYxUJdf2jkm1brqrSRofG8noYZwg1tN5zT7RYuuii99rVFpsK3JHLweMqwJn9rpiGNZc9n",
  "key10": "5XgHNJbrjHBhqguj8mHkiJ9cGepvzTUuNAo7KA7jXSkLAmZpP46UrsuMtgGmVt3HG2rNy4ELcYc1vqWAYti89MuQ",
  "key11": "3SLE9sM8VXknFaRmAJouFDfbN9cjrihfE7AkQUoYxjMZvdBU61dMKqygeVfEoX72Y9P1L1p38PW45DJRXhPxSHCN",
  "key12": "ZcyeS6tvLWZTHToG3KjrL6SRR8KZhKUrLqYBzBHi8vdYUUAfQvRhdvY8VXmWG8ArkeV2siZBEmRe4mAAfAkJ4uG",
  "key13": "2Yhw8SXNA76Y2cY72UWPLt6onyogadXEAQhxCQpa3wih16ptzBAqghBDY5QsVXeckfULrGQHsfRk7VhZBAywNBZy",
  "key14": "56qS9MtByJeVHb2repsBopbABXCaexHZqgmAS2oArjSw9CoK3kQ6LjMfN4ApkYPMUFHHf5aP85H9EewkTv1noUkY",
  "key15": "5uzMjGFistzCL1XTgnGEVnc65bWtjSNQ7vNDecP6wjvsixtbFtpMjBzE1LdWZTKmU8FkfbMHbRbbnoZzcTqKMwmE",
  "key16": "4MEkmELdBADS6AC1YPmqbhTCHRQ1iH4zCdeiNwqZzjTtNYxjEG3w4VZegePFQrFWvWwc4ZrHNBqUW4SnnPfYt6L9",
  "key17": "2Twe82LdpGJQAHZoSYqpKjXLtxg9sB6NAHYRsqYnRHouPjvreZu65gBkrhbjcw6mZDq3xG4T91hkovm63GjipoEE",
  "key18": "2BdqhBxRzHvKykxKZzHkeVw5nhBG2AuXzRDE294APsEb4kuyUg3bLFRJxjgtTwssrBuTbersTPjy5YDrjii3vQ5C",
  "key19": "2nyhq7M5K3L7xrWkUauT1doRgPtkL3f1eWX8qEX6rg8ZyTWwCMjgwbQSS5u19euXFByFyWfNh3i8oMGSrh6tXiXq",
  "key20": "5ujwCLv8KMxebxGzKrd1z7CkdeVkL6jCHzUYLC5NEtMoXRtLvQFXK1rxutnm9pBx4MRupXDZrpxLd9hHAnLyPkEH",
  "key21": "2TAEjm6LMaq5jtDKG4HnpnzB7i7LZZq2Wk21KESGiQmJUzpoC9JY9RaeKiDGY4Cdps6XivqWXjWzYyA2UQERAxxK",
  "key22": "57GVaxWrj2WgbRPdq1AnAbotY5VW2f5iuKiUCyPWGLbeEU6dN8UwgHSNoenNMG9a6JKAdX4yBF1RLzC96Vyhn2Tc",
  "key23": "4f4o4otdst2q2d8Hf1zCXoY6JmjnEmVfHeP7BviybUxSKiUD2Aw5iTpNisequvbc75XYApZphPJL7FoBNN8teZJF",
  "key24": "5u42mrmLTL2G7z1mHE9cYSDCU9bFkCAcKtNWvdHgvocfNWAXUyyqysfH2GUFZ9Sp2YCn7B3Z4Q8w89psWpfHEXLE",
  "key25": "qymdZku9TCpGtnckzP5hWt2wQwwTrRoc8svJ6CDDND2cPbt5ofGAocRNF3G5qPy82yV5xEVX8r315keMRE2k6hm",
  "key26": "4m2bCXGrCUFPPKU42KbggbQDsj3BCPkrPnwzqbtqWAtVPn3v9Gfhiw1ocShVnhkuiCvHNDKxChyRLVgx4ebf8PfD",
  "key27": "z6w3ZqhcQnYBMAwADN348mJSBA4zVLmaPgqDcvaDBaR6go2cC2tURYqHaWbS2qzNHjDejZspusUsebbB37i8KPS",
  "key28": "y67YzftksbnK2pcUZxpLwoDy7tQzGJAKxmbrbd5fBCVxp8AuBJ5fmW4gQmecj6ZR3okifXALUDpaCYhmDQPPJnz",
  "key29": "5C9bGyzD2EpokYFhYYeJPxn9mZcfTWSfmVeZhBSJoMvmrCdFMZxKHj2a5bWU9LbEJGooxHh7dKfM9HDzu94kyMvR",
  "key30": "3iSQtJxshtqPk8p27Wxe3mwLpobKqbWsZ6sS3TVT3ayVsofDrmAJamZBeVL9Le3bFaAcF4J2XXBZKfMpKSVgcdL5"
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
