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
    "5fp18s8nm2oUFbUo86pDtKfq1WnFxoAYtMyg36V219RsjuavhU34pAnrCuAiJPGpzvAwCZeag6tdWkGkKY1nvN8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZvDKRoajuHzbFWDEcas6nL6Uc8H7bjUXMxExLzLzfrt4uHkPYEwBbtNLyAQwUXrfVyLZDY3MYFYDasSrADVBpeN",
  "key1": "MWY2evNpZyWRvePLzLzh6sRGqR31SbTBNQDTF9p2h9pjHnVTsf8LXS3prsLPW6K8NgbyHmtxfEThrz6Q7Z1SWT8",
  "key2": "Lcq9hVyX32wEM6ZCGszkpMYh3J8Yn7tLyZCYSvVjrxnHpDRQwBNg5GP9gRcPDaUDr9ieMgijkyioffSUQQVfGba",
  "key3": "AbFmgDtYFQztEZcoGVipjpM1wmH1WmREhcUQHmdYSExsChgw6XQsR9azGXJF8ZGgLs7vCaZLnmWzW5FpFP8krAS",
  "key4": "5XP2hCL8krhyMj7ViCNmK7uATcDQBcDHHu1a3K2JZdAWfoH3Pcq93WRXNtCfE58r3Jn7VcxnUHrF7869fvo3AzkA",
  "key5": "bzhZRqmyj4btF7W1FkV91YTVrxTnbnoBr4JWKZXgwkz8m5tinHrGvvjN1B8CeGWjAWe96ayLgVWvH7uohpHi7n9",
  "key6": "5jnUvGY2vvbUP7NGcfsZBhXq6ZsbDc8nx3dVcULh86dq9ndosKVjqvJkdCVXMjUb6pQD2QcTvwj4WqaRJQfkSdYw",
  "key7": "5yqFbyWeN3G2F7DvoNq5u64vxhJcvbUKUS5iRtq2nNqbfBixvXaHnbnqPRzwqZTFG6CuENYPozsMDebcPNgTe4Rg",
  "key8": "2bKGzGc4YHKqUT8KxCwZbQhMdpzFKYvKBk9whbWkt3sjgui1wNf3xPUqg3jHaPkt2DbpBVJ9JWrbpgaLxYLFqdzs",
  "key9": "2rf1H5Lbs744xZR9PJVzyKmRMwfowcKYJdcgJ2jL4x3LZk4vzPNyWmEUHF3wiAoP9K5x2tCxcRGt753E7pzLg8Uv",
  "key10": "rqaYQUWzVoHa8oSXZfVFfFYu2yNqUpYqZapaVycqLsLb4XyCRiAecmLwkdFJfSyVddW8ciw2YynuACtTuPPQ3v2",
  "key11": "7ESjDeY9BWnEKkqmNH6RmTnumz4oN9G82YEJLUcRwxik7LtQZjeJHNhLWfGnr6bTGNCYkHHs9VvR9AuV8QJP9tF",
  "key12": "4jN78ESDck57XJuYjv4bLUDHD44SfaCS1GiY5NPrkHyuZA2HdWxRHGVGG5XCsi5r85Jq6npxVHvTW9ohZc5Z9DRc",
  "key13": "3BWvFr7gXvsx5WjaCGpjG2PmP184hZp9BLx9nrZ2ridMgq6V7CCgQzGwJ5DBhKvxw98zSu5FEutNTm7NNHEbzWJ6",
  "key14": "3uM8E4ds4vw6mRdyfuQAvWBvDVQpW6oiT1w1QJnh3WnW7aqJPSwShhixWg7FHVyR6G5yaEXt7KVEkDiGhJuW2mV9",
  "key15": "KDJdmR4KXwCRQRQevuwy6JHR59e9Y2EZPCpa9ahnohnJ1FyAFyAR6WCqdgW9tgfB8aJRNmBDjqJcm522VuQB8mC",
  "key16": "2uFYaAqXaBA166sKwbrGYNG3X34NEdDMdfkmj6hqtqFHiA2aiZ1WFu3mwjgJpRAK5FyguVwbNRs6o99n5ZCdCNu",
  "key17": "nLmd6qgi3pE2mUfo3DMTMcUiGHZGxd1r7GQpBXVauRnBCi2FxztASpWmhnAG2muXtTFkNJerXAQdcRUpHzcKd2n",
  "key18": "3gaz2X1wGBBBMcaQcpiAV1BtBtA8jiUehNmqt7CpANKjuuEeEdex6AMqv2ySxAtk3f9Cj13NUxVzzQJAUmfhtbcb",
  "key19": "2yMq288aRyfxjmMaHdfR7k31tRgpqsRWRP8MXnq7NPPGVJpwVVXZAmQchWQkkmRAWi2bd2o7xA8b6PaLAwDBrzmH",
  "key20": "3rrXnBo1sYshZzgu3ZmvAsrvUnAN2jysEtZzanwQXCvmXL5FzH7KbWMSebsu1VxYD8tKBbLaGgwW1PvJPihnWTn8",
  "key21": "5H6ifMYK6w5AvtNhriakCXaEcyys3DFyFTLX3QmNNpo2MB5eJehqjWhwBDRWGFzH9jQF38ARvwoigpZcY2V15Ngo",
  "key22": "3TnyaSba2H7q7dwWT5omyv69NWBd4q1aTzGia38uVmFNtcM1nEZBbex6u5VruRGBRWAsKaD4isW18LWQQsYuYTqL",
  "key23": "4zqRmfJSfebppVmp3SDGHrsWwHtRUWFyyQTy54t6X4e6cDvMwthmtjChJq7bFnVXsjZKXWhvkcjkGUZt8zdNutkM",
  "key24": "3YwHzSV2Hs3Fx9cpYDG4ujHkz7LoKPCdd1QAWrSdgdu42TVDQewfS6KqCmxzFk46eWC6H27ui5rVmyvSi4frUoUe",
  "key25": "3TE17PLiavHAtukHhQfm2NLu6Enp3B1WGjdws4PeZzfHBdhEqoj7oALvLt2B1Hvu59bACG7xgbW9nqfAjp346CPr",
  "key26": "3sy1DR6N3MJUQd31Go5rBS8cHtUEYy63oEEh9ehkcn59pHZgH7owmtfdpuk5n7kmjzVjwwztK588HDUXUtrZBA1Y",
  "key27": "4iZATPXyVy73uPU1WiycMLS8sEDxitZWF2bBi594HoeJnmbkncHRcaTzaFccfxpQgW6aVb98ThYUt7dwiAVZrTWf",
  "key28": "5mfqLG3Mtg1Hsoswgzcu66cQj621qvk9FDH5coR3VyeoTpAPfRu2NhebZZPwBWYkbBw5DAsypU6jdRCx9bNCpE3D",
  "key29": "3NEPXrANS75gRtUY6UabwRxwbh6rBqTp7YYynfEqueEj8h3yUh5zpoJmX2WVmPw66YtW6qDraduNWh4jtNYAG3zh",
  "key30": "3TayUsvFDjrzLrSDPEQjUKCvxYVJH2GD9FFenqFrRhrHQLfywWgYsD4eKjgcVgmZzhKj2BiTa6Egc3V5cHz9QMjd",
  "key31": "2orsRnK4Hu4KhgL79qwqUa8pWpf8KagD7QMbC2dZuU7tdVVxZrSgbumqiA9jUTTZLaHiqiN4kecX2vaa5ktfsi3T",
  "key32": "5orkTzKGf488WjfMwCMjusRtjv91z5FfTLAP4gTmcarEWk4vu2tcHLVhHJBJ1hdWhH7Vq9T5rVmM8nmKVcsFKxN6",
  "key33": "5NipwEhGcqyn3TSNkLeHF96eeZpDjxAxUYjvqnM1x2YD2eBQWHdMbGkCVBP2xgCMJr86bz9qo1MUGiKjJfz7JRjd",
  "key34": "51UH2zAAb2FLT2hhdXAqucYddaEGg9NHBJb1BavNLkCEJdo9JVytCRNXfDtvGFVZ3u9HgJB9mvAcahkRhVaKCHMi",
  "key35": "9suorvtN3bRadb35CAXjNrv5LwZg84MC8fCuPGsdC3onHZthVA2AfBe6GCZ54wEw5fKDVorLqG29wtUk2XnUJNQ",
  "key36": "5Y1QAJ6yp7dCyLRisuKEBVmTEYzJbWvBzkcqvzcBrHqC243Qp3CTPZ7xRMwhn54c8aeTAZS6NLhZXxBFjtFpUyap",
  "key37": "5uDfBPjSQSk7yK28TnaUPnmWAeC5zWU2eZKvFWeTtQR5SPBqF9AWMDt2uGt2GcTMkGR9DEMBs9pXwZgRZqSyfVng",
  "key38": "4Mqviv1By6GjngjiLs7eDhrU7JaBmQbijkSEGDe7rY9tB7eFyiB7UHBFHSBu9CAEfczyVXhco3ezSGy9EE9AJUja",
  "key39": "4q9K4jGh5nQ6GBbhuWi1gVY38wPqFTsALKpz8wZiaWpeDgHq3C1GBLLH4wj6YLGnapwPt2bgtUFeunXSLMpyaZCq",
  "key40": "3CsR4ubieGVRcoatpub9wCEg9iGF9ozf7bN3qTg6LQixo2HSqXhoaJDGoqxcah4htYKrPuamnnKvfNMZLJshXjLU"
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
