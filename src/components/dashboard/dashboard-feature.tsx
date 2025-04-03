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
    "566PJ13uXU4GcezhGyv7wiS6FJbWNkZLVbyzN2cWvswxCQbrJQKDHaLUWugYZY9VaJcXd4r6G7WS7zdDJN8aymJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L12NHj2ZdgQC78s8mqvPc1QSEnUg1Ny1YJ3yqes4n2udShZ2BZgsR9E5M7JjCH5yugH8Cx7oqTGDZ7SJkF4dHnu",
  "key1": "3XHab7uhYwNu7GXtgi6FkuADyb2j1vgWLRGaT4VV647XFka6RDGqAEFvcLvtup3oKaZ9nyQZgvVNek8ywSvNaqJi",
  "key2": "Bbe6jGPpF4Zk2AbhvLVprTBqBK7TiPUbfvzHpSXNS2mz8dTXXszjF6pgG3BVU7VshqbLBPhVZqYC1pCEb1mRukt",
  "key3": "5KodQ9PhAn3G7adJ9E4EDpwMDvSJgsmBfzgB3Ekd4Ur8UbayL8RufUan6xvaLQVEuhoLtVo7UtU3QNzp2SWMfm8G",
  "key4": "4RruJYbmXH7eCnEKc6vp9fTZAfWVMYaPaBe8UcXDa9Db2pE23xR55vQnBjm82usnMN4sfWqKXgezm7anpv4wn6GB",
  "key5": "4ZBCpGoyUeM6JkExwAPZBiHQ2iy3bb7gnLZqGd7h5DXVq5vyxfSz1naKvqZ8BP2E4zSNFGwjopqPvzRMQ9uFPXK5",
  "key6": "5VaQLPPNU5S2XMfDk7AJSHht4VNqdsYpzupfYYiwqwF6HeFpi5wyhDb3KBgv98UTTwyk5TSjCkMFY8uUuNraEbXN",
  "key7": "3GTbhne7fs6BhcAJ7tygCr5Yqv5FhbS1s7kVTVtR3bv9KQwkc67jvp9VVG7bHuW18KGGHRL5tt3FEa3z98BeRJZU",
  "key8": "3mWXBcD6PMMCi3AEjFdKeAiFPQ6aeKsU3dinxPXSMFZ8nqzZUoKbssZtKVNg1jhEZ8FZjE2rSmrpXHNat3zxVDw1",
  "key9": "58bRWLKydTx5jXj3giMaJjesMyztjvEe8DaSdYK8EQjdSxJCHB7KDbSgo8n28sp56rSuCXRTABoFVF6YRqXq2W7h",
  "key10": "5QcK9EHNXaVLkSj3Gke4LefRyrnsvhQmRdjCmWxxMuMdzQsSkXNj9S7kERgWAx9Z8cuVoLMxHa843KAoXrrcDhAd",
  "key11": "3aNtLEWxxkRXnf6Hy3j6c3ymtfLGTiLx8hPyL4NTQkrL7fQKtSm3iqYgjHBTsHBj1uxN6bRUARA1mmQ8185qVVeB",
  "key12": "4a7Ao6n19zmP6Ciyzg86fvpFndURjKzT5FEEHV8fGrxgk38H6AQcWhRCgCWRNoUCo5Z1BDpDMCcQBCnG3s5wcgBL",
  "key13": "67m91vsYKvGPrAr7X5kto343ZXNPwG2VF8w9q56uWCFwUKZkRoHoZvcP1kgTLjQMGHwPGNBJTvWXsZFcabP72Boa",
  "key14": "2U2xe5CPSPmq15Lwt2r17nuC9K7U9TqpzGnschTp7Mnjmgqo3e2ehGaj76sV4jsL874z19ktHcLJ1D61VNBrRWMi",
  "key15": "jUP5SU5xrcMjHG1DbtVJWMjXnHuUr2a7BezXExxE1Pbm522WV3P7iyyhwaUAPwsYA8o4cumn2GcFow5RXDyem41",
  "key16": "qQGB9RYQbxR4QwoTGW8jGyyFBbYRpc4cv4jCbwC5KDhqyJ7XYvYncVawLTWnQZXMXKCw7Yb5EcL6nPviZa7ouWT",
  "key17": "2BC2KBWD6FzBy2xVbSnLHAgY9rnd3pmBYS36iLpXkMTFtu4u3B4g5B1BUYh7nHJs7crYrB7buAmtBKRnewFq8KS4",
  "key18": "3aFcQsL4ECjvrDtHwAZjA7cVpuw9WETxXoXQka3mnV5JxumpoLiSobeAA88bg1DKwrZwbuUF8dNTNoJcdYiD4w5r",
  "key19": "PiVaBibNKdy7qVUirygR7a2aZwnHYoPSb74HQW2zPsNkWaH6VWENur5xDxrBjA5SMTdSzvt3XMzHvT4R7uCM2PQ",
  "key20": "3N46SqdFegeci2V9H7R4RmahquHYXjvv9G5Tc9GBf9NuCDy5XqnCQBbJEsgtmsqQyAcQoWPJzqGSAVLRmCRb6kqU",
  "key21": "2EVaLfzmYVCL32hmXNGkzNBXHJFJSgdFfRvDKfmr2JvReAzLM558JudNopF8KFPpTDN3cDfTKGRfckc6wU8BRJHW",
  "key22": "ivgJ7UXtB3iT3qvHcPU63GmkfwpPLLDaLfxUTq7wrniJCCKYwdayuzy78WGXHsbQpmBd9fbnu6tGhroPwoTZoCm",
  "key23": "QZg54QA27YgZbHmStoKYkkxFiTmtgsP7wCsEZh3ek5EEJtGNvmoqLxX4UhJZM9yXvAnkLVHrA3TsKY35HR7pSPu",
  "key24": "4GhyxojFz7RDM9szhrJduPHgf3oVL2WsAsoDXPDhmriybFin63ZobSmLiLgWi4CnsnJx5CBBR3qZxn34ScMxVBTV",
  "key25": "2jgddsfBBBqFeBYaWzCmprV6Tx96NW3WP7JeXZ6qewXwcPZzxjuQkNhSmdNRXuM6TCrB4oc2cbTGqts5ogoYfcuR",
  "key26": "4vhpcsya4XvDzCqS97Av9XwxSHwSCs6yiPtok5UUgPq6ManaQWaurGe8GL34hgHdmdRF9PE4oZBWZQhKJgAfJWW4",
  "key27": "bVp9qgcaJzdqtoDipDCSDL17QwvXzgesY694wVUz5FDassqFV7iW2A9Ra4wJYmM6rCdbNZXyrykk3GH9KhoSytc",
  "key28": "LfFfYWnfUZ3DB1ddUusYKM7cmQ81v1VTL12Q53QqfBDv1KNyhQ3BN7FHK3wHe7ppAzhbzjuysKs3opaHiybBv7A",
  "key29": "2Mc6oBGkF93JEyuiAc4d3KBQ4PHq4bh2zvF5KMyaRSigSQoyh53yZf5wNWt8GQ1oWPWs3oUfnisVRD3dn59Exvdh",
  "key30": "2RKipEbe71Rwei1mmYdLAFqmzo8hJaGdyaU3UPqpP9AhfArZ3HaCGp5XPhDMrud4JrZPddvYGp4CsK8UyLdrTLHH",
  "key31": "3CGSjQyjsWNnYdWKYZiJPeAysPkZySsPW9EuD1iZoea3jZvGdibMp3GPNMbEcPJhn6LKryA7RFP6QQ3pqs9XXNva",
  "key32": "3HeqsL8Nu9d97wWXjf6zyKF6PjDWD7SnRkAqwFFuCApCxzwavxZpAQnUxawViLa4pgQTT7mFuzY1iepdVAEs6MTS",
  "key33": "3AK8se2Rrpug2fCBR5nbVW7J2yyfGJW4LRp5FEuFJxn9HFvGN8D7ZhDFh5VZ2fG2ZeSg1WrbgfDbnTsEJBDQCJDv",
  "key34": "YNcgznjooS3X4hGnYbg5HhiR7W9zc6TApZCaBedPnTt2f4erDnnkA1jkCkeum1CZSwNHFdWQ7ju36RJeZzxRTND",
  "key35": "58THmHE58Uzc3FmnGnxKXsD1aFHo5qkYS7WSYm8ey7RtVTMixqHUzZcR7NLge1Vdvm9ievUP7zZyZAeVn4LoZJuG",
  "key36": "3hQePS1um6mPpYWreiertmuhACNAuQCTSa3T6d4rP68ASJkbpFV91aMKH52naqgCncGEYXq4vFpig9s1vU292EW4",
  "key37": "2WZKTL4f6avoF3FbWAQ7MT4vwdX3ozP4ZBgENm5aG4wVefcp2uXwDcwPpey7mzKFvUz5PDXLLMoGmyQihXQE7yA2",
  "key38": "RFjHkJpffb7MYsjFcyPJkJEjQM5cS5QFfRnWDAECmRXbRgVfgkhEmucMG6DBayPAtXoUDAjWtK3geWqTWvme3yD"
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
