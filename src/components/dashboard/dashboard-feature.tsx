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
    "2U2GrLc7Mz9P4eMPiur6brR7waDPs3971s2U8ZofVkvrPQxMTjhYeUFyPdmSCSVP3fmdta8to1iRB6oz1RZJyxZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PzDjQt67tTUzKUnqfujqUhVYeq4pLFWzCMauHHFasdqpURtpFSQgCzt3xS8p7iiTs31Qmw48KXy4Ns2vSF3dAgW",
  "key1": "3sGSCpmhhzmGQ78TETmMraae67jxukeNDs7vUSiYKMQP9cts96Mg17SRMuBdj9i4gQTVUNoKGkmZAD671Qut9X5r",
  "key2": "3XjUxLo3AcAjdQNZQ4opdyNLMqBiDxXbBTGcR8P5qTDuu5s5yBsffrkwufxnPxMuk7KfUhsLkA64vUCz4r4kx4Eo",
  "key3": "46Wgx63f87w3kxjLrzuqe9tQwDDqkxyDWYr7p3SKAvXrV4f8A2hPKCVB4fMAMqaR6bFMaA8ZaZmFAPg9YmWc9Srx",
  "key4": "2nF24tSrUVkHToeNQ9hC8tBzyfFVKcF3UJJnwwgTA5yXhiHASrevPYjA1QLBZgUD5ceBuxFMvYGEryv5LS9u87bv",
  "key5": "2WW6tGJjWtgQc3TmTJL3McTt9Hoior65fHnP7xKXMbCZXgvbgKjjPm6ZziGubWr8mHCkSvabeamxNKYM7iAKDdcR",
  "key6": "2rKXPQ87FpUVMYY8DU4ARDpBTSdDDtZdPjr1R4FgzGq9NRjFQjDPL8DrZGNCSMvX7CRVzRguq5L8WU1ionbeTVou",
  "key7": "2T75nNq74d2mjc7vZS1kpz93EiotSPJJe2Gumfgu588HG4HwWXDcZfqVzHCP47C8sRRvEnRHiw2RZNFXp4xGy1Li",
  "key8": "5yZDsb5NBmshKV7s4BU4KsaGjtF58HpthWPD3ajptippnDUWitTzFvSWp2UT9D5T7w6BP31C6PnvSsSk6LEPqt1F",
  "key9": "57Y1nmKEes5nrxUZfyNMuDYFz725WrgaqrEnq1zVeexY1T1PnFMJ5GqTB8Gi3vh16dUEhrAvTXUr3WpVEhwxK1fp",
  "key10": "5hWwThQFtMAk3YNqM2LY5xWrhYr71MSns9hAfaNB24sAgmj7ZEmmcVJ4fkYtQqLV6nVbDvpxdmb34svEMHoqnzQQ",
  "key11": "4JZYF1JUtJECmjLMEaDAwLjizvuiXpbhqvc16MbPT19PTcRcBPP7NE5sFya4QprG8Fx99ryNkSwMW6vBs1hM9obR",
  "key12": "5LoYjK4LPPSnsPQy6SfQwdFzreUoVvGZN1EdJfSGULz5NreSf7rk7urahQTmC3FAMUFeHStpRQZjJHD2zxYykA4V",
  "key13": "4B4qHopbUEpfV4uVuQ7sHiSUrQSt7wS1PAGrvApzT6XpedKiwV1As4fytEVWBMYShPfDd4Uuiog326EPTNLssxEN",
  "key14": "4DXZEqGcC8Kwo5jvcK3FmRCXWicKDMnj4cT29U5B7PRTdP7GUd5vatZAgkz7g5H6o7gvNeegrLNe6j9VJ4LrQWe4",
  "key15": "2tRHrMhPDL95dvMYp9iy3WuvDKLqVowmATkido4Nv44VDzQi6cjSDqtW9dc9o89JmJCNaXJug2e7Vyh6NjDnF6ok",
  "key16": "fHLpnZJW6TpB3uVcEshZ8gbToAM3vrZ7YMvAVVdaDTjYDSpUCzPhJi11bx8qJ537p3kmB68VSuXia8Vaxrj7o7Y",
  "key17": "64HtyEtbYCpfebqUigcQoanQR2fsM2wNMLyS7VzYWsZ6a1oczXFRkss8h7jULPoADsSgML844pvLMhnqhoPMMhyy",
  "key18": "5wFaDnSuCPSK59t4Eip1fviyaHNqXsc5y4hJCYvF3SbrsG8oeirHxgfLB217FyWwyFMNWqXVo9BXuyGYR5QGgxtt",
  "key19": "2kGNejCQsn9JaQWcZLEqyjC8AQog3gPhAuNKyaN498nMj2zo7NfnJ3ipAqoSKc2iWzxmkfGCMSsHMThUNCKmZtYR",
  "key20": "4xwDxAcZWqcw46Z8YC27afrUKNojaREJoeFTWqTfJi3H4zcaj4rFHS8psh1rDaNSzi6EqBVu2uXj3aGP6D1sUuoe",
  "key21": "2vN2EPR9gAaNik3FqQzRWEhXb3MVTgZGooDbJMwGqhq1y8S6RcQhPhCkM1C9QtX2ckhszWrpXEyDZt9bVhcFPvFv",
  "key22": "QaLZg2XAiyhtaoZXCyDKdLbSpieT2wEB7mKoEhqUzM9tdFjPi98pCiDoL8WG36XaBpAGUnQCFDCj2Th2DurN1SS",
  "key23": "5CH1LNNi4qezBFF2XfVCEMosEwJ1BE3EgKgLLDFpfzAKgePauT79QQtSKw22R3YixL4F4a12Phpfs9TEbba84kiM",
  "key24": "4YbGUEjoLTK8eZMqCFf1uvK8g8DQPzfMgzfPozJeojtBzuXP2cLWxBeNNPKDZ4CuQSCTMZgQmGkhFu1K3tghoySz",
  "key25": "5QX2zXPhQugbKWpdVajyRBZbaDML4KCufRTorzbcv9K6tHNtvry6oWnF52dbfChEeinQr95dkRPcbwjKF1mmzPrP",
  "key26": "4gcUdB1hR33XmQjHpCUgspPE1v11qgoGSki2yWqCoSYrZ2txNMWfcGwdAkr57N9KeN2y7w1AfnvQmyA9eeyVsj2E",
  "key27": "539PDjHzLcd1N2ivnXTTUbnawBnLbQzfVs9LyRkT8aexyUMeL2dJRfspQie3xgyzPD2ykfJhkGP1myiSDXYqxjM2",
  "key28": "5bi6hVAPL1BrroGFtqh4zGCQnuSxngtn3tSyUWehJtwMEUzibUCTp8v8hBfqs9iqGi8ykzuZnnqgxTsN2tqQhxBS",
  "key29": "43CSKByFEpuV4LJn7rZEpRXknsm6Hnde5iAoEc35unr92FuurYp6jHXZqtyHEfbmeHYswjPFCjhPjVRZ7VtKp6e2",
  "key30": "4mxvT9EDgY5JQtTmPav2gNGKZYiULjvx67kZRvaZFTDqdJHUhDMKg3VCM93MnuioMbSAyjH7CB9pzWNuk41oh7e2",
  "key31": "9wnEPudWiKbg9qEhmfcT9dWVvhmP9aWWkGNnbb3YE62UdxHjN4D6rKZQCuTJeWTb7hwNjradPsQvpuU5VnioxSa",
  "key32": "38SDdqNc6kLMhS3jMtgLykuhfT8z2tLNEgBoYZPu9z9uHMfrCi4pq2xvosdrvVaDX5UjCWuu9nWEvRCUUPhubnPa",
  "key33": "WZFNn13Dut8HkE7qtq3zCVSZKYHELkuGwJ6QU6qHEmXyCc9FRyi7KFsBrj2d1qcJTAeKbfruLDYGCKzFoR8A7kc",
  "key34": "gWD78mWhiuZfK37NsiEYazm45g9uQRyYFm7F6yGfsMheCgWnBwywevQsKCJ8LKEcGKKBbvrQTUTNkCGdqF9dM16",
  "key35": "ta5hNtn6Lxcxi4yHwtx48LVLSXWgFoSmchNfmaiLzyqyfwahP6y664tesnU7wMgcSm2hdRS1MbZeEEHqyxve6sE",
  "key36": "5scbKP66HG9nKCNv2YVmJPjCM7iLV8yFBCip37jHcV9cYLSF14Ma1JUigZH3zY4XDs9vgZLeau6hG13HyKfNbErY",
  "key37": "38ER5AAYtqiuaomhwoMdN3Zn8oUpjYYwyaR9rKWVocurmTMsRwV2XjHsgGSu7n6WKenDWqutysVZPyd5nJremRQD",
  "key38": "323wKkYuAnE55BdW4yne1YVJx69XWBDbCqMVLB2HpnCRSrJXP3uRr6y2HG9Ebd4AoRwJAgGdrBMuDqg1Fz5jRMHQ",
  "key39": "29B5xDMxrppqrfg18ZRArVMz9fqzcZUjw3gu5ou5HxsJiSivrtZ4U6VmnsR2v1PVU67qCAkYD88PCXjPRqbzcBBe",
  "key40": "5644TQ4kxoN5u855sEXtGDyscZzi7tCzZgpT23wiN83CMzNYWzqBpXAUMDDRqU4XkuAB3sy32P8P26dDZYRZLaG3",
  "key41": "5nsusssmeuyhuaQ6cWFJjyuCBzczLdaiCHZiCMj8MSyK1z6W97JNiYYY9MA1unikgG1nGNrCGwBFeoX6LcGDC3ak",
  "key42": "Laaqvf48NcVkVn6D6K9mMFBt9awu7faxFKf6baqzizHsu3A85Vy5em4UqmytKJ1bjJgc1EiTw4TyGig6pg6Mb4v",
  "key43": "bR4cQYXVJP2e2pjzjsME7KBy7hVmEAYLWaNN4WwtbFxRJRzBGw68qyFxDpcsreFDThmj6UKovgLCL1x7WA1XbVp",
  "key44": "2juwbxT62eRaABYcgkExs1ScFMjGomohgsoGdFuYjkXfQkdgc7hRGSxX2CF6ergoS4C7C59LVW3VZ8kkps1UHxdk",
  "key45": "5j69La9dW249KecNT5siJaY4jZ98qRMz5WS39H39uBr38zLTWP4wrh7gbmw8ncmexF4rCajrZW6mttsyqEtzx3Pd",
  "key46": "4CF55crBPRPHQF843Xe7LDEs2H9ntH5diBJH5Jc8D59KPrA3zjpUyEFuzsW5JW3ANAEDahuAcMveoU83BD8rsuHJ",
  "key47": "2GzWKstcCp7nyr5hmxbhRd8wLCCKujtoHhe5JBu1ppZSxbadBBvBddtzhQ4HHfTWNrkWhsXjoobsnEUryxzdDk7r",
  "key48": "5VzoDdNgtqivww6SnZmymgiUxQYGTf26AmBsbfs5g8oorx1wRj73Vooj6kmbfLynH5QZPjTBFNufgxXPWmvgRs7T",
  "key49": "4wsYnL4usM1pBNczP86LkrFvjWfuUikruntyt5VmnkrPDA79v9TW5mduFSiV9vkw5C7cRmKxGKwdcehv1R3YrqSG"
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
