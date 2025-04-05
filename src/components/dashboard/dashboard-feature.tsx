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
    "39bAes6XgirqHk3qN8Uwvfiznj2cVTi2zrZbJTkomtyb5KhfCDCuzuvs4rBzYYuhQ2a9DAGrGrAu4gZrUZpdzZaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FYdAL1zFiAsFrcSiKeUBKpxTmeBqbqRRchaaV7VUwqVw7PWMHZL4tsa3AKwfQA5AUTunq37xWQMhgCvYBj29SJr",
  "key1": "5QpoYZwtqSG4YFGXnUQHjVytNiixHHtda4jiRbc6MQSyX7RixV1ZpVjLMBmZH3NUMMg3p1JhmCycugLmUCKiMjny",
  "key2": "2M3GtYe8wn4jupdtLzqtgQchUXYhiCZZ4xnRc9y9aRf5yXcWjq7CZtwbgVgYDpZWsmuu3Vjm34Ar7msEJpWWuAWn",
  "key3": "DfrT2qGB4dzzAW3HFE8SKUWgh7uaVhzwPB1PTUEWkGuKErEKpEQHhKFQRmcoEVtqcZ1gr71chCb7jBAUXqyZr2g",
  "key4": "3ojYKs34z4kDhPwiYiRFHgKTQrpgp9tKB81nQMTcrn2rGs24LX27RNavDLoYhirHdkhDzwxU2oKaCi3DQn97rGbT",
  "key5": "rf8TWcV8y9Mkuud4E8PUavmUoSSbJebLHZBk52zfGPb5Uv4hRUu5CSLza3bujCbS9WRdQUBETwfZy4DWe7ZWrKp",
  "key6": "2opvyxkSUy1qQK1q6wcjwNNke7YAHrgqUm1Xp5gGWSdXexYUSkiHkpWdtKNKtXh6qSp4wGBgD7VdN7W5S8UQdYXL",
  "key7": "2X2B73BVYp1hVrwDbXZMD1UVXCUEAPnwemDmzCi7vUwRWKgeb1LPGM7kj1YzwmTbq5CS7JHXedwnJFCWeNUPg3oq",
  "key8": "2sU8aCCqVscEZ7bvB7RtXSofvTgmmKmgn6yszc9F91M9qEimAygx7UdPzzSmvV6ykPJie6icpBqAxTJmVFW2SV2T",
  "key9": "2JH5LNawUAYGzRZmdm8guv1SnHk6b2W1Bg2fR3C9ghfKbMSTE3Qu57jxTUmJzWsCRENqeyhRUZXLFTGVvETPCBC4",
  "key10": "5fcx62g3URtmVqvFuSfXqtyVsazNiWFLM1T339cEnSR194jDsF24p3281xhXCE7KVybMN1KaJmJU7ttPHWKa1KDS",
  "key11": "2aE9K6Er3p9m2CrFPz8vLZ1wq9S2iSNDFKdZR4UfrzBxpPfY7BtW4yxLWpGKfmUke9Euus1ujiJ33dWC9FjKf62r",
  "key12": "4XaBfgQRzwGWFB3UdQgVGeacTVrRms2VNhBkRMStwQabukUEHqq1rKCpxr4SqJg9ANj3ZPTGbSSfJ4fdki966BTL",
  "key13": "2UdFGZWg7EeuhbA4MM4z2ZfFoaDwadsBFBe133Jcam3NZ2UjTqKohnmHqjceW5UkX7yjerWbwDK7bH5iPFZMSQVH",
  "key14": "no2jz73yU9v6MVysgevj1Wuz7tvPSJU5nHMBag6accyw6rHMKkc47Fa3mJWnhCt4HfiA6PGLGZ5py8D9bYsenaY",
  "key15": "VkiAewEMNTZeStMkmzNrZorKpAoSNeDZfgmJ6TAGKUZ6vQ8CxAK1fWmzALxsbqn9P25v8Q5eg9N2jeDzk4JqSVT",
  "key16": "471egovrwjepK9vjq16d1rRMgNcAJU3VM1mbwuSwCwsV3mQyPLwJP2xHp4gKZCMbWpMfnysACqh98WmJyF4bg2bZ",
  "key17": "44nt1a61o5ywAMuY3c8TxLGSVvZQyYpWsDHdgJY82HCYpEbz5ZekjFdFiPC1i9rUMXBMhvZTeT7AKHRjXvjz2GRU",
  "key18": "3pTAyV3Q1VejXCg4g4kBQprSm2Qkczh9qGrb98GyH9jontUN5mJHKrWSz6JvBhUWEE2aKtSA5UoxFn8KreYbRasb",
  "key19": "9LTGqEQgCaNWNoMVpLywWzEhpjisfmycxsUiWLwq3cqxNdePda9mfgscEbGMRZNyiMRhWoRzsj5SsdGkSjKkTe9",
  "key20": "3CoA7arwnsxc7LfFuStj2gEVAoLuNszaHTvXHMeoatzV6UZoKBEb9GByEEcJi4CWiWd63iCHPp9xsD7w5zrMgh2X",
  "key21": "4uxq5cSNgY4TaaWzUwHXMQpbY5jY579cEb7BA8JAk2PzQfmDZS8ZjzDuGksjE9c17KX1v439pQhMNdk4stjXBnLW",
  "key22": "2R13XcxEnidLcpg2iTV9kWaFwUKKBQ8CFApRo92tBVPBSSccm7JUrc9QNpVHomh6PD1SooM9WmDuecznjSX1AzJV",
  "key23": "4NkBSdEWk5tUGc5Y3DwNUzhqK6ajEVnCRzQ4NsyCTnxARYBeAuxAQvWvkwN1MantdipjU7jJiV1PEKtfvJkUqMH3",
  "key24": "5assZkSnjG3WtZEF5kqG6fpEep7NwgthJV8kdp16RTCqfLkaG3Lq1wHHuboUWTb8BXyvoZ9fzEhpdz8Eiwj5vNFE",
  "key25": "5S5dD92ScbDMak16EDEzZp3tDyNGtsPCaLnYsBbfZydg8VbCx2hP4PPWvVPSJHhHfbBhxJ6ZNyGxXka2kQoJrZNp",
  "key26": "4WXV1cJyChqER3HYXZCtgZsCykov67gHpEu3aYp9vNSx11LF2tYaTcBPQtQhUWQPFP8tMSPAJ9Ms9fXHkyNVRfE1",
  "key27": "5nFpUrCCCo5RLvqq7tgncnNoD3xpLipKYyprWU9R1ghHzTMZ5iVY3gswjjigagswZWLTeygG3KMe2zXr9AMBD5Y6",
  "key28": "4fEGKXH6fZ14RXSY8J1xnjE4T7J4j2kTXfs3Jh3kCSSuhn7n472qXWwdq2xvXszsvW52sdjEu9w9xiCSQkYa4qT9",
  "key29": "55ojGFiivBMy5sUBLVvP2hCjF9wSdVBbK7oyxYg48VN6txd3yHcnWTUcjwB2DQqnSTjEHWHTAKNg8H93aWvHQptF",
  "key30": "65H43LJ2Wg59aQRPpqxMRwSNsFBnV8n9fG5mMdW9c84RWRSZATqQAuwWAnNAqMdGb4LkjpwztWqPZXWJsA3dx4tq",
  "key31": "3RkbiErZsqDGyJL78effmfANy3GVcN7xdDHVGf83mVFpoJvc4B5QpaPPEpcoxK5hhv84VAgHQWTQPNj9qcr6vv2Z",
  "key32": "5qF2FZNHTzK5bJJAYYPXDmYVACHtN5FqtQD8zZ5wq9JJRX8jH1UDNyQY28mARpcgkVEGv7fEiQZxbTtGGUVZuEfN",
  "key33": "4sgYhrE58sMKkVeoQbGdCcyHpQq4jJGoP4uxhYQ6PKB3wavy15DVwutURkfPoNjWr2BjMDGNLEfhx1CsyukXKi8Q",
  "key34": "4QF8hTRuVNtMsbaEckAp5h4N82MorpJb4Vx7ND19SyfW5HDhkiqzrnboEWqt4Gk5b5kUxoopZU6JNWyhmuDcsKno",
  "key35": "2ADENcWGLe4NWVxHwr4BM68wc3frrUJkMZpwaBg2Z7sSj3mjHRg4DxYyBV4U2AMd9fTmCdY69nNbw8roS5x6yv1w",
  "key36": "4iq2fDT8dD2uVGgTr5Zh3nbwGpfyZyrdZYSKjoHPX5ZWCpp3Gg9nt7RPVeuv4ivP5V5SM3dozJD9srLWX2fqZeK3",
  "key37": "52ZahXdZNeKRK9cqvQBnne9bFVFVT8wNHRj2kNgkPL9xYVSgGeHY4gg9prpuJFLmtpCkoSvWxuwm36L7V6Mb9rX",
  "key38": "2XFz9fBJcRZ8u5UWvJSXDXSGFCGBP7y2FDboGg3Mxpg4rFQ8H6fgGwxnp1gNK1HigpWsFhd847CzPu1VaK5rr2Ar",
  "key39": "4hpVxYgVDnDGEAQViT9TxdXEL4q994Wmg15tT3EKtydaf4K9tYVdnJBi382opF1ZEgT6dR2jdpVfHovKiZSRRQP7",
  "key40": "63pTQevFdBqRmxZ96ySvxfB1sphMfA72mLUydF4HV75GkFkkBu5YUrzL15fMeV8R2HiM4r98mmWC9ddS5EvQZghe",
  "key41": "4AmUqyigQfi22EtXG1XDc6N98BsgQC6ht4QZE64St3HnJ69XoCTERBUpLYNJu68Av1u5r8mkeKKJEnPm8oxM1gor",
  "key42": "2ua4bqzWZeAbww6i4EYC8C9hzBJcvZgD9t5uCL4tALAseTTVe4K1qLAFso83MuWHqVzPGfrnfGcQBqCteqRM25wF",
  "key43": "2y1GJ5YVnz5f81XCktFM9B1oup4hfEdcWy5QWYYBmRiGHgcHmNnntms6EFNsGBTSzx7NTpWDvcLJgvksM2aWj2Cj"
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
