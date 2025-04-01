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
    "62zJPLpGyJFffyw9CXqioJJUJWmBDf3eMKRaiPUtdQyZP3arRpbvJ7aegsnSre2grf4hdS48QBB6rCXDqcTV6cuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37bdnXvRhWopEQATqBZQreejdeUU8RdGG4xxv7yo7SRqrNWx9yjY9qoUKWemkrcAech8edLL3bfNyXvVcCNiMSLR",
  "key1": "VywGgHMVPA8xAghiCdZaEg6fK7nrXWtMjXEYdeddUMSM9pXxiVAG8xyn9qhuqTXKttGCWs2qq79G5721UUPvWUe",
  "key2": "5V3JozccPdDRxNAa241j5W2v1DA5RUBoZC7XfDAPYpBSit5S6H2qkScrx2o64jFno7AWjUbqJzRo5QXAmWkBrgu8",
  "key3": "3Do41pk1motNockHExEd2Bh5T3X6AbQVkjnqcuyzVko8HtzC1CJEwkH4mQK6WXffFKNdqXa74eMoCikvgooMkWQw",
  "key4": "R3Et44hNamLpPwQ4LpLrTnU2iZZayXW1gjmDKoMRHYcxUJUNbDRYsq4715HTq2oJbrFUtwvDZqdr7bg5zr2SHiv",
  "key5": "PECd79TU6UKZ3R6eYzipHDitkSfnVntDQPymeTASDbqp4dqSxcJsjZMG4ZqsEpeYA16eDYzaMDpJSPBQouVHNpk",
  "key6": "SjVzgxMngWiAXWVYwKQUpKiXVt4ErqqVjBJjAKSCpVVe6TGoDYwUEas9ac9VhyEgVrwPE42MNJn6EZBSdqAJZJV",
  "key7": "36BiLWZ1szg6LTbrqcA12Saq47CbkGARkEWaCdx6A4EtTvR7CeNpgYTkFCkw7Z3ocE6zBsBkW3249tdHPHmu54mS",
  "key8": "59WPnkPjhkWAaQKSdNQiNDvyhNF1oavMgBr11qeAyDGKsAJFoQoskfRuQ6YN68G9EEZuZnERNgshm6UfonYqrLX6",
  "key9": "5tSwxxvdEEnCoUYnT11L2WQdKbGhM6J2Dyhc578raz7gExsGzozkpdcb5PKMCWCiceYcnZtYoBoMDzhcoZVYzc4r",
  "key10": "4raYoAKkoR64qHBvsqkQKbmPQ7ZUdS95BBAkrdqoJCN5kzGq4qwQhYyFs54NGuh3Nvi15Z8Sebz58cjyuG6mEfcD",
  "key11": "3yrA3SQ9prxGQzxC5MUNvwuuD6bWxad8WF1igyKX9qiHvhQRVTNEXpZXRwfUQLhvc2vpZe14AgQLTZa2jGYmbBDh",
  "key12": "5xSLLkEFUNgaD43EbCFQLQnp1K7AwvbRspNyfiFo5MEWLjd5MVRSN5jfp5WKCTb9yZd9o9h7f2v93rJ3Yv5HNwpq",
  "key13": "5r7nuZgFSWTomgezfaAHcCG53JpRUFd9UaWwzStcohrrdMpGmrpnvCrpNWiQMWzDicoMYuzWSABf4vfpMj9mz1de",
  "key14": "2ij1RijYWo7a5cAquQPx41wzX7SCxjdbQME9GHvFZXucxYtVjLUfHhML8woq2iYqHUfboBFrarpFEigNTScAZsw6",
  "key15": "5VVC6G6NGxSGW8WeamWPGhAaTSgYi95uMMvK1UEtrVkpJgpN1qPq1wyDjKP15ub75P6EQGG19PXgm6ZRTgzPnAnr",
  "key16": "4H9r5hJpidptaitv2ABhz9w72FhY5NMCrtzEthyerL1zUDFyaouUdDJiRLzU4FW5H71AD1tMotWQwsF9dj7ozAt4",
  "key17": "24ZJGHcmPu7jx3nuLGR6Y9oBS7SRGnJoriecfcPQkT4EPhnv9Nqv3FaWbpzV3x2nNjurWKhCnCh9q8xso6cMUcn3",
  "key18": "56u6ZVGoJvSf7qVq2knJHxEYoX7zhZPk1BgRQPo2UtVYuCQ1YRFgrdqdPaGZvQUWH7Yz8hQByZH1LnrjCzuncRo1",
  "key19": "2pd5J4x1wufMHqLi3fa61tKy8fM8uR73ebiCqMFcpDBVDgGkxyPWCANSW9zxqcg6iDGCgkvPJqTPn8HHPtfSqEgU",
  "key20": "E9RCcjvGgbNq3CYUmSV33VNYMYVbz6t6Cp8wyDHJmRTbepQ6F9NeQTWk347doH1ySr3rSd2a4C6ykWgMEURVk4S",
  "key21": "xrauYYy7RabQUUZQ194KDRo1d6U1sosQk9CAWG9PxpNd1YCgqKUfu89A77znxejsGDTyvpHQ7xPpTXNRcrh31Dj",
  "key22": "3KtQ9ndyz79VKyqyzjwYrS9eKBbFkbqELjoNwZ4AH3RNHAmirvybJvNJyvQgUrQ4mAKVKUWoazGJhMkNtzTygACp",
  "key23": "67PAHUbgGtNFkLh7XvCFeNUSDptJzgPp5tPP129MBFSp1ZD3wazfv7my3G8fKE1rCs8aFDi4MQPyQcqBagBGWA8p",
  "key24": "3twbGPQjH2cG5C7d6aynCJ4rNVexzDJ64s6aMZ4fYhjQMZietjViuy8jAbM5dtae6TMVE3sYuCDM3sAqMyvwN17j",
  "key25": "3Vcnh1uBNnGKiEZugUVYyfxiiEnSAe5nSdC9U8psBufqMTr2PYXabMg2VeYg3fxN7JdtCXDyd4cfXMYPgsYVftAN",
  "key26": "3EMVKgppQsws9bR5uS1pKf6SVdj9RBbNbnqLn67pfv4uvMC3hEJwscMPT3QhUCiSLuhb5N6GLYijQ1BnNHt7jnjz",
  "key27": "onVnYwZ3QYUMSLLdr5vRhSxyLoKkYo6k2i9ehS3TVkdCFwMzTkZ8QHEN9M1kTm1fkcC7e8j25yEqWpKKNdQs1QM",
  "key28": "4K2t3k5mM1L9tvV5e5dvi97QmjtaFU4nWLrvBPjT6bDiGhSETDufStrV3HGomnxtiCbdk8Qr1MMcioJbZoRfnjoR",
  "key29": "3PYah4gtfqYtFTx4j1Vm3zCSZA6eCbNsSgm9g6VQJ9urr3vGzbahjNPECxhTeHsUzr26mCHtLfDRk2AcnUi1pWp1",
  "key30": "2H24LByDggDp1oWCN6xEhRo9Rx7bE4vMhYfQBpcCZXUAQPnmJbd2SSECFaog5MQHVdgqFHGgd6N6G9CP11dcht1m",
  "key31": "3fpg6AKw1yZGweYnoL5GRgx8UJCbqs3st8CofEezBm6AqdZ5G472c25BtkVRcLx8pJZhFVtiyv4aZYaeoNEedtYu"
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
