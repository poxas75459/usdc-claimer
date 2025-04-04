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
    "2XirocYRTGLKzU9zRcPuo1pnBFny8E7SHLqTxd8FiUKpsCKmnXbmwMttLquDU1qfkFt6Ut45c5D3gTYbvhmRFobf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDJfMrJHH52j1UoWbyPAaCoYQG4ZMmTq7JQrWG4FkSrYL9KLVhQAt3Y1X4xc8LSv1pEV8Hd8EPK4Lp9htmqGiEq",
  "key1": "3437HskP4t1js7P6nhPj2KB43kFSP2K5GzAth9FV6EorohnTNDzFT3akvjRDfcWFtsozsTFVXtzw1xnKoFkww6Hv",
  "key2": "3NNruN4SJq6LFDwpKzVJ95K7x4zPNDWBhQSVcTaXiGe1G4bascs7u2k4Z7ZhivnS2WJfHuDUycPQp66gWu4C4zDb",
  "key3": "2dNGqNcDvmgiLTZ5ASwpkLA4mN27mxkzF5W5APCLr9di1MhHoxRFrGhaAeeKAeQfE2cuHxeZ8pJ8yMLwSxdE62rA",
  "key4": "38me6xoCVxLsegHemqLKn6aX12bvLokMCFvXrb6w1ASGRHjspQq2e4t2ZnXvJysFxxyvTwu1F6BWcE4WgKUaLzyq",
  "key5": "3H18huquBBuhMxHj87KW2VQSvtJc4zz3BwVZywst6MFpdtbu9GVF7AAqCE35raFUtzmdupaLmGKHBB6LdvstaHWo",
  "key6": "5iHYQYXmXkWtkGGw4UVuQV17fFvEhnAZzM2YqrjJMp4ZJqqm5xdpK5s342W6zCpzyG2vNNiM5BdfZxUhBWY1vacQ",
  "key7": "vciMKmsDtZ9uhdjeRveawzjzhZjkX2As9ddEqETESs4wxfd7aVFiBNm7WRZcvfDeu3zxbv1rdmXb6ZoiLRZfXwb",
  "key8": "5e9TLU8Wezwdx9BqZ2wH8xsKr9DUtSUCfoAdVPKcWUHjnagBCRPdKidFC717KCGw47KCb9vStxoKHMWWT2QRCiti",
  "key9": "2bScMkJ241yJeCvD944o62DHPvgfUHZtn2y8RmcpG3ifsic552Rm5k3bFbKdFXEyKd8pB5RqMLNoLhxbUCiKZKtE",
  "key10": "4Ft12RYnZPrxC2REDzc6yDgLnDwqLi64BBEsAWaKfiDH5PtFZKogQzV9Kw7GGXW6zegQwt2BZ8b1uNGNCdRF4BcA",
  "key11": "5WKSGLKMnpp6HC9U5hPNYNup7WmnRG6BaoRH4Sdvtj4M7oasuMJDvWEMUgFHpF2pjfTREWZQ6VDwsahsLNtfZDtp",
  "key12": "Q8KzavELzmHSEN2N4r3TNLB9CaADL9bmoybH4WgHZzkySANPu2PxJwkGHuN7sbSuxBY7eyjdmQGNn4tCfvubHpw",
  "key13": "3RGpsLjB9NzViNTswBrTbNvKVjsgcjA6P1wgB2m8An6JXdo23gUvw2X7KvHpDNFSxoX42cDUrfcJrajbpupnHpYj",
  "key14": "3UzhziQ5BDUPEGWw4xubNPYk8UnZrhkewDBP3r1nsejo1a2qCFSPB6ZeayaCGbgmPUrb3MgFJWkz7Dsqcryo2FFH",
  "key15": "4sruVczTVipba9BycZ72S1NvuGTdUXcF5sAzvuZEQhV3LrWQzpAprosxhesxrCiBASAgpXSKZUwNUEH8phwe3LGH",
  "key16": "27WB1U6sC5QTGbb6QbcvpwUMLwD1G5ocKndSB9uJc41TtifDrKWkDZe48brD42DPuy6zUv9CXW5ZLyY9Aaro6zsY",
  "key17": "grsF1WXJTfpJFN2QHjWbZJjXKNMAp3wSNQruMKQ8L11WDQCpZNQYA6puvgVFX9BVWaHBXZRfTUs1fbR7Lvs7wuv",
  "key18": "5oRX8FBEf3CR3fFbjPakLoj6ajh9BzBx41Exe4R33R48LMusX6AMLXUjMJboGFjFs6q3DbJUHqpTsjgkE4YiVNMX",
  "key19": "4XN9etJcwhfr8AWZbBWuY1Gx12aGk3CRxDpB12KVR3MUXTy2UnkaTUcYA2JzTWA6FFxKZk17s2txzcSoCLtX53BW",
  "key20": "4dqET4uVsPSVk2WJPvNpVosSweUuWtFVxS3WnB5FjNXTsraPnwuRHkCNiCQcyxJmUvu4BjBkjamfCkHB1Vz2oiyP",
  "key21": "3zbhV6Nt69ZwTsiwmmSP8KxJGNyPV1a52MARGbysvqKB8ysvb7XZSYPwgCFMBkro53ykLj7jAKHJzwq6CBNc3uK4",
  "key22": "3Pq9TC7eJuATAoRp97HhdbVEWCrEZ9oCSoCWwFNiL6dPeBwzrez3371EXSu2UM53tkvX2jzHRwTSdLPpDxgc9QAg",
  "key23": "54UFx7ypnwSPdVXYTrWxmYdxdz1V4Skw3DCPYZ1EoB6mMmGsKn4X8beHZkScNq1i47n5zbgWBbCzAN3c7yrJc4S7",
  "key24": "4GbPccmaKwp2JEau7vQvk87sfv4ttEuqy6mVTQtWJdXpqTQoRTkCdgUnmLNCDMhfnawaPdg5U6WsE2xF9wQhjije",
  "key25": "4bFHZEuf6kaWEB6cV1joHzAXMRjVPFwt3offq5DEvQUX6yWebUFSftNWKPcphiLpStribByT67xei4ypdAofyQQT",
  "key26": "2paEu8HmBBVWxXX5BNLQR9wAGDKEFrDKNsiRCEZVHkMjTttM5dpMzLvHuSvEaeuurc1po9mUJvrtkN1b4bme7mzY",
  "key27": "vSirAwmgRaEdCYFLDBmHZK6ejE8oM6Ez9AZQxzkHKXZbip5kQdBGtsXzEpH72YTwQV7wgfiLJr8dXRYfVdNGK84",
  "key28": "5foctBJCJ421M4RHPBcsnp81UwjbTRCRySjFnG1pZEJegRXiCpGEJRWTSJKFzSDksLdZmfkr6srmStJfztaA84Za"
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
