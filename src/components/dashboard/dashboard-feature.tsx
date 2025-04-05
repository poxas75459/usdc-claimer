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
    "WuzZvJn93GpnDPRBhNqepyfM5qg2yzB33MJGUw6ZM8XH3NWecaRH6WScCbDs4dWeWvnHzxretnGQDTzEtXm5hjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wkQDq8aSbK6Q5Cg6SPoCcw2kpdmGZ9cf51X4HALd3nR7R6uMHYqCgEN8CQAyQyn2qv8f3pMjtFtBXgftbQoMDES",
  "key1": "4kAqKTJ9AGH6pJhKvrKicGyJDXfMAzV2TWh7eHTzpLsmsx2Nd3pia3N4EFEWfDpMhJYysd4Ex9M5heyQNCi8UNu4",
  "key2": "278gLh3fxRdMJ2dKLujkqDSfRVpVWkBLaKVJy7RhKfv5iTXaKd7TwtuZTB8x1HJUyHjRwKaEqcZXXexwCL9D8Tzi",
  "key3": "eDp48rkXqS9jPYiiTwAD3qxb1yNXXGDL7RtAUoV7tzssFMZm8hGVU9CB6WBfh7zmpRS39AMqDsFPGWxGW5o2D1F",
  "key4": "2ivUPC7TP7tTPGKzcTXfjXx2zYEnzFWg2k8HWSSRNyN4xk7swhgmYok7Gqya8PgHiaHV6k2fcWXEb5Wa25hHmQUV",
  "key5": "wHdgzZ1GzcPafHEEcDGhXkWEBEX3px1UstBM3YU5RbRa95tWBFPQPqsTt6c3wWgt9Gw55iBG9dx91HceSSZfuWR",
  "key6": "37XN55XF4imx4pv4wVoDsA4sbPu8ngo2jCKv3e2DkYVi7tiYM6f67BXqosU3UuGV7fJExt9p7JrHmkYuSvtB6jjd",
  "key7": "2axRZRVL37LjrnHWDhX3wraX7azoAgf2bsnbPsTUdFeWyQpSFVPuNUbF8S192J1nN5P9rtfh7x43KYiK1wDZoBnj",
  "key8": "2Xv2UEZQzc251snZUFr611TaZxhfSbEbsbyjd4CB5zniJZ4B8paReWBUaPjK6DWq8BzYzrTPBX4q3L5tbzu4rw53",
  "key9": "5uPUabLM5wGJLYU3zET6bLn7M7cs289iAVHXzhViRZGBLTFdNNWeWq4VQWqoxA3PiDVKWajZAHomvTBRwpNJvaE5",
  "key10": "WBAfuVhZ87qdiRrwPVihSv7owkfzgtgdWmzPF5JiBT8qnxw4YHtRADjntUZR6QwfEmGmRauQW7bwg9Q8a5TUjhH",
  "key11": "3pKRXvhHAin7FP2Vtc7kdCM9LT3HYMJpW1a8vKEYghxBpiQnJLvGUPXdgAj7GRguoELMqpwn6EveTTDL3jt2ZWGZ",
  "key12": "GqxRka71C7HpHgopaSHDBJkFJhziaZW5kHB4yRne1hMMr6hcyDhaypoaKFLTsPrvatjkFEH1qxrWZQRnpXY6s4L",
  "key13": "EKo4MB7KeaNmPW4XoyLmexxDMNAjNJaDbMyVap7P6KubYctrhpHCieiUBCo2VXvLc59cDRJ3YKBCtWEzKuGgkCA",
  "key14": "2W2uXNyrPWMdDCsz8d1fejikNCGm6kWoyf4ii4QRD6uEA5iFPrQm1cBJHECXVF11hLUAtr6G2aJYWPQmYK8eWvkW",
  "key15": "4NfupFDfv2DnbGKQRgGk4Nuw55kaUHmTfjWqYLhmNfpXGQCx5W1UbREw33LTGw3d5u9zZV5BPLD8R5bu5tSALZC5",
  "key16": "61rru5sq6TnB8Mm3CTh5Leunzeaf6QDuYnXPXMckV4qxv89xms8MhWBSYm1Gmp8wpBqPozPGBs1MbmrVssCnq9Fh",
  "key17": "4ssefMDW8qBw6FMVroBT4G3mS5BKUk9T9B1euG3VJYNetvCLfueoeDiwZrHaZrt1qqJB8G3YdQ6nFcY6xWUyyekr",
  "key18": "RtjhFpMJCZkcQ5L7Xnu1xswNzbQszJWTcqAHchLMZEQzQXSrY3erh81jJi27xHwH1z3eK25K6DwXjKJvAX9A2dC",
  "key19": "XiT6xhkAXB6oj3RYB1Pvth6UsQU3qWDJ1Qkad4GPD7ADfk49c6rUmtXNHfyabMKR5GtSABckdkzbHWkz3uQ31wf",
  "key20": "4h6uEGAij7BnvY6H2dWVvtkw3NJ74zHYXkdjLB3sCKxry61TiK5QzhxPZaKZXKd5QRLejAsa9o2sZYh21MQhHwqj",
  "key21": "3E5sUQXQtxJPRzvTduN3tcqwFLPSxWE7UKtJJBUcuD8JdcPDEMub6BsV66GsoehSG6YCmRU7AeTeef4sCX9VLTCH",
  "key22": "2CwHvsDqfJBraCrsTEq5szCM4RfZcMEBDMYmVWhp4oP6W6aHFcsB8pvuvPCATeiojCovNUY3UuTJG3rsdAZpPN1s",
  "key23": "4bpXixpfnHPEYxzCaew3Qwq7xGahgNng3zmEPeEdcRw8Wnz51o9ZcmjnEeVFbD1RuPXUiQ3gpZ2jqyVAS6yGzeRY",
  "key24": "4GoTEJZRdo7fioSSHJEb7znvQu4E8vU68euiQsZiedbVW9qoRi9DaxvaNZqTQhTfDwTZgWzDpfon4wNeSL3MC6pB",
  "key25": "3bFgUyZ6XK8FyNVQ6TAqfZtL2mi3AyFXEW7XxFsuR7gXcb1DUTRNT6LvYbmKDA5PWLjAigvpx1vzY6oGvQo4ZDFa",
  "key26": "2pt1eDWuNA4pfdqh4EVqYLcHM9sp5dJkx2QV5j9oJCrZrBRXkki9ESKumSvpCW1DyyTCbSXpScYS1unz5wmktp2V",
  "key27": "7fycNnWMgBp8P1SAtvkNiXoEWiVuuJhejcXLQR2nSQWCvNqxkE4sAaa8AaPtwMSqJN3zVD9w9zAAXcCswoKjiX6",
  "key28": "54Qsitc1rz76sKzEVNXwJj65jiBoSH54YGUYMT38cNzVdCXfyPxeqtxCMNp5JjY72p8tuPnxECszh5ejcwxNsihj",
  "key29": "65eA9fHCwfwDv8giKhjWyHUJLCXGdber4Twvgv7x8beSR4bEYunLra1Gw4ixatjhReJF6Fmvnimu9scePeGvbVUN",
  "key30": "3eA4icJKbEvcUFgyenrH6EW7FxoqNUCxSMTczHBVFKJX7vhPenfcDFH8CfNwJuvZ3m88brdUhr1EESFyZTGQg5fR",
  "key31": "YjehRotSq5xXhyhpNcZ1Gc2UdYNjWZhpEEJPsMZTinekrSfFTFaUSPBVygMxziz4H1McoVGMeDmFXnUcHfe1J8L",
  "key32": "3SfuXy5XTWV2zR99qbV8cZNB6uteBxHhhtUcasZFiQFYtESvqzkoZfzcEq7c1Jmm68XxpBAghTSwEcV7XDPGqw5Z",
  "key33": "32Wc5yiScUuyCEdZaDUYHGgT1Wi4KjaDRVsin6FXhXCot4zxFpfud9C3Yt7rAqD2ZbCSJzS29ZAtz5oKNChDzgEQ",
  "key34": "4gpDBeTfLNpWWVw2a7r4fVkVQNtQd914fiycsP1NzbtkRTgtpavEbyNwRQD7umAwRnhq1tuppnuC1jVWMTLYXQ7Z",
  "key35": "2NqrS7W98E7uVxobLcZqWDbAn9bz1uFyEVBjbghzLUXA2JwrYoYZ34EaJYmiSz3u3pvVCiPQdSj15cbjwGMxWZVG",
  "key36": "2XHSBoRFonzsWsoGH9MACEoEKr4jmzMhdBJFcandojUc1zzskk36n7pdHGwSGoiQkQ9HxV3zTVNTSWQozJSsWPBL",
  "key37": "qv7GQSB1y6EGpiUCo3vd2Tz7gVRrwCTEFn2eSXMGa69JQtzmx9biEedZ4YRPWFddKvkXuzpZsRisvjnVEsQ6GTF",
  "key38": "2xkwQfzUb8e9dfFCy8DpRECczYHuw1i9jaNqsb6YGaJVKuAy4Lud9zFyMMGvMyzPx7dQk39ZheUnM6TU6mSqWu7t",
  "key39": "SiAwELHEK9BvQy9eCsNCqZufLgt4xd7ZSKJqfkYbtUpAenmwRZzQe8yRdNjHXjXFA7BzB7tKeDdMWpe9UJ2rssR",
  "key40": "2UCFgyfLn7Srx2Qsy1xmnkUmd1AEnJTqBCcDjTdH8j2y3DaqpZcZBMn2cugx9KKk6QUQS29r8m21UdxNCw3X1qBp",
  "key41": "MzGXKhkoEFPaEMpCrGkRmD2RipsLcMxyALQCUBe2T1C753vkMHFaPTp25DHfs9gycAGmbjLPFR6YBoijv1eqHkz"
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
