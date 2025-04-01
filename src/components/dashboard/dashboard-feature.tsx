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
    "4mTtLL2FtQT2a2LKr69GtdZ5UFeCDKRauYEX77XmZ7Xu7yAqz6zuGytAPUa4bYtd3tUnHtnMC1XUHhzQe7J7GqUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M52J18zmBYQqyG52gYKDxkXPyq73WmALtvBVpwiqcokEBbnyw28xgZdkKH1HhUHuaKtiTe16ZyiPo5KuZsxqVKy",
  "key1": "3ZSjkv3K4VT4pdfLoQssQqAPqjECScvn44YSZJT6eVKrnpJnDx3usvKkRW5N5bN45pWm4EXZKMcqRP3RfiF1ReUK",
  "key2": "2Yc3tTyca2j4dZfL76HbMEAW29dPmUoNXcp4A8iBJhfWsNek9wKoVnRGYgLbSCamgUKVqkGxC71vPEcVqgqe3wTq",
  "key3": "3ZY1PYwtiXXzaRbhrseQeLVCWEp8w4J8CasGs6hyHR5hnd3ML3qkMGrhtY8DaZRra47jgi1LHo826GsKRoy4pSks",
  "key4": "w3jE8JghXQd44A9KU4DMpGPoLqM6Rhutu2vhqnvobR8zxSEYm9pfiPHziQdR924jeVRZ3X5GMw1sm6Qthnz4Zgm",
  "key5": "3DKhRion5WkxtY1VH3vyrfF9KjAeiP9WkzJFuCmJP7ME7ayMyHP9PYs9REAW8CUZ9MxkkSvrbnS2i3MtvEwFXEVC",
  "key6": "xKfTYmNSVmzNRtBzRDqwgJU7cNw71Y7j4fFzKosbP5qFn3JQXoxdQsC2APLA7HCTPHdZPLqowCJQQ26SpZ8Bk1j",
  "key7": "5hvTn3jzSsrX2UmmqEwottp8Du5cRJTEqPACxkT879wYv31L5GHqjdpUv41SHw2yf9pw8vSVHKYk9pzDitF6YdvP",
  "key8": "2Z4SQqU6KcmNdnGChMsXraAPvKVZxYdbW7pCFMuH4fnjYLvCkVcAf84FSNU9ZGfjb4RrPMaWMUFwgBfm1nk1nVkk",
  "key9": "K6rdEENDneVy5u5fGTNKPDVa4gzKUdHqm2WeazRoRB8KKw5rLfvDMmwd2DGQBwyZqD92VUVRTVsicexYXdUpFap",
  "key10": "4GsKe1X1paPTQ3VY6Jt5ripimEB1VUhG4xNXxooKQ43JmZMVMkHjGeKZK2JmRsdUBVyDyQTnZQdBCSMkiWTgazy2",
  "key11": "4ZCR8zbMdj9NsREH2jqFEbfN9B7kZPQfnw8TGHcFCzXr3quUwtjAvtG4X17QRTgTyf1wKDdFzNcdTungPG2fwdvy",
  "key12": "4Bg7gWjk8Mh7hCXY1dbCNV1GEm6inWUz6Y6sprBVTShs5hNYRGyYnLVzTmEsuMPu3uLfiYK6vPNAoKc37wdZUnQ8",
  "key13": "4koF8opMZKH9kW1gDmx4FKBk9x9Dkpe3Va4J7N2SSDcrpFtfZT4sinCFozmVtfHuNPUdkTr9ocDiJubqcV9M93sz",
  "key14": "4scL8M24boTS4HwjHhCbZbzf1fTyjmYciCqPPGfcmE3kmZBBjvvUTCWKyxqd11te3tZ8BqSLqQNwKq4CMdsZ5ixg",
  "key15": "5uQyYMvMDuvv144cfkvKTkerAJDsYi1wWE5EA9UKWzkzsqR8S5ckxwLwnL48rZGeByVruvDgQWqz4z5FtjrXmpdC",
  "key16": "5w1kTZAQtRuj7hX1jfMy8nrkGJgoa4FUBRStjuFzZMmH2qxdQejc5M4nDbw9mmnvbpVU6H2hVt3roeM98sFK1QSB",
  "key17": "2xCS1cuHt1BnAB6DPMYEvGiZiKabU6yS7EATYwwNcdBsBN68Gz4aS3aSkUfxNsvKm9SVP6poBLiRAuZhsx8G2j4o",
  "key18": "UFTYnQgKXZDwy5yARJiWF4LTp8bZC175YBZfg3uWSvNPRfsCRJjaJGYgv6LjSACLpDH6J9u6HY6s2XjZAuDXXG6",
  "key19": "f969aVToyoH2aCXeuPdCw7XmcDMmPUPVXAF4qHDwzrrVm2PG3QvHPoCNQF3YkrEG45fvpsGG1PQcwRQp7EzAsKS",
  "key20": "eAvYbSpB2AW7Xz4rdt4QmLWHRNf7ruDBYuPUDMwgyUK1e5YaPTc1gvzjVjFZd9iHhsXwMCTw4EsXbNsqjPePktm",
  "key21": "3HcV2LoD9QU5TBd9FN8ustK2THBPbGfmrW7gz3uBH8LWUaqgEW3SjRXa4Xs4jxBLcXb658a8oxKMFAw75SAqAQtp",
  "key22": "3q1gVQTm66BEELNgVk9zBjceAy6i5tsiMJdTEH8684X45XYWWJCMnwZ5PUDw9WN4TiV54shKC8QzyXymwEhYc4zx",
  "key23": "4ScgEbNrqg4pvq5dQQv6Rn2rFRfWuLm3dnBwb8aJc59ZEAYgDuwawkd1jSm97JwSZoWk5yVJNYEn9Qy6mps2LgeB",
  "key24": "2quQDD88Z2QKyT8f1Vc4FzwQ9h9jzVcbNmSMqshL7HGnDGczemMUa8kbVmmCh8BANyhWq8xcdmHEmsXdUZwXUJDC",
  "key25": "2D4PBQQHc2Md9SG5fEM7y3QgXPEBXT6EwXgJm75efxWYcBkJMYhzoobBpEs52MmzvNuUiW9zY5H744YbyEdHtwnR",
  "key26": "35uur7RFy91wjfuVxsyyhFHe2soAsz9VQfUePFXUkp5AVguSgpnmzctt6pku52Eb7UDEBEZYWDtVJbztAkAtMxkB",
  "key27": "43kQH6f5zQ7zpcrD55xFD6tEDeMBpXQXPgYBDoe3LGqLj8B1FU4CBqcRMdXCJCKuL2dMdZtcMkY5mhgWtNjA2cyT",
  "key28": "4xyxckkd8S1EaBAhxBphhqtCLYYeXVSynVVfM59YgDbJsPoUz2yVZQaAFdpknZT5SvNVsA47c2aKSnPsCnVWocJH",
  "key29": "FJ9qaKNsUCyMa1v1wqk6Wwgd9NjjKQNkgYGHFEKLkM4AvXfzNfvVAj2hbqmU92rXczn9szYouzBk3WMYaiM452J",
  "key30": "3MVG3kydPsCM6rEwssgd5DqNrpPGtSg53k1xrc5mynT1MGfBjiceBUtgE7MmjhBEMLufSF9z3SpE1ZUr8uk1Cuax",
  "key31": "34qdMPTjkzzMJTKysP5udv1mHEQkrBEcnJhT7EJE7RAAiVS75AKnXoF7kapKNnaBz9VFuxwHDLqq9khvVDTccVmP",
  "key32": "2KazthfxfZVDqme1PxGWYm9WgV2jAA91npWSyhUYCrDFiYtGPS8VrCfjyaL6rVUmgsHE7mqXEcrPsvq47JVvvYv5",
  "key33": "2udZysYAQ4bt9WjTdo5jRHarU6pq3NBgkN1ohCoKoC2q8HXDTwvKKF5LV4FzX8iQnnf1Lfvom8meKfALPpwbwubc",
  "key34": "2ZTPf1ZqRY8EBp8ZhCKontTeuPgWsEt2QwTrjiSqSBaRZeV7YE6LjbaVhPXSogy7N38yS5jp9CSHZi5SWEbqTrU4",
  "key35": "4rHz56zVUayTzg2unYme7AQgMBBrS3bQFoxaf2aKMR4HvH5Q8nWjhVFJp3nhm8ipXP6FpEDJygHnkhyCq6c655VF",
  "key36": "5EH9WwZ4KNrvZmoYXeEzNbCmBk7U4ru3AVcv6qgr6oFZ4tWwkngMfr1fZvddJjEXe53XiXBtvcNUuP5MpuBhESW6",
  "key37": "5HV64bee7ouMkCTaq7pau3yiSPs88C7MGhfd9Np3kNVwKjY2drSYLZdNcnW4gZtudRq9RdaCrRRHsDxLHMcUxrzD",
  "key38": "27eeALhMRSz3Ji1U76dcD8rU3x5g43G15rnxpTvfd8nGFNZE6UPYmooMU32ZgmiiB6duhrjpZ4znFkp21481DUAx"
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
