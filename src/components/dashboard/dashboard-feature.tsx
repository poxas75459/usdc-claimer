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
    "8VnnncRusEMN6uZAZjzPgcgC2Q2nEk3wef39nf2fiM5TT7o8FVz5UVTc4BnA93Ey4wk8YPzAsiD92WBjQstMo5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46iKvbEdhL6woNbk7ZYhXr3daUz1vVyNGpZ3DztLdV7brJP41JJRMU3CWe2PmaXbXmXhABb7P36yNwuxT5FpPTDE",
  "key1": "4QtrM86SQvswUukUdBqmB8RBgg9M5z3q75mGFv9w9VJm8BoGnEpraVFtMYfHAgvJN5cRiCALmMG86k6DeuYz7Nzh",
  "key2": "avhCQFzWcFLzaruKpmswNsfHLMJbKJ2SfBChLVFDaA4nZ9L9g6wgnSG6sf1AMLwgTTnHrZ9mHmdJxgTWvW4UdKo",
  "key3": "3EdWXy6tZG8JL6zAHgnCJxgP4hUNHJHZ2Q8r9asuyLtQEVrurSoqf2aYkzqhKxvr97MQzwMGnqXCvH5T2WyfDfqq",
  "key4": "4bKdfKPUUKPh5QpVSB1d3jkEcfUuA7rhxFX6v9bmixJb8cGoS4Kjc44KGu7PTNoXsUZxAYF7vPPeBDx5haNFDL7u",
  "key5": "yptwdAhVSZjEPjF3cRcdziqkijju6oqz4PGtTW1q45pD5RCcJAyn7qHL8wZtxL6RYSaYxswpaFsB8UUkSGnGWCB",
  "key6": "3KtDua77yUNgL1hRVJoSDfSW1Aa1XV2RYQocbdmGmQ7aJeuL6bKRGa9jBwFkr1PeCkM9HVdczN4S1cbGU4w8aJ7A",
  "key7": "3PRcXQWtdoCtCE5WwaBmMi6yMif6qE4t2g1S2YkDwyEigk7q1msNFw2CH5QFmRh1c2FsXVRMDqdfDmg1toFKmw98",
  "key8": "5f7C2Wke9D7jQevEwjDJvde3C3bDmQLj7jF1kpkkNtfsahR11Q6ieu81ZixYvPM5aa9sYSvAYdbRXWGALDZXVb9o",
  "key9": "5R6RgmU7WGMqb3p5NjpPYdboEXJMyBZRbnap6veT24LZrZ5ByzPqNUi4Guiz3MDhqoiVKnHK2DnoSYwNJEA3GZH",
  "key10": "FmuccAasDhyxRVwpHqZJ98K8poDT7vEBgizAdMWyW1kjptf2GgzQ1aScCxznFadi5GAmEPf8e4cpD22pbgNoGN1",
  "key11": "4ZmAJAJMHoG3HnstwVqTZdJFvnWyWSZnUBssTvyLQiGUQv1WotHJ2sRYoN3EiYe4ETgzgAnSbWXi6e24U8zMHrdm",
  "key12": "5NEY3SYUmaX3u5JGU3kyffVRv6X4SYr44E3oge8gyXanCERtUasi8Fjh7ftpSKGxaXEFGn52xm7LJCX5PGy67nfM",
  "key13": "5KtjfV6L5ikuAU2732Mv7ChFSjmKxBFJBuTX1MeSEpgUb298EeNkmHe1r9J9wJav4ua3hNcdTDGRwxHJ29LHWQ5i",
  "key14": "2abReJVMPJweQTQragxPxwrt6skL64uaaH7HagAyFWexPyKBcZKB7MWTyzPykTGbBEdSnRBZj83V1tospedGig8E",
  "key15": "itigatJsNXN753dnskjFBXioiBC9pmAR2qDabJq1rKimEEj72By81S953cyn8dAXNE9b8wRSfg1MNtV2BjQpscC",
  "key16": "MUk6Z1VeeubnVwYgqWstxu4Dp9WkZygtvYoXqJBthNes4br42oaQcdVFjnp6dGwhppEXxszoKHjJDmXiGQqWzA4",
  "key17": "QybDGbL4iZJHH51pD7zCQ8CZXMCKzP6BRvsb7pGF95DXvfhrWwjhv1jfNcakT73VTESPTGgUrwhrG4SY7fE6wYR",
  "key18": "XYPdJacNeUpYroXs1s6g1iaayFcjxBtJq8voQxWipXbzjLYPUiDvJqnFhxdrt2XZFgcr2eoK3d5v3cqm3wEw9tH",
  "key19": "2HvzJFxcMAcqbJVshW15WFvttoF8ARbPut42hHVrKmxNfpgxwX37U6AvXd2Ptgcpy1f27x31jMghnNyU5EWJbQtC",
  "key20": "4gVEQ6XutthMCskn1UBmRrkCJiQL69s4VviFGgTRFNraCAoe1x4LXRg1CigPvRKfX5m6K8VRdgL4KG74T4aGDPBK",
  "key21": "3XFdSdXZZQFPdJqGnJ33gpoRXwdVbsRUK7rze9KBGqVwLd2DgG29wDAdcBFj8SNiUzscvJdTxdx2gFzXp5BYMrdC",
  "key22": "mJ8YeEnscXbonXMivjGWfaHgh8H5eYd74puFGmgbfVvBKL3UyiTMWAQKv1NSD9VMGQy8ifkXUgz4P8PHXGxC6QF",
  "key23": "2P8oeLAaeq3xQXwHYrQ9A9vJpTcbzFVRs5aNRS8FCdpZTUqGK2NSkSEZPg7SJoktNMr5uKURiDNyqqFyYzGfdaH4",
  "key24": "4GGCPMNPj5q9SWRf5ypX3iWQAsYA5gbg6Nx6Uu9dEfoNdKhJqfbdpqUL6zZTp5tQxEZ1zyhULvae5MxH3YhDh7CB",
  "key25": "4Gsp7doKoTucgrGgqxsJ5mD9ramDSQEgsZRV2aswE86GWpbhAUfKUUzRJVNChKzaCFQC2TqiLzVndg5qrM4XDRT3",
  "key26": "5MKFo9QHvVSLGFjTqZCtFqvcvbcXqK8mh8vm6JWz6eiykiWsoCg1sScUGSxfoNpYG1AhrNKkfXUpdUsh2rJH6Pc3",
  "key27": "2w8bgRtH8tNzfhWAtaT2nKdMrYV5w6trV7trNiFuHnLQ8CvrWE5seg6GzVbdDVi3AV5y5bBczEsGHxXumYqVn8Ni",
  "key28": "2iWPiJ4by6kXXuBC3NS9iQya4aQjoC2MXKFco3ejoU1LwE34LdpDeGvRiexfZSka9QGiq93HDBc1dCsZ6JApoB9N",
  "key29": "35YQ4b2pbFS1m1t49ov2ERnS3dSAQMaAF1qpdHzfdpygCBF5UUmKhw4DNGreRSeazz4fwCEPh6nqFArFQ7Gtjihs"
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
