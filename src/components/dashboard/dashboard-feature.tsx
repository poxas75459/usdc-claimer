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
    "iJeLn6aaUgR2KfDLv4DmQzBc1MTT5M4akTZhyhmxQRkLgHNm3G385mw7hdF5S3wDeGnACEwFahg3SEfzL14zQjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kbmXXA1bZjqrrVonMUcqgSeMDBWM4b2CX8puPh6masmhXjqBn1Vw2WAfim9rHv4PQ4MijKKGLXmdXvDD9fAGbbL",
  "key1": "2dsSi7UMQefG2iitfkHqwJC5x1s47JTypi1kaQXwC4APe1HsqerGTyuN1DUadrP8hncaitNboNeSuEfovWyftYhi",
  "key2": "5KJCnKxctNwzBHyqqBcyhRcyiRa8dk2LhCWUCJ13EiARxHq94s9PA935N8NrWkjeXjPKXU4jngcaR7rv4gJ5AuN2",
  "key3": "51pwNNX3h3fLbWEbG8ngT6kuhhXp7TfBv84bHwiVjkAVRWFAS5W3yzoLbe5jUKSTHp3PvK7GfywEz5yBqheegVF3",
  "key4": "3ZEideQ9AcjwXm4q5qa69TEcwZy9F7UoyXUEJdJVUL2WLFLTM7u87QDiuYdZnGMuZZZdeJqAwK2sw2CfTqifVcRr",
  "key5": "3JjBn3wJ3GgVsEwJ4XBohTB8g7kP1LsVnxwie41UewaExABsmDUPpqdowFpx5kS9ExeoroheQKJvdbGwtg27scFb",
  "key6": "GeBppLgVjhxEqqRLPXrARvtNMriwvxyX8rDiUD4UBwtxombXSgTuDFza2mVgg2vZRpDsza5NpGCy7zFd8wRT8dW",
  "key7": "4kak1BFgBfydGtyhBwSFZe7mEco1e95hc2zPGWcX8WRA4LV5Yt3vXNtYXQxAb3F8RcfvZ6Gt9yaUYpo3QbfnPirR",
  "key8": "5NMeXk7PrJzhwYwmvUvZDBtGoUkZim9pkzjL5Pbi53Lyr86aPkyJx1irVX5PfHwKEPdCnsms7WzsRvHzA741Y1TC",
  "key9": "3WGLymB7UesS4UdMycDb7VGEovKbHNRvmt7EE53W4yFttKh2gGBWkLcMKCUrri4DUTTejudGpFMvLCQEuh85Vhgk",
  "key10": "4baSiHPqo3AQFXNKdtsDzvpju2jTW89FuwRFELPvsCPNoE4EbdHdxVxURJZUnJnbvEHBQXwdhcnJLJuH6GME6LJJ",
  "key11": "51E283o9LJpRJiY3Y4YeP1dde2in8pa1v31F8cyduktDvGT3QA5rkUjkhEnAmRbr5HcaBxkmfSZksipZuqs4WDsJ",
  "key12": "4cuGGLwy2QXp3zb5wxqkEAtxpoXkGpXgQAU7C92gouaxktGk8h4NikpmLpc2f3RtV4ifgPJGgo37r5kUBgjUcn4C",
  "key13": "4fgPHot3ivUMfXu3jdS4ZdnxLuRytX1G3upND2pb8N93pkzJt77PWFKFKEfSiC24vKs8oW6mTvrMp12m77y1Z1c8",
  "key14": "8MfPxw4zwk4GbKqAPFEv7fz55KcHrXNkm1petwWQYZALhCHC5akFgni3jyZm5adeRAPjXTtMCBML8C9T6GQ1VmK",
  "key15": "3NwBQgvpJi6oMhnTQShyQobJG396Fqz1ws3qwG5pNhjhapC7UBhK4nbF9PQMeifLF23cebWGXMndmAqLEnx6jjzb",
  "key16": "2gdNWoFGY1zLrknvDVnbRSmhGpfSyryPHJ7jZ2vDqL1FCZPTfftY3j9HcCVd5xahKPBBSVenp3qaKK6Wdvky2fSR",
  "key17": "2dAuzbDszRo8z1ibWdjRk1sYRJGN7ETd5df7AwPnZmNM9ZCUib55bf8keU3kaYjjJxkdiVYJmLGGzZbdY8uUKUM1",
  "key18": "uPE9QrZwo6N1YCCtoDfi516Scs3BPSB2s4rtwbEhWMLbchAzQ55eoWAyhx81J48NAR5ouFgfxAxXF1RfNoqGfqi",
  "key19": "4V45kVrLQ6mignQcwPnx5UbKr85SXpPeszKe61d72Wwa5YYJu11R1aLCYe825y4gTcHgMRNq7G2czTveLEjiKvDm",
  "key20": "5uRKHrdRSWYUNeQDFAnCVAUNQkys6bDscUdQWFzzRbXSBRhS5GM9d6DEomYHg1iDnnr8u9e1enTTi396bYk3cGHZ",
  "key21": "2yPEEjWCWMwmKpxQVXt9bcnmCEpPyD8bJLtp9TmVy4pBr1ozCJ6D6v2eWyGNzUtwTdM1pbCCc4H8x5r4Y42yZL22",
  "key22": "3dys6WapHN1DWqyeFtheoN62ZK6deWLmgSQ3G7iFsoBhrLxS2TjzP1HDyt3JnH1Q3VZzPbu2jdFRgkyoKtDXhjyk",
  "key23": "4msCcEg5PnAf6BeCjfJ3orBmvziFRL4Rhm7Ub2CE1RTZuqzz8p4e3sNNHoR57iTzv8SVvxau6FJgfHUBeUrMhsrj",
  "key24": "2DTzAYQq4bSyjoxEVkM3au9vavZYyzMbLbtb5gM3gkY5uh2EeVNtGsb1uXLRr743Pqr4py8SaPcoKRVXmwYdLUT2",
  "key25": "Bqe2gZxQwujoHmBUYXBjn8Qms6pv8SCRUzdv97XxCjxDfEy9fZVoNV4KVgAK3fCYMGkZc27gCy1G5X4BgiJW85y",
  "key26": "66QnT7DdEgYzg8ruayVGAxLny4gy2xKTiGa31aHWxXhxGMkFFmSYKhrXTzFtGdxYNknjgfwurwuqEJCDgcJqF2uA",
  "key27": "27TJpVEjTMmrPb9d3hceneT4cyZj6465psh2iJ8teEZobHGYmGEMqNcXFyDL5GFJ5oKbrKn4he77c8DeiCXPcqv1",
  "key28": "3vR31vx31UH4ZJoNnRr7xX7uf8NX2VHJNFVnTWm5cynhzKvp9zFApdfAwZvMJgjqnCK1xQEQ5Vuyd5zZxrk9AwmQ",
  "key29": "5CiAzuW19QQ8kVFC4JEKV7X5W7UiMqJQLRQUfh9y1LERdLZDjrQ5bVJaFzRexqEYKsmqXy9Zao4YJiTZFuYkCK9E",
  "key30": "4bpdax1CADJHjMVd58ZQxHQ3HxJWmES1N79mJmnRD4zcRaMMDnMLmfrMWJLycR4b43pFYiRaQCggMb42qSH5Dmxt",
  "key31": "3vsHxf7G7SzTyB7unp8gLXH1Caze6wP9nWhzhhPno3XyhspnNrzZyAQkSfmtpJWJBA7E4HqnurbBKvPZqXwYQpHw",
  "key32": "48PgEwcq2oyEjwbrffDR1i5eDAZn5H9o1yntg9BQnX6258c5qasKTNLEgGzRu5N8tQrft3gsSFhiRuoRCcQiBHdP",
  "key33": "639cfRZghMkQzQ7ABDJpFoUwQH23o4WiVmK3y2c9qpeNDB8GeezL8uj7U3jitXP8HGr31VvsWuBHDFfHrREtc3yv",
  "key34": "46zuVaMv1g1sjcMRtSSHyrJEEWDgBThk4HoBS8KRfbkjFKbPT2ojKU1cfpPM9kHLteYLVeQzYUmK2jpL7LnprYDL",
  "key35": "2R9XAowYbRmfg8vrD9a1aU5yNJx3Cs7HPBmnCXdJdkXqhk9VxTbRZk37fo8rTSvaB7SKrGeqCSJkgmPdiw5pEvPU",
  "key36": "3XubExEu7vAbMGL13nPBAsMCnThSxpnnadN3YSXkHUwf6wGx93m3Nqgik71vDrvvabZcQJXgjiexcVxrhjJrW6mC",
  "key37": "5pcFaNvUyLSEdvw5PF6uvwZG4LBDKfAWrz6ewtC48jJoLLcdHVPoFLBSA9xyjT7ns6b4vzP5ZKnhpL5FPGR2TrWH",
  "key38": "3i3jMUQL97sLcs6njhcx5RLshrjcCQoDZybZSCM6bBPCBPbrfweLW7Y2zB2mSEUuPdQDvqJhifonaGvNzFTYdXtj"
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
