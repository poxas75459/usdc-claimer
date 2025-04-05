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
    "5JHaXZnPnY1Vs5HJHAfow3V6E5J9oDRRNyEqksrccMVXwjtLa4hx2mVD3C9SiCTQcsTxj2XAozPkLvVGNDTQgPsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bFJwMDSoTg1Anv7VcF2fmv58bnZiuYgShrz5sZWskkLBhv6uwLG2J9hQ3jJenPESUsxe3cgSkfmxy99e839yZ2R",
  "key1": "54hZkhfnDuPjUgsZ42jr2HvidYrvQvME1dywBZgxwzX2qpbizbHPm96HN89ehXgCGc6CAnwQXWeR8DKJS7dSqpjL",
  "key2": "64kuAbogYGeRVhJr57hK7RaRKXdivDMJnYu5wTpnQucscjap4xnTzKHtTHpeCDjz2GgXtj1Nf4MrGuBeg2Sdqb7M",
  "key3": "29UkvK8za6shkXMJQ2aaqw4tv56rrE6pEHn5VG67sq7rxyLJZXsrj8gqaeXh4HCa2bPHUpHwWLR3QZqKRn9T9uda",
  "key4": "5uXbPyXvqD6f5uLK5okrhnA6c84SPAu3yYS4di1BwhcDBfS6nq98TMToyEdpj7nzZWHpjZBcy3G5PctEtwQXvzts",
  "key5": "k4LuQ7hXk92xFemMnEuvEn1bXs5QifwgTXPcPY5SqYqwTdhAdBLPYPFYT1V4Ntt44frWBKjNkmi6bSbkTQnVoS9",
  "key6": "2jFBwpeQ4ifJUNfo2f3pUGB25AijVwrrr3f5P1QGGdgiDSG2dpRx1BQXcnEiD7ZZ8TD5g3JHtuAuNeKMUn9qDRZu",
  "key7": "3RD2wg8VqNc3W7ZBjWoHJwsPX7mGKVcNYeCeFqPHxxCLpJAKvWKeFDfWXn5xYKX7G1qCYgajkJWsqNhntjNJ81ga",
  "key8": "2NLXmwn1QnLYUeMHgdRZEZR9d4osBqApZ5Z6rRyaoAQYEu2gBPCExq3DVZuU5xqkkjzj1K3tG8d6kgerQZLNZGLH",
  "key9": "wssoWojgJzFByc4PzNH7jTc1YkDN7jm9EvjuJwdKk29nHzDRse3AqCv32RoWiX1Whhy9X1JfZT58cYwWUGcWy6B",
  "key10": "4UpjHng54YfpDCUcS1jfA1oaP9yc5JLVJ9mtifNMRDnvu8kRSvzfw1vjajBYvrW1F79TQvaDGzLuLLREW1NZd6SY",
  "key11": "2dDyirvuLs1BycCXs55nzxEdFhUa2sTuXzkAxBaRmJWGb4V7fe9tyt3USrs4BpWHw8yGWw5pcxAbSewHR7jtsWVR",
  "key12": "mg9wSKCsCPX4U2wzhAAQza6tdgKLJZdZYeWWjrhGue9oCRJfhrjmqoRcWp3t9XgteqScQZYU8bGH1i35MFEvqNa",
  "key13": "4YxWXUQAFtZyWVgm3vMP6CAugqeQnTDUs3Zncn4UZ5oB6tG8N4zdhH56ud9RhnT2uH3JbYiPZ4M78E2zZusdtfUV",
  "key14": "5CLbfKEaw58NyzdPZpdQtf5fjtjd6RFpVLTds2vCDQgf5Sz3TafCyc2ubfMFS5Advrh9JPL81So9TSdx9y6gXbnE",
  "key15": "5Kwe6wLJ7ttfZs4xRgvr7e7DBxgBAQcj7xFRSanqY1tLdX4d5fo77PNQpMYqrmn4FJnVrkXkQuF3iEoC3oMQRUus",
  "key16": "iXGkS3zfXhJj2XZwWvYLYNeLUGaugA69bC5cHQtkkyUsrvnYsXw3bNkrguMC4iHP52H4pV9Ggb9L7dCMt8hEZzs",
  "key17": "VuMbduyV9BipAtZibFRoVTYBBsySnZaJAG3aw2zvYjKKJN2YM5yiMvtJmhQAkqgcN1rpud7ehSuE1FWwNtFscFS",
  "key18": "46vYPjdhxuJcBatrVx8heZXJJu75kJaavKfj3okpw1BhDFSzt9xh1up4PUynDpz7LfASot3uhXKBbfwcePMiUxjs",
  "key19": "51HiShju25tiHMkvUVW2LfB1kXXGjGfHLufRvZwEi1CPkEurPX2KsWg3UDC4fY1kbrJTTT4km6q4zNzW2TohCuMj",
  "key20": "5uH91qmBEYx7GRTHB85bKJKrWwVPNtenYopHsQxfoGKQEBGvdhTSABbg6huAUMJWetLrEjLLvnKtouUVzHB1nuHv",
  "key21": "3gsuCX1cwtUtfz4ZBdtKdY2RSALhcEPRtzKAzVTm43xLPXWoroJKN3y4ZKnmkf5vxHpASKQPVtXA78AsLGXugMhH",
  "key22": "5eeaD6VTtRBCEahAqe8tkNYtJXCmHvYorJh549zvY6dBWxgTdtnvt4aM1bWuq3jDPXHgSgoFRNHaiVfDu89pHobx",
  "key23": "xdb7hGgyiZLE1rbqzadRjnydvysbTE57ppfBPzKjEKEoURN3cpmp5ZPHN5EhsCZ7JKg3gZfjubGkra9YJ9oQAM7",
  "key24": "3FR7MzBsBdAM8ZDJpyadVKs1nYShRKz6J8xAQXYhB2EXAa5dvzvFad12ye3W2Z2zFdcvzGTA3L5XQ9wjEngBFPjW",
  "key25": "21kAEr6G4nWCQuAWR1xXENqRQuvgw8fc1fAcMMxkY8fwjb48QcfVTRnCsCorPiW7o9EsH64u4T2e9JY3C3swpk7H",
  "key26": "4Uhs7kaqePGoqJ8baceZGWbtm6dGZhVVUXicmxw9xbNkPmCPUij1MDVV4dQEWMUH2p9R1mJ9WaBytuvwiS68WefK",
  "key27": "5YhWsComu3vbXKAUSwGkEFxEkmkSiUTnAn6N57pey9uvsaM3Nn4BirS3YPNHyhWuVqngLjdCjHts7AWtVxWRn1Pb",
  "key28": "38MBPw5i8pH1MzDyqsCnUcbEJHSiPWBH7x9H6bYZ86uPzrDwtSxP7V9M6JmhyeFTCSaKsJdXfKwrdRpGq1y51MEU"
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
