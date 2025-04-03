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
    "2SbCKwbrr8Qi91hZ2VxyBycv2BgykNpRvk7uvB1F7BkpAz6eBh5VAJdcmUXVGtAWRDx1r6A9boEPsSbChPjLUenv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WyrUtLc1Zp4kjetRRKL5VZ5pjGLbHYhvtrfpkdmvQ7kgA7Shm3zgg9dUq43TDoVKLBkQPVJyRd1Z5YFLBb5QyoE",
  "key1": "2YybgvTgMXudvCGDByiBsRQ9EdjcBgrg4fFFmGrfJ8B3Zx325g6Kbucwnhsorg32zxiQCM4osMf36tP1Xkr63A9W",
  "key2": "dih4XUytB7EMUStvYLsKNrHatWUeK6HSc9vfUcMM1A4qaqqtjfMGYHirt8974HMC3Wm1uspgEGJ977LVLGashHG",
  "key3": "GbNTRx9MpuQAxG3LfRF6AR9hcNHcGwsGRTCxKP5MomUtNBemfJLE9uuvozEuqrNTh6DcHMPLhQ294uBRKz6q6ZU",
  "key4": "41NDRit2KH5s4LzEQcg7DT9B12gRty2Y37BDWgBXAfr8kHTZTa92mGqPN4nSXD3hz4cbsr76mf3rjibcziMd7WJB",
  "key5": "4G7JEwQWBZBNKLDjhNPvWure1tWBgrBMvEJgknvL6huri7fo4XxUtkKg2YoZ1fureQZe51GCyKkjcExLZXTvHxCL",
  "key6": "4gafZ1Fhmz3fG8SGFZje6fySKTNiRUqvaihgzgt3R5ZPAPie3UzrFTvTn7UhwYwBYNrnB1k9GVsGaAjcLgPieJZz",
  "key7": "Fh3wuT6EKGnwDvRVDnoHr8Ly8T2HfHPy6scZ3YRYLXsaV4hVRMDsUhou6qcqFDenNvKTDnJSdXZxwbfRMcN7cLU",
  "key8": "23DM6K1UoPVZ2gRbb1vkA517S8MEnA3oNycANXwTDmznqg93VQJpJ4rEpE75YKcrfiXgcgw3f5zDLv52nJAnRuux",
  "key9": "5Fbp1TrM9ZyoWtnhK9bg3A7EbNmKdgzHZyBZdQRGCUCcrkVzBdS3PhxVnUmB2N5TZpSjRqY234PcP2jZdZfC8ztS",
  "key10": "5dhWSdBm8WgHwSh7AKrfxo6UPfsT4GJBCxQsqhLSp7jmABWwtK8rQhNbJmkWaPUU9RPCqGXMmxSdptq2bYWvafwh",
  "key11": "5wUVCQA7MVHEuoa6dFBNZRNJFqX32cM2z7ukEWgddkNr5G8ayqYm5AHkkThjLkeYKRT3kwhFa772sw2wceQpik1Y",
  "key12": "2if1JfRYbQwyjdffLWNZUELKV9gDAvh2jP1LRnMEKdGFXjq9UoZs9JU1jt5WzfiBneyxAFDgcLd452LL6xZo3Yz1",
  "key13": "2JDagCdVJpuh7ovQ1QmsiEx2ZxZxgpRzFqQqkZRpuGq99BHPmr1YLLXgrer9e6uKG1ZpAU3EZmpGCkaj6YG7ayTJ",
  "key14": "2ebDapnt4LEhiUyqQCvDfxe6FZKMeDtx8rb9nTmNQ2WBmNmm7UfvtE5PW6u7YfYpEkUroAoZnYv94ZoTip23Jvrr",
  "key15": "5LfuVJLvVfwEF6wZDa7X6Gg3H6KJKDwzEfQLYsdkUvuHba6YNQhbw5V9KUfvTZBt2tu71smQ6xn5pTM6qBBC4upo",
  "key16": "4gC9HdbzAZKKDVUZjTLt6rDF87zfo6fn4tycHUfiof3YXyKepws6mYnE8bJhDR2KJ5K48SrJGT3pahe1nHj8rXnW",
  "key17": "RNG4FugkifcptgKvoeMqGdBcW9rQMGhqvtm6kNxxcHyY9CgiG2DvZxvmwwMkWUqfAYHxeKqRoA2hYd4qk3MFkjV",
  "key18": "2KtJzUWrFfQpou7bdCCHPjC6FZAuFcmFYmNCsnNtuLZXu2Tkpfe6sfnbQjcYatncPThFDNsiJfeij7rMRHdNdBNb",
  "key19": "4DqXKetUkQuxNnUJeFTcN5azjX5z9X2CVRzNoTt1cQMdZBvFmqf78Appstt9LPhUzzwxB5g6tuSEymseHV92AZeV",
  "key20": "5qQwgevYLCGEgZ5vobUw52gjK9a3iGK2cf6EU2jCyP5CYzH8BZDCRRpFyMyymDpSY6EE9vJBL3BNz8GHa84gb5Bx",
  "key21": "4HG3V5Fb7bS3QBNfqKWaR8mVGhE2cY7f71XcfNtjLdSNH9L3YLKKTyZ1jjaipiYT45ZUeXEUp9uFuBUBPtg75snG",
  "key22": "2Ux4rKBNhUN8Vup57qbo3GwQmN2s3aK9uHVaqXyR5yg9EXVjwK16aHaZEhqkbZTkDPgtHxKXKTyk2776bs96Gv3s",
  "key23": "xZTDjtoG3wokKtuq7yi7Qv2QfFGE2irnHnTCH2XFoEnDLZjTx2Ti858AC7Fv8nCSNhRk7fhZJGAdDLzxxLZuqfE",
  "key24": "2KEPksK94Mb2bwifzC5aCnSgmJGe4765esAZpfstojjXbrEkSDzKzJ4zWfJAaTvDwuArjQSTwzV6pJThTFfDe6dZ",
  "key25": "4jSjQF8WVU2ieHyf9iRkpDKohRnBLBkHyt8qdS7A9jSCqBAfSkwDKEoJ4HygYhb1YaLb87rwfzfUu2RCUjkZ5fE8",
  "key26": "2XzUXxQchNFFrEWCXSv6jdDomyV2GXhukgPoo2Sgi8aR9iHx1mMvMeQ6yD59cSRG9dqsE4eJZPGNgkrDk6wijnPa",
  "key27": "61TXtahBVYgvqrjNWSitzkYZkAu65aGLfqQ7j7fRLbYiQnTt36Ni79zAiQ4joAKvrtZDUuF5wkzEZmr9HKe1WgzX",
  "key28": "2c1s9FptDjTiuB5nGDc5hCMjxamA7kSyoAs6rW9Uk7oR1kvNiDbY48dCukJoMB8mcsrh2oqTHarDn7B3jZDCSF7n",
  "key29": "48vijYGaCbhErf3G3xVySgHHY35m1baHVBFeDCZ8JVoFYSdtaDnKPa6Y1gzncpLkUaeXYgoSAUb93P2BndHNBHoR",
  "key30": "7qCJBpxsQbiWMJSeUqLKa2iPA2u9AYEsuKfYiZU9ufUXRXGnc84X5DxEKpASf7erqNuzwhP8igudvXDZM7U4Jio",
  "key31": "4d3pB4xdEYiTGp8Z5d5A9c2ZgfdcWQP8ZM4DMky5XMD9Mwyj9wRgdhCU8PftpvNE4dpJMjxUZjocn62VtEC4j6nx",
  "key32": "3tSTVjLmthW7Tkcvfpm4guauVoJ5zdJHAAynYV9AT4BRK1kShqyemGtECUUbG1JhBBhvC1AznADUEnobMYLdUYWy",
  "key33": "jNawVFfF4pRyt6gNEt5Rg9iJw2J2Fsca76Hzx9NGeMdPKPhC3BuRp5Ze5MjRcq5Nr7zxkAZZ82h3MvGFRxYmWiX",
  "key34": "62YGEsmmfKQAMKmhxASf3RZnHdZqnLhSUyEHLgrVhk41s4k4cS6WXFpMHDV4idwf7Y2wLUr3QMTLSiuPQnT5ujms",
  "key35": "2ChjvYN5GLM6U4pUqhdTS4BEgmkhmMSfDsZvpxKWN4UdKvSQgquPqWr5TXDTNaYTieyCM2STuQAz8YD5sACoVztT",
  "key36": "4KCzgqKL2EaRtnc7GkYGQGK4UfDugbtqDmBAGNHX6V7QTbGuozjrF9bHDtne8BEAzP8vPZS9ccHrJakixjkuJX51",
  "key37": "2Mc8aSQ2gFB92EZbcwaEm8Gk2QMokTXguHBRn1nSp52FvtdxxgYpwE7a9uCKxT4qaAGQnVpEZhsVpy1fU5q61eDd"
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
