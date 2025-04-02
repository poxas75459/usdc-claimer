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
    "yU3B1LqNTTzC2VYwP2CiN4Mf3DJeJ35uqqABQiUFeQ2ET7kcCiEKxZbLkxaDBVksU2HNYLWRifJxtHgspX16GKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YN8uamMv3BSvU3EGEX6a4DcsLAD4KxqJ9z17yahCK66LNvk5aNFyn7NxyDpa5byxZbZCSLqCnfyUgy1NWS2NqdB",
  "key1": "2hJKcCBPKkReNMyZf7uXMT3yQpjFn9kF6pJFitxMhNqvGuGBG77cXXERyppV8gJaBoo98JAXfxd5kbrDP7C4GFeQ",
  "key2": "imNgLcx5WnN9Nzn858UsGC6UHmXq4rWSZRaBkQxM6RAZJo4uRrDSeHJkCSW7xz7J8TTxoBMZENAkRVyG853pdU7",
  "key3": "K3FzeyUjPXB46nZsMk9tV3jsX4oTEs8TNGrawys4zd4TCPocCKt5FrApBWr96bsNBskfHdtyhP9j6DXBVw7KLwq",
  "key4": "2BG5vwQ7a5Gd98PJeS4ZUw6pS1NRU2jbdKqYANe6KSqXzSUJUMJhwKRJVmmQYAZTkvLYzmvzELYHV2RTfq4dBAwU",
  "key5": "3Vf7Dr1egG2eAaNgNjR5nm96i6ohobZTjUCYaH2hZBPyq3dcokK98FAdM4jHh2tb28y5ziiracQC22EEwoHb1GCi",
  "key6": "2BAL1T8ivczgmP5X8UmDxo6Hztd77U5PDkbtvSdqK7jV62Sx5vdZfCDqEj1muH7TNehuqgYy4okX6CGjQL8VkHAM",
  "key7": "bJfTc7EfywFQf9uofze2ZMTW14PWnQ2hktjHHmAsRsid3sewhoGiLi76RGsJM6FrykWEJWwtHK7MVbDTm3gmhwP",
  "key8": "3XFabFQaBpnHcSTcXn4J5wsWjxsSvyW5esoWTHfjP3wX6QrAo9tykUgqk2dE1oAPA7WF9YSSCyPQLuU8ypDMAPya",
  "key9": "2sRfC2Qa2vpGArFsV1h1b8x4B8U4DNxD7SuhjKVeWcGVuwGLw7AJ7MjHPd38cKkZZti7zkUubUXh2H8GMkFFCUgx",
  "key10": "3Yn5KMUqiGEibNHj7KuridtPMYGXiWhDaQRW5LxkcPkosLL4yoGpbgFEyicxH7k6bncLTXaSq4GaZAyHHyJ3ZAtK",
  "key11": "4UrTyT5dACcxjKBTpvCaanrLY8ECCprkLvFyu6xbiMasqGUAysYaUptMteyc7266Jyeza8gj3cETNwAobVHC3EqD",
  "key12": "5nLxGUAU6M5vGP4QQpK8ho1wvwhdTRegAnboPe8HpX68HCwDgzwWDhuhS9DnanmFW3L1bVGo79YyoDoq5JS3DvqN",
  "key13": "4vv7Ba9umfXQYW5yeqvmvipGEVbvDSXPMvtv4iYuf5ZEoQAnEeextLxrEE7RnsNUEKfXK5NrnVfvZLpxRtAg7xrQ",
  "key14": "563tFuSV35WFjdV3ah2KALCBAjrj5DLGLqJeKHEBM7jfDxYbekeGgySKX176tuAH9f6cGG9P42wRECHefFoswiXo",
  "key15": "5a6VbZv931wFVBBc6zEeBz2nabTZukwUX4eAPwbFsVTaxhGvGKZ39Aus1ZetRUtC8K5AfkbrjhgmV9n4mjVjQPUW",
  "key16": "3SHDeZrX8E72nhDox4DnoyK6YL3V44GJedY2xviH3E1tvmmNESXnQ1CNgvrh1wU8Us7UJ47ddYR3wNYwUmQiKebW",
  "key17": "22SeToJP75QCbstxfUcgqU8UTRojCiza1jvmoR6n4RmQmHtDxXwZjsNdoVzWCBMRduNYegiEV2SWeimWJ72mnrZk",
  "key18": "5TNa5DhtnpdABTQs5YKw4bTfkMB7mkwUHe9vKs6m4G9iEAffScAjNa5mb7MNBxqHaNHDNSPYP88XwbqBEHBzDAcs",
  "key19": "2aQzsuA3uPmJPM3UgFerJPPKoYC13Vbaxprfh4iMkTzULWqrzsccc7quHJSYo2bFcYR84QBfLmoXG9Q3K9uLcXBm",
  "key20": "3PkiTVgmRpPk7CCJ3wdEmjD45KeyaLXhGkrV26hYDSzdXiwvbxxVApqfjtXbsR54mCvnE1j6FMBuE9s7D7s38dBU",
  "key21": "2t3E81s726qosF25Bj3XFZ1wTnDdXxvb2WkCPRrCpUUXwaUAziNGTi6kNLPnqcDfVxjfw5DUusSPEuv3A4Hdsndu",
  "key22": "5Yp7Qwz3jduqFymv7QW2dDuFs3RgmMXfoezH92t2ZiYKMeQ7SPYGqE8F66gutDJ8zarm9S7pSDVaEx1B6S1dnPhD",
  "key23": "2fDnxjBuanpaAM4rcqT4B4SKDGRJYf7Dg5BQkeL3J5LQX5FBdS5Z5m4o2g12XKmmoaQgCmTNDFtNX7d5pVaLJVuZ",
  "key24": "4QmnVsAD5mv1C4sx1eWutKviqb1xXPxZNKwo43FaGtUMkZTMEXfkjT8sFsZyXwGsJpYri3th6hUXRgRoxSQepLQ2",
  "key25": "5v1FpKJA7v1uQFifdAAZnqRpZZM9CUKwfsP95a4mo1Rd4TUaKVxdxEwze1mBo8rfzpYZhsas9pacCmJEH8yd4dtE",
  "key26": "JTAJ65nWf1jpHfyhWQ4R2wkr8UvMUKDw15dNfYxRRfRuXBRRM4ddXDniVMVW7Ukj7gJUQcCZGKCaimTX3n4F86Z",
  "key27": "228uuu1S6rKYRyD1tFvgFGenYmpr1tJdsVDXELE7ihwAPWjDDEFqvoWRo9pjWgsexgeLv9zD9QxSbtW22PcnueU2",
  "key28": "57dgmZ2yNLWKxMo6xgTZdmuPBbyVLw21AbSRxb37Fwkz4xsQpaBgVKv9P33V28ng7uGgX61RU5khpi6Sw9eKBKki",
  "key29": "3wjopcwCtnSLVLKdQZBwQfr1BE3pQBazMkoGAzGbBgmdweLVa5TgaMGHBvRGz7qdJMxk4zDj6EHFZ54WDskFwyMP",
  "key30": "pQUPoEe5wgTphAHoWgJKLS9ikd3XkbussQJ6tmSjnGtyRJMwyLPH7TagpsK9oSB59n5ZjJCKuWdGtB4Qew4mW6j",
  "key31": "2GEJyNM4hY7z19ptsQi5qKSzHidHazGSYXPb9LE92uENGzM1pvKdez2vBzcMatrE3VmBZuHQCMbqTx5R5YYCpR62",
  "key32": "41oJrSekZEAT9bPb8vaWagcjkeEoxEhCAqBu4DRpRQHFW1dKSaP7YJzi79ghVSQ68zSDGr3PBzVT9bNG8GSca2s8",
  "key33": "4eLTRuXftMsfzTSRDw37PAoNJUvHjMiSaT44494TggyivzDPsnV8yTDHS4nbA7M3VmtQLVJvhPTus3HsVhexF1Q5",
  "key34": "DuUGV2nEj49Qa4ZyUru1jnjBvKGom4ZDNk7UQ4w7k85iCF3FS2L3SyafSCNQ42MWoibo4eCNdBYuBh7KpZeH4tv",
  "key35": "eVjmmWZevjgW1fvDdxYTfe6h589ZearB1dYorMasDx8zCmmEB1pmuPwBPscntEdzeC2vgxah3gFVd9XfCFH8DCN",
  "key36": "4t7sUc8HtyMrqEYUwozYz67Q8BeDXE33SjRG3TJcd3WcH5KoQ4YyGkwu8R3u7mM7udkCBsyPh9mbbGuyqsY1dDaf",
  "key37": "4G6i7rHH3TDgjxatGohEMoseu2WfKWceAoazZPAJnZShFSY1TxDP5w5JSfQn67biA2fkaSTvPXDWkX4cqwJSovVC",
  "key38": "EK4rvkfjDZVMGSLTBFSwXELFbsMzkuGCWZgKbvaXhuzuuzsYkxgG7K4xgKSKSq5m2HWJ7xctCxU8KtGbpdVnFJR",
  "key39": "3fXqNvRgGyEMvpUKRk2KovmRgEB3BcWg2a4mZsQAKKujS9Kkyw1PfxJ7YNU9DAike3pH1qha5HJaj1Lk1u4rN7Kp",
  "key40": "44aZgRKxb6AfjxDLaWogAa8G7tFpTK5Tq7CedvTx5vQ9fL6kPMBDkJvA1phAvYcijEdyF5nfqnCRenErLukXTo6W"
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
