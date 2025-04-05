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
    "N4UsSL5cWjHtznM1d6dXmS3hSfNHKMyNzJT8Z7Wc7238hkCodMR4JNYwcRvqGZzTyCGrCzsEN4VUjsvJ4Ts2cB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23sbT3gNsitwbhtffSRgyx6LrgnBCwKmEWnNwQHPHs6Qb2ARzjxvT31kg89uq6YarcFKm8YrLhYNmVuGcbfZB2Cz",
  "key1": "okfgKsbjE5pjpjMTp6RHeLF2jF5ypRpvbLYNVpCzto134TBssQgRRD2QDoGbv8kDp1XCrdgve6bG9z9ALhQoe7L",
  "key2": "2gp4GQG9UjVg57BrYREitFfxzfU8jNVhAMDVVYFD9qdYzw7H1Hr4v41RXcKNBR9suzyP4DuBGVSefRY644rQGwfF",
  "key3": "5UrH33wdDfG138Lqtv6pNug7n94PmnhtWvmmt96aS68jEAq24DDvpWxhSf9oNfdj1242Puub5vyPd9ye8XusMzaE",
  "key4": "4QogYGB4fuQfgCn8D1u5RmVdCFU7mQZvsZyAGznYS1VhbYQv2Co8mZYmdw2WapAHEw8nPrvL5SoJpA9B3rwyyqo9",
  "key5": "odYWanMvjC8gXrB5p5r1rgRCThY4ziNKVdgMA4wb69KCxQoTDPjSr3izTb5HKa4A39TMQTu6mNRUFVLf1fxyXQH",
  "key6": "356AMTJZZH7t7YJ4n6vSTvhKKsxiizCGc5xko7QD2iE8uibM6g8bKGMoWt8vNtruKM558qwN5ynPuh1wMgAiziqL",
  "key7": "2ptUVUPt6M8d69wrEqqC8KoPqxSi9WD93859Y9X72yJhEJxp2kJWFGQQUMN2sSFHbe1WG2Nxbs7rmEVAuTEYbZY5",
  "key8": "5TWS6GAGLrSC8Neeroj7ZqBNU35rWf9ZgjMx5VLCo2Cz9TDyvsz7sReqH28NmVmUJu3h7Yz2MErjZrCMfbi7KKfG",
  "key9": "5NcxjkVoG5qqV6fzP3HQ7pn5D4kLmqbo4X7s369pHm5Agyo12F3rVvJtDyQ7ADueH1fEcdeCAjJZGqokdkMzwCva",
  "key10": "4qixVk9WUiEkHdm6XJwHYf5zVefw2CGcGgjH8oeguoL2KHKXajDuKDqhEBWMGvyQzphAQUoMtCjbmM2D25q4FgHp",
  "key11": "nvArMAz81KGGuvcVL6kStjCgNDNfmLCMuNkqU7TyrhyZmSPBjzKhnByJCxrihQbs7cKFx2AR718xsc25qPhKH2U",
  "key12": "2ozrxbj5qmRe6pjHvdiGQ91m3CJzEsc8svAbyr6uvccd24H4Y5gRReteseWDck52oU3Z3xZRwdwPC2p4AT27Jhsn",
  "key13": "WYkGjZybtXu7Ytw2YWyB9pGGweCYy9eyHXJv1cE1Xes7VmDschvBLkgQtXFkEaBAtTbVGLtLr5PnffTkrxpSvft",
  "key14": "2c276cDiytqwCRrDQwHWnSVxaECXVSrnv9gG7R83uXrUB8NSRrEfnCbiFCFocJzEMcSq7toQXvZ5fJCpgPMkvEZ2",
  "key15": "5kJC94UdqVs8XtBDK14QDJ9sbzNvQACwxxWakfMjedZ5ZEuwr3BiJk3Gpj5MQMpGE4hn5d5oD5B2p6EGLeumb9Df",
  "key16": "4wJ2NaJFZJsbBopJLPHxiqjLFnKFhCFKfVaM6D2nGS5YXe9Fi95te5G5Zzy2k22zncFZcUiyBsZVMotrHAat22KG",
  "key17": "2SvUipZfkUsFBJshqAWBoNpD9N4w6PXwN69c3TDuwcqUCUcoDkNfxXfxfDue7w4ydRRPkqfAqSSDdGirdQF6TJ1c",
  "key18": "swWgKsFe9ZNKW8rAwxkpkYmpeVVoQXHPvj6Z4xNsnATTvXaXNvR1F5txdF6h51ctFzvo1UrT9PgR5oQtABG2a14",
  "key19": "23Ry5gE86PfNdK9jXuStZd9ZLTuuEbaZF6TYk3ytBCYVnZsptfDJgBTMLMxcGN3BVYkQyX8dNUW5cELZhg2pDvHV",
  "key20": "5gXk5nwovfyvuA89EbUTAqRq8RYQbWX3MwaBL3xwRsDJRin2FM1AaqAj5voPwv2n7gD6oT7YFfCTmzjRqUUw8Syz",
  "key21": "2v973UMpMWTWqMBdT2WKUw48Y29bncakpVKMuqeHQNzkT9L3i5cXuSqsnJTaXsV8EZuqxQuefHrttRfJdwTwfezk",
  "key22": "42LRpNHKU2xw6ckj26DLrswiFirhLBzfuAhnx1VyyLsF7v8FBe2kMpVCsvyitJWhKZxM1mbpfbHZe8ib19zfCj9H",
  "key23": "4rGVbSDRf3pCcHGrPCHVn84ZzsVWKnNNsx4K1AaDfFoERXVmZNUmuvzmkgGB8wL1oEcscGbDWdSLyG8VBpAaJCvw",
  "key24": "4jbQ3g38FafP1LgLkpHS9o4MMS9pZnkiwYXCJCuNcjSQyPak1JxP2SHPvvFmLz9G7VMnnZ5KusmVLABsu32xMAk6",
  "key25": "4tk55qburBYxQuvjqWR6gQQk5QNG2huroRqohe54EnnLFf3i4eFxVRz8cvmg9wkbcFQpYrYvaVktqeb9Fvrfk9p9",
  "key26": "4cphguqmh3sbMnuCTRzJcMbCMt7rYGZjVjfuzQQHsrWVbBWuyuLn6NQraaW4for6PD34dueFC6dMfEgE3fm2epB4",
  "key27": "2fg9xHLgq2oyHjyqgNfPVL84K1Ke9mSuT8WGZe517j43QHPitDypcVJjRuEcryFKu9XdYu1mB7NjkteW1mRhMhpj",
  "key28": "4qKNfB7uBjHw5SWLGBZcThe16wPL6YnG2QgxLpkBiAipzyb1ShHrX5AhSMiz8N6rk6JQ5ve8N5i8XvUrBk2nV2Gu",
  "key29": "2aj6M82ucoBFx62zR5aGxBEMAUkPeFWjuGFuUScmT3ow3KpDomNq5jyb43rpXTsWGwomZQNqkr8fRWxmiroWeZ5d",
  "key30": "3aeA2kycDsog9RJvxEQPbnaqNobhDqcBdy6r9KFg2mo2HYhoTvghDYAtEZNrvN6zdUN56Kpv2NzVSWmvFdFgPWLd",
  "key31": "4NxfhFPufMwqQNeQZZ45PCPsCTaBQ9DP2RbPHiN1UrCTT75HouiNs4JC7WrZjKSMFTdGx75xnvbgCqR9MZvP6dMn",
  "key32": "NGCnn8WEAW8aj3ycnC2ZP9ongqSRgNUqynJYoVE9g7G3n1daVz4bQ7yLJjMbRcwi3MKmLJ89sKrc4S5ZkxXUT2y",
  "key33": "32sbw6gBpxYUxaHDb8nDqbaXEPpTLp7AnHTq84M8bnrN8sAnKmEZTEGj2HZFRb4RyVPeKi3k89CMZSboSwnaiTa2",
  "key34": "B7NQTrnQ9Ry8MpoWCa2kdxHaiKgBhoMxgbbyFQ6Y1MBDquYypfCftUUNohigxLWrm1AiPkVc7kYfeupEmaaatmG",
  "key35": "tmCHRhBfV1ptQEQVnVKCsH1dAP2ENLhWCREkk9ZbbFwomK3tGgxzqRtL6aqTBqHvYcb5VERZuM18uf5Egemhhgu",
  "key36": "e2xXgmtdqv8AgsrjwWhveieZHiTL35jFhSt18qdFtwRHgHhtSwx4f5hN59hYf4zP1VsoFnhHoMCtYXjCWpDff6T",
  "key37": "4wtmtyGuHQZ64PnxePzapYPvZgTdgEtu5aSuaRxPWwJ3QKu3mnzYJ6eKFBHcWwSsX4nSDAQQyFuVXteU5WqdEZ48"
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
