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
    "4X4jhG5afSSsu7WQapuX8phQsytWc2Ax8NiKqLU1BFnRTv9hckjYnTGdEJYnQzmKgyUZCSwiXrUcsqYZrUNZ1yZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61AdxDuGCVcdABFFX7cggJhRVUdK8yivH9BLmimK2cxzxiMub2Da9JJnmod5h3KXow9RZzKJEFoNV7oLDt8s9tch",
  "key1": "jsUWMjj4cVvgVMnQgjcYhKjzba1S6jMoJRKhHcEhKULwCrCGWvFw8EnvPKJ1MgVA8MBaga5mdpNcbxQe16Nz5Ww",
  "key2": "5VWhjKPbhnnqkJGsrDLWxCxrZB1ThNgjzDpTCjP6g73dQgpyj2sX7CzemR1b4udBPPuFmYTJCPsisVdLjgQadGvz",
  "key3": "5BhFtPGS1MjmgLFJvMKxG9n1VDzuh9hyVxBQTkMw8umZw3E69gcuEYpbjRbWBadvF4SSV2EZbuyN8dLMfsj23HG3",
  "key4": "4tRxQwigwvcFZiXQ6yPrc49ing5ZBdEQzChi5G6d2HBY381SDEftsa8si5pKrS4mYJaLEWbybHVqHyrV75fkXxYc",
  "key5": "2XpnMrYPcS24wgJY896FUFJy2ocoucKMjDP6hNXL59iSzhYpehrU8cVSj7c6mQjwdAUcSAC1fy3JBvgNZAPjV7rE",
  "key6": "3677ZwuvKiZVnjQPHDuzdRpJyW5UMDpJSc7J11SHTbzoT9aukvJPAQ9QLsxnfEvQquvk1ByQuykCeeEwbEFTAcaf",
  "key7": "5okEEtyVTxkQ2rYUUXP18TywUqd11aERbJuaVVaA4JEgvUtBvCs4uEYSdb1txmXQC7DeG24cnb53r5tMgBTqwhKg",
  "key8": "RmSCp5Nv6gDYDpo9fV6Jar73f8uh3ExFdAY65Ej4ckbhg1qe2iTswS1vzbFqo6FsSSVhu8SsCLUbby6NUioy8K9",
  "key9": "32zguXvi8FYyYfhnghAuvPN4PmWpQMEsuvfXVVsEnA8UzWVpW6NvkHkyGDucaN8LCcGS3TDoUEpHyDmhnidqwfNH",
  "key10": "2XKVoECnUdcyevT6CUfdFbBcmaAFpP2hwYoqM29ok6E5Ada6CjUB4U1bH8UdottxcEpUstCLoKJhS1383WZKnw8T",
  "key11": "2cuZDrEPS4qYrMjWu9281EMsviQGKWxuwmjGtXYqwnmkk9Yuv2AGDBknjqK8cwgjmcBrb86pNW7rcoUGb9RJ5am4",
  "key12": "5J5WHBVrkNk8pSGJp2fkk5pXjpJanQk3MppPbZbyWWFFwG2UHf8kgHpMfPTiYP5wJuZQk1LPCbN3FUbMt9Kn2odt",
  "key13": "41GReT3vYWQVTDDQem2je8TLM5UUV88zA5vAsUz8jgMgP4yTFdziMWaF8ZyoyRpfGD98YqeWRLX4dsttk2tQqbkp",
  "key14": "EPk6V6N5SutUX7rouwVwy5qJWSN7yP3tiypRzr6d4etvKZcWnYVYBtbdSUbNWpoVnphFuN4LwsGsBs3zVgAaUtT",
  "key15": "5saFjnN89MnkrZwtYAo1FzZejhfCkYQaniHbPctd4ye7NewYPmw6rzg9AeUJTfr2JyaCDZYnSjVybz2yaVwkx1ro",
  "key16": "ZcDo4v9HaLg59eHFTTyxexSRvPJXZiUkqEQqD2YDACYEzCd9bn3bXDoCsQqiV68fY2yggYnAjLAQqtJDhZ2bisk",
  "key17": "2EG74p1q4p9f9ETc81XQ64MB6Nwsrf4A2GxegzwjPpfTqvm8ckL4PZpKKvnM4d7LKyhE8z7wN3p68T7JNPEZbUyZ",
  "key18": "c4ir4FR8TkKBuikcsWqHkzFXyBZ4fdsPYpmSUc8zPtGwo3Mr9JLzdyCnB55yK8Ds5k5rCioFykqn3as3yBeerNU",
  "key19": "2YDFNDWEUE63SfwXjtpivzWHvVyzarraHnF41fWztVAYQTnH18vKAnaB3BF1AWeE974KRXavWEQhzaznBeEPfKnf",
  "key20": "4NQiTP9cF7NWpAkdYFgu8gYmwUsfE7KB4Sh2NLJo6gSk68roePyKfLBz3byzSDr32Lm4K46X3Y8uLs9FnSLCQ65f",
  "key21": "5SF2qbSusnWprJSJ16L2bXA8xzTbAvqjVAeVq5eauoYdbwoieRry1bMt7D5ftorh7rEUDRLVHSguE6dGE15TYvd7",
  "key22": "393R4HCUgGm9WYgpLocY7ZN2p2iyNkR87PZbcn6MJjoLqvwySoa8Rim5XqtH9DqCnCh7JrvyCRTzqTkRbyZoJZ13",
  "key23": "2RiGPoLoYGqy3KMV1myXKYv4kAnS9nTTChyodXYy6Kf458VGx39Ra26Y5zokK54Fog9nfsonCfxDBbFeRpYJFy8r",
  "key24": "4iF2tHZvhhrsxiPFhJaTRBAmdHZVudUZf4Y1J59fcwG6Aqdroy1WJ8mwP9WfGYYTCzGihhL67RtLb9EifJTjEUyd",
  "key25": "3RZk8YKEHnJGXN8MCcf71rqi96h5ZRsFQ41nsZWCEwZMkUxqHqzoxDFH7kuyC7Kmo8AEywc5h5oiZSGeFbAh4ZBB",
  "key26": "28tPoLCxkQzi4GueZsazQ1BY9ePhxraEzzNJv3PZKkE5dmaCQRLLL1LnqHnyskpskZD2NQs35F3kS17pJVq7Yca3",
  "key27": "3iGyK2vW3u4tqE19bgHwURRXknXVwgEpASUPpiAo1Lczx2NXfbn35KxYcxr1qeoQSNCrC888JMonwAkrjnTyVD4r",
  "key28": "3EEojEFqmyDKGmmryg1o1rKwixhg23sXHoN1tmjCth5B91V7Gm9uPo6ixmyDfg1s4uRJwjh87dHX3g27nAEMToVM",
  "key29": "5b3Tnrh7nZDjPgJDz9mcMrgCgh6ofWFYr6V6PGgiBTXJVSAoZs56pRmEZicHGqHgZH2QurfTZZPW38wFQzyaQGaA",
  "key30": "36mLk72wg7TC4p5T8Xb322RtCAebQRNN3f1yJvHZhAWMjh6f3GAZ2SxVZo7NEAi9FMA86iKAHwk6GCiizw6DQw6L",
  "key31": "3nLqMtexvMNhyumt9LVPpPa73ZFdBPnc2DhnMoV4DJ6YGdJDnDRKNfYA9nfZGUxQ7j5cbd2bpxhE9Zne6cEBCL2H",
  "key32": "N4mxJ18qrVaqwTsCFhM3LF1zAEPG5qNizdCbsEYaWpfefqXdXLYPyYSp8yuPmf9Jeoa44hJ8a6ZdaEP7itTrMCD",
  "key33": "Z3gtdAZvJD7K8FVDuWBmdUKHB4Zy3ZDDSJyocpuVjR6bHnNFgyZyPomq2noYVHgVnMctqQZX1DHzJwE7gm59SPc"
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
