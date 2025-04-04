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
    "3DnTAn7s1Yad4467R2Amg2tVDa16RsUBPjCHnp3g8423XUGPoAuDKC8F838YQ36RKPfcjZzuCRDLv3EW5QcJoqZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QUocmnPcKxnt2kAAKCemncZYzdyHVzxQJyGRAe1EASYhuQeRyN1L1EjrbcBhSE8wiAYH8U441qsmQySZnHTZVoN",
  "key1": "3CnFUnyZodK52fzyrLH21hE7NyHT5NYtSKrS5C9wZc9HTcRNzfeGLY3JNAiGRDLyCzvn9gcVDAdw7tBZ86T4hoFo",
  "key2": "3w73wU7QGZKo6KjrS5uxeczkrJgzMjxMAJWfdd2crYwp1yM8zgnEuvzJyVWy8f1JrRkGGZb16jhEhfjgVc5mKhey",
  "key3": "3v2vGW3aaJZBwxTDPbP891fV26AoddVwKxH57K4yZwS9i8mtRjk3UCYN2f2KzPwVKcsf2qWsXkuirqtjEMtVfN2Z",
  "key4": "5hKeAStQm7SDb6EtBdkXL66YPpajH679z7S6HqeSaTPotgDyRTjCPEivjur2wCTS8fDHGGkWKizJmeskjCbYx3Rt",
  "key5": "5scx8ns2LEDwozjYh2YgNHcZBmoCDMhoF7goxNPBEmK3QQdDqN4YEA13EPgLAjeq2yo3j7JUe6aAuoq7wUodKHWU",
  "key6": "DvU9dGTKStTLaedqEmwah6B2eXxnJDJL7bCKmk7JbmVTgwJxwj12HdQrojSEPKKLTGq747Jdf4ybBsXKaepFDHu",
  "key7": "3dAbje2XUBSC9QrzkBCovyQVyW9PHVoHXnVuyJ95Cff8ZxRWLgnGTrJ5JwJyfY7fYxxbqXWUmQaLc2JYpXRBx2q5",
  "key8": "3ZLmNjEULL7osxnEfJPpQ94La28V1iL415D1J5e2z7otaXvHeaVriYQrNnMaPHCoGiVWYdviuWSUnLWA49kPZGjk",
  "key9": "5rgFqNBQ9SwEvkuVvhSgSiTiFFJpUZWVwVd7YFCFeL17oe27f9Ndxew9N1c4dV72fUTHwhyKoNuwiNMN2zJJFCQb",
  "key10": "3AdRNvmhrJWro1zx5AV22DLgXgbkUYPthvYtASFRDkjrevWcad5yCVM9cEJ7grUfEmBgh4yVHX26UqiiZiWtnZaN",
  "key11": "2cETjDkNd7pjktpY1EDMU9ST9mFRLke9jFhijECraXmFrWSjDajgTh9fFYW1EvrXqHJ7b6XBDX1MbsGZQfxi2RoR",
  "key12": "QzveuyhbVqT1u72zmTwpcKuHXvpK4WG1SN82KhsHTheEn7Nz3oMQpBpjjZ3dzZfvvxKcXX5DZeKzKg6FEh58om8",
  "key13": "5FxstJqCjK4DrKycnZyL2s68TbyVNkc5wHMu4aea1kagRpYqxtG5AbzAgKbxRUtRfEdttAzjd6wBQC75NcETZwiH",
  "key14": "3vSVdSjkPDiKcg3v445atYSHyNc4V2PcUoicsUy9aBNNShRuQDfB11jDM4unRLehrunJb8gMWqft7waRf6uzbs8i",
  "key15": "63aA4Qi9Pj9MBuSLnLupRnswdx8CLcZNf9RpFigNGxyqNwbnR5Zv2w6LAM2xxMoAKw2ZwMq594xkV9zi5KGJHXmL",
  "key16": "2csv8h571R5Kat7jPCuEeipftA7nJXim2cWNmPWSVn9AyU9SraCrG3evssKbsoAo77DJBHbsHg4wkc7CTyx1Wdea",
  "key17": "3JPoZVVP93JocJYG24G89wccAwz88SwrwCsGzvzNiaPNciY5XCnG2KF8rvQtxtQ1ausoxiaxK3o5HCCHb2mVz891",
  "key18": "4dnABg8a1g4MKxJVekvKJndqehqKPSob5EaL1oXzU8eEdUAHqz7aeieeutLZ9RHzpB6YTUzE5bi2YKeUEN6pUa1D",
  "key19": "3R71w1JhKqbDmwB1GS1z5zJAyokFreyir6Auc348QfPhu66DSYVjbDSxjpTHs4Dgt6Qnbs3j6nkkJbjVfQ7EeNnR",
  "key20": "4krcV9kV1wy8YEA89GBcoDufeu39uHz3ZiGn6xgi16oRvVi1JkUz4V9ZXam6bnNLvjMeD6EyA1Mw8WgRMyUA4ppf",
  "key21": "3t5YZHykFvaAURZE91DXC1gaKoENT8X4pbBqMtNeo2opsYF3su53vBnjs3tZPUduifqZQ7DzshZrxAgXbTerEUtg",
  "key22": "4vgzq7aGZNe1GJdPuYAR3Ng8ZePvNVAEM3ivgs5zvspchMSvLSx9W3JG8h4MRuJWPfAivEPUztnQA3LNjzHVAVtQ",
  "key23": "48vqcSHPrGZpP5s91WhenSWtNesHQnk5PZ6PogL29uJCJacvh4dFZgqmWAZtPnpMXKymnJqGHWfJqhmA5LTRxzJZ",
  "key24": "CYKSPAQ18Ngi3MZVnAmDVcPJNiFRJg9NQNnaHsEWY7isHf8TjKhmAQQTqVQtc5SaV8ccH4bEPPati3kxzsfFvzc",
  "key25": "3tpEecT9tRPXNb7ZAQhYPvFh6R1UADJbYuhH6owudPQNAZHd5BomcQvuaq6Hz99un8c6EJHmY5b6a6tHhqtnNBhy",
  "key26": "4P8tEwVNsTTTSaDWrMtXH8e8PDePbF2vwSkJ1ftJnb1w5o2JgNpzD2e9r7hjRC12XDiAxc7X53xsEqBdef9k7TwV",
  "key27": "4hie8ZSkHadK6QFzBJgAc6UX8GPMdGtAGB34mGzZpJR5TU7aasghRTgRBHoJGDL6dYXsCJ7GQFo4Uq7i881tCUSn",
  "key28": "2Yr3PUT5p7NW3nQCkycG6fPftngJkNYMit9FW7Z5NataWsjPJWzqKnUeM2Vb1SvRcGWDNHcxjokXpqHnxmAUwf23",
  "key29": "5TfehVjYQdv9ESkUkkY2voet94Am4LTYE5Q7Z46KpRh2ZHGBNUujzNVfY7TsotBCp41FU7HygWXdVf6U2myYx9fk",
  "key30": "5v3KqXL5Morh8kC17NXQi7M4qAtXr1xDdbFyGmbqVepk5wyHCyjmPrL2J5jfKzHi9WdS62PE5KsAHAPkUBAEJKfb",
  "key31": "4FWHPU56yrdG9dLtVT6613XzKrbCVWokDQHi6JrkqqNm8pjdjK3pQJV6yJ5yVVBJETcpiVYD1pxANUKBarzjVjSW",
  "key32": "4o1ojRn3xBizm1KWfW2QsXT5ZCwrPVQam6YD2oKnH81BAip1e4HTmLJWd6u5XRETCS5pQ7dBWxvqH7WoNT9QAnet",
  "key33": "5C8DY5KjAGF3jqbR2Efp79dm9A4kbW3qBmbBUAvQgfPr6Hm8NjdDE54mMaGpryyaBY9LfDecb34Zeq23ERwQUWEq",
  "key34": "42jWNm69uVWEQ8v2xsBzQSbyUkcGuqLF23zz1qyNZb6VVJBoxNz86WgZYxUu1HQLUPWMW1oCfeh6qgNMqHTVbnSw",
  "key35": "52q6XY921MN4xfaHJGDTfENxJSJP6xJPLi233g58X9MUMyPFgiFSxHsyvHVsULDVEerh5szzvW4WQVjtFpLPePcT",
  "key36": "5Ux5dyXLhR9mXQVDPMxYEorQxzCuVaiN75j5STmKvDrhmK91kjAjxUc8Lv5z7n4CaSm1zE3fEFyub7qhUs58dKmL",
  "key37": "2kNUYmrzgxqGpUV4z6h9W24varCKcsBrtAohBEGvFLdx2iDbzox7rf5dp1XEwz3hgt8uz4kMnp5sdfkcVPta5uto",
  "key38": "5KzH6dBJNTF2aXN3kqsm5K8T4RkfxEpTiU1dPYabLLXJhpEYJAzNdd54kkRXm26EufqMB79YDMyx8crCXUsKQ8jf",
  "key39": "4tZ9rX6w7SCCZHLjoBvbhusspz7JePnK3GnooHefd9S7117dG2kr8ZQCqUAiRnrVfULLP39jw12rdFyCyHWj4Pqa"
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
