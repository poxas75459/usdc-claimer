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
    "437qUPxJnydT4wE13Xru8ngEP4g1WdtDZg73aTRpaGrqiqmmFaxBvX9wtzhzqB6GKLAR1zVrtWDPaq2KSxwZ9efs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ngWeBYvvzTgc17GQc7bgLmocoDram3RuY2ZuF4TAarqU322hSMRjfs3PR7SCMPWsnSaBZpcvg4dgtNyD1uRirWh",
  "key1": "Fn9NH6hsf9qTprG9VDjqsgNWwAhgstdAKTGttksaNrTtG7F8BS5riDv4hzboYeeTwzaw5iNnYECgeFZRaAwHoyT",
  "key2": "fSNaheTQ5cStJwY8X5EY72SLqCUQpcmDsFkpBGhmJFesSNweAC4Ttkdqo7V2TM1fX8vjRcBM3529dfACa3q87KF",
  "key3": "4YBSNDxS6F2vAbSKVoKnjjX35HgA3cr369kW8BXTxQxYHkbgdeSv4GWikEHnbFTJnHjPXz93CEfaP2siigkTtNhQ",
  "key4": "5QwnePZ5GrL6PfZqyEpC5VXkhMLR19hh27u6qN1dQfXKmkGagAzAUvaPtamBw5PjArcgAbp2v1TFyoDbEYp98JQ8",
  "key5": "6572rdia2sKkHPZtqLioX9CvPhKXb1QCuzQipj5UJgRxXa9x5gGUUwBjdMBSoDjRecAbin6LRZzXHMQ9ztYXRZCZ",
  "key6": "2Z23ZAPRkBMZfRrLQw9KZYaCj9ArXeNvtQvoYXvCdUkQtPiRUirP1qt4yFy4dkeKJq6BX2XSVsnpnKcjLMa7QeRv",
  "key7": "5xH2heLiYrkFoxsQPXyNxib1B2maSGacUkqgrP4HdhC9hdF2RsXEksMBuxcvyMXPasGHDMs8nsLpmcrM9GxM9fgP",
  "key8": "5Le7vipKDDAD8g22HDAudMdCQeAK8kNCS5Vas5oW7UcQ51PyzEvkCnh5XQ4E2TbMZ4fSggRDNYi9GDegjZPww1DV",
  "key9": "299rsBayfgMmnZ6HZJAySvV1yyFXL1Q8UmukpfazsBxxqCBH5JQXggT4QogvZaEpYxjxNZpqpKxaSM5SzMYaxMD8",
  "key10": "4JRbf9AwYw3XK3MzSrfkCspndCRrNFD1Fp2kHgT2mGWPMrs8288WS77CLuR4UEKtrs4eZRENV8VGPdwcinnbgCZs",
  "key11": "5ZyvMZWCudCNiA3kbTfjRRhexCuvmGMgA62hXRNLa6J4ndn5TovT6jpuXzerS9aoYrR4qmC8KC91tUd5mmN8SCVr",
  "key12": "1VjcWUAqEzbQdmLLGvZe9KD7p5xKb2NW4xL2qfEZFNB6qwtKL9nxg5kY8ie8rGryNpAEo6VZ8TzJreRx5j8AxYP",
  "key13": "22bF6htBYwZssekSfetDKoLcC9W6gUGgJ1aVjJXoc8CUvhTFEsB2qZAKXeReche2D511m8seiNQSeb4CCDn24hv6",
  "key14": "3WymroURNL1vJYTA1afDhYoWj36deX6F7JaG1TSTJ3Q9hLm1XioZbuGUTszuSenhWeuZ5ixDYdNYe5241rwcdeiP",
  "key15": "uD1VtMxAAR7t2u4garUyCwNsHT21y1K51BnQEm8V5usFgdXicv5q3kEifGUkYCApbkBYA3D8t3fJs2qFEXob32H",
  "key16": "geAmgkUo3txebXKLoyQdgdctU8Bs8vpPJpDzZTvusQacEXduGiDSAwYigegJtRUgpy1RLzhzGa15UbEp6TacjG5",
  "key17": "5tgPk7mK5TnR12zKxB4BVxnBjjysSN9Kkuh56yBpSVtYyMWBBgHYyT9hazZqWNdYSuQtawm5Nc7fbhgAzq3Bsohg",
  "key18": "4o7t3NeR9YxceBQFmQXQKbcjd1b3AueTbn1nGJEB2Qh7vEuEyBVndn2hdC2nf7ce2j1nkZ14UAkZGzdkRrf4mgYi",
  "key19": "29GzJnriABxxBxbbzh6jngGMPJaUQNfVBVoHFcBjJvkdZkRuozmWwnCzPUGTEEFxf3fJo1w492YAKK9Zyzfxag8h",
  "key20": "3YLFjYgGQ4r6aqz8u1xHhf7CmzoeD1tKUNDkqWxqCeeCEc9NrqoKDk6HK7gpyiVqKrC3x8MVvhELjTEPyUEn781V",
  "key21": "4LkB2hWKWaUQmooUgLHfXaZbqd1y57GfF6fk46C4UYEvyU6LYw9xAopiJUwwA64ZfQYh7u7hfzfA7n3BJiQ6Bh8q",
  "key22": "5xAYPX7QZRhXQ1pRCe3Zve38Pb8idqKaWH8pL7dKqSt3Y73HXN6uDJqipRxibRC7jwv3oQM9KpSmoefS8coq2uT4",
  "key23": "66hE3V9DMY5sH2uG8d17VUpiEohcwKqBfpUcXGNNHWPpvzPWkWfxaZNssniNPE7h9Fj2b1bX68LAdvL7fTAGa7mq",
  "key24": "5VZE5sX9HzaeRp63jHWEDw9yd6cvnqjdUseqe3kYSHZGR97QzAaoX4BKNkiYpYRq2X47v6RJthX7C46ZStuRMcMH",
  "key25": "3Vw9mdm7miL5WxZiH4TsQRV48UKL7sa9hZJjNhBwtHLnZM7rkmBEfo4hgcjpQKJhKHuKNiKLoeDR2Vcc7fDzk5cm",
  "key26": "4rCJzRSB3Y5JY3NCfLKw5NU5nNQTqvLeza3UeaT2wLHpuhU4VHJsifbd1b9cr7eDnCf1RSpcz2CjqxHo8gq2ytKT",
  "key27": "JQRqJMmvLLW4PoviRNffYRxXHaAsPorYNBUkoC8rXaQFuSSGoSx61Ptps1ssztbtoxBdyfzYSRVTCzmvnEQc8yU",
  "key28": "5e3pcfAqR7i49EBZe7DK3XsBngZM76Mo9KMNXs8tFQG7mPmLUjCMxjDhEJjM4nz7gfDtUTGshMAMxk9WdN4GqVHu",
  "key29": "5Yce4mQjdTdY1RG2FvwtET7tJzjLFyPdN6jLdz36i19UCtieJukEDvMihLut9ZFFzcZ4DV7RQCSn6zqeZme2Uak5",
  "key30": "5SGAvKqHj1T9taDdnY5KdDyxmG9NgsHWe7J6aUbVRyHLiSfjfiLtYhF11y8Nho3bxPABS6xJhtgq1XeY7kffejSZ",
  "key31": "Wkqzmh9Hz838kX64TxrJRzVSt6HQ18oSpqU3TnS3EorQgtT1XM4k71tFjbgjfNezuodVzdFDFpgtbwb6WivFb8T",
  "key32": "Cc8NxssEm8zVQ6f8HCKmqBrBe6B3pjyLyPt5E3n1gM7mxTaUNmM8FJc4Kd7oSGDjhquazWRDevJ8h1JZuJh2PZr",
  "key33": "2zKTr8aE7CMmHp6QxKAj6fKPm3ybu84BdKBU7Qgg5VJzYZ8HN1zqWKzNf2B2DE8xu5zrDCE5qT4Hb3LE7VFLw68e",
  "key34": "Uop9YiaS2wpHwvRk65RDaMQTrNEWjZPPYeVYGhsLyzqJpdQf9r2SRxbLfAsPJCuwK9KK5Vkwq2XfSuWpG2WJabJ",
  "key35": "5n1XeKk9KtEAHa8ypJdg7zJmuPuv7WcexFvCRdq6RjYGTVCVZRrZNFodwxLtbpCvJxBRDbJUhRGQQgZvFEKW7TYX",
  "key36": "4Da15MCUEp73ZiB242GtERBRmFBSVdDB8DbusCg4k7EpPUus2bjqaDTYJfPWxY6a3GyTj2opn2wBmrmk85TVLJmS",
  "key37": "34yn8HRqgtyPY19Y8cDuB66n7Smpo64y6fzKLfEbRmwuJ1HocAf1xj3D77DxYPYM9a8HkezmpcM1nfii9Byozwfs",
  "key38": "3iR6hzeXtjCHKauKW6dJgtmUG4414vX1BUX2sauipvVJncQCo98fHfwJm9BcvA89urRtmYDzgN2v8DrFLsDnAdde"
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
