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
    "5c2BTyiXGFEUeST91pwvbDYoNyRETewYv26cPap3B4bT79X5dMW2jXZmBQ9Xyy5WgMLqMvKJD2ffCk4tkx7r8e47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29D84xfam3xZoKJB9bu99wY8GRvBYt5vV4pKEg5cAZ7kKbRuuV9iJuuVVrdEDKyBefMUpTSYgGmHZJRXmXpX51v1",
  "key1": "3gmpNzHjzHbzw6HNm3uqDeeEpsQ2p53BSHtHDk57HqhxNBYxmTZCxUfRKpKYX8gY23xmB8WnT1p3sXbUQY9vtoJk",
  "key2": "msM3vn8mYe1C9fgakB38weCM731sSB2UUbQBaz47ZksowdZCkTqAhn1Hf9ebjR5SsssvNKnb1cyHmenwhU1pMm6",
  "key3": "ynvKkYDHjWrWR9qwNLsCiSrhnG3xBc1PPByChJsi4nCXpHdYJp46ix24uY9vTy1yMiL7PKAaz4Hbr3qMUuPm7dF",
  "key4": "2L175TfTiBuzRGhJYtYK6B4Hvi2EUQyDWQYbGFEfaEGNbbtSeFN9tA52BAzXgZPCtwVE16Lgy4LbZuNpNMPLstQ9",
  "key5": "5VwYZyDcWhZPk3whbMcWRC9AQNcAGTk6SBGCSjTFy998SZVP6qYe3omf6KTSvSPktTP87gS2FdwQSKSpFKTguWcx",
  "key6": "33xjhUkm1uPzSHSu4TSkTC8uiwWtG6rzoT2mutwezcQkNpUTJqPsr9nSSRhYYM1veN3DdE9VaKaC9xroih4RuW6i",
  "key7": "1jbyEPoUeBUcwtzFkY7qspPXs6rz5iNxPEQARVVDzdRxZxPhJHf93G6bde4cU5HvmL8gHGEnFhkwkAmnwJqroFt",
  "key8": "5rvNXT1Mf5qEmjyGSLdRFRjYRd8RT3nTGPqQeCMqyNec85WvcU47VMyjK4TFnvdCWbw8Pb4KGzFZ9xdTP4Vq4cfH",
  "key9": "2NxWhmkpJwPKfVHB48xKrTGZ6QcKDRTznEudCd2bk3CGjqUUkPVJGmVnUzdtnGvEZHuAgYWBtRmuJWeBhhfuhoTz",
  "key10": "2f12epDCCWG1nbwcAzwvr6oyBxmhxEfVo12vXYM6frfGRjiamtfhpWkoosjfmHnVijXZNpnEWVwUHHMeMDvmJFru",
  "key11": "4REgojAcTouzhVZgL9XqREm277eFi4bEjcEcbVb7cwo2GT2RYXHTm437mWm9kWVDA15Q5j8hMMSFB77imi5w57ha",
  "key12": "3GqmUT9shV3jJoZ5HuiCZQMTnjojN65xB6S5vb3cQKRjpqi6cv9XUY7fwDGq1GLxaLkCCUTxpXfgV7yVtGrqd54Z",
  "key13": "MfQ8TrnXVN5wGtiiwwE8ZmdrN56we9q2jVk1eWDRUaQt4snzmJdUFapxo6tPtmwCzTr2Xb6FD9FZ1FZrsPwW14G",
  "key14": "43HJ3AoDR7mXoUCRjVCKJwXJ2BDLxtxqvo22w9DuGoPcYbqxyvBhywncXMcn9TTBoFiGbrKgqQWJvZnCTcS5QvBr",
  "key15": "3SFqh1B1ovn4niGwK6h1F5uiH384y9TK3KCEPg8AHVFdmjzRwrC5Usc8Hr1HLUiU2DpCy1qccvYir3mQ1waXPi5X",
  "key16": "2W9Pv9Db5yjPdf16EtJXE86LfoVjF55EF8CuF8inAMZtSWmCzMmEHYdRzBGDHGL5Sz2Gm1dLCKd3wQsryoBN8aPV",
  "key17": "5v3CmPjVPgSAVBJsXxoxVejtk6thjVueUTxnKo6RaGsfQK9EgKD5KxeHUCsVgRpqxjejG5xtQfKqG8ekc2MUyazf",
  "key18": "4JCBboWdqavqwgt8rzmaNcc3U1Z44CevyYFsuPoSuT1s6sPTYVtgMhkhnHaSVqik8YEVGcbYtZC1XwNQsB1fn7ng",
  "key19": "7rT6j9ferMS9NEDbio7wfQtvu9Kmm6Ns2ugdf3Ki4udrMeLjma7gfsE2cpVgHJTu3rgKy6QTfTyNFXPmxpx5YeK",
  "key20": "5omj7PPRxkymgvtwD7MHnh1trH66MXneLR2dikarUhdMCZP9PJiMGzJJsspBhz8T8afgtDiuwayjeKysd9Pq3gzc",
  "key21": "49ja24deatSeC6uf8P6gHR748faDLGuf5FWPE9sGwgEXneuL8Ttn5BkdB5ZNFfEXssHptv8N2SLe6ywZPE8psh8R",
  "key22": "48gjfqiHFoY2qS6Yk65cxrLGdDbsXjEq6sNqEQKdo8eMtN58fZzH7imAtebTr2LwL855TLWPTM1uDS9hacqPff5t",
  "key23": "UWA3UxjAjQcggmS5TddEgv3WpwkHr8vFr5sBjiSpFQvcGaQZhUNWnKyMfpfvfsK2sGxyszvFYofBgwUQta4xqA5",
  "key24": "2jSrs7Vdsdt7tbz8SHQDf3QAWLzT24AwKCfJNs87MGb7BRRxJ1voUkaDCPbciZ127DKRQmAMeoNXM2k71hPcqUK3",
  "key25": "2sqnXaJcWyM81yXbX3nLW76VxuS3riYZjkjayQPui44AG6cYJaEynhYpUGnL5tCAm7DT2BDMxBoZpDVhnZGfjFWq",
  "key26": "3AJKxJMpRzwzaqL86yqLyX55jZteBsqYJBLc7JRvMmL6Rixa9HBbWTsuVs17ggnXRq84U1nQhratX5GrwCXMrqEb",
  "key27": "56mBezxMqNrfYhyGAz5cnr9bjwGSCDCxT24Gjnuye4UY4CWnNzz1iBULqk91fbtEXFpYUf7hD869c1pdy4qHJQQX",
  "key28": "5Lt7KuPndXTKzM1dCLhuwrmVzLbzAcx3cwVgJfSafctu1ehTHbU3v8vY8VxYucMN9caMzxbpFTvjUVATZGUJTacX",
  "key29": "z1Atz9m3pKBsw1Q7a2gH2F2Ftn84TcGEWJa7XQmif5ZHTRyVpa1K4yaNhKKjDGBwXX8ZUCvWJDyQZuqYcbWeoHE",
  "key30": "2oDm7pgjV8oDewGD6aEkyd2MnhXCbNRmfonJ4w9RJYUHsHSuaU5S4TBLiRTpGbQSsqzHBfuTpJTHZwszR4kVrzXc",
  "key31": "2syeKfgh6VwRgxPF6oAnJ79Vj3uKFcUs1YCmbQmngb9f9h2sXc6JgoTNttCyD7NABKv7DacQqgtU3YY7oxuEdMqt",
  "key32": "5vGL9xaPth5dmhS3EbsREUyssHsnjPshSgrKQW8nJ85pqfeoUEzGqbENfCaa9PjTQwtUPDPkF9STeNyWkpbbcDGW",
  "key33": "3PSr8baAQ9YK9g3yhVQsBtDnrhNt6D6rJ4cyVY9vyAyHZQxn7AEabekj5FcUrSGN23nq183wVmENFZ1K7PYsFhKo",
  "key34": "25NxwUMsNJV5yDHE13X9hACxa7e1bNVgsri3fD2ActZJdYcbEbQiZ3jf2XFyYnGya76fPaa3xn6xNDVmHJhhLw8N"
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
