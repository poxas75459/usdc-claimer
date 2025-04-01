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
    "5wQwJvQ7aAKLTtezwnteQMCJ34SJncj9oEgM87wXuoZ9PY3MLsSqhJ6zWPzrVJuqnrrohm1DWYJpkNiroyuCUWZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZQLDW5Gmf6JtEch2B5ypR6XeyCj7vWoFjxqj8e5SZYNpq13V3PHvVwTzrrXypejZTizjEK6YKAnVhMvEVSPzSB",
  "key1": "SeDDuKHkf2AF6GYaErZ1E5gvaYz5miyqiqtnKC4cVZ3Nru5hGB3abjQCYFWczP6RdGuWrjPknsxrguetCYMNtRe",
  "key2": "3aF6G5fk6SzCgRiKX7oaetx5JtxukdPR6P54UShrMBz2vUqT6FrW7M1ifJ9TW5T5s3SjeZCHmTQHxCiNK4dWHjtH",
  "key3": "4uvXs6JoYQvpxve5V2Ashy5hhi4CfyFTs3ZL52UWNexrrzwZMd8HXuGFtJ68NJ86VPEpmUG7225vEarKcQ7jLjrR",
  "key4": "4yta8MPndZm7Jhz8Wsb3HFqxXc6cKSxFQvRw3mANqcDs4hFytKSJcQuyJGNL6Ly4paMSn5oXfWRihwF6BCBE1Dr1",
  "key5": "4SuTvtypX2Kkqwd3bYRPPSwp3tNupSg1iJwneZgqskTP5jipcCNhwMbV9o61nJQWC9MDYQaB2joJyAp6MfZ4WNjD",
  "key6": "3ZhY27pqFWQNhHpqwdZxsHP48H9dXFtUK1wHMVhCjcpsCwTkQ2QRHRKC2XceB8GeLn9JAFwmM5hwXX7ja9jtC4GU",
  "key7": "uYXCUGxpueajSANqJzi19x2hP8tDdfasfKoscU9WivyyivXAVgpQii751NEwL7n5aP5srBt6uNwRk3yiqYS7TnJ",
  "key8": "4mpNKugZ65RMvvqTyx44MNXNfbzfN6b9ywpMg1izFgwJD9QwmqXSz3vvU3YFhqcET54r7MgrNS6BRRUkKtLzcjxt",
  "key9": "3BHvcqCvpbsLHcT8izffNsFvULEmZfRcjyrNnHeM5ukZ6x9dJT4GvAg6KYYWP9hBwrFTyinXzmzW51cUXJJHvFGW",
  "key10": "2VUtPWEw1ZPtQTvJdP3cxFLYzqRm4aVcYZCMu4odS8PxbE3XkcoaSQZvPYxJ92XuGSiuza6cU64BAztqwK9rSeiE",
  "key11": "5Mr4fpfEPRScPSh6KA2VFEbTkRwUKmz9kShRhoXNLR6kBBGBA4ynVbKgtNxZj4VDTcDGtRkNFm2EpZLL1RxNTyxW",
  "key12": "59Bqv3fFEbCQFJ3Ujj6oiGvsRZYBJMoxpXyCdsi8wFh9L1UaACoTBdW1ZsDYw58K2QZLBEK1z1exRy52YkDr93j9",
  "key13": "XwAmsDhZaRgHY1nrT6DSVBECK1FGguEzyF1x7n4GMijDcYjnCVNAu49tAGd7apqGwKARvTLBCD44tcVXerfsPjG",
  "key14": "4jQjmDgVs1d7LEkCHYKNRwT7vJzdxnZ8YMpa6b2PERKczLeUeuSBf73KSxyRccVKoEEXHCotnackZY6YkwqFoUDw",
  "key15": "3gZ2iVQKZ8V1ehemATgQRitgywpsgdG3JFWwRz5eqXuz6QFGrFKX7PiGGTXPascyxoN3VSGtnKq2bVbLPAWb9ZUV",
  "key16": "556Ma37SJ2GDCFFp94Dr7nHRJu7gCGQ1EW1sjjY5XHYqSZX7gWcLvCibRHrqzcBSmmTkF4Nkn98abXvgWxgBHUCh",
  "key17": "2wt3Wgf4H956JNUA1nT3BNr6byQswq5KkwbWayg6ZLmAkWmkToShKUGSnDqKTnGfbSJqJHTbLkn5zLtR3tyT978S",
  "key18": "cyKQwTYAtGJgEgm9EGBscY7eDT7cXXBqWm8z2mcfVBQQsb8DbNTCLpW3N2feJPRryxfVjne7VDhgj5cRUK9Zw2P",
  "key19": "5R7TugMjqmMaD1xR2JMHwnfbGjcUaKz5gqxnHZfEt3tuuHZFGU81zrXRYUMKQP4LEPyXv2jqveYMd6AgmMHX51pd",
  "key20": "4FksQ3eDWTJze9kt1awjvG9grMSUz2dWYxmX4Ptav9aeT2wQk1h265ux3TiNF6HEkwejDN81jgri3JBQjV1BQJqf",
  "key21": "XEuLqBzX8KkXHXWFVUiMmMHtZfAmZBgZAW27Tu4znQv4tYPfcchCdEk4s7Fz12a4yLWk8qS7EN5CUtuRneUyv43",
  "key22": "4QgpZVvknYFZtoymmCguzZSPdZkSNbLCoEVmhGig3hA7YtEynwn2AhGq2mARBCxvUNbdstK7g5SkKSBRGJHpzf39",
  "key23": "5hvLxxY2i5R68Mv5gEFUpzWSmCJddDW2u78q78FKsSWoL9NYndkH2NxCq9qZgXQQ9VkujNAKyVCNYqzXwEyDevhT",
  "key24": "KSMKHNS5udA8qyJ9fjNSp4eaDVhEN6rtAhy8e3z8dQLaiPFnkdN534N6fSgRe6sVCt7EduMn97JrAG3aaLdTncX",
  "key25": "jkFa3YB2Hmh7SGbebVqrGKn4UENXDFPTPiyv9SQBVtEAUc7TVWWx35TLJ1NGoRNFmBQA2vTtNSHzSAgBgL1uABq",
  "key26": "4ibGLK59Mrxe2xVkkSQpKTEugLwnSVYNGkTLJubiHQYJmtA64Pto4HKSo925ganwc2Zr7cxsRJjzw2y8GB4dTASd",
  "key27": "62PYggNzPaWVj5Ms8qWzQ5ot8sDbfZTKdva6Rd3XUpuiBjSrWgCPDwoMKLqsW9KrKnYoTrKDa6mPJi9EdanKfMn9",
  "key28": "3QraweEeH6ymZuCk5ZgCkoq71fJmX13rM6NUMYC8WX2X2w1dhCFWzoXXbEYyBWxAEgcBkVETpxtJbq2hhepLnUxH",
  "key29": "2Yg9wTEwp1ja1FJvmhMyYkoGzrXzNxuyfSg33nVDesuuvN7xZ7vZaWwBxiUBhEaDoXCLnfTWQ4j7EY1siooVJA1E",
  "key30": "4g8XeKJ1Jkzez99Gri6pvWcE3ydgq6c7VX3YKa2rgPPgVXzgVJHNCNvwqGdzM8Wfnt9PYKhCkU46BWNToG8rnzh6",
  "key31": "9JJBGLZ6Q5WsEdjySLdjFurwTLs11korAeuMHH3seer7GFPJ7qwhRYdjfizQTnGstb5757BKPN4MhFMGxRetCcC",
  "key32": "2d59hQ6qrMsfVvhLYvNaroB6WV78uGCTVVqun8ZXCAw9wdD4oyMCcGDv13er6Skk4hTDHpoit3mBL1MwcHikbnbf",
  "key33": "3gqPiHowvn6bjeZ6bnSmR9v97qNkGSQCy2QjLdf48EWgwPYk21NsnTorwnUQ3U6UNCns79SMmLRsZHdwuDFWkErF",
  "key34": "2Y4rZBt2MvMy5y8EYg26xtHdJvRibmJ3umcuf2NrnScMoP5X6B7MqFYBehtyGBs6Q4mC9AdVTBEsAYLANroNLA9U",
  "key35": "56eP4YNKjshhNcdRxHUf8vVQUUELBwAGg3y8uu3n2KftWuRqeFBVM1pPHXuLtELywbFrW8tDqgujcQL3ixNrsXwJ",
  "key36": "4NNqv8nYA5LiqfKUHUJPHoCKZcUUP7uWM4BpvwAFasMEaa14rKxUxTgpAQ4LVVqi3aepYvzfnQJ2MMNpCoi8Da9m",
  "key37": "5g7LKbh7FizciKZUwNJVy99ujY3ojRgFDnW85bRGK2G9Wy2WvteuXBSzh2GJZjMRM5Wifc4eWUMuopB839sSZsnn",
  "key38": "4dJ5tS9hVaMjeKLbVrswTyEpXGqNKe1KyoEpHrmdAhg1qHcqwMs3nzoDREv8YLeZBoPS9akkbwTbHo5oqbmJ8tk9",
  "key39": "4WyVGcpnfRjuADsFaD9fRtCvBncoo5Yz5A7zq5L5EJCRSLnNAz1zPavuGv9ZeFVkSpy59uRvuamcnidzogsT6xfW",
  "key40": "2sZ7F2GKS21Cjg2K3VEkG6uQ2MtSqgD3rMLo4mKMr9kmzL5q3qzBvBWvYMohmKcTfgkQC65RtqPMqKzS3GFgCKKY",
  "key41": "ktYQhZK68WYwmf7ncZ1xyyCZciKt47YuEwEyKmMBEyb4Ho1YuQ337Z8ipoXfdce2vD3k16TyPgsRo5yGYSPE4vX",
  "key42": "cn4Y6jeXdWZjEbuwtwacaFZEQqPXWuoDcvAi2qYCPYqa7Xm4PPCutiFjrZcGRkEhkkJHWMwmUPq18KtGTFfEw7q"
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
