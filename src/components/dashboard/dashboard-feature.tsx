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
    "scro8Q8PEtQgwwiPxjmz4QhYAtycKLs4aYi6CjLqdLf2KL14bJizzCqLw97SBp4d3staRd8jYmffmuuAxtYBdNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hZ8kjXxGenKvxvagrJRa39Q4SHXsQjM24Lf72QABuDhXmyzdPxG9KqMwh2HzZB7XCjKUzkUaUPhQJibRaR48aUJ",
  "key1": "2189kYz6X6qTEkj89AVZhCrYYFuNEHoVFGfxunyhrdkC2fvWdmhNZaXBVXKJ4Pfa6FzfF7hHzMsjW36bDMNpqre4",
  "key2": "DY9uGKY8wrk9fNeTFS4Eu6Rfomvfyw5EVgh2i2oFYgwMjUrGXfYdWzAZonCcuS7EGw1tcPPYSTNy3TCV2cKaV5E",
  "key3": "2DjAruhJyDcKwsPh6sBdkvyzVoCfqXdXEPrju5iSQ8Y8NYG5WDhivFu96y2Z4PVMBkj2vbjKT2kYCMMHWWrSgax8",
  "key4": "4pe6ThT35rknf12UKFzUUsj8YsYTGxPYgGUjYmCxCFqFGviEVjk6UvyM2QGEatmajgjJhYLT3QgNKsNg2SU1Mq2G",
  "key5": "462rqNbd4atdUdi33TGgmYvDegWhADqkg4H9CvfX1LpynsFtfiPf8X39zRH9EshjL21UHXpVPN86oPKHBR9yw7cG",
  "key6": "2SZLYsqqv8fRjurFxzZ5KGhgReoKgDNfqNRpehafxF7sMQtiGYG3PRZWEkCsrspM2nurRLd5nK9my3juSsGuie8d",
  "key7": "4VbRK5DSz4tcvrERfFUSwr8bQenagACKsjCjGTg7ey4R1KQSpGH5yAEkytjq5dfnuHc8AzimrTu3PUpyiMkWAEJo",
  "key8": "4M2A9KnTiPraK3M44qsAKKu5XFyDyoePSiVS5frhfwhD3WcJMdsKLzs1pZHhwZiLrh3VYvLDMBtYYAQ1YguMzJSD",
  "key9": "4nhGDWEVMKAo3g6ynhS5E549PtzHmdMf7uoV5C86kgu2CCZWPB1tJS5AEnLrQngNyofP6fWRafwAnXQGbWbCuiLf",
  "key10": "3mfKU6qcWHLqsWZMnu1mQy9PqKBPqqXZgTMq1x1fjZccmqStVzPE3mkfT89sXF3RXdbEDMZ8EvuhAnXbbF6Bjvo",
  "key11": "2zfULYBtppK3z3Y9zHb4zHKSkHRiHH78KxGAoYXYPhcKgUXX9MT7aDLQtjeEz7LNgAFFTMxVhBftmwbr4igMnZpD",
  "key12": "59JRUodCbsAPrbQKroycaW5uaxFmrR1Ajide9ZsCXsoEYB4rY6fpk5mTXfQaxGxiam6QuAi4j8C8utreC1Q5UDzC",
  "key13": "37GZrYUVpqcwyvoRKHETq78ZVhDAKxYfBDSmJJNVb4TQ8nsJyVv5b9c8ngJwDPM2qtfAtfuC2PBLgbMxW9pp6aQq",
  "key14": "3ZGnSS6bs5hbnV5sQyxJvisxi8aWYzNSwzMZuNdZyujhKpq2eZRcZHvo4xEyw9qyuBcTdpCViXCDWhYBD8ZkR5KP",
  "key15": "a2rHi8cZ7EEX2RFQYzTtMGP95hnZBNGvnt9HYoeAtvoRAwkzP2rEvejQCqiSCWmTgnDF5D8RDWbA7ZXgTUupP9D",
  "key16": "2Li9stwfvV7DP9LsmUJTfhVRG52ZFv7aHKGQqpSX9MVZPxNvXZVTUFkKvyDY5wB5huLt8eB6LQXcpJ8jfhtqu1ux",
  "key17": "ZceCCAktYNFdci4YMsB5cgWJi9AaAk5nsamfVD4e3y6bFqHjXSUiqWPQoaimSmJyvqN2fsjFJ4RxBMvpR9M5xTm",
  "key18": "5AueqptJpT9vCyCcJHY3Z6HDqQDVuQ9zTrgFP4C5Mdo3NouhkQ6iFfzGsABwtRZcrovgKg2RsYDBhGDKwnxKz2j6",
  "key19": "3F8ZYzeNCu2WU11118s8Upz1EjPo9jKoPgaDZ3W6JdDBuyKgxjytC35jGJbVpvWzva3vc6p8x5dZFjgXxoD7mxeY",
  "key20": "s6Jxs7utGEdvvm9Q4KXLuZ3XVZPDpHVeQneUCQfHm5UGKkZzr2aaXfs1t2kbfoowA25zHEAnJ7ndynB7xXdtiLb",
  "key21": "K2ViwfMGD252Zh7NEbo4ESFBuqnZiB6NiimyYwAw2mAgmHAgnGxcuBgtMPvyUWXpBHB9S4WRtEuTSScDSC3caea",
  "key22": "Sq2xphyBRU5Ho2ekKeQ2T3E5E7qfAbdpcdtAchjCD5sqJX2jEUnLYg9C2Y5JTNEUCEpK8c8cam8yFmp74y8aCzr",
  "key23": "fRDotStWSfALj6TGy97N6jNHQDjGFZz92v4J8KELmVPzj97ifRBLaCNvNiHCiLSEP2r17yygBp7gCMssoxcWdhg",
  "key24": "rDNbftLiQFFi8sS3JEeAFQYciYUHpMVmoH8EupQtnND8f9ovnwNiyPbfWToP6ShnRjTVNCm7rUzgzpueyH5ynLg",
  "key25": "3ZLhFsnTZAU97Uo7hpDzbigaC8H1YUkPHuvhcojLedeAhgsc4pv2YcQPSLQfZSAJ8wRzmJ2s9xrhijfEkJbWHEwA",
  "key26": "2Qk6GAbPieWkCbLjt5C4n1L36Yz2Z7fyakrfNxM7E2ts7Jz7THQYsckBpxHjP1GikFQzLjTnb4f7GgRJiTjTG37p",
  "key27": "4MKX57mtNA4Y4nyjKvp2jZUDgBe45QGfnAmsGvSbBRQiHokLDUzLERHan8QQBTikbjCEHSq8BbfjVMZDjWs6Eh7G",
  "key28": "64qxdJSrrPVUqXh1mZrZtygNJEiPA2kwbU78xtx6pxRZc21jQcBwkYECyFqXpowobCF69pr5wn1smmhgtNKurJkw",
  "key29": "3MTzRTrAWfFPgL1JH4gJaSKekPqbUtxhkWAfSiiH8x5HVgmuiRCjmUs8sYFfUXHeahdvSd3R2ChYActU3FcfZU2d",
  "key30": "wVJJzdZ1cS7tNnPKoZZhGNvKfmQ1B7iKQKbBe8SB2KNEe2g4bfE4b7TNYDfWnNnAVjUGiKTwL5UGKJyd17oL1in",
  "key31": "2XZTaUcyUEU2EAmuxAXwihKbnBx2UCLk3mGLGoXhQdmdhWND3ca69BgUu8LdDFyfGVpKn3cgUSDj6isyNJ2SUDZh",
  "key32": "3Tk1Ge4avE8Z61dHJWdhaZuQZQjVmxcbicgye3FqpToQ3c7ztQuJWVk3i4T4Cgw8XU3r9gH2uuhMUVm2xHfXxAbp",
  "key33": "t9MaHCHGk3oRVZMqASnRqQ4Kztv8zm7bQK2Vvk5LRJSnYRb2AxoAHJx6MNQiDBoAV2fPvpNqsWwaLCvZL4pV4vd",
  "key34": "zydpzHUcxb7akQ67bHppd7idiReE1pj1ZzHQzEtwNz2g8FoSCJC3mrHunQ9rpXStPmXp6mGor97ZzXDBshvrmZQ",
  "key35": "5URHxJYhK1yzwhVRHyVpb4zofJSroMYDCXZ5r6fTV2rckjP8DmVnm2WXtV5ecZgSLwDzBG9fZStYZx48PqTm6gMH",
  "key36": "23XQznrW9x8NZsFmQ5aACeyUzipeJgGtdinbYD2nHhRfUmrrwwihb78TnMxANtqhsfsYKbmmpFiYsU1SqDSiffJd",
  "key37": "43GazQ8ANichDD3wLwKdKG13i5Hdo2W3s1nTr8owFBQWiGFqAnPNsuEjFxNs3R6MJveeJbi6aF2KvQZLAWU2iynW",
  "key38": "5SfnU75XNYtnGLr2cPWBTZ9eEi6zeWMhwGjSG8hegvf7k4CvaDE2hrP9xqkuB9b86XftJ8z9kGRo5xWWTnufRoHD",
  "key39": "4W6yUQ7LK477HCR7sgAG5TMbVcEgF6ABJ2wiBWCetAC3rU3fefJXtvdVe6xoNtrM4n3UuT45BdxKyr4qRxUw72oS",
  "key40": "pDF8TSEyqE98Dq4ds3yxt4QvpcuDfsW6GQqFvbzEvcnSLDAA9QCEiHsdNQTMFNdSX8xHxbo5Dtb5YmczoNaaHHK",
  "key41": "61qkA6DrTqJ7DXW3oQzZkQhnueByzTdkQcpYTAp2YfFUx2qmT94HULynfpS6xBRcpWLxbfZ3j249L7sBiYMouHr",
  "key42": "3JShXim4UtWeNyBhkmsivYVQ8gx8zRKdTCSBFHc6JSKmzjM7pKQzW1jeyiaSC9DbHb1STbi8CHTnxa8hiP133xNr",
  "key43": "5LCxig8HZifxt2S8emef7fLDg8RpFVQPJDeFeZwmWxn3moqkcmjBddKJVw6oEjg7nDk2RpcLpGanfgMMYVgHsRQd",
  "key44": "3H47jh5sZ7D9G25qeUXZ2dcesc4ZFnVQAzhgTzz8RHTben44SKbFufUCzvVQyPrBzUqcPSdPMnrZmhYpcYTtjogp",
  "key45": "2j6qV5tJDj5GmEj5NtLeJy9zA3pVL9F5CoM6pVLioaviaxqWGv2EDvAJC7D5wXAmjFd9Z7t8k9LEvniH7qAyd8HH",
  "key46": "3RafD2qr43a4frHW2boGWoJKcx6gaG7ZEWujc9AiDTbFYBXsfE4hWa9JC3ZKtKLHcFKWKSevwbDEhuUpnaFScT3t",
  "key47": "4ZtwDT3tubiYFeeuudnh5ZWohPGWqKFnxRcToWaAt9qPsV9VecufctSk4WYoqQyJhhncfFRdbsuJpViTYG4gkJh9",
  "key48": "34EMfDgkoNb963ER7wSGbuSGRC1XWqp3Lz587jNwjfrDifrKhKHrioDdefthRzH6JSCnLF98rH6cYZXzMJycFCmm"
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
