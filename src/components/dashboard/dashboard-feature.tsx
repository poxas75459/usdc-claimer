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
    "55u5FHzgqy2XxGxfaTLaeyQvdhYqiwgt1q6oYY1HR1ow46nzTyGK9fAm2R1xGGdcRg1mBCw7dNWv1YnFC5W5mS75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sswkpE4mm3nE8E7gxvdj71wkwRUn4tERXB5XYrp1gYPVRHdH69ZYRgr4cf8skA29tYkf8Mu8SPFLQ16e9jmqtNp",
  "key1": "29CivRGDd7T1EW8ZuMm4r2qzuuXx3qEpJF8JCMSvjVvuh2mGuQRnmA7f9V64ajE5C1pya3Bod6Gd1gzAvHvu9T3H",
  "key2": "2MTjAqN2xTWtghmmnYuctsJqz3RR1nvzgZTVgUNqzTKY5AJEz5JAnZ2F1j21khP3ZXLZo1A9VJGSpRQvNd3ktf8U",
  "key3": "EyLGitXMwnhN9NL3ePiKrcTqjAzVkEsdv8t3i76uBFYskWNs4EqdP6SZrAWXiHcGSXEQo8Sndgt5SS9WDq3jvu4",
  "key4": "Xc1pRwK1nicgd5iAgDG9NKgACbViuvAhp3stcYh9aSFZo2r9PDN52GEv9Y2sBoZJUgKgw5rEK8gJHjPbSeV3pHV",
  "key5": "jiKaz1xd2Zq95gXZW1tmYQkr5m8QwJiFMZrSA29asH3uWfEiKwJVqKuDbtn4bJYTUBAcpJ4LzsnfcJP5nx1Pnvs",
  "key6": "5bzgTJhxSahJ6kYiXRJjWwtbfWevtxyGGKKtvo8v1Zzk8UKNHdUYZ59VisEVzeCPCvADEL94BAXoqF5VYwGDPvwg",
  "key7": "23pKTkHFRWTqz1vH9xLx7wpA4EVmbvDjvqJ9FSvDn6hmSbS3gMk6xoQ7ZL5UVtzx72bp9Bq5SeH3Ne2w9qPAqVDx",
  "key8": "3VNXHj3YRwFuhpCRCCSX6rjG6ZksNdiLS99RrZmtCFponTCh4UG7i2rjBUY73KYZ6mb3Th93SBnKLr6i4VRoKSq9",
  "key9": "5pHPSYuP9pJNqfMPhBJo3P6Ton98xHvLrW88fsVQYb6WE2iG6unQZRYF9mybqbMp6ciok6sTusQc2jus5tMXfUCK",
  "key10": "3g4Svb3b22TnM3mYu2fzyWEg4v7qDuZwr58kXo6dxdp1NPLALmQeG34wV4xCPFBLzkC3c3MAe1H7MEDwwj1fqWBd",
  "key11": "39ZqXXEqTVLJCbXNkfhyhHEQVU9gizdZj1dRYjToJ2AjQf9MPuNFp9DoMkXUev3EAcGwBDgPAG6RAxum5BuF97YT",
  "key12": "36UfENT97kDAzBrwJfD2yrpntfLwyQ3k6vWspRSr2jKvSHvXq1nC9KB3dYQzFzDPjZBQk9v5YeKddtBQaBtNfQwz",
  "key13": "5w6nT67ky4pSprywsxEbTReVWLxWkY6KwT6ocfNXnYcPPkuNUmsEDsUvVGLkeFoyAUkGJNnjfvxY6k529yTn2DaM",
  "key14": "3Nv2Dog5nZW89EnaqeYnwFPmKTsJWpmh1X7hjNQHWL1jTf9wCQneFx2S19vnUuxMvhRqM3ffCRxiR8Xx4yfnDB1a",
  "key15": "3DdN187tBUq8KK5LGurRwvzVj8ncaKJizXhiqFSyZ1EdjnnSMhE9ufHqkVBbMRxguX3AwXGMVXYXZvyqpevXVxG9",
  "key16": "QGYbUwEUfvNbXDdAVA8rTUJxvWVcCw6CmcN913mJxZFugPHcDPP7hYS7knWm2kCUkrvrGhW9BNPQevo8tdXzcZS",
  "key17": "vxAGQUq9Dap2YgCaiphcyBak7og1AzBfz9rUCQJ17PbbHuJenYLXwyMtesUThXTSwRG21qu5XxnVbUbmLdb2ku4",
  "key18": "5fKLm29N4WVZkCUauNLWDggPbG3LL2khTcwL4YMQdPmEY9q6uoUL1uFH1fKtcuKtzbjdzvw3yRnoB2ho42KP8k5D",
  "key19": "4MgBstuim9i5HcLbop1YxDPxB7XgbM8JvRDyK4q35KSCRAtNoZpqLN79WmArN7e5zggKgFGjbWW58VxfDdbKCbc6",
  "key20": "5tkGsh9NTu1EeH6xn7fVMcuV4jpYHnUW2EBn7aa8EbQweiRtxbJbX7fAn2msstAfv74XMskKMoFv4VoFKM1KvonN",
  "key21": "64Lz4oZ6gu8it4ATFs8pT6xevzfnPNw9BxcRR1ECuWZEEFfVrWfWr18YuuMcJcGEzd8ShtnFwDAe4bHwN7p6DXao",
  "key22": "2xt3EH4WYztJSYPnYVi6SoJqhsRnu8H4Rp2Pntt8mcZ9xBfDLDFQyEnmTcqk1CxUwsuz7tbRj8dGXHiiHTvpTnKj",
  "key23": "5UJCtukWNaqQNUd5h138H8xspYSHWXLEBhxUJwbBx4SrhPRvrTKKpC6vbfDnJ93Y1qUSs9sd3vfCdfyYx4aaRYUf",
  "key24": "4zo6WjFj3fihAAXp5mj8QSkWnQEeBeyvav3g6T3CCCq2F8PZTsvj9W8wbyeUZCyZyHHdHZAjkkJhVbcgu9rQABmj",
  "key25": "3BGoThKPnWHgmjReNHDKAYVNVcMefj8tuEYgXpSCyLLsnPH3ip3EY4JaJfsGv8CkQC87hqLVXJGHEMtzowxRKktV",
  "key26": "biZNJPyjVrBQLZaiGe2UUzzhjFYNCTvPkAfnB6sPF5q8hs1rmFTppqVPAUzXGW6U6e5BjGZgb7A5yCXwinSQgNT",
  "key27": "3KxfovRSa1Yd155B2zZo8rVxagEUunintkzD68NJu1qHxtuyoUMGjjJvvtWpaHNLDF1An7P6nfBAB2WooLsfQ4sG",
  "key28": "59Es5gyQtoJwHb438NwWMomWA8wjth7XD9tQFePhu4pSuJnjafin9ZsopLmU8upawmeaLuDYVSSBWXT37G5rA4P5",
  "key29": "3MF1i4dcTUnBnQFrt3TrTPoFV1f6yUFko7ayZAF9Nhccepek7avLQTRH8NTqqxcFCMg3Gq9h5HAszYn58SYSiEBn",
  "key30": "22gydRmLtgGemz9THg7GH3s296qn4nVanmje2THr9Xwfb4qqWPeY8aXj7rsjBysyhmMbtExfPhs9QQSbgoVcAdd1"
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
