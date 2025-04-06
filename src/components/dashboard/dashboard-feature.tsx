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
    "5qw5ndv4bX9fPcPsf5j5gK7Rm7qNSWuGiUcN6hKVM7LB8LQJ37KCbqU3rw9dyzCSSt5Uz4YtTEzM1kGsM5T3gqUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29WXQP1SQjmmvBsGQbGZniLXBWH5anB68EocniCj3siuCtTqeb3j2Awxp3aw4mHrZZvGQvC9SE7yhKGU2EXeS7PR",
  "key1": "22v7xdr1cgLq7Q77vrLiYXpJGhnYZryE62rs1XxnW7EBJm4EHnWNhfGeARWJDwjE1H7nxC5LFGLwr7PAmhaPv9FS",
  "key2": "WcEogoVu9mfj8uhyw2gsE3mKLLqxb7hExfjEnP1878WLpdaqCiVgqx6SAX5gUyezFsVBCqweWzWwXD1gTs8Pyzn",
  "key3": "4c4T6rzbRdYZaWB3CLP3Ef8gE8DqfagjAreRrF8HtKioqfteg74WfuFMNwtLsQGyMDkTYpBSc7Ek6rcMwSRMwk87",
  "key4": "5ZWQjZiHop66jnKWfDj5sTm3vmUXLLcENxcEbwbA3ZmJoZv7hXMQDQ8wU6DbCPLVm1kts9YzfJgewuVZ2vFk8Jvd",
  "key5": "31Lp5F2gGWPSpVR3RM6ZfgPkvk1q3SXtE65BGFXJuNvuKPAquu4z8zYvt7zcyeDk2MXHWuYPKMrnqsSBrHhNApwd",
  "key6": "5FkFQdFQq3njerpaqZRyZNnCzXW4HEvbbe9whpeZAigYgHcS9o6CGTMs29eTqUQcBZUURchNtiRc7CN59zGSAfjC",
  "key7": "3Bo8BJxLZHRPH74eboquJimWeXxyUwUx53pA78TXjY3sM8EEMzNHcJ1hWMCZ3F81df6AHWi5p8LJRtRprLRWgLtf",
  "key8": "4PEFD3x5VqbfN6DZWpry8fB9ScBrzc2p3yQzMGG11rH74c72RV63SrRxyuMAWF2EiytgTSQtS7sQmba5uiVQ6z2G",
  "key9": "3f95owdVsZLYys9En9e8XBMSxwnRYqMZH2BAUnWFXCzh2Bs41wUjqE89GHVsfjmr2XR2QGjzZFx1g1BGFS5t1AbB",
  "key10": "3Qf4Zx4BxrNbxMmrvc5AUSBXrUnPNo7xpdL1SDqp79VhAXbUTG8XxTTQpgUjMgpbdvmgkotw3muafmKqbtafcdZT",
  "key11": "2Um47P9fjpFDbNGKrpxaVQ3F2zP4HVpzkhGczNFnoLARZm9sEQpFwrmtKhsFmhtUa3CiWBcoVGTo2LGh49bGfh5L",
  "key12": "5N5uRAKBgCDha2Q2qTXrgy1L6WSarGn2gU3nyEMCv89aEyoY6tgwam9rjFDYkwfJpZrmWfG2TU2jCB3aAZiPmP8p",
  "key13": "4SSjawKCm5prBLNyT72ktDHqNrnvyKizFJxUu81c4F3cB7zJpmTUnLrLmxRwDRENmchyPLmkoEz1RFxBjVzKQtSD",
  "key14": "4sjWvZNQupkR552TyqkgQhD5fwg5nWNwoBZTuq8VdxLQx2zrDZtGZQrFBEUJa1hi9cMVPqA81gDgMpYrbgRCVN2C",
  "key15": "2qkYe13hd3psuP531mDZHmSydNs13ko3xNgQW6bBF8rRrYwxsJnZgzGpDV9YD12Ky81M6HcTz4WzBKb8qr7iGrHd",
  "key16": "55WJRJ3fwuCsFTGUByWHEPRTbqgkvuLzWnhv2UjzWN4aiR9YUBCtsfLWQxjAGffwXX7jE6oN65y1mPuJy8EeWYvL",
  "key17": "2m2TdnBRrjrSw9zto3Ej1pbNDNaAXU3LzBa1MyAddE2qGKmkjvhKwqCcL1m2bcaLxYibSXPWFfCN1frzXEYemR2t",
  "key18": "3XocaKjZah6LWQzqeBoHWyEsXCHbHibH5xYJNEcWPs4FsqGbG7zXBsqZmnahmqc69S1YWGCepgz1QvwaGQaRJcv2",
  "key19": "3kprtaNkS8Qhocc9jW6VEWsYvWs9jakz2BdzA6S2W5XUcfEJwszP7WaTm1XXxhjq8DwRHH7Pipb947s5vfpDy2F1",
  "key20": "AgDLtceQhnzaoRPsoGgWLeMiChz8TQy5bWoMLT3Ffd1hE3nRauJ4Gny8ryHzFVPxYTYuExszaDqeEPqa5M45Tt7",
  "key21": "NfNXJhip1wrxGfA5LoJJHSbXx3nFEPtSJfGixY3XLuW2bVCiGrY4LB4Yme81mZjXYxeY7GQukSfRaXw3eEH8e8s",
  "key22": "3MqxZfZgNd9V92Urk53FFxsbiUr9goZaQVq2a5kMkfqbyA3JJfmg7n1Q8Pghi55d753W4GWQi34u9jfvN6RPC6ja",
  "key23": "2FBm4TJoX2KTya1oKTS4FtrFLX5i21vVUzzz9yxCPnT8tpYpGDfpfieMu7g4Hdb8s6FrrUvePFK65kw5GToR5Bt6",
  "key24": "5L5oBXs3CZkRdmuZiVAfdwNe5dqcibeJbrehVKpWsPuWKB2QkfXdCwpDifySUBn24hwa9ToxKPzpd3yw79TZEqyS",
  "key25": "5T7GCeHULfWVwTkTev9aXqYp6d7Z2j6gNYjHchXVZLSpYssjaPEE9fGTEvRHv84YyHyWwyM5JY8jzwpT3k3uj23y",
  "key26": "EMGbfe27Mq6DREdjpXpjyrFPPw4mV2EQb7FgJ4cdNDy56cewuTiSKfnpXKCbGL26uCxvA63ZTtUrJ7EAoZL49Jm",
  "key27": "SzmHETT1XZQHotz5cvm4HtfrdbU7HD5m2a4MwRqhC8qYcep8EgvUi7pYSGcSGtijhQx5pWgQHU32o8erNKTtdpB",
  "key28": "5BvDMugdqNcSKhY3gvhBybLZSthWYwdcqK4gvMsMfzZVgmbCeLJoLrPEaQJ3D65G36rXiSyfVCeQGDiXfQEYm3iK",
  "key29": "29HW6RPPfawJ1xS4aXJU4RAeDvqx3CEU7fY4rSKsD8NTB1trykjNKyqP11Hyg7hcjYNVsJLfqxWiy9MFoCvowifY",
  "key30": "5r6Gs7gcjx1mQvar2SGdWwaQhcDdKcPvKoijh8p8upabrt9ApMZYpcF8h6QuX4LksgJzuQNW1KbxV7vCaEycG98f",
  "key31": "3qwqseKwbNL8MZqqKQMREqmLoi7NAEQnS1oJ7oizADk9b2RwATRGU4HCbsycMPwePTr8wLUKndENJonhmRv4NPfs",
  "key32": "RGhro2kMKtDkoiiRhB5HGaJFYpNR3b3tSwKQjSgKdfhksqJSbNWo2ZsoXKgGLXj8wZuTragb5RHmbwoPE6Qh87a",
  "key33": "5Yctkfigb6RSDAYKUsjJxUsCLSAyKF6Q78f94M5U6ZjTvRenVPhs4txw9GyUdwyeufzhZhVX1jLaxtMJdP8kemxC",
  "key34": "5eLh7vkh6rrKbtQnZgXMfF3UEk3oqkGZgtEfJRx1w6s7si5ggcFFpByrfuKKctFszYb3Je9bAmtEFdDbwEwAo2Xa",
  "key35": "2CiwVNJDpzXvKeduEWJ27tuKG5HS6ahyostyfWDwqCcrz83dxDFpxBHdCQSdiQeubSLviGCcCA4DrnLh8mui7Y8g",
  "key36": "5FGmE18Kdevfvtc87Sp8y7TcBJkzjLNZi8UaAMSoRaTpC4agefQLdbUfYcR7rh1KArwfbPzetgWKJoyjpy2aAk82",
  "key37": "2hZ9piTFeotnpiKUjTTXVxX8Cy4MnXSt4Ct879qa3jC5c7HWKvA2ykvyHk44yp7nmCRsd15JDUWpCH1TKSKJzqqh",
  "key38": "5JFxijkDaNR7QopHxCjEkL2gFgCr9D1KLFWFDiRKFvWEAMcDrTY8UZVWHWa8fQLVQpZoUDXybbsAQ2Mh2rH1nhxk",
  "key39": "2vCc5NLWdHjArBANTvzXnm1UN6DY4GLxv9xuNDbpUD5bes8v1sZu2yxQrfXfDjmHP1KAyKRiGB4UV72v3h7ABz6v",
  "key40": "5BBpSxyrNh4sUQVcs36jCVr11uKYmJJSfmfrNuQpqVzC5SZXu4zUDYensjcPT2jsfYZjwe5acPj2RudwBSLcyjmM",
  "key41": "67No6B6BuvfVfaeUsnD8b9W28Pf76sSPA3k3qCPWEpumpCiEYNwgPJCv2EEtqm7b2CdbmrvcgtZfAzWBkTicCiy1",
  "key42": "57mtWp74GReSgdYhd7rsrjhcekZbcNmZ1461AQEpqqHkJxDv8KLrPmV9CqJ8GqiTZdVCWF2r4f5DoJiccx4FQQ2m",
  "key43": "DZ5ndNzBKwCRqt1Q332nmkXSC9V7K9i9nsDuB3JEj2NLszThMbsH6JBv6cDrA1LV7pfA8tK2q8uhreA8tvFMQVt",
  "key44": "5nTCAVfFqXrjxg3udK32y6PR3GS1NwecZzMACKDyi5SmkAwZqxr5zK3JSxenWZ332jRBiqUN1Suj5DqDHhT5rHme"
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
