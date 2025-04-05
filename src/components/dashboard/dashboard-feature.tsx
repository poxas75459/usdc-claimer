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
    "41XF4KdpvhBin9xrJgucLyHwhhjtFsBtBmGqDAgFhtCRYfL6GwHdH3noHK3Jy5UrUMxQSxCYgjn2wKob2tsZf7VN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLvnBGdbsmaREFLXWhrMVWq23peHNGHGe7sXfRRB449wTW5HZaskJbojY2yQnw3Xuvty4X3NSGvYyYqK8qbMstn",
  "key1": "3eYAsLUSCbrEm3UQhi7ht35pFutqbmGChjr7oL3S8z8Hb8c2YigortJSa6XSEm1tQwg8pwCU7xcXCrGSLDMedKxp",
  "key2": "22m12zq3wgUVLg9eD81HG6YJkR2CjUjRJ5jfRrqfncUtPfp5FBMdoucPC8tNhXUt9EB6hgCUn2AcDWXhGdXFdh85",
  "key3": "4jigchuJa9G4dQLL6NmKa6ef3PQf7uhmkmWFExKvNK7zTnAEzdxdwMwG51vJXLwBnUh9f686s2gMGt1eA5du4Cop",
  "key4": "24Jo1CfFMtEykV8dXkNV7qAWBKAWKUboCaHhKJjAWLZEts8zhxAr4bGPiCkqxRq6YU1k5xCFJLxNwzxZvEBXLSPf",
  "key5": "4XDyHKTqzV2br8wYmNQq75MGDuah7eARAPxZFRJaesnWtRxg8pKrPCRvJjMzGq7gTG5tZzV4XDTb1ojRb1h91pDi",
  "key6": "6M4fXtFqR4Zzmn6vPkJmw4Y2jsHG695V5Kyij8yd9EZBy8VXSB6aXXCcQL5dM8zJs2oGkEigqLDzoaZHQ8jZ457",
  "key7": "5scM4iFxBvEyTPZT4JcdzEgMaocdt88aEtcY6urTw8Xuvyc9LwNhSDrZHkWqVnDzM32Zmyw8SrWkDCBDSq6J3DuM",
  "key8": "5m4heg36Pn1HvHKXyDTLTkTLERgcnfHJVnKePAP8Lujf82dirRYAYTxhDboTewmNPykwBtxkLZ8mMzMNsZ29EKv1",
  "key9": "2gvXfiin1oG8KKbWBU2ncamguinF64dyQ8skZ4DALGXdt1QPHf8HjZPUVBmzbgm3FMQMGQ2qWYkabngRBBRxrWvs",
  "key10": "4cSM16GjsNNHZ2dVa4LsFbvASrtx9FgM9bB58bZnTPLnCCuA9gsdsqrX5SVu89WSxDWuz3fGLHhbeVVpyKLT3kaM",
  "key11": "592Tq6RBTwXnspY9pMAMTYZPv85tS53Cu3wJoLxu1C18qddBDf5KfNMccbskJ2iTyqZwHXm8EyTW5T3L4prubQWk",
  "key12": "5nsTeV99ATN9uwBE5ttYne6coa3uhAQBSdDidXR4DrzTLEHTNTgbeXw7b7ZkMrxb7szgmB51pW1rEXA8wjzBXfjU",
  "key13": "52FV7BYqsC21VTNDF7ZtC91UyZLFTrwEfrdiQZ8RUpwSbvnfxC59mWYvWVmQxHFkHcAk2bvnt5z1uTzUaB5rjxV9",
  "key14": "4H2CxwvBWRGQLWg7NXtZCdKdhBRNoopcdpZ5vfSZj6h7NJpb1Jv4UYCMYgqE7T1MjmnQB6b7ULSw6gYCFEHSamRB",
  "key15": "3GUVLLvx4xxQ6BjTk4M4xhCjPUiJYPaHbpenM1Rq6n7w8dRMjN9XMt23SYZU4PBhkDZnzvFV4WspTE8yFEb3tCAy",
  "key16": "J6aXA8W7qLNZdmQBPips9wqpY49gsUnWPykw5hUt9pVRB5NzrH5c2FrmSdm9v2e6kDWcWQ2AtXon8GrpnvWvSqN",
  "key17": "51nrK5DJPsTBemaz35E9p77pLjxd5DG839871cdqcfn25CULv3hyGaUBp4xQsbuZq3UuKDDL5UMtiEAKM3dCgc9j",
  "key18": "WH2GQASXJ9Vb9cVheoLEwqeiNfEEmAWL91ZuL3VCdgYppQCpVhwbCYc4CdqhPL2Ko2Ku84fMjcAB4Ucfry3HAPX",
  "key19": "5xhzqovZ5fv7quD8oF9eoYLGAnWTAvEGp59LYWozW2dXYkmCXwpUrW3FB4ZZFV3QEgJm4kYqZR6p5q2w7j2SiZJf",
  "key20": "4wkEEVBuSNLLtzomSLKLk6Ne7dTtnnC1htz9hUiz3XfwgbFZZqkTCETpKpjXQUcanpxmZhtuwe6Y8NdfdseeiwVg",
  "key21": "44yR3zNT58GwMAHpnuTqjkDjuZow4zPGU5T32bFEmQPCevu7uenHzc3PvCMNWvPF1CDC5w5cHJLUQZw6XK5HoSU4",
  "key22": "3WNzTeLNY1sfQUME73Wwb7q94tr4ejz8rKAk4Ybh2Wcx6VJ3N1sv8JtcbpbZzRxofBFD5Bxe7pzVdxpUCXZMuXMk",
  "key23": "5BguEqgw539zqSSjuwYrz4abU8a8VmvMqdup65vPCRxrPT2ARtYcwU83EKHuDbqnzCwGzmvHeyVz4bkD6KgXtCcw",
  "key24": "3BvPriUKxGgXYoBjmDxjavy44q7F9M8jyTxKMu89ZT1JHjH9FkHqpccPn3QdpTSqfSStJuCUsHmYpGJZBCnZwbmL",
  "key25": "3eHX5JZvVUBYsSS4w7oyWQkM8udfoBJxSv4P5ANvnEJRnqb327vcD7WjqPyLu1osq5HrmfgU8GHeBEhPFLMSYZMo",
  "key26": "3AqdKt3Y1Gtqv8HqjrWPqiLpDc9ZWx51nY5PCTtWmUY9A9WbnainU64MH83zSvw6gJ5XrmFWf842MNaywt5putEm",
  "key27": "4JqnYnwNZjQ3SMJXEiPexaZKnSTkZ6c1VUnc6VeSW3Dc3Dh3nyqQa2fw4pXpbrsw7CWte6SHnPK5AK4DgAqGcYtn",
  "key28": "46TbK54K9Cdun4kEeXhsDLKLgFqRWjquPqhBTMKgoeQ2hjFWRy7msJDm2Q8FFuudPQaoUfEdzqamAd2ZNykDx9c5",
  "key29": "52mqrGG8C5LaWQod747BHJQgHbG49SZ3A8pAk3Zk1h8rUYrF1sQr7XvvU3Aj8veMb9U7k4SRj6ZEkqCpZvUg8Ckd",
  "key30": "4p17aP7GYDDh7Hoq2M3JSiyZnqJUjE22Gp5UHpRoxZ7Uq5RfWk33MNEsmmMLj1NC189ZwUnhRaTEgeb4x7xiPsxp",
  "key31": "4ueVzVZxDn68uGEtiUbRsY39JLXG7e4DFqCgtpiMy5WBCgDxeZXXG82vjZarKo7fxmi1TQa1tBKxG4CpuCdXZa7P",
  "key32": "3eeV49Vy1A6nXqwaLbCc1vepGGqJhNaW196Gz9SLhfawqrdXEgkmsQuGjXmSTe55qLfGHN64BW5pm1iLHRpNx1B7",
  "key33": "4NYn6vEwTuqrCWDtM9WNyVLh5mwigGSCAvHsv5gPRRVRW4VxbFJb3XjMLJxZXxs9pnkDBGqHtzdWmxSijXDJ1Vuz"
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
