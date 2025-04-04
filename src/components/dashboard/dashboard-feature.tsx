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
    "2BYSFw5z52S9HCsnPMdkFD1EsNc1yDi1NRkq56fnUvHnXfTDmyAAJm2KXnwEsiKZ5ggUur1ZxPRqHf3EvmEGbRsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63EyZBQ79LKjTz65sRxXnewUaoS5G3FRRsZnZ4skA18EJu7g3VxYvGToWJcmTTFtUbCq2tZ2VyGS9sADAog52fX5",
  "key1": "3inDtKy1FA364x3YFiMHaRBAxAQmKVXobEsEVus3gsTrmPkysdBHJSh4QaJwsR39CPuD7AQBiReFzZD2qrCsLnHn",
  "key2": "3uu7jmCHb17yV31Fv2RyaqS9i7BbaotApqBp5dsXPmafKmtbfqugXnCdhPjRyYrpveaSe4eYhzYLXMd3YQkUGzDg",
  "key3": "EyU54N69D6FFaXVZiHFcCPAMQ2NSfK8YCV1jmKETLPdbZ7ZTuiSGs1ydwZdfrGSiVPzwNsVz2UDYvVKUm1PHoh4",
  "key4": "5UhLLVZGyLYfq8A5TB3oXYt1UCybgTi6xmQYigfSJK6icJGc9i18ha9tx6wiYZD8DYA4fvK4o49fcmwUhZhTJmhy",
  "key5": "2sRhyoPaL4ZuUjrnLQxEWWmXzm7AMS6kcmCQv6rLnDCBYvMgp8F4ghydGt7Z9UsE3K84whakrks7nXYV5QCrRtTZ",
  "key6": "AqahpvbARu8aFEo9Ux4x1MFoeWBxbtTfKprUmxSBzP3xBDAqn8U1kAXpH6nbuxt7RFLH3aX4J4dw6CZ4TzuvAjz",
  "key7": "2L54n9sqREgsMa9CkNqqTAQRbf9s8QFjay7nue3RQeeHMbqHjCYPQud37S5LXiAQYrSBtAg86AxT1uWVnY2pzz6c",
  "key8": "65ZtFAqFp8keZWkc6vCCP5tpnLeZYqWxxxkDWV1rqMAHpdWvgGTU7r8yoWpJD8864QAwbrtS3a6AmDT2e87JJyiC",
  "key9": "B7tVmA6MaPzpP4QBDP4JmNZswTTmTDAwcbNp1pzpUdZseFU9XdtDNaVTHJNrgi3iMH23q3xSVxJ1CWdr1zUccFF",
  "key10": "3Dwqezp3t7cNFow7womqGJCAn3wehX53QrEWpFLKjJaGkzTERZN4X8ExhFCvfbd3LBmYCx5QWtYSKKn9bfETPf3M",
  "key11": "F2uC8yz4SiTLgok4iWtXpZSGr9VmhmU98qarf2bx5qgLvhvCELzSJNi3qjA9CK3AWwgtzdqCn142XniBZ15Nzda",
  "key12": "A8tNoRKKmDDP1FXLhwZT3anFisV3bAZS8a8K5qpu77uwoiXLJFiRtgy3hGS9YUbeL4ymLE2fauYG65KYhTdR3F3",
  "key13": "5W7mGvBqLTbdgw57eY4Wu7irrcJa6ZoV5X5Y1EeeNS6nbczV9iQ6Phmv1M3RWMv4P8Ahi5ZRRkZaeR1Z1PxcfBkX",
  "key14": "3WTxFvaXG8nMmRFVnht5kmVybc2Fo2LZMqTx1b88xRJUZVy2RuKRqt2wRwUfSFqsjQF2ngTxE73RZnwspi9fjp8N",
  "key15": "679qxWA4KgP3Cc5gEemBfvvYw3gtocTs7FpKAwoTTaQf3H7Ujqbiwtw96n2MuhdDTsbjw8xCcdvQYbvQXjhocxK4",
  "key16": "3Z3LVQE3TKdKJw2KBRT1K8CbpX9CfTjqbGWEYeuihUTQGRaFvhZH5XobyTvwRHyDw9qYAY9ofkAPLgKvxRtNv2cW",
  "key17": "5qJtdTP6otWxsR1663mdvRSwnvpby2xoXS5416C79oHsCRRKaoLUMtHW2LpWStY2mykk6b3y2Xnm4bfgh721dyRP",
  "key18": "4kW12BhJoDnUEDj7B8yJkEkqngJAUVvKYha632WS4NiaEHvLpm1HguoHWKzr9QExvB3hJe3fk92xxdLNhtD2AU4s",
  "key19": "4cdsYuf1G89fNimKTHep7TFjmKsN1h2cmhWJqmK5s3Kb3V5aaWbf1TchawooyWh9q2u6q8DR4eZKPsT9e8gjN1U2",
  "key20": "5Xz6yi6CK3QUn3yeFJTCLpk1yFireKQRGdtnnEvF6tkzJke9JNBiWAmTtEFAxsNcX4LhQuuStZhfknHtVbvKwP8W",
  "key21": "369hqTsgKiUWh6NgyEA1iS2ZcJLMVjazr9dfiTZ5JT9RDHTm8of3zHHeH1gBXiSgkZjeuTZU3SjKsN34242mRAKk",
  "key22": "GRT38uuQMf46okdE2Ke5n4Kw4MqbFyigJWeDEWH9myCuSKaXcDQ2fiq6b4P7nBj9RiggxiE5aY2xGep1fvkMCkH",
  "key23": "5NmmmVwgitQ9sHQgb2mAekXaWsxMNqTCxgGHYZgZx1yw1DCYgq8AugYgRTccgcGZFSi1FJPA5BSom6DbnscLqh7x",
  "key24": "3rHwZ6Q2fns8Ud6FjFYrmRXmDAfdrKfwjFoJJtCaAAZAPXKBeNUr8NK42ikfCBLcKKicgQAiJtrSMmA4bcC46S86",
  "key25": "4JyuzcpeqetRvDW22QmHjJLym6x45PHdmuU3rdMqejbZLgrDorgH6xBnZXfdSG6EzQ2FPweUXgVmxP2GzERhYFaq",
  "key26": "4W3cwhfVzxXa1LHBHbievebP1K1HZCkgpynrB6mWrHpgykaDKsCvJoDmwzFuZuhLdzz2RMfNdbQrUnWq39sHVT8f"
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
