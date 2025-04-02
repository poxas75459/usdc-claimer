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
    "4gLi24vfaDLQ3qBvKS2HwvKG2XpG3UwFpstpGRgKWNrYoB6hJXrf6LRQYAJLVWxMRFUm16yauAicmLW3UpRsKgrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qg6PdJbk72piR1hcXuvGKk9mbUUUoAaHWxUVCV6gHVq6cHiwkv1HrAMcozwEHq2k4PqF5QSJp8dVBYd8EcnsfyB",
  "key1": "55JQR9JyxzLxoFB1ieSJask3jtRcLV3dRUWfP9xVYkfKPEGPnhMgyNnr5Rb3572WgAGsb5zTVWkh6mS1NqS9TTDu",
  "key2": "4mNfsJPdzPg2nCHuZGnEDe3a9jbzaVoXHmRmxFnbkL8pcUmQuNefHHRXamyseQDJwBYumiMA3enLJui5vNL7WBmF",
  "key3": "3Q8EX2K5vTLW3nVDrcMP3R6ge4oHDaHJE5kN286PH7hQtn9VAcq4yKNijK8wEaFmfv5EXnMno5yauMhLLQ2LqihV",
  "key4": "cre1D6ayt3CwVgoCFeoPHwwpVxetWccyEDcGn5E2hVh6GVzmzXyRF9XGUbbj8FQTGKEy9gsYBLDohhsLM1e9cRy",
  "key5": "5452Z1nLx4xmz9NHgTc2AHbSTD1sHdefZFwQbRUcU6SC5C3mJp9nbPLm9efKWupzPfeyXNzfTmvVyA7pkSRYVZE1",
  "key6": "2t5Y15HUdRsy89Un8zD5hxnUUNL43fsehdQ9V4kEAeu6S5yCNtZmxWFxeXyux4AS4SRbjnhvGyNr5hJN6RcJPZW1",
  "key7": "KMpwRa8T78VbmA4aJg2wmHfeECQxbJkHWEbGVsook9WykFMWANd132fE8NdDtnKrD3jrPG6GSEPtG4Z3HjuTjZW",
  "key8": "247j9avpqdzZboQgnoV1kr2z1Y9sA9Mhb9JxbnBvc9vontZrXpJcw2Pi61fA2HrkLLy5Puf5sJG8PFcgRAPh5NC6",
  "key9": "3JuBREhjhQF83KXMsr9p5w2GfizoKUbwaks8K79bbbCnFbYrVvHu1z1FmqETT1bB9pusqn8wkh9zZiNxx98D3NbX",
  "key10": "3M2mPt2tg3356JNxhWPsXqkQ33Wq8BuBGAc2yU6CGwXJA26QbBWZaBGYkYYEtLAEFQhWXj2dDDBmDABrMrzKP1KS",
  "key11": "3AdVbWmHbGvzxNZ1HBf5bbsdZaesrxQY3p8yjVNQRxCwWVBE5JQ3QMbRap9WkJzYadV83azrFtswfVbUkJfctK24",
  "key12": "2ewuJByRhZA8WeWhj11mkjHogFc31F3v3UWYfLQtBdNbYpjc9a64LLyQyaB6SNHATuYRCAmLctoFUw7FEHyzLLrr",
  "key13": "5swpL3sHemfnx4DaEbLY9vmd33J9JX4tbtjggK3bkz46wUFbBSiqdKSgmJeSK3ffWyQv3oYiRCMGsdgZAzPvjPh9",
  "key14": "31XsCS5Jj5PgrUkhewQM1jCuYcLprPbjLH723rjh3z6iN8vKN7CpF54cXN7BPqVb1xPBEAoNWPmtE1z2CKwREGuc",
  "key15": "kbcLdxdUdDmmxzbrKB8wuPogLJYkc2ivsPZDDJPUXYANqJVfbARR68ymTphgAcJYxbL9gPcoLacS1wzeQizG786",
  "key16": "4FvSMiPsfiLHQPbBR1qGQipb89uJRRGnEDpQAx8Uyke5nJWg4kRcqvPaQkpMbvD1jYetzzC8MGD1Z4cNVpAXAhPZ",
  "key17": "4aGrhmtGiTArgZs2BhsNPn3TFapTFwWy2rzFmwYmKfKJAYMMSeceLRpyDHgLSpqnxhoHr3x2MV3HNHzopXRza5sZ",
  "key18": "61NvLUvWStfBmFHKAW54huSwAihzTvnQF1qm1FTBPhYSCHSSiRgxcZMKXH7gAkRUHhSPpWSAK4rHU3c2kpgoezoq",
  "key19": "4d3tGum2qvE7VVRDW8QYmq5PCXUDoxLkZ22Juj67TKQuWYdCiuGyMUq7SGv5z4HWVMwiuyU9k8wgEjJCJVRFJDF8",
  "key20": "3mAE1gWT9fXjsZ94GJLmSryVfHJg6b1f8YVgtniNWS24kUh2Rm428WrqLcwoxS1ddYgKGqwn9Pik9PkEJHWayfZ9",
  "key21": "4eNgskpsEuNx4ci52vbrCemrWFoJf2bfomCAcFbjkDdsEsVBid4YjYEmhmRSbJzzorLU9hatnvJ1Z1i9cSwJSvkP",
  "key22": "28fdcd579hhforfA5CcVhjy2VtPCUAcgJRsSHFVqDDuNyE6FeZSAQvMRUFCgz1jxvCg9Khy45Gf1HwJn3yV5iHkb",
  "key23": "59nJivQhTrGwZzgYPEgGyPhh4foG2YRHMLGEXs3WKYmXpw4dtzmtScXJNhvZuuy5YVPReogP1PEJ1DyDk8g9cUyW",
  "key24": "4vUrUCLfHZeW6EzajboMzV6rsiE6TYF2xV4NSGYYuiYSqDUZTA7PyGRN7id86HEimgiSdC21WVsA4WJfbPKPfjC2",
  "key25": "62gAibFTeA2hnMWEmAAyinMQ2xP7TmTbybpek74UcTm7BtSLfZMTz7DZyioE3FS8Ua4kRK19msVdf2cndRoXn1Yx",
  "key26": "442GtXvccizMKyhPNT5p4GDwDtbxUW67j6cUYe8rMg43FGKvwd9PAGkZEHkJ11yz5ykkkCWNdV7ZBxf2JvoNM6nk",
  "key27": "3upwruX2tQ3SSghuM8RS62KfKYmynEfG5BW9xcTb8JanxXRXwcByu8gAjdqPcDXrtpZkXidVbd2u8PMdLhfhRKye",
  "key28": "4vPuVPjcV6US5Num5CKWmGdnqnJuLebwQNkAgy9zxHwS6LSwrXMTM95xv1HPnbj9eXrVkJkCzc6mZ8LiZvFEAd22",
  "key29": "49HMuu14bbVRVGYJZTDruppRNuzLs6bDiZBHi4FSPehbRFW1sobUMc74icLn2YwhC8sY8zrJkprtHkqFeR1uMUTP",
  "key30": "5564i1GyD59NGMptbBtmqYW5Ja2N7tDx2Qe5m9xzrZQM6piduG6b7BdDHxbdHhf84NuQq3APEBKPQFSBPE8M5Mtk",
  "key31": "XFqF433t1do8d2sAG98F9RLnSfHF8wtagNYptPy1yofJjTrK5nMq4j1WJBSWQ3qyA6qN5YureL7v8AQZ49uazrJ",
  "key32": "2dNcMUpSyBbkt8bkinZoKVApP8JkgGSnVd9mKpWaYdXqi5iHuna6YeXLMLmfpFQ921AZzuhYdyGpjPNr2GYYZvCA",
  "key33": "2iKbdnXhLFQQbJfwnPMcPrqkwuoppvpnLtGUxdEyo9LvjqcwhNsSLf1bUAEaKoTY2guTyPFUJbYa2XBA7YjaVKRC",
  "key34": "2vrW4iQdDBVPm6bSVFCxHiuM2EdoVARKzJo751UHTWRYPW24M88mvtHAf7jttDDQPZio1U2fFBJptbqHXy3XENyR",
  "key35": "5gYYDY9vLUaTDKmSXSQcX8Kw5BnndondhM3zi1JAog5AdQrjNFNAUKE6a5Rr5DCTvB6YL1qtQeoFqoy9jf2U6DbM",
  "key36": "9aDf41DgMZiYqc8PFkoCPpS1eet5WkXo7yCeahveSdqfAEbXqSCnn5ZFE4u9KDFwQSK36rFoHnkF7v47fh6jQL7",
  "key37": "2zFK4RaxTucj74n8tFobUvMVMLpasu3HDMSXwpjVKvQBFnFr9CoxxZuwtfUXTq9NjMKhxfcAMzSnbKHMFDYTSgZw",
  "key38": "4oawTCZaHVjRnRA1XaZg78Q23NTWDsykX5E9TyjLVSV5GNN5TdLk6CjPbMuveMRiNMoGSTtKMUShbFcdNXeTYauP",
  "key39": "2Thayo485enjm8j6bamTWhjXQdiNJXWbumz8smqvk2VpPZxEJpLT5i2w1j9tYXrmEyWnmvhTzA4RpfnJBtCvuKHf",
  "key40": "2f92pW8eAk48Z2uhtUhvB3ckwpE8nPXc7anMw3uEs7PnFr6sAvDrJJABbvsyqWQDhuqCRb6dEsc61XGhXEj28t89",
  "key41": "4YGdJ5et8izeLGjLgTJg8fBwyEpQpxJvtZoLaD52vAaAQRr9HAUrMrVdWPvuFRxAujcg1717pS7Zn1rPTnLyCWnd",
  "key42": "2A5nv8aR5xohaq8e3GuBwfSRsw1ao56Fb4Jm5mMcQMnGMiqnk4pjhPV2aT9VQgXrigniDboStK7Yg641c5dZUa5J",
  "key43": "hH9XVfmtzy2f9kEk3Yk6EzC6U7hCnEbcmLngNg8A5MymYv3dWsFA24STZU9CgU9wb5ic9roPWxf12qSUrEbPbdw",
  "key44": "5oFfMaDwB4hvkgRufsxR2Pi2zaW5AmmrSWK8EH8cfTb35W9NDvwJF8dS4o6rvC5ykrVp457Bv5XnBB47Nj3ohNh9",
  "key45": "5LGgeJ7iu3iXG8ndSxGYRGq9u9VaYUm4yxsQGnXKSKTBcwbLWkV2Bkr1oZzmvvLVa2o4JacFuwts4PA18hcTVrpz",
  "key46": "5XSABukXftAuDgZqUiJ8auJNH4MyRJt8LLdj34UaWZSdedUTXFNcZjZBSL5nm9bptzmmQHduNZARhczxpMc61aAE",
  "key47": "2pivT96pNjcUrSek1DQmMUVPrQhwTXHuArKBTsvBSv6URGePDy64szMKNGt2jJiSerCb4mueTZhX4icC2A8UNhwW",
  "key48": "WF2miZnVnj5dcJYTHY2Uz9N4YPXkJMBjJYBEkECwqTjma3NWz84RJNrTM6DLmVMVzpYaFtyQGvicgCvVkPwLH9T",
  "key49": "fVdop7QHc1H73xFEQMgdpAXjSm5Ufy8g1UiM8BbSbWxZCkZDAUReRCMq5RfADXpqvNBwsueVnDQcXSygE7T3Pxj"
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
