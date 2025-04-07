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
    "2GzNEV2cBgSgzEtoxuNcknnVqNYdwET15LQ39ntW7UndwmVtDWjbB8QnT9DARyAKgtRPRJNjjPBM2RWpa1irYKUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JroEXQgcGFg2n7536NypauMEdCdCGn9UduUzEnKgQFNVaGWUDvsFNvLJxihQRpZ4Pd7gNxrgieWtJUWMNfHERvK",
  "key1": "VwVdyGdDRrpBg32gYe8DcLT5Lu7hhEPFwEwqHCwDCuviWt5aStGHbYwkQz5u9FsWV7SXnSugUm39pmGbEaXcbUP",
  "key2": "W4co4QV2VZsdCLMZvPJwX9gpP441EZLhiqVQoPSUkq8iaBfq4mbirr4iENg2LyRrhHEqD9jMtaZNSwr31jQm1z4",
  "key3": "WSDooCUdmK5MMqRrJRDzpc4s4sdNcvLkyKwjRfkwwLhNE9SdYg5ffK8eMDQP2JzbtBvhJpe7BwLjqqkrXMdqqth",
  "key4": "5hk1ruaZs61vS7NX2VHhjNZpHN3Kc5WWCWVcMq73ZzWr54r1VJCEeiPMJS2ej6i9DerzyeNLKVW1KXGKx2f4UBne",
  "key5": "cY9nNAVURVZaoLBj2hmp7dY3dbsqgsPjmBnXJqv8hMZj5rv4wTLpKHSZFyuKZmNUK1apxwe6j7bjr7Gu5EAGN8V",
  "key6": "5YnejSbXr4NmRZNfR9ijCuPraLP8mQxKpMZNMfxVZbbaLaKak7TKgjShVT5L1uCacaZeAqNZJbg5S1FLVdBpNezD",
  "key7": "59A8vN2Tgv968SS1z1CY4R4v2HyiM5uGHhBFzDsAF53GQ4u1bHABuAs1xQVEEzZZ8X9y5Zj4GgaS23BTat6ULSUx",
  "key8": "41ggERy9XQwuMFwoAMwKohbi6soN8NGUenLG9uFpLJCZWty4KSbRuRBChuNGPyt3LzhZZwwNkBbwZqqEAetASb4Q",
  "key9": "3D4iuFRt6rydZDP1kXitd4eMeEJNQ4AMkUTic5Un7f5oeHK7HursZgv7PfejZh8ezKo3Pu5UjHxLwfQWtv25TMLc",
  "key10": "5ZNqqeyRsbhXR3NkEzToRaqSUAiQhDWKeWusWabqjxGnwCRp6Xa4d7cRjQHnNvkevqMJsHtW92JkxdRSr4LYaAX6",
  "key11": "2emWx57h8uejYpE9QUg1ep2sqVH9dYj7mBNjS2pSDECm3rnTRsZSEVgn456WgoPYZFy9RaSD9EHhpw9BaDyBK2Vh",
  "key12": "5V22EiMyT1zzS7KdJ4LEmmW8ZSw1kySmTtEjtKyWoUKdHwhSci7EMF3H3DtGGYzcF9H8hHdfZqQNEPeiryojh47g",
  "key13": "AQ8BE58cfG1Uy7KK8t5fXtWofKHvWEWv2sMHSTNBkhuRc9ja73SkrLwVqYgnNgSXtS6XfHQHttP3cvjZfRmmmai",
  "key14": "5TCCKXBWdnqduofBStMkboCa5MjET7zFVC8VJn5igaM5GsW5dRReu9oPPXvLqHcu88YxLYM1KhRLVbToujR1PgKc",
  "key15": "3Nzy8DfjztUEHF8paQ5L75XZpsvvyudgcEEokbUsYcmsE93K9X1vAG3qyR6aqrA9uWyNJHHEhPHn4aRDBx7LNjpk",
  "key16": "5UTNefxEeCLKLs5WQV6CBWCRXHKyKeByDr81GzTZbJ9TcJL89kY8J19WajRfvo38NTpJsXv9YRTkG7hNhSvH2Rd1",
  "key17": "4sMC5xuo7BaHch2PSMrxruSKqPwSw49WABE55dpNLWzRTMveV7CvCQRkSmJojVcKCrDH6wx2nkdmA8cRTeubMfw7",
  "key18": "hzAhKh2NF5h6fWTDpdktLBERjWv7Ykpe2rsGTsmxQ1SUdNvUy6d4Re9a6iMsyZGvKGpT43w1GTSpMKacFjKno1b",
  "key19": "5FMczHBGi8Lc8ZfofSURJJJdqg9WzKTM3JRUkopDPsz8xUr6Uee364MEtGnUzucYRfJLbKk5cTZzUSe2LC2hopCn",
  "key20": "55Zo6juNPv18AdGTqCuy9TbF98zm3e382yZbccm6QaSWx8EFCudb8EQNRWeRfZH4VXp8DoNgT4GDX3bVR461Pobv",
  "key21": "288RuHVeBKRSQPanqGfS7mohGQWoRk8Ty7PCkvLPRf95pwxnfygB2dr43LUikUvC4GjUrGLhkxPZ2J5uS7q41uep",
  "key22": "2WBgX5yMDhNdaiawthL4g1X4VQS7rEq48CPV18V1Jzu2KXDwANNGYgEfYbgJ8m52DxRPFKu3iHiswyBP6ujTPDS3",
  "key23": "3wxTAzLpDkzhnsMbyDLjgvvx4adJyJrtKpUfPnVakZhTngRyQQKaP4VEg1uCfYaWEM7TcgFdxsWVzeGAoDk6PTEi",
  "key24": "5xDd35ogxr41RwSEBAsppNn8p4GUdn2MV1fiDEbf18PaJSoH8osKqsXU46ySagURKD1FAu99V8J7ruFBHM11EPuK",
  "key25": "5jQHom9yKaAZLMNW7SKR72j99AUd4cJPde5Tb38ppD1pG83MWfCNX8Z6sLAJDBWmNAvvEg1ibkK1jiah7BXDt626",
  "key26": "3nS5a1aF4N5vU2MVQ3eS5sXSWXdHD9zgeZWe9LB6xq2RXvqQQ4eqeHNw5YGYB68eMUNG9gVtG8y1M2AecVvgVhhR",
  "key27": "2tPCzQ6zXxzUqX3YRnH4diQR1hTRxFpmMsq8tWXqTJLP1DYnHpTgYWWkcAx1bGvVN6AbmzsYyxLLujgQ9ZGrXFdu",
  "key28": "4U4vdpTcnsCw8uZY7WP37HQtEvEqv7vfPSxxAToZKKXQTDuPynGRWrXnLVFrP86FYd7mPrvCa5Y4tjw4f9LpatHy",
  "key29": "4nztZnNw8pn33hi1Vqq8rVDGztc9QoyrA7tfWJum8R7CojqfR9zzRM6JTCVFWusj1d9pGoJeCGU1yrmSHyuSZ2yz",
  "key30": "61g79LU9VQK36rwKUb3cqBXVvi6uo23pTFqfdigoAfVS1aFUtmajJxuS1AUh9W57S2FCMu73ZPT8WuxCZzAZ7kSN",
  "key31": "5Jtyhc3QF5UrsFZjtYvGLZQivchEds2VksE1MuDgrnbMn3oC7WWbVyePAiRCn43cWfMb3upw4vP22c2sFFX97BDT",
  "key32": "DXuS5dUsgvYenrVTvnzQFckf2YDghVodQxHBKVWd8v1U31SM5wFJ7ttyAuUSqg4MJgP9anJm4XW2FQsytjhkG8b",
  "key33": "2gfKdynucZKCpp8Cbmo4SH3yhEEFQqRxxScgwTjQMHhksusGCTuqebaT1ye1SNHnVVPYhq6ojutYKXjTLMvyTtvx",
  "key34": "2mUekZGmt9gmR3N736MWYNbs7kgAndXrQYdDVDrMMQ5TjLMYsWHWAUoDPA2FDMbyLQ4X5Qwcav7AP33qnUyw4Nvx",
  "key35": "3mb7BxH2YhwRzRAzFuqiT9Q1dts3ee2hDZRHuGWgDntkEtCNxnUUcQVSWMiAAMkx6VbTveLEGNM2m48492R6LMCB",
  "key36": "652wD5kFJQru64hbiTFqpiyjocR3dpURTep4zB5TCpCQDyqrwUGz4hwCXFKoV7W1QhJHp3mo13Ygkm9mzfrdN9Ab",
  "key37": "5pnocBtR2ST8dzomDwzbMzx4AKj2Uq4jQNAXjESM2rqf5bBv9myNFZrBC9mcrmRH38VJ2wnyUQyo779HuGqfvJMZ",
  "key38": "58t2LxdWswsxoMkLMndq8BrAAGMvwzRinp5dxLRhnC2czjjq3wHm83rgxNpknkwoTCeqUH7dzjR5i4e7CvqL8LFB",
  "key39": "3gorD5sUdyTxHT9jjULck3iamj3iBvu7uRzrTSbkiDamFPrM3QtG1fMVwxWxdHhnxR3Sf6ExVGyTf3H7SWnzLAJm",
  "key40": "xjJmQKHRhmVo9TF298NTECmgdR3jyTHJdMXJ9616BNze6twFtM6ip2q9nnp1k81qA3vs3RikQt4Kzi73sUP1psr",
  "key41": "59ZZs5vkgqwTiccCu4JsfjsMrjYABUbrqJKAZZnjHN1vCpAWc8UuuUJFkp87LNK9ro39jBgVwEjozQED5wMoJcNW",
  "key42": "2mtmrWsGjHwEpzqEWC788snKeb4JqxfD7Cq5S8ddWM4pnbjqBoYfFwPDic21mBnmihzSMivYmqWeFXcG4qcYbWoJ",
  "key43": "3vWqPga6KYytqudoxGr2C9NyBqm4CsYXG92hWAJhpT7USxqA2ZicdAbkZzg3bTAHFXhrhWU2Gv4N3rvXtvBMCH1k",
  "key44": "4UJUTgc6p8Ws9AtcnM9XxMhWigtdVqdn4DyDABtCDkXwLU2XVTATbm3CGFVTUC4PCK58fThou5DV9wysZ4BvSqSP",
  "key45": "3iPF9NbDYnmzMSpTg3qmcHtTFe8Zohfdz1rLyY8wScd9ZdFgmWaokReJvMACzmVGaAMvLBYwykvCnxZTDezU8akC",
  "key46": "6HVHydPTdcBBK63g2ydFGJtujJ7hnUKB4254xT4K5m5yZkCG8VJnoNTgHrWhT7XBfxr2XSxiUUDEwqZz2GRVU7H",
  "key47": "577i6VZX8fBwTsk8jmGXfPqJ7kYZTRCTjX7EYguMfayakbqoYQNzHKFhSKbrxYoS9XGXZDhEw3smcNxBRdchCf3w",
  "key48": "5qkiRStRGuTG8ofqEMq9q4Baq9uZf8m6dWj5DxgkMqi3H9KaTJHe4MNJQ65jwo4VdLexPeEAuz7W3cTr2RyTbBSi",
  "key49": "4oQpVitUCHCX1SwurLfENiRckYgATBdRhkWMXjWKp6kuHQTb7huQ2YKTpcdBrkpZKWwnVca7hpbhNyhuisxYLFsq"
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
