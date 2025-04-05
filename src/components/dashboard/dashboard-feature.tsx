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
    "5VRoMBEh1j9Rci3Z6RqsmQSmquGVWrJcRyjjboYkminU2Ew3z88BDjqekvnKWYARp2ySb9wD5KbTEj7ydHL82nJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nM5CR42oHyafub3pqMSm9gNsmfhSSSMoS4oUaDBZQt1UY4HMFTA3L5YbQoJYXpAvkpkxhWMHD7NRtkZd9rtE3n5",
  "key1": "4zSo6zXC6AUxpYx3xX4ZU6kVikabuNCZ7f2m3NtTBmETuR9ruKCh28C9s9tCYrMa5ZkFKGsTfmxZASmznTsd2RRh",
  "key2": "5pdybV1XMTXnoLYZ8RYqcEnU6gVt7tNNXy9VxvTRXhgmB5jNXTmPRS7RdpHTuFZE2p4vt8G9u9mzzTB1aRWMipxB",
  "key3": "3gBTK78SGrV2ujaSuArYdHXaPHkfCG4AhDiu4khkK4tB6wD4qsuEX5Y2RpEmaLnBtJ22Kn6yQo2PBsZJ7cxqvX5E",
  "key4": "gALnHSU3TDdafUh36XJNiRvWsgTFayz8fo3nKRoKZRZ7RDav7G7n3t62tNZYciMT1jmRs8SNpXW8DRiZYrkea8Q",
  "key5": "36mcQ54AHHBySa5bqZmGiYGTYCkirmSh16jFPHrhKy6LcXJT4GM2C6XdT2j3ty63RoFvNzTMdZQtAsjZ4BvzSA7Z",
  "key6": "5WpEoA5Z3Yannw3sG8NGwQksjjKwR7ANEScJQ4ggLuwxjmXjq9EE8G7WCfgjprhEQ2aNwsNkzG8ZUafNzb8EdvB3",
  "key7": "5Bz423uHyEXMbSkEM878Zh41SdquaHzvwAAG1byh51ujfPLY4tJCr8mDzgAycVh4q94r3QExeWfnrhJ16L8o8Vcu",
  "key8": "4YBkjARhtfs7n5tCpbSX9rKTtkmj5hBqtnkfzgoDaxvvs8pf6ckstxrVi9zweWMg8oPRzNApxtfbShpx3VKr6cHf",
  "key9": "5tCwsZPRfKJrmtvQUapsZtAXEJEJwFbKe2WqJX19sdaMvdWzZnpn5etQeh8cG9qXfZU87S7hxCDdvvvNwzj6Z5mK",
  "key10": "4ACVa6vHqfEgCmjanUaQkqYCasVn8X4CH6v1Jw5Pb8XQWqhESx8d5C19AUgj5sG1jeE5eY2CHmagZPH7SrAJsQY4",
  "key11": "h6xT92QC6HtgRpa17qBptHiTfgfs74ViiviJ4GQpbAyadTwA6fbhZnLDJSg1yVBShBErMZGJMLmWn48DDJ1yPLv",
  "key12": "BjL1QBTfLeBFGRpXFrqr4DG9VezVpZNVsdtXpZtRUByXk9Wvekq99WU8477obSuuYKPYmVMR6s1T3fXHJXaMPJD",
  "key13": "uxHk89hxw22QGZDbQ8CnsWE1PXDqQJuGq2XBYYMSigydT2rRBaNpaKqNuEzBBEWPviTYJssUQWn9PCiFnm3QMkA",
  "key14": "57QagRu3TiXpZrrs4TRMfMCJMir4PZXGxaLPvwxKFNLwAuisYFTb2mHNPE9Fw6VLRQopYF1FV4oavPUn6SdtJ5u9",
  "key15": "4y4pcnBi5WaBbsEgjX6XfAzHVty6LAvZRnyMBe6ebcP4pZ5dXgro2cvEPWywWcU3q7PtiMQxRfkQm3Mozgw6B8yJ",
  "key16": "tY8tXR4sr1M6f6h9CLYJHFqC4ZvLs7m2N4Z7aCj77WSopj3zWaBgeZoBjkzrPT5VtVCcy5DAFByivmNQ2VQfr3J",
  "key17": "5rFEEp7GDnktzWUCFiLv2Rt64g6oV6jc4BURpgnRQwEXrvGdPSZoEJyotWFpdxUo3fV4iPQDAb3MzVXH5nhq8iGA",
  "key18": "62Pdd3HRMHzz9ybbZhCsun4x3TnSACLgwhErpupMrtDsD6JmntMfc4KydQuqRJM8ZBNjNNJXLKaSdqQ7fFRr62Cc",
  "key19": "3K6sD6dp2h1MZWiQYZhU3Vg2zdCABuz9CTTHEEQ7LsFaEPTj41MHv2xzkwskyofXJxfDbnk44MTr7QKeY77uyEyS",
  "key20": "6fdwZbKsJpxyGAspBH3hoKXiJU6KLkNngEmSaye5zoGqRjUCMqR7HyDJ7FTBcLsw3RH96YKcaGQxMpMjo9j2QgB",
  "key21": "ezghfs5BVMDvemdaL4WVenh8c1vcmPTeEgEQZMy4JFuaRJmKvG7kTt3QunkhcuMxxZRbXopJKswSLCL8R5j9cs1",
  "key22": "3XeQAAJgyEKxnAHyoUrvAKgMEj5fZwsNFC5qa3JDJHaEjzHbyawfAzKJZsXXp6pkemGRDwaiQFYqxW1EEoP1b1Sj",
  "key23": "2FnYew5kc41RB5aXb5rqX7TaRu2kha7AmQcZqjFhGGKsbagqd89U5D4YTNusE5Wbq8w1JPcKCVPwK2TDEjCoevLx",
  "key24": "3EkjK98UL318YVCaS4RVWpY4VTpWCDTAbnhm75eEATSpWZ6Vrc2Gk5LBkgQ9Tp4DJJ8gJ9UgoDir7rcspiRvdYuv",
  "key25": "2A28rsBHdFJeACeZv3ZUXCziuZn8YeWyXV3farFzjFq3HeLBhu6QmoPaAHn7TsFFmGxLnqZs3rxbFba83BaJLxVi",
  "key26": "Rtj4pAgHJFAuuriKnKtyHiaPDAAKthWBoUAh8UzwudGfGQ4VXy5gXVeQWogPy7KtCZ2ZjsCSHe1Cqizpo1PFz2a",
  "key27": "5EEvng3MNpRn739cCh2dpCKbaEiqHEDKLxw2ATeJB1wpr2PorJJVHQoQzDHsqm38ZafFjtTFHU5qik2AZUx6SrwH",
  "key28": "4VuXq3SXuLM8LUKcmbSPGjSkrvcsqyrMQPYJLhbb73SgopysYNDAtwLRDyHy4rZBUNGbbZ3JQAodpwQeXiNzQXHn",
  "key29": "61fzscoqbikfeQWMhaDKdEGpdF9Cd4g3ifSpe46SaHEZ8seznGKyDpcYJQTcwm8dNhqSCvfcwxqmUZoazVUiNVtn",
  "key30": "3odiKYwEHaKq6Pw15MCHZPiezjYRb51mf1LETEDjQUvEJnqVpKbJXm7iHjWN4xQJtKDbh4hatECmsEiH7b2nP5Wr",
  "key31": "46QRFw7Y4c71Thu22myFf54ecWjL4JhQWR9JARgnC2r7nZ6U3L45d7LMQZx6Q7WhBsBJPvRjBxr312VddYnQ9KFy",
  "key32": "2noo2tuNydgxKdZ5BRibpkDtE8ZPkwUMx93GX7skuTmvt1jQUuu8HaaQMPGPFJCiq3J6ve1Q4oAs6ZDm1bN7aH8X",
  "key33": "5PsYbTGo9bNTF4VxUzwCCcYe2eYShyVjVQ1sJgXyq8xfYpmbQksd1riGo7NZ4fpZVnDEGd8vKCJrjdX85vdtottS"
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
