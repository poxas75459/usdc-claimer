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
    "3wauajnwQ3ZzLbwKg2pCy9G9dnZffBTNwns1swZrfKNtHqZaKEKjpG7VMo9CJDfs4VXUR6j73oucjHb5oLguD2WZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GhG8ccncKx2uHR8dGKLhbxNU7mnXiF4kH9C27i85ehm8ALUtMSLhiVFD9hVD4aFX5vTBCmymXdSWYrs1Qi8QWx2",
  "key1": "45jYCue57rmYThhUgXHxMw6s9aGfgJDPWTUNr3CXtAQRMSUFZJWidRsmHWVuu5c67qJing3mYUSyysJMjDKo8VV",
  "key2": "4tFXZWRrZgUYp375oAzmM13YfPx9BAt4K1BZZMP47qhG4dhAN1ThBswE5qiW7N1HDfpVqwPFjpsFW2QqnxpvNohq",
  "key3": "62a3XiMzHoexSAPY3c8JUWny8mf6mT1vSBD37tDVeZzDh9Z7TddGbMExegTmpx7LVd4bssh3nGLSk5xGYwf377Ph",
  "key4": "3QXRfmKcu2nJby1PtrjnqwZHMHxzgf8VczaA8zYwQyejW4mYbHL97WGp41DRm8vuEB8Msc1gJQBRgznrPdetLXrV",
  "key5": "3pkeBYWtTw4ytwLWHHoezjvF1yp58K3PjQwMnPR6WKCBgGZ6SVf8Av9zKMRDzMQd4mnvQtLbkMxoeoxdjckJdRWT",
  "key6": "2ke37QPUYDVGCnGBx2pvEa3HMDzXrYrtDFUPvhaJWhJz5ModG2kkKVZK2vQbpQh95fuf6FAxovVHCh3pNZgtaMKN",
  "key7": "2CPUmNaoTSAby8aB5upvBkkhJvMfecafHVKaGYMdV8PcciEBhbD6jUuFLvowBLYk1gbQEahC9hR3Es1Qa61jee7b",
  "key8": "2i4XGzMgCcYfK8iPS9sehWQzCR9AkRqhZwFYgovkWtbjU3iYFQwRtUqQgZcVZykSb43bJZbWtUUL4z9goYV3SEVZ",
  "key9": "4iAb4Z9Pb2RorcEV6o9mq36puiFskj5MWkbmuWM76rm1qyGUqHBTD7FwR9pBnLhKmFLLYgw7DsxfbFEkacswpzT3",
  "key10": "4JdYDVN9LaonBYNXiX5TpGd8jrt7rw9xmTJtUgsQD4t8p6ii2qPwP3kqXWp8awwSm1jsEGrmidhNtTDxqqzWpMNp",
  "key11": "3nSNxRzEjGWiXuGrcC84mY8aHvF113EUpTWdDEC7qC9Gm3eBGZfTy5KekRjTGyevdXsVt8vNRbqsuvX4zbmbuHrk",
  "key12": "5u4VmkzoDyV7U1MJMFtJYDBhf5KemUUy19VxXA6C12dUeizUuiWfuMpRJAdzie5ZbSj2abnvvRbvLKCjBedKmWfj",
  "key13": "2NYqdYsGESAHLv3EjuUWuKXqCvnv6Bfm6Gcs7GxMUUEzwpD952ZubbUvLB18foPgxm8PpRW1WXyU9DA6pCik4GQs",
  "key14": "63e88K8PqKKSrYRzy5mXJGZp61bLKL5mnuxFYUj9E2TV3PBDvf9pi1Y93fLaMr2vWsB2kycXkZL8PRTV1cU19MMY",
  "key15": "4YMP7KQ5gaqC7ebLH4vHPyhJBRu374WGfTNAanT27zVqEUdv5pRo7KbLvC45UdvFnmXcmWvF3yN3RGzcwZHPisf",
  "key16": "2eNUt1aQCeUpDSsANE14FpcnNGwjN846VNW23qjRoHMVVFWLt3FjPsU2ThGu9L4L9QRowfoTJnLNwLUgdHcforLE",
  "key17": "5jwJBh2tDJHu3vVvSFZwd7RxVscgshSHTZVkXKs9gDUBGrTm9sYyYoMX7hxsp5DNHoo6t1r2tDGJYBTHfreb258X",
  "key18": "3bUMLQHMmWsErDjF6MjvCnVwVaGUjKyVJSTYkidaoxCVhtjPoogX69qRL2oxDD5CXuSjpNqKYH5unqiWB6ar8d2G",
  "key19": "4i3GDyXH7YjcRmr6ah8n2iaTGDWxX7ntAK89SL2k1x2DP5B7yPuwbXfjWcmPaazogcvySKdcy1bx2brc8FAcviVf",
  "key20": "GAeEE94HeJ2jpLkMRcRvYkg394BUkePZhqNh4BwLKixYTr4z8wdMea9YHf4A7QfYxeZpKQxEg6UApoo8XNeBJFz",
  "key21": "2bU9F3oJoZVgEt4c2KXWErUzU2WbKVjM3wybVj4tHKMLV6ZRbgyboAXXyraGm6aFhnA6cDZV7zWhk8H5HYzXFpou",
  "key22": "5epnm2jPYD2cTrivbpN7ueNfJQEeCcwQySoiFhAbfyuwhA83b5CmRY5Mp42SAzXcc4hkbuYrPGSfRYRHiFq3Ly1x",
  "key23": "bAAemxwnKgzvBNKRXkvX16jJ5FDpXkhjouKpEadFb6b78HKrUmFbANm2REQp2JpFubTy6uvnwpppytR6G33oNtx",
  "key24": "48KeWtAt687KDQFuyQxbkiwatMLBKk2DWPRxyJ8x13T4WxXEfMVETruaJ56Z2jfNqs2FyN8CRmWoNUYfMHBs2jAD",
  "key25": "qdmYzfWwzMTKxi2EWgUir5zyvkHMPLHNGsun19EDbyAGfsrvxy8KWhfJoPCnLQVmuBeqWE4faohXGUgSYy3FTqR",
  "key26": "4jT8vTTB6wvfqjdmEVBNMGSQZB4njaBHNfNarnhUo9eBF6w5WWbE3HqYbGyLHWsKszpMgYvTENXHaDz1xs9wejii",
  "key27": "5Zt4s3cVaSzECDMoJVyDb9TvtaXrBXsHspgmXYUEYRYcVb8w4Jde2W55G5bHhPNcLJbwZeyfhDv75GFHBncQxtWF",
  "key28": "5qNGGTfSoc4mNoW2w3Hk5qwLZg4LdYXUfm5RPYXtyEBEQzLcL4kesW4uwWxt7rL5U5AYeRKtm4Xxy8HS8P2DUhRd",
  "key29": "4HRkKebsB6w7hwmZcQ8sopDy4wWn4iAWmiTvTvKuAXzWdt6rDdtPpBMnSLUazAm8b9xACnmwn8n3ga5NHFfHFiqU",
  "key30": "59fc45mUaKLuKdiZdjpwS2KLaUUDD1sa33cC8F7iUkmkPnxz2MjgVmJn57V16QQ9Bwm8xsFv7u2yaj3otYQ3tWLc"
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
