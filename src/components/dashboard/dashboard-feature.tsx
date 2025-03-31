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
    "4p6b234PZyKLRbS2k9wAYpMWm6of4RCppU8amMXLCJkzuRjWuPdBCjuhmnWsUoKZjqQdepv81YdCKGTdaHXkjssz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RekC5hYdxeEVtbfePUBEiZZgpSkhdSBuYfVmwnLvBezAzQEdFYt4hpAQd3KafTbhZ9hrTfn5ntk3vcVFQ4LApMU",
  "key1": "5bvXF7VZHpJgBCB6tvSrj7Xs73hmT5Y5GuUyP338oU9J4NHrVToz51ShD9EN3aS9xtf5LgRyTsBvsdPJ6pgutdwv",
  "key2": "2ziGvpL1tt2LGHmgBhiK4qaB3H1DKeMaKvFBvDCPmsCDjrSeRtYLtYSBCXmgP3LPVkr6tFCNMe8Fg8wMuuKPYakV",
  "key3": "4mLx1udmJHD82s1EDMzjZC9JDWKL2feY6XAY7VZaojmsTJoE2fHHiyGvHmr67AC4S9vzgWnQBpc379zqCmjjA7LB",
  "key4": "5Q3rMrJzzDe843WbTEXGW6Mh8d2Fp3BTiVDRgtt3HS2vJNetMH2hFeFZsPv16Jh9pqge3Gh1Yz5NgdTf5uLqqZT8",
  "key5": "1vGcAWiZoALwhJNoMQLGa63puJaBjb2hxwFqCewJRNS3jsjyaJ3FVn18iv1mS2N3EGiMRE69KjoJb39fpD71iu3",
  "key6": "2ubU1nbik2KQ6eZfFudHRSF2DisKxDQn8ikcSim8cssEJ1DHTmCgmcrSA5JrercLomx3JuDRSRLiFhmjTw6HJyi8",
  "key7": "5tRnq1Zh6QL7vQgCLjFdCRC1hK3nFPQ84h1XnhkPy6ryYU9QMPgFDtDwNiWmqrTdmvstXeHjKXppHTC9tBbg9EJn",
  "key8": "37ZkXYVGwgxWK9v4xRLzP9RKfpcHtLN2K7k86uEawaiQVnePAvqyaXRUn9iFyF4vpDdx58Qfq1yG9s6wGYk1w9b",
  "key9": "3BYQuqNBXYXshQ2Y5nDWAtxZAgnRrpidcWNbetmooyWB3WtFqzpV4XLiKYaZRwB1941dnHxPVaJwYvCz2EByZUiZ",
  "key10": "2epBwzwcVrtQ3QTqkVvpHZZHdrqaT2WAyg8JF1najeaVpoAvD7ME1w1jbktFLXmcHb5KCovAQjCP8yBmvRdx13Qj",
  "key11": "5E8HGDXodwc9b5PsWFxCAm3wg1eiDCF4ZhAU4RELmqyCsXqyUbU2t9qWk6r4cfYG9qZJHgZgoTvrxeML168CzHRF",
  "key12": "3Q3UTMigo8x6KzwyRQcgwPMme7L6UjJCr7UinRWjoY14hacQ8aqSh95gJhsyyTwATVPR7RYHnPwZ19wd8YNYDwj2",
  "key13": "67Jqsm7rkfpDN7huAfviBB61Ywx95vox9QtXzgptb7kX97JP1QFKy97uc6NuTkCDhXjKAUz1iKZgrJM1Q8iMdX3a",
  "key14": "5KPzz3hVPcKSmksDhCBye99Y4ck75NfGChc1WgvWfhByWe4LSJXQzKujQBmbyQM9HN1Hy8PHrGQQgpZdTmxJfeL7",
  "key15": "41UZRANVf82Ppm4Ar72SJ4bF7nXkAoHpnPKwg2TXSYPStF9dg8B8XhMtMkGhb52aPg7v4kGWuGm3r87jCepSNQqR",
  "key16": "vSwcAtQjcwUekpB4ChLrkuWpN8oXMJgtRGShXTezaTKQPioQgbedhJhjQD8hYKyzchNH3WCBo221mJ8ZAndKcWh",
  "key17": "4yxpBRDL3eP1XkwMMN7x14SGUEbrN4zjQ93YHMaTBDgK8Akxw4QJj3puJ3xSJM1NNxx6upbSu9QMMS3owePni8GT",
  "key18": "3yy7j5Z39jMkDRbrX7PNiCYv6dN45wkuVPJqh6HvQngaHMWixPCV3ydUSPeXCRxgfwPSEUD9XuPAz4ZYyiR3Ehxv",
  "key19": "5cjHYQwKfofcSpMcgXoTWnK2abs3waCHFNp8kpwLRam4JMvGcbmVEBTYWju18LTZpsVTFGE3hZb8xfxwCaAPyPBi",
  "key20": "63fw8PRDZswT6SGbqS8WKznBnjQhSN37RmexbafCcRdpMdmtR61R1vDo5pohMX4BT7SATvvLFix7CdZ4HMX3HJC5",
  "key21": "Zt3ehyrUcfD7keD1gWSxzA7omb7LkCC4TdPfWz8uRH93qyrtdVe1x3VLXGmj2MtXFJZGc8qRfWrX8dJUVtSjPsd",
  "key22": "5BoTnyd6x32baoLAbxaXnVoT6axMZv1Re1A43VqjKEJpXnCzHBC6v5nSfsvs2YJVa1B4MXLRD1qdSPtRfuJL4jgN",
  "key23": "p5qENTsTVLMppsTQSZikJh53qmEb2pVUQbqypQh3Va5ceBzevQ3QhMsb9EvZoY1TogjxKCc86cGhEynSFVuQgtY",
  "key24": "5EFb46CkFcGwpLnN97egfEDTJdE3ujqVhLALkLdC5GC5oq56vigXZAJ9CmqUbEd2LaRJqb5JpZyykRbMc2LgY6j3",
  "key25": "24aCGq9r59WJPmE3hQwrDqVzdAytfiNPomDuXSRk5ZAiuaGu1W45es81nuji3rkyMtCtAfJNf5bPjaeyJECWBubb",
  "key26": "3pSLPDbuG7dNWgbpfRhBpyM8GuqVq91C6vMVDwTC8Uqf16CURhJK9Ze4bkExXq74HHS8DwL9zTo6evksVXmQbuZe"
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
