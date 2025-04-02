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
    "2yJ3oU79B6A5Tj45G8guT2SrU9k1Q7hiAujiSRuyKNVcaqLoi5S2KT9FB3iGrvKDWqyHkbFRQfyXGLjHptYHhaXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t7GbPhR1UXRNFYxTRGwR9yRx4pdJMjFW3FMv9TDNWwnPQhXCyRKDSndoxVCFBnVRq1F1wrn2pgr673WACgiqGXw",
  "key1": "4FRfqpiAyTQEURB6k8J4cmhmBq2gDzUbxShKxuEu6JrLoDc56EsTtKjSi8wdDCrk5zTC4YiGJPE4A5y6ssLJMqzb",
  "key2": "2zeGTBfNSt8Qi6WNKJcXHDkvZv7P4foE3c3mTQWXxmpBGTxw1Ye2DN36yVrUJXRzBJcP5STHKwru4sDn6hx8j347",
  "key3": "2t2Su3A3kbmZXboCC5ZexSrZR216of254mLVJHXMBvhhbVphaKJSWTnrgBFdDimk7nKwjasP4SPG1pkCa4bbjBMV",
  "key4": "5HXo6BTUkfCdfBYZ4gNGqWPeWx2uoeZ6bV6G7f2TNK92gPxibABLZcB854uXCZrMetn1QkgwbBrJu9PSXPRnFwZS",
  "key5": "4SStiKHKc2cQ3sBtimeGXNtcEkJF7QA1pWtopqqmz1nS1C3grUxirJD9jmvjCTUfyrEY3gwTgGXXHhtK1kSodW5X",
  "key6": "5GdqiUT1EN2PTcd95q4828Zg4NqqrnyqUbuNUU8GK9tbfUnRmXLAGg8xxtG1YCMkBGtMncUXfv7rUiYFVqoyTXgj",
  "key7": "4VZAyuCCVCrUhok8gKUE8zEZbBnmXGP8JLoZoLVjnjkKgWGv4Prqz3FPmekqFv7ouT33ddGHVsMrtpi7NtQi6WKX",
  "key8": "3dVXq2jkpEBDReQQxjCurp9w6EDm2CRyj9UWukNoT7SXoXSqNGTsdpeci1M2KgSaycQTHPC2XYZmSM3ZCQ5F8r6M",
  "key9": "4um7c8RrAJCwmQu3k9GiJQWp1cVbV4gwV1X8BZFRjVibeNk1K9HagTbTU3NDoYq9pWkAsX5LCfT9r9KLA4JDSMM6",
  "key10": "5bUR532iJH8K4G8CoWhngkp1JUm47sZ6QoNWnwnrCLetqKhD4TzNGMCC1rHJuCf7XqxzGjBjGqJa1Bnkix62z5mv",
  "key11": "33Dc54RtFwfWDC5XDqer1CSmeibvea3C2FkimnMQ9FMm6jpm15xnz7ar6nwdj1KREWaFWBxKazX5wtq475G6p2fh",
  "key12": "2oHtHK5kZcwHADCejh6Kup4SjUhKSNqsv9fxQJ7jy48rfXCVSpsPUjytfugY1TGkCyupizSjaJHYVYzLcrNewPBF",
  "key13": "3ZHBoueD5i6uq7bXJaQeoLaWrpUnR1XN7vbsMXJiFCgA43JJU7394g6puwoTKbZtii8zaMfTJryzq1YyYwVoMWPX",
  "key14": "4eQ9cXt6m4ZW8jF6ZpDJHx5bhX5PwqRtPJCP4qNK1Ktia3HpqeTwJZALTzSuLn4BGpgMbHNVJDXmEgSL5T3VsWi8",
  "key15": "23P7DWp3fBLdjb4Un3Jmryxvw1q3dHaGLpr4VGRbMQRbsf2yYTGT3hTUSXa9pKGT7i2u8H2GNwKoQDg5zt3JQKWS",
  "key16": "5a2R7xTi9Wz9ua6FnxFq46icwevUp8bo88eN23QyxMumd8rtMKbvyxnn8qRbukT3duk8Kz6CavtQaac8adH5F4Qm",
  "key17": "2b94Rq3qdeg5jBFwD5XebLDC1nrc7u8Tf1bReHm9twqLSxeesWktVPT6Awnxypad5Z9gWNz2a2vbXSsrnXXojGFW",
  "key18": "2c5rhhNtnL4qp1pY4DkmQMDAUCv2AWEECyxhNBqtYhLvG8T2E4PZ9Zna7PLopCR2f6bChM7UCcnkrmKJ5z2ZLqZJ",
  "key19": "4JEa1HXM6Aj97NerKDqmPwyqfZyKjhJdj538EnEFNpXtZyhKnW2sZzWxH8v3Fqc1pshpHNjFDQEYzAoMx7AxiUF1",
  "key20": "3XAQ4kimWaKkSYxoqG4JzcLfD58ZnCw5V8urnm5SBuRbQ5z4YU9cwmrQ7j4L3jJ4z6KWU1F1jSt7Fhqi6Q2RMTdq",
  "key21": "23gfEneV5b7heHKjJmZtzEZHodC6eX89uzQmBFk7tWU4Nrj23dAAqEtU2cGy6UDjzRJu3kSdzpoGMBWLFeS9gZ7h",
  "key22": "5sj1yjBQ9PdsVYjLoSrZtwAMGF54AXcKFhns4VXga1CaPzZpcghzufVuHop2CA4QAnXL7q8z4e1ar2CdNMdYpDTJ",
  "key23": "5twEL3urWMg1PZrhvkBJ9SKr8S3j6vDTHcz3xXBGtoVLZoVoWNhivtrmmLkD6hgMF5CZcEfR836z2dFvFfFY67RG",
  "key24": "boEmNKt8nnV17Esi4YDSAcZ7SfsqxmNQLi54o5AoTCbZN1ZrQbNMzmmmZr4DzHtukkyi3YEff3M2VVAgyP4xJnJ",
  "key25": "TGU7EWmSwRbzJs2aCamZ5qLN4881YHwtJFHA9xSSHDVCWsPKMxTGb6inBJ2zLSxNJVXr5jZAuiDN5KTrfk31VN3"
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
