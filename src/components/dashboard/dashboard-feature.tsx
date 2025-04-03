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
    "2uQHuqBTJ2ev7LVeKMN5mnssFg1Xc9VAuaBYGhcZAw5ER8QbKReezuA8xGV5GcLapNPoNwgey7R4QpTPT4JixpSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uba2PZfkGLoeXfGvPWv2KsDUH1HsKBHjqsztr4ouEQ96nDxN1wzTkTVLZNV1g4QCysp1cp27VhzCzT89j2QiF7o",
  "key1": "3oL9dKtYDk6vmMbGnan2MFYqhFsAkTArsEvaYPLtr74eeTBXiCsZbSW9nomj7QS7mDoKbhbsqNNA4XMGfVxcTy1Q",
  "key2": "5EVJqdvWunAWPFX3CGLcJBda6jifjwNtzKoxXD9gwD1GxjW3SVeFgWJWnATVGxPvF5WCqmpXF6zztmurazkUbc2S",
  "key3": "r6wM3TTLUtBZSt8G8j2kSEbUtL5uQmjMkRgb4FGMHvNYFL29ZdYqeWgTEC3iS6GfsJNWeJD7Sw4fGjSd6VRGF1H",
  "key4": "4URdqK2NzfqzF4qAHDvpnYQ5bnQA3TuY5zFRA8pyQR1t6JMD6BDgVmmddcRdHHo2cHdccFugJxUuPYz9zCrD8eZB",
  "key5": "4HSsNrzTecAJY4NRyRYxSvNmzXWrdJD7AqMRKswY2ae8m9C7LgiWjcj6rFD4gb4nfxoDqL2qtDLmSy571NRmLjS",
  "key6": "51fwsJEFjw2zMwPCtgUyafa15RQ5v9RLe5YQPAM5MJwJHgfT3Cn4tXGuRF6kVMTBGvXUeHm9yZxZNvm8wE3VfPXY",
  "key7": "2QCDsK163NzmatKn4vHobvRPXJ1WCksox2nAtgs5eLnTTnX8ZQe6PWk3UZggp8w58YRV5FdZftpoGXDgA17ne1tx",
  "key8": "SQkE6BbN3aS6hKcGA1B7sAtLMhCtZ58xSCL2LyUtcpEaFMxQQuFNhEEsGLD5U3N7aUwQaNVeXQb1yAAFSNEMpYT",
  "key9": "25Gtf54mpMZv4SvCVy8uZ1FTossgEMpUPwsgYYTwHw3UQ7EMnB3WEFJxWQGjVSKdJJGHeyf7oHzzAEfUa64chfrS",
  "key10": "39NSQ5FN6hPFAw9Z495gmhrE1DNHn9CHVEuUNzHNVms8WbJxPRw6ium3d1NduWwaEjDyAqSy4b2tpftuDtU2Jhy8",
  "key11": "4Hzd1ck2L9xJqGQqDSBJ1Lpfuq6qCTFqBm8fpWmdDqsXRNmSc3zFRCyqPPNLEaif8kiBYCq4GqHdBWYjqYXg34WQ",
  "key12": "5oTBYekPwHHnj74kPcu1dzpXLoSHUA7UMtHYYYxEvx3GpLgYAu5mEAq7PvrP1i12aAZQSxQWBCbz46aWxNi6q1Vn",
  "key13": "2CBRDpXLvejpzgaARFsVwZvUQYPn8YrYpkutdwqWaBAhjvdKWnhDGxSybsuKkwCdogk3Ha8bQJPLa7yXR9pX1oAw",
  "key14": "2GcZ63px5Awv6cxNCQvVKWMszLqUjffTYr87cWxpPsij2TvgA3cAyEGD4q99zEMzH4w6oUZZcNCcFshSLKTQ8PFW",
  "key15": "5mxi5yvAD9oX1ZT3P4nr9X6dSu5X65LHmcxnQgM3YHauYTKJoRhhimPVw6UocJKYhjyFThomXPBnKJEiLK2BrKLM",
  "key16": "fi3Q1GnoiNouvePqmRM7digyJqVj4qbDxysq4WH2EiGra3L7KCTdkhP2yPNfUqhCVGJX59qVYQ87NynxuzxRZPF",
  "key17": "4rSUuLYYpjoCAe9SgLcmYp6VNXqrqzxQGqPAxb5sZe7yDcSuMZwZ3nZoxtFu8Td7D2xTTpRA4RnJzLXNq9nBBq2W",
  "key18": "4jsWCNe2VJTaU8uJXKGmjzXNpHHHx3FkwYkYJM6TX6VUNqV19t5cLroMYztL6dRPGWhWsR2FTXTPR63hSTyggVPe",
  "key19": "1LQb1cJacLS9NP4UPRx6XVHdXA8Mwt9yhajWSQw1KxUGvik7a5RcZ94zX5cQBMEP7BKX5uv8HF9SMbXp2bf5uks",
  "key20": "QnKRvDyTnETaPVQUH4neopXFAUZwJ5gFV3M1sp4mDRf8192qX8kkEJJNaEXG2dAvTWRgrbtRrt3oxUNzxVuhGTz",
  "key21": "3ThtY6NVV9AmZSReKE1sfQL6o2rDbEoxjw4mS4t6UyGqCAVmBQ2tQrJMuzNXfurFoX6WJWx3gjN41NBUhJrDqQcK",
  "key22": "55TxgU1hrkBDBSjE1PQ58b3QHn3J6ZpXWYwrkfEfyV5ctWQWGyEGV2wXS6Jv8UZULCNr7DyHuUbLu5pUEBTvK3QT",
  "key23": "2pWyeAxBJrHcqeGivXPUKac1aMydmqEgeR3RMfEZiDaEqQguzoxoB1dBxJ3VKvLEXtRhFVhvf2Y7vfbfGW4pYBPh",
  "key24": "5sxyPLStCMBo5v7nn2QMqzhrcymqNP8vc46RCVbCzCybGjUUANKPt6fdcxJWTuCbfVQCMSkPUV4RUjmqTmkXjrK1",
  "key25": "43jcwimou92NycXvoiVCkGRzkqvvZDnZfMnQDjxBKocypNHnA8MFeFunwpX2ExshKqmJGr4rEvMy4tj4dgyH9Ko4",
  "key26": "9iReJUu5NtFte3vDdZsqS7m5Yexv8DaucmdWRcPZwzWCLiSya672FMvAhNeeQyZtXueGQSCgYExJTTiX6eFddgQ",
  "key27": "2DuZ1WY85AwFXEEeM9cBbFPCmA9VpeiRm3iDsSJmfpkbPQUXrqSkaY3erpGtySrwisxiApV1yjsHtdL2vbH6X9Bm",
  "key28": "3CEbYAYBjKCeAqUEwDYkpmwcKqcXssMB6cNApSnrFsjdBija7tdpgx4zwXXZoAVquv7RpZJJQ7Cf36oCvkxozYPH",
  "key29": "66m5BFm1YYbUYjfLPXxJ5aGSmb6g1Myu6DhEUDFrBWFYD5EpQcxvqe7wWMRzqtHyCXwjzbDMSvCGqhmh7KCVgEFj",
  "key30": "2ERDZpiXA2HgVyS8dgwT8Cs7ZM3cSUWos6CC7Stvv58kTX9vEKHXpMddbTUsXoG5dEir6snNtAYua8kETEo2sGeH",
  "key31": "CpC3QxL1ZxAwEhLcqmqCYuyaJjFowgtoCjAUSfYMADQAmxgLn6QsXroJLBjbj6mVP2WTZreELZDS2gU2LZMBtvE",
  "key32": "2nMQrxC537vVSGmkfcjpVPWFmdLSwxunhXWf6DE2Yj28wvGxUHVg6TAptiTkbk81wEjEZxuNzsR4k6ZTsHqZ4Xnz",
  "key33": "2KgvPSSMdtGeenka8iqatiTd1SzKggWHepSfYn6XuYo9UZyd4MsKGYtwK4kg9nPFJzFsDFwwZKsPTWK5sdMWbyBZ",
  "key34": "2fjgkMeiCtfgfrtGxTtJpKhrCvXFaBq6yXvcfT4XrULryLAp2psgxuhtcVp3CT3TUP98sHSe9yq3L3Si8aVzQmks",
  "key35": "ewC5n3ZeGL4ZRXK9TdmawksHWXkTnJFgTNrZBNxgrLxeBFvahWk5mvhDkrPt49jCVQVKEKvEE98Tnwstd6qDSLd",
  "key36": "5mECbCsmenfytk4R3fLgBcbTPc5Dy85oDcXyDPdrP9TzGtnxWGJCwJsCjHCqurXLa7rpwAfBBnhto9ZBfLJ8NL7",
  "key37": "rWPsiFhLSjj5Q2QnLG6GeSyYz763f5ogsiGrU63NLL59cCfB7PUH8fg41Y1pcAcLtDQWC5UueNJqLKWYFV2nXoQ",
  "key38": "4E1mknRJdFW4MYNeoUH9rxV97b86YnpFpmGrZ8uzKSJjCSZp2zXAXfdcyWra1fxPQi9hVQuSpFqvDL4ZKjkg263e",
  "key39": "4osSKnjuGXdDEFW76yEwD8KdY4WcNxcBHM12dCttwpUZ9sKP6pP23oHDg2LX8CKsuf1ruFe3VRwnonRm7nSBSQSC",
  "key40": "5PMSbhJpWRuPYi7tytN5cxeiQtELYGku5fFNgmNWGqF7rgbKrNPrQez1EYVbtgnbYTEzK1uJvgbPatbKfnG6AuG1"
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
