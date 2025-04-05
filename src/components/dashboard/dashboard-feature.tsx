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
    "2csokmKo6dFy6FLJ9c8xMYvdf7t2U93zBa1utsscFnHHBJ5efKKZuNFTm67z7JiTt1ix3f1e9BwXhiUYbj4DA5mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uh59CMq97Pun3qazHahC2bRxjvcfkf3K1rsyTxKK2m16T9wQtSCUPBckLU4PzKfccZB9cLr57a9V3TV1cWcHCpQ",
  "key1": "65NeDvKdeRFGMRqMYmfAh7A8jvESrn3tHY37aXDW6xUYzP4xoU1CHDFtwUnE4DFzN9vPsgnCayys4tQYk1AMUax",
  "key2": "35czUQg1ySuBWovq7umvYdpCCJ6q2x7F5YyEeMWgaC6hzuGAAeqtCMZ5CGTTntu8Mffmc13WPjFSa75mZV6v6w4Z",
  "key3": "5M8uVz5ayUwnz82sgkmHakdcoF6vGJAVkoT1C2LVBptBMhVvPZaXPiFpFVkgRVgym5cwRQWC79pzN1qatfhCBrtC",
  "key4": "4tVtaJNFaErBvLwKRA5oQ2gNcaUziRL1eEjhAfNrCLiqdxc8pcVK2jSBmVY63jFbfjr7eozXeZXAnDLYBNxos1m4",
  "key5": "4CsPrfTnLWTbWTXzs5xxWCroRrkQX4dUk23a5nLb7qMKoEjcWMGdsm25U4bMCZhUTZasH47poFcsTSbn8ak4w5om",
  "key6": "5iQPNWmawdqSjwJfarMqZXtv7frRDsKvTppUtw1U7F8zmdkAzdgLnW9quDJZhMuCnJosbxe3q5Hu3fY2G8KHXpT4",
  "key7": "26A9r2pnHiZEAhWkKxLwzmYiKtb6ts87ChojaBgiCGgD51E7eo6MTgd3DwjDkRsEit1iSLsiQGsdXMg7tbKYxm1X",
  "key8": "2ST1RhgqAusBHCvqwwmpXhga4F4gJNRPDuqgNbwSA2Vk4RwZbYohR75CRVHfRsPqgT84RdRfjFUs7edw52xQKSX2",
  "key9": "4qnBv8EoKteWXysithmwxc6vvqjz8kNYbLDAkfdCuvcdiVPRNMrVgr5XuN39p8W6QaM8nqqEDQvuisq5hgEcTvUS",
  "key10": "63eVeRkJwEJGuZZ738yL2qVJB6TgF4sK455JV2aMzQJXpuwhkiiz4st3GNmokDsHxMKzuSpz47gt3zkswo2rQ43g",
  "key11": "2zEPWxqyAjjmVZXnYUgLS3cYTMKHQUgjoFaotyhN1wJ8BU6xsAs3GpMS2YZSWuMtRQEk4UsL4hp7fZGtdtbTZAGb",
  "key12": "5f55bLLQQviUF6R1W6kCgx1fD5vxn26B8taNZAtWombPSEbx8CDE1f16tm4FokexsGTqz19PRK44giwWNhuxysDp",
  "key13": "5cDXU72q5se8mWFt2XgZgDJd5nE4FVU6u6P59nqDVRveRghdCAiWHB6T9KLE1UobnBpk8adcKqDeWv5TQndwX4Jo",
  "key14": "3KT6WdGDViX3dTRXDAvZjtidc1kQHa3mpmnYLNUKqsoSyHhsjv8AzWVXsskEihvvCAcQXpVMRsxq3PhAWr3JBkDh",
  "key15": "365pKzggUoSZHA2Fcjq2mNk4vEXhkSAjxtSpb694FRHoJdqNxE9MLTKDYBPGdX2aGoS1FqNhSLr2gC2MskLwhtZ7",
  "key16": "4ayeLqNCaVxbyukwj8Xz77egW8tyz8J1seY4vtbZBAhmDA9QJA7jvjtyT7MJvw8FcNb4G3JpJgmN9zKSnnFZagey",
  "key17": "2hWraTT3B9aT3W9PcznCgzuH6vEWB6ijpiM2M7ayNf9qF5y7dQF68eoezxPb3pNn38h9y7Kdywt6tUXuQWymjTUi",
  "key18": "2ULFRMAm4kaf74ZewXLRUMVSKM2Hhear1yTpSEhZ26144grxnLWs5g4JNxVg4bfwPTum5vJKshTxWxNPkhTyTo9T",
  "key19": "ftEjEYcJSdA4Myj1fxtFYzoTxyp7jJ7pD9Fk3TYYu2jD18849A8PdvsDL3zm6RdgA7vS5ANppX1HnxuSwbjCDvG",
  "key20": "ZnfscYqPUtPXCcFE857wWw2DVBdfFu4DgqQmkKdarrnDSK5YNHwdybai4tKjGYu8uHUwx5JB72UFiBZy17dqJyc",
  "key21": "5tGRqRNCLGxgxHTyi1QvQKDoU6XMg84wY1zjNP6JRW1B9mGUj6DM1955xxw8YyiMvs5SGb7sY9RbQaXoYsrwy36w",
  "key22": "2gH6kkKS1jtTNdSkXouXiJpcYgq5hmZ7dYbmeiibhWFhzsshzr5wyF9ocaLEESTw3egkBXP1so7iYktD4x5vjJG5",
  "key23": "5zz38gGuQhvdqo7wcPKxHRMwqWKn8ehwvcJZ7kStxXhDm4x4CzTtuaHYi9wHMMzuBfVs7PBzNUUmnKPtJRFfLLLE",
  "key24": "4bAdACMGm4N4BDcGqMs3JgZfUaT2QCCqJHY1hiXeZZcyRmZaLHW1q8FJwiLrV8vmKmDftuajWebHQ9HJBzkb3wSC",
  "key25": "2uFowB3bBLri9EECHHXAmNWvwkv2AntdG17ZQDx7eLSVmJ7b9kqtjLAN7LtXNqmj5n2vQocTHG5N6qmHFWv5Rr6j",
  "key26": "5ugkhUSh9i1f94mrE9AMsnTihNmMW35oiC1ikGNs8h2ygcSkEKf69foLpAih8C3tBCMdyfCZf1PAzp4arp7DALdm",
  "key27": "RhWkgKuyHzkLnmYgiHeP6NccD5BKtUxcD8Z8nJCapr4RsFHXF7g8AQYZAuKSp2xoeFJUgcDbuXMhNqfwmCFejcq",
  "key28": "4aGzJ5ezBYbnqr6t6e9JxsUX6NduUXYqBUApGkDKTTb4d1z5YqMCeR66WvFj5pRu51rvPuqPQmdTsoHRJrt7jhtE",
  "key29": "3MmM5eMrkaA3LN196iihugRBo6eHRSS5Gxe57XXELkGd6Spv5a8EpEsZKrxwoFk8uBo3AJfTKGHoFXpgCP43NWWk",
  "key30": "5krfHZmD8nNNTD1hveP5WmUxRTcp5C6yVa4gGCGpCM1seJcVVRCLkqmRRhkadB1BwBkePCjozGNsCPVR2Yvh2qbt",
  "key31": "2ZTm8xgLpMtMWHfbASU68VQPRvEV9gLAb4KKtLX2BCyXmCn5PyiXDpweaAq6acsx2KTC8tu4GX139xkrUfWgcxwg",
  "key32": "3XBSVzS9MmETTTg9GY6A8NvFMU5uqexECwoJf4djhBUKMhfvGmoSxwxW1sk2MEMJdW682foRW4Pj5fUt8TXANGn8",
  "key33": "Fs5Pdnusv6x71rT74ASdt154rMM28pvQSRc7eoBgrnDU9A8UBakjE3dEkE6dPxoS1UzCsHfmW55af1cf8nnPHBV",
  "key34": "4PmHMKFxxgWQEzEmNE6P2p1suWxGVX1dWhUBKmKo32JrvUmRoEbKgmxdp5CF69mUjG1joAZ4TxXvs5PB34184DM6",
  "key35": "3rnqDynb4oCQmVymfcuBpxZanUSVZLy9ydgiAdbF1fbadL6EJBb95hnHVqQRtxGX3bet8BkTF9y63N9MfKRq2cai",
  "key36": "c2RCDZiid5jAgkqxEiArkjkohVqHiVmZAFBNLeoELXfgsu5HVYRPs4m9YTQgbFu6TFC7AZK29DqcfHBtxraKEeR",
  "key37": "3aSnDscPKtBCdukXJb7wFCoqZnn2aKFrJdd8quhhxddWzzrdL955LdgMwo43sCPxqDwLnYMimyPWPjnHiQS6kLWd",
  "key38": "iZveDCSyM2HGuY5kxnTxjGEtDo7ohvTYJHoWGYEG5xG7XyVG9iihgZ8TscR5L97DNVLdS22pY69oJVfGueFEiBr",
  "key39": "5n84sJqKdvmK9BNuMYEtcXYeLZ9nrXcrsCuXs7k6ZHHe2ws7hbMAyCYcKfCzxZQfBv3gXUVBpzKA2U8Xuu5j8bNV",
  "key40": "3sRNX164VNsTTKQUHUV5bH11pFzorpz3YSAYNNxLmJN5U9ctrRBsBVpvfTXcexot5UZqcPpPjaXJS7VDZLwrrEnq",
  "key41": "5cr7DQoK2bJJearbHhqM7h5qyEuMqqgUNUZpo6Npsc4DDXAjWDv1ChBh219ExnKcSLTyfuabLaEicV4KvmCYTqhw",
  "key42": "33Z69QENcUoBVwigKiLZqNUg9cPe53mTeGSWfoLgexrdHtwy9UkWKUXZny9nqteiNJiGPGTfmWxZBm5qxj2FQHKP",
  "key43": "5QqPRRe2FjZ3jhf3ZCFskLfxJQUc3zKhwWLyZFPLKvH8TVdDJEwY4i2mwxwktUgDJdz2mB8UHNgf6iuYAUVFKTRD",
  "key44": "5fufqKwoE23B9amNKK8w8CiAB67LDeRk1nYoDtZ6biPdV1BcKWwHmBGDMpsNVJaC5NNe3R1b8TZznJVAia5FYqf7",
  "key45": "4E3ZtYC458PdzgSc6cUiBYiUL61iptwSfFcyYTYZLCEqwCuNezFQdGLt6Wnmzj7v1sHLqntSFpPTpK4pMhfTGAmq"
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
