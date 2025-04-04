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
    "342ptbG8iGmzo1XP5id1XKi9Gn3ZC8MwJD1JgfUdcPh3BGzryFb8mT2GvcSFJeqq9egujaTSDWrpM1cxxEFr9xMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3tAhQXk2SpKsNmjRT6ofx6ieLmCdgNUkjaTAfduiBCoZMeW1Dz9Z398BLh9dTbYcyCrP2mLTdicC1VmzscgZ3Y",
  "key1": "3LtUAEsbYVZdwqWy2VpaP7csaFGaA7iLb7Pk5CNw1x4qnuYPVLvPGWpkKBz9dbRB2u5z1SxMnnprxd75xrgDJi6F",
  "key2": "5nyVGkySSGjV17WHesKSF67mbyXKaLYwX79BDdu7hxWbT67a8GcTFXF3XQadgYNmZnKFNWJNq7e9ad351z1LGV1D",
  "key3": "2p84xe7rb8YFWCyqbZ5j6Nwrs3mJmvPvofcrZ6KagXywFb9zwNG5cAHCjXgR8RYedffuk5WgBWT3r6ApySt2J3HH",
  "key4": "4s6uUViATs4AtyDVbexLBQwEfb8LYWwNBwe92FHkdTXoX6nhpC5f4aKavyrjWVex5M49n2bEgVpFkQEZb4sqAheE",
  "key5": "4ytX5YExy44TfJwik1aMmPdhd61gnpc3g2MYrLjnRzP1ZQWFLEQfRTd51vwxM4Tc4cAHYh5Loqv7oN1RAcubDXwU",
  "key6": "9pZtHLAvjYQ39XuUvfdupKvvqAqnbyMoWRXwh4Vzx3YzeeM1ynR694zifKg2Q4xpxanrqQW2tcCt1bXLXPZyxyb",
  "key7": "49FmcYuEJXpHUBgxfmHD4iAwhS6pvXyFXG3fimPXbBzHS8GBdTu8kFcVyBFNMomGDow3UeH56xakHVbxJfB1FvFn",
  "key8": "5UxRZnDCnqiNxx3qmDSy9fjaSYkmWj3D2RF8ojKg3cWvaFVf5RisSnHn8pja4xCsL1FMsLWQYYrUEJxq1t7QWgNz",
  "key9": "kSra3BWErM3VFDW35pHUQAPeREX8SumeKmVZE2HxGJwAEVDemk2ddNpZnwQg8nr8VspMJZocoU69qeRGfcBqsnX",
  "key10": "2FPpXck8Et549AGeJPxE3T9b4PAkkHFnrkM7mfHcuqV73oFCQtBWeHxqeMZyZQGnzFHodzMwVEqeHovGDRUWGvQZ",
  "key11": "5zttxvaXen97sKnuzqedPDHpLm7kuzZKmvUJkQNWMM5G8szmNi8nBBrQTjBfudgNquApJvURsGnff3DD5KZu1apV",
  "key12": "5cNU4Mak4CbfgQjBtbVu2NgByDaHVK85uz62MFu1Qcxfvx4LYgBxukEsz8KHfk8gavwuWdzGFYf1nckrrqXZWuhC",
  "key13": "5J2acXTMSU1foqSBmtVSH9RxsGooauZwjsrvCTR9t6sLPGzjkK1mnS8NKM67mgpK4x3itWzpDkj4KrcxzjCnxSak",
  "key14": "37isye2Yd4umSDgZaVQpxvekEeXvPHVPfmEPFrHDxNufMMDufMVCGZ9uNpJx1o2AK3td8L9EHcE4FNqP11Bg8kaA",
  "key15": "2fq1k4JgaMJAcNUnsAkw47CNo3ucJrwy9juK2aZYTYw1NTXWkeBgKqgbieSbTHosd1P1LVfb4QQG39oqSf9DenMj",
  "key16": "2t7goqyuYbTujGS1S9DidKZZEWuqvRLdy8gvFRPBtUL8HjLTJGNiSfxkk6zHcbS35L6PXePXbFf289TsVZ65NfoJ",
  "key17": "2KexB67HdtbrxeLvAnqGC2iyUBDwfzA4yNFNWFVqiQHbEeWbZfWTPfsfhdkNeNQXF6p1mKGiTXjtN1UQZL8Zr6jT",
  "key18": "286F4tp2jfUkQawGUfWsYkdJGXqj9bEsDe8sbnSPzx7WizAAQi9ScAPs9Uvsws7nGuC5sAFKj1Er3tySSFKBFdZ6",
  "key19": "4c61fuLn65sssdJPMfLKREnCeDToZLNAoEiChTFdgRkRjLKj5PFesLwAjTsDwTjHkVLsggJ2BU8GjMVWPNUgQthz",
  "key20": "Z9vbXDpXcTsZjRBr9cu3cvGeGy5z5EV26Vdr7yUtQCpFrjVYUzkTCTZvTz5DbwYVByUNp6UJz7oaYsskhu5iNqn",
  "key21": "5VqBPKfgjA8MhezsM5GQj5urNRoqmZ4o9wFBNbv6ftLPqV2V2GNehWFeDeWoqqbEo7ia5G5dEEhx3UBKbbf3UMLC",
  "key22": "4TJc4t3cMQFXEFPZqAgw7WZAktfGg4NVTAiZLDWwwdYoCvMY4fx1goHst1MRp58n2BvgQvf93r2pug3BZWVpmkUB",
  "key23": "38gkCnAUHfbV567uyk2PCbQnWPdfA7F8HgMP8vFUsxoZpXmrFZBxmqg7vtCim5MoGTvfj3WP6ycGcauq8KqKdnTZ",
  "key24": "5x2JkMck7j82gQQVBVZYcq9yDS3e8hokamepaZRCcuRrAzRtpscWNQxWhkVLArjr641ybHHWt4Tfx6jsMesGgPME",
  "key25": "2WiwqHTCxUn6zYQRCgrLoNvuqLxaZdBYnsfi2gpJCYFig6YYY2obRqU9FR83MjkoQAVjb7WmkQLMMRHwx9uxcCEg",
  "key26": "25f3Pd9NQqwT3v7teLBy4T7mrbyJRhRr93vNQNw4DYpaoXuRC3YdCTC9mcyHnZvxyrBJeFxT736uppSrVHbrX9Bb",
  "key27": "4Jufi8TE2MW93mnsvT2RKabBbA18ZCH62dgBwZFLDhfayPgmYexDbXofBc9P8392FcNAyxf5KW84PJQfBiL5sbi8",
  "key28": "4SJfCogucg5VTDwS6StbVCrD9iJjxmpz85DzJ7oFERshpYHN7H6Yxypvd4aRHjib33RGJ7AbNEmPewXfKMtTuQpE",
  "key29": "5NZQkgyTnJcJSc3zsHDDrxnU5SSpQHrNmKZSzzh7SiiucBoqcE5i3Tx37FTUstDRwFk4kXqYpHWzBHgbEXBGqNp8",
  "key30": "4fZjjxrmvBqCvzgiHd4WqKt8fzPAsS669vFfhRgYr9sn96TGvFbNiEaBojyHw5nVmPieUTwoBJCrcfUhALhPScze",
  "key31": "YpeoGvnodQ3cepF4o8peA12Cnvb4kQgWAcKNpKAasRD63NDAvat7xQuaFW3DVJPvKXQ77gqWVSJ6dyMHNPgtcTM",
  "key32": "63E67y29tfcwJJePJYxgBTgpTsXLaVdbX7ohggaEGioZsBjhN6oPTF4ZAgXRzmdeYZJ3ne912o5TjxiedkWTjiAR",
  "key33": "YbdX3QVScSxiGnpVH8gkk6Pr3EqZhZQ12jyZSag6ZNTB84GUWP4oTxLGWp82KbMaagDwDwrZvTYoE4MudZVcnK3",
  "key34": "31cwUARdgLh8CXnnb8H7a124KcVtwThYNdwHaMeTYa37X4kXKUTNHHW6gKDmLtrbLc3PQyfpjzYeEk5YmipXYySQ",
  "key35": "4rqpe9mcB5u53sksXydTzLmoM9TFWAzaF14npCxURreLx6ANLA4mrAPBA8pYxAvma8RiQjS7Fa7Q6TZnyVNDhGg2"
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
