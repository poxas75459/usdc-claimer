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
    "2zeiY4x8sGqkx6SAmNhTsC9zv7DCcSqWrr9t1nN8o6zbcMhVpX5DWSw5T8zozgYN42XXhyN4BvqUEMSLPYzdLSVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tX324rC2ymvrRwDBa4KNsenTP2Rjp9XMfsp7cTtxGxbWCmJLid7WpohHZzVgjypHHbE8sujr1aSPxw3n5Y2Jc3o",
  "key1": "49TBjkmTpPfM9tNwTDPzGtY2A5aKYB35XJw7hxgCjinbK2kV136H3T4NK9GErQit2mMaiABwAcV2xS9nE29q3U28",
  "key2": "3v3xM6YeQ5ikXVbXkwA4U8fYQ7LT7EmiH64YWnA3HUwF1bbF9SHFCHXX69U2pv6Qx17EUMhXoPqKXGbLKQX49E3b",
  "key3": "4pTomxGZRdsCGW3EhpKXxyALF3yfndwro28V6XurbF4mhAhLWzK46BpUVNfHDGWJij8GRwZHsXWkJL1qkNReJT7W",
  "key4": "dbfTGTjiPy6TUdcaXd57p4rGcTfQQmc8FKrndCePBKJG28B4xu45tDwaXF4XUVe2bALGdSnKjkGs9ddjXe8YeX2",
  "key5": "2pHT7ZLLEYcpk9TWLh9KJq5DYWVf5LLDTfJBUcAVuB8EzoP2cRZLgDSjtXMZrz6gaidSM3ViZqmccDmLDLXJ9Tsp",
  "key6": "4GoxLaTAjmvFykaSke6xCr1y6tGonKNmqxAcL4diQDkspZkJjgNNrCbGRS8YLmMheBS44rD3k5s8GgkqiBSGSv6C",
  "key7": "5YuauGxXZqAWMtup6h5UhvRFLeNH8XfSVUZoeynkVHFaPNuFd494kMUQvyKbhPovgGPVBCqoyQY16hm9qjU57rcp",
  "key8": "4wT9Xf4A54cp2c9GeDsUk5ynsi6gNVGA1V1E6s4fHHcGSgz7Jhzj7rsMTzrNnyYFkMaWWYRSRNbvJipYrkBScYP1",
  "key9": "53mb7TzzLQ5qAqXooH7ProRAyWdD6sCAg3f64Q5Dqo7GWjEzEfaGEpr2PJXn4vcNEKP3okoagG72wZowqJyqyvV8",
  "key10": "5wng7ix2dcQukyusCrMZZWMiESJzRjDsT7Jv8KDk9HicEMsePNEaj2er5KsNFGfhje4FDdNLniYUFm4QY97L18uE",
  "key11": "2pqjfyevxtegwa91J8Eow4QdtkY1FF8mecYFAWw5LMPGiD79rwSJdw9dpqHhPbMRNNEWxsUhNVSYCxxJjcEASew7",
  "key12": "3SaHppPn2aq2UpnE3S3hYkydbduaUNUA9tD1BiAqtb3BrqWSqk6FmDGNfQ47FaZLS8VFJHXneTB2MJ93a8vRLYyZ",
  "key13": "5aQpXaWZTpwPnxo2n5sPRg3BD4aYQGR6bGi8VP2QGVeqBaBNJ6ze4yg3XrewZ9YFALFxyBYqD8bYNVfqenisgqnG",
  "key14": "3NKNHZptJretBi7URpynZ78P4ocS35uDefSgdYsTp3uFDu6xGZLDNf5V8Q31LeXSJSVh5L9Zx2eX9DBGTDgsdNM4",
  "key15": "9wXMeEdc12DLEXP8JcDXYC2V5Dv9mFJdNvsm88ceowbQvER1JoRrC5NvQNdKS8efDNKosZMLhadnt4jA68JHoMm",
  "key16": "3ygamXwVShj7cMRpZWt85ovh3Z9Kdios7XAjvy3oww4PjnDHzcug7cnF7f24AFTqdwKYMzDQrv1sV3YJLZzMMXzN",
  "key17": "KDfAVE7yiYf6Ar2jQJ7hXteCWdjcUoAff3c3HyhQQ2fvggY7DrKUs12ooZhvoExJx22Vks1BDwLd11FZ7GM3pfr",
  "key18": "X3vfjMqRxzo9MYSbf3SkFAhN2HMVqMPCe5sSYda9nc7HSLDfknQr2g6DiYzjZWZihyztdkN4CHmWZq2ESm8LYUk",
  "key19": "4yCXff2XvFycJezARFfyY3pVUHsa4df2VVYVZGPNtH7mFxiGotzuLexGjt3xeRQvWyGRQgkJGCjLNY32tqiNW43K",
  "key20": "63Zn3LL6w518iJAkUFxJyQFEJw4ifgFReZ4tGcE16WPnsw75pUt7UQAUjnSdih1V5JDQEj2jhnMgyQqP1WMVnRFW",
  "key21": "4JhSvzWpTKk9ntct66wzJRKb67hbf61jc2smcw9L3nMzAJYpTbbE67nnLQ4sR6q9sfx1EBLQBAuUZ7y3TXuroD33",
  "key22": "56PftMCtJfwhNtteVZbHTSv9jQofWakoSAek2sT3J7BhxUtPznKUckTB3no5pYSEePa2vRfoayx8qA9rzxxXNX4D",
  "key23": "4x7mCbXPWW9TMgBHP1gGnSir3qMKfF1zycqZVUaPdXvHRdPYmMZosLBXA4zzeKaAxXKzNMafMDbHn5RQyDkSJiYg",
  "key24": "34i7taxBPL8sb6sNv7qYfTejrupWBVfyP5CbFHB4d3meeWPoBaM5AEirN67HDy5K4ht5LAYnXSAfakqHobi9nETg",
  "key25": "4rmqocLyzPPsGirJoTSqWNC25WPDomTG6YEASU3Hc4vbYxmJCXoDHuYLfrWsP6s7h2LhQwwDet6xGM3MRNADAPh6",
  "key26": "3gAg8sWyX7rQoXNSsEx72xDsJED7jgJ3wxfvnYdZNgCsn4WKGyvo5GvZnutzrBsfCtvvdFgkb1CrpRAccxYjgiHp",
  "key27": "3WYc51KHWN8Ji63E1MXBTRM3EL2LWMeU9JLquPa87b9oRfTSNEbgxf1E1jsqJiyZSNH4wsqTZxtsndgMTyyX4HnE",
  "key28": "3TfVpNkjbKUQmRLpFjoZMrxKKYoLiU11KdWZj4cdSK3BuHZYeE7wWXvdVUEXFYHNUDqwfHP8VvuPGo99q23doKnz",
  "key29": "3Ycx3DcpwztndXxmJCbWJrU8LrvzfAjCYFj39FwMcc3WeHwCBVA3UjsTpGWt46NH1GwEgFPLjmQw3YoJ65thsoWH",
  "key30": "2wUxvvn8GZxVyVXBX1YfTm9LEbGUQhqxyEq6LTJPyhHPWEVfU2awsMfMLRuKU4S7dWsNx7D3qjazE3VmLgQtgYLn",
  "key31": "64Py5BzMGdyUQ8kjEM4JoWz4LBQWxCZyeFyVgUyb6D5zYcysvRNGWLBhbM1yioLcD3QqDbBtdJeCo7KT4bi7ACiD",
  "key32": "zmVrdKdCerJY325D4qyr9LkbPwLQbKPzT4RhZFts9UfV8rwagvKA6LmvkL1xNDtuMq4ZYp6AXxFndzmHAQqqoUh",
  "key33": "5PNGgFe5EMDoGUT1gHcpVz7ku7NHRxn9iKjyxHV9u9p7RrArY6zUxnEf8HGsJVdcCehvmqQ3oNi7rf1easuebA4j",
  "key34": "67YYHQNwV2ZeoJVo8DmnvULd1RwBtjR91db3w3eBs5ShD5BTEyqrVvAssZcwyXEiRq3sMHE4amf1BvCj4E88Djek",
  "key35": "jXv2CdgknknM9xgktZnHQFc8kjTGa4gHdRAX5FPyTvhbMzrvcKP7TuAjgzKDStc39oj39aHnucunYhgAAf1grec",
  "key36": "2BLRQRW8xHg2R28LaMxQRuqYrbXyL7PLCXnH8FxojGNhXAdEAHN2xYDKAE7syMym9Udc5uSYUPyPQxKBBDtqi3uT",
  "key37": "31cW3pqmGquVJyWgsKiAso2GZze35rBUctVC3tL2Mk8d7i5J4edU7LoRmGP83LP7KgJDKk1qhDD1m13gKSNM79P4",
  "key38": "44VKVoiyJtvRREi7rJ2vZQBeXhHa75fyEVCAFnVZoccHhZgMmgmDahAUy22wn6HU6Z8n72WPXP8RoNa5Dogp3Hqm",
  "key39": "G71hrqbFxwHo37Ao3yrBcCYhyPSm92J4gZjJsv5PZya8tB215PZvoDbaDxfukHnDDjZRMgWcXLRFe8w1cHFVYBu",
  "key40": "xFgPhEy1kfqdsGhMhfYP15DKphMH5VFp33nPaCBPfwSMGGaRruhNmHtzJQdkAczp4uoFpAmetXr5Y3vrFshr73N",
  "key41": "HDjpuU1Zjsaon8jrVCz7rZdMuYe6vRK49ifs74bcCfWGpecJNYttyGeatRDiVSSEWM3fumxXHfWxhQy1rr4kD3p",
  "key42": "4zkawh2zF9wyKjJjmbuh8ekQxQkoFrX3TfcvNrzimtVCPqumcEv81enjLmfKx4jBPz7xtQ68MMwu4whAwgN9zEzj",
  "key43": "3S1VZWRq3UTfk5GfcDgqp73uRXm3uoDrfoRUYZkJEj7cbytw5PdbtrRgFCmMoGsGhv1G4cQLmW5x9qFD53VVxwB8",
  "key44": "fZJbjpZrfGTJHCU7ZwNvAue753dyRHGEjLDDebbX8reZZ6TAv2597Fhw1Lu5gqT5VZxZ9XefqsNn6QsBXjmnqGn",
  "key45": "5qoUmNTGWZuFSVb3spkwTZj3ucwCFj7JQ4mQWuFD5PmQGCFYYyZB1jeiyxdu7cDrS8Aztn76aJwWSY2MKp4x3oo6"
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
