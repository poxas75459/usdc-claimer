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
    "2XwgaVgqrK6d6XaRE3kvJLBGMhMYAhCAvMTHip4YftiNeoA55xREJcfuB7SxXcytEtCtn8KTuxohwg6TGdBVHSU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JXEchEBbgaKMAMZYS1Njc8fWBdZpBhBE7Jd1yR8iDgAk7qdnrrj9Kdv9KQpFeEMBfLuRihmWEEFocJg1cEgWMTp",
  "key1": "2AmxvvMgc4yh1A8xxSXcnfcroheH4dKY9FX3FkyRS6kvoGn74nD95Pj1p1kgd4PCHZ26ypLUfr9EVekFjnzoZTEu",
  "key2": "5PPC1v9QMYQLHMtJZHcPk2HgXCwbGuwFCuQBj1Dx5fxLbWsvky6FzHfP1pMJ2xUhqDGghcdhRg9Z1rdgLbWFHbyN",
  "key3": "PhhLpiPKj896CSCEJrPdYFeXDdJ6mgwPLUXtxCN1x5gQtCST7QRMbKYAG3neSid7wRnVULJdS2sGpxRBKFnEGKn",
  "key4": "5hJmbz5vePX4YuXEGzfXNDGg2zACHBRZeuHFLzt1Jvbr25gaaTiBq8q4qSc4tXWeaGfoiUmENXmgDjPQBufRJ6qQ",
  "key5": "sE2EgBHNg9suw2txErntsraePQk9fJoq7CQKg7GzxWBhQFYqvh6qXU1AhaKNibTAKTdzYYfnVHFaqrpYCnLdFF4",
  "key6": "FUm1zgXaeMvvn2eCyys7HNWwCD6s2c3CDBuNpCh2Wbm3ZqGaXdiKyqFA64W4mmtkgVfXNmtVkAEr8UomQtMdhF7",
  "key7": "gE3EKas1N8arhd15gi7uiFVx2h2MK5HV6YDC729qExL8GX6iwNHqJboBMZaA7swaB24NhYZ9CEbYBGu49B5uX2t",
  "key8": "36w4s4QUh5oR3SSBZymW63sAev74LEHAYU18hzySHQLHj5ec42zutbk8GWP8VxHBkcHUYcr3ksBg11rcRwxrYKrP",
  "key9": "q6H3HobikvjaWrWiubGCWVVXrxXcsF4RdpATMunQz5mWypyiELkKpZW23Emyr6PFrvc5RyotPDLSsJXi3FDtWdL",
  "key10": "5vdHdFYsjSRKop2TWPMCHXzuidMAkHPbnttrUjSJy2xwGbD6Uu6jnRT2uNMK3ynnW77jXnVUgeRaENokbpguZS6V",
  "key11": "4mNWjAPg7tJdMhfnuDqPCtrAUoAXSgSsW1wTPNLgsJUuVMUSNXKN6EsFbwJZvM1zPNmc3TGPdFJUXZUrnPENyjqJ",
  "key12": "2mC5JuKdMcNZXmhFoTqadnfTVk73G6XgJBykgTMFZZYsfsxRCQXdphprq2kyHczFjSFUdjfUHFZa1Xv2LtkAHz9s",
  "key13": "3eoDXb7ejTvdd4y7E4hpD63z8PSRhN7pCS4wN43f3pWv6DoUG8aQF2Bg6PatCFwBRSPGwDLXAQahzwBg1sL27DPV",
  "key14": "2jGwi6XgzBrzTzVpyGCSw8YioYmUg2osKzQxuhy51qcJhzCEmWgq2ifZVVz38GSfQwUyykhuVBgB64gDkGnRYboN",
  "key15": "5PRGnRTTo5XqYwSH3QgP3zWNE7y1BLDwBfyH7rK8Mko8nLxy6QoxW1Ee68VW1mi1doUHwoqfxmFEL2g7Rk5HCUNQ",
  "key16": "4Lu63eYjgZ8MrKkY2KKTVF4KV3hExR2APwuZU2He7yoQheNDy9sytg84LMJK7bwG8rTDsdzyWuPztVetYLKRgTwj",
  "key17": "3BgUUsd4pxh4kYVNjVVxEnrMdsLHEvQ7oWYQCoJ6sAQooX1EmaqFMQDkkbc62gGEVGVyr1DN6EunQMuRhR9iDpKD",
  "key18": "4vrK7HBTQRJvqVNo3c9cCWFW2DuWDKh4yrUuAH8323HvBTXTpPQwgUgx2Vdu1WfyAtoi5nyoUeA1WkckCeXRdmnn",
  "key19": "3PJjF3xacJoEnjAZDzSEYQqk61X4K5wdsBJeXGAKe9E3FEoVHtKa5Ss44HxQCyh7wYyLi9BKYYXddk1o4hGyUWUz",
  "key20": "3zUHFt8tzYYfc2BCm14fZAbFCWpK36XbeFnXdiHSM3wnH7aTduKdCHiuhZZogisXmJpzSbxk5W9DfTSm6ycASpCk",
  "key21": "5gTfFX2yMhEa2fCiBLdtSXCsBXB4uEdjDgvps69ErSke93E5baFToBtMmhRrDoAXtVyK4V7yLz4r7mcMaCsTJhrr",
  "key22": "66cNdP9JTcWednstQWaUsQoko26j2jUpJbpbBgBC3yyb2gLqtyiuRTsBpzZZHw6Rvwh7CjbuvdR7ZJMYiqHiHcS9",
  "key23": "53UJjtVYvTDVLo8exUcLWuiS7N3m91cJypVLh4Y7Gsq91BxaSFs96wd7zfx1kerXWmJSCdXyt8nJwuxgQL34yyii",
  "key24": "xkazPXNkwV8ipeZcz9gq4iEatseLe4KuSXFpLEGyYM9YiBBFmfM4siVQBq7zZjikjLQREMjyQ7Dv7iN7e2i1ArQ",
  "key25": "2SnrC8BNU3qhuLJuKuPdyyf6bTUxvQPSGrGBvCLmA9jvFrnDdES6XMiZtTNDm16HisYSPDcQReMdBVkYBrxjNNNg",
  "key26": "3PAD49iCLQbhZT5UN3efwou7ie2kQBKg8oh2stA597v8mYEqcw6AUXHhG1JVTmmepfjXhCGUdJBcThZdB5ULtavs",
  "key27": "UubqkEf1vCyyomV3fQHeaPkz18vZ5MyRwgTnN3SoGQJHkAL3sppF2KXKFWFoXJPxd8vpWgzzBts89NdzAzs5sWF",
  "key28": "2khKFPNEpLQzsnL6Ban8SdGDgUGCEgZZX8VsHR7LHFh9cAnZauSiDJpfcbo7Pug56rVQBYzsn4gmSx5RtChHCdMj",
  "key29": "4i1jSD7iuSazPEohHasCd7uSGsyrdYc5rUdCwoCCb4wiB8k61E91Lo8FzQruKjbN6xAf8kkF5CGdaqrvDJc7HbU6",
  "key30": "2DigsXNrVqDXydK7XzZk3DiwoNeeYNoVQ3sV1vqJBmQgkvKLT564KhS918xYFaxsjEK9ayNrjWmyAtdumRTZsrYd",
  "key31": "2TjnN8HLg8imwFMQUhQ2kQ86KCJB5WKQDy1NnNhS3BU6ZmRUrNYPGdswsGAHnKN1gWGAXmb5gkYU7mLpTFSaLK3B",
  "key32": "3chs8ppUCdTbYLqe7EaooCttSJBzx1GtbYyF6k88YpFL8DYeV38679RMTRAzyTampQE7Az5y3KXog9jHtSNttwvp",
  "key33": "28UrPBnUdmXV9weHt9G6kHY6qMngxfya2t6rNEatbN3Xu95Z48toYHU45aKCsUJwb5TmhK9xYQSBhdJuqFZUiw2U",
  "key34": "35BhAhJuf6ontptQmDrgW82h1Mh4WUKJA93hJt3YMxCvqKq9C5vNEZPA3qq1cr9f1RrcrvaK8GccVFHAo5akH8S6",
  "key35": "ES68Y79tcLphZ1APrWAevG2DGKjVYedHGKfTEDknny7t5vGw8ZJv4tPAQvg7qAV8VCo6Dn4RBTiys8Tc2PFiFAD",
  "key36": "4e3PEFbSqJHWXFdcDbBp5WqW9wTdfQmA2KRntfaakXet6Gd9zZkHDs8qt2t8Zi9Les3u5vrBc1GHHNSPnFCRXYyb",
  "key37": "5SFJitd9GzZKSH6rtSv8E7QeeeDoCTceGLQXyq1iUoywKZzztAJ2bTT7Ew3rvSQ3jVTGGbNdAED8ca1yEM5ydGWS",
  "key38": "2sXkaLT3DNm2kXp1sFHptzCLALrb45QuCYxkW1GNZBPJ8DpytsPE4VkJwb73eq3NFoab7kbbaA6ZdtEuuU5SW6Ak",
  "key39": "2fxJVbeoC2DthQykcAxpeT8SerPd7KSQEB1QY3oakNnXG3NMBZySN9dV2EfQuAbE1greddN4nZJT1D9hNQnLZS4F",
  "key40": "3BoA7f7T3pEpe7MtxtFF7TtBR4CzSBe6YSvd1N8BRLTkBgKs6r1D1zbmH2ufHxSCyLkFHdBSjMe4BMr8sSwB8a5a",
  "key41": "3BRaW3G7wQrB2pAAXMtiAVivoKQ4J9w28ruZXcKAQ1soiWbUk3um2mptwwRFwgzvSui6uqBU8BeiZGcXJNBbvZMC",
  "key42": "473a1H7vZoB9cot6F4ZzNasHGEBkt2oDKc65xZNqcdt7Ahh9wgyY4n3fMjg3CpvBmp7wUwK4mwjHETcFGuRYkNEh",
  "key43": "4soqd7daaWoPFEQ1Nxdx7mpc87LJRumYv98aX2YMxzcSQM3sFwSZ1wruDfZdMTTJmW5PxUkjapbtgZCoq3NxwfVe",
  "key44": "3gNxD5G9zzt5j2JLobyiz1qUiFJ5b4gJn4KNwKcdYApMreiEbogK651xSJSBGBwrrEvCp8yMEChFkPprKy9fo7f4",
  "key45": "2rFs1adNEx2SVwzfAsXsaJnUeHupPmPh8N7UZKvqi3GUyKEspe2j9iU7zWJq7XUdwAjauQ6bPrve75c2dg4Dxc37",
  "key46": "2kGN95z4ajmrKkytrh195XKCz1YnDs19yF9PTiEYu2JE9rsNwekKSin4vUge3N7TWEf6SBUb9mpFEA7FcX2rLo9q",
  "key47": "26gL9Zfnj4RkhHxSDJAVUuw3bvxMPbZDEY4eZ2kvW9vUy7bREcRES1uXrmdpk34Twc2kwEQtVjfkRSjnWdRdmpZW",
  "key48": "CiYFiQPq9Pand21f6G1QLadSeJGWLLczGb7UBBr11ahtyVkyGubvtLWc8Adv2SnQWHi25YGzmpq3FHaQxHBddCn",
  "key49": "5bfw7BLyVx1prt1P1FaemtZSKTckpgqGWxQk5xbDAvNiB89Fiaty9BJvjWdUVUt2G8TvLch3wTNFnBRUQ4f8N31a"
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
