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
    "3EYCnVCQ5n5KCu9YcF7cYPEarpGdpdz1T7oP8GpnW46My3Q481sx8wyFGBUGawRJfpXE2WA9pHmQd3SmGknaH1Yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfJNLTnmW5tbqZtQGhmxmY6Kf9S7hXkpQULvXemsKmsvhV1DRrnnyXW4cPu8pCwpuFCQMDpm2z4fsBLobYvAR6J",
  "key1": "5ftU5CNcMxcSG9sZhPbMCtdNHPmSz2v9RoxWeKjcfThLAXtbeRydbVp3MwB33RBoWfs1rj7LyPcPmA9b1UukYujH",
  "key2": "3V5pzTspizAABf8subhfWTQAdmMyyR7qV3u4dxxBqmBo85qnVgJogpseyXjHEpF7HSUaKe6NjhxMUipwKnzXrSri",
  "key3": "4f62SYa8NdBeEESYXt1eKUKTj6sf1qTmrroZCHjGLYsjdhyF34hv2F5UjXmGzB6ePMQ4q2VznbvvznEfJzQEGnX6",
  "key4": "341TMtGzcLfHAWdhPGn7txe6dT6uHFb5L9q49cBq2QBzf7EugWt6CwNCdyssUrM1NKiUAR2rZdoxUtkfSrmbdpad",
  "key5": "3m7xYnxxuibnYHmXv3m5HWmH1UV25xxg2iyG11YqqGKgrBZ2uzm1dH7kmAZwrbd5nT4T7ycQS1AVPsWr4FnLRyed",
  "key6": "3LmwsKUUhbCGLKyszMp8NpFDosdXvRG78qM8RVDrd22abNEkRV4Y6wJjx9DC4GKx4EDRf8tdf3TeC47FW61wTG9U",
  "key7": "3ozY1irnFtgH7sQN2wjJ6MYHEq6psQB5fW4hbFx2KaAS6i5f8fio24Ug4xweM7ePJgB6qhLFZSueQb4P9CczSSQu",
  "key8": "5HLtJxz5UQ9UZPpKeU1oet8vRqSra7isj9rnzVgptQ8BrX87feNcXoirztvUSUDm9oreBtnedaZKgybK71LrpwfT",
  "key9": "2GZ3qn4Ugwj3UwPyxaiFxZCnz7D8LNMX1CmgvLdfjwh8Sw8H5YdhrUZGQ7TNBWvT6tnwcidRePrRyYPYrNgGMDt",
  "key10": "5VH7qYZzgwy8zjt1B7JqGup5eJ51pHx6Gn9FQhy1DWM4M2ZU75KwFuocjT6RgvKFYnxscDy8N1RhRfhEDWrvmpvF",
  "key11": "3p3nfUZR4PeVq6GhgyeQcytsjStT1BjPTEkL2URsE9roEZc7MZivmirTap7JYF9qGDfBx6UKtpvjRekWbCRMrFR5",
  "key12": "B6nnzkAprShymP9uK4uoc5375RH5KJZyRZVgRNRAqpsjQ3ewaxsxTXb2hnmP54o6KEndoxBajcWfhBbf7TAFYtD",
  "key13": "2748MABJbGaAErod5nHXdBuHwwM3KC2VA3SWtXB7J6CKEm1YggQsZqRWHhMAYGQBtwnS6oZzK8YeviYGRM4iAhGs",
  "key14": "4taXCYwj1tRtCS2j3haoBh1ZHsVFuT7ex3h51oCh4T4nwsTCT3jR7T9UdgvpWmgCeW3KGyxQK8ZSU81G8t6sMywT",
  "key15": "5MTVC2d7UQgc1p8kHRP8TPCR8hqWaXWfdNAkkjKC27JpQUL9TduCWqHoYevKLwXAgfQYCcepZb8e5LRxkMK8zUKV",
  "key16": "31tHar9hENS7ChXTb848jpRNyELFKn2kdbroiHhCxRb96gs9An5nwbVBbkfmQr9KyedFnCPSC1tA29TZyCF8eBs7",
  "key17": "5DM9RozAJMmmMotvtm5MqboCQB8u8HE9SbmbNcxDdvPVWsNSye8wBWzGgDhs1bMzYo7Wi2b4Ugfr1Nspffp8Vy18",
  "key18": "41YrLC1ckxRWj16HYHwMpfELyGbEz7WKAZPdqHweycQdC8dgTfaNcwaTP9923JpUUPVwSeUfBXM9PnkuXZvLi65H",
  "key19": "5JpYstac9Koc1sk2EZ2rjzaiTRCforUReE2PVY3fScAZ5M2YoDDe7pMrUZmsyXtbgvAcmkrzypgVFuSsrTGudj3x",
  "key20": "peBe1sfXxYf1z51avVDeRo3Vg9u3Y6Sec727B4jk8zoSxwXNvXt6vVM6X9DXYSDso5EJtxKT6UwaJ4YvPCDi5Do",
  "key21": "4jVRUTnvH2Jmcc5gqbwrBb7LkJ1EKvkX5rz216VYg9ZniDn3KnnFhgEgnBPSiqBXohXnzCQpUT3xjZb6CYqHxTcT",
  "key22": "4V59LvVajksbBjmYt13Mr2UD9UD754KXNmFQCzH8CZK6x2gCEcK8aopWqEjrHMcNfmMEod5PAsdjy2yMWG7WaG8N",
  "key23": "3wNT2qzfm4n8r8jujZKkFyMARBHR5VNJc2KBscN6AedHURGurUH9fTh1fFqbFwB89JxNyPQz3MyGCnK96fBuJa3n",
  "key24": "4sXEGzFVgnzTKUmqEtPaoUQUo5WoKDqs1pSZNjpe4szMvXgUCnkaYTLiiYJpNDMizovPzLyVRP1QqDcpzP9wYtEp",
  "key25": "3jFdUUTRABpoZmFayGB2faxB1QSEztgwpmcQnt4kgbfjbwNFUMiN4CzDPMiZFuD5v4yTY1MYR9jUH77Z6P7qSeTU",
  "key26": "3JNGwjjKXJybV8HV1eYEQqE17JMWg4TUtX2e3XpZ6ys8zxHsuUvEbtHiZfzxdbQgVzDRmh7pKQyQ9L8TE4aoZRnH",
  "key27": "48DWnuxzWmhy3xLCCHnnYNDsfNEYZMuJWuMdWkrH11nm9nXUVM36DD4Fz6QrnwpJm6YHZDLqPeZgNQUWJDteed9d",
  "key28": "3PVTHZqXdSVZbk9qH27eAJvo1W1UqMW8CeTVTdVhf3DHJuUS7qm9jYsQo5p4i6wHTPBHw2kH56pnBxZNcZ2zpUdN",
  "key29": "2jHJPNDMJgQHAC6BpgNVGnUHuqdFMptd2QHbUABCNmAWAhK7Rq7JgP75DTXuEwLwWL1bsvsMohWsBbSgEV9uchBa",
  "key30": "26c9ErYnTksfBz8K62xDiPhyPB1S6H3FTCc2T6ZXkdyqTsc9dRXbXvbki9GbHLfD6YthQajBMwsTWXBHvjgojQmC",
  "key31": "5vRo2XmdBGzNJUBV8snGhdefD48WQn5btqVtko9f1w4HRACQWz7Xg8DUULeYciWf6WbsN282hLmQKoz3ZnqtE2fJ",
  "key32": "4TjwmkvqBuN3STxQC5gy57LK2UfknTjzdwqJsumRQQKF15F1hVTw3P7Wnj141kf8hkq8zNoonYMsXhKdg8Fm1cUE",
  "key33": "5cFvT1rMhgGjSWQ2JNJBb3QLqD3CW92j9FAjFPh5a51Qrf7T5Rnv5TXysaqfyHu2zxytmPcdpCwaMPU4gjzGfYYD",
  "key34": "3MmFC4TrVkJqhvH29PUhcMY6pvWERhudcxHEMjnJYxd8zo5PbCbjSD25J3hK5zYsc4i2tU8jU1BTz4a7sRt8EADL",
  "key35": "5SoXwkVVCHTzzToyBA5p3WaXVDTP9zgJt8a1bn5KSdr18cdFbTE5AVLVmttXatnwg2G4LG1j7GYXF75mqzQCn5cv",
  "key36": "4p9N4SZjfqMzrwzC5i22MLjT6b8QurUPNqmKvwZCuAeQvcD3baaHomUhTVmHbfzyeCNEtsmZGp1Ss5SdmGMxmzg6",
  "key37": "4XfapuRGhpAztoCLVA81nrBamtspkyayAjimuo3dbLkL3VmQvaPFyUchUqxQwL2wfeGQd2j98exfUsQbcgfWjLfD",
  "key38": "4tYm8q921knp7HtaXhYQZeGtRGswovAx1RPHTWbzz8sN9DYRqrvRvGpxXA7FkwnQPVec9QXUM3RNqyxthtefSaYx"
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
