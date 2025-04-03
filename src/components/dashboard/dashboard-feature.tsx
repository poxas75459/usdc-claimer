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
    "fEmFmmpzXVoVyANRom5b7YqkJ5G3NU79zXbCsbcX99EMXYJe59BxxKgUeScZhNTHXVqB8NhB5n8E31932rkLbDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ctCQj8qNit3dhUovwkQF7k5CZUDufyMbYAj5vuXr89HyoVKw1rJ9qZp5jWJ8qxZ8gTyXcicF9K2ShgJmCdxscL6",
  "key1": "3ppkPEEhpwTq9bBiHA1nuhqgEENw8qLWXV7WxpJbGTUkJr8tszoDyFoeCyeYRii74TQZYSJBTVzFaSYHdritxvSo",
  "key2": "4xZYQ9xoqjJmjbbYu6Q5iQMEiiMekBpuifm4Xw8KN6gRNfSo4xj2WTLxF4GHDJEuJKiveHossowLVkGJS3qDwKUz",
  "key3": "5eDLumSseEGFNQZm2DWot3wSP3JM1sTg2SGYvYscuYeYLVFxkp5avuBqhYcLwj9ekXfPd8pLiNCFcNy2FMuaKKTm",
  "key4": "42k247v5rwG6d5vCFtqc4UrZvMgWou9X9YX9h8hnCdNtR9bDHyvYff6kjbG7HoBEHBhzdBXwGUMJ1U3MppJdrhRL",
  "key5": "3qcaozYuePenRvT4JWEmpvt1mW3eHDUnmM65iWn7NfkaQoNyHGe464TfVdhCNaiYhD473iJb9qHLUkS4nviEUVWn",
  "key6": "5sTBj17CeBPPkqnuArnFJuY7UUmE7LrQ7967n2SBfWZ7LFseLvThyUhNkNGYTYjuB42EVg9M7X7GuzaSAQvAS4cG",
  "key7": "43grD1PbGkbMBR2XScMcmQ9SjCwTMQmzKmVWuhdKZ7r4GNi5mzz4gJStDWuNbPuGywB6SB7EJ2rUB8j4qJW99Mnb",
  "key8": "wtyQuyjqBryYey8ukWr3VaTztLvBTNcCnwEgYpVqXRwaZ52Wmet3aqgVcYhQrSdEqXDbgwwBhiFsj6wA63959qS",
  "key9": "5hV9E6BB2QxbriHnupH7tEsoThymaczi7JQAWipMi9WsVvXHA6Xpg6Lw2eTqqpJ5YKQCLHPEJkQ1vDeDuiH5ydup",
  "key10": "4Jc6ZfvMUj68A1Cf1QmAJJh367WoajhZkw68cmdhm1ERb82UuXDMc8oV1gsdyFAQPemisSQzBjQpMTZDEDsgygkr",
  "key11": "rGG1as2uQEfQsHpGPx3FtWSqKEBte4LEyfXCobjMZpy6RFwkYnebKqYh9icP4PtLjSWrhu15mRvqy1kJCfBrVs2",
  "key12": "4Lb8UDvMTHsHySxW1qxg8QNoioWDf1UR2AYPB3EedhZtTF89fF4Qkid4BWnXfiXNqavAaZHRUMbxGXi5sSx4Ep3H",
  "key13": "4KX8diiC59NubTkfRmGzaKtTDyPGR1yao1GASxpzVnjvPQvba171GEUaA5DozvqNacg6cS95ohnArizqP3kN4uk8",
  "key14": "64Ktgi7ynCS53ghFrSstvjysf581a3iHatfgA6HFoUvCtWrnC6EpXRtzQnkhnQwFJPBLZtgnShy9quttXkg8xxjf",
  "key15": "62NRMbPAU9zFG2sFi4jYLCwUiXN1T2yiegsB9RAyjXksCNbNBb8y6iVcocLC2dQUSwLGa7oBQq923BTYwisaE2ax",
  "key16": "5dnax5XamExpp9kwrFHj2tP6EhzNC7eYUPNAbikH5TTNN56yazDzDaSaoodRMSpUwEvdeBkbJVHxLgfEmia3wBCT",
  "key17": "wwAV8vVu54F1FxuZjmqnCzfTeGD7KwNqKBAERgDMnxtmFMdx7fVGjJVjKLJwHsDYWc18Gq469fejrSV4x4FybRF",
  "key18": "2bx33qx4TCDpT5K3nyUdjrDSHaLvBCi7KRB6uSyu8Exf7sPscnNPtFhH6sTgJ2DjdU32zxJk9YhhEKPdbpaXyv3e",
  "key19": "4ojs8TuaSCGENGmneQEGQc1TBb1xVWzaBZsaTGhvnNBpXwPdLdWLBPUrTRtuLb7Fj4FcHs8SNRsnPZLj6EyqgpQn",
  "key20": "3nygFuxoZGSjyXrJ5VFQFm5runtvpTMjk6fHcxcP847EfEFPSwisJojaq3kR4DeZFjLudxRrFCcjh21yJngqs3tC",
  "key21": "2aa3e9h3aM3fp4PmxmsRdqJ8aawMNRcJe5PoTVfP4cSife7Co5DAQ8PhzFZDaaTUrEbQwW3hohxGcr2Tuk1M9MDm",
  "key22": "2cdF87HvHkxenQL9WG4U62RZJ2zVCehHojBrjAhaiayDESeBBZwQU58upUynYdPPcsVRvDcvBZuzcfRAiS74AUEB",
  "key23": "3VHXCciLQ2NoCPNUw8jok1xQBxXvaDHeaRHKpZGZL4TCpbjct5gegst57uf5AY6gS8ctsTCrUVnny4FybKmDkvSA",
  "key24": "5Sqho6zcuX8qCSovwDoLXyEPWK8z8GJgPFjfiLSamHFd4A9q5az4vxDaaTjbeKdCektBcJM7Uik2SfJTE9Y3xKCF",
  "key25": "3R9gLWMgyMFpvVEVgxxDbrHS882YvfpiCWF14Vt44XDcvCTniPiDjbwRxip4Y7gKWvaDRsw1f37cRhMez7CZZbeZ",
  "key26": "4LfY2XPjHDYXW6DaNvMsgjPcz7z6NZvTLQjCa2wycgzoYB9PBk9MoGo1oax4ZbPqRWigA5ToKvZ96hEb5PPwHVo3",
  "key27": "4hfWwh9D1rTsDBwQwTCsAK9w8oMLtiwhVGCWrSHnobNW2hFviJo98aJTwc3mDB9sVZTzdmYGmYYd8vsbN77Zf9Dj",
  "key28": "2qKkdA8fZ2mhhyG2DJngCZcdY5SzeSR3ikNWWrdzNZnDcQce9xLVkGvqjoFyxPpTQ3AXPxSt6GJDVRdxJDXrhQwY",
  "key29": "5ELYn5ffPEJKDrEAbMNZexP1bU6y3UaAYbsLmwmrpnL6RtS3wKaCSodyohjJDGd4ghtEF47A8hKqbewLGUdMisYc",
  "key30": "32T53baoWCedY7UsMdoRuAKGCENWfjLyh3sYsBaPojWxWXkfrzfTSYd9cUmEoEjvAdi6cfZMAYRhBaKFgUqvvZpJ",
  "key31": "sAs7oRFG9Kvn1G5FUXHtiHKrfUZzyTfCSphbqC8ZZbyQBEtwnerMkMV4uY85GNnXnrr33CSDdg2N6VVLDXDwwpS",
  "key32": "3jMffjY7Jq9EicWCveVQrW6jBYzdNomNu3jk6VazqJfaQec6qJoVyvUg4FrroZEQQYA1b4G6SzdhpGLTHCxeU2Ff",
  "key33": "jeBnRrcopcHRNvuhZGNJ1uaGZWwnKDCYuAooKWxcXt1W15bSZJHm6vDNvQtnABPy42tGNrot29fhaWWbhKF98gZ",
  "key34": "5ewTCpa2m5pL8j8tY7uhRYPRGkWC7UiRo7EPDfjpGwy48FkbgaNh1p5Tq8syhDnEdDrY55K5ki4sHbaYNqfC1MmW",
  "key35": "WtrJauAb3s3rbc2Erm232vBqwnbYSnoeffZEAb7EPb8f6bz2ftP8dc5zAzQqbS7VccHVYTLgUK6JxgdMnRJX4YG",
  "key36": "26Y5WCwvN4fA3xeMrTMMx4CDDkbo6dLwDezAyY8tD4rueuDxTggPoeF2e9E1j6PWfLm957bn9timbqhVFyVntfdy",
  "key37": "59tzSMAB77CUMHfWKHgcpk7SRWY2jbA96EvgvJka2j7ktDu3PfBzSXw7YtTPf8eTE2zq1XnwWqryYbb9WNBbX6Ek",
  "key38": "3Z6TcbuxngpudatdFc87dJLbdSH6PzrY1FiufyZewhxtagS4c6WfRy8n9pFreMKNx3Rj75AsHyE3rqGnPkiMTW2i",
  "key39": "3Sr8dSRESqXsVpMhP5UU9zMJXVRwV7ohnVGUBr43pTWSGuThRiVkE3kEftj3Q9fkb3qQsf85uVfxaP2eap6poyUF",
  "key40": "61nDMpUV34zAdC2B35yiHNx2ACsqfFaq6waurgqXrbN3kKWC2o4n59mtABjUpRHWXFyS8JN24TtN1ZA9foNvcidx",
  "key41": "4i7vTFaTFhftAxBU1nBSkHvdEaDG4h1GgJEknmnAHdJ8XTLC97HS9TBtEGnccMGBkXNWD4XXSTdMB57KBunzTKpJ",
  "key42": "3gZ7yWcSczJp7rjMTf5auBGLwM4hoMbFT72ff1tFEGcsEW8AyqbgAyjVG4Ks3VTnfPz72z4hor9DRPFHG2m1Nn5o",
  "key43": "g4T7Aq14ph3BoosmgKn7FP41Vdsh4ismLqqJ4CWJ9MuWkQShNspBD5rvh8pSccHG9tcZFCcypyAvkead7Mhjvj8",
  "key44": "5oJXyTBd7V9JBs54Ry63aGQKm5YJHwug6m61DnKUrYBCatXuYR4jxDQUT3WMCcxmXYtJfkA3CgkviaX3sZUpLZgW",
  "key45": "411VcdS5AyupqYYGdf6vG6mUmG3moukEAguwkJcBn1XWbMHLkpdfV69wn1AwPbTRbs9ntSqAMzsugRp8iY5M6Kzi",
  "key46": "3NdpxrMgAWDbYymMQXeZ4qGJdP2gfCBa6JDvsxyDmA4eX6TGaUz4u25BUxL3qNickaHuR4nXZQmHEiR78Dtowefe",
  "key47": "sywZaEWiLDSRESScqyEHeMh1TcECoPERRqPx1FPvJYCJegaAKhGa6yv8szac1PDWxZ8AdzwkgEJZA1v2qeDGgF2"
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
