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
    "3mCJkSUEuTMxcLEreh27s4mUtAkgxmLbsbuzmXsR3JUhkpoLxSZohQnzhRkqUocmFpsBbY327TPSBMCCxUNBSQ4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Unig6b2MB5wDPYKjo3QRk5cygKH73CxHzLRKx6f2C8b6uxDX1eRrzCkLXgGm9zB3cfLnZbqr85HYMbV8Ej3u2wx",
  "key1": "5oWLjq3FeZEdWCaDpCb8ADVKF9RLJEmDZLWYFaWtavvwwrY9VTWzTzBm2N7THzCftakQqPbo56SQpULEwP8ZvUWE",
  "key2": "3QXMmr6E1mnfUBtanE7bsy6JDtuindqqZpKftbt4AiEsjQ2UGEaWBN5ZSuWjQHeBU24jnrR3cBDg9GBJL5oiATjM",
  "key3": "57jfqGcsdUSYWakc5Usa6naxBbo8kqN3Vb1veGbfx1coMPNJLJKzx9aaFGEh2ihNtF4P9xueAcctBB6V1tMHdWR6",
  "key4": "3NchkCCesZQ2D6yP6rnChvaen6a9B848dtQFM2p67AqW5JTvxomNC9aQDhM2xdpJGkHBCSH5QA44A6kHYQ4QZ5i3",
  "key5": "Rg1kgfWkNtENRCjyUcBJGGGdZqsbwE8UiRKCGYP5kkA73RRUFQgmDSuMa4CCa6Um9PEzk27xWM1PJaLxDrUp96i",
  "key6": "5Xqm1PAZJCeHssf5MSauqx5xmxdAQnMdVKd1rKRUH6krdaZEiubaw2dW25U9jW3SGBdhZbU5g1MYG8KGYYB74mqx",
  "key7": "2g7Fqdo3RDosCwQSMJeLGe8s9Kdh4XrVanSayZswamAnsRvYBebw2nVnGr45YTZ7TU9pCQkrMurfAtagJS7aWarz",
  "key8": "R97k3Kw92uShupMbVrLv6GtdHPhyvqX2e1QwJmrxpcbQ7QU4mvSWVoDMDvAd6dgT292NWdB4GmXKsYuEwonaCKi",
  "key9": "2pxiYChDDSRYRodGWG56uVeo6BiBssiKrhNttCPZUCTrVZ6Lr1h52Q9UDec1Sdknu97gRkEahJDU63mByomE15JD",
  "key10": "SphZepZEyPVDeB7yMJWF3YtMaeMf6WYPKvYqvqZ5xfNuQUHTmKEezs1GCk5sz9fPdMbZkc8Ba9csXZ51dEMryRW",
  "key11": "4ZnSUyXaQP3WTENbwHZ6vksWUo8MmiAQfjKKPT8GTavsUn14fpeQNJHo1tUgpSQm1RgxN2QVKSyzEoWh4mgCVGMQ",
  "key12": "4S1svZCdj93mFjF8wvk8Z5p6HKBUNR8EzENC3hVg7vzvQdwmFN2vBkttpiqQvc9n8wiJ8xNxfHS8c24W56fGk3X5",
  "key13": "3EUXFtV77jkBEg3c4CdBqrugVgoRjv2WqjkRpBKq2sS4drMdHSPjnB4cjGB3kXqTu7Zxy9T7UCXp8JqXA6pLLFKr",
  "key14": "RXm4Sp5xDnNMXjgJg5uSZTag1zFtXqFPBRW9cHJ8QUvn82rd6dkJxLsQFAweYPMzMPkLvbdzoKd4dS366hE5bYA",
  "key15": "5vudPDQke9UE4bmBkepNcTqLLDGEJWiyeCmqd8KUKXq6Y98FkfUopsjgqw8Zn3TdK6b446YbcB5fuh856fu8hujq",
  "key16": "3JnfpefTUCdGpH77HqVgU1SuYisJYqstn6zYqFzSYZL3L6ztWRF4xdLzuTa7CAVWa3tvgeDwfjxUtmk1w88G1WFa",
  "key17": "5Wn1pHcLgpcouEZZCKNicweyKtuxpojeQB6p8KhGBnGBvWVa1fBDo1VQStdaKXA86uKYXzQSLXcwVuvcGubm9wbd",
  "key18": "2PDVb8Uj4Z9istj5H7Y55nQ4oJJBsiUxwKAZBsiS11G1WM4yErpiX2dVUoPZ4bw3sX3ZhKsEpwKifJnU21UVPwkU",
  "key19": "5a1RuRcMxSzcwx7UdBRbw4GdGRRSosZdEF5HT62PUWHhsAg5vb2KV8DVgu2obxEPymtSAKn4gYJxHBMbm4R2sVi3",
  "key20": "2gLSbqgjcEvyUAN2yug8BoSu36fxhi5MP2rMNuEwvDb8GbgVtTgWq1UutGYqHoHMLAEyVNKejYPzWFMRF3L5qYzZ",
  "key21": "4o2JgsAAkC6JRpUAikVVQ1B39wxCQDF5V1d4prvNxBCN5avR8LwsSxgjbRBmUPA6FB74mJKgk6xPNDjVxt2oCqDo",
  "key22": "2QhRy4Cw7wUJxccrU7YKZQL33yV9d4FZgv82viz5P4eBxKepVPZjMnggrDzT9Zf2pKYXvjXVaxreYmyXQ61AB3hC",
  "key23": "cZY9QVYrwMytL1BegJaE95VxRVFuL5NLDLqGdG48Z586HyFjD6NfDjUaqHdAGEXb47AhLj66sBzcWAwGtekc34Y",
  "key24": "QL7NWf32NsqaZqEqd1iYYoXkeF47diF2HDvdsmbYJvwBWNSkRdwTewYvzHbESMbot883EjMBGPfmfCg5hsd7u5f"
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
