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
    "2WyWKrTWsu5qrS3vMFaQYbBGk6ZBfWFCVpBhZ45YbicPYvbEjFNRbVyWWCiTA43LaVSKb2V6ET439b8KMYH4NrSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247xH2x7YbM9Sx8KpuWZe6ySw47wAfNok7JUF5BaDUddkWMz7x1zGBWEYgGoEUgUWnMFnierXATkwG2VCGzySBRL",
  "key1": "22LpxnDaCxGKwUqz9j2K9uDvqEP5iJJo5TUVADFWFWd9B6HdXQB24YCgpNTLfZFZ8diQPrmjVL3KP6tgeZYwyc2i",
  "key2": "2P2Bxz6AdwWsZXfB7Qt2Q6zUDxriLQvfpDCznncoVZyr6VPojWaeSnMy9xiFfmVQuWA5QZHdsqHoTPYkdmoU8dtV",
  "key3": "tPd1q5gWHbqfPssczDhGybKi7nMLAawWNvmZ42YE9FTZfJUATeakAvLpQ1BoDuW6AwTQhMfHQhquBPjCtsu7qZG",
  "key4": "2KAg9FxhGzW6XdeJVHFf1z2dKdQSRdvxE2vGPMakAC8vD7izpjmKFZ3bjGv8bdXaFsss5ZKsG6X9NgCH53GbWbCk",
  "key5": "3bcdBMjeGQsjhTJSFYo34dkYUiEK2RJvRjKH5WYB7Nx5Xe2PqRdJRiwTiJrPdSUKthbRVWAwvzL4qq6uK4TFEWRb",
  "key6": "23TU7X5SHNp85RKTjzgZJjVvAE4LcQkaXny4JxA2BSaVeRpArRVs8konKkHFbhhLg2gwszG1tesCULN1R1P8Z3CZ",
  "key7": "h78fN6exDPtxoGX8joDdxvvD3ydDCUwcp7c9Dad19gRLCqT9rSnb7Nd8LX3VsyhzSym11EfBfnytJS7a7fTM7Dj",
  "key8": "3dKnhPZpPtdDFb9EZCsXCftf6FL24VFFyHJ5qAS92rcpJsPRjGrKAcnLknAkWfsEU7mnwpV9xYak63nmuywPGuGU",
  "key9": "AmoAaXf5Hs11g8gnrNFBwMeBTtrbbNCi7rAP38DHACqCesJebm1LhGfPaXHVtDyNGv7s9BsVn3EpFv9VZLRPtag",
  "key10": "gtRi7Z7M3GRwhLMBBmpE1FeYJvZz64SDEwgduWTfW3ZYJd11pzzBCrCzTETfWduVH4cjXGAY5H9jQRXjRQig867",
  "key11": "P7zuSQnBfTKDuRJgir4zfKhfNSUvjgSPeSpZ8jW4eZ5DLcVxTvGaq6Dm2DaEkp46sTz7y54bpnhBVQxLa6ErNbp",
  "key12": "3abZc1US4FG413hFU9XCQqcaoAbFT2pyLVUa3GXU3Vh6ahWZDqM3vMyrKjqkfn5WW2mB2dotNKVyYS6V6BSyhVr2",
  "key13": "zy64bKgmDWPaaGntNkMpzLfp4ng5HVQR7ey8D4NbuRPinW4yQCzjwhvYJdmPrc2hzyypgF43Hx4KaSXZwifxT5W",
  "key14": "5CfBFWAvoGAXyTRrxA1ArrZ3oCvrj99dVgCz2ffgfiB11Tm7pvAGBtiqYQ4LvMFUK9cm2vxeAkH8pi7F3EV9G3iR",
  "key15": "4JGksico2zR8hEbYVeb7cip7DWTX1Bm5XkmTt72ojfUhrNbyZjTVpHH7LetJqUzN8tBTA5xznwQgspjKEF8qMjpr",
  "key16": "3RsNrnskWg3WnuJAijkwWy2S1Y7xX67PvSDcCMuEz2K3wqvACWu2h99nA1DBgWUCLzQtwue143YSVVhS5Zb37tWu",
  "key17": "R5N5DcsRCE5k357EKQZtpHjt7hVWPNPXWH8faMuY5oTqFQRMv3k9b2abjLWXCMJYRN29SyE8u7MYuFZxU3fsEfQ",
  "key18": "5fGNCBVWngA6TGVNhWFhuVHhQrFLf9LczTPMCi33vm9KfNE5KD2FeqVbn2ECdUHi13hFqcREfggJs2yVVh4TMo18",
  "key19": "xfDNN3tTMZzyWwFq7pf5r4MvwrHgSeAYgXiYcup5PCPmJdLhcfqAW5w2PGdxRNGYvSgHJRXKQCy2eesDjut8MKf",
  "key20": "3aSLw38WDu13NtZ1V3apk1euBbrm19Eiu4rcszCMoS7aBPb9GEh3W3kUwAm1jkmatCGSwKictHAJTQJDBNQHoXV1",
  "key21": "246wZhV2xjmovb6kSkdnDXxabCGWwR2ULxv7NUL5FuGoVDnZh778D5hk5oK85UEBshp17BL2B9qGMpCwKDpKFvrY",
  "key22": "qk6abdxv1c1Qm9LuNLxB7bw28umwKzXFzcBuxjtEnnkUwskQKMqp67UwE1wejdP7vSYdTVumEuFTEbtT9LgN7nd",
  "key23": "29gUrFAf3h6fcCqJUaFF14YXMKUnxfTd6c3Y3gNWbYGfZsN8TBwQ8KLqcnES9vytVVFm3GVXWkNR8tsJUtphFMYt",
  "key24": "2ckDzaUmVTCrUdMPJxUGgLDSRNRqrmW8ojezWRztLgBg1RFoT3MNbepi1r2RzM3aYk3mcnTr4TSSxrvSQSQ3JDuK",
  "key25": "5ZV9qBY7cGVYb5T2WoWxpy7LaMcs4FLNyQhktqwS2HAbqWm9Zu2MV2hpnHKNaLKVC1hyrqzchTJE5vnhJUjNbxqA",
  "key26": "4ZufPVXnviGRTY2TLDKBMEbGdgmZY1LHpjoy4L8DA9ZibLoV1U8P1peDe9Tba9e1Bsr48NxdU9MCQ1KohKVKvPEe",
  "key27": "4SHTqc8urnkGYwN9RcGWmvVJAC46jn9JYbP7KrQ8Xh63oDrx1fKgW1sTBWcowWfZtRWS7ErAKMDqGyAfhR6j2eYk",
  "key28": "2S4ozfuT6tDr4W472EmUwk9ke3jSriYNDLT9LVGjENi2vmHsKdZrKCUFxRuot4i5PR7PT5AnCzjZXyJuNSiknqTR",
  "key29": "4hni7zjqQ5Bv2ahGmK3hoAbGeDyW6tvJnW7KCJTAZSZbDGDLynp1NqCFyfaWoWX2LwijiSEYQAHHrUTFAqZbovtA",
  "key30": "2dqamoN6NgqCoYvGnEyhGRciqUNy6adH5oMP4njiphqe8u5zPpc16nzWddQjQuNeUecH6zUwbnmrGVez6ysuo2y6",
  "key31": "4xu5dTewBwJ4T8vz99e49adxogsG8bKdJjAbHA585CWgUZf9i5ywbuHAxSkht1Fzhbnkv2qfRM1HUsyRmXnke4dz",
  "key32": "3rxwxEU5GRguasdUz1xehd9BxV9xV7EGP1aGAb63yXvDdR5D4EkAyT2qTJCs5hYuTTLrSfhyFy5yo8cmbwMsWrVi",
  "key33": "3Je7w9gnanpdhKKqLjiDv4xVp99PqScNefhUFcS6QPaYiX2pMmqoeTLkPDfWAQBR5f2z47S6FAK81W56EVrGUXQE",
  "key34": "hQz2P1AKoLd5Nv9hLhJf5X3i7TpPYNgYMGUHM38NmTvRJRaSK654g6Nj3BSySEF8UWcCAyzb7BmNsmjicd9aYjz",
  "key35": "3nQURfMY8feKdoqQ32yTDfa7sTC5qjPxL2uM7CgT5NJF2E98QHCat86Kbeqcf64m8XfQKkYDtPdKjL6Hk7NHNJKs",
  "key36": "5yYC5aRyqMzCw4aWKtYDducc8Lcz5Kk6X7jJYwFQGf84VcLyUt7AMT9gXNyZbzNWsHNZU4WE9m7V1yEJ1CE5PEZV"
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
