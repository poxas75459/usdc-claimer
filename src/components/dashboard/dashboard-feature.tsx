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
    "5Yn9eSuaWmqugczn9SxC8QnZaoXTXFXGq78YT8AsuDDG5ggCYowABEZgpVaFvfE4bidEKJUQT1CXbCEqqzkASMi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hi8yL9YukHTDXwSursypKntPPeDARqZiUcvc3Prpd5ZuCni9ctfbWwWKMXMgnuRfnoxXwdxoMQxT2ueRgZtHgRe",
  "key1": "3muCCHnrE2zSt6yyuFFBUf75rcJUUw5GwPbDTiX924bNYRyCwiAoVMTCUJHvrod9zKiVZCgKj4suuaCPeoHVhCgZ",
  "key2": "3GLScH1PgqWmUDEfU4XCiNtKj8UQjNSU5F5Y99E9ds5kQShYv55DweiuCTkVeJirqtNAQj7fZnGAL9qqSAJr4kuo",
  "key3": "4ApqG9DRwYP4X98vd2gX5JaLyr2YrK3n8VvnFX7JKu1PWGf82xa3Y9NXpkiM5DGHGqmfTTvrh5F6HNhPiyKdgxPK",
  "key4": "382EnW6s8rrPaG9YDfSK7hmmsec3Teo4QPgWSrCfdA5ypTHdKF6rLdVXtWnS73SLKsMNawYJ5fLiVQWZPGsJKUqQ",
  "key5": "4oU8kSG21hsahCNKGoXGWKKKXSGyaokPh3ToAYxuF1v9QoVJkUM8vQE5edBBsU5CJ2Gf7oEeD7pBCMBpCf6cumBU",
  "key6": "4XGHh6p58xr8T2d9vGxzEfxJfghEyYt1dGpAkQfm8tgPngkTEZ3ReMDX8DCjqrK4SSuHCv6CxXQgMaq2V2uKD8xy",
  "key7": "jBE6w5Nru9JZbzRcr69gdjMxdiNwczEfSh9PftZH86wBa1Ywh2sdDjh7JZxYna3aCQKPQzRXkhfdsHLFbuJFkiJ",
  "key8": "3Ct5vBcg2qhFCHgLZMm4GH9VFrn7Hvav5aJTbtKt3M6HtvTjNjqU69U5PJuasvUHQC89QF2uofhaYAGXaX9TgeKK",
  "key9": "2A6mDLX5fUueqZBPuF8fMVBPgTLuz4aVzbqHuRCvPZmGRxdbKCj4LLCGwunZaE4vov78GWCGurAqwCym4NC6LPdK",
  "key10": "51AwKoQ4FA8JzbQU97cy5koxVRERzHw1g6hwa44Ysg5KjdsG47ABah6srdbuH8wc1A8GTUwyJzC1hDTntPsxuaWX",
  "key11": "4N1PMCjEhNX5JmrTJPye6cqoc3RQ8UWdaos8xujXM8pzBiGrju1ixCUbTr3gHrAfeYG68J56ryTz7LRiaphbDq4c",
  "key12": "3EkbbMQmGPzZhhnr43dTRNCL13spEA4panL5m831P81o9DgE8eUgD6pEzcPQECSneqS1EEoWPnzvKWbhVFAEFtTX",
  "key13": "8Lfm1asXnqZAFMBY5MrZ6Cq7mTJU2dhp6bWuRsRcPKaHqCVyKiYLHv5o9iyzWFfWKwnys4RjzmwLLPvciL2sggx",
  "key14": "kzCyU1E5NyL3WmErdXUAVYZbokXRgSa4kHR3YxVchdpvDpBW7czvDDBMzow7YLcfREtubCk7d5cytZw4u5i7YMk",
  "key15": "2t1y9r6BXnaqbEPt4etWvuVAxn3egTzHwc126E1ggHHsGMEvxPHeUHGtLxdkzMUcaMNdLRmdrFK7bwScpApeLzXk",
  "key16": "3f7yD3tiPBobmGheRcbBP33M22DsARppnTKgYAVSZed8FQKt6S3oWcmaHid2km3fhzYvXVwS9y6Ufebc8YosXrvk",
  "key17": "NEWdht6wakhW5B7Su92JFZRTHheuHb2y5CiaQkBsaqSmfQfWsZ72ev5PyA4tEdUo7HHHRNEbuaB1N3FWDkfUYVo",
  "key18": "3rYtnpHvY8JozZuG2qGo2ykowe6EraBdxffi7NYsgHXwcuF8du18KudsEHYrZjTUjwiCJPzdS4cFFVt21S93jVJV",
  "key19": "FAVehVCozURiRfsrvVDKXPVasgJymN8mFDFqTzpLEM2MPmYkeUQDSuA67Qcgo9Sc6FtKNDwABqNS4ATt8tK9sR8",
  "key20": "FVnPYXjnQnTueVkuoqMwz9ETfeUKnFSZSkFXcaReuqYSJv5PAR84VYbGhu3gAoagNZJU1V4ho3ay4r7pTUQXaRE",
  "key21": "4RseYJtdMwhLhFTornKuZrFtbSe4kwrn7f9PpQtnxvTmScCg4FkLy5nSqL7Kty6ykpHx9t9TD4TdvM9iFkCsRA2r",
  "key22": "2sbRdSqQjpU4J7N3dsFUpmswHqbgYD9F3pdhvpPLtVSd8kgv4WZCJZw9t32NLLGrGKjmKe34odyauKvGGnMh3RSj",
  "key23": "5DcXa8FzrhjXDLZGKDs1wfHAFTQKE4sZ5APF4siJ4tQoRVL9wQCVVVYPPdcfX7DNsJqaEriY9PSYTv7o8nTer7r7",
  "key24": "4Ns9Yms6Y47nuSzSvnxsyiuAFQC2s2VdsAsw4P1ABYm7R3ukxPdKpRGzeGHeZ72dqKVxueqXqATeskQMEPZ4pnNN",
  "key25": "5cSVBmGKXBf1ihzn9BepP1amyhp8goHPwA2GCkKqK5EvigYUo44Cc9Nyc6bwfKPwFiXdq7kmmcMSRWmJDPcVSRXq",
  "key26": "43uEQPY4gmGhJT46CpQufi6yyPabLTP8g9A7t4xGx3HbKyk7YSNDPiGjXErdxuQgQSY9nhhrfTU2rGuVdWQKLjpV",
  "key27": "2332tYjUSXs1QvrY6NHjcTq7hoWC9dmRfEuLcscy341NZiz6KVCTSMMvYt86HdUvSa2FrXLhUwjbMWPWX7ctxKmD",
  "key28": "2u1Y9RoKNgY2w7kGRorV5rMXn5nQxU48X7ACKiLcVC5mfs5eS3XqRymtwfSN7mPhN53wNYZTiPoFxcB1wseKxq3q",
  "key29": "5aWwUYC5dFmwTYL7zGP4p5g2TqTycsfdbQJaGTjnAMMNQmBwHALpYZ7NLn4g56jVjDg8yKB1VUvmdpan9xcTzhsT",
  "key30": "4buiRRmvHdrRyK8rFR226JmG3X8xq9v1ViA2gGi2Je6rs6SxTXVmNBTkhAr9HXyNdBZH573uPDkcqWuTGQ6CjZn5",
  "key31": "2betcxXP5fNtTZKh56DcNFhyF86RqFGE6eNdS7VELJsvMNHYWi32W3x1ELKirprmWyB6Zerh8B5UviMZQiVyanc",
  "key32": "3fsCBPvEtixAzcP3Xz8pepbRYjr1rMfzB9YVxgrhBjHLhdEQDMp57Gy21q8Xe83d73TYSjT9gw8y3BTy6JBVTTQ8",
  "key33": "g4FDy1utv2i4ZEpmDLNNhwf6dKXZeYrBzoLJwJa44pbhVKYhNtsThSK87dh7jBDvWDcWkHVnXw6Bzhp654aHdw4",
  "key34": "5svoHj4b4VdqoSjeNbFiMVb2fknbg9ZX8KPLnqKHBsbt71ZcFCLFCyoMnhTWBRtXQLXb4rwPk5afvSA5q4BygjXJ",
  "key35": "612sEfvNtZGvc6jTuJ83L26hCrXWdBWMrKZ6Pgd1FnawR3DepdykrUDyryWFpxgyNj5mcAzmfEkht3FDGyBqA22h",
  "key36": "43qR2Dv4QawJtgmhYF3aSJ8FcUaYvN6uxkVjvkEv7EBgVPPKHzF8wSeXbUucyfP2DJ4uRpPGStqyuUTtoZ5BqVEq",
  "key37": "4Xv3QXUoS2xCegaCc5Ga4UWuzopPSvQ63vHygtwd27jcnSCXh9ctyCusS4Uvz2g8DUNmVFyKwZt4zkswtWXDeige",
  "key38": "5pMADNsZoZWSRhQnipBMfLDEgzeMn61WGU917EMgEe4qpEXoZPR4dugnCERMsgLBzEZBMiH5ALM5Y1LYt6JCZSpJ",
  "key39": "2VvCoE53qV4feMoTznyH9ijhiMx7BDT74LE3qPZpG4gWtc2iCDdkSAG3BZJCgXXSYsknpYJFiRHGLtMCZbtPmqNt",
  "key40": "5P49AhLQLqu46vBUVWELoy3LFYvc6pEGgU7QtPJbhvrSmMdW2StCT4Fef8YdcqLWo7F7KVPFUvM7LWE3sXZWoWTc",
  "key41": "2gKeLqevNxdkj37V8MgCV1RSdTDNzYatxoawZw36vTLTxsGNXjN34z77qQ8RJmnbeLzJHUPVjbVMVZ6v2UEoQaXu"
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
