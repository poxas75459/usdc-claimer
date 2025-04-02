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
    "62VB8nPj2CMp3eGqao95w2x5SBkvLktmXuL8hwXh3CgDi2BVvzqShiv96xnKVCtRvtQBKWvX9cVQUWEhYBhBveT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "626E217Ai1w8XkeRBq7PVq9q1RrQuX12KUrgWCia7S5qt5gYKYjo3pGJuUfou1VSGh3PtKdn2KEzufXcQVQHJKwx",
  "key1": "4xPwAMyRHhuhpD3iqh8E3co1xoqWf5VbJVDiuK8LZemEv8Jnu6GfnhBRW5p73sNA12sV5v3bix5NXnFb66q1cjbm",
  "key2": "59Ci8tTBodmViU3YK6VYycj15zYEY4nvQ7qjgMLPGMwXTpcWSXaZA9z94i5GmVKE9GR3tTCtGk3n4QREGs7WkWo3",
  "key3": "4CEe69dTUcninp4YF4HNsnAy9pd8GWoQ7iuXpbefSTvi8xqHDT3362CDFKuFVGuMrFFJg4cyJBQWUJdseRoSG5a8",
  "key4": "5ZeMnYo5S6fzv5nbyFP2KA58cYp6CRCqKh2sBba15WDCfRb8FmxZWQWVRqK2ZhbRfVtRrYNxj5qGeTKhgbpKGTLC",
  "key5": "25qD2FFJvqYXv2XNGP2Hoghx6YCYHipgr4eAWiQcvegkERyXJ5gkKjEZKD8GXAX3Wbr2asKsN5ew8wXyju7U1sxX",
  "key6": "WTiTU8do2QTvn1hUb6qZiEPni1PfPFBEuBW1Esj7PF3GVPULLAnvupuymk3BVhLC3wMzKXyyvGQrxe8bHd6Yz4g",
  "key7": "5CtkBwLZfBWgEnhNPersXWzKkfieqTawGjewyWWJhTSShQfgpdy5pkUoLxMoqNFD1gqe78mkuSXvStRxSz4VnwUL",
  "key8": "8bMBCerjn2iDAzDDom7iLuJSB4NMdSPkjpfKt2Y2Qf5cN5VWhmxnbDg9jUWJgkHBxMVq7G4eT1gbxQe9LEWT1dk",
  "key9": "3m2iP4Hz3JHrusPqg1VQQmM4B8DzK2DEahxLD5eBHQT4aAf19XYhN8e9ET469w1CR4yCYV9zg2BuWq8tfy2vp7m8",
  "key10": "5QmsGyzcuD6tLNgeuUwA928rSanTvRv8XzQd1ADkTBs7JMaNGAKNZ8agdHZoYKbM5GhxKHrBmLz6PUUaPdfZWgAo",
  "key11": "3QpBSTPSZroJ7VMyXzKXy4ikTBjnA5HnwuzGf9WhDxUgXQs5wpNJvMpNa31dUy3u4Tp7uqKrVUXiFsuyD9RScKqF",
  "key12": "3ahfxGxjNXAheX5WfLUEqVeWz5zvAq5Wxagtv1CxWnmPAGxKo7qUUmtvzRscEp5p4GnBBr8X8w96wo6ku4FWyYiT",
  "key13": "3vXTa3JXtSYrhC2Vk6iBpHNDRUrWLmFmMvhTLrJbnNvoD6ajBL31KdoxCa84HpBxSc1UiNUY1xxRuffvj2Vcicjw",
  "key14": "255Y66Hjyq4mUAEK9Smp94xPUh62QGGk43AuY5wGy5xsDkG8ZetKaR4XhCfA5jx2hnXupPoXGM4wuvyjKoxAsSdd",
  "key15": "5BnDJUDRWq9ngRWY7P1vGVwDdNoYM5kNbkbEtoyEAxr2rsVGZmPQd76oMqyRjAUrWjnHDngL112zapbjbLUhh6wi",
  "key16": "cqZKDJnDKAwryq9ci8xuMCYzkTdQjjynVeH9K1MKrySzG4VvJWDvJCar8SPwX2PQoW3iyxNLXPvrx8HkpMV6y5J",
  "key17": "5fBLQqrWbNcDN7yXX2a28mLktB5x9i5ufJdWWLASvBPomGXVK24awpfV8sjNMjBiqwYP6RDfJ6QXrFnRdMZstUf4",
  "key18": "2W4ijZLSVuAg7rDhM3mgi63AGo9cZjewH4VRoJvZ3NHAYGj23c7pjS7aW3T3C7wenENnPmDJ6guKc65KfF2MD6gg",
  "key19": "3mzBeqB5QfNTKhXDXXqsjP1C5m9RgycGJxdo3ccg191zqVkEf9hchD2aQDKLJiGrp1R6PAQkagUJGaxZXHbekfiV",
  "key20": "3d6Vv3ZQvTJoPVBaBvcjQJCbhKrxm7DGXEvLghqhiKC651jbXwcsJqs2UDXj9qaHC5bXh3FVtZCZJYkhiyR4E7u2",
  "key21": "3tN8MH6h2S1KShNEHF6a5tiQ1KbMJ3qo4e3iJqTY9Mr1N1thHLkMhSJWnR6K9dtbLF7N11BZ6K8RG4Ns9JoDPqnY",
  "key22": "3Z5MpMwSzAeLvjjLgzxem1tU9gp3eELcjAQ1Hz9kdACi9PoF2eQXK3eYT13uCtYmo6fdYrqyyWDMDzwix2YqA6xe",
  "key23": "2YkUmhBB4fgatpQNXTWeMVWGCvafTwiVBZU2t4AkHFQKtVa92FDkfyQ6F7oznZ6pHsaUe1b5LL6uhjtyxbQaiCyx",
  "key24": "23ZajxR1Gnm6W6vFVBDEe6rKKUp2FT7fdZxrjA1tqgp8CueU2ERFwYjxgSxsXauLSyzDLjT8FGfQfEQadVwDKsik"
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
