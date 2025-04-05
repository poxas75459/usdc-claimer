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
    "4xHSir9XtfYfbJMaUVvHdsTapcBsozd4JPqJpa9qwrM9fLyBLoAjgMxCMgyEzzfdPMHVbJnVJvhGKWhY1H7UhuZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QbXhvaYovY748YXwijAK3zCJtQ8ebEuzv4m6vfygGtF9Jf1qgtzL3WgkuGPoCo9Gd1SAwCaPfrdfs3yRQ5fJWtJ",
  "key1": "5b2XnTE1TQ1ETRdkMRyGPWFW8cuPp4MrnynYBngfwJyLso5xE18jJGryQanUrw83uyvoJjShhKxXPy1f73Wjnaww",
  "key2": "529naPw6P7ycTUaQ1NrFprK6yBHELYyGgR4d7VtRsyjDsWS79FgpmmEyy7NJ8Q4FMJGdJVzjSnYojZGFUiJcKxq5",
  "key3": "37pd6v1ynK6x7qzoad8SCPf7NHG2dDnvogCnjuJsbLNp6Z2RhLDAWEqEwyrawFBR6tXXSyAwP64bZWvwSBCjCc83",
  "key4": "5j7ULZMkyjk8LiS6CeDMSQi8y9vNHXnsoCNZn8NLXZ2DnjzFi3QMsSwAp2UT7q6yHQ4A2PaR5WB4zKv2u8B6j3Rq",
  "key5": "3o7g9TkH8syBTCLkooNcRxHefrXLn4GaPteyZEaUTy9oduAx7UPKbg4VGiQ4KJmFsDc4Do2xwJ31DCbDgWZYKuKW",
  "key6": "9yiAdSycogHPJeFUunaKDYEimFeqxXWwb9FzmhNkrfWz5q95q4vtYup6SDGWHaMXmPQS5RXu5rsqhSy2BAedqLu",
  "key7": "CBDBTeiMctpP43MWManvQjPa6q69DaLrcRLLfYayDZvC36wNM2rEQCgbDNWWGj9aFS3HDCssty5Wyuxievmvy7h",
  "key8": "35sZrBQ4LYggsCU47DXXfzYcy2qt9gRSVBmV3a62mopvKR9EnZMKgss5jzR259BZxF9fMVvMjtNWnootYxQNadH8",
  "key9": "YducpdZJKVMF8vFqm17qbR5tzXRmaEcwHjRQnqXt2MNVCdHeUvAfxse2pboP3aNuXER7T3KHeLBBz5zCSAhYhj6",
  "key10": "5Mobhx37BfkaVyTahUgdxgDShCuCzcYdvwUW33XHfAvEyn7dWu8ULN8rZmP3LXZTkLNzxauPCEUpEBaNo6tcM7xM",
  "key11": "3TG2eFMu8fLCe7ej1BVj9SgAH6k3hx2HWY3ZZY6PBvn65ej3kgmqLBp2GJ649DsGKuaU9yK7f4bsSaCPszwaghHh",
  "key12": "4iYGvyPt4EM6avkjFaNBaENXzUJedwR2eGaeL9bnYbeepgoVxczjNmGAAdh9rxrqCytMFYD4s4fc3baK2afoHfm7",
  "key13": "66UvNfy8wBiFvMLr4Wqacm77RdF9LeM4Krpj6cDuMhdUKnFdKPfjEbH4hpPqpn4mGYe6rHHDxc61Z4FatnAU1kKL",
  "key14": "4L6Qj8T897g7wGNPd5ibBff6L2b3VDwQXNda8Ys3Lg8DPW9xSGraWBttJwnu2KbjP8CXMaXwhuKD8CjuouR5NKQr",
  "key15": "36PH9CpD2P6VgaVGoZVfuAsYwbwFWx8Tb1B8zMmKmFBgn9Jojh9oogmRZrZDdaiwXWiKT1XYkdnY38fim4Kqzcd8",
  "key16": "5hpNjv61KdYdCM2Tz3VvguJDgy9EqTnJQFQZF8CoU2CN5BhsGfre6WtRz8Bd9DzGeWoBCagg6ZkE9n5yqL9hHZEn",
  "key17": "48Nmph1A4NiUXUGMj4EZAEQpQ76x4u4rG1pEkKoD5TiHJqUPBXD5sQxiEXu98QBtU4TQ8UP11ixPekkfrM9dqTiZ",
  "key18": "gAmEUejRDmps6vT3JtaZnUqeRWZfoHv1xwfrS9gKqMHfcRhpZgxhUJoC1WDFeUG6o7g15wcT1PvMtJws56XEYkm",
  "key19": "648JzYq2HLocWSaW7SYnrJexGdDtzpP6zdqs5mLopr7FvS87H14hMveJAwEBuKhk9tBS4Qv1fNtrtygW8ZXnwnKV",
  "key20": "4aDJyxecsQ6izafrKRz8aEc8gbmcwZCg2MVbW2UgSq3cmm6DyJ7BVY2zbHafY8Meo4kb8Xvff1o1tQgkqeKBQZay",
  "key21": "5vcz4zhkoXRoKjRxXBt94B372YYSfbJM1jQoG7Je3PVWYw4RYWrJMdSe7pUMfhbmHLjfp2adRmKZ44vXczkLSdtb",
  "key22": "i3RC78Ka7dLKrx89jFBfatcfSFFbUd5uz5Z9R9qLNYyYdryjfqBrc74afXW1cWsrUcKUZZSMbCGwUmhWopPYGS5",
  "key23": "4bseEjx91ogpqhMx6NHVy6jKzR3WjUxLsZjYgfQVZLjvtKKZXDXFjv5uDdUNdocc8ZYcuD9N6rKUn2W2ZJhdM1nK",
  "key24": "4RcqzZ4QPAdA2YbyWFKoKrhx9VdQ7jhgEs293uiNdzomikten5sAsUZHj8bNenuXEQajwJSAcYSnjmT5q4P9G6a6",
  "key25": "4RB8qZigFj27bRsg92hycL35fhmRYQ2jSWMd897DojZ3Kk5kDNqrLrLGSYvQgezoEsyEPCyemQHmgdKHAXijXJvE",
  "key26": "W8NpA5GvZQG5LA9J2Kfkji1EmM6XSAxB4G8w9c6EUv6QmsY85nWvvHs8eSymjA7mGXjVAbqR5zWthaA6CKbpz5C",
  "key27": "ZNfvjEa7Ft9Ps4Cudv7TmjwpZLN1FatgaHa2YRmdcpr6EKTytG88thqTT1v4bmBafuDwxHCu2g5uSBLkB9sAYd6",
  "key28": "4ZUqWgqWdqnJvJ6Xhy2gAQq5fGqMC4GmcTYFAkncyNkBSCEDF8XsJPpMUSVPT8tvFpRCRYbDtNtySyKVg8zxfXuk",
  "key29": "3xLcLyRddy8DA9zniwzmZ6PpsBveSJ6AULtmtRZi4V1RgUxBfPCHoMt4FRvbtxwSo4wcB5u8FxpRNk3udhfWt3xh",
  "key30": "UswL1W9pzC1NCZgtxbxM7tjYfyLZXYYU6ARPdMuStJ4saGL37cStFdR7eVv8XidRDgL2gKmqHyuaEmh9zHuZSbd",
  "key31": "BjzAk4VF3p2QvjMes12fpU8qKhwqhhTjFDLW4BStpEXLZGd3bf8gmV9x1ruZBzBvizot835wWtj2rDwYfCYrgLx",
  "key32": "39pxVRdLpGnmsmcJvpymWMGRf7VZ26Z5AUdrNfmKW4ZbRwfYG3Tyw53bszwWYSTsBpeCrX9eTwJjXYcnMzLGXfzN"
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
