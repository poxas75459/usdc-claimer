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
    "3Yk4WNUP9j5r5gZMwiT4rv97nvsPt6j3fFKV6wPqJwxASfcjxZcHb45bJCjMhfn4wvd3kzEn6AXo6t2f2qSc8dM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LZAW2FRF6LfpBzFhAz1kdBdHGjNpUP8x3npJ8E8meNoQXo7RtpBPeCehd7xMEZpif5W7m2gZRrmnMH6W1w353jF",
  "key1": "4pZyJPjb9DkgGotFHqKif1qYfGZEngMVtnAZd8oRtYXEUwE7Vi17ukayJXED3dZqFNHwBZfng2w8q9nAs3xkNZtk",
  "key2": "A9bGqknrvqEmfLyAQ5kBx5Cnxrk2aeEV4uScLdwUXiyst1N5D5bngULRNBJwm8Zy1SVpxQrrQQZf98w5nHJqhBK",
  "key3": "Aun77GAQXGsV888ZN8X6bYgnvG3uH6SuDj9URhzoZBk6MBVVbwLTigs4TkpLwsygTiM151bNboPCjFsdsqxoeqq",
  "key4": "5otpDEPoSjRNY56SEv5Ft7qavKuA7a3viKGz14F6HQjn1nX5GwtySG26iEDjhtm3oEDLgT84xsSoa7mwWPB4kNFc",
  "key5": "2C5y6LTzx9ZSzbbwffBy6nGVXwHPbdHp7phjrKoyu3WJomPTwKTANHdyfnRa3BVEi96TWgRivfmBmipF1wqZCocx",
  "key6": "5NSBr6dwWQkc9KMxk4jfdLZEPbHK84ap2d8VvAh4YLeUAP13vfuc2k2dD6HvJT72CVUXgRg9KsqhixfUJRXwCY6K",
  "key7": "47PQxXHmDNuKTesNEUJhiGEqkTX3BM9D4fknWK46U83M74EwjRQcYFZvJRQ6vuVRHqMnL31Xe7xZTCkDcxp9BqWB",
  "key8": "2ZAdLnaBRFGFFwhRwPr4y4M4JP9o9tfYjegTJSpy6FinKuzkZKjfNXrUNFj6NUozP7UqJZdatsddTtTkpLohqt5A",
  "key9": "zhXJKdcHi8WWELcfMWrsWid1PMtJmiYXH5Bf2VzoaUjdoUQWmaAinFhxTU83ihK7J8Ji1fQUQQ3NERz7G5isrZF",
  "key10": "3nLEt2H6dTm1ANTPaMz95H3XB1b4Lpgf3ZaHBZyKq2xEwdMNy7qy6SLy8UDJkoB7uX58XFBK5hMK6zoHFyS2FbMb",
  "key11": "2MWR61xU2ZMjfakSBhYh3cTWrFFax55ifi4hQ19a8UU1Bs2YEJiPADT452ewFhygbBGBmKfoZPur3vW64vpDbH8x",
  "key12": "4cDW19NEPNGoNPCwdh2C1imHcbf69Y2dtoN73jNh5MAdau98xmAP7MsTKPArkbzUjbETzKUrZUhQHchRHFUPpXpG",
  "key13": "38xpYTn69mWqWnxyEp9CDrvMxQ3MQa22bLbQgUHvfd5BVGhuqfuJAe8UBRXHTGTQ5DL179Doy3n7gPnGuAYv3v8S",
  "key14": "3tptJmryQ7cxZ58pmYVSeeAQB62WGaVnAmQAUHPnZP9YTPWbyAVziHZhsc8xdiGGEPTdJBvhKq4sPjdCDftJKGwM",
  "key15": "63TFqDpCDPcpacFD1TEEiFfdwu9q7vEhj65y4RC7aVULJnp2yxSfDcqr2r9c2KJzDh6C6BWKTTCJEhfwdUhHEzRQ",
  "key16": "22fTfo1cKknRtt21ak2T1sF3N8LYokBNYxvLCgrVwf6Kxt3CA9dPYgdDwEq29tWqwdpKLqNMmwzDnpPHDhh4Z9Qd",
  "key17": "3pNSEdYmMRPNemxvEWvtAz7tNNM5vAqu8jT16tiV1CY7NQy5BUaPm2A8TSKB9DYMJL2AZM5o4AmKDk3jrNvdrkQY",
  "key18": "48zzqvk1pnPLNF5YfLj6GMLmTLRJ4SBnCbAYQHedFW7GJzJv8dXoWhGWu5Jhm5N9EjUFLt7vzFWx5HuAQUozHhPA",
  "key19": "5LNYAYqBvZBRkjAgPNKDf5DLWcrDwcmK8JmH51g45p8EhEh5bbrRg7ADPhns4B5TFZNCCdLw5R5ueSorh37yX5DP",
  "key20": "2vaa3SdfKVHtJA89bp6FVFczDYesGRcFE2AkpCum1vsTqZRgnb6dc2HEqMQksySPWU1QbKg47P3RKfdG4zakoJAT",
  "key21": "4suRYS8VnjQTECr6eWtsbLGXY9qNxiYqcsMXwo3UhVcTJa1HhdDycQENVfZ59FtNv9M3LcuPxbsxdMmCwB2ezZaf",
  "key22": "5kUpKSLg9Q75HXQexBumAtdSxdbcWtY6HBJ9s56L9k6R1hhR47Um4YdDT4veWLyAY1j61RRLm3TXHDNEzirqL2qH",
  "key23": "5U5sGQm2sdCu9XyGU2dnkcUtQKojfqyTMSQTaBgV6Zb3hqXEm8sZmL2D2suNw1N56RpjCbes8nXZcBTV7chpwAjh",
  "key24": "427azDMKMQbwqTjhVFw7ae5vuoskndP4JUPm6xF99m4vLNFnEhLGgUhNFBpWtQG2h3DxkzJmY935rMcSnX9pinyM",
  "key25": "4vFANmKtnXx7e1obwiyn6LR8W24sfy8tBcmg8Ww6g4EPztY39ZBkKD5dfgBUi8KdSmrSRceokuE1vxCrcBsWS6wJ",
  "key26": "4NamXYa9HQ1kdvZsVLHbjAiZv5zPSbecefuGpUXEuhbRbGy8MZix1CVmKtCNkYo7ZLsxYa3adUPA1miU9iv6zPfU",
  "key27": "bGYPi3K2Ci3oVi6dRSUW7ioPzxmtAPuhUxVYU4vzJFD1a4F4hZuLMRYoAD7PdXMNGPHCeYs88M9ixiJ9DKiqSV3",
  "key28": "2FMW6DNKrJfCri2caVLTKz5XbdVa8Dh2eDEqAFVFQDws7nAeAYWH3DMFijHjqVk3FLqPiQs2Vwty9kpxUHKdCbzc",
  "key29": "3QwfFGMGemF9vE6G9TyxRpFsUsp8VViwbw4qxar8yimzAGffowvXVnCAhVxyoU4CBxnnrgUCnuDzQhESipXRGMyP",
  "key30": "5JyJgyh9uZdhiRvBPvH8nocMYzx75WhN7eXYbhxffLvDLeWYdgCuB3BRrhKsh9w6uFKCvrJ5vKbBdSYsiJNiPV7L",
  "key31": "4Kwse43XwPcikjWyDxgWaXiK6Jz2NJ45nsFRsBpbTRXuJJJparkqCKjbHwKjwkUsuVAbZbZcZb1nm8xL6gvJRqYW",
  "key32": "4XsMCsjFvpjiL4pmyvQYmAJFNtmXZBjS2a8QxwLz5xjqmY4Tij9pkCjkmXwow2Gd2daz2MEpeBaPbeAWQamgM4AE"
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
