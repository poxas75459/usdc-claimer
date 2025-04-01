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
    "fDesG7K16T8isks35uRsXrAdZmj7FMzseEWNnBjDRwMxd3dogVREPkwiESfXLjaUAa71hC37dJ7pvqnS1oSB67r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "75fAYnhxqJ2vWQhArHHqW8HVf5VesueYw8tyZzLGyqidX5QZtLgHiBBaK8r8tkg1NpS5afNf7nsTkqXBazQyofM",
  "key1": "5SP5oefp866kRoTMSNQ7sLU3YwSFGzk2PjZZkFEd4UsFn2K9v533EzAfeuQgGaq6qeowi2ASZNrQwBRdyt4mQ6EY",
  "key2": "2kg3EV8BSV3KtFefAJBBDYKYW4miFsiSspojAv2seJ5jUWeMAswEzGnEkDbysv1Q5uhAAEK4jeU9xiVQbRc5L3C1",
  "key3": "3YFsGq2UWz13n47mWyrWW1WZRVtDXuSjgyY7NtXR1mS2rDeN58xUFtf4d4ZH2syvGY2NZ6EijkrfM2CT8W6e8uYW",
  "key4": "DQWewcXyMuAYz5CkRQyifY6TxXCgY5aLV8Lz7PQ8urx36QwAuvZKoVCutCL6Nmumcge3VWstvLT3QN9mwCopfox",
  "key5": "5BH1EpDa3CSefZFJyf6fGbM23vkQo29xPjgLyF8rRAozSEL7vyjrtYBrgkU6V6PpHCU9dNiE4T6ETEnEnoQ1dbrt",
  "key6": "22HS2g1dD6XLHTt9Uj5cwu4fVY7rAcFFXWuZBBVW9gjbtdc6kk8s5bHUqj7oHoDdqe9qBu3jPVZMNBty7FioLWHz",
  "key7": "3s33Sw6yW2T6tJTvA4BmgJ5d6dv7S94s4hEGBu5BHkb64eLVQcJk3254M4rx6f9efYzVyx7jbHamVngL6cKRWs9f",
  "key8": "46nq4YiwGKAajs9nRkT7Cp3PMLUBw2QNm6ZtS3EBDrKvQmiCUiq2LidSCPUMb1JKhcApA1NpqJHyr1XLFcpktpts",
  "key9": "MRGookhuVYxkjLKvir6guiWdxhr6y5q3mpaz8qkF5zh1w8EKeGCKe6yK1RxaeCSAitrobxfj7ukDpm4VAGSedhx",
  "key10": "4VimuLArvj7ErHLHJp8pmYnWTZ5KbgJY5ARe8mZk3qrZZtLcgKbRfmCW6LavnN2T69mK8QcMesSZm236QiguKkNt",
  "key11": "2mwooigbCrxVkXQznYUp7Cor6cLuKA4VTLtrRDbgoVHr4Wee6jBa77qavZx2gRYvM5tHgFooi1CdQR5HufAE5zMC",
  "key12": "4kbC8ERSWyK3JmfrwJrEjNTfFby1sNcgAzT6gzV5c6oxfyJcjSPAuGk4Mt2n91T6xorifPw8G6rADN2t4HaMcRce",
  "key13": "2v1Kp6NPiMuWn2M1MyYjhiLQRzfKAMJM8A5qja86dTDvfgwnkDo28HtQfkF4qkRf3f5k5PZjTd5FtkF425Dhir15",
  "key14": "gvo7unYV3C57Kw4Y4RpofgJobZLh2qy6F5cKSKVw7hFmxkJBd23f3kRfkxDu2VXu9wpScav3XN5HmfP1uND3AgA",
  "key15": "5yBXqX6MMgr64NeCGLmwdnwz2Em7bBhr6gZFSLcBdk5WY9SKmWFTNFTSCLEDsBAnkBkYeoA95deNesvvRhv9Xppf",
  "key16": "5NUZw43UCFuKkwxXndDxUCcwer3chPZZ85iRqwyDX2omtRJHXV6JwsEuYb8iYY8eU8TXkxmwhx2miDR94KZKXna9",
  "key17": "3vCZ5S2dxwFxjhSAMXCwc5wY3iqTPfrt93uUDDfhHSwz6wZ1R9RYXWaozLFp8AcvkhecJ5RkH69G8KnAv8jogtwA",
  "key18": "5nWpS4Q9UuCe59rqzFhpYWVmGo5SkaH449kCZ8DeKG35KdGBKbTAvwiKCEshvcSEcEVpuLbKCPqGCDGpYFgeX6ZL",
  "key19": "5HwbgH8xxdxGbxA51UMQBvB5hiaKG2h7tjfe8hSzC6UrxK1YWGEujzaHXE6mUiXqnsdpK1uKgDDF4NdfHAwmf3io",
  "key20": "43LZw94aSbH81zfYnD2qNQnx1ibsQWA45jAut3qcXJKf5YEq4uowqK4p3wkLgVZ4CRApqXMDuzgzr8UGqYFAG88",
  "key21": "5NDHsyrkHVxd6XGrw7NFMFkgPy2EEEBEuXVMhxS82Q8mPiSBg1MzwzkYQeH1sJLUGLSUSthcT46nqx4tPqSWPuVd",
  "key22": "2Uz7Tazp8mZAaYJMNRfMxKP3LTBHxjqkC98ubL7Pj3akVE8ex1ubTCwToufExLS7sb3fKopByYjbhxL6UtrAtpuf",
  "key23": "4bo8djDK9sHCHkJUk2TKDpG9DMat854MjcUXBfKA53sHV5QU5XJYyv2Zc8GnfgYDejtwpNE8L7UpXV5dH7Ya8zYv",
  "key24": "3m5mdxMFLhisvReuYhDShREorbeDfwdnPuFjHsYSm6qqGhNGP3pqefMXqhpucQk2N1vBUWgq55LCmVji3nkTniXw",
  "key25": "2GfdDWjxcrcWSjsz5UiqrfSGsmLWudMFVtUM89XoqP4YMfrMSR5NZ5mcMh7Hh5QyaSrmc61oK3ajh74gzA8xKb5t",
  "key26": "3vSHuvPkeTRJUmtXiTszF6x5NcPkatu9Wj8uTju4bLT8HeCt2mx9prgNdhwmbhiffbSsyk9xMfEii3dq23cjaah7",
  "key27": "38PfrDfvC5FaQoAdtpNaihg2GYSg1mPDddyp9VvpAnsgAErBZSUjotAE5jsCfNdVsgf8YZXTuqHHZfoTXzYauwn5",
  "key28": "3kBto9GmpYbr8XvSDUrL3xSDuvGRz3yQk8Nw6BdmALeufgYrGJ2DPDy4AqNSm3yKfBrPqoEgpTLvpweLxbQFc9uq",
  "key29": "hW5pTBk5Vokm6TkBvJNWBdyVqqzARsi1LnhQPPEmZuZFBH9WqUULF4LEMwue4xgXLMktZeA5J6SHi2eWouy3E7Z"
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
