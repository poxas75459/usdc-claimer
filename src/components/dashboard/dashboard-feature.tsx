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
    "3en7ehbRWu6tzZtQbughRmQyM6EAHSp4tDVVn1YVDmCsk6xbLuURoy2h2D4MLxHk2UhqroLevHbfiMpnKBdVqSK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y11ke75hRTXJV2MhGTJjLGbr4fvX3Pq3cP5thV1QWRT7ppqUGJrHvvAEHVLLQDvnyp2GnHDVKfQuoAwHwXckGRV",
  "key1": "31nvrQw4jdP4PGMUnJ7VSsZMTEg2QeSNWscxS7oXW6amD4ewr8GpUgVWJ8QyPU1aBVMtnekreHwHrDQMqcvgiPZX",
  "key2": "5RFNrUuwS1BxPHJCGuhpsu6HhAZUXKPJDCEDhmijZMya9YvymTv6WE2rge6ibu2JW9QagynZGM6LYifB3R6Fouyd",
  "key3": "15K7uAYf83cvtZnm8wak6RRJiexkhnYVLFfS9ACR7VKmSdsKYuq4X3kAJyqW34rvqaZmWNC6c3DNyfb1iFATraR",
  "key4": "2bk21QDyoqxADkYqGnJrx6jYEEKhgQDLzDSXKQb9yLy51fuJuenvuf3MXeGPiG6Y8s4E3QxyAcFkBVMPii8uRqKb",
  "key5": "xQimuM4NACedyQtHThr7fPqALfYkvttnQCuCkE3LD1krsA5gpMYmhcdk2WFf4ReQ2PZ5Mcy4KVBwykygEQv1i7u",
  "key6": "nb5LH341xz39yn1fgMG9MFPGvNAucCKaQzY8dzFVaYnQFtVZdBG6eurPbSMz7AmYfswe2rxeTU6mcWR2bo3ch9F",
  "key7": "2fGVSwiu8ab7Uxkeyg2qoExxAZhyLSw6vdhr2aPYy4LPnv91AfmM3EUffjN8Hn8DCLxPRgMJJR6EjjPaYCXBGdUH",
  "key8": "4WtqRzALEPfUGXj6r8UMsyti9kzr1QvPQPFXFXvWXMwVE2eTRZqk1vwn3eRy8fJXF2et68xjJrzNWCz8ttiLfdSY",
  "key9": "4FvqREZTmnjPAuE1WqHzcbMvLGWq9bKspE4NK79xCWuVYNKFqFrQ3xZxHQo96rzbZwgpnm7x2b2nnv3Um7cAULLG",
  "key10": "5i2bUMxV1Yu3GsbQ87hGLX3WmP44ehEJy3wMvnjYuUnPsqBE7T5C5CAZmPjJWRZ38Wz3KdbgS42QKKXrDuEYCjax",
  "key11": "h9VWMNArjzsmSwM7vr7VKUe5PoPuMvdqZYM3NyXxf7hktMPJhoQeqVRJDQTebkEgAxwZqii77vqDkJPyoGQvHws",
  "key12": "4TU6URa4KQjPa8Qk7nZrKHpVh74JuzUWi8ii5qgMyrnjfsmyxUM9pzGEb5jyno72FW6oHYJRuj1age9r9B6egShp",
  "key13": "3ePpsoGNehRposjk7b8r6Fe62wkCEoVgdgNURLogo3MXPoeReCqP2X5gUMHsZ8w1axb4GRcYnyDAcsPEF9621six",
  "key14": "AjUhDdCtQktEzkW75ycQTXrbvvWqoLNK6jDr3xG2CFtdnzqVKx2ZULTrKzq8sGCMfNL4PQxg19JiwCorJAkBgWz",
  "key15": "2KyYmnujbJeKXVRxKNP2FR4fMyrT5uNpSz8yzbLuSheMH9xYTZ4hei53nUo74NCoj6kAUs5eKTfgjJEd13EbnaoZ",
  "key16": "5dwG8gKRny4apK8ffSvRp6T7yHGET6qUEmVct8v5qndHWz6xhdy147TjSFNgcRApwWmtvD5TRUNxCFKsy3FrvEH7",
  "key17": "bcM6rwsrTUyXf1y4L92vjNmvTejsKwSusowB9ASXB7FoyoiywKwawWDisyHXhG5ian4nMPVe9HpcRy8C7LrMQBd",
  "key18": "5HahfkhDkab3t2fRR3H7DC4BpWUnKFRJVwQBLopWmA4dBfah3Ef2YnRWyRdpMGcSkX2kqSJeSoDMqFa4e3D5LbM3",
  "key19": "2HvKzg6J1f2LEhC8EeYjE2j9hHREnqKiV7hHHmVKXiVpsGDYjJPYxpT73jaCZEGhkobrWN4uJpXxaYn3d5Mu9rt7",
  "key20": "4xmJtc3ZcmFa31vMnxVZgZsQo4rfYoyRWKSMKYg3TPVjHnsLz4PAXiu1wmC4cmixmnhsLdXF3KfxSovpNPBkj4NL",
  "key21": "4vF6Z1dPsBahdwkKwnFaEpc8JnRS86jmxEdW6ToKXxHwEKbbYMLLJcRTxHYuCXvNiLa7EtLRVVXa2bpZiZB5kZT2",
  "key22": "295tSbf5M8MnYqX8neFJxuHuunx4abkqcpuxwtaJmHiheQn4DLysoF5b3sf3TCQQe8D5TBspKerHkgk5dSEcoY7L",
  "key23": "4gQCokHXDnwqEqJ9NH3amoFTKA9hf9YqZ482mBacceX8T7eiXAE85WCjVgpmZ1Uyj3sdqu8Abn46hWP25PYH4wg6",
  "key24": "5qmN6QCwdjWa5tPDuMwhAXKTuuZjUPofZbtCvyskC79T9tkBUKsCPADLTU72KZC1LjsmnTri8NnwksRbA1bKFFdj",
  "key25": "49fCAaD5f9HmSt6nZ3peVruhSbLYbY8JG5DNC2B3FGjywwz3kW6Wtgz5yw5cJaPs2yhqKDPSjL24K18jPv5GQvvb",
  "key26": "1266P7qgj6bBy1utTJu2pBibfGY819rZbvMPDdBLYAqCLCB8vA51au7ppPDRvzzwWS2epjCA2z3NQiRQRohoaEtG",
  "key27": "3bwahFdSzeTTt4os13qpsmc2Ytcw26AYm2uebLiiBc9fUyYnzdTqc5JN6mrv3ZcuxBqtvZwP5ko7D1MEbf5wFcVa",
  "key28": "dRNnt1RBLBizu7ad2E7hxb9i8pq19HFuQPPcZUoWhV6vJrrtQmg1DTNjXJ632mZm5VwkHKwuVbB2ccBHhsaZVXW",
  "key29": "32krvM8B82BSHo7Qc8ik6P3fRAQjTGKGwYKXYjZsxcShiGHjsRjKQdNWsNMhJ52DbuD5vrTjHSYxRBwG4AbHqhoA",
  "key30": "2WteA2SZYVhkkWfqHBnJaymQe4DvDSRwXtjKE9WUXTLCS3ka16F3NmueDwJPNqCgYWZijkJHq7xfKoDJTERq19xd",
  "key31": "5Qyq3ygKVMBGPnGs3GVS7EPrA68DgkL2cbYQmhqsQ7aRmaDnHUfukL7YpY1XtfuDj7WQ32ki9wfHeENjoA4ed36M",
  "key32": "2enQXJuRF3hwwRRsZNr2En7qaVueraJdK3sZugnZLdG4L9BfRtcopBGWXew6y45uQ9UKYewM8Er6jmgkupFA9TSN",
  "key33": "4CpEHzMpvbD11tMJUZ68hKeYBRU72RV9ZYHSjeeSmr6shaMDGoH4tSUST8Fw36dLZo7kSqXoDG8ZCAX8T7kzCyCr",
  "key34": "5gsujA3nu1aJ8a6PAjsHGdEV2fEQsx5jECBq7W571xEa4pmS22kYg2nEVfqyYspVdfBerqE3Q1wXSTkEngw3nSsz",
  "key35": "2mNkcuHAC2Q1PpTULAoLuJU3zYqnEyqoEqKxbDJuZSnrP3hUVacfSp1PVbiunTfDabJ9Sn1ws9mxHaxYEPikcVet"
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
