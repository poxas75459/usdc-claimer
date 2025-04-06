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
    "2aYZje15UMyyQT8S1kktMhxp1rCCVnCCiFLHQMVK9bt5FS8RXwsGY8Q2e2NTd7VsfKmA7otCce1WpghUSRzu4aoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DE6wTbN5x3KQeDwqux7uzVSXK4aBTc9SHseCQsZohvyWTWvDD5QfPHWtmDzASnMxGUeN8bSYV72nN9qr5ibpyjE",
  "key1": "3v4cwjworCzcxPy13EXWmv8apvMHRAmbit3wyNxykrEZxDxQM98i1Vav7wM6uHW9guHD9KCUgtCRQp1sCZffSzHm",
  "key2": "5QYfdnMG75cguGXm5PCmucdg1Mh6hJsGf2o8MHF95TyDWtBpx53G7t5H6f64nFepbcNPoEpT7whT6PAZ3hEwCXEA",
  "key3": "aS4EqH9nQ8qxFp2p6Mo6Ek9XEKT22BY9n8WJmhytUJUzaqsHEGhBCgSx4uBxRWGSirRKkEsb9Kjzr3EMPMM19RE",
  "key4": "4WWTV26a4V6kdw4CYFRRAigzwqfEcUXm8ZzPX5jLBHACYVKutCJjM4xHs6q9FhC7q3pbDBBAc3rR1jvybh8yYfL3",
  "key5": "4tK79cJiMLCitQyfNMky1dHvzvZ5RobLeeCZS1bmCY7yh9Vy15SiRyZiAZS4f928MpS7zeuVcE74zKt5BuewXVww",
  "key6": "2HLAD65aiZ8srLsGXYQQurbg3Y3XAGcjL7M6nvzymYtEJCeWQLzbvQmYrdg6afQhRPUWhHXUzb5XrX7Fxcb2Gm8L",
  "key7": "SeDJQYU1R2UzLUb92VYfW8wwDxXYC2xnR3buQs4Fh6PfgbnDU8gpHqNyUKkDQ4zHQTBWrmzFcRwbkAnZmGRRZRr",
  "key8": "KA8kXdUwquqGVtqFTRrq9aeeWMqbYRBon3Dc5w4pqreAcr9EDidtkUQ53FMJ186bgp3sj8MyxtYM7hX9CAWbWgJ",
  "key9": "3UdApvsTPiqo9Kz3wRiMZZLtZqcfjvm9vLmG6wTCkJrj83tB1fdsp3anRUK899sXaHTZU9mfXznNY7UYdy59Q3ur",
  "key10": "21YN6VJ86x8FmCcjuTgHirFzaUyeWHvbAzz6XbC3qU82ZNQ8nkdgJjcPCJpsZzWQgCtcxtXC1eyKVGLmEKxGs4WM",
  "key11": "64HTS6EfC6CdHYaGQLbnfCL91gpFjKkekXQJtmpQHgdDu2MrjWDJjiFqhfyzBZLJoZRRm8mdjMma9gfZaKNfkkHY",
  "key12": "26s8xf7ym7Aq8xPAyXaXiPzvfATrasQeJ3KiZVwTey13s4hNUQHb4ZZE5v54VrbjsBrBZSgduSsn6uVwXwDuBrbb",
  "key13": "3vQTsj8dQvfLViC557QPCWHRfy6ocEqTik4abw6cf1puUHnn9RgTda276rF5nkfBJHYEEH3BdvS7ngMMVx12WUsY",
  "key14": "2KLoLGHCXVGUXmUfNyp5dU6STCqxSHntqMxqyJtgYr9ruJumqjaX5Db5WspFTQyLFBEXL7tag6U6Mav4gN2SqQLn",
  "key15": "5eZDZoeLopnVJNTg2W5VxjMNPTJh1X67t9rUA2CB2HRorKkD3XZ5Ss8dLXeWxdPTFxYZciEUTeun1wyHukXNgBVF",
  "key16": "LCMZojSTNPpuujkf8Kuv5fC6VMGpBYHkZ2r7jZX1Zg3EVXMow4wXMXeCzfmwEp5AjvYnBZR7ZL8QiYARZgfFqib",
  "key17": "qY12x74WDmqmrdRLAbMBQy3z54wZAbvdCtTDeVFVrVknV4nhxv1UwTL9Um3N2sFdNPm2SVPD12XwLcq6TxdbGEs",
  "key18": "5aRJDPFexteNY7BCDipM5aoQNG5i1BSDNwDyf9SYSRPUDF8GSKV7tJqXyksDcDkur7pKrih1iVtrGZJqidAs8srm",
  "key19": "5ja5H917Qkqpmm2potMziqdDLJ9kAizdYo7nNaCgKNGevh9SJQHu6U4Y1gWgAqmopRC2BBwtzJSTb3G1TxA4vAMo",
  "key20": "2LTptFBKNfaWtquwyy9GnT1nDouhPuCzzT2kFfC3Cq2qRjnezGYDSgdLhGSq7S5Deuh9cFVyzNvXAvoyjMynddw2",
  "key21": "5UTvwBQqE83ZiLJJ84fnMNNzxp9PT3FHzvebzWzJpBuvKKGBbBqxXJwZQDWVjQV1ekG1DoLvYKKdnbddGw76KU9M",
  "key22": "4F8vj5u81BxgunPVcgvAKJ1i9nD5EugB2AeGewDwQqHQcV9BpqNro7d1Rp9Ma3XZXKC6ctzbiyFK5xW6E8fFokop",
  "key23": "rxymKKgpDNqk1pdvnBmJTg1xGo9PRp1LmZmq1WxkY8AS7XL28WBGvvrbHE5zpCSpYPGmt4CqJzxtTzaaZDyssbb",
  "key24": "4WCdzC1k1aMSUoJCX7rgN8VpZmvfYULTnKGBHyPr6KPU4eWb59VqPqUmwt7UUjmHTwUsKyXuMBhnNMM3gaSHbvYQ",
  "key25": "2wjUGJnM8TQS1GWm1WQp4DZW1XyMa56ojcpwXZMiDiYRfg7yopSP7GyHxmq2wuk1iGnrYYSNApFL4GrRyawNNZVS",
  "key26": "vW9roHLsDTsL93uD7sKGhLTDgpWGHbCEgBgW9Rt8T2MhjHfHJSoWeR2Ss7FdD4YZxGz4nT5ZbAUgXnKNTof5iGo",
  "key27": "49ZjegfrddYxvDbmL2GayDEBeiWq2bJRUn5gAfDcgzfkQDRpnS6ZoWJhNwG1kWa3AqVqQ5bRHeey4fbsvtPVPcKX",
  "key28": "4ZZaGcNzmMaBhhrq9MMqmyXr5aQxgDENhmeokeWr15od8UjVwfvCGiuBpYnmF3A3aq3XuqoqTNvxPJ7Mf8vWiUg1"
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
