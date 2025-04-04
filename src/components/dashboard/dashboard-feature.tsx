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
    "NkD6ygyoEWEH9W7Dtn4BwF9VSnRbi97jAkeyGkv57RjTzvoADBwUUPuL5oEmALuYGEFSSoUkzVqNPzqxrNLk3Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8DcvaUVcK1xyzGXuA9UvsReXucnveZZDeb7RS9EXKGYEMg35ZzLNKmJhe9PW4acjpdrGfDQ7gbAjuNMwBxfcK3X",
  "key1": "hn4SYMuS2VkEZMgqHxk8piRt3inLWeGDyCi4xPNvuAsLnKGHBWpba7Y84SKrR359h5FNEpsW9iebWWWh5LKhtNQ",
  "key2": "5tnYt8wQhdpjB8LtepDyuw6kk2emNsuP2XhHWWMQVGZSoipU8sbehAPFUyGXutjerBhZMiq3n4ckZ44K4rim6gVN",
  "key3": "4295E1TZowBHG869WXFaULHJV1WNjHmrAwabfGpUFajTpBR4VDzXL7m3gHDDxKGDQS1eqJAThSbudncmtVq4a5db",
  "key4": "26iW3jKNnYEpGAaiaAqCKnB79HJHyeNTSpJDLJaAsXVHf4eBRyQgQdaFvhby72SuVgtgWP8BwsotWyBzt1Wtw5FT",
  "key5": "3nZxe9ryZjC7MkboM5hgDRgVqBPAaCcWpRppswFKUtYuy8gZj4w6eJSGkRmnuL5MWx9A87NL5NYsT5zkyx73Y5zp",
  "key6": "2nu39a6N2awcNFyDA2zbZT8scHv8hQUHC1A1c5JAXzbakLVg2w1rv5AUviXwSJgxEdQ9fUjxGmEkBRRvWS1s2rti",
  "key7": "3QUBTztm5Wiie5nkTNiEpJiBfq1ZegempZujAfLpjeuLiBy1WY8VgE8vVB9J2XK7uoKAoqXQsnjNgEmntiD6Cg5C",
  "key8": "5t6crTcgcFnShygDSPXq2svFsRpoLNfVFwAGJbss26DLnP3v85AsTo6pNbQcxG3Boc9TpkXocKF7Mzf7bXsBVpiN",
  "key9": "5kYkqNhpBKtocUnF8qGMUmqWgnF6EgsqZLyQ7CTam6KbQ969YGRBo41u1vZDJnh9yFVEjj2YDrvPdg8o1yi1fLNe",
  "key10": "2jB32ydLoakdx1yWxMA5FxHyaa5qggWk5PYUcqvhDar6ndcRoW8DVbStBTgrAMoHm2foDRmtHKgK1kcZ3WESSYHX",
  "key11": "2sKyuJ4g1JaWwqg5BCj5SNXb4FPKFckU4LynvL78a4k4ujJhEM9DctdVFet3RyaTu2wmchFSk29iYc275GcX63ug",
  "key12": "61mSoyNeZpkT8nsAASbihZ64sX3UMtdPe614U9TLa98hS17R5vMwgK3FnzbaG6FPmCaBjRewLXjZjETSRmV3ATHo",
  "key13": "61mafEuN9mzoFHe6CGXt541km3277JBLGBg1Q5rwTPpmGt6daZDTkmubYSHtLmW9bmXfBmPAtfEu6Z9bbYGnY9CB",
  "key14": "26f8YE5ZaMg2T5oZ5m75Sc2DqzV2ybQuGDhchrhqdrCSkd6X2ACBwuq39fdPk8HM381PC4DgknuAddbZHzMDu5Af",
  "key15": "dDd3b96BBSPUAmwwS86XCLacZ6wSd4KaZw8op5DcTAprTueqaDT3Cs2pKFTQ6s47b6YUFQFNK34wMUavra6bx8p",
  "key16": "378EikzDErrwV54tfiCdf1eFXAKSJ5Br28TcJ3sp6u4haivH1KbtakVuJAZwSQHMKrg6mibkPoVRGrMdPiGW44Gn",
  "key17": "EMNBEghA4df1kCQmB7tt4bw5McHDLViPfyPwNdTZyV6CYdNRSyz2ydWkampqzDH54UHReK2HJZ2rW2S3iVu3JVq",
  "key18": "pzYrFLDpPFiYR5T1U6MvEJJDDc5rPezc77bP5PBFsXB8oE3U67BysW7zL2B1CejgCvjGGkW817NSbSvaptYTtAm",
  "key19": "2hqjpzEAYNobmVv979KR4Wtj4nsF7EYhezBTKf8PtsW9HcVFyTVUAyYcCyyf2eShZKhgE5ZDjaxUEEuWxyFFRbKo",
  "key20": "39An6NyS9FjiPVEbhzBwtMB8EwvzWwQVwLrojhEKeqWSaA6pdLHyBqhcdqGbEoxjeXW4AF1kGeVDutzXNdWQYcdk",
  "key21": "RJzBFGkuufrjsg7mAwe3JXHhD3VHiYvvnBiF6brVBmrQZDVH6Y4mk798GvPdqgcyUqLbjX1i6PYWPvJdxzBr4Hd",
  "key22": "2CJd2ok7urR1Sz1L8C47g9ZhKC5MKDwNo2QnzqYdPcD6oFDoriQGQHvToWQUP2GtNpv3mWoa5ofZoJJjJ7ALpsV2",
  "key23": "22GGwa21rwNRz8qVvLHFxWrqiKNXcARU1RuGvkziiTqAiDXQo8R9vjTattxs7mU34f1KTmLPd3t7zYsBtfu96jxU",
  "key24": "32WWT2N8CV7jpgzLKP1taxiC2dGzYCDB1LxUfwGzgWaz8y7BqVJByzWqdgzaNU6d5QqsusuPDUGgXnbuNvE1acHM",
  "key25": "8hGeFJcUrVJZYmV5WRuoYbf9empmCwzvsgLkXARLrBTGTXUuykufUm8wqiWCDLrWRPz91DhfirTHbmqxMzYmW9o",
  "key26": "2LCXVc9vdUZfYR3KmKqPHmiXzHnoC3FXko3tTdvCHqmA1SF3rwLea1oAZuaUgEGvFZw536pC19PMGZPLW4wgZD6E",
  "key27": "fF2xRZprwyTynEzKCKjuYTm58m67L4tMKrxqxKNLgPQutr6AZj5mwHDDbY1qDu2Ey1UhCHnT95ykvPEjpArnTPS",
  "key28": "58kZjP1SQjqnbuhw1kNRza9sYYhA7z4UvreHEgpRwNt96eHvsPCDERM3bNcKCSuYjCeLogFJYRqGHK8gJfFmxcT6",
  "key29": "WMqencNPg9KMhKEvbC7cshKRYu9ERjwHE78TnXDxw3Tvrvc4VfRxKwUbBd1S7NTXfYAHwsfGoeqHE9ZPVEjEo8W",
  "key30": "2jedn1E2aVJNDBqQbi4XqpuRg3A8fujMgCCPocVY497jjbVU2u4oUpwAM49qzM34XDofWsyfigNNEK4HddzFychx",
  "key31": "5Ws2AREZVQfjPmZGxcQy8TBeYFsczYjkYiVWHwxPYpWLckcg1HteRY97euxscF8wD5ktsLNRHne6f6SEoaGk7uGu",
  "key32": "4jBo23Bj9QsuLMJ6SBswrRgh8cNThgVaCMgxjZWBePiw9eb9uAN228jFs7kcWY68dcNWMRHEo4zRACvqrZpEAYjQ",
  "key33": "5oz2Q3BPmfyhzgCLGbNFBLLNpHvYKTvSyUzKTgvbqc5Eopx81SqnuZ3tJTjaceDywdd75Yr9jXJyEtM2ntgq2MYZ",
  "key34": "ZefRwhn2WkyDtAfx7TYd8BavA7yxjMXdYLNjcHsk1S9ZUWW9EZoa4Atq1KZo7pgeZZjhRLk3kvJudJAmvhLD1jG",
  "key35": "58YWBUaw6offe3h314C7ceATc4EsrpeMzrsWbPSgzodUJsYrGHr15WtS4s3r3YhJsCQAQxnisQS3X4kLyhgh58Bt",
  "key36": "4NhQ38VFZfkiWc2o3v7UXp5aEj34ZWwUqW2TjwdrQcDRcfM2yWadeAEroQUsf57WXXCHEusdAMTgeB7s6fDS37FN",
  "key37": "64dsCUdheDckiwWsDqbLkvzagSStdXFpWGpqLrEMbSVqhWa81o662jpqozzMcqF37BdASZCVmbTRc3Yc5uxi8u9g",
  "key38": "4SUQZadSEz5oLoF97JiCLGspWCyJTuRdUFvBNMrgwiF3MQqSqXMtZTJqFp9GgvFwVducUYLsM5Z1qtyo5TrBEWHg"
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
