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
    "2bdDoswc3T7CYUCePjTXfSjF2ThSA3g18oTr11SkYM3AbHtD1QbUsU1EWrqMyAxrFzEwz6BGjctsQdvchvc1rEuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cETX6GkHE5PSAFXWqh5riVVNTe7Jom6fmRFdA7ofJebbJHxWRES3oHwe3tyi43iM6TC8CwVrfx95svX63nQ5Fh",
  "key1": "5b4Z9dFJ15pUQy1VdRTFRb852rzcDMg8XPHcXDNCLzKrX9TVkJk8KgdX4TvamaZccR9Ni8qAdKNPEAXEBpiKcQsD",
  "key2": "5NpRSLQzTuNfzegWgbQhFdcexN2grnJkcMq7KD6d2AQptb8tCwWFCDiiiuVPY9FgaM6ADECVtgmf3HVLB8abq7Up",
  "key3": "mjaKm4EP1ZuozBtUp6QpFnPyoUyzkTeon4cGFTFcaofqbmRDfDviCf1xkA2k1axFLEnpgu61vvBsWJyYSyAYUsx",
  "key4": "3QqqVdfA6TKfhtmBbwvLJVTiYVpqd1c866JMnSLGCaR998wfVrEtRfLKdUhZHqWPivDAUiqQB7YXNykNG72CzGXj",
  "key5": "4SNKvfnVE23SgB39SKKiZE1BtCbUs7rKnAkNQungxt11hFhhdFTNyew4D7vsqRNyUzzfmXWT8MqvCznqg16drzfx",
  "key6": "2bf1u4k5Re1iA4QXjEDy35A56J3Txhk8DQ8gXHBTyDBVNWB3SLqwZHzMUiQEsg72n7VYFZDyF44ZVUqjFhFMkRJW",
  "key7": "3uUykQYUbrebnDmx72zd6akQNuKsNJagbVTNg7gRhdHfKrLYT2WNreEgJBnsvVAmTRazdeaSUJpstkdjkMoDCdih",
  "key8": "3sWqAQfbqyqP6o6dbnZza9SJaiPt3414td7E7XGkJ8qv2PNyZG5zhxWTWWuVXwHQSfyVANvGEYSoqN2FcfqFKWXr",
  "key9": "2fE6i4usyveBa98nxro49xD2THoAUzgapYo7tes17WEBky5BwzAieosRRey9Z9HKiGpK634vKLrX8bGEoyT8YJNg",
  "key10": "3P1PGmvtV6zsx6WJeJkXdqjDuyCU87UjUWnWAfg8RzMdxsz27ukLVFeduMEo4S9ks9LGqTETqxsibA1MRi6FVcdc",
  "key11": "LoJio7oXUL36TWgbPKSGXthCxEFsVRxn5dTcog6hDoku7hj2piWaERrtU9XsAQ4NAgodfgP8NjoiL4FLSua77YV",
  "key12": "2bLpac3MSXf1ChQ6pGgyyzdk4s66RCTymwXn9oxCwNMX31owxEAFwQqq46c7MsZ7aQHwsX7Qp7CE9mYNq8JszuyV",
  "key13": "5URXdWyWPvfT8FgYNQigB78t9XQXizWjFgWMznQU2QScqb8CuBC5PCrbe5mLsgyThzgrozkLudVB1BPAvKwTLjhk",
  "key14": "2ea85KBxYMAvchwBsJ6nyFV5yFXK86ReAKZRTWd8RKUJRLyZTcYhhWbWzBh51iMkiJ2L7yvaWvvPetKoNudagv6P",
  "key15": "3oqCwg5gB7UQdPn3JPrE36yPYUgw2GhYADU1gv34AGgYJHs9XqyZ5xSro6H65DhjTbnYZKtayowUzaVfDsfJiNm3",
  "key16": "3e8rf7zyzh9xebTKXJkQdQ7bXsUmTfHWv4rJc2B85wL4Bjwtf4bEjUxER8Bj3kcQ4tgaPcbWLqYgXjQQ9BirFMAh",
  "key17": "5GMFt16FhcZNQTwmUaB2HAYhETWWfQ4Z7vcvzPG1uFCxpMQFw85YqKyfQUiGzCiJbuNceXLQzP4xPqfs7LkVxwcb",
  "key18": "5CybD1UtMT7ycPniDJEhYEc1mqAzQcRQCttCXN5LzCLP2BrNhdtPAjEBA9mZnjgebtAVm3bcTf4bVF2oSG8GxLWH",
  "key19": "28nqbBuDAjsDwnEBLmSqxHCbfbUfPyKZvTmWJzPsjDBqWnYuhaczH5etQmo2yFeiQJGrU9nkA2VMqgy7A2Mj21em",
  "key20": "VAvVDZK8uSNUSoP67stPQSfMjVWihwrg2GtNB1UTWzi1asDsQURzbjovEsy9S5uFAwTSAQ6qhaePy3AKcvTUwUi",
  "key21": "4NrYE7HLHsHg1Gxr4is7wE8G2XbLeEEpa7VXxfFTjdTe1i77aFZXWuG9vFChgcB2nqkU64JU5sJsZjuN8X8EfLHL",
  "key22": "2FpnqFy4BFZCo5fnSoSMg6qYgFsaZ7CZEpzNHqcD7ViSfHmzgZhsRxgtsUbPR3Xeo5w1Sy3kp8K4GNaTX57SriKY",
  "key23": "3wpTyMhTLUPmCpe4fWPqEcc21mtw2rshSXFzCZmKaiRByZwsdURTgYfsWfet4KeNuYJ2obh1UPMKYHBLyktrB9Wq",
  "key24": "3Dnyss7zvS6JHmXhmDd6c4t6oo1kXQDiZM2T8NMkmAf1bvx8jJrVNVLg14XNKfzeBfxLXEyn8ZXtgwP7U24m1BNB",
  "key25": "4J6Ranwnj2Ac7gHHnEgZ2xVL2pLdKUr3xtyz2oPsmcVkdWmDoPFCVZtiwDCzh896iN5Q6pDdgczoYdj1fiQ91dXS",
  "key26": "Ep8ttRHdgS1UgicvrcQXcwT6zKYQjb99XzSBTwTyk5aSs3iR6NhkaGaPXAwpMAprY95C7Xc9Xv1Y4NseMqkRBXS",
  "key27": "2TiXQ5bNPUUYk4D3T7HQocanZGT8SyCembhF1vFD72tmRHFDSeVQ6FD7sDTJz1GQ2QPtJPg8qLHoL12HduWAQ5DS",
  "key28": "2P48T5kMhoMi5tSPvj8HkRD37kwDqMA5HFw8d8q9T5bw85PttHTA5xWQyyZy9GV7vCVzvZacX2ftn744tQZ1dLeS",
  "key29": "439T3efAjaJAkinXXRfYWvnTLQ7MgAnsQURSayENqULowdojLpQMRbNVidvuYVroo7GRaa7XhZvcngxLzD9yaSGz",
  "key30": "4ycFGRu8aFAEcM4bKRCxnPhZxp2xcjYwBCi6ZjvqwV8XvjNAbjKJAkhHTrQBnes1ix2VksZPU4rX5SdHYLJEjhaq",
  "key31": "4kivKMKQegckxFin58QtEDJZzGHX8Aiz844G4Ybm6VTJzbhtiTjY7dDWheZFevhgCWZLsb7mRiGB1AfwatyoRi83",
  "key32": "4X6LpQoGjCJji61G1hi2rTpW92BCj5eRJv2dFYLg3K8g1nfxJhKqYbLeqaRn6KyRvrHjKb94ruiKwM1RSentX38L",
  "key33": "3BVo4dCh3ws1iDCNXKNLRgr3LLnnvdkKtSkPnBThFT5Dg3Sx9r3BvWwexeUig8WcbGnvtqwem1o7muEPDozy8RNm",
  "key34": "5vp6SKXrrsTkBEiu3n9Z3nhND6v2DQR229YZuKMWauRHkBQJ1zeSXMTvfDvbhAhuSUdLPb1LtomVwRaJkRkKuKYH",
  "key35": "5LHK5D4NcaHCLrXPtSQwaaA2KyBJgtrPGrV8hALnVb5fGkRTXJ2Y3NfnAkSUqYRULEX5Lsx3pPdPjHv5C7DMgrCi",
  "key36": "3gtvv1XpTto5Rrtr3B5PhX17ZhWFAaY5zqRtTqzDmueNA7o1QVBM1g7DEeECAUaFXzUcE5CcM2aErq9fgCXDE83X"
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
