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
    "3NERig6w5VqcuiGUhWhHsMZsLGZLRrp6nwRykJKvyfk1HEHhyVFdtbUe4HhvCo4KmzawVNvr6mUssDgSBbmDCwkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RdEAziwcum68gv7nbEDkNwppQ63Sn1oieFqNH9satbG2vH3YCoaSNjMHbVXCatec5c6i9Tv18Jif2Va1YWtDAK",
  "key1": "4XjdyfXFSfJFpiJXtgWCmAEkSi1pHfqCBvasJRhDy1RJjSxfyGw2gLu4UmnwHVZWpxfhVPp4EDUhcWuncttUfLtw",
  "key2": "3ussssE2Ss6hbno3hz2jPn398MHk6qB4P6wVmWuiEy4Y57CxhmQSoK5wDUXVUDEugRKieg41h5GRdEoGkbHtCGZu",
  "key3": "3fgTfAERtUGbccCEe4a9BoaZ3myhKbwFMKgwBdjZyZC3FpoXc3rqdR4b81DSCgmHAx35pCo8Uzr1wE1VHzaneifC",
  "key4": "5MGREuHmyNetuRXE99Zewo6V5VsXENC7iXrJGG4RVM27is4eCbHt8S6CstzqUccHZKqncyXMoveLM6Sk6a2F3S6j",
  "key5": "5xtFCyg7j6bxxpHsAnv32zxhSc8JC5x3idkyPTRDNpZHiY8iJxMMkJaZfj6cntSJd1Temz1iF88XBEc8NdAFuKrU",
  "key6": "3986NrpbkyDPsCeon5YRfg1cEF4dmA32EThKb5rZezShhdtADfifxNN3z48EBHTY6bi5zAJhk58iYjY9m8SYKT7N",
  "key7": "3swRy1JiqHB59DDjqt6GRfTTz1y8xKwrVWUxDmaUAcCNP1g1dgRi37kRxyKUWoTyoVHJdLCAR6ZtSpXNjx2V6iBK",
  "key8": "3jYJod8UER9Efa7cdkBDyJSFsFHPu8yAz6SCemqNZBA2bQyi1F2jgKnQZYSbAtJyMBKBT64AA8fqjndXciMgffWn",
  "key9": "4HiZjqrgjkrcYL2ie3ev1AjRJDVyJC79VpkmyDNJrwowNjuyzDhs9PRrNacSyntEXnzp8zE5mUsgVNms6XNo35is",
  "key10": "QBhYL1fAmb9unFtJUEue9PzZKEcnQmFYuNDDzXtdFdHGePYHRAi7mauV6zpPkSsSBvAPcQGAD9Hsxb1JZBoKyn3",
  "key11": "4taUhVGgWpfP1v8KrdsXYfnpxtwnKnefPuHfSyg3eCBgFCQKATQGaUwAyBQXuX24861iXN31CGdAvnGj8V6tbWZT",
  "key12": "3S7jhcN4DvutWwpvrdXtzUzAVrKNM6UnZzb83iSVLiEmmY1mCYmyhVYvFYcrNHb6twamuYRaJn4o3DFsGj964F5j",
  "key13": "wRz98jgJY1ejESAqFV9aPuH995y3kNyddqSjKiAip4fnfMp6zHQYUfENAmWJKRmsfZNWAXUbwN7BTD1wg1EiNPj",
  "key14": "4jEkomCKy76pzqvXsTiDAzyW3GfkqopkAe5e9sBeTuprpG8AtiHKN1VgKxQb8VGqYKSV9EXWBQfBDLGZLhoymEvj",
  "key15": "CfVnY7GGBGMvZqaeHvR8bQ3V2T7azeGrU9EVvr2to8qcburMvxZQRauAyBDLTxw5jjhUJSC7pg6LydCuYk4t66w",
  "key16": "3KV4KsmNr6BWP4vUgJ726eduy9CHLa8gSHwu9wCXCFndokeXugRHQ4CU8sg47ocGRSmdbHCUf79E8JKR9ZFQfBeb",
  "key17": "3uCUgUi9G5ZT2rUs9fZ9hwXcH9bHNQEfpH1WLifBi1BkuF4MUsHKfsBNcs5FGFUTEf2eGY3HdqiqTotRm2BEFGgU",
  "key18": "4MWTRxnwc2eaKQuj5c6LmR8EY1WxMkFReRxs1RNTie8nDWdw1UZU22xQwCiMiv8zA7GHh9bbDtC9cA9W3cmHKnG",
  "key19": "25pHLYoSJaqBEc53VF4KLgSyoi3EUkdwmAH8xMmXJJjzBTn72S5mtDMJjN9h88eZz3LkLcPkCSA1Zug5gaWx6tZL",
  "key20": "zrzCrgLSigiJfkgD9nGSEcojBKvuoMtRrcbX1oi4K8tCxBLw13RqeLn1xoLiWqx9kyEE5rgQQD3CRJDFdMyK4G5",
  "key21": "hhaSfnB8Y97xRQXpKsaGXJDRfARmK8J6hd3bD9JaRfhqTX8q9N9bdHoSqGRZ1wJQ7oerk9zh6UEG4p36ofsUyUr",
  "key22": "A5amswdJRmFWxiPPHX1T415fesc4AcZ8n5BTKhd4ryUF8H2kA5YF4vG3NwVt4tXCfB95YqewSxzZ6jGajfXVPFE",
  "key23": "ZdtXEoVSPFPQWm4zo87PAexyxPiVu2FYCFFBgjkKcPHfiRX52rZ37c2Hn4r5ryYPwFon3XPAgMiCjG7orNX5TYV",
  "key24": "VwgjsHAsbEzoEvCtgeJsp4DPKmQM4uRnJTrQHNa51K4pv9gv9mycBGUQEy7hSH5rL1QRxVQw8KMgEjsatBBaxqi",
  "key25": "4tCrnJGq3zqN9oWe3doLX3U7SZ7VAN2Pw4ikddikTc59PqVW6m3Ubbzsd9cCDmZo9sa5SCjGffuiQwQPdqUFVuKz",
  "key26": "4ZtEyXkR6q4c8qBz5Bz8tbMUAWBGV3Zbx9RhfTuX9ZghQjH3qYnrV47UpxsqZTGfWoVuBoCfgtu9Zb3cjoTC1FnJ",
  "key27": "282qb4STzQZExA61m4q7u5BrLJv4y3trh9onTpQJL2C7nBGKpYpYGHAb3pe8BLnkUa3J9zJguBzK6UUnyY8pXnrg",
  "key28": "4UdpgjoAvhEZM58XKNgSoeLSLPZYgHJ4F4jJ6CQWxGSxvyPPGkHS3u3Wy4QnoX1kwmVscbvhXk4MbRhpA9jWa2oZ",
  "key29": "28zfTYWwUVAuT7KcdxRcZzsKpAFPRxBwRKy2QUxeo4Koc2t4pZx9jsNop8LZJ5ArmB1GQmWpULYPBwsfUMqrJFVb",
  "key30": "5v7UvaHRkgecptFzgruo5DkmKd66z8qgPo8CeZrntV414qz4ZmnGDeaerXRn6DCX97qjTYWjF6ERjy4Quh3nsnAw",
  "key31": "4fxwUZ2Y2YKeJ6LwL2WW5WcbF4SSR5QSs6akcZkHhar1R2r5uVX9j449vN625iCdAxUdcysvrGEbqcxYteuRrk2x",
  "key32": "4hJSM2SjdydGsZL5u7NAz8wKaDZTj1HjidpjKzeokyaQevt2FP9EkQVq3sXUMvMemjrYrbi1RgkCarvzXXvFTxpD",
  "key33": "4T5M5inZV7xkWb64iZardGCxtUi8Ej2aaPXajPD6xrHoZf31zttx3Zja6XLMVjmBm1xu69wri55JVLswvze83kHi",
  "key34": "v1FBtNzEQcn82ohSR2QL9Qr6ZsUZ9NPp8ajMA4GoffSpKPc4oifEWV3YRnDmER2QcLiAtybd6T2B5PXmzQr5Vxj",
  "key35": "35gN1F9sgXpbq5WrSXayWYoQU5doNKitmeQAyY41fBo6NW6phAyrUP77gSDSGSCgsfm8Fsq15dwTfJzkefzYgkDk",
  "key36": "4rswKYDG6fvqZHhybf6Y1WLFkgKTgr5nWmE7vwHX7WnEASsiS6JREQzKb9eZApkzGyBJ5g8GE829duGVTco1z1Fj",
  "key37": "Qr5hBhN2K38faFdWF8J8pxatZcqji3E4NE7QngzJZLc1cFdDmu157U4yN9QidH55QbvWyb3V3EoLJyeStDntM6q",
  "key38": "iw7c4yej3KFJA6ZnqfPZXKEkakyhWy7uTmfFdeZvnwmWrqL9wdNnR3UP7psUV9ipanVKZMw4xjc1HJU8ozT5FXV",
  "key39": "3TKKHNJrxHwY8jvnui2iEEMa8WEvyN4yA5cs12h4K6Y3XXnJgF5HjyLiu4axsVa1eGoBCEBQK4yn9kVRoedQMTrp",
  "key40": "4pUfmJDneDpXzXXsUWTQzwNwujFfz6AaMUeSf7hWcxss5v2MfP6jhTwdP5CDRDHugqJ5spUVBaYXBKDRiZwwdvaJ",
  "key41": "63TGZAHdKvy2DLQBDPQkrr78imLVkiiu4NCNDX3UAQRj8mBo7SZvZ4VNFPqXPjYETYFT6uKd1nWHa55cFTZSYtxv"
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
