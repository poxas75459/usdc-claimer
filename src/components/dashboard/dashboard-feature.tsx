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
    "2msmVQF84UkBTPP6r1qu84cQtuggH74dJH7CzQtHsFmSkhBJ1qcbscdvkTsdM6hAEXZA1zrDGySvppKCmfthESEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i9fT5dfsj9cwxNMj3zBanVXsfaBAGJAiMgVye8Ry4kijGGhLRiFuPY4i6ZoGrkReBegqVAWKQmEajsEhWPkazxH",
  "key1": "uJ8wE9W6KjmCr6RrmXzvmQFtZzH5oK7bNcP81fN6g5ZceEr7PLobDyCVVqz7RXQCxEW9nEPEH1D9LSSLGZztr6m",
  "key2": "3wev7U1S23Yhh9df6SqG81ieHKjs5Q7Qce7Sq45eAJ4xwkMRHn5PmiGx33Y66fkjfBgi9EfZsNJ6ojzc8LP6mify",
  "key3": "3Wtuj8qxSTyqA84oHHzAQ6W4sTKV4aSVncyDhtuLECcsiFJPqRMnfFStvjr1m4Yi4hFB68iEm5eH6qEhYynH1iG4",
  "key4": "4u6t2hmkMTXm3To7mfpwnthCLNpvcrcbBds1eAa7fNcxJHqHzYA4FMSWS88DkQLKpwRaCweTwWWrFjsweLgWh4mF",
  "key5": "4uvAV9451mK1QKcVCtpEMjXWAdXZE1PUXH3Xxapqhn1a7APZB6uL7GCMyeidXisTzs5RrqcmZXdPvdtvo7igde48",
  "key6": "4aciQGqGaDcZH387Wvu5TsFfNLYStgyQKcX2EjM7WSrYTi2SYPe1BbHVzZG75qH36iKixbsgAC2w5dgjtvnA4tcX",
  "key7": "2ivKHJaV2wgEz5RNTL7qXZHpMh94FboJC9v3fFoPkRsYMjnUEeF3ARvgr6YKEUseDyBNxG1EmfUzQc7YAxN91GgZ",
  "key8": "3taRGbjDvxCtvromj9bStuXN9QV28hiDjTZCzE3Z3h3X8uyGskvU42bESq9WE2KnJwK8FCooSJPgCjG8u7mkoRJE",
  "key9": "2gReWjerPVw6KKwpEv88hwxka2cN5FELBX247ErquP3gV9FpYCRKCTAyJenW4fKV5ZVeH6bp7pfURbaoNoEXXQeG",
  "key10": "2Pe1vG3NgSamV2NeMJTCLcLU4NoctMQooMws7WE8i3CAQvVSEzjo3pWcg8DWN81Eos88MP9dJ55NuJP33bZoLWbB",
  "key11": "JBXUcYJbawxJM2HdV3hCMj6psENHV4mmcr9o8rx1mLbvSuDdWTwLPiCgg2bJoa3VUw7tdsoJ61Q1WufNm36G73s",
  "key12": "63Di9ZbEZKT5gFpgtQGLgMgt2kJenG7s6qgUnKxg8xGd4uydD6iAomSR3toxaaS9LbhTLBwFPSEmXz8hKEF6UirJ",
  "key13": "3SJeRptAXW9ZE1z2QQwRCu9LdULDpV9gT4w6sLqrPrwt7AkL5UeFsQpNfMq5MpCeuTNs8VpCr27cxMSePUNctRS9",
  "key14": "4Uh4DdVp3nCFiSLkTPsWntwevwoL2ZUv25nr63iXXX4wQZuYog4QR6CcM4bvft4zAmsGG5e65CNB12QXHBg9oepi",
  "key15": "4hh94tcMJjG6d3d2Wsn81866jbfNze3Dv1LaKufZCvNsmp4w9uhMRsHEkn4LLtjzuTct2eHuejez4bbaaT8mBeXW",
  "key16": "33s6axQCJf6YSbzoN93S6yu7257TNs3XSBrMxQzXyzxt6MmL9MF7ZmGanmozJhvjBVnNywe2nXF5WsrwSgVzjyyZ",
  "key17": "3SFyGXKKGCJBbDGM2y6Jpy2ryW1gLEzdHuZ28JMHhNQ8eyGUorqzXi8PEM4UE4ZWA6XdyyKC2X3hG8vMnZxV8yfN",
  "key18": "2itFYTQ7o9Q1TkMo7x9MDpb95PkSDwsGv8vkdVJ1uSzm4F2CMsu9DsVQQoAPbmNP1XJivbjD9CPXcgGVyVWpoH8c",
  "key19": "2Gq3gKs63iryVpQC5CTbfTZ2yy26pGcYhBPGFXDZpH56WKJxRq22zRYvph4Z4ssakzAeM1drfbUE9PDDUWQMqkg7",
  "key20": "3bqK31mxRsNKaBonhUZKDRd8uzNPv6NYKyvhVNDUvym2RpqGFYeWPbzU4UHUyawUhXz6eZAwzWfKLnPKKTpsQ8br",
  "key21": "37xKi8S4CDywbgCYTkN4u8moj8UhQzYrCC4T65ez9RRhDKePeMSvYPa3FJtifzomMDriGfta8KBiDuEvoTBHPMQZ",
  "key22": "2beTeGXWvMUmKN9R9kxVDh1NVtCp5Muma4SpipMTAtSL4od8fYVoaG2KEutywbqrYKtiPY2cjETKzEtm7KNhmjBB",
  "key23": "21TJg9gig7M6hHUZHinFQ7zbGYMRQwsb4amB9ARXpnMEHgqRQE73G5crRksVzxP6c696CzoEGp75ahCvXCetcsNg",
  "key24": "547fgM9qC7YA2NVpSeW7mmmUSYqDKVxcBRyhKZbWNTXU2M3dajYdgd6nd2EYeKeRqvRVTfgMLMkpkJ1ZD8bqcx8D",
  "key25": "57scS42hLA8kLWqThneQYPaKBSxi1EXQP4wDcLTiwYJYBKM8e1cD5BHeyA1FUiTtgVE1sRWDojwHNiSrAkyqx2bU",
  "key26": "5mpD7TPZpBTbmXxP8JrkH7w7uHZmLgEPKt5xeww5WLg2962zTorbPL4qSGvDabps8Un9nbcPgFNyQqbR4xsGEELc",
  "key27": "4XzKVaDZKntiGnMo354hVrBRio9sZi5k4CRnPvuy9WGFkTftrRiubgg4LctCv7Ssv72gchugVcgnfC3ddjMLePMU",
  "key28": "2uEty4ihtAYaFL6fmQm8bdNRSHBbAHFEe5ZZwBSJWNcxc1wiDd92vuGbpiY7npNSaxZ4ySYrNVXtzE8MZNisxxpF",
  "key29": "5YA5dzsufcEgkAoAM67rBKRPwkQj8xb5DrK8Kj86nhKWQQwVTTpEQNafxfszA3uFpcPYYv1DsXQMgHo2cjmpuTSr",
  "key30": "2wGu1SAxNaXSMZoQpUtocVXzHAwsHKF9YvfLMWXzctvog8j46Vr8fBdw3wyoykPfSjmUMW4QA8GpRbPhm1hd81gh",
  "key31": "5JLEs8VvQwWmzi9gpwnsCqm4QNjictTruJVdWYwArNyd9DyKk4MwkgRdX4LsZRrT5MugmjAYWtGY6ZA454YY9eq7",
  "key32": "63wfCozdUxqCqRNN6hoDSP7icRJ98j9b9WGfxv4yGiHoD8JWECHYJUBBr7P3MiNVEE8STaabXXPasQRUKWAXU6gz",
  "key33": "3wyTffAJMy4K5Ho61XZxVd8XjNF5ZfD5s9NAtxJwbz6zbGfjE9J3RGw1rQQWd9cvGHUjAxkJ1fDfgun4XJ5cmWGS",
  "key34": "3q2PEEjvd3M3shvkfZbhKp4XN3ALhXRSJe1NK9NLrDzkUh1rcLnWv3vSh6R3fQw787bpqjma77kmHxCjm13NFJ8t",
  "key35": "5xRzLpPmPfoX2bhyEuqM9f8YXbzTDtaLeDprY6Knj3uCChZzaqrSeEoGdZn4GaXkuWhaRrpSNmuUmoyXJpcuBnjp",
  "key36": "1oKvEc81e7SVDcy6cLmGNjMP4jZhKHZK3rARdFvNafafwzHUvFyvA2PR6YW6Gn7yTizTbBq1mMYgm67xJVkjxVk",
  "key37": "5wuKZMZBeZ7xkR9UKqo57HFDauYtr9bCup77fXMPhx4Pc8CZ4EoQt3CQCJ96RQ5TQR4G8YbjVJ25ABGKk1Gx96r5",
  "key38": "FyTD776sc3qYKkeL6ATFHFZewY8NW9UzvAoSc9jgMHa6xcohKSVAYddW2ESRvMVwqbYeoHhcuprefokkD13snYW",
  "key39": "5XxD829jV21WXvvcd2Xdt3XigbEuE4FagpkmCH4b2utQ1gPXETaT6czVbsSfmeGFp7dJe6pJQvTUdXy8uZgB1ahw",
  "key40": "5vXVFa34Jy7PCxTRCNBt1Z6tKVwdqNHY8eJchu1AR9kjD6SzBSVHrXXvJR2Tw7FtgNX4rUFH47tqgUa1uQ5DrhQT",
  "key41": "4KvqfqKdCECFoCiqD3dDejQYmRgVk3qCqKSXrhvptpakfnYTubyPJeDx3k8t2MTHP3rWGo6n8Yxr2Jr86VsaU2ne",
  "key42": "5PphpSE9PDECF8ibz6hzguUA35D3yw1VP2a2LU6acYewTuLkmkycCX1N5VwEt5uVWxZD29GrxPwWLBz1YucQetGp"
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
