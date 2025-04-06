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
    "2EG9THc5xMhGR3UnLJfvB41kp5YGjpe5HP3P4zbHsTsWNg4tNEdVeHFgGgx5UYd7f4zTCjjjKJA9BJ7MacCTTsxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XhKoLYinPBmo9nWbfBcN1vKYTankb2xk7gdPWRKcFfC2QaoWP3oydrUhqsJKKdYEHbffjmKzVwWFrHLcYgHRkFi",
  "key1": "2ETdkxEc3HJwXpgB5JWYnxdSHnhWh2fyDew8hETwWbjFSnKVxAMrF9gSPekhApZVwRkZcj1TEAomBnhgXEDmXG3A",
  "key2": "53D5KCHvU6MW3qVZN3b6qjfjWHGfwhigNCkRjEmygXnV59e61EDsr2Z3y4hutKzpXfYPSuWWV4YKsVVwsuyJKima",
  "key3": "5iS2pK21PA48sNi1xRjZyaUdK2C5SAMb42YobfJQejdFWa8chZqasqEZtffCnjKxhT8MX1xfTjxAwuHJyGbYkYci",
  "key4": "2Nm5uNQ91eMCMMz3j4xbhus59oDHdHuRYAjUAmdE3sRxZc3CcZkKkYQ5NrxWzHDmGQQkenjz7Ta5xhHfkjb9Gj61",
  "key5": "4xCwVyk29gx19wjE15YdSHpKgN1GzPpJL525Ut2K5KbFWn3YWTqe6YhURoBrqunqxJyoA3gJHZyVb77N2EYehP8C",
  "key6": "RZ1MFdxbMRmnNapowrTBwm8NDFoTLnad7iFqvwLR6YXcNamPMUWh9ExX2wnKrMYmzYheSZL4QmuLuQSugjva3Yi",
  "key7": "5DWrS5WVvAdGzMrfVLhBNSTHVLqMfKZg1tRKYSxvfwE6UjCzB31GUHAvt5qJ8jj37ktsHcpHwzr6BSRtTq2PoPPd",
  "key8": "4RJCmyvXa2G9u6ZqzWncWzF5YzeVJGqN4CKeMXCgA43NNi7S8n83V5hPvZvRENAiVLGzP8Tikg1CfqPw8YMUfyBM",
  "key9": "5u1PHL8tb4kpRUWgSnVciyduAuC6fVBAbMXUAJLy9zgfe5pFsrJ8oddirRJcbW5UkcDZCLhGy1hQqJE2HT9YHGmb",
  "key10": "2BrAJmdxQ58QyHyUtqB4cPhPmSY8q3ZwPedf4m6beWVNiDtCtRK3sG4NniiPctnZvFxHeMEJgGMXT58hKpjDbfqT",
  "key11": "5qnEg5xzNxiwXDZ4PV262jLz1MvT4L4NAYio2h9PwnVGG4ZH3w4Jpunnp97wwkhZGNEZkGHxaGC3amRmGnearY4g",
  "key12": "26Ud6TtZ3R756wPRpkgfqrwRNtntdn8spkth9Mn7sjZVxErJfFrXMZ73fdx55aDyDrxK9zX7ZRgfTMeRomhFr6Vt",
  "key13": "2NiVGRsXfGqtQAGMuGaL1JSMLvNK1kKMBrw7XyLzosfQH9jEHnN6dyzB9Ttxi7FV25t5DvogQsnNwTA7t58MbCPh",
  "key14": "5thUZh3ywze4SCYAmG4hB4jU6nJzrRCHZvAStSwxB96HUBLuXT6UstacmChYGcfsGDkxrv6QhN3m2ckKBGYVQfRm",
  "key15": "2ssnBT9KPirbturpdhckBmLerf7tW1vxtt9XrBBoGoUfbb7fjn1SqxgiGtyQtiS5vXHdJoZ7ygNqsZ2LQcVEaCfy",
  "key16": "3uHc9RFDALtpD2DzFY53rUG3x4o2yQXzRsiZrDnamYshx3UMyUdqtdaxV1pWNqmPPTFCJXYtNtearfsrT5pU7he4",
  "key17": "4ad7TL9gdRzj5G7XKiQh8qSLQKcRNgh1tq1tSah88XkxyQjEKLguni1o4n4CqqRJmPs53wpqicveiqf1KSmFbsqG",
  "key18": "4wRnf9TkhdbYB56zK9pCke4gNjF33MmRDVUdQvwazvwYfoDiWdYbbCzXYX7gukWQHKQzQ3Jmsi65PReJuXe2c464",
  "key19": "4EA6MtqKSSsnX6bwH8y48JNBGEJXiWbjhyq39LGmHsyatVmfTaL5kFEBCPpeYEwx6n19fT7EiCaRLjkMubgdc3tk",
  "key20": "YFAi3nLGxbdudUwMapFLqMUhP3N5ErE2gyc1gmXWqKxpsWduL1KJuXPbyaxYpE3fkzEgpnY1GMuxgD9myV2Vv5Y",
  "key21": "5bfAZGbCjEmiw8uk1CUzqB1MwtwR1Ji9cxjafcbeXBGuwrRBYshqfyHSVR3pt9mrhqHnYy9S2SvGCkJPLv3UiKb8",
  "key22": "3DE6q2Cqh3RSykZeKtL3SnwnzrKwmNZBYDP7DbTHqxjoWXhTJJHS82533dhiRrrsgJqEAgpG2KF27tdiNyHFhBXZ",
  "key23": "4hSqHy9jYDrKGdWHNG194NkjFgRuDhdZg6Ep4coZeNBGB9Sc9wWyrT9Gx9dU9tpVEJ3ZPvZfAUEtQAVR3PgdUzzX",
  "key24": "2rSc5cx6Eg673QMd2kYbGw1rDm2SdZZLmy6GxcCbe1VZXjBCWnZDZ3rkFHcEN7MYj7a71FwdgLQ7jouG7Ck4vScP",
  "key25": "3SheP6Z1XQjE5N4Cn7a7hHSWLC9p3xPPgfzKD3T83LDfEzRxYgcua77afW25UwWmHcmvB8k1riK7mg8D95bcEm9p",
  "key26": "2U39izJiThveS5yxJAVFCdqictBut7EpVciZ9tDbUc79QMHsvntzvocfMbLSuiDyzXtC5wc8vs65WnfTFrovXVng",
  "key27": "2n2CmwM3uP5DUnrZ8jjpqdUMsNZkHQKe5i4Vxs4Jm3TqJMi1fK9zW9vuth3prv2wphSw9N3YmAb4mEbqfVrq6xVA",
  "key28": "5HWv8DEPQ1rvTpDCahMWfwgqWw1JffGPJRLcHyKmfmuSrDEf69mP2UyEeHvJUQpPUYehihNuybBQdLYBnZe2GqK4",
  "key29": "5MMV1dGpWmRnS6qqkH18SrHMi79w3PUS996dqQoN4D2yb9hbhUANkPJftwhbKRMKF9pps41v6kFvfLG83JGdPnFs",
  "key30": "29kDA7EswGPPjodEsWUYHYtvvgtxmseM6fBgTegucSdwWU1AL44kRhHgFkbtyKsTfuFQL4zsYxsgrn2px31CF22N",
  "key31": "3Ns6gYoNo8YuVPfuTVVTfxMF2SyuKHLt7sVwa34ViXTS7b5NudDMJmbv8Ky4vfZPiP4R7ebZBDotTgftNWjmMA1u",
  "key32": "2jatJa6BGrFLCBaknxDM4uF4hfsxmVCZ3vh7WbY9hSMYgrkqCwQDMzgvAUFu56bAsz4f39dyDiyCiqhNhD2bqG3J",
  "key33": "umNuEALPoeqc7ZnVsdUitw83HMRmSndghZUccx175dgt57jhqv37coUSXYPX2n8sgnD3aNgXJJp68ayUMS4iVTi",
  "key34": "5NgHiTyvpDB2EYcFtLPJ4Ct92MgkCi79mVY1oq5VAr5CAMKKhEVY2thAvTfZqKoxSTt168SrMDPfzkP43wQcTJo1",
  "key35": "4BJbiRJjDFiyrLbUaG8o1sceT1ybeGZjpyJZBBHqpw4sJt3VoJHLbdKsPV2cvXy7czCVZLnYJaEiUchCnvEnW6ds",
  "key36": "1XhihVDB81dVtqSpNyjuXYgYdmpXgUqWcZCrFWFhXDGKubeAdUnS7JwuSuxnQ7aisEu2xhx6C2uWVNLuw8e6tF8",
  "key37": "2i4UrcwsrPdQqP4xh9FJfVKgx5zwJ8oPBvKAwu3we11QM94h5CeNDqisBLKTMFdJm1yvkaReJV3CpKJz3uXuHRKW",
  "key38": "ukwqry5FDS6mQ7jWZmWqzGsEaayHyKWcsUR6ZCASuy5oKCc9aoV6CnkiPNcw4z7dKY9o2sPrryiUXRVgxjGz37Y",
  "key39": "3cY1bLPtFoejVuNsufGDu3LnbV5Hv8v6ctRNmfHwwpZXiF8bhRWYtVXcguZTJcGQ9VLpVHmizT9GK915vmsc1Whp",
  "key40": "3ADtjBeysVDR74698yJ9Mkfsg4cvwQSLSdiqK5pfZXThcQVKkbXZmByQ1EoJBn6wkXMpWJJio7Z2engAT4qX6PzE",
  "key41": "5Whh1xivzFUTvEvBmmJnXEPvUq8REMNcV5BwXN3EupYN4HmCvUtz8XQccuLbv7M9PC1mySncDE5Qag4tHMxzDp4e",
  "key42": "4zr49273Yi261EntX9ByttyNrRmgRQvNE7gWsEKvqqRvwBAxvQWbtimqgUYSCqz3vEA5c2DLE4SEbK8GAv9XdPDt",
  "key43": "4ujWyrY9MHRPfzvvE5axVpz2mhz3iBZSHhd6QZCv523XLXAEshkjse2Xzd4mFSaKc4att35maownFjtbcXqioQKG",
  "key44": "5kqfXFt5FQPVibdAVGQywJXHMMXNMaEHqz3Fai6QvFVCgsmAqi3GGErExUDeNdpDJmzJQcEzoPRAnsaY5GMVpHJ5",
  "key45": "5pTxsYq3QSrdbGHxttokSdP6Usc5eq3wbDZLJyWe65J6kZYMKrkaPsaudg7ptibYsPxFdH4ZyjwUtWmAkU369BLS",
  "key46": "NbTQVX6LVLzQUrhWH8jwoRt5reJnGZQQVEjg14W4N6krfh35x1DnBb3DrP5zk7VNNE13TY2j9MKH3FRXdywCPfq",
  "key47": "3gXEbNYzjLM6AMAzZM4cFzUVWcUC2BkBSyvHBho4HSbC8324B9VQbhidhyPcbRydNsTX8qtdzSpfUmKiP16BvpxZ",
  "key48": "3pEWq2rQmxPUZHBKwezgyvUbXFZVnSV3MFfkCjMydmnrfpT5jugV8pubjPzDzudU4uewjBuWonKPmZuRfftCKY7d"
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
