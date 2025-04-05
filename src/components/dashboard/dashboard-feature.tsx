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
    "3zfNmfu1n1r4bDpRMu1rm2ewjBjueaqapK9eDAWps9Aquwcps8VVExU16pm4goj8S7bNd2Za7Er4HMUXJrmhefSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56CBdhgXA4m6REbPe5ARd2ANtxyBU8rXLHmAdrcd87XLayJjBwDeKgBj4yPmok2dSA3Y9jhDnx3Buc2ZQSigoBcc",
  "key1": "3qUn2B9RmnnJ3f7pxtTXD7vQ38u8WfXzkRB3fnmdMXUqawE3uaRfVnRy97HKynnYfsQwnBnq1V7bcrxTu5sBGgBh",
  "key2": "2cZ1puM8dYQphZ2nXJBzcgGRwMg1uu92aTviWwoGzZs8H69nXgqEpQxKnmhXNKWFY4ngmRAeP1pHJcJM2T8H517T",
  "key3": "5bs2TFb1dtcUHMSaYXfgoK7LNhUG2fajoaJadzeECobUvpi4gYsC82vLPkDQzzMhKyrdgLTcTkad2V1AqWYLoPSS",
  "key4": "yhPdbHKfY6VbDqKpzrdbEVpNHL7jeww9ZGjq5KZmcpm3Czi8bJJvJXwhrb4KR5W4R9WQPVnqL24s2pUTxZ8PnQb",
  "key5": "5gVAqZ5nN9XVHUv9AYRmBcw3vhaxeAuMkPR7EJ1aCzdFizga5DUwnv4vuvV3p4Wju7JjDvWS9hoAh8gzk5eaYAgA",
  "key6": "3ozzruzs1DkKgBHdBjzZbKitDfZADnpYML1c3EHnkSGKgGQXVtVBL2QpewtfbxFdnxrunszfyLoY92vi6GwTWFpz",
  "key7": "43cuyW3SrQxisSLkgkWKxbJaMnegvnyzvNaQAoCRNvJqYSQGmumtujcgh6kZNEFou2hfCr7BwUa8h6zJFfV9FZ8D",
  "key8": "4mdaDxq35562QXFDMm4REgLUKQTiGYVqg5RkziM22airXE9vwHqZQqMURMoSUSLyKisCqKZRLSWFFpqxLwvhr8Xq",
  "key9": "5VVajJw4w3QSm14ESnhM38shmwWgKjQd6ENHqqWNWAoLmmoz8CtRCd1iVy9PLckisAej5R61KLKw67LgdTPUwDwQ",
  "key10": "2THx3qhaYriT2g9jLd9WeKnEGTbqLTiwPoFWfRztk1GL8MxcrAHow9X83sW2B54nEEiLagDhMoTCLSAx5keuuXF8",
  "key11": "4eJiYhyxqvfnaQLk1rXNLix2ax5bMr9LF2R6FoABBxAnHVVRAQck9XgrJtRtvRhuMG9zTuBKWw7nisQS4SgMDbAE",
  "key12": "2FCGtPbasny9kUAK3WFbkavnudeMb3pf1hruiNhH78DBasS4aUnhmPZg5mZet7gDBnyaXg1xJA4hBxyebqHS8zM7",
  "key13": "3B5AZYsAdGy8GM8yQmP64t5tXtLp8kpRzZbMCF93U8wByUH5Ze3naanGqFBLFkKp8QYvBnSm5DMSeEDncCSczaMz",
  "key14": "4c5i3Ro9Dtke954hXJvifUUEc6khAPtVzUqXoicB6mN8VPhtTsVuQVjDrRfBcjSXpjoHbJdWSZY62Jrs99Ht5CPA",
  "key15": "FKaTVF3xUapUQZj8gPhxDTRg4ETEmNDnEJnB25SoMRNyrp5QjdVTLvXQqmFbdBhSBzLC5jGyPqynXxmxbGBDM6W",
  "key16": "2jkpgRF2VctfHxms9UaAyBCLrZHyPpyFjRtCssBoiWC16rr6dUQVEC822Yx2mZoYYsuLPDehMUnJ4WYdb631NQnR",
  "key17": "5vrhnTKwmvXc5X2xdn75pz1JA5o2Qh8E85aLaw2x4Ygn7cUEa6ffSV8zE8CE6vSvHap48NSYgXTuXTEaX7Muz8Cp",
  "key18": "JYM7DTSgpvuztqxMPZYHiM1z9CTidcYR5CCmFhDkgfjdxRDtUmDHW13YtYd5pqQADMq6oeqo3ctAF8LhXkig4Xi",
  "key19": "48cyoRuxQTb94ZaeXm2YqG5xT1DHPz4rpj9PzSZnadq1776Jdt7EKuJVRWKsT5LNxSM5K12coCph5fqBgoidXA8u",
  "key20": "4KUiLnkVH1VwJPEMBf6AEXyaVRMYyErDwodofVpjks1JFWt5GarSjXqsrb5PQjv8CV8yDWqJrPRt8132CDRNWbK7",
  "key21": "2g85Yk5oUPmksLQoZLd1CZvXkgQPphKm5JdbDHCYgi1iTRwkAc5ngunw7A6mByhD2aJJxGqihAMumne4RgMRdASd",
  "key22": "3ty1d3Tsi3m1kHHencc2wRtEHJnuK5RUaj43bSw255VzX51jcytc2zg7SK1R1gKqQbRTJ2vjtwqTv6Nyidksc4UT",
  "key23": "4WQLow2zvHx1eY9nJrbHdPQ4aSekhpDpP4eM5sKpvEDBUUzxxGJTCa7RwwWSbHD1WznvFUAFAuHzXgQWDxrqagX6",
  "key24": "4rLrhzJTUWRPntNNFXfdm6VKjFGGoJQ68h6zLHmftXLSsfCcCN2AbXLGiTwryCKJaA6xJv9EEqht1snZgGaVJY4W",
  "key25": "31AcMvENvWD12Vpt85ZAuwn8Dz2cc6j5KFE7EW1teuRprNjDsiChbjURsJBYWr5tK42urQqTEa86JesLgZA85nQy",
  "key26": "5sfKLctRpj37kY329tkT5Xt12awnWkup1hrxkWM4F22am6ePPB5g6Tg8kYN1yPEk3pqpFRAnHafYBTBu1g9LJd5X",
  "key27": "2XhAwLUMDFQUw1c2pMAaaH7oYmNKjPaHeQWwizZHwQRKVy8GaBY5SQTFoUHekgHD4LGcLoTVooufC5RFkRQQkbyJ",
  "key28": "3hEkUg3rFPfyTPGgJkfC8vKWScx8RK57qpewrCpkZMtWTn7YMfyJtRjbQQRXFhMppALzxX8aZTUQiTncfQhd3X6Y",
  "key29": "2R993Vro93ZzviaVzA7KMNFYh8BHa9BV21CtsunTmMSC7xXFh3itA6hrZ7NCakaK2h3r7SWC7KM1CH48mbX89c6i",
  "key30": "Fs111sBJeTmsLaByXN2NkzFKgMPbTJpwD6a5irJb35NjuhzwFY1ixS8cfzEEoefWq3RWUxa2QXzKCGjTfWxtxM4",
  "key31": "4dXqV3gpRCCAkFAH4LsU7ecPTbQch7RP6gQqrF4sQfE7MCGbnc2kM4wPaJxkF9ngk2Fw9BkSCq81z8j3fe7FakTn",
  "key32": "PwapGQvQ1kqRAdQVA52cCrV93jVjRzHmk8Q6dRA1CRKaRUeYQDXMgtAjnxWqsnXFR7fwLMiRnvapczB57V2sTsR",
  "key33": "4JMrpGBpGmSdUgesXWGsjH9nRZcZCLnTnQJQ9gnd1qp1sUaNVx5eASifdDhpwPheDimAZEux8KT5ehbWjLSjQit2",
  "key34": "3U1QDgJGkDkARyEbRac9U2aE7DBbFX8JQkU8QEcUdXETkSosPbEWfXz2Q5tZieypBVXoQ23URG9PHzCtCz4ZLQs1",
  "key35": "3bj8U3NwYjiZBEMFpSEJ7XStwCjiqwhP2ciVVR66LppwsgKgWPRXYtrxg7vw73AetH7FeFoweWzBCEpgozLZAABk",
  "key36": "fsH2GcsmW7FAro94csd9pxNqZSMFUZqe89vFoWsfkSre8pr2RyaAabdsQg5jTAU1keef1Rty5AvrRdvymMY6hNi",
  "key37": "hdgaWtVFd4YNGVsVwfmx14EipFe3xAxuxPjAB41r2TtznSgJRZxSHJwDEehCpo3bMBpvayw4Ct38bg6UyPycjPB",
  "key38": "HX6Z5iK14vZgUGYLWpDoHpUmjDmxCwxcCv2LTddXWma99v3Dwa1tTfoGUNnX1D9aGqy1m5n4qw2Q3BrBUN1hj4Q",
  "key39": "4aGYwcABbH8bLaL3XZCb7TtbUGT5DhQt5DgusBHvNzPvchuSLNgpJPpqXnZx9qspj7tuHzxZmTmnkEsEj8zLJsnS",
  "key40": "ZZeWazeaAzokGaYrX1YS48wnf4obi43m9UukbJJGWKEMbVTEGNKvskWuPhgnucZ9ytJCWJMPViPwwP2Zvgk2WvG",
  "key41": "2PPBfk1MGEnaGmZ3GzKvRTrw8FxU5Qwtj63APgjyKeGhQAdsiZ7XkxAw9KrKivMAbwj6mZH8j8FWT3M8AyzfUSZ8",
  "key42": "5Ay9q8ppCsQV87p4c4vhpbDXLVU2ywbopirsNU3chDjyJhVuDFAu1fjAW1DijVxCUdEg22BDo77knU1ZZBMzVzzN"
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
