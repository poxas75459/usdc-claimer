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
    "3D4x6DjNbghDiUdKqQtLAehmCz18RnxWbB1K9zHR4QieMLYyuYqhAgiDC4k3yWTbfCT9AHTHiE69CVxtGKw7rqSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wrvr4rh56ji4cAZUVATppX6vQjfR5kMKiZ5UTwYDjULdgWKxkMqndKpZKxYtXrJSWbjXXsEbzhWTQ3nK4QaUPdf",
  "key1": "5HTFeKfvNVgQybB6VtfaD3sNxWJoUvBSuwsGBkAXbj9pTP44EJKrKn8GfcqCkyUbTWzBzonTRpePAVKv3nGKCge4",
  "key2": "25j78mzyFY56wLdsoqRsJ4Pf1epV5w9xzNf9E6Wect8PyKiZcvzeTwMTGMeJ3QGqpPMC4b2SC1v7rWFxVAAXfwqG",
  "key3": "29b3nNc3AaemLTHDqpYmsqzaLU8fdboxsDYjyoA6H7oktgYPrV5xKYKCGuRZdmRpwiDY1JrV1vqfYKxTZYVAyjmN",
  "key4": "37iwjCPdvx25jsuMBUHXPxP4fVyBHAxP6hqzUq7LzUnviCwmVwg7fUjwSkBiYLkeucMYf9aDt6XxJKXUtbNWGckG",
  "key5": "3ohZmunwAr7edd38UsLps1seppcT2r9d1VpcFAmtcaQn6jWML5G4yRetdX7BVk1581SQq2HtCJF6KuuAnKhHWaTj",
  "key6": "4wpVLSYrwy6cMrDyVKbNJtQSL6TpbeojHKfKkrGYq2D32yAEUzyz636L4u7Z29VQhRMzvpgBTkgjSbRWKToNqXF1",
  "key7": "2XofiqCWnfpYw77xVsbHAHu9FByFhZxwgXY89LVYvNR2SiKUAAGdVUYZE2ySyW9BXCoe5QSC5iQt96cvWgLVhsh6",
  "key8": "38E6YB8BrF4q66dMkbigSVrMU4b1wJQXvpXPKfmpjv7Xm4rxntFEMsCAaQuehrkAESFT8Y7R2EnYmdr3unAjo67q",
  "key9": "23msEsyctzzQ3CSip5Dt7VHqWG1L21hb4DACP4EX5GwW5wxXbbm5jQvYKSEtaWMCVNaSr4qo42ytxYPTV7HBXQXY",
  "key10": "33MdY8p9jhLFSMiiAgNKTtJMBLvAt28chQ7qr7iy2UP1oXyXRgonZvZvksbYJBhKjn42rXAkfdgbdtDk2Zk6QRkv",
  "key11": "2ZhdCacqVqbMuggVmnEnjQgs97Uw9Amxk2uLkJHY5akrk2bq8Ry4k5FDtuyVs22sJzY542JCi1shmdyT4VJG6UN8",
  "key12": "4EXav2CbfCyUiCgJehEj4KzkxVSQ3shvqJNz4V41U3CoCowGEwfwxiLEv3sK9xGThQzqf9jXq9vnRERgaWxoM15W",
  "key13": "4JZnFvR7AN79sMfhLCF7oTto8gknTZ2mg6BM7jb9ahLn9he2YtPvaC5M1NRoWoJfGyEfDsgmGxSjhxipMPFDmytr",
  "key14": "3WWkn6Pwb79MyPvwWmrZX2h5stmQcYtiQTPyupyS8xuXtiAm1FTDM4uQoHjaF2rFV2d9QHpiN2Rqz5AkkTK4zU1D",
  "key15": "3AtRQDqFHUwoT81cSqrBGWHqkuk2NACR7eAkePbsW79ttXgaVrudcW7cFieSQXxSZV51Mh5f14A2ADvL2ZvFC46k",
  "key16": "3vY85tCdWNvHwxZqjY4ScjDqdoTwKDw5e9GvTmzaSeQGHf8DFCgZA4F2xwuNEBQknQ47XJbkFVQK7ojijV87JAuW",
  "key17": "3A35cNS4XK6MrxGSDe6HuLawMTCe4RcdHRpXo4KnzRpfuVgnCHCvu5i3UZSm1pKy1CSg2HUiKEe2gziEcoWWVdn2",
  "key18": "358VaUhz9zMws2f2kMQL13BMwApPAYmKA22FMmmi7c4KVEoifYPzRLyjXfXr17G5AVFXaqSEVS3p6whtdsxJfwo1",
  "key19": "4cVcDdrL5ZxnKyoM3bhUEtW4RQJspcfh79e8GLwES2S7Z4vZaAiyK8sChthHhUUkMyfY3De918L8yfR7c1vD45ir",
  "key20": "5rsaa1euxKRyD5jZ6BCxPve1mVjiUGzdr6NWUBCBLaM9XjxTm3NRfDuJqSkwg3Pn6nTzBwsyNE4xzaPHtGF1GxqU",
  "key21": "2NJQrn67BZMMnqQTQzs7aVicfHwgRPCpHFmxDkeLZ36ZboEBG7Vgq1sMoBofWbJdKiaaEJcTAjKkPrvtvk44kKz8",
  "key22": "4S3b5PYJcTBLTaJJxMKAL4Ad9KStzcJFqrdE7DuWiLKPyd3vfJMmL8uSCjFhVHrzUnTSrdkiS1daHrZX8LmqZKUZ",
  "key23": "3enaEYYH5pKJnopcG6RUJBmtWgM8iXhdPD3DN1imUJFUGsUquUkL7qar3sfQnHS7Y4oipsmrTAR5vsXtwJGuuxLW",
  "key24": "3yn7EV6wqu9UDdPQ9Cbm1qFYwkzg7NzuBvPwptYW4uPPByRSsxAfwDvihjSXZJtP1mh8aibE46tnTTDhQwzPHd8C",
  "key25": "4aSNHJFCVtCZjBH5rZwushemYAuy79vBYXrbatqXsaSJqkabtnxLCUk44JNVRtBeiXaJsCNuHytiAqv3msHTwbCD",
  "key26": "63yKs6qRSufv14zAcviXCbpe2SEWXYuqQPr1rELKBL5vti9NpwKPAouXFBjYA61K4sPyzoMzcMq8aGti7ojnLEju",
  "key27": "5V2KPg4qtRZHQVTeVGpxdEziARe3Q3sWP3bxh8X3BrZwMzZEsq3Wfn9aMuxSvqNCveJUANKAQFWBmX6HnL857cnN",
  "key28": "4uRuyUg2xemPdauLfxtpizcvyGpQjm44wX7G98nxqkzuWk6qMecqzy4755yCFYVc1YZ2A14v2BhipYpmZSU6U5b3",
  "key29": "28b7M3VvpmeLunAju4f2jp2QP6xioD1An3rAdou1vWTRDotVXPzjPFzJsnuCgAkykunwfR5eTcYfQQkyKmNx74yv",
  "key30": "4NdcaniTGRoTSTFY5suHnBjFFadA85B4QzdxSBYfCzMC2PzxtxzEUJ4jczMbjj235ZuUCbT3dJMwDdhXUnXMfAcQ",
  "key31": "5xxojCnZnR7bvcVdg4GckYwTKob91SMP1HVPKjgdfgd4JcCvr62tLNUbxdv9SH9NQByDdhAT6YLCQodsgFNnbM9x",
  "key32": "5dXtzGpx51oNSvTrMeyzzjBdvDJPJGe1N4ZCKdmvUSTWtK2eL3Qjwi6toxm1Ee8Bf7miLXmwKXvRjjVUrtEHGnGk",
  "key33": "4DiEZyKno9t9XaFrmpEWBEM7fs8bkgniMdMJnZ9XjL3yHSykgFg5RMRNauTJLW3taC6zJLfzd56fqAFTS73AGrC3",
  "key34": "5U3x3UXN71b3eHfWDQnRADpRtzsXFz74jB7gVAqwtQAX1kn1Mxs1pytExqvwCcVdRVqv6Rsy5xhZ3VhEsFnM71za"
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
