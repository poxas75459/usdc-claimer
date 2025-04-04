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
    "3SwM1tEhH419Bu5jZ3xGhWVnmvBsDUCjmLxHPYcJGVUNiUuZUVivog4UJxZh5tnfaKy7STpdffKZy3YMjtqrQvHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47S2ybvvCZAjWTrEovEkZee5BCPZLH7TXkyTPAvqxXbsKE99S2kMdHhPV6JCG2t55GNArGMyu9HyXKoGerCtmm21",
  "key1": "25RKB9LY5oPJFGJ9PC8teKMz2ahZb9BPxdGtcvCeLfecRr62fNYdEATAzWXFnBsrvLqSahf9mDQD9nycEiwSbcra",
  "key2": "nvCJmvAwxK4rWJPYAwNLbTWeJNGXkBEXwJTBibzTiPXL1Yegp4s5CDTuxhAd1T1E1FbqeUCE1cvhVPiq83GXGFr",
  "key3": "2PQyuUJcyhn5NpgbtgS4MWt8r1nVebtn1qqYQ4HJMX4m9k9sDfNBSzboGzwDpPg9rHrcYc5yAkTfZALzq9vtoawG",
  "key4": "4UpxTFdQLSe6Ea6mRKpyskD5SBkF8ud2QRsH8vmWnRCFSMG5G4nAbYrwXqeuXoMzmkbwK1QzbB7BKaRXrTsFE3gv",
  "key5": "45G9h1eqHR9Y7Jw4cLTyceXvSMhjNyohLvQZT6NmkZKFNuw5vaSkfHuQ5knwbQ6z1G2rwZkixzPjTiAKtYHuDnyM",
  "key6": "4Unk6x47NxeKUvfkRRTXsKvWY9B4oTkwoznMS4r9iWVjWDoCgwnZE8nsJtGjc8VnYUkZxfRMvFNTow1VyMYSbaNz",
  "key7": "Wk33JGMPDoBT7D13jzkPLuxaRVGSU2Lb7Q6mF4Z9TdS8YfaHEnSdHmnWx74hw5CWWffzZHgoD4S26tv9bprm4mZ",
  "key8": "2Kdq6uuYhroJAStKzmQx5AYMbjiGVo3k7Q6j9QE7gpLKg3eR71SXYe8qKMwyUt6683mhVTYmaPamPpCor8WK7azX",
  "key9": "2p4Zrxgjm8FoN3QpCxcE9hNcZKWzUmX1UHfPPAxbVc9u4BPUiKHBYPDEBTfSwQsP47bxRHz2HZV8E9o4NZzKrvus",
  "key10": "5Nr8b1rR7qXuxTSUkMy1bgfVKzcNFE52FdL1Yf2B5MNch726kVamWXksCNQWdNkSALoHH3GzY6rvLsFcBVxCayhc",
  "key11": "2DA5T824SvTQHB47EbyzLkBXbMgohbTxcnS12fnVMYjFFQ82Zk2jrF8EMeZa7PHeHm9Bqrc5WUGVF8hYMGAZeRHS",
  "key12": "3zCphe6H3qwNM3dsfv87xCzLfBY2NHhQiDPULfx5ic8xHyLbA6RLp4peb4GwKb1u7gvdb7xwHif32vGFDrd2qpEB",
  "key13": "VTQfKxi6ufCABQUmh8VZxnwe2Q4qcEWdbLDcG9XZVGzMjssXneG1BVRfZEzKyMbeL2gDSvLfvW7qjsJogK7QqSo",
  "key14": "3Ss3FwZUtKzqppU3Wx31Rm9Xss8miTu19d481mBJZuXvFxKJqtmZUU2vfWEGiQr7pRBdnET5soEUjcKd3nXczNAw",
  "key15": "hEwzJU7eaWGcubnq5XDa3UVANjRDYS5p4awfsJXyZAgP9rjhQz8ZFoTLE7RWYUPB9qSDhBxAi5ExoZUwMzb5G9S",
  "key16": "2JPUvUo7rkqHD2NeAbQ2u1WkKHWoKJ2XxUHP9yT16bALajxQcEbZBedes7bwQnAKSNzkBV34txqfmPS3KjCEbLbd",
  "key17": "3jHki389mvLsGXqYeExFVH6ijUZDEEz8B8Lx5KHQa84vL8YcmB2kQYSKr4JVznoKdihX5MpBiaHzXMtGpGQWsuFu",
  "key18": "5YNkTS7sdGJTNo5SEvTaCmaXNPJV5vfuxk1QvN5edQvfHbeZ7uLdRXojoYtyhXUNxLPGjAVf2S7WkDTwS5Ry8ijN",
  "key19": "mc9DDSKZAZaje8RS3qcUiP9Wjy9jqx1EiMxXK2xYGcP7XDpnsyKMNWBQ7TQ4M6Qq7PUBLjYnyygWLV3ZCdj8ep7",
  "key20": "5XSKCtTpZzPfFGqyRPFgnR7V1bMuNuES8SRSfRxBHCHqpfHmi64TQQbyAYnQKKWtxi3BeGw1nDnFnzZeGQM8SRYj",
  "key21": "3UzMijhbcV4fovGU4WwX5XDGLjgYgacoSMm2Z4KJuefv2tiTgHuRaxP3wTZrAaBhT8AtiGHWy5nb9qWhtAjPjEL6",
  "key22": "3apfXsZAzks6wpvjhx4Wi8mKTQLpx5XuCn9zmCCF6jUx24MmXaQXWudyWXimKwr35fZChcLn9ztYPgNiG3yUJfD6",
  "key23": "3HGkuTR9oVQGwNkud3EwR3EMyi3m2fUoKBEoZofgR9FBcQzm54SCM5kzkqvJBZ8iWQd8eXeCvBoWuGkTMUdsxFpg",
  "key24": "2XTAnRGjqnT5ncYa5YumvEYJhHD2NUhtPTEebAxbZz53biB4Z7dwnRKGJXvvPvdrtFzjaEcYU2FzVQeYC1HBMB8X",
  "key25": "57387KU1nnNwiFNiQ2vdkffvf1ZvLEXuG7BgC3LVzp9MwXsxuy3KCSgvEeewWTYwE1BANR1NiiLtoAZgJUWYgEJs",
  "key26": "5avPruJGa7u993Rrk9J7aAnF9jjMisHjVYAg3XP3Rjapi7sGc5wbE1Aw7a2X6DPZ8byzcJkhN8Ke9YQpsM5WT4Fh",
  "key27": "4PqnQWCn5yyyziWcddxHu7mbdzWaUXj4gdfFUAiuaakwnR6SF9u7WGsUKL3z7akXWzBrg1QHnAmb6cvFgBxqv79Q",
  "key28": "62gsF9KidvcmfJbWoZMXybr3Jm41ncZk9RjDqGPS8UTF5RMKqMnPZGBzwUtXm8jYP5Bmyw96Zeu5uSrAfAXkWr5K",
  "key29": "4oUppLjDrWTEQnq6vg1A7sdoK1QyDJApQDniHGhJVBHDnk8b4zmczj7gxPcQUxrYBrjKNT6ZxNgbPJiBRfci4zdr",
  "key30": "4dNKQos6RTLdf5JgBqLFm1zG72y8HYUEqBwHTEJbufMYN6R67Qpk12KFUAxfeFENsDdKfN7iHtFbHmjdW2mN5qcm",
  "key31": "4A28YANq4C2bRhd9EidXwDpATcXdMQtcCvjTdL9cbcGLZpZRMezHnK645t748TWNHQmvuEtQyEta2MFKqVSRJzBH",
  "key32": "53J24u2vt498QbczY2bNz3AUUshp8pgUYcP5sZXxs1oWHJsnhdhD2vFNGnr98L5YTDerbbFqDHxmj2X2aDYaqGau",
  "key33": "2EpJdLbosvqHXDzL9RQon6Rm7MqL6buvG9HRSKcpTCpmqkt4nPdom7UMzQ9ZL2aXEFd7Lsk3TrX5e3Feu2YqC3Zg",
  "key34": "34rozRfmz19Vmoq9FxcPhT1RQxtPiG9TTEG1y2P6fn34VegvS9WRuUnaBZQo848eV3gHYXgftBW3v6nrxSEgRfYt",
  "key35": "418G9EJXyLiw5LaKGsAwc8V6q33FnRSVk8Vh2VWGYqYL2eng2tKz3kGPJAaiZR9rBTaDfgYwT3eUeNjjDgqLYsPe",
  "key36": "4dDHd3XBirNGgUacLHgXphkBUAAXgmzkV58qxhtjxUUw7aZYwPgYX9W7xKHBbWhKUmJMQM4nndm6X8us6z8xDhEU",
  "key37": "eVPcabZoJgP6ZBvn3BTruqjZCHrcAYfMGgaVCvuwAWsEak6gPPu6JPj1fQLxcbqFz2tnwix3rQRPdd1iVnia8gh",
  "key38": "BESKVohyMA8NosYJVQYcDk5ttbNH9vEdgeP42RKLvjMtQFdDbEZg2hwQBm99dCEg1A59rohHCbhst61NvAuTSws",
  "key39": "5hs2tw14TWsqqsCzAksSRU5KkwJFYdheUfvCkRRft2ZGwqUKiHtCnPREQVhTvMRDU8hBuqLrAoTWQbfKRRjdq9gu",
  "key40": "4CyBRNy9KBCS6HwhLTSCSaQksTrKWGMobUQ9CcQbhkWD36U5otbP1tThvDZf1KYU6fbg4fgd4rdaCvBTPckLn1QJ",
  "key41": "4WJYp3Ek2oFdZuyALtiUZzzKvYwYHcJYxQ68TUfzhXqzZYjWRmWUCM9NbnyVsDqpgQkXRUiyzCjnP762qvbHxDjF"
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
