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
    "LSgvqNnHk2AB6SnGKZqBGcxX2AvtqagJmEKZe4tmHiPm6PW11PyEWA8pYqWpzCf7KDZNfZwWPvFVgUKSr4SVXAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tvwKfdi3wbV7FnycHS4xQ2eAj8VUcuJheB44d7rnkuojGERMPRn6vLhbVr49SAbUnE2ShZm31QDQKnAAgw1Taei",
  "key1": "2bgZBUonBgr2CU1ToRf5xoiDzkd4kFioijxNZkQfF5YJwLhAFtRA1SnsSSqcagJKPFLsNoNETB3FVg9ztA5FdLXp",
  "key2": "57dXPXT5nAApg8W2UTmibwdpetnuTSKybJKSiwcSTsEGGKdw85YYKT6GTtY5iiwvYuFrwTkAS6za8kEo8KKxFGXx",
  "key3": "2XXvuBW9HUexmNv7FvxPZmLFQePdaLuYVGhxVFSh9AiD979ihMBnKsjyNHmGrH7DL8TJ9yDqY8Sf2aK8A8suD8Kd",
  "key4": "5z28Cqj1X3itgjyAysuMkjbkAaXRMFiGj1oDiM3xqQ1edGgydJWqXdVXHGZVbCrNa3xFvuXiYMyUXt5F6Qa2HSNM",
  "key5": "JtckmicarRyfEoftAoUerzJb1YnsBw5gpQMSq61muhyBCHyVeznVfQKXuvVd3mBfxnZRuS6ytKaKihK63yfDFVo",
  "key6": "3XtEmg35RSnqHvAnRyqHGT7r3QtqVKey4ndPpRrk4n39u2TL4eD7qJw4WrQ13icatjoynjzzgjBCJRLSrFr7wcMT",
  "key7": "5vR2zBdhwuu61SYf9HwtvkgsgnVWww56bvTJQQMoo3Rq4xDA5ztGyMygZHtvkjtgeUCAJ3NrYv94oXq6VES2Ud15",
  "key8": "2UxZHFfun3keWX5QJYBRpmRUZzcFuboXDnhyupYgq7tQH5mHxphMNjAADdPHdbpxQxBq1pzEfmZYrXZfiGa9g7gY",
  "key9": "3Mh2qEzyfBebu3kwTk7qFEGMrwRhSytXsvHc7X4bX52K949Gr77BHQ89RZUMZZ3kBFRfhA2guy7GZmiNFQGv6VSE",
  "key10": "2iapqftgigkBYqHWfEi16iLDJJYW4g3J3VD4ybktM1uBxFLFdkxsD65rTUkELBrTxu89BQmzx8oQRDyft53iBEPZ",
  "key11": "4xj9KFYfyWUuJUxbxT9rojEAoVj58E1rY7vqeA1ZySMrdkPDVkg7qY4cF2cwiVrubWKRcUtjGNBVrtBao9jMn6FB",
  "key12": "41VhxyBr4MR9E8mfKvCpczZCmyxuJyGt7E3FrpHDigvax3tcma7bk7W9dTtCrookmJ2BHuKDvpdVYE3k3MEFxMMJ",
  "key13": "2oqLE9picsJiERyhPtrsh26Ak83LfbUwBCYTMYVb6jr6AJNTAYVViNF3uF2FqfC86zHW64uBvSbx7K57ZeT4xxzU",
  "key14": "4Nw5K7mDsRcPdNMoSj5sV75SdFSCLV7pmDP5Rae8KhZvYZP9G8xRvtT5JwMt3sxKzpHCFrEEEYzyoa9wnJ5oevPx",
  "key15": "49JbVbAMsTdLzQ1FD4FJKB6WvdsCv8xHJd58pkV6zf1WD8LCQkVu1mDJE2FKMGLV2n1VAmGsodiYwnSnnyjKDwWN",
  "key16": "4bFjzz39NBpiKY2LtquZa5TvjSibiMBXRz8ZQSsvLqwGzffG6vG7bntJtKSMV4yTaZHDkyekpmCezd39ziRtrgsz",
  "key17": "3JfABZWaHi1SGQ3ca4vQS6B9vfFTyk9HBcRptBawKzg1g2JichHPhuSUmvikbRcvLhf5eruoa9TYBAUCpn9BvkNa",
  "key18": "4b2pmNRx8YyDQvzqNxMPAWiqnBTUXiSNkuoMe7ZsVpPPFJYd1uGH51TLmsW5AcvXj5e5eCcFyo47PadReArjvTBc",
  "key19": "3PUPogqh8kj8Do687Wc6KSrrgms3yMhorHXcna9kJ6RFMZYYsAzz646jDLWCcAEV712e6anrtZzeoRp3V5hkQUuA",
  "key20": "5YXLYwr4eq6EERXAhTqRzUyeAPBBBU59hwu2kdjMnC1pajwKpko5rbkA2iTEuwsAeQMFm4J2PBce64dTsPWFgTot",
  "key21": "46a16Lryoa3RL5HeexmhjHFjr6e8PP4Y4t48BW65YWkCQBMAdzqWrX2ijdWxrvML6BLeSnLJJetXBYqxQ9k3heVd",
  "key22": "2x8UKT7AYoBU2rXsy6Z2SvjeaHcqYAWQAo9M52TznrW7C3hBWmobAJFmMAD7eKd658PWeoBJZaz1HYhkXaTNDUrG",
  "key23": "3F7YUknXKxzRFSCtXhJLiyV33yEZvtFJ9CAaZ4v1udNgirVXrSBJQWazqLMt7PEqMZstse1CUaWrn1MNwGrd5nWb",
  "key24": "wjSUWKvs8HmpiC6L5tqwfRTadDvixATYqcxhFV1Sc98zBBnXNdWAzn7YZurdvhidEXare7QcvHSvYamJdGJXyyw",
  "key25": "394NUFoxnf7qE68LhUj6XFWwvAa1WSQPyve8CNiyzYNhhc335qc7DYUTEUyLsF3cPzdGEtq1B7WYVFjUwuFz6f7s",
  "key26": "4u2x7wygSmVKb6VsK9Lp4rcQ1EZmy56uE69uRWzWj76tQE881ZTC8Dzwa7PeX28FQYKRKi7XWZjCYV3qzacgHwcf",
  "key27": "5KXsUv6VPeVxky2x7oHpyookys3mR9GuynYZEdjCarz6tCmZfnz2ykdK7GrvFfdyw1oiEQaDgdvJvmKdBHUf9FL",
  "key28": "2uzxZx2if46d2MrD8y1edwmcT72RUDm9GuTms8zew4eabbacZjvXR4VgDTkMfLfZGL2H9vbERLJa9oxfZV2EAJMi",
  "key29": "5unVFEYcqX12WQrNwY1KMV8pnsG86XCNoPsnufdrApyotNDTJZiKhWdXUTNASB4Y4kpDmZj21EYPkSAscvghEYWn",
  "key30": "5FdpoyTqjRPjbM2AsmrieztQ9xkwXjP3QsHxeAjeQL3z5tCFvZ1njxzTdydrXh9vKjSXZYSAjNVe5sx1Z2SdAmoo",
  "key31": "67XT1ZGm9C5dv3DtDJPXDVeoK53nM7piKkLJbk6grxysg65ccT4mEo2yjnn3tk7SpEqDmKiEE62mNCUv4yGsgcyc",
  "key32": "nKWFY9jzGb6XC1UvcvpgqxNijepb1yVvAUTDN33pn2Pet1m26r4Y54deFcw9bC3kuSDkJtLhwKYYg5UCUUHvp4J",
  "key33": "4eRRr3fMDMJb5mzgQMUnuBWHod4Bx7wn21EgTEid9PAXuvFsjLk17zifpPmow3e7SoAGVpfKeh81SjHAuBBmcM72",
  "key34": "5UPU5Pscd7G4UVa9c7SWSP7WFVzswHg5dqT2sSjytSLeD4ZVvbz1pAn9dxTzrgQeZ2pJgWdhuGut8V2UZtkUKjP3",
  "key35": "4ENnSF2vXyf3URcKrMizvhPrGKaFaTEdNB9Act9F1nJPg45iKbnjU4DS1p4TGkj1R3zQxqJgYCCvroumdBUg2VZ9",
  "key36": "5FUMqw3GuArpfGpuyTu8kHtSNKmrAWSQi7VEqT7GdMooiY1VyU4CxTznLmeiJbFHhWWDkAPq1UBLpVjUNiUkWWfH",
  "key37": "2tGf786QWX1WSRSCj3C5L1ESshXWNNibhqDYszS1SBuzsuoF6QuPtERf8ZsPk2nzQYEX99p1H6rQvs559eeF3SGw",
  "key38": "2NgNdoQNiVjcxDoy9quGZj4DC4zwVxmotRcfJsvEsGtnv6JSpC1bhJo7rkJhJFD84iY6bQrKhZhdN8jmFP5xqTTS",
  "key39": "4h49Nwxy78Wo8MvsCV4L1VdLoAATTyvroaaRJkgy1furQiKUvJwddt5e4TtZq7hpmKyZePx6Lj6L5n1GpY8pS2AJ",
  "key40": "3CQYwvnEjYT3hWEfweRFpyuRhzScCV8XhG2qmQvsu4Shoo9AoHaNDQdwV2yYXGa5dJy9npaFnCpvGqDtXub4vwXH",
  "key41": "3YNizJ1UbnSRKBrwW5f9Liy7LksteMfNRLn43d8PUkB9RSvNfszpABkuXDZ2PTqkpJJ4XBi6bcYTco4PekqjgXfu",
  "key42": "5DwXWvgwQ7vxcN9KxJAwgiMEfG4Z85fasjqLYFaWqJYqN14DUSXYFeEKuXX9YxsgqStd7Z3QMRhX1KRaTLkhuYng",
  "key43": "2Jak1mS1TyknEub6mCUVVPUCThHcdy63C1UPWV3Rn4yHUnP5SpW9YAFfntkHK4geAwYotTkpkaJEZbMsSfya57Ha",
  "key44": "2oic27pxT7qE1cF5rf3GCBJ23MxK8f5i6cAZi67ESypaVFzB3VgcoMcXkt8R8rrvJht8ijFfhFz1TL8wqoLvjhvs",
  "key45": "BQ9uj7iCXSdhMn7EMU7d5gSMTY2yHgX12UXQpsZo5LTBA4SCPv29ceokfdibR79h11t9GE9FGZCRb2FbMia9Jwb",
  "key46": "2vtFfqFEswK9v2PdDGRZHjrWC3s6ZKzLKG1U1CjjA9nZpNoAf6aoFfYQEBTNVKqgrj7PS8gfNwFCY14pyZBqv3Xb",
  "key47": "5U2GwxVfXYVkE6b8yykaeeiPJTSYs3bNqiywkYG2WscNKZN4R2vLAR9Zo52ybvQyS8aLZpJTiMu4vYUm425wru3F"
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
