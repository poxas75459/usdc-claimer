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
    "92PKWqVUYvEZAZDnHR6gKkwWLt3UNSqH2LYmXARdgHK8J2Gz45GpciA4wRUqV3h9MBRSQbkyRUoCP3F7mzqUg66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oEz2yVeR8rLg2dnLMLGKFpGWdDeYzdJUBqJi3fgV73GfRXBhvYAZ23vChfdXQ3SyWCdGBaukT4nTUKs167XBDwV",
  "key1": "2sF3nLjVivw97yq6B53ru8ed5ZcfcZQxhNuVSyQx44BSgcrW17kQUCtTuUqaKE3uKTsrCVSkz65kBi46z7jC4g4t",
  "key2": "66GgLjX34xxhgENBVhnKbKfa8MP9QrfTE5QSup4mcAnXTzo5Hhn5y73qjzBUuvGz3En5s24cEc8wntF2RdrCEGKU",
  "key3": "nip99V5pKwfM7mix71otwLdX8qSQWQ3mLtGfTmHHf1Lwyab8sHvXSZU8q72Nf7w8RrqMSB7nBFn1PA4CxSRjLpK",
  "key4": "5BzBCBLy57EChv6a6GK4zXGJLjfM7USEPHiJvWeGcWcsPdCucyzdvKJmsSfBcVmb1ryEDQExPciYX2qD86bebVpv",
  "key5": "a7yU3YK4ZUzaZkK3BQmTgtbYXPJNWy5MHT7a3SU1B9CiV6gM3nDfX5tjanabdQoDxB4iNExPBTKfMtsxSfKDBYX",
  "key6": "3xbhnpcAEYLS2byUn3jFsHobJ4nnoGVMmpLp1LRp6JgLaeGa1mZNYTsbNQJbwLnEBrHfQcKbeWpFGGE99Lf1Jdty",
  "key7": "jnZ4Lg42MrBpxkCacCz3JYNUMaLyBbxS9ZtQagDt8ikD4Psn74XH5CGbbxzZDJ1rbtG1mYN4NHXJWGvT1BgVtyX",
  "key8": "4nUfM8JLLrrEfmhCw9w2hQ6fAz2A9uP13PXi1pE3h3hetJeDx35rPSe5Ht7fCNp3RZEYbTjkGfjLAZHAKXXe5Vjn",
  "key9": "2EqFsPrThoXb4pnzsZVu33syorbVkFDTtvUB8WMsZMJzGJjTADrx5MTTYqDpFwjKADXhVDB6SJeGRfL7EizU8YLE",
  "key10": "449Qj7V7snJjstheJD7WYX8XBaJHVP66AzWL3E6o5VhUd1e5jbDeJqyNVbZWMiSvfK6CNHoib6e1rnsqFQbHaS7r",
  "key11": "2K19SrbfKPvipTHs4hTwuhJ8YmSkVhhEdTNedDki6dXxctP5nrWqQTNw8TKr66WUUJp9N2ApjJGkhDa2Crc11sD3",
  "key12": "ASvnw3KmPrFyzEbFBUQXsV59dHMzctzxNdq61DAgVoR8L1dfqEMuXFecoEK8AAjBHbzt3s9zDMF2uHYyEmDAYnX",
  "key13": "2dhFK3ejZuuLLvKkk8hfYzVAGQjd1eZ1zAGqu7Q3TbSQFhUFRnFFKSeKSPnaey6YrTHh3mTJmW8rfKsRDbxjZEiG",
  "key14": "2nq2aAhBQu6dRoexEDshGuVvFhDVTzbNd4PnavSij1SoPHHytMTX9F5UkmgVKPmqx9KCAWrcG6bGLorUVjyAy6eT",
  "key15": "5n1TrPv3diomcYXG8Bz2n7hFZwQLXykSnqT7wMYL9AGikozVG2VoinEqb4BGTmejtD2rYakpBR3n6JTpbGkHijtw",
  "key16": "56u7jFVt89Q8VvGob4QQWwWDiS3P2Qn3iqMhXDB5cRGiwDuAz95N4EiAWgPFyoHnXBtbvaoLnPQXcALc9hymPeFV",
  "key17": "3Wnoc3C15D4DFJvVhewDejcAUPrTBtGRh9i3Xbvq4rxHcpRFYKYWnag7tc9QCX1BqN1bQ7oRJ97KHwmvL7pSJGzF",
  "key18": "4nZEhDPuzpkcoUSxZCaiCtdQZP4XiQNPD5TA9PaMR1gYFcUeQGPAHHxznRtVAz3hMXkJHS2XDJ93C2v7kgBF68dC",
  "key19": "3nZ6Ev11jLb11vsfPzTuBtzn7vjLbYZ374F5XqhcSU3frdPDUrvPg3xMpcSi3mjLTsdDXmqSSJ9SsEhfbo1ryric",
  "key20": "3CvCiq4x13fsjaak3TjrPCGgcD6SapYeEQCCbZ3CLsZuFqXg2QSgYgWVYf6AAd9umK1GyByMQgUkXJjqS7TVsUfX",
  "key21": "5zL6cP2TsJuhgFvRh2ME4Kr1pa23gLBhMHGpykwaxwH6SnhiNdwtuM2P8f6Yshx7VEtGYwzVeAPXD6ykos8pNfT1",
  "key22": "3TrwERYnTpJgVvHaXfBJAzcQtnxUPjKsjmqWsbXn2j4w9Pwr9sx84khovS5GKgCzUWqYdNg13cgSPnTBpZP6XaK9",
  "key23": "4H7SsGpV5FhhFe7j6MASvj8uhAynxsWZ9iv7qXgDdbHPwC5zYKj2sYMNWVuWRp5VfDwz4X5ZVEpYfnkTpSoXJikS",
  "key24": "5XTg6AnfA1dwr5tXmEn7RbkbRSWbWdbpxbP2N7UuYKdbnQAR3bxwA6EUwzazZ4FaHr2bweFWgdhZo3eoGeAx1Udt",
  "key25": "6gXvQFrmDjjM8xHigdTr8uQA2BbVra8cMTeHuFJGhoKZfGKiqTEcKuZVcpojkvW3yy1SbhWt4hB2C2xNr7B9pyx",
  "key26": "4zgoumyBo8NCsRbTj2YXiBMq79cgTX2AvGS5p9McHCHEFP3ToKA8QnSUTZxCpXUaJ5SQpaU7hrZpZkyu15JYzxpC",
  "key27": "5UXKpRojVUZfKb16NThp568KX8j8AckPN2AZGx3jiNode7v37QQ9k49JvDrjsnpRDWZLbDmvzFzYgKKdKiJYeVrN",
  "key28": "5coxPVcfKrnBePCQ4WM5kb5QMvKr8uj257Dg8BztdQ4pYcd7ZZU9RM6KThnSQa311YcdxAk1EwN55pUUbDfjM1Vb",
  "key29": "2xoJBfJaYyyGoenGy567fZGtp42DRfvafGvtPDXzyKkzNeXnEuMVd6ut7Menn2CMU3pSzPpuVAGjazGZ3HJ7Mq8t",
  "key30": "4tAx19DfHriCJpK7PLkgubWhZbHmux5DvE2GULhL7SuPuk4HnepyvUSrGntK93CWkdioxuC4g8agcW7MvNWZBG7f",
  "key31": "3Dsu4PsJZfqqcMD2aB5wVoEJrqKKqcEEb9BX7nqcfQHj1cwGuQzhTd1huNGPXKCUiJ2LwHiRGYFniLGThuDSF7Wx",
  "key32": "iBvwLkgTNEbhtSBgDUGyxgvjDfVBE8zqtSpzYt6UVdpzwiHcdXMFPuL2Dh7x91deSQXmrk5frfZj149oLogWz8p",
  "key33": "2CFuBfTRwPpqZGgnrotfMJXsCFk6jhKyZeCSLS7CKZb4Jordy1DLPcM779qHAcMMaUAmwc4itazwgTtbivpnEzc4",
  "key34": "3Z1gH8tPpveuEfrQdLcgSt5U7dXgpZwsp6vyuJt8FZ6bKwpsHykWMd8ZjBjKfhpEVCK7Mk7krcRTWfF7TqqA97r4",
  "key35": "34S2gYpz8cggASpNBfyK4cQCHVrDFTthaUmmGQtqHfqJgGgWGNhRCaPQjb6UMgPi4KkHDJGP4Nuc31Uw9s2v3Gid",
  "key36": "49xp8iugdpftwwfuXAGi74WYr2W3QdGsV5vpHLwPJ3zoVKTzjpRW2pDtCEZa6ELVsDHkJLrfB3xTjujHZwqBEeo6"
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
