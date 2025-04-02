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
    "451SUHkZ4Pw1e46gEwxFVTGeHDjiLreNtv2JjLAye925YppYpyUaTjP7N5D3NvWqbNddc5TGYKRQue8qXtZiBMev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Et8ysqa9q5DRoiGrRUciJx7CBLH5mHuFATxdnUMqP5k3PvBEZb3h7Twmhm2V7eLwqA1iKDMHSWStSomDt8t8Et",
  "key1": "5446HsNri9ngy5X71CZ3z74bELboCEXWXXUo4Yi9ZHGyJ4e6VPeLPL37YujyqncmTVqSmErCzXpXocTwTfjo7goV",
  "key2": "3yzL68DNZFjUf2Ggp5DAcViccRP4xhHk9rbK3ixGnvHYL5DFw3EpEEe5TK1iSqUgtFi2tRQwSyfTVWYVp72fdmmy",
  "key3": "KXwWwHvbviphkUcL6hSmcDCN3XjvqWUyDCySGHSL6WMc24koeepkuV4JCZPGd8bjL5uN3k5DRpuS7LRwMCjiEhV",
  "key4": "38VcSxjFQpKZUAANoiGrPMuczRChs7xuWDa9qbqnhav7yf16DXmrchDjWmAsXgpmMfmzAfp6m7CMsiW56sNxXL23",
  "key5": "25MVSwFVrVdesBTvtETFpaPquNsDWGACxHUPUaHZs7v8gvP7BLfdNpwFiPkm3d1F3nM9tNkio3qE4RBm4RKvjfQN",
  "key6": "j9bMcw1kgZzF1ajUwHnqy5kWnP4oWtBBJLdvAeuvT8cZMLjpUPjUiZfDbWZzz4ppfEZeJuN1RDjNzGT6MpgpgZg",
  "key7": "468V7s1hCUmmv2iaRkous9UEfNM1MdAVYzYdawAV3FR11i25u1VrMScfzFJXQuWszg4pcaHHeKbtfQaWVMRzWhBv",
  "key8": "65XNc44YmRMteJUCEbncS9y9FzByWZ6gFm5sSkHB3W6F6cQ58jYBnZcgX5T95yK63vCj2PyV9eV9e7av62556Rdo",
  "key9": "CSAZrdNRgXca4Sdw5ZLcPttJCjzC93bzjg7G7cLnKJhbEbLKMk1kBKCminHoxiusFyz8btEcKzvHKMndyod6uKW",
  "key10": "5qPNHqd8wJeN5a1D42PPmmzrpwVWjTq7osDuN4bTD1RcStxi4XvVsHrh6nagFNJBA4dGJ7vAoazT3qV8ujdKLEBy",
  "key11": "3CDXvHafZpJWiod9oHyosdsYC78XGgyLao9UBnxj31Xh7s2QFMVEwBRm4eYVWhQaJyetn93AXfUg5ZWdyN5DkoEM",
  "key12": "5e4R7D626KwMRG6ahUY9wJEMx8CF9gfwG1FRN1ibJuZwYJHwAYPsbvHZ9ahpEA2NqGUrGTWTfCZiiY29UWJaCpny",
  "key13": "2qMsRr9zrvFVW5LDnynSVu7hAngHfKBQTGwyAwohea3wx38TKZX7xTm1z5FHkLv5Pr1fJ1bhgpYSXNG3jnFAuZDr",
  "key14": "4PyxfdxDJXJPiQ8qhT7AYmCseyFPBqeDbyZgL7ZvsQq526MBC3upDRtyzK2HB2z7bsFJjimrB7p9KdZ3gkLg9kEd",
  "key15": "3nLJaFz4wXtwSRRhyVQX8EqXbTmCZFppYKx9a3s6EBx7pxWrPDUPaSRKpMMC3U7443CgVis54D8H2opfxpBCUdyZ",
  "key16": "5JfzWw94kY2EZssbqo5767yuFobweeFJw29iWy1e2QYD7Scb4BibjbJmMvyfXaAs7yhKozBa1hRusTeu952CHRb8",
  "key17": "4ktxmoLKxfart2LBLfATos4CLCtsiaV4dEf7FTaNYTXWMhFMStJ6u83nwG1eCBS1c8sGQevR4cxStkLzdFaAt2of",
  "key18": "2gZpS8anHbqoxm2TuyoVhS3oMmuFwdYfzhcEE3XJRTqdKGcUbN1zkYxByW5jf14ciDZVUFgviv13VJ3owebNszuE",
  "key19": "6juNehcDHrF5T8pQJLxZxeehYEVviJzSvaTP5yBA2absyhod6EdgBkyBBYsunSNzkqrrpDDMAVkg7dsEWubwuWU",
  "key20": "5w1WCDyMPrZ8Ce1sv5e9o6kaKTC98d7maTR2YnEi6C9dAAYeQReSJhQebyPndgYgRDGTf5AauQ1we8j27qmHEGBa",
  "key21": "4Sz8yhTm6NgdkSSYrVp1ay7dLv1uhD828fb7DCrRWvPvoDJYDtuHdqYrnxYrmr7Q5bQnDghsT2U5euUjUCUW663o",
  "key22": "4LbE4CdA3zcjdNXTxoMJ2DVk6t3S9ZUdt3G5nHhMthLEeJoeyWZPvtLGV1voYRqtR2uoAxposinktiHEQWcAaR4",
  "key23": "5KkmfqCyVS9nz6Us4Mg3WA3uVjfCTkMVvHCfxnVQnNo5njAt66a6CcY1q2Pd5izuvo3GY4hXJTMo6m6bNVBTDksw",
  "key24": "4Fdy9Sfzcg9knZjVDZfbM2Z8ohSHM1dmfqwmxXwfEYsze6eUzrDHGGPLA8zgTA6P2fDmEvj8spMwy4DMSPLcWX9d",
  "key25": "5r96KJoEHqJg3LPGHSZyrQd91qsTLyfZkLxMBpfgjrVamcefZkb87xCcU7q5u3AW4nut8RTWZdW5tDkW82VxT1B9",
  "key26": "4KEzQ61gjuubUHFmhKihhs7DBLhJh3MNaL2KxHyEi4aC6WA26XQxD2yxVUaEMo3hYP4wQePFtHQXX83rFtq4otLx",
  "key27": "fGMwTDHLxTXmWXdZVGhtEL7spebL3ChNTRo7BmhDaVP71ci4JgQzTCBUJpLQ6NwW38kiedJqzAQ6KecifAdp6a9",
  "key28": "5eYkRp3TxX28uQ5qwYV7iUriAdWARy95WUfGX6oyCgfqabz3DkBvBUg7Yeg21rgC8LpYzrzvjNMrsyMdNwssveph",
  "key29": "3SHrUQ3k4XkYDD6Q8mqmNZvmzGPMCALnbZ47cKKNKWXJc7QZoNcYzYYPXWj8Dst6ZT8TbuSGikWWG9ixzKW1WwBD",
  "key30": "wfY32KdZPUBGDHXoW67NNDnDfTWMBzHc4pfP6Cgi1y6deWMvJuYckbDqzCiYNhR4dv4tKbtbZBFHs4sJJtwNhxu",
  "key31": "2PK5UX6cy6yPVhmqoF69pgahR5Ma7CAbQSgMuH3aWjCHESgNxPUG5Z5CSTDh7UTJ6GGkHzrCNJ15UvLoyDhbkpdy",
  "key32": "4o7mijbpdW57gTFkp2tpsxZx24qwQtamQVZDedJjTYswdHGtJ2jyxpJbo9szU9PuzTJy3PDTuj9pf96bdn1uuNTE",
  "key33": "5kFy49QEGi8R57KRsunY93VuXxsjtZaQQzVFKvuMfzi6bPyh67QR7PUemP89Qtx1f6QoAZRgRfpHxsxHDxfHaSFT",
  "key34": "3utpaRmy3u4eHRMwQZ71ucEpQWQ1axqy42zzfGkqLmweQxqzMPbhoUZrdVz1xP9ivWJY5QvU9wagWoE1nxGAr2YN",
  "key35": "47nY1ZU4ctz4a8RYpjZM2hnQ9YS8ChZJZEtRt1bjYmffeH3naVoy8FwNpV5UdPRgMS5dRb6VjJdiJXJb7A2BXp8v",
  "key36": "LWXUYD1iNDEGXYrafG6SDuMCvs1LPhNkTQJooLhVUBg7Dg3wcamA6XLWnaMFAGDTEeH74UaNXDTxMR4EYqPvUbM",
  "key37": "39ir6pxvpnQx3wgBjE93wzciibFfZiEqhzkGGDE23Ydojq8j58FzLENxWTxi4UVacWuGEgAy9m5yK9MwBwYvQifr",
  "key38": "5BBUKg3UYP47EKgjyyevv493eVW6ispsz3tt4bX66zvQEut68TJJFEYqxnV7wjxdg59EbDWjzvZDGJoVhdBWMYMz"
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
