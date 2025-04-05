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
    "aZxTEnPUthLqMTb7NXfh3DV56cpXbDEF4BQ8i1cXTnzUR5sQAJYqubcQ8NGXtjqhSWM6ttH7itYzb5Pf7wM5Lhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i556Z1RDbXEUjLgeMfuygF5QajxypJYCc8FDyBFvPJJxcARi1BgT24M6B5hAWSaZsWdsJS45pmdCUFHtEze8AR1",
  "key1": "sAxjjaA4SgVNrfY88d2ZHPJQ6ZWBHjNH3sx1chdb7hGzA5EbH8BwJLTXBhCVJGrPDGgLiKXGAsdSGoWA9S5nove",
  "key2": "5zwd1TAUH9DD4eYG1FNErn1tR1iH8L9JBHSQ8MbX3bQNoan1gVqe2Q7EKH5PPJLoDjT2AyasEWV56TrVYbSSXD5N",
  "key3": "3uGierARoqtZkEcg39ToqxPL2ENBzmCbWMDJn7EPce9hnvywG25tkiPgNaXptT1VPFeLAwrHucKtjLspdwTN8oJG",
  "key4": "39u1otcjPEsJVgQXucnJEwbRDAcJhq3y5vKxdueAKKiQh8FLmhHzr9b8KvZbtqS1BcybSQ37JsJSmZANLsi5kxDj",
  "key5": "2wWTHWxSAM5yiwj1mfsCsynrYYcY6gZFU6gmNAphGfubyDuASvYYz9DcFh1tus6KVVxa7S4u7m1oySCjn8hhna9w",
  "key6": "8oVhzaSCwy2vm3vyMZ66NV8jJRMgzCwYqo9WqtTp3QRYokGvDGF45m688E2fstvcnM7TpSPX5fwwQLnbmwdX4Be",
  "key7": "3BkCvXWqmhhTLoViJbt3mv99atr2axc5NzebjzmAom9iQw2VRyihwfozYPEDEG5WNAXPLKtPsfhLR8pQobTG5uVP",
  "key8": "22zvDHsULFfZJEXn6Xsw8d6bdh9dWrgnZ3y1agKLeEAv364kbKdKyWRTLww768zMPwJqEJoqWahtMnQqY9wecDwR",
  "key9": "2zjYmd4zjXTA8mCn7gmN9wwGfN95CX2Vyks3cnorKBMuHv3E7NKmYZMaPMyunLvb5FrYoGmeDnpsTAutf6dtXJH1",
  "key10": "3oEBJtEHbphmMtXVgBZnqGRQLmobPjoMK6VukMAS4LPqNnHvh2cit1DVnziEW2FFBWdWZgv3gqWn9FUzoVVUTGSx",
  "key11": "4JKK4mdtxDiuhkSAHpZTp5Y3731U1n2YJu2k5xQiMikDLpPfjcgfFuP9hCCc91Aox343qdhqBwz6ooPZ1p73Bmv",
  "key12": "5xEeAFpJN5PWdaWKiStu6UBjTfiHbzvv5Ghi7MqkS5RigetdkRwk3C2kvqTzBrFKbiAC9QrUo1NpzNXxRL4h8suP",
  "key13": "2MY5ewggCcD14CUgnu9Y9QkRsCwMKwiREpWQnSfYgCSn7oMBSVuW9kWFQm7irCFQUvnaGYcZNafcJa5PpmadCpNa",
  "key14": "3ZYLUnqVLpyt98GfYpCxMUjx6xA2vkPQZvuWPF2h7rViwkipro8N7dj1vwzq2qwwf5xdRkenVDuiBg5XZSPJqkay",
  "key15": "q1VohPcSKmfuV91888afCu9CUkuEBFYxLNp9tLWcm44uCeQE8Y6VFU7aDx8YCpEbbURaGHTLJGvB7n2TFxVJhG9",
  "key16": "2nAtk4iinjhYjxJcmfvSQq2WZU6UZq8V9So13beH37815hGPmEb4ZFDdYtrt8SLEKCNBzrQhFVWEr8eohDckLCQj",
  "key17": "2ZQcAjRPVWcTzJw9x75An21t5GkNCtbNCfgWxzWSAmfHY6X8fqzxP5oHGU8ga4rJVKKiuW2sJJMyQ6bEJqzTKUaF",
  "key18": "55eobRzeaKQQGVxj9wJ79ebcfrWLMxoG5Vq31bFGSQuwS38CcjWjptzkq5JE9eBzNT4zGwD7JjQDjHnfh51PD4Eq",
  "key19": "WsNetsyyJpeALxmRCgjRb8tFBfCXqNGv3VTcsDcYxg35mfUccfrZHJ92kqhQHJghFvHQH4P5dUTmmwwALDc1ghK",
  "key20": "4ySSXv5ccyZPoSVtTW3Fh3Wb5NtYotNDuBRqeGGg2UYVn2qZ3JN8KXnJY5NoZEU8XrqHdcb55o3UXvH7arSzFeRz",
  "key21": "3hGQTG1t11tHDpW587QV2xZ8dvMGvCmTU1B7yoL76vwVKksrdzJDaE9FucNVgfp26kR9QjP2UNCRHFKQ1WLNDT45",
  "key22": "JpDzkvhfS6ZsTBf4c3fzd257sZLX2WrKHC423oCuepX2nQo7dskZn6w7b1Z31FPJqZYbLfpSQMsDgdjZYpd3zsw",
  "key23": "39Qvab7nNmm7YzuqUXXP2UwxgCTjfaPreX9xJsWrUFVkrK8KStKMhDR4QYeu4tNsCqUc9vpaUQQg9Udi9A6R6C12",
  "key24": "3TtSAfyaF5SrUyaECR5VcJQg1iU7w3gkgEUXipUphhiLVNqQsBYfhYohEBcW5gzSJTWrQyZiJAqUiRgmodtBiCpv",
  "key25": "2A28hTzb7Ri3HturrgNfcGyBMsZvhUrv7tATqLAmAJAcmSwvpDV7mVa7MG8JzN9zbdkhhXe4GFkffQqKmjaVPes8",
  "key26": "4aCowQGFYXSdH5VgLWAEq5Lhy7AG1jncyoj1ZuQis7NXP8WhTsyqXL8NSnABpohZ4F4EvCgXsLCB3ERNntEji3qJ",
  "key27": "5gZp7bariWp7A12pGajpZuAvMNsqt4Dvw5fUW42Cgqf1WuCMffj8Yo9SX9TYFuwn76bvVUt98wEUfr3mDdJfvb6B",
  "key28": "2ioDtjk57HQ6eNhvkMnEdc9D9cQFnvCu2zHPTpb9NQBvcRsWRqcbyYqtBEYEBns3qugwoYCirAiDShrrckrNC3vj",
  "key29": "2TPsnb2q9FQNm3h2oQGwTXbEf8UWN97AyizuEzDe2vEwUW4rSAbBvYJKXK8yn6hNBv4vhJsSHyuNfbw1uJzTiwP5"
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
