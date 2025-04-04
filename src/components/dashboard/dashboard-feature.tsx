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
    "3JZ87FbyDXbogjykMrtDQCQiKki7PJCoyNrgtEBN3F6eiRDgeroyJAng6BhGzxJEc2oCxTha2mxuXY8sT6jJtjnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fGsoUKXaSJVLnm4HAAE493G77GepdfBVGNsrVnDkW9ivouVDHWTqEmQpQDT9g5eybWgz2a1FwoppMHVSNo7nkrp",
  "key1": "goq7c2GMcUGrjJS2BDiwK7KHSoxusr1UsYmn2KgJTh4ZUYcyq9H4bqg4es7C6f8PCqUPoC5qyE4eJcPNPWBmE22",
  "key2": "33pTPLBrxjutiVjK7gFK1wsoMZTkGcuTNM8mRJVqggy3ebtcxVWufYLUigHHrzoS2qQeBJviFJzXVAGxQxgPat5m",
  "key3": "57rtLK5aA4M9YUaYcmaoBjhBFQszNwL4TkfrSXCbm474HgeATRjkiDmVwEsCWbdj2NqasK4DEhjqCH3mh9awDLNk",
  "key4": "3WsDNNyGZ7mt1G9BA9eF7ZtKtKrd1RF8h7o9t4rPKGEF4rNzzgDZWfVgeZBt8NCB3tbHC3jqPUSDYTzpesGq3ZDD",
  "key5": "5phrwFjK9X59wQeF9YMBDNybwmoEYFD9PWD2yZzJWqQtDetV3sLeBDes8D5V3PzYwjHGjDN7SX9njv2uBWYbFfKe",
  "key6": "52fQVNq79HdFUbaJYjsKGwqSQugFVEpHq8bW92AkiVRaiLEiFcfDGap8cVFY53DweNr3emcq2JMDsArVQ7JWeM18",
  "key7": "3dJFQk5zahB9WRgC6d4U1uMvwTHWYdE5qsp67V3DGgWpbW3WC533aoteVFyK3WgxDCvyNnSjT8chCtWdwhUC6Wm2",
  "key8": "4iL4pTFyuZPoniqpMCbiozYpHZm36VTFSGB4o7nCk11agjFndkvjRKhTJWiQe4cXU6rzELH4er7qFPvKveFPDb2q",
  "key9": "61Hs6phC3Xhaf6DHe9cnTzUcDMaWVLU7o7HSCE67hmqVZKyt4dVzRaELgGEdJje2KxyRD6UcbYm6bdkXNu23RVLP",
  "key10": "3invekfJkEQhaKfqo272eVReEHQ7oE95JTfnY8qyzdyzCUtawTbjupaRnKFTGYs2UNQfu9mqqSNk3H2EAkdgDgL3",
  "key11": "5Js4Y73tCxfrShj1gKUAsWKZJWxVtPkhfbV5Y78YYWmxG6NJzUHm443zHA7EAX4usAk4gNpHAG8ZTwGhtFFVaCwL",
  "key12": "2KGgFyY6ZVGDNJRBYx8c6LxZTxd31HeTsV8AQ5AkmUpmZEAWuEFmt4CuFW3uPEjbjGBYok9zBoUXgLCpe2eejWL5",
  "key13": "W2J2bVpATRWcQDRptcFVTWHFkxXn2zKUW6VYqVAy3wg63w8TNiR7AU6X33S71xehzb7RoXWwngSJVLMUxmWu7AP",
  "key14": "UhoHwM8NCMkcijo7gnJf5rRC8pcP86yYaEkEMdXB3WKDFr9U8rpY4RA7hNtFGfTCQZYQ9j6CjG5ZibpZiLdKEpr",
  "key15": "2971K3AVNULgzeFLC2YnkQ5xkVHYiFR6u2JVKe9zqbxv2jEvgrBvVXCoXwiVmFvCXEStv8GxUGcZTugnwoHXmdNt",
  "key16": "L3pJEts2TE5kv7bFx9PhvogiCAHmpvyBDaQdDrMagiVsUMq8JUG5XvaBmSQigxH8yKcntM31uXSs5LeEJa23yDQ",
  "key17": "3AwBqWcHJNZqBghV5EqPfqUadzAtfCxrBS4bfX3ksUk5XEkMpz9WUJkg48L9cqdsdg2pxWMiW822bckb2AWCSaD2",
  "key18": "4pb9XRFTWhGVYUsATRdfZzMeTZAxjBnSn3hkf4wLFd2QrPhpRbwx2tyXCouQLwcucF7MwFtqALEPyLHdRoi3V66W",
  "key19": "6QiPRR8o9noQseFofcfhBVhvv4TWViMDVbi8KUvY7nuGvwJcysHtA9aGNxwz5DNKsTLwhhCw349qFLecyY9461s",
  "key20": "pHA1SYSF2QL6K3qtqoZo826D9eCnGiCLp8PL93bTVGBaUmWdyCzBHyGshCsoPrmYWVpQa4Dd86iNSj7v9QRd4m1",
  "key21": "51XLMq1n9UC7Mh2B2unSDsBHU9SwF18xtuQ7PZykquDBUjmx2Q1pH468Ys3neecNwJqL3F5jNqxa4Dn37i57bUtg",
  "key22": "3eUJitjNcvkXLob63rHMEb37JbtCv1s24FKanwN1JKoKnz4BeDspKGAzVXqzzjs7hNPK7q6unYEYiHSxQGpuqwCm",
  "key23": "51QrUJ8KZADaZvobjbfJjXbe4qFUMy61ff8eoDagEDEua6DiWx9M5MqezUhqPqpkTzrT83s5oWypJAF73g2VQJm9",
  "key24": "224VCB3SW1zmVzNG2kAcFVWKfWCZXwx7p8heHvZzBdJ8tcaE8HJGkry5fKHfAd5sGfjR8ob9HsnY7prdv64kgB4T",
  "key25": "4SSqM8EV5REGoJV3TAwSowfsW35GZZiDzYcmmhFNpf84e74T1BUNAmXTbuNAu4eSPtntFLezduFuSzYb53nHJx2x",
  "key26": "4huo96FkMeaNHviiCfpgZFbwG7GntbeHoVgSNTQRb5TjnEzM4RronLu4HJrrN1sek7PaNG6b439doz6m9na3VVEC",
  "key27": "9K4Coczy9BwUPBxTWaQu1chqQwL1zSiiLgdZaJVkEkitrQztu7CmaEwtD3sN9inuhZVxVzRgz1ogbX9JWCFoqDY",
  "key28": "5ALrjndYJ3ZoDMH57b5MYMbvem4rf1ooH5WRyfGWGcjA1q2jGD5Q75uTqube1WtDvfQxiwq1Dedv1FC6Ce8DRZxt",
  "key29": "2JXmujryxz9XapAdjDvd9R4ruFiFSzHPzHn8h9hozuxP6SpyZdFQ67nMsMuwzLXfea5SKgKzp2UteQf9r3SRRt2Z",
  "key30": "32ZtsPLeiHL4m7nHmu7BUTA7mhHNNRjzPPPGpzQxCGXeQxjwPb6pY4znemkah4h45fDEEeiPQxYc3vrUrJD9mZH4",
  "key31": "CvvSHioiARHwtLv217BB1WS9h3pUX7q9FmStwMXTTip3GQAAsbMR5StqxHS5djuiB1qH4Ag6mSXMvpvn4f24ECq",
  "key32": "2bmJ7LuiJc5MjRqjFn4hRYvwScqrcuoCuUb7jMbn9X8mL67CUtv1stLHR43ARyXCAPkLiNL2oWcsBjjsswUSf53i",
  "key33": "4e7ZrPypDBSbTdqpQ393UAt8y127Sc7Qp31ryR1qe8VJYD8LAY99RXgycnPSqwfqfWMW4XXYsuNB7ehrRqPJDDvZ",
  "key34": "52SWQy2Hxeo7TtyMWFgury1Lv9ZhFVKu8YnGX5yXRSrLGhbvKe9qjRsPJm16Juu8NMjqnkzCGFrnt2TrDh5DH7tK",
  "key35": "4wyA1EmnmZ4te6Zf31DRTrex19fzFZCLC1TQVccWLvMj8jBJuNNEQDMwq6KoVKtPeFZYg4312cVLRnvzp7esT33h",
  "key36": "4chxj6PhVH2cryMAvaj6Dx7xqoTk4Z1jMsYrN6coPBrS6Ch1thGR3a5zWpBvi4hknrQptgFaTMLD3SFaLCqprcTi"
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
