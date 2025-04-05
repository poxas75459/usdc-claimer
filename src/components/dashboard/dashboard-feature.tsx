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
    "39gyqbKa9N2APTV2bVvZVyMQdt936GugLu87eTxNVxL5d6Zz88MeCiH9nHnEUyJaaxyPJPcnPNC6GCLAhbL74o6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mBxjM4yFXd8FNXvrfLr2KBmAZ13te5JvrRjtxUmc3p72pm3ZQU2SfTBP7A9zLW5Er3oGnSR2ovhMPKRzhXg2KQv",
  "key1": "3N5mnszppmgKPqZYu1bCkE3i6b5Jd8NQeBJKFvK219QZAspUcosyTW3dCPTCf2zKj7dAqbWeo8YARXdMmViCdmSN",
  "key2": "puLUJow7HFhqD2t8gGesZXvXiZPFnVGg2thGoeHGo3FaRja9cmHiKMVbAJN2oN472Af6WpqngsgsvzRjvxjZnfY",
  "key3": "FaFyJe4vaFRRFU5MwzKBCLDhtGmcFvp4zm1gUhJwfyx3C1o2TrX7GgGeR4eGKjUSUZoBGo2s6ggK9SkJdv9xakU",
  "key4": "3vEpL135Rwub2ayTc1Sqm96aMG968yBp93aLtLGpqG8MwoPJBwcsf1cEB5q8oRiMGdLevDqLyoy2kz4TFGwpfCHZ",
  "key5": "4fCkjyDceTJYzGtBJK8C8PukFJqgmFe1NdfmJHUQ5iybcfb2FnqNvVrWzy1Chvpm97g8vgD9yLhMouFupUEUiCkx",
  "key6": "WUqEdvpd6PusPxmX2L45t3KaFyewAZtgfSkevMZJNtzLeouBivKxNks3m65FBoXnKaKjYrFXRiFLCaBnSHmXLPB",
  "key7": "3rVEeY5EqUF7YNkNiVbG9xCodg4QQh87ZDg1rcpzJFfBXt7XLAzbjARtVshNTAmHmDFyj2YitDphNYQxiTgtaqja",
  "key8": "x9K5uk9AN3AHFFpDC1kA1xpjtS8aHQief7u7iQAZwNQNTreaVmDrztSeQqwXR4nrAjobL4TrH2XBygMGd85ZZor",
  "key9": "5zRYNUVicZ3NvaHGZe7ynC2bSksbNSfDEfpzo9Pbbz7JYuzdT9ZpQwWJG6Aokc8YKyjEH61e2zH1xkA5gk9LWVNa",
  "key10": "eNzFUR1Evt3s15B62bh71ki9x4gb9NZGcUAZbrSundVgn3SXtHeD6kDJRtcK4NyfgSn795vmnkhWX7dQSKAf4vp",
  "key11": "3djUAFNS5c9fVgFLAaQkXLADq1yBYqPfsgnxC1cCQ8FzgCz6MRWYXFRx49q7wCbHc682sC718WRQDFK8kBVjGquS",
  "key12": "4G6AWup1yVUphwtRzWZ5Ps1NHNAdYB54mi1dQtXEpoaS3f3ecsH1gRTdZGrT71qyvMF9SHmLJ5zFECJiVb87Ernb",
  "key13": "croorsLNDhuCHg4wGxps5ZYAGFJZiXyffF1Zag5HrJUbvc9DWRz4bKHEjE4cEdVYNw9gWSW4XEhg428j2ECXa9M",
  "key14": "JjqusEbUPivNE2ywdDx8otYCSfwVFMLXCzc6zBuf8r3yuyeQxdmh6L2h8kaZyLrX8Dagk4ApjUDFwxBY9FsShqw",
  "key15": "2VqgTEpBM1cDigBb4QTPxSYVNhr5ErVu8jKZSWj9ZgtfhD1dSzcxEFsgzWNWnPRJm7D6DnFN67j6E6aSe1Wxkgn9",
  "key16": "3qjzpoUfU9MghgMH1hGdjVP6qPLiyBtBqxe6hCBKpPTvdQsvBqog889kR6TiP2C2nNrJEesSC1pRzKKpuRn1ey3S",
  "key17": "4gLiASmkZBXbLSShNi8m2CzYbbZ5bYvy3sedtwpbK7UJGZsPXF5cUrgQ47UwWDKWW5sYD1vLE22BB7ihXvvwgzxw",
  "key18": "4waLkXFrjJvBLw4gWZBBZ3kejQDz48BvymCRUNhqox2dLJxEkqg4NwoUnuLyLtEiPAksmNsuRbzETR1zb8zui6kD",
  "key19": "5v3m3xb6dQo2EUvqLLhgQDb5awTU5L9JR6b4BBKxeqM5XPGGorFMLve3HKphYN9E8tSdKJvhn3VBna8KVqQqSkXA",
  "key20": "3A8j6E43VuSSKxUDDbE7BemduMaeYHhc18F6K7yfr8HW2Bs41s2WZG4cJQ5KCbJPeyGEj65kDPuy9rXhxsuyRRWv",
  "key21": "2nEnEr3mtgY7Kx6oUJpr6wbgf2yqDpkzT6iu6Vw14aC2y2JJArnH4kN6ia2YoDDjoKKJpQdSNQdeFg76RjkrRYTt",
  "key22": "2zV6sfXKMyqwiLYGJHPEewzU7gXS3fypuAA9UnSGkoHiRBNMxeZAz94UVgPLveaKaWsL6WVe82PXJuUnbNPJMDVz",
  "key23": "5L3yKmS9JHsxMDEL3ZEgTPMk6BWqWj4EZqSipVTtNL2HGH6sBJy1yoQVpXNE7vwTwBjULgn7N5amAfR1x6saB2ge",
  "key24": "g9gGvCrsqunH84HWMQMR8gh4SCayVQ5hjdNGpNU8RHjF4eutXRoRSGdUL7LBXTptjqKWwFrKJcQZ8z2tDykQKNW",
  "key25": "ubaTETzUCzkYxMFdQJ9chMiTwYoL2bi7XbobkMzcgcagETMLKD5cLjUzhe1nzU2YaGZzCV46GnvbkpqhMMSf7NH",
  "key26": "2iV9SXDC7m22H2cE2d9nWF9EKzf27ErBDyxZm9XZLYCyp46PtZhZMRAYqkTjgokxczvXRpWjK1BVDugCRrVzXYEW",
  "key27": "3wRX37Wb5gjH6qMTQS16FR1jsT4goyGaAoAZkubwtHdvjU2qwyyjjEMfBRjBtEZ6ZBz8Nw8BmsdpTqLpFYu7fD1H",
  "key28": "35s6tyuhcyFvXrZz2r5K25Do4ETaXnoD12iUrkyweRd7zeWh441kESc2bxRafBB9sBmH1s7LDkmCBBofHubt3KJu",
  "key29": "5dvtCqoD4xy6vzh7E1frhXr44iifgiqin1yMXCStssQ4QDBPjYDBjZsTxeHWVZ6bwHF9WmqFDjXmYFE7Aj1EqstR",
  "key30": "5wgCncaeA2V8VE5QooYd9mMyW1MFjy8YbJLmMgBByJcZk9TMfyiUu51PuG8sySBXC7V53oV8ibc25LnoZ8DPXKQk",
  "key31": "5Cp6YNxiLbzPxzZGC4HjDVib51ctx3eSLQUiK8G434WqXRy2ZW8oQwnGk6qBfgHUbumR4YvqtGvyLsCFdpDcZVM4",
  "key32": "5x4bRHBta6nyPaannfcyAg1ZVinSpTjoBUcnpeC3z8J82Nb4EMohox8kMvZwG6Lxy6kKCG6yh7XrCL1c5YL2dRFi"
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
