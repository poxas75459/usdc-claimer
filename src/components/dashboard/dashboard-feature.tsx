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
    "3aDDPEvYjHUHxoJfEKeBbkjKwiTCApnxs9AEfuhT6FrNtJawZYD6uf16RrSL6qbwogRYYY5sgomhu9hd8CHbUvCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U6vicVXchNVBNV6qSAiTZ5pogwTtheJZk7wopiLZQ2XcWonrTn74u6sQcWT5XoDy9vrQzjCge2em7XHWpB7FZff",
  "key1": "2KfbAAqZ9uVw4NHoWggeyMxB5CSwL6q4dXjPpyRF6WPWbYuwmVh79iye96WbHTpS9mi7F8ZszGuAW8ve2GCfrbeX",
  "key2": "1vdNtUeP5kbZXeth2YmmoTz7ggdc1rhAoYhbbtJmxEFiKjdh48NtNc2KgK8FdfDp2AxNXpJnT1tpjmCgEodvbhe",
  "key3": "3BgUHk58Xaxtvq5mKB9r3jbkgobDUTtSxvtchUmHRdVMTUUup8P231JvZ4rx8JSLHMhRMmfyzzf5U42puvuE53LS",
  "key4": "2cbEfwxKT7GyeQBK78dS2Bzh2948KfNrSUP6nDD4iTef7bVhaFXd7iRTEvzyYtCTAyrq399PsnEkweocVL2sWZcB",
  "key5": "3QweLL9LN4UP4Hci4Q5Hbp2DwsjmEdAMuB4oXQp7PgucfohSPry5oyYAqjz29KmsT1D8RozYR8DcqX8uuXY98oNZ",
  "key6": "51FbzXptzkb3iakGbgYivnxahVedy29kcnBPwiWHL5YhudjhaNHJpNNVcSCgRgeTnUcNS74zww3q1PzDRMKEywfA",
  "key7": "66Mo1CDtfscvTYiBQdFgbL8qkuydi6tbNdU9LpHE1R6XQWvMrYToR7h1ZFCagpy31PKH15qsBkTU6FTEyg7eeH29",
  "key8": "5uCqToqdkAxi23t21sK4CKrpZPcXdag3E9VVnu1TDcrgg4bx7UB5VaMDdnNmA3j1yjyVCvscAu5fRuMDrKQ9CWiY",
  "key9": "vCitQRfipnegk9Ynuz7AfJQE4LLyFpBEMQuvREfEDEa7czD1dm9gKHPr5xVFKT6ZpGK4tfKNAS1Y9QEbLvwgv5t",
  "key10": "43RtX9dseU3KSrptSzuxa7tEuadwzrjnCbEfGFaoPETDTUGDcKCKV45M3uABeuGaWbi572i6yxRWVwgm5DJrut3J",
  "key11": "2kCQk8fmqnvRjmqFk6s6HN4mQA5jVkse8UsxswF6K62zsqt65XQvx5CfCHomkA6gaWeAQW53Tj41V3HGdcsRN13g",
  "key12": "474o1Pp3Q92c3U6jStgVnTUXZCVTXFsXcfkKzZ1ahodNo5uboBAFL3yoL6zLi73zNweDNFsWoKSpgPwZvpwac7na",
  "key13": "Hhx1GiJG9BttRMfJ1rWAi2zEvP1UHVaKWpgvpQdZyT7oAeRuxDkyS9Vtp8Y6k4mYEw7kGTRvaByE522afEMmDvT",
  "key14": "iKNXj7BeEKJ7f5HExnYFdpD3QzpQeoaSRtUKor8nAYvG7WcubCVgqR84AMtJuAbrGvR1PMuMG3faiSnU8Zwu52N",
  "key15": "QpBXNWknbAFYu92wmNdexNJ6V6ZRGEfG48XxAhcQBan8p3qzGDnMoVQ3GBrmEf2zh6R8eTfzfbd2uFUohSta5wW",
  "key16": "2KZ6TBGyhMy8XJvsfw7iEFNrAMP7rPv9mJhJq4sUYzL1fbTthE7i52QfGX9xvqfBpaASYvHtvhFSbtVAJSThmoLy",
  "key17": "4PBkU9qr9PTwAmdAv5gSQipeVFjiaxWw5G5rAiotNmg3AHbsNjvGMDm92yjCgr15tS8JeSe28FpKSRUpYdiw82vA",
  "key18": "353rWfta7NHwGvVwSKzLtNivFGaLB4AinYnP4pLY54Uvh14xJCT59CuHhtWhTf98ZC4gy3esic4fQvcEdZadtqKE",
  "key19": "4AcFASPc3DMbRqBnKFHtDUvL8czQT71b7AqVrWw2X5VzcfowNb15Tdn11iL2kRqiVsYBRWaxS3nmgc3AbUV8Qg8v",
  "key20": "34Eh59irwhvo7H3Xq8emw6jAeutmYrP9ecBeU841uszpTtbTwSfhcgVVnCWA5Xoz7o7H3ZGAoPzPcdPjqgSopNVb",
  "key21": "2cWrRgYxzYStRVaHwzofmwsm8NEc793yGCCxZEevGBHumcrEJCSRw4n6xPck7C8W2LU3wNsGhPyghqYUrjq38KDS",
  "key22": "42daiLax72PQeM52vgFyRHi8uzPRgkxPZSkhqc2CUv2Laek24axHxso6kde2A1Bj4EntjJ4o4CRaGr77nHxBJ4T5",
  "key23": "2LtyC2X245VDXcp9TChUz6QHUA7BYw8NV8aXzFAtmnQqNuMsfGrBJPvYdnNjb45f3HAGGuf2s2WHfbWLCp8mjLYs",
  "key24": "3JS5u342qhBRxgr2PcRyo2z1LLnmStqsL4iMpPv42jisgBSotHFqoPtteyFR6T4adWTqBLPPT4aCpUPHyXkX9iK5",
  "key25": "3222bRzcLKrwNU2MPmsTc9q9ZdFNikFduFkN9Ka7fneLoWLXRw32B9Hp6c5Fo3HLHjVrwhYvjEmQbLdmMCdM2LWu",
  "key26": "5SmLPKZJLtKHJnehzfLzuZCTfVgKQZfuyeWDombQJXQVVwFcijhUkVXHDJLikf1b9d1ti6bz7nJu6WJEfcuewfdP",
  "key27": "fJ4PXWXVnRpXfmRPtrszQHe2oa2cf38yqk6CA5QjDKoPBtJynwnK2JFRZ9fNGb7iSSiP54XJ2fKLmv9EYk2dF9f",
  "key28": "RgeCrpL23ZGFotHH4AX9MghvQtUyyYKSTpaWubLdSJiRFHqUDvzNs45L5CZbmW2vdUtELi51a62gYYQoFhDfgva",
  "key29": "3hTfyjLphNNJ7DHgC7eUcQUs9F2LpDEq1Lo5WSTANBJNuS6YXh1uS2fF8BrxLZy6489aMjQiwKCkEx1jKgFuAFjd",
  "key30": "3sWZYEuHMb34x7xo5iDrQyNQtDHEjKN18f4g6vTowLmJBYuas8AkVjy1ULNZTjfZiJ3HGJxmmngXrkTaaFzshFmK",
  "key31": "3nsCkmyv88YWLDoa78BBzkrzq9X48fqDvpPeU6rSSocCHgHqosfxfNiEeDdtCTyW3h2Tp31xGpfn4fCFjXmRD21N",
  "key32": "3RndWsBWmDbBAPkRRaE4ryFq7MWVvzsjocSgvXVV4Ycp923ZjCLB4NxEbLxuELz5n1M8Vpp4ieCuKgYa4EJfxAED",
  "key33": "4ZAmqPhj6eVE6KSi3TNyVN9maKTGZ4CFnvNreGWkGE8rh5LmSJuo1GY6uypuuetwrpmF5rFEM7yuTU8VpzpxSArE",
  "key34": "2re34GgMQrue8SWJLuDCbTZJhMYWtebxoXgYwdmM7oAhAuJTdab9NyrUSv42kG87VMBF6x3bPXPUpoZUf1QCA5Kf",
  "key35": "YUTPcE79CTgEtGPR7oAT5ELMA2ZUMeLeNn6Ls66jYDdPfhZ1bgYuZoBGGsDNLpEVyEGP1gzgAfs57hf8DXR6AME"
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
