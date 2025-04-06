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
    "231V8RyVGx4Zd1AMTWw22bYQ3shvWyMtHEEpCpeCKn89tb5m1ATjEUvCa4zpsdihu5oCa55MewWUk6mgUScdwRVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FcENCh81GfZpfC4Akm1oopG8HMtUfrPM2iHWvPEzHVrESZsKwDLm8KSebeeAitErXjTJjs4G2Wjo17JwnYu4YRB",
  "key1": "5WadztSxkjExuHh75GV448XoJKdi6Q8cwJprd75eNHkdZyAouvbyfC1HkzJGVCcJJw7aeGyV5i1pcr7gNDJcbNbR",
  "key2": "nq4T8p5qXNX912SD8yK3SdqGdaswyvinQyKZM9muxNjDJcygfKk8kgXHzEqeiCmnnDnVaY388oNmLUufV2aWgMZ",
  "key3": "4eX1iXf1j1fyYc2b4ip73xQAMe6yoUjjJ9zuYJoSKs5T3B6yi8jXkioQPcA9V1vJmTUc5wL1Lrct7eiba259FazZ",
  "key4": "2QCfpYaK6R8pbGiUgVXp6ADZzh6r94pmpdg15GmxrGEFaZBAqyMqof2j1miRTxzUJYiqqR3G3d83H5gkHi7mpBLv",
  "key5": "5HiczKU1MXH5TgaufWQ2EQnG1RRsW3ZrnvhRXbKvaBdoeoXzJsRjbbinymk61Th7yEm6XLRGMbqbZH1MMdrmNJ14",
  "key6": "3aLZL1sYWtDzHvgYWGBUM2TFQpFs1gN7zbt4rpyRpeezcyzevtkcQXdctqUGVWzU71Yb5N9JVdfVrSyUz5WqfgtV",
  "key7": "4w7TLsxnM19132JCs62Azj9DN1kFjZ3C4Z7QKFQZWW2GFkYDNu7Dwe19wqoeJYfpd8SNNwBGJXUQLBSaehWu2b5u",
  "key8": "28SQYYZL9igJB5qHxBzmjMYnFnBRhHivk4BUGhXi8gbQCWPyVLZbnERKP3GGDp34oz9DZKHD53jk36b6teW3yr9a",
  "key9": "ZuJ9RifkqwB3mwc8XiTdfutFWs55TaDiup6LuMS8pUmfQkgruLk18iaxWCT6dfYL3WFBPgjnMApyX3Czcx6zEge",
  "key10": "2uhqQZXBw8qtsAvaBGJ6DqzokYiwdgHAnJ9YMCsjWTCzepjhXN37XcbLcDws2G3LhjBQwarVmGrqAp2zZ27ZCAE9",
  "key11": "2iSvKLg993rYBtSkBGXqc1x9S6jgttF3E751DSgxS4aF9KidPE21HyhubRhxZ53MGWVH7EqNeNFJ3opdyjXqUsvv",
  "key12": "4sJMALDdeEm7eKL3z1JgUC6uEew4h4AvnmAfp6ZZwTDffqgRjm8SXvdSZjuiKznVJB7zSGamhv3zwWNHkzWpwNMP",
  "key13": "4F8dVXJhcEKiwK7HEuh8Ztuf7AqbMsRPETdPqKvHG2pS8n5AqnXA8g5nGisbgAVUMV4DyRh7FGZaQcxAqyVVVvSZ",
  "key14": "mzhZJx96wBWmWEeTBVWpFPcHywkUzhUMDMNiMEB7wtYVGEcTeegcKp2TBtwYxASEqaxVWGMpjhnHjEXonymkNcW",
  "key15": "5DyNnZ3MiHzJWazsG9thU8PwxBw5x4ibRPpAm4ywoKJpUYD4YizubMN4ZUMWb6D6tBcpWth2sHAWSiEFqs8tDM5a",
  "key16": "31H8wWVh4khDARgY9WSUSrLLV6N86HdLv6c7xWDBefaEATSoBr2raaqeDpc9FYMEnNRs9EPmHo6GZvi3ite9Tadm",
  "key17": "4bDwJy3cDm6GqGS9V3fPFc6mCRLW1HF53axF2DdrCvDFFGbkVYUNxtQRg2QBGTP3i6WH7A7BWqr8rLheagHHccZp",
  "key18": "3vXnnn6z7uumU8rMwn6qpBfrCPVXmG4fWnEET5Z9Q6fz2LnHTrZMu1dREzjHLrFPG4mSFRSDYn7SWEAW4TDVRiMU",
  "key19": "3pSnrMMjTMMr3jvFW5n4wHUp8kbJCLFtTvByRtpYjev5mbahzZpup4pGCKRvFb1o8XFdq1NNr921EkGwiy2YRQNf",
  "key20": "26LZVXbSQtxYz1C3s8Tr5iG5gz6eFRCDiwpdGHiKN1UQ7EkGxWHy9AfnwGVB3muKpo8dpja6hWcMStHxrUjcBpHw",
  "key21": "4fuu9Pa91Ute1kByUW9mBeqsSSdcqWGyPG6v7X1LfxU8m1K8jmy3eospLBHPZa9ucfGUrk6yR9aSCVY8bAxomidB",
  "key22": "3A5p5zWiVkKuJbGvLvWyAjUEE2NC85W9AfnFdjy9hT8wSSEQNG2qFbsNycpi8PvyCvMttzfCP6Uvzv5udT1Z2Vn6",
  "key23": "5sFKxmjnPBQykaNULiyfko2tnC2hUA6FckEvDjKXCeHZA3Pg76E7KmmDVsaVxrdmNrS5eqDeRqGTG3hTvnwpDgcy",
  "key24": "26xHrAUQ51ypzTgKSe8FNcXYFcxTGgoT7CXSZn7eWZcm4LDaCUNphmt9fAxP7PehXZ3pATd7rPGJdPTwe2yk1uTK",
  "key25": "2i9CvUum6B5bDL8DV6J2pWATVpJgyEw32anFCZNSZHWDP5sEDuiAjq4DTTG3WUWghXD1MgvALeYSM6vfSnYd6DVm",
  "key26": "53o27ynj4Tu4bFxhdATVAdbBoYhWgD9aoa2k2TfGQBTPAzp17Wwzg4axY6iJVGNLHM77tQ2jfT8Xyv2Xa3s7dDZT",
  "key27": "28sQdoZeBcQgi7sfEEUQWCtEiTVi2HH1rZHsiHna5vmJwV3qLDiACmtZdJZCfBs162vF1ynotSPUEqPmxQuHZZdf",
  "key28": "7irb68mcBSSt2dykAJ1Juhsjy3CWwKEV97kwyL4xmBD1AJayZwjnR42vR7vLRTNdjKSd2ejV8ZkJ89Hv41cRrJQ",
  "key29": "345uDpa2fvxTbw3D16LXQ1CB1Z2QwnfDYobceb9HoU4ySVJVFvTk9eucrZ2XW9WFB3XnGqNSkytqzm1kyi8JfKKL",
  "key30": "2DiW2borqLp9pzfB9FTsux4SZkrnaQkGAB2wuEyNGNugo6XK9vdL2BH96ro6h5gqJMeveKYwjednyHqXSf3tT2Qd",
  "key31": "DYqngyqo66w4Pjm6HtSZstX5pj4QgXJKXXM4b7LCvimucNKL1vVRuh3h5ybVuXRhMc7xTd5KSbHcaFVizqwfPEk",
  "key32": "3THBtp3k8Bmcitzt3qReY9CTVhN8Ck9YKX5LH3wccwcETHXz4eursb1ZsxqNvEEe3qDQHFF5LroKJiAeVWuop3kc",
  "key33": "3xZEiu2Y7hZpTek9MetBnP8Ev3FBeGsX8gKXxkw7QsNM3aa99DekLSfm4sXxs3L2PaRVcH7ZAFzPNS1rdzS5PiGy",
  "key34": "4idFCBp6sQu2NyMMCnXoC6mu6m35ixh98ajnFc21QyZCUVX8djFTyCqBiPiMpWyzdRbGA9m5jkT5Jcg3TZ4hCXp2",
  "key35": "253EdHDRAscnVE6HvtRaMusP6HGF8YsrUFJvf5ewvNKYDrQ8KbFUWcCbEP9Uwn1Yyya26k7eeCzovR9KxJUvQKFS",
  "key36": "676v1cPG5bGoDDJWieTgdJRAG2HgkyWoEA51GE8iK6Q9GPWSeZcFzUYUAq9WnAqzzjiD2mkAJVz85kNYR2TWaM6S",
  "key37": "29RweAFBtkWhMEfqXdbzbxdnqXnVAPRxkniCxRLGBsoewr5YxuNBwCaMb8gzNzYjQoFp3FNacby6AfiqhyEePPhc",
  "key38": "2mUA62ipJd17xVaCbvC6eHzCxVNzRZhxJVUvtPYXvFz9ruNHpUNQ5y36RYb8N2pDmKvq9hqHr5w6JvBwbZfJZuKt",
  "key39": "3akDHYXwjeVzwu41dfqNsS3txFTXLByHyv6im1Sfky5uQ7L7SHYRZfsPhQpLmU2MDVpt14aEN1upY5FsF2AK5gYd",
  "key40": "5LhxicBfXvZ5zJqZh5LmG514mQ6nqCuvCcxerMQBrSQCY2szec37Zmaviqk79ave5FuWjWTr6qrWEfqUga1Z6raS",
  "key41": "47yxDVcmNBxpL1jEVpmG6ZBet4bBTCCkYwNK9ZbFTxVMxBBZiUaDmprrwmudwkwE6PeoMENoCz6KbuEU8Ud4jsm9",
  "key42": "2swZhgc4Ew2Gj6fT4bBDFUW3gstzpLQXUqZydMShKiA9Fji3W5H5CaxSq9dWnwtAdQMqPsFjhSrjeHWDDx4XcbL1"
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
