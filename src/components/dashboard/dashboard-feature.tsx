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
    "486x79sD8LdviHay5FxhBu8ASxZPhHLNrQ48KPT6LFvV8VpLAJtrGkKGe8wa74mrYuf8ZMfc7rtERizABm2khh4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pB4gvDcurEgeiVHwiqEMJVTvgaU2yWfQa5E4SBMm4MRRkT9q3StgkUCwPniJJDV1fJ3yYwGrwBvr288dnM6JFKL",
  "key1": "3Ai6VdSTJJL4G36MZC1z9yoJzXJkjp8QQQJaDkp9hn1whD1roGhQaqi45sKzAEJJF2kAkbFwMBytv9TvDG5t8GLP",
  "key2": "3vNdVmHDhcrZXjrtmrRdUmJ3aLTq3LyQ8utGKd4r36GVP2mzK71MhkhCY7drA8xfnGGTxGJVu68AB8vJp4mJwNgC",
  "key3": "5bPVGPDTDGh2p3wjQaVokbtqG8yju4mCvpiKwfGMa65AMZysQXbeTpovMgyMJo5YyqMyQeHQJhdCqDAPfxUYSxXb",
  "key4": "2V94Mg55M7kqPDD54B14JV3Wg6fQbsZGbjQVJLXQWzSkvLTeEwF43tsCgJqPUERWfRhQXsShWPGHFGvih84bcLK8",
  "key5": "4Sg2YUyHFdEFZDKaCEnKJoqxXSuwVvgEHv4p5TqyXpkGLFcRV6rZXxEXAKZNyXvx4p9PxLkmy1uFzhGzotnPZtf5",
  "key6": "2FoKSFsXABursP2Xj7vrSpYLzhpJtsKmzAcebwuZTSzxEVn9jXay6zGJUd7so2NwPfpW9ZHYZc7HYqJQapCNhyqs",
  "key7": "3hvQMAAgJtga4oqobaPymH9WsVZL7xSLpA31Fbh6jsATnt5pVafY75ggUXUswadE8ui1sB8WfjuLWo41kMCRdGe3",
  "key8": "3zUFBz2chi1S6kAm7U6RpiqK2CQmxKDVDELgnLKt43a85fJECTm6tKvmz6YFCuZQpxEfujQUW9VMckw7jo14QLCY",
  "key9": "5z4q4MndN7KGscPjFCXs9wHN1isFMNrYL13CXutPru5TVrNJ66hB1pYEWCHuAxGgjGc892JofsAYbVsWuqtJMFUU",
  "key10": "3NsCASNLP7rqMSyrazDLLKhkcn3mECHCrokMwibuHd9icpNzt8TuspReNrGx8S4zutU84R2FrpgidRrjXsGvga4o",
  "key11": "4e4jTptzJxbX7M8qEbK4wbWFso1ppizVufQc3HrvudCQWR6SPzmQGf1FDxpUtzEbjZx9rujzAg3pkRAquqQp8NJP",
  "key12": "5YMEbeDFwvu6KkyjAZBuq7bgqqmmDimFugZseqg8N9fv9PbcYKhYEkE2PE8nBfQo946ZjTJQrythRLuTZeWz8KZz",
  "key13": "4NcC4fX9wSjFVnM5uJFxvXC4zznTxhP4FoNhJ7GWeHQrhdqMtXCxo8aEGSSVeLEManF2FbzHKSeVYXHWSNSXnycf",
  "key14": "MsGrnZyfyJAYuo4CR4R7gJ3U3YfNcKAshuxe2fYNCihEeEH5K8jg7jzCQ1WayseQurHZEWP8iQVjTAEgRinLnzy",
  "key15": "364r7UF3XVFo71kxHkJ2LjbkKFij2gwa1CtA6BbUrhQtgw9vK7pzvdkjeGdRYdmW2tPL2fZPBnMtQbet1RSUfn5h",
  "key16": "2AoKEhmujMcPo6NNYxLqKgzEccfmGF59HNHTGYYaXyLkMVpmjGomyjbG3ogb7x3gpGnm7dPzV8ACyGxyTa6cjXKM",
  "key17": "3hagrwxLpTUa7avPF7VFZJHnw1gKCkP8EDudmsHYzysh81npkr88jmhDZgbJZEKhnzVN299bcrxuyRML68oMXx8D",
  "key18": "4zhoQdBCXWMyjLv4TzxMAF3ssxpzDt2CWKk3nH3PNQQbF9KLYF4JMYhkZKDJZRDf17FLZgdcnsygMii4TFpnK3cW",
  "key19": "2hToUjM4qDrvNFewheFFp7af7d5p1Zy5xzFAnBsBRUnXzqxU42tBfuzbaniBCgdV3Mj5avCh4XaNarVFKVUmPSqK",
  "key20": "2KfZ4b5AaP2DmFCnu3PAZuYv7SrLT3uNhvfuUfYidNTDNBRLDq2KsrS6PzJdUDTtzAPhJ5hoinQtsqJzZwLSed3J",
  "key21": "bsV4kXMXMnPUQwPD5ELzVrt7zemq7Yfm7j9TJFhivBY8NFdGJDja1Cnz1AttRWXC3eaiJY21ttiF6NTFTi1a5GY",
  "key22": "4esQ3kAXFqHySwmLeGXerUzaAitVoecWvn89x1qAufVWkxrU6X6QhJNhSvGt1JujP7wrA5cgbfNQBmeTc5nVW8gY",
  "key23": "9Be4WSLPhvD3DtXqZzJfE9jGwt5ACiv5uc6mhzzm3xreyJyk9xD1i4i7sMZ9xnxFLx4QnF8CjJ9oti74UZ5RhBE",
  "key24": "4JgGgftx3CWxYS1beBd1CVPYYvbtXupKqWh8CQNubeJY68DibFKZN31MZrX2QhS2x7FabMyAqLhYDb2PkZ7tcNk2",
  "key25": "4R8NZj1tphJ9BqwWx7qav77PztVkUwT5DzShGseLcGocBT1Sqqn49vCqhmmHJVno9Y46Rr6fp5SQbnmf7BeEUDYk",
  "key26": "3jdb1TK7M63nLuvrQXzdtWE2tUY5VT5aaUCR5MyBSY9EZDckwhyVv1B2nV2cVrd9GookLwqVomZMKbFF1xqQvDp4",
  "key27": "4TyTcUqTZdJ1csUfjDqQN9oKfLB1yMiLi1HvhnGDsPP6U6dmYJLxksVB4cGZQP69Adkv8UJhSQasK3bjQrJUbJx6",
  "key28": "2tBm4ghRDabFdB5sh8kWHFM4MPyEA82s4uBL8PRekQWbvXuCjzRmJP478nydoB2xs5LJgKerWgFztUzNcb6pvh4P",
  "key29": "4G7e16RqSmbDyw4Cb1LXb6KNpQYS1vKt8s92C4CKFtGugbTsKsJPWvswUMvPTjpBCGc5UzDAPKwuYTxsfLKZ4Jr8"
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
