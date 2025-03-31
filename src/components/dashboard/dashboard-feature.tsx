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
    "j5cQ1nRmhMZgGqauQ3YDdKDt2twHdtC7NtsjpJsVFH16HUHKLrUAwRZhajbXrAzdGZkGF9cLdE7hPUcczqkUZAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBck14VfKNeWzaZNjCtkfMFeMkVwPganvobWSXLGzkUTUxEpce6frWfWy2EkWB32rQZqcSMxa4Hq5NyMBovioJE",
  "key1": "3EYpAjvsqC5L5bXH9NUw1qbUCz19buXW8w6RRSAYgFCdxsS46Xvh3vBKcBd95YWQuUd7awT9YvRBcYdBKPTHFC2R",
  "key2": "3y14E2st4vj4DfwpRZPqAFjJUCm1Z7YJZQQmpRBMXwrXFJxVsdXAfgppKkEPtteE3GF1mnmCDeemtC62LafQE6Jf",
  "key3": "3HKbiVJX19zBf2tgKruEYZGM6NFKBaAyGzpzxn2PvZfjrm9USbwbUWbW1pUyZ2Gv8Hg7X9eKGNSwNbJd1sGDZsaT",
  "key4": "3FPzzdJ2FjL2TKTKJhNLQSA82SicPHbyrwhi776dsVnPZzdeBu2y9pvLGAU5ntDBUG8HioaokPQjM9gd99geHa51",
  "key5": "3o4vWSNZX2XTxcaCsXDYEGv1XKKAzYU1N6339hUEv5f5opzcSCv3Px1NiYX4EqnNycGfberEdyCREPYdKhu5XH2u",
  "key6": "L58bXPEk1vmFcwu3KdUeLfHrCMDcCDkRnWCLGpWUs6pfqDYbkkTCpRo1vbdSK9Y111Nsxir7pV1vmc6y1M6cMEZ",
  "key7": "4RbeGysHqQhtQTa4JYVz9NHw2wF5ZgGKqV4UfW52DgVryoySgd1iL69XmpFZfPeAhvwREjrMJtNbwDYBtHvnGNzS",
  "key8": "31Cb89fiaei76Uh6RrAkpmkBtRnL6MErQFerRyKKQvLJNkefFM3c9PYbjJNZPCJ8zmBrshMNYXJuPfR6EB5mrCQv",
  "key9": "2MGNnWR82tvm78y4kduK12dm5eJnwCHZWxNRgdfwN557RYrhzYFoBbF7veSvv96zg66LArLB3prtWgoWbe9Qw9MK",
  "key10": "2jiY6Cg7h7NAP63Bx3emouCQY3Pwux68kKui75KwoMDUtpJtWhdr6AqKoWQhetmaU2Ar9XC1b2rvvJ1NHqkrVGg4",
  "key11": "2xDPvQDnVvvypp4cypBSdGR3tMrmyuN86rzUZS2tgNCzuHLFCtPThMy2vWDqxiTs7bzVr3pQhaA5Aie4Z2T43WoY",
  "key12": "5Xt6FGJ2ZCNq33AZnQF5ujaAfDzDd6aXLcCYFPn7ptSd3NUBuhFiDaQ1hZ984KNNqWbh8ydU9ZbsnH98FaHeSycW",
  "key13": "5tMQQR2AXMfKY1uLk5xbCxMKFch6srBQhvtb7GqCyTFejvdpECwgZ6HU6FDmGTUZBmM3DuYfgjZYfMWvSDTYtSb9",
  "key14": "2JRtMEUvHDYWeMuBGLM8QpLcRK86aLgqiBuTJKsyyPNHXG1f8DVnREyw8dtikoxRjkkJMNfYkgAgkdyrw28wgqCJ",
  "key15": "3tbkUntSSygyXc8B9RjGdJjrZB2CeyLJp6aiMAFXMyxdLL2E8o3croGn48V6DYsbAr8t3LviTKa2gqX6q6Jp6DPq",
  "key16": "4Xxebqu95DSM4JQ9R1FBYbxHjZ6v75ihAwYDoGDi7gK7PhGSBEpKcPyDxYzSvBeaASShmfSG5qobBCEJZ4iQ9AnH",
  "key17": "1sBGDBFNNeo3Vr4KQTPiCwkvdV6KL5qxAYJguuURiugATbtLUVxpABcPxBbdXPTDjMauE8JmnQX46V4aEUZjhwm",
  "key18": "xPonhtmv6ztgpTtzckSYfeYSyisAbaXQD5hAFLPjGTGnDChsKUW9JLVwjrGcMsXWzWQYufq9F49jYTD2qoLYeRS",
  "key19": "5MEw2f2s13kjeCu5hcNJgo6Jb4jDU5un23A4PZEwtd2syyKnasC24oJDxbS2JLKNmTiVx9PXSRfTrCbntNWhXLjF",
  "key20": "22Qvy89gwdgC8zq1J5cZD411GbAgUk9nFLNBZ3kV5kVRARr8XLvSfTwxN3z1ZsCMCMtrkwTYVkB7io4ChXDJXNrD",
  "key21": "61jh4WJRuCxhh4AAbpgiPuuuxvJVrL4VvNEfbmrAXiYKDw183UQ2sd3c7aKxopqQrJT3SuyKy6NxxrAxioDpBiQr",
  "key22": "3c9wTB5A9x9kPmZLfGXJe5ZFL48U9Uv67Yy635eyVNtfEZJLQS6cXGF6vJqQtpeUs6AEgdo7ih6vLSRHkUKUwxGR",
  "key23": "5XTbKJdPH1mPQpx4pBdzk64UKTCHJBNC4Y3KQ7FSMxdPxyTzZNtNWTBQLJ666bjAhmv1Uorq5yZWkyoeVPR9g9Ny",
  "key24": "3jvX2faR1nBpAdNPQPVfSZc8uvpQAfZkonq9RYj9FBB71hQyFQiz5nACCzC2aiYnGDzgMypxaBrEG1axLhc5pJpn",
  "key25": "4QCEbNU68wSEPYPAsGkrzzEQ3gCr6chG3JtWzW7gFKGmgdQgWjb29s4wCTA7zgJq4qPxr9Y6ZDKP2iRgvLHgYEn7",
  "key26": "2uVq6MXPcHRyAPii4TKroiVTU9VNcaA22Ss3jduAab4mKVfS3h17ayVapEwQDK1LtfLpXeSnYLJMBTpX43bnTV7p",
  "key27": "5BTseFcMKAQVp8i8CTayLBgwyqpMBqM7DXfvYDzHV6gz41eV2BJjNty6miLwSJdfn2vxfRDSgAoEojrrrboj6Tv5",
  "key28": "3WwypykU2iFdNqjnrT1CVegFr5o3ACGizNGJsDNpZwmHea6ZSin6QqyeCfBepBJrUAJNqeyVU4wxEeu4wL6AYhoF",
  "key29": "5NKgxF2e7WRNbpvo7YoVsnpzCYkbQALht1XCbMymatQjuqKEUAMKP8PfSMmfz5FaYS4gZAN6eN8KAZeCsQERWuCJ",
  "key30": "52BPC8fKL6wMVa8d2uS4jmFLcwGLV2jiUkbk6JweSofdL8WY8rdzro574xVGtqgyxQqzXgh3jckSYtEaVPqwRRCa",
  "key31": "1VKYYfWf9pkndiwGo6UBZznxfu43FkB6Mg6eWQ1mg9bXshLussRdks2JcrpQ2Rb7pxRK3xo47HXbKHh9gRPv6Ci",
  "key32": "3byXPtFbwKc2Aa3PmxSjHjAHLbagWeU2M4BortrvqusG8rxwsuLXXHyk8Ln2vCHQ1KkmTGrGUDd4STREA3MPHEpa",
  "key33": "5NQoMbvPDdy9wPoZtgrPpaZ7bc6pswGiUs3fDPFz18gM2zra3hDHR84h3DRrwe4yiACWXqarqqAhuPC8VdXoFwXY",
  "key34": "2L9wjZ3CwPk1czf6ZTvEz1pBNRYjmLKMjwxQ9wbChZ9pcD3WmmijxMdThBStQUtYbiKsS5TobZ9eC8n8rETjfmLv",
  "key35": "WVAoQzEivdUecuovSrnByiLX5S6Uw2kTySmW5ZywqzrXwDpjPTgqGEei2Gtr2MDeR9NEYJuV6Szka5KoQcGzV11",
  "key36": "3JdXBatRrfKW32WHDRUfbbH9o3wcy6qEwpyYUnA3UcmWjym3srGdn57zQPjTpVdTzgqh1y9h8fmwPo2qmhhPQwTZ",
  "key37": "2WsxA1PaeNWBvN6RMHzVuEB7GeDGKW5qraagHviS91CuVrHo3FSkashmtLJHPaJjxtewtYDSuqL8LR137a2fGJP2",
  "key38": "4F61sH1fNjAja7wSRJf9wRexdMqy2VaD6NJndQdYG7K4b9grXhbmouYFiEdeEkugqif6BBawKxEWGGrbmYmHwkvF",
  "key39": "62wVxzJ3sCfwfQmxMnzaRcToigdCjY1pa3r7q5kuBCVQAAT6NXiRctgFEge4YTWNCQVBGDZBqDX85PbWyjYeUUtc",
  "key40": "4aNFxuR2Rhz8tF5s7DmCbNW5e3VfhnEgNX8bmnRi6fMq9292eZRabxMDUorcTZFboswHq5H16wYrPoqQDdSpHLGq",
  "key41": "63XfSHAZzZphEXC4sed5AKT6J77HNTvAGZPfYdbY6xeyy7soqjp8JtytjXKQC7VmKnPXYKs13xqDsXCZNdvTHiRa",
  "key42": "5PR43aS9jt4c7WFAeWns9uacuwVbcpwcnxX46wqpgb59TZ5qPY72nBzwc83kvNFTwt2FpqwHpMxDCfAx7PqLF4Ky",
  "key43": "5qKMgP21aCuX3hhsRUDMLP7XCx1fNsuMxdy8tHiyXkbcxtW9Gz2VSaNztd2bVLhtFtcd31ckVtiVsA5NLk86ms8n",
  "key44": "3YuqFgUrtg6M7TbS8tdXeA5x4izbsokRrfsAcJturDjYvsz4tMjnMLi8Uz8dyGSddCGKMyET3nqKQVPw8QaYxffH"
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
