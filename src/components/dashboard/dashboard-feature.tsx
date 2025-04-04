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
    "5f43UgvQRFmMjAzxEhihsXfoT6GKVvFbk5SwfJ7NpfWSBao5VHVRTVDYmUnZQP32gNawAkCWrdagdXVtaru1fQgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSEqpR3M3ZKYmGTMMLqH1nK3uzW4AjHJD34c7mYELgJEXhkmqtRv1Wi7oLvoNY4CpN7m3kVqVd9rRzPUmE263dY",
  "key1": "2ZYaCTbDsYshaGM9VRYjphR4vSV7aaXCk9VBbuofnq4gUqABVxiJ23u7xrjPfBNR6wRzEBHNeNBHvEH4ZpLLZckT",
  "key2": "YbsLxw7pxBrRoy8ifw1McXqk6aK9BXGXXYeRfa4P9z3MKaJBNU6kiTCSXwZezhgkSDhZR14aDJTWD8QphGBUd1q",
  "key3": "4GWQiyfDHaxztgK2bnCy1Qm7V7e5Uio8jqqFSzZox9pqApckTQgnanywBvwa4jw5pVzLCBYAQ9d59r7PfZTHuRB6",
  "key4": "4Xk2jPKL2rvdRNX96Zzw92XJWnCb4XETLEGUfs8kRxT7SoMpEF38gnc1ePqVfGPeEnYUwxjw4DQfrBuMXppneUPF",
  "key5": "4yPTbns1kgN7py3YCRvhtL2yDaaLENmom8VW13e4bUpCxWLTzGnn3WdDdUczpRnYPXMYQW47LoR6d1xsG18YVuxi",
  "key6": "fuWSmdXtR1xYzmdER5VEdMK1Yq6Zz9wP1dUKEGLaZ9XRDDo4QWyjWGTtbXS5AzN6Ae6RnoCCwiWJrbQ5NsAEKXV",
  "key7": "3qv91pGHn3aFNxC5Xd1sSNQ7w32aNZKPPTfqvGYSZN9jmTot82ukEdNVihFEZTxcQUWd4G8e6ijrZZQChnj4K572",
  "key8": "2ULfbLWEUCwCuNZtrnnig4coKfAPxYeHkzgwCQAtFbVREucxUAFAU5V3EZri8Kq3kLDUvzvxq7gxhSu8QKTkVi2t",
  "key9": "Bps7Y9nQMqS3mf7hNphcWPSmfSBAgN5Fu2LsNSk7LsbwrdhPJzgwnkDBR5KUsQJhvbWp8SPPMLHQbeshPR8fkWW",
  "key10": "2nSqSLa75VQsZD7mSBUU4U7ArGPbYGWgbmnBGsWBdKJjGpzDhS9LG5Tmj8LaBuVHwmnSnpCRKEnEtadfHxLzGcNE",
  "key11": "4wPzvMLaKxa2tuhYyFsGuekvb3xLmR8hc7BGMm5FUQAKKcURPmWFAVXto5pksNsNxLDFx2m9aphxfUvTMCtSZf6f",
  "key12": "2M86Fhyk4Hc7n35KGABWXfoXJfHBQTTtkA54nsCafEezZnUQ26KUMxhF2BYhB2L2p3B6NhY2hYh9VYLF4WFFu8c6",
  "key13": "x3NThdXMjjfKkTQoTBgagzB7oNTb24PWLdVLuLgL2ud231esw4LveYETvnWFTcvySbtk4SZg64NVDt3Hpe8ksyf",
  "key14": "5LJeNYoLosMSEcets8CmFAwDh3T9PUSLsNo53jp3Nth8BX4q17b77CTcF1seqpAiohWmC3EZkh62FsB81orXmrTS",
  "key15": "2cZ6DPvW92ZZkqd5pYXq45EJHYsKQMZdoFmbchLbU6kA35DxMybYYHSTJWY1gXsqprxHp39YKzjJAF3RQXwLz4tq",
  "key16": "bnorBQyKbRNMtPRTpi4WAY7HKugscj8Hb9v9HoKsfZ5AS3nCdP5ZzoTuqXHRzchQ7bDDsd859E9jeUARfBNNDnX",
  "key17": "4W2Db4erqchbDuTpgdQMweo2iexVtWGkERbS1d1BJwrdTuLELfNqNeZ1aj3Hse8Jyx7V5t3HgNDto4vdDdEamEpS",
  "key18": "4DRAUpjupEse7ZQrPMY6LPqu89WEB1eo3sNqDk6BLcGwAQgqnB8mznhyNgW3Ye9asBjChJWdGJchnX3DYD84igUG",
  "key19": "2XXuVwxySBJYfprAPtzvLMs22exGkeQxfCGAHikvMBxYSTbmL44xiNtzNc6NMiox3Mp4WkDCuWo3SqBtqpPRhief",
  "key20": "49kuWyB3gUJNXwJfsvUEGeiLMXgTpu5i6MwAQzYHX14Z7uT994j3AdZftSq1Tb59jr6sauCx57QcH6YHGtas1mFs",
  "key21": "3exjK9pKxFNucGYK7BpLoGNRVRENu2uzUGVs6ZHcXeXunxWafVW6HsFat55jjjdii9fVZWHHistyPFJ56Y3jNwVR",
  "key22": "7ik5nMZktMY447wAfCL6eQiE2pNET7owd6J45w8uMAyYbRhUXipdiK6s2bp1c3hfUxXt6jYPGo6XJRpUd65PgL2",
  "key23": "2dQUCtWVn18dpNAWZ2RP5NWQu1uGW6ksLVjXuqkkXsCPNZLLwywitiaio5Zi7CDAsGJ6Q8r2SFgCFWbyc18fsxwR",
  "key24": "2KDphqyYqGWwDisW5VFk3NS4vTQDFXRoY8DFwSyhojTJwViNm11GJWQxwCqmGBnrWjcD633sMCPwAbFpcTnbA9Fu",
  "key25": "35b74RvKd1WY3qWyqgVWEy4LBLTsyzoBx7T8BS3SBihXcqqEkodyeX5Pjy34DuCSeVUSahuyQpVWE3PxSku4WuR9",
  "key26": "3Rc8cNiujqShAWxWnw9tSyL2H2mMRj44LkfLrDZhUefgNExYwWvzibNrFSaLYSzhAdrgaETvYrtSQTffpATYxiF3",
  "key27": "57oeRZXkVUh77g7f9TKmpgNU6Mx9VD55VJP43DiZUEZJW7EuuTq3RoRxftZU1ntoZKf2ZRHeRSpwJwcSf8sQAB5X",
  "key28": "3YjrWWQujxHqRxvSHQa3M5ymTzoyDqWURgihrYwjoT8r2fi4cMaZaHvYLsDutQSAFAjNLy6N7ij7Gjeym22UZpRK",
  "key29": "4E6q66dDaVQJSeh6MFpEm4Bz81H5uZnSXJ6wTRXx9BgBKXKZjLTdizayLuUgNYqrk73frW3QPwqAXy1cfJq25Cpp",
  "key30": "46txfmzy6fkKqwiEjPpV8QVJtWAQo83ToTdQP8TcAmjKpVRR1sJa3h4cQWC1eZScvyQNZqQvRg4oKtWuoY1qNtmx"
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
