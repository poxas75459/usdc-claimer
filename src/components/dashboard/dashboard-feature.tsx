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
    "2ZdkPi9tEpYDaddXVby4ccjwttMMz5wsvQB7yASReVzMwYbXYAWjonqdwGpQ6zFouttLa5kcq97Y9ZuzCbF2Z2eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gq95aoQkqHXcUawtN1gyysKSuDzHzGQ3o5risTtW98Nd6V6Bb5zULajmbFENypSjkv2Mrw3ksUerbw63UW8EqpJ",
  "key1": "4xQr5ci5ddw1U3FNneLug4VY2KvLHDB2V1vAudAjnwdE6hnBhPMtdfmLLCURd1qAuCASBZEUPmAEGhekyw9NoyqP",
  "key2": "3QzJiBMWRytGB64aCSgHFiE4c6jJsjy497hGZeojf3KqRjoGZo4T8swciuH6FPTmgfS9JNtdnciru4tnWh4DDWXg",
  "key3": "psaze2onD4hy5Qsxojm4MTcaDBQpPUVCHh2KEPTjWPG4A7Mv51sN4BUv3jG4GUHMu2oxfzDVgPWY6wBRMVoupsn",
  "key4": "QZCZf7PyVVoDG7QkeGmDWcUxYq3k16jprZTCEGALCzzjkiiweNsHKc6aHVEURiLTNev7emE5PJysd3QXF4W5pPS",
  "key5": "4bUXj3BnqaXc9V8LhWPEWf4NHJEUTxVXj6cx4dLxJz6TuB2Ak2xbA63mCqzVnttBsQjwQAQfd2yVpQEpTX4JT8nL",
  "key6": "4TaxC4QWzDrE4YsgBPDK7LeEXUvXQcoYmAdx8s3jzkAZRc5uA8HAi6sdkZNB6U8rywwCDj4afaMhCwabij6c4Fy3",
  "key7": "4hTB9H79WksGQn8JLqzcGWUz1AMLqyGdaybTqvCu6NY3zvFjgxCugEFs8jqqMeZMpVBoNHo8mLbj3DtyTKLVH49Z",
  "key8": "38Qkcia1CqAuEaewgphyjia4JjwSayYd416oKCgeswwd6SPaN64Rj2ZBp2PbZTL14uAP371HTGXDext71srvTmzg",
  "key9": "3APhSAWa6ShWHVGv6d2A5z7JJRnZEvTueMzH2az92G8Hmr1EHWCHrQy7SPdSxQVwDyunSrjtSVif7EmWwTUCobQR",
  "key10": "28QPtS2P1xjbCYS5QfE3nHFFwQVFfvD7ZXDo7YVX1hdG6icMXKrrauWXVZMeAsFnUE9MBiC7r9zewexonFruncBR",
  "key11": "5XhTY65UdvVvBEnpymxE9z7aJbbp4voX5GPod7nKMU1dm2umKwJzWPhRukYJaZXiVPjqk3jZQ1czvxpDqgP6oK4W",
  "key12": "QnQCnfDdHR6R98UrWXyhrnKkv2i42Wsah1R1TMUtRo3KhMQvPkpfyff5NL3YD5VxAuF25yHq4tHf7j9psbwmx3k",
  "key13": "2ziuaW8xLmh6NzVMQdqF12gwy8kGu6g3vTTYAgbS9QEppFoYwRNeWxg2NPKjptztrdnzvh2hmnxrcqLKCkq2WcVC",
  "key14": "4tCUxtMnFc8mSh5i3S5iPzUJR9qsJz6ituPZFoB7dpfidRSMVExicgrN8HAykaqJMgaWsmPq6u8tJyRKPAmwuBPE",
  "key15": "31zPXZxukzAJ3PXrWCUKVvV9FRJccxXNWfiSv9JnbkWAa7Ut6PE6czwUpTr4vDMCkac8KnVmv37Xj6F6frWoNFSw",
  "key16": "23R9BprvPPAKXt926wAgM9dDE19aJLQufMRpCEvBYNx2QQtrbb2AMA4grLVtDk71AqqVJuqr4tZMFm2MAEtk5tJM",
  "key17": "5LazgK8sYMqZrHpRHXwJS2SX2VagJsbhxxZgUaPJWLvmYx1k1kpXwDaeu6tQTTvPiRieCBK57aACSyesNFhsXQAE",
  "key18": "2J5TmVUVpU5xQdG49BDshq4ZcRjWuWi42YVXtdPtKqms5q7eFq31eSzJURoFvXYEx2fz9Uk4NWzZGcUyooX4pSUt",
  "key19": "4NJyZLeNgmBt8xzHR5QiuswUNjX1bMssH2i7ZqLi3Mm1tEBU4Q7K6zpUcWzYPsAnJgwWAkAqt3CZQkfu68TkzuqE",
  "key20": "59XvUMqiR1yzCYQtm49CLN4L9LdNZLxyM2VFBvgJ7rAPAngMhi7NKTtbr8rau1YHD3sjFnDUKwMvMxKdWh11UyjR",
  "key21": "5g8QxTCJFapo6pbqqxV1HwjTuSpmPwCQGmULznJiBpf5rgA4149zjz7sYogvjpocyEhwHQ2fQUdcVoWvXnXxfxy2",
  "key22": "5sWR9BAzGKBHkxXFLUF3JfQfdZvt3AxyzfJtSkZRE3x7qhEkK8YxMhYZNEPF7GmqViWXZd58tyQeUpFjt8UWvB9K",
  "key23": "2dfPXyawxwQt35UHUJS29GTy3CoAQiqAMpnEMcTnbU3VXdHuw83jcU6qCrWdHY15owjJwWdMJJthdTez5NMJZLnR",
  "key24": "4F67aormohf7uChHK5o7FYHM3LgHBwF38Ltn9hDzPbN4R6fdQK6Hq3z6hcqGzWLCyi3nZVYDnxuGJKaSsNvL6XEr",
  "key25": "2AmULyAWXoTUJbccv5wByzKcRUuVMUur2QZRPKLztzFAMBQERTcp9VRzki11zx4UrhGEiLuatRpfn2EQm9mAmFCN",
  "key26": "4PCfY5CQaE6XxSezNLe3oM4Uhxyj6PDKyzrTJTDPBDRicv7jfGmwqsb3AqxvuP49E5Yo7TWSkwwAiAj2C8kG3S3Q",
  "key27": "3hFS8e4voAg2JyncKe4TKVXf92sQSC2fGBMK4jddVqhhURUdhTKfFrCSXHcCoduUkGg7hVZfJe7bTsjrzChwUn5S",
  "key28": "24twPQ6ijSkHXwsvpgS1sBZZsrnorHW85H7scF35Ut9nQ8EXDK8veHGe5dQ8Vv54GnE8nCaatLXtzuM4HrKbkk9K",
  "key29": "3KnT5KJFQaewZ98T5du74AQvcXmi5ngtTD14SGUWEqA8kKeX3kkULv2yWQvkauriLhbF4RgM4woUWQAdwCCUZWkB",
  "key30": "4j5gW7QZ9SmkmuqMuMr4STAKCwrWtx9fa35s2mzEc1t6VdnH8HEuy8N39TDVgwJv8wKVeA5Hz6DRrhGeaJ24UKzm",
  "key31": "mGbojRDdcmLrgHAb4etpLktjdEjW28iWXnjAVUuieFb2qSHK1bT8Xu6SQHDbbuugYVSFU6w6kaJPUaqXFHMbKNm",
  "key32": "67UcCbnz39rWGv9JSWNWYSxc2eihLRubSZfu7NjTGc7H7r4eoVfCn3xYrYquqjXwCHVuHMA7jGYyC5qnnYBRZSC6",
  "key33": "5SV9WNjFbSE2hBPPXCwMgzevrsMvf4Yb5pu7eEhDVBRmE3wyPBRbsyjHkf4mCueUPAg3XFoQd6vkSVhbyJx2fh9Y",
  "key34": "5GQSDKJK2gtsPZ1dmab67Pou7W53vTZmJj9bm4vFcF1KNk8kSmoruCrg1XcxA9hKwHUNennAc8yxKAYpgM1fZHUU",
  "key35": "3cvWdfzX6scnCrdPkWdtkcAEKDNvENEoeoXwSnSx2mzCYis2Gm4ZNM8eHE8qdK8dMcKNCAToyCbDrkhZHSHjXHXg",
  "key36": "5pBXpgsKcDe5XkzQd1hga3T8qeXkBKJvrg19b9nd4KU3mzuVYgpJsgYn9fLScZNJ4MAgjLGk8WTCJnmRJkE29rpV",
  "key37": "66joKi75CULeRjXAZJRvsSPaTx4TYnQaQVUnNBi99wSVpsD87HFGAWMMuNyMLu5X2b8BY5uBrX25gUL9mDV55UR5",
  "key38": "54L2BJczezGdxwdTpNM4pmfJfSuYX7PgMeztxQFwqFAS23PMSs68LKCdPvtag67dV1zMwpTLjBe1z4R1qAEWBXSL",
  "key39": "3jnUuppfvayYjLMohYitHisMRYyNoExGX45oLpyYCbqfBnPDAqqfuUfU9bG1kZykH5wywMtGWXFQ1dgZuGWMPxD",
  "key40": "3fzHqEgzHTsHVTNAXHPJgmfPuqdZ4a5NxmsfKwdxnuc5Ryux3SSVVctQsmAeKKUyXU5u6baLvGX6xW7suiKTqFQy",
  "key41": "31bA9JZeqs1kzjVDFwrK1DhnuvaaKLQisxbNvDzi2DrJk9jZhv2i1cBK7WXeTabD3Dzc6uXweyoQqaTjgz5ffz1u",
  "key42": "2ugypHXz2PBtBWsAa7LHSmVbRxWLVE9xC68RRPdsEGnd9MAyaNvoNTKng7zeg5gfqjhyBzMeAuS91Ec4sLh2Egnc",
  "key43": "3X56PW4JLr76ydDN8iikRHRPTL55aPBFa8maUutch4aDeCyvAJieSSak1TzvH1khjGtqFh8mr8bhXKgDXAmCiudo",
  "key44": "3YY9zXXwXrZXzaFS3niA52s1YpAkqVyJspe98hqTGEqu4PivG4Enyx4Jm5WumoVvYFR7Xc6tgDQLtGsTymYt1HsV"
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
