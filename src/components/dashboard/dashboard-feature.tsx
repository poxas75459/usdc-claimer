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
    "2hC2sz4Sb5PmYptn65h14hwTxGRd68ysJLktqn8pETSUqEU9mAedxQLFM9dLY3b2ug1qvsP8NgjGLGT78n2tpezG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P7FhKyhBULrxW5MqyfD6LBzpnG3bkji3FuNppdJZ66KzWBpG9wLufsvTb7E5BA365XR4DSmLvqLaThMWAJXXgvT",
  "key1": "2kaPFivtgnq7APnfuPUM6TXLJcGFcGBzbkwRJuV2xUb7T5QAKPrxJknRiHzhnsZYvMM2j2RNAw531949FBF5uhNV",
  "key2": "3PhVi759qyJ2DHiPfe1q1dF4tUT3XtgD4WeZzi6tET8uizawxaVwrdcb6FqK4HdHJnpikResvdgmfQ9mnFwShY9",
  "key3": "2vrYd3CGTwsYCEUF38vqdNeWbjNqTgRyaTg3K9rzDJSXfaqMEQbAVxVpQEC89X1EGhawb2VpjfU3T39bnYV7U1Wg",
  "key4": "2vKGbEfms2tWgRPaNv3aHhrjjDQth1rjobjm8vFF5SWE2F9jYTPiEDRDPCb5ywA7RtSnnccCnkH8bmTKxyk9s5Mx",
  "key5": "5waYwhxyFRuGPbANyk9RctN8os56uUCxdrn2SgsMYRyh51EpvR1L3j7nu4ormpPChtMoy37qC7Lx8xcQB8367DGa",
  "key6": "5xcAXdtBiML4scEQKTnNgYTAiaa3MHFZkJCN4rArcyzJ43VZJGoMKbnyCL8VxKvZJwzQgcj19PPLDeJ8B58uGJ6S",
  "key7": "2jK7zSix24BJQfmAnCuPjYggsCrNpuBnjBsLktdnUxwRJ7Yx3apvs3Cijup6xxHjrhAcnDkoLFPbz7AWLuCU9ZGN",
  "key8": "3UGJszuUxuFzdrxFXnwbjvzh7YZa1apkYUmKmvc7J7PkkXTG5VuN5tYEHDQKheJ2c7Lwivk6dqxezfjjfSyQnhHh",
  "key9": "5MrUhpazboE2Vzd4tie3deY1tsDF4hJtCs2X9VTtyygZURVXaZKJFrxhPPPmkYd94DzaMA6ptTQbtngEwuvMC3z",
  "key10": "3xJpHrSNj8ew2H78RwhhRjH9Y7zWS5R3bekGnA1KT1akG426E7owUrUATs78fjckguPgWkshEcgmSW9JZ3VJAuap",
  "key11": "3KNMWcCSUTre824tJU9MLc4cyPDBLgJmmoPdebDkYNaMbNKHdbZJa9kmJzy18TYYFV1sZd7k4wqz5UriHT6nV6rK",
  "key12": "2nd1PxHvQQ8BfRK2vAcTEDt1LiKLootG5eckdkhwU3or1icL5Dv2ucD67JUTAkDTG3o8VLevYhFxHLxNiSJNVZok",
  "key13": "3eRnwFs9R6VH1kLTBuF8zM2NYxB1zXjcZGbRZbfn9ae7mSBWCDeZgAX53oY6jqXPqaHiMqBgbHhzmVdPQJDLa34C",
  "key14": "2NtQcra7HyjdKx7rkse1wwy9DcPAyB7uGE71AJ9J3B5PQUyuXDpdFYJbduhhHM9yy8AJovRudUBbow3cQwBAnmG",
  "key15": "JPo5sHzaQBpqveHDcEBLxKz8fPTNqXnce8RoZ1eCNjzbQgGDUrBZeTX5gwbYUcJfeHUyYMB6FdBs4ssrRqFob8L",
  "key16": "5pZgsCmXvJNJp94Me7vDaKTXDenhyHy7UMy2swgf29q9MLqmbvvQimBGqwFKp7vfqSRpLxk8QC57wQSwUm2jBBqv",
  "key17": "23THgVG71a6DqMW295hmvrY4ko2LowoBBqGX3u9wPmNxyvbu61pPiD8h85XRq5kFW6Q2dLZSWxR9CArC5xCkx1rv",
  "key18": "4v3rhef7JSh4ZvktisqtniVu9PYYeCQLQuFSXHwynxjt98zyjx89Cyfo88e2XvmcYfReWieTjjPhFhKChi3YYGSG",
  "key19": "5EQtB77t8JC2z9ew3DuPj1EYvHy93k943AGv1FasvBYBtqrKhE4FzpHGmkkDmzWMpYZ8nwkUtCi1XjNgeWsUSrur",
  "key20": "4LWCV6MX7a2XK8Ax3gsQpreDZwXqfyWCSm8sKszwe7FqGsLUr1o8xc7sh645BrDEmKAXEFfPRpruAWktBRKzN1ou",
  "key21": "3CJb3iYySCo181nkuhtFAHRpWGUe1Udj3uR3eCMjhwuST7dwXsyAzEsmZ3TvQPWzQsvG7an8Egvm1wXPsg7ky7Ry",
  "key22": "qoUXAJBiMZTmQe9XtekApZzx3jFSLm9PZBbUEKvwPkfcivnf5iJsjCS4uiidDFxs477pV1BkpfKsCEX9jxfMMNJ",
  "key23": "5NZJtk7wXB6ip9ymqKp6k7g4bxqHUgVJUopiV3h6bjgKffjpxVG9kp7cT2XAqiY6x2E4X1xiBSn96LVcQZfhyJKB",
  "key24": "5T5PboEvmFGgmThHh2rYn1u34BTNJmsxfS9Br5PkacAbnnz8Ajudq4WqKhfm8n5te5TEaqq3PKpjuPd25w8bisT7",
  "key25": "2YryczRVyC1ucSoKgrLxtjMs73QmZBm51ikcm2sNSz9owef71iNmLZC215BJTrwf3v1qv4ViGT1rpZzNkqsyytJD",
  "key26": "2aPvGeBJDjuAakZxJJpmkVMWx1fi1vSRQFbvxvDdjGJE1unGEpjoLF2uUqsQBjBLW7u7nciy4G8pQkSKwBJfZoje",
  "key27": "5wu3Ve3cAss7xvTaAjDQDV71wxnLdZastexDjXk8hjSxEEoskgDsRCH9DRM5wig6hGjwZsDVd3rxBLQ1pJ9m9sef",
  "key28": "3W1DhsNHWow2mnSeg71Giy5u3VPhbXgDrUVhvmAnyCJUM3CzXjecFJJcey8b2EZhqcgta6nfPZJ6wUFYThT9v17n",
  "key29": "irXrw5bfDUTCq19bN4bcCeuDQ925JXxAPRyMSjX9YB9rzxdYuudxzG3RkY8ZYxgXnfG1CYwfLnTopdzCzBAdonX",
  "key30": "kjN7Eu1PN9orJQzX1KpSG3653gCprfaQKVXFrFqh4Bh3Vf7jJDVVc19N7GeFHCFcpgjMcys5qY6Jzdk5km5vGeG",
  "key31": "pzmQPdEgdQSFHioc1xLmgbAXJiVtU2f1rS8yb65X3Tht6pLXhhHXz6XrBqASBrNuStgvgyZXwaCzvaw8riU3wo3",
  "key32": "64UFZLAzPPiVAVjL3T7BuNFy265HNTy61pdbqbCd6BXvNkGh8f4ZvWEHbRe9oLSijBzYPCi9gKBAhKCZJeBJE5ZZ",
  "key33": "3k91cEEGux68A2FXowmWWoyTmi1UyZkBYviKqiC7G4te8uaCt3EBvJAvvd8tbxmiKVNC8K4WSFGBokit751U8AZN",
  "key34": "3mHF4G41v1MA8b7EuGEPsCAY6STQCZEVDcif3DVyuCdvLTcJRdZ7MQZUgLntYJYqL1KTe8s7ZJUtQ8S6JphaP9tT",
  "key35": "27dc14Qng7i82o76xYWBUeouPf1C2H7nsGEQ1gjDDQVxhNVaTgU4TKMEiLTSpz2BmdWcvyyhtFvuycwpiMF282U4",
  "key36": "y9JmSPwu2NrEMgfagYn4QjVBjxH5mB5ZhTkUqHkQQVxiAxxCXtMyFqXUbzhEYFqDunUwioutXiAURrUzmJoa4Bt",
  "key37": "2m3MQqxfDcfDej1z7BkkHDG3VBQ1bWQpMv6k3QW9uH1m9ubJsSJBAEUpeAfmrDyUuwgsf3JgpoDFAt4HeoJiGF71",
  "key38": "2hrH7WCeJkcCudDTSyKUsv6ZCbdpvuCypeTPeWu3EhYALNybKJoeRYgNCDRKyvwU2BWKikdsh6A4kNBsjDC4kJ2H",
  "key39": "2GoTmmeGgAmE5CdwnFrpMnDRvpoZy4bKD4jAJF7RrkzpT7KNHp4WwvumGvEcoMF6cSpU97GmfLASsmmAYWkcU8Yc",
  "key40": "2uG1kQckBMQN1jEuQfRunstMhddKF4PNDsB3FwVZj6ZChhe4P1CjnbKoNZKbb9jq5cJtShBkqMcfQiXAc1hp6jwG",
  "key41": "5GKKPsXtdtmyoEp9N4RFdcpyiL1yVN5Ad7dUZJdEw6pZV2ZvUR4Vrn4R4Co6pt1KYg49j1d1SqqgEpqAiiAKXcLU",
  "key42": "k81o3QHwJFF6y6jDCsTiEJ9xrYtYn6Q3HuZxzjWAbhFMSkxuiRPqgBbNGnqhXqHXiPSsebjh2Pa9ZEHsJfLyFZ8",
  "key43": "2ab7X6wju2v2JNScZUcCPa8Gzs6HvBTmShw4zqqqRMKpYrzhLdsSfnzWSNPXze8YNRmCzVRCESo55Aati8Aig5a7"
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
