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
    "3SpCQN1ALYRyXjFV9jVd8EYwBKZmWXoLrz1khoQaTCmj1Lf6PXPcpWFjLMopdnQokSfNJbh5JBsSGwrYksTsm9Qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53NZgGdS3e12XRFo22pxwKtRVyZAGEhqMdwNd3jSvzwK8hd36ADJLgaueCVAeRNf7CjSCv4NcGgojn7WQSnSFDzx",
  "key1": "3wUpK1s4gRnL3Tmjyc67CUizUC5mAJUHBysAExyviL9R7WoUtVSepbFfqaLphYQGYbraH7EQmh9yz4PzLBqV1EXT",
  "key2": "2HhcoVs9Q8XsKByF4Yu1J2bjQBTRAAk1KnFNVhEQ8aQiw7ZmwSuowqY1k5LH3hFWqYZfwdDzVzdrwBHBGG8WuefQ",
  "key3": "4wDvnhge4KCw8ovK49c1WwngNpYXkMmzYrxgR8xeZ8YRGBCRfPXxScfgiNgBRruNrwHtKzmqyramwjyewgqxdEE3",
  "key4": "2gTP6WNfWPMgGUcNLpC9oZAgcwrwivP5rn3nnxzGW6CbctEtKEyt3f14ReWeYQPGQKVAJcaQwcTtFvSKS87DehRH",
  "key5": "ohFS2G9GA9ajUnxuWYsh5ra3VF16dZ4PPNFqQXoQTE7ym7USf5U75x8zsTtJxYdBNg6CscKFzZ1SLAeiznf73aP",
  "key6": "3NG8Sxa6fbGPmzB3oNmt48wpzqmpnuttDSC7pKwbBUFwgbYNQCYeXikvUcFFcXmiRoGNYBC7FWWSUfvuropVHuRo",
  "key7": "2mjA87ShfpczPibbCrNKL5p9UZntREjDfZD1iVYqBcmWyUNqYqR62RSrwhKHajLPxrCWPrbz7rqYjV3jNx55coGC",
  "key8": "5XXzbfECtnP5bGGfXVXRW6nX4CyF29yNyVvX9YZAf735yj91VEuyh4kCzKUXtRmY8xNM9e4iNJ5fqhSKLvkCLfPb",
  "key9": "2iifKksxEm99L6y9y4B1DT1WuPugB3R6jGnS4RC1A7qrK96r2p4TyZBcrXywAvvs9pHGgtm3mRsxdLZ8Tmiwp55k",
  "key10": "2aGpHPQnSiquGvXGrqYYMx25BjbNZ23EbeUqUFwB83qBZB6cFBKRDh2W5T2QCJzAqFVX2jZQmehv9BMGtNNuB3Wf",
  "key11": "Z9N26ToNJZbVpsoA56E9wmQuD8ThDWgfawxW4G6xeUpcHB6u2oWy738LA82n6xV4RMFYktxyHzuaZnJBSrfYVfW",
  "key12": "2SZ5NoxT7PNPBkGfTWSUNti9Coek6865ku3rYD7jeFFH7y8EYDnDfYPdUQEqQiubfjm4XUxzABozqusWiikTWzkn",
  "key13": "4YizXUsqe4dzCwAg4Yi699Ry7NnoMCGWa43JjmsbXYJSbiSVMFrK9BYd7VtW5Tf5vfUqpRNf75xaXeEShLuQRNrZ",
  "key14": "3e4k8xsFUvXoaFRxwfQNpjYH6dymUF8ivese31DKKhF3arswVgN6iLZ3Z3XL3KJtEb9ZafsjTgCUkwVMARRSUpT1",
  "key15": "2sxVarwumLETjHk2yMzT2sBg9JVDLazu4gKCnPGDddcyEsxPfPiCRnwWTap3h1w2NDXsjHx9aouyNVcdJ24PziNH",
  "key16": "2KDDYs2uDL2xGHQj8qoNTm5DnTnqUe13txZF1L1eQRmDpNExYGSppJz9poMzESREzDo3iSDeAo9JCUVkT8deRqXL",
  "key17": "5wUtKk7gJ68NcsyaPWHo7cN1VCCrBohKxT3ZUZ64J6vZXnY8ztqQkJ1HWAZURiDNCkhCR9QgqLwAbLQwfSg9b2cf",
  "key18": "62GL63VrKZEZGjxbr9hndYBeCVVwDT3N8gij99ELtFdUMys7DsaUGj8p3b9NJMBNrCodVe3HppC7wgsXWfRc33d8",
  "key19": "KvNVFYjYmtaLysSp4E7QdUCkt2r7hzWYdv3P1RNKwF2BExhFLXji31e2FzxEAKrckwaUuwm1a5y6dT9537nMhhw",
  "key20": "3g9Qn2c5fbA14QRvvupeS8ynz1RN1miqaLKbuMDuWmqgiuXDGwQNDdQQRCi8emMKKfJ2wsRpg9NcvNMxzM7wZmNU",
  "key21": "duNh2ZJzZCDS33HAfCsVdoJGKyxV6CnzrBrAcXUUo4wMyunWefFovoHP3bTc6U5fKREAc3sLdejD9eEMq9Srn9q",
  "key22": "31P3MCvsXZgHmZq8Wuy34RAgp7NHybapThPokPB3wRge5KNpyVD69qzEC557VjDpP6Cgo6THqUPiHdhpUZzd5oN2",
  "key23": "3A3XyYoL5pWR1JrzsNjd5mmLr2qzybUpUvZZzoapatupEzrGrhmDoVd8tFyXpz98AkAbC7NGbtJVPagwKbtGtoXQ",
  "key24": "4RYCSDkg8oohBRafFJ7VCnUzGA9XaNR8m5WWJBnVsr87qwKaJCNNor5FPzUpGze5J2UpT1pSc6uVv1MwNEJDDiAp",
  "key25": "3pxLkgMVDQnj3ivwcwVhLEbRVZ8Y2n5iCGTULxqtVGi8ErFT1Y31935r7jDhoTqNTFpCmr2fYWrwD9Rx995Nt86W",
  "key26": "44gs1baxGTMfmXettGF9CQeTS22g5iYc8ZdXWN2qBapKP4NwSNouY3kLwKwzD6ywpdzQdTj36BNsnYPBssDMJdoL"
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
