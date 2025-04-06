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
    "kQVJFNdS6dySfyPdkayCPu58DKviqMzxG5iGWrMDBza8rXhU66nqxFUdcKf7aVukRUBwxMan7mNX5MpqQHQVQkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Bxx35heEU2UdY3LG8vsQU9yRtQCa1LYNkmG2NmS5FqsEFgjtnX6mxS4srEy8dRTUcWPz7KsnJ7iQ5LUB7iiwaa",
  "key1": "5zkhxh2AkM1PkkfSTa99uNTbWELhKCCwqCV87yMMPbm21tNTxiH8sd4cq6nBtCWvhM1nV4bGzFkSPbRcmJcKsjW1",
  "key2": "4ZJFpzVVxWDwgaa1BWvjUtK6v8azewckAic2VfqFTDzWCQt9b3UmDCDo6cktoMA5dZJr7FewMKUXdCg3XCZW7pj9",
  "key3": "4WMgVgk83CUNzHX2ZmiCeCR2y76cR8u6wd7RkuhGfKVksMFpMSYfVwXcPwQcbM9bpjehhKZnp1dWcP7ujc5j8FCQ",
  "key4": "2ZDeNG7zJ2Myds3GM7oZ241tR36ig8EHgQixCBTpBbRB3H2dEt15xXgakHXqnRb2nLUnDaV1KWeb7baC7YgRLVYK",
  "key5": "2ZpNMSz8NfXtVd6xYFDitLbafwczjNXBSK19K7zizkQVJkpEKg45tmRGcNdKYKyMfhXN7ZnByEJ5gTNs5cTVu1Nv",
  "key6": "8iEstSNXmAYnmKjihTBeCdwdy9TktESdfeXimdcvMFKsjTk9hEWyg6SyZPejVwmopCY7BJLHGrg3U9oy6UmPS6X",
  "key7": "4vp42jMn22JfprX8KC9ocSeMFtioFHj1TF5Gj3zm47Xzst7xN9tdLB8UtiAMMAaRjidSrg4TFzFJrmCdp6oKB7oG",
  "key8": "MzijEudSywEWyYNRJzPfLpVzP5GXpADqMREgZHw1ncGGuCwdcYe4i6oFatgtic9CD2Fs1S3LjgZYbQiixHfoYD2",
  "key9": "22h8BgNwUqeWtxYffcZ89zvzPmJZ5vj64yJ6Sa8LKE3TL6s6Grr3Mgg4YmPoYR93bKmskfCTAycBaEUA7o4W4PYw",
  "key10": "5FdBGDU8MUGwkzvKkJfcnVe7Uake3pEQZJ4bN4RnWuBPpwh4N5RN4yN1nj5dSLdt8TZw9GYBKbGmAqUsxCYHLzZU",
  "key11": "3tiorusBYMNXYPvbimA4vXC6nUtohEGaXd1obPceMfhoN3PK6RvH3mb9qrUFm2YWPqkzQhZnAJYve16tmaRPHsKE",
  "key12": "46sd9PPoFY72NDCMDEmKfGnTycbKt47QvLc1ufCJAttYJWwAKMdWenkUtdZm5DpT7QnWGJgHGecqLpTnLreMgUpJ",
  "key13": "4fzqGh5u7vdBxk7458huRsvqRjaWG1Ut8BqkzbVwhq7dxHjXzPcnC1t2SUYSGVjNoX8DSzWcTadgBV2Vc3PFSRTg",
  "key14": "2ssjj92kKcCHqARyz8yo3AvTHb8szza4VTScLsvZK5pGdFCCZS9uLSnE9zPC85BmoL3UCWVRB8RZ4aMbmbmSwsUt",
  "key15": "3vrvXtY5G6ZfMCx6T14mvvtXobkBoJyN9SVTUmHhgdM4rocmsSSTaTX78JZNkhbUKGAe4dc4KUjWMzUKeQjgQX9t",
  "key16": "4s1f3bdtZB5e23Td8B1f8aiEbRhfkrjgKD7TWCttct6xdbNcaG8xSDfjpPeauAEzgtLNdCiUvYC5rB3e3x8nyjpw",
  "key17": "3qQaeBK4LAQztPLpY8Bhkq5kgBAgKVWafvJJY6F8CJe53T9thM55timFADCZQ2zZGqh5JhtAeCqzZUu3G4F6NEVy",
  "key18": "5MU5v5aV2X96VZfPpgZU7X18NQCADsXvHyLCP1sr6cmLoKaFnDEzykpTNo9VJGnj1US2sG9GMd3xjD9qoHcVqars",
  "key19": "2bZ9uUW7U6dTg5rJgGQkmv86CgNAC8q79zxSSVRrDi4aucGZNCoX5tkoNYK3mDfKgv2biRGzjpABXQeFMPojuGMx",
  "key20": "4WDEFFdUwfGAXjVnjse6ARtrGbLqnAau1QKmd5m7W8GdDmeSm6wtAatbS7Usb3rBvkjdHD8TxLcKHbP6N864MpAa",
  "key21": "4mQqrgacowvSTcoAD2tLxLH6zpZeAz3hENhgvQPDMPAcqwaYbCkHT2RP1quKTsJHbf2A6i5pG32nGMAVej1tL4bJ",
  "key22": "58Mn3UARGWE4LpTrytge81FVzeCCbkN3uLqDPtzPPqg42hhTawS5CAJcW5KRrZycDzs4DLm5VxxCHHRgezQy5jkL",
  "key23": "4FjSSMxaX7Y5hZ9dS239g845L93urz6T4QEM8rBpVgntqsj4PHUUWL5KEq1jZEsLXaJRMwtMsQB1owfoUmV31zPC",
  "key24": "3gfttYFq6Qj8ZGu7ButGo3TiykYhGTaqQyptPh1tzuwkgAS1ZVNeaBH3w5wNX366d4EQt87fXWQABoiXkgFbS2pH",
  "key25": "3BK7qUYA9ZtyVtphjxdn8PvA9Hoauja3ozqti157t7AUaNWg6MsTBNp1d7SgVbKCPFZYXfxZi8DxvJ9K7KDKyhcp",
  "key26": "58MAXu3qudoSnR8rc5eqcqx5aMtfaVFe3DV2SeHK451DyNUn9f6ENpsWNHEAd3oT5XEd518JL5iq8MtuZJ8d8PJg",
  "key27": "3vh5WtJPdoXycaKmgkcGDjPGdjs3o4Pvm2nPV7UpQvFbBMN1FoniuK1Lg7UP6Ft8gvt4JRjSWJ8XoCPPXQazHBSs",
  "key28": "bng3rLVk2TnQ6ZFDF1m2nVZJj7A9QAaGGTZ4wS7eCcNwXtF5KmaoDpqbcCRdbJeB4jLn2nbsnQDLxNtnwpc2EKp",
  "key29": "4bLUtBeizCe9zL7hs3HQkRRJiB9YBNYWRPtuoaTERj5YyGviQPZEhAW914pNhtwnQjAsiTG3yTgv2vBjN1ZS6RxE",
  "key30": "dMC1PhH6pmMkkTKRUXq4BgZgVPQfn2ukBRwvxsAaUddtubC9KM4k6zzrQ2XirUcrNTcN2M1Ng5ajWmxtCXGkc62",
  "key31": "5ZwFnXheFXHiVj29RrdMG7EXTy68s7AcEvXmQudUNXCWadzcDfTw4MLfm2PZ9sd4jhCUUT8mBk1hYsGEyMTFs6cb",
  "key32": "3wZ6RT4ZfmajWDAniorfMb5t14VKvyJWuoaMXMqYiaooRRzHMUisXPofNyBAX5TcipBeq6ybNmnKQQZKTfBLfVBr",
  "key33": "2Y6z67Sy8PkVQgaWV7WqNkhmQ6VWTeygMgcgjWtaM5CBmoiPz1KxQ67uGqLMKvbQexsJFGogN6R1W2YxSFJrf2Wb",
  "key34": "3P1YVUTw9kpreyNgFxPZY1kZPnFnLPGpDHZezZJaeVGaG5ru7KECdeCKPBq2qkJxTHHzsgh3cQBZrWCrfwCWbh2L",
  "key35": "F8vJUfJnCRvBgRaUvT5V27S5xGMvBRqaBp1QxkqvvWvz8mdWZnj65p4PJRMisMk9Z5F8u99DLCgn3PEUVhuWFr3",
  "key36": "63avNq1zDjkm4v4fboSWYsn6zEws6L3tYeMQNuhoSD7Ewei7NN8MLC1XauskfE277o1KNub3XnjP1ovdiU4L3Swf",
  "key37": "Jq2P2N8uzHwSED3mmuyknSnJtEJPLtTjnsTZp4LHdWGGZTxDy9ygVhmsKn4KnND5vUhdwMb419DoLVawVb7rwhY",
  "key38": "XaYJPEkFqXKjaxXYZm8LMUQjRa41cjyJHLgBs4SuQGZ3NyvrYuZJakSZTDeBKY2DRPWBjRWGP32AKCokgUgu1xi",
  "key39": "3KLBUKAiNYB1RhSSM2ANg3dQuZraCaXxqbyg2Ua3BhepNJFHWXNM8nhhdfwJm2YCC4rNttNCQ2aFG2vCKMhFo6iv",
  "key40": "3z4bGeH5FCPeuEyJonzu277PDwAMNBTVsX43hSRyN9PevG3bjQj6SRDYVH1MoEYgFX7uvBFSZ2SDVmjTdWbWmGr1",
  "key41": "KEYNVKuuDNmv2KmCcaWDVsCDaeeqiDzt8WnsRY5bywbASKEvc4BSfG8WWqH9iX5fui98sajMTDrDVMpfBbvtyC5",
  "key42": "2Fox6JqCNsCr6CRSeyENzG4H2S2FeS7Ubwy7kadc5nAoJR7SkZZvwmYMwVY4UxAieYKiQTaaTzVdoBw85cN1y1Ve",
  "key43": "57PW4QPjerF2CgNfG7erVKBsR8YBoHrRWNCgXBqXQTyv92W7VSbKS98vrJ7zDymF8yUqGZXdkwQkFbsjqLdzJ12P"
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
