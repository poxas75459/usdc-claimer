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
    "33QtAaTygWU8aayGJDhFtnQTHdKr1MM2kbRMQ4ZjbLc6s6sgyTXRBGBDfeUdecqDievbZ83SdktxsTGMR9hqUbqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ho8HHtLwYBrWRHwYNZ6wNZkx7ynCdYvp3xccYGkFemRsPBX64Um1DVgwh2PKRxnmrfFXc9FHAWYfZeGD1c45qWf",
  "key1": "13efBDu4ew8ihuUvkxGG268T7rY4mzEnw5o9HFG49zvYTEpcMKcbNDG9qqK2JidvDaLWcEvoLmBnexSjTbqSL7W",
  "key2": "U1nhvUct4yUVyVHRWfcFEobiyybB2Yquvo9fV28SwTjPW2WXbbN2sNFho8XF71swod67FGsea9MZquyAtGKArB3",
  "key3": "3p73mY6Xj7vavxAaNcAhU9ktBJZei9V4SkJ67bSabb1rYu6ksFRkspJJLhuTG3PUpA8WGjeEjbqkjTSyF5AqgQsW",
  "key4": "qEiPevMS4HdwKv2ULLAokTMfmVVYUvtX4UuVD3PwyLdXbNW2TMgH3xEDLr6UzyduZBEuspf1kvscJLjnasoKvhX",
  "key5": "2LBwhBou9HnSKCzjURUSWzKyh9r53pZXE3N1QCUrLTJGrWcu2TRxY4kX9hy2JdUfnkhxeU9zW4P2rf8yCyD2oqq9",
  "key6": "2QAzkH6kwakLkd7kPNjemQEkZ2aPtK9ez7HfsWbvtM9k2hqUVB7g9FSEQMQpoXMueZeMyeKKQWtLWXafWjEtp3Wm",
  "key7": "wFCP45wuJf2opmVy68nuDrCLJfsZoEsHuVBaNtMvQTiDLnRMB9BtVZisSHEpMxndNpdbJgEmBHKY3cXc3Vfi5rz",
  "key8": "5rwXywzdbYJUQ1WtBg5xkmt7ny9cRzeMdfmGBdRWeCJieSph22mqsVf4RxY8BQRFczLyLgCoHpo2RKSJ1e5jgYxW",
  "key9": "5Y5Ph9BMmVrhaV17rfScp2hhheQx2Sy1iNEaoENA37cfq4M18ox7aixT5sKvq7ndUrSt1frTCdZXAoA9AUTxqk1g",
  "key10": "3orDXtPARpZd22hgwzxdehEKN8LRCt2tKx9uLzbakE5JmsZQwjoXZadsYv4R54X1fGEqrmRprxu26eAkpPQFCuW2",
  "key11": "2xZSqDjefzgoMrcbsQyfCpM5ApvmFVba3GmkoL653GwBqFaw9bA5bzpKaUeB5dVbYXA4naFteyniqtuFTSMV9di4",
  "key12": "4X2ZQxsWerEo7fWcG238WTyxYKpxmK8MEUJD1QWFKverwHqQWmnyAGTtHUwHeMtrPE6XseutgKvUousrZo6hSXPL",
  "key13": "31JBBcgef6isUV8dLavo9W2uCE1dd5Bd72p7HZNFo9u1DVXnDJzgSoJHCvA4Fjmjuu9nkPPuqfLmCjQBeAGoZud2",
  "key14": "4K8rdMkLSzEbrC2udyBWUY9rP92Abx384dMruxhjLdhLk8MsUAY61pXZbKCHcUyKHZNrnFq7R9WMqmPqi61EvYEK",
  "key15": "5aFVyWhPQtQS9pTxdBS3tKHNiGfJF2CFGLKJVj7yvvcCKmrWkncGGPijtQdP9qXSSidSYnPDbmaAWDLKdTN4tAjR",
  "key16": "2QSMPz1p2SzDccniNb3f6g4njRhd5YrGLkQ2P4qJoQwb4PgPrVZsNQzUjxpo9PmTnfXE4BVannC5WYJwGmU42dTq",
  "key17": "aiuVGy4E19Ka7DLZbKzoie6CFb2YWPZ65BVLMTRyw1MsdescKwgU5FYRR3UpgvRts5NiLFQE8vRA4ZykHBwegEs",
  "key18": "ZxpE9XDdkoPg8SwG86EFg9syexzdQu1NJ3hNGr2hNnMeBZ9DJgQvs92eoq25PmyAdLD5PCfz8mWgM7kZX8acq2c",
  "key19": "64yCDwWFtbXsVjhYiWgAKafjTvmokX9hwozQcMXJZLcZgAHfx2TYhQSLFJk92BbGFKxJdivKDPVtaozef3fEfknq",
  "key20": "c3DuDdKG43orqU9ceM8X5NkggWN5LEaKPKJantL1ToNbtpP2eDqM2jHux7aXxDZPWSNqpvKPAQtGFN5udE5ouXb",
  "key21": "3q8yQKpnLLpjAdrCy1LHgHjgAaN8b52f5t6PSWbDq67p8BFFgARDrNwtFRz7WSG7mRP2h5VUsNkX44BFB3hqc5wJ",
  "key22": "3ZmTwzKqrBLY2bLP9ekR7i42fJ968VuJWvyG4mc1WF6kQrgqF3HvtR1oQYJghx2EpF66G8zqGG8EABNdWR8crtd1",
  "key23": "fAHEQocPuYezsAmMCwBuM7ESzESLf4zfbfuVi9dP9gD5Lbokad5hB72NaRAExTtvdTWZsv4pV3bQGmMWGqzigQH",
  "key24": "DWjeXAjhZouQA9BwBxpBxhBp1aduUgfPQuT33K2iWXYLptCYmgpEHbCob35NnZdb32fz1qagZ8GHNywUehGNhXk",
  "key25": "2Wfs3gZbUSejVcKsFN5i9y32HZqyWc5QBUhvu5THv9WLVjf16UaiEo5djQt5GYLtKZYDp3djPnwrShH3rmM6KT43",
  "key26": "4UbiXSc1qXX8VMovBadqCjiLLhQVxBTRd4jEidTZyheS3Zr3SQwnGBM9go47VkkyWSHQUe5aHcqj9fpKGUy27A9x",
  "key27": "25TBATbZo7x76Zjf61f9zXSiSjygcDyM9efpeBRC3TfbhGgaz61iEckqHTdEd5AzBBigXzXGBVdZxmdfYXtBMUoU",
  "key28": "2LUyDsfgFuck3e1Hjz9xWbY422iqaXPmH4Avj5DaPcRcTrq3XZBr4WQfJFYhy8TfSj3LQ8NfPBUYmqapjkTG7s9L",
  "key29": "4AvbFTbf4n3iWK9fNtUcGetHzqPXyVEBH2vBnRFaGJBjGMu1XHcjnfA7kfKNeLLeQjug324oKbLJZ2qUpMpkppSD",
  "key30": "3uiFeVo4Qo2QN7AHeuAoNBSFJm7aWu5urQNvVjAnfumkyEfZ8YCrYmZYT97JUpN94BQj8iNZqPJBWtiNEJH3DgU9",
  "key31": "jAmJpW7PJcSCWn5YywfzFApMTx3jQVitH6XJhvtdkCodQW9YVZuBTxiKKcd7gURrjsj9pnaYcZXrUtQngQS2UFS",
  "key32": "Tz5spLUt6gsHJGzp6ou59RBQfWEBLdFrezwyMw5yMASdKw8pLQDErQwRoriyV2mxdqmAAc5mB5LVGbR43VBGdEz",
  "key33": "4tVASZvJxBic8QrhptHwXHUGPUAGZ7ActS4UZ9s65biK6HxYT5kas5mfXdiR7nD4uWBdEvGohsxNYPLy7rqVnfhR",
  "key34": "4tLsAkn64GcapLmmCR9zrYY7J4MhXZFdSSnnWiUuzRizRsGG6SwV928M1PFQ4Bx2EJwEpBsVbFHFQ6V3G9t77UPp",
  "key35": "4jmEWf4tprn2Ncs6G9pFWWbTY8NeBzTNHRg1vTy5ogF7i5BmDaLMixdzB4yPjSqZSku2tRKtxQWgAFpPMCAimH1N",
  "key36": "5mVSgSQEDnu3fwtaDMxvXYTT7KrRwWidj6TpcEyw9kDQ2Uf6WrRQeepFg5yy2JnPPE7tk6NXjumvuHUYwi6ymQVC",
  "key37": "figiaGJrYjbgQsQVVjdFKa6GMvzDGR2cBcp3SADohjDrwx7EqSXnNEAo8sQVPSNMx5CLij7fxSaNVS6rvJN1gWA",
  "key38": "3Qr2ZM1h4BpPovgCWFyJoyTVFW5dq4UHuWdWtz6TSQnGZzme16AKgmJ9YfnNKnTj2ziQm7GQgpjuuz7aeemtZKeH",
  "key39": "5WrZtRSaG85pwCHL7URbbuZFz16AscWrQF63Y2K41zTfPnkCTUXmHtsqrqw3HsVTTpExp63K3CdZHixyvcnNHr8E",
  "key40": "tPTjoKrxfd3oLdKwrjDWzxGShi4Nnf2se8oM5eTQGFNsbP5FxkURzL9nCm6vBMeAqdt17Bqngm6VMg5pxqTFuCx",
  "key41": "2a7A2cujJ8qCMRpza31RRSpA9ZThxraqF7wr5sNPqo3MmARfdPi8N5qDne2EzYWFwGjQTCybsgDpU8hHzK8FcEPu",
  "key42": "4aR15WeJ5XRM6JYsJSpBMfaECeNo3ZMHa5bSoSWT1jP5QTfZowec6Vr3QS5iCW9QVN1KWEuiPBoQBKWRaz6Fhy97",
  "key43": "5CcjAWQ16nVufjxvHFNQ2pHSSVroofGKdTjsBfpm4Dj9N1P8k9WeoVNUZ2nawnq75udjfPGe3tSViSJr2wBS9RpL",
  "key44": "UP1haz9N1P7kJRm6jXKNqfdiREEyo2RyeV9qT89ogxQEWyLJoQfTvGCQhvrhD7WYN6LJSekP1qRUYBnBHgs6mGR",
  "key45": "5Nix1LqzjgSfKXuVB1VLRQ1hQucnV1HsrdF8rUepdJENpKTdXR9DSKf7gF7mHBZdypDmGQW19Lp9MDkEb4iiTjhP",
  "key46": "392N1aFWT7pSSiFVTJh1vnqDJGN6mXN66YXG3LetPdGu2KH5MoEUXYyKQrKr2QSsHyD5EeqQ2nsGS6Xn92rfLBMM",
  "key47": "3gcE5XgPafXBdM5KVDjmUegkBmXKAL15rHcJfxP78ehKjQkN6Ga5CGMMEL4m6ZgvQSwukdB8gdNf67P2cZDQRkiz",
  "key48": "5q3mY7ejkJtZdiPu35AHdV8qpqMrH7m2h48dGZ9sKwkQK7C8S4ghfKweFx8zTwcFYnmr3YphHFj2LiKdET67J6pa",
  "key49": "2F5Lj3tQ63jXvtaDUi4G7VTfYJn4er9Bb5HMwcxGuiDJbjLqMABE1EM32hKJLApKbE831BSJ5vSNWVpuiPq8QzE6"
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
