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
    "3M6LPqMPtV2fBE6aVg3Pdqnp6pLjzN3XneQYV2QrCENWYWntxWNmb8w7iCzkpnB3VfcnwQRXa9xCyyYn9m73iA9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BUZvrWraVS52J9CKqvTUkQvn7FePJoEQnrhZt8A7AMSY82WHkmBjFjqpKKAJHuYdCsVhxF9LAkaaKqMfnafz8Hm",
  "key1": "EGGtXQtL1WVRXQ4aBRAD9KK7LomhVKi91YYjLHvSU7YhX3HTJmHmLRyfpjTwRxW5Yg42VzVT8S2iSKAMaMrizH8",
  "key2": "2kPVvzYdQKwmYeFxH2YzJ28HZiANJSeZ51DvkaPgup8aP7PRMVeDKeCWqshLMDCFqYQ7zgeTX3EnE3bk2Pgs6rmJ",
  "key3": "4LJgzFQ84dEV3XCT51rhVo8ptSSrMCS1iAgBWLy8Z7XXXZXXKMCKncGn7nK6EEP52R47EWTHKgEHpXogQ1qmNQru",
  "key4": "24RbUV9s5Z91zzXT5YtBk3BoyQeEcpGvCC8CQJQcAw9dZsdpy3G2Tgi9Gxy9DeFTzsiRFWCAzUATyaDRoNuGKWnj",
  "key5": "2dueeTFuxkACMtpP7J2WKcKUEpQUgcE7PpbeWqaTfbVhzooQAfq8XXrDFp6TDFkjHaQHQbNa4C36FgJgyLNLDrrv",
  "key6": "jUd7ckzsRDZu2N246m6wKb3jQkswXav83B9Sf4yLG93VZTTbKHnVsoEkNprfLUxD3YjnSTY3rrqJ5WUYZe6Rp7A",
  "key7": "LswCZhMuXET77mBQri9baA9iKTN4JaN3myeSZigUb5y7VbqWekSiZAHATL86QYKnZaNmkHuwYF8jThDuTJJMhHm",
  "key8": "5XPigfeZRxHmu1Lfpgnqv9qkfcypKZaWtHWz7Hhh1m1NXNwU3mzvykd1iLxcEhb1YDbuCsGMoPaTa46gs7cNiF9X",
  "key9": "5wew2trTAg2U3skZvAmo4yvchk2zM91xNGDFz2pcT5eFxgUqSserp9c47q3PvMeMPoaR4HJ68i8gUydZUSqovJSw",
  "key10": "rYMuvASEjnCUNtda8XTt2t7uMD2fr5J9M2gfapEqvbQZFuoRfq7ykKJZNtjmGpPk8juybfPnfawR3wZdVKteVrP",
  "key11": "3HyiZu4mtoevZzQS3zCLKqDaFNQKJHjcKvBxVScfYkqshtH6byX8xv5USyTMzZxUFAkJsGApYyg2kTAbiFMnAtE2",
  "key12": "4iyoi6VqkuPpP1uekcVk43dnhxGtWRUvcbG41jRnfiXf83NrxH1fyYXkKyh1vmAXvvXnfF5iADZgnGdHfCpZwdch",
  "key13": "GXzE9tfHUNzBv6sEcjPa7nT3cQ4YZWTuCP36CAc88AEBHo8N7BMUj3vMVJRSxzQrPr8UhVJPKdQATFx2vytHofA",
  "key14": "3V1kt6KSTrM6x2vRzt2i9W3mFBembiQR57LDNPVjBK7J16BNEVeWn5Y6f5np6yW9nm8Y5K9xW3U1KmbNtgiUwoz5",
  "key15": "2r9qzsV5tVXc34KigUKpaKwu2tma7ZorfVbzgs7xrP6kfvX5mnMhhHiCGTYxrixH11wNYiMZ7xxptpruhP5VAZ89",
  "key16": "3W7DnS3PDECcePH67FnzzMfDZzv6RbBkokxSCicZY3xw9eP21vSDorsK7iXU8RrFJkHwH7a565a1zU3r8FCJMUDW",
  "key17": "4e7gRwjDbhbJEJx1BTzof4oHjYLwRDnN7EreWpR8dRBdxwiyzg3Xyn4sxxvkwWA5FgtWgMjBTr98ftQmfXNavj5X",
  "key18": "3mkrUejP3f24Xnyx8mfFxWTQRoejxp5uS1HTF4kgbhWrXWVW4d2xoX6GNz2ux21bDwjgwgxaJSAu7JSfMRUaDqzU",
  "key19": "5aNjNRwcjzWpoKiukak38a9kvZ9wDZSBTT2QioyNPr2BU6epjsiKD18gtMo7G1GAn84XvNSC6dFds6bTpHEL5uGw",
  "key20": "4ourYtzdLYNctMYVyfQ3Azn5E1tCpzzcpLuCA4AZrn4MgC1M53Ni6vuPwiEEKmux6QwRdHn7DzGPauhE2pdxwjPx",
  "key21": "36wTULrMihJ864kfDoKxPTY6t5gcN9K5DqTag17v6NAjkQodys5iPdrM3faPSFdYmpkXxMBUBrxc8Lt3ukwT7pg1",
  "key22": "5mor6cPqdrwvAcjJXTcNR29ds5DnHhRTvVJqV7tpR64YgvvSAT437PCuZqPXvYjBMho2hqrjAEiwgMbq3k2BFsWJ",
  "key23": "3bJqFpTXpQp33HsHw9RStUVE4VgNEoZF1X1UodtVrQn14XkxP2ZUMdFffPWwPnJMiJEcMvk3DYYhwNiXqoGchQ6Y",
  "key24": "378tQ1LTiMV8DGfbM3x2j8hq3ctMYudrm5cKiGfkFZviHLXmae6eueSYTkkY2ZKnXC7taQRKnqcpNX9WBTWJ5FYX",
  "key25": "25dcbvYvCiKd74rRrdMsyc8pxrhBo5vZ1HH4Kxw1raRdur2c7NC3rQaYBKK9QGHWvDwtSNvRgQ2V2PDFMqstHvjo",
  "key26": "254tkTBzrxBqW3tdBPuhx8zLLLKjyNZpEbp9xyR49fNmgmLdHacfqBgaSdvJxsDcMCynXyT4BBkbj7JeDdtqD6bA",
  "key27": "4GHyDkb2n8eX9Q7iXzoy5QzXDY2Gvyoo7NqizEmaVq3HuGaDjkUTJRaWpdtjDhJAPWhHjpwng27yBXR952YpNvVg",
  "key28": "2F2kmP4kCfnCdSGQw6GDDnXSvwWhVEsYfyDQMvRFtMv8gYPJxrRcsVmDtgKTgWA5K4rdnfMsJJTQsYgJGj9rFEmF",
  "key29": "2QVjB7uLNmGP982AdDQ9TRm7zY4NJr7Kyq86N9BYW2GFitfpNxASpPHJU6skDDxxJta3GBgySLz6n8sCVYrR7cCF",
  "key30": "4XqWeEwv2tJDfKgSVwk4vQuzJxzCzWL7BeCX1V1Z7gQa4jbiQFF7kCXo3TzLvi6Yw5p5AS68se9CGW5B49QqDobH",
  "key31": "RoQkQJTiSZKbYYPazJnRfZ7X5GsLwwgJbF4q8nG18x5RbrVQN9aaiFfHkEXeCH9FetKL4MgpXSngdcbRWE3KEq2",
  "key32": "5zA6Z7PJgjtaqszyVa6LUH9Q1Phr5TNZ5LpSTnJZpnKYekBRMHRUTppGFZsC2XAbUNkkkX59oz7KwrvhC7L51BRf",
  "key33": "4HC18ycAMkQw6ncm5R9pV6qWE4WMFsRsEsGUwnUf9kAaNoVH1nP6jsb4uRKf4hC2MmDfa8mS2HRhUBUucFUGQfsg",
  "key34": "3LyvqHP2gYgS7N4QERWezqFkoNjg3DDbLYyvQSNdcEKaft75GoDyDfLMtvoJuZe9omDjeCBNxS3cu7NYJaQA4LMY",
  "key35": "km4Qqx9TX2WqtnckLGHHyqKfsyhnckp5TrJKtSbT2sFdSdbij7qhMpVzrXpD15HQBMfsdJ9WceFjqSQwJkbtmKy",
  "key36": "2z4Nryj6Bu5ZZw2LMmtCS1qusnGSFwiTLh7p6tXeCPjzfe59kRMVJCArRGsgvBmVGyVijs7idcNFcoaV4o4xMZhN",
  "key37": "3PoX64Nmvb9JLErXixDJ2DpAMFBj14puxK54y5UdFDS6azLEqHQjdBa38cdgkw1ZDHQdyZRR97FNksaPQiNhLrWJ",
  "key38": "21RY1agZ2eiXw2Fmfta5Kme2r3tpSjXZKFoeDTDoYAFgKZnmPKiko4afdLib1FnKcBvkmeXMoVuFrzPXH33XPoTL",
  "key39": "FpZW1wvAW4WXkrkAWhVJUa8iyhFuNAe4nMDZzW3wzpGvixAxhxQYCvcND3HahWPYK4uQjbJvPT8mBUcutRc4Gcj",
  "key40": "5HBCV4tQHctVp7u26tdKEgZXUguAdCoZ9DW7AKqqb7gZU6vc7seEvM9Gmt4EbErJuqZYk1K5fKfXcMA6FZnceij9",
  "key41": "2vrMcnEnGXsei53dRcXFrQcMdwtx5ipzBCWzraE9q5RFGVEQziAoUHxK5RTNzDz3GpEAfpDrf4p3rzd2e2UktAyT",
  "key42": "4eQ9RrDxMyk9WCictrsXPhuos1MCmdez1KgHnDpVBzBZWjvY9SGxfJ5CDu1o42Sxjo1Eex2D8M6pLF12hSMsc2KM",
  "key43": "UgMHEoyeJL1KjfRbrpwnQjXZiKaAnWHwFsKV7tNDSyz9QadTiZ6S163hVsV6n1Dpyi9emYfeQPbv8EcvNT1b82R",
  "key44": "2AoQH2A3a5jhtR1iYTb6hYHZLBTugtSKDBWds4e9znSrtnGjP4YuPV8Xv5CEjMnHgjFXi53oyeFpQBriQDKvjpwq",
  "key45": "3UJukrY3z6BHumCayEXV7HtXeJnNDsV7L8YLqyBjRSvYmPBu8WT8it1iEB7BiWUksdZdDtjKCTdvmnhnvHcmJrTC"
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
