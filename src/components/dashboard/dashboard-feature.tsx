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
    "YhwpQtrJqt7fcpcYdhwK8GtwnTMi6n8d9qiRGLrMswNc6B8phPivYmGK5F3Gzd9z4vnR5WYjEiWg6Sykedm1qaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMZc6c4XyoBsYwcVHVxeBVJw9dNybqjwg1nuV51NVwgqPPqDqBW6rYHZHiGthzDsKgGE2fA9dfcjEph6diPokVT",
  "key1": "29Cs3mPk35gNcoPgFkRJCm27uNJ2xg7cwPDKTZsTSdcZrkCmBn9fBjtE8SiHW3jfGU1EBco4AEiX4oMsXgsqn6z6",
  "key2": "2MasKkwtaQt9AqM6KXE48tQk13HKbyiyeodtNCxxYhRCMmUkZ8zrhYeDKH1WjXHW6j8xpJTBfLQihYrhckdJJ2Us",
  "key3": "si7J3gcSZrkFSjqgrrg7vYaW3iMvFiScA3NAP5qjMxbgwHNKZpuULDDA6UFCTK2KmWBxFRTpLM6rb9KZyMtbXF9",
  "key4": "cFxCXG1a9w6XW8iaWSVrkaMsieNamRhDhTHumXqRmxcBjkivBQ5LjyuJ7Z5XG72VydXRG7ZJAPTpdB38jnGmwDN",
  "key5": "3Hh17QNRcqe6wxZGUrVhAgLAzd9TkXpdJTeg3Njfr7cER7GUnZ9No2zuQbKNUJyddQwjDqH1GpjH2qSMvmH7Zriy",
  "key6": "y8a3KJaLWkFWctZD5yhV59XWuCC172JznnX6mHe1FUCW7Nod4t4NUNPR9V5vVb3USGMeEeWUbxNbq8DCBEYbDyi",
  "key7": "2BXkFJ8HVWpqHEzwowZ3aCVyDosC4QboRPRgEFxFmMuxxmJqnTTjU36RMxZEuNqdpo3xt1otA3kKFxthxFwgu8p9",
  "key8": "2RCfHUpkcAvyGkXekRbqxg48WwWCbd3fRwe7Cu9y1vcyq7DWrEHqAwHxm5Szi2LDLSxSD4gnBsbi5AtoWrtH4KvC",
  "key9": "49EGJHwKvXLdcbSL3xAX5v3YCZaC2H1m1jVKEkCuGZaCuG4eBjbU6uL6azh9yFZKpQQgFozoR693tXA5NHZg2o45",
  "key10": "5MhTELLNVPy4BC9tiwUPK14FJ4ioRYQ7jhCbhmXKDcxLzhz6DuRcLrLhZb7P7ARBy6H8ewQBJ2VzCsyC7gNFjEYs",
  "key11": "55gNPnuAiXzcKJAdcx55gxyJuLmjdWr82N9Y4geu7bXcu2auv9CNc6VktmoctDT6DqEbRSwU9Q1A92zo2tdh68NW",
  "key12": "4Kb3fytRQUVws9WG76bgMa8kwqkTqxzYXyW4276iyxcgESpvSQtqXCht9JPcVKRchbwLR6vS6jozp7xfy5WXz1uj",
  "key13": "4wWMcunVf4xmz1cAp798oqRWbN2CDsrpc3dycgiCUJPDkNhzzxxB13FckjsSNGyU6h5JimtgaXA7RNsgBwCEMy8L",
  "key14": "Ct8C84sZoFfVWdfxAURBzhX4LtprrrQtdEghWwYkFnLEBxNnHgAimxWWndmSYezCVybGdkH821xz5wMPWUdkXBX",
  "key15": "pWCHTJYkDE3k6gSA6V7UDDEVawgfp4o1iUafM7kLS4VHPqQD5ut7obtVTgWuFYzknM6urTNZZ37y57j3TTADsLK",
  "key16": "41eRC7G9pjybyAvyiRtSe6kN83xo5anqyFZnWTTZtbAmVwDN8C9eSb3jXef7EEENcyNB4Fj4XrthPvfXE1zP8p1k",
  "key17": "2qfQNjcsKXHrkWCi183aYb1o35w3MgtU4Ctz7zmjysNVjj9Y3M83gAiePq4tez6XnrC8aNNvLTVpDNqwQnSha1Kf",
  "key18": "HbMwQGWnKTNYPQ8v6k78BgBwWFFGGKuBakqQaQ26syQ9vLpyS5Tc5d28c4abMf1MBMFbP7HMQMKkBVTDS5fh3NW",
  "key19": "5Z9EhKeZWdWN76i7u5QXQQnTCpuD4mHAV93CZvVKjqFkzaBrNZKfLgDAU1VAkMeG9iQJY2qdxUzNRxS6sKTi8Ykq",
  "key20": "4axZgK5Y2hFY5wsot2fDQ1N7x6PLa3nJCWyitEdgBGR4Q7xAkAat7qk9kaehA3G72qBj1VEpTtaUt6gQ2jnpBrL6",
  "key21": "5aLSK8Je6nvgm248jmNkte3GTwgnKuu3JADdnwpA5vYFCCE8WezFKJapiCnoZdyDWmERDyuLtrSNPtmgksLCctfN",
  "key22": "65KgxnCmN116VhgFSZRJWzBDxvrHwnX8WGmYbMhr58NtDVJmUAoooSAjstEP7GieB4cNhynSgYVD9eief5sdaQLJ",
  "key23": "PvEXKbQ8YSwiAdN4aUv6K2FUybi4wpcg277aLCGu9eTcySKRQzJPNG87Ndvr92nU64B3HAaxCiPypJm5NRLZiin",
  "key24": "2Rg6TTtFZRpVxh87XCECHFtrh8RoWrd6XnaFeFDd8YJqpfQuNXRqyTbsGdjwZkyvqgm2AWUNyyFZLnGan6eiP33",
  "key25": "65WnRiDdeGNxpH7xN9qmuKitSGmVHTFTS8kXjfgiE7HMAFh1NH5sgt2Z6hQyjpdHSbpEpTxMRVW93kKRJ5VLrfJp",
  "key26": "TTpdrK7EkWjV6TesJGJDYxybHjK34TS53xdqic6ioFLAbXueNrB7gFvJDo6h3vFJaucjYv1hAa81ycuCUFgg8m7",
  "key27": "5KhTNjcFqwJwq4G5HUP1tYUjpSpmdsDKcLfwFWSyhhmPkRknmB5EbSjwMJ7AN1cqdhSHCTxUswvTid9qBUUaWLE6",
  "key28": "c8wgGLgzkF6cZaChvMrzs5FhZrtHBCrY9nzVcjnKjqRGkw5CuAozigjVmZCHbKKvms8E4gissfevQTeh7S1kWPR",
  "key29": "5Nk858hSTqNJNYU98LiJ6dB5qkru7ULps9r2RCc46ZoaxDEKd9niq8vLedPBofEWzLePtnGbQ1XQyPsbZvLZQgBb",
  "key30": "3xvU973L4AgZxn3kUBbVEcekLAtjrnx8gLEx3vk3CHvSrqWkLgEMWrBztiAkggZtv9EDtv8bN2VXVpgqavheuxFm",
  "key31": "3eXoPMni21EzSPtwnN3Ak6mNLGNVWba9Abg9dfy2Vx7Z4BCRSzLqYEd3Qp4m9VMByfp8u3pJ89uZcLopyZLwPUvt",
  "key32": "38Yckp96epiiiFPPdgxhxrp9sUB97uYGcVQmcekpCniVTWsZyq15xMiXmhZTkiofcKkMJvvnpPXG9KdX3eEh5eLy"
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
