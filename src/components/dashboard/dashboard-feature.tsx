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
    "2cNgKDUCk42stRY7cDRQ4CNe2NVhxWyu42uZ8rhb1Qn1vgh7JrMYsTNVmxVPfHT1dk27FGAy98AZyRmqpCoUtEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HStA5sv7rQHcBBGJzfd4ZFW6ufmRSAgZdMQSTLktdPXLvGhr139nAa2EiAfwcKZ5r8yWqf5vD68B8F7wYMMfor6",
  "key1": "4SyW65QQKGgz24XPmfZkkN52SJxVuDyGcFGT1PVQcu8XewQ95wxvmdbb6VcMVc6cwytc7Sq2yLih47oWHb9JvLV7",
  "key2": "5Ltp6meGhAToSo84GWw5oQhUsArzVgWBzNpzF1WXro6xLxoPTrxeUqZuvEGVNia6kxtCG5uj7jHGMtqdBjYzaKpL",
  "key3": "5AK5RjwcRsdjGqYbipa6fNayqFjZGoKrc7yDcSbsijQ3e177LZb6mt24oY9XvXxeQ9EqL6mkfZhKKJqtHYPUMvUw",
  "key4": "5HwcWSv5cRTi591DXtvQ1NHvewYMz6Z9rYd3TxBFANAHzPy8h1yJUomRVELipk8L5JyQySpisNQtR2crBbzJdHSX",
  "key5": "34JqafJN92N11a1CLDo9Qkt2UvBQsFtyvsWVHPBBF7WiL81UHotU8vyDppvLKApJKf8QzjGXnRMX6M1GJhESvaQH",
  "key6": "3JqCngpPJBS9Qr88d7LrjqMiBD51xsGTLSHi6HJ75k2xdgQJwaVTBzt1jZGK9nFrdpzF4dYXjAFQD6qP7BWaZYDH",
  "key7": "2iNg6NjGQvEqA9UXcF641Rc7zwet4tRsU8gvbJMYrMzk47ob5c6UQ46xPDZHLYDzA5nDiER9pvorqSp99GujyQr2",
  "key8": "2TLcdJczUdZDYgWgrbXKmdXGuow2W9smchw5cHmyqpSnPkQKxTkhwJVQznNQU8D2f5esHFzrGWktQfDUZNDTmAat",
  "key9": "4sFfF1V4qRLVf8KBV7WwUnJHtroT417rajwQwM3NkVKy8iTdLmvrhtj2VMH7Nx4VRXVWpjD3A2JpgXqE18zNJMRa",
  "key10": "2iAwo9tERTmbtFYChFVRkcTnsGV8j7VGWi5P76vahq7HQCPCdHv9oxUgBsGSYJAMAWHmVjTs8qFZapjedcabDsWe",
  "key11": "5c3YGSogicfiVzZK4U3iKJhfhr8MH2PHzxCoCBjzMks4QHM3nvV2cjFNmCEXKkyMb7SVUibaQpLfNvyqEUALNPmD",
  "key12": "645FATYHjdYFsrkrofJchZqLzsPZ2cxkX5pKtJ1sarUraiDPyvWvVHAwskiGrnDFiQ4nD961D2U7EJXGfLjk2zt6",
  "key13": "FovAHpxKKK1uHfVGr7QbXZbAG2mHiWL1o6YNTN4uLNKGJxkQ54y9FtnskZdD8JWyFXB33bqHJbKNQjDc4GCij4S",
  "key14": "3wZUAKbCinVUZY95ZqRmJUQCq6151UZvaYVoj7WZyW4rcCjbLCjJv24WRoNKYkC4T9NfU4f7zm6rWd6CMAaeeGP7",
  "key15": "Xz3VRgKPbMht1yXnVUqyhAz1f8r6pqe8Hv6PTM8wCU12wNsynJCQHjweyPiBvdm5XKt3GPJBisXZHcyYwontRkc",
  "key16": "5tv1s4xJuVAorkeB2DF1AxzBuqu31z2nyC5tkytjDjHkBCL4v9HCuqkqHov6wSNxeHLrrNBBk3Pzd7KKxrYuavEz",
  "key17": "F4zac5YDY7WfU3ydLxrzodZTNMF2eJ8aP25eCa6z4KPvokBKko7o6XZokV6jcGtkC2aJGsNVgG8Bjf87476uZXU",
  "key18": "5TXcWc274xefhh3FHezGkTRowghjqpFiiyNHZNKBCupT3EWeDFqs7mZ99g9ZdFWfa3cYdE16nDkJ1fD1hqnfGCiy",
  "key19": "34KAFCp9oQc132oYJB6baWVUfxYV6WD5WUJFpm9cRrJuaBDJHygyS1qh4rYQAEc85bUobBWyYmgkLCsuLfvP6zw8",
  "key20": "49cGxj6C2V8kHje39Q1TmJjGrNmgMaQpTjukpZT5WKwAshFUHaEfLn9ycVJHLeWDh5mN9s65DmCY2swT49R5LnKD",
  "key21": "nENhoLCwhscdkm5EYkATaaEmWF1F6SENWmuM3Zqgpy1zbQvwiMZuWGbbAQrQ6gKahmdacsXsYrdoAJf1aHqTYhq",
  "key22": "2aPhnxCsJ6UaCguKPAKbt5xePFi4RTNJ4mZ8RFeFFQoxBCM53sXwqopAs2xjiWTwXG7vdeby3xWEezs9ZUVKhRPw",
  "key23": "27Afb1iqVNPoSLsExbMhsdXUAcuLcAsTJBXtDjWVAHF8reuikshfZms4GDoqyVeAW9Y4vRBe39biUEiFi1SYm8P6",
  "key24": "5EZnoCp6Ae7sx1CHirdzyHL8atjufxaLHZm8DvGLC5aH9BqC97fRXu9jB45UKa7xUrMiPWhEcP8H4dxMqNNnNeNJ",
  "key25": "5GYQQ8iumuBtvQ1BDh3FgPNeGsu11mL8Qc4dsbzkN7HqjbTCVTvo9dmcgMMjuYyYHiLiu4FbQuzddUUEmooDgukN",
  "key26": "4FBBwYSZdot8tNdimbTsZnw7BpsFKqVQonYGmYG9ngEah9bPG8oPNwNB1DXVg6aEww2XpUiKBTXftdLFajMBvpcx",
  "key27": "2Lqn6KjA8jhTJGUBdr75eQKqMk3AZyER6WziZoYGHcNR4aKSYLNdEiar3agqxj3HfW6mc95jckX2oyjRPo9vCFML",
  "key28": "65VKHJ2uvmJVW2nQ6G3iSkaJc2uYy71mXP7xqqmvcbqoxKBcts69CYdFZ5zkEnyeQaBgNUCKk51w3R1S8W6C5feY",
  "key29": "2zoVb5BXMqcBqpjp8T4NvM2JjKPgYhn4A5Sf4zpE2FzTemUJocX7fUpCRgLvjnpub8fgBdagLz6NbSsoB3qPbzcj",
  "key30": "3itzYHeFZVeaGbaVMqRz9yzFAB7CsNszfZUcgkkimge5DqoNLNsKJ5m7jaiEbN49mYRFqkezgA1B5Kw6wjp1rfTN",
  "key31": "2rMvXKxN39B216DJSmJ5opuqqmXm2WtuR7ZTX2idRoBVURW3JzSdFAVSFpmnuTQCkWCa6YTae8UZm7eQYfHqnVf4",
  "key32": "2m8DpHX6NAG7RDVxvRVbYicZWrddFJggkxCyaY55hCNdnLJ2YSZf7MFJFzZucbpub5EzptpgHQukcHcYpenBtZPY",
  "key33": "4CsvXg7cdK426myTGcnrC8u2Zqo8AzFeGx14DBYtFBwbqykkfYXEWEo3tqxRMsmHfuMjKuKDAqjN7DcL37Lw8BNf",
  "key34": "3dUbZj8HmybXbPhWZPHbEws3QJUUuwgi5HsGJNA9EfaQ2zTSvPDVRaJbVkQZsNKgC8d6c3tq1nFewTi5hkYDTXk3",
  "key35": "5NvRN8pNpd1HeCmzVqNfsZ7mCeZNn1mFnaH1V9tuw1LbtEJR69RcVzBZ5CkarbFsStgHxULVVvPCUU4JMQ422uu3",
  "key36": "2xHGxV9Ec2bpxgUK5E73Yqi25QfdwKpdh9Lrf34ekXXKNpwSrHVhsonrRAMdSVecmUncQd3m5Uq4wPfZx3x4ELoF",
  "key37": "4s3eeVaGosuWfLr9kMjzL6tYvhBXrSZtBHPVqQatGs1oLZRbLtXwSMAQ3h88H7EGV52QULEwPzAWjmtrvfsFGNpc",
  "key38": "tNM21P1ESwPppWh3GKb8Pfwuo65qHo2X2ud6JgSqdKuNR7a5XwfRoUEhUWSFsmQNw7cXgHehcxGCTyV8vxZDtg3",
  "key39": "4sRvXdWdw9ys5nP43Ld3iiBTniLgvYfRokY5wBia12PkL9o6pNddhEKTTcpV4K3xudizsNahFaNG4E8vWfSGiVNm",
  "key40": "2RNAkpxFHrETpyWcBYmnWgmNxFXbmWejWDzXifW8mTnTtSvJhGNhwXYVdVBeYEbgZFGfxQwL5DEZ6AVwkiJyzRrs",
  "key41": "2aXB3ckcJD6t2GCB7eei9zDG26G2NrsTqRRdcyVapYLAF4sq7FpUAYsc2yxaLxMXVvNumiQ6SdUUbqKQtSrBWrtB",
  "key42": "3oXTBSvQmHdHrwBBnMM86mbb6E46CaWQV8zWLUVk38RGEDZ9WftxpXDxuEdFUymbGPqt7bJRJCfpvsGdvou6Zqc1",
  "key43": "4QHHGuUH4DvBKSoM3XHae29RmFqxV9SSGxBowRwq59E8Gmkgjw19zmLv645Ng4rCekoNYs9Vd2Z99EnDDEryscNV",
  "key44": "4fGnJzd1RTA7pwiu1nSRPiVU7Zy2icxpbREFsHfPLVyguSVZbzf6EHb7BDScAUuXXgrZyQvUtZwKJnBFohJgWLBm",
  "key45": "fiJs3MBjFS3mbpujxyBK6QrREPDBDS4r6QTsTaAsXGZmdU4n4khoQbkUdRDUEkidHHKhUgJiiN38BtHASZ6MZmm",
  "key46": "4KT3hK2iiHrbrPzBvDNfWoYE4oxWcQr5qr5qeXmpEaEWNYevktK7nba1jQFxqvk9DcoRnWmYReLgV6YviPg4Azda",
  "key47": "3qjcHdxtag6coDq4viBnkr3B2aDZCcoB4weu9QgKgpsqgSZrrffXXWYWehkMgo79ZghYdBmbU48KDX3D2p3H39Xy",
  "key48": "YpxWqbm57FgavvLZPLeZjF6mAgbjxyHoWK1kcvrzAqb2NQfKXQFKuU69NxP1y3u3ZLSMusZ4kWaWLrcaJ1Mf7y3"
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
