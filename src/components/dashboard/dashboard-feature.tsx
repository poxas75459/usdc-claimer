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
    "4Z3AKGFHeQm4Zctz8KspBiE7mDn8T7j1SgypwuyT2Sy8F9T6WL9JyatFynCDfECs28n7oNao5etCo7Ks7m8dggMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7AoviLrRGBQpJG2uEdbCCaGYfWJME7yjCwLxSLkz8WXuGvvWzAYC8RjnYHBuVTNYzfJokjpWrJ9FvAZfrv73Xw",
  "key1": "4BLoedzwMALJULoF4rTdw3A2eQb7jKLSkB3REigUPy817ujLdoBVoCiWmHswFCG4f4q83jN8mfsMdA7E51tWE7pg",
  "key2": "3xv7z4QZHt13VZqRaK7ucwqghJNap1DEMuxDQXhZhZJAhFcQwLnsd2ZgcmK28TxNN4m3TMfx2ThKPCFzpdpbSVR9",
  "key3": "2JFFdhKq5c5JqCoHWq5pXbKV4hAAb6JdkWpiccU389wsWigqzSH8rX6L1rgmTdUVuW4vSpB4hKqrm4XR4XYwNTjU",
  "key4": "4oVrnCWNrmoAzeDkCtd6UybDU1bXsfX6CgLqywV8HqgCHjdnE96NgHJKRvTZrFWtAD7JvxKwzZ8h9H4PuBu2KkMQ",
  "key5": "5jMUvj2MBBCZt7K7heApbJ5ttnwBJWrGVM4bZoio8WYxc4qGi4QhpwfDhSDnGCi4yLNGwTAprYokzYMqQUQEwfTQ",
  "key6": "iZnB1vAsgUtbx43U5BazMiuo1wjECjuj4gstzNQjSc6cqkPcHf6rZACV7yTwL7F2cZ8xckFAS7fCk4BvDZDAXma",
  "key7": "5evnSHsT3qkzZNoNSdTaNrwysu8avprgJPFd1kop1tdPAZzUQmZ5VFgUXncvFKNzYwp1wiTm446V3WGXuBs7CdQ5",
  "key8": "4wa4CSXuuFRHpHZv8XxBJqhtTvnpo42Pb7CW8Cu7TuztHFKFdwVcVCk6ncULWqMfaNRm3MaufzkaafSTEE7iGfp4",
  "key9": "5SdiABYQufc8gbjJeyH8dUMkjXVymo7xmfEmFGKChhBRodwH3vCjZPyMWAaGReUZ6WSfiPUrZ3ooSP9676TxMCq5",
  "key10": "4bH6ZBWVtuH89jagzkGg26miwDiszrLzRnErDSSLvpscSwryHyo2xtGiWdnmkDmtn1XunDMnDFDWhaFG9HNdZcj9",
  "key11": "4A85d14ZxjCtTEffF3ZAP1D8YXiDmeLPiZLMyw6ZteQ3AsFAATVMfezerUcN1CFTVvHFp4SckqwYLHNiVZJMEgM4",
  "key12": "2YWrtvDVtyENMy8UqVwmZEJ9roJgFTigavD8Gu9PYaiyWptFZTdZHG61n1msyXoyMHespVhhcyuqJFSVnqaNy8Bk",
  "key13": "4Bo39dmgvVerz6skfFd4KDhHB7zACntPi7RZ4yb3aJDdNEAMdR7ryPpnNTD7A24i7izGtjPDDvAQUmMXjcuEtwwz",
  "key14": "2vhckXeNFHM8J3fZR8izo7XpGDxqWDUtp1oEFQfVtqQ3eGyw5sA1of5KCVhrFZ9fEset5HvViwB8ohy5q7JG8n4K",
  "key15": "28DSCRHt8FJ63YvBAqfPiZXag7vxwPD1zhNxLHYPYQjeKJkTdG6bu8mdue79WgWTpEbuud3aZ2yGdu538mGjcxTY",
  "key16": "5X7CaEFG8LFDutkeeZbfC1pJrWUK4CPxPw4ajohmKk9rYiD9dzufafVFMp7U1hFCEYe2SbBsUEGGHf2Mt9q7Tc3u",
  "key17": "41LX5o2TPjSbWvXDKEskvW33VSoNgu2yHhpFx7MM9bPz9dFAsVtnHf3RB4FgVbA9NUbkpdhWoR9gUai8j1GgbcAL",
  "key18": "5u3NrWg3SwK41d7tFiikwBYa1Gmkosrmgyd9uuHscQc7wuubKeVQQQ9EoQegrT9YirR3WhsuSFV6uEkDtg9K13Xr",
  "key19": "593M1icaNQYr1XreDgBUCZdLGMtH5saN6YD3dkej28p4K8k3y2MWqmwW5qza2qZfN6XFuJ8cQaxUR3F7MarA57D1",
  "key20": "4vcAC8zJzkEVwXMWd6wgUtiJ83yN3j8GxrAjcFQ6rBJs6ffWjEGFMsL9MyS5C84s4T1yHN2HMQpWfeTcoT3b7msA",
  "key21": "5tuH2iUXwnSNmn9Bk14ev9AmL1aKm72XCbtATqy3Kzhet5iwzzFBmVFiLuau9zHXfKuGUjahwTgYzGuQ9nE6YkxB",
  "key22": "2LHZjFJvRVKThCeNZgKnbExiZf4TjLFLK51C1VAkdDL7e6w6dvt1fkreYiJvHzKdqBamWYKBZASDLrVUSniiAueE",
  "key23": "5niFLTz9G3nxz6DBfzCyjdSQoERPuHytEYpxV2r5zyUWXpFzvshYWbU7bYCG81A1YMRjop3eVidvde1xcsCWhJvq",
  "key24": "4usng4sW6NjaoQ8qh1MDQs6qqYj9jhQjQFE86Sc7kXdkDGF8qf5eQPxckxMfymV1Dk2ZvJg4Arot64xw3XUq5kV8",
  "key25": "4gnQKUJZWfSKVrQ8ZTehsqEJpgFuhnhHfgPbr122cthDspuUvP7C8vnynYCBLpwKicJUCXGfftTWzs69G1hGdTkD",
  "key26": "5zT6d159LdVEgC4GygWZreUdCY4pT8pGpXagYkSCBm7agMMXHZakSo54KYgea5SLQAxuvenzq3wUzUChJhMLyMSV",
  "key27": "5L9n5CBPqZeW8cP1EzjK4qxMPs7Ly4D2DgcmxbR1danbbEfU6hpntPQA2MzRrgNvYdmh45oHqv357JqGSjzrDrgS",
  "key28": "3Px75RanETk51WokGYcDD4hhLJgaqksqBxf47tdJJDRemDwR3r7peYY23p2mcVjDoSebbnFVpMg2TCiaZ8rrK4Mw",
  "key29": "3RDkWMZD8XsW4cRj8nYdg5nWmMFA3q8SUWnxa6HhQjJ8z6usUx3Lm5UQEn7woxLnG6rYGvu6APJaKLGPnEVXf4Ky",
  "key30": "9o8SPpsHLQjGtUokWRuba9ZaQv4j27zzQQFmsCAm4cTJmnUQq49WQDKjAjmuhWdEiSGnL1uBoAxjPLJXjoKFPgF",
  "key31": "3CsSh7fKn5XTChqxT4DLCT9xoamYvAn1RuzkQN7TeXUX1AbZqpFY54MfEiX91pWJjgA2xaJ5mzA1ZjWTh3K4bmsM",
  "key32": "5rEcMeKUoq1eZ4YfQApzd6ZgxTjbPVhydEzf8tqQ3wbGvhGVcCM1JAqHyZ28T42636NSQSbbhZTMMNbejhAGSKwu",
  "key33": "4heSSTK3fCZCaZFxCEQyTbAYfMxXMzWDKytG7krmdcv2HiUUKcD7NR2bE8v9W7NwPwJcnrgezSS7oAP2tXCsy7nm",
  "key34": "5tSzwE5T2J2eyMEw5jzvDmJJJSUjwW8GJRjQdnXYbnEvSzK2gHzEizNKCjXRuEXvnM3aCb7PFyjGoAy54qcQWUi1",
  "key35": "3atRGCExnj1qpSyoA4EjPJ8g8z7WgYx6sxC2F2MndW46UegJr5oBPRRomgXLSfRzycyQe26EiWGZkraR7pUR3M2C",
  "key36": "2Ev7we9tqidBLkB6LBAU8Zty853U55BzEog7yBG3nKC5UHRZNEMFFTDdWcXhMHPaHu1UJVi9HUeTiz4tnKgFsNPH",
  "key37": "3tV3p2ikPoeiVtucP94qVKi7HCK5jVmwisyj8EdTJhJTo1UYJLjBKDY2WJUiNFGB48nBHMk8pnrLX1UHMhodg7tb",
  "key38": "5VSbgbg2KwGwnQ2RBeXxuDw7s1X7w6FmBAK2U2FeKDtvs3LPG8bYQxzJeZVtKdQGB3QKxyFdkhCHtnUaPT5197t1",
  "key39": "2GkwNsG27imPvmFxZYvVRtw9L6AigC9aGbgzpMtzUqBh5xuvaK55yBvPyVHy4uS6kgDQXbfbJ5Cdtp5xjwEqnB82",
  "key40": "56jKvUX1HaxBaQjeVFU4AfCVMiuqsZmr2J8oedCrVo8LWft35mJfVVY9TLwnhqSR8eMBdmDHaW5xveCLZyHnzc7x",
  "key41": "3q4QPrUvSoUcMw3MHH3SBD7Ukg1ZhshKz9Bh7zfDYVuboyRLTJU2TNKxRMjWEwNZAahkPJP5D57GTfS4gh4KnYf4",
  "key42": "Stvtrf5npEu8CvhcGCXtKJRBZkHoLZNnfgkw3B6rSUUPFpp2mTR9pcWuVLrmv8PsjNdkxKqLnmxrcpQRrEbGZfG",
  "key43": "2twS2ufYnwDBoDbViS4EGDC5bqxjbXGhpyiKzc6g4EtASypaxm7it9VwUoDDgZyKYU3eoRpzqmo66Zmn84fncMDU",
  "key44": "czL5Hkha8Ge6zHHcrMCHFvFjFs2yKxsg3XqZ2UNeQ9B7QRQXYfbRMkqNozw6Bi3PayoBTd9nY9umyuHRCwQuKGX",
  "key45": "35FccT36wxsfZmXdXQR1ttsu3AGLyY5332jtuVzrkcCvtAhACnwBNGG8YFmkAuTNwyHuFiwxUoNrK2Bh328KUT8c",
  "key46": "5bC39DwcSWMgAnXhFAT2o8vWBeKZ9ixNBqMzBqpH3qaptB2BfiJ6xcqfU18AaxVc24GeEKqnVQSpoi5HJJNnFxGd",
  "key47": "3VivY92Tr597D8gZNtTcw4m31MeJGGfibWWf3q2DArZbfuqgKtFdZXNFBqTo9Pwd4x4haSfAJaMYynQMhoLgEmnX",
  "key48": "3XTwNGLnN6y8FcNustgUVQEcp4ZbYp9Sof6VHPPSRN1xAGH4aZDmoceVobFrCn5dHiH6fgr45EVM4UAyejKiCvxg"
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
