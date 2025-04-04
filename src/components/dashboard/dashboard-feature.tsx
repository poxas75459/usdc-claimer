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
    "2HukUouiYYo5D4c4VLT6PP3QeZfXp6yci6rc2gzRYGTDYuEs9mQJ2oEgj14zqJZMAUu3pZNHJtgQxdgwybFnxEvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c5mgJnpWzMPoQXbSUVjHTAR9yWCoorPkPcMTwpWn2dzhoZ4FgGdCEB2oQyCJh9qRTa9iRQN8T3X5Z4yMfWez6YV",
  "key1": "fGkmuShWAyfw86ZkbLqv8AdciZd9Vovawm6ak6QnYxDcz2k83wk51BxFVxQq2Ho9SDff5tZmb4urjbXnRedyeB5",
  "key2": "3dzhY6yf8awCZHAydejmod4bLpJjoJcSk5WvwEnLZFP9S4TgkxBk4u8eDnXSaN56spyXFAgwnf8uPWQS21kBFE26",
  "key3": "4SsaUPqyYQuoqFB3Lktgie9U1xGRoYpqTsgRHijhLkwmHSyJseT8NxRbJy5CA4pExbkdvGxZicMa6HsDCj9w3VRv",
  "key4": "rDwJuNdb4ePLMnNM3oD3LYamL32WgzFUdTaMntMPFDHJiAaAVbziV8KJZZA99TELfTV323ZJntx968aBrU2drwX",
  "key5": "4LShHd5YVtVjMKsmuwLMWtWGxPPGoqgoER85h2k6dHhGZXQwAc9vFEnaEB43MZZKSgVXzQGh1EUuZr1iQkP9NniM",
  "key6": "5qVbkTKt3jKmjLCvdDLsS6bN9thZ4xRY1sErCTvMwqEep3VsYLoyscHMNXZgyVfn4bxc2t51GSXzW6NyDSBKdu74",
  "key7": "3osKQkSeXjzuMfw5gzxbzXNjC2jR6ZQAJXJ6CCHhq49f5Ej2ir6ppaQzjFYL6DbsmA6HDoYzihUozpML4utoQzgq",
  "key8": "GSLujSAsPQJBvSFsu6tVGX6iAsvD8xp4bVhjfWCXWapZoMqur4kLEn1feQcHJJxoBY5cxkyoDYFpzs7413jpy65",
  "key9": "63DYiG3zBWVPm9u8sczevJHR27KrDcHQMR5HYQmd9UYWaBdJtN9AnAbrdskDQqkAm1xfWVe7d2SKiRqsxestRGVy",
  "key10": "Jh8MftVPAeebWa7Fcb4sfGT9dThghLWiKXBvRATjHarMJ9My9AUDZPudEwsc5yhQeK773bNVQRmBE2LaCRJXuDk",
  "key11": "2izsjerNMpyu2JQnTmu3tis7dQsJjU7weCoYUWzijHMHao3Ypg9J4rsZAWJEKbAjxYMsP6aGSHBh4cgrxBR29gpW",
  "key12": "39P7Z97ok6JWmnTLhhvQ31o7LXUzeN48RFdqdmJ5yc5sXEa3fKGgsYNYeqL3RbxiT4LZpfEHhFcEFRTiDtxcASCP",
  "key13": "5rUwMUziFJwX5jHR8eGnmzVVddAAgaZhfnshXpyDK2XsGDpYufAF24pQUvm9VrC7r2VpTrMCs4SnYTH4Dfek7P5i",
  "key14": "3jioURXhjgzufYye4TTPmUTX8oqNCt5QwUZK7f42pA44WPjP7swe51PRSvofwchY6hpu8ZVF9xpekuGgGxzSbDmn",
  "key15": "3TPs1sFZU9YyhMQdHFrDme19H6bxobkCfKMVbYDFJkhyydBAiYBQfcgZq2odZhAxz1gFNsj4HKKWFPEa2AmPA2GG",
  "key16": "4QhQKsJeKJStUBXpnGBheb5bn4k4GXsv8CgNCEnQVCVZBPuEmS6wPWY3o8FbC1JHfBjPcbVLCuf6kbD8FqPwY2RJ",
  "key17": "SQyMdJcbobzspPipbZCJ7JPMg8NDb4foPkm6rqPfBHR2meE1K3YucHxntpyUE1DhzvhdoA3zJG8diqxHbePsJd1",
  "key18": "25p6uFy9Y8S3FcJpTNE1AVU3ozxgHLYHBMS7WafAJQ5j8mZbXnPXbkUV6jy4t2aY4jAmkpMxPosmaZ79sUgK4p8k",
  "key19": "632SKZWyru6ZWReP1wga5VxMuyWq6daoR6CFktvqmX3U8ThcCSrWXN3EM7VPZNpiM8XXCDCdQAcgBBWz7rD4n688",
  "key20": "2yi4wCoX7rNruBibYj47JJC41SLdpnbEu2cqJnPgku6i6NKrWp1H1Wk2JX5UhF3iFN4LXfHmuzKLGqbkyuPvGzZ1",
  "key21": "5anT8vyy1KHVuR9FSv9nRDqCiHCJi2v7j8AK6Zo1Lb7qj3Lry3vUcLrNwhtWXRj8jzYxoZu8ZCgCA6MZZonqsypa",
  "key22": "2b3UVg7aqLkt5yMrhXFQtYKKRGz6WtcquVSzT9ANLeHXARsJ6rTfBRHREGx6CgwxKVTRsJRVRnTE9ULR4Vn2NiVw",
  "key23": "59ZkU3kFwBCYEj3zGotyTQzm7mELp7Ami3zeCMii99L8xaRRuEqezuyDM9ZpHYn2tzypG1uNYxs6H1DhBh7ftLUT",
  "key24": "mMgTn8uoWwtmVLSaNTmFTHGNdUF7uWgCqk2NWLh4MtktnQVzXLp5o7VkgRkKF24StGbHUSpDonUjXARUBK9dfrc",
  "key25": "nBLLTmpGeoDLpiE6rXtEYd9nKhvZ3KQ3nuQbjRtyMrcQpYbpi8RWjBBeWmTaAJx6zntPidQwjGYPPx1bo2KK98k",
  "key26": "2Ze13K5aY8ULJzupzpvXHyBcTEVsbjJbDNbdULn4P7WdZBWTzAWDQbCU94B7MzYy3JpNKyLQuj92v6EGgPMDugPF",
  "key27": "bC6Ump8ktbvBxi8YPULre68ho3GNDxAumqkjZEt3yJ6tEJTygE6xjdmC7JSkm5hThPkEc1GHXenMMoENdYeBtzd",
  "key28": "5DPVSBMzGoUMpiKPRw53DgP7rbSyuCFNSjmjHR6pSvuAU4fLCeEVfJL3vM92MLVxFcrnLd8KVq9ruVQvpG7TFxh3",
  "key29": "2kT9KexSRsBYQYn8f3tPBa5mjs1BWYTrGtjxWbEL6gTVQzBiKf7cntZXTXvc5mjfXih8jiRqbqVNEE1XvHLjbv9q",
  "key30": "4YDamH1WXBqt7itDbE2UMdj32zKt18PgwzBaka1hr8HEu26mTQZX9QjDtNijwP668bjAZs5BUu6A5RefVJn9xNae",
  "key31": "4mCUNiibDhihr8f3UPxti1BAepfZo4ghz19NmMdQcU8wFyHDpCxxPPdAqhkkw4MZb5hQPNASpvGbHfx8viNfwHoz",
  "key32": "2xLj7XSS3b3yz4SGeboBNmZCeUmnbZt8zKs7bnVqsn1L3aV3r7rcJqR7TGUL1VEV1wmhjiAAY5dM2nGCCtn8ChP3",
  "key33": "4dhc8ktkYbh91icEYx1Macz42y2RnGaNZ5M5v8naGHKhZBrCWvz1nmBjWhy1CVa4TBohSTKMLrh4DwqkEtgHErrK",
  "key34": "hC4xpp7RidfynGyZeWNvYMH3xv2brM6S2qdjeUMe3cgWWyPfvFTpTXtSQQ6uhRv4AdkVNb4vGejxv9hP8QmT3JB",
  "key35": "5DEWuXXcyHonhsttoeJMokr2fG31CsYMFgNBXZtEDKhFzNBRDqnpBnUomgcAg7esiZhyNJCfrKTYY1gGunoK92Qk",
  "key36": "2nweFg3Riy63CVJf9nPNadotefv8za76pmbbCxyLz52C6PQXdpR4EWrx39sX4uUZmuLoSAgjYVdHKXXb7rV4YZgF",
  "key37": "5kvHt6on9JAZ28pQB4WunkVvyonLk569wv3bnUfe89LA9MmweuT2joZq8F3S43DrJcE2pHFt6GzpLynNhSTUkcrG",
  "key38": "5pLbKg9mX97KVWsxBfroqB2FrrnN7kp246fwUaY7DknEtHjoDwJtWNVdwtHaR2aRUsqPw7WCArebBhFAwCfBnJaZ",
  "key39": "3iR7tvPdsadditCqkvsYYzckbr7fjSZYPCZCDGaoZWW2jMCfqdTKdaN5X7Bu3oKcdFXhKZrHWyaep2Sw9kFiXwzn",
  "key40": "2tthMpU7nzNP78SZ8jDw6aeZGbcH2AD9Y8MpMPcjUk3iijgNWwbeX7gBkVBCDpKHVUxRvco1hTKU3faApHTMqytA",
  "key41": "5TvDc6QsFEhrR2JewHvX91hurTiwbFw6XZcB98ma98C9wVHZQCDvGdJB3iEGM5m3TEB2yhZxUGosC4mxGZfQFsw3",
  "key42": "3GrLJe1ckJRBVVhtXsrKn69UaHS5ZWgD2paU5jZqCCY22pdCvRAoJxdLQmYp7tEqqv7vEpjPKbsaCdHeKGje3PHN"
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
