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
    "2rhs4yyncTo7ZuBzGLoo1JSTSVh8nbWFp7YqnU8aq8sCjFURjrULsx1rcDduPoSa4iYSgN7U6jFiXpsuaUHikGPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yK1AfPZ6vZERjDDMF8gwViKckaF326J8pqUyiBDsPZQmrxxpQmWsmhiKuJDGQRfurUCy95E1xLn8mM6XFLQt2i9",
  "key1": "2yPNm4oyoevUQcet2LWbYspRgDneetvd528f7FaXpRvaTxcPTz3iGQmwaPq9GW29gZ4eELXfBt9ZtX4ySdL3q52H",
  "key2": "4apvBsMTmXGVSVB7UwfSYg1RnGc8QXihnVtTXXB7no87vJ7JznVtV4THPTvDCXVrPkGwPNCQ8iF3iHyjKA5nPiLt",
  "key3": "51u3ubf9avZXWcMLs63yx714h2AXpizf56BsoFe8PqX2cL4ohA3rGHtAiGZeA2HJ1V1uxPwQWBaR1UqC5F5cK7Vn",
  "key4": "nTFY2KxReqMcUy4L7L4Q2zWyDnes285NdMxXFjfmR3DKQddbedh9nioSGSVZmK17xcTMxH7q44EL9dFBwGDjgRG",
  "key5": "5BRdxKe9fbsRtSWLqE382yrbXfpEK2ugthE9jxhvTyN8ESU7KR3AEZ2uQurmn9abardt7BoNckTTaQ3nqnfnn17y",
  "key6": "4qgBiD27DN7YnFVFJTDCuyQpPL6YGoc2teVNB7m8DkAj76MYcwDkJizx51MA3WP4U2DARNNL6G6hPdjxZMCp49Vf",
  "key7": "vxV5Bds9dDEVkXsWRjiHdgPNDmkPiXfi3z6Fx5ffQ3GAi462CA5K2Rky7SgrQLBXCu9VuweQbppmjGfYvSrNg85",
  "key8": "3CpqBZuApGUtgPzgn94Kc9zGQsPNLRQzdnqGTxDDmvvQE6UtxdJgXR5j3g7mpcGQxMCzXqHTk9G5WUC4nvVr7tvq",
  "key9": "48tD82kz8a5ngH1FbfbdESsYfUKafrtTaaLrN6PTnnJEpySGRwd5EWs4wHVYUU4EcmhCNo7N26LgMQfVeBzMFHVx",
  "key10": "2MpCPEo6EHWgeGnLApPbQdPJndGmYKXi8U52SMdt9Wzz89PcV9jdwspM9JDeLg3WJvVmNq66ap5ny8SwTyGfXckR",
  "key11": "62PywFNCDE3NMqR1PvFZ7tjspjwpH7FMtQR2YBcxwZVfRwZct95qGsuCkiYKipxxBJJi55CE7Gp1xAECduV7x33s",
  "key12": "54jYmrtfCng71pJBS9hKAECy4cjC9J66PPWKpKzLKqjKzgr3Fs59WtcG92LeNQqMtnyafq7QiY7AWdkuhUcSmXnk",
  "key13": "2g6NaywN3QADRxWhDTuc2x6YgxdxEoQceAaYoKK9N7Nfh9CGg1C8SBnPXam44QKUXDSHtPK4HX9JREFUC6X9n22t",
  "key14": "22Ho7p4qxr5tC9DCFLZe8DTaDHnBCUVHEGeVAqLvS4TVayxbLVkqN75HCXE1FgrpGAmqBUUFr8V2WDvyALoZG8uJ",
  "key15": "4VLUnkWCaNqLC1DhpmgBg1C3VTkBcgtSwJJbcnZeR73Kqde6ip8tHgoFDwqUuFWHyrrEv3aMeUJbo6mGYzcyWuDt",
  "key16": "6468VXYfksuiAxwndzzXpMAj8MABzKCfyf626Vv9fYqXQbcFgqCDLi5QpgCapetzK3KVj5bW6BLMA3SnTCsaHM3y",
  "key17": "3mVSd2QwEAUvog596uFn2XgouUDuUQbzF1guBcCZywWitiBgEvZ8NiMSsxwyQViXbp15njt9tayriwh4P2vfEAtw",
  "key18": "yXpeW6F9Bh6qg5vSZJedbaHSeY7BhBrHfsGEoNQkzDgJKMhoHWX3oXBsGJhbWsZEcUuvdXM9rfN9K2DUsGtqFWK",
  "key19": "23Zi1YnvuNitZssZm5F2vkUwkxojiiAzN2upj5sYKmkGGhfetzZPGm1frcA59caeQk1BrNEamSQQ4sB1aRNXAP88",
  "key20": "4g3HGJnv56nnth5HsTKtx8SZhUZAa2VLXYYuKq9QGp9CAHgDs6dyWCbm6xkMBgb7S6SdKXS7VZa8D14CyeDGwogi",
  "key21": "54fRbBNYA4KAZgenzeLGiRT9h5GSsdAYjJ8qCPWe9qHtqvHDr6LwGkcFZ5MskjaJXmHVxJ9tX37yQTBRFU7j29qN",
  "key22": "5CqrdQ8trnWhEHUampFqdQzADAaX1m8RYLEwGyygEPTrcyYWx6j7dxe5Lqu8w1AEZP5EDSwNpviCkMs9QuxHtSs2",
  "key23": "42566EizMScWurNcpnpmLdFaFTo6oWxHS31ayYqSrrW58T1yaWtdaSbyYoiWzpRDLDJ2J17PWxzwsjoYvNkV9Gau",
  "key24": "4qPDbtS7fjdxgjLAq9eJJPkbjQcw6KdHVhMAVav8LvExhHh9EQSTpWtThMb6UPUb4jyUuk2aegWGPDPyfTjmTK72",
  "key25": "3qYjnFzBnV1VoseztcrUsx1VcioUsFLCvsFYc5UgooA6VXMJFA1jR9AKWN5ji7VsqEsetqMMVtoK2DLWGkhRNCMA",
  "key26": "45DRAiHqTcFw6AuxtrvDnXrkj4bAfxpCLFpcGRBcuLb2s192fqgx4QXdc1dqB6uWoGguvo2VaenpanCJQBHRW24p",
  "key27": "GgeT6FJGUsbchWgFn8MEJqgGJJTEkZnxPrcWPUpFNzHryrEEEC8rzpBCGjqDHKAphir2LS3FQp8EeV7QTPYpnew",
  "key28": "4tHD22aiXxGtM9JPDsYqnSXcuEXW3M1wmyERLGXGu6GcLVkkRUS89TuVWT8b8CB3pgchyuLKr4VQh2ReqF8ARGEh",
  "key29": "5q5Cjp1Z64XTSnQiX4WKYZcQHtF4jZgq6CDdPaibkGGeTMAAZqeBvfcVJZPnD9xo22yCVypFyoiYiG364LjDZso3",
  "key30": "55KS4yK5ugH31RDKNwBGF57g6pyCEJdoxEN8JM4dLuT335D6mrUck25Mz6RVMEN5drf9sqbfc7oV5S8vDkuzdFu2",
  "key31": "qEB4LnTV3jJ4rSDbPsR756VmtTLjvLjyZGP3vdT2zB92PJyFc2iTkXUGVRcbmytXMo54rm1xF3HbPxxZLQf8Zjs",
  "key32": "2TtL3ifgihyTEejmqX7qmeH3zxBZXu33qmBikGV4DrrricHCFW8LdDEGJwJApctaVgRfCAxLkydoWufXb2D4fVQH",
  "key33": "649pZfANJ7fN7ZvznErRXUpSY92sV7UT3iAzF2jbDqBgfRi5VEFXYpDSGadPtWEEqP2By7rqegAu75DUNEFat7Kz",
  "key34": "VMvDcmTnnfw7MQVH39gFNitotkHDoDhnXvt69X2tX29y1u3ZmEgu4GbNXh2kY5QFF5v9ixyTBo9btWhH6qheqgk",
  "key35": "gMNwrM9zPbL5h77xVtN7jevZBcAYuPPKtootMtQDZGAFAa6f1b3rgyuNGaKAEj9KxF26XGpG5xSDhtfqWvfTD2x",
  "key36": "4MKXQWo59TupbWnmmgGDbhLkmEsJ5VZ5adNu6zS6EgVMn4uJGNXgEeWoBEcsc5QaF78qAAW7736HuaEPUU4r17ri",
  "key37": "5nYPuSMNLLwXc6Wb2oFj3Tct5MWJUvXgFc1gPyVAaz63iUTs4PBsYg6uLtuWtF41SZrdEKSrEdaUjeFGYHy3cdvr",
  "key38": "65guoDCnX8K7Q1ave3XN2Ba37NLV9tTKSFmRLkp12xzJd2SadeSE6cz3dW9j7Uk7cikLXydRdnBhLaf164DqNyYe",
  "key39": "4qcUBX6ebMRc1xf2GRW3oeM8xmyjmhP8CFEseLapH3FqNiiVEcUEa8hRe7QwfLxrsHU2vwF1PV9wzTkNo9joMZQp",
  "key40": "3hd5wcSBDSqLLXwqG4uLCxRichwMgkeRouJqqWW4e6qjV5pHnn9beJsZhGaokDm75v69TrpNJZuxKQ8L1URfUZ4",
  "key41": "4nYyNJPsJhVWP3zLSS2j73RVP5uEJA62WNkMJ2mm5cCxtaL2JUCHhh5XDhW18w9MkLsRnK35kZ5CAm55FmvF6LxG",
  "key42": "5oYtjwoim8kNAyGkmNCt9y2r5Ba6pviPDkTC76LHXmsuxw3MhRiX6JcSj2AMwKCnTZPjSUas6Q1XCtMXPYrgBSq",
  "key43": "4w1motz28C6SKEpsyw9QsYJPVcKjKrFF1ywnFVRfdS6RgTgqYXW9tLrbhW1RhsSAFfuqNLWa86hkGjndqVrZWMiH",
  "key44": "kLhmxhKegR227oBbG9MMBsxuaKvkvTj9zp9w2u1GyY27zxQEtrq2jmLfGnckfHtktDUbhAompGnR3vxa2YEKeE1"
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
