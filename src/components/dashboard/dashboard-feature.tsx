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
    "5Kx46g172RnTMwEESogceJHa3vdB8VnFG3PWbhJP2nWZTd9ZTBUDybMdBd2cSoFbF5krwSEPoRYyZvJLbqTANGns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G4txBrJRiLs1gMMW6yBiFTDxoEQxkyZ6BXnSGxCBzaeq4cKNUuKq4WmJu7DsRHmZEyZyGEvp5jFmToYq8atruTB",
  "key1": "5NENHZhycuEBJ885eiLgcrHdUco59Er7xyGVhC9nVAfGRaA6ZDS5yYZJGTvL2nvSZMTEPksPh8FrT13NL6KhmNdc",
  "key2": "3KgERK8CBSTxaF2BD17NtSERG3FngAsPRPqXBVH9wMjhvha6Vor6JX1qGpZY6Sn8gWdSWKvd2oqhivaNzW3kR1e4",
  "key3": "3pgsQinsHZMfEdqzc7QmecAYaGWRtjFx11GC8Am2PBk3BjESoWAxad79mLpNWw2p9u1zb6A76tcCTPt8kteAGkZ7",
  "key4": "3jNWwGAaD9sLNWj5Pt2yBWmynGrrAdEQzehaE4hyDcWiYW4MDMEXzgvtG6WewSmReZZN6N66PWX4nTZ7P9S9PAC2",
  "key5": "4HAKLp4mZCnAeDwH1TSuXt6Gd1NAFHjfS2sN2vAG8XwszmpqvtRaaw582ZTcHeydKzwRoGiDojcHxZwSqzPcieWJ",
  "key6": "3b6CrskNLMRKU7oT2BiiigDkURTAdfSvdkioVpLxgT3xngM5wRk3UF7CkdpPQKVvpSj31TrjzRoM8bbjGYxvnx4V",
  "key7": "53vrM3eBYwvxwzZZuWQq31RWpriCywR9Dg7s4FFV2hLnQn8ZxihU6WxzLypnih64shGSSC9rYsX8u42jMQBUxBfT",
  "key8": "66vLw28Jydu6LY1do4LVkdFXCJuwBSLDT9sa2iENquEj29NoGFH1xQYjYNPqXzLzT6jgBYnsfhYCvpe2j5djQcqh",
  "key9": "PdhdVhQ79wD2g333PnFyg1czqbc9KEuMppNdGr12kgnVBcp6qeCvoYMf1kBJms57uSF13XCq8m1Rd3ci72D7rMm",
  "key10": "4QeCMcF5w5gz7Buhpj9yr3sYdiy9tmkygY9miEKTV3AjtnkCMKNd6muhQGixTuVj2EsdqYc1LNSaxdG2KXF1cvca",
  "key11": "2UvYXLGUm5xDtqen3xUTywFdos1Cg3eMyQeUHg8SEV8XYhZpvjB8kL1dxL4iTSthL4Gmz9Ak6RLJ8bhVh6C7uZAg",
  "key12": "635ntB1FdBptLzRT9htyP5nAiGJ9pbxNdfCWdrPwEpBzQ4RMibdCbzpJF2ikg4WD7a6ggSSiwMAW8AU9txQcHLWT",
  "key13": "4V1CkxXra3EuWyqmNQKetrPtMPPd2yeqL5XWRJobAp1pD5HrM5pAmnqPWxnVtFC8RaiqQJzRsUNuFtfimWGgwNnm",
  "key14": "FgAJYFDc3RzCfMMtPiRtw8Ey4gptqGgmJvoZm7PYFkt2uSihY9Ce4mutJuq4yiqypSty4jKWQqZQGsWdPdjdscX",
  "key15": "3D8B6hCgfow4H3JkcTv4fDxCEmeQFqn14YKRhfHyq2jQkLFdysgMcA8MpMZvxCvag4umvg16yQzKL8AVBdwEFCsc",
  "key16": "tX18zrAzEvizsYYyC2AMA7u7R42UnY5ufH7Wh8ETbK35g5aJ821zEmeN3VxFogdqB146opKjMgcDXhAf7QY9SSN",
  "key17": "5FLFfrFkj6nsP8jaDFKxVgNiE7dTzTNQXkHRxsWH4GabApTNHS2NGGjHPFjTF51qJEFfytiKKp1buBqqMzEbuufc",
  "key18": "4vG8uYt8FdaGPTseMUL9y3ZjfwkT44W5HxxMTZZu7mzdGinLj9t8ixTyc3P9VibVpB2vDvrxjZD539uDU9YgZuU4",
  "key19": "2iLGmyt1Rn7qfW9qdagnt2v2dDmBEW3PD3D7Fy14w72NjdrCTDh3Mfo9LmZv6rheps4BgcAJuzoXTPehr6MCj92M",
  "key20": "3GpxVpwLpZNSx7uPK2oNMV6Gdw5hQrGjBcnJqtHeB8aEw7Vz57rUa51Zcpx9S3VLDfTChyffx2sy2vejU5bxPfrM",
  "key21": "3GfgbD2qqbCUVaBa8Y41s31UYN2aZsimPTsSQM7EAdyAXB4rekSsPh5GUoRqog5jabvKV1t4MQvUGQb5PYvC1xmq",
  "key22": "4ZT6uMuRJ8LmEYK6JhdxLwznANdNsBF782kEmg6b3TzXtFQBVE9KL4SQ6jpS2N4pNfi8xBR9uLVWBv9cTnhjC4Ka",
  "key23": "2sqnh3UENfAzynWmj81xVEf71tV8Ko8C35VxPj7Vf4k5MPLDbesvfRjkf63jaKHh6uuesnLG1mn3RmaNDLAoTWj",
  "key24": "2U9fvvtXMcuLPjChT4CydttcXyZMGaR7AH29ro95oZR4pAyng1odRBz1rznL75jjN4BDmssexkDRRYPHdFZVsagV",
  "key25": "41DLGstw4vga9jRhMG9RzXCCDn7EdWU3KkpKsCK4SJy63xtUJr2X8CgK3Ljw9ZofWnrbiYZ6FkCyancxL7swsyXU",
  "key26": "5fW7dhUNVKhJsFKeNhgH4DWttD7dpg7sqDxfPZ8s2YtTSnJ4W439PZBSraiSWJUiQhV8AvFKyKZfFVgpdSc7NPvN",
  "key27": "3ToiaSGpKJMMBWQFzb1raC7suSBDMUvcHkoSFdvUg7Ln5Pex4WqwPqBxcvSNmKL6priytDauaQxRH4eeWHi8QdnH",
  "key28": "2tX7yW67VyjfFaDCm6s17QmUDoUB8G1o1yGgnp9j3fFEAfzijr3DLQypsJsdyhiUMMHMgzDzDcCjX9bSyJz6gbV1",
  "key29": "5ttMqAqWyNXTmSt3YJbH8bMavyddoxAc1xwjDkWcdiqjA6S6tp9Gi6QTgLVCFMt1FM2mtyZ6q8Us5fRF1xm51EPn",
  "key30": "5xtvkR1P2f5KEhceKr4JP3PhXxPvyJiAZ6YeF9tXvsCqHdRXejQrMP82JyA5jQ8yGbdWDxqAx1hmYHdw2Etrezgn"
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
