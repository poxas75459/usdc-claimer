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
    "4fvJ6f6RJRoD7V6jBhGLdv7SZoQJ9h9beBwgSE93FVbCaphuUgmQcA8suJFpi65EjUKJpu8QfeHbinB4jA71jgVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r64A8udpsmGi5rVXT2HUmpX2MstvQWRWKcPikN6HRavbuMUYxMLhLQA8WXNjHStL1pvWttHayNnkauSsk5Ezcp1",
  "key1": "3BEWkQk3Kboe8hoW6xr9SASnZiEieD3iSwkS9DXiTBYNWev5a2inerheYWLgcNhTLzo76RfSFcWvzP7GcBee26RA",
  "key2": "48z1RSU5siKkxE7MDPbGRjsobxZCqk4kdF1sd9WL3G9KQwmyDM3HsBahcH3ZRbHxLkdJwA9PthZseSqJ6kXeHRKP",
  "key3": "4MRFqi3yZj5JSBy1ALJ78PwigXJ6gV49FP16nohNVbxzVrogSbUCP9U8Q64ogdSAiPeyNWkrM9H63t1NWZX5tcY7",
  "key4": "5bp1vDzuBXZPddW3Zk9FYK5xmsok3yfceH9TpD38AGoEhPmo7YZuVu4qLHyjgaK7Fu553JmThWzhCLMYCTNz6QLD",
  "key5": "4oJtMVKXo9nCPsDCjYQ3e9651fp4oQZVeWUgreWE3dXSsNDKTR8mVgQuKSHLn4nhd86tuHXo5cicQg7kH3aANm5F",
  "key6": "54seuiLAwHC3YyBHDxR71jWzkcL9BoSettR3Y2HUDHXD5XsMVNeWuYS93Vgc5ki2ozsCdrGRVX7m1PzEfT4ZRFJf",
  "key7": "5nueCoFGHyUDdwr9piae1upMS52kUsuACpHrfRKCMc54hkBknTueEMHZ899LH4UnYYusXTEmttMHUQGfpwSoPZyb",
  "key8": "4HFAvcGiTZxXqs32ubqWXe3TdX4q4cc49vm52zAy4d2nqfVEjgH8LgTb7jVEdpQhyvhpXKvhUUegCkeBqemApcEU",
  "key9": "4s8XU6xAofK4yUAHZ61QZr1LrnbgF7xNbjvPPEd74CEF2uZ5JruM5reFXWUfP9eK7giAswV87SUZrr67VyCAEwRG",
  "key10": "4H576MrvV56cY9iuzpJ7ii6PGZDxQvBdKUL9jo6Jca4vDTWTj3iebpDTZhEpuSwykS5A4ERWxknVbU4SWbLTvJN9",
  "key11": "3a5BvxmSXUbeD59q3kyvz9ZcxxRrFkRE1j21mybCCe4j9rQnRN2grbHkahvk6xitZbqz8aqPuXGAFLmjr4hyT7yF",
  "key12": "hFvwqtbS2DqmSPnM1CwMWZMeGkVKAYJq8Y5PyyLBeXKTMFUqpHKWPoFpSBCk2f5JDNQaNz6nP29JHYV2AeQAcpM",
  "key13": "5349CzTvEQuSCXfFvNS7B8w4mEQ43Sw28Qs11fbtG5oYirXJByD79YwftHDDUbf2o2xdtnkpM9A7yzB16YjB1Lkm",
  "key14": "3ETCpVS2F3mwVFHLS8viCnBCVGVhq46r7MQTnTzFxapUmHoBY1SUBJEhaZrjT3Bji3hWSAWEqGCA71EkAbdEas4r",
  "key15": "5fBfpjZjivTVxXG54PJ4mnZEy2Xe6xFyPmzYE3mV8sZwbPiJLq9bsvSW9b9o3Lebpo6y7YjbguCU4FD1TkhRDE6p",
  "key16": "2h3f3o4LC32yEGaMdqhkCSMTkH8gxThgmsWiTU9pqnV8QKcADJufdLpacrshpAe5GNcFjzsuFiEbwee8obNVi36o",
  "key17": "5nUpiwardhmiRHpu4twQ8ewyFAB5QRcPCHsyEC9pYaXjHurrJ1GAbiYmv4P5wSx35f5Eemr188dBGK4CeZs9fyZo",
  "key18": "2mA3DQHGeJP4Pufq6Kj4kb1YU6qQ7XnRPHHe6dMcULjLAaZzL8X46YbxRh6Yt1BcoegaQAddBjoFSLwPWhsPmfE",
  "key19": "4jkd24yYAhUr5j9qBN3GsZZBQE3xkm5cw7FZK6sV42Ma1vHDd3SN2hY9RRjX3ouiUV16gPhwhVfqRhtKvyvX2a9a",
  "key20": "2NVmgKwVuvP42uQyshs6cR53M4Kqmk8VUZ2paLANy7iz5Q3bHpADYfoGRMkL9y6cSMXaKuXxyGA8wTkYdJTMhdbb",
  "key21": "TwV8QiW2VTm6EojWpNPwLfM3MvjcNWgvgMCwUvHqV3HQ3MQJYLGQhSZCAxynHAnE9grZneXCTe3r6MhWf9YB4SX",
  "key22": "bm5PMC3xdwRXQ5XF3WBz7zg6BYpmoa2ppiSQAxHA77Q1ApMu5q9moULCuY2Na1ymoFoK6zon2f3W3gYyxCdrGoH",
  "key23": "4J6Q1Nft4FJm11xayfCkTxR4javfRq5YsfyWqveU8nHT47S3Gru5MJd2wsxqY4HDJne8xKCsvYdsRNp2KAZcxrn2",
  "key24": "3B3MBxfX9a37vVGnRrdM9BfWnbfh8G7HtMTRsRveTYoSEu5ho6TonekYo9sn4eJTWP5QuQ2bzSj32DbR9gGPvr8L",
  "key25": "3hZnnyqnHXfiYdJrkvZ4DWwsYyr1mtw4YKjZXb4gu5tT1FdKVYMCbpsfSsoSjqrwFax4JYzE4qe2PvoqrX2GyXP6",
  "key26": "2JSwdFnHvGRTVRm4WYA8P7ecEea7BNPXMgHowvzqo7BSGMzcZzPZW7UXtB832GQVeRtV1xZ5mvFvJVns9Z3NGinE",
  "key27": "5kJPutwNmDsCG7iC4eWd24ar3gMzsTbaoCdbABipMEnDAge4Kucv2kB2GwkwKMcqK2YpX7x3eCnF8XuBhk73CA1E",
  "key28": "5wKS4UUzkiz64eYcpvLwSN668m6brGzGF4YR6kcPTUjfKFAwSEByC7Y2zscLQjkuxCqvdBk1gtpmajZHwsQTv9ib",
  "key29": "GsSrTBZgKWQiDLSZ2dRfR2NkB4CSQCtBBr4jmfzDk3tJ6pack6qVNgSukDcZ8YwFzSTsKDdivt9kT5hggXGwRuZ",
  "key30": "4VyEmL27D4MvRDxRGeGwjjEa3471AxSsBGfrPLmKSQS9KMY8YAtaEt8p9MMXqWQKrHsndZXorjtcMHE43a4sWkAz",
  "key31": "yt95RCAdmmVcWUVQyrzwuPbS4oKBRC59D2ByQFUZ34ikTo25BhRntdRMfffJKx15MQnx6N5MrZCk53nsfuZLF6n",
  "key32": "aBjxvGaWJrfX7jRQuidPvgAW5fe2Ucx9tqkEXdvX3BD1UZawSvNintXTY8xyDwtttqoktBW6gqouiPQGEtGT8wp",
  "key33": "2cQPrRQmZhP74hddhj3SZKV1D713y4kBvK4WvUG7nLk9HYtCUj8A4z8tqz8nidnXg927mvb9pRuZAxHXtjRnEWoW",
  "key34": "am67ZSaK24TG8SX2rUNqSNGRA9bTi74RLsvm8vH6TeySSFP7Gg68r2ybG36sS3oTzinguMaGfxYJWpmEMRV91cB",
  "key35": "rRq7ZpQWZhhyHd8vKMxXnJzvnKkmX9CT5gxVGzEesz1X87BCsBFvz2M2TgJCMUrWb6KHcuqXLYGqg5hwgZssvZz",
  "key36": "y8iQ44CV2ijEWcAW4kx13BzyPoiVTzSnjEDNSmE9h4YougbPqqmLybmVX5zHNtStoYKm3mzytg1uXqyAJ9AstNF",
  "key37": "2vyx7FAVk18EjBqZi65fsGwhEFsjCGuQmJNkRBa1ncrHFuW8Zojjz4Y1U7FeM7ug4DHGHnazvskGLdDKtTK87r8y",
  "key38": "5LxPKgqYxyVyi23Wjvp265i3Kf2737BZb63DyixPw2BxgmZSAVL3XGfKonohaBJ77Pd4cW5D7RgCDjJhrpKYMADw",
  "key39": "55ybJoKcxPwDYheGhqjqvdidfZ7tvwHHiBErZLrNxRdptZqNFfCY5uiQaCptA5ZVaVhecTbe1JjBpbg6JUVKsftp"
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
