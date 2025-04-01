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
    "4HFm3RVeTMhS3z4QbBwtio5qz8Fq99aUySGTaWEnr3evr6t2vPnAtw3ftbVoLfJednnZkPoJDp3fT7UqHFBmGfih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BqsYbs9c6ns5mKREoZynbSwTVaZqZjZtWHkqvAGaosEz88iGmUMNLwqNBS3XAr8efNK2FgGYiJocS3DXLLXst8S",
  "key1": "3i2VR3JW5V9yvGXR5oST3Wv27UXfBgotnQARmm8kPL1ncVybmNJWd8Q2ttvVcG73mm8DLhZVpQ4yf9V4ipGVqwVc",
  "key2": "rgPPrQFb97GxvWR7MxxNvUbHbUN5v4qtNSnwvaLeGLd5fGK7H5qsUVRxS79bS9HDusEBFynNrnJyqRoEEUc5yyj",
  "key3": "2n8sQN2TkHv7ZHypfygtYkCXdPKYiEdGgDANMQYwvVwguxiNq4gwqXFmgcjrPcnWb8XiHPaRC6WSAseWUB4nbTfp",
  "key4": "4m7Ts3hRSmoDrdwDmqQqUhUWJXMLtWnHKBVaT1TcHxACYLDgZvpiDkTdqA28vUzkcti7CgVotPf7wP739uYmuVH3",
  "key5": "3SZVCiaULNnidLVPJRCzYo3KJTWwZXj9wUkMZsAbfkoHoY6Gq6jKWZZQMch22sawjqfPM91vNcvqhwFjk3KThCQ6",
  "key6": "4UmE8jGc6VgSEMyYhCwopF15KTrJ53tdM8d1KN9BXrq8qCTrXxqb74BrKtKBxmEuRixBHpmH5T4H2QLWx6RVrKEY",
  "key7": "3mVqgBB99NhjEFC2CvJ3kfjtW1qa6ohgjDCw75Z8ARnFX1W3mExENZmrRTC9gAKRd5oQkNabTLcf9S7UHASwcjmd",
  "key8": "2JWyRdFK3krmDayeww5syRpB18xcympB334JRoko643LeSXCQHz1h1yHvrDiWEYEn4Rax3Ln8TyscTp29Hk6S9L5",
  "key9": "5q8T5vasfY78aiLQ1raTKsiPTov4HAWTW1FsVLzDtEPYzVQxYYRETmfh7U7uRaGq5bXmx77rPPoQ5b9C5o5j32cU",
  "key10": "4DucDibVRFegs33sWrkThyx3T8KLQo2RY53yev6FTtciwL62Kwn4AHZPHS24bA86aPYCuW6VZ3HPLGWL62eeWRdz",
  "key11": "2tcBLUCSm6LtwBTwuYTsiNBWyDWuuFacAwwFMTsS4xJjxDbG8BFX6Pmj2PhKckr138soTiBCFKhhHsT6si8JLK3Z",
  "key12": "J5qvc66Nyt4Uapx5D1JiQYt5hzWiV4mMnjbUz3VFHS8KgT2EnjpgcTMjzs1RggYJn5ySHEeTGheiy4xFzo4DyvJ",
  "key13": "5v2DrDr8YSgRXAN7rttbF1kJKJTh13tLCtct6nuWZaPkCuzMZqaRnqBzDJqTXmyW1iihNpfKokq1ZcrELvkjRi3",
  "key14": "4SedQqF2gZ1uuniBLRPXeXagVD6Ar3QNDEoT1WPqwduZAAE1jx9okiYXD5FGZ5C54JyhLYtvMkhCWGXUbqEhTuHM",
  "key15": "4DEdpRrzqV4A3fD6DK6XrmsZqdjBaYDDyQxYiKoHmD1d7yDt3ArT4CXq1SeQWUZp9vuZx4XkZ9TK9kYekEb1LrLg",
  "key16": "4ur54HiXNXAgBvBvSfjCpusm9XQ9xj8VGFKRxBpY2tkJKWbCyha2YFaxgVK7SHC5Bz3x2ijtVnre4ZFb5exqrGSd",
  "key17": "62sSsqQqencFN4A2G9hH3YhgG6hxArQUTx8k844yxc4R2m6KQ943ttTLAskh6PixT7gSJYkvLmG3bAbPuPNk9PGD",
  "key18": "4cigioGX6vVHdHfVwEmuRFweQjKzrcLMZHgRe16JyVmqtkDH7ctRHnMrzoGyZXtxvMvmBcg6ztEyysgpGfbLBPxu",
  "key19": "4BZ9me9tRf6pxzopdtfCn4LyPih96r2aiZ7DYyJXpEA2YLLZneV6YQRDykuMZ46QfgoBAEV2LTKnQqL2zUByqwgg",
  "key20": "4n3nFpnF2QoeqjxSb8v2vaQqro8Nenx4oBHwvHo7ME58P6UPWfjTJAWaV8HQ95mmMb6z5tWr6T7nruiJGaxPCwjW",
  "key21": "5jYhYTjskyujSzjANrCo8Lr74SKsmRaWLyWoUpj6nXsW7EBurN4Z2rg4hiwcp1G14p6rERt9bGfXU6deS3qkpsmd",
  "key22": "3HJpRuoJmiq6DufdnEd4tMaLe5ncJygfFYrQpa3WoS7GFdS18xUhLjyRrzGZxi3GwYM8MNJjycyftgpKSYaZj1yY",
  "key23": "3nVoM9EiPwqtcouFc1g8yCffuxR2wvnWnojE1Vyu6cQqtjz7wWsGHR7XiPmUg6EyctRk2RnjjwXpK8D7XosRCEFJ",
  "key24": "4NX1CAA6Mh3qTbwGY2GfcYqJbeyVK6AyCHohSjhyMiafJvz8ZGk5hbAj718jrswtQ3djbQV2VKSS2SpSzSNyYQ7S",
  "key25": "4WnSvamUDAfkTNYATTyvQvUQyigg4EGBJZsZpd4wiobKhAnxerkLdEQgdmjp3CnPRwRu98nESgbLJSvbZTSftkUg",
  "key26": "PHfP9ecXE2GYGkPoq3JBLxpXh7eDauffEFksui2U2Q6UsLhEM2XzN1V2jzWZbfcsY422FuXZwup8qizwYScj83a",
  "key27": "4EBHw3CzHNUVoHdJzGpAvvLVJTHq9qWFF7zWr8U8UQUG8y9Tu1nVCkHX685RSa42LsPxV2muStdhwiE2RbV7hL65",
  "key28": "3xtVhgFaGzyKVd2g6V2N5g7HPpJjYYbq1PUDMocJfUPB8fAdBbNWpbkAXdurP18PGgEvunBCzimEAk4i5e4GHNZ",
  "key29": "439JmQqtvhMe2AawfENDmCcBbJLWmDp7RELQiVvurKWQ8aXqJ8gdvkNAHVGGwJkotsHHE16pLyHHw8vDNoNGFp5t",
  "key30": "3HZJj9UvEPGeTDofXiCEGSnMrvG3LKHu3bYNkYKAwjvoRYWH6p36C34r5iGAmtSbgVbYanssVQQvRzAS9KS1ifgz",
  "key31": "5AwriLhMESECnC2uJkH4tdZL5ajRRndoh8xKV7paHPB8YBFhfjsQVgCpsbiNxrJtt5teGPHNe5hSrnBwuFAgmpe2",
  "key32": "XU687ZxJ7NUvmXrWEtqoUeg8ohbcSbn3rtM2FN3958tvUBA6UDjdGsdSVfVBgobN3m6hE52ZZMkcAsHmDaT1QZj",
  "key33": "62eHRQVRRwHHJY1CU57KivopdJDDozMWikTTfMaCPV6kVKG2vzDJLgW5Qh6L6eKPj5JdXnYmb6famhimHauncEB4",
  "key34": "hx8PdD4hK4DBztUpAf8LXDycQ8Jud48bEA8MuVpmY6ojP2ydqJjMGFfBKCzKSU4MQidi825qthMpfoj9KMMn4gM",
  "key35": "mBqjaKAXVntyyVj1hZVrMY4fJZbEPscqUqdbxfSgKiTwsp3ShjcAmJB7p8Dpi93vnk2AoSES6W2CC1vX9dxwyVf",
  "key36": "38Tt2TiAV3DMkAQ82MXmYEKCn9VYJfDWQFmYf6q325FgJFRKEfMrgLfc9ohQGAR6c9J6Mj41LMANfeYdrrQpdLRt",
  "key37": "41kaq9UbmxMF1Bm9oXLt252ncoxPx9Nq1UuAdMtJctxHWSF1QWGNMd1pmERNaPM8Y3QzLBezBoRdUx2SqJJiPhsX",
  "key38": "5MybuPGo5RKtHMWJXgqFeR4krm1xE7X2aATSnTdNen2HPfVzKJ8htrwPguekXhjx6Mm1pDEa5ndtZC4Nri83NWnS",
  "key39": "4mzf9RkB3ATqQT7gimJx2QXC9KRqptQWgvE99cW4enV76vECU6mGgUEfZ1DVVM6nBFm1tUr7Z82gfhfyZKGNtE1x",
  "key40": "5mBJrask8X684RACSC9xTLdZAJ5iLuGNa6iz8wrX91KoLYAfkaqLPED3FD61CSUHeskwwE3EpQe2vKH8zFmuRki7"
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
