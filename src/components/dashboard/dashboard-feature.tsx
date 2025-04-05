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
    "4fGJLh79WETzFh7NtrdBfLarNjtbcXkXCoMgpg6AKsqtrD4UYTEHGtjWkgFWoq6j9vBomgzPCxEreJsFfPU2RwRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jidx6tMEzWXuFdTTEh1ETDsEtFiwKZno439UFgTSDJANB7m28stBqJubmC9ot8CPQaZSsyucX6gfHLbKxXJXdNk",
  "key1": "BUJZtkzVHGeQX5dhKvjoCLMQRKxKAQ9VdRkxf5fz5G5myKFoPgLVP58oQsNbcx5EmJw6ZnhCHWYJBVhYB8QLjcJ",
  "key2": "5k3BANU3cjX38HBszYhW8dBRkQmFUn544xisEVBDcsh3evVf556xzGrbTUm6sovNHsZqmkkN2j4RwoZPaABawntH",
  "key3": "4EbMGfidjUUpxjVnpNFUhVn8Sgm8SeprjdeRv5yqL9p6DeACbhGyqS6ZYr72vb28HUFJLU7CTVFzH2s1v5Sk9mQo",
  "key4": "3M9ZX4dS3W2q1TZWujFH5yznbCf73aJLevyEhLdaC6DXu3J4fzUVB4LkSDAf2kd96kjV7FAEtNFxxRMJFhjksfWj",
  "key5": "3AE5r1BVtLmAh8KhLGg6BPJZUmdzzFqnddwZGvoxJXiL8TbD2xaTR9GefC3XZb7W7p61zrXth1cgjQyGwqXTSK8y",
  "key6": "32qr8GkucE9UTmPgh51RzbfhWNLFftaugZu8bSXyKrgnRneYCKkLx6DPeUburRBC9AcoVT1NfhqmKzAg2NutPMSx",
  "key7": "4xstZYiJjWMmfmxzFtfetRPpXUvBPvgpoak7CjYTMzNtEyKr4iDdYtpepGwUCn7e9MQJyqbeQnPzHy7aWXpamidf",
  "key8": "5pAW5zvajRoo38Toh3sKuhLCWsratF86C1eTEmhW1cfCBiJuYDkCjMUHEnZN8QNaysLHJdVSD7urp74RGqUFJgDk",
  "key9": "2YpJEXgqdJSLb7QKwjwH6CAEzihWane4pVUjBaSnQ6JeyGfzmbbd59pB2fwXLw54p2iLnhoSDJBk8p67BnmcsLpC",
  "key10": "2JqJFX1uJJd5NbjWwscaMmYr3mttNVBj2Cargo6CEQbC1XnJQCquf9KnUXqJXfXxTbsVFbsLzkAngrAdRwhMrmW7",
  "key11": "3P1SVdR8Pdgbcwc7TUNvAXYEK3a5eEZmkxC9B4SPLqdAWdxP8WkCUonE19UgB35TiwznjEecnsDyoeaiJRnx3Uuf",
  "key12": "4SszJynqAuf9x42iQQook7KgyJbh1EPWKvGp5nBT1GbS3YfXmyX8rQk4q13m8n2hxMV8MWFKQw6uYnrpxfvzy5t3",
  "key13": "5dc9aGQX99bYh4HJ1aXWDQPcrKLaDBDrEjLajFuVuFtAib2sgu7ZbWEddkqgCWCvPStYAuv6WbdMbNd9eWBQECWQ",
  "key14": "2dyZYQrgGcRFxP1stcjM3VyMtzeUMdHu1zUM2LqbzoUPBZFtPJPSUYhR7YE2FBTLv4EkLBTTbVmVTKxz1EqwtBJE",
  "key15": "3schFdWV7GPVLMcK5YtgPXVCcw6EiDcFNrqSttDopKdhjMLmedatrXAD8X9oRpkX7JacAn3XGpRrxVDjSAwjs2F3",
  "key16": "X2JU6FxYabzHi1D68fokEwosPz9zLPoR5grbgLYJkYShKDKk3tJCYwkXjdBENvpq7ivaaykPsTMGC6seoB2DZEh",
  "key17": "3k9hj2tMndYv6c426YejupqDLJRfgQ6sgJXqCJjrrLFxWYVhJSkkf7i5BUc5g4RNn85znBSqrd1pakf5TZnmQidt",
  "key18": "4Qki2PEGz9Nr2Urjb8SNrY3Jpz1MDWQxLHM53JrSY1htYaXTfLAk2LrDVyntNyhjqjPXgsL9bAtQ8UeP3mCyFvGh",
  "key19": "PRyVV3avbW6Bb9Y6HWJaR6jaqxSqbXBYQmzCBjiWhhbGpddtqV2GaEMadk7ff7pgK4i2Abk8cJoYKTrmBAdR1Kw",
  "key20": "26FdLQyxQBYUbqNApnb9dJx9cUQAhhpEZjuoBosE8VcX81wyh2toLDy5z4ZTk7ENAAPxQ2b1S8BK6yVG5GpjnBYU",
  "key21": "3KqZTiMVjnMGvvnk1tLHfwQSw4NBTBaBEr63ovb1x9K6oSqNj7VK3nBw4P21D21CYCWNY75mvFbF99jgbWkhGPh7",
  "key22": "572qAfjqQFspQ7VjNoXGcBRWthsHzHViP7cvZ4MtjCPgoNyuQQNjGq6NybFsLjSdKbWC1Qq7Sc9ZCKy1cRjbZCS9",
  "key23": "57DAxmHn6AFfdXJ83DvqBAk1oxHW97HiJEkpZjo2V8f3EadNWYu95bisbkpgd3vrgfCAAF3pq7LYGwPjLhHtxMi3",
  "key24": "56htPYVs3RoBhNeWW28LGHQDaKJVtj9bQPCLJ6biAnVdHNNmGGeAtMxxGw8Uk3Gnf6Po3EQMbgmcjVgndY8HhN7h",
  "key25": "4A4hHCJ3rNkgveCM8eULuunthBfeHsTK5gKA75TX3BfFDiTkejNy4wx3yPEey2gGxcHweDRsRYixo9SRFWjDy1DU",
  "key26": "5w2GpQ8nK1BQ9MpTSwmZaEaxPS4H6z5oF4i7oa7WWZ5aMXGKEnWEd42eNxrNS14iAdwCGThaTuHC2bHRi1umtzh1",
  "key27": "2CYUU4sGxD7Ebbr7mCTB8cZNxJTmdDCR6Av7xsH4Edyi48pmnqRRrctzR2pYK3o9nKSR4EQxpZEjdcnByH9o2Wgi",
  "key28": "3NEchgxP8pTYiD5911WYmUeKvqh1WGx211QZ67tpDL3nW636fSsdd6h1reR5UKG4NDq3jdXkp2gcs9zDqibaQztK",
  "key29": "2bvoExBtHSvdNVp7bPTJBNw3VerGW8LybaqdcfNxfJcn63siCgwm26PkrCykYNXTBdwsYwxx6cfr4fEee8RkL3rx",
  "key30": "2nPxSLTEx4KhZ4R5yKxMeKnQzn4ATnDyiYfDKb4hbcnN2hx99YeUP5B4qphupjhoe8sbXpe5Rgp2vj7Rij153cdJ",
  "key31": "3xbYYCfUX1YKnu8LtHo1Db7psL54c7mYZESZZdqSvYbrcgdVy11Jk3egxuHoC8vWRdrTwxeUzwDsbffLDby9Phs4",
  "key32": "5TZi4fdmLJGu2GXva9wnwcCQ3vxnFgAGjUqxt5CQB1S5WQvxGqzC3QQJLP7yKeT2uUUNADGzG1JRntR1XSohjY9c",
  "key33": "54RtLDkrRq7vavLSSPr6o41UY85fH4WPyHvWBdHrj49GYyz3q3LBF5gkpeXgVnizCyak3yT5gFLkFiRvKBYHeTSk",
  "key34": "2HLxzVjusLuHR4WMhdBc1yVLUsNFz9xNztR4Wn4ctMBsGZ2QduVTpFNdVdUrC6S93FUtgbe9gbPozJKPNVhA4tJL",
  "key35": "5uYuv7TjkxvjmN6JS5ngAN8EmaRBCvFFoxBXtp57y3NhZfV6wvoebCi5HU6MiTDHSqzP6ujtV7yoa43MwyogR2iL",
  "key36": "1y92gErMT3SNvr4CLrJaUmaatz1szro6AkcnbxLCjapZGnUQkx2PvkyLusfYfhytxufSLCtpzyndiUVgContXhT",
  "key37": "3YTABEDLo6eiFFo9tJ8ZjwBaSEoVFwwhw2djWm2kY9rLfJ9ybaXtC8e49gnDzcgBpELrUZdN37gJc3RhgBG4XQRh",
  "key38": "2rnV8jw3z6Qp4viUPdtHj6M6GoktGifzJKrA8zCCuwHbzkmvxfhae4b4WTmkJ6JFYefvdwPX5g7fBT1WHA57dXTU"
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
