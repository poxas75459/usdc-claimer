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
    "38oZsPdh85m37RDLwJAp3AwG3hjLrA7ohFdsz2W481JHQCakm3G2b3pL3cbjCGNVeP75mL44vvEMvLU2U2HQMXY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKnYwCYyftD8X4WNarBbMw7KadKaV1seHLqSrfuUGkjPLW91Zii7DbNNhBLbTCNvu7XTmMxvLjGDFs53kfTKktU",
  "key1": "4S2suuFuQNMQeKJUf4hD9DzFN1KAEfqhaLPCTj24vQXpVHGpgEb71zpsDaebAugt2cdhFahcyfAbyDtwsCyZsBGQ",
  "key2": "5zvhppaFLeb3mdgLZkADvdFbR6fx3QoqNfKnAijGyybvCMzk6xcWagPz3rtM7RudwqvHokcu6JziivSiTc5WVecq",
  "key3": "3BSSmmemvfEMS1PotgAA9h83BsuaNnnu9L1EQre839qaK9axAYDn16kAvh6pVDERmo2DooAWJoZS4Z3azkfgWbnx",
  "key4": "3A5Lx8m7VEZjxKnoBcjHkkQLcWNJvYhqMs1e7NVhTt5KHM2VqXN6QQBUS7M6C7pfbJ4HXJY6ujjWwYkMdsD7HLZz",
  "key5": "3sYGTksVTtWA3tjoGdPRbT1U1YGuncHZ2ngXDfMhRz2uU5JJPe3d1JLR1FaKkYBq4U66xDPurpncG5W7i2hy1UBU",
  "key6": "3Bpo54v5FLDpoPMFneViDzU46YzqH2SBUa58D1xzXedYDDjLk1ZQUJCrP2b3wP1FgwCRg8tk7NTw7coMBu1zP36L",
  "key7": "sCRTY3hACiuNFxKBJunEgGAuShKn1gE2awzWdk6kdFfqNG8Xb2HNyz7Ek83DYCAcfeNySnTX3zN96ADaVdG58c9",
  "key8": "5WPdpho1NsSc5sqGRqttACnwLsUCtn7DmVeuzDr8nfKtoSKgi7e3UxHV6Z6G18epzBJcChZHgNYwTGDssEckE7yy",
  "key9": "3FeKRF4zP2DxvfdcP6NaAZDQkYWZEvFyFDLkDeFWXzmFWxa61bsCRNyNWQae349An2pJxLTNrvvpfX4xxXVqM18B",
  "key10": "Q3dtekhXVokDpSsvsRPHihuqYt8NAw4zdy88jnCxX1SppZsCDG8hCAGisDN8uRzKJieMyKYJ5E4gD29DCqydWAh",
  "key11": "3RY7rZpWQeBAUviBbN7FMod5oNpQgHm13USpXamHWt8vKD3C6kwF5BtR81Q7BK5q1XWU26s6C7HasAfg1qQ41h2C",
  "key12": "5MFGPEKyTNRVgFxuKVejpP8AFJo6mcFzut2FfSNC8yZbKZVm27q6iitvo5VxwbcBcruUcj8A5HTyaG4jCB8oe6hK",
  "key13": "2pNS3Ffs3eLiEEg5785EGhUB97Ez68Mgw7qiTDbB5oaAMrm1W7aFv9AoTqinvbHemBdHJw8SiTxZ92K6mRucSVby",
  "key14": "SW64iExUDiaXBKrbbxWQU6QVVHurACEzkky8uPsn9EDW8N8DAjuhYCjKbhoXzfPnBJMyD95kdaXGjRehHqTfQ57",
  "key15": "4xxMXTLMKTTQEAQtKD6NRt8x9YJofE69YxAUDLE9141dMmBfH9hX1zPSkz7zRLtcLXrcfqA7bsSqfL7Ua2wReJSv",
  "key16": "2Jas6SbYo4qS5s2UCDQLswkc7b7TjCBHMgVNLQnfdxiiWfwTNqaRbWzxjuuTtL4Fupc4zntPXGCBBwzTzJiEDVek",
  "key17": "2B8XLReiwiAcyGwSX6TK8Drww7Th7gvWQF3RZfYvUpDpX8unEePUCja2gEKheoxJ75e8E8yqrsmcHPhz6J3csUiU",
  "key18": "3Vg3p8tYBKWPTSefbZozJwBC6pngEkAkmuMv5QgRJE2VQPJkQ4w3YULdaa3TfcbBGSAXxs9aXNiTE8pzWp3k5Jt",
  "key19": "2EXuVfiyUniRRHm3fFkiUMMAcUZvzRM3dVaNVEYyKzGtKtY3YRU1kkjbRVCEvaCv8anTC1oA2U7oTHhnG9hz3Zwt",
  "key20": "2zfyhKEjqZdqnGsa3CqJ22rTmFv8WWjLDt2NSmYC4hvF2tGairJgCfvGujRUd2iVKcJDNDerpd1SjXKYByZU4zPK",
  "key21": "5LLLmD7uza7aZ9WYxVEBwk1YeRaRRFkBCVjMRyLTou82bmKSt1v6BHYT7VzM4EhYG7DL495bap96vdJ4bHfU4ewJ",
  "key22": "5UetBzyzLVE1WxhzsuxgnZNdeZvY8VbEj5yT11GifZfg4oyqTqd8Krq2qp4uPHAsb63FPMERbF4fGFsVx9WHy4Wi",
  "key23": "5CZxeA89JYv76c3EHgrcd4MUQGSXejTYRkfTJVp6aCSkvqyiY1yqbN6WYuJYo3J9aTqrNgDNFP6TzofzrDUePgtm",
  "key24": "z5nqkTLCUV9U56JYtieaAsibCYbgk46H7NRCXnb9QvB8aLyJzvsk7VaqdhCZQCXJWYD1HddgJtiKSqwP9PJQxcv",
  "key25": "2TVLN6kqCzEmwPQQhwauqqMc33RyYbZmQKtz95AUqf5DdJk7eHDpBkdiJaKci12hFZ39MmxZhKeRvukYo2aAvoyQ",
  "key26": "5s1815nb5xbvMqf6AxhcWmo3B6ADFVcuG3MSAtrBNo9VeydX66cA78GYfk5BfpnYA8UzU1j1qafAnKBcQpgTve3M",
  "key27": "5xBg5hCeiYjy7oCrvJYMhjMSan7mSHGKV6M4L9B2f8CdPmxqwdyU8WHNtGSsTzBFJYDEaexZ3L3Utcst6GAcb6k9",
  "key28": "4Co7QtKQyjKvoocE7mVSuR46iEirR68f7V1ZZ2o8RKqdFSCSbQXBS9NupLJUjbCkMN7WUxyzxaexfEPbhMQ1nNwV",
  "key29": "fX59j91ZHcEg9j4tPtmqbTUmyBw83CxgPaEzxsu5vdZynM25ZMeHEUjR6cPRafWKXTnDV9BpNFpYqMz6PgvbNcg",
  "key30": "amAn8N9mFNv6828MDo3w3cMbRhxnUvxPJ4CkxD3tVrk6g11YrKPoPMyz8GqbjCGuad8UNTBZyWGkpRGhvve3TT5",
  "key31": "2Uw19vtQAwU3RTFQr7eDeFmyQppPwV6dzadxqajDoBXZy16qtpNJ2NK83bJrdB97gnvjumjwZn9rxgWpWQ4pUshw",
  "key32": "4WavoFkdewWcVEp6o4Z9ssTicNbBnpWE37FGRDQrDLggc9tF6mFnWE6FkhJ515m2dME9h4Z5h696762yyvLAFBXA",
  "key33": "36iR55i6xcmbpSk2hB5iCs7dPSj2cmPMybiiFmCQkfoEuMZKBwetQEofeQiEdminBVz56n6u4SiTqjZUsqZ8yR2R",
  "key34": "49E7WFAHCMYmFddoRmwJ29Ki6MiD48P7Sk45KNATeMroFRLqL1KmpsC4SH9m59sE6v2qiopb2tm1KCiNjoEEmYgU",
  "key35": "2kZzvh1q8zaTRhbD6yGU34AN1VvvU7RfGV4gCcG81jxpudbh5pKbbnudHvQ3ofDBkgoEDhombdqTWkNt11tFkcf2",
  "key36": "2fEnxkKSPbxSWwKYoafkMrR8t7crgSiEjSXZaZyMiKwhwBV7pbCyUc9i8u7CWt15iFF2dP2EFWz2hyzxrN5K5yCH",
  "key37": "cCpxSx8V2VYrvnHvXVQuxMRJEQHnT8r1zaWgqcGwDzvBUcNgyny6opLTw7nJbD7EyfvpxjsrnsacijJKpYnTurr",
  "key38": "65CS4uh3hf7WYrGJfWLAeB8H5gTZQMgdyWQYeLVTYmqJfmpWqT7yjJV6d4bCfKgbKuMjfTFZZkrqvyVi9t4e8TBK"
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
