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
    "5BG5sbZMdQsxmtJKXrryGyBkJGHm29XWEMuW7Q2X31mwT9abGMKgrB1C51YZBWnqDQyXFzrfaBubX4BqMwy9Cbnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b41kyMjXNubN2G43mjUxT4hhQ8RyodB8TpJ3VMLKkARFvibwZ9FMfcB9oFBHjYLY9CnP3QWmsp1gy2HHGTELCUw",
  "key1": "2UFCMtgMCUD1aGZs7oMV7tcmGMhfhU9ueqP5yaz83mWcw2KvnPhmFrBrDv93DYahRkRC9JkX7gDgezR5UdGBXHxx",
  "key2": "4UtrjVNP4gGwG9Q4FYYW6zcQksTjJcUogmgK4XU3WGZWzqN22GkpGxdGgQwrxrMiTvycLMvJfU28LuKji8eoZS9t",
  "key3": "2eZ17tRVf9J6F5MpdQwx2LTuumZuoDn2aeYpkLgEtpzhvatpqxFMtgHn7tNS8oZ4jQCJG4F1arstT6JBDaKRkUu7",
  "key4": "4NgZJKJbyzJZ6mqfsuXbaBRu4aBq7Xuen58T9LC6EYQuBDfQbmxJGxZy7RLSRvrzxYNVoXRgVoiWXV1fpCqGqpP7",
  "key5": "3a9NFXQaLT8nu33ruf2FEVi6XLsbZAdsLVXiueK6uzGGZBKZTF7Lc2o8EHJXcfEZsoV7eCDq2rsxNEbCfC4M4WZS",
  "key6": "4gs2gP2kRAjAbnhUZaYcDQ3o45rgGtVuRW35ymQK834aNQJbf6kkMUYCvPGaViM9kYcuvmmY13y9ieWjg6WaXFw6",
  "key7": "5Y4MYs1AD11KfDwZKE5Td15QSeGAab6Tz3UKrYmvKqwsgJVhmqyQbqhaWvKJzjoHpv6QBNNCVEXKpqP5LLkCc5Dw",
  "key8": "5mfLatNLhgHk3sEMt7CzL1Tht1TASVKA9j652fpH6PTMFo75LT8mEQV1eHLMJAeeqyAZSVmegsE3Fo4UiZULwcHr",
  "key9": "5JHJpKCUgki3AMwfszfpixzfFgsAxkEV9sSinjSysEAH79hhrik6Vj1Koa2gsw1dXymConi9TBcaiHriSK56sccq",
  "key10": "wME4WXBgiuadXiugh3mX1oxEaCNCabzHVBf2ewjLwgmPUp5LUeTgrZtuUnDL2T3tKR151tbmP2XR1zQevQ5bkQ7",
  "key11": "2YfLRJqUt9bbZMXDttfoCGbe5kD8ViParCKd6yFP3oYY3JLJmnBDfkyhB1oEF55DMCdrGXUb8NTPbZTZevviKcJ7",
  "key12": "2VZzBaCarPp4EYnh6NLAqYS2y7DREojqxMcCGrsjz29wBDdKpmd8rLb8s6cJvsewHQsQd6qkRh9WQ1N6WQmKv6vN",
  "key13": "YoqGPYBGvUPGTvFStY5jDbLP7wiqMJkDbadLUq6hpefZEKDjVa1Ftw8nQxcyEgvJsKmHZ4y5z27ZX47J2RMuGXT",
  "key14": "4hdM3yk8STb98pbtJ2cQfenYaNDQLiqozUVeyYouq31mhdyhQQcXAonPaeDNmredWj11fazfTTWT2KaitsHATipP",
  "key15": "62iopezJHNafiGbbsA5vVxVGqtFwceG56vbphLHbDgfRdcY1Akbgtpjpm8cAw9HXzVaCzrW65m5RpD1NyQmU4fbb",
  "key16": "3JAbg9v6bMbyiZzaYeFr4XBK84jB7qcJsy1swN1AmQjqkws95C4VJ2jHhd2jY7aJuxQddphW74yWnMy6wD8oyenu",
  "key17": "GEiFKq36aEwDrRjQ4113PuBsp9ybGrG58bZ22wTcFLLwBGd65kKkonqwy5RBG6aXWzp8ND1QU4CmpXrD2NQYLQm",
  "key18": "iVUCZCuKjs6pe9Gby9C4sJZE2Gh6QZzCLncF9yr51AbVVkSDbrrvkJwQPHd5LTjVH27W2kwbHEFhVkspiVruKbv",
  "key19": "5a3fbcV4Eg3oq3uoyjQzhDxpHFmvriks9cjwxEwa3LzmJyz3F29nFJyjXN2g3CfRsXR4wQt728kDdVqLKpReUr9t",
  "key20": "5ZTpS7F7kCW8VKrkL98gQWjVmoRH8JFzkzPUnRPZLLtAxvv7qrQrWAtdkUCx3KQx5Kx8ZA3dNimD6mq3wSFQtnDM",
  "key21": "33c2ciZxxqF8jVdqymY4FJwqYkbLksHdgv5TJL78CaDR2V1hARGdn29xrSxAy6QdsoQncsTzmPk6Cbh8QyCvqN3x",
  "key22": "4o6d17WT83joMNemS3B4r2ornUaWAbcF4HQcwLyV8CxDQo8gbkvpvWkYoqZkvmtHg1CGUMu5HXTzivHAGX8DxRcW",
  "key23": "3voUjLFdNwyFBsv4rwAJjCWLGHNo5pvHsqPSP41THCwwpKwjr61x6z7XLtz1KiaXxzMc9KBDUQ2rJ82YEwji8tCA",
  "key24": "S7tLDxBpigcAftVa1dmKYXBAZAML18oqg882AKQGngsKFmqciEun5hvrJtEAbi4coLxoGFGUNQDY8CwpT99tJWZ",
  "key25": "5E6pCbacEzPec2y5EajWCdHR9E4EU9s76BRAXh9jeexKSaMX4MBwZKybuGTEEVFycgcQVHyvurFLBLYpxKnfentQ",
  "key26": "J6cm47qhbfJZ8sUVUdg123MmEx4BfwiBQ5LyfGMhZWthq26oAmuKYiwPY8rEPMAggDoN1NaRoxbVPXTBy7ZF5Jk",
  "key27": "3dBxQ9U4dFmdStzqPPZAn4GP4JRDCeVeQhYYaBsBnMSrA97LtujPgWHPZGbgr9UEYVrXvkUVSpTuVBgGbLcWXewh",
  "key28": "87KocUdENUwqwfjdU6A1V4VHtTA1AHRvjVfXjZ7wDLpjuuxa23iwHGtFVPgUh6A5qEefM14Hvm6JRcqmC78QSvq"
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
