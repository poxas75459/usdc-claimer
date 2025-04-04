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
    "331vkTg3qoqHsM7qb2BwQcnLbeDj63erPFdqCidYZqqCuLKKVCB1U1XimzZKTTysgYUUwRScUAf5b7d89wnbCQ7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "81pzZrfiR3nhTGGpf1N27TiSfCpM36PhT8u1pPdcgX7XVWD1j5Cp9zhr131HE8ozA3n3tswDximsTCrt3L2uxKq",
  "key1": "2U5Qu5fNXa5jVQsLv3f1t62N1dYyzBLxqDinng4BFRTuUSL6c55MQ6Lo5FYxZzHDmEAEtcU8NWtVjE2rXWggQth9",
  "key2": "o4tibuVTb2typSFMxFZpCQiTgnD2VYkeHG8rzw4sNnLAiTzdHY8jFRfMPZ4JSiYr26WRXmDnPHTuTYSYJtaSzDD",
  "key3": "66qobC9tq22vJa2grwbsmfhvcxEVZpn3s9FrnB8eJfaeYeDz3yeogdgHfxKrCMPUoUD5edJWyXAhbkV2cbSGisBS",
  "key4": "n4cxU6QUp8g83WU5aeepojLsxBZP1uuibL7Lj1akUZ8bwLtn1BPHJnvFRyZeRr6Zz83EwZdFh5DqYHB7j312wPe",
  "key5": "3NgFbTAzNrXXrvtd7nsUbkfinFbNSdpqou3BEwPgcRrnwiaBb3d3wRBGwP14ExYbv8Jp4v3k1E8ShgCRZ66KhM5C",
  "key6": "2Sf8PUCLpM35W9NAwvGBhLxWJbFiXJGwXXkmMqCqCqZx7LBG2HQXhxe7dSA58TgF3wx4NQdcRGSdEyDYp8uJAq2h",
  "key7": "5b7N9gGfyqLcmbCkFCCAnBdNn1ttLNT8zEvBkaiqHrv2XELG352QPNnR2HLhY2Q7sdmpvzLG5b4FTkuoy14e7kKV",
  "key8": "4TeBCjcprVfj8gW1ChTe9owMEwkMKoEEVy4m6dFp72cg5stfywFwYFiQaLwYdMjkwL1AyfxakZGVVqZrHqZeMiVo",
  "key9": "3gNQsB7G3M1cToXJi6NShwUethTTmvTX52ztkXiRWY4yABaV8cbEyuhqQSxhD2pjS6uk2VBTniC47SxnWzR3fdnm",
  "key10": "9YVMcESoTXc8Y6hz599M1uC4NAh8qUp4PYBVZFKL8vwcZnSzPAB8HnB73Dfg1yeCShdoQ8QWMRmwiDmRuvH3o1S",
  "key11": "2FQsvWDaV9J76jMDYxn89Eo8ADKMKp3pAHzNLViFQLp7bvLCkJXfFF2htrGroMURx2u6LVgfBiNoMnKqN7qJnoxn",
  "key12": "4a5mZvDVT8R3CQuLfBSYp26JpGrSxaVnvYBrseUMP9ruFq2wk9VoqQugKK5FGDA2FafxcDoKWnnJTunJiRVXAxBE",
  "key13": "5Ld9HGmvVjjWzrDfRSbGF9RM8Xrn3PsGjzwzAddyVkCi2qy9i4v1242t6spey8f9Rxeiz7wP5bt7ycTfUbZkpjGe",
  "key14": "2htxmmcX6sWTRmgjhS9KtkbCtRsT3ZauUNPERfJv46aKPFyHbDGPZFuTq4sPD9LUFjK9cLA4JQ2Nvt7RNH577pZi",
  "key15": "4ktRRJY1sC62W4o6MkNBt3NjyJT8pGFsWfogZUCP78BecaNgvJAtVcfCtkTuL4xQgaLzSJKxGhzxFys8xbViFsVN",
  "key16": "3UXXD8eER5vdd3zcXaUYEZmx6t86nTsbzRkqhoj2SpQC1v8mecffCdzbcitKF87nTYc45fT8tTmvJPcTpoiTTTkc",
  "key17": "499mxecnubhFqp33vQvLrcqmuRsGWLAJKgfSmMtWmvrCi7oQuPBqMuhLgkEP31SZLwuADPBr5RyZff8Mn5TWZzCZ",
  "key18": "5y3ZyDVXp8VjXBWKEsnYqDy2rzqidUuWd3PKx62iUxLWwiyG2L8ohcLt3BHUMGfixXEn6a8TabzmAeeevvmMgHy9",
  "key19": "5Aufgd74iJPpWESVdeQTznhNBdBYmwkPDGBtQbLAS79TyjjgbPxiHpnEZYVm4YkBZCtzREpHpUAxW4rjdeNWstzN",
  "key20": "gqt1ngc6G5Lq3HvaDp3DMahhvUMPC3ZTMNMT1GzY12CwHett2aHFNrpPjAv8761PETFB1sRnKJMgd5z39QsVKVn",
  "key21": "HCtFv89opVoUcT5BFHTwQEGFdHBaak8kBq5SxF2cTteP4Yz7Zk3kQmQkTL2z4CGmyKAfcQP3rZCDk32cEJQjrqb",
  "key22": "XKSBKjSbUmgvymmJFrSpYmyBSJj32jC9da2uDDzimePin9vDc7tmRPiGQHcUGF33UEQiqzrCSqrMkWXpnpL66h9",
  "key23": "3tEgafKCjhAATmwbLbRFeAzDkBjTWviTTiCTXRYCsDZgQthZwbXL1Ls6cdeagbWQbcJ6TeFU3GKsVxyMcEwTmHAx",
  "key24": "54fWrrco1ZhaKdWTtWV42uP18kX7Fmc4LK5kaB25mSfagsXDZrap7Jq3eiRPW8T1JBu1eTh8g5LLz7mAuH6WpG2N",
  "key25": "5F9cdoJLV49NzHfrqCgLBp2VsjXZBDRaszBujPFNsHoCkASqFpZjCZPfj39w2AdDVyrqpsqjxpf29qBk2mGbXgSG",
  "key26": "AA87DDm9Kt6Sk37GoNVknugQKjMu5Bg8Mmt6o7gbfcR4pmT7kogrG3u5cKoyUbsed5oiFRxMpg8dCJ8Hf1zmzkR",
  "key27": "4KB4q83cn6wp3keibnwtXyEGyeg2wCJdA9miaReeaEHqjgYZ7ogVK5iNLcV5MLvU6UCnapEeyCNwUoMxSNmfMLMa",
  "key28": "CC1ABDnPSdGAKW27S8cSiS9mij1mefw3MVzWr6upNrTvDvu5fjVUTZWS88dcd2f4akouPo2uwxbsSoZwBFhLny9",
  "key29": "2k6iay9soJdm4bhWu4Ta6y7q8kSChyqYHhkQxnq3LzuCQtYRyBaTAqJLs7HLh6fqQFXjonfCCz2EqPJUA4HpXHLB",
  "key30": "4TrYDSynUUo5rBoj4wnSVz5VSjCA2kfHmT3KjGegKzX3tZKFaPvm8NNG493z4b7h1U4c8jyJNNHDcZcdEkvaD1D5",
  "key31": "58epq8Eceevss3dHZRUn6dMAkQXZqXe9Kv8ykm7anTNjUbZVLfndXEcqhzPuPVEVKFAcGJ32fE58HmKc5tnT6PmD",
  "key32": "5v3KKM3gegey5bfXQaGwGUHNkX9VMjuNwjrC6ZXbpy5S1WmVSmZ4zXAMRLWhjKRzVdWBCQw6VQ3wfWMW8wwqXckt",
  "key33": "3kgqnji5t2zBaVmz6h7y1CfmGtewhncWbDW3hFvW4nhvnttCZkb2ZxDSTkEGjhpiNi3TBwsaJUANHDzmqXScLm17",
  "key34": "5YQ6MFnpryPJiN14hjWg56qWgnyGBYtLa9E7zu82CZ4ikitvRqmBDN727eHQvNYeuMJY1HE8FKaNaUh9sXY17N73",
  "key35": "2qwn5USSSURyT6rKACVBgy9bRMfJUYPMm31neas3ea5rbV1JJ8Kx5ZC5eYuxXPBDRTWkGcV2FZYASY2oeWYDFf92",
  "key36": "2z9mgw9B36Li77C6dFVKL81zZKoa3XXnWAeEFHxqS3tSjCxADirLssYpQQkUZgCUW4g5y3Unk72JXmL6BFbxEmND",
  "key37": "icjwGomBzTCc81FTCDMSwqwiTK8bEs9BnboGkPX1Gy3bdfetDVRJc9okY2p1UbBHKu9Qky6uJrchUrW3fVLZrnB",
  "key38": "4UFE91bFnqUSB8vLfGKULDgFSqVXRJsswmM9WAb8ASLdRH1AsDWs8mBkTfwzVZfPUwBrpEHgTVY8J7F72Hg4aK3W",
  "key39": "2D6SbkEuTtEhqqqUfTFsrzX3NaTs5YS5oEYf8iDj21suV3MgEd7PDN681ec752SHffzt3WrDcCQtQgEyqsgJht32",
  "key40": "3kLKPWPzuzdZbgLiFiGrGHs3DzpMmwdk9wMkFGJz3T8yig9iPV7qWdFcqEKBc7R7ACD7aUgjUppXPYSH2B6pUc4U",
  "key41": "3FvDr6zeY6JxPWmQcf7QEpE8fRH5DKpEvwAPSrngKLTHFYw6ZCDKnSct3vA8m9ko2rNwDMsib1QK7rMaSEvZXbDL"
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
