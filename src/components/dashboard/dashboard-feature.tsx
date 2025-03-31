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
    "2iX2URhMGwULF7D3jRpU2FAnnigqnGxgKRLwN5qSwwjGtxLf7iAqMJ23bf5MLo2zirnqqdvBRNhPfupZqXq3tDBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61uCoaFBrx5RKZWwbTHbfogjVaBK8TA9edtxHB8cCb2PwGuXirbQLbVNQPk7XQV1g38ot87epaBJ3v3BR6dqrczV",
  "key1": "128epTNYpD9N2NvykEE9yLpFMfyg4oEmwXtx3UwX2C89pcJTQ9dwZJ5pgBhV9hNCwJC17s4CRT7PWfywAC2jVMVE",
  "key2": "GYYUf619BzRhxicLTKHQx1Kime1YE3P8Fu1TQ8c6yySaa5VLdNS39vndo2QtPqpEQ9e3q5NuPa9eRGraGekDLFd",
  "key3": "v4AAUJENxSVEK9p6HkXf9rDdUiGcgDwfuQY2s3N7cePksDAJFcN534LpqDrz3AojYmxiFdp9jqRh2ZMwdSdBzU4",
  "key4": "3LE851QGzFTPaj3es1E8b2rfxHpyQ1MugZV8uCF28Hm23Jgcrviq8oiBeuLK39L4sUeUis8uS7iPgzLApiUkUKEi",
  "key5": "BW2n2LVKmeTxdCZvGMV6B4kkgKm8dk4h7CWpRTchqaa2MRD7kfo9LbpxLZ1vx3TLD2FFYS7F88uR2LGjr2xNnvz",
  "key6": "4wXtvVqkH4UXv6Dgw1kAmg9xH4SyVNPSbpvixuJvcQx6oDnj4W9fWCYVe6h4WJMUW47SDn6bUxkwpCaf6Lf4yTmU",
  "key7": "3gyLAxJ6Gf93tg9TDvNShqve14t6Y7zd9CLdYc5mWrbv39xPrtShGvBRqWDvAZMhqseJ7raTY1DzP9MmVW7RaRz",
  "key8": "2E2UTKW5VV8yarKPQmyF5vNQAiEtsQq769A2UC91TF9jpPYPC43SirAtudw8paherjeUd6P7Xv7xz64puHWMFrjs",
  "key9": "2899Xq9ikvCMouvBmyBKh6PPywMLKi1sQSE18YGcUcpCUFhYFMSj5fXjPcRcQRt4m5VvHqeDHys2EoAu2yWJu2Z1",
  "key10": "6YTS48KvZzCA5uHmh5fzTBQZ5voiqEZFPgdimsXbNgtdat6YhrTwswzCrxvuzc581b6aGHGvdpE2thD5ysyRfdA",
  "key11": "5gUwxgb3hJSzn4MxcJ6f9H9L9TCy9vFRrgCtUbdYnYrGq2AVyXYJU5ndaRHaRypPkWhcoJeVJ6VhQNUKeeB2nHWU",
  "key12": "5ncu2dAJwWumDDwH1vBLnazyr5ojfAW1F7HAsGKxZR9v5uM3f4hDdnnByw4SZoNiz8dRrFwjW2ecZc27iK9GQju4",
  "key13": "4nDEvfsVSuQxfkob9mv98SZ2g2ieGRPAQUBCa1r1Pg2CQQphjokNZV3LNdANgEvSdMs5gyxyovRUaYtrxic4sPrQ",
  "key14": "2iVK2LGBQU4sDe8zYhxTYB8TmC6KhXh1kqKCtyGQ7oUwLsNerjFZPPdwEYNpXXHenYjvAv8pG8Gbjq9aaFyLC7xA",
  "key15": "63mZJDsvJWBurnHMr9NeqHK75zuhQykr2Xfu5yrqAL6T26m6sT7Ug346NXiU62k7iNRG24CdPqnqbbSnh6SGtn7V",
  "key16": "5nLVFrUwPFeogt1vgLYj4XNBEEkg27stXxhNDDnbXWuTtV9U3hCQwzvwVffBMx7Hxg1SRZ9AqY3U1A2mTqEfKepZ",
  "key17": "48tpEyHmYDtbJVzKJNLma2pjdWfRJ6DEgZFQdbetM3ijCHv3LGVX33iv9NiAra9ziSA3e8qKuGnGKPfdp2yhDa73",
  "key18": "ctbnUhfL4b99aKfPXZAzkWKZZLdc1ogUAuqgiDKG1bJ9q1cNHawgz6EDzjabTUfEx7eEsb5fNEJN3GS41FWtgTT",
  "key19": "tTS7wiiN9omHzV9yKKPBBtaHySgDjMgGojUhPTfukEcximcG63oH3my5CBMWFJmS9uGRHkAXeSVaQbcutZQWcjz",
  "key20": "4vfuxZsCydU8DnFCPc2L1sVYAA4QDG2o9ixpKBdLmMomrDY4WuwE3wGVhR1cwJYp5aM6pvdtoJY1EZzTKGCDTjzn",
  "key21": "3ncKiT7VaU9pezDTMCvPEerBtA1pstH6viL9FfstaU4TSdavN2i5wUUEvtwNUndMyoBeFzJwYnconQW1wj1hwTe8",
  "key22": "33oon9sPTEqGsGWKMuBaGL7eiVUEhs1AnoQZqcoZx2khCW68YMLtVWrdkHrGC3T5k1aBappjrbtFZ3eLAZKa5pgv",
  "key23": "3BkS5WasrhweU8Jj2KKtDuF9iHGvxjpj2ziC1X5REoxsRgbmQX9K63VeBQ1nuXkaq9cME5UH3LTLtUuuDMJjj4Ay",
  "key24": "679VxJwqFEzm4gKeRyTJCzL4ZPwVyLrKNxRfqjuA4fJjWTZ9BLoow1YNgmH5ch5AqCKajhnpAXSwVYQkbvnQ5W8K",
  "key25": "123MfD1LAn5k2rx3buRz4AZeZe16qr8GvqE4CqF3wXS2xp7wW2Rg1sLn9tf1Nv6SJY5S84fuphAV4R8mZ9SrRjNV",
  "key26": "24nJirzCwrcpN8AWWUS1o3ozpwqxMdZuXwCY9qDYAKLAbCkK1eAMaK5mkJRquzHVLvY9jkehX7Ce1R1rf6SxG1Yh",
  "key27": "3bNyHB6K4scHjrL5xUCzaL1FZ9mjEhfEXGQUfk5umvChHq5ubbpLMem7dd8AgjVLkfBMKZnroE5oyuspqFQFKJmn",
  "key28": "7kXUgbwuaBoWbZMNzQeVPx2Ed1n1WoN8SCeEFfDzxUPdtvmzyjt34ScEUxAwXZLVnh9f7zDEn34WMF3SvQLDRkw",
  "key29": "5pZdVAwXBKttkKmpaUsLtC6G8tgzSN8SpVCLdKwi7jvYxBJNxEk77KTe3vnnKW5QYtpKf2CUPXcTfg9oLVMiqS7R",
  "key30": "4UfKd1jD9htVb7JLXYDXD7HCzUv6qNWKaAM8Uh2iar924vwZ4MfoaPeLLz6V2QJh9dPBBMPQokxgzE4yBtad1pRF",
  "key31": "jhzqqXf7NfEfHPLPQPtM5MqcBsCo9axD8KeeDWBTQoLxejDhb8gHSg8fxhy195EWws1iwcR8TcqTSSo72Qf5Ay3",
  "key32": "3WJJm59spTBHgT18Mb9pqBye5rnAifqRJ8uVZprc7mNbKsxMS45KAFwEjS6SdTtBKNunibbNrSuADVkWaQoEGQnw",
  "key33": "JrXdGN6CmragNV8Wv2wA9GWS9Dyon3XmPHfU6T2dL83QPoGf8XoZ2hESHfgTphnt92YYxW4dCpojMUiNGkKgFe5",
  "key34": "2StWNm5Fmw9d6NNMAVrkXLZsjaRLUdLyJAUZNBC49h7w82Lp95HvDXCJYTpEZ7r2LKMWUG64Mnk7uXizZmG96cfL",
  "key35": "nmq4qEcKFFk4ZPWGt2b36WCUv8q3U3QnzY2P4E1qQaYapngQnnuH6EoRcdBi4hcKYyeSy63xUaUJzB21uEmzntr",
  "key36": "5USBCgx2itoHA3di9UVyKYTZjVucXGRxug3jQkiYqz4QEhsogrFyt2DmBHVJ92Ej87vCNvWnRiXEEUcUABkR8qzA",
  "key37": "2BFFdZo6aYrPSVexdda5Dc9da7xh8coW7XpyhehgHKyp2fErgqtX8iozYYcXKXa4rtHGTdRTJtAgtyxdVcUPXCFR",
  "key38": "wy8frFfVqLa6GiL8e6ArczzCBysK58eaP5Z7tAXYjaMMJC1xoKvXtvzRUBfNUMYyffFiNEvzakwUWf87ub5GKbP",
  "key39": "5kbiv6u8qmaFGriGQuUUkNhhLaj1QJTZMAscE8N5hYiWqMSEkC9ajAXvqkXBPPHLMHGYxYbN8SpeosvAChoR26rt",
  "key40": "2XK2txATrz4aoMfVeoeGwEGmZW4WMBV6X3NGukSNm1CXkpzsPota2EGdiCYiUs6QKga7xf1atBrdEdHdCgzadU5y",
  "key41": "2HxzDeFfK5e6Ld6kqazrgx7oYhGDmxup5NXjro6o8A39gtrmaiNoERGRsnCKRTCKHNKxLnEPbEWskCLyPKTFUJ9X",
  "key42": "4xj4Mi5DhDNhiBegZfAuep42gwKz1rZjhJrXStoM4smanuXeiuNadoseCFfxRjLBEp7gx3nwceYfFo7TPcGAvzZ1",
  "key43": "2fzpVQmv6ZegRgJ4SFxhyB6yy3VEdx7ymGYasHDRSLn4myLUiUpL34npc7Dc83TVPgacb1uxPCivwxyTExhDXNfk",
  "key44": "5UhtAQNKkL9eHgczZNfonLyc3q2fBgvwrYXrV12sFLNTVY3pYRokhzHLcTHk9E1zDZ9iqfyBKGG82zfLV32RxoYo",
  "key45": "2yZJdxT392QBVXhp45BRFUHfZohp43uqd3pwznnPW9wyeTQ9o7qeyAXrWm7JjcdSsEG4tyXvNn12jwbvGsUbXY8q",
  "key46": "66QBvXhgMYbwGRF7iPEkaLGUjXtd4heXLcra7NJYMkubdJKomYTciMks5HtxhzdhyECJyN1zQnHnpSj28bKN6Dbq",
  "key47": "44bBAuhVWpsf3W6d3WGmSQ1tQYLEkt3vG2s9khtZwj16Ui9UjwVY9WKXgvsZZnEqWwc98QxwXEWJZ4RdNdZN8erD",
  "key48": "3DLboNqVkrsQQYtMHqjZLsZ4T37qG9AJQYBqzoYxmWjsxz72A8YRRgx3jmT4Brfs2TA5XJVxXATELvAJ49LBbbQz"
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
