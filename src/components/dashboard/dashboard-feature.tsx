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
    "5WhnUrZfH3aqGkhWzjJ4ztvPScp8ztR3noaatsdsBSuyYKPoAJLHVz3FJSAB6pGvzRMMZe7yRwd1nkdcQjEHGurS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iF21vtKPndPjimi9wDhwFhx9nUcPhJXBTKmLxsok5oQoH67xCBjUiCLKHseian1yGhGVbaoSrDYVCJLVQyxX6aH",
  "key1": "5ZMRRpJg2onwKk2o2DSHYE2n6F5W3MyiW2jLt5GgZAJY73YvDt6kh9vN8PDDRESQmGThBUYTrDxBPR5cb31Z87Ey",
  "key2": "kxBphHh1tidg4v5vfCE1UKHg5zAAt5xJbinLjLhm3WQYQPXM8g5ioVsDjcm1zmdz2s68hA7fhYyRPbTV9vqkBkV",
  "key3": "4rxRK9Ph56KJsQxMZE6eLcv7bjYexGDtMmHrdBFvy93nnGsbJMwozr46M15nHJTwzvfnRFLrhvvM87sf1PF3o7yu",
  "key4": "4DnMqEHikcfiSrmhnHAEZevC5VxFrXxkAiBoMxP4fEoin2RLVg9YVWpAMKuXEo8xA3Qv52eyjUTT6QU9SsNR6Zje",
  "key5": "41KH5MULozCk8nG6BJohELv26RGj9HSvVM4mEYkBW8gjLSHNBUeerKSSHumUwL4KgeiYxDSzKzhSCqj7pq41xSK8",
  "key6": "4pyrreuvaE2LximNZQhYjwpLLpqNZoesUxy3jqHFauK9FJ9H2LnM41vRZH2mjZKPUB5t1ZKn32cVPaY2SeJPqZXB",
  "key7": "29xDZWZh2SoNbQvEFsqigfSgwgpQX1bGmhNqPjGwvas26LryD5S75NFuM2X2yRchksThgvYg9KZrQ7cuEZeaxGoV",
  "key8": "2dm1wECGJD3uBzaPb2Dx5KHFRu9b7dggRevsFvvFWSK2zckZXgCN2YbAf7WDn6S7iz29ovxeAFw2KzLmYE7VM8Xp",
  "key9": "2r7AFwnshR3xQUfEhDRaMUQWbdzEbTyaAxV5zhFiY7AC5zDktPdxnJKxjyqPf8FdTNoujpBmpsF5DEzBzSic92PP",
  "key10": "5zNJ45jSd8FEgSfS2rbGWwmqpbshBVVPQ444vVk9SeJKR8HokdzhLpLS1YTbicDxDb4YRP9HuYqtejHcrq6AMJ1D",
  "key11": "51kTLurq3sZ6nRard9L1daGm8pxw45vqeqLRN5KpXjmy2TVNtbuSYZP5CNbFWDThkiyX5rVAtQUSCa3z4CPYFqGy",
  "key12": "amPJE1HJUm346rZCF3mcY49JB81vmeeomDgyRQfd4aGJ544WdWeDtBNCCj83q34VzKP2bDyfWvAJmJfAUjdh6RR",
  "key13": "4T7UegZBTS6BxhxBzrD8PA4CZT1QcRQKLSMGtpxo7thTCtowew9JExZykm7mGDPMJdPBApKXhaudZr4BZBNdNjbh",
  "key14": "BmsFfvzKwfKifjRmg6Psg9jhq6tfVyyuEt1KLThHxezJRkjbcFExPQummNP8vuNz3bgAMwNYsHt2r31XjMQXywx",
  "key15": "4w3xPaLGPaXLVHbRo8ajWak1bKP3D6mviP7B7bZmP6Ti4ynKKT4unt1BSzQ9yJWjTR8wEaKBvnZahkh57D8JH5DT",
  "key16": "2Rw7RWwKjdvSxYBNYRafV6y4nyvD9uvj6Fy5jWLrLnGki9bQVpYLycveaD8pk136mJ7Npwxq3qLParSmdb39JHt",
  "key17": "2DUAgHVGomPQF5YHYMXHJRYsmvk2zu6vBP47HSVb37yqecqTmN5Yn68JhTQ7bX5PYYuy8LihP8PJBs87njTz3vmM",
  "key18": "5AMZKRa1ypwwJrCHfHg3dvBP9U8bTN9o8faR5TRhrpfvS4RSjmSN78frZA4shBAHajuydAhxjAx24CV1PYfgp4ns",
  "key19": "54hVVfhrpcssaoNg9K2RYqfczcohFUP8QDah6zMYSPYxZk2NxgWdJ22TLLyMHvrcEMAxqpFi6T5mdQNxfQF7HPDP",
  "key20": "3ugbhwhNiLgRtbyjLCe7DottxGoCy8byvsxfc7Xo2iaz8kvbib8U6cHgH1PXWeo5XAPqTzecgQjy4gBqVAEB3VcA",
  "key21": "1aktiinjJBGe6TjEpyUyd6g8Ucqt9jHnL75UcB2L1xo76RXztPDSqZtVWGzvC7sG7mfm8GxT38NX5e6FHH9PZTu",
  "key22": "5hv1QnTd5zPntkbJadRahuBjx5THptdbKFnd831rAz3MzxKSYGZuSd48AphLZFvNn6EBK2Wsh9tc8BrwhW3S69zn",
  "key23": "4nN2jo4Ai7GEt2ZNT7Ye3rFDbmzvmCALv7ruQpH9R4VrndGCidj5EUsSNmEaZxT1EXd2YSZTAFej1XjncetdEUgu",
  "key24": "35nKSPkPjWLnL4GWabezVr79npy3WFSNeMaRL8DvLx9qvftxZ1smYnfXdALmuYpYLqVk77oQkfeGHCi69MbWY1wc",
  "key25": "2e772dV4qRywduffcDiNXE7da7zm9f3AkLuGjT16rsf5oeRcqwBhdwnrsji48p7PGet3mMAeZFhaokxW5pi773Ub",
  "key26": "5qLko7ucTvR7Kf3mULBUfUoDttvQ5HjvtsDs59LCZbwSTDF6WcLQzCsCbxBjkPVZjPuVFe3s3dhThzmRX3mCoCeQ",
  "key27": "55Wk4qHfWQ7PqBXZYAjXt71XrQT2q4sBCitAbkemciKUXWpfJg7B36yJASpraRZm3Twf29i9EAC15gP99A7DGFQa",
  "key28": "25nps5ExPazk9o17evSYGmxND99NucdpmfV8zCL9wcDNtGCsi1bB4gtUtdkKGaGQCqsyTBw7TGESuxsNuVbEo5pB"
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
