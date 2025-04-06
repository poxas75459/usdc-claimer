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
    "2rhJ8DDWAPPVERY7fksXRTW5mC5LeBShG9R6k98x23dgeYTu39NVexbfdgmevbcL6d19DwuArRuPF7S7WDZbvVuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qh9RGCXhjqs7W4Xb3Vk3q6Mo8qT8nrVHAPsgiTTYJ2QBoBiGQmJ9V5KdiV6BGbvYVpNYqgm9jy21xij5dFhb9Q3",
  "key1": "5runi987w1WQRcytutkLu3N88Fj5QTVaTv5yNC7CPgktCKzttJLsdRhCfuZjLEA1p5XKRu4u8CVGdTXzbRYNApyV",
  "key2": "2DVVaKD1RsreirVWjdup84MzQCZJvAQ73xAvAuzVLw1u79baUUjDc1fdDT8RsYptsRNWs4K3uEPpzdMMJMH4ekUo",
  "key3": "58PuAk4ReW5NNq1PbEktXUAYxvG5HVTi56SJ2i7r1JqRETt3DaSi7qzDkA8oEaCW7ooDoTSUgwkQJ94vJDUbzMUY",
  "key4": "ktjKwhCX1vpdZpdk7NZsSDErsiiacNfJziLfMA1mpqB3j14Le3on7cp9W1X2iAL5PufS8Bc6GxQU3N3KDbPX8ip",
  "key5": "4hm1t2rEZRBaRG2q7KHnFzAGPZcPXQ5MpKVm5sud1C3FMtPw55bS5sKQdgHea5tqLgjyuNNQpABdJH8WA823Ufbk",
  "key6": "63TBMkSTthdZmBfVYkZQKgxoqmN5ws1RrEsBhzMFCgSHqVrHbfQVdL2gKLSLEehTBB58HgoYZh6sR92P8toVzkuG",
  "key7": "9ZqZWCpskLdgGSAWe52nsCV8KALZvMvo5RXLiwScVf9GwP2cdmM5xMJpLAxQyfEaKHEE9ZWEQuy9pdk5EiJ9Usf",
  "key8": "2Np6vspc6HzC4EAYGGcpqo2FprEMotS2p9uT7EA7JVE9ARWs2mEAaeLtqjS1Uyb2CzTVqXgPgRRdMrVjF8dy1A7R",
  "key9": "5DK5S2jARWQApMXeVmmM1zcsJ3X7PrGjSkiUhdGJKgDhJqGJmGfvb4q4kK9dST1DZbEE6u99mEVAM2NsFzLK6yqw",
  "key10": "5ahEgiUXVffCVnPN3cLSMYwe8tEvxfS44XMfmewoBaP8CWnjS63G5FAdQctwBS4ZpemnJsUujiEY3FXJx5PUrTNX",
  "key11": "4ZVnLSvAruZhAD36wbDJgRUfhmq4Qbhyq4iUUyCknd2kxgDmnNktF4RhLcAqqYpUeyriBWTMEcmVCEV4aBTrxQeq",
  "key12": "4QtXe1aknvQkRHQ5cAJCmSQ4oUCQQZVqXxoZ272xWEMr4S69jSBnBs5cWjNsiPBowzRiQSciUBxbgeXdyGoDYRqd",
  "key13": "4kksc5RWG7i2kdDZGSdrp1czeTRgdSXcWc1rcEX41xx16W9hcGMgDWSmbEr6QTpcFozEGbK2Fidd4ooEoZDDDYJB",
  "key14": "4jgmXn7gmZz71RmLBPa2Vkwj5m7HU3kPSa9zaAVeoM2DNt1M1ShEn5Hy56MKU2FtUDb9MA8HWEf3C8M5nHaBcyLa",
  "key15": "3vLHSLJEtDSzhjzEzvrzwL1xBq4Azi3SbU7cdcCYqXZsWcAkENJ5Wkc8sKYQwgw4ZszJ98vWrjAN2FDtMvT7am3s",
  "key16": "5b7YJ4onWEnwVj3nXR8ZjgZqsSJkRKauLexi1dj2eMpXEdwZtMVgf676QjB9d4qL1vFF8bKxHovQmi4cA6xvGtu3",
  "key17": "35MFtked2wcVisd2oPGWtz6y7C4ra2W7yQqEhNAFQS3t3Wvrxw9rTrQ1rRuz5fyn47y2t5Xuqx6Ato4A7VL6GjHV",
  "key18": "LGWRnn1qiWeSGst52wsZG9CAtw1QYwaxMk8i2tUhdy7WJVQcSNkHJ37C6Rz6i7cLYAipFxZzbJjr7XQwVVaeLS4",
  "key19": "3yHtMnjWCaVGxoi6831FwRx2gEhJF5SoHyJhzXTwBJXmkr5c1vzVP1HdmcqCpaBqvvoHBQsBETH51g7cJksQvkaS",
  "key20": "64ahjATXQXh8CZLjiwN8ZB18cLmvTTeSRWSWJT7HYgRziJQYUXNqeK3Zv3rRRGJDUp2wPKYScRQV3bvWbMGRavtq",
  "key21": "4Scv4irwevPQDBL14xJKAxywTSMvDdKU4tzPYmVPkfiZmTgBQnzwhT5H7Z62hpxMTMbssifVADncSugPp5QM798c",
  "key22": "4gabhNDgycrLp5Vr3BisSkYgPeSL8nHdRPniMUcQDqUSXZQY7Htf45R73LNmFUM7AxxbQfV3kVRUoeVQFik9G3ty",
  "key23": "3e32xkVyEjaW2rVW47XWUEc6nifWSufgYMZdmtgNkLL2xwhpV4pioz7VfYgNZPNGZMPnoYFhqwJnEbuzXSaYCoCv",
  "key24": "2M1LaYYBEKsWPi4vMMS58VVuKXCsGZvnU4jY2xq6SrMJ3jZbgpZeV6AXaZtbbSgb9JYSWg1wzDvy5JYrACS3gzrw",
  "key25": "4EB769w7XL9KEkWL7PzRKDC7zPSSogLQSLT6ctjs4cRCWZgXdD2jAWCXBweuCojCiVL64b57N6RJZwG51sXKffbe",
  "key26": "56GsMp8wNgCoaibjQTiGUW881ZZBwWQywwnuimREoKRkTi71XqLH1Ar1R34kHr4xfU54dXVZzGt1ghUcbR85WVvA",
  "key27": "3vq85dVQVDQZmbn3Pv9ppDDS4Shb3BJZFXebkz4p1mwEhqeWFnHxWd2u8QiNeoy3emRG2uSc2wo1MZe9WvoWUKtU",
  "key28": "4FyTJa582EqMhfzFvUouJ7eb54oyWLHBAXuemDuhkfkaDsgFajkdsHn5UTEXeJTHRa2ME2Divk6V3owDNzzxsEm6",
  "key29": "1q9awhrJUMCxYdhNumKLx6DAVmtDWX1TZYofM7Z1CqQ4JpNy4FpXbSvVfyYTCkuajmehosXqwWtewNYasLeG5mE",
  "key30": "HKY9xoTaDP6aWQcFugwv7Rb5qEYvpFQUS4p5XBEKLbx4EWnRiL5t1CMr3AgJfa4nCbSp4rXoj6ydrvp11uYSLLm",
  "key31": "48xkRxhiK2Wnq5F6Xp4dx5jugmnh6SP1ySPNCnEcMT85oKCDWnEwDtxD8PPDQ2wHTmKWoWn6tmgNFzHCoKojojDo",
  "key32": "3ePSx65T6bWb86MPa1wcSBxbcqUFBFhUZNnDJyaeCwEBTJ9Z6ZYk2u3dDgkxaMv2VhUwodtjTLPZ1oVKWcALw87Y",
  "key33": "2pAVVRAPqTqPaUdZVdAVTTftEYi8DdYpz3whKtyA17yXUkMY1C1ncrSHizoJqH2eVCg1gn7vgRb9ZqEHppLbF9t1",
  "key34": "48grDi8HkqFbekFJbzi2fH5EJBPfQZt5DSB6CaLqTfujafGxTmfVvTMgkeYFZ7HHCzG7NjsyRKzbQ5kfztHSETkq",
  "key35": "iBqNcqpNSE3Dx5cGma4qJHb7yWjaed8But56rto9odQ1FkQULca65HvSA82y86uZfdDp7Qp9aNS3ocpJgoNuSqN",
  "key36": "64XceRcbHASXr7uADRcWTEjd9TRte1rn5DpRKbSvhtP2tUNZBoX9cK8P3wRyB9RivpY8dJi1XXYvYugb8DEdD94d",
  "key37": "4YLoKu7FBRXhfLUAfgzqyRyDoQRyAFG489QDXBEkBF4R9WoXNRS2RSJC7NdooWhpKH3M3XTYRVmvbARD1pB6StQ8",
  "key38": "5e34xFGEEAcjwRFR3sCTophUbQ1tvqgox9Rwjy9w4Ff2kfXNnsisfVvWvfqFQKJdhFEwLUnkCPqBc7pT72hir34X",
  "key39": "w7B5G7cHje4ppmy7QcudVgLc5uVFdXkwc8FcqGMXsPQYV3iBAcg26zoUQcUR5P4s8e5sfXVecL3vJ4TKb6VeJwX",
  "key40": "5LU5wmW2CfSWzvmBSeCBEkemmpYysB9sn4jpaR8RJ5cu4erffSysdqsu1WzwjCgWeVtBSgqBrkPzGiWVKEv1zfMV",
  "key41": "LZ7ntQhzd7osQ1gAjH3Po5UyLoHrKN3BfnoHxgXRkN1HxzBhj6rKNLDMKuf5fFhQ2SzTQPGRCbKsU4i3EjTkcRm",
  "key42": "5vChK5QWgx1xvutwoQ9MvEG8cvDhUBz3StnZLrrQHkW8FvshHPKJ7wfCeC3CmkiGPFARiKo7YuefHfmSQSUbJvaX",
  "key43": "25aCj6dK45uKTgyezTuCZoPWcVQiHPbomC8VbCL2kF7Vucf47HZZYGEbSEVKhAsH3C8gbsg4pw5jCWCfoo3UW789"
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
