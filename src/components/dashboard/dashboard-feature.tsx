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
    "666RP5mS7mPHPr4A9YjGFwr92wtYgMwPLNzfmZ7UgQKwgkJJGxwqzZ7vEZgPCf4ctKYiPqe9MbZogXMk4N5EdjpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mr81NwC7RdrESnyc1FiQU1MrTCuuMNrp9E4EEwnXXfTpQLRtABUyg6845FBdj2QqmD7oXA5frwydkoJBc5Kj5TT",
  "key1": "2njRXps7MsPVtXW98tgqoVGBSq1krogUnJ5FVU8LoFMaroipWz44kqs9cmRXtRx9L8qqVK6AgtJzVHNMSi5vMAmU",
  "key2": "zm3rGR3cUJ7KkKED467sGBkdbyG31NsGqkDjy1KLRNmCMDrCfGWdDVeQ9s4qVU8re4REATNzK2pNr8YtCRxzSSt",
  "key3": "iUGQ8UYyZ7JcEqQQY5cb8c2ZHfGTKWpbFfvdJrPMQTCazYc2KLn4tJ34fYH1CQNSfnaEh897VtcR9kp8bzPDFYT",
  "key4": "2h1GYr5nBiTHT4g99H7xLVgAdxJ2EoopFMrjYxkW1mnGoPtouZEHWTbcVSMoKof6QFbyQwmtexkunZDkyqXmE9R3",
  "key5": "2ScV9MjGgnyjx9WkVQ1ziFfJnP3DzEtvEmJdsDWUoTXP8dz9EdXZLdUrmE8dMGZ23vLke2P8HxsH8umMV8dErhhQ",
  "key6": "4s7DGk6iz2bULKbZnKLwC6F5spySdywpBdkHkiKnzEqh7NKwJDU6dyNgMkgPhJKffZC3MtiMAJcBsuvSizJ3haGg",
  "key7": "3XtNr54rhemgmGJ4S1Z8ZUPyrZZU2M3m7MY2WnshtXLQGADdyAGvKHxnrX2C2oMMHSZMty7Quzr2rDedCi7h72Mg",
  "key8": "4rKkuobfXmvEng3NoREbJoJxZW6YW3YfjueHeKNqP5RNvhZxp6ps7VbKK5HarhHgaKLKE2MAhL3UhgkNwFHXaKyQ",
  "key9": "4WU2oUubwQ7gjVQXwGTMRuo5AUdatpvvDNfRwSV33ia5ZwwGaC7TNv9HHuzZ1UzBrcHp4xzzjQ8bXgeNtZLMZYjs",
  "key10": "DGGWQHyBZHrrQw5fhDb8jS4c5KXkPV3j3L5xHYMdRH5ik9q4Y92Nkh4Lyp1YmAmNK7raX4nYzpuRjNs5fThxhkt",
  "key11": "4Xzr6PkLmj1h3jPSBcmTnaiho1jtKMXKb2mzJq5fYMjrQVRoENxBkU1cKgY3xeAYFHDvNGj3WHnpsvA2GvpFQpBK",
  "key12": "5Y7RVYfMnRQWGzwtMRELrF6GLcbUG1DKtFBvqYJsT1Xes3daeA1U3suxCRkHyfm1rCAJNStxkwvtRYNZJCaeW628",
  "key13": "2BmWM7gW3cNVhhJSQ4qUmjBXi4t3dSGcq5kVnggy3KSjUtqv3aDs7x7KYDyXVuwvyb3wJqkSGWQw7NiqvDbhBZcX",
  "key14": "2k5N74nPs9AdeBDJUpyPv7cdfu5vbKY4erQkmMy6vQeqgihbx4mRnirvx92FZHbn5gGq8HDx7N2n9wfrdwePpVuq",
  "key15": "5xdSQLaTPCtJ6ySU4UvKmpzxj37vj3jovcBP2kM85w95B441kR7H64qLZwjDF4wRuEgpWioL784j2n5BhgK2P5ww",
  "key16": "2GH6MyoGfhcHh1QX5PZgsu9o7jt8yuHsBQgMrW1gYbxzgBaP9XoFoihYWJC8RnNWjVX3iPoHgxiNaztvd1PAb3yx",
  "key17": "4kk3EJgNEmkd2R5fzepjYw62tBHH9PPBVfABNVQxoKDGvPbZJiTaxfnyBbvdFCkz3DQ5JVFfkQc8GVLycKE6Htyh",
  "key18": "2JY8Yu61sgiKayYgM3okUCsYURNF9hiAhRsVoUDuCLnDM18zT6Lb7YEWVpDuyG7iiVCgY6ES9hf8NfZagz46cC95",
  "key19": "kb1HCNzAEyhHtgUMJxTwR3SHcNAoPUziU2DjBs7KGStbvCM6pRvJmQVZecyXh5F6ei9sqUnZ78NjC51Z4xCeDcg",
  "key20": "51885BpwYLueuVSsDQJaBuLtrkVgtrxcmxGWSdn3as5UZYNGTNpXR59ngCzYEEhLt1tUPE1qrgG9h1GNstkdxaZF",
  "key21": "2SkDoCpJJJaMhMTPQEgRmiJBQzpYZTqnnmQmvALBAyZ9uo42aJ4W72WGachapQUkL2Bi417j6wSAe2vU5VpvjCCD",
  "key22": "5REH5h7hrcbJuBWgYBTAo8PUyYfsNzthMnxia6JGqgZauUjrhPiuMYeGkfGqKLE4y84YJWYSFcJjbDZ3LY7UsMXy",
  "key23": "26K8MvKaBJnhfukkgwjtFaZixrHpCaJPivFgYgccKi32fhShqqFaP5PrUQLGB9aGZTx4JMUJaXAZV5huxipV42W8",
  "key24": "4VJ671B4NuhKAH1P5K4qPUQwZSBwbTJfiLoKTcqSCucsgrbBtvvuzZyyxfhRsCkpzTNyjQxhevbqJKG6j5j6882G",
  "key25": "5MTGfDfg3w8jcTZf1ohLgwzyVYCwgHddd8m3PZZDexBeww6g6wRK2e1kbCyTCukqSjF5NYiZiAmv9ZYCMwsFqZrH",
  "key26": "4osLdCWYLe5gEPdiRnE9H81DgUe8xi3sjzR7terYtc1vEBF1Ttapob8LHgyrYW2Rnes5AMTco16F9kUvgF4x2m7g",
  "key27": "546BK2qc2ze2KmhKRvcpbQjBNKck1GiEuExcJCbsPJ6nZ5swFtMCQ9FDpCxoxn4wCVwoWYKxEQP49bLsjD2wE6PY",
  "key28": "2ZGj5bD5YkA6njNvEnd8PcMwFaocSsQAD9LfbNAo7cUNyTQxXSWPfVHRkukBbfCuvGhHMp3v3oByseGLZn16JMCR",
  "key29": "4kztyt1hCJbHZZgEE8DhLMcEGPWRmWrbBcNCJ5aCe9N2UK6JDqYhc5sUUQeiNGqxR4ShEKBHZmLTXV6RmBr1fZrx",
  "key30": "2rQrSP5XLpbkRkL6aFw4o5JBkuoZyRdGqabkGtjs79LSSgH9nDpKTGuucXUwpAttUywj6zFfo8NqGVkFNy2821R1",
  "key31": "3r69ELsJ8igZWEX4FfNYY8jK1WaAE2efewD9QSDVt5JvnCDGu6KuAR7q5VN2qTWLuAkK3e2Ubd6AV1XaixuvmNKY",
  "key32": "5CuSEjmdPQwKytbpU8gbhRNq3uoRxsLjEFneUAa8JxFdab3Kj6nCDSkbXNiAodweby3jBdaP9fBUXfTgLM9sDDcd",
  "key33": "2QrEK919WaYbmMmRiVM4QEqKANBwx2NpkiHvEGFXqNRcVKNtau3pGFJnoVsEBgr5m68pjuiQE4znRW9ZyyJpmXum",
  "key34": "42Ap54mMpRdz5fGCnE5YodWA9tWfVAGP5xPk4BRd8fYBq66hvGAkHWDKwH7ABsiaD3ANMoafT769eFuEoM5DCj18",
  "key35": "4UfunzoioT7rysMrqrjE7obMX71AnQsUFQmcYWry3VhHAV1ydrN7vQp2CCgSLzG668TTvoQ4XfCWXEn9BR9g5zB7",
  "key36": "5muw7Hf1gsLkTRshReZrbSwvcXV6D5xTWGDxPVtFjQ5tn1k4wNVcqVgcKJKvhEsVNXtASX2r3YdhFotP9hHR8Hmx",
  "key37": "5W6Z1Sg4pGGu5i5V5Q9driCjT7wBf9QfD8Hqmk2jJXtY79dTHyh6efFRLyGbLFLjm1hBjCXJXq5h973jQR1kgGhi",
  "key38": "5gEHABNE29y2Us6u7YNJUpdtiMtU3RXUgpAL8TBhHkoG26ME76bU6V98uBWZCfkbEAaKeWgnvPEkJTsnTZ85hw7P",
  "key39": "3oabjEfMKm2tkMURmburDoQgNaaGEQVoy9bZMetR25Cj6aSCvfpQTtZsaJyapAXbbcGZmZQjrY5cCUE6D1dPXZW1",
  "key40": "91sjJ1MhzR6q6wup13VXc4hoMe452uowW3sesujGGWB8qBYd83U3WTQPhJUQsdd8SY2Hp7xSGU3XjAHf5hYK9HD",
  "key41": "3SyY5u6KKR8iSysmoNSHLcehb8xUy6ndpr3KFH1t51gpJm6cYtXaMfmqoAzwMGxjyfuv9d4PQp6WKdF7W7MrXAtZ",
  "key42": "3vbZnr2BtPWm1Cr4Dd9S17Q84sz2BUs5WSbEjoWPYfuUGdDxmNHnyYjzFUsBG5kY344iMpAd2Y4poVZiZhuFdT1j",
  "key43": "66dmunw13XoaXjU5EpvTgf8F5udb5nRw9nTtumSdZeeQRRxn6ANkXz3srZnJNGuUWrQPG7BivCTJvFdQsNyoaDmS",
  "key44": "D2wqaXBLwcVECcUxLE5xMUb1qCXRoUP3W7Dqx9onpdy8T5DQWEX9D3KnXKYP3MVMLmrNcW8qzGioLWEEqrwmBPk",
  "key45": "3yp58Ca6vBBeL6AK7sGcVNXhpMj8pdtWcx6sN3WrXAjBzJiHwHxDb3C1Urn6mdbmYuXt74FxUq2Rysq9R5dYdGkA",
  "key46": "5n8HvW1fXA9U12aR3LZ3yJVeEJXaVKb6YQDoqMk9Tkcap6H78aCDRJVcaSQ81QXEY84p1K8JJeStUgPccNVhVV7X",
  "key47": "fYbk4Wpa2LV8LaHwtk697uNhpw4ZQNj9oNdp3UT4KdwFiyPd9SCvu4TyMcbRTMb9ZP995F75yX3W1XuWgk1tbWn"
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
