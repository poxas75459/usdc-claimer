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
    "4TZFFVrfD55aE1oTwFMkUGK72ah8fTHa34z17xnmyHsZHGTXnuDgKWL6vn27HYLVafcvVhhB7WsgjnkSFUxUTTRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LoErQzAHRvLLX8MaJ491mnQMkksQJ8QrtaQJ4J2Q3zN9uxeNv8Etgaof5Jnwpu8sXD2MrYGFRgV9tag8gUBc3h7",
  "key1": "4S5nDmyxa61ZPVr3oX7svQ5tCcFjBDzvAgobhTtUFNMr4NZRU1e5TkPuamTUYTqdr394TW4ZvzyvYuNuBU92VE44",
  "key2": "3QBN5RprVwa8gBiCXdAasV3dKzeNFPQkv41E5CmCbejJjxyvDkub15pAeUA6BooQrVAt6B3qGGGc92Cxk7cJdsQD",
  "key3": "3srxztRpRZKiR25g2o8kevXAn7Zpnh4r7akMdMjiuU7gSzsbzZkhRNNWj3HLJ2ygR7CWJPd2uKhPDWUKKNjm1n6Q",
  "key4": "52NgxCV3iyYRsTJgJonhUnbv93qQFktjQ8zxEq2s4eYZQ7oz8db3thQBgGGTsBbu7mCJPjTGnZpXA7DcPs4DYeK3",
  "key5": "4GFcD5nK7PHGEBkeCLJ9tryfyUfEveAHQC8RzVXUdc9Hst6mZsZw8X3jQSDvmuNJRv2vzdHdWKfrCKTk8BgF1tt4",
  "key6": "33JsUKqya1iFKU4s3p4bmBPTMx9WhNY2H4SFMdRVb5Cnq8oBymGiE3pkobDTS9CyyXxWmJzpZPKnNcsM9GN7M6pC",
  "key7": "2vsX2ocvgosrhsDNu68K4CbG4xMAjEtMDzMenAcmdN9i9DbJzyaehaEAR9YouHTkZSEUU9vR9pzcW4bMUTemcgYX",
  "key8": "2kvx3o7bo6D5AVeeUbZ72GHLC5eFtHr2qpW9mPu8roYuPVvsETYMxu5cFjwGYYRMKurvSvEXAnS8Z9DERQZ68YeY",
  "key9": "2miqgRYnex6nngUyrfm3GbK7rGm9tqSTbDPgvPE6heoZUjZ9nK3JuHC7gDBiQgvidj7SW222QZpbMrReNuDYtnRJ",
  "key10": "3oQFhirZM6PSHJSjf6DdseCVvJYqUaXTEW2MH712KAC5K9YfAecjozucuh7u9xEsMw5x2cFrS7hcSWCHsfz6iho4",
  "key11": "3chehd4KjzB938deDztkYCnYjW9SV1LpYwdF3GWywvLUcoVVv8AzUvnCm25G815QVjYwQ1QG18FCC757vCdKUVBk",
  "key12": "5N4aLyVPQDxnW7UPfA898hP4UXwNf6WyHTgcghHpL6FXmtqKgAYBbniDrzAy6s9Epy8cbmYw8YAQhn4UVJN8uBcy",
  "key13": "16BNq8PD2bLwPv7vQ5yENmTTGmCt4JBMNm1vkDsauuyy5KXJp2D1GsrVVRqYgZtKmkCK9vTimoMykp7YYE8BzpG",
  "key14": "2ULVQvuPH6KfRvcVZZdPNcKxrZZSVyLSmFkYieKaYWwK9X5DFmgmuqAbjkfR53ezAawmDjVZbxfeJ5rzjfaAfir",
  "key15": "Xc532XisKfJfosSKbEbfkGseDNfrNBeM5mDfT657kUQ81pNc3SJVZrELbAUBFRC4QNNXzM4aFZDS5Pr4W2vT7CU",
  "key16": "5rwLtyw1FLLuWSBwRZwdijHu6G3ZP21644za4o4RticKQjnNrFMmjiefFrrU62uMzMDneX1Z5vQ4WTh1tKvWhBx6",
  "key17": "55PtAoRj6R28v2KXM51pgh6o1HGqq7Aei17Z7fyKtKhnH1q8kjjmNQ2bV2KPY4GW5L1jyTmRPETRKexZn7NXyzmA",
  "key18": "kkZe8ksXGbaJz9z3UiwsiTTMo1GTJxdh1vwQuEXff9SSKgMyiQaNQYkeMoqtmJsqi6wWdGYGF65XjVa8aFKS2vi",
  "key19": "31dtQWoGZSoyRQyKJutnNX5wmDCP6LpE1UsZfecZoMMSddCyAwmvt8jRJ7eAb9S5YYArzn5uxHbqN3iyRFtMD7e",
  "key20": "2iYH8bdtP3m5Nt45STny6cZXMt2Y2B8Dq8YaYBSen5FRG1xi8FPGCYuxvQYD5VF8oZS4HfMdfGd35FDBcooibU4w",
  "key21": "5vFoU4MusZy1JMSDT8BbZyn4NZAQMEh4RejZvVksCP1DfYLAUkJAETqxR9bFS5TiNiQQvDvodqrSBK9FmJShXr9",
  "key22": "3ov51Fyw4U6GP9AQUwuzDUmVp1BEhxWjH7QdS4rpF8h1xdrUzuNe2SekEWsbfSM9kTCzapfYvgJGsiMCPvv2bduV",
  "key23": "3FhUGryBWymtLgm2EobtDWi8bbG7oY9edofd55iKRzGzxMt83F7J6z6CVQ5dbd7s4wttDpQsA6zRxSbpZ7YSoxGL",
  "key24": "2gCaV8A9P8FoMVyGU113nmVsajGYW2rV736nryJX6s8PQuvaDxwfHYNrTTxo91Mx3FQzBRwjdq7nAFG47YZqzzNL",
  "key25": "3C5vHsztGvTMSt8CRMjukJVJfYrBZ2afdMTvoFnGDCmw1dUx5PmgSV8TE7v1dKSSqZqBtFym9roLHAtF8ZkHWaoJ",
  "key26": "45aJp3tTohFd7h3Jr6QySkT7McwvaCcuLiqq2rm5x5k3TAEC7XMFky4aCSbndNBHjA7L6yBD9xnZ5MQPamrXMVY",
  "key27": "29VfU9QueTLjP6F7yW6Cz5MXtLgKmdjAuV5QBagS1VjMFYwKHb2hJqh1SyUrqtMEoxW8xmd6unHpJyDa4MtdakBT",
  "key28": "638pHMu3eJ4n5L45Ji1pp2dNZwt9CQjZh7CupYdXEGdCaBNKR1Pkr6kUY4FmXPNSwF4y4RGj98e3X2cznAGqn1LK",
  "key29": "4mg4w3gnsfsXnjcHGu8nFw8v187xr5tBpdm7U97FikXmyxk8vRuZYnoYf7P49D4dZXEVmgZCHWMvjKt8iHXCTwjj",
  "key30": "MANmSjeq8PtpkRZgSwmPRzaZ2esUy6zUpb7vmUS4TTJRcRzENmmesBrsqfDVYXy7XGejxAtuso6oiRvNsqz5XmC",
  "key31": "54hdUZ8r8ULGdWZdf7fBMiWc9kgJWEoLE9NXRCVj6Xe7AskzpcJGF3cRR2BXNM1Bn7KG5n7vHLkGZMwvNazm1uM7",
  "key32": "3fWXcZ2GnJzXZHevz2Hyv8rML7NBtduJ6QW8cAZT2HNyesgd21sLuCDZwK3vj8WSn3K6dnnGGiv54Q3qYLoepZct",
  "key33": "UZt34mkdb4RCD32CrrrvDoxEqxyMZq5rqEquZcoBHa96MjEUWjneM6k4sKdphKMFF98sabQyQbArB9meNoWaP6a",
  "key34": "4jE2vEJtbWGR9iD8vDbBuSDpQdWsTiLht71uALRpN8znu4NGhktZx9YJda6re4BtzgGcX2S99ar19CH4ymGLBFF4",
  "key35": "3f4UQ8R4HYsQ8atLtf2mvvkdWqKpTZ8JbHFpd7y2oLn39bQrc46BU4sLZLNaGzAPeCi6NrzMs3VLzUPbuGRRkxg",
  "key36": "3y1SRfhwmgVQFeUnXVSWVfmWXZRtnP7prYGbLgFu5HmvSp6xXHziP2tFDwSxMhfRqaGG7sk7NmFVXmij7WRTmvgD",
  "key37": "5sg7KBNotYCmXA5aWdcitqXz4sfttd28JDg3LPs8m1rTSZG9hDeW2DTCa4eneDxjjwggtawaMSUBYLry6haoaq7G",
  "key38": "62eyhNZo37ywiMgtstS6X57pNH9yLE6CzLgd2TTZBKJ83E8ykgwoidu64TuP8xRT7TKK1vW6tddPFYp7KSMJPMPg",
  "key39": "4aTXUyvn9r1TAuRU7zCzmdwe4KdBgGP6jjRJ3Rt5occNsfp4uALiZ68th9qTg4Et6Yt1LDonV8BarNNnoPU3eUgz",
  "key40": "dtDze1911f4MVeF9SfKt4jnTz2Jy4skwx337uHkSvFjBszXJZ65FzccQnS5u6rzVVxh95Cxw9ETspw245mra8Hr"
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
