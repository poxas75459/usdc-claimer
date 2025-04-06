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
    "3DW73KtrGkhBTo1TMhMCRTsy1xzJxoC3tbTi74WXhKC3ScyAHthQR3ARKSX99Nj4LLVsMH7esXw6Lh9TbfQDBNrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61RZrMPJqebj5Jxps6uuNVAEcuC5JUsSynsgmLJJqk8UpH8XVmkYSkDBHK29RPvwp5vAyJjxF2xNaAhLZB4VGEkE",
  "key1": "2ZWRwsomnwSFBRcJA96Yk4zhqFofyUftmLnvJmT3iUXNUa5JGh1HgE8kgyDKXUqVtexiXaxQN5z7hKi83toMm1NZ",
  "key2": "4Pg9U1ukAZqEsQbUELcTEe54WxxWSomQRHBooxT1MZqvQFmgEMkoS6KBhiQYZrYFM7YnUJYmMoCNCaz8aho6BaCx",
  "key3": "5GkjnpePvwwsXVAnc3r4XyfWom47qyYZoXXzSxH9DxKHJWoWpzJiaWU16qrjHe6VVsMbdC7vCnLgRMuAcDVVBaZJ",
  "key4": "4UMLU68nG8kDPunG7v3vtrg6WR9m3gdA8Y57cxENaDR1Dw1B4xbRoGZQV3KPbA6BDS43s2Ss5mAgGHGSmLD6fGwn",
  "key5": "Ks9YVRyZkayXCfbLtayrKHxuu3jw7UgSTsAcAErjvpYjw2mCN8nRRpWoMYBhZiDNmWoCUAcDs44MC2f11Jm3MfF",
  "key6": "LPr82hZXEbY7aZWBW44PzA8b4LunYa8xjdJq1yr5DzwkwtZQXZ4btyWvnZxNxUqCMWBQWBX1qGfR8F4zsZvQchf",
  "key7": "4tEbaXqFVr6NLUtzdysoo8aRPX25KLoZGEzPgDGT139DYrLA8m6iMB6XJHo3TePKhtGxi63TyTE8N88QnLHsALX2",
  "key8": "46uYkzTW7imXNybiDxBYXQi2RSH3x8YVnB8dLXwZcAKRyKu8EXNQCBjqXMAUk5jgk8CB9mN1QpQxquPiyNV3XPtH",
  "key9": "3z5KkLnDNHQotcPFXfqxJobzxnGYWek5HcYnpumXXMyreU9rx4WdtEeYFtPbqMoeRhZg29MrGFdnYCHg9GPtY4J5",
  "key10": "4hx5wpC5LxYi14QwtWrXRTDubYQHtjxXbMQoQYDtYmirKC9hwHXpFkEQDQ3NHhZG8T2BgE85nUKGaS1V5UrAssSP",
  "key11": "5YtMtkbewxkgDcogyvB5Hru3ag3cTMdsdgt7BCev4TuoKAjY67Yuzq7kVgUdLYjpABKuRVirji1UB9BnaDnPaEA1",
  "key12": "P3KfkwjZTpxEZvkzFXyzXiijdr2jwjfQn9Kuk1rNCFsND3tmqhGGS7kMnPHY9AyD1bUsdgEb38HMoUMRyUVaDDB",
  "key13": "3uFonTitXSTRY2UHQxBg1d3QM9LvbwnnFK1FzRaTwhxckkmbXmiFN64PHcLrkfGBnNHP6TCHFL8rZ38CNrzERymx",
  "key14": "2opfdG79GTRp51KsJsCpkYP4b3DgYJEbDBpPMmdks7S7wqGsgAj7mHbiJRLa48V7NqWLnHj1QM1tTFykyWykA6bs",
  "key15": "vu5odqk1bGYrpzTHgM91M27zmUwYa2cy1avgCVAf6mxWxZRXeX45c1HVMvkjHJbFih5Em31QbDdFZH64gLLxcm4",
  "key16": "3N37TdGurVvE8N32hwbD27qVswLasutt9nShQ4DcyaP48e6FXa8v1NbMJhNHJPS4DUCpscAcKDDTmQupkepdCNCA",
  "key17": "4fG1JfqW3AKu3omTFav3a5L531CCd7XfwzZCyqstwruGE3GQmhLniHPKysGtg6kmhbi3ERni5MFy5iNQMF8T3ksF",
  "key18": "3PuVcfo8jG1CSz6qmAwDx3dAuWkyWwj6uqkFm2NZrowvQgdV7ekMxAxBRXqZKucgCtb7B2jdnChkh36gyfbboZJ6",
  "key19": "3CDC6umwPNQGXb1PaYf1d73yKjPf4vMTGQZzm6FSsoPN8bkT8XiyFKSnuTmLQ4Hr7wFaVh7p6dJG7UfJMVu9sgRT",
  "key20": "FuvzUqZz1Hbc3vaRUeyoE4RXAw4w62oCwGZBGaFgb18xqXdRdQxXDM7ZxqznUXKt2Xn2TngNwBYmHq9AwB8ufv7",
  "key21": "6ccDUivmtghr7F2puFAnTugXGoaVdRsGv4BxU4eUZxLQXxEr4CEcp3YTyzXVHZLHhgDHn8AbX17fb4rKQMzAiiC",
  "key22": "Bb7iKu31xmhGzPpfNNXKEbXRqarFQFueRGSG2kkPD5o244wY7d1ftmjWF8WBSUBpyvFytf9NvJFktPePN3cjx3Z",
  "key23": "4DzkRuMyddotJB6fFUQj3LELjpbEPmUhUCUbT61K6oEBdt63dzejiBjkQM3hXFS8aaMYgNepZPUs96QHbmPxhsxp",
  "key24": "4EjvswAqujkFuRjeBsJ4DLPFuHWX6CLtQujyuK9XwX1AmS8n2o3GpTVJszhLsFC4CpRCGF57koNr5U4UwbTCQujP",
  "key25": "4FYdQ2xGbkf2UkAZj95hoV2PHea4ELka9YLFoksBrorMkXLGLp5VJQMh8JpsfrssEJACdxdGp5tJmyNaD4msXvk",
  "key26": "5ranAjVM7EDnGpJUCYqTGX9CzLFm95Ez7QXraWKM6FhMFuCwBwFdqGpRg9XWewm4VUBgWRmHrxezWnBf9mWarTzs",
  "key27": "5kXDJVPyUWjnUaUxBUeZwxxiwVERNwebWUVQ1KHvRXCpx6yUfTzRb57cGPhek87ZVpNNuHei2RpNmqZVw6Ee6nD5",
  "key28": "2HNtzoJ5i7CbjDkiDUoHyjYtmnDw93QiHNvSosBtinrncLPTixrkwpGHMAPV6LNKXgoaa5QDknjtgPhowWDshipF",
  "key29": "wHrnEti2uvdZPqeQw8pexaxfmyTJ4AuEvVivACiBvnYLNydKWYaHXhDztRpApYgdJsxA28kovVtYeZVFffQ9hMy",
  "key30": "7Nr39knNkqu7h6XQANCkfWAAdYJkMZWcF8YgD79zh3eRWPCEsAbnQo87mgo78VVfh2XCqRN9UCniyVzCdUq9boL",
  "key31": "5VZK6waSTf78ctbwypGHr1GfK1jPmsEFGtmwRuNaBRtbV2AunQrDCsvbVbozWd8GmmUMjNq34YGySm3ePZAamx1j",
  "key32": "25h1FrVkvvawCv2HEs826H4yD2VmhvmwkCQvyAaQKRsJLGvUqQxW4XBFZQ6ms376LSAefChueMUVw4EbYH9Dkkju",
  "key33": "5Jm3xdU7862YEC9oKwBs83MT3jymdnmqwpvMAYy5H6uybd1hr6L6nadkKi8KTKt4sT3v7xjp7VXWmjeoDEgtzvL1"
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
