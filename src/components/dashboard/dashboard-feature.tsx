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
    "3FVWQqW28xFkYuZSu1fd6emNbiXRdiGpxPCP3Qyfv2DzCupiGWqNTXAD8Lv145CNU6Ji7v71sV24HvkNXi2F9NQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWXmKvfhH9KATfTt2QqZ8brmtm2fgGfGkXQoUVLBDsRvfJfDGgAtJnwSALXSzmHfX3fjvy7Xd3hwpMjqimfakWg",
  "key1": "4cCDWzSmGBfw5qaQEGuDcxTZ6hnyPa9pJ4AW5LH4shCyakYf4e4ScVV7P5JvJJ59qMUVfowifQaa1jbh84oiWaFn",
  "key2": "4n42xy565ApCjnMB6vFTFhAdTqPgZxFWDD4ehm6yh4V8QxVHJXHtmocKrftv9p2gi84vrdKumMUns5xAXJA1fLp1",
  "key3": "5ZSXbSYZRWVFhvwWNHqGLyxGwcLAefJA47WLPkMNp3kfpnZuYVBMSmhVjEPrJjfn2au9JT7vVQE65rSSMDBYe8wq",
  "key4": "28CB6U8rVtpish2zjMZASAzWW9fwyDxgQg7a8Ktb8FaDcZUcdCPX8G1wgfcXbTwSUZcNViuhTAfsaEqPiutkHsSb",
  "key5": "UB8bm3QLevCTL6iQzbahzQ5xXFdRk8zQvKYQAUEjCvQPJezHfJoogvWNgRES2muHAt6M7aZ1YyWaKn1dgG25Zgm",
  "key6": "QyUaExceMzn3Dic9P92gC2teXEumgJckhCAsTwihT3qWgPtEDnE5LvQNjBBkFw3eefsnhbzUdyEH7sFqq2c3icS",
  "key7": "5LadZ2UiCT8XWhkitGRS1cYnkRrQaFmnei2ziw8kA4Uo6hdfWeYXcajPj5RDWZhijosyDsBYfwfiNcrqyXEGewQa",
  "key8": "411qhbfxUUd9UXP9aKGUgLYWHH5h8PJCK9k5FBo5Aw75cENt3TjUmed2wfnUwgpQ4ttT4mVLnMp5yqzXGkk11J8D",
  "key9": "4KtSB4xHgHHJtHd4P8GMPsegY4jTR9sjdmRYjp2AkcKjnKQa5N1PKKBUmJpBjhqZzQqqG7PJYJ7PiyvWoaFngVhb",
  "key10": "4AuURfa8ZHUAXaTdrLyP3qSQktqjRTxkyuaHj7iitC4D8pGXj8WgGAkaE6ivHyJivDqGtP21AsNi6y1bQJLFTRf2",
  "key11": "3cJLSU2aXBqkCo78DYBC7Bkq9qN5zKMZRWBcGKCq7r8eZ79aDEhT77NH5uAtbsUFa4D2QKn9cEhzh8yonbSY4jnG",
  "key12": "4JokoFPvWTnn176oWWdJ15FohyxoLHDNxzDHhfrU45icHMaAbAGTWraNRbEiSUHAaT1s28ycR6uuAV32agqoGkLw",
  "key13": "SHZJGPTDVoTSBhjz3aodZt82fMhiyQ8Rnq6wfotNDfeTLwHe6bfAx7BVEm44Ne2e8ESK9Ndk9XqSk2oe8NyKocK",
  "key14": "5DZ7SFsg99e4jvdVB5kFrtUCjBqWm62cUYtKJYCk2JiASkweGkEvG4arN5xyQWE3km7Ae5E7XM8RnqkdASsqaFdf",
  "key15": "2F8SKzPQoe9gLKEFSe1AJsAjBet9ii2u1pJ36CFcp5Fkg6ktZcC9wNbKN5buBMi5aBDpa5roTtq8MiSE4wTnncGu",
  "key16": "45oQde3bkT8BJVykY1CvW1ciVvcysLmCbJmeJnCuaHcgmYrosdaY1hocopUA7mpGZ3XGUTHGwR1rAcuZugX1VwFR",
  "key17": "3QZPq6ziQyqZjzjqoGre7Z8LAnzgoSwdbKJAc2HijezD4cXFgP4sjp81N5cehUyi6BgQoaMVT3mPccX1bfe5tBtP",
  "key18": "3k4JX4fcF8mWAdtjSZYoD3UqShtLWNmJX8mQGdXwuABMPbCtuBkHD9XXr9SwPJ2NiDodGR3G1UvSXJCjrQjtmA6B",
  "key19": "Cw3fTWAkMxiqcp7Wi4XbxMNLiuT76PyJhp3e82cXPUx1asmvbu28xmR8oyqg3tnoov53JopAtp4mEvjoXcKcWXv",
  "key20": "3PBdTH4tZZH4w8mJ2DghLVF4YzfJCYuSyRvVEXSoecGrPH4MJfiXv38W1x1BJYguv33V6VcwnPym23wjqstHC9Es",
  "key21": "2zzzthr9KJ19AHkzbXHpTZJkLpJz42fDoZeHpEj2cqX6uDEVkCLtHoCs2zMUVrxAiWZxbgERwBKGeMYKvEeWcnmG",
  "key22": "3UsGyokagcK3pFsNxv9EVkw1rNSiXR9yiykru6Hjwj4kKse89EhWdG9aXZynCJmmso5dpRcNr4sd1VN5ccutAbZr",
  "key23": "3XYdb2Aa8nyojopZ48dSWdjfjfHtnE26EVWWCBopEtq5c2uxiq1ZcfUvyKpfbqECQn31Zz6QfLVxzNjTvNtPtmne",
  "key24": "2JfZsP8iTestqEzgQDD2jox96yjz2Wr2ysG1Tb2Xv16dgferiCR9bbgzorUC54rLg4wBD9KRo2XF1WWv6jb5K7ZV",
  "key25": "4C4CLGQvQCk5rJhTCn4mtLAzbDdguTjcRz9CqpBTVncc3R8BZYFfRotDqBGpNu6Sew83bndNxhZGu8sLg9NaiM4x",
  "key26": "4LeR6egSAxxqewo6sgfpPuwsguRUkQGWP1KHrxcdG3B4t6EJB7ET77wgdQVN8AYPf4q2AmenKNrPd8LtV6i4rpxZ",
  "key27": "2w5wxotyamEN1ywET9farwvcfBjp4nRKz93SegH7cap36rTbvD5HekoeL75owwy6A84c8494UdQAiEXDaiv6hKd3",
  "key28": "2Gzr41ZtbpHcGB8BLqrheGXFGrTjh2pJYYryjKa9Dp5GWrSNt4GW6PXbMpsZQYbqzmUJjvCMDyVcMSK5kq4b7u98",
  "key29": "GzCDm2YDR4odVRTvVx4X8h5Zr6UEgPnWSRo38uXKQERfUbjHHkMz75XskHYCsNHunqwqr5BBddZH4uHD2zaf6nx",
  "key30": "2jLzTrqznXrSiGE2MvEoe1LN4B5LMVR6gDdUzJJQ5eVJ6f61YM4iCfMxru9jgtLwq2WBrtN8fCSGt4wfsJcm3J7Y",
  "key31": "22toDYaz5MSbCcNSDG2sqUGX85QRKpm2Q4S8hZp8pQtVCVuxdN7RLyoEhYUAYW2vXBYGnw5VLVyEgm2ZjwWSQSup",
  "key32": "TNbN1Wg7L5fhbV8B6Nf4X7Je1PHVgiPoA1p5ZdMiVTNgEefANe232zmf7sVv23AgH29rfcxnBGEeFdGkpEr9ohN",
  "key33": "4GUXNYKb9K2QGXF5fiJrUSQM1Vjh33oLmwFBRfNrEk8Z871u9vHuGfQeq3HJZi2GeCyX1XUAk5j15KxTUxDuRjs6",
  "key34": "3bVXwVcprzbioq4kBAdC3CxBoiUBidZmHqGMsr37HhUiThhn5P8wv8MKB9JugGACHsxQ4HgrPXDiobARbdxzuwJ4",
  "key35": "2VLTJFPrvb1GBKmGmGBAc2WSgHSizQNzYDzEtVjGeppLNWM3bAbFJaraCgXD6SzMhKKwtTJv8LqLeJgM2Dv6YP1w",
  "key36": "5YmJRofNaDoK77zokTCJJPxKmBb5cFDL6pGj5Q9vx4GK1N2uies58skQNxWxJuoy31hYrFb3inA3W4LK2CwjRCWJ",
  "key37": "ZQ3hCs7GKLe52KfrRWDjR9NqWHUCm4XtduRFi96eHxx9d5fYFjFjy2YyZdLJHyLtM62okGpJxVfNvJsfc4M9aiy",
  "key38": "X4h8pDZLuiS41L57CCDd9YJ5uET4qwZ8os1h9UyvmoSQTn348Mqbj9TRHj9s6Lgg5o4iQSqDEEL8WUKFB3c1JYC",
  "key39": "D3egUufeGGHo2h6usYoDAyisE5PgzupiQ9FNoRq1GGj2gwoTbiepbsL9evGiFKnLvXWQLfuSCJNGVATyhAJnbcS",
  "key40": "3W5ifvUQNUCAeCZQPVgUXzCDvNcZJXFFUvifx3pbQqFtNj9n5tKdYoQGTFqD1SmMB51wuGmWCVyFqdDkHCn9mQf6",
  "key41": "CC4u5qPEeTc5RjiuzwtSYJLJ5XmVEiews4eUK6qCEKAe32isPTWjYXu7ooZ4R5UaC8CNzE3TF8LXqVh92DoRBsG",
  "key42": "4CbdujLt2igBbwyrpAD84AmLQNcukD1oRsDGKLxGmEjDqvoxsDpgp59y4oXgs2Ssiagf9LGN7QgKasFMSFf2qhg1",
  "key43": "4EtuSazABf19KuEJovWUQ7c1HHD2Xw9FQrk52KgHLAmCTfYeCptWkGBCy8CcCAPVxT7fvXs1BcWi1fW3kpq3Hroh",
  "key44": "5Y95yvepsmEVpVjSJRiykCqQagPZiyJ5qGTwGQzB2ViGZiFdY6hn77epXiGrQxmRKDNw4dkYKcm9BAnzGpdrJtiG",
  "key45": "2QcueSuzd7jeyt7oH8p4MZeToDMQEAADuShcJTBD2iH6KypA8B5L6JiEsFwS9yjVp1YqJAehA2ZZkMxx48k2QnEN",
  "key46": "58Em2vXnxYFk6V6Bs7YjtUi65YiQgbjpLhYAyhXMMJKziHsg4zXsxdJQULHMVyKAnyg3iKuZ1cd8H5vPF67bz3s",
  "key47": "2msHmpFwDsohwysF4RyKhDxko3qNn9mpiXNmYcZVTVrHCGjNwdBML1NYgZkYd5N6jTieeMhjfAwyce5eyGqZ9DQe",
  "key48": "3sxAChbxUH6KqwWcGsWP58CjcEZU7GdSwUabDR5gF6xj1YYTwPVLAUizVE64sHY1gMcYCvkJEp4EaFDryXk1ERMz",
  "key49": "4pPMQqMTPM6qZtParzpB5aE5zoEQinaMUfvooteBCHA7nPQf5AaxpfKhqoiaWHiah95miCQeFdWYWJ2SaKV37hVK"
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
