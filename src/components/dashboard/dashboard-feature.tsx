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
    "LvhcFZjoEuLVDyAJk5sNesH5UMzPGo89uTWyHcAyvvixJ2f7Vj7YUphSeDDDF37n9aCBYpBzUsBcpwBoBr6HADM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gbbDJNqW9WcoXHSD3nt1wsGi35fHFuVAJSZGja3agdFVX6H5ih5Tqj84UJaRpKebZJZWvJ1KKnF7uzadSGV5AS6",
  "key1": "5zqzbpXUFYmqYdiysVf8NXAWjnFo5tX3Ums2WDW9LxxNGNqJDy9L3WTTFwaZ7NaDeZABmnd4B9JfUXYc7m7gDiwA",
  "key2": "3kq9e4rb6pLPS69EsUWZ32g5c4ABKKyGrXMe2jtJkEMx2FTfAh7WJws8kAP8gKABq69RH8F4r41t5iWGcWKHgWZi",
  "key3": "5Czog6BRKi4UvYXYuY3Xec55VMWjZGykqLw8iNxByX8RK7caMVqgjuuBENP1BMGKUTMeM7P3KUK26VANbhecZeTA",
  "key4": "mvmRGG1a8PDBp7es3H5jLrL29JcxAhwKjUdHCrgP55SSxdyS9HK1Mb4ar4YvmVBXMRXsCHruQx9LTFFPExmx7qt",
  "key5": "4ucB7b7GHaHMAD13Hr5WjHUEC1RuN7T83JZPkd6RM9E4KhNhrPhCmJ6n6BpMweD2xiCejCxbjy82RAQScn6CHSWU",
  "key6": "3TGdxt29ahYySq2Nt2f7kAPheSykM3Za65hPDfo9t9Gw8RJovouH5XbQn3ZJmfCVRbrsA6Lu4W2ZBjxiscWLb54K",
  "key7": "N3zurJFS9HVigowndwbxH8nfFoAbbrkVsfL9fp4WCSqZ73KBdZBf8CpFyZ2fnL3RR5LJVgzZruzNGotyTQrRYMP",
  "key8": "4V4JDZFE7tV3BLPUbLfkCLeLVX49tkrvT8RSWvL3e9inuP6DxKE3Z5gyoDKNJduzxhoMDucjehsgEzTmSs4i7bwR",
  "key9": "4JJhWAx9NTnpW7VeXXBh3KRtnN7zGpUfxiF7fGep42648x3jk8FmXKS1Ng9JfndDNsBwBvPequQX4DqSM2dkPzjf",
  "key10": "3WrwRRjqmTo75JNbkfLWHdFvh6LhsKcqkk2y8ERVRQZfqndZ8JusTAzRF1AgCTbahEm6VKtTobuGZAWdeita75di",
  "key11": "3WDC7y1viUHe8yBKWvui22tcQwRXCs2ome9MttZ4DdKhRcGS5ZM257HRkJky1okGQeEh5biEJC74EC3iVyqhaTuy",
  "key12": "4iRGsoxUUhD5MyzM3fRMJmweNVKEgSEpmyAkNUs9V5RxNk138kuy3kaNvogwb2prcR6favHMk3DTGeq9E8bTp3bF",
  "key13": "2XvDFqT8MZEzzjCr4CgdEZpnwL1M4ExPbpWCoqxtosZSqXzdR4bxK3wxvjuG6PzAee8NZLHsbVVW9yVvF2nQbEMv",
  "key14": "c5Y3fhCLG3ALhXGvrSmrijRV6ZPonahuF9GPjdZ4ZPwHrKbXsNyd3fDHrHRoSu4qzms74WSrCtCWw6ZVaunuAVy",
  "key15": "3r56C29TSsojDsxWxWyh5syk6oi8zBF6CAKGTxWYHgA5jhe7m3yaBGLNreSfx7rPjmjS8NUpxifScD7wGXjXLqqM",
  "key16": "63JCyeVByauuVcX5JdhRFxqputgwe6UbvHTqNS676k6DXKUf45bj3TC8yXeru6W4foWHAYybmwnnwxZLJN549KpK",
  "key17": "4fmHAx2CpasiSeU6UD2auzn85RmVCnmSb2QvKNoi5xarv5W95YpnqC6N8dhxdZeh9YeaVo5nSv7XWdGEDSXXrJmM",
  "key18": "vbHyJT4SpgfNN7paezs1d27wn2nbPbuWPG49fBD9e2CTTHdmNNiv55fQCbVihB2nQ6mA2F47fKeh4V7QUqGe4AN",
  "key19": "29Ssvuxrgi71ThQfvgCx2nua2jMG8UCRHeDs5iWfnXtEE9CrCVUAWpFRL1xWdQRnmFEDMfc1xPRsuDL1EXBv41da",
  "key20": "26YttDooKUbbk6Kg9K5FJBic1aXdKaRf8Z2u4ehCq4twmcY4aUH2fYtjAK8ScBFCEderTk27WBL86jeBn5KSNiJ8",
  "key21": "2RFVzRdGnYSbVfpzJSVkK5Z9frRVXjTmYfTex5dwkf5xFpacNfoEVUZm8Liuq7oq6j52aQKi1wSL1EfQ6kihNRMi",
  "key22": "5RgaojJEXa6kDMkeJvtTT7k2dyp5SGXjSwQetwXS11Nd9UW8uX4cineu1ycWbY5G4YdzZCX5jAxNXcDjqraTYXE6",
  "key23": "TP6TVAHiSdPuTW26GQp2EFS5vvHbzm7S4pCr6KjxEXmsTpZHUR5sBhdgUCrU533W3nARjNZwYXGJTwcgER97ttM",
  "key24": "3a6gDfTy3knbjWJhAbcP2pYo7LQKWmgdLdeUoKMPo3GrPXu7zcDWEPpZ7meUqgHa9y8SDr9KBriYegLwFh4rxivc",
  "key25": "pTVe4bLvQiHRM8DSvPyxR1gNNChzhVf1XyjJyPxYpVUtHkQqAwqJ2iqR2pxXtxfYtQRQ54M8ZoQf45MmWfuKF6N",
  "key26": "2LGF6esB56QG9PS7Qzo1Zjr38nwtGsBqABQvdPrw5L6KJhT8rDePn4nNYomJ8meGz8Bp87nzqirdZPuEJ2iaxHEg",
  "key27": "1xhXyBGJ6ADYkevasdyYPDbSgqDoQurVEj2ZVhhA3mXQHd7jzuRYDM2tNWHCdXiRn2fyXU5bm9y6EGY3EGJ9Loy",
  "key28": "3pL7WCC7TW5ijohbHTXKekHvgXaVEdCtngiue8rBvCLbQ1FPmsFJm8TSejJcUPw2Brgk45WVpNcAFHyiVDJ95L6T",
  "key29": "3a4AArXMKHsaUwqn5SXvnujeFgJTJps23VXuSxt8WgHuymRiSjCiVpzBD6qaKbWQSPczmTZwRUNYZNWUeGnc3xmS",
  "key30": "4ebXY6Ldac1wxfYnxy9V7VFV3tbvUZiyDPP6Ga9A1xtJRZQdmpbakTx7b8VJb7soteDWDoBNTLVDdRkzMcAJc8J8",
  "key31": "g7HxhYsNDjs8jzmyt6wCRc83xvJxRarQv6c4h2Vy9eUcuQqJ7PAYosNXh34brSvfbdXNQTLnXS97D8bYejFSDsU",
  "key32": "5r4DB2QAFbjGKAttinCgrQP9bSydfEwp1tAZewRpeGUcXQeVXDbQS2AZKRgeS2tYYmGdZVXvC6pnZVAAAgTgRKHp",
  "key33": "2TSUd8WbeMHar51yhdZEukuwqstJkwFA8cihynkyQiChHVFGAX9vVySUxS9agpvA7V9uYW6ABchAPHUb3JC8w5GC",
  "key34": "2bKNAjbjrT5ENuPCUN8sVea44PCmmSgjg5swFUems4mFonk4E5GHzkM5kTkkK8c4YV8t5KabkU8rATzruD3MWxAB",
  "key35": "63CJx56HQB1p5np2sHo75YEH6ZcvfyXzeStabZ4pUq9fbpMP2xxzmGLDgnvYDx8cidu7E3zg7JZhW3otQpCHUdSb",
  "key36": "5cEUj16gpgLfDcYxGTsjVu3DCbTvDJWyuXqSPMnEeyLRNGi2qDdW9sFehxTdiaUbZYN9M6ksMQWiKmv6x1uSygg1",
  "key37": "3We1depeeeqGSnNmmiJHWjePa7MDsew6VThppuEG12VqchMQiZayf1ef9GZHjhpGiwwmweVEb9b2S6SSDr16LZJp",
  "key38": "4BBnkJdpEui1KEK9BhMsCUZ4yEZVn63CeQ1bQr2nkRnNFtZJZtfdwV6vPwS8e1tPcCprf79HkaKp5y6dTcy4bfTR",
  "key39": "5z5Bq5sbVBPeDrtRsyJegsBrr7GMc7yPBttWQRPKFT2cBP7tRqC64eiSMdXyajygEF6K5wUYcu7QtpVMrdbRHhdB",
  "key40": "3wtSmxtCQT1GX5xJ57P8AiFETM59iE6jAEkYq35gGVHQSMRsV7neJtSkLJ3VkkfjK9ELVrqKct17Ch4zXdQPjZj",
  "key41": "2Bjhw3J3FMLyBudUS1mdXBswXmr7LtXprvG5CJPraiNQMdGiJHuoCA5eS7fyJBzj54KQvZV9W5mv6HfqG6sP4fEV",
  "key42": "5n1bMUgo1xxQweDMzWy2NvZNduQgwK6CMFa3MEckF3335eMQ6YqRYp9bLGEWXh8rzxzP1EuXDcJQrqDtZY6VjNYo",
  "key43": "2SXqMXWqPu24z1Gg4bw25ZubRntpw1x1JcTbLreiA4XhcM6onSHbrwEcRdf1xUXksjGF7ZhivcWVvmed5DQcccjM"
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
