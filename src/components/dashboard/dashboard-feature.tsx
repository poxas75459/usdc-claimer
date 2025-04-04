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
    "21VF3QdCPbk75eSPVpqWU57mLctdtemMq4xHbMj2qhbuNBsi9YUWd6rroMEWq92Wn6R2YF2NPqfcW7ogcyc2YXwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5312pbaEkoWwXcREVMpx7Za7enqASreFfu6yXbRaq7KWCp8BkR5Nbrvqxsj83rpP337rK1zCn8eAvbGX2cBMV7Ew",
  "key1": "4jGwM5Rnnjo5HhBGNhTJch6CFKPiS9zdpRo7TEHXb4J99eJAUjP7fBy4iQ2RrB3A4XaECrFzB5LmTQ5DeEvb1WnN",
  "key2": "5obHmxZFcBGaESS7LQeCdV5FfHvUqx5vsKeR2kJVFcgAcYkVcHg4wpLJu24P3vhBNaaEfeaZW2yf79RUVeFFLQcS",
  "key3": "3mhpyFMw2LtMyJDH8rooje6XaVkTb9shYjHUxaUXMpyUqTFRgTBJ7jwFAVaxN4XC39y8s956MYbsrwyYcrBMWnNE",
  "key4": "61UiCobyUoT4nDcXZYPtC73QaVtoYBt6eoGSygNCSHwYsgK8zbLFhUMi6kfX1mKBNrgtHz83Xg7JmNszhhjqSZso",
  "key5": "vBcXPgRWnck9LJfvn6vFeLBvc8b75CfMSnh8cU7BJzuQhHbPsJ1fUzEJREdnGm3hA1WSjUBqKgaCuBmVVkpv5wQ",
  "key6": "5sEx6jXx3U1eWgEuLQkMBUjFLRHcJ4ZCjNHDc5w8tzJZCJXzkshDTbv2PCeNcKeaTkCATcbPg4jKSfZVWrGGh7vy",
  "key7": "4nHkuoNzn9jsH4CCYofkYLtEVeMYzurFZmtSPLcc3otXjUaPpXavvu1uvxjmpQyCk6gWmFRzQmS56mGfp1RsHZRj",
  "key8": "1hG8UtTxqRRc6Vg9v7Ga79mwhbdWgTQ1dckHWyLCVE6NJyeUL7ahU6sgjYd6g2hteZ3fn9pLAjqZpWfESAxfQkL",
  "key9": "62b3oAo1ujaHsDCwhFDZYGvWzciejQBWt4ffmT2wuRx2SWCHbdXmfLXpXEur5mkkFssNg7wosMN1PHiZtzxNBxgc",
  "key10": "2DLifgQ4G6k62iu3QTt8BhrUuhbkk1qhtPrQBWQmRPT8hUM8sC5zMJccpSZWoEu9HaY2W1vF5yNXGCAocVQHYEKJ",
  "key11": "ZAYjGANX2zhgFiGka1E8ct5UL9Ny76HUjFVNtLq2hcq5GSDv6aVKjJ8duuC5emsMRsfK3UGV7stVDtrQG97awLw",
  "key12": "5nqsVupCpcizZHrhDizpa3BXHnb4ZCgKfQFyWTVfrVkSLMrAGd81yvmT5iu4VGCcyQVTV66WqP5hkr9k7tAvyCez",
  "key13": "G5NHyMdt55wJ3jJzuMvoKe25EiPCaT1eGxMrrRkymm33iBHS9rAJYfdm1gdAdSTEHKtGSqhyAQK8ZNtxZLmHLht",
  "key14": "61GGpj6sNjXpxbFaG7f6J4L3jtuxgBLEsLcmWTeT7dRGDrvYD8d3nAdYYTEENGe21rFvi62ouRpBnUxJM93zJWM2",
  "key15": "5ZTKFxqoAMScySNhCkXz1b63cFsWBH9jtKYT45RUhuh6eZdkLHXmKeeF57TqbFatBWGtJjpBaFByVBbxYhFcF9m3",
  "key16": "pKKpkEK6y2knxT1cSXQtPdAmQqu4jSGcG9cgxcaGYERRSQrsz9WKrf7WCHHV3VxGJbGucNQtxgvzdd5zseFbnRe",
  "key17": "5m3Rr3uWWHs4j2vQaDs2iiz7nsZeepkKLrC92QV4RbZpG7wv1zLU7NqFtZBEHrj4LLMu1fNtgEvWjNbECgKT9Zd5",
  "key18": "4SNFaC7hzBNda6RGEMMdcBU8V7LZ3xZpAUgCzmqPN6AfTiS1ejqc1weX3wXVXTVYYzJQZMkdzQ57ggu8pUNGesFB",
  "key19": "5BXWyb6h8iyJ2ftL6hQiLx5oTiaPYiHfY1DBNmEuQRZYGMGnmNA416kSpQw3zZSp63qS5Nfys4MJQoMUVfga2mWr",
  "key20": "wB99bJJvN8ZcvQNNkDXA6ohswPTc6hUtfH1LZ1f6Aft9n4EfcNno7dxPYa3zopnWjGj8HGU1d4Pcp9aVicMpwH5",
  "key21": "3WUiHDEw5o19MFfaii8J6Jrv5VFFf9gyjioCf9mpts1nxV7P3ZseEfGiyc3ZfNxYGjKB4SESCabMLcSf6cryahrm",
  "key22": "z28sSK65StAHdgkUoKiHgvDRvDde5jTkKwo4vbwdDRf5Ms7eCaMjUwsEeQwEaVuUt7eLM6dBJgMxnF5YmTBnp17",
  "key23": "3PusQneAMEnbPW4HbRa7c13Zb2ezdvtZnVXoUkuScAuqfDhS2Lr28Fai7pitXDghbS32ZjTn8G6iabVkaX55nhuq",
  "key24": "CHqHAtoqDBZaz3bzeaNJR8BRLZQuDkwQ2jDZTZ1HeJfVqB8pSLbE1wHJExfcmanksEfXgrtXdxAFrfHSoiUNRQL",
  "key25": "2ykx7PwNkCf5TjBcLtAdg8hJW4iBmWtWUjTndDMsnYMfmNzQcT3QsigVR27bkfSVtTzp8wNm24uWiUTLewCTXjr7"
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
