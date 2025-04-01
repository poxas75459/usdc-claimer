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
    "2QgdxU76VxdroTB3ufxpngqmtmdYc6Zfq6dYAxTrsVXQjr524XXHeBeBHwL23afgWW96mSmnRv1sizgTqAsJi4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nr4brEjre9NDe6wk33jDcTfYGfts7Crdf6AhQxBt79BgXJ6v3vjuQuWpbLWkGRUoVV4i3u6HL45U83ZBwXawuM2",
  "key1": "AxiQFKYSczMNnPW4hnMLgYxZmnrZte9TWnQunqzXtUj7TReRbk8nCZygj2K2uBFQmfK1Fnje9wU1sKS5ooq8JYa",
  "key2": "5yq9MBdTrGwvcCZYXciLnxmMttp2WZejrHRthbHM5oiTRyRdzPjJH25k1oUxXGcamKWLESfq28iWxVeeFJaDPF9c",
  "key3": "uxiLenLLEmbKLu7JBhp2EVsBnmD5Lo7eJhsUjgtoWNayA9d5KiQ2y6cuDVFz3DxkSSdqbkSnaFLwpRJB7UUgeVb",
  "key4": "5P6j9JBsma1xwEpJQxbGyV8GVGCRJ9X4368J1jL5Mafs7zMSAyNShbcrQomTbChehwVspPVDv5kLzuPCtc4eQRa5",
  "key5": "3FEi3HVkiVtdUHFUjjCDmzar64W4rrsBXp1K1xmbxqKns1T2btr6nGuV1u1nF3qoJiiRJJVHuvtbhzA9ZHfQLymZ",
  "key6": "27u6FjGQqg6M8xJ3vfHdjWSn76mqH2wxX3HwfW4mnuEWRoT2K4kYEb95X1ETqdrPJjaPXoqA28zjGvhGWGkQN5h6",
  "key7": "3JM468sKKuZPt5BA5qwgoQjKHaSEfi9nS1XwGvM6riHSjaqq7tjPADRsz8G3Amwuum17sxbYB1UWiycn9tEqJ2Yw",
  "key8": "2HhG3SL8pZqpmPXqMvhSWW5FMqu4LDQvMUkrvejZ4iaGsaNanyFwK1qH4ZhktaiA3u1BiLjQVCsF9oQGfwKRX4at",
  "key9": "4RZxCHj4D4YpnMhBvMDAoVfj4At2W5wxnZKkYWZHynezznkk7UBtKMsHKoSDKsSMPnpwwpsiFpChgr66DFHnrgaz",
  "key10": "4H6fgssrmswo6Thnng9wgVZLQpGgbwjmsM9AhcuD4pHWZuHMc8QhNUS114R5TcxgMMvJkCAYTfEruiP4PxcGwz4C",
  "key11": "473BduJnui3vTz8cubYbF7iN2QeRMAGLhsmX1xbVrMysQ7V57tAyPNGfJ5PRTx6fxc2b62PSrpiuZ8U751bVw5j5",
  "key12": "TE6joyW58DxbnXC8HRj3hMAjtf737LebCr2btiJbsk7GQif9KycBsbs4HDnzxhQ3GhHMta7otm8Qucoj9o3K4Pw",
  "key13": "xFwNNPAWgAr9R3hnh7mt8kbbZos6NTKq8gpi3QQqEsEJwij5tzvcWfxtXfzNrvXhkvC57yag5fV8DfAkwZWg35A",
  "key14": "5Su1yBeDmxoDRy6Py45zfqnJ4uU3sxbX7dTraDHTev7baSqSkR68U3h5fgzaQ8iehhf5bHbZFqtHP1kQj4vhdQTp",
  "key15": "DMcC4VZdm1rVuk4a4f55P8RMUcSc6LLBMeEYjAd3CyVPdhcwe98rREX1q2pQYb2Hf8pf34uyRgXWyLCM958dA7A",
  "key16": "5A2XTFXHNbAHxDgzVHoevevMp8kdMs9WufFrN4rs5fVFMqEmCjUiaXCKBPuHkQkipeTsCAqtUoNr6WCK9ZD9d4ji",
  "key17": "4stdA4of92Wz5FhCUKchqtX1hBZewtryXbUkd6CKEQkhcWvHpquF3C3kWK7MEm4tiCiCrbTU7KqP3RqZizdLoRRR",
  "key18": "51bR9QqoU56VnUUnUK6gZx7JJJyhok6C9PJBwwHewu4dLhgnM8Pr6krVw6GJRVPQtCd72EZoJGiQdJZF6hANyJiT",
  "key19": "5XVFPvS4PqiA3wSctpHXGgQyZ5sb22WWPvb5Z79CJD6VY3tie8cdKTpyRLuRPLZyQoM31U6QpWQcvvyHVww7Rxaf",
  "key20": "2UcGaEvheQKYHYtDJYYC6EMG9AJFpUbBZgMMQ9Yr1ErZmAdvvegLmCFttAjugyFcApoYvjNfqmXQyuycgKQnrbB1",
  "key21": "2dQPZ9iwrJmEbrvBiFHi8BRQhxgLkhgADin1yfn2WQZwBuufyGwdNXgw6taf7tzgEfing4CsYWKEJtE66ts4Ph1e",
  "key22": "4zC2Bh4DLvRKrGhKA1547nhpTiKzdBf7fXhQpyYMJP53owysK647QCGTvT1dn9zLyxW9D8wGNT62WkFAT8UvDMof",
  "key23": "2nThA6rnWM7v2pmX8GjWmVgbStTvqhdHvUe915rCPM9tSq5ryHXBUD4EfPmizbG74KcTQi3z3qM4PLPTABMBvNDh",
  "key24": "2npUSv5mEsCh59KL9Xgv2P8KSx4kyMB6zA9CRsRNgKYyPJCW3hyYabYNjT4UDsY3CV1oZhpkFNUnm38Wgf8gbdYd",
  "key25": "56CjLtiS6KL8iyPNfnQKPwpdENkeBBJ6tNUQYx8Fc67i6aHeRW2MDuJtLLatsPwJNFjaBZtN8YbNosWQEdLWsGdX",
  "key26": "39eEJ7Y4z4qwgAVcwkzWmmge4TaF9WRzW6NeL5vC3XLyKfLxRHn72FkxPgTgo4bxqvyZQNLTEGRtr2TXFM8ZjFY9",
  "key27": "3RgxXAD8ZDAKbv1qt9tq1Tvqkt9Fzyrpz6GK6atRdzmUgGRiu7jVvb43rGY2PqpA4LyJ54VpkDBruNim1bd8ZNfU",
  "key28": "2PQWpYvCNzERwvbZz9U45WExmLEYCWFxRANGeanMbdHELf5cf7Si71Dv9hhK5a9HwV9w52PLopvPBqG4cnoqD45B",
  "key29": "2KviQAxa4Ckp3cZVnHxqDHQFU59NNtjZP5vXBxw9FSAqxs8Kuifk8SrQJ9c4NTothJaa6YhaWdoTdY6hzca7wfB3",
  "key30": "4AfuV1CHFo4pyYyNpzsw6AkMs4Db7QxrSP1mwN3eBwXawUcfcYdhzrdc3aERwWKXF2pYzNY1re3Mt9FG7unPg16j",
  "key31": "2t4ismJU3vUNQoPsnN3QGS5N2K7gYMhyiZ28z1wnQBDJBfqsTg2vjiyVUoBgb1T2ehmLaPVvV5Lbaq5f49pFGwV4",
  "key32": "44NB37n2XLA2TdqnVWBxe4tGV6EkqntW2pfgqYxw43koPXwGyhGw38mYJLhhBtDomxEknUkuxKH13K1tjWEu1LSv",
  "key33": "65pTT9wNLNMJBmgqp2yPLfZ8BqRrcKgAvYp7SoC1HKeHEpP7cSVE2MFPAJozWyUkNk7wdXpZ6rRvQKvKmN2ZQzWM",
  "key34": "3ekWHDRLPUvXa4i2Wda55jG3EAAb9n2uoXsdGM2V1sJrDf4NH1CVWJo5XBH3hWh15vnRt3F7gR2yMf8Dj1F7y8QS"
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
