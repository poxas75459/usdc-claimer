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
    "4Yh4t63ngPvvzQSfjK8wDx5dXx18JsHJ8UoRPk6qVtGQDRqVES4WWjZQidnN321KGRDNcntcC6tDQwvJtkJo1DT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DnMzqFP4uaFDnUiGpiFxmsMVQQkheG5TSTmVV3GjGV42eXNEDxsJ1hxzgnLsNprcfUko96TgNq8cfRdnDnbo8kd",
  "key1": "4cy9XdmJV8Ak4gKMpFRq5tTYAiNFwEbw3p3TDe4hcgGbaBYNxz7piReFpTh93NCiMrEoANEDXwbannKC6wBbUyUX",
  "key2": "ndtN31QGNF2T2XGYL1fm9q5mPizkDs9kjeaE3mvaPBuGpQXLCkKrqScSeN4SUdPZQWt4qgAM2iyhZopwbgXS2ba",
  "key3": "3f5TYRxzn3VH4YFhBYTAfh6qoApE7xS7ghB9qXvr4o4UaRQfDp9tDR1ojZqqAEpEWPdNtXLvBnkq7iugd2km9Wk",
  "key4": "3EpoCm3Xuxen8uPbbB5mXzytwTDpFzZnEpk4Z2qbyZC6uNV7ndS12WQkhGwHWjhDREUeggXHHfCJe1Mtj6dqu1UZ",
  "key5": "49V6Abcfq7TLzL2N9oTRVAYQZMSFZ9R52Wg69v88TEdeDyg9ugJJVbvDvcmWxLJyD7uqCQRmgQhT8VKjJce8wrFk",
  "key6": "2WS3WBCY61sDGuVAcSVdy8BaBHfrXaSJxJYTyGMg88aLe6QvzC1tzQ5Uw7RNARyMe3GZSCZTcLYfej1S6tdtgzkj",
  "key7": "4eQNFzkvU1aVDHT6HFpgY2Vi1Beg9cJJcNyoZb6M9qHGmtwPZ7qc8PH6pgNzBCg9w7ZEhhrQcwU9wBQo7ey7JZ4W",
  "key8": "4QtYbpg4ckexVYSwsaUdYVTKHXxNwgygzUwnFCXFAwhEYRUKKH9ZzRvKZTwTu2zqViBCKd4hTs1NgBHWXtrqsMFS",
  "key9": "666HtLsarDaZu4M2RaMtdPFm9AkwXN5j21EWkbrXGiYPCdrV3miJQ91f6xmijPyJJS1ffnDKFCm2atJpfCRSDE2J",
  "key10": "5dnsEpnWoThxrR4SDkSaudeQrTtbMXkJ4mg8pkbxiEXSLqc2vLkQqyvffbkn7DCviVzJEbA6uJUEMXav8V9XpaTU",
  "key11": "5BNkDn4ShzDvGEKDMpvuwsqKpiHdFym2YaGmbjNKW6cQR4VmPG9LxM5woX4sbshQjgBY3dmHYkztSm3cmUovTpuE",
  "key12": "4GqRJ3KmZCpLHDhjCuUy6Tsmfb4PRDWWLmbRVx2PxbX2hR8Ns7r5n1PAUYewrpSKS2pMFACKQKRt93DvBnmsnqTG",
  "key13": "RBJLcgDVEJgFQV75Te7ERt1AvBJBftY2htXSXf74GmB5wHWGR8k41uXE13Z44mz7aZ62DgfGJmNDy4BsKDJzsZt",
  "key14": "5siuDy2iynGKZk36jYE6fs9bFRKJuT2uubi9oMTK5Xp23ihhBiweQxjN4fHe5QikjidQwA7eMzYPbDXhHSYpimm",
  "key15": "3rpwswipce43fohrzETrKEToKv9Ut2TNWm5StYwyB3yc99PmdPBVCRuwQc8cyFfrE3iMMkmdzWDnyCM6Pfe4omY1",
  "key16": "5gGbs2NKgxEnaAV93fAz3i5mA8vEazSSVmQ3NSB1ujBLGXJPUjFLbj9tByBoReRbTEMhCJJicC82bPZT1mdXzEPb",
  "key17": "319ZRWErtXcmktFSctqU8WuYDvoLpsvokDNXfKQsM6rYaxJxZKgQDNfSFWJMvZmtAfAj61i8LAv6VQ6Dqt32Gu5F",
  "key18": "3wVzuVakeqPDAKmWS8r1i9QB5phfAmmEcfoSu9btNMUv2tEBDYAJ8gc7dSE8k86ZJ2QRW3RLfwxMq9bymDzcx61z",
  "key19": "4qTdw2fzokbN6eChEmLDpQzFDP1zSV6dvK3RDxW8AJDRhrH2uLH2Mua3s86qQw7JVyzoxGAsb3KXt4YA5VKgG4hU",
  "key20": "2JjK6brjmUZ8KB7vHpPd1v8r2T1Sj6beL4AmvxMoGZmmVAuDx14CFhPMCY4KnjTQaT75ysHwLJj5yM8n7ao9mso4",
  "key21": "2eAKZVW6DpLPbvFyqM7qis1g2w2fo2yGLfgXvZvuhuVytq43ZTzJzTNX6yv1kkWPmbVBTFgtT2nX1VnEzQCYixhx",
  "key22": "2A7gYsPZNRAWypGuppn8mZUHFLvXdHhDgNJhZ1s2XcRxTcj19FGNGXXBUTzXussGYopC1FbGtKpsCpGBN7JqTtgA",
  "key23": "5p95tDnBybfx7RUsXSCcunerwmDMYGUqPiNAZAqqUB94aeAtnb6iPHDTFieQxubGW256isAsLoTdRF1H35LKqpJW",
  "key24": "5nDbUYbFPC51Ej56Qja6f3kHAzxeC6DtdHUPUgP24igRoWVZTMogF1LXJRdEpsASsSXchVDbfoJGYaLGuEtRAN66",
  "key25": "5u9CEMTCsRKnWnuCxKHZXUzBrMRHF8NAJZogmyBpYSMJgrMa626WFx7oVtUkkctbo5U3iUd8UJ995J6pZY73eGgC",
  "key26": "2kQDRoYZ9gRxLe4vjwZbYcfEacE3g6xgadGJh4E1Wd2TvHj4Z3VLvDoputgFg6gMPCYm41buSptc8ekmdyAPy2ov",
  "key27": "3TGDKTx7SeHgMeChGZZpJNx7wgfGTKNwgKv8QLKVZp4UqHwmyndKP16UuCwu6UF5DFnhJYmUT9859Meyod84oCXa",
  "key28": "5mrRktVx67P7yEaaLxoE6NJoxCEoHoRcXvy8Pnmfb1tERNmvQdkWkWuPVmiCyUYVacdKAwtVffPt6Kog3QamnxPm",
  "key29": "x4fFxPmKgRXDpzdpJG9EucFGBsQbteAP2ubW6b4a4ZcrEDDW2sCgNLMVYDJzzoaLvc8zgbkQCmaHBgHs4Sh4Dsz",
  "key30": "5ZJFqKue6xerQyRnA7Y56PzqWzr7tcbwixvnZ6ZdCPhDvJcePz1FvSjud4ATtqNvf5GtizMYQoBtjg3pD7D2KtRk",
  "key31": "5XNrMmE4w4NHFH8xVXvk72XsTHrF9sKac6kTNkZSZ3uPTFHRkoAboBisrC6Nbzy87NhDffLzcmCmPg5MNwhruPdS",
  "key32": "34kTeB7SkFcQh5pStCphe8chrBJaKAqeCTTo6mz3AgxEuHBbjZKhzaWRHg2xYU1NJHqJvdopjSrVDu3krKMjWNx4",
  "key33": "42nCfAYAeVndJJURm64ErsB7W5PucwtGBm86gHCDYi9Eqn71RQ5126ZQDFSwTmjgS3YEfWdpzdyEeFfGuha6jQQH",
  "key34": "bVcHZSsHBNP2FmirjjatqnQZzfpfpcybQagPoVg1ycJV7CcCKBuWX9coJrYMcZt9XacHw1JqJ3XS2dBVTNYXmoq",
  "key35": "2QHrtGvzEhMt3smtaGvt1QSTr17psHVm3Mt9MrFAsWnW7DjteZMWvmhDpRrgHkfQ4kw5urvB95A9DhtC4PzEGeyG",
  "key36": "TVNATmJSadrXWUpEwjHXZiEVEXBFHpaChmyj8zSRCy9ZSF8JKLofD5npw1wP6ZgL9pskBh7V4sUQzGnhrmDwnLm",
  "key37": "5SkviXj3mrNisobUyS2qux7Mok55dCciq6mwhu2j2ndTV3BvNbuqAB3ESgNDy5kvx27FaeXRqm5mduvXUDBvkvAy",
  "key38": "5gfTGmLnseXtofeUz1h914KgqD4cRNFnYnU6Qi853bwXrhgNTJjJGbveHrYRdnuMMztXocWAj2DQFRfkEGGH66ms",
  "key39": "3q9YkZ6SYs4EKGcSCYhocwqDUM7w4paGoBDWnrb3ZxfCsUyNWhBfKJ9n77FJjiDZsWCnK3XUaWAcEdgpmsRAVuPf",
  "key40": "2TaPRSkoZ7NuYxaNRmLzAUSCi1qZcNWJ6jU5AbwZhZQQHXNbhZqBBQwstgqkohDANJ4KWfrByKZj4CLBX9bxRJuE",
  "key41": "5shjRTrVWFbyGeA7naBwEYtAdhP7ChtCSn4ARz9WRgCxekNRgxtbGCDe8xPhZQWze39xhkpoJHY4L61y8pe17ZQR",
  "key42": "4ksYu3W3vLT9LYctL9rranAc8qWXdZUhoGBwbQHAdqzK9sD2NcTGztMNNdbNGrGMmD4QAFMgoEufykEAqVTfRRgQ"
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
