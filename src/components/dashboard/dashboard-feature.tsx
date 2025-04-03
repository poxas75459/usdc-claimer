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
    "3tKEAW8fCwLdiuJDSquXrXMvbEY28wiGyRnMdS7pGrYm5DcBgNs2gCndwxWL8UNsfvnZ97eTqYGS1VuZwjs6zkth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gRfNth9HM8ZRu1VW5BKqyXHgY7VPybFHqKkh3guCjnpfLybW6L8ppUhhrseB4HkWwQBL5CDvBbLso1vxkz5NnFt",
  "key1": "4uD4w8iPjkFoBw8NFEBodfPQ6Svxh4wkvWZG6Gmda3XMe5M5xs1xh4eGHkTP5t9xJB6RxrbigzJj9RmJsT1VBPv3",
  "key2": "2gRkZL2HiU9PYfPh362x3HLT8bmMPKRLw7AVKyAzGX8p6wU8r41hu3SKvmD2Dq2eN1P9cRb2TgSyWAXkVA4U8CUi",
  "key3": "3Mn8nAkCKwkyf8Xa8sHdrXoeugtoZe6EZeCVVrAMp29Rc2HEC3UweZ5te4FzENRijNDBUNcch9PL7ikECfDis49E",
  "key4": "WGXibWudSwJ92cmCoGryN1vLwhLZmSuRCpLJEhDTvcrehZ3urPqAfYFnE1QJrpcKVRn7aKipH5eqLfTELnXbCsj",
  "key5": "4Yp9RqAoaaNhixxd2qYYtC4HUKVknGweR1k3xMDw3UgnshT1uGCrGjqBVFqddYj4tsZ18C9s19aDdt8R8rzSGupC",
  "key6": "2mSfRVo3uyMscg4wQSNrAgv3Efw9idFFFgPTMahLR1XL9wU7ZVptfjj7jpWeWKKeLCWWfRn74CL8vggbiz2qETZQ",
  "key7": "3zJmuQkc9vCpdWSibLf57ibUJbm7kazdLTrZ9TMQiC3R1arGG3xHKBpis74r6m2ffFWYE9P2rLQgPsvWJP3YW1Fk",
  "key8": "25r8bLepJb5Tqnv4oeodRcgEbwPh4YCpX7A2cK1xEoo57ETbjomySg6gRai1wHgYCqafEfwuiExs2Z3e8kt5zjyf",
  "key9": "52cRwAGA2EhAWjUnFB735CTcZrH5CVWRunzqU6yePweidons45eN3ftMnbogGEi9KEoTzkUBnzLWJya2ChXaEcZT",
  "key10": "2X3UvgYEGdWGMC231QtT8iUJziNy4KBSUFN66XfxxXtWx55576C9fr6EvqMgjZ4fpZT93r2DHzT4RfuHd7VzuC2P",
  "key11": "XZXqGCFfuSprjV7U7Rsicer55XoQVnvjh2ogmpbYbFVRNFf2S9DZXQ6SSWcShTiX645LBFk7SvMdj8BEVQiMMFG",
  "key12": "67PUdAbBsYSGp83cXBEPK2WudYu75ZGvRgjnDn9m4pE2EhDGyr4MByEJbWZeSRh8qzgsod7irH3E2EzQXiEdnWqD",
  "key13": "4BNgZAQz2gE7Cot6ZTNWuh84TwwCZnYTnHyvtCxm8Lgsbq1pp8JnWVYoE8m9gqPMhAQ7EL7W953HfRvXu2gc6EgQ",
  "key14": "nKbsEV2qt2JqKZc2fXrygAT6mDx4atKcDpaX25cbicBrMEr7Je1i6nxCaLZZQWN4VSRrMPtgbpf38d6D5FVTor6",
  "key15": "5Pto4EvsbTuJ75icC7WM2QMJCTDPFQEigUMTCqa4Krg1derXY1Q4dyiP9GcxZewYFcpfkg4fN1H6DHz9NRwg259Z",
  "key16": "3MHtVSf7SqFBSWe3Pk4c78ss4JJuvr6zrnwtuRUvfMZMLYA9z7zF2oT92djNTBZsAJFdwx1kCwxdfiNran5MTjay",
  "key17": "3XkTK4uo9wcTJgMaNyS4r7herR7tLYWJ69GZFTpw9u1HWnkjJLmzQkcCA7jBvTsK9BxRZZ2cdJuiJjRc29BcmQVk",
  "key18": "5ZEjMAVEEqFAvQbDrQpax9XyLz2id9oeGR4BvJG2ejBvvp5YEoBQcwoMFRW6qus1bXb6q6ndhCS9VcSJa5cr8TkZ",
  "key19": "2AbpWDU8pvW2WJMdWAyUDCWLzEeCkUpw854b8XFpyYJWKKfxdPdTPhs9EhzcctN1Dhom17EmcnjRNgRuDDKcsgNK",
  "key20": "5PmKmvHrUD4EhEqdDfrtfScjB5QtWqZ8Jvz4dQJSenC1aVvcFe8bcpoXyM4J9oYNGvhvVW9KQDeehAUK1Yb11ked",
  "key21": "2ziZhtnVYWff9j1tgxfLbWqS7crJLYXtkhwKWo5NmsPWtGwNsfEcqDtf7MvieMQyYMgjiZj8W2CxAVm7aPsZ1ogh",
  "key22": "28fa2FuX4ZNXj4ivE3UxSbr2aZuujP88hSppZG16uKM4qMBsnXJou1bKXMXirSotPco2UaXC9xWuMZUPmZtp7twM",
  "key23": "5isweQfWZQ2dczmVQ6vC3Z7Q1iPr9z4k1rmNdYE3hFpUXSoj5d9drNpHC97gzdWcAgjMtrAHKs9EDHZYPmfyHD3C",
  "key24": "2owXqSgcTSZVnNfyeizRDxmNZFrMaCrfgzPEBGkoYadKLGCyggRskyGX8SasdXmfX8h6nRTJaqo7zf3hWvUxQNaC",
  "key25": "5z5ZBpAYSJXfWixaLET8aWJqHRpRYDiTjMDLTDUtMjs8nCQ4vZnDjkCn39nQy3gjUE2gB3MjSWhA6borf9nDhaos",
  "key26": "4HZayGRcDb4Es1gkLRKGnNHRVE5P69rS2cPP8Uyn9Lkbtfc32gDK7ywpVDLqsWgzBDpyUpSRnSs33Uv1M549QsyP",
  "key27": "2gADpkbrYoxhKJFcjDegYkbR3yAa37VejcDSYTkRBYHpEjVX9PDR8q2CjhXzDaAdeD74d5pRMJHmSArdfNxa93Qc",
  "key28": "64uJxw2J7ukpaFDMfaHmUTYDgxmoF5tNiTJ6GPFvYFGGdTTLyeBbzYs5ZutQNqVQLQQdzjesabNNuuVj8UNRJ9to",
  "key29": "NnoNX8cvF4HRzb32KkaZ4qUugxrGPZxAjYtVoCJzbX4Esx3N8AsdeF8FtZxScaGCstSbgQSs2psBKDNxZRzXXZT",
  "key30": "2M1WGGrwLzHh85mCoNY7HA7oLTv4NyioL2daLidVmxwR5wnH93KFEkQoAudPye6F2TGknqsh32gi2JzZrash1Yfv",
  "key31": "bDMYFpzTzbnG49AK1MZaerRLdXYN4bMzPqWZRJAahU3BwL82xPknDmA44P8ouXWgczFWn9oVU7wjZoVwaNvHjob",
  "key32": "49tk34X43pq1D5CkkSCiXLjqhoaLrm7BLNG9oV5eaCnZmCXWjfR4XvSEXRqgPxgu1mDACC5hght6EqrxCMCQVpk6",
  "key33": "FqWdACZT2z1d5hY7x7yunUu2ZPgW4Eqz919iiH7NAESnsrpYnzAuiTSHm44KijHzTNz4CTih5HKtyScrpkghium",
  "key34": "4AXUoT6HVx23PGbXAAUHq3PrLfeNV3C594uzQcwNXm3HRM5Nhgi7vtKSGib3p34hW1ymm27gAfWy2RtbHQDV98KE",
  "key35": "3NnzMVjL9thAWXdbPgZ1k94YpoM2V3XFFQegFPeXedyZjfQ5BuYJENyT8qdr9tgu5HZCJVHVwVEdceCT3xpEuqFQ",
  "key36": "88a41aJMVXvd79yDZvU6zGDqMVb24tniwEPqU4qHwAksNy1azPqonhui3nSn7E69phormhHr8nB8XvUXdwjqgCx",
  "key37": "3gmRDLpWbW75sAQMZF6RTUvH4EWuETj3EXRufZhkm9XFrvV6H2tzbMtVaYrkWcSTEHecdwQ6RVhxw9L5ErK3kZTu",
  "key38": "36cCpCU7MCRsEthbc8MCGx87UvjmdFwJrhhYGT3gHPU9Wzr6NZxY7cmhWprDxQeYw3t4n28QooxeeSPsrQ6LSTTt",
  "key39": "438oFzqF4rgR176CTRqrEuN1efa1CCsYPYy3mLUhWkQaRf8RwjMfgW8C5gsE6RHT3zrV3vWKiy5D7hDXGJUpQXqz",
  "key40": "34a8NRXSD4qUTi5rgz3TCCcaGSh5hHrii9BCRLKuTE5nzdZW8ftBUr34bntaNsgQMmvSRi1bCMxFk3R7WByJvE87",
  "key41": "3cWSsB6z4ADJ329sa2PdhDQ8a3QQmZLcumaGpzVYci7AusehD36k7iTcRUPb91eBd8gxA7xhFcPzxngWXuAGizfu",
  "key42": "37zJJFZEgAWCB5RizS8g1Ei71iVd1yoDMqxWq51JzAxyXPqNYRDz8QMBKSgYA4sV8LHvhTK12tCXD7Hz4cjhrq1a",
  "key43": "2TxgWJTmg5a2bFyHuxye4UXzviLqB1cRgg7pMZVWR7bPQkTfmpRT5oHgyajb17EFcDva27uWKDLTt9rGthmADXp6",
  "key44": "d8HyufgAwwnaeoNawC66kxqGFrko8rBucqqzvEDZR3hNC6eEKvX668cC9tems2ShC3WRvNTDmD4sLMtBWVcRkiS",
  "key45": "57532E7mZSdErACoKGFVnjcR6hStXkMdWMyckXJ6CdRSMWY1didrvfX5nBwrdQEYzw1vei2M6Bip5FN4uQ9igG38",
  "key46": "2fScknCPxGjPH7GpRuJgYwVzcoG9R9kHy8zNsdnFF7n17UBXcxoDVQC3KME7qcNwJ443gDhm97LmcwEQCGocTpWN"
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
