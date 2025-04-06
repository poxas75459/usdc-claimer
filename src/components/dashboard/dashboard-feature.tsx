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
    "61Xtf6NiE3AC3EPiYzBzJgXsq6MBNkp3kKawRxopspkcJyWusGXe3MAzVmTTKF1dBvgxpu2GD2bA63Cmznu2fwYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XxtkVioEynZYujoUShnNCqWGuNkB3xNdvz5yxvfytkhEzupaZPc7xNTxfxC95Uzoi21RVnq4RHicR4cpZkxUhJB",
  "key1": "SshQDeSeqeCeJPxQD6zei91WPLN9LmrxctrgcidWMc4Ug9Z6MhSYo2XmTbqRZAG3bHDBtdqJe6PwR2V44ebSuwK",
  "key2": "2XyHiTs4CpRWt75ao5PVTmBbq1tQtN82cCYQfdfz4UHgYpwNvhLk8gpQz6PdbsyMXKSS36VAVLmdo6DjNoKTjpFT",
  "key3": "k5jbiRcJjT9bVYi51KrJWqz57mjTsgKWgv79qmuKSaLvAy5hxPc3Zx1YbvbsACNUrzxM6jqPkHZB8k3icyoWY44",
  "key4": "3hKta4tv6YepPbNirpAdtCkd7Xs95ieMqgEC4iGEhhKaRL5S5X5FtFWZfW37ZEPcS1aH6frN6itusSqA2dffguFC",
  "key5": "5LNy8vUTQR8C5XsYo73HKW2LH2Lo3m7XyUyUREYtppRNhihkaJTgN3neyRexTk33jQP72LksCAKqGnQ8JyjexX1E",
  "key6": "3SXriHQUbiKiXVhMkKBtWED9TbVrDXsrRys2ZKnx8BxqebhLSYkqvuwFvXhAaiW2g81M6Yt3mnZ6qA9t3dPmDGab",
  "key7": "2Pv8s7u5NvpXmdNkcZfrwmzY2jbJoohf9M9wur2esaEEnajbQqRPPoccXwXx247CRPKpsy68RepfN3gEZzSrx96X",
  "key8": "1aZs19FXEDXWvkfo7FcN8too2yvhqFyFKhLbhPDmK7mUQTmBfoLXXFENsw2wVtXxkPGL33n3iFmAF7Z9C5fFbjZ",
  "key9": "2TjtFUv7hLCvUFi5g6edbv4Cv9M7Shxede9nYSFvYACd62t4hPCdjjzK9JPXf8WseG48WobP8XC8nLZctWFDxbKP",
  "key10": "2TMN9bDL6FUkjTeJ2CkUosgjA49GaDqFDkNZU4nkB4hug9PV9t2JBTS4mXX2T6vjLuYmcSLLr5vXQPMWw1S5oy6",
  "key11": "TypKWfiU73KBaJ5iv5dv4z73qWwMbdfZ3myqNPH6iUsLcWcfj7pkshftFXKULkD7opZXgWRZ41xNYXhm34zn8fz",
  "key12": "2JC63roUsmkksna6Dg8drQReLEUuMyDyjHz1SGQ7hKrkKn1iC2FHAohDPMaa4N4B4r8xN56Y5sd1JucVDpvNjQ5j",
  "key13": "2EPLSh7BgrJ4viVhMVxT75o6RXR9FSVTc8o3bPgMffaKB4PAeQp2imG8aimNTTYYH82Hg2QWTFi4SzteLzBh85eg",
  "key14": "nN5zLxvvVh4BQT3JxojRpmGBvxo8cEmxveB4VmFu7cXEHe2sNUdukLFi8gxFeTFc6QuFm8NJ8Tvq6zYfP3YR4BX",
  "key15": "3MQZ3BMwmmuDKgM6msE6rkMWVe4JNES9xkU7Hvie2wJ85BGvcWBcFyRm1QehZ2azjinGi7chKKpsU5AF9sP3wgL2",
  "key16": "5XesS5fftegsr5H1HhQjnb23EtPQFNDG8CuRwNNarkzfkE25zM9sM3mwXQ4MdhfrJbUiBr6ex9tZA4YgcC98PUes",
  "key17": "3LPnmhN6aSzA1U28fDLVFosJLDT7hxBzPW6m3585qPBQWR7dMuKSJ9XvTZhDUUVEGwY5JVyk1aKTsh5Jy1ZrV3Nb",
  "key18": "SThQ93MDtHJxZ8iqufiG9FgTpRL9uszJ4VuCu7yb9qnLx9vtw4jxkK1bY7M3qAewdoAfcjVQgyi4g4wHqUjnLKM",
  "key19": "4X7AcJJN658bdLDr8cpqfG2rXyHXwBUeZ8XeSDnGMJPt3Z3K74PPU9qgKxuqfFkL92G3615Jm5SXXB3ve6HZszTJ",
  "key20": "55pQpXXd8SXoJv2zVt8VXbZAVEps66MWpQ6V3vfN1Kjwnps353rkMeg5VYa9zxa1jt5BQEUv2hWij5mfupPgLEmF",
  "key21": "59fsC8nPRBKL9sKMYrHRYxwAnKPd1sumVYGt6Hhq22eX71Tm5j59vxhLmGvHNwUPHbXT8vJPeJ5kw2ff4Ra7BAgZ",
  "key22": "4rkhWDnnacHBvyhkRfmBSGzeKNtQ2vQnmhSbTJ7BVVeoWsYBo1vKbKoJLsXWhvWt8FgHJygrffPdsa1d7C5ByVDY",
  "key23": "3fp3Ledb83rv72MK9eVfmG7LZ4D1BJKrx5FrAh96Za9T45WUrMSmu2VWFr9n2GDgPMV7DrnEzjif5kyz5vBSxHSe",
  "key24": "2QS6jVQ9SNV1odA2dKsYSKdevoBx9Vi7c6GKtw85xZj8jEaUtpZCfHMWuJdt9frWPMqiXsn3dH2yd47N8Z8UbsNF",
  "key25": "3ruZHKFHyVrSKD57izYwv7aQ7Vr78KJ4b7unMdYXgxYQF8cZQU3VDu3weqzNAcoEb1cFrY5Jt3wJvVeU389YZoyR",
  "key26": "3ATPnjQsZK9xiTVQJ2NrNUjH5CVSvCXYQdL4KADy77hWUZgAMz1Jbs4uPxSNwNQVNZWmJvoBsTuHVs9fMJ2ks4ur",
  "key27": "xH1f4mBr2To1VA9jcePnZdQzR3mXBkHLfNNDDaYj5ZQgi2qFcBdQXdNCySncWDY3FXM9uw9VVB1KQzqH6V6nLoY",
  "key28": "4pY5csVvyp9VQ9TjCUgRyfGMzQ1UhCEZPDaYy4dNvuntRrpHdC7f6UbUjfgapCfJAVBVcC1ngHEcNC6dWGas9kLL",
  "key29": "3yR65w39vYV5433fG9WQ3aeRR24SdJdeEy4um3zSg27ZvPRQVZv7geL9Vx71sg6vjCvyzwBUGsw6vPBhGnTRGbnv",
  "key30": "5Mpi9ga3RVdBiWNNov4aM8ZEaQATiqJncYWTRa3EA7NHdKyXGfNHL539RojJ3U6PLSGi4CCSvXrehNaNJu7U7UpT",
  "key31": "2uXHeHNk2f7wxWGTmkeezK1VrQXgRwkhMnJx8TYZemSvi4NpPYC2FUbwmb5ypvzPHSFJ1SW2Q48vvKdgiMFHPDjX",
  "key32": "53akagBcACcVEk18ArnYGNYEPkipnfXvb42gJFnWzNFZ42AKw91uHfK5XHGMA3Ejsqr6o9ynrZFeEDzebGXJvDHC",
  "key33": "4STjVGxeFZX3ZZitHvJEK3dYMoFeB6eyVip7QGQ9cgrnu6MtQzLBw6SE6oaZNaxTCjDNny1qf1PxmNkB46tBGeBk",
  "key34": "3J1wDoUp1VR2zx5BDqGF8q8hVxvyTquiXj8U7rUgULftyQJmHM8Fugw9nCKRvYbtQAY71JpBXQamYZP9dJFThAzc",
  "key35": "3Z8J5GYAkLDrPxDn8AFwghM8B5cUxyHK9SdTmX52unudhVZnqjMxYqtNTbLx5idZvN8p4qqetnQ7XKbu87CfT9Fn",
  "key36": "32xstf5bbAeehYE7xeWxvovJ5hkWaMdpJknzPANcMCex1Jsu8zFaNHfbvQ8dcFpZ9ziJHAAFEQCfiKVkX7UKbWRC",
  "key37": "3JqcRsSynSmvLz4eJq1xRiFyQARnNnJYRwmNYfZPBx9fJBAF5RzDw9CtVv76tG8FAMcopFsLGvLgLoXTcPrQFyyv",
  "key38": "5uS2Z5RFf3aSEZ3QrZZ8MV9rDN8Qh9rzz3w1SELcTZxpoPUCF8gLRe2kXSeR4Yoo1MaXQeEwk6XHit4bmVpisA7f"
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
