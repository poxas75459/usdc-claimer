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
    "NV1eSif5HJKHAGjogkCsWc9FndV7HMU1NCDUUDbirXvfdYXVG3DjYtnRvBKMBfG2WHgd3BE5HACUxB35JxNBgzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x91yqoByRTEnJnGBvs7DM37fcTm9n5zm7UziGLpW7h4GJy7LCSPeGFibeejTqNeG4zCS6yYXYqorVspP1cR8vRB",
  "key1": "5xpDv5mQLha5xoXBUfFkqdp8QJ9NQMhEMkNrsVhdTkFBXUedjSzoq5pjLV3a6yjG8cHfpyWKoYCm8ZRFJszbUR1A",
  "key2": "3bQ5K3MRYb4SW5wWTdywqKp76PpeFdQBbYuj6YuziH2NZqi8cBeoSGnzvicC3mQKNipKinEJ2rgPmmzmQuLER6QK",
  "key3": "5NGJKajKbFzN76aTRTtxuZa7Hy6E5v2NKKW9Qi4BrWJiFu35xoFYyYvRS5UW9rftMjRFb973RAakwxVKYcesfugJ",
  "key4": "4iH7LDSjdbdKvM5JcuFAY2E119pHwdVEw9STXP7K4S2vwJSVq5aUssFVHsvaLrmxfmCM2q4FwnmRutKmAuScVA7Z",
  "key5": "4hCwz1Kb9rBbr8WYUaFTSQEVhA1X5d3qD6EvBPCmtV7DH8tnWkWbww2YFsKeAYz9efuPJH2rLnQCQ1K7XpMkP6dZ",
  "key6": "83Gu7D66RzMLLMMvGzTRriwxWjVkPCBAigcvJWU3UhMF7nBv9DswoXuDatw78gpNpZ4JcKse3e7NvDPTYJygKG9",
  "key7": "2sMXxjvhrn6vcdZfAgBCmuCUkzBWH2irRbFERX38USC46RpLKvxtGpk5JFPNn4D97iWuTN8STTnyRradhvzDe71r",
  "key8": "2FLFSgU5m75Dej8gTh7kiHnQ6TryfYPxApyxYxQmhNG9W1REfi9f3BKSzuLa4DfFabBPrMr7FvMYGJQzBdbWG7en",
  "key9": "4pzaaJzZxZQhVMZGhSSkAhoQSc2ejxFjgGPo5DPdLjhY9kzuzXRTYQ9fHfy7T8eG77vHa3THU9JdswDVhuU1u3dS",
  "key10": "2yuJLU6gHjQCBrxB3mx7GXEtDcdgNjgaK2DXs8E8kkzc6rzHuGgfmYgSmyP8t1VgEv3coGQzfVgsaZGusQmjTGbJ",
  "key11": "53dKJAuqY6PyduM6Q5weGUnycSz51HJmcpmt8zKER2RrN2QH6ZHvZSeSnNB2GD3yTG5hsvVsUQ5kUJYwzWLBphLH",
  "key12": "2mEZTKkgSLhsDbcXPNuTSY2BwbMDd3HujfjJzF694hcAufM4RaezKw1w7srqtTKw8q9z91bg2f9p74twUCdKpT7r",
  "key13": "48QTMdsqbHNWrMHsqJimkMmAra5FcgXvHP6rfffjDUBUJRPY3nefhronbikUCRJi1xFDan6fAMYsnDzmToWCdCQf",
  "key14": "21TzcF9rGWADgyxyyvf6DZHeiiodXB832DhJUNhQHf562yQwsvMNJxivhwRWvk2prpqky5AmHcDCB3L8pz21fqSA",
  "key15": "2dSVPG88mAbQLJnTXPdNuWvjUPmGCgAr3eBMgjYTfX1kC1eEn2AXopic4WdV9gE5ybqXQ31UaPJXqcf7vRKfsZKa",
  "key16": "2hS7fAbbfvi62Qv3dAaYnruARFrzfo7bos5n6D7KXP5MXsGf3pbwNjY6KSyhN6HEw5u7VNz6CP6mnoFLezra8JgD",
  "key17": "43BgZCSg7NBfjwQnhi4EwqJsGofkFYoqKDGJAH7Cz5mZ2edZiT5yhiu8NFNHUAwdZuLKvn4TRZgbkgUFCT5hZeQ",
  "key18": "4ZZu6Dxs1gfjEakhEhdCRaSyUKFt6m9QGd1WrmLEi9xEJPLxTLxN3BUqbbpPRnhagrHavKorAJBK8C8bMfZ9MJ3w",
  "key19": "3n23ZGqrVgV4C9uXBzao4RUAceHU8jZhfJhRSwfRvw1QXKeu2aEpNxg5eW87fgAqGo6PjYii4Yt9S4EDaEP3bsox",
  "key20": "4Z9wgfaHm6ecxYvuUd82EA9qj2dn356XosCrppDWY7A3bFNtJpDaowiaeUmnhwkkbZaAAVYznQ4cN6XeYcauX79p",
  "key21": "5DbsStrp96mTKKq2X76VSyipLLgEFcP2gDqFGWvyDR3ek9SxnHDL1wRSh8hefTpvVoUHm9vVYQBfdbSUypj2uz9x",
  "key22": "LDQhFM3YfVA7BbgDx4RszP7o1TesaGBvGrQXsiBYxKTzmcULyiMtnKQPX1Bsx28h3V4kyf6wm3HeHXrQmCY1YC1",
  "key23": "F4zjKqG6qGD7KHAzQGX2KedEYWbrcf67g4wUPLhgYWgpnbiUrDudjrcNFEVHwYHghSb3jyTG5tMAdh2mmBBSPcX",
  "key24": "5HiEXzCPjsXuLsFHUfPQYypgkdmTR8oZAAzDnuAbKBqHnVkTdZScNoK3azkp91kX4KBFxde6UWqgCPkHwt5ErMro",
  "key25": "3wqMfbHKwhfb8T6uwjUF379ETTGRykhLwjqq7n4HcLQBpMi7LCSACZszfSySMGv9TMSCQoM7pMeY5weudrDikRHY",
  "key26": "op8YzXdzL22w6WPGZ6WiVWr8hRjfkrSf8wmjfcNYPsBXCWNAbDdHt9SCURb3RJr3BEaStXQmUjomeSCBro8SSCk",
  "key27": "Stk7e58NNWjhGeryYYSKoHTJNBVFqWPdYHQQK1ybP7yYHA599YZdC1SPPYEhcR73NZaMzDkCdhcStNoL7nGP2tw",
  "key28": "4nk3Q9TgqLetGQUgcrsg5By9WzhXeGVR19jbovEFdPyRg25Ud2X3djL91kSLjNUJCMk4uEnnowNWnmoNCR7zeEcN",
  "key29": "5yTvhzxQ1ukWkUbBQbARjiTm3xNV7h54anBhoznhEVRtwwMRfyXc69pXCv3dGbo1vZyzvM73NQegtqnCkLtoEopp",
  "key30": "4sGC1YVuSiJr1zRs2GJZyZwZ5ZQkLh6QAq4ivvYsbzn8bPDipniydbGYxmGJtT6mMDTsgvA9E1ESehzfEPp7252y",
  "key31": "cXNP9HhT86gcMc4hDuiP7xw4xksm3eHxaEayGyXxVqs6zLCoYP7Hphx8pFiYHmz9VHgHT9imzfT6Sz14LT5HBJz",
  "key32": "vYucpSZH4UNFwg2yaCAdxHFJfBAaTfNbeUmBUYJWskFgwzbDpUJb1JfK2kiHw1Ld1gKiNjvXpEJbD52WKKJwqhL",
  "key33": "3Nx3DJy6LK6WpMgb7FkaJByfoRwqEjsHgyA9b2RmeEeHXBQ6j2Y6jxNfTYvX7Tc4zcjPgoBSQRqCsXaQmu3U7Bia"
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
