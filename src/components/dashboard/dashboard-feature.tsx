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
    "2hjVTEKncnqMjCNLwNCEJaryXgAf7RjG5yTgha1mG2e6dv1U8VsLey5uif4RPudp26qaZbZMFsQwMtaFRsXuP4Sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z6yoxhSuobyz962YGiwpqRUVyYbmfEDmhtbX7W2hu6fYd9dCqptWqtXnaw2k3Zg5PoSTm8hhqWzf5rAgJNaCLSR",
  "key1": "1WeoqbHhCb8th5xyJvoQ353TGEP9soLafEvk9P3cQw9BqpWGdADJHt1GTR2zbLN1pSMmJZaWnnDynGDoXGfwGQo",
  "key2": "4hEYWRQ5GKrk3eeHHTB7pVE9bAnhJZ15Nk27K3kDFEzqWLpmrvsNEGgobnJd5FLZq2daGAH9wjQXUFmNqmYhRxYv",
  "key3": "2uXP5QYv7TGGn7ixggWVFd3Tq42iNFEZYpXqkXmwnAJKHcFzQSnLQrScFryVhEvjvePYjaDh6YW52vZVfTWCDZ57",
  "key4": "2C6r5T8ypDo7x3QWMm6g7qAPGFPCBgqeUsvvVQZNGsuAX6q8s6oiuyjbdHDuFx1nBnWko3Sg1SkHbsnrZsHSNta8",
  "key5": "3WGupVdSTe1fDrahm2TfGm8uAgCsVTuhhXNABcYNxrZTGu3YfTAGDUSJ2G1eBGv6nDR1DTSBcwWS9zqYnVGy7tJ1",
  "key6": "3TmdBtmXdtKFgRzgakUni4txhj8gaGL6ziTQgMEXvhZZAL95GdCKn4PmM9eSC7zma6PzKKv7PBE7uLk94W5FnsC8",
  "key7": "2CbCFp8jWWa1VHgvcKTESMsD6Fy5vqxaAnvcWwXmMyUjuSxQbcpJ7xeSgdU6J5YatM1ac448DcujpZESDKX2y2BF",
  "key8": "vrCmHYhWLW2rZ59AMPuCNscUdnnjjcacM3TTxB5z5zYtzfRGFbUE36ePZXcbcD5PYdhVtB6G5g2y4Bsi4WtZxrS",
  "key9": "2zpDDNvdPnFsNot2ohkZVMRLNxhfxHzuviKZCtM7oUHkNfaiVe2kd61Guq2sBd1gNNMDCFjtjbDCpob5t6UtpKHF",
  "key10": "3waxRx65sWHS1Gr4V2EQM8DUXnkAVt25paB3S1nW8HvntYaCzK4YX9KXGStjVBx5icjJDRPCgCBXudPACXK3bSgN",
  "key11": "4tHsEF4pRqPWsfAXjksvrHCDV5o5sidheTExR4AydSHhtGZGw6Rz6sVu8EPcRiv6YM8z62ZbaZT76izYBSGvEhNq",
  "key12": "2Qvq78FTXdBnzB3rutE2c1UtyCGxFcboeYETXeRbM9YDkA35oWfmeyX4uN3kt7Nmw5QhF3369R5sZLxqryCeWLng",
  "key13": "5YSDxqc7AMy66gBGk9mvn8hUvazBK4QC5iZpxex3H5hWqSgFGJdHEg9U2e42dujgKo4MS7mDU3aYg93mSbXT7RxX",
  "key14": "24QAjtizZoqUn32RLGjmpTbCHezTB9hdwtdMykRV5iSpW4LF4e3g7eNrhRkfVSUR5fncmrVXQ4GT5zBcbp7Xcith",
  "key15": "5vbzHaM8hUQzRnK5Pviw6xAKuecUfqF57SvjiiF8mjEdcDrbuHkXu58i6EuZ1vSFhgRvmFEjQ6CFhGTh1of9zZ17",
  "key16": "5YQuuy7fTnjUGs4zzg3U5uHn4moFgdpNkMenQquDoS2WiKc71Ecey42NzbcsXrLZvqGUkpsjPeubSfh6AhJvStQe",
  "key17": "2R8LoVRx5YmGGZaJNgenSm6PV3JhX9uCPgEBVufecuxP3QGMhuJn9BVTMvMKrNAhp8RdH8krYSDmKiQnbEyzik7C",
  "key18": "51KVpmhaxWGZ5G2Try4qXBfSJvKL5YA4HJBwxaCFbPNgBkZfTv68wwQXK9HDHmRtJz3bPZiFqWv51phZXnsprsZA",
  "key19": "3JmeqnwGGCupR45Z3rDJUfYY2aT1gfm8T91VDXigUQbScWhDcECFWhrQtKh7isrnP5ivfY1Njxwjjve2F6FkSPaW",
  "key20": "5rREeeiXNPngBtjMQHP7ZaHkupT9QTnpqfc6fKpC5Zx3wf9tuuWasdyjrLZeUKdtRYN2NWaYkQNCgDnH8P8PTb3D",
  "key21": "4eM1XAoq2dhF8RwkPMvKXfo2izW2U5eGvwpNeiuFzDXno9vWQ9pLeRV3LCKVBMvpDi6hGZzY6ms2qMis3Fudhykj",
  "key22": "P1P4viaTU1npwDBVhgvF8spFVckw7SnjvAfs83W2BW7sLFqCYVnh5igQ9Snq5zFqc5bfghfJBsmtRYhuGaB2LTi",
  "key23": "3jVUGCwA6eYV9YZgR1aE2q4ZbkUG6JX4BXvLFYjPn72wT4XvLLYixq8PrCYswMxs48r8c4v8ci8et1ZjpvYzoEmc",
  "key24": "34jrtnepiMpbh15prz1RMdDhRSVTxWzsFuiu8DPs3tpeJAJ8uaCH8AiHpAbquwKSjs3vVo3jYK2xpXMQ3fBuksaD",
  "key25": "2JUHhrrXa2nPQEWNfhBdWowdGdYhQcss89HsLmSPWtjk9GB7hqssntGLKRZPThsQRCTqiZ1tn9mSKYu4a43tC5xH"
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
