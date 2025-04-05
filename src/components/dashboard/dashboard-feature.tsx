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
    "2NMnUkWXjVGcNCLoZgwWPmnoSeqkK4ofLMQnEStK2sbDFRUjz9gJ77994guv4pFS3tmfL18J2jJpb3GaXbaHNesB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQvLzEtYpT8xkXCmf8pZKShK5YNeCSBV5r5nkanWiJVwJQSiTYx9p5rQ196hKXyssok75pkmE8hMm9SXCXTvSvL",
  "key1": "4jeQ6VeagusYxMoTehYtSxB9HNssPH1gV2B9KGG4xwwdqwQLqTz2LzKyZD3SnBaJ9xYuxX1tBNkfcTZsnbg9Vtbc",
  "key2": "5DSyggNQV9xhJsbLuW3mCDFqiHzcB1SC76ZjfcWbaEcY8nCri8D71gC43Bxeo9SazcHEABJqMte22iKpjctxZuN4",
  "key3": "2f2LcPxCeu1pQhwKivCqgcKUsY32jKo65Fg1fH4zr5m3c7FPWzwSiBPNicYDT2FXnbao8mfmBAzof9LDdb5WxB8v",
  "key4": "2ECJUiWjU3FuYVjzJcm5iXYWKbLhdn64dhzVaAEfKDrkQFe6Cw5GnnJ4pfstfmAGnyTNsCSxeD7A3TEnpcVonDd7",
  "key5": "JXQVmNFv88AvkcvzTtodGA6dA5TDxcP8WNGG4ADQwMBLY9PTN3PguvsxzyekKRts1ZrxUUUxhzofqnoYwaxoKfw",
  "key6": "4DuAWmSFSuC672UhBKqNXtCix7GK9s9beDYDQs2qQTzxddryPH4JgvYTAepb6P95DGzB6rKm2co9DELvRnXXzoc7",
  "key7": "4fYsmo7NynvaomfVVPcUtK2Vcwdh8bsVk4QTDTeqEWqovPNQd5yLBxmu1fPZDtAu3XDAgEXYvaeDQbg2shGWCcWF",
  "key8": "P5GVuqrFsnpFbh3SyCquyfTDBbEf8F9xXQ9opJonnzpvzzt5GKFvkJR1Fbk6Tbk7QPDVJYHjTReewVrYTHvChX6",
  "key9": "5C8NVSFYVGzJqDJQk6SWVShWLT4XUTMAtnoyTdjL9s65gt92UpkJuuX2uKaaW8Xc7jrePFWBCsCmtXGZiCVfiu7f",
  "key10": "27FEV6HAbsZ1NQveP58SWzXBYSPZJ6RZ3F4o7csZ9jhRMC3j94MMPfuf5kKPBdfQmCrVfYCKzEAu6z2u2sfjdQjk",
  "key11": "4PqQ2U2Tjj6bgpiySCQwkh9WntiYBBcAjhJfVBy93p9QJ986PweTb68ntbkYgKepGuZoU8VJXddLY2h1S3MZ5Zg3",
  "key12": "2VhipBiBGX2i2zctEwwqKQji5gqGt5R1st7GBBL9sKdQVfwqdcvKkWfPc7gNBrcxYYcWJGD71ENXWDCxyqpfa6yg",
  "key13": "2isr9jTmfKdWCoWeuHjyt1SLSfTmWhhyb9XYgc81pD5wUidrUHmq8Y8gzFh5cdbE8xGKmdB4QXfNb2Ty8hE3hP1H",
  "key14": "9WCmrPc4bY1EaYHwNyAfy3a86f5tLrTdhoBTbDkKiLcsHreddTHJpjqKrsytwpfkto9UZX7YHbwE17vs8GAjcVg",
  "key15": "3g4xVroG71sXJbk9m1zrSEKByHXzVJqfrtcuajy6Ate648UmJtnPP9invQBZXN8TDg3bPJsQZkqFUjhuUw87TsL5",
  "key16": "z5St7MBrTXWoeZRoUdU79fjSyRy1e9aZzPzBsrcnh89TpPJg42uiEco928QJCcDQhvDzXrRqYYtP2iMCNDZYPuM",
  "key17": "4m2aw3aHQ62WiYq4PveuzZyS41h2Sb1nsF96nu6vozNpSaxLaNPbECXciDKJqo6nR3SQwqQSo7E3odMJv4wYv55k",
  "key18": "4z2FWnJReTWfp4JzkYvTaoHNEzCRPkpL9JxUsJcYSMvAKNFjkp1xbZVhd9PVAWPf8whLPVUpvGQX62BZKq6A4MpD",
  "key19": "mtmgaeR23fGWigfKgj2UsxFimJvJ5vYWvQ3DSiiGcaxrz4ZzZhDzS2ihnAzsPt5riN1zwuU29bJ6uiz2oEXuQ7U",
  "key20": "2ojWenQLQFv83hwTd1k4noZV273Gk9t2uauUDnasotxxuDdnKSEVCvebhvXbJ1ZagBDSDUHeHjkdv1UpgYuvaKJF",
  "key21": "4AwVTgjJvKsPweR7rQumrCi6bCojmBJT1K9212XDvH5MHPJho8ndHSo43T9cmGARdt5wmv92eEGVgxjRUwqe9Pa5",
  "key22": "xn64cV1SdUSahgvheCCbMntN7LcxyMATebsK1NUBuh1UCfhBxfAG8WdwSqXQJwfNh3LtTUSDU73zBn6MZT9ukBq",
  "key23": "3fxov9jMUgjgtCFdMzEmPVk6GsQxNnrucxFWint8B47xBag3HSY5ax8HzUiQiyJ7Ki6cDFfp9GRWnYexhqb32Kyp",
  "key24": "3JH59BR5cqhj2pgPSiSuZW7Hrzpw4j6FRSB1CjRUF5AHdqGQVvWWMStG8FrtwQcbUrKmsvPXnPceQJ8EBpt8JDtN",
  "key25": "4TfvzmGgtmwYUn4Z81rGQRXRXrmFTNankJnkqXyFR2WXNg5P6GjMHEmK9Lgibnw6rusFR1jTLoZ8xJbJo3b94pMb",
  "key26": "3VjAfZ4bA2MfbmNsBDbU5BieapE9AMeXhif4MMKWXjaaJNSd9hC4o3BH7co27coXmT25EcxFBZvKxmDQEVZJJP3H",
  "key27": "GeaeCtbd1Kyxvp8qfYoVW8Bnm7gizgywj5LEVnj4as16edSxQCJfihqtm8ubHHvH3nrjWkEAzhMjPypYjuHvZQz",
  "key28": "2Pf7iM85tgzLYgxxXRYnm7W41Kico91owSbzuDQ4KZxQZgebh4Vo4paf9R88VcN1qTqrBf38bPAirvcJmyT14afx",
  "key29": "4vsTsDWaZDrKKGWXMh8qcZ4ems3uTnXScoFvETt9CV48t8rrj8GEJU4BttgzTWAbsXQnkuhn6xWADHgPQ1btEMCq",
  "key30": "4visEG7Q1m7y4GY7APkYvXe8WGMY1UFENmFC4opiQbmSegUNK5iRB1ryauwJVE6a13pMLq7RYtPfa1EhPEC5EQrw"
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
