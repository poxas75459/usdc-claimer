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
    "4NmKvkTzWwhDyBL9L7Cwh1rYmGNsfqVxnjpqcJe8zQEtSQS81bq4utMohPnMwVKFLqs65st2tx8scVpe26Mcwv5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dHCSM7WRqtGZaCwJSXF7aYKW5oLLu7mHYwwYm1Hpt5k4ypL2fi6wmGLcprwAP8xR95peqvViPaBMRo91LKRyerL",
  "key1": "3c2puFLaL3R43TFt1CMUsy5rQt8pX8FdXPbSeGa5R4m8MhbVrwqgZhA8KP36aqvYpmyDSN5ogNA9Z3nMhC6T8S2E",
  "key2": "3QZhjGYMNFi75Ds79ChkWaiyKmvQXdGMksbiNNSyzaZ9A2Rw5ufHXwq24qyusH3HDXa11MTYmRT5ET1TpSvoyCQc",
  "key3": "24Mhqs9o9drv9qAU6oqWEMURDG7g117c6nUAM3PyF5GVkpHYRqCiDqcqq9wD2YMyMovhSEoK6GNBLBSDuzmM3TNm",
  "key4": "5kMA2i9JnLAixg9gfZDhiDkEgM2JbGznkJABotXWuQh8VwkiuLhk5Vm3iD99ABNLbA8cih38WTwCpvSmqFcHDWzz",
  "key5": "2Vuh1sU3MVmqs8j1frPitjAb3hNBsYwHHxQRGppEGfkB1zuYCHbNWxA2UBn9Vc8DTtDArGRkL4Lz9DXhCTX2pbPt",
  "key6": "Hg23UuPYG1yxVzkKDbed5Vgm2ZxS2VvbM7WQHmyJP4bNNheZtdakBqe2C3mNBq74EUE1x3TXBMM8ziUJAciuuKM",
  "key7": "4xpBJn6Yh9S9rvmmGFt9pVpipNwU8jqGXVBLqmftCKKYoPbxZ2eDvSjAmLAwixfHcvhN3fxaUqK2Q6KpapMvDnhd",
  "key8": "n8CxpFHH44bF2THau2NvR5aB8XJE67TVhxWYjLPc1CTw4uoM2rBUaHUR1ZCJKCYHbqcCN3re3yHyncyfGVJLGFr",
  "key9": "4sYtiwMRJr23gfjZisfsUzQETbesoEjTcrEtw54N7AakDkaQWkzDF6QcMSTpkeDdwdhEQzUZQumXDFRBKuNYxwQ3",
  "key10": "5swxW1x3vqFbzz6ttTqymkqJ3qFEVPCqJrtBtUxz7M6p6XE48PyYTQAFoYpwrwxYwGZfM5eVGfRyQzHMS3KzS3W5",
  "key11": "36Umz4oQnWxkkhm3YpU739u6KTwKCugs8sM7wvHzrtAFr1B1GM7sAWPtehmRVeiFnxmgHc3cX6Q7SN4oi9n98VKN",
  "key12": "5yvTRVnNDTRW5nJ19r9GLAh4J42iSaUK2DqVwE3vjbV8DB6BMRmPaM5ienp5dwj9PhnsoHMkLSQ8EfH3unaXQsN5",
  "key13": "31sw7TSw3YFdVJpV1SdqhXcNzU3V7DwHD9fcngkemzUDN2o7XnzATb5pmW45EqULx8YNF7TQy3txHH86i5PnWHkk",
  "key14": "UpuMx9joXLjZ4uis5JB3ztj4RnUh54q3Cfzt4swRjf4DHCVxutipqkuyHTibTU7vxo9EyW8MbhKr8tmdS726U7T",
  "key15": "5KvEbqWk7Wu8UtAZCPdLYeYSP1mcAdXk4ggPcFVahFMK9MAjJtwrNvqy7DybexmbffkJPJAHUGjiBx6SfK6Q7HBL",
  "key16": "4eqxMp5EC7X7ND4MmUu2fwAafR7sS9JNigHAoAJnG34AoLh6N5R7DNhb8wQ8otaVgsQNMxDjmp1jz2uG2GkX3QKT",
  "key17": "4HsjccpDjiLwaNVJNTVr6jj6PSdtxyBQ14hJ64HyFHqv5RTTWeJykJCYtkeq3vZiumBM8e1vuNvsGACy5PPtqvcr",
  "key18": "WJxsq1127UnZUQbKbqCwMuW1vsRfjuAkNST1ZWdBcHgnZnDEKF4gMF7GSe2XzK4TXM8eFU8CFj4hWsby3e49mwn",
  "key19": "2jNrJbqxuyNmHLoKDux6M7ZDKUbbxScc6qJVt7JG5q4Hk1hjfxtEi723EGT8YnypSGHgC9xYpLFNqz1Ma88ZQ1qC",
  "key20": "57gMwnKWKwVyGtMNEN3YwvQ5CPbMsygF2x7P9qLNv1ip7eNfwKqt2NVE26NShr9qgHAnTpuYM2g2yGFaNmFkMJ2Y",
  "key21": "3QvFb14AZf45AoXd8G1dZwkuGpgvYkPHEt8qRfLUgn4RWgZPFm9boxRX2ehisLewBhyY7zAkjqUUBrD6d4hpHtFR",
  "key22": "36gFq5nEBmiQ7RWSopedyz3TUy6WV62EeLsn4g5PbYtYgvodqcojKrwmsXL8QXJkZuUtvqWsAghYfoHmDEmtxDt",
  "key23": "Etok7wsdBh74yUz6bbFv5ZGhmGH2AuDnDCCAuSChjuQ52jBwHsKCCM176kiyu27E68oHbU5Mg8QUBH6AFJkX4Lb",
  "key24": "3FqnshjLGdD5m4C4ZCTCM4FUh5jsD1aFw7Hez76zRgFyvvMkomAW3wxBzgU6b1F775kZtdzuL6THdC39YPdHo8Pd"
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
