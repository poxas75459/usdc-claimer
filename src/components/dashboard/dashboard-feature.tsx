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
    "3xNGuCJmr2TusAtW6UjTXDNnywx9sCsHMBUNcys4piGDZQkLRXkTRP8axG1HX55BVordNyVb3Siu4N4zdCqxSjBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JFX9jNFjeqWMsvCkAtkZPuhC5jGUvfVtY6VQxkRt2nSu1ezQrG3KdVD3vNH6hRrnh5AueHfeUZYccG9WAxpiZUL",
  "key1": "48S5AS1KWnFb5LWUR5Ux7SK1wmpkBT95jut1NrwCaPv83euy33NkcWwhSRpM4uHwcWbvFpdqgqo6tUgn5mHmhomi",
  "key2": "431p72zmz1MjrdgFYV8SahHryrkgFcMfuk7bEUuAD3YxxTtCdFzEbFXg4q35fTtBRJZGNyhrj32dyd9p1qrcfcMv",
  "key3": "2cvUTfSFz5C1a9WzPchNn4GKUPs9GCuErx4DpqxCDNqRVufnPRrAzNjQr9XBHYh6w7k9ND32JwcHabQfsp1vkgvF",
  "key4": "2YC9tvLH2fyop4LoX9F2TmUtTcThitkN97Ey2SvbmvqNH2nVjjwzxFNymMVvYGiCuHRwXpbxvyk2pY49orsCBPHL",
  "key5": "3QLx58c5E7wyCTvJAF9j8d12H5yY5Nir1hKLJRkQnnmdn9a9ytiWqyGdzDgJhW7xfD7D6zKsq131uKfkjkWaH75p",
  "key6": "5g2GHbnWtUiNKURYcKdTkfCuDVvYsJjZf8ZMWScEDGopDeaMScGjmijMNCVZDR7eRgCfAt6Kt8MrKcRhVwRFueJS",
  "key7": "2BGA6s1MURTiBAJrpeRgaTH6xHW42r3xv3rGTZhLXEN8icBav3YhsxmJgYNtMqiYvx2o3ngXGULrcx8QxNUMBhQi",
  "key8": "5yzAaQqGHhaWVxhLW1wxRUUzoRKgAaKCruSercpsCTguHGuFA3239QEL5MSFENKNpKeg2vcpmYTR8PyqshpFUNET",
  "key9": "5He7DngenmiqPizmK221M7mRzBRb2KY7s3DJuNjACRdpZT2s3BdcyyaXhuRvkvfD2wRNDNC8w7XjqM2hPbdCA3CQ",
  "key10": "4FQvkoRSwHmQBn5z2AeeTmnGivNVYv3dWKXLEbpU91Kq9RH9fMEdQfZqC4AZQbL9KHcLu7MyLxWDT4aJrrFJtHib",
  "key11": "4ioBN9JNUAQxB2A4Ke3ujoCm3qXuKS9XJyVbSTxuHZNioLesrJ1N4nJWtyiveQVW8ZNBZpLXABRfXXZNrfpVJp6L",
  "key12": "aWK3hCL4GRhbxRwQ1pTdP7UJuD4ug83ZmBqbkM9uumB4jnwGGNdiubP8XE6bCs5Si2JDhfa35bLAvT7b4famcZf",
  "key13": "2kjgt1jzR5t8beDPTTHgVGm2KTRoJYNCUtBektr6y4Npmq5ZBczAfh5htoFo8D2sdai6LkPx5XWxCYVs2zQmfyjA",
  "key14": "581PVq862uGQXQQrae7EGJFvHPeae87abBpKUgLXoXTEUB4jKWg4bDfykoCy6Jj5s1JPjF6QpE1kYwFcN1dBsvC6",
  "key15": "2TeLeBXoqHV8dhYqqPFZ7Rfk7kcUr4KU4wj9Ny91DHc7iZB33qxAt7WtYYnw1Zdd5aJJe9nGTymw4AFFQFMRVZsG",
  "key16": "33u9hPqDMQSb73mqV9VhdGmmZ6oD4Csf2cidq9HXf2deUep51NEw24xF9yuXse7vRMXu5n4LPLNLXEUcSuDGQqfi",
  "key17": "ZyhqLDib6bAJqj5NgKeH5tsmhga7yb4EtgUvsiDVDEFzwxhaGhDJMYEDEjb4KGhJAJi5MSeEAkmDD1LNNWdho7d",
  "key18": "fqBnxdCKqLfwQ1EJ8pb7zgAivZgCa1QKfHeafe6DKTXm3ssJ4zLbyMUzMtec9PobHVpvRZpHKNXWBar6YDGsj2W",
  "key19": "4oP8tQauStr9NtwWuX8hMvEZyELh3BZ4pBNmVDDEScPWXg2BqYHTC4EwsCJZmDEUurP4sHbEdN1Uu6ZsFzY6WPrJ",
  "key20": "4gRuV5pbB5rwhpwXbCfM6D7SJmsL9XdMYwthAXV6eVc9aAmvvYn9qkCqEDTdU84nL34CQ2qckToXwkotmPfP7pFb",
  "key21": "5UPMKGrnGiJ4iki4itx4ScgDED5tySjCxqdiTkWadBnoJDAT1jFVmo1ZuddtTECRX2LW97ZDDAdfR9ytgRWSgmFt",
  "key22": "4nX1dcZFvfHNvk4vR34t5wQtXoEqDXXEpLRJ8DZVPiy1E2o75nP4xATUjBZe4qsvoai8T3u7c8mokPbJZrXXJ19v",
  "key23": "3te5BGcfBMaoketagW7L9gyzEwxNKchG9MCZpFaWdCJy8HsUwEnQsabnZa5RA6LvFC87k3hda8qBZBXUsKoikd3o",
  "key24": "3vAHK1HUn1UNJoeGuv1BPqCyxwMXaMFyDMb7CUNyabFBTZWiFohkV92FWd6aqYWVrJ1Wu8LgkAn3bHQ9ct5d27Va",
  "key25": "4HpxErEQNjQuy7SgVy4VNYnDhAVxrCEroYZRf2shT4DmAUatUzCmgqwvYR2gx3ZXUGEeyarACs59gDn34J7k8EKm",
  "key26": "2tGV7U1SvqVYXmsMLJ3jJyTbfhsYH7aj5evqsZ5Be5uFsp7sjVMk91WK9YbcuuPeNR7ZvK1SfsXAgaS1JCM4mbtQ",
  "key27": "WqmwD8rsHNSYsmq9Ff7es1BBe8PngwhBYj2qQh1syJBfdMRBuRdEjMHq48ceboFBNmxc4uMwJCnSmm5oPqywWkj",
  "key28": "5mBZmZuCUGkF74aZ2fkf1LfjELwdn14arsaK2sAGZ2nLAZ4FnMVuhGU7cyvbKNdKLKroocSkg4aZH7g3HwUQsEoM",
  "key29": "5rJMJrzut3Kv9iP3Q2Fiz5EoykaU49rWnh7Qxdpjy1jV1c6Cu5W51m36XAdjchUKJujLGHY3hxwrY7aFeEnBEwhu",
  "key30": "4NDxGQTSwYW745ZKfWcYTQL3GFN2aGpdbo5fby1vGR2XChk59ErgR9dQSVyfCYUU6AtTFTrjp2QVc2k5CYgCMgz4",
  "key31": "2bnUYJc1np2AKaqM2FyHtKawtGzt5BgkCXsDHvy1a46gcSZfgkHBvqKbYGVwJKqJnmYbjw6dQ7Ve6woEAP2BhMKM"
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
