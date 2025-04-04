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
    "N15PmwTSULeS42JwmVCpBas6BRuG6nfvJAGxgUyVvMVjTAmdKwqtj9HnJGEAbUNWkZ1BFbrswbaf5mw41WQuUkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mTqercRXEqSDhc59aeP3tPBJxsrEwrmFcydGjDgpMtDkCyKEP5qBcvRMMa37S3w18zqhRwc4ASXjF6Q67snRm2",
  "key1": "3NV5cN9osqj6U6K5F79T1VnCcZ2M4SWPBq3mWhndDKVsAAecyDJJD6RVcj8BVmAm8n2F6g9auehdgNq2jNkApAxR",
  "key2": "5gQHu6QAJqfExLXGU2CPPWjDRE1qF7SaKPyfy3e5HHsm8L5uBpaLuLLGnv1jWDAW94v3cW6LuGGLen2Leuv8Ug7P",
  "key3": "dyPwDJ8r7tmP4jrQJb4sucK411DJvg6cj7i8LLaajiJyCM4i1ySikvAiDhj4S9ni4Bh13K7HSsprH4rVWpTUuz6",
  "key4": "4qEYpcPXTgR2Y65SdKA8i2FeVBjqv96A6KVywWtvz1viMFeoAHRMF2pCeHWfnS3LgdKHSGisu9gr92PK1Si3iVxA",
  "key5": "41Pp3rx3DTrU6KJZGwPF2rFK7qTQAcDVUPnpy7xZDecmZXQata8oTVHoYphFMaiUuMqCsNQXBCdekCvYS2LeiSMF",
  "key6": "SWdSiuo5a3vDVjYUqBXyMJrJbTW9kLuho7tQp5BAVQJm1jWywBYi9TuohTY4imKrqmDeWLSgiR5ShTk5cWXtgp4",
  "key7": "3f5yMRxBuYxD4YnPxoqdZLFYyJVmp3quE3UmVa3Yuj8qqsjXtzDcjdirh946KRB1A7pdVkaXruuvRZFReqAHxEJc",
  "key8": "3pSBvSYXiumc3r9oZacDngyyQb2gdZXA552K7okAn7jAUL657FAaDpGzRmAXBxSsusmFnkJEiVSjJKBP9j1a9cBc",
  "key9": "3kHrY9smjipUxcj1bmmVcWCbaWwC1ks9WEvAnsggcGaeTbnDJCZM3Ce1pfBd592UBYYAwdoGuBLDozrjT2SFcggj",
  "key10": "51GjPxQgd8P1h61nBFxVmg4TBRbZuVk7a9nzv5hHXoodAsebWHeNvTAVfZiZWQAz7HscdWJjsoRFQiDk1zQFhhQ7",
  "key11": "3K9CRjmsKkcXFMccnuSM1YNXtqkhTJQTchGbJB8ZHRMhBob33byFYTBxqBiPpBAqH7vRNMWoU3RGxNurUerNWxog",
  "key12": "22c7yxySSqTvrkn3tTRTMLms7SCEGPR78h9fqZpR1ncpxWD9TtdN5F67NByMecJVMuWd967zPiuYSKDo3ihTFugK",
  "key13": "23xbFhZCD2HuHohcuePJhmf1CVYUdkGZaKVFtNX7uNRb9JPWqoHJzSZoAZggX8ywhq3fdntqZLEzAGAvXTToGpxK",
  "key14": "3UZmtyydeeXHwg1857h8FGZknPDhdAwEJqTMUAwXVSUn1Se2mUYoFWdPcvvJwVjws7PR7jUQP8b7k8LGrGxPTvgi",
  "key15": "58GnoUDQ1L6B7sVE2yNJ2BhsR2EJW6UjcHrA22pJTbz9knmBwR3LAGd7JeKnSqmE27gTSgsWHuVyh6xBhgmHKxB3",
  "key16": "3pVZx3PQy9SDfx5jP24D9d5dhVjB7AuWU7JNAHY2uUVARYRSG1FkvZMFqj4gvTZJgbLh2awaFARoWSqWQbbvAwmy",
  "key17": "5rwKcmVRi4Jv3cfwR6icec5hEFBPvpuv3RbdVqhhg4gMxufTLjyc2kJd9SQ3KrWwGwd1qocBcPh7jVCpHgoPiqnU",
  "key18": "3ehwJDaAU8f9mazHWkTRN26VoZ3Fh7BWJdJoNbyQFfWf2CDhYN8A3NoAbRVRRTLuZejmMccZ89WXCpYW3m5YBp4P",
  "key19": "3mnGP7CiAD2eBtEMjJWtxEFR9rjXB5S29EV8fxhW3fhzFxcPDSe9WrdrcUsHWwoaG5z7ig9fp4fSSEasQH155oAz",
  "key20": "5NQjZ6EqPwWXRxFmTY8uL8MuRACeC8Qg5WFcpkR1KJPamEsxRGvcAojjjqyvFyFe1KRdA2opTm9rNca7Prv4swqo",
  "key21": "37FRBPcVM6aEJh6u8VGvfgSbqh4iZvRK1hgXXKHFFX2iFhsv5xTEqq1DYo1SgpbUFMqnQopWZQdXde1jCgGNriDx",
  "key22": "4yfdLzJkBTYygvgZiCihMRQ8NAXVcXd1Qt9nBrorH9ZJfgSHC95RKCD9XBX333iAWWDim2Zz5zw2WdezwqCvyWR9",
  "key23": "5op3ix56UwaMFTdfXBj7CqEuPi2tQwPiZtMkDsfrqbQ95pCLiDVrTqKDYd3jip4ajnMTqSDB25K8TtVjFFbjcSxV",
  "key24": "2tjaaXycjpKbvB798nPsRd9LopRkQS5ea76mBHZVyeWkUJfXb8MJT4TH9AdieGZupkrS1TGfe79kisFyEr5besbr",
  "key25": "2cJtoX8iVSfBr1XipuvHfa4DStLjHZLJnBYYhhkQzLQVp6oVq5rJJnFhdGrMS6q2gtjJFWdg3nf6F1mz6sXFH62K",
  "key26": "3jFwHgMmdyAMwu5ijS2XJViit4VoutwvzrA5gSnTNVdiNymwdRZMuGF7XuXxnREL2piSWoEjzJt1wtWF7o8kq1kU",
  "key27": "Jib7k4cKM7Ndnz53cpPMnUntamWqAemgTkdp7JNDVwrtYBmQC67ff5nvDuy7NauzF7B3tQDCfCH5TYGhj27zm2e",
  "key28": "5dMWryrbBH843wAztB7oaTEGUiupFS7yEvV9bRqmJju5xpBpzzkrD1Mh8Bde9zeZyDCawrmaD3HsiiEVAaodpETr",
  "key29": "AsxtXj48svsYj8Zfz9gn2BhkHskixssKYWnHKvDsdbUUh5dZB1wR8DtYP8hEgppeJcFEgsXN5Bea2G6CWcUGVNg",
  "key30": "2kNqW5MNUogbDHKumVLutaa71eyuTpQEsQatyWPFm3997Yxj7yBuw1fdBCZjsEdTenCk4Nr2XZq7ATFxQW4gibfJ",
  "key31": "CCW6QaMoxpBSekLAz2XPsSgLj6U8Mfvmpn7sw4QjXPHPiwRpv3kv16n8YsNxwShbWBb5MqbAM5dWGcxNUbuK9d3"
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
