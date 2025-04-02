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
    "22jsNJJVyGNBUjgMepGKVh21tc9TS1ywW4upgJJfFWkeyVdizf6jYsFxJThqsNQuEfSrU78dE4CU3vhycpo6SPvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66nL1Ff4JhqFRfgYopfnNr4NYELzAZfwtZ51mnrVU8NGbH9fe8ZwxEM5fh6tnz1tq2fYCB3zh3soB4beSYiVNwhd",
  "key1": "2HRLwTTrMktMfHadGN2bzPKKbBKFka4uFs5UszXeFJBk5YYzrZ7mozLAZcuxtsdumyqN6mn8A5DjeCwyZqLhTbcx",
  "key2": "2dgQw6GJQLY8CQhowCM9Wim2HpTb4q41bdHBN1KX3DR57pTHDxqMmtAkQr4vnVnqZAUtNGjTMjwErrDXtARBcTX4",
  "key3": "sycw16QnsL8pVFSqjCCpKuqMKwY9eeegMPj9jtiCyuKddrHGqEL3bdYqHywfwuSgcn1MCsyUdfUxbYhupNT5S4J",
  "key4": "66PeEBSDgqpNwUdQpbMdoKWzCxyyks7u6KbSpdZPBfTKQB3vKLmRuNhTjxVp6FokD2eUEmCJ78Ygz1vRJmGang5E",
  "key5": "3dstUxum3vmAqNT91zeFrTQwGxnyFeRTNVMt2jhpn9D4SR2bgDcyeRP4gJnUrFuWvNnE87r8KiBLx2rHywdZqqcc",
  "key6": "c9F88wySz8mgttr1V9cE7DRLcHictVWS9e8wqRWL98dVBxZxCCp9naTJd7L2JXdrpGw2xmungq155MEuvdkRsuS",
  "key7": "4oq3uBF5Uv6xW8ZQQNM3kUjKvej496ULPne2PViLvoFUrrgzfP4T7UTkUH5Dv6m6EyPdNAMJePkFUCjUFfb4b6L4",
  "key8": "5GgzPeAooBf6qy6Du1aXSZZ8TdGbgzYZFuBCXYyTVFdK21wsTwVsEi7CaYSSsT2NvxerQweZ21pS9X3yFSEApXyy",
  "key9": "3PGTwLqpf6EbmcHQJz2huyCwRn7PTPeakCCkWxg3kRtVhKSd7AiBiNmRYiTL75np8knMJ1XdBnuYqf9iTseZ3znD",
  "key10": "2XGEnKGidSiob63xjkHDEXGSDHsbrpxTfRJAL38fagFwnYuHoVBo7DuNLjJG9ofDNfj183228nLno5Ka6LKPK3tP",
  "key11": "2uez6qeAYkEtJQ1nNLYSZfaHxmNAGR6kD9T6bCzEkZsnP8jbkABDWeGbe8YpHwMagYWYgzZ2LW74F9e8e3TP2Xgt",
  "key12": "411Gfh5ShqbvzLQeAfoajsHH4YNEw7nbYmNVLRMmB6hbXfReMdEnYxTAFCsR2h1pnNVxyJ5EhNPi2gaEA5xjEMxU",
  "key13": "63iXpkXdybB5WjNKt53bKv4ATvf4YRZr8GajBxuF6oj8ENztAiXcKFvggU59dGbKhF8knycRxYUf4N9xkHXdi2zh",
  "key14": "62cLdW2eKAFMQFhVuLPyyaZRc3DRHRL3WVYAqdS1gYTpJk8JE4xq6aePpFMsJcMS9Pq9FuNZHHaQ2FdxmHCgPWqW",
  "key15": "3t4iMdjJ3WksqS8ZUpAZkbvRyvYL8QvNUcTULywSm2Dj9ZLMLQSwDZ9TaTXoZKF8x4GXNzm1AgCBUwdmX7JdEhYS",
  "key16": "QnzGFAZ9XSBUSfy9bitR3dUjZd8Np9wqaxp7UdiWvMuV7e6Dq37uui9ces2zHvEBezTpKi1fHjiowh4hCAVBQfS",
  "key17": "4r89vUQCP6r3fDrcLWFDNWbtudaan7bqtBdTbKbaUpZ96mrGc2DBRzXReBeNS5J4TUuuYiQ9mZN351XA5B57z5Nr",
  "key18": "3fa6VpoVQxRzvhJm44qrigS6sbUbqu8AEfAoTM3FSbXD4ZK3MGVYEXF5GBpYcMxt1cdL4T5N6XvpTZ2zMWyi8r1Q",
  "key19": "3Cz1K1QzvrwCGkc2fH6L6NxnLrBm4TrpowP44K7j9w5peip5yJmKutbSPaZMer6JqQTENa5ifHHLhUL6S8KGrMih",
  "key20": "4qCbVUb1YUhRb2JHT9HN9xLAxYNEVE9iuEKviLcFcVhhXw4CZ9roF94v6xQg8Xhb1RWvTX6CXVpsTWc7RT4qNMts",
  "key21": "5XNwkugSmg9Vtpxig7LggY6o2in4xUEoQWkqHdqgxPhR43QzgWe2aSxsT4wHX8oUJm1j7XJKGg5xMszBevodDR27",
  "key22": "xmmXhEnctiJ2usyH9XQJ8p7378GG3ZTXH5TvSHDppY93boEs6wuV3NGwjRyDETFpomBf9yKJ7oaJTETRVhxVChj",
  "key23": "3WLcAHFTREV1SvoeKmeJ3ET6zWkR366nHYsaWB2GJnghqky1HYeVNWkMr5gXKLgAcnme8j6kcPZbNfHLpQSEidwX",
  "key24": "34xfqmJSqNqFi7Wmj6sG44MjBFWDCuVwuqmSSDm2HVsVorMLxBgc3e6VWgpFErsjJwZyk4oKP5UuNontB7KAD17Z",
  "key25": "YcQspgoujotRZsBsrSsGtBGBXx428dAcYEXqgLVpuJRVQnKcd1s3iJseRkM3rwbi5KNhUxWMUmSyVEJNigEKL1y",
  "key26": "3tuhaP4zGG8cYXTqYA55QW7Ej1t3c3g4bMSwFxwV6LiyL1JxsS3FMZhV4yapxnA6af4GcczP8JmnWEJEtCBMiH5C",
  "key27": "5FNtbG5qbWXjTcBxpnpJcq5mt1yJktaszRko1YXs9qyY5kUisPuiZ4RR11oapxswxNmy1DZa44LkqaCU2okqvaQd",
  "key28": "5TGaqyzP6qzho2M5DiUrkyCNEtaBswZgMe31ZFNPqupyyHpeaHM6TfVLuQdmUQz2idyaJRVZcQKsreKTyZi1a6Ap",
  "key29": "4s4APcdB6MBrcnX3QhzGf2CEMSvS8ggqUrCjBWPqfcgWFAXf35NLot1z11a3Tg3KkjfREZWJjirLqFTycVZHuNGm"
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
