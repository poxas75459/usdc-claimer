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
    "cj3jZPTWWFKhXtc7g7uLJDHg5sH5Sj6rpbpsPzrqrhAWYY25qHMoVcnq8XGuM8jCkik48JpYDdNKdyVvFNJhNpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ubaM8HgLV23iDSEGqd1EEPn37SgUdtTamKCzDKQqBs4SC7zyvMBiakxa7Mu5YNbqfLdHgQqRknzUcZs5YLsYWX",
  "key1": "5Mpogygweeb9JQ926VCNfUCFQm1472kchamPgeqAnp7asD7xmkApzWQVnjNbEeHEJjSazdaxQqMPHscNPAsGKdMq",
  "key2": "bFZ5VmQ3SwxLzXQ11vjz7hqENKn1KZxSSejMXG3M6x4MwT9tGXKsjBf7VUkbikCkDo8rsFMPb9xigEZrRAxrWZS",
  "key3": "5A7SPv1PfuRSgrTVJzzpGyiBgdZAZGriuwv31NhXMGF2rsyUXSVESCFdBSufPXCdHidW4vnbE8ocpJn3DhjqiYa5",
  "key4": "3pPetLe7yHHUbSLNspgETWWHEYGzwUnWmNfTnBVGf5PSNaAo6ZmDGawWgeSKu7PMgKEaDfwduVX9y9vZgRd9irN7",
  "key5": "4WJ7H1oeBwkRETozLT4sDtXALrmhRV1MK6W5CckZMgZe2XRL1cbcaQSCEemCb2MZ1qy8FhNYTFAv1gcWfyrp9HhE",
  "key6": "iVVp9Ao33w2j7iewUw1LZSdmXgrY1azEtuWgtMSUTaNnKE49UTCQd7Gaf6MPb2BCgUG2sTU3iLkPRvzt1Lu27DW",
  "key7": "NDvGjr528xSTp5DkfH6Mt4nPrzqVdToXD55fuXmWrQaEmDYaEsSsf62YKR7wPppCdKCrhBa9BrWhqBP2EsgMEV9",
  "key8": "3JLUiM8DrnXzqZAaSYN2jbmyz11Dc9KT8wNpihzdwgkUVUdmWJXrgngRoKbJTKiwBZhyfBR5pijA77MfaZkJJT2U",
  "key9": "3gfVbeX2hiuKhhxstbsx9qasZTdPS9fcoVNR98DV2hwSuLHf1uFiKviLLEoHHrw6NK5zoJNsg7TeBLVZ8cF4bmA7",
  "key10": "5T1JuD5KBMUnVBTFqv1ZwLU3ehNkce4usB91i8TBaWBj9DyRUyob7EDLg1LrCdLKJjxNMRUpYWg1SjqQNK15Zi6A",
  "key11": "5hut43umk94yvNsPTm4tLyE635YfcgS21Ki9WwMCN4tca9RMdU25hy8Hs2riBkfSicwg3GaqoHiHFHCRZ96ZHu61",
  "key12": "3NANrCZwaeVsWEBLdqpPiBZDaESk5TU7tyb4u6f8FL6vMcfULoDmz31Hf5DhtAJcykUqC7GhhEVGTCJwSxo4yFMc",
  "key13": "4WkLhsmBDyX2k3gafNdhZJQJtwV8keMPyG5G53qohFpd59Tp3n33T5J4cZt2xx6YLwpJAa5xSXK6DT8YA5YMT3aV",
  "key14": "2b23PgXLeWYtAsMiSXxRBeFSnuohD1KdpY2MUgJ8r2BKAts2UskJFk5jPVui4316FUTBKpFweyUC4WLSicXP4k8j",
  "key15": "SvzASmJ5VNuW3GUtEN6aj8NbZxrQ511ny4JqbenCZrMAxuePzeTEPQ8w12rBfy8WiY3iJKS492rbDfWw6LzcuG7",
  "key16": "5bYpxe2ZYc9LzJBDVLCgwYTWrW8Nk1EqC5zaubPBc92WMtKPfS54TKEBEFogTyzFbGEWfVXgcfWMYGS8Yq8B9Kwr",
  "key17": "ZBp2ST7Gjs3RwWu8PWDnfQWfXdQniaL4vAzqvuUSP1xzBzjTDS18UkSU2QfKhYdfZxXTkX6AZY9tQKWC1PEirU9",
  "key18": "3z5778F3PuDHegfiPYKuWbFfSyjYrB3QHpU2jnziGacgKy6gCk8WcNPLdD6QKZd4wUwRQwMrFkyo3WTAmN315kTp",
  "key19": "45zmFQThAHii2W18wsZAztrY5VLCzmgWXLCNeue5RmaJLKJsPjbT5PthzFrDxu5FkxHT7B4YXx8Nii1dcTRbMwz2",
  "key20": "33qEwKRZAhikwUEtnHPi5HvPdmkgac21dFDsyRu8sKApMb5SawEhSGU2jzQwqq89uawHzAEo8fkhfq6YQUzv68rA",
  "key21": "sZt8e3JTu4UwDp93gSXKzasE5vrKmHSbt57SBJCF4PfoguFCCCZv1XYoPmXqQBgUtFv3JLxucXW2Td5b66TKYVb",
  "key22": "2ybuuDD5Cd7LcoQzE4FWd2h61YsnJWzDjJCXxWmN2h3q4mfhd6CESMSA7wry8JN6egWz78NqWc66PK4FdqVyDj7D",
  "key23": "3RW6VzFqMR9q7U7fJAB87BBsqhVfVQnGNkXN1fgCppAL8EbChv1Ds1HaPQuwGx9D1bW5L3SuyZGJHRwsEvbYubyG",
  "key24": "4LYerE5NL7xYVBysgK9dUFz4QUh6Rzscp2T3VbYHg2xhkP3LpD4M2CU3g3fXwKvWWhCQpvwELZYywpiojoeQxtFG",
  "key25": "65iisVpZEbL59zrrr7pm9mKr28w5hc31hrVhTc2V5oAZsc2oVjfDzDmsH8PzoVZnoKeawCJeHqH8i2CUqZdwF3ZJ",
  "key26": "eyciM3rJYfK8inHav3qNsSRkeuBGSnUQ2Nt1iqE5gk5wPbYjGkxwT4gouJFgVbWWaU91Td5LUancX7oNmfEsnT3",
  "key27": "1eSAqzLwdARL4n4ViM4pLUndcjW3uWGcqT9XA4BCnN6BipzexFbGWymu5KCnDi7rtRG5osHXn5qbPB97hssWxsP",
  "key28": "23xfh7MbkbUhigjqb5Ccp5jHtSdW1C2ztogo8rafdJVS772iPC1LGdK3RrSDC25jz6FYUVJow4Gg9qL8t1XQLybu",
  "key29": "2LZ1aQ6DyvPmpVgsm7PA3j4GFu1Xk7tHtwhhgV5PqfUVyHuK1pdEr5993GWBiMCKAyxyZw5dkcSRtxb95ZZXxmkX",
  "key30": "LKyVwQ9jD5E7t7ovQFJ9bP8aWsEDjxqLufTpZinRAyVvftD1VjdR6e6dipKFPoGyWG4NFdLvAmGnw8wEvqMFNAu",
  "key31": "5v2MHUTzHMFDg9FZ3LdtAJuqVDZAvKnPvujW6DAJ8Qt45dpyxCsUb4ppATLrXRHcpVzygXwHZnvPvxNG9sL5MWMM",
  "key32": "2n6xyH4NBkVmUMjhrPbaXbn4r3hRBYMrGaBbbdeRkvDxfqfdGnDH7G4QK1pgsCSF7r4WEWLazZypU51qjAnL4BPA",
  "key33": "3ekzsApBDGZHwbxQ5JKeKXBm2rVAF15y9KN6GAXzkRxPtNCB5SN2ifH2nWEdiDwncVGUx9cYBAcFSkjZRFE3Dbzo",
  "key34": "3nBXrrJ42ZGdxrTeAkbq3f1KmL6N2Kd4NeUa285ocT9D5UKvjCxLZJ6K4YGfqFms1NbcLfFRyMqwGZ25nPVnZXjC",
  "key35": "1KMDpjZLQUXL5vvmZkzUNNwyeVRCog3A6LrQLmZH7ADHN9hGjkG7QXeeFmVU7KheQvmmfJyQ3SFhMGJdtCYL3bF",
  "key36": "21RYzGkCAmvGDVFsy1QhNnTBKy153QkAjow8vs28UftUd1DM2g44mHY5x9EzueP8hsQUZZekkQ8wKuRUD6zmwCTT",
  "key37": "52t7kgz3exf5ptHspjCkF8NyTQXLNXdyUWJ1ZiuA3io7ir3HkotC1de2xnTfGwuckYorUUoox4hXnwidMX2xGLNM",
  "key38": "63Ammp1f2eqAv1GkwB5vySPwY67dd6DJDxJUSMvNbWQtUDwR3Tv9o1sSXDi8TvVvaGoqAmuiKuAZjd2QMPynFgUE",
  "key39": "3nTeDegBQj2TuQ5ACesAbPVcFZM5YovmQUbHSJdEKjVb3yFDzTmR95XsBdWYTdMBJ9U9MCP7yyybXMEAnco8q6ZJ",
  "key40": "5ar736nHh22Ln38xFy82KPD55BeE9jjh7qX5JpvBTj9Xw6rhobhYN3UyrKKaKf77fiQ9rMFLjXdvFpTmZeerqPck"
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
