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
    "3mb1tyYG7mMsnUXLzt3FUoebtpWnaF6DtA7TeyqLTSE7HzEtxvTkVDP2VH8bwKyGStRruRhHwaCi7JDRFcFdDDG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jw3aPKF2CNNNT9AXE265tzBbHuY6fN5GLRqXmor4icwvGB5De3a7YRAGW9vSUZhNryFzxCnsxqZA4wZjYJdW6KT",
  "key1": "2GWPxGvtCKx25xKiVRBfsd7cUYJgmRNEZe1qAGFC41DQgMsrMV8xQGcCmUvhNVdMTPt8VhBBK3hhgouXYWM6kvdF",
  "key2": "5VnTS2LYkLTR45V1KUsDG1LwxdUcYnUa5hs5Wo1Jzdp634T7NPkebpGRuqGuekCELZHec1CwfsQNEsM3c6HLh3NL",
  "key3": "2WTs7Bk153mFTU7Kf7oiG7HK1JKCfJ8APBnWtqR9ZbVwHSV9rtVjt1hu8DqhKdNMUMPAZCr1MAHBh6xSGon3v7Uz",
  "key4": "oQzqdnG4qRAvF3vdx7CubEz96eS4eQ2zJFZyP4YAeQc4rn3FoyC74pqUw4Jdrm5j2YeBKMTkLX8UKVscmPLwFrU",
  "key5": "4FWm7NsyjAjN8gWHBSx1N2UvhFNAmGF6BEhc51KJtifbNbmY7NHUy3U9VmfVc3hbLQZGHHRuZbmYcBR4fQCj3PzX",
  "key6": "63HzfWNzbSmdxM2WJGojPoY2SqU9NWRfNX1Y19ChGzRMNsU6PS5ineT774aDoUkrvYE83wnixF6XAL7Gk63sh6eJ",
  "key7": "3Ai7bL6XLtRBm3g564smAxy5NAC5PvAeEujmiWF3jLMs3V48cBbkxaPRpUG5THydxSLHuh4MbmsHqps4PKSYujfo",
  "key8": "QsRYd6BDuitqxeQzXTx295PR6ns3nxB1AUWPo5Kkoe7qqDgnyWfAzkvcTe8FHe1So9YEymghWytzTquZjPqhwZa",
  "key9": "3q1gX4oRGMsKpbF8rxenyW3q8QaGVUrQ5qwgjms5zwiv9QCmVo97HszE8kNkMvPMrMYg5MTaxG4N1HH13ZK2rZ3m",
  "key10": "5bPaMuz2Vu3JjEGwudt5bU5Z7FYd7y6Leu7EsrgsCteUdaHnyEtBe1mxdtiDjgBjWjpD7EnA5CHdq3P2ZfvS7Xga",
  "key11": "3JtbH5pTMBpJFkitHai5XU1Vq5u4fDL4Nat5c1uU5cpnMx5yoMLQEm5CkQqGYJhWyRCjWN97svBLSMavRni8wiiQ",
  "key12": "261fdPcHDR3CLxHF8k1YPixxfkyqdSbeYmvVya3Nw2wsWSWM4FXorwBBNvkMv6bhx1QVbsEoQUzaR4ADEJQLERmn",
  "key13": "4QE9XSmfyv3o3vSZ5g7bd4JspMvFuxFUwQuzfSa6ivRqcxjTAbcV7JPSvgVBdxcb3t9abeCgrwbZ5j71ZhDRmZgy",
  "key14": "3Wf5ZmM9DvhyJp1zTWYfLe72t7G4Gm2qwfQYqcTsfRBF9jL3BvWj2wyufhqFHK9q5DNKxW7tSX45oEwDSzHjfqRU",
  "key15": "Suy3dHbXh5vxZGZ5xikL2N5U4Pd4kHDbkxMFJHJT4thhoZ64MsAmhvKhQ2gvMdqqczX4SrApoHCHGMjFzTVHBtw",
  "key16": "4Txv3F1RPFvcKfiN7WJhFcaUsyYNziwKGtNNsNxcsxdeXvNgvdWV3y9o2i5EjmG5K2BNsztNDBdWbU5G9BZEqsMj",
  "key17": "5DE9vDJ912iRa224HqntjVEJrNqFrkZvifBsaSSB6trSP4SdiQJooxJAc3KBzi665CyEzrvDfHKgMwD4CbQs3Hpr",
  "key18": "42D9qtiaZ9ar7CfVa6zSimoAfnCgygHPciVag9K9K4FL8e38YPmfnY5bWbAe9493FNgsxoRVH5wbYpq4owoBrqgU",
  "key19": "5dtNHEe3VUxRdJ5aGYqMjqgzQRURQQW3VNpdsHpCWXtZEn8Z2JP7g4WMC4Bt7bUVFcxNuvCddfgTzjEAbGr3Jmcd",
  "key20": "pwiQLCGZwBptNkwJnGyDNkTup5auHQZgBUjUryKKSeBBx5w9Vq8wih5hrmJfyJ3vxCci3Yj2qAzA6WUsfArcWpe",
  "key21": "2e24w8LyrpuHQ6obarnVEAdjwbuBas4LwPu4ZRsPYi1xMBMsRJfqmSNzZyGantYMrZTivR71SbV22dGFWb3sm5e4",
  "key22": "URZDytmu4uAvoJRVT1zxayLNWC86kEqQg2LgZ6xKyXri3oEiWQkkctGHskJKvGp9SpEkvS1JEwZGHWENQ2UibzV",
  "key23": "26NonvXPJsxFuzezs919DHJ6QydCUfG9G94j9FcAu6KLttNtLptkFoq1FcLsC7H7j8QUKcpHarwxtC3Azyz6BkXa",
  "key24": "4fL98th335fNqjEofvdpA5ubUHwrcQJupN5ikwHLxyUJG1QHsRVKe3a9vuC77hvXbAWFsB57qNngVqKgr7fRZAwF",
  "key25": "23ePpTf24zGpRVqfrauUaTAmioyAtxKYtxsEeWU1fsybW5METJEsF6M9wktaTnYxRce36tw5bGjUKeYSMvmxqVdP",
  "key26": "5SsyPuEwkNuFrHEjv7ZJEwhfE5SC8kGE7MFESVM28DirMCRN6TAqsF7iVadTf3ufazQAyDGn6dhRdaDxeTbtrU64",
  "key27": "2DYUks13BMnEPBDAh6UynWNoHjuzs1GmMtVmpnwC9pSr5tJpoeTs2Jh3qSiFzoPwu3vyxWTsceYn61VWaQDt6y8k",
  "key28": "5r9eowsEMkevWjCsRHgVJ7zxdENFgGo94NPLjVHVKtTfmxsuM696VSa79j1uzqFMLs2hzpgG1nhSjz9nvo9qkq7U",
  "key29": "5e3emDhyEcNFpdwTBmNJeiCL3gaA8274hm72222mHLgto3qKSSCfehLrEBENLh42BUUR4LXQDwCriRgGNwiQswMb",
  "key30": "5YYCz1yJy8VcYu34NduBeBSubyKkRUjgZoEQ5fEB2okKfKDS3BMckeiQXBZrtE5Li8xYamfVNp11oyMDB8RHq3Aa",
  "key31": "HSTr8o5TFrSqSFmpMaJVhjsfzqbJKrXuDYXckjPGqv4vcZgZVqGc2zHDA8KBw2Zjc9Pz3u1nvefe1pXc2xqr4Mk",
  "key32": "47A3s59WjrXRaU6rq6pzjc5ih8fDbztQ5ayJHdXKXBS5pyXfAKom9NPMWPhtpD2buN5yEamKDcHmTE9JFgbbsCTL"
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
