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
    "5cURCiKa11nnMqk3akV7him1MjzDyzBnoxj3fRH1vXoorM1CJL1eKiQ1nh39UbryhDfvQGJFMaBVRk7LfMSoxzvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KVsrsoVEu9vobaKE6M2X87i1mj4VxCdDqqZwfHNzWegu8RK8HXow6NyyKND9raQu5EWqufMLcJjozwBn8UgakjX",
  "key1": "2nX5MQYd4SUc6n97zNCiP52kd3y3YSECwjfd1W6Z8iY3Cx4h2BDmXmc3B94qoaKGfnpfgjXAEut1vf6WirqDPWSh",
  "key2": "4HNXqudSYuwgwcgxo7cigwnT2MDHFjyymM91VQr1nctWHD6piTrPZyM6qLhLipgsnQwjLWtovJZrHbm5nWDmHHx5",
  "key3": "43w5qg25jn37q8BbRTf7bCdrpKQPSzPYBDTwb85HLifNgqNfNpYTVXfUhbk7AyUGp3AQgKwPFxdVcBy7khAfM199",
  "key4": "37RzyE36UYxQ8yFEXpEasLbtKCDSKzTWS3KD29fbosbgsmLj2n8ixVQia1i2NLRJBBja1kUaZkDy7yW2kUwnzosX",
  "key5": "3FKwkaSFxpo2ngvr9KEUxvzvxPm6YpPH5wEKDhee2YxDLVPUAhL4pWwRxxVDb5cnCYGH4MhaWzmgA72UuiVzAEXZ",
  "key6": "5UX7LaUGfH6FrTVRjPySNXGYcEuKZSBBgSvzxihzFhvp6z9cqnJE8wqRwSjVdRqBkijBfo5dDmF2xknu9XyWXYHR",
  "key7": "51B6NqpbpBRhkqPML8y6WfznjVsVzQkNL6vqxXUy8oQg9wJTd7bZigDLTQiBg9QQfgW76yiWKc8gd6S5HW4jdCR",
  "key8": "2PUAy4VwkPxAt6atHDnfCeSkmi8DNvpoeBT4GoDo9QatsBKjsysU1ayZfobL9dNQj5mGYsLJyxQqV5JNTJ9BgDcP",
  "key9": "5CkUM6oxDX3jbPvzcDinoG1FjBQGtVhg72s6HpGZ35nMBu64fFMLJyxn212ViYojAvb44jdDshFVip1kL6F6hUoY",
  "key10": "476mRvL1y5qMem8erHRppacrJUBAj9ZxZkWcy2vts31UdqYGSmb6LQUAPzcF73VhMeUoSUEW9eSKU4payWQ1XwTA",
  "key11": "gJF4KJrExF3ryrJTQeALEegaZDd8U1MmsxLwUBPfvDmaEZdDW7TTiQpwpscnutMETx181trkFRDBZLgVyKvjPNT",
  "key12": "5Y3SCNL7V7YvcSZ6jjx3x1p2FPeveDBo94MWaVUAL5avUKaoH6VyWD6CycgDfdMQ6EQprjcqRndPzJCoNUEt78uH",
  "key13": "51MNEQhQfbc6BZPzhU9ZbwqYEexvwc4krentaEY4KcX5Wya7CXRQC6aDbD9A2rm9AkmkjvLThLLhu2K6UA9QKGPe",
  "key14": "4qU51wJgGbKXiQXaDw9MgQPdkWFn7Em33u9vDySYTQds3kwDYzRno3JDSiyofiAQXRwrQyfUKg2Sp5CzgjwNNzag",
  "key15": "25SLyZhJqUqWy5oMBHt2suBHHCUpteoiXQMhoKmzJxJe6rgTLZs19sMLNSJ9GNFzqNYcSoWK1mWTbFFiNJEp2xtP",
  "key16": "3SHzMFaDiiuYR9Hberm71D14EYd2SdPTeqSm88LL8frqD1cPq2REt8adfdfbHpjJRexcFjdNSmT5m2YwUF1o9brS",
  "key17": "4kogMtWoQUe2aBigqCCduMarP7LjgPdocVQmx6GAB691BBkap7MitxMbzu19zmZVPMoBm4ztVxoM9CYvsHnX5NFd",
  "key18": "41nTqw1B7EFmfu1hRUoQmBB5mVerNMcY6s31UXRZXx9zL3u6AnAxuzeBvY49Pr7LTuPG7PTzRkqpVTVExLLKub6k",
  "key19": "36AciGpZX58c2BZ8bTXrhXHgZLkFcBf9hWz2TN9MtrBYQkWM5MXVj7DHapeZuQF1T3k2An5RNDzvFw5JbtMRw5cq",
  "key20": "2KrGXLrHju8fw91HAJbj9KgL8dnezF4NnKahm2ep3VntKL5C9JLFkZpFrTTVfqShCDkykj8wTpu9ziBkinyC13yQ",
  "key21": "5A5odxZPMcGj1685bdayjnxjRftRCRSi9xkQKFC6nhYqc3a8M59SVdJYsvbrt6Qa8HPPgnC2AsygcraUCgAKwx8d",
  "key22": "3fp16CSz9CwYQm4jCW9Cmn5VQ5zHDniG1jYRjUmbFV6TXxThji5aLMgWdYcFJjMwpGQkodr864s5vb341QPT5DCT",
  "key23": "2USZR35udj7sx1Ra1vDQj3Pd48eXRyLsXxRvw4GRWdWLckkP4PL4NEBJ4zMeeSuv7C1GE1F3sLZGbg8PmEmtu8HS",
  "key24": "2FRBfp71d6dLLCE182J12WiftAXzL5k2329QEjtmhciFmDdfiYh26yEdSizp3eykc5wQWXLJPRMbTbKnANbfxqoL",
  "key25": "5jV9GAteAPb2jfDpt3AudpvKPE1XU8G321tqkDsqBku8Vq1d6mt6ZeeYhxD1WYj1oRzYGKvHVu6NXs98EWny6hdT",
  "key26": "26uPGa3Z3iFzBbBd6WSnqYCE1wTDWibp5jLKTQCzNdf8gyCWqjAKZpoVxGjvHcnVHNTUqw7VAHuetSc539uZoo37",
  "key27": "47Kqy8A8Xc97j2J1fQjBUR1LgeXbrRNWcnHn4Bm4BAhiVpLJeBmMUrnSkk1wcyyN2fixAukF298Di8U99B7HzowL",
  "key28": "6JmyKJXEPBgUaNJc2BWTkHywgHhr4Yqd5jghw9FU1mixn6mEKvyqsLb5K4PiM8vDV5PjSGHKCU56nh2LzyRJEoB",
  "key29": "2J7fK9Kyyp4aLiyKJPznyu7LPydsfSg2q54rZFkVcLJyxeEsRHyzmvrkiiYGBJmEmSiB58CQWj8pCV2KB3fnfyx6",
  "key30": "2Bm11YpjduqSCQG41FifipofUiXZ9JtczPmtU6nYjXF9vsPGZLhNGd1vDtm5oXK98HgpF2EPAYeqHmVmJNKqADbA",
  "key31": "4x68m5ufHaGuGFo4ddJ1KZ9W4jPBdbCrkXeBMamiyrxbnU9NihrYuivpKFZUTWvb332zacEz3z5Bbv5AQK5xHzY3",
  "key32": "2sLXT66MXRh3PEeBi3cs2xy2H64GQF6342p22bg5shKUHY2kpacsTD3Xys9SdgAqNwL5vBU8jTRP7heafKheeGfK",
  "key33": "5pD8xUrHmaAoTsYXX8A51tZy8MxJoL4uPRc3FQcQuFtFpxaUL8muqMv2rpqjJrVLpmhcXaYx1nKaUo2Lnojk2jvT",
  "key34": "3rS56C9ekPHAm93DR8ZT3JspB4qgkbNR1BDoyxWpVXa992Sw1Y728SEE3btPAhzRDZYSyRodo7QZ4wpbjibyqGFF",
  "key35": "5gENb5QntMHcQGBQL6owjyWBxf3MTTSakLZZN1M1NVDVUSHWYdfiZcUGRF8f42bjoeoHRxMT3AitPyZnYWiNFeh2"
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
