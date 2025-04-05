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
    "4VXa98e5LnYabX1Zkrv3kKRHZGwYxUxBJ9r4HfnLVXVE8MvKHhaoabJDi6fVX7o1E1kNw5Gf71X1hrDHnGUBmbeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LzkrcDnoN1Mzjjbkckwh8pWidL48rY5aGqr1J9puutWtHiqAf5smxMxUFZpZh4Yd5bbS4kVoMjPzkEY3ctQRUEA",
  "key1": "3XMsVHVYJkZVcASfz7p3HsPKSbuuGV6B5YKyXj1PgXsWYdPU2jyyaH6rcosCq1Wv4pn2GefEk8uKfz3UZLdgkP7U",
  "key2": "2PmLZKuhXr4MLp6SmW8Bkh72pH2GHScNbg46sXH6U2eRyyZbGrsC3RFmiZCbvHpSW4UJQjdk2aNMuPqjsLCy3SWq",
  "key3": "49zKsiu9Wwd9mYFsghipksmGwgxqXoEqEFkbtBjuDxsMYFtqndYYPjzeHmX98DwR7kHp9xj4NXX5EZUKotQpee6D",
  "key4": "3244YYBwjnKbwVpfSJFoAtcBinTX6Qs33nfEsFeoDxzcpFZpBvQz6Ez93hjGjyvEyzK3gm6AiFT275KTpuW77nVS",
  "key5": "2QKmpjtMEmxfdgqCE18MhGkq1dRbPim5qdYibD3dVJcsj2nGTAZR4c4puwT687rH5v3GtZpwaWMX3mG8uehMcqoN",
  "key6": "4pfyuh8XNU5NVe7WVpHkacynHo2iJU2YVZLDqWdRKPoQbpNTTySup7ubp2XLtbsYATDKzBwECvt6cAaMVGZDBNju",
  "key7": "2wJtFyn7pA6QqmtmqSHicpm1wMTMxzV9fUhEwvsxouGZN8Lg8ms3yAtdGy5Y9sREW6MDTHVNj1r1Qmgodu67smGp",
  "key8": "76g1jnwubjcFzH4KScAJCE8sivDpkzaq9jCzpBjrAinY2ZzncxurEXgeW5f6kZbnMFvvZp7vjwvu2Rwu9aJhcwp",
  "key9": "vaDHo8fPBz2nmFD2kt1YfVAL6kXFJou5hqjpcATuYCTPysVwEadxFF2Vh3jwgLVNQaSWd7JVYJLfq318CFAQnFS",
  "key10": "5x7FcCG3PeJDxpVtzfc54TAFYADeCPPhyE9cj7293iNBcx9n9c2EaHD63NFKuFYKDuXk3pAkJfhcuvyqPrPC82Ju",
  "key11": "4B1FucorNNQB7BWQUQkKtpqVRRjkKkoCtvhkNUKQ7S9d1HXCy6VUCHEwEcLkUYEQRqLfDPVb4WGCNeMNZtfSpz5y",
  "key12": "581qdrM8X1c6XgjDhNSBzVn5C48AE1wv9TVmxM5teJaTE2Uj7Q4NBTq5Q9VfKNoj4DpCpCG8Z2ppUZeGc3qjnGXQ",
  "key13": "5KAovtwjUi3hEMsZDKEsdc9neYjiqB6mmM9g77cAyVg9JSWfLvXnkj4Dm1mjffYB27aqqMRxFVHULkgPq2TSeXz3",
  "key14": "2qhmRqr3bkvKU3kVaGSxySrcGJk2sbHjK6iUHYXu3byXqXdzRpsfHRVgpT8CUv1xj6kWmFmMYunAYMubGNPpAqiL",
  "key15": "5aXmkEpsPMiAgs8zfRwkxENFWN7Ljj8VsWoWgZ8mKuzrW6KCz3kxbkSxYuwxrmdf9yXpWgGRHrLrCeToYZPuM3uc",
  "key16": "22naiYj6ZXF4Q9JLpaSgnzs96Dr1PMPPFeZfM7ajHjQcMZ1bYByDWTtHKpTFCRF5EQNxSgFuQMqB3JDAs6XmxXcS",
  "key17": "3uo1qN3fpgnE8tzL366JwCncAJyKDbpapBXECRVEFhrHaXCNiE8Y6c2Zj8kignbT4tfHPMJw2zVjBa6JJK2M4Y6c",
  "key18": "5k8jJ95NHTB6p85oRz2EPy833q83oV14q7fXFk6E7qXq1gSBoSssWhGLSDAgJsi9fVrFEXZkwrtCbZw1hGMQofZK",
  "key19": "4BWRxD2vheuXC7begAKWVYmfEVBTBVP86gwf6SaUkZCghZrrqJB7Nkh38qtcN8b1tJYWgYSKsM9xd3N7GZ59Yvek",
  "key20": "5wMG8UEVa2DThhaW9X6NTYdVCcWLuLWzEkDF4Q11j8n1xfvTW1fe83Y7w2uGsNpXv3TWnjK9UPwCPwXh1suxXSxN",
  "key21": "59MLcyxXFJKK73iEV2B1Aae8kH93RHsCsKowoPvwyqbkTLto3PxCQKG3Go9BAxcWSe2ZdUH72BKMguqKgxop7m4R",
  "key22": "3NHGJtfc8zkkuZXATiVHPrHYMAH6qVW2LNtcxjmoFnRf3kR9Wgra9KQ8WSqKLpujAusrppn7ZraSqhkes5LVNh2A",
  "key23": "4ms91NpgyZRBc5BwjhiGS4pTAE3knqsRD3H5qmVD9sQPwnw39X4sWjotmSRq9uMQGrfzYyaPa5SNsw7s4L2NdXnG",
  "key24": "4BYFjaGgnEA3yP35qQss5qgHpqPaHY5mbYkyn8Y7K2T3qwsKSDaysBphqaHBiiRiQ98GCpopBw6fonT6a6otkZBT",
  "key25": "32xPxjxSsAL8KYXTZV47qA8HXojyHnpwrKx4hoeefpFcSiR1A8VqZokAb388DB61Kt6GSVUk9CwfJTQYUPmcVivm",
  "key26": "3iHFDSkfqHgBWD8JmJcQJbhvfbYyNThnuhPa9XQ2zVh3pb66xTnAjPhbRHrSe2ZafEiNk16PLVmNr1XrGSB7B6CZ",
  "key27": "5FE6RbTzR7U6W7ohgGtadgMWADfjtaHV8XQ785jAoRUCH5Mq2e64U2pvDzxGBrPjsofR8hXmF3UD2b91CWc3G1md"
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
