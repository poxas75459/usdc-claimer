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
    "4A6mg2sviHke75pdKrBoXUehmfJLZaEDn4VqbaaQtJ7G3km6jQiw9dHoBUFRZdgMpJVQegitJJTTALx9kbWkDxvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yAVihx4Vu7LXL7tTMCA53yZJqN2M5upzJSCEBKfm1cwPkx281zAKUqonDnBZ2gvH25YeSpPPDyTNv17dNDn2LT3",
  "key1": "4vMZAPqXDFeU22B5o83XTtjemVcPtT9wJ5VLMKER6DMS5nZuVjjrE2cfuERTeawn6oCPRSG1j3P4iibvRTK17q6t",
  "key2": "2Ab5tMfAduM5NUz1itTX43s7BzzaieRL91eDj8au58chGgtUy4VDtNjBcBjYV7CVg6nGQS5v6j4PF5qvjENiGnAd",
  "key3": "K6oasfufg2spU9t1J8a1Qy1vCAoHV8xYSkBHr4U4oBAKvvTkuxL38u9LHS8jg4KdkEXLn3t5ZdeeoBGSKaQSVag",
  "key4": "3AH5epK9ziTaCNC6F1fLAGQ82V1NpeDWLHefTuwc8jQnFRdTez8FMHjFw45KpsVDKzG3V8DZXhkDHoQcYF7p3uFG",
  "key5": "DcyntMrzgsdEPAPKQv1ABkK5XjB8WfFQNA2UiLzC9uWqSA45QNaSmUN14FtroXuw7hCYSoEx8sPiijS7oDEw4K5",
  "key6": "aBeXpTqdxPNd6E41Avr1y9tY1bAfZPXtmreWrhRZpspDMUry9PNPXV7iKtNojP7b2bYpmtRXpZJHZunqTShcRnp",
  "key7": "2XafdSocLxZ6zi1JC2hfto7kkG5ywvAF4sBRW8Tz2stboRZJSSoGdjVgr6S48P85msPQtAYo1TMNGq3WfJJnSfJY",
  "key8": "2JNAbkPaMc7JcQJeConUHSTXLsmWaR4zF9Z6LWvTSyCZUzXAE2rTBwy1UK2fbasaHxnKyUjRhQ1fiB1agZyvBMDP",
  "key9": "3ToDe5PApJvhiXbU3ztX9iCfgf9mEomfG1Lx3DCimC4RKkQpddrPNohtFVYtjpGhEdX8Lxkg6NajuTawi5jGtfZb",
  "key10": "287T1evpDqSa3NsCm3oPkdfjSg21zYbHgFGNuskmstqpTwG72BuWu71983ATXRU3ssqfpm3V4uuqLTmeBogTmtVs",
  "key11": "5xW36NgnrEtwDjuSM3LJmJfgAkjTRfGtuAGG5XgvtZhLpEMts3hiXEsS2AXfSxkCMkGvjFqrg3ycKaEmh4Nvpb9y",
  "key12": "KxPh75kHZvZ4fEixeHZ1oyGSc7mwB9z6UbhJF34PTGtDoMDQas1tjtvcUNosuREbJH6VXsATqhTsK4LVLWm7uuM",
  "key13": "5G3mvQpenZ1p7ApbXBxZwHz2w5JKcMCB1u2jGhH5dE8UPiAYwqf42xwRcyBUitodJKUWEa6AEC6f5izbpDyVK2hE",
  "key14": "2HrXgqYMeDWxtRWGG4Qx8JAMEVZUraJYx5DpMmHQg3ppFa4rihac6WWb6TMsPokLUB3VPup6DWVQyXvoQpiDe5Ti",
  "key15": "3TtTxEGT6BnuskwbihLqby7JbA3C9UQ1m1nEDN4MJz3oKt7aZLsWZ2sUr23WFioHGWtngXrhaQW3oHmvhnTDsCik",
  "key16": "aiYNtyCByjdBvsqp5duyY1VsVstL9Z534jqAMUZESwm69eW3kCnc7hwc8bPJZoJJFZDWE3UKrHtUdRJK6wNn45e",
  "key17": "4YEmuapbQGy9YG5BS4Jz47MdSQRNKRYmZ6ziwoeVprudkvq6TPdwhwRbV5UoJn8qX7jgxjkKwCfDdzXmGghf8Vsf",
  "key18": "5TzHK8bbiGxJ6DwgqWJErM1PDuZ297ty73pjwLcqfgp2yorKsBmw7u4pWAy4SQjf5veJ7txbFnUs5woDpMc2zs9D",
  "key19": "LGWUc25XS8MySzmtakUNkiVzNCuZVe4fECDqwrG15FqgftU3pzsFHpFLAekHZMYCBkWEtC3J6jt9WoNEWR53Ub8",
  "key20": "3pikBqneiWXaEMAHB65E3HNH3qmnQVNgfrycbPxk1SWGrN6WPQ7F8qA4Gncg9A6dB72yKdy6VtxRb5VxUfMuZhnG",
  "key21": "5Lc8rdDTY4EcUx2rByG4UmTLXAt3Cn1UTLx2ZLvgNjxg5f5pyJi5xxBXP7QUQAffSbT4DXQ1KZg9Mw4oF8BKzF7c",
  "key22": "RqoFSUSYFAPg2iFtNHzUgLETBox5eayJrkxq3aE5JzeMiJ5wZKetcWJa78U9Cbj9iujLLsPcA74hqPpunAvHpMF",
  "key23": "2LNdaYvyPuUAU2voyZS8Cf6oQazuDpjS1JZsPfpSZ9yvB5GJ4wSCcxaDaMZ8nvR3cQ3q4k1dazYyUEZZQ3NieeBY",
  "key24": "4AXjwNHnEnvNAzeduA4Vdgy6bavw72KnqJsbeKe37hyAbuo4Ehwm6gQa5BJ7wdFHTdDb9SibDqedEBAkdBYSVP3z",
  "key25": "5JV1jcwXG5TLSEzWusPPUdLjv3dmQnhCZiXE4aXcN6jhgViWMg2YBA5Px4emYkMV85N1W8TYuQx9dbRR9vnu5peo",
  "key26": "4WGorjZZGiZMTfiBNZ8K37f2ytTtLfPJcneaTeT7EzyQRviWFikwZpczvufTbVfRPme5QcZVyBur6AW3qepKfhWy",
  "key27": "zmCXjto2WadcPHCQvK6RTn4j4cHvksackLVwQwADTpQXJy6t9218A4WBLYcZvQks4c9Bo2WbvuVkHnc4qLgYAtF",
  "key28": "5mzpvXMD45PEXssEQ3QriyJPjzCKxR5NbzfQWeLGEZkijKuJyyx5pZfJExvNeKr5KYg3MDJjTG3C2uUo5e7VwkfX",
  "key29": "2XbMP8WW5vHSzxXvx3rn9UqxMMGMUg6jcSmGDMBfLEry2gd8jEUaa993fAKUBUgvKnxsDdFoqu4r7rS3CdwtWsNh",
  "key30": "4ZHCXH9z9Z8fhEPwCkMwWUEVST9oB3rrEHNUHhb1bGfmPV3DvB4dqJnMbX5mwtA6sQLESHVqRZxLYB1XAJjMJThp",
  "key31": "4oTBPv3mQvu1ozDzhghGFwCnHds1psWhfbvPSsJBh6etyKfrt3eWDSUQsR8HXqxBeAApmc5fzSoZdfA8AcABB1FQ",
  "key32": "1feS5BQRk8cftHUmnnq5yPxaTiorK972s9usRVUU4nCrw3rcdErGp86RxA4B1uZsycnL97KcfQnKYTn4qNekcAR",
  "key33": "3yy9EdgssCZuAbaMLJMhPvHxtNJ9GHiY3rkFid2tT2DXbTRHjVSuY9QYxze4vHpEovE9X6K9uFW2hps1YKHUQL1p",
  "key34": "rkrbzKH1DExN95BGXMDU2jJtUNUT9E7Pf1bazgVPuCdNX68pL6Ndo9xXBbuhJVQ97DFyqH5FoJ5ArtsU86BQecY"
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
