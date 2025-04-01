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
    "2CrpzzaDGHicWSDHfzK6dRztF6oijt98eVVdcnEWpuYFWdnnnkh1KRuYVYmxZGPB2D2CaBaA69CCtsTVQjpmvxLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VAKFUhNb31NsZkXnM19omBQnGCfvGqdeJmQnfnfkAQQ9syAmHt7pzLkKe6FTnSqVrncG97LXRhBJSJWzRdmiFd1",
  "key1": "3APxEynuofBGqvkbQXiSyshykx5vxsNn8DATU1ugnV964v59yL4uahgNWXhoLLqUAqGnR2tZuXsxA6hJvhr4wzCz",
  "key2": "31wR7EiNpwCYa2SkGgUCWUiAyRxrMiw4uKWMAtyZmtZSmLekeN4ibfU4beuTZitrX6yWNbUgB18B9mJHDvjHeELA",
  "key3": "3KW9wgA5q1bUnCDQfvTK9TE2oDXn1abJL5ke9i2XK1chSuRwXq6P6GzJMAWGGGgcjHcjdDvDk73TMQGbCY9ZCSP",
  "key4": "4xFZduqJnHDGL6uCnpzavTMzqMSvfMTiAhDZZSLgqmXQJkC2WTsw6sQfQcsJxYPSHKXExHivznfigPYLmKm4W3z3",
  "key5": "CRasziEes7vXYWUPSrqxe1RSRuq33DvCzTXiCtZRX3o12QrrGGajqWHtfgXA94EPc1Nb1zixomqsaC1JtDAg31Y",
  "key6": "4iDWGJunrgN2JPozVQgncgoyb2s1wSe732LAM3e5zproPRTJdfHwd5nxxcxC7Z3c5mTHLrBMNgNdgeCKXEi4SxLF",
  "key7": "5cueBZKqCjM7wT5yaUaYVwrFtFQZJFd7yxkchRNDWQKnFcwLrWWnnbRKrCSVU9ejGtMfXMzvrjGBcZxPpjsr6eBn",
  "key8": "3pEe4UkXjsYR5nPHRepBfAQRXsBdfvKiSh1uVGfqyRVU8sdyL8u7uYxMGHyMHYhZbvGybEZKc5fsfR4mMJXkz6PU",
  "key9": "2Vyj99nXRe6UbG9eddQQTVhVHGf4gdRvSy2NJYjUhcq2zstQG1W2A7M9p8iRfCcAaf1wYtu1VALRxUi4Dc2bKH1z",
  "key10": "4Cxf8vBEo7iWiYPrAE45eBfFE8F7u9gptTxcdVTXks773sXyGVhMdwrnf6soxw343pFB1Mc9BapLHJyzXDm5Re49",
  "key11": "5Th6uKQZTHM35qmP64f2vtAt6Ydhf99cvYgfioar2xQETKDLGExsRZmyPGGBhUMjbqxuZa3VPADU3jWsVwHr3WXQ",
  "key12": "22ryduVeXaJBg1oiXXNoVQoXRXPzViaMZyMRL4bvQfyP3hY3ZxwFjLUxjX7SGadQ3qqmxTFrhk8HpwjyReCf3c25",
  "key13": "4RtHQyGwzTK5kx1mZLdtFpa7rqpjdsyw48b6rwKfzgKWnSFHDb7X9fCuJ9h9P7nibU7qn5F33QEBQdB5UHDKa2pB",
  "key14": "341reTHAYeQon88Zdd17kim5pVwtQBTxFjRevYyxXyrDowFWtzYBW8HVGhjvm2soVxAMZCtBagwDZs1TwTnG8vWP",
  "key15": "BxiJmCouTZH7sAwEgrUFh4v1yGs5BLgiQCfgqxKC8PBuCzYdyneFpVr7YZmh6GpHXQAtAh1wSf4ZDGtZ6bwrpKy",
  "key16": "2n17fN4a7SNpT6yU3o17D3pWjAzDxU3fPfmeNdhb4iBicNu3UH3ZvVJ52tw2EuAjt3EEtv7xr2xoKgWMFfBzxVAE",
  "key17": "4puovHb4qT4rkxbmevvs4mcAjyA4oBUmphdvuBp4REoYL8jGLZXFkc2bHGGU6DAG7jdX4o1k7W6QyA61PeH75apc",
  "key18": "Pza38zg7EjxgQW2x8HCew7CiWJKofTXxsmCADgFbhmRmLDKZBqDUdyPUkDD4R86RZmG9fh93vt6r6hp4KreZxii",
  "key19": "2xLkm1YB75g9CbB3oBk92akZmzxqJqjKMgGkZb9aCrVZAFGW4kaMZY3qkYisqAqoKAav9cyX2cNVfasD9AmJGgLY",
  "key20": "2x9vwaYPHz3Q44uYbe8Vv8B6odfdmP6Cua1j5yj8QZ41Tys8MSxxpgbQR4qYJ7Ys9w69MbgveqQQuEfzTf6NUJH3",
  "key21": "2raC27sh3d2KbuVToH8cRoLAoL61GJaATS8GmwY4B6CcmM99zovK5hDgvDE4sPRFTj1DBSquhhThnVegX5KJ56n3",
  "key22": "H9tbcFMncg7hbiGsi7oWt7ocksPFBtKqpkzVso1SnuLf13hXjujqaV3LqtU7eqWBXqZnKUzUbt6ViYVjpEzTk5y",
  "key23": "RLW5JP623zhANCyCGi8vAnQy77chAh8xfZfjokQ4syWog1ZhAZa4npkshxwgv2i3P21viFN2DATbc9UBaM1Z7RS",
  "key24": "2HTHZLiAztV54bsc63U8D1HHYJvSaU9u2BcaU2uy51QAv1oFhuft433JEgte19aTQpirQs3wjAEVDkvARnNKoZN1",
  "key25": "6kfeYmxHFCAb6S6YpdYJi7RssNGRAxqnBxQqDHGKpTvixEei7WAeEed21JWKuqU8T9FPhT6Lrs9oqpXNew7RCaQ",
  "key26": "V9wdsheu9tem5sCheEWYGgVrJkYPLNZFTGK79VhMR62czY36Ym4JeD44f5A13AGoLCancwm9Pu1Nyk2s49teg5P",
  "key27": "3SN76PV59eRyoJopgr2fNgdbqskP3mTYroqLGMDiDZWegJaUNkhWoLKpGGCHwVrpyNNbCw5HVRsm8ycXVLWm8oVw",
  "key28": "5iXt6Y6e8b2Em4CdMeCVfNBTYh1j236wqi87TS73Bnojp8V1UzcufJUVXG8R1T3V7f7sGUWGamxS7QKgwsHoAuTX",
  "key29": "5JnySvoyremmvqQ1WXzrThoKpSCtLp1rQKrYrCH4AGLVtNWND5Rvbq3X45Vor5JXuXjScG88cpQA9wrEDYv2K1Lh",
  "key30": "33bKgc5zAe8mCKs6QKXnUXvVRegXbmzQXLKzYJKvaCctBH4EHxnrquk5mjarDh7jhaT2u2CbNHJuVu4tsK8iFtsA",
  "key31": "3STVMed7XhCzwZpQN6b6rjzvVvaQXMKfBeUV99D3LpGzSgwAtTF6p3g7Qc1ykh1TsnfG335iqjJWjHj3S9JNdVdY",
  "key32": "3aV1P7v5H73gtLctP3GNsQfxmhz6qfWpbajixrRn8mE4nQTqsTKuM2RGx65VFAD7gk41u2JDSsGZyh7ApVkEaA5i",
  "key33": "3dih3WfNPuCXJkt7ZioHWALa5bDzBQGqHX8vQ8ccixdguySF1jaUcSNHCfwfR8q9amXzBxZQ6kHkXmXaR8FJztsb",
  "key34": "62vqVuyKqNunFdRzuiBkJgJZUquuJXZkq8YjzcYfe7Tsy1e6tXDmwjUrhbZB83bEZyS2Xq5Bhb2vz7a7xnXQYsFP",
  "key35": "3yfp8WAEHSzrmUp75A1LpLHy2GKyYfnXstdDaJViT83pCa4bexZQiHMntv69jSkeCNDBt4FwcLKGSeF8fC3XA2Xc",
  "key36": "3DT9JTJU7corKHoccJnmevBr3dyediyqS2qan7CJMUxT3RKYwfL5v5mZkMfEXzWXdLicy98w4639SfrmT9pXGayo",
  "key37": "KDyMqsxiUfDNpDxwSqtm3JHJ5L5yzCBamkc8NFZZeBfQxK9aivbithWqhy1zRou3Y3bExdLynTwYusksoVEoa9i",
  "key38": "4JC6gk5xwhpkHLLkRM75YYuJzLV3pFfgWZrPJoTEfuCqCYh8Rmvb6Pshu3d6Lv2mX7qA8GNtZA5U7nvuY2v6yBpW",
  "key39": "4HRw7nZsmjpHUVhMJTKwvUezW7yoSjGmQoTZTMjxGqahLxCa8VzPCdZrrR2T7eHwxBRTBwsbQgi2B6oUwkp2u28C",
  "key40": "2L3yQvVVx2PoqFuKwxsjpEDXgxQxYybRy73V3QT1fdPR5yMVJ452EuZmSJiq6xjkfPXSgKNcBRLvwH7Ghq6gQ2NS",
  "key41": "4WU57W4GKtoFiiZSsKe3Ge1naWVFCgc8hxyGCA4tFxpSREbxYTzLDA9h3osTNBDrQXkh7pDrKdLgjbQcTTRyMAp7",
  "key42": "2iuo3DfFes4LTP9EEALJQrfS6K2qwiCAiAapMUDjMk93TZyhSs6V3invfzvGzNNzi1KMzv19Y3TcHPZYEuHN3rRW",
  "key43": "5ThPWrQ3dfWe6RzaRXHsfic4MaHM7f38PJJx6At1hDFeRQD4JVa9a2H8KTLjaSmHrSbdDfvSR3abYuQnyMSCzoqA",
  "key44": "3hRXSxzoAGZtmj4FMMHeQmZ8xBZEip6epUPv7xFT3pTpttvnYhWZQsmRSCoNFZvCbFPJRyxANXSL4kuJH1MfD9NH",
  "key45": "3hu2KfhcT73eCXQmdTdJAXLRjyPAW59hCpVLvN4hnpvvpqyq3P89FXhr18w36txNFZvRj8m4jgzanG43PnAQKt5s",
  "key46": "5uRcq5WSpYewecTDDCcAQVn8y1fXZDemVRc1zvL17XFPQnm1rWUHCbiNRYywsdQsfQbA8JvrWqwG3bHh6CdQRM3Y",
  "key47": "2EBhxo8D1iGB6d1Bd8RE3oornKH97DVFyYj6vJXsfMvGTDariVfh7JcSn1qcteUqmCQAgnaJMnXCPRUAPrcAQsy8",
  "key48": "3makyHMHheTciCyjPoReWZo2JXtBpqeAk15dEq6VKmoQ73NEDaGKAM6qjGEescLFCbPksDBUvxEWUnSHFn2FdbPL",
  "key49": "2hM6DSB1z3mt8F8pnLeMxi37D6yXQCHXUwU1BdM77fWPMsnyq14gq4Qg77cJoHGJPHW7Jgh9BEFTzjPBaP82wFRT"
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
