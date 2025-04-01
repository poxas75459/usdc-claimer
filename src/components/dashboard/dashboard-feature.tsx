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
    "3JJQkfLxSSvt8rDCDXTLZs227kACNQr3QgGLX1T9Nt1VuiDSQBPr4dvL79YRDvXuMkrvJcsr5v4y11hyjdQrG7Kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "514fKZ4J4pcNxu4ib2SmDT9bnr7P5nQMX5Y2zUG8EuVMVgjPaYxpJ8vBkYH5siwuaQDCpVrRpmhcLKWo3FfP63Sh",
  "key1": "54fBHd2aC7srERsegiUWFG8uRFX13sWAYYat4d1DCo5MB2HxfvpdBU7GmzS5r3RYCT95iRffJD4weNKLgkSkopS4",
  "key2": "5Nj5WSzDHdWRezxE9D3coVFwerWt39YPtzdkPhCrnxYmogS3rtPWajmg3VN1drD9k628XBqXjTfnRaXcAcyFMx3Y",
  "key3": "4Pt9CEYqjcWzpSjpe1p5uPZXqUdEKo5w13d3xEkZByv4HjbXmcpYAameNUiASUMSfzWVSHroGaQgtZkaNYPYnjs3",
  "key4": "zjmAUeC3CYYnY4V23N48wCcUZ6g79mBxV5KNBVj1UdvaycGFPEq6daNnDMohspAVGso1SAnmzx5yN8pZT22qYCE",
  "key5": "4ywTRKSYJvQHrtLyfo6g3gpWfgXArvZT46dTARzscVQKem62h47LMzQCDdcrqiXomAC8iq2nQAoWSxMCEAn7AKRs",
  "key6": "5XqmQ2XWstzbYuHpXVHaZsHipdJBQtLQwZHt1hHJnZQYisJNfRSWuEnhqzv6s64rq2PrFuY6k7V4nKuA3NPiUYHd",
  "key7": "2i9urtsVNr5VQKM5SzByrXMNvBGgRTLrczdrhWDwerFx7bKzWZvKjarZRFPoPWY8Rchce6DAhn4DEa6JRm4zKM4c",
  "key8": "3N6JY5xzEAN2QZAnMz6spdgtG8sUjfKp88Jv32MrZF6XZJw1PxKLvXEPQcV7UtT1vhxdm9EiVDdFCNBK6x3oawxz",
  "key9": "PSjeXgDuizULYgGoYC3fWtzXkkAVGh1mAjFAsPqd41Be8qDhW8hakZdnVpuHzfMTR2EYzJWUHtVswugJdgqTwy6",
  "key10": "22zZ9zDHR4FRAM3ETQcPgRXdXX5PZuth4qGSEEPsvYn3xJKRtb8yeWXNepgAqyStJPBmBbGFhX88UPTXvNk3p5Gq",
  "key11": "2MehYMdhveydNgXsTKvbDCFXz4TD1kft1Y8ZPsmkEwjLgZRmtYRAYsrm7FxquGCq3pzrhJKWwZsDJei6oWtNQZan",
  "key12": "44fLHJnGPtaomJTpu9ZGSA3NZNFd5PCNDMdXbq6gMybj6HNoLftFkmQunbUrMXL5BN2ZBFhCfX2sUNP543cZZ9be",
  "key13": "p5ZKGJdAJdLkywkMbwuyhhHuVpk746xAf7da4c1eH72Fh5roS2HPwacQYhKNShLNxcx8kGDX3xwX8HufjXRGWYy",
  "key14": "5cmdg4g4tmiZ3i5X4nZMcDPidpc3LxkBAayCtro6Mu1WB9QT7WiPs3BiXbxXwenkSKXuZCymfZsCTGHvDnfDPyr9",
  "key15": "2a5wSCpSzeN3BaJK2dQ6uUJ3jdvG3sRV5KqSNX34ziPwV1qaZkbxXdBKUTMigoZBPipbRmH2GRStihyRq8aGKSDW",
  "key16": "38py8Xq7ZW37XkzRMQNjzWGUVMzXnfnaSdUXUuqSwfpSAtxWmrSrgLftjbwdibSsM4ReKc6yoSJWPXsDywtq1Crb",
  "key17": "3BXpjxuqRGrdiDyrZ5CPNBWcBqKV1cvGn7unmbPe6JTWZaHbWuD19dhdrtAVqoremFcVw1bjXsyoTsmFBp4JH81C",
  "key18": "4DQxmyqgHfsYVWqnqsXp71UG6pD1TPmBrTzYwo6gxc9n2oqU7tf5hd2tA1ou6xNxZx7eYBJzmwteY6eAomocyAEu",
  "key19": "4fFDy543EHV4Z4JKcFbDJE4S8oCK2gZRBGXdnNkSwK5r47UBByt9AHJJvzKKi4CKbMBLHyQtpK71o13HnBe8P9s5",
  "key20": "4iaZDSmquEj3LRQGckBtyMwFuWdGnu5HmzCjXZXEdXSZpW5NqzqB9taeLiRdHj6ngVxFcq8dQcer1NtyAJe4Hcdh",
  "key21": "5SSxZqfsANbx9Jgz57xKn7xgRspgfSTS4JzQsWStisqFfQFUtgsbCqoc1t7eiCgrYwMfgzEG3ZBXPHtxV4vRsYos",
  "key22": "3FqiKUoV4ZyGY53d4pV6L1viH3Wv7C99n3N72D34gDjJBjBqUNGriR7QekEHSbCr7xjhJ7drkB4xk1RQhZaqAtoW",
  "key23": "2zjQR5EEe4dasE66tZmjJZdAYvQZrrhMs5XEiyKQXSky3mcv3YsR6ivT43ueiFdRn9QPEHdVo2sz8CryphpxZfGJ",
  "key24": "3LQbj75ahyt3djKrj8bKRC32J3bnEABP51X4phSmB2RiLZEu5crhaGMDxmGWTRhmRWjwRKB2ob7tpuayahSAuUqD",
  "key25": "2PQKG9XkKAEQRo3pisgWAoiM1Ra6Ahq2X1qgLJ3p9bzPsDwapGeQdDDypNHLUtWANd9SNPdRo8FUGHa3xpTPoRtN",
  "key26": "5gok3H94cfTovoWWGia8Wshei43MoqSjFgyJcaEs3ZRqeun4s4Buxf1rtFSQ3arwoo5AjsQjXEYJnZ43P3vmjihi",
  "key27": "2puPDzmhRf9BYamf7awip3z9DX9fXRECV4t6ajrTvtSwkHK2UR3dogen2qho4Fnw5XcqSLa8VQSaCHa5d5m25thC",
  "key28": "S7Y8naCtizkG5K59yNnbL1XJyCi438BKkR7i78WiwWeq5TDJJLqqEEZSaXEByEzDcPwTDY83G9FQqX4g3LuoXGs",
  "key29": "5DUx2D8YjusbmQrtodYQHiNE4hW5f6efEf966QYT2wB3cnBPV1niA5KkW7cfxx2FxToLcbfgjMfxKBCp3svpQbRY",
  "key30": "3ZuwFme75Edhgncao1JBzWSXTEx5YoMjSVxFzBGaWtSLdx2VNWF96mT1cpVjdwAWCTZqjg9ycBPpTxXM3ZuVwPpU",
  "key31": "442wdPeskpDneZtYjwYSgDxeV2n7HcSKWVMzjycjBALviQfdjdBfQ3goJ2ZWv4F8XBiMFy9KtgS76Q7qL3Dt8Wzq",
  "key32": "2fdqkZ9tuhxV9CTy2U9vuH4eSEaTUWrEr8kwbkzBotz8hFqTWE29d3hxtgLCqRSzeU8LU4Fw9F9omQupyPFDHmjL",
  "key33": "25zBUXHJ8NsXxqbPzTRkpuyhjZ7k774VnL1EsFync33K5oWkZgnom1ujRRdpUxBKPcXQGMmtiNN6v4hbm4DcVTED",
  "key34": "4ReXHJetryzCLHU7eSkLdgHPscYTc91NWuXyHJ4o8ue9CFCZguBHMyaUhtQ7iko4w2zJFYDkg3fJ5jCZWPQQ6pvL",
  "key35": "GBB89F6wZGS65H6SUFYL558xgDScrYa13WBReErPjRtQZwNsw8u8Tx3zpNz8RS6jpZfhrZfmxoFpAUjj5rnABJy",
  "key36": "FHoi3fTufZC1odQhFhzMbP8gNoHP6E8zkheo3vZwKo5Z4HFzwqJRozabKJg3NHA267BmeQHUZU8wZKFVMhDAri1",
  "key37": "3z5Zw3B4xtiaHfkC173viXhd1skpuVSUv7Cw6hwXgkTLhNVDNwQW3hQGkVVha13umc8TMGHCpJhd6mKqZzHf7sqA",
  "key38": "G3gdcP2xj3yFUH5yvqHeYuPSabg4MBdQzic14EhAWVUvc3Rv1ySfaGt9k5nReudp9w2deEFkAmJPpvMN6skP7ps",
  "key39": "4qu4khW5NMS2AXCuPBiFfH7Auh6chHiv9CWfjH6imxEU4T3Phe7CyKXJSTzVLwARXvfVkJyPKGoupMrZYFcCUQVN",
  "key40": "3RbXgcQTcdo3vTbgAjPTGG2cZUrnjSrDRaiQ2zAU7UAV578Pv2mgN2cxTdGGmBBUw4KBYdMTdGkR6srq8tdG3v1C",
  "key41": "2FhXPpVZp5Gsk9dFnvvcFXArGkhMmCwSMEWFRkApEqYiShkteM4AkpKvFLfENcNRD4RQQTnDqj45wFKkgDwnKk4G",
  "key42": "2s2y4qLXHiuHRYSohnmRxT63cycFoayjTQzSycHrthrSU8fvG63EnVD6GaFJkmgTvrr3UusnGwbbeRT8CeVKeGxB",
  "key43": "56wkBKtqVAReBEEuFusNYTtJhfNEz1M1kYX3h7sDDTLjTNTH6tYPy6MZM6oFN9dcUaSPPtq9Gsv4VXVLsgtuGh2B",
  "key44": "5Dz74jyfb56BpCcFC8PUmzxRNs7u4X3qM4XGuX1L5ACqPnYHdN7A6M5NupYGAhSC9EepzQmpkB4LtiL8Yme3Vabg",
  "key45": "43eUtZhy9xC2Xm1t57n2MtCS1HfEQCm9Kc1SdaeLA8a4ren6SgAzQdyXuPRhSWV3NbLuouRUUkQxAcpJ7jPbfn1X"
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
