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
    "5e1vvGnkkZmKWX4dqZJgta7BQU19Nd1YJo2kUBAszCewkMWUXFJxZcy5dJCiSvGtofwiAiTcMfV2u33uDLTLbqJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W1mmVNC59sfwXaQFPjQMN7Ywi6qM1fiiLHos79YQ8UAkv4hVPfJ12hxYAktzbCU7HwEYPKKgMMCebR5iUCUnA7E",
  "key1": "rZFfL9S9R9RRxUYqRe2Q5vzbCqyFHBypVjD1XpiXrwvEDDtGaTZUJL99Tx6Z9yhrWJ8BDqvinXoPVtfqytqRrBB",
  "key2": "651tRbQpmp5wmLXaU9DxBXTRuw41687t5vCkMxt4jRCbkqp4oUq7QKTvG4edqPZv14TLK4mYEo27izAFMCQZQCCS",
  "key3": "HNMWQ6Qfq3HNdBLWViKUMYHtykgQLWqLyjA8kmFRgMpcLsUtYGqKmBzb2msfWbBjuu6UkHP5N1RFSWukrku4Nd9",
  "key4": "62mgsbfAQaBBeJyo9iUpSygWseSuRHrua7drL79nvBcCwTy7JEH7N6GJw5VoeMnrBDYiVAjVoCRp47b3EG2rGny8",
  "key5": "Bc237VxBJzU84u3paYDTqbDB53thWfRwFE8yqpgPpmEZwM9isLXfAxY13Q2nHVJ1qpARU69SrgmU6HBApCap5K7",
  "key6": "4AdhJU33UN2yo9hFcmd4s85Qquy2Y6xdXhfQzw6hzVNDn4kdcJXQTdwtJnFCUeL7FdixsWG1Fz4dYaByEijHz5i3",
  "key7": "3nwFhTBL67ehj4PG87LrVNYH8KVaSpP34imDswdoKPT2S8o6PFxbfoxUA2MbQjjJUhkD3w2Z8v6a1KY45hWWGoxZ",
  "key8": "5mM9R5jDMncUx3SAz42pgjXK571v7NdJp1TGomnhovLymMdVyophtkcetu9okryWehLAzwXU7L11jqncXaSiXZbQ",
  "key9": "4bpPzevjrhGWJTZvzYgoXsKRofMcGLsSK3rc5yGv5bG3HdzD1R4TvQdAt88TTxDdic5iZhxHTQ1fM3vd39aGFuZi",
  "key10": "5S6ETZHaMkD2wJwkvy92AsLoudw68DbwxWqsjVbSrtViqMBrwKacjGwa57uQiKHwtqUVkssUqu4MeMAik4g3nvM5",
  "key11": "3sh1V3ZeXtbH4dBwSicEAbSeeWFqhT93giANfm9TnCv8YN4YsQFq3YnTvvaWTM5SWfHnMTt1EjyCv9rTTHogUCyB",
  "key12": "3kHaEJvRDK6XVizZ4RMnN5cKvqtA8GuzQXdwb6v289RAVArvNCozH3fCLfewHN6jziNeTXHXPqVE3znb9K5KLbNd",
  "key13": "4ap75Ktoti5Kf7n13KPjsxj14CkHwJmWK7GDG9HTmroRdPxrE1EWyTJSyfcUQrcqb833mdBtmdxGePn11T7q8vv1",
  "key14": "2SszwwjRvy9BxNCpeKaX5xm4F6KFTX5iTaBHFM9oGMqWPHbncrp4bekVGr6HqtRrS7m3NaqYyX9ivNYmX9wsScdP",
  "key15": "2MiZ5ctLzL2pdjcbpcQPkPV2KwZRS6RQZFBxY7LUGVgymXQYmWCHP4EMyKfCb3WJVamPpXYCSm72me1XGidjc6mm",
  "key16": "48P9kUfPd3yUgtDXBfBA9eNLsnL7HKxYDpfwwBRMympB4Mwnb64214DUxM8WNaZ3srhFkApHLwa87Ksw2ss2LQW7",
  "key17": "2QPLdPNkoww9g8ECWXqnbm3U3iDMXAFT448zPTowzm2XvZ9EAnAftrd1erGw7hJdHMUyoZ4v1zRTJVkBeXQyyHhe",
  "key18": "5nCBZ84YQ6FYeuxBpZn8jmJpVL1fA7whnkjZsw4Wd8DuZqcJxvfjbqQUS5YiufBBbmXwzj8vPEwks7ctx6mW9f6g",
  "key19": "kmfbJYofTb6Nbr8Jqy2cvYPkQjmnLeUeoTspzbe8wgdo9HNjwbajAwzk5JUybmMsGirRUG3hmP8Rgwc5EpctcZ1",
  "key20": "2fg2vgHJA5mGG5eBrawzgUMoPLbHMnZDp4DH5imXs2dLPufzEbstNNWPd4bPfGuwnYnYJhjZKoHaaQhRYfUpjCwp",
  "key21": "4SaVP1z1YD8GAhZQCFuJvScTXgWkVUy2VzbEsUACo2owW4JjxZfJPZpoHNUmUmihGmqYKFRbsaKKRm3qejgTM8jJ",
  "key22": "5LcjyxXcbRbQdCYsEaVbehQvpTwL7wkKGdhNgcSXCMCXZUAQYaw4BVYemjsppHc8KDuPS1LwMc3Yat8dn76CKL7D",
  "key23": "5PnXjmLw9eij7vd4e4RezqKAVXjV6WXtuZLVncVvMS5FrGHPhLedb7GcexXTPtz9TtqfcBM32tVdabp6hC1BNiZS",
  "key24": "4ck6eFqHBVcKvJvuZUzK1SCLVsyJsBEXkGDZMG6fqSrgTYdoj7KFQccQrB9q2TWVdzqBnY2W5Y4EZGcKPi9wBEe5",
  "key25": "4wg5VHmuXZ8ZEmSSBgiidSjrbsas96Uh2J3PixYu6PwWpRkJnVgMkP2dn4A1cNFJrGL5mCuFLad2tF8R2VDq4K8r",
  "key26": "tNYRd5AbqkgdXRrFTdhbG12jWk2azG8J3rj57cnHxtdv51GB3CLrwXPXjVenaftEvfafHSbERjD3kznJbq7jZhE",
  "key27": "3T7BSSQy5tWCx3wQrM8tPXNGryGKfHxCvVedePkFgf9UXsfLwmGULEppagGjzqiYLVYAcev2NRNTsPhqBhddfNTP",
  "key28": "3TkD6Q3iFMc2aCKzGn94pfhnr8e8xSGN53SWzFrKXfW9MKELXQPZsEvashjLYV9LUKtJGLF6spihXk7b25yXUPAw",
  "key29": "KAWuv98JsYhPctvAHAJwc3jMBiTMHr2gSH9DgseJF4n1sK94z4UV8mvtwcnZNMZCpVZqkdTr2Y2QJkZuQZtxujb",
  "key30": "2hngF5Vd6aQ5xQxoqivJnyYqjBCruiNxtf8FS36V5435THAUKWb8na9vvmL8RXYWKa5MDzj3WsVgQFgNRZ2dgW7Y",
  "key31": "39MhrwynNKdQ9AranWUon6RGYPmfvZGSWxhvZNjZyRux2qBJznJQHjhf596nJmP2hZY3RKqjJwoi989dBqeTBK38",
  "key32": "2D3mhmHZY8e59fMJG2m4eDdQh5ihNUDjYypaSpSMKxbLkJncCx6gbThTzwPfa2bn6ShPkM3itqyUrDePxWqrVowd",
  "key33": "2qwjJLRGGqeVMEBtzeQtecotoDyaUWCC4HZmbkuzYtad8VhWAUXcGQGtifNfDpuZhPYRvhfcW48qf9PAJVno3XN1",
  "key34": "4yoAHLAvXX59WSk6SW4v66Sj2tGRQ7vgp7waMhs8hAmT4QXGT4W761hkirQJYxy5hVTM56Ep7awy9yxnyAWpAUAW",
  "key35": "3TbZCqRDgy9EMw8xGLUBq6gVprWePyLd885cAiWakqCRT5fZWbAZu3xJtXx8qrsyNCgZYDH7bLRX8UUpndBKZB7f",
  "key36": "66foSG72rEWyNPt4pm9Dr5UDL3bAQmmbyXbmKKFNdcjXWSNRPeNVr6z8XGuW6XP6wnUqNb2YYu59d4NSqsfX7fj6",
  "key37": "Gm7pUmBmSsNgGvzFzdHC6UKS7YvMXC9XDDGksn7fTEEEei47D4QgiSvayy7NJFseXuWcbUmXa8NmwvV2HJpq5Ct",
  "key38": "538CxNyrdLd1P12UphXeEHADmc8HVKBPmwa5Sg7HFbvjXCj8wgpYfUNbAsZQGwbC1Kf5QtAorREMJQwedtcWgeu9"
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
