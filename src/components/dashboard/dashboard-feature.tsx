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
    "3xUeFtZCpZKpwvdhDD5M6hCHDtVUVupyWtRyMiMmJZ9KYcf3oGTJCUNjmVKz1SjpwsqtP5MXxVNWZ4CK7LR4Pf4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PNNP2UPA3zL1ZUTnHetujmnayaxi6z3bZhqoYcmN8kRkQC771QdMSmYxMZTpgzgTv18WocbujjSnzTNdDBFo7qC",
  "key1": "5dfsDpbop4Qwzt822qi1t9XCvnTHd7QnH3M4VSJMXzwbGDTTRUkSbXmQy8jsW7N6uw3rtGUArb1myffGaMssydZG",
  "key2": "225oWyKQaLur3gpEjz5BYYh1XmT6b7PmJJc6xNt73hHUL7ZEqZyy3SJJxvP6tFpapoNdy4H9TrVgjtHt6BdzxZ45",
  "key3": "5jAkgXhW54dxWNPNzdMhoKrRVe3dCS6eTfDx8FjYwpyrPrfVGewZjJ46eMbQAWcvjqEDZ4p1M16MqrEWVWgZbkPC",
  "key4": "B1s9Kptr8xfC3teWWhhb7brwaQwbti2xgaQUU4qSfupyQtei5iF4MsqT9Y9JwUJcoUEDrD98zKpE4N2TdALQoyd",
  "key5": "2Bdn8vYmbQFkZGabEn5mx2gYxKV8xQbD1BhJgJWGuu6XsGZEGUUPRcUSeQJGGwHyy34Px2TgXqwC1GWd2qGz64G7",
  "key6": "5twhzsakPhavctsBraQPfAHmS8oagHJ6UsKqHzZ9QxUYJDgJQnNMGgLS1LZiyE4uki3eoRPANtPmuDVHaCg6SST9",
  "key7": "5qjDspdD4YvetR1m34a4w5pXQ8bT1JD13WaBCKAwmAq6imUU4hMtpehf7KfP9x38wzhH6oFULwNhpJRDeGFetyou",
  "key8": "5CS3faSYKYJM3qyyzo3qpNNGHt1MeKdGLrfL7ECHh4g6wQ13nUkGdvfkjHzwEKVCjXsydj57GJVogXu87B3UvgLj",
  "key9": "2XVHL2BfCMdV7zuYSVSAvc643aQjPEnfwtHaHYt3imswnEBzLjp71ZatjL1KE4tgtkdDw4gnTHVdpqJMdtUGBK8J",
  "key10": "5kCU3e9ehkSXdEZ1qFeUco3uuxty95FGrqJ6K3B7PLxvnpNFUoaQqV2NGW7UDif8YQKCTAdY3aQD4FgTc52trDVF",
  "key11": "28tdu4kDuRd1smYx2z8AssfRa5MZpCw3Wp9i5m8dm8iXatK4K6cM1aKK6odx6dRNAuhKCi3mhNHrLeJtAQK3jWBi",
  "key12": "3cCw7kSEbA1jg5fmxjmCEDVtiESK6mSrPZE45LBbwyLJ1z5KBZHqyBgPLZgoavjoGjiowxCfYMU4MLyFTAadnqRL",
  "key13": "kXYRpVGQKujoxydtkhyLfda1nQgJDdtWGxBoUKsYPmHd1PNuxtNAntE7PbbcBPrgzsbynFQ9vyTA99ws1m8pDeh",
  "key14": "3hJnqBqozrb9QrfRSQMZWkzgwX3p8UVQ3Pd3vxCaT4BqV1JZqF9kr1QQrcNfWBhnkacgwW3KVT65jZanesNM9kYY",
  "key15": "24gVJNLhGNkchFHsLbaBcsJmouAf7aSUckqnTG11qVr97NY3P8sFDEBw6z9jGKRZLDvZjBWAb6RPBpTRyhP4HpPQ",
  "key16": "4zE9u6o6d3vrX2VQzMSZCorVHSAFSMhZZCEnN27hfjqsqAdKGaD6jhrrfZhMXVi9bDSfQHYdTpVpPBmhaNakUpy8",
  "key17": "4HgHWLfdoe8xSSRYDXrsYisNn8uRPkF7oVsBMw3nV67nhQT3gsvdQvvXwj2ERv7bTkZh48j229eXT1EsuBMzEQ2",
  "key18": "aTSobK2WDxuG11zBNmZ11wqfs9tLGeCM4BHFsv4AtXGuWeHMjVAefnGXB1q1quLqPSLvu8DG629KU5925JwM6ZV",
  "key19": "GYdF1CBoLPaPMd3YxKvFeeMabuUBm6KVSqbhdzzoXMMcXPribFaCGXACWJMCGQ4q2gxDmrYio9DHCUutVYWzHge",
  "key20": "5favPQq8X9vjtV1EjZzebS4y3nGgi4YuRj9b9xyWPA8UWy1kwJLcZv1bJkusGcix4fY4tAjCQPL5vtpRmGXczZd2",
  "key21": "2c2MSgSpYpGcttTXfSg2Z7BVdKDNx8WEUCgKZgWhnQoGcZdtg3DGmVBgjxyhAuw5GATYJaFJpNSpVBs5JRvepvW5",
  "key22": "PKJRVXUBteBfw3pGY1vBVe2b7Xi7LnS8ZssQPDZEkBQBP4WJnye8fA6WWrYVLDKjWhNgsCutCh147fRefKDF8Hm",
  "key23": "5Pz2jTs1nbcqhMcS9v8gu1MBDRDWycUYwgjnbiLCiu2j2wuFXYnK4sAKZCTMJ4cZdN6UkSMCE8S1h8Yp29aimqym",
  "key24": "2oJNWQzLGpvoqUUAkNkQ1FfhqzXGyjdsR4wQ8j6BYVWatHdEvuwoHAUzdLzk63UVFTTrLCaTLngGwTsAj994JGbe",
  "key25": "2e98ZG8teTnFQ7aoodjZ2W4Cqegt2LwsazRsWEVmS9wv1Aobvgd5Np5CR4j2X6HKp1Xwha2EhMs2S1WLATUHTcNB",
  "key26": "5moJp9tBzkz33aJL6pi2vz8Zio5v63LnLgfxFF1G5mGPVKgKZ6Qvg7a5tE2MeaZSzPH2yKa3Hjz4QH71Ew9wUQKq",
  "key27": "3gkbvESjam937Lz7B3otNrTZwCC1HzcCYkZp7EQ7YDiBGukBK3fRNRErbe1nGbRzhfDACpxe7rHsUEGTZVBSYEtT",
  "key28": "45JdmyJHqkoAgYWRhn7L6tu5LcWoXPUrg5je9n33Q1M9c99teYxcm7DMQXBbA4bPwcNPqx3i2hYGon55Mdr3cE4z",
  "key29": "2vp6Tp4VkGJ82rGEUVdWw9nKjNVSztR25uRmqNE9L1RexaqFPoF9CwFiVR7d1kAWKrG6PyoT2dxECXHM7Z546aGs",
  "key30": "4NmpLa3aE1PerjbrYnhw5zDbbS4ZJxwkRzXht1F66kCkahVdCV5E3tHEVZG8rDnp6fL7G1mrkf6MzHDpWdPf8cw6",
  "key31": "5UPcVheP1odfYgYUoNsfxBpcpqmcQv2NJhtrim5sk6bk49msvC8i11yRkFXSaPEQ5hAkiapv4orv6i6L2NKFiZWu",
  "key32": "2RC6wtLgxaBGKYTvmpcPqxB9dmnSnvRznC3ciY3ShKwWv6qGhW9fLXxeHrw1WtHJgXE8knxT9x2y5sS61JYL2wrc",
  "key33": "22tw8k5LNY8xbaKaEHMG3ecoQe34VxNLqQaKNPEfqxF3dtmJrEYt5WHWxE1nEov6KFSMLz83DNpx7cKx9rrsamM4",
  "key34": "4TJnoTeUD6MzktFAv9ho3hvGN3yYn62fHZVeXPi3beazc2Uf52SL2sEgsHZvQrC5YhTgbrCzSYSutoKvQYHWCsbu",
  "key35": "3aY3HcNQJ7CBSDbGtXZG2xoHUmjFJqXemyDgefSaHhxeuW443fuLsBcKzeNxdhY7wYtphrrSmjGUc6EF7nZHqgJC",
  "key36": "3iwhzThnEDrMfNBWYLWE6336hJebUgN1yMY5FxwYHpocNxFapDERd7Qv1gqhjHGimzWs8oCziLe8roakJytRDwiv",
  "key37": "3tnjGbfsczcnrEuF73wTgFAtimmX4Yc8hVKXREugn9RJ4vTVDcGNcm3yBpyDAjxZgBorbo96MtqYQ5dpYmutDBfM",
  "key38": "3M5t663R9h32j6puSXxYtnPPczhiggX9brbGiz8opUJJpu99sitETzNQAYLT9rqaHPZ585R4QDmp5oFDsNskSfdy",
  "key39": "3ScfpzNuJak3Y4yARDXrNMgZtipzrJ5BCLigcqbPg4A4KghBwnEWMsbNpjQTkN9n6it2tkXcU6TrLAKfouyQyvJS",
  "key40": "2btdikeWX9qmWmxa2bDQC5oyN1k1CcyCZvvZnaXGjyzwhrjMbNMTsZphnMrrAzdzGu8FswMEQiRusYQHcEzKS4ey",
  "key41": "bp3aVTKufTcuRrAZpnkUdjAiyxv5EhLG62V27Bhn4moNwnFuxJHJMPEgVMmGUdZDpSagfJRgzHVZSsM1f5h9uiy"
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
