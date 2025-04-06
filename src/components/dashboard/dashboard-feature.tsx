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
    "CTNCHA78zE7BWpzB4RRPuSe7Js3HVDcV2XXbhyKcAxS6Yi4FHZYsEQyKgHXdQkPU6vtuLexE5rwQ841ZxxBNqRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sg7nji3wEduVwccCTdgbKoXyfpQs2yGyJHZYVnDC4BBVZMGN9BMx22utLpLCJVrMjqsQfoyytfDvi1sgBiFiQ6q",
  "key1": "5z2AhgQKa9wbtW5kP2WdSAQdGj2RRmaxJxkqDBg1f2yK7YjguwPngvAeAM7zJhiW57G3dM4bhihuhwhhXuZXrzrn",
  "key2": "29oEKTA1MLRLJtg84fEqZMhJtST9JPqEDyRMzt2wGZHcaLb2dBirvAavd5Q4DbYA88tmNFdMY3g8P3FwD4CijK4M",
  "key3": "5duwACJv2m8Mk1TwRLL2hHePr6CVaLKug3ZNnjapnEKBXqVMayoety94Bk5gbBWFfaSJtGXnMi5tzFrHzeyG7Qdd",
  "key4": "2yn43yvA1U3HjQ9d7LXzypGDNYiAYnhwYBBgEh3LuBhtYnXJnMF4SadU1e3jJtVqthkAMnRpUDSYGoY68VVuNJud",
  "key5": "4TeBL7tRxgaZYzZNyAQGySWAxPcC91pMngpvK13jHnkP8rUNqLCAmoc8rWMVP6v4tSgZQyqkD7a3t3x9KU6GgoTc",
  "key6": "2Ygr5A1cC9zFo6WALL3xTqSC8NDBQUELahY1EY3LScmvdiA6vgPEEUd6QDLb54Uq5eU5h1UHTRfS4xiZ7m6ZgUVw",
  "key7": "22QH9iDM3CsYYMHhTdupbiqJ74C1UvtuTBPPTUczLsZABue4Xci2EXhkoMd2PjM46qsQjtk4aVHdmitf23Doki4y",
  "key8": "TteHN1JkHvSAmW1QLRnVK8L4PTpknuo6dvFzHkSjAE9maG6K1My2pEwZJJTBQnt9vrKxA1wmgEUXQmvLh8Ye3bz",
  "key9": "3swcqRtseYnhYshATnRZv1tgM5vfpvVisw8QNwSHrEXoEGCUZCyaVWsLtwCbLxN6FzoSMTS3axFL9xLoKzrscDVP",
  "key10": "836pKvogkhiDGGs1rc7vFfq7CaTGKwP8VuSmcqUtsageHRvK39PxQwrTm8VbxbYuHCFUxyDSqGWP5CT9cwNyC7K",
  "key11": "3RrkMNYsEWtSWpiyPLGZWjkbojhTXc6VLp5YbKGJde4t5nCL7q5EXsaMSuSzhYypryX8rV8hhqnKdPaKMq2KyRGw",
  "key12": "2Q73mLwSEthYpppjJSXGGByWKDnMSePd3Rrsphs3xhhmkrjvNwPQQyMRP3uo7wYSpxUicmvmJw4JVsyEjw6URTXW",
  "key13": "4zEAgyjqMu9AUUMKPXDR9XMf7mC8dzezoCRNQTDxeFMCd1FMSZdKhx7EwowuZUBqbEHRxtxhG44h7ahWW2JqpEU9",
  "key14": "3NqU3dr3biuDhYZvWp3KX9s3fyxTp4xGQSfNgeGZT6vZJYgwXXtVhxgwhpSdwTr6HSsJ5rdNr3FwGpWfjkk9uAkM",
  "key15": "3ZcPbxFnZ1gmTHj8Zwy5mWgC8bztryqickrz4vkjpr6TMTfuPZ15NrVedBFxj8vRb579na5EP3ysWV71o1rGb5r4",
  "key16": "2N5rMPfXzhhmrvwMGt1Do2kDyN1FwUwsmrjiZi4ETXHNhuhKRtsFhb8qfHJu2cmcxFxJftoQBZyZyhwht27zJUxX",
  "key17": "2N8V5FeHJhrzmsUqZzRjGBDk7oVffVFQjyJxnwa4ADLGLA9LiKaVEcwHjTEYnAisvQ4yw3Zn6LE6yk1VYovEJHKX",
  "key18": "4vbbQaGpUHSY6vXgdpd9s6rZ3v1gL375xCnWNiNaL6zoEf8PKPyVi4WDRNWqjUpLebJSxvHbVDuDgXqNoMnpdPbE",
  "key19": "eW8ZTkq9aqUiiUWtQX636jvwrcZGdeqKCzS9vgA5Tas4z8QdT6vEuwWjUwm25mQQDveVJUrVNEfXyQ1Q1gaAb7m",
  "key20": "2rXQHEDhoSuaEjpzKKEY8nX8wSgUYDUSsYa8pPbCHNrjH6nDNz3b7NwaJsobjvVL2n9qpJ3yuBndcNRr1F5WT6KL",
  "key21": "12544FzJ2F3hKzX9YQjSLY4zkYG2qFhdARoCjzvC9nWNXEc2zFvfhKX49FjRvckBUoJzc3UB93UmGp1uZEjVTRjr",
  "key22": "2Bw21wW6YmhVu8P7wMxuuUUfBTYysjZPE6LsJG3JasAMe7EbsUt3nQJD1QxwnFDYzvrSEp3fdFKATTnXSNqHoKfp",
  "key23": "5hooazj4KYo5nH7cAVcmkZbZ1hNSnN5ZBeQBn12FKsQEYXAjSCGTcnZhvTPFGB72DVJU43ZS2LVLa9DcpWJWhFpJ",
  "key24": "5wci3onMkpbterq58JWmJ3rothweaJ7SP9uExQ9bPGdAZ6pqvfR2orq8mZhfVWU3kowQGT1UhSd9tJcr6LdHrbsK",
  "key25": "RYHd1JAnpbWgtFXhQ9WNhE5oP3ao1n4pFHV3Ux19ZLraib46pcqBeDXgg1pXT92UkRBqYG77gpo1jDJydGUGLw1",
  "key26": "zxaWTqSoYbLYCGgHBqAKZvd55vyoSf3kJGF9L6z36GgQVbFwpN7dw8XJBN3L3t9Rq7MrCfjuRH1gR9NK5zxbAQE",
  "key27": "3dsx3qrjSwau1fFFxuw9cWqzzNZUmYqzhSAT37xYGZoLtYFzF9ewviuwE8MPRWVjc8PhxmD1W29EvdjAzjQRCQDq",
  "key28": "hPnse6LZHBSxSP4KmvBS3U16sNLB8Sv6gvjJaRLjYFwnx2wdGc1ymAMWUbk85mNMVnqa4xZojFHSme9JjwTkBSN",
  "key29": "5qhE32Jra1L94NtcYApsiBjB9Ro5cKUs9zBmbxY7PnYCwfdKxcBcqemSw8qQe4cWrMq1xHuTn6duksTHpp1C7yHQ",
  "key30": "BRPwJh5SJaGCyUc856Y4dQ6hoUiAXFXwwju6tdcQtvzVEg2GWynjXygqszsFPb8vjxpTT3aPzDPTR1BamGZ38sT",
  "key31": "4zXN1C2iEBgDWA68SCBf821c1M3qLDpF8SmQNtpfYSNbj6QWRZRtpgPNazi7YbiuGEwPH7PcqriyDnVDPyhZ5qPT"
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
