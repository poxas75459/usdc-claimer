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
    "4GvW4wp4T73Apf4bqHt1eybQh9DDLk86abBjTMbDCz4BJKjxFksFTZgm7HYZuoGykT56HdsmGTp6HxHzLfXK3nbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "74cxmiEz1ZUbandpDNdnfJYuZ1qVrwr5aL7jpput3m8u8FNVaets5vP5SXXbgvi21d2p98eGteZmUDwjM7m5QMX",
  "key1": "35rSySqy7gzgMXSKf61JoN3c1mod8Jt97h2yTVNTbEpi9mQsr2jrXEx4rhprAw7rU59FwNEc531VnYuf5bVUFfkS",
  "key2": "3y4TrgiMtqGi7ik92eU7qtBr8k7LVseagXDepcZp7tZEeLSzg9cCZznuasvwtbYdtdN7jZgoDtporrH5GNEwWjy6",
  "key3": "56Uza2v38EdetHAKYpEJ9a3zXAP3a8pWKnCxXWjoJdmDwt9aADqHYEUTTjk1xeGZ6beQWoESkkJVoMjnm9iL36gx",
  "key4": "3bHKo33vPj1pHsnHCKXpWU4hMWZmUxSyFUTAuaBWhnCgSiSHJEVR3KRM4LdHXGTEEWUvC7fYdS57mAu1NgqZY1p9",
  "key5": "5Wy3YDcC2AxsGgbXdUpLvjHPK5ATPpHFv1GSUyT3UiHnUDCxVeVGRwKYTFGRemH2LNYL66ZdBpg7K4AJurjd4RJS",
  "key6": "63ELHw4otVVwM8DchSNrfUwfUTL9mSV8de7BjgR2QTkBefC8z2oBokzs7APxQ41rm6xwqVu3WUMWmtYzDtvsGvBd",
  "key7": "3XLDDySJYzCvyj6sprPT4F93eVQAknbc7Wd1Ytp4qU5EESSMuBjUXoMsWHPRoHD6m8PqBMj3aw5F2kQ31c4Ty4XJ",
  "key8": "2fc4Vo9Xa1xJT8NkScz9v6L1FBfXGU4nMFzP1KM8d9PVg5nYLKTuXi1fQvenTmYgDcDKUp9Cv1uNdtp1gAacXtFA",
  "key9": "4d779TN5EbS1bmHM8trvriSQKfbWCtwY9PsfeEXhfuxZnG8pfMgvefZ7UdGMyk2eekouMyx3LAEUJWQZjVM9uUgw",
  "key10": "4gFVVsCpc46ryVnjNvwAwA7cyXNFrudTRFXbsLNod9kVZU9n6E1JQQQWn2NdzJVUSfCrD7sRWsSoZ4wpb1w3CWPc",
  "key11": "3AWhziqJmrDpojzZZKDNfenPEBU68BX8hoNQxmd5FgNCWQmJQhfM16dX8fuDtmdikjVhgaY5tCy8YJn9pn4JWFFa",
  "key12": "4gyqEk21N9xAnJ8roQcpi1Kddnhu3ftkqFzXU7mb1R51DX1x4cqNXehadyNLTjqCziJA6xmzpUCsobrJSPBZUDrs",
  "key13": "26uczqbcJAKs4XL4uZFeD4CMmVaXGjsRM7wBKWcW4gfsRTkkoLbJuyV2oPPartdbEXcTDnw9gzKKxanPAJdmKZuT",
  "key14": "F4qKhxR1TiMmNyW8VCARQ5vkTi7uBjPsiHgEkQXmuqnLevp7B9RrGQQQTh6D73hddWTNRwtZmMF4A5Pz4kmd1ij",
  "key15": "4WReQSipBvcFYcZL8KFXPnxzK47UZZUGTjBUVvz2dvRNWH6YUyGx1Abb9Va3wwV5xsH1sfWzuPZGt82LDpgYiYMj",
  "key16": "7AeQnbdujcLq6rmuS5wU5Wp7JDadtjxu2oZ7a7u4AJ7RDW8wLq8R8YPbBsshnNygxyh8oAgAvWPEMKq4P3AsfVk",
  "key17": "5za6vnzJrZXgTEwoiWgujEF5mzetYT4eatqSPq5RvkRdt9m3tghXkL46UrU8gHTYto6eNKndVQPdH3bEvTyft4qh",
  "key18": "5TaZFzNSk55yAVUkdMqGxMqG8akGB7nUuxJBRYX5Lk7MGs9hnEzqeyLFuoYzC1FtAJFgxVbySwEvqUGxqcyXeSC4",
  "key19": "grj7upbmdVHTTHxSv8VvV4KovcZQyo9PDyDnk75V6QVSvNZQms8zCEVDU6huzrRVSA9pk5ZCbQBqnLwqnMEeeg6",
  "key20": "Ab2zsKt5tS7j8S6rYRUoYjKsNomGcZDkBZwvwqSeCgZ9CE1SUgsmqmw3Tb8CxMaDLS1ssTuc57ZWh7kt6dUW2Gq",
  "key21": "JdUdBNzSLSH6rCoPkrWGqgzimnDmP1bHVbihw6NpCr4DoxTg6Cd7vPqK9xr4umAGyh6JXV4dQSFDdFzkx6Lbaew",
  "key22": "64AXvDMVABMnWofVCu4iYkgi7HsrZiaAsqaTEjhhPe1bRUzBrZSNmJvFY8KjqruMWDNegJ2VJuGtsSd9cVPJNxjS",
  "key23": "5kBtTXHpcmAXMj2oXiGp5URbuYGo8cRg7K4WohkKU3h3tqjyiGw9dVMMnuvXu8byV9QK3b2WVgyQmEVpjCpbuvF1",
  "key24": "5Wxky8kGfsEfebp45GJgYeke6z6g6J2JpZqsqr5RVGrU3Y6QvHzXyhhUrdrEPN54LKWgG1FojwDkGeTXtVhFdLn3",
  "key25": "3JEi6DasVaSsJjpBnmm9bPfdjBwSmgK8VDyGYgvuDNGqhAbgE1gmY8sK7LPctXxDaBZbGwaagoxwzPuTZaU1fenP",
  "key26": "5LpHCfWYWnwF1NfD3o3htwzjDNYSz2wW8PYRzP8EjRrLsuP9S8q2Mk8ysPBdR32K1RumN7s71wrZodu31ZK4jZ2b"
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
