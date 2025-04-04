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
    "4jfHeGcUbK4cKqb5yPqDdt9yqPcRYNE6AiH9145NcxLHhHGtTbgMaGfa9oooyMYpuk4ovMa1SCcz7o733HbRxUMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LzYzGLiaVrLgNkSZtquineN6JMmBnqV3HQtaUQBReWRNsYKNDP6sAbWW4oufbST2Wro5K5TpdB9nYhWLS2LR9C4",
  "key1": "31kTsdzws5guih6HXQtb4UwXKYPCzyJJouds8cKY4WuQabfvmSahoZqEkGTg18SfBRrqGnjxMLbC2QEnYSV9sKnC",
  "key2": "4v1QAJwgpTG7jUxHCggYHxgYms6nroxyu1xHLS4psdBuDsKRmQvwxv4jexpzvxRbch4qT7GHRuCdpGFai58jpUHg",
  "key3": "2CZ1Kb1yhQc4NyBmXmsAhSawnHBfRQUnbSyzGV9btzH7jL2PYpNdZsYLjPR8tSVZksTYBK6gqp2FBWUZoefsqRUT",
  "key4": "5cSsRccP1cVoQkDP1qYKSwqw5VJ2UTSDWwSy1qjtKUr2PS4J5pnocThZ4d9S1adN41UBUzQFvgDyMjA8v4PkJJc8",
  "key5": "3dEe5TKjbbR6nGgomYZMMHvB2hBVLk1iqw4tsibp3SB3vHkxrUMK3kyKRypq1quGeNiyTwYk1SJh8xv5RKPpA6Wa",
  "key6": "4fT7FnP4b2RWs2GE7JxzqWY96Qyb8d19GNG89PNkBQKKkYZxXQgFBpsVT7qWFKfhCNFu5yBfm1i53K1SaKhkj9q6",
  "key7": "2T7cioMybDVBYUWJom3gwaHfAbfQH4Xcetfia39MqsRnorF4P4GzR2kj4qc83E5q5Xku3fy6kNpKkdehWw1Zc4Hb",
  "key8": "zodpz5qe1gfkdDWnYDxSMxgi1mWM4oGcdQPz4f7CWQTJEVZSU6Upb52Psq8UrjWfxzznZMhHSY5dTGdfwJX8wgm",
  "key9": "tDavimAjbjy4aeaKamf84Yv3bGUQcwjqxYguD5PnSemBtXbW1rtBFsZFjd8sgEeBqJun7uQP9i4mpk1sar3j1gW",
  "key10": "25utvoPy9HiaKFXjosRfQBhCemDgxEJjtKUMyusJx3XbNEKNXvmXZ7G6U4K7YrG3tprpK1Bf1isVcK1sE1W3Jati",
  "key11": "2FAbNqiDHraZQuFCXdLaiWnieofRCsR9mvkvUkEMRS9pBWuEpVrmwqd3AuQwDrFD5ZBc6kkPxjfFrW5DbY6EdSTc",
  "key12": "hBE5cd8aQiaMaVopbJVy1msX2GZUbmGLKbX64ApimCoRWCfPhRYdDaUgrWg5hYphRJahmcnF9t4FLtxr8npHzgU",
  "key13": "4ujmQ3MB8krNnNc9suke1f7SoBJbvhh49aFz1C7jh15qB8DMNfzFSazDzdqXffzB8VdssF3wzHBQShpbGL4wutdo",
  "key14": "BeZKKsijHQqsYCHGeXzaLmzSBxFtUxsMuytaQAdUH8QPPhqn8bEKGNjHuVcstXP7uuZZpnuQ3uwVyU9oQ72ExZt",
  "key15": "tQnqwhaySnXNNvjGdJP1r2SkREAyuNWrKrsGEzakRTZdCb3JBNJF6TX6q2e9gviFM4fDLx6zm3ZwFit8aFxeRGX",
  "key16": "4RQfu9o9tEtZnrKLvN2zf9oKHmXFtAVo3gwmew8At71ai2eFZrbgPTj9aHSK8vA5BYHAV2ifE7HvvY5sp9dn4xi1",
  "key17": "3EsAmnhuyC4BfD39HPa7mh4Z6E2gqJrdPLWWtoDmPU6vMjQLt3DgR24n1FvCJVdPMaCS5ncnt4mWnmtpsNn2vEPh",
  "key18": "4f1u96k1GwvWFnoJHVYBGFJQKyeN6uuJ3uz2b1LHTzAejvxd3c6FM965oFbjUACGVdBdH6axZ3JaJjPfTyhNiYUp",
  "key19": "5QgwAhKXvMfab1mQAWqm6TPWJm2mgBzfNR5kpYj9APsv4i3KpnjkKu23iHzTEYx6eQsaRH8ah18DhdcnQx18qKp2",
  "key20": "9GWZtg5b7QUEDnk1HpoR5VZdmEAxbWPTnMworJB2DPoiaBb1sxFYy6RseFjWeXwAWapVMSb7qELEaFcssrDKyAf",
  "key21": "5Hbv2ZzJbL7FQm77UfaRTfUY6W8GiKZarr1YKWSP142TrP92t7kHSdx9n557wutYULitHTBG7NVxoFJwbZafvCgs",
  "key22": "2uRY2AnwDXU9R2mmZbGSCAGMdNyqMGr2SwHDbkgpx8rsBMq1QG5EGtJ2TF127K9Z3rkEv6YDtMpSPzLHhMuWU2td",
  "key23": "5VcHhZjC4nEH5Jt45Bir4J8TVmMMxHSMoFjhzYMYhJ4VXFTG3KgQdHY7byydiXcjB6qCadh7BAGpPAxFMUEggziK",
  "key24": "3HLxm3NCChoEe3ocUFr724AuTky3KmcbgdNsHU84EhNcZgo5JVLGiKWZdLXCj7o7maEvQqfeVUgp1mcdX2iryDtt",
  "key25": "4qMZyrdWc6hbA99YZabgrQjDngmj49aXqjTbiQwVwcADWBHuPa1u1BS9h93QgULnTzW719pgy4DT4hDsSjN6CkYi",
  "key26": "3TPXN25JBJwA2ew3fiTzM1R5C3UwDx3cwq1Kg3S2CYX84wAfG5XfwzrPphEMEtNt2F4sL82hqTAppECvybtf62CX",
  "key27": "2myM2E9agoVU2m17qVFtjLNtLth2jVLGzaQ753WWqyRHGW3U6n11j6tGj4azAbcnEtUtgFmzp8ujknPugLjwfdhZ",
  "key28": "43eKLngzSWXFe3hzgV6BhKrM5WhycMYLEQmV3wav65pa5ZURERZwReKx5XHJTrh9rjKt91RnEgifegwPu8EPtopF",
  "key29": "bZxoBU2mBiQeLyCCdhcX5xfJgWtxVUFtQKxcHjPaWyQ89Mv2gzvagmQrJfcppohsDXTr75MYS2maLWLPAgcmc7n",
  "key30": "RwxVbrmqAtXBZ4t265kvm231FpJjubMzFH8LR1HyB2aTo7PkpcrJpmv8yMKnTxjCz7Lz2GLBZ55ddHQW2x3XFob",
  "key31": "3BL1dXzUmZohtAsKJ8zzmKWVnWWJMRxK1aga5Yw79ZQpWG5ExYT4STtqzMAqW5hrX8eYbLrMs4z4MFeNVsRwJujp",
  "key32": "25d2wN5dbLTd9TydWBvMMVZZyccboPU9yRhYTgQq9MJ5xNqovW8edCjXo4Jaa7QhtqWYH87DuQj4fzkEMFjtUPAw"
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
