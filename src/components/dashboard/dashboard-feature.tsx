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
    "5UyuGX6PVyqR8SG5hzgYccUCx8CNXVJqYkVKPDzsrqZNEzYSMsRe8YKw8kxQkPKAR3xuKjKoeT8FnGxFTxf4wjDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dmAvmTS6DUCAGKBN3VR7nQ5WSkDvSgwKRuY5orMtK1fJNpWSeDJPrb4bvLw7XehctBiZ8UopLWG7umNVcjhHUQV",
  "key1": "2CmgmioDKMboptmzoLtezhmP2c2wv6wADMjhmDvYrcftX9Fm4ai7RufaJyiehYypDsyfQ12jEfr5MC52uitSfTnM",
  "key2": "3hVqrvCEJQt7LJEJbyfMcWL1UzuzXskTu91zwj5nyJgh2iZ6jbVe19daNnfeyuC7K9r8Vq1Zr2xLqCxpMAA7dhEh",
  "key3": "daR6qPQi6wAHdKt84eKfKXeWvBZa4nuxjrrwT5yAwK3mcdxWfgkiakEFTR4VGfiehNuFxHAc9TfHi6wL56daBDF",
  "key4": "4mNzLmze6WDK3tX8FdXDziRtsn3eNjgFA9bxFoDpxsqPZVgiTQTS24VXq4z51VHPAGrRkT6KKrHv29L5GPotbYvc",
  "key5": "s7YACjUWnmPPAsZy7qMGy9CXdKmRA1tDm6714VhdYF9FCyvf6wDk1uihzrAbXTHNAwuko1XhJTBqFrWjqSac8Pe",
  "key6": "66Jk4brmDuk2NVHib57zibUbtPATTSNTAhstVJsgiPQDKPwKYrURDLXC5Czr7UEjcVp38PsEm57cXca2zjLHdbPX",
  "key7": "2PnVNWkZMxCE8H6qjSsTJNddFt1F6XBfnJDhmiuJ1gYSZKGaS3e1k7vvfxDjBwWPJQta13c2dxYkUYsHBfVGjotC",
  "key8": "25V49nVz9fU3VyU36XeSqBSXHaoMYuC6BSWyXemGqQ2KoQPpSgCjKk5A3c1JTWBMiRN7j71MKNmjC4rNCUTXdpRK",
  "key9": "2ky22NGJspifiZk9KPugUGMXHMUSuCQrs5wY95HB48XxBsEr3ZMyYNG4VB9ioozf6BC5M49ku7dW9snUD9nntrex",
  "key10": "AiYWdaEZ5t1WWcNtYuTagXMwBEQMHEVbrim9h5DAjUKaPBDqMDWSc2mF57FcaaDd83h137a4uDRBCQzZhtYY1DX",
  "key11": "2LhYJCp9kMzYD6kFivkCFZD6NyXCoDMfCDpSByvq6yWqxZfqHxF23f9UU3zJEVc1aFWwiEQHBGqfyoTqLbAEz4DE",
  "key12": "47YZ6maMWDVc1D8Lkewyi4nXxZP2YBTjEVQMGTGYg9B7Ms6bBPycERXacymeVVMHAqjo3s7uGgfPTMvPuASXdyK1",
  "key13": "3juJC4aBHZAJvxBZRZpGvgNab7Ya2yTej3E4ttwcHCJPSBZovc9vgJWqzeGyynRviWF9EyHvtZb8K4w1EZXDpF7F",
  "key14": "5moQegf4pZJFrz7yrFYnTuN9DaDgBcVnUMPmuWZy8YZVVsxs1gA6yWhjZ7MeQM7QTn8iXtuL3E7b9swVBHEx117j",
  "key15": "569jgWkswKvEDr3YFXBj1bmRWuprRWNYrU4zZ4Xi8uk23KDXbs5Q2ZDxay6PLMToXD2NKJa7ReA5frnzo8VxcMTn",
  "key16": "ygnCKP3tY7ihtD149cVpT7qprQH4EXQhv2mHNEKnNAzTestxtbuMJrKDbeWND5Lkh7FSg2dMuzpowpYZBtvhnj2",
  "key17": "2Qr9xvf2HpTugdaRhQUVg5DGP8QRcFKD4Y591b4HZmvZR8YnDKoDPReAGgohZtFbMnNNMFfibCzFnQ6oFj2CVzkx",
  "key18": "3ZaC5U2rV7xp2bFfamCLjToCimXTzokDnvr1D3bfUwhTJa4gAnikgSw1dMP2kjzkZfDw1eiqPCNskPeBJyZYvYFy",
  "key19": "2ENvVUmYemi2MsWv39exEsTF8w43wW6M6skdcgkFyi5Hez4C6T1hJDAvtvggSUSCfh3MQzZvq1yaW8bRjwmAGGUm",
  "key20": "4cbQp9KhUS1Y8ds1TReYBfSN9G3RWaaBG2oWSx83zrN2yrLfgki5UMusV88apAsVNUhXr1U7wYhNGtAZUic8UhDC",
  "key21": "3FjBTqwN7FK4hSKqRowrzWeXnT5xuJAtH21HBraLXjGk57xQ5wNpiWgt6DZTWFVkJc9ksr4S2Bw8PmLi2oRrCebm",
  "key22": "3SaW8st6gC2gqZ3EN8kCsCpkn2zQpDP1mqzpftMvUUUSKxgQUThLUC4pBEhUhK6ppdvY196rMKussAYvsgW7doNp",
  "key23": "4rBZ3KNAKq3HKMzAqM1hiJgc4viBztyuWjvQBUD6V3EZYkqis19HU2KGfnZkGM6FSDqjW4TzWqtHx93Ed32Sz5b6",
  "key24": "5QfX8MbNtnNCy5h9YmsKemTM3MGsEnLyH68G72ufADXCedU15d3WC9uAdHnxcZKKbVvc9W4w8S3ZeHrYRSq6dydB",
  "key25": "64BHF2Tuh9shSxbUpNCJ312VXSBP2ZU9rfX6F9adCXKp5rYtxZ3AdSLqsm3eXXN1j2SsqHnAuj8v2Gzk7mnvSjNa",
  "key26": "2nVAwX8ExG6sRi2RLP9mnk949boE2gCtSbeqmYkxcXaNEZDq4iPSZL5cHUrwCVQZgfjGjV3C8yXEWUzNQ16ZHwUV"
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
