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
    "2AL3nDLPwmhTWkqkpcwx3PFvNTSxYjoWruSp4bKuCeqQ5SqN81suNNqKCabKpnBWyJjCdHnBRWkZbfpscBoX6qHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jPpeqzq6ik7QgMhxQJAbzke9cihBcX1FVX2hSrLxgTZc9qsqwxZDngEh69YDNJ26tqV24JNk9f8MpF7DBbvEHn8",
  "key1": "5DP6RB54QXLTAvi1ztMvxGdqeLYQsngZV7pKCL3nt2j7p5zPj47iPS4rQn93dQRVtb4S6VxQqyYXNHzgFjN6zqYt",
  "key2": "nNJdf7frRcKTxrCQfGkizo2aHUnArA6T6RdtpNiBmg4erjdarnByEM2n9jrYh1wz4CH9qunfgsqE8e9oYkdLgj6",
  "key3": "3URKARU43NGwdxQRmo9W4uaXmFcjeg5mJLEQHypU64HLAMwV5s9eZnHzDwsJZdQAfy6NzT3c6snJVrAbpoA4PQ7o",
  "key4": "5ZfxG27xyEExrQMjDVDpaTKqwKnUFsHmRRBs56JrqCbC5xJ6V74XhCuhWsAR8E3eWs4WjE4qWxaTgXkigxACCon6",
  "key5": "4F3Z88Y8ktLh7CcXpp7ckm92s5hNKySDhnfRTaL7Bv6HZEDujkVMerhVo37iqP8JjW7rFuAFSpSyqy88GK5pBte4",
  "key6": "4VsWzKrnBNVaJB7ZXmhpVKJES7csfHTEXB4WHqCmFHPScQNfmP5k2LwTrRk7Q6n2ktetvuMTGHhqs96UAwTZ2Fq2",
  "key7": "2FPqicya2dWrFPC8AhJrfYVUmmrPEudC5yCmvZx1bDfDt1vpY1NpZvAy4dZtB1rFaTizbaxqTHBj3qWEbdxRmSpK",
  "key8": "33JzZkdeB5ReQkGikJf6kQT9WgZd1JwYhimkLdunbQvWjbYok9gfCyJcCKm42TTccdeynUi7pZvBbZfL7wvYtmF8",
  "key9": "PafbLbcbk3QCEQX7vL6ZuhNkUBxjfPbNTY7dqXR2H7mwfUXhpRmfKaRjJw8noLKqfeWyZE3C4gD4aBvN9HFW3JH",
  "key10": "e4HJvp6v7vNjk1NGZHwjjnxCLBov4TknC7dPpxg5gEEFPGYny3mXBgdKF8VGPh44fuQaur2ir62VNRHkWjt6AT1",
  "key11": "5Xd8GJWz5gzKT183nhN4Hpzz8UmXUcS1K43KMpuNzVCYjXzNFgFaJ35APHiWWeyFzCPYqZUhQGWFiEXhazFbFrsw",
  "key12": "4F5AskjvdLSY9uhnLjWHxAj9YE1CyXSWdQueQmpxndu6Aj8vwzfhCPEa4Qxr7FVWuyA8hPz4296wEmMkYrFFUyiD",
  "key13": "wKbokjkZWh9J3rLuxZ5Z83e8ZkebFyVrYyLyTH6NZMPtAEu1ozFR3WzTUCNzk3PHDyuX6VBJ1FxW7HDpPCFKda5",
  "key14": "5zLjrhXfLf5vzdqi9jUqwDLQhy9txLvFhz9UCpxwh4jqAzcLw5LxLdrevRBGnCwd7xY6a8rLQ7nMGvsNXSqXtGBg",
  "key15": "4JEbBhfk3UjkyZSmxBhm7SmoT6v9aJJ8TAn6NrECvBqB44g2rcDjs8yCdEQe8VWW87qpER46SVEVrhZcTmfaq2xh",
  "key16": "2vuRReZJm1s1SPTBmhF7iS84qiFzbuMg7y55qeHYj3fKp787MkKycygThux3n3jQXGAMr3BCWDRfy722Q28r1ZZv",
  "key17": "tTVfbnH4YRriMTSqPuEBUWPQ3wS6S8oNtUkydH2YijdNN6T4Eb4uUWbDTGb26Q7bSp4dCJG7A3xAjj4LHkNxzy5",
  "key18": "3NXohvqF3rwmN1CgXULoJnfZJBqMvFYL3z4tnFMyHmUTaRJ8znE76n58Eha4eWcUQxuPYK8XKmKEi2LNZJEi63b4",
  "key19": "657d8DaCRJJFmkZsn3JTnQqNwkER1nmX7zy49sPeqyMsMLBwLvp8LhRHsQQCofpsvABtCFsH29RVNb5Au5z38LuH",
  "key20": "3YR6rVn2UPREPPffskwJDdv4b8Qc2rjGC4woGd1iYBMT5ghd24sXBmokCgxgUFjaz8hM3QJ6cT4Xuw7EMpecrMdv",
  "key21": "3kViMesdGXTe5ubpyxc72g1ddMVXGThmyTjDschBSjxUwLwFf5dxYiEv3c8SxdqF7sJHi8zwtjdRm6gLfQHav3YV",
  "key22": "3htFUzMSDWxw5yv9PZa4QNxGm5jDPFfsaivZASTyVMhL6tpxKK9C3akzotuAsJ5mzNJ9fCDgivVbDeVQZ5sZfMpa",
  "key23": "3xtQPdJVar1GteRinGbEovs9U7Lv1XTvgFeXkP8hXfVu45F7tg2UtxyMirNQ35BB6QuqzUBM7y2HfhJoJAqfAMoH",
  "key24": "3CJkmpxLhUng1Wyztbv7ns6JYkTFgXRbavQULRrw3ob9d6h6nN6wdBQq4utA4mRQAW6siJ7yauFUUsvarnjbhkYT",
  "key25": "2vJv9LxcrXDTn6PLhhLp7v5VUnhDNJWVWVtsXKMeuN35B2tLCRHvaKAG4cU5oGB3MfPwYbxAekZ9ksoHZka46i8P",
  "key26": "2sifujCnMwa5CgxzAvHewXerV3vLrpMVduaZpJ9shriXB4WxqJSX1VQX3YgcPCRG8zc3akNYxn8TD8rydbPxfNtn",
  "key27": "3fLPewe6obeuY5scXdvMS9JCahKDh3DdV87N1iud7pQFPu5q9fG8VPeX8uFyFyQY5wAKJFpC1FfmGtDNWY4ZFpPQ",
  "key28": "3c5aACP5cDbPrKCHKCFYnziuzMMiwW3wutgc24uHBYn1ZgHt3efosKBQ4XXaCy1y2j1s9rKTKgE2oBvxZVBUu1F4",
  "key29": "4hmxCQFgfF63BFNArxPkNVb9rpQst3S81GgWZuM7rDqsN85qbaU3S1Gwi1qpNiCe6XCTyRS2ayoNHQM8ugfEXBsi",
  "key30": "arxkoc48EK7bxyU43EHiVWXqhEgqMuZ5oSay5gkKUZtSCWLR5zqV7ET4hVrrgLUbcT9gYYvhSKba2WHrfadVTGd",
  "key31": "2bryiNnXum36sJqdWxdT6oQBgXcdp4q8vL8VYfJaivNEEinfZXhs1fSb28LTcXuRZ9GFAG9GkbdSq5LNPbNARq28",
  "key32": "3h2XyY51DAxVbYi4vYMyVb7o6UwfUVfNfYNHygfyUHMDwv7d1Dk6xD6XHUzE6SXC5v2UNjNxm6V3tkLmVs4fUsa7",
  "key33": "4GmzEGPpeDmpG9MtCCySu6iktE1K7CeNCa3tyjBrY2yH9zgmEW4uW82NctGPf6UN12nU5YhgAaVNj8fBb4oc2wC8",
  "key34": "5mq7CYCL8Zv9ettKFeySHNdBeyZhmvVvC8o5HgcNbawhAUghwXHFxmWQRyuRY49tPhxHhfkCXchA25QxhuKnLUYL",
  "key35": "4wQTw3Wo5KgySHJrzg6FmUEafXCCuF5ovmp8HAEtbv5Wg1oJZ7QBwfXGBH9zojgZuL6jgURsVAVdj4CC6NoeyNGF",
  "key36": "24FaCsW8kkPGkF57YE8LmUi13jWX1GUszFfmQALzbM6SvQC7MpQgeLKs2tqerh7NfJC8F1CDyXRQfRxJpmcvRzaN",
  "key37": "21TWFVEkjxQrjG2NXV2nG4ce1YTEPYXFLBXKtYVRaVybHngjw9DrorNZ5Afoqj2cgAuCBYPDPp34So4BNhiKmSW4",
  "key38": "4Z1tfc7wpr6i5DuWLx3GAbp5aNq5cSd1nJHvJuL5sgEsgQu1fxVAnofJzbemnd5sQPbyFRyPCH5X8L7KCYfgGVKn"
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
