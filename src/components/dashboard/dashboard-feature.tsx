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
    "2hvRrU5U1cDaB4h6RLzgLU26NdYqe1BCUYmfjGDUa9vNwsLZqVHC3KuAiTGAS2ohpvF6yAM1pcpHkqMFxc2VV6Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SgWeAh4fjFBmbE3z1L8gJAVQhAzLyEvUAZqcgr2f1An74mpohDsFVnD8QKqpiAgQu3nu3YRiwbHxoN4WuUJcpVE",
  "key1": "4YDutkfrw2osynkYwXkoJy1F9vu7SVVzpnQjquiEmH6AWRogC5zqt51YUcgWVN6HxeUNMBUBQJrQTukBu3DKqV7H",
  "key2": "3wLv2fog3VuFEhngYU5hRZBoS3ujCNtKMaf1SiKT2v5CpgT8VXHuCG7Yj1n4RASXnXsAykFNPB82KhcYjR9aFsDP",
  "key3": "4QQ2aBbdysTtzV49qvto6ThpQzbWuWB9J2cHp3SUN5BAqJhDJ4Vk6phMTvb6TfdZnXSMKrF2tiGYG63MXCp7zYrb",
  "key4": "5AL1MwYUayGLSH21YYFHUzmiNRsFBGD1XreupdpDUsm9xUJCzhhy95xoRdkicYf4eUAgFA9MM6dTQTKTfmTnsPR",
  "key5": "2yWUyaY44zEnC5ZwvYF6S1FSdYXZs7augjKUwAvmo9QhNVamSv2jZMMMFWtoZnihBZPgq1H41tfBdbNAP7gTKLdL",
  "key6": "5uQK2jE9LtC6sS1RryEePu3vCLu5aR3uaT8nkUZZQgjgYSGMFGd63tH81izNDZKwuVz22b4yAPQ5nD8ZvftgAN1h",
  "key7": "4SE2jDsa3NbMTstA2NhQ6omEkfuYX665zGyf5LukG97FVPZeLLG8DJ91qVar79kA93aPXjnvAcMgXsdHpDpfJcU2",
  "key8": "2JkHn9iZAupTaqLvx3nLoNWm3wSmuAfM8KYP9c9DSjpJqWUSE1YXESnxqAvQxSLiwhDQyziJ2m4cLw7X8P1e3che",
  "key9": "4WGKX6UUm16es4jF65pkHZ4SX6uiP3DNy9n19sGbCVLdGvVUdzuXnRJyTwFt1SLfeaHz6avr94pbppzi5VVTKLd9",
  "key10": "5mWfRmAgFTv1GjKDJBCc5KacXcrxLoXHvhLKpCf1D9FKdwKcvkvMjHjrHBsYwSC9aGRxu9Ma9pgp27nFj1F81uyM",
  "key11": "4RKeB8hAwPggcRKWT75zz23HVibzmdDR8BgKiLpYjU2yB5J9kjiT4uqA8ewAuhz9wMKoxUhoCtKDtqvthKD9GyAa",
  "key12": "3jTccefo6vwY4cXX1ochivzXabak3CzsiQvc2zLGK8L3VD6MJossRjrg6uzra6fWKrUsMPZpmGLn6qNYb7n4m5i2",
  "key13": "2jegK1zvPPLHdWf7x1wq7BeGw4iWBDwzsJRD28dpkX1FfzU4JkfNzarmvASHyf3PLWLnGhLyihMGxLkASYYmkdgT",
  "key14": "US24iXrLpSfTLrY8fYdDR7hvBVxZJSo3iqNAfr1NSFPcUTcLQKrkgB7HYacM7ZriYKC2emp2V3hC7CmKpbVdsnR",
  "key15": "5JA1L7n7vdawoSUL7aRyXoWr6FaQj9cMhp15Hn9NoEKpDqkj1koxdvjY7JDW6zze8UvYwgudj4M2QmZgnEQYSj9y",
  "key16": "4krym25vn6UNbCtgxLfZ8Nh2e6yoAQuiD6rYLyRhraAqQp6VTS2MeRBcN9t61Nq4joZynBwqWrkCA2qQ2MkWHFuu",
  "key17": "4kFSmAjScMesq7CDPqttEqgiXRYK7FGGgF43ubFJoSp83dNvT3KyhhqtzZ585bZ5fqh1vpC3nRmyy94Ldgo1CU5H",
  "key18": "5RqutH8hTXgNEzQvHDovmfDDaDssiSTFjmUHYz2GYA2qRwp4XjUfpg1EUXpuok5njvhbwVtHP4R5KpQSg52GGFhJ",
  "key19": "3prR1xJ9qW29raG9LgV8aGSJGJP3fBGEwFZ5hGsBcT1TSUe84V2aMicMG7PXLHHi3FAxMU8qWPiKdhTftDyUqH1p",
  "key20": "4e1saBjBfqg45BQwgyrFBVKg73Mfjz7brrQBV6DBgFmfCuZHyp5hodAqu7ireG6Ms7WV6TRgkgG3NdiuBczefHGT",
  "key21": "5tFWaJcbdDKERiL6Yb14wmPdaQksVUWcg5V2TfDfrQVvsRWQpUAjdriPhG63YaNdDzkZ9jBLreWQ7ErmVpggiRDP",
  "key22": "7Zw4Jtwv7Qv6Ei2MiNQ2KpxJyAwM7yb8iBVEKNHmjbUHrwN4GwyLa3CnizD5FcdaoRWcFCeJcp5b96eWADC9B6V",
  "key23": "331tpZZAfecaSi65n7wHPeCKutzJwjk4pmQQLHNETvDDCDACu1KR2hrXEpuNwpVxPgsDhP77DUd6C4Kr1zBpcP2d",
  "key24": "FfdwHCgUJcq4gi9Xq4RZi5nkAPq8svgUBJH31YRA81MrWq6XkZbce9PtdEcDsjqZvPWQfBHDux2knnAmNr2WmQW",
  "key25": "2YSDMDQeCaZLNTCgrcgksqJimJtEBAtHkghzNR2kdhpa8t4YFwq4kmAfHcGAq1Me2jHGqyLZXdzV49sWwSh2tGFW",
  "key26": "3XYW4vqaWRVY8zSAUKryqW9YuNyF2W1ZvQpn8fZWxAhgav1QeXmPbWnJAiEzPAw6xyJ8wMKWihkEMMpxbpHA39tZ",
  "key27": "2Z6VT9vCifiHxMTs4eYndMiiMmgWdXZptrKsTY8cKE3rWvtqVMmSQLhYTTiCVnqSsdk7LdqZS4onxmSb3shZsfTs",
  "key28": "oV2QwxTnGGJTbcdspENV8Ek8iEgAXtasqJzXRDBKPLN1yUzh6Gqv377mvqMEEwUennHrkKr6cv29EVPagZ3EcCq",
  "key29": "5K73PUbtUtPxwRfNB2mroBU5t49uW6CHaavQ4y3PKM4znVXLXwhxHiGwYkoMKy7jX7zMAqRQ6hHjdv6891cHqoxh",
  "key30": "2LdeWfm9jBP1yK8B53HAnwWq3tRyH6zZ5rGooWY4Ha39BRuEkSrBmBA7FrVpVYarcCb3vG3z382zxvKrDtwkuGuA",
  "key31": "4nx5rzvmAoqYH3BU9r9T4b3H9TRWg1453hKKx7YXsCD23SFLc6NjMFfm94bB9rYuu9ySjn588FPeoGjcn3BfyBaD",
  "key32": "DvyHcfNYPMw7SdhfZJUYqLiuqW1mddW2BvtyiZbpReRZzJVqf8MWStx52D3py7cjz4TNSikACpwbxkkaKJLVoXQ",
  "key33": "zaSrQNioQrrT8kocSK3L6Gf7YiHbJ57VRfBFuj89QhPA7vQePHgn3nR95HedBXX5ugVTcEosUkTsGzQUZZHyjFS",
  "key34": "7e193bUwwRX3uY7gyH6ZeCquTtnDPyJWK3beyEoyPTEP73Fe7iG7TMFpyz9WzWXchA6p6ST7wQgjUB5CVnjrNa2",
  "key35": "zVKqorMXhJN151rUnspgW4e1vGUMUCcAKedw8m62c9fyRqYBwri3V2UhjhWG8ZHEEXCXrtSTsfPEX2E81qPjhn7",
  "key36": "2w47MgtzWuYuywadTYoowjR88KKQ5ViQz4iTyr9Cr5XtKFAQSGwfLCAFBG5gFrmowJNDV4HhHwidZwEPCKNibQC1",
  "key37": "42XxbMWFLZUqMMaguz3uusKLCi2kWpiXSJPLmoiJFukVbfWGZCbDUAFn9QtKV9FQ7HPW29DQhZiHsKEALSUf5MfQ",
  "key38": "zaUgzD9XAqXnyjSo3mmR7UrWtYQv6hszVsJJqXrNHLVj4MZnkpx3u4PTND8smXao9mEsct2s6jWCt7EY4NDN5BT",
  "key39": "335h46dGtqB4worbxfZhMyvdiyoQmbBWJ3hsTbKMUFXNUac372FwyQUfijLqQbsokMcX5AJykeTqLgj76KgpN7FJ",
  "key40": "5kKgCciLVRv79iBPT9qo6xoNGo8ToxWSZJkS5MNhbqcn5o1xMtos2T8SVEQaQnj1N4QXgqWfRh5wQ4HfGjwWRp3y"
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
