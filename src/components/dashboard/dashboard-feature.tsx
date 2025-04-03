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
    "3zQRswPyCzpXY9jqd5535bDWxTKR9pYfXQqcLG9UgbMi1GNMbt9KifYg9hvrAa63aQ9fZQtajjpu2vXpyqw6UcMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22aV9SbQQxEfoB7Z4GypWkTACmZhVEMkLQyEYsQfVYtEerpDkTvRaW96YKw1usNfLW2P3rQHTwRYRdgXDDdHMX9Q",
  "key1": "2BDE9674gSDvJ9aV7Cmu24gE94GiZbu1ef7RxjZ9DFUsXfkDr4438HnFvYsNGa6ALdV4DzdgbfHA184UbVPwV5UA",
  "key2": "2FD5tbYaFTpnxQnthSN87DrJDKSpQBF1NjC5w14B1dwSb8eJEhtNKm2hg2bKFAqL6fkAuUAA4nApRtdKSG1M6mSR",
  "key3": "5UyQofdnToPT1u1pnM7TPPsJ3uuV4FDMdJpKxRK7c2ZabC7aRMWJyp3WVKzS9WumusnX9i5qosigbr8hPxAq9uDb",
  "key4": "3Tc2EbafPaJnaNH1Gtjg2a45ckXu1ExdzNik339ZuKCwRHA8SqNiLgWNeKZwGvimeF8U9vefxVbuPVuT54fTVkef",
  "key5": "5nmmN7nQzDR3B9JYt5VTjofVBJiWazJNLNd46GHfcsbqvgYup8VqsQnEeDvCJv8fX3Gt13LrpqBXtQNgJTVJ7PJ6",
  "key6": "jJQk5G7fTYCyaHU6VCppSMmWp8tgfNWTcfMapH4xZt8ZseELp2YPN2CCpDwn3Yj87FPCbNqmvNMiSPbUcjkiuxz",
  "key7": "9qTEhfXb5XK6zeAxRQLwHMBhovTM47At3TYh29dhZuTa73UpHGRQ84DUPHAEXzth64CmqZMCGPnzCgmzwggAs8N",
  "key8": "5U4UbB87tUhj7TW2yaCwaGuoXvmfyixWocxhT5HxqEEXWYrs6oziic8AJxv8yDUfhg2FuPGcmHr8YngHnUQ5AP2U",
  "key9": "3XRo9vgDen3GHFkq5oVaa2zNExMTvzJnSyTcuP4rJ2KjU44Rt4TCsju2JfEMvbopc9Ybqg6dpyH1YLiq9Yux1spc",
  "key10": "2xQN5QTBLacpuXL14TAefDV8cfBAZLDiBrRJKwTfdmC8bXjsmhhLefZ7y2guRS1uSshjyFWxyaPFPPuFkXaaiRSx",
  "key11": "44pfg9hHSiKVRXmvG4k17h4y2WLYyALu1mTZuH8s2LQ4ZD7k5T9hEw7WMey2xEZQXEZMaEfUXwFoA1HL37tDno4j",
  "key12": "2CGm24GWwFLXixp68go51Ppm8f4FRFSZ48nf6ao5tM6znCKtnGKgQmxdvFRJ4XRmUM3rZe8JC6nxvy5crcMKvwxE",
  "key13": "4fDHNWi2CCn49Kg5ys4Yn1yesQXK5sJFMyEJ1FjtgmACUAo9b5svvLYqaLk5a1w51yinx6oj8FqfpPaf311Ptenk",
  "key14": "5f66jPLtrgRGaLuPpENyNFDSzWTgaZEu5gRsmY9dpS3B2t9QJ1AVgr3jYzEidiP1xvkkK5fkrPfjsWq7ur29m8o7",
  "key15": "5VSqxveC4SBSTHJEBqNeWFZQjgtFAb5CzEPF3fuag1owdUnxCYZ53KxKS2Rdiv1DxjMyxpb5GFvF5iTr7WXFrhpR",
  "key16": "2uYSuN5X7TuGgaq9iB2jQH1dmhbSHwh9vqn3sicbNQRPfAFvaWBpNW9hvc97n7yeXYkswMo96ay6DBftMatmic2y",
  "key17": "2ua8SfZLQcTU7s6hGGPE9raHCmvTgDz8qr8REPKwZqoXhss2nkQYxh9EhkfVQQzcxQSqjXVadKCZimMV7A3XrKbu",
  "key18": "4MmgUDDKrTRDTyUKbsp87Gi8iSXsUqfmdS3q61sUSPTWFe1HuRGJBumM8FoDzL3sHjGgvPi6Fpp5TxDPYxAJwZJa",
  "key19": "3U7dadNTPuUjGZAJVZNSKjKU9dy462TDnQaci264mk4xmfTR8C8QbgG5ZXeQVybXgT2gRVhWAeCFqsvdq14aV9gU",
  "key20": "553RjVUzvzk9U7JW7bTZY1aghvWkuEL3pjwntThZaJzz6hEUm76ify4o7zyzwmLACcEVrBFwYZ15o4zoKYapqCR7",
  "key21": "5aAyorWEnJKgY1TtYcF5JJvnyx1LfXWLkW8KvmQCyf9qZ7ht4m5ajHMrF4643J7LyD71A2wkdSrJbdson8b8ZZZH",
  "key22": "4Cu6vU1vd7A5kMrCZ8xchjNUu6kKFaVq13ANDQSP1hybMoXo19QqGEfbnN9ensKPMccoiechWjA2rwtRKbhFmsFM",
  "key23": "5Nxn98WkwX83YHnWCKPqHh6YRkYJxDgsDYJ8KxWvpW9qnNhHPZy8ST4Q7sy5FHZp2bv5sRzb8gfkLFiYunAHCDcE",
  "key24": "4wX1y69bkeUXskH7DEd225ESzbM6V3oo8fKoHjaqqBgtFjE6c2rMXw6UDG7ynTTYZ6f7dwjBH15BBunz2CAjyBZu",
  "key25": "46aK6GpDvLaQWEVY9gquSrtraZ2C67R4mazJYYY3Y3y81SWUi6diLmLXiar5FHbe65chW3eKyCCKXbViJLYn5rUe",
  "key26": "38Cn7n3pHcsy3R45L96q7Vxt8eVohnkcsbqost6bE3YcWpwPGXcdEQHSL8HSxhZVGYaXPnQyWPyYyLCuxA4mrJSz",
  "key27": "55ZgLKgABe3gFoeSa5GmTCNHfguAksbmtbHVrKigAqZ3LDF4wvHW5GCa1Bser8KeUSn9EaVW8C7QVYsgPTic81HQ",
  "key28": "E6XSrT4LU18Nso86EnHPXRYrvNZvpgPPcnimivH6Xe5Nn9fLJBW2esEgX6MzcTBVCxM9ErxNUC73ftMD9QakkL4",
  "key29": "2zEZFABGY4NhggqJ2WbFZ7fCHreZtsw9qNmD3z1LaahFnT1ZESpytW91suazFzpgUFfinfstzr2qkFVAwMSvi3KF",
  "key30": "27DDLStSy6Bkh8QQyX1cZeSUbEL2cEEodMLgvji1WMEq4R72asdYxYQJwvDPLeqEKDm6RmfLY5iBMFhb7ZUChd4d",
  "key31": "5RZWbS7cgLUk11ViQYMLkWkCmkde7i91vQT9w5P9Ea5Cc5HPbDdfFYJ1ABZTVn2j6wsdpW1zKfUSShEPzdwxbvvt",
  "key32": "2AbWNynWrqTENRkKXmFep936fWusneqiKYXxhSrRAtMDSoqBgGHqe6HUUoQQnYK73kLkYJxKsExmTMitnpGWvX5R",
  "key33": "38chiDq1eFu3CcuGzSv995qe1PzXgArF8UPHGUvpFYDH9RyMbARDziMjmmgB6G4Jmt2Ly9JwK9ABKHUkCRxMWX2A",
  "key34": "65yZHu5i6tjpm9LAtdNmB7MguNcSJbpU5KrxH3bd2Ldiam3VFvmmbgLXg1wA5Tvvb1A6MUigyjCV7zhRmDWkTN4w",
  "key35": "654apSjPE7rrGnBsLiBPqQCrwRup3Fg9gYxrBKTx6fRQcJhCEp3T8uMCVKtenhiRJz9iouQBrApGZg5Pbzw9NdMd",
  "key36": "42BTdVTMpj2ZZFdrwgpvxwGBGnZtGVpXwapq7qnQ8bkAX1eesh4ffvnJgZBf3JmXWh1vddYpsVeGL55GMLv9YWPG",
  "key37": "2WVaDi9YZQc8BL1NpvqmHfjEif4pL4JASzV5rDn8qbLVJHD2WQxxPYq9yTFEvfHZ11HQKoWBdmjEJBXR7pCPnNpN",
  "key38": "45idnmmynGfyMep17hvcxBn4tq9VSb66YiL1ST76Xh3jZJ55K1n32DpqVpQhTu5g8RpZ8cB4asJdnk4KU5nWF2q5",
  "key39": "2Jp4UjvhiEB7JpB2W2mXeVNNSsCucby53SzLUWKBEcV9cUP2Q1czo94V1m2yrxmKq3V481xUbqDcghggnndqVMx",
  "key40": "QTTZruK4ghEpvpAwghjRvjdeWdBhxH6fjCS1n47KhHxgrRMWL29cgyqXkmmtiTPkbQC1rtd8S7sFtXw9A4Qfkgw",
  "key41": "K62LPiDPFqbSLtMnUqv1eW1xYRE1y8VhUxARxYWAeeSbeQD7be4GktHwyTGu5XSYsrhMmdqgWUmu5vsCVKnf8Fj",
  "key42": "4C23mxPf7Y1YB8v35Rfn1UgxRooGsRbTNT3VkT2iBn44zb63k6qdbJeYdTFAA57fNcDfrL7jHzpKkVphkipVWzH8",
  "key43": "BNYUg32mFYooh99rGnKGh8Kh2qxhtMpKNkNkpLDe6CTVxkiqGkyqenFDifGYeA6MKN4nMtUmHVZHHr54kYw8wrF",
  "key44": "ECg6otrvwpjf4W2CUyuRsQsyQsVCZXydxWKx3T5W7sa2B6tiZ9CtdcAsDFpFFq3aWAzncYQa3hDBvwvXbeUWJG1",
  "key45": "8mUyR4QzCUdDExDHrFTC28kxgiVEzq157gyFx1FcdURxbbSvQKnaNgzKFBHQbiktkoqbuDXWYPTtoMBUUsb7wE9",
  "key46": "5WvP2Q65SfcPxwTR5PinbeqQZxLX1Mz6DcE26sir77rjiR6Hwt5hYuybcrcaSHigzTJqkGMCo3tYvuiEjy7W9qme",
  "key47": "2dZMiSvpkEQGfWzxZGV8DovEK3zoSinkQsKAMgus2umTUcSFdGd4VmALc193PayvQNTJ5q7WPGbtUQUAvfSrQvnt",
  "key48": "3figQKZn87tqp9FUAQmLmR1WitNaPTUrMwNLts4JC6YtHCC8Mr78Uo9P964suUTRUpAa3T6TyY3TETMg8XeoC2gr"
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
