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
    "41s4JDsNbLD8oxQVZFC5F7NvH2mZtugxXb7d5S8frkg4CTfbDKURtajYH85pXWBYJyTqcZXLR6tAQjVykEiLfZsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TedcnBqPzrhmfQeM4oH91hTxDotE66swQWxsMeDmyUQhJjQaMMAWhJ7gndAwnJzU24oHL5F3CrzRYb6cuQECo71",
  "key1": "3HwgUv3R23onmKYdZ9uRov7REFS1TuuDMA5Gs1qQZGyEBBEe13bdKZ9kCyPiZc22qX77JJNWu54DRcK6Bcs3Bo9S",
  "key2": "66Tjqcmn4AKGMLJ5fJmDv3BcoAjDmGBT8gVQejGA7153uaqWdnZGiobnjaiTntMd3fkU4qhdJRPYrSuBDshgDb96",
  "key3": "5CoiBfQJF6en7yAJiGuEzqvauFTG4AZawTf1Uo8JNdst65FMvpa9uyBYQ2ExkwbeXEvFMk7QHcDiuYd7mPJZnkLJ",
  "key4": "4wrfjANqFk9j8uyHjx5agSfAbYgwmLL5wY4RXfwHyiXujcttF512Npe9cbSfufHR1ji9xKoufcySVzSsjnYKonek",
  "key5": "of98rwbUns3aGwjN6R5xXxbXzCZtB3ipDMZEKRWD9RfbiqfubPWGk6fMxayLcHCbeuUCQZYWiZXPPQ7At8TLCy6",
  "key6": "2W2bVJy3bcxPVLFNUmViaA74gxPjvhqRCVWxAHPagWdybvF88MAoJS8dtxHv4W1gxLCpZGPdAK29dnGVjQKVqkJf",
  "key7": "4DRcjDKuoJBn9pbQWUymSCEfv1pDcAegUDeW9fbEpeGXNYq8EzXpPusYQEsN69WaKtupAFbdtfonACz764jz9RRM",
  "key8": "4EVzZSvUWoTeKBfgaWHjmskK4gaxzvBnmdgM8zwhzXngnKg12ToS2qx7poQGYdctXjzgh1MqdNSix4GWVaaXNS1F",
  "key9": "2CBN81WxEeHubeh5MYYgGCmYxvbLKzRFi1peqNfSUSW3NJMiMDsoxbNtFJsqRTvG3tctFjM1VydEriDHnPSGoMgF",
  "key10": "3myNkQexEyndyNtdkkP4Sx4UbKfab95DLwnkHNBqoTRwTLBwGYQTT4Q9zhZoeh2uqfDFtzjE46fj7wxxSwwQYHdi",
  "key11": "5cYjCizagenF4KqHZRmAyKqCSDLd5RNptKsxF1Dti7yjxE7ZrWwebPLfGbshyxCHPVEV7adiL8qdutgMqtZTrMQJ",
  "key12": "49WerAmHhjGoAFaBi3FYP2HhKGvozZiehGQgxig8kP5vhjp4ZxdhqYyWe6suERhuWgPVzuF78gNeXzoy9o6DS7mG",
  "key13": "PzL13oiSLhXm3n9HsXFQZtGnKE4mD7ft2Woga5pK6XxC27JsVmeTAAqeQs2dYQNPFoZeTZSAxA9R7uPgXTGVNXj",
  "key14": "2h3PpQQUTsxUJprDymZCyLe4GgJK27AEsUyLUQvT2223uiNE34FAB675beJ8zW6Tt6qz5eMWGRQHCQNaau7xYgDg",
  "key15": "2ah8C2iiPZ1FVGes4bEZZ8vSU8XRk4PTZpBSZzHmaRzChmZHJhvtcADbokEW4CAPpmYRjaFRpi1kgwqxusoWsK7j",
  "key16": "4kUxmFuc3MrGv8RkjAhHP74A3fBpzLR42Gh3kwyJ6eoUr6mcMzC6ivWjZgt8ug4bvo7eXKRUFpTfqaVnHDFB92YK",
  "key17": "288SDbgQgXZ9CiTwANaoXv4r6KWJK1R12FPYZsdzGPZuZJbBr4QBEa8MMStrKomYXYzNZhQByBFfyGc61z1cJFA1",
  "key18": "4rzc4pWnHjKKEbPz4hzzHyZotg2tnwebQocLpBghgAzqU5skBejVJWcmQvv84LLgw3kYafqzN5FBGnJiWpEDYVHD",
  "key19": "39GQq9E8AhNqzPmMuXx2HEduMXSWjBqQ3Uam4LgikmsBhpmdrtJk17cf3cuAUpGWymRGFFdvscqnNzgeDpknNp8A",
  "key20": "3QUgKnRpn1ZGZT5Cx3TJ58ZjixWTYs9vLBYgQETvwf2o6dwR18MCMmCkyREe2QagMAR29QDYUsXmrDij8Vvcvf5z",
  "key21": "5Y3FXzFJDgPZLyMomw8wukmTW3oRazmP76xnehYk9dVjnoULQMaNfZChqgAStNzwkQ2dxzpzweKZqte5Acf8QSPQ",
  "key22": "5GYn9VAEfhCvWinBMRth35yxZkcpavYDhqbkrvuST8YZZe7EL5doyDzyhj4JcWBG7ymSeY44TGSrjUnKgAz9c7H6",
  "key23": "3pRihF4amveHaEnzxiK6duhCiiRGiKbqX9uqssSK1G6R6WGfATBnYfngACYZqb4e8iFaq5JvHk3hv24MwUF4Q6CA",
  "key24": "3YDQ7N6dHV6sichr6bhPwyLTC19n1Wuaw5Fofx47uhM2dUcDMrcYQB1dsaZgouAJFx6o1RaiJKZsA6HbfaXX2Gve",
  "key25": "3oX3f9wZBu7bunUyfCLpNzREtjuqVZGe5osPyYwoKJCccL3QumWCPiETGQXSKiYgQ79xqXpr95CJWLeEsKZn7ZAG",
  "key26": "5W7iespddeiUZ976wWLHtkycqaLvQSPrkKeKpr7vaTi2U8cGqr4zbcdcGVjAzqURr97r4CggaJGNXGEBDf17z5Zu",
  "key27": "5ujibs7cje8U9GCqfcTQ9CMgDK7pYwHyvwxox756PBkRbgCush5sgYB5mc2W9U8C3nM5z1D6kyCKnPoTZGGSfgkv",
  "key28": "5RzyqiWDnrEWxmzHbkycdB9J4MDgn6XtuzCeHkexBW37VDCrG8g1UghieQAqZFZXg5QgXgBpeTQtSQH9Jmu6a6aU",
  "key29": "2BUrPTZzE2qt9p9H9Hq9rFpxubuah6EmFuDKoDpk6WXt95fPdGFSqUnRKYY3LzJZAm64vvWdP8sUdqVbHFEVTNVV",
  "key30": "4AF2ZT54XBiG5SZHPk52jNQAWKYeDoeozRMdP67ccNCn1AduRpwBrMBqdkySgPezJd7zP1tVbpQPCb3xGzqynL4K",
  "key31": "4Tr7TP3CZgDT82Hdcod5XqxbAD8n8bDfcfkZ8TAVEd96aVvcGZGFCze753tUiryfbPBANda3qyrWTCjcjF7weYG5",
  "key32": "31VukY7s9jgugsTBvn9VRXhgSeM7Pm2kqeGHax7qk5piA5XKdbHNmCfe85CR9dM2zsfPWmH5AfzUFwW1x5JBxRBF",
  "key33": "3pjLH7pkMoomjkTsE9YTtSZiSkHUc6toooxZy9V82VTWbaa9B8rafYQyegEKzeqAWzJ6JkU6zAixgsMq315swA1R",
  "key34": "2R5B3zHrY7i3PV7kfJXG774t3sGmjfwgXaRmyJgbvRijet2R3KsTeFhjDUBe18G3X3vz5qFkUacqh1u5dG5vdZ6F",
  "key35": "35GyS3zGhJZueufv9mnf1ACPKynjBctVyYP4WjwVMQ7412W4okpWdhTJUwFP6UnC4WBSAmEgx1kXP5US1QSPWQze",
  "key36": "2VCDovhcPNUFGjyBD2R1Rpz6N7o8iMUab9JKYYWDyW5Z25B6Wis12WQZF9S9FCtX6JCKaddwVv5EQYT7NLbwKpZG",
  "key37": "pNBr8dxhok8SUtwgfeFDNPCD6h5a5o7KHP54MdgUxUpC8cqunZwkDuVGpPxMVvDWtdKHGMC8aMrh75GraEm7i7L"
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
