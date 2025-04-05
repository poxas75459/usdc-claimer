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
    "4LAuergyRFpsJkRpGkYPoXtqkYmxgwpKZzXoDST83PJYpfirQvTfpwjrTvxvZnaR5SxK3i9fhdGf8shcEr4UtYRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YXwr22y8Tb1kEJeTznJJB7W37pp7JGjzoG6qX2nKbyAVXaU35RPLTm3reM5EpgC7tNWNPvrVcGJkK2JgB8wfVen",
  "key1": "2E8uMTuAyrcQ1CCVwof2s526B2WeJZBZNKfUc5yngivukfzUNgKqAJZTX3Gcfdz9k9YAcMNzkimPiP9d1YoLy2az",
  "key2": "zcAqzNQ2VWW4NCcr59hTtMdSjMBUoZGyiUMEjUgUEJXR3vXHzanp9NvSVufM7u789dYwTxdedwZMGtmTwArBg6k",
  "key3": "4tNDcC8ghSEZwMnSAq7QVjjWJ1g283LeWaghhx6iSyJZj33z14H4voYvSGCjNDv6NK2roa5AqqSkXpYS7rKBwah6",
  "key4": "4saUzGwnSwoC9gXziTc2JuAR1qT61QWL1myKtmp5Ym4FRkmj5rQqC4nHBvdwvg7gaJhTgfakr2f8TY174csyCNiA",
  "key5": "4dRhKmuTBDQz3s7B5HzCKW89XmYGtCVFCC1dk1EujdYzdXDzvDxaKHth76n7sHsKnnXgrmwy73G99ZVP6z4JdmE7",
  "key6": "GCzNE6edv83PPT1E1NUv7DLYReMi38DMbikAdhXc6wiLWhCbuJ7g1yAgYXy6RTSKM89edNKe9hxq7LZGoTBufZr",
  "key7": "63AuJz3RBG7ocgaGiT7bKr5ebHZicSZJ821NwVHxJMWPPhwsgsUrJhqtiMcVNBRDf6V5PYyE4BMcc5uwQEESpRJe",
  "key8": "5QRYnT4FNL9CQF6g9xdugqCU9zJiUP1PGeVdC1vTvov57iYwCxWRwZYDoBfGwELi7pgbBzPGZNwYDHNr3AA1DpgF",
  "key9": "446cHmswVnyhiVA9ASqmUVZ8xaxxgTVM3nW21B94Kd3dBnicrvytTVhDzCuwktiZWkBJnuX8enWCN66tv2cwM12y",
  "key10": "2qS2MuZk33c4CPum8WPCWXHHaNUbC5zQMmkNU7CYhczYsGStSjj2KN1QvjPyGw4sUqxVFjP2yyfxRpBup7U8KaiC",
  "key11": "4e1JskoqPGmeERUenLFs8E7HAM6sLzbqMCH1CThwq5j6nXoSvJ4uuoXDrpXtZkd7SMJzafVfcXWrwcXDoXLx6EkD",
  "key12": "2pRv2286FJau792Np2HWA22TULQRaAeqyt1U8JmX14jK7AM6aQA7d1Ws5VxY4xmGm3LB1nLDoBVi5YGx7cGyAgq9",
  "key13": "5xFFEcmKyu9VRHsMGWn26wxzHZpmy783N2JyPHvQdPU5w7SMNvtzuwB2ivXcCycPQPUJCXJJh6Dwfbpi2XTKFsi9",
  "key14": "2LRqRGSmQrqw18k9ZCMZkQSuosX5bcxPfTy2Zz5Cy5vze3ZtdXkLEvKKmxuUpkazEMvegVymMHqu8eXx5mDfy7aK",
  "key15": "5YczccrGjwEA9c6GKLLmgM7k73L2S8X59oqMSMxr1Y6MwbTwyTSvL5oWLocqeY6UtmoJyPmgAPZvKhXUcZzEmZsL",
  "key16": "2LkZV5UbAv1URu6LMKNzoCnH58DgxtdtztKWJUfA5o1kerQSPmiXre66dEuYVG1isxvmJ8mmjtKXdW6uhwr6w1dx",
  "key17": "5LjLUey8Uef56hcbkjZf78EECGpX5GkUaaQTeY7JEfa3WdwQD4tGTaLF1qvZhaGmjzyWYiqhtp6naEP2MbCWUcEF",
  "key18": "25EwRkQ1DL252CeJ1oW9V1ukYsZHzUGRpTFydFYJrFbBsVNdzxV48FAn3JFEFNzVgES2CUMWDtGgEyciXM1bWzWj",
  "key19": "4Vck9aULdkn8VJo2M89dN333rUKLg37Qyj4GvoDq29Gy2CLNJQW2vQpiK4wrnvPCLRjswyMxLh8agn2eq7RkeSBy",
  "key20": "2gkJXK1uYSAxXZN9u2Dt3su9N2qABAMbo3P5uZnSYqyUSPLm1UP5iRqNMJUi4oLEYaHHeruC7KjDevsfhxdUNkcZ",
  "key21": "2CyXBm7SeX1kJr4s5ktqwMAUUVEvyghgvGXne32MACJu6EEPvgdkPqEQsW9TdQT6xL52EkHrTumZUmz1Ak8vGJFx",
  "key22": "3CwTHtZFrp19DnvfB6ry72TtWEwsQyb2zEMidbgi3fBa6cKd6JNtpApEAZHimpHUKkcu7ZEyupLLxJGFcenqweHQ",
  "key23": "52suVFMEajSwvexs8566yFkdN7euPDCkjxgHt7x2uLgtUQ4gZmLTpho4TBHbrrEfVgyDRV1oAquJUs7ZnsrXu3dk",
  "key24": "4PoWTagNwzdZbnPwHN67a7xRG8tXwFVxNf4fEhGExUGKv6zSu8GMksWK6k1Dx9saeB6SAsHa9tzm4Tk3Nh6gmFCr",
  "key25": "R3CpUozReAANF4Zeeuif5kRLKE8mnkXfF4emYgwwd4WxBhmn54GjtjjDmzWzxPQuk57gN98z9M2r7uvs2MpTaTR",
  "key26": "2yuXKksG5s93ZoRF8sfGULY6r5iMHzcEr8EqwueKy4o7GTCRovwCssFR5YamzPTDVzwT6XPQ8mfXT2DPtUVafeaX",
  "key27": "FmHZanb9yjDbLeB9g4FutGt9iTk3YLJWGG8CiR4k4w9myKW1spFfMyfiPhCm4AGceVpiaW9zN4ePPV7eAh5siJz",
  "key28": "jHVQWHJaKQ97qsWGTNKQTkrqp5jjCPfuCvHM51HJ4f14WGGDXpJikpLbtMjrno8fhpiMk7nEULowmygYLBmnBWa",
  "key29": "X4Vwvh78v1fo3MJ9s145iCcTjT6uFL9MnRvTLQZAzBv9W1GKgs5YFzqrTJi2Yh4nGm2u5WideRhnHFW7YcVw4tv",
  "key30": "2Ds5gpuGaiwKp8ta2VdAw8aojCBq8NXQJpJcKknuPTt97DRfNcafJdx1ymomRr8fUPA2e2C7PUB9ttx9DQc6Y8t6",
  "key31": "3yCQN8fgJGrNmkbGBikd6Ds3RcgLrJPLj4MzyYmJQ8RLutFGV64d6bEjbgSt73tu5bmXtLrijZzo5rqutf5xvyzP",
  "key32": "uiAxtXiaVetk9PhmA9vTtAdvjFYEbBvWbcm3gfH4cPQuBzDy1Jk6mF8Xmpz9p6Rz5chusGUBDeuzyTQ7w77zgLj",
  "key33": "LdzuNxMeAhZ78YsHbX6he2kXkMcZxR2YM55NvWstjLha5Pa27Gkhd6XiUr67ojZ42aN4ZZMtXD8T5vQ8hWZub6X",
  "key34": "2cbLpNvNW7yssnuF9ErSaEspExt26NfjkpfRMZvVFKghd5SJPH4RCndMbn5uSTa4J9RURw6A1AnqNkqKuUm6pBu9",
  "key35": "2ZzL7pqF1r7xau7nED8kCTQL9AwWbKftaFswT3V2mGtobBzDz8oh6xSz4SMCkJgu3zJKB7gL49bjXoHGimtp598M",
  "key36": "54sd6nn8NVDvTHddJWTyB44r8ibKNnLi7EW78PNgBKTKUdPGNj45NLzk6kcSJK4nShWLfRTGkRu323QdfVgRmQzj",
  "key37": "5GeNoQXbbCETHAKCWf61by1q19aWVd9GbdNBoxJA8CL94X3XNUqUzgTUKkqFxDZJyRyRYK6zhHZ9uQwiPd3VMXYH",
  "key38": "Vvs4PqoDF75FP1zpWpgThCLHBneHvVMjeMjvcXJfzqNeKvimW292j5qu4r3bXSqfPzgVixL6ZtaURgMdBQV5Gnw",
  "key39": "5eP1H1jfmLD4LNoSKGpRfB8bRUQ96zLsu3TJDBxvQQzFGfmGgPtHPyUvx4UkMsit5EHbqSH7LvaAddEf6P4YNUUP",
  "key40": "4pSZcEbQrBUzLNxV41JpfbJisw9Jhz8PgxmAhmnHdyVcMaptm44wu6o5qefHv5Bs4UnKZ5pcVtT7JNg3didMoiHY",
  "key41": "2U5tyRewA6i65L4iVafKeyhb2Ns3bs4sJXgjaA3fDjwsb9VKLpmrF4fWtV39CyWXZjC1Tp6LaGcWmY3hboQPfB7x",
  "key42": "2iextpXcTzoG6wHBqLPkFkggGD1bpNqbhMBEC2LXN9eqrFCn91A8fo8HWuH6rBDzVY5TE3a6irR5pkJMG3fJc1iU",
  "key43": "3thW7AP2qLwUXNUSwQNyi5A2rTpnDttfKpUW8MMMZqzqBGpY1nSeTr3Btm9iZgEni233uAc3k5xhNNYi7PqDVuLi",
  "key44": "2LneKHKNwh2EDhEZck7VUfhoRQcwMMG9WGTWUTYUx8wXvjYCEYFd91G7spicMZAzRcQGsc5oC81U8nGxxAJo6hzQ",
  "key45": "3uxCz5YfYNfU3AXEkZWNoX5yQXBTL9K8aGwAsjE3C9dZZpRRoMymzLnjeS5VAfzktyHcnmsLRrCsRareavAzt389",
  "key46": "2vNyKzDB3WjMLiJVY1YG4yjWgR9QFUGdBrMTXFCQ5Lte4RfTvCyv5jtiXmfWT8LUKpvnrkdumUyLW7FDoYtBeFeZ",
  "key47": "56P61DY5X1rhPm2awPyZMRsFe2J5uPWWHHdVpS37gtKy3ycnD4J9AKAf5cyNAGqn9f7LmSaSPjdsYfcQBGZ5AN26"
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
