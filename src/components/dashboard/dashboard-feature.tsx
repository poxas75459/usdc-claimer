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
    "2xbpFnLqqCxLVSYmrGcjBeSQsLMmxrjXe43xrtFsDcLy6wjoBptfz9kT39w5dP6BAjSFKEs4GyKKtvYCAb3PuXxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Da734gEnWxipxwzPFHDw92QBdCgPg8kSzJBozEjYWu9BKZzCZetQRYSFby16iKVTgEzBpPAuxfugQQqguzqPKYP",
  "key1": "34Z9fYxAyUwXL4wPA6u5tvdo4qZHn95W2mhYkxUcE92jnWP9c6p8s2kdkKdpWz4a55cP1qPaphqcrADnLQ4sfiSk",
  "key2": "5eAATMGAMEHNJ7LufaFT5KAc98iAbTuH8sMos1bDzCGj12yRtJuzToTbEshqAmSxoNYurbSvN1vVQtJrQNrAqyRg",
  "key3": "41CQNDBiuwgW21CryHu5gKgU8gATufHB3Hb1PRGZRn9YZ46vUaYRFVshdj2ULfwiSkTyyyFx25phiPgu6PRyBwPU",
  "key4": "M5m36jnV9gTNZkLags1xBwBjAiByvSWCCf2qZ8UsK87wwTXW9wovbXVCceJtmqQvcsW6dGVagWMxjBjD6swLCKw",
  "key5": "5SCt1VH5TCpnwXc71kCryxZ4R9DLPvMJTAXNbKNnUzQ2sHmM7qLqUYzqrw74SvtyeKREaa791PdmGb8tPetBk6Yh",
  "key6": "YdM51QwzxXnNSffQwS1ofvoZ4WCbf9ghy9Dwfh9sxMAPM7vXGZnr7w27GKe1ucLR1yCiAL6ziJ9eLCFvL7QPf6o",
  "key7": "5fRxx5z7RjTfngGCf8x24pGGHR47onhWkibthG7U3FmVyhrXe5kUb5c3XpR85Yauri8fzVrvqpdAG3fmy9u2Aon",
  "key8": "2wKrXzydHvHTg3dohkvVvmW8twVdmwCSdtuFVjtN2WwMLx8aLsN1JbtqawLRD9cvAJ9bsYHKFc9KZ2gChueDmoue",
  "key9": "UEuSwvJJqia9oocyK1ovWnTgmtno13vdyGwFYRn8DwPoMTMX4H7iFD1HKjMHUdJgzPRSGnWYkuGseTZhpmHhYKB",
  "key10": "21oMrKdWjBrb7x6Pp81RWTxEfwxcARoBMKrjKsprHNUVwqZMMn4bvLRxWtSs3j8Cft1FmG3VW331TNi5fvaG6zgk",
  "key11": "2e9mtXKRUhDmoZb2LJ141SZEcwov61JWrDfR31zNMerdmQZyY8p67i4949kvSnh1noU3ChPMeUxaVPZA82LRDgYG",
  "key12": "4RUtpahuEqsQsQaVeVH14AGy2b7JFbZ8fps2cBLrXdDtEqDTbcbAZj4G4YorbRvn9nPnwZvd5Am3rfQNtAws2DPr",
  "key13": "9a13ptz7qvxJNkLvRL6xDip6hEBXCEpgVtLL3PqgyPfSVdPb7zWAQF9q6ZRUZW6fQWbC3yuUXYqafqE7XdCWnZy",
  "key14": "5pWpbQauVi9WCL9zfHSKVBJpaKo5pVVNqBUrYC1VzSMvxFMzigaKcFyZB5jMYJtyUH249G36faMKzdJYqmtjnFKg",
  "key15": "3xhm6EoKBy9XYtsXQm3peiRQsa2KsuLhGLxySLfUuWz8NCDwjr6AtDUbkNCDBSfY7bdfAECH9Jv83weKtgxYvVru",
  "key16": "52NbAcGPf1gqYCf4zgxUEP6VTkfTxYK166BjjQgCJAC1R8adD6dNqKW4FT2gsFQGwTi55Utm6QkLzKkME5qrZL3",
  "key17": "2snwe68cLG9vpL6ZT7NkqtjrrBdgdFwcLL9tQPynm6fJ6x5pHjtWMKSi1LHomUqq3jNHVKqP77jcYsQqurUnzYSB",
  "key18": "3kfQKMLEBBgALtMBsRJdkzTjMQkDz9MmGzmKqPvzwS54nberAiUFPq5bEqBRCyPfsAEGBU5BKQAMTfoxaWnPJ6pt",
  "key19": "3uhC13oy2LbZXktrCAb5zHhozyULKcWoE9t9MzC99LnvTbQgtKfwDgpxhXwuG1BWuQVZoEJRQ3kqYeUmRFqh8Nv1",
  "key20": "258mYqMwYGRRbzZ7kH6wv1HUAGLKuJ7zRLntwRFgVpipyQuszZzQVTEfTRpPC7q5R4x45t7x5f67AbEuw5RMhLHY",
  "key21": "4gYrxnWfY8BU2zQQY8wrkzHDMehCRaiPiwVd7GfJ8LQt78oH71JsUc14wg1v8fKPCQyQfaCmit4xjxPZaupfjgWW",
  "key22": "2EAtb4Tv1Qg4wSBwQ9A37zzpdufTvSELDtaCbpHiLjsgGA9LAqstbKvGWm43MjiQCzPa2QgTfPPkW8ktbcTNdrKL",
  "key23": "5LbskukyXjncE3qeNEjRWMjhY8gA6pzRVQD2nGaBTbEnfjfVe5K7S6QjbG2VZDMZJpeTFfuGFRnFNaYc4p7L9xmQ",
  "key24": "2QHjs5Z3DEbBSJiWMnvvn7vqmx4mjgNRqzCLy5Yc3uyuVG8XohUCxKQo349e7AG9v415L6oP7sYcX1DUx4bgStpe",
  "key25": "3ZQfJLFW8hABZUevn6jYY6HHvxRbD3b2X18uawbdznj8CbVbGQ9L6wzJQ3vMVP3g4ZoLc72pc6Mz72989r59goJK",
  "key26": "3hvGWMzgT9MhuP6ptdoFrVqn3ch2tguwARepEPkBHcksNZtWfybyKGh5fogFEzatfaKWmkfoBGFfapWgGeR5CqCd",
  "key27": "iNiciPa93fF3ofqCLyzxDYCorjAGxMbkGVWE17cS3aAnvkznfireeXDaXzoujK5sXSSTsbfd1n8r1GbD8gAn9RN",
  "key28": "5rrSSYw1DTj6Tb1FahckK1TDvS31a2vJzCAknst4bjRMDwDWQmV4PKzGh8KiNW4DFj8VWGUXV1LdrBHrfgLyP4Si",
  "key29": "2SrSChq6baHJYownC9YDUXx3Va19ZW9dbGAw2Fo1TywfhigfaKJgPWPJUU4TjRChFvFvkmVdYszmzZqEUFKaqLC9",
  "key30": "W3MUAWKo2ShTtGButtHjvdXhYUKUfxyDNUyHbBzYC1xHcGCehNdZ62hw58w9MDu2pBAScQ36oLWWUe89wQGdGgp",
  "key31": "34pJAEns1tveNzmguZ7FCUMWHHQZfHDMwSWra6TCKpEoXXM6iCfPvcTXqGsY7HJqtWSJwaRveWUYc1um6yBUH9uK",
  "key32": "4Y5fBVGnJeakikawDMknJntVX62bn7UtBhEzfkAQZ2Yfwe4tLtABLdbmwjgw1JAs4MMdtE3cf4SBRFwdAH5za7Ns",
  "key33": "5sDNCPyiVy2Pr1BCA6qcPadXN79wDcpNrsX13B7t437pqbfzsNUdAbfkiMDnVkdHr6Rp2awVtsRf3v7sveD5dTW7",
  "key34": "2VixauAV7eVtoq3QBHGpSCRwHtxh55sUhEfmyvexToUipG4JF9zaUPvNpDyaLAePi7TUyZF3SCtBeiXRqiTcz1Vc"
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
