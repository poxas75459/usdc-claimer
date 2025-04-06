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
    "4Nkwd3oWQ4UqfMWfgsF8jLkZPcoXc78N5WBURuf7zcycZ74Tbw2M2JAE7nM9j5hvyVfBcJfxsGWjuN3uCVs7D4Uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i5WYecgZhfAdFewU9qpckyDL2cnFv8aayNFWU1TUdDrjy5A317vK3P25iVDaFqmWwfSM9w5PqdLVEv23aC5bKo8",
  "key1": "3L3ocC5WuSa85inmWhPm87dWB9Q4wDeKSLz6CUvYAfRZw5HMcvQsQZ9DqYjpCqXcihd7muFxEtHVrtRk3A1oWRJK",
  "key2": "4Dfj8m1PJcaPs6wk1F4JNAwm35L9shDf6XMjSyCxcZYzA6GVEuMjZiuNZiFmypXGQYrQoBvna2Qkyq5nGXu2gEMQ",
  "key3": "5HwicRoYhUNxt1Y9tjYVPBWiWsmDW7s9XAeo65SBp51k7baJRPdHG995XbYXQzd5jMfTcuSUL3Bys7gEwfPnzJtv",
  "key4": "2Wpa2jbeKYKuNAdjU1sKxE8bibzuLa7c2LAP3Wf868so8naZfAGvYqViajm46m3qT6ooJeoBHw4pzhqcgCwQeui6",
  "key5": "BDmjXbUP3jyFn8U42muSmEW5teLm3akNtTbENsVd4ts1NAMv42JycKL7E8GsRJy7TDZZGuivmEB2dwuyGparbqZ",
  "key6": "4M9VCjndx3MoY36wYwjoWgcxdL3Diz8HNWL3C1qqu3P1AbauD5sKZSDVdfKNUSyNPyTRm3Gp7VnJ9VRaZXrkVzrN",
  "key7": "5gBiAdpE2pbxbDooDwEyt2KYqaxfSRWBXM3bPGC5dquQjW4E93q2Zn4zmwDuom42XsX44NRkMSU7LwHBgim21XBX",
  "key8": "2xSVvsQ79jMVtsqg6tuS1mWZn2Z9reyh5rfR2YRLsma8jreyaD5nHHVRV4wtVuRGtBcDrzfz4MWoEcAPn4dcCReM",
  "key9": "3ozjgHe3bkhzq4XVqtBDgJpF7Lhbku5Nsp8YuTN35jngFTPi3thU58vzn8gzwpUpbS562W6ai673wsAEzKKprRCn",
  "key10": "5LqbyJBuuH9zCR2P3L3FTYTkKC1DEAykrYXokHDgVXtCXwfFy67RrSmfEWPUdTt3SqgymvuYGFfG1vzuoQGzr1fR",
  "key11": "PWnnsu55gTSfsbFQ98uiL5e2M97yzkx4W6yN4gaHm9PiJQtqYwmYw6ytLgbFRX1mBtyeizEsukEv57qLXLVE7RS",
  "key12": "3GTzL38w48fNY62VQFpvP3i3K3TwnMBF2GugEyWqDyzc7987WyM5d9eip9RA9x64WnsNQtcoWgiVkKoUe44317XR",
  "key13": "3WthWmPyv5siiJyRP6LJQ4XQcgBi87ZwWg8DMQGH6hYU1iEnWeNPGhJvpiAniwhuJf9wbgmQCe29Cs1b5DvX2yb8",
  "key14": "3pfVj1cA2uqRphr1Ack7ysr1dAaURgk4FY9xwamT1UUJy3sNMr1iHKJgZEwtkfuJZaB4CtiBQ7F6skDsn6EnkvoZ",
  "key15": "5y3vWEWPkHRYRr4FiLg2oXoUhyPeXBttPQdtZp7i3D4wzPP8GmCETxepDxXAjaiNAnKXu8Qk8JacbsQNb8oATWtk",
  "key16": "51b7EVqwDNL17ChCBQbXMHLThy29213NycSdmHDHo9zUv7mZHepb1ARnDDU589iSPtyPzP7D8WPfVXsV5aV8LGDo",
  "key17": "WF8ZPQDjbgp5UYb38EGgrm83ztmr3KDw9zLcToG4WnK8vLQV6fF4ffNJnAgAWMSG4p6M1HHtXBD32S1JBHNEGQ1",
  "key18": "5L4XQnHYQWUXDbGTrSDCb8XpThaZug4unYJrqvkDqyEzsDutRHBqEHhm2N7qRU8YCTDL6m9udnSfaXxsUYLmgKe7",
  "key19": "3woX5LAPbN5VqvHEYAR7iTv8EGMnjxwapP6aapFdLbcrcynJ6jAGQZ6VbzadsJh8TAjNsy2c2Znisn7VEs8pSYFx",
  "key20": "4JJFpdeDKZCqnCv1FHSQGci3zKwwM4qGJ5m2drtxFeBs8HEL8Wz7ys5Hc2MkP8xwfCDm6pZFBwRpqj48i2EpkLor",
  "key21": "3Q4pe4fzd8prYVsxrmJgruTJgAqrMHHmMFTgKtYFwMoo6LnkuKsnHdTmPE1Y59zG8ZMBFeYb1pK5KppQsAwcz6Nr",
  "key22": "5w5aWwsYrtyakHYiVFvyuHHoVi4FRjjE82BfCAKTwZtRXYPxSpXvtgmZPryZuhdFEL5rrnp8kFiDo5M75yC5AA67",
  "key23": "2YGps2EQhYw3SwDGtHPdiMwwqjrQyNKUGKEojjkyWBf2wbWuLrU1Y3TMN9RSLLsA79imN7qFdvVgxiMb7yUk3fbU",
  "key24": "5BsSXxxTfZgs4mducfqB3EKnGhW6QqVcL2FPiwLVx8h5jkBDrWZBFzicju4smnU4pqeAq9wrjHyjdP8XSnURwx6m",
  "key25": "3bYj77obDjzRLdPoNcngieuz7FUncg6KfFwWgjQSBpQ8RniLxkDUaKpZse14q8dEvxxGSJ5HYBKwWokUjFAnXYZr",
  "key26": "3ZUZCB5WYMryPwWZCAD2h1pmrFepKtoUGKLne7r6bCjAK7568w6zkHAt3L34oGYUQhMZnxkcrd5d1g4N2pGnbnpH",
  "key27": "48ZnHuEfkmm1vDXbZo6pL32UqfABcv32fZiQRY482cD41TQEprPHBU5p2d35iW3jYCFZTE9FYZ9Hdvgz8i9RKmvB",
  "key28": "4BnBrF2WGHDnQK6NCDkgnJYNrnEztfbSDQmoWSb9YmMMcW79hjhHkHPBZSKaBpmx94kEGx6usnE3h8r2MKayoi4y",
  "key29": "bWq9DaryjssSGhbQPouDvZVAk5oHfMv7qQnwozQtqFLK5H59jjHUaT3r4qStcgZpKqBxuzvwiE56ixrjUZSQe7j",
  "key30": "2zjMnzGaaTPn6B5q1TutZRUh41B4FRpffUdoNq8Gx3dy5FfgbLQpf3y2bMxABDeXG5C7d5DhQK67NNWywR3Y3NPS",
  "key31": "2biwEC15VNJnJgz98ecudsrPpxGutM4eVEVEk617hVVVambnuYo6z5or3uyYQhRR2n8HwbGD7ReUMzEWdzRyoNYd",
  "key32": "3ydZqXwZKM6FgdR2FVtFQF1w1x86VV7JgC9E4Hicom2Aft4vR6dhrMSAeSM4QvSfpBuhnr3XZgJR9r82zrovGa2x",
  "key33": "3th2LGyVvLkjmuAzMF9uZvm4ZYWFjRmppQkNXfQtQuzJAU8mvS34nUUGJWKz2rg4prtrWkrEAS8XeyXNy6tgMF5",
  "key34": "2Hn3374SpfPeyZPnQAGgwHSH2EKSTCJ7vuR3cYF5Cdqa3MpyxGP1tabdtLi44mRFLJs4RpNNtb38WovURV5DTgKQ",
  "key35": "4AGypyzY9SF4JV5XRQ7qGWqbGAoUfHeDyWMJmu1mBPLma1LwJWfB8sJb1EkWSYxZMhLfswHRZJb9Wy4poJXVW8Lg",
  "key36": "4dkY3beHsnsRvuuVEhnFgByMtUDyoN8RfsmQmPSJgnpKZC3fJUttHTAHVXE2M7zRazVGsHr4t6USiEh1KxcBzwrp",
  "key37": "3EwaD86n87BKaKT6aUBs7NL44okxxiG2UZixvai8agsHtSTd1rq3pFPuwLpYgu7rnqyaGZajW7sg9nng4KnGdXWZ"
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
