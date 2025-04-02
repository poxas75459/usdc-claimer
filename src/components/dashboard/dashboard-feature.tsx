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
    "3XBkLud3mkswbX6EXcTDw4sEYPba5cUEXn2iFjM7gG1EgGUuvzYGut61XENYzFtP5WB3nfgTtQ6gdsAWPCfXjxxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDvU8XZtgbbCBmoAWFEEmDuTR3f9LdCRAyFG64zueP4CYrEBZd3qQriV5AmjELLdgmZxVmXdvqamhDgQKKUM2iK",
  "key1": "4UxtMrL2VwtQu5MpZBW8tjKYtkpNL9SRA3xUXV9w6rbbP5KNbXXAWb4QSyc5SLnVaw2FYhqk7V4w7NKcuX3v12j",
  "key2": "4BsT71miAyXvDdQ91z3Ld5zRuEXdLuG2n2Lc4gnPfP6dTcRiVQD6WDofAEmuakQkPVJk2ZxmyfR5DWUfLH1s8ygd",
  "key3": "2bJqDDf1wE8QoSUz6EaRpiz9EfjwgMx6xzbqQ43Bz23vMuA5YPZdVFJxZmpQ2HrJR3JT749Vjgi8hW3o8eJF2Bn5",
  "key4": "5tLydUEBbYdRCSmyY7BNcKMV2z82xQUMLcN8ooJXk7peLvr5oRwemFnym9CFJi85P7iocZV68Jn9tNDmH1SMWoWj",
  "key5": "5jiL1GdkBbrHmZokyfqJDEtjDLqvnYDFTUPfLUAp72E5iF4TWrh17ttfi1wggaSPeBieKAuUReBfPAa82otbHmiS",
  "key6": "4eDzwygxQsaqC9Hvv9cxQLqUK818MyomQYfsjUsLqrk8i7zR1UxpFxk4CCUAg4sHGZuahPZR4YYYhivqWi7uLGr",
  "key7": "7Uuf254HQvEVNjrpewse4jGr6EGjngmXAM8oUwJuxvqEu5qN2CH2RjdpqYYUc4qGL6KDRZywyy1rbqndCHG9LhS",
  "key8": "4Lfv5QZVYuu5MYYd6B5LeFsniqrcX59GVSKEU2iRZ9GRgocezK9Yax4x4ynoT8Q76SGNi34v5ZpXBpeZxFWpTs8Y",
  "key9": "4V9EkWqLkaQBQ4kH2NKnRZ2Qwuuz9b6htyt5CS5js7MrunFVPasmwPfwqw7nWENTA4EdYAwBgAEC1CTkzsZvzXXs",
  "key10": "GXogCk1PeEPSgPJqoi5DhCxuBQG4c2eWAZbX4bfSZCm9TR9YFm3e5bMamAZKgKprnJscNXwwim7aPCqMMxKgK1x",
  "key11": "BpVNWS8vokkebKXXG1uvWJPBDQfdmQvvXQv3RGe1GdzdtFT6T4tuLhdc2XUJzkQ7mpHDr8SdoMCLJHfmaRJEkem",
  "key12": "5FqafCg2ai5NnZd4Pchhq3GaddKG4xds4BTkX2C1aobhtUUGDnaZhZRHuRS62X7umXUuuhsTJVobuALqUJrjMaa9",
  "key13": "616bsYWCbvSpnbNXC5dcUWbCkDdncAN1NzL3bz7k5iStzag2dSwL7fFCQawr7T8jzkLYR6ZdVHFWNUBWcCC8i3pS",
  "key14": "4CJrzYBSbj1NqGHV1ve4erbtWftYsJ9Miq6vYS67zCHDQyGtxe4zcoP1JpAk2aMkTkRwnnV5BkDZMHKnCJkQ464S",
  "key15": "2dGhpmpU5eckZFQSj3966XijWeJuXf6iskD2zjkDfLmniYMJWwY94bWsaVmCuBn9Y4Rxz67u7sVNRXGxzkcHWhJU",
  "key16": "H1t19g2wWokFBHRdeEcDhTojDXgXyCuQXuZ9imKHsbJYggavRbAG3fdp2e567kLAR86e3HnAy2A5xYRcr7BiCr9",
  "key17": "4eMVkDpCezCRkRekRLsNQJ2LsiGFuUf2mK4JjvdSyNh7hdS6zCJKeX2EhuzGDs4iqHxZCdJJKnwdysnn4Y6knLY1",
  "key18": "5pbNAKVee2yKvU5qYe65awxS6rGL2hcyMAwVfTrR6rJvKE3aYLdgbTnVWQbYNTPpUbLSPBUSwusac24aSft5YAqY",
  "key19": "sqZnuSbdkiYzGg4WbZqgHALABiqh1sk55fuSiuXZSHBKkMzagnGNcmZK1hYexuGkf7MD3jw8SPy2cdfZnFuRwHd",
  "key20": "5xSQAdbpF3aqSfDKbsFQwgenwy2ZNXh1mrxemp2667ciZbyHsaY78C6WE1ta4M5YazEKRR7YkK8qXH1z2jP5UREx",
  "key21": "EvgoayTUMtrKeyjdv9PjjHqTavtTLNWXXsxACYGa3QRQuod6Hyhe4LrvgW9P6sJUnN9rhvW2mXVYmmRVEnZZywr",
  "key22": "3vwP65cnt6dPP7WMt3ukqDs9nPSKDRTNLNN88SPLKnSHscjdFiu2JDhXDsy7283Ryffpq8W6wUgovz8Pq1N8pS4s",
  "key23": "j3YjKzpSYj5q2UZhXNkE15gYN1WuKZqFihuzn5SEvRbdYrh2hEFKGXkBQMGWwdoeQvY5qZJtHZ6WFzAjFk4PuP1",
  "key24": "3PJKRnp3aENADqm2JfkW2kStWcYcDFpemmj7oDQcrPtggMtWZvrNHJXvHjdPsSrGFerR1RAfhuYxmPfAE8LsaPpu",
  "key25": "2DggjXibJpsjzax3zfhAspVi9HSZmPfGejbW8hdLQ5ukByUDrF2tBsz1zTWBfJxp33Dm1ttuqLpKvav6fN2UE7m1",
  "key26": "3fBgFWkC3SW42pJGVZxLYKBLu9CLsf5uPnJErBudjz4gAM3HJ3k5iLvgcE7GmqAQyYHY6jER2eh8KnpNfDKLZDXz",
  "key27": "GNYiSX33unQKogtfxhDsPpVeMoM71o7tMRma5XaZNXtJcPK2JE3KeGPBVAYJjX84qHY6Ld844mETi3CPryBJMxW",
  "key28": "5PC2bswarPKGSCMHAtH8JGXCkev4T7xxN8M1vnz9z3pwSbD1xFH5Dv6s9UtKNoLzXpy75Fphba73eawc3nTMsJsZ",
  "key29": "5jbXmzVrKuxc1zfWvvJ186TrvDwwqeLaxYdhbjVwQ8Z5ZwDkq45LEPigK3T6QWot2zGMLu2hZ4hmFgjRiQ42rQ3v",
  "key30": "4rmWi1y9cxsSdUU3a7gZEr9b3daDBdYBxuC81teArXh6aNwtdHXsR887L8bbUoRsREjBbq5f1an1Ut5Fn91DFNCF",
  "key31": "4Ubw9TAZ4XvYXPGkRmsJzUep46yFPbT9R9GMeDYbdXRrjXJBa6UCh3nYQ4zPxv7MTvEiX4H3syvPgin8bcGNJ2Cd",
  "key32": "21SQDhMdwhjz9RYFraRtVEWZBdBasWe3h561ZWFN6oauKUJvBYS7BZ2jiZ2jT9TJNj3NodtQNYUqqULWawn4AqD7",
  "key33": "5pqnZeU4Ck15ERxH54U1dGeVuUrrmp3ydJ5t6fKwoZNK17PAqW2RStBckrHyRna81kaHEC93ake6jPDCvyiRWHFv",
  "key34": "CsQKjzd3PREwjdcEYv3nG4HMMCW5nyjtcYkUFRH2p3VvUm33LSGqWnhXsnEgLpKq48v1Awraj5gbZfTF2Dyjbrz"
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
