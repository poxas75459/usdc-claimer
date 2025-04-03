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
    "2uvmsaLHnnuYejNbg2p4MYGqjaUbZT17YXjWbZ7qCMHFvtYFz4AS9Y6dMmE4Ai56NfsLUh8gyMqpjX3f9t32kqrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YmomcijZ8cfqBhHon3DGFhq4wAZewoBWMCK9z96UXJKDQbbkBGwhp6iKtX29rkX4QvKv7xDSXbACgJRMMaGFtjj",
  "key1": "ZSHFvwTsQQz7hVSnNWthowjhDcBShiALR6p7MKBp8NwFFyPktDWuw7vPnCcXVdjTTcK1LJd2bTDa9H4e27Mr9bV",
  "key2": "4CiK8ycporiqKcHrak6ARJXD7sxV2DNQXw1rgcaAV5eR6LAomeikWt6f4bP34HhgYiNNCAEy3ZxVdYcwMRqtvYGt",
  "key3": "2udWARAnMCGJGgXWcXr3tzXRt1BASWbV2Jvr7hJfsSq6oFwnKXch9oLRhX6uWzmYi6kMZU4DYGbvxwSv8H5rFVyn",
  "key4": "2Tp7D7NUSQ5ETYG9VNBNdiZJMBbLZKCoSqSSsE4AcQAC7bNb9ojfnqbjEMbCNamdb6j2564fh8haBrX7YS3H1tWm",
  "key5": "3kHorMJLDXF7Cc6Ut4LMMyTXnUZPXWhEYFwE9ipumfQQcZK8HaLgQNjTnHWhnBu27vSd4mWRqUQ9HzECLocR5KxL",
  "key6": "5UBWHgVvBK5oRuAjqSpuPg2KTvuG9bfYjqzQxQLxN3nSVCj6mN3LNuMW5Md6xPqKXLq3dpkFmo4bEPBDu7ZsRnf8",
  "key7": "2BFGUpCCTQ1LP5xJT7S8B2eT5QyzhNF5kR7FHSLP1LJRPSsAQPaBY3w9zemtWo2mk9AjbdiH52PEahBr8QFD1tQ2",
  "key8": "kJGcmtd1bpuEc83vzfQpvcbnXsYgEX8jwhEvDKc558iJLiMb4i2TwKvRGQJUvp379B8HvVweFosPrmPsard23G2",
  "key9": "dNbGL7k5bZfmSzVKiDxrD3k5VWU4pvrsmdvD4qbvDRn9hR4tQ5xdfS2nNxR7jwYbm4ittgvnjX6HUAKez3Y1auG",
  "key10": "aSeZx8kbTzyMXsp37TY1fUsHzm4J2i6xdZFhaENjUkCvyopkTvKePowxN4vCSovBUMhsYvK3ciYffs7Jw2NqZ6R",
  "key11": "5AgeP7Yj8RgLwrG3UfFm3J9RNH5meHeicVxPKhxQVjbFSoGDMEwmWCpVdSANzegHbdR68zvL8WYainXWkRPokVwZ",
  "key12": "2u4xEvZoNXp85X6zLvFyjuxmuaduaT9CrrnrfmfmvX6kfnR462YkRtxsY68A9bbBza2PcW9tW4dRnb4U8dmdZvGT",
  "key13": "sK6tiYUUkEJ9UcCsHoL296fXSfZqKcPbQvj1hhi2rwT3mHGtSudNKWaSncWAaGGP5oHhQLdR6bh7Kpv87qcbq3t",
  "key14": "4i9TvRFDS1Zvk4VreEG3Z2kxc1eCfn4gS3YwvBEdDQi7cRsHpC8EvR17yLTJXRHuXv91noDbsx6LynVANyveDGLk",
  "key15": "2Gj1Lise7ZefYHKm1L5WVUvup4TpgvmtGzpd9qrnSgovVjgDm2YveHfyc2tVpXmauFDtf82sct1VX1w8jUDuTRN3",
  "key16": "4MdB5vMkE8Cs5QhuiSiZMu7EWGUy9Z8WVyvJEB1z879UzWNWDs4YJRouDGWbLJTbZnakifLuPE8ES8gQmVD5zRgW",
  "key17": "3mk7EwuwmL2cYp8gKAujcBGZq4wfbwsjcRG37GbrycAtGiTmfPGozSGKV5GRKbYkpt7JAy8X5DRdr4z6Jocb5PsW",
  "key18": "2VgVNNtUCiJT5GpQUJiVXJd8DLj4ir25EFxvYzDaQt5rTTaDoo4SeRBCmHWFMm8ctG7aojUJKcA8xSThhCbPeoqQ",
  "key19": "5zQeHa3r79BWzrKVh4Wx4igNArvqSy5PaKnrtmS8p9HpKyXehuaQbd412GN7pBQ4Vj45LjHBPo8JBfJHo5wZ2LRy",
  "key20": "5xwmneygwq2j5FqhqmWynBRbzeBXiYPTAcSTGVh212jdk82DpXaKmmCbaqZUSj2tinJWpJbkZ6JpVeA2uWpVxx7f",
  "key21": "5vJi7Mf8uFqTxsat4T59XrsE7hQZMmZVjccvGNykFchkgPZfpRWrivsFZUvuqGRXMocozVfLZRq8GigcUXBBDMtY",
  "key22": "42qvsXvGHpgz5tDQ5tQZpKMpWRYmNDMemo68Ef4eTyLs7FKnUmq5ArpREBKMjf8f9euHUNyow7Jdw827ZkJZRGmo",
  "key23": "8P9xF6cmXATnGab14P8LNACjqw8cF7qGGrkSGMkk4yuyoN9zTJCT7iQaTx7K5dsM96LfDmgZHNFDrTnp12f27pW",
  "key24": "5vqAHZassPt9tX9BDHmt2Kc6jZepb58XdHjXs3rVumDVGyhi85eXd8uvhPBncHP8BWCoZVYGTFbJPDUceTDgqdVj",
  "key25": "3TRTU4ouTEP9QjjFwREoKqErbGkCvsnL3ffP19UBHuBzeLygdAxStHP3zZNuYcPbrco4YrN1KoCyqmbpXCTsMLyb",
  "key26": "4mkSBY5KeiVmC4rxn8Tyt35H6N9U5cnFtaLGeEq3Ki6tz99Z7LReSvKDXBigsx9FCmVvgGLJKBygsQswe4amxmPT",
  "key27": "2y9BSPTEwvr6t1Rvy679YUa4A7qc6N268QLquH7CbRegyAU1mhw7jRm3PYfyPE2gDwamPeXoGQLrvZ2FfUdXVu2U"
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
