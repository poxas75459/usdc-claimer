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
    "Wo7qKmds3jCG9gVW492Z3GQ1UBq95p32NKbbZWVt4aeFKzjrm94g4BeCNwU5Lua4uXYhWvec1Py7VtSam3d1bQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8BnAkgvxYsR6pEQSL3hNC9Ycnm2kNrX3AVsgtYqZ4sNNRMAMxeSHBp7KbvJs8hmMWVUxjwBUFjMy6bfU9Evqx2",
  "key1": "3wFuxfN9pGfEg9wr2QtaBNQenNzcUpn2cvQWrLzJXoZyKjCYBYBuSmvCYHr2uLzWhoxW9tviMUMqcZ7sSnibUonU",
  "key2": "Pr2Gfe8wooPVMDZSZgmywbJsxQnEZ7HiMf7e1hfbgxWLLFkREMHMXTBZrHEXeNrgL6P93aDFhy8ZE7bcdLqzYCd",
  "key3": "4UXZKjiNb6sDAVnLSJ7VPCjt9h6jweG9FQ5HMc4WxeGowSQizPYfR4LEaR2Y1VkxnSnhs49v9MPjcpxxaYnWVEqa",
  "key4": "44XcbgdrssBcSS3kGYvAwf6kLeWDtLmBKryhMy3t3pRLiBxgQkDTb7EEd2tqgX8FKHicFW8xGzvVGC1qrxKamVzp",
  "key5": "2Mt3js3SrGQEDD3Zebqw31Mut551zCrAEa7jkW4cJxisq5AWn9DNyEb5mbBBic7V8RwmBjQ6U4VLwqkpPq8hyvae",
  "key6": "3vCyurN1TTSPHPcg7oBfR9w9EAfsXfSx1ecxqRGzQEudubFeRFgDnnqxgpBp2D9bL93f33ufwFXrj2CtmyGuhaPq",
  "key7": "5KzycsBGUj6v4KojnqX4c2dPaFMrPHR8Wh93mVaivT2ZG421kknvvcByPsS9pRr9wVvLPHgWbgzsrgUpgivYs4eR",
  "key8": "3ZxeZ53VfRsFCX4YfnjwuAnzeGdUL9RNWDy34CXSRWvnPSiRZZrwwH1L2aTStG5CHgYTuNCen25PyFFQuvFxtDC7",
  "key9": "3FJ7yHeRf24DKhYFCPpCA4VGeqLn3wz4KhBxUWcGXpmKNdsu6gBDsAa1hDeZPXBzsNpjuiiuT3aY7Dqf5mk1c8Yi",
  "key10": "2SVFwyebVsSQosRmvKXH1oqNZXZ8kUR2GQrTvQfuirwn4PccFHL4QYtQRJABxKaiLv3MGdDAKZ9CT6vjRzGp51Tx",
  "key11": "2verUwHMhRjcN27LvrzTMdUhiXBHhdyqL51gfzxGKcHPFY1Ln4XeAtebRWkdpiA6Akj3MdKh4ScdSay19soC8kny",
  "key12": "2pXmqjmkMwgvMGaCSm7ajzDBM7FYAcE43hqhGsJyV5ejcqSv4nKTk53Ux1Bs6bUw2mzSoM1KzixPG76PbsiCWBNF",
  "key13": "55hWwcVPAK8u1xtiZ32WhySg6YEYpNFpfESaQUZqfqNzWF38X2wARXmbUpjtPZdwKRsCENxwDA6a9QwPR7oherbZ",
  "key14": "55RPFhCzmpNjFNn9nJaZcZhvGn6EqKBNLFMF8PUm4gtZwGWHbmHTBbgJ4zWv32Ejh93eaZD2UJ1UroWnFfG6u7mD",
  "key15": "2a94jyFCEWkdZR4Kfr8pDdVGansubkapmLVEC9tHeNJfFXrZzs2ykYAP4jJPvbW44wWJFAbrECXH22xty9daQ2US",
  "key16": "42kbg5qqD5BequcskFocucset8DPJoD8mijW92mndHaG9o8BfdagBT5u9bck5jgEkTyLd8wbb67b9WnbAMW8yDYF",
  "key17": "2HHsgEgzvUHnoTkYnW33qenXTEDumGcZyRp99K13NFRr8Db7pBbM6kZE3dmc7mtAnhxAAFKSjcTfSXmvFwy1stRt",
  "key18": "xCnPegEcD4275jv47pVt26yB5EjLc9MXWSrWjx9CZsvYddKGNo28HmoDr71ixsPuDE4WS2oScfeD3fk4yLFx9fF",
  "key19": "4SLdZGwjkeyKLHBXgxzhtUtQKmZn3r1QJD8axNvnHMjxZHLndyJuCfyK854TtuFtW9u1nPxWLgrm6DmuGpNqxAXe",
  "key20": "4NWEiLnYLVu7itUF6KivVovTYAVbi2PM4F8petpmRPvUyruJ1wqfcGbcvHCx3NBG24ZG4gvsFDozuEP3HWEuQ9wG",
  "key21": "3AwAaWDNRUKbftWk9thuFFS6aV9y7CnySQc3cnETcfaJzjxRmkwU7igqEd8eK1srAB4muCXBt4Bk6aHVbh4jpJan",
  "key22": "2ePjwVW4WDfKQiNyLEQiezp85SduBDX1jjwLqQAb9dfRnekNR6vZaQgrffRwCHmFBybctz3hu9GyEArJQoHZRURP",
  "key23": "2ZaftVgQ2ZPJpUcUHPrAr6b4qvn4aMuCFew9p4V2QReFgUC8Ae15jCTJiFjSZNx71vMo1WbzMJqo4YVFtW8R1NTE",
  "key24": "3qixZsnxBkM3qyh3f6QTzN5UdjJ39Kxrn5KdQsj4c8akx4qVC6st6a5uWMAePz6wQLFQJ44PXTagqNxmLg9d62qp",
  "key25": "4TcmBDJrUXG5bUyfRRW7NgtUfcJEwbtAugK8x2MR7zZXgNPGwHXs6HgBmep5WE5wPkXbqREr1WCo5ahwFVsgLBjy",
  "key26": "CjfBppmNz26dr9rxC9vPq2o77MuBC2AaGQAvRo7hebpW15Dn5AKQrDGJUTDdneGSxwsjfb2Ybz7HTeMp2pa6tS3",
  "key27": "52xVVXKfq6fHy1GwSydPK9fuEVaZ74Ea7W2WsqCmMXrEU9XaovvM11oJD2Jat2r6ribrE2GtcYMhyqUagdttJhkv",
  "key28": "FqFiKGimdKVqSJVYkfJTtGPUPmXMBWw85qWKeDZzthmahTv2L4YwM8Q9Z6nLFRREHhFRExU5KBNYvfW3szqH2Qj",
  "key29": "45boZ6J2WVcNqjnato76Uez6YQtmZXEr7mF2kwcbLUeH9fQSSmfXw6ZGydJDCxFydm9uR82QWfEs1Z75FPN8LFS1"
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
