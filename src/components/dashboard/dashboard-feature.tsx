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
    "42B4rCwLpmqQcD1AE5NnwmjE4rgVsLwAdLHVyG86vVZixfM41RY3d1tmvbV4ucK4TD2vD38JhWW4HCaGH6c9VUTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pxL4kwyJyKy4ugEPgYA8kenyBJRv4CXWU3y844rPrHCMwMmG2dtJd5vVeud8MVMzS4V869mCZceTXf7ysgZNcgr",
  "key1": "3a52dMtrGJKXP6R2YjQve4pcBLfvUkpxTo81QFsZV34yDdR5rUduEZFs1orSzixYyC5udZjMrWPxgbFqfbjryqig",
  "key2": "3rU89DR1DMosq4UWtQs7i1iSi7M2Bt2iiqzjcbqRDtsU6zvBPQf9Zb2TgAXw4gMFeBNe5NKkQWHiFaxBd1syNSwf",
  "key3": "3uCnGED8ttn8MoMRAgbMXi785532g4THYZfGKZ1gJn1jYWYwKZ2u9xw9a13Uo2BGf98P4DURFaHGCjRBhf6yQsPR",
  "key4": "RdtCNfgVtKhfz33MRXgoyPqjXapWkRNRbXthwjwrefFpmmsq7o3VXKf24FvAZxvWMU7yfjM3WDKqYoS1xh4tHQg",
  "key5": "eqpqeyN3BYuavcDBpvtKPiR1xjPy78wrLhVntAqctXnGCst576DcnXHRn69LCAgfRmV4cTss8VGdShmecToeDWD",
  "key6": "4edfJPzgn4KLQS73zrfxL6sXQGsUVS6VtVzduF1S5bUmwqDQVWmEGjuW6i3BAQcxqiLm4Ugwpe7DUKmwc8kHPFrm",
  "key7": "41CjA1dUjbiMFLp6Q5FbDh1Qs7uDv9ZqA295KtSXmzLB48sne8Ffnr2HB498jRLC2GWdQRFJ4WJFMxsXSYbsmiTH",
  "key8": "2NDRNMsfhUbxWD4xUE46n3KK6PoPybywccGx2KUjNzQVgjA1GaKBrBvtExmHpVtW3xccTRaAaVKxPjMGX7WPgK31",
  "key9": "pDBqqf7yXqL4gh1UsHkVQHNo7SCT8JCpBnkBEPMivJLcY4iZEuxbspV78LkJRPytME4v4rZsxhuREC4Kh3or3NK",
  "key10": "3t3PgMPfJ7dYm77vmk1NQy3VqSBzL6RA69o7d9JfLdsHN7QQERLwNbVBHtjUnDoast1SVJFHdps7XRaUG4PQ57XS",
  "key11": "54UqrWkhdMeAinosk6jCCUuqfWKg2RCz95sgizyUtkyTzJ5mLTFn1xUhs8NvwGECBs3SJzXUnk1AMgff55njd7QE",
  "key12": "25dTeQMBD1fzz5yH6s4MgtPkG4TfRdrGGcPiiaftqU2LQF8dZqoskWsbJb1KVzyUoFAUXyQqmkdEAXYxK77bwsfd",
  "key13": "nr8A6xTctdQz5Dup3Wkigu3shDdb4umhkY9KUKN52cwUi1eDeBhs7UG2B8Rk6aJxLemdspf68PiDWaqfS9MtWCP",
  "key14": "nUtJH253JQRMiHkHK65YQYukZyvRJB1ZibAfgMX13mbA1MeNFYYZUw7rpmE9xyeXWMESjgmFzvQbMLogwZbZs1s",
  "key15": "4cevPTkzwypwKvotXxu8MTPYvHEQntX9EwnL2wmndtqANSsY5nEpphf93352HLZPUUyNyx3AB7FYrjePr8NdxT5P",
  "key16": "5pQPx69uz7oRYyEZR1bXfTsvqRrGSNZ1BXb5ZwwYbUG5wkVga9UZ4Xv1waUvDUKJG4py2B8kpMyEqibYEytztYt5",
  "key17": "4ZfNcZBzQkGTAkDr2t43Ero3FgATN7x64NvAJCvsTJGiZRMVeJfwEAduLw5tuViorKZVA1s79FnnSSC7UPbCBmA4",
  "key18": "2oLgnqTnA7qvxvyNXHQFPKvN9Y8Wz4MBXLVRUHETDM4VDH9cZF1TRPQtSXYT68SUZrHhR9FeENsFot4vrYrQq2A2",
  "key19": "59jDgKUTLoEBUn4dPdb6u6DCK6XLUr4gfsK5xtD1fsmnBBQhxnggvhoQHGWZ56BgqjSqRKigvLN5Dw8SRXXWzCLx",
  "key20": "5rnPRDyfvbSVZy2GUMrP4znPhNgPCAu1JGKruH3nLnK1xSu3PqFpxwvm3WRmrKwSLR6vMF7F1LNhdaoLHeVrbpzN",
  "key21": "38m4gpPfeZtsNkjDrieGoZXTKe8NrDXhnkevakSzHxNhBVyGw3e7g9gAQ3HJfaYkHzrS9TSU7maVLLyvbeS4jJXV",
  "key22": "w1cH5WVAYiAFRWJ5DEeMr8CtS3AYTVTYh4Er3jhxQe3PRCF7J9quX9DiGG3GVj2s7LuXwxR4qkQyUVYgtoqA1UL",
  "key23": "3pB5AD8ev2wtTzQgBoviuSvw9MzycHdBU8jQWgf4pXD7fjUcSQtSBXVBYigDeyeDNSgLNgNavDVeVZYEdBkAeLa6",
  "key24": "gBA5kZrZWWwEuUTRdVV3MYuEsPV3zUaQD5ZTavrsgCabbsfFnWv8DBnzrNvQM2FePRxY6wsnvc7jNmCFADR1iYb",
  "key25": "2HhDNG5NhzgfqaYr7jWse4cVibJ4DrPESd1364MWCuQrUEV96GQ51FzgcmaoXtbGwxYsujajFfj2dQCdDrZk1UBN",
  "key26": "5iSPwNpr8kcBJcSQ1n48vJ7yjRzweEarpYxCFWpa2ykaiBAy3DefYCkmA92TzJzXHh7s9zLNsSZhNpD3uc9AdP4M",
  "key27": "3inT9A272srCh4asE1uG4vXu3sPCr38hHcm4HG8vGaqkCUsn4HyXxhp1bwjNpkVGV97FjsqiaqhyR9VD57Rep9B4",
  "key28": "62PEJ8KQVNCWLfZdemjnU4xGUjWftxG9G3DsYjJQrLBPGVEVSf8QeNdBLEUYV7JpCZyQobj5nUm9yVzK3SM9bbcP",
  "key29": "4jdQqVLLNhVX8pjPSS6LvaQNwN67uAfmHmsgpWGSc9Qj7RP8DNc7x6d9GdzzLj9F3GmnRdqj9Z1pxLjgaj1Cu8jD",
  "key30": "3S2K5yors2Nptycoa4oYSNtKtoH4YguVKhqe6JWNTPiq9EGr4xqikWQhaCpYniWAPMtNgBQnnmxEdKQv8UXB9oB",
  "key31": "3HUEqcos1FykESbUp1sEEbHcEx5qVdtoBJVf3Xf8enSukUA4ecC6nLCgoCrt36pe9vdG1QMuzHSSyNBaiFJMUG1J",
  "key32": "2FvWp8U63zyRqD8mVBTAqPMsG1gtkrrpBtYmUCYqLZRiRC2QAgVpZWkaZVWu3DHXsmaLFPvfrz7WGKbdXmFzjU5r",
  "key33": "2o3xEELZjtsDp7Vi5A2n53sExzVgHLXvKpeQdJUT8yTkHg7f7GANJ1cJKKXSAT5Bo23iKrKxM4CQSkQX9yZjPeNA",
  "key34": "h7xhtNZ8hFt8t3W3skKy1a23TLNyFkphpnkdhPK1Aw5dzfMGwQNfLTXqbtwM1Z9oEjoj5J62ZysnMsMm85aTnaU",
  "key35": "5gD8hPEtYxvjP1AwuqxcTh8zxj1FPcwKfJaoCcXW7iU6RWJkmx5b7waAkadJ6c94Ak3R76sGf6xAEqB3zGeneLP",
  "key36": "Jnk27Zk1BWAUy2KLfW1nUiVs4ggskPurASkBALcfgWqmLBQCg7pyDja263FZjgLknQ5ibWcU2UD6Kov3nm9Fbfx",
  "key37": "4Fmrixj2r8G51Sus6PyHLuRXk1VHnrwN5X8DKk1BHzYrt5m1GXPUXsUsSsN9JkyzpSx1BgdeBtbCgc3oEurNFfwU",
  "key38": "32KuuMvkuxxGmNtLfb3FfUMhby9Pp9VgEeLWwzKC6RFrrtQV9rjzzrLxviDYiERBk7TZPwpTPhDpYJsUBHNyK4dS",
  "key39": "kbopA9K1hWpF9FCFERdsqhxYjMXZ7hQQFA3cdmdwZetVeKu3AiPMXwUkCQKCJ6a4A4C65rnbPh9GVZmskDJcqH2",
  "key40": "iv6Nms6SUmsGDuFWsR1891BXQ6hMPtk8GEqnT1oFZrKMoPSFzrebQKQaGkiE6UMX1UE7gh8wWiFU9XC3Rw4cPLS",
  "key41": "31jvpp4TCu7d2LhcZytHXmCB6zXyVDb3TUD5wmFqFKnb7P7ptj14ByNo82nPGRUCAcCFdBKqWFF7AwuzHDw1P51N",
  "key42": "5N4KBPS4PoUmBrp7zFXu6NS6J4BvESMYanyg6v2ht5WmnJHEfST7HnRLJiyu3t4xT2TbBwYLLMYSeV2xmfRSR8wg",
  "key43": "4k9rtKy6y7sTmh8Q9M2gEcEBhVuAoYHqHzbrwpcpKzpUechKot1LGZpsrFMVpLMDQf1xPYaDwqyQkg4obaXyd4De",
  "key44": "yvGT1jHVfW28tKMJ5LMzD2TzyQnccVvWDXsVPLUuP7qxCVd7wRG2vha8vr5Xe9uwR6AWYNkKRMK9r8eaYctvXXF",
  "key45": "2uGX5SgW4p671QMn8vSuoqXFVZyZmbbgHZrLyjyCQPrLC6ZgQGvDVoVG5HcU5joy3YEqjWEFrfbLUr7K6Gwcvb2H"
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
