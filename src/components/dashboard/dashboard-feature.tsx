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
    "3Gg9pg4DEtQtFSow5dv9MzVbbBExNBr2NGfRQHikp8Lx1jBpwRhbYAXy3aSTTpgZjC3HMpsyDcGpJ1conG7ZJniN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nzf2PKCMwHHvRe4w5uhQE2MrLda9zxxFaYqB4MsaYfHiA8jxYKEGBdtfx3P8w4b46S6xfxyNwCHmYoTzbgGWogM",
  "key1": "4YKMmJYef6k1Cktnsj9QGEgJSiKSYErWS8yekLLy6pXEGZjWjiJwwAEBo8nS5uDbcD4QRCf8jJrqvbA2mkeBok9g",
  "key2": "3p8xAMiQJoSjGjKQwfGC94W9GyQTGdpLeGtCbss3sPvnGNRVAQG25TgSFhHPic4yhFSCL84pQ8E9q5h1EzhWWNf5",
  "key3": "3uSj8EuNq77hyKKk1boSERoGp7631y2j3fh92weQJkNPtXLVdMjgPGdcNfDGsYrAuMgcChBsD22yh5hYCQxBqry6",
  "key4": "5zDdPatCMAoz7h3r263RPKGYabBHdL29YZLmK8Db9XSYdLjcfgMreFpJjbuXTaAjZT67HDw1Dmcw9xrtDGbyHCVy",
  "key5": "24ygqmkJ5pwKvb65FxbUgALaQybn56DyWHB9kys4vevi3KbDiXohPKbiCFseyRqzz8morK46GqAzHLrviaJ61D17",
  "key6": "4HHaiWk6rMz7y6gefHwDKJ6MqwtQVFUQUXUtBV2ciu7LnDu3o5pkBdtpNuaDqzdpRFPtYFQkiyB6USQMLUqGjhGh",
  "key7": "t3WXiurDHZNcQVCbt5WKL7MjrxKVBPUyrP8PvBzDwu5zXyFpkPeYCX331czJsXZRHMv6ed7F5TrETx6Le5EfSxE",
  "key8": "ZwQjzuwcn8ji43yiDQ1SS3hbt2NwGsMFxJMLQiN36fg99tL2B6Wj1QVEoMXTGkko9NAw4AqyZ138gzf77oJAydj",
  "key9": "35mXaqWWJhscHQnSeZNQ6Yq2ibAsZcoBm2xBsbbHbfu3rMonGZH7WqCG4NGjznLzW46apS8gdmZcmSW3MmMkWL6z",
  "key10": "3efQ4c4SZvpRgeoNpXFAgWukw4gyPWxSjCQ8nFpKs9Xxr5hmSzBwxuEZckqFwzzu4w8o3a14999VUrYKdSSae97M",
  "key11": "48Jsv9mnK26W5srPWQyhbyXtyStmgxT7MQYN2DSmj9f97hvBig65hhyqHgSFhLCwhT7oo8Mncxtax74pbWjtEfZU",
  "key12": "e2KKkZKZaE6Tqiejw1C2RVYgHH8uaDGzB5HjpGTdPcKRMMbUtLVFXz2yzm1CaxVHaMXadAejFnANfbSq62WFYwV",
  "key13": "32JqLEEaaGQdniDWAHSdXbN4eS3AehF6vdkHooeG9yS5YSiQuK3dhixWbmHAKUaweQSPSRhDCJFuVFXCr7FpofLX",
  "key14": "2c6V7yx1yMwWmkWxKgXvgGD625adcdAC4dSyMofcMLSe9KdobvkfuG3kRZTW4VB5nAaomdQ2FkBeHJSzmYgp8nVy",
  "key15": "3ZErKRCHMPJ7QjGq3z6HxGz7tzFRb5PieVrwMzLsfyb22apY7XXz6iSrMhDwZrV559RAALzQ6EML2XRbNkNJBgq6",
  "key16": "5As753rtZWp4NNVCFK1JnzG56vAbP9iHwyoSHtLBUkgkmrXUQXAyuQCycShXpD89zBTYjRB6WYtDcyN7aM7WDYz5",
  "key17": "cDif1Kttw4AVnouqqEgbRWpvwbx4VLg3WBayncoX49EaYNi1xu69FxnPMiz3NsibbmGroKtuUPQrHc9yTQQ557N",
  "key18": "DXrRfLUemywywMGDegYBqVq1EhPjPKcW3n1gJCj6EA4oTm6RvF1FMH47pW8ucLp5WgpErFZBCBNCCGK1a173tqe",
  "key19": "37s6d3sTKYTKhwEnB9v8HsfRfiBBCAXb1aBB1EPYmAQvgVWke8RXeQG2WKP8ePX12Yr8VfaKmyy1PJd8SBifTDy2",
  "key20": "3cHH9tmtaPWvmFHSBwY1WF4Y9NbF97S4fVgEErYZtDSHswG4f8Y3V47FhNd5sBxwr1crpFDDoPjWzDqHHdFd5pF1",
  "key21": "YK9E1pLdePi9tfMUM9TzroH2XySnr5aPkYXHKqfvf8Yz2G8T5MaFZ7aRUGdmB4JNUSpgaWvBNpwC3HGQrCZipgP",
  "key22": "3bfcRPZYpNvLypYqfAMUz7QeJvi6svD7xThPBavcth9nCbJUnVzZpp4LBgdDMYejE86MZB9GaY7mLUU8UjR9AR5Z",
  "key23": "2dchND3Xu9F3LAZJHqUXJUb4goHA3qSWZCRhtj3VcdFoi9ae4ZNC28dWQkE7pgPMUjeQn9yxHMjrxiKhBJ97A9wJ",
  "key24": "2ZCD4VCEaMr3Ad3fLsKgaBWPQ5dqp6M3cEX8C5YRX2beBqrApMJPfQVVXHn7nXsqPHYcMPQUVKwDXbEV6Mq6yp3e",
  "key25": "3UAQnDDhHUBU81J2QiDjCGPZxcYQuHbNGdE9Y3Hs3gDHK54aVQbnxx6pRCkZiait859bzL2Rx4qMVhhebxifVJ3m",
  "key26": "51UYEungDC9vto33wf2uogjzcW77PJgJyVWvRej4SqmnRDRzerC965bvQ6JD1jMRGzus6LBTxi4qf7UrUFWhFLqx",
  "key27": "4chfhhC815j5QUEkzTBTSFwj8fbG3JVLFQZijzHiETpeBudPSrbpywzPXJk5wHGh7qxTVp5tCPXRwwpby2TxTCeD",
  "key28": "4fytGCCjunyVXHU3UfBhffuBgt5Fasqiup2LQfH6dethj8K8FKNmEDAiGt3x4Lk4jasbMvDvthjrvzWZDQRMm6Vs",
  "key29": "5tUZQF9rBsdQ2RfgdTQVYHxCuGbanZms2c4L8xnP45zm3Rx8UVdMnhYbaVD7SjLLgTBsD9wcwvxAM1gQSpKTgoiQ",
  "key30": "31T4EpDJXz767eZs6LnyLBKFs9u95SVpx6U75JPsspMKeaULFqoVmVUcgr7CJZT9ymrLmGyJKg2Br43TEHHv8N3M",
  "key31": "58XgbmGfAGNpvQGgCgCt9Mry5DBzxkpmQN9tTt8U7dtNf5h7JaQxUUZRs1VuQzh1pe8rU27uu6yoEL8aNLTggA5H",
  "key32": "3JGKfthno2Pj5LqPW37tH1JSNN6UakUYe7whpUBBai1vAQYE7a5gJmVJnnpwAvoxiW77XF3ZdRBK8uYWh1MfLRm",
  "key33": "5JEVpkSQTtXnwQbmvq8W9A7t3ruVuvAH3bxMKDr2gdMk3jgDWjwySWzv7okrsKxPNuez4697bh8XPJsqzFN1ky6u",
  "key34": "2T5qe48C6inj1vK2pP8sCCjgvuuHMs16v4t5vj3j8SQyAkKU4MiqD1eSE5KuqR7o59tYbs3qFKDKS9kW991bgvmv"
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
