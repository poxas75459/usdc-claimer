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
    "64wCrNNmVAGZD1wJhdTBS9cvwwgbxc7Ccsp1d1ercbL8Yfj8hL7nyg537TJPCpvSuuK6jwtSSYkQ7M66fgfeuRpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fkVijKzZ3EyexfceihdTebsWJJGS58RESsPR3q26pQgoZtiF17VHQrPUgqwJzpqFKWUfjVXPe4tTVq3ZzzECD55",
  "key1": "4RF571CCt6GNwpuujL6q6KXhvAiCXQLvBDw6DhbV6f6v5rwUg5MjGRbPcFTRDKFLckAhpqmPz7yFWwVZ2h6hjP1a",
  "key2": "FtzjDdZhxLqeS6B74juqMtAUYRBLNnBZgpQePCAfyfA9xNJVZ59K223pCL7qQMpY2ngj5b6xqvJjcMDdBWfmFGu",
  "key3": "4LVNpdJXdJKxpL6Hez24tJDaYYNd2VmNBkDTf7yQc14G1z4iDLQDUph9yMJTm94ePg2ZRAdgQ8Gq6EyqcynRr2BH",
  "key4": "4z7BuT1HqAeWoSQbYSA4vGzosodJjf2M5TiTy7tQADUoAsbpn7LLAbmMiHEV7qhiosuRfATxPfXi91VMEUcTCE5r",
  "key5": "4jszUYqY9yxfaxHNPaEbYCVG3afLjjLjHo1gincXxC2kGoLRapT4kPNQKZk8HsnDx6Y5UuXoNmaEsaJ5oqJHBqKS",
  "key6": "615dUf5o4xhwZGz8tXxVX4mAzxhbXdmcshp4mT5985Sr6qSNgoG2UMS8ibHZyTZrPNgmGL4F4Vz6phCTpqVsqUkV",
  "key7": "282diagPfd9rfCKXvHwTcwjXDPiVsto3jGm4dQM5r2JK7rv4Pn1nnZfG224HU69EzWJrrnjRmM2GDfDmxvvbXxPF",
  "key8": "23vrakk8zJ83JG8uEx72LCqLoJWwgzhppBg9dv6K6NFMwBXRvbENpytmUmuYMHCkjjCUwTdVNV777FbsqJMmr6yx",
  "key9": "2ZK2PhTmHzZ3uU4QUx2HiELYmUa4262o1GMzhqHnPoJ75DqJnH9ZeMYR1FDkGvnn1gRHdRu51qE6aWYyqQscUiqm",
  "key10": "5VivTBikYFXwvoTePk7SbJBYXHWsoWmpCGEWBkwhHDaxmJfCkLyEA7gjkm5hM2jwjnM1dKwfxsPP1qzpikxEYPH",
  "key11": "32rhBrvU2tJ4neBvFVsS3nLPBW619b6QTNf9s5ig6ASTNXHvudLwRKNK7KzM9zeSAy2qKCAASMFbxC4ZGFyWGSV7",
  "key12": "2zNKuvkqJaRbG7T6CR3QpRjswSNQZEZhFzGcx1WLWFq9BFKdYhQEJQ1DzVFePvyn9KcSN4cErHEpenoQXKSuHD2c",
  "key13": "3ca8XyZG9xPHaA61JXywJtbqNMhVJJRZRkNQ1cXb8kyGTLhzoKyUcWJ9Je5zHAehVBd4BrYyDJbt5kfBgKxgCqX8",
  "key14": "5M3tfWdxWwTNP23txSYUpW313doJ37BnPUeSsGHxVMmM3ZPvhar8W5rVvhpBGMsbd9ZdyKLum88UjchPU7QG7zc6",
  "key15": "5yVncbL7z4NyDhG3CJ635Rk5j1u8dnUi5WhJsREpedANbjGk8WfTCeH3wxUpXhiWvCuSqCcqGUrZ18Y3rBf8J5g3",
  "key16": "2Fh71VTp1MQEmvqvnbqKmAQiy4eYunqyeg1DCNc5frKcJp2wq1orKQZGDvuLRUVW7cWqbLgdmjAaXEYkKysrDYPX",
  "key17": "5Ao7pwAMVRZYuHeFr8bQtcqHWRuTsPePpUjeKFdEf635joaGCq5tGcC4GWXdQSTUqKF6b7dbL81Sf6ER9jwFYo6v",
  "key18": "4HrWRJn9hhy155FYp8R9TUnJycR1aGLY7otgx1JKfaMQ6FmVCuQvdQSqyzJngVWTAGP7Ztm3gzrdrweQJB8Cw36Z",
  "key19": "4bTigYrePHNcS3JF95wjiZDDaWyPuQfjqz6K1R9ezPnUis7iYpVzmuJbBFaMYpwSxLyiefyMk2wK6QEQ64YPP74x",
  "key20": "DsSFYVv9k5ZZNxrcNF8Sr7gMDaDUTpgg9sy5wupBx87Cid5A9LZJRkxq3zEcVaXnWrwoUjQAK9RxurZAi4Bwmsu",
  "key21": "2VtKHkybPkdtUeaEZE6WQRB5z8swnq77qeHLL6wTxHK9EHTP2r7c5QA5oPDQWHD3ZKSL9Xs46FBP2wDjP92vHhNc",
  "key22": "2ZhEgkB95bCnbxVYCxYZWRMD8fTGtQCu7w3u1DV2MuF8kLZ58Kc3J4D4supML4jWdReYnYAhPHMYwHmFUMaWnWsL",
  "key23": "4HfL1iwRoer7wKRLozCLp41mfFoW1hfKwt9Qy3mrs5ejhrhieH32SCyAR9FUN775LvgGiZzaCyGfUKBc1aCdjVQ1",
  "key24": "3vFdcNxg6Cqbdj4H7aifJjJ9VwpS7NiUu41eBdukHTtwMWSMuuAYdZ6LVcSWAKtP53CtwWcyifZAVD6A9fB3TGNK",
  "key25": "HZ2FfUjruL72Y2kRSu6dAy1cscWoqf5BcFQVDwinZhsNWPV81SjdGqxNnoeKz2AaXprf5XGQYSLTbf2orix84nB",
  "key26": "5z9cbJXDE4NamRmWuMdq4VuZVDGWmd8wutMFQUtqHkvyCypKXxT5TSSWTy4zXwYvpSRgUReGos7NdKKccGXpoRUd",
  "key27": "4E8wXPrAas2abpNoah2C3cqrDYgEUD4vtmBUCGomNVNjzj2d632TxvXRqf5NsbnWuYWqcFF8ZdE33rdHBhEndHVm"
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
