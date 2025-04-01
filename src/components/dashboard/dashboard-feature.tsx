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
    "46HqpoQ24Cx71FxC4Q8rfamFtorAP6RanhQnE9KBwtjsbfRTtYJRzsmkySpW2wqfuxJ84YiRpm8f4GNd4N1EYFzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47cJxB9fVH2eBjvQYDJNgTqoWdpHy1K9FuTSrYRp5d255krL4SiUBoQycqqkvxdVkxGzRhzEQ4aB8xcZvJED4NmH",
  "key1": "P5hNKmqCSGyy7N3aS2w5fS8rNWRX1xB1JS3YJgDHSj4dCzY1bGLCGjPJaSq5amgQdQ1xQhd1A11GMvp3KaAyzSA",
  "key2": "3BnxSw2bSiLY3XH6qvPBYqwbUorPTzcNdq7fmRzVuqLRW7NyTQxK4pXkD4m3s8dxMNcenPCN8bim8wNZ3CxbUTG9",
  "key3": "5bSY6rZvyqgwk2BjhARJ7VKzDzdLmtKYqsXK68qMqKdK2uhRZbbcc6po8kM4Lbe453TgF7UxTGD3P9qJfWXapw8X",
  "key4": "3bhF3Vq7bEu1ccjTW3UVmRHDwqeszWAzGTJLp4u7dYo2VrRs1QmSAqK1MMNb9pPBh1WbuJvh1acThBTkBnsdYSEb",
  "key5": "4HsqZXqmXrjKpvPGfJDMH7NVGBtFtC3CdqRqeXVUWqztm1r5WpfCN7HKEboj6V9qsjTSkb6LsePYVJk2yDoEfzBq",
  "key6": "32d7h3waTLRdCQofvH3mt5bAW685CrZDguKuqzRL7YrYMGZFocaMTUEgJS33BeWKhiTvydxzdpKeVeqWxGFR37b6",
  "key7": "2eQbUhzLyYUrLonJu7JM2PUxeAQLok29q7tnEXtMLitmpDBA6mQwvxS44UpJVKcYBV3cy8k6srdhEkN94JeAMGYd",
  "key8": "KpgL4CYo1WR1fgFcBQXWpdwfxboU8i5LmFu9MDXsgvksegJbF9L9xAQwYNi3LK8wZ9zcvm3HCQzdrdynpk2W9kz",
  "key9": "3eFPUkuD6JLWfV67S2MWYWogvjwkgGhfPztWCk49AUNPn1Fk5nHKcouni9mbQS6JEDqietgYWKQhdcFP6EedEMnQ",
  "key10": "7rcYfCmR9oVZ94noBkwo2BYGWkfzrBnJUNpiyxYjr2XJyYwicL63NTJdWQB1BgRjHx9qAAg7W4T8XA6ZT8fc56J",
  "key11": "4dsXXULWeG9Z4VFr7iB6jrz1sa74Ch5hr35ctetJcktE7q1kUhthcp3x6JM1KR1PwtfVYv4mDsdmYgSJCSqdhZPQ",
  "key12": "oTHmHqSymHCVSeAfRX277UW1PfRJvzanJfVZmopVx1oJAZZe2CK5Gy1FMAxP9RXmWU4amy5FQ5tc1hGwRY7nzAC",
  "key13": "2q88nQ6HqGxvtbMsxGyr3U6yNBVzfWhrgaDV58T4a6oYFZKXvxPkWq7nReA6TN1B6sR9SrFKqoNJiQvUqVczxhhU",
  "key14": "58BrhCoJsWrJpngrhL9H4rUZp33Eur6AZNMeomJRpqgVjLqcXnXvLSRU28xMkkQEnoAKV7j687BufY8WBiCDhCse",
  "key15": "2jhXhjeT3DLJ18mbbmyD66p8ZTEaJ3FGjRJrZS3JxSHZi7rm57r3VgXhcMUvfw9cfJH7onXc6xNkzTixV2ZZR7oD",
  "key16": "2LxNcQw7uJGiGpH86ZpWuoGuKkwLRaGL4cBKoQMNpYEhsrkpHttajwEyyByE4qWPJys77n2hTKdKBMmEJmQAyKzh",
  "key17": "4kAu1ZqbJVTtuJP6wQiqibacXsg1Kvr8RpPhTHjQ4xBeSpnyheKrmVANuSNPp2pw6pwe5qPGZYDvJTKhTQDTnbdv",
  "key18": "4JTj6miRfk4CY6RTBwPMDVatgiQ1YA8f9omxv3zjd3VtvpYJoWuoXgRAT4Kfgq7qzHgrXwPK7Xyf3sAt3hkeCh2u",
  "key19": "2NCyGnMLHoRSLbKCro6BDx93dA2W5bd5hc1Cqio7QL4fVBwfzDo9eSLr93NGjk7XEsuyr6zCLziqwPHeckbWN7uc",
  "key20": "52A8RxR73G6kTc2DSYAbLbbNyhwfZtqxv1FLNJRwUemzZGGniLBynRvQNaLef1D1rQUNpez78uMSn4qHKmdVWNbt",
  "key21": "4gs9Ud6k351y9dFYgFFwvxWpeXHoMZxguh41t2qyYGW5onnwzfHACMSP3onBdPS8LtHuSA7ty349e5gtgJ9GyTcx",
  "key22": "4d3r9Q3nxD8nATAXfXFRrs12dzdf21MgQbJAhXDGef5TQb7BfQEQnK9CnWZEJjW8dLXKjJJBbXrwi2Mfq6x9Dp9W",
  "key23": "5WbFaG8ngSyZp4TZawBi11r1SWXCpWifUgZx42PdzM26ARqHonzHCBNtsfLB9ijtixQt3WJyJbHZv1bPPX3qpNP9",
  "key24": "5YA3sNEdiKAQD5Hzo27ajkSHbGeyKwRTNr391D8BRfEUugNfmQiH2NpamgfYpaDWAm3TVpJh8rrLZh6prf2KWEdr",
  "key25": "4zse8YwyaL1hvTC2qyE8PKa99X5h2whrSDLYxb7wkXZu9AwgZrBnPmFMwHJcESaq5Sj8zj3mU2RsDavdFtYdmYnn"
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
