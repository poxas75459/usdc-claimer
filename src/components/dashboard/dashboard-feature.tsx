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
    "2byYjWeSB6tW3i7v9Ff7yBkkFLL6RtJjVij1EksHJu5TWU7z8hCpXK8dcnDUb3pLzYnU5bS6DJcmcM56bN37PhGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbasAyBK1imBzpmaZHDdBpzkbFY8ruGZVkM9bv4PGLmqZT7otfRvKYP8ZVLeNhcKcmPKR82BAj1btk7ti1gyemP",
  "key1": "3vnaDe1F6zW6DhduYbEoRBdE6AFrx7fNUyKNXuLT4eXhbyGzYY7JEqU2Qrv2JvZ7HmBrivmPTPx4sFQaJUa7oFGH",
  "key2": "43Sxj5RH7A6LjRVirUHZ1MaKoakxYvfEy3AaMxSnXgAhERuMHADuSq9ZMidTjLgmrSueqDNrQXcGyCSNPrSbpziR",
  "key3": "36GtsbeAFEEvocU4md7CBe1TetdYvq3WNaQSzPxwTexZZsR9Ww9QCkEVgAvC8Xn3F9Rv1zKh866Ji9oQ1rbXjm1T",
  "key4": "4XEVBtDVB9k44dexpBAF4aJyQYuew7DQDLhMBVNKE6dr4kKHXdYQrGN8TyZwVcEbcAeGrAwkr9v6XCLEHFcUMTSi",
  "key5": "1ppWg5j65dydxBcj5JrqfwPNYrVU7h8QVsvddoQWUQcGQLcZWoxRC1BrrrafXfHXJSUcBYzK7YxVXkuwc6TuZDb",
  "key6": "29ntg2FBNKQMwsUu88e59t4Rvb67gRHZ8hj2dy7qDaBYVc62EZoBUQQEEjxs1GSrubU9GtcMf8ipRxXsTf35qKJ4",
  "key7": "4KnUbfoxnyK4NjMCqWq7u2xEbDT2vHmx7yRc1VbgaZMTKb2Xm4uqB5fhqJ2r9W5HXRQuc9FBxMwrtoohc2anviua",
  "key8": "2rSa8pto1uhXfJ2qd9XzDLvcS1oN7gKiWaN9AWP2kgz24dPAxauJAD8uN2shBQaqh4EwpaaGS5cz7bUfnNUoyjqw",
  "key9": "5bN7ssodXXrUvgX9VD2pExdTM3Az4HLNSuyR8QdUW2HDd5jxAzvQRT2BK2Dp2F7HRxN8yFqD8NQ4xsbEV3K6vxgP",
  "key10": "UZZf6oCZNrM22YvXLBxUjVpTU3QZZNeh2RuzyCSz5AaknbegXyWRJt7B17vHJp1xjos6TPHhKsCLbq9Ghv14RrM",
  "key11": "2cQSSm135gh7QhK2Hz9TxPfkeQX1kEAGNNkBmd3YdZMd9ctSaJhXftc8SPW5tBaXVoytBXe8PZ4egafJLdjb4dqx",
  "key12": "3AwUSqAJyvg6tswJC1yL5wt6avjP8Hn7KCZaPjG6oETgNyuH59Yqn2pL2JFFEdkWbT6v9FcPiEKRxA3LUEVVqSwh",
  "key13": "5yt8Lh9TrLUayNSWrqW6P5NqppTrtkHRT1XUCvf9TXvcSgDmpqd2PNK4FwBZKmy7BYr6tVAmUpndsde5bYGK1pna",
  "key14": "4nKSh6mismSAhyE7EiKkBxgh5CqJKDGwWMFGaeV6FDdFxYyFybni1pnSh1nFUNTodeUUVkVcfrcHS8Jj4mfMn6ub",
  "key15": "58bBnX3dKSzzGpnQ8n7NYnsUNkVcgfnVVEBcYyw1jSsZH1T21LUCMZgu1pNq2k1wEb4YVKynaYQosVQb9MjoRwGj",
  "key16": "2DGUYieNrTQBb6CrhPBEGGsAH3MLpD9FZrtTW3GAD9pWkrgeWvALstVqAFwox7aVsruesaEAwqr9oZcsdhvWFLGx",
  "key17": "4bNNsLPYKYXmAuDGqTbFhfYThyM3kGDcuDxrQGG3FMojGLP26spNtPC7HLN6vJQxgXVo5kiDYhm7YnPghS9zUPxe",
  "key18": "57oLTCiZUKzgSncu6j1K4UT1W2p79zZ1tASNzPBNNto2ZNjrgAw5eBjyUfpkeUzMbhyBmcnPE9Ndh55qy5Dyemk8",
  "key19": "5diWy4DVaExgRMts6hQsFmKZpbjzv4tAnXi9DwzqVXxExANPRmRDThBDRivdpNjPiy2AHeAjLVp88tQ8bRhHexd8",
  "key20": "5GYEsD6HuqWUf2NhxtMDaGwWQaLtTri3sGh1vThZEhGcGfcow3cHw3xQRSpa5QB6YA5adSG5o5UEKaaZTwYU7DKV",
  "key21": "2f3W2RyU5JsRsB7HRsMie7UhGdTjeMoS7NRgpkqABFNcPnzrYnZhRufcE541CoxT9UChUsqTW5QTc51AJsyFqMME",
  "key22": "33HyKJiYBhobpsYnWhrcSeSnARohvp8tt7qQt2BRZRNhqcN25vk3WbxPwSrRvuTCvxfR359FqVJ4uViiPV9x26xu",
  "key23": "eXEjNK4TDmV711jmoq6aVh9C7hJJTAdyXmXrgqjkkwDzemxhzq6we9Dg5D1a9j3H41a5HuSJAG1dtQYBr1uziUF",
  "key24": "3RAkCyFTgBwRFfomYhgS2jY3e6BA99A8xnP5grRfGdKwZi4BdiVazP7DXZYrKggAh2ZBgJWYmbe9pp7iX24E9qcd",
  "key25": "1w92oPfCsVV66yKAqYRReA15vFUDfCrE2zuG7wfxbrFS9fYL3aZSjdvAKpVxKcT84WBRA4LpJ1D4mZ9FzuraB2N",
  "key26": "2R2Yv94ZnTdfDixwYKTdZ6onib1BwEzCVoVja8o8X6VifRQrz7mQYe1Pi5cjsA593BVuSiSis6ngkwt3LqjXkKKu",
  "key27": "4HP3gaxA2HAsxgCWxTURzFBRnQgnLZeWesPCBXJxXD6fARjTMDx7UWdVmRpwtvyBU2LkjG5F1w2WyQcpp77sQgV8",
  "key28": "5QbCxgaSod1fd8VNdveKtrcmG4ogyGyrBttDopaMHDCxnmDJmcSGivWox3qucGh3moo3nqd3jzmUtADXruV9VnLf",
  "key29": "yFjFYCu7x5N9edUMXd3XbM1tzYXtMqTk1RjjPcqmCZSu8WcSSbRhbi4HZUHFr4R1gTRM95P2V7zzD3YMcNafrLE",
  "key30": "3WGmw6Qw2bwuxJJ2JySmV8q5ateCTQic7Pc6gjkMsyQZQzzxUN7qYqyrowYNRg3eAqKxqHNfjPajDhJFnEVBSxTW",
  "key31": "2rjAZ9UEiS7SfEJnGzUoDqSsU3sPcsqYSMZzU9qa7N95sYREbasVzHdHpo6MVjhyZB99FNb2A28Y8gheEDiQYRsP",
  "key32": "45xvYvVf4ge1We7SrdXkkurtYiFXJk5ZQSKPo8JdNqpzaKs7NkVM81RG7jFXCWUmbnDXSs9DvJz34EuHwnuZD5f9",
  "key33": "2AFZsZqR2nqRFyvXC464KeeuNFu95qUNeFAYscZK51B6N7DvDFoYzQopn7761wNbqu2tSHtBKpYx8eCbCKtYc7aY",
  "key34": "2a2DEppYo8dZLfjQvRHu1XR3Ccthv284W2GwNeuSW5gL8UjcQmCmA7KmoyX1RABNsW25dmnypgkAC8uaX5foUPXf",
  "key35": "41aD8m81pK5AhxLN8ajLufTvjKm3SBbbrs5qyJxAHqapRGEb9Btd69gXsJmQUnDVSyuo58jUvK2S3UUfAc6QH5ds",
  "key36": "YB4EcayBbLvoEkig4jekr1Wdqws2nD1fUv6gECe9xU5pPfnqwqQzrWXsbnHFRaXrm8LbtavSjQ7KkdbsXA8D8kq",
  "key37": "2BzrsStftctvDk87MgDm1mJkGSjJG3VME7kauW8Dgd6T42wQGwyQwm4CJyEa93JD1wBB1VZaWDLvuqdZWwN5yeeJ",
  "key38": "cz2bA35C3gEJ8ARiF6i1cuZnRSrx1PgK9zthxQU2zj1WYGpiw3Brxd4SzpkwhHik7x8FmnCScdHBTpaPQWH5LFx",
  "key39": "5MRDisEmqUP5BjPLswMwaDWQ38bvRRCEEnUiqvb4ddXbUyk96fCkXar4QrTRxvBEwCV2nsF5VB9Lp7cDqUMFQwny",
  "key40": "EX4rU1NpxiU6eJhEN7dGkZQr52bVzL399w6RxmStahWdZatjZqcjXmaxigXCCiLX7VRxben6cjmBgyc6ANb4YtT",
  "key41": "2nzfe2KNa8bVdCgxSHKmDg4K38i9BgEJzMJZCLFDJJQeExs7dgu3tQ3dqno6HLDSDJEZjoaCwYLPW5r8eB4WanAC",
  "key42": "4DzMmQPwTBnkJJXF2myYQDWDbhxNCjjNz4iuGoHYfQ5WHrH7B6FTsY3Cjyfm9Dz9MDMia2jJ6oteUFoukML3zuF4",
  "key43": "5FsXXdPkE4TbiUJC51TLgPyGM4my5aU9onsGrbeoCiDTNDQ6CzG8MEM7pywQkrHXRwsSpmqJaS7PS5cvSrhT5LyF",
  "key44": "4maXZ43NzAEfm2N1G1dFg1VT3XkQmDBfsZru9Px6h94122exS2stpJVeZhsg7g476qrrtZncYsNTmgCLgWYz2LBE",
  "key45": "bVYVPNt8YTyYS9wkHS9bSLV6UY9fQFHH2DQv9sYmACabtnwdVL8CaTj4myNAcn3QLvvEYmCHjkT1gkY1xjB79WA",
  "key46": "CPsaxqFVEPwcZhjSCwvPh4RH1zD8HyviiyFCML6jEFbjtx7Du1uhx5yVBmQMer4bdvaiQ7Jbd9ZYfNzh5z7BkoR",
  "key47": "2o2xfqVu9PFzommujJTwuzyfaVaV83fXQpy9TU2FQhXBtzMM88CnGVXqz5ELR1aK6oWNPVLrpPkCWBca7fXktepb"
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
