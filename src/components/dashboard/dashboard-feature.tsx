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
    "4BG3Pm7iYjt7P3HYTQ7Cb9fddTbby4vXaamHfyrTtEqAg2PKMkjoG7TS1GbbeC7NiDTsQ8b9gykhsES8Tw8aCjus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hnLZHA1LzUD4sSrBpTNgePgAzHkSw2LX2wc4DksuQFSkReDLRaNQ1g9VuDuS2pKs5FnwMxqqopYpGDvbHDZ7LC5",
  "key1": "2e1yeQnjDLgk541m2dSdiChdoqn9kkSvhUmf9sBDCx6tprM5CiMK6Yo86oLM7ZaGC2swVtXwLCve1Focbbfb5j5m",
  "key2": "5C8o9NGqArf7wvGPDA4GgDHs7Pg9WDmoa2CSogJX8CZs5gco8mAivU8QTiEhQ7hb9HRXECQymaCVyo7vSPVDK9pr",
  "key3": "5D5P7ECpBJ1YBiXRwNe2i4WLC41ikfdYWZMwqYqEGiBqDMmfQJGKu5BZ2GD8HxxEeQmWLKHNUbWyDFaxrRhgkkpC",
  "key4": "4hMzAU2C6AzEY2Su1jqHoT6gzvEZYvZs4DzznTaWAUR5vhychzAvWyeGsJxutFrupsKou9mQorwdpERg7BmGhALX",
  "key5": "3m5Beoe9kMAYuP36dgsRDNBJ79qNmk58KQn6sFXcq8hpzP839muU3JxsUZZeiSvvV6kakWLFnxXfLAtuAEQivAQb",
  "key6": "23qp8Xc7MiYpCnw1thZ24X9RBXU7bj37p6CqBwNdZ1w5gjhomZeUC57PGYkheqJqcMBuFGYrToHxmDfJjbQQpv9Q",
  "key7": "wqC7ww6yNcVnRMfNerMhw8BsTz8GXVT5fDE7T5cQmcbF3Z76QMb74EHtFFwSLBWW1egJBEwjHV8fTz41HVw4eVs",
  "key8": "2Z4CP7hynq3MunwBGqVaCJWXtpxjUdmaUNudGMtJeMP1TtUdA55AP681rQLSj1vu8YiYMp55U3hfXwW5ufDnWD4t",
  "key9": "2Gdjd9unm41SJ7sxdruB2RJ6DCKnnYBC8VZbpAHMcXT63zNrkbE7scu9S1jqxR5pjwSXivGk6BJxpSHDtEuxVBKF",
  "key10": "2yfeiKH1UA5EtSr9Vwfsdw6xQ3ZY973EtgWKdYgeNTcQ4VXQUDYjUDqWS82FdWmswHd6HzcUxbBBgbhNBLhMpXXU",
  "key11": "5Ps5igwAWtqfSkA9A1SNxDXxLXmBjtVwAkCbzg4pyjgYshrddNcJfdxhjY5ShHEqJqoVFrg5xU74AaJa3gxUm4Bs",
  "key12": "4ytonQ54TeiiYBZZGGFkP1phJciurHsE6964TdD4nKx9zGoxbPcxutTNXrgWNtwoonUKRRPKZYyf3FwEMwtFmqsY",
  "key13": "29TufpJ9hBwFjJDfiny74yduCUcgiwJJaTpdSFb38T5qxNYtR4KxscxUGZ8EFjf3gedFev644TBnNFk8CWdDCyKP",
  "key14": "3sXW6nwaJo9kBJsdpm46DS3hF6Dosam6zqqoUTrkuRioF5P1TNgR8ms1Wo8wQ5KYoqe2u348ELck7NYH3tRSi9dc",
  "key15": "63gynPW9CnHtAiQHKtTjR9BJj9kMR6vkLpWL61QbvdAiURzxqZed2wi8nr3hmdQfkGXNS7jRjqJFYUSawSmbvC9Z",
  "key16": "59U5MjPZGkhZnwieo8C1K7a7Bf7T6Jsrtw2YySEncTmYXMDtxVi59Qd4ZFdbDN9Jnw5259ox7MtPL9d5bjSNBFiR",
  "key17": "324tCv6xPM7ErJs3pehig5b5VKU1sTC1dLsX5vhcUScvybxVrgvB1sRLfFwFZhZ6Pb4w8UUgdu89K9ptC3J9ReH1",
  "key18": "2GtPvJ9wzzvRgicRRqNmxPryfhMNJxShn18dMGJ9PedEh5ttMzde3ycU5KmBLYRoi5eKp4F9q6y7UcwzyTVZjb7v",
  "key19": "3nfapJUVRG8v4FbbQPmYkMrbTxa1x1AcfYd9bCi3B5yPg2qYi2r4xy76idC7oQr723NKFNKK2sehLpscozYvWnmf",
  "key20": "52r2Whgz96Lzkxn75pEdWgkcuaPedp5XGTm4igE1D11S5SVLdaD5GNYPKACQvM3GNpBJ1JRGkZsL3QB1jNHKHFu5",
  "key21": "6W8SmStoJAEEMqV21hRGr8c5q21KST1MwteVNZ3eGu11cSnENWThctLkGkAd9RTexyzoUvzbJLEwpXYANzqFF1H",
  "key22": "3Fhv5zm9SaEMptXQ11rwPZ7hC15S2uRSEdsPqDhXxcgo1aH8YZ5cgiS8HRmuMunfVV9phXDZD1EiKxuSqvZPk5VZ",
  "key23": "5mjVUEsihSRfHHCoB417UfvSe9hbY5CkZEHuV6iJq8HSgTrHx9J34kvLspdaT5gzRqrE1PChztN7bfStgZxtDMDf",
  "key24": "4oUw6pj3G9sNh9FV8NqzXbPR6yFNFrtYdmUMLy1EF62KB21Q5NP91Hs64FTxSBy8fPUVzZXUJokHQ8qAobEumkSA",
  "key25": "5A5GzqY8VgNpLQMgXTcaSixhK1qwSkPb2c6RpabRrGzKnNTYtwiP1piVykv7MLMGntXyqG4aRx1arhqKYfZoe7ah",
  "key26": "4J2YsKK86pMaaxi6SYRsM2suQmB4B1SpSDNUaGBvzpoS5oH87TiQQpTh3UGyVz5jxAUYnFgCirBW5bEnNUnSB1KK",
  "key27": "49kyooyexgaTqYxgFa67uEo6DRAZd3JJNBACsZvrsUjNtYko5YpsDjo1P6f9rYNEmJgNw6NJLxme6uSYCJvhEX2H",
  "key28": "5dTKmgsx9hEyBL7Nb92NxPYgr4e2vk5vQ53XzkoMAk8K6H5hwM7vD253XraKNEXv4u6zdPPsiCBn4B2tip2EoEFg",
  "key29": "5ZczYT6kJxNLhPmMf4BCLBtuNkHJtGeX6SjAfHLaJQSRUFnufP2zouhynVDZcjET7ucpjhvpDXHRB9vi8NpaTVjW",
  "key30": "N42sCV2wNjpV7WBuENEiRoUB1kBsnzEvS5MdyatFJbafRoeJybA6Vv8SxGAy8uyXnbgy9yC366uoRbx4wppY4g2",
  "key31": "o8WjLF9yjYX3GvmhEaZ19Sfn61KnDFLQxzjSt7hV6QZfctx6m27w8NELgcdZjzPUUvusjYJmxHNaKqX1h3ut2Ns",
  "key32": "3HNmD6Mk8EwUXJB6qGUSdzrzamUxHpynC3BxoDiYn2eQmXzrvcDPs4yWfMgsHTNfXaeDewZ6YicMT3juP5AyeKpS",
  "key33": "5JjFx93Sx5twGY2kS4PSAfiiLf5QPX5Xz9FaC8xwTLg5Tn1xxdFXYgcyNu3NLigEMFarBq1x2thQum9tizhfpAtC",
  "key34": "2rDiJpVy5g1VpAz1RidGaJ6qaFyn6kqRav4Dk49E7PZtXimR3r7DcpJ4acPAQYC1NdGRviKKf1cEkzgvshbaqVJb",
  "key35": "71KLbJvn8Fg6WiP6aRiqYXxcmKBxrGVyy3xTnhrTwaAEUBmbNNcD5wKx3K6rTW5Xss7p7ZwewVmsh7xin255pvR",
  "key36": "36mVLqNeFYytz9ALM1nnYnq18HFeMszEdBBvUme1gWpRJyEXFfnVgBHDsMWTfLcnw5F8vm4scGHauZcrR4KHtwoD",
  "key37": "5y4A2XQN1K24hV4nw66GudzRKYzr3UU4fg6AmbahEwfVRf3sHb1xfHrErM8Eh3TqJiHi2kd29Rhurw5LoJkvcGjF",
  "key38": "3FdA4rE6vRXtse73i1L5PL3yLsxD8ueyogHC9XVbgPBhuo1ZJG9zYH38apYPjjGKvmY7nHVaQnhRf1w1i9mUXQji",
  "key39": "3Tm7RS6ez36uTewFxDFTzJUPKusvC6hypAAkYaGSXbMg2F9eNixJLjHVMWXkK1DTL9w1JHa3xvmQ8dCCNsDfUtN8",
  "key40": "4zhoS8amFfS7FJFmUafv2hMF2hn5pQf1QGSzRwaCu5SoaYYkUKrpkLrt7G8Pr1xHu2wwRnnA4fcvm1E6FkP1rXir",
  "key41": "i1qhrSbLhMp6pheqveHw3A9FGJGdcZQJB4GFUmSoHM6xczvXLxzH9NXdDhoNr2RJA65MZrFGq5rLwVj2C4YJmos",
  "key42": "5qcuQxBagC2kYSXWTZZpMxw8dBMpU5NKeyKncKWp7UvkivyfkApoQwDZGPbXZgD7Jh9KankYBXBi432Ka9vAPwZi",
  "key43": "2TjnxtX6BcbDGvTvyk6oD6HoqdX5qntTssghvaHgSuCBpyqNo7RadJuNTCBYnuRGLPDDmtk2p188yxvvQjTHoQpz",
  "key44": "3zubKTH3T3su2pp9znNh1S5MEVvczRhwxNpmc7bJ9zCyg3uVnXsRtEegxm6pqtfJ6UHEMr3thd13XuS6Na32KeaW",
  "key45": "2fjUkqMaDtbmK2FjgyLrNgmipWhL6HgkQhjMCBLibLYqhrcVvLVH9ftrcRv6KVbAbZFfQivKfgDcWZXEN1jkfaXi",
  "key46": "5uMxuP9ni6nXP5wKUeWmWLvNZo4igEKhMtNpMZMxPctD1Zb8HZ99bqP71PbVXsat4YNiCk1a6m2MymUGxN3WdjTF"
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
