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
    "5bxN3HphYRvi8F6uBvwSbFYHwaU5Vbiq8poW8wTwPTnxWquPLecJMFPREckLDqz6mqi7hyW5XwSwhG8CtpJNM6tK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45NUp5bpJHcYBNda388UvXcwGyzupFBdgHhqqDAFAovPfdBzvixSSMeNVbvWtyQtq1ZGKh3NdqgRcT7muNNF3WkZ",
  "key1": "4PpALpiuzLdY4cgq3oqjCEPTytvFa4ew6kjuQqqWGmcvVxQEr5a2e9sFbWSMciJ2arrWFgjD2cct15kgRqQQ4YVY",
  "key2": "iQqW4nZPP32eVAqMy2oCAYxfrSzYRZvgQze6wMNVHoakWMWkcyTLtoSjRFYBzH899DcDMZaqeS8n7CWuphZMXTf",
  "key3": "58pd9fHRDxVpMS3Gk6qLnuKpmkUTiWC2Sv5qHZ46i966QbGX5Rob6hNH5qww6DGPpcxgK72uiuqfxkNUyAi1Z78f",
  "key4": "2qoMCPGWPEK1MEhFV8f8aeZsRwFTwozDU7wQH5gQfqa4VuyUA8cuD6WdZnKjoDbLTMCHKKMhhbxUxSveTR8nFTFk",
  "key5": "5MBGNnmeyYBsUpWTch5TMmVAtS1Hh5rP3LvA1ygVamYZCXKh6zSTaJH2w9kotnRdKJ5wYUuEsGraGVmeeBHsMwMJ",
  "key6": "28PLUKbjtEZzMrbZwrU5kS5BuCo7FutFoZ3DrKrYHr11v4kJqMG6S2gKRkVRkiPPzzAKWBsEUi4HDoYnPgFXRC46",
  "key7": "qwz8Gk8uuFj3EjubXjg2zjt8oWUVqFpEuP9U1puGgJP9JWoQym4zyw5p1WM29Bzk2dJk3QXtN9an17818LVKFn7",
  "key8": "5NkdXA9y3Txzkfzw8QfUjpz73gqhahY7zKLQTA97TYPdKens1GqfePfWYiQhrXKsXUs2hd6XFj3PAunbH52JPEw9",
  "key9": "1swPBQD2SSBo3YEXK1kkDAZsyu3k2YRaNMAMhiqassJzgHKiYTAPM8doTGfgDfYHdZLW7LYJRNtKxeGCzXAmxnW",
  "key10": "FkyLqB5r5W4UrX6WKsNDWa3ffpVi99uwiRtQLfKRCYV3WrwgtyXuaqcxzW9NMW15kUdto7o4frkYVsWBEfkNSWa",
  "key11": "mwdMaV5vzyMbVJMUCuiCQk3S2XCFFXSeci8sc2jeAoMwgwBidMLuwXiX6YSvbTKaGzdyqjqvQHRZ8sA8YGMF3BP",
  "key12": "5LaaqySkKJJzija1c3VPsHeQ1wKR2MDRUiLiiiLQnRo1ovB2gHrNDnf3ohGh4NAtyHi9Zt3Rp4cxbFuEip2Tdgyh",
  "key13": "3m9cvFfbqEuGgaTPzcYCRcqMSDZurYeMFE5PPgB4yRgk6ZDjTzVZQAwK6JU9hXrsfJVuy4898sZr9Q3iH4jFDi7n",
  "key14": "4iy6Yvo2dvza7mz2NpgkYJ7iW78UW215j54fUDHsw6FKU8n1v2C2MMNQFq6p7on5NrFH5Ndfb8NtRbYc38QW5QjG",
  "key15": "5Q1beCY767Hxz6jLUf3GYNykW3c6aicPEsxwhxPNckuqdszwRbsoxZTmutpM8twvuapZcsUw1Q5TBNfRuqYUYykA",
  "key16": "2g71TDTJSSgtFgGnNZBzxF8hqDUhLzqiTc9Z98uNPwW25iFyeovgEDNaqKAKsjfiNX3FgkYKSebsTGXAQHVFLpkF",
  "key17": "4F53Xd7wZ3ntVZac8nbEbK1FfeuFsymyr2VhDeR8Hy5v3eFPVm4io17cHRCivczRdoBFDXzhAC8q6PKA5AN8Asib",
  "key18": "27smi5ihGUGnoRjMtxueuWxqLSdXBzL1MtUyund3qsWEKoGQVpn16JoXXw8SQhuxGW8TrBs7G8agHyF8Jq3YbhLt",
  "key19": "2kpXScSe1wB81nxmLkRphSUxLW7pSCMzf2m27pkzB52FMHmwowL2ffbNrSjKiSZr717vfLigZxVUc6gmNZhuiiGm",
  "key20": "5U8Ua5RFNCsREhoznyjkLg6twFwo373GPbEzWm62tuyKfRmQ3X3kXr1Bwk3tawq6mYyyVWKMwjcACwkwgkLAGtsL",
  "key21": "4XYY4YDi6mztJ4dCm1Kqrc4US1zhKyfdFQY6BJHMQBHPpJbPSFWY7j6XFvmDdGHniQvCQFWehuUQzR6ND6HkLrGz",
  "key22": "24yTRvrVdmbRMcHAbQXjbZBjWuAK8MXdngvsuusmzn13ZGbVMMASQoiK6SCsbFyzg1setXw76Skp6RGw6BHfKNAF",
  "key23": "2hpJr7gQW5HRR8P8vLagXKJqtwQWKRfpLGuLJjamoxCvh1oeq5dpfFhtkKdMqtgs2KixpmJ2B9bGnpprVqr2FqE",
  "key24": "35eSMpcDp7NbnhRyYaJPavTkg1fr9NMcMtKTnNKCEDtxGJJR6pdpogLc4PQmSFBUqg33v52w6eSnwVHewYXRRdc4",
  "key25": "YjuFXmszz1r4kznYVRRtLJQDbuUMWseYz9qS4gCUdCFzDTkZ6ZDrnPucgtEX5js3a7vXPgiEMEsyS9pjCjZw7DB",
  "key26": "Dg9Ue5yttisjTTcBRRAphdbAnXVKhqhU7wGxYKNTeHc2jDiQ3hEDvaHha4Tq5sJwP6rsFwhE9kwtj29d5GYDGP4",
  "key27": "sVUeU34mzSZAs9s61b4bqXXE7UqJ5qZY3t6kPa8ymkz7MTQ6uj35yJZAXmvvsiAw6oDbEtnyQTb9byFX9C5jsZ7",
  "key28": "4jDsk3YNM4BkASA1cdv5Myy5CcS8eXaNhK8MkUZDCgv4Pqb7BDEbrDyxhRCaQe2cphrL8gTKLCzCxBePEUAM9s3a",
  "key29": "4rZ9rcEqrzN9QNtz632bstMbTFfL74NDAVCU3NJYe5BFz4KeZ1Q6zzERuQv3mTUN5Cs33yfyYuEXULumYwGU4EW1",
  "key30": "32BgecBe9CGi1JAy5gVw2GXwpkXnKccGC2wumf4QsN4Nrn6CEU5P4YnswLw84jvQwzfMd7e2Y6rK8dTcDyxbpXbp",
  "key31": "3naiTVDqcSHFXs8xdijYTjCTxMEkAAL1ZSP1ksNBSANeeg5SFNEaTDniZCX2qg4VpQ46nvJT2ySDRWRmxMDWQrvu",
  "key32": "46KYxosUDeBRC6vsTeYQz9omLpMCSGuRDJMd3coZkg9vuqoL6er4EEHf7i3mT3r7Hph8HYANWr2c4kzHcHP5kKBH",
  "key33": "5HtNoqMPjQd6Xn2iYA2V4jxFy7rJQejLpTsYrncVUZQ1xLzJ9KmzDjvQeMaamZEUAVQHNUXdqrjxDY5UgN3gAk9D",
  "key34": "3CDsqTmWU4PRkUn9Qfaqoh8HCfkx4P6Lxr9oDid72jTe14QeLqmNjBK8H5XPRodkvJDi6SUnMVnm8QK2xpPAZZcd",
  "key35": "63bzyDtYDnsDrCNUubbKE79Si4LMJVxR61K7FPwFcSWHrdUjTx1YbuVMkry9XWvyrQH1UjAzHtCh5CDFQqnRyK1s",
  "key36": "3cwUQYCQiGrvp9LqUGFKsW3URvu4pUbPm3pMT2rsNz3CoFZru3qvST2oCQMaqTpB9UWkzn6x24TpLkXWKV5k4FRV",
  "key37": "5wFLSuMwJZgNpwbHZwR4fSC2EU458tS5ZYJCzR5g9Tnqw98JDZrg7U35dHerDGRy3kqbJykPQWrfj9hjhGzDkgEE",
  "key38": "5nweFT4fmcr6YX1fx8Noh8EC9AWXcfhFL8EEpQF8fuhCJejS8M2dt5oypejRfkLNJ58oSnbSSuaLKLqD3sgHwHZN",
  "key39": "3Wwufaog89mZsm2xqHBmjRYsb9ca9Fc95fDFkiv4wnZdcCfPfjMHAyqfWUyNBd6bq8qourdc55Dkfk2Se1qJ52QG",
  "key40": "4AgkVDdr6g61n7RZktmg5BHGtgoaeMZHECvG1Fc5QRNp716HLa4p1bKJcXEVzWGekPreEu1qBSKreLyzUHtuYq9P",
  "key41": "5hTzQgVcgQTXYs21QUiGyhGhGriL9SqUqb4y73c3Z6noh8BMXeWDaDZaQKwizn9Ss4ydRRGVf7zZYAc9Td9v4PGg",
  "key42": "3dYvuDrFmM54oFb5wm5Ur6cGQY3zmB5MVaxpGtM2gwXfqH6Db54Y7yzz6aGSe2yXCzE5RggmxVvpaUWgKSHMZF7D",
  "key43": "2quBodx4c39PL9yzwM4zzopdBQt4iJqAPykV4K47Ezys8skS7RGzSFpirNxqdTeGDmMuKNuBQPPFdi6txQ3mnWgW",
  "key44": "5ZUsz9CR2cx6GhNjaEUuooLpueXdCx68r9Mf14Y1e1ayyjqmUQESmDNum2Gndw5XnNxyz9wkpz6b18z6J5d8deth"
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
