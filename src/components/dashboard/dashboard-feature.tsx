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
    "5h9eaefwd77jGH38aMWQJttRoQBcrwU3vSEiwTJqtfTFTvwWfCTaVzCQqRQwB2he4LDnzq1FbxR8pCKSKNAREiej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zT1LzF8wnD4SXmKE1NhnuuXv1DyfUZ23qtyGNEVqxRdUE4i7RXDUTpAWk2HuesXz9USEwZjwxKBsu6kJXHVGnZ2",
  "key1": "5dqVtawJaU89U556gVKRB4uaHkWm5HQWURzjCcMDmJ8uKYeMk2SGk1aFHG8t3iD9xmjVzGLbEYUzSHHYE3GiP68u",
  "key2": "349sKpo9AamH8gh1xTWWSdn8pHBR8uBAwwYUTTHW7QYyqkYwzzSWq5xwKsmxnvMkMgbgErG39Rx17bQPF71xFidP",
  "key3": "8uxTnwbWhHJv99JPBR2qLzKArtnbzNj9E1TH1WzYHgVq3cU2UyjEr1vsCdAzqe3kTqu43TrMtJdBnMga8LwjGw6",
  "key4": "4sQH4rmrr2ezRC8TqivguMnhKmj19NFecf1ED3fiGTcUMThTSgHQyteJTtsxzywzoNGcFzZsDreUKwuPwXJfcevn",
  "key5": "3ngzm8ed6wPLP97LosgvuLTsbcW5r6duZqVHjP3rStotn9PuU8KAKA9c4oK2kMVQiGSwqMmMkkWoEahpk3Z4jHVQ",
  "key6": "gjJtiBxtWL3BrLQL2BB5a5Z81yYnbBXm6QWJyrMJ9wmHtuxGvSWUMf2zm3a5h2Qjz8q4kzMwqtBkGQRu55yFBwY",
  "key7": "cSh79ctVQLPmNnpEV86b41vdGNLfR6sq1h2fkicRdTBdfRMajmJxQszZLdLrhUg5GQJX83GP2aZYzVCsK42yQuf",
  "key8": "48euoVYYK6gBnbk6y9Ykh9FcsrpX8LxJUPonV1AQ9dDPb47x8WzQBiFt4DcDMfJ8dWfM4TZoTw5JGcs82JKixh4",
  "key9": "ocou6VDq1RRgwTExm1DoWsqttXP45V11vqVk8XhBVk73VzET5NDG1bDt7aT3FvcWo6y4MCKZ41mkwCwUckdi3Gm",
  "key10": "5k5meeu5faFn2VP8ZznhHRoj6HxCEEjWx21oskSS25Hhw1qWiUfLpgoDmH9uqCJ6LSERX5dLRainZvrs83LQp5Ms",
  "key11": "UcoYE83GpwwJ6DFWhNjWzpuGStBJe1FGhH1BAMJGyxDJFPP4hzzx16eTtaEXBB6G7DRTgHjJ8vzWCHd2RmPpG9o",
  "key12": "2RDWfCLCy7eXT6EDg48erCTSFyBhSYXf7k4DbSpuYK8RWL8hfLL2n78nWfcmhTkAZvYMbxNP3ttYy23r6fq3QVNc",
  "key13": "neJqsWG4MqgsEnSb7bvQL1nFJMX111H4zp8CR8FV3WhAoKD4YEyscLy8ZaTB3QZfiw8GU9LCCLtRrrDmN9QcEMJ",
  "key14": "1EthaGxb1hufiB2qg2tSUtjjigGRwjNToav4FaZFTGhepsb1mAFGMEocPa1vLd8iuw3HNwT9xu4mpiBUEYtbBxM",
  "key15": "5qU8HSkFjTP23UH87HUNVwXn4V1tJhgvBAKr9hS2u4zuuZWFZUgei8wv5FUUatZJndp1Qb898Fb3acvgypbSk1v8",
  "key16": "4QE12ff24ZyRHCa95q8A6AUNoLrwxk69da5Thso9gjVs8bZXavXL31p4TZyqzijcLLeQhZyeBUzs9poPcMDFiPMk",
  "key17": "2UD4BApcXKENwoK1KmEM7dAFvodhjoUsx3HsABmeD4sun6AN6hZ5YW5mSeYmyQh3VU4ZE3pixhdTFx4pffEbczgE",
  "key18": "53DmmWDmgr5Fk7j3tqH8ErLnSMzuVepcB5fqmxT74bXUMBbN7bA1XZyGUCmbsWt7jrM5UKkWdRCByYxnEoQPzCFD",
  "key19": "4jDcC16nXyhC9gnkXkLMjE3wB9gvQFADnZYodhayfyfSi5BfRUjUFVTT4tUdksjdAtxF9ktensibkk1HG5c2wPHy",
  "key20": "6483eXWPJATYEzz1SXXbjkTiJkzvJaPJ5ZpinRcyAQnLxUXuWNXCAPekyvdiJzRfsv78yzGi2fW8y4EzpVhdfUm9",
  "key21": "W8gyCMwzABKFT6L8WSX12mVrnDgfjBbiHD14S1kv1JBYToVn8uaMfj62Bb2aMMuzmriNnaRD8eaWdwDSCKBA35b",
  "key22": "3vD8ncXjPrc9uAKSJGqqhxU9gNpCjksuu37q46XUgPpjpbJeWioTRyp8rt2A4aoXbrrktCbdjtH4W6CwjyexC6YV",
  "key23": "27s35XufG6BFN6b419912RdUUj9VYb2hMHPNM6dNFCj5KUjYV4WdX5UnGfLzzBuA1bxmiCsAQWcQGRkjGdN5wjwe",
  "key24": "5gkcNGTLBQP6PwSszX7pu6u4tXmM26w932kqJct9J9osHrq3S4KYEfG1B2UsQJ4Kh14nMZ5GeBNojAtxNnU1cZui",
  "key25": "3znjDyBoJZek7wxvbouZVQHzaXULxyytuHFBPV14kV8oSytrMgCMDHjtCcjiJquYstinpLdoRtmjMH9NYDpxoJxT",
  "key26": "3Nr8ee2joVdWPhURPxsy17vEjtRpXYqgqtC8KoGPWB2TbdkGyR95RaeiTkDt8tJLiUCKcNTxpvg61mA13zpFQWhm",
  "key27": "5ptSXUbBLt3EhARgehWSuKBGueWvass6QrRES4Y7S9BS436w8LiN4xTzsX4i6kCyPbBvSpATFcarD2mN2bfdhbHU",
  "key28": "2Uu3JJvTg5SXW73oP21mcFUdQa4gLTYfCYRrmvWxDx8UBUHbqWHoFKiaNGBUrAMxYRpy21VfkWKQrQUu6kGvdUhT",
  "key29": "63z9GXiuk2EVEZgke3LjJnudoEz1mbpVVH5FdA76nQRL7dr3skM4vs8VPU6JGgZdZwSTnJkDiK9F1JHTyKZsiq6c",
  "key30": "4y9yan58dtGdvJKoLipeXVitCn9EbWFMxu2uufNjenaakYMVkZZHUAQKjK2BgfbYNz5MTsTxN9j2mDa5eh1z4QAT",
  "key31": "2f88thTmTcQ5Qz71TyWUJSodwQBFToiGNZdNKc8fcAD9oZ1tc46A712qNnaFLtbF7Ya5G8QqGsx2mcGpreTv1qoZ",
  "key32": "5zNUSSWEeWgRh9KcRoyXQvpLHSTatcjWtCpSQDkVxqwJbewY2TCnoY481JgvoKpSjBbyUYFjBEGwyvAp4Wm4bVqs",
  "key33": "2UHZACr4LHHpFMYHQKF71uomd4RGaq5qgCkAfUJ78mFfBc7FxQDiJUKCBjh1SZWc2xsBBtfANLt1MnyUtLYmtKAi",
  "key34": "3e7cBnQeWr5wfJFbbbCkF2StcdZhCi7NtasCKBSsgbYHYLfCPjGowrUxXxL5cBrJ7nd2SgXphZuAYbLKkKgyDrPR",
  "key35": "2MVAFSMq6tzBSgEEYyY2BM9AmZrEWnY4HS1psLS65MeYDQzz1ThjJUrcgFXRHQDRozXqFe2r4XaHb3NcrgSMM6D8"
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
