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
    "1KbjH8pY5eADYBK5SZ1VZTry8cHtcvLihozMeuS3xUzdXRrTuwdoUdWzVS6vTgbc87ZgkPDb8pzQ6BtD58icVWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zrXgoxwvzfAP2d3aq4U8TWokjhknwTrZvpqSXNocWWVo9MqtB89HSKmM1TzNPghWQnXzVysVR9KYqnRtjE6ChvK",
  "key1": "5c6kM6vyyF1Aer79sC1mbn8MfTXnFqtk8ci5LqLU3vpW7A6QAz5k1ybh1b1zPu5FZ5zatcxeMi5jhRaK3CES3AMq",
  "key2": "3T3Y8tyXuwpny6GYR2NtFX26DCMWnVoEzBVn86k5RocMRQYuMfErzGaHytKgvNfjoEDytE5FwWQYcBE6NvV1pAQS",
  "key3": "5arDXW3MnMxzTk8JJKw35Lc64FjJ8iHaTCwh3fKYit4jHSPt1UXRm5iVBcssZtLm2pusJNToJHK4GnBYsQmPguRo",
  "key4": "5Rv3CQD1hEkBb9SjrtQaKrhUcNJQ1q9Sak9mJh2GP73rdnSCUebpWMfmvBtkpBZCpEDeHNveQDecs5jAZ8Rdq6in",
  "key5": "2rCjdi43rxCtgSGwvFzcFohVN32tA4LHfQ5rbUbzfuLWK2cQgr1tQxfX49QzyXmS1LHpw7Dxd2aHrQTSpBzG6oMj",
  "key6": "5tDJKod81asXCMntuqUXL6BQCCK8LYSUyQoq5xuWXsJD9WWkUSQK6mi1hhT7HYtW3fHYDYt63WQfrnaaefvrZasL",
  "key7": "225kJpJ19AHa5GqQ1jrhxE1BMK8ScHqg8rWcpBqTanzHZWM4WfjzbgDBbc1KLvcrijuTEavvSg13gFWsyPPAaCDg",
  "key8": "2qDdKkJawEb9foPgJPEoVDHhuxqGnasJUAdFDuRSxRQ5ry8B4UdYxFAcnZ8yixkWqwuictrjkPnW7Wir9dptxC2g",
  "key9": "66oSbmtph5mxunqbwnpNo9ufvJyRFjofLPiVQZv8JnQtKqikDKD38N3eUw7kt4PpHWasi6piqvq4mivwq7ApHvrU",
  "key10": "5vTrcYn59PrSUBtQyQ2kiyuGYB62LMoWkGAmLc2pVtRvBjGbKcD2xae9xEFR2f4CnPdPj7Nc95AQNb4AmbmaSakb",
  "key11": "5YWnvGrozcP1orw4ZxTraiqSryVvwi4LHirKGW8Cbn2bZMUSqV823fJdcwuTAuXjqYhRapWds8bCeQbK8e2toPW1",
  "key12": "bQePWvNo1mp9oAgjLVjfu27LEkWALJcDzhLQWynFNuZZDZUqL7TD7Eec3X9L7y26sDm5atPgNnqmUe35vPKHWR4",
  "key13": "62XfWYzp3QkjsQdfckCTy9i1W4emURGes76oiTkKGs8K64CmjNBBFFwoutjjDWqZNaBMXENfXoKE7xkQwwBAvM5X",
  "key14": "eWqkJpvLAsHvmKN8ZHLC6yTH7WHsxJxQa4AnYPsWFAXmGXn5ZTPajXQwyNGBwJM7cTRLJNvDguovBAMhB9Dmn4b",
  "key15": "sCaji6pEDzyB17KDiMhaxUq6GJHEqYakYWjDURgVkpN8U69T8dXTwT6phbciWjVNYEAcRWCpmXnNRSLcyJGRbVu",
  "key16": "5Ancs5mSYCm61tnXeYMwcohSF1knAnMvrPRtGgjPLmXnfLkhWjN6ASoDjxDNzeNrH87XzQHyx8YFXwcRnCNFfoLb",
  "key17": "2vJrmRPPBGjDJa77oZn4YgXZ51ukMgdDsuDj4DAvynFdcx89r3YbsSoddAAYhYuAfqWafp4ERXWLTgEPUAqAaBBf",
  "key18": "wbt7LsogY9imXKHjF4yHBUjJ1v3eDGm1BdJmSxm3KMUtp3cqG7EPFUpVVSViHwhFoy9KiK9VQeUTtSjLexbJ9aP",
  "key19": "3w4yWnwvJhMsFsDJxbKMnk1Y4T6wnn54HhQVRGwYxx3dfRjSdKhyZ8LMrur21nZLW5mZbLPMhw5qivwCqTXz8YYJ",
  "key20": "5KxDhkHLWvypHi98C553tfdwjVJfDPxsxANgG14xx9iHYJWgbcp37BcCEs9695S3fdmWWosW8vDpTh1JS3bpURRg",
  "key21": "5x8swmKkYSUam3pCq8tkG6BAdeX34KzdghGoa5J2aJWCCytuuUHFq2LE3jaLxmi6KGJDaMtoBV6xMGffySp2A54f",
  "key22": "5vKtAcgbBUq59GL8shHGAPngB9qDGKJ8H4SAypvUdpAnLNTNPDZrbhRSGHDVq6gPJxFc9ZNtWGkAgKW8JC7eBh44",
  "key23": "62noRb85gxKZNNHuV1dkyTU5pKBXRRY44itgWePP8wwk2yBhWDpfbso13afyoUuzs5wCr4PHwgo7BTBbLn4dGibZ",
  "key24": "2pNh5TnCMEpVT64WKNtjo2zc3PKjr6k3zjBLy2sbASmD3dVLXgVLfGRjV94dEUYUzsJibv6dq3WCes2eoFPgmjFb",
  "key25": "1A27t1CzXALA2mdzCdoXuPSppQzpGgQ5xybwmEsKsahPVwmgrKfeT8cJrJuRHk8SFcqdPqV45b4bEtr9JCAJvYG",
  "key26": "4SQVeQ4E7Pb521wiVV2NmZim5L3xksF1hSiV9ryV3yTseYMEksFnr6HEnhTFHAfcVvo4WhuxYEZAkdLJAyMfor7j",
  "key27": "5ujxvYaMh75qwrxRNo1PtaqbtsUncQt4hxGufqghLR7JUxWnSY2PNZg8R4XiwzFt7PJhvVA3sxXoL7SfZmE5d642",
  "key28": "2c8CzkKyVYWYQdBPc3pFUP6mTAwNnoT6MVEbsKeza1ym3Z1WCjyTWFB4pkmZx1rmYLWXaqCEK173NHA2VQuX4hnk",
  "key29": "5q1GC6uZy8K89ispaAMWuKx9zkiGtzxuJC4m7Z1JmN8JQw1Qya4vm8zY8SNrrJTx8xdhbqUtNokHyVNhjmGBWfZQ",
  "key30": "5UkXbzxhaVKY9R3oMMHuL7pd5ZDyh1LFtsfjE5kDVyDqXoQYZh52XWYHM4aizzMEBiRbgxiFRFVMHFVvqQFd3prr",
  "key31": "5BeXwqGVr4WL6aywNBKsPPfCvGBjaMuMNSWva7XtNW76GvmFrsp2xGYFDkmW77Zw3ezXHs63kpMG2wFUfkKb2LRz",
  "key32": "42dMMZpcaFFNMM9ETrjS5xgYugJKW7fM3GshodwLzHNwtTDufzs7YEHSiA73pEn1Y8J2oqQYMbp7NuS3jFKUQiQ4",
  "key33": "3zKAxuoKrAi2zSDfbrcC5kXJvpvs7kX4kJH3Z19KgqmxjXs1E8sZyvzUF7hZAhHiKYxX8QHKTYB4R3BEZKDbnqgi",
  "key34": "5KgmvNarTn4vJCFusWrxLhjbY9HGo47UhsphYNKMPb5ttAe42i6Er2vLdQ48gwouYknGL5d8bucvAZHdzHdWcGMC",
  "key35": "5icoDWmWeJuTWbRA9xc4BvPTYeafsuzEEotu4dDPd88QVxAknw3rDVxjxXPHugrdDPRuAiM67g7tdvxJRJn3s9RR",
  "key36": "3feap7WydHXm5j8v4prcPChc74CrbZRDDgoRdPNFmSJU9YTWT1Y2RCQ9P5ABskRQ93XTihzzixtahxsnbv8qJGVn",
  "key37": "3RjiNu7wtJuwgEC4QNKURsRkMmEyF9fDghNMMfHcfpGY177oBFciPCzpJ4pKe6YmXfpWkzpHzFDJr2bB4KS7PXrE",
  "key38": "xDJW8t6WgzSW99PwMDQTvvCG55yxn32VUkCkdTBDWHK3SeRipYg6XvgTAmAESxNtaGDQdHaAP935iYUyBd3peEs",
  "key39": "5nw8cfBfj48ucXhFGDspRnsPjf5rqNeAWvoZrBiJVQ11FXB2eWF7uf3KoAsne4zVFN3BvRgTzh2CTBJYPuGVcHib",
  "key40": "35GTL6kbiH5UYpjEyqirzxyfW4c3xMwCNz1Ava1V3XoCYDAUBrwghzqbj9NbpCKAy2QxcxtbRMXytC6qLjWT5q3h",
  "key41": "4isWMiUET2Zb1FxS5jCWYiMZceMr9BMQaNesfZ5T5rMVxEb1HN8h3b1onBBv9YXzAQ2wU3esuR8S4ZGJ1cMpwDVX",
  "key42": "s4vLojuEAYBEcJPuvou56Tt2hR85U2rWZMmQ5Pr6Ps45jtZ2RALP5A2mVRq8adLFdwkJbvpCUuwp1ofjRBCnmhe",
  "key43": "3eC6xN4G7ghiWLMvvYK1q6biKJ6woNxFNYyKVNaKbkrX7wD8y1Nsvsxkiu3MyfBAqnRLuCLGYN6Gt6BX9GywyKQJ",
  "key44": "4fzu6dTZqzyidxevH3euLniiHSiEc3fyvVXSdaxqSzJSBBWPft8N8xUfVFDrg6jKFp5FHovMxJ1rPvX7gswZcs2C",
  "key45": "26txGMuMVtbBfh79zo3K4ojwo2qMFmWfgyLKdQviF6SwCq5XTAQNfNK7XBQbP3RqM2Ek7hviTVyVAAF2cryC46tB",
  "key46": "JvpF7LDbutLWjTA41CV8qmwFhD5aFX6WEioozKdXJb796zgqfQsnLh2fPdNMWkGsyj13A1d1Nt1otF71FBpZtv9",
  "key47": "3EzafHmnicF9tcQi69J9h63oNJSRL4UqfGoQoSYjGYmcWosKc5vRnFJGkQfBMNB89L6qoEqjxcoCCCvAAKey2SV1",
  "key48": "tDAj9GV2q5pH4Mo2r2rcb3kEbCA49z3ZejjeGFBC8UGJb1JraZihcCt7nFfMEPJV6spz2yfB7xNu3asAPxQLXQC",
  "key49": "4Y1DkEG9swVMPceCAo7TJGWznYGVsYxeUo7SJLPBvb8z8A5ERhcYTNDh8VThGtfX1cjnx1wUMdTC5U3qAc23qXXq"
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
