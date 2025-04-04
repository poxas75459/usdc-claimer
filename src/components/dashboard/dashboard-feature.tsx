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
    "SGJ4Cb8XN2w4yFVeevYqLnC5P5aKT61WjXhs5d1VTNq5jZfwiiRa5U8PFCTtUNu2tLY1MF3d6USarFESZ7vutWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cqe9XSLpZxG2sWrcdao5wtd2YaUJY5rwN4cU5vCoRWBQ2QB6n8zNRkrgq3BoBWoappn5XqCejTtXbBFLRAt1x2R",
  "key1": "21epVhJzBXNt46GePMZ988dZrK62Fg4BUBV4Wy59MbDdsUD52v6LXNiAxZodqvvTPSHBvX1iFuV5XcJBM8Hu9NCH",
  "key2": "4AbdzsoiufN4MFu5xHaVVzdYt9Ufro7Cniy3694tyeKEnzR1QGAKQEe3GfccVAsuNszirj9duUCuuRm1U3GpVhNb",
  "key3": "37xsBWgMvHeavymjDDYvc3HZvUTZJb7pA8T7vXFE1xo7UQYEDQBJAdQCCVzFqz3WAV6s7bGZrGTinYN53cZUypr4",
  "key4": "4FGnNbtNoBHxwdj8V5WUwkMopLJRp9RfsDSvfrsoBWtxgx9n2AUZqxnvVbVKNzhwJQffpA16wDyKFQd53xUeWaVD",
  "key5": "5dNXqoUtds9Po1YEbvGjJWzga3WVPM83kuU1ypKrnb8PCDJK4QXA9QkxUgV6iqUTvKZNj18vwTDQGUYLcoxRvg8j",
  "key6": "4smL6FQCKTjNpjVZKfTxdqX85kEWyYeQz9kSqqYTsUMhzN9sLbLEY7BZ7oaTbNmzcvAYGrhWhQseVp9kdhctysaE",
  "key7": "5i1K1cVqGmNEHgyeG3MevUQuH5JLy4m99wMHrAuYP4Ji1CtC7jCBpPf2NPQrSyWPtBZ8NHKtTq4duWM2oCHR2fJP",
  "key8": "2WonV1N5RAWnBw5AJmWaKefpNrwQukemS2QbfbG32cKDvQEwe7AwWHWeC5dKkkBxTfDCupQqHKyWPZ9TZYmzR61V",
  "key9": "5JCrXBZ29TdNzKG4zNaWMhp72F6Zw5Ma6eXXUrxscqFmbTw8Ah3NosfBFhYQj6QK7SDcL9AysG6eUPAP79rADpzY",
  "key10": "fx69HoWexoHFKMtajEVJRKx7XRmfCaoUc87eqjzrk5QVaR8FGqJn3GRGXbRmooszZiyLsUtGfsQug6c7TkE49Fs",
  "key11": "3PoMLdtZGMpMxRCdJjczqwV7raLVeFzryd348nhobrnt5avpNJoZBZDazF4yQiwbfwbLwqVM3hoKLY7aCQZznt4i",
  "key12": "324GEhngDDgjBQbFXZon7VqwXTaYkpKq1kRSUN3F5EyUbY6xUG7fnrGR9Xnp2ZJPwqbJbeoHTyu1oqvCPwYmX3Mi",
  "key13": "3uL64YK74gif92ej4q8Qo2EEdzSnPAf2WKmc9L8pyzBjCk6SFZXHiba9QtLGENf67fEQjFNMcgQnQ4EaRn6DjaQ6",
  "key14": "49n71rT3JNThPMcTLv4apLMZDLU5DhNMrqQWSPdTdD3sieVYhpMAgR9xr8xZHBnqpZ1D4ceiEZhpgEANrmBEsH4y",
  "key15": "oEvazmma1McFMDNcrtP3X64GX8ktQVSdjodKbGSWSnYSq89yzFccwMH5o2pHELKViWZf8HtBwouT5gdwNqVb3A5",
  "key16": "2DpygAfVitWAyuEAduPCpp63GoHkWwoDqs2Y1p1e5QDvVEQD6wpgG7HvYBMtUbRHBxPu7ovMxQobCdyC7RRvbZXp",
  "key17": "79AeYZVph5p7aDiBZ1p1MMdY2kgHCeWn5ja9DCmyWLWhMAiUFU3byJcxBrqa7Nu6NCX6P8rdMUjojQrkhEMx2Cd",
  "key18": "hdTJyP4Yu3keh6mnoSikPTHLemrkEmt3xmUQyCDHcfPknTioSjFgtubQG9gDwAsoSDXSJfM5vsaVBLY6rHTYZAa",
  "key19": "38jQR8V3y7SYKKm4uBQm2C1ykFY3Cd31bRjcDARGmwdVP9p6RbftUeMop1AFx7onYyEDrmHdbgaehnNPhqcE47tp",
  "key20": "255yPSCgx1FW8A9zWvvwCavVn7JHmSqrRsEjkmAB2km6qMk7R5SucdyQJUdGmqR2EsRXzXwJ7eaeQwCo9wzLrSNv",
  "key21": "67BkGo2sio3Wjg6yERSFRhbiczKseZQbqTiX3Za4x17RzTHdQRHKppX2hUVSw79hJ5RZaARj6F3yghi3eMBtrsCU",
  "key22": "3Abo95GwWcshh7FUP8AfoyPcJuDkxCKrn83MfPoMPGuRayZL6E1SMuCuDneNz7gP9B1vX2H8WSf4oEzpstFic4kP",
  "key23": "4QCDLSLVdoGFVRhxatnoGRJXRpv9qdcSSmq5MPKYRLQ2TUcmZMa4fVQmW9cTZ3PyrXUkgjAsFdqZVh2L69byNbJJ",
  "key24": "3Ma91PH3Qk1V8B1app6PA4rzVoCht3hZZr1tzDzn6e7mmN4kHWNpPSkZDoZ9Zi2bevKRZPxA9Ftimbz8sf7eiE6M",
  "key25": "2fehMex1FZ7A3BNqiMHNP8cC11SAswdmczMjToSRWkjRg1ou2Q8sstp3qEcTvtBFdhQy31WJrDrMiyKY39R6dESK",
  "key26": "3YzJUiakPN4Ai1QeL1DrP2wBAS5XqwYzAoyoGQjjPfnHcYVovpe2cRr2svUggjR2KLesgeLmP6iSigsNMo55xgC1",
  "key27": "5BkdYevqjKPwxAqj3EaPznjHK6NM3ehwrupu8iqLVR1EvRucyBQC4GD9PhputLoEQd7ivUKGBVearKBq1XWZ9ktT",
  "key28": "3yjr1hSz9PTRx6uzrEQkhC3Mvor73kvtG1CGsuCmLNE9rFeDxUtAnxYJMZSF7DBKzYXjAe8oaaTXiuvNFpGTq7jN",
  "key29": "5Bf6MmjLPLQEW5BfM5t1PxC11mpZ8x2riwGpne4jpCsi3jjNWimjWrpg89N3XHvYBSC8KTsMYXixZ9uDauBffAXG",
  "key30": "2VsqnHPTqwP541B18k3vnmndRhUYiYXUcN3KFYiVmU2vgV6Nty5MC8gyTVUv852gCN4JAXf9j5Hk3Td3QRGpsTSv",
  "key31": "5KQ16MuQpZopjd2u5PFUQhCFd1zSygq4ueVx1PyxsYVWANRFG2GTpXuNmAiptk8aFxLA9uAdcPwQ7rgMEhjKfx26",
  "key32": "5Q4U1EzimFVdrZr2WbqNJBjEaYs1pcP4r6NdfkSLXMuCdaRSSFVw6HVCmGEDyhrEwMUvt3wTjbs9YsDiJmc5gPD6",
  "key33": "8rDY1qoydtP7NbgPHK37Ps1qS9coAL32qyUri6WNvphkYp6stCVnLRpvcuzeYPcQadXwyA7eHsYxZkTszJ6YUAD",
  "key34": "2T5rRgXFSnDV9maQRnpDG8RhMzkKbC5PLR72BvKqozR2zyN8PTgZrXwLssYjUpw8HB6B1mmsxcJMYE6DMp27Ynn9",
  "key35": "5Mz9ZFZg1oiuoW68jQapFtYWykcgKR6aEi7BV6rCUY3LVo9dR7SfCi72GVUMHcciRZGZqaY5XyF37T2UMNVcLHcG",
  "key36": "4TvqTwSfGWix57mBJyaRBmMxhe1Z69tUV9G3g5DqVDDSpDRaABH1XdmM3YRMSM242zhNtffhqAM3vDkxpSJ5qguX",
  "key37": "4NU9HWTCXJd19424t57oDVnRMQyLLowERvk9wpEn7x1fhELvXk4pps2CyMBEEfvcY6NtjSFYr8v9jveXWX3e16LB",
  "key38": "3T6s4XvoRyMm3Nfdwbg9HpMcvCdLgjfAhNDXHbndEmKhZvgF8UzhDvfzA48JHhzWMc4pveNnRLyPvzMCvDX3YQv9",
  "key39": "4jCLgbf7ZiiMJqEwQheZ3mi6fVQwG4xp6oWotxTshrWvKFSMWjYj5KB8tRjhiDgpc9z5ZeAgqKEaMHgJnwEqJ1TQ",
  "key40": "3uoN7oMbSJEjXV6V89ububaR2JuBQ3HbYKb8nxf3YPh5xjECvNqGiqe2b1CGHjMqU5wiyxAUoVtVerjfweL1L8a9",
  "key41": "4KmkUNUiAyXRybcxbE5YVyCq2CfcMpUHsxkfF3FZfNZMwKdU663diewEJmpYCKkBD6pjMky2iGVCWEtjCrjbZmKw",
  "key42": "5TCu6wWgiy4swmEShMbwjFww8uPJGMCTbMaaB4xY5dvzmQBm9vXHwWNrqWZBDduR66srUa5XMdfN6m7mSHFqpGc6",
  "key43": "4kSuLG6RP47mxaNMuCv9VYK5r1WA8bptaTamCFR42Loo6aDxPyF28kXZRS3yFgs28ynaJmKyycME8vUvjmXzVVLj",
  "key44": "3xvCv2vowCmQPLngNuMAaoCLb8rUyunhJL1LX4y1r48g6m1CWn5GrcZ7nbsdbgZGYwLr3gYVGnhkzsMboroHgdVU",
  "key45": "4aNwmajeHDw5ekJ6m8FfpAEEAq6AfWeqRvnoN1xiUtCdBGH1uZLu7tsbKVZzrijynKNE7tP6MXty6paUP8kmTL5g",
  "key46": "5RQkoALAFTW8noA2EoNKK8qKQejMcXqtKvETJSDC9cNGbW31CxoHwmF9Ry8Bv4HUqDawVvbQBAMJ5ai1X94sNLDU",
  "key47": "26RfA9vBQLzCoG1WYTnB9iCrMWw8BcYAHNNgDTq6a4q8tzHUNBg8Bv5kDMvrHxYW9xCvqrLbdyvquLsnizDJ3tUQ",
  "key48": "3w5krqFy1jCuEh255E5QdaLd9kcgdFfpAXWQXB6K26VmXbtSGs3D3vKdssKUbrNYS86MYqkeNTZSgwVV9VsRBG9s",
  "key49": "4wqihenSxivR3kvfF8B1jA82nVBnRgZyHanqsGg82jvjx7iVthJzSgY186wtBgrscZXJTRc8y4ggdFn6MZa4fi3W"
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
