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
    "43BwiqY3PqBdCf5PdH3mnfHqA9vkz5fgZcwkSURraKNpLfgbag3KVKPLhMcDB1hQn5tmCPM49TnvqFvwUaBfPvmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f2rkJ97T8aCqu66F49VTGKoRRVuMFmDhy4wYpg5zNhMXTq8JJkMFXvZm5ZdsLvFyXHbFEsVQ4XrrtreDU6Unc3o",
  "key1": "4fHXUxp9ctcNkEXstMU8VxbCt6NfNVijHGuYHaaALQpDsVRiFRALNdhWdcHzmpYydFrDMYm8BSfyH9EWRBRVjbqU",
  "key2": "3CRhHyz2QPHW8LoKKLbfSLt3xTuzdJw9RZuAMHRitxVckeZwYzSU4BhNW1rxVz6ygsyD611t2NNSyaSyLkouh1VW",
  "key3": "4o7K3aEnekiiY32JckNbDb8yZab8GjgSgaXWr1LoHTxVmWHgmcoxy8F2GfZyL9pUvKCd4agi7gfiWwctLTq4trdp",
  "key4": "5ZSLTzvaTZ1RXgLRLY7rgmXU8fJnCZ3X7i1f7QB9gjby54GzBEVz2boXXGyfkBPoafySuiKgdcdFtaNc56DTdTFV",
  "key5": "3GxVc46Fk7tGmE96aL2XWPtjvGpA77zDkxrWpEoWpNpRWWqKk7LDvwaanSQcdju4ECkhDYNQgpcgzjr1bXzsg3Nj",
  "key6": "3eha55aHUocrhz2FR2zq7oGZXQLgZU1MRondr7ow3cpr5PvPB82iaz2qRvi3JVNLMpC9Yy2DfRTKZRJYJqmZfuR9",
  "key7": "Hfbq6yTivRmK4oifjoFXKDYU5YWQdeKobXezPNrL6REnQCCvB1YhwyR1BQLYMGuycpHJ7MeXnnPPKBSmNu9bEjR",
  "key8": "3aPPyrN6NqapqeLkAMDaFf1uNeVrNFbX42vmHxNX4ahGDGeGCvxtEq9vsqdnMqiWvkSyp4QNYUAgdEm6h3mbr8Ks",
  "key9": "4CdeAZmrwCygqxaw7tms5sHRAm7Hv32HaKXwCq8YN2gqMgTVYvaUXezgizQ7nQpRnsKNodJDfPekdRRmzPeBqaw5",
  "key10": "3kUdJbwG7LBPhjSvMM72Kd9qjx6Pr412oFwFox81eaoCQKzfotHmhJufLRAGBGKvGLZDUn9aQXuq9AYZbdykcA6R",
  "key11": "3Vegjq36yr8VGPf62D5JP7PZkSj8jB9YqgowLhfUdPVobNfWg4pjJCme41sMWktZspHhKKahhaodT1NxrQba9FCU",
  "key12": "46D7Hu751FZhek8LyEsiMgqFP9ShPDkvpb8NxkdBHEJvV1k35M3rVGooGtoNABFHcNayft5dYZgAfkczgQZvxLVu",
  "key13": "4rJGbxB75VXX8X1dsKmDXQS8282ToVqWhzUwj5GdRBKqWyLwLSDEQGfoxFQWWK7c5mGdPFc3uaC4qwKkVkApa5dQ",
  "key14": "3JGaYKFKNHDDQgiaE9hdF9QxdkBT74oEaJDtCpDLcEQ2Wf2bpCosiBE9wjM3CSCcGT3nhLmYr3UL1mC8CG4eB671",
  "key15": "4Dhv6rcsH4Fv5Hecu8a6wzQxvWgd3G1GXjFydVPTbQm34kV1WUvQrvtYN99Nn5tZdc8tLmjm9rm2NHJ2CrxSiM3m",
  "key16": "1AGVxPP6qT6ThH64i1fY1jVwCA1Zu4wSNdRiTZHLSCQeDG7ZrJ54mCwjjXPkwLv7c9G2SZLvPYT6PNT36BvrZ7u",
  "key17": "2g1PaYBvzvUKpruDRkj3dbLj3WjYaHQbN36vSLGJrH2YAveKCNJSAuvhcyrj8nd24cNMhguriomsutSq61mLwM6Z",
  "key18": "2eMd3fkfn6XcYAWfRPBXt19Mg1EcY8XXuKmEhtkkRJoR4ubTANYWD6aQdZjua346Jj4h6DfBA5asAhvYhLaM8PjX",
  "key19": "5sV2v3P8AmLgub2F4zSgVWx9ZkX9RHyL1y7r8Yks1BWYcYKEZzywxiQxRgcBM4xTGrUMkXMG5V2EyAQpkcFAbqbC",
  "key20": "5j9V53RiRiutQ2JhZTiV2jVoPMxJJdncNwSKaPTYzJCFCjWnj5sdyftZ8bwANqNAcbaNFZ148WSSZqgtQeiiporU",
  "key21": "61hrLg7hHxrfvL8Tq9LGSk7a21bRPRnLoMLfuQ8LxSsoysYEEi6vebbtoUbtc8fwisniwjVVVGmQ3ZKUePQNTakP",
  "key22": "5NiJFStMdcYnoGH8YbHbb779xMoigbSfhJ6kkkFoSf1uJJsriNuBi3Ec89vPBGdhcFgrnHQXwqY2gFwAwhvTmThy",
  "key23": "3fbCeksExZvCa2Ptw3JDDPryvHid7zc5tDxa8Ju2vTDgZhsNZXX2393LEFr7xYioojJRpAjtWH7sFCCAnjhMpAhk",
  "key24": "2HJdZfDtcKMJXRCLTB8Q5o15AdintzWeNT9Vgi5VdPPfxVJqBnTCY27GErx3oFvHRAwzYpPrTZAhAyBZZHXEzgzT",
  "key25": "4M7TjibVfxP2wStXXYmzFdb8SgB7GEKB62KCYmtKEDbXhTFAxNh3GapWfkQEE4Tc54yHPY4XEcssUD9p9s1ZwVK",
  "key26": "D6X3TPGDzfphj8Fg5kHVotAAhubyjaKWvi2BKRL3bGedrMP6B5decv8N3f2z7nDjhG7S4Dp5dM7kws1v2HhQMbs",
  "key27": "QayHY9i3dTztWzpVNG5FLBk5gu66rjF5TYU2X7bxaDDsiLqTxxzrW9GqaN3WbL2WhqQSkkNgA6APTrvG6GLy4Zq",
  "key28": "5EQAgS4Wv7oSK5bPrh5cKhyyPK2uZzjZC39c3seEidFmps1bfZk1P4Cyjb3nT8edPEjwATSjJVufZ2rZzkiJUVtF",
  "key29": "2p6ZjZ8e9KAUiPgoFrDSxHmhzmatqNkzpaZy8X3YXCYjoiPaHpCoWUS6mnFCzDjLhmK7x42UMb5VsgrLArABxuhF",
  "key30": "3fCjiU5Pq2iUKWnqy9pPi6NjJHTiJUNMe8bqJyEYMh5FghjeFJr8mSLKmLdR5A3dLPd32AeVhE8wZLjTnUhNet7p",
  "key31": "2W4Cb96recnr2Q5p6ngnKyMg6udDqHyv2XD3m8JqFiPYvfWcfsodbzYgvXFTHuGNBPJLksdAWC5Hm8qqidUF3Sc6",
  "key32": "3Eey7eonhgz6u5UsTBCXvw9344h9DPTaq3AN3CPg1GcyyxR8EqiE8STVfck3Y9gB6unxuhj2cgsiAaR85BdhPagm",
  "key33": "2zaEhemUgJhGv8EqBfjtFnatQKrLSYF6VHKGLPG9VeLPeXB4sy3R3XKbE6aQLHPNEjsk3UJuQu7Yck2H6zYAZ6WJ",
  "key34": "3wH95Hygy5TH9RhGnURv35NjwetxfFuj1gdpNfkekprWm7yiNZLbN8n7k98GpiBeU9BD1Dg5iffWvtsWBK8YE9Bq",
  "key35": "4QXUVspTWrkTWUXkP8pXi2v4Q7HURrm8SRavaPVQAyuttFcq49RghrZYAcag9n1vUkAx5mGtU6GbXxa3hQ7SB6gF",
  "key36": "3KpMLAdyZbZogFVCKQwdPhBw8BcnvREn3ZvWJfjnkv5rTNXStJdPdDSEWNmphxDoHRijhJTvLEfMnu8hvMEWwF1L",
  "key37": "2BTUXnvuDavLuZbMnKo9Tt43ryWjsf4isWGaXF4hmbWp1aBAXi5W8PBaKsgWAupVXs5we9zcQ3rVNHiDvvSadZMe",
  "key38": "2FSYt78vdbh2AP6T7HJYt9WHzfsbFhyggzNAYGVd55c9JcCMbkcwCpYpdiRVoapKfyffNHbdji9hLWojvoBn9i5d",
  "key39": "25HzBW3Yqtu9mAztWHLwsLkFUHriYwV3evYFKE8Cqs7qmQ2tKh1gCHjdxmz7AUEUxH1MssfC3KMqET9SJ3rf5bMF",
  "key40": "5CyvVQSYVSNinkZfauNjHch8YoawB6KhbpZjNsyE3uUxZis6Y6r3N9PxcXQXFXe6Q955fUR5RYeywmDutUUKkybc",
  "key41": "49qz9haLeX7qXQ6RwFJroATLbCikwoWQpQXo3rDiJGpWaQu7Cxd2L1PeSjS1LZvvtrTNTSP9iCw3QVKzWumoaXyz",
  "key42": "2Q5carxzGNuL5HsPxXq9kYEuWK65ZVjuTgvZeXE7BmtXphPq7w4z3DnvDM74sSphprScVAL7zoHWitivHKhPp6Vu",
  "key43": "2SUmWY8xJthQQUiGKhCRXegtA9s3KpiFZSUCrDaFz7DGhryrhqYCafM6diHZ2iWv4ScK7qoCZnj4Q89se1yoB6f2",
  "key44": "35DrJsA1pudUYGEVYnQLi4WJZrE6z2PtbH8knf7sHghDXyrq5R5cGxovM6HNQojsocfE7Rho4zhBxr8nFSkvit4F"
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
