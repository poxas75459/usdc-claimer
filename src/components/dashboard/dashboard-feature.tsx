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
    "3LibVZrSFY8BoEztFZgAjBgYhvQ77QoAS49kSoYomVXFSHgGRN1pyN6vyz2eSVtXKCMM54Bo6pfZx7bt7j2idfPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avaB39ijoXtBaSd3nNX2n3WbDUBk9zRSj7nEjHFHwaEDb3Qm4XE2MtmVSqTS7o3NcvATbZZmJy41XQvVJKwUypG",
  "key1": "2pMBh75RKPog1PyBgq4fbuQwVqwamcuRE7hLb6XC2agNZFkt2HrF5rT5dQHhDvj5nBZiN9Uh5dPCXG5VNrnEtxga",
  "key2": "5Riyuuc3f2eMSgPVQFmxJTBLcnEeGvNLK5Bft8wMGXrbCCUQMbLRChiHEti85sUPWAnHFaesr7qm14P9EuEyUxg3",
  "key3": "4gH4PSrw5KCBxzgCWeUbcj9h5ZKX1kRwes3cNvaLfZHmXPMbHJigbxFKeGwWfE1VG2PR6ZzcqEtMzJCNUZEQc98J",
  "key4": "iRzBjvwm9RCBpoumbsUW46F9sWKmcd2e2uMR3xTwaMc5QomsuUueQbkFzpqQcxda72ogDmp2a1K9rg3K8nU4wPP",
  "key5": "3ZcVftydxHMx8YvxQ4ZwjciYk7s8VqSH32kHW87HxUYhNkYmbgsjNdosV8B6sv7pHStMEJ4XrM4s9SfdSWbNMVXK",
  "key6": "4XBawfEdcVLudAdVVnxpjznCo1RjtfoSnYWaEjwkXZs8ypUmYor9LZr6bGnjvBo8yANf3d7EoxiezWZKvUUvMUfi",
  "key7": "5Jo1A4s1HxqoJaqRZx4JWW6QMFftguVxuGNFVXZpxP8NKZiuc3jz7zqbPUqkRFjddXKT3mpnK4rGri3s6Ux78P1q",
  "key8": "4d5kCUDnpYvCznGQAG3MXnJqxSeEnrKecv2CegoFq5k9NAbZkD3jke4shYrXWazCfoqhTa15Pce225dEtTdV4RXU",
  "key9": "4RELvF6gwcZmiXVfQsc6NgEQZkcHuQNUmcrwMqmoDqwKAeXht8XtMUHrUbK9vp7kXhPZjSHJ6jJyY7xChhvMHGTZ",
  "key10": "2w3vnBQ8GFDM84b4TVrFZvK5g6whYTnds9ozdzuYubugWzXj39mJRL1tGbMUyjDRHLELTrDiDngyQZqexcavFARN",
  "key11": "3zr9yzGKyo6NsMDSaR21iMSsxL3onUtWQtaGYdtTJQi2SVQham6tjBAEoYwk6e4cyCFodSTm1stgDFwchNudWeDY",
  "key12": "4nucP73sHgqqDEWS7VcuY3B4JYNUs2723RaCi7UM7mQ7YaSTiwWdXkNCjxrQX4z9A71nHGgCZMmqECZsKMcUQg5A",
  "key13": "3t8y4p2V131SEQnebFdo9JKVBLR2v2TatMkuzcJoK62ExvCJxyMTBder8aG9KtjsEvwU82PWm4NhWR6zFqfb7EU5",
  "key14": "3PEPvxwj5zvggffQ4MYrSTiUohmKeTNktoVZi2xjkQf4iF1cRKxJorMrB6jNtNkwvkZYSfGgPRvkaizPpo6cFZUc",
  "key15": "3t7A5TxaZG1oKc8BrXohhHo8g83YTDfXGRdgosWE6g43WY4uLRZXCWmPdLeYXSECbWXkADZMaHnAtUTQyYz6pVd8",
  "key16": "2VwZG7BQg34WkYknREQExquV3heR8JsfexMazkYyvkxQ8WpxvAL7Xr9kNmp6MAwXhH9aVhDzT11XSz7wE2QyyFTr",
  "key17": "wcn3smssnXtQZjzr58HNwfsus1hK6TZAgme1Dkfez7UAdTt7eTyhMoYEo6LyAftNb2kTYZJqvjdTSWKP53erS9c",
  "key18": "f7TzkovPvZyg1ZvUZiy2qP2a676dgLMpbTd1f2w8CG5HfMvyn5kNyYRvSdPG5ZDgrswnS6EsSdksbp2qHNWHFmH",
  "key19": "2y3BFH13kebsdGBgZNFbWSP2n1if1rKCRDcPVahQ2cMzLDjkXBXi86Fkzrmr6QFQTtuRHtkMKFA1FiZdzyHiS5iD",
  "key20": "3ofwenZAcbuzg9Z5bwvQxgAdrq986iZAHKUuce1DAPtAFXfXSbj5SUBvPqksAhdzG2VBxfToukZFHaeBnnQXfwws",
  "key21": "3N7CtihmGzDsxbGb5esCbbi4Ax6zP18KfgK55FN63xCVX56hpDpZaegRaSyjjBzuopYLoU358zeq4QZpwXJa3vHE",
  "key22": "4Z3Hn4nYZWGQP3x4ysPrp47TPswTX2zPWUSJLsNGHTMEzo9qvk5shroMeWdXNsNEV3W3Y1SYZSVyRRD5J9BgNVZi",
  "key23": "464gEdGoBti8tPULFhPqEe2QdFtvgU51bpAUSCWW3aKNpRYFytiGgfN4WiSXaXMPzSUD2xUWHbgW84LDbGUqqcwh",
  "key24": "4vRT5mK3ZZJMKsPb9PRuZ4U2qjuV6fJPkpVKu7ie2R8H5tB3fPx9sdyk76PsgdQu4X26X1f3wK7xf4pTqHJkY4bp",
  "key25": "4J5DdR9MaceWq7nDMvreDCJFAJQbR5mJQzTFrUs7NHpoVGbKSereT2qtgZCG8nChEiFw2UYb8NQnzYMpQu4CdXzm",
  "key26": "33xpkDsTgi8gucVBUhQpN8ccuu4ZgToB9KD7QdJjDWMPB6KkDDWP8YrsePhKHBLeuJafmmQ1dgePWeqTByiLE6Uz",
  "key27": "65eVVG3KUdDva6CGBXCy8G1cZa9VjL9E5brgU4h4ao9of3vBmekuMtPHUKbbiQFvY7ScobH9PAbaST6wnBDLswha",
  "key28": "5985wSVXPtq2K8Nw22AJgY3hKJr1H1NMBaxzRwPyBAY64SS16KRm1VhW54HbD5Cgsy8xvndnV2XUXuZsUS31cgA5",
  "key29": "2N5Z54gHPm73gRGmsu2JNHAdYyyAhAmWWiyvG1CyKPYyFkcTUXLQBcJmEDDsuT26SDDS72F7zzC2B1Qqrwr4k1dx",
  "key30": "3Hb8Pmfk7eBGzXgQp2UDaYLm8UZfod7JEYv3ehAJ6a1tWxTH4M5qSVikBx6D9Y3HNGk6z7VPbMe38SDyU44HLcYn",
  "key31": "2tyKm84NwHrU3TQ8arvoC9jkUHnTh12ZXi6f5DeMb44Y1mabDPdVFAhc5V3RmbYDARC3sFDKt5eRGBVmdnqoESVg",
  "key32": "2hnnSzfGsUf4hy7FXjGMz4aw3Su5PXpeMn4QnJtewukABt7Xi9QHipKnrnYR8JjSbX3mibbLKiFwKNAkzzvySWFB",
  "key33": "1vs3zaPhJHCcT48n79kmgV2fXVAxTK6bc7HJaNfeAb8KvfkzAvq5vqmaWimFuXCZCGjdckc9Cn4mxQbSvEiaJ8t",
  "key34": "5QwQPUUJc4UyLkbZSGtX4oi3VL6XEqP8D1d8pWxLcmhkHVh3QKLQQSX2uLGU1845yoLj1fFZUaCNhBSuvfDWKeu6",
  "key35": "ku1j7X3pf3e1kVixDd4323CBXgsmiixjVg5Qko8En9Boy7Wy6c6a9GGCLPFpYzgDiM5y47wLSeGGd3BoJmkSKkk",
  "key36": "3jBVLhksdJiTiX2K7ChFaJi5U59ggjwAgEN6V3PrTaL3X6GqFYiMPFy7huJn6RPeF1S9YoPeu9F4x5CHhALMd6nS",
  "key37": "45XySYdBCumoNWtXgygp2S73HWhDfk5eCoZqZVhByDygQfQQ1Hd4yjyEfZKRHt1zmXXq9f6LAGysugcXeQFgWKGL",
  "key38": "2pXJUdDc97qPBMY2QUUFpZZFgmTZ4X7B2Qc4SwEeg8RizWuVAvH4gPsCzUFb1H88CX5g5Rds5KNZdytbYG36es4U",
  "key39": "4fqNcPgPcbtGkgZimQzWaefMhtQSsPVCxzR8hNKMEcQbZqMCwFhJfYHe5uQJPb7CmVdz5ExAn54Z9hYXpdF1ABd4",
  "key40": "5Nqc3SAshm69iuzBmTNw1tm469ftmSVEvQunMMDEzcYGTMVZu1g5dqBDUzcjDokxmo1MzvZLm1cGiwR41hnY2kYX",
  "key41": "b3EhHemd1PzhiSpGayv13YtQR1nQNKezahZzRM3o4oYTktiy2WrjfL5ScgjxBdPjTeWTmMjR5UEmyoNa2tcxaWu",
  "key42": "3bacaAU3VjH4SU6TnGGqZzfP8N5LQFmziEkRXhgvS1TqpcbenDnBcyPa3mb78ZgTCbZBH8saMy9Uz4DZNmWgNYFK",
  "key43": "3MMzKnFy62HY5z1NBMgEz1TnXEfhqokzRft3VUjNTMDpQXacRUptAR2bhdGVUdAkeQXMjwDE8mVpyCLh2FRwAs6"
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
