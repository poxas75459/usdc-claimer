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
    "FUi2SjUxBdFgn86RJSMNj3XA3DCwh6HCc1nDufsusbb2tGju8BJ3oeDjVF1VXpau6rcWVWF6YXPTeGuKn5XEqxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oHfyDKoMmXh5N5NeCsfgK6a34dM3kikygkkTwV7bPfV7gS6tvKgE5HsKUct7qEivvKMbt9tSWiBB34wdaPBTAuZ",
  "key1": "5Du8RApNdirtULa9qABu4sYzAyPMuV9jj8FswG4Wf5B1xRsbFPbeLMRe5hCFWYAjZyPcsrVuDLUvNeZFdLKVNf2C",
  "key2": "2AyisKiycf85Z8Nph8uKrbfvU8qCVB8g2YeXwZSsBBXhQrYqZCXwoo6Zd4TPDuCU3qpyG7kg6Z5cKpTUsTwtDCM6",
  "key3": "3vdixQHWcLeEWT8vD6G6FG8QuBdEKxvRHXX67TjtXkPByLdG4SLKeFQs7Ss9JLfbyR53tW8NE1jV6TcHHYEQPzuP",
  "key4": "2LW6sSNphde52uVsfpnH3aSt1aZq4BWb8Aw2NmkDeLwuFVza5DRsCwpEWj41kWjU3piL4n279RvE1YaVAW1tYuoV",
  "key5": "224xocfQQbV3evKNS44zxYYE7qnkHEysrMksaexexKoeW5LSPHh5rrPuBJYPd3gMyEsFrZ4U5dYZSLwoS9FRH7nr",
  "key6": "4GKvdyzzK6HyFE2efXkKDWyAXMAdSQyzz9aJYmcdaXw9ZK19uG72PLZ22CYBAk5wvNYm7gXXXFBfLphoxXeeLTsC",
  "key7": "5JfGN4zFvVuicAV66FbsLST52c4JwaJ8KAKcN9PJR3iw5FWchrGY2G2Vr1NyEMjGLJ3KzTk79zvcxAV4SkrJnLc5",
  "key8": "yeErEicBww2jgKzcj8cYgyZfF2TpVRDiTQF6FtxNtCMciqf4GwF4h4QmE4Ji8cPRiGChJ1STQd98K7Ynh5a4Xyq",
  "key9": "5j39DCcyU46LHeZfyxDjvwtsoPNu9d3gXB5A7GxXeJbJXwN75tx4To2uZtFpvRVmkr59i2GAaNXZwVSeMeMfgRPw",
  "key10": "3g5Ewc5ZbmjcmTMvxQHqsGbDZBayDYe8k7sucPEB6j3QqVdKeL5xCfcyepQfxjJ4v7zD3soP8sH88yRab38qk6wY",
  "key11": "47bi5mAFYmAWkvShvWJvGxhXhW9NznRvA1TgKYoWzxbKHGF9BawbAbyY5n1EqxHLCtWLKbvyXHGny7ggrbRLyURH",
  "key12": "QZ4A6iB6qW9VXbS4NwGgJfHy5KbnFgkhxY7ehMa522eVvr1oD4ZuXsDogEnHaywLtqNiizPK6Ay5UCHxV5VcMay",
  "key13": "2kXDT6vdeegAE75Rstq1jydzjkfT1MQXBpfirkjBdxSEUgi4jgjAWp5bhzg4FbJ5gbzEgoTrH4Pg2MJnDhVnuCjD",
  "key14": "2prAzFxMrmXHqtQii3A2eCZgnKazeGfR2TGkZxeQtRoN4BVvavndoW5jyUBuknTCYMBypvDw1twohvKWcPRjEcdk",
  "key15": "2gHj8VCh1cfFyMQtgiBur1VrEUBwmPPsPUB15rt6LXfRYkKSLCJVBdhsgzTD3JACNEDkgHpdmr5ebKuo4BNooXwh",
  "key16": "4ncyavf3Ra6oRxVCW9ytfrpZd2DKa9UCzbx2nGHLsLohaWXsnnfJxnt6eunePwHSvyvocoEsoanpT3mqvytLCF38",
  "key17": "4sgVxBNXLvbfVjN8scVX5mRHDdcfZUyg9sXbzc99ZKUcYMRcG18qhUuAzHRpGzfHiw4wCG4ANUsmnJVT2YUah6uC",
  "key18": "5Qya6kLBEtbNUNo66uPGdSDZEETrGGPaMy9F3L1rodTuDHXXiHs3wjq1bPRn5DSpiXwq144vgtCnK1FBQUJnVYwf",
  "key19": "57JVAAi4tAAhc2qGY52rmr1ixApQJbYNrXD5Xvwcw3saCjT1jS9PR23BcuNAe1rwjKWWYeKkpudVruj8C8YMe8CL",
  "key20": "5m53rexnLPrVwC8bBbdnnVsN3f8kU231xtSAZAYdR4eeypM5GKyjTH3dCMtf4BfBSL9ELb6b1NGqhM8ETtoPTox8",
  "key21": "2omdNtUbi298SmGnsbJCG2T1KZbXPeNXauf1r9CLxuyXVXRWkevEKTtGzLHZw9Mwuij5r6grK6Wng5YY2AWnhHj9",
  "key22": "3oSvXTKKqCA5YjsGQK7hjqufEkLa9qT8Pprtxhqau6xFZmKZP2soHH9iuHiUwpoBnAFmjsFQFFyksakHG4FYM5N6",
  "key23": "42YxQ5Ch2LHXtbVwnAD6eBqpoztmVYxHi6sDYjiaDBi8wpWW1o1dmjvFyFg6k4BqPHjWZ3xcQDaPiSW1bL57T6Gw",
  "key24": "4NBSsi6mqGLnusXSaQs8K1KKMnEXuxkU18vVhW4augaZL3yJH9rLnWxCmRRyMWRUfiXRDtNbEAHcWWZmLUAD8MNJ",
  "key25": "211rfZfgvti7PhHgHoiaHzLVSSXWtfsfhKTe57KyZVaPDJEJYSuR4B5fy8B5T1TrqvVTq7LwgBo5qLQKT3hjtvyg",
  "key26": "a7nWADsLiotg1XULrrMti12T4qzTiDjAC946VhLCEpEmuPpUTEvbRBPenhJkWHoUMKaFRQAdLyniVbRFNWX4Wtx",
  "key27": "2X9rAcdmhMUc3ZGgeCbP8gbCnDkDuojxuZVG4p3ws1rsPTT9pV4M6sXVHZaTBdDM66ZGiBwHLtYgWQtdk9tatscJ",
  "key28": "3Z2bifGbojsEUu8HgBiGsYP9tkuN4Fn6n38GpHKahCueCtmuR4NpfcbNkVb2k3fu7K9RPDiWpZ5e56HLqhqxJq1v",
  "key29": "3zd6kuYGYzUjoxySJW7xxgkFKMUvLvQavJcymsAyomAAfiNcgJwCQ4e67KmnMW4g7QjkbsrPRNrGaCjM2jxMLkEv",
  "key30": "5p5KAzyc6pYrYVUjZDc2mdA5iPZNWAfTNsXV5itgiBxbDL3ARacww2Hy51CoDEQWvjwUkqsLtCWGR1DNWdHjZmSW",
  "key31": "Ra68zQ9Ncz3UDt6C9JoUT7nqore21Wapymp3yQ35zzPpuAM9Uxq9MmNG4BRmSUoSyxfTjWnbXZgHq1YQzrZyhWe",
  "key32": "5hbogyF3QL4kzD7QpefsTQ9qw6X8jCXwnkTvwWh4zkhuswEYEF42UaaahFV6n4F5o8rVGGXRR4uNsMg72UaaMHzT",
  "key33": "JCs2VEV7TQhkbc8R6fRBeM3ADcCAum2oRKwcwJ91N7BrZkh6Zc4U7KgtEVqmPLUakmCd4PCcCXYyKPGB9LE8yBR",
  "key34": "2uCWb1mjJHHCBwwTuCHg3gQbU1HMA5osszwnevvFVdYTNLXmr7UBByAWPy4WGxoDu8JnZPpg1dCJef318epAEB7y",
  "key35": "6mou6uandjK6c7wAWCsC7kL1yxmuRThMnjgcYCqWX5CJCCLvSP2nvWk3CoW9pv6WgpmauNpzqUgWJbQJdBWyAJq",
  "key36": "2B95JAasXEoDpZPufv1jaqRT9hYqQbKYUGv4DnR7CKSRksbNke3vrMQi7sv9RCjr9WY72WkYdKevnYNSSydT9e6P",
  "key37": "289Lo9vAmKGdhWcdRBSKB2KcPTVeY7u6qKVb9AeEVH5rzkkVjEPzgzab8xPppEoCWwkUinwsPnEGEcydiszgj85S"
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
