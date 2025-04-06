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
    "3D1U3TERQssvhddUee95PVxMk9CuU3v9L1sqLEjv4h1b3jNuLsRZeSjFA3umLqr5g7Hmvh85eg65B7rdjK2C5fnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X8m8Cg6UmYZ5n3ZDQUeUk5vyr8xT4h7AQMQc9c2mXcGKx4GQZgcoYoZjFWYSbP2tdiDeijAr6t2QjEJCw1muKy6",
  "key1": "26hMwv1Dk4CuiMCv4NY1xARfSDZhvqQ1RQUm47ngsrgZ7T1NyYXx21xmiEpLZbBowKdmpwZWXqE8Cf2JnktdGVQh",
  "key2": "5jhHEmbyrwjW2yKGwba94CUCxE4Biy7yUnkcAx6JPm7xmDWthYvbxMaToDCytZi97L43CEfGRSQKubBEbnB5VjVU",
  "key3": "jszwQMbLbdVUDH4FCK4yVqKX1h8wBTRGx6gEXdqrACeSkbrZSDBicMXEndEVc5RQJdJrQm2eDJ46EMzJg3qy2Fs",
  "key4": "3JeWj9FS5M4RhMUYbC1qBdrja5sJfCXvw8YxiWFBQ9w1gSGJsQyESgToYbcNhXhArFe2pDixNTWNCL7EMDMsUfHM",
  "key5": "5C55Youa8wu6NhMNMqZFQKGG4aMT2hviSQNiCBLpvH9NaWJzAveB9PZKBEeZQvtuHtBXddSApzj7GjfjcvD4xz1B",
  "key6": "5Nkn3R7zG4Q5uzGRshN4pBWNLmoWZePJDqbHSeusQQA8G6pGxBHffFPQpbBkUESogniQbtamNZ41WjXjEqaUJScJ",
  "key7": "CawgrYy2Qqk8hEjQh6FLSSZDVM5BvrsVMNaJFoPbtCda564TjX3P2hpzeKddkQzM4SQkJVDrhQ8fPecqghkRwbR",
  "key8": "3RvsKaQwvKzi6zM7r5bpoVr9G6VXvYXeGb49NpwZKBdfhf7UodScujzVXBh3u7sKTYPCPv1XNuNCLzhdEbaowzPs",
  "key9": "mMU9KcnCj2ggWRSaxcfFUZuCPxK4ZTWr63EGmQDLYgehnmzADrYs9i6JXfZaGzZWAsnM7k6c87nkFWanLhpE1cA",
  "key10": "2cYU35bLHmVGAGBAznPvnh6C3GmRdN4SPcV2dtckp2GkDPYbhLccBqKrpssEVpZcUQMMf6pAQcUtaXt3GCSagUfq",
  "key11": "4hLv7KaUAFRsxzcgUEaJ4oW8QWW2YWk4bvp5JsHhAPnGUg1eANyv9eCpjbbHDMY5hMEDm4NPfsVAbZSRumMXBwgU",
  "key12": "3bX3u98NTfy4e7yYBs4XSBokUZ7Dg5jtAyuYXnRHA5Lm1RNFBBkgNPm5eAJHd5oZfGZH5Q4MNF6CQUbooGNLMoEv",
  "key13": "gqFy35npjpoGiHF9qLrsh4fHYqCAdaFJGY7zBu585pJxLeGqzcp5APYqf58hJRdhW6woUBYnrswSrtgAucKYKzx",
  "key14": "4z8tZf83z2mKZ9oAo4i421GB49r4n6f1Bxr8QWJji9gAso5Jqy63uhgezM5uDykCJfcexct34MMXQAHRo59Ag8hf",
  "key15": "4KWFPMmcJiTpw75ggmYbf8RzXTtkUgoomqB1LD9kUZ2Zw6CwcdKxRr4aoiqVhx4gLyeodKbmBaxMTuKY36ic4LBA",
  "key16": "Y1pnXsEMdPp4xLmssTkdV7e31BKyTbcNwMMCMqv1c5TixJDUxYGf1S6xD3zyAiW1cTNn175BkmCedNnNVYDxKj4",
  "key17": "9DDjb48yheYs3yEHBcrVEtaCMar6okjtUv87GmqTG9Lc35agR4rkW8rFnZTq4zhAEuf6dCnEYxfJtUvusyf2qpt",
  "key18": "2NxZzUpFtZWg62F8k9jAJTuHUNJWp7YqwD4f5Tp9K6cQsLrvMSUTzbGZxSYARnsaFt4hXBE6gJuV4qoWRskybdFt",
  "key19": "4BmG3u8qG4zS6a39CR7jpB86fhiEyB8PU4oCaXCwTLANbrK8a7qVd69bKKvDJHpQnZwwZ8D7SKqZfntccXdTyQP4",
  "key20": "4CtxbebhnEENQU93HwzWbndFsD3EfSQXVa22LY3WLoSiYs2dC9etbsNFiurCpXGyMHkw5z4DhE43fC1GaXMmY1qe",
  "key21": "aXKn7MPBv7kxGxAXfLTC9Vfe5DB1qh53TXDhemvLCdrdzjETEV5fqEpBKi9FEgyp67uJ572GSsNxVovQjrQnrJ6",
  "key22": "ZbeFrB3JjmsK1wRgTKePT27J3hXvobXYFKW1r1DRrgPpXsw4g1ui2kyuXi5KcWXTxjKeVCq9JFTCLSQoqT8j7sj",
  "key23": "U5vfZz5LUU94EkL9bBNzPrQeKKpQjjzAvWWGVhFhQAKST4zfFCc3rRi4ZkifsTYfDR7yUDYaVvbQbjcqzYj2ZQM",
  "key24": "5ZXyeVhEGviAYGCE9YviuchkbK6MB9H3r9APN9KovvrVA7ZqTPMBCxetxCmKbP4wB49WP9HAprwbcp89q2W2mi65",
  "key25": "3sCf45WaZqprJw4mr2uA8gzVL4YnuWpH8KGXy1uLzMpg4qB7ugBTBguyUriiQNUQTZxZB6UYzqwBwsxjwUfJ3znk",
  "key26": "5HYJJoLMqASmhdHZTABoKkPFHgpuzLYfNNMSznE8DFzj1BMRDn7RqTTMeyqhAaxXx5eeXD45kgvjcEyK2SpTCejM",
  "key27": "4Yr3ooFtJakgirBiTCfNexWPre584dkBx1QxnKVRpcRBEGK7snCMdYSDdo4YcXjkLq9fCjUDzh2zgiv5VEvuPv3a",
  "key28": "3NAdmm43ectDSHpcvs1r7GeLghnKScauSiFnWUwrhg3zeq68KEfq4EGnCrqe1vxomAwau6NJMnUsuLwxQocGJMqz",
  "key29": "3DniXn5dfknhDsv2WTf1epLrreJG3t585HqvkZSJBbH26DvsvbwQxJHytBS5ca4xdan9LyfNGA9Fqqxyq1z1YPBW",
  "key30": "62kJRVTrPnd9EjizYgeZKJZv3YkWdbiLfCT6ZiCWkqMr4Aa8wQraj9QqdMgz4pZg8hF45zcSdUzYVT7oQTo6ioJo",
  "key31": "3xw1ofUUxmRtS1tBvFWFUQk28et8nDBpC2QyQmTPczjwyiL4aJtjoMfiUUSeZ5GMyVRJnCRxqNyhAUPdropjHfhL",
  "key32": "4yZ7QwmcoVwkz9NH27jchZHRukAx1Gfj6NVrHmkJRizfiNTbkwwCZQMSV711pSqXXJEGigQfJDwpSMfLzPdhNYux",
  "key33": "iqA9TxPVwAjjQ6kHYtjyRfbhKf4GLVfyTWo13eR9wMY74vZBEhDzsFrr8fYLRPDLhyKdFtKJswRKMyyYipt1GwL",
  "key34": "5Y214NuHThXDXnQY82i2DXuR1f9VNYcz61sxssS3Y45KWs8ViTs4ue7RMh3aF4y4KZvjgSYyKL85PfGijeT966PE",
  "key35": "2Sxkr2hoAEK2yetyHF3FCo9RS6bGNmhPsUcjtfDvDEvZWTubTReJ6v2kh1aBxCWXVbYKSvCZoNTHkcMiobB7Ytj4",
  "key36": "4RAhVY4Ug9Kkmp9LtguCnDwfn5JKVcn6ebEM8YH1dqfmsB32rgdEbLmo1DYo3cdSWCGBGnHWyxuBWY2Kmc94ZUfw",
  "key37": "5Kuphmdrj99QhF22NZPiGvAi1EHfamQyDb1Q697d61pPe6kKBkkn3Qmoy4pUfRj1237bFCud9VSAU2WMr3Ksvabm",
  "key38": "KbNRKmkwPuQ3igUL74hxJQEWPB12VqqbkbDxvribMAjErXr36BcWJPBZjFgibGCH3ysHdpPzwQG8NiyCUefYjuy",
  "key39": "Qwu7vt1wgwekuoDM5VnRbbZpKAzT5NLWKEyie2zNA4VyZ4wG3sUsAUQLMZny6CuWNR85dpoEfYB1psudKhanPrL",
  "key40": "5KhkRUQV2Qefo5ZvcxGPZa2WtEgJxxqMhwzZJe2mxu9a3sYnTRQFWdUCVCSRLnxU55HW6Z4fzRhuBQtukxcBYbmG",
  "key41": "5iu3CcxByxqSQmsfJxk5LwvXR8TAQVtjteoeZvr5TktebfsxyyxxXcwBP4b2B5uvYNFhvr6nQkQjYsaRt8MRSMZ2",
  "key42": "4nJWpnwcrrkKzmuJ8G7tTbhAQESSBMgcaSmLrS2W8HGKk7oVCqjLwMhVDE3z55dTVy1zvADUkt8KVKcWdD3ZKYBv",
  "key43": "5TuFTXCpokEW9HaajFHZ4iyxmjFznEJip3vGyHwqwb5pvS7Whk94WUaTAdFHptoSwrJ6yJBZEDQYMP6vK1ufzB4w",
  "key44": "5Kxnnh66iJdyQ8ZWkkHEe61kMzkuK1Jogad3jUfuV2S2mUrL4aJXNZxDovY2RkkncbZ8YaMdTawuoDDw5ddaui4u",
  "key45": "5qVFLxDWkf9L8vFaoVDpM9Wv2LFpQEReyAPCLbvPX3vdWjLzKNLEjhRpydnn3ABK8JCMi97UCyq6RmEebaKvdqcf"
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
