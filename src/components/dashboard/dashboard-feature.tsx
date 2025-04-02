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
    "5Zc6wbXiHuHk77nx8XtYLn2nCjUHrqTNydeBVkrzjK1srtUVihr7UqoGXAyunbKuxVy4zv6uqqR6u7x5skE4TZhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFbqTUnrpdW1E1VehFAJx35dMfq7PEyf4uEP8mYAqErToKVhEdfuxkjihMWkQUgoATqy5zakLheZpFTsig3dSgE",
  "key1": "32ucjZwKFCLjn44msVvgHoGQFVd8xnwMq6p24xuGXvncF9ZDn8eJJLdjB47DwpsiWfTkuAV8uVgPL3tCgCALHA7N",
  "key2": "4giroGp7QhWgVy1F684tmcHn3TxiAaHUuDxnPYsS2dLdmze2avU2hB9MnQNxuLnruhzt3PXb5KSCtuWUGGCPM857",
  "key3": "4MSt6t1ZpYJDnSaMLqWpPCoykuZbSGuzRuW35YveLwpL5aQZkZhWneML4f3gad7yi44WE3n8Vnngr2XJr6hvSW3y",
  "key4": "5K4nZqoQ2RzzpYPjam9CtT7bqGtxNPnnvXyezSJ6KX8wPpZADHLU13VyH6tHXBJxFW8SrBgf4kKvrLKGGAMayiDz",
  "key5": "fjNv4YnrWgNRaW23eW8yeWWKfzqwb1jGExCQiMRHtmCf1qZsydazDqpYM5wWiF3khmWPRqLGNADkFDWcSCGCTy7",
  "key6": "4bbLvZ118v4Bg9FtRHZujJ1ZFtYdqDpXnevCvQ8En1YGAbhnbDuL63vGguMPJkmq82sAiHYDZzzqqE7LGdqPc84e",
  "key7": "3N9ZqHcLJ8RbRgKUyPffg66jhLQB2eBzPXRMuwsQxtKKBqFr7G9KcQAqA81Z4WQjz95ArCJxg2BHdRGVA9nk1jcH",
  "key8": "2nZsR1PXc1sDKiARtTRfpjEMc68142pLwnMaku1oFt9BoxSwnRzcdwSWAAssCnjotFgQGxwH1Qetrnii5vPd6AuY",
  "key9": "4AmX7ezmB15E2gDgoYBLz5UVfFKumoDMLZrmTzxFR39smrhCHSqWorY64xpfGiF2Ke1NZvDEg5knAiKFAvFVBr7V",
  "key10": "1xvvCJP7QCf8DcEijxLeQYS2uBKRAYE77sTec4eEsapPgFpaWut16ZGPbiYeWWj5gyxPBoAS5vNFJwtaQLyXjn9",
  "key11": "5KWQsRm2xhBJuDoMdPzvBmVxH39iRT6FAzs6gCCG4aLNWLamDGRLkYekJX5MS8zQ1THKC2sXYDJQQRsH41DB2yVo",
  "key12": "2sE9p9BZtNHxLzYmiCB2HgaJadVu2TrJVLQj9bVjqczBxABThcECrpZTWpaMwYXkNY5ga3B8P9Df2wPmhBsmNCjR",
  "key13": "3TmLQ3bsGdWZRkJB2BL2JETGZ4nWChQThJRooQarC6VfQABSSJW38r3wWAeua1DWizQPKkgsynXSR46PQzmq7E5T",
  "key14": "2umrNwd9QrCab6Hmu2vjYqTsrKctq25XPdiQAFJZv8CeebFqxuKLxou11w8f9CVHhBk2fYHWrD45rNQtpDVEMJnE",
  "key15": "5smmnyyDmCiznvgV82xhB6NqpRYH9juZnS323av31psj7tQebm1UvPSAgL5bPRpxURMjyMVzkwDfC31USLd5eYfn",
  "key16": "w2ARYCNqjurJmZPc5YeCuLTwTwnq8QGP9g3SnpgsdA1bysktcTK7oHVytbKkojdPgfHhrBkRcZpkaXvkMLkR6z9",
  "key17": "2xGkTBBfyANVEbvH4FzpvXp6qbcSmWCQjWPRhmUsuERVZGEf7WsqAjxZEeKTsqbwMT24Z7A4MnJR1LisSvWNBMQg",
  "key18": "5hChibJ85dbuKmJ17sdmjprnMM8pfpEJSqvBU7bVqW2pTju1KLyeCzLQ3DQW9w6S8ru8gZpbxrRsp8mVdZWXuLYc",
  "key19": "5wy8fRYTu8nkiAPRGwhm2NUz5gJv4Bi83vDThyR7Xb3oFsggVqkdj13QMb2yZcJSyp4oSwoU7hZotjfXcK33Qoof",
  "key20": "5FqB4gp5SR93aWKTRfapaRWLijqJM8LWTHWdgqgYfFMQ1mwAiMrLfWCmK9rdWwpfcdnBEyLmNccaEPJu7nUjXhHc",
  "key21": "4XASQj7aEQ6yzbJeZwMU5Ls6uXjBJCYpfLtjy9SBnqa45MT6Sa3nM2EN1eLyA5YBpuYEUh4AURSkP8G6R9rziBWW",
  "key22": "3SbhVK78nfit4Hv6AV9xm5MCuB9iZYvB8wjCfon9XhhiQKSb8HNmcLCUgUuSioGDkogcZdMQRcMjjYRHovG9RgbV",
  "key23": "3HKPMjoooZ3jxkooQrxdQACT9tVTiSfHLrPFfMaCkCzmTw17wRf6DDhWBsGjbWpsuBLNaLHucngMihXUW6XHZRwP",
  "key24": "3tS58wsPMimSnHmYPmA9zmCPeXzFB5ioTQRCuK6VJZNr7Cz1SDd4wpNAEU5VGvAFfdbQ6YTe1r9XXvEzyrVEM4Ps",
  "key25": "3EscuZxVLCX6zWBt52NwB11JFka97Mscp24MfHkyenv3Tmy66Nmfpwxvapbf91Z3oCifEnAuwGKRnREdki4FpWGS",
  "key26": "47cxcS81gvUqpjkG4Qf1GndCWckVDnNbB79awwXDpJzwhqGkHRCLMf5rM1EnRMSuWjJ47qwPowyC9K7aS21T4yvw",
  "key27": "udufgCz6y7aSRdhYHbFUe91DfmmDjc2Lu6TE7PGATCJNU1MRcPzvxw2mBJXmJSCXwRV8myfKhmYHQgLoGGcXwse",
  "key28": "4utszLm6hRf7p1Ukpr8f1LhynJJdySjzQuQFuGLqubp7UuCdRFWmpGPAEiCrtto2WWRSYzZYcFEUuHnUWVH2JzW8",
  "key29": "4qN7DMbEaV52SWon9iDseEfKcXSAwg7bXaC2MVua3RLbtj8NNYBqUUy4fM4YbRmLxXHqqmG33mDLveiu1wARVRJg",
  "key30": "2MjVLr1pSpc9jtrnruXT29ftDCfS4W2ou5PUZucnp5cGN7596HguMFJtk9cGJcva5ExAFVJRqW4XDPeavHgJuYbi",
  "key31": "fBVq6bUQ6FtuvbE6qagSCFeoLLALoze16zamJ6cYxykr31yUKGqobTmyF5m7bgvZwB79vy87sZ4cv9im8Z69PYo",
  "key32": "5n2SXZJr557SvtAH8kpqrFpdomy8eiApztq36xD3MThErXFDcyY1jL6DJDXSUm2cuSTu3BB4xnWAJRaeiyUMVwAy",
  "key33": "4cDWSwdKmxWDQo2ydoUKo8TNp8g3nq7tdcFRgVc4wBQryb5mmPEvTjQH7GGmhSH3uCzNUSVBPFdiBYVV7qiaqVXV",
  "key34": "4PqqqgGYZ6L8RXZxVDXwXx7h6GCoDWstJBJjzEyEj2SWWWcFjYhJybR9eti7iuYQ5ajqwHAg9r6qMcUy1mLc4m4L",
  "key35": "4Zne6c2zGepG5jfF72iAHsgnwQzLQsknHUfW1WNbpoY3w7PhN2aQWVN3LzSLo5owD7rim9PLQyRHW41qNtSchzfU",
  "key36": "3z2uzUde8jTHzqnQzHfjBtuLausoyDQXjNK5CwtTvmiX2sTsfohJJqrc7kUxiYoQ3fYpeL9533aiDi9XtMat8j3H"
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
