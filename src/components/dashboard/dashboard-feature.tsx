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
    "3AUa7E5AmXyxJHHBdgU9ZZoQgevwXnTHF8ZW7qJq9xJe3dcdGb7o559tgvy7ZF6JFouBCq3RzRFwUk9obxZWxzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25GDNGBbqEathr3ccTn5n5JpAfX6RkbSc4nHRgUa7xvgGafg3gH22x5hXyd2FZgLqzJBn98Rnk9zSnNg9ZACn4Qm",
  "key1": "4yN794cJybzcX6FrbE9z1czyqkRr1kyuetbQVBsWS8iyQKNLSgYaBMTRciNRLrjaSYkNRxYitSW9jDDdbN2uoS5N",
  "key2": "5KMNkED6kCuWZwq7dW5JtPZgH4iWewUXCb8rfKTD1J6pZtEEB3hbuZhq7dKEJpDbGNyGEP2MRKdKAk2o59pmkcfu",
  "key3": "3VjrGUSDqKrZFb8MKSZXZAQd9gsScfkSBnnuUSJEC6oA5WBABXtkCYihoK3nrFgNr9xWWUE6jvkGttyeqbzmpdWj",
  "key4": "4PUX1S4LpMoTSkM6jjoae6hD89NymfvmYr8Nki49dSH74anEbzTU1eCjgEY62yMSBCzVmFk5wyafKoNbu9X8TqSC",
  "key5": "2RQV8CNYHYdfmB6YXT2Az9p1NPVdREVpn7YaJmieLkaqd1yvYZC33cK5Lm5ckZhMVmZYYkABScXp2CEuiC1zNgge",
  "key6": "3nM1pyQbfVoAr64isP3yrQ7DFthrv9ssTh1LmLLv2eMMeVx497b7Z4Zi6KJJ6nvqdjdhb41gCirtjyPLWV2uK5p8",
  "key7": "5LeT3FtehvPwSmPtEDMk7NTHGiem1SJVzQGTUAovvpoNxwapJmZ7fdGVgxgRtx2VC6wDVR7B82Q2c4pc9viH1tS5",
  "key8": "5y4yfst7XUtwL12zEX6W1pEX49QaLKxmWhUHdX8S4QqDXvrwTmPcEvVhiX8rhGVKKaNTku7MomNg9KpYtJo91E8F",
  "key9": "4FrUyen6r3RrdcAsdbeAtXnTjZDd8wGyGUDZiKacpN8obeHzNRiwmYg8kowjZxYNdyEhec1Cg6cCuR8mFdncP1Y1",
  "key10": "4tgVnziKnVW3pYray521ZNChF5m6qfjSV9HMszCf5LAojtofjSjvhzKyfFgG2kCb81TABkTeGkGow7T2KWhgAQ4M",
  "key11": "Md3gU7AFQc5Pc5StFHfeVrktRpcEH4kiYqQbtVHaS9UZmDVLgwCTHB8XKpoLtykAYqtmouqMw4pGAyE3GY4JaAz",
  "key12": "2Kp1uXXt3g8TwizxheYYrD3nDCAzCwUrYVhV8vZBeSV6ALr5JJbv2bRsKwkHbEd8Jxfe2Dq9msNTvGTNHRdnDmr2",
  "key13": "SrB464BpAWMtJcCGhnxYo6vx4ynpEAgwVZgTt1gSbi8QtUVgK4zYbyLpCMBpq3Rzp5AbhZ2uhX6Mm7EbA2AF4Mh",
  "key14": "2TeeBxE9Ej3Y7XbU1Cbggkb7wrPMGQWVvic2TjebLmo58dVbe2UisxB26K5usNE8Qypd8xBE4Vp27QtTjSBa7fvg",
  "key15": "4EDxErf7V1iza2aoh1Tngr9aVtSFTipEjYtFWhcFUga486jVRFFYNmtLkKk9az4HZeHxRvGBcZMqWEF5RcgfaRsn",
  "key16": "vu8bGjjQySrS9kJcC84XdexiWLBdxVkL67Wkm2ioo7pRDXR5rdm9r9mX44iVvZZyJ8iir9zDmFTcrmxTafB4pWR",
  "key17": "9PKeDJzrscAZg8pyiFACxR4MePiMg57p7AfFomNDgYGcTYGcgWLmFS9yyatog6QnsknwoRQieR1HfJ14pasx4a2",
  "key18": "4qiho7md8xmBYGTnF7vQgxN1xBAgdzsiMrtEecM4zcAGw1YEGEE9WupH3k5X1hAiNvriJUEtBv3icq8LwA3YGi4k",
  "key19": "2A5Ab5RSTrcgBiVTKjEiJZZQueP2PUSbQ3sXpaa3ABs9YWQrJoQmJ12v5vgMCsEtr6wLZMrVMak8naapRSFw1iuU",
  "key20": "42BJtvEZ6NRPqjuPzhoJ4YrgEWn6i28zr3mh8XHwDvaPdiU42zr5evFFuq1h8U9duhbwUx7DqMMoxKmEpcPHF1GM",
  "key21": "41J8iVLLMkh6pGJE736QPjAfp4XfkAASfEpSDdzfEUQXMzX3MptbJmbgmWLVm2vk93ubKje32mwq6gAqvZoTGABr",
  "key22": "3FizpVHH1GxiimYuwmM3RTNJxV9aEJAN4BbvXqurXkFW2jGhM36wZoNjUXeoP3mZpVnxQthrTfwHzJkvNQ8yueHZ",
  "key23": "5ZUc1eiXk3Ktju5bbB4WFEdNdNZLMAJFAMNJYNLBBCcdTSJMbvmNhYJzhHPSFUEqUAEUdx6Xfx1bheGujJW1N1Ub",
  "key24": "5X2N9d9dGC9Bo2Xnr522VNws25CzBuCqXTxw5EuFATStebAY9TAHC646ratyB4QPDZ9bKKL5eiAMg8eQmweBBAcL",
  "key25": "3WYdj8MEKVFP6uLCYjc38BiHAZUJ4fxcVYMm8eBKivkBgjn1C2ygcmvzCiyYd2BLN2hjxv1nVJL3YSU7DAqorXeX",
  "key26": "2NsdWFNYQvjbtyNqg9Zi2EsvfMVgYtt3ySdbL5v6iMAkurwz8AebVV9uGDnfWJ99mzNghLrDiJkKaJMaDsX7sPR3",
  "key27": "2jAUpvKKV8NbivuwZhevHzszFb3P5pMJJcsmE7YJ347JTCndBndsqCJq6KGL6XeJpDSWXNRC2spZ9dieRTh8nZC3",
  "key28": "2KBoYb2tPeAFPpJ4FcNJ56LdT3EFp6c2ofNR2t9DPmeGL5grr6A4F4RWgLQJMgxNJxxugGDJezfBMw8fofYSMLke",
  "key29": "3GvEAQeUkabZWicxhpAjbMDMgzp2c8zhEDsGTTPHfc82pJc9twtknomW1hWjTFjXp6s83NV2ERUPzWh9xJRXEdR6",
  "key30": "4kZ9iJe25ZRWoTi7rTXKZ57dAALJRA5qukmVh1r9GfwzDvcizXcafp7y51dks7huvXgGN1xhiTSCcNJ1imz4bJnX",
  "key31": "2rEjPBKy3Uaz9PtDhwR9xDRFRLNSMkee9M2BoPjqgf8ygnjmJi1wMV4kMeSQLR3K9nJFueMV26USnCQNyR8ZjcjC",
  "key32": "Kdw2LDT4uLSy7NQtAEJYGcLXXJXWK8LkZXMDDMytRA6SLqadJN4SySbfwjoquUaUXcG2hH3TbgBM4XC3YDmg2WL",
  "key33": "2An6cT5xrDmaYQjqBKER2eTLWB7cxkX5SkN3vHngn4KFkoaaBXz4LFsFFFps9nxzBVSbFXpFMx45CczHEXJK8NKa",
  "key34": "v96cGucqNjXhUyVH6PXcmkudkzUPxVCoh6QEHF5A9TGhTa1ghM4VphDMXBnC2kk1xZyNGUmz7iqcMa9NTMgJQam"
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
