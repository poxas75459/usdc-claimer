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
    "5vMExayCypJXwDYn75iQaYQru6nKfMW3dJygx45QjDbxME78aqsAKf5H1fCcxZX6ES76ZdfeiCsPVddy1CvZoDqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cecNrWDardGRmHncknXTSPGxRqwDUGZak3Fb5UduT6ixAVWQKDsbWPZTnprMesbZvDCoN8HR628wSWhywYqCUUU",
  "key1": "2F9FL2p7abHeD7kX5ir4J4Za359MPxKhhTnYVLwimTenLNs8fiCNEG6EfQtaDpQz7sqTFxTwtgp6tGyUcZqQ5CS8",
  "key2": "eGUseamLteT5fnqJ9cNijT1CbriPE1nzDHDFocQLv7gaMKfYULSNvFvdH6ELeFug5e7cjdrcPsFVdixNoNat8KS",
  "key3": "4u1rRh3rggYSdUDRVo82JDLbqbz355WZiVrHi4vMVsEwiZDzRvXNrHyHrVzWXPunhBMdmwWjm2YkE9QwuRcebXG5",
  "key4": "36TEGcj8zej3Je2sVTV937Yhm3XVZZoaERJ7tzqby9RK5oEY2J9U5sEEhXAYYtYSKqGmFmMkaoivkibYgrp3BW4x",
  "key5": "23nynTcSrT5d4ebfyT7L4YUXxZLY3XLs3Tr7K8sdV8retUdDQ6tim8BHxKBbTGidRChaSruhWj1XppRTomp14EfL",
  "key6": "FngrpMbds93sHR7SAJRN759p4r442Enwp7avQqfrZyNLcXATnLura2wgrNcX4wa7GRUB9Uc4fDTQWDHNFavwwhv",
  "key7": "4vYNe6uMNRtBWr2mAcuUndQUpwayvmXSGDCwR1LiaKVyqSETEHk4EAPMFYL3QwGm2REvmR3L1wkaZZgq7MKMWjfw",
  "key8": "58jtNYf56BSjNf7JwbCR7s3ctQvaqaoYuDJkmAq1T21CYyoDPHAs8HgbzK312dBVes4qbsYs4qRbsnUwBoabfWCY",
  "key9": "4LqS4ZaGussEj9ke7nqqYVWG1CYshtYjKrqiVojWzPqzZETrNdNh8HNnQgj4hKnAaXHCHad52rWVXdmZqXiMhfwc",
  "key10": "3F3w4TFevhaNYopfv75hjV1NpphyaADT6iq9AKo1HtzAmbdhtp84Kqk333E5cskeKCjxvPX2t3QNwjijU3hQYynB",
  "key11": "2cBKdd8fUtu3PgVMM3nHBEqv6w3uF2yT8kxW11uMSND5Lr4gWy8svkon6ZfXmx3zoa23ViVWGSy3zzZK3pgXG2Em",
  "key12": "62aEkebpM7uLY3pKskCzBnFwtYLKzbBtuMau5PAbzLtoBvzvRqkbWatZ1W9quJeM7CWC5EWTtWbpAnptCKkrwz5J",
  "key13": "4CXqsa11ZE8TeDVnUVXgrajEeLzCT1aTzqTCPg2iXxSEzHfP6k3pMD8TdshA6U7tg5S8MU98LCU6vMWyBWNaV2nT",
  "key14": "5janWP1ANERDhJ6YKEfKNkGuyKrPXqHvDyKW6q9vYgMN2spJ1FpCXEppmGxygkVV9eR9cLxQw5wbrgFEtJbAkQvX",
  "key15": "2G6Df3e8oxQWAKJwjnhxVspoovw6CsTyGVeZgDd8NnMJgZkSKMBM2z7iGPpbgqheoXcJgkjL89dAhrLd4PV1A88W",
  "key16": "541JqbJzq6unbB5Tw4MxEHaXbKWZUMn1YmKuHqijTAcU9JtbphPScQBpMdjtjXFri59tMva3VRxCkd2hmUZsZiuG",
  "key17": "4wv75vuZdZhhaEVCENavcxte8g1uo48qTzE3pkBS7VcMJkEybt4KuuxVmjn5QMAXzJoxSbCrc2qm7nTMGor33rqC",
  "key18": "WixpHi5WDT2fgLx6kBm6yAHfdc4evxH4Q5fpJNGa9kx43hJndsBuNRaxZvrn7ac7Wb9qxtjUEyqHM8KUkpmx6bT",
  "key19": "59bZmPXgC8s4KRUMZTQ5CJ3avqEro73jHSb9vjqsc52sfdabQYNM21rVw516CRYki5bJhZSBJuCSABTzRNw2y121",
  "key20": "289ab4BZ89ihVr7BYpZCzJtcknfoJhA4SrUhV412m36Kr19mQ9ZcfsfEz7nwoyiWNdrcERo81up16tuAi9kBdQig",
  "key21": "3HbktcY2VaranwJpBsGkjHKSTgwmUGRoempbYvgYUnT6C2LXvV7VE7YCcoyY8APgafZK72K7F1iJyFY26kN25iS3",
  "key22": "djvfGG4SvTRZu6hmyUfwZvDhWzhCLGE4t2cRCYrkr8HUfRFbB7ytT4UzBNpKtAPBrgPJf9wAfvBWbVdLfrEs9ux",
  "key23": "26VTuxvS4hJLjQoQUH1QPgRKWC7JA9n5eur5MzBQpiZ3c56hsfVUxPgtzAggJuCFusgSE952ArpP5udpBdMDZqFc",
  "key24": "rNRisBaVRc37diHTar9xjEZGunTPTFcJ9xoWxmSyD2696SKapt9Mm5EkodbvUqCzfQVi2dvZMCNaNyH2CJvCYBV",
  "key25": "3392YdVNj9zi7ydQyLjKAbSm6XbWzmHGdWTTbCebstDdWvWzFH8ZA5Tz8TgTKCQiQaA1aMhaBBKx6SisfMB5qGKT",
  "key26": "2WKcJqXQKMx7WeX6nZT27FsxY4LKnEtjFd5TSymfUVa21gWjomkfuDn7CGRCYvJjbGxxVGPeuRNnW6cMcAzdrG3m",
  "key27": "A3Ew4bRgjAShPLwpFT5Uo5awYphdm9pHarTaMdTKbQ4aRNagQCwmEgbCXN67QuwHLH1GTX82by6aPRbQp6d9tKR",
  "key28": "5PjUSQsxHhZygbstvqSEfDa32hhCMauWviURo4rw7agggJzo5eomABoqmNrWPNFA4LKn4wD8PsHDcYygsqd31vPZ",
  "key29": "2Cn7As158W3kiBTb7nJsRuWSnYqZghHtV8wbd3JBeM1EaYqxKxhL4nGWtoo7y5XPk9jJRJPLfnDDf8Qz62NFi5fX",
  "key30": "2J6CzYXoAZbwMhwCSrHgcMNN5et75MEu6ci1Pdu4cFsi6imLThtqnZBNjZ8VDywtQ6w68bjafXk8VDnBLHPwasNG",
  "key31": "amGCaLHayXHcgMU1UD12c2qifYqt269fFiGKZWfFLHs3wrMchR85K9E3c7qeB8HkJ6psdnUfPn38vQ3mSG61CK8",
  "key32": "Xmku6LJ2kgh3y8B1FNmbc6qfAobQuYjZFo6MA6MYFmBwF7bWf5WcykjssuXAENFabmng1VZvwW1T64nNL5WTkmc",
  "key33": "2hkEoHqUGfAaMLFs47mg6Ym4PztgU7sWRW1EpvaXMV88UKpEArA8Bu3JtVeqj97r4P6DqG3FdCyGxjzJA7mR5FHp",
  "key34": "3UTPZmKQPija7Fm59LHiEBWTtZtzYGo6BnrW3sd35hectbCiAR44xSWM12vpDnUBFKHwMNN5kjFXTTi5DykwY4AJ",
  "key35": "5pnbwgLdZ4Ead3VXGfw7wBZJqWejP4GcEgvmndfyhrB7DEwpBzeqaZKwhYvbDuEH85pvoJHxdDzWrVUFYcFEDiwr",
  "key36": "2Rj8iAm6cXYtpteqDviPCfRdwNS9o2H9cQ38s4aKZT2kza1zbZ3Ce8UFqtmRnVYWhmuDW1ZiG7wtJ2QBCFFwcQ1m",
  "key37": "23Rw52ZxnVKTdGg2XqCqr1mWseW62Ye24jVWnEGeT2dqSRDMBcxwrwPuwrq2yrdYZFAygJku9ku9x8BUdxfWFpod",
  "key38": "3khhadTFgGLTduZnPLyiCYrZ5QXGq6c9dHR6W8ibsd8wktcY9maLm4aSaYNgzQHZurQgY5aw2WbXZgaAAjCheCQ",
  "key39": "2VQvJz8J7bUtNz5FsY7qje9NxPh6YajiJBa1ujuhCyq7kvp3kCvPduDFbYCQ1imNPxhL5Fkas1zZ5CtBYtGXMuxt"
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
