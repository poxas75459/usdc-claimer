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
    "2KWPkJ3pMkainrsdUqAQfFyVnBY4h3PFzcGq1GK6GSi7Xn52gWh6ZHrwEriUCbL65zGRJB7A8Dq5j6SbKFh22U6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b9ph6YMcKDBPmzHe9BAxzu8kuzSBqMHeGeky2iLmci3rMJvecJ42BfzRveucEAu2yrmUzpZ4Lop2MJ3AZDXVr3G",
  "key1": "wk4Vzd8g7foS12LjRWDnoZLYQiEHFMHr5R5e7Ji6WnwMEv9BDyAL4ujUKM9YbJWg2baz3uenGSk3FKjsuyrHPwc",
  "key2": "2JuKNuDCgJTpNqCpAEJXQDyJNLRzaRYHQLZTQzcgPDc3rtJmgk2KJxY9WQyaGmxApMxZ2YG4UCfTjB4fvQMKWda1",
  "key3": "5mps15ZatspTXrwwLht1rCTw1ruFvM1i7pQVo7oxpfC34m2HrH5GA69XedLUdzqegBadurGk4StxZwUJLpjRLs1J",
  "key4": "4viU2DtQsNxHYSGkY8Kr6e61pmKRHPXrPJVgMyc1NJ7zS5ZpdKdrRqpiRSCb1V4Yf5VYEU15TWA4WebcTKz96aDC",
  "key5": "2zwj1wb6rFBX3vVf7DoJ3n3iSorWvUx6JuR78GMRKrarEbPNEqYV3PPzJNrB825gc1GjDEMWGyUaQdK882gMMCcF",
  "key6": "RY2LjysyaACjXoENS7EHWjN87rJuZJmhyan2RUub7AQ979c52LkQV73skgq2WjogydwUCvX55L9bgPrWXad3jGx",
  "key7": "45x4hSqnAXwAPysPNdZBe6zt4Szt23WEHL23Ur5T6ZQ4burTaV7n9Nxq3r4YsgytR7r8kpWDUB2kMMTCJ7T7AYPQ",
  "key8": "2GXbyquKsuokYW9H1oupcRwyHYYffvRpDSfzuhLiQf7YV4Abfv9ycwDV3tkEWXjVpArQ46aYWDtXQW99WeLxsYhi",
  "key9": "9Ap2X9uyRSomhbXameuiG8htRDwREHYdp9U1ckNqCoVFtvcbYGGaAoq9zC9XTkd49JYEUs88Ma6pKhHXuyx9hyP",
  "key10": "3bC6SiLXUhXHrqQwiu6a8yPUDW9XivhPxWuUWFu6u9sGPk4JR9eAULsbzriMt7tfSmzCWJs5HjaHP4oRK9DMJwAs",
  "key11": "3xS1WACZqBD2KAdbPiCZeuqLSczJNpygPXKCgX1qvhSYPKMFWjgUofhhdUYntKTGQKwNcMnwe27zK2RX9a6L2bJC",
  "key12": "3C2hUSzSSVWnUEtdwvNqD5AqdK8icPFGGgS6YzyU8a6QNzfVPHNTx7SXXevggif4SnyrQ2k7aC4N2pwD28AZQ3M4",
  "key13": "4TZxhwh3XprT56jKeyRpWorP9f5hDTc3Xz4ki2g7KqYRrXM3YWBwFbqZuKd4LFWdFjy6qGHsPV54v3Qiev3U9WjU",
  "key14": "2HuiiJ9Z1LzJUH3S2jAvJVT1cQ1zZYJ9AGRyBixP1eRYrpzpMoYUEqHM5QomBnua6gB2b3m9YV1z26FkLCwF3Fi5",
  "key15": "2MynUxyKPQGUrrm8oWKPWhw68HhfdyfTxDBnhP1TJ4Z1LMFwUVastXWnHQmj6LC26LBV3jcfEa1Wohr6eZDSnsLN",
  "key16": "2svyrx68PP2vfSaYiiEFftUpp8kWUweBVN1zXvJDjW2wfaYYvuS4Ka4EsN7xVv8th3bkyLEWeZRTixjjUXfSid2A",
  "key17": "2xYaPTkLRNSpMbeMDtFZeDzyC5LAuBPG4r23dFhmt3bcnXtwZYg27TRzV1hvQW1p9VC8yFaBSW6Lk1pwh7NjSvbq",
  "key18": "2aZQ4Yv3ufkAnSsFYgJ1D1Qq3V9ksziybG5GoYDdi9ZkufDzMna1zxYAgmvuSDeHstMtyqSqfdVD5SKNhiLQmCS9",
  "key19": "4CG6oTzqWXsopDQ9cQtNVZm2hVfi5AcPpWJoDc9xhr1UT6XwUh4y1cjycURDyqnVJEotmw8M2tn5CheC8RDN1ViY",
  "key20": "3o9eAYiW8Kg3JjJheCQyPZhGYxD7ToYzQ9dxdUE7ccKRBKGQh8JB6SdtmJxGexFTkPtcaBnKoEfxBuzAoRe9yNpm",
  "key21": "2j8EDcRGPtf6J4beyp4RVe8qjcSKVVDCWuQ7if3g3wtuXpenugxLVUYTX2mS7eRPkCPWHi12DP2FwGbt6MScGW9b",
  "key22": "3rWrTC9oYBLvy4vpukdNThP2fQHnbmzwRnT2QsZBwqN4qFMUBVAKgX3wbmdtATpeWDnS95RxeK5fX3pYEMqtmb4s",
  "key23": "PQP1XEuxo1oXznuq5CEzVmBWoLz7oPW7CVD1JnE45UBsNQtc3y27gHtdG1KkfJ89zJMf5jPT8GhiW2m7wu1xnqs",
  "key24": "uiYZzeFDDrqx4omwBKCVcx4iWzmaEfppeZe7TU5aMk6hB9YvffN2LLHYdCCGnXxcg99cQfaK5Zny2Yr1JwEBBXr",
  "key25": "YfFVMUWsMqyTK7HfNdJPG7mfaQwab9gBX6rPgoSndDH48F9CiuELi7YdqNGWQW37L5S9MYMuU39kW5Yx9dro2SQ",
  "key26": "24KQjm8LnAbhWoqNEaqsCVaPhcDUkDuDgNk64sLi4uuei5W7D8DFkRNqzeyBzj5yAmZjhVDiYhXjknrXHwpfvQdS",
  "key27": "2Pe6vfHqan2cDg1gQy4XQQNKjkMjTRVyPGfftLTtm7yMhKNtZWuntvQLeMk2tCg2EmGFsmxxXKmEjSDSf3i1Lms4",
  "key28": "3MokwQnj6b2ssg1WaiWbhQcVpVYA6pdmhW77tnJxXyrvWec7NWPABQ1ivyzMRn4jtyJdvHuTrQhB9emsQyELJG4f",
  "key29": "kcA5RpCrQF6UX1dbtEFteeCU6cW28gxmT2aYtwgytKk3RVrEettKyz6Vwuf2FMHCTMaWSLevePFjWDgjXZDDQ1p",
  "key30": "3xM6uYbGa6GvQZaW6s7xPbQiwTsWj6kGcn98DoLTUjVBjQfhVjFfjUmdMzHD3DDAdGbEEj8CmcWiR65xgNB1fTji",
  "key31": "5PEXZkFecsR3oLRWCKRxPBiYedJRRcbWjnkf2jzHocpBDy2PRvd9WE8A375pzengwtedkm93tdG3w2atMXuS53Mq",
  "key32": "YR2CNwbkY9VtB7sJYc5fmSTr1Fme7knFc5GoUy21U3afWBj7yA4dwCe7sc5QqV5nKwiqwY8FJ2gB36SocMVfeiU",
  "key33": "37QsNkHbUzRT3CWis3onXiuCs7AkCGuw6yBHs1zbyxj2gSwX4aqdcMb9iTvNU99F2ASxMUMrKiqD2LWq78iFF3V5"
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
