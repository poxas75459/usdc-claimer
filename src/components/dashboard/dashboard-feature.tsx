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
    "3W8uhKGEAMstJt8uCuQiUS8rzn5xVJc6ySBFR5GojcJ9PtFaMJ4zwTnRbK5gNjrY2N3p39evHVJz5GyYiqL7DYog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y1Xwm4hKUQG2WPHFm2uXYzx7RbCWX7AzjYSsGthVJyQNfqDJPt9oMXTw74H4MEygKQugiLUfyid3JxBLBtTdCGR",
  "key1": "5ed2UXiR7FX3U49NtQBKKUBWEVBfNyRbKo85NPFq3nY6wg1NDRintih11b858P9Q7HdELMT9UeJ9LcWVUJAFjXF5",
  "key2": "29SfXom3Bx5X6noGHFEvw12c4CXctWUhM67F2M1vWeq6DPE64YjGEKxSuCw5okrpFWXrkoKm2qbLn3FhAUXDmm2d",
  "key3": "5wNeM5Nzrvide3reCGqZ8f5ZafawQHbU8xZyphTD6JYY62sRSJUAS1jc6NZkkNPFMthHXJEJEbtBpG2GVyVSLUXv",
  "key4": "3rDooS41bLbPf2J6WV76sHTP1QbHgKMtWiSsxRDdxDFmkHvcwWkFceq4Kh51fHCwhNQT6rStc7PV7yWPuFonKv9i",
  "key5": "3BNPK5pxuMSuCvGqzMqPNZWS5kpe9qsHPNggTxQFk6KmjEZfqw6RPQnZNFWB6wj3cV5czE666xoyxQoKESz8qn8a",
  "key6": "3ELUJTZKkpdgXDQVUkX51jK2LuHCpGkzyjTkjQL4nwQA4rYQnFnP37tr8tS66Fx1QAgJ5Yb6upQfkgqv98SKUHbF",
  "key7": "5ajgquxa1ZSSwQn7mhx1ebYgTA9USJRXkGxRdh9fNMUX1Yt7MfZmy6LeQsMLAR6D9JqCXzbcQpBa1JhvvtF74ueq",
  "key8": "DoWMEgQuhbGRq2HK44dZdBztDszt87wEgvuEqbsqnJxapVirWnHt9yFmkQQmvLPahHdkQinCU9eSxKC7aHYCwtc",
  "key9": "i6ZmMMAXEMpjMQHfzMWHKccKB8ABvuLW5zWwjvHVVXCthPgz17QBWFM3X7SJPqBKKZBFVLQvT1DqeQ9Z78iXZZw",
  "key10": "3nwYcGcaAw8grb6VTp4ucyVr687o4aCSzJBxTRvFwNesJenC55sQDEMLwCr5XdRY5kHzNh2pe1No376CwxJKFnDC",
  "key11": "4jfsM4LDNHE7EUUKkhPCUKyra3spYH7w5LFEgA7UWPkTvQRoEspCTPfo6mrc5CU3sHUKJsfJDzXYpohgtfoCT1eg",
  "key12": "3aD4c5dC9gZubprELg5sFTxXqFTubqj4tcL21RJySx3N8bAuomRVwbADHv7xWnkztb67QL88UXv7J9PMLbnixSUJ",
  "key13": "2ydYyDJgqaxmWP5t4NU5qpWtMnj8bSB1sDVDnCK7GJ35T6Vna9Y2VmxdcrTciUyy9NGfWE9AcpYiwyGVEiXN7mPT",
  "key14": "4JvSAqeTHHTZSYPwrjpajF3RtVRtBPPz3EGrBWpNtA2JsmkJB4zhPipHPwyJ7GAYPtty9qxe1e45n2fk9SzzZ4Jq",
  "key15": "4Vy47uj89HHaztrLPsCdEwNAfjkxFjAkdLSFrinZ4gjprPsBd4FnP2EqWt1UDiLxfesZggoxHverQt2BB5hF2bt7",
  "key16": "4sAMf3EU7vsVyeKXXpPkeS6rr1Eyn9UMgmBdXjFJ6ZhSmjgZmnZQXGynpaziQUv8AcpKLFFdsDogehcRyde2uKg9",
  "key17": "mrRDvYX25jBmUE9x6q2nPYYSdjrh12RP8L9dk4nuNsqZRqGjEQeZZsH2cLeSWTA76aM9VWmjVRaPUNJLtjgueb5",
  "key18": "46bAH5URGptzsQWG1yQhx3boyAd54VgzEdjwcRtqsYoybJojHLZxxGbWJZUFP8ZvAkJesZWG5z8ttjTnsSAUwWhN",
  "key19": "2EKn88Tb4V94qgweWKu9Po75whJBv8S71a1k4q87k64j2DhjJGEimL7JamHkoeka3Gwh4xf96GvaGVizKjfM9fwD",
  "key20": "5iGdSQ9oMK5agHfYmfa2Jvw9sUJBJJDgkoyiibtPbASZX7tY6ZyPDy39aYJA1Tq9YBQvm14UVjnXVJCHHQseQrwq",
  "key21": "4gaw6LiS23bbk7Buwgu5UBCqBmvJwBMHYs9KDHdrbrV9QqZA6dtgDKMupppCtvSwJP3RpfYo1hovz8gE9t4WM8TC",
  "key22": "2uD9mm2fyuYetj6YX5NFsobvHFVP7gQumheReinrXjd958khWin4LB9spnN14mb7xGbtmVyNfgRU8fY54WFTatw8",
  "key23": "4riAmbZwyQKYn4cpmhP4558ZMPEEqRMpoKFk8TA5Pg5PMBL4fNuUDoSZ1kYtKPgtd8D1iN3RnVnADhNoczj8Rq9n",
  "key24": "4x8ayoWBuc6RYFo92oBCBomWZkbzJuqM1Nyze3fc3kbrWVViopUe8CgmeT2q224m5XcSg1jGLitJMaUW2nJrPduD",
  "key25": "4rvt4E6mAqGYjKRX1pEyEwEGAxjuz4LbP1hoAqDHhBkv7ZM9JEmyqJ9wmFThMXL15kDcwrNicHPgN6WQf1LWqvzT",
  "key26": "3FQ1hoPU66hxAXi3GvRAswTM4SPqetmJyeWM4DhoAziBApq92HikubNfawLixnHVeaiEZWQp1hSJMCg4iX2yEYGA",
  "key27": "5rDEuQBQ51PAHzK296vVgw4zhVsk32e6ZmsAbadbLLEM6sGhEq6CWpDc8RjeKqmQEAJBvWGJ5fxTSNjN9aYJEGaa",
  "key28": "L8mt7g3Wer2Cqn4ASEJFb3HkSSV89bjZsfDJ8PviRdX1ez6NAhuF8DmBbCBGFScwRniLpybx4NJ2YUP2hvmoWNo",
  "key29": "4P5a9An22nEQtNb7RDYjYrSqxMmLMnpUuDudJXD3vZJjg4Mvvjjc4ASPhMuQnCSfckU4n1E2qd2SnxSaJp8zTSMf",
  "key30": "4dYBAVJ56AExh4HBZQKcBUi26e5StHcuonxKiJ9b5W8iDhH6nNwyg96rDoDBETYq7sL7ryaeC9ZNncMnxCoiT7tN",
  "key31": "61vD8oa54GF3qHCCyLT1TAgBpBBzo2ekAiRM6sZCzsXxKR9s1inFBJu7T9U2CToEbjyCdDoZWVZg5ekKNYp1aSGz",
  "key32": "4wEzQHcCpRVJ1jJCHMPBpP3RQRfUpZ7dsZRTPbBCcgKGki2Rx1EM2aQqHv9Xqi4vkxHGtWyXw9fZsGDqFTdszUAg"
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
