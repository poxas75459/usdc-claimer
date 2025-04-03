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
    "31N7G9GMDKP13qiKXvSZcf6n4HEHqT1Lb4qm1LoLKJiLiiG5SaLURfCyvHHbs56za2onv3LVC4YJLaZCC55cojHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EAZcGhYbUsz3tAz3SdBLJmpU2qszrUUwSAPvTcBnSx14zEXky4F7GBXp3tvizcqrt7JAKuPgK7AZmB32CiPX2uK",
  "key1": "4kK5cdu9nHW9UADisdg9jVJUWqYX9wfthmNWyva43NTtbtGuFda1viV64NA8B36NTdBAHQoF9thR7KdExxLUPjdA",
  "key2": "65EwRVhd8aJENUXfLhQ6VKvd4PwyG7Tg2TPGhuegGCyzT4y4YdiwLHd7zNLnTxSPXmQ8jRQVA6yYzqQG9cZCuMSv",
  "key3": "xdU6LCUwoqqWPQnSoCeBdoa79HqH2siHADPVMz3VD4nNtdrqALGkkEtgWfyKZoCZRW6q5RTYbQXJhJsfsjJpTqW",
  "key4": "55PxR9ANNCfMRo6y4CjCG2da8bzDmaSBYrhn1bHSWoQ3qSqRaV6sXVvQ2wZR2wpVXXNhbQf26RQkwrChE96tV8VE",
  "key5": "5DiKEMYbNEzmvPmCTAFbAjCFeqBBDkdV3iGUeowW7ZWGP7thzzSnj2SbcxUYWNMXSBMLpUcyvzLv4FSdcZqjuame",
  "key6": "tYpYVvwWLFwdv8rKb6ctuXoyP8MfeKGVJF1NbU1ttn9DHNkL6o2khq9NR6KEAT5rxZMGPZwCPQtQMrgk7GmeTmy",
  "key7": "4qFSPYN4WJF87zdZ1xpjgafmxaHkdVkNMLSTDxgVusQdDqYVgaGtUxYVFsYMJP8QvKSA52DPwnuXddqJ4S99U7Rb",
  "key8": "2ekrayEoUpJRJPjFx9vgaF86Lm3afuUWwWDPBWfVSMgrbmjkNqLQkAJeJgfvff2NmTaik5QARmfCjowsPGoEUNEq",
  "key9": "3Yj8SPWiGb8MmmkqiFZArxcDDtesWGsS1P9Xboy4kbLonTYDRW9ZEWZmKcLLd1pJcEoKY7pSD5ahqBEA4e3LKmEy",
  "key10": "4eM2eq58iRRyXaXPMNby9odNNpitZ8vHHjwkSz4HDHE3sfXep57tMkeAxpShAX1LjVsTngJqQPRkGKyFpiESwQwi",
  "key11": "4xU5KpSZCvCsGd1N8KkW2jB3PYjiBJFUsHz7pyhC4Cc9EuhV34HVPf82W9cfTCvPhHrjeZwVP7QjtEJFW3XuirGr",
  "key12": "teZj5a23ZjQKkRpuVBoViWXemyEhWrmmGFR9Mgk8SKg5mQfrF1MUQ7EG4Ev691nUut8kSXWe87WETmN8epnbh3Y",
  "key13": "3QJFCzvgkyPcWphtP44VUgxfFYANqnxRNj6W28PpH8Txxyd3mPKHNKGxTN8RZBeYGGXhgX58APDdF7g8wnaBwBS1",
  "key14": "26zSaJFa6PTaggGLXv1ohkosLgqLoogQyyHSNZ8kfNsN4fLZnU4qFiHgosp8VRB97XRVt4iyai458ApEb31vsxgU",
  "key15": "mRRgS7DtWKPJn7eCZygYxzz4jjy8Q5HGR5iiCVWcs76BPtmmGNie6Cci2bG9BdPQZXEbD3n2VHFjjNQCefiJF99",
  "key16": "4g86MnKw7FxZZDxDWa77kGC4FaZt8hn7fwDXyA7g1ii38zX568TDRigpDBJWqjhrHZFtJUr52JJiiuFjzwzH5yxG",
  "key17": "K5AAGY6jjicjUt9aDiWoBzm6B26jXVA2gM5ywvDdnfhhsH2CGu6WtMweQUGVfayCyyQBhvmZU4M2yBpMCLJYXmD",
  "key18": "5Few7QfRCcwivqhp94q51sABKCKjN72sEswbjcDFjySqYyQie3kt7CTemGiFxV9tbsqN7V4Q5VeHmbxdMdLsJfCJ",
  "key19": "5cyNhK61YvcVceoT4SK9DAcmt1ZR8xEcj1evdkEHPEmbrcdg28nDeSS3gg3SFY2kEXTe74E4vX4ZXGgpGjRpSVNc",
  "key20": "2uVEryZYxykwtHiTUdWXRswRJ5Bk8jYaF17HWw1piazBeyFLY1osDmyzfjCVeQgeBntSkgouUgb992Vu6ANiJWQE",
  "key21": "4MHdU58eFCcuauTB3DPyAgq68xbpNU8NPRxTnornZEwLCMefzn1iYHqQHVZDYchUWqTL3mmrDqfK3Bw6FSZ9PUed",
  "key22": "2NsZy9TixL7SBhYjG7V3ePqJzw2CuxiutZYdkoQ5oyT7YFEQEji5nfAtuLk9S6ZA5Dm6E9brxrLgqtu1Ur9TeLTh",
  "key23": "3gnEg3xu51is6jvFJPhy4dresLcVCeGarybGfvrqjEifw1Nd5oky5Lxzf649JNRuwUb2SghFWydSBgfRN6A6iKqP",
  "key24": "4Dw7QukdRhV8nYk4r5NsKFZRPMB6aG8fvqEhYdeBB1PBYMt7Z3TecJzxRZWuNcShVeuEcgt6VXBSE3daASND2pL",
  "key25": "4iuftDdG1AgtLGKfbjfjc2yTePgBknLvuPXdFPTYdUjhLJZQMFf9fGDgAwX3mbbPvhC5P9bo9oheuz96ncxVGE2L",
  "key26": "426WUoWSiEu5ExYPR1W7d2Wywtty5j7Dz6CztH3p2CBK8nYefEfniQg4TKcWhHH692jLeVS4KKEK6bJZvsxci4ir",
  "key27": "2b1zokvSVPjH8s1Thirn433oF2Up5eTSLgoRsTkG9j7bVryFCmq17Ns5U4xySehBuyBdyisikJYP1TEFkQDTHLNF",
  "key28": "qCj7KFMDF71AkVVUQfnAN3te1zb65AZ6HQCGMCyLQm5LdG82XnQwtE5M78jvSvwzv9u7nGDzBBbsYwMuFpCt89A",
  "key29": "2qkgfYxjhv44PmGUQjs2kb3Am7sCAkTAKpPLF6G5g4fPFeM5KoyqCi3hYYkrvhKz557Xfo1iuTPY93bhP9PGQi8Q",
  "key30": "4re7WTCHHHaZ6t5ViDLpBpa7oQQQpft6BjwZz3kgqBKD5DaYjgXHH8H4JcsSBjoVUSVfiSpqAuijB7HFmFQWt5qg",
  "key31": "GDdZPyxmVxKbwCCq8Tt1HGLZb39UgSiPWN88mBb8Ba7UcyZHbhGMwFjQYfSkZuYzg2zCg8eAhmfysknTF3gqWKp",
  "key32": "2ykaiTfD6axuvDNmiGzQw3VBPVR2ydJ6S6cAivmFfTrD2FQtA3USxWPDgCkKkE7CZU8cMfLkbPnyVd8Nso2wzdfM",
  "key33": "AENFogCZ6WyhNxvVcpg3LL924xwHXuDHQGRx9ufpu3knxABWjQjm79zuY3HmJCefhcXeb1QFFpEovu2tQ9JZtTw",
  "key34": "59RLjwYtiw2Ykt3iT3dBFEvvTJzc2g52Ne4fV2J16ugNNQdikM27bvNYd1kBcda2Mq4uzy1dmi5ZsdUe9DnoGU4H",
  "key35": "42LhPoEbNgpkLZezvaUPADo9mQkaHRFYjhfd5Z1HnMQdff7fgCEkn6k69gMeyeMiwPQpz8zsj7r6TD6tho8s65L8"
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
