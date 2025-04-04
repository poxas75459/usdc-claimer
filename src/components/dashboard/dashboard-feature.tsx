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
    "2RtCLzkmzE8uwGDZNXjY8DqaQY7uthbWyNLnxLM3P2myYVWZ4ty8iRerinxUXCyabUupJpuU3C9nhNsRjzFqFYAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uhgw2dFqLocpTZr5DPaGPryGhHb1JK31nLMjBDHN61mEESSNnbpvSyKEnRoRNTSWGawHiitDczu49sokp4CoP7N",
  "key1": "4wyoXPjYA9vaXeNgcTa6DZAQGXepLcYVi67zDUtMjBh1k4VWt5CLL17cNpgcBFLHF9LGb6QC6wbQZydziwM4Pp2H",
  "key2": "4gJPrBccHv9mpVkPSqWdhvVXwohbHozDNyceR3s9Zemgok5g4PF7G4hTLzfgSuVbyGgYCz87MGJiaHt49NUtWMTk",
  "key3": "2v6kXHz395HSSmkewrL4Hojkbhx23EC8kTNsAzKJCxGEBnaStwujHqvubLZi17H2WzxUnnEGmz2mYdex8C8pBHao",
  "key4": "3sm7y72WtHom8pmv1u3oxB146RFMr786v1LvVfcfMPu6k4C5scRAM2nrnoEcQTxPRPohD81EC1Jf6RjGnsUeDX2z",
  "key5": "4oneuchvoW94MKbZ24Vr3mG6B8W5st8Ado5r34qciGscPAMELgpPzQbUgSXjVzUYA5qcDkPSYYtN48XcYZYnjGb1",
  "key6": "4CdjwbGKpQiHyCzXjzNQWVDzRJMeEsdEP4sUaBaGVmrYmjNMdwof2YqxmxW4PHwT7ZWVv1JiMo2rkejYeqiFSukS",
  "key7": "J9z29HStXsF4AXV5rkkE9wLMTP8k5joSv77awjZX2RpUQCnZj9FeTovuZ4AA4dAMLF3Biwdfn5vgL7bX3fZaDUJ",
  "key8": "2pBndn5QvqjfMDGf4n2q4nSU3ZxpyFr8D5QCWuUkHmyUxMEU9164a3F2Zjq1Njcr1bXPCc2y4t7Lf6YFmMsBt8hW",
  "key9": "zsFS3aEh1jvoVraM5xUhRJJ6bt9UtnhCwD3nH3oZuix4EWLNS8jVxESFB4nXu75saMQTTomHtT1NRftfH688XMS",
  "key10": "6RUucqzxN8vcvEt2AqQmpVdG6sg2YKKiWgXpB4siV8csEaSk2hP6KJbVHAhXXyyaYsiVCt8UDRqG9hWoTeiY1SP",
  "key11": "3eR2YwT2PUohtrtHUMTXsPSCSdXKRTqksJMfxJXE8rWQkT7CbXr6yjk2At5cMDZg1K5iZV7L5WnDdWhus5QqqsoW",
  "key12": "3UaUEDVhxpL2gyKymrsRu3M4jhbMkjW9kbJNo61c8ZXLEFg59irHJrQ1FgziizUSZ2jcUdpumgPrhFhfEVFd8TQ5",
  "key13": "4jq3DN1bEc1g7MNNHjeW6upukBeQXaMHdh4XEZFc4eMNGnwUQe5ixnXkWiuQF9i3hajprdWCM3JaPPeRBRo9RxLo",
  "key14": "oH15wdyA6fwvmHRQtbRVmo9tvPMRmGabCQ29tZuVT5qwC31zoPHNB1vV9heGpEoAzGksbi3RjTvzQDjpjkEL9X2",
  "key15": "5GcbZgR3Eagxv5AwVNjigPr78PXT6SrT3rmiy482pdwR3wkyYXzCLwU746zopqV6XPrQZprBSgkhUK5NeNPCX8qK",
  "key16": "5gKcHNHDLuzozkJjuhCwxe8TrW8PajouY93FtiB5GorUQPVE7KihWgcEdb2m8rGNRrLUie2VKw88v11DPEx7gZaC",
  "key17": "sGS47Qoq5C3JbszP4a51cBBXYAN7DU25eySK68Tps34bKsamPqzqSUMsn5mXytkezF522YQNKqdWT5aMAUhWsna",
  "key18": "27BfVX2aPYfZGnW2mcWZkNxDBE8W3YAtuUhdvT3EMn5rXp6J2j2MptwEH5d9hYqbS6SJ2szqxdVbGaqGv86Ywjon",
  "key19": "41hGGJnV3bZJhWsTYqu34wKEddtNGbcKTB9uDfgKDgK9eXDD6bcR7dcikoQKsoAdHDgn8iHVvktMiB7sLYq528Cr",
  "key20": "22RNMRa1o3pkURzXcAvJszqTKN89XMTj4dv6rkyZfPW3SXzdDgRSsjn6rpmnPGSUtBRmun27c1uPX7Xna9nD9G4Q",
  "key21": "2k1xSN89JnSVc4757JuwEYEmWGs4P8twvXiixixwiSRQ6eFjTz8VaddRAfeqDq64vRtYyyQ8kGWiqNjRLiVycVoS",
  "key22": "4cCnmY6sktHURWMAVMh7MQwTcf9gPrC4VtGP9Tc23auire1pjZrdQPh8BPAsd9mvjBtsX1yE7KxmEshwcEUdYPjT",
  "key23": "zPH68ho59TEBkNnyjHw9HBsXUXckbxSF46GuQxQNhdwsG9iSnyMtXEdMD4xUidn2oG8f89ZnuMcxuyimjpzmGgu",
  "key24": "5s1ge4gvuLtqunCnVXVpxhRugzVGjg5bRnzJLBg9DHdCBcKyEgkKtTDUW68UJzuCpuaC1prkqp3RhX2Gx9hTZzEC",
  "key25": "7nZQzrEdBugta7okAirxYPRyQoEtVKsUGvTvAyUwn3xmh1cKXKGoM1sJbFzZ8tszM6Ce6XxCE6eE1oiyg9ffJ5S",
  "key26": "8wCTcbcuYYUMay42nKzSdw2QkwLin62TJHPJpqb8mpkBG4csQpUGpA1VfyLozf2JV4u95C5Ki6FDP9EdovkY1qk",
  "key27": "3PuEsfVgthGpSiWhDMEx4LGsWLVj5EG7cdXt6NWPQcXfGErX6osspoWa2BUwyy7qNsFjQa2QUEYfMLUdVnyK9pRR",
  "key28": "549jk9PEoFMri1mjoenrFTrVeHUMSQ2asJoq23dVr8vAfh4Qyt9gbW3ZnpGAJexuowsoNjigPbvX7HvXua9z4UMS",
  "key29": "5vHytr2nKpUge61dyjeEmdY6dAzQs4xHCMGakqVNk86Y7u3w7k5rx3Yub6SekKdKMGpkKdLCxzsY136WEV6Uwkj1",
  "key30": "658bXEEYFviZtxKHAbNsvGUu9TwJkLJEj5JjWPjA5uKQcns2Uxzb1NNdtbhahZMXxqS9NrM3UM2Gzvo9YeP3s9gv",
  "key31": "4Zn5j1KNUV1wutUNp8todwPxcMBhiCuJvuzedyszy2kA7vNaWiwEkUn9NGX4cJ8HeSJESMAB4jF27za6MrHVHLUy",
  "key32": "5KNkCip1u23nxpA3UoeAyvtdnEme82cmwdzknBenS5daKVLX91qeosP21rqjV2QRiVPXsytfvqC8KzFyW3mdSnyX",
  "key33": "2anLE3zjncRqbDXpN79EhixkzAmaM47w3b5M25UC5Zg5dSXdANssKishmsFYbUY65HmJYtYFWLihrjuZFzEBzcV2",
  "key34": "4MEHpbydLR2nJY7TnC6Fq2wQoL3xBHrcxbWUPDVSAAxvvmJcwLQVA4iVBZdFPdLzPqaCP13gQeaBtnGoWYVyQzJf",
  "key35": "3WkiyxB48u2eZ56U8psXx1GTfKjPpRZwUkvdZujnU1AhYC885SQtRXgos5dwU9L5eVCtTgnQ4zmUKpUJ14ma3xEq",
  "key36": "28Fe3mRMVAD5KQ1r4cNUPM2cLdCJQoAdtcQXmNmpePUqp8Fu8YcKekPbGoV11HeEyxZbtGNQ5XQHRW4GPd6q887r",
  "key37": "63WmhJsvuNCtV7S9Bx9CREhWejqKDiPMum4UuabZZRz6M7zbZYTxj83wv2BgEDwwj22C91cUhSLTmcTBKaY7fomL",
  "key38": "3Xq8ghZ4y6sKkM5QMKnEhNSqW6qD6mLbazaBf5mWL17YmgKpCgBGhNMrvp6uX7eDNFAuAqGFDk3mQYqaHujzFSHJ",
  "key39": "3d56dC3Vym18ophFis8tvwyPnLNGk2js5bJtzGRxaRLKvB9Qkw6J2yPJA9kwVHwQGfgQiHJxtETHaiXLqHj6Hfkr",
  "key40": "2xF6to1z6NvmJ4Xi7GEp7kfZJDZwcRHFjLhRDKhrwLeym9Dpa82HpKguziAvv7xPJBqqyiegnUjymgdJYz4WoFEV",
  "key41": "2zUe9C9CGx2sQPq7FLUMMC2GB2UpMk63ZV6VaHBcXAgKaX34T76rmv2BKKBobcy7AAS5qEWKBwcJw33MURdKRrnd",
  "key42": "2ktCdBS44N6gWeC5rp9um3sWLTsnWG5EpRzWFx9Yn3rB7EVxuodd2UkK8AqVZPGU2hHFXHfSqJhPYKp3Wgkt12im",
  "key43": "3W1LVzYxcZSo78Ai9wn6Hf411rfer1DDZupGV9LNqiQePCN8a6xzejjhK7uUFZCuwTLCaJRAy1sbcyecfNQZrVD9"
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
