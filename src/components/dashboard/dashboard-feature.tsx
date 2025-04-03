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
    "2K42w8u2DEvwVKTja5yYVupfXi6XNoKijY6Rs15XZrznPzxynwJ3T19Z5MSSJjJgDJM1pREvQQw1cZGZ5dceDao1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Y6pm9ApdsG3euJEYxZ8VG462a6YZcPy9a2cKtkp5b6vz3NCfhJ8NourfPMNMBW2pozCCwqDkeHQrokdLChfC37",
  "key1": "guuQEEJWawyFB8hZfbLwzQgmn4cuMR6ie1C3ckBGwzAvMPkhzZm15uKSo6GAD8SvgJcU14JNEdXUgmSsAoZjdpo",
  "key2": "4uuMynm1XM7TQ3N6ecgEDLBbXS2aq1ohJFYU5iDK74ne6czbFvcydfyM7a5LoScC7DKCaVFJtST7AM9dchgeULzj",
  "key3": "41uwsdFH5BxVqd2mfKvSWVvacBe4jK2WbranKGxCqMHyiJ7YKga6vW9eNwQswwTUppLEBKRk181LMevdSCFMMMS6",
  "key4": "9dxnngGrq2oMrpj227LARnLjALfnA9EE9JNikDFffyEtMmiBYaLfYrJ37C4jEyA2cRPKUQgUFmuAcg6gWZdZt2d",
  "key5": "5rLczn7VFpM8GCKf81SoMbYM5DDoaDuNdKz4eqK1AVqC4fZQ2dLVLMu5w6krqJsFvFF2GTjsKxHKo1WEFqqEWuuF",
  "key6": "4Nrzg7UzJUqvBF7Z72fDXnqCPTrzpsCNAtQRwZ4Vjp3Ndx1Hak9xbyy3F3MeW772z31Z3CZnjxhoDqgvY2b56m8L",
  "key7": "28pL8aUHBts4SjDkcjRkihJx2doxpUEwoZ5kp5Kpp6hz19RU5ZiaMwH4pi2EmcTrok6iNJSiSUKDhWJwYXGY6GUA",
  "key8": "5avZNxjewGAXgQ3UB5fVAmMt4cf3g4D7i34cB5AbyTkMkut7fojcP5jNCQ8NtTGuhuo4Zn2mJCsKZDtNKqX9pHL9",
  "key9": "447uXcbmbiBw72WcE5v9QgBpAqDucqoHFyS3BjTaNQ7B47SRdP9wcuPsupoHUffWu1Rvc7bsQUSN32foCP2URYce",
  "key10": "2Hr8A73w17nKDuPicYh25VewsT9rphvSeaxgTJy22P59DEVQdAvpticKjTjemFG4Ykdic93DY7XwaQzJypHjiVP2",
  "key11": "RXGrCyfhrgdrsThZXPTZaoGgsSjSoHuuevsP6bX8A3EEZF1HagHAbqwf1qSw8mPmyPWALpB8hjovqhU2JdAAbbN",
  "key12": "48nqg1Q9jk7uPcGTzg63FZ2krzgSz7iTFRKkFB92HYWdSn3zqpukafY2VGRr6pYMvuJnaJskASg4qUEtyUcvncwc",
  "key13": "3Ucw4PcgbJ21UJatYRS6C3ekvFkdx42ktk34FNcWkKqueVNHA3Navpdx28HwXDFLZxEN4zc3JTUX553cgzGyRpwh",
  "key14": "3s4CAKBNh7PYkD8AzVk79EG4xhNrn4mDpuG7fKbtyh2EMEL5JmN66w2hcP9Vtcr1R84b5uw1yc4Pak4GjhPsp9Bv",
  "key15": "5cfV9ovWCpxCTJWJtKX8GS2a3hsdgYx7j63sAPr1BF3ypFjKmtnEat9SfbShKKjpS4Rq9BgYAxY69XGaBHjY5Jwp",
  "key16": "28dSkPaHH3P1FcpwPSxacuvXcVMc3W2WjP6MKW8bfyh1WHJ5E5TzXcRURdden9VJPxWXz4wzq7JpfNf8Jej82GaX",
  "key17": "39eu4NzfkjYdvErSVHbqLw5ZV15RTLnJoXrxNKrJwWSoxqT8TuyawDupgMTdydhq62hQfcxLAfx6ogybLH5DDVya",
  "key18": "3jH6N7TPqt7K1vgwMGxRXKcc22Gj9CArMfVBApbyXLP8X2wh8dfoDokdyK6jrNrjaxY9j5KbNcUscscXJrZXpqJy",
  "key19": "2rpGZVaY51GR9TLts31qP1XjcwpVFbfNaREJ5qjZP7XXy9LrszEpA8VY2dKstNSpDxMCpVPZFYxL8eTEPjXPhgUw",
  "key20": "5hChgcxKXb1TsQtNhz5wRNRqduJtGxdRE2msQFn2xdYfnzejwDFUaqBZBjXy2nkAHkFQgMbAgoA7spDHqCbhi6ni",
  "key21": "2vwENREqUk79xy7nNmPRo9NmzTChzmr2ysGsD4XUNY8kdXVBcXiYxrTbWjT5urixrJemyCCGwS9cHqDYtL1v2MNK",
  "key22": "67LCtrjSRcky2SHYsXYA3bwJj1rRRUUKNFJm1ppyTaq4vBhATijsqBXukcducyPfrZWyiCfJXqTA4UEUG7KrZPiy",
  "key23": "2HdLx2T4bcuuaqtpyQ15ugjVPcsCedpqm9rR1FfQJgopXkos9c7fw5j8L8hC1fX1WKsC65KSp3ndVGdbijzjoSdD",
  "key24": "2yhPnAA4GqSbrVSubScGzV1eca9WJ1Z54ubMR76T6j8wd4ibJjgez1QcTyDgL51kpGWjz75T9Kv1oWgpiFwKbyCy",
  "key25": "2m5Rkg8Z4PNgUYB6EHvEkHzbEr5uoVWrP3MfG1J2dtAP4FcVXztSthpDYZFp9v2fUVGVaQ4SxHiNiuHfTdv9KcQ3",
  "key26": "3a4SH8U4yua3kFBbnj4jsXqZnVvdEJic7vcqSQtGu72E5eiSbwSZR6AwVVBP4tSDpDfHj8E921VAD35Dzfvboeeq",
  "key27": "3y7JNkGjcoysyMbkGQ6jkUP1jfBh79LNZhg7v4KQexH978zs5pQMEaq5JeC2RZoBroJSM9FB8ZsNVXPMa2yRcsNn",
  "key28": "3Wq7qZd8kVEUSZaZAE6JihfB6Zo2QiDaYmAqKUqDRfxo1deQcXtGt4wY177PrJNhVjV3BLoXwneUvr1XSeW1R8MR",
  "key29": "5iH8J3H2F3vas3cYKftEMHjdw1177KoNAopSZ36DmtXeHQTdDwGQbLc3W9T7hQM31UHrnHkJWaq9R7GB4TbjkT7N",
  "key30": "SGuWZ5wyUiRvj1oVyASK3UEQm8KKizNp5GmxbeBgUgsVyfAGP92gXAAYPvNvgeiSjAob569Vo2336qmXEKKLstE",
  "key31": "NbYnyyDGD2eZEij1upmxSrdymp2gL9bosueE6d24xF817pFSBPqbqybj1cAzfvFdcCJGyURytQzQUS2oFt17Lyn",
  "key32": "3JbWEs8P4qnhtfUDcnLJJXAVNty6wnPVoD4dMLfgrZaMKHWUz2DY54mJ7aVRGj41w3zMiV1RruJBdohdW5AH1NCX",
  "key33": "4FwTc9iSHycz65VjKpRoLLPMPFgBq6sMpisLA8N4GXPWXvZPzMHzeXEc9Qaddy8rjqYsBGq4pxvjD3jyUKaWN1A8",
  "key34": "2vaXQAGgANuWEZUo1EZGGYhTK62P9Ek8hq3qK5UYVCEFz4VXjhueq9thHAVR1Xsi5EQVk4EHJqRv4yFgATVconKE",
  "key35": "3KzgcrD34NpWu9gij17mQ7UebGmNQoJZAAiY88sRXave2WGoeoWFGSEgiY7oWebNFtqnTk44cNDeprZY9nbgKfha",
  "key36": "3mRXwk7iuun4dUVApFtrezpsU4rZqGtZSgx5cfJPjzyEzNPQqPTTEMugpHtBMPeruVUhMU7VEih9wqrQSqEUoKJV",
  "key37": "45aC4yLL2eWso5Db4VJJmaxZPeTxepTjoSeKmUHS7Jw6u3jXSwjrziP8EY1eEV8Y1YL1jvktVogKFVCwD2YejvFY"
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
