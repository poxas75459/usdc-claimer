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
    "3CZ9EenjfKmZdJvBXgcpy1fdfF5TK4joJDx2Mfb44EKHuNxJFfPcinzdjqrZqaCdVX9CxKarQrDAvPeWGW6uwtpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fyhTUR2XKHoQVD63doGGi8o7H7VM6KmP2sC8vpGPQKR4XzmcXf793dQS93x7CRqWDc1RXfCLXT9mwqvjs6EqT1a",
  "key1": "2TR3qrfVSQkPxu1HVXmfs64RrA24FRwu4bxLns2dkPJpdTzzRJbEBCeVoBn6tGWKmRg7AcWL4ToPkbEVb2pDvvZw",
  "key2": "5GcU1ST5Vas28L5K1CxBnWQw3Npx7m7yUsqZHLTxACC1de3xJK2ybYhZ2hsns3hUoQgMCiBGVTV2esDrFDiFKmfb",
  "key3": "3SYmARRdLqB49VLU22sgronFTKs1ZLAj1iZH1PU4YFmjsP4YjMGfq34tvr4FscYyQ34LTqnEgaxNT1YUkfZv96g1",
  "key4": "5CzanpxtXcD3wvyHBKsoYAFjESJNMUV4DTsv2UufFSEtWrfqgzm3m6Kvfx55HsifMdS5Sys3AkS92PwNUKtsJoBJ",
  "key5": "3WPPpz3bShD1153L8ZD7CLMLiuJqeyxtjLR5zuS1vkG25tVghfHwHgcq8a63hD22d1FAVb7W1RgWWUKbcXyUdyeW",
  "key6": "4yysUibvFt1hhoKn9dENNKcD5z5w5bBk1xMzPFKRxkqKfXmh2UBn2d8i3HYHRJHZ5FtCvyPCf8Lih5VUKiiCne9X",
  "key7": "4WkCnsfrqnLC5Dyb6ZHnz8TMpnU3ArinKopAuSfA4hGY7erh3GkpVNCMCgh63DwqiY41hAs7BN42x19cuc5yC4sh",
  "key8": "4QXBScErrmPnD4B7ghAZduSAGgYPRoodcxaSPNMfDLJaRjy8JcgBXqTDK7bjsSx3ZdaMx7AZ13waBZjWkiNV6iHw",
  "key9": "2fK9RgK8ycNBjmcCe47ynSAuHAvGdhLavbpCZWFdz86WLNx9CDAyiizfPmAvY59JXuSdQXATTmigpANHn7kyh46F",
  "key10": "4BDqTZMr7uVAMVnCZUECmPQMvJuLuruVBJcUDfs4V7iVzVgCKyPCH8C93G9cfMt2AN7urb8ksjtCnReFLCJuNAfw",
  "key11": "3CdnM6x2JwV2HMoFnKsuBZWn2ifnguD3Eo9XvqBqnDQ2YodzZ6FgYsfD7Ja9qRbGfjrRgD1szGdv17Ai1J36Vmv7",
  "key12": "5ePkwpynLGiNd3DwzkpRtFcbXVK4rnqvX4v6N8cHDAHL4Cc7yihPhbt82ExNjzrAMcKVpAMHp8gDA8fU4mHeWAdh",
  "key13": "5FBjmBQeSSj3X4xySpW2FgQ8DryCUfmRD6NfJeC8AE1ftpeWHC6z4Bcqs4DKSa39LYHVLHp7J6naAKsWZBH6Vj2W",
  "key14": "5sLpKd2XkN9zgC3qECiyGRjVoJ1gyzWzyVaYDii5UXYQoRhSchGG28YSrKPK9Pg5dSpVmd7CQhBUYWjUsBFuwb5s",
  "key15": "5jh1ZLZF479aAhvAmMPZPiQucy1iV7LPx5Fo5TtprZbJ8N4JXT9S1JGxL6uTs1eMYK8ScJAwt7MwL5s2j4BHb9g3",
  "key16": "43iDXp56LAZ3PtvyVVHLTtFwSAukpggFJThoA3XhaYDsqnSP3cTZmvaw4o6aCXBF3s6KoFfAAxfYWwjUgvcaQjwS",
  "key17": "4xT3iqcdZdkjcd6Rt4FBDuik7mYFgKMYaUnxSDgTVwqdgRP2yWoSfyicVRqnqHQLT5uwmb5SCohGMesJ8FZvgsGr",
  "key18": "3XQ3kUqfKbMi9pspKgUzwvQW7fcNigh6VvDoqCTrE1zJRm2LHnrnm8wyX4UHjXtYseyUGfVpcYtQWrqLV8tarBMo",
  "key19": "58gs5LmoBSdUrV1YzViAoE3432iXR5gzoFxfMp6mrN5ThySZ65MoQnmb6jxFVyPd8QudMEk2BwCCtS4scmS22SPF",
  "key20": "4319jkMow56E3o7LKP8Y7LunMVaJpGXCeoNnXtqAQXTkEfZdqQLSksn2jDBQkHw4D9TozUT3fKazqkpSoZwxBEgS",
  "key21": "3nPf82ZbSnE1u1YtczUdQSY8SfqPWpUXoFMtdUcnRFmeuCx47aeyMG9EDfpSQd53PTyFcCTvXptKRDDZbBp15BFL",
  "key22": "31G4csFahKzPYta31mnEdKfRky5E9RovHKiBVje5pK1FgbNz4cKSzBz8Cpmbm2u9kAwqhbKTcXxgDiNGK4USqDDD",
  "key23": "4dWGmjnXEfySohzdSF757Svr552UZKRNbcT5RXPRBisJR8VraicMjzyKsnwTtMipHvhMKK2ZMYX4BnCYmFYvz6N6",
  "key24": "4o9bCzuvJxmA1KWSJR34aLNLZjAnoGBCqF5Xu32PV6wcdoazekh9HwtAP5fqikdsZoLV6DvLjjKJsNHApfWW6jPY",
  "key25": "oJ77pfUTaR43mkPJ7saUwwjewFdZvVTKVnsnSMwsHEYaWAnRkE5jgwgnRh3Cz9u3EWxxDBvJ313TkvgQN6oUuJn",
  "key26": "3ZD41UYaB6LcdjYv9qj4x8hTgf52xn5HExuZTyBWk4gp1aTVCXL4wYnvK1L9bnWs3V4L5ggvT6eYGoCZYB5eovja",
  "key27": "3EQvesgTDQmHezt9B893pdC5YmTLqTQsnFHejBYy9DjCrdpEHGmPFDifGLZUx8KYGgV3516BPrRkeHXa74SHXdgt",
  "key28": "qcUXxSVuhvLN4T2LK8DBf63UH7kfFa2bNAPhV2weQbCVN59MbHKAcM9qcG8tzBdw79JFXHThWgWiPJdSAj3u4P8",
  "key29": "5nZVKJ9aVb9iiDgoGb2NAxQQATLDmvAGGrUswXUUDvnQKo9z6sfKPuoeydazotdw3FeQb7yP6H1tvitRFBLeXVTq",
  "key30": "2Ab6vb2m6UPdCk4ZZw1z4zsgZqWBPVDb2xEKbwgoYEhBBZuprHvsKYXg875H9r3GHs5TuiPDwhmkn4oPZmPd5hCX",
  "key31": "63zk4NMagNNtdnasuGBQQCzcypYuQHMmPVnDn1wYtUcTMGrgJDnRmLhRr5cT2r73LaXDS9VEvwYnL6UuLtP7Tcg3",
  "key32": "ieN34xAwJdNDnitDHQVUqCwjo9Ppixj3bP7CuTosdqTUTkWUDxj8nqZ4UqedW3Jb8T8pptTUw79dyhmKm7fs4GG",
  "key33": "4ep1FnSvDZopFKtXKHGuxYMPNEHvsbTUCkzd3He4yH53arrQUeHpxB5QRSjnGAxH96cmpjCndraX43Bx71pgTPDW",
  "key34": "5D2kx7Kri3sRCNrPVFbPKatWMWzUAZgfEmZUdMMc7BoVzbp2U4YMMPqH9V7ZgFvyqBSqAyBjUMmvmRUjuoGK1qWs",
  "key35": "4vtNsj57NpwrNL8S4ySgBhYdsh5LLjSH4FaaugNxp8LVFjmehwYQYqdh1PU5M8QChkU2SuWmdmYN4myGxWskKKEg",
  "key36": "6y2zzYZ1BWWLsNyY7Psb4FiLJHwjYXC4jd3E77Bmcrr3KoUJ2r8qxwmy87eKYnprTDGUAppRHYpXzbbh75KMGwd",
  "key37": "2WZSMTHZx5jEHEUPcBjgbAZSS11xpLcqXzcRcDSxJEJdBJM11FBcJTFgW2dfgXkNrquw5eZcsKrxYrzxLw9fiTDP",
  "key38": "5UYdAeVFV695LKeqEYzPgV34JuNKpjqaqskEMr6SMWw6RyxcsoRNd878Ng9kgRwvgMKbYZjkjXzTPaEjtG6FrFjm",
  "key39": "5rb6QY4S9mA2XAVAPP6XMLcpcMNHQSV7jVHUWmMgzw5PTok2iDv3z6rHHUWQUtkCv4MoRkYMWpDV5g1MfCNvAxq3"
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
