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
    "4F4a1r8LK2He1fuvrFiTi4VSmK4F9CCt64tdAeEAFjXT2UKQDNWcCYUSpd6LMdeo4Faxewhmv6ApMTz7nKRFRysX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gVFmSUWe3VqiuvvfwbiH34sSp65HHUrCqknQyYMZ6S3NPxy4z7Bka8nZdo9ZnbR7EfZ7DSMamoPFnci5t3Z4siW",
  "key1": "iqJhJ7sp7fUF8PEdEAEEiQRN6gw4DzpDwajDD2nmP9wM7Wqfc5qbGhaNbyJeixg1urH2xZg4ErWq5bhg2ghR22N",
  "key2": "1F43TP2PdKYLcM2RGUrUBX6nXJdG43GS643mwGb8Zkcv4m5WNS35GpZ3KWd6pLrz3gvYVgsb8himLcs4qrkUiHQ",
  "key3": "2uvFbNmYCQeQ3soQ1qgqUjpYFa91Sx2vYjCxFMyXTp6pdZF6Eu6g4y1ZjMAxGnVKykAFLiiAiXxvfQAEeWaBgBqr",
  "key4": "3DAkods9iLd1RSDEyWfPjrBWVTig2NqAcYJt7X3cEkz8Pucy4coqdvpDDvmry2wmGLvTSC8nzFvGXPxydid6Txvu",
  "key5": "2nrVYNUGdryXudHrdA4xBVi6KviWerFZ8PhmEpPr3Zw6JQNnBPeAEMhEViVgs5BiNFTu5iiEvsro6ch48nUbSC9A",
  "key6": "3d6xzuM9QcbnU5Tx6LwAtPgLLojbPYaoJVGULebWHhDJhLEyqJ1RnCRUthAgo91KauehNNhRVJtWXMijd8MALdNz",
  "key7": "39thkuV5Fa2TebsQP7uCP86wHaMnAKWdAjPbxVjH1cftHkzBrzFsidV8vhaZ9sgXYe5dDw6nDWDFPFpxv97cs3jQ",
  "key8": "yyXvfS8VeCXGv56Nf2aZN2wAo8e9rji1z2R63HCB5toUCiSnTxHV6yUah6wMPwR8KjX9FnDHLBq4PEV5yBwT7WZ",
  "key9": "KuKb6N5V2zQCDAJMGBkdd1RrZWjHqHyhCTNHz39S7qXqh4PnpZTrQQLzc3zBebHzRVoSNcxZQBrgbnektSKjpEd",
  "key10": "2Tuw3ywz6aBsC9NqJqrcPeB1ioWZa6vKMuwhLzGFcgpuMtf7yL2LQeesGpVUfAUUjWfN13x3WUJBA3EBNppKyB3q",
  "key11": "2QZ4GwQGVEnPWwrU7LMJoR3FEcwSxnvLDbmVCDdiq9YWsffMWXEVxDBhraTNeyQJh6NEpnh4M689junBhnDrFak7",
  "key12": "2KAwQz6cP3wx4wSyqPaPhY4XS7WEoa64QB9wvgrXSgJcwKvDbLcorJG6xYr6ryUebf9oq83PEop2Zs2dgDrFt2Sw",
  "key13": "2D8eGbA3FegTgEk5i7CBSBGzfKh5mfbDYBGCZHMfaGpXwLfg42ajCTPckWdeSdWhFGTPQCkMy1LjNCHw1JmfA4FF",
  "key14": "2ciZHgygkRVYQVCr72rCXieNPu8Uwm6k5vN8PmUnneAsSaYwmPnbG3kf9rvL24gonuUE39wkYvC7mfhSbZXLJLJ5",
  "key15": "oMK8VUn1MCwpE7nAZSvx6vW6AzGTxYhHLYfn9KtXFMiBiw6zL161eCdJSQnL17w6qtMNVGvgPyumHyTDqt8oARe",
  "key16": "4HG1FeUZTsEKGnHNQQXr4SpexaT8v97uf1nAEWgX2XW3A7Y1sAZuApZkLhmCrsbfKH5y5sLBDbx8ZWY96CkxPK2p",
  "key17": "4Rfte3VEHSMsv6ZghXAFQNqqP8tKDv1nfw4f1YuuDhNnbtjk5n51CpUCwAgtmPrL7NhXFA7TZKZX5uUwXKTHA91F",
  "key18": "4oE2rSZKij6BJ2r2wFJmV151TDGcTGC4zTY7UKS3nHfLcqQqEte3N9TUA1fFB7bxXUiKR5w6pzjsWyJuGkuBhtAE",
  "key19": "2CUq1HydkXyiqdt2yCanS28SYF4iz2Y4mSQhWoGu85NyX5dBLkCsUyXGXWHboAWyG8BU2mTW7Kd4tm3Z8HuUFWda",
  "key20": "25BKFZfVpMo6tX9X1e3GSWQDzCDWPFQ1ouSx4eTBLntrimRsj9DnFJ5fBcHbh39yXQRWnBt99Y73rdgqYtwrQVn5",
  "key21": "3fLdCqx8X8zP5hdKPpMKFFYwEmX8J83NnyNYYkgUvy8JCiLva8ZKYDBiR8nDNscAQNLSKcSy8f3fPAyz9MPqZz19",
  "key22": "KbtBQyNNDpMxXZRLDyxAXbdbX8gcUUNdSLGrJugXfyo9r2PBkQwYrLG3Gow1KdsCxfCBKKmkGf9Ls7Bg1Xu8mbU",
  "key23": "41bcLjqWjk3CnRDLc9LZYCMxSJ4ibvNK1Y243BGUFJyp4JQi2vkba3wNRwm9qy9WDuftEVMXBXdmLddcPqTzs8zw",
  "key24": "avYYKLokcv4uHiXGhgJWobAHtF9r7tGy88jeM51Xqc5xDKJtzqFzG7dC5T2XpuNnt9SpHUrmgikX4cfpPvuRi1v",
  "key25": "udFSwXRFpJGPY7RgA42VyyiEGw1vbFGctsWFt9Rf9MU17mrn8zEZU1NEZnYsPU2LvC9rB8bb9mtDDfjai7KX1UD",
  "key26": "uuAVLVbgXcZz1RCscS4XuodzBuHYKAcLx3CFVysGpQgNQUSus2ajEFjFQdQazN2DdaakFmV4db5jHhz9bLuk6mY",
  "key27": "59mtJzMgkRyqAD4XpcTuJtUzp3SkaFXWmMDhDqDaCYAV4XGqaFsseEx6c5JguouAaw6WiuiWC6UmTh4nfaDAPBcA",
  "key28": "2MJpwKSxqu66fGY3wvPMs7X4ej1y2nNg4xC9kvki6U8k4iWPQZhZFLhmV4y3D6GCiaUJFmZ841edwbngi7zvAX9C",
  "key29": "24dduSmQyJxwvUyDSAoFXqb1EnfJTDXga8TXYGv93MrKsusjaHKiTvdWLCuTQEyCpeTERJBcSv23VJYjNLHKzSKv",
  "key30": "v82HzuAxs4WWvuSK4Jset8neLPjjcmTWWv8HtueXhZngCw1brLWMFur6aj3dSUVMUP2QwWJSiqBrkDJwm6FSuwF",
  "key31": "k1YjQzsTrHPUAgvWHhk6ffCp8X9dBXU1v1nCNq8o5qomAhBLAKCBmHFfu3bqLNdXam7HAQdbhrAJXnYSPJy7Ug5",
  "key32": "57LQZV37xv3fHXe7yR16gNzkGEnpgrAVzYEEcwA5SvJ7yRjGpAszotb9rMF2o5vFrUrwo8parKRnYpX2MVqzA8D",
  "key33": "59j9Xj7oiNyZYxcaapMf29DLDMrQ4btTf6pR4jg1kzd6S9vmMRqFP8d16qP97sBBPvUR5SE4riZnNNnWHmNNpD9Z",
  "key34": "2Wqg4iVST32gc7RRg8p8X2yxYRMPpTboCytCVnvheDE9NGdyZMBfFBw3TXzgNC9LGUwTQdL4hbugpjxQz56WJSG6",
  "key35": "4X5xr9dJL3aZK5k7dq15wXLpRQsC4XwMDdJvVG568akAVvt2Ea6MQcyscwoTo34fmFtDdaiHYHsinmKmiNnbzSZe",
  "key36": "5zZVyjxZPjqmxePPuowv9DbGqfvwdKGhS8tra9AB8EoBZGvWBXZvuoFE3W43zMFfbzhPnNZgRFX3dPPY2xyovgK1",
  "key37": "2PXddHKiicNdkdjukvFa6feECien4ZLShbogxtHPHVy2Pb8emqpfpBSZWgv9EmMYxD97WBfF8fLSTMBt4gGvB2q3",
  "key38": "2WcLRJS6JTVTgXDC4tteVPhJ846FbEarfsSm82ZicRpjDwoeLPKfgbxvYLbu3XFSo29ejxKA4oxXz2JEcekajFWt",
  "key39": "5gy57d2uXbt91Ho1SjyKNPLCPvkA9rF1xRMCyPZfmbV4YE98KsHdgcqGKp7RV5z757UXDjvnBtfXzhqeXL1V95Di",
  "key40": "F9gZWXTUBmkUeE9npkaVYw5reNv4jyaBuSfSKedZLYtiaqbhZHnpd2JJYDrfur2PZq7YCJkMeYGmnwgoSzYvdcm",
  "key41": "5VWipx4aazWvNn7RgbGwawiSBCHDUN648ajxoBXLzz7C4BG5SSSnSCKRrELbL9qkxQ67WLf28t7NRw99RtYrm4cc",
  "key42": "39anCsLEjbzXEZQJAfCgP9ZGr92TXb9BooUYvdUiNcjA8yU7ju4ugMuu6F1gZSFSVthtUmCam1YBnFsobvZNrhLj",
  "key43": "5k3Zt1YEZvPnzqb2nmoPStzixWEmAQz545sHcYWGf8E1F1LMYGTPTyoDRFpqnUbCSJL8qM9vgPKGMyg1QN88YAhZ",
  "key44": "JPtMruuHN6h9GiErr5159tW723jyufBDvyzaz6W3uEN3j8iWRDuR1QArN18GVr5sgu28D4tnY4JYwbz87aMR1DY",
  "key45": "5zRDKjSD2tBb7R415YSYJGveVGTKbbkHbLH5c2h73B6wNxDzcQ8wirsYvyhAWU54n1iSp9RK9ZcyH2D8APuUdaPt"
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
