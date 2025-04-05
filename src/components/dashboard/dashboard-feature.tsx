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
    "4PHjXLmoNPWk1Dqo1QzxTwfjFLedp9qD3ts5cFkcyERFnpiFfHM8MwyVYqCgASS7fidHiFNgpsi6HQ5ktgGwkHNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuLXrDzAVeuQCwQreCEhSTYpJfpmeSq7sUwi6KAjqBcr9L7z9R7Y75kni8AjbeKfamCVDtegogHTTEV6kuUmteA",
  "key1": "5iKGo5PtQU8k9FbqcrvvrP6P735VcW4S7tLpmX7QTuWun2Rm6PrhTSPm9t2eA8Agb23ASdEaTnbNqi7s8ubpQS3C",
  "key2": "4bQwxEqLzzMmnWFmoiXVqyuVoMcgdXkw2dfMnGDG85xbGmiFgfK38XWhQ1T836NAP29d7WPz5uWHcWiH11vj7toU",
  "key3": "668G4nX9CTU3ioactES73S4qnxE5aB6Mb7PaeJMytUJ4Lz2w3ZPCygy37ii1NQ4dp2Qpiu92EK8NFukFpsKtRwVX",
  "key4": "5eBSknFku1VdfDtS2XuMJJt1oiUUL9M35h3mRQn6F9M3edozWgkojCeEvE9KeTzAoyoKd584P2MZgYqHDeDPV24c",
  "key5": "VEpJR9DPk7veTEuY1y3SX5KqB2u7UA9pux7GvVSwiknUTRcai4fsHyqRPNgYPL7KkwVZpGjLrUaNqpJhCVQXge1",
  "key6": "23UwrbqosANLh5gxybWtjizWsi9S8hB3wDZqjFYi6FZtbKbNvzaYhJnjqEVE9pVv8kZBnVu3WeFW9g4s4g3wWcAZ",
  "key7": "34sBvcmexiSx6o9eS6fimN6WrGAPEu4fJxj9mZsuksjBb6xSa3HysFR8sHiAWgaYYbnNBuH6zujJA2Gx8e8sexGX",
  "key8": "5waPr1BByLge5x2Poi2TAaNJMj5yPHpWw76ZzrYwGC6c8qAoAtykqMtn29vkfDhkmdUzPKGiLXFGYH4vyAPMY2PK",
  "key9": "31LMNaZkT28G5NvTJ8upf61nvKYkeA6vgTYU9btCB3jPhWBR4EfCVLqoxicSAsVRsqzmDnmKjg6whj9bDKRBFobN",
  "key10": "5yTNJj5rzv2u3jvL5wGxNy3g36eqbNTpoBjssPt5DKseZgdK5Z12MKYA8utwrdsMWjqMa2EWSCJGdBrvZziw5m5u",
  "key11": "53mup8SdXNJiojzbZ5tLZwuxcSzqagUjLxqPtYhRe2txGzn3aeqp3r8u9Pyo6hvQiA8Y6iiV43cdJoYsRMXTet2u",
  "key12": "T8TjY7yPxCzvWzLmTYt6QyaTMX7kfVU6iS6EBtw577SSMJAC66vNfok5NCd1CUj5M9mCf6ux4evekJsfAjAmPpH",
  "key13": "4zDkhSsEkkAyAwhoN9FR9fjmieELYdDAQdd9ezEY2yKZwcCafdvEKoJ4QynhrLCF4dHgYGUU4GamrDwFma9v6vc7",
  "key14": "27cpJ2VkihXUuquNdjYxF1Ru4zCnL62uqm2KBUMRbQpRvyaYQ7dTsRdKatSm8K17z5DZSD9q7A1CHojSkypT9Vbc",
  "key15": "5zcqKMdWA4h4RH679YMVpp1Pzz8E2uLcQ684s7CwC4R3HoszytaKVCGdxEoLxhHyYeZ5gfo1KBytwEzjYV1YeSnS",
  "key16": "4WfjPj5hsFiD6jA9QSBftgGobxqDiBEnuLjUS2kVAozuCdrLT1e4fRDJrpDg4tQ7z8pEhmod3qsGUTKcEcWVbDFY",
  "key17": "foUL5wYqTGX8VsMxvuziHAnXohzdeX7xxRKraW2W6DSZYraMCPCK9Bm4HDjhYdAV1d8KciU2yT5s7ugLbi7wV2C",
  "key18": "61EvUp6RqxTREvbhsW7ABLEpxDBSqq2rnQghGWVhd8tGJ2FTLc8HV53ACBQuCUcm8Ve4JQV447oEZHgWtuyCgrur",
  "key19": "3bb27xN2ThBcfGb8xW6i1SxwBFQzbgZ2cYbBYHo4e57CTWnzfwxzb9FAeb5BPwAQvBrXubU6v8H6BbRymp144ckB",
  "key20": "575u7r11ceM7mk6Vn4GCbQ33TtSYHhFNqJhwkjfArAsmNovaW4hXTAQzRGfQwuceoo8swpUUZZNAsdZrqFdNtKFe",
  "key21": "2bDemQUQwEPL6ji7VsGiDNsYKkixYBDe7ssuiEDrujG5PfAmU6JAt99D58mJpDsqWaUa7o5h2cUY8x21fVpiZMGt",
  "key22": "2NgVwDTTk9AeZYZQsPRoFCLy1vK2rbgX9J7BS83hA4pM1V6qDWX1z34mdYW55UKCRgHbHw2857HaaPgsjV41eg7Z",
  "key23": "4GTExGB3tktH2z3Qq92zWrEvWninKkhGrB4CFXoxb6VCPX4vJ87E71JrFZ9T4vxf4BZhmvnReeEFxwZmJeawYtG7",
  "key24": "5TQ5aHewfiPFqHKs4vVbUeWjfiBpnVXjZHkTZdgFnK2V9vehGZfVk9faBjE6DQZPycJuAuqKYhhSriTeGLwLjH1w",
  "key25": "2Byxapyk6kKYyWtrCdt948vGScYmL5GWqzAsnvqeE67Ftar6oZ2LuiWQTk8pJq9cJcykyFQsVGdeT4Z1a1ChYanQ",
  "key26": "3TFQzVpYyHPs1yxSSeJuen9z3BV59TzZ7JViHDH8tRfdGJrpuP6gXR6qLnKcmeE5LMs6JV5FneLqZ22tsY66cezj",
  "key27": "5nVM1GTVhr6PnB65CKEajS7Hg5cxFnaREifJ1mzuWAf26bbMVz2sauHwzhjm9zYt2zxvs8GXBevYV4ZZa6tJPLAL",
  "key28": "4F3hpipXZpnJatv7kxujW69vPSJTUCs6RpJkSMNYf1MFAvtqPyh5ffmGzfftKs3zsnYM4kS7SSqvhtaEwouEPJPx",
  "key29": "Wo4v8puQdBdNabKB7BR51oazmCBwti5EbmAE4x7xQwwZjjdpP3kpMEnUSXBxAqPogG3Pmk5QwfZZX9aUfh3yg3H",
  "key30": "4zkZ15nHuKpQMUL5z3oceUPNk5z4yHoz1X35aYXoUUgAPGRnkAdDAFn63EDRhQqdLMVxaSC7Wtwp2uVNUW5yBqRX",
  "key31": "4xxLRPu9RR3G6Thwtyrp5pfNyfRtZFB5cN3V91RXwcJtGcGFsr2Xnzdnirsc8dn3U34KYEVkPSY5BA5PjJDKe8Bb",
  "key32": "4yUFk8WpQuUCppFHsM8VFVanr7Gbs5wmLLQSyjfAQTeQ1VsTjXYEN18nPLWsHmJgcg9n1Dk3DRsH1LDRLjgHtBQ8",
  "key33": "5pzkXA7jGEuW55UqBj4ktgHYhHAMAwLM3LZpdPRSaL1TGyJYyaUKGgar564VFQPGNshUtqfeetxR4xWsKg5VoUrE",
  "key34": "1Jo5Enj2tnxAuyumq3TDVE7HAjShCwrQF7MgyRNR5tXrTsYs1iRzC8hM4tJvBcLoa94xMSJa7FY7EbqbmzNgqcG",
  "key35": "6xWsZAK5gfDDgRHWXvqVpRYYG2wmMy2gTnPzxdsvohi9dxdBwjGBmunShrgvjQ1yWXa1j8fi1vfH4QSNtwTNmdc",
  "key36": "2jBgvU12WYuFRTDihEx7qrGyEf37K27uKZBL37gXHgcZZWsXmp9nCRsZCREZCGV2HEg2CUTqcEw2WZSiCWudiyAY",
  "key37": "557kxUJyvQQDq24c3a2QAUNyQbdM55B3NPADU9ghmrToo28wvKE1rfsDqYufDw5ittLhce1BcXKi975P1RXhbjUv",
  "key38": "4PdgJmrWWqTPTdWXcjbNn5LJV5EBiD5Z2cHsYhJ1Vd8MM5VpLkWPT1ritHo9uxmbqnZDxFBaqYQDQ3GxBAXxn4S7",
  "key39": "2EQ1EH7MM41YEoBYfMtML67gFJoe5CLfQZdskq9kqsNcu91DXfGFkFU9mVe1nFsaQNZTpYZuXWS17F7C9n3WmuYk",
  "key40": "3qPGeFmQsByTDK1N5hXfJoVeutvCo14ej8QagQK3159VcuhLuVPCV6jPEnuGudBEqn7QD9RkeZwdwMifBcXbDuwR",
  "key41": "4t5zYfCkf8VB78vi3FZQijSV3qURyCp6KQYs648w29JcTwjJDopiZtvzgHccuHscAB12S6V5PX9B3rAdAYdaLJG1",
  "key42": "4BskiYazaKwFfFdVG4ZMgqvc64f1cXnDBjCUd1BNuJaswjpCp8qNqAxwkE3hh9F14a9DqfvXSYQvjJvzqstA4xnz",
  "key43": "64oV7UmCHBxb9A9ZVsEvz4qNrcw6Y2VpCdp9zw4JtvVuP6YmRsg6TN5fPSrDVNDk1VSNQn9qhGyT25erUvzznh8x",
  "key44": "499xUpBR2ECf8f3eBFvaSjgBGWrH87auGTz5ZEt9tnj7Fa5HNxFbDjuuBX8RA52Yhn4hAirfqfvLKf7cXByiDCwn",
  "key45": "354h4fz7KKMEH3cZczdr8qzDyXr64YzuBGQBZE5NshCHgXtPJnj3KE2aBJ5pZMrnZbg8xyyRN8oFEfJirQRG9DKV",
  "key46": "2DAhr7smebUfFyus6EBWga7K942ZPsrcoEeZpuva51oSgVLtRbcitKzcWoGpjojuh9cTvakzpjgRmjXjxpRByudj",
  "key47": "2DYCD36jaxkDSEw6wdwcMiNhcxrLfw7rMeof3GkqiX8nQfoByUraCi7qZiUpAj9ZbBrBP5PkAQUeD2UHUE4xRMEV",
  "key48": "5pHanhWBybGNoywyNtWM48yCWbJNRS9WbWu9yDdZ8YSLHUDH2kYquDF7CGXRc7iXh8ATktLZbCKXQrSsv4CNvqAz",
  "key49": "4214ZtwujbaTNYuW4XvCcCcWamKeiHLuCNPqU46XVjfQUzX1nEcytTxTazfLioske5Y3dtirttivoJrr2RyugcgP"
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
