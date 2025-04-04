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
    "2GXQu1UeRE97iH7QFKwSdFhP6qfLpMj1Ey66cuwzKyqA7KeAU9K1DtjVtUiVyaMfU41Fx5XCFLz8FENXpfc77ie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6MdJfWbycS3x5N8NBYMva9CMvJQMQ2NEtSwYGzJpDQLhGzkSsKAynwnP57ZqiFEVbELTdz5rYMmfjm4gnpfNNc3",
  "key1": "h8GE2jbUG4iq21HwaNN9khqC6BAzPLRz9b1j2uVhU8Vmg5DUEirUNMStkyy5vhJtKcceEdcm6URahpVsWLKtuBv",
  "key2": "33EXCDKsSJvTNrrPuvqn29ubbnzmSaYuVxagmuFgwULPJwFvECS6oVzqodmydKitQKNHjf7QR1BiZcYQu7rBDRoU",
  "key3": "2Umqy7w9aCZneFChsKK3Ga1M5oddUut88qRZGs1C4K5f7njwsXYarnfGFX4gnqibStcSUK659WAtM8a6JnJRuebb",
  "key4": "2uL8UkWCZBH5Js8b17J1FMf2SUeKE3qwHcHghT8Mn3t8Qghc8Cj15q9QW2vPJn8GUMND2Jf5R5Fs3SuzxYoDoAeh",
  "key5": "mxpmYiZKLVfxuK7ksfamkUYtE8SJ9JJ1CUtUNLcMEmyeAWPUst6c7LpddXUZwEjdUrpLE3qfRYu4SZbC8kpeYWW",
  "key6": "5K5bGrtW2PXYgYjh8vPUHFoPTtoqho4CrVV5LxTvWotf9cpED8ntV62b1RJeuB4aoMm7bXRfNxChgJN8EZue3hVW",
  "key7": "2nPQZgWCmuCqNPfH2NdQGxcaj44aAP9p5ZBdkERbfH6PHWLjceFdqJkvLqrZAc51nLfkeQ94w6WqUQYUv5PanhLb",
  "key8": "4Gj633Zu7YGqvUCguuPxwcXuUG6yUfYLAcpZG3cLLDSqUKWeHxrET3eeLTNopMH9wtxHT6bJjtbKMeJXNKWDwRGm",
  "key9": "5ybaDHqTNg8KxPfVPU8ufXvD6Lb8euFQynZ5maM7HU7AKBNpBSycSEzU9X3BXHNUYiWXMw6YyEFjgJtEcy8L3uvM",
  "key10": "3kH3zm5W4TBbrapAukVYxDk8HXm793QPvgF3L2xMfV7vZd7hwCyUx4gBChsT9MSffKHQzfBSZsFwawd5gYThwhjH",
  "key11": "5aZTKukRpTeKPj4wLAir8HpewxFN3w16ytD4TTvzL34tChiHPHoHCyTUbXiUMzDKkNJ86aukaWD9Yn5G5hdBcsMu",
  "key12": "4WWVmHS8vVTxV3pAzU1cqEAGXSQRufk3MsNR1h6WSaCafnu1gsj93vsJTDSPXD7cMySAV5EaUiLt5486Q6XqvNu",
  "key13": "2Am1xrBHjH88S2hxNKGNb4q49iqkpio7ZxPNmV1qt7VDPKdfUHU5QGd4mSAfMyb9eX4sCGz17RbBa3KY8oMbiKuu",
  "key14": "5xv7q2XYWZv6v71pY7aBFJW2XtJJwKMcZ6HbQ2WsDbqRGwdkSMjarKi8hw4SBmF9q73Fp2Yvobvu5GkigCdEvv7f",
  "key15": "4ue796D6vk3QBJ6NzjcZBVEahWzweNHQc9gqsnYv8Kqg5j8VDXm4dAND5aRTx63x8ESjPwaiihNgjk15biGyMh2A",
  "key16": "4qfSaWXShf73G8ze1Pa7AWifUirqeN1tKacQJueWoUmddHNbDYKmBKwiv8TjdoseLiZ5gz5dvfccyBMiNvjrbxxf",
  "key17": "62M79i6tSh9TPNWrJ18nsEPiNRRzUUe83SspdHUVnhxtHYuCjrSXxkZdvZxqzAsmuh5TNZYASQnpKCVGDb5Q254M",
  "key18": "4aqUsHE96nDXn6WQDf2TtG4Mp7AuKEv6n5cK6ocwwUQLcHowxhhBKLw5ZiQMpQerG7CYUTkHveU3LGJ9xwoyX33p",
  "key19": "467uwLTgvop1mgAVn1gWZogpakPwEZwUNEni4jzA2MXTE8AfQckpszZ5yR3sfpqTzsJFUU2rvotdNKVyNGgdH7EH",
  "key20": "3ZV6AVs9cG2q3jPKVbZTq9xuxhZQTxom18D3HTpe6LkmC4Vh5mVmRwYg1fTNZTscc4iBNUaHp8fBdGsR3XY3L25h",
  "key21": "wdvEzRTN4W6UVHcSZsAqoV96s4xbnBiqXGsNmzDNDucT2KFmxnjcjw8w1AFDxt4FxVeAhhJwewVZs2NRsivJXAh",
  "key22": "5B81x4Cvcv2toNr8vgVpgDdZjyWgDBSJnKXwSZ2JeNNpmEWJaDuk9ht3FzR18KCoC6U5mZ93Yki6MLtGgCE6TFhX",
  "key23": "4uCS4rLTNpMEyw6vLodt4KDhpnBNQGweZmfi25JBJhyuxHVtq96t4jWQrMFR2B9RyzZvNcqaCvCCZDNG212FJAuX",
  "key24": "2YJ7MBTTSeSt6221HvxHuopVVfvcaMMD6jkuotEqnVQCrCZgELiJhWorGPvoJ58dvBshM56TuQcQFynFDYc7S56i",
  "key25": "4qSDjMzXngMitPyDra4juaQCzzY2G2wLRb2vKeUdEU3qDMCmFq7zPWTgWoLraJesuZWaAdc9HhMLjj7i8tcJ8KQh",
  "key26": "4Xrgr2NEkgms3o6oBDnoTFFJY6TbvYqWYvcStej1HMSkjsMNZjcQEz7wheB6M88LJ5V9pCKvSUW7gq5D2rYXnDnF",
  "key27": "5cHZH4AqMooJKpJiMnoSvQZ6vmgdhkzf6iF6QMc8rfxqM5nQ6pZVKw2niBZztWMoZNxZptakMVogYuRVBQw9YYZD",
  "key28": "PFjUsvehSJ49cJLto8V6jinYqPfb5nN4jZ4v27HLDbbxEZz9AvqL1daxhN1jmbNKSTwHR8BRZf8SSVWarkjZLbn",
  "key29": "4v7q5t8c6XoL42USVotdce5HmpHGG3nPxET45u7T3vQ376MuqR1EywbaEmq3ep1tpwNeVuyPA3vLbcuzqja3n5pJ",
  "key30": "3wtDg8qcKoGPStcqPJnPJ5FjyEKSvmsvQJisYJ2nfmrYv6KjvBafgHYgxXjCyWgVydmsyCcNrtMK3iq5Pj3d6K1C",
  "key31": "4PbFozDjJ7mNGojrwHGtqCQGkbg4kw4uD8VEZQTMQ9X8YfHsoXqzcP4233xzvtYNwGGLbCPQzZfvig3NJjKdZdoa",
  "key32": "3tzYvyKKpxyNREboBPcoV8UkYX5LHzCzTpL9h1f5NgDTZdU2uUX6jkgdTmYkKFAADbJatrm5By7VmrqFbemUv8jk",
  "key33": "5c89yRr235fYtf7wPZeWG9EPBhk7Zr8S6fMHuC8nSLEWDpTKmUGKrvn2DNRphnpR3s2Zb3pyurBKXptZJaX52QZf",
  "key34": "2zG88hjRZ8GbPoGRn8gCYBtuFRMoyxRMhDdBZRVuM3idkodLFZcsgcQbqc6B5sJDdBP9PH3rKSiXL9bab5pot7h3",
  "key35": "3Q9MYg3CoM2ZqApQTm9kB2AQ4d2dcRgByuGFVV2QKYawqWsKedfHgF1TJGgyW6PSMgzk5E1LLVB4cxKHBAddWF19",
  "key36": "3vSqU8U53JtKhft1786phcpDDDMTYcvSSqSwxaLqzSC8ZY1ANfrdAJKNftkk2BXV567uMMyj6MyPMipNdyQgC3tJ",
  "key37": "5Ewvo4DyZkZLSWwKHuRREfBPtph2cvznffQsDWutc9vrAg9Gr1MyWRg6LsLTfbdBGGefzpJwYTQVH7ra95xLEaTp",
  "key38": "5RFFSqqx944LzZywcVJjpfS4xwZ2TwAjuY7qrbdxMztP9Uqtb2uN7rFXQamLKdXx7roJ1uB8YVAkZiLarfx6DQHT",
  "key39": "3pFjigkTnmbCbc7hSnzqP1V6qFv7xvodywVvK5aVeh23uvDAuaepgY5gGD2giAyPjQ3gRVnwt7uhMj2p8CieqXWF"
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
