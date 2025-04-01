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
    "5EHLyNfUfemSYJvd3v2sPg9u13rc8mVwqaYiePAfoHDCM2BtwDYKDYmbzfgkPaqWf6PqXNcDLRK4ChmL7Jnddg1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "536t6w63MUEqD3g4HFhHUfr7zMuPkGUAKA3PYzSCCTi7vQDBsuKPDj2NaV4WzFbR6qsqPUhK8Ln7e5k2Q7ipCDDY",
  "key1": "2JZYtt2SJHqwkvKZz5U8bAKUkeZX7RNBjUNV97oc5sbxDXMf7WotJ6XVCoEdCXuvmp6HeZN8CANrr9bL3SXo2pDw",
  "key2": "5tfTcYN87wDPJ5Vdyi9Rk3LLL9iQeexsYnRs6vsYgZPiBbzrV5BU6R3BVkvHqqsRw342bTSe2FNy9JD4ePTEjVXX",
  "key3": "2bcWY7Eu4UhRwZZPS4avfm6whdoYWyE8SwiEhY7SJLABDitkcwnQ8ynJ9Rm8HzP5eMkHAdL5taxU6fQGaFas9JPF",
  "key4": "5LuNdbHRGMjX2RyNpfbNgAWmHoEVq26dNqkSvdeiW2pqddVFu2eFhSZFDND3BfZSzDRfDNeH8od7MN1MRLjTWHdw",
  "key5": "5aKbfTaj1w6grRJS4FLUDQs7LtfF3xkopssGKFEyVbexZ7Vv1RByzfRP8XERGssoHEHE8KKWdVSPmb2FBcppeGjx",
  "key6": "5pb8VjadoHNz4aHN95ayPttH89CZ7CskvqyNUYHKTkfo2Nx6j2ztVZVMhMeTko6ELBYRSUZoJTubfqSpvUbFJTFL",
  "key7": "2VPXAaPYcUBVEKhiod6zb1j5HeQdeMMaqREgCcGZDQfGHhbLfcAoYRPuMdAXjmAk84ggRtVXQoKv5CX9iUrsFgq",
  "key8": "2bCuodX7Q9wp5wCEsJAoZQeosEhpqTgJ4wTbk4ChGyEsDnuYZFsXp8LDvQqyAoaMAiwxwZ4JBDHQEgb7Pi4TgWFM",
  "key9": "2FB2PHeDmJrBEW2Jk9BFC5g9EqqfrRTyZombm2eQYwn6EvHbFbfbagbWLxNM9j1ckKHAr5EjjFyxtVXwuGjvzPdB",
  "key10": "5Zam8GWCyeRnddFFoV5ypXzny2qzRmxQgZsC5P88XM6LSfDdYh4qgoKaG64GePcmNnuAfvCizyjvT8y4Wb64pkV5",
  "key11": "3r2zVUUcYJQa4cyhpXb2655VizuXXxTKNpbfMM8g3qm23ts1nNHPPJx2zZCyDnDvFCUWNF15cucsAXnitBNZ1pD6",
  "key12": "36toURMPvdcSERvu8BpXfn6cmKmvhW3VpkgVR28HzYQMRn8A2zpR1p7CrQ8od3opJrBTKoNLAKN92vAbaBAzvNA7",
  "key13": "2q7tdZAxfoy5wyNdsup52ybe55GCzSSyw6qch9MHeygh14Jg2MzgysvjgSSEhHGuZdwiqywuF5XdqRYyzgDVSXTa",
  "key14": "u1s9BxzBRDiTQTQzSiFeRRbAcJu2WBDbnqbSSejgXseGBXPwYoH4aCuoEFJaz1ZnBojyueqrXTkP9sj7g9RrtGw",
  "key15": "5j7gVR1Q42c3JcJ8PtaoqcUqp8pZy9AJoRzMDkbNuZUW3yhBHhHDq7qy8We3WvfdNaQKKmjgVLSaaCA4TqD3tQJh",
  "key16": "HCaLmSkv8ur4vMiXKrp5F8K29gn8Xjfz3Wq6Te7NKmvSPnTK466d5CK9dW24yNtRAVkL4tojAbr8rw5qjyruo4L",
  "key17": "3xSoQzM1tGW6chuWSCQvNDpcPpkhTg1Xmk2yrQrFXtJwCCkA85CMHnp5VQ2bWoCUbHhTZXjmHdPKmJrdQ643qFf6",
  "key18": "61wK77nhgfUv6nHXZWVj7UyxEE8i9TVWe1hprPLxi1WxHo2ktNU28ZYEMyeyumYnjzPYJ89kwZudXr7ikSjf93de",
  "key19": "2fKkuRduhuqGntwiY9iwFag9vcBetA8biM1ozXzvhzMZo5nwzsjhhjqCf5aCp7tfCKUu4tyWdFj1U8cxdXuZFtZn",
  "key20": "4LaQRpYujjVCyAsEg9xCBtUT4Nj3kuyK7cpVUBAJYkQtndF3TE95BJNvHXHf1qYVHeS5ChFWK1yCxjUhkWdHmXTu",
  "key21": "4FieYrqPGPJKUE8gX6zxCCQ5F8LbpTRmWjrSjYW8tuSXXXMzXYGgCc7rr2FBr4mRw7Pdo6UDGX4gQo4wHs7gd4Xd",
  "key22": "3TywkRz56NndRZ9Ex5GMm1wN4CVTQWBUaheYN9K8TBhnTrukTAD7rmFEzsJ3Ck9eHLmdPhjB6sGNZBHaGjXoLwLg",
  "key23": "4Zi9BpFtPnW4NXMEp1ULN8B5x6qjrNtrLuMCgmcENtTiaRptAxbvXkYnV8CzsrcbcqfSCVjRGNnjP8n58za6xphU",
  "key24": "3iuFVUrGu7zuaoMicouQnJCaFoFQEoCtrKJz6AbHYXBd5k6dGbyjFdovohuAGcvM6PuknBgPytUWQoNAmgBFQXZt",
  "key25": "aWFUepNsyR2yQLKDMinhUkkgYQEP9i8bxwzRzrmmTZJKCUzZX9wYm4kBaRFqQjBRVNcmi5SExawwyYR4fFDTwYs",
  "key26": "5HGoopBZHxx5ZXVzSNFHokr4S4F7ChmyNdmRmD1c6YJJCEp24xbsqgspHjKtmideEAz7JuCUgjnyUTBTqnHArU5u",
  "key27": "5LajX1t9b9q1VF35ibdMXnufD9tZMXUKaxMMVAEMvaBwkVLcU1zxwnnTBnLqHR2wD68x69hjX8xpESU9zNyJDbiY",
  "key28": "2XBsAPtgCyYJY3KxRqGWSiyRwYf49HnjvvZRRAXHS7XvYMXZHcsR2EunM2NJxxTELsxuorKrHzauPiQSX59UQkYi",
  "key29": "5Sf86MJZCXhH7MbXsPepTGAFHkYNPgPmova6BX6wCqTtSrYVamyemYb91vfEi3TVcqPWgHQBXk5LCKqzVb4u6AY3"
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
