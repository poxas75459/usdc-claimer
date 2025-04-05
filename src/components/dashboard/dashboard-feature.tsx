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
    "4x5Spcw7hjJVw4B78YWRxnFWuRAiBrgUTNSY6LW8wJSVULCRstfVTGkpybVPb1WQYqDoM3Uz1yGR36DAxHBy3dzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m6S2pnavjWzHuPPCnmj96p5WzVjgSPecxUKHTnHdeeuenoUhHhfajmpcxdFNGXxMdwPPb3uQrmrZTfoY68qzbch",
  "key1": "TrQzB2hMjHBj8iePGkFxCNTchyadjfRhKoX5Jx7sqrhCA5S76i44efpAtrgLoaxxUGK6MA264WE8oQ5DDmFMWpz",
  "key2": "4o4vnSFddPCkeCWCejva4cacfTqHTFC1k1A7WFAi5XKyHrMD7vWEc6Cz9EeuqXJvia22E45it3ppnBALkbXPgJRt",
  "key3": "4xsCqKKnqNC7psYYZUSyopvsMgw3ctEKoXoQdDsMb5RBH3R4sGN6pgGuSYGWz2yjHeCWjkkfjoeJ7yHf88Cr6p4u",
  "key4": "2vKYcU7WzhgYzu41b1GCxnAFi89uausbURwH8rKudnUz5A8XoAqrd9g1vW95chnKaoKjG1MHDw3PAXZLPQ3wRGcK",
  "key5": "3VzaRgtYoLrsCNL4CMe3LQCrC25CtEen6J7hsVefyGQFX7Sizw9Sdmz1pGUSVzCcHjo6EPjkqJB7UWLkY9aXM8Zm",
  "key6": "3tUCgL4N2PhEwHE7nrs3caH7sBmQrrJWFLgR3QWwCaH1q5o8z1CknXBjhLDQKZ5EVG9W7EVwvbuEcKnFvXEMgZpC",
  "key7": "65UKu4sUadNz9Zfy3LiFF6HDrA9nP16zXJRUDaeBvYrg8oDNKk1wjLGMKXS9y57ttPD97z3Jw8gpYGHmfb47ChXD",
  "key8": "5xohbwqAuoavMjcuaL19zaDxiBKeZMxqQgyREpwNzPfQBJzq5Hqf6MyFw3HwXLUQtELS2f5zhcYfeKBkkmH4zQk9",
  "key9": "tnBVD1opjsgdBQUsAGDnYiXefTXZqS3VwDxPcUBPkNhfHgPTqX8Vbct1ygs11qwZMWrQzsK4Fq7A8x6ZY6LXosW",
  "key10": "34EbS2UFeckXdnSwufSMGcJT7KqpHhgNraLf3PhxTjyQEM73CnXKjubV78YKMKBnAz41ZbwLMrHrtAtZAFa84cYX",
  "key11": "4xM2xCw3WxnYeY8XZrdtA9Xn6SUSiJfFrecvsE7eEfakASw3CxhD914oRbyKNCL19VwKGaFFzPtM7NHdgV42MSUv",
  "key12": "4BwV9E6NReAyARmGAkwMNiUaeVzpd8ze2r7ibNpm9qU4cGgKmxd4gLnRJaDGry2oCRCbYyMFSDxk4briTLzADcyR",
  "key13": "WpwTgjBCtT7TEMy74y2Y7q8Fs79kYbp2XUyMaM9K9DBijYcfdcTX6ndR4BAanyZZZKErhYJfHBJZ8NTAha4QECt",
  "key14": "5nYycgSTuH9hyN3cbEk9VC7peqLwHJijkqdWvsb7aJzB81RjmqULJLnk4hNcPzxL5HJpV4NHmjni4e99DRSU2rmp",
  "key15": "4WFcqLXXXXH1MrWbd31shrBEi8jR9au45rJ6zcyu9Zr98hiQqEAt3rPQ8h9jn1VFxdtSgFvCX5UYiCvTNC3X226r",
  "key16": "4SoHs2r67v4r853yug8ckw3BCxm7a8x7GsQzArfmNkdQMEMxF8aTuNjCfx9nWZiL4Nw1cQtGo2n7UoK3df9rcg9X",
  "key17": "2PVUTpK8Y2L76Zq435FqFrXMvLVXKtJFLvTEdHxT648gLHEETgHvWD2tE8dp7vte2Eo7dFs1CBcUUaGHzfEJ1Sn8",
  "key18": "RBh9nSz1rpD527jxeUv4KgpRLBS5m2bRX8GUorVCzVVamQo8HauCd751v9KqtbfJuH6q3J88Ba8WVFiEPQ2s4dZ",
  "key19": "2EqxbUtLigwuRum9EWdrgJrLVw4YXnJKyt27WV5p4gh61iRqRsobpy3so1fCwtHwjw4EsFeDsvJPwjLpvjDEXDKi",
  "key20": "5LGwTdE22DjABcyHbXMQxwv2C3eBCeGPC15hfSNhY9C7p25pyZTLXu2T7qXpPmyg6oKUCcoqzKWrYCdHVrKgnRQe",
  "key21": "4XFczV7Q754gnf98zZjzS1Y5SVoEt2ykuYovwJVUWKdmaMvEkrR6vmKzLXsMKDA8H9RPJMotSCgrv6vKgWt2ZCvW",
  "key22": "5oCmCrgbJLbzTBPnGsiNT5pGzrJpaygSdWg44hDfDK77tLWXgegJMkMQ6wV96iYufAQEsB2uyMb5MiJvj7y7mtkU",
  "key23": "4dheE2XmUCt3HNmh1S7VsvHej1XsZ8mmLWPcXQ8pBw11cLrKwdcvyueemV1jQ9zvrnouRMEcH7fMpRJRHhtNSNj5",
  "key24": "4dAc4kXJkY5PwYq6WaggSwToue3YniJ6HTSntPRUYfAjRcMkisj4vpQr5DqXeAEP6CdSxfbCdC8yPERwmvGvNLW9",
  "key25": "zsGhrkg8XrwjKs18zNGNHDmf8E3yaeWg4PjN86eqDydVqpFcuDXQctqAQtDL1UsDNbPNx41ZHpbX4QNQx1e5YSc",
  "key26": "2Dk4yVGbVdhpw2QrmTvZHjEiFt8qTeb8itiBKTvd7BYj2aRoYnbTfdr9G2vNanAS877uLcZbvmokh1ctHJQiEZXY",
  "key27": "35q6NtCQu5LqPY1w2djnc19SKG64Tf3vWKr19ZY4dgKZ2B62utWqdPWKoPeF41DFz3WebMYHjUVhYrdvbUuWkkem",
  "key28": "3GSRLp5MuJWsuyPsLd1XMFSuv714kdzd6GTmYPALpio2n5dWgZpsg87Zfx1TSdQQD3GF7kjftpHHDnTPNDzBsQ7G",
  "key29": "5aWXHMw86YW25BQ8XQLYmmGHo4AFanNvQ1ax4ePvZnJ1XuK9u9bFVYNXH6CQsXnLCfgYeRFM2SfrBHmN468maCss",
  "key30": "NpyEgJ4Sk9QdwrjnP4kPEjrQYDuXimPFpCTkDCo3RwEcynT5Tnvn63Q5wNBWGmi2mYQrDLJiNvzHoEe9fU1qTiv",
  "key31": "4Sdbin4yFZVJiz5oUbiuunqeaoeJEJg6o4zkAcKC9JWhemKsgAgqsL2qcxBiGCdvdAYfjzRYgamUgM3Xw7D54TBN",
  "key32": "4TfwAr9dLT8PtdB6s6ny9Qwe5rDBQ2SoyNTYdoHhqBRgX1UnyyXwGW5APex2uwM8pdpLacVxbcqpLGSUYZiHJsZq",
  "key33": "2jcTMdSviBXy8fH1BQ7nW6HynuttbHTJ5JBQe7TopG56EAhmP5x9d28M5Ebu8MD8dFxvrwdN9oTwKftykE93xXZn"
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
