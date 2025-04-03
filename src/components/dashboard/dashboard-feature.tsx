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
    "3R5HaJ955jRX6AakDzbWUNZwQxxdpNW1t1FV3o3J8sPfJ8wbQuqZMFZwjpd1ST5Lv2v6sjRscDUkPNVMcdJbuQkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYn628Sq3aDMBmo24EJ9vyEaWymkvR9LSHtwswHkUNKYCzgWuDMBYWzVPYDRAiCBTh6sq2L2LbVsLKqJKhEXAuV",
  "key1": "4uYguDqzKT1gf6Xgiznh9xVwP9oQnyhf7wHm9Pknn84GtHH9pnZa9eSjUXDCQ36ZzrFwrTfFNqPwqATrZcAmqESM",
  "key2": "5F9YfAXGaHeeUuSvrRCAfC5CyeDjcJP1bDzAQTZNNu1Fsyq28ZtfNooYCZbLcmeP8j2S6k9dGj3bozVavy7K5TC3",
  "key3": "61rnatRXJRCQT1EXcLXZx1gJjJrjUmHHb6UQUYMUcCo9ZtoZDRfBAqkT9bVEVssvkevqtyddjFDb5kZPoMUR9NjH",
  "key4": "29f26LArb9Y9jWezGRG585gZbfW2m1jzJd6HaW2SrUYpfxeEdgb6SvpQHoCW7nicK3gfpJ4cf7KE3kiu9Z1TVMyH",
  "key5": "AvrwmD2VCwSDeP8B8YyzXCLxnZVJbSYsHcKePtzPXD3o6QKMp1WEoeeehoQuiH2s2gFG3JcHuyEwFU11FCQqiY2",
  "key6": "463D5U8AL9queYNhDribovrbb9X9CvSBWbH4c8LeE3QA5zvvVyWHraSGu1Np5qp8oRAooHFRi7LktzmwVuK3jhgP",
  "key7": "2vkprA3UvR5BQCprT3XYXnGyTU7XYoNMh118QWx6EsSyCm8P9tLsGoyaGWFRAJM7CGaMUgxzNP8vURqy1jJakgBh",
  "key8": "48cAqZfjRkZg2UxucrEbMH3xw11WGqMzKzMhSYQrUzWeUsAvKofd7uQuPyNZ8F8mN4H727uJx7u35dvvhMRd9ASX",
  "key9": "3uiwhoS32FWSH1Zwa5LcHmgUwveqgYL3uembWCCXLQH49MY3K26aD4v6xJJP1ioDU26hGJJS2yKEqNYTd2KivtAF",
  "key10": "3i7qgStGZ4PJdTRiFGm3BQwucEqJnXdNsJE1DutFVS7gQTLzuWwmcN1NjYP5fhe8yV3H8RPzpQwWeXBxj1SG3bCm",
  "key11": "5bNAAzZKTgAES3bTiSmntCcQGMp1fbUepEWSrxpZZx1H6U8pLNAFaP3kX63VQHGntKZJVr54t3cuyevVm1H4AbBE",
  "key12": "4v8Red7mbkNiqZ8Noo8eAQjv2SfdS3ZEc1Y4oNHW1phW7RV111mUANe2VLcVbUphDJAxQDBfsYna4YAZ6uRtWnPr",
  "key13": "46ACcYPBZjThx9ShUmaZaEzFDS4vSJKTFgnKvUM5MvXE4eweEGkPBuc44NqqLa4JQF9jYVZHKHJF3YXbVQmgFNFf",
  "key14": "3invUASKciyJy5yfLtgmiXRtXpnYDTxrFbi7FJdDjBLC5PZfNMbMCm6mQUwBjpp5HVcLaM6F2YQh8p25qVYKpTpH",
  "key15": "fca6ZPWSmVYiJkVQh5cC5stbJ4bmeG1a5nJzsJsz2W8zPbt25JhVG873DR4k7SsCHm6KaTX6CHZ2iEMTEmHDKFN",
  "key16": "4JFDLY5H6twYroY986ntvZvWVCn62Dw8HZ6q9qWgGPjZfbRaytFLCJw8iRbnX2PFbwoSy4EziABw3z6AD3xAj4CF",
  "key17": "jo4rtqCENf69f9XHF2GsTbW1ZaQNCWRf5KnpAFKJ4bbVgjBFEwsc2TrUei3bzZfTjGNeALwV4LbVwEbxX3B2TND",
  "key18": "hBbuqFaL8qrQ5iCN3f7PU7JaoYW8nYJA1DruwhTwrofVS4iHgatS5q3jaq5m19wPALN45ZKowLeYkQNJViJktHW",
  "key19": "CLkWi1eGBjsjJeiJqVtAfCxMQeR1kUwyuG2Zhvs2t21o6t4XW4Vbng3bzEuJP3fKyfXc2QXB6XWh9wYSvtfGujH",
  "key20": "2g3wZwT4rNxefrXXJrLvhgGcsp6Wo7Wa6QeiEz7QCdSBshDJsVkCPy6aZnHsCZLyS4yp75RwcYSDKymVvRZVhYyx",
  "key21": "4VMNNE4VD6CbsHwhKZQ4t8ywwkHmk2ZuGxCkVifXM6KTu3t3WsBmeUqALugxamujAgCzP9BbVT4uSXer2bBjmW5m",
  "key22": "HK7rTqJ9AALLe3EiDS7YS9x3tX8dEwyUbZncStqFZLVFitQceUduNWaeBYAdzr86AKnbVibgT44ttZmMU8Hk5QE",
  "key23": "34rqF8Ceymqh2bBY3JCBpuA44UrZ4Va9cLr9kHpDg3VL4zWZtgepGDKjJrRDBGjMjmSm8rXKvunUzLYFQ1ksNjEN",
  "key24": "425dJXAnThdmcKBH9ivQMA2RRb7gG6zfhi7DW75HhbJt3gXQQtspeRwFLVAhU9xqbjp4CLEvzfomhCzQsTUuHXyC",
  "key25": "4CST9pnbkHqETLYxzUMyqbsxpawPiCXZcRbQYk3QVeQLHAvhaFcsQitVEYunob25z9TWHbT9fJox9sxFwaGJoDuA",
  "key26": "2r1PrPL86o1FcGg5yafQRDXxm2CXzagTu7BVUCbgWAiNEcNqh5QkyHFqTQfug1tNdrmB6gpmn3UaE5C9Qidi4yAM",
  "key27": "4r1Zh4jbgepZsgYJoznAbUnxCnaK7UCmdN4v8Km7qofPs56AQmZvfVzX7NcYqPqz6WoCRE7x2VCz6w3XwmY1vBcP",
  "key28": "5Yds1CGXRiVKCCCcidTcSJL6wtLzMYWTR5XXsJk1hE483z5HDmUPwdnzwSsVouWyisjWtj46Ze3JkFmX6iZRQhNX",
  "key29": "2Ff8vquWqN3WJELDpDuY4QGf2Q2BTTqfvY4b57WmbrZnidCHgs2cQWsF3CaBqe8TK2MJUqoRBLH32vyq8meyVVQu",
  "key30": "5w9hXwKMwokaznSMyoCmNEXUQJ8KhhaQSUhyXomSyE4JzBBf6k7aDAnHMi4WJ9kVg3EhgXVz2xcuE2vnCYSPVGhS",
  "key31": "3txghV9R2ke2gs2WhHuYLjjK98ZqTdhnJCkEZLNc2LdfPBQv44rBtbnCJXyuAsngY1Y8CQi77CUa47GM6UcDdZ6B",
  "key32": "341Y6fiXNPoYM2RVF3aPZKVZJK4ALkb4ZktWjjvbJMDyQU57TwV5umhpnxjPnqB7FBtf9PpnaKd1tHDBAxu8sQmu",
  "key33": "bYVc8acWTDfDfNixiecoAhKM4MruGXAtow7D3cAq9ysRkEDbARhUVvYxjuknpxzRwdFwV2dJDdtbHBywpavZ1Nd",
  "key34": "51nbMBHiwKvz5V7b3KMqxSzAdcMJcsrCsYUNScKpER5soBuahdZiGXWM8pxxH5U63GfhVioCv5TBhq44wbMYWM9E",
  "key35": "5LU33EUcEPwWoKdhnTvma8jBMnmChQE1Tzdx1t5L3xGS4ET9iCqCtFUaYRe6HA1BfXvvG3Mm1zfUinrzsowRRmTq",
  "key36": "Ni8GTkpVumiuCwaiPqniJzhke3L6UcBoSzytQTUWhpntG3M8t2w9rqXPPLiWj6R81v7wGLsMmJEfDxQd4YtwVf4",
  "key37": "5mm7RxxsJFsWZGjtBuHoaGRwPFS1aPfBjCzr4YhcL8cp8iUb6mFHhhd5RcMQLkaYnJBAvVSLyVWXcUwVjetn7o7V",
  "key38": "26x7Cpb81UGhTpoiRrboFGXi3mo3HcRDNxEpFCyapzB9iEFCjjekc6dJgXhd3kew8Kh6tua3N45DJTEwdTDX79TX",
  "key39": "4rfgL4di9vQqWunLrfpC7KQfSZHhPnTVhsT4XDWnPPBYRJLgZLkeDtRCvv2Tz8aUe7Rn36pujARSp34dqFPocvnL",
  "key40": "3p2tKpQUnWqVRecYUrawCsvV9NLmLs3udX1NXvMTBVJrvXEHXUAxQsGGrd1mZaiCDeH3gpvUvmHbXmyxG4pzCa1P",
  "key41": "4Bx39PTwkxVtjK1t2vvTuQmf5WDCs68Ypoqv9yWpyPHZkc27ZymdNu4mKWgVpopp4pAiHnn5mdVkJ6padDFRAbh3",
  "key42": "WhKum7337PPNaVX4zj4Paw9UCF8sq86WswNfXixXnxHzp6Repdjh29zPQ6YWew8UNacPDR8MfWCa78dwhuPUCh1",
  "key43": "2cEjXBHTeTyj3H8kXGkysLLpbPDsrPTxaNpnj4ncLCpjxNG24wHbDHLdngbLP6ESkJ8TMw63Eb7Eeg71JmPSPsp7",
  "key44": "3br7vBtsSfD3GeTm9BuS3XVxwah1Q5wB1b4GNKYhPsgwV9aXnRSf7Lm6zmbtEJ9dPDkWbH3ERSgGgVC5V92oZCm9",
  "key45": "38bn49rzn813Hgj3TVaYRAB3s8Rtuncq5MWZRFyyLUyergpDHGz2d9FbMRLQnkvsaXvW1phzT8EvXPwnzGoAjqJV",
  "key46": "tEFJbkLGSjxMnVR753PsrKXHZT315tu3D8hTVHiJocSyqXQwiFRVv4YoqEorfkYsMn5CouXZiYE4Y7kNVXNUZbZ",
  "key47": "3YHzUK9aLUh4JDAVLePEJ1Fq5mMUy7q381zqb4DGCaQs9GTVG1nGS9GBoKPkr2tZfqXSHjstM68PRnSyxYvVhDhU",
  "key48": "35beS2FLVvbsHnRn3u6KP3FcNu1MirtfVnT829JHTf2P7knpsCWhU5LYS98YwAq19Ri7S6655i6GNhzvX643Lj7r",
  "key49": "3VD7z3U4SJ8AE2ZRVSfJ5uFsszsbkwmLgADACipKQVd9NPiQfs7sKtQdrirLjcGJyRJP6DkQCRhRp2LGqkFDm3cY"
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
