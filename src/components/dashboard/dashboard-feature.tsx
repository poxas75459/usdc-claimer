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
    "1BiEHWjBjUtx7tXfobVczWtjkrTaFW8u71byYGnEx6FVC4SdCxrKayZ39HoiqJ64NxsACEcdRo9Jv4eAeo3rgvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rw32rtp39eU2v83mE8ojk5zinnexZDXbP4K9Dud2JEVPvzVKvRuEKjcYJCeQMszKe3q4L3BwYUzU4FR4YxhtFX9",
  "key1": "eUtUipTcaBwUDkZFQoPgWVMJN75M51NLYS9oaz5uCZW7DBDa9TSCV1wByYxjEBf8b79U1njx2VUXdA7GawxCsQJ",
  "key2": "3p6nv23SXkNGyUqKH3o4RYKZp2ga1FXDVf5KzU4G3FCgAKwCDshrpSt28j82tFTcucANT6xHrMmG5prC5KL2wCuY",
  "key3": "4fC9MR2NbGkKZYtnCtrvuDBppQg1XrKmMpZ7MpKLfEjVPtXKfDTHGWF3gPVmhRRwrktDL1P1bvzZYohixNrQTCFt",
  "key4": "2bYW3dz5AyFBZ3eqrbFoNenR6UuCjvMRYxkM7sDtG7ocBoH6zWwJSup9sPT2faFv7jJNv9MNxBBZjuTsfkHfGe3B",
  "key5": "2ZS3kUjWDKLsepYKBUWbPfEJmqQSkojaNHFvfQj6pyCXADVwgfowrZJ9vCqmmf9DR4n2MztNmZ6UVb61HcdBX3Ai",
  "key6": "hW21cNY2XdNLQcomkNGSsGGkskJRktaZuPmu4shk9sswFSxgqfktdF4p4Bfu8Jvc7pXU4gbVYS1DBQvgs7v8owx",
  "key7": "2nASbDEjZbosoMwvPA4JvtdmybiWghtFpZVt337Q43yMK3b7kZdiEwKtNkrfGo6y6PHjqNfFToJzMBJ4FC1tEfsq",
  "key8": "4wmFtK3GCJh5s9TubSMziqcSFWrSxNViP5KCaEuDhbfipdL2YxcL79dAXydShxDwQJFoMyzFXQRJ8mWWi6FmZNoR",
  "key9": "4jPFAhkNqCGaQRkRgzGegXwEVt61eoydXEwKzvdjdqo4hEsyd4nd3hGKmhEPjjN5Bf7m4Cs8Xfy3ptJvKWRUU9mf",
  "key10": "5LLhzfJWuvQXeZjnbNSpHPEBg7g6MAr5orxXo8jG6CMBsBjp8bBCNahDc4joKP36ixGcXgB1s4KCEHZ23kkqwmD6",
  "key11": "23fZS8uC5LhpmR7rUez3FZ6jLPQtWedE5DQsCB7SzjoY9D3ATtTLh3guSdy17m84MS45tDGyCHLmDsU2dMiUv3ec",
  "key12": "4fZdEmhCSFUaoGgyhvTHZWgDzdj7ZRq8BDnijAPWdxGeDV3i78YXugKa3MetAaBDh3ZtZsXhiiLsozrBduVWwQ4y",
  "key13": "4mKY4m9vHEd5xHsxUCg78AvpBVQaspT2jC1oqPLzooqZWrUJt2VUSbXWCas1F83JfWvPngz2qnkWr7ASne6kC3Yc",
  "key14": "4KN4hfXCXisF2R8ZBGyPaCGoE1PomTtwbHwGteGkf4dTddp3YrK5moPbdRN1GbFuFukG2fdp5oCaatoME25g1iJj",
  "key15": "2BNmyjKgS65npVsVWMWpirqd5YF3MQDiUNNZmHMfwgB8ppR4wuApJjXoV5hh7WGJ7MqUjotjDTSJJG85u4o5Z3Sk",
  "key16": "3BiZTsEdEn2zvBtPCUtAC3AsM6DW5J9HHiEhUfnjWha4GQ4DDMasWKcDdjH2T7g4uY4xWmWtkg1wVmewfBidyGbE",
  "key17": "3ZjLqr8k3qsdwUEoRuBJNdABrZo5BcnjqfqbBxxt4V2kkKuwp3CU2MpkVkun2eFVGK5rtCadraGR9iDgyXHhgNMH",
  "key18": "29nJ3i3JH9FMc1RB3NBTjJf9aiLBqsVvQBbePrNPiPTnmGHwXDRS6Po62ndPyhfSXuupJ4FQxjs2xYdKcTyjCtNp",
  "key19": "2fwJQU6vyGBfdJLdbo4RiaWXKVJ5Qr9YLjfYp7xUP6AS6j6wfgLeXGe1BuBi61bFnWXuDj1QZJjtKYKP6rqQrHU5",
  "key20": "5JgfSt2JcYx3sEh2wxw4UEscvqUiMhgeYqewQobojh5mVSRcwsX6ReYkpZGAYHTNFMfE2zrhUHzKAu6R67D6BXtf",
  "key21": "2nvhbjZAMPr3tYU861pT4aoFomaiwB21jXco3QogiZhXCsFUSnuRr8HS3RdBu3ptS6kxMfHz1DzE1GVBu3Wv5uXR",
  "key22": "SgtsXyMzfLQUmBu3ZuwpTQ8hCEkTW4zc6Hvrjvf7hRqfy1p73EezfPt7suDiQNZc1QonfuzcdBZm3vmWutb6iq9",
  "key23": "2rE6VmRELdGieBh58j5AWgPuijMqKVwexn1rfohUotXEws3JQVLK1cKsWYd8M4vD84qAVkj3oHKqjhYGXXxcokdb",
  "key24": "3cPkgvVKRabgNRfxtVJxqwTvp1ZCXw1mdVLoBBc27PD5xchqSu6fjGZKVMRLVYNK9sqbQgZ4HnsWp3yExHTtd7EE",
  "key25": "5TM21zdAkhayxWaMDTdUL5LHfuvTWEC8ek8iQdjgRkoQG2C1m9rvrKU8HQCV6HLWbJL6qCAaW7ad9YCWfMJcdhRw",
  "key26": "4TkrHmfUNDp82CYuc1Yh57m1WwffcvujyH3yK3UtuqCeE3UnMjUA35hXWyayTtEYzkci9kcti1cowWmFJmeL2RVn",
  "key27": "FQX2TeJgcuU489oK49Do1y9cSLeC9McJ3Jbn6g6fEUseibH6ABhFC3zKDrCb7gqrGkS2UKDwT7jHhU5zqo1rFrW",
  "key28": "41t4bQJWtHarBhZGp9DvETgfo42tcnw4q4S8W8Sfjips8Hefwamua53u8F7Pr6TprG8zThnMx9NxKy5gRVMwL7Ws",
  "key29": "nEQdbf3JAK7oz8DAPGjdwiN82d7UQtZQwe7W4MWS3DMSP3F7X8UmstRd972ihoPzyNFSsUv48NkMEFcfF5t15K4",
  "key30": "4ppZu4uPR6VsCDozqP4eGHwBzbWfkVNWizdP2vxmWBpaCzAyedCAdj85quopiHCkerBaKgqTb2wzkvDCVdhS5odi",
  "key31": "iiA9521F1mBJWJ5a57D51Yz1padDJq5eWNRY3vWeEcwXmCFHLN6myMuXiJyjrwY3BMEPJx8rANTGexF58jtkm6j",
  "key32": "4tDHAg9T2vDeKudP7ftDGtSZ81wxnjiQXuy9bavmtEosmCs4BrzMdyYnnJSZAf5jZgFWSbiGDiUKeibsLGVy7wCw",
  "key33": "3A1kPqtCBjubYg17mRzfAxuyvzTiATN3BkfptPe4PRSaX81nWh2BD76hPswzTob1FguGcXJQsdnTjnq8uxZBqmMd",
  "key34": "3yz3q9zHt7niZRwGwnTXk2jeWwA3CvyHm5fab9bBpsMDm9618VN3Wqrs3SJriTMVjWRLyhDgzyVxPNViTniVYWSZ",
  "key35": "4y1CGmwKAW7EW44qnVup1ki6cDy21zHDfWQM89WyL6pNzPTR8zmkcWsziWY6JKZGMtVWCzp1AYZfnXzQexTyG7be",
  "key36": "p1XTdK5F4Mq15Dj78zFSkkDBv7HhBLTd9NCP5JpUR5NUukerKXSvx3F32WLqyYtCocxFByY9o3CMdskoVUywcPf",
  "key37": "NENWYh36Eq3ZHrbE3NJSHzhavxWGZawebszThqxBpRAEECKt22GLhr9jinNySdmawer7GpieiNvgBD9vdDDXQm1",
  "key38": "CvNu2jz7WbHAMwqv7tufZ98xAdjQiYUkHYEBJPBEVpiV5EfGLLBYzRhtKnkWKv4TnqJoXQCTVekoR5CEY7fhf5a",
  "key39": "55g5unmZUqRqJWjtVSLVyhE5eKv6Ze7fhu1okdyswYJoT5m6oT3o7ajajec1NCqKuc786pPA9FtHifJTVQoUjFXQ",
  "key40": "4CcUJcqhLuL7V8fKQeKddXkdHwCMwdW88i2irVoHGdRbVzg9cZGScUpcWLKvjRnoNYdsvXQv6XWijZSMBEJqc4nZ",
  "key41": "3YrcNqVPNaRDbWYpwhiFaP3m26XzWDaBPr8t43NSC3KwkVVuuLMJaYfmkfHATKCcnGXgFLXYc8MErzbSxo86oymH",
  "key42": "5nVxmircgyrtoHKaCyQSx6UeNcgm5v4QcTyCxPU8UKeB51QJZ5ctHXsHmrkDZyHtvnHQEKxfBpsN8s7UoaiNiPR4"
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
