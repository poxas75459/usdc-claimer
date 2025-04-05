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
    "5KDYKjP83Z4TNuMDYy7GKhgeKp1D932Tpd1ye2pURe7udipxeCbJm2E4h3vjAs2ULFFSPQppFLZGeydkuHVocYaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDbeMkoC5fvMUfiYMPDkNZFYPL6QiTR7q3G4ZNEaALFFRfUPXbKg22WdGmb1pig6Scd62xZztPx6abbQfm8uTv7",
  "key1": "5UefWBxhFPrwXpAy2d5MAE6BvdqvZAdFQwxrgxfBoak7xVw8aMj1wvHyqHHWtCnQ6rAtcGmy1Kawti2tuiAzd2JZ",
  "key2": "2QhEDpYRqCS9rDrucNSE6xDpGfXFHLdAq9X9phwk4GdLfX9e7CRUGhKqA3ckvbvwBcvcUwyYDmCoyXaRwpWrkW5A",
  "key3": "5wRopDSP79DMRnoPgYykneFe6d4WFdz4Gkrzgru5DAF9Aqf9kpf3WHTAiDCNThZQJhxioct2uNGemDUsu5xUpJ38",
  "key4": "Wdeb8kKsWtmhVnRVNs6Jy4RgjfUHtaUjM68ta9BTPRPcxs5v5CwiWiJ5qwZmKSo48mdYCzeqv452VXXZbqtSXgz",
  "key5": "4hhvaPZ9HJhNDVzyitFBqzEgTqtQ4DX77t4BcJoAX4wjjonpXaRGz8GoP9MarRxChzaooz2KgSvZy5RPAsQEUeMQ",
  "key6": "4fJQU8yCzT4sAh2UZuSzBpEzyg3f9t9V8ZYr7tZBW3NU6v6xTJe3i2A8anxUCZP16KmN26Sj4BdeC7dkYXYWNQh6",
  "key7": "Sh9QLa93QFyxkrnaiZ7K9vi4h8peJRUU8K4iGwot286WRpFaKNWsYmLx9LHVoqmvbj6SCCYwTSrR9zZhFsugzzx",
  "key8": "36mZhxuimGgbmxsChzcEffb6uk5nSm6LaD2Zotb257doTgXnq7FTLbyWtaBxj71EjjzhRhkK6aimY4w3dqHUN4WN",
  "key9": "37UWBZZiAaCMV2s8rNEQT2RmnueejWzCwcaqbZ9xmUtzmoP7rrM6b2pm8oY7rnm31gaZgjsbkGZBkPMubCizB57M",
  "key10": "5CcPEvyTZ7VZtPfGVayS4fGwLQLQg3hCaHncwrvLPNgDn1S2NpN2JtTZAvQxzuDxh7waUjp7CnpyL1J5h23iPZjT",
  "key11": "4gLG6tw9fgdNeRxZ5mb3ABkdhDAVAmsCFHk3Vc5GaRuQBnzQsCWGo86jeHokvheV1BT2KAsJH2ntFHYJ1wuZD4Ap",
  "key12": "2JNPYADL18p9U7Yt2dZxQrvQJF6uAog8jEif2gmFqMLmNst78cRYDb62LADNySdP2jrxP8pUpxgJWXFs4svqkw2",
  "key13": "35WcqUB3SHCmNyNF42TibKPWh2nX2F5Zw3reqHTNRkPH6bG8EzA1aXAkRrSMjuZjqfF2SJ1FQKNpDBcrd5fmAyNw",
  "key14": "4AWNozRoNUjh5aXLASa4SEgG9kWUgn25fVx78JutAmBzB57jZT2qRNCP3oGZhDXWjaoBZLRFeFGivVujN3dmVwBK",
  "key15": "4FxeptrJAfxm5Vu74jNzTmj3k9QJnJhdQRQJvkfpuTVvzcWVkdVDPhMvqPxabFvk6K6PQkK52yuiGhFRgXxkQk4U",
  "key16": "2sXzsrbiWSuF5HMA52QdqkwxgocNkMerGEcC6svFmTRxxqqzvymVNDwtQTLqnJvNPMkWaH847gji8JQRRjgdyPVA",
  "key17": "2dgdWV4HugeR8JpN4U8pYmRvxWnoCf3uhdaV3yfGL4XGK4N4mTbdR1gqEoBxXQ4ZYyFKKsWaZiiuqfHbzRxdVRDM",
  "key18": "4oMbRniPZV15v3tTV7dSdy8asxyM8s23tiowrnyd2SCohcqBkUBaYRn8iv9PdtrrrwQCevvCJKcxwnZEXwVbwhZz",
  "key19": "3WJmhF6KgNMBHFNDSXSXHSH6RkibPgYz1EcDkKadDNWsyYUT26W7eZGqHXqJ9vB14egdTFia9o7Rwc87NDvbWepa",
  "key20": "5M2ZjPQdnSnbQwSf2sUn2DsSgcmGTszzTDMnqf4UyRcsGYATfx3EKSQ1Un97YfJUKz2rkFBSm2kAQ2tFE1wB7T52",
  "key21": "37vtcgBTK7axpXdhu8mxkRDJoKHqpHtS4aE4RttEo2MVDDx6mJkEgkWuawE7nbXpftU8shsFcsWnTgC5Mru8zX8v",
  "key22": "2i2yaAqdhHv93ZosLUm3s11HmKwV9kfa1m2ZzyBe4YrkLQN8T1kyosgKdVKRay2evqcFd5ikp3mjWXNW6yLfS6Ko",
  "key23": "4kKMYo7KPAduonyRYEKWBvrbxqn4JWkFLVB8fCJdfchLGUHYVSh2MavdZA65Jbx3Ydo6T62mJ5LbTMbQtA7Rykfe",
  "key24": "4rzzQWX2f6ACDKhZFU1LKpUz9u7hDRCoeTAmVdu2XffHTcEoE9QjyztidaEKAGFmpEe5z5MYKuxjJycaLXiJqrsn",
  "key25": "5vx25ChpaMA3F11heosV5jReSdJoNMt6JiaPTqsYhBUHtsesk3M5Cet8Ss2mdof78tqqj6T7xAUBmtD7XTJmVMDE"
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
