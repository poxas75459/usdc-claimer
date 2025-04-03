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
    "2Q5LSUavtNGURLGHyQzMYR8ixfAswPGjutYtTznCGkLrNfsEsUmPCgbQhu9Y4P5awi2Wd1fV4WptsLmjWuHRgtW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jBfhzDuBb93DDGxgfKCu6Px37o8gCq27NJfiKUFkHk1ZjzxXZQGJgboSokNmjQ39opacRzxmeDS98PiGrVhKf7y",
  "key1": "5iBXPAGxzUuwX6J1CzRiKczk2AbWm3b2PWQwhhTzKq3kEg7hCAAYHBKGfNnjtHLDxceteorxRB4iM7TVToWnpwom",
  "key2": "4Bgk62ACoCNoBpQgFEQNsbSRVXzXYPtRK3KabC7FTQGaFCaJsccfUeAVsM9dMVj1mFnKcUaU7uoJTvMGWeFTDG4a",
  "key3": "38mbbEvPBU4BdKBCWZ5FUP3eXkerVdU3JCf8zn8nRVS5F5GkgRXA74f1dWqSQcLptUnk6FtAUEWqtu5gNGZEw8ji",
  "key4": "3o5X46JZ1Ytym3Yqg39gxa2KDkqS3N52JSCAM6Kxe7G4tKYuF7yfLckdFtwAyV8XE8CtuMoRR11C6rjcB7ueHStz",
  "key5": "5vM6nQMG39aisc7YhiFUWckruVtmGEfABax6ZCCL6fRh2S4fT3BL6nvJEZVa3u8ZTf7W3MEh5PfQcHajGvvL192Y",
  "key6": "a2idDs65meFxH4i9LZ6BCuM8sF55EpBnzUPmZQTxX4Mxc2bQVH9a8X7UkqcjnqmAjMdQHrrVCLma9kocF5Yi9A8",
  "key7": "66KU8HSVxfFw4fJNhsr1ZN93tFTRf4CfiygwfB4BawcP4rSYtss5zstJpvKY7oYBTmVVS8MNhocodXUV8Kwrit6f",
  "key8": "4YCLT1kCEUEe6rhA3njyWgXg5dEn1NngcZax9GD2pmQGkA7Dioh4UVJq4zeCM4QDZZA68gUjptJB1ed95dfs4xvM",
  "key9": "58P87LkBwFdt47twwQ2rfQkyHmZcvQ5VATBAhuSP3absVrRiM668yFkYNhTEXt5Yxm626DbgshFGMZfvyfPaGvRB",
  "key10": "3vtPdV3cHVtikQESr6w5uXidWQMjwNFwuMiGgn68jkwXiXXsVvENCHmxtm1Sv8u89uwUb8UuLt6JbUoR77cRa3fJ",
  "key11": "3w2ftySzgh6iSLc8WYQB9TjyXg1TmqyTWcqHo2CfSNYDN2sTcW7LEeq2otqdAsgFpnamupERL8wVCjCc5WBMLajW",
  "key12": "46NvvyPpFMt8WpWWxg387mtpBFa9N4on3Nh7coDhVbKTgQjewXpyEP23qwMWofjkQ8Su3CB4mbPs7zptrKLoWSP1",
  "key13": "3bk3wvMDLw4HoZwpHWhEvbSo8wRVCfsqWCSnNMzhafdTfcANGNKzufP8rStvYh7gjB3rob5jKnsHo6APHiK6D3SK",
  "key14": "2m3ZgB7aU9kEWmm24AZxiAiv1K5r8HqwX1negdaHhmB9GbxLf1yb9C4jxSf5kPNGsm74WpZjZY3SpXmUwvRCVEuH",
  "key15": "5C7LKXwyRsChhAdYmX81P6Pq1DSKUmMwh3yPfcz5gBHVG6cezaJL4vjALnPQTs2KtAGMzq3wVphin8mh25fPjuce",
  "key16": "5WryKvBwc12JX2mTcxEE6G8CxAU8upfL47Z5vr1L5nTZ4oygTiSDSrqcCU1rGMUjPx7aECtMGB4GteWGoybfYYjW",
  "key17": "4BGZgeD3eZCyvL8rRx3X918CeuGpF3Wc6mBAcTo4eVkxE1CGT9hBfxbstLgYnuVNScUPfbW2ThySXsuzryuEQMg8",
  "key18": "5cqj45pWPndLZQs3hkuw7js6HZh3hnqt9N6KMHQwD6wZoLqSRwo1px87XAVT9F7WyHZa4GJkQ6AM3fgaSNsnbJsX",
  "key19": "3WmXd7dgkkrW3Phsi5FtLbuipVhi4wDWVj2CGUTKBaAKqhqvLvcWeFKFpcYzuZcrKUyFM7hahahJh9hgawZKa48V",
  "key20": "5PtDvkuUgdvPCiM5tzqswFMi58EwYqtRSV9CjsM76qioTL2y7nzHLWNBdyJqw4h3yMEYPF9k592hVB5yYBjPX8zA",
  "key21": "zcHzVBCkks1vQgBrmiERXNifT1dphUyAWdRfUKHz2SAwXYFRyyNfwQuqM7KKpZj5K8o1a1Pcw3EGARLwUsr95ov",
  "key22": "3LX6c5cLm3j6mrDi1bVDdMFuxQuFdjHYuJWQHUAEHwdbrkvNcEFro33m3sm2atnSan1N2mQvsr4J46SwbG1E95TE",
  "key23": "3z69RX1DLFswaiGYUVLfCiCodmftVrpxrQiJsKXBmCWXAo4SAH3VQGDzThTdXY2qqAU7FtPJFnGudBvzvegHZsgA",
  "key24": "4fv8C87sdqY2zfbKKUc66XAdhdH21QnyNGtnWmXhUw8cdbVfdCBLBvffkBiEEd6AhpcCftEPFjLh8AvfcVWXVNjv",
  "key25": "4dFeujsTbE5oLtB731R7SdS7pVUstwgeZXCjkbcvcJKfhXWihCvfK1njQ5VxhBWKHS7xv5ThvkjmRaG2Vyh4EDtb",
  "key26": "5VoSHZYAp6b6uoFq2mPTEhuXxwqXs9wQyEhSLcjNJmupweLbB8euiKJasBiKkX6tBKhcWh9CPE7pNqKz3uRvWnXL",
  "key27": "4ExHzqLqP4NDj1iRPNsaNDXSU1XwtySzVtqDPTTKii9z7dKzD8ugZ8ipNJDFf971XhgWz3e9vGFTQN9zTWoxKEVh",
  "key28": "4waTmLorGmbNh2Xv9vktK69P7dEW7PxejedTyA2WBeCKWFnHkrx2Qr4kAstN7pix93HHFWsedoMXbrUaVEQ9zAv5",
  "key29": "3tCDStNHaTemykMGZMfqGEyFPGB8WSoVEMonYHNASoqajXxGMHTcKodpL9KzFnz6xXJBtbeTj4ucehXdaDVZSpMZ",
  "key30": "rBxfPFN1AQue9CCcLCfiNAVuQSUhbZEEvEx5VaVpoy9PGhs6VMVFsaRWsSHD812KxTr7gxWiHDik3CZujRTnx6B",
  "key31": "4BvqUVLgMiic8WAabaqPsF6bHRbG9JhcW5nctEf7anyFjpLV6HL1m5iG6Zcn8BSYVmSxMmUKrPfks5RUumGRzwKK",
  "key32": "Q6EDcnNT6J2WYeuVnJGMJi9KMCXTZwfpTZGmTForNvaWCXsiVeaet71Zt9QsQBoix6VvLBygT4GFeLMcJVk6MQj",
  "key33": "2Np5JHBfi8mPykp7s9BnLF6i96mKTY1EjfZb9Z7uHgvnLfbatWx8RXzLVWvVWxL4jbkJbJNZjAQ18y3SnAN6EjGh",
  "key34": "3PWp2GcPuQyAHaWjE6BWxh3zLhypT14e41o6buvRphSj62gnzAUVqU3gpAx4g8f6M2boxq9vMH6VVQMuc3JVJ2wr",
  "key35": "33SHBrRv1k2RnUtosSWdteTayiECtfdjEKLWTkuo1LgUQMEk6vyJQFpqGRtiT7n9p1C83PcWd3kL7wYoEsZPyk3J",
  "key36": "GDLjZLS9uEEDwTsXeMCVF5JYwjsdfSVKWvkhf6kLFkvojCoiNsb365yGnNDWfaiYbdm9f4Nrpyt5gU1hsUZANk4",
  "key37": "2rFSzt6rYg6CEJAvmzhMu4HYtg9caSvDDJxSh14qiXPtPGDZDK3zucUBZxaKP2Yk2keWPkydrYfMLpx6NeGj2pAM",
  "key38": "5x5iJZwk7y57knWcf2QZ9RDnx7cgektu6n2hWemd5QsUUMtFonVowcUFo5UEtqVkSSCWJzcvSH9TpH7WAa2ZPPhf",
  "key39": "4tXcfyNBHDf6x3v8DqzQZ2ZWE6KMezyzrkTvo3soohGzADB7AQ8Y4xavAHYahWQLUrGK7Tun2EzkHnYqBhe2BmL6",
  "key40": "dXeERiEYvECAKGdQueJqsatS6q1aZhwbwCqXEL5xrzXY4NjhC2WXooqjPXHNMBukc4Wt7fp2fgNFeWC4UtK3ZZG",
  "key41": "2Snvg5JKXmn4ncPGm9BGDJeqV778DZ1PPoTsV9fahH6aAwD7BjR745cKuBoXT16gQ8biCEp8UArFyoW5Kot4C29n",
  "key42": "4Usw1ZTcd99vnJLS61dZusbfBs9oQUYemRwCsNjjeLpMj3ag1WBTmJUFDNLzthtGXEf7YitUwJ4LzGN8L3B92U9g",
  "key43": "3RG7xRi3kzV2X6JWiBf87sr7ns7vuFyZqh3eenmKuq7gv9TBqhc1ZBiaqY87uGhs19w5URB9XBmtJ5mVv9T9eNa8",
  "key44": "26KtqeNe4M5WDWRYmupRqgsNif8fiUq8WRKvDa2dFAc5fZ516wHva54MDFahy28cA94X3d5pXDTZEJmsb65t3iDS",
  "key45": "4s7xVagD2ezMuHKi5ZNSg4KB9j42yooovj17WQA55GyUfZxT7AcpBX4U2pnbMVtN718MMU5EwzDLEySQWnCw9tMm",
  "key46": "36hVpJk6ZecyJ4H6K2cmBorEtBgR7m6726oG6neEbeiZpCW8EnJGe9oeNnTav4UahFii7memcqbP8PF3qN8o7ft5"
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
