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
    "oNu2aEkfAMBmkJRWcB7jSfC44uhLtHcf9wGign2czEAxhiARK4XZDsJAFTTTQKefUXgGFhL6W9th93LRLbBLzPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34e5AsP5AvWK2qq1ypNmd7bGEtwK6wUNJ7ufaYEfGwYWDDvL38FZpgdS694uQHqjVDXUo1j5vBjbz7EpMYZZo5SL",
  "key1": "4EAjfW57FqcHSYGgQJyfU1xGNRVyf2yxAvPz3Kqmy7cmGtSQVaRRHvnqB14gSzyvmX1JxpP72SpfDWfv3gHJuWGd",
  "key2": "2VK8axGWxJTq6JMAPhBNLg6nZTX6oL4g4TtP8UhoGFjzLQ46NS2ippfX2tNjYH4WbMmrgG8BPSHrEGYYpr5HQ3v2",
  "key3": "5KNQigh2DYWcDoy1RUEFtSkbwEQVbrfeF5QXK8HmCFQTfUE1yccrcpG5nbuT3z74944KSasPiZ2o5j2LfqtQG9L5",
  "key4": "5xNCH7su5Y79vYJVUFrEfRfSu9beGhFozS9xkaQvZiQDF62FzvyfeEpBP6SXU79f76YZV1qwHKKk97rcyWwnq9ns",
  "key5": "2ao4YzNTy51721Xsa7gqfWfecPWjW2jeVR4KfEBSNEXJCsCZfcm3j4b9dnAcFLHQNraazo88bbhtDwU4qGoGqVv3",
  "key6": "w1LZY2wTHaf4WZUVoDBGG17g8PLqzb1u1mhLQUN44CQifUctQgYoXPo1DkPoV4911seVFtU6Mm3jufLMxCWdRqM",
  "key7": "4UofzqERvCY6apxaf4EH6Xh8Z6M8LxJ7A4EHvxnVrKnJn1YY3PZqTfskpL2xmfjzXy8pyGeirJFoS65HvxME5zXx",
  "key8": "46oJXYFepB3XkFVwf8zU92i6jnQLmc6hUJ46M9F3eCwtcGdZ8xdJxNMNavkm1nH4eC2hzJGMwoYBevCAdWXc8sRY",
  "key9": "v7ToYXocRiWTY7CJsiNUmUWkEwcoU6a9VFYDk3NQAuAwU82BhzrUZJ3LHcFYhTGH7m6GADvcz6asSC2pG8tuGtF",
  "key10": "5wh93va3a4jHDhAa6GL6tN2nwbERkZQKJzvFcAAY9kRqp1EhzUCGiATd5MjyC6mkCErru2wooKBdWJ4x7ZdZMX8Q",
  "key11": "2mXxkLkJuLVUDqeZ1xEhrfbp6csDpnCUoXzTtaLGcULU4VenRco3pippS7WzpdimMv1pRKtNNK4YdBLSF5Y7NxbS",
  "key12": "2uVt8wg13eMDpkSrBz7gmWCkwz3K3uspTYQ2LAQ7put4MxxcAcphXCsi5JLseHRku4NfzCHQEkcJLDLQVvxb8TXX",
  "key13": "5Svnq3x6Hv3gYetbXNoXefodUo67wuBKAXPwvyWPyAmq1qKwKeagbbansFZwuhZ81jxDVyF7xU1kRdA2dkp5mBov",
  "key14": "3PBpfKTxyErmA3h7YDqQTFChhhyZSz4EQYH4RH9T8v4BMH9wGnmveme3VAMBWXUT8znQq8TNn4uHzJ4CHWWh9Kbi",
  "key15": "3S2JxRL5fU3xro1xMgDXDsJhL5HXayAeEm6giTVtTMAhzsrHFrH9wgqXvHVbgL5msMF5XumHzLUZiN5PkQY17kHf",
  "key16": "42DrY8avC1iqUgddU9fQ8opREbLo57pFBq3pZL2Lv74r18s6rAdE1Q6VirKZJWgteyN5uPSwTfsHgc8rn66Nmbca",
  "key17": "3bWuXFRvN9Tz6tUJy7d8hB4fDLDBYogGgoCPRFxDFkKHxxfi11Bg9JdC2iTzVMXbzJsYzb5V3r1oLBxCz9Uo8VjU",
  "key18": "cNULKSuzYFzrq3FGy1fdaDEA5njPcDdDATJiV8hdsxuiMVRD9PreqEXKYv5nECMggn47w69xGk2MdrTzBh8gf97",
  "key19": "2LLfsurnVdJCQojSYpHEHdDYZzG4dXmnwoF18NTSNyhmXYsSMxfefAAyF1d5NPajf1b8Ra1peFEF8nLH97qCf5px",
  "key20": "438tGhw6TyLf4LsRmLE9VSoWBE7pWNCxBYAGFxG83sZmKzLUHKkRCFF8EPzXUvNKsWPeQnyAoMD662YrsMTBFCtV",
  "key21": "4yuJzQrvkMJxXEy2yS7aRbBgUZjvTTJhBCMLVDo94ESxubJk7Xs7UEr57TgNxgogjKw9yH9aCRXDS9ELWDN8eidy",
  "key22": "2NTPTSKsq1zE6FDq9DLfdqDijPkH9Ej1Ja2YWJaWLnmZWb16rw3BFY76LvEqP6TbAPoDt6ZizYHyotjm6x2iTiC6",
  "key23": "2A2r4xUf2M2hWmBEHBHnYmwQXG4pbqUFKqDQheWP1xg43borsdFndFvhZtvHLj8x2hMpmCLHbhmD83Yt9wGdxCAi",
  "key24": "4dp1FvcBR8CgdRxZ9kVk89Bedz3woFc22pVYNRRgLB8yzKTW9oRdtyygx7hBjPCpmEavCTbcZfZ6CKe9MWqmHyza",
  "key25": "337Dkns4wHnxzeCD2DVdoNciFj76h26TrznLYe4rt3Vj853GXo6SE1Rb9DQCrZqu6Mh2kenZxxhAHXQBVtjhSQos",
  "key26": "4MUcj9PG9JUFG6NxkSbCRQsZfoawEjSnHtoLHGVjjq4AGJbHaCp5XrBcpzAXqb25NusRyw3rQyqSnPRbQh1vsmK7",
  "key27": "2GrgVryPkZzZqT9ZFh78PhpuMnXXGjtVxRe6HGeSseph86DFF5Xq5hrYfL69CoFnuLGmi8W7iAm1Dpyc8KHANHo6",
  "key28": "4knkq889KXAryY2x45stTsniEuxqKQDCMpAdyqDQKXfT49JQr7wZKbmvpcMtt6BswU2898LqLNWjhJTmK1yEuSxp",
  "key29": "3ydUeRZtnnE7vt2GNECx96AUTbLvuxhFeYiY4RuhHmgCJCdpAxnrzDzB3Rd6TGZfUD9Fd8CfKYo65938mAZfTT3E",
  "key30": "44GAF4gNNVursbBYUTo2Kt4WGd4jhSjPPdD2oPxLd2xtJq8EnUopLLu4dAaVzuynnyqufbt79rjCBBLHMdD5cNb6",
  "key31": "3s3rSSD3o8VzfGzBbYJmbk6rMv6wndgZgu6hsp1MSiAdcFCwB7R84J7Mcx8w3K6PNcoJsxEerbbtd1CVGBGFgNGn",
  "key32": "2HakJzH4EeL5scHZmUd6FJzq22nGkdxF5NTfydBJWMT1FcXQUPUaGsUnhmiEtbW3UbVYvbpiKgKzQzA5zt8k5BCU",
  "key33": "2aensfWyRexXseEeYztGgTEkHrPJNZp5y5xxLf79E1EnNqY4wDM7iTXDPFdVL8BUmTZWDB3o18WaA6U3CYXwgrGf",
  "key34": "ZtdqjCBaL7kc1gSrjdC9zTgsMX7hsNHWcryJ62weNiSW5GgMtBY554xqwUFQEWrFWVQc4yDDC3ySn4qLSrnNMDh",
  "key35": "2bzhq4k21AVx6QDSxQTFk63d5vTf1zy2McNM4mxC5YpEFbbRNq6eXo426P1qJvjmPMe8zvGKyYrRJT4JGLbNa84t",
  "key36": "2bTwKhoekHh6p8KiKHkTXWjE44r9HJzoQRFwf7qqDe8WUG7eKcRrLdu5vpbuQMKhKrJYgseKygbqPtztBDDvZNRx",
  "key37": "5YRhvMXpxMNc8fDP9XfzM68PJjBWPx9Qwvht3J3PB9W6wJRN3zfLwB33g1sxW3eVW33eqYMuK5yU9qtYbkWw3xyK",
  "key38": "dmj7HEDAfvTxRFMiks7mraSxbw64RxYtUfzaKuvSfV8jyqdBXeNxYXkRWuNHxMpwzeMDUe3REXysR1QETWi6XtX",
  "key39": "4nZASeGyvCVbcmEqzUSu8nSqG8pTZsYMNFcoM6QkEkQ1XcJGF2JGmG4hCQ9kYQmbG88aef5YxhuWEwVRFbSdQaEt"
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
