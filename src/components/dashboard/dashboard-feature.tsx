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
    "5qgNBqKBb6wNnW5eqYawtwPizjcnXBhQHtaGqdmsL4yMs6ZpjMeQnKpa7H5NaRwTQ8Mn65z7Gkagajj6F3mCYcNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23biiDMNgTrFgmFN1Tn6NWmt3VzMmGTyepUFmHE8D5rKMUCPRDXwY8RrCCN2RELjTWJ2iurpw62YFYC9q5MW4nuo",
  "key1": "5Qg2kyyHhGeuphayNgMybetkw4QozCku2yAZ2LQp276fD6nRhmTvsdYQhVgu6DzvqtkCPd4fbrTmufarS78Dc8B3",
  "key2": "5xJxVQEnr3pGzEjdUvUTdR7X2Ee1andV12rCnwJoSpg2CotwQaBkVAb2NoaKu7oDbGjT1oBWg5UaVqokbdC4k4om",
  "key3": "2SN45oaeJdguzcTSQQdcsXY5Azck7729TTk7AEYXDDVhiFRZpL5Ud5kBq9BJiSPgaVgP1pANWFyj2Q6pDFTBJN6u",
  "key4": "2rvizbkUoxkxGMbMRq3tVskuy9qwLnUwARQypG94pW49ZAiHUQ2sTmwG7QwKmVBk2awcXvEfoUCcSwHk1QWBvCUR",
  "key5": "3BsCBDurSXb44RsBY6NrrbogpvvJzDTjKGg1rw9UV4rbduKH6hy6TbbsWeRafeKihDSem5dRaJycnhkcYMWMCJ2H",
  "key6": "5imiQ4kp8XyJMr9FChnsBekKokVFtNx5XBiYA1J7VbStDQr2tt75jwoa1dAuEsMCGnbPQ8uqpWRydoUJHE1vBFgf",
  "key7": "bfjabutKxoLhucPdVx1yLUXW4v4FETcmsngyZj2VfJiMrMdc1h884LzgSVm7h9FTVjMt4oMJWsEv2YgFZuEeD5d",
  "key8": "2v3nqeqYsnGhzQzin3vE2GBe1z1n22BFmquDUH364VU17xYJjidnRNk1VcbzFFFcMgpiYaQFsPFfeYXXhqTsMEuw",
  "key9": "3EM8dVTJbb2wJxuPjowkBXDdqz31hS1iBYYgPjGic6mfye7PqPhPoeB4AMHr5eWMhGwkiA6vjqrkEWf9HuubTFvs",
  "key10": "kAmFrXSw7fjpWs6zvVnfrNVDG187GjPAx5SgNyYZQe2tfAXx3sYjvqWebNtL4t7h8mPVkQh6CL3zxa8DtvPP6qf",
  "key11": "2PNnHmzLEhLXm2RqGx1zVW23YGXbx6fqonLX8htXK6mupGGgHBMe4WtC6kTaSy3oKRyVQdYpKeboiYjRjQ2FcRWJ",
  "key12": "4rxWgKxtpeCQMWovqu14d6KZ2BPubhZYq4tzbwrpM6fZwro3oDHckTpMYvR8unc5EX8V1icVwpgWS2YrV7ZqtQCT",
  "key13": "5Lg3mC6osuAawcqTBxWdPgUuUdWa9A3iwawTj5mYaMxyScbkGLpyAmrb8mfurKJQJHbbMy8RhDYzTXc9rUNDfJYx",
  "key14": "4Y66741rAJxqi7XgSXb366m64tZSduq87uyYZ1fHUGcc3crZg84aQ8FnGCR6apr8E2APo7YEdNQwjxMkWP1faMyu",
  "key15": "4xB9mpNhofyJP7AA4TNk8k7VNHxDGnHQmEeFRWiZcXRMTuLNnkdeNvUJtYsZjahEnq2j9gJrSH26aFdeDsZFds1T",
  "key16": "kZ98X1cy3ET9Ups3VA4Hd1JXVjviYTpy8CCFgHHwbHc9hncoHMqN5XKVLcS7aDBGJ8MmM16cYkC7opvS9HPvsQB",
  "key17": "2Rh8Qcgw6uv5w4iw7XVW98BJe6LUpZmhMD2x2j53hxzYU2y1e9Ci5fZLYWC3rt61zuBMUmxzinZJNrM56CEqLUih",
  "key18": "PBQ9YvVeLfPeT1QE1vsMyoTw1MVh8Vuu5ZKw99P9KHwLBBExPZkqzMyEdjjGk1NY7uDsuJrZJHARZJ6UtMkq8Ud",
  "key19": "4TkBjmttZ5ZDQmGsWyWe7NMxYDsZtE2zcXU1Lq8xKHaUEScZHxMh28VieCMyzmqQ7eKXVC82oGg8dFTgy4YZAB8u",
  "key20": "cbG2sMAeQd2BbsSPpmL7HzUguf2RR2mJVWWXv16J9VmvfVkELy4YfrB7YFAEdqcoHjUHQRWS93F11Ra2VGtfznE",
  "key21": "2iXiyGyR66n1KErXRq8d85s7SNkWT4aiaCoWciGHLAUBEr5tLep12wBpwRcYZVtx4JYaCXnDhUdAUTyzYNnGCKB",
  "key22": "GtU6MmziNVoQfDgNNbcNTaauwhYCyyaTiHHtWk8z6FBDknYDe1QRMk9LMqDH7BYKyzJZi64KoyPZYVcwRaTosBN",
  "key23": "3cFP2YZUhJznf7AgKfBLZqnm4BvVCNFGJFGT5CVkrqURXS7L7s6EXLrvH5PrDCLKMP4znbacXnxEsG8qhVuV7PrV",
  "key24": "48FxL5yFMiuTFC5aEL2oAbAjgF64nwQ5GM7urXJfUsxK7zDMvcueCPzenFweE5EBkCrnpSEtBRbfAtuDoZDxBkHu",
  "key25": "kPRsu6cbKfTqG4KGUEqXCgRjrPABzRzhqUHwZGt51WqN1q2XbUdtFLVEMPM4dp1hMTWPRUTeJn7dgYxQorsi5Lh",
  "key26": "4yuvKqvFZVGgex6HdoEMd8iMufy53M6NHxH7H2PEEWsLsewFKgTP6CDxeiLUC8pnaGjb2wTGfZrUoxAKGr3Sm9Uu",
  "key27": "bSntkfDP3AS5RgY7EgTkN3ZyyGKzfgPf6evX5mWRJFwr6egZgY5sGuMApmmzq6pckjtNtfJynCJwdCgoEVNDyLA",
  "key28": "hdyoVfyu5vucz5TyTuNG3NwcAqQVafv9oKHWYFLUoS61zMXNBXnhfUZjPK4wQgHmSbbdZ223qg4DuNSzqGJvECu",
  "key29": "3iLFDxA6ufFyzdorEebGK6VfU1Pyu8y1vPHZ9w4f3i725eYPW1EGcRE8TG2ucvv5fCj1a73sxNY78KM93CXmjGLH",
  "key30": "MQ6rub6p47vDaBxDQ97eWnHS84DvgfrABxmPHEXxVqA8ptrfDBYjKWtXjPnyX7WXPBAuKv5iNycqkJKtYRhys5Q",
  "key31": "4HBobwKvPM7K6X9iBX39tN3DQGrddj2pe41zkAixggt3qC3TCkQ2nwH7bkQmxWvNAozWXja1Vk2BKUD3unB6HL95",
  "key32": "4eXXW75ok6jzhGUfKFiYnqhWC9iPEbpDHyfZv7DjyLNkysokjdDa3ZgMyZTiay2uGMjmSECybsenabTmGxVdmfqs",
  "key33": "4LSQi225cQipcjGqqYKajeQLbWNHMKzwKvEuQFbWdDHwvRe3uZzNiHsZcS8JX2JfypwF5gvQPPnuEGSh31VobaYX",
  "key34": "3EyQ9pGj96AKv4TbArm29FrmPnSjXP2tfSXzku5udi11nQVvoWktbU9wfVSvvnnw12x43z5Uo1NeEaj8dGgks2JA",
  "key35": "46sEUcbpDt6ht7dVmJFaCYxAJsspKb28hysvqa1NcsqDXvUZs9SHrpJtY9KdmypiYFQsdB8jkuh7c9Dekjc5JUBB",
  "key36": "2UECQF9C5UTKxZCAYx5MZpBBRGzv8LHDZoyz81QK7886SornvxVtyRZTHyZQtsP4vsJJV9n99iPS5EsNsrudha5z",
  "key37": "62J1B4mH8L6F7WuD5tKeRi3TrFUjnUuDb5C4LSVYjex99D51Thg83cACMVHVaptdyK3Rs4WXeNEb142nQkNNv7vP",
  "key38": "3vMANEwPWhyux3tDsa4DyH33nuPpEHmfyPLuZucsPxr7B1raxkCLTbLeqpEfp7qXftsis7TdvQTm8U35K6uPTDLV",
  "key39": "4ArY6CGZeFjxZTnZMkK7DDcxzuz2e8JHQYUDgiUYpmTxxkMsncZV5xWGhSQrZDsxnK3ogLBeSMudXkt2zwU4sTYF"
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
