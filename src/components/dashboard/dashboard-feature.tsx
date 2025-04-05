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
    "3zoZWTKY4ts5KhTEw78QpVsZdf1WmBmgKXC7SquMFbQwkANRQGQeJjSSjTtpQRo9tJtYsgHdkKv7JLyrhkxDbTdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "225NXAqixDR1nntBX5yQgE4R81rC8aPCcSYaEkBVaZT5h5nfP3vHuRxv3yucPcniNNHXw7dbPNSoADJiGnujSiN2",
  "key1": "41NVBMvPELcGeK3Ga9HhAYDMsJuXBAfUF2GBmpmuNnQMzrcBG2H3KGSemZtUvxAeMKEtmKYyNwQYbRP5scFHAj5S",
  "key2": "4KFnxB3mLUE7t2q9zP3QPBRTCpq8jguU66HDYLGeN5JLFVEdA81nZ3UryHjSSCzNcVBFLfxnyZTBPiAscu7fxKLR",
  "key3": "3UgbYi44xtRKorP7FAUm1Yanmsmx65uWqmHHnBSBaBEFSm8k5yr2AqEzhoUkunXTTA7zabMbTJSceSTFcjg1Kve9",
  "key4": "SkyNds7PNDF2HU8ZCcZd1YASdSfAas3XaPFbvAn18JZaGsxcoqVfJrbtJFpFq2AyAmqPhqvpt8mwWpHCEw2Ef4s",
  "key5": "4KSnaiduWNiYR9c4cRF7PfwwkA83RwXypDKRKKuJv9knXueBaqzJpKy2QPfE7dWTudp8UJb4pW8h8URn8BTmGiwf",
  "key6": "39BFT5uUmyRUUigoxvBifApUkayQo2qEZfhZ1Uf4ckhqCm8AUeRBM3mYmvNxqNVTk3VNtF8jwBoot2kpWGfnjNuR",
  "key7": "eoKkmj14wqXjqK17PTn834fTSKf4eTLX2iXw9dmVyu3zKKkBhDf218EoBt97okK1341tc6FjYH1xEoLUumuoGKY",
  "key8": "4af3mEXjrQRm8JErBVjTbjsh6Pd8PxzATX3PXDuUQT9xirUQCCQBDL5seghdc6TwA3moe18wBWGL1TSWhzjv3YXy",
  "key9": "NZKyDw8L494CSpkYm9gvB3a14D94rSBuN4nP9FJ8eoUKQTpZ6inWqfKi6WoajPojimsswEbJQebPLiqmTz4eujn",
  "key10": "4H4Je6i8t3VWEUDKdkPHhTU6HMCGYoRpUPeBrMJJGK3AQDJGPcwT7LRzNyaMGyNHawViei1ydvV4qW2BXLAK3Vyf",
  "key11": "2gHMeAs5Uyj96Z8UrSDaE3jD5QQKSVKB7ozhocB6e66MpPxSWr9BVPvpZj9kACtX15bpcVp9N6A82q8GXMRqTpkT",
  "key12": "YymN6e1NihgCBd73cr4qGYEqTRdrzkaAi7ZPPAXgrciofbdM6Ua5iPZwUXte3g3rb2Gb8upVcKyQyfFfRUpFmnJ",
  "key13": "5TCzd3zEnBwPrx3TeLTsne8xY9LvqnhwnJUhVdqzyXbfhY6JjtNz1mvcDx8jdAjYGmZ4mCqkKAJD8poygVH6y46q",
  "key14": "5ezrfuHZkxtshPYhpjb1C4qEBQ9bsxe79fU7AyDpbTmhhkHi9PUV4CB7o8tdmevGyZ7wFqHgfVH4GmC9qzMYzZgk",
  "key15": "4fbTbyicMtqZzXmBviqyjuG4pts2FgT6wUEBXDLXZ6DAzMqDKYjzogruqC75rkUPvBpZ8AKSqjg7NXkMmc5jTiqR",
  "key16": "32oKRh57n4nGwbbZCKTra7g49uK4yUEetCFGRZHyeQGzafqxETkYrK2kdQBYFF4cQRQAHkAtSphfTNmeHRzGVRj3",
  "key17": "5NWZVnegEfwu3cu9snmCN34iWoSE6FfSDkojpsrZpSYLeCC6ucJikCYkpjLzbMgfcLQw4guqsd5CasVQaTnMSQ3p",
  "key18": "VBmZ1XrDbuTy1gXmRWGeVnJoraygCfUMckhDXSkMNLEvTDhZc9EwMBS8qYjyQjJFiSY74PM7BVZ7rkevbNBXkeG",
  "key19": "3c49CAanJY2NTfb4x6hbYKLqdB9TL6fcZAZFcDHraVf34pUEJZMGhCEz39sADNRnrx896sY2QuFK43TDDaUz974r",
  "key20": "48yJD3Tfz13QJYjbRJReDNgen6acPUQhq7tTv9TTPcNY9FUjfT58bpPQFog8mdSLYGe3ZErG5UxyjTpgbN73jS2F",
  "key21": "5sHC6X4ZNwovyK9fPTv8amrKfu2N5KUipRmv1QwT4WxhvWFPhTdiPTHFeieeusgPpg6BLVpppR1eZznNPvY6K3wz",
  "key22": "5eh5BVAuVdzZQnq4nuE1Hmmr8PpNxwuYwGwX8UrEKqgYSGceXYLKtx7gsGHRiFTHJ5pESYHvwAuAmAA9NkKrUHYx",
  "key23": "GGBnoCuvtXK54D6T7pP8pccJmNQsKYf3j6GxNBTX1AWUBrLszZk8G7XymqayFMsRCFXjvYDTE9vnFF5RQLAzQqw",
  "key24": "oTuwL8vfTXG7EofUkn7w9WZ7dKdvWf7ddaRLTobRTXeHTe83b1QAKsWr3vmUNqjFdBcJtTbBez2MoV6caJDeyNV",
  "key25": "5fEiEHSeMNwQJMMpSnNTxjcoMPxUrjJom8em5x9KhTy7fiu9fF6Xi3dspPZtGnoojr2orYLECBGAhqCGV23U7wu9",
  "key26": "4Jhgi27SF5aQpTiZnnppmWCTdyeCSYK54Co5gYQwp2u8yDTq3YQ2ArzC61HyyrsH4EkpG3KURZYpdRJsZh5RH3jC",
  "key27": "35aDgZGzyNagufceaP3hmG4qnCPDzNAAEGw3EY2pYm8zYeLserNHG91eGaiPejgbfrpyZdkaCnnNZmbc7qoKKoeP",
  "key28": "2mhgpJLDAf8ttSoNN7EySidSrEQ2myq18E8XimcQyDf8cVU2AFbgEzY8JVKPC4jw4fGVtquQsJ86Ecimnu9nJnp7",
  "key29": "5p1VCC8mtxQNS9UeY1JogcdQSkAKUTKU49xa9xVVcPp8BiMZgmQtiJ7ct4dMdMkm4hpChPgNUPZYnbLeqku87mVZ",
  "key30": "4PVdg5ACHHyBvhHDzJFhQGwyegwWrgQAC6UpQ15uqZB6jgMariuEvXZbxX96b6RDtfhkQQUQFp2XMhXiq9DSLgUw",
  "key31": "4WW7Dx9TfFdktJw6Uvvh3VLo8zXndxonfwDZNdAmhKNwbRrBATvX1JiQuP9evrwh8oQPtQ6nkZRsmATWPvk38yFy",
  "key32": "55quMw9bCatE9pdFnawxXFckw6ijNLEfYUzEPK9KAe6B9NGq1ExZ2L8AHUind4zvZT2EkXv1buJ9NWVLaiJD5mqe",
  "key33": "4ujVX2YCfkYpQQ1xfuDqBxQFjBsCZx1QcgD7wsMBxdTdNTxZhzbQtfGgLh15Q4HGSrt8F5JU3YQv9WnXCpApdJb8",
  "key34": "mw421jES84mQXhveowKRv5wANn1Qs7CRYDJTXW6rF66kiTS7cYahu7YxqKF3nspCJwnBda9rFMwkrahaxcVtvKg",
  "key35": "4xK9iKGQ3QFYPFgZKJWhnUBpRDuvbtVxAbPrPq5ckhwue8yLGkQHckKyh3oE15VeQxAEAiNSihAfqvJa9rUJJ42T",
  "key36": "3wz1GdypdAWYmoz5ymzPB9N3UrmSKXzDDorfP5nZrYNZZk7L3Azo1oyj23GUaCb3qjigysXcfvZQVKoZqv663bTw",
  "key37": "42ErjVcLyCxh3BbJRRtD1S4qmvjoHGkFqJamGJjYewpqhKGvivV9TJBrMXHMunnwMw7WaWMom9ePRQqa8TeAB4SX",
  "key38": "3mKkj2haAJwom2rWgyzGS29vnPAutZx3j7L3z1usHVQp8zGEtrrgjGcR4fCo2T8TCmjuLn1reeSWhchDgu4EcTpz"
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
