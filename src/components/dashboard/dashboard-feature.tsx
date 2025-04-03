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
    "615pbJrYAwQEEZjGoDPrqhYD7McDqyroF7x2LDyjrL4ZqzRvtpbC4Ecepj2EUAWbaqAxMJ9ABb6x2XEV7VNJpYqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ATcGdTiPiqoRaWaRhmEMd2JsVeXcK4yPZKk9K4PqD11r6S6vzargjqfgAnpX2ETe9rnPFVVmb4e2jCVSgvdEVh2",
  "key1": "3MYWY58LZhZNNb1mHyDb3SbYjC4f9GRZi7c8TTRuxZu3fio6JAWYV5qpJHCAA47VEowmUanbheF26hQ8BJ17poUL",
  "key2": "3r7FGz5px3QXp2DiES8B37KLLfYrDtuFiH9acgvLXVzxoQL4vsYAJHsU7eAWFfCHssv8oGsNJrr6jdFsBUTRYm7S",
  "key3": "4BFdmfSYEwMbYcmi4XBJGUCFAw2uMvYVB6ysML7S5k36oTrKP4cFcPgPVZT6usJPkg4Xmp13WZiuXPtKnz9nop1e",
  "key4": "2YwjUMM6b4LHV9wqhAnYLDSzXgZtz9ZRgEZD9DuQYzca3mKzTXSyc5sv4jeHJYJorEZ9B7d3AnpMBU1g3LeTMVKp",
  "key5": "5iLwQcihfdnQoEQku5NedRAbSmLoG5AEY6EAxN5uBEhRXBw2zTDxfzVVa9cBrirs41wdyLnPDsu8N7DCkN7bxTnA",
  "key6": "5Trc5rucLhJXsxRK37PafqD6KXq7Z5wPmaAiaHr7cC9eYdqGUD1ARSQ2GdZHjEdGp485gUh4nBezZGvto1mGefzJ",
  "key7": "5yQGPiBfYSnqqhZgv54irM53V4mhXLjdaEo7zMRCi8fpo6FgYRYmf9gvaZ6wzehJ8gsHpBB56buUYe59k27TtYVG",
  "key8": "4VERTqw4PPgGcW7i9zNNYy9yN8nBrrkjfNMVHwf4TzKJLQ74ZN69qvXCzUPm5unhwhoH5rf6L52FjS3LBUp1aHsm",
  "key9": "4Cz3j4v8eX3f6j9diZKRuzCcupPRAzA5XsFBWikk5h4fvAE8KaUycQ3HimVmX1aJ5B1doTnXGhHbNS7za4gJ6fEa",
  "key10": "t98fxnAeEB2KG1WQTTf8dw1iL81DPZMTt5c2gQg7U6tdVgyk2Q2Q7jTebDttAPEwgmWVBPpmd42Gaqs7n6n4o5V",
  "key11": "31UzbSrmgrzUMqBdydkztC7r5ahvu49QPNDq2nCqigCphnYevzBgJAiNrAB5tHm5CdBQhokfivXx26EQ5FR16VGP",
  "key12": "2mgBHUQzKP7xSVQVdowsd6M3jbhaMVq9jd4U1FMsc6yLL7GiUJmPmpBaX7e4tqJwmSwcBBAnLS8tUYh2vQLnXrDa",
  "key13": "4JYcjDPeVZ5URa3D6bECZQVbYPJqxWzkEWj5h24eWkFcPVimeEBcMBrTE789Cj2DCJg7ALr9YZYofWDWPTSDAc8g",
  "key14": "5UiFxcMW3kXfFz4c88Y1dugbAJ4ab26HTUvttgbfuteTb2n7zrrrpN1grQvrNSUvGGvA4uoQsp53Hapdt3wMrkTn",
  "key15": "4DxcMWKjfvqPwdCt1pwe2k3a6d1sfhVmjeovf7h5gbJoTbj7eXzTeJeEwvUiYhDVCZp7RktetDMWcQHWVYKWpDHf",
  "key16": "wsFL1KquDciSp9DmWKeCVk1hRVbN4mKuHU577VR3X9CcvaB3aCvFXMVrSq4KjvgkkmAzg3cXSC9CW4vKBUrkfaW",
  "key17": "3HhD43K59eZw9BaKftbn1fTpaxCVbdV3LCzNWNbeAj8ZV54NMpu5TaUNWXeQ5sEvndFR88fAfaPS4bZEFby392kf",
  "key18": "2RDUdTuafmMjAaKHtbh4bDMWuJgYN9hAxGsWVuFUBySq4rAPov5LBkEEnSXRaDC8R7pBwFqcBhzu4xQ44arUiaCg",
  "key19": "2A6McAggHEeUQokCrqS6RXT43hJvfAqQ729UVHDbhL2UgK4bCteU5uUiBCok2BKhiuWa5Qhx8DETcko8vnnRqC1U",
  "key20": "37r5odCVmQ3HFECPB8ZHDwrs7SzHcWcGcRgptJAfHu8B55wueDd6xtpW7i3VW3e8arwF4QoDgMnc3pbh31J9KRbB",
  "key21": "4TkqMyqSDcP7APaRsjGeGccPBJwJsXz9UJcqMMFwSAmetmCDtxRQWSnZrHGFULWLMKaJy4tnEUEGDEZqFvdoQhK3",
  "key22": "467dXa7UdHvb3RyUj6me5sBsAquenz3Rod5jLw2PDfRSviNL6CZJeXBK39CZS4nnpzxmYve4FJYRMhYJcFme33Ka",
  "key23": "66ctdLNB2HQPxXA3dbVcokSS1JP1MuqoK5xqQf6MningpJSmfZix2YgShCKfcXZQUvpLsTBgipk6P7e8CXW1Sud8",
  "key24": "4bvRRMK63BAhTCYNRoHnW8XCikKfH8HK3TroyEfoGShv2v6tUsAij6GCcAYMizCbRhX7vGMtg7pkCkJ9mmGrjRiX",
  "key25": "4c1rYtwCatsXLLaQWgj9wjsRcN2RMkNnpZCPXMZaqJ5RWp6zxhrGTStp92AsFpN57Kia1CeY7TtV4kbhKjHpj9ZH",
  "key26": "2w81LGLoKa679UJ8MFVRLUkPQc6mQuvmoAAomUvGYWyWFrk3gR1nxknkyuYtkd45PTPFboSoJ94Bq5HJX6f2khem",
  "key27": "ogRxDmj7XTJD76k5tL3omRDuRpRi1VugCu9of9uVx3n4YFQfsuBqdotKtydcZ4dELuz6cc477PSTHAe8NhG7vFD",
  "key28": "3UMa6wEew3cmKf7Wc6ovu5d6bWarB2hHzHLirQxMCDcEdHyJs7ugjNJAvTUfLzsQMAUeccZqYisbFBzwaStm4bo5",
  "key29": "5oB8NVqx4eLPsNG1kwzYcnATg9WXsmqGyL5RT7Z6cnqeGMK8xPHPiDwkxEFgbCUvkgp2T6zAY4d9MMndrrWga5Fn",
  "key30": "27hRXcgkr3PzXyQLBDtmbjMrxv6b6bgrWrXMyUvBAj9gwirwh3a2e423nQxkzWJ9VeGacNW4EgCeqCPRtwmRsw7P",
  "key31": "a6hiW3X9PwhMEY4kSjuYhkV4pHiQnH83HNPpyRnXqK8oGPruddKA7YoiVmatq98Mts61Czi45hUiS26jB6W3ENx",
  "key32": "2HS9rvBhWnp3ChBa4iL2q1WdCvBoskcvu3ExNjEixcrbz8ojcLa5yvgPB4jeNnX4mLaiVCUynYdcDZCTkKyHQsFV",
  "key33": "2iafLgoNbhpoN5WyRBgeRvTjegge9EXfSCKdD6qYsmuWXQLokbqAJrHHLB3e3qUgptAkU2SuGZhwy5ovLEGPcMhE",
  "key34": "5MS4tDTbvgDqRYjyqxHEhjfzHqNwyDzR6gKLyN3638gjUN6sKJxPfzY5W1VenCP2ynPhLTkjJNZPhV9S6jDz9PS9",
  "key35": "a7BURyoH41L8pRHGE8oL6aq2jvuzQ8XYCa252CMUhrt4AVSo5SxMxLYvwFHiA6rwpnLmCjgNdEB452sAg9waAph",
  "key36": "BeXCBH2YHd7AxUo4RvZ4nt3daxk7K6oqdH2N2Tii2m7PZXfqfEty6TxBySQdEJuU9LyEeSjvVbcSuEHqNB9VGAL",
  "key37": "2Dk2u3q8CwrWVU2JnKK6oJYsnWiXgzy3uDaHXs2NYVfCM8wqNdZrZXAJPF6N4MyJZSg2Axerv4UiUX1D3KeVVqCZ",
  "key38": "4kCsdqmMyt7vPDyXo4iDfNMZsWVk9TrfSMJ6uu6ETsxoh5ZBrRXF5Nn5xqW1oPDxKTfBuWDbxcLHQbUoAdyK59m3",
  "key39": "44QLYPcbeVnRhmJ1U2Tbq2YPSKPcK8rssXr8CEonUvaSdqYZYTzEssa5mJEgmYvjUNdLuQ37ikaKZpz2qjYyEv8u",
  "key40": "3HgZ5NeshtZK4jc6keEkD54szHiKa4QRLfDzh2wjofp4rTSWHtENqkYy1H8pptMCJWJ7oKxXA9DqFWjKj92SDq7w",
  "key41": "5UvNoRTbG1wH4sMt9pXHBFSrWakS5F63qU7tty1Dn3tJrMpKadZCqisoAHbtmYu5oaAR94UCC4F1oZUio2PfQJZA",
  "key42": "2eTvhRa18vLfzWsZWQHRbpdHxi1PkwABAs6JoU3gvPAnd46j8ve6t9pw1enn5dT7LpMtWtHRNx9FGqtrTiW4fw21",
  "key43": "3JFzkFF38YbpgXuiZ7s7A7pjSgu1LK4n42LJLHa2RreXfLhs4SQHqDZHoTnbeY9rB5C4BEQFJgXMZy69TbBqE8Xo",
  "key44": "578yFnHydSSuEtitJw3wPD1FkwunA5EWMG6CZX2YRkRsnUjbMSo653iG9cd1zic3gaA47UAFGXFy4wr25sTga37L",
  "key45": "4voJJKPdwb2mvSo2MW243aJJVTyVNgFN33PDc8faeM3s88KzdkSZTphc3WPJ1vUy3HHuMJQdpUSxcdY5bPY5mM44"
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
