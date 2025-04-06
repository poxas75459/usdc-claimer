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
    "4LbURbpLsQZag5B8nZFqsfnd2wH8zAXkft5GwmmBDTqwYHkk2m6kKA4GCt2ZDXLMharDQpCEchLJHDskQFbxAxse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SnsoAbgt1P42NhAyn9sNxgPKx2dQ6YAWnzqgvZcsPBg2QR8CpQi4DEXEtvjCCayP8r2gRht8DFJFSQwijTcTtDY",
  "key1": "3QkpDTACu92PCo2F8N1nTf5RedN8UKVzvWriyVZmRb668eQm68s3Z7FLhrxYQT2jytf7v6pw9kXnAHfavjRpKGKE",
  "key2": "2meqesT3z7Rbm38hkvM8HVXLNL4dBn2sfFxG7HTzsQMnsgZvDjDBD79e9vWuswjKRAKPNyyUGD5ZMN3cPeoyaZRN",
  "key3": "3jahRw1AGDrfyzdvSCXP9idGD8NqPfR4KKSVhAt2xH3eBVbmhyHzB6ygAmjWKe1mNDBfqyARFvytytJaYznZf9bA",
  "key4": "5T1FtBCqByUNQWG9ucKMQXXrDduvCurcvxGvtewNAQZBb4TAmQsSKaMVxzXbXE5HKP9rWFd3NXvD7GnAsUU6W5jp",
  "key5": "4nJ5HRasK1Cqb4DP3Jhmkhb1PLdz6gyg7TuEsyqS5TPiSQdoFah53cQCpR5HcHf5NgKQ9QZJotyEcAQyCG2M5JDN",
  "key6": "4dt7dApyjrCxGbJnU5vH2AhKGvJxYLhVtfvFwoLBFiEyZkUpvWhFRCKSBrXPsnm47NWV1q4yytPxuYGoFwyibr3m",
  "key7": "BFFyrtXthokP42bjGkXujzFuwekm79mnwmtRKMetdXV3g4ANySo6KQmySst66zsSFdSRR2sni8y2DTB7K2Vc7g5",
  "key8": "46MoH4UmJJiFqsQswrvsbMfRrfyaYPWG25DfEntxw2sVvz1RnENMjvJFR3g4L2PCWVGDPKK3LNGQzMxNoUyodj3x",
  "key9": "5o2uX9WrHpJCrAk8H7JLC2DqWJE9p6vSR7cMzWH7xXjQtGcV3zvQhV6yTbsspnKN5uyERAWqn8EcQmDZhp1v9GFK",
  "key10": "5ZiauUEtQYPa7UVDfeAm8ojQYxApXr5trtAA718jojpTB4MNDv9TyGq2yysm6eiyzJj7w7hNR2Maq11ZQTyBSizC",
  "key11": "3z37sN5u9wSbccib4epT2pBRrmvS1LTP3D3DXdtKTGNQDmXJ2g12sDcaUXxv28zimKEXjwqTTzDzQiUSGpguc483",
  "key12": "4y4Z8kfQEVLGcsNKm8kV2h6VyKrKGuyizL9sRJn5BWqskdoGedHmGqLPXEpwYKNxbhc8HLKpeJ6F6hr8nWCn4dtv",
  "key13": "3pigJ7QKstg5mhGTiniWH2cQES5qXkavGbLMNRH7wFebarCxz7GCJdzugvFG8YG2h11PTjpJzTEhMh9paGdrpJCp",
  "key14": "2t5Cxx8MsnKwHaKMkCqhTAZ6mcwRw4LPNHZNFcMvSYt8RhUV5ggRpcGdSjUL9GHoQNgCDcai585spYpcVpnTbDbt",
  "key15": "63Gwz3ReQLxHZbhm6JHvd2Hsv4PJAzR2NyJB9adUMPXcFpgkcCsETfqkoX59N9WxCNwjWFtd8CCu6ddGf1K8d6Mf",
  "key16": "3NgB2y8tUzGpBJRxQJRKe8ayW5FNT4Qtf5qRNSemAMq7HWQcgy18nVcQ5QyAvocjh785jYwqyP62RfBk4ujN4ng4",
  "key17": "4PkpiqvigozomJ7wq8VEueUfW6N6pxMDdPXG2HsYrcdXvtK7C5HyWhgxodZjwmw6LXEPfZegR7r7TtrDzX2VmD3q",
  "key18": "5ZDSmkjy7H6QEWBG8LYn41hYXESCuFRAmfPncgUnFHmyuhu9pKnrtgwBGXLjYxoDfTmkzKKEj6qzKMUdAUenzRMC",
  "key19": "5GxWH9N4bccXoxucseferZu7MxEnuaYRbZuxkKRgdEMRwb1sBuHYnQJE58T3RoKN9wJRcowKdD8pjYErL82zhFU2",
  "key20": "Tz5ovGUBDi63874KRxE3YS2weZejQ1ZSiry617hWHbjQ8j8RUybEawBCUEMoRwBxkGVUw5icGU73MuiADfqjTg8",
  "key21": "3cqtjgWwfYiTTVZgjm5UzP8tx7bChbpdxRP9fpkURLmkigrxDVpYpmHvBRPXFRQ88Vby779gTVQbgSG47DZ59ncL",
  "key22": "4sqrSphHxPokHA9djAvfBTMYq1q83YiERUQecZKsrCzVJjMNLKmV5bP2FQNHnAM4LzHhFK8tYoWgjboHNUG7sAov",
  "key23": "4c6c9end9dTNaHYjzZrn4rjJd9KFPtzxUnrqiWez8CJkVLgMJrYM1zhDAebH3CtnGGn6wVPjw77KMHJkccFxPQSi",
  "key24": "BgFzVA6QYEpGxSdXCrfbm2kRKxVdT9Npu4JAsKDxWcnNZhY6wVyGkdRxuXcniueqfn8fun71ThhLb4ccmGZbPgX",
  "key25": "2Wsec97z5aZHfjRN51PNnmH3h7LBuxgYztSpg3tPqXLy9tEdNAb6xJY4PvXVD3AgEY93wSEpfB2RiqcoU3nP8tay",
  "key26": "5EdLwReW4AUGds9GkYzhLnKLgdCouSFnYByDvLz98wDCj9LAKTQQiDMZCJH4N4EVN1pZ7AFV4iHymz6Up9beWFoN",
  "key27": "5mz7R47baeZgKwCM9yqzom3JW2YgUuyfUkTiAyveskMe8CXNdSQdebUhhubf7LdY1A8wUsLGoR2aGoF5wuK7mv22",
  "key28": "vuDp58h8DPqqDQQSQdVL7GshQGXFwvw3F76RtjSc6wEPqetXuwegj3zdN9cshdaoej5iALJqbfHPLVZib3Suri2",
  "key29": "5yJdmnboxs88LC5FNExABRZxgSYRvSKgU7PubKvdSgoxGMS1na1nCz8pr6VKhXJc42D1oGqk1HQR1fyaLFUewHRJ",
  "key30": "2Hx86wR1S2oddMCUDQQNkJn1Q7NLd3ETU7tGh4815q7EyWZcsa1s4c6CxPuD5ShTp73nDjE4fQAvj2jC85Qb246A",
  "key31": "5dvL8PAthNPKVUC3nPuczxA49CqaxvmhbQj72psnB6fiJpHumenexvQVR472VDR3XFAgo9rqFQHJNKfqAa4xWYPD",
  "key32": "39oKSPzwfcr6YxYiEjn9G2j8rjQiui1znuBMwrS56FAddBaRaqA1z33XjLSLyfqfQ3BTmcJpKgZcQcWS8H98FXxn",
  "key33": "3zY24g6Y7sBCbtPvUNikYMELMbwU3g1jiyi1S6JipNiGb62ajXPsP3zLZfUV1i3U52UTGFChjwWjhJ3x4dogwgmZ",
  "key34": "2qAjC6X13HD1Ev5DJH5RBxp3kHy8PfueHottq9GTasQ7mhSQ9TJV9QRY4LwPkPKw6jFhMpv8isdy2M9RSpukAZee",
  "key35": "2yrZVSwBS2dZ7Vc6Kkitw1vUoAyswzEfmc1ZHRQTsMfu6yYxnaWLU68mFj3kkEf9M4GKwCZA3nrbApBuRw76vTVe",
  "key36": "3JUbXaiVavtKhuTF6dy7eZi7dzSf1bGmpcCAU9Pta7fjS4HvJ4iweNe8yAwzJvXw6mQ57d9tzEHFm5mwvDXRhALw",
  "key37": "4ak6jSMGiDt8U54Kfvo79kuSmfm9amsT6JxXZPm3wUTYTSQGGM4yZpWkrF8M2gjqnanG8iv1kQNT2VXHWpgKaQu6",
  "key38": "2AVQNYTySZJxCa7WAxEtKyuzyqquH68e9pThsmUQXkfuLnEBLWpBRMizT1obRFK838ZwA3wdPxJBcqxB1WcGyqNW",
  "key39": "4Q7maezS7p7yc2vTbUTKbRZ2PGCfjP3RVhuSoSveWVvRkADUGkb94JEUUmUuwWBcMcDeJkTdxuXDALEDnWxCdAjH"
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
