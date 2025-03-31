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
    "3QtkXiixFK8tvKpYB9Bcbe24qmbs8gDxtgKWUghhgWB9PjQtEYsSxfC3zPSwSxSikwpcUnrWetfXXTaNncZmFoFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "93AcngM9md7krj9S5y9CayxHZk4MJSABpynLWJKoyGuW5okBo5cTHdCLy6RrkiTM7UjdPe3cYsGRf56XFdsfDGp",
  "key1": "2cAtT6Ew8puEzxHT6V1sXEKvjt3oTGJ7UpzFMX7iFa26Ho1PYZvuvMQE2rF8YfJis89BhnJKxHXxsoZzRMKjE4zn",
  "key2": "5CmTwp895jCjDK3g2wytgCQezf1h2Wriju3YNX4cqsoUv7ajttcU5MVvKPq56Dk3SKS12La6nPRVoFwsCBQFoqs3",
  "key3": "5aQnJJLDhC1quaoC8RBXefkiNGvNPbfabBepdGtvQ33evrADQ9xeNKo7cEzKcmQ6PpsdHzh7n5nQnAuVTXAS1YHa",
  "key4": "4n4CsX9MkfpFxrY7iuojTU7j78b7ZwXwfUHmaGLgzDbtKPdWGH7d9wxTxkqhJLGe1DmCRKDjfqYTY6hvDwZr5bzx",
  "key5": "455XCcUvjB8mbNDv5V7J9JSFYtzghgwuDuN2hmCzXRtgrEQTznZTX4zMHrG5zhL8LS8v23pdReFL41pbo4JyRq72",
  "key6": "N4hbEuBiKE9oBurJUS1qq3euatRwEHw3quF1fidSvzCGRLSNpRDQ9UcKjxeY8JMTeiSTXvwSBHhA935QWyhUXeL",
  "key7": "1vAshFUG4gjAVMQR5QCHacc6a5RbyMzs8PM7x4qibjaweZFn68d7FPboKCzm2oDWdAr9DM3hV1ZswcTLXRSGpyr",
  "key8": "3kpJBxFNP6rT1E3UNEimytfZmubaoC3PkrP1SmDrrqNFVsfAmiDUoqi1rEztTv7Zmq4BB9tmS8p2mpJWewNCjtNM",
  "key9": "5BB9hAqocJPUGZm2mQnTZYmMeA8AgRsXqzDnHCjLGPNu5117PfBTyZdt93j4Kk4CfDLZktS2QQqTPM9Avg7X3REV",
  "key10": "Pnn9dydTjsBMxM2Dxnmv7mGpQ5NM7rHWkZn9YNB7mqNiHjP9Q9jFEuz9SBBkztuD3QDArxn24qMixF58iEtPoAH",
  "key11": "3tmFWtwukUYzf7s5EdJneNgNCvb2Mjfnkck6GeVPPux6ZrBgTsk48u67MQUwNYc6TzKahiVhj8bvpAvH6BfzjEpn",
  "key12": "55dgt64J6aXNhjD6DLhmS7oUzyaAPoC1iLNRNVgLqmZLWUhq6Vx6MHHmkvRf7BbrULpzTeKuMLFB71p2NNjMHAJL",
  "key13": "3ykBkKDB23K7HyPtUbadaqvfBDogzixTcF86r6knzph51bjUsuityZ5U93jFdk6RQ3eahSiGdmJZs4gSsfwkc2Jq",
  "key14": "dUzDUZJ1Kws1FYT7JSyhoKLcB6GMd7EyPHEsVvjSaGCWbTVycBHWpSTi2ohvRerAMUfsnW7ZDD7dYRAp8FWae6n",
  "key15": "3KmuFmJ5uUevXCzoUHFR43Cs5rezsThSFmnYMZqw1ZLQ6wNTYXzhojJRYbTURiR6vgZmVMVfQyQ9SiNyF36So8hp",
  "key16": "Baj7yrrkQpNdTXDNUauNZLM6iwNF7SAEm2xHZ2wmPcY2g6oyLDMgN6e6sWiNEmH2ztd9iQz9wuiFZ9mxgKmraFy",
  "key17": "2rmrZV1pnQQJP9ZTY77Wsnxck3UUdTsHVasCf8gDoCZt4yGyJVDeJvYKmM2Tr4hWrmRr5D2eLGPMyAcXaixpGYBK",
  "key18": "3oZU6tn8WWfu9W89zkfTzRuk2VfU1kmBTq2mYF2TKiZ7EnR6nSah9Z919ns6istwAT6dKnx4hUPJmEyKAgzMidqt",
  "key19": "V8T4gvDWtwFDwfLwEGybViP33pczAadJb3uwDWRnBfAMSkiYWyP4wyZMeQHdtgwSqnpse1rAW9J7PhYPzuQaKdA",
  "key20": "95gYawm2Ky8YWdhTtDZ4CUg8SyLL2AHutReh64Cp53mMaoub8KZa54HZzJgg5ZRG1JmXbNAxFeT5ohv35nhrK9g",
  "key21": "rexyMqCsmtiFTYjUqPVNtgEbX6kuAVkBzHam7At3MwxeXcPUya2pCKEAT6ewwSq8NXQvAjG7sBxPnP5qVSHXY2S",
  "key22": "4en7tvR5LQkhqtWG7uqmh2p9sTpHxfBT81k8gs9v9WoiwKM7JttEfmHGeH4yxNWysWkaEyKLXGpYHYbXTUrS1agX",
  "key23": "3Cfr8jaLgpEvmeCspRbCeuajTgt4Q94EX3o4gd8aVjvJfk5hYS5mLwz9dFXGahxTL2otNHZ6k26FuccnWs1wK9up",
  "key24": "5d97iAWK5irbmAuZyGnX7Kdqso54uXFNNeYPypS6YFGmtmziDt3qsXHRJRcEvdKEt4haqotFUwShS2Uj1MNxk27x",
  "key25": "5m8QnyYAzHEqV3irnyRqJrMMwmSUkZGdKAdk4HxsETuBigojL54oQLQaybA7sFcdkeeuHDbMvX5sbJBKeUYAm8x8",
  "key26": "5hcFXt6ya9oo3NgF74P2fLpZGcBdDZhLaTyianRpmSf65waqCVbRjApbcPUuWVNYiTi9WW6v8iHQhQbu68drT5Ah",
  "key27": "46F2GibWbovpUPDPfJvvrVqChx6a48NXCmHEn6QqEFecryeRb9UZUaad3XoMaEaAAoPW6jxxdR31GtD7xAAp9wA",
  "key28": "2PYtCtRHgNsE8yQ7uxLeBaRNrK8G8mqMxygDdJRQjUp6JuJihUhiBzAAR1MvjQusnqBbRxY8QQoBCifNwpZiy7Av",
  "key29": "4SSCCEKQpBn1s1YiWXkoPBQabgWqitFELDeiDJXVw7q7H5wavE7StmudtvosY6snYLzRb7ki5fqaVGGvgNHzhDpz",
  "key30": "5a77WtNNQZVuVgGpdv8usC1g3aMUZK3iBup4NscAqbNcUaMJkubdFmRkv6RaJDAHUJX71n58xhwgHkUTL37bfwK4",
  "key31": "37Kvn6D4pkgYHqnqbFZTY4X2cVTJoK7QupMfvrKTHzGjpUPxfVRsVQc8CAbcrc14m91WEHEuyrwM3rDiSaQAm47H",
  "key32": "5cRKjLZCiphryYRyAHrGps9JDnHtKLecnwfjXZWUxw6ZbYTAQBa46EXBPDvV8T6x14MxAT6bfErQ9e9HSZJtMoQ2",
  "key33": "5XEx61yS3GpkeaE8dcu65LVqNgUkJ8SrMqrhfvmoWfRnVtQzpgYJbwynEJY9sj9H6XafHR8jSNN28hcLz6GPbGhJ",
  "key34": "5Ex8W2wU7v5EKLbRihXDk6dCYiRbZGje4MPEHC43sFpCFF6i9yq9JTnFgnsGmHz27C8h5Ua2Ph7dTZHaAuSRUAGs",
  "key35": "3z17AXLp2Srs9aCFFxXqSUMsTFpJajk2CHdUs9y9eBNvm5nQzN9b1PDAHMgnfqoLi9RiMy52tvs1X4vGVPUHvwQt",
  "key36": "2qmbC9f14CnDFSLNeBUMDGC2qD3cc7FfGasdhC9DEotki68yCopR1YXwNo3pKQKUnHWdbbnhba1wp939Hf3BM1Wu",
  "key37": "43SQUH9KWxP3aZUiP9Pn5UEhWnZM9Fi47a8GbwmKuXnUzuPdSnKqahnk4rbBxE63wR4ygZtdTgQPDuGuqbVsGTLY",
  "key38": "23QWd7X4jGAX6RMhfbjvcHmtW26UAwUVFk8PfnjRLSMeL9pFvVi3cU1vmSXW6FNdb6QZMvxNhhHiGc6PU7Wqfhiz",
  "key39": "3jCDea4DarDDo8dv7Gmfiqgbad9kWCGu6u7L3P3EEpJUbEWLpbuRo2GHVceyEmyvMDPU9o6kj38aTWVHFCaYkAZ5",
  "key40": "4jGf9LL22am1YGKD8PouYX8NSa7qJ8iDAAHT2nXW2EpnUqSfaR9mMsEpQfw2LyXTKjCB7yJYzqht4vnNKsozvuoo",
  "key41": "4VxBQ6Bs8DZm3h68usiAVgHRQmZMqjKo2Xj1jtbGzyha26gY42HPvUowpPj8Ry9Q5JHeVDg8FcmK5HvtLh7VXv1g",
  "key42": "2VPayAYLbdqpei7MfBv62ttsgDkf3TpAD8gNQLt3upb2kRmvnS9SsJCtnm5XqWMf7np5dWiutDWBNHnd5WWCsxdL",
  "key43": "5Fn4n7SZa3xFUPokfkoBuwrszQ6aoBuKy3EWjYoECxMNT2AtHcuiMjfrGXhmrVNW6ejSejU2xdbmSA8sQrZGtBF2",
  "key44": "3Yw2Kd7XQUPWZXshniKPN4s1zo6H2VgTTxLRjg8eYWkBPbTYqEj7GnriE2NbjQSfr1WKcWQ7BPPhsoY1HDZuDgyF",
  "key45": "5vSvEMja7DHMsdL4fpAAvjWefSjy6sKY2AYUgRQcGKC6kCJ9Fg625nAjbtcAR1PApNeNJKvSXuCfyaVXkJsreo2c",
  "key46": "3PrRMgaz4iLZDqovBMmTw5BgD3rXY9dsLpDX5J2xS7j2wb9iofwFzzd8z7WLMEiKnPhdXgvCfX2YwSKDsGGxxHmL",
  "key47": "46FdQQ8CzMTG8r3TUiytp5ivjPomptMpLcwGVk2yWaxupBbgJaVb5RUXbzcAGG9ziTtRnXUjopDbBGU2RHqwBcWW",
  "key48": "3Bs11yePvn452DSxk9XkEYvQ2XvdbpcnZjn2GHEWRY4M4Nzn2MUFDtRro7pFK4ME5XguB17QQv1Fc39sUvRY1XLg",
  "key49": "bupvYLNDvLnohUi7sNMSZCjLxDuNT82q9o1DtRnH2QjbF2RR4PpaJrEJQANMMc4ECZ4rx6cb6vuYdrYfdcxh7tC"
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
