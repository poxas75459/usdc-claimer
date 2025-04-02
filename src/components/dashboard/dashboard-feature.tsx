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
    "2TwFR7UTmPuGnVMDpXmVYiLegXbaWVDv8e8TbKxpFkjadCFnTyhqy34JR3EFfTBScADP7AbfB3zyUiRkLnvjsPRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vMVA8P5TBTzuGu8RgBiMJnYhUf2j8S6A1kXSFRV8qHLUUMNhp3cNiAoFN8xBNfiRuk93xoSyzrQn6Dc4oyyemZZ",
  "key1": "4z5ErreYCFX32hTeWFVr4h6dVpQviS4pNmpwWafquzFCTatvK8LmiEkw3KNUpogJszcTcAykYtSQk9AVRcNqZYKm",
  "key2": "kW2ZKBr2Q3wJBpjSojomVDqrmPbPSDuwtAExVSbvm8tcn7SwmW6pYV9LZ9sp2hHw9DVvfzLYjMQDK9v7VBzLt5b",
  "key3": "Cvkw1CD3kx2XUtctBKXAJr87NFfM54NFbRfgjYiEbJtt4tpoXWtqmiomMjeqLHHkLGZuJWXHgkmpUnCizbxJLcD",
  "key4": "5rDABC3kA56cNHb9ZyLPWAQdzCjNPN6TuMJ7e538cL3rcJmdunazhKUvURYczkwrTojaNokT2WGi4nFB7QDVWZV8",
  "key5": "SNJsfW2rKFPUPY5yg4FsQet2AhQQGaqmAvDajYGbH1FKHQsmuhvsmg59noNzKt4LLXw8Fbhw5sNcz4NKVt9w19w",
  "key6": "59vC74VKEinu68RCbRdM2HP866NGPmorptBbSPvAgEeJ9qiKdCZgdy2ThtSJo8cKRZnN6bsopngtRxARYdEQNXew",
  "key7": "2nTeXsJqVmXzuFRTyFFixz616RyCd1Z6eVZT97jrCcF52wftXZQZBGSzo8dzFXdkZ8PvjxrgGK8X44boeahhBjZz",
  "key8": "3DX2zC5uuvsNfosjYf7PTzjBJhqub1r3RvRbHVoPv68kbdceDzYvr3EfSqRw5KqXrU5vHkBhCxsK6NHPS7XZLfrY",
  "key9": "3SkAuRpC32y96o87PaMwu2LEnJF34ymbzkY8xpvrhEDubky68ssyujhrsWtNwcJ1fW5R19wyuoqsZpcvupxUBGsk",
  "key10": "3YGABeaJfnhDvAKXzV3ddkFi51XB7qLAwzMe799jh8eD2PDKvmDZQnK15wzQrEw9Rm5ZTUe84UwJ2yy7dVQ217Dx",
  "key11": "3LzYizomNtYCfz5XxrhHm2bAPjHApVw6BQUsawjwhHLytvCfxXVFXY2VD9KYpjC21hKVFXgRDjtcHTvpsR1m1Qi8",
  "key12": "31jeaemCJZ3Yc7EF79dgzFFRmWPa97ZKSx4DjZ2jmh5qfZDaLt96Ur6W5XFWDzZKwNCRknMB2jyBe8oRtWdbU6dy",
  "key13": "ehbgCCQr8txuQ5q8QwU4QDSyR7Y6mmYxJoArbWaKTahpLCLcCPf7BJuywzUNs9e6Yi3B71oYDgqc8NATCDkyGXS",
  "key14": "2J6xedJ4VegKHaPBYfQoLBUbfUcjE8UrjaBDFaJkawaWhkDBJG8KMVcvd3awT3uwHNhbTpZ2pgmySZ1Qfm7z6gxn",
  "key15": "4K2tnEdsDDjyfJnNPi3w5HGfgMFeVXgDFgyFcJaXsNCRVRdnGr6WmtUJHH191nEkvKjGxBV5MnkWK9HJ23adzgE7",
  "key16": "vzAS3TPzNNpxh5sRd1fbVFy1gWLGtvSo6utv4a5ygcAMhRBcidJFo1zhDi4Zbr8PWS87Sb2GpY2dHDic1zkcZka",
  "key17": "RghmpMBrb4CkMgVeg1J3RjQAAnKdtp4UzbkyRTWhFS3i1AcBFgKzttxn33Tv525zv2RHB8FShkmz9XykbHKRUgL",
  "key18": "1KT5FZK4EAT1nfS6Wr2xArhDHYTSSjAfXajT9oertr1W71x7U6UiT6toC7cB4VMHyJZPELKmoYcdNospQ5tiKEY",
  "key19": "62EDJnHMfvkSnVDLcL4ijJ2CM72Xu6v2LBaJJQFWQ6JnpQMCwNQhJKt94J3tXUNopp83dXYPGuDdGAeS9R9WxCQG",
  "key20": "34KTYXiXkXoqaQ6sjtsKH99AcVX64i1U9v84tQLrft6BUSD4CVpv8x42AHAePZ1dvaTUs1AcfwEP6pcCwNU9MAmg",
  "key21": "5ttBPxhdh12YKAGxHw3VqMb7bUJy3x6zTdPuUseAUbjzjtndvmZmokGi99ukx89DqeFmzxaVB4uAZDcjBdTjzkjY",
  "key22": "JbGLXN36ZWVuCeGhnPsnFyhojmpWDg2tbqJBFuVhFRGALe3Q6aGgkoLXj8TD3NA1XZssyX6XT2iy2fHMqkjEYD2",
  "key23": "4WbrBAKJ8ZGD9o6mwet32DXuGx5q9SZ6i7UDBrYEKPQV29Fqj1b8MtXd1oZFW2vQgZfkk4VQvpoYXgyu2TZHnLRg",
  "key24": "4tYDEViAzDq5iVMUcprAbXV5nxcK238AtqWjA4jMdz1QWjXaqiUwLkaiEbKPujLpsCD5LWWysYNDteb8pob2RhYL",
  "key25": "pyq6wnZ6gKHNUvfERzxTfNdQr1PCHubXSSfKdQVXVbGaDeoEgJDjFMM4UU4iSywHPRFoHocUZx6xg6CE25TB6Vb",
  "key26": "2Jchj34NSvJKsJhzDDcjJXHiwphTwzwx3Ct9wZxUuoAMtxDEN8zdQJzAqGo5mx9RWhJENkxDkwhYbFVocwDko9zV",
  "key27": "YfXP786DycoJ9HHseCfKZJ6tJBN4qebTEJQrn3QKySh857r15bNJ1DHSS1CT5WThBN1UXSSibwQwBoWXXiBRs5G",
  "key28": "21nvAsDthifsggnqGmEvfis5ePa37R8uehHVorV8hwNWCMwCi9cMgsMDnK3fDgDr9UqkRUFkPtKzRV5v3GyVSAPx",
  "key29": "qfaXBCgRmTPL2SWMotJvxv7wHL4qbeBuz5TbRcXmXxmuQ1hZTfQALHMqmUyzP7wspT4CceJmBgJdaAA3ugM67SX"
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
