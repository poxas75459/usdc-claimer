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
    "DTGrcrhktveNXnrnhu2GNdGkSGm6jsockycqkX7QDPzxoGDzt2X9R5QQwpGCpqJd8Dx9xVJ5Cj1769PrGSkwkWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCs9BJXmCZD4DaPsNAiPQnWSzmsdtQ6TaHcyx8nDxNNKfJE1fYxaBkx73DqV9uM79WZtY9hgBoR9ey6LDHBQCFZ",
  "key1": "2V717EUjACou5NSsss2Lyq1SV12dgHWaDNb33Uh8oriDGHyrVYNdw6cWZkzBPahpSfor34qGZ8RQwBzNmMdLbaxd",
  "key2": "dFRU4dxswBLVFpvRTAmWdG8727UMq7K2nnBBxs1TP2T4QGSMdVUotWmGUbvZNj8VYwyQaEJSLPL1pe6Lb8om4Wg",
  "key3": "mG2u4YHywGPvKKRhEoTbs98aMrUbqT3w8zhYyB1dNnXfHz4NgU5HeKNAsFEN6EhuLyoUkosNFTsqr4Bif9jKNAz",
  "key4": "45YihfsXFr6XfR1CKC9ZWK7orYf7K18iR8dod9mrQghhEwwKepoBbowndK9e4S9Af9Ha6hvjpR2Q6oZrcFN87kx6",
  "key5": "2rtr1pyFfy4JS6eFouZbmpZbr4AksbYq7zWeJbG1ZWfR24tUMVTsMt9WvJqazP2PpbCBCuZLcZu7kGy1DQBBieU2",
  "key6": "nmGStrjyh7xL3JxWGoMJKxjq4jGVvXcocjKwuMxZAT9gkCaXrFXHwSgnoQZtj3kHkjB6ofzEGzUqUHWRPLTanA4",
  "key7": "3V7a5TspMvdpRK8D61KWvPDqc49ZPchtu7tmF6R6xisj9EBygpbYRXfF8LFC4CKYkjo9w9SbsmEnGV5tYYPub3vM",
  "key8": "5cWtBMgycTLQEzwqR9vjk6yFfuHyMWxhXStgFCmqtkkCnRwQXCPhLwbKKB1Bbx4iyFYdQrZe87UJrfG7LRkZU8Ly",
  "key9": "3CTh1SBJKcpZhS3cxBuC4WUVkxNwXohbWnZNrvgwHFbthX7e7FusuW6nFX74RZajTbA5s1QNKJERjBQ4exg3WJWz",
  "key10": "4jwyXN4fUmZa82QYADmRjuexE7StSaKcaVfr9QTxi7T7bbJ9yz3gZgzDohs3RK9u5jCa9tXA1ttCCztqKE2L3341",
  "key11": "5FoVuXLPBkGiAsndLFuAWkrGoBuQgn7ZBxT5u6RQg5y5kKzySxjEaCDhajpSvW43u6TneF71B8bYL1ry9h55CT9q",
  "key12": "5LA119gjTkp2jysTVzFRkibjLZXq76Majo3D7kLLbtY9yK4nercr7KgCpkHfoFLdmuh9vGEZ3mjnP3JLsQYaqQwZ",
  "key13": "3kDG4GuJgP39Hwi6jDNybrTyPLREwikA3siuJTQY9DH2TuCn4CdBhDFE45RoQq8jnz4XoQvbQAhmNdcMYhQvSyEa",
  "key14": "2zL4L7rmUmoLzuAHqpCiE6LQiz4UNRVwaoSYwp2fTLCLLR9ci5zdbvpAcxvpP3Wbj1Ek3oj6uJpRbyCirfSovE85",
  "key15": "2stP2GhxTijZxbQUitU1qjdzUJeDURrJ7w8gBGdEJpg1geZERisS4AuqhHd5uTeCAij6bYkEojsuxTJ4wEnmPvNZ",
  "key16": "3u3768HrC1utAEm6Lxc8qJkut5yAXnVQdqMFPLUrmf1X2bDi6sgN8WV5dmvXRtpPzfHPahLAT9WFkyhXhrfH6EjB",
  "key17": "4rwss7UeB5ZCSvHuWpJ1ahH46Z7GVPYFCn6YouNo2knknwJ52EDj1a1H13Pjp9DBMfKZQjjLLbM6TXQco15Pf2Ky",
  "key18": "5A2EHcYLZfeDj9mmrzQXAgoY9CFkzLnWNCDi1rsET8Hq2sRYkb355xDd2J2S3D2M9fGMGeVFt9HY5HQqa9RVPuuP",
  "key19": "5oVaLv9wSmatWBoxMtcwJJjzXFeeLDfxMsZej2Hn3rcYMrf5gofGnYrMtMf9yNKT9hP64Q2xauGSSVZhRw1R7nhT",
  "key20": "UYwF7Se2rBL4RfJ8MJfxzrb6AasnjvTJEfCu3iZrsL6cMLAcGHokuC8AAVEyqVLBmZFxeXih7wvNN8fSTmHfx86",
  "key21": "2reVg3sjJRD3P1BVuoAdu8LNCKAW78J93phnaxr3RMhuoUBWKbXtTB7sZ3JEkTZbxCuSwLR9g6sYyu4ypeWPfiQ3",
  "key22": "Fif9v7RDxRkJAAU1c5HyjsPSqb6Z8Mj4QCTD4Y3ACzqja9gdXA2fk3GNtdmN7jwJXRQaczL5tA7ZGa1TFu89GHK",
  "key23": "2e7qAfi66kfhom1Ey2qqcw9jDtPnigXVzPJtkA1GF1n36dF4rSAuoRPh63uWR4qxFTgtWR5QbiuviXuQfZYdiiAq",
  "key24": "iTYKTMDz7ELttyD9HPDtUyZcRakMn9nBKyE3ztGTRNnACf8veVqZiWGPYqwgHPWPKFmEKFnqdhWwZ2BuzpzQ2nK",
  "key25": "25hVb4Ecd5LAoqC5Sw3n3gAUHQT7tpHSdCFZH7rGfnsNCsGkHwfiimgJL7Z3U9Dxp7hnJDx3YrQQvsA2E91wcHYP",
  "key26": "4Ly7Z32TVo65BW7LN8tnrTfbv4KJbMppaFBChh47WhzgM8ARYA1WcqLFtYjwu67oxrMR1zofEzKbUjcVpWBgFqPh",
  "key27": "5DUS9c5fx5TUiQUvrjMxDDrWhCyccEBCM9xn1xdefzDJ3jhzHuUhoarVrdJoRLVdLJyCb8sH1BKWrXEy66BUpzSi",
  "key28": "48HFL8uguSzd21PFv1UWvkmmxhDffCpYs7ZpmmrgzeBajPQkpiYfVhxw9hfZjRJkepEGonPNCPB42fsHqYeDRWD4",
  "key29": "4efEk9YxugTyGiUma5PSugGcY68YVi98gPRHzp3QrvkAV4QBoGFFgQcQDDxZmzCtDVznV6tvZjqhoAnZPx8Pxrq8",
  "key30": "3TdS7iTRJsD5tWpWbUKcWCek377ysTAxEJqkAcYaKeqGJSSjsbetJxUnN3EWme1G2BYrKfkeqfgu62PmxHGnXHuu",
  "key31": "3PsBTTLeeAmrFBBdnEoyNtfXeLNu4CZFMMmoFLvboZSLzynbxUqxPFowx8uVz9nBy7c6hGtfNPr6vn8Tny3fKhSB",
  "key32": "2QAXvJd7Bm37mhzpnrepdNhFLUr5rhFBVhd9AWe3hUxgHgCKY2QxfS932EVfvhQLz3ZYDnpVa5ZEhz7FtiyQKNwt",
  "key33": "3t654pfsdkSCRwtCzfCFG2cDFtbHLUeK4XAvavwoNQdcLxnFpUp5UwR3kYFiGp9yqXfG1WX7LAPP8Gq496w7NuL",
  "key34": "328tZ1TsbJ8vH94h5jsJ5SdvSW7prLFTEfq5UH2j19VX2Xh7rRLCHv4Na2jmm5RJAwruEzemfPRTQnwbtvjokxHJ"
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
