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
    "CGVF2y2dqwxmX8PN8ZvoGMjVuGkf3oXC2wrh3wFnXmU8VL2vvuLdufHXmny4L91fb78ibzXmvhTzTXHUXgZ6u22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eBZwwAW2gmdXFJm8QKBdRiti8bAXWpq5GdQGMCXK2co1XUcwdnqADxnpvA6QnBL4CgAmt72KeAxkxTSoX5tS3FD",
  "key1": "N3DEuHdkGz7aDopViY6N5wZEiJfQJchS2zzX8x4MZ6gFgfBmzdtLzgD7G5zfRjEygGbaHBuY6tXF2fTf9qqYfN8",
  "key2": "xTTgaqre7BpYBhpGHprR9kaJbA8ibmeDJruvJwtYGEiYtbSj5MxMh5kUNZbkWJWSEnT7WtmF5xqZaAqB4NSqogj",
  "key3": "5tsJZaWB6EyoEtdDMLytmANeMgWGf4tGexTgQECoEW95p5XDvtEZpVsYWjbPapxtm6kJCZsMVoLPacFjWKpkrewo",
  "key4": "Nq8N5PQ1duLn7eCCuPAt945u4WxeA5onhYVmJ1io8vVLqx8MDZ4gXifPCNb6MaSiStVftbTSSVUpjse6htF7HyW",
  "key5": "3HxsyRBLawG45RbrSX92pWa5fxkPeipW1Y8YrhrXm8XkvAwT1f9qYCKFt7A4ofJKzGCb9kaEJbdZCaQUJPkXqTND",
  "key6": "3ohKGNrEGHzZ2DC3GXirftvoAENAKccoc7EaN6QhNk7XDZqDJbz71ujXkvuAX8KQAfL7XFuCGh66ivzGfDSiC173",
  "key7": "54UBcoS3ympCWKPJpEetg7V8HJML2n5fvsSEL4GpejhpEpMzdYia1rgQDeLwDnx94aXivuFcAgqUpmb5kRR2VmLh",
  "key8": "52iikJ2imjRDYbrvEvkePnZXbuN413N21GWWzhPkUDsnWzyKPWwmPevkFJNSCCn8McRjhbH1Zq63numWv1Dq51nz",
  "key9": "3pfphEGxtrNHMmhWjR9qWtGMsLQhbmmfLkMwBsoYGf6RgQJxcp4om14hrHvp8i9vKfW16fJhoPYjCWmUd6Li7twF",
  "key10": "2AdJTqbTXpVpFsPzCmWCRXAUFYi3CzsxkjaDiDtnvRjWZxz5pyKxMmSGv41dyEcQ85wT9Z9degw47r8n9cS8cpBT",
  "key11": "4xsT2n6AZwffHgnkduQB9W8RqumJyVa95nhd6weM5BpRy1tUXeSBoV4SekCcouBfGSzE6hwTiZGJsDtjrxw9xApp",
  "key12": "8XSe4DNVrG7x2uSBcP4vpgmjAqibMuydHSGXcHAJ8ftaPe77qbdu4MXBovPUNpjrVL5dBcPsURDNZMUKjuUKtgr",
  "key13": "3zLZYSi4x5YQHz6QdhMWDJ5F9GQeS8qLe2wDaWRiTAHhQei2MN6JFbwPgkpVu3a2tTJmXTZ3FYgHr7griNWopxh1",
  "key14": "3SH8xjcnX4uiw9aHrerLkJVnPkUCx287aGmmKuvxhPohsgmJ5DSidvo1or5Wb5juMLEmGX3Jw5HDzvBTEbxomAqh",
  "key15": "394LQsV3TGKwCae6SdnzZKCrpRgsaKw86VYpsYUV4oYEuSaBFuePjRH1dZefCv1qrudjUxmpEeZQD5pVFPo76qu2",
  "key16": "58GctaXdkuhNzNMH4uNpCnyUnhkrTsEgA2TvQto2pwtArq2YRgxd1kxvpCsN68RYsabt4MP5i5rFqGC9WSRFgpti",
  "key17": "khUzqAMqrgfeaLPwotHMrhUeggZLrbRrPM6KjHTjvAW5FLTBFqTmCRYhjk8u63FDXJ2Uk8JRerfQ8GJrdpciTKC",
  "key18": "KFpPQ7txvpRGSnreowga8aMgivPaL1Tz4ZmpnKcKRJu4w1sD4HP3uijdBWP3zeFRtcoj9SjtAAY5HDidwmeuooc",
  "key19": "VyxFodtieygmLNU38opUyi7ppyTgmKbbU5u5TP3Z7aSf2psDqnr2Dsse6EFpFR8G2uThDsif5Daq81ekaosMKfU",
  "key20": "3rLo4qeqst6hJ3x1dpR52gTnmc8g4Dh6DnrC6rsrJtgWAkm2GeF5o4bXTbpkB8Sb4MAdLX1qkAHUZQgg9Vt5RPcH",
  "key21": "M1LUiRsVcAMdtSDpvNaAC8YpieRssCbDknBNT8eGi41Z7jAsPP9hAktakrUnYuPHWE1jxgMEPY87oiqpd64HsQB",
  "key22": "5tump6NvVqm4mi1W5qmJzqo9VFovkWHzrNzqzMF9rSQqTSkfndPMp4N7AD9ZE6zdRvtXvshJ4REQcPwwSXr8QUUp",
  "key23": "291g1KR67qAjTx3jTHjmWgoU4xWRNb1nc17utb8k1ZJW3VBo5szcRaUNXrtHMVKJYwifTHSUtCxVyefSefdiKDdX",
  "key24": "3vUXV8L6j7ojpdEFa9xVG6ARns8NMuyTsXvwccUR4ZYtyWgP3chvP9EoT1zyXDiWuehYDGAFA1WSrGcUrYtUoiV7",
  "key25": "5x7P3fqHMZ9Sc3aUMCtWGT38e8ZEBf86Z2T5XiLeqt8jSoAzuBpbrwrDKWK3wv6oAM8i42SCHT3hF7P5TCCpuHE6",
  "key26": "4ZVnf8AHz7W8wYiuAycYE2zKrBuFkbMWzjkWuskVvkNcWAeXA2VhyU5T3XB5XojRs8F8Z9GFhRG2GSyQMWfq9h4N",
  "key27": "5QBQaa3CdDcUpwsN2cpLs4pWmknKDdeDQHvSSFZ8yUgwTCmzVE5gUZ1MxZZDqccVHh5vBSpzJcVvv8gxY5mBr32K",
  "key28": "2J9xLhoUFMXjJaqc5xJWAqWcReD2u8n2t4XJfcsbruJM8U74ARb9vTutvkpmYfo3wzKY2JhnEGtYqCxJFnEFsxQq",
  "key29": "3UJopq3xt3uskcgEBP1PKSJTJZvZWmyeGxrKw2AprL3YJBSNFLvBuZfg5vbyQRPViqhoSQoTiwnpEugFDhoUcJs",
  "key30": "3tGvT8UP8fEMLt4iVuHhQhYQfR7uvios7GxRxq25EbHY4SJSA7DTXdphUM3eWieiLoYiAcR19rQbC45Br1FbokUv",
  "key31": "49dC8SSzFzV8yKkxXsnvF2GgufjyjDvc21kMZLGV2JSZkZejFZUJYSo1otzrRP2kxBLQ1m7Jyp58ELoWVY4b8DNC",
  "key32": "TxA83qnrds4zEL2oT3vfZS2CuWPHWEQaCc1H65dj7Uz17aPrb9E9jFe24Jgh9ViPuhnHvjvM5d2RNGAeZdhNCaE",
  "key33": "4NxdkUor82zAiWr9xYkCEiwn4ZiR9zUtLsCE3fJmU1SQ7CkujvTwxDXAcFikksy2i8r7LB4A1ZEs8CzsEVi5bwTH",
  "key34": "2EkLmy3XMfZymP1Q5GfXrMPM4GjxMMSafoE81tDfZjjbqtWFQraErzv3G77bx2YttamxHpUg69BPzfiYfdzL3vEK",
  "key35": "2zcfxdyofJEvjkMcpwe4qVvD8sNe4sNYqrunJwhEfZLQFRy7UUXm66yHGsxRWUNw6sjwpKC6a7ecbLkqE49hNE2U",
  "key36": "ausJoScL3Y6GjpN9XJEFULGAxKUHEnK7DZQw2PKp9pfVbEU8j9Db6t1XrE4wp2peWHRhtu8kSyYuZr8qJwcEFV4",
  "key37": "4WqX8pWv2mZAvi8QJcaLZ81p5Wwe9o8Ny1JuHQeS5Q8ANg8fGdvvKENVcxwaXmyoC36YYoohczYrFVd5nFob2Mff",
  "key38": "59jPKfvVmF8L4Acpt4mUP9V9wHYCiU4SxtDnNZJoEVTo34saYHMsj6u7PvV82ZQHUnaLaVvG581AYJHxUjeu9NpC",
  "key39": "4iVEtHXC64SBBJ5SKPXc4VmowATHWwTZAYYKBBRJv9CgSVLTwLFXznD8TRwA1hU9hTMW7uowB3eNkdnMqJzomzcB",
  "key40": "28tYvfeUG9jJcwM3CsNW6k9zxwhfa86sLAtrfGRh2DSmKf836WUsxk3YCcbNjN1YrT6FyE438g6Juzhms4Wrb3oB",
  "key41": "23VgWD7at4GAD34XGYD42HiX5rfDNz3J3K9EP3UAnUeKaGhqKdRtML7bosUzioHx82Fs8xhofyz9pbNrxM3M6vBE",
  "key42": "2sUngmy9oN1tXDXiub3MrPW2iuS82DhBUce5ioPvi3c59bDtN7cj3YyZV7KaJX1a1cbRm1T6nrQv993q9ad3ZE29",
  "key43": "5C6VfWhneaikex8F2C7pq7eAyw5MfTsznukkprzR2RQh6FW3Qd1tT4GdAxy6tSfQgNu8yuWkusXxQXBgdwSBWzE5",
  "key44": "4UyKFFUHjG3wuNL41bifGGAJVWiHLKFUigDziwjjnjyFNSZzZN5YonA4Hhj1jpJ1ph2zuWzGKXY4raRPhuPYPwYn",
  "key45": "21CqhNxQHywS6EeK6vUwyLrKQCmy6GYCDNGBJLkagKZzpULM2iphsc3oZpBhmg2JDhxAvxsHJxdP4yrrf4g9x6ko",
  "key46": "2N4aH1i3htUXu7zZ7TVPvY1NMx8Jj6gJWEzQtECqBLwMnyTJsWbpSNt72zEsnWwDarA4u6XxG1wwrnnBzAWwyGFR",
  "key47": "3tBuwbi3rzia6ZLWqBuDtpsbDkn2kwTSVxdnqiyiXwpjsXzAwUFnuWTWdJeKap9kbuRYnA8uqmNQThp8PC3VPWaX"
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
