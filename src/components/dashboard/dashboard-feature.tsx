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
    "3fSsucbGfT7gcCsSEmgMw3vfFYd9LSioxwnmQcjEBPK2fAdcMNR7k9B4wQSoD8AU5Z92BSQiBBSTwZU2BYQJe8wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRsTJ5Lj8YpRkqp24Cf71V8RhEcNW3EPHfVoCZ3wU2pHco8drZBMovcW18puVYWDgzkJUrfRVb5Q7ic1w7Rkny4",
  "key1": "3pVp96mEGVddwYQJRiiBrHfibfzHwyGPaKkKw2VTUocM8xyGLoZ4Mf4aUaREq7madpy3WS7uRhm1rVde4bg6Zo5b",
  "key2": "2RZ6Smr447FPNss2NKAzCD1BmW3vn6pcX1JCvXrn8XzYC7CAZMAPPmyNh8LrLb9Yk2riayn6Cb7kb2bMSG8cXhm1",
  "key3": "2e4xgeenLoJw2Y8GbQechab9EduRthij1pK4FREsW6Exp3jSCjJsdhuSkqPhNPRATZKcjDwL7i1ERfJ4pPa21W67",
  "key4": "3amzYVrrZ5jGdHZBT6CAqhqZBkMoBGK4Y4Bv4XLuVBX65YbTcpW4YWbbQ9vNtc6D2KTZaV2QXjeAn6UhDtpzknRC",
  "key5": "2gKTKCeLUhNfvadYsSAWZ2U3kjXHfatE3TjBeKcLdmWEwGRFqBnMx5yZ9BJiZMyKgpPM9ML5gaNW7zkabpsrdYMP",
  "key6": "32X3NKPj1sWi1CyGGWFKyW4oUHLbShF1h6UVeDuGaMt6538eXGpxbom4PcZAPZyKt3w8A2A8nK5GU4hQM54HANyB",
  "key7": "3JgCxkS7ijDDBWbBs4D5pChz6cwStjoCaRD8Tsqp6kdvtTdTeWCwPQuDPuc4Rh74agCDGm8dE1oT4jXoGDESikA5",
  "key8": "4gWX7H68HAijEBhozjZCzahPSjadqCWqVmUV2AiX7Y7MFbkzA4BBsubwrdw23PNNHY5KviYY6fTyuLbhFgfpeqjb",
  "key9": "3qKwogELC1kqX9nUK1T3DYmzQHEyVvavDuxC2No8P1DQ35UhShEUjrvrPu5cVqDFSoeswBbLogURzkz66caRsN4X",
  "key10": "5aKREEKrDv4ADpQB8rcN7khmGKofyx9YGv7z6KtvdhTJhDq3fBdgUuZK1bAM3DvrmvoAvC1nnD7MsVmasA3mFQAP",
  "key11": "2daRSmZHs62HBTeZXiKet5jmu1uLLRNJgm714nLk6wqeoMMC2GRAJCFesmdJGW2dTNsVva61tVVkRybgxSHZX6oi",
  "key12": "52Ge6FgXeXMdGKu5oeF7urfUYocJTcwtDsF1nxPubyTSE1Zwf7YCfjvB1JugX4nqBEnCxK4ZhCsGD4AsT8EGSX1A",
  "key13": "3qFHxEVmEUXfBMKqzyqj9Z9DWAqvh4ZiYbtTXz1MKXaVrZo6QPXcFmgtGM7T9MQywbQHwhdqTLYcfWyb4NEBo8zt",
  "key14": "71Vkg6afPVcu1ekAk9hf3A8KwBugquuFCXgLWeJKcw6wRwkH5a849RAHi9rosjUFNhUEoz2dMvMd334ACWwroWv",
  "key15": "3tZiA1xGBXBjKuWkVwu7EWn2kNQ8FDtMzWRWj5UoiPHKa871JBVq5gzr342YUenbffSvUCyFQv2ZASnUwzKRYHSM",
  "key16": "2SkUatZoCBJVBnNioEzVVtrg3kYoiB6nBGyTYDD3rSmigMEZvGrJFcNztqaiZuCyR36NWABfpamzDAoA59AiVGXd",
  "key17": "33PkH2u4uhxNJEcjFzgzmandntaGuGx34zZ87eoAqH4JLihRomGpj6mBxW2ejWZ2qwwQtJ5p6Kdk9r4WxXM2TT2Z",
  "key18": "27DyTsHPamPG6yvD2aXZ5L6d5RFb76CxHWSEUHbr79jnU5jCHtDdNSDkY4DLXnE74dMbFquqfdT6ymZe4rAB96Fs",
  "key19": "3tbURYmTtQVEtUnKNMefQYD35MWAzhs3YTp3jCHzFH9ckFDeXY87DUAG4mjYhh4kVgZUntRNWnYwyQT7XYtLLiDo",
  "key20": "4jppKjhsyknEsSZ7DzJUhZipGaqAHtWMpgxc6goo3YwstchCJcd9CzB9GGaoc4ysCooTDJBNsqPRjVWjPgmBDpi3",
  "key21": "ALKfCywCFh1zqW23iPY2FbX7e1ciaTf6pPWSCWXnBsy2sNEWdJTFKHH8rtRwMv5LqhBEN4w5VY4pTqD2r254uFA",
  "key22": "dBST8wpgdXbZBEYL9E8bRQdCNTSBMhtCeX1ZPVg6esCyFxMEFURJckejrdPPEZn7pFaU2hdSbtVYZxCE9tANr2r",
  "key23": "2HB2sY5T78R4eanKpZoqj2S4v7d7ySv3xE3Ffaia9PfAwrYjLga4wHi7t5sLheR2KkjLfmgHaRyWPNfH6dRZ65dk",
  "key24": "MK6xTbitrFmrhXgRK5Bzc93hJpqnK7YayZrtDhGgEe59N5qSSbWHSqUDuXJgznLyncjqicCkHUBPiQEp14sWevx",
  "key25": "618K4N8BBNw8zDcmohp7VBJH5YNES6p6TYw5HnSL7pBHHiUtFh6S5JukTLP9PdvprvZDcXEriJH5TLGxtBZxpEro",
  "key26": "HLCwJMhKsHFDhxqzBFThacUEpo4tGbCLXAonEBgad4LMR3NA3tBCAqHT3fgumgLVtfMKC27unSfussnd4dndhwJ",
  "key27": "2ZUy6URgKZYJxCuC6YyYguCyjfrFtoVDZVqRt7znY1sPGJnAoed3wyhPK9zXijVuicktZYZL2PjNqBtZNjN1sWGw",
  "key28": "2u7JvQR1b3izQbdBCopCK9BF9eoLkT1k8hSbUAQ2iacNuqRb1ZrgfnjFMXVX5r95peLrX9PdvG6RDnX3DD3FkHF7",
  "key29": "3NKrcTGUVUy8syvHnerdHwSL8yPGKtxu6958sP9WRz5c3jLUJhrd5SkbpW8def5JWjwthbhTa7GQYxE8RDEnPndY",
  "key30": "4aTUZ5kRtosdd3B67YEfcnMjrhLPWcVzgqcgcHGbKwGa9Sr3SrAJePAHyBP2bR7SWqEy1deNKtkN3sQguH93TuEm",
  "key31": "61zKAQtuYSqzzs2yr1SqxP4TpGcFVwK8dfpxG62bfFJ7sEkCWbZmTosno31RnyCVnVMsJvt3U9FEejubZAQg2hmV",
  "key32": "5XCUkL7UZCbpaWzQDSbNLBNyuF2P6EopUbYBBPDrM9RGZ29bPxnvfg2THG9FCwiLEFq4yz2evWqJb1oMgJSvHZR6"
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
