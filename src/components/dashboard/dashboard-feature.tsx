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
    "4rHsbfi7KCYfL8EV5ys8drWfPU7mGSF51oiAiVGmKf4KcgdQS1bvBdzWYA37e5zBRannMTahNzC81jVpacoGvCDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T4uTtVxxXMETiPMbq6ekmDP2yNwRorQm3h3TXh9STC9ZduYwfTbNzrtx8dj86Gxqys2wzs51xc9WEPvTD5hS7Ay",
  "key1": "2hct4WsQXeDKTcMfCMryxcmaBK4t356fWijXbWmxeiTqznbSQALseSrYZJM41xsPXqFw9QzSf9fJT6XMYJD9jZhi",
  "key2": "36BxTVw1Gi8beRV3U4t5NsHGBjZtFkjdCRRTgqVjSrVSm2Sh1U61B9SzoiitQPGvs7C4Zy76EaxUXtGjBw25SaBh",
  "key3": "51jfRJYFLAsD5afB52dYgTw3xpd9FmDsbqVwR3VePBpoeu1YoDQQSTaDLSoBojj76JSEpdrHMe1YHurQ8Hw7WCwd",
  "key4": "qXzbaLps62DPKfzCJrHvpL7eed6XN9wnpxYBh2tZ4mEMFbTXN5dezLT2UGakePXh2t1NqK8CnEMUNc61UGvVWd5",
  "key5": "4kRFmLfv7whwCjX1qYg4hikbuSb6YUyfDTaZsV45XCwcWWGQSEf35TMr8YaSrCPta6spEQHxxEvxGG6dHjagWde5",
  "key6": "45DSRoaKnH5PSi3ktqxJ3KNkZmY1Pnx6McGSiuBRkJrhqmnRB1rDdoZ939Qcvb6oocPBoKyoC5c3iU9epvn5gVA4",
  "key7": "22Yw8LaqfgamG8Hb14zf257xbrVsPkbgAWUk9hK8FtrdmEbeYVieGQn7NzbT5nP8RQ9vJDb1mcbnAAJgfJ27QmQZ",
  "key8": "2t48d5h1ppGvGHe6vnpUt6LdwFjMyCSQDvdE28i7eFt3VXkCUhQNWyXqkTLMiVajv7ZeGBYTnRfvabkE4EuNfiJj",
  "key9": "2dTS1B2fYLgNJMBZPn6Fh5xHeTbAG5xTLdN1FWn5apiUbhjJzzmhxHZMoXXdm6wHPU5EL8XA6AvQ4qJWDiLQnV7U",
  "key10": "R9eb3JBjnfisyVAwjGi15EHEzB6fuWBMXuk6BS7Nvt8kuPY1A7TdopbCWgntR3vyM52DomSXstkLeRd6jMvey9Y",
  "key11": "3LHMc9MgaTiDXSLo8MjHqtDVLowW7zp7N9sSTPxeFoQXrwBKdPxQFw61b7ZwS4FzrfjiMotDe28WkFB32BAEDUMb",
  "key12": "4RHWRugYCayesdZtvpJNcimZktF2hJaahNX3tPUbnzUAj9J2qJMxEdEMkbNpNA64iLmxbPDDRX9AK9xr2ihhNFYw",
  "key13": "5QUHeN7QJSbBFu4YrYJThDfxKJNaSSoBwCrZJrjqib18AjDTcqeBzvC2gbYtFetE6eiiyMHxevDrjH2WFv7FRGmK",
  "key14": "fggjQ9c7Mb6Skb9jtSiHVe9MhqyydN8ZpAh8uQw1v1fnoMSYfeWj2LMKNEdnZaf16EuQ3w2FV76RSJcXNVscYCk",
  "key15": "2wT6mxrtAmdEALEEzgTgCAtZQrFLwPk4nzXeywueGBuSYT8ytSsQLJJ3pcf1x9indvNzhhNLuy48PHyEGYLx1ATd",
  "key16": "2eGvoSMwFnFLvzUWdjjnBB3dkWnKHJi3KP6D3zifFdzBp3x3HssKtRj7LGQYXkk8qwfgwevGDWt3qoyb7J7R6cuG",
  "key17": "35yWQKGzBjYyzUGX2TSiJ9QoqnRYZJvpY75rG1PWEHTWkrXWu4jqGCVE9UCyhBv6THyH2pDkDgZ1JS4uS2NQUJeg",
  "key18": "AQVMR1gphrRjYjkaX5VX5CXaWxuVfXuGGSyXGGQSqpiyqCu9aEYfjWUTEjSR5QgPqmmBFHd8EaAk6UvLdBjDkTj",
  "key19": "5G8yLXcTK8smQdifzDRRZ8fZgnJwwyhwgoKDCtDEeE714qs6cb6gGemzkf2cQqxJLp7JY2t8pLsqAzEdhX38zeH7",
  "key20": "51TGb2tE4Vrp5ixJ2wN4SqRwuKPpwYLiqHFAD26rH8izzgfLjyZKexFuqJ6uePHgQzg6P7ztoA63Z6F3U7qE4vz7",
  "key21": "3C9VJUbvbf7qBaifV4ucg8PVXNeXFXmRb8mgi8gKeeycjRsu9SUHmVuTYWZrNqjYFjCCfjHe8MmtssdtBcerQZAN",
  "key22": "jz5YDxuCKzK77Cfz1Jza98T4jpxiR8WZVaE4KDP6UioqDbiwNX5MnZXL3f2ZaSPXnciGk67e3ns657AGMHn5MhH",
  "key23": "2JYnUCoqTgTgGhZ4wF3dSnbQbB7RsjrhqxWF9XviT1oua2Y6UBZer3VDmHhkB8bdnujrCFEJusjiTMuiegQVXTFc",
  "key24": "36rwYrinWpDtVN5zD8r7jEbCuGR8y5iQZtbjnraTQkH1dRTw2hYLbZLTCvf14FXpLyFxiNX491AfEqXZHAmgowp7",
  "key25": "2RGKtfqQiMSQ4A8vSQFYYrwMCDHhFRwFCEXJKiW2gkmBHZMFgYzgz84FjZW9PxL6fGAM7MLsyAGWG6bo8gmuCsKn",
  "key26": "2qW6ofwSBvEVAGJRoC7XyqKJwCVUf1AD82FSP3ncY678ArbEbu7VqLR42Zi94AeN5RYPL1Sp62Q6JcNXdQVJ48uF",
  "key27": "5zVJGzQ3Jtmx7FWWCMVPa8CCasTtGdWbUfSKFpuBjq5ozmajbfg3FDyVYy3NJNVKRsgMeUzK28NnNEBeBjawCWN6",
  "key28": "2AUzmYyEQQatYUfbjBixECEHsYojkaPJ51rQCicpyVM5R7UrT8sTvvZgCnYoHoDAJ9JffSFpU3ta8XLDvJRiYLwb",
  "key29": "48YtMcCnd25b5dhajtxH4M16yWZPMaE3cUY8avkqj4nSB3iNHQLqdVqVJj74YVts8N35euuXhfkv3DfsTWUiUPtW",
  "key30": "52NAePQ4byhrA6c3TUHsp4M9R8rMKMY4v3Mv8vnDQJ8rpGspaitbfr4zSd62YWVKSLvr3XCBJZ3o2np6kQqktdC6",
  "key31": "319x4UAWkv12wwSEPm5A5ujDJrCGjSTdXHkSvGUWUcBhMFpVuwWwnXALyoQfF7qf5uyqBof86bS5bpByLRjbpjLn",
  "key32": "4G1RF8EGE2GPX7svQ8tzbwMP5mg8C3VKpq5Es1hy2KH9UoBeerqxuabSMAHQKyMNvzPvJHTGoytYwgFVKx8QR7XV",
  "key33": "4YCHY9Yf6ZmadLyu3rAHbt89bvCXvYEuAmamgdZgVjh7s8dFjKx9GitWuFtkn3q6PrrwNd16habTPWpci335weaX"
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
