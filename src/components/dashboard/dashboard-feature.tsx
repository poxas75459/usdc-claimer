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
    "1QdUTWWEaSCESDRLucdM88e35E2BUdGeD5WMBaK6oK56c1Pxhi7m5eeRzxtJaL2iTuSq34FTtcMtXkt1S8Lc2JL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pauYPM6vbyEAzbjLKahkYuDZE4niuKj1t9QuKU7MQL3wUw6VTU3FT23oxF2g5mAHaxXQB5N4qsiz1mQiQBo84oU",
  "key1": "61N2aVi4v5S5uok7CpSuuZWS7yVJd6DNCAmm2u6VzYdvCdVMVfF1EHSaUQr2qUhGThZn6TgHcGfMjAwVzFkLEfxa",
  "key2": "2D3UHHwXdtLGhEEGdN64agmUhRNXg1TNn2hA4uCxBWEU9kCnxQCZMoA9hMgJejKR8u6a4aJU4PVM9YZLte3L9oAg",
  "key3": "31broqghe7ArWY32vBfeZ7YVUheR8B3fg55hU4mq9S3B7N7PiNrpsYRdAWdGKoTZJ5yHLLr9vXGDz6TyTfST6bDH",
  "key4": "2NhGLHCgxHHLbsmiy1BLSP3cA962v7dfgEbK98hd8qvfhwHh3hvgMtZSNa8N4rwFVdwVXWug1U23AENtkbXiMJaN",
  "key5": "3oFDeEcBw17C5rgaCK6NvLo3kKprTL43MhArhd1ErB4iVPiG861eGL2fwrFB4KjQGYZeqeUX6xFx1MRtRwHxoAL8",
  "key6": "vduvfBu5tFyvyNLzLbTQXcqtf82wtRBnFGMXTPFJGJBT8iGtbMx7yUUBdVD7XXKZzphGhwZMymfbz8fGdCY5KTz",
  "key7": "CCcxyeBWDfCbJhLxCyWBCmW62BVYSZqJmNCqrdMXAgXrAwHzkvTj9bCRUXiqnmJxWsBVUNu1hu7YZ8Y34zcVp1r",
  "key8": "2T39BDBLGBNEqGKMXx33FwXDCGyDJHKseGm5SLSKVtUjYLZoZGRmKDj7sVzim2U4cr7z8Ts3j5ssCbWFabuXJ4DH",
  "key9": "48msrg3L1oJvkq54ijTMqZ22qsgfr23kzpi5uWgrBS9qS8Pxg2DqjM3aSkPmv9w789EQgAvmyDzHWRJt8GSudeAC",
  "key10": "QqM9p2ow38gUzy5owhy6t3MJnvjgLMoqYGn6qNFBsC5WKaNesmBjgr8LG68gMEd2Q35i6dUv3YNmJVBrnC88oaz",
  "key11": "41PtmJ6y2EXLqgG5svQCMGGzdywV4sqjwUkfHfNUwNo1ZzNWs8vbq44da8K785HZofiujdFvTw19sAuNMvfThEQu",
  "key12": "4ZKT27TYaML5iVaztbKAQxmaH4FJfvgV3BTWhKV9uVX9hARNg5LouJfScvLzYv3TvHRZKZK4VEnmvNc7zbe4i3JY",
  "key13": "4W9V7iUcuuva7Ew8DBgnNGdPcpKzVfGPKJ7afmPBCnxqxX7in37B4ZQ15sThoqGRsaTv5b8xcM6yq9zzVM1HkTVd",
  "key14": "wU9X9PSWTqj1FTQQnkGEo211MNictgJ68VATjV1mRF6TRnDfpAFDzX6Y3cocsiS9ixnCs7fdph2TMX8DuVcYKMQ",
  "key15": "4cEsDXX227MMMWXY3h4yqAPdWTySDa8SzzPKL1HycD7P7orbztNA7SfGDAV78K8xrPCLh7wun5jKJTfZjgjbXGuk",
  "key16": "2u81fWsWRWaJcFtvwDDRGqGeVew1X4YEiri9cPsSUeTpJMNbmu1KujJJnts7A1eJc5M5opT9gLCzwRLcqsWjV7Y1",
  "key17": "5KGBDQWinJ7R3WAG9buNZCge8GCCWt5Y2JVn2K5XwY9MZtcwDRXuL4a5q7qk5uPJFs46mQ37cNEvxMFQJSLMWGQA",
  "key18": "xyMsuU78biHVz87qGh1NFSpC4qYkKCVyQHUojrR3dRowL87wkecoUr5JRnCCmvU1sXUkHjM2eUB6oRyao4KV3Es",
  "key19": "3HmmoKmLXE6TQJJsAwvqDkHFZ1H4qZfKTH8qFT4187gPYh88US6ZDedcxustqBnLFdHRMKWeCZSsn78ZQR27X9Qv",
  "key20": "3x4LHEoeuJdniuhrXrNbyr4f8grPFFcCNbigju8jBaTXUXYpeqNJMnm3ugyh5Dkp3ZdQkUJLuVZ6HVHbSYMdoJMs",
  "key21": "3g2ZodyagnfDP4fgR7ivuDXmZ9nLkVitkd762kBbDWkmMeh5m71KcpzwtnoCyfHKqTCXvEDJnBGFzu15AFtjR9LH",
  "key22": "Sgkw5qKZDvwm32VbiGWVGW2NE4gL5ceHfot2jsS9uubXoUcy2uDRmCdLGML9GUpv318VFrke9zyreDqgx2cSrY9",
  "key23": "24JGFQzoRC5MowQ6X4W6Mqixrqdciu3hadmmBHC7EgiyhLDRJKmrqtLMPfmQeJq6gvbDosmgpKu1y122FgT2nDzL",
  "key24": "o1e925r3pLnUm7hZrJrkutSR2zsrrKPDKC1SSrvc3qyCfCZ3tPkQ7jswXcFFRChdK3FEcLTvfNwFGfCHUE7UrPb",
  "key25": "2n7iewyTHBeYuVeK9W9gFp9KjU3yktRy5Fhumvki8njzsczhW1fAL6w3mofkgzGwfj3sbUc9btaH1EyF75S3Qxwc",
  "key26": "RCwD4unfTfJUYHyvXmsWoGPxXudaxBsDku4GETsi8GZFUfyiauiHTQhmSf4yKqyd6xVvcYUkX58J5WvB3YjaJJB",
  "key27": "2HKLGJgq7F8KyrWtiLkr4kPnNbUnEWLpS7kZQyxi2wdwEkDy1p2UiaRfG9ABJuBsBdZnykxn89tHhAgAmNYEwQ2n",
  "key28": "2Jipsjpyt53HgDn5qBgPFCmWShHWGsk8o6sgVDijCpHxZEVqM4CgxYNoyB15AnpJtjxzoySiye1PJPora7iafMWm",
  "key29": "3dKTx5d1PANW1fCHBGinNGyjPL2ddWXtkkbcA4bRjHhjhBVa7jrPfhpPAwwXoV8wfUPGi5p98xwjb8bm1anxjo8M",
  "key30": "4cCZp153TNtaQPBRct1TBWm2ob653wUNGrCKgqoKji7drRmNAFT417PjhR3PAZ4G5oVuQGMC8xjkyqReJCqVUTJ5",
  "key31": "394Ctjn8PG8Ru2VoMTgNM3FvvJgTh9sA7Y9GPfYxwuf3trBu7LFW8fcTXxzyPmKArQe5zXuCFQWMa9qHQFGoBFH6"
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
