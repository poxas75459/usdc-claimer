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
    "28T5wp387LAdHNMzgR4z2PN25Tw1WUmL9oT6HWaRgCWqAFseJFconyvf6yv2mEMPzaqvLCQ81bg9846H1m7yfZZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yd4QVxob61bbVay9YEpqemzZ6uX2AWEQ1c6LUndPQxHNwXvQVx1uzRZ8jLGNeoUKVYCyrjjhFmh9zjvYMa7jerc",
  "key1": "hPUmQbRoxrGERaxdgUJxXco6eoYHUw7ktH4ViqKwAacBaKUAwUJGPmcwbwi8QNfBen7EJ1XNXneMmNRNyWCwuJv",
  "key2": "hqwUZ3VXvtSVnQN9EhJ7g9aSQUr8TH8YUPSY87UqQgD3Uayky4ZPyuuJQN9e4AqiUZDo2bqqXiihujdj3cn9Srz",
  "key3": "3ESvL7ku6hMixfVRoZ9XsrnwWxhdMiCesWkxPe7NnMAyxRbb6MwLrYRtiZ73coZELdWfHT8c2MpqTuZPkw4fqTVU",
  "key4": "5CP5aZjim1q4vfYJCWEbgCMzkK7Bo5guvhzw4V4nqFn6K4gggbcm4rU1y2Tbx14TDKrcJ1WBYe6cBkpTcLAdFxLr",
  "key5": "43gWWUMuAMhjimzca9KZQLtT1oxjK2kjdkQ52nhF1tDqaKGHZ2SnHJfhAFjgxEFykzgurHxM88qj8USrMxCxB5nB",
  "key6": "43T3EMyfkerJpTfxuVjm2tvsGE9evKZzcTfCtkkjJKrnMnQ7TPKjUk1V2NxpEY7XcJB71C6ThBNDpWRU4A7EYgRo",
  "key7": "2PAJvzY8j2yb18ac2AWFhawvmnNUAXN8thH6u1G4M8dLwFQHaarjPuDEnfQHvM4MLmWK3ica3n2ndCxm5kdtp2U6",
  "key8": "2XtCz6vaWKEqMe6YNDjufb8a7XcKwr56ibm77mK6G7ERVEqgf1C7fZeqXbaEoFcMCytZwJoqkJyjHdEbHgtBSuQZ",
  "key9": "5cWJnU2Djy6cG53DbCBLAcyLcP4vMV7uxdoo4VtHP4QXAukmTvLrRp9rQ67mbN63cdbx7TE9fas5Uo1iu8sWoh46",
  "key10": "2nArJBvXDNYY5Sp7tEJjC3sJH2nWJBBH6UDKxJM65KewcmfAtAKFNGirUQF7qESSHEWUqT2VAAK4hsqSxXEhxJZp",
  "key11": "WeYNzShiAmo14opXNbo7eX2L29uRziGkymYcXhFeFSvfuKAhQq9Lkjv1cpRF5gL8jqaBcTW27XsokWi7JUagpeY",
  "key12": "4JRMBqL8Ws2qcaTPrvyRuFR8BcCur91RdRcPJerGhs94d7BXqwYwTm4iXGEzjcq33KZtapk6BgN3oDUqyXJxXAyp",
  "key13": "23JRe5hmiGumGsdgSNKxgBTTsH34uxgXLprBjYtF9Ck1526JT6HaLa8jrvXmXirgVw2BiTrMGBAxg2TLP8X1uyLb",
  "key14": "66YyoXfMDf1dqg16fsuC7uddg5K95KH6c5jf4YgPjfSvtqhgHz9WbBJdbUg38b7JL1VJZvssvrgd6BGuRaYn9aHX",
  "key15": "4ufjcf2sHL7FFNd9HmMSZEZgxwTKibFAshjcsbjqeg4NGpPjPNBSinSHUYarfPS389z4uJdtYdoifzsdjdmdfb4F",
  "key16": "2Mc16eCiwPMktGXLwKuepWzfan187k98YXWWMsT8kGMuNEgfDkSiWz7rAQRsxEmhWU5XmWXUdAufBVPE46LwRUTR",
  "key17": "5Ba1TWzsGz2XLkxZevrvsh91KkSDHT8nS6v83jzsvbQSgAkWrcFDq9CythrbQvn62tHS1KeyyzauuUFpS3WivRhG",
  "key18": "en5DuiXZoE5siixs1NtkJWujoFyS156AtoCws9shPrZwhNHhmr1EGfZPH7GiWEDcFBffB7PtWzfb7oAR6zJpkJi",
  "key19": "eD6rPyMoLuUU3mcRchMXcU4xVj68z4oRSksqqrPM78WzYFg4WoQtUAXhjDoPmhrzUQbvhcSPU3FP2EGycxuxUVB",
  "key20": "5pnxoooJaq4wMc1wDnm1hpLM3ySzZDrVvs6eWSPq4s1hsqDuEybkY1ZvhrohoL3Vp51gxecQTE8BtJVHxenTyS27",
  "key21": "2JQNtyu6mCUPjZ35kxju4Mk8F11k2i5CdrXZ3TRTCAUxm6GNjHFFZowGttjoxdiyBdAohWU6GhsPk4PBAAMuBCtY",
  "key22": "55CcLht43KQN4ibEXevmWf2yZhpJ88rZKf1KrqM9DRwrx4GKzUjJfsM9Z1rXNTg2r7jXhBkbppnRFmnPxJ1fhapu",
  "key23": "LTK21y2AJtGZq2yKjMNgNHbbfNKk44qLXX229uhPPkoi3vskqtemt1qTXSGZHg38Ud8mGaw53LrGUjpSN7QZnse",
  "key24": "5R3FEXB7CPYyw9gg5GjFPr7FKgMFPnZvEXnDfXJVtqs5HvVEEe3JDRpk4MWLVhxuP1XUpbDLMhDsVmSDJvE5fCPU",
  "key25": "TDfFoRsPMAiZeCeniRZjnuGt6AN7tw3yysVNvazvKxa4S35FMydb28JuisXechs8ZPihvEwbA5jPFsX7gdmwvPC",
  "key26": "2Y23BaAWSe26WzQBS2avi6ud69vUQx6qiDtLdYgirwjeTbbNX7egCBqMVg281uGXHAzqK9Sg2K9hwLjavqR2SwVJ",
  "key27": "5a7Ht4m5A3ZRvktBXMn3AHQtwYS3CwbpjP6bB1FAVoD4sJigm4Dn3tV9r5PpUo8rAqxdkrL81jqXy841HejaQpG7",
  "key28": "4AETCin5nuu9DmCrWTGjYNZvHTFy7wTtA54wihw23P9UvRKQ43rzjETgiFR2A4U3nZhDRa3hMaKgjUGjTVdt7vJa",
  "key29": "2bbmRsJypnMXBUnMkWwHZYExi5XvXWcaV5UsE7qdiqaRdB57nduJHyXjekNydeZmwCkYbiDB6dxWsEVUkrhJMAnS",
  "key30": "4hdKmNwTibsvW6HGBPfFtVuMYCv5GuB48WaDHzjrUcv6Wj534Yfxs86hXoE47rz6M9rajakVCD8ZtkSxhgu1U7LT"
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
