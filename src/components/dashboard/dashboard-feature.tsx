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
    "2t8ZXB6mMD4GobwrKtzwEQoNEYuaivUAv7ukHcGmDeWEyUPRJJA81CtinBeSwth7hs3z1ESu4ECKTsuH6bRvUyQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MzzmL9AkZ8HssaeS16WT5hkhmfXywnywS5K6ALz3XnB8v9qTro2TdzKiAktk5Esqzp1qc2B3qxzKJdWi1TG8T71",
  "key1": "3pRXz12Rk2uJ671XDifajtKEjMqDvaKujVmQvM5LahxRBjH2D41mbEt5f29J1AJf5FfEYShH9WGFqQtWhR6HWEYh",
  "key2": "48jo9VnrBHVFPtQ98UfCFKcs5PTYqX5VWxXyH879iiZ1PyuBzGmHR1w6p5tU9A2WyjqtrvQ89GcErNfbPor9e3y8",
  "key3": "5aMv55rVRrbSejwPiQpc83EB6RubZy6MU9Kq1KxzpFyvNehZuQ3qEBFqE222Y7Yy2Su7KxpEqFGqzWJBPVfXFm3V",
  "key4": "5973HEjsjUPBcDESGxm65vezSbkBsKFfX2RkBS7G92skfTNkNFWyaLZWvYD4rPRKR9QRxp4bKVDXNW12qBc1YjTy",
  "key5": "7A1feUVLyEbbdxxR4KAqZDtobPNjQsPUojZnZA6EcGNsDdUwWs2wu1uKzrNDCGVjNHLPUzRTyMpVqeTXkhrgugD",
  "key6": "5JPFk36zywmN3gLZ2JUi1YcJHcQbUGpS3FeiUBE2LnA6F89yANM3UQzzFFg93ag4LY343EqJD4S3eR78cjMwu9au",
  "key7": "43Pms7KZDGLyY7r9njZNHF7fqjKBUJd8xBdJzFyruaC4NZAFEdMWzk1byRmo8FU2tr72xw4YxY9hfCHWeSBtvLjf",
  "key8": "3B8bNfNZsVnWdPD3CufEjbwn5fx5SV1sxAWsydfbUt8FxD8dQQ2hN43oQ41aBZx3kypDAPdiGpaAa72cew88JuyW",
  "key9": "2hCuf1WphrQiKpJSgRz3csUoLP9ZqCpQQuWTLntUTaNQuLDKNTvtZizhdyyUFKtS9NLQ3nRcD8jUL9qttYabDcQZ",
  "key10": "5MzvSLxeBmCA62uukUy3MohpuYWQ8o6cH9AndyeKJK48uQjoiDYrg1H3jcXbs6ZAhQocENzUj74SPthoNunXJUd7",
  "key11": "2iRrczLS9jqZWE89tcqZJCdQfhSpmuJ6tgwTb36AqLHQ3ELLPjs8E2a595TsqQP8w6T6UXSBvJsnx4Ym5rDrALnQ",
  "key12": "3rwmGf79e4y5JKeyoe9sipK4yXx72YtNRv73FvZeEns6z5FowYnK98cJ5QtaF1MruNKyy3H3VrfCmdja2Dw8xwBp",
  "key13": "3QxvNQACB7AmJvieMFniLuDbdnL6KGMt1oXaATuRGhfYmZ6oC5Aa7uwSumshvd6uLV2ZsGYKPTZ1D4rNneUCj82u",
  "key14": "Un9RreTK6K3EMa79TbwvwyAASSS9erLfgPPxHaS4uyMmqFfhsjfxDbSC33gExGZ2nwo31pewFPBxhmso6y8KQwq",
  "key15": "65xZMqUxUhYYX4owGEggfLogodhs2XZ7DNrw9qv9J6TSYG6n6kbZen2YznbqthhB91W6R6tZwJZydKFgNahpfVxf",
  "key16": "3q9wxn1QTUCxWraqLeafASfeJvgZ45tw7sKWJN6uqDPAmnvH5ffGpmFLA9vwsUEtnHnGjo2UhAqw4fyuQdsekjyc",
  "key17": "rbc4btozWLPJUi333zYLeRL11EVqLWbW1rc2PUTDBYijq44MhA1XQVjqiBu5y3PdassR25BAjjLcPEHbvViivFT",
  "key18": "4uEA2taQL9xXDj98NBAgS9TEAyp44ixdqFPEvZ5GGDKfSAHRcapCvtq8MaRdQ4Z7x4ZvnwuZuQmt3LwHjEmQ91yQ",
  "key19": "4rBRKqmstYrU4KoP5e8rkqTtPRWyksBgb3rNr1LKnRJPCNyp7mDfrpeb7W3gRJ41V7WyyrcZN1n4XZzxbpoNtVtb",
  "key20": "21vAsr7ReuyokSUKQeV3XTKrv3ysQ37Evg4VcYewbYgr1vaEx4Bb1eXVZaBxf3ExikkWYyR5QMW3HsQ1zFtwAD7F",
  "key21": "UbfJiftfikJTPZ2qpkWABUDJN59R6zUay1BzEBDCFG3B1m37vqpk5prHdBy7Gz4F6TSDLobBjFFetSpA9Znnq4p",
  "key22": "2s4XbBwnasH67w1JCQgMX3j4XeHFK4od3hyBpP57ATfZpmaMJfLFGcLc671soZ3AMYJw1Uq2UrbmGd23LMctsFTR",
  "key23": "2VyZsmi8DK1cA9krNuVkQgD5KkDSdRdPRdCmLG8mga8e7putGnyxDvnjB73UwNwnS2B56t9pKZrrdVjWT39zz5e1",
  "key24": "4CHQYQBSDd6Z74ByDvGbSgcK69eW82gzeQey5n4z5NvLGpjpHKgpiRZpsV2tVmD3svAMGfHoAPnPEcctZv7cKfA3",
  "key25": "5EYPh28jEYL5QvPjH3opZLKZxd6n5mQL3MLpaEWt97KmA7To3sb2SeX3g2gYvTLiPqKiYDuMTGsYULQzvsGNv1h4",
  "key26": "2mJ1mH7amaGtRTDCZbPh62WRh6J9TBE5RLt3S8WVoWXWuBdRTQUphYBQ9U2byEodco2ext4JWdKKo5htXEeANqfN",
  "key27": "5UiQoammQQC7jyXkTTLA5qpaQ8jEsrYkkvKJ8hZb2r8YwdDU1sxLfxcREVnxLfyRMeQSF6PZqgPwozbEtzrGFcPm",
  "key28": "2s9GffuopsYEPktR5ptE5xZ4kzP38AP16VB1Qi1hjoG8jmTLnAAuAcPCzdvF5iY1aLzmnggFFAgiEGNYb61is2Np",
  "key29": "35j8PX9d5ouADxc4Ci79WJ7KWTBqkUra7UcVHYx5az87uUkFkGTbUJDgyCFLc1d51eUZ2dRQrnY6jo6yRiDJd4QZ",
  "key30": "3cbjBD96CUx9ruFApqbddVybRw62R3Ym49BCGFMSoZpKh8cQXBAb8DuqhKXyXRHpv5kvhfauVFjhT8b7Aubrtbi2",
  "key31": "3EbwX7dL6GB9JNF2nyD6QnXJ9PuYb9HaBVqS4zECGCgxVKpLheQb5bs19qVzwemPAWPfaYBKWGAAk7ArvVHxiMnf",
  "key32": "2ajWuGecpL6QcNKfjnnGZRpo4TeRCuzT4Qxb9JfnuDgUtausPD4Grna1xhtivEu7qz2UwXJbYKyi3r28df4qnxu3",
  "key33": "8FGKWwg1Rg7dJ2Q5rAXL4NU29GQg2uRKoRoKZ46X9AbqaSqXeYZkJnroeMyUrHDFQnbvNb6qndsscpwpMYtSnrz",
  "key34": "2yfSX8PGC5rWmxDpwyhCCpiUct9dVJMK1uj5q9ae4ijrQF6PEeT76eyD4KzrfpEC1ZAH6Fecp8QNs1vFuMa1kc3K",
  "key35": "3anK581feWZFLueSM6cmKnQpqfu6bh8kSynfk4F2UKuyUPuEEGgLrjxZR6rMzh3jSJhB2p2CmieUNmXWwYdi2X6R",
  "key36": "2qgdjHABvePXQb7Jc415fXtSTgJ7QG6VovnREKHwcCagFNwi1gJJm6EsLmqnwtVG6vqmcda4sDTUPoFmQXajGx1w",
  "key37": "48yrCHq9neuWAeT5MLHJtaeTbqLuMXrYFnzrMaUGYcSPLkyCdbKyvKzY8yDBASdQkn4UEhLoiYHdC1XxUxv261jZ",
  "key38": "57Hz8F8rQotYBVCE5Z62ST9dvqGStH1vqgrJFPS1gi58BRzkSdMEQy52qm2ETZMR5PCh4u1ouCUcu6fUGcSkWX6x",
  "key39": "59N2n1AaaytxYKHRj1K4YEQ5T8C7YAXuK4A2ELNL6WeBipR7GxPcwEAsGVEkQc3aTz83PDV9YYxa9EJBfdsxgww4",
  "key40": "2LuqEaCtNM9hY8yuzTEJbHVqRcw9BtBDWX828z7WJU1q4rNbDgNkiihrQGKhMJsHihJjwt4fR4Go1RsetViMYL7K",
  "key41": "3AmnqxZGdQuTdc3dUgkFd3ZxBw5EQMw84ZttMf7AEWHPVsUnBYXx1WiWca6tvmKQ4BUx2o7FjjDgioKW1pFARqxi",
  "key42": "33AagBMYAMmUkSFkRzNYLBEsLfY3Y3ZXGtqNTsp3DUwMM7zo462nT9zSH1mWxUXS1b794F2tF2kkhY5Js4C4NwUe",
  "key43": "5ErpNoN5L9WobkEBdoeJKfUoJCGR7NLTWab9jA35dh14XFqWDCo2vwmCnGsENajCKFw1fEpmrZ5ZVWeH937DKZtz"
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
