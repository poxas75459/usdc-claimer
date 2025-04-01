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
    "2dyZMmHPrU1Ywbw96J4DGCMgNgFKgGGzDgUd4bBV3Zk6jPYxh8LNCRpiXBGhtfVhhxVEEg5ULy2WmB11E8L9bksy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bpEFKiCFTBCe7Zgwz7YvqqkUbyKxwcdm9Ax6gbME9JahRgw7SxMKs5W8E2RA8ekZDzeDoUjWiy9gbiWLpTvT4JE",
  "key1": "2sBBXTPtUsKXX3qfvHj9mkNpe1jSVrz3D4S6Rc5dgSRyRpmsVAfhQRVZhUcv9zNeFS6UnL64xaPRYHjW2Avtsizc",
  "key2": "YQFZLgKGhxdseBrbpJCioYDR834hH94kBw31KgDceoDsPavY6QBo1184RJkRQwAEKE7VFGQyK3FTtEtrx6SY8sy",
  "key3": "3Euvrk3ZF2MXnYiCsWkZKJUVTqDcuqyCXLenYs9kBcfDDmuLjS3qs7Er4VPg1FEogariuQUBeCHL59a4saWqPt8X",
  "key4": "2YmgsbJhdgyBfXcdcVnkLrPKXkLN1rZ58GFqxwwcbPJ9VvH9skmLcbuX78BUEmVdcCqdS2up9Fk12DEMMSXpTWQY",
  "key5": "YN538jdLtfRYJxQ8XgyHEEyShjLmWbtSKVJ3umeKyGNzw2nA51KbcTaUZEz8gdpxGvv8y4qvAMmLSB9ojercgXm",
  "key6": "sJ2sJrjDz1g9eZ4WsTo78ytxakmJZsLAeVDuExKy2wxqjFzCJQzCLUmBQP6QfM7yyKdETzqgoQquRbSfm6vivdu",
  "key7": "jCaNbQr4T6FrtaDgbDajcoVSQjme31BVMKHp9qJ2r4ADo9nJKr7ku8SsyfcyfkWAhDzNS25oDVdMukZw2fJ2LQV",
  "key8": "4RrE3sgWudNVRfKM1wG3EpzmLZYRv4TXWiqzqsMNmX9J3zkie7JjisvwtVt62bLpD7KPxDiEEA2tDyYg4M39Bxc6",
  "key9": "3fYUH3sHPtfkxj1FUYoYpaer3o2USmdVPYu3tVSnHXQAxH1AwM9GvnqZtmEiDQ1r8Gbwitu3ixqRmkRH7dKC4JKJ",
  "key10": "5UWaUyPdc8gPYfxC6tYNnotXVhb32qsvy9D5CzfZoDBtWFcQbAPLxAtp9NEUErPMNuaUX8JM6yybcu8XpdRM92fn",
  "key11": "2UqKjBAiUizCQ2qPS4KyNUJtpB4wu7wfVgpKS9JfnCeQsW2Ubyhoust9swkriZmZWw5CP7UjeVv7Cw2mJgs19c8K",
  "key12": "3H7tko7AmYqeCyQLqbYFyAhfErcxKpRiGTu8YMfn416C7a2NZFJtQjS7XYZRu4QxKzoohxzKD5A8jUDjQ3VaUuSQ",
  "key13": "2yY38yexEB8bHhFEQMPw12m7NwWDCaAhoFVCty3LrkRv7CqWAp1eLhVKZZtZLRReye5R4sAGTw4QqZgSD5Hb22FL",
  "key14": "625MAQLj3SGiJTCTUrb3TtpYL4Wqjo97UrEmEiNaRTd9Y7UUn7t4dmLcJT9BtTATFhTbxteF53CybMpU7dWNes18",
  "key15": "129ieJmHD8Poe5CW8GK2dzH6gAK52dt17PYG7XKqaQceLPtgTmJixRjrNkJoeHFg8vvj3LoxXt6QtFQp7NhyB6J4",
  "key16": "365r3KU5W1aEPC7xtzGbPYbfvqfS3p2EhiR5oxrMGH8TthTEzJDMPbtd5BmoeytHeYHDudq4GMiMnzVHpLyd8HFm",
  "key17": "34dAMoRcRX65So2xfd4Kn9pYCAoUeKF97RhKz9HxnvormLFEKNYrLDLtncGryUxZbJ7ZeeQNcUuAWd9ZsGyx7sbp",
  "key18": "5n2ZGYb658Y4MBJD7pWkr2USLsaXAiBVsAVm4XSSGQDHvin4kMnx2j5sGG1dq1cREExqpFkDAdfviGKyzCrxYfGv",
  "key19": "2no6JFMHL9m6938EnRFJ3MnRVZmT7CTD2MgYtwoCbRq6dCf5AtoV6G1BxksqZUvWe2xMDtMEJvt9XGA3RWfk89k9",
  "key20": "3SPDX8zXSN2qnmdwnY46DuW1Q1KRS6cvqBq8nor4Cp2iZZc587e9uZ4JBQMbas5MhDuzgvzXdMBMcs77AYyRAGqM",
  "key21": "5srqmpPn9WHzKsQzdgYHW6iSR7JHCNeMXgc4dwoTjsHyUs2CwsqMAQ3LWtpXpCijSyuzsEKMHuVxp6LeXcdrB8E3",
  "key22": "23UEDfVbBEUPSLgHShuxQQD4s3zxfEdKS8DqXfjzgAvhQurkcf3MxPHzmpc3YRmDeUysebssx1Cud5HSEgcFzVjy",
  "key23": "UrXNi6qVSRWVeGAaUhTJA4WB7ZogrnKJypUQrNmjhFh45pzXhVG58Wp8XXbovZxJ7n7FHPLsrxL1ZE5mZPeqzaF",
  "key24": "5G41ca9f388K2in6h6RJ6tWbWZo1hN4JKonQ9X9sLvEfnxsoqZzSTYvL94Q5rsdw69d2s5jM7aW4u6AMKhsyu59t",
  "key25": "63bn3B1R8a4keC2LVjihpmGvBrcrHbRRvRLVTnNmwvtUfpXymUgcg5kQQhWhjquCWAjn3WTHDALdNR25PLsudr2x",
  "key26": "3KCbvCd8XgYbwWdXwZsj4k8L6CPhpMp4S9K7RbRWHSi6uFc4hXrigEbsxSJLVCV1JDiBkwtxR21F4cHGcq6WwCy7",
  "key27": "5PmtB8p9Vcv24rRNcm9QGMQiL2zJuWWB6QAUgX5YmC4tJppCwmuLByoaFmxtuuhG64JPohXjGNZN7cmikp4BSTQq",
  "key28": "2AoDtfDY53dg1s3K32J2iwbkmAqWWyHFeqLKh2U7rNAs7f9trfGhEdPi4gNUYAsgjQN4LZaR2KTMA8ZjbyGbPSWb",
  "key29": "5NubJLwNtUe2MCL1k2ytxs2PSfeRre3hyMu2iYJkmfNPWTdNiBcPNTH4AfP76PMbEiJYBBnAtQ9FRzEoKwXe4jE3",
  "key30": "5AYeHfLco5x4dmL3mcmvtAaYZ3T1q2YQbK5oHLYWgCVBHgc9a8vUxK919iVL5Q26QmC89yELHKeRnzboegGzk9pq",
  "key31": "cxWH9ZcxrfFgPocn4zWkTSv9577vrh5m88KHXCQ4tcZcg5nzysFwJdes7XJUbEKyfkeFJH5pqCHBPgJvLij3c2M",
  "key32": "4VwjRyQaFbWDVm7JQhUpomCVEejBhur1WEDixLUzNj3TqtqjFPLjZkkkAKRkqNYCsSyd4zfigdpBCBzERwvo4awD",
  "key33": "8WjWnexwzi5vxZbDd8jMLkAks5gRTvhmUhUnevxVu9hXfvYVn1YjbEdsvPSeWePgXLKKspieFWckYDHvgGyXXMV",
  "key34": "3vk9LRP3jX2g2rb9fbTa8yfn3NmZKwzTWmQzVHQoKcKepAiZGiaFyxFvCTFGN4BnmLiiRmkME3RXBPzSw6khVRMU",
  "key35": "3U7zEwdwdsAJSZS8q3uZf4xDWq1f5X3Mo1yjb5z9KnEfZCuGsArMxG8ecP58yTNCtwiikP4xqnUgpD9j4vPfJ5F3",
  "key36": "281ypfEqPD6Kow8WnrJmLWo54JwLSZVEchrUSxVPh3Lmi6FmyTNaQbcrt66Xxy1UZsBHmuSj8RmQNTFu3B7UN9Pg"
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
