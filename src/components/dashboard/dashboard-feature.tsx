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
    "2CnvhUrzFLBWagJHgNB3s31XSZBMuT55XCHHnYWaEroLRbC9zdy8DxgtnymfuF6JhXA4iFPp1nah6HPLZsH8A7hX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Qg65qnd9hKJbKhqwsKnpFAu6rLiSURNWUKRQF2PhR4rL6vUe3zdFJ9TCG5cQ679PqEau2gRaYEtuSaBCauniRN",
  "key1": "3BcAVP4BkXU91F74bVBgQH82TbK1WwBWU4qNunWehvq9BxD1Uew7rEV89GaSbWbinPxziGpkfZUxacbqdX4HpbWW",
  "key2": "4JSpUJWUpmzNAeELRVYnjdaSLuoqZ2EULZXuz8uFRWq2iwWcN8vs7q6SZxGockfnKB8W6Ags6FdnKLfWKjueuojz",
  "key3": "jdZYu1R23s3uSJpi49DQDQ7K3KrG2LFZsXwigX13oAD3JeFJQ2FzWZwr4WrkbGygq2g3uoh3duA2wGXmyCS4gFV",
  "key4": "45cNF4CWn6hokiwAPgGopt8sDZ2mVtwfFZMeXarmDSQNmtJiQFT6Y77p1w6uSMT2n8VDbj2Ln8xHS1qW3yha19Ja",
  "key5": "5UEy3Y46QC4E7hfes9QFRopVCPJ635x4R8H7tRNieYHzoE3PqcVaLFyJxpyL3c8U99jfecFTxze91yGqhRjG4LG",
  "key6": "4aRvLdtBWvFjT7GvZPqUJdjnu6ngUJeqrKSn1NRtAxLafpTkC8t5SsEFe9FAg9gZofmGYD8nTBFtkDUeQSBrbTmv",
  "key7": "2UMYMgCB4iKqQjfCY7ZJxB5h8GNPJ5Z2Cz5iS1Y2hwmVT2xH8AaPmgLvooQKApSxkVoBqdHL7HEmuwVw2eMZNm1U",
  "key8": "2BgEu5ozWTaKXzssthtjjyst1nhztbFcFAyeRn3ezHBNzD4uX3C8FNNXmNsP2tgKSMBzdEVo9nDjy8BWXJe5XV4n",
  "key9": "658ZQm43o2ULj11dgrD5nzYxMfMsuZxTgSf1atmZPuTChLymLZyVUxKf8kxCKCDoPNP8tzukZAj8mKPxzZssRCKL",
  "key10": "4nn3c3q3tcCEMFMKZJQzjKkyrvMeutgjYaZZUKTtwxtm4EY9PJYmTSqpTkBVFAQBnStSZQdV46yr5yURUvQWeJXF",
  "key11": "2NXQt5Sw1atPBPiVvZVYbHEDRBi9KGhVGoahnapK87s9U6yKeM2QVxDvcWaRUfZNNArve4GiayuNLhuYFpms6qmq",
  "key12": "2gGiUBERz8w74UHxia1LQAJTu8JNW8cUTYMLjGQkYwXBMmxRHkXvt9oRh97uQ7QMNd91ePWJCXZytFNPVtVQKo23",
  "key13": "g5m35seDbyf3zALFreNqFAkhK34Hfs4JiLAApckEPoDRHfhMxygAYn6oAsiviHuTPeQ6kHvsatFcGyCYEg7Cvav",
  "key14": "nXx96rwyb5qfUMPsp5xu9HeMqbE8jGd5Dzjftrs5DJMb2u32YWBUEZk59KYb2hXx7TLjdSBGv56WJgry5rRbgRZ",
  "key15": "2vkXeW8pkSoWosrxYMgNzuu6ByVmfhAnmoDHijm4So6nCUtZ7EhvMhbnTkf6saq5dirrtDZ5BgeM7fQYPv4eUvax",
  "key16": "2mmT17jWhcD838puXXQHAQLkiKs55GK6wSNiHYuGh7akBd9SPkdspye9NizjsQ4MeqSPn7jCTgauywq2k3Giryez",
  "key17": "3uXtvyaDu9r1PaQif15GkAUYoAd7G8Chkg54jYowP7RruzBQXDJ6EDkg5jHiS1tBU4Dumu3e47Zfi4ZqacYqwu46",
  "key18": "4RJSUYta2eqiiX9b2hvsr3EsTDqWWkfGuCvoLwAUDZFYmBWZCsmMPbubY4g3vsCVTVud1RHzAQ8QmZ8zYMLroSj6",
  "key19": "4tUs4kSmk9vEW4Qzg9fL5d6mJPk7SnPt4msHckMcEWg8m9ZuKkYwwxBByVh5yJJN9488uWboThGKkUmUEyajwmuP",
  "key20": "2ChUBjeC6Rsyoi3sd7uWboVSEWE2wKD1hCtbS52hn6SU2wFbahmDbqGgVwHLDFZnY8kTJRtB8n9ZFKRZo1vBbZCj",
  "key21": "ckN8Mp6N1zEqcVcjmUaTQ9XZLZ861QgSEQM3Nivd5ux31vdEHfXaHF96roLxRnSkmWbyHwVzUEyzz3SQUnP5NC7",
  "key22": "3Vw1g7xYBcQE1TesUKqRJr3BgbpGvFjYatikS1UKHEe6419v2ZEsrqjTMJfimJaprbELYx3qvs92Vip8ZNG69Nwv",
  "key23": "4nRoSp4SvTkCVT1qFjeeY7t3oDeSk9BqQyzFjM1PUWiHBCeqXM58aLSPrJGgaSrmVX1RLVCk7MJqmgJEJBGWxep4",
  "key24": "2VZiuaVkFiTT1PoCZTY7vPVWzQNgRQWsajK7EkrfSDWCm92G35HaapduBuknN28b7KdeUY1w32KKFh3Q4GGeKE9n",
  "key25": "6hCUaaEFrLKT8rDhcWYqDWDPXkJkmVYD4WPpV7ACvfaewoG67uLacHatHESeeLPnc4mxDypWs6ZbJWuzDLJqRxF",
  "key26": "4E2qY8g9PdNv62W2Ez3aNJsAT1678RdJV1j879uHpBDE7k1guUBNJz1ZcFthdYyfam9EUXLUXk3Z7gbxLJ52Tuox",
  "key27": "2SbxxVauVEgLUuPHzqjqiKpbXDEQGpXC5zFPKiUJLDBiLR1yn5jKCTDBKpQ9aaSbocojVSmdEHUXYLmPuYvYN7hM",
  "key28": "2BvdrisjBSPeo1JJGjnr7tThqBuUemiEmCbHLn1nRqSieJL46jD6TEDmNTXpgQbisdxuH5zyei2HEbH2yhY46zWX",
  "key29": "2CAQDE44nhY9z63bYrVYdmkP6hwhuicX7xesFYDqagCFjn1j9Tu6FNyJUKhLUWwJj6yzvDZ1ke45VC3XE5FF2YKJ",
  "key30": "4SZ5821SbMsSzY7eyyeCFCF9SYaWtn9Ra4Fn3i3Vw5C61bgq5sWhTXHm2WKLiDtnuLzu8PeGRSktRAekwFi5iHAY",
  "key31": "3cuGjce9fskL71NhB7q5GBzSghyQEvmVjrecEuuu6WKVPwwbSGDWVp2K9RJTaF8zJ4HjubFGrY5QMd35yWJUxJYF",
  "key32": "2gHgvgsuP8M5kC6xmCpLSSN5tBw33jNY2ALb1hYcyquLxM5Ge6XTFS7xHRnCx75STCzoouzhmTPHdSCt17EKsBBd",
  "key33": "4eJM9GoTLNCCxM95B9LGQ5c3FgX6MZBGM7cGAbWtoBGsW8s7LMZtPySmr2wo2hdGGbwgz5XifJPN8PDQPTiG37vY",
  "key34": "Jc3shcAChfhjUHG53SRxMfwNpHpYFwDA12qzurfVj2PP2tqvHXQg96za3oq4FdnSTdVGNWdkw8DcrVmEtxRr21T",
  "key35": "5YnP7SDu8tRgkayzAon8ieCWTXzcxUmXXjfhfi51KExf3ZSqreReV2AfVxkhNeQjou1398RA6avbvNQVHZbFpfgP",
  "key36": "5223mMsa5hmHNhGVQBenVELwepjgjz5YBrGU52tSGnfEW1cZFEs34qjmphSKeuciffyP9EMVLxghBvM6aGQ29KYb",
  "key37": "4AgWx1jUqtZhLz5uKpALX7X8LnoibBPDxxFkERibkSiL6GtvsBKgRuYsEDqzJ8fPGXSB7XaJ1RuxfV6nkZwunSQk",
  "key38": "3aJFb9Lz7eUmBo6vwa4r2gWEZb1VYYev1QemALVyaokBYuEAWod9aHbQsVxk4A63UZUvVPeyP2NYc1BLyaWEpzhb",
  "key39": "5yR6u9yh6UvBGrbLaYm3xnowJ1Lp7HpTkr86k2ogVSWTR6E2NTEgbTrphwKK4Nz5STjL3iN8FECwqEv8skCt1w7L",
  "key40": "3myD7qwaZ1WseQUbU6csdZXDAvyyhbuWtrGi4FZ42rb4qrCbn7VwsjU1pr9PvToX6abf4HuWGMvKZqXNT1VW8D8u",
  "key41": "5QFYeAJEqQR6WJyvR95m3QBWpHbaLkr9TqYR3UmyF6eWMNYiBKtGA9L3ZkgdTpx89WsdFWgvr9pM14uZMwJWLkGx",
  "key42": "4TvgRcmqH4mmE534Nd6RpASRzP5o4yoDEtJSPcHPzNmYKufcXFBdgwXs7SeR3jPvoq4mveVdMENBTSobcMQNtPDv",
  "key43": "2LUFzpJMHtXqkBGtdXAnbrzaCVgxkv2ZeDwdaqUxbxAv21HvDorQMQQShExmqxaDBv56ESyZ5TAkQp7XGPj6k2tk",
  "key44": "67RXzCquJEw2baRbE2VYtGVFc3LGt6GqLfSgQvqUPw2Q31uLELu4jfhSTgumoQYHpSNafiJs5jpgaw1uqn3W9TZ7",
  "key45": "4UBp85GcdS9W76zC5JTrAD81NKKedYCJKApk5caNWpKNB8bRP5cpUgbaK4VwkhwF6dKeq5MvPxmsp3dUGeXjPhTd",
  "key46": "47mas2vfMRjiBTv4kh9HRrFehAXbwWmsqr8AnbpAVBkN55uGQ954PQFZDEU77nSz25Q7uMGE9FEbMsvaa6WavTGA",
  "key47": "4KdiKf2et1oWtDJZBKewb19XqTiyhTJ1u2hRxQ1XHEn1h8HNrh3bVTSorii9nGJZ1NfEWRhthUfYiKemgC3KywFz"
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
