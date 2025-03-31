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
    "29ipaeJGDWTC1a6e71JFQDrr1AzpXTsD4ccW2fhKoKfkjieQWcqPWnQkMY5eToRPZCtUJ1oiurNXw6s6tReYfU2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B3jMpaJ9tZNZr5xVxnRqHSRvvZ1Zth4vSFa2KD2wpkeCAeqJRSiDzgJ8H7WQM22HGDKrjoodkzVTLWWs6HPBsTG",
  "key1": "5CMbh7gApAhkgz8CcHe4S3DUdmPs1oXxiMAxmFtbcwSyfBTYqxffbqtdH16gGJrJX7s6djSGTLC6BsMmHhubZnhL",
  "key2": "3QGnt5yTLQbqAXcDHm2fJFSMFn7tB9VwoZgW5Z976Gz2ywx1FNREZD8uGw8SbwfgX3eM36JmwBhdhuKxSSF9FBtG",
  "key3": "517HeWLvzkU1br1ixDBQm3xA8DNkkmLFmJhfbFiBpM5JgWU1mULgdrW9AVG6PW9mWBYgYrbRxYbR19eAxdExgE5d",
  "key4": "41ibx1sobKcH6h55fidSQZTougEfEBAvH1bFY14utqrooRZXw6vGSdPnQCG1DFBcb69ojmVwdFqBiSLMEw6x7hU",
  "key5": "2JTETyZbFmJBm8ojSuYegwwYdMoCTJd6FgKYW1898bgsH9gSyvDABFTPQ4ELRjHptY5GJYZc8nrZrqFLVS5ANGqC",
  "key6": "3w8FqyP3oRsFLVwZCuLc9HbVRdDh6mp4ThZNGjeJcY4VQrfTnNBMikzyx5Y7EQXpeHzycQ9WEoEE9EMQVfbbqf8A",
  "key7": "4cXHeiCBJH2UmNpq3ZK7FcxTjuoZTXm7eL8nFFcT83eUnRnynHUKKPhNEPv8JXYRkhUf6aDdK3vTSNkdSR4KueKB",
  "key8": "47JSBBfUGhH6ZjnibR3AYXJuBZgZTFYQ3e3MqPMLodj7pH1WtR8SM9Vp8iirZBMKyq8z36MR1XKshgvgsSAB4pT4",
  "key9": "LS2iPD3PsG9pHDYKZ89uwdrq8AX9DdyeZRvr7FLRJVysXT2P1Z3WBhyi5timikHX1esL1itt2Z4gvt61TFQgeWD",
  "key10": "vJhyNH94xa1VGuJYWUHw2Mm35WVLPKu7AGydjm6FkJ5dDsrwVcoTgsPHt5h4cYzxnZqPEe9redyX63xWvQhSYwJ",
  "key11": "39Wz39beMXtdzUATgxbQg8oj8TTYop6BN45o3yMRkPVHBpwLtu3NkL341DnaYYSjgxV3PPCkrQtG2WDpQQTD9LmK",
  "key12": "8NafEnKneZ9SfSUXA7bobXqGNUEUcdqP3hHYshoNkHiD4CJAKsjW8Xo9xC46A5L5ScWSzVJpGpCyckJn2hRpxyg",
  "key13": "4qQCTduwtWKmtmhEurEPw8ovrLDiPYjEYWmKT69CpjneFmTiidvqYjSKaegM92J4WLptY8M6P2QXABk6S5RrT3az",
  "key14": "2gaWiTBH1ZwdZtQXLie3oD9wKV3ZdhBzx8XUyHePsGt21emwAeBxNsAJaCU4yizmY1C1PHWy2v2htcZk1yGZrH18",
  "key15": "5XhErvYuRDzcE1r1zeRAG6ZuZe8YN57bBBnrWv5uW9ZmVpiXLi4wkBZnYMWpx76gVnYJWL6WEYUcYPU8sr28sDQa",
  "key16": "47QaVeNoegYTaB1DzQYnhLKMxD6Qc5GiVwFMt3DarrsHum9W8TbAp2P9rsEGrv1qkF2zqVybm52ygKNdMFYoaPFy",
  "key17": "2mLsvhVnvmts3FV8ixZ9vEYQ5iWAhRDxUViPfMv25takbxLEjbidhjDXv6zxnERLPyDfvwjsKnTabsLWTobQE6U4",
  "key18": "4FMrEQtAAtKFgEL19qD9s5NyXrbWVTURZU3y3EpGFkdTiC8H89jzt128PfaHJ2kTkcGRQhE7EcqtoUycdNV1nXrf",
  "key19": "3KfZivDCmV4jBww7jK2uy9EPGVftYPJKYuVExkQeuW9onTq3nubBtXZSMM6xc9RkP7cEExU4FbqWsgcRh6Ju3jtX",
  "key20": "miBj3QGDH4JrKbzQRWJ9hshdSArh5QTrHGJWMQKtAzK5ptojARKaawUq5FXbdq9G8BYANdfGTNkzcLt1qpSHRWC",
  "key21": "4uSKHYYm66YGiRsg4apks5CgMdNXJt4iYrU6eXU9owcqqWEMapZhrqizAdNmXZFRXMoNbrrbwzZgwKkT6NTzC53g",
  "key22": "4Ri4LPGKonDS9ZmENiTB2p8Cgyy5gPTkKxRpjsn6AXKLhVprVaGFLGDjCbcy5Tj3GLCCLy2LqS23riXybeWi6woA",
  "key23": "2tMaeTy3QaPu16Aca5wFgRKxRzSiNBhyQKQF3hPKszHA9yRSkuVNi8Wu21YXvC2gq3Ws1YQrYwsLu613BxkQFknW",
  "key24": "4VLmMEiDH4MXgzFyHQZsJQkf7ghwBte7mQSksK7WV2L5bjxLJdJm28JxsQsrwKrNbeRPCc6Rwsq8Jw2PxPGBJG5d",
  "key25": "zotU86aJabqHExtYzraUy21WJKfiofucEjbQyZZKpTdiJketAr9B5TaXe8gSbZDwkMcJTExBiScnvU7PU5AZG6s",
  "key26": "2QAv5gbYrxDK7mYGikCwzHjvk1g9vBDsUEARopnz29XZnnkyKcAGNWPwxVgErz33YfjMPXhYyAggApPpkf4ZJhPp",
  "key27": "vDGeeiaptvCtKyqN61etANGkigx7vpkAb2Wjk5UpzhLXmrd4uSEsBww5KCAVeWwV7aeMtDjVU4GZZDN2GKfxM9p",
  "key28": "5qZc9mURmZHGVdm6pebP43tvVpTJnMaZag425xbkPHK18rZ4LbvrdLWhHtAefsxAvWFoLQVmgPFJprSMw7Wm4WKN",
  "key29": "N6Pyy5UK4UfwYGHRDLbmjVAAjfSTCsWtrt1C33x5Qemdg4Xp6XscLmUg9inmzk1HQMJ3nKT11T3m6oSqiSGF9kP",
  "key30": "4WvxeP1tkr5tBsThXVcYU4mv4BdE6nT9d5PWGHLX2k7tsR4hqmXQWJF3HS21pxGLcEyJVVQsfAahyPitugHYkjYY",
  "key31": "3eoRSMbjKVtpa74vpd4bPvyR8K8qPcSXWXSty5LXC2nPrY4FiiaUC47zCyrA5WzUdQaEwfiW4GvdHdTeKkSEybTS",
  "key32": "96vfcbzy2pngEj9givBcnhYM78Dsfw6bBoASt8kYGxhzXy8sunoeuR76jVPiiREjqyLn5Y9AR1uWKEJxVSaEw2T",
  "key33": "3oYjAg28FvzNvKjH8BEHBDUgwuBZbg8XQeVDoNXQgkBuNDhDHifbi6cxguWj65hujWGEa58LapMuhj3jsVRafBAz",
  "key34": "41KPQdYsxNAwL5N7Z2zSduW3zVwGdupKkzBc2RH7wcu2dhMkJBd2NjJJVp3vT5ycFTRjuGe2GVf9Cn9oNbmNVzxM",
  "key35": "2SjmW27acJxXa9rGbfNzZhq5T6hHk3r7UT7ZS63yrbPPgGa7zp2iKRjc3tgyf9WBzchtKNFiHinrtMLzp77ztvLg",
  "key36": "5aQF7Xwd8Xqoz1LSTKUPkCbgpz23n2Rdbk5v5U2HTy5GZzdKYiBcwgwnHNkMWi8UoHZTE7HzkJvLj1n9ysXGrhSG",
  "key37": "4oekkhyyq7RXfmTqsedN8fHBbRnwFgLaJ2v54bpEoorE7Bmt8LVdfdW1iyPaNmefLej23uAwBnBTFNPoQZniJhFk"
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
