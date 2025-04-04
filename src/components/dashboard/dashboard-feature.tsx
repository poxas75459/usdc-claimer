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
    "umGmhAUi56LFqmSry63V7Z2fo6BmyU55XDCxPCgT63fCMbBjZ4wv2mc1DpibNH8uTqVWS4TJ7KP1xwwn6psJvLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5QTVhKEzmdgZfQJbkrPQKTGkjLA4hVZJY7SERtKVfw5GMjEgjoDwLYMtoGUH94eMHj84Pix4sbBCzBxcoa9UAp",
  "key1": "5dncE7TMYophDr3MarnK56RTRcsya6p5oVqcQCr6DgbP7BKR4jJQtyu4sBKxjj3kcNqza9CeA1JnCzPrv3UVS6QL",
  "key2": "2856sS174GJ6vZpCCuuf1VdqCHiwRa6RTmyJ8UtUbQEiHNqJpSzjH28j9zjrcUzCVdpNeRhvM2peFLxwjBnQ9MTx",
  "key3": "2UmdCfRAoCGVF2YB4qoshpsucvBL7f4bAZG7Qdv1sk5wGkDzGorbB9u1tV7EnMqj6zhnJRcPwocJJM3DiZC7yN3h",
  "key4": "2bJNVD9EUxen32sgdcTjqi4eu8MHjAnKZKLRWxFr23u76fv58GUJh55G4J1kWJmZXwQnZrero6BJLdqjdU5huvV3",
  "key5": "4PEGP6EeoTC2KXzvKBaJgoRv7FDMc1xHK8u4RR2T6Ktdk3cZLe7zzAdyCr6juJAN4k5s4VFV8hbRiw4v2XvipVf",
  "key6": "412EDFMCEDVXAfdaoeTTH4WgcAumbVq3f9GzjXUK6mZscFiG2pGcnsUVirCJLe3G2FUtm8gE65HWxaZocqnhiYhn",
  "key7": "54BsQwgnUt8UBfTtGTBc1PPskHv7mY3KS7F5o4YV54BCnwHBex8xM6WDk4xfVgaPMPxeP4MLWeQodDwXgGwaEys",
  "key8": "28nVM4fhSmT5X2VVK9xgzZMWGLSMMgnE9y28B4k7JdBH6afu6T4h8BXFjPjnikEyaXh7N8tuVaNvERjJ5qEn2iVG",
  "key9": "3vrPm8zJ6AqBRQ5zepTrYrYtyfbdWgA27jXkTUWExgVRBap3BQMwUxZR2XF2vhgAcXciHKszjuNEySwNGsVmJYXz",
  "key10": "4bQzpNZhSUM5ucF5jrTEUdHSJuAbTTDZEY5hKnSXDRRPuwAbtg2n47A3rifpHia5mmYrCxrfcyJFVHsboDaE97bE",
  "key11": "CETVC91z1vEXGSDWR75wEMgGLNwFjjPaVdEdgWCd1sJeJkxV9wgZZGKmWmdKKveUnvphnnyFk8CUEEMV93eewmJ",
  "key12": "3fy7NPzEHFZo4YVELJCb6dcRYZYJTLJLuoYuKm6e5y5jJ77JuZ7mVCPhRzmPmM48JKgLMJsNkgHvxJutSoUqMseU",
  "key13": "2NrbccVQhJuAWHYeJqnafW2gfcN1BD7DUNMSf5ubNPwEFBdsYDakCg4fHrHUYpVymb2ta19tCaZ8XXkSjmKQeRe1",
  "key14": "mUVywEV4Uu535N6fz95Feo1dtgp2Wuy13zfBXsxpYDAmqxA1YS5mvncGQtvxyjSAbpCckUyQvQ5d6aUiFDucfdE",
  "key15": "61bfwwCXhJakWiAAu2j9aJJU8D6ueLrDCaLWAiWQrZpihhmUxMjk3TQjDg4uUbvMRwBtLx112oWvrBmnjgGkvGYV",
  "key16": "2pziiXBU4nWKY31NWkhSCHWKYm7QXTbB8Sv9s7UqtR54fuBXMSus4QZvrrHkUwQhMkyQ3qFuX6mbfyuhQycAzR2D",
  "key17": "4gUcoxrKy85eChRCF1SMneMSRL7oBnJzqkSvYWDghm8XU9GxJznmbhMuMrj23UQ8NGvtdMeUjj678FW91BT7KAFP",
  "key18": "4sd1mCuiU7wYxaF9NBxAMM4dxq6WYBnxDjo9yM2zTFeZCevfkT3xvojxtXG8pAYCWEfMW2mSc1gqrk6e4azHoLTi",
  "key19": "2gK3bBFJsYGYwcTCoR6F55oNjhhkgovFYESPkmn4aQq1at7EoJtUvv8LhMekDLJzjbcAfGqdxaXujgVHefmiuRDc",
  "key20": "5LycX3mxvo9xmdMmJfUxwm7RTy4K39kQmc1FmvqcPdgPE7382PzhsjxuAKLNNnEA1DxsMbimnX1w58VpdWgexcEy",
  "key21": "4j694XbH3cqTC1iCWb7Xuz5nWZkQwz3ZGMFY3H67c8NMtytDZDVE2ic38TiS7zzaWkLWm5xS1y6cbU1dp84YDQuG",
  "key22": "2p9GygmriCokeWuQfgeqA9F5S64veJdZCafzCe8iW83upUq5EMEfaNDK3fZDaBDxNUpsHkMRJHkaTqQoe4kpEszk",
  "key23": "5qztLvGs3PUbVq9Jy8DVVj5cWneVBiWRKN8u5oE4HjrqWH1ibSmHkJsDt1UUYMqQZstioTKR81aZtehpZ4y4dHNd",
  "key24": "2LZxs98zqgi8ibaqcxYRyYHd5DKR3UVVmzNqgmUcTE857M4RAaV61FM5AWVYh7zAXQcMSPdC3zm1F2Pm8Cw1cFYw",
  "key25": "E6QFpE6VTFGKRhDXDriRqaojwBSpimEHCLNJ5NpYecYXdU1i7Mu4kwjVPbPzn6GZgtqz2aHmYSQ8Qh2wQXP6zJj",
  "key26": "4QSVcMDnMEXj6mHpvHd4wNfzAq3KSZg5bzk1KyxyBuR7zMkpCvnste4DWbRe9jGV3rMcZ39FM5heJNpK8MKLq8j9"
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
