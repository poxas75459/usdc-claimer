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
    "2xRZeNceLVpo7VoSR9dZ1g2rcedguY8MzuZG7BQNsCTj2JamccfRSMsdwUwG7jZZGdKRQFEuS8Ld2doBfb11xmfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ssAmXDcqYBUZNumXUagzb6fsjX6pdj8a9kqsLurs7kQ8xaS6cQxXPuCQNnXud2FNXYDZdLFj1EhMKArPeYq6JJ1",
  "key1": "4YMMKYPGdbd5BPQ2CBhh4t4kAWvYAeyeWuMu6nS3rBQGvMXpFCVhyF8TXnJvzQYK4zj9ChmeWnHsGpi86fGB6v7Q",
  "key2": "4MzhuaJqVGzAsHw49Tpign2kRZp6DwnJ6upWwWGgNoPdVSRyGg5GA6urdtUZpwXNc13DQEw6MSrLf8BU5HLtPkQH",
  "key3": "oVrQPvdjmxLDi8FvkpDr28zrmbFyLuSXLxmBYqRCJbsqGpP1bGrNWCihxbqTTCHHH7VWhdwZ5Dk2i7Trre3Pste",
  "key4": "4kwgCub1d9ipJhpd44By2zSsvF4ScyJ72k5AeycgyNj9af39TDbC36W5zEDAEKiztntTiPQ3gbUX3V3MNyyAmXHv",
  "key5": "5nVPa7AxW7MYHeV2KohoB9MZBDWyCBrJiPRFe9n4T9GXiZYSwGMgRoGMR8VhWsEr6Wm2tNVru1JPah4gC2tRVy5m",
  "key6": "4wKH6YRsDPq1UArLXPLqNjBzJHUaoXwf7BpBxCZL1Fe4SgpsTkXVFUrGfZ7XRgcVxxdfbbsz8K2CwSeHD7PKFnEL",
  "key7": "2nfY4MUegjfP5PD6Dq8QWeL56ao4PSKjFcXqR1tFxu6BsGxYHpcTc2cMwM3FgQKq1pj4hzHjNjYTQcMKgVJpVKu2",
  "key8": "3ui6kQAhxyyE9qYtkjXiwDR6712YuKpwFwZ6BWdZzyqni7wq4ymYo7BDK1EDmEQCQPcx53qHY4YxkP6Arx3oGdH7",
  "key9": "52bZxatJsfEUQChLe5KVcv3ZDdCXfweKYmpnd1zKchL9k4XUYd27TYbh7yuLCQ5nyuq8EHq77eMX8rDFpGjB1DZV",
  "key10": "5Afx1pp31spxPtc6EXL5zZdP71dXCHyLchdzYn5rsBn1ZMh8WofXUisRFeByGL6djEFckwzs5N5pHENtCmtXesov",
  "key11": "5BvZD3YKXNG8am7nQK5YPM5JD6qcEV6inN4ordMxHwK88nDmooi8WB4Ckv8CTVb2tnuH86vote6HhCNrW6mdEAsi",
  "key12": "35GWZx3xApXwVP8tFzw7jjkEEAmWsfYnHeWXKv5vzzLqGEAsqHSM3d8ZVWVW7dV1yPNE6TALPScPbvNL9fP8E8Kf",
  "key13": "2qLHj6A59acd8GNeq2oZfZC5GxmBg4rrzTfjdw1JjZQiu8bjSPjJbzmJ9VmcKcNDECTg3SLXB4iXM9q1N6FebtcG",
  "key14": "HVWnVXsFw8XcmN96bFSsBqo9uD2fE1tsb6wsruhiERPqpHNhGupX86zsi4GymJN3hpVUPQjBGJ9WPSySvJNbp7K",
  "key15": "5UaaqutptAraBZta7a2sg2pL8hJR9x18KwVAk4TTJPcpnEpZwgkoAvmA9XEwbxkBPwTHg1UyziafUSEY48h5YepW",
  "key16": "4jQZC8dF6CN1qtBzND9wnu7LF4RYXnZxAfVMNWyRxnm67829MSQKAxAV2Dqa5kjqdFJqzk3m2mJzsopuNp7oR9hZ",
  "key17": "2VnzpxP46xF6ZwdVJMQULPgiFKCWurzQpqx1WLPt1XWKiG2g5V2auCTiuWGTAvtJd3Zq1M4TDRkaNmteDhe1smH7",
  "key18": "72Rq59kGr7jCdouHYmMPz5HcPeQMFfaW8qv3tkQcwrQxD3P1zaEGT8npy7Ubm9kk6T6Zw6E4siXednLtPyoEk29",
  "key19": "4PsNZhk1WS8BAso4cNRWALpDEZcpnVosVf2VH7DztKRNFRXyUPemr36uM6fVb7aTJxFmjqUkNjRRha7UYQcvRKPB",
  "key20": "2bSMDtpSEaN3vzvr6tCLXrMMfK4y9day3NWCHXwJKcaA2BpNjfgJcggBQTDvWtwhFcthj6EXNvAimSRP9dYWjZfo",
  "key21": "4Zjfb1kaWLYLekXMpzovfbEyWZZSFp3FqwWv4EXiTiAiBASvBgqAeTaCiXMQNBJsBbZtHhHWRgmiBAdJUHrVivJi",
  "key22": "1qpgvrApSrMPgS9TkNCwYnHQxmCFqBEaBB5pUkn7htbNFCQ4cWye1MkpqGcF2Ds2ngN6uvuN4eWP8dfjC5L9gbm",
  "key23": "47HYd7jGGPGa1d51Yrmya6aAZWyZY16pmR8t1hfWbmvM62uAMbBaeyRuGQ5agzJDbjU6koYwd9scnHTK4EjgAVMi",
  "key24": "2MmTt8bUM7DGr9ZT9mTxSaJ7oudmkeGJodRm7UcdeDC9er9L5EoZjyZoQqpRP61mPE1XExvfuXFuFjQ39Rf4GHvA",
  "key25": "3TUJvWmfAjRLsac2oCxa6UwoGgQWW4XRxJtHS612xZFyQzhBN9a9bzCg1m4yE3ZkDy8SgvT7Jk1it1fkX81e2kc4",
  "key26": "2YHT5hMyfjzzGQ4NPQfKeUK2FFjRaBFW4oSDvhhRsdDv1XSdwPZbXAJWvs5ndCwjRRa9crpaccjse47jkykGm4yc",
  "key27": "45vjnrPnoEGRDpz11Tbn7ik92SowHAjgJSqjKLDci2tZyDEwJARzgwoZzqNRnFdonAgXbEDsnBGuhRcRJo1gsVPH",
  "key28": "3o1kHpGiCoh5o4c948PPfLznZd9aaZHJE4MLpjR7GUpoRT36crPSf71xaVAKAW1DoKc8ukUQ2Ps3fsE7yb28x29j",
  "key29": "5XcCAVJcdVNo9NkDFJJ5qMRsASCYLwGuyZ81zar9b8kq48kBxT6RNy53GDCect2NXmXgawetEDKk2MoqErzbVHFR",
  "key30": "2WD4tauNCTMeySedDEdpgr6ebXsCSfF9dfAn6tECFedwzkcJvs3GPsPwgbnaTFK1ucUcnj8mLBH8Wbv5hPFGkAXQ",
  "key31": "28bdxdg9UYxaHnK2BVaE48YgrKdHE6tK2BqEYEwBsdboFacQxMwP74edo9c3WVQ4MuLTciEym1ekqJ14wMyrB48P",
  "key32": "4Pc7uyEGt87QW1vyPm4iLCNuS2gCbasyjWRGtRhL9ysZQGKLCQNvAJhVfY8jG7DwHt6mPzW9U6vXxdqvCcuWa3ne",
  "key33": "mU854B7vnvnB6AH4F4YhNdDJFmkqcAyBfSXEZZSm4c2d5h271CR6v4b8AtEjKFpPSTrNniShS4J3sTKBLuit3Kh",
  "key34": "rjjBp1qFC2zLQbUcMhUX2WBi5bnnfj4EEZWKKADuJWc3EZ6s2i43E6R1RNomwKHaqfGNeC24CEtssLfhNpnp67T",
  "key35": "5mF5xFUsKvc2GZeP2TDFNCUmvrgM6YxAk95RJSAWLF5UrT8h6PQA8Fe7Vv8r4japQ7GzwtY5UvdJkFbwPc9PE3Cj",
  "key36": "2s1S711UGj8n6CaP7pPAenaXEzMD665yBQnNgXHesmDpUsMEHYsqCUUp8jPGZvPjxb3vU7G9iQRZQX8aFvCdDgFq",
  "key37": "5apPJzm2AUka28kmeCh91soyCjKMEbPeoyXSAVCSMszNyu9oZwwAdmvykUDtgJZwNXiRJBcYZ76foRPbuKPGYn2Y",
  "key38": "5CFwYXdHXmYzZNxHDTX6LwEfKoZykzw1X3pX3zamU8fdJgsDofit1eHMUtbktXchMgYsGQk5HpqMT6SiMSL1ai4a",
  "key39": "3QHwFZbPJGfAZozifRciXGVEvcTwGFmjDeLPEpxKpARf564aFJmhUHwRTcpSLYtrf9qgq4yA2GU2utaQdoYmd2c7",
  "key40": "4qXNSv5SAQqDnzMQkJ5NycnZtwh8tJZAFaAhRj6jYhfckj5EYSdrpR7afXrQ3AZRP27Sz3kdzMSQ9ZFK1ijYF9Yt",
  "key41": "3KRL21zreWr5emLzMBzsXN2ofMyLoWdrrn22HrU58go8xAeZkqEjeAwun5EtJ6xDZhgD6BHzVPKvSFXwWPeebwEm",
  "key42": "2Uts5pLLgV9rtzTsAZ8ERadsQzC5gFSeND2Dm9gQ4FYuoZjF5NsYNgcMWu3AgxKtPqCWPqJVt8NwmE5ZRBugLBzg"
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
