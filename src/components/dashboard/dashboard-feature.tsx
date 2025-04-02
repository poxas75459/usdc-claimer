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
    "eVtpVDmoWmfK3pwtzQuoBUDwrF6gedgLTfD3khorwSju63gpimutsuxStqeaespCRT14Y6fy1Hvvzj8gRptJobY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mbfb9GXRqtHLCnX1qZknUiKcj6jMmEtZ9gCLnu4sSSATJrNAS18AV7JKLGynAaKZ3GbKhnKQweL8irwubxmAiPP",
  "key1": "4minCge64iq1Y5WeFVNQrsip547v96sgZFT4npPSMRCR2YBm9caQdprQ3Smz47MYTf5wY7T6rTRTpxh7MFx5Kenr",
  "key2": "5SfL8X4WozJDqPVwjkcrMZoqV2BbRSbyeDV5oTGTmYxYBTmTnGFF6KGbvPUagRyhWmTFc1sEughSYo2rZKDHJSsE",
  "key3": "C7eLa1XYYa6o1K5xHNM64S4TEF8S8TxXFygdNp96S8Q8m4TAr9q9dCvFLth68QL3HwHpAgfTCDRQatC6Hd1fBVk",
  "key4": "3FAMxZJZvj3u8FQK2F95Ri2wcewqXdAVdbJkcEqfv1LAauNSdLRPyvFPLo796BXJmQ42SKSCpmrRqcEP596ph7An",
  "key5": "hFeYiH85xefMsa64NgCXBtehkXwnM2YYhKEE42SsNnGbksoYTfpBc7n5CYoxGNj8QQMaLTA1nr7v6oMLKHjAzGu",
  "key6": "5LGRXDibXdGiutrSJfkTaqbjuYYLSEKYKzBjt94SqHpwyruPnjiAaVc8rgCgdtjgi2MDsuFx7vwPhWBMavK9RSbY",
  "key7": "3HjqLRdoRn2WQa7xrA1NYQxGkmg3iUEXekoJjRhaGHE7uhma5tpv1gUqJHRXbECUgwASYbzPQu3ku3GJP6UpFeF6",
  "key8": "3VjfFTpvwE13xZAhd8kKbqjQfRFNR6USYSsG1dSwhc2SbyUAkeV7B7gMYBhfGN8dVLbFQwSni9VDAP2Lseoc8gua",
  "key9": "2X8Wzkv2XGEXi6bQVjwozTj6NE1jvfhXUkbRGas5HtmeksqphbBUG77bbZugxDNZxvvq7W1ix89BmomrvkJQS6tg",
  "key10": "64UKyjZMcFBz7QtT2gnAfr7akPvRyTZw4hLUCn5JYw5hQmMQCzwondnAtDtTh82CmF4i21h9phE73EStcCeDjRNf",
  "key11": "3enDAA6FhrVabwdGMZfgdU3Xz6VHeTr5e8mLPRVPZHS62ibfi9fnxp3r6qWaGoTXsgK4wAMgUdkfsEWuM3YdVS68",
  "key12": "5YTYwUsePmmaKpMgVdG2NB9dZeXaihWPzK2wgBsqsQRjQ193wq1L2oQvwFGGifc7UoufsGY8SdWbVsdcGM7Y5nQ6",
  "key13": "2QqU87tYTWFrotLJRCYZ3qBn6y2r8kacmVC9X92dusU2iuyog29Z2jRz6T2y3MvWaH2VyU9tVf4nwLcWGKYRBfRe",
  "key14": "53fVjAcvVUDzWXWSgEXMUqBvBomWcuoCgaKvNmArFq8caVjWWEBH6isyY9Fj2FgosG28W9fw3ZBguwXbKoSMKNSu",
  "key15": "4mC81VuBLtdzZ6a8dxpYq1czZyBKmWLtPGQUyq1xKNrcGWTGpXronWjoBsHJ1HwFTbY4YiAxz2X1kHM3jtLXifZ",
  "key16": "M7Xsr4nRphRCkDXttqwZpqaKUzjBp2AoBxU6981qQyGMTMqzFYAnbeSWtLouq42MU4LqBJrnxpUUK3CwLkNuCi5",
  "key17": "4RkkLtBfmpH6bfupBpxDDaPkHNu1hfYwFogm4oytkNo7eUiN2oEztfigWfdxbyFPeYFufTbJK3tLFejsRdwkyx64",
  "key18": "317tDRwSFKTHNAd1duuskcAPdw2wdnycwWrMxec5drHvvftB8KRL7MhiBmDryaK4jPwnjHp3HVz8TvZeDf8c1wvk",
  "key19": "zKkLjSQTtigf5zrGZEhBvvgeBYFTZdSXaiCsSfH9SEZXZWVpu7mHhh4FiHgJQ88cchBnAd9dnNtFPBqZg9midyC",
  "key20": "3iYAQZkXrUJp9EPH1odgYxyigSYPKAFmZd8KtVPPJoaCigzZebcvh1GM9u1MHnrq2aLM83VLzxFyzJ44KjDAKP2n",
  "key21": "61n8oX2GmgXSkTC2YCbCrkiXTjmpLmpcueTXaXg1QTt7hSEpK7PTpx2R4xz73AyVTFAZN9TAJy4brfwDRzLzdUGB",
  "key22": "2y5SkjKMPvBtpBGPKmZWUWr5WP7U6H5uyNNJE1QmwAGP4aS2ywtqvwpUibzH4YtnFVU9ZPkz13y5fsZGWTsZJpNi",
  "key23": "BCgbh5SSxVQkxYf7im2tR6opCiK5cdgGVjh4ytGAVCAyLxqDY5GjMSqoBWCYUAtRTiX2LeugK8jTW3MaeZrGzBh",
  "key24": "5Jy96S6zPd1WQesxHh7CVMrYaqsHFKepNmbMqCWZR4AAmBJmM4pBRFwJC634GwrA9FGmQg5QPEPXtfF2rwjL7VXT",
  "key25": "5CxEqT8oTGLJca1sEpP68AYEfndgxumD7kcu6kGQcePWQcxrNVjDdAEyR6ZE6Z2Lyro35ci7CcZVs3sKQCiQ9ahC",
  "key26": "DFhv3dhjzvSjH7VP8knQko4zd1L1QcNbCnSXrwEvmHCQ7YGN5K75ofVguEj8KFxaEat1jrTEQpd8XeR2hwTyX4d",
  "key27": "5pPk1APryM3VPzt2DfkcvJ7PzSdupVQ6YR7eSPZjTfWL3H7D12m9aQ9FDPLdUnH2vWLotPVZi6hh3PrjmzdzHDjr",
  "key28": "4J4c61YKgrnWa8j98tY8YtyhWASCJMz3CcDQs4uv4smksJRDHg1BEa9tkY6dmXWDV5Pd67RuhKgcxtG2LTBzw6N4",
  "key29": "m2FxXzmjiruDYPSyjvqkj7cy6JpXaBtiaw6qsaNRZK4s8wquxuassaFCanX44CUD54t8WiNJzHv3wWaAmKUnWLN",
  "key30": "33sbDmz7Ue756h6TtS2x3gu5Jnb5HDYU4bX3kaV3JzfhJr81YLaU2TVzXJXUHqWUP3ebvNY8cWcaARSCWuAsq6ws"
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
