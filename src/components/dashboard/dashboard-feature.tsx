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
    "4qjV63nSjPMsiev2B11JCeu3UhhgwerZavqJz7CVGnwrY57aFWNqhk7UFmBABb8UqLxkxHhfoiTbQ3QVHw8TDEWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SUZboMsy5wnmYgKxBCZLNZs4eASqGEicSh3ZnmaZJKbpyXro8X6mn3EqEbmmeMCv3YYULxLTZhe6zZ5xX5gjEwt",
  "key1": "38cZEixrkmgQ2heTYx9ts4fmTUGjyc8jSSx7fFZFaMcmpZo4S6ecbEcsw4JdGFChmTgSPrZ2sJzCJ6K4sPVcdzQR",
  "key2": "5ovi2G8tfp3dCtnAoDPyxazRtKJiKRfbYLt5UpEPDdP8tVU7u7bXo34Ft9pAA4XwZH7HNJoehQ6KntbDE2QuLRKk",
  "key3": "3xHif78xmGxcJgab4KukgTSAzmasZzecj74wbmQLefjey28NvBVuWHiVUFH34Snx2bXRkMGBUdPcYkvpexyUv6Gb",
  "key4": "jctodV9CukZceyM3EJaBkz6mod2NPCdGL7tcHW5T65v3SNGKmtjPn6WXCPcWXynnZJm5ph2TYXhz2RDhNPJ8XGY",
  "key5": "3mVRZNeRX8vo2KFf9pzWrnF9qBBzQBPJKySqWiX8LuxxFQ6N4ViS5UxLDBkQgLbhtAKhJznZB4edS3A25qANmjDv",
  "key6": "5Fxeujgch6JepWV6djqRZpsYkCmw2zzkE4La8LBHLMmJSB26rnmoDsoK8r5nUPSQvNYRgV7231btWsVwGThBXhjc",
  "key7": "4oAJ7mFTbkDG72AvaU9a7NjhsBpj1MU7Ea5WETSzAFwokC5gjiiy9TP3vL1mkjFAV4zoEzEccE39EDzqTpVN88pK",
  "key8": "3xYHVuFE6LJdAcWE3ajmbpJNv2M1r2y6yTHLe1N9GbLxUSzMEoBsrfcmt6hPeqFKRYNrYYHYwU8CQj2z3GYjE1mX",
  "key9": "2vBkuwZySnSGhkkbVhH9aNJ7s1ihBKL4kzDFXEB6fFFi2cJv2rM1XULGbuL4arCQeYnjhvQ4ZbEKUPaPj3d5q4ZB",
  "key10": "59P5zvDimK7nkAdvPXtGzPC5btLZexnrLsFPuyuAwVWK6ztJWmEZhTVBzSZsbjBK7d8VkzaoX1mDCo61SndAwDRa",
  "key11": "28DfzEPLrDSYTqL5nncQj6Mq6JSCYKR5jRZop9JGcLAbk4VeRN7BxNHpDVrGQy34GkFD87cNVCMCECL65TLkSSgw",
  "key12": "p74cXbA9bjKqvV5XtjVKKUw3NvpbDnWX1LfHQ5ZjxpLAQvs9jnASGnnURbXmC5dkPfWsaSpwDnUJdPDAgWKhuAP",
  "key13": "5aVJfVmfhD31G2eYa5JoWQqD5T6wfgYg8yMMiTKxReSocfnWEXoeCRLiDEcb6qw1NVUZDeDVrqFgkEhEigBiX9cJ",
  "key14": "32dJVTQL4hTdjWpWkZRhLdkkRJYjBm2rvimsCXe7asT5QA58YcBtd99LwSvhFKJ3EQDjvpxRRKTFk7rBEEVkpFkk",
  "key15": "5Hii8w16w6WrMpVSnP936RKRsCa83tbS1CALp6LGqFnkVujPzkoVHk9VGYNPWnxJyJCAip1NCwoaUBM4AEipH11Z",
  "key16": "5FRELhzMuH84q46UcSG8PPYymMoboPM8JqwMs3TnZtdEuxxm9myMRfsxT1xAgzeucrMqMRr3NQBybgmcktxnwDdz",
  "key17": "3eeCHGjQ8vwvgyng5cZTpLuKSmepNZszTtAZNAcdZwwXfPSTsevQKEWrUCF1NL6pGEEctX7voUyg4PYCGCTiTXY3",
  "key18": "3VSxL52kBF2snWCZL5gzfdifLWjFsA3suVyP2VZdwix4hXC4dmiUeifD2zdUe2ux4kmGdcXTv9k1AGDCjdireTtA",
  "key19": "53F13YQB5SCamnUSLcTqKTc5Du5ex9wNseM6B7wZCNBQTtmDrPsu53dCDqFfvuYAk3W6GaBLLTCEpgT2JyBiX8iu",
  "key20": "433Yo3iG79zdnp1o3wmMUiiqejhWUaHX9AXFgWp1dZiZpXLH1k7B7C2bwmDuFDSnLfbuGzC5WxAhA7aUJuPG8EmU",
  "key21": "5sppgPuu97v3KMrXgez5wsFQuEzPJk3N6rL3ouzjXc8FNxoEoYb5g75Kxt7CSPUVVZ217UmPEBDgqbP3hEMBwSW1",
  "key22": "3ZcYViwcg6z32QimYf12mnidYruR9A9MJ1gJkuz17G8JRbG25E3jA3kupXTvB7NPC7hBqmVDCveKVhUrxC76ZC7f",
  "key23": "3RhY2pHmskQUojnSsJsZcD1Nz2Cs9vFNUj84rHRxdvGUV2NMpFy7gmxALjcejD7mPpC4WAmfDHbnVgjhUMUhk9mP",
  "key24": "4Zzft98KPW5NoJE6bDHkyu3HMsAvGMSpy1FmZqQwkzkX6fxtBmSkEMMAefyQAjcFEGzqRkqpKaGXjjkV7pNo4cvc",
  "key25": "6wzL6aRMzRQP6XYqy7ruQc4Q3bsUS665LtSoWLEwGC7DwiGabNkWYEv6Uq8ejGXoichuyji8GVqVP3pFW69Shur",
  "key26": "2Evic7TKq72fVKDqfpzADm7L4j5Nq4xANZqs9RJwwxEUrq3HLbJUDJHATFohLVraBQ9b27SgG21k2JTYf121YEuS",
  "key27": "64g332zL4JyWNg3HKQayxn1xHPHeZWGeVuSfM6BMETSNeyAG3JRRTmrAQKL6zqPyhDtuXaC8vUBPVwQVPWPJeQrt",
  "key28": "3H5BYkERDYteyxrzUcHaxPFzZwFi6ZUtsTAnYd36tkNgpJnHMsE97vf5YPKHL3axQ9id1f82xkfVSty7J9RxNeZR",
  "key29": "3pp4JzbRf9MujFJVp79PUSrrLTsQZxq11tRvFwRqDeCiZG7F1xgyqtjGLa97wwsUTttZ7hs4joNpAWxTpuRcY8Av",
  "key30": "5G2yqFvR7Q4HHrMDXUU7afHYqRJTszBCeJc4h8zg4Kn22v9dNRWgs5kuz5JbSf2WbXq481J8R5YU2vZNoqoLXV9R",
  "key31": "4oYPRdmcuF4NK3Tj5pwFbZxSqWVoxhxJ5nXneUKwiavwDfSmob8Z1ZtKbERNqadS4vDZAhX13Bnt2n51zCxnoAm",
  "key32": "3e8gXKsLvgZtnZXnMqdLNBTfBKvDoLfYEXyaXDqaNaQrNyKCSPR8y63bi4u4AxmG3aktVg6JXtB3tdXwFa5f11jm",
  "key33": "2o2NHtzoJa8M54933juan3BZkzag9gzz5psen4tPTWPMrUgxmjGzTjp7Xx8HZzmjxayX13iPQr33Mzuo9g7Gfdds",
  "key34": "58RZwqfqmBViyFizEvWzX2tyvt5QSLFAuWsYXxCxEWKtc7rPTsjSRpJ8GispFAGaWR78cheiDhWK44gnRdyagmkN",
  "key35": "3DJy61Qqac4ZCXb4RFpX478CTNJXLjLRDy4WppD1CD9S9fcjyGbw8VFP48KopCnwhNHKukVNK62sfRtE5cKmsEwH",
  "key36": "54bXEc5N4iHQLB9gCUgrGKVTh3R1EgWtBkRAB1tXvPmAPjoUGuxiyD9iViMthyVFWxKRqoYpE6CnrPBDtXp4qC3M",
  "key37": "P2fz13ZnLdjSKZhfmQMtPVCpc83qhX7tUqGhikHE9E9sxsBsouGJXQzkp6SkBzvb9Hmfu8UhiFxbcrp7n3K5HMq",
  "key38": "3xw4mFb9JQWhZjPygKpgtefe5FXJevHrY5fKWsnvVVxtM5FgxJt2unKB61FtDPksavtvrjnyZFhDzHV2LsLR9eEq",
  "key39": "26UHXWMff4TKNGAtL3uBoPWk45aowTUdEeXTRSokWewaNahh4N9UWyh92XuqJpvHYsDtNTTo9of2RAusnu7mvBZ2",
  "key40": "5QAvVsBCbQxL5k269eHE4qMpLBerj9FLwMmTwwbBZyxrfa91d3Mf43ykDxawgXHUTvANcUCeoXo8594ARYrdj65f",
  "key41": "5a63KMu8h7J2aQRoDdHtvWqjGhBj9CJuSDqBpj5t3kWASKPn6peVn1kU8yXDGPB1ZSKnCe6KeqfxPp6bQpHQ1fL8",
  "key42": "3cJyY2kLut6V72ncAo8kaW1XNZ7aiCvQu5TzMwZ5iVTmHXyh8pw5FDu8z9mXvJTMJafNMbnw7LfYpY8tteq3Jghu",
  "key43": "22o46W69PWBn7ZvGa42VAR6za4HAdqosynBb6R5YS2wuFFUv4SLDGqzRu63D8uM6Gff1hHZkaTbgfGACM4xrPG25",
  "key44": "9E1CxXdvCc2Vime7bv88dNrx19oYTbQvyHarnEtm5PhrctJr7XuJSDDgnh4FAdS4UTDY25Te4StW5xfk25k2g2M",
  "key45": "3itpSnZFipLZjD1FMws6NPFZdEharzCDDg2Uh9dnjpzBd2kUrxbvLCfjnXXSku5d4WQJLt2oLdSxgqFJ2zzuYoyq"
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
