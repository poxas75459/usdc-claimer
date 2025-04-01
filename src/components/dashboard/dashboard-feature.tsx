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
    "375YVgQM62dD3CJXGDgnrLksi6zvpDGqsHwqLoXZ5U3mxhkf7hsghLgHsg6sgw2pU8sWGnTAtJSMRu1tsxWiA4RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BaGjARYWHMQ6PZHttcocmvswmGNkfP5SghtduPtvgKP3EuN5DGL8HmS2Uo1sSbxEBi9gDHV2E7g3BTqE1ZYnUru",
  "key1": "gcBkFY2L7fpqHKXviSSwuiLem8J8a8xT3Go6ozjhxoGvhgtbPwd3RPKiseLi9ns8PUDVX86WoQnCiM8xe1MoLY1",
  "key2": "2aQDAaiw9yk1SfQsQtZ6gLJRSS7Lg5ucAvB6vRwPVVgUKxqcMihR95xn29986Wmgu1RGHQxnqtd4ALeELyB533u4",
  "key3": "5xpo1whjhMBqmckrhy4xNQP3EmpowxaE7gyu4s9AUkYSjG69ibyq5aB5hYvVQQipHhgSZdeEtihDpTiu6epULCqh",
  "key4": "2asLkytSuwK9iP6em9MgMyifscz3yjdZ2fsoedqiXSaGBmnx5nZVT3CbhvKZe1Snbo9DqGe5RJEWhKG5AcnnhQBM",
  "key5": "4RJSjFshJmYbVL4JbLevNeiUdgyeXPGuomem9fHFg3BrbGWrTCTJ1wnzz4bDfKKzztP454i4ScTJEexywnP5nx1F",
  "key6": "2uapKJQ568ydDNEbDgm3dbuk6PtjtQAa5roz1jwuzH2dUXU12bZaY4z7jeoqrZm2cHiKcoYHuPTHVQxJsupN17BY",
  "key7": "63CJanXAK5coLHKVuAxxGhqH9VmBedtxdtC4A7FjoECBZfABk3iJe74LtGF5ysqYvRTWokVw44niLVvwweRwaiWk",
  "key8": "4UAJnd1EsKRqpM5sfmMm4xVbR8BTj8viy6u3u3TZi2Kddrvc8XNmAfnvrb76rKPCYsZXi41uapiTusnXB1CXfgyb",
  "key9": "2jUxxV8zyNHzgK28LaKD1ziHBiL8tNoaL7BizyTBk9ndpMTJNk6ZDTNvQA8gGScCAnofmnoz81VQhiEE2SjTAvrz",
  "key10": "5QqHeZf55AEgB8BmF1bKXuD6Mt552i2KFHAKvpKCMLW5waeHYmWtgX1RAZmWoRqUrvwzHg79h4j4W8s4tAFweXVG",
  "key11": "5joLqUM8nCYsVFT8FMP6pM6SK3Smfp2sWQeV7GmFMu1k23GMsNttfa5ZcHwZHmQJYHN9EHArU3ygpcNgnJbV5iMM",
  "key12": "4TTJeyKubW4TZg8TfjAgQoP9msGQU8i8t6wk2S37G89epKc3eBFdUuUJwxcuZ51LMwmNxhgbPubYRu5nXRjkKybd",
  "key13": "3XPjrHBnKDFiXABvBa5tF6xu7TiXjxCyygvy5hNBERUcvkMq5BY8A2esEDJD9YzwWj9jmC8BrkQAwcRb2zqSjmh4",
  "key14": "2fzRJYUKviBUWAKcAy8ig6QzSPmNhqzRK8CZexgpC58XSVyB3hwzGBZhP18dybivJ4VmRshfAA9gAQnpgS36Q91s",
  "key15": "2vVdYBY1L3BW3DzKqPjoQbZeSDfX93WJCDdZDgVjjDPvv1VRZkFJgRpGTPCS6JjFkpZQMPw5BrVvL99Gw97JGg6Q",
  "key16": "39vgyY4dTYfK6XzNwg9CAcw9tuRV2YmYPKtTeK5wrz68to1QJ7r1sQqdRasEah1sYobH9Uyvrh9HUKd8enwZTvwK",
  "key17": "4YXQsJTZwGu4cDtHW5ZsLCV5mRnqDRax5H2genDVaremmpxCW4FpZAxumtKdE6sAJgD59xTbVxhCiKWgyU2iEn2Q",
  "key18": "5UCJiTkKSeKX5UQvUjX3quoDsiAYk46dB7e5wRWxDq5Zbrm4Jh37VLbpadKr28JND6bptXv9HaLodUE6bpUzRfPB",
  "key19": "4wy7anDqavcZ6jfA95StjLvf2n1VgVCJB5TYy2y8vqd5ibHnJoecSwQRFoBBNZXzDzr6LqKFWTz3L1ZfQs7EenVS",
  "key20": "2LKUfmF2smebLtpBGxJCJK3LvWt6raAhyNewcnC9i6FDxCivvN8r2CYLPxKwjmZwJXCnufYQ4w5xeghJD74PtjYN",
  "key21": "4BHTEBR9EzEBrSKYiox7Np9GsSDeVt2oKUuT8uyUwuJd78F1kvnTvm9k8W1pjNoqp5Zs5FBwm9DVGaoF332NG2Bq",
  "key22": "5KhjMSq13MV8hkGNPYXLAeWDcb5Wd1uBkShNHzQoJnge8tRgPUT4K5yPDrEz5wVV9woMLxjakTUM56p2cuMvaFnk",
  "key23": "4aTQgcux9SQTHX2V6MqDQ8UNMwAQiGkTbrMQmUXiUjzXxEFtXqSf8D7A8hJcgxgn968dcfrJhphMRHuPmxiJb1GB",
  "key24": "2zgDzanTW1kAmef2Y2fXQ4cSYAmXYeLqCRSUFfKy9x5rhxAzhDbq23xGjQCuRrYTAijMrHre3bhufR5j97yZZsQ7",
  "key25": "1m9v5GwCcQDUSRanp7jD7s91ifmABsopbWeb7chXdMGLBobSYecLo9pYaUqrzk9TFUwhhwduwcWUm6xNromsyAq",
  "key26": "4xUCZoZ423bVJVzcJF66JR24H55QaRCSNpjYXw4ruxS33TzoEHM4no5TVA8knr6LVjgGPxjpwzdN52gJeLyq2cqB",
  "key27": "2b15beZob4Ur5ps97fGXHZx4qCW4ks8tSzPn3jJct4pEtpiX2hGzsMJWw7x51VygYfPdNP2TPRkj6qT53rh1vf97",
  "key28": "2RD4zm8bcEW4Tcp9XexZgSAPxTj9dSSHFQwUB62JR3GwVJj4LkAvgPjWzxCRKmEnCo2hSsMVrpJo4DnWSsnDog1A",
  "key29": "qjMQj9fLdssnoiLNbwoyPkuYtAjRcJWNE6E7MFdbew2qXEdJbpLtMz2TnR6DwbEmAu6xJHQXs58foK7NyGczpon",
  "key30": "3mQpzak22ATpeudfqzPY2oNbrfwceC6pA9mdfgev97Sse6KSQB9i4tdLx13RdHdo8nhmQgzj9aJ1dEwyPxnDhyQZ"
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
