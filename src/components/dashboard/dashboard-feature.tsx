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
    "4myTcWam8csbDQ9oiynPSgaf9LyLwdNVkA6rLhDV3HVjNsfwLKvrNK6rBet5jhPSNfe4RAZYUwPfD8YbL2hLCybf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XyrGgbS3JvW82fXGj3WB9oyxxirYfN91HECvMzSB8UNta4FhQkSLZpCmrrsXvqqtPTyLFpbeHNxmNNneY6uz5JX",
  "key1": "2dakZbM71X8uqCyDwppxyYv1szi6pg2D6LNrTSnsrUr6TdQ922xaEiVUS9KMFSNyDNNFHn9Fy4kNCuVkwDvYDqxm",
  "key2": "2t6Hop9ATMoAxXg27xT2RkVq7D8kni56DoBjnM3ASLDVnXAPChP4R9viNczQEwmxktYDsfMfDKttDB6zLuxW54WN",
  "key3": "5nJzSjgycsXCkPpbAA3xDytPTkMPVFJyKrrx1nZ3UcKvypWtXYdktvpEgYBU1hhDjBWQhEFKLKo6BqVM2NZRWkEz",
  "key4": "4KXgqQYzL3ucR84oxKkFiLJFv1J4DYEVvQNuDisHfqJGNREWdm5UdGi8ec1sLyAoogERx873u8gS7AV2M79Tu86C",
  "key5": "8k74b276DoeD37LfGh15UCWs9ByhZsc23XkUuXWGRTdUJVHBqSFJk1nBCxbYspDPJdJvJogy9VeAHrwPaJcHtGE",
  "key6": "2Aq5F9vLpEXWaxhQnNfXnTicNjuEvj3BsZuwGjevuABbYT1gFkBJn1dLhqscxvh4q9WbiHMaKiRGA3efF4BVxYUL",
  "key7": "wRKD66NdcK46GjUMCSuV6PiJPHERSLcb27fTBmxA6frNEDCdg1pQHDJhCUN4ENTNqzsbSkrjEAG5KmehQb2KiCu",
  "key8": "5BF6FWrBcBn5aH59HjNfG3L68crtyM1EVc6FtRxLDwq24wWUpCN8eBMt4dopGhkBgtVygzjQbYtyJurJRg44h1DY",
  "key9": "Maow2Adz2aFhp3iAihpGU1AbUbaoKbfrThMCLVAggZN7tep7tL4uCJpihZztg4qDDwFnoEaKyAQNL2jPgXKfddV",
  "key10": "5h3qmRTrgvyENK8wq17NzM46iRhSziTZSJn6t4FDuwZXHheHDkJTwdaNW3eQVPWmKHR2KJny4LJSJbfNLmyMBpHC",
  "key11": "2C9UBGnyX4PTdJfPftyny8xbu8opZuYSVJetjLxL1rPfKVctckV585o1DRD6wgX4LhmHj5cdwaEBDrMH7F4NP3qz",
  "key12": "XrGMDxLpWiSr3fWYXKSBeEN9VSRBSDcTVc1k6cQjmhSBWBWz4MBzuXsbQ7we21SJPWAM4gBmrjC1zGtikwmu7G4",
  "key13": "2pzVEimB114K8CqzoWRjPC5SLTW9Kn1y2w9aN9W1WG3W69JoKBARhE2ovu4wEfvFMD87gRUejDj22NztEU1XMMrP",
  "key14": "2DRdenRJQKBsxeHL3wxeSYgG4Tt7rjez3WVUBy9GT4FkgPWDBTaXTSGUJ1vyCnH7ADDdCByxmwBNbpGpp1xjce4o",
  "key15": "3Kurx4vCtN89msTTJ92S2CzihcohG467xBUnjbd3PtQnKBLT2Fconiqf53ecAPwkfdWg1WLimj4BzeeFbT3DWp2k",
  "key16": "5hHxQCFreCEURo7iSqQaE4evo5RRnEaY2XFvsycq28LY25EhuNsQh8tvfq42avPoiTJMhwRLQsgq3RWy1DhKn55a",
  "key17": "pDsV5R8br1La2R16cmfHrca338DXmvGaAhGqeAS6iek3hfDUme97kiJSP69qnAuBJwXotUVbvwRBGPMrq3tzZP7",
  "key18": "5mmVZ7P2fBFFYn3ZbhgvDnjeQmfg1UGFkxEKpq3zSP5LEuVTSndubva19TJFanki1ot6h1oBpjpfy6vTgpew6GqA",
  "key19": "47TgVoaigNT4m9EDNqsC3Lpf3ACBPmVqLfsArqw8o7UBeU49eqduocH98RZLsnGuMQfYKoEqa6kV5MBhitXfDRi",
  "key20": "5LzLwfJBxVifdBNPxjw2mCwPEGDW6usxikUuDS5BeYDdnBZ9retj126kEVxi9KqjL424nj9G6zZMKMdKhdgjtoT4",
  "key21": "4dAx81B7kQiAidw869Eq8RmjBPRuui1LbyjZ7ZQX5sYrwJWggyNm5eLj9rL21pTUc8REebzRJAKWpKHQer9Nu69t",
  "key22": "4zdvfiqP6PqzoLdc6fcPxKifUC4mWfpugA98j1Q593FSBSpafEeRuwADmKpk2xyiEBWixbLBZZuFA6BJJk5hbXQi",
  "key23": "2xfK5hr5MmrpvNSVtYRGTcsDvbE7A1aPG2QdTtdfTgsmwCeAMdstFh6CtynydE4p1a9cgVqijWm4vBXULCXDhxM6",
  "key24": "5Fx68wupWDRyAQCxjV89BQLugHnfC6QjwXVfsHGivJfb6VKR9DYkUNpaJCQFxko1dSDtr9MoLuaiDBRRWErNb37H",
  "key25": "4rtAeu1SaPmgXZR6YDeZeuPSpqqMz42TXHnuxNz9hXiKw7CkqZkrqesT6ERJrR3QiCtVVqzBZq9YgMqTa7kjGFJs",
  "key26": "2ZJkyxomtijdu8Y2dA6GUvgK9fi7Z3iYigDKnx8rmZcQ7zVHKfUBB4XpNqRbnzQVgbCGW2XarDVHwMY3AE57tbjj",
  "key27": "5sTtUHM4X1xy1m16Ng66Es3bcYoWiCRgvtcVcPZ8v7dhvahhQHthBV8qEmU27MatApWFRReHU6ZjadBQheJgSdXt",
  "key28": "37KcGHjfpd51jKqLfwB2fR2438C2iu7h763NSMcnRnxHbV8g1yHwQDqw9hqYBoSZYZCXLkCMFK6PpCUzZULksabB",
  "key29": "57m4Tao7Tid65eLqnCCgMhof1cf4WbobmGhhxBRYqkBUmQmVGs8n9kNAZNjwKFwHNaY1xoq1beeRiZDA2pPBooBg",
  "key30": "2ixhqmfrqzjQ9VqTK2LMYbFYCFdLqnyvJbjHfMnSQo3eLxGDt5ac24YDGu5yDZ8Ah3v4k2BHzXvTPvb2CNeoo6jx",
  "key31": "5dQ7YRbGJWvuukymnF4M8y9h3RS7YRdxD11yxVUXwt2toWJypxZ8Bm2c63VjwQMHm5kr6S4bCQpi9AWznRxEerem",
  "key32": "2cgvMgJxcd8v6VkF9FA5Ze5DHBTEdQGEqQq3fz4wr2ivVumuwEZwpj2C3Yz94juV1PXX4Rs2z2qRZyrtuG7qwcjR",
  "key33": "4TVR28ois8dziEkTFQQbcy1AjJCDfHYKX1NCfg6vRXWdkDJjSwpLpwiTdx8kpqXuGF82f4VEmyXtjCRiv2fjzj9w",
  "key34": "2fUdeY3woks86uGun7UDDHMSy2vmgRa3PQ2GE3stTWcCWfMYtkUffxnc1i5g7S1dLuH53e44VTmZY2h5LxujAKdc",
  "key35": "5qhxFSktUXnZfwJmeDQoZwhAkrkgoEJXgeVQT2oFjjMNxeS7DeLsdxQLC6RLa1e7JYAUWbQ8pyXsgxWHpzTENzNW",
  "key36": "3iEz5AT3ZELxDm3J8zPonYnH4h3e5eBJr8hy1q3XxzQNpcjtB766zUaFPNeS1RRiWFZe9PgDZuafqUYr6VZh5Wkv",
  "key37": "es57tZLc1pAJfuS86rxpexEFTNweRNjHqVkfEWoGirLSLSKS29QHhcjHWC6eDRc89yUnc2J46rx4Ttei7kyBoSa",
  "key38": "62VhWQjcxdh4PRBkFzBMgExYQA8LnUpcwessXMyZBKVbKuqaUPYMSzAZTYRprkbjEiH5QuwiTNADzg4NpkwyXVAL",
  "key39": "5sVvgD8QLd4xD17L6Wuu6RSzcMhkGLMmY3SXbRqBbA3XpZfCoFimX2MhRA2LamANHepLqNABgVijvPJdDi178uLV",
  "key40": "d16RTcgJmCQQAuCqAnsJVV7cGoyrhjDmMtNsFF7FbTn9Sw9be6yQUgkwQBYYY1ASfyX3XucmHGKsvXAThbSwkxB",
  "key41": "3zdbTsYCyZ4eqzjynJLimQ23p67MUyibrYvzqjFMrw66wAqKxe28DQWGk1eq4w6TgdggtqoMQqZFxznmtr1Tha2U",
  "key42": "2oXgsDxLfZiJxrd2vkUXNEsXvbARp9vZfQkr6ityNfoRsSk8WxYGuEUvzqqphT1JkYLPjf8TwQMVYrAmdcXKGu8Y",
  "key43": "59NM2VDtFghmpVFN6pxiYb8xmge1HJoX5PnTqLP8BygPEZtvdHmKUp4dL1STVV3wGM96tbhiYcxN89BSeKkaT233",
  "key44": "5TN51ktFuyuc5dfcEohvz93z4Hr637tepqRA2PtMGpGkk2P8HsAhqPFjWuuZV8ad3BvFskxHaBSUWwurHXaExzRR",
  "key45": "26ixFTVZv8CyCCGvEm6JuXHW7NiWfZgLAZnTytkjCFfQGfwbXmYu5S716EscNPhE8R1m4GGCkhvU5Th1gEA3fchu"
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
