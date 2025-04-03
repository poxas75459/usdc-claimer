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
    "5jbe4fR3S5S3s8A8jircsq8uSCsXfqACGT1WaN3xnzep1aene8ZHPxK6EaLmcTz49VfXbNPWfVAzFafTkPmgmnv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259EcSCmjEWGSDR4htApBAcpzqh1BZ2oQv3pEAxaNE854katt5bzxG6jM73NksU535hvCMdpMYqKY1PoEQG1s7Pb",
  "key1": "5CShcycRBEaxhJTYtmbEZGGut5AN6DJb82yWFCouCH1jASrVevxA3D9ATZYz2KLpmRvJY35tfQqDoL3XXcQWT7Zh",
  "key2": "3L42neMsBuerMRp5ymdkzEffJkbC3cDN1shFeDf9fyDDKF2iLXvFx9WxeeBUgxyWfdgrn35jpBksuGTW1swmhmqx",
  "key3": "55GsqbckEmo8scGtpWrQHkzt3BZtWXaa57TA41YHereK4VRNwc68ZV5CLH7zbDC4rKEyKQ82wf1R8dFbZ7pzaME8",
  "key4": "2oN9dW6oip1b1M7h3wXvxRpsrHv9HZBGEMfFgu3C6ZunVQt2Bnp69sDFQWkjjzCN49fUbvwnhMiZnBJS5x2hGMXW",
  "key5": "NmtfUbUMWrkARwEYkbh7AssfiZfGfspPaQRaoamuQcKtYLMSnq2W8jfGT5JEiT4wXV3jm8unrkF16qoYga4zYt5",
  "key6": "2amsxRdrG3kBgbzdyC2oEd5sQX4izJLhwFAh9uawFvGRvM5JaeooM9ppME9XA5VjKwXcrHZkri1QFXdBqrTDvNxk",
  "key7": "5WtFF6j3q15bV2ybzedSWgyqyHnZroBpmwSHzCtjhezej3uNV5LSMScU9qhN6STYQN9ubQ7whapgAqPzfm2Exqje",
  "key8": "f7pJQ9NEV9V6at4k177iUa92VjMt8Ln28CXiUgQKPMWjrQV5oBZqijCdviF5Nm4uXHGfnG6czehCUcq3K5gy1uD",
  "key9": "5krF3kJ4nWU1FmsPxB8D5GAsEpfBGG7NhdYddQhBXZXJ7HSPZojWidhb7QFF1aEzfgxUJELkgWtrgg2RJ4RMwRF1",
  "key10": "29ckzpPJCFXDcbi35axST8ivGxr5QnAkYmmkQfaDyEceEeLzPrUYU1paVjGVaXJ1scMrouaf51XYCNCsa3KZ8mFd",
  "key11": "5bi6ByWPhckk9qEy5Zh1BNCTVovcLsXX9FfJFpXWuZxzVt99kRKsd6j1JYfazT4b1sb3Df78XrNTdXEndEDw26vY",
  "key12": "56kVHz2YZJ1gnJxFcmwZkGLhNzLsMb4zCqdcXnJudkBr1t7uXw3rbsT9EnJDcHPT3v41SHuS9vfajmRqdXtpAuet",
  "key13": "Ty5U9wEYYnqPEQcCRjaL3Vmt5qBsbpR469p1VmxipcKhsTgRTN4qkfVKWDy8vtiQZfDkLbXvQDY1RjKxGyqxw4P",
  "key14": "wAPtSCgo7pDp6pbhbDGw7V1hzmwhgD38Pgnjjt6eeSoetFdbeqRZGqTTHXWBoSMNJvJGavFefMLheZ1gD6nwzGN",
  "key15": "2nGu6WszSVJhCAEkvadXkHZpXHWgqJXZUZbtxZhrjM61xG5jJ69Kv2rxeiVpC1SD2W5DXXXLMH79oXfGWdfPJkP1",
  "key16": "Ka3iMQorRfvoTs5WCJzBVHgW85Jvib78eJJ4ZknLqkK3GuiUv52LRA1ikqhoXnTgoVU5R6ru8VFoFQ1pZsJZCC9",
  "key17": "2FHrwdvaThsqHo6iujknosQWWGQmQjozNBqM78cEr5AY2Edp9NShdkf2m9cide8fBUwx2EF24fiP8bR3byjPXxsy",
  "key18": "61yXt6u4BUhwJFH6Z2LNF7CcEP3UTz9kVSXg7ayk6t5hA3jsL4bnvf8drkXQ6bY257eJxw4cSN1qpCuqDtg5gqyc",
  "key19": "5voJtuEFeoDNM1LMoomQMaLW8nXsmRndrBvRyw75JXDcHkGQsYPGgMiczKHVKXMuAZd25CMtH1NPhtC6nQy5LRU",
  "key20": "ouiGhkrPR5Jn9cN7V2GcM71zuQ5GZxB1LRVzu6v2Z7X5BfG2Yo8QhuqNHz6oCjSyGM9UAnXA8X5JAtwKfi5pfCM",
  "key21": "2zo99vyAAk9CxfUfN5Tt7acex3fB1tekTpCJmm1gge8RP1JWpiHPJMwM7BUAhxhpEB8GesHLAQtWASp7F713A2eB",
  "key22": "3XvcrnYz4VDuki3DMoVHL88Q5BYi9RmZGz6QiRcJ5n9YdKdWk3cUwpWRjSx7KDdWiJXa6DtUiuMhAcF7oG5YiySD",
  "key23": "5gxd192VxQKLrKkx7wqnn3eywWNETKcbL1s2PErqhBQnSdVBL1piib8TeVJMY7NdEd3U7nBQrMe8rkBmCgmasBxV",
  "key24": "3dNRigwUzhQicf2Wqh1tgehUy1VvxikG2zRhxx1qEj5fWwumq7eKSnX3fMoJmw1VdzQ2Pq6oUmiXNyBk1AyXyFX9",
  "key25": "5tMMqxAH1CfFgzbzz35pRrHFg1ZwoCLLdaVXFt5qJhCgfgG26o8KHetheJB23Cx4Atk4Rm3fLAzy5vkFtDQz7whV",
  "key26": "4MuFbK26cGwE5c3tdHp1fiVxgmFu9D7TAv8CsBPMqcZqJVAecQKh9NnpawdgLjMCYpWiLUcYJu2uk3GabCN33eCo",
  "key27": "3UbkdWsaodFYjS7K1yrruXzaCeMsv1XGYPNJmsKBiwgTZM1tRv8xZdtYaeT7ijPihxs1P4zSB9oqNZRZiqEN7em",
  "key28": "3jF4avbnCqPedw4yKBQxEpFpABnD8iLsTUxq5PniGSQU2heCYgviuUGG3wrM8FWwernxdptSdZsifv9FEJXNL2Ko",
  "key29": "3bRgvZzpKrMEuGVJGHqFSRXX8jEgFPVMHaZcRXtpHMEsfvCBFjbcxsr1xhp3oYf3cYbrDfUvLkeYJCkvvhkGMfWE",
  "key30": "5JcfdEtUBQBhiXLWnrRtjhjtyeHi8kkANRNKpRk7czPxK6bmfLrC5V3sBuQrzSPFwPsw8TgDmtci8i7MYSdZQZeU",
  "key31": "54vELKYS1FTAwvEVt4szjZAffZ4zmjBKbRKRtiK2fwQevBi3HPV5TAXnHTxHv87zEWbsqWwwkp1kaXvmhm941mTu",
  "key32": "5H6HTbZadGgvuudSc6T7e4wV9ouwTxKswdfVCC9NTtCJFWxh6bFqakNLEgo1FTC94ckVGUQJ4AUBR3xjWZqYnfoh",
  "key33": "3LcuvQnzeL7uaL43jKvidBzExgYcaNE8bEMuUJ47Ur7P2PNa1RHELstBZqF1jKi4yan69eeGJgMecaxJ9N1a8fKh"
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
