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
    "4Sne3Poj2zLamBigKqWduRNoAoCDqtqnxEiwyMeaUnEmAm2qWvvySuw1SBYkv3ngne3eR15SHLkF8UoeWP1STVVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dpop2jrCp1GpXZfcEeyJbvftAM6Uf1v7GV9aCf1pvYfhdmnEPAVN51LuTapmxjTVo8dsZGynhYvswx1TQZJhy6H",
  "key1": "3y1cTW1etutKSYeTSsYeZRwjZNjZMahVRsCjD4UoXVvGU8mZygKW4FCHEQ4foGqLknq62fb16yRfur2ZRrbhbH2o",
  "key2": "3YzhU5jSUFabEPMSuG4CPiTNdL5anyvbs4v46WNrMPEsA5jBPmTr4XBmvbabS3ngdNdHZ2sL8C5KpWXVftjePqww",
  "key3": "2S9i3cVFWrxbKnRF2jaDo4YCknvvoXXADHwhQuFrZRpH19SWFRvcZa5dyxGS7oQHrto9oSifYtQVWhChGwd6Wtqd",
  "key4": "3i1LKSm8AQw4d531oJZWYbZNWdGuFK9FeNZNfNj3w6rCx2aBCXVqDh7cCdJRmboxZGXhFCsqj5LF9uGRTYqxafqa",
  "key5": "3uc5YPdiV4wwSMmneJoLqqZb4KA2uLdMXAtdjFRjvAeLzfdJ8TFHAyFt1Y3WdKXb2UqB9eCechC2pZWcAf7iVw6k",
  "key6": "4sobj37guszvVS8ECbgRzsJX2y8Yfn8v7acdepJan5rPkxFzLmPNPgyzGWdcDELJKWvexDag3Qk2u1h7ykmtKKgG",
  "key7": "2cMocRAzqHax17G3q9DD2RXtThqZ8Qy6Wf7MFyshUMjK1uYvHoCh1ieGNJX3TCgYPWwGMHeHqL4FoMRvp2PdNWCY",
  "key8": "4QGfQNbSNxEyG9cwFEMrFuJBUHcbhGJXWWaQY8gn8yXya85k2qShSLLgNaVBkU8NjPC4nCck7SpPJLriF1dC2qcH",
  "key9": "5iMJGB8t66P1KA2VhUVmEchzsf1kvVZrk3RhUnSFvmJG2B6vfsWBaZYZSaXybU8Cd7h22eTpcqJMuQJjj4Tt1cDQ",
  "key10": "5qAxeVo2qWCpzGQrTBQ2YS4mNoT8EaSiZgj94ehwgnWPEiXKDcd1Rrz9XfYHKbcu6bBYp14hMHMNoDd1HuqSJ5dc",
  "key11": "63q7baoR7pBKLSdNMMJVpAB3GsmiKC1K865nAFyjPgHR1Cu7E9kmAeGp6gqQK65wtvuzHarqxRmSZ22tsDQF5m31",
  "key12": "5eMBkpfPhmrkWva86i82XiWKyQRR2xud7sehWsNaAgtQ83rXJyrBwwYqdyoTDdsrYUWrCAtwjd8UnfCYqcnH3Wxf",
  "key13": "4noHWy3a59jpGeTPNAsEatjkPb9Vr853q3UnRgQPMuhXuJwP2fvoQUJP7mtdjCGPfUk7xD7kVQApL6RkJNNiom6b",
  "key14": "5rKaFYQEU6Q2xZ7wK7boHCDPtXqtRZPCdJ1xc2uAiGqjPLXYrMXKHE3KEo6wHGvLzneVteDikWZMLqWLDiaAnnfQ",
  "key15": "3xEqta5ThZWw2vcGBEC8dkrqd1xbuk6oMXbWr5oH4xx1f9vY99gwCLjDKeqg8q38caREiu4aMf8cMygcqufrYvSj",
  "key16": "C2wZWPL6jdngSFkgnjevV73jEKxGFwLoiLucx3gBQcgXg6BkmTwjXDAY5d54TS1Bgsgzo5yHGZ7pozVwRGnLeLx",
  "key17": "3PbSD6M1sAEX2GEgZfGV2gH7p1GFt8CZvVtTAAQP2NXqgagqWze5rfyRqsMVHkvsLHnYEDP2M968BxcoGJgrwJoJ",
  "key18": "5R5BV11nS85W8d3i3y8M3QK5MuNQDvTxcmYa1K2bJYnDVxSZCxfaVcamd9oapbDcgi4PgUEsFyCusxaSxbwV8Zzo",
  "key19": "59v2Cv286sPbHKrHPyS6naArEKVPsfFnnYyXRxjB7LGg3P2tj9CLbXYFhQhxRrfwoZ71yfiXT5gEoBGrN1uq5E1g",
  "key20": "4wbd6nctFoQ4fm3xdi1RCttHNfhkiszdCMkHhYU7LuJMxG7p1xesmTZqCwRz2rpjUByL8CXWPVhmAepqsbGKEuKU",
  "key21": "2jXMQNA1K8M3HQGSeVh1FF38b94V9AmvxyhSjTTMm7Lipf9Jobe1czyF52fjdTEB5J4VUSeWYFoQ9fFFAMrX3uDv",
  "key22": "2QtRgS26mm5gtjeEbUhgxbt1PfvprmdxgzxyQNVaYXtmLUkcoy6XyzHgirP4ddKLPryvmP9u5Rz7y8e8aWrFoHHA",
  "key23": "3a1KuxbxeWeJa6MLzqQAvfkw7BNxasBPBrCXjfteEyFX3wEMMSRLVCK2JcoinsfjvQbKoJMfPeePzK1pkJfzvYcq",
  "key24": "4dtj7U1jGJYxWu5MmxE9kCRQKyCm25jfKwYG2ppcCXFCjbEN5p3RjqU34f88nJDhtsddQs9qBdUCUVYB5fFgbRNf",
  "key25": "3MNpRkM2wwVoU7MRAWWyPyeDnKReBrBMUuS6d4fmzjkE4gJZmeYP2U3dpWHVqjnXCkN7EX33JMxksLjPT99iGALZ",
  "key26": "jodQni9fbT1EB2bzofZnf1HytW4VUCYoeG9hNQSuNrjqxkrzuogoPsMBQRMCpDF82utj1jPRprPVaNayWqyccr5",
  "key27": "4GFexANi7JSsrbfA3VSwXHhc2chtDYqeXYrbsDLUjZVyFo7oUyBnfASH8454hTMNUNzY2q1JsvGxBkmchfLJEwtC",
  "key28": "3g6L39rMH42Mbfd8NUzw7nsaudA3rj6GLbC7YY2FgHHQgZ6e2E2KuujDk2jpMFdKHwJrhDWNoV2CeBnsWr6vqQ2G",
  "key29": "5RnHbb8fu4VwRDyFKpfNqxXky3CwTaJfLJQ416ZNGZWNJ6F7W8qCzLuPYESpGqK1F3cReu7iKWtaLzQUoVM8h7XN",
  "key30": "29aZJ1LAQWTjPfvk1wbGWAxavTDxVMaxH1WSUEAsPatsbAgdBaZhfo4nc3UF3VcZfihNr5HBHzAzfn1H1vRoWzmN",
  "key31": "4WCRKLRnYcXsQenKJBwxFaecubHpia46yWDQuFKM9vVSpUB2LCZ1zozrHDVLq1HY2kteFryqjNUe7kV2kohmGKPT",
  "key32": "2s9EcwV8kQQDfJ4zGWp6BsRSdrjoByyKVfV1p7wAcKPNrCbnu2CL842QrkLh1rUkasvza4gQv53yRtFZ6K4HRDjh",
  "key33": "3JzxJfGipu6EiyfFvQXwYK2XTss5vcfqGiu8mwx3huFqosv7nDcsiYJNJfMG2QKak76jHQUBa4WSzByFAcBk9Adc",
  "key34": "4N8jmfV4p4BWum6QozC2NxaxYScRBP8WTcPUqUMZtKj61JReaxdV9GEuK3ozvNVzWLc9b4iPfaPBWmVc2Up3m8b5",
  "key35": "2EsXuJULdRwbiicUsbspZM72sz1o7nK8Z3QcckzNnbE5QB4TYkkzu321tG2CEKm7hYNUKbZJ65ccgbd64yt8sMDG",
  "key36": "5s5Meqhia1tEyc9heXmACSXxL16zK7Wm2QhEBB8MJMQQVzdeAKW3MyTgPQs25aMvnHfKodjypXGw3MykpJ3gj9qn",
  "key37": "3Sd62aUdmWBa5tJugJTykysiMsPNMG9J2xSjdNGuwKzsPNKtDbx1jDSXnwqRH1HajHGfshX4XqJ1WS49kzpUdaT6",
  "key38": "TormHMtBZPECB57jvpTcQfb5j1iktpZzMsunwwmjECM34Epv9uFY5dgEsJE5ZbFBRRH6W9NhDkSJE3XXT8Dhqfo",
  "key39": "2zNjCkUeqbuzbmsek3E9D8zwKCu2JNmNaypKX59B3tJrqo2eH522AWE8nSL1vVKVosAuYvtBFcLuixaNvnrwNEQG",
  "key40": "5AFXS5VZjwDBojfsFBZYMxeSdbdB8DJ7MvZdZdYNUjQxbKJyKzu2WWaUMwGxKuncT3DGEmSLddFGmZTBDdewc7Yn",
  "key41": "61CHGUu4D367k8pKVuv7SNZ99ShPm71QWYjYA1m7NCHZjiYMA5dhNuFxP9rtyXRhr1iLcH94avnc5uCpz2gS1LDK",
  "key42": "5xDpjNZvSwpcbFu7dbknpxAEL6ZGXjv36SrH8W3ooTmWpqujacDxB91zvsJgiSts3DdvSecQEXpKpbjBCb5VZiK5",
  "key43": "23q7h5XQfv9fa6qTdfdMR2MZjbjTJMcnQ7DjZSeRu5CsyEWBt99qYE2aP2dAuLebvBJtEbHLRM6UmHxsJLBZ5kCk",
  "key44": "66FiAXrRyVeLE4yDLJ7Y9J2pyapFkdoRqcK5o5fHdjsNuVtUWeLh7eS4TaBGMD96Wkfk6HxXz9TiN59r4UVbpyH8",
  "key45": "4MZBtQ6dMc4JAJis18Uxjs3ogYqRfsWoGhzuTbBechigEQFZ6fXMMkLhNDmVohP7xJrSAoGx7kq9JWTX1uGvEi72"
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
