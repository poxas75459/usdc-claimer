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
    "5LnQon8HMNF8k25BmTU4Wxi9S3fNQhaxd4b3hHRCPGvCz66aSguvTEQggHmJrBDKiDCNBro562fsoEtgxRtBxKtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cCL716yxfYvcw5uCGZbQKjsq4J5un5iKTAgdkWwLNCfE7GoiDgYZEmeHAXeSpKAR47yvkdFkHizXGMQjWnXFhLm",
  "key1": "4A9LG1tPCr4iwcCVHfU9yYNYgiKndokZrg8aGYXDsmLxXxvYD5wqhPTN7XadAj76vVjk64uXSvvmwHmCav6uHKA4",
  "key2": "4HCoKmTA7wMSj1RMZkLqtkgwmKbpfVA9y7uNeghfLJqbas58Q3KX6Vj3CTkQZ6pt49ipVxEZjGdJxprLq3TDgbYK",
  "key3": "5GobkWmugcmRBzi2LS7fiehUsjDq3pGbJFm9qSfTYpWRUG7MVocfTF5NrDoDVyJFHJpVzAfRuEuJXR9P3RCuqGGA",
  "key4": "WHxfi9UqufhyGXAiaAoM9WNNUv5LpRM6M4ZMemyPG8dQsikf1wRDuw8fyBDP8yGEGMr2Yi1iXyWGi8B7J5qnSpd",
  "key5": "15XrJpZ1mPYgGRUC5HB93JNk6YnXS98sjf2t8mDp3yU8UPc2JvJQDz2kLTwhqtRG9zbABmRdwSkLwJ4DG6vHL9M",
  "key6": "8qPSBq1NUT1EUN32dtaUAXggUAoyobAFkrCSemmxYXXfzP92QcKLcjWCehxpAczk6LZhbyzG1Uo7vGsao45HX9E",
  "key7": "aaSDkgFikr1MG6CEuVS6b12ZBWMWYmwuD1sXQYywWohVYgFYgtczbBLwtTuvJkZgkAKmwgvBhKWcxFUNjz4qA6X",
  "key8": "3qy5pwAJCU8VMpTWjxE5GLS7L1pydxeBaSLmC8dC5h6qZUGcaS7oFygNgD2TXoR64cVFipCSvQQtxhwXkoZvZQX3",
  "key9": "4Gb2TTSbAoRnoHGdjyy4p9W3f5wTBwnDjSZ9zz6PNXq3CrjBFTP8NRvy8KVPoQHqL8SJo98eDNVqjtjNN1NRQzR5",
  "key10": "4Wtbr3Q7AsNvevwb5QHvTZmZLXRwWAyH5ssiQtZQRpAnaZhhvJGXMcDxiY57t5fZf96XnukRHy5yQPq7GRxE4Ecx",
  "key11": "4h55YNnzWFN8QhxnY5y6hCHXmnkTzS4QLCUHftgfpfdRREw6qYe8k69eMAaAAtJ1vjh8EfZoGLrha27Y1Erjxfsx",
  "key12": "2kpStuKLvckuJFt1JJe3Gy1uRWuuRufA6mRBQwBCu1Hhb9qdTQYa3ZkuLJZCMtK7irc3pdKEf5xDApXmzHTmoHaA",
  "key13": "4fiGR8G1Ab2DTtG8nTEpPGm7DuevvfDzxAtndeZ5ZiQ9y6v2ougUEZckCaSBXXngCY3tMHeXZvny2yr6jANYTaaR",
  "key14": "9shyNMgjnkr4qizXf2qqtHckGZhSjkZjjDW4zPaGrMgW9TVZXk8GN3JX9Hh6mctNkzLAvXWn9beo2ZxWukguLxx",
  "key15": "3oL8Lue5skuqr3xk4epvW2PTN5c75ZbeiZ6q7mJG83unEdsDHsyjrzwgaDLwse715v4uCyLaTwXC2DZhAyqR3U2y",
  "key16": "2HGTZPvnFXmYmpT65Yku81KMGxrFeU4k6RpWCw4nr7okxZUMG8CZm5HLt85qnUqWWQJb9bB6F5r4FSqkAz7xtHru",
  "key17": "2QimZiTgjnfz1Lcb2QDcZPhHTzdKqsWgS2QdRpFnuV9A6YFTKnHyxaGSLMFdWTqY3eZAEBAjBfk5x3fCuB6Fkxmc",
  "key18": "2AWwLEWLEz5jtJeJoQYFceLjspHMX9QuQmJV6x69CmFvcJpysTsFpgJ9KxjYxfPgrt41eEeRUFfPKBpqw6QCzqR5",
  "key19": "283H5dvy5bjE9kaoZ88d9HpGNE7FmHDpSNveYxDjCrFK4eRByiBMQJ7oFibo5ynLpK3cfpMESTWbxj3UqwAND1G7",
  "key20": "5VnFAKksYgCsyDMNYT66fv3cEHao87rejP7cAeWR9uAVoUHptWEQ4DtsYaTHy8SJSKwSXHtvBZEte8euY1q6xyZF",
  "key21": "2Xu65746tbw9BFqrz3BTD2nWBHEioKbmbXNRCvrYG2XSfniThzajcscJ5BpZ8D9RdaNKR8g11TWbNjMTrGUKQAd",
  "key22": "4ZU7W9h8KqF6WWerrgvkbCFZfKrCQ6wozQ7pHqV8QwK9n8gzenHHzt4qAnrePawhy28fd6VQ1cusFVY5CAxgTg5a",
  "key23": "acBMPp8R1nZ49Frvon9eNASmNdPN4mhPJoaQQdMqD8DgBJDPoNSe8LA4vcE2iuEuAV4sEzmWhWCnzv1T42nUktN",
  "key24": "3JdQ1ZYo4Dv2wPx2LWVUaPexg4Jw663JRFNnLVPeDVozTKUcxztyhp9Q9ViZXnEFn115ZE8i8VHtKaLt7KgD2cJi",
  "key25": "3HP8ND9MxcH3gFPCUBhHbne2dpwmD9jtbkmcpYUzV3soUCmrTKaXuWnqXDNcwM6Jdzf2541FvWtHd4mhEKJdkWTs"
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
