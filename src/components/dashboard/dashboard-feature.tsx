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
    "3Y9cTDwbJJThcXokvc2kLe7nDwYynuGTPcno3914yuXgn6NpXKKYXJDGBLcx136x8JVFYTXz3Dw4qRuYjy81ytFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2va4xG9vwAA8buGxwH8dKTCdBoZQhxGmnACjePkRxC9HSscR4AkirFRq9Jp8JPvpTZnfB5XG8ZpsLUC9gszUpKeV",
  "key1": "4WVtSzm4eFfRhG7CRUayRFqoK2zy8iBiwyPSiLL7C8Xy257CNbkxFXUxTnDRvjo7RVvDmjVnvB2agfwtLQ2aRiGW",
  "key2": "3UwgKhtMbaqMLuqDAM3N9RWFcrNbAHDZWWGSfWtpRiJ6uspvcoc4UF5oWronLGJS8yLa1UgtenD1mHuwcEji6rke",
  "key3": "3yZj7fv1GjGSYjU2RovcsPn6TdJzdwgkyHfJsXAveYSt1AQm2sBctKMexUJojVmJjXRDgVi54yHQLbhcMLy6PdoK",
  "key4": "2KNi9Hifn4mDzZTgoz6Bvm1A2rsnK3Gtv97d5DVSPDWPocSqRTqqk3rjLKXfwUfavAqddQv8XfNEE4VFRCWm9SH9",
  "key5": "4eW5Xozyj5TErNRQJBroh35L5x76gJWxT4VFFPmv564rcyHkiAPAR9pbHd5wsgTgiG59FFTxEP53AXgtjUk1VhPs",
  "key6": "3L73Xs1gWnrVVQBpboVqE6SggonxbPpTi5vw7PokuMJGEQvdjvmeSQoWjVtRoseYstUjj5PZR9Bx1XYuN28DGBh8",
  "key7": "597MPHNevsV6fFJJeK8a1C7zuQNfg1T6S6quv45Q12PgPEqT8smQv6Ri64S8oPX3CtYjHQ4KKDdQsEpbPzkpUHJy",
  "key8": "4ep1sPvjk2tKQyA86EB97vyF8Nf53nDNFKrQVQW2vSyiCWmnSGRdZReeqootJjaMeN8BAwiJYaV5TskS79QZzLhi",
  "key9": "5uzjr8j12xjdu1DzZE4LVkLUGo2BYKZHkt6B1PdumLARyMt4Tx4p6WAazAzZuKNW85rFNQRrbwCAsPcb5SLYx4JM",
  "key10": "3EgyA7Mw3UY5nkBkuAHduc9kuUZTMivnDMpbAmFgKsLaSap1e4JoJPH2Ud8ayvGkNrvcyqfZsZKDkjVVgrCExifJ",
  "key11": "uEFkxdSd2HoxTHBKNnJcoWpFL6PRTRcg68dBkip4KrzEahaNWeoWXwn6qUBZ2NUEHaixMmYTaohYJDtQNUnT5sE",
  "key12": "4oZgqjYTMW3hfGApw4XUbHMnPZDgnSR9Qvv6HcikS5Achm92pknEU5x8aU5z2LVM3rBnV4Vv7DUmzKHxFiGSphMT",
  "key13": "3dFDxuSNBZa1VHRDNvFhg8opPTpYfNm3PPNK2RB3qXqMtUnowfJearfJ9U4VsV6fepn5tk4HHN4xbaSWqkmEK71M",
  "key14": "3gNzzxVzn7XErv6E5gWwzcP1YBAo1D2YpU2WFZ8MZ1APTFSWgwXAVAdBBqkouRo3xUHS1HpddjezX6nDTXzRycKL",
  "key15": "3eCFMzCKdDGGF6wqBKGHpjGHtFJ78MYB1unC5s4ddJnDHaturabdQktnyaxGA8R6pgwdNbsR3T4B6U515uP3m4LX",
  "key16": "4KDMYw1ZWd1vnjqtFYEZog27WMcSTPaj7P4g69Csp98LwWqEupucRJb3awG878x2utJUHr7SYSimsUMsFBMMWQHQ",
  "key17": "43mYwJ2GquZPDJNdQJBjWby2A1PeXtU7e64By8YVYWUAaYZhXPjX3N7SR2tA74vsWpeM99p81Kq84B5jLjmHaqWT",
  "key18": "2csvomu99XrB9YjPB6679jDkbkADgzrVsC3eoWwpKJU91zRWFK1LX19uQgEKwxXN8EeNaAywcHP8fcwrqsRjBJUL",
  "key19": "2pfSyMBLicrUHwmsBgpfoFZBUtwGuygaDyL8TJ1t4tHPZgZw9gR4JW6v1yT2kxyKb5sFNpvK9a3QxHmMFFWD74nT",
  "key20": "3D8kVAjmzv8K8Ud7BEoUNbZay6BnH9FPUPDkHnEpYk1LtKaNoN2JxY3Yxx2SNrs2rBvtvJB8sDoVYmB5fQTB5abV",
  "key21": "2pdPwUyoBEtuGWzjNrURgXFrgLty5fqaQ8Q1YSBNpVPsi25sTmf8CFmpcGrZsMututyNWEwgtiSk86qYvWJtTnSU",
  "key22": "48MRNDaa3L5KBQ1sooUevwfEVnT9v2yDbXYNy22zQPq2iFrNNkwcbwJdPFZmKu4BzS8ddA47otKgG1gcEQFD9gm8",
  "key23": "uQWpT1WZi2JesAU3PpxxqAiPbju9SEyp5P8vyer2iy1vD6xYsti512pJQm1pwGm4hKX2EvnYKiGt7nodVQ7wuAR",
  "key24": "hdWi83cnXXtZyGqX9eMjPQ3M29siB1wwN85QK7Zv1WsDrqDdnHKp8kv6CdkUD8zKQmeidsbTQNKTxVWTgUr2NNk",
  "key25": "44Dhq4uLMUhzUSjxDZFi2Qoi4qyVXviQotg95HAvYXDKsqF9D4dZGeQcHvjjmaqAjHzqSMe1DW89Dhm1A7gznBK4",
  "key26": "56t9tyXy8n6pqhZQbsTwp5UgBQ5h46yNkh5bnDaWKPRQuJJM2trtbJiXJp6y9Ws8wDiYdkszcnio3xJH5rrjwAUk",
  "key27": "3wiHAq7qV1zTGHyHgBqRKfJU2FwiuhuB49r69TGyqTpeyA4ge5L42ZFwAGS1GMYMRnhvsmEwWJGmHuVMUzmuqAji",
  "key28": "2CyXATmwQkRo86bA6Ms8ck3KhrL6rZyc7D7jXjiBrwRUk4o9fjf6BrMFUoXhKNHduURLJ4unNViUzGNHRSHk6VBD",
  "key29": "44qpwBQoHPoiH74kWwhGtsuxZELPzw9vaFnPQgiiwZExdFnfmSpuW79Ux6LwwgQTTfz14o8VzL3KaoeeqcZRqEYQ",
  "key30": "2p64eYB1EWndL8CFeRmVvva84gtNXdSZ8My8QAhQGKB1s6XtKc31yYNBaeawbbDuMZksf7fXhFKmFeqzs3kQeyG",
  "key31": "DZqc1EGAMi8hN3V7KWk2oxHXNZunYo2pdTdizpf7sVizfRHbaygD9hjjsMsCPkPPyyT1ddPUdkSfCcJ8ha3eZHn",
  "key32": "4GufCEhNYpPw5R4Pa8JCCzr7a7LiX78TQHyxroDU7xrz9wkXnJeEYiDvzMarWYFuZdxXw99zDpGGorXNemoN9jrk",
  "key33": "44RpUSzZGGDEdqtRaUBkRBVX5uFAbastEkGTejbBJVsaDAYaNS3YTeyjW5S5AJyLM2u4Cdwy5md4FMxiLMcPAGQa",
  "key34": "4PxYp6mnF5XkyhnZjF2fvtFw8dP2YEw2EJYMW7GzcqjWd9DPeeCBSpHzTCs6KgkfPLbgBDA7TG63snsTUGjUeaSn",
  "key35": "5dNCCo3UPr8A2sA2a4rAey2ZXSSBmSMhNEJcwPEdSA6SNeZu2Wwb1jCGHAMearDjG6UVXhq5a7WrUXsEAAwtmtKM",
  "key36": "Sp8Krp3D1nL3uP118H7fGJ5oV5XN3BB2aBK7knLbKDSbNKHbwSNdUwypZgwokZNAZmCHdYrvc8CTEF1cqgkx2i5",
  "key37": "3SzAmGuB3FNZwKoJk3gnUVd2HWgHQxL5e6RwWeFmckJh2dr6LkUJaQRKDVawMjrFgd2HQFTjzFoiMzVptVfaBScj",
  "key38": "55sbwxJ7kJFX19n2FFFDfstkLPyWeFvtsWdXX2HtKdAwPS5E6VEsWd5Xe8P7ULHiDoxAmRx3hHT8ivemyyZifaKm",
  "key39": "5wP3B9TBwFbrrd97pedBFYVaNZrYRdewihQzpEp2rFX1WQjth5waWWxartq7kKH5ykJjCXH6dv1LAaE17tRxQojP",
  "key40": "oWfU6XtnRZCQbKvq4eMjK2DRa1enJJuPyjw4jLDPAHMWabAFtjiyCEveQtFC211riSxoYuE87iBoATz39Kw2QzF",
  "key41": "5V1aFVvb7bHzB5swptouR34BGH6hwQSfMkujbEG88PuJqrEKnT9boKBbp5bUNq8kLgk8te4FpqXqwkPTsMKGdBXF",
  "key42": "5cNFVF7bJvbEKeFxGJkuwuxMU3YEBDXd9rgfkwGr8PJ1itanybSsGWJkhMs2eVrkc7Vw7GKdSqS6RWsaH8KbXamX",
  "key43": "3vg8mveu7eVj3329aDXSi2c3upxx3q4yyTw5KquWPQj5cwwDnNnwLSPigLWWdm7C33SaPw4xwryf5JJwZhpfneyf",
  "key44": "ufWfvNWoWXagtBqNmn19JmZjKeMCBjxvCR9N4vfqKAY59FUkP9jLNNxs2ZqQPCe3XGUmMJDbfPAjbfPPPRxYsDj"
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
