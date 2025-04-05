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
    "4kZXSyXKy7uWGZNFyLuRt1pLSE1F3TR7DTo5DGTTrQbcypoWo3AdGjueYGCwkSytQwsr2B3YfJQeoYtugT8pxUmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEpz277sCPRtkTAAPBXpUNuWPb5iNR67BD2mBPGxp86eskZNUphqvrUZky3s29EntU2n7qujBELnjioU1sspYSC",
  "key1": "Fbr5peb8t1bcLCpE5kUBE8zaXCdL96m8U4PfrVtprkeYd65DYrMnSGZwsjheuzDytasG6ukjycKv8cZaeAovvM8",
  "key2": "3nZLFxDHmGFMLdfJKaHC7Uwfw3pgY23kAAsPBTo4T4U2u42iNEBEpA7TVX7NVoTk5uGgKbhnUjVNofGnHQCK89XY",
  "key3": "4nFbaVxbXqG427YSHYShyjmCm1VteCjwoCwDeV3ocBX3cMCysRirp6fBxqRanz1qHHnQ6KdbLVVqHE6m7mGmcTKK",
  "key4": "2ShQwHxGEKGs5tkzo1FMtohcpcuR5ZeXK8a9iv2aQrLrATbpbD89hAGhRKq3zrNiF8nkxoG5iGFW5Vk2uTUXgZBJ",
  "key5": "4EJPcS8j8LiF9tZHdxEQGRAfqnX7DS78ZqUi5daZ5ZShzmdGLMwKwEVyt2o5WmGH9Q6bgGQxMM8eMy1PLgQ4jRhe",
  "key6": "27tDQSUynucbm7TBzw8ipFEY1TiZkHjMcwExS8bK9bjebUmS4mXJ6JHeU76X14PhEty9guSApvxHQDLyLcjQsVMM",
  "key7": "3qxYoykVUoDmNJk7m88hzbfNYbjWMMFpEUXPDGXQ7YQZk3bg8RSpxaafAFKTUDb6FFiCdFyFJiZftRmKprYTBGe2",
  "key8": "AisV6LYJ76BRDCiZagNDwbpPzyiRGtGc5Epwpsccn7CEZJkWi2ZHnKypsZSwSqjreuWDf89mFNTBX9jpJBq6wPD",
  "key9": "3FUhvhJTThY84RqymjSsStEgVFrJh7QNs56MNvfvgeeoUT9tQp2rDYRu1efVeoXCm8nZ5S1XV6m4rPUDcge6McQY",
  "key10": "2NWxgozvKuvqy8HvnzfTwqgrobEncw7N2Fq93NYe4rYMHNKj6x9q1UL57ptxpKEFrFkFMEDkS2fNhAxwi8m9ao4W",
  "key11": "21EGQbfAWvr5aMGXbXTcLmpe1McYyR1okb3AyhsCuMFsynBpzhDDNj1UVhihwECPCRBodJkuBU67cqxtMxEhLgnG",
  "key12": "5nG8VrV82bS6hu3uTWKWn5kvVv9LBYgW6xjDXPh1deHPhwUF8zSZYL4pW2bDQ4FoUFDe8k74fHNZZUCPUH4zaxSa",
  "key13": "2ExKMG58intbktjPrkZZuUeqcQN1YMVdeY8GZi8oqx2kpEAaHBaT4FgaiBSxXphXU1sEoeWrhFQ5ZyLSqTftG38P",
  "key14": "5D1RJMVZ3EazzvjqizEkuHFF8AitssPhGTfQwfmxfGUZ6hdRSbZUcrF8BCEmD8rwkbfe2V4f4KyB5qadyqGyuEPc",
  "key15": "3LKjYziRjbUrgxwMpwm3GXvvUN7EvmS4EQQpgmZo1CeS5ZEbJJUbnJXt5ys2a36inW31XyBP4drGkNgW2GF7S7g",
  "key16": "4THhxg3xGm2eNV69yZv8WwHn3A7VpLAzbpd6QBNg5VroTbkk632tzgiVn6LjCs1qV58CGsFbjjqbXPyaxJC8q3wo",
  "key17": "LWHVfk395gzd4gtGppGsmJLyAkZFT6GMTuKJPWJukj513sUF9YqgcketB1VNZj7i9DC6fwAkRqpi6AbM5DjsMG4",
  "key18": "31aorWYVoQ8DMZEKKKaRg5jA4zWHr9RiZi8FrauZMDDiCn3ELz6bJ1wF5Hy3Qx7qad5sj9eg53vL5sK3E3kqVoL9",
  "key19": "581EmbwnZ3CosJMVH8BuED9DrZb62DuW8k3Sa6ha7S8Anq5NtcQcCyiCPSPnZxU3buopwm1AVJ82dP7vGCU8CgNk",
  "key20": "3LKcWdjKAj9xbPXZwcDkvaS4LLJ4yrJArKpNBZsUAnxwi2pWfh8EpDzwYfqdEwKJWWtXd9UQHSAREg5izCzE2qWA",
  "key21": "3U3Skf1nAB4ceMTK7eg3Zjqdq8bMSp6MC2ZfJtNKT1mQS94NNWgRG2u6izQUJQe6wmdCKAP1zEhZ46WZQqcZnzXg",
  "key22": "4bPomcjHoyjaaYAmJk1zXaygftqxfTfiodRSmhojU2WZKHsL7yDjYJixwiqnRMKManu4uANpDcrxuB65T8JGcRA6",
  "key23": "5ACSrcoXzNnSo8diZQQ8DKe8QyE1gfwerhefB2smtp9GeAS5YuuBxTu2Xj59USs3SHuVjhmSuUvsYbaJ8SSpWCmr",
  "key24": "5AiaAw5puVnx3oaNVwXKu9hGAyGHM6j4GVwVefVcKUQAJHk46tvh2dCneiaeLhSWfTG9XT3ygJajHjwtSJVEkESK",
  "key25": "2eZ3oCPKd5QDULFUx49khGhWXmjWy44iaPjZeMievihNjV8q6dHpsaLJG4EVXZsBaBYQcFQ6nBZjz2uTgs2rFp9c",
  "key26": "3r8oRxW6wQGsrWFfytQmHcT5tZtM7WkVVGfDr91ULBCq7cpxvPnjs15DgsfSVcm1UqkJ2G2mvo8FR6bXaawfGdRt",
  "key27": "3YJFvRxKrX5XDSErZ9QdcYmq4BmHrGs14XcABVocf1twArFm2bJVtiBeB3ijTiwRFuyNZTh2tBxF884Vh2AGYRTJ",
  "key28": "2dRHkxcju3BVMZnNxYY7cextkShsFApge83uoW4fJv9pbTvDCrsg6kVR8S8k1WhzKVH2Uu3PhgfbLGHEktL1ZDhj",
  "key29": "2c1R1etqE48ohdWj1EdtKD46TbfT2BMojKkca83EH2rgyiewAQkYpcAoSQ6b5vEHQNi3NmFtyd89gvi7HnuebXsP",
  "key30": "5Wi7tk9oznNFvi8wVXp9vPm2TgiY5hLWU44c9CwNyjyuchmfMtXSTbaDU8E9jyrsYEXAC7w3M5eoFxS5QZg4qRSk",
  "key31": "3Atih8P7Zd9u6uz6ta7R3Qys5uPqheJ8XjtjDGu3kXH5DD3pM2vuFtxiX4SrMii74vWsWqU5Dv6iZgCej441Fq58",
  "key32": "338aqFTWPdWA8wX2aagwNRGF4dySRW7QMzmRQYH14u45okKEXxujc54EXfRDnrNE3q7omcvPGvDmU46x8Jtt497a",
  "key33": "3w3d1F2UqMVYnFFnhSinHgSCX4LHhTiM846EGj2nnSLgvYa7mtmyqU7rtsVyRBaQk7ef373m2D4epMAfyU7YJBB9",
  "key34": "3mFRnTTWqqCukDYoJGVo9YxLsGdzrMBUw2C2mZtaSHFBFWhd66Si6fAvmetxnkkadMzEqJ3GzW4PbLZfXDdo8WA3",
  "key35": "52moVfoQhTP3AVXjiS1FEa8hyfXidmFJrTyQSE8ThYQx7KXgGEpuzi1qnKet2sXAiBUUgdckYr3H866gmhr5Yxa1",
  "key36": "4Mwvun7La8cKBWAvqpWX4KZJwgodah2XVLv6hUTe4zdNqTTG5YCaGn5amfqVbHvRN2wx6X9jo293mmogPqvpJCSn",
  "key37": "3tfH5ayNeV3pxSJ4giFa4oXA6NaybynrdKAhirrLNfT5dYTwkMKP7MwH6iZKBZR46JR2Rc3awEK1ZWVSGoMundNk",
  "key38": "5iKUGdPBTwcjvJgYZ7rVpnUsCVa87yY6FXQxNg5zsYhsVdesfPiLRToFFimREmPr8pk8Xgxv84JHZHD6itVVGXP7",
  "key39": "3o5ZdpzfpeVw8AsYKVg1rxjGVdwtY3L3ov32TmCJ4rFbnXRJYrpM5HbdXgxUHb1E75hVCodu2HbnkyYTYUmPwiDS",
  "key40": "51gyK8GSoTwGYMqpys7cTakUjqcVwcrgrJem2F9FPzjvMAfM2rWiWyfztok6cyD3oyCZZscG4DAboZtr4PtkLuu8"
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
