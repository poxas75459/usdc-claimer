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
    "3wQTLtpg3aHJHy2jRMq35zsiFXrS3m4jLQRFik4wP4UEuq7QdzYs2HgHx5hnv2S22RTiZoybZCC2CQBhn4V9b9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vo49gt19Xuc5UwshnBPTGzvJES6SiQHEHhy5Aw7QhVaDPYnvAeHGvsfa2kBkBkwc9QpivfXQEVCPmDeBLJxLvCk",
  "key1": "tznEE1us3FcXSoxsCtBG1fCztdrjEzGCUoRYVHoHncm3cjCU9PmuKzv2Mr3LoW7T9zzp7MRSnX7NRtHYbkNSCGQ",
  "key2": "2aNwtnSSp3CQfdwmbYESAujbD72Y3pdzmFi8eyuX8AZ3tH8dRWFkENDkBrRkbdsZP9rEni8uBA8SEXFRt97zV62d",
  "key3": "mzocfg2haZ8GPXKiJwx3yx4kge2eBdVVaN8Lj8pY1AiQocm8tdMxs2gPui7sFUQVrULzYvHCXSo3QFZxkqYSncL",
  "key4": "1Kwoia6TvzXix8GMMjtfDRpZnUt7VnoUTxDyASQb1sj2e9erQPEZoUm3AtQqNLTeoYmpvyAVcZVeYL2j9DPnxzE",
  "key5": "5HkBiRZRsnp7bi1upfj6rpXSy7euxnJcFfTNiYgWxbAtYiae4YWMzXv7K2hzqhP3B77A5y7WueTBJKet7hY8dvzW",
  "key6": "3EKQU6WbSDoQn5vSYDX8HUtcyyXgUunntH3boASDs7LiSKfrSCKrTZTYzMUB1yQkveCqNmLdDUvXUtWzbqCgGAMY",
  "key7": "BY2o5XX3zJ4aMPJj1ebcFeaYoczGSjbKVj97vicv1rY7wbimJ3xz6WuiwSfyCG8ujxQ8TcDRs4yuaWXRHUdU16t",
  "key8": "3dEFhuAG9LqJy2kXTv6gSHwYQoVNXvzgGgZzzZ4QQbKpEdCkAeB3tx45cYZvRB64nRpUmqHvCTnYit46usJUCvGm",
  "key9": "jerf7jzioxLiUMWYvRMAvmnaoKn1B2mQyCviDkv1RPtuXQNyQQvq9AWbydfwSQrsLUL1NwwgyK4wrFCGb5wMnrw",
  "key10": "j8LnS3hgRSrZ6jj9WnBq745JKLVzvdcMHiXTHX7vYVTsYZ4QLaH6DPDUQB53B54HfduQZXQaJ4nyLomzYoc9jvp",
  "key11": "3MGPtHL9EfwrF9DUGiwAmm7T54Z2evrQwpEaAGJkk58V1SuRxz2RAgf2hqcyLHPKTad6HZeZXb1fTQB7MMKKACy6",
  "key12": "5d7s2SBTJiHgJqx5tfUc33uHubSGWEtbrkDH2dZbT1P1zT5Yo6M97NjK24VAawXwSadsWzK1ZK6cBck5xMF1d5Uy",
  "key13": "2TmKmDsub6mXrQBCq5dRCKMuzDVP7q54Qk9jhCpmiS1LbALcrkmHaUdaZmLJVrw7wEVntCW4snraFaVHa3wRyc46",
  "key14": "5QFx9BKpHTJvWYoN1DXYqfe459xCzNyW4uveRVNRFGrr9nQF8a3jTK1RWjDuMjphfV8YdLu6qLjZwzFPgn7dxksG",
  "key15": "3bML4NpPaKEaMKV9kUKK1ae7396dVu2A1QfM1LzQNrDgkZpipmLi6xgQqtgqcwTLiJonNu4rnmsvRxymgJTs5Aie",
  "key16": "2CvRqZ2fDn2CcHFGGAG3N1NNsj9pdyEejsTR1PmH7CivjxrPxHnEPr4KTidRsm1c9wAV3Wc6g58CdFUtmFcCQjaE",
  "key17": "2nTdsYV7UnFT8AGqrTiC3AoNAwAVPTLUaRj3tKJfhNDojiLmkEXew2TLE4J6YEe4edRS6NDSbZrtAcsQPxgSt86C",
  "key18": "2xacaSXy5MwSVPAWoeuX4NFbvBP9MrqN7UTMqQgN9baohpZTC7e9TqhkdaGiBz4hghCM1mrNuxNGJejyas9CA11g",
  "key19": "2Ktbif6PHdGky8GymmJQs63HydRWTeCLkjEPF3s75yxpGLd2thffgFR4KcobNWJWP2mrwPh924dM5qrgbz63jKMx",
  "key20": "2QMdNWxaEECZPd85qwKocNuzHsNAHid2iz9sejBt8qYzF9ykJyhWpV5qgtmLLBpuoAs7bQuAxVLDr68fFtwarxyh",
  "key21": "2Gw6FfUrkiTdEzVnqQvxziF3FsSgniknsnu4b1QXB8yvPKcczTVNNMqR36zzyvFAHckhoNmwsezv7aDXWF56QVLA",
  "key22": "5oiUG1asM5pKxDYZJhjCD22uNXa8xUyRaYUSM2pfSwR9SRvZgwzaWFsZdUChEu5e9Ef65eUtUqhsajDoRkewtxEx",
  "key23": "3gVYTUzXVWJVBxFW1wfY549Zo7BnrfiHQFYSQHgnXfm7iAgZYBifB4inVGrXuJFUCvTsPTEpGZu1g8tMgmCR2tjF",
  "key24": "ih1PZew9HJGi9j3rvw9xCJQLvxYDsAVt9d188aZuKBMXLP3rsVDyHNMJZFrV1hwdNpZ4Dr7HZLqgdsWmR2npukT",
  "key25": "37ATK7BoB3B481HbqjgqcRoFyowx2RhBfRAdfstPTZog7FyuGyTuLtdz7DPJLAKb9LKWs7apja6nRU2ZuZfYDprR",
  "key26": "3isM917MsuuedThQ2HGcqTDEDYXMdV3VS871ueAbBGZQ4uGDsFnwS5taUmhRYHAjQkJRaKN29oe4dTYULtXFJx1S",
  "key27": "41pxMMQfA15k883zZHaBdmVwSoQoWVU7fahbHYnSdVKGPv8xwi4hzKJvu7HHGNqpiwmdU9yvrrgRH5CcjWytt4Do",
  "key28": "7r3tLvepKHGcKpP6JqnTskeSDdKRJ3poE1QWZiVxRXyiQkcwbk93N3ek35MEEmBeTDB4WLhRBUFGNa2XyddJBoT",
  "key29": "3Wn5TFU9baxBuCYTNKQ55Edyr9L9YCyqAeNLTKiyKhDSw2JtG4wmk93buu3XBuwrCHPuAC9pFUMfKNL912tmL2Tu",
  "key30": "41GVXcsX4UMcv8rySgvdqe9yHk3nMy83oUZ4mxvudZg1bCRzcWoHez46vwgA5UXRC1icEeuyUP9d4xWBEjbCsQ4M",
  "key31": "3VdpV67KoTZNhfMXBZ4hJKQzsde2KjVtRf6hbuTFwGMWD937FwYSMpuNJayGcFgaFxZzXDnT6L83b5cT9fANZyUM",
  "key32": "4eKtsLdyHVm2F7pHiqWApJDUqtLfL4W86bS4da2NAT3LUAfZaEQXtvz716xbXXZhdsB4kosW33eM8ning8UgQ3Hv",
  "key33": "2XEfQUdLxvQPxPfGS8AhB22hy9F3sn87cvZjjpUTBRWoY2CKpmxrhBQqZ48sekeRECEPk2Y4mwRhQnfXiMpWhHuC",
  "key34": "4uv3wS5QpfQwnw28TGuYvAjiH4cxcWDhAPH7WeXroq7sWVZBLDoPxc2mnwRXDiFUNkX4o437a5iN5x73NV7Mq3Xn"
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
