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
    "4LGss2xDgrDuoeoKXK9wehzvsG61h9N8BSTUfY2KMJ5S5r1PJgEWNWbSthSPiFp3yesxCnW3ARGJMcbjJKzZRTvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vYZsj7xW8NjrrxJ3YJCSsHp2EdSa778pU9pde95EnMnyTrZur9E6Mb1mhSgeJtR2x6dTm7KMx8NNdmG2dC6rbF6",
  "key1": "3zqWgkLFRLiH9ZHDeLFyLWG2mCmDyvuHVcEVSeFcKWdLw1TZ2k3wAPuzccKfMn4FgwuKENmmeGfxuLDsyJ5MAVXX",
  "key2": "5z9kUqyfmU2irg5uaRN8t7GEC9jmooU4jdkDY7vg8KcDxYHfDRcZk7mgNeVD1yNXutSvEJ12DSP6wRRbQUu9v2Me",
  "key3": "3ZKHWzhb5DU8ivWiQu7RwJcEy6gnUqXsU4oz2oSKPrZ2hnFUEiLXM3CQKD5kXZNRNvhrwTRWAdKmCXEz4gB7AHfn",
  "key4": "5sDj5b9HSgZDZUdcYLJJ8r2LVxrbSMJFnA2FxpzMZ8Mmj1QWm5687tqfaAbp4RWSEwrfBgA6JvrDw7unHFquc22Y",
  "key5": "3tcEobHoCSHgF7EyAqnuGLpsezaVBc6T89RjT6EvaGz9C8jkYG7s99ejNFjrvdHStMmw2crNdtwTu4wgVuG9xrFK",
  "key6": "33d8Ck4APq7pXxvHidEXbjLq424YCBkbd1byFED7oCYEM99Jwg3R14yX92bViNbCGyFDRht7GVKJeJo8pSgBpDh5",
  "key7": "2KiEG6pXnw38YtPci73w2NTBdoZAMQwXEiZsRu2LVv9fnKDvkbgh9c5pcYfPLrVYQHetfkSo9QTtHxQn4m9E7Pgy",
  "key8": "5rjENHFPx699N6uU8A9YgTHQMqkz8fnm2uf5wDDbqwiHVAzdRPhe2t6kiYFTdkJJthzgcx3h47E1nT7XNxMWsmhy",
  "key9": "BCRHQwY3dZQmsCsZ8ibDQ5bNya2dS3HHST5ySNk3fMda5zfk1ScdU2iRPyFUTvnUcNuQSokNretYMj3RWb7T8SP",
  "key10": "5NBYjbYvMtHgprGvu6QLiQAUtJm2pmK2U1XBgeHfiSnXJzDUQippzWoPSiM9QZpWJXAbHAj6imjjHMasjBbMYMcn",
  "key11": "2KGQAgWjwpHWGX5TrLW7SGwYZJEzDfiWaUT5TKRX5GxWgVUwoWD7LRn5sUEyGTjCrzc5gW1TJ1sJHo9m78woSVjq",
  "key12": "3LWJ6SryjHuDGKPP4d8HmSLboYPDDfrbXuRG8Zwb23Rh4EwL7fvPaJknB3bd7ybtjgZs9ZmLjxY481CXNMxPikST",
  "key13": "3xTkmvyotFuvaCfjB9iL2sTPP53hfoEmpkCK8iM3L4QbaYc4dPBKBK1EiqmLZnjiWnfSZEhiV2Rz9W35MrJbuY4z",
  "key14": "3psmttu6nmpASnEnncJHMLv9Kr2v5FdAs8kzUnA5TpmGJ2Deen9azyqkSi4y5cxzyF7DY3sCPjCHo1x6hhXPKfh1",
  "key15": "KehFW8u3DT1jnBWYABxHmXa1bSXeyZ63QUfYJ1S8P8CHY4w53Xq9r9xumQhD1M4FmKZ3tg76hScH6j3jjiMBagp",
  "key16": "xi3hZj48CAVeNvua585qBvTwQrgBdYBKgCQkqy4C5CGpro2aspJDsTFtRnfyY7zvG6HtUiZEtGTjka5jntNcDfh",
  "key17": "3kx7PbXRVuoc9C4z2yfxhC6LkPUj1F4iKQvwChdhXEKegJNHedhUGdmvneiiDfvmxKogQ2ewPrHo7uHck4ajLjQC",
  "key18": "z7xpkNyTouZJDkZbzDnyhDXfLyPcJYQtFkCr4RtTCEZzBfyiD4qBi8SSwA4EEiPgEVHqen4Nk4Mvk8SvJpq1KQC",
  "key19": "5s75Ps8acnV1bSbev3dwVypLvjW2wx3kX2X3FYwy4d3Lrm5sJfntWBYPXckwsN8bkwVVY2MBLHYGcJdPQqw9rXb7",
  "key20": "61JENXy2Su6fYLxoBYp9A8hsZnr1hqfrLZJU1z6FoSEGwTKyj8ca8uEKk8CsbWoNezn1qbypaBpaYkw8rrkFpc1h",
  "key21": "5fzeWtbqd4LM3uEtzs8SPDdjVpfXY5qzdVQ85ZD7paFwT2zR6YVAthkGUsauJVJNg3xdEGcWXRh1KBcjXRV5pYYU",
  "key22": "4wGKzB9hi2PFfHmRX3eGqkf3BULJJBLqaBM53NDw8xYhkpuN55b4AAbXDn8zgixT6bG8neMT5gKkS7mtofsfvLaK",
  "key23": "5kqitewULuL4K9pKtXTszwu25phvDo2E5scBB6JGDMRAAnYzTcf3ta3PKwXZfohbCudZ8BPU6PweRckXvPradHJo",
  "key24": "3kkcQ4mAR5cv4Zon4pCFc8QocAWQKzPUf8M2rfepGZUwPtH82VFsKFmV95eQdWxkL1GSV8xqGYr4JqA5dxkwoehK",
  "key25": "48PUqeHV6XzTuE8Qn8ZkRtrZYyiUB7ztT3iLZzVWcMWU2XXfaNZPPor2nMuyyVaf31w7qkHtxrkosSFsU4nXKHS6",
  "key26": "3LHAumzSo8aPTqCdtfYpsugiLErRiCuzZAjDS5jkXjg1TkdsctxKvAnKJBiut15j3biy5LoH4Xv9hefo2esgoruS",
  "key27": "2hc3GYCoDmY4qqBtt85xxUkpfoCSHWtAmHYuuh39hN7JnRc2h3qsYC8HDZvspuQqNLnYqS4bJi1Et9tFSDyP16gE"
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
