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
    "3iHqXr1azSPL94XxrH4bagGxZryVj4EpMsRLmzyTF6s8X5w2KQkwuVLh7ojkR5eZxK3PtHAegKhyApq633y2UzKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dv2cFSR9on92Zdi9q7RHDDqKLEBSsZKNRFcc3Jhdj5PWGzaXvUgujeLPfgLZJVSDnyVTrwfKVvUmvtbonCGe4Vg",
  "key1": "n3ARQzvhuz1sbCjvgHtN45tshdMXBZqn5qb66QdxxvWsfQquF8RCSLi5EzDEL1PuoSb6wxnStdhEfLQb4RoRxyd",
  "key2": "KGpPFTVA62jnwCuEBnSBTd7hxjYmBiL1gmGMzRUPuN5BtPeEKDyXNDDDpGSxA23hPL52kusQuWFqFjfiqD55ngr",
  "key3": "5SoRBWs3u4LcMbeH2fvcRFaDx1iYk8Enn7sjHh3z4cffYKbakxJgnoLiuxNWX1v5zYbrTB4zyiKGPEToRCfnfZJ4",
  "key4": "45XX8M3PYzVBNmciNB9dDjWyzhT8ZQEAwgZgwsVqEhrDdABxEjbTHGR9S34XggKgqwkFX8ivJG6DPdtmV8iK9xhR",
  "key5": "2R3uDqMtQYNPKT8zuVxpHasb32xMQoTkpWZ4HCs43cxPxgfE1ymePkYrCyzr5pvDQJAkVu5D51dGjqBuJZfuYDWb",
  "key6": "3vT5kwt4TUx1A6KCqug2g52PbLzSPtfygK5THS6NN6VhLV8yZddj17wc6gKaVQFYdGFWM7UW4n5q9WXqsM8iyEAL",
  "key7": "5pY3i3Kt7DL74a4GbwrVkX9qwZCiMvE9aTPMVb9LizXz23dGSep7V4wUwhwcwVnNba3QhzLiJQ8pVUQCXNuqCaSb",
  "key8": "2dbRaqVpYbHdDs9swF5RJoYnKGSbJycZJC98PKh1xdmctGAxEw6Pve1gCLHYzbQQ54ChiciHKGcTWpwwZ6dyUgbm",
  "key9": "5xX3ZjBY5YhirRa1mCVdDtK7JaqzmvjNtUTPu4x4RaVraoqAnNTJgfHYSc4CWkVw3UYooB2ECrQAreHUBS4GFYCk",
  "key10": "2ZvkrbbzaHFPv3wAb4cAttQQ4DbdWCCsBUCVHp7ZAtX59K3ChxXHxype9emcPtavFbSfr89ufbfpp6oSe3PhXHz",
  "key11": "2G2WF64AEpDmVibCZkymD1XgvBE3JvEGXePn2UaxuPmNjeZEUEi9FCiARFshVRHj6doar4kBht9b6gos6tyc1rNT",
  "key12": "3bbgCYZ8P5No1eLNXAgNXFgYo21GN1wPGjNr3aZLSxWnL5Vjow8i8ujvPe1hWxGAH7upwNcNWwe9K9WzjCzvmgG2",
  "key13": "2WjmumG9JPqkvL5oS3LYRY7YHX5jTKtQ8RC4uREoRjhkGMvjtb3XPmguvMXwdU1TsAEUF5ot5t93xbagMT6jcaZ9",
  "key14": "NgFtVEGjCjyW7Y3ruzrrxmGoUpapN1XS4qJDepFrVUagrPjfYxbrEDAi1bvq63KuT3M7di2fo5qKRXYhxAadFuQ",
  "key15": "AS744UB96XczAkFJJEetW8TUEskNHGYZPqYoCqZGm6kufhrMat8qFWGbmbCcEPNdkBqFcyZHyuSsBFV97nSKHgV",
  "key16": "qtbTWroA78Kz2iYSs9D7mw9zRs7Gb6ZkHzsHhgKBkAS54sg2XJ27hfW9gxjg7D1CDWQLmSAwwo1grEewum3jiTn",
  "key17": "32NtUv3m15M45NuL4Ykqf4MXaA3zMQmPN8ALdqodDuPtdrbaJtzYjoVdzUGDDThddK3werdq42u4rdZF2WAHLpjM",
  "key18": "24To2TgMLLZWw3cR4hYNQqD266S68vASyWYQ9n2w8wYFp1toYakEzLzKN1JidpzPtzow6gYZUkZgjMk7m1izADE3",
  "key19": "3jXLRMLeRpMfiRhkkGn7LjtakDkS3G9afwtp2TMazTMSfEehKtUB9i526mmQNpukcMH57Uiyym9UEdPrbn7p2NWc",
  "key20": "2Lzn3C2fMCK6WSNN9VQ3pn35pfMBMph2cZZTVo1HjofRrmn6GtQ292LayWMWxofCiZK2Gyfkn57Mg2ZFgTptTMgm",
  "key21": "4GX2JVcWVvfFbfeKC9BqWSAPGyHWGgRnEE55RCQHAq47wr8iAeh8XRNpoPApYheafeaRg34paNeotrboz4kxUNUT",
  "key22": "5VAsUdAAcVikydfW7qDvXBvJ2vrT9bQSPoNeJTvMyCJA2WX9NPiMHDkx4Kn7u8pbiQsQnzgDqMBuoE37mwqXEiwu",
  "key23": "3ozH66RdTuyfFyL5cdh7TM5TZU491xt23Qsj5rQ7dqJ37661V5MP5PyQuvGnJG7tsQoqhP73AtQn9RhHCKRv29CG",
  "key24": "5NqkfosScK8pXdP3p7FdKeTJprYmpMD9PcmQSMUyBpgRfFowR4fdZRRsfUH1eeN6JkcWZCqZ4FEnuDqjQyrtDUKp",
  "key25": "5cE66Lxc2QGbkCeCjmWrzM2NZgpFVTa1TV3EdvXkWxt2J3UrPjh7Aq7xWKJXzSPMkfmDRK9uBPdYvYRykoKJpm1X",
  "key26": "mzoxbkg7i1jroCNUGCJKXCQuh2XBAzBUqCFGZ7bA1cPd2cTM5qad4khBRNQKCjGMYgjb5CkysCWS3LXCaUUZMm1",
  "key27": "2EwjM1DgyCcqmmwmi879YYNiqssq9yoCpSgKdopk6Q58GzwzewEF58vLbNoPDELSAQPR8qWEbXU57zCrJprAmdcN",
  "key28": "2CPeXrxUNjJVpyuYbme69UyKBpL1HkCycGpv7LtpHGxMtoBhfGe5QX4SCGfj3JUw9r9Y2d1smbhn7Er9xDdMvEtd",
  "key29": "3i8qjCAn5YQRChZBxKeKZrQZSSxhbPWe2ZftdtXy31gyc2VkghHdPWrRjvEV92sh5hgSnea1HCnsK166F43XDACD",
  "key30": "5G37fJXTFQuUeh7xHaUxr6MRrtYY7eaSzS1kkWVKEGERgwPZiktgWJBYKgsBDEGDY7j4XYwSY3az9chP2LtpD6JJ",
  "key31": "2kbEQ4supbBob2AdFuckgN2p3W8kieEAg8btKsD9f2ZBY6SsRi1YgCrd722NPsbveofCmrBhz4uvbAbtoLQhC7qP",
  "key32": "D5BjqMtA6yBkSG8VmdFtC28MrvBYatNhCnSAy1PyrJDhjtw1Luedg1v7TZExXG6aW8oaw9B3m1VuEQW488j3t38",
  "key33": "4cwo5C6XHnu3LyjmyRfZ6W9ehLpssGg5t4FYEop1ADSjRaVbssFY5JnPmB34G6zVAbtEzhnb9S4MJD9HG9hDQc4u",
  "key34": "2JQXVSAfFdDLXoxzyeksqhuX2JhrVUM1garMCdmrqiuLkBTvxeMRKh5cT5ey3Eir5NC7yqrNqtFoEN7AMwadujqh",
  "key35": "2vmKwbEy8vvM6vqLepNjVc6EEvq9PDTiDzFmYV8uvnzCwWj2nR6U3bEjo8qiLtobjKLHvkyShgynavRUvUVgRk6Z",
  "key36": "31MeMsecLv6cia6ZwmTVCrk5GoaCyc7vtnotBSZCHedeNxoDAi7Ahown8cKpi7U5iURduyia6J8iz7AWK4sijYSv",
  "key37": "Ud7iB7v8AjmcwwnZDajkhdvtUSxgRqfJ1ZvSTARcQjFpXiqXzb3wNrYJgXS4zLvRw8SnwXSaVPysMQfjQEqi2Hj",
  "key38": "c68wX3TsrVUk19djkZduHbMUwCSCYAiVGfzbep9zVbrdc3JLaKiPw1yoszP7ukWyjSZaTsqSyCTQ8Y9LivGd5PJ",
  "key39": "3a282pbX4mRL4PHoZCDj8YgLaj5KFrcAu8UhayXwUSaUze1vqFrrxDA5UvaAT4xGhm7VmyGhLdp5JeMydz35iGTN",
  "key40": "2nhgfhGKQRb1h7vGqoq4K7pafj65g19wvWtk4CWoNzJXEdBinJpQw3KmarXT7C5BccD3mn4LBPZDAqNo1hNJESjf",
  "key41": "2SeU7gcYLKgy2Dvf7SUY4VPhM4i1Dy56J67ykDKrLbUEVFCAKFYoEi3spQ4p67idZhM1VsZY1Egtbr7ywiuwNuht",
  "key42": "4DwroVjYBgkeBYndgXXmYeKgmgMpo6KuEPF1jjq8rbL2VPEQosBqSsJapNVRpgF1LsFH9MR5MpTCQRSPwyny1RHp",
  "key43": "E4tHLbKA8gkheYb2Wh2RDi4qT5LSA1KbobBW7bu7Jv29xNHq1oixrdF2M5DMGZpcP94hneonucAxhyvo74i6L7S"
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
