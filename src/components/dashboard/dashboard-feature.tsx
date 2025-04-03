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
    "4RnKUexvo8oDPr82FDcG6pwVkVhGWskn113mZsQ5A8ugYafSR3DczhyRuJM5uYWkP7D6NmSMLjHTgzKjvGcP1uR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KzcFsk71h8di2esLxHe9aVZwsCQno34HkoEtRrwqei6SzFNky8c5e5W7sKrX79zSSzmgtPtF8PTzXZRsAEQpeH3",
  "key1": "54GKPMGtcYoPVs3ssXynckpFrrzQnfBaWkkF8yZo3aZZ5oRNPTCKMdftqEyHXPZm9op8Y67Fn6FBVPxSfYF3Pvvh",
  "key2": "nQ9x4KYUos4bkMntH2xMRLTGAzb4UEWgPq4CmDi5HkmoYGXRJVXKYs1eoByiGsi2Kt7La11kqVjWYZ9kg3RLEP5",
  "key3": "2Ao24edNNYw33dNuWhAM7VWPtnBvrxQxYeLa76ZpqNtsoS1xR3uxqRGQvFrkric3vPuhd62d7BDVcehRz3B3LcGC",
  "key4": "hHQvWDdy6DwcRjUWtPfNcU59zYaRhRyuQjtUA5GaUqe9EDvikCj4DoSp7RqNxgNjKEYR6qVcToYawdToq9TXYPM",
  "key5": "hpB94no8NbxFaHbRpLzNUcmySqv4c5VtzthrUfXsygrHUivL2oWiAZP6ETJiUm7U9mQp6ALsR9JEBNoKxu8Unb8",
  "key6": "5m4NiQ6aZWbG9M9jBvGZmKNKThVUatSyUztLtBMYZqNoSPCYZWcn4nwVcf5P62yrvFojEyhzqk4mWA2jtxwjL7up",
  "key7": "5q7SHU8gqutLbWPrcgQgx2kfkBort84oveFyoaeQ8X4eYm7kRVYDg36zxCefe8Ygy7DyXq4xnuBYv8TgLnrJKgxV",
  "key8": "3ekLUfdepmjwj5v1pvoXYrMrY6Lzes35b5c5t8fX8AHvzvvotzTyQ4j3EUTkJi1j9xcEAye3xZVLfHKaNcx4E9Qo",
  "key9": "xsZKT9ziQJLrwqf4yJDSYZ7QHc1DHhwxzVRc7tMPCKnbPkHHcJKSEB8V9PtQTngE2FA5siywGEz8qNyYsS4K6kT",
  "key10": "2frzfn97x3oN2q4mDMdwSQB2QYDKHrx6LNVdKMuJuSRvVz23RN4xViRgR2hQ5kcNozCyJ1N62p5LBc9WUXHhed4x",
  "key11": "nc1sEkGswrtHG85bpmJD3M5sTam8qpooy8my6ocZhjxj9PRD5FAStkoa2bAmREFTQEBTwwZvdisWufMVNkNSq2n",
  "key12": "3dnG3tCDNynp4r2KpzeakvbsUXYCxXEtzHyNyQ3gq5T7vXmAqGBMk3HwH6b2H94oqxoEKbTLzXvuru1n83H5VvE",
  "key13": "57gZDUZugQRdf1k42mgY8FzTux64ZNko9TerXaLfXv99VYqd3ehhRvFohXDof2AFspieDxu4gGojNQavSLQvZ9ZY",
  "key14": "53mA879dAAieBJ2Xr1zZtZYmFZ38jkofeW78SBJmT5hhftq111aq9DbQWtAyC5eXKK2RyJR5pTHXLwojUZTkaBP6",
  "key15": "2u4qZLc3FyCWvDovXyZBoXCvPDaaRKXv55HBACzFdts3bVN5bqneabRhaxpAMUEk89vjfjSoMYC3DvN6cnG7jk2B",
  "key16": "54LuJ1Hu9QMLamYyVkvFbPxM5hMBXt73bNPtH25woqS8C9ge8hitmNeTYrn31s9PAYxMgmbXbQTEteY8BwPZB9sg",
  "key17": "25EbTQH99gv8thxeRMQv7ycoXrrn6HpFSQBsFD7apZtjBsTrZVseK8aa18zuN2JdSaXHx4h3VJvaawvbvRYJfPPN",
  "key18": "4HJXXEnA3zr4M1mtC57TysAhDuCgiYedEMZHPRHrL83zVTSPEhgbsui36BkvCFQRuz7Dk7HwN6bovuLqfqvqpCKQ",
  "key19": "4WV5qoTdaC16QMhqHBgqBevYfEsABA5VSTHdXc8anJ9ognFbowXd4Gizaz618eddQUr9DdpjPM7pM33XhpbBeYJF",
  "key20": "2veCuC92MUuTg7MVtiW3uqiLdsU3Jac3Hxd21kAYS3HJ86xNZaT9DW75w3UYhQJ1B2RGYrqQEfxEmmfYkSGAohXE",
  "key21": "3iLigKWvgCpUJbVzHH3ghBqvLmNBX4S4pz7XwguNF3TCvv31PrkZWM264JAndZmnsnAYVuiR4pEFEExNUggGB1d9",
  "key22": "35ReiRwqiL61vMgi3bmzHzUZps2kxbfsLiqFvG69feaB2xTvszN7vVhmNgjYF5jcwUEmkxnQ2YsfiVf7peh5nP3h",
  "key23": "3BKy8NAgdauJuWRyNKP8bUZhsnExnm2fNSozW1n7zVw3T7aVPUnFQsjywPy8Wn9v6YotRDHF1nzvLYzXASc3FaHV",
  "key24": "49Rr9KpdrEmGJR2ZVzqyPLGMR8AEsitmWdmBHrp534bbj9eCDPjNftDLU9Vn3ZSnfW2ymVYiSJdD64TvJwD1MKkZ",
  "key25": "4pceotETfAQmPmEQEh9FzSupjbuMSZDoHPvoEWdrmbNcqCSxneGukAWkGMsbZYjS5SheU1wGePgfx5ve6djW8z2a",
  "key26": "3Qc3Vvrp9tthCvnW3CBbM63BpQwrfosZAumpuPuFBMY4odwwBKrg9ivoH9TFrb8fu56cUkYy2JnJwFEUm5axNbir",
  "key27": "2u3iHYRSfR2EfhWqxP4Pf15MCGhcbDPxkowjJExH66SjZwNW8fmfJzE2dstmHTLNwSNE5yQSqY6YhjhhyVG6Zni2",
  "key28": "6QD9eHKQFNprR4uR1PGa6a1hvVvJ2Dvx3PXYcsabWQj3Dci29LSmcH7NJZ4aCwacRn833Cxvg7a1gw4CjgofSDi",
  "key29": "5YWwf5SsZ1KzdJSTcDzaqqDUB1wV45GRvjspro8JuTATLMjTfYzwAaa9wgHSVdtEm2dDty92ZoyJcLXoGcWkszNm",
  "key30": "35YaRiDb2w4PSNfGd4c4SHNV2LYxp4tmJ3cruTR5uYiZ2Bz6tXJeSnSF2f5pzWcYwGfSD9UewCN1UqxxBsTfnVnx",
  "key31": "5APqGaS3hPe1pPCi3JVg2EQSC9VBUWGNCyCgn2HHN3zS4C9NsFegsxWTBbYLVsBxpg4JAQt2Hwj2uVXhpBPhqjiT",
  "key32": "4zm53BxyiuiytZZkkb6QPHu6PENwVFAM5veQU8CXwD3H4kyJ1NQCEzmYAyEZErV7bvmUA5svX5mvSJXL4UsXC8Eb",
  "key33": "5YnvbUYUyYHqVwD9gbWxTbFA92CFxbvhWUMpxVV4meggoEeGCqiMoU5TQkcBTCQeZNLjik2M1Zy3fyQ9WvvMo7wo",
  "key34": "3MjPHTmwUUhAfiyPHdfHay9mSDzWxhWoWkSQu5ebLG5kfbwiEDC5swB6LzTsKo1iiYXiYfzhnJVX2qncjMBpPYkZ",
  "key35": "4jfxcMTFRSsBvkRidUCerQ67EbaYrZo8jbYGeUowa5XPUdFdAxtqYknTKwArLMRtk3SrDdFSBhMM1MQw2MtkNgjp",
  "key36": "27YjnY9ZSrh16v7JkBoHJGHNm1WSryfUMS8rQNSUXBEhBQQ6Pi3zZgPutXTqcykhftsgb4yDbsZwjAMLxERcQt6N",
  "key37": "4AXcJRdMPPgZmUaSV1pqPU6Zr6VNczZpiXWv3SUXZRkfsu4wGdTWKQqafzSNS2jXdph821YPMnwdYicHeoywFwdS",
  "key38": "4AbYovaYRWjQGpAZF32PnnoVuZB3k8wDaVRNUpTeqj1LyLCRwF2BCtpt34KrNBVrQrYiSvTSbEKLKqvVr2VnNaf3"
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
