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
    "52HbBhhBrQ6dtMEW8719QvmkBXSpJcNEK1YkW535qS2rUAicU5Cc4TCKAqLYsfqjYFV5eucJAyfB1JPtcm97Kv4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46eKnenttqUHs5WJnixgUkQh2pZ9p8LxM7qQSvcJcv3ySU2wZQVBsdWdNVN5H7wDxJkVGM3udAE8QMGdVXT8X7qi",
  "key1": "3WbxbUKaxndThHQ4mrcRzqtmuVkLNiyJWnaH8YK6iA4vPJQXaeHYTrJMBHBpVtyb2GKhgm6Xvh1ieEMwT6vtem9E",
  "key2": "5AMTXGaxorK8eXmCLXAaYnZ7UoLygNMymSKELVK9X7ccBa7KHnL8M5Ffz1PLhv9UQUo6SzjJbMtNEBofCHAhxikL",
  "key3": "3YYAjwPzSksDTWJHM1Nac2b7pPmFsxifuBWZWgBUheDmf8xUP4hoDa56Q1XP1cQf4dE9Sv3Y3CwvZ5BpEHENxRQ1",
  "key4": "4bbgxtLSUAHfqg7gmpF4EEDG2NPJ4mnGU6h2zwJ4JWezHos8pkQbDQ2wZUHkLZowJeLAxw1Wi7VM6A36JSpakKmy",
  "key5": "2me1YMFP2tSY7QPURARQ4DrFhyVqxkwjgjkjzH3C5Uo2vgHfcHo4WyFnvUEFixkXJgYnht1cfU6Djfd8J2e37NWj",
  "key6": "4UUFVZ79xQhSiqXnyoLPcLToqFyUUKZyEiR9XAgPb37aj2cMhfTU6SWtNLtxVvxwJd69KrbxHsnfLvtJKCDJ8aWU",
  "key7": "5axwPkAYxZqapHiYLB6DYTqaEvc6tGMgK4PQgwnC6PNdhdTpBtYS2LiKgxWbc7PWioUGdqgcZ3Kmc2DDnWpBrgBm",
  "key8": "42yLbzHAxBzqb4uoRmaFr2KKsmpehastfx5n616NnFu6KVo5VyBxDGdPSHbhJQnE8Rfk6bw445ahCv27HdgxZBZs",
  "key9": "2yRceWYtYBGyWsubA8kCGTR9EH3RtqmRVAWu5y1CjB6M6uVRBCzAWUeGZ9ct8VrpaTuAQDHDN1JzS4T6zbEFUStH",
  "key10": "ctvGmNjbAMhtRf8u8L5TjFbSJXsDCZuQFUhR8MxV4pputfeLVX9kY4MhQ9mrvpLrA1AJMQaZjBTMuGeqKfFhU6q",
  "key11": "3JhrSjD3H4deJtkvoy1VUrVmGtZBj9mzbtENx6cThBNptiUHM9ffPthQgwWssD5a2pUztWXoSwdjE2Bu1rtzbDfx",
  "key12": "3dM6wYtQi5BhuSaCQVhH69RH81gdrYbSzYmTKTrUbhYaRAnt4Wps75GaizBmU5BdHeoXjFntJFEeGdn2QrjJJ3uK",
  "key13": "2vGr1oBgMuNXgheWs3vmDNKgF6pQ9VRJjsmvXdtrcmxuq7hPHJL4odPTmWNpyHt1mePAnQ9da8dudnyYFfF5mVMD",
  "key14": "bE2B74mn2ohS9bxQGhG7dXtnTJhTg8JqdHoWRiYKeqXEixREuX9CkYnQ8JPkQr7h9VozaPLGMZydPmsH1oY1tWz",
  "key15": "2JnDYPcG8S7zhus6kKuVHPnnpLxuVofTv5MnPWrnJdAVNG2KbfGyK9Cr1rQiasvsbkbrTXwAqjAGNmsqrKveSxa6",
  "key16": "4DFDNxRxk7LeyRBiLnDe3bQxZvER7aQj9bwTRGRGaphoTnfLAKhTY3UFpEWAjfSRj7pZrrH4QYL2DxwSXNcR9RMc",
  "key17": "55s6wQSSNGw8KYb87qB2Dbvg28f2mg5tLQZ9hrbdPnhgu4QhzjSKJRToTrjdaQXXgq3Et5FT88FovF6DpX3TH61L",
  "key18": "42xteUHnx3Xvjgvnt8oh5asHqGdJc2PRAQ7xLKL4mUSNNgyhZH6n9oxDjcJ9D5LG829bXKz8DjH5haEg2fqbmr27",
  "key19": "ajPaj3wQztXRTKdAVYtV1kSU3wsXXazFy9Ff62Zr9RQipcqb1QWQsjQovjoH9fdDzGK5YuJu9uZ8pQMfxV9RN2V",
  "key20": "5G4dqN52xadfhjVyEJ5cpfN877pHExKzC6aN5wxKP7SKdEQJ53ES4yWFqbX5GQUTebhKdD7EYpe8nAvsQp32mzDX",
  "key21": "3KNUnLs38Ds7gKhfpFHzDY2ZNpwz79z6MqTCjzCZ1hDTyJesYaKBVr64VzkcHGR52SGr8zCxxqYwKFvNkbHvnW3Q",
  "key22": "4HkAAMAqvsWubvpzDGmY136u4KSMQMKpbvhPfJS1tBNQfxYuv4Utsnw2EgiuCKuQDSUtwka3qik9JDSKLtWdUd4i",
  "key23": "2NGtPm6XJZfkjoLhfWSNQ5NKFBJHBSMiBRTAYYPuMotV143cNx8k1NbzoRdkveoabe9NEQmoNbxowYN5cXS5ecqq",
  "key24": "2z4DSV9YTABtcJ3CDhGyC3tMYEVwcPbxWa6BdQJ3vBKxwKQoiU5vZD9f6nNSgaUgoXPZmumjodbLPMsAqp1zDjv1",
  "key25": "LdkT6s8y3397LzNGDwrAv1aGSXZJ8QF9Uw5N9cicNp6eyPLYJcuR8HzTCySFCDnmeiBexaR1mDkVsgrWMDgaWu8"
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
