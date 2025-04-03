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
    "GYgBh7cpYXgWdtqV6XBKcwgLReiXmgse9HyLtaGFNKuTVMfo1eXaGBz6HsneCTVAAoV3mTAjW59UfAAoEVPBE62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42jGsoZfaqepwmTW7zgJrvZmxLh6rhKBUTWuipofs5Re4b2PonbDGMdNLtgZLcNszdmmw3HyKSyQtsNQFhUxwtzw",
  "key1": "2u3HhKWx45SaBpHMWVaUVz8iVcnkva6ctHeHhLSq7NHJEUoSCap4KfP2o9RZmgsJHLjQwxC8bqD1mPdK2V4dExCr",
  "key2": "3pBtVMmAewuKKSUekT1ykgsVkdrJXsgRhtYRWZGUtYUUmrgXPdrFm56YbJU7Tk3i2gzpFLvzX2XEjWXBSEm7wVtb",
  "key3": "38vjTBe9br6FezNxCQ8AYwy6d2YcUdFuqEEvohxMvme5583wSksnu4yzMpwrAYu2BkS8C9UyDR9WxQWhG8AGNtmF",
  "key4": "4vHYVauxP1pwXczGbqrqXHztojNiKmqHaukoiX3qEEwcj8dqzdxZBAsjyBUyMq7A3jzWo7qdAgS28MjC3ys5sHzA",
  "key5": "4UN2JTYKnZxUdM1DpBXzSxqo8oKEexXecukfR8YQDPNBQnp6GMRUsbUnTP2TkTVa5UaqdA83JoN9tADMRiu1NLM5",
  "key6": "2BWagNCCiE7BEE2fqjRyWqJnW6dCZVJUNWnjXT35chRCvMcuZDpSSXGNu16UZaHwtyxE6AGDHq8A7s8Noou4jCZ",
  "key7": "3UDimHFNxNrQZGydBZx7KgHpF7hgdLAsiU8JhJATLbM2hUy5R4gtRn8KRwyuzHosF9SXPZmhtKdrN2rXZqw2CKqt",
  "key8": "3roXbWKpxY5Q3r3dZ5aNME6nZeDB6i842DegKBJRYMnaLB5MLFUGbUReJi1t66piKHhugYGrEDAPhv15poXadWCp",
  "key9": "5UNZMt7NRHAyoqGfP3KQw9wXhsKH3n1reTFjMEBUespwg7Da4fuZY1qdNUnm8mJJYjLRvwwHtAsdYrJ4teYABC7t",
  "key10": "2feZKd623WzURcAQ5m2VjTcU4feQySXwZ73gzxsCzZN66UGiviKx4WJ4yigiw7fPAStA6hXU35c7CAxN22bYcUv8",
  "key11": "3zxJDQBLysj3MKRVgV4dfsFsWMmoMjw5YbxvYHrhMPuhQhBzE8ULUJgZtaZbZgwUbpNziDLJdbaUsMqgXmPzFANH",
  "key12": "2EwoZwZgDuNYvHwmwhNC9CCsKUafdq4t5ZaDWkAp9N8mJNPVWJodedpJkB4gJ91BDjZ2zAivXVYv1ftEkZUktjho",
  "key13": "2pd5jGBJvXBEcnvewLYCNDDgyEg2idRCPZEtMBxEqMvnc4Lq1vLYk4trBP6xugZWepzVYyzGef8kkQ7UrQqjfq7c",
  "key14": "4pjR1a9XAMe7wVdDEj7Z3qnaVT5gQbq1obRZwbJZcuNFq5mroHUzUkFhJtxeFzSgHWuFjGf5sugHvKhZxBHApXM3",
  "key15": "2tQc2qNhjppiGu7fuhG7zUt5xyDVQwfNyBhdkTcV6ZEQVQDScoqas8PjnjzRPjwBZiBcJ5xt8BMEfSZCjBpuTHbo",
  "key16": "yEhZjXVTj6VHpeUirPbxfthQ3rHpEDbdE6vogqGJ9z2RBQgbcjw8yuwc2DpjyQ5XSsZB4G8CCsAjunXyLJWSA36",
  "key17": "484dnyaWSJF86DqpAasvuVoFsrhLdC4PBDBVDiCi2NbLQu86dxAW6XFJd83UYesYmuL4XgKSpt9WA2HTLcBGUaJe",
  "key18": "3WSuwfB1SFXLTU9Yk7sZFKTEfuQA82HyryQGUBiYQKQLvpRta33dWb2NemWjraYfLBXSoEbbyxL532EDUbjEfbFw",
  "key19": "d8oESq7ncRun3QRQ3mHZdXSZiFYXENuCXi6pqhbELYu9WTuStUrauHuiBoypkB7cib5yYfUpS4egXF3xNDCsTVT",
  "key20": "2ACR26Pu2eQTXbYtKmkVD1Gieb8b54qnme1u7G8HAvM3wj6Gj6USs3yuTCDJBLHzB7atoLuZo6GfuzLpLrWyWcq8",
  "key21": "5bNtnS8bnFCxEVn5ENFEsv9as56rnv5Mdw5FaqvNB9xv6t7AcrjBV9eooYJnF6xo4qhci5QBvxcUUzJtjtKG9zDk",
  "key22": "sw7tSfocU9uZHGLNjxpL439LxCdqNowdGFf7cZGYy5HeQyr652wM7Yjwk3covzewne9ZxHQTm7uhdMHRXw6VyVe",
  "key23": "WsqsdSsAvorQsBBSyZxjZDe7qXcFqsGkEwBh15E44bSKaQogMgAWtDU2ZxWPBv3qN6jABtKLPWc16aKWKieN6e4",
  "key24": "5QJUMurYTLDoaEhbkVc8a7FhJ4vNBX9w3c2ZkT9b27Af1yApPSrFqG4AwH1Fpz3vWY45y7i26XVKEShr37R27nCw",
  "key25": "4apA7civ8gbYWr5b9ktqaP5tCwgHw6uvDgXMvK37EG4cGgb32EvEU6oH9NDcYjGmi3j1FDH513LqL9Ljn4jAx2ym"
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
