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
    "HcLJ7antxz7EudzuhxaLFDDGBGP5b75ZKnYscdhrep2He5dtUP34g9hxxzsnpiVRfZhhq76XnJzQ9S2xLDARfga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DA5Fs9XJj2jQKzbCFXEkrLPgohmzPMExkudibZE19atT6GFZKzuCu6XmGm6EVo3vuV9y5NxBv6FQiozgTHfGcZd",
  "key1": "4Dz7GJRbKnbsCZEp4L1YduLKNq2wqVXk6Jan6rPVjnJQrh9aYDuEN7gPpe39nDtafbZo9CWEKmP7BP33jpFsGsE3",
  "key2": "4GMa2B4tryPe8Ekr3ed6UAEG5qXn2U6TnQYACYJ6SvPW2X45GdFYvESJrf1LRBM9ta6vssS78NGdbxaP4AFTxMPD",
  "key3": "3CQMfafQ6wyhUDw5f6eWSfgmUguSv9MzfnnPmYbA4xrprAMiJG8EzUxFZasMuqaZbb5M48yCmuMVGSDR3RttCVgk",
  "key4": "39K3ovrRfD2pAkB3k7KJqW6shG6R6fef9DjtQ2nDWGM9veQbJ7DUEvf1vS2QYfR1AF1garcK6JupEP7cXKPZjv5h",
  "key5": "4pzNBTWUfPTqH6G7WMLMYVpsqFRLYihMV72XP1fm7yLmH59B81aiCFiFbuFJoQDyRPcr8cwXmj9fJmjoWeNubpej",
  "key6": "2erFpG3GW4oy53YU9G5mufQHDeksVMWEA4sYEuQzyG7hACGnwc8cPZBAzSqUgQWLdEaUVyH634MZp1vBMnWeyAp5",
  "key7": "4VL5yD2HGLGPmKhsLuNvEkXhE2Dh15sWgWsH9eoAgqRM9y9zA25rhKiSHZNLn2GXPLkZ1PzhZ86FA5VBaNJgorQY",
  "key8": "2dnfbdoJhZ8tTHM9ncwRzMGnokQMpkVk96Y7iNwyvCy8jAfQoifnaV8ms2ZJt19Kzk6afAgZqsb5v9bGLXELXg9r",
  "key9": "5Va8VRpcm57MVWHfRnFhdcUb5WCZaZ4cDYQJuvLWQqFqqesZazFdueAb9ZfdDRpD275d4SS8BtFVnTPW7bH6Aj4M",
  "key10": "4UyYzCfFiNPGBWe8XqoYcUCsjVoaJgRxANDg797sfPzhi6pqFk6rvUWEzDJdaAegMBE9VdTozRV6rdXjS3PWevFt",
  "key11": "5ZVhvycV3JcJUqafKyxuV5gXASMM8j8LkunyiAGVUQ89iuuKPHt716x7RBYLb33RngADNxAskvRGpAKv2oJV55RD",
  "key12": "33Xjsa1eZiAPj5WWu3GmHTxD7TN9BaoGArrQsU1MdVb6K6JmFcBvggaE2uxsAjarjqQxR6kYoHwF742S9LTKcSWQ",
  "key13": "3cD12brQSdQb72CkdDcDgsgguW2NKYn1c6nzdwQtgJ1r6PQ3SenVwis1gHTZmUzPoNJ6J5EfZ4RbU1v4fJKsx6jb",
  "key14": "5mCDDkpFY4KBdB39HZq3AjgEErYUHVin4ksJfD1Eq12otRi78dpm5gzUVvVM9NuyMR9N4sxitZbQrofkCkQGPtKo",
  "key15": "3gxz3AchEyDnAaRpmAHNz7boNjt2fmw5ediZXN4sXoFajCxFwgRo3XV4ozug6LNSbtDtaPnSkGLMeLdyMjp1u8LJ",
  "key16": "48uAMg2NRDJ2rps6Cj17gYtFVhvGSSKkbCsFKJ9puTwJDA3JzfoKtuDgxMje9aCZV7wP3Zgegw71mmyVftZMSLPK",
  "key17": "2zd4fEJKhYRQo2Gd62FqfxS7bz5pjYqK1b2PY3yco64DeQCpAH15FTiYKtiYrXhQn1xckXLfa9THqHdUX6iNjzvD",
  "key18": "33xQoE1t94qeZzhY5kkATA6niCRqmDHeWCdxB4rMugpRupjsbj6HgDYV923w9Pr15ttYM3rE3JKPYqEZJTtia6qm",
  "key19": "2BADbPXT3QbfXtn21WUAmrocJBYAvKYRGsmBhAXjj3NVnMKAcj95VncjbyUp9AEWXWhLb56AoLkMQ2GFhpA75owe",
  "key20": "3h2ikLJAcC3A1ziKiuXurwU52WcUdyeXq9GgaFia1BPv2HFmuNTptUr5QbFRqdxyytwbdUu5LCBM2jC4BJZ8frzQ",
  "key21": "AyNY5UtLd1xryPungaKtqwFtq4RkD67H1weasySMBqoQesNJUascxHmMzHbzzq5jzrzE9ezDocBMczFvV6T4Ts5",
  "key22": "228PKDirJPEhGTkeBtmQiQRDHVYxHdhhRSsQPrRLf3EuRBJ14nV1Up1jzxHz37fnAMhXqGjjGaukz6kHh8kfgvsq",
  "key23": "3huuojQJLQsuh2m4bsRv1BRwbFsCtiPfeXATqq9aVibR48T8dEcFir5WrmRyFCwf9tAVfvMoxHbuDptKV7MS65v3",
  "key24": "5BehUw9sfBbXsXyAaR17XdYBUxPw9Tj78YSNWub3r8JKdmiBr7SN8ueMBW4wJknjK2dAztm95eF491MNa6KMiL4A",
  "key25": "5AsTbhjoYTHQNxTR3UZCAHeQd1cbSoECkj7mKQJvfJTkiUXmuAig6LuwcfHU7zQzBod8DuUqbAkSzm6tqS7vWTps",
  "key26": "okrJFLTNdfEFg3g4DWgWAiSwJYjo7kb7hxhq6F1AZ2DtmQrJxhd47pbY8PexDiaCiDVYkb3TSkT7TFFMibuX435",
  "key27": "25T7V7zRHF6p5BX7VtkaSfjP5c9awPkm5joJK1uKMyKcPiKNpLisZAbSmHMaUAq7JspdqxYw3HUe9zuf8n5UHhRq",
  "key28": "57Vp4ovCrg8ww2gqa9yxWTphEokQnV3CCrURnzhDEwcmMUyE7a4z8vhVh1jgx4R96FbnVzca4XQXamCYm393r67D",
  "key29": "52h6V2wKV91g9sjvnNYGeHuHE3mnBYfpiscDvyDPMpEoZfj9FJXqisDVS2kt8U97sB4nKMEaV7mthUe6Qi4wLcLi",
  "key30": "4wHym9vaPegbfA9ZshY3vZMTuQyWwmkgVzpSURciHcZYsCKjXCz4HGXP873CY883x8w7PT8Engd2kHhWp7eMQF48",
  "key31": "2PioD7i5aA4Bz2eUfr9VwrW9oxkiZhoFte9kXELeW8KbrC3Rt1z5Vn58oE43mo1C4vCAtkubqtns77AFhPZqqcQo",
  "key32": "3cvMXdxzVZN5Da6MK6db8QpiWHU2yWkfjZDPg8KHNFW7WDZxkFhVRbUN93nwPvY7fAKP9ySnotocdoqY8j2gDpFR",
  "key33": "2k6NE8J4TksxcPpn9doi7zaGDdfmX5UE4uZY8yui4rRUC9NQDQxYFtDFNDk8GNy6VNSxUqxz1mmt5LoGsPF1dbr",
  "key34": "CtAbgyy5vxLHKLTYzzFw5ZsEmU955n1CtEDgapASJ7bMkZuYpoWB4KdiRuq6ftcg7YFzL94bdc7dafszWprQ23Y",
  "key35": "eNwKQaFbJ669UfamZhNQtUYcz11ftCad4SbJJukxvn698dQ4WJN6TnjYmTZUoNKh3tuDAFHR2bLnsBam3oJcmKq",
  "key36": "3TZwbiDGSXxW9L65WXDE178QUuXaS3H4LNWtFTxiyUj1wHMYZ5Dri1A5wjupX3EHiHy8U1h1wQDMHzAHcyXfcy5b",
  "key37": "4D5cCYUvvY3aToKxL2dP4vjgztebzjVn2zwFpokng7Ux6Gfs867DnoJfYxcgU2RPKyLvwW6nkLnVo5YjRCLnwmw2",
  "key38": "wyxi3ozUxU2Q4mjnxq7rWVJMvFf53RBz8WDuGmZFemqfJMXiH4fZ91yE5u6dMdSzTSgFXR8xc9xJULnZPVNSSX8",
  "key39": "U2jFMBDCHVZQhbJvPt2QVNfcuz9ZxNfpUwBubF9cafwsuNWrEy6kbaJFQu8CYs8Fpi8f8iQG4KJvTnpa5xbu3ki",
  "key40": "2qTtFynnrvMSbebpr8fZ6osc88dyQLMZJqpse19d6R4v7WyGv5VgNDStqW8bpvtkGXmPjZ28HRHUaccTM4DhnsYS",
  "key41": "46dyRKoe1iQwykE1b3gGZBYV5YwJtiaSJpsJMEYKj9oyX2fNjGukQBVLUNwr6m53qBfueHvg2WY11dbeB1nwQzsF",
  "key42": "tt5q6opoBVBTpzpKAUtuhBJwDptM1tafMz76VBMD6M6C21HiMcsX1WNarejwEFMMyAtG8JZjB14Gfmq4svithKq",
  "key43": "2w9YqkKLSw3aUuYk86KFdQzauJRC1hAcF8edY8qrNqX2tn6BupXwowFktcQrma8LU78T3Hq2DfWpDUYnndvrPjdq",
  "key44": "4MxNDciMed7GH9bBEctJNkfRnugZ8v5Hzw2KyF2B88PBdzMX48rsmv19BAeVQNi7WNUCV6VqDiyAsNsAUc8McRDC",
  "key45": "5dNP6hizvkEkZ4SmbrurpfyrxerY1TW6jDxzCUurdEZ7sF36AQnCHR43PLmnSjXKB55fV1gwWSQSMy6VXmqUSKWF",
  "key46": "3dp44WDpHG8amJKSxiozeQzszZjVTULpghvxykKLUzELcG8R2UPVoLemccMoFo9Nr4scwVTsBbVsDgvgFJeZ82Z1",
  "key47": "4JT9SCG4SGejSzb4MfjvVmnDsxTL2q4T9fYMyk4bM4GVGgriDw6XTJstZ8f3e5XpTbnpaozmDqoeLwicuFqVPPfS",
  "key48": "39wWqv1xVcb78fgbc35cevqQNqc2CRWPU2vKvmPwifXcip57gCbhrvALVRMfjCLHrSCMFcvqwTETK1pPd7JSGoTt"
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
