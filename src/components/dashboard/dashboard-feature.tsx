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
    "36Ffycp6kmLktnyWJjbJS1htVaj6wmRXAmfSFu4iT6tJL2Faztd4qrCCggqyhPBFTL4iAbEYAY2TLwWmzyJtLZXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7tJ3n3j2o8ukDNpnUdYoH2szNggJW1PZjyo1PDpzZyx5tL8VcrPCBzvmRi7K3KwwmjKnKasEHQxJSYVNE6EzfSy",
  "key1": "5WvtkVA6cuDpGvaYDRXnmWzdVNpiQnYaSRFUS3Svfcxw9dKwwvVfzMPGUVDLzogQ9t48Dtw5q77bDiWmVYzvP35u",
  "key2": "4ZvKKyPw2e5ctJwxw45AeEBiaNEY5bjSRUT16UsyNcxY6x35GWyHbS9KvpdUriZrPiXb7KWWiRU8NaU7cjsbm1cN",
  "key3": "2e4J52c5h5C8KicphyeGhQTkACeiofUrf2Jh4P8Vs8AvU6TCLZSqTAFMXDRthgDwSLAAeasHsB3kuxWrJX7svpo9",
  "key4": "pNfDSSpgpsXZ5GwkxoZL1uhBLf67r6NS919PcfXU5B9GAEDfLTHZh5GH3wCHCABkJw94dsNeqnAhP5apQDeoA7g",
  "key5": "4WSAiz8X5joBRkHih5vM5fHtX9noYVEywRn37g5HYnQMpjvJY8fgWeB3xy9giZCezmkKyEWmznwSTtTrs5Pjj61q",
  "key6": "L5NNdo6dddmrHnwXuxYuhtX8cYLZWXkpf6XYpdkLNjt7Tij3fTDVUZSKEMQiS1CwBV8MdBGSmE48AhAzPfeK8sU",
  "key7": "491Km6CfnSRKgHtQqZf3tcqynjUD4ymj73Pi9pT8PK6eGYGa7Hiy6YptgCXV1LYGJmMRR5dTHKSuBTabwZHDn6SR",
  "key8": "5t97WFa2YDA36zogpKQcXCAJ2NWWYcteFR3DBArzHYSW2p61e9da5DaJqhuf3dS39yYMHq8g3yjPaSx3cGdMszbs",
  "key9": "53cLkHEHy6b94zkz7qYDsodmv2bYzttuoWH6S8wesoL8jEerrhh2cjB8RLTeemExuc1miDaiLYavS8ugntHycqcz",
  "key10": "2UjX3DTyYGhT1v9rGix3q1JvXyRFmzShHWyi3aRSAak8Pzz1cBL3c16vRCuDA3omNcRP5kEK76vkwX246fX2txZo",
  "key11": "3PH1gvsMgxp8oUnkvtwyA3F1dPrQmSwZ75eEywSeekg1EopTRFSrcBgRVm1CDm5HWRgXFae5xp8sWPhxde7trLv6",
  "key12": "3AushxRFH9sT5ACLwag6QnkfbdJ3q8FgJD9krhAc5gVZYdfx7L75EDM2zWbZEy6H9gHGaLpFJpDJLXNzmVPzKbs9",
  "key13": "3BoNnrugNtHKpx2n7mKkmaoN4AQmzn88yz1WioUB11wwzLCCkHQGjzM4HKcYGGMKptCJRqw448UUEujgwJDMemBj",
  "key14": "3PMKT8fH2HTgiCStk7ryiWE5demAuWpygMGcEiEJaUPXmiB9EmvcVtdFnHFFRTZWtkU94ZYYCFe2eEbdHwzosXZv",
  "key15": "c8tUorDwm8fDyPyYZU46eN8B3JNdwBmAnPVZuwqfzNxapp98CAcjqoJGDPqtezxVgE818RCTxLV7oaY1bbAeHCN",
  "key16": "3NfSKoFgDxWNbbAeagFiPHLxUmLGYdr1JWzArgxguMVhXm7dAs9PvoAV9QscuM5FN5gXkZjJfWvMaKBrzm7hjZww",
  "key17": "2vBS6oUtE1EbMWbSTT1r2zrWRzHaAiLtpALCaNbaoStWnQkJv8qtBgaXVfnN7mcEK1Q3LLPmwh5StQu1rdmRd2kB",
  "key18": "4y2FAAf2qEptJWezP88aqKk6sWG3Cwtj1wWYMsEzhdks4Q9JVKGnB4GzJrQHeGY9FUArAiS72nYEAKXn9PADAczV",
  "key19": "34fTeKwnHzMWKDoKTKKMebYkvw1rs9K25HVvYPQTVDoRZMHFHz3d3iYJ4iCFrdBBZUjYcyyz2b1eUr9X9hyusqqm",
  "key20": "4aUtXcYAuf68TBoiFxLtMrNPSMnKSz4ngpZS9CL9aNWaogUZLVEFfj1Zo9Z7sdvLzfLJuxoWEuEEo9FmwiDCnWUn",
  "key21": "57EvLnoUUQbpBC8cm5pzmzmfh5zoX8W8FpuFp8aYf8J1QDnVA6uX3YN9jPDz2xo4vMNoW4ntTLVBLEAWQAh41X1a",
  "key22": "54zsPU3PctQzHtH5ydEtJLPLX8NrkjmPxovULbd5YZ8JCdDyHoTpiMJPHW5TeApUYqbYfza9BCrQ2weXKAiSF7P9",
  "key23": "6rMp5X2wPusC6AcawmPogLTC8fgboxcWsNSy9JqyhUzoSCn4b3Wwev1odZwS7uRs8SG7axBZPtN7FQghAS7j8UK",
  "key24": "3r4H2T4fYvHG643Y47r8idTDuHqLRLG3xkouFCKpjG2eqeKgwDBhfUAdJPGMHgnR3A7dV8wWCgvitHBdivYGYVHa",
  "key25": "5VJZky4JcKoTQJok1mxJKVrC7CMPqZsU1wGWuzLL5tBBWkgcDnEgR7cWrqbsWvavDeZRUMH9rmszmFL3iBK2M7yp",
  "key26": "2phFGuHhkXBjCwiQnsBgTRb9vLqa8SBuSqetvc3yTJV8cpT2pkgxXHc1SQnBd64J1UWCdePy89MmXfHhTfdPveF6",
  "key27": "5AQauSewsGdEoTbCuuZNVtWhMZq4GGyUCwfuVAS9yZMhhMMFnbTwZbvhnjkgBKkNUUyv2BfXRLvt4b61H1a17Kzb",
  "key28": "51Z6X5wt5839YiRbwe26xLo61jhz1bv3YR9rq7FwVqofJ3SNrJYrx4Rg88XjYD21kA9PRgVigVvWFM2g49P1rCUN",
  "key29": "5MXUxbKcTAmoxdKmoVrFU3Qbp4eeN9WNCU6TsFkomRZFEAYTvT1A3ba68YrxXdzrmVJmNsjsj3F977JsoUXQzfRk",
  "key30": "3JqdwSTbSd7X2uULscKtPvC8FnotGkQWAW5AGUXqd2deVgampfWKkn7ed6U1eEJJ5MEzdUh81YHsdbsfHgjcr1sV",
  "key31": "65DTp9DywzcoqUPSPVCoG5FETqruwDrPi1K44wXJN3enGF2i1KeJtKGHF6WydVx6JesE225bMLUMeG3cE93R6aw2",
  "key32": "5UQoZtnEk1ePDr17XrmZsMespHwwcreYrGrLmDQ7qZ8VszsMoFoP97WyBhZVi4k2qKiDVjb4FrHkDr1LZdwND6he",
  "key33": "5pcKfQ1AmQ1pCQ81ApAdrVxjd9zeWQKXWqfZpp6HUp1kKS2eAKacVJXHR9STnFhD7PMfdNoJoH6QaUG3LNyxFwqV",
  "key34": "4BE2a6abvU5td3v2KJ9gpHQ1h6HHcdXQiDfbV6LYPaRqy1oW9LFgjwTzrQCFiX6ih32kBU2jcV78DKgMJRNwC6xo",
  "key35": "2EReYnR98R2RKKjh9jzBW13xZT3cb7o2xam54jT4phaQoztqZS4vkiV9LV4Ln34vUFb4nYuiWZ3UbaCXeW55yYNq",
  "key36": "4STsDcNSGQwhda5rnYRT7X4DYgiwjuEHiLxZptEq7yjQ5BMvXf2Rki8JWkWJK7YVxvrSYsRuZgNGah6cYphQJrNp",
  "key37": "5FAqhRenDQi5u1n9YBeAUhn4vzWMovacZp2Z6Nv3bYD884aLd1GHL6Se8y5fEaqQv8NUdZBg62GcUrtiSoPW2yJX",
  "key38": "4shbZyPTEqHSLwP4H2VrkGiMy2rWYyybhnQPAeCdTDbTvk5gmDictX3iD4FVNPGASLvRPJLgEphG4Aw6zyRwMecp"
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
