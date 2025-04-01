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
    "Tw6NNff3Cu9rHyQYWDgpskS2ZfDbLLrBCYVK5LTsqgH9vwnV7TDvtMWzst2ea2KGbEL2yD9a9Pv5SEMjAz3GXHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wz73mrjU8BwFka1RCEcmr6GScCCKp3TZi8RatSAnkH8j2nZV8iaGEkc8B98CibbMr8jg7vVyxPdjEXuLADWCr4F",
  "key1": "2dJEYxG547QH4ZyAedyXnYPjpjYT6c2DXRn651iY61JcssnoBZ58xerJNog2NwSNoSH6KpkmUSF3JMHJYnXeMhyB",
  "key2": "39iXd83tDVkxSqUzq6iiKPx9QTR5dz75jzF7gckyCu1FPy43TxipqoNKw6EsWZv85kpUurGU89ydNMMepzZ4fKpA",
  "key3": "5U3Jk9MhQFceMfqrh9QoDVYYmgtR3SWG7URvwMh2ZVwoo5Bhz4a9XELjjcVmFEsrsLskQ1DEba15Yfxj5p7pErA7",
  "key4": "5dpHBrLRHo4u5QnHffMrZzD9c28mPF34Jb5BzAj3M5baYRRrKHjEZqrMcyLmsVd8m8d7PBjsadqBizqzdSrmBr1n",
  "key5": "32eB5HCwxZPKVytdnmrjbKdjZCZchd2LePSA4iaKsR7nBirvJEj4HBC7rPj1emEzHu1LnaMn7z1yuXrMMCmTovsE",
  "key6": "4qhipwYpavCQj4JDAoKezBr5GWSjgigh7Nbrm2SLmvnEpv1UUqQUAkAMEStB4da3dunxzqsnVejmBrh4gy5uiXer",
  "key7": "taHnWMSwYGfWNEQXGwB1VV1684tVSEKEGhiiJeqFjKDoZUb2txJJ7rYLU1pAf7m2QpwH6uKVn8fEXdcnuAYkFQL",
  "key8": "3cBeA6ZVPBRSq1bUyLz1NXW7GjMpQH8VBMEfuRECTvysD5pz4N6h6WFeAYvMvRjRDir9htPfvcuANpwikiiBXLQc",
  "key9": "fWoEH4cUqFT3jGoa25CTNjDZzfD4dQH8hHtYVog3BkaY3nuyvQP7vJqechV3bBqATJNN9WjRujhUxVgNSv1LSKf",
  "key10": "f4j82FQ1LX8445MHWfzZXUGpNmKw54mtdXMrLa9pBhA22974Za3Ynv65ewP5RHRkFWspzcBwpJjW6A7vU7x9r9r",
  "key11": "298DjKSNg9Q6Kha4f73Wq55hspagiRvXXfCjkHb36iTrScUL4iBbt8ZkJPtPJeaUVNzNr5m72WUw41VpQouXpxVj",
  "key12": "4KoFQirY8nB8mFAzaMCEDP1XjVrTuxaHNF4YbyRV7ZFkmWnXGX9kLC2AuZNCpxWskQmKbkqvYmZUtVfzmkQTgWiD",
  "key13": "5Ws7noEmg7JcMrKCouN6bocAFp2NpZukk7qAQb5E7S8u1sdpsSbaEvckd6LVZKHgbusR7g2F4CzteyS7Rcj1N1HS",
  "key14": "ap3nHxmReS9VWhAWmYuoZ243cqhBS8kqW9DFPgmXxTH1iBTUQ3ov7Eqwa5VTSzP4dAhq8wBMMBXbCLuRsuCtTPH",
  "key15": "3KbvphdrnGSKBF1FT4bBbHTCAvwoTeEU9VtjRpnKJYKhDJFH9qfPQa2YWSywtdmpARo5fKfS2Yj28D8TQ3Ty17s1",
  "key16": "3s4BvpaRiHZqid1xQUb5dGcGS77Vj96wa4LbfCbQuLsvHx6BXQ9E3BkdEnhLuyjQQ4mc1iV882Lkzb2WRdiHszFp",
  "key17": "5GB9VLX9S45dHkRKYeSZCYN3RmN3J3V1qz29pEzJ3WUxtbo2xyJ74oCuNDTcfqxn4AENDi2ya7F18A1Bs3uQzTy3",
  "key18": "midEDAtEviwvQ8Vy1ij7VMG95UsW4FGxrNtmH4rWo7a5zzf833CubfTV5hNLxMciabHbz4ynrVtxPPv89CHueGK",
  "key19": "3azeqy5M9wzsdXdwtVuyPhJaHiaZACrNMqt9o3hTXwKhtaS7RGYqVAQSgAPJR8Rsm6TwbSrxj5oC4iiDZq8t4p5k",
  "key20": "hYKJZNvirQ2uoVnTwy4HjctA6otTMhjdAsEi6zizRRCPyuSw1TGuttrS856Qkm8eABpHaRJMPnK3pgtubu8teSk",
  "key21": "2csVPefjHUWwNesNv2ShfrtaqGTJigdvsM4ewFVR68fkpme5U8mxcPDRvZhp63CEnBZQX3G9pDFc3uruH9insJLL",
  "key22": "2JU7pFA72P6qj8QZsFX74guqqm14BrxfatWYH61syZyWSTcUuydvazW4MGTECCBMEGGj896mRZMyJN6gaKynAyWg",
  "key23": "eJYkWTt7RdgmrFhTCd7V7vp73to2Ag4WUoNTkSLTJEA4MaTigGLzdvGDG15MpNCM8uNwMZY3riavzMdYmPwqABr",
  "key24": "4gih7uLhRFVKPrM2kKTXUWYpBhCczQKVABtdS8TsUcbYbYP88KVr1Vi9SinUmnSEdTuWZPYrYLsFgN6DFdkDLoWJ",
  "key25": "4rus8aUX5H7VAHM9vXokz7rdFsV2RfzLmstsdqfwbvKdDyThJ8eGP8KgZdmR4MjtFppyYEcDH2fJFPGXbRZVvahN",
  "key26": "5T5CdRn9m4GmiGmPvGvTkUkBxeSXhCHnPvwe2sjXqk3WLfnYMfNqB3ZLjcxk2LGo6GF2kmegpHJYmR64Mhttb9Cs",
  "key27": "QDkCm4kA3MikZToF3oczQFAccjh1XGNqW8qagkh6hRwSAyMbS1LXFoAGajdHkFoNw6NG5vkE5RTo9dxmf7yFSBo",
  "key28": "3CbzKAoLq95GN6sRQipmJAVCNGqwzgyd1mHC3gTwPoLCPSRgT8SfzsW9NLYe1uLPvJA7z3VZUn1WhRj9tsTQbFBd",
  "key29": "3SK4cP2D59gsJjCz8gfs4YP9AESahNPcNmKPxHu2yMrmYFLWmJbagCMWUTsDZNfky3AKRz3VsKomhxMmqp9m5NhL",
  "key30": "4TBQ5z78BL17JEsmosQ7juho9vLyH5n3syqEiBVPafaJ8y7Bq7hVVum8cwN1KZcLwKRnRdLzWu5dzoqLGGJDrz9U",
  "key31": "5sBTJN8MpiBhGubZZMSGTMc3rS7o1vMQNRPRadtErbcsNZZj3rRe8vu6R7YPq3Moo8WV4DPdqLJ7qTcPiw1m83H5",
  "key32": "3daHn28BzUib3tZG6CAgXxADw3wEYpYuYSQ743hQQNYcK8J1oqiHqybe6t7ieX2erjKqxsoq8JeKkcSrKNhAQYkj",
  "key33": "84AtPT976ZEiCX91JFgygmsvLboaxFEzDtANbmVqwZmmacS9As4YKi4GKzCwVJFZi3vcZANL1cxJm9Z77uC19Gs",
  "key34": "564XpbbgmKQ9AP1XyCwPdEoRxJViqg3qzFFpYE77AyqqmPzqZ84L1wF76wiYEgihNUeMqqbNFJXUdSMLhdKTZXQi",
  "key35": "37afZHFQVWG1kAEfx8SAbphBNz9uRCMLKsGi7zkFNQkEwp4sVqzTQi485koqZBAi66MAwAUvfb5eB4kbQmmVcxPW",
  "key36": "45uaoCs5KEx556PM1BBbasDTLo68XL6RBCodYZFpeVqE1pDXgnwyao7YXP3ZGo9tTEvGiUHMkgM7SaaJtquzRGnJ",
  "key37": "1hezXUAWZkcydBZRXDh9ewCrewRGYZpRSpL1vWbHMP7qJD4xSxAJP3QjKeNHawEKb84VPa5G3aeQzbdssqUkYpr",
  "key38": "4UAaxesDTJPzSogf213iSVW2VSDGm2yWyZ8EygLhyJwJiXeCecpeHMt8ntFfUprd62AX3rgn7VTMfZDtwkJJpjnX",
  "key39": "2MG9vCJGYWDmdrrFniZnWB8VChddaWkF36HcYcmuZUTjSPARTVwgCTT7eF5xDNwrZjSKaA3K2sYiseANqyFjBhW5",
  "key40": "CNRwxQHmYPCzYGbKeMnu8SbGxwuYry4teoC7deGxrXASZuPwLJaVjKjAkWZ8HVRasz8TojSR4sUoRqgpn52gaC3",
  "key41": "2uVkVkfRwmYTNVWMMaVkUzDFbYy23vbQcWqCmYQn6dWGbMeAG2LBfo5UHHV4z699LLLxox9vYnSmVUudm9noot8d",
  "key42": "5vF2JpBr79mbixVUeGQHJHaEjYkupTyqhL3S6zQV4J4W3Apj3pUAkrxnWfEYDQdy29NgQR8eNn1tFZUdxyq1jWWF",
  "key43": "3zsX1FaWMPaNL6jTH9hCLLkTGNuJu4nPStc4GS5E94u8MLdc6cQxBT6kMiqRSCjWLbKDtc9VSHzrNE3WzoNWsusY",
  "key44": "3a5bzLQUfdwruuecFbTFA7wdm4K3MSvpRo2dMxy8Zk8ctr4AqJwHmLPjwoyjtn6zY81RkzXFA5DqL1g5SgphS7SR",
  "key45": "4yapdf5LR99QM2SYG2sPkiQQ2FzVDyhkYP8otpJbBMNGJiKYqysb88ddiQjJ6xwZ2ZASwqvpDKARJ8PDWsQAJkSE",
  "key46": "24MuMpMwBzxJddvAEkQDV7bzkwRdXJzgr765u8FqfzzuqLDvfVw4KWj4iSShUpcxbBSJsVhoH2ww8HexmfV4kNPs"
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
