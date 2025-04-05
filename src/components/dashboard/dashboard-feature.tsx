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
    "3yPtj57XAi4uKnZdd25se6XRZd5LM6v1AbsWqAfxzvG9LAbTGGU7dg4P4AwutAhJHgbYwoPs4oyxXe6FMZAUNT9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qxaKKPcToPmVKcUrrZKcUzLUxkBJR1poof5w9UgugYFfGE5tN3DSmdoVFhVfZsDPh1oMEy8o32m7SBWyWXwLHxH",
  "key1": "246gbdFDcLRvJPFFQibcdhEsqnxnHASgxNBuJ8BbJHParzi31qugLz96UfKJ385TzpCLEh4FSiekDzauqJFmUhSr",
  "key2": "2soYNJcCNGY9XeFzDJuEsGvQRjFoTtDaWZZkVKbaNLCh3gcwvAaNGgPdkAxcFiTGHoBknVgwmHQEUbqk8Na8iTJX",
  "key3": "62x4Tqs54giCCUVVTx1jdtykbreYXjHuudimDz5SKxQhycFWFfU78YJqh99ATENh37MGapjs1TYmigvKTSrm9qfP",
  "key4": "kHgCzdUoHa1gbRu51dCb5MxwUjSMtKiYnVSMj9Kk7ZgUX8sJkjeMGV3cuNnW2qH6w4aZpGXwfsTfimjdjyj6KS3",
  "key5": "4qcwKkwMmQyUnQiZdPzPhSQZdkumDAhPGHhFoQd2D6gsMLZjq8utzUveCcXo8D3TAkWgn9JyVpdFWxvMdAXNfknN",
  "key6": "4hUwHFipyFRB8AWxQXGV8kKJ3sdrPJi9AED82JK7zgRHf9rsYYLWGfeHMDfvqpjv5pLWNNXPUQ9Z1PyBXbBxBZkq",
  "key7": "2LzSx9CQ8VpFvWm3igFYYYdCYMNiQ1GjK9hKsfRooo3YNqWp7mEeLukDes4NDt8UmuNnU8xh4P1FPfj1aDgJNGe1",
  "key8": "2AzKmzhq5beY7hCNRJDGvjF1bv5GMzFKvczBE8gXegVPKMKQ9paRto4wP86Y5BVHAiSXVYCfCBWHkEGmM6Zz9yLt",
  "key9": "Pj1r4AeoQpMKnUUBxR2uwosZU1jE9sAczbHyt15AWEpAFRAVNVFx7pQkZoPikuB6oEjBLs1pmNfkpoVY7jV2qkD",
  "key10": "4wAX879VEsWbwafhg7e6uDVcExboXrKxXvwthvRzjJzGZUdG5p1z1hqrq948uFFUUFTFPcrNv3ykxR6zwSEqS3uH",
  "key11": "4DWT9xW1RoPMRXsm44TqpjMmTQCcK4hf47PmRFXeb2VAz8GguK7CHt4HKgry53QhHPAeeWjNCgdTV4N43zttpwo7",
  "key12": "4VU15ExSp3YitnpvSctq1j79xou23xbCZNxGFQFKNggqqyw2xQCa2PQsvcgggSf6FHmuCmb5tL2QABQ9hh93YFf1",
  "key13": "567CSmYbuHGnUAw7WPsimg6Vb68NF4Hyni24NHJimnANSJvDNeeGwTtucmV3Q7fEfM9WwiSQ5eMpQDNTFD5AcWaq",
  "key14": "eZh9DFxAzga9ff3eQ8RuNM49Z2v93PuvLg4ke7SELymw3etCAMsyVxQ6SZJCN2WHWuvMuFihkAqHdCiVHeURRKi",
  "key15": "A5VkUTzVMocgRdEoRsdWiUCePP8ZpFv3z2dGXeYNtXp7UHFhPoY7LXuf18T8JWNXqkvVLBLm3HKFgg4sCSGZ792",
  "key16": "amQYJtrS6opdVc7oTNFcC2cNoBMP6q22Q7YmFt1M8EJNBhJDxicxcUr5PjzRh2dpuockF7FiqAHxbjXoXXRPpzC",
  "key17": "3oeSvCVHtWcemUVCEC99VrovFNHFzLYioU2VFXxyDTxNQCUDf5QPX9jCW7U5mbbnKdP2WGYCewsPtzZa7Ayd5nte",
  "key18": "BfEQmSeULgprao4Ph9AvDgyJWrZ9FUdtYX2YZNhpUtRaAduH2v2YeLgsv6g8tX7EiQtcWnZqYGFeFLccbYuXaLQ",
  "key19": "4eKmAeP4HHZPRmsPzarn4WG8Hg2kUxRzA6zHHy9jab8t3zd3vF7nf3iuGGPis3SmfgHqWeuz2xcEF7o34brKYGwm",
  "key20": "4cyq58URXSqKKEBPJihvDGvLtArRMFXhUsZHjfucm95Kd7oTSN12EvUKdZzE7FQHRybFmPQULTqg8hR4BjAHmJoq",
  "key21": "3EehxowhkU6a4oRAWRT7RRPZTieUJmNQtwREKpyrzGM7FY2iEQn8mFfJitUyqs1WjRxhNqoCL51MdxwqB53C6SUG",
  "key22": "mk1fCjVjCM5bVm7VKHUmwRCB1Lu12WYw5RZFD5D9MNYWmmhiK6C3a6TnfAnW8ASJyXdedbSQJBMY1R6uSTRiq1H",
  "key23": "4ViPFcUGampRFwiiaMpXfG74SzTn1ivwdVPRjC2M9wc1oxt68RF1MpN2JhDREC9qfbQaB4fBcBAgvATo29WATxfS",
  "key24": "4gLNv1HhePZQ1VrWdESxWDxqmFALRv1xezLWp3VwxcWpAGfotdbyiGwYqt6z2LYR89d8ewDRsqkRLKsxzE9RgZd2"
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
