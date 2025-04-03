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
    "5vU2CEMFQqV6ctYRTDPxUi9zmhfmUAT5J9NYvX4wcZtjLXtzFd56k8vcUdFAtgNNRYgwGorppiKsJqT9RijMX2rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zpp7uwzQEDVNmqmefbL3ogUFxHFbUdPjbtznCefxevqmf3fySVxUhGU2dp7mTcgpgmJccRLB7R4P6oyp9aXp7YE",
  "key1": "cSN9LDrgq53nkr6FvRCv2yj28t9aNcgKM5hG5ki2azYeQ6AAtmFKdSZPnoEMQc7z6sLvqtaURJnLKbNEzSpUwvF",
  "key2": "BwKQJ5KZZqt45FivFBAcnvdVinA8GRdc1kP6ZB2um6fskUdAcpYkGhhVZPih8H7WSbWUPtA4jnnfNEHUKsLGn1Q",
  "key3": "2WhRNEf81k8gfzSAk5rYiyAnj5xu47SG7XnW24QVyw5B2c13nBx6SshSn5X9Ci596HLWaPUmdTXTmGQq7qpF4r8W",
  "key4": "4TEZZKj1tPegCcKeW5G6B5QsAC7WYk8uoKfUK46PxcZwLmrpWqwZ6pPuhMw1DesbaS4uzwacGb9eB4j1PPJkifqH",
  "key5": "5zWtbwDchBcESLzch224gdJiGbPPWZhMMJUNkT65tMxRJSbSrchb17mRLEvpMp71ifGk8ARzE7vJnv5cfX3usNGP",
  "key6": "3aR5cNzvvbis3W4yqPpuG7S5SrnGaFyowWGMwzFhRMQMexepN4T6cyAaTEXW9pEByCX4c5uT76M5LVmJJMBEmyLa",
  "key7": "2NLXZ8wDSTFGyxAgaJtYiPGhQMZaNmNdMdfKCcaZia15SBt4QMqa2APBPtxgQaVkuf9GkuARfhTdAyghvUohXLgP",
  "key8": "4NQ1KuFQDPdtjQC38tTcxb1G4qnwLCq79VTEZ5sAVuEik9rNtCgmU3Uo86jsZcDDjwcNzA6mT2eXn7vhdHWhSUEs",
  "key9": "EMQ2CruzMTKKxvbY1pWEWJwXFL1HNdbaYqbTe5icUbWjg1tfqF1voirFhzreUqTBmvnXVXD1t8LFhkwtgrcRc4F",
  "key10": "3znR68pcjhhzWyCK7QxUcBRbr4ipbB3R8cg741g7zQfXwwt6ezEXwpcgZg5shadbTGkBbC3KJmmdJqiiKp19oRZ3",
  "key11": "3EpAfSLYU6RY6oFcKbKyYCrZG9wxeH8NJ3Hdit4uTGHyE7XeDTFGRgwSvK9kXZKM2FerT21xNsm8V56mvaz9CLEz",
  "key12": "2vvRqjSMjhzYHVLtKxptm4nndEiVnLmy2vwr615acDYidtrcmrNrKnwLKHtn2fYdikaPQyDHQ8y2WioFVbRvBScz",
  "key13": "5kMgHCiUhGgZdXJcis9JZh5MiPpHLgRfnNDQBGYbrtw1kjF8TG97nV9t4RY3cMvb4mdRV7icQPwMsBHosKbN4vph",
  "key14": "CATxTETfyyhC1b9aYWURqxupHriNG25Y2XVqsupL7JTCCoABQg4Q2XBWM3KXnoMHBX5Yudkxxxn4LNxLiHFs2GP",
  "key15": "4jR7YHgFimst6U6KoamGW2tpq8xh3tLRyW6QbRpAcYbKGGy9gYBbDEf5VgUVtCgsoctjAxVBKP5EHyVTGiFu177J",
  "key16": "4pMabwcBqRziqP6XoHp2GhtAzRmdDPFVbdPDLrTHywuvmd2L7B4EoJPYiKBEbQcpoQnFRj9McJqAkdDyLsWJiQgv",
  "key17": "RY1VioSnaqiyKinRtjVbfLALjSDjnyZtDCvx2fUmQQoWxieRuofzbaDN5HKkfg6hr9aRuf228uuBHRS11vczQ9N",
  "key18": "4YjkT27N2DbVrfPP3Vict73JYKhXhAy5bqBakVqw9HxfBLYGogL7HruMAKQ1T5f3ZPJkHUyhqit7gzqLa4r4VKuo",
  "key19": "58EjVTQiY1hWC27CSSU9VpnjYEe7LwXz5maPx5ArbejrtveDtycmeNsGvGqgAi2uHeVvCLNKDCD3iZFE1eyxcCR7",
  "key20": "2ypt7hJQsMgGp2iFGkFYvvKxxBJFkonNsLUZN6c7t4Hyw4frbzx4FsEc4EPx8BFooNqwB9kqVKBQBVsKYMuA1aY5",
  "key21": "4FH9ciBc11LHn5zKkiqGg5srrFFB5WBGY7T9yzTzxJtSYUSJz25kmM8oSXWdDxam9p3JDcChto2hJUeVxEueSEPL",
  "key22": "5e4kr72MXnzBcJrxktaGbp35TrNDxZKudas1Kwo5hjxjkh2NPVRZXJFt1kiLowV29V8Dghce8VZAGgAtFYTLWVqK",
  "key23": "5i8knnf4z4mfrHqmHny4wnWsScFz7mJRC1c5zQBbwJcBHFrBq4LbeGbgVz6kwnop8R9yAW9ysG8Pa8fHjK7iicjR",
  "key24": "4GTE88A2Bu2zuQNZFqYaRKERKAzgyEur8MmLxj3Rp4wJ1Gkgdz7QVoqwbvJim9RH5s8JYsRMxeW8UNoJTv8eXpvj",
  "key25": "5eC8wDQDBTPLaiPeDf8m2nwEAD3k5ApUJieiTr1rCrxro6J1CXnjd7m6PNcAYnCQK1unKqekqJky5zs1LNpSHrNC",
  "key26": "53sQDi1Ypy4NM1K6DTiGfpKDStBJ75UEQf3E4eFWDCvUKcG2VwpF4iUhJwgQMCH9Lf193RDZKyHhugzPXuzUugMK",
  "key27": "5DfyTi2R9VUtxFnfw98VFTJGwfdUujWMTBGpyqcqBeyzi7LgwsXh2RB26NBiF9LR7ymxQQn65GZGExowoFUQwq3o",
  "key28": "4apCLdb2jM84sNpJ5Qx3gUAgWUmbwUeR7YFijvUgDqbt7xmcPHyr37QW4x18S2JyDk9yJycif5C4LErkKSV2WKCz"
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
