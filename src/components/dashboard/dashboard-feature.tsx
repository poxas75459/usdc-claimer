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
    "48ErnDaiUi82CM17h9eeXHtpadQ7w9wN4dxMvWMwkcML9xvw337Y832FuL6UH1oj3uumjfHjVjgZddRSgSip2kcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PGMGCi8CDph5bUNh6a2mNs9huug349R3maMxKh1bUeShudAQP4Re3wZ3NQ6Rx3YaQHoKGCFMTzYNwteUCKH8LNX",
  "key1": "7GsQGKfEZ9rRz8BZMb2wFEhER3oGJSPjveiumxD4bkE3hsBJiEStE2fqt52AkGbEUrAHV3KBRbKVR1P6jLsLSmL",
  "key2": "5FPNPsRWtPTt93WUyhu41jALt7hJt6AEMyqnqEGj48WfpBCqNtwryjRhXjjCTGg63b1T3b9P3nuPiuT732c43zNQ",
  "key3": "2s8v22HJHNndyHbGHN93wrVqMHJuTmRSiwMvM87qKVBi3H6qjR5DfVbKuHYjabZHtKmB41r4ody7cYF4fos9821G",
  "key4": "5hAqw1mQMtDMPEqwQ6wm8HZ1n4f9qRfDokaiqi5fpLV7ad4Vy13C3H54a3fLJ9Hd9qD35NSFUph4e6Cgrj59L2U7",
  "key5": "4VaBdV4krs9j3tm9wdQUJ5UcbFAFqwyoZxA4diGtCHe7r2DQpyQ7oySfRhNix1a5aSXDwWphkZw99G54oKxJ5pZ9",
  "key6": "2Ubkkc81xaV8HaJLhGSLP1cTRi6q7qEVUNZ4VyYgFTfJkmuFXPjF3zekPGyFwSGg7pJWchcXfcQUyUjPz2x8uR8f",
  "key7": "5sUc9vxMxSrD66jLnZYZSpcePwubnxjtmYpWGhxgYWZ5s2K1zwhvgt8qS8xSXRmTwXYva3VoaxxJrA2VPu4TD7x6",
  "key8": "3BEMqydiq8HXPhp9HYyaycWxxJMTxF3nz6pG5UsVETcMUNvCdJRszEm12PcwT8zpyTf4SBwp8a8WzvtpWLVTuCHN",
  "key9": "32YUhB4r4VaamjCBUmo1MpnAvGCpAwL7Fyc6krHQt1kpxefSmVkcdT9PKGBu6LbNwJXTDMg933DJfQaRQG2xjh7b",
  "key10": "4CiqmRSceZ37GcxeBfm9GQArXXHST8Jc8CVQSuaj9teE2JJYK1hhBbfycoGVJaHc8MdRSdtjtWBpjUhDfnVfWnFa",
  "key11": "4hYZT2uiuDopeuHYTwTxkwScaav51zUpebW6WVMATAZ9kCe4v7SR6p9LQgNb6doG5Vz2mVqg6Jpb776JzFV2C6hm",
  "key12": "Jzd65tno5rp8eXPkQTKcWvNyHSJq3UghUjzfdBfG98J8GCNGFXKU5pfMVTd8t8S64tXycPHygucNagrd2hGMqhu",
  "key13": "4Kpa5gg7gd9H7vqAv4DMTnjrvZcEdpp7ypDkKmFgBRLJoatBGCH8ErH5tTfWL1SkCPXRkokxmdv2ieNAxswj6c4P",
  "key14": "5u4Gt7fSxK3yKjX126rAwNqrjRTbN9kShwWMWunC5fAaNQvhSQn8EFrqw5BJoXXdtyTfMnQURpTdLsEetHLTnXMq",
  "key15": "xTKYkQ7sJmsUrtp1suqTL575THRpub7nRbVVSgbfuN4VDJ2ggcJ2vTwtm7Zmrf9FYRd48GN8h44YMorfqnTYgHM",
  "key16": "zCNVafnYoRXb8zXoGx1Y1LnzSXjndCKr2xKnF7nbigcP3WVbKXc4p4TaS3EJkWBMAvj1trhPK2YAgy5qsFg7Vus",
  "key17": "G5sBbXDZvh1SAGMnqgQiq44WEvAAhb1fWyUno1J1pvALcmqH21mmPynY5XhLMmuemPweyDd9K3y4FwCWCxbBoAe",
  "key18": "4mZ34cRhiTP5MmNe4dn5pvzuofFmBsXCpvW9EdwhuLzeVAhxenbQrjnofu5DQdJQFffBn7jDyDNqLPHXi8pNTzUf",
  "key19": "2RcNfHDbivgUibb3ZKsbdjaYrVY6FLYR2UM97vD5BCqQpMwp4sXU6pNHy5YB4L6cN9oAJRwRRUoAWjH22SQtcQZs",
  "key20": "2ZHtVMmfQDN1rjFv8ah4tg3F4QuBaEg3Gzyd54yziaFGKE3nQv62R61LxjgK4UWHRt7uNdUKvD3BKA5u1cbNFi7d",
  "key21": "5ykYJS6Cvrz4Ukb7C6qKsYEn5tdLYmsdPrHDUTHKsR6hLft7xcAg3BVGbkLpoDF5gCh8KdAb4KV4Ad2ZcLDkSmtm",
  "key22": "2jz6WmTGvDQcGJd3zgPhFWYfG1dGMxVcQV7Pz53s9eNhpUyzwEvqE3ahayiNv2DLdPMfkzzg1QikT1Rpk4mayKj7",
  "key23": "4RHa545iw2fSkfqZjfkNFq3P2xVSzpSbmtpWar2c65VaxuHYVXniiNbGNEKXMX62RHSBmPJXNCxevBs7rUKEtqRJ",
  "key24": "5wUYnHZFkvp2mYvFtegx98fpHAKwEbfyMsG3c5c4fMXD3qTVoJjTt3tqzxuH3NkuWMPJD1zCzMxtSoSCiCVxXNe9",
  "key25": "2ibmRtBZV2N1LFa5htvYSJmA3wQ7XGyRRTobuUQHKUFPA8GbatYf2bojG8WyrvuFkQoJ7G16bx3QE6oKGuYGCTDR",
  "key26": "32JVD3VTTPaPRtXc3ayQhaefm47nUUkBYg6beUhHrXocTMymGNCe8AfUo34TZ98mSa7KDrTkyyDMqhn2iSjz8QBH",
  "key27": "4WxaQGoajFqTGejwEMJuRLBufJiKnLFE5QXUbAWG62iiPdohTCwsBgGG6qvGgmAFkFWsQNGeRX7Sm4E94AkZKBPM",
  "key28": "5wRt17epqkoKgkv3WRctz1CyKHvrxuWg3XL5k8V1LzvdXGJdefpXiiPvjhXAjY7SuDaVn8vwbAPdozzryD6822H4",
  "key29": "2rj9AsMvLys5jVn4mRJyDr8b48XPvUUjTUv2R4mTCFPwJiXHQM4iHiw3V3ZzS2iAUxnhSTfhMhyPcrQdfYwbupyQ",
  "key30": "icLwDoDYfji9bkQFJ5VdEs37u2rdKsdK925UhtF1eLD5M4teYuVFYRHtMgCoGGv2vXry5GJ6ZbNTtfCHiy3P1yt",
  "key31": "4kDx2MTeXfzRmvxqEcu2HCcmrmQYoaVqRrKDWTa41K65kVy5mwyU87srkZtnWYtqzCfjJhyZeTBoKckZAS8S7pbP",
  "key32": "5gAGCWns6CL3q26o3ZiZHzC1Uvf3VSqHHAM4yzuRecT17JDTvEHaueCVEswKVz2Kbjij9KQAtTgj2W3y27d1sSF9",
  "key33": "2NwzYFLQoiHPpajDLoLqcrgrkHuWCE3yX4Pq9Yyczv3X2UBzPk3tbT3KSwRS6W5e8iqvk2amvKU69EPdCpsPb1i2",
  "key34": "4vq2U1dHzJhE36KK5ZDuShKF5jgoj6UgvCYCmbz2TFiwGMwpdVwVxtKh4Q7wPCumtziFT8ezAL8xCnr3Fz6k5394",
  "key35": "2ttBzBfC2c7rnoVXrh9vkLLdgBoi5JABcxaErm8n9N5RJfjNmFgrzeuuXMARfobQxoyp5e8dXWtNJceGpGJkR8vk",
  "key36": "qJWAsTCmcYG2QjJ6khGQ8BzD7fjAwxiPpBc3DtRkP4AU2acPZrFQBMYB1cGC72egm3yhBnfbVaMPkXeRS8aPCVH",
  "key37": "49kq8YiTeGaWFvx3JYBfyyw3dnNCNtqyabTLi63eZF111VjLBr5yQt121B4HpWazgfVsdGaB1fAYeNwGRmU2ZBrL",
  "key38": "5TEPVrNfg1g5SHhsZYZhm4FTDHHhVdeWdTkotYm6JLEuptYDSYQEsTa6w1bXgNqMN5YcoePNBmuDHbzhqwuLaR76",
  "key39": "4jV9VXR5TcqLif6cBt17aNVmMyFimrAhPACgLNNh2smdRFjKqu8HkJM776sPfD6KdhFSRBK4XSxH27RdAtKXrVxe",
  "key40": "8piTBEZDXtryosKXaFdR7qxDdJF98ZKCNVgJEx1H8wBmD6cJ5JoP6TvS7oyHTnyFGq7bfoKUQa7m2cPcmjscuU8",
  "key41": "3ESxjGfFniNzcbAkboZ3KnTH3pJHs7FtziP4YALtYZqjLcCtu54jCbmxTMJ5PicL74DXf9RajNEaAPmXhPnDdJ9R"
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
