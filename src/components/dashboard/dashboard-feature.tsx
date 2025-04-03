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
    "5dDKaPe89wvUZAQzJ8jNsyyge4S4UDy5zGxUfzUd7A7iiqKPW8zYRihFsyXP1mtozaWsCcwTzMAwGwNBHF9LBwzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Dt28H7CMtEKgYk7qt7kQZJ6nGfG9feQ9ki73KGitUevvVZj1BzeDbQgdP7YgEdBatk2gqCDkgZw4MpA1cTeLyq",
  "key1": "BMMtBqhBPkwbgdxMvEYX9N8gEchvq9fyejUYGaiFnWoNWimNq9F5AYygC9kjNLZaM1e2gKJMnv12PhYKYpLb5DJ",
  "key2": "4iqavVW4R5mYP1qDmKpsBCpBbiDBUfrsHXrLb4WcDwQyejugyKvYSic8asHiPiSCCyRbDidFbxhR6EzgVBBUQ8dZ",
  "key3": "5zG3RN58fXtVgZ9GY4a83iu9WZP9VsoRuz8LVdLdxu2rngj9swSK9LuYnjQdMt7xdXCvwwEtvxpYsgKfu4u1wexB",
  "key4": "g43iTbdLZFrwBRpNh4NYEDcQYGyjoLKCq2VAfRMaEqULjb3c7HkozdR2MwSAf8ZMmZkTMVowvewnwocEkQLHKxV",
  "key5": "dcxrR9NiM7C1nrXoFJKges6qFqMrZmSMVeh645GxQjQ5n2iQ6Azxrp1E7CG3ZU8P2jFUjkRGSCTiREMAZGAyb1Z",
  "key6": "4yD6y4pq1hfVbAyj21A5Ru2gmorRbfNUwJz4hWSkcEyaaoub1gimBJy22QvJG4t9B19hZx7pFyUbRy3jP21GAH3E",
  "key7": "41XosBv8aQW1WWRxE4T4AJ5UbAxdLEait5SnHdgjyYH65g7KfugvnpEh7n8dpUYqoDjpKQ3q4TWmGJYZ5FzWYqRr",
  "key8": "7orJWaqdscJxUnhgySB3ouGMxwQAdjhw8tCXfQnoxNiFXMYVrpuD4NvYnaTxDjdXYHSjg7D4Z4oLgmHCfZPBboU",
  "key9": "2mEouuJwSPjASWXs7fmNQgY2k7sKoEb9PsoJdKYXbTbvigXYDb6BkfGPFmPoUbABL8zT4XcXk5RbD89T3w75UK6b",
  "key10": "3Z7xTu6Xh2Vj3sQ3aoP8vxoeYMeFmhao44PnUtu3M7oQg8yxZyjwJy3A25HhvUWoUARToaW1Rc88u3wcwVe4VnjW",
  "key11": "65P1otfq5eAFiLd9qTeWusKv425UgCNcbfy5cpUV81XgHQDCcd3LGwQ4e2tuM55847RS4tftxAq4ZvgQUpVab1Xc",
  "key12": "5Jpg5T4BwMgC8AEbERTt8NNWjVRfTpcgThMVzFGQRnvzfKAyFG6Wvzz24mZF8HVsQEfd2LdFqwAyajxAneuphR8p",
  "key13": "21X7LW7WU3RB38gVwkc5q1CJTbuewVpfVdwwua6SxPd7y3BhvpfxhPyBegJQaYsPfezYXSPdfZ1xrFsKuLKv7CsQ",
  "key14": "3R34yWuHA3ft9ipDsfUNTkccn6zy75qKaPmBYzgRtk8UMXs3dUBvvmmU4R4S3NTfXcAbTWxGxPGQ5Cq7fKAR49aY",
  "key15": "2aZSECtrQkChduLaSeY1PhT99fpYMrjAyjdQNKPNQPUSLdVXhh6fQW2HkbhSuyqDKfpmJX5HL5pKehvgsRiUjDkc",
  "key16": "5hD7pE5vkRxKei7bEoBLdmwWySukmi9of1S4AC3DfEoRTMbJc4k55aSb35USKpdY6J4GL8UTUk4ACAkKvWn7GZck",
  "key17": "wtjWdLd6b29DGfoUupptXcJog9RKvrsbK5o6izCsBVEvbaMnGToFrPyHn5jofhEBaWW5v7Gsvy9isbJTaobzdcb",
  "key18": "gZsDZoCWPfRzBZ9sqRKBnNaFTQKuGKzbQSyBkSsJ9cSc8HwD7SPAjiJoWoEQVCGYJRAm4KLNuNcNVXiiaRRYVs1",
  "key19": "32jJ3fhBbX31HhrHpgCN4AAedqy5SNfev6nUxkeXSoyZxe7sMWeRmZ4vLzC2wsLiLNUsQkMhcND8ox4dCDxB7PWk",
  "key20": "eJFxcTzGkr73UnDoBhiBpQTS5RGkmgwM5GoyHziGhjJ8g2FPsT1oyJUgV4JoAKckTdB2KWZgbTRbA2MLAGSbK26",
  "key21": "3TGNtuxSjCtsZwmqjDwgZKKopAtHER8XGLhMEwqJ9NMh5yd8TH8qoD8GMiFhd6ccuNe24hnJbfW1vkUidSxsnWg3",
  "key22": "2p3K2Me7hfH1LiKs2Q3MhfsqiGfj1qGXJcsCi5zoy26wo7zY3U9rdZtMf78vKEAz9McxzKcKvkNf4rt1Q3wpBYfa",
  "key23": "4zxP5fCcKkUznzKU8gEZ3TDhqPg62ViFzeP3XhxrRqevi8SqUMPXQAicjZf5SjnZ12gUuppDYLYcWWa5ehSYe64p",
  "key24": "5aBGcvUGKSZfqQF3k3ZjtWB4oTsjxT98ecrxK9FiCcG7Eg7YDy3EkQhfSx4bJwaG4EKryT5sBVMXvtJEkqwtLAxZ",
  "key25": "NgzgKoZ5jYjQvkiBkxncwKLsCyoRWtkEmuW5MADAiE78Bfusehd6UYZmTSvso8pXTgby7yzYFWWawZ2Svmwp3Fr",
  "key26": "3P4TaSgag7qiN7ThcguE1LX9ZUGknamCCGSRxfqsqsLkXoJkghg6pt4E2hXzzZcfwpjnhPXq6ejWgHLeTNDezjCQ",
  "key27": "4j5qDd1QnU2g9qHif1v3j5Cum2apCVsi9wHZGsbT4Wa7MBqp2aJfzdRqMyUM7KLnKK64dbvUsPSgiRkq3ZeL24MS",
  "key28": "3hziSGsFCxcXEG95FPVaT8o1CcDALiZoxZL8uV3sXaxBCgrBGeySz8u7MxvVyZ2ta29G6MFpjndT3ar1MWDU55pG",
  "key29": "2mGQxQNTJhgfSN5coY8TMya3coHt3m4JFjYJA8ZFxr7t7akiVyfUQ6RjGUGgHS8Y1P7by1LP4ECme9wbyskhr2bo",
  "key30": "3M5ZBaBEJ14tP74fU8bXsjZELg2tzNp92GxzaSSiSxJ517ZdQEeg1hvXHm3FiiHDTUcCopgvvftfyFVLhP5BHqsb",
  "key31": "2QPJurUSrkztuSRc9m3d5eUoQNMCJei2MaFMJwpDiiW6cK9LVG8mD8vbe6MPvLzqcm2hUKeAovEH1BD47JaeAeCV",
  "key32": "2T1MqkauhBAN2vfc3oryVG1cbY45v7rme74o4Xkzfr5A365DXJYLHsewN5yd196nSVuXwuJA4AEgWchPLTDTr56q",
  "key33": "ys7fVqHANEpzpSggNvdkS4arh7SJbegu8oiZ97ejtHqBzjbanCE5UNkLQxVnjZbMRv9wopxgLrf8Jbdfg5QU2ZK",
  "key34": "5xZyU7yup3aZV1psnSSRswXUaEKTaKpK4bzT5icM2hAGYp9W7SN2dvxezNCLvGy9NQ79HT7BCxEHTaTaSn9XX66Z",
  "key35": "5mojiAsNBmzYNm3Q6Dx1xEPFe35Pewu3w1HnvcEcG7sWntHrqNhxvCM1hfi4zHq1ZqWZ7NpncNbQ3Vm6JRcLTgtv",
  "key36": "2m58djqa9G1yJvFPqV4NHTWZfxFt8h7obUryriLY5trjSN4cA41TNamp1ew8aSyoNd42TVKLPwz8Wab6iU3jvSRB",
  "key37": "5n7ba2FDKf1B1Gov4yFJRver7qqZyPYeWGFFdCmCpwasCg42mDZBEwHPipjuLkPjZJex2w68kQnGHPBAzBjCrsdM",
  "key38": "5eSFfcb5Fft3m2wFfCnxvRdBnjE7ByYkw4drVHTesbmcm1w3ebzdLdQ1y3dqRDJXDEYnfGksK5PL4pUzqFBe1mcW",
  "key39": "uJWsnvk45AoKWN4U3p3mpdd7No3TLKPk7sAQrJNa33SS1kH7h4cYAFeat1dN7YyGSr8FhMU35tQc5UCGogfk3FJ",
  "key40": "3Mehs17HrmomqLtEoGRvzSk1MoEfydVjn7c6Wv7D3wW9THY6DHxjhR6SaxxYRg8EbJF3GDmgkgt3XRU9dXqQ7Vtx",
  "key41": "4hYt3o5n6Bmyup2bh8gyKpu6dj9FsE9cn5XgDtAv99BSCi7HuzajhiaNaYZBzu36rk31NnATUPSxRD7hY6q7L1qK",
  "key42": "nfBG8LPMQKX8HmZwzEhskkMAnHL2R1ENVCjqGsQJJSr5muvrtsaPfvH1zrKBmxQfHN9PJ95sXGmDXJz2vTtjT3c",
  "key43": "65B9Zs44wNHgjHLRyUaameuRQ6sNU2wGUBTSzLVfuuxu5r2QH4qBF1yghZRXwMfpgvEoC1NnN6xqPU3fNv7iauqY",
  "key44": "54qiDv8BQGvsv1NXfkuqD3VERf2DXeY9feod52V8bMQNArF9YSgJDgaJydfFZymUF1nQ2eHJEpmf9W8o9tXbGV2q",
  "key45": "241edqWvRx2t6pVp1WEnddjvtyztt8g5NhH2tomFgCZ8x53Cx9pKB1GBvFtpXYBpCEJHtX4R7MqPmifpAvwDMdKp",
  "key46": "2YDM3uhrv96TRMGXjfiPBHakkXB7SHjiQrsbHTiKJr2AtYd3pttXeaer4YFFmTQGoT58hiuQsxGNxRE2JKGZZy1K",
  "key47": "brt1SsadhJxR91hfMZRnyTsSsYx6gyk21wKFMh9oqzKMyNwsZjSNoC4HFd9JsqHBcyxswR1CywxHmsUtSvRsjeX",
  "key48": "4B2UDnqR9kc7N2dXGapqeG3ob2EJZ5kNgacpGCy4hGHbQyTpcWctsyzcaxazCce9msrDx6ceigjY4PwcV528J53K",
  "key49": "2B1yXooz6iTYbLuvuigKaJyNSoo54vVikaKPEBeP2o3hgp5DAfciMGHGCCMiLjg7i9LA2KAdi6HQNwvK13F1Xdcc"
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
