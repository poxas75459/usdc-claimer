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
    "593ef2AikSnjgjenHLLPjoWKQRSTdX4jZSs2QH45w4ibs72UVNMUFZxZ1EQ4UaEqRp4NNAbKs7r75FJ8Ed4SPZ6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kT2MmH11F6354NmXHmHnQxppFmPqknu6BRJTc6QY5knTBR2qRBhxmhhyrkeyQKcNkexEJRqVNvSvLqv34jDH7Xv",
  "key1": "4taBxPBJUjbU4e8DjuULV8oNcyL2PzaDtWSzTJ8nCvPUsKUyCvhYi2GnvubJDGJnRcPyT9Y7LGJpXywmFFJj5U8a",
  "key2": "3ymYFF3rJVbp4UZ6jGPrxmsU7FxQNmwKB1VXBb11o2mMY7udd7wJB1kBLkZyoK6nPATs9jnBNVALz75Su2LDzvJB",
  "key3": "3vLGNjNXvTYn3z9yzjeNCs9mhvDUohC7GbHSpuz4ZSdcZCdCbhxzm9sRYmutuZQ4aUKMqHeHoi3DsnayxGD7TqX",
  "key4": "3UuqoGnZt9MpEagBsDcThbwfzJ9mefQXQmsw43YPEH3svuahNKdBcB4ZzQodALyEX5G8Tqd9M547CQgsDey2DYcG",
  "key5": "475Pb2xfC9GgRSrHnPGMnsqE8CG4CxLY5bWjuUH2aeko8aJ4ZrQ49cSMiEwHmA825i7pCcY21fjQXzimvfC7kqAa",
  "key6": "DrixQnBZNi6Q47CYHujf5jYYzy2A4GWkwNB1h1rrJvV4mVD2BTub3g4Vrx6rmgFjrzw8Q3vFyN2kyhTKyFwEQG7",
  "key7": "5RpxdQLDuv3GLbmsasWvjpRVCD48eZLDh2shfVAQMppWKHqL82Pqtfs96aHBxd9kiLqpRA48Yhu9sE8RpFrcuBV9",
  "key8": "4B72HW1rGNKqJvt7zsz5sqmVgcXxTfkcH6zx8Hv8Ax1dw1XbmTsJwutqDGxAuvATRyWMpsALv4YLoD3f4du2jWMw",
  "key9": "43uY5xE4zvLcPBu1ErfshBxH1go953Rt79CsSj7kcsgEc5TxaZTmJjJZKtqquLSM3ryZYkEGFbEsXKCMHjP1hN8R",
  "key10": "5fERvNXGzzZN4ADmYSv4GtWqNwe7JUQH6M3V2nC3iKjdgkDRnQAjc7r5rWBQjQR6DsNrkKuNmDLiA2qcqkLVwFf4",
  "key11": "3eLWU3nSMrY57niLaawyuC5fjaw3c7f7xyy9YKwFHu2gsq6EAoQPU2kJTx1fgmY2ZbEFURVdr3nUwCwuJaE97c6V",
  "key12": "31cQt1t1SyMaKcH7rr2YWFQ4ucwacZcnC8w3eNSaNLyaUMJgn3LmQcT1z1Fqc1v8Js9aqVdaDWUHMPHjkcQxBtzc",
  "key13": "5hXqtDksYiZkAxzUnHAck4Psqn7kmPdo1whhRviY3Zt2QDipktvJepU3bnEi6PFavKrq7aHuZCJLwPgjtTf7LUoo",
  "key14": "2ZhQv3vTz6MvzqktMv6g5GqkVj6hTBo7c54j6KuWH2JZ3K5UzwsX9XyrDjiQumjM4GSAWX2zt796DbTS5q54sCLs",
  "key15": "5J2AT2NNfLdtBy1WuFXhd6xUTZY6KdfRArXBwNjotq2DiksQUKomo7qTQUaWMiHU9NsqoiGCnAd9x2DiXmEFx5qV",
  "key16": "24eHk5hTqj7zzusRFgzT5kKvCAprihn9G46NHHpRvbfavEkWiq9xbx8txUs3oh4kBdp2XN1k3Uvtqj385yBG7mAd",
  "key17": "9eGqR8jNCYXkqqBXFR37fN533BY31jnFuz6pfrLPwriZGLbhBYkCa1AFkDa3exymhsRjGgTDifyTtAa4SVNSCMe",
  "key18": "1437MXD5Y2naVQppJEpbHQRXVNKpTyEgvRzdjWUik3DhbfDfZNFfqFsHKK7MKz7PQuMZFKECozsNETtb9yrtQUf",
  "key19": "65fzu7NiUMYfuo7727aKCwmg7qMg44q3GvCe1mcetHti4iTbwzVsyNuT2wubn3XWUuTg21a2aHW3d7uaXE7FyrQ4",
  "key20": "5Wd19bJ4DERXB27YUG8beziK61tHw5TsxVJLy64YznB4yH4zmWD5NgJbYi5dwN4AFWzAADKUEeq8CRQHtWLPNHxU",
  "key21": "5wqGBi62fduE4V3s8LoRPvSdB6UiNaoxHpCrJXhdpfhVeeaqbdB2FfbsTy9oLgY4ZobF2hY6NGtizHvN8HMvXQQ5",
  "key22": "2gJLy5jRoU3isuvTDWRcGWUrDEYhSu5r7emFPxvZVoTafAg4URLTiHssz446yjbdtJGic5XjahVq8N1jNZikASfE",
  "key23": "4nb23s4odKP9c9vvVrH6XiTPfg8xNV5RpKEN2ffGUdNbjXFnzrKqiQvxmbVBNv64eer8qyanmNYukLhatwxgkfX6",
  "key24": "4VVhnXPNAic2TnUDxiG5wX2SW9CotFnwEmqUPUegsUGkRKLbxyBpb27UpMK4a9rBMi3gSV82aEagV94wfHd62KtG",
  "key25": "3eexv7kGjTZvbA8YqUKit2JR3H3PCmwqCXeiToHzzSHC6wb8BDnkc1sCxLKdPVU3gF9WmNwFwHEM4GFCMAfM31JY",
  "key26": "3Q58YEMiPZt54zc1NCVyQJN7jxSS1CCGTAw8gsuAVD8aFxSb1PbXv9ffEwwS8zgda2qsJr7ztPSC6hpvyqrMyJJM",
  "key27": "4frxv9rsYXQnW88X1yh4zeaQn72RJpDqkvnvnDGUxtRkK6VzLgxCrNcDs4hpXhZCL8hRVg7rfGL9t4jcghSYqHza",
  "key28": "iE2xUFvc6TUwzuVX6ePLtzHDhpXCGqeKeFyd1UaAhLdR9sDSi2me6hQRaJmkmW5mai1gSZRvfypiGYkXN3tPaQa",
  "key29": "3zgjpVR975dHd6iW51piVz2BabVimR9BCmZK17W3seiSjWP4CU461PFCvC92djzsGnY7jrGJHatFFnzbLiUXiKtn",
  "key30": "5eCy8GCepo85R7qTosA2m2PfNNMbz5ndGrSuzxvJJNjkabPyeeXuC5zWFmvmB9CxgW1YmkRjsaiHs1BBZygiEXPZ",
  "key31": "5v2wytNDWPCL38Zq6D5Bhucfu79k9zHQUmgf1kJ9xTUpiz7zdGmSgQPSiLyGQmzqDXLYHCt8WNLA7vgRwB3ZgAUA",
  "key32": "47SfvK2oX6rEES8jKzBHEQDtmvWnrdpGaZstH45dn6qqZ2uYuVxiR9R5Dhzqi5fL6cU2ywSpEtmthjZfYWgeBo1Y",
  "key33": "2GV1FGS6NAZrmSQy6aDWAzFtSkxbNDgRdaArLKEkDPrDJb64eBDzo85RdS5JVo4JJWfcFM2o1QiQcD47d4Au6BUT",
  "key34": "2UbULAwU1Y8kv8Fu4qSGGxq7W1xDQXAQALoxHz4HJZWEXPVdKF79bK9oNP5XRUK42YgGRw6LFfAMeGShvYrXKrYc",
  "key35": "5yDa32oodFHyu29wgwmfx6qN2cZaQLLMs51XCSpVpbDcGhiGvKeEy7T5gWHBN725Afw2Fjs6FKwZSMB3FNpoRQaB",
  "key36": "5uwZvKuGouwpnxcyz7skUMYA6BkhBBRzTUmEhp6CMM5cJTzLDRurNiSoAidjtCQTfLbEtj91ZpKYmRhE8vjKKVQL",
  "key37": "EGnNe3FyooYhxw2TcdM22L6VSaMag2j5R21HWhXiXd6gZrov8UvhF6AAoKwRMEEW5AYZxcJh5ydNTrcFAEsxYCZ",
  "key38": "3CGtn8Unjj2q4uoABtbouEh5m7Ms9pVVC1MC4b3ERmVBLSpFMZNo3fPyBdfaD1CFWkwp2vWvaqeETDSGoKPVEbLN",
  "key39": "4f6o9STL34XCBdDhzNbqrw7f6qreST3anDQkNPgZhjB3EoNFh4owWGN1oeHQFcme7aSCNvP3tXgMxZFfLne8MJm9",
  "key40": "5U5wsE1F7VB1AwiTkbRgXPNhSvZ72bZmG1hWNpCgeBs1G53Cnbtu3B4kUmSF6hZQzf5SjTWBeDNGV6tvK4wvEQMS",
  "key41": "57LvRaqHHa3AFLMpsireszbnjndw5reGivTSDuo6W2FnqbM7KBqJSkdqATPdLB7nMQUh42cNS2prSqMMZaffvEwC",
  "key42": "4FbbqLaBNAw5VRKiX1BJYBpKNUpZksuAkJsEEiydKo9P4Vku1gSZ84u32FAb4pVubefF6zZLsThuGnNEmv7tGowQ",
  "key43": "EGK6c191zDj8eA8cFJ1cWogp7X5LYfSZtrVGfswSN2y6zLV6DicAfkkTt7q8V29TqKxAWcjRSgVhkhZJSzRJBbf",
  "key44": "5LCgmN3g5yfZekoMW7PW72KzjR4nUJMrTn9gqtUxVh33muPCerjxzHYBu2knkpBpkw5KWVSLoLx89h5PG9E3VUFy",
  "key45": "3tFrhMCwE7K94SwDbwP2n7mAfiihN84fPuqx1W1RJ85QxiNnCZiTfG7Gft8xbhaQKgZw9sAWQ4zdCxPWS2XtM2U7",
  "key46": "zA7YvtxQ6UUy7f2m3kgXDS7rcNYejT41KnTxLQqnUDzDUBBE798aSjBYzYWgu6DJXFwXj3YnPDebiBEnGCZn2dD",
  "key47": "B2YK7AtXnmWtSFGfHrgysaGGEH4dxF6gGcuveeUu3Hho1Tih1MHj2esJuX2ikb7ke5YGQG4TUTwpctQzSPjwQPs",
  "key48": "5E1E3EbmYZpV4JsdkRrFBgdDeg5rD8fu3J2kVofthT7P1e7YaQJgRfeFi4ExKg3mny7cV3EPG68qJLbrVbLsGAKG"
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
