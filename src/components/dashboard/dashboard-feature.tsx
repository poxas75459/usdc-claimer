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
    "5Dcpyb2QF7KXnArPzQvSVBGw8qFNVXimzK7BZzfNsU8Tzeen574K9iyLxN7788jeAqypsju45CYoQzSbjWYm9PUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QQpQhHF7ibXJZLqAXfKnrTme3avRc8rnZvKdNYCMJtzm7jDNxJX8fJqzvKQSEryZV63GQSVseFYfsK6H28F9dXV",
  "key1": "3tqySo22WdDVAkZC8mWF4637XzR7imZzxRQqACPSd5PfuMiL2MMp6tWZcQJJyZnT8RXjoa8AoH5mTRv76javTcEY",
  "key2": "3kLLyLzSti2du1wEZ3fJ9yESvnh4DCSN9fNubEa6A99PYs9VHy8HrWD3Ad899HL4gizKzxcTjA75ws1YsUrwHHvt",
  "key3": "2QF1Lk1u6ocoZzaicde8RNk5GLBmX649KRDC1hZS4DUvRNaYQPzEXTv5WSddKNgKwNCUu1j7GBDQmqBzpA4g2Vsw",
  "key4": "5Dq4wNQ9ZHR5hMRZETtrzhfuL5ahKJ5ehmhVFgbnie4JCCX2CqECQA3vN1Fmvwr1hf1G37hEZCr4n8ETNGpDoXCX",
  "key5": "4bYuAjGDKzafT6najmewP2jC73aRKQspH2GLADU3AcmftY6bwovevW2JbByeeGzaxn5mScY3VLMbeLby5WrVYwH",
  "key6": "C2axfiqPfkbHsZb8DcapGQdhb3vZNq4aAX8RX4em5X3Y4cTbkr7QFtdAXeR5YJcPwCdiuWumjAmZSJeeEoWLW4p",
  "key7": "5TQhda4qPy1xXkpH1YBUR5GrLiWUeKqV1dnc9NAihgP46WLfxMh1ZoDJZ59e2DGHpqD4hpuqKUq6i1hx4CMc1yE2",
  "key8": "2m1jU9JejMuUtyyA97YixrNpcYRCsG7PBg27RwdUwrCFwQcST8DPCTXWqs7M383WJvh1upRMLQaGYwsmbyioHgjo",
  "key9": "nDxcCReU5nXsazYCGD7goUAxi2kwhXSdfE6KH2UQsN4LJDFGGz587hUaYhNN3bTFqUrTxDcwHFQWiNpS8zEyZBY",
  "key10": "sqA9MYfnYogBXf98vMY3arv2rDiiyCcdRGzVKTcWLwUDVwfACeT2fL3176X1qeD4tq6e6qSVwTHfZMbhPqjEcZ2",
  "key11": "4ssPtGKf6rZ35EjDCCWQ21b9WEGdwhZu1NbyHZLc18krHdDiP1DyW8BXgzPE3WS8B6x87xe2auZMUeQ1iKt5HhQQ",
  "key12": "5JsEQFP46NWVjPMbGyA81frAV7Pf7ukQmxCdz6etvDpk6sbG2YMErDo6mVTFNhw7K3HykZTLgYrq4WedQFXq1dYK",
  "key13": "4Jsvu54k7GiiRiuJ8P9bpvZYVT8JFFRCos89runWztEeXmmt1Pe5QpanxBUd9N7oRcyY2uZVQwGubcZgTJcfaN7f",
  "key14": "2StR2vYaoN6GF9HTVReuNxYABcDp2SVuqjyasZEZto16vepDwG37TBZsoCCS9TcysdrkH4wU1LcoUrj25nUE9LhF",
  "key15": "2TrAnsv8p3vgX14tjZJtDE3jjXWD7LGcaehV4LDWrnmLgycnjSgcN8G18Uuhve21HEJcEzw7qgR66ZbqHXetoP3d",
  "key16": "6515PceKyeAXujP26NF6w1g2KZ3uVhBovhNuGp6zcHe4nV837dfcH6PAymrgoAKDv1HMGqppC4VrpxofpXUbx2pw",
  "key17": "2WRedDekffoGCbohTZK1z2mAPsQhot5fGbeBTNdZH2Ws8RSRh1KSxspsAucn3W2KZkY5gr7uut5JJf1F23GDYRkK",
  "key18": "3322rVys4w2jffWHk4SBXnSEbQqehpeQxE1vyG7zKsXxAJKddYtMHtcuPMoKx1GQF32s2wjmCcvomyMBCSbTyHEV",
  "key19": "3yTNFcAYfTzPQum9iRv2BbBQ8dBGT36J6Q2D4vJvMMZY1NYCD52suZUuGZ6XvvLX19nt1fC7fpGA5N8L7kcjwhxJ",
  "key20": "i1zZdUFgoRmJSXj98rkmHWdStN7znwRmHMj2ziphb9AqXnQLPygxhMozkXroPVskFL3XKySftZfekXyijX9p1f2",
  "key21": "5bs2yKnehMmNyiv3pdZPpXEqGqB8Cv9XeWimYbkFH2XtN11wp7Bhha53JRoxryo3GZgvwgp2KcLjhNRourpYwGat",
  "key22": "3599gTfBAKNWrMWi137ifajhtnQsX6RhGaA19JxjPREs1Kj8ALqY3VULWbHq8BrmzyrgwAr4nNbDKwE9LXkruT8n",
  "key23": "x692SiFje2iCASugqeiyQCcEPLabz6P7uLa75AYkqmSCfanF1YPZfCz5LumNuJ2Mmaa8w5uZChWNagWSTZGuHKD",
  "key24": "7WBhMLTkLsLtRM2nPETSkxwbzb2eynKCSJVW3USEHCGmqPv4ZYQrjdUbw16cv59V5FYgHda12MvRNCkjQEF1i82",
  "key25": "4Chr16EPJAZr3QxrWhmEtffMZKMZe9ZZDFwkmPCF9J8yjPrfWZjvMc8n8Xh38WbG2j4NR7gzxvTJi9yiT3WQeghs",
  "key26": "2nVxYdoYUt4CJ7tzuJ6cjbd8HxfyjC7pvwpqrHrMk293vT64bMe3428B4MxtQAmVGM5KGh4JTe2B399HUD6WKe14",
  "key27": "5uG9BpAR9mMzDbxGr6UkxqDvUTMesramcD4aTR8PBfzjzoLVak3HGBQ7auyzyqcSTDg29DVGLcWEhGDCiHpu9TGn",
  "key28": "3qRyxkMA7xYbttZ2oHME4aMio1LPLqxUW3MZjB6QGXaxS7BEnBJV51Fw9ukNp3XPdxTj3bDWgeshbc8Vp9EPNBxZ",
  "key29": "25J3KeQXM6UwQy5taW44iB8V54ieTsNcTGEDN5wfVgjUuDamHCkEPN2jhdgjaWQUTAxpzTBKoeSD33PPKzQqDSXF",
  "key30": "S4tQ3KTkHuZAagG9iPw3DKeZfFVe4VVtjTU2GJymSvTfexdN27X8NX5bV2vJ5jJyJMfAr2Bunvph8BfPUusxGQJ",
  "key31": "5GkMjiP8z66pK9eGxyvxXCYZc69UasNwFSdB8NaJQqmm8jZ6Lz1bMf5swfW43hAQ4FD8PnG8PMyoZeVDyhC3Pfbg",
  "key32": "35GPHsxquf5zESor1XdzsWH5xqH1W2V4vFsxFeT9JmKD4v5MYqAvw4rrQ7qGbJaDdD7wjwHGkN9XkxkqGj6G8hmZ",
  "key33": "3tNjoiVPrNhYzpBbkzzQSzRc3JxyJvXbYt2WbqSAL8PArETHoFXj5LyabPHYQNiMqq1JR3LnVCeaAv3U6ys3pwj8",
  "key34": "4ngc2y8FA7fYaFTXUCYSBuSwGxD4bquKiryBYV8NRaSdKayiqbchfg5FhUDPBeJzGXHV9ywhytbRU9reC31xnhDi",
  "key35": "5472bYfLDcaGLVQnaXkpc58DrUZA38R7pLicmLvS1a1BKwtyF263nJSAx99ac8qktezwJ4KKXHcEqWyKWW79QBJR",
  "key36": "Mz7gJjqzoB6Gf4Wbr7KkJYPnZRb8C8taug5BTv5Jb51hmcyWj7kESs5QpYTHJgQBdrS1pru3qJ2QYuZ6snQofnr",
  "key37": "5N5t6gtwrz6MdoYzbtqoM6J8aYNTGXY5reGFoRxfEWpGEwWdtwu1gQCyuYMPMNXtTjTXGTGfWS1XQ4T6gWxhjbrp",
  "key38": "49yvwV2rwznYQvHyJnePLLMKB7aAnJVwzqqUVDEKmnkCiaea7hfgQtyvJhCfEr8KrrBcKCQdiUqRMCmyEkab1By3",
  "key39": "2RyBmgS4Koi63vC5uhsp1feVKZKYgrMgHuiWrB66KngVmRhT4mxMrYYb4Xf75dDfsKCHnParCiQAjFk3VYqnvuMT",
  "key40": "fSSTWmzGJ67N5v3oHuMeSzjugM3ySJ2fiiKMUj1N2Uz2Lua7CwXZ6QmA7gH7TPkDbvJ8yt12PN7e1mrQKFiQbiP",
  "key41": "2io2ZjMYSPMjJ2ns7mbcx1t3axwYMaBE2HnLui28faKBKDttqRxYRjiMqFmN33kwiALxsQ5HzXUHYaZ9LoiFJ9ZS",
  "key42": "61fxwMhMD7mHi5JoRbxZbajtmVrPwcuMq7Q3X7vwzfScSXXRZzmufgzZ6n833KD3C6Qxesi34ViQn4dNypZSVZkK",
  "key43": "4H5aoRDwnbfrRsRnmKrAoJg8WjyzvtfzzroHtf4opMzwGkJaatGCAukEtuvqBbMNUTCYVVdxWHfkx1WSeDY8qrWZ",
  "key44": "3UQ8E4nZMpEDRhYWfdvaYNvM4HxG2dGZ8W7zeP9Lfy53YWNdT1TU9MfrKjJt2qbFnXtexSA4TNhN2KVCLEm1DpZb",
  "key45": "4u6roJ3W7Q4MT9Bx5R2v5zZhTZkRjYtescHFsYJEGystwYqWErkpCdzBMVugYEaEzpNCErFBbX3pEb4kyGU94joh",
  "key46": "26MVLduifqUoAxD6psrczPE5CqyyqBCeMfRK8gKPSJBZiejWnaRs3G5zRLUSsTU4E9AmiQNRiT2vf2LSci1e9aBo",
  "key47": "5AyefXF38stpGRtkfCEwFzLAhHWYpiRwK57MbxrnPX9REwXjeoiNQWjjvwawea5Z9sxC46s5vRqCuzwgNfD1BHrt",
  "key48": "4G25wXBGknb8kkJxHh2miqPDgVenthGwKmkHcrfnVB9XNV5CBrhGnGxnihWbJ7RVirnvoWsJ57w996TLoyJ9aKdm",
  "key49": "58NsacmLJi6LGbfms5rYzqW65yhvgZoq2FM1KUCWF4QhgHyGt46X6w8dchcCBoWUaZzrRivr97qg99kGkP53r5tw"
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
