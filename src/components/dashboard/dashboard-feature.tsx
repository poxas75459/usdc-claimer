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
    "TdpK5kcHCztqPiABu76mUaWqhvrWnVMsgGD6VNauBgC84mup7sCQ6PFEfR2MQXNZYcj51ruw2wfg5e336CiVNhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nbE2Pv4oquuKWVZyHV6ZG9LrucwyPanpvZ2R3qcSPhkWGRDoapQJ1jJ9AXPLueF14KVjQScdecvTRXpx1XEMgnv",
  "key1": "U7yxbA18jYXs2vZSsEZR5Eh7msCYtCZHqGXHU2SMuMoKQ5W6do1H7MXnGWoc9KSGmnUFzeR5R8S9CgYyckwTfWR",
  "key2": "Ws7UkJDhkWJFUFktM4ftLBMs5ENj2gVoeFqVRtwUPrH91XFtW2XEqLd2Tag7WURGghvtawL3EVqH98YXTzygWDx",
  "key3": "42s1hYV4bPDvWwgZRytFkP7gVguzg1PvpqjVjiEirRFkRfnGizixK3i5WLd78myxKjVjJm1C3r2VkJhDhCFy2edU",
  "key4": "5r3JtzpHxK1vEaFZibcQG71SpEYoDKXLiS1k6PbtQ2TbiNHT6YRQJVKdWR9L3H36nCZEo1xn16dWwwcUdAGo1Tmm",
  "key5": "3cQbozYiY2H7kRMdAXiTZvqCbwKuHM43HjPgSykn1VxHiwuyqQPZk4T8ud1Wh9Kjet3h3upJ2mrY8yVswv8npNBC",
  "key6": "dCLj3LdWjrsyshjnhE5KAHNpMG2XVzXaqcm14xCvj9FTfvNFWPbzNudx4PL2eQ3ApCShrUd7pAVfyajfPC3Ete9",
  "key7": "Di68PTDHyP8oHRz6bAXDG4W39Ch6bvEVEtBsgG3qEfKjQbrwxNtyBGLJvBHu15geHCUN4isMYETfnx24M14j59G",
  "key8": "5cS8LuSyqU1X2gUMPHxgrdLGmTuSqbLndkdHzcHMLGYuKgktoQVDNfAZ4ux1fHCj1YL4S4pj7oBk52efPGL9jUWU",
  "key9": "zqu1453NoSuTwCEqidR8mup5uQ1BKEqfaKKnJFU7C9Y1mJLkBP6nGLp5iawdAVaZgWZuP62eWfDFG8Yh3YpcNpA",
  "key10": "5gz45hoCg4673wdxPdToTLtgLGwXthxMD4qjjjDGEmJPTaz3tcy2Ph6SHcDdWnMFZaRBEdvHu4ZZBNniX4WtyDxC",
  "key11": "2RxbKALiLhMwHrBxACMpWZrTicEeQUAtj7itKvCkoNtsDJswu7gagyF1RBKFqf27TevxoCCExx1zedbB6Se8xVqg",
  "key12": "67Ys95E2U6FsFkcc3Uo29xDTv1XNz1zxc6h2PQTJW6Y4owFqD7M1KGyeDgwKqBo8PjJCEMU4Z7kTBiztNAKpxxKF",
  "key13": "5xLUMtYvDCQD8qHA94ZrEq2SWB8qpyQbUsMoizBp3mHWiU65oAqQNyibAYSSKaqpjqhZvJNKykJLh9U1PgrAoVdk",
  "key14": "QYWmBwRLcBJJkSJbF8PzwuMxhbpcjQGTSU2Lf6HwZ8fDZFZNKch472Rp7yqmzc6X78FQ66aDZwj6j8bKEW9xBBY",
  "key15": "3F4QEBoQTVyFtuRTqSVC3F6dqv1Ypj7MwysBYuKdKxCQDuv1C7cQ6QRxfywzDj6BCddJTdnHZhefPFhVzCfMK9wj",
  "key16": "29ZEeNy1pyGwfH7XTHRb4LJ5b3F2j9sib86Tz9qtKwwuDHdqz4A2hEtLygr9TodvooqVCStJqey7BHNfwNLVQfBU",
  "key17": "3AZNtaXXV73AgepBjotvwcZRfULQdd3ut5KGFhjxnhG1H8G6CxM654NfvcyW2vhZJm9g59GKXbh48BavPM8dBMRe",
  "key18": "5Wjek6nMAhecX2UK4WHT9KTcsWHbosVEZMStdRCkHQV4FCiYY1PHAp4xCDRG3TZcWaEJjPkeM9uEZWuWrqzM1Nie",
  "key19": "63zvr1jwaobat6objoLE1xzY1afqKyMAaEq9gMgpU9vb8aA7gGno8DpCnePKEcpE1Ji21keLGh7aTQo6Wv8dapnz",
  "key20": "2CU8NPdycS4QtMsTZRq4KUNjtZosdKxby8HpJopHA1a3Hw9fPkXaHvtTjEa4kkzFjxsoqczTGMXBQYDmHWH1iejC",
  "key21": "4TeFqsvDm1d61zkjTMCzYdqDEJcV222cdg7ZSP6gqaNNo5R454sUxDJ9h38jXjxhMAJ3kLASsEcCd6vXTNKFKUZB",
  "key22": "4M31i4gehiHAGWaCf4dxD7W3fL6hXJTLp3qw2y9TdpeLDkpkXSkpcBHnvhUB8KMZtLEwnhwktjUasiyNVGv68TSn",
  "key23": "2hVqFQAzty3fbX5oKHQSS4vHU3sbHkkowNkksGRVoDuHkWL4wxmqzyN7wGg2zNPPxpCwqK7XZb4wqNv3eRbY961Y",
  "key24": "2MbGPrZU26qkPEygie3NU6mvg9EL5PMqWf6CvCsDnJFbsmJoE1oZJc9teQBG7gVhu5GvM8D8oa23RWH1R6fF7HSj",
  "key25": "25GFLaH3hYpJM4DmqCGp3rF21mxa6r4hmeZuzp86eYfU3v95DNWJKwHvwRpr8ZwWS1MmEbB7M8kWeCDVyPv4pxPu",
  "key26": "3LieWMWaSXC2Eb69eiV2dipApezH9wMorc9Wuq4w7WDGM6hB7Bs7KfzmpRTeceSAKpcoC51TgjkNV4wv1cKdXFYm",
  "key27": "2YAxJTRcEMxi1fZmmeK2DWfaj1rSFYcUgu8B3pVdAKXsajgYDDFU75ZQ793MAJF5jUcZEAsZGYr6AWLWh6ujegJ3",
  "key28": "8avAFoswz1UWD5E5cCehKL1zvTMZmHJY4U12CRk7NDgAAMH5CF6MregjXkW1RztJwYDub9LPQZsLzkRVnfKFvvn",
  "key29": "2BP7igJjqvVTQMz4GJcUm5p8FyGux663MakQdniFN6YCV8G8yLdk9GVEfedanoGXbm2qKCzg3Cenkfa2phhdozcw",
  "key30": "z1nZVAPAUpkemrapoq22LAZBprMPvQU3G1mLMR5yt22JaaD3wp6wn3ixz1U5X85kBNE4ii8QmJkf9A2ZyGxqsTD",
  "key31": "4fjR13oN5Cb7bZfc4FioqcucnC5EUvUKGbPTtTyCGmSjVKky2eFMukJMMb1xnzJ7cc4AqU2D8ozfY8A7oH8MvqNh",
  "key32": "oMKqhWk3yeZuvPhy9We1J9pFnoYVy3DJiDq1cKhvbqXcaUEjNi7PiiBN4rkYvsyKZ17ky5dXDJTE32tZiP8XtHN",
  "key33": "44pwtVCLWeU4pdBS3TVagwLdGRQSzdJyii4XssThZGP9EfZVAfYGk27577oHxK715T8BY6n7Ze6t1EMcTFXEaRfG",
  "key34": "5ZadmzKUKKFnm1rS1sbBJCN1ZbVzDFgnPRxq6qw5rnQQMjspVUtn77TzjjisbXeH3rxEVUa8CKh6XzMJKiAXcRnn",
  "key35": "5duRX3FLDAShxP1Yfr4VbQmVbT4VKKVP68Mqh1MYQWUhjqcwW8T4NLLeWDV5xWvPXMv4K4SjU2x8bGRUoCD1xTJ1",
  "key36": "26MiFAW9X1MrYWNw4g5rUw7CABGYvRwL4QKLQWt4R5g3cAchjjarsuAgMcXthQyehvvJbvJ44wKE7yfrtwnmYigF",
  "key37": "56v2gFnDaN6n1NDLfadcaFB8ZJbKzg6VkKaGrpfyxobnZMtZThehpVTYT9UwLprqwa8eVxbJfJgMUpP65DsEFVZn"
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
