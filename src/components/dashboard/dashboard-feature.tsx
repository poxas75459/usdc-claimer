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
    "3VCGcMBuJ6cuWios7pQ1Be3Y2wFbPYYx8FDLT2qdyF4BUvuzEVJzsCdWWUet3oG1SX5McTxxUrcCwGrSuVFG6j2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xuD7ihkpmXyYoWwkDVNaLDhjN1wXU7mTzmm9mr2jYnvRv1XS83r5YYgvVigM7VnyRwZgfMGxEpDFciSFWubiCBj",
  "key1": "uBF6QivwCMjv7BoAq2rqWYxBWpmJnrHHYry8JJ5Zj6jXiKYsWtr3nbdzdo6gTZNpGtRosRnuaF4ghTA4zbVYdvu",
  "key2": "2DYpx2DKgxv24LYasWXsvtNA1m2fPXqyWfpC3cXmRs76bQ4oonQZEwyLbLprGoKz6csUGLsrQo7LCYTUMRUvzCq4",
  "key3": "5GvpcnSWNkg7QfHt6BQQCaCyasEp9MkLL8Q51JQP39RrqjzFFCjDVVwPVUi5yKSZ3N6cp5wxVXxCPa2e8LQdEnvT",
  "key4": "2WeBCxxybpWNRBkCJ9vPdNkebWj8uA6k2kuwjGQxa87XHcsR7pAYbH96VZLbje8Mu66ceFiWPoF5Gs357tDdmGNK",
  "key5": "2jUdD6TWt23BqEVUprwZiJLKXBopW2QNHadpbyXQfR5dsFo4AxGP6agNQrWhSDjsfUC7wC8yaNdBvezC4wC5GQJK",
  "key6": "YssNiRFNBmAde5cpUKsToDjYVTgHdWvoacYdGR4RccT8BukVWN5FPLjbUjxXkGUtwerMmKJa1EYXx93toULr1A3",
  "key7": "31WJ9hApG55HWwhJGJmabDEYUN6oa6xpvix9ZZwtjaimydoNnVC4ithYEpVxTdtMVrSBpyXjbokNi1KCpTdsx8Ah",
  "key8": "3jh4Sq6sEW4YFseFTjr7gZSDwPiyacC8uJ2S2gHQdLwMwpmF2TDczKwaxyWpMFYztT3xCGaLfB77PUw98qkDHXdN",
  "key9": "4q5K71XEgD5T6NWRViR8joGqau3q7C1vW2KmdQFS8vAgKyE4rU7qHgf2aY2mtGqh2hgv929muk9HW4KYdGuGKWbU",
  "key10": "3LZzq7Z4hj9aLifftwk4uPa5TQUYDo1aMT4qNK8ieJzgasSqSgk7mfmacjoTCs6bdofkukf45BHJTA7w1ZEYA3ge",
  "key11": "4j8qPnJDCuY3awJXDoyhj14waKQ21WNxVxh9c5XFfgmwdVm5xH9rKU4L159sRNMCrKGByKmv6JD9mLTDKzfMT1PS",
  "key12": "48321wDPhdRs1CAjufwPd8XKaCFHzgTBKoexrqcAVxytguFWhnqGMD9FRmqEJigBjo6Ljkc9ecWV1QdPjJADrKpq",
  "key13": "5DCjEE9Njk1g2ofMjQ87DkpFBPU4dPrVRmHUmLv9JryQsNS9jy8nRFZirMVWiKjHJXPbaEArZp5aoyHshRmq3oNM",
  "key14": "3pwnzndGQ12G2sPCTi4grBCxeBGt9b6rEF7Cc2EKwZjcSspPb7TTtg9nHesYefzwRCr4KzGaYGSmLzPmqndeu1Jv",
  "key15": "NThkoSSVbc6HoKvQYUpdnCPEtrwBgHEQXXFJBisBnrsUqaj7bHfJEQhXoE68tibUqpSPmn8hMjtu7wdyDDKGyKE",
  "key16": "9JnCcNaAmcogiySofLTyNyvFcFvy8Vg437L7WFWK4g47dQb4cziP3WtsbFHe8WZfiRXPqrLApfNVQ5mrgSoP7W5",
  "key17": "eFReGeCn5XU2waXLtB6kiAZ7pW5413iVEksrzLSBAP8rmvg2VUAoETYbWYRNGdvXhv1PeiFG7xxSaCtCzB3KpCP",
  "key18": "mQMvNv8NWCD3uMFQRfYBShA4gkCmsUNFw7nViZVGdBto3im4gzx5dWsfLZhjs65KPErGtiPpd6kHgBhf9FJtybQ",
  "key19": "5A712vNKdyzUWk61iKnZgcCYSsE3fzYtwWizu9crpshfiaf6ZVuKvJGRC9yZ7XaH6yPqzAoF6d32QXWrhh7jn6sA",
  "key20": "57mFN99o6mXKzXnhjTd3oSyVqxNLchyvBqisX4CACD65oww1NBJw7wk3EG6JN9KAviLGxWMyBALgwkrdoVYtfvbA",
  "key21": "taHFpDoAjtMVskVAMjHrfJ1HHzMarFRya268wGG8bJ2znvSpgs8ChGojzAzNr52bdPGnzGfW46vPzPHMugofymR",
  "key22": "5WxnKqx8a4PuQMpxLFstqAeuhP6WnMPWo1xUBY1h2zqTwRyek3DPyZd7ZjnacKjaPY4kb5SkVmyeYwP1aMPso35x",
  "key23": "5U7nTM6YaFitrzx3tWj9329K74PLisMKvak4kD1GmQq15yWVZQwbmbJ4yTFhBSejEaNDn9sJHjpPhUBJ1iEgarE2",
  "key24": "3bJjQWEc7Ddsb5ztuDJa7RkDYB8a6CixRWqXwtLUTGh2RVJATqWisQUta5GWcyvvPCyVYmBPRnyAVCVahpzPFwxm",
  "key25": "2cu8o9V6HXMizVuBMNzrWKNZnCstqe2puDR2Ls1UFJ6x2dFk3Eep3KDGmZbeaEqUfmNLy8NMCAYGbcGX4QvRx7DA",
  "key26": "5DRbVeV2fkrLTJH72sH3iP6ZZHe2KGGYFFke8DnfLAmDDgESoqgs6xTTXdpR38E3mkAUvByBhdFHhYYbq1uj5dvh",
  "key27": "343aWqyx1DdyARjmcbJrgJ8wjTcfqWC1RvVqDd1xbBdy8BouxeAqmethRTbMxAyc6CkVKre93DqdfJhyd6U6ouJg",
  "key28": "26B75rLamhD55w7V4TWqpZNxNUPWGsjq3QA1Kum1Rrnqwq53KP69ysskcMvysbR5hCFxaVPbfQAWDJGX71uH1tLf",
  "key29": "2VwyboePa1SNrWBTbP5iG261ywBQiiCL199xpwRAw1GQjQ5PkNGDLwjWsGaKYhDf8fpFDizWeyrLuN3D6LTM12zJ",
  "key30": "2sqNJaiJQDfhESvqGBajYWj8tuxKM8Wxk2Vhc3KBecT1V2NnF8BnQD6upUiMhhkMsoxhVU5NRd3eCkWcQKevsGHr",
  "key31": "eW2x9YMEiaB7q8ew4FffZF8Ftgtax3zhQPR58nJNy2ddGEsG1yFQ8Lr4P2wR5KPuh88DH8HuasqRw9czqgry4Br",
  "key32": "5UdM5oF3Jj6jULG9gGLMxvd8qTyEhrPzjCEwhHWJ3ehSTfo5UfCvMpEZm6NqqkggpN7tM2HYgVRsKGJJF6WufcAU",
  "key33": "3VBajMPoMhVSAkKzRkSgmBKZvGzdBKEV2oNLfQYGdsv45px1vXVApX7BhzkjNhd1y7R2m9nEAmX2HP3u3y2zdAgy",
  "key34": "2MxZDQGY5mKqpTLSjh5f8mYPjPKeQxKZqssgUYVkgCY1PHpk3kaLuMT8FzHxEYzF6TZKshajWATwbmyeXaE7JBb4",
  "key35": "2u5ehth2nHz7yqbEiVi3PsPuvJQZyhM8ccjhhoWPLaHZCEeDx9ERe6p19cQQzub5WL2pWFqrM7BSAmAnXWjqKkWs",
  "key36": "4WVmWdwuRN4SSecCMgaGGcSSQvsrigYaSDdVyu5Kwv6emRB3BT5S9PG8vmPWDcmfL9jCRLKSnHm57PPT2TyWtPx2",
  "key37": "N95qLQiV23wbURCp4mLodY9eBadxcVjig72jVdgzoWkGKrhavZFeVrYb1egExPuoLtD7XemEs1Ui9NzmEaZfgP8",
  "key38": "2NQABeXNhHmnhiznLEcgtHKHG3jJhBznv9MnwdSqb9NaRDWHsGttRPvTkhemSa85XkMCzyFvMZ9TRjmGQGvXkjLt",
  "key39": "QiP97XbjRELELg3Nrq1rwT6oZo2gZbN9tiCWNA4xB2LVoFMxkfwTzW6GncAt9DpqCLZS82JKsYwJ6dMMwXd9GiC",
  "key40": "55ghHEP4MfYkpwS5yX3n24ThQxQqYDquM4iXsZEUFF4qyLkmeBh46b74HW5uCrJHQmiRQ1cVnyh12g5sxYsePjG8",
  "key41": "5FaBR11VXQj4p5Ty79WS7b5gqRuW44qv8nhd85BYXZzXYkXqKfZWUrFtFE2XcESyr22SpXFNdDnZLAphhHSzFKuy"
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
