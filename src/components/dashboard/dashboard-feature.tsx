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
    "5GiVwYQA7GV1Y2KebNiF8gsoCbA7R4iEGp3oFdYZbqux2K7AeFMgVDxMJGqLB7UgGVwbQEqZDhPQacShKzKvqHb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mje6nVu2fvVoRX7H6PZ8somwANyAfYZd6TnqH5yE3dXUfNskXcTEHs26GHMJDDMe9rVnna5xxLprmFSqdq48sgK",
  "key1": "5ydVEBxEUWkiMAtoU4YBXvFs7jjHabkDCxszTfdMhLGshKo1fUC17zSKWoyeSqCpC4fh7VK6QpgyppZwtEpPnQCi",
  "key2": "2DKKJ5MTeWYi4EtnHNynyz2y1qPxWSuTsEhnh85NA6kv4EErpnPRBz2CatkpFUajfi59z3wWZPYuQSCkfhM3CgCu",
  "key3": "5YUMbZxTqeBvrRub1uGmCRHz517BfWEdyAodV56fSaXpaAaiJ7HCUekVsYhWMQofZkVXYp5hmuLeftVUNJTQhxFP",
  "key4": "3KPba7R6SFURzk8QJEbYpQT7mJ4Pnn5RbnedeZtkPgNTHXzKLqzKLocP2JdzTaAnGZm3pKP2eq9CicwSpMmVQS5Q",
  "key5": "55kXCrFkbTrvzNtxNWXY6ynrwff11asQpA4dWAyj4ZgmE3wrpXJM4xHxYUEhoaBb8t78MTGanhy6dGMH3s3JbTfk",
  "key6": "2jVHuW2ny4otqG53i2NM9VdyYMx84eLDPhhjU4F1LViLS4J3Qvy2KddVYCUZDX7eWAp59ejkX1bq4SmnnVobgkP8",
  "key7": "u7sLx4ouL1PrB91rjsNfUrS3KPmMJf5HetKJP5c4KvF5HeD7doQgZDVrbFaKo9RfPukosg2qD9ZELvTFTAwQvN1",
  "key8": "iwjVsmyecvTKapJ5KxKZP6pogNukoFJ4tKFa1xt1saS7h87JFcKV6oY5kcc1moX7kF5C56LmQq669HkJqWtfYch",
  "key9": "sdHa8HaKE65mzXeCrTy9UPASdWzPzSnNJhWnLaTvYcuKpo48ZF8DxBD5cf4JAKwkZcLZFuWMzpYDgyknqxZ24rv",
  "key10": "4exkVaS71kv9F1aRfGEpTV2G2jHBirXpTJCgYvmXkUQzmE6DsS1TTjzJqLnNdMG7yzX6SM2pQsbWtRjbAd15Ms2c",
  "key11": "cFHTPtBQGWa9Sra4thw4hn93vgHjNgjjxWCQQyjFy9fF8GWRNvhk9JsmHZboydsEApUDpUXsKSXaofV18wj879j",
  "key12": "2CUoszzHADZ1LLDgdVcWndVqJxKPijEvM9VDpxuyVqoDZMyy8hMjsN24h5EtojM34xdCvYWjGf9GwBPVu2Souo5Z",
  "key13": "zj115taiKC7Wzb8mnpvd2WZLWnNgoBxbgA2b7btwapDxD2nBbVwy9hwakcj77QGYJCASZ23aHTryD3ejrUVTZWm",
  "key14": "4Usr5pk5Kkjz98LQJR6C5ductLdHXXv7xrReWRiLP7QQXgi2Ao51vTxYqNbP3UNjcYjNqybKajov6EsqYhHEYMWH",
  "key15": "JaAmRUYAZNPqej4dFSsYzNqtpxgA1vbPMShRMEQH3Z5ZGYDqvXEvKQtY1ZshtppUYSnE9mi3RMzZbxxX3ydvzLa",
  "key16": "U2eiZQSvGkJGbTmJqrUM9Bm49wboRxKy29zRbNTR1qnihBf75DUY9hG7sFvjWiiDwPnn33zGDFnUJyyuAMC4aJd",
  "key17": "3QimxH628pnbNsvKKcDCejb9sRdCJPvo6neq53oqkpekBf5dWUTKMxFZnsgLekDJHB6efnwCT57bCfLAoBPFyPt5",
  "key18": "qWCuD2ZFuiaUWtaStHd6GX7qtrbQ4J5eT8rWuqLBD5nn6HuK31SvZh7XK8C4WWPUHu6ECXPj4TJafG88M7aQpVu",
  "key19": "2ErVfH4MEvgfGLUWX1dLvVYv4wdgbGA5E6pmPtwj61mG4axn7B99mGfYrKwHFJv41hYccj7PnZ4vjkhnP7QXmkvi",
  "key20": "4w9k8z6wd5YFgvcNgy2DsGWxn8oYREhp2sKMwTW7GU1BfwYvUQDcz7gUJVXCMHJkbvFGXjuidxxcrJauHtkrbL9Z",
  "key21": "3iut1T6VU6kPAWE6ip38MStSTXWddzFD8KNpgBTJQubyoDs3ijADWJTqSxczEZBuvwefb3niBmhhRsH9V6ks9SNd",
  "key22": "461dxFi9WXRBAgPcSdZtxCVj3ZyZyhAQgonFDR9xVXBpyvc9BMj2hPts3RJnjJPQGBbz6o6hcT4DvxmwGsfE77uQ",
  "key23": "5cjYDxbDmX9XrHXrzVw9VTmEM1RtRiXx5W6AV8ktonYBeQ8dRC56KdEXsey7b9qxg681kv48i1JEyJLNkBjmmHfC",
  "key24": "3bdAeVNZRKybxfcyhmCAD2NTzWEbT836hF4bsj3cAKaSrZ1cbMH6P7jCspaQBE876CwsmKpkTV2AMpuZzQwnGCg2"
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
