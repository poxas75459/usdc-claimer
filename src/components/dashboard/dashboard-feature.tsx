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
    "35eVFXp1SGYgtqYvSHAa9X5UAJVH9EHEVfkThiqfBEiwxytYgwzADfnF1DTxf5nZndhfmBTxQXx6jZANUAEgwesp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x5uW4vtxWdQBuQki81RJiDwsW7mdHUn6CLe3RazTGJGbJFu6NjoQo3xReDmYfaJG2VkmgutcFnzx7XBY1NV3rYu",
  "key1": "4unJXWvKYTfGoJg8o63gbsXcaevGWUMLFxQa9uJ63tzjrJdxax4uX3tLBjAqvDJSLLaaWJz5J9g2GPPEfZdgfda4",
  "key2": "4a6pAWcPg2NFZ9KM3gWMjmwHwT6uKvb5YZVWuVShNvW3bzdeSXC21CJh6sfoyMJE44Cqv9p6h1WgEQTwUPbZrDY6",
  "key3": "2HAA84ke2N7mBhAQHht6eAjq7Ff5o2iFCyyEPLBs2a9axoHRBVCaZn7oX1yWGWZvzFvh8GEyZXtoFrYbjt1NcKdT",
  "key4": "23V2K51sJUxiah18pNJHUjFezLRmoUj4fkincVBvSoQ4aryBncb4QYYetRfDfwjEjeRd11Y1TgfC4wS53VKnmLni",
  "key5": "8iQG8BxRiAAeQ9VyX7w77zbviihsFJXsx6G6M9Y1BUFT8XaQ1xyMcmmVhUAmm4DT6z94W99iMPevTakQNEXeP4L",
  "key6": "3n4uBendbawzGENVSu569AoAaBAgyCrJMAZrSBReBC5zBZaogqRm77pu7QKxHozG5rTSmhuyZMzwrRqYu39YB8fG",
  "key7": "2Y3Bqj4o88o9aYNQGuxQSMRxEwejwrjbuFs6S1DTXSJfH4K9D5LMh4cpL9FtebLKPgiZvUF3xDhnywa8FAuF8ukm",
  "key8": "5uf7icmjHqhcnWpxAAZrLNFcqr5VvZouLmw13jXQugkbdEPgbFztA1cxGrCt8zZSLmMduBKAshMHNV8hreCenRMk",
  "key9": "4PnjqfNjTmrUAtueYSLCkKYqZ6PKLsiViiTGrK42wJvnSR8VvhEvjHsEtsF4dbDJM3mkufVjmityGdTSHoZzRDuZ",
  "key10": "2rAPRXoWCHHNPwKmYzvK379RntQ9qAXjPTmUNUXXLZ4r7Q6jCqQqSKYdgBy2G93osBe8Gt4hK7rFdH9GHK3HJCYs",
  "key11": "2cADq4ZDcz9XErNFRFroXnJExsytCJhfaQnvjuT95741c5XogFXC2UsHAykzoSxjRNC93nD5SP77SDYFgf5crVxY",
  "key12": "45a1ickwvZKH74XEs2NV2NLiJuhd8oXvpt6eceeWTYxfMsMEjXesEXyi22rG9UMxxYbNyXSQ5emR7sMTosBBtHzQ",
  "key13": "2wJWEDv5fAaksyXP2S6xT4gxK6yZc74D4pXbFm4P2yqLVZdJ83Eyh8i9uRJeQs2mr9Fob7GQgk7hZzSRqy5wEjWa",
  "key14": "62sDmVF3Wzi8C8XXRZq1BEyAj7yT98YZMa8utSmLwfWacjEzhx2FmVJXGY8ES4YYiYxtvJ2Xasw17d1QcZSEeH9U",
  "key15": "4HJmB1JJvi5Nngymsh82iAYc1ChMx65M1LZ6sxyEG5DBdvnonLeAfmnVgCJ4qWjxqhtsEw2kPZAk232waoaeRftE",
  "key16": "64uQKc3aSdmpfriujxUTr6nqNhWJtoVwgK9iGFjSdWwSFcgLKC9fhV42BWdkBYGJHoVKof3QTzYyyNFGh51HCUUK",
  "key17": "5qbH9ofVa914s4mDXdy33jYmxTxe9QKFtYCdrPNT4ufPNaY4iuth7D8Yr5TZwyeNuSypTE9kK7DgjUtm1tNTK4Sb",
  "key18": "4mXurYGEuJSukSjnm8KahVNL68SpM3r4psNqFmmeJ8xX5yiRtkaaGZ266JVhX2JNCzcmgvU364mXBJ1JbZjpmpvP",
  "key19": "x8zS9VVCmxoRpFB94afgJu66hauib14DfjUGEpb5hnh38kGQPvLgx6qBsXygaR3iTLPSLrsPsis3LYFWvzyaDVR",
  "key20": "238JhjYx7RoDcQFWfbB8uUZ58vdy4duzqM2NGDFqB7yHCzr9REwG1srsDWrAk1fak4STQKKZetgVpqygjLEZZUn8",
  "key21": "89kyzJPS1emMpJe9a1xskFxRHMJ69UBwQiQJMjVyhWQnEYRRHE9rwRvsGTgoN9k2ZFC3NSyiNVcaHRknc6rM5j4",
  "key22": "4zGG3bcsKoHScoGLdm9hXAbFyf9u9LyGGcqcRv4ULXzRNf581dvn1ZhaMsJRTfKXM5EVXiy9KGqc2s3ZsSEySgpT",
  "key23": "4QtGuK4tXXDSivnEi6CAN6kmMGAyCMKRZQf28UNswWtJJmfTKyGUFVF5uEaMAkMatTiHATrwsMb5x2efpJahRQg8",
  "key24": "2dZ55GTayfeYTQv6EBoLwsdt8EwELPmE82WCAQXGunNDKfCY5qCLBwkSs5bUUmfWM5n2pLq434wDE9MeAx7TZHa9",
  "key25": "55pkCKEmCVrbarv9PyEFdH3KUxkQ1V5bVRgdo8JU44vfboQQ3UzH226QXhbLJj1ZZMCvSw5x8N8sb8HpB3hQVZGd",
  "key26": "Dq2F8Tj5eb4wzepj9UUa4LiV4Aab1duVicfULeB2tiFdydrgBqXhE9gQ6idSjY8qC8jjpHBvCu3SKyBLEZRRsAn",
  "key27": "2kyuzyA5P55HHZU9Z89kFuZpyLQSqRcoggkc9ZqSc6kFusz35GGV5CAe31AkAFEf5tVTbF487Nq4DdHa9zFysQ3Q",
  "key28": "52sKpWfMV6jSpAh5LZgVEUyyp949Bt4bBC2xqZ8wXUP8ywvzBtJbKJb3iXb6wQdxvtjqRxsTqM1LXYN7xcXH4nWj",
  "key29": "5hFeDbGeG3jEydysLGi6Fer2SMY8QszZ3ejwZ9R5tBf7VxrASuj1iec7CUZvoF4e2MfqBVrKksUvUwMmN6yZBxk",
  "key30": "2EAjWDKV3bvgwbt6RqS7T5jpJiff61NEV7kN4bHW2M2QNEBpGwQZSrwJsz6V6pUnfV47qneNWhDFfcsj1a5iMniZ",
  "key31": "4rG7j5XtJwnc2CKGvCKKyVKgyb4KixypdKsqo3rZtcf1so5vAnfw1hPtAavBPHxY9ashtVcXX9zBF6W8Cogqdb9h",
  "key32": "4gntCqHZSPxVNVW8VL8VL5rpfdtYqP31ET3ACMjwKe9F5my9BmLzQexcpcYRPF6UE2PZegVwpcEZhatogXZwSuR9",
  "key33": "2pvM9Hdt8iQiJaQES3xbagMsoPxrqv7sBGyBBDSLpV7KCXuFQmvvWj1L3FzpSHa73xdR64hvP1t8nU8oM7XEKiZx",
  "key34": "KETyn51HTrPLWjU5JdFh7qZRu9heeqsvdNE53AuVbGjHz7ut68J6pPrqQwq4SkkoSHjkSs5aiLGnFejPbRdhcFK"
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
