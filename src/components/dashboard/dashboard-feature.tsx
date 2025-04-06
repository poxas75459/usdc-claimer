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
    "278kAvuegJJ6W6Pq323B6bgHWZYsxTvayUcn82VK2e3FQy8kLynoS831PfP3d5nAJFoFJP1XnqptmaDc8ESG3r6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ujQrWqyVQ4rhJUaC1kbywBNfnGHMxZKLkz7ptUsY7VcZ4K4ZaMQCKYtKtEnWoj4Fdi1RkViYFJZy5g2HGrqFRhJ",
  "key1": "3QFEyUBAhtB7k9oVRz6YiZWf21vdX6usvdqYe3ayf9ExLRdBru2EXUvXweUt89UqkZb39k8GX6YgLpaYguP89gBv",
  "key2": "4Ls6w9kXBfoLmUpvPPKq31ufsAfwmRQHtoSzvH6L4xvfA1wJP2PUrgGEegaeGgTjs3KmDCcvwfaPqE9Aipvkk144",
  "key3": "5FJG6HBSXc7mBajMy5KjLwNj93EwcC8fuXzBDfbiMF3d1psZTVqien2JtHX5WMVcoz9yT18mH7d2rNoYBbGMVNu5",
  "key4": "4jnBDuGW8Pi8apWPbt5v26V7bau19BNT5PSErevX2CXCVQFADxHFZmMeE8bRZUrT3Rb7UC2gURHCqJ6LFo3hvBE5",
  "key5": "4ohzMtk7ic3b7gtMJhMYhmSKgzFhWBL522hBvA5nvQCVjo6WPpH5YPjKrpbuemBxQZinfURoiEt8AUXV5XzZ6VSQ",
  "key6": "5zXrDwVa2NGEwhMMoupVQxpWvjLwFayB7cnp3GCvvwcUzvp7Gv7FZtpbhMie8K2ZMD287dMSEgn2GWrXjhyBKBAw",
  "key7": "oDUUg22Y9MdUBwY94uVTVwSuEjm5pB5VeUMSrSF55Yf29NY4MtpYBLACS5YDkuHPQZsgMR4wiYBrMP1B4o6iXNu",
  "key8": "37koagrC4qyg4WLe3ifruf8Q5DNGdvfjPBks6tXgDFURNe1i82gPdppZWVHFgAWLFvbZEfj7Rxs6WvCWLTL62RXy",
  "key9": "1h2p6NhNFMgrYzAdJVjUXWfxso88mAAh5ACmstqQxzBTyWqoFSJD78TYwxLGKUuHZDynTdZ3ZdjDDJGh2U7yd81",
  "key10": "2MrKj3de3QFpmUw7dgQ8UxqSTU5h4zZ57igbiQYZoxQjYTBTXSQ2wYFAK7n3zigD6b9V4s7osNN2EtZRKMA9epsi",
  "key11": "2jM56mUjgvUotDw2XfYKWgQmek9m1snqGbQdnvfFiPFxQzXDGg7A6S7dSh3mJ2kDJKA6PtqibYWRuEHCzFPUGD9U",
  "key12": "28DRFtKfrFyvpvK8asCWNVFManvwV7LJo5w6UcNLnD2pbwhAg2rbS7KHXuKfymoJvTAne7CBSz1RYVXHq8g9RMMk",
  "key13": "42mYyMaiTntdV2HsXhuCMHt1hqWR1xYGmSMWafZW2DP1HWHcKsee7AADf9gAfLsR2QRG8i3RASJeTsVP3AvRmX34",
  "key14": "3eX2ALGkisXTAvaufP8C3MZ5hNCk1G6M3u9JRDhx2fPgNYvUqfSBxBE3azdHPStphWYJN6FnMJyZxsxEdiTxC1xY",
  "key15": "usuNHZS13DPwPB31qzSH1yhqQuD3g4rjfoBW67fc3n285Jigyd3GN9xENrhU7SdyZ2Ko3W4FsRRYxfjmeKrJ8LY",
  "key16": "2LC5MiTuoDDQ8xMRR7kq8odNBaNkWRBCxBBti7qaQozNEUNe8YyRaPR6K4T3tFkaPZXUV7zLNqnFbCwj7NPq5o1i",
  "key17": "5HVjQ9TrmqSqHA7sD9uk4Tx9NHygsLuG1tXwuT1YtD3SUJeY12QtKEfFBgc6fNYnmKTyQuJdwAU64SMnv6ha6xyu",
  "key18": "3jKujKhJfToXTGL7busZGEwfYe6RCSLySiWGk3u8RhRTes18nWHHR1k6vFd3cPi1ZF9vRwrLHhyUvti2DdDpkuYy",
  "key19": "2MWr5mH5Y2Bsym8C17GYbpppPiKUth8jHisxPdNvtt8kQq3jar9GJZTVTz2G7asARkAVe2igfzPYs8EXCpJqSYN1",
  "key20": "5iR85HpEhSFaZ1VDgdYHHsgGz6uKs8g2ptiC3uUX1bx1rF7DrWjDumdSLzqxdCvPyME38zRDTAsBAFCjpkCcAsDZ",
  "key21": "4rYasTxmXztWJythcPEUnd2aUnavVmnErJZQ2CzMshWwXRw2nUiBAXiXBWhuTtPSFHrCbwWuuSBxhJT9813YPvG2",
  "key22": "4sGp5A8DsSSnNqwxi39rDnvh32WDnQkRykwgEApfDT9bqhyjKbWGqtwjRNmXCXq2fHFo4scUpw4kRCmmtir6Gvh2",
  "key23": "57deKAEChVKAM1GqJSojvfF5YtjrdLL7mnCXKHW1q6LZpMoLxVFW9UMB9mFj7soonyQNQmXpBjT5BzGN5nesCoXa",
  "key24": "5AaTKHydE994BnaHWxFLzc8gMFDJLPFG34VxxDG73xJiJRCzQm99N2ypa83iNoffJDj2vk2CiYz1y8Qtzm2pekXG",
  "key25": "4mRseCCK3jrQDRQucQevGBP8gR5JUfJicQR7Cwf6ZeJEGYRoAiEFz2HceoYWkSXjsHp5d417itEgwB7jnCdDUkSq",
  "key26": "5F9ELvzktoKPuh7HKC4zBoyRMBg3JfDFATcrvGbKXpEdop917NPnYRadTarCkywgdMMbW6i8vVNd62adLN6LU9kE",
  "key27": "5bpQXoC9d6SoSqnWw12nkNxqxBcKULMeQq8NhSeDoCbqpdZjZ6AGeJRaSmChcRcd9kuYvFfsuhMepDehqwQHmxfn",
  "key28": "36W8fzqayMoGbZSZH5DUqj4HWBx3pNn6nj5GFFNph8wKDAfbuGe4hFQqfW5wqeE4tAfiSPURyZq3TGtq8T31zvEq"
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
