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
    "57u6rHA5rJwMKCXm9hnbddaWYgDKXsDpg5uw2BGVpaQ93QNKzQZWD2fabLmpWQd6WhkrJZtPg6TjmvkeJdXbYqfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39tZh7QQWPCN7xVBnD1UyACszf5wePkND6Z1jvMr4KUEaLveNXhDDTWmbVLsbArg2KUbg5nAHHpnQXrxMrY5QwgV",
  "key1": "465HELWM6So5mzTVLXhL3zgcZ2HccNxLkVDXjBSVLSUEJNh1h1vMEfH2GqQWqBtb6upFDamWYU8EynfXBNCgYYdd",
  "key2": "3vudUTLZWrWwAFcLQxUyZzcWqpZ6BbLJu5xCXxBJbmZQ5bwqr9BJV8GTQmhMf4MRC4zq9JPtXBQUkQUmdstF6o3T",
  "key3": "45YFTj2T7FTfP3fG8fdBVFWxxNDksjnUBUDtomP3j4NDDi8hWJRQpQ497dFszz2pFBNTzPKSDMk9Rsvb2sL4t4dk",
  "key4": "2DY68u5pjhxBawFvNWs7mWRTRXUAWAnEvqDMZ4S2nKXnd2De3yFJnNjkL2PeKVssoALYFtYVH9QUphqti8bhJ9ft",
  "key5": "2UVDfzj95fMcKFKVHCQruEXRg6PamqW6bS7tKT6HeNLeCBUB5Rd5vqzo1PfTz5mCnYdvonR75NH1tVVY1QwFUzts",
  "key6": "45dmu2X5qrnHAqoCPJW1G9nwGW1KDDrAu3kWgKgeM9vBUM2oxgU3csffQE48eiZLPdFYBwpNko2n4F3fMu5Z6aLQ",
  "key7": "5HfyB7VAa2YH9M7rv2XUiz4Vx3cNw2qXuLJ1KzNCjErbjXcfy5rDq8pRangL7SbFk1EWPqmtJRrJV9uFa7pkcsGk",
  "key8": "2pUFhg1pXRdbkYat254Wstb25qfRWrABrvogv5qeswbQ8Q7DdwZSwoEQQgFTWivqhW3KFpfNcWerf1U8vB7xtKcs",
  "key9": "2Kb3ZvjUuyj2Cv6Sc5vTo9xP75rcx8aGsV8L4q5LN4ocDp2B9aXAi2eebpFawnCnBmvFsfufcgWWQGFAakq9NpK6",
  "key10": "5Z6FXZNFzjbB2zGsuBgwmPimNz7AKtjwvtQHx4HRUUnJHEq3mnTJverL3VQhUHU1iPr1hKZpBSPgfow4TdPt79g5",
  "key11": "2zF1uX2nCwgF8bukjk8yono4L5GBH9UuyEdgRbPez8rkYf87YTcRFzK9Qmm6pR5vnwAcm4NGLy7PNNXuzzuimn12",
  "key12": "24WUw7c16PQkbQxA1D8Ku9Ebw5vgyjJZPj9qzk3xfbSPBJ1zPhhZLZrYBV69Nk8C9ufarV1emyWUfNRvcdVNZxvY",
  "key13": "5uouU4La7b41wqdC1yPiciaYRCCNWw8JbcLwK7LJGZ7zFkhXjcgNYrqwDyjgdkYU14AMuHVCoidyqWWaDKiVPk5f",
  "key14": "52VHdGUyyr76xUTzokHzGSXtxEREXroQiDi2PfL9MuhRSEehPXyuNZcXf5Y35CVbWguPd6sCsZmSQu3rLFFAUume",
  "key15": "2TRB565Gjd5j8goV6YJA1mBt1T2Ny6RnpWgSXaFEtGdNicVKjJr3TagG3NRoR4iyd5Mpu4ALHeFSHHKyNGVZV1hk",
  "key16": "2V4tnYevEKetDjj2EvQLGAqKPxSm1LLFrEJ3uLTR7Gs3sMUFGMJAKyYzPg1YmeZ2pNmVSKCk7DQgAa9QKmg7o52M",
  "key17": "52TdmdYZuyfT7nzUdSBrAiJgHUAgZDK1yf7YxRGLgEjmpeUHji9pCDYsHbKbFAy1iNZ1yQyacH8y76ay7GQD3aej",
  "key18": "4kKax4LW6qbgCxV8RSWLr5LAa9NawMWmaGku9mRVu1Tpq5mBHrgBDybdUViDTodtpwKwFjVTpNhpTjJspBuH4GnC",
  "key19": "3cvEBU7cW6v7EA4ttAAq6esbSUMhVUS7qoc8fWetHjdWCe7KBh1vfcGYA87BNrAjc5z8UEwHXmtXqgLaPYYC2jT1",
  "key20": "5insNaHrGRFe9N77qPL2Ks6poQb91D7k1UswPJvRUvEXsNYSn3GtbBdi4PVDUeW3m4ZbDyoHjoFfvEVSo2m3854Y",
  "key21": "3jsAFY5ifF2VSni8sVrCs1TDJqx6W2gy7Hf1DHQW4hpnFBzMSEtNHmDQDyk4Pyc9wvsq7WmZuVHpUfL8Y2Df8cN2",
  "key22": "5CMuhJtQ6RP3432KQkfqa1WAZS5p3tfZVyThYXPsHPzmCrMowxizJqRYGPx96W5q9Af7TFwZUxTCvQ2mcfvPPifm",
  "key23": "38FbBsSfcmsH7zaVD5hb25FcJnYsLYTzGSmewdRvk79t7UPpJmpm6zaJ4AkNPRm9r6UX4nbWure9xXjZv5D9fWLw",
  "key24": "d9c9Ts8NJswtf4DLysv7NUA5iPugDKjqmFkJPpiNGM1oiJQVGhK2TLjdoSEZr8ttokZj6WzTmFTKE9xXZeM2wp7",
  "key25": "5VrQ192Ya4hWKUXf6ToHHPt6aYone523x2iiVyLqGBi55YHLve2LCBTm2N6hzXntTuKzg1UCgfL6JjL9Gek2XhZT",
  "key26": "5HtrYTeZEDcwVWusvPamR7Ahkbvfh3zpk5mUu2QUxbjk4kAMPSTqfHVZGjX97XCrY3qzzndr44UB4RGrZPya1Yno",
  "key27": "47wHDzL47jN2yzajhmKbbpwEMinoChVKvD4qRWxW1rzey3FW9Ej85wsaSkV1cWrgkembpJg2vGJFrey6qFxv6NSw",
  "key28": "FM8s3CT5FSA1YstJtAvNnSUPbzL9sNEYn7vKhcsQdFn7oFTceJ2KQWoZ6FAfppnJ8TCMeFrrtpFFCeBp7jX7xTL",
  "key29": "4BFppMXuNHbVfcXMUBPcogkwedeaNhJzhM1wPESawaxeyC7t9KscKtZLpSDSgCA4KaLwHSjETYLRkQMSpnCXrv6a",
  "key30": "3fuk7FhrvgV4a1mVq4u71A8inGUvnbAobC7VCLTDziNyzhrGeAV9mxvdwM7o54rFp277k3gMnRBjdqmTDRX8BW9F",
  "key31": "ygg8dC2ycXVhVmiegd3eBvPRkyZ5X2wJYcYg9WduBZR3jJe1JV9mMS7CUqQr9YK3yrVHNUV5JDGDo2Mw1AGRWhW",
  "key32": "5A6Gais4yLudKeW2MKpDfR9uenTSdKjjnx2rvo15X3n4sYDssFKjBxQtPFd4vjARK81uA48GLQwwfL1jmifzSo4p",
  "key33": "2KJKCwsd6nQmYLGeojoxFZY3BvrbSBg5eifm35zBVe6XUjmG7aqynKj4gsF5mNr2wMQGFsCms3neez6k45T7HFfC",
  "key34": "5vis1xQopx6bCp6xRWu83rdRHnYiFXgJ5kj1jBcR5QYA4wpSGbChPSj9GyvZ5oKmFrJDeBiyLXnyiray1YsHmNwb",
  "key35": "fL71VshPUcjxsTGNh52WcUkEs8bk2AP1dncM8rehQYatBHzJKX4WU1vwyXA9tCPmPRgrg4KEfQjB9iAeXxkEu6n",
  "key36": "4uuDYhoU4rvgaEK7LmU3W5Z5yWGPV621P3AuAZP5y54BKmRqucpHKmpLr1VTP5ZcZKtBWnNVbF1H1ZgJ37Rak9w6",
  "key37": "5d7atGtgQrrXWHQohNA2p61CdqKsZupm8batd67BYXEAPe443785AGaheVptfakwubkYTUsKRMZ2yMpXNU4FtEE5",
  "key38": "337Eib8fJwFQnFL1PWZBAVWFnXzwTaZqThtV3rwxEmn4KjQj8u64vABaH3KtkuyaLZe5YbgPueavQjBAFmMM3sE2",
  "key39": "fhTj4ydyebmsn4L7MxE1rvBSGYfCyqhazLjvTTNG1tHcxBBLmNtYsskLqatusgsARdQdFmqLizLmgtjKwoyfTwM",
  "key40": "TnE63yucWzHyQ223foXJngt4avuUMXvu1Q9QS6gUHiRVpRcNRBxh3WThdyV3wyGmySPdRTjgvip5ZKWQWMhvuvb",
  "key41": "4DFLfdZ2E69bTiBw3e5cCbaANEtdrDkBnmpyvn1to1BYj4nmbkoJKzhBqaRAasRxnHNVaX4roeLwcVCqQurQayhL",
  "key42": "2hyqacPNAJwdnwUJVrHzA8JbdDUuBqz98Nq9TwzSHVGqZpiJ6KpjhtzdFZCqvKC8Nf3ppEtiEM7rZHag5W6aR3cy",
  "key43": "5b1CJomCfzRQYkd1TqT1Ed1LN4spLhk9vqpungwMqAaxQsjLmgaG7iYmAsHLmBW3pGz4gpGsTBEm6MxxVLmnabSA",
  "key44": "4XY2hvPNMnYJyAtfm78Z2YmLFB2wXomMT58CFjjUrfdL3pbfvtbEwMZhgjfw96pv9My8QWzRShXfoei5KthLLws2",
  "key45": "DJjYe9fC1ENHYeafaNkx5XMu626g7TqUQSYs6V3d1zPgKE3GdRkSr6FwCf9xkj7RS6zpaAQpGgCQtZJpQ3ZM5Z9",
  "key46": "57vJ2bfx347VBFChNGFpbzUFX6fFMmWUG697dzEHyc7HrhKDzKPyaDhvLXci2FoLy2fgfnFhVaDTuz7z6G4TvMj6",
  "key47": "5vHAWdo5f7jf5bpNmXfuuj2Nwiyk1JeQMJHUHNPZLRC1cStf1N6cLtF9BfMKNqXJt2kpbby4qCq4gqVfRhFsMA8c"
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
