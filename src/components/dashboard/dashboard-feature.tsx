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
    "g5Sv8PAvxGhsgim74BuUDztg7em8BFMqauwUGnrXEJ159Z2op46kME7Bd2U8bNn7jWfEu4RmthUNCDGCAe5mH7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41rACZ8NKDdFgUghpbJYBLtEwgEoT1fkeBi7k9eLfBDHo5PrrzcaJKBKgb4YBcJLn3LdiRe1nfSWyk8vt5KnrzZS",
  "key1": "3SyRy5j7D9tT4YpTvqYbogjdMkkSAXsE5y1EFWCtXEqN9XaFrR7z9961VHvyVECXFo2zk7Y5cmopZJmmeYZn6WpQ",
  "key2": "4UNx7jucbrvtWqFQ6sqSDman395xR1GAvUDNgEhP5FvxMUymEvnpiN3aw7yjci3GgKqdsi8D7ZpucV6CDU8LRArh",
  "key3": "3oM7XuJkrpRkzuUeTUNgyrnmXxaLbcQYVjVtBLdXjZZC99xggtexTUsEW7zxbjDZR2zaaxBVdJJhuqH28Vciscf3",
  "key4": "4UwVdEreu5P9gq2ULtJhJr4w8aN61uUHPfZUTqHxE8LZHPcH5qtMxxp2GMp7b9yncFScPD3zCKJdwY7Mi6HKh1jp",
  "key5": "3LakBJcXwKHxPrntLTjdKyn9cKNVGnYooNYdTfF7VdG7FMXSso3wUYH4wcVo1kGtmvSA5yKtpgQmVqEbmzGdjvAo",
  "key6": "4KTgJMQ67GUvcyWk4EjFRqTk44YyVGS1g4bh7P1duWZfH4FwLoNTafceNk6ykKfHupcX59FHMDfrLG5jc1qqgiwr",
  "key7": "53mKtQqtVMHwHxLnNW8RyUg6Bc6rowst4cr4rTkrQ36mp5jDRPAXjD8ey61wWRLBxwwBmYPN5DYHk8ZxEVWUXFFy",
  "key8": "5HHjro2m6aDsEPCHudaW7thhnJZ24sciYpJfSRNx7PE8uYLHfBHstiZb76tUiYLbiCcjiLLqKP7dbgAFUuD4gPvW",
  "key9": "3SFuhvfthixgtuUqCDap7P6vWQkZ7f2DTxD2e1TjDrRVyFgZkYYRfPzwHNH16vNvYRD4vGKG2FmqjkeKJpCzkXH6",
  "key10": "5A7jgPiV1L1345ogVxu4cscTAVkzruVrRDuq3HM6nGNymnWfPfyAff3ByPAUuLh2CBPV1cTLXXFCyxYLZXWP2Ssr",
  "key11": "4JfXVAuuFAmuoG3gBNfvFpYVaExYpt8wqH23aaksjeLL9cQw54xC6jr4SNtvW2ZWr8yQBK8PMsYzp1EmMYrpvohH",
  "key12": "4hJ3V8e8Payjjhbkx9jYy3RbosuNMD6oN223XS5hbY9gi2B3X5za7YtvsaA7WyfmvQj9sZo6g4kGqqhfwJrghJCi",
  "key13": "3ANXcg1yS4mUYmxjYvPBQcKZGcvUj2DPf6JrgMC3CZqyiADB7W7w6erkWH5TXV9fvDnaJzbKuQxc8YjYmJc1DMqq",
  "key14": "4w6yyJa6D6EKKhVGH6i9FWphcmCzrRnbq2BfuHv3WsHXSskWTfS55Tr1pU9NcLUr6CEKd8G5Zg9fSc6prNB8ZSrd",
  "key15": "2Z22GMo3ZCusK47xyUxwck77pJw79cgJHirF7Nq4m9hLvxoKkNoR3wMETuN7hutwutHPebJkH5mgJq3SMnHyoHQ4",
  "key16": "22An8xAf1B2MBNeq6kS8aac9sYvm81GJURrRn9Q5U26KoHso1FichdmtaMGJg8zV79qZhsuXGA2MCqwjsV3RGgco",
  "key17": "2p3WrxB3rNFE5qVGC5sYkkG77w3o2ChvZKczTnA3T6KF7Uja1uGoPExuXfsy52UVARnq1Rp9WCcUz5q5zKoCfitC",
  "key18": "oem7K9E48JeNabkSJ5yVXVFyvxSKBuse4NWgXWSbqRY4D65eK7N48Gn3hYzMQ58QfeCjq1NYRWPpfT1hyJgk6KA",
  "key19": "wdB3YYwpVB2RnQGTrgB8Z5xTJgpHc1cxrnLYg8XnUo6JRPssKqvMdVohomTtv6AuLhWiMxZP8LCmDD4GSuifKEm",
  "key20": "3tKNRtSF9A4TvVcRJdfh7k5FwyCnQyr4Fr6ziYpfTbPSFhe5ChtxGcGiMzVUVks7Mky9jS8mT9GRuhQi39jaNQSQ",
  "key21": "5y3hJzVTkoPy73ZpwqUfVxQ8ipx3KNbXqnwKWWak7Le3dLfWS5UbkbsSzYNiYUoyRZ1yUK3HeduLGEKSweZc4ocg",
  "key22": "Nsw4BV5VJXN5KwRnEmN6rGsBu4FyCMcQL4PJMD6o2PRBHZkG6XE9h7gVuX8M7mnynLxJUn3KwJCY2z8U1SMq5wj",
  "key23": "4dr6RQikr6nVyoPWCiP8E5FJTHb6yNEMXjTSQSSXU6rRsGtPvoMrY7Q78bWMSMKD9rnxMAwVuGb4JA3PYYqSK4Wy",
  "key24": "5sukN6pvCdmNN4n1VwnXykXLZ38QkScKajhMF7xxC3YZFsgTbkEGYZtXCdBgToFrhFodAfyGGNTJopYB7aHeuWeb",
  "key25": "hFDX4JmQKcM3ksrCBzSLWWY37XxvjMAaeLeCyoptEwmBAvDPK7GoZYiHqGwSivA5hxFLKH4SrK74H1yRyBZYFBm",
  "key26": "3dxhntyYMpfBwwsWA7rgT93BiDFaJHmkRQo9QQ8z8huCLNNiz9SgaAqdRPb4t6yZ64FSTSobhjcfz9Qtn3qhqyoc",
  "key27": "2QACec4zUGqYKMTvxHZcnXYXxoYgbARMGEaxye7dAsbuViff1DfUFshDoig1PvjyJmGVSfGcwNgaKbwmSyVkhGkk",
  "key28": "55iTzgq35tJQ7Harei6qPuKwMB3w1hfBzxDs5qMz6A1ufg7xh7tS3qyeJd7HnLTsMpYkEY4wJ3pEPAHPUG9bBMEe",
  "key29": "63U92W2zBKTtP2b3CaKLhPbauY23Wz5sH39x9G99KN426cMaYVqswsr6LinniH986cByrbZMQov5w2nbCVfDgvrZ",
  "key30": "2pLsmR31weM6pistbbNacBx8778QiM8P5KQEtMYu2YTmpXACjM3ZA3gDXBFhK3ZSkkdxEQ4e6spXrJEnUxnYEXzW",
  "key31": "4cBQp7mkuSs2MPSvvNz5XxrBh3VKpXEKDhjWCq2Kdo37T6QUQ7MggVohH7jhyrMns4b9WKiMG1x7RzPHws8LPstv",
  "key32": "3HC6Cg4F5PmANJtPwpapmpmRFDaritDiaLRyTBZLhwwUF6FM2SB1d28Xwc8ZtQfNdJrdAk4ePnfmv9D1f275tC3S",
  "key33": "3zDLpB3afQH2xYhEk6Rjs4XuYAN4LXEtKB8y277NsGTkcRxa7kQR5yPAZhL24dHVCfEx4x7GGGYBgpMy2eJibVCm",
  "key34": "43GndN95CdYCKWLJsYVPneBCk9W4xtZiBwmkUwoUdT37UMLJbuiu2s7TpwVwYNHeE4ocYG2jDrsgaeiuhs8t386C",
  "key35": "5Wph7btDtKdMuNNeyYSRLy1kVZ8fSGCdk4i4xBdietpf87iKi26PzEFtq5Bij2R5UuzgSL9fZMtFhWk58NfRMYDU",
  "key36": "NH871iMDfvREoMfhjC8rihLSxsyJfUAvJi6Z1SFWfnrCFZgxu1vSoW3jqBBMovVbVr5viRjuEPnkHzWDKsoqkKt"
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
