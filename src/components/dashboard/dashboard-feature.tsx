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
    "5MsbewD2Ud9DtiHBGhdhm8DxKAqx3JHQekocBh3JWAN7tGzA2gF1rUU5orgHFtbqNdFCi89p3nHwQarLmtBTkurd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GUbS7UvPueEjyK3xHdpZYNxiNrrFzJAZcDQ1BM4iCyV95CDk7fyLzW2FadcVxKY8KNn9PbDqcaR4Dymk1c8pHd7",
  "key1": "3jhayXxMzL3NKFNu7jPC4hGL97tT1k7CKU6LcNTdzKfs8ZqecXw5PETjnJKiq4FtF9N4dQDu3KyUPAESk5Cnje2w",
  "key2": "4GLPv1ZfdhJ3q9a39rs47948Te8oDVX3WUnFwNFkoMah4tu5RkmefcxgKziviDUngn8NNWWTYXkHQiNFrV8MRk7B",
  "key3": "3sLd8UVT6hhvobQTNYGsMFWUbK1njD88pMZ7PsZgmy1ZJv7ECXQmmHGVKrcfBfjESGF3SUzQJkXNj4X4yX3rJLr9",
  "key4": "4PHDmD9n1yjh1R6oydWYyd2QfEVAkBNpiU4wQmdAri96qNzsnakh2KJ1rMaoBCBMW8HShgq5wbwvTMBmoAoMgivE",
  "key5": "5arjXxRj6TrCejhyT9yWu9EKPKt6U7Bmoi8c8H3XoS83Txmu1fXvaA6okZFcvnEYKUYqLigU6weXmvupwxDKFV75",
  "key6": "NDHQ3dyf4xatErroo7RkL7oWkgkcmn4UHrfJC5TRjFs2jX53iHYqm3gtRHcaNjLvn5xGHuHvXCtS16iN1RkupFK",
  "key7": "nLVtSoVTcBQbL1LsHZyjjLAbfoPwX3AELkWP9ryymf36JfMuBcKtF2bjqqmwPTKzRZLDC3VVUZ6twoPE32DzHMH",
  "key8": "3CnG1yHxoundC7aFUKgckepZDq3v46rr8UvkpTAZ5DSLmYSKqB1C92o2gp9uA5Hyi7fd3QFi76c2WccXLkGJBpVR",
  "key9": "3mneixGALG8nrEMPYVGWbnk3xsXJ9kxdERycGsZU1qTkULGvcq8Y73jaejuc1WQFtRmr9e4DaGyuF9LP5ZK6Berr",
  "key10": "4zf7McVNoEwkwFJBXpSc6VNKFCPqRzw3R7PrvC5xCJi9fRGvS12oW56UEvdQcdU8FPnhCfs6x6eVzMPr2iJkdUXY",
  "key11": "5K5UU5S4zMcVj3ooL2iugjP44aL1sJEc7Um8cKaqebkVpMsBRj2ZaS2kfsP9LtURryS2i9STy2gkbM4v6ntpYaVf",
  "key12": "4tRx7MHT8V5NbTuVsKppfizZiScvYaYLaBxED3zEUPdgxsJEe6MG9n3P2gFwTtpWB7R8dQB9GBkuZHxY15pNxLfm",
  "key13": "4VELWfoQwCH9yv5KCWCYTqKEbFffjy9HaZ6eABKBDyQpRqtTs9A9wsaUjzBic29aSAFB7EFudsQjoiN1jhjter1P",
  "key14": "2PJ9Qh17sGHYKL5sD34Jt2kzXR5mPD9YagvNiqpKmAfj3UeQbVDio8K61yLghyr2bb3MKTYRbS5vRg2CqsJJVeUV",
  "key15": "5iJtJQw5HdG5pUWPWN3gRpZr9Dmo1Vm9kmA7RSgJWfRhKr2MuTGS8xPLLvczyqGoKxoubSBekTJ9yD4W9kFDfC8A",
  "key16": "2tu3aVAoiupHWxD8HxoWUHU1URiHotSEYq5qJiJ6yBRzQr95HtFrkK3bPSY1Sxxtif7pXhrUWaNeczanWcorSX57",
  "key17": "4bzNDPaLfKrHB1fAQwUKnTgZi9bbYyKeBZMxs2q3TSEkhiPFtd6Z3AjHZPk4rJAT3hb6oMsWNDKPH4zJ4jvfWYeG",
  "key18": "22bAqHiyCfMRZWsE6AizzqpSaAiAYWr7qQS9gwp73gkhKrSyPXPtrJqhbN9nyv2buUsTLJ4zZpctjZErfthsvWnT",
  "key19": "39535R1TrtMKfXfgZ88RQMVqnvi8kpnEj8z9r5q6snqbvVd5UnASnwmQHpxQW5ghQgPvpsLQVmJUWv12bmZ7L3ps",
  "key20": "DcEjKuAedu4VLEYXgVz3Dc3tm4iEYb59g9ytEZGaCnm4DXEEnsCtHnT9gtiHFgzqFERrbgV3BQCBh3nd97gEfVf",
  "key21": "2p7S1t2cGxDU9ux9gKXLXJTbMq2xQ12cjaTDPjVvsg4FzDJqYH33Xmyod6EoQuQzxmXS39VnkM2e2L3Sha2C9RZG",
  "key22": "5qgvfCR3zfgsK5ecfsLgguq2MWAg1rYLRb8KYgiH7MjiuamcvBkGRQ6xcVJF3apoQeC6XwBadqRBsudkURmpw1KL",
  "key23": "2BSe3KpAv58K2bdZrXYaCn4LgTVjjyobCCkU7PkQ9qvtU5YQ5CVNkQ361FDhkZAMrQ7g4wK8TUBnFiLAnu36p4Ca",
  "key24": "2dizSbqCwUFKncNaQgwzWivGyceaDckzYkbtpzjq3mygkWZ6FGTbEYTE1qoM2AxAkke3LW7n8Cv2pGJZ3B6SjDHN",
  "key25": "2tiNFGDGJ7fWjeMhzhgervF2TJcUbuH1zB5GRmGYMFFAr7xpt8KB7zGEtb4XcFZK5v24BETFth8WD48vSuY29zv5",
  "key26": "4oyE6fP2RhxP16XrBdgEKW4f8feWWTwccdRUNdMcG18A7beCDkJTqmuyiwbKwPjoQUgSY4xyq3vKxdzFDVpzZsAF",
  "key27": "eYaBUaFcaz8SREsYMUBvAs7CdZY7HBJuZ8c53mnraY2kLv8JR451DQuN2nRDBru5RDFJaKRfUyTQnHjrCuqVSMK",
  "key28": "2G6YbTDShokTUhStcvt3puFV4kuzqd1MaddAfSVojTaMyVXz2JJsQmeEL64KP4Qy7MQ6f7XEHZo9Ykg6VEJUJnnn",
  "key29": "4Bp7fRNFrKU4fDGoaqPdjfi64e9wkbddBZFfmhDqQtHMnLBpUb9LXnUdZxcML3DBCCw6ScxZsDgfbjCvgKxuZoLK",
  "key30": "83Vyg86tMAjuH2CB6AksBr2387zYZKXcUvTgQaqgJByX4g4zKAGaRS5XNyaZSWSwKZjttxLkRcxF3N8NZj63vUN",
  "key31": "4G6t4HPdoXjg9RzYyFvZ9jNVd6Y4UkUKwwRJ98LL7jo6xMoegVKHgdY4pJgfMXwiQES7DKuo35kdCr7qui65khKL",
  "key32": "4s1b3ReCvHBCDnnP7bMtVYYuwS55K3MiZKsQ3LSoHJQdfmnETAfzsm1r93dhBW89Grt6ShiVKxjh6oyibqPpLSYC",
  "key33": "5SmbMSSQLngN3x6vXyedDwvzk77hXsAFG8rMnY9JjZSes9H7CJvufRESJLPgX4bPe4SKWrPnT5iJxkXEvdprxt77",
  "key34": "2jXtvtAmBDVMqNGakPCVufWyM9JXMhe73T9PA8mtXp2fHagKJQEreUKAtuua3ubnwndGx27xmeDzue5kQYTJ2UWd",
  "key35": "3oCfe1Jqd7zHHnbwRtx71z4hdg68AXLj6nis85fABs1VCMzaMVMhtDGdWNNdfE25AgrnKf2g2CKxX7uxs7VpN8rE",
  "key36": "54eRAf7NhCC2D3b2n6F9KpvVm222VG79i6RjBS8zFyjGDoy94uXLHVG1noJuPiVxgMS556svmohA1zyyyiFbSUCB",
  "key37": "rc2EcVXi8epbCZGfx9rLUNXSRyC2jpKqS1WkLJrdMcCgbaZbvbGv6hSniXZdX481HDQgwGPMxZPBgUfS7khTET9",
  "key38": "rxkjrqUvc8Jfg5dLWEqE5b1464ofeAqMXW3aBNWa57PpRyKeJesmn3Yq7tW8AMorUrBmpWpFgnBWZVdofiSczCm",
  "key39": "LsD5sRPj9KaBMmBof9NzToVz2Lf6mHokMuTx8XysAVTum1kJL7u1PiV9bTHSmA7UKecsGpfNJutxHAkFshkLFFQ",
  "key40": "4LnyZesRFdztmh5LCiefb8LJdqbVJtFsAuchG1HXQEWXaGfqR9167KCnGYnwYQgzBAZLprGBHRewDJt2YzUgSrBD"
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
