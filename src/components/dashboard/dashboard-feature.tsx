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
    "3vpAVb2KskTsEz1s8Zp3J133juAM1ttc8NAtJnoYW4maUQYAe3v1eB9eiMeC4y78GWxov4MozHhvqZcZL5RkjDEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9D4NzCnpp8RDgFxwxao9SNKz5Pbqbi6Ydj6T872SmWpHffyReRLnFhGtiqvHfqBk9x5jhLRBfD5usDpihMSfcYC",
  "key1": "5DiCq9B285eHSKWQYAm9aKbRC7fiTgVp94m2ENaaeZiQSUmENTLydVs92QMNxmsn5iVBmurtBd9LZc9M2bTyk9fL",
  "key2": "5S4ndfdwJZWYWuXtdYeAZqew9hgWNujKdzGW4SkTH2XR2Ue7QhPP684bn74QQCPhgxJ9p7wK67gsNYgTgfCMhyPu",
  "key3": "4RDXbRAqVYa8Gp4qyNBRiK8sRWhm2qVGgdaVZFkiXdDY1rGkdTvjE77u8s2MYZGDwDgWhKvue7Abt4dBHdujp9ph",
  "key4": "3NBcDqdX8zT6JzqvM6XoN1RoK243PAtoemsUZh2cdXjMiPy54vrZdSKHQnzfoCuSaSQMLYTEFhtJRPcnJgtoyMxf",
  "key5": "591TjFdwFnNUVqPL9r2KBJVLVY5uCncmf81vtiZr22Dv5McLuiwwi7mT9eycSEJZ4hqj96f9PEhSVkRdhB67xhAT",
  "key6": "5dTRu7c3486Bcxf28s7pzhUdaPWAxQTHiFd37Pg2fswYr9FTFNzw4gL7sfDVaaGpqG1LiLm4m4M8ndtfHzqmvHzQ",
  "key7": "4hhU9ayMcKyobJVkgcTyjauiRMcySro4cJCtHcuBibBGv7kb1t5wfLoGa9zgLuobVKCssDZcQmFXWuQZnuqH2FYA",
  "key8": "2LLutZfsdARpdjQkpzVcda2pxZevu7Vsa7QeqS2GjTGHb61iuBttNkUHB144VMngJHj2o3oaJnYdcy4yx2neVfAC",
  "key9": "3mDHcoxTLsQRTiPuRLwwA5LEfKRjC9cNM3DTZ3q1qbUdJQ4FaZ4MbmgWGGZGDLf76VVxiFunWFxxyebvqeLQBUT4",
  "key10": "qLWvPXfxys1uUD3PhoPak7CaEeh5E2RkPNgkeqKdATwKGfrjj7JhMoiBXWd8ccUL3DfLk6pzcFuZcHhASH5ZhPA",
  "key11": "4RykoQhTqDAdfs9E7VVjxz94XSTi7tUfuQDK8TL8MbkwU5PvpexBbjwGeNP7PHLyqsnGhCDvpQtsc9J1Y5eKWdqe",
  "key12": "4EGqArxDzTXuiF31guLZWE6A9aqLbFg7Ycc6M5xxV4ABFysy6bL33uRbmUgoUZBhBiHWMrBqcii1qWkq468StWcp",
  "key13": "AaawVsJfQnrJe8EPVPApTwfqzgbaxZUJLMNcLPMaYdzFUWXceVUDwoddu5ts7AjiwhPyXrSnNEz9CpR3vndEZpi",
  "key14": "67qRr82bjSuNEcx1iEKnYyKjgLxPfVYB1ar8zZSjZS7h44C9qAustoWqV96UfMmuBCo6pxmB1zcxL2cKWVVM5Spd",
  "key15": "2jgPWiY3eFLinwyGNFbgLBAwM6LVcbZ2QM9NFNHSYms5cR6WVZergZ4GVUAtah8EuSNCyRVmf67nSfEDesRWgD4P",
  "key16": "5kAmbCkpGeKYdxhq5sZqqdXMh3T2JiaFkHueF5uzS4ESeqdmYhV3nnm29xUPNR12qyve9dmt7Rwu1ctjwg2VwiET",
  "key17": "2kxjxVRn5qoVa4VP5pRxSFsgbjaeJVwcKH9KtdpEMkzLCRvR28dS46SaDUYAhnEmW2roZP7ppXYEs2YSy3u2z2tu",
  "key18": "56Sv7kLSfKK6nR2NHJA1qHbzM7g2LPieBurUZRP4ErKPaRJ59SRfR4WcW5EPSJC3nR2UNosb9khaR1AVJwPf5SWj",
  "key19": "3VbXisudhN3zZR3SXENLQ1QmPLgSWoHHFsVZAKAALx8kQwwh5ywLqM5n4UZSGzC8i1kpH5SaRUQde8tmbnQuDByE",
  "key20": "4LbtVLoG4WLRe36jtAP5TqwzemX86VMBGS9h6eyaQvLieBCYzYAhfwtKhH9v8qMWrsq2w2jNrxA9icyvr4y1WRbz",
  "key21": "2sxjnzrafhoAiwF5dgR8CZ1FbSj8bssefEu8DHRfHgxRU3md4hvpeqd7iWV98czuJ5rm9zfNnaSXBcz5N5HqK5eK",
  "key22": "4zKaXcQktTGs5a3HEyQH4V47GHMam6tLfrgwoDawATa5HECNXewoiaMtLsTmb9W4tQDfzqQ6Mrhry96g14MytAGK",
  "key23": "2ARwuLLqPdwpg7v6hPoo2ydK1ak6rwLmU6idvR8p7HdSDGTU2iyqDETYoeFpP7v5ANDNTEGnj18bQqVNN7JRh8Je",
  "key24": "HZLfyD9WkeUeLCnHrAiuTB4SXb3LQ4hy2DM5WA7BnTKtYBP9hu9745E4L4KZ9gtQF8gCGr7gp3zVDRkoKfLTng1",
  "key25": "2RXgAdTM33fFx3LTRHUu98NnDTjBNtHFLUYBpAHFg86YNN6k2ts1LAqL74caWZiEuqNBTUtUyKUfX44E3TvyZnp2",
  "key26": "3B17Kcs7WfZUqhwW65D3kQtZok22RDbJMHxsXnQhreSUp6KmA8dpTwGT2iYzSWSQfQw2zJrFT7DPhFokSWkhNCrE",
  "key27": "3YgiJWgo9KkpayeqFbHT2btYwFo9cRTCSpjKRhiivyv7hDAH8sH5XoHaUq2CLd8odx2oqDLm1Ciy35zohygvVCqE",
  "key28": "348imfrLv9nbcsjp6HedceezLYBa8JUNz7CjHhxWWRaFtJkxhCbcyA9WKsZazCq7te1rMd83m23ddMohk9Z4kQoh",
  "key29": "29ZuFq2tdRK6pL3hPxvyeZdpWZVmYNd5XeWJZwFhycxFrSkPcwMy8T5v1nmSKphEaxDPmHebYLvtVUrk7GF5q5eA",
  "key30": "4jhVZbw4eryfSC7ksUmmYsGRcokasTPCxngnUpLkEY1s7yf8ZwuVDXvG3NLBhYGE3SXVReSj8fR5BBWSHVZ4K8zC",
  "key31": "4bz3UBYFi6RPSYgYYpNksomFebbuqoRD9VkUPAEuGcKXR1DqJRCmoacYbeGYSqk6Y2Lk8a5UTkDgANVqemMPW5iP",
  "key32": "8FyjCSSyAnoiCrTfoa87LdMRojv42jdvuLHLguZE3waXZpjoqGUVf2p8FvGnmgqU5abDzD9F5P79KdqEDnp1TjK",
  "key33": "3VvSCxKD9TGFLcKJMZAZ5KBr6eWEQgKLirpfLivQqdZCMiUeeCLeaJx487D5q9dSTQFNm5UzEmB6ZmKNLEz2FJtv",
  "key34": "4PJDvBfHS6qBEAw4YGPYJYEYcMrY2Xg3aUw4iZG2hhY6PCrGPzuRv3xaafi5gLbrns89o15zLe1YtNuYXinUF2Fs",
  "key35": "5UEzrmnGTARCzyMqkXwpm8SLhjBdDitjKvKD6nbPRPSZkmn4DV1VV7okRqaANS5n66uR5krwPa74ZeDa28nFyKxa",
  "key36": "5rCZhFKivaks9XjjgBFysvSrAVgEqGrx6mbDRbNLzP3wZWCJZWberHKmV52BWnTy2Tkhdmjuk7NuAhvWoqdJfV3k",
  "key37": "2uABS79uWtVXzpaSXT8GnDBWmk5GZBhG7V48J3wmPFzGH7pXyavzFEhTWaNUHct2VczfnZASugdsK6Y2qkg5YbjS"
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
