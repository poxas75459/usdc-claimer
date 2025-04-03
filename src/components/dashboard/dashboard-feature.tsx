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
    "65YL9Q6jee4NcLqtzBafXTT1JnCvmfDgSotqYnSE1XgjAK8zw2LangLwXkHgBnxsVS65rJ6eEcwMnpA6xxzGihAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUDC28e17kxvgzbyVSCy8VaM4SSCJruZVFdDkQX7DyR5ipDZbVya7LQB5gv3itWojeKZXx59VpdptQvFDmNb7bv",
  "key1": "3wndD6xacFfywohVtFZJznuDoC8TZt7tZqhrTrWf2ZmRUdbEYmiZdYjcwkKabp7JWfdqjcY2CNWuwwLEHXUHTsLh",
  "key2": "Dh8A73VseksZq8JzcrfS9iPEe3zhAu6AQ3wQ7iayp95jGQc3mPJ5Ew4tvZTxyR2DXU51eDgsXbcWmQfTEWKvNCJ",
  "key3": "2TNTpUGezsdBDz6dqQCE5CkuqRtFCTVL8yjSFkcbemE6mtMCc115KXCdp1KwHejDaFhoibRhGCfvqv38SSRXXact",
  "key4": "WeRYAR9fJiogm6jsEuM6oEfhHT4t6aSX1fMbG4mLawd3hxB3QcfWnQVT43QShoY2PVPqL4kx9n1M4wRtuq63jbC",
  "key5": "3KPW1SHZ6bm2rGHuq6kDTeSa6NQR92DEAd8yCTemsahcDLjsXZSSkHP7VMQKjufW2yqjQr6AyvHHFm2XjF6rnZdi",
  "key6": "2ho3dJ3j4VYvTAkwXXivLGH4a2Gz2Gsq5CixW6PGiRyWe5i5znXxMiAQoa28LzToQoCrWDRzFU1zQBu5bvXb6n9R",
  "key7": "48itrjtbRMzmYVFQM2JNPYRyEffqDrFfmA36koD2czZwTdHhiNqfgwPnRwj5n7r2GgF5PtSWzumaxoRAJv2xusJ6",
  "key8": "5SPgerWHs6xeXf1AMbrZ9jxT8WtyiV6jeLsabS5WcRB4oAh1NFCzxB8SSo6Xf8vHuzki1yCzmnjUFNhhp2PZRPEf",
  "key9": "4Nc4ZALi65cnS3iJjeh1qaU3zoL5bDBbygiVfCvGHJorWoUcHRJuWF8tp8cr2XBMsgYjEVbEoiX3tJLTP4ox53zr",
  "key10": "hUkyAFvtxuCjiBZpnE64N51hEdgkPyCUrZu8eLhetuDLEkzJQrgkGrTsMZkkTUmpXuZxcwRx8LzrEBTabrH84KR",
  "key11": "3x3ZK5jrVxv5ftfWh25B9wtznBA59VEgmoUgHJukFoyEm7a3zjnVeFqCXYcbC9F92BszkVtEeLboxQXNa9jCFe25",
  "key12": "4P1NqLb3ADB7Wn5S6RBj8ahDuMq5Cf4iJ8GUmX3hwPgCLAnhL7uTE2UQ2r5ymspZUpci7x5DCBZMbsxN5JBeimUU",
  "key13": "i2cxng7seuCnWuf4c64PjCEsMrHbaqU3rqqKvXEkkSfFVJ3yCJMnDYxHi3sD4pinxWm4qgZwk7gMpsjBbPxPexL",
  "key14": "5edDw9xH761udnLWBiC3ZixiPYw53bmV2o57EZspXn9gvk7QJKZaTL59QGFPSukLKcH5Kq4UVGVahMjLqKKY37gJ",
  "key15": "3BiN3xFWurMq86nvRrHEngFMZu9mAmy5eH3hoXLukQDFDHDpH6rEt4ZjbgLV7YENXDaZnYRYLNAVqE8APXpXqfUh",
  "key16": "iwaoA3bYYZgSPVwFjaJtiev78NEoKvHVM54w9dtVKG4wpujW6p8hffcUrDh1qVx2mRmgCyYDxXSV5UzW79ckPKN",
  "key17": "67846TUNZ7wYPmuyKnm5uSHussjkYT3hQXndAiLZFjMRQZk5gKSyDhDEHT5K33JDZUdHy9gjmnzvmXBoj4vHAumB",
  "key18": "2oC1myCke9uFWoszUBGJ96F9bZptEji7UghACmbg8YwsXoCFLTTwHGxr3ibU1fiNeEkcYLJftQ8if7ZGrPQuLk94",
  "key19": "4n1rEVMAa9rsEXUc1fYpJPC4C2VEkPvt4sQroTesLC99tkmyn7upFCeFVDHJzHmW2KXRnZXrwD4CHyfX9xHfJpYq",
  "key20": "33Nx9fFfqpDXBJQTbqFE3WNvXHiGCT4PjAKdE3CGwfjTsFXnNWa9qHyVcZH8tovfgeUjwvuenGWe1TYiunkTEDfy",
  "key21": "2jfR9bCtkYscV1ecZJaFASK7XtGZsKs3rY1Y3YUCfW8y7d4ENx39eGaSuwLygkApNEKfcxchCStH4vct6kFxYvSJ",
  "key22": "5EjdoJX8smL1FNAJhBmmJhXev2BA5Mt2zs7YEap51qjE6bujHP9iuRZEPorgLJM6jqTherj8jWtauHqJGMVERRNt",
  "key23": "4TDDP9hrRGRb3BP8EjWuTo4CeN9fvwN3Nh9Hd7MvATwjHrD6UwWhZr43c5prG5bAdpvNiJE24F7BCR3QCdQVu9H1",
  "key24": "2fXgNtVSzehSvhQf7g16WErZyTia5AJpdq6Szx5Shbyi6bBdZGoU6Ym2AF9pMY48UtC2i5yztiZWoRpCU2WWvtuc",
  "key25": "5fijAT4PJr9PnRkZKNiogoQdhaiCzMmTGRjaWY6WH5HC6sDSp8S2DBYd4ahszxwQ5HGscNzjVATWQR1K6ndLc1gQ",
  "key26": "YJnPahvomnD7Ng3Ab9tXENjDz6U2o8iqDzCSsj1B18s4Ks6BtC6jbH7BdtW89PEkbbSjYUkkJuSgfwY9vLbnzb8",
  "key27": "5rauLUQrzAnXWr9aRW32GNKSGdciBd23okw9DhJwHbYyssWFNaawkWsWYfX7NVP449dtCyZiPAingvTzvcGUThn8",
  "key28": "3gcLh68zqw6ZhT8SXuMfHU3SuK8ukNyWku5mpSFDwkoKHvucqMuntYBJfKoWNrJgoN5LWHZP9oPLEGJGZWA2nLAA",
  "key29": "3Pqec7aWS9B7DjEtn8PQ4Bh4fKgLuQAZx7og2wE59ytuFVqTq8EWdVrNvAC8WxwaSNT6V5jLcwwAwvPdptB4xvwK",
  "key30": "45kLGAT1179rs3Hck5uccWeMbKe65QUyZ255nQ84pMNuyo5Q7USWpSuJRSBFyF7Yo9nx5YVfy1ve3Bw2tDvuto9n",
  "key31": "BJfig44YcxbhY2GCVneSEFZyWZZ1QVDZ6jwoEnb6EpaMMWFsDiwdrbvEsRJnkjiuqNjbH9jLPhic6C1pb42raVC",
  "key32": "5d9tacRR2vWPGxYMHrk9a7tJ4hhZhexXCxR6KKtMhYDUK8Dc6svuGeEmmpvB9ymSuiSeYpMdSCx6zq4hBhEuoj8n",
  "key33": "aMhi5y8umVSxf99UzeaSxCCpwNuUT4rd8tCwuVDNCASUkof6WU8oEm1rvw2jNHN3Yygd1z2UBMEv3eR6E9pKMLp",
  "key34": "3ftBAermDDfcSbw4XHgK1UH1drTGRtKWLdq8TZX7nKFvFZP1NhT4nCBysrTNAY2b879b6U98DLG89LL2iWrLzpcp",
  "key35": "3eL2vaTGwSnbuVVhTVz8XG2uaxM32EjhFoxJC72MjCcBpVZtXC2ebTid1cXJPzVWmyi4hdkR38tnQhRjjaw1xFuU",
  "key36": "4jxYcJCTRRKCj4GE3ykzTN29WrQqCymdAVNxMRxzxxnEuHw4W27R6pWvfYbc3AJR7tsA1FnTwVbuAMTPuV9L7d5J",
  "key37": "5FPo75TWqxf54s8Rz9DkEwwrmd5bQkmawrm52QZCrSoAM55ghmNgtgkMqEE2amnbdTiv2FVrU7iupbkmMmPPH8KR"
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
