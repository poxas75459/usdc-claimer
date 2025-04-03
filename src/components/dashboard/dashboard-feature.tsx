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
    "5BXNzV2WP9mnTf5iyjXPKA8PSgaintejuVf8S8AXEPjTqGCngBPkQ4PjJUZCB83MUG3ZQ71c9d4AjT1XBqfytdZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BPyBRquP8T3fepYo1igYMWHHkVMDMnL5qqVghT6T7bJEWTB2zvX3F4JLDQ17faHXe6eHL1zyquRQoCFXnpU5igJ",
  "key1": "5dQQ7h4pMy5fG9o2wcPvvmVLa4K3AKm6iwcjZBUxRFGHLGGVZygRSKedQdPQ72fiA5TnTYLBiEXwZuUHTMy9sMMm",
  "key2": "2QU8XWGbGLy7stXCN7Eb5p4vQUJxmifiGtaoeuuvhz9MQ8EbS2KCSrNPNdLHeW3nDhYu8zNudkCCd4ytVCmQZGuF",
  "key3": "5hByTjwoCiyGhjStezPH9Bz1WgDUoRUFByYvFHNLzdwNfFqTCLKnDwu4N6VmdhS4fjFhm2ELKWZDLTsox3SNpCHq",
  "key4": "5WfrMydxKNu5Pf1nUcJfMLvSRwDfTD5KvBQXo9yyyDJuqyen2VvXYgfcyw2qrzdf651rHqm2ZJAvmK2cY17f35KE",
  "key5": "QgsGTs47XGLaUsWNvhULeNSofpUYu7bcQCLz1MpKjPAPa3M19nDnLnZtmXFCW2nmSBuSwg92wTAUTM7SCpm4jHh",
  "key6": "3WW7ZFGZL8fFN1uJKN9XJ4V5CE2WMAbAjmVi84cDCDrztE6yLzCosuA1tZ9bVTZfrMz2qZ4MuDbFcK7zaSEzp4BC",
  "key7": "mBi5xHCBQnNuXJmn5dYdkQr11NthW8NRUZLY5HfvZZQsivs1nBnpakmVPmFL1TqAhCF2LfNxL7KqCXTvMAx6dTm",
  "key8": "4PZcRqS1KCSeajy4ChEp9XLVRejPjH9s7mBeNbtXdWt3mEzz74T7DaKawCNiXzQktJ5RWUpa7EQNJEZq58cAtCmr",
  "key9": "3yLUFSwonrcTke9WbTW2fcJiZCi4r9K21V5UzADXLsijH6kFwHSj2tx5yP4Y8qMJZKRdhwhCwwBDSUoUsahqAF6b",
  "key10": "4cypCCPMX7dx1BBciBJGCbiXHqm2ztFEfuSQ3F94HE7LQZUfNkQFqsdu7Re48Stbk3jV3cfqgMn4Pe4h5ZdHjskn",
  "key11": "2RfYGXHYcLF3N9dxLdNBsPDhWWhMrg8VrLu4NELdELgKF6ERp5ikypSS5Qpe5D9YytaJZAoCv2wJEH6yzQdFhfVt",
  "key12": "5temYybjuRPSf4E525tSUSk7WD48vUB3CvoYejQo7g17doCnAphDHxmvaMSboWNaqWsRCB59UnY5XLZPDkM4oPMH",
  "key13": "4nMtvvFMrwjNDRYExuajNCJhv8S3oN74S8mKyxm9aaYFQTwuvNp5tcWidP4wzZ4adJC999TQdcfXpEHhWK6Sjqir",
  "key14": "4BfUFZU2vzgDUPxwuMJPBNWHJ6NNbSCgkAh5MiAVV1eipG2dWRbrR2GvC4fJCarR4ravWYEXUwPn5vTdiYPVq4q7",
  "key15": "5LPo8UTSpioJeo6qEmwHsuA57jL3BND8pzAoyhz5VqexYsvoG42PGFW5SCGHeArQPZtpwtydsCadLtZq5RovNjCN",
  "key16": "5Hso985tpH44nRcQZBFqPqscpN9zEDQ91yaCLw6Zma5mNPPbUmdfdS9jDkcPEJEhCkCqupj3sJSAngcRprdUruMF",
  "key17": "3syntXFrn1xyHiVooiaRRpTWjjF6txuJwM7MPTe3TqEVCtCBFNquFXyvMtykdmxuKKREpohimGRUYEavzDuEqKdA",
  "key18": "3DCJ8MNY8zxqBntgG8GihvQuAhSogSq7mitiwRktPjZWnvNhuZLKi7X9pqvCGaLqop5ez8DoEuXhVmovGHStdAED",
  "key19": "28nDG1BdkQ4xNTqfXj2GybrYJjWPQCyd1wmugJZ4LrJVmVdrQJkjsccgHrsR5NSSEyMUJBwvy71KxTYqPZFc9uHU",
  "key20": "2b6pFbAbqCucuSe8iQTXqn9ADiMLVXga52vNCCSgikuPpW9X2L8KeKaBPGuoFXBdq2uyENKyugcuezzMRqCXgEdH",
  "key21": "48CKzQAvennjFbwauoYWXxBBgt5eVuQ5QEsEJfsZPUN6KkYFFgjrk6mqntDw8xHV4xjjE1auUMPjqYZBbRQkSebx",
  "key22": "2zFX8Ryv8K1cY2aU4KK9NWCLXasTkW9JmuFpafaJmJhUHvCtjsUw68MwJtkESFnMeYtXzBAXriHRgdaNS71JxM26",
  "key23": "5SsMxS3eXmwocpaSF8umhRfK3sju6omSv15TcqDPD6LFvw9HgpA36asZ3TYCQF5uiDFy2ojRvBsKfLnJ1G6f95Mu",
  "key24": "4YuHhXGAiUwDTQwexm9W4h5ZKUrK4LkQyoNvnBKoLwRa9kTt7iDUjMJb4p7PjTSDuTSFF13DjxSTsoTmXkErsWgA",
  "key25": "5hYVhG7EBurHGUzXLnDuUDFMxA4LyVV2FYLcEJTtPBn9ReDwr78p4RBTupTGkoBA1pv7VMpd1DBKJ9JgNUvovD4T",
  "key26": "4qPvbXkzjGWAWAYm1pAhWfn8CQgqqaDprNv8ycRC3TFPXz9qLNyndBXtndjSvfz61YTHR7zySb3eFsWujtWCTGWH",
  "key27": "27cXuwb5j8R8AUWvU1E5Np6eL7unfZjdw657QCfimu6msVuTtRxURXdiX5FYv6b9X7RnK8ByjBtdcsoh9vgydJB3",
  "key28": "kwRFLKciG3TqR5Sdbcr145Spx1FfjcG2HrMEFDC7QF4N6b6LaomVrmEVnYcpYK7wbPdqrPXiTD7LoHZNq9KNyvi",
  "key29": "5uuzLFgyFzsfp31hmso5QVDY9TTm1UhNDUmDtvYMm4D6q51uVtrbLjWqyiFzLt5EAnhARy9gjHDPEaeeErwjWcaa",
  "key30": "3f3GtfERDs1SpNNRAnbcBw1qF9VXTtQJtGgiYhF7kK4XEzdwq9eyXS8vXrbZTdaaD2qG5veiWU8H6s3LaStjGLxy",
  "key31": "35YXRiGKUxcJrNjwirr9bBj9BLgSP8G42ABUyhYpvbatKNBMZjZyWnVcWzBL8gYver66fvhhai4wnPBcGQPrTUfC",
  "key32": "5241ZzgSSRDscZCYLQB4UJvW4Exp9fSc11LdPQdFaowaEdWmrsLKUV6VtyeuUkABL3yi6vpGrinJLx8UvCY9aNbS",
  "key33": "3ZEmuj5DeWPDaj8xvEU845Qxi7mKuC3xNYiPdFCn9Nut8kVok1RWGdFRwY9Dryv6fmnRXvtjzUsHMa9nTdB4fwCB",
  "key34": "3Ls9JaQ8pCtUwdMMzFaSMJMKqasuGaemTyBCK8G4FZgDFC9Gy7Z6yitSheyoFAt4TkN3K51zR7WjLLehhqcqkmXf",
  "key35": "2peUy1gub3j3bxyuD8mKYXLjHinZaeb2Vg3PbA4tZSbhXRqX3DVrNdPaPuzBqGt3Z5LT2ixaHgNa17qT9VkxsvEw",
  "key36": "inZg1simazYG3GDVAhX92U3kCzGrcoXhAipJbJNvBziZDGrTyAFiPTpovBUeNQk7i9NxY1rDhLgBaGKRqbLHQer",
  "key37": "5APUPVTa79jeC93wsmwgJLSPGMh3qn9eUAh5RKdy5szteM6UgJFKPr7ipLsGBKeGPvGh8Am1TMZJs1kac5hwdJxR",
  "key38": "RSCSryBrryMwiBLj6NUfiJsCZ9F56ifaGHmQa5zgJyT4GywqQMPf8ABvihUwvpmhJgEu3HkL4i2zwNBBvzgw3uA",
  "key39": "2qu6xvxyef1tpZzCpZbzqcCeoVcZu5RQX26QFqesnbf4Rq32eXC2V278tzaV1SLpmoHJMAM5Mbw736snhv7zidK6",
  "key40": "5cw49eSwxJpXFraZ8kvEZxnvndiMWiSJJWPp8CNRKJJhNc2zfAexdk6Cn7qB5nyA3nSzj9RMwJBJWfyoswp4LMxk",
  "key41": "31uTkdoyY8o27CXZysiCZN6rRbzGvaqikwmuttm9J9dXGkUuUxNn83VNEgiFFsgZreWLDr1EvpPyNSfcWVQrZ17g",
  "key42": "3ondSmA3sAFU4P6wtuyEYEGhPkgXzU3WxoMQPL7symBGRdZZbPDzFwXHEcmiby498p3kMdkNXe6WKGVgm4MSxSKd",
  "key43": "8jAzBe2dpRMtyVubtMvzbh4LKWs5p9SX6XY7MWEqCTKheedgCDkmUrwvJN9myqLF22SgFvNgTHB8joQux2NvHM2",
  "key44": "3UC2BtL6MrJW7s2dP8iXuxdXPPZ44LWtd7bJ6uXt94vmvsdG8oDnDmxC9HpkETbqYpacsw3v67QGbtyEUxqjJxwi",
  "key45": "grtQoWhwcUkVzXzDpxoiS8RQQwQtcYPB7a6DW5YADyYwm6LWwhfJWrMxy1HJnSnVUJQ6jVa7yu82LNh3ifmCkAH",
  "key46": "4wA3z731DjxMoLGxSMWvMo5SSBHfe3YD4epYrLBFQpfbHJLU8dNCWjbD1P8vEounkdpR8gL4xETFLtKBACwzk5Je",
  "key47": "5qq6U8anh5hmaZePP59RSYNeMA3jM8c7uix2A3kfbX7pzc6W4tA7KPWr3z3J7k9WRNERQRZSNBK6WmJavxif9Ypa",
  "key48": "4V5hDqvqssqscYzefLgeBMu6NzWKBHv3PXJmyKSkQNXm63ZwdcCKY29pA2Hjip6QFvkoqcy76ee676962pSy7uw",
  "key49": "4NxjrKd99qQQ9mp4YSVoz5t49Sc9KHT6QaAcjJb4g1sGpP8Ymjv158dVjtje3YJ3UmVc8aGCrsWEPy7s91RRsZ2b"
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
