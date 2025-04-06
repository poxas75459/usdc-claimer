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
    "3xRtGLJnC8EjRvk2aDB2nq7y5DgzBJGSbvReRY1T4FsGDWhQSEFygv2sLVYN3H8muGezcLNJ4GCY7ctbjC8LVour"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATLhs92J6oJf7bccYtd4K1ASg961f2tpHuehzvm2bsS1eekcEsuv37CEExYGmmnZX3dZKT8hTpUhiQCv72oHT6M",
  "key1": "3583pfDYXyEUbJ4ravXHBzd6NZzeryJ9F2xBxuhnZmwdj8GP3Dyf2cD6D9dHvy8KSFitys7povoZMN97TVu1eXhp",
  "key2": "2tYNgeYVhWiKgSe5da8921Fdfy7UqtZ6aMVuGRNJHUbppHbbLvqmiL3JvYYBXyLSCZoLKgsxHZfRDHqhxkChEAAd",
  "key3": "2CHucRvZXjord8gEjjAyvreXhQTw1UfdtMCLEdDQbSZu4EzpaYdQmyadRe19rSNDME3FK4f7yEdQHcY9TyX7bXz3",
  "key4": "4SisBkX4q7J9V4BKnaUPzsGEvtq21W2JxRXiecZd6WtLeboNJ3ygmVSmVAKWU5TvGCwTyGbXYFtv2mmP1uCqiGjv",
  "key5": "2bv73JGEcwzRM4Jsqwv9LDgP1TqdGuGpqc6QoywEwPjF9BASjp9AAgCNCxESJ9PiGEVE8tcnv7UizNoXEMC5SzuT",
  "key6": "5hXux728yKoqPVAvewevwARRaGYx8aCnwu8eyXaZ5TjnJfkGJBg8ZGED5x5E1DUT6vRCJnRuyJED5ySE7Y27szwP",
  "key7": "4ZAQTvJQgfyPBALYz3LYpx75JKhK29g1Mm1hZ1acQimAFUXL9Xnpiu43TBXPe3VnYxma2wo3aPA1Gg5XWaY1WkPA",
  "key8": "3CpxK38DgD4ByHqsWtUZp6VsWbvgPKisWkRTJzwxfzutaHhVs7Fp81zs4mqjSx52n6x87CLK7nBeDx6oPkEMzQfC",
  "key9": "3nFX4o52vvwDiUQKU8gaySJQ7fV5FK9Lokq5KYsWcEhZn5V6wdwERRG92dkimLLZ3oPtPcHqcETB3SFknEreMXmC",
  "key10": "4Sa8ACLFsMbZ1Zh6SqS9LwYoQJoT1BJ2vddJBFVYo2CSukRUY1ipEQzNkaSLwxb5yc6RLCM39GgJXSa4NdY9RJLd",
  "key11": "t1E4FCzmXUqojJ7oSuWymbdWtQ5aPZCBzHD4EY1rtoka7jLoh6XXVYpxgvXbXdmjKQEQcrih6SjoEoY7UmtQiGy",
  "key12": "5tCqgGzDAv93BZPe4m3LHfK8GSMMGj25mH9QJAaba3QTvTcZuqU5NsvMrTwmicLsS2aiMwUb2ha4Kg949vMQeTyN",
  "key13": "297uRx5kSZv4K5PfqRth4syFpUPrWKQAmPQj3T9jt79DYgX1KFSquewhLKHZxR1ZV4xsKPjL2u3rnmjuqiHS244G",
  "key14": "5ZxX4njepJ1gBs4U6KYVrFsJgP8kAMEQx65jb2ALT6ZizUGSQM6YkQ9aFoVuAfjbRFTpUsCufvaBPfVdjGYRqU4b",
  "key15": "9HTV3fZXT8K31tXi7VtoRfA2GswKpQgGSoiTSdWKMnNLZB8gZkqY11YsS2ua1JMBLggU6CEsiR4EPzNAq9XeHbM",
  "key16": "4ZV3QCs12qLeqJscLHV79ufcTqx17US6mfupdcQVFDqWYzRm9twbNVunbAwWeYfmrz4xTdmhQ3wBvf3euUdLLywC",
  "key17": "54ykEs6rE7sTYPPQVxop6n2ZsCeGyPzDbnCyHYGwp6bWGpYb7ciLfc8DsH6LdUoeP8UmQdxXEpYPiNoRAeBHht2s",
  "key18": "4T47EqkcBLedFUMX3M3wpFa715MyDcf272dygQrQH3rvtjsiy9MUjyu8mswhNY2uoydscfzNuz9nbM7pqXGGSAuM",
  "key19": "55tWcfYU4WZPVUnwPoNiV6pG8qtEKVmSM6tEVqHZVg1tztGtPbggfodkWzRBAMaQECUoFKA87YL3dY3b6wu97CsS",
  "key20": "3QCW8WVK27gJk4ndTAKj9x5uCN94Z8E8vVKiHDJwaMCp3pxGPYwt6fVGHzLVpnavdjYMtNuG3diEwqA5HjLPXUX1",
  "key21": "Z5kjQEC5qhA8QcdTvdV7gnjT9nwpTpkrabkvFCpXh11QbWUW9sn1ZZmkUtYRgs51MvPZ9UrUsMhvuXpUFajHRbn",
  "key22": "VKpP2UWVmJCXFpmktmtB7BNBDejv26ZpxgwVRGiCHXFXAok2STZ2CfPHUcgjx4u1HsdCMon3r2H2giXBEWnJXDq",
  "key23": "5CJSeXix21h3o5CQQ6ZKPEm96aXdQXHqkyVPAPziFJrnJG5hdR1G5wQ8rFQJuaZaL3CwBj9RBQBjxBcJEhyFp173",
  "key24": "595v7BsbsoSBYTa9idf3vkdDRrxAV1VjRueQ4n4boqKDyn8Tsuv42TAG5uACyz782j3vAK5938vpDPuqZQL5R8Ep",
  "key25": "DEEdcerTEZBdUhypFB5rYpWXdte1gYU3t8rM7Dvx3a9UdTfWTnC2C7Jb83z6JgbvtF3PeBWac4LyMquaJmJ23dL",
  "key26": "5jjnwGEgn8vkWN5mCpnWywDJiRafq4tUuSHk7WWYwdv6uNPBVymEFFMH3gXoAjFHTFWmKzJ4jtPWzzLtbRv5t4AL",
  "key27": "231qTqsjg7ykgQrYQs9eho2mHReSoGjXkdKzay8VrXMc3nfNQZfo8nLPKGdJPcL9ikGmC3eozWBqicoV6VH2Lg97",
  "key28": "CzStvkpzrjcRn5sveV3pjc8izSqE1PV8YGcoQ1bD7bvRVg8Jee1Dacssni6Y1Tp2ZWwFMXVHre792Ns94ucZMTz",
  "key29": "ZDZBnxFMV8xvnNTaUcHabMiwwNcU71Y4r4V9mQokUFErMzdH4XjdCFPRWwiNiEtBMSdGVqUE9ZAnkkhYvp5yZZd",
  "key30": "KDUTy49RKeAQnNVnLNzdN1eajSxB69WjWrSoTu6kMY9fVjGRaCPFKk6jpVMxfnn834WxktvJdBL18pLPSEyJehV",
  "key31": "4PJhoJypMjvDmKUBP8EEuBCfCoPUFTCaahbUcgSMcw7TamGWyiQXcFqE7ZrZkN3gKVFZv6C4nfmYBkMtxJcC2ZQM",
  "key32": "62yTt68UmBDs1NFueXufBzPzzxebVqwVwZdxULG4ztoWiq5JPN9V4oYgQM62zo7DRXvG1KZBoLgrZvwDucvJsHH3",
  "key33": "3ZzVQmyZ1voEexNonLf4KM9Pr58ZDNji3npYefeV7DM6Hiun19cJCttd2RXFBzkTPcaETn52wAfj3RDGQMAwQYNq"
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
