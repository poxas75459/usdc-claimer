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
    "FRA7hijSCZW5dAiKLB6XcytQfzfBwjYvwCT56KqXz3u9keCeae17vjiQ3vqTjwsJ7Mv9roYJ4iBq1RzG53R4Wtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHG2K8SzQzNmWKxcg5DbtFSZaKtA7orui1FqLXqNXc6vt1hTWDbvB6nJ7G8ouHxHe87e1SSUWnqWUocJU1LWa7X",
  "key1": "5WpittioKDoetQPk2bxXwwJoPimHsZsqj1W8DA999vfuLTdq2nWcmc6HWdJe1wQgTZUdVMaNEJpcUvjLUb6ZLHAR",
  "key2": "oA4MnjLu44xg9QLpBGwhR4aNSUnRo5Cbe39zFwkyuEXVv4r3wbh4mkSTrpc4pHspj8kjBqjkEWLcPcgH2Vx6FFn",
  "key3": "VG9VBkjbzbgRbKzJfZ7EHd2rJLeAv3sCbSb2kjWBuXE7opRWibNZ7RXas6XjHjvHK9wY7DkhQnFWYRjgi6y2eV3",
  "key4": "2HPfjWXNHfu2Fkn7R1ThPad2v7AnwvJr9Lu1TFGsjXbb5BktTT3oMaddh2wXbi9q1rRJGQ8LgahNxZoNbc5aArtd",
  "key5": "GXLvJK5R4JiyCma8U1YkqAnTjrUAzSCtd9FzoBBVTHvVNJggpA6NQpwfuYybz2BgnCEcWHGBUef3AdLay2cpcbt",
  "key6": "3JsEMWZsVA9Ap9FQfkZ6v4J3j3MRMEjyGvSgxW4pt1VjNnv59YKJc61uzuAdBqCdn4u9BBBE2N48JwQXiLsbG4bC",
  "key7": "5eEYE31RKqNzoYWU51xH7j2ZWJgNhF3U3QaeDDEFHtfwstscSARivuwYKPatYR9vui4faB8P5Vx8h1itQ9TJmhv7",
  "key8": "4Xyr8YhvXPPbuoG6mx7khR2aqhApAABM1xz1E1t7Q1R1xzoKJZBmAe6QXdDq29VQhDxTnhSdSiHxvr3sYGxC2c6Q",
  "key9": "4KwznkhAUCbmR46zQCq9oGFLr8ATkxmLcEnpR17LZvJwsxVQvZWxkjtXgkhanhz3KFP3GiJ45tLThHU2MVqkC9Vg",
  "key10": "24NL9hrjRMeyU8yHW7LwfSSJHwod5vxWfzaukQajnXH1KeYdHvATfhEjVC3hnS1qmbBQvUCp94RyMZ2pMLLKKnNb",
  "key11": "4goyivHPCR73tdyi9n1iEt1hGWuehvUWa8LvwWu8WdX2dMH1ySZccH3b3vQNWhXJtoqsNcTT5sWuZWVVVfnLTRHp",
  "key12": "jMF44MMuo9LqzpKegyBgbn3aB25qD5L8HtZs9xMwmAXe1Qn2oubAYEm23JpLTHFe9Fe76vmQfJ5L8vi6G5Ft137",
  "key13": "2YTYracTsSJpAij9RDPBsqdNu2R3RuuYu3Kej5Ynk5hdfxSYmQRCK8avscXqpYqQhGyhFkbJig8wpGS6t1i9PVmJ",
  "key14": "31z9HCrwuTJ85nN2pTNhco4AmGg6fnKatn7Lud3BCbx8hSHKYgkarb2LXNmUb6EQXJa7Zm2whZKLj9XJXCPtMT9y",
  "key15": "2MDMNqcuAXE5UViBypiFVPvDP9HaAm2caY1pyKUB3GfC5Ear3niritgiV5oZaWvf8QQikdsa9LfHMggiwJDdMT2k",
  "key16": "3e2WgZEwJkncbe9U5izkiMQZ5M8dDE6edR2dQ5J9q6Kxa6xG5sKuotJ1UpMVEg9vTPqV2yjMhmvfQduLx6M39uib",
  "key17": "2LapnTGQFFdPv7eVm615cAfoWf7WSWVKj78Ck34MMZmXTh777nqaQBBmC1EaioJZhuzayrcM3KRrn6w9txLhEvi7",
  "key18": "2GzGZoUpY1bJZQgQMk5oxx6XdgkL582zTV6FhJrVvYiWr2qbMsQVUoypRJhsFv27K8aaCNUp46oUfkehtA7BD9sJ",
  "key19": "3nvjDN2gk4d4geGqMVoDKrkMqwiq89MT8nE1DXDW48TKfqehS8NdZ6fevWAg9HhJ2EBDk1Pf4u5fSyfZepRbL9m",
  "key20": "5mX3RHJZFttZgBBzVFt6A67ewSQ1WkZF6xQCxnL4K8E8wz5xGMheZGS2KA9fai5uqRm2LigqahUjk2t9Nv86kH9B",
  "key21": "32GNf2wruagEkXVDYYFyJUAT3Qw6Nfbme1Zf2icuDHi2eTPDk3P3HEdw9djB5sTW4g4wry6KTSh957f5M68jg4ZP",
  "key22": "3RmgYKPy1ncncq15ZkrpTwD6Nsc6jDdpaQya157otrZQxwoWt9sQbfhN2RSNRt1pUU4Tftu2FBjHxBCh3u5Hnt6Y",
  "key23": "4R6opCB4a5SwARarpFYpkZtJY2jFtLUmF2d4iDMczbkreXJFtPJpEE6bbrWvze59SQ5aX23ULshy5Kdwwfes1koM",
  "key24": "26ZN5GUXJFrptCBNpJ5ytXRnxynyY9ikot5UJCxzR2wwX3UgnnfYEyeHTe8DEnWNwREmmuvKQndrRGx9dGMuKERm",
  "key25": "4imJir6CqfmsX7XSVe9bA49GgrGWsBHbnVpbjjtSA4CcxfP8mFwS7CqEAFntBN8z1Dk32vaZGMrv2uTjwWMHGnsy",
  "key26": "5KVijT3gS6cwqQ6jbzbpGMD8PCUdDiLyeCayEzeWaYGnYEvJMmTxTNa3AyY639DdqcJLQGXAAA8sHrtWwojsGozc",
  "key27": "2Eqx1k2ScbNFBtiAG4op6er6Trd9Zr89qbDiQd9RmYJVUF4UxY7BhvQmZpf2urZ16Q1LTqkbUcGvY72qAAdGyB8h",
  "key28": "26BgHQyDqJNpVLQvuPYkQKY9itozKMTPjTcUrxcLFhDN1wLD9gsSnc7uwvrSDivRaUWFfJEuQk4gjMGZeMALUcgh",
  "key29": "2W1i8QdHSSykJzjUctJct9QT13CvMqfBuBQSZwuXCgBnPE6BcujK9gNY7MovRrJPXP9YxmnNoGc8r4qs7bcxSq8u",
  "key30": "4kQjA7wAXJWf2xyHgjmcHCBTbAbH9JM2tsB7AqRDNKRRpwYtezbFdaWW9ATdFA1uX7U5yD6geFxbp7U9dAU8SsZQ",
  "key31": "5PRu5BjFBNafnN6oWz61UVdMqGc1EZsqZ4DS4TDVdbqFKs7uR4NfkntTKTaHfREZtKENJZsw5tC7ByXTQuLywPUJ",
  "key32": "63fT9jGD71waWHGQkmWyRcyvi2S8QQB3TWG7GZurevMBvyM7TTPUVJECsphdZNwdNwbTgHJzPii3bWaayYG1ySde",
  "key33": "w4nC8RpHAsXgoz2rvY6q4ipRpJPXS972z25VHTbjworr4AviGoYGf61QxDrFDWyEzeRv2rXB1da9Ehz6A2eXRSB",
  "key34": "4FdDQvszWY3ZbVge3TtDKXqqvCe9wWJpwLBbG2UcZovS1r8hmeHnbNAgrYZE27Bc6Nxy7W2qDYjzYL9R8NFEXaQz",
  "key35": "2pi3tj7oGAxeq4ix2k1oK4fjnhCtdtLq4LrTS6qvARqbdxoE8ntikBjve5wpSdbWvrVTGQ4gHbnLQ33UPfWsTVT4",
  "key36": "2B1LbhtqvbGhpuxiGERw22Humzs2DYxzFYFmamJaKUpgnWFFqpGr6FZcxKyHJA43cB9HqdeS92Unohmqgb6gWhbW",
  "key37": "38GokZx5hdS2yN2NPBugPBRbFun6zERNu8VbgX7k3qZCQFu8LThaAtsahC5RySUMmZdfU81BFkDVKcQmQ49GLS4T",
  "key38": "5JN7422fnmnnQCyeysFpv54LcmWpdSQNujHVc8nRUnG4FE7vTYAHzfoixLR4NtjGFXbVqeB4pY85bY1uvvc3jqHR",
  "key39": "24op9fwC3ad6Whn2KUm4MTRbioS5yFzPeYNZxhwnUbr7nH1wJ9yWdQr3Lr4ND2mnX7DVdP8wo28MDyB2xDbZ8HpW"
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
