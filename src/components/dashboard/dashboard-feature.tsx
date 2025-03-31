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
    "2f4jsBhFSs9YQVF4vpFB6WwdEyoFpuZH9KprQRK9BAQTopji1seMbtKtTzTnD1Qmt61LpGYUSpbrAKc7DBuZUrPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uoBW5ccy8NXuJSqHSP21Pw1nR247ZXWpwVZGtfCkP7EmdaYTajwaMMzJeYReFcGjd2XuHoUXEv8jZPMA8LTuhna",
  "key1": "43vqz57worwQjGaWWVX1UAMgqZWew2ZDV9CgwCdhYJat6sYSWTtJsiGKQwjBvP5J9C825quRKfKkxyzkedf5TGKH",
  "key2": "5WkpdxwnGbMgRn3zUmyrX9q7dTVWbTbjL5fynEUYUo3c47nmaMYyiVrrc47QCx6eY3xUaji2W3LPLdDJAssuQ7q9",
  "key3": "csm9hn3wMpWvDyr23vue9Zif37wR3M1a7LqNAMJxXWSyUut6mhYG6hmpiC7nZLXktjAwVJ4mPRVwTNPT2EGeaHA",
  "key4": "5SQV6TqyaGJxC6r8LbnToPprgL6MVUQr88JZeAoEfbPzsg9KbUjgqQuALE3sku4iHqXJG2BHZYG4DnougS9MCdMm",
  "key5": "2oi88RYqrYQvF5ob8LzpXYk1XHgLxyr6p9HnALEsdCVFktofzDpe4ECG9fqxzMk82oXGvHLRywB7prijPkoBJph5",
  "key6": "XVoCwTAnntZYWasSCeBPb73xCr6V2y8ZCBAryaYWHBp6ZG4EkZWTGxbRZhJ5ZYpYT3Vr2Kizvgv8uhzBcemZhE6",
  "key7": "43ghxa9bRfWxFXmDb18owF5hgpd3mBfAqv6AUx7ombEQ5RLGPF1zBaDKhoisERvkpD2sW6MASvapQSeFmEJu5rTP",
  "key8": "5Wo9DRAukfTBCJdeNGsunkrFY9CwPKPuZ6WpVFVdkkKtKAtK1abz3vsJ2fS3WmSLg4KjstEkVh85sdGMLoWox6XQ",
  "key9": "WwmAz321CKv9DY7D5BdSWEPbPNGEw81L44XcJ9W2cbE7ZjbZS4uZnJc6ty2GsKWuLqvymCZPLYS6p1H4q2hhocX",
  "key10": "3tmwPKTS5tpBanCLFZEhMgBjWEPHXSWF7vsn3y8rMtRQKNxQHvQpq9oUqgUzgZcyGgtyEJZ8TaR6ERW2RboruLg1",
  "key11": "4NpwMRzD8V4Q94EUUozjYtAWTjKf1DHsxYxVCQ4J9yYigCwFR93uYMFSAbEnjaQ8bnfcBnwuAjJVmj8qtmWDE85L",
  "key12": "24EEp4mgMua53ordaE4DgaLFZ5UyjGvMFA5F4UYV3iB5XSdqC7JYFGwrSmyZHL3AMH5fS86iTFZqKevXsRVGYHFT",
  "key13": "4Z4DiQBhSKb7xvYtq5v1eB3bXxwsn7R67U5BHwj4J4t8KecMsRZJm2iM3LoaJLRqYrc5AY6AWd5wUds2BDFKrsw8",
  "key14": "363uC2VwPvqKGMoi1CkJYk2ovmoay9hEMxm4jPHXj465Z2iFUs4kJwQwzS5LhUEMEfgUFQeBAAYgsaR4t14XTPEx",
  "key15": "2VmHBVngXrJWDsPqYrdwZvnoT6rHnx2jnqp57gBDCGtKSiPMV1xdKMpQyUGqf46jxkWAhugfyRiQpdWCH29AYSFq",
  "key16": "45p2Fw5LyNZ4DY7iZXoh6tFmswn1SUro6ezwmeDMtjaPHmHKYW1SeVPZGiuk24uoUeNxuWsdvjgzUKziewDtd1bh",
  "key17": "5HZkjpR6YpXbgw5X9qWyoL7jPDYR46E3UcMCEdwXhfHyht8njyS5sTwqTnpGfTc4ZcUxbgGRRDUD5PvzeZvzSxHb",
  "key18": "3j63JjQGWphGox2tgVuapUPzVSgVPf4tUEsAmWwrC8sZSjnk5L7bppDZPKi5g5k9JTN8jA2X9GCG4yDjAMjywFuL",
  "key19": "2Vo1bQKmJk435vPKFYU4aSEQog74Ha4XmoqLd3rw5mpp2u6SFMQFRniRRnvKTFnookuAjbUqNKeF6ZyxjsixDG8c",
  "key20": "3811ns3xXuDMRnGwXWhYE8iNp9BvpnT3nyruZrwr9jpQ3TkeFiRZc5ejjeZUNAJyDbXvdktVkpHxGc14NCQzn12x",
  "key21": "2FgAD8TwRW2aqxsSK2GtPisG9Ga2sUDa6SejCKx9KpvYNwoQRZ6Z4uPQFgcfTxFx1tt9GuxC7G46mF9pQPdbpgvx",
  "key22": "YfL6EAwCz5nsFT6qfJfqFLKFfEJi79omMpUvqHCGqE3rone1PguPRi1741mApwNjXxd3QHUL2CgeA2tif2FYbRC",
  "key23": "ASH9sMG8yZJNP9Zsk7z7MrdvRoRstfraFQtTq2aV2NVUVq43CMQb9KvQ4JmAT2rJ77bgs26U9SPSKpX5eRcoqH7",
  "key24": "33yUxACGU9gDEV4vwsiKCAz1HgsoqFG4fzsDeoATvxsZvjZqAAUxnBRreGSKu3gjAgsk8BiNFzSWxZSmxPH5fwLC",
  "key25": "rBH6sk63eGtj9ADxKMdZFV2g7fs5DD9n2vzMmBimEesvq2iBhgVTuzoFvaaUrBVZaMfQMg7MANdcJUJUppEt6Jt",
  "key26": "ADebTXH2utBja3c5H6xJ7mzT2cxLczEmsBV98GvLaKAjhjZSH4DouXcVG52ojuSmqHFXDGeqFAiPjoq63WTY8gr",
  "key27": "34jCX2mhxUkR53122Q3krDC6akbTQZ6shYKMVdcj7XqjpJmM5gNss6FCTCdFqWFnrnh7rwUZFcXo2eKgXGqsKwoE",
  "key28": "2EVA4P4FC2uoqRnpoPVKafpW3DLcQc7A5vPZTH6iKn7i7cypDZ2m3yGuMwch4aSmiiAtA4giejU5PyWeJM2WPoq8",
  "key29": "3cadGA4pLCj9uwAbE7eiBpLoxi8gs15WMANJCEbWMUQvVgUH99rjW4uCyB1wf6bN91bthce94rM3CJPxvC2xiA3B",
  "key30": "5ut1QB2YesWSKE4RFTxbLFiptihHSGDYqcyfSZV9WFRGXsTPYkufnKwQ937v574Dt168GiV5tjex1JGxg2ciVq3Z",
  "key31": "4YJ9jSWHiKaPuNG9ENdDqoBvWRLEpTeep1KkxSgfyu8YahS8f8q42mTGJuK975B2Br4y4ErdGa87hvNhp1i5PJKD",
  "key32": "5tQPD1NJZFpmQbzzsZrkVAxGZgEsqFYNauuykUDEinDM3zrbcJmpGt98kvni3Nvoe35WAf6hxjLaxPsfSP6mYCeE",
  "key33": "2e6gSdC68Xk3hvDcxzCGJNicZ8yQ9XLTAUVzzdHWP9q4ZVDQCVCrcNXxA1LYENnKL7KLbMxBwAtynpxwkgJwWGVL",
  "key34": "2o3sYdDEgfaS2fLgMi3SpUggh3LDACVrieFEvd8cHfBhxi5k66Vu9SPbzM9Bj7t9hEFijdsXpW7REQnh5A4fy1Kd",
  "key35": "59yZtp4cAijfrpbqiqffa83Bj5xzUfoXpyHjHemeArSjsNKBCjkSrthsAy5MZPKodGD5Fyx8T2gnMwNP4a7HWrgW"
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
