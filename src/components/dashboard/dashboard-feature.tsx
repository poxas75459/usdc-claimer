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
    "5ChP75rSQiBBKaenqu1qjTChwd7VT42BugwjzSF2MWjVfNrC3BB5fvNpcbMbgACVtf8oeFJqLrrDepixziGhcoNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7KkHKttPTvG5dZpdQjZhP2oAKkXP771yp1bA9WA66NpvzkTJsCSPTVzYiEtvF8aWvH3QQjA6BDTnAJpj6hMoo6a",
  "key1": "5zzYTJuvCvPbCyHw3nTpxHo5zFTqFUmR6w8nXMz7HPU3YFEVRurN3Vv7rzrBqRD8DhZByVZ8cyHxrCPLUr9vhg4C",
  "key2": "3hjJ3DwPNKgLEGzGNEUKLmVL6LPhpqyQN6zvLE2RQrHVY5cgzTXVvpFzQU7sAaKJ9Q6fEiEqRXoS7tnaPQG26961",
  "key3": "55HaLcasePYiV9kDgFHTzUjAdRsCrupsKpS4HC5kF34X1dXtUjUhL6uwJ4Yuta4DCpqpCLRzvGzcVAm7ZMuNYVwP",
  "key4": "5HFzfJMe5UG2aQhrKTT8JRgHpaLijySepmuwgTvijSWHQ4Br8whw8ZK5HaaUPzbiNMq2jCa1Uh6P4sG1bUKSuTV",
  "key5": "4YeVTNVwX7R88DRU1xVmjwpQ7CCyh2PW9D8stqwVuNw71WbG5fGdiVT3PU4UfDv4cCBm3YLmz2DGpmHhuu186NZs",
  "key6": "4yGioUKVQ7peXuQz5nJfmWW2uLoZbL2AkaRXTRrsvun65rsHiS7WYbTDPEta26zUX4eTur91NuwDm2tWHMT1jRxR",
  "key7": "2vYNadJAukACCLWt2SkZNm4S5WggEZPenicAajt2d51pYUT4h7iKCWSnaWiVLDLXsdxUk67Q2JTwDQ4Z7bYZFd3j",
  "key8": "5YXbrXTLgYvBkuTr2mYwC5TV1hL5zHqV8VJevQzMUn1N4BaY5nFciNH8oWUiPVsfeuq8nxsyoWX8PJLFo3gpw4yE",
  "key9": "4Vdrxr5a9DHBSDvcjszKDfiDjCrbn9Zo1KinyoKAmeLNk443pSXu9xw88SS2EaHkcjBozPKbUuqBBrXx9BNXJvEw",
  "key10": "QHYAJyeKRF6TDERzQ8RobqTi25aiv5azSJY4fNFjWPgV1moUGHbYiPwEJYLFHs3BXkZksSAwAqtht9ExNeiwsk3",
  "key11": "2sL4pPY69BUMjSxXTURESVQWVWEwGiGSdgoxooyjdm3jSsU5ppdsi1JM7qpvVJT69KrgV7bFzcvCfmG2G4PNm3tL",
  "key12": "u5aS8suZaQ9kDSMiR9HYTiJprFppLrwbSA2VFjwScwjofxhZaJ4QdvKSQpwURd4aeDzzkrpdetEDcuH8icc8t83",
  "key13": "5bENjgoErPJ5Y5rvKkDy52kBuUKyjjUgpnLu3yidseK7QTaiH4UmN9mHpB3WYsXC7DtDF369bfe41sYfgvLiJYSj",
  "key14": "3mi1VNt6sYcwFpFkmVvR6ri55uvyNqgQsrKKhxM3Q2T7p1PDCvd9AzaKS8gGYaAQpnxpPByJG4H7CvMaF9A7BeN6",
  "key15": "296ULyy8cYusPwiZoLDKiopDWbZppVs2kQbcEpZ1Mo2GW5pRWcwhXkRKDBUnL8GhwkkM3TWo15tRxXVCoz49SovW",
  "key16": "33T9n1bhAM3258bp35VQ61bPBuYxZMs3xUpBKF9McMfDXrqR4bcrJMDUjppFZxDmh5xZ9ZvS2EXdecxp48hfLpNS",
  "key17": "zhpyRmA34NTyjCvj8qiFqxqLZasnUUjWL8CeqbeEJFdQ2d5fRvjdex4XHv6MRjnT8PZVxDDmUbSXZVSFiynT2Da",
  "key18": "44KzyYe77BS12aPhizVTT1NndczooQFNwKvJE1AKwUPuyNGWN7KzgYFwPed8VT8m46m5SDUzi8mX5Xg9fmuKC2R8",
  "key19": "5QhPC2GFTWNGs8bZEJKqzJYr8y3fGgJuonvrpLSU2BxKwWJvJLCuvkGTbh47LDbqrLkcf8LWtvS9NDTQ7DqJys31",
  "key20": "4vfq8jj8wd2ThHfpSuTBXybWrFntBF1u8e8haLUGLr9mqHoff2YNJBJThx6EzEusYC6r1HLF69TW7sox4PeQUC9K",
  "key21": "r7ccV5Q315ziDFywveYscqCBXcA8DJbrrK3oYLL4mp7TMtg7vrovJfFYfe2cn2sK2VLpMi5bAwg5gLEbDRKVVNv",
  "key22": "66Mu57JEd36UcZaAna3BmEPzwo5h7gQV7Gf8pH5C9iyAXfq9Qsr2LhyCvHt8xGLDMqE8v9rLuhQ7mheshLGpfzRt",
  "key23": "3rXHVKmhAoGqYAykB7c9uxhu59p1jqz2ifypG82XBjvzcXiRWGKSZJorVoDSXpS6nd3EVcjVrGaCqzbavN5aJHvx",
  "key24": "2Z3WLitFWA4MBt12o9WRJtznddJhvU6CFffCHcLTZwXeFRKBBgyKnPiuGbm3bGGWrkafEwjMq4ikuwss1YdDvpQn",
  "key25": "2oxq6XCJpUP9Eqzx6LgHkSeLxib227xNzH2HPSPhAL2LFv9JavquQvTpqXyRcUYDUWmzWbEKTDbaGPw8zQKYGaNV",
  "key26": "5e8ViAiaAq1Bdyrpyz25sVvii7hMAXue3SvfRvCQAgKmZ5ZedtHtGWroNqAMeYfydpA5CZaNUhninD9GyTUXb5As",
  "key27": "2NzrwCMo4B4ZzNL9JmpCpW9r5jxZZ6YeaRrxxo5ziKkBoTn6t1Tr7QspHC98vow5FQXoN4141sVb9544SjyEJCJ3",
  "key28": "57Gchc6VyC1axs3JA89ztmiwR66xiLsnJ2iH6pJd2VzKzEoLkVJS3vFiZMeSHV2jB5ruvb8pp1MdiGdYVXz1ieu6",
  "key29": "7kYDCHV6tBryi6T5L4s9yrWcsrSyGbGmtrpsbz7QgjbMnGt61cWMYatecuZLsWq1E5wWTWfUGXFkR579WHTqnKr",
  "key30": "8gS1r8i9L5DiBTVsuzy94Vsem7P5UtFUfpVTQ1ytfMAKmXxrPaFjMTg4FVctRpwsYPH6vLkk5eKRtYYtUZqjsMS",
  "key31": "mK1Ggoajn6NfP59uPwWAEg82yiTgpWJLFhxiKdNRLKCvEWkaQ3VueH8eKqCNuApAPCBtcttZpBc1Ni9iPB5zx6z",
  "key32": "5Q9PSHWKzkmSP4azTvoxg1JeGqrSkVquV35zFXfXYJs7SrtELJ9GoiQajcVcs4hieRvmLCXHnPVw2RkTdeE47Nd4",
  "key33": "fcGypjcjqB8CtRDCJqffYZJ5CGRN1ayb13erVTvPjnjT8BSMA9g9jfCRSSZ39eLcYGGfLt3G9egj13rupZ28YK6",
  "key34": "2LqVFUqAaSSB1JbBPBjWV658mqkaNFTALLGAMH9WWzVGpcaUGEr7iW6KGBR7zHunpZjrrgqbwXcDH75bULt1kQtd",
  "key35": "4TwWVhMKCthYWeYS5bxojg7yX4K7theixSgGQKjP9Bk62Bg3TYKENshpdBBhG3NB6nXTo5aoQv1JDonSWXuSkcM",
  "key36": "3Dk1oMNBxheFGkSMsEqhJ5eRZb3UAA5psfNYDQEsZsDj2Hv8pXUmXeo8qbyqfhvoNSSwz5e1HEd3Ss8uFYszZE8P",
  "key37": "4eQU7z8RmSdApDpK8BXjevJLcahZYihQyXrLanXpcWLC8oaDRtTeUc51TjuVERxzSKs4oP4tTXHAwZft9SaaVZKT",
  "key38": "4iVyFx1hZvmu96qXWVdS29H9p7tqL77ifAfvNv5G6GKnFiWVt3dSqddZcNcYVvSLjCa6b48wyTGvizLkqXFSz58Q"
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
