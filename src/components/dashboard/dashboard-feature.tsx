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
    "29W5k8zZZg7JuTG1uRgMvM2KjAq46eEofyDJa7EgN8263yLut3oVATgDjSGGvACCxdYXkcm9eMH4BFYh8mHQKLp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZKcDgLCwrSMieuU7QHmNyn7Dbd3x5bfpx78Tw4G8y7oZZS7vbkfmwSMiGsAsJAVmJAjvQZthdaMkxv21znA1ypH",
  "key1": "36CovAGwj16k1hDkW6H8UfWYWVsZQDh6rsNPYZEfJgipGtvUFYnKH9v4Dkaiq3ZKD2xS56AWQexHPyx1mSjzCKvD",
  "key2": "66zkruQXN189eWfKi7f2peeJdUGgKmeXYQbApxbw933sqss8NHNAR3uTFaafnMJxF8Ur87ntHp8dnts2yX74wzLU",
  "key3": "CQ5xd442Z8LSQFjCZQJJwc8FChQ7kALbccG6r5HQPFKcrZQFbVgq56p5q3Zx9UXhQdXA2kkPLqWBJ87rewziy1h",
  "key4": "3iq2S6CetBL5gaX2EjaZnJRZnFoNYs5KTSjHk7bxVSsTvYRSoZBxwfhwbcbELpPSZ3vnR2stChT5374VPVJ8vJUz",
  "key5": "4mVVYaNCyt49mRUombp7MFqpMZXvaLNvnJ3NPH2GTAwwvmyUwhjmGWvEcUKyJ4Xkp9otWiN4Z8rebdUH62ppcdQs",
  "key6": "583fwphEyj3Nj72L3zyr92GCQEJ4huAPEp2vtTeGLMXjK1P7rhSiyMq3mv9pT7vbK5ZPimpwM1r5g6dAG6ByZpg",
  "key7": "5BPvdJKV6noXPkGYvPLBbiR3kS74Jp7A9zHEzABg9tiQy9kuq3beM1SDpbaPQub1etaSGXbDksLgM3BGvWiddReE",
  "key8": "5xhXtHDRLQ7rHxLuKedJjQsXy9Bt6YPj6obxxT4qWatFxS6p61shR26zTNGZiKAWTbNm6Lggda8vheYsyyYfxcDV",
  "key9": "3p6RKxSNSpPtsYfDnZjcjmM8f3ZNR9K3iNjuGhVk6SkTFU6kfTVMHRDretpeo2V4hwYPWVm4bCJcJ4eFipQjbsiC",
  "key10": "5eqi7aKKoUDZDjZM52catJsqGT439qy3RMqLjeRVkZhMqdTkHXC2sDwbEyYrMqk97cR9eTWZKmfqA4CDk7Gmrj3T",
  "key11": "3ieKHwc8DsdJ8SyZ2MqCja29pFZGVu5PdSU2pwvxGyqY4c7jCE3shtxLf7VmUmUK2nRWWAqHyH8Gq9UemkGrYhuo",
  "key12": "3MFTCXiVjipRzefb4DWusREYHPVXLMAarz5yodRPb6JFZoB8ePKqadcy4EKecpST9k8vXuxEpUhHMb76PiEq8Muj",
  "key13": "RY8PxcF377cUkpP5pVAbV2zRNTA4oQrzSFopWucQiJsS2zRw5KFVuPEovzQMzXobCmVX2nr8sfo3kV3zgx39CkV",
  "key14": "2KR15GHdq22K87amPYzt3FHXZhy1DgushX3Tc59HoQRZF7j6ygjnavSnPTCxq4DynfKAqBEZUbRpewSE4yRq1Tkh",
  "key15": "tQbDqA4U2YXGNBFMsSnFWqkwfajGYNZG1aRCNYrXZ6YYrgt1SUMiokfKaqcLNrKBY6sEMvoJXUw7SM9FSLKWYWP",
  "key16": "4NpTWPESawEq2G3ptx1fiP6wNWcMUQcXKCVHq3e64iAgzky127gbbdB8e4qXrPF7fgGCo5xqQrTwuqbqUvaGFFAs",
  "key17": "5ndZhPK41B8Uj5FeWZV3azeYoN1dDUpfZe7d2XHcxJb577namYzCmuYLJabyodSpF4hBSdQjs9mSR5zzSiDM9rWs",
  "key18": "SZKfRzb3Fvbf61maNZj5tGNMAh8JqeCh9EmBUkfBzgwi8k7RUCfpcLR9sXHW8aFzkhenamY8tpjNdvBdwmJvwPJ",
  "key19": "PSXVfSh3QN6W7JKUarjHLSiwVvP8dVpm53iGroCg8vcRfgfPh3czKU2HWs949syXjt2cAD8MuvBcJUpo1pD4ewA",
  "key20": "5Pae9iB36fXg4g4m4AjE9QfsSdPfa8Dt1UpXNitQ2g2P51ayvkiysQfGpP9PSERHR66gHwihLnm86R53RCK7KY7r",
  "key21": "3r7aq4jJY6eHpS6GzNLBNtxFHXgQSgJc17DbSZZTb3Zp8uGt48quDepN1PdR32B7VMRhDKsKd8GbzrvdR3VaU31w",
  "key22": "JTp7y4SLsS8Q3y3K7NLEqLQfcgWXhs37ywHELVtsRWXZYqyhDoEZm7rYpNSTFosaPmuM6XBGkK34ELn16TjbjW1",
  "key23": "vZxwDhfYedt7CapVh2RXhDxEQoLLjPxiYSV1cKw1YG4TWhrbWa818QHexcRjb8pvPc9rKPfNBLRSfgpvDtACPAT",
  "key24": "5JDEoUJynWEq9MQgYsG54XJwcGcjPNHdywm1a1BpaZvRuHa7jyurdSC7mAjL4E6pk29qt8iLbfbAXKsmzPZt5Lz6",
  "key25": "5uZg5ErwphBxQHsb13hUeVVzhV4LLEvjqXedgXtwTBzdSVAiWAkRkgdyjVomFiJyQfpX5Veqep58p2xvLVBnHdw5"
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
