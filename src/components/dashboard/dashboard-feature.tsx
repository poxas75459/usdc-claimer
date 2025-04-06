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
    "2wZQAGuSGjMJQMdrEydNE1tHNWzeKBm6v2WBUhmdoU6w9LmhjVG8wWmfwxrEP8W4z6XiBioQtqaEQGREpThhRBZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PejJuHhRT2Viv9rSKgF9nrhUJfo3ZYvVWEfhUr9F1BK19ThFTiJ1GzJKRRsDFbVyCtBNdYWHRiEbzJ6vdi4cEM5",
  "key1": "671mZxFMkFqgfjs7curbqBKxk4HTkGHk4TuBi4T326F4tWdn6TDWZKn8zCXA29hafSqh1pkMJDpar34TRAYNCUWj",
  "key2": "4u7CmXw1dR55Y1k7tPTu4bKK1MBJEx8KeJmvkRVq8VLsjZAj79AYKdcDGqwBE7yDyse84VTCwJeXXaT44i5FSvAb",
  "key3": "2vGwzq3Uu7Qttv3K8KfwAp6jFEVvTXewv6ScmNQdRYFf8hf1TzghCiYkUstR51QnqNNCeDasMGjrmhfNB1YMHAg2",
  "key4": "5W2mUNENK8G3gPJhPntwd89EQNSvZ7QcpM1fX7FWRvePCNi1XUpPPHnkEMKWNii3qmwbf1P3igya7ySsRL5tVXTZ",
  "key5": "2v3ZfPXbudW6VbereATrGF8DxAMaWVFWNikXttgtaHWy9vNLkECxA9HYYmA9dUS9x98Bka5fAMLtrMrFyXfjFUrR",
  "key6": "5QMZBiUP8a81X1euDH7rc4a1S5gZa8UAXudWgXBPanbosrqKdh7F2p4VwpU3saiswpZJ6rShNQJcTFEvNqFbGKZp",
  "key7": "62vQ3v81ofsA9kd61SmsaFdRpxvHYtQeBHgJ9ZRFratSsb4RKMAd9B7jhbKj1XtHVcHJ9JHybCXbrbjM5NtnVh8W",
  "key8": "3GZTYFsUHFs24LtUuMcchgjheZEXcRo3RwrdtNrBdjsSCbNTU6wL8puvvhedszSQ6f767zaKDGjHQAk4KRTpufXy",
  "key9": "2UZZcb1d6eRRs7wTye8sZW7SjykGLibZhP52mcjhDmJfqqWW2H2T1B4yRoUY26DvXfS9fF1y8y5AUZhnAjAfyez2",
  "key10": "2RWwTa8FcNYuBe2Xg4jJ4fALAhpcgXsLiGPPjn43eaEEuTXrdBPnagzhMGjwfb23tejuHbCeNihyThQQfkVfL1JL",
  "key11": "3UVtZQz6NKBbuegWgM6wBCSjejwfnG4Ac88YMoTmVpTjqHq6NjaRcr6odzo79eDcjgMpKwZkAB7UUrtSMY1VKh85",
  "key12": "47M82crrYoWyGKYLdMqj3fouiKE1B56czfFRCHCNfXqMLMqYzwcCEcwEiKNJ5N4sqacGj6iFjmLdRH8QWqUPmmX3",
  "key13": "A9nUEWPwV9SzNva1AR8JFHk6yWuU9hM22btA9QDosTR2JhHrkR4UihFPFZyJC1rN3YXBogLNk9R3ipSVzLuFQWN",
  "key14": "2gZmaBn5iHJqzsQ1CuMjMFKPZmqDgtS5H1VGgTk6S7bdn5wvWzXgZkpvhUuTy2FtheABJCi71VHDwTPjvC9unPPL",
  "key15": "4eqmR2jb5BNLem8NwsV3gkX51J5WQj3VzdcYRLtjX5itdGaSfPTDFB79JdN4o2UGjJcbcRdDu2Xmqb6mFqciXFoF",
  "key16": "4DKW79h7Mv2hBN8E3UsheP5jS9jYt9GPvMWPCFj17F8LHppQrch2uqqZNXZsG7gUzduKo3ACPXqwTdfU5e3NqwXf",
  "key17": "2tRyBU6ZW9u8AXftcFjw2hP46wrdK6VeuzdpiVyepyfhA9QJGRnJXhWnXN671XRTZ4r8ugNbseioxFkV3Pi8jFK",
  "key18": "3ZW3jFu5kMogrH3a11wLW6G3yEbw1368aZ2CHCdDST53JfJiVBqaQEKh1iQuKm3Jf7KGEdyHDTv4EcVRvMgkK328",
  "key19": "noQzrfYZdBQvvkv6s6VEWDCxo2XeovTrXRfAcZw6ZXsoyoAXqYo7iCTMmZd6AXySC6UufWgndN1aHpKp4y7Ubwq",
  "key20": "61u3CqGERc373m3yy3g93ELUjVJZuKGayNkDJKd8a6yTJ34phCW1S6MvkX1g4i84qo7yJgKbDR8dvc4zfAeCppQw",
  "key21": "5WmnKQB7DaHiCoRpta448gzNTrRiv7jCWRQSw8ERryYKXbFtNXu3o5U5EHyahLQBuq9CZsgRqzCvtsWrWD6TBfbd",
  "key22": "2AiXZBFomBfhQaCw5J94DWkPegufVGqeHwDRvXb5G8fnsPzZCfYN6FBuYj7XESu9eS7HdtXurB9FQe1yXzpenSMG",
  "key23": "2BomicESQAdYzSfjytJwFFoM6unbQqYMicix2kVwdepzpsZUqBRfgGZgPyDv2YRusc5YJrCuk2MU5JSSKWJK9kQF",
  "key24": "4c4tnsWiTQjh4kvmJVCCt8bFAcdb37PUpabV6yCP168GmEiz9mhRreFY4nkE7w3jjCuuF7E7fHcqVJKk1fxBSNv4",
  "key25": "381GTVWgXJMu58wE4wHGzAVEtUtVK5RzGwcyruUjkKHBcbDvU6ppEY9uGDnaTZJ7vinh3k6br4akfVFAMxX7zTtS",
  "key26": "5bVR95oas1YqpEWWr56NwRszYHFaRGVF1kUniU6RTzm9WP9g8LuSuNyruYg91KkQUXhEcxm8cziVHfM89kMnzn4p",
  "key27": "46s7N8DdUJCXUPdMDqMgJi9DtzhSeZcGhnYNkcJjn9rswfBpiWzuXd1GwtzSB43jch8TQm6RwnR4PCETggHj122d"
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
