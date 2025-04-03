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
    "4Emr7EEL8rakwHpduXdVrAgRRJqaKBtXWWbESUrXoAKDMX8dZ7v54ZCouS3koKpFbo4ZQ9Vgha1ix5MgFhmBqgxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyN2hhj8qo1EkJWmn9V5i7rJ957Z53DTyDKLztSdVP5yojiy3knLcJBvbBr6b6p46WuMx1XfGgKcfWfFqsWAKSV",
  "key1": "37UjAp9sBwSQVkcXGUzfgJTNd91ntZEmExb9nN38giY5HNPWRjbseEDFWL2h1SMJgb4NF8uGE5hkicmPWrqzDw4B",
  "key2": "2tiMLHeA1ioze2yPRynpNKsMZhZ8gbXJphuTyPfDFQXx4X6yh2q1bEg1bmxD84X2AqnacwU26hWGTA2bFjhG9RLg",
  "key3": "27gqaEcMzWEn5ViyXTmMPfjBawzjTo2tZNG3di8yZ3bSbrFfaNyrTpfdhPFdXaGwTrkkXnkPXB4ShGrGkPBpU4SE",
  "key4": "3XAzrQXeBCoWYz1378N26aZcEjQw1FfcBiKBKUyJLR2F1GEpTc3m6Qusr8x7z8mV7sNxda9JJNsBygcyM4SkWcfQ",
  "key5": "22NqS7UvTh3BxQJb7fuLfDC2ZGjVvdz9td6nYisGUhWaa56VsJEx9a1XgZNKX6oVBT8h1MTteeSZM3D2Ftrs1J8b",
  "key6": "5Y7DCtzB7tUHhbnyge1A1SvGk1x1arFj6TxLJp51RDtcUzMWdooobPb5F9k724KzSGjSyBjQkwDAersCN8yRYWMn",
  "key7": "LVvZztfGZiPrgs5D6iw47wYo9nyGYKPg14fGTmhaGgZLUQdXnDY1cmX34xZUmtTCxtAtt63qRMxHQFAUj5uDzYr",
  "key8": "5E52GiJsqbaeAw1RsPFYqADvPbx4jr5pfexEzmt1oto2kkBuF14ixevrpv7vSJbtwkRM2wLKkp7xYiXpQnMdS9QZ",
  "key9": "bJ4T9pcZF6UXGN4kBVNtpAYThtZR56CUkHWNCFbtYdh5g3ma76wxTXT3oXpUUesWCpLVfgnB1xd8uWrhhS8fFHF",
  "key10": "43tYMEHNbiN9qMVzC6CmaHZ4mWTx5SZJGZBbLmZ6DTLkgN3SqxTGKp5zYtoqyk89PZkLtfHKS2wxrA4LycXBKZS6",
  "key11": "UjM3eFCHAXHHVgYDkYBcmvoVkcJSohzkWEoCTraYuTXuRmkBo5JMEjNh71aY5RZFDcuTgfFSkJ5cN5g6RbffhoD",
  "key12": "4Tskx3rrpnEk5mdFEr3eNVqmMksB8m4kthLwhZryDrKMhYJjKkhjrqYfiXP6ptP9uoMTBWBMbzaLdEN8i3wpvgxv",
  "key13": "2vSxoanHmMVPViPTESxe1E2KEN7AgHrxAPUPRkppLPpd3zyNvcAoUjx9m8HgQTwtY8cSNuPVwmeqx575BBghPWj1",
  "key14": "2B6mnrjuaHiVwAASi5JLdpiDaqFWQ88hDRm3ijyxyHRSy1Z9H8PDJyF7ZxkbJQqzrkpTzKzDBBWSvbzdwfFahsbr",
  "key15": "qY5Nq6MTbqYrfiuhcAA2k39c84aExETkHocahw4kVcHYWGJMgEzWwxzaG2jNn2Qv6o2Y29XsXM3zdRLR1ejJKS4",
  "key16": "4fVdmGTx1ejNK2yKrcmfUfdKaVoABLHaevXgthJmcsLMepLt8UQofoHhpxbfg3HskDKMT4UGY65AsYfwKW7ZbjWA",
  "key17": "23Xi2u1VXQt6G9msUHAthcr9aqhpsGNG8T9AuV3wXiv1xg4LFhmemjq4yA7fhWouXjKueLVkzQWSmX4mVZB5k3wH",
  "key18": "5dTNoog1Zz7XmmMd2GvEdjf2JoEya2SQDhPrpDxXSy3AoFsUYCpY6114vyo6wi3vA5m3121fUcMphXVtFFnm3Faq",
  "key19": "5jN6XYRfoaE7NznXg5tjVN93qc4X7n74SZ2CS9U2wvo88rzHEqjVgkT6XjLtJWEiceE6zFyPvjYWZbNYtsEC47ve",
  "key20": "4HjMZET43iodiWvUG123fn4UJmQ9nHRtd3jnv17N5vT2tYKBu4gEUit4opRJbRTSLA8cvwaAnpzLoCvSjhAibjRX",
  "key21": "3BbAVTqicoE2vosvyy1FikZpNQ7kBT9dXEVXQ7MnPhaKd9Tgh16C3YxVxkXqpTKXN7Q5KW4JXNtmweuJCbwKyJvP",
  "key22": "5uxUoNwhSzQ2eiAr8f4YMAkWiQjeCe826sY9bvd9grV5XVd5QEN91qzdYLQ8RYf2DfYN8BygdF8Xp7GxFuMgG89",
  "key23": "2oYPecGG4yjvP3XPHYUrnVwX9ztQWbhzJXiZxHP4e3setkrQyUukbEcuXmtoQve1bwkYygrCWjWFWkC7RoqYRca1",
  "key24": "24KWJrsuCPD6rLNPnwfeBmhzVSrnd7Ap7X2Tm9keQ21XFFTYXmXV6gjFS2kt948WgHkBqeTdXmA3vpdUHJjR1e3K",
  "key25": "3F6pPchwLiubWkaZZAxytorUL6Y76DCejRiQAmujeXaEBxE4amz495AxGeePQxA82o7famL4KQxTwgTPXTfwbxQy",
  "key26": "3EYiXUj5pGe5EucRwwhnqx1N6XET1xMvX5dqpyoZL2D7kycrZ3PtcVFZpZNjLrG8vrSSezNxiWGzaVkiEC7FWKGf",
  "key27": "59b7x8TdcUumMNDcD6ZDzkeByJTNv2VFK5hNT6cTxJ8qEgrBdS5D76uYq1d5jwLzae9rQGKZmsBGMcJG8SrXBce8",
  "key28": "4A1ok6H47PvxMEb5XRq9JTTUUivThCkewupiSYotx3dyaLkTJiN9vuZQGbpDanyrrFmDYVELK78EE98fvrsm5wAc",
  "key29": "3yVDpLTG3BgWvBcoaBEYLuJjsZCPknaiAUnGn5DUez78p4ADkYPYxvWxutbjG2eZ23g51Yt9RMZCV4EjTtdRX661",
  "key30": "39Ea1qtQG8PCwW9ioar5jqfRsCoEhoxL411AZgma682WhmRBLWYzuc8Xvzn25uKnii6pNjXe58mArY8KaXNn5asc",
  "key31": "2ejsRmzWbip8sJgRS9SfTvsN3tbdaB9j1ecVZ5u79JkjVPZUrpn6bBYDGidUw6PQdTP4Wqn8vybbWwks3AhjqN5D",
  "key32": "Ugdf5eeWeTwx5pSQVcGzAWJZeXeZWqd2XTharRRbgw7skaGVx5j3b1ij99AkmwGhTfDB1G2YxdoPHZyv4J5S1ZG",
  "key33": "35LoTscEhYaecw9jnuZV2ypYqZBw2hRHL9E1zpJArvcpFE2MzQsRSReGhPwG74x6YfNgEMRVhVt2UTgFdCJB27hD",
  "key34": "55o3X9Mt89tPNBzbXr7ipcggzmdBpwhnEi3LjGhp9fecKapv2NymgTbtDGSn2VDiR98xWphbXX6WBYeaFRFgjTAi"
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
