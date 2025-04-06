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
    "4RpXdPjceGSd3vCeyVVUCaPENXEWkdMfWT2Rz7ywSKmDKY2yrUqsvho4FNwPBMxGmKFx9rdg96ErUNrzcjt5UXdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxXWne3s96ii1MYZSRparCaqHdwJnJHDxeN69u7wcim1tAYZ5k2zzEwsw8HP3UD2sXDUccTDtTTz294twJvnqhg",
  "key1": "3TZdhBjUprd1WMiczhEX2QrWPo8Sm49PLdu5QzdYMcYJwfrKP57xQ7cnkKZUdTLXJuvRK8sp3Ft8jaNbdypVADEc",
  "key2": "3wbkDPfy7JFJhTCbe8QxyZCJdgNY2F5ChAm9P6HhULwzzDN9aiGwDKb5smB27nnjfbuguA6UTLZrh5mJjHB4hgU",
  "key3": "73p6EAb8thEma5vmUn6bVDYL6weySsx8zKHcbCBJodBno7e3mGNnZTdBnQt7Ac954jkFtHPkE7HpaVztLP3NHWv",
  "key4": "44pSBSFL2cqYGxGbDxywB1V4U83Wg7hChEKr39RRHQAxgvFRJUHQNCPKDat9e5mq8fbKnp89SoybmWxG4wnJCcdk",
  "key5": "8HCaYzEctikmn6Q91kw9j1oo4GWZfRYfUigvAH3kzPWZHujc9dZSUtjt2B7xAXTcruQWY5FkkHCSdcscYRRrZjw",
  "key6": "2C4amcxagfuXqo1Lxwrmovo3SSwUALa2bKPpdxqpeaXcomVYdvGwH7WLe3K2kqSH3QQRsNSxYRtZuDS3qxDuKAMw",
  "key7": "RRWruTQGy8X9JnQXTbGChiLNgEYUNqoWPXXrKUVGoTwy7xjpvFVHoqmAfJJ2kq7jWckeXTcvksgjyTn7v71xyZt",
  "key8": "3MVQb5tknJPjDSnfbGwvBneCDVVbPiLVsujZttuek8cvvFBU44tAEd4GuwdHXkRPLiPb1n7dhwRBPjrwhb9tZi5B",
  "key9": "27Qne2azkj1C9vivqXmqrQuufH3gTFaKrt8Ht1GJWf2F7QMuFwrDiq8hvVGsxuTVfZA9EKpa83ezeuVxSWe1VCHD",
  "key10": "3ggA4VF9heJmkQJczgTYXE21YqoerXo562Epvdz6RNS2ycnihFhdz2SYcdPw9tztRy63atbxN9BuVVF7goZfxHwS",
  "key11": "5DJ6ntT9TbCRZQM8dkj9NYt2bnPEoNWNTX3GKRjCyFb8GdAX7uRRWJqqiE8K3wWAxKUnyo6zSPaVYLfrNQ1fXRqZ",
  "key12": "5UoECuZAcuQPsRGApU6PgEV8HpwgirHaX2ucYnCK9fLZmtWTZ5WKMyEZg53Uc8f7Aa9gdXLmRAeYj3AAdQi4PqN8",
  "key13": "PXmnhgwQBqNRBBSYuGRyZdWnjj3PCoRhUuvPQqEhB5K8ZyEyUZhWpCQDZn4cGM77KkonZxPHyGMEK9fMf4b1Lmz",
  "key14": "5k4UbNfTD6HxfhuJHePD99rqEigoNPUjfv4D1nFduu8cHTWpjpip2FTbYAiBGKKRzb1H3PiGQnht4aR5SsuPEyRX",
  "key15": "1cQPKqUFKLXxn449tfgrJe4tbXunkJqvvSqVcZPYEuDqd65NTTmfzrcSzmvNVhhfLeU3CnetXFNfgf9suHn4XTn",
  "key16": "Pq5hV9W93rd3muwiZYoti5Ms8gjLYxVnoAkMacHin6JiWWCb2JJpMtGn68uhfyx7rqjBS8aTH8ovkh8VBpun9WJ",
  "key17": "5hBdXLauFk4b1w2aJJgieFcYB28ytuGu1JK8eLh4H2PLafaXAUASgkLZBEQyrBKpmprsaoGDmReKbutoKTFZQhn4",
  "key18": "RY7BaRGYztGGfphWXDAyRonk7aR1iraTQ1BQYq7Y2xo3kNNDqWFHfsJYXvZdsSNAXktsjMtrjxHFBud7hjwA9gM",
  "key19": "4Z8XBQQTY97AY2hP59JkgE1oTeqqxTBJLZkLwMidcfyBMRvgZoibog2hf5zKTiE2Ps2dmUD7MqofbaEBYPZWZPu3",
  "key20": "4xD5oscS2rmXPG8b5J2gHyBfD4baS6KhiNNEqi5Zvgf2VV6fhh3ECp7gtioRegzUwqVeS3tFodD2UjevCtxZW4Yt",
  "key21": "46VZ6tJ7ucZiwonCHLpvNqHDcCx8hodCvFXYbgSjjnc2ocCypv3NVPzydUtPp5GdoyrkPQYSE6JWEUh9cGrZTZyU",
  "key22": "2oiocUdgtbp6Nu3B56xBELrw79mkVBZY8veJ7UJLQL3cH9Q4FpoSNRvdgiYU6TyYPWsMmKgRd59jKUYoko4B7ixG",
  "key23": "4bFS4GZWHECNhNHXWH1DRMeP6mCJ71x5FeCGHQ76ETAm5rFpfKx4r1isKHbWXdcZAhpWmAFLk7KMEBfdPnqiU7fC",
  "key24": "2AUpskabf84SECf79AudowzJXugqsTJsGW2GK64YT2wgiXt8sJxAdHkXfiYErXhNYwXCu5fd9btBTYEpT7KdSH6E",
  "key25": "2QBafxDEpikx9VqbGa8DdHikXmRmfnogwpNBN4QJWjztQGEPxPgvyo1mMnkTUQZcvJQAMHUu2fFDYmRNqe8L4a9R",
  "key26": "4WBm5SpdqTFzS8PR9fVWVo6222j7xM2wHwR2ZKwLZRoiHojoJMdnWJU77XggTYVYzG61WcJKSFXogJSQCFqoDpzn",
  "key27": "3kXRr9KVWzXgGLSknRH3A5NCbkLaxqhWzbFhcpz4fbBUm79aVBvcNJiyooHGAw35VkfPStvwmBgjH1qY7GH94CFy",
  "key28": "zRiewEmcrj7fVUuLPKJvURotCr82v3g31Mg2x9cPz7nFxkWpvFn75D7vqNTvPc59CmJjiwqauWocYaAAHUaVsf6",
  "key29": "46fRMA16bKFLfe7QN6MmhDDtBzutKUvXS5G7azYmJDjhkJC5xSmq9F5GNqosb8pFw14YNA66vCvpbpB1Xkh5RDLd",
  "key30": "HU6Riom1QuGYcmsAM8Uj5KGNGvmTeQquHscgNfpSQZB2cHKyqqgyD3e489RaQ5dvW4PTnBiYFPp4AGSLisv8tRk",
  "key31": "3QtktjvE4LimBjMTw2whP1rpwSN5tXnwKnYsUmhGJbZNetkNf48ocsBXFWGGK52r9XLz6gbAkMDk6oqPki2ikBTX",
  "key32": "5QPw37Sy4q51iX4VNFwgWZhYNEUiQB5pAnL8HWF58eQvsJiWb44xQskW6xqJPemvpzyW3XheLPiXciZUJoC1FZ92",
  "key33": "4ibo5kdT9hHRmAbFocUonhsYJe9HL6tEu4E1Ho69r5qdDWmStEYYWRGsR4s9av3Jd6wLaucfuWwCxkZXVGBjYrZG",
  "key34": "2YtoH5WZCLHAt1fRF9iMZdrBDMB7DPCSTYWgvB2iw8LWa8NNsQEHNBfmubosAAJg6mGdZLXn1p7jPmXxogkf8b4F",
  "key35": "hEoJXdEton8yiz4j6SWPL8gRCNMWVAXy4DUsb8UWNXU6QKU7jU3DCaFhG7pyajyTgCNWfkmMAL8nfR7zGmL7gPi",
  "key36": "3xnXvLmtBBt1pJiuwDqq8CQAqcdj4DuspCLmHM15N9t7PPQJpJrtok5nw1PiSdfrgsGbNz4wFyASo8nf8duXp2C7",
  "key37": "ntTCqHKG9SkaMrYa5DR83kECN3qUwxG9ivtzKYXKjCDhWUbzd8yuKDzensKvhU2VZV7oX97MRhv9BzLBEiCCWdo",
  "key38": "4yMr3D3xLQYTLbMEvTotinjZx839FkBg7uhz48TACvmDNBhEPnz7R6GEixcZ4aZucWiD73Vxb56HxkaK7ra9gPj4",
  "key39": "mDsZPzMwf9Jhgm7t1XAxD4oYXYagaZ9KYpkG4x2j5HGduwkf98djLM8HFDbSsRzLDrsgq24UxLLgRUrjxU5EnAg",
  "key40": "648CEv8mGi2DEkrNejpedp2CsDPi32tHJHc6xH4GdSULoTDbwPGeFVw4WkJNF7sgVpCxQJHjHa8BLi24iJu3t8x3",
  "key41": "2YvGyPHk9Qme7xniwsRHFU5um6RbA6SjWKN3BssXH4AShN3qjbJVrYvC9zK9dubdtR2dP2LPRWHVucRNjdW5k55L",
  "key42": "4G3R9o5ZSis7nxJrXZdVBZBc67mgYqbpUbTLCNpQJv4tuHYdTWJKRCRP4PkD5Eb596qw9da3M2WT6d9Cc8ARNBDJ",
  "key43": "4eacpKXL5zSTrhTDDFGmYpCgRdnqXgJD5GyzT9xqUob2uaFmbyrgvkdfs8H8yLsY2SDvoMUKCjZfaPUeCndvQvSU",
  "key44": "24fSY3AWAXfYzM5cTvk8d2cpQfDf1MrRWx6LAPtQkA7aE6MABZeoiWgAk9BWdeRc7Uqxgq8CcKiNNr5Cw4XcNHPq",
  "key45": "3qrXSXbY5giB5YkFn14ZApDu4Pe98UD8Msig39r8trbhhxA8e7oedS6C1wMgci2D48FfD4jX6yUcqCkmLTU5scgV",
  "key46": "5jACWcnSgY5AYXCp3s8SQEM86a1ktJje9vWrEwKdwJnVc1iQBDgjNohTZXx88kvbLRzeVHN1T1sWnZnDhVmraZGh",
  "key47": "4rxzcHmyyxL432efpiQskK5RpPS5zbmg3XA7Z4YJwbmSUEunGbYHDBRKzu4yLLtrSxKpyf7SmyLNKrdrHe56TY1V"
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
