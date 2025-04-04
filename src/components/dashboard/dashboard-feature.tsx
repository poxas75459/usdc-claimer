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
    "3KW9Feg2ni9U89x3Ln4yfB1QZRMdtprq5GJuzwxiMCKL6cQtKNnS2UMz7JEvNj6XvMB3tkikb8qTiKWn88pzCAr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P3rerXwwnsSHT4tDzuYEBERo6nVDsBcDYLxxXWpVYZsqtaNmbtuaZktonxfsMQyNMb4J8YXpSC8bCioU92uLPnX",
  "key1": "vQPc8MGEL5yQQzgwCMLkB64QBUMoMirt7tc1YJwRTfMViF3ogeUK99yt5ksmmYmbyWwBwJ4H2PXkwt1bxJrRojJ",
  "key2": "53byFsmXVpCNUfxjux1ZCMBjuRtHnozs7K1YvUJhY5PLx1FZe7zThcpMGbGbexkEV823YxBurkfCBuqoVGhGcrdv",
  "key3": "2nA7yZHfNZ9RrVkS156inEGTjZxyM6ijXhnv4aVdJn8LaGfofu6ZXryeUSb8jSXxMzz7QanqW9QfBVYnarYJCbNf",
  "key4": "4udiTYzhErLoZiPpUQsXytu3u44K2c9PtVgjEvDgXzbpAgmfoBjw3bXvKjS2LnpTMHrdGKucBSYHZVrmUNaGxEf7",
  "key5": "3qMrkuPabHPEPiB3P77GsowQ18Nx5UV9fHpbKfweTKi6uz1eeuqwNGtEh3r1X1ay54GxhyyLYNcmq5wGhiVh8Nfe",
  "key6": "4NCMArf2CpAeknNDEdc8EJVZXzijERjYrWvHDTgtuqw3mksJwygWQKy4Fp693n4M4PiY7sXckPv4VQhiR9U1nqF5",
  "key7": "HER6WbLiJcv5aoTQqPKdWapNf6FC7ekgaZ2QmfXrcy8JP9vurvAcQSmapodS7HYLGRft1GXXx37mtoGBdcGQeGd",
  "key8": "5e3RfJ7YjBoG4DKTYYBDXxEaKeFYxkA2Qbj4eEQb9Hwa49r35rB7yLrbh6QMagrDwGrVnpkvQ1DkGZaqeSc89Pci",
  "key9": "3xDybaLqYTaihmbWk7MGkGxZWT2trj83WdsUrVMNegM1DU6kj3LJ2ixqPZ1qDTU8wpSThjMXJ6WjrxfkbH6VgZTk",
  "key10": "2jUq931Turj7dMRCajywewz2VrsGXTTN7m45mDsF9vyd4i5Sr6sRP4Un56kUe83rT33pHxSEiaBYmwuetnWa9GVa",
  "key11": "2CVnJ8pyy8t9VxDg1DrdxWqb7YssLPKc7EUPzUPPtCB44gQiAP8o5Xi7KqcVwGDox8k268aEAjznYu22KkZQxDS8",
  "key12": "43uUofwa3WRcRLpF4RF3eRg7Ctg5HGxVUrfam9jmMiGozqNngp4sGdQewdi4VPr43aMamADLNDdJMCnHxLATodCG",
  "key13": "4xrjdaQbxqECWS6scTKz5jbSV5Vpe9FJ7okZihjLLXaXymAEvHpxMxLcbQZWfDUzwrRmr6C57JMq7DaSp2mS3tga",
  "key14": "iddNF4bsnapsuoMBNAegjQYJKQpvy1hG1Dm5HSZWuLZATBhYe8GKLgC2ySiXcGbdY6FWxAi9fxAKJL87otAd9ir",
  "key15": "2ZxsGW8166u1riGHGYrD2yZrJEhB1BGGNXE7orai8AZrbUkVFgx29qHRLb71J5hLN6aBV6zb5rUDRunFNvoKWHoe",
  "key16": "2A6H6ef4TAyfuguMvfQ2wACfg7jgWKxA3FxUfVUsEtwnFzXubztTgqSNepadKAmYJcCoQ1hnar3GpdDgm8nfm9se",
  "key17": "5dbx4Jx16tPG4iZzSq6Qnr82WwaiYLTEZp2FNRRvY5vUwQE9bpzUPKjozb5gYLHvYRF8gkyhxxSaZdCFt8gcVkyV",
  "key18": "RNUSZwDhbPRnmzhh3xBsUL4UkTvLpForw596dbrXEKKUgUzTAfiRjvzfLUhhKYN395Wf7zeG3iBm5p6zSJy43Ct",
  "key19": "4gM6E1BvhZhuXNv1HoZUmcqwEQd5VvpBkua9SZnJ15tfMBt1uj3bCVH6xkSm5r2kGwk8eB1pYif86HJYdfdrYM2u",
  "key20": "5igj9aZ3rwPPGFGELpoTjMhmnwmrU91zvxYvPQXd52dKTQeUPJJecdRPZhcbMeha61Xdd6J5H6qhQGnWK9HgJ6Bg",
  "key21": "2VK8LsPHtnrmZW2yvP7ov8xTVFt1WK5wBVt79n52KJRtp35UK8GkVo2BdwN7jokmW5349UgotPc7crzDcE7MkTNM",
  "key22": "67Cqy1LdSkh7LsLgeCcH6DkRNXNDTqsmfWzBQESKQ3afrbDExv5SjhHp4cKFJGVPKCj2a8nMAE78yU5sHeDfVsKG",
  "key23": "2jHhQWeNfPCFKz7gUaufUD2fcqX1YsptxDhUNK7MPz38d61iCZZAKV5XHgpK9PwFH8WjJwSbeinW3qGBqkW54YrP",
  "key24": "4Jk3vKqnCK1Fh7LcNn8dSMdBFMRxBZWSx3mHiPN6FtFQsBPyXctetTcJFsXe8RoFCqaJboCpB6r1vbBKCWRa3k7V",
  "key25": "65Z65JkumDXxYyA89mjWxqJwNiqD9XtLWD4nwfBkeZX1JtqNNzsFPDjD9LK5W7CUZ8yg2VF8JYzpDoMnkjx1xPtA",
  "key26": "2623GUQK2CxWpt58RdPBWgy4G67u1J5RGgKgX5QE5oZhXgCe1Vi7z8BZ79wwonNqtcr3LzWGRLekBCzNkqQkdaM1",
  "key27": "2hP3cVz5R6uLjbHMJu3qsmfyVGMyEYEvRZTHxNd3pLUs9Xg3krFw1RcK47JFmXvvuD62oXtWkqCsW7KoDNSjxA9v",
  "key28": "42WWeN3sF45JW8HqZzKBHJaYtGLgsW8kVpjWEqtXwRyBT14CygJnTyqdq6zD8Q65ndpnwsavPV6i8RQks1vgiQqP",
  "key29": "j4xUHAdKYLy973xa99Kxoob7i12Eor6AX7fY7JkoovLzVNUDYcXswJujJRFqRMvMnv6MyJ2n2mE9Li3MsQQU2Bo",
  "key30": "5B8nsmAuK7i3ndA8MgDHxZiN8X7aRCLKnmhj84W7EHo5hxku81dRo2KNg2gzLgY4DQtNiSYDF5tGQc6GpXbkLdBF",
  "key31": "Fdjkb2ocSQ3Gyi1vM1wcRDZks6qTeXLuwZi2YSa8jGpiqkWk8KB7c5FxSASYikhhGsL7Fna8KdKXFScC6a6JPKy",
  "key32": "5oEw8UU6YBAKRfSjYVvtLRV98NF9TRHRWhXMVrsxiibj5duSyYGbvZG9gFhT7WaYp1HJeTtW4dp6deqb4D1yjxBK"
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
