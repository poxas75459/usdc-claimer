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
    "29GQcucx5KqwxGUpKcHZH7qDc6xn37tZPGX6YVxsqV1zTTeQPrMswQYFVutpVxeQbiQxXM4k2dB3Tow586uFmn1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AesnFTBGZw3eTtf6MdaR68azrwpDibAqGuouQDVtFT6o5bF3g9aCSfya9ET2uudBrm6b65gEjM1976XVr5398xE",
  "key1": "2bK6sSH2wucXoD9RYUzYEHQCjdYAhiGf9EGGMYu8f1mVKTw71LbLbMmgncpYGdncyzfJ33QWu3Hrpm4E2XAP8UMk",
  "key2": "31E2tVZKArAJ9TkEk8jSHXo8G3wUZcT7258wxbxSszpikkV79Bsoc8iaFkcvPHnUY9eDHBwVAZAuNsvJePBKFPmz",
  "key3": "4LAdiLqoRBrijbDDrxzHRCEjE1sdXRa6eqgguwB7JakfN1Laa39dMy3vGiEnaiWTH3fjpmyFdT3SiDuQDjAGRC4g",
  "key4": "3roxcXgRJmVBLou93MU4iqxbvfKDBdY29XBT1ywSqLwkrDz26iGMaXsZFT11qDbXCHb58Fp2FdHV4kkbqG1eH3HC",
  "key5": "3raMKsLKUCWbqoUeaBa8MrhcwPVT8tyWjPgsmsJf5vhyh5TiHQRQtGMFopEirYWX2L8sFnEDenEEtoi92kRKbbZp",
  "key6": "39qJimLgYPGcc87HvYbkXi6ELrwYd6QveSKzNKaJd9HVv2LjufTfQhbb8GP3v56AN8ixneahFDjMuQsaaMMXLmBw",
  "key7": "4npZywDVXLN5ek1jMj5EGwJUb929ixouWS9QEnjK5RFn2CZhiFN1qGTwkuGRroR2JS9fj18Z52hHjtrTiNXwkV13",
  "key8": "mcCp2iiR12HsqM8an5vQdq1KgDZ9oM9EjZ6icthvhyHAwiPoq2yD7vCPrpyfAz9HBCBJMvCcVUu3ka3yrjoZqbo",
  "key9": "2HSBPauqiEccJct67iZ41Wno7Jfs3fAqMQyD2quyg8n1Bi28H1fTcMtmEgtnCSy3uscZKUXGteDFzV1aB7Aip6m4",
  "key10": "4rSz9wcSW8QZb3nmceE6CfhBpBs7ruhPDQsNXpT2UC58V3U239WChb8hFYDfUmZVMJDxmHQ5h7xv2CE8fJ3wAWJw",
  "key11": "dzoMS2Td4R9n8j4GqnPa7hoErjM9gMPSAwXvB5rno8M219K2kuH9ReiWchY4vNzKfsjhrWKMcmUsojoTaHUgjPp",
  "key12": "55XtPnE38FAkd3dsvkaJuX6UXdhRc4vDKRxmmwigxTuj53RdhXp3T21N5K3HGyauku3831J4kL1H8XVFhT1VY5SK",
  "key13": "39a4JLzGXv2QGvcj84PXwjrbimZU263zzUdEhfKWNy8hqWXrSetTkghEJW8WyToHiGLwwNdwBkVqBhL4q8NjP4mR",
  "key14": "2FHEqgz2AoPYhY31PskHhXD4cdH6kmLmcomnamh5EYugUvmcoTXqe1bjAkrvJFN5NgpCfkf1oDdjqKXtNTSgAEF3",
  "key15": "3uqgMJrmCQ7EFnjVVeLzinFtW92VmD4484sGJUcUKYRpoCs21o7uaJXXEQttH8FP27kp3hBd7GGfB6gDfyG9JWLX",
  "key16": "6PedYUfuV5MoRrAe6qdkU3w6NMj1TMdZDxS9fu4H7UBV9efFtbAFP9NYJDBSQCgEvyv3fKEnH7hB5rUrTxowk3L",
  "key17": "MnxHgwEzvAEJsAY6d3d5r2K7kwJ282BPYuekuL4TcVwjyZ8CoN4C1GCtsrm8GhLp32omkuktmH7B3M6XHz2maR2",
  "key18": "27Lss7puMURqvLSYR2kwPZaN3d7cppj9Zsit23FAkgiC19JzWgk3bFgkt9We3sptD4fiZUVbRXAVsbyPsFeyJY7E",
  "key19": "1SD1TtQWyt3T2HjuAdrnrytWquis82MAaSDBm2tiMpiKMPboBhTT9ybXxNABAfnZxMmTe68DmSZVEakornhcAt2",
  "key20": "2sWtf9gq5mJRac2LkzvRkzpzqSvqm7VkLXo7Jw1QUFuauhNVXfmmXjwtPHtGdaB2YwbwonA5X1zkqBWNMgMjvZRM",
  "key21": "61aSqJwsRDyiu6hUKKB2sueHFxp9EhAUzqpi57Wnw5VDQ9jDBSXYGmMKmTBF6AyPcfzeANkmbA4LNkbBYKsHu79k",
  "key22": "NAA8ExBXG5wcvNs6szYXBj9g4oSkjq6xH4NmJbcFbojgcSafhXQa3XmH4KyZcEkpRF2pZqKmYEcqAxAPrY2VLWJ",
  "key23": "xPEk6pHLAo6ZRfK7gyhDiMhdjfegWDji3cNU4qdnBYeZZ8obzWjTxCXgJtY3iNUcwnEQzse1s7Xgcq3DWLPiupg",
  "key24": "278aZuGsKitpkjAcjPyhFR4KYpUstTST1qTcPNs12164hS5nWEdaGp3UzAD4t3CKygk1J4HcnQ1yg1GTshGJ69k6",
  "key25": "nN42fPWY6irZjAWSQV4zKetGXzoT2LkxWN7WrAhiWkUHRNK7GY4JKhvsMm2R1mQ1p2V7S1diYv7gYVpfdq14tLU",
  "key26": "S91Kq7C8f65we7xsbvuGSej7nnn42DMvEd5zBHsXsr92ttyYi6U1KvVrbk9kZMrhpo6LZfPEnBHz1ARAm68NusY",
  "key27": "54YpWA4V6XcKGdAHBWWh7dugup77DQMWWYRhc9oDPPQcjtRSQepkoDxKjYWuk9QD8SFmM5NLqws6JGqawDDxFRuR",
  "key28": "35nWSDhyxDamA9qBK2emH5PKygUaaqS3ALqEGHJT2G8YZ8rfzFEDwiFesF8VcVrChkJDf1KL5KWfU1WdNYu3LQrr",
  "key29": "5iaA6cCS3gJfCeugLc2V6g5TjMs5uk6Afpykaetg6wAxCzGf2xbxyjaArQ6YqKbLqh9LGvSrAg566nmKBBikKPsL",
  "key30": "A5q9zuydfuvpjh8onJUMCpZYQeE63twTooiHzPv2ZCojQpKMFEbknU4aP77RmA3j8owY6ZyoLKd22vHLth3immL",
  "key31": "5bseb5iQRfbsYjUXfMp28hgo7EuQPyQnCYbawjN8YrRUJhJWvZgsdP8QfRwS7vP46wEzsYGoKagdzLuKDCkaQWaj",
  "key32": "4fwArctycay4wqBGUSV5CGAXRw7qxedg9zKWJQitSr4Lmn5Lm2DW2JobnfpiY4VqQf1ZsuwF94Ruj5rLe8ExyRWo",
  "key33": "2T28krgisjgHT5gFCRq2dsPNP9p6jfLwBwadkCpE5ov8RE8mb2HzG48TpfGU4R7MNbD4DpHEXHudnyKtioJhLBv4",
  "key34": "2HNhKwB2gnFoM6MHDa3rGfVukc9z4xCsWTzH5CNuaChx15VWta5MFnHNDSyCpSP6UHwxNiJuRZuUs6tAQ4PNNXnw",
  "key35": "5DQ8kvbmNZmS5dRbmhgzNZNgtnYrxWx1kkuc14qt7KNw1StojLGA2MHffvrt4CwbMyJivdForehw8LwStHTPjF8t",
  "key36": "2Pq2tv3SGGXm9u4tyiKtAhHfDTFSLJiengWd41fGkNoQyVDq9hgZiSmGGw4R2FmyiAujRr6o8aEBvxeKFcLfeg2Z",
  "key37": "3BWUFeNHqzN4ixfrk3jZZU2RLhY9zpHM12yupsybVbWBYBnipCqXj5aBWtvzML22VUC5rvcyqEpQNVTCJR96MZoS",
  "key38": "5v3zq44R7rk5pdKDxQswFm8u2Nb7jPZRQSTkjjaE2GmmQnVtiEaHgHyfH78DYopyNEeUHx7PrYi2pQoiFKvnNWWS",
  "key39": "5H8xSGYbM389bqcsE1qRpJdsdNsEiXAJgPdMyozrmRAzDZfYHTrhL51YqQVD4gYkXhRwEG1N4JoeqShfJyWMkabm",
  "key40": "45zf7M16LgGzZj2yKovfXHbtkXP1NaVS5GS6nZuWychRDt3akqYBXVNvy3AZWLgBCaumcaqLPaVFqtcq5mme4cMJ",
  "key41": "39jMqiodFnuFTQ25znC1jpEvjgYNrnra27BBVunRntay6BHRyB1mEvn7bwcRMgzmvGgPyK9WaSw4vTCK1rLtSXYm",
  "key42": "2WSn7X4M4YyyXNNRMZzDmbcc3F2yVP9LjdZ6UTD8HDda9t5JYWf1d8WdVstgeScYrgBED3Tjpjkkm6QSX2WPvmzv",
  "key43": "5UkQ1DNzWZjEtk1RsH9EsodhJtSd8HxbTcakr8erZeCMg5v9jvBAAJX5QkuYkR6p5gC2vYKKf2HAFcY8pX7kHJk"
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
