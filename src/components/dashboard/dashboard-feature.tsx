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
    "2E5sTKLTnPfn7dNtdxVQTcWnLsVrrapqwmx7Qcu8BaY6PHtZjEFdymSVUkr6faiwK973Hn2CgfvVsMWTKqjMA2qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y7rDiGFzhupNyKQY1nbw1vgHiVzx5Dp1u8YpafPV4aEQFoW4sLDLTLhKQnwfQUMuPehR37Gb5K4zN4C5Tqx79jN",
  "key1": "3jCV6NX27i7zaGPiEAXhk94n9zB6k4o4yfj741J67poUJzh7Y3uYXbfqmtHJLKcPRdqr78Lod7cfiyMZ96beeHGF",
  "key2": "4QtNyxioLg6ocQuxM2BU6s2JbKYuvUX5fuDt6yVe21J7PSJxgbeowiJpBtu7VmT5RucxRQt4Wsb32FfkmxLhXW13",
  "key3": "4ae29nEqEyvVzBMG659ULJCFENkxx523jGj2QWfCUS28YKkpYUd8LyUHLcK3DSET81JCiJFUFMKsuHTDSaCQmFGj",
  "key4": "5BGfGrJNi1xckbYCBCVimkfS7ErM2umGo8jNCuDGuDppbyy3BE1cDSAWdmHMkxeBnwiz35xCqZAKvE8eKSKW7Sj7",
  "key5": "5MFGcpucN7XXB3VpwgXtVgvy26rTq3efkX8vCiXiHjWhqaCr6KbrKdTWkeDmmnHrjyQdVV5bXcb9gfxcjwR2Kt9w",
  "key6": "5csUeNzatown1NRskxDZuPBbRu9LZfGYViz3wN8XaAs52oYWGKYSfkYWcNd6zVW1zkGPMuHXaamZ3QEPABK8yctQ",
  "key7": "4kUySG47Zd5gr8t1A1P74pMqG5Pnm5bTK7UgrAKWCLuEnNCYCUB2pehEdq9JihZSoqzEyAHfyfttod28pz1WYNVE",
  "key8": "3iXde18cgoux9LN21fGHHGjxzobZ5WYhka6jrvKsrg4EvDpyFrevNP9mm7tDPhH5Hqn9mnX9tpAgeub1FyhdeYTJ",
  "key9": "3bCQFhMpdzsQuVTC5JMDjHX5uyB1tX6dhpdeoyZv7Zha8zDbk719G65voDBwWWx6nodUH3NRE3Hg4824NMZBva8V",
  "key10": "WGemTBFn7pxQWkY4DsmPPqtdKUWBio98m9exvATF3CGVNu8E4jL76P2FtCPFXq7rj8kNcwCEjo8HV5a2rBuoB7a",
  "key11": "2BeFfq19G84H2d6Nx5gEWCcybtmhd1zHS2PuAu49a5hrf5UnxNPWtqsbn5U4em3tt5oh8bD2agKwNKvEXSYCNrZT",
  "key12": "5WD6GRwCR2rr1JzNfkRfpA9NYPvtFupEjnNKfN4TajWLhzoxfbdEfEkY9m77x7Xk8PjmuAXxxLMSH66sKxtSgBrz",
  "key13": "2yUuESvZnyMQQrQ1wwCcWKeJVqv75iDCqHsBfeK98uDDQ2RZyWibh9WGBiZfkGzJbP939b2EnbVJYNDv4Dge5jnJ",
  "key14": "2HQLyMpy9XeJ3viNt2aaPkD9Meb1JdeLwLEhGBVEESXUU8BxPgrfPCF1wHXuUzNfZWhpAuDapZMwVD94CBwzkkz4",
  "key15": "h7fjhfJWUgoxfMiFdx3UiNsZ2ZmfyKYNafrDv14aMiBW2SrQL1yMm7yUDTdAMvv6y65kYxiRFpRkex4Jmhhr57D",
  "key16": "5YT4gbRrkfeH5JKwHLiviYUUuFSjBW2AgPTVPF1ED4apWzhKEtyytX73B8zArcMv4CUz6Z28dEMr2vXnw4eHidAh",
  "key17": "4W51utLZfafspjBE6gvgJDLBWCr4Kmw6s3PyWw2Cqzzrcrza6sqzGsbUbxu3p1Sm9RUn4EBiASrUWrufjtegQQrT",
  "key18": "5fKPW5UQLLzgXA8CQpAmPZJZVZDzZR4X8evky6JHo2EFPuLp8ynnDi1dk1X9JVNGXSY8QZurjxxSNx9TXbJDwAJs",
  "key19": "Lw7ACjschtosbKJbrntb3GmGT7soagirnBEC1F1XXY78BX8L3p5PfrvyCPatAh4Dmh2Q2ZtCKeWACZDgZ9g1fgo",
  "key20": "5iYzgw55NtudKwRofsc1Fd88XdnjNmDzufBjHgRcnHEotev3cUUoG7k3smS74w2whw33tJgiNZqAfHokieioL6mx",
  "key21": "2Bcf7vX2hPFxPSTxsgYnhKU4M4vFjhnUqdxYoeV6kejdJb8KBqqi5SUo5j5Gxa42KKQUBz8YAfSL6tLtQMMt1WiW",
  "key22": "4aveRdnYVjVkERs2rzMSPRgFyopxwvAM4MiTQrz7zL8Pah9dfex4KVTa1vSJb4QVWULXv6ee4VXN3vscfhSXbVWr",
  "key23": "546Jw24Vq8HPdjE1URDMx73XkoXrTL1iWKoFTK3nZvyC9rNL8tXPsNTdWWxmEVdX5MLSr9eMBLqZ4X94nGBNyw6U",
  "key24": "2X7cj23jWRARs4Goq1QV1q7ywNMxACoMoBPZWj5Rr65dWXz8zBYfkZLACpzZSjunnoVZKWa4tPXeCerALijGZPh4",
  "key25": "EaA5kXGEzzD6gkeKwd6uNUxpKKgmJ5vW4oib3MgziEQf18dneLku2Vv61QJpCAFhMdsHp1gZ7T2JEu9tNSBVVvX",
  "key26": "1MZagsCde3qrQERF4g1o2z6xTcm63gVbibGwvr6Nm3MEk7p2gYogtZJXM4onVUSLiE4PaJJB8HwNPFbETQ54N3A",
  "key27": "EtAbzjVn4JHtupjjZ7baPo9qpKKQtc9jaDM7xHPNC9pUgkeRLyQA36qigSiZF3hXYhzw2wgDKYf3nAWSTJtvRHd",
  "key28": "5YZNBL3c5Xb9mwMTENnYHDhjSJg6pkBN3A1KNmR5S7Emhrbv3ZTH8jttfUJCJ3diNKR5UXdBgP4ehuVeKZ5V1bUz",
  "key29": "2tmgUuXXGjCheFFoLzvkk54A2AdUi9H2qNtr3Wh7JFeVXpL8zyHPLGnBjk1NQFzLnNqQh3EnLKiPXz37CYHDHjbv",
  "key30": "3WRkpJjXeY3swx64REcTZKaQUb5ekX64vYUSwHWGNcyLTaBdqFf4HYvwmyZrqVwQNE1V4Xk2qwW7nvvH1GEBea2j",
  "key31": "3zcGSdAs6swAJpCAJi2v6wRewW32CDzeCvtsFd2BP2YSe9ni6RikkhqJADhJsxSUkkdJGywxBLkugYBRBcxiHB2",
  "key32": "Kb2VQzpgFAa4eXuJQoK6Wjp2DcSn7BWZ7iBaQXC9ukfBUGuEGckiEhcCskDMHMxtvG9wju4A2PCBTJUFMPU58S4",
  "key33": "49brkC1YyZQGkR2jzDxdFdcR99e9HKbvcxQe7xikh4U2stTTwRrb1PUtMe3GyAjZ4xHWnRun6FoktMemcuNg3s2T"
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
