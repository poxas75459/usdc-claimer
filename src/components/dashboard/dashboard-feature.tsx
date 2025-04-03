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
    "2VhYC8G7Z71ME1p6sEGuoAvAeFxystCy6HqdpDr3Hsc7cfetiijcqChCwqf5uKXZdSQfxwC4ScUJe2csYbzKgq9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WtoWDB8jdWZQ8np3RVhhBYzFtHsqJSuH74YyziPw23xyjaYyvhp3NfB9Uoog9iCAqFgr5bFo3aTX9tXJJKiPpm",
  "key1": "2NPBHNC2ZKMNEXq25JVZkEQXL3WgtQGiFH6aJQiWYPNRCBwLo9kT2rKHoXpyywjZkP2n29gg9fA6UoQeNeMxE915",
  "key2": "513S96KTvuQPAqsBXrWeZ9gFca8jZ8BbidfHdkvPRbBJDSJkSrXSFYNCouTgzGYDSomrTuGam9TpV3fLbrgHjjoZ",
  "key3": "4Lf8UhQpiwDeBM1sfAkzhsfdKYpL4Fqi96AQeBsmKYWP9ys32s2B7PrmtAs4XMFv8NkAoUK1kuXhkuYFfGeaDCz2",
  "key4": "22emfaZnkD9apG21xMoq9Did9hBnptdj31oDHW9YWbK1c1vcuGcoT9mJmf8R32xpBJfmZT9He9fakJcGoACKy8T3",
  "key5": "vuKiFpTBuH4bAMRkqpScLyUG9yCmgxxZQfCLWVr3JKmL8uesSoyVhRVQkFhJK3k3Bn45ub82jKKtLcg6dpMo444",
  "key6": "3CFxiRwjtPezgSWRRmdhgQWif4ZgBngzVsZjZ9xTF65qSfZGVKgAaqQMF8RrWTuoHyCzQK3CEKd1MXvMbA4kdHR4",
  "key7": "SLyd5mLN1rdatRAyWeDHWCrPtWwgnCsyMuPZD39UJigpvXfuvHH7CxTLjpsFFEE2vZeZTR8RXPJerSVvkMLo7BL",
  "key8": "4ayD7xxb7KDuYRaB84LVFQT4txEkzSBAnfG4LBR7fWLZYLmU6nmFabE9bXUfSwB8JxursRLpViCNyaSkDTrRLXk7",
  "key9": "3dEsPzJmHHKb1QtDVQ6pTgVgBDedt7taVjefDdvPXwoCSAcAbTPoAvmXt3Wzg3xKy2MR9zcvicjenrRiwEws6XcZ",
  "key10": "TcANMPkmCQVrMaz1479jpqyYSqKdXDQvM6XFjnzymebPADpVypjAxH3NYUkP7bVx2npbmyWZWbXbGLfBiKBKGgw",
  "key11": "33HfpexENX7jVG9LsScLsAUhB2PBsHTVkJduP6XKm3eykbUC7Tr63YUkx1cZ1pcTupfiLFH4X6jTxVXT1ddJQvVw",
  "key12": "4hacB4gc2DQBL4cE7iJdFzudikP47vr264DLakuhpjjnfwB5a5kHfTuHg13xwZhxBDMQAp4qQh3Nijvejmo1cpqy",
  "key13": "2Uo6AzLh6JTotLfUF3aXGacYjUUTgXGSWRP2B3VGLefdFPZzsPQv7k3CByn1rxhMRToT4PmHzABZATwtvQquFghd",
  "key14": "3oL1DKE6TuMsd96obZSD9fLK7Ucf29j8qKHg2A4TLuoZxtM59pfB2wCeDwf2NCL7Z4NPxB8Z9zRcVvibNQnmLLuE",
  "key15": "5bn6KkFKqyRHQqod3jgSpB9HBcWDHHvNPm7VLbx5A8cT3GfHn3Mi6cVswtXUvg2qFB35btYUmTE8YBGdKBRGYSux",
  "key16": "3MH5c64FCEXgd6GSFH8j23s7DcoL5RmwoQRqicKRhv7eskUxwrZ9xNjB5G18DLdr4Tass1ojfyrmd1C3SkDNCnJp",
  "key17": "2BanzCgNnjku8FR4WkzojaM6hDTCeDMUYitD36be5yedpMmeGt7t6croDADpQiiiraTwCYm4kbCKFMopRGhRRwtc",
  "key18": "2W79NnGVfiPbPMnBhvwzPBYi6hpx4Dy7HPvDyZb8eYJadnLs23rf5VHC738xW8eg6dNDBAgWuYGy2E5gD4hTVc4Z",
  "key19": "Er3X473u8SSMt1fjoNhpLzkCsCbbrvzbUTi4VU44CJN4ait8GT8pK9TKaD2yacHQHPoegCJciajA2JY3JGDH9eP",
  "key20": "VK7hhCVGY2NH79EjcBo5wEq8KiWhkvGNouK44FxQtHpaNfgMcBUshUFWRHwmhFGPHgrbC8e7F2E78W4b7SWszSn",
  "key21": "qWqKY9q23weUmbfw9PTwvmKJRXEiCHnYyc3DXmXm77HSLWoJ53ex1YA35iuoDpRgmYPBDDDy8f3N6FdFqLgod18",
  "key22": "c2v3DfXWjYVxqUa6E1eFNzWvmxLZ73CHuLi6RfdQgYiQrsRREU6ELQNbXGFHeBkXEPQ1RrrehjpA3KjAGQzG6CT",
  "key23": "2WqzFNJHAqNni1V548Dxie9Nv2CpzmotbM2g6LgCdQNaJaEUYzzRkVPqGAD25h2rTDmvgaoRCyeEodWHAHDa7Jim",
  "key24": "3W5QD44Lnw1SHXGrYpFadcAeu3BVBn5HBCpqgkhjEUibTQkhoDP1Z2kinX6ZvFmuD3nRgLypXLDqMqM4fR7wiJS",
  "key25": "3dugVEmkrEkYeaCdUanfPZatvgd6hwnXBy2tSviphc8rVYxFV1VpPgUCeRaXbUoX2X9WKKQz6yGEh9qo4Vm6sZZv",
  "key26": "4d4qD4wugsiEQQjwzxnLZ7CqasW3fd3Lj4Ls7FKhvVFZiLqAGdQFAsA1EcbzRkyevTH45zES9BxXYLEoz8rVZD3j",
  "key27": "5Xy3uWoZejPYxoKoJrEUqzig12Rugqcxpj93XBCNTk6xh9iFAET47yRUv3jbMqEsPi6rhgvx8DJVayGWoCfxfWTg",
  "key28": "4uxcdECiybJa4pKSFf6zJgFe2jkEBKgcqagmiGkR2E6FLC5mp8UM8NSSuEuECx5XR1CAE3W7fmUMo85pq8AFy5ua",
  "key29": "3Zn4LQamxYzF4cQTTo88XzCZQJaCrkrLHohjKRH8jwSjLHV69mmmye3YR2eCnYxEQs2WcgBJN6EYKLahsVB5Xe4t",
  "key30": "9kE9ugZfVQaHUKertCg1RQg78Ltb26xycNg2414AeoscMHqFeRLkCfy8fJzx3WVuN87KSKZhQ4A2a2X997gg9Lx",
  "key31": "mVgFPxNC71tmBWFYD95QmpzYsKRhEHNiBwgn4u3XmekuZHKkfXih4f12gdWtg4X2k7ENeyC6aMPKeTyv6VvhqKQ",
  "key32": "3rJafEsQXL2dW2BYibEtAZefuY1naFvDTXk5zVL3FEAhijqEfFEx4iFKz3a2cdQjSNLUCfYV1e4bYe35H5Est6hE",
  "key33": "4VjarVExKHX1q9XsrzmRvhxaTwW8YsEcCjuGGDUJyQMxUirntAPkomz7uxGfKYn3PoXmB42WMVb6uF8eBNJ2Xxb5",
  "key34": "KY7LH69H6RuUmtwaSaxtpKoFqghBwhdpxobgtj14YDH35kcbrx5YpEV3EA2XgNJFiH24oY5oEAYqsyKM3ptQtdq",
  "key35": "4gwYtMtr5NEbzvHcwBTZkxHvX4GJZUDAJ9BjixUsxXFeik1MW8DmHhgPcjN1BjpBkKTjkwaWQH76eZRUbYAsh67B",
  "key36": "24rvZ4qCLcG2eXMjeuNZzTqyoQNwCib74RRGKfzAkrcPV6dtB6Ryj79uHUWHTxfhqpzdGbma228vAG6b3DKod6c9",
  "key37": "5B6EaY6zMm5wpUHXgZcrS1GqNVeZhGrAJv3eYHEABCdumejCu1vHKLBPB1CpTxknP24XFmZzqHDHyHk81mEX7TcF",
  "key38": "4LVj7mGBESFH2CiXwrAq3at2GnwrD86Rnum5AmbHUQ8RkZ1Nc7xoWNer8YnG8mjduMSdrsikhnmEjdYUdb6HtGuf",
  "key39": "44oEszH9JdNME6FDcRByBchWWXuGkYrN15jAQE6it9cu47ap1PFu5jtqioN4BZuDi4PqoG1azd1kJ63joWr5uW9J",
  "key40": "61xZezBmHje5KhAcLQK42pwuFUcnHYN6ANAHMHc2y29iwPA6TAcQKYFsziyqUcDz2KJ49ASypXexKcp4B73Crxvt",
  "key41": "2xN3R2zkSk9Xxx76hswWbZ9Ey6WPUUen1e8LkBigrCgdaxoLpS4izrMYzrSoUwufwwhLCWx7d9DQmCoTxM36idfD",
  "key42": "WfhX1eRtNpAemg3sH74MXJHiaUwQNFZ7vmijyrhLYjDykMkhdYVKszbxJzw11NwzMePyvLgcP5cEqBTXPTQMZM4",
  "key43": "4bvnx2oqzNJPj4iU23UgbSJHaMNyGbsRgqzrGdQx9xVbpfA4ZRN55mg9bePtecR321ZuNpHrD4GGVRMbo49AJWfe",
  "key44": "AWJNqP4rEmTwY3xLcvnYpznB9Ur5f6mtrDYLBDGu93Vj8eenzxVVuYTWPVVUceuUfenRQqEdR5zzKMSNeMLFCMa"
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
