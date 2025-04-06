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
    "3XWdJ5eGrA6em7iGDUav9KbMmBJScUBxhFGinyyjkv7VPqLXDt6DCL9s5DQbihsoAYbpXw3tNgbrHi3trFWUWZ5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B1x1ar7PwvZ8MqYrZbcEjM5VnHMj8N9YAzUfAXnwfhUNC4kF9PQQuVqM7dYpVVNAYQecbNumSiGWH4caLC2ThLV",
  "key1": "iDdV4QGZ8to4MRWfM4jCCUgE99oG3Yf8su4Wa1DRWk66d2645FWqt6a3ENZ7pgomXYdajEGoPuYUsMqgHyqnCPY",
  "key2": "5nqMYEjNiiFMfytZaFDeU7nv2f9zPffbNUsjPndpr2FX1bspQz64e93NJb4GfBdQXVtCexBVoahGyW96Kp1U2Nnh",
  "key3": "4jDbJHiFrHGDeabdwRhFwm2fzpdLaEuDCU6ZsPjQm6xwWAaVM7EcZhaHsBWeZNbmDyWdTTGaESAyf9ojET9Nscam",
  "key4": "AtdU7FQWiM655onX53beqG212nzjzm729i2V9a3dSdBvXgEGDzUuapgjq8aSLUs7ZYv5Vr8va6CZAetRmq5JK4z",
  "key5": "2ZxN5J8DyGe951KK3h1oqXPokMh2otzM6iedtGLQLbAX32HaPiGmPiS9PZckoWuR94cDD29HN3UCjksLEKAmuQP3",
  "key6": "5o2HfidsCZ8ANUPosuD9GFKhJ3fs4g4FXU2wFXZ3dFY3AnN6YCA3g41gmoy78AAJS1fvEQDcBxMWKGYxVtmB4vKb",
  "key7": "2BmFLK3wbMsAEbPSzJLuNfwSjJiVqC6fkEBAYR5q2hcDQM5EniGP8HZuSMrLjMuEvGQJNCwMzF3NWytNgeSfR2eF",
  "key8": "4yh8PSCeEPFNqSBEitL7bwbJ8AVc8YkSZ1tbvgNgMEpiGAvcQS6oJjFNYUJEfZgQJjuDz43Nf6GnQ145rdfxqmKw",
  "key9": "4G4VTEHHaL1TYgEFEHuJy6VEBPudpkMjfpneqbH7Y5GePVSzVJPBbaqrsHD4Z2Zfa12e4yQcZ1xr2M7zpG7miiAq",
  "key10": "4QgLLoRMqYTaECmA1Gb4eDqSdAkwxL2pUMtdGBrvr2n9UguzjTrWmgJvKk38hu7d134jtCwujeYjEqmNus69X1X4",
  "key11": "2A6eWYCj4phzkhcGQym562s17XfBqBXKBy3SxpT56NMpDNPdMEmSZy4DAgmDG3DfLAdtTTBjNz1E8bGftSU2jTFv",
  "key12": "2wdcpQa9g7L1RZ1DxWqNVFKVppCnske8X8dtTftE1reCXPgXbCQY7UNPQWsQDpU3TZrCfE62Xn8jt3y7LbHUsEkz",
  "key13": "5WHkeuna6Q6DWDiuTYMUvswA9ekB1R9foCKLMV3AoF3RB6uRVR99KZjM6TV2CPNXDbU8dqsDLNNzSySnQV4s3jNL",
  "key14": "2tEwK8sxhvsDP3pct2LN5FyYnynFJxxcFg8qhe2dEb49eHnrDc9ocQGt5Wqdh2i1kDt341Yw6CFFLrSyDmGDhQDS",
  "key15": "3UebXFTTsTmoC7B6zYjZiwFZ1nNgNLcEs2eELHviQsxbpUkPAff49tDhSh6tJWcyUbcQW66qqv5eNFCrxmKmCaAC",
  "key16": "3CgdhvXJxYhNkVyUeodpPN2APid7eCTxyUVciuVWvyFhMTxdnsX2rMcpwrxb7E4o7z12CbqgMk4ZfPZWDyiE4E3U",
  "key17": "2xCp7ikq3mDS9rvuudsMDwKqYmzzLBYHnjy7X3NkSpWBV6dSRkgvjAZBBACQ52sDeBVFnY8stQVKduvuTnwZUhf2",
  "key18": "3x1ZuUN55qhXp4vfpAramRmJEPWVx6csCzXEgeYCj2ye9DsSf2baEc66ot75nUhvzZ8REm16KxSCh917yDpsYzqj",
  "key19": "3VVJb8w4gidwzDUNdY1QXx76fnA9CufyUXQtvbnj4w2RZGr6Upu6es72UVCYKVMTnuHW91yeGbcTZ5taz6GgaJuq",
  "key20": "2kSzKmKwwg9u4frvAoGYPeoT46fs9Hna3KaTjQ2zwi5wzSDNy2SKLmzSXwMs5kmFiquWFaPddxwzdG5pDtSW4zC6",
  "key21": "3j1gEmK5mt9DBovgRG1ymwxJWWazfJ5dWZhWc43fCe6d2AjP5sW9ErXnJPzynWRo65Nwx7ru214RW3SSy4VPUwjp",
  "key22": "4pAHJUHUdcbufK1ynEzdfC9GJSNgscK3mHnUBw42B9gAPoAertC8F31Y6QuBqkvR4rkP5CugiUBhAvViaV8wiRrv",
  "key23": "MCccWNJ1LzkD94pzXgg8tbP1McCN9pkfSZ9FQYqRjWQuWRZUp6YoAf6jSHhHAUzbTMf37TWiAesf9y8LG8TmkLX",
  "key24": "5auwsiBwX3FvcofDEdEJmFKaKDDJKkYfASQDrw2cLnNW6AfpxRDDyTsyUjyhhUYF1aHa1s13vCWX5xQMfNmHZhdV",
  "key25": "4Z1Tr4TucSfXPnyu9pVUShCWho1x41dwi2dkk55jNqYQn8CNQVr8PCBeFM7ad1RWUHpKzDvSPBMhDjRCQPwe9Cn",
  "key26": "3urnbMKSd2Zod4HRcvgwF7WpYfcWb4buq9k4w1TkfBPEKBo74Syp4VPCJEtscR9Q6R8Wwom1k11U7Tz4MqJs8awL",
  "key27": "2XF6JVwqBQhjF5d2uNdprgqvMmwJzkCtuqi6SnnaabvbLANFNVrxuxjE937g3AgB4ruPnWVwF9di6oXbvV5t2hCY",
  "key28": "55juQoPuChrjnWetnor1ZeTJdN79X6dFXqECa8CqdbEBzMcPLRMmK1n6dnGAUNDiUouwq7mff27t1zMyRjccEZgw",
  "key29": "42NJJCFSaCAgQ1AuDvmi7qPXBenDK7yYxNMgZUUhLzpWZ7wycqH1MWnyRZ4qsRh554u5arYyKkD5BYoCh1k7JhVX",
  "key30": "3G45XaNzpo1aCyDhT6zdPSqzhMfZSWe7YLBKNKcCfa2pDtNXoSwfQgfy3Bv3znn82ftMuX8TsgV8Ca9DQ67pY29d",
  "key31": "2yASE3TgfeJ4E196kXnytrxXKiuCALhi7HFHzywA886NMh2aYKKrgdJbGubiaword4B64fLwmaJAZ3GVmsrYL3jk",
  "key32": "ZR8xR3dfFvSEGzXgpPM9NxPSuW5LD9jHsi7pm9biBE27jfYmyY6MTeL3BfVWSXBEWkauzzR2nP8PdPGVbNTt6s7",
  "key33": "2HsQwKsXtB3c3vPRG19LMSkWBmPtuvMBMRpeJyGLTHuykpSCaN3EnJueGkxyg7hc4Umx2vmE6251hFiZ6hSYjeRW",
  "key34": "S12EKXbE8Q8jSjmadjjrMJFz28gQDjqZmFfyV38NVYfFe6mXmtDJseRkUdSYcLXiGMamatSomwmRgtGbNsJRgv8",
  "key35": "3jaEyZ5bWsRnThkHmqdv9fYeB6hxcmuwh7pQQj71KmuSB5SPzDFJpwXzyvSRWCkm57T3eKR6X5LJDDwm8ssmk2ru"
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
