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
    "oFYFeeTij3oBXDU4AjPMg1ynwRzj55fAvvTwfZUpW8eoGxU7RcW9mf6N2v8igJRom75QynHynKd8rk1XgD2LB7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lf5SiWUg5g4PLU7ayNN2f9nqfJUtwMY2e897KdbozKPBrQCGZEEZoCEnSfZ66ywrYrs3HPbhGmF76nDK3sft8cD",
  "key1": "CeegzNkHS6P3SYLhB2HXMscgzPBykAMvWegg6AeJQWyJuTn9i68YSbFZcpJYNrRiKYmKrHTcLeEnALvQe4dWHtV",
  "key2": "oEux5TtfzSG2PWawQ6MiAPjUqXMSp2XuU4T9eCBBFcE16oXaEj4xBvYwDepnze6uTiqEdZhotKMHbARDGA3svL5",
  "key3": "65dw1du1X3U3X3WdHxqwWy5uySmoU4eAtQV9KVxh8GjhomuAuS89KyY6jqX6Zzn8q49Qbyf8PXsHV1L8hgmnaDV9",
  "key4": "2QLNS31c3jQu5v7QdKKXy4NCqLWD6QphjwRoKPKKggKWYgmtvixnmFfRRtkjgVSXhgrQkmWA18qiWvR5fXd8ucZM",
  "key5": "2BQWpvJ6vzLp9fEafQQ8VjwUersmnmw1YprakUKUD2Q4pGo6A9efJhtWGRmGHU6EMcsGUSQwReHsTayUoqhsRvW4",
  "key6": "5jQ6UZ1tXviANhKhj2tgneQfRbGVm4Du5prEc8mwJb6zDM8N22VttgAPGMQ66qWn8JH4gzExk2RUYc8SRVZ4fEHw",
  "key7": "49ajnqQmLhgReDFSQBNrmneRF33yBXoEdpi1ww9auMBeWPkKVyvuRX1ziA2GL4fVUptPR8yoUCf3qTn2fyqVid2Z",
  "key8": "5FZPFeBzW2Zv975VWBAaLMBeHexTPmaqtApNWGEkB4zVSAshfQ5K2mq4cY8q5vHqw9DH6UkA43SgNNzPqXsKHDou",
  "key9": "46c54NDRAss5mntRRSLxoADoLYnxKqV7SZ1e4KuhfHDyj83CUcihoQ8h2aho33gNY22eEJFyfyhQXU45fTZLdhzs",
  "key10": "4hvSmxDyRHRiqwEPoJ9CE3SqK9BSa4kHHcR2dQfaFiBuye9qNXExN5B6s3JyUBeg4iUPf1gjqrxYVHXUgh1a3DN2",
  "key11": "5xiKoWeMsXYD5fAk9Fyiiv2NYWhjEwuAWPdujyQNz3f9rGLDwhyaFQzPERbJcjMVK61dwGppE3ABNfh5UKVDUTtA",
  "key12": "5vTfDTd9fKmhfH6jjNiW2amNNZKUkXqYjqVvDBNorBwesAg6eGwYpt8ETZaLk7bxpcDDto7wc1hx7i4DF5cGw6MV",
  "key13": "33znahgG85FMbHyE5Vbr7Hfgu8338KoGDc4tCuKxSjayKSJhPYmPCKWeLmVQWjET36VjRQnozjmBDrqb2a3iJPxT",
  "key14": "292gGcc8AK4HnuncHi6WTjBAR2aVTXKHNQxsoqFrGht1oGx8mYUymVqSHvknc2dAJfwYxKNbujRKEeELTmnMmmGC",
  "key15": "2x79DTb1PLa2uaGeJ4z7hgzVhyD9AXbxK1wHpdmzgMAuPqqKxisHpDacsiFXvyfDqeSGX62y8t6NJP8vYCbCUpHk",
  "key16": "5p2CijfXbPceeKp39S2HAtc76oCHq73mmZZqMFEi3ehBidRkAuiTWTAK5qyWSdeDEaWodLL2ywQr5R1M3H11EZLr",
  "key17": "3kHLQbGw846DEPkPbK9cALJJMe3WYuEmWWuqcAtQzj6v5RzZSik4KxuyuEfryi4LR1fqxkGpYewxNSbsnUv3X66a",
  "key18": "2Fk5mgzWougzgfUeFcKncatbhxqEyhdaVE31i6KUhE6d17CbywXyuPtNQ3wwMHYkkbQtfu39c3Ph8FXzWqA5kPh4",
  "key19": "4QR2YVhaHki4WEUnQDaaG3zMc2xPBZaY4dnLjfnqEzUQen2z9T29eVfzDG57jtsu1TaWeFTrrkCe5wkjqeKeNJo5",
  "key20": "26P7pi988VDuWhTkDkLexJaeb8UKsw3GZXzuneS8ZhFU1AbzyQ4UvJhmLWYGXrSByBJGQtvpyy4abUBsDuxi3c6k",
  "key21": "26pPgzZ1PzzR8y9aYNvfYuLKEDfH1pJNhHPxms3drNJCfLDb6KXQpHqKFocT7vUCsA3PMFtuy1xPcRKCkncBaiac",
  "key22": "5AeRP1V9srubawo7wZwST3N8jQ4FX6Y1uLDPXxqtRnoZB2oLWoxsCYpkzaHruGxNVw2Knw3edytwqh45GEVZ94kW",
  "key23": "19NLZvbuaE6RD99mLz92thAeAT2oJBxXByXgJzgd26ARJRGu9wKSH3oVuzh3k4u4qQYWzp3fheiwFLmvdK1cWP1",
  "key24": "7QKBg934EZ9MiQTzFCDksgEmtYewLD1266U7D7ZHr9qTQnm2QDCkEgBF6nHJU6g45a74JRG3X163Ankn7g6yDjw",
  "key25": "3bYUA5MgFtgy5WZLu2dXkiW35W3Y4uExtTkmycWkhKtRJuckHhPd6fW9mSWMa6CrHRdMqJAN4ZPRpJe71LZJsAr",
  "key26": "2C8azSXjKhZh8cyKwcSj6ckX36YaCivUuTuV52nN9eJM6zTA51y3cLnSJuT6YAsz6wMc6c5f6wRFjFmLLWizkF2K",
  "key27": "DkE2jxJSdoUZ7XmwYuHKp2Peibnmaxsr2mHz8RfKNxha8qBYV9kKqTuRSKb9KzLn44uYcLTMns9ijH7Ku3MnofR",
  "key28": "4RnJXeT51XiZeNQsXkao6aEhVJ9m8HYWgxRvXAKPfEiDDjhZZz6UeugsuC9hjDZmu3ipvg41PkyvfwTwzEUfoqQZ",
  "key29": "56QV2sskfinVLGKFWd8WD9y3EJaasYYTgDuFHRcyMvZPeMXG3U4GJkEF1giVj72mmCiiKAJ43omoi5Wh73uvQpbY",
  "key30": "yYV4rdrHASvLenBgLpPzXqDNt1pnrK9XoU1j6UefQja57tCp3PZ1jonEjwTae9hHcHmsvbhfkED6kGRmtAQ5wBk",
  "key31": "4YbQjiXpJDr7YLHb54bJnpR6eu9rb1ormF6iqFtXexY1nCV1tuQrsT58WeY7531qx75WeVwomyEAgZAn4g86t5o",
  "key32": "4PDebSRF7ivHrYK1UepwqhYrTjemaNWANULqwSSZtoQyJsxx6ceAMZ8iBFTGNwtvsRq2Ueq5Jpyi4szeN67yBrU1",
  "key33": "44w2J8Sd2qtTqpkyD4WE7LK2YQWQ5nxmYwVPtUfUA6cNjLm6iVAeLo3Um4FCjqHmt46Q8YES65gdtaFV1wDFPJAv",
  "key34": "uE7bYhaRHiY362UREHi5CbhhD7sE1UWKEWdo5kVA2JLAq3YkuR1tSQTUFqEVtfDwUqWRvYToiacyCAgnogEbpBj",
  "key35": "4gZ8rTYxcDFx31ANPrHZ8U6UeTpmoQwcJQXM7gyBvhFNsZMmuRrPoq9dBhSaebkzhwGAQxFTizFMwV7bcWVQ5osW",
  "key36": "fxNh63JmmiHHxzxskG5cJ9xw4sreJ7JWjWFdwUcs35hiMFd7brrNyoV2R2vJgtM5KjWV3VzhTsYCfi2Am4pX18Y",
  "key37": "3fqZnsvn4qQ4mGPNNYJJfKLU5ZotMnGD3cexBLiDF4VZ1KvSjfpDiNcnzbKq1BNTkdeewTfpEmk6dhySksXsJnqD",
  "key38": "21BVyVQUUAx81AGHVopa927YPzqtF4dip6TwsHYHNME7gAumBW8W22CCJwFhvNKQZvsdvGgKRExGBJ1hAFXq8GvH"
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
