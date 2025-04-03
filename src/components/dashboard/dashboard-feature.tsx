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
    "3fd46EYjBsMTfAuSFPD33qEqripARYc5NZduz9p1ameqdAz6XpaajwXQnejtu7tUHUAcVLfBLhgRaf2V7cFy1hcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "388FnCQFovyxk3w1AfU9dv6igp37xY8DpTARMMc5Ee12p6R12y84aQxdmj3eBtHgQy6L5CbfBiGYqbGxA3vbpbwi",
  "key1": "3MV79uieib2cYaRf35CjeuZUtQKdtWQn6XzdnntnsKYBuruuEqtcaU26bfTVcbgmwZZKUNGwTxPM9uKgd1u2BiFA",
  "key2": "2f3pm4XsQ1zNM2q7NEwz3d2Mr8QDMb3sTxDsG6nwpYDew4Jsf9yDm9FTa5PHicXw8s36CKWXAxoi7NWHbqkd8iUa",
  "key3": "5HuU57rqYjnduk4g5fykoowoVAwGKZR7vHJHrJWncTehM4vBg5mZ9cgCAMpFgMQQb5spjWeyb5BUXSyakbfbSByt",
  "key4": "2TgtBwqXHRUApmVuYWdyqewM2iZvKdgYQvadmxCMBAKffRtyU2QMU3svmT2fnXqJqMTWDC76N2CKhrbRtn1MYZ6X",
  "key5": "61vkSY1de4PNeivRj8DgayuMEJzFYkgf6HQKjkKFuVohhhgwmu9yJbUmX7rMEV4cvJkzPBkcQsig2hFAimk2vRa1",
  "key6": "3QcwwKsSfz7XCCRKbBhiKSYVTY34axpPshW8fjPht74Kf75CjdXbmBGqTWozH1kewgLsatjyRdQ9db9u9NFYnZGp",
  "key7": "4bhmXBG33yKFN3eCK56yPGmkN9qYCwWF2qgHsPakyteEjJuVixDxnmxdgXPZCZuQa81N7TJ37RJLw6jBkZuMcovq",
  "key8": "3rLMDep1sV8HMKy2VQzPk8NPAnHbiFiD3wCVdmb3a313RofsfVS6thvkQ9eSJ4B37B1d1gTzELSusQi4LGqprpFU",
  "key9": "3ebhnXQeQt3aCD83xHVHaFg7Ai7GEbmfvbAww6UDKbdKd8SxdsqE7Rz65Bqh6HdB8gbfQNvYXiFNBqcJHTb5d9fn",
  "key10": "2d3gHSz8S36S7jvhhmKPzfkUof8fo8qzYnsMyP1GtHYUiRFUgYE9TwsujJsDk7stk11TLwfpbkB6ufsax5Ut9uU5",
  "key11": "hvitRXAkYnYd9LyMtUCaiAGN6ANPUjokrCK2qaEaQkMq9VgR3cNgYo5nfsUhfDWiQ5TU6w7VQ8MjGZSUB8eJHzN",
  "key12": "YCXgkk1iB2URwX6j61BEGgDy6oK6z2pu1KmZbw9522A9osDocTxqXZ2k78pj7D2JyAdzcLhSj8e38XZLy5bP2ek",
  "key13": "5su5EoepJ1LfZ2EwsoooY96NikMP2vBAj7USV3MdDqJzVzqgeGK7eqrYvSQamzNbXtudYMhw71MsgS8cXrgn9Wd3",
  "key14": "jJsWR3pF8GcgkKg2GCvPgWA8NroMxgkcp4a23VShVWzGxQdwbquwfrSjZHNtYN4jHB8dBPC8LWxgQydx5dcypC4",
  "key15": "5CVSbBjB87fvZZG2aSuxVJA3hwZPUTmNaxmkr5g5J2RqesnTvJQmugzrepaTQvnj795PT5LuCbcKgXqY5dS67tc1",
  "key16": "63Di2JY7mUSijTatJbTNaUXfnwcq9kFRatFodSGVw1cronXtpn5fv1xpFL3FaToSkTCf1asTmtivdRHmt37h5PLW",
  "key17": "4K4awv7tyLD5gAt4GYUDZq3BYgYjkTGaqGBoAX9eAFNXVDiszHvFwp6oVCMFVZpVw6kUv1prmXTTxg737MvK8NRz",
  "key18": "vgWweUqiRv4CpRS8vWsQ6AfSWmo2ujoGo9qHi3GkNt5Vk65x5xV1tSHSriYKaGPPHsfNhZsrqqajhVZMY9M4uqq",
  "key19": "zYh4aCHs3HC3WH6uyy7Y2cafwmVGGNfFL5rpc3tjM2zNZTozmG1ftTySBTbgPnYb5fpr6NWcPygi3v8tiT4RAEY",
  "key20": "4hMePrAqBDhE1G7bnSs3VdbRh4w1pDCKEyqaQy4mtgevMPhmhZoX84Y9eHvzxy7CLoCSfVVkMoNUa8nqE51pWhni",
  "key21": "2GbF5UDnYcLpzBvdWbqag7YsQEvbCL4C5wpnNprZA39x87VbL3WcfNY3NpxC2vTWvpi2k5UPnFaGj96md6KWwPxa",
  "key22": "a3tT6UcsnZdwKVQ7aYTtHerb4rcnUuGkuVLK7igSY4GdfjRq9Xs7itCeg78UJiCcGHX9edt7sbqKQ6FDp9Zrrej",
  "key23": "5mvnyWQGyeb54DVRaACy6Kn11VzthXDbu9HHYbnr5rh769uUPUmowRD5cwLuhL4B7V7jcGtev7Lj9RznoHBJ75sh",
  "key24": "jqqjV6xy3aaNmbTH8dbQzqgUB33GPVkC2fHgyqw29zu9LqKxFt6BcmdNYmuvbHsAhBKPwjjhHG5WjU9j5qay42e",
  "key25": "yQCpC53LJ6cgNTitDFZbzaAUnHxuTHsGFnBJNk5Eh2dJedXxB6nGU9W3zFNKVPLVs1HxBBwFte1wD9MuqnND6VP",
  "key26": "4CZWQPhWder6LYNx45M1fARD7Kp9WR72dazabBHNu8VS1WcfgJtTUYJyUz9tsaRhK5m3aHSHsFsnHkKTcpSqsgMn",
  "key27": "4KvVvwgdyv4VjgQT9sBbkAcHt4KDkxe7FM3sTW6AZ3UCyY9L8MSzi3pYmYMS8eZvNoQEfxxFAGbtRBjrKjEhGsxq",
  "key28": "372JMro9nD3xP4rEtHrSkCUUfR9C5Vhaic9kqehRZrUtrm1MdWqwd5WVR3bVv8dvEQkikpWpYN83rmPBDYGQPeB4",
  "key29": "4iJPERC9v4tE2X2BJVsz7KnxpoDdCvTvsU6Aweb2B5BzYWzDjcvHgbDYjqfsybiaY6oiTHZqfvZ3pTAn4UKWWhKw",
  "key30": "39XdfQqZgvutKEuAw7ELZnVzemXrHdmhR2kSZsVU1tJyHQgN2vRSs98qix4uetmah8dBn1ogZwjCnSfjdyikaVUn",
  "key31": "2z9S3m2vA3M2U9ujNiqimuuLzUmrAXtfA39n3YJimhsRfdav61wXAWLmDM9ofr1ikbhp1eiMuejwzy3itAJoQoqC",
  "key32": "3KhvyENpRL1jh2S3QDCUPs9zWKbxBwuUvx65dNpr6sg1Lu2HvqtZaaRUaiqdrTxm4KprY8GF6sUgZiQXgA63i8Sd",
  "key33": "2UPTy29AdWguce6PbSS2UuX96SbE5srap8BKiTAth7jabZqdmDiHgd8bLpNkL1Cs8kwGDRedYvUXQ6jnK4ucQYCP",
  "key34": "5MHSEkos6DK5JpNHqWFjPgprPwAj1jDavzRAnStDyBmW9QVKcVJm1tDTRUGY8cWiKc6eLJ2aZkJ1jiJJqYqMWUSq",
  "key35": "5qhrQvN6X8U7ub38Qq46UoNpikc9nhk1eWfpRFaTUd1mGbyqYcZfdF3gRWQ21YK42xbTKREvdPhEtHpdS98RhF1y",
  "key36": "2iCHZ8tHjAzM3obhyaXaauhCbur5AUw9UFuSyND1ZNkSA6UyFDmGPW4g7hgqHAvBve3tASFn6EoNNKd8RUYX8UWz",
  "key37": "3poqRd6LxGrrEvdLCMbUDj4U7nZLFJUQs41dXntSxZTB8XGGNimy9J7XxqvNiY9CViXJvK42SqzWTYjcsie5FMAp",
  "key38": "3UMQutbPr5SEbfEinVdLjF5c39z42Ph1ftUeRVudv26Gzs9waefrzpQqFwdjpV3zeV8tzJaYUz9rGByMLBvZyB8E",
  "key39": "4Kgw6kE5dgFi9h6JVQaerLQq2Gz9p7J5gH3gvorfnbSuLZnGiLc6JR1yQDPaKLVM5tiy9tKbSLgvk2DnLMFxHJfR",
  "key40": "4GRiohhwhjreHGEpGV8FrgDbdhpcy62H8Kqx6o7uvskQ3R2ma97NR7u1eZEtFd563TZaTm6sixPZj3bNKJyaSQw2",
  "key41": "4eymjDfrXGT2s9fgLMtqjjj7j9KHENYwyPxyGm62TXDbgbmvurCHjJHMjGvxuDPcSWzY2HR9s2GnYYdnFTWFfEj1",
  "key42": "49fLmewRbXS5h4gmbuFTZyNpSE6VHrYZqmTQpE3saizVieZXDNwGETEDyN73rmRMszv9jpXJf7Xar6hV6Fp58VcM",
  "key43": "5KkSKUE3QQ4eEU7Nh2NF2iv2DMZJBTP9FWceZB15UiW76DgjkwgEyD3WnSadYFY7LnGtCQhborEfPmXTc83L9XG2",
  "key44": "2ktZUxrRwUtJMc6ZxhAncRxJiP17myxQA266phReN2jW6CXoG6KnFGuKjKXb7SuzWFDVznk2N7ooAZqwbGpFDwra",
  "key45": "5Q8HMPw4LwiXx7UnJ2wYvXn6EqQ7LAAQXFjpqxpJZ2AJyWZbs542LDD47GXCsqrvVR3yzTX8usZ1PJooTaYHyrKY",
  "key46": "KfcwikyieAyFjoqtYo4WYkzVTNEoEekhTs49CUCduQuxDRBJHDZymhf1wkVNEMWQTSVDNN5nCAY2gPN8GojgFHC",
  "key47": "4uysaGiXVPyqZ95ceHNDyg5XNJ91uQnVut9KbUNVMYtGY1kmrvmJm56vf3JuPgcrypY1636V2TFr7EdcAtWyKBGq",
  "key48": "2gcF3Bpmpi4Zb8Bxa9m7q4v1SS9MK7Uw9zDprru1bhVsTN3EXGZ5QrqC3bSCAEdeAXy4qiLXHzMLKS64TsidSvvJ",
  "key49": "3Lyv5Hw3ALN7eQd8iXRgaaz8MFGdDMcgT5oPELbYJxtynwqkS4o4zQx6Q8gFeTgarLETs3TqmLNLTsYP92C19SjF"
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
