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
    "4SNT4AmcWYHCGoUdyavtxMRH7HTxnNq93Scv4Mc1JXo7unvj2FmMGThKmq6HMY8c4X8qVdz7c93UfYTJ4ohJo3Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUWvRQjn84uFgnuyF3hnnoL2J1eftw77tdk5EzQeppmTdnMB9itAe3fy2eHeeC8ABP5yjuvYx5ZjtQRqdVECuCq",
  "key1": "5WXZyLwKA3o3ATDEAFM9auxyr78uBNE5cFqYkFYVZoCjmo7mDEjT8aDyNX7WHGjViBAuwkZjuAy32ykqkYfvUTDq",
  "key2": "2NB3JJZtNkceYt5edwmWievYXD1jeX2HSd4guX3ehfbdtXNiijz2YbvHaM8GqQ6S1GTkHfdfyJiiwrkxSSGDsbkU",
  "key3": "5rDsLyNKJZs7czXwpbVu3uUUGL9BPHUJsN9AChz6YqoMuPtdEehm356Pd2MK1Adpi6x6JytHAJbzMDZc39maN2sR",
  "key4": "62n7TLn8tSV6UVVStGjReHbY4ZK4C3jcLom2EKbbUoim3WXZPKAihjvHjtt4AMSq5wsGcYXZuDpsJRy9gN6JEP7j",
  "key5": "35B8twVFitcimdJTtsQ2jUqcgw4Zy4nUHL1NvHtgBSWbQGrzYrEyryemJidbyJAagu9aTopzNkgfgcYgKAHqAjM5",
  "key6": "2ZSMRK4wDjEEdb5fyiEP6TuPwrwr4iHAv4otxNrWq54cLHpCtNMAyfNgx5rhdcfDRBeZrRF5SmNKCgqNsJ11Jhej",
  "key7": "w91hqKJawn5qZFAYHFmrB7hi9EbEKo8LoMQzNDGmw8baSupSvSwsMzhXFKbKAFYmRdk7HMzpGEiVgatkrAf6GuY",
  "key8": "ULB4LBbMDNSMtweA9pLgQrBfTqpWD9bnkScnkSTPtDadHF84Kx2ZznFZQrUG4iZLY3R1GbYBbYhMTij3ew3zhsU",
  "key9": "2bsQ2o5Btk9QrvCkUS27Bc5CbJMpim31CDjFVv94Z4mPF89jK2YTG7QYHmxRBqjdydihzmkRydWz51XSTzDYKgmX",
  "key10": "58EC91CnRK44fiBvJZN9MqrcpuR3wLqc9MHvzrHzXNn9sTZrqX4v7iK3s3oikiHx6Ln7Wxwg5t5amGFkRbTGYJ9V",
  "key11": "vuErKmxrkMg5BBpcP12PmR3Tzbyn8uUt5LZFnrskPVZDEm8zkpARkgxc2SKG2MjW3tcEnn9toLovuryGzm61G6j",
  "key12": "2KYD7WZhp7WPxq2vvMj8onLXfj42qDGdJ4dHpu7C4vUXgD6BBSMCPuLMrafFeTRG4cFeaBJgdxFAYx5SeQnUpdtC",
  "key13": "2xwrzLDLcvwqq81QyqsBRf1h9vJupdbTS8Ei8iULJKHN3xbkBczE2otKuDd39uBw2cYbkQAnyYXykQrNZSbchRMt",
  "key14": "53nxJrx1CWW6gFmwz8xaghDoyigQR4gQXC9wrodFn768cBUWYYT497Dmd8ktnHBWmeMsd6VW1ffmUSJNjX1bYzVS",
  "key15": "aoEJXi1jgeyRHtSfxykBTS21EJ8GhUkNQ2WqN3iUNrLxQSBfs83u7TrxeRSjSzc9eHrYCBLt1yycT3oBLoqu7dP",
  "key16": "HH6vUcz4DxDGHYrRYKpupokasWxovJubbErTXmMbAVrLE8gjTNJZRy9etrbqxJJFynTGEBqW58cRoeCijLzsxD9",
  "key17": "61tuudSKGWpkB6Vm6ygxEaeS1EbAV2VQSzpGqKFB7jjyespQhvADS8NzDXZQqb4ZtVR73EfD8u1adzkFJ3wWBEVn",
  "key18": "5FrfprmVxosEgzVo7VJVkanGNh4zSsUz8hUex5W7J9RYAhtGJDUFECfq9AaW88mjUuLwGEjB8vc8dPtEgdNRvhmR",
  "key19": "z36vhzop35hK2MjxK5E2A3MQJeWiDsh9FKE2L33JjEBW4nfUMbzEZhDhhUi4GLPqdzs3Ds6Zm8oknW8foaD5u1G",
  "key20": "2jRbdQRuP5mVKQGermcL5rBW43ncSuWX8cm7wWUt7gusaYYYEBaRDhNDju5i8UYfd9SwuoYTG3D8DEe7Z3FCKJxY",
  "key21": "4d561mbpdwsnU8s1UtBYEjkNemK4mczi1jeBrV6Nz4k6ARncrNPKxXprZkm6J5dWegbYUh2hR8qNe5Ejhc3ZKbRQ",
  "key22": "2bjL4LUt5JZKDbqbC61Z91USAYpzswkEyFnUiCayg6Bxdh9hBaEhg22U6r4AJGfGKpcvZmrSnZCnpqZm8eQqPoHf",
  "key23": "59A3XgX4gpqVK611P7zQpK5J1dW6jrKadq5L8Ejf6XMzwJ1FxP4XVyYxj3qRoMPWjRR4HshTENsnu3aEZT8VZzTc",
  "key24": "2e7GGCxiUBattbnSqmJAoVbeGnqivqZYFTCDUMZS3c33o7XQ5sDJq1R1RPhxSXARuixNBgbDvDntjVMfdaiB8oNi",
  "key25": "n9Hz2KTCYAibvRXzy4jYAawZ2Rqm1CuLiYRD5Pe1koi9JzLRwaL5smFeaUq28tzQo9Y8Ux62qRcLb4jqb4kQS3b",
  "key26": "4bJFL3icDVWwA1urxqxQQ7Qgw9UvvW3doYfubnYAYwN4iNg46JXEZ4NqWwjYmvbWS4uH5WtxzAQKhjhLEjxvpHat",
  "key27": "34rj1sz646eDS8EBQK9cZohYyEVpb69emChYtAVYaFF5GD2zZVsvTj3uXgg4gpGmCXkc9AqPjGH3FqQjb5ouYh1E",
  "key28": "2Tfe2jMEJ7j5sgaPKZeq2Pm7qbQ2F2ov5W1Ajhpi2AE1V1gwy8wT9FKvLNCZoBzX3ibPY3Go9FxcG3hEE2GKXBFa",
  "key29": "619YPyCtkmj82cB5sXN2XrGX8ZYtTs2FpBnpnDQE7SVTB1jYqVN24pKA1RDBwUUbU1QRYxhp3Us21yTkc62EsgUz",
  "key30": "5zmUuGQjpZ3qyQFDjUuFdg8vBJMwJako87Go8AEqsj7TU6qz6T7sFsXnVBJE3qMXNx6gKfPZXLwamEweDQ6eN4ZC",
  "key31": "4pWKZ1t5fPXSWSqPqq6sk6Xh9EsqYtfkw7exZL3CqMZZKqtM25FJe8JpywJWNZP9tWSTcCCqaSYzB98L3pSirAF5",
  "key32": "3dkUas28s7p6sUGjXCtaxFf3iad4CNuSFEfuANZcSEyZSjxaDn1F7sfWEH6TwTc2etJDBtvSR63ZASo8EucdsU9T",
  "key33": "5p5KJzVncB8eWUASUR9dktjAd2DwEEmYWbsEzYWjBpbNyMwvJoNmevBNzGFdi2kJ5oWHRDBRptPxvrDCBz4bCmPr",
  "key34": "2dd53LcdL45h5rz4atkvdKvqhNj2vuCQAtMD7TSZSxmTAe5GT1JqGm4q9ga2AFbR34wiTg5razU38h8ftEdLrjvi",
  "key35": "35TbhsSupyJaMYBqiGPHVF5ZziU7w8Lsb31Qv8GsxdjKmHCdinKzaNrh7J4jkomhn2cQZaqK6zFdEFsP5AH3LzYN",
  "key36": "3Fg8YACepSLeQFs1iHysFGWLDiVKresX8bSaHrT4SD5TX7GP6DUq1URicxQdSTdDPgryjLwXQwkvMeMNbEt2pbBr",
  "key37": "3v2vDEUT6f7zgxvDL4wvMwEMfhg2YrtRajUsC8RtpeuaziUGyJGZ8DkyLXJsw2na2SBKhDBGfxbRyyXjz8JcMt3z",
  "key38": "4RpfVVxhYWfVEbPXkkBzwtr34kC5XAJuFP3uXcQZGsvsC4kv8D1bkbRpLVv5zbwhb6X972kchV962YyZ7ocUgEwV"
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
