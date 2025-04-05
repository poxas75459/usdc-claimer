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
    "4FYpnQmfL4eJF7rzrn1rP14xPcuoHLTBGSWPE9JDBghg8berN6QpTrMQWAaGSESwu8Gr6xRZ3h2J37H1WzfKH9wU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zEghTEihfrpLZYDdPNJLv84YEeTcQY9pfp9UQs9d2NuswF1SqnzEZgnwQ2UxrhzxAxZfQ4MagZ3FVE73JNZoLgK",
  "key1": "4fY9VMoRvQVimmgzVFWb4RsGHHf7Ssasg2hoie3CnL4aprBxHTbDMeWFyDKF22yLUmVFWMizZziihn3gyQKcC61H",
  "key2": "5X9X8ZobajvpwGnCHsTkd5uyWoHtPphirsUAHuSUihKpKwHHtVf81LdEmwvZNG8MuYdHXPb59F1oUES6wJRN5F4s",
  "key3": "5MyZBxb7RgmS4m8iRJqQfoWzgg1YxBkkxkE7gnNKpZ3gVTdCLGZBom22BEXc6miTdUSeBt5n4kFvg19UXYJjVeQd",
  "key4": "diTFKfpWxzkafax886eb3yWUsDu57tMcRvULcvR6ZvEzL5fUxfRLsWc5qHewG3akfiyg1qyjNZZLjmmmcUoXTuk",
  "key5": "5f7R4X9hEAVQKTdF9n6N4Qw1pUKJuhg3MBd967bqP88txT4RMZzcppzKsZQEF19iwPxtSuoGQFGPpGHtmpDCsyhP",
  "key6": "3UY8hQCAWa47kTz7BeuHysPN2RzK5AAfgt9mjHFckYUDKkMqaFfGPv6ZJYNwsCrDyFYHoJBF6oW7wZuPtBwTRd8A",
  "key7": "3JhyNZBeUeChDhPyLackFEJRkQx1zkaRS3pZ8YCFXQeHpesY7QppuQkft1JMya8A8hgkzKX3pSwg3KoNXe3sCWPr",
  "key8": "3HRkjT6Rsraw8MhiMWF4MB3mnjRGzC7b6K3WLAFk9jBUeaguUT6xLhWYCHxPR3WwpWgGLKuQhkGQfvNvwbbwJe6g",
  "key9": "2QecyU54LbRo4FAfMGv5EzdcDcUp8RPXueg1iecmcWmocnUHVYp4ySB16RvqiWEZxivgQRFveuxdrecEhKFU3txg",
  "key10": "3JvLhtZ3sM8k8ZDkvdoEXRDsvnENP4HJzbfZDny31Rjmhn4ptwXkt2qxyvFKadEiK3uUGPtydBYnHDzYddJVeDLp",
  "key11": "5TLxvbwgMj6GrvsjU5QGfnt6AJMAT8K2bm4eqPiz6FqYVTJdfbM8eGTN7DUo3REmsoQBFqjzfcpnpZvTDdmkBwVo",
  "key12": "5X3w5c3iyyaS6KirCDij4uBtsQUGXTNT7TL65PpfCL1cwaSUugbkHYHJx37Br7keGCiB61yrMYHuXAqZd65RUzcN",
  "key13": "5sceAR3Yp4wehJFFo5iM6hCHvnUwYUk8buLZnmweMkT4nMSP9Ld1BcuUxQvz6s5JRU4tgxfKTENqyyyuUG6hBakv",
  "key14": "4DyszFBKB6t9GVddLRWtNfJajHqVUGk27UUP8rRuYvSi8jNhRNSu1z5Sj6KsmpMjoEGuaTwy5MeJ7kmHSkTFgfQH",
  "key15": "4errn1GPNh8GHASTGrNfgShVcHxgjNDPEhWezHWyZ6ebr4zgomHB9VpawNeDJjDvfxjSx7bAz6BzUutzBQCgdhwz",
  "key16": "SSdVXthT6bzeGdNMtbZhivQsd9ZK7T17wHyY4xuTUWvntv8Zind1Fmzb8YjHVA6StTY7EenM5Kv8xrGAZS8oXgs",
  "key17": "3hkttdNZBZhQDERt169fi6YscZYVZGg64deK5upVUJTLFXghRJe98UwdaaHZm26NtmX3oSqZ8RNLxPbyR3ttiooZ",
  "key18": "2b98F6eLZ7oucDXwGpbpe1dUp6AVjCRbMMha2sD9LMfMhL1xGBKxdFoV6wsVpmrNZaRERzFwf7sS1csSwoCyDCKu",
  "key19": "4i8UscZ1VHx8oBEQGbvEMwZcHZnn3PTMGmVTcUWtCs6rpks3eeaCeveif4kg6d7ptk6fk3zUdwuymX6uxzeQDunA",
  "key20": "wzLHxvxB9QPM9HZW89BZYVRhK85z9HhnY8Rb3Re6WyXpzePQ7jggZKhSQiBms5dhvCskSqwSdKJ3YfGngZr1d6w",
  "key21": "5aZGUiJxaHyBkgPNfQryTe4KQoxcjNEhdAsWMvpMkR1Bej34Bg5pu6oTJf5rBhYRGVg8tCwx9gg9r7TBvoWKeYdd",
  "key22": "4vJWi8B7jAjRWMbYeuBeuaf1okniT9N6i3vFNFEYFtBQ6Tx79ShHn3Rz7zZybayn6NdDxXxboDwA7Sk3MGUKFzpH",
  "key23": "52LkhtSiCWebC7gcNbPcKYPnACq9jfe6fZsua8jZ2dc1hCHubNZKWonKJW98vMeVLYURJWW4C9RsWsuy4ddsFkfD",
  "key24": "5iCdPhn39pKG6tji1sYAJfNxxLcYrU6TGspB5K2XG7SgwXS2k4jhdJX56Gec3UAkorpbMiY4vsqSiFjagffmqxdf",
  "key25": "57TTQ7bbHZ6mgjUmKNgBynFED1edgJnE1Dgw9UQWr8Y8bG6MjfVagBHyyChfpUR7RPj67jmuNnjoqeUB38j193S3",
  "key26": "3LkF5qvc3N7syCGXuwzsRT85GWoiFRRVKkkUQAH9GbisBs8dWp1cby2oe3KmhMejB2HGB5YLRPCTTgaWYYZkhGqk",
  "key27": "66tnT1kxhJQeKscgvAGGnD9MfwT5G9SLbnPv2jeKtEmtNNn1W1eUXMjwUsRaPqsCt9ZXF5jep64yPQoG39nPgxiK",
  "key28": "4U3tcvXucBgsmmGVotBB72Y4BAmdD8Zp9CbRGG51XqG2Tw6XFob2QoM6pR8oQoKNLYxjSG1fmWs71zCtrVSiGUg8",
  "key29": "2cqo4pvDEfn1dbgrdg3TmRFPJtj2Gem82RqoEw12eDhhaHpTddjbYtiB93N2xV4A8LmDM6NPYKeFmfPj6Z6biFdt",
  "key30": "63evBiozLhDBneAdrKH4L7vFqsTVQHHWJGLWkhsnGFWKRSTp5uSet6sHWdKseGficCjTjpmUU3VZxMnNuFeASZ4a",
  "key31": "SJkwL3ZKrFAiHj38uFiU4ZkKKqGkt5XP22GvpgNGeswxtHzmLWs7YZAEeWm1sw4hySe653JAc9D1RetfCS9q54b",
  "key32": "AH3DuighWyZtriwiDke8ZTrPxhGByJg4xbu95AnTA9Z1zRNeGnznGBHn5joaX7m1NpETTb63WZbrrAsMZFgeS7m",
  "key33": "hTbzrvdCvuicroJQ2bNRiB52jRmEprzUwTkx2Lef8cjoTV2tSUoh6ZGneUYr5fXa2x8ygQWLmi8BmSdU9RCtVgx",
  "key34": "4NsSsCa9eKe2LNuK76Key3qV7Uxy5xo2WHChPvGt7PKL8tnrysT74q6wJpBtZ7WarfEaDwqjvtTtqwaZ7zazeeXh",
  "key35": "3ZXtPiov2xqbCVYRLzfE3osksc51Rts1vhoRsbGnEkBvxwRWAP9i7zF9sZuhN7fpDx8cRamBf955ScA48zeEgLhm",
  "key36": "3o3m9ihLe4ykmXHve4Niq51ZNARLZyGxMsJSwK9aSzbqLfKwspYiLejcASkDhD3EYqbhitdXaHQLgw679LHYNnxZ",
  "key37": "2jxPMZfJoaVxH7msSRe3NzQ41bbCUzveKw1PQjyA1Vjzye7M5oH7aUgnvxuACryNbT1zBMhXeQApeznX9N8PmtPL",
  "key38": "51LVhNVGtT51ZdqLxZvHhWxF9JUtYgPayeazpk3E2wCa3Di4KEkN1eVsWrNXMcVTCdA9hpLtBttg5oDXg7VPGZeN",
  "key39": "5S6YPxqjFfCcqNw9cJrsf7wjvLBiB5xq8VXBgoq1dTLbDS6WhTjmFUVXzVpTV4xAZUdM9xWtx5eAjgpYyp1Hfpd8",
  "key40": "1hWtnXXLDKYk7dzZmZTfu5zP8eiysFboKE5iM927vG8VnM1c1nSdxFuRXQVmiuMJ13uEN26oMYPvbsJmyTjs2gA",
  "key41": "2eSjkhnPr2rrq4xsTAbByKX5GUXGQt84N8WpjvrccqUBfV74Jxpp2xJLhMp9CjVZK8o5sJp7WL5o8ajXmrZzzbzo"
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
