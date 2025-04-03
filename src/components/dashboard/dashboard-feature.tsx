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
    "3D7DfnTk7PwMZim8gimdWCScMDPmEgUGWjw1UGDhJ3tKWRxMktzeJW1CugtvbRLHgHTPD9kwVYR39rWqTRKDtd1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPHA5wKxYZEgsKvqaRKYL8bwXCQs1ANYsXGvD4ESRHnbVbSMf5jfFx32DRABVKf3t2rFd73CiPanRHr3STKmnHH",
  "key1": "VaM2ykABYj5KdmJ3VtTsUoBjWR6qDVwnbNknBxU4yvmtsVeMLVkbD3BfUcXxVDBqAb1M6tr7BBVmtFJACSgA1BV",
  "key2": "3MbtYeagsjnsQYZ9ifjGHYdFdUopDn1Em9b6Suerq4tUfBUpQnJKkvTdsv7edydoZCqvLt2SeupwqF1gY3ptQx9i",
  "key3": "42XdTqoea4Eo2aQF7im5pFy9fxcpHphEA4Xc52mUxnWG71Zny57NZu6PZjRhipZ4UB6zxhZFRjTFuwaZHDhRT3Bx",
  "key4": "2hGBXpZ5wgEXSSsf3FTNegCgJtMFcdFWo1CqAE2Dua5TwUbyJrmM5gMEieduVAwGeK38d2kciegFfQu27jF2rC7X",
  "key5": "qFzTewTcVkjWW3v5AquXwCWLfMNiU9skrS3n6TazoEDHo4XmDcneBZcvFgYEJmzNBDYBwff9WBycNMMuxJMXhGP",
  "key6": "3C2YeCuG3qSHbVza2GmotVx5k7PMdwxCjvW6wf3oU7Wq2hPa1NWwBZ5KKQsAUnBvivExm3GG6kwpZ69UqJKQ27YL",
  "key7": "2q8RvsuNVhdZhbZxYv5arGtnAbEFFVPBvpRGtABTSvGY1875fcjZvz9L3N3r44iQRwakD8rzWJtQRDadU1tNME2p",
  "key8": "3aF3rN7sUrWBeQHnbYDqXPUmoUm8ZpYtV8hWEAPi23TXFyGm1PZ3Sqp8cj1vTu6HVCEYdyiPw8Rx6Ld5sLkZqKzs",
  "key9": "2icodpFB5gf2C4qoQ6HCXzCGSEJM95MvoBU6UQg1MxxD8zEpCWvBuLsWnvKA9WkfEqs7TPj28YRKhB6bArWaAZPH",
  "key10": "Scx8bT8QdxWhBZyfnBGUtvgMTFyg3skuQBogGu9xwVf2NNkaGy8CTHAvhqoyU3GeEDgQN316nDkw7aMEzxVYwbB",
  "key11": "SvddL2ggQE2wQc1Pd499Wq85iEgQJz3T1Rj42i4qf6XeX36AhFM1DZgvCgbDvxxPtRkhRc8TzfehJhyk9HkkC1V",
  "key12": "2h59rRV35c6yyUWQY4QUtQF8VifwBpMtyiip7kzDDZnEYMFYxPe8YmriJWToqWQGDdTEaZcCNt4RwAiNamViofaj",
  "key13": "2Rj2ZJiAXXXkL4JL4m1zYRDrd7aj5B8EMFsiJq237rG99abbKs7C583Q9TvUpQxwNoRqmL8vYVhmeWWajscsJFQ2",
  "key14": "3CY33rYcfJ2ub2n8B6FFJRKsftBsbyHHDWBon9Gbe3WQTznpDNV2r4cdcCZuv84mGUJe5S82oxzsW2uSxNK18HkW",
  "key15": "7dSr44ruLKnTuxcncTKBfcoXJzgpyzWz3L9irgt5pjigowWmdX4Fn6SAAtnW8jbd1uN1ZzsGLCPM22oBtqzgdqE",
  "key16": "Vcq1WP5KQdHtwK8URzsHLD6S7KpPhyEikMKc3LFjN1V8L5TZk1BrqfpWdDSAB12VwPLvBjxAKfsyhD7EbcWgeiJ",
  "key17": "31C4gFQ9kV4NFyq5QDbkG2XTKUw7NB7heJaFBL32M6wvqRL4D5SBSvLXYQ1mpbWyprr8WbwX5zphS6MMtS5RqFHx",
  "key18": "38zokuJrQQ7JZX1HB8wDX2J9mroo6CwU5Qb43HzMy7Whe24Qg4oyPGN3ZeU2yV67VieuQ8Qwp2XZVXDigfmt4bGL",
  "key19": "65rxLQVZhy9uaEwZtLrwPNpCzs1FjBguX2HEVsy5sF3tExFnVxh5JnP5oPp8HyHDE8zWiYkjxABfF358iUkTC9jk",
  "key20": "5ToToookQcsrWSN4iapZCdx1Sjh7e7bJhZxEfpobcKxujwc4mJQA8mX5juBcAm3z4Vd1gq87mrC8tM4X4hizaCkQ",
  "key21": "36r6dqcEVhkE2SayLdKLs2Qevf9PV198QeF3P4xCAtWBPWCrVWGrWrmjNu4ixyEiM6YbZByeRqofShshb5Qsf8KQ",
  "key22": "2wjmDjteo2HzoUgQASySbREfx344KFhiWo3h1RUKvTwipsrSyoQtUQt3TiS7S6jxvQfJ9ExLLwxV4G7U2T25t4LB",
  "key23": "2qQNwaDcN9Q2YTU9tZwM7pvqdjgXuD9T95D1URk7qMxmNofLbQsak96QfyUPS13tesT4iXrng11atsAoQ8BMVMJ6",
  "key24": "4DRA8CRwzF38r25wUP59CrjWSsR4axZAWcxLGf22aKTqE8xrc7F17conWuPngnXJfftpwDpkcZF5Fsz9K8B8kvxz",
  "key25": "24DcmYhDtYbUawiVXqdgcRw29BHwxsyMa6CDdpisVoYHXb4sDKmR11MZAk5vVFqpdKq8abxPVcgcSSqWqVzK4wbw",
  "key26": "3G5eEQv4kQp9hRBHRuJCrbhDEHWWBK1Jy6hJEFYJUrvNoeJLjXoyEe2opwhd3f6H5TaABgNaegJVbH1PnNQ6xMqf",
  "key27": "3FdurMtyzJidAwmw72tswMiDrZXMPoZPhQgcdSik1PWGS1yCuajnecEyyuoTScSk1UhSjNzqEgYPcJxpLruTsMGW",
  "key28": "5WvdmWt23ySQjBrTLrdKYvoC91JyBLjy6UaV58D3wFfYNvDtgpoqM33S4LQtC7SrbyXvraXTrXkD9qcV1CCkWz12",
  "key29": "AyPhMSJvTEH68gWuEZMYzSeoHQHhWVGKYCtumr4WQK7KoyjpHWSRd8hYzTKM9Le56MyCaZcHimdveadhJZ5wUEz",
  "key30": "5bYzN8DW58cdJjUbZEehvrxpwjBvck7waCfJWzkrHCdSmY1h3nUhPXw5X2tBwnYcKp98kfS7SNnsixTndhUUJJBM",
  "key31": "f9KxBNRC5A5dxhcEbFP9hcio9ysHqpyK1McxWL3ez5pEYQJRvzPfHBbR3oy99uZyTNKGc1f8YVJupxc6YitegWM",
  "key32": "2RnzhJW8ZrpjQkUq25QFvq2zGtabXvEZ5QG3yRagBFWo5hrUY8rTBkh8FWFyUcPkpsQaXn1ZetY6UoLGq5SL9svb",
  "key33": "2hQVQZtqtsP9m8FX6gzxiZnD1k6P54an7Mq4yASjF4qaGSAvMQcsnkHPJns9G5HZt8Q7z3Y3mgvfzJtRdRe8Sq7n",
  "key34": "37XJAnKbPWsvv3p29KTFs5dw7S1FDSvJvuVnQjgTor9P3uDeL8VnfJTcDV56EUri4VC5T3uxp7fyx75B3qkwvVXh",
  "key35": "4o6tpZwHzQ7BhhoqdwQ2Q8vVNv5hBwauJQ7X7DBhT5fjSyZrYkZ94a7pJVMTV8qr3jqJy4wH1ZaVxVQ8z3inkMje",
  "key36": "351vHih3VyfTLeBoJ4ua82TsaqfpdgvE2AmSmkGHK18pPaRUZbDWc9pwNSkvKJd7gaFZg37ktoA9oH3S2ofmsdHg"
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
