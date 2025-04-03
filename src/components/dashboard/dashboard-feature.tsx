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
    "dCgjVbsRQLasERLWys6hmdWEyh6pecjo69pP4AyfHnp7yKNeWdPQ7ULYNJfjCh23ao9S1SY1iEKnuymqH1NVWTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5orDEWmAraUsybSmyZ9dRAhRrtt1A46bDAaYzQa1X2yQta7E4kpvCrB2WcE2CCU5NfGypisZrxnnKfpGV1KF5bN1",
  "key1": "5hqwR9T5iLHvAVSHQC8Lue7tHfmrnErwm14feLdErwtVYrg8ZDZmpMSmLkfC71UwRuWAPZdvt3zz6riAdpuXSYaW",
  "key2": "42tA2urdAoJkpXjfwjs8dVkiu2pU6CwtRSpneuybnfkFufPznLha3akRzY3Cv14pQMFVf7q9ze9jHqGcQD4e5MWA",
  "key3": "5n8K6Y8BT2jihbgWLDYQBuNvs89ssrkmGRoztbefUoXTAXUHWP4K4KikYzBS15Mkmuhjcoi25HPLTZ3NGbNEggTj",
  "key4": "3YLtLixr7bQ1w5k8V8E4pvW8XyuxjtNmbNXP7aQAS3KAC8sSiAcQjHbmA39ipHr2aES9DAdUfFVsp8uHMdSqCU7u",
  "key5": "3XsdtDvrBvRCpSSYfjKB62MSi5Us737HU7bWabnF7ffRvSkjH3Z47FRxJJ7cxU7ck2TdiSK2R5xWHs8bDUN18PEN",
  "key6": "5h5Ji5KgD8ofKivWmkw31QwbJRigqFB3iY8iCsHMoEZ7ZFjt8th82YahabHrJmuYZNdvLqtukUjouQ1Szw7hjbZt",
  "key7": "2uzc4BuAVG54AzumMgGbRZ722bv4iCUxmA73qDykqB4AGvRjoAbmmmhyLCsXEEmY758LD7oPcf67XpNys4LfeDQa",
  "key8": "3Q2jQiN1SkGZPfB1TQ4WzwNbTdxFSTnzwHx7stq8NeNnvUqVwN1ojgCsd8m2QGDEUasjtnmVEnJTgP4woKhFzKyu",
  "key9": "4YPZ9owddCTKTntQpA5r8BYeCNMRkWfaWhVPYjsAUbfyCdNBRqedeXTYBDYtNsBt3fcmfyXBs2zHc9JCUP4V2Vpp",
  "key10": "LoaeD4imTawMyYbpbGFoJ6MTRAuKo74bbn9PxtkpaX2nmknkFQg75FvZEHPXHDJLFg4p4rKKGZZEFUZLU8Qud9C",
  "key11": "kU9JSrvXvnhwnVhZ1z5jZWgY2L6k3Fm9DsyTVxeK8xiRXLNk6JK3ompBomfx3dAKP2CWYpWGskk3zbe9cR2P3jp",
  "key12": "9M8yFz4DstZCqZ4qEBSuyNpLucHmnrACoCrcVpZt7pzXFeCfczvCwMvL2he7fiLbfayhKNtvNQFimKSg8NKyLMS",
  "key13": "3XD8Jj2kfrJLzS9zumkp7mEindxQXV5wQ7dpLmTxJRjA2xnJANw1r3JimNj5b8rBMVjYqpU88jUTMFzsadxcoXr9",
  "key14": "4ibToaRRb7FfpiBrtjRSTxhaR7eNS7DvkYPBL73frFo9xS553axT7uXifSbezSfifdbRLKuNzw5dLfmppTGRZGsY",
  "key15": "39UaNgpPxmAqPJqCv467oEw2QwzJTt9Pdrn17Sib4861ADYU5CwWuTxrv72ges6aL9wuzgVcoea4EXzaj1ETJS5z",
  "key16": "8xFbaVmjuERonpEFndexUYVYwPSt8cvAA7CwQHByYBvB17xgJFxha7kAL3H7EerRYAFwE3e3UWpUGpQPiVTpzed",
  "key17": "nCy1seMBoWDXuVKch3V7we3yybd4h57akEDmXAA3cfsCgzYA17MxurrDwfjuqcmkc8k9hwcv853CJ3vRQuQLPsw",
  "key18": "66M7UgEJAtLnjXrdbNmuJvD2N9omDk2ERL833Vjd3HnTKCkTGifWWzzSDd6CyCBubEakLhd8esrd7jwAiM7ZtkLk",
  "key19": "3wkBA5yEPjkHEind6cZ2Q6uTcE4VGNjn4BDfgZaQTosjm49gdwEKyRffkgeiiF7v7C92qxnpdsnWKALFHRF8nZ5o",
  "key20": "41SCS4D6eR9D78ePs8G8HphxW5uY1Fptw4WcV6duPkNf59rXrPrA94nHg9FUG9Cio5N13SJbK1XvDMgVoesmLUXQ",
  "key21": "47DD4MxstjTLH7wh1uJcC2neaW27KrwKXZkwGoZnqLcJCqu4hH5jwpvdD7V8VvZv8tadYpz8sByXvjhJBNjvDaYX",
  "key22": "2DaXr1kSnqUmi2CcusDNnNoHWMNHigEUEbWzLzzoMpGaQStj3m8gdQh9ZxGPj2og2RGQMveHxrZtKoTGZbs493eR",
  "key23": "4nTshto2X4KdE1iDHHxqF4LtngTpn7oEsDBeXD7RgWrCXJZht88jB5KcejpqiEYdDpBumSPEfLMYRsKFe7ah8fiX",
  "key24": "5T3ZBh1B3AixKVM1jZhT2tkSYKAix9HyeGyaCsb2bUTEKNkhLALm6DCimhWS7zszgisSfrbogvZJRvPE97T5RmLd",
  "key25": "5Y5z1vfZLPYHto2w4Ao2t2S9MFjpvD6SosKRNqgRqyfaXPQZL5jzQTztuPVJquEMtABzh3AXQZeqR56LxozuymUu",
  "key26": "32ewokZQ9mLoTGy6Kv3X4dJ3k8qsthB2MxXFd2TaMmcktgKF8SEuS4BiQwEJtJFDAK8CanN9SvR1fQivuqQKkET",
  "key27": "AC7rnszzb6jv3iGgcPEP7iHJSBbSxcX8xZdfcTWVtBHdBJZ2HYYEbMuJU8mB5ukm8bYB3JCv1T5i6ZS6mrnFi7S"
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
