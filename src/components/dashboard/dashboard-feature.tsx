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
    "zQhwN1bato6rwH6uc79X6DpgoZqy4vQuWsDgruHTMB2dLiJRxidLLPqvAdm315G3Chawqt2977uYR1pecvjLNDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AkLudyQJ5VihPgz3dTkyBQMpdVYWpwK91AJRrtShjKpGuvXQmkoutrAZf5Xhgg9s2fE4q9GVsAqRydpYNXGHqH4",
  "key1": "67XHNsUifnnjiRDZXZMYfNgnTSdH2jZW3EVUWzENomYB3dYMCJh9ougbeSYDuAoaz2V1XRwjAnePmNNkobmeg97m",
  "key2": "3hd8WSwzsY5RLjLpTLHzKRdUEduc3STv5CKQa3eiPRjWhe8VbiPb1PfShYZZ7WCDXVZc7GRRD1w4hGyXhgdcFJ9b",
  "key3": "4TwzHoVbDLYh1nwyUSR2fon5jtD3N5FaenFJs9XFUtNtkoQnRmepmYUASPySuecp2TUDziw3wrcDtYZLqrArLXyt",
  "key4": "3BCjcxobMKe4qYt2VYnrffMDsGQ7WmKgv5cVJPmsoHYkeqihKYSRs5HFsjguyow2KGK5RBXPvw4qTSu45vdh8J1N",
  "key5": "U4ySy7DrLtaCJznf1RrZP2yxztgRUagCreX4Ln44WcPhE2azuawBRKU9NeJS4SaVKKQvFuau9eCWkGRGqQSnjBZ",
  "key6": "57rTRz2oAMveLRD3eXcg5LQLvNja3mpJg3EYMM6kC8YMugYiW9cGQ1LJ1cxd5YGH9myDHqkaxVUjX7FseYpHDB11",
  "key7": "3jY6X5VNkVMgLEQHvFae5jntpQURd6rVeFh29KimqSQGThyYiLur8VV1xGghx5ntYu4quJDKLGRnzTXSs5qPvkoT",
  "key8": "4KDcXTq2SyYJWy6UBhf7YhJXVYrvGSTTr4ij1TWprmYpWY7A7hEhYrtkEkr9so2vcBAE3iQWbwNdeh2cWT3hk2DP",
  "key9": "4DxesGWDB1dm37Nuwo7ZjkWUvMkLksmfdx46FcMWV3XsxXSQGvEBZkpXduT5uZdjiEtHxojXSEzMHXaAvBn2rv8U",
  "key10": "2KRDYS2cFkc8RqhQffY7XFHPMy59jrWj1ogcfucLCAMybynoAtKWGVxL9ytBRcsg8iEyke3zg2zzgWz828YPqzY9",
  "key11": "3VCRo4g8FZCEeVUNCH3kF6VrtypPHWRt4Dyigd9EHrfgxeabRwcMKwnVkxqSmTKxgpJ155stcrccxr5i34tVzoLK",
  "key12": "5NuNnPyUpLGv1xBUay8dvipYe1iJqx8H32oZeT5CLEe3VoZL7ygR8P2KDQWSMoZYid3ViG5zzXps6tZMmttRwqqL",
  "key13": "CazqTuAGFuBqB2BihWbUM9gPySWCzdKNcy3fy7mZRqUad6S3JKVcD4RHLLoTbe3wwGQPJLq1Zzxs7dZbg1LH4k7",
  "key14": "2u1e3VuAAvfcqf2a7yE8GU1zHb5x4V3xqvtgpfVcTNzirSo6rkNKVdGRuaZUgV4jkKhEU257dZju4Wx2Ef5BxZyL",
  "key15": "WszyD3qwMV1YpK9sop3m3hrSj8XV6b3LwCnqxV6TcrzncKoWdQc1orWurdPfJxQc3rxkXnz1ykXSh1TppQsLR4T",
  "key16": "3VcVTCRDLGj1LvKYNXqhKXn8UJuVhdVQxhf9MeDehqeXh7zqnJTGE5cMo3QyNLk891rDJTJgMkda68VDaM1NJMQL",
  "key17": "MFWRPdxpbBREXZghyp6xVG5mfPbxFpXSsGopF1Ngob9AvT4X8rvqDe4zxRHRT68qGDoiqNw7vKVcCjUPZJz2DmB",
  "key18": "3oLfodV9kvDrKJ3D8aRt8iGCR7YTB68pyV3WH2wgoceMMvhK1x9EtSZi4ujnS9xd2iJdbZzzmi1n3WK6TEoutBwg",
  "key19": "2sBKv5xL5PbrJuCF4TfakmTdLiXaA9i6vryTnKod4mxax7wB1k9v6GC18xZ26jfJ9Hk6Ekd7YHnVqJsusSrg3jGN",
  "key20": "3AkF4Q54wEEdsGik7cTC42XHJmmL4QBDBhyMDfSZT3jE9mzAyAPvxTtSSNbNvxatgFa5dRjTa8zGWJ3eMGNtqEg2",
  "key21": "5KiMabnyS85vNTgtRPF4Z5dn715Fzats7YyntGYV2NezVp8KNsXxTc55vGahyVy1uUJmMovdJEGW4Ln5odctwjcS",
  "key22": "2XpfLzEKLwz5xPJ3YdNW1Xr4BJQ6TNuwbeAccWHFcCXt9WDB6RSJ8UtuxwmWVjfSpjdWk1qMSQRtiKDk8MiiztDv",
  "key23": "64dtoEakbNoRT2zM4qq6AP2EsM8QcXu1dCVCpLZnB9G4awDdVFu19NnKPZwbbmKUkKJsM7oNyeFDuDktJf8ZSM1V",
  "key24": "59inRYgPG9yAyhEk4UHHyuy9ynBykU9oriQNfYs32Bb9WLvU4B9ea8SZJ6vCeWsW12YEJKBbCtCgKVB58vhREoou",
  "key25": "5BjKhUemMY8tbDibsykjkMceiXijWiqVCqGACekVNdh9mRuXDASq31cTLHKNU7HPANGRLSWfLJFRbDTZ86vvNxHk",
  "key26": "3CAgMk8mUgELxVuVZDtidFZui3EtvatofGXWhhSaHVLEzgamR1YD62shy9CNT4ehqhMsWBG1XnXg4sVk6g86FfLV"
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
