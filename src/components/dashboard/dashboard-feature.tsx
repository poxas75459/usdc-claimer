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
    "46CJSHFhvPnKYnq7PkwxTe6EDDB9VbJyjbQJ9kaPRahTpDc2CLrFgYypg7MQCHZmioJRi85aqdmJe1sdY61P3fNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ffb5yH7NF9m4KKc5iZ4UpnsJrnRQkY6vXhLBEJibmnn8iZkYNfwSqSk2s6sJu1zxdiBP9cuFpsBMp7htXHwz2J",
  "key1": "Rj2EG9fey6xcoH1JARJ2La2LrdP4VPKizWNoWxF51gWaCnPECajhS1RGs3gYZX9xysekiSa4x9TUir2cukPfaN9",
  "key2": "5RZQE734JSLffZcVfY7wE53B9NZdAYHzVSbEb4goSDuiATVXEZJoyQwj62h9xjo2PYjT9ia2gPywThUJB2awbxiy",
  "key3": "Ayf1uikMrbea2tCoUuEPPEftRhFjQ3QyYJH3CbGsXs9AF4kr1jEGGFH36de3bWioy8JvjY3cc8SAe4RyJ3266kD",
  "key4": "4WimPYAonoHSMj7EEp1sUkTL3veCwJvRKz1fHqAxTNUnNF2SoLX2vutU8kZVcmHpX9i72oh1PVeZZn84wCUS6MCM",
  "key5": "5rJnyHY8T12cpK14P1rJ2e9h8ksVaGu9pWbs2JjWbNqPSU9uxgKQkVPxhzXU7tw6rak4gAQJiUSrEW3T87hS6FPx",
  "key6": "4HDYEDpgv1556HmWLuirfQkndmLPCT1vkY4cxMaWZ2S1NNw289A2Q9dnZFfPE7iR4NisgvtS5hDBg8HkG3mHA94p",
  "key7": "5UAyfKbrhmaj2Q5vDLspL376xr4t1q2wC9xP243P6aFD5zSxmBnfh5ZE1wc3wrvbEv61JCRLWAgAzFSnRH9BkxBL",
  "key8": "3e5wowNu3THmZ4qoA1as5dhaQRk697dKCahLT2hfb2r9KGzRwXS6qewyrNgqabRCKEfjZxb6FZ5AzQ9aa5tUHJW2",
  "key9": "34gJanGfRVsTFViJ8iUDUhi4TQfvzVByFXb6wUamEF73cuoyskNNr2vqBdV3WNhS2FGSwbLLWJNTJY9PMtfwYVtX",
  "key10": "5n5XpgRVpYUPKEAjA1bemGXknNhpYFkVzNWpJWNSw5LE9wmNjgx86mQzq1BFfwttYHBuF1XAHhCYzCFfHJVZKkZN",
  "key11": "5H6LyHFxQy9ekrkAe1qyYFW3LoeWbjVrRZAre5SQQc2aEpDYQDPXZCncZwhJxsdDYQ5kNntWbrr2ahSjAuVNzPbt",
  "key12": "35L8k5hxYRdS693hmpX4igKRuThqY1M9bhJqZ1h9MqLnzAwFoSaNHEkrAtTr5NouwU394xRgrtKRMyPE9ZJukEPx",
  "key13": "36v2PDjyiaVd83MPmepoHxVp4zWB1ZHUpp5c6Riv1ohrVrTPKaVHvoc3N1ZUAwHdCZHWo7LRmFWcCe4aBg6Mp6V1",
  "key14": "ECbGVuhjC68EV7gzoQanJf6uB97CCtCygWKHzjk2qreTtkZKUHyws5Q9cUe3RnktY52YizMxT3WLoHMUL2RiYwg",
  "key15": "2UB2MGmruZh4jbvYkEUPzUymhGaEXGv3LAfLaG6bDnZpneqgQrmt557vyesaP7iistWL41XZLfpXvCbQNGfgZwci",
  "key16": "4oEiaw2i1juwBz1AqrzeZPP1JfCf631hpScPxLMEGSHzToQ26LtEAD2nYCfXYJCp3UdCkfESqao4T7JfoavKAoNH",
  "key17": "egwdLmNj1AgvqUhgJMGsMhqU68Rto6jWgSaKtm1s73axNHUi62XYeiTLeDx7SzNAoQV9QqwzpLKrSjukZqgMqfr",
  "key18": "uE7J7ZbUNUy2NsSnEwyQa7CiKqXiNSSp34sH6DPUEfQPDd1SmVUTutYievat2ba4wUjJypc7UiyHDcgmxGozHip",
  "key19": "1qj2PQCsL5tgHnMjatm2xjVBwm5mq3CSraYwHUUZmvQKH6TYuxKH8qWgVvWTHAnnRgVpXgfRxpq9H15L9aRZ33f",
  "key20": "QHKtByjBEzDAc1f6j5jh5p3aLQ1bjMiFUVHVLszscDwoDjtaQjdURybz1xCXrY36JK8RjdUJ5fvxtEkgoUVEirL",
  "key21": "4KEvMGbLUbi26Zz8T7c48KjGRGuFmu8DvmAh2EeLzwrdYpyMbBwL5urn1QNYK2em6Vh2pz9Qq9vc4dtMV3WwuaS8",
  "key22": "4R1utGxTG7nopboPPA61T9uvetvf1YcYo2aScvRvdMD2Jh4YQDUA3UPVroufLx6eEDqNoofF6kGBtboRxyfzshSh",
  "key23": "52FRqycFp7jMMEAiDKm63aa2nn1adHR9oQiFc27hEA2FveLiJRFQjvpLczTeY28yDa9SLpKsF6BtjYxErU3rB5Mz",
  "key24": "53bAKZfZSAgU3b2vs8zAJezYGNaUaYY4NgSZLadu5adbJfn1AS4i7E9Yjk4y5mx7Vs5rUAxpoXFS6bjUvKAboEXV"
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
