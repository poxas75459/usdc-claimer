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
    "2Bep6iZhL3eg1rPSEcUcFSZ5s7B4ZoN1Uvbt44KVs2KG1WgAWGzS1jNcQ9QF1xp1iXSoegdUoqwRNPDNuTjPPxtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dEuHqxZMX4bjYc9eTtRnJHver8qa5ECVEDV3Mpzcm4YuGqQKRdGtWPwWduqhppJuWFap4McTZ56pi1h7SLSSPvZ",
  "key1": "oYgugBhYsp3baXJ2yd5whTdeA9XpYZPZfBFjdQAdTuzZ7gGr5atioerryf4tAg1iXX8NEN8HtKJ2YpK2RqB11uh",
  "key2": "63hZDfzq4EvdEAoVVyaJEQqLA9ZZENA84C9M9WoifjwESaRzWMBF2xFChQemqpGKWVRDRREGPY37vaK2H9SuBp6r",
  "key3": "4dAB12yprgXTsp2dQ88QUMRsMAdso4S1MFLUL7cEvAyAhD8FL6TBCAudV3w7dEPHGUd4AEwRWfx4vHwbSC1v9QDX",
  "key4": "2rTe8P332g4HNMBhFhcnq8qQHp91nwKnw3dBiik51dwLY5bgUK8VLrdAbjrhLAvKgbz2kedWiggXyk5y91WfhbhT",
  "key5": "4jJaQ7h8qrQXKbD1xq3Wg8RtBFKyQq3GGSy7DG1eDEtY4ZX7xNi9V625QrRurYTt5JLcd4ZhgvjqLq8KxWdSrytQ",
  "key6": "44AgKHu35iTNx8Re7iaej7ecgKXHSEY42X6uYESo1Mq5kaeL3iFHcCMY3DxCuU5NsQzYJNbRcpvAy6YiDg2RxZDe",
  "key7": "4c3Tpsx9LxPhpNAtuXLj1RG1HkSR3XjSXFUgfc9hfjirVzHG25QuQJGUoLjfwAvrJaH6fq4igwxx82upu6fZduZi",
  "key8": "3rCcSBn19mZp7vE2iiRiXKNwnybtyGEfito3MF8dpwEx2izxtVJdcX9SG69CZ2DUv7s7SSqJw5M6qrqNBc85aE2P",
  "key9": "FRJJK7hRjP7gb9AMngNXTesj1ind3WuAULrSJjNTDQ1Hk5dD8nCKbbMNTCUwxyY5UkncBF83pHafz6MnFrGPTKg",
  "key10": "66PBo2ajumTGPLu6NPenX5Z19LCo6yZimWSvo1HH47buQrdMHXQiiLojSDMcrKsN5JeZYgWgmr4ZJxF78sbGvygu",
  "key11": "4iEe52qF6iZ6HKomJgHovUFMiqu6EKryct9yqHdrG8FhBtoMDADsqZDeCG9cpx2UATvcTwpawwjv2J6BCsjUBm2Q",
  "key12": "4GooVkRSdAE1gxWqXmduhgBjEwYuAmt5ZosxMcRU8nM15R4w35hF7WWoc1Nibp4NFQP9xbSjSSE7dqxFtdbB6uCL",
  "key13": "4keD5dJUjJcffDYkCeKoN9fwixxQYP8WsmqLe7FUeSap1NmPF9zeQBEhDaDf6wBARwPE4J1bqxzJqiqxgWTeJjpy",
  "key14": "2kSYhNeww7eeLzHnZsxYyRguTGNiebSGmUQ7P85JKEG4Ncem9XEGtnCPRW5MXzHHwsCGysod6WPX6uePe6qyAj7K",
  "key15": "FgyfAtHDRrsmkinU3tLADNru4Ak8MiVVJpXvJZJuLvvanCwC1vqE8PaSXMYAW7MZMHakps53sszBgU2w1C4YfjY",
  "key16": "5u2Wopw1GzXSRN8ZEKaLwDLe4EeojbKSCLPTdChoqQgdyX1gAGEKbmb7XjS2U7Dt5nAmiqcigkKBWR1NyuPT5t9J",
  "key17": "2RE2bukYdFUH2TMkTwQXCE9NxY2N2tk5gTgT5jTvobEv7gB2XMpGkWb4ysymXgGDXQjrgof1yjqmKKuf31o6aoBV",
  "key18": "66Ti2GJ8CVQxtionF5aB15vcFziCRTawykSVa8wKrSXRnjobqtnTkxoWLLrzRsUWbakNQsz9MSYtYTRK6Hy2UmWK",
  "key19": "2MMgG7hcKHbMkshEVYooj4jJDY73uwroTfNaXnSFK9FngAYGuLLLZF526L7XqKWqTvzUJ6AgYJsT8SEKsGMdk1nA",
  "key20": "2LoMzDqj8UwBp8JhJUiS2U3ZeLMsBfjfVfafqveiEq11PQsH6GkxCbQkE9jXLkFMxU3QPX9Jcw24g7Wg86JrPsRd",
  "key21": "4DVywGm4DsK5P2UuBZ2vnvvFq76iKrhfoBabRdn26h3HJqbZcUfRYGPHMK4CeWd8iLRRmHeN8kMMCysT9u7uYsHg",
  "key22": "42ULjdj3T3nK3NTQ2MoSh2bx7JAEhQ1XW3upuz7ASPiDJ2pAhSKedwgSozFJW2DysYZ6ve2Hg5cj799sao3AvQHN",
  "key23": "3wan3attBVse3ZYU8s72P81vYLKhzXaLz7paswVQ5PBTJQ44Tg8EWcA2LbB1LFSddDBxjSXvYwcyPjhWZ3WxfdTe",
  "key24": "279sjvVx48f9m1B4GPdAUWddA9AWrN7u5NZH7HuYNfWTn9bhU13ewno2xz3EDuVvPfjqBwDfD2BErVMBK6Jrb7k4",
  "key25": "ta8DxGpEnbjcxydUHG7tVfSQzstdA29WX6cTehXw9bThgnakJv23rHtjq9zNpM8dp51EZGDCKt1WQ9uX7FXa8Jr",
  "key26": "23foG5ZSDpP3DwLTrSUUJx1hACeRrfeDwjDNzhbMHHCc2yknRZxFepzQwszLLFKxb8U3eygRYqymu5wJxEvQfYCP",
  "key27": "5saDKkUQzAeXVRXYC93BteWnXaUZEu5C2EPY4Bbnx59yy2YetUzb34sMymVtSceocSMtmfz9FjhvqY5DmbSLJcc3"
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
