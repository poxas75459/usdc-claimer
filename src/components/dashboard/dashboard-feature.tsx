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
    "2Z4VBcX8hmh3RrXYsnFjGtQdfTffzGP8CLRaZXKCjifTwMbsJsAjmaugKhyWAxQTuBwm5MDej3R4E4DzG8VqbY2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K8VXdSjQgUWm1oB5yWZdcHxyPBV8yb8qFwXfMnCovKf9m1PD9BGULjimqW5YeRfKeMd9n3DJQucFEDHQoFpotYG",
  "key1": "3x1rg768RWg1wXynPUFz41xtCBVG5cTH36AxBN7wvXSZPN9BnZnEGdSa1GQEQqgd9KUetGAiGJaWRRTekRLvERaS",
  "key2": "4fFn4e1RTLofUmmBb6kpHiLBhRPTQBzNA27ZmawCZvDQyYc3V8SsV2Nry6j1agVBWAbxyXurP2o9RqsdrtBWcFip",
  "key3": "4TDxfePDXMVQ5ny7AqFTNge2rUaNrUvuM1FiHvVejCS472oWoc4yjZMJdME9tVb7qjybtetXezUMMznZqqRsFRd4",
  "key4": "2is5kcPstir5qeerds6Xwwr5LALCa9bLHZcK5LRawGLTvtgkLJVexdQxeB1xKrnSNk73uGS2QUasNjeVThAjQkc3",
  "key5": "3usF7oX3eC5rmbKJU6Cwt13poeJqz2B7m8wzwYWRyJUxZnNJyZpkVsbpkze12UPQepfKpFZzNi9X67qtsimt2UuD",
  "key6": "3uzt7tSQqWjvTtK98kZro5XJa6bDn5uXWUczbvkmtgTsQBoeBuqKKqPVNh8VQ7UqQfcv6oAiRBiDnNk2sibQbSwo",
  "key7": "H45knQ8pqjfYcbFxBWsuBCQU7CAt7oybdoWvmzeEWePfTUvngWcoenyVf8HY86JNrQkEUG73ioyVRXnSQta98Ah",
  "key8": "azp68Gs62vT26rWqAKppf7FpruTp56FK4rvBBdveJZ9pHn4JgnrUFWH7n4jXpn5vZdtXo1aLpTwdNesbqF61L2p",
  "key9": "4Dr6YfhLsJEPQRSdemVfaa1wPAHxcSbtFTTnfRHbhBZUrfrq2EtJ3TNPArU64QtaH67kyjTu9S9jqbhnV2VCUGip",
  "key10": "5n8th5BDsBxPkN2wc2vYjEnCb6p7K6s1P5ycVVzU85hi81nA2CQD5GHWtSbuNYopA9yLKc9g988AmjSaun4o9ycQ",
  "key11": "5DbfdK9YWxWeAKcJdvfiEMmWpGJpUESTt2Mqorew7GUKam5wmRebhtPvtnhWCjoxcWtuymqmTwBrq7L8xeLwiaRt",
  "key12": "1jt7zD2DzZ6kn9D5orNiuRmc2b1r4JsaejADDy3X1rwCq5YwyCft6oifxuRh3WcZ1PEXSpBZhoxJBpDdpgWF6jx",
  "key13": "31bpEtvqpBephbPnLwcx9iaKq6kT8aRuSWyWmh4qeTe8PiqBPvmbJgyXC3JY5SYAUKjvaQXLqm2gyCnVPJxjfitp",
  "key14": "5V5gsHRftHJ4544N4xbsZeUWxkKTwybrK1pnTQL1vuruV276a56D6qNmAqEgNdfNqHDQckfjwdquDSnGyZTtKA7k",
  "key15": "4aU5NBuDhVbgc3Jp1ya7rHGFYsT1PBjESbFhCg7CKZpWc96CCU6B2qK6hwK939mLnBFKThCqEmUj7nart6vtz7gU",
  "key16": "5dRmUAhnLaWUXpJX37jUn8PpREHEdLPiXrJxfdTvCwTHx92dZZV7Ea7BFJrpkPM1i7rgxyQtcADnEeGbPGytuWJd",
  "key17": "5rxJUNBgg2G3j5FcgNe7hJX48pPBQYvaNMtmLw4Znsta1KG1XcTjhQXmHqbAwQs2h1ye2zFUcJB9KH7H25EWoe7",
  "key18": "5oEaHqpUsdKkYLJwSzGeU7P6SdRbky7R8wa7J6GUVq2CG6SxU5JbJ2CTcpW5T1zkZALqLdU9itM7B3MHJ6G7Zdsb",
  "key19": "2Vo2f9uzwaHgTqdzKEzcPaYEesZpxLsaky7FGLyUA8vVLASVqBxxPSph3mPW4XXyxhLD6pZTpv9wpmCUYsAhnZsv",
  "key20": "2AEdukuaQfitnKFcmwg78NHqPMyEGvqQV9kwmjR4yrMqn3CRdc2iAa8EYrcygwC5rSf8ZYWfe8assL3eZC5VRg7k",
  "key21": "5aY4tZu71QV3nnXufXeEQsk3dAjeyMUwDkq3tUeYnMFqZ7QzdZqARdDR93jLW1nEFzmCXYoSDQX9wH3vDqEhUkQy",
  "key22": "3Xne69pSCUSp6VADRi7wgs2LmBcDv3TSeQ16N7wida8ZPQrgaFMtt4J4bmqc286Zprihi3pnvPVT2xtN6WHVyooJ",
  "key23": "414CX6YAkAHampvjaywcL7kdFST9HCAxGTubjwcW1jcAPm9vxfk1Bfyhki8VLpikbBibrfPwutwqC7XHZTda1Ra6",
  "key24": "3mLf3avM191FueCEfiDZDQppDaJvVi5qTsaDV8ssAMUTe63TNNtrMm9w3wndXLHZpnZfMbJu5RhK8a6kB6n1ZJCz",
  "key25": "27pX17418UZSvGtz6j1YZrgDEXvFduB4x21aMJpZxPyj4JjFZfETTu3v2N1ianDybnsmjVQuwfNwNV8F7vnWi8av",
  "key26": "qq52hG3qK3C2kVFiXZMChMm5EUBbR7WhuxrkZUguh76aSP5fRqdXNtg9uuW8TC6mzNJsKEuFMyS6qXVa2E5HNfv"
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
