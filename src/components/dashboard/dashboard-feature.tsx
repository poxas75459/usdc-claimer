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
    "2E4ixdM7BeLJRn4xVWK6cguAzbXNPpFhm1J4oLeY3h9tYFoc8W3j2zfgQuNFcaziqtXwGvhsxpHQUewekHPWxAFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ps6bqCJU2iyp5pYBV3WvmjZP2nVeAUiMPERaN8kbsnJfum8JCcrJT7oXcwtS2SZgAthphSEDGyVGsq7TYR9Uaas",
  "key1": "51mydGcYP5EKz4Wsa8KgYNeks8mMTU1E3Z9CcpxuED5bMt9aRQyGpxP6BXw7GQ3pEv3pZe8JmHodWtu7Y8UZnqmW",
  "key2": "rtNKo8nYLXG1bGAe1FaBe3SMwyTZDmsS1hwWqHPxju2tuBz7HA6p83gzq22tbpkh8V2V14sy8jSADowQ26ggTc7",
  "key3": "2xPPSL9JUPunEYeNGCrQGSVF3NUyrTbYu5qomsLEbKSs6X6osXS5wBnTC5SHGy5enRGR8Sdj2AjaftARW2SpT6TT",
  "key4": "35ng9auGm9P1afczj7McWvEHdCPYiFjLR6kpUKp9uWSZMYK6pim8g8p73gXw62sBp3j2UmrJTC19ALmbwnaVVGny",
  "key5": "53t4NNr7JM7cM1BywgtkkbMP4uWr7h9ptC5cvgdwsy75hjwdfV8og8sioYFzjeZbPM5NcHeNq9mcg8USE93jpX18",
  "key6": "3sa9cqZEazSXFs8m2zfUYvxTLxEHDoVseYZ8Qc7AYG7YLmz1Erc7MngDSvWEyCwomztEbt4KS3wVfNHrckX7D2bv",
  "key7": "Yom3qD1xtDCAMfVugp7aCbuBPGHckg88ys9vMuBAN4YAZpi66C8yyayAoph5NsmdDqSjQgu1AiCXwJtr34fXHJd",
  "key8": "4Ab66b32qqq7HUpBUDAbcF1NLNqBpvG1rBLifCG6x8Nbmiaseh74kPYcRHhUsjMjq3MXFtbXyZRTDuH65NAmCzxs",
  "key9": "3W57jxWCVDzyFXVpkdtfp3Tc5AipNDp9Pe3thNGY2DH6HXkVYLZhaNo2GokChXjBbLLsXujXRNDz85ACLqbV2N3c",
  "key10": "4oEKc1PBhpv3cw5FA8S3RLHpwbeKzLi87cnRPL66DZHEST7N9bVZrt1Ab7ZUBGJ3pJKvhSSTFigXW8Ff99SBZXvj",
  "key11": "4A8hnmg5DmTsaooBLTMCndqJjz7ygBkKx2WBabUDxhP8vjKLSRXTcYwqpmrmvnSLYy6aqDFaa7sDeLkYdvn7Gv32",
  "key12": "2gwwmuKfsQDo6WHN3rEtj6TGkmqLkQjr83bhJgNFoFsvcNC2BPXYVPPrKks6VVN8pftJ7K3xKm1bAkNwm1Po9FHy",
  "key13": "4S7GcSL2qC82Fs16PxY5dHsKkawE4Gx2gKPUHyiBXWzAntbYuuaKm8nCwdUFiHVdHUWSpEhFQ7qNgvvqEUWXKBoS",
  "key14": "3Lo34esSmULyNGXyur8t67ctf3K5BqBmYoQXU2CD5AGEmHyRWwZPiP8hp7NBDdMhF2KRsBzij3YLXUubs98STTHG",
  "key15": "5kBTBCZGeAW4kKtrU3y9XaAonsbSmwfgtDhCHg1Rg683bBYLJUhcHv7RknhMvDWXEVecLh6LZi8HTEoM4NPjLvEu",
  "key16": "4eN9L8FhVSoooNL5CKgsSsnZByvTqoAcbBxwn381ugrWRitiDdwyWH1dCRVo7DGcWMdpxPZnr54hHKgtsojUf5w",
  "key17": "2Q8H6ZsfEXMHJp8WZsErFUH33WMcNQCg96Nd6eonR3f1yfVKeh7CPoB9S36C2gFwq74o82UqutacXzsJAMzdPLwa",
  "key18": "4LBVgvoz2UjuStSxGyHEbZeJaj9T8KYkPEuxZpeAh3tMxaSJKeyHugtESwqxn8yvy9HWzuj1ADLxXLWxfAkWAG2d",
  "key19": "4hkxdaPWJUjzeSap4KtSHp2J2nDV4BH1EDuwPKh46HWpL4vhfRt11ABpLkCFo5VG3QeTutmHnjgqGx3oZKvpeRRx",
  "key20": "4ThYWZzy3381fNdGFSFJ8zfk8hyhmQwtZrLmT4CoJkzUcHbChUwQdVZyxCe4C9CdAg3aG9L3RygbdckrihNR1q1",
  "key21": "282ktjFuHMYwEJZSXZZodiSKDK4hab8S3qNFQyuGfPpEUdGfaLPQdZBWbVuXKfxQ4StLssBJRfRXJLeKuEL98ct6",
  "key22": "2JWoEsYnmCjX37HmzhrLNi1vabWfgEaUyX5Saskufynn6eFXw1BgxRrrZyf2cg1hwS7ujsjiF9ex4hnveteFWpgp",
  "key23": "53g9vzXaTnG5JNksQpixpNuBcW8YeEkPdCW8TJsCpn7BAoBehDxfP17Gg6yEx2sTLnfmiHZFC39ecnaVRvYjwb3E",
  "key24": "WuZmstidXSxYdaG2HbA49jMzbPJvwUNGCA2s7iCVvWvVVeZ1da25BSiC4VVbUv7u3XDPfcumtJbp26zjppTLLpw",
  "key25": "2vZkWfmiXrCb1UUDyVyD6jtFKCabNqnueubUBttTRrZ2QHG7Szg3WJriazGtudjhrFBSVHhAT5A3PAn2iHRsBtzn",
  "key26": "4BZnZG9vqVdMG54YxEGskAk6a4MR3shEdLcghohWJcwznB1fU81bSH3jNrnpUig1eDawNSQdebjzK6jr3fUudwRk",
  "key27": "3XZDKu8TudXMywhcXP68kSk35UW77gNSMqLmiVM4JWA1n5WrCmRFSyFRfxXaCz5GiGJe6du6g3Tcsni2fECWDEi9",
  "key28": "2c2pFFSfFMxvygVEkU7spdoAZHZ9FWHkZCrMcEg3fTVGbFai5hdkYBr4c6wJB55xMYApfnqp8fH8YGGZoMApNEHh",
  "key29": "5B9tE7DxL7TuRLjbBCPdzGKqzFtarQdJ4YUXiTAhBXYdQaP4Jxp6woSrfwg5CJGnF5aMq9cer1tjSLxtorytx982",
  "key30": "2cfcMrjDpm15kMuhE7kJ1n281qfSPdap1APa4X4krQLmWFo4qFMShrW3Mw6FtL5Txm4V2bTiHy5e8ouYLR4drZva",
  "key31": "5jdyEK6SxdnWzrPsVo741AWgs8kUD8a9m6wMu1PZEVWS4ZM3Z7t8KGRLNUKLEM7JZ1eJHqKcs4aPFYH86BjwPzBN",
  "key32": "3GXUh85Nx5aVootexeZKxZWcosGuRsrV6aAF4uibgy6csfsfRypa9NzjAYuCEBkaXmUnEVnx7BpBXE29K6wKcJFA",
  "key33": "5JWB8GtpKkzsYMbCnnEahvMuazU4A96wqPWx2JXrf88hEB3iEvQWQgQkL3Xzbpfne7fV98EhzfP3nhpHN7FBELpE",
  "key34": "2hW7AuT5swUmQnXz3Adj7wxkvu3BP1uWGrhntuajJ4aj1rcLawDS5wzDLGn5kzS7uP71CtPr21AP17T51iLzZx4v",
  "key35": "35vakbZVBE14ijDa71UG8F6W9n6aFhTfuurfYvkRBhMVxin1FCy3ZypFgXhxLbiMB7R9fqEUGrdiZFKMUf2xM9Qc",
  "key36": "3VYFyjxCPek9sBoodSdEvo4u5X2nao3UTGXMLuubVKCsPp4zHeAJfbE5p9mYKaDXjCkqQne1hSyHsRZr6baYnv7U",
  "key37": "63DeBMamCXTpq7hy6rTEDPKauXDUesZHwLCkjymFJvHG2cENq5tS8f4NFcX1eAT5RWKWdGiXCsRrWneuxN5VV1nu",
  "key38": "2Cvxq3Fw3bxd7sgwpXLcGMHDMvs7zBXoox29AmX2Jn6qfcJ9ue2dz91t524RmuC7ccjmhPHxcZz4nBAezCAns7St",
  "key39": "4EPgWCJ9JQpggrKVGQmKLtGcNYLvdHJr9T9DrkttVgjBBS9EYcZRRZsEicVzC2rajKUDqP588NWiN44SGF8U1sKo",
  "key40": "3o6VkEWJx9b7cdXGFWE3CdJ9McaQppSEb6zzUxu53XuS3ZaSKXW7TneKpS4qNPC4xfN6Vcpg3RGHsXRvFbN3NmUV"
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
