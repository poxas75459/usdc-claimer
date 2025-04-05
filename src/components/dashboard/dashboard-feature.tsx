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
    "2jZZA5RgdCVPtokzaP96S7QnzSGrKmvuYkBzUrfvRUBh3QDsVjjEjf1HJFR9QNZFWvGXbjxTrAuSCm9qtQA5g9yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpCc3Cyvwo5ijwWJTHVDzLbwkt6MQbyrkB6VokonUdFS3J2PenmMofbtbWWfCV9cLsLv3MHAuYiHcN3PJLh4cxG",
  "key1": "2bWc4wjJsoA5EJ7WTD5hzQXdejnYHKSREfezbG1ABCpHDFMr3Zgr5SNGM8LGYqtfEj5bEp1PGbRnU3cqsRxo3Ukz",
  "key2": "2JfP5EYEDcsX7KiR96cpALVZjU2qWKSkqN9P7bh56QQCMYdhqmgGsZsfqqkBwso9U3JHorxvfVjGccY1JhVaAL4b",
  "key3": "pgecEAjtL7C8s5n5DRVUKY6dTyxjY8rzVH8vBkVci74jmXLEBDetssADgHPidAWZf1Lx7jyZEDhWkoKtRDe9Hdp",
  "key4": "2Mu76PAwrCwFUPuW5osFAC1h1D7yiBkTY8Vrq81BU74pYDX6nqAm1qRD6BYw5bt6nkYfsLJMEWTcBnJxacacEyVi",
  "key5": "34cwdfU1CKzyE6sU1gqRsZrdpXxD7nmSdayoza7Y6PrdZiwdXEGGnkgJHMq4hx2tnk1dhkKEQpMpNn3dDWBBXKW1",
  "key6": "2uZT9FmHoNFh1a6BvnHVp2zE5kWhkFaFPaDCCV6MRUbrfqG4957UEywSKHR6xArxSWM5xB9A7zhyUgEC215Uu1MW",
  "key7": "5R8QiAykPcRPAiTt7cdiY3oc4QdmBVCBVyknbYiYh4c3WHj4MzwdKFypi9xbu1CBa1xKwtUUQLZ8tKkrhhWudijz",
  "key8": "5QcwEhd3K8v7sfJHADeXhsAYmakD4e4YdnE89AW53gQeR6T1p1Y9st4WvqCcKrgyWLvaymZsNnAQSo1gQhUhf34m",
  "key9": "2D2sfnwEXE4gM6WBFWdtXAX3CSSmgasECpyKs3ju7xRV3W1pSQW8CpRn1wPW4657A6Y5raBwwvb3uspFXfSmrMbk",
  "key10": "3RPEquZiEo62hiMMA9c4jRkYbbToAeFRxytVQQUW5Qpu67o33991KWRwG8JvKxXk1HUKFaaVsxbKsXWvM2V9v19X",
  "key11": "vwjKJJCTJTx2V2chwdkUPw33kaSB27yegiJBnSbtWk7Q18bbH8kC7m4P796C8tBKggqaT42BG6EM89RyFGw3bp3",
  "key12": "5iDtnUpKi2dTqaMHJ1ehosQUybjdM5As8UnsdWn3vLX5MaRuJh3UUMBcjgfTipx8gT85DvGjNk3h1xYLsv7ne4v9",
  "key13": "2czdkGi6fFBCszTiiUBvn6taiSMu2U98XM14wsAveLqwTf4VhJovUY5SGpnjPjoUTfn6isjHgZZE42f8BCFZDW7V",
  "key14": "5VycrQjqtD4QxbVLztgiH7HjN6EpMpnDZ1Z32D1xHsNGhUPnRGRCEHJvJBjEuihgDq43A2roY83skJaL9P25PLw3",
  "key15": "5a6oFM4o6zopSvTV2eC4CsSgQuWNeoA7qdkthmmee9y4hwm4NY9xZBujRwRP1AYpRR8U6vkPHVMGsZKp9SYhUQsK",
  "key16": "2MHio17dQvPQuK1vYDKBsxa8yTdGzRCECqcra1wgJrMxQsyoyano3nA8P4j8FfDNYWmKrCmGkdGuq7H2scZ92WZ7",
  "key17": "2AZrftqo5RS2cBesqHa5ghnKCLWFxtqyppgf228GmCKMc6Crwu3vR9zVjmMfpE6QLvha15oxmoCNLVsbCW39N94C",
  "key18": "3XJ1TuqoX8NJfwwSvsoKn4FYmrCKucuLpDA39h59KBNiGeEryzjdfnPfbPW9JHuVQpMBmKSJ26yZhWGdSoEQb5Bp",
  "key19": "5YPzC8RLpW1QqzGQuUzJ4owzpru296X3Z1WkxkgkiKvKjCWgoFKmySazq78swLrgCcw7FYaXcEnUMuGVdQ9fwrW7",
  "key20": "27gLwUAGbE3CjbtTBFRHfbqcThZkX5qjg4yYFtJQwGMBjajHKGMw8TNNMngkgsP5MYxBAMzQTLQYnhw8y8Jn2w5u",
  "key21": "5GVCYxBuS3MVRS26sWhv1zEKNpSQZ6x9AvnsKxs9KcnAKaNwxE4dnvhxg1oZXTMNTeBgZos5gdsSP98X1urPY2uQ",
  "key22": "61Dmym7oNpg3pALr51rfEHqoTQ5Q1JYL6qh4jzsBtPsBx1nofF81MzQypYcBG3qS46nmyr1JnTfcwYPxPbriNxSe",
  "key23": "YtEZdXHWxeErvJhmVEnfkxc4LcbzPVSbRHqfWu9td57VcXVHFfirbbH48KvMByrD1YBrTK4bEvie8mK3z2NGMxF",
  "key24": "4aviRJhur1Ztx59KsKpx3qkSRshfPA9VrAy2WP3vjsziNDX9SJMTNo87ZqFRtCQayUHsX1cX1UMYBNwg1bkXbByB",
  "key25": "2N8Nfg95RaFDeMwb6o2qxgbcgsHe2wBczSgKPp5pQYZ1XTtxP28XpMW8W2rdekJ4PwQz4BmyMWpsCTsAAYBRTCXz",
  "key26": "k5FsAB9NSdSTMJdxgb6D5ZWTPQKWeLbgfK6XV4PcWioZivkP7brqHHcgLjkQZAnEwtiybfjDCyXQty5yRCU13WC",
  "key27": "3XE8v1iyNmGFb4XyZ6qu6UNVGdbhZ61JqqUC8CPMtz4GgA9YRhCJb78CpQDpAifbvonpNej5xxk4QfgtNUPPtn64",
  "key28": "2JEtCeWFqgkzy6NMamHAWHEgQtKZUQRsAo5V6ZRon3FWFkS6iq8MoSPmevXsG5ZnuDRRukBsjjwH6hxXnQjjN5pq",
  "key29": "XyszWAqzCurQmEJefu8u6zhqQYCnMBMiXnxgxFbC2TWHoGjkvnyUTRwPxrZEnXbQ1tT9MGrTeLz5sU7iy14puEP",
  "key30": "Fu6JxwazMG17LsWkoByt32o94AFANgjaRjaCx22EKx1TGXY3AdYF5SWCCysqV2g4PUyk5mVr2vixEPgsZapuo29",
  "key31": "3Jrkgwi4aPVVhCzebgLQ8rADzzd9GktGgWdCn7gkijvCJTavgUGmXNo5wQu3Hhst5rhBmoJLtiXpZ6r5oGUxiYUe",
  "key32": "3XxPBjFGg4XPHnUqNvAqyi8J4KF2r8JCXUHq6y1G2UnpDZo1ujQFgkTAZimMBtkfwcgvXc6cMi5rwNGKRaVAE1x4",
  "key33": "3ap5Aji3zTg9umuhoccqTBZnrzMSBE7iAyx4tLpAMVP5dtJ8FYowgrfvi5CkVbmMrjTs3eLgzDeSvVJXDRfNwRdH",
  "key34": "5GPrTpK5734n5E3FCZLs3rvxpdUsyRaCpyf3oiu48HB7gLmD8RMw3N7EUP5Hibs3yFGrfDuf5xX5hRFA8zD9cCRC",
  "key35": "2q7rHkbCbvEfxmqzYDBtZvdfxkPmqB8e38yRqRj6HkMkPYRwK3uMjrtMGdwPaYp7udwz3wFdFche4jRWiGkMuw1k",
  "key36": "4YNw2ujnVrk8yp9CSHfmmkVizoyp3gd8cdoaWWcDLW15GnZTaJFdSXKURJsKwXQrMKAzKMgZxvnX45yHrvMofEok",
  "key37": "3CSumwBpEenN4WtHSf94y6wGrABt3qQh3Se4LzZwDLGjbing4gtVJc8dNDGL1Pb9At6EeX68AC7EcDkN5eG9wDGx",
  "key38": "37NbqbsYm5QfTCiraGrUyiUqicuAFsYbkCmnUdzCkn48884QSZn49qP6RSa3MJpoTXLyR4DoJgjcjyB3EcJPk72w",
  "key39": "2JQa75oQ74h5nCvFbTPxNHYPyiNv6dgcDNfh5zKXbzNhjquuwxoGByR2Tm8J231wG34b6i36QqFkdkz26dQ5HHuP",
  "key40": "4VoTtjKrvsfXuVFYsn7EkSNBskyPDEvqfg42r8zv9CQ3rZ96uaVifW9isiXuN7zUBjncjm8eYaZtqpP3qxvebiXf",
  "key41": "5CPArrKmfUumVGMKgy76Gwcw9kucWdBcaFsXrhphfxBShQHYChZopPn66H8GaAP7XdruQhr2yWhGZDC3o3gYZauG",
  "key42": "33TtNZK5mBktKgCYP9BVbmy7FT2WggxtrEFDbyxgNh9H4H5v37azNR9C25gk1ioyd1HqC44PjRZg3zZJyuRCuiL4",
  "key43": "3QkF4wq8nRPjRgDaZYRDDLSVNBMw1oYDjVCNPNWxos21uPiUwvywbt5T8T4KPc8FEz9FvEXssqofNgXiK1HEG3Lo",
  "key44": "5A7Yx4zPyNUBmFUcwLUeXxeUAWUftsfYhfFD38hBd7ChxAhePwUXY99gfwHn3DS89LpdAR7f9uk2PrYa6N7xn15H"
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
