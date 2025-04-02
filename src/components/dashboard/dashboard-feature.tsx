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
    "3yke7TkDrJmmNvzgeVxxWqTevnG8zmNfRu7TWZ732MM3cC3RynV6f7EKnejKVui5FzLnKvikxva9TvNVe8SS6edK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KFo3UE8zaH23iABYhZoEZakgoQfVssMMvwVkHrDjH1kjyYpKLoLVHfr6m2KHcAGfxDqSyZ9Axgg8hZfnCj3we3T",
  "key1": "2WzGrKNZUU1d1rHZXaUCEFHN6uWtRoUWvmENjjDAU3aDKbPdPeKzkJSYCoCAr4u9quERpCeEvwYysZg4geBr4yix",
  "key2": "2Q92jxo4LRjQm3YLoHNAkv6okBL2qtGXCN6zo984zDXNCGsvNPrZtdHNg5weXzNd46BBCrgWVd3V21debJBUmHiM",
  "key3": "53thRxExfR2eVBM2tN2ERgiH7M72v47t44sJAuY46jjZbgamsbVYxLn8P25njGCGDx7FonoFEaB4J2zXpM9ZP4TZ",
  "key4": "4Db4N9aL3k6KgUw6JaKfzs5xPaBGYXr7BJyLvt1HACCrrZ2ZkBWz5y4mu8M8TVwCJ5BkZVTZHTZBYqwAQVGoDw9E",
  "key5": "3cWicidddtRzE6kx6o9cUDSDcVzxx9tnXWrGMVdTWByno8gtV1Uxsy4kNJT5JaNgzLdDFxjYVRbZZBbUEaCnFZdz",
  "key6": "3QjNScborSbr1buCSPCUCndNZQetKexHzQb4cd9Uk7wTWmJa32N7WEAg5RgHKBbKmtP82d9qETvHJDkLJqBG9tF9",
  "key7": "3DeBfFhxQgSKwXZM33zAPpPz9ivKvny9EtWCY4X2FxHHxhdftZkQKgMoT6Mqoe2sVhH2DTQqsSoHJJVATyWxoXpC",
  "key8": "4dgF6qk5Yb6fjKKfaxARE7rpNRqG6awe6p144b4QGw7ZD3qZQGEy2x3FjmDtZPra7Yn4eqjAMThy6fo8ZPHYoZcr",
  "key9": "36ZBu9CHnSV43YNYupYEHiLA31CNNgkqwh6RqeYULwdnfXaZfVNycSi5GR86fNqtfak5NLyVETDqaieNZnGMkAK4",
  "key10": "2jiEVJX6iYDr95ijPN7PvEgW9txnLCvqZA8veudRCSxxGH2NmKwSbGTbJHvpdmfEgv9eb9vxVsy8mLWkR2v3SeQA",
  "key11": "66QZzgyiTxg3nW7WWxfzkDRxb6qvcTetDjUwLdu4zo1gQtb66doeyHcANVM6pMrcXwqizS9DQkNpgeskVggMpC4R",
  "key12": "4PjNBUPT9diMKXC18esa23JZDn2W3R1KNBwb8hu8Y4Aa7gqyUmWSt6k7K6sTaVDaTUXdDb8Kk5NySeA4xk8RWV8u",
  "key13": "eyX5t5RdPYVqXVSHMHnE9DkZxaDYhGLKCkc51S7DSzPnBpU5Gk6VDqziYHTbngJECcLkt3WkFUoohfT2kMwvqPq",
  "key14": "uV7QUousiWjuMmxSjJuKBTzw29q7rDpKwKrWc83msbaieVNdfnDvbyfcrsbaYhGwY4xiE5y8GsPji1mvANL6cCa",
  "key15": "2TMNM3pKk8BgdWH6d8ckwdPBExRKptLH3esPUbgGDGeEu71DPKN4Dv2PysBBZraUG7GMFQ9rpu4XYxsiyj8Zd98Q",
  "key16": "DnMUy8M9JEwT4LeB22KEsAw12L2u5RRAPmHapJkZNEq1ygrKE65nhTmtARJ5i2Uo3won2qmyhPuBLdF22j7DkfJ",
  "key17": "4tQuZr3yT5Bgnph4AfWbanMgHRNK4mZqRkJos36G5fww54F4NpEA5BnuELVGAkiNJ4gw1g47oFxkPRetsDjCSnJG",
  "key18": "3KFPQxFCr3tBQ4mk3rSrheidKZuQ1eMLYjEi6LsZ7nTU6ArxGiAuwZhbBsshbj1rHGt1AQyZjsTvEcqyi5n8FADP",
  "key19": "5qA6KcAJxdnf8M2vkA97PHWBzF8p2ndD5FGunaAtrrZATura49iWqEUi4hDmyVDQYmoqnBSyr8y6D3YTE67dRCDp",
  "key20": "4zsLJmGhhnmAGviiViiCpE8BbiiRoARL3hzHTH7pdxE52K6ESzqcrJhynuWG2qr4oraB6PYbTF31tK8HRUqt6t5x",
  "key21": "GCzAUByfN2K5FmooWvBhL7nadUCaCn2z2cN7ZNvCJwNzKwzFCMVvgNxAXVfz4Nee8Q37XrQthfqnZFbiWjC3ehp",
  "key22": "vNAWTBEtwiteFgeCcWDu48eBaUEYga4jTH6HBAuQMVJZowkWD91oQRdQNqiELDcNHqUN8pwLC57G3J1ZeJEGn3H",
  "key23": "5C2t5N6EBv93413qbBW8yX8Pz3NGTU9QABcFdhEr7Yqp6mNoMkADa4FS1cCVoqevhafZMP5WzfHaAudTGP1WG74t",
  "key24": "53g1umirD6p6TCAgYwWCGMfF1vES1QGJ9hRW755DQzrtChR39trKFRAuUWMHiktXQF5bhhJ6u3keU2YHT6XVaKcW",
  "key25": "4WLwJvz89zbNxKesSAoJ3GQyxossmTWg2mj9XNNMRZRvAL13VRF6CasPXsXjhcCy3V8sToDy4GoYQUVm9BrTkts",
  "key26": "2dBkBTK55HWGT6KdWhNr6NQevnudrit4YHPJAdM9jVuk7mSULDBVqhjTLh8qMRgNi2T5rmX5hYivyNSPMZHvy7H8"
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
