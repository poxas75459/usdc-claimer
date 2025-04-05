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
    "62UyhwqiST4GLUwSukohedLRXy4wY7t5Hq11u9SajR7bnFEKxPr9Vf6QVjr923UUcMnq9FAaXJQ1N5xZK6Dhi5Cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jga2XzdZ47h7LQXdLzhraf7Vbm9dtyLPj2MSM42GuRQFy5CYkZLVZwrDfqtsr8F4Y8khR3JPsxsexNfokZyUAeG",
  "key1": "3tscbksqmvkVQ9s1APC4SqC8zAPPqDREiBgwsqM4ABdM7nREm9scmdDTyMYzpiVsaPz47nT3yaHk5SdfTvSE95xG",
  "key2": "64CDvo4AhVCJMDXvSETVGPqq9sGSL3jXJrS3x4Xgp77StkwNSu1wAmrVtRgF4HpfuFXh6DKSrYkyhFuYxa46PFyy",
  "key3": "4nCyj5jjrsePYA8325J5gzhaaxjKrexCCahGVMVBTX3UaQqqBqSq4xTffEMkVDnfKpFui1negt14CP3qQZSJSH1H",
  "key4": "3cv4QHCPcD73dTa9aQjuijbGBgjPkNZ9BncnTWBpFETEYQGUwTmruqYzW8GVg5L2XtrZy1jbjeTiwcxMigKZSfyJ",
  "key5": "uKtSW4c1zuqK94FvM6jHd5Dsb4DvHTwZ4c9PoP7roqje9UktRPy7Veav28R33XP7ENPwdUFkmYnwvYoQkW4GdVk",
  "key6": "2R3o1Ny3vYMpiPkiXZuS8Nn5ZRom3xEhWRHDYFZyHrTvHBKRmjEN5dQd8ZAjAp7H19cQzNex1nvB9RGFSPuqA4hh",
  "key7": "2T4dHG8MEizeU6S8bBurf8rD4fZ59Crzbyy2wW31Hw4bMkaQ4aVgxUwfsDFjf27KUDsaFU5vKnWzu5FofJW5d24f",
  "key8": "3q2fF6ZTjcJXgxGhyukRiYQUJjQiScGajv6b1BWJCBk2H7v3umT9F7dS8yfYHxzHszcZWYdm5Zf3HdrB1RyHkjZ4",
  "key9": "3VbTnUzvkWKfDsuNedhif1F2WHb1fbvcNDbmYem7dNQnt54azCNS26MmvEYpAJATYEvwGzYTNJEGwkBC8oWTDDYF",
  "key10": "5vDEYnprwZj8fooyRRNoZkRNGCJC1d5DtsXZqoCjNhosQjKFn481jsFdeHMycZvpRZu7GDfARfusjphNrDy7sBmr",
  "key11": "3jMRvcsrUfiopuJq961Nd9hJc8oHzx7Mnq26hs1uo9Acqpjrbd7X6vkwUv6KtLRN4HAL8UcLqLiXJFVY1qPffKgY",
  "key12": "4PLQsJUv35kuhGu3iGYStWvfpT3xW8jibz1StrfLthPJszG4PnJjpYLLThtYP652xawdv2vohLeUQCn859bffzJt",
  "key13": "5K4XyfYZeWEMh9tVJXyngygh9hF8WRZr6KsEaZ2kyTpjzkUV4gmyYw8wXjr3dMVX7K4BwNutkJ5sbPfuCqLuJtCQ",
  "key14": "3jEubyG2ys2n7D3LVWkt7xJ2LLQTnNwjUjVjwzE7wtk4Qio7A4kzzHVkTNjUes2G1UPHZeiz93TFQfqSkzNfzf85",
  "key15": "37tdHJLe6tVidjTLjtJtvZ8UewePS57arK8pUmAsxwwxBsSwT9V3tnjQSksBoX7nTgVKghXdiwQmKWkSBdeRLP27",
  "key16": "4LU3FotHibFiSjj7LjNKYiPQH2hXEECNgHcvLD3FnU6ACyfht5ZSegk7x4LZGLU2euHvp3FXaHE2mH7k9i5J78C6",
  "key17": "iB8XmbCCsymCKcwrCeqo4y86y9XU9wTHuV2kUMcBZSQMa8qpJhQ2Bn6BxcrgtQGXXzXBVTB5CWqsxxVVFbhEaV2",
  "key18": "5gpK42CmYdebkpRfiA6pEWieoykQqZU514Nvkq6HVjWVAWG98dMgpXxjyDvPynmnMZQ7tfFjq9T8xYBThd6k4vaR",
  "key19": "nv56SLSjwEo8CnVgaMetBDXVzQE6c2tyrajfLCth6BvHEB9aqvEMC2zpteJ2WzVcsx3a4DVEddmHAybq25Db6Lu",
  "key20": "s7xS6Z3LEdfeD1m7AkNXyafQhhcQW9zJiBArdywc8yq2356aUyfPtnr96gQ27DWFb8Fh9BdsYhMZofTNLkHtNuz",
  "key21": "YtG1xRcCFNEJZXLC6S2CwZkXfxSi2am4uY8gxfdrw8gEDp39aXbSTwgTG41AyYGdTKLjH2Tvr3T2qJRAKPsKxQ3",
  "key22": "54ecKMss7djfgBcJwBYMmnzS4cxQgKfHnRTUuUpDCvFjnnFgwaDUepFQor86WbWpc3VSkmm7NXVYHqmJL9mNXjg4",
  "key23": "5uBHPfDPoAyNAVWPn6SRESqh3NKk47NLToWHzqvqTE89n7ZJ2zG5AWn4DeipvBUYfiFxczdJ2bWEYRWn2bkWNdQF",
  "key24": "2GKs8F3ETBicaUmLWdxGmL94nqCpUvjFYZQXrxSwCg7cZ7nvteHkiuJSnkt6MmtSHqkVY5Ss1mVKbAZwUsJY8gYi",
  "key25": "2nUYFpTPaUf6VEWdXDJyeYHpGMacjy3uFdpHJknnFfuqqe7AhBCUnVPxaDo6BrQGbScCRsLqywKURgf1vV3TvrH1",
  "key26": "3nt1DKp7rLBPCxVsyYFvfgKqRWGkE7mRwD3NAFMUJ3vmTR2zcoqzjhJCHnJT1zHtEkLjnjwfcgLofhW7bYQNioaT",
  "key27": "5nsnAu9jdwRjV1Eb5zwFXNNBo1Xk1KUkREkSNvTGDDzvqy2w47zrxkcMDiAsGQLfHBjfJLADXNBceFm7UTJFmTTd",
  "key28": "31g3L2c5AphHGhkHMZeuf2qHUx3h94aaGXpF113HvHqqxwfeUWXUSwRT3CdqnxzNtxjsznJfsNuoX1MhJ8WFnzEE",
  "key29": "4AaTnrcEbvyFM6ZDPwtYNDW4HYjwuMipkL1hK7o9qjtceDq1SZ6EkYP4SQCLgdBtaKnWNg61beCUu9UyGzArTuBX",
  "key30": "UkB4ipTZwd9RuDzPJ2DWuT1DkYQnD7TiQ4Tce7X7UEzCRK6wpmZkxXW2fmLvKg6e2PptYXfvqfdeE6jnANo32gX",
  "key31": "3VZBmXSQpYKFHD8dmHmd9cvh3Y7avSn7JcbJFQBiGAappNqc1da1ZaUV8gQWSCmWq3hpwapKnjtSMPfBnhfsgv35",
  "key32": "q6Ck4sjTVEqyCHS3UeYZttLDbt7HzEEkhhCCvq8gXQ8eAVBJrH8CXgmdbQQ7oYDdxedpCr4bkqnZNwMsMvBumJT"
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
