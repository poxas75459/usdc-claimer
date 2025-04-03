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
    "4u4ERDKoYZUDf57MikiSCoh6wgevGe3d1VTS1wYY45nbNXZL2umFyCqJ8JjmzingX9Th9Bc8S4nwGP4ki8udYSB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cutE6G683t5qW5aQhLAkyrYDFueDMSXrw7sTb4H8nLhJ3jyURdeGBoXiSuXk7FXHnUePi8Hwd8vxCWMn5pWDHxK",
  "key1": "63xf5dwgq84gErfSd8ycs1c2T1yXb9KozMuBh1rixSG8q7M2XnMVjXoF4L74aGQ7HUkPytL7CRBPWPFgkZkutDW2",
  "key2": "3EbuyRzZDYEnkNeMKs8zbSo2vYd7MVzUTcvLbD9b66fihnwGMfjfVXMDY79eDPNdEkGa86ABPpYyoWLuRZBxUmZU",
  "key3": "XxuyJUJ57oVpMoWNFtKtxBbKKLHHQeeikJaghGNXZE4AHExb1PYWX3DwWtstkLxRQV3EpLdHkmZ1X9nPSMxb544",
  "key4": "5MNqhj9C9vxif6n2vV7jxjw1ss1CJM6i7LDAcZrLKQTGvTbpHFxhrRid9nHLbDQmTjHq13EQjg4Mrx11vCA3mvzK",
  "key5": "5FuCfZyh3jPtTEQKuedyt9RYXm1hPEZh99AaYgBNBT2fVvRRMRzd5b2uMvdjjNitWHVGMwrRkXgeVmuJbjzDRwSG",
  "key6": "46uVP9EPsvkos4tp5Wd6zjjGdKajKa5sz1ChL6fCyQMZQCBW9QeGyVniVR8viaVL5ZHLqGJEHSqBy1iGnsHpwW6E",
  "key7": "5X26qJGw8Y1ornukiXonjKtrfokaAkkJDegyY7ap6bPFn3EAMUCJ22dqpJrkt9nENJJchJF4Bon7E8LLyzMytchP",
  "key8": "2RY8xhk9wCYbyjXqsS6bza2dErtt1JiyWnDbzgYAo9J8eDP5gVQB2uxtv2EtYu2rjJvdUe8QfQ8ggnuUoXjEfd5r",
  "key9": "hFKWfg7rggGwXZ4ceUofvic3iEWzKUZHSJ5Y6DHyVsc24edrGsaWepxFNRzU6q4tGcUDBNVUvZiqyMCuGTQbFCK",
  "key10": "4gqS5gq4oGNycpQXrXXBFaJ9YnXJYrzFPbh1Tvzrbxs337JWQ8cE6gnBxRfJrUpjkbjv345itxNeUQgnVq9vcCt5",
  "key11": "5ZhuvcWW9TmD7wCSUEMQMY1uL79JoTEfLLcTWixqakzttBKSEWb3WhuSHwyXWXszKTikT365rYHHGWizKXFGriAK",
  "key12": "uGUznSeUrnQYMSAE7C3zyQxoTKUmTXyNsVCU1v5EjjW5r43fmJpmM7fXqvqDpQrK1nbqJRiTTCFFZmXbML6gyWg",
  "key13": "R49b3RcoGxtgjEeqoKZGy5NVhMqgXLufd9M7BvRdvKvJ6cHMWbCM5rz5XVGUL83Qqb2y5QcjjBvxExe6qK8KmHT",
  "key14": "3bEeqgDii7rnhxMkoP1gaWMG21MZQGk37GHM2eNfq4nFfkNq7vCD2oYmBvASeFUDC8NiN7d1rTeZkQ9cGtcLc5gL",
  "key15": "3CiaqfU2qf4Tt3XESJ6cxQGoAB49vL2jyQm5hDEDAh1zEYdTAp2s8BhZoEmNyA6YighBFzFnW9ftqka6sSqyQUij",
  "key16": "4dth2avRS3zBSQRnuPjx9GK6pzjoxHxvvSAb8YyWhSogpjDUVPK4Jpt4UW4T3SSEAkMqXCbbLnbPG3JbuxyaS377",
  "key17": "4X1Y9DBwMPMrXj944v8CcbB7qVq8kFmmGqrhLLH5Wdk2SbCsEDx4bRCGRQQNZmwSAckp4WXK94e86655ukz7h3yg",
  "key18": "4XPhtcd1i9bHrGqQejNAG8iViVpkvBhQ61iVeEn7aB6pdZUjJGS5j6QKoXej8PkcFaW3wJZczQ9gpiNcfGyDtK9r",
  "key19": "2kjMwDEUn2soFu7naqfFiQreeFYiLSNyGTfcpWXapQPrtjW1bfmSqxL59Yd3rCxykLpKyKsTzcUxmFvJeJcZD914",
  "key20": "5BuJknr7yM6JesMHBuiQTmUGzWrekix53Cbsmk3ZJCoy4bus2bDtDBX1qSrdAed9yMAub1EfArn1V6AhU3RbiWuS",
  "key21": "2V3DEkFTshmqhGzaV69RWsM3Lu7VFxiAumP9T56PuCbKpJNWpFqNKBq22D5HxLdXWxJW4jEz3M8fQytihgu89sUX",
  "key22": "5QiLBhwMWLu6hCs2A8BrbQJTMRnDG6kuHB3JQeJKJxNjbdGu5zxPg6NJWkc9Xj6SHWKUCzkhLUcsiLXv6V9fD2cP",
  "key23": "35DGqhStSW5bHvtdr9nGTu8c18rH1akZDM7fCpH9kwp1vTG7k8UngynoFRs6VEWW4rYU7f53XD3EfwdBueB8Tfh7",
  "key24": "5x7Nac4oNRU6dwfQ27m6kXW1ZRCsBJxFxkhkGgDt37tEXnf3jYdjGQYdCBxMXLgVkRRDGoJ5NwNnuqvSYTxB9RnX",
  "key25": "2oLiMLvsLLTP3wKEahqbyuZQkmNeukibkBrX2cmdy8XzFSbk9yM2PAZrMpDeCj72qbdGpiJiFa2gWnH9rgE2C2fE",
  "key26": "5HbHo7FrzqaLT9Kb8o4W5L7iLLnhimsbPE8DzQHAVpvKoFLgUTphbSdK4149tHRL73t9vrMnGM3DLo3mTA7hyd4g",
  "key27": "phMtfh69ijBY1dwU8bdH5gw5QSsRN2QZQQmdenbgZH4gwwVAdpregHaCbBugXBq1vUDbRXwcUxaMjQri4hse6fu",
  "key28": "3u3z4b9FHhsSkR5dK9wqHkV5TAiV2ypRTW385gE6r4yq7HjxtZ1oqyzW95aukuqCtibM7U1MvuSCPfuQ5JCMKrX7",
  "key29": "xKCMte5pG1hvYpAbuZyQQzz2kJt9dXAJBXF5xwqE9Q8uYAiuFAnQ9iJnCPbdNndvgHFiXTJGvQFXy1eoWM8m6gs",
  "key30": "4waGK1rgwkdrH6hc2CNLopzJnbWytizrwkAGRcHqDh13oQZ63JmH5f8RnX7s2MrBypW5ioVgYL1dEVUMqvVXuQpS",
  "key31": "2nh4U5Pz4NSgf3bE34u91SiF9fSNKhrAqj5eVvNdy4QyzpW68U6H7p2ZPbop8Dey4vnLYsAs7e7gntFkvrvAXjBv"
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
