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
    "3Ds2jKNGDVWowQacxoq9jSoo8bVAyKhKi2ef5uam7YqyTHJ1QqdLE7n8CcrpuzExdLojw9h7kRDysD6yQsjADTYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZHZhNz24tDDAGpfypkNsb3XT1oiuHz8Q7QKht81nCWz1un7Q3M32KDYi5mBMobmxNJV8tsZe9LMnxtn3FbJwPwP",
  "key1": "5vgdaLJQ999tN9E5h3RgNDZLRBZVJhFyvVZPpAv1FbHzvhvoMD2imkfE7AJPmWo6NC1oxy813Afvmfcfa8TGHTJf",
  "key2": "2S5Dfv6UZGJxnhMY1yJEXdeRyPKFGb7UH9ZMXPQW4PnikpwEHvc6BryW5FudFXkAJtKyLUV6fR87omsV4bjyK7Du",
  "key3": "5fgUUmiz6K6b6s4qXpigz7P64uHG4tcQ2Ku5SuaHkEQ9C1WaNdL84NxTgyjFsCwn435vmsbzwP7bpc6GEgmB452p",
  "key4": "FmaUs74yXnxjMBWc7X75ddg9CNKDa1icSLGWr8HKrYCXVHjQDP65PCpjv95PALuEfBsTq8X6aLx5BAVagvskzy7",
  "key5": "3vdxe3iynKNMUVm9uALtxvPBFbaCqaS554MPvdYyMjWTb5UdTAKYFYmrh4x7Xd2HkxExsYBeEJ4Ukefyt1sAEaJM",
  "key6": "5P6rW2fHZ387UYpyyyJeCybjmFRBR5EXKu1n3wU2td6MSiXUoZZYEMKAcBEpSrkYgieqearHCmqFMmoy693zERJK",
  "key7": "vataQAdbZsKQbxhgjcUpEKe4aJDEh5cuitQUu1td2QM6wYMg4XifZgo6BeDrncSQ9QumGpeiqm6xSNqPzUBqY5s",
  "key8": "4NZaf4g67QJ99XiFBsUPfpLzEXvSybn1Ur5afDdHB7ug46cLMJsj4qCDEiqvM815JDCmDCGVhvJ4eawGRSvPBeyX",
  "key9": "2JgteXpwoPADZ1ANjAsevg2r2swsSAeEq1Debt5ZhV2w2A4gw4Fe8bnvmkTJTqosBgrbPF3KbsdYPMboXkVHoWv6",
  "key10": "4aRJZenBAMiHkFZE1BxTP3uW7eSiUWffPcdz9eNEx1kHcwb1vy4rwg3BihrrfrnJu9dk6DNRpTy8nCsYpgdrYxi",
  "key11": "5Dt5tb5yCzjbUznjFchw421ZmBk5Dpo7mew782iMPGeivrtYQKVQ72s9Srh3xuypVQRJ23KGRs66oT9zPK7xzkMB",
  "key12": "Kce5BFR66CwqrxnhVRs3NjAnAZoZtYCACqZtYoA9gJFAU1ur55qjva6YS5whz99pMZPci1EfLAx2X5rMwAGxnKE",
  "key13": "88CQusNZL3QvyH8oZqef5aTsYzEyZjP2dQtGXtuSDSdWx9qePi6HjoafyraGU9w3Kpnt2gqG1KxK81Ljt4tJK3g",
  "key14": "2bJuWmswbZ9ZAXkMkUJfvumERD9Qs7eP1WdCoVZCcRa7QHig45iMjb1g1rzQBusyu3X8Qq31Wh5AnSUGkcnEm8Z7",
  "key15": "2wRnRjHHgLdAv8a6LxyJRekZFUVcAKVVg3Xj8WW9f6d1ZGtrwfT5eh4XqKM1rwrwbHR2jA6pBTDAwKRqQR6J3uPm",
  "key16": "u7tKeWJrxjBpuDagQwK9wwbXWNPFdBMBzoL6GA7noJGyxV2bXkcgzArYWR3bXvMKTXzRr5AHDR99uJ47PZhHeN2",
  "key17": "2GbQHxD4J9MAnfp6C3Y2nKDQy3wQAEzKaP49SeiRMP4qvFp7fwHxTo9YX2cgx2QaD9NAtkRrcvCyAoTK9dGwv64s",
  "key18": "SSMLkmLZGCfEeLbXmN3mhQHzKjqsKZAZMvL2mx4xtSGYrHuq6vDq7qSzBsLTfXAtJybjnfPkAvQbo1JTgN2hhEW",
  "key19": "3ziLnnW66RuskuutgGzbF1YAZq41pZthdh5YyFhcPSKMBShratBneZ7SXMo7f213fn9fPdhN4p6KbSMjmopiwTKa",
  "key20": "4pAK1jqhZqw6rJJCJtsR1CB5wHAyU3AytPinN4vudJy9ZwkDAwEQDnPK8eekAaWD1rSCLTytzJ6qGGf3SghxLx9",
  "key21": "4inackQkaqefRtHnnRLHCQ6VbMQLyF7fxstPLm39mqxhxsKggxev4trqWakKk26usCNAUYp3cf3F4rhWSci2g4Py",
  "key22": "Mbxkjm76Jdd7YCYZU1jY1hb9pqj29qTTTAjr4VGhTFAHGTzzL1nQHH4HPsqZHDfjcmLqsnKiuGLyHPXgkRNbY9V",
  "key23": "3d6sVm6U9h3BwrVQj2PQM6LSXDqjwuyJ6EEmtfTam1bbX4myDmXx8Vgh4PNsPkPNHCwaxEMsEESbmMognKHEzbRc",
  "key24": "3447GFsSwhtLyZc3m6XuYDxdoPM3yQaMC4bRQBXMLYmCbFtxFPopm6jpgxyqv4HCxXw3LShsgkPxyJ9zmzTVJ5uG",
  "key25": "4ZTi4wS4MNyZXQbwSvtRdsucMhc7dytMbuhk6GPKYqwUaEFTVewAsRPGaYfLY2vrM9Abvpx6qpVQ2PQXzBnV261f",
  "key26": "4ULv3gs5qUoR3xjFfK1HSVFdvDUKEDwBoQwRQreHjYxPCgDGKSdM24vq19QaESFB9Sc1uKrVGWw8CgPLEyjcm95o",
  "key27": "ExD73142E2bAkioqQvco2dpd4wy1Nu4HopK4HeadYCiddsWqtCv8RXPNNxf64cAaNWAjZjXMJuRqkJg19eNBB2z",
  "key28": "2TSWBBVgVGhgvDEzF5WZjQ1GumXd9Ehx96VmjdY41Tf27c27HCxDZd5uWwCdH8VtMFrVwdm8EAhmzcK1ZTUwoayq",
  "key29": "5TE8JWFnjCbft6tQuQpptUHBNfovuBR9hrYxxFZTs5Fov6NxeU6LSEutWdusdgy13h41XJBjsjqWCmmwqbbtAMB",
  "key30": "iDeBkJmNS5QAri8vQSfHAN9eAUhKsyVzURgRxVQy2iAQ1GeoZnyrqLwzyZM9whjQCBrFhKY7dzNsFCsuvcYm2v3",
  "key31": "2CN4mkhHaHXmSuD9MWpsJaAGFCtPxBVLzjb56HryoH8PHUH4xqy6iCtJdkAnpTo8CQ4qPXg2pZMDdNiDjXoob1wX",
  "key32": "5tyTM3mwd9E63jyeQV87iFajjhGjFj4JHzAv7oG3B7tGYNE5FWG6GhAqnrB9Y74r4f5Svk7XUTK22cF5Q5pTTJeY",
  "key33": "2nhXkSpcQb8TXdaG2Sh8m1SfmfkBnNjKkJwp475eq3UfqLUnkUjBqNHCJBdvHQQvfuWtfpu8dMJamoHTmEiXTCfH",
  "key34": "627Bm8AHBKVe7dwWi43sbDUQMFxgoT316mM5dHkgY4zNdDEqhrYNsvqQUMuX1HrCEPJMEjmbp8L8SCVWCJX9ewiG",
  "key35": "TqQRJSDcAshjAnux34ihMDDMeaVFBt8Qn46zwM7VQGLQc4y6Mdx1VBiYwTwcgHP5n85KfncRwx9mgSw5VyieuyN",
  "key36": "2bdfSBRdELKvfRXq8fuJKHrGmXbsW69Nx2kbaFzVWpC42UXix87Zc7TT7zUtXThwFFYQvFX8x1AYxpsXH7p2YJM4",
  "key37": "53sxwDXLbaTMhguAJzobhKjus3jNkJpM76VWbBLJ4Xpfd5EDU8ETGWysCqY9PFqx13ri6incELbVd3aRArqDFg2D",
  "key38": "3xzvs8jepZa9JstVimMuXNpLVDj89kguytmB2Dmw2PUFjhhHemAoMfFXVQmyynhPXrQ2wLyQESXzib8DP4A8FJ1X",
  "key39": "3oLHEnoRAcx9EBJcZBRxt9WDdb6giQhyStLJu58wbX7cjw6umX4NYyh6SDcmdJZmcnfaM83oBCWyDtr74H51eUkv",
  "key40": "34vaBhMFvzgJFqGJkQbgvEB1WaUkVGVXgCvEHtXRjML66qnHhywb1ZD1f191GLvrNaPkjs6U4un8f9cbt2srYGVu",
  "key41": "5BnLDzCcGa8gZHvZcMKg7Uyw7LhboMshr1QifrMKszQWnR9X9FBCrvpvAyn2YryVxgojcb8yyL9nD7vRbf8ScDE2",
  "key42": "JRWBJhzKVQj3v7Nu1et3TmypSpCu95Py8aB1MLy6tGwHFxohsXZCmkEUNx8pdWMgai3A9AvyV2kR587txc7ndPj",
  "key43": "3SdT7tizdttQaEaeeYV6jPE1YAFBYAWL3gLaQjCvUvSJ1ntQV786mmAwYoECj7r2Q75KUgnf4a9xKMAGcAWqSq51",
  "key44": "5vDK5dUxzUvvM2HVdCeMHQw5guSqc2oGoKCUFWLhE7HWgG9PfYbFCzt9W4De52gp2ZT1YxJBm4QXsu16v475uV5L",
  "key45": "46TFkYvs8fp32owmc8PQ2MQx4cv6piS3fLW3CBEW8xKfavPn363uPe2FFPphYfXqkVfYSfbWG8kbdXY74BXyhKPZ"
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
