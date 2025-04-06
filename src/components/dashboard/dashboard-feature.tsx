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
    "46LNSDTGqc5gQVMNRnKcTSPqbTqDqXoTJW7iiHhSPNa3dfdLWYU8q8HAQexmEQ4RfnLgeaTN3KSoHqNbCTMRVRpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHuGPAx1BKhwSH9mxAQjZvyvLQdiPSWK7WgMk64JkWivJJoHUj2sBZpJdV6ypPcS8FvU85c6tPJPHYUN5uJ9dia",
  "key1": "3v73dndtHdxBqX8DmeRotTjnnf7jfsHafBbHN6xaKF5CL1Hyc1GKR471cuae5cKJkDzw2FbQqLPpfhJJfWWpSksS",
  "key2": "35VNPjZHbfnXcQSe45nXsf1Aeiyxe7oyo9XKnaFFquRdihs6BV2VgSNpnk5W6SbdmV4aAocYLGQhzTU1WcUMYWKf",
  "key3": "HEdKoDSdXoRWVqF5ZznPo9ZZjxFt4i3c9RmeDcmCtbfTTyXTES6sRBkoG324eeLo2ptkaTCdHXKUNsveAskmiKi",
  "key4": "3Rrkwxv5xBHMVBiLgQb4Xd5LXgC4SANVG4DzEdtpEuYdxUEdSxfyqPEcsjJd9MB4A1EKfJ5jdo7cSEwMCci1DHKz",
  "key5": "t8h8kE5ysL4kzFC8VuHigkkohbMCq9sS3oqin5hMcWtvSejdZqXyYrrfBuSVuaAb93Fu1bpnW91T6mSKzqSov1t",
  "key6": "35nBgUEe2QTCgSkNqZU3GVkeRHDJGhAQ3ucHAKCjTe4rRvt2MweJLn2wcYHkMzkPLqCMZ46iPu4ZQYEnFqV8EKV8",
  "key7": "3Kq8RPwAoW13p1opuThhQD5jJBaC2Lq1jDMmktygNmBx3oYgsP21uG5ss7TaVPLAzPZXvvdhJaAuKnYyvaRyMurv",
  "key8": "5EQtwRBb8C5mnYiqtBtE9QNcHgXZkCQXJSh5T3p7pMbSzCEy1ZaM3GFYu8AyBLsLyy5U8b8T9DnhGbyo6xkR3epr",
  "key9": "FyhuVEn4hdcErgStfVLoF2WhxN1N8yzJav5GSnwmXim4uMZfWuxnJyGHXQwv1EC3p6xEebrTaxwDd5MbBEzKcdF",
  "key10": "4nxPAMzmem2tBGAJyL7hVCmxQ4VLv2TJsb4bnYPVSJh8Tpht7dGMBibEvx36BuZyj2mXuiXZRRhuGb54vL6ET9ey",
  "key11": "3W1M9FUjnVQmdnDkukrUB9ETpuZVBVxPsLo2YCQazCScFZSaDBztA3fGiVtRm9GuwuD9SoYSe4ut7ZZEEtnnTaXW",
  "key12": "2vXgwnnfaJ4JTUTFTtZLW5Mi2BjDJ88sxjsyupxqhs5f6AMJV3q7CjazDqr37NH7tqt43h1sfjYpYLs7i5UcBAwz",
  "key13": "2Bhjz3LsJHFcJbGMVLcozZCcbNDG52Tjw9JwLFAEpii2tf6Kudwk5aDuneEzbHat8z5xGgFFZpFuZvH44a7PmBp4",
  "key14": "3Lsz9WPjgKQvGZKhfw9vaHfPfu9MiRG1DcxcLdCrjFiHb3KrZSy33MiGT9GMNNSPrZYuinBkNv34zvV2aCxcSic2",
  "key15": "31k3iRCTZKxEkCB5F1vh78kkAivDULj8cN9RbwYTXmycRtW1RjedbofS8if4TjUqdoLn4ZAxJuN8ZAEKS9HSoUvt",
  "key16": "2UWcXkimXsffKde1BMDjKM8ZVQQpqK4hVs8oy6oJVwtk5LAiRytPss5KqUwdVPNBoxRpMgwryKLdz51kyAnDUyJU",
  "key17": "4virarBL4WxNdipX1o28PjscxDpHDfSx14C36MzQynhebmRiXPPcna35jnevi3tryE9rNfKSQevUzePE6rcg5VJx",
  "key18": "5PoYqyCiCSAacfTKmB5wWbLmDfVd9XDphR3XyeKRZzLMdZjvDtcvhqCzGMp2jGpvK9izvzGsVCVqeH1owZBEhA5J",
  "key19": "28dqEApPSJM59WKDm1XTv9aKAz26igTZ7Gia3EXkRoMyoNdZoLHFhxXY7JSr9B1BEELdPL52fqnN9M5Xox9uhVpU",
  "key20": "JNkUqGjFYj5qcoh2AkXfgPSkLUoz3cLZkZrEKQAJaThyQcNPHBmFETtbUhcpNee7tNf57soHpYHjNBJmo5errrq",
  "key21": "2jRuU3eMHWnxsKadWdQkfYoAojBgVj5t2wX8zALZLi8h7vNdM7SNiuAL44voyS8kedsaZQBQXVpU1vvYR5vtGK8c",
  "key22": "31sj7cNhccqMW9FXNx7qcXqeDdY3r216gSP7Mhp6i2Chb2fiWth5onRFtaeTGZyYqfx4u4dTz7MymksuyAqeFSxF",
  "key23": "5sBsXhuk41ao3RBEAvz9LXz1Ci5biVoBvcMszmwuC1vkJvqHuYrCBFn8FC966tPsXLsBh6cZiC5gXNcxvvoPJSb3",
  "key24": "5kKfGyZrmLnGwtAdMWkCj1h5yTzrKgCpW6jAutV79x41KCq8F5ifHPgoAwmi5oLdKV1LV8MzUMPE5jChoLbtoCP3",
  "key25": "3R1PszbAqhrTs5dAttj5FJgqektQeKgKtgSQ5QH2YEA5xPcG77aajhfdUexJgPHj4EeoTWL6MA2oEY5DqWZWnaA9",
  "key26": "BGscQfyoW4zzHiTUPiy12dZjeemdkiCfS2qvx8ozDmHat3KJiiTDJ36UWTEgV1or58i2oP6CGoR8MRC85vxSAtE",
  "key27": "35o68eCtxXE6QWFVBvJsJAVyoc14DnRuZ4zwsYrtsq3Ke1g3BUbu6eM79vC5hYpW4CyGe6fF7ExjxeSQmF61rRjE",
  "key28": "4VuPwCh3iB3dNSA2ifkn2juAbyeYXwtr5XjhZniL28iGRynoRKFzLUTtRQY6GF7LkLALm1aVjtUe6qk6HGJYb7n3",
  "key29": "5wchZseBhDr9k8WMyhZMdnXH3tR8pnSdn4t44N7Hdw1bgS3wU9y9cs7g7WzTd9SB9KotMtkauAmFu747weYVBE22",
  "key30": "3ZpJjfrV7pDVG71sC72pScRWeay7xA65CobmLGz6nCzkRABTHo1d2Veyki7JeaKQ16pEygfk59htFrSZdKZ93o5G",
  "key31": "2J6Y5BFP2qyav3dSoBfHX3eW7ALSQgf3WujwnxCdjkkCxd5bs1QEAMJnVKip3NmFVfH1WXWchP3THxFUcjjFta3b",
  "key32": "4LcMAHvA2L3SoQfSC3vx6sCj6p5CFrUSKfugDeV15rMRHZCe2ajN7y15Dx2yHypiQtwHXSpDrEHq51pRzeneZcXj",
  "key33": "5ReQziT8joRjLxF1y784jbrizqpQcvPLeWPWFwDUyYaqohB1FMjbRXgofSbq6M7ZbLy3xu6GTVNFXqnBcj5ppPuV",
  "key34": "4n75kC7HkXwCzdmVPq5Rf2mw8ypU73S4XU4RAtFCrd6G42YraGU4Qu7npM1qtbKrHcHYSASuJzQxSKo2ZS1kBQJN"
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
