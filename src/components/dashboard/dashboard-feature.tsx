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
    "SMYLZnE6Mt13vdcxzfCZYTr9yB2rWjvV1xS6rNQffs1FtYnUXWRyx8ty2oi1Ww46eJozPP4RxvCnuCNkZMDdW23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tstYdSdXVAZ6VUbeTwCrPb62bXTHftFXvyACPsmwg1kcSCgeL8RCS4J1dJVnZaAeqgkL3dibzBQY23su1BNRuTw",
  "key1": "48dwAbYRJoyoYxpHM2vfieAVeKoPdGpUPmmgAzLYjhrsJT9J6kW4AtmuraQzzqacskxt5ukktT7csNXv1ii3qBfJ",
  "key2": "KbVNYRi5TLbb7mduXqrEa4WWgcaYet7aChLFi15yvJzghq5R2uwf7LBsrQBQ2VS1pqrSnBaFrwZisBfbHdExEZ2",
  "key3": "5Kgf5rLyCDeJgK3bG8qZ1vGeGQhPsqBGGvvCXavpsVNQguyXtXGj69eE4PZwpt29vDFJoLbr2AKSes3txeqyFeBV",
  "key4": "319aWtJ9bP4hiEWP9DFua38CP3fzTQtjsQkTp6vLvjmmfPZpr5JbCVfEdwj2HmCqXeBaRdtLEVzr6nDvYCYTpXFz",
  "key5": "2mA7LSyeCsxXF5yxhpAmUEXZ4PHs94fs2kBpNhQ4R7YMxodniac2xQsNTjbG7tctiCgzbPovDPpAPWtRiFpRWtFN",
  "key6": "5yEGzzwPLNXFhDHBgUFFe8PjhrkNCZfy2VtQR2cDGgK4YpBj5wDskNuTCbtgFWMByzHKZazuWdqRjDPpqdbRvSje",
  "key7": "5gnmoho94iqvXreJjNXyMMMqbPRRjuVAtCGk3zXE7yEztXNKGc5hBgVUUpz1qSS9vQ8zXe4EPnpWSBdcC9yrwr71",
  "key8": "5kgvFJoGDzpkTUPkmQAkC6jS3XbUPNYHhbsawynT2hePgK3pEk8eMKNoKimoCbLLFFHWSVu3UEjiXUejWtYg5Xyd",
  "key9": "52XExoUdT3Q79U6oNDMCdFTm3e7gnZ3vMtYSnZc9asra3zpJ2EyDnNSwsAnNKP4Niib6ah5rQt2YKS6Zu3FZStmW",
  "key10": "3cZTC2tbrkdqeeDk6C6kAGcan5mbTwFex2QYDMjxYA65bpDZGw1VGDiPujyzibwdXD9r8wKGXq4XcoLydCg2Jo6i",
  "key11": "W9yT8rnKUUkfgiw7VwxXaDsH4hAmqwsg8Z3t6MBSmwDhu3baFwDnZHiG76hS5qNgp3sd6ycmE3pShhDZb7FA3ek",
  "key12": "2f1kDnFGiWoScMqo4CRnGtUNSK1D5iTd5dt1hqgwTbaBgSJ54SNRNcrnaWAXrMW7f2AYnSZMzcrA9iW1dknbRxyB",
  "key13": "4LgCjBeeDdqeuPLFbbGZsoz1xZXnf7KyaRh4RLFXqCCaezVzzxareuwe3oDqReL6vdqcQNYfJKEi7KkLUNoJ7ERc",
  "key14": "3s7crh4nwWiZoY3SquAjEM13jhKqVKWadLME1TEAdEQgh6Q7uFjTFcg4ckV2JxcfcGxoT3SiRuJKdt7NcQmfmFQy",
  "key15": "4woHE6kMZ8qVkhT2P1tXLHz3R1vsa33aDzQ6zGYCCqW4skUWPQPXz6S9HdJA4JPqEbYFtvSZkfhwFDWXsePQN5Pq",
  "key16": "85MdfZ8ZFc3ZFAFL8yW3Hq8XmjkRDKqyVe6BGDt9ZHrucjcRp9LUZg9aSC7KHFYwXp3Ya65WwPJ3kH38z2knXXM",
  "key17": "5mpYSEZreeg1BGFiYN27wVD61xY37KwAwcDHNVTMb6fvsiQBq8jVpECLNnNAKh1ma8HPZ12dfFXSWyz78ce5wWjz",
  "key18": "5a6v3bw31PQoEAjQ9jSxfKAqnkqbP7YwPrE5ChHT1hFUtxjGbg1CrWt1GTn86xKZ2o5F4uc8FSXZJdkjwAqah8YP",
  "key19": "yZF5pedv5MDtmDsZ1YsENsgJEUFYxYRFjaGe1x44RKVHRS5d7oSKKYYSMGQgNAhLGWnujUY1cxhv9RPhT6XweYe",
  "key20": "61MRJiwyBQWrLA52KDyX9zKgTUcj5NUc4WVEi48Daichh6GCFUHoSH3m5JFcYEf1U6L89b7e4maZa3X5RKPHzz72",
  "key21": "dsHMa345x83o29XUHNE4VZRsgX2BbzymA6yvfmxu3xrZnYuhsjnXEt3CBrFnCDJQxuroj4aveNYJQaSqAWM8zyu",
  "key22": "2Udpz5tD28q7WH6QrCjnVK37erztgXVP83Ljqg41QpecpTs3xhREqbjaQoMpBMwwrkegRPSNMaiuz8ymWChTChEi",
  "key23": "27ctFNYW2RFKi3reJ923wGTrztMzpieSoWnvqevUDJBjzBKW9osjYpWBiKZEusgV3Uc9JszgPpm6JCkjmkGfqYyy",
  "key24": "5WVuU1AYodr2qNRDUvt9VM4by3uUbgJW3f8CeBGkKeHFnU7chhAp39uJgbEdRXw4ZuFFLVdD327nJusra8PYah2r",
  "key25": "4vxk53Y2zx5YFdUMbdshATDFRWAQ3TZZVuuN9QEwMPKeF19AA5UacUEt1qMu9Wv6zLi5GebspZ8kwBN1VMt44VVj",
  "key26": "4n8RNyhxMK6kXrSNJsj7am5TAq3uAGtnbKjDV9TxvwHmaxuLdvGBBt8dTQpR9m5az1Cac4R7NeDf4nj5iSamcDkp",
  "key27": "Hds6fUWGSro4jAZy4YVrFnqwUHoTzQmf7gxz1QkVDRkQFgHCm5CSY6weA5bjp3Zz2Aj2DZ8iq6pJFBVrYpanjcu",
  "key28": "croJ8nb9vkH55w7XoeQhysccSN9Ez9ufYzuEZCRV82zAcGJbdYLn5up4YLQf9vksZxRi6uB3bpBi6qLpvNv5iMB",
  "key29": "5JoXyCyYvDhcDqw4mQt6CsWoz3z8dzpouPag3oWjqrUQCzEPFPnJ1yQU9fUCKoj8ps693h99r4k1vBATk1ob2BJK"
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
