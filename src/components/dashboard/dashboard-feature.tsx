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
    "aHdzy6uwy1jpU581UE7cpqhfhsLY96mqtxUseZbpK2KGu6EWY8C2FAvdAYBGUri1nuJo6zsMAkgb3ysfJCRDADU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x2cGH2jk6xnnSERGd4DABELLaYyhid7eG7bq3N9HEih2Kjo2pc83EQYb5TC94FzbAEd13d8wzsam7ontEiWgf7e",
  "key1": "Bm1WfcDWT5cxX7eK1AUGHqKdT4ZVHYjNLX5KYPS1AExdNuM9eTcgMyaQgeKwBhjBj6hHT5h5jn5Dbdm6vHPqAVx",
  "key2": "3hsqNww6g3TqSFpzPJXvXRoTQdaRfynega1Kb1L9gt8RU7MYe16qJviXVxHiYnZ6bZ4GGa6H8aJtu68r7nLsZiRG",
  "key3": "2UhajvykzFFjpdA4CAacdsbZmKgSAqA3LeW8KaZ6cjS6ekfetZXkaa7S2KwPYo3nrWnepwtR4UTNmdnudLg8coye",
  "key4": "3ARhotLDcy7x37djdK2Vp3ZmSeCgc9JCT1vBE5vbgScahbRWHVEWLxtCVRxgVmmGtqgRd8tmx2WWwYB7h4sE9NRD",
  "key5": "47RQGi8TuryXEVrdK6yoSTfDHPWazeaPgvFV9G9PMtUHgkrC8mkbGwRkToG4Wmd9CvEQmxZVDp8TPFsw57qo9tCU",
  "key6": "h95wPEZZWt1S7BWmS8EWBP3ZzYjnVjJ5DFPz8sh4hyFcC4PjGrNtGebm8HGZYbYfQoGHrsKCW3S45fcs8pggUeC",
  "key7": "2HrYcNHSFM8CyepXqP4jf52iyjf4zKC5aRceHKCxZTUMNoZ1jC3UcYUocH7ZRdf9cRA5zbTU4g2uTdrGkz1bUoFE",
  "key8": "sA8HECiFhtSvAY1oUauen1zS8ozMniopf9AHv2R9QcTSBNeNEq8fHha6CUeSdfkyULSWynry253U7SaUroZqcBv",
  "key9": "BzDWRdeqrrH24LAexkCNZNGNa6y3kyuy8DmtAHvzsiKDCzuhB94e5azyVV87Gj97yNFH689dX8n4WtCPgEYJHGN",
  "key10": "2TrXfTmpZwGybNRjiRUEjWbuJRyik6DpPfGtBqNa32iNw9WECqRVL1CjnFAkPUggNCPq7AfqAcYWw35zZypgE241",
  "key11": "qA2d33iFfb5Q2AgSeQtp5bMmDJ8KeiaRnVvraG7RqRJ3FGvZn9j2tkxftvgJZVtdUjjvSV3V6PEfD1PqiiFB6pP",
  "key12": "fRVMsWibtSV6jUcESyXWnmiz6rfu5FjDzbB7MfYFnhw3iUNRm2mpMMvBPMSGij2frmstkNGHqJk55mepS1E3PRN",
  "key13": "2b98h3NAZZfJvQRTAAYTRiuxTukngLuQ9dcuaP15knhpsGtsxifn2ys9XfQNK42vuUEr9JvqaXjq3SxqSpAeAPF2",
  "key14": "4PNB7uSPNppVUBGd9Vze7meSR77mHvmWPGp1EJBe3AKsa8a8v8mahyEeGG4jmKd3EiBei8YC2amjSSJ7b5ixnaCj",
  "key15": "crNsUp6DZDU4XyLzh72XDmr7e4v6mpSFd4jQDi61ygtJc5qjzebdzt83w6damvp2R5F3r5ifTrXmwvNjkAqRoXz",
  "key16": "2yEmcewUbsmfLio8Z42FC7SKBZJjAqJNsZ3qXRDfhomV6jv3Xmeb3fm35FTJfswURH5AVZbb6WwpaSmdTqUZ8obT",
  "key17": "3ZJz4NszgsiLeeuoD63DsbZSR26o8PEgvpQyFPxNUoziz5geEmpYECHMnXu4ESaBDX1Zg6ZJDd6QX3CBy14veGxD",
  "key18": "47ewtmJ1vBFvE26NGU2sVm4Vee6kkzEYHakDKgciUP2md7HKYouUbgDzuwyVMFDLuWrx1hXomrc8A4Nfwc8Ujsah",
  "key19": "3WLZ649M4dnGEyAakguQdmp2X8NXRzE4tangbJ7NZXyQe1FwCjYFmwuUPx3UhapCHqSdgNfkzwPJMbU8iYBChNbu",
  "key20": "WiK8yFFTfnHNXJ7WqWSnCbdwpo6R9qJSWbWn4Kdp9U6TPpfqG21gFsCkebSu6Aa2gTHRrmiHCifaWaTiSzdUHCH",
  "key21": "5fNe4ZECADf8iEjs4e2wvo9wZvGiLhNDmCRtT2MbHKZGLCNjai4BZxLKCPSPvVbDrXdkqvyPMwE2jyJTgfvpzFtz",
  "key22": "2SNHZfxvVfarb5BF9kGy1uCowJESHBPf3g1pggfJc79eSAekrQQKe18jNqf1jcrtCQ3qUzyXi8V597Ze8jwXGaRW",
  "key23": "4y4VZfVz5YBDha9muAaup6GzniiofohbaX8SzZuy11YinFdg5mA1wEDcHP19RRxpXbQfzWeDWBwM7A9f2Sjhr1Tm",
  "key24": "45QDrAp3nZGK8B85af3TsEVNzz87Qi7YFM2u6JepmYUc1dBEWE2WwinnvPXt8jSb6QFRLtn2J8m59Jy9M1z6XBfe",
  "key25": "2HQLwUmPH1LuxMbxnwNyqfpvU1FC98CZThLPCEA5nQmkb1c6BdAe2DvqV1HaojmaQRwj6YCeSWyEJARSChRXb5oM",
  "key26": "4jKCYsgWGiiAvEJrHeV5FdnnKQ9jiA9KbVn3enDjf1U6zwrXmss5Pq5puBw3JmcVR1gB5n3tmVM8pHdavcvTqFpq",
  "key27": "2UUG2zz5w3dG9xg3PAiYWjJjp9M7SWK6fNS7w6f9vSyiQq3uvJkJcvXGFy5BiR4gXvHBu6sqJ6MoHbvWj44bnAJn",
  "key28": "eojjYTYqEhm8ygZSA5qPHVx5jERowVpwBojzFo4NDEhXgaVoCGdV52v4CGAuVbAEZNMxtN4vZ8AnHfvrzw6kQWa",
  "key29": "3RcVH6wQiu88AQhwnC2SMJwN2CzdHMKiNSfJSzRRESvn65tMRpBVAwXauiiZ6W3HqKTeQpWCSSp1A5KgL7Wv1VQJ",
  "key30": "5kATj3wcW8pp9thGBRDXuB9hG82hASN71aasf5U9PcJzWfMBzW9mJmbm71KaHCzMRdunVCNFA8VE5w7DDHT3xBNA",
  "key31": "45CYHjZcTjc8chPdZ5B66vv6wXfQVLnQhk6UvNzNWjAiT1g7XXQWnLdgo1nXBSGUJTt6FWNLFaw2ofNe3HcVNVYX",
  "key32": "4nhA86eNoMgrTwbXDbdcgApa87eahGCp8JJjwbqw7L3uwXC9h7XE37382acTT4hhu4hBSF5Tdwq2YgJuQgJWL8vs",
  "key33": "3YBpvML1RMDDFvGm83ME33V3EyHinKiw1HMeMCDa9h933cY7MR8PeMMKRFgxDK4z25h9jLqPoVXMviBP5LWp65GE",
  "key34": "Qn9KMsmryX2YwcwL7G66VLpwc6dRJFTZ7yHXDpPNQEJFWfsBamWdo1VScUHECyiYDmKFji2jL4VGJopXk472oKF",
  "key35": "wTXd6SABx718a4uGVsYqgtp4mLfhtnTtF4EBS39nRNCKJUP8ukQJ9nP1AtYCYpENyZcZa7MYT7qxE4Xn1ufAot5",
  "key36": "58avZg9PEBrRF6145SZdPPfUYTbcsfCnT9ETtAsEauyVfKkgD4Fq2uj7eS7N1nPzVGWWUQx2E3vpTPAyBRMiq2Vg",
  "key37": "4Xbwm4CsoCMyce2oVDM1Q8D6hh3cVKM4cHhhnEXwJDci4gVwnmgPQvaVF8boxF5H4rGCtD8dh8iyxvR1CZqNc1up",
  "key38": "3Q7UGVZ682uyt7EmtrQUvVmGjwevwn2Hag1nEPm2Xa5R86He8ii5otRiCD3SMuxXNoRpzE7G96pSSH1Vg3cMzv8H",
  "key39": "3KSk5DqDRNdEvNjjs3wXpeQfpmDCaPJD2HVpTccgJV2jqt2esSzVMd7DA3jcWuzVSNhhzB4zR7yAteEFRSfM2tQT",
  "key40": "58jjUXX3kjKsLCjwdQH7qpeAhi1Ro8jaWMmFUv6xDbQsJgKYhXkiePH14SFYKbSeyVd4zxX4A57G4BaMPGgjVBZG",
  "key41": "2k6QJ42zY32CsdGMzx91fAgUYXypf3PYpGcS3jkazEap3XBxizm1nfexFyhtJuotJGXPzj1izzgYN9DSzUeEois2",
  "key42": "4NnjswYcU8TkQ1yF5BLCQbxvSiEeySh8dwNdNdn3agRMaRT9HNf5hbK5xVA5xgFgTgrHa5opWEba3BJxEN7qXcSt",
  "key43": "4QP586eg2ogQog7pvfpoXd8WC38mq8N1R8kQTQCsfaXKMsSvkRWBMmWax2ojNg4PTFWigd7pr6iPUAVSa6Yv2MAA",
  "key44": "2soz9YBSmP8zARn36YTdb87ko9upa9DfJUmWrRcszgBy4d5roZkGSkyuRT655ZWvvGdwJm8Kkndz6zZEsKJ8UDYP",
  "key45": "4CvJZD9YPvNLXxVYo9g3QAGk5Ymm1w2phEz9BYAAKXm6ShPeNtwFY1AUSABKVTVT1Bb4yrzPQtRStkkP1fJ83qPt",
  "key46": "2UJaHbKPJPz8PkQJHFd411y9knK3NaAnQjDtRxqD95RJJ2zeRUq1pYGumXvDn7K1y6twqvvBomSABiLU4uz7revf",
  "key47": "3pEmakZqbdBGecnCkrwkbmHFRe4StC8kLyfypQLHPqTguYwWrGETsmKJWe14u7twK8ZfRoegC31N9RCwvu2wSh9M"
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
