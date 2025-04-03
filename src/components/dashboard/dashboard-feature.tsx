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
    "5EdW9YhXUKca6JhogKUyd1VShsquHmHp17p54fqUDfbwXjupLwhgU8YHkCanasQiLrS4RkvvaHUQkrM6ES6owyCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqgnQ1tZTNHkG9VLTPTKSHmg1yH5GhKZdndCD2Ju3541YJ9wviLbZVMYthUmLQZjDDcSz3GVThDzNMDbNEvUfHG",
  "key1": "3o8ibErCVtCFfWPkJKXCRKzxiQc125eGLt1DLsMGorHGJm8BvGX9PrgAiff9R6LYTDdKdAjwnb3NBNjVYkSVhKiz",
  "key2": "4ZSC3ZAKrfNGemkEsdS9VgX3jxL43UBv6JwUYn2xxHuyLjrtdN7cviWPz2vn8cohNFRuv4L97y8mo1HG6oPu48yB",
  "key3": "2XctmENZwPbXTsUFfw4xoZWusqQYG3nmTqcWJad85vzUpJ5FAiJxoPeu2k9wxMxVdETYUMHrG1m38cDBUGxkfU7B",
  "key4": "4xSPtLq3gpJwZBa3H1CPEAzFc7zAyNLnT22R4qpecb1deAHVZ6XA2iyEDbRmL3cLJiaaYA1iHUoe5aFENjY6rLyy",
  "key5": "3cJXrRuBjy1d33nRbwmQDEPgtqjPkqiacVCu5qLRtUzjpDNjpkNPViYbKTWM2BNQL34ubBxcZthzmPrdV1DEJp5x",
  "key6": "4q14CwR4XRDjkGF9adAb6wy49CujEfTSmBtFZw7Zz3oGdL3ieeV2vFqTXGDrM3ueo474dMLymt5ieaGosyATupt5",
  "key7": "3W6csvu3ZXSUBvvwe3LieVJrrdkkSEz1mWwZSTWQsJ7tkGzEJTcZL4WX9vQFXwH6yAEtRwRwze3Lkc1WSunVc462",
  "key8": "4dA7KGfKgMkFLepwrvibZmGvax6SJGLaWaAkFGHiwUxswGDUjiGvqA7n9GneuiUkv8FJQrP3CiXEMwWbgBjn4dpT",
  "key9": "JF6HWd3ri12nY9qQJ3HQLzkcPM2r7qGJzopREVm8mM9rM55KthSa8Gk5SL75RVuphsHooyT2U8TYoo81kfdJJ14",
  "key10": "urETAM1upq4Subpr5GMRL5pWdX74k6Fs9jAHL3rVhoeCLqx4pzB2A6RdqJNtSExdKWEBHvtfHpgz2h4tYCnTPKs",
  "key11": "42dQ5SrruUyiCJUHCXk7mLR5kBwVxNuxN6G6CRvsEbzXSaHWAQz86iqhBEqxTjC3hz9VNSguC2wtYcegfs4DbUnD",
  "key12": "4hnVcwPq67yaMua8Ji1KRWpthccWAbbcSZvnCQjVrtNYPpVhyRu6sr5X4no24oWnY41P5zY7gpqnayH9m75bw5Ck",
  "key13": "5dkB9gV8qNhaGaPV1L3fUB3ez6Ao8xc2vnnfh8MiDF9sFPb6jXQ5L74bsuhQBi7tEYquyHazfn3kPCGp2Zeq67tV",
  "key14": "3S1PvT77agENbH8QyDjz5EWbZEPzeigWxWLY6PYaAxvcucyvLHS9SynncYtC635gCsugCFtaYFdhLsNnBXXXre8",
  "key15": "4QgW9phZGer6Sjn5iohcmCvc5AMLHw8JGJ2uiSuKTufEZShcjdGzYoyaWx4nfyRvet8Enh5gU7KXDUPTemH4m1qp",
  "key16": "314uobWS6jXnwVPWdo9r5DnaNKJJpqudfSiUWXaPGRJKMdb3LpDBvqSU3AdkctRGH3qywLWJtZZW8eUzJRAtgy8L",
  "key17": "3PTZBYFvpveH8e2oLnap8q7eDKouU9uyFd28FdknpKNhfmdDqM1UnTt1sMf9gAP9uGC44T6YLS2MwufBhgB1rgDq",
  "key18": "2U7H8WMxAyd89Eq1NNHXRNPj6Z5W5tpM4rBdvK2vRvBitQLJAP7LL8rQdm8wuQCeUmB7r7pq29nhyErHFWHiPLV7",
  "key19": "41HufLi3Xi4nbr765CehnUFwfwzeWEWGB1sQQyXwQ75L2XBRy4qmmadWDdHwDf1Mr3eKWifRGEVfTWZUceEHxDJ8",
  "key20": "655K7RNPjTU8QW3kvz342muHmbd1DvgreQeqaaerhVnidpbsP9bsBCdMXx1EU3iPQq6EoEigBB9d9hRb13eKSEhK",
  "key21": "5yn8r7moyUMJDwm4RZVqaGm7kzDs3wX8psrk4tgAGD9zoasimShy16GRz63Vmn9HkTwGkiUtQ3nLj9iPfzNafjQa",
  "key22": "CC28zo5miorRY8upkyBz7HNUU9DF1pLYYEkfqtMUGe57faJayMrvFHdN5yz9B8duBQr9ydnNDinGBo4v1GMDEqU",
  "key23": "3q7UZWgsvxQimTgKpqACJywjmsGcJozbTHk4KoSEWe3gpAsAfUFVv9RhZSXypqFyU6TgVyWNa9sepoV27kPZojNx",
  "key24": "WzHPbQghtWgVKd44oCkE6gPtMRASQtso98r35D6m9UjgDghUsJJ82w9XQe1m2NrXSqdG3e7Z8RpSLhLheo2WM9M",
  "key25": "2wV1V6BDcCmadNEN2ocmsR44mKvfin9khzotjsBrMZ2C9U91eD2nFRo2oBUKQuk1KLp2vyTYzSLwRVKjVHeyFEed",
  "key26": "2TjdRk9KE7qEPT7fLhgsdaZFsojkSsWC1tPZRCPXyyncpiMGRkWHD7QjA1uiNNsHQWDYcegcrxQifRkMUNFsUj5s",
  "key27": "mv7H3ptcxAd2JJbKufxm6KESzDp5M76JogwfttrssGnEj7u76wmjqaKbcCurbyfct6q6M6HzSm9v1v2rTzkmVpk",
  "key28": "2kfry12oxSVJKQLwF5RRFQVz7ViZjGvhehYGbwRtErjR74N6s6t3UZcxAzqiqjejhouZatFKQKyJyBZLxv4tQFof",
  "key29": "5x8y3ab2wXKZzqeHbwjcRboeoAzWeNEv2Lduv6sHmZmcxME2HDr1JCof9S4k8v1FriryYTdHSrzNGZ2tysQTZQMJ",
  "key30": "3jNbTMxagKq9ZdmsVqbVByp8FsUptFYjqYJnq4UGzKrBU1cptDqhfPh6ZKFVyukgM5eYPRQGh2e1VUrrWxGZnUUm",
  "key31": "2Qu33AaADQAz2NgTBDKgDJR9npYSjcVgSFoTnB8pmjgHEibAadhkk5ovWf9HAvMRMvVB23GcQe978J9i8sRW6aLB",
  "key32": "4EcgFPb6NeXbULisY1st5MJzdFrRYvZTimrFaYN1AiygrsC3KumZfRqLYwnPZK4ESL43B2aAwu61rJJCBRJ5f7BP",
  "key33": "3nRWxmNFsP4BCrHPXeK14G1mG9qjnHrQ4rTuHeKpkWXWebnPrRVCqdRWrYkALWi88Hdw4tCpzxSQ78H4Ub1krgnF",
  "key34": "3zPKneL9km1VRXyfSriPrw17kvK5Sgvd6t291a4x48uZhUxQQs4SQYThq53wLnB4DPo2cGkY8nCZTxdyk9FX1Ziu",
  "key35": "2ZoqadxXp6YdRaAWHD39TByBh7mDZNSRiMAbiPcYRi3daqhbYeRBA1JDSiteiDJJeKn82HKj9rkecvGFAhip4e2f",
  "key36": "2zZBEAfWGrMYD6b9FWHx5gir8DHWSLGqvMfkXkfD5s5tn3dJNkUCHxD3DccJMQFaPF9bfUXDYenuYUwSxVapsaWz",
  "key37": "8pT23s6myCvMtzMxAdN9DT6WqcCAySzbnLeqMzyjf4XoasBwRNQFsm1ThWAHWQTAirDuLJ6Ar9wxG7YGfLdPrSo",
  "key38": "5vLbkC9rHHx67KoYHEGMYTZuDXYG83Banz8nKDoeWgFvUw62JTLB4KikvtccccB7rA2yAfvsQE9sVoma339S3y8n",
  "key39": "2UvStcrADc23NLUbeSeg1mNqmVRCqgjWectF7m6PYRR8CEXKKYAVLmGtZmZjuqD3J77Tf1D7jQkRJkfvcrCiFEFq",
  "key40": "4rx8oNYkA4vadvi1axgaZFNrdnpjzReh7FswUFeXMsbLWHvA56AMWPhix3x1pn9ma82A8ZdcZqYyPtkw3fTfrWFf",
  "key41": "3UdjQHYa3AtWfiKZhY5YKEXYueo794fXyxqhNsx9v9fiVmLQPU4PeY4Kn1eHmXhhyqMiCy5rmpTNGpAqS5SBt9C8",
  "key42": "2fsxAM5vsF1WiCS2myPZWkX8c56X3NdJwd2CHgGzY5bW4KPuMcf6HtHCQDNkfxuDXY8znnBNcHiWPNZzSjyguavN",
  "key43": "R5FcCgbVQobiCkhJJ5wSPxvPCddp6iFKC7yRf7JHn4mwHMckN1Fvb39WaJu6C5zPGadTXAgY14sQ71Vu6Q2VfdN",
  "key44": "3fzf29kQX8DrFDUqPG2GkAasNqW67n7eAecMtKYwAw4AUs8rXDz1AxAduq5RUqHRY7z4BbSbE6KyU4JUgALJuv9F",
  "key45": "3GBP9GpHkvTKJuZu4oe8zefQdtkj5RBuicGmG8p4vok4vy6qRT41cpKKecYcf8WTno3RLBtUNXgazhSMvwsbambu",
  "key46": "5aGbmW1Jr3KQqPpcRt6eP7cytYQBt9CmARx7JYsLghynmrbehbUwKq7jVdyH1mVvPGgJ9kb1kWdzH4Chdju9uTDP",
  "key47": "4PDDBqhUJELV3pyBMpNC1FqQtTSHBXmRJwZ6VmjFWdGABbdKEte1HMpYmnG5Uxd26tB7vh8kvhmZjAENpFZXFzdS",
  "key48": "41t7kAyPmRk4qWQ4H3v5498ae5niZPVKnhmEHQjAKSCqpdjpy3ExQfuG2LTuSeqX4inuUg8WGPEuB6QXonFDhkRA",
  "key49": "2SpE8svcV8gVxn7fkkYmmAVuvTLEKA9apL7Fk1ndB8dRMSCpwF6yrJ185jT1xm8bj9tVC1jRLGfTw4AzLnUBRdme"
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
