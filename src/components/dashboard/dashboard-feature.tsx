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
    "64UxkGxJPuogvNxXqVdTeboJUDXqhCZLveUpibTq6ZnUpVPpHcbKFKH3b6Nit5DYPQJ62PKPfKy1VmV4qujLTjuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7TYHshVqqJBm1k5MmQrnGw3UhF3kDP8GJeA59LZKEyX4rMFeHTEvocFdCcZgUPDFPPjUf6pSFBhMbV3jNV7169",
  "key1": "3zZDhXDjTH5BPEfLuwGzpH3FesgeStTe2Ky5tpvEKjHAKvPUJjD8hSCq2iHN7xMHLcHYUvc1t5fe1D2zMyUpqFdD",
  "key2": "51M2d8wLQqtJ7n9nmrFQv2Ta7YHqU6tLNSprZ4uTf6jJMhm9o1EDxtGpM5LE2mVdT5Kf9dHwJWzp5dC5jneoC3Zs",
  "key3": "3hTjHwzwBTQ73gCqAF2Tzy5eqDYojoUo4cj8wyzvP5soKeUM3EfVhskDcw7BkGVYXjskewFTjvT5YngLApD5SJ4n",
  "key4": "2a3vAfB1XsLZMQphtJpeDU5gViAYj4VBnSPrXftHvEKcRAURhshfpmvXxVcA38eg2dCMYGTvBuPYQikQwmoR6ypq",
  "key5": "3z17GR8NjFAwdy1hGQchw8ShseYxPfBSGeB6qDgUjYwZ56cCf2oGV4jfUXCQ8b2LvUYwfprN3Hpt6jeqqKAN5DM3",
  "key6": "4JBA9NuQFzqvVuiXSgoze8EjeyXGG9FqtnYrJQXduypRhNBMyTDxVAq1Nm3r3K3fQ1mH3QiNz33GV2gZiTHuM5YS",
  "key7": "sMte4DXjEHTkrTua79mDgqEojPQhuE4sTfy822rBSyXGNynpaob3nGw6epw65YUi6aKDDcksF4mrjg6CRZVP9Nf",
  "key8": "57AZF5aKKAYge2ztJVVGUR2tgjYFc58ZbQVqUXweoo7hcbULUYkXBRaVYZJDw3L2BEb18gb2obGnzvaxHM5Xij6q",
  "key9": "5fw7howBZ55TP7Y7c5Ch5mmVywdCezQC6jpXwr2bZMT2UYEnsHruKVLCyneuzwQFz8dqhz66pMqNYn2YJKmCG3p2",
  "key10": "5PDc5bvCNmi9atJaWbH6D1GGkVZ8NaRrcm5T66djccs3zmTAygjcpud2wxN7fS8foGJ8pxb3NDUdZLJGTnewTBoF",
  "key11": "2KMZL6rafdyU3sBgp322jJn4QCUrHg2zGHgiVx74x516Uj21zZThSxCXHrxUrv4rMVwYWBcvB1mN8NKtKuaBUkhP",
  "key12": "622oJvoAZ2kAvzmWWPavLuzNNfovYVcHJ7WGCCpx4rW6vuVruKbqxf5LxaNBaPhU8TqrZorCWGRd1S9mXsQaTVsL",
  "key13": "1aTACgxkPgR3gTPJLdwRJhSaC2rFGD3QCDUechySZ56bfRqHe7Zaih31bkm2HFKAdg4CioJHcFv5fokEknsZG3a",
  "key14": "44pRpPHd73GudfmRFgJEmCvTC2H7NiRcx9BYY9sJXcboipttAB8nsaaerxgvGBmPSA5UyLRHCihY2Gv3GQss1VdW",
  "key15": "3CRPMJV2gVa74isR6gCW8GUn875uDjMj9bLpeLazmmLpwc5eehigDc1hzjzoRxp51YgjN6FsKizpdPrtZQLcuzLB",
  "key16": "yYv4h8fNGeHQZzssCUn69eMpoUNYWDXq782xvDsAJT7zFr4fFWp4ojgNbqksJEu8poarNXQcxNNCm4wPxgPiiaY",
  "key17": "34SWVMLfo7P3dKGiHy47Y5FgeJti8MzdmmnbmvjTBEjLVgg7Zy2Ck2K14hWbjJpHJYVWJVrFfENpPziYZxUzvmXf",
  "key18": "5nA6cDAj9VU2Rr2X1ixbaxAWyUwq6bYfoABVsze2EBiqhyvL4NcmKPiEDDSNTCfTptPsvT8a9HHA5cUU4c3idyfx",
  "key19": "5zY64PmWPvagyjgaWLKm5ZsDt62MiPtB6Wo246mVrtS996KeB27wS3y7rCCoNV3gcYnv7i6KL5qQ8EktzevGpAum",
  "key20": "agP8rjqekbpQ8TZTi5iUpVmCcdN6iHq943nJAgCpXcJZV4NG6LQwB31Gp75RraFh8nAAuY4vnwFSYU39vzTDtSn",
  "key21": "2dFUQ2ZZpJGmEXsPnU1TeKygAVi2Jyj9MG2MFUhoxZcPwUHzjqC1Ykpq2pQvLR7b9QVa5vFf8jgxYGJXyFWjFyX8",
  "key22": "j24H8soMMWTZAycyeHHgZ7nmR2MzDFF5sV7x8VH9Xxb9GPmpMmAk7PFhzTgJNZxLSBgwsa6NKynydxD5heo8TrJ",
  "key23": "43tCirsiQaywdbtre2b7vvABtgdm5qjRJcPq3SYLYtGZ6CrrhUv64K3hj6Sd9Lnw97zhwLmp6NTHZYJpGaweJz8K",
  "key24": "5V9Ub2w6bvAWhdaNsbxdgH8VycwMx5v4Eyg5dzJD5dh9UPbskVeyRj4YYKDpjsQpYLUQXWy5jtqgpanwVhK7Zveq"
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
