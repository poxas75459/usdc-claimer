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
    "5SPnVSP9y1EvbpcVKANJnaDGNj5EMZkG5tCCPYGwUdPEYysK4hTxXHxgkGuDdJzGbfNdpQHSy3BjuWVWW8PKQfKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5QGncriqipt5hAMHN8y8XbiRfNJhdsuqWyQnqtykFDd9UBz6a45Poccc5kQMRQ5ToQedSFm6j3PgFrJF1MgFjz",
  "key1": "5X6id6S3V1E2JNWDmBwyaFqTZZ415rQnHJ5n1NGXtBiEHz8crh6qC3enptQLnzDknwTXLJ8GUPeqWfTkR6fWp2P9",
  "key2": "4ZSzFD2JJGvZY41PsUNXhcynjao3uxXkSWdTQYQF5rSetQSPiBQLmgirAS14inT3xq13xNkMQrf4YvkDoAR4pAnN",
  "key3": "3bKoGgAwtxw8V8THoGo7CwnaWTMg2TGpXfrAnjPXD9dEADF4zLLRFkcGGAaABwweEcsSwo6H8XUcMiLHCEgVYQwh",
  "key4": "3p1HSk9QvqxVcy2uHSZYdVxdCbP5kMGTeQB3StPh4kB8TPrHx8HkNXYAeC8RMEh4MnFmuZBREPFxpuSJuacTuU6y",
  "key5": "TJS6iocDzZwzsht92qmwFjT45Yvhz7L5r3DwbzAJM7ghXTtVupKhL9Z9sxQUJvdtSF165BSwYRmJmcWtd5twxbP",
  "key6": "2bi28iNDwC1ZZJR5SnS5TCArUWR6a3ybcWcPbRQKp9KTbH32DYQf6rzbTgCrDXv8qdmscmsgrwV2PfczUSkY7C5y",
  "key7": "5NKvKCv3SFfcZJqpUMzsdnqFxnG31Qsvi5dhJG5Y86CZJd9hgYiuZDY9v7mfQfT7ji7QW8YoM4DMhRuyUdZqzj5q",
  "key8": "3KDPnBhRxTWac3czq2wgcUPT1LhoRPZpBKdbNre1A4LmGHdpLtMU8qQXxJayjwypJqFeJsVf52TyK3QEFFXntHCi",
  "key9": "cTHoZUXKBKjV2tWsNDQGaAJZHbQpW3EAjMaTDZ5YU2znCZBZGFns8gXbukyJn9okFNqiyqDFzaJ7v44c6sJG251",
  "key10": "5cLMj3VjnZyjp7GFiEBjPcBxQ5jXJmQEUot7jitcsCecuHmgENYvAoQdUNqqFeJGrh8j9a4wmU5WN7ab4LKPALhf",
  "key11": "3vva5nJ84sd5HL7jmKgv1vfEZa4XT3h2Fbab1J3vNMFUur7t5Js9Df4HEapvLS672XmCNCPdqKqQHyqfXx4zyQGj",
  "key12": "3BgMfPeYf7Ec2smCe6tEgYBXQyj93DxQRtiLmzj7gKiZDup7p99aCgu7FHWPWBPbKi6bRBrPUeh83rtMWyP9mH4p",
  "key13": "5UrgBus1jTCnjRD3qA3agtzyvcNwaYCzhy1buZAMon8kwxpscyftTmSatG9bFEFMLNMVwLKM2uQoFTUa6F7dVUjC",
  "key14": "E1Nx5nS2SqpRAbmkbL4Qk2VJmM8udzbaX1FwUdzVAmr9B5Rii4eN9erpovfFPL7Vnpdy2LwTPcABENXdkVk4o7F",
  "key15": "4psP3peyxYaahNWmTiU2g9iRvn79UA6AbB8pwQy8ZbBJ8494GL3KF9jENeaEWc849biSmXhtEeAahtSyE7NvixaH",
  "key16": "4ok5gYkhVTUb3SKoGHdKKjpiXSUuC5GKtUzpi82T5xQgNQoKUcCuqDFxG4bJBt9VsSaQsZB3eyU8rKzrqHLzZZiZ",
  "key17": "2wA3pWv8nYMUjTiUdRyUDTmSqUJY578QzQLC58kwgcaMR3KHTCir18xWH6n2WBdzfruXkAmHePZBkPXNHgh6JVTm",
  "key18": "2s38TghCwPTztMKFkeFCf9WnqtQLqH6m9UzeX9eQnsmApVNKECUgzEw6ew1nXiJ1sSofi9GFuqA7FZDSW5TrHN2v",
  "key19": "5LMMgx7nNyKHj2cw9fY7HLMS4fNyDJtZJxxwwxxSvS8YsdTT8fRGTuPCesVmV91o3wgY53kwgtCQDWxNfU7Hj2gf",
  "key20": "PNp5YF4CyL34DCvHxuEXQ2SHmRMtRdLPWRece2p6ChcnQeyhG5hDSxR2Ex4BmVq39jtiSZk7PnjPJD6CgAjANYo",
  "key21": "2Fo5zXaGG5k6Teh6sGLeCFdKvmgDmvPbkwiy1WiWv5pZWJmKRx6yGEp95uR5HXpYXMrkDErMJqQL9U3NXGoGLKS3",
  "key22": "pY2q2NosQ5N6qZpFMqgTD5S8sxUidWuPr49WPRmSYTHgyFySHfrKU7E4By9EHwdb82LnX1FzaR6Kh9zUXvnCvmU",
  "key23": "2eF7HdTYc6fZhvewdMNDHxAcQwsdc6sxojoNJVG6GysGeuD7FjLpz6X3MEQs5vkgu76aDiwmrULGSSKqgxPsRLYk",
  "key24": "5fWbMwkDZGrVGRzMDxLKt1gJF9dAEFP7CQmhfFsE6zDY84N8Z8VXEB8eRR1TMtJ9sP3mwywVKhmEaRieQafRFsMN"
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
