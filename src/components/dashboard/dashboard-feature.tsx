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
    "b2CHpaGk99wN9Epkx3D2g8zXoPE1GPXWZnqFkgK6vRfMLqPJfPffJbyW9ywhy4NVx3faxSj35LVMTKf2naLTdVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jBcjtZcHuEkqZ3JuR1Qvs2oNVyaeWKqhW6TjLqZwjyvHMnAq3kVx3SQcD6J2KVyuRxLF9mzi6vMkNEghy5oRteG",
  "key1": "4vHpEgF6XnptHjUW3BphEknZpNEZGtfd7bYZeZxNBEMjpDJRJNQxivGs4wt2Eru8vhL7LDw67ZENWzqLnuN1d3TQ",
  "key2": "3P2KGsxSjxTg8yVC2GVbjeiTcQFaVvgmvi8pffx1ucZFshkpxbH1WJdaTT89wCaJsyr4Hpb2PDvE319NcR6hXEa4",
  "key3": "4GTLBgdnEKVQfF1zbwfePWh9y4CGTvAaTAASmT9xQTSotueFYcXcr2j4iRsnvLsXhGdRauMdfL4YE8z6c1U3vLcF",
  "key4": "3mzwvTtqJWqAgtKCj7rRLb4LmbqWz1ha5qVUdTjpRFbimNcGPqrnbQAD5xJWry9aqTFgrAtxA26byeWfqhbCbr3G",
  "key5": "2mgV6BDb3k5CtKpkLtaZGkGReK1K9sScVy1EKaAE3AcqEjQfhMnRnbGadw9sAFGgPZ1h7tpSfihusCu8NxMNerAJ",
  "key6": "ontgmfh4yZtqTE8LqMumD6Mnuz4QasQskmBn41KWyne1N97xvwHrU39cMW87Bs8AC6gi6xcPjbUBFe4EnhUayAC",
  "key7": "63BBKQyn21R5FXB3yXtxZgsVHh139jYV2u6Gcxcb1TDtXbbBPiWyaTWnqRuPtpWbdbtqTvDGLxLoV5VoBxKgZCSV",
  "key8": "2mTfqJP5bakc2nDXRbTJhSNvWQpJxNLq3js7utPM6LPxevoon4MqFbyPyQh9fe5dxtutsT9RBk6qjAWu3wo1yuh7",
  "key9": "2KBzvxTzft1cAEoRBJAczBESMPyoyY1MXKJx5TY987BTD8XMZ676qLLCx2R8z7G9WsDXwbeqBxJenPyWVAA3Pgx3",
  "key10": "3Gs1wQCVRNjSkymjhdE3me9oypAvmcU1xNj5tQBfWsE469vzpgJJQ2AgKa5fErsok3YizKUAwQuhYfptLy1yzkMg",
  "key11": "5982nAuwkP6uYGLTSpEroWANpfzt5FApHt5inXkvTxVsGzrQB8cv6416N2322Ht3QP7SGTatTJgyTXBUNbGVt9QD",
  "key12": "554gYCSbe8nFtVU7AhS61AsovTQ1rexRHYhaxaSo74y8xgJkSR4bxMGcsPBHuhCB2DqYb9WjdWS1uJEETgRsuozc",
  "key13": "3bwiGNU1rwv9yGeU7XDBuYz7PwXFGKN25YAYjc6X2V5yFvubqJd6tZD4vXHh6yc6hcCubs6ZY8VdFAmCKor4K2Aj",
  "key14": "2Jof63da2upi3wypHLQtekbCy2rE77uhjE6EQbRmHLSm1NpAR1jxhPFXsreR9RrEYpT2QwVD6riNT4u3nv1m4feH",
  "key15": "2rvimbAzm5XoZc63xdNNEzQ9y5KjweU7E74E5bBT1UruFDUSvocNAqn3pwYCpoEewzHmsqxFKfoerYaLjGNSaSp4",
  "key16": "2bWsva8LAEzredBXV6FSNQjRXaWXNrUAdnEDwUC6XiJFaPhFDwzBaCX5DK8k9RRAdWKsDyUTTR2MXuGCwG6DCnGq",
  "key17": "4eDBMvhYn5RZxbDGbxWv5wLwP15sBxwcLnGioztZgjLJKndYJANfSaj1e4G6woUhNEhBxY2eiDi8V68tSnFVP9uQ",
  "key18": "57BMT4TRAJEQj74iJkCN9Zd3D33YaYbjFkanJD8TzLVzC6UqfgT64M3Tum7zuekqQKtrhpMnWHxApsAQ9QXptimx",
  "key19": "2KYHbgcFpywyfnhkcw3fv1HqpeZuq4VfaFv4fTB8TUL1yTSZhzkRbRT7ErKqPuv6fd4L3BFCjoH1LZGqup5hNgpU",
  "key20": "5gRJpG6pq7xVaNPrHJAxrBCugZnY2JZ92N4ckSwzLKESb4Y9tCCJGqMLZ17nqBUcxHuy633WR6ycj2h2q1Xpminh",
  "key21": "5Du9U4ZBYnzepgjgQ2iMtCDWanfHXuEg8xUZyQMGAML3pjFzE4Q25F85gro3jcSxZWSC6bHjpfTdEXJxzi5NiCnn",
  "key22": "5g9cnArXnj9u4hTQMAbGwPVX73UAgEe8342AijTjhGchaQidx5GNRVvkGbz13ynFveMWGaXZ1wkpuHkTXenZR8N1",
  "key23": "5dJuvifR4ryyVuC81av4b7vSwGe5M9QcmnpahdmL3uW2Vd45Se9V3oTbm1aWvxXPfUaWUGSwzAfvvW7SAeXH7mF5",
  "key24": "3gwLGLhSHjWtwvy1RHGTrtCbnusrJCCitn3LoHr8JFeXJkcWFXM6WyTvqqRGHbNhUXshgg7wBTY86i8tAtKz2tBe",
  "key25": "22R7spLLvg2pEd9EL4yjfuK59qnAUX5JounurNgtJE8TZADWPCrtnKt1ykK8YZRwh9tURGMs2RxiSkMdEXbsQJ4G",
  "key26": "4Xu8q3XhG7zknMcAg2R6tEwoFkKcB2hH5oJ7YMced7FqJktdp7KCqMQTe1LFqo772suqwCD5adV4MRE9XQu5biJw",
  "key27": "4rQhSQm394H6ru78LQqrwvt13oav5SnEYJPdYsH6cWqiqCuSHimM69eJSVUbN1SYUfTqZkPLuDd5fqqtNDt2FKQC",
  "key28": "2f2NcQzZW8BmX6GMQV2fArCNftroPGQNTzLR8ZPdQqEBUbFPBLTd3WQSxMY8PbS1wVd7dqg5jSakjUeaJitVMh6P",
  "key29": "2s1CwiaKBFz7g2KoKKPKVakzQJdSrrVB6RAf7QmC69Qi8Zut1cVKMSkLnHdtpL8Fxs3XSwuEKXQX994fFyq1dHJS",
  "key30": "5bgCjjMr4iwCnuyqd7Xg8G3ppH2wEtujDMZ73HPPwSSuoDZ5D9LzCMV9d19kHaqU2w1SmbrSKzPTDqBAHqbapT9q"
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
