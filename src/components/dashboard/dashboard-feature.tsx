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
    "51CBnjsYXKG76JAjWAgH2wSRhvo7SyG1QSzzNzczYKUS57Y57E8c3mSjPY23vk9wni9Yx6aDQReUKjLMABMJorx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yy67GYPyWUCYKtsEDDN8vWtiDheeZ4UQEqmmdCYWL996tHMCFvbCFrWSP8T8Ew7XikEm4fspnk14GSSiH157XJA",
  "key1": "PCA64j6HgNCt16zhXSYMshnDdU5QmCkjHWgc3BPQyzuVnXtgRdeNUhRBJqfGJyeKP49fM98PX2CKDTZowLpXGKw",
  "key2": "5coqunh4DCimFpQVUp7AV8pexgsM3Cjfd87NAtPbqxmUyqQb1n3NNJDJkGgHCeRGp6eRfKJ3BgYTogm8qMhMRSm7",
  "key3": "3GcR36rQfNCE6Wg9szENnRo8KjwvrZjTvjc5qgXFivgVBDsE35X1BXq6FwLtzScKmiHUXeFcyyJtV8v7x1y3dTKy",
  "key4": "3iCEjH1pqkYxxTKZD9yihS9Nfp2JfSwRMH7PXaQpcisvb3A5mqYXqhyKC6JGbcLCzHZ74zjkErvp3EUMFskDRwzC",
  "key5": "57Xd55pJfsEDWYCgkSChxmpgvJf1o6kR6oa6evt5fmmqJKMNRXZvgXdDkjwWJA9ZzMTMrq6th7dohzrdRXHsXFgi",
  "key6": "3vU128saFxN95ZrYpDjWJceUiMfjuM18EqgSSPfKJ4PbBNetqViQpjSv8KEMBU7cjX4Vq2RY4uduP4GUAAjV665D",
  "key7": "4FoAVJMjfxVHKnqPLw7j9X6PvnMMSSQNraHgk2yuaQfngfPEzpGMouLVDC3ot4eHdDewKrTiqvqyxTif824wP8Ah",
  "key8": "5sCD76edSdyBwDpQmhY2DTdas2xjQGHkPqF4Kp86hvYTiexbHDDRZnDb7hvWQJpUYZD4CDkzj5g8iW7wRge2hofU",
  "key9": "5g7E3fL9ESJGRzGzDRDUT7i4MSy2tRJCxhJ39Yf3jmwvsNYjfG6uZGWVDX931mHLkDU8FszVf4JtbPxJzqPqddAV",
  "key10": "57p4fVzH1ysiaUTwbYzAH7mEymXqyNRpC2msemk9em1AJyfu38gvwnvvKdaVNjgdDBcQL6rhQdLu7vo2wSHS5uyX",
  "key11": "2W1wPufeK1VdRFUy45Ker6EiBYdXWcqUYznBia7Xgoq9c6XFWgfW6ArJdXHtyk365KHJTtA16XWET3aZmmPgYE8g",
  "key12": "Xv29Dw1paTuytobjnaLyhnyxvR4MPV61nmYixgqmSj9VA6MbMmPtaWQFseDL1ZojZwE7TaCPo52SWZgvyqv5Qig",
  "key13": "3cGgAx1DQav4bPgCGPKBJZ5HgtkZHKfKkjaRKQMUvrsrPuqp8ABNqufbM77nkGjWzsWyeVkuXRtJi1pYdrMYZRyw",
  "key14": "QRCBwXCXufrpEaYQVXd2BGeZA4zz5pjohJrL18ZegtTrYXLsuq4BVsAKbL13vKqautBmnKQYLqR7RsBEfAUdha7",
  "key15": "2V3UUGjyzy5F4wVsEs7f9V28z1exzLaxXU7XwdHpogpaFf9mrYvVGuL9BMmUuHMiudYsSvWQp83xo5YwvZULsNEg",
  "key16": "64aeWLQuieACKEF4ETBYTgKiaZs9ii1QokVmx9ewmZ2NXsabULpGSvwbXSxJ983N6sLaqmKmxyRwEvFCHs1n7zkj",
  "key17": "4d391PzmsPcEjQjXjodpmUouexxeUP67pPSxgy8rhfvduWZShe3yE3m6RQn7HYkKsLkQwPw9Nb8N2jr57Dz8eLyX",
  "key18": "t1LWABPvDRiGwA2Kd5MFfe8PRVnz1RAdgxkB95LUD7i5iYBBW3QprrqG8HSnNtFhCEExMQnmXeH3FhBiHanE75o",
  "key19": "3aHjZoFc8vZmgdg3wMuQqTog1KE7Y2mQgHGvesd82ymab6Th7xAuG7ffX8923D4wkvbPNNuiyhKAC9zhiNMn8dt5",
  "key20": "2rdFh71UVKHVEXXvfym2gH5YMiDkkdp9d4i8iBt1XTbuEcC46DPxiZnGwVExHsUZwicuUz5BjeNCucDhkCsAxuCC",
  "key21": "3TGiqRr6LYMiUiSDDpXixPtZXqJqH16NVELWPRAZG5jJUQbUkaCDKvUtm1kQxrhLDkARQCSPfAJppFhq91vWoVxg",
  "key22": "2hq5JouRu3poXVJqphgzyZGDtd5Vn2nkJP9oAZRR396LVT3RJGv1Qh6mNynb2qT8EZLygq8CqAB9mqAvVJhb6Gv8",
  "key23": "GVSNrmuhjvPVFSEWxKQmPnJm9G2F3VMg1cqQL8B5aASSkSyNk7jL9is4XBEeudA2JNRLMFBDPzF6ccjvspCiksH",
  "key24": "3riSDtUDbAosaNVLuhH3frfEuspFPpdEVMBb8snC8ypmxH9v4BHUJ2H4VCTwpJySQh1PkFqoYj5QZkCLhqMZbiMS",
  "key25": "2tcgwEGvazS5zgdDazDNjbq4eCnvpvEFujHLme1gxKD4efrNQTCHPmghwaKx3cTAR8KGwQ7aqPXF2keazNQk4cY2",
  "key26": "2v3PSkHDxDrZLxMRtLXjdZrjfUsv2jAZnL8CWJWpXi3vyCBPrvnyLLJ65VZth5gBg17qArVaAfbmVDHNkHwAEV6i",
  "key27": "4yy6S8MH4m33GTqAoeJjFUthHjcX6gM6iueystECnwQs17mfrkmRHupBZrSuSW3FMpq3QpaLCUtThyRk7T1kkTYd",
  "key28": "51bo3P8DAiB6zsNb2gbcsXKKZoWar4HFoohPtFUHVqxKUp5AoKbZ3SkJsTnFF6P7oVtBj7E1Pzk3zPEeaRof4y29",
  "key29": "WuWuwBjSSPJXtSKWVtjjNuXYJTLatumVKvke3RaAiy68RrbPexv3Dh7Yufh2je1TJiLiG1Gmf2Hv3fxfnTdWqHi",
  "key30": "3HUatUCY8HYCe2YxeuusHURbynEVyHyjxkvde3D86TxwE3BZ2MzJ3dxNZGExjbfkbwEsBEKtE2Mh1QQ9kPhZLNe5",
  "key31": "2ibxdb5VnGBA7E3AL3DD43TZ3yTEC9NMPNCyJ8YQfsUpwZaHbUPKZws4Ze8Vc4TdGPjtGYazNuQmV6ur6GqzxFQS",
  "key32": "4XzzD4iyBGkwZpta44WA4NSw3nufvZSP94ioCjEpuTq7VnnBy5NBS8w7nCWu9pUKHTxYfaojwCawUi7pexTqWfaS",
  "key33": "2U5ENXCQjVsd2HjCwSadbEFWftR9ZaWE5Hy3rrWZvZ5hDB2hv8hgUv5iYmZ6FfvDGvgHP6PzmBUwTpfmAs16GsBz",
  "key34": "2k2aoCzW5o933urULxTbSMNkQPTbznhRzzuZ98gB7CE2mr984VRCGvQFhZtJcUt4g6sJ6UD27xU6gEJDDResngpT",
  "key35": "54R4ZuixYQeGUNUMo5AEJpyBFKeTaygKUbP3h9QQhzviEgFFJvBxtWXxJ57F9G5yY96ZyBhiPdvtkP6TwN9CKmq3",
  "key36": "2kQmPefkZNWiNe7jibnnX8XtfT7B4sapJ4WMopnvMmSTwoUR3gYYsjD9iJaPwxszPNLi7R4CsQZ9bBqRmYwiStPK",
  "key37": "5bw5DEjx1G1oWNKBQFHkaDuujAAF1ScqHwtFdmnwCKNEafSHhx4b2kQQGsXbVHhxDFfKCPPNjDRCKwq4SNsM7mVD",
  "key38": "5Jvb1xNVbENY4kjf4zfSqrGzh8rNYQK75cfYd7TxT2o7PLAS24FcLFqLDXtG4nBPTGidXzQj51jxR7wczAZNsNXy",
  "key39": "4oNWwbusnk2Smfyzt43XmLuVSuvBV7b9AJehSwgEkMDPiJF5nv77hktPyCETQsazJ9EM4C9813YTCs7hRQdZs23y",
  "key40": "4UhvwAeot9zpEswwd2Jay1ZGUsAv7dYf2kDgHQe6qdhQyBDfnBPhphH7GDZY1bpKo6jZbNKRCe2s7FwckrzNPzZ2",
  "key41": "25RmRUQTbk28fjqixR968CJQwzhDGQBRmXS9VkpaYzDronF6JfjS3qgETJ3WEnZeJATsV8pyfCDKUPohGQdtRpzH",
  "key42": "293LKMdhLPALjwRcyPDd3or28XC5T5PbjHg9Ew6okymBDRM6KZXMAxgHdK2m3Qg7LdY5CxpneLLg8YhWXRFgMstf",
  "key43": "UuzR1zFvL4HJar4BU6qpryCFKi52UXprb2X5uzNa5bvfnMk1FaM43t6Zq3srNiDZoqc1bBpySPYMXJjg6V39p6F"
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
