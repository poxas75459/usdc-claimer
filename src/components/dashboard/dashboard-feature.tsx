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
    "3gqBLwhPuGLvruq1JYQfapWxwpiheoCwAJYXnCLKHc43rXkZCzceM7d2NqX1kNGfw3H26gVMNAVnxC1J1eB4rjWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f5H6LCEm9VY61zd39zD2HVjkEkS71Rypyoxf2mjHKYzcudiZV8o4spdDTGT6XGoCpXE682t5zb97MXFUNMQXUCd",
  "key1": "5KWfe5rD9uU4GT51LPRVxUvky2EnDrVV9UaDKytWzD7LnUf4DDA6ZgAq7qYUGZN7HWhTLpCvGu13nc8jMJe5CL4Y",
  "key2": "3qWFxPZcZuTXbJ8DwpSeN9twfuGG3Tbc16KreVQVNd5eTUybhcA5kcEJQ7BScc7YxEHA9255h7m8MEEKUR4CkqFD",
  "key3": "355zfq2gYyfdWLyqzPNofq2SpmPE54KmZe8PRTCtfbqRt5byJi9E48HYsuXU2HjEsp7G7vsSiySz9Z4ssNRfyf8f",
  "key4": "dYPqFwQ7375DPGJCQArMUsNTTStW9Ztd8S77GvZM2KBXG9HynYwbHGdACvJ2uPxcxhLHhjwp8yS8LHPyMdrQ83L",
  "key5": "4CFtZ64Htz2dagTGxBLZqjhLnb1eUvt4h1HSL9SnZ9hvX9HdionJVZvzjtSwGisEd69FRRuoHg15qVtB8XFbjQh4",
  "key6": "3dnxvdWL12XRG56a2XtRy2SVpLuaZ32tZgKYAE77a5fuzzfTv1TvdnPbLMcpocf2k35ykqZhpSax1ihrBxBN2RLH",
  "key7": "4CCxJkzDwyfdBd6oaigCydwjWpDSezuL75uaQDqQ1rDckF7rrtqfoBEMK8Aoqa6MR4JSWY2MPv6A9bqPUA9u3mRu",
  "key8": "5FXw5vBR8fHXDRroujWfU4iFd6wsEP1iAn82k6fJNsKbafSBhTX6jTw2VbSdJfmF9iB9HEJXzvq6LmLQ1AByxgPw",
  "key9": "3BHiwnhCCgmHgAMhtgMiCJCVQakhkd7bsj7bPagZELfoev7BGShfmdU6mDL1XdCqkjenjHsDsjT3wyevNzryWJvR",
  "key10": "W1uezSpjCk1aWwrmwyt1ccW1S4cNtRQByy8G7oKFj24Z3e5EpyNCPCvjdHvQCBNgJBEwwEnEXiYVmPFR8oft8Ja",
  "key11": "2yEV4wsVpbBbxdo4SvVEG881yt6nm6fEyLpabncpBQEuCtUottm17ETZYrmftZr1kXbvrTYQjz5QF1ZY1951kdTs",
  "key12": "4B5zxEYhgsPMN9aNxdiJ86u2FEKRVURaAWYHkPLuYeYvAvYwQN73YwtLp7TNWWeSCAHdbK9ThFaRo7CWtQUPrtnG",
  "key13": "dxKRWJGVz4sXtu3M8UjqpbQhdBYpxi3Ho2Luh98CRuR4b4JVNWUFFzGtSeo3CbrwaLqUeRNYMNWq9cVJ7dpeMp9",
  "key14": "3qCKnQZ9fTZpLdKa5wmwfJhnizsjyLb4D2f4cdiPvxiKw6xJMcgtbVpkRmW1Dc3uvPzKmwgt1sn9vH5avT4B21Fv",
  "key15": "4tcytcBqBgcdb3eviv3DWVgZi4p15Ki1tQTHwhbHBGkh1AspPatdBYWoPo45n8u6zifDhWw8NEDPvhvgdgypwNh1",
  "key16": "2bVashdd1B3PA8TV3na7iKn2ndLoNNCXcECZTH1jKjjPnrLEHU9SEfk1NStaHKJiK8XgLuABCQgZmqETc6ecZnMY",
  "key17": "4aEFzXHsZGQdc6BbEt31iDCjmbVBGy4kZ2rSHbwZGmbCZTFHRS4dpLNtAh2qKHMZoS3hyhfiAuVkmtg6AvLXmoNn",
  "key18": "2GViXGuujCVGyoSaDP9PXMhQSBqozMHnxx7NXU3L6d2BKPk97itjeaKPv5abZPKKMayz4yfKVaFSmFjazFiv3gc7",
  "key19": "355y162rrUxHyxuRKCxUbcHJL2A1HPvWzbr6nfypk81EjT6hmQyvdDkSKHvQDTw5BGZ7zjZxTwbZvyUZbZEpjuVv",
  "key20": "2n9YBSaPsKKQNfn4uFqgWuJGkKDWzpZrxVStPmc3bu9Kfr6vbUMaXhuVScPrXJu8EKJ8qUg5dEZtRYdtBJRJHNS",
  "key21": "2Z7SbxKZbXGw4yecMUhexhTMp2Mfv1Tbme4Xk6EqzXXp5ChZ478UYMH5nmEyEnDS65NmpP6qhnMLsor4vumEpVkp",
  "key22": "4tJ7BnRxhvAo9Q4rXHEcfKhdTzaZ2suAPd9KNvamWJYAWQaytqDJCb8P2FrqxBKmdEyfwoCZYGzEWXyazHPcJYNa",
  "key23": "2ekZEBFq2XnsLuc8M6PNsqBPpvzsLneS8X2Jerx3PmSwWebJCjEmnSZFe6ABZFSKPhs8aM7EuYPjyHwdeRh5F7b1",
  "key24": "3zNbdWxyuarefPBnrfvrB7SS35ko6cQcXeZVrj6VtFKfAihJvBhqBrC2rDRx5N7bzR8APFZWS6KzbCCVetaECe9w",
  "key25": "4DQEdErqmsNYBCKN3SkhpLMMKgz2Jc2qzbmqfPviR78G4g5p9fHcYYZ4tX6yugo2kKm5J39ffSuaAEoXwroid2AV",
  "key26": "22BNTgc7YqdyYZatFY2ypEpU7ZtHYPfoNrooRfnxuJoHWJeB9Suk92g14sqpRSocFDdetZMwBJu3B1fMmRQroRUf",
  "key27": "4ks5G9uF6DwVn3Z3Leyc58cXq4wZDhKET5qbqonq3KQHEGDEm38Mx7h5rE4AgQCZCXuKDHp27i2q7iRQmxxprh5p",
  "key28": "riyQnGiNF3CXsvpLHnMu77XwRxvCC4QZN5fGTqB4vzeU9ptgZspUy7LbDgc3fwe8hb9W3LBZwZhGHp5nE8XqPcu",
  "key29": "3CDTqeqa8pnwjQGRnHBhBUe63Ses7f8Hf4VfxDfkUfdfVVkvCVYUT1hDVbN1gL1UbjuWHodoKkHak6Y9KzBLdwrf",
  "key30": "3QC9oDnESc2pKQKpXeRbDTcGjENo7s3QifCaWmz5Pb1EkyaaanvuLAXGUnX8ww9sGmntzDzXPMiJ7ckFoYczNLRR",
  "key31": "4s7kSaLPUfr9KDUG8ae6dYKoDD5yGjciBc7KCFGZHjyMXKjAaPCBqFMNa69gJhZjtdQD75ZMMWfJ1uL5QKkGcUrB",
  "key32": "2FRSqzEJRBHnHwirX9x2BdiULUm8gfdm3qggVn5oHyNmMhCfTCwwwJMXJTnpN6G3M6kWXA2xNfDCYwgPhuUK5J6B",
  "key33": "5L6KvTqXs2y8EKJTAnafQvu4QW35QbkvhXoDPCYT2L3YrhuND7jcpa872wgWmYZTNSucCosbHoqxZ4Tv3Hzuvj3T",
  "key34": "xzEiov3u29tJezTdSuKAtJKhY791ThKZUHXSpRKQ7QcqoiqiYpTDo3fd93bUdPxki1umUuuA3XrG5e33VQCewt8",
  "key35": "rXZcbiAjmSDfkpYiPAHMgvnLuZQ3eUzgnVPXHv8GB1SdkNb5JBrGKo4HHMK6Z5HJRefSrrRuYWDPRuJDE6ErJav",
  "key36": "2CCgXyTrRzFKyxnj8W3KTHSxBvX8FjqAauPZee3riqQPnpYHCbxpUJaZdhgr1ikafitCXjWu4nJwDKAh3USvXvRE",
  "key37": "48bMNnHfzoNfLB6oVgZE8UNS4e8KFbXTsrWq5NHxLUGXE9h9PBcExehP12rE7dzTnFHA2ZsL1mVXmCnpUCPHH9k1",
  "key38": "cw6u3NX6dfvhngHrQqGEK39ZCfFEJPiUsDYZVfy87QqFZEdvMy8mmkXtqKQvnCvxnMgN9uotqpwN6SVxSTYmVrj",
  "key39": "XvgH5NgQVVRjBY3FCHjGuSEQ6A2ycFjpEK7ZzMzjpSZyxENXBs79ZzASHcZgKuCBQ8KPLou8EcC9kN523uio4gB",
  "key40": "4yikzsyaTtaKByJuQpprmCWgK55UjVSuJkRuru8PEGwS4MfanHyMGsmErE9mVe8ok89br12rQ45jPcdx7rndNw82",
  "key41": "28LK4J2rJDT3zYJdVzL4hsvQXrkXUu9mSpn2mT1KYWmuYbuEqs3YW62f8Uo7NvPnSx5cc5w2DNiQsJbnjAAmGSkt",
  "key42": "4uApTAyrAhvB1B7t1maDE9R5tPmgrUS79Ca9UD9QbJpVoeTgcRD2zcbyBihPcpkqusntQCFJJQjoYYjXiGT1683X",
  "key43": "4v6apSaD3vcjjaX9ujrwVmZ6qCJLXFvkobcGxJqnvsfvbYoLncuMRNgXFma1xDWPhfXVbRP2rsFT64uE22xhAQMu",
  "key44": "5rzULBuFiQdNwviWgwm4fQtwCQUrZFwAUQUkk17pfS5qDTh4zVooCFV9wu9QYAHH8qLJpeQUGQTZGbUoFsDgXwiQ"
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
