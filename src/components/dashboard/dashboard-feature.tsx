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
    "3VNuA7kNdH8ndozGfzfhYc9LvucChEUnnHiZfPkh3nSLd7iR6Qe3cqa89Kf81K3VNGJVsMvCGMSPk37kN2kwcoeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mPAyTQ61pcqfzAtj1WeHBscfY2Niye7m5fdSrMmWyVLZBcbULxf5zk1wU3awbov6QAKPmNMaYKuUig6UpMAUuWi",
  "key1": "38kZ7A2ujtWUJktsraiv6uyKGBXLhnyDLT6gFMNPcvNrTaua72HFWnmRWwhokEEoY6yrnaTV2YPCdBy2LZ9CMVmY",
  "key2": "3Y2T3X9JJ5Z9vpWWh9F4g98Vx3hCHjF5QdSB1sZzGJBQrEtcT4MhMYDGtG8q4z3L8VjDcActVuHGfeNGShevek3k",
  "key3": "CFxeGKdkcwSVvnYQ2KKEBHm9RU3eewtuB6k4gWsyPN3FN6saWd7LjmedPgTMNVCBvxGDfA3fGqRbXE5oLwgAzmB",
  "key4": "5vrttLTq9beWCxf1ueoiHoyZATaNsg3BzFCDuHZAi5oz3saCGNNNSq62iyLeJoHNURbL7xW6mUYXHSWh9g4mPRok",
  "key5": "5pZiEpsrGm8s6RpD1MXsChxAnKPtayZ8mu4h1yTqsit2k4UMDTjY6tEtBfEiongQhqtNoERaN9AajHEWmLeEWT2U",
  "key6": "5qNMXXDxHxBUeuEjHxsFfMSBcHehvjp9mZZPyc77YGYNzdDWHkWsG7QHrCyGHdYPXSqATsR5uGAzTARBNaa6bfRC",
  "key7": "xawjWaSktZVKRtuH96PVboEP35qQYetKEsfPRyRRagAczZatuZjguCijrnbC8Dxpw6pD91GLqjL9824oHnSgwTD",
  "key8": "VTyg5NMx4DWqqmtDexFBqYWYjWP2YD6mDLBpEmCFEUUFkLJkP7zpKRK1e2dQfxKFUQHgU4RgLRvrSX2KtvVBfUo",
  "key9": "5zMcvDymLUqAMEpBhgYGmoEJvCxWa58XmnDzJyaziLEk3M4DCXRzqp8HciiqbpnR4RzVVKn4mTSvGAFU25Rg5d4u",
  "key10": "2suteKABabTy6fc3JcsYZYyi1Lkk1obtHCT9K3p84HuaA6AaJkQbJfExLDFgRZhG4kzFMjsjnSVZmtjSxj7Hs7TL",
  "key11": "HUnf3GXASUcsRmRVe61ubniZD9EnZ69TfxJSmSSBGNCHeLLCppxUFMVHZK2NbHmw1pi5SCShiJZ53pFRgiMM6Ki",
  "key12": "3XXyVrwydEtWa56ggpnuhRjyuR2M19JmhvvgVCH8fzMnniWtpGfN8kPWg6GynTMSaTwzw8oc1LQwkefQRJana9Dy",
  "key13": "3rdUBKg9U3bqUdURiiJyuRbRAL1Uy94VdzvmV1wHWhSxgmqq9P71aHMVVUhkhnpuV8DSpRABCfY4gE3LbdGg8SmE",
  "key14": "3x75Gp2dG4m6bfwT5hjuDyHXjYzgPVEHshUF9vcc16HQgo8ciBQPHVgP3aPVvAxrhSVPbJWwMq8uMNwK3A2LHvcE",
  "key15": "3gCe8UiQcuZX1F5G9BuKXMpoNjN8NE4j2jGoAcxL3DkpAf2zvGZ35Ex8nYNKVxEjchu9mYsUDxmNRX51aSMrYrZt",
  "key16": "nWKzuyo3hKw5pQ25LGYewdLVbmSysUBhdE9zm6GcWdjQXn7Re4VXEeAnVMAn1aRTPHfC63devdR4GcQo6VJYtYg",
  "key17": "5s5TuaxuoN5q8Aci8n3KxqKZenk5HfAGgGmWG8cAZ5dD4ttxTgoY2BR28TD2gKLZveDGqwy67jz45UkrWkWaeAcA",
  "key18": "4rXpvLZny8FiLK2kzPcv72vwdNYu2CghBCqYDCiRxK8ERRUaQe5nELSJQAVoobQoePMRhZFMC2fPdSUp95ZzbSLA",
  "key19": "3NQgjam8QmuGXEvsDmWEGaCPQUaFLugLtZ17wWUBkrHtuvw5nyXg4ZSqar92sJWVQfta3rU4PwY4d6L1TFgVpP5M",
  "key20": "4NYxGcAQNsWDCgozPexdQiurZfunPccKinXj9QH2pFtemsUpM4gxzzzYexwwRfFYnN68Mi6UygjD5CzYJUgmCv2d",
  "key21": "F1o4mGYSBf86wACeApifeqhMMyjwmud1jorPjWwoHodwHuzDgCWKUJzdFtFEbbhKFtPAfd3QpQHufESQ6iD4Zif",
  "key22": "oBi29B5oqA1eyZsTijeEwUnC3hpp6rZkDUBnxfxxyvigmMgE7eF47sHwFzxPRtDpTYVkdd4nzBomL1mrtZJqDMf",
  "key23": "3M7CiW82RkrXtaSKZqCBMBtHYaFg5CTSU6e96qUUVhSu8BoyENPfXxAVnLVcPyh7Km6SZcmhRASCyeL5fJoSPSns",
  "key24": "4hps3aW9NsJuaLF6qejSeS1Pfxctt53XnpQyc3hpu9RpH8muTgesqkNgZUh5KABYuVaF39Z6WpCzyfDPuwFgV3Dc",
  "key25": "4xCq6HQoTbBnREYHVMFti6ZhxRVdihtmnyEZBtcgLkSCPm8QBGGcnMPVBfC1gC66BQwYmjbFa3hmGfmwX3g4makh",
  "key26": "36QfnzoBvipZh45K5d9DmNTQdWVFQr5SMQDV1a1nMBew26erH6RGszuoFtdsWbWCbbVPgcsSijSnFd7ofba8wBdn",
  "key27": "4mfQsG6N1hwSmgtdxzqy85g9yzH5GCndRkNUmNHgCGtu64anWVt7LiRTbBmV143nXqgfSJNLwKL8718dJVHDYdom",
  "key28": "66ab7kACgBQygzrnVJMSaQ7LuUT44XLvXPRjJCJ7ipabv5sE5pccgjuRnQG64E598N5P4gMVvBJJVrAZTWXVuPrA",
  "key29": "3heyyugwRxBWby31ij7ipu45mmkGsU2kgRfFYf82yBY6VjfKtc4Bq1ULjjhfBsebKmkN2FP7NhcXrYGDwyNWDVm9",
  "key30": "3DEkU2nQDzR9rdbhZLjwLE2T3GtMEcBu1PYaQHptjYfJSNC3Rj419D75FeGZN8TpxQE5XfroqCZftwkh8jS1r8m2",
  "key31": "jgBxyHEvJr1x3ZEZwQddeWc66hyBqsdVKvtd7LETXh7tZaWcUX7DuGySJcFhSoJwaLhS1XycpdyGxDEBindtHmv",
  "key32": "5tdBzrmffcvrzotD8419v5UaMVx9ozUdpnbvK4MP5Gh7eTddW1CAtKL6e4FYm3fHDpHjbXAUJYHxHLL1FBW6NeCS",
  "key33": "3uKjP43ejkTb68PJGFwN8GWZrtp3mmLjKdZmA6MkgxNjW9PYYWTvenmYxMHtbhnNwzXgCGbbr2Z81Xi3HBQweYpN"
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
