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
    "5WFizuTRbN9t5Db8fecacMFp9kR5LkPJZDfTGhpPUUg1kohpMuziLBL443KZzPxWJ37WDgT2db7yJy96YiJt4bL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JCp3k5oSZQamDnJnZ1kf1WvKt2qLAitwAU9R6AyTW6gKQciDQ5BngEgm3d7pENAx98oasimA6z2Hs7fk1aGoVdX",
  "key1": "3ASAqaYYBjEcB5H1NKzN5PHPUq6KLA7GiLtqgJPoEBTkc8KV7Z5xrKSeMcS6QZRSYT4f2X6rgmPR1y6J8WxQkMY5",
  "key2": "5bZSSSRv7McFDMUEuQJyfYs2EJwLTNKC7vfgnFWPPP5cFo47iG8H71Nkg2uQsfngvSgjPrcua2mK7zDa76XR6uAb",
  "key3": "4KwaQ81Xsm8uKoAT3TfEgUhBpRhjcstJhY9iLGY7KyyFppY3a9Y4qfTMTeVVSNB2ySpXgQWBNurchgxb3umBNDdX",
  "key4": "54g1M3yidZTZnY37boMZ5ptz4K3UcgoagSWFcNbTKBacX6QcF9NAxJRe4AXdKhYpr93cpvcYaFPiWw3DgKneWEjy",
  "key5": "5J2EDEnZi77hWwsyykG4sQfAj6b9JJFCWURqLr2KeQJLpGbPoHmTPZSTqJ6XbyDAXkQ9m8DTcKoGc2Ausm2Wno5K",
  "key6": "4rGm7WvB8275j3syeLAzBYux4ZRgUtTrSzubxSyACt1JethYebXzTKxtCaQUCPd6zhGj42a1zKnUDXVwJJrk66jq",
  "key7": "5uPk821t2PSWTqzhr3nR6FVZNTjv59Noy4HWvid7jVRVsXWkLmrXZtdhCVB9r6y4Xr3SYCQb7MVbgY55XSjcQzGi",
  "key8": "4tUA6vn7xXDfra4quQTfLeh6dSe1fLJxXMkfrrJuc9Uh38XFYQt5d3scxkifMNHcdNHseHLdtZNo5wqFhFvGoSx2",
  "key9": "2cKFtzmkvrfzEXfLj2zXBu96Hv4c7ESiRSqqjxUjvUF7YjzRFzFiJaT2jBBeDCrEWKmkQA7VqXPcJqQaZ3Noo6za",
  "key10": "4t6YhuhmbmVuNsBMxSE7gsiR3fF5Jw4dfxPNgm7evm6o4ZRTHfgg48G9j9km3KRfvWezVTZK5g2dJeqYSqb3E2jY",
  "key11": "HZps9fyLi8zYjzn89xA24x8MYp6bufmC3Y3C768oCChrh8m84fi3Z2JCZ8ZwuAte6yp8wMZz8tvdRJHCBN2gzJP",
  "key12": "89PWBhX1Uf5dzFhPPnQopKfGdjWV4KakJZdDDey9DrgVmrZv9cnZB22GeqQ1qHdcHuYNUrxtPNYNbJGE3MnxzGy",
  "key13": "2tpi6dbX648RgVj22srLwke22vt88dZz8fMBEUZ3B496cgVw2XW91eSjeh33YVeL8tPjdLbQXnoC5ewgT6kmUcuc",
  "key14": "1wcSB76oWnrc5ZUko8ATYzrAnVwpc8UJMWudHULttzxuKFMzGNFpz5Vit1jhUWMTmhKQVhTX3XB7TnA7tQRZcXo",
  "key15": "5FgVexAWVTTYpqUmJtTETvQWbHsdHmnqADmh9iLmHdXtVTDRsvCqf1HNvfyxHA5EV2AzfrJ5JfhHLc4122G9N4jH",
  "key16": "4nCpJH2RQwU6JStgd9dFcifc8Kdx13er6qs861eM2njhhhPP6qTExpPNqSLQxiQLSDMHr4oNBHWF4tFdSvx4bL9D",
  "key17": "352bwBMCgX5PcjR4HFYa6bZ3PcMAbK2mKFTYS1F1sakeBtjwhjkAJx4xgquR1GscC6KNMh1Gk8pkcvFj4iEea3aR",
  "key18": "5Tb6xPrcVxLeqxRKojynmYEzmws31skJVK5yYZzxCkN1xPbCq1ErqHf18UEzPfHoNmVUoD3XKTc15ub4CSbWxYv7",
  "key19": "3J4DQGW6d7kZ12E1hYBDdp7WLoZD6vyzx4LiMD6TMphvxee8WthMm9J8ZXygr64eRKtA6TEHsMvJYutYGFMUi8k6",
  "key20": "2mCnmEsDJAU3k9Ls7ucNdx1zGMFDNRMc5poWxsRpn4uBpFua2PFs62m1H9Xs6KKkCmuCQaqVwt5ZC9YbiaqZnEnv",
  "key21": "3DACLiuPsEbctDw6CKYUubFEHhCnu2tmEsbtwxHkizGmEgUx8hp3mG6EnRbfjjN6oe9MV9LTEzS8ECx79TrxBRCT",
  "key22": "2tRSHAFxWeZTZ2xjeveaU51W5u4QKeDJ1m8J7UUMCPeACXPSQrn9C836Zz2TB7MmyJeEAg5YaGP84J8QfFgPH2h8",
  "key23": "3MAMpURYtAoGqdGYEh3vrknbRDF5ctehsaVJnd3Cvseo1ar8Zn8Hw5ADR6yuMg5RLRrMTYtAjA1x5wjg8w3UwwkL",
  "key24": "34P95TSE7omhwSgFYWuT3euF5BChzaFW6gPqcULdsFBXSEvy7a3ugYGtpK1NjMuyKKxitECk7716xa2hU864rff1",
  "key25": "2ovY7r29gauQTkXcrCyLyZ9VBFra9YHXYdYUSyNNcHSqWvNZJKQLqYukWmhgFCTAwR1DtqjyKzAPUxhYzE7Q5SuC",
  "key26": "3a96m42iydyD8EegTXTHD8PknLCsBGrgiebBusuAb3oReTGTjZLdGkEMN6bvPCQNC7aSAAN2whW3RTq649f64uXf",
  "key27": "4iYJGUMDNGmoQ7eKmXsADjpN38yfkNCFj5m654pkwSAZ8bug4fdbJzbNUS3wcZp58oRLZYjd7zEnqybAaLCPctS8",
  "key28": "kWRd2M2dqQYAminRC6UDyLdjseTn7oMTqcRytxmT8nw31iyysKs5yvr61BEqy3APWqYQhNYVrznhhdb2415pBoe",
  "key29": "3V6EmoHk8xARr27syxULwympxdC3tAH6cgFskjm4wKZLyHgiYRbA2pN62e8wziXJw49o3jnKxnDP3JBxaT1z9SvW",
  "key30": "5wohLx7CQKswqnmfgP1HbtjpLpfS4SVERUaJ4U4nc18FM98pGA75BHqA4K2FwpLHCniiCZydfxFPJGrLe6BTfqJX",
  "key31": "3gobwseviCzHCpMmTgLtut6fFnnDqJpgVMj5vYKUYk4aZd2P7pxS5Af9Hzy8jrhUqk7buLKDNhR1vXCN3KTcaiMg",
  "key32": "5KeqqDcE4oWeBCQ567bN4veafh5vZcEtw9uVcDN2c7mBrhoJdr73K9JhzotPayP7qMKgC2nPBcyBMdWzvq41fZK2",
  "key33": "674whUwmY3Hij5jWNopdKAo5otwqFqjcb1h5FGtPCmhoJrPC6PPUKyhZj8RDeDdfxW4d9HuNP9UjmSyvWXiEuyNR",
  "key34": "Ei5AYQe22U9uQq49KfkKCQ36W2uCPMAM4ADm5qyY5vyaFreiHhSN9FnypVxNGx6yfotBPtnReLmmDZozXGcSMDV",
  "key35": "2UcXhp5RaSsMmkGWHG881vKVe9Q6MbfoZjs9gGoLFb2ZVSXzWqkMQBMtrjdhyz74WkHUzkaa5G2CQTrcmH4N5Uch",
  "key36": "eqhdxga7Avmy3oQfsPg4fjZAhAjbHw5ciB5VLabFQzTBBdYtYyWzWeDd2B8ipNXhUVmasFtp6FixRhqYhPsyX27",
  "key37": "5v4gZ4J6gJa2vNW41TNFccfsGKZPQyuf4UFqsw1JsZWcE6qNzWmx1ULohcyQ9dL9q4yncBBbJpJPr8wqskKfmkJS",
  "key38": "5U4nXDZ7v4F5NbjXPeAjEYUfwdCKhWbzv9zgu2DoMYHxpkMPHJXafMcEYyJSE3RoX38HKofqwnnMgYY1bjYR5rim",
  "key39": "61XYRCoFiZAoWWBZtuBSDbqUuc9FHmFLZLTQQTPjBfnaqUbhAQPguM21iNyR91nt89bUKCostBAhHw1KZTTCWbpS",
  "key40": "5HNBbRC7sEseZBszD29FtPsrJb4piqdDTeEinobzpX1q5tazKMX6xouMpbKeNmveyEpnxFaebsmHDaCghh58iJLK",
  "key41": "2Mwri2CcD74pCFtLNDnjL6gjGgPGskXqUBLWj5pTroQmfnSpT8pQXxErucYhdGABy5aUeFjRWhvYinKb7wj7wVqA",
  "key42": "44rsM9NNATUxCdCJwvdHVoV6t1zxM19iuxuSWtmmfrRocx4Jhdv6TtpxcTqGj5oXu3ywJmgLjjuAV3MWsofJTFSn",
  "key43": "3isd4beo9giCcrnABXQkika6ZMTvTGsg3R5wKyvEJvVKHmP1RtWydN3jjcqNL9CutdKgXFbe5vZxEUTKXvPKNvY4",
  "key44": "ndCsH99dFfRSGBEUvUK9wsfvRWEtzkoecQk8A5ufSPMSGghT7ywVXfBsQmYzKebjgm5bYaXBANwwXDABS3CZKAJ",
  "key45": "3ymTxGF2G1x3ZpMu59fQFeCb2irzoTZZ6jESM5Ac5RrS8tf8ZvrQ3NoihpQnN1D6xK2A1uGACFAx4B48NXNzdC9L",
  "key46": "4SQcXoQZmCaqhBaEbs5DjS9NMHXNFVXYuQdMN1CNxkeABaHMMVjLHJjYF4FVoSmQEXMXqGzkhB45QH7iudxngSoH"
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
