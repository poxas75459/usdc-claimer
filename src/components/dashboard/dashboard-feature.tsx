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
    "EerwWMNZjmsEFqw1MndRjZjqfJjiZ3e5xDEQxu9F8JCiuJcugBTC5pp62ej8ghVhYEsvt314E1GxUjQqGqpGfJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4igud5UJsPWVwko6F1bgbF4xAP7giopMjP46NYMCfpqwUxoM5MvgFy1o93A7MGyQDeCTtVa4ApNWs5Aob3HWdjqt",
  "key1": "2HRG9PMY1RMjffMnYRCBB9AerGKgpxeUWKJ4hbZWjjGDt7yxYTnYeroy3PMq4X1zsTFV9mU98e5Bwmp3YcGsaqdu",
  "key2": "2PYoG3nQZMoyqaNFhfHeMvLcr2uUyx6RCjRCvx7ZseoVm6qezNCptNKT1i6WDno7aDkSYdij2LXuMPmrPWi9ytsf",
  "key3": "fVMFbemY8gfEEopb3LXmUxo6gLEtXPAfBqgi9RgYC3wYmw9ub4MLZu9bYDxLMWESWrJWc4bN8H7AgYEuDaZt4wx",
  "key4": "5NhETNAYji7Q6hUkAhZgLqkdQhCMd8z9LsYEJ679Bzr9AV1wcXc2QQZ3mTj22y18VSJgpUpAzBNyzucPNuGNqTeP",
  "key5": "2jN59UewLEu8TEJ9GXLCx3Gwnz3p915HUKZLtMY8KmnqipjLPHPcMDj15zakaf7k9S9Xw1NxmkgFsG56MxVBaBDH",
  "key6": "5ptSN9z5gmoas5eZEbKhAUkkmxsKWiuctdYSs7nSqrRRtHYbC9px3z1QSvCfDfKBFwqE2KdUcLLDYCTyzjxgENK6",
  "key7": "22t3hss2SPqgNj9Bp3sy34QyHrGgFggFbHjWwgvtZ8scFxhuBEhUqto3re5RV7szxRCb3qktiRu5755PTtao8uRP",
  "key8": "38HXWwNRa37GyqCnkcbBfVfcV5kV6x8jTFc1WSe45sW4C2cRS427TU7sYQTbxSAeMFp592SVNfm9UbakrVNLCYNY",
  "key9": "5xBTNfQXiwL1AZFynuSWsCLD2fuDNMLGwPyoLx9Uu6GbHJXgu3HghLXnaqsfHdtGW7vXVCfn22gZcKdN2aZr5GJn",
  "key10": "5Q9jdxpyAENVgyXfngHYECWZfgWJvob7fiCHYos5rC4FXuCq6gNieFAhF3HWbRDzzsMzoweV8ZSmScsDwuUn1w2M",
  "key11": "3UGj3XZggtPHgBiEE4Ro1KPSNwk1tSFM4MuBiQQRaDQ4WcfAEPwkJGnTGWQettyJzz9DoGTo6B76Tm1JLSQmM3HM",
  "key12": "SVkcViqcgmfrw3Wgi4KJEJSrKu81pCx7c2GFZSo2YQMKpmTXVq2SH6WRcmgDqzwAGKz2MTykm3uWkQkXSgE8S6Q",
  "key13": "3ojKsKBQUEFWT15oysARdFrTavS5S34LkgVJSvYTy29TVgcidtoTf2KscbcnmuxMXN1yFBqh8Gc1vkgQBNAPpB4c",
  "key14": "5VVK5jM8MTUw9ofxJczZCAB9sQQ6W2fSUsX3wfL4DhubgzZEyGFrPWgUG37xhJQBHCibkSsX7EWX4pWtGnb4wCkG",
  "key15": "3tYQ7jyGfS7C38oNvSQRPm9mW1ALEjh4kKZVzwTYtj8YDhNLe4oFkhRLPttSQgJVn7c9rU1Rf11eCcBPfqGGAdrV",
  "key16": "3VdX51AZUV7iyZx8RGURF6Ytd3xgs1Rp4KWoHXTQL3JMJJMGGyVc7GDUD8YPst2FRvrdVZFXHXx8Vpxcf3Kw3ZME",
  "key17": "5Kn2anBRSzg9QmgAqzqk6VqFhLW1QSQyKVYyog6HajZoHBVGAdYHRqG4FKAWXr9jWMmK82RNoo5HP8PnzF2ssSBm",
  "key18": "my1e3NYmBZcC5xSmtC4CPG5JvtYJ3VXRU38wWrA5aKLuw4NSqPoWCYUtfzcQazUbR96kmEZtDQyTphKXPGUJbs1",
  "key19": "3cqF24PJeKWyRAtEJ85UjCnHGBM1yARX9Fd1cMNEi7HDs9Q9X1dU31E6JsQC7qV1fbeYST8tsBxbpEMcb4TkmrNC",
  "key20": "3iTA22qv51gmqpCdGG15oNRCUryc6EPUf4ck2BpKYtHnkLACQiFGZcQV48XdWLan5V53d6S3G21MhCiNpjy8cbnK",
  "key21": "3zS3URjdQh9eHG9dL2TGfigVLsLcLcyYNccrHjdh8Ui8FxV9iqB6SHQFLHFypqijm1W7BJxoTXCSZz85UZiqjnDy",
  "key22": "2TBJYtrVncbyYNx7uJU3u7GGZBgiRNKhVUwgoFsowGfzj1ysC5bhcBiffeC73pDKe42PYL1ajsGspsmbjaj9uNBN",
  "key23": "26EbYMK1RzovpEDuegkozcwVAGscwCdx617rrcAQhGyVPuotRDYYhBwKWpc4n5fPJbscNDduoWqLf2FRjGCuzpb8",
  "key24": "64JJTJe7kE6MxQiD66Jgnwe7VobVkbqtvRT8MyoESz7NaZC2QUYWQxkgKPmSdHpATfb6DH6N7ZpayyysLrQArU67",
  "key25": "22NTavHxJRMBJvNsny2zJim5d7v5ZmpfbJGrFfak7TT1CCTvv61u3Doruixisid8bdWQVxY5avt9QcjzD8LyMLyT",
  "key26": "2Y2bD4BQWQUvWCakckSxxdq6dtcsKA67eqZaaCKqV6jMVHYDkwj1SyL8GCBqzYq4U992ktk8ZJsyGot8JmqAFquP",
  "key27": "529uNHDVej4M5dWnHrxpXCDMQQfKQTzk7SvFYdwcRAZDTooETzpqKvy3w36uDY5BnxzJtMAda9AwqwS1D5htaGmv"
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
