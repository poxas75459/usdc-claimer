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
    "67BDqfdp3UqxbPD3yGQXAGAGcEsH9RUGk3jXZJC6dz1WkwT38HSFp9PhUDgC83bZyd2jkyxXTTQc2DViUYE9TTeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZPQwHNM7UgoyeavGvFbYU8Adbp3suNCwkXbUEF1oQE3DEnJ5pWceLL9CAJ2r9gCqs6pLZzx6EL8AzW5uquW3CFM",
  "key1": "2zYHCA6YVYY8iY5mDrvZUAjUSTNhc1i9EL4Da9ZrPt9C2fRUdk82JFxeDvkAf4Xp8UNAKYTM6AvgJjL56rpvJGLV",
  "key2": "2kcSi1DY31R21yGecZVPy1DvQrVALtnJ8QdM2QUXMwonrWBTzNcq78VF1R1w8Zpjd3v6XvBdXJAqPT2mLBwEX1nu",
  "key3": "5PbcG1QNThzZTqVr24HEuXYhxFMuHNqkZxyusDG96esFiQMMSJwSuiR9x5CjAP6rFLtnfPU4r3KZ4ZTwkFEa2p9i",
  "key4": "5Z6tqkUV7XE1sqbW7R3k2GYGD1hCCJYuG1KPmwpGwBmhuvU2d33uzbQjYHPdEnN3zhA4qkj3SwjYU5da4EA6uucp",
  "key5": "hSaqtCbVZMFUrqdPvxjAW38N4pnTkTiQRQXooxTvaSuDwbrYFicCbFFVks15hNwZYTbWf8pCf5SXs6Lhx7sHS98",
  "key6": "4MkPUaPMCPEWTHukBBhKfyQyAKzfwTDdfmToWey3St1WSsR9gzWHoA2o84M1QFg26RBzKx24mpwfjtLMPur8mV75",
  "key7": "4U3bX5bfLBnyCCEk9S3co23P13QcCEW6z9myytKARQtGob6TaM9kcbxX3JU4kDZMp354EoyKtpkJwqZVa1a4vVBD",
  "key8": "5cbDXnmxdZnSwKeQBPpLCV9QbguWGp3caEYeM6cGpZRvV3rZnS2SPWbMvBgyRAGAmPQMK1ksWNJTruMo6aDjjP1K",
  "key9": "3YdxyD1tEjkXcBbJXn4j4fSEapZVEwLb6mCzNtZ9BKPQruWbC7PheWnaZijdSkLJtDGAmJssBbzpVP77a9vJXUkN",
  "key10": "55AAyZ1DCuwqC9Z9TDr5yZZzrmYJSEeKuMQKo5cVKdzsgMBdBJhK6u9Tz8E42qDNFE8Q3o9uG76mzqfDuipCx71E",
  "key11": "4bmhuLL3Gtb1tPUniArMLFW2KqpmdXzGYCmCo1W4zL9v9sAFSGbojT6yaj5Z7Swtd3h5mEFJ7cMVtd1Fm94MYmNf",
  "key12": "2oZYX2MF9TeLKBq6Waunu5W5sax1PUjTuJJstmtwKZGLyKZxiCrt8mbg1atc1tnhmd7xRLuR3i4HnMj5Sr24Fg6E",
  "key13": "5etDaFmoZzsD9CHjrv9GrmGVRK3mUsUYLhnXe6WpCb2pL4UfvCauRgroWNw2o7PuwKK8nwu4cXntB7xumRVdXJ59",
  "key14": "4mPBLxJnzpnvwJnonGmhCnx9VpiMpLa3b6Bb7j1wmDi3sw3EeQyBP4MSP5TtUS8RegX3fPTiUyJKku2bU1Q5A4Ka",
  "key15": "5zeDihNb683W4Kt453kFmrDNqhWusnVGKJ5EKP53KoCPW8BvxjpAqCgu8TXdVsh2wqzVTr9ZDedCy6UwRd2C6JAs",
  "key16": "64iTe8fvPqLvAy95oL2wUtLogUEWm4F5LZREXoqo81stMpVCHNZAWW8QpHBSN9JAP88tVwq9P62KoRq6heAL7Dz1",
  "key17": "45Au59sHMNSwp1LWNHbZHonXhwawhTduuU3nWLDvvNDb7VRzuKcnyF8pqo7tY6qpn6xKiP2TPvZwgpQPo542g25K",
  "key18": "Ea3GdTV1nKk8PmBrSZqdykLRuQrEJ1RXq45nabgtYcY8w7NvhpXbfxkHE9h2Ec8YQwQZBmkRKEw3XfVd9VTKR36",
  "key19": "5MhaGsC5AQnezd5SahUTvqjQPR9eDaiQ3cPVrk2517nSxrisiCBHUaLXT3awabXhj7jGc69Z4yzQp9vt93a2Tz9K",
  "key20": "33nDADYybg4c25paxiWJGJaooG6fQkSthtDnZ2dw7oAoXhEcTr2dsKXvuUxwmSE79jQbQ3uZPLDvx6znnvYVdQPE",
  "key21": "HrNqVdMmjyytGtBNDthZcBiFR4daFf5oEhRDmKdU3Sx3Vu36vAY6KTKaeEmV4GCWV1kTcdCdESmFF5KD3KfxpRg",
  "key22": "9uW9irc6bpBm9Y8YwNMZYGmdt1rZDu3arkr8AGBZpQMqnbiQQ1YnXF6V5g2B3mwyD8emsh9R32sHA2LAL5DD1jy",
  "key23": "x3NS6G64CWNUxYJRURXFGXquJiUruKJPgCk1XsYMchxzRKFEFvTkzUmG1PR2FPrG8jANvue3DDAytNuE3YAW8g8",
  "key24": "bn4XMGsWDjz9P9wt9GrUjkprpEvD4vi89T3VqukNEDuar3NiFTki2jcpRPvX5iEbGARetJpvxAsQ3Co5cDytU2P",
  "key25": "xL2FLrKBU3th1oxhQG6tnnHqiEcvRj9smoyDcX8e8Kxt4BrsjYbnU7j9WPYmNwsxdgmGKuXt8rEQ1LtgoR8Bo7o",
  "key26": "645iXDPXVinKYgCRE4RkYDirf51rVRMYxjxSpZqKTZsGcNnUt2JxJrmdN8e7oNPVsar9y7yaCg6Hr91yrDz5xj93",
  "key27": "5nGmpSRTL1cXLLKV4rHeWyevDLrNwi4nhKYg5cFVh3LqcSjQ9kogVd9iYWRyWvRpcNyucuTam14EjZB9MZrZzZST",
  "key28": "5vxxiZbuHH23GB7BbABG6pr7mWmiypbAKpb82zcPTmUJoe1b4GVckRygHoy27xLBNZXcp1kab5oR4LWrceMva4Ev",
  "key29": "3q85NuVxErZ7u3qRdWmUNpF1ukpSqXdwxQ8NXhZcD7JFKgyEeXWEgXVueR3dPcdq4fJkp8rLnRNKvMgTri7nyL8R",
  "key30": "3QfT38Mo6vN2rXKXBgnwwjBGPw2ym2BHUbEJ7EcQRGLFgiuHXtR3HGjAUNrcz8ZCu1kB2Lz3kcFjSbtHyPNiLKDJ",
  "key31": "2yEfMy7Rt8hvMSXSQfKER1CFEzWMWE33DQc8ad8pXiNCgZELXQZM1Zbu9DWXmcCoHdkJ5kgLBvdvzkKrRriiJ73X",
  "key32": "3vTNzS224XNRZFwF1Esb2eGwuT8VuAaFHQigt6LMiBQpA961kyFuCeQJaVZVxiGJRofryqtzJoSxWsFQzsQE8aL6",
  "key33": "2QfbkBr6XHTJcuCh7RyQHmBLCspJYQHrEzRXDEPkaemq9vqZjNKhDH4A17Fj7CncDR35y6euTT67YS88dCam622c",
  "key34": "vX4A8MyTMJkJS2MnvwWD9zVKvxptoWWpz6y59CyvtyhncXqP7pfG7QH3TudWdZbykGxkrFDhhFN15oueACNeweU",
  "key35": "wy4krxUk7zfJrnx8rbUWgQpYjmXcTQWGu8CufLaMA6JKo7rfQRPG7qyW5UydQzSSLGoUfVp3sxP8ZdgovKS6HDo",
  "key36": "53dw5fAjNRyEWhPnkGmbsEL8nYMLg2ePmcW6UCnbeojt6qa9EhDRqsq9nDaSrbXhxhW7PUECTEr63iXemW629R1i",
  "key37": "UdhB4NuszcVNytf7k9Wx2z3Jfsxj8xKCtpdAyb19r2B4FKNWQTNHQd3fxXcnd82qoE4Q1TbKVodhe8orrjX1skN",
  "key38": "4kDwV54hFGfsJ6Rnso3L8Fted9hjSUKDgefchsVpRaFYxNpYrPCnbCXt99ePBdk7MgFTdDNGnmH8a91HQ5dzrnQr",
  "key39": "GncVc3zQU7AC4c9Zm9SWye4qWDMdgcLBQJ1FnxoxuBqEiGiZcJ2PPsf4jjpo8aEpTuN8J9gQJixFdma7QWrSakS",
  "key40": "kAxhrTNgbtugeArfnL7gpKj2UECJfZW3PLLpKDfzsRNTXYBJpJ3TrH1dArcpu6qmEiJUyyGNCsu64VZLQ3N2JY4",
  "key41": "2FWwD6jXmkZoVKscrnXrHvApSi9nYG2KBP8Wr6TvuM4fAW113SgCNzDcepxyyGueYCdKpiezK2u1jdwt9ZDxs2aC",
  "key42": "66bFB7iszoZ9XD8B4df1P7hS7rr29jgt7iAnZSDpGauXJJD5a8K69fk13jqg8vFaMoqBZ9xyZJujnUUA7H6T1oGC",
  "key43": "5TaG8AJWk1r9iN1T55pk48hCXZtQy2z3nk5DCTkqLR62gHU6wqgBdhxZw5tPd5tYBbzwGTcxCRV45eYzyG6kxxmC",
  "key44": "5Gzufh2o5qya8iDYucK5kH4r1mfH1Se8SNsUYwHVVUBfKvRNPEWtmM5PsfpmhTwUy5GEBnmBuDV6ftkUMNpu33AM"
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
