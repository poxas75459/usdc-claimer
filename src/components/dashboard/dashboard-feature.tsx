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
    "z4QCtUEPMeZu3WGTHctqbRasi4zsvfyXUbHSnWPNr8dMMta4GReZ7jYgBp8BDxHoSijj56MKXUpdokymjp5JQdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q6aN9UPZVqG3XjxejVSmoYFmwuNHqSn7BUquUrB1t2tFsngSD1JG2du6fz9HfX7JkuPT9JCzVpmU9KoebSTqEyE",
  "key1": "rTu84t2Dz2Xg83pN5oUKG2hV7SQ4gjdkLJiBZzAQJskTJy17nphCtbYgoq6fxEfvXZM27HXg3GnT5vTRTVAGfDn",
  "key2": "45Bg7Uv3z6JeAkxjZ3AWJsbXgkvdKogxZ3kbvqi3UJs8GoC26SHfMujVuqLWeBVDUgHoAm1QB5L9Pa7KdnqrcE8n",
  "key3": "4V4nUtDLuyJJsr5RSpUuAbbqYHwVU6oFK83cSzMpzn3gPUjeFkUz8xu9oiaJ9HkS4AVsQjzZEzQpLrccy2TG7Lrc",
  "key4": "2kceTpYfCV4pasquPEHD8CecxtXGFwxVzbs9GQXAWwHevVSNoStM2KLKPoRBLP7zoSm19KFstyJ34FeyQdNjq7yr",
  "key5": "33oVd8WHG38brFNRJ5xv6U4mCvboKiczrWsfzrcLCUXunCt5UfCgNaW1rBdkujrJczcNKG7yxyQn6wTVj3UaRT2D",
  "key6": "3dta6wmNWipvJRKc1QDeoXdUPZ7vemCjokPZkUR12gHyEHeA7fMXmocZDkGs7P4GxQi5HsefFxtQJqcyMHisMmBy",
  "key7": "HKQH9HGHR16zy4D4oMEEVS8hSUEMmHiJkxb4sSZoM1SYTiTDyT94qS3nYfwgLAbeySFRm9D5UNZpS3tVfND5Pjx",
  "key8": "4suzUoEDLpFqarqwvHwhHkYP1cEQzyt64RmGob5ffts3UU8L2W4tSqxQa1VsGJbhmw8QjzbUTTBXsVk8z88cWG56",
  "key9": "3QanQTx4DPvunsenFAxaDVbdYSch8zPqgJ4P6RAhvcSfPATUgPfFAHSWPhzG6tq9wtpbaykFjTX6uf6rs9ttVvaj",
  "key10": "2GZdQhWYKCNxUeaYTNNe3RpkHA8p3Kq7KYNfKJreTEy1bqbYxGEP8nfXijZx8sFojVKywCELt4qVgxwf3hqos8GG",
  "key11": "4rhip6JmTv7WL6HVgRufNToz26xauBzWdE8QZvkqauRnqHw6fWEeXkJpJmMzC9J6epYboG1QNUuEiFHeZsE4CPPJ",
  "key12": "eL1k7mkgK6vwrwhgvb9PcHz4pJSXPvEtKrdr7FeWmKWZqFUqYsiRFPoQAjiuJ4BNcvvg9KQgq5hma6wBQdeRXEZ",
  "key13": "47arNV8AuMwisPNs1CPEQmsX23bH4bEQHHftbtZavwmYYCfqEKiDLRWDvWwBEcigSxqvcC5F2VSBiNfq5Txuypgn",
  "key14": "xp6enfUx9rj4TCNiStWQdA3ELPBbs7WFFFeQVKrdVk6unyRxzmFBm1119E5o8KLbDBE4EWXSwUoSg6JuZYByUsW",
  "key15": "2GuiPqGeL3nBTNV1GB8Xoy1bC3LMife5RnEJUP6aHfhjDsrDAcHFGfLdRdR7VVVTXmscwv2aMxPb7xdzL4MDicdN",
  "key16": "hn1vTEaxbCeoP937MQFShtf9R4czULLCJJbGjK35Htc8kAYPPyH6KWdvEAbypt5embvMZPzTjjuo6x4S4TRPM5q",
  "key17": "4MdbVXfB1tqMLGmQoZsPyfzYp7dxw7jrDHStd92aakEUyrEv2MSKmpun8Kp5ox5bd6dfQdTV94aG2AhCkBUbK5hc",
  "key18": "3G4r2VfujYMg7wu2MVZGckgY9fF6oe36bkMadUoUBenkHfki6QUXNEyct1DzdJ6sxYYtiK2ZpveRbpoM2Mx562uX",
  "key19": "4BsbG5QUGxRJt6R6Nqv4F4LnVzQL1je44tey1rcTCkiDAAAi5Z7JXJQgQUNiCttYp4VomBzZCm6tMz5u2Jz6JC1H",
  "key20": "3RJCTAALakmGt42V1MTcDweuQVCCYYT5W6MgsNjB1jnLS9Ujd7dDAd2SAx2sto7WnaETwMvsa4VGE14XtNDBiUht",
  "key21": "24Hz4kozALjVPUXHvWTdanXLCnQvfFjFsLgAaLyADhxtv5DT92PkabGxe9WMDbhv48tgS8pdcYf9LBruZex9d1EN",
  "key22": "4m3ZtEPSXLDv8KRB3cZnXdcKFWYGSBWpEJgxcgWUwaXvzU69LYv9mJwodvVy8YTQHgKCZDhquzU5FzotegvjNzxq",
  "key23": "zaQenAiFfVoD4HLAQvk8Ta2g3n5Mo5UXuBYP3PmPzLwNzWwybGhYc2siCNeCPUbLThUzQFXjtMRtaQSHeYvj62b",
  "key24": "59Zgyh3U6sMG6MrXjPfH1UZMdzWj6mrvZotqtVx5cJWztn1nqDBiNAejRYUYNhcVxmfcez52TagKPauPmgcS9FDo",
  "key25": "4otsMpyvKvpvRubgyfLJ718BgwPS5KHdRXTrXJvyg9jHpMHGfuoLGKHhWHko7iyoCKoDSiuyZ989YdoL52eYh5n9",
  "key26": "5Hz5cT7EM4qhG6di6WLbd3wSCsHKjVyABW457vy62o5ZbFKh9o4j9LwP2iWvUAQs6g2Beua2Z1qppLJ1vrxkNKdX",
  "key27": "4W9jkkqjS73dqv6eUm1dTiS6r1SvujXdo8XkNp59SwQu7yDLiDxBWmJwuwMBGLeTShPuL4pDw3L7mXrMqr9fHuLJ",
  "key28": "5gN2gUXLEzysnveMNFCYhU2P2BM3beqeBJSVTqfffJ3PRPzMYL4ycm13MfPLUMyh33ySposZfqYxGcZG5fdYqeq3",
  "key29": "3YpGktCjVcSP2fRsa7PP4gq5jWqYcNsMiByGLKmvYRf6zaR1iFGwAiYiKgcBckWW46Qr539xws85QbGs22QLcuYX",
  "key30": "2V5akjYGioWeBrjrPCNPWANeAKc1562DoS9tgZPhsbw9GyqnFJbBUNgRiXfp28an6rqZ2mANASmPFc4DxbXu1yYj",
  "key31": "4voYUDq4fxHwaqfhLbG7Y78EsByBJCfzBUauqBGbM6CCHB97pRU2G7JiTrAbV9DpFyjfqnQPjENirZJJtGHhqgtp",
  "key32": "4hRUsWQkncE7zs4NGskfNHNciEw6cVxYugYREe3bK2owLUyY3wWvLETkefxXhzf5KEH5TuRN2UTpyvwknBXAPWjV",
  "key33": "3oq3dp5KgJe2FQekTd5yXEtTo6gmXY1yU19r1D4YJtBruzB1PvTbUFtxHJEcfQv7uSPBARZ1TzE3ZJjHKg1QETXd"
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
