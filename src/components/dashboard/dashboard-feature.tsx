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
    "2oMhEp7ENrpymPtcPwTSR7LkQsaHeosUmQ5pzATvMeh3rgw7TJMTbiF3zFYYLAAKJmVHq4QK6RVfqxX219F7azhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rf4SLWJegMSsYHaBWvUJKdp4YNURtWEttbtYD7QNwVfXpjqsANTu5V7G9Luzr6XQsyDepPAhHPXhZKnVxwhYHXt",
  "key1": "5TFsqAMCbRJHk89L2xHGaA5irsyNRXtCNjhDiyjd4GpZcBXTG6z3sfewwyiGkpMRssVAyYiNXyzo7nrN2832tt8p",
  "key2": "9AWAxsAtYWvjWqrtvwSqBJXDXoJVLvNfjHdjdrNBmMgRm7sWNP43KYr811E9pE41pxETwtM5cfiYJKRLdjQXzG9",
  "key3": "2cM32t9U2xRXussQ7RW2m7Av5cobaHzHGbcg3JuEkE8CUy398jkWSCXQ5GDyLCVQNGkKkNRemhycnNq8H7ohfUaz",
  "key4": "4yNPw5F1G2BtAt8iozyXV1KSmMZGADzoXZkas2B4ZVaWdg8fG4P7kkTNbhM2P4ystAZrxGbkR1m1bTcC5paFLj5E",
  "key5": "5fLmQqXdYLda2zMrpZ8CGCmt8sgXMzReYyjJ6xnFhhYcRe4zLbDCvnzEQ5a6DndA32LbKceUXcV9iWJszoemAj4w",
  "key6": "3XmD8DRmDLjmNgJ9z8Y6KzSbGBeAuKQKUJ6mRcFaZwEN7hjnbWLVXT8xKTKXSpHSWzaWtVU3ThkWqdBbyRTYwHqF",
  "key7": "28wTnoxM9pTyokNQRa8KXFW8Do8aCj1k1Bwwwu5xzycaGPvB238mhknrtRo9snU4QmXdASsM1LedDWuG7CmMKTid",
  "key8": "4rSRFNFfbviE69kazw46s1KFEhqHDNSyXfecbyXYJYGxCbAy7rLikcoM3ejPNpUJ6yqvMQTgTbkoP3ei6bVZSaBJ",
  "key9": "42vrrKUFJiFUEFoxgPk9KBMbbT16S28HuNJZV4YTMsQwbj8Wiu2WaRDYCvYxWAetiWjYaKoEX1uCd8KWotRU3HM1",
  "key10": "4z4MfVnuJ5EmvrEsaMiMahwVsgaT5MB8KoNgEL9eu5CZ84YZh6Lr2WzmsQHbP97CJpgNJ7G5Jwmr7V8qEwL24MSE",
  "key11": "5P3sRy2RjFVgACZATfo8jwKeUJjbwShLmyWMfRP9VQhmxDYkSj6RYymr2KstKsehKtkzGtQB3YF1TgZ9XgZVucRM",
  "key12": "UH7jLo1sSkKGPLGXTVzMPovjQYNY1qPBjzdt16Wdu3DikXScGFCv9WAHBdxwSKjbfme95Lk4EhahdGpvJTGAjnJ",
  "key13": "58ePWpwJYcDgXvSCHxzxR798KJB1Tpz4Lng6p2kYAVKDDNS4PQB7vXo9sw4CyGMsCjbWncuTz5UVDHftT77EqstN",
  "key14": "5rpwBdhbGFRUQ6ojhwzR7LHGoLPnUK6GTKVrgZBoyeVwjQw2RminJTySVfUEDi3YkmA6Vomim13XEhM9AyPEWNka",
  "key15": "2zJMiYjF99LcyFvvQhHEX5DTeqkCGEdcwJmEu3vqgPBhYtE8AnAdci8LpvBTrhsGgMktnX3MA5JJCeRUTEKkPB5d",
  "key16": "2EKEwqf7rXN44ySkgtyGGarGT53ysKH7Yvsi7jGpiaNAGgxzP8LADqyXkNG8Cpp3cjW2QcgCBwQbmprJu7zZt4gc",
  "key17": "4P4WuxUTxqTC34U52wSDJrAx7XHJY13U7sSmEJEG2qBXartfbbk1HS5XvXKdinkVRNsXaLyNxtYnk8go9sHyDRdA",
  "key18": "5SpZLUavgwZnPWVf7JtEtNHfEW9vokfMGf38V5BL4vnQHQawAX1Std7zCgq4ccC8etfUyfvJhZ8moaXx47DtcTAi",
  "key19": "5qitfqdQ28eSCUXNpR4CnKVDt8NcwmDmuum1A7LADqTvo3RuvhD7PTXBc3kUUuec23x1tcr6acRzqR2fqmTJtbxX",
  "key20": "4xS69URV3vYhHCXcZbDfdZw1vDRnE5cM2n6DG9r2pCKE7n3VHJy5bE35WRTGXkQ54jBHMdupWWdSJ3Vaxhc3J3fy",
  "key21": "5pKHcp91UMzc3sZ4usM7Erg6WQV8w1Q4UuggRm7etnWv5wFda9kRvVoYVm5MkHqQpyVnZsQqdxpEVC6w5mEDCFkg",
  "key22": "3nBjxLL243m14ibgmrSpPeUiYKiyNb4838J1snM45aHrvWRTRAKxZbxeqpBhUd8giDdSTYu8Kxe2LKwBQq5SdKqd",
  "key23": "VW74ZqMVBr1drjVNKoq79hkdooZcVkCXDhFAJr299FMiUw7hf2bLCk1F5LVYRw4df8dTGhXPSjmafjocatzQDd3",
  "key24": "HueYa8Hqr8wavJF5K5dHM1bWA1V4UYx49K3ynTc1mZVkPGJt97YJaG6734U31JDNjdaTCNkrinVTwmbVgyjYxNo",
  "key25": "4PeRLcy2JQa5bXHKmjo3kBJ7gt2hUvLMDFqGX48uW9Vi89yKKYmNm1VJk7mYarmWTtHHaiYy9v1QqtidtyHnRazx",
  "key26": "RBSpDUyFT7EFRBwBr22XfFiZe2Thb6D1xqNvamyzbhWsWdY9G2G1LQU5gnuYJrEBSc4GTaKoqgWkjeU7wkLJiwN",
  "key27": "5nvHtbdmHDdgxRV821vSdfXYddzgDVD9N6zTxQzGWndCVmj4Vqr8uF1GHE1mmqdrDKGhnL6VwXYeYVUWjBgofEjG",
  "key28": "LkwDnu34cqW8wsXt3VoxnXVdCvkpVXSdbzyE6ZPubsPB8JdsYatXRZrdGfPCKbie7p8ZEdzzBdEvssBT3UkPrPX",
  "key29": "5FVMivL89d3xKUAn4tMXUkUY6721QxewpWE8ks1vAaGt4jz4Wb7uGfi2rEEZYVRX5HyjQFj1vFEaXKgvvR93P4sY",
  "key30": "3Nic6D6iNW9Z6W1ERfAeRonMp5rhf8qbtvxhHEsVMNj5M2rwdwsr5VVWL45mLWBELNBngEu1FStAXHqn4YxPb5qT",
  "key31": "5JjDnVUNwVMSaJQiVzDiL6rLYNs8LPzdpgAZZNmu3v7nZxRBpn61xrYSQM7bSN5JRR6fKKKDBzHJN3FD4GFj7CE6",
  "key32": "5GWGAoCbsaGYqGpHnHYTgxWqj4Mh6NvVnjYEuVa5si7DkwmgGCR2WNd4hHyrAeMjVpYpSyCJPvtobpRNNCPUEU77",
  "key33": "YUKb9xyxAZ8kMMns4JXYSyRmhZYexRtnHJZY3C6aDBA21TZNNEUyr4mQmwYKgB3amKZTJJ8GQLbErVKNsjZrGUm",
  "key34": "k69YaSWxVW7DuzwVPCWU2D2wsdZcobWLJnC4cCvJ6T9nuZ3qa4RD8ekZs62nT5SyHnnuuwRjcg3ZhgR6UZkjnvX",
  "key35": "B7fRasVane8bt9kKivZ3kGeVEHQNBFo18Pqu9NMa7RXckozcR5aSQTFkmFgNpJ2ZMUY2GCZVebTwsK8zT8kEKc7",
  "key36": "3M7yFcZk3Jd566NcRD1JXVRFVXrzLrWCvKsWP29KtMqZqkQfH6BY3opR3FkpQTmoC2TrmCvmz4zz5X6sdxPjmhjd",
  "key37": "22D3cnF49BRkCLwaAzY6pjz4UGd8jJabgZDJWNzTM9WBfwsFuyXcDYRA1DMKWjV2DB6zBmTFMqjCc5dRP7MUhdRL",
  "key38": "2Wo7tarhMfLvCNyR22HaPCbKTNSRYSYiDVZBjj7tNEoL8nBPfwR2y8ZQ2XddGYAoGA9STKLYAqNjZCzLFCcgH8Hx"
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
