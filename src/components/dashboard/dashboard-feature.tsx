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
    "5uyW2fPmHZVrj4gyr1ChH9BCjqEgaEJYToivyyNxcNEbSFzDjZcwF4exaAwy4WahhRz36Sc6uGCYUWpJPC5nSdeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55GTSJYMhHp2WRNww8fKSFAZCNWcMnMLoFo8vw1BqhhgGkHb8sJ3cHFwviPhT837Meiep2aPXjABfthdBmQKeyG7",
  "key1": "ZoWrZDmDkYw5MfmE1f8JfC4KDnrWE5EnowW2AHnKHPKvoHCoKUsCP6NdkAHtMuPu2NjuysMHP17sC89cNL1fDAt",
  "key2": "9Zago86R1YRuwG8ZfuUZVn49Jc6okW6uY8gQRD4JdudtSSQLm9bZFSsXTbbaeztXPfwBPU4WfpX7HstdrWe8bb9",
  "key3": "3mnHgjwNUJ27sLGN8CfSDtDNjw77p6dsbFJALMwNuJUr8t35rodn5jvDFqU5o8yZEsdrxsvQeWW7VjLCKhnJymuJ",
  "key4": "5ATABp8cPpL9WYsx75xaNtMgmQTRsNbhXGvgdc8xX2TyutPeT2eTxAceiKT3bGvBCL6WFBdCSTtMKaW1aMxZ2fDj",
  "key5": "34w9HjZxFE4pFDaJodzJw6kvH7tKTbZ7g7SqtC4KenmUoWyHef46pjPfVQdZTChTvreN61Pib34SzNspZ2USxPVs",
  "key6": "3mihh8b5pg6RK8R4ASujVMi742rZMEe1HpQuxTBMygwCY9aef5nFuioYPPwGKtiAbiyzggJAr32NDLSdTTZm926y",
  "key7": "4H6ZxQjBUNrjaLknujmDpghJMzHw3ZiiZxR8LobnuUUfU9HNmcSFshvULqJS19YzgnDmCBhCdUwMAbPFBRB21Vfx",
  "key8": "FoJF7fCHTom77zAJv659NH4T7jeusVVwHxmk9VWxoPDtJJBeXnxhszxW3WrTePacYBNGFcByi83TgKqzXoxaTnq",
  "key9": "37e6KyDNRpbS2GGuLKMXzBornBN6nQPvVFSwcMqrpRstKeVeSww4eZhthHLA9r4DrhPSY9YXmSkPyVMJu44XCKvW",
  "key10": "4Jf4GL3Te1JwECpzJzLmdDTqhbzUBsoSyqY6xQBFNtmGQ5ztdWbiaoQwVasTQUwUW3rfqZuaRVZ8zvFxEfs26egy",
  "key11": "461tuE2sF7qxwF2tVfhPMVuhrGu67jZSYMcnMwtMG49ka9sW3DRtQswpaqyxuwgS8J1ENpcMFjzJUafaobAcgypS",
  "key12": "22fydDUAdn2Q81X92yu9UGRKMaMUG2CNpTwdiov3zDAqJZUJNtMHCksbJQJjDhVZWQ6yNJ16EYvE8iF7QD56CjdL",
  "key13": "2dLpBDnLaER9QidGagqYCnxSB7FNb5ecneYRcqGNKUyvw4xDgM6UdhUQkGTPqfQVgAy6Fodgimr1XoF5GwWh7BgP",
  "key14": "28XhTiHP9nz4BiAnn87nxRxsp26ujdtH37phU4z8Fyi4iJPsFN8MHZa5mrHCtaFyoKYHuRAna9odD3Wx3xrJZuWE",
  "key15": "5s5xmtx5woWtbCDwfRyFtRtmRp11NMSmqfC9EaWjX4s6GfCzpVAnxBirrAqPJvBDJaAYJNCDu4TiE1ythKb6P3Ab",
  "key16": "5Su7u7Tp8DJv9xmbdD1T3m3bJAwVsZGQKQSXjfM14mwF2MVqPygXyVc4aNhkT21qDdiuUvMZWH7aWvUoGb9dbpcL",
  "key17": "3SrM6huQj1caEJXNxnQCDh6ijRvUwGviGtruCCA9xqQNfYyD2gGjsvGnYkaoudRc9dpkmkz2t3iFixQYp3Me4i1P",
  "key18": "4Bq6E2KbjFD8Zf7R5LcB5nysJvKDtzg7cWg7YbayuBT6uJWAsUTzeJyvmVsCUU8udWrocDks7YiTFDXbVbbrEBZ3",
  "key19": "VpohGB5uR9zuPES1wCj2kZKzMqgnpqcjTzUs1TLVZQRHWjoa1PZfSsJrYaEaSDomeUDTkwzoqhpRqRVfDJowY6D",
  "key20": "2z6t1QRhgtJ6V9VtfKSygMNduYdL7xxCDGqVPWAN2o48EovuEVgegChD34rXZCziXYH1QJY3kcfGaZwhytUJ4rNe",
  "key21": "CtVuPQx9NRfj7XzKVTFoPSW1xrHc56zSrQuYjxwW1ucrjMXkp3V486PbbmXYEGYhdUvv16caPby7uU2hL9qmhco",
  "key22": "2TD3p284XweBhrjpFB1N6zUu8AAGhUpBxVnrnyKkG2UsYVG67qhNnVCs2dctifmLFmk1TwoUnFmUC7aAJj617acR",
  "key23": "3mPp9hgs7Sc6W9WExowZMxaudqqDHtPF2DCYvzzYQeQV6jvHsS5kFShhxs8ZT2QpLkGvHFiAJJHJeGrZTbqJ1MGF",
  "key24": "5LvsJpPTav9BUyKYB76SeGtAo546U9oEdT646YapRkgPD6fRqwX3sZ1w7f1eNAT8JKYkXTyN7bxNut7Cfe56aMt5",
  "key25": "5fXqLaLDCkRRw2nCdVG8TSBvuegbM4nGexrfQxVRnERvjriFiqFSY9NTs9z31TfYU6zFs7G23xaUZF5u1irtDts9",
  "key26": "31qNFTbCGRfEXVkENAYQ5AfRTWs957cCaUrefSuaakNEczGmAqSAubSnJSJoYYdziFtSMJDB8khoEDV8fE4hEQff",
  "key27": "35ewNH6WPneZV73eJySCSDtUQSsoFf26t5BfAhgCscQY9MPhFowGcjtzZdpWDbdKeSFgw6Br7oaoJixR3FvUyyjf",
  "key28": "64VfjujQ4ncdhYm8erpc2r9GeYyezQ3CeJuHPnDtAHYVGLVs2FPhgGAdoC3jLF2RfkuDmtCjPeWAb79CxxMYYXww",
  "key29": "21pRb9r3sekRGT8J6FsiZwNfck7KkvM5ffMWsFtDL8gFehChszi3Sp5Z6vTsEoys2mdX9HXsq3ES3M55G65H1yi7"
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
