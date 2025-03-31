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
    "4pPkymYzNJH6yecX4x2TWNvsT6Hv4BfjPVcLAVBauH1CrCiBAe9f9CJFwq4LkqRXVsL598k2Wqt31uHgjNJQtUR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQFwsHtweQnpiWTqpj5aHiP9pQRv74wiZzuBopB4VYZcDyvNN9rukcJjgZrBB3Mmyq1PubEY3hSeEM1DKmqwaxX",
  "key1": "22jsNzqcyfdu4wgMWmLUJRstauXkhkbcp2JKkdMRcrNYzTQeWkfg9UmUCpf55ETNfjbEEpwGkkdeSZhnBHMJx5VN",
  "key2": "3GT45be2PctxBCtkyrmHbaUVAGDACGNY7r46sUS4FhpoRDJePF3s5wtgyQsPhJc2XZ6eZcL92h4HEXVVsuoncGc9",
  "key3": "3vXs9MWdEVn47qQTZLUkRXBpP4rvpYobcoGE7L79TXcag6h54yhnH6dNRASgH66tyymEPwsYDWLZLfxkFJvNAjha",
  "key4": "UqCsgUyNvySCi59C4AqNkiZfrFVjKAv8w7Q1GHpwYG1FMzFwYq9jEPaV8GL22bUyRS9wQT2Fn837SNh8omfB2mN",
  "key5": "22c9wej74NQmNDVEWPRUpdTP9xJBjqYtv1234Z6DWZn6K12yAevts8jUU3xECU6aNG6YEBZAbjMmeZZBPhkzERU3",
  "key6": "2NZkdKyPrzNpBM34JjEgGFCujGCU3nfqAKy3A4Jf8R2B1Zjd7kGrXkfdQypQMDpvz5kqf8mb1VZNT4v3Dmj88pu3",
  "key7": "4LGsLFXQgN6YAnEFnazt3AkXBLFiowL9UredZXCUgs9bXwjJYExcaKXSihYdfDaXcSdXXouCDC7tbbmbxXmhN4gK",
  "key8": "EbnCbbRtEHKne7UVzKs55z64a41P72EyC4XU1wVP4Ei7y8S7xtHTgAM9ECDfHGeS48SzakeKSqbS3tyUKhCFpg2",
  "key9": "T8Yuoa6VaGoHDMXDsHBn3Jg6bAWZdd3pmZEUuEd4SgtPz8Xv5RhJMkMoofZmVWBxZJ1jATB4c3g3f7tLgZC4avP",
  "key10": "3JUZxV9oS1sevuEVGQ6Q57ioXXKtQYjcva52tbBb7cX3ZyWjee5DWgXPc13PeGjSJQQBpoXGMtEqkxKravK6E8Ne",
  "key11": "CyXy82Bb8QdjPvFFayzgUzMkURR6yufNW5s3dboDdRkTEEUpb6GKpY9Y19nQHtVT6AnrQLSXrW2dekDmVZ9stjB",
  "key12": "DVAwqdDAkDtQtSMLzXFY1Vkutdr6GgqTdGBTMWtwh784nq1odjX5Lo4tm3X5w8Zr4hN32CKb1con3hUouuFgdWG",
  "key13": "5H5yfxmyS8eNWSzf3Bkihac6Q31f63z9h2tBqTDnmN4Eh34uQL2XW8jvcz98US2nSPWKuHtgg2n7hBqDSHZ5LVG2",
  "key14": "d8FfZCDZ4kPFuXpoW3ErRciekidhJLRwZeCuvLQK6iSWXyN1cjyiwtZNNjxTTKpetke8vMy1c7tmyJ5jdUXfvJA",
  "key15": "2CYCqMcdP4SekxfqWVt79q17jG2UNQLgDKn21iqxaDCD9zePJEKPrWEJe81GJQPekE4SjAmBWjfeRjSevhYS697P",
  "key16": "4M6EfETbmtDb9tX1oWdBXnPNKKVw9zwkHtRJMwQAL6m2M3qvj1a6VHLBSNebwJwRvsWPRsjDBFKyRAC2p38kBGDM",
  "key17": "36rTSdLhnqpQGhxw8y8gqChgLaxhY3FVHGHaGhvN4hqkKZ1j4Hd4qD4QkW22rcyqr3KhVoZVJG6oBJ5wjCiGZzPQ",
  "key18": "429zrTtAZ4bw3reRBxj6sXUndDM7n4qZBLUXYJf9jR5pChFUgooenirxkZ32vNNW3FYYgcxiPKNiwAT6yJiDzAGk",
  "key19": "2CDtC6pBge7dc4WGi9Y1gGw3Fg3xRcXRYqdfgUEqifBVWQew5aumUTfcFgGT3aot9crTZaX2jPQAGTS8zmX9Fc5H",
  "key20": "fapV91ktquXdsPbPN6vNBMap7xZ5qGDGFQ1MtzzchnGQwkAmDXLURACgYGd6oVATz4BWu9rU5pHKLZr8FK9kpU7",
  "key21": "2yiYvZLmztTh64BsreVmvt1wbqnDX5wFXor9wU1i5GjrDtPTA3MTBFoA9JL1j8EZHo2kouTNMT1TAL3kU27cGGJa",
  "key22": "5ysJqXRzK53WRevE8etYwo2PK4sdhf5eE48WdX1XjUhT3HMFbXVuvYqDsrHh1VGCUHd8D1dANNNDBc3Vj6Mo1UBW",
  "key23": "3zvLH4TGuVqKr8a3fG99cSLzYqZyrPFEopbsR59BkcxCxyyS9hcBzLUGJ7iYj95H2fg51uuZfr1fYVZNxtu6E7H6",
  "key24": "27BUHru2R6ocMEQWLJUS6pVJ72496Pns7qkL1NV74DhKvWKqu3WZNNNreiTs8FMXzNuzsQTgViwZhE4qiWPMbRmM",
  "key25": "TUnS57gXL2Dbxg32tTvf5iUp8RVeH631eSw4RcrURj1nmnxqY4Rfof9F2XBTVcTPsawSXSpm66SKbggUbqYt2nq",
  "key26": "3kvPnb1PMozaq2SjUY78vdvHS1dqpi5CDM4y658sR4VeNFQG42YBSvzjtHTsk5UCmGDe1ATFMNFRuCZTWmRUM6LP",
  "key27": "5wKqjwaTZvBXJiaW853opB3bEbateGqPa6bDF4VKqxJ3cM8mX6jCGkyt7a3WdipVW4S1gsJbmiD3KhNYLpfv17ei",
  "key28": "34nZqeBZwyW9QR51XACjyXk1JbobygyQbaVwwsS7SJ6irr3UyfQfQt71oyrRFBE7G4idWmThsiAkUCmqyPZPnBPP",
  "key29": "2gofqzC52Ams7qUDPFi1w14tm5Lh2xnmBQUvR8bH6HE7zWpCSQ8zj4Cuo5uUgXCAMBX5JqRvTT2t7HDkExrwwzXw",
  "key30": "5AttuBZj1PXMmadhtk959A9tXyQXuiLWTpnMGxoNKbRF67vTTfyXGUYze8EKroeFFcNa2cYxxMweSfNbvno1HUeU",
  "key31": "5fJEFL6mHH9pboLJZdXREVn1xx6KGegPbGq2m2awNoe8DphRtkjq5Cuvmw9vNxejtXEMGSNHmwM5c9j1UqHKiaLj",
  "key32": "2LTS2MMjAMXws2aUVNJ2N7utjGFXUC813CTznvtJBXUs4BhXwTcM2S7A5f5FfAFz2WGEBsiVHPyVSKoAqkyJSDf3",
  "key33": "dcocUWTChRwf3bYnFKdDMKFhdxg9Ei3UTRYifcEsDKnLC1Z7Hmc9egVSxUJDuVc87ee2hahAauXoR7FhvbtgQC3",
  "key34": "3jXHUcn2DDCE7x1DSpNY6SXLYn4UFkMvnZtxD3f4hANoRtwYZNFHmwbMSvbGn18LKc5HiRfaGGoEswE9qDfkp3m9",
  "key35": "5fVudfGCmRF24K8AoLaCCG8EQEsgCtxin1XFSScssaU7RaDPzLTWvRw89pmtYy5tcAB8KkzoM8Lcrg8NhWv6JR4a",
  "key36": "2o21AzsHxTVvyxKfka8dpK3gbvb7D4mcRZc2HfDyxixAwRwmG6skGY7imFoJmSuCsvf5Th6NYZyj8iK4Xodb22ef",
  "key37": "5bsqwRLTiwQpgRgDXWyU2ng48iGfJSUmp4Pg9ZcMvexz2tfqb1JRgNZGitmn1yowLYfNnKbEit1ZFXPTwMuRng2g",
  "key38": "2bRxReCZYUMpkgDqGnCBecZ18uzcQnQU2Zgjm3zXsiGSZSDS6mdFb9RqqAbsvVRVM8iiDzLeHwgwqfSNUw1Cr2j2",
  "key39": "5ouXUD9HRsoJNmepBW92jSjkYyktrAXSEYHPPQNsZq3x6fG1Sc4JxvLRuRP68W2ndJpLVZUcPqW3JPqJLJXvJ9vw",
  "key40": "iRYYKpa3RuzqkdsoPkvkMaU9gKTEAnRgMj39Ea349MqVVfzaCPJTP5wnLwmwrmR7J3SZ3ooN4Ta7Hwea4eHj19g",
  "key41": "UEyTLN8y3xa1MXzDNmXy8gAqD4LUKT94E8KepRV1DryZPUVBaXGHLbFjiaFVD8BRtkBFWktCiVtEk3w2rBVxXJQ",
  "key42": "5g4ajWHneMcVFY2Ahf7Du8pqZCTLvWbuYYgPVwFFfFcFx2kSNXa6PMVzAPGnwF5iFbw5gqWgkLnNEsXa7z45oi8H",
  "key43": "5Ba1Yde8AGMaNBcX3roc9nw4PHvRbiNufaSEJtLdpjxifWhGWPavXcfWL52kdFdGNVuuveUsRXXjLuKLmpWXYQcX",
  "key44": "3Ga64vn6rD41j4iFELJXNGpyVQMTZq784Lbfj5k4U3ZZig5jXaWBqfHrCxicMoizt2NJEnytGgNkogj1HXCPfyNa",
  "key45": "4h5FP4MTfZBVerWohmgDSeoZ9Djizxzv7ZWEchuvQAv42cXo9c3CzPfDeSHVhiEcjHBXECx3vFdZw5DP9nD9roTf",
  "key46": "iGv2tFKnGCso4NA8uJjgEGobYQCAapG8axFpi5kAMjadESq3msyYbVthF68tUiNwCDEfCbfsAsHa5ntG1PK2DBv",
  "key47": "489a5qDTWqNjv8ejfBAtbxhXFGpWbWatcGVh9qeAabarVpNKB87M22Q9Z9hXLUofMJSJTkJy4brcrTckiYVyRLVv",
  "key48": "2zqEdRoXAwzQGGZ2RyY26g8DeZrQyD4ZB3wShWGC8QD2qJqbfRjAYPaC6J3q8pfBEGupy2Mkz3HafNHJCymrB1G7"
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
