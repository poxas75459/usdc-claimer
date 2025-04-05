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
    "37oxW1gihfZCm8EGoXs4r4fhfVwximyjEECS3coszyS7Zhr5L2w3c9zfFUopgeogDqeDmyKkDBE1ZV9NMKs9ifQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbSk6eHrpVa6rSrRcQEaS57fZ3e6FaPEkUFYwijV8hJn3U5FYxqEErLSvTCfG4LDzY9hq4GVW2F8UHFX3kPP4Ek",
  "key1": "4x9HJFkGD5waKeQL7YhRusWCzoGfDTZcgDbF819XwCfy4kryhhe9oNYYZ7xySAnxWtFhuocD1gsVShkAjmdKiQh6",
  "key2": "5jCJ5pMh7XoJ4okPUQWqZZM52Co7eQeBRMgPgtUFq2M3yqaP1ahugCL74TY1MZyzdDXtW8YBEHEaWHWYck39VuVV",
  "key3": "3sDhFXCEVtKTtvxsur63BJipkU8DGtWbAgwkUY9AHLBXYF9pQwgHQN7cHvPDynicy8ec4TNCBCuVwD9HKGt5skr7",
  "key4": "3H426ja4xWqJkPKiQWEmUvBpTks5Fn6T6iLu4dN2pKGpkY9WzstuSxLAUauFNefFhsMn42gnLA1nh4G5bYepWryn",
  "key5": "54iq7owtcdmxTVVFfDnjfTV5r45coMhzsh1E6hH7EyRmvcBgSFDiFsuwyM6evSyb2T9W1ae7ngcUwGkHiX93QAjb",
  "key6": "2LyNxU5cNJJByLmnfuTcZMuy2fvCDp1kNVZe2Ae8GjUNoWuVwQzn9ShyqNDgRHLhdVwB2pm973MtXdphVUpWVFGy",
  "key7": "CBo9i6bSD1hsEAbDaGCWT5SAanVjKCd4pamdNx5szQbRUrH3n7J8cRAcVufrLYcxWoJzXQyZCD8GDh6CNGHugjs",
  "key8": "2wukgpdtJH1GG94eMMavLat6MGoUhFjG4ebdgWAztwVHaD8urw8KK75RU3aE1b36epvkjxFKpyaRuWamUprhJzwr",
  "key9": "4WBKtf6MqTmvjKz7iRCRAJQqW91WLBnM2wW3AbUNMLzmrL43n4xcHkfonM7EYoncPXgnAAsAWoVgTXogn12vmzqe",
  "key10": "2hepwN6h9yoUhJye8u4x4RCj7e2x7Drakq2b6qyvP8RSDZg5m185dEUowJBtwUPxjgxAFKVLRvQZrHwb3XxgCMLx",
  "key11": "22Kfss8i2ywwZHvksZdAYrKysEsYjw9boFNWZ7gtAzqvaSC7S2LwpweAaDhn4yr43QUTSozNrb8gFSDzjAGdyt8i",
  "key12": "38KsFtoE3MvRCDFNDaZC7kZ3DGy6qcB4BZALXeZ1kBmxyTCQ8iG8E47YswTBZucBoaZRFuxPohr1cXfkbBWaGJGJ",
  "key13": "5T8kqVhrCZoskSLi2wNRfJW2Uh6dY8PtffKTz42VEfMtJJoemMQadpdWkcBnsQecfootDNhitXNbUdJzPBjmVv5D",
  "key14": "RjYiT9jN6PTEesHApf6PLGmaFRp7sZho3WhwG6qD46XSVabW3dtseoeQyV5CHy17PXSgbP8CL8nDLgUW73fi7Bm",
  "key15": "8Mf57gM5BAhuDyzA6yEa9XVCVKfdtpSZWtXp1hm9FHfS43TNqfRgHi2HGtyTfukN9zMsXcY2KxeKZBtPXWbmJqJ",
  "key16": "2wUnzhHe877nTbxwTvo8LTaaNHYhjvp9PHP6FJd22VC1JBmwKgdHssxcQ6LkWA9MicW7kHKhTcJcNL6s1E8n4avR",
  "key17": "XRweWeEpfZHZqmgGms4sZCkUXAGkgFdh49erEt5ruxipq99D5v8565HAAtepNXEieTaXXTAmSpfsNCVT5H544Xe",
  "key18": "2MjszshwRLwHbj91LPMqEw7Mp5NWe2hisFpjQEAFVBfTCy7rStv2RZGoyGedMy4LU4znq2rirwmaSWySr1QR4Lua",
  "key19": "3inLma43tmNTtHDVXyHVmzuSucRxDcbr2ziKqw6SL8YCDiTGhvFcYtv9ZXp6DdKs5fMQbWRYbSCxwEURWkbNEv6v",
  "key20": "22Ckb4mi14GYTCvkQ39P6NxrgQUCFs1wacUHV4YmJkkMMQkzVXcCo5hPLWL6TdCfM8fa2BYiD9kmQ1MFKJ3zZ1Jx",
  "key21": "5TbaSp34Ez1qE2XZ61VEGpgFEGduUTvt6KaJerPywArtC6xqpzj5rtttYrDEGTCtLnnRD58RTzauzdNhufGuHiHG",
  "key22": "2SLATDQc9sDCAjUeQmbPfJVDhtgbPbk6DCHSSK9QpRpSsfpF53giX3mVKgFxNeYXo4LdAhcwmkfXf2krD99TB4TS",
  "key23": "5aSwQTH9yxFTjLEajfRaDuFyQgQ25QtqYdW6WU5hN55pVPVeXh5W79NmeoGQy8KMywXVhwVaPCXNKPwsRrNAtHTA",
  "key24": "47bNEoaMsPuk1Vj7xW3QuvQr5wc6Vu231C4brQxM9sgLHfp2x97uT5tr2kE7MRcYuwUApv6FTW4DAwjBQiw3o9qh",
  "key25": "sEUyB6uwiGB66R3pzbK5fp6VLg3i5ZnpRrGq7oaHXnpvHLsH8phxD43UeMwHAb27VQkuRUgbrpnMzWt1bKQQqP3",
  "key26": "23SyZM6W15yJpcyCPnWefSJK9pD2ircxmLADKMUhgMAxYy19nK3jfxSbs4PvWquMtwvLSmwiwxjyqdhMnx4uqFT3",
  "key27": "5q2gmoSVEDvkX9FTjoVBPdodo3yyQZaYhHMyRDPFqjwy2M2ZDaNqmPKkybYWH8e9ugvx8tbF6DkVU9TcW7wLwNin",
  "key28": "5ULt2xy89QnQHcoqjoR13eervTGps5CQXBPftz3aKJZQcNCZg6yymsXxz44CtDkioqzbWai6UzCREwPTdgVVUBSH",
  "key29": "5jhPvwTr3D1mXnepzcHFGK7v3gyU9MxeVpxKxDm851qiEheu6RZTDpoJgUN1Qwn6iNJNFYe5yiNJUEqqKQPDCKbo",
  "key30": "5XoVXme74eiQu4JdstSHnf1FqnV6kNuiYRnkyzzBUuXeyWCqChsdkRbS9mvVHGrN4SPAxwovFGyMUeNKLBqWDQ2g",
  "key31": "59JXCfTrkfF7j4R4ApkUwpHo7mJGwn4PZ89r9q66Vj5FxocGJ21Da64PJP9AeizJcuq3ZfK7agHHETA1fSG697Y6",
  "key32": "3gaXuDt1MoohggB8VeMkcjarm475roDaE8ogbPeDrUG35ToRjsXbThJBpRipxfoUXAVioDmGR8gf6y3af6y5Sqtp",
  "key33": "4mp7dGDgFms75aBMjEnYbpodGsnbgjtRQAHytHjSR2AgbsX1xeRZw6LnCrZ83vUNLuy7s8ZXam9UcuGBtJvyHHP3",
  "key34": "5p6Q6bsmXXrRDTeECz9cSncRtSL79emKFkYaLoC1eYvLxUSiLLjkU6QqQPMZ1JUkC4dzC5o9ACgj1FWoHVaxYkRE",
  "key35": "56PjBvHVcHo1EqLgXp7nHiVhiCLSjBtoEeuqvLAoxB2nEACSzBoEq34ahjUu6D1u7UzEwJQ9JmUQEAKbLGSfbbv8",
  "key36": "2HxjZUZvD5ABYvMyx1vrtKkSCbBUcb7BHv1ud71Z3DLZLu58qS8xNT4XyBGnkthiNQF7kHkH8STqJpEGBvjUW6Mk"
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
