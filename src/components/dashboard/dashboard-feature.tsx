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
    "3mvYteoenPMMX513SeuVAd4uorMC7gGKfrCiggHn6JMueztSWrMBLCM6vS4V5AK3eGfQV57fqM8nhA8msmJBjChK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r5NesRwke8qLGVJZ6u259mtrVwMRV2RYsBKWg3Y5FCqpFujALSy9MZXGdLKU7bTpYYTHGPu9TwmperM6a2WJxEE",
  "key1": "3pFFqsbazTp7YKEwUoGSL88FKZ51YBniycLjfwmkKvwtNcqYb6EHJgujvYBzfS54S6mLGftsFeRxuKo8agiVfnMF",
  "key2": "2TLshsqHWRAoMJGNmjbEsWxr8DvC5acKSWsdy4aDLRcjEhMzL84qrEdUfoP2TcBTEXeWJD4J2wes3uykxWKTT87f",
  "key3": "mJQJxL6Ru2yDtrhAANjF5q9MbmdXZshGknKtth8LD8SBUjqHsfUYupvpq3C4m1w5cfNbZ6hiPivjZVPuA2MWU4h",
  "key4": "5N6BfBifMZoSbKce5BTw2GfmUXUQbEjfLcmyqJWSfeQ3tmKne1Go5bGVF6zYtRG5EdqDvLKdeQyLWMSCkdfkRhnq",
  "key5": "M77WrykdZudRH4ermy1Dat3idb1AZtQbpDRpTbeX7U3EBJ6Rer7ZWzzy6TtRyV65LnmUCEZfmaUmVrdDo2dLBib",
  "key6": "3RxH5jiuj4cZ5xtmVcMcMgwK4XqQ4jdUjqysGTJV7HN3Zg79AG1Bn8wMSdZv6y5XF6jbLLsqo7eE5gjyGSXQ8H2Y",
  "key7": "5sqe1boM2pUB7BBV4F1WinSSjmDCU3qW1PcVUp5T2GhvztQ18DEdGzs8FKpodNmZ9WzJeDHQQgThs6iu8hz8qVpe",
  "key8": "5gZrRKsL4iAx1QBCW9GbbQULDZDcX9VG7jwKy4PPDHxvjFY28fcCRNPBq3nNC2KxfgTKzHwL4HAEN6Uj2rtFoxhL",
  "key9": "24SqmAidR1FLYLJqEBZg3VtfNMEMsDPwVqnEKma26dajKVyPpLXx4yg2fy87Yi9JsRv5jy4VdCRaJKBqw44ijwME",
  "key10": "t4kCRLDxLK3wv43smvmiqRv2GSCoEc1acDLx4RaqgHGAyWr2VZiYte5tvZX5eqSjCRxcjgT2gG6TUg24zfn7A4N",
  "key11": "2JX1SLoJEFaJmrx1kcoT8ueh311wnfiVFCYcJ7JmBqs7eABwudiiypzYgGS1JH8oNhpijNWNKQp81md4ZqdjgC6Y",
  "key12": "5z8BJzPhZ3CQ53YNyw4o66RuALuF51CfVMzx9je1XdMKNbvnC8y6RbQFxpq2MRpWLoNMfeCnVt1SesFHiSMgHgZA",
  "key13": "5Zd4a9QaegL33YBb6uUHak2DBw8tKymDhaYnFWAzRe6vQNKhZ7CwMBWbaYg55qC6cLTZfNSvuG9GoVWkhugMpHFo",
  "key14": "4zny7zjsyxjyuNdxj72rzNo6iQeae7xFXH8gn7Wr3Rwcr6E4UiNmEeQq2v7hevn4oy26BBUCDknrsPxjAYp5zZLE",
  "key15": "UoYYgpkYPveTQszJTdmJzdKhupsrArKCJd17MibRnWXkNnWZ2V3jBDPYkoQnUtb4zamp8CLfbHGnPixg7gBmQbL",
  "key16": "4eVABCawd81drNx3HCeXdjLAEcs5WKGrHucvTLuHuXezjV9Qf5Lm2Ncbg4sdaBwq42WdyrH5hdBXk2BtEFACQ1in",
  "key17": "2aTwB877tD6cDUYkxqfpmQpskVbmYFsYKPwgL4eVWW2d198NTfWjVD3vsg3qEvKVcPE7FPgpVzqhPLCmBjB8RcNd",
  "key18": "5zxcfXK9Mk9f1wHtvkrJRP2XfvDpEfvp2hZCXYUQSAFiKuGmtzLPPGhw2pVXARMYNo5sweSSczuBdcx9Q11iCAxg",
  "key19": "2wqnqHtgqJqYPio8gLcnQ2RxYbVSDZN1aJHyEjoZWLigsMZcWf2Bn3bVsDbUcqsGUXV1ksUBVuHiNrN3jpmFB8nS",
  "key20": "29w6N5MeBYuQHMvsa6783CYTd6pacMdt3vtBViDPNVjuo5SqSKYyB9YmCKkTcT8CRaR9ZnE5MUeaK3uUdYu6zs1T",
  "key21": "5EaU3UXgy4ghKGzU2jBih7d1PMiCoi814pQPDQXtuc6uB92TRowC3auKf1h4TdP53eYfMyhPPwANFpPmChvp2Zhg",
  "key22": "52LW2FGUzhJtP3NDGzQCkNFvb2xqDo6yz4aZo43VuJUC35aHQWQZprXY3wCExv3iSoZiyeSPTiaJYZZZm1RRMMpf",
  "key23": "4pCfka4ar5iQ6ZE85NoMWJTtKkcFvv4eP3GdWa63rUunAK5VnDMfiqGRfSghL9WXrA3jftsuV95B5GJSF8egJzGB",
  "key24": "ZWuE6Pnu2maNAroUCDdAQun4nyZTgbQ8NkBAWCJWLPEJdXHhRY8oxWW5Nik3Fp8seie6Z7UvQL4vtc3hncxYive",
  "key25": "kJwkXJVp81byaH6Z43rynNwTpxEkoqmBvXwwQ84oFNzA2nFN3QEXtEtraoB798TDJ4M88mWd7UBfHeu4HKJKg98",
  "key26": "58bF5tuXMSs6enb5hWydHuAQyRThRofeBuMbDreRHC2ceKGU8z7D9WH46TZoetx4UQF53oatJ9BFqKvG7M6yBSne"
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
