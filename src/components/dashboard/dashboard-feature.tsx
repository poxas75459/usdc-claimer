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
    "5qyEpJDnSf1cJuNabY896r2SJ2aSAo3baV8LB5TEsWgLVxa2Qs2Coqyz24W9EvndSM4rigSPVaULESwTqPE32mCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4964L4WPH7HyceAuG2vmGZ3DUFV3kL4WrRGdrtauWxrdGn7Thes7NHUDwuX4e6nMyaCzaSqureuUeWkNeahQG6C8",
  "key1": "2h649GqQiagFdrp9AtLb3A8njVw7MVpnmzjVmvLR5xXdnrsmKgC6VjaA5xLEZqEL6mKdmnS286RzjoyPQCZXVW17",
  "key2": "2vbJaXA6C8u1fmzyUGZ1orTCjNj5cdw99P2YRue2Jx5EmQjHMeESWD3ZREtG5saF7rrKm3LHcSUB6XZauv4UPyjp",
  "key3": "5EDbZ5Z2fKS3WP7aiCTpVRxjDMu39VrFnQ2hGmYfxpaTuEUBNDtwhCq1NGL6dPoCGX57ASFq4GigZJxZEf1L9RRX",
  "key4": "5s5LssuV7A77ZBCyNBhjFAz14AFmiujNzuPe44K8bveUoEGLeS4U937eTzJqMgZzK2Mqybmjtnab3DZo2GXVoBKk",
  "key5": "259Ukxp1Q584CNmneu5W6K6qFwWZCW8byp9RHyQGjGtmqMJrrrw27tPR9gWwsZ5F1rdEkYrwT9brfvBTGPNXDDXm",
  "key6": "46XYj2yrEMrniSZoBB1ysUAULZBBMLnJUaEqDy2qw2FbPEDQviHr1qUBTPPA8BumAXPrdeXmAkPuNB8HzZY6Qb8W",
  "key7": "Hw2pVnUcdT7GjTAR1VAbzpFJ2hR2jwHAagtpdcr3Cp6gzqttKP77p7soPeKEkAF9NwCioLguzRGeCbupQd9aZ9R",
  "key8": "28GASJLPp21n8XKz4Krzc1FwbZSufMgvJgE22Fm5Ya3Fe6PPseHt7iSbjFWPiEErtYQrV4GYvGymuHa3bsH6fhZP",
  "key9": "4fpwrN43B4rBzPR62FN6gYD4spBWryw9eWeFfREeugGPxtYqGGunXerZNLf4gFMU16wZQy2BsoxxDHJfLqFHTEDW",
  "key10": "7VqTDkVbXUEq85fHkiLMxB2Bi6XdMjmGJ2kDaPpskzWvY73Ba23yNJ7bvWvUCzSojcEsgHbaA2SrYSfJ8TfqoZD",
  "key11": "3LvnC3vWyBFu2wijEzKBpP4fcQ4QvY55cGRXe5C9iSRubMFisatct6t6MnHodZmiBLJkRHagCtDBpQjfaKEy2u7r",
  "key12": "4vpPFL8nLd1x7Gm1JqYGnuriJbop2vWzN8xFGkJDHbydJSZjbBTpY3ptr8iDcRkNJ5aEtnWRPRxha59P5msXvhZS",
  "key13": "3AJRxNzGXVGRXRGBz2XuEMkiGBQkkmBawQqxJoVJQK92TpaeZE17Qpdq1NJUZhSrSBytHNwT96xzr5nAK5Vkwxpw",
  "key14": "5TFGQ9VKXCgGv28c6wBtexnxZHRXfQQAU2bo3dM7xTYs7HRGwuMCs2puLVPe8QEaWijFXDhdRTfh8weGqwV8r5KM",
  "key15": "4MDh86a3sFVoQAJrfTZFNeurnLmHvdYefcgJqFx72cTdPDavmtq83r7jpm7J3yczgpB3DG6V6EKq9GkHfqCZoPvZ",
  "key16": "2YWVhBx2KtK5rpC9cfXAZ7j4uE31Fof123RCJnibRDP9KtZ2RpYu7vEC3jRCJ6oVSRNcbmsTA12vdhUN53pmKuHF",
  "key17": "B4S4xwiny1AKCn6JwhVGkAN2Q39mSYQrKKUqm9spuaSekD5Y7abWxnj42w2KFHywHRHmz88zSbUnwweae2Vtvp7",
  "key18": "XxMPmSWnm78RBvX5y9or2wi1Fa3faz14MzmbxjxSqN4LrbXXxENE6sMLEBqtNJ1GkLGqYSEykdeU1MbkLXF5MvV",
  "key19": "4A7puBKkT3kPz59ak4PtquQX95qwR5ZNhwXG8c4zmvMFG34o6rS1v2gD11QY1TRUyBEWCgRedbyD8isNkSRsf75R",
  "key20": "4R7zXzZFrBEfi8D9PGYCDoUADAgfreQCxiGwLWRs9xfgdEnaRyGXeuejc9sB57xvLEnRrFrcZvgYyMQC3An2tuan",
  "key21": "5D1j8M45wNVMcMJxs5NQrMQAeHV5L7iasG5DKe2fRFvJgFDmHEBdNRwtZYDuNc2B9GzaWzMcDxh5vZEPFBveSJpR",
  "key22": "3fjdXHa9B8pSGbM1ZNLHcYyRSfNoo33NSeGFohWRoGJLzaJVpBxKa4oAn5dfcVSDKmUc1SPVVXfXLKHpNGkwqsco",
  "key23": "FFWKQzHZtoKMvbJXCJ59auEPEEufVE9L7yRfbgY9VwibNTA1WGNs13kwuGxQkudEcuehWdH4xTawBxg5J4LNrK1",
  "key24": "4zVLh8kWJdcoavcQMWn1ntEQ1m1Y1Avi6EBxWCt81AQ2uF5NsoVow8vZirAKxbLWiCjovyJZ1jZjrRe3cR5FqUS4",
  "key25": "raXLC1XtMNAwMBXRUuAN5yEmjFSRux7i1MFhjTxMoeJQXHVPkCqBN7HMrqgkoMkAWqhVSfLzRK5CkdmmobrESnC",
  "key26": "5f6sGgp4i2J1vTe2Qj6jspvUcVgJ1am5voN34UifJko98y29MPoDGSiKWn7xaVbNrCGscQwiUnSFxdbcPvxx5MSx",
  "key27": "2gkEL8tdYVSCPsqDp3ZFGVcut38JVVBtaP5oEhTLnQHiyGE3sbzx76mqmLdbYfNyiNXiTzabUX66JtwyL7DrarAH",
  "key28": "3hLcDTB6G3RqhURVExeMDP1DsCSdQSouPV6bjbjfsMYN5hX1nURejxPSbbH4XTcq4MTsZEGkumHjLpfE7hSGbVRj",
  "key29": "5wZ3J2533ZLoJsfxtmBah3wfahgNeWDDjySMhvkojbEL7PLRspzSzSxVk9x8oBzHvFpxfFmNugBrhguh3nEUEz66",
  "key30": "i48u3m3TaEH6C8fGKUVRHVpom7WN7yyjCv1gdYYicU4zZGkGCzqpLKkaGPT23Hyy9zoEJ7EBG4RCNH8hyWB5AY1",
  "key31": "2MLHFxTXdSvJDEREDE9ase3nZkDhphqsitXz3Kq2SH7KRgFfXGSRihDmLWsGkM3fJBncEFjQDRWNo3dA8cznNWY",
  "key32": "4HBNtMabDYMNrVnu9JiG2uTC3ihiU6it4rr9z2jDnechS9F2XiUrwcUTVPr5NgS5DsB4ZC9BcbksKVBXodrK1AFR",
  "key33": "2pDhNhsjQGXBbJYdxcZPyfHLXwriBNztCESsJ3og5rRYjJw6eHHBR3nh2UmibChsz87XxXjGEo8BTWKbGGheT6V2",
  "key34": "2kgU4E8EbevHZawyYvAWqF8nfcVMnRx5aEQ1nAFxdir1p2iZ83jpdiiJ9HnTsdVvFQbXLGAwJ5PSa8LBBMYAskDi",
  "key35": "3HN2PJ2CtCqsYZ3yQgUESB7FckFdJCTtTJSiLBCVdZ5MXFHBAP44rKQaS1kyFEpkL3STjtxc6ACfTAhYFgqDMc4c",
  "key36": "2rWgUhTVzedyDjYQBMczwdij2iizevxjR6PZNrRNt74PkGwZU9vH6RkC1Der1QthZ1b3VTv1W1TeCdNuDFmTvkHB",
  "key37": "Wb1JoadoVR4eMHLzabvQTT8zymsxvBKuKU9q48QiCEHWqsfsxySKt7x1uenZfmMGRaduGkuaUcDSxCHw2ggcFej"
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
