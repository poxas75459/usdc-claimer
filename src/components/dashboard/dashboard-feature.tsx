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
    "g9pZwnvv4rt7U7FXRtLVUvAEXS3H2dqFL9vNtvjPPTGWpSnh2KDA1UA9s6EpvoFhn1zojamQervBjqhiraGSVYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22jUXMALWmNLM7qNZiSPN1DVXsMT1MrKtAMoLMapomPMFCcCAYYWLaQaZwH9HPwBv7n7zmWg4smsP7JjPcTY8Muv",
  "key1": "4Jm3ewmNsjDJyH2G2buvirb1HXx2Xo1y5m24GzjYWKUYsEQWDVsu2LTjLJwqMTLjbC3ZetEjGhBVwym4suiBbf2m",
  "key2": "4TbuMZvVvKh25ji9PhXscndH4gVn8EMLggXuvZuyXwzUCe4yYhbmjV48tKeoVZimtse6dUKaTpKJJoG4js7qS5YM",
  "key3": "3sUAAyHCZMc9BvzQcid285HnDdWJbpP5qob6uSeiHu3EWZK9UAyphPokJ85p2DQE4wXSQSRc22WLgebh1QTtMDUL",
  "key4": "2AnWTFhqLhxRR1DPTRanfzMVaGoTJyziVEydQem7GPc2f9AaUvPgaSknX5mhiyBZQpWtgfwwQsn1F6WzmkojVm6q",
  "key5": "5zyb2s5qqNgrqZzEVureyrSusZDB94KBuXjnu5W5djrHHQdB6xtCZscxif6squVVowuMK5SXGi4pkkm9JnWL2wo7",
  "key6": "2g8UT7e3c7Yhj2w5a6XV7xusZBpGwsgvDcN5yaBcXpytsW98rBmEi1RW4tND9RDHyYbC6SXkLZotmtAvJ2wMGmxX",
  "key7": "5MNPugLzPz79emd6uJXe7VbVAKHtAtvjEnZqwuPdrbzNR29Jeq1ZysndYons2guXzMPf4S6kfQZz2XL17iJQh847",
  "key8": "2csazzxYwLWRSAFDeBGq8oXM4jRRXEPyQpNWcQpUrPJkmRmF4JVYE1fN3NC9Uzu6gk3f7TvafyH6s2Bx1LduU3Bj",
  "key9": "27DrqMGyc7EqfwiuJk8HGFdMTQzcuucs12E2hhE747aCJRAQsU5r9wv4ZE7iDjVKV3RqhpwnxVGh4jPRRJPiqcqU",
  "key10": "WgWs3GRJPbH9A4QXYGkGdTGAMuiXSyKh26YduVy9xRUJ64wyTZWSjHeJiUE8aEawKrCAuhsH6gtQ1xzaC8DB8Qb",
  "key11": "2ExKUF9iC9g6zMZie3C8cX2iKrJSHaJZdPS8caMCVuGwPmUY9FkTFe4AhudNvhfnSMgnjeWyxomuXuTjbVTM3Vpf",
  "key12": "2Krn6AbprswPQjhDjLXXAGGP2awwMRS9ns8evxsoSjB31qekYeJ6g7vjHzqxmc9LzakrM5sv3j7VdygbKJX3EDNm",
  "key13": "4VEGBUBuTL2cKJ4gA7PwWrqpoHFxgT2qHgJn4TpV6GaaK2DaRZQcwuvPo9W3f6ir2hHWx6VveQSsnciwJdWQSvet",
  "key14": "61ZwJ3AdEzCa4F7QwDxMRcpvs9yZj41UdxCPNUW1WPZo1yarbT2wRujQBtiBVRpbG6qQiPZbJa4UsbxkZdUUiCjQ",
  "key15": "3USeNYjiTyMvMAPLLGc2iCnegFAwb5r69rNJUiw61D8Pi2ujB9km8K6JEx2AjoEtou9LQYwekDmj8speMfRim5sd",
  "key16": "62R3VQXox7Fsx2LMmrEpMkVjN4EFnuWbMUHkMrVHKN5phyP2hYC2JVF5eegzNYm98ShvAEWMb4MD9LVoYKhfnsRm",
  "key17": "4GQkZhNqcA3xcMaC4bYaPLdLX86Mnq99VKcDbVhoBU5vwYec2MqgPZR3mvcHmpGT84QKzLfbAaiAhTqrGJ8gRxih",
  "key18": "3N6nvM4bA3W36b2krhCF2vret88EMWHkkzBboouK58eAzWFF2TwetfSwHWytb8UaDN2MouhxriT6pZmPh2KHwYRt",
  "key19": "3rwYiGxddmHjfXJ9nfB8ghGe1JmfeZVGsSVvUaqqTNGZM88XsRT2MoD6K62iRowu7WMds72gi9cVUUrRNXQapipa",
  "key20": "4AEpqzN2EzA54BKpc19m2NtASbcvj8mZ1uQERmBVNs2Koc3UnHErBhRdg44x3PACDxTmv9bYYevyycDRGDSH8KTX",
  "key21": "3uJgZ27QfEZxXbF7gh8dWDSxFHTFJENzB7B3qfX3QsovZ9hgVsVrWm5C8D7mCxvC2gfcYPFEnmQjC78ZXFoLiuc4",
  "key22": "3SAWEcyjA7bW8TtLmnMb91xgg49dBnnB6MpX7uGv4wJrYk8n6owXow4HQceJg2XrigZaBY8MecQd71cxpqkudqdt",
  "key23": "5khccyNw1fqoTxkv3srMdEogNP8ZC1Z9Qes7w2PbPYszcWHj9KGDFmJCJAhr2XWFrq7qFLMHDCmhqrf6LWuPDsFx",
  "key24": "67X3aTZvzt7jVnNnQHt7jRdQLkA8xuBvsbGf9etHiFfpwoLKs5w5gShWp25KsfnPr9dGNCsFP8of2VVuhxkDqTjW",
  "key25": "4dztgKTpbBTNFj7twM9jGBhaRYsQ1kBWwEEUQaD6mzj3iwAXmxDSxEvxLeGiVN6DzPpYh6UhW9ujdrJQqZ8PaPPi",
  "key26": "3WYqwzPSa8jMt7ZtQbeuiHHBmefmdW13qGoLcfnMREmdefyR1pkK8QJXyFQjrYCY2Xp9LTVDfP3ZS5tSXVksTDUs",
  "key27": "9nANAjL9hiayRvUkNHnthP6a11thZjrpGBGNvC4b3K2mcQWZjVJ1T8iNqukFV2fTNrpfRasgG9AMZzUmSiTL52i",
  "key28": "4rVZ2kVQsvj1oKzyjT6H8ZiMqHBLkaZ7KoFR38FMxTNk4NuBcriYiP56x8j9jSuv3wFvp8dQMPtMvCuAAivLQPd3",
  "key29": "4x78pXmo23y578HTTkLK6NxYBkonLi4r2e93DexjWzDhpZEsKMY8GTtkxFFPVsonwLRbGf38pKTgvGxLrXq9VzFc",
  "key30": "4D3by5D1Qxp8rKMd8YkGa1YEtVNK8JEXnYEtYRZGw23MB7MYX6LZCF8HS8rCAN9xZDv94UmvQiBiHvJLkMUqH5Rp",
  "key31": "7HMa8kaEuPe83bkPYSZnVEP6TQ6f69KR7Lc7LrTStc6iw5fu9rpM5iJujDPdsU3PxFEx8cqmf9PQGMxfKTHqWQo",
  "key32": "27iNkbq9NabN2uDxvPCFN2k9Dv6BsXQuoZM2iWkWs7wPPu4YwvVRvvjWeCUiZfhiZSMMWyDP1ip5BEaH9UC5Mj5i",
  "key33": "5jN1x5C74T73ovYnAL42Bfp5or6vsoLsrRZkBafsp4QLVR9kiei5oDvgRP4Vg9MS92BB8ef29A1yv9cE4NsBkSFG",
  "key34": "5z1mHh6J6ENuW4xiXhwMRN63H1XxsKhyaTErfuHrYboNaz4xkknUS9TYTe1caSRJvtWBj5AxVAT9dNGDnv4JjWsi",
  "key35": "nmyCnQdyLEms63o3PJYaeo7C9fUjdix3tQ4Mi7pbqaqnUykLWVPqtkNzgAdtDrPzyjJf37Ye3YtbnrtVWjvie4X"
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
