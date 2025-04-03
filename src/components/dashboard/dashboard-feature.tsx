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
    "rY1SuiwMLuwuAPV2P7rw72csa6ym2rkFk9FVoUafTpXwXH7PtGNP6r8oeoBfRyY17hPoxNpyaGp7s1RLhKKLndT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PnuT8DkrAgSqpRSeKRqPmn7czFjQSnJDiXE6bqERjucefnvGtxQ7URckzjByzsgVG2rha1mxjAgPHYYUAfVZkRm",
  "key1": "4uMiyf4NJx93ApPSUoFEyrcAnmeiTxTgx96CCQ5W8kakmbE6s7Xbt4woBxmbXUQqhGweXwAgC71gWgvrkorH9P2F",
  "key2": "2jH2tGE4wihpKWghTYgR8i2WoSQV8smneGkpop2ixWvVvm8Vv5iUDFHgkmQwWgfSrNkv6zTFdoL5xoEszmp5TFUB",
  "key3": "3SbhcTU5URYfrJZFqSD33A43KuAK7iLdDcynfLokTLHKnKa7S6DvFEfvvcY1FegyFhL5VszUKJ5sFWfBbGrSxkjf",
  "key4": "WJaU9cmr4XJwANyzJHxhYfqbjUNhvgW2SnjFanrKUYWbVLnPQddK9sBJrkMxqW8ndmRuqYfhtYXTTuNc3YaM62Y",
  "key5": "3QmQhgaKqLiXchgAKfor3XqqWEiDqu5kAhimHJJmwYt6EM2jAMs929yHcnrqck4bcrNKLW6zYqpxZZBQkDmd6H34",
  "key6": "3XVVnFrawhrRGtf6cvPQxrJCar7ByGtNh8yUMeWBYJQvPw2S4YJM8vTEeos5wnmf4Gq76QgWT8NsyYV9tDhWPNGt",
  "key7": "2reYsHuv5Nin9DVLx5rZXxu9d4RnVJK8hNgseh9MEe24ykwPZ4nKXnZP4fUyjSZMY6rii9YpNZeHs2wfV873ra6k",
  "key8": "qZSwekX6qc67DZMaTNK9QrGgFHLc64yg5foS9mrryVDEt3SiAinzbgBDFiQuXxmeqzSoJFfTrJQvfPsbnK2GYXA",
  "key9": "4N2oLWj39R5J79tKtvpFb15pRBNe7iVjD9nZpUEKFrhPs7ZJbfh9mgC4rBQnFh9h29osyG7MXHqxB3aXv4afZEFq",
  "key10": "5eB8BCbbgD8mHfhKy8NacRoQK1EJurNNnyLHdrUUkiD6LHbVYw41znLjGwhj1C6FpZNXoTm4wporoXZGEAichig6",
  "key11": "37FGyRrkt2LNkUvponWXvDHkd4g4zRetu2X76CE5WV6eiUfVzqQ48Y5arKZG8RzjwaabP82hW4gpsk4kwQya2CrU",
  "key12": "3u5wUfMZu2aq9dWiicdsE7jvZVaHHYMyH14KsjCr5aHAZQ4JCeMynmTzkvRLg7f9roedd1NFmrYJmV4Uq1gebhHT",
  "key13": "h2KveidLUU9vbNAEPQAusk4aRq5izBx8iFQgpJ1289QpBnUTYjsqCgdpz6aBAPn81mGctQFWVkVFberMPkCoLHE",
  "key14": "2QBgDR7Z4K866kEfeCsgCFKm8HVhxQJ6Nc5dfBTkcJMiX8PryEAWm5J5NyX3n4cGLrpfxVBH7hbPwboBJckUeCdd",
  "key15": "5a2Aru193FBkTEv4LFwyQpiKm1UuCGntzENHqk94LMJqPWPNAFwn4vZp8X3XGgEUYnY1q7pAmdLVE6Qy3sQQoHfJ",
  "key16": "41HZxavypWbGq1f4jwF2g5Cor6H89e3PZfFM9LZeuHTHYFSJzoPDkjZT3z4JGJjibFzq2xR8dpycQ4QhLV98uzKg",
  "key17": "2rHsaZKnqHcsn9QygLyG5MB7T7nfBb3R9F4H8tpzBN1vY9tXEAP4qYAYa7CMveYrdRUXa5i6d5ywXGrV9UTVcmEJ",
  "key18": "5RmYNPP1r85ZxmUKJq3v48z2YXgBD794buhjqb9426rBZZEP383vojWvFsGf1bfZywTFAbaYFcVSZ7DAahKfmAKE",
  "key19": "3BMfENqJ2veNor92hyAHxCvHNUyZyszdDGz63J9xRaikbCNvFqLiQDqhKCBc8n8YX5jCGBaMzvSuxHdofqUN5exR",
  "key20": "2A11hXXRiG8fmP8JgtrTZ3vDAfB3b2XNU4PRkRrfAxQ2joidSBeWc1mZdVP3doz6ZiA1g4ZncPWuYMWBEAdQ1Hxh",
  "key21": "4wJT4PyJQK51qJtLpgE9UdzopTD8mLhfLgjEook3bduABMwk1bfpxo6NYjKkWQsRRsSz14VEpitmP1WiJK65dg94",
  "key22": "5vBaBQc8dGZm1Tn88JzvTEsgekJyo96GfDfBCjVPPHdLCtG96Kxpm9WtjJAA88YMPLB9t2QECTvTCvCfXZ1gGMJx",
  "key23": "4w5oND5Vt8n3mwpykxh5ETJqHtieSNLbD84CkPRfNoGuhUewbowYjtS6AcUq1KXUff5FixJ2w518yW6FtcupxWSN",
  "key24": "MN63fYH7tgN2yPkpjVWK2NX6Dgx3uK1q5XTUyR63hHVkLVAzNQ12FDPyQdkRmuXt2UR7RnUiR9tpftknoM51u2S",
  "key25": "538wEk9YnMNRUijwii7HcxwsPodapQ316iCs1BgzYkxBwXFTmfCacgX58XeHQAPtRWZSp6xbpUMxVVYRvKaoNXHQ",
  "key26": "3tR5sTNN85PLWue68ckSFyhcFRmGSnGNbZxR4jCUhLqBf7WU7rxvzBwenX7rQeS3F6sbp6nkHF49obthYVbwA1qh",
  "key27": "u3icvKDhUDhDEuj88Q8kDBJTqgKoGJxrioEPceR3PvtvAPuCDqTaXroPvVmmiyweaE3VqD2cVLYhQenwPmeccjX",
  "key28": "2qFGNcGKH8jmWVQq5pnun7pqVjZgZV2TwWEcATt49czBWNvyd96MHQx4UBqMKmSYxQyh6XjWGWGgNZPtWqu5qZSP",
  "key29": "5quDN8Y5pAFUGWQDsxvuA12zzKNpMFcLhQon4zV3eZzEkETtMK8DacTNmugec6FLqjbdHrwCrWRTcU8MuPM4SVnB",
  "key30": "53tGoD3qQ5AZZp7jJJK6mL7AekJWdwQg8jbLd8wLS6xXg6eBjgSEv9fCDcFpPwazkDYT5Fu3y6hnDKcXGZPLKF6X",
  "key31": "Cf2NaKFtL2vANai3iaDGfCpAfo8JmX9wVk9BsX9YsEwgfgNM8PWPy5cfggoqiw1VdtoUK5WniSGYGXbPZmZrXtS",
  "key32": "25quWhc2yy7Tj91k6aJiMbLmwS7NKRFz17kpUPLf4Yxrpm3tyitpNqnGyRXTYrmhvSWtcyRzUjkbP4euuTq5j8jp",
  "key33": "3NNruN7hsLKppXiAaBkHfEhsXdU2U5W3RGrfVUCnqdtg7ouncgAXDHMP7RPwVfJQuA3TFmY7Y8aPEJTxqwNNDXgW",
  "key34": "32cHMScFeqRvxe1A7pqcNcHgS5X58xHfFY4XCVqdvHdCGbXnwewLcw3EQqTcporBM81oJk8gmffLd1z1ur3TL5kF",
  "key35": "2557duzzFSzszFWSY2J7ZRXTWpLpU6dUdb63w45FkN9LxRKCxUMQwyGBCnqYbSgY32ULG2qmSULarjvojrouKimG",
  "key36": "5F1mAj8rHfuLZK1NqSUYmHZBHwx9PeANm4qSxMAWBQF52M1Jwei8PH8GD2gPrJhzYbb3KV5MzN7fXXJrTxebwC3C",
  "key37": "2zDuRX1ispotAcnydyh1mGrnzDbL8DXKpwrRSa72nhf1TDdn8xtKyKJ2keUdYTZzD5BKThDfMZhQF2mXSBJSbnUA",
  "key38": "37aSNLb1fvWAxA9o6GrV2TF56zGJ2wjaoo22SHfPiManzywLHbxpUZ4sntgBzbwJqAPKdnKhDiP9DNcLMW6QpJMW",
  "key39": "5RC8GyiTJq5ZK3j4LCxhUB2taZQzJxqNa75vqTkQ4a8cm71qDD3mQCuqSg1TdLUne5jDwTshtpBddGD1S1rtR7bZ",
  "key40": "5pKLZTwgKRf8pe3z7egrT9zqoLDoBRQaNGZz7FaPLpzXoULPcg2ppCEvzjAcGZMwq28qq1RrZxBuAMFvFsNdAwM9",
  "key41": "5kuMYsu649dLtGxVfuCKDSrgWes1zQWRG4XWDmhchvcwqH6wnxiNsEKG2SfWLcaGMpWnsmPpiTtmKVDLAhJBjT9g",
  "key42": "3NKrbL6a4rdbDs5RNNjS6upfewCEKkLLAXerNs8u7NvLgsanurXDzXAu2JXZDJY2tNQe5bpy4YDF3yXXRRoh4Q3U",
  "key43": "2TupTBDxawzaYDgQjc6XL8bhq1XEaHxsvRoFU4MnF9bfcCXK7UbyuUGefmFuDbfy9c3x7oix44CzGftxLKqUUi75",
  "key44": "5X7rNrezNrodoJJ6qBVt2HgvbQeMsubmxpdFKSTCPvTJBJT5oiDFtULjphLm1tNVrt4jxM3DREZFcab6cRf98SsG",
  "key45": "5346ZdXdEnKEjfK39Mfzc765aVzhDQpQvuiQvBRVReVi4Ayy83LyJKiDEkQmaGUj3usjkWangB9LhRf3YreNMjUP",
  "key46": "3tDPkedHQqTYxAi7GqSEZG5U8169HcbuDUYiStMi3QGKyjRtdu7tqd17hD2Bqr9iR4Btajww4QPxYR7syt35qHWY",
  "key47": "5VV4bRsTAdwR58BT4Tc8SHtM9G1dWuWuhURZbjwf9aHmFjVRRKjmiJBTpvxjZMA7H5LeX6nPK4HWEVbn2uF3UKyp",
  "key48": "2ASkmDTaJupsJRSN3wD9guzhXUHsbETyC7fBsFPESo7Mw9b6tWMjyaxJGhL7L2MdCT5koqRSCntfo1mwmMb3qkb7"
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
