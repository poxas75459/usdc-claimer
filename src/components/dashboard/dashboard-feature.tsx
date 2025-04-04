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
    "2jD33tH1XRtA5jtfDDHdcovJX3Pj9AEXSbkX22C4kUeiPp4SeVms36NCjJGftuLKxbzLXEFfSdtufre8E7jroec2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FQJsxPAEjXuNV18rjZAWf1efGxPvEzPu4bGEy34aHVEeATjc6sfTSQc5kF7nv13dM1WvrUSqdfMhYSWjy6ic2Vc",
  "key1": "3KEtv7beGchqEgUQvieziExz3BSgk8M2G5A7qF1Hvj1icyNwCGxnFrQv9GVs3NLXdFRrHZp3wSW44s7JSK2cEscT",
  "key2": "iefVi7ShvsSjUvr4vVTmAQZag1X4gqc3wyqaXuqu4DhBRnpop8gc92Gm9GdRW6nF3w7dHjYBxuL84eF2zSdpaWJ",
  "key3": "bLtn6M6WNrXmMzM3hmUJpkYHFwNG8mnc9F7wKRz1mUUtbhKPSGeJkLpjLbjQPk7ayhpMmEC6wG8sdNDUFXx4T5C",
  "key4": "5dDHS8FX57zMfeqmop2oetviboJ6i5xUmheE8oyhQxHB663BsnNHnEx2bRmxp9FCN68YCCcDuUB9R7oS9V77suq2",
  "key5": "5cPdZjTksmdPkuvvvgRZC6k3TwA3HN7PJPwB2AgQC7JmCfRbCBrj3TYPwUQBSnVH4gh4b5bRhT8Ni6HnCrThY4hy",
  "key6": "X2LUxyJCL989738aEFmHg3gBjbYfTvfSMhcZACU4MvkFdKn4ammd3D1zdfb4PQxADZRxs9X8FayhucGRJ7VmMS3",
  "key7": "RQQxYLrz3grszPsVQJtggQjhpT4d1GxhaeXbdb51obmqHmrfaxZd1KyJbRRKraApRYMRzhZSA9QBZfGhwypnuG1",
  "key8": "BPBSsV3DHd7aB464Sdux5vxz5Q8ZQv7sPnue2LMS4wreguj5k6etbcMURT765qnxec1tnc8tWS4yijhYX58PeHw",
  "key9": "5udwyL5v2k6CtFgf5RbL3hQMGhoBa4hwVPoxHhS4NLEqizr1aLAtvx588dLrV4NBtfhC9oCPRwPNKLHrHw6tPuwL",
  "key10": "2KswpnBdViAcJ5jwczb3B1dtFTvQjXiqHE6iAKudoPvEceVNsasAkGGCJpYKAL4UUw685qrPCBKR6JYpdgJbwfiX",
  "key11": "2BLvNWckk9TU8LwToNmE8QJmAjUXYVc4uUQMZb7G44fu6w6nSWz3AiHLVyvueMr4jaanXsBvQHuefbppnSLSL8j6",
  "key12": "5Dfwf73KA78KMVcRdkWA81rdFuBSzBk2zVehM93kHjjctSJBwrg288B1kTrqgZ3P3ffLYzEsgaNYRhEUiRvoUfWL",
  "key13": "34paMjotuKUFkKA4c4ry5hzoW7WMQsWVf43GKHBtvkrgeAHJHt2FrrJKipiK993Jjigfhzc77bmPCqmeoUzKigsN",
  "key14": "6pnPbXUJr2sjbfnuxz6kqn5F7WefAS59uvqB1wKD7SpSzEp2grjTKCYsXvtiXWNX63d8v7oywNTtVS1iQjmkR7P",
  "key15": "29cSA49UQiXrSboLn4xaVuYd3qwR4H4gqYmqdSfdZf8zCkKaij4ynhvAFktfhmG1TvjnXxWCzzvyMosr5dbPk2vg",
  "key16": "3rcQY7vNzkwpwd1kzZqEWxz5U68ZrSUKvZ3eF7ytVsFdTgiP35aS1rf7eDrqmUGzBzXfNwbu8MthU6JR6D5YZwPd",
  "key17": "4qsWjJH5riBV8TVJPTL2mBU6vtqG326ZaXx1HunAWQMDEzt3hEbVfTPqyMaoGDiTs25ytjL5RQ3GdEk23kiFuZFg",
  "key18": "2qwpFTeuaHGNVhQceJRiSwuLBtBW2JvvwhzcYqSPXwqRS2MS8qpkGK8BUJLFJg2m1aZa7VVuoWmSyjUNfb49nLSZ",
  "key19": "5VLniGB9RNV5n41dVr1zzdJP9iEm3U5RQkcb74EcSkLVbA6FFPLPE9QmVYJHUfqCyuUKaSj7pL4gaikv3i9ArZqf",
  "key20": "5mE5NNkGQAxTSWTT6hpiiitai7WhMtwM47PqUQiNou27Yum6C9VNZB6z9NgKkdpwqy33C1uwS9VdVwTkB234e8GN",
  "key21": "3C7bbqzrqZS3UBiHGZkgPZT8ey15fK8Vn1PNRhUGwdUBf83daLjSKY771E9H2vbsWQpiWL9c5PncQFWiZLYq7vJG",
  "key22": "3iWTbV7UxUPFxeJNaTmnwiE5iUxL6Lwh9h4kQZt9a7VaVpGd7CH8y6Aj8zDyLDSFnAeH7mcEYVR45cEWDLX25GiH",
  "key23": "3t3QxJ1WHLYdr6Ct6s8bbhzyVqLhgSzLw1Pt7V5tXPHkCutV8jefBaJ7KUfAj8VNRpNbXv7EwaK3FaDcxyp2UHb",
  "key24": "2V4HfbyQNpj8qqXAvj5XyV7bRDz1WyY4oikMcdUc5jcWaVZYqtoDburdnU9ASAWg6XA55Y5xETiAWgAR9MjSR1jH",
  "key25": "5yERPVYQSy4yRnoYv3ZYrikJ5REas3ZuMorqgDPnj9CQ8YjVKd99jN3UH7dxs1fV8cqMc2bzf9i9Mdy1swex5FUt",
  "key26": "2tYniRAxy4NCVogR5pNkAUPpzzJAVTEaXS2yqaRuKoCxxeCY1wJQLTKrJBgmv6eafvpCq7fokARXVKoKkkDdx6wP",
  "key27": "4jcHFjHsSqHKU8KqVE4tdvHYHu2yrChoqbmPHMNKYK4bcMc9yt4AG7FJcwiBoGzD6b37uBspKDi52zJM74LmFzEU",
  "key28": "3qRzzk4FNgmyrSTbLZV8HLCTd2oa8Lru6MEwpi2qCHmEHWHBAz7a7k2NpuPpWQfhBXcuqL6YBfAYQyFMY9zy1psU",
  "key29": "4tWb4JzxZsgMQpaWCn8NgCZNGGw275jSrFJy2iQbhcuR5Zg4rLEr4R5Any2MiictBZVbLPsZNeKQmfCF7ERHnanM",
  "key30": "5vx73MTEpwaQmSnifgwvkQszbMroQ9uBEB9QKTL3C615o1XRyTWoJieHsiUUhQ6T1VKiqobkdqKWZoeQ3jNfqJ1L",
  "key31": "4hxVQ5cfaR33q82qbnDej3cy3WxRvrvsGSZXiFtpghh7KBCQK5ihhk8FGWJV4Ea1RSrV8hWv6Hy3j5ggRw1XaceP",
  "key32": "47KmZMTHkozfrMcphwDZubGAp4VN6YhkWuLgmttNLAU1E4eV9orpHzJBHtZYV3yvFE2MoqPx6qVZGCS2zeXUE3ES",
  "key33": "4QjD2tD86nouwe8Sys8k9BS9j9RZYWD3S5SgTf8cAdMCmdkuPq5k8nUBikuuNRARcj9Zr3mzbv5CsALWq6ubPHzo",
  "key34": "5Gw2rebbVQbdxggjznZSFeNz8hafTssu6XvLHU4Woph2iPD5fTq6rWfrK533U4Y9U6Xc6MbbbcWG9CrPfxbnB1AS",
  "key35": "2KvC3x4afSvNxZ3KTbR3YHS79VQHSZzgq5hTDERxt2MR3pDENYdUeftBqLWVCGdpj8Y71JUa2SW88vkMLj63aZwk",
  "key36": "4Qb43G2isqb2KwU4B8it7BRCNiWhihu7L5CKjT9wHTSX1wxjt45gf1eQsqGJKQ5E942nc2CgT6grgUVa53gP5R5Y"
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
