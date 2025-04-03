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
    "4bD9yJCCQGTW6BkLnYkoiHXRTukg8s3ZEQMpedHeNSrrUAMj5wCD8vC5yimE3GwSvnVgj12PriKUujS4rQYKu91E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eDqiC6f1MZevBNjZqLKrsrzWoELeoCYAiTHQLs9KE14asUkCZZvSxrivKaBtW9mkZhzHJ111PpfHthXomMCqrEc",
  "key1": "2kwGX6qxqBT7oo69hdYcfg5LbaD51Nr64p8oDVfgyDHtXBHHy2sYLJfz2gVKX9S2dzYPyfEr7DmiRMrFHizJJBqM",
  "key2": "3yRdGLWY5R9ZQPFqwNBeVCjY4sayPJWGvj4pbuxjFbYobZbFssvTHhBTnZ1jm8XcusPZcHiAtb1Ctoa6bnTQdRi4",
  "key3": "4NWdyzD4L7pTx1NaozzUqVLS7uUhH9N4Dy9n8VWhpWtdPb7G22GiS2niLFeiSni1BanCG9YpLHaTuF3WxJ5Wbudj",
  "key4": "4BZNBf831TWh5cWvZ8ZPz9LU7rdPVZ9VEzxgf6kNZPdjYcYEC155tSpCs2Z7BfMUCuZNf6L6a87xbgFyLxT8Naq1",
  "key5": "5LNuZrY35eNNTYCR1Hb2C1mxEVQkZKZnCcLeXec8sZrsZCAJRjuLEnWxktpd7qMUW8AiZ9H8Wj9RhM8aoigdjWBx",
  "key6": "gB5sPHTm6gSuMU48CjHUWApNci5cuKaBXsRxSeU8hzUWCvatfw3imzkDCtRgJ7mbtQ1pXoAKAPp3aXvuW39GoQR",
  "key7": "5ogJaAXcwJNoeKTvw1Bj2rjH1gspGnvmEG6iBUgVCbEcv5suHJDeU3DATz1XmzoEd2SJyS8oNZAGH9FF5M4dPEE4",
  "key8": "nhYdM3DtaDD5aBzsxwAXSQ7pCViJ1DfU6M4Cbv8NGB6o8STjNSDNkXDLvsEptFjHkJ8ZDZmJH3M49JNBWCr5ipf",
  "key9": "evKaBDWqFwwXajiGeQdVnbGpbHTkJGM9o9zJgZsvVsnsoZDMVyVF88K4RGYbG8S5GdiPmq5pTt9nQgk9FzLeW1L",
  "key10": "2zcsaca2yTFoXRPwe68LyQUjHsbEeedMoE2mEondPx343D2vVYzwWViUC9riaZkZMNUa2XnGC4tPF26yGHabjqFW",
  "key11": "AF8fgabzKmj5g2nn1iL6TJDfGUADdpy1j4eXJtb9kWfxhx4YtJecDA55UN5KQrUiskyxaRxMLxbmZin72e7y4Vj",
  "key12": "3FqfNs45UxWr5WJgMQqFak8B7B3CdyxuVCinFuNPmW63LWH6bXzHLbk2SUVUMQhpJtrf6H2B8uPfUfVfWKiC5pFt",
  "key13": "3hUPNjEgQWWQHzJPQisLGc46SjN1EkeqjJDTyu3evGuxnt2F5CTWSN2GDNtJfdv6XGZA3BG9pwnhSukv3CFeSmYe",
  "key14": "58BapPhh6ptKMWDLbcqY3dvUVa9HHoBydDiwX938T3ADJZgy4dkr5JfUpSfciVJLLnFguuWDdV3zTcGA2axT79yg",
  "key15": "4ewtHZTLf3Afvo5sZNEjkCKt5Zqj9s6g7zHc7yNSMiTSVLaDVGoLSBGcj35LbRU3tVqJ7aixjVBNeqRLvVha9en5",
  "key16": "5rvRiVhXZYbmogpPJJxMu6whByP66JBu8nTAbUoQkvWULDvRoHxPZYvtgm7LdtaoK8kwczXd24EyYAzdnLbydH2J",
  "key17": "9FUSP8GqdqpELyZMWvw2FUQWc9Kh22Zw5X2idjWg7G6K668BRSutJRHkpgKJq6UWFeFuwEKZhfoS3Qzio7WjHug",
  "key18": "5oKFzMdhEHFgqj2AdRhevxghBshikYbFbAQ6pg1b1xrNtFA2iGhFZJphudcw8ym8qGv5PrEiacGyzDq1LvDrVfFc",
  "key19": "4tWiDKYZULwaH5RZ29wA2PYfRcWHvzC9CLWrWyTi4kZjCV7SfTrLnP7ivKctSamnf85mh7E7b9mVwpQvhULp3Vfu",
  "key20": "2J72bV3pjuNeLAxudDHQGYqp5w6XTHf2z8y3VDLZdQ5GR6TQNEyZS2n68cUVQ5Vs4MgmCgTU79vqzKBVAS4wqqME",
  "key21": "KdWDTfD1T3PXQbE9ikBJpRjPqVoK5jiSCvhH74fu8P5bKsrnJWpG66vjEqcWTUNhWLokNkquoXZsiyuoPPWjmEV",
  "key22": "4vZCK7jKiJBSVyxyxmbN5NDRyzdTPxqXWixkcDrciCtJGsDmFBUjZd71pjrBF6iP6tyn11T2ZW7o57bftbyRaaya",
  "key23": "2QK9vxnbkdbBpqbkbNsA8Afr6QYQjwk8nTbAJP1nR6uYcXr3knYAQcnBzacGjsj4fNkVEh6g2g4WYo7MveimfLDB",
  "key24": "4VnifkrG3ir1wt3FXq4GCeYjZnEPMX28MjUKS8NWqroJ76qDPBpekxL1wNRrye7p3F6L5cr2LEVyZWjDD5KKHVd6",
  "key25": "3nCW3LH8h5ZBakHFqxGFxCVMKWmg22YcrBW3sS5Eu7c34QYdeW63dqFrCXdWrgGMvez9rDjJRtxZ8KyRDHBvLVZz",
  "key26": "3se6fuLSVtpNY4NyuSFWLus6ywMU6S43rei4rdBj1yDTC7m9w2Uc5NBnKWo4aXGPhoy5YyYoVS1pbiEspsqPme3a",
  "key27": "5GNPzehW4kPjmyr1zpdM62qZ6hBn1GwsdGmvoqxeMcUn71vFTPBgHZg6DT46auns2DcD5UgUCkP1Fw1bJtux9R7c",
  "key28": "9NtNjjfpLTxs2GtzZtF8BMh4q3KMTkZjxc2etG2ZqwphuD4tyEmfRKw1LYrLcBiPaDCDaG6JowDe5VGQvu8WAfC",
  "key29": "3ReALHt1Zs919fJ2VSSDpV1bPPS2MFu3wnXWFYiH6rvz6QoXR8ZQmSzQXwDNDNmXqvN9vQa31jmAHVgetsREE8yU",
  "key30": "5eT1kKZZcoYsWWJKD8zfgvfBQAnPd5evw5E2nun69iHk7B7u9JSFSQt1Pz5Frn6xFZk8DX9wvvUNiFpzLY9ibo8v",
  "key31": "2nnGFbfkAxdvHyfRv76JChSxpSg9Ha5Kq8Ev7tx5qYUe6CNbtMVGEDJKynrGog7UC132H3sa2i2cuZ49tF7mchb9",
  "key32": "4UiTWRRfYWTTyWuS2VJW99ip1XoXtmkMvFn1dqgzCFp9vpNLFsyNsrvnDckwv8st7XmkPctcwjBpcUkbp6hKn9qr",
  "key33": "2Bb4d2zE26HAKSxqpN2ES59ibeDszLJwNA4CWm6K6dA2VTiujsJerT6xNyBtygmnmq9BtFb6EzJHGoEmmctmn1V9",
  "key34": "2GkcGUUnsSZFujfh2aQSbVRv2qqFApsXf9b7rR9Lf9x3itugYwzgLFevDdnFzZzM1EAc7PcCHNVLsN8imq2oTTXY",
  "key35": "22EtjuiDPP3stNM4bvSDnCHzD5wU6aVENjqCEFMTQM4RMz1kf6bGUVtp95j978CJUkq9xHV8ccQc9mRLQ64wGG2y",
  "key36": "ewiYJSJWVNRD5dJEhuiK7pua48zM5sxu3HgRWBXtWNpFP83wCmrvKV8qvgV6zMwwKjTCg2da6hKQEwb11dXwa8q",
  "key37": "34FQZFQAr5jXete5Te5k7vNvRSYsgZFQ7NR3Rgy7iXkqRD51XyZ4ou5UoghKVf9f6BsCxKh224vNGBTTJKW1KfjM",
  "key38": "EvwERTtkoeeDwxDp6RyFr5ETtkzNKnsd5TPgXFjv3HKvamjHanX1uLBGV8jUjabc5WWUg9199y1tXY57Jek7NN4"
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
