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
    "5s8YRvJTX8RDBTE4iNPXyPFr4YBybsdHH4qPG3nFzx2xpqb9b7NMJef6xakSz2eAPE8qriaQsKj4T5TekPLRkof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4geuWM5PRUMdKUNNH2htT7DPTS5HASHbKZCAEifDsd8D4GbdvjQVhRAtzDE2iRsXTaaNv4vH7rcm87NrnkoN2Z8X",
  "key1": "4bjJTGzGyShpFzbmKKcYPJh9EMGRQsWHfJWEdP7SLp4ytrmp7YCnEjhK45dejdoKNz6DKVtzjgbfEY13hPgXanaX",
  "key2": "5yVzp7eNL9BHqRDLp27aULGr2J6RK9kD9a4Xh9DxPqMYqP5UaHpJonwNZzYuZb2jMEdQDoUy8JERAZGkBxeeC9W9",
  "key3": "Us8t7DkWV2MUMGKB3avu3RpH2YuwbLw3UdYeFNdq4mHxan5ZUxrPQJfmwrDC2S4oG5UAtRZpzrCD4RgnXRqdnZr",
  "key4": "Hz8rtDUjJmSzjRGhJh5uv3NkV8VKoJAPur71htUfqCp6srvtRMX3MpfQpEHFwtpHwToenU25Jmn2tcn4gcAGFpj",
  "key5": "5JzZsB1j6N5KfqmHXACBt2MHmSdaHaKtYtGkVBz5ZA45fGanhqEXYvRURu1hHPtHvf8Zirq4PjnVVAxhPfbxnSGF",
  "key6": "2md2MCtvEGtpkKw7gpMj51e4zydJAR1S1Z9bbr7CX3Wo6aS2ymtEwMEB2TuxZVdVEF7dhe8kGmxy47R313R1fttf",
  "key7": "32YAMsotuvz2zk3mmvk3XqUYnS6hibALacz8ePAiDKAs5bk54nGixr6W5kkr62raANEjZytqty4cZmxqGxU1MqKc",
  "key8": "59kBe4xMrEH2uY2BejaE3ctJrJZuiQtZcErEQ939Bwaovha8P3gUFEanCp3QNCQ61KtXaaJHFBz8KZ9RDHj5ewuF",
  "key9": "2cCjskBcgXCmH7owU9aKvWZGb5o4hMZMG66eLEKcuqWTdezH39mpS7BeYewwnqYiCWU29fLBKYsZTX16BBLWyC1L",
  "key10": "48JRrakp8zFoc5ipRjWUzALYsJx2c9fBqyFdiDQ26c8ktM9Un4oxnkwjntgoeGyruuGp9Jg7HQEdeepHys5ThMgj",
  "key11": "avECz4XXqhmiZVUEMpzq97smmExkvPYYFWn3gntVBAQbu9H1x1micwGpdjxFR97JVMaC5y6kq9UFbhUsyZGwMj7",
  "key12": "35ECBWtR1XpC63qF2mWwAZCiSjhuLXtQpxweJ5M1TsPRVfFWuePy9BZ5oD7tfRLWRhvoXVhVEZzhkjHSUPC64dyP",
  "key13": "28wdfaihF9217AFuuCAuCrFc1ivbB2SZr2jLQjMvRZsnQyHrhMv3deK1Vr4k6ouxxPrsu5NMizkKuunghApYgwKt",
  "key14": "4ou9sPx39Uqfdqt2nXZMLteHshi7CKWpkUyCeShoFEMWEFeRsSzHhqmWRM3Y5w8f4RHXGQAbYxpZ3NMmdhPFgqh7",
  "key15": "5Heo3VaGYvPRNXeLo8s4UNrYnyf4Smevunz6aw3sZd6RpVaRMYvw8rg5hzrq2Re14DLaVwVzWDt876GSnmSnWynL",
  "key16": "jBqZHKxXSYZx6Z34yFzExxRcWXqXUjmhLipGT6cX8xkR4t6Ldw4iBVcZTfx9LJCtacq37skvQJ2ZWd1bBKTPR69",
  "key17": "ZgXwhCy7kwY2GGzLNDGZZE4cHwQ9vgyESQ5UZybsvzK57Buu6WL8aydqiEurcgGBEhRu26eQwjgdQeSjka1B1aG",
  "key18": "64j2sVNWxU6D8Bt9UkVXb9ReVDZ2mKA3rarS7qKpppigyBG4DEyQomJvuN7RPKkWH8aD2Zq2hr7WJLUNqFv7AZht",
  "key19": "2uGSS4sv1MeUDe2Gs2W2AXTR3XYw28LdtQmmv6FTk3gijBopMawFFrasCARZ48KLLy64hs3Fa5HYBfuaCfuWrcGF",
  "key20": "3Tm8v5dAxBDoqMdzSZyszPt9gaMQC6qyy6PKAtG6D3TSnLBhCn4qVNzyrDv5evW81Cpyp2phrpjnWj41Jz69kmNn",
  "key21": "4fESKiHzEaGdmypuU88cSvj6E2B91MrfodAYxEvFkXfdL4EtfU8AWuynPc4NCe4JFLVHeiSc32FWVhVNKDdunMfq",
  "key22": "GEKDiqFqpu5H8NoBY8zw4zoGW9mPujW4ysZiHw1d5PLLzVhs6vbS8jCaUV5NUj4jTxuQ77kEHBXdeqRtCALkWSP",
  "key23": "4FKdBAQbwcaoLFN9vWgxVzSCed2GePAe2mcu74Supdo6Sgi7VM3W6NXBQH6TjkYsyACX8yMQrDPyKM6WL8qaJLq6",
  "key24": "5Mt2jyT2fScrWobWVFQSfLgoNxfgSaxzBDPw9oVJnZMmWveSeEEYMGpCoam1UYdQCbfGPPnMMCApcLc4W973Mv9c",
  "key25": "3eeEf76xbqnb8aguBN8jokZLUQuUSCYvdKaTVTqkHiAf5q9LTVV6efHtE2K7YUzZ3TdATevTfNHBKAdZe19fsE3g",
  "key26": "5HWLDYKoUtX1x6idPYjtz1yLDQUGY9b6iX1QMLesLCBc63NhVNKBNNrnk6hW9dYSvWKgxMwFpH9bcj9EDN8ubR6z",
  "key27": "3ZXDyLsfeaxe9Ec7mvBfoCvj8mQ3kQC9MS7d3PkRqd2bA6W4Lddie5z3FeSwTqeQxZAf2vtQpEjKyQg4R9F2i87p",
  "key28": "4r7F8DYEjg2A6qkDn9eapVxmMpX8D3RcZC4DPZpbbZT5P3SFphn23tD3GeJkEDP6a713XwWmCRuzUgegMdAzHB45",
  "key29": "5AwUvRfcJ3RtKLQfMac4L2GSgk7zgyiUH97yddeVMBwsN8PuNQQrDQqTJuoFCYxG16xHUpYemq7q8kLYtgNyiPLh",
  "key30": "3tjQDKvfhyExBxsGysuQZf6XXfieehxX35eXUs597RxoZAUe44aUiKPfVSdqf9RUkUizumrAVBmFgCzpkfRX2rea",
  "key31": "3zzwooqbmiryEMsbp773GeEYYfF9VPbp4W76sWNYKSi18nLLecz8cXooeDUjvge4hzRK3XbDQkxXV7Zs1st1dAzL",
  "key32": "4nsMBETMz5QGXYVL96b95sHBmMSVmrKVHQ8dgUtJbqrunA1W4SQThHusqig2Z6DFgJ1SUy2oFUmS9rkocVtwnDd",
  "key33": "2jVeJD8xHnLavExDf8Gcn6pD1F29HCaP4fGALMjJjAXzzX7GuLQSYtDp1xSMkHb7TgUuCekn17kgQt5uxbMRJMpk",
  "key34": "31QdGByPxnzB8dsMBrzqhPm1jrCjY8D7QyCRMLhz4UAAoMd6hW85SgAHZS5ChSavdPWmaJfb7BCGb3mQa4GpDda1",
  "key35": "4zZc8uvnhiNG3NNaYxZPTmD2Ckcu4t865cfEkXPtEkpPoiuEQtLoHHEWstSjYUNUBpEGJ6ZRgwsfW9fUn3si3wgN",
  "key36": "4mRvM77P4DfsCKZW5UBN4VpBDRaZaRb4sWk7w2r8SEXJukQ8KyTG8iTpe7qT4s8z37NdKASPWmE47cvFuzdmyQNR",
  "key37": "4zU6stjr1gt1yC99sdNhLmfGqWyrfNvELLpNDqQrfodMNuM5MSfeWrdcfk2XL13u6fXWyysxp5qpJSBHmf9eLxT5",
  "key38": "5vtwYnD35sSeNWw12WNYh24jbqHLdSPX6fQSW39RBmK7o6h818QFzMPt4zLYsfEPwF1yfeu8ZyykAVKzvRKSUTBX",
  "key39": "2rjbg7U6JdPVMWFqroAZHfajFGcDbJ5bLnKhMadXJizQxXdY3caiqKva3frTssWXDmJ6DrqfHNPhUXQE21XpAoLv",
  "key40": "63rsCXTY57hT82VCSJnSo5oxjkD48cqfHA9K3mhWC69wJ68TbE6Rvx1x2sAeyofFebNn7TeFwUQ5aVsiTjyyX7gg",
  "key41": "4vs3qc2Y1g387vxMH4m4Pfps1L2k4Xnsca8y1qefP3T3MhQCHZfm1eJqaMCw6YLHoiscV9DRQXiPjY7cRzsEo9VV",
  "key42": "2JoFWawkt2VsVUH4DT2uJByNGyE5YfJpQanFEuoLmSRLUnAXVwf7aHWF5GjyaLSDbCRwKts1MMKxeVfCP5gXdviD",
  "key43": "4wJVP3WMFJ5hXpMe7wS65NA4TJgS1Q12cVnSStLyq6n4ruusrmqCQENYrt73T3qK7e7A9ZAhJ3FPBCJhhu6U19ro",
  "key44": "3LSWoHNFdfkqBjBNDQcfuANWv4siBMG9V46Ztaqt1MLzm7zAhYfDFGt26wkynZxGKgWAE9nJHZWtphdY61BfMQG",
  "key45": "2ox8DEDPTufVQjk6agVbbdkCgFg6ARmRWQTuooEcPvQCWoUAqkWw8gS3uSVfQRN8uupJ5uo8oGsVdbU7CTYt8Qhv",
  "key46": "62TbrDUCh3Yon7EDCHg6c71XspzKBNbq759nBSV9Emr5EMisbhETsNxXgfToYCKa3VFDnmWosKEswCMhryKEGyMb",
  "key47": "3x2Pxq8comCqYZbyBWkijxbDJqdtc6NV3A6AEXgXyXCqecAUVx2EG63YYXNJod3SjwcDwqbc7Nnm4YTShnGko24P"
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
