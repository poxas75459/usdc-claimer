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
    "xoNKsiV5BrGqMYKLkfbmGv1CouxH37aPkxa8JQ9ncE1gNwXaG7wco6fPNHt7mYXTz15rjryg4HfCqL2KhV8PSte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2syLEnHf6Gq18DteuSrEzfDNZ5t8S7JgdjFBBcSZi74yppogAsQD9pMgDhMLcn1VyAVUJK48X5AXokdWX7ViXew2",
  "key1": "n5dRN1VEm9A7VZAjoXvG2Ac2P8o1xUuaLNNKaSz7TLwmqkmijdUuCkbUvZ2i3qt3mGFHxERoN4yr59yaEXHehAH",
  "key2": "TnJS6Gsbn2rMWZ2k1HE2ebDY4u3KtTz16hCJJ7PPWNbK8NqHgT7xjL7y3Hy5bMcZ6RkkgGmUPgJBcXUEiXah2qC",
  "key3": "3CrYphWZqb2SgtFgp4LrXh34oxkqkCpv1nZ644ZHXJTzk98ZQbC8jPrFZcSGQQ6J5v8uZm2aW8ySgw4a5ULhrAoY",
  "key4": "4je82t5TeAXxyoGVEDtxM8iJshi776P4nLk6p8ZoVwrMNZcij7AveBfK3wo5yqidbGYsLwUnqCz3RCS7kYWGvts6",
  "key5": "cPf94TXy18vn6FmV6YLSvg1ADMHKYbY7YoCnSXgs73S3tPbvVZqNBUoZ9xWrxzckHLLSgkr5nsyjwZneB4oC57d",
  "key6": "5Gx8VMtXhuQRmXpqGMCP22izPhTdhFQkRdroUrgQyPxUiXzjaXhsYXdUrZaLYxV8hHpt2344HEaiPpB4fyHgZcJL",
  "key7": "639sUCeBsW5XVMgWdRr9AwagzYLuxBa6NimPbHBrYLyardHBCANS5PnqD9ddTy7296hZV5Q82pQEQDtHwyxd6y7V",
  "key8": "32gUFtUZsGp7YsbSCkCJChXj6Xzx3tadDEJpbbYEhbZU5eCLD4rZdWpGzsBYMjfCocPeHochMshSbvaFmKeaevJG",
  "key9": "2mNMw23GEHkqiXvY46Z1FUZF52buX6xggti3ZEfcjXne3x89fwQszHJeAEXYJ8QkPuwdkCrZmcYgwaxzptEtKcfv",
  "key10": "26wjxpahFPzkvmsCZRxmeL5rFfTFrmQQeFz9rUQLYW6EdKwEnSj5tXxWmVShvAMXN9QsLk5BhzMFN762uuusGJ38",
  "key11": "6bX6oSfo5D2uGgCwC77XwZ7MRiv6Qk228WMeG5TpQVV5d5v2iae5ibv1iNTTQ9iqKEGu4YqfCzbFMA59e5s46MN",
  "key12": "43RMFjjzHSspF3YxwrK5hSBm3tpub24F5Mz43HzkPkkxpDn1AAANHPsCPZNUsbixByraC1eFem9NnVmGRLpKDkTG",
  "key13": "4VyQK54AmgcG7vErAXQry5SWBWBwy9yzgok85PSut5FiPxKBNxRXNV1ZGEDWzRLWw5Q9o6ZcfA1HGYCVpaZazbw1",
  "key14": "4fJ6UoacEQQxEVTJmaTcL6txL6JJ7BwVo78Vd37r1GrnavNyKguHDNuW9NoqbEQNnKa7rMwowLL5WZhQkurEPLJq",
  "key15": "4a77cYLsAcHnxr1CJmvxfTwVSGAaF1Umfk4UKByUcd2NRbYwz4r3b6SWw1A73Fn6qVAKDbDsfaWb6tUEr77323zW",
  "key16": "5M9bwL1hQ168bBmiYyqB5hKAmcyx3y8ENDAec2J3LZW1NZCtecXqvoiVQTbmyMQqU5q4ZFiFaRN3Za1bP5XWAB8D",
  "key17": "58Qj5WNR1s5EGF8CE6DeeiHApF7P8X5mcCXk1vprQkPZPYgfc42vQYUqYNKYzyFTf9VU69YkxF3MKvKBihz9KoTH",
  "key18": "2muyvt96XkMJfg449Y7bW7twmwGzMMV6Q2tvDf4uVmFeecqDXYHUvNTTND7nVsoJBhPMa7T3KmtzXPeoVRetbAyw",
  "key19": "2wHBJwCCfG4PVwJVQKPwsGbEndqQW5YMGMNRjtZLB5AuEjjgpYoH3ZqaUYhE3iuCPgzzaPV8MyLQ3JzQK8cXamE6",
  "key20": "JbM9KQg42qrUCbK5gfKUeE9DwaYr1ZFbid4i1TLPFHR7hfSLZkZFK4iREo4kZV8miCUe5fgvoobTZD6BVQpMNUr",
  "key21": "4HHpmfSL59oDfQBdvPMFjtfktGW9jML2Pe9RKoMCBN6yUpoEQiDwA5FRoi6EdGxNFvzZNgPaduuGSyYcxCpWDouP",
  "key22": "2vpqdYfaLk4Yq1p5Xsr5sbgJhyTsdphbJN7ZZgW8E1DSQrHJsCCgTMWK7qJMdGhdrvNLRB8NNWhgQY9n2fDbfCHP",
  "key23": "AsCH6e5dmFziwBdmEZRhAtH4sfTKHUa6NHyoLHJgBR95KEWmG7Tg9nFbFrQB1LKBYgPKHPJDdLBwiEZVdaHmNtv",
  "key24": "4Vx8TFEw1d8wHvLMEuZXP4iJobMV7dN4JQFvLsikWmxx2XCc4ioEDSocfnLF5X7qsSfCHvmwycHeC9sQupUvk4d1",
  "key25": "4nCVvp4QmUpaMAvyizaDcgoNrnQBPRCJGmcaoBufqAv2n4FPB5i2jRG5k1ChocgVD8kXZtqrBdUBGF9uHN4Uqcvi",
  "key26": "3gcL6yNhGesCzYvbdbDh5rra2MzFX3iF8svxAi9ypTPTJSKPLiC2SJsYHk8oGwodRxfBuX32vLMbxVESqQDoT3VX",
  "key27": "FLeEPNzb81MKL1FDD45TVsR3GNjZBf1sEETeprxqTGQj1xB6H1ncEXaZSgjpQJ76PvFZ6mmGQUffk6SxBgroQxm",
  "key28": "5uh5jgPPbpG6tj77RmM9bXPGCMYmy6aBN3x9Da8gRPSvX87gTzteUdQngp5xXedF18X7PUL123Nf7VhGFKDxXBeW",
  "key29": "4g5XU43h7BTuW3eRCMxE9YEo2c83xR7QNLLcSMphUaZT2Nu3uBmGjSPPDtrnqEutLoyxGZQ25iL79U4M3v4KTuRt",
  "key30": "25qv92VN7VR375vxiemr3BNLL1B79p3ZXm4tszBBNedbsY6hcxzs5ygE6cCLurPgvkxbugHtBYrecVW9JG8Az9pu",
  "key31": "2nmPWrM99CVvr8onFShNb8UUPeBEgDzQ2X3hBZVuKR2njyvi9bdGj4kxt8W4TJCC5rQRTaVm4A2yuqLThBdKKw6v",
  "key32": "2f5LDKNhmrreaPEscj2cftQawgAdLPPsJvf9qmo5TGEHDBk8owQjB1fcTEpX7efK1FqUVsNQhuwPo39LEj75GHYv",
  "key33": "Mdboin7T1Htio2qQsdVwkHVxSpwiyjNTu2rHGdnsbMHwPB4y9jd1gd3BhTTQLogmtDRFNZsCY7n3VcBCyjXDPwQ",
  "key34": "5xMbWXExE5t8g3fDeEamwXNwvaH8ZZB6UYvfKvcHaDACt6ApNs7HrT6UUdGVRK6H536EDCxQTweVHqXfnZcyMJTH",
  "key35": "2QGm7ZRwQCMfPvz44oZU4fHrHRUgVWoMh6nc8nBwYUxsZgy8pLq4u3eo37Xrvv69GrByvo3UqvPsDi2eNUhAYcY8",
  "key36": "dsj7dU2KsXVguPw3ZkLdSuKnqGUC9tiXeU9uPMh1openfhB6Ugj2xgGdUCmikjCaUSLaLMA52kdcCH3TnTUNtoa",
  "key37": "3rorh7CtcKPpmf8YZKerWjSSy6hhaTajP6P9jBq8DKy9NnmUT7hsFYbpGbSe6WwcKgqERBJmb47kHGHyKVX5m85Z"
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
