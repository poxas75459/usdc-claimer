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
    "syUVHApFruPCRcU9TsojGkexWnb6uMof952iqBhmoGCHFUtRx3tjsDyHk4yy3DZWmsjFjAjP8QQmrKZQ5dbiHam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BJe3nDCdhbN4QRt8X8ijfn7SNNn8bto8HutfqictiPCgAcAaEVrzt3FbdM4pKwo6Fq7Jmx9KLyJ4ECue5cn7GwS",
  "key1": "3N5LnMWyZX5mjQNkdUeHuKvdHiz1c3XP4DMcAgjcBEU9A4QMjMjBcXwanBRbhe6W454EkLDePvDZkYSERYN2ELnx",
  "key2": "2EFixmBAmvNjesXW21V5Zx9BaFhG1vb7Z8oLXQ2F1ZDqRK1H1xCcyAVK4u2tjc8aVQzvL7tGLL3f1fXXTrPjpabv",
  "key3": "5YyWZVoqiPjSjYocWBZowrBJv8EPumUTFXZ55EKXpgYdNsMHoc37ks5xHJbtmXYwwDE1d6B66RmDG7nQuj1t3KST",
  "key4": "4cUBDznc55kNsQesP8rAcvxp4iAWWSbadUPUhGRfU493tUpqBeZd2RDoVy6yPLSrrZRhoKsfZEuNRLZrebWSojoQ",
  "key5": "5GB2RnSf9CpNYgTVE6g5Qz41CZqXr56WqmtKYW9dqEMRpQaot9Jr7aPawJNG4DaZhDAMxCrUsheTGamQZ9NevijK",
  "key6": "2hHjrvJStYzVDbZSzMCxDiLW9QttsUAHFBjqfG9GsisFC2yjGieFS3LbrBxaPUXx1tbG1FmabJo2gfbNkEzfGc17",
  "key7": "ykhxrQK4KogF3amsc9aLhjdoBscAz8Pnjr9kAAzJeKNsss81PLGUc8Yq2D28GFtjZYxFkYeUn8JTB3PLucVaoE4",
  "key8": "rybUYX12LJXxfKNXtdj8hYjtVS2Yu6h2YNB4MFLAh12Q638bQBJKy2iqHCFwYZ6bPRvev5uruW6BV3VzfbQTD4D",
  "key9": "4NCbJ5CbWxKUAHiWZcAEjtiWoWJcCoyLFVfCJfreMYwgJJn1z2v6mWG7RZr9cmXkgP4CsX77J1MP8K2bTZsEMtEX",
  "key10": "2VYyTjvNQ4VVxKUdGJVG38cFYMuWzqMpJQcifyhkE47ukbCXKQgtU96eUfRCKJ3U5MsW1q2kWNxGKQcGWKXun2J7",
  "key11": "5JbTMof2Y3maKbwZ36AjABaACsB2R6TRyRwV9SXVsvcM7GLfNyKWts77Cxr33vdBx1bc7uGL1M61Yw8BCTr51wsB",
  "key12": "5ueDpt1e5PYapwBPVvkLkaCSbwxr5ANGSJXMiGHSqshg2M57goubTYAPjeBvc1xzsgzA6PzXsXvNxXifQudM81J6",
  "key13": "MPhdgFk4UZCkHwQjQFKxW1MiUMYAXFC2cUjcHtAnNtMFKEANg3JwAq4ym5Ht8Bq2NubwD7DS4v8SwrpJ4ChTQCN",
  "key14": "4bxS8eVaXBaXYYNTJ3ffrZTBhi5VNsP1irLPLPvPYTAQeoGPoLjbRsLRGchF9hgd1U4qb1XPGEq29KvNUsm6yW85",
  "key15": "5XVpf4v2gJpftVYJT4RhZAs75dYnivhpr5X5YQVgnYSHNJbPBHwdqDfmzTVKirX2165SCo8Ca2RW2pr6KEQstEEN",
  "key16": "5ycMsSL27ugnsQcp8p7BUzzkS79EMd2ims1CFG8gSVhNcANzJ9A3zybUmfsbV4FtwxRqnpSTVjHqCEHVDZbshk2n",
  "key17": "5CaEN1QQBkwNictuiwncLW4Fm1zBLRqrsQTeZGkTAN4teyNwVr7tmTdXazBUpn14rTfF3JDqfV4seGPXWtX9a56u",
  "key18": "4VZTJJLwAs7d9tbtYJ5dRNKTEjfY2aowM6F99eQsKm8tQ5izmAhMWAkxuTYsZiWqC9YXRdDyQHyKe6DrLTsNcJFY",
  "key19": "42BBg7o1ViNhUF7BpExx1nNhhxMn7RUp8RqTwXzqGmQpc7ekfab4V5TcGH4PJhx8QhiyU6Yfb1zo5gi5woDAs99L",
  "key20": "4wKjxip7TP3fp14ht8wDyWRGHxNc25k7qATmgw2Z8y3v7fUwknRk1nf3TGWm4JYVeN1Erk6W5mzVG6LneBPjP9qj",
  "key21": "4BSqqNZGHj3CuvTPS8BDnWBfDVqNuGu7VxiD4VXGG2Ad22hKdaMc11U45XfZqkE7cfPRzKzhdPJdBA4Qfv4rNts9",
  "key22": "3o1vVLQZVfprpFPwJ1RAj6PZTUNWZNM11wkSJwXjkSVAGBKtcjs8CUWAN8tYhA5yn41zie7XfeFaUUT1Q6USmKt8",
  "key23": "31heLRVhG9qeqMUVGrPYJSLJg2tMbKnTHFpdFEmR17J6bGKnZu1uHdMEcgYshtwTkgxpRLC37qQ8A3bcFBYEc13v",
  "key24": "28vvqZ4LfTJxxas7HmPJGRggQuBqHRyAGDvdDTqj4XdrVTpwR2CPx6bfC6FvWBd86PggCRJWBBrTJ7ZuCWZvpVum",
  "key25": "5mRKJ3Bonnao1krH9YRidUKAPYaGUnfM7o8ojK7NZnsbj2bNaPDwLtG8Gae2BwFVrwkj8pMzUkytzfgFmPEMcoVh",
  "key26": "2ckvsSnsn2Wzjj9Fnc3jY91juSLoKeGyhr6C57hBYVC95kypXUyt4MCprVhd4xxaM1TuCFvdwG3faHRkzGymZX5E",
  "key27": "3nuaGtrEhqX3JmgaEGZuiyUc7TTXC3AzgQxMXZp3kKKc6vgGWUtvfmZEEMGsJVYc2YgwXH2BEjim6iM1yt57eZWE",
  "key28": "BU7PZoZkH1DPtdXxucksBSjs1dxF5cFNSkUuSErS23gNqmkYpNHbsVRwX1EezFpkhW35bGcXqAie2qTVF8JBJwi",
  "key29": "3EiJsaF5dmcfoHLqjCMCxgZGWnBfqeAFq8oKuBbDAxB1dTzJXdnW1WHQMgYozEAwNF93EbSRwKuUE6sz2sMKb85U",
  "key30": "2GFHMz6tbotmZFyG8eBkhtkxg1oxCEapQR3ft1iKm5HbyKdHtG9GEBgkLLQ742LUoBwQbnHaeTnL37Ngy8kMxWce",
  "key31": "4T7ps3Htm5NDB4mZSuNpWTFkU34wPedeLAhEBd3rr5KfF1rdsgiZ16At2Je7f8L1zM7G8P5obShTfdJhryTbm9RW",
  "key32": "m7SuzVfyvyTou2xTzykjNoi94er8tXxLRDnrVNopbQbxxvcdto5xzZJtz8XeqEMPxTyJGHrhD91JrMpUnmQGLvY",
  "key33": "n1myuCiao9u3SnLBLsypAqYy2YgHWeLeE54xLA5sNiKHpsTauornkhq28Ly5zXbbTfnrRvDhsxGYG6KUADCx9fj",
  "key34": "65APwVPnQucH3JsxE5svBjEZsMRPZfamJjkkVWtado3SXPyntGepQQ2DaqkDhzu9MEWZP3spDv6kdqhnYBRcXUf",
  "key35": "PoKaLgHomRHLrida9tx6xfyWciy4HMhyXg1ZnwBFS8VUyU9sFNyA9JqsL2PD1SRXHm5o3HRrJgcjPgqjY6aKU5y",
  "key36": "2cazQZSTts6jv2vJxej2MdGuxCRAfHwi6AqYSp5BZWhJffBCLcHb9Svs93kPt8sw7cW4BYTwR7qntU5tEATtXdcs",
  "key37": "21rruZbiEjKxqWrZJjjkogT2JRQdhtYf46utiMBVsTNQmsUyR4zYPMzH3EpGBRZc3wreZnYJMbfXBTQo5VTAWQnr",
  "key38": "22y44EcmtMRrVVaod6iety3gbWMsj67nVR7mGeVMciw1VR1Da5BMDc1KqRh6AEsgrN1nRD5d3Rwenc1tRvXuBzz8",
  "key39": "5siaxCSpPtUEPjxhXqxb8D8piGb5bBEP7B91j1ezxBFgB3jMHUTJtFBhofJXq9z9kck2tS9vB2wyBtdkPDohH9ju",
  "key40": "2ZVSbp98tc5u2KgFpVgtS3E3tawQ6QCCcWm3jLTVQCn8HujfLqqSZSiS6rxWXot3HgWDWp3wzocopv8egdXRSmBP",
  "key41": "3NQQ14etA5ocK2mbcxPNyjTf36c8EXHB6rNAmk9C5JiZCGpj1DAn7U6mo3eGEKT8nNwcxQgogWizn4Na2Rkby4vU",
  "key42": "2paiE9MuJ1zvR3JtG2H9CvRNPPAA2KPm8j8njVLw59JMbnYAassy9MXnBoE7K2xUpRD7e5PWc2SufVJbCnroJJfn",
  "key43": "5tszRDo3ngxzCr9qywjTAmGeTbEpg38JQBCaER4QHSCtdP3sQSttMh9YrSmdzy99a4jFci5b2ndqKn5QBrkK6fXM",
  "key44": "2WMXgjnLDNsTbrVCXwdbPki8pL3rpzCVzdjefZqjY9gcVUNsJ4X29D7d7qtqiwLhP8dNampL9WDmubTPKZaL7Ut7",
  "key45": "372aa4vdX3uKNuQ5QKiGBSche2A4ZeatPJf7jgMVZmCGBSTqUwnj6J6XrjScQV6xbq6aREpc5Uwi9u8eK2y5yRWq",
  "key46": "KuWuRcYsydFAjvJjb3uHdbykTH8LnG4S9MWULTHR4HFee31tb7qcypuMnSU3Cva28yd9fpMg4c5uzg3wXZN6G7o",
  "key47": "2ZiYBv6MRFhhb5qWLaHXENJ6hmr5WFvZiCKjLH7Cg2vuhinYU6VGRRtWMNHC1Zg1UTEEUiCVM1yC6rVSAxsNdanC"
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
