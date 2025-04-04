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
    "xkqneR9W2eYxgF9cqMocNo8XyTk1cE4fgKZrMq6qanzBSAN78sjTvPof6rLq9JhfkTVs3cPiQ7d6v4YaXkX5yxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VAqi8zQrenUzpuLtQRy5tvxNNn5uym6BFbVXzugv87mEimRaE8RTfhdAiwTPvdMjTDY2kZVttiAP537hV5kmdqc",
  "key1": "4K8S5Z38iG577wzxjRQV3QGsAbx7hBN3RxKYsKGuctauDCTEswbKEijF4cetnzytHkKUpVnasJjUNjSkyGm5gCor",
  "key2": "2DbADtPtw5ybX1R7vcfsgjrDF5Z58NoNkHpAXmT7QciB5FyKMKkfoH7LxwivhjJnjQh3T6YfWuKwLqs6RVZic9YU",
  "key3": "5hYnvgePEoaHrrxEZw1qZ11a4npYao5ALjygMg87ec638aqeMBRwWFiQVx1ZS6NjiL7pGx3tdoRSD7wxooUyVGRq",
  "key4": "hutqXCywEWFLeNmrpSTpGczaV2utVkUxzPonG5L3NDHavtBSpQobDgVQupNzayasBSYWCENZbczZLKQqSdmZf1A",
  "key5": "4CNSHbEdh7cSpPgD8b5XP3uT5K1DMqc4YYNtzyoNsrVMAYsjWYy98GUYqwypysyQ7ufEW8yHFJbHpXg1UTDY3nwV",
  "key6": "4fPD1QspqDxJd6YFbMmCQG3W1uAezoLs58krK92qMrXAFesKfNy5bg4ywaQHsDPCeG3m7xVsLMsjhdS1SRNeRGJb",
  "key7": "5Tp1tugZorKUCREY5vzEBBe4gsaHJ4uryHLRgmVHSjRwgMufbiPtDQWMjhAba3JZVMLr2JWa2AyRkjMjjffj7m4t",
  "key8": "51h96veT8nSspLduEJYs3KFtugmMpPBNTQynQE6mAd9ytnNMsWBhMoDMHG9WJTyS6MeThS2CRgEfmFueQU7w3xFB",
  "key9": "3Q8WyfDQ9YGPu95NQKNBi18nTQiAkY1KSt38sC8oWnop2nDpxPKPHimMscWis6Bq417tKaYM2mXuY4hpTAa5D5bo",
  "key10": "2BMBHbLB6vJEa4ML6C5PS5P6NfVffcCUemipWhNX9YhGnYatjkBS5xGtvvodvX3KSBbWi8ZSovVsAmeK7zuCMMS9",
  "key11": "5aNSvYedPKNYkPC1CmKbFPsHuED5FMAU327nJvDhuH9jcCN4WajzvZgiQbQChC2GWt5o88aW1BEgphAFKVSDxbbB",
  "key12": "5EHuGFyQ996Yf5UgJLXaDHdTVrXTZWaai4xV2pxkKrQTSMm3CKbJ6cr7MPAwNTW14gTTS2PuuZYac84cMeCoMi4E",
  "key13": "3MBRmN4FFs5i6LtXvm8XsX6MzqaWG7XQDzTnLQULSWRiKdyccpaHKna7qCiHie6ApYV62RBdGrvoEXmrTESxNSJf",
  "key14": "34AZ1g2SoYfFxmndEd4HHLvVpvz6e4GoYy56fBdqS2HmsXnKzMo5qSGnioF5qhTMG9K3Q4HPuUKqgY7gcUFYK8Nm",
  "key15": "4525Mk7MTHkFNzLp3FAa8TC9j8HhiykEMCbLs35MaJ7VnEneXqdch4U3EEv22rVk3CCdZYRQELv85VUKLKTcxok",
  "key16": "5UuKBzSBQGd1nEnfL8UqbCvjHnQ6tuefppGr35kDhr96EwezoqGCGFpDDMhWx54xSPaoKwYMUnLCVXrsH9bYUP6N",
  "key17": "5H8QQ2Qoa2rzqNNURyY2uREfLEy5cKnQ159Rg4zGmTniueNtuMzzViDZc2Kj95U8r89DQFBagYt2RooCvksJ57C4",
  "key18": "2jKsQjgkPVFPXr1x6TBZSdVHoP5hQjnAAoF6u1JGD6rLXQpFU9CQp3vy47gDR1PLza9TZ8SK25rSzisV77GzduWt",
  "key19": "2RvqKewTX4e195voEr8e9YCmPKeSfem9R36REok2mRv3ApFdudi4Cw8djj4kuHjv6m72sVtiNXX3xzy6hqzvaydj",
  "key20": "5PYfvF8VUdt8HAydQ2SJXzkvtmxyE6k9m6jpp2yMZKe2rAPYAW8PAdX2B67kf1r4VGXd5NtQA4HHjWbj4QEmjodx",
  "key21": "4Gcs7geZKDREJB6sXT57Dco5G8uoPdWQh4Wut9Y8yjEUfph9SjjXwuj8jnSBroXbHvBLmXpDUS8vueokfk4CjeA9",
  "key22": "wC4xtQe15fiWvi7JctZjNdbXWsqPKk4c2uoHj4zE6vfBETVNQAjBDjNTULu4Xv66GaLKsYcGTpLY9GS1zqHNQWq",
  "key23": "5tLFMcLhGv6XeokMWPrdsWdLan9D9Nc1sanye2Yq8WC14ndXn1A4yKLECk17w8JWSJtDpxE32LG4SP3VXJzUuziU",
  "key24": "4167QxpdZ7jHLsaJijZbSmQXo4iuCAgij1TqCDc2w9ERAjSnGfkoTL2EQ36ZEJ3bmv63sWgSBX4sKxVH7xQiHyNB",
  "key25": "3nUuQqsDWCu3cE3hs1qjUGAVWZwTjxPb7N9cjodCcRK4JQ7vCjJy8NjnSLbdjTKN2yRFjJce44KmHejARzeBabRQ",
  "key26": "2kHFMHUcCojBc98jiyaQ6nfYTqeZwyJcwhgKMNNgiBmeQ5kbXHqJryFNdfW4zccnJUypjsEUn4KSFd6JJ9GEvRZq",
  "key27": "3ahZZq6sT3mrQfdsXaXK7FQGxxe5N6Yaoqcp4SKBCftsGwBUd2vu72xMPq26jwPnTwPF5PdCJM8b25zh9NNPxDTj",
  "key28": "3r1qYpZbjKrGdoZmP9owFVuRj6F8H5hyUcTkFzMypDyBxqHGfQVvedBkSrbj1sSHwoQj18LL5nrXv9rLApZHA5vd",
  "key29": "28bSd5soJPovLB8W6ocP95snLF6d7caKUAhboebuYW2bP89XAcDzJs3rvYexrWmENddEYqyNcUkxBs4vJFALv9Vs",
  "key30": "5v8L9g1zUVCKJUjGaF818Tgp9D97Gi8bx7FjsDFzzb9iHua9gKkfizXQg15WofPZtGcLW7SXCHVXjt3691x4E8uz",
  "key31": "3E5X87yCJ3tLZTXhDphhUCmU6zxZVzNyDgep3ZwFtKyE4h2pb9KrHn66CU13394a6PBHLYSoaucY1pcm4YMKB4T7",
  "key32": "2uqiUrM3krFMB5xfYJ8ED31TBTNr7wQZnFXiTiSr4jav2FaciXUgPWSoXw5vPTY6jBS8MYdB6b3j2dtpesjD1iQq",
  "key33": "3JCxmpYWzy4yTHwqYyD5kT2CeDt3BqY6sXPUCEozJF2K23wToPdGLFx1yQGsiUvkQHR3baaTe26bgF3fU9qfLFSL",
  "key34": "4TkrP4yMuTv3T4GHyfKNhZPhyycLvdDoAmKHPXwHqNHaG48bjzg3Bv4uBpQkZCyz1uDHKYokYPrQ9bBjqmF9zjhg",
  "key35": "4MBJjJ8qLJvS1uWR1y8HmdLEpHtAU4qby5TFyxQWr8d59moych9mWFnArXPYQLV9cQYxVUNWPStTFbBQ6GFGzncG",
  "key36": "2HgY1EcwFomU7GjUQPXMFM3ECjKzVYc6fxj1SbWmyJNtgB3NNFjzALKRVKobuUBDS1iq3HtZq56AtDugSsz2QfhU",
  "key37": "5JmBJoD6FPBb9Bb6ipcXoH9AzxpjvotGqG3S39gFHC21KtSZbr4H4pggtNU4q7CEwPjR1SXX6Vk8bkHHVXnGBmr9",
  "key38": "4r2Ai2RXyG3DAtFukH5xtisdP9ZrJh1QbrNeNHFQszikhC4MLJ34eEaApRSZh6WxtiQaByLym8A56ciE3a1Yw7EB",
  "key39": "4ncY77ekecoGfZ8CoYsUZJjWpuWQwCJkryEK2Z7LMY6HokS66NhQZ3nkmB88psocQDVzWPLxAHZFExG8LBLEATme",
  "key40": "49zyaENBBWk968jYJTgBYACMF45ZZMUQTAZzzFV2qXzPmDikiWxdvp6iFRjHwdxTbwNxpuH3eM16ebNasN2cb7he",
  "key41": "5TpeheshKbxLWd7L2h41EoJvrZVMrximmDV7RxSrsJF5NUP4gULHqLH1XWNnY32zab3NGrqPJMS2iHFLXiyXRxcS",
  "key42": "de6fKGZoGo1g7LtQW8YZLLUcoW7gXWWwpmXvG71fhKfzk3YbgyQkdz6kEVxtbQpPrSJDS5q1X3fUxTWwBE3XR4X",
  "key43": "3XTeHuxL9HL2EtRoLbyZ2HhYKSQnqHtnQTirE51koiA8EnTjWSpMNp2wpuP7JjaFWNY8hqTF4gYKrXaudXHLL7Nv",
  "key44": "4PU9NpJP3qwr4hiyh2A6SG8yUEAPYTMw6AuZEcjJ4iuyo4ax1XjhdFoKwhz9xeyDkbtuwAS38Qm2FVGydLdf35BB",
  "key45": "K4BQZ5fg8QCTRVWHALroprei6pX41tcXhkVrAGGT9rAPQvP1Y9Gsb1RciJXAxWHmYerx1yNgqgTNqW9zUvXFSe5",
  "key46": "4W2mhUAJSW2VdtgsT3AzTDVTHaSqPDRxivBumPmhUqFfjq7NfRB3aLgruDa95B1NnUHpHZcyE1S1TrXUL4QPY882",
  "key47": "5qb5JBs6xgJxveQSd5kQt6AdBVdF6YcM3wNRTZzW6sboTfktk4WL18TkkuzuFeLrDdJYxFZYzaSmEzvroftHewje",
  "key48": "3Dx2EEAY7wEn1s7n5R9WJG4MBA5x6D6pmma4gN5pADWC1xYfwZMcjswpJewDSogZ6r2Fj1RaXy8PksatQ7LV9Lrj"
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
