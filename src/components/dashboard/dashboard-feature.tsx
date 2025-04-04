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
    "2z5tjioqguZa4WHeC2VXRMKFnYo1BNoNpVmZJ7n2LZHgYV74QGv3Gr8qBR9jRXwtDK3tP8QXiihDH3kQugTaRU8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W1EcjSdyNkeRxEaDikDLvf2jeorKRBGKwkviY7Y85UYHLjT1qZkJ2FQDnj61cPmzis2mCxaMGmmoAq8UgovjgAe",
  "key1": "3XMDCvSngFHucH3f23oWJHrX5swXdjkHTEcSrx8cV9irek4TaZs6UAnLKzkTJQJCDo3M4z5KvdhCerqxT7p2AcGw",
  "key2": "Q2NCZxHq1cQ7h3cGD5RwYwFNi7zRs3tY7UW6bXfuABZhzFQjLZDVCe34refoaHtwv5HB1tstS4pDqKL7r5KdFgP",
  "key3": "4DQGCMt8rhzwfRHoqTvHuyErpgHuPPNqJFRsBx7UWjkq2ioBzDAHkrBykgM3AN2uQ7qzRWsv4xchJD8oAPXDwDe5",
  "key4": "2jYgh6Gxzd59DXp4mRqNJpG2nZP6NWgsiuDtsbtSHwrLYDMwZ9qCkLJyBL44ziHK7uNM3NHLdM8NtPcGQZn2SUxt",
  "key5": "2vfcgUxoBPSCSKCgudt28LpxYFoNy5dg7fDuFpk8xAMKnkrjm13pmWJPaojFhNwdVHVKmVwCr6WVSQv3T9r5tbri",
  "key6": "MQAZanLpaEB46KzuFz4eDRoJ2Z4hFc2w3KURo7ny85pfeJz4K8tx9nfD92d4re3nfapCqjayW8tQh6cGMypjPcs",
  "key7": "29JKFAHeQ7sVzBnvAorK1vEtzafWc3VB22YGKaBnLPhDK7Z9afgAJW4hqkoNKxH1YPdX19LwFK7uJkyFyPAMbxkL",
  "key8": "3FEd2xqRN2KjR8yVi9TRMemqDSHYswCZeN8QkT5aZFDfUGPcnJ2QGHrLCQNBo14phtqiZp2p3d92wu4QBjUq6v7Z",
  "key9": "JDBV1Y8jfxYEvqbGqcEMVt1VP5S5ZgNr1ACvDXxuYhtmvNySgZGZg1dDUGkqwwCBepaPxsQvHQKaN8fvN3bf3Vw",
  "key10": "2xBikhYGwxWRbqPHxhGb5sp91c162XQgTZkpfnq7Z889YcJ1TRw98QvwhzGs2LJ3dmzzPqTdLVgVKzKRzAxWU7vW",
  "key11": "5z85V3ojTz9KNuTS6ZGdGaKrUoMYjCiam6ejXimKtYxoqYyxEwYwnrRmMrZdMtsU3WyMLJjs3p2jDi8wcqZpESMp",
  "key12": "32cxDEnPiUkcvQs5NrEwRgqfVDUeFVuM7mG5W1Zed8VJ31sWFAVr2PWi9iUoFoUTD1FiDTtnNBPr5sD9ZnEh4Ltd",
  "key13": "brRLnabgyYikuYyJbijD3TWpcn2wijXM2wALxYgSe5kMgTXyLKDn9TvWQ2oqePaefhnipbMjNp5nTj9Lfi1mF1v",
  "key14": "3NKKo499u13dPEPRQxiKLB2jgKEcbvphRuU4vQ8uT4ew4QR4VERXp6LB3R7sAKEdKo8c7oxHRkFHaUtrq7vrMpLF",
  "key15": "4Bs2eWpBHuk9ocrR2EjsLTyFaWWxpaM6hh2zH1cUqCWfeARWkawRegNoJjxQ6HV69HkGJG2cVLCdtD3gN3s8FVdr",
  "key16": "uxdot9XbADUrHKRzdp288LguKHz7eAsZsZ1hgbZdKi5PD44f38pBY36LgCEowKxvArLVcpecZbfnA4WPJH9yBT8",
  "key17": "5oiUMSCdi2AgVRBKEEZS6rRLTRCWy5XeXTDb5ZWAbDKGt9LkHNUSUxzfG9fLHN4RPkqBNt21v4sff535aVcXo9CN",
  "key18": "52KjgkQdsraBsAyU6p6jfEihUAyyKPdRihwE3ttLzWdp26vZnZYX2Y6CAe5BApuBcKeykiPfwcydFG3zVxKHAYWL",
  "key19": "2QSG4jhijARcK4p3QohzmeUGwE6tN79Md84YgKBCNYLpdesJk9w6mjKvcrHMgZfofhx2Ya7PGzn5PpfHEScu49rD",
  "key20": "3niQEuBvfEsUJSdrvFESPZYTwrb4V3TeNSnQ4jm3KfBbFzm9DUAfdQYVZ2cbdPQqHXtvMcqdX5QYLFVu3F61mFGt",
  "key21": "457xxe7AM8oxZLp5reWWste6J7D2DPfqmNHZAtCGaJ5WDnUrEa3WbaWEFfFx3rbQUe4wvGE2ftdQT2PxZKgvHaxt",
  "key22": "2iUQxMG77dh1nu9Ai66tCXFKft44dFexKCUVHkkfTdueGj3XrAehmS6TVy52AQAz9ecpHm4w8CFtry2cJ61Pdtaa",
  "key23": "2LVxYW2a64KUkWfYxQvGSWi5AaUkCiwDy1LkJbakdbsedAP9fCgXKzweyDnc3UHFTBC5XSdi46e1PXN1opUhPKqC",
  "key24": "3vg72hgWTqCQFda7nHx1zdfEqpeU4rtki8AW39wmQV6gWn1LdZzBZXG79A4RdxfvyLmqYw5L2uUGXung8YcqeJW5",
  "key25": "55FfXfUwqGJN72ZZFsndKnz5UGXaEWw9vZPkoyYUf6ETrR8knzY8dYQDQ6CQ3qecdGUAkMmyEymh7SkJJuK7vzrQ",
  "key26": "u5cwXqr7sG53Gk2X8KvG93NogsXx2o1Qmw2n99xzWVr2YR9Y7kiJ43UqXHAJYXHTTBxugF8Ljm5swgk9fmdeCrP",
  "key27": "4myTMJNdTDEriYsw3s5TVrNUtRqVxYqcQdv9RX4eWw9mXVAPwbLjMrzKNnVDMcLSMGabN6uqNkcAwLwBtmRqVTYf",
  "key28": "39LJaK6bsbHTsxwLLjHdA6AMpd3FSKpya9XoPaMsyTwEvUGRjmptk9htPqFM9gcPdqz3DQazExsE9csBPjsbd6Vp",
  "key29": "4Qqo2L2m6Nd9fnLkUDVD7fAqCv2kBSUBrxoWP43y6AS6uzBLR3rhpZksv1w4uyKrASLYacJudDTmNEVdHaYzmeG",
  "key30": "4eDrZ37HLvRbM3vpC9MnjkVQ5U6GLPS6Jaqq27qimrRfuLqhyq6mzwmg8SP3iBW5fgBEskLdyTZXoTouM1vheZPi",
  "key31": "5as8S2kJERDrxEVHEBeRK7stTtoZH1ngbKrBcQRrDnGyMdUBtasWJ1LDBkd4iVmiCpWDfiENsLVEQWFKXiDoYmYj",
  "key32": "5SLPpJ57KqiJRbbDtFP5rFko1wnScnFfv5n3NrCJKhavPfMpDKi2PKvHNH3JbPbBUY4GUAzKPbDXe2FFSKewjy5D",
  "key33": "4PNAEQ5PusyzHpz1FmKyBiPEeZPDouZBsRP6rgeYXgJroUkDpS3FCJy2wfpaSsDW6kxeMy6cQ7W1HbMTNbokynQN",
  "key34": "66bHqzcbhYUr86DYFPBuoh8vFtgbbz5xBs1koZRTNuSiSJgVk6jwnLKe3Pcnomdg5y73jSJoJoQqu6htGBRH54b1",
  "key35": "2Bvmx1gi6ScTMmNjr8XeipP4UFAsgWgXvdTUJJrQ5vc6nC53w9VtkUPas4vqKHVv3BTen79GnqTrDF93HoWbo5XZ",
  "key36": "4vnDFeT1MQHbakjDK5gELoskQfBnLRCfuCTqXhNTRXxp7XcqWcGhMC5mhbX6prUtsr81SrwMSzxg2W24vxb5eTmL",
  "key37": "2Vq36MyeGMjxAFMty2eqVQWC8y5ukfe21TYbuz9Aj5WjDHLdEzxLqc9KCGemPkHPtzzrLHw6kUaNbjyzjWSj7aYR",
  "key38": "2SHKnmpKUHcYsT3FBNGKzDTe471HMC7F7vNQ4rBBdj8kW4Sf9wVbtvo5odYNPmNPaooUaSBtdLbiJKYtnb6S2Av3",
  "key39": "33uPKpsAWdAoPeLP1EkMtaQDJqrjv3SotPGSmQooQ8mLoaDsu7ag5SHXpjZi7ZfzDsKLuRZ1sr5pzsDHP3Fyx9eE",
  "key40": "3cQXbEbKkuVZXwNRnkZSs96oZJ46EBk5xxLWVmQyFxSTqm7piYiUDt9UDzNEtay5yC7C8TnDscYEi6AshuyD98q6",
  "key41": "4rLXG4RpXMj9ytwev4V6K5WgNPpZXmUdwTgNssnANWxNA7aAPH3hZHS6Q4aDvTVNeSTQ7rS3oJeG5DJXMWC4u1jN",
  "key42": "5ANkzCdQaW8uzYXWkzQjsZnNyqENu1i4emcNVq3sYXhtuMvaDPWrve3kPag9wWir8Xvz5qMF1uWxUk5g8vms3FFM",
  "key43": "wnGk6HXnyuyyK4owAcuqJEuZaBDrpyu5MGKvNoWANg1i7WWMNP21YjPVwkw65U2Wf2dRn1X7WpJ6segnuC4E1vF",
  "key44": "2ayCWFJTikG5z5bYU8KHaeQ1x3ZmorhWVwk1VfxKrEZfadkf8TsLVuy7dBqinGMJMArdakwTX5EyQEtqroje3e8g"
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
