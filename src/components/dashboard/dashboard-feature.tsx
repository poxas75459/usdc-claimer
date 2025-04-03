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
    "5FAs5erSLbrxayNnQ2prnTXrL85wRxS7h9RKhZgJUTyX1kqzZhjgUQ8sFkQ8oannoS4ycKULvhWLwhHDj8tht8RP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67QcopgxMcbYZFmYN4nqxV7WQUX7poGKtF2qhGHB6nphiUBbFVXrHv3TWviczkgNS8cjVpUBeMNVr2QGj88zaCPk",
  "key1": "3A4ar5u3shzDybSyyCoQpeeEpovpBddgsr8ChNb6Fb1upkJTFA5o76PGvYgfxtRYkpYptjAaVXiAn9GbAqWFuSZ4",
  "key2": "43ZqunyDSHBWj3aiQ39eF6xvwHsEHTC6xZynYSTBovsuoggN3KT1GJ8qoaa3F1x5gmKWzXXzh9Ng1D8P33rRhuud",
  "key3": "3NEYFwEqL5zfcs9gmbCtwfxHqy673yc8PhUz8T9vZdeN98TsBsTuKzGiPmfeinhh16cTUNJrsThdC91KzSsW56M3",
  "key4": "4rVyBMaFEyhmLV9BtSnLW9R83Zgq8BjMSk5ZXbjg8c69VM1pPfRvQBXEFsexsm9MokkMaB4wAGhweDjVBxPraQzJ",
  "key5": "5gJSTSWoH63XcskQxKPRxNdqfcUvVeRrrUiDmKGuQLGxsGJihFPFiAmHy4fumdRVmnmbE2sCHBGhUY9ZexfAA4hN",
  "key6": "4LfBFbj26BhqexD5EczZz5RxMJCZdt5g6chPfYVzPS4W7ito2bP7uSr27chN1y4raXB1B9sn7tY79LxgRjeVcX9v",
  "key7": "3yxZt98SL4C5jHFeFDRwWRdEbcG1vJLXQbBbxQw5LpMrqHd1bQQmFVXEefGLzJp8Vahi5ZuirCyeqiPfirCdz7vX",
  "key8": "42DzLvLYjRmZCP4kh2Z3r4vw3fdfXzPRxZ2T136f6mHutCwQXEUVw6sMg1c5SJUekKP51jP7JknympExJoKF6PuM",
  "key9": "2Kpdw8dKFLcJYBkwd9LxAoyW1jARzag4sAdsVi6ZdbpYLxgpkNgFaDtgZp4QzHPEbGv9cSy2v19prPEgXvVfqqwi",
  "key10": "3SCvsXT8wCrYECVjRezosxc6SZpXGqP6q87LPpZDwocJBq6izeQwoDfVEc5EA88JLyTTgWswJkA9MP3cFF4dqCVb",
  "key11": "29kBeTkbXUe8vDm7NGfABSSsRpFEV3a78MG9aazEsVpGLEJpzsDEndaoPMQHko7uJRUPAThKBZ6SCApRQ5EgAn47",
  "key12": "21LEeHviwVR7Gu3jFb76qwAhVwaHDBnWTWhkjnk5WUwbvvXYGbks6N27bbvqZhPfJQWyLFEJcuQ8P3QYDAg6DPYz",
  "key13": "4EsnwFocTESJqWFW6kWyar6c3rVsyhE91LVJs5zWsqXW6peSXZyoh6FyrWRJfVssVNS12ZH2NgNzK75431UrFRFs",
  "key14": "3Vt2swMtQzC3auEg2kfPvwUSvXDSHPRGZBDQK73gL31QZgnfqr8VNTM79Ev19tXknkmw1pg4qRyukzgnCby8Ynhf",
  "key15": "48QXk35cXKm3ycZqWAF3AZ3EJCcjKKq1k2PP8RraMyVx6tsmnUU2acp1n9Rvr8EqF8iG71qqE1YRSxXt4ytK5YvV",
  "key16": "2nBX4dUwiFAyS97zMxB1JNieDZxtxBf7AkQVKCTZuPWRx8RYxZ1p5qzx6iUFu2whMxwEPCnbUNvcvkEz58GDEa5m",
  "key17": "3BoKdMRBVc28i2pWKaVpTzmJRopHbTT45oTnMUSJ3Tt5qtwjJsJRdd5XpTKYcPJxZQy8WEicCNG4dZWsEMGhrW41",
  "key18": "5Xw87ig5WMSsACyiiTKdW6gWEjMoynxjhS7MZeyeMSvXaCSSJR3vjkQV7XtZ1SygMwvLiUhkzcWPJuzxknPd7mgW",
  "key19": "494cdj5FJRh7wRPsJaFedDiHMCyCmqJn1L23XqpijeqttiDFK5EhxMxpWFs1XfQq723fUJGzr9oKxGxQs2Vtwiny",
  "key20": "2qGs4TJkQBiyVjMz5MrvyfNN4WGVxjAHqyxA18jgF2rsHJSKM3gXqBxtuVXZCsoaaJ8ubBnemD5XcNQ82nznY3Nr",
  "key21": "2hf3Pcd5eRhh9rg2hLxywq3GGE2228SrWfRr9Wnh5efb4VmTXSgXDjDy81t88oJCAnpskUQn1scSJx2K2mkuJaeu",
  "key22": "5zgGMtAyGhFynP9w6iubvRZiHGHBvUb18tQfmgEWnuNcTs5CtSpVYhceUawVMMLzSfRPT3HHmAefe6JiGYHotzqc",
  "key23": "3Wudea3UWs1wAL5TuHk4Vhq6bEXK9fREcA8jHDXKVR7R8G3iXUyD892A7vC1WrSHJvghc6AbMJY7r9ksJtJNZtpQ",
  "key24": "3ZJGWMdzigWWKoyGcaN9vaMV9DVDTknvrH8wqU7RZM5Tq1Yftx4Mvzk4SyBcjL741zk6szi45sdB3XDJAyLNxGCg",
  "key25": "uq345SxiJidGyKWhTUCdGkXSVnMwkkSumvwA6i3xGXrhm83bWWUcSQLn5dttcD2BMkhwB4SXvWHUZpNyrU5mQgq",
  "key26": "2xvPk3FJ8H84ZYo6etvtq8jkPibkkPVVJWLa5QNZdssKyjzja8SAHfxkkxY8ubewKfz65w64bkW6TwZ19ecWfp6f",
  "key27": "2CiiJTzn7ZAWPY75ds5ZJHcgwoA4HHkDBUASaqL7M9TfAi2t68XFaM1hqyEQ1Zy4Y85Kp1pHVk1G1wZwN5ktBNZs",
  "key28": "4w14prmdA3y1g1m2Sgr6Zef63EUVSHJc9BY5CNmUXPhSspCpaWyMzdyz2UBbxMvsatN2D7PNCVWBa8xdaB6s3dyE",
  "key29": "SHCo392HnD9D23mEVGJmgdepaomNm2pa8KrCzjqdDLwbehwchdhhLg233bDVRMWeXd1t8K2As1DAhJVVMBKXFnu",
  "key30": "2A6p7W6ZsFsQDxuJZo7d9orUQDbrUPoK8XmSbfdLHHhGhhdhSfFFtscWscZxTfjMYk2ZJw9dSWgCy5i5ohvozweQ",
  "key31": "5zU9BvEW6mtE1cMWmYxkJxEiaaY1xRsXmuAcLYCRdsNUBS6FnTfvm8F9ZpFYhEfZAXjULXYnoUN8vqLgmhcTqdRz",
  "key32": "2N4vSu7pdw4V4HHN5odG7ng5mCnuGDk7RK7EFfvMwut1qLkzdgzogdFv842LcvKXJTw968RWUFYc1TiPna5r5Vkz",
  "key33": "27eAtsAcM5owrAr1xz9oGYYgrVm3aa11aseFs4zv5hNdrDXmvkaEMH3ig8EVorUkUyHZnrsKMaEvMt5yNQD9Qhvs",
  "key34": "Mbi6Yt12nbje6NKhU9dA1XRJjceFSUDr3kuqnm4qjnrs6SScErrkpvL2U3btCuec7HQ51fMSWEn1AqohEbNKPSH",
  "key35": "51DDATvXXdFrpLzXPuLdaQR7CowLWD1zMaF717FaK62g4RcZfax4MTroAMfrj18oiVke9fFzAkLYc4xo17NRHM7K",
  "key36": "2YNJLyEVaCU5xHNg6XgDVSNksrbx6HiZE4csPjt19fnC3A2KRhABdcGpAgnTWT7NGx4gjL5gVAdA2jWSiN779nFy",
  "key37": "5WruuFzJgGQpzeY4boAdnKodXGm9HkxKCT7SMuzL32akfCTfsVKfRJrb2zTBTTSJtXtABFCRJRwxepMHcwo8rwyN",
  "key38": "5nHkWczK4q5A8XaHz16Bq6YT2jUMWrVLQFSyttfDFyxANMhzUGnE28arSxXkicY4nBjW4Wx5MJ26qoXfD17LSBfL",
  "key39": "5P7K6AmSvuLLbrMyx6MinjhzVPmbohawGqXe2xnjDw9PGbxcjhV28CKYdDkoLqyCKs58foYhaWf4N11G4bnjTnKs",
  "key40": "3Y1NwRMnW2V7S99qHXSwmtH438UAp7wUwa19EVD6MvCxnXQsnD2vqvoHvbeGoDKM3TyUUVqvBERzmri3wx8JqDU5",
  "key41": "48HBzuep4Lx4kiGe9egKyV5EAGZbTss7ghtQkfSreYcuT67TRaiWfbys6HwveXoaThhXSJfo772NXMWfY3patfc4"
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
