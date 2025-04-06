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
    "5vauUTooqawwWuVmerMjo52qP5BuUR8Dses6LYVngbgjTN5LECfHUCM9Ps6VSCE6S1c7GGYfS3u9HYDCvZQZZxTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvRB5y2BeWzaRLRMcoCoXJBcvefjD4rWjpyzdFp2y3VzLXuH4gnxLRuWSx8aMSY2QnpG5bsoTKyicviMNgZ49qf",
  "key1": "2Us3GBYT6bHnwjdpDvxJd7n83gAJFFVRa8dtMh967ySq9bHogwLPPJBaARBfaZMkmcUDXj8NaVBhuaw2ZJwGyFW1",
  "key2": "4HFkJEyWTY8NNQaVYDFHYbY72erpkWeZNj8gSz5XyNqvUjq9h22p1b4RxtYGHcsPhhWZSNiVFkgG3hDMj9saLKeW",
  "key3": "XPhFWPb7J6pzp95emnwh8aGsuRcvVoGEevmXTeTqbXKuGU73riUjju6QYzRWYL5gsDV9noSghMVbqidFw2maT2f",
  "key4": "5nXoaBJUM6ziugwA4ZbT82WqTdcdEBYyy1SxQWhNRbHGAagcc97DTKBS6keB8rEQMRDM2Zi51XYFwWUgNhE7eCN5",
  "key5": "59vfcQAX6JxZzL2Vay87vVRmrAQ9bkocr8yYZRrCgQKKq66tEuYgTjtHbXD8NLUq2ygy1aCy7jWS9HazqgEAh6bQ",
  "key6": "2zoMVgxFrqGBsUhz17n9ntz5EpAMFzfFV849Fu49AfZje6f3ogEMjturhs8AbvQ6kY6yb4yazQ7Qnv3bhgoJPP9b",
  "key7": "2ATLRdPNvpGHc6yd84TnmHGXMt9g6hk3hQasqUAAGPKPsGFnrVrB6q4RKALWzaAzpPuTWCU3pDxKEeoA31wnnZAJ",
  "key8": "3CRYpkCyyfydUXcYk5bWoGYhcEw88gwZCNE6pU86o454rKSVNDc5a6QgFaZN4kEddK4FJpsS2N6nyRzfJWMUDhC1",
  "key9": "4RnBxHd2WJnZKytqdDV834ppBysXtGWbpNH1Afcapog6ugRr5MoZ9aRHrhvB8rPUyPX4cyUw1c8Awp8gchfdRBA7",
  "key10": "4d4qvB9SfUkDufu539X6fzuH1jBouFXLw3xFD8XsjBNQKoPAHKPmm6SpEqfDzZtaJmzPy1q2rRZGtkzRXM4g17tP",
  "key11": "4gzJjEffbp1eL7wj2aGhN8F1D7R42Bri3fbM57zm2bBY62J1u53zFwzqav7GVgFyHHSm9Atczzf9qGZAL4AP9MqK",
  "key12": "2Wqk9wokwrhWuSJ6AETqvwKoacue3vaf5TJrXKbhpu5HVBL646Yq3EM3anw1ekHRNtNtpeTHRKrm1BLjR4fyUtLw",
  "key13": "4soQBhmNE75xf7A9fhPxZJ1ZDf5nkz3wNLVKjTJtXbvXuTuQuWPndf1eZZgi86WsGZFSuePyz8n3UNDEzbCCi32G",
  "key14": "123Nqj4e6hFmeDXria3WNU5v4cPdUu2BmsnYBdU4Wpt5XK15LUdY5R95PCY4Vvfhtv4WhM5HDaQ6879ApRFdtYYT",
  "key15": "42ch6YJCNDDmSvvM7toXDA7HiB8evis3YCk2kxsAjaXMjsPfVJ8nh6jsn43peSiGEy3d6rZxqBJHKCptmV79oMXG",
  "key16": "4BriTHhpYFMdgurCuJXHrjQGCc8r5o8i4nN995ELDV2YF5rfh2p8aU27ZkTasdH8MC2WnQGkZsMgMQXLupzjfqpL",
  "key17": "62cf4m4TcPJ4h2hSWrrVTTAiYVJFhbcqkuXtHyRfBr9f2Yag5ZsavjiiAjGxks1TJLgZAqi2wKDHChTVo9q7LiJh",
  "key18": "4YwVZihDypMb65NjoXqGym3YLgmxfM47XhFJYFe5NbnUYdGuayc2YefkWPgYEEWFzcmDt1EaqDbKMn1kQHFqFKsf",
  "key19": "4zm8dy5zfZoQtcFrJ8hm4CLXW4K6hcYEnt6rbFJqB1yDRQoZ7hKgrV1ve2rtRwkPixPRkHJkvSCUUmTRRiyKCKbt",
  "key20": "2Avtw8LXbqwE51fxaArp49bAZWxwDyUKNLcHj8FbMJXvwJgUB5DFJPpye3qRmeQ6HPjuw9WAwd34okG8DAtCdTYV",
  "key21": "4b6YWAezE2EJ8XAbVzE8yozqJXAx8b5UPerQWAzbnHvjvTZ6JbKsTL1Lb4ti2aA5a1xUtGfcy1yprU2kWMx2mNZB",
  "key22": "3ntaH1XyiQwGBN4M4QuALN1unEEaVF9hmfmhxHLjCkruphKRQrvsosnUDYY5AsWuTFJnMvjSWHVCMvjCEEoAMj8e",
  "key23": "3EbzvZrp4nrBgFctZLfrgsarUJmBgZP9zPecvESzvpenRgQBjJVVbjhvD8wEjdcUzbQeH38zYZDNyYQ4bxQrNbeg",
  "key24": "4dqnkk8oUL74gj6WbMeXQLtLNV16NCz4bBAJjNZQ1PqUquAu85xkg2coMZXDV4bnSh9iiatroqYbR9LihwsaTrMm",
  "key25": "5zYKp4QtTvH1TFan8AvtphGnfHevG7WVCk941tczpzgSWyi4JrF9GvSHPGnnqH9eyQmx5QBnxBy2BrCTcsSFcssw",
  "key26": "3Q6AxSxXhASUiViKS8KurVsdypFB19qvB153iXRh5Abd7dUsxWa2sWZknUdoK4NQCRwmC26K62rEZ1iQmDXfwgFW",
  "key27": "4JwoZRLVRXod2EqRPUTkThbqzhrkjCcq9WJnHwSirwj85fTpzKMHbddesHkmddwvsUaPWVVhCJ8kheva5kccG9CB",
  "key28": "2a2worNhduLaktgUciyvPrQdmKUmCts6GUsrM2trQRM4UxVMBNB3PdNvUxwNhZMdk4JSXGvi6123opdGWJU6hPYz",
  "key29": "3RkuJBRvHnmkTY9Wbf1hzPPeqqwzybwAgxUjvbuvqJu9SPo9p4ig2zKjzboeJvuPouG1mJ4xRgapr9UJvKtoLrNT"
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
