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
    "3MSNqeYH4cY1hUBbw7Mw5yBZDHQ1FsGs3mVSWLmS7zZqhB44djPkxVLhUYPLkDFXNBERcBhYJrTKdZFudECNhqZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aVLNMSDgqHMyqDCZn3KD8REgkWydQv4tU8RbhYyJnFPwz3snRbDVb4TvD7EhjPCUBmHCdBB1RWSLk6g2yzoki5P",
  "key1": "5m5w4AUtMQiUoQWRfn5g2JnQ3kwEWTZYQHFoEywFrijmEAHHP4qc1QTARZaWRipvM9nr6GZqhRfqgVe3SSP1u3VH",
  "key2": "61Ekj84ruJ7VZhbADg39QuCuvaS54BDpzWnL2kXCr8TtRdDhCqGUuTvGkwsEp9uftjZQVQF5YrktbJbf83rH1paW",
  "key3": "4eaHDhsVS263wscao6wA5ANimgnj6h3sLiiuVyssgCD99c9H3CsrQFSVp11eL7gPEutrb6ZX9R2KMqk2pvkrSyT6",
  "key4": "hZrCpuS56F6BddrEkQKDJyqjx1p7g59oE27rPEBFcKexKwXmrs18jzR13akCgecHi23imAmqNFVRr7LFcx9Z9xi",
  "key5": "4ExkLwBMMzXXuBQ2aXTSdpsagdtjR6xYvEAD293DnRZ52i7t5avG4wPNVstWLyZJNYYPCf2q1PxLT4TKkZMxpa36",
  "key6": "5hUvs2m6q1thZyJaNsdY91heTJ6Wm6R9b33HkrS7Nwz9vWAAtjcpaLsD988SZp6wKGgvUmZEcnad8Q19wXzXvzMq",
  "key7": "2enjVSTCRRDckY7bkT5nJ9pDQ12jVwfNruFeRBnEmC9FezZ4vMG9h9ux2ADUiQHnxTqGpMGLmnX7NUTFFcMSiuvE",
  "key8": "5Q2SpagWkRkMrQ3hmSBcZXGXRKDEjWu9ym4sbA8gBbdBzB85ZDU3LSLRyt9zumppLCkpYr32tCCkAJ634mWLYmfo",
  "key9": "4tDtyyjNtbo8UvLWjauuTujXtVgpEpAaNPPtbtod5JBppt8JFhRfaryB46d2J41xtL7nwNHheSb97ktBFu9URym3",
  "key10": "4HLije9FYZGPSKzwr4YZsXVPyNd6jmWgZWfFEQWsqVtpoqKV7zmKSC1MAnRTSbcRyxbTE4jgHHtUdgEUj18oopxG",
  "key11": "DYezbH2hkVDyCFX9jqSUH1yoYe1hNRwkpkFcRnWtciE3on4kmWKbVLD86p2TiTgU3ai3cMdpKvFN28jMJydceqs",
  "key12": "3KpMbeRuD11h4WCsZXR9b7p5T7NmHTKMmZP2xwvd4PvWgfutJ9fya42fWMQdVjQM33yCsNdgzEXD9MiTBXPPqTNU",
  "key13": "5Jj9EdEw4yMXev4JoXqQN8w481PHrmM4Ht5TJmzn2Kf35cNSWQPmCJ3WUddyc6c6pDYN3zXyikdx2LQWAy1531Lk",
  "key14": "2FNqnMawcNiZyjzfag7YwmirYmyPqzNAdLq9T8WZEuAjDzkP9P5TyzQQgxxt6grAzELNdq7U2N864nJUpyZLZsy2",
  "key15": "616uEDFwJ3eYukzggBd887oVr5r25ASuxzkL7utnBY5YEBZYGbsx1e3xEdQm6uUnU9kur8gz1QNQ1EGqpPK7Wmus",
  "key16": "3ACkzCy8PtqN3J71DrE6ebJbmcbmFbzdJf3c5bYF277JmELKr6idj43yq4cczxyoAkszXb6389mHz79buKsuBUHx",
  "key17": "3mCGP5fPjwBCQQNjRGURmSAy4J3sMJQ5phKG1hViEA3FCNCtT3EPEdTrpNyMLv9yJGiM8kJowqTuwbypP5kGHLd9",
  "key18": "3TT7amgVzBMTQu9PDf9sm5akhVNXCtCmgCTLSiPEUGWBGyqJkEYzxq2FWT8byQh2bUq6XtzKCCGemYsnWzZwkxQL",
  "key19": "5YwNdQMNac3aZ4hum2aPFB3LZ1KnKL5BRazoNvTi2eEp1tnSgPbxGPmUJoj7BspodjAzy8XqyXoGgzWsaHD8GSVw",
  "key20": "2CZZpVMRt9CWUSyjfnM4EJ13fxEt8b6HuQvU9qoNUk2apvztYg4g7Y7hVtFjojxzj86UEGrULG5zmZHAuGzYcR6U",
  "key21": "JSTvrXMifhaDTAac5FxemY5dVUmb176wSTffqFEfRdKtbuXsKdxdh4w9ZC3anuKhZdnrrWKMykzj6S8TvfzKztv",
  "key22": "5dvkxcN1JXvHL8aMKfbNgZcvaetrdVmwJvK1L97Mtgzz4DeoA5ESA1wvzecf9d6Xv1SevXTczYcuTyzL5N4WLfqd",
  "key23": "2quSMhoPxWXdK56UDvuHeixv5cuNp1DoDLZkoqmnsMaDDqzrxDthfwSoeG6gNNWpxiBbt1a8oKP3Y93BqFSi2upS",
  "key24": "6CcUtvgAzdL6jazupYkzHz2LrkXXNuWw3gDgtvJFwiwaYjsSGjSAUAdtWpdSSx6xPPEYLRNus2j4mDAeVEJgP2n",
  "key25": "4v1jVXjyFBMLSV13PPg8CvUAAg8k6NkDYNLfTkhm4VtM2BT4DqmnmKXCnkRe2isEBKyT34UdvxxEDfFrQjTuySt",
  "key26": "2p9gar7L5LoxxqXFkbPhmC9htxikyeDS34PJfhMPneyjFDdsTyX92vqoaLMx8pzd46jdvJVR3fBfitfppL3zD3Ni",
  "key27": "62Mun1C49NMmvnqd61retDTcV4xXJJmVSbTr1YxNd2AdmMMayUgwDf4LrsvqWFPQNUrBUjLetwfeeZ34fQbfmvbt",
  "key28": "5UfGDjn3zWMLDQdWzAyoJ53sj7mPqQiGGjSu2kG2tFp4ZeR9Q1LzcGxzUNCikQ3Vxh56C8C3SzL3F3uCsQoFS65K",
  "key29": "5d4PXrCCRZQRuog4DYd67sNhWF9Q89vdTuyKpgmtABgrxmabFGZHtytgEr9dBvqVcD7qpCHNbzHx9TWHp6uXKvYk",
  "key30": "4QbXzgPDeU4JKHfC5s5EwDL9g6qEerARuJMVJxMXy3iLeAghxgysLwqbjMc5jygRyqL7Uht7ZKKDwLX31RrJFX6b",
  "key31": "3UUap2Mnzx2HFcH5bkwhaJSfrPxcPmNZ4defzjqCPe1VbwrWo9yBnyJ6AXtwrUp3RQenYNmznYiQSpNxRbCQ1cjB",
  "key32": "43Yhkmo1MFqxjZR19HUBUCNSgf1UHvyRyLmrPXjtzajj7mb8tkmUCP6etoQvDH9xXevRX4GcgQqE36Q1STo4tJti",
  "key33": "2r6c6v17j5VnGykUkmPz1mXBFZc7rV6LFNbTKyVFAVhNQMiuGibVnZwquaQmjubG4jJGQhD3hmZuMriUHwj56xJu"
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
