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
    "3KjFMFmwmp5C7xYP9ebosQNceuhNvgugtVc49hoq6DS5ANaAHY9ceLm7gYB9ahCDE4FR1wsobcXeSi9ExRWw5nJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gpuT8YjoBbwx7XkgankGYmAT2WWtJpgVDKiiJ2nbwzm2ysoVD547HJpecQdsy8EQKqAPhVyM8YGKbK9F16iKUPX",
  "key1": "3B8dpEuJzaUvuzzMCjJ5ebzFVVJ5vVJYMK1bT42WUuzvUaZyQqibjeijzYbK8ruPwxsMN4N79JexmPXKTgDwFw6P",
  "key2": "LeFkaW4s6VoyyGgLcGCKWTPDZv9AzBnuBuKKSiz7w8oXNUQMGpaGxDpeRG1ShLGisSAjuxRjbu1RBuTJwdYorMg",
  "key3": "62vHMuJ1YM8uoGMopMwY7Jnx35H3NBcex974usEaekJCZ2t83drUDrH4BJSGfZauNqjCiFKu4g2jJ6DM7t1q7upN",
  "key4": "T9HAbzq2Uab45G8jhtG12KgAqjr1XDfNUyLKQGYiUrtbwqvn27KQtfAUXHtGRPccKcXnpqnXEYfaRwkfTraJAVY",
  "key5": "45Tr2enKFmAECHhFz23p5RJoNEhtg5nDRMkTpVhbDiNSGNR6M66Nt6oJLPeYztggaYG8qbXhPRLWKzphjywDNTzu",
  "key6": "2KV6ZBS8w6xKwzC41m8wAGxDa8QfmRYzUhx85rg11Hc7BsybDivh8ohofFYtKvNBAMsiRnrwZzd4FZtvtLcYR4Qs",
  "key7": "4GMg5161UAK4MXt2PwWpwQPfjzYz294PzHaoGj4Cadh1BtK1GDVM6YQn5Wc6yydJE9zeag4NUYeiKZwYjVVMckbG",
  "key8": "3SmZtDuGrZFJVN1RKAzcYsQJwJSArBiMCGDfPujAb6J3sEQy2oRJASm4tddoqEANbVXJyXwFMjP5LnS2Kbu3hmUh",
  "key9": "3U3eDWhctQHxVWRnzqKuKrqQosPbMGzSpHZfgVb2ycpDJA8EMs7c61UNEF215J5XczaerSzxW8WKKFADCj7rudvy",
  "key10": "2sPoHs6uhBEX6rpqp9paYzp6JTvJUywTxvE5uVJnjePgYW9CETXZjmapqiehW4XeC5vMnAH2Xr88EEsm3qhN5sUo",
  "key11": "LSg4rP6vNzXKjcygPWS6rWEJboEW2yUEfnf4TrBap1aEDYXo93ATQAKQPaTsmK7jcr1ekAfucpLUP3f5kT4yApZ",
  "key12": "3p7jtrhD5yPJFNhnbJXGBBYrNyJCxVnwWvL2Y68MPguWiuaxkKdUJ87DRBP6tEPnchT6f2AD1kPdGuE8ocHYQ2iM",
  "key13": "8JXudDDEp6dcf8aMbjE5Zrh6uYvgvDei3DkY7n3YDweEXrZ5mbn5gXknrJeBYwbug1WfecSMdxi2RooLuchqLJw",
  "key14": "5RcDBZ4m1vQheE9EoRLBdYM4ZzQykWXNKzviyFjrRhb6W3QzMvWZDanNdekEqAaZQYFqtfvexRfq1MssmU1TkHpr",
  "key15": "5G1Qrz9tAvqgcwCjBLsKGBUjC8jHZWQ9uSAzQDFiG8mpjqsoFrf2j3wFyFKNAySP7smbfrkmZRErvoWPZpqwJCii",
  "key16": "Kw7Y5dYedC2VLFesWXqbSp77U5dyzbxDofu6Zn7bjrTofZLDYdSAmiMGSqFmsuTp9t5AoBtEXMsBcnNerikmP6w",
  "key17": "3mvEZQGYahgwWu3gbFCe75jWw4JAC1DYronBn6DqZjRSPZkUEKNr85dqwFAv5k1rJy2vXQRTgDfWZ7QJPCL37LEp",
  "key18": "q3oktBQc2ZQksXLThxT2pn4otzBmugPEnSv2HUnzyGtEULJ3VSxmtcxco1o6LUovZv4wgwL7pDE8AyKDuJ86Liy",
  "key19": "2wUwUMPHpdWQ46KastCCzsc5bpF8dTVhm9K6AAn2FXgKmStpUrdvVnsp6wWLiVezALRTRv4uLrLQyDkknamD54PF",
  "key20": "3YUN157uFZWLU3QfuiY5psz9SK4REvAGNEhJaoQ8V2siyYGs2iSpjmGGMpp8nNuG4NDzsNTqvFfrySG2sezaMARF",
  "key21": "4s5oteX7DoLH89qLtcxU4UnzfpoyW12jHbG19bMHx2LNRrkkGh9ymzq1dkFYYa9JskeEQWTScbPPNhEruEm6zdvW",
  "key22": "4CuA5S8eiff8rmDRo1HiNmvvYTKQQNAvXVtD9rhW46hcyft9xcQYWm6GCu2LETKnoUA4MZM4NMLuRqNLeKP9MNfi",
  "key23": "46ncPL3vRChP6tSnQ8HW5g92MzpNeg67Yfe7WHo337qaPMRVajN3PBw43dKNS7n5FVr7nfHfPvUEpc8UpLCPJzXF",
  "key24": "33HiR3bx2oFaYw2V3GuokYGWFkkNSx869wWhxfnMY39gMPLys9Citd8iwvoKbzrcgrxHVStUsYTuJTopQHyTmann",
  "key25": "5kycBSweUNwTJN3x4xMfQYbk69vHU8T7VKwxwsvzAPhrBko8wwbX1kQqzqM2SMrAib84hUvxdigJNxjikZJ1Rtee",
  "key26": "37Wr7dApra7vFmLHYE13FsQxy6goNPtBz8KmdGZyRHG23NAZ6KhsmuCfg93tRBTbR547bFw4R6LV1wwQfUKFg9Zg",
  "key27": "37eA4BWWz46ULXVCvisnDXHqMTZXcEUbGG5h5pRNxGnVcEPzbz7qYGUf4ZA2eHKZW5tEMpSHUmE8LvBqXpxe9ZTz",
  "key28": "4KzTJw51EwRXE3oK6ykXUdqjVVdnAUtRVmkDxB59us7vsqDphm2tDDuZViWcU4iRv7e2aPataayzcj7B1FoiomMt",
  "key29": "tkAQS1iVGQ3fHEap9iGr5qvugCaqKZJX2y62cjBY15K7utAGVekEVp9zTLhRZUTQ7RZcxjKfH3pBWEgc47Q73ju",
  "key30": "2yXEJyFCTgmzYNA7QScFtwZeHms2MesBKqRXzYHJsXmS8PeEhobmWasQoLy5T7zv9SgtGsZyXT9Lwgy226tj1Qbt",
  "key31": "5zrPnfkPWWKSzMwRGP9XSx7KxyDKgBbVZdRSHgafRzbsrpyXe1L18S1gzB8Dxm2zTZdwUtiCAs5tQrhb3Y24ECcx",
  "key32": "4ZVJ4GdexX15RC1QEiVJrxo8LcewHhiacdCZ9vHdWTFaXvFhr8CvQAijh2ZzSQLPXTrAcsMPDV9xGha4Na6mPjAD",
  "key33": "4Y4c5F8puEcVYs1KnUCr8drb7XDpCKoX4dSf2SGVfXTvNrLTbnc8EG7bmUy2LVLmsoTjnyhcwpH9wYvosurDveVy",
  "key34": "5bve6ZKcx2hLbgkYe3hLvVN32d9TpV4NNGzxwnab1KviDwWMCibU5YkcvuYxkHeWVspfHjjvNwJtzhiCpeoMVzjm",
  "key35": "3N3QebS7j8kUJApKnZiUzWpNoG4a3PkU4YY9FEcdEsBW4tv9TKCNGT2HPpP9ip49JjQ4BtRYwVGDGvxyXKJaWZgA",
  "key36": "4NyWYFeULgfuj4ens9NvswuBtY6Qj7vZEc3XUu1d1C4tKfAVmEDJPUxxVo2H3CUuGswR7dP6AhVFSKJ3nGVDYYD3",
  "key37": "2vmyJfCaXVAGKF5shso9gPdsst78MXqM3gndvbLQkLQBtzG9DAKSDinwYqeE5qvzHjcx4GomDJKj3nrNpPAaFXXh",
  "key38": "3zf12x1vtLGxhcBH95WjS8aSQxnJFeGSWkKvAebCJT7n4kKFEBmy87nLGZAMTG92cABy7ArE9Pm6RXoBmpHFUp1i",
  "key39": "4LpL6uyy1F8bceFgEoiyGe96sp7zhMoHKZiuLbNPTYeCNNLePhfSmu5hafDuDWB5euUPKxAQVjuk1YiMfqM6P6mQ",
  "key40": "47rGMdqAoGvnX9vp9hyWqUpLRDABrBTefkYa31iM6p9BjEN7N4YNqTYwdQzkjp6JrD7aLvTistJGNKc42n5SJ14V",
  "key41": "2YGKnN746zvrZzPbG72a3Q9nRBFoeHn7TTVVaboMP2JfoC8CDQXgGdeezA3bm44HZcDDEHaTZfXLPSqEXxUPVgUc",
  "key42": "5KDKkF66xhTtBAsLenAYDLoZ3tz7yU5mN43tGeLcMRPq76gkKge3Ldr2ZMqvC5rpEqRkvAb2WwnqcKd5G9xyz7Ak",
  "key43": "3njj7ByFykWMEGCbYec2AFHDHQBZ8tbuFGY1tF3ajAwiPpvLJ9W4e2HMcfPopBM8nipamqJ6FRzY3SU1UfYUhdNq",
  "key44": "5HgfSjG6J4ALTZJ9S5Fc8AvwP819SE1VpRcXremMHuEhZknwCRfvAJFJB3Q3x2QRx8LCGRL5jmbHMxLk51hzBBHb",
  "key45": "52wZcSHW1SMwBFEUSWUCeq9BKPbYtkn28TnBJW6Qfwug9zuUdRYR9rWR5oUeFcYAvz6j1N3UTfJkcvGUttcCHEF7"
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
