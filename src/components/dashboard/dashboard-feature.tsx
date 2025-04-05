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
    "58c59K6zYo6sjiK6bzwfnqgwbn13pZp6ke3rqMGFkkRdqv6nsJXgoJahoGpPCFMdonWMRvYB3gsEHLu9yTNp6icT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34G1uhVJtc3ThKxXpJ5sjcGbekQpTZGVe2Vi5TnjE63tZfj3TFNgstv7EonJLgfsBxNG6sAJvg7qsdS1NHtrZz4L",
  "key1": "43wLx7nVFEFuGBqhmrFq4Db4qeWDpoPmReGSkdqXYEkJPKjtfetXoq7RpM3m1ju3yU3TD7J3iAdVvYjEZrrdCtfx",
  "key2": "4uoGbBCWpYo4bYWsnDH9XeGdHCNWXmHpHaQ7eskGGtBFQk5BXLcboYgozoC8Zqi6C7aHyrpzQCFXWgxVWEHGf5vy",
  "key3": "5hXTBrkrjk7WLNBj571u663hmUbhp4FYEdedr1JpQowuQz3ufy6c4R4pZjcQr2B2QtjwmyPYLrjWqiqeYmUFAJUz",
  "key4": "5Ai7NQhC5nXDteugZti3J1kBrZKkbPLjcU9MYQY2kkdAprjCSohZznwDjVL4V8iY5F2z73foPt6n2V7f8GWcWtDo",
  "key5": "3ra6aixpoVg1fnV3cbbiACirQuBRQX1uf9LhWUeHcJwaPwajCnK1rfuYzoTnKWEZZMEovud89t6TdAdrqPATeMp9",
  "key6": "3CNrmVhzKSrTDEYr6F9PWNgn9rRtvvjBUW7My1mSBi5akzQxoXWe3oTz42ivaJH4zTHiAX6eyZPKsXg6iktzYDyZ",
  "key7": "4UNTRhhzuuLcRJuf68esm4UX4mw4jCn8JqSp5igsWPMy6SUAvUVXf3Giqo9PJDAisFQaymvabxdYMZh4BTv3EjXB",
  "key8": "4qacTvFpSTGj5y3XGznaBT5dbVHNd17B8zJHb3GJSamKV7EbfhY3RrxgPhpQrhFMbRCV8P6GbJpkS1enNytihqwQ",
  "key9": "5bzxxpS4GeJferx15ZqS4FqMRvrqgGS2AUkZmHFfRdf7B3zSukB2wsxhbwDRQ6BtnUFF9pE4jYUAxFdwqadmWRDb",
  "key10": "3ydkw9BDF3bvM5vV7E6xgtQnuVYSkboH2V9WiXaE6mw1zLSnM5H4cFf8sfaqwXQZxX2Sp33LKrWYgpBi6XgWFAwp",
  "key11": "5dH6cN3kC6jGggU5zcxZhKYaei2aNH15rZoXbZXVyUqqG6KhyNNYiywXcs4GcQvLHP2rrwqgyR6kqbptjdZ3cApD",
  "key12": "391zsVAt3gZf35c9dX2TmxqSfoEwJgHtKiF4pMr3dCMdNNxBh6PjthByVSM3fdS1hxrNk5nvTQu8rART9NbFDpX1",
  "key13": "2YEGs1GaeEGW7fewA6m6BWd1YWnberJSnGdeK7qBnKbwM8V4vGNea55NRrJ3NsE3ez93jF6NjVtDK8Xo6nZkSjdu",
  "key14": "3tKXemDeQmHhJdB3h95rHs8WvJMEFMCLjPWaJ1jx5iCCaWGs9ZnVEfDxVebJpBNR4z4GyctsBZRXYmo1CB7uPUVW",
  "key15": "4k2Zsieum9Wzb8ZiRDsQrL34R5tb4JD7yFJ8oP4hdr6YkQESxsmqHpJyPL8ZTNtGyD3UXNogyi2633PYTnbpRj2z",
  "key16": "5kSZokCDPd71hk81d8suUotNpJX9NPMWwfcumYShUjkeGNj9cgEqSvfAmZfrosqdada8bPGhUKyXf1tTSXwA9XSv",
  "key17": "3ZGCjdZoubhjSeoaNLPavvKKRnY5b2zEPE3z5fuFR8fPK8AFezqUw4iLW5p4d8VjqnT71RmRh8kS14TATGGt7MBy",
  "key18": "4DNn2hWyTL3ko58DW7fzHDirgTYFi6NEbm9jnW8GurKntmhE9FHPAsgoLTndJ4fUmUUaUbDnytG5JtVYwAmy7XBG",
  "key19": "55az4C6Y1kbGihk1Y8VfduNzvxen9EC6ZCCNC1UYBFctBSccRBpWVKqrAzmRrw87voxCE14DppR8JRHXKsxRbCop",
  "key20": "626vgbrNWPSTagypZCvekEmoHsSKRRcmJY4NYmuoTYdAaLXu6rj5XGZHE6wedKBwt6DAhGvFC8wZ84usi3SmfZPc",
  "key21": "4q92VpSZbwdZokMa7gKyAKhPe67k3ooUkSS2mbAad9voVkND4ssj7EpCupshg1PN32KmP7nPsyQmyKN9U4s8k8Sj",
  "key22": "2ig9YrGuFDtRorLRrd66xf6vC2CEyA1aj2KJnzBTNRu6S8Rxu9FhHVGuvAG6cePDqFSEuNZpVDngbH45fxjbQ4ky",
  "key23": "4bS2wjd22Bto2aPG2XC5XwdiUrP6vRQhU6XQtBfGWzTrDy4s9LGEiak2xMugtiSUyeMoNoHRTDtTXjtpsDwP7efH",
  "key24": "673Lqxhw36eSh2upFRsppLchZAuEGktkFL52Hfv76N4N8EZXzRwSKriRjVGkeaMY4Eg3TpXfYLgbTJAkYjk88HPu",
  "key25": "65VKGwKLNSBneRfy8KEDx9a8RrT843hYzhXdhoER1VcGEnApqHYuqPQmmbA7Ys4FqqsDgDhZjKTRndw8tE642sjq",
  "key26": "5N9DCGxwRxHCWFq3ShRkTrsmnptCsnEsvKNaFbLKJFBr1GMQJ9uCWjZaPbD7GNwNrhHhvrX3e1ftraUX35QuVnEM",
  "key27": "52TEweAsDt86Eoc2hcJ9M6x1PFKDXcPGx8iPNBKkA5pjuuQo31fEF6Q1h6oA3bBjKzwSoZpJz1SS64HHJ5k9KVEt",
  "key28": "wWR9tL8EHkWb3KKW1aCVL1qwE4zckuJgJYshFobXtrtW8bgCotD5L4bNXM4gpmnaVh1b9boK5ZGQBPdx3g21RGr",
  "key29": "5UQUUeNBmAZqF1vBmw9qXmsvk9Jj2BAqgjKh6jWf4R5eRCRT1NLhjxkpYbA8gnDu5N5asbkxNBajrmXfUirrbTWN",
  "key30": "3S4DHzrNmHAuTf3YvY8JyTLXmvjdVkCM2M8uobwJnyqivPQdgYd6sdj9moK4VTc8GSWsovWdvaiWEkCaMcLT7AZx",
  "key31": "jppaVBMgE4owZL28yvNRTYq5ZBYDTQDNTM8SPEyqCr9QpUMPbK9nqpLAd4yqgMKkBCrNfz9iMYbFfniATpQ4A82",
  "key32": "3xJoTkuo6w3vwtmz792r25UFbxRhx5AYQJZKi6HrbM5Y2w2ufvvkvsLPqN46yhqznrjYs3Jj7cWANsKEn12Fsvoo",
  "key33": "4ioyw6AxZMa2iUZ5PxnAP35bRU2Hdxo7M3yDZzJPcKUSrmpXhixVfdkiJwsrW4tqYspeM6fgYH7SgBbj3n2HDnJH",
  "key34": "5PK6NjSFotv53PiYB4uYYYmmtqVFvgobPiE3DNJLXbKu2XzGNLCsbQRNs7DB8dsrM9eF2V9fSsMt11qJv2ZjBfpx",
  "key35": "efNNjqeVry4UQveSjpPJrE5ytPcUQWZLqAh3wYrWMZv5xT7PZf271sUETyiKDzQ3APVf5RXD95WPzHEfmHmtz3L",
  "key36": "yPJht66DbhYgcxTHVoHr73khY4WyfYsAddToMY7iAtBzhunrRa13MfydHbjjHneeR4FdhybGF2kQNxjKXMpizy8",
  "key37": "22PoPxT5RABRiZ5n262pyATfyqRCKFjAWtaxezGpjuiQhixfqzbnYTkcEtFswaTYx8hzV65neTH44w1QRm5WoMHi",
  "key38": "eASxtKtbpWDH1ArU6hJuu1qMsGTStS2CZZiz1Yr4uQVFfaAncAE9KCSSMV69UxUUD7SFL7jQ2aynYYxrewmrV2o",
  "key39": "5nBkfEftaxZ1RX388aegHqGVda38HRvZzBANxwsF853oShnVqVsdySs1iy5SAgXZKfYHmhLbNchmx9nTbXp269DW",
  "key40": "3mgjT5ueaQSqGgJRv7Lmpq4VShXCqGJGYfQ5Q1YwhqxiubZ28QYKUcL9fiNB46qiu9VScueHXeHiQbd8LLFuKXvF",
  "key41": "3FNHdznywqXrv7Nd9j6W9NiQWpoUaERTwimAuVjJiB6P79csi9zszpxE9hzU397Xonjgba9DfGrgG9Fs3LQCUuCt",
  "key42": "NFhqU8ssoCi93y6pgVNQ4Zi3TGD1HJCzQ6RiHf5sQQFHc15UoKSsFPe5s3FUowAj8vzrJiCCkNmxBrtcF6WLJJd",
  "key43": "3568179zb7VydbhrEUNELGiZF9raCP2WprGodPHAQXnNAuLWFCydxi3Tij2LszFRrX1aYShHTHJLDFQKdbWcQsZD",
  "key44": "7GKp1yqsqfqj8kW3TLbULs4otWU7LzpuLCSXG5H7kUpxV57HQbKRrwf261TsndGkiiG2VWH1d52uYBfzpNtdxMe"
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
