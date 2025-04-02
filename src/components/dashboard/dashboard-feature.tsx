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
    "2vw8Rg59Y4cnuKKFpZn4HuWC3DBAXM1jLM6Jm5wpynFMuAy9Ay3KgnQGoV9uMjSeo99rFUkAYBJDG2NND7mizCLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dxrpA2HVVb3HhC6EpmyPCR9G7Tr9wV4ymZ7X2gedB6Wv2zG6ru7HY24VwAMuTjqYY7D52V9hQ3VLx631SFigA9c",
  "key1": "vJdRem8ymN1a1AwSh5CNtB2ihjEVUZHAcbFZuZsvzrGHy9r5bHYpLjUcJbV6EeAUZXPVjQkv7dE1MKSSGtNhcpo",
  "key2": "3yVpSKGtQKSPuRDmFxQfV2Y6Ko31wxKc78vweFWSgNiAyHKB3v8m7fg6yj3R1vcbezGkVRvPHJnyKBM2YYhkdqZh",
  "key3": "3GEgadmEyQXtB1Bsa5vyytD1BfNbw5NwYp5Uf6qbjKt36dLK5CjQ2MK88gqUzZQVmV8E8BWS8nUQT57VkxX3jtSm",
  "key4": "3PeqN4JSHNsvkR2YPgft7vnLdocxSxJnzB3qCzmQHsErZxzrjoeF66yn7Npnd9ckXV1qWTXk7WHNm8p7vAxZWAtv",
  "key5": "4nL7Yga7ZMCMz8pTY6DJxFkF84ZvqHkpFD4UfMmg12brLNFJ3BRc1Ck4qNTGCUBd8oGPbWPMYcEJauxPPZnF8hm7",
  "key6": "3Ap4KaUknbCaHyoa2XfshboeHwv6HoWNX1PF5wzi4B8UGiYCa5LgzkSAYqPRP4R9H9NW7DADp2hRjW3DTy6iDdC8",
  "key7": "3Xre6NaJfCAAdH6CP7xJT9y4ejaQJAZ7sWZicumZKFtpuaXgYFrMoYP6urwBHz6xRh2FVwbrRWAk5XVPvBXwgw4G",
  "key8": "2czGWUmHCt1Zmcyz9nFFkYtX9oVV9VTGXA5v8QwpHrbXVPFmBFBzwqBtpMrjHb1esvvYmVTWhwXkQ3S2r9iZ8DCd",
  "key9": "dZGEp5WGb8QbpZzBYPXGqhB2AmMoQUA2DqsnSAVDqP69bPo9YTmWSrHLgcpjVdxNmcuPxEyY58JCLL51B5HQsLE",
  "key10": "D7wBCzC9DPp7W5uE9r6oWLEENSUrESGoNdAUU9vCrE58KGupYFXsJqmETccgV8a31D3gfGRc5EnBGxjcWr4XHaC",
  "key11": "Tkjrr8GcHAW62dEbzD9uBUDCVLidcG3v4hKpthWHxwfAj93VKgk4eGFqPSAoCtGcjrwh8FXqwUWfGw1JFHsVLRx",
  "key12": "KhPmdk8sss31z3HWqa8T4LsdqgaeBvbTe9Wx3GmdJj3QnymhqqYNNXWGfjxXCHXZXskugp6qWPL5CahXPbpCftH",
  "key13": "4g3qdwoLFJQgEb3FEiBD7VJynf8otxD9Lva8FA8jGbmdkSWxPKHx2n9FqMBMRW18jvS1X7cN4LDyvzawMFT15Ueh",
  "key14": "X31HsXiRQeX8Ua4GQTFKSUPi3F1kCi3H2DEE5CG97kwaiBZhLMrcjGjhdqCL9fv191HnqYjGPxvPKu7jhqmDp8s",
  "key15": "5vqrspKnvh6USzrtbGzMEmQZi9qs7PjadvkgLstXHkL1jFpxHnPGS6C4R5QYTmoMB2iiSyYS1dYx8iRxmGmmW4Wc",
  "key16": "4G1vb1sqsw1W2725avt5aH4yY3mNCbs4rS87xH2qqRduYosK7fe8PfZCjgzSWLNe644ZyASGYikcNEweK5z7Dhpd",
  "key17": "4sCtvdfvDxmJH5aA222kqEnRBwZJNoDmd8aiFDx6B8gwf62avoMQBx7WdK4jQMv4uvpnbu8EQM98dBMhRprSsDUe",
  "key18": "2irW4FfrYxc74UjMySKBHa2P3uQYyUNEHfnHYwN1BF4kfhc9Q3hBCaEhcksnbtcqmxHzSfjw4Eh2rfMVwdCb5Se6",
  "key19": "2y98m62AJpgtY4X5163yiX5bPLMFrmBqAoURK2nPGdrxwjAYA8q61omb2pA4LFGSov5gWPzBvpKofAnyqdEhdyHC",
  "key20": "4YvZpwR9rnj8Zjp6WrGsdzsZQzudrFySPxdrmewcqphGJCgBi5x96bt2sgBEXNwsqAQdfuQPtPduDtUet6oFWEQy",
  "key21": "5toNms7YPTuVfe63Df3ruLzCE4i6X4iW5oQVrRc7NoLqXwJP1cHyx8RdNHcWD51fFSeetdFnVAkcX27G96sbnTtA",
  "key22": "4Qns82v1HkrGygYr28EYq6aXZh9M8tSyEaqVDP1KDhxZLooivF21hgKKecdVUMeAi54jMAyHf7fE6cxJb7szDjHh",
  "key23": "3sLSYGACs71cqgtgiTS5erCkBQ3WUWMQzvkeGfx5CLAS6yDgXXPPhabK3HXs5zHdjxurshVbvfgUM3bhTMGxAVRj",
  "key24": "5H2vxftGbku3gqUUMXNB5kv4mgZCWTVUrgzWUpmvm9qnfA322HbegezEuYqS73p4dkrPbDEs5PgDL6SiRb74Dzuy"
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
