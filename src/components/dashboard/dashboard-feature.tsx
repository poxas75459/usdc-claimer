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
    "4S9AkxJUfC4goppSGCFTjREKXMxRHr5UNXAKWLyr7z8agPRLhgRJDgPYe59SivRnKaQcVSC1vzMJPnaLk6gCq7qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6z8ErhkTZEB6fePgUeDNRkKafn9vu4PwC8jkS8SU2uTBDE9oCsLqn5tBLJDPKA8vTfg1gKsv2TqevqA4nDWvM3Z",
  "key1": "41UaAKA4GSSchixXrqGr4ExvZ4fEwmEQPLUUkf1NWM395Wy2aTFefyVpZ1aih8co44idqTKARavmss9fGimT7LPw",
  "key2": "34oN65A1sVUkygEkoEAwxGgj4LNrB5HcRf7v2VSRnfNDBo5jfCQiRRLGPgMxrA58Ys3qhcbT4Y8rajg6kn44PNpS",
  "key3": "2cf3V65LBxdeKCC2TUjmcoCuqdeWhrXAhQw9Qww4ig1TAWUi5Y8ff3h3S2Lw3kiHBJYfJZq8UrQrqtAp9PLVNHtT",
  "key4": "5VfJoBGcXai1rnbq68impyK8zTHJHTgm4UFhWqhx4hPLjF6gM8ibUxwXA9yiJMDfPUMu5kP1vuvKzDm7WMFytn2i",
  "key5": "2FuGPtNm5UNLKcn5fE3bpsfU79ACYpjRWvpE7fjaVMkuNqjYukTy4isgoCYNZL9zRAe1foQLpWAGeZ6c61mqdoks",
  "key6": "4Lbz9BVqHFsZAUJDaRz2CpKqbPU5r2ZT7WBuK7Q6izJJfFbxFGm62Kjp1nfbrbhd1HhfxBq47bQRv5H8ong5My8d",
  "key7": "xrNaigdiaHvDJJWmi6NM5xTeiJf3Hf9RE26o3o93eAKdQuFrPWKNnoLaeVtbEa9Bq2snaYMd6uaFmCUAukMiLte",
  "key8": "2Q4nwgUZG2JKJppiwDv9J6t8Hh7Us9fSLgmcRRsC2xy3zTYjxWXJj58CvzmYxihcNEE8476RhaNvrzEy6oTcv1H",
  "key9": "5XKZbrd7WCenbuCRZLACTM6xwYqqfbs7Q9aKqAf62wCRWDKHC8jLhmVE9cnAxXqgfvfU8A2XPD6n6G3Nnc2C1da2",
  "key10": "4kbUCfQKxD68h7TJH9xdEUs2PqJXmRFKKmzfUvj6ttWDzNsyicW8aYX4etuJmN2JRqJAvRLt7DRZTaNDpTtisY5s",
  "key11": "9dJf5sjRRJuvH7oDgUvr6eva75n5FwnASs7qMmoAx7Dfq1r8bkbc82YF22iVtyPPun18x7AkihKnXkzxCFFo5Vd",
  "key12": "4dFuYZzszoaJWFuVQT66xWE2jGJ1r13c7HqjMXgVGZxdwbhGz8ncC34x1kMefZdE6Y7WntC7KgCc7LGFtSXyMmar",
  "key13": "65TRPVVaKn97HdpnFXUeg347ZroFCA3T1cPChnu6aT5UJMZLiWkFbKNgR7wFHfteJ9ETvXHY3w8xDbGQgoRfNo6G",
  "key14": "467KURKDbTr2oyC3zFBxkdwz7grBZ2hL9pmXUfNNzMtoy4Nc4BA6Q5CqKBBkACpE1h3T5dhxh8PTZzcy1iXMgLi2",
  "key15": "5gadjtC8J2D57HUHmYZ3J8A2k9mxHQgFF8ZuoNdChc53nEjebKxS5xbFwtdp1zzKw3cSLAeCUBuZuEP1cmZFYGMJ",
  "key16": "2KnfHR1qxmgz33v7QA6fMeSsLeMADD1uTftzZ57QRkHzZRh7WHx4pS7ztjFYqcttHCp2hf4H5WY2M2NKrgzf8ZXp",
  "key17": "2h6PkkJyhGAR3m8Bp1ECHtRtyfFBN7d6d63uWQ5MHbwApivRdM3K9sPcqdx8fxF9StYNREbJEkTQhJtw2A8roaJg",
  "key18": "5vFGnkPwwA2SWxYHoxDwTsiyAP9CKzTg7tHKu6vLJyrS9vp991n1yynT8eN8DxeyYwpVEYsbAxK1ogzsq8T4WA7Z",
  "key19": "3uF8qGbwfvZ64qnd3qrhB1mP8Ws1ZWmSat41LmkLZNiboeHBC337cgRtVdVEzj75s1oiK23oNWSaqJ4Ne9AB1XME",
  "key20": "4mn6UKkuoLHKpvkGYEh9i13kZhjWZuSoJUJtMbg6CvhQnTMNvaFeT1UWFsvwMMbY8LPbNJp1XeUkAk5hFY8iUvfi",
  "key21": "BR3zjsViQJHe2FETePm1xDgGUdFAVVP4Pr54Nj4F6L5ZbStJskeJDFjy15uskJ15uFTTUHBtPmwVXmYhrFZ27Ed",
  "key22": "2Cbptb4gPWHz4hYUTYfHRc6MMLKUCENuAAaoj2qupk8nY46FYFjf3E6cKyJdNWJ654DuhhngpTGM7wbn1qWLMkmM",
  "key23": "513XwJUDv4qi94vpDZhvewbHNUs3wnzyaPWoEQvRdgujUY7EgG9ZTJLmoqyCkz4bZLUtcJMFaVk4WoDW9LaidyCP",
  "key24": "4ezXdy2kakZ78rbxUBs4QLPEd9DyGh7xe2yNsX3ZZntUC2MoUmdaroHVL8dxw4bXmkJTDhbdvv7BzpgmGLZfijKV",
  "key25": "4d5aX2jY85KQftA9tVs54UKvH9bQTNVCmqMZJAkRtqEfD5BgpGsvqDLbtuzq8PSFibPnCcpHUoKikHNufBw83GVP",
  "key26": "28MSoBNKCWZXGgzNS7gHUTktxkm4VP4uyS9iJrf15kg5fKY29rAuwBSW3AVccdkBtAcpkVjBpRpNnZfqbsHMjt4B",
  "key27": "fV5Vom739rfmZTEwtdUdoD4AsiW1faUPn8v4xt6DQGR6ghSLbGrX9zaSjqBk7HQEnzsM1XpxTyrdqRgvQLuf6zW",
  "key28": "TuoYS8KuyAkXiEUaPE6uFELw9WRyxySQ4WVj6ZpBV6X6ay8aibZsQ78rGzCsadh59HStLomiM1oRSzLZ8Vfo2Bq",
  "key29": "4gPTGtbSmQaGf2RCYGLEMoaWMvnN6QXDwVTVRK5Fnvkfz4PU1R5KZJhpBPyGvgStQf5EjwTQGHH1ksmmmAtNv8UK",
  "key30": "4utR5F31qzfZDG9GZvnaR1yVuKS3yKLpdFUZFCUqJzbyShPAXEUS3vbSrbKx4GNBR44naxJKEYsPsbRyhuvDtavm",
  "key31": "2UQRfW5sGVUU2HXKYZEDFavjtVSKu7ipSfnJRGB2zSpMvN2YPyDPxHVmhp7dwVPTyc2PTHr5zeHLqF6146JKoYMX",
  "key32": "4y8dp7xGmoq8c1X9dzXu3b7vaXcsWChdwe3y3b37TMcD9rTM34DiHTTnGH7G8ovFpiMouYeECasngjM4FhjgToHc",
  "key33": "4kGKBeMeiM4G65WZH4wKmq725gAY4UAaEyfHvVJCz7r27RPU9S4ATGnYfy4dgQHo9zQfxjhfuufrcuJHX6Lbj9wb",
  "key34": "4pAU6GwFsrLtyBVuUn1WCunen9XBeyrHAGnk5mgbK46Gvo9bXVu8RZrNeBztsjwe1MwMBsPcisB4oNoMzvGnWsWe",
  "key35": "JD4Tjt7DbeCgC7w4FGYYM9BdWWYLAk29T23CJJSyMThzZ3owspmhH4xSPQBD2tfH3CqE3x994AcJww3Xi4imVju",
  "key36": "7aSVxnVc8sb3kbMarmgBjVJ4EQoP1xQV9KFy6qNPqMWpsk2ziXu5cApUBfErjRKBuv5DCpPF9HrkbGCiUeGKX7m",
  "key37": "2GZ1AoWqJH8vzJ7H6MnPK1EuqcdKJ6V2TAAJVBrcoA7e26CBNq1DNAa1pzLbmtoFDxP1M4C3FZdjDTzRdgjmeiLd",
  "key38": "Yq4VMSwDGbGT1TFc6LrhAVHKtd3yehkvMKyF6goppbB8qzGykE2kYFJQdop6bsE5qHkjm6Fz3tWdFizQXdo1BDa",
  "key39": "8cbq3BrMrCaTdhoEdMjpVJLTZVA3PmUk3LTTWdKSeQX8sqiAdtmXSGTRgB2WshUunLKoX9Qgt23PZUunEoTRrHV",
  "key40": "21xU2GopVRsFYsCsYvPaqDbyjXbvXD2VVJfRXPyeLrK7DZ4QdqSvSiFbHLwaUGresdaLasZUdNk63xXbWbYi6Uhn",
  "key41": "2dyapDKt4HV7nnKTnNdG8iY72uiBsDTQctBwGUNv3XWG7T4VHErGUKwbYmTSfYi9RK3uwFZc4AAowrVMmuA6Bgvv",
  "key42": "5RdsSSZD6eeBvvw5dkHzfWFKoEi8fpGnYMCnm7sHpmu9xAfQtRZKo31xkXoHSfkWkLjDK8cbc3TjXqJZTGw2BDjY",
  "key43": "7K1Az2Ek3rKUCRtSGCaLjBXdVro9Hiuc8D673UAVEWWDURbTpS45HnP4BjkcVEYH1wgYfLZCSTKzS4vUzbZeKhg",
  "key44": "HyDo5xKqWFkj9azrbzGHX4Kw1jgMjVVuKqkb9D1F1mE3aRZ5gWtHEhQhcF2MdmoJkJLPStJwXiaBtTrhuCndQi2",
  "key45": "2YvU1CtSiuXHJL3CVGRFYhcbhkiT3cvKQyFGktKweS4assdNezdEqyNB2dbLxPe4cgWThaDjgFJFxsHYLtewfW66",
  "key46": "2odxHbVpjTBwiAKWHht9rHoQNk2GXEnRBtk894LFzQPKMcGnRhZbqaD9Rcdw35ULUbfNV2uC3uUSsM69Q2cSa5Kf",
  "key47": "N1FvBo7YW1bfWSy68nWTXemN4PTTcVNRCvDZZCnsjSChknegxY1f9KnKyNYM24iSxUjFkizoXpHwEwKf1ZRqEPA"
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
