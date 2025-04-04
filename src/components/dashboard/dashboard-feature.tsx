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
    "2AD3qXPhCeDmQhX3wtSCmKewzuEKqq3pTDXagNiZNPFbAQH1EAkQRCZugscXx3395LxbwCtnjcCh58UMd83MqBuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUHwdGMfSEdxgtV5Goej8HzKDqb8RjQf8NqxdM19AUMCWVnacUyAN7Zbvb4D6TVVFUJc6uN3Ee2kYzCb8q71UrF",
  "key1": "4uZaT4dQUWXKq4jeMeGkwWnKbWdVmJUWvXyCNbCMVJ9Sok5V1rgQHowmhGnHDeEQ8LzGs9wrEa2ubBVgVzemeE4v",
  "key2": "3QcZyHBF3rwdk1cHdqvTGkher56qTYxNcrXgLw4YsKireFt9EhWGWPAeAb42XfGJC9NLEcUs1A8DgJN4s94j1MWe",
  "key3": "4n6YNMFcQG7J4tQbqJc2XERToSpi6q68uuvMFPqKRKqtn7YnmnWXCqYXtAmg2FCrZwbJU9F2WuiWqrmicRE8n3Bh",
  "key4": "39E7Q8rxpk1pQuudgJxRcGHtHC5gwLyh46aA3NxR5iStUzFCkWxvaxQn1ZHTe2eSfcVS3qTxw11ALgBMxZL6sRFi",
  "key5": "4seawt4oCSqxeLQjV7C6A9k5KjhLjM9qMwgg8tx33NYWmDW6QQD4iZ5oEdaRrYF9hC2gY4c615JBuNp7py7Cas6F",
  "key6": "JJnsTwLPEK6ouKB3GBoY6TfV2y12Aa7EGWq8jcYzSSfqYYMdcA3MdCm5zcD7SwcU76zGQ1P4PQUt7j9jRbZD6wd",
  "key7": "2rh5oDZCbaXrEvCQb7GsF2k4dcDd3y43DdrTGPVhkvkjHR6ip4729nTifKCBQj73GQAF453jKBJnDY1j6izkqJT8",
  "key8": "4vJf7VoJ2XjwS4TtCskiQF3o8iY21un1tJJdMkff3PrQBttpFxKMckbsTT7mufgHYScDd2Jw5syifHzJ5DfZA3Ac",
  "key9": "5jXbQxZhs3AR2oDLkVv98UE1L6CUxzah7ENzqoFNWPK4cjB7RQg37TGycoAyg5MqMrVDJRjPqPfHzc4kxNab3ZQ3",
  "key10": "2xWKwLKRtG64oobKkeoV6bemT3dL7Y3svUSqKKHPGgHrYaBYVrvj4Mt9D7hVWRBQxv7u3sZkGChQCj5ZVt8VyjTD",
  "key11": "4pY2cwWzt6uEx6epHQaPsJnceGoQbxMYNX3zevrTK3m4R82covzpAQbk2xkG9Mb6PFfp9utHLPZ4wCBQdgAAoutr",
  "key12": "LXEijtExMqw8A5hi32EyAcHsJVyL1h7Bb8nwtNrU7bP2KwMe45vUUTBmgH8tzGQCJTP5LyWWUKDcbZh2hFgqiWk",
  "key13": "BW3QAngd7w2WiE7AzNwGKD24Z8b7YQqJCZYVivyv5tj2ZCEpokdFtLX3DKreyB7jyyxpV6KH6QMMX1sMeXSed92",
  "key14": "43EPj58hvrRgh2WWigC8FnHWmXV9oV9nSYjBWb1bTbnMXgV4owvgfxwC7ZrBPASACyrdEz2JcmdEUGMtCivvMaFR",
  "key15": "2fxRuYEJ2cKa2qUgoEpBjC4cmRVhgeci1EACv5x746iBewENbiHwzjKTm7DoacfHPh3JD9tEnpPH9wvFn3LvYTr7",
  "key16": "3x5oDE3bzxq2hsCcBCJwfDJXbfmzase8r52h7ywiEaYrCePzeY8neLyv9vbcuRerGzSVYqruJW86dNoCRQhjRjRJ",
  "key17": "5TbTPxtN9aXuyyXqPZtFtc4bwo8SNZN5hGZGy14tfFVT2rkZ8c7Wmbyr6j4DFDPR8GPFez7KZXNNiVf5CJyHVVyn",
  "key18": "3j7VmV4o468LoYKZra8A8po3tf34pMSJppibwTadsoGQ58x9zEF1dvTCSSqj1kck49pkFezoiSsqjKu8qBp2KmLH",
  "key19": "4yY8Rpimgn9sutEQZJ4EesTRkPjquHdCHZ3HND3eX5WebuWQvF7YwmEzPRL8f4Tvo4rpDXz8e4sqHtRRWg9NvUvV",
  "key20": "4cjKFaFsW9DBSgDrNKqQkwJDxUWJYiosCYFCyBcB8oZbQfnaRBPHjy5CnNrg9ctjeZmBZXS4R1yvvn7bX3wc7zQi",
  "key21": "M7Ei3QxA34M8KG2tebjZMpKQEKtxYbbnpLMHX7tE3YKL5hmbQDiKQaYkc89j8JzcURHQDu3b7HhNMzs585qLrUs",
  "key22": "2z4SiMMmF6Mjqk1pDoSSfxFM1s4DpnTbNG4uGKb7De5MJYd1aNNGHByT1GBWKSqtmg6TUnE9EywWK7qJTfGUc684",
  "key23": "4r1fwEBeBdSVST9zUgUrAuriVccDXtP1vswm7XzsaNpN1ZGEn1Vzy1TCfoQFkVacA22LK6QynudZFnAm4nZnnScU",
  "key24": "5YSM88ySkawmqF26buM6ND5N6d8Zeesb5M8K9vYqUQcgS2DC8JQh8LMLJRYw9W6L85KcXFg5yZrcRxKYJViKLmrg",
  "key25": "2geyEszPQbFTvTdSJAAG65N6d3VMB7Ko4LZ3LZ57ciuWiAx2KeNSxUt5KeVPEaEhYZBWmtbF4d2a8SmFNb8mFvyX",
  "key26": "65RsWgxGv1NdEBp33cHCXYUoMfAtZZMUFCAKXaEB9iFS2tV7ifEVJsSRSDSxjApoMFbJZw7wXmVgZVxJmyYJ1dkV",
  "key27": "24ueCD17UEQHmZhDT4f91VtqnR4wbYP5vr9n99aAtXugcjbXjxHB6MEcbGiATnKEbxdQTwGqLAzU5G5CARdzCx15",
  "key28": "zMqpME1DvZnmdtuiV2581xXsG5wuJMc6GzsbLRR2rtQRDikjJg9YrDD4rJF24ZUQ9uxFq4GJJZNpTbJP8MgRXdA",
  "key29": "2DE9hMeWtuBBoRNS5FxXR5oTwR5suA4FBp9wrLXn9LBaGDgk6DbQdeHywCqKSXrKT71ertSedAwLfFMcVoj9euwN",
  "key30": "3vx7PXai6j2HuePRVoDvAwAGiTcRg7SPspPPCS5rRD6gdLe42CgLgGYHfAMVoWmk9qCrMVqJfJHJ1so9PGfSfuAz",
  "key31": "5WFh3VEv8kLHEHK1TfFFtig4joeGtdjpWSYrvFmEhtLrzvwQda5VRgk9ZvJc9chpPENMagEn3TDMrzxJvcpmgfLr",
  "key32": "4rGeWN5vR7VvXprjpgFvWu3EszhsAXZEyV7fCXbKquY8hGSLCt8vVzpbgkCFcjVY6DHode4W6bn11Fk6qgbsj2Cu",
  "key33": "4qYZTnWRwpoybovnFNYiEABM8iF7fBewYettScLESXF5ZVatuqJtthYFCJb5j7adsjiNkcUoyTgebxfkib6sV5zK",
  "key34": "jats8QyDJEvQY4SPkMTRaTsGigDhRGbpipZFCreZ78HBJh7zd8BXPCubXxGhu4rnjPEeJxyk4hEreqVYdXLir2h",
  "key35": "2wAZxG2qbdbZoUYmVomPX11dYnacR326LeanVYvWD8nMNvrJewB2uqK461JPyju4zfN4BsRxSxkrshwn4r4NLisj",
  "key36": "Rub6L9t2PSgAvyraCDspaYmy5tKUYLc5Pm9agoNeHB4vu3hpTf97AJi5hnDxRSJ6DUPpH7MUTQvqnnx9CpsK2dF",
  "key37": "3WtDd77FZLCkWCzTy9PPVzgVHj5bxjukzNxf2rFHmJWdepZon76E6wyDxftVUk4TmSMpdsXdaa7ZtbpUNaQuDrKU",
  "key38": "aNYzoALN41wWiJRxVdAaCfUdpE8LSK5cLpNqnzuNwNcFrTxv3U9SECp4RJ15A1T4oWt9nqbHkZ74C2bU2T2WAXH",
  "key39": "2z7wsY4jDWCC9BHDbUfqJ38414ZopSTb8YuMJoK5c5UHz89K2Xzt53nePqs3J6EzsCtzkYfXmpA4H8SJZPQq3QSv",
  "key40": "463ufuj8AhhoG6AM2yZmFxYM25GTsbhyby1J9kpu8BeMF9UYw6KNmMoAzyQRt7B5nR5MPaux4CWNo6pRVKidyuXy",
  "key41": "2epswVRmdRYx1QrjkCjabuRBuuzF31GcT8P8kF9JBAE1pLUTYnkBN8KaojkLp3dQ5TsE5m2mbcjpBnbsgGK71D5E",
  "key42": "5YzoAKzYWKDhEjmsyUEHamrFbTeJrn4cRtn8kda2sVxtmkiV1yyxqEHomQhfdXSBUQcZMa1ZBunjdToTWDV6cahg",
  "key43": "2gL2EWLVsVrncQk6joZxo9q5LiYGK1uuytuHCGiSxYQUU2CT4Qfz8fDayfLp9RrVa2nnyPZs4fF9WPu9L4aqU6Uo",
  "key44": "5f1jUfxamomjLxWd5CmiZqhS3DF7YmVd4qmCCTt4QMPUkrgP58j21JHWkE676MoK8HQtiKF2GyZxMEvukorovesY"
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
