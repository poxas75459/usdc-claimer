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
    "29hxDuDmhekZ1St7pxs5Aa4g7GYdkBCLRo8rPBFfU1KHPxrM1Zm6Vo3oYfGCmg3bh9AXG2ySL8kAdLEuUPhu7yhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NeZEC3SzB4JpDt19kxqarDyMAdEqsYnxeqnvyGwpuzmwaXPcZGBNLgekyNzxPeMdz1wNJTvW2DqEQfFeqfacQFK",
  "key1": "3EBGuREq2hbNJAGMpCkYiYuJNXaJCh4F7s7xWKe98coecQQNooa3UmQEgBrkpGSPD3VweCZtHhvoPSW4aHZUErHF",
  "key2": "4Fo6U4HfgW5q9vLrZm5wwmQh1eo7h3rb4tB4u7H2bQSNkUWKPQEgRVFZkrEg1YApuQ4LUJnMAiWPWpbLPPS4zw7K",
  "key3": "4UQ9PYGLdKsguUusQWDYR7AYRNdS2cxPMEeNc9c3c16KdT9kEX5By3MqExoaBcnyaYfjucLhMJUoaML1DYRdbgjL",
  "key4": "2F7XWgoNm4LYhCB42TmuLbykYVxb9kYU2JDqA39md9tSnn3kFCMwPRYMSvdAY1xqark9734xeTtF8sBT4TbyCSqG",
  "key5": "44FDSMRHYX73YYvgVdr48gFTe7drChijyEh88tSXZdfwDMMzEvPP8RB42qigWggxD1HFANcSprwq4PPrvKDgL9Cj",
  "key6": "2oBsnAFNeo9SzVhe9LmDeyTKPGBfK1XZEWtZav716T9Suy4qUAALPRZzrmCSX23m6i6eanX5XQLWAuiSxrkPjRYb",
  "key7": "2BBwY6vScf5gPnXK6yzURZ6BscdFCUjrxkRCcFdgskv5sWV5vhidvxvvAa7tZ9ktESLiLYDCJvmVahucM9yyNASU",
  "key8": "59P7EvFo9Ziot4nSTNKaqBCoY6JoEWyuJGttijzyjyEqxT1yveqvenzJcPsUbhNgE8PiuxEkv44sXrAoNoRTHqSr",
  "key9": "35iLhKMr3JuG7acY9XUuDanNj9EuNMcn4X7iYJzAyyfVh8Gftq59yNhy2VFxoYyXQS2FxiLBaLfLJYg6EE5ZGiG5",
  "key10": "Myfz2uADvVKGY4N3813xTnza6dJU4xNBVwVqPJx4bWpCQyY7Yj5t2omvTbc8x232YmuBQ4XprVUzH3hEt17jHpv",
  "key11": "5SyXiqk6NjJsGPVEZugqihvXKngTwugZ8VDKcB7zb7KMnWM65rjqpKrqUB6cJtEmSYiHkQ63VSUt2u4FtuAjvSu5",
  "key12": "4zXAvP8J4CCZ9szNsxrYsM5YpREcnxd4i29UK3GhAy4c9e1HWfw2CfKwsdKu2M4zsiH1j9xc29RCJAPBrTBk56yw",
  "key13": "2xdQbP47kPTHoRZPdjwfAY5vQ7o8kdZToQBGAfZdwYZWia28B4Fnb8wqe3HPMcNfA2Mumg7wahiwVANznfh7G5s2",
  "key14": "54arnn5kkgsTB2c6A3U8NrxMbKgZDrZ3Ty6yi2gVQ3EvFUGiVWbJ2NvUHwdep6tNMB6uSzUNJh8WEU2tfuFJMBLX",
  "key15": "4hUngdnTM5XB2PSWyk9qkoz3cGb5KM2FRTFEPT9ukkc98VM62XVvk4pm2HM4GAoQ5359nXmqY64eBU8wyrUoqadh",
  "key16": "DCbggn8A1qJcfkG71n4vmtSL12v6LdjQav3NKExoWUMRjEMmMP3sY1xkfK1kcY4FhhAnhM7iQTvJiTd3fg6FnDU",
  "key17": "4GgYQkpYNAR6f7jUFdfWMkrYtjBafaWn2JHzSrCNkT6Aj1soFy5xmvMKfQCwppNeLvCN4BYWd6Hx5Z7CiNgcCEVZ",
  "key18": "4zS5uAkDdzEagJq1eK7Fn5C8cLVt9psqx2iUN17teh5n51EFDP9YJdsvqyLkPs6euBy9msPv936vRNHFgcHMxCFy",
  "key19": "rkaHYkWdqCVdSeEteEbiPQBLJ7DMtfXYeGX8LL2JkKr3fYcX5X37RJKbNfeoTS5bPxQUtoTiKeoGB3YV1jgrS7a",
  "key20": "33PowZADsyUdKbHVBeHYU8b8VGjyxGrWU13b7xt4VRjk92XcP1yEZrArS9wU5iPYSkU3Pp8S31qy9eQeGnUDSd98",
  "key21": "uVyuACrQrT7nkNGzxPsu2NXqX52sYrjbz1kPBG5Hzn3hsZn2BNYXiB7Jm55hnzDWsZjTjJR3vju2tvEGV7tiZ7d",
  "key22": "HkqUExFLsMH411NvjSpa7XRmQUac3zMKD6vUJymyKAwK2kdffeoiLhrmdMZv7FVnw1dH3p636UHnEZwm87cN6HN",
  "key23": "3MpSvDmbZZ23S5Lna517BFXfzH6qPvHLWaU8BmQm7fxznXfqh9XxC6kL8zoZMpg4ZrmBNz7A3XpghHT3JtygEicU",
  "key24": "4PXwMmLp866BzTNBPQiYiQ5PrdJrmMABy3CEULGsMNYhQSES7FBwKznsUfaHQmkaLnE57Z5RvvcMsZiW1K2V9set",
  "key25": "5m91EB8eoqo1LqaKjpj6jioqpqaPkdZRAmCZEbVeNimhYv3xq6H7tzYzHMF8Bft7L1wL7ia2hWCuC2ey3ft1ds8P",
  "key26": "4v3NHXUhZMZ8QfdYaaDMfp81qiuHYx4VAnTZHyEn1kBgrwHtnzpP3573vsJjHw97UGEevhrhy4mHM48pm9otcvLR",
  "key27": "2ZXwdeXjVxCoowRzw3ZH5wb1U3iYYMqVoKKzSZo2pnDxLLHJxa2yDdUYMnMbsaqCDtJupMFEvKXDM9BDF1Si6LGc",
  "key28": "2U7dazvbkFAVm8b5bPDxBcazSmCkeUap8AZXB6h8ZxcPUjDhiDcFRBB64C8rv3E2MNBj7bWkSn16eheHTnAuiSJD",
  "key29": "2r359iq6cAUxB7Nc7xWPbraGwyxrdJa19nSE9dYL4AMAJnqFvrJrbjkSaSv2uKNVb7KFPi5jGhfsp83zMavmRMeg",
  "key30": "2f3FL6HASaQimtcsmR4yjkkhoHnQjMNtk3T7bXfHdVSiMKo91DQsq87tbtKWtuDbEfXvgaP9FHrpCBGvCppefHgi",
  "key31": "489uNTHcY92KbYGXehAPbzxDY3s2dABXDcc8ozUQu1prswoTDEfRaNuM2nrdgc7r19xicjG6qyhgP7zVK1wyi5xm",
  "key32": "Sc5aF2izuGAcBrjysxk2SSp88TjUSLiWbpFBcC2NRYJAZTXeVPmSfX1yB5yQH2ejbyPmjfxDabLp8hw8xYXANrx",
  "key33": "FSUFHgAXPkRPswDZE78dMFMX4UWKZoqwf4LqiGvXzcVMocyefnqsjSjeXFsagxnmRWBz391hZyhVxZQCDtYQmVA",
  "key34": "ehraP8gDjeqx7sSkg2HH1ESRt6QRyBZgvT3WGJykzJZyNcqmYHy2F2C5YhjvFSTZVTSL53a5diGbPBqN4HAz7S2",
  "key35": "52iLEv7ySyfcg8eBmZ2b6dmNrEXgygayG2QQ1ZpDNXYfYxv3pNRVX4LLx4nCqerzjRKa8Rnbqr8kjzn1zioUdbT7",
  "key36": "3hx2RyniEPhUknFEVF5C6MCvGiEDMbFK3buQ6p44SRMcUp71qF8piKaqsrbwWiPiVVY2xQhD5VNFXd9CrYjGkHtA",
  "key37": "3fbxVB4HqQUSVqA1BcAgp5ampmqktxiheqYHdcCNu4RoK2YsbfohWpvTSx8rBngEBomft5otSAbFy2Z1ccXUoyxt",
  "key38": "4GiCpHmPzEdgFuo8NgWDfWmhFbjFJpZCN7cUsEBdi3jEaEpwQBGG1bVGgAe3hFQ5LG4P8T6e2HaMTdxAuLZGvmio",
  "key39": "2KPAP83oibLUFxbFDVZQfhocr6F1jas5kmdLn7A2hrXZ5gekem4QcPud4FuJfygQRyaJxtafUG2SfWG4hcCdygRg",
  "key40": "56Y4urAayzfcgUUsGe8Uz43wwR1oiNkYNbPC4WfH4bV6JGG8AgbEQXJDwQhNiZNZ81SZKVFLtZwKDemwGwepag8Y",
  "key41": "3zbDCCsA5akQc4KVWGHThoBW4Ri26Ve8PKFGhxQhZNSqSnS8LTMHWC51gMsRP19uJzArheo6SffWkrqzRxYBNpzg",
  "key42": "4YQvPgpDxuHswx3dUd8rp5qjYmtgHmWJJC3TKUUMwf9NrGGe9LVaBh3YkWtkS58zST3fHCV1jr4xU6B4EywHAb5N"
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
