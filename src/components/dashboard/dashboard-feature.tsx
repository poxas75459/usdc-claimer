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
    "64VfZynuDJJrUzm9q7z4c6Bwot4XxaMYLCEngNWLsDTZY1gRkkEfzgAMSAyoTrhPJCyCCh25xvxzmm7AkK9CfUoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37DoMben4unBB6NPcAcxEybLrqmW9wEwn3rUoE6xVUwzEfiWs25btLCBBTbHwpTrQAdjnwv5baPqjV6cYdkDxUew",
  "key1": "2P8x7UJq8Xz7heHbYD1W15VHgc3mhxeEEQDnkv9ANnoFUKaFKTW8Y1hbt5zvPfy1uehk9vSSSAHPnwuJh67TXn5Z",
  "key2": "5XpoJLo1D9xDAzJz7zeWYRZiBnQRGMLEgDPMSeRoG5XQGTSXqg67Bk2H62QUjgVdgZwjrqBcniSRMoxA237mmM3c",
  "key3": "2GLrxtr5KHLzKT6ZFgv3fM42PXYyJ8jGENmc81qkpUw8vcRVvtFkciRNC7mQ3aCdFKJee9EV6Zb9vMWJXwHomFDY",
  "key4": "5SYN7txs28LYKpbvdpAybU4y6eVo2biRJau9M2RNE1M8TrGFDwcr4fMCs45k8YrAHD8wLV9NAaqxfj73EEVrp7ti",
  "key5": "3Gf9r2ZZ3VBaes7eVmEc8UAGjKK9EXBpds8yhdJZ4s743LrwxQDKHijTQBq8nFWFokwvQvMFCi76J9GEbpi3oV2G",
  "key6": "7hpYVZm51nHkuJi5deiBb5oTCF2RLHtAa7AedbJ1xKP8aU9vWgZFNvTJzNfzPKXeFfBsUoPc1pM3RYYjXe5tn2s",
  "key7": "3TdpnE4xXzfZEqrzdFFK4JSV1SH8NtLCFy9gGLdgMREC8ztrXRbsev4gqzxH9mstQwUuc3NYjYRgnWvASdgWzYAv",
  "key8": "3VuZQLnwhfyuvfySEJiRU7KdA2fBQMpUf6NHPTS7kf9m4XG6cemQ3QaxjKTYStn65PMPurU6bV6CPkVoon4MVkyv",
  "key9": "22WewJqXJAAFBrhfdKaAzxoE1w1ja5jwanhdwWJANLbrPKKTPYo9MZmQCBditAiya8hjE4614xwAuPH7oSZSAnEf",
  "key10": "6ZNo8PeB5tcrvKbesSjKvsA9w2j8RDjM7eBb6YpDU5v9TfxbrwUorcSWxJFmjzWk1kAj5ZVfKp9UJy2VT7QRyzs",
  "key11": "4q7JfmCjV95fQFZwHH9Dtyq5Ee13tJCqp1z3CvCSLvwLCWCCSdMMRh2ST2d3yXaWr8NbwBMQeZPeAdqGDCuRSiVQ",
  "key12": "2kayT2dLLzyUZadnt3AEq5eFjzXQZNqzyTJWjdbdiLfoPLf9chocBBuPhAzXqgaaSzrUA9jRVUZbEQw6SX4qW79S",
  "key13": "UAy3q3YwBrJibHRUTQw1ft17qUNG3ASGhVbFAXeNcur2e6MwdAcQnUXr2VgHrw1mER5a3kyGuxtyED21v5gQDST",
  "key14": "2r2dtTLVBidjCiYMANTLHGF1AawHgUwrciVg7rht1uP8NBzR8YcRjUJDZuwoYz5zRD4c167wEeNavqrhmoFXskhy",
  "key15": "58kTWjLKGgSm6LsBZQhtsrjiQcTz3KRe3JyUqTWaQ5D6vLekuoUheLba5zztTDABoPGmYZ6nXuR226NuAPHEfzs4",
  "key16": "2NUFk6Fx7SGJUQnYefN2cGTrusMi6uoLRadidwL2NUveDr6nrwz5a1TS44G8osmJVAQnsF4US6Po5g4d83rDwGcg",
  "key17": "2rE3WoeEZ5gSnigbUGzcA6Nije8M6K4MsVCcCxmBEfdJJxi3DJtPUZwaW7HNCtnW2VPSfaRkjVM9XtQf9M1D7r2X",
  "key18": "fVTwXCCe8uXp22RpMpKjAqqQLp28ykETmEdwEcGCvmfaZxqeZPTXvSW5Ld84hmzsb3KRxdy86TLFz7FtjJbKL1S",
  "key19": "2oYp11ytLANQ3sGXB7p25MjD43bSKmaCnsLtXVRem3S1wJvSpGf4BTJ2hAspChadtkYCYwtb7S9iiNKhsxLiMJNw",
  "key20": "2F8LqBM85WTxmPnAzHaHAsBC12CuZQwKMEZ1e9rRVGFzBY41wP698qpiA52ahqCdiTjHC8VueY8vFdNXA7rma9Za",
  "key21": "5ap4Lg6dMYJpuTZxuFTUgNnYEo1SucBNTkvWAP88iF76efo7NTNjDHFJFDYSjewJhJrQJ6FtZ7Vi8UptUZFKi7tp",
  "key22": "3vJbTkvBbHZN8mFidE83aYC9gxLyEAfUXibx2q1SmAHi5QSZyUTaheQLNKvAmjCsKfewc935cgQYcpngmQi91SBt",
  "key23": "dWhRZT5UVqpnJhP4tNwCLuresBUam8TLfi9WqDgL9BZiBkoyCVqdvzxdg6RQDNaVo6oMRrA5tQcMess4Xfu1oWG",
  "key24": "56MqzXWToWfxWjovn5Uj6DqTERX1Bt6dKvkxmcHrh4a7MHHEPUH5vsCs2LUGrBDPk94MeCdNyYroMUdLdfvPfMEy",
  "key25": "3So4fZa1dwGBsEc3vJzCEU5ctr1HDujzVShowAFgFcGjEaFp9mKwzABDFemFJPRsqftLxVK83Kp8peJ2cKDGNeKe",
  "key26": "4CzrYPYEC7tB67y7RvJuvLxbz9miZjuG5rBFv1ctF2baVdJnCDXcaQSX4VDiABqwpLCVcpre1qhSKcsS7u51j3Uj",
  "key27": "2Aoj2mHhjqmbgYFUaBz6nJ44A7Ac6FYUa55T1kf3scWUerzyLQyB19co4qdvzrEYHnHKFQ6GgZW3MRuqRHJ4ksa1",
  "key28": "fFbULJmWaDDv1pa4FA59D4bbk5kkYh4KP8ekNQMQxgNSzdks2ZSMigTQJafBTa1YBnBwiapsutPj1ohU1gnxfZa"
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
