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
    "2ANZ78KS8WhAGFx71uTsWFfgEY2PWXXVRr4E9YmiK5wJ5kGS3bbMAd5RuxeMXrbYgVhyx2Uy7HgiXtPzkd5NBwKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHKozhAXPpN4ymgDJWyzcf7X5oQrwCTKGGCRSe7bxqfioRSrhNkok9hV7bSmjFbrXFyxMw6ZWaC7TFZmeBmU4fC",
  "key1": "4qUQPWfMVnkY6RRQ213Qdx2kvG8GASC8pcVamUQAtKX16qr5AB4dMMEkw1qFo2E51QUbLK7tLHYr5XdiufCgzUNE",
  "key2": "3NUnBLpN7sFLmsywymUwZPaAcjbDw9Zd6x4TY4N4u6R5G3Q6GNSYmQ7a3qcdJ4zMwXSGaNNJRbpH3mbDZf8RHFRD",
  "key3": "4g9x4FdrKnDMo6JYXjQiJY4o6V8Vp59kYCVQMya5HtwGLe5mXs34SMHTBaeirNiropNFpwxEaLpaVtT6vciCCL8d",
  "key4": "27aRiqfJXpShRkWHw4JdZELr2h26WZjK32QkgS9kqLNEHTpu6qpBMwPR4ZnGBTFQnAmZYCLECPgQpN1eUytGaBQK",
  "key5": "2ZLg9FNV5PkbsuNNvQZ7K6dLpT8bH91NpC4CXQ9oaDog2KVyiv5HCNiQK8v3UVL7D4xGvcUC8ANLTBX5ifGRLCJg",
  "key6": "2cabsSDZ2DRAsNphns6KSRit8mYq27eMpvgRWSNs44wkCMvaVBxotVkmiYcvDtUpeXNmmLRtfjoKCrk6y52XERUN",
  "key7": "4bmceLT8RXsYoqBHkfpySNGTFdmJpNWV1JEB4Q4fYduCYNqFvAnnG5b4XwAYGvnt22AVgQT6MjWWxcwKZVjy5j4e",
  "key8": "2wXXbFGr4KbXWbAnTna28JYTztzrw5j1js6SDN3EKFZKknSTa3NzyfWww4vpAvNeHwLM3JRHmRGtsKZJnGnednph",
  "key9": "N93Q4Dm9zorYFobfJUqMxDsHp6Wd9GvMq3wwgJ3oHPa71tcVKexyi1P7bh17kGLmXKzv2nLi3UPtaWa8kvw9zzr",
  "key10": "44Ju25kVYtfRVDyYgJnvefuFxkbjcFFe3imj3qb5d795E24tnDQQFJoWZKWRAxjgjWR1btqHDPZeYMcxAyerxTYc",
  "key11": "3DvPc3zWS29jFaGsHdSHs45ZhATiyiGMhYuiiGB3Vw7thyp7dLgAB7ZjxKzLUsyMK5NN5Ney35F67dUWDhKXHT48",
  "key12": "Q5fTXRHhJRY8maqNUSsQgugCmaoCxaUQ3dx9PKYPCXFgQCag627zhb2XBLekGpHd36BXzyA3G3rNcgXJJqTLR8V",
  "key13": "5qqr5CEspetJ2yPftAp6r5UYTLP85r4FmDSVhqYrRaTXgzesnCEYVTud6ZPS7yygQXy2qGh9kubo9p4KLvbbtfA7",
  "key14": "32JoqRFHUrEAJCUnVLU11kQPoQkBrVCCJhMz8BPvBYksBNVKtKh81WvnaptAzhrFNjERoc5RQecfVi8Zn2tLSWEN",
  "key15": "3an66KaQHYqN4ZsbdYuaSyCx4ToZpF4uDjumh8prhRYAWJz1QtXrzqAapFqQT5QGGFRsdr7R8DLrsEyDBNqrJgtQ",
  "key16": "4o5NMkf9HFP8PvzB83kBBiBWiChH63qRs88VXheGeiRHYzB3csYfePU3N3c3a3iKya8p3zeGEin8B1ZQhdnHWxMT",
  "key17": "uHZqJGrxjNztfZ52ZXG3fFkRGqWMoiQkVFBk2tVvpKAVYLmfDpmnNuk7vUjBoATWk4yMBw3iWWFscB4aK6gT59a",
  "key18": "3n3uLrjPPcJE1w1jaZ4hyW1LfrRBStjKprmNPtoBGdarQrDmhrsgUapfwNVYRqwypN6QV65DnqEKx7thZ4SmN4Mz",
  "key19": "3P8uZH2k57whMaXJ9zQFnfU6HgHk9DJVwnUdmxhLKczTF7emp8yT3Ku7RKmnAkj2EMHcBKDJdXtYMMVwyC7JiuBQ",
  "key20": "43i6T7JfXfWrw5CauFgPhiPtA3CmEfT3zYHBBF6Kxah2JQAgTVRvEZ4RwkwzBDnm5TNqu4CJuUb6o5kQfDjPTE3v",
  "key21": "5o1P6FUxWPjUgJQnToZD4efs4co88vb3zViY9UcGH6VBFe1QAtn3x4RyXLcc1Q9DXGtRkaBmmhudpPGq3CF5VNQX",
  "key22": "52fYZoDzCn4qyz62nAzso4ypRzEU7tbk1xs9FvDY1ukoeXPCxFdSMfVip26mnoYLzye2GTf4rhBb4yCMhh8ncxq9",
  "key23": "63Zbbbz8LPZdMmxepnDyFCKAHwQUh9nFQSfXHvbxTZZBYeMSJmFzuqng86CbptAihybwvAzMUeGGp8caVmJaMi8H",
  "key24": "4q51cuK2Yo3EG9WPbSuZ4GB58A3PTRhADd4R6Qv41FcjacBJsXQJeS1B1EZ1GVCZjGCqxRB4iTtjH6B8EyNiFJ6r",
  "key25": "29dUasGVBoeToftcBPfzBAr6qSrHowz2BPSEcSnBvYXKPUcDteFkJEfJN8kW3B9uVgdDyKmehevLkixGVsjGPr3p",
  "key26": "3a7vq4ib6QFkvUq81dtWdccFDxt91sA28zA3Kg1Bxf3mf13HvHk2TFWcERCcgmbWmNWKh61B9tCrBbgRs8emfdeD",
  "key27": "37kp5tkLieQnS4uvonHWyFbis4ZZWVRfVcDJEhZioBCVjRLZK2dgUG3en6UtynHubJfPjQppvS6cfDcmyiRV6F6j",
  "key28": "21rusdSpwqtoabKdLnicgBtYSi9wc32HZpVjpRJSLcMD56dM4jvFr9YYD9VkaiMzenVAgKj2BQziHUMNxZapNEnE",
  "key29": "4rDBdEcdYe7pMyTgvDzT2Dev8bjaMXbR6mkgNQFT7ZYwpaeEdLciaDNdTiSeAXYCXqYNxn41P2hze5FwHF6Wx3QA",
  "key30": "3aJKJMzqRQmnRqDnqEzA3gfMwTMDtAT5P8DoHbocusPVsdQuDLFWhChvYu2MRPDnMn7iYwWbLL3skxyxAm7apCt7",
  "key31": "oKYUJCdNRmUBB54ZMZh2tUJAAMmTGf4Fg636YaNgpjpPFLaAGrRL3cyAZtzRNxC3zaiyEAiJgtNpPnpjtbGLmGd",
  "key32": "4c7H7rRVX72ZCuQrUZBgKFupfvQAoZ8uENRroHqVhmqnMMZRk8KydPAucbdMbGtvTBUzvMxRVc6aAfZUkDvEunJD",
  "key33": "3qZNsdXEqfMTVRxV27emmj6fLrw8zdf4zwgSWg7GKeeN6CFqEBaXWrzDzSFqURXhXFb3HpUWG5RE5yooaWmxqjU3",
  "key34": "27VXQBZefT8TYCRU3RT9UdPgupqJs356iW922o63K25faNVFht7dnaUgxme4cC6w7vCoMneBjTQRp6nxF8wpkviz",
  "key35": "GGJkx9cwNqofhc3r8fgqiYvyMtLDH3yrLdnnuGGZ2V1kx7V3vMHwoEDkNLNft3cFf3EZutX9CnSFT4rkm4VcFTT",
  "key36": "2m8jMrWWm51ESf2jUJtqHUHo5AsKtsTn63EZ3GwYWxm51fotXtZEUuMEeF2W9FvrygpR1tNiwthPRcKwm3PAT7fS",
  "key37": "2f616QPraciBK7MFwTNUs79qkUmnWcTZaes8HUcdBeNkyMGJgKZRZVfU6z1fgPzn959qpVcRVXzbEncAb31iRXcA",
  "key38": "Yd7MdCUuY2cHX3CTNP5TWj6oEU8Q8NvQ5rAyiavfmRbqtCnEgxBrW5xf9QHxTecGjpAtJZ79Rj9JbxXY3KWt6Eg",
  "key39": "5ZzWyjztAN4CG3KA4AdfVkbCM19HfTZZcUNMSQvHuGLXRiyPnZHT1S1m5SyJuMhEXQBNdKXAs17TnCYVdnu3V61M",
  "key40": "44gGDdNXSUmFFfrYg4i6LZHzby3fMTfVWaRs3mf1WCBbN5izoFuDfdGV2Lm4mrNwKX2oTmwXsp6P6intVDQNSGgw",
  "key41": "4YPwxsi8abDKMd8pRfuKAcoKzotHq2CtsHMfEyLyfwgosEvwzZUBd7JFRmLZi3QZhrFuXmRRvJCGXdFqt8ttvgKD",
  "key42": "H1936VsHfveqKpezNYL4j2PzVca8Ts1ZnVscAbcW61ep7vXM5HJaHMe93aV7eaiSiHvSVRuHRkNq9dppq1C9EYf",
  "key43": "5BsAMQKy1qBnLGDQYJ2KfkmQ3n2HSD5uJ4zQpb5Jp9MsDScTTQNxFyNrNessrormNXtMzNyiEC8hfeiYrf5b7DA3",
  "key44": "4RPHTy2gyivdDxG76PH78cU35Gkx8KVfVvYufDBepKzYTDP65MSjn746L3AGLCZE7oNCkbXTUY3fycDBkJLMVyty"
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
