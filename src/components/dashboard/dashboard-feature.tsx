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
    "57KviyuEUWJ55ycC85YiW7YzhvRMv7mg5yJWEyz9vxTUKgdFcciahGKWLFrbxY7QYmfS9HftKTWHABxxiN3gJ89b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVp9hWkD1bvx2CtfBBy8KWjfWcvHLunbxUThDBbYUPQSeHfQfYbcHEieFYTgexUAX5AUDnBLdLRGcRjwjTJ9893",
  "key1": "4Jsx461qS2hXsR1zCF3dGFYe3nTDCs88Z1XaneXvJhjynZK8MqxnEJvCmeM9wAFBFtRMyFSBzjcNLC2qwGME282H",
  "key2": "5s2aUuM6NyTPMAE6DNP6M9LWMsKNYs3bYR4VTAahzNF5K5hCXr8Ccgsar6U3peNiACLLnfLafkEC5mHmsaxg4nqn",
  "key3": "4YNwxfjtsTMLvcwf1n3KTXLopWhRMMbNAnDbzq9UkcNaDtojqbaDssSjdJedsmCgmJUhVxk9qMF9KrqsJq2svNp",
  "key4": "5JodQ2mMa8ty7Ee9xhN2wA2nAVnMPiCApq4QPekLHdQjnUfrTB2VxAwkZmQRMMW28AsQANSThaETcR2x312BGqB3",
  "key5": "3BRxdw1FbTzRZ2CMZdVJj1YrXHN9KdodF7dVFbHZUx57nGjk4bDTtmVCaadArJ6gaoTpfChVwiYrjh4JdCoMnAnr",
  "key6": "4ygLH6vCnVGx3B5ZpDHx1us21wPjyeuW9JXz6QbQepjgZzJHssjNHrSQdr19n6EE2avGoSVXiQJnFnnSt5hWZGJF",
  "key7": "4aHkEr6KzYSacjbVCUQsnQaeixb7iGm5rP4ij8f4zpSFjdKbXhUFEABuM8A2LLmWJNTNrMUBmA3qkRxj8LmyKfCs",
  "key8": "x85ZCxaUUTBBQSrtiuMy7mXq4W1pcRcejoRM1v5Zk8qL6UVdpVarCQ6zEM4A6ANnLaQqCh7WQwFbxPpaubM91M5",
  "key9": "4oecBg2PdA325gQs5Mvi5gkNrjXENapkgxWGtoEGx6aTGL5qSTAD8hMYBMzaYYJvRqp2fxRDYfbnTyvDGUWjpbFx",
  "key10": "4HBdxikuDQZjM5fn9eAJTw6y4zEBj6wKrGRdwt4ep4hEqZ91CNZECzeT2qKUL58qvhA3gQjscVEk5FstrGHzPwgh",
  "key11": "EMDdVTEtEjhZmXjjkqny1V3PgYE1kj2cg9AiXNkwAdoaEgW6PX4pQCDzt9yQ66nr3fAUDqTe4kfs7oMuaVKhkYJ",
  "key12": "47q6ZJPakk5Box1VzLnCog6Ue7Tvv5wH1WeJB2qJTVkJMBwzpp9TW92ccz1VKo4TLgAGoe1YcjyXmVfMpNmMYbzu",
  "key13": "RNNcJCpccd5wjp316q3FyF2h3ouhRd4F8czU5Tg4oBmrkVuKdz9G8gsyooRwehyuYBXGWP31XrTC6w1Ko2kB7FF",
  "key14": "5XJ3S8wzf7HwpsqqXUywvxDU8iHqLgyKerrY5ndRFNz5ebpRi7KxNSQzLbEwtJHVhhudJmif6QWWyF9t9zh4Rx4A",
  "key15": "W7gDWs91C8gFNajocUXCgTUowgqgX29i9NSrPRwB2Xu2RXvf4toQPjXJ7N3WYRjh2Ypdwofe6B2jk3TpMf4ZhoK",
  "key16": "5WoYuciEY8iBLuHToa8WJ3BEzoxFDxDsVQEaGtWSF6cmpXGwsZmV64Vx3v4mbDsXQRTReDD9znbvvVjK6BGdCmZv",
  "key17": "2QzrfUkRGpbketujBCN5JFPHfi6Z8XvaQ34JkDMtSKPG76vHH2zosWqEkK4HuhHpNBJkR62nqyQzCuGdZpophf8Z",
  "key18": "v3z6k9z2zogCHpREDi1KQVXU2vXXeuGHBsN5AT9sFjvXCgh9cxqP78Z143U9PQiL9JWSQThHk1ZWBKZgDJFknqw",
  "key19": "3fv6JEcsJwbuoZCnFzihbWG1cNWr3Qsj16ad5XF1ffinjX5CgyhKSpbzDZG6iy7a1cCuGZgLd2vfHhcEUAaVuC36",
  "key20": "5autXy9TLseGZXEyAptJotupNjt82H4v77WGKGm2dh9jLzAquWgDPhW5Wb8UUxFC6v9sYS7dwsB5CURnjh7oG9Ar",
  "key21": "2fDdvs3wf3NxhrkQWkinn3TjKPgzsPYGZPKNHkKRsgUFx4SsJw5e9UTtte5aVDs4nXcisRkGsAD77J6GPoUayYbn",
  "key22": "666tShsC48fkqXFvaKuY2z6jKfziy1CxY66uEBaCvyATap6A2apqEXyYaKxwcTtFE59RXVsnnnW1iJLDELSN4aHb",
  "key23": "3mTZuPU74YgJe89BEmrXBepQfFKCwNbg9akGWdtXr1qyzRKbVB3pGE2uMbnHePhFDAfaG771pmUonP9kuCn7zrrQ",
  "key24": "4vNKpa1YQ71m2DCTXrmDha5aySCLFYZ5oNkKobrBNhQbkp9RrQT23BU6Ysm6JPWZegkS873xqRJDxKqQeUPTCshC",
  "key25": "JZuanoByQGZqFwfxQSoerhZTz52fGvFopwYJvbwrT6TMuUcY21WfZL4ufFYgF4Q4jg6vJHh7EM5YVHjBZwBqsRj",
  "key26": "2SY9BmDAk3YiWZfCQtGizK6fZQvAsqsrDgAitKEqwMAV5Vky7MVyfjZejiy44nWEVczX14oZUErYdCAqgMNMTER1",
  "key27": "3t1zbHFteE4ZfP9CmJ8UuoJhirvpZNG54H84eDNoV6e7svnZpnp8cfGAQaxofzgANrWX5MFMqdA9Y1K19FjRgvnV",
  "key28": "3aysTmgnPL5xU6fjJFiBU8QmR6LjPpyJnN7X42fBXgcEuLpwZCpdeTQqy8MBsqHtkvn3t9HRgeVnyGbAU3f5Pzs9"
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
