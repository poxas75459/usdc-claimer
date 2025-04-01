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
    "KGfJD5EQ8rfFCLmfnJwYLwaVpPizPYadcfTWtReoHEFDBgbpjjmbd4Z3s7qy1xs8F3Nvz5dnmt9h7m6ojnGR484"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qRMNnJ8Ex4WhUaYEMe3ujiAdpphNnNKYPXXLaGfaWBwexHyxie3Qgz8xqnZdkiMTzhHjSmiAgRXvQg7YQCQvr8J",
  "key1": "p2UA3kNNbvgPScivXFq4mwEQ5CstANmpHBsEA3sUkt6LwotQjmzB55YsHThJdbriyi8xHWjHeuJx7qPjT8qNCpa",
  "key2": "631eBASWGZhzPS4aqR8vnECmqFV1GjQfdMo2rfiBWRQH65VZgqwvFYAdsbi7dyY4HDFm3a1uv3dmdAcfHEq9nDgS",
  "key3": "3xoomYwj4cMt9tgk2gaF7Qk2pWhghsDUJKNiqKEzF2R7Zrek5ENBM2y8E9QBoLwtUC88H37vkFCYQELYLBLTjB9a",
  "key4": "3WZYtEtctJuyb3BLLQMWoSE6N961WzpNqpVZ5iQicJk8zBTmmKNC9Xb48M6YTS4PPzdfoTmCrpAYx7nt32kjMjz6",
  "key5": "5z3zx5cJZcJEqPTiApkL1SDswNUM2A47ewvXxF6r2ADhYQC5168LRKJonZHkSaVkdQK9uGYG2WXMJTT6Cwa959CA",
  "key6": "5cGFPcEwRk9b8VgUa8GcVxNKFvcAZHoxeAMgHZEvSXwVReMQHfqXQnijNcKNyZdoFkPukwTypfxQrEaMBH6XwX6n",
  "key7": "3KNiBejeH5ZwyevWLPgMHYP91UTWqKsinxKTvqxqH8g3C3j3p9AfM4iKT5nfmZo5GYKs4wJrWActaxksw8yMFEh3",
  "key8": "3e2PkoSKyQy8nhUGiTrmMUEYkkBJacJpARXXwQDKPRxSGi2KpzmymhE6JwnrikKazzG4dxNMf1QovUVHRmwph8Go",
  "key9": "vMTytJSmW5VHAB26Sukw5tfph7tMRTzsYecUTjtJiurACKna2qyY4yWWKs63rUdWwehGJeYYYEBf64JXGs11PBA",
  "key10": "5mpKmaXmPfJc2Qj1EXQifmLQBbN8CkkHqBvpFYu6fFPbyJT6i79eMaQbXy3nfYkpAL4dC88syfKM1keVDWw3pCSP",
  "key11": "2ibFWa846LksgsNx75ESZXbBn92C66exeKQEU5D5CiKG9QGZgTS8EGn6DdC5DVGPGjcs8cbzX5q7zHWx1vT8Z2sb",
  "key12": "5idBpLQFobXfmk4gTRrZCBAJDYAH8TuoN8vpLRaqm8uQtDVQu8dpEoRs1PEz7n21B9EKQnLi14vX773Q7JUqTA2g",
  "key13": "TBB3MvwHt1qEq2oVRVfAx9tKoEFSKznd5cGS63VzPjCHZ91mpGdYSpRvtS5FxqXNegB4TfiE3YcsB6jYRxxWBhp",
  "key14": "aBW22zzHnyMg4gvpDssbiBWy5ed38q9ZftCkGdKhxYPSXcC8JkYov4A8ADmEKW3ky8qRcY942abUwk5va8Em4ms",
  "key15": "5JFr4e72xXiDgHcMW8SQSoZZoFvRzZGa2fFVP1Z5AgLxMnVrgQHcSp8AohgPw3KdhQkjpyWKJnqJYCK9nFhH1e1j",
  "key16": "4AjWkjoZYsTW5chiNmpYDHghtUhXFRELR8iKoF9PhAZEaXjy3cWQUVqwrT9q7JTd6vmzsn1UwMoszwFryph3Wzz8",
  "key17": "37PMvEMPYKGPdepoTe6NsjwfhbdXNTefejFS5beZbS8etsQi1g7sMYKYhnxYy5bSD5gPFQ9YWee3Ei2vV9yUiL2",
  "key18": "2t7phBngocHCNXter7j5NExad7tLfvWpQy9QJpafDXHywfUZXXM4TA2Wkosca6JVKX2bb1UocAgs61dxWVqRPKgW",
  "key19": "2QQbYV5Bw5hp4cAiGZ3Kg2CgtWjboNYb3v8Jwi3bwLRRQwnypxnKWmxY4P7U3tExTAqu3JsxGm8UqEMcJSfdN7LU",
  "key20": "Dfg78F9iah34FTCGB7fekwG78vJNWVC5Zt8TZ5Egm6T2YAbmCVAKG8EtWbq4tiSd8tbcGEySRGczBG4vgo7yLbJ",
  "key21": "X7CCnC6fnyiULfE7VL9nGo2nCtmjUwyeMw3kzDEAdkpMV8VUxSdZoKgNh8PtYtEggjKDLhPxdK5MVKdQYZEpeUz",
  "key22": "2HRfK2qKXtGpm7tJQq8RzRF1EonEmkA3o25PGV1xjUQhmZ6NugQcC8yz8geQTm9LU8ERvnSSzM3Uf3xGu8hEDM2s",
  "key23": "vvPFQxUhy8SNTNr3nh43cV7VtnCtkZWyKbDe6R5kYbfGiLAitoG89FxcrK8GPYGgE9uwZaLFRRCLayNC7wXaa3G",
  "key24": "3vnXxndEQAXs5Ni41KrEJaZWRbjpcCQ2Hy3CJidQNuhpiKJrj25Z6PXdxw4f1w62NPJLB39pgKDX5sALVoAv874n",
  "key25": "eGxQMczmn9qfp14RzQVVHfa9rRz5GX7WNP9EK68iV2FPa86zTR3s8gEDgoVydPVEY6tNndob5XXqk7PTRHbcoYH",
  "key26": "4LGJ6PHrFDYWn4NMxhnYqBHgTgQqWQcEnzMP8g7ezWht8hDf1X5RBRjjUwTXrDbfBACUPXssxXjYfqEiGuCTC1Tj",
  "key27": "VrBiEPf6JCgFRcWAtmNaGV3LQjUaJgcZk5KiWBoyxks9R1PyM6LiaqpZuqBewhfwtxYgqy4yurwaD1yPRJkvZQ9",
  "key28": "5nDTdQZxaUPi3dnc5WWaSVMiZxqkVyayfLhTH5b5xMitdR6tgpGyVVZHPhyB7D7Sm8Z5os66CWnxQvPE28K8Ghwo",
  "key29": "4hsfJ8ahdUtMyA6mDsDwk1MsD7WN62hUVwhpRZrdJ5BNEXYZFu2ECn2XfLECgDo4MmRHmjaWpLecy6U8xU9zduMa",
  "key30": "3dx1HK9Fh8YExWV8DZF1Hsa3TwCsr7gHWhrJXXECxW7tfrmpFs234uuK6XvvPstbaFE49FPhSSjSXVKweWM1og3x",
  "key31": "2yK9ocXAZeJH2591szwzSHrdFWEqYUrcQhMoPkJKKSJPfLRhje36L25nigHAoxn1NNGotEw33mUubpQ8Ht1xFNgq",
  "key32": "4qyEhzw7VTt6WPjcS1YTE1yJjfGxVTLGZXKUjmmToYvr53DVeyR4epVzmHVJvSeXuoJ2sASsa2JvHxE5V4TbKeES",
  "key33": "3GhmGZ4qaKEfNYkfjQKcsQTZjdJi9AidccDFV6SY4iENNUJBJc2RZjaMseDEopF5VReeV8pFvV72fELoiKwD7Mgb",
  "key34": "5tKZSmHz4K63jodXCLx1rEFAxzkAr7uqaXiBFbtjj8ZM9gW2K1mVrvRCxCf3iG24vUxo8rqPcMuyy5sR892SQpJC",
  "key35": "4wtUYDJqa912gtgdh1qbMqenc5mbjW6MMWLL77eH6zQrLDhqLZRAn4HbTsoApTALUxsEJXEhdmaF4THcoL67RJGq",
  "key36": "4Tk5VLKwnjzrSAXRRiQhgqjJXVLUq2dAbvCL6Ld4ZZRuZgHZDs5Emcg59Nq48ZneZWHChuViQHJumJn4eH5san77",
  "key37": "3cgm4uY1uPABHeLvTqdeKTp3mwhPTRMwL2UKY6UoC1H6ePCVbTjAFEdizPyTH9r724UwMfy2U9PfdKXRXZT3cmrW",
  "key38": "547CVonKmkng3BaKwEWDStKuidDoGyYqGfZSdwijMuDzGRUjFiHnACXeEJTGPcLbSCBbQ8tdHx2EM2zTjfeBQHFD",
  "key39": "3Ta1mV88xX7yvUtGUWA1YKjCYzxeikRC81jiSfaWyHD8X9BqrYQeuu1p2a2MiC4jB6RozyzwpPobbKkDNKjCBeyd",
  "key40": "3p8qRWs3fS8CPQXvnqGNg7hXTsWCRM4rx9uxoJjJz8hQXc6fkhvEafaRX9XNqjYG9uSdMGCMKUoMniYiMAS81c29",
  "key41": "44hLmtJ1w1t49QYH2Tm59wv13QFq5rJZYVDC7nehekcMiTkeqRbapMv7vDvStb2PPqggvF9gnEioZLCEzDdqgoCa",
  "key42": "2QEbJTjQs9PyVktanbiyoZ7TMsf1xWHEwbGf4KWPeDYtfBMdFQb4kLfH2ZDpeSzDFi64N73NC4G3nebyqvKTBd5S",
  "key43": "2MVm6HYiZzEKBqwaP8KvS2hMkxeR7SRB6esCxnSdRbA7TA8HGkegmb1utidDrTAFvH8jAFBf39XsxcQwMuNF5L3h",
  "key44": "3emVBmUPAb6bFs4ibh9NC4dTXVcs8UrsQhUeAhhnKR5B7w67puLY3k7eqcSKKdkAyZrf5iYjE3kTmgDKPMhddH6X",
  "key45": "3f6JdR5p3muD57sEq3Uer2Gs29MTzbxx5DZXEWpgM24ZMo99rYFFvTzyoDp8YN5t3Cfq5Uw3Zum9dGE4NnUaQmEK"
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
