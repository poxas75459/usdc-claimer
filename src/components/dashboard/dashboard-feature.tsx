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
    "5AdMTfwuAovLJdfMczNYibctRcGnuaBN4myUpM3Gwz9i824KbVewGSgzDhyHyTnsENdywzsZ6Dv2TicMDnWabyvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VmeucPgfTMR17VWNKeZxKV9GkoH1SMwEzF6tMGc6gQcoqDo7ozGTQ9EFtEMzcsuVfj1Q1u7PFB9Hr4iLAhkYCs",
  "key1": "3HnZs5yGM5XbzpH8NmtH5wjCDQC1F3jZxPwLf7pm9ENe2XJkrHDtqLG1LVLwrXcBpvDLxf4xt4p6Ngv2YrwiYsHG",
  "key2": "444pmAu3VS1AEGf3UXysJ4diKa9W2XbpQwvuZUAmhMJ9TP79NbbWtcGvtv5hNughUKDWSNhEmvzBhDb97dVAtpWx",
  "key3": "2LsRdEx9KnTXGeMGozkFwdhbVz2ZWWtGqdDGo6ytaKCKzYY6Qvo5ynAWtg27whs3YMB8NsfkXBMSu86EVexzXcRb",
  "key4": "4dNF3d4ztovfnCQwRMGsRYLYbWex7YBRBNyEeRpDtKWREfE2wviKxvwZV9RpK6k3qokcEAWcsBKVGJqYuE8g33vS",
  "key5": "2zPjPre1xdUqKuVFuqbgzvRB1iiVtBLPKKf67UkrKGqdLjcTAARaDHQ63e5yEYupTQnAoGLjmttgHa8ZhQhnrJk",
  "key6": "2EnSwC4QSGMbDhKRpPhobEU1ZGoj8DpkKXpyujFyjMENi53TSKaKwM47yseNMyfS78nFUpCwzSUMRi95RJs3v6rc",
  "key7": "5m6n7tyaSgGcR3zYgn5uB5tLWMboXhqvX3yecwbX1jJacofw238YKrRofzW1HTMHhmCzQ7vnaBND9iAaUKAU23zN",
  "key8": "V5r37iowGDmY6LoqrkTtYq1u85HMn9cJC1pCM6cZyFaLHiEMnSfzsnRGgaJKW7rn99uQRqCtPrDuWjQQ64CevmW",
  "key9": "37V6mbQwrTWkbULeQ7A6oibwDH7GSxL4TWSmmyNKaiex4nXUT5nQoe85EHmr1u2tyhnnPeJ3Dw96S6gmEkfjWguS",
  "key10": "2JwDTS8Joz8u2cffauQRN3APP2brS7hHnA2dDDSTbcqqnfjXV7RUh8NaYAuisGnzLi7PTumGacrkwmGurWLVex5H",
  "key11": "4zhyFWv7GDCKUKrUhk8dSf5tXqe87QUjiEQ2Vnu5HhsDZpmDxQySKaepUqwiSjqifLmjEvJhHkUr3eBbiiNcPoiz",
  "key12": "46pXJsUyjXu8ZLkK2crxunaZRbQjP1RNsSqAt6oSkBP3moMXxHP38shNkQBbxZvmJKpQdT3xtZKdmf6EVAC9uewj",
  "key13": "5r2q6K5GDWsSuA62XUv5s5n14ozoXuoryJvMNSKJ7kCMYcofnqmaD2uCFGB5EKr1Rikm5uDUJy86bJmB9bkEVRxw",
  "key14": "2AHjV5YT1wUZvBTu7hZ7AivsB32WHC8S7GvTkappTzhyPyZsDw41V3H3Co8gV2bqRSfnPvwkUWM3cdodrEQxr1f7",
  "key15": "3XHjQfRuXiMQnTt997vxCLTh8BqxanYfrC34quWp2NB7JfEwWFxYxHuMLbDyumVN296fUSprwNTodjthGmLufyN2",
  "key16": "51RApWp2kNqRBvVtm5QFKP9yrrz7Mvr4wwqLL7GnoTBVj5PJHbgFVSfqPyRSnLnJGzYrZeDD7YDfWwwzWiLAGTvd",
  "key17": "gLgnguYPWJ611r2hWLWAJDMKMXsuCM8kJBfePopVuXScYBDdupQd2qy8SSf4Zb6cTGrBXihxEDmdzfM5SWPWA97",
  "key18": "3Msdsb6ERtPzJQe8EnhZNx4UvGr78prwjBVNuwh2L35KRMp3Lw3ptz3K7bh24MZLGGZFU26s9qLkYpVWkbBfPtvQ",
  "key19": "5uqNMNbovVNLZ985RbjYHpZBcqiajSFs8PQhuqyD1zEY9KT3i9Af5472zLw6kPZDu2J52AaaN9Qv3GM8pguUW8Y6",
  "key20": "3Q7pinRkYbP4iDLRR175niykK1zf9KFrfLG4RHiUcGEffgEmdJCD6ZgzsmTwNbfhKNvc6SQmKt3wETCSiy3Puxqa",
  "key21": "vQ3Esn2SiUtygRXW6yKmfBtkLsehaXeA7g555yXKYThTySUzjtaxvSXfsXPcJ7ycVtVPi57tgkFihunQd5RyrvU",
  "key22": "5wMiUbXDKkSi96uXWCWQ8vtbZgo4otNBxN5xYCph1McV7oQp1wHE5zjNFzEhjC1rdVoD1BZdJQGpJFbzejBpTk3p",
  "key23": "5KMR5cKJjG9HqxkFkJAiLqnbNdukfFHEFJuyfq4mbhx9b6QcDYKW92rLtNZpCkKYQ9955CTyp3bCsY3vLnJTsjJv",
  "key24": "5QhQZWGYkBYNtik2ypNRcYv4hW24eAieXMEHQbbkYeRdFaxU5vMhkuHokJoEJZiHEQ1cwmV7wGPnYwd1jx2NPvBo",
  "key25": "4XfrTm6EVG7boixwupfyUyE1cR9Dk7VL3246QhWhyCb7x1QvzW4ZHjJ3X74oR2r6zJ6vHFJ11U1fAcEnErkRRtUX",
  "key26": "5U8pAxkQcQ85vHi6gCSgu3uWCKC5prAN4C6gs78WXMBdPBjtMhbDa3riYa8KeYqceyLuQnfDARNuiBEjcorg64cg",
  "key27": "3nWhoLimwQuSYz6yyK5ZwuvDuBhCt5Ly3P58XUiBaDwTm5atxCxu3ijVxEZWtxnrGxAsGTZB7fraz1X4pNScPchW",
  "key28": "42dumRe8AK4SzegpUWYUSTyR1LCHwAcnKTB8KorPoi3WNSGUdhz38gD3ximdnNy5p6X6iGeaE6Dr7zrb3y38NdUv",
  "key29": "3ci6Xtjg46A9oNVnivzqEKWQaznuJ5F5KK1xcNbq9h8WgyCtqvAKRdxYRe5Y4bfA5xhZCFKVqHb5pha52TLDEpSM",
  "key30": "2YWQK6soADEFvyHyrrMt6pmHTcwNCXCR21kpk97XUqGVoGmy2UirM9bSy8xPXorv7jSd9L3pTbUxki1SX7kFHWAo",
  "key31": "1KQzMjRFQZ46FSovtMXGQ7mCen11vab3HxUYrJ1AV9sLFcgXPFZuwHUDfMN8r6RbQzqBfQw5ncKUaUvv8pwU2kP",
  "key32": "2qxFVCvkzHxaUx6DwTRwop6n9L68vq8sChjC6KoDZYzCAaNMRCfLPY2UQoRec2iSQFGvNfYkAvAgxxJAhbDfieYB",
  "key33": "3pQjvciqbGfGwbwkEAWUvBZuTCdozymovAP3W6dchX5Z5xxEGMfEqwyMu7o6da9qcH78YLmYDwfrmhtej6gkTb1Q",
  "key34": "3Cjcs7wiohi26t1Qy37jwR1ue9TuEpwu4vAU7GpNP8PgJrYQnuMtezBHXFSxniwVUQEusNSFW5RKss7HXBBHA6sU",
  "key35": "3ZhFMDwZRURxRaxVmoFqPsEqkhsytqWjjgBNhQYyFbFGhycCnhjmDDFYgY8SxWcbwxZUibVTGSUzZfy2kZeFdbMU",
  "key36": "5YggXvAPJ8z7ywD1ZTD4k3bkfRCE8reFoL2GfjtogZYsCQ72gx72VVoGjMwasMvwttkJzi9y2ay2Ecida51JQcS8",
  "key37": "66kXLEXpqxMiNVc2YBTgvjZ9BgBfn6DhWf7pyNdhYUsWiJtziQGKFdVeN86FxxpvSxq2BCEkDKahkzH9ACGcaMxY",
  "key38": "23v9DHBxBq4CdYfFbsb2PGr94VCVbRM4SxnucABhpn4Bp4afC2smtgAkN8GycKVMCh5UFTjSx1UDJJxYhxKHDDwn",
  "key39": "2dVDLjrT6v3wfkrrWRAhQ3iEq3GHm9LQZmNG9HnehEntXVCF3ysLnQ88gis32yubbQU5P3kKS29t4RyjicKDy3V1"
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
