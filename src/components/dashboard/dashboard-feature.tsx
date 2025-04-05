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
    "WpzCQDcwrcLPWUN7bVo9U7MSZAa3U9tFND78jDNW2TB62EszCJCeToXLrvXHTN5F44D1kymKAxsYAKTQR27vpHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WkZ4uQvcKe8foN5SxPbMdRZAMEHs5XAYb2ST8n4xAqzdQxoobT2JjteKFBLqLfm53KeZbtBSPwW1BZEnW1yT4jn",
  "key1": "2QMuiUvqW21xSNHxoduDRJhSbvKqN15JSnXrJoiTquKpNWbfnToXCmd6WAkDpyAadKWdJrseUDYWdf19NapdMrDm",
  "key2": "2GQPtffiCc7ryzctGqjb3aDku5mMrfSJksEkq7WdQTiz8n7CFaRyJHoJpNbGQKNs9iqvSKfBuTctvwHY9fKgwLS4",
  "key3": "vfgsYBt9jeHSW1YiXLEW1ViL9CM1wYrsMVNALCZPcVKW2VgU3uuVwBH1AmhwpwVp5AGrK6esDQRTwvxDbWxirRR",
  "key4": "3wbBhjCTgVHVuggVB3i9ShkoJGdzmfDpueuwdeBKYoQY9iG5c6phcFf11CjyrY9qSqLHc3gjKLsB5k4etpYLnrhY",
  "key5": "5m4Cynbxx9AsufMVbS4rjP642Fzd1EqXWbTVaB5JmyS5Zfha9nWzi99NydjStg1NU7QNKimifBybe1bdvUubSZjJ",
  "key6": "3HtPuDnLy7hrW8pn8sEwhfCUnyzPM7u2WbENxZhsNHniVvVYfVjKmQVjie3XTCjRsws8nZbbofAURj8j6tfuV4n6",
  "key7": "3Js9Eujf3MZaAd1jGcQa5RiVJ2vegqSmdPLLacAThQDPak8zsbaGFfBPBWjzDUPY1BebPYA7jFZeYKN1NeuWEya2",
  "key8": "axfdu1KjRJBX5FtUoThYtrjSMmZ26vdMbqqAFFPjbYCtoWVGbt8bZAYUP94VbGYxjiXVJC7wGsWANUyFpZKxkZX",
  "key9": "4ys6mFLLfLkYrEL4ytifnKoLp2G5XAXuSJy855B2FwC9MhxBjx7f5vBfq48ZFFcb9osbrTaUdo52fUYXnEQey6E5",
  "key10": "2DWHnSv1sSv5tDmQTjSyWTaRb6CD67cjkbHmG4vkkEHYoEw4HCeZyTfzCgHbzUMgHFRUP9LB3VDpa3comWXtLjjd",
  "key11": "2PPUG3neakPL4aVEkavSGReWrwwg5pRK6skReYjaY2hTDHP4KdtmQXDmpav1UtHwGuFh3u9MAxP4LtLdveLS1acS",
  "key12": "322ovKhgd58raszhTGfuVSRK8Xm3LcijtY6GsojEZMbX24PvDvUA4YV1zVFZn2G1bnMLDTBrScTuYoZ7gozBzav2",
  "key13": "3rdrygHYGZ7j7r81vjtcmth8omRSoQeSt5i7nqWprrCVpE8k5QQXvZYsmfm5vWzEsgJAXT3gg1oUzbfvfEQ1qhF3",
  "key14": "zLHQgLu92Un8tSH4Y7Hee79a545RVWYL7GCSfskBgruCJNtEkNhE4ZbFwRmAmQiMkmdbjnqq5fyWC4QdzJX4GeB",
  "key15": "5m4cH1z7F3wgVufK1noKea2tkTm6Gz7xmRKKykU3nXGNX3fTFrg2PhUidy6cqyF6gC7NJwQzH3bq9YfD2H7TU9pn",
  "key16": "2NDxa87pwS4i92w4pjJ12ew1pfxwszp517mDUChFJVu9T9pxDJWAwyqtPc7GfGBursx6KhJL5bL3FubbUYQELm4F",
  "key17": "5RPdpPf44kw1TNgDEep7tXUgV2AmBR7ZbXKqTyMLF3vDd5m9CenY6rehX7avFvWdewZjRMwiAGtMQ9y9g6XsMkQJ",
  "key18": "5XzNC57CaEtS9666GG6GiMJtFbaUxbHNzBdGLxFWXH7KXmrs5XdFeHY245vCw9DveS5gBxqFjTVqavRQp6BxCG3G",
  "key19": "tNDJhYrg6V5resVmyTb7D4cA1i1LwaxpeA1Yz427WWJC18ZxQf79NbDHXgs6EXgLVtJZixJHhTGZ97bvCVKzN9B",
  "key20": "aniv5qndkyRtVdeDj3kYKSmBCLQQ25LdCRXjjoWg4rL6spNsUWZH8Q6DR66SDPJBfELWaqGniMXgKDpJw5rREs7",
  "key21": "5UHLSveoqmAvogTWRL4t7edUgBP2ED2mK2dCReY9TqNSXx9Tey3a58SoGVemDBB12EHuVWdKY3FquQpVEih7PWrk",
  "key22": "MKgfKhLUEoMDJbCh87RQqApSkPqJcnmbSQpCvjhkJUcoX9sk3hUx9oN2BZxfUS7CyWuKa4g9fKFzmhZG88Yt6t4",
  "key23": "3LPKB9ooQqNsgpbsQ38zhpGBBryQFZuALGJgwLnWBjJYJXPksF9k5evPJCFFF3G8wWJAJB9r2e38eoxc2RHXL9Me",
  "key24": "3G3PxDhWs3SKKPjS3kGBLbsfqSTCSJu3yqDFLd9db5VuDUEGkbYPR2GUUGaBCWT95cQKznEv3GfoqbXh61UtqWzp"
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
