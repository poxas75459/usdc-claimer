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
    "2VDzARCJgsmUDN1CEPk5KyBvpRA86Ed7QSgwAEPy5HjAARdt2b6xtPKxw34HoeVSbi64qHdc64UPHuANqHM8xWLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35wMfPngHVqFYRHUabEMoNZfFvqYQcWyMF5L96vZ15EESM15kT7ANc7CAkV1mG5XrPCNft9KTESKkcp6LiaHLWd5",
  "key1": "sSMfYi38uZ4BtLHAsEUtkyaZdF6TJ3CTERnz4irGfLMsYxMtTWP99n4o1WPuC5DpMhaoxk37VofAzxxTMWitM3Q",
  "key2": "3i29nfvuaPnc8A3WQzfAishdeJ8nvVhTEXTiFnAZ3C1RVMHn9sBzRZRvKawePWv9qzzgNTVCnzAEd7qivnoDNcKu",
  "key3": "418ULoj5EtWX51gMBKiqSrKfr2TYiJq6v6JJcNpGbtNVNgpBS2YEvUyR5KqNmc8WpFzcAyjCuDKyXoJyZWGcupcV",
  "key4": "33BsVA1wNALoZtqxDLAu5A8aBEEdC4MwbjPkXbYTxCYKkbCbhJYeNWppR5382M42xfKBdF5yDSAkQWybA76B62eE",
  "key5": "4c5Q1tTSF1GQ9NeHeg9dVsMbvdq6DZgqWDcsRSPFphiqc6HousL2LTvrt9cM5YBzjPXeyixUeWe16bGVwX5WAY3V",
  "key6": "5UebjgZMc26mpCpJFyUK7ZcM5BKkzEoTNV6EXqHBeA7LXxwEFmZCVBFXrqakY2vw43mctbPjsZKZZaDQsAncD7fe",
  "key7": "5hmN3DoonhYZBE2d3bV6beZ6x4AW3EEVYfgt4PmyRJufF6DezjcmE8nvSS4ALDyXVyRDjyQJG7fEYBF8CxbWB2Jx",
  "key8": "2BgyT87F8K26CxWG5VcmUzbN334BoNHqDVoNgXRu5BKjmZMXitd7Z2w2AdCwhJXKVWGUSSNhodnDiRxd24t8HBbb",
  "key9": "3qz7tZ9i6dSd29cVQ2YnowoA8xHZK7MRjBtCeWTVokqRWswgP79WsnKr67Wah3F3rUf8BRFNV75yREzXX9fUPcQB",
  "key10": "2u6TzXfdBNQFm9co4HZKMh6pbTT3vKMTFGk8pZgfb3hgVwWc56Pe1S4hjV4shNQ8WDsN8GGprsQTk5jKcucgZzxN",
  "key11": "441xiLxsCmyBYNQ6wQyMDQiyuoJd9CmEjrWbtWS9mAtshwMT742TNSQ57U5N67SdxwyZ33zGfigtdNTFTRNfb8tz",
  "key12": "hiqm9UWfuikK2WBCy873ynrnJQUc5n9NH4DcuKfeU9x3D5gMjZhYYubFFFSCsWiPsiTqzjmgYwUFBucMsJjQs97",
  "key13": "5BduF8jLkbqZ3DV3LdbG8qaij7TDfc7Rz8UpXYHLZxbCXKygwATRjQb2Rfe7s1gL4q5EtH3v7x31RARBvQwnr26x",
  "key14": "ezSm5bwEvfNghEryjAHwun7x2mKNktF56kWgzwvP9k6Q1NDN4JkHMVtspDYoPj9ocAam3NprR4GsHvD9QiXfmAk",
  "key15": "517ws7nTPLtrmuNqE4ZzazzCMyhgkM5wvEYG1G6pph6jita2M3RKQGDu5HAobn2hqJYapLhB3vgfyQx5fcXqy3Tv",
  "key16": "4ZBsv2DF8vXDSZ1yEWsin2APhxBiHj1cNzvHKKVAbV25Hcfurc24UXZgEquvsof83tPgk7b7u3ykrcfTdk5sDkLM",
  "key17": "5mJZKa64HCHyJa9fXrN1Ecck3iieWKPNJqid1BtcDwBq55YLCVK2CnVmeSAgUSTTTcKioh3Xy6fuxcW5YBxmdkXa",
  "key18": "51C4NiQ7FVgKhsUTJ589tHpd3M2Tw8qK4LbNfpn8buoQLqaewh7EmBinR3Np841G4kkPp6k1NiF7wND8sAFQiHcT",
  "key19": "3Sjt5mDXoY2kakMHesvJLLZuPrz7RbXH9Z2yAc2xbniyYat7q9Z8U4Eeu8EYjTWf3dKpa7Gzj4erVog5mCe21vGu",
  "key20": "5oetdnKpNvYKjk81NhGL3yEuwrvtwy4YuCvWFLgdnCYjaVrbH8pGcPu45dGJDAU4R2t9Kkq2iztTYLVnRJVairLt",
  "key21": "Xq5wtCvi55NA6u1wYKzUrefLmvL1nppQvmqnjTkSeYAjzSpv2L5RhB5XCkjpbRPPALvUKuVf84jXuytaPPihL6g",
  "key22": "248q5ffko6WkhvdUZoDnF7r6xhYWJD6YvFtagjQ37wDcCPeY7xfUhgXU6tUFJfSpyzz4rEyHuWhVKzSzTE7B3T7k",
  "key23": "4rNnu63wMMGWsfCu48VWDZTsMCPJVNrbLXRxdXKGPfPH5sGK7wjFVyiRhgxEwgEQgKPVrfdp3wYQtkUaj3Gs7ZGA",
  "key24": "4CcBirceYPuHrpfAD6cBdhewrWuDxkAHnGFPWFKeTtN33y4gaureBgN7efNAwfopKrhaQyRhuLYhQmVkZtuspSuV",
  "key25": "2jPUffveFCE2xvG1Pgs6v8EKazPD6c9eeEnDszYxK1bT4pQ4X3CXp2gh5bgZy5B8ahLtNbcGNRHNL6tBpCdTcTue",
  "key26": "3UHLzMdDrEUkapua5xCkYnWp6dxiHBPmmU7rrQQaB1SDAy2Va9wRh2z1CXfAGvv3PUVoxYsP5hsAHnakCrZvnmps",
  "key27": "3FgrtnuB7rcqBLaCeR15wgeHHoxe2pdhESBaiEqHn7RLGRWCzcxYCEPoj71bA6xqXUbMEQycmTkRhRBcpcJMvf8n",
  "key28": "53zxKXQwVtSM9LQG9n5TnCQZBTmFuBYYfNbmqVEFm4EpYhSeGf4JsZJYEKfB11JSmFBGaC6uPTp1pqNSkNnjQfc4",
  "key29": "5gMvgL4oPdChRUiSDF2ddzNqxhXWezo65WPCbRNbq3JCxEUS35HMsu8BmRXtTdcSiFq5mbwpc1yMRpPfnG6ayenu",
  "key30": "3bQxPysVDEuFsU4dwpqoD8G7845jLNncFH1JKrWczqJDZ16wGriRWTZFgr2773fEriS9ZqRDt7akjSbzt3okCcF9",
  "key31": "SnqDLxdEx1CAH9negA7hSegyVyPJS4PpLzFj3ULovmmTSnuiPruRJjNwD6MAEEcWP242F8VWoDke2VdzZYadDz2",
  "key32": "2ybPDf14mbaEN239kwGPrTEZ6nxCZRXJGFo9N34FFAqdCCP8vb7VamNr9xboLwSVDXCWGEJt918nYV1aHx8MFBPa",
  "key33": "36uKTQvUc3jvxUXKUZKyWpzDhcKG8po8UR29q75XtHYE3i37er7MYTL7mhRgDu8JcyfAV5PJGBD6KT15cYTYQMr6",
  "key34": "3JNE5FpwNy9QdZEEHMxsQ46pKkZfF7rQfRThAkYRoaSAVZWCVc4FCi98jXeMSZjon2f9w7VegUpgKWPS8wrdR926",
  "key35": "48HJn3fKn8nN6ztjzvt4hxVq8KAYbxcPUK8vBo8LuYmB8zLefAtmfN55S1fiNSS7RtGnnczbP1uwVWcqhEeVrvq7",
  "key36": "2vH32qy5bpBDZcznfdbQmL6ZSUfxX7gyW64nh7MPdWCCJvBuFmZtH3rgmqUd4RSY3KkSMbjRs59cs4T8JuDnwuNV",
  "key37": "4XzdTneAFvhVB7J7xpuqkUEALvWBidzat6jP1RTgAD8zmYGZB9752cRmPyR61yuo9YLT7F4H6D5EFB7CdR95pQMb",
  "key38": "5hdDfBpnpDs91WQxU3HfjHBGqK3E2unS141Bateng7YgN4jAC8GU4vgKcaVK6nwThY93CgxBdLjqgmx7nWGHgGen",
  "key39": "2cEJ1ro7G1nsNjTKk5hVPdXS5ofECVSurbVXTLUQAP4BTYKjLVbN1ZxdDp8NSrzeGzpeNJ9cvyjqFrVysNrE9wk6",
  "key40": "4nmbNj5YwqMR9LaCBFn8TX7j5hPXUCDnU1rjtbncrouQsuDsnDmFWsv8N4viGK6ZKVnMZXj6XD76Vhs1GRdhMY3N",
  "key41": "2tA91yRo6tojb4yQG7wqEFGTp7YYY7LFS8BaReAnU8UbhEhfrHT9exjy9nPSMmuBC2gk5HQSzRS9BEnkRDu6Mj2A",
  "key42": "5HeLfCb8iiRrC9QrYu3JNvEe3yrZaqMCUk6QiSZkUzeV7CMPTQyPQUwKF2eG5ZkYbRoCsyaKUurphNVS672NFvVz",
  "key43": "5PgJwnto4CgxVGLXFqPdrRkZwVf2GhH8md32MnXj4cyrUQW44JpLjEjNXEADzrTb6HRuMj1JZSdF6pQ314ZcNhGg",
  "key44": "46Wn54zJvvbpbPkbh7CphHSe8Rntbc8icrayYTWofN1e8H9qwNhNqSaCWdPRWHGVevqTFvpnFqRrL2QSx83SMSUF",
  "key45": "23tEcN59DaGxv8kWaaEQT86KTegiBu4sEJr6AzziUpgGCUWnnKwRkxG9v7PsV3Q9nv96HioR1E89Arj9anCNtibE",
  "key46": "2aE9WWre1toisoUs3AaViQ63Qf5LoMBZHYw1MHefLzAS9fNHDaiywzLCQ3nLq8xMjneLMm7Skvv5jSXAEy6RnU3U"
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
