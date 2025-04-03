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
    "5SbrGe4MqhJDqJybbnhhHntL1SF1Gq3DSpYiT47eDiVLYPeYbw8mwkpZs7Q1Vry4iEvTjRKrRqWc5ry9PA3oXfB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCHRxFAtL94j5s3y3UrVzETLK5xziPwo5buq1zvzcU5amQYNCBWJ9jxnMVuCyoiA7i1a6rQ9X4sC4Mayiz9ZqSR",
  "key1": "2nWhqTvCwXEE5w1uzs21m1RHuY7PcaAPcyUXSBtGo89h3DDTwiJQbWFUNqyPj4YCKQev8x9cgJrHj9Mu2RDzBxbq",
  "key2": "5eF1Rzk1j5xaWtaQr9ZaxsAHUuBsFDU1BZw22rs537qYCYyebwpXkP9cG2UkJYvYGWjhMRvtN7oMh6yzxNy6qcCL",
  "key3": "2esCQyboWg8krpsqnNSATqvqcbZXuvXw3qybULymmsFTGdEP9Yvmnd7VSVsj8NgorzgNp9QPDLAReLWx1YobrF4t",
  "key4": "2pHG8A2qdJW9zvkXsfFPq1LgNntXyuH5uYFnS4kvqcTKX2YqNdnrDTSz1PgmwSzoEZ5x6fdaF6uYi7eEk9PqUb5J",
  "key5": "4qYg1LHhQVfxkdnNhoryZtbuV1799SNP1sDkpEMpKZYyjjLTWyQ6hFH2tzgQT8HDnssfAMDU4YoU3KGKbJVQtaef",
  "key6": "3TbJk32efuWSWdLcFBMFe1nU9MYBf74SimZh5quccAzfTwTPkDDcK93fHfLRgvfTGmV4sPewibmkENTxif6hk86N",
  "key7": "4JQyMHfSZhrs5KbTqSYg3HaqWRJvZvfrqBrAdVnKasWLQSNi2tS94gbRbCuyHFYkAsjPHLXxSGtgh5esV69EEk1B",
  "key8": "2FRJCSsC4SQ76Aw4po4itxvftDzhgmeMWfJbuQNxz7JvuwBQUPokyX1KiLAVewSgnJoo3j96ZpKnuemGBv3kdzZj",
  "key9": "5WTC2BkVbUdrVWMK5WKBcQTnZDXXmnH2gX84qoeD7QiZtE1ugw1QT3AS4rAhsc85NseqnttWc8hCzrQ2DWWUVKk2",
  "key10": "2YGaGiGJ8T9Q7wg71UuKWquVjYW6WGSVfKPRFFNKnrRp3RsZWcSfpu2fEyPbxh2bHjrJAjfSGZCW6mAhxZG3doZy",
  "key11": "2g41tVUwu57nqFaEkTVMr9zPnUjYJiXvYEhWkCtGrWzw6f7ko6XRBi9EeU64xdKnq7hVA8qGSaNn9JY2Ucsr3nxE",
  "key12": "59bgUMQtfMXx1x8FHEqDst6VgXiZGza7k3w8BMAgnZ9pzJoDbYnTM1rttccxhRqoh6obM24Tsf211kVD8GEbMNoJ",
  "key13": "2fk3vPpv17U74cRzSPpxq57NNKVWDeznu52YYQQzSdaV3MYgqcz6FpAvP2KzMmZ3UU8HDoJ8yx7K2Ksh6VdktQne",
  "key14": "358vzgSUK9qTmkZ59AyiAqNHYtx8CjpkA2ZZRUMshqVL2nVarwPq8Kydp8XcPR4cD67vogvjCxnA2pH5y9GNhzpH",
  "key15": "2sBBSAgvx7PERoAa7hGToAW3vaddvWvLzadN5mntT495mjUdvjKAKPj1JJVm2FFtqkHKjG4vL8bKPGQQq1vfaUtg",
  "key16": "2c7xiYjqtkXiMqgYk7WGFFid5hr9dG9YvHZ5UZpW5fhCJKceuRB84xUcGxCktkWfEzGNsQHrc7U8v5dF3k4jx6Py",
  "key17": "j9CqMttArisUgPtLCxu7sgstYEz3HxN4ZtvkvY7JAnALPN126RUHcexViMDLBgp15J1NKsmMaHfTEwtxgSBSkyb",
  "key18": "2KyzhxDG26iK6NYebYiepzf6LPDKJT4HEL3Du3ZuoKGzaUKBEqZcDongYtKBkZv1bzK4nAkaao9SE5WmgH3h1jYJ",
  "key19": "3TNn8itdRzo3R9h3xj4Zdz5WRHRZJ6brgnDmcL8oTBZ7KyxaHAoJLi4xbXuDxYcPeTKgHfk96o7pX2Gv2QQG2KU3",
  "key20": "3tPDChwHeLY4Xfk11RR74WapaVFD3RxHhx8TkyaKfRoSx5nsgYp8UVTEmtKXqWRhCtitRcXJupnV9upsngpBQ8T5",
  "key21": "4kkQ8DGBNyNjKuLorK2wGLEomFRCH3R7LDLdKiAHNdMaLy6rFXAwp6upRsv68ZtnqohUysknvt7Zyh2mLN84s7df",
  "key22": "CYeCkk6UoER62UHdSQ9udZKuxtdYn3R7dJ9REJqFSS27McXiR8TtZcHyn7iywYEshbN5XATKCdWapAQGxWGg4ra",
  "key23": "3iTEhoePAZZqn9icqYUJhTbFehY3McZiG88FtS3ZHBkAyZXBkbefJVR45VXg1WRgGST7HFqnmWd1CgKbwNk4RPPJ",
  "key24": "431CqXYTkP6Y28JG2zys7d8ZWHNr2zS5kYBwmkeyduix81qyds2hprMeVKGbK1R5DYs4AGZ6GbY74tfvmAMXmCLM",
  "key25": "6Dmetfp5Ls76ieBjoezQR5X4swu8bB7TkDY2hk6rNRvKyDhtViTbLx6e1dLd1ZT5K5zibq491xoSVh8Ayh4VEtw",
  "key26": "2XzSp4gf1ZtihP3owEcN5uUGJ9PYgeHrJtzKpHBQHUCRc8crjSN1Vq4Hsh1HRAZUuissUzxUMJmd2jNY1JqEj3Xf",
  "key27": "4tJzTF7ZScsY49Y9ksfE295X4R1CUryzawEnQ1YBNL6tmnvtQGR8WjCW3WcoMvc9RPrMKMtyJcVTi7C65vMEiBDU",
  "key28": "4ZSmYWgVF9g8A2NWa9bPuCottGM9GbpBLvPVX38BEcUQsRns9f7hVszFKG2k7sqo6wUtrhvaPHmUSGHErQknHY9t",
  "key29": "kc1hTaYtXADd1Y9uwVCA5rYr9L7Xow98QZsVZbGredKbwRVmzR6xpCa1vzLfTuRpwEkTdiQUWoqLppvKkzFMBDg",
  "key30": "2mekboh35KT9MBoj3TLTBVCYAJ7vviiUEKgUhWGDM2DgnDptz4U2aXLMTcNRemnSso7Yw5GBvNUMrxqqriAqP9AP",
  "key31": "2s492VtqYmYFoBcLzadD2915nJAYv2hngyCjW6rwPMRaBsiiZZh7QwJJqWWkddm9tvBNbSEjNvAuwZrNMMS1XAKy",
  "key32": "5kHUHTBURVE41XUz86b4gqjavDAkCmXGCiXt6ZLiejYQ7VHFefKGN7MnpsuZzhKviuCUNsppsuYqib7c8SeWBxf1",
  "key33": "3sP4xkLZGStsdEJQnNaV2fnEBYwNEeEj5towPoh3cnda8BDEEtAy8LdLMLahvsKUeSbyCXZdmbwg82gJYqvW8t23",
  "key34": "2PsKRjkEDjMceuYpC1LwLgxq198PjcoP3cbFsiBYGyvi5XNygcj8Nyrojpn6C1HxahqPnv2xET2ZAMgzduFdS93P",
  "key35": "5i4aEWEzQviVVShAb4NmVchFkHZ6MJL9NrncZCB85vRsveFYZ9HcFyHrxP4JcPHMJv3VWRSK9imyC5ATU1n58dav",
  "key36": "3nahBuhEFbVmAvxKtyK3jpeBGXVHj7p3X5CEJ6CjXjwgadtksLkVSiKRJAQD5pg1syYLpi9qSoFgCqRvjGdeKBz7",
  "key37": "2J81BwiuHcie359Y5eXYiUHjCQsPb71pLmJgF2ByjnFZk751mVhvHZty8CqoSsmW2QXkE9UrPSoA2j9fn5mzWuYk",
  "key38": "7gARMasL1Yprda4qPUhdNhWgNNE3LvwE1TwTvYqggPfXS7ZJVdFPyP5fLw6Fxybpfj6X97i8hw1e3mo9wtTaTJD",
  "key39": "3s1k2L4YoL2bUphzSrhUHVfgJ6KeGPCyWCkv7c8ookYQfF1EpotL6gKFPmCQQgxbNK2SWSrdnFJob3x16rdcaQ8b",
  "key40": "5SyXfR1adXVAWwnUfzjwSFPs9iCoLXFkpPQMXTgzpfML3qkRsgxwLB3nnyxYDemRsFN11R7kywJwk62PCxMEEe9e",
  "key41": "62eq8dadDdTKF5VpU2j9t6zrpSFvDagc5hQjwTFNTfb8TSY8i7Q2dRwHW4DMDC5Rcj91tbtR4L7xMtQziq7mXRAM"
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
