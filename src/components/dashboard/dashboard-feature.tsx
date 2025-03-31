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
    "swozdXZCJsoH5XwopiKUd5dhBmDpAdzpFrtTuXbKsB36PsHXZTTR5fUzYMPUUc2QQfgPkCiRoaEyR2KRb6vkUGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2avzYE1fmD53FibWgxS8ipa1a98qmjKVov6dFP7xW2uzRchrXXAmz88LEMm9E9LTFanAVd8Jy7JRsbqoneF7rKoc",
  "key1": "8Bmy2VZ4TQGEP4ixZYbEN2tNVpWmLTx3m9fjrSeoAF9M2izUBgomExSLSRzQ7J5QWkyJujwaznJBA8K4Q5vKMVr",
  "key2": "427B77LJCuP2yJUKMZi5QMtVVRNA5Ded8by99GRyVz1XNmQMmPY6qPxwGAPKedQgga1FkW35zEVKBCD86krVm7eE",
  "key3": "3aj9G7pqY7mS1pB2qP8YXxW2guDAmUa51a1BRTKYVKyJuFNoHG3Q3ChsSt6JRJV7zB87z2wJQ7GZ87JjdASbR3WM",
  "key4": "4TdxdSw2eEsavGoWjt2k3s99UoxzZsJQQSLDju3HvboafspUC8efZg9GTgHrUxw16nUGcMjkb7trGSfHbAGRCDp2",
  "key5": "q6qQQdYSS4daAr3qhyoFJxTMPwMvf9tMWDtptU2fuusxosSCAzKTp6KhPV5UppCPGFWAM6y4zF9xe2xy4GA3BV9",
  "key6": "4EsoPBL6c4XsP6ernS6LuzuWdVm2mEjkuSpUkqDxqAjRGQ9YcgX97Vjt9abF5p9979rbdM2pnMxhmu5msU3Rt9Xc",
  "key7": "4Rg3JPZAWru6jnbK7TvY18hrB4ohUbL5fMbQA7PUNz8B7Sozbx866gNKXpyBfupKmsVNrfut6bkpqYDpr5rAkHhP",
  "key8": "4h53y5C3m97N3BNJY3d5Aziap1T8miBpHKG8F3a83KjHb6PUu2pmDeNmHJ5PPZykMjiXu9GSb69AzZva3EHFiUM7",
  "key9": "64FPzDPYT6LWJSqWoWW4bxRSdBGVDZUdZ8qz4qgnvs5Eh7ZXMJfrwVpyvK25prYy82ZThsfZLD5oxa2CdSD7e8DJ",
  "key10": "56dYc4GxW9iA4HjoX8HmUVf9pvWHjm9QnDyzi9Lrev42E8UR1AYiprsRZwddnUNoXpiHre4m2u7K5qRLMHYiaQXN",
  "key11": "3cs8fw7MUYG54kvTkAmsbPbrmn1JRAriSFDJWYNoN9Jkrr9DzuaoPVUbWyRBPKi1APoSyNiSTma8uoF3xwx9WY94",
  "key12": "4NNxFdpqRrRhJ8gUUiYHGsAbnUBjJToRQVoruWZyYv8y3ZHnd7CnuM3HNPsjkmAar5qB3NmEF9KTktcDMDaNLfcq",
  "key13": "NPKwB1SKnntNMp9eEKAL63JiS9yFfx4SGoPbA2EUW6FDKAgR5mYp5pjrLoqQWs5v9YLbc4469FSfVkgdh7MFD8o",
  "key14": "2CJoNy9fqYGBbsLXvnTx65FXxajZFBogtpdg2thU6CRURjgFje6gRdFk9ve6UY1gsPm7DScxaW7wwf2wVedr7ezj",
  "key15": "3smizkojE7eZiG4aFMq6uUUX3NXAWR6on9GTwQvpFnLdqreaDBHSXDo9J4qPKwADdjnec2QgmCpngKDZbtTNKg2R",
  "key16": "2F48XCTw2dW7z8tG8pSi4y7bd1LxgUwoL3CCktmpxomyEmAS8e724GjcocUD8yX8hj43UER7F1PJQLj9mTtqLp3F",
  "key17": "3UjUZ9YZRV1n4ZCFfA3eXagmFf6T8a3Y718UWe9MZRwCoLftzzJ4xa8bfhEH11k9zbMHrnsc4fvfhRowMgquCRJm",
  "key18": "4oQKNA2wJJPEJqTWmW5aEF6saeoZfg9fnnYHypC3X9MmYqHPeyqW1hmJqjGkyjDcwa3hm2H7eQh1vqcFbMempkX",
  "key19": "363oweg7aBedHWZ2Swm49EZttuojmoGBtPjWNq8CzJPNGbNxo7kDqb2aBdWjFyoAquvsGq3793AGw95f1PZnA42x",
  "key20": "5D6wuestjsLdnLFFRJVBdj4ugJTKLooDfYD4osyaM7mSoDDbkVbBKAbUraSrUE8GFycKqWT9xrHzEwU2dJkd1VNF",
  "key21": "4bF4LmtqjGnSKrt7PPwiobro2H1MT9b4F6FRmnuZbkM4F5hcfM9zJgoSsMFcvihMeT1uXdZpR2bUjZW4rh8B7XjG",
  "key22": "3vVx2azkwizXNwtya4F5sVECa9p1tUFcQDtnVBTbBSn1oR4g21uxq2KArWtwoTS9jt1fgu4mWDdVK1EtQBb9YjYf",
  "key23": "5rQNJ6BgFXGxYUeFEViWTwaBRJ9pkBjzYLbeYWpr38qMz3KGqYU8JLN1J5h8G1ZaShomPPwDKsMCvVc96gCYPFMY",
  "key24": "5Ry3Ckbe4AUJ3RL41yixjUwj7KUKSmU3E7Mp5seR23A6kSejUvHbWt6px6Lj6P9obr1PFsxaoVKjGJV6PmMRhVBA",
  "key25": "3exTu7wqgNjLFvhHfhvMmYneZdA4JhM9fPndV9vRF1YEEh32brBHVc5dN56zW7twZZAPzn48L1yQq1SVUoxR6p2T",
  "key26": "k66SW49t2Zv4HLRi3TLw7N8QP99PP84mHh9ZBb852MYdESBi1pDfgrRBAmEnWD8vgquL23Yzj8iEHvGzFCS2eEq",
  "key27": "5FjVzsNFSPAc8zTLxw3RJ7GSLo7zKZGC3RWRMJ1cUxLaRFMe72hQpJ3XhDvHMXy8rbvAq9HLw1EkamNrzPWeYmQT",
  "key28": "5PgHd4mZdLGvg38QKTi3GR5uJvnXj6rLFeX6nNoAmnDX7jkuvoa9crym1jnKANjBE43SGBNW5FV3QGrfUfsZzrve",
  "key29": "2GzrqyiYP6m4AX1UDoxEn9z3jwvkbHwhbyDgMa87jLkwaAfxYBXewa18BrVc6zyq3o2hDJEgXMFeXVw9n2DsC2WK"
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
