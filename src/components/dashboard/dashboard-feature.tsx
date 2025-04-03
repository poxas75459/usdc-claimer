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
    "4RvzKvXRgYJMSo5Myh1vJD9L6DLAajK7WKp3qC9Uj4aSazdk2rPJv7drG2v1VzJ3e51czhPDquVmrKvYJwHSAdYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pstKyT1dRdbADZtPmyg2UgMRMEgxAyz3PhQR9vHnsQccZkLzsoSD5NvwKPQe3RhMzFABE6XoEaf2KP79W2Jdpky",
  "key1": "FFte9q4N4RfEjGfjfqxMvN8S4muRAH2Tfa9ErZeDJtRbuwvB3D2jfNLNKFUG7Lv5rHLZnLY5Gs2458SmDbFZ6S8",
  "key2": "4Gyp2WuZT7GMHpehdkvx2En81oYqRzW1xJRP9iDJ7PANhkFvSSNfT6nbKxvJaLVQ8ovrDn1oMNEvqUr8sazHHFsn",
  "key3": "59XDJXB4HxcEKNvZ1wBpqTqKZpPqSzjLahrbG25JeVrkEt429V8Mu9mieUQ7pM84LRMLRbv5Nz2rA81phami6S5j",
  "key4": "3qffNSDJRM9cSQVJPH1nS6hqCfiCDp9SiL6qYQRQvj5nK4S4tLjLmVmreq8RLGxoq1e9QAUsRAESqEHZyCmRtfhi",
  "key5": "5J9FTtVHnWCcz1kj5a5guiQwrpT62pcg9hPogbCf4nJkwkVwg4qZEXcvb2mRfDQ48e1SaG3XGfbV12KoSRmtrBsu",
  "key6": "53ikXQxYmNBdekzKKbm13vqpQ2jD14XY36wJnVsv1i95uakkTaAe8wxB9U18ri8g7hS7MMGsP4WcsLaqXFe4pZWy",
  "key7": "2dp7htFmWpot5AEUh9g63vBy1r4iE192vnJV9BNtAScyMwfSMLzvUukFfPDAe7g7PxbKmhX2N78r1pv7pEQ7egGk",
  "key8": "5jJtGcwYG1pfVgooZ2xjZZEhWCWJB7q4E4So8Dioq8yHmeFVmnrRYQrB2HD4U9JHyAtafC4DTCxyFnefw5Yw3toQ",
  "key9": "4QYQbWgGTJSbWwf6pwfYGrsEKkLwzZ2J1gpQXWF4HQH162qKpXmUojSjpynvwpEcABtbdPJPTvsqrMozKv9NNvPw",
  "key10": "NCG4RQ3HtAyARDxUmsPHXMJaZeYJtTd8EVWXfQX3h1D4tfaDxnyCgCXz4q6scHRuQ8vyEEeWvLysHV6FXdaEPVs",
  "key11": "59brcR8dVmZFETYcLmR9DhTCF1g5KT5r9V7oiVzdeT7sRY22YBKMKBUV71eacy4TctZE3vjEhJPf9fKGbFNNuBHw",
  "key12": "4NNCyJpzj6CnUs6MXKJ7Yn4qHUf9GtMXM5sq283dcqGpJ1T4NL6d4uAmQhygDvhPrZYtbE8VY49P1yXc4pAWPDUk",
  "key13": "SKuV1pL4ebmwKDgsTdh9PrCriR4K1hePGaZ1BfQ9oAcmB77Cx9YLZSkJ7wQcmnyoLUS4yhBXsAbkfZEm9veEqew",
  "key14": "25QbbZeUZyWwTUPaLVZc1JTFcYuXEEvUS4R2tjLde77eGCn3XhG4uoiiTdFgPEo8mihpaiaJUNC6y9XmgF2ZPXYX",
  "key15": "52K7bGof9MCuAwrdu6qgpkf3NrV8mwnfV9gmwTn2oj2qipNsHuQNHe3C4ZC2buaVjfMAhpczaYUjsXnB7cfCPpmf",
  "key16": "3i22zZcXAKeYGP7bGJutHRWeuxPdaJb6PHYhqwkG3qfBGv3svw24HoXNuVQVG8tTxnvUw1XuPPWuTJ8X4fGtPRQZ",
  "key17": "4esgAe2XUyGq6uJxP8gAcdTU2oLjoQcPf1cziXQJKkrVtDxJvx2SF95euS3KCmxbQna8Gsr3QH35BP5q2rV1CUqE",
  "key18": "2odN7sZKgujz9QaWY3Ta3xVs8sxbKJHrWppH2XBUvstzh8wcT7sfG6sMwVvngYajqfRyihbSmgCN6iUCAd9XSH5x",
  "key19": "3SNqTMYvpKCBKcMxuKNrL2PoHjdX6J2JWC6ZqA9jtxQdPvzMX2B5ML6vvTbfhFuHbve6NH5WKW4kg3JaMbBSm199",
  "key20": "UZrV5xAJPukhURjvLG1Mso2g3KrE3YPPRCS7NXaNjvaUcmBh7X3noQLLL4xzqEQRJ9pYL5EtjrsTtez6cEuVr5w",
  "key21": "4RiYQ7qTkUuZFmaA7U9A2VCTBYUVoD4CLHqSmCpFR7Z8WiUgVrx4EXwxpzmZowLgwTQhk4fzr95HdHSbCNZ88Jpf",
  "key22": "5WMB4367XFmwGBHbj3EcYYAsWMeboFuWSFpFsERh9wDtUm3j4u1s7Gf7mNTNynEfoDQHuTLYQ1W9dgG3szSZa83j",
  "key23": "24qr9f51jyGABVXAy8AXdZws6xFH4WJWGFyP77Maa11fmffK7r8U1Y1VVoKjpPwx1ZiGWq2vQbgiDNHkiuJbjWyR",
  "key24": "5U1zo7F8krcmGLRgcTyqKNnij3WsVFRKxbZ2ozxyjNczkCmc8622vepbM7uTj3NXoHNcdEM6gMpXUAznb96PyiDq",
  "key25": "2DWC7HMCiUyu9ZbeX3mBbviXDbZ3EwU7nGMhypgsSJNRjhqDYnLTXm3yj9N1XFQuiVGvP6meNpThMBovx14H676Y",
  "key26": "4KANYRSJoFmaV7czFHUZY6ormte7EnNZVS6EjRgKNioLaG4sCzrawj85ZY8CqvXw59gEeQ1om77gDacD4c3Zv5FN",
  "key27": "3iL3WyNsMhqrrEaWgSxZaGqQtBYCcm2QWjPSTrbcypPtyySVmNP7zwUCQpiMRp3vwtA2z2Bz8JszL4frSBne5REY",
  "key28": "45amuzwo3Rq8SaU8o8yYyqwFi6ts3KVHpZ2mRhpxgzE4j23aANsqEpLv1Jm1z1NNwKUSLcyHMi8BGGAQevrW9vUU",
  "key29": "2PHwAMZsWrpUY9hGGTCeS3ZVw9FCEgokN9kTqsESgvCnfnpCBxonepWnhL72wXgDpGfYcYvaa47USSUDT9H6kGjh",
  "key30": "HNT4vL1sXps2VZGLKLr8mENhtY9G2UGNLJ3Mckmeeih6cwbPALr18ScEyHW2SH94VjZ9P1JDC54jEcMpQvwH7yU",
  "key31": "rxruwku8Bq6RrvCNra1PUQ56YaURXRTRRXb3PQDbKvhqZv3a1Modi4k8rf8wcZoT9ZmLiMamQ3xfe6PmA7qPZDC",
  "key32": "tAHEauBKNEYf9odvUJ3MQ7VApkj3rYCtP9JAeUZXFzh2HqviYRZJfpw5sKXnQbypCLjDSF13AbXE7keE8bzGhMi",
  "key33": "3C9CfE3jg8wFb5Q1n6XQeqMF3Tps96wc3rVBEVNzAmzTYtkvFq9Jq2XsXHJjq4rygxmwEFax4ezqFtrVQucnatyc",
  "key34": "g8zW3ddrFNRA7RVTLQQ262BDpoQ6hMZrGQvtzNrgLhUJtnBfapdnc5CZJCg458H4GQWHfPJRokuSV4c3BoXbrgC",
  "key35": "4s2W9PJciADpTgbhJF19Cs3rFD67rDq2bFm7K2z6VKFtMSaiFUz4sEGbx6SpQm3W4wgVnZp8PSTrzGqAaPSqkSCS",
  "key36": "2nwxq1ed7XzP3MpJqYq9thPpQDTBpYp4PKtBRNKhM2jcUtdM24wwrobWE4RzGP8RCzD2Jr8ECADDJRiYA97VUhB1",
  "key37": "36TsGcpQtSoLSxf4SEHnf3qVU7DSiUGZMNTnGtnKrEURgxP2KyM5W81RSByyW3qd1rivTW5S7tD9FcrfdorPWXna"
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
