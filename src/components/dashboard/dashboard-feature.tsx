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
    "WxwS3xi6qqEUMhHG7TFsbxT9qXnh7hPp7ubqSMtBCSvrNrh9CJoZ8dERk6KkwMgwerBrJbFzzwASddYkhxNytob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Ps9Qj6hK6sC3AEoo8U47PRcvf5yYBRcjd8oWP83dPPpyuoefLokV2hQ5iM6CDbHchH4Wv6rr1NxSAXuAwRB6X9",
  "key1": "62u1Tu7MJKSXtNpCj71Ngbur2V1nXeUc1ZcDL3qaqcj9zZF51Tfrp2tf2FphVXqCu5VWjsoYK8J9YkwiVojFmvVZ",
  "key2": "5ds85jEXfVPQbmMR5xWkzUHKYxezVSqiETThLUH5zr4NP289Bube5nSeyvpcdPmibneU9VMXnaKgMwwFhuRtfZhX",
  "key3": "3iYPJ7yxMc3LHpdrVA2y4PQpqM2qUR6ZtLKdqwF9ocNmC1nN5gcNTfHmpu1b5sCPRX8xPdyH3mL1v2ThusVjb873",
  "key4": "5AXx23JxfQeivpMkA6DTEx7Dy5FJSqkXEHrx42JCKFw7MosqnQtVwrWXKeKifcLigsBkSxhCR9BEJEDbqmaRCwGo",
  "key5": "tARAaeDPzu8onKbrrK9aRvJ1dfbhY54RkeZUjPEn1n3y2Ny3q6VjiiFtQYeosocpYNfttFtCAjBbhBG2XCnsYYW",
  "key6": "3BUogGQNrVBkwroaW97u2kSe1wx4iJL1eNtn9pUSoKQopMApTELhY5hKjq4UXKTu4boGNv3tnfbw7Q9jRuCAWytW",
  "key7": "5t999sp69qzZYE11QwbHFYBWs1eR14ajmwHryietYe5QK48M86HuAPCEXzjNrTfJKeCnD4tLqtTgaaJopfCgTy8G",
  "key8": "5LEF2VPkirLUd6mYRij3G273kL5M7LSmRdVZpXcaYcZQxZS63guBxumwG8NumKqVF3zZEQCQqhKcRx1P9cVSdmMD",
  "key9": "4JHtKxkHyS5Rd3BGDusPVYitVTLqk58tBoMYRhSxEkfdiyokRDBrNCNBA1P8M9feNTtSmna2F7zHikwsMWNH1iPy",
  "key10": "3FF7skFoTxA93vcY98ESyHQv3JUzY7H1BJYDmbs1DgvLRoczX7qMrJKjsiFrrX7skpKSZgRZaCGgW3xdHzQppMVo",
  "key11": "rWhrzs1vB4cycexzAwF384asrwmatxeXXvbQShxmygwZCja541SvZUFfhr2QneVjpr39mfkVkMmWaYK7hAbvPNu",
  "key12": "Tuv579gLWDigSLkoGQuwguYa4ZezsuXrawgJ8msqvqfRXoUnSdbvXzzoSfbPxx4t67hedHJdUKJuGz2zHYA7F1T",
  "key13": "5TbaK4AkjGD5KnTFrgaA11QVwMkPGHLShagfh1RRHvqRx2jjv4c6yRQPCPpZUzCQJXjL2RNY6VvBmaR6hPuaatqA",
  "key14": "3tvP36KuZtht6MmkaVvTRxSyATeam9fVMPieu4rTCJyWKGg5wpjDufBTpTmFWG9KYNqNyBvkpv5sGyDNbz9w9zDt",
  "key15": "4JaLxFgqCNhGQEUrPY3D39RaQhRhtPWaoMncvRPnZNocBEjm3UwF1SGtKiRbxhvB56AvysNHeJYCkYWe4dhBsA8",
  "key16": "1hRbTybBpdYpAuWonYUjYNMgoPggV6g2UqaHMLhYrETwbkJdDMqGcqa7xV6oWaJPgSTWd5RxBAsLYFVt1thwkQf",
  "key17": "ih8LyaZ1HeX5mbmMa5QF5eieymz5Ki5CPzQZ9mQwJb6DakaQ4ZS7JL39p4MwoJsDUQyZUb6BdkeEZ5cZN4wCqge",
  "key18": "2BPx6hkKMgpRxmu9eytK8nnwAu9WpJBvZLU7Myh93JSdY67RhjtkZtNnAbLDHEi8T8EZRuxJ2bAQ1T3KYo5CEy2g",
  "key19": "2EF6SVnJnHRc31yZYFTVGMC4GFEveqNUSoF1pkrMAyMrxXWuca3cviDig4cUChAkYFrGi5xipRY1cvhHj9DDCWYG",
  "key20": "4HGU4ikNdFaBtQvvFo6Mn3NKJK8aNZEYw8DmFndt1a2VRsb9JT911XvVg58Nq1wABcfbbi58piYRegAPyoyxe33j",
  "key21": "4U8Amm4rGzksiMxKHgBy9NEPZMHsTuZhH7V2ap7NMq1qhKVGdby8e8SV9SgqCL3u2ZFr1szHcDu5hLi9HomKC8ZY",
  "key22": "54U8zRTC6TwBVp7tYtgeBdMJovps7FWJbzagWiKschq9ddjNxxXvmyeseaZkRtmEwVdjz7wmYJLpkaELTDhY4atZ",
  "key23": "YQmyHUbTxaDHFaaeQkCYVWtkPUqarsdrGhiNXLMJVG5z7a32BiH3D7m2Kj1GSMf3BQSGLC7e4aD2wGfREvjwetJ",
  "key24": "2d7HBVov9X6sYWv1EdKHacm1J6chu13Gusz3ncn9GxwJh2PnyKTCZkz9x6Kfr2NZZ4GhhPXbH8Kd1pwcirKGPhYz",
  "key25": "2tcW6BcUjidRafKT2uJnXLM3eJomY9otqiknac6ToHwXxpJcJpbGsNdkceBwgsSFxQdmV3ymtnzPYz7KUzfc7isq",
  "key26": "3cpzAuLPZfEJEJTchp3iBkp187zk6NDNEk44pss6qYVY4V8gtfKNmqzxuiw53sLMZfexvrbtDGnRn7SFCAphV2qp",
  "key27": "2ji2vgTbKBzrKpSAURusfZ7gVHkGuedNATbNgkLGm5YmaKNu7fK6mXw3dtQe4tnTZ5pG6airs1rnmAuVPvBrJgxF",
  "key28": "3ncYpzejacE66Kd2w648QN4D8j31xdEtssPyiLRQ5fHbTTh9rQKBNvpG6KvgHAqLyLwrjfoxKRepSUzJw6LQi7ga",
  "key29": "39LKGBJ9hmvnSkJSEg4Wggr8qTM2P8cRbLaGrSkvinp4Ce8AWbpz3f4z7P3THydUdJx6C7VC8eWGYsz9MrcUDDtn",
  "key30": "4zrQT79HXkdYDauLb8Uhgdo7sBczsn77XPFXr1n8cHTBGze942vWgYPnzCBDWhpeFeLtJS82CurKzbYvy3bbaXP2",
  "key31": "2DruwoV73bmhKQ8wyM5vtzPLyEd6SoyHNqfUvSQRmjFvzXYA9jUr2fXDLQpchmNka37iNpBqKhVYJAVgHRsMNSKa",
  "key32": "5NnZvN4QRCenuvfFPmiRhdZAvPdcbuxS8fd5HYRemTXDD9epzesHntDi22rg5fvBoeY6EupsaisYh9nntpM4FTD8",
  "key33": "33LgGURVbbpSApgpbzsV3rw37BYnJTRGJcmjapsrVW9VzoAT7zaYeCyNKPLoU1bH9SszDviLb6M7EMVNisZwQJfu",
  "key34": "vWnu3PETKJGAY26CLv8E1FFfdCVwV2JjSPj6Q1myDweDCmDkb1L2D1iu2t241xSpBNKNjYqc9hsJbLB7WKDcSBP",
  "key35": "3Y6xvFLTcV6J131wBZuabzeb7g5zFCid2mhGPckdR6GE9inhXRokV79SNgTywwX2eVRwuVGXwyVS7pZYWiVsMrwB",
  "key36": "24Uq1CpQzMbQrqUQDPrhcqDrp1wDCyt4KLQxyARPDD85qphianY2wvKFkcMpVCpGqUcZymBGdpQiAqtyZVHaomC4",
  "key37": "4kWvzHt6fZK9Y5PxvcHD1JcG4B7QhjnSiggPdDaLF7KDmoxi1bYwhEiJz3b1Tbr4ceQqge7N4ZuDp8BfMhUKr46K",
  "key38": "3kRKx2RfmQ6cU95JFX7YgRHtGV918vvaQfHiwmSdT86Yo9G2VyUFCmGzHziy6Qto9bh1WEjUV6HdqmSd6qbnsxvA",
  "key39": "3D9jvCx8x9teZ2HjHHnaHevktNkrWy24d8rS2tfahvpq51PoAQPmX5FytnknnQqtw55fAhggZ4emtw4Yq4VQu2hR",
  "key40": "5mee9DzDTLpmerHyBn4o61q52mTGqQrp7dP7gU7jMSverUJ119xkyBd7px4MXaCAcqE2YhwHYqaHPE2RAsCVEBf2",
  "key41": "4mn9LEDK51pJWHtoxcFRBstURX2RVmWxXYatvd96gWhTtQwkJZRe8VS5EFp4YcaHQ4pfTHkwfiSWqie9KLpbX5Wg",
  "key42": "5acoffD7LbthrZCk51G3VXASRVUcV54bowHkCsdagNx8peksCWeEyZXJfS2AuhP1YPm9jQCyuZcuFDTn1myZbFUJ",
  "key43": "5rw2THzqTATPpyFzxZRs4HE6JEfvPJPUe8niMpakNX2i3PPkqG3aR3SeRgkmRarQynwFoSg2SsvmibFU9stxg2bj",
  "key44": "4Wg5ZBdRQFKvzLKwnQXibML79JV6a2K6TgmUatF8ZRAourrkim4mqpadRfa4te8zu6uDPerdKmbHoTWVRD9yDRoG",
  "key45": "3HL1M94GDWH8cGcebXvKJJJ1vvTSPtrRVoWu1jAH8yfS8cD96wjQ5HNAdJzQPZxn7iGWRqX4jgMD1YPrzAzQnfpH",
  "key46": "xfuVcScdZ9QC6136YxGtByj5YHEA57dLjtsWzuMXk2zwVev6PqFRqPA7Cgg1Pv1rQjUHYD7JGuVcMS6zXjrWm39"
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
