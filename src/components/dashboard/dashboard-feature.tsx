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
    "5kqQertpGmcQavVYS5asPLuGvJNFLwofSvUjYxwrGJ5WyYEBovpjqUstRdDAgwRT6xFWnWJMF6MrWVKrbdfZgKxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "akQuE6HrY21S7mxcV17iUuzwUZZMF9dT3MZC5kRQYeqpa2ZCChEeu4AKiaZthMYsfwVQmoiLZ6HZkm2N7pJ6WW8",
  "key1": "3hLawmudvQsQ6cs7Q4Bev5EiguQKheNoA9ryP2LcW386pF7SFs99UQDBZrJQQVfyuV2q8rJd3yE7Z3X4LaUwUuzy",
  "key2": "2aLXgKpALBc1cmCzqNFbdXj5dNVtVookEgGCDmuCBhi6Xz12yS473vM8VWUynZmAT36jiD2H5HMNrqAEYVWYopjU",
  "key3": "2FF9pHRD7q86evKpiN3bByYNum7fWcqm4uWtApchPrLnz5yuwL8pKMxyrv3kLDHGSRuR63rME1JLXNxFsqBtdWz3",
  "key4": "2mnsoxaFYwk5z8TJyHvCYvmsqDN3rZbGapUxA3scNkJcjGrCHWJNo8rsLxq1rQw8vk5HbUtzxHeyhkfjsBERGTGp",
  "key5": "49SkF7DxzVW5fyQfMw3usZ8Z4iFhSGjYs4ey3SR8HxwxvxA2dp33fFWpTmJdb6XE9edpWCM8TbRMz4TBc6FLriqZ",
  "key6": "2uRbn1cgPaHoJiQnbuKvCjK9yh1sJNiZimf9KKqRHYb4zN8VePtm7Aq8wSuxrRYUBh29wXHuZsYXArNbKPTKVLHF",
  "key7": "furq9UnhuUG5JYLBryeyanEiRvaNUkDX4SduBFY62HcC4uDpSgtWiuTRDW79zYiTMqjZyRUoT8s986y8pUhTdtH",
  "key8": "2JCu585qcNhJKT2j6Dz4gByfoywAoAhSQ44vxtTW8uAzQja2JBth6BywCDWfWoHhQZoBX8UEEHQEoAqNDMZRdd8C",
  "key9": "5syuW5eurPUz7f9oErwiaqwYr329QjAnS3RUCwYHDtCC64BDEzMNESgupbTHhMDpUgKrzLPyJZXkqB1zTd4zKnj6",
  "key10": "4ZMnEdm4QbAzJb6LUAyQryMDxzTuvxbZro8j7A6h866Mge4hP54DjokJTHjqe29CCsqspWx6D4NMKUAGJgLqZQMn",
  "key11": "5XwjoksTscjbhf7br4krLPQWeBTMLWqmdK9f5eVwJ7uU3SY3kWu4GmorfzjoTA6EWkRUzs3HZS5dsqYFyJKeqsn4",
  "key12": "yhu63t1Zau2TpqkPnphqdKfAKPLyQPNdAN4jB6xAsdUbGKzCAG4MkkbeFBt2gzm5xCY9y3Gbs8UaaaDisyh5edS",
  "key13": "6vkz5FYFvqXH6V96yzrAmsoaBHb2ugnXAQTGZYfRiGX34et59LWCKuXXonMCVSuSAe9qnGpbEN9iYSe38jpHwnL",
  "key14": "3fvHy86zJe7eSTnMB6eddAnQZKZ4TwMUTvXAmY8EVRsrtbVxWUYd6zKAftdsmE6mY7jWbPY6TGFpjLMdktT6ybq7",
  "key15": "2yXQsdnxQwXCPEwmutn3UUGriBMq4gWpU5Z1MYNNUyVoU7XSNKRHgsv4qB293yAiH7KTDXzWJH4h7sbEZgksFhhW",
  "key16": "3ycucBaihGC9AaNi7xDkvwv5YrxeZ71b35Em2iNeiXWTv7xSDzJ7iCWu5969QecB1zFHX6j7rKd3LNGw5oETDzDw",
  "key17": "36LaQjdUsMMwoodU5Qe1Z5rjwPKj1CepuA1rJfStb8ikYniLHUjUdWzkt1FuVWAKdnfMxuNpwkBgGzJX8eeWkGQg",
  "key18": "3Y1G3bqpDf89sACKrxCFiFhkfKJp4kjtBNNHB9MkwrQYdSuqdqZ7MNAYXvbHq6x3oXgiDEoSDmSRTb8hgXxc4XVW",
  "key19": "5RSAAknogHQwYKv2ZgE6QV9JSsVGMDjaH1aT6JEUredPKMSt9Sazzid5PPX8sZUGSjHvQ5oC9FJarq9dzXpy9SqT",
  "key20": "2ujEypsnbMJuMFiBL5wfVmUufb1Dj3jwyZ3yq8D2dADqnchjZdpf3FCfbYUVCS6Ur4YdHRTifzbHTn1qo9586JTq",
  "key21": "2gU1fs3NxgeNuJ4BEgZsrPZvCLs2Di3yvHCP7ShTvjREonQkhrHm2yDkg5tRK4A11bQTy92atDMmPUox8arhfJ2L",
  "key22": "4sGRGBkKzVPtupRgbxR99Us3wyTKGS8Dd8LgQwWyAf52A6BfNy1yaj6bxLe17UwARYARk2FdZLyvq1PzBtSvyAx7",
  "key23": "4etWyfGCWzmWeHZGSAqY8cMxtw141HaWkvtzXz6N6EpEHevGV3fGr9mnwaZH91tzJecBUQftVkCiY7RDdhTuombv",
  "key24": "27i648sJ9cf5SnKu28kMCdZqKHJgqkjXQ1JniSdfUixkXP3YZ2sdhLuaa7jUjenhA6dey1FGc5HuYJNSVu6S8rj5",
  "key25": "q5Xr1z2pReJ1gxGwEkaRCeFHW7BibHxb9ZSpuLphGtjVKsMy6MtkzdgCHKgbauQ6GxTkLwPkQPCLB76wmsJSSuW",
  "key26": "3BKrWvpDaQnWsnCGT6hX2iV81SM1EqUgVsm13Pa6jJowjgMiCJs5NSi9qzzQZKqvtXeqfZko3KiiY1HYXTYxqFeU",
  "key27": "2L1DnRMWxhKrVzu4dDeoHh8WT4JD3prUUf2jztLEkBqr142q7tsJYVFSuUDmSjpPU2x5PggsW5erZ1SAn3Adb7oi",
  "key28": "3x2mNB6iadN6J9AEAbosxrfm1pHbXmhZ2XmH1ExkcYit6V1CTuUMBrafFQ59WZyBtnSsGyG6JW81fs38EFJkjd1i",
  "key29": "64G2zFWsgsCdeodrzU5otFc9L2Vouajzk6oaRXg3HHtUaND5a4tQSJ1U8g4iPjpd9ZGmJEmHGmN52e8gTAsnoqwC",
  "key30": "4bEzfYwAFHGJDs33sH8qYj6u8QWxG2LHg9wZ7CLwedoKqPvKVdejb4haZCU2EpYrF533gHMtAuVRapMB1PL3GTrG",
  "key31": "22pbFBL78UvMig8mYa9LXoFgsfUB6NZM17XFeQeKqVkSLDf3g82a4zZmMp9cmn76ZLtzapTa7CAxH6SnXRjW87ys",
  "key32": "3FxKUYqPHVncoV1BruiQzuFAF9i5qAXTuquUiVRb3gxemDFTiehASiJwFQGLNb5wTgBhbhYc5nxTwb2syTH6JQpy",
  "key33": "82yN8jWT7EnUeS8oPG6imickQKQxuBQDKgZPpSR1NXAYsiMfXYcJBSmZmwrwRYMPREVC3hKSkQRhg1QqBnsuLo2",
  "key34": "41U9Y8bwtCJzJn9oSFtMgFbN17edUqHzwdVqsvvL7gM644CP3PpSGb3J67KVXbXHQFSNCsN5ddtxLic17hAZNA7a",
  "key35": "5acxe3yj3NdX1iUWZXW1zRMRCvEtvAHmEGfJGsxwd825n93YHvyJ1r8bAkbzrsRFeAQdRjtNFwf4QwBYK62J6tZE",
  "key36": "4YV3Y3iHzccfM8rw4QftT9Wr3BQgqpu7tCNQVots3QH2mwgKPvrQTy9UBQwwik2KJyiFYS6X8rsNXSNLo1hkrPVv",
  "key37": "gV7jbTrofiWvPHukSdTwbBVAm6gcrnnB7zZzxwHZGagFZE2L1fE3mzzRjhio5TkvrNeaK6XGupbtv3DSFb2myMU",
  "key38": "4XnUq7xw12qBAB3q8YVWAwjU3biZXFxBhLFLtmX83fJjst9upvF5AMqRFFtqUNhtZe6dkUt9VSqwkFNyBAVfHT63",
  "key39": "7WXn5KSTRjb2LAAMJz2b8nRVXXh16q62Q5gTZyhJwXrL2PrJB5DmEuzpdErRK9CpjUiqxUXzGAbZMrwHG95wSVn",
  "key40": "CK9cohFRWTemXV7RakNFFYHk42oegYvBLjC8rVuZDZyZ8mbWGs1EynkH4D1vn9D8eVnQfoXnZ8LrwHBSStAjdp4",
  "key41": "5SyA381AsTwhvpoBPPTPvHB7AnGQe6eee9TTgycnrUuXmMGmesrtT3NsV4McbQhSXhkNcf3JfREmiw9aNHYqNYED",
  "key42": "nA9R8NxJMEFSaKaHXRE48xWChZtEDSzKZUKHi3kQjmCx4EFnkBsrco5U8iAMY8Zc7N4rFKSaQ2LAGAWW4dJK7Ko",
  "key43": "474j46goaX1V3VnSSm8zVQSqGrXm7PaMqn7ToZo7vGBBmUVJEFiAH7J48B1TJwj5gdzCWMjAg1zM6HiUMf38ijC9",
  "key44": "3V6Gg4bXRYYNAW3o13b1cWHNMMxfZ3GLML4DbiQj4FwpG9W92xoingoNQvTnPAjSA8WJgh8B151tpAUEBmvSPKgS",
  "key45": "4RUHLTCanH9FBWwya4Uj451V4NfaxjBUemQJw8t1oiZQpn38ptnPDqxNP932p2oLT85gWYFTxoJhpMPwZ99LyLjm"
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
