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
    "39FJPDGhMWJy7mFW29SiRD8i2VUAB1kRc2ZqNJbKwdjdawbPcT59cD2D2ktJYghUbvAiAvpQ3mNgGVNrTyiTkjiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62bwiTU71wt6tZ9vCRdQoN8Ebn6g8GkGD9oMuBH3ojC1FaVMKXSUteeGoD48yhWgARuEAaA8dju2Uh43xj6aLdnB",
  "key1": "rMeHNu2iE3oZ2cQ2k5BcBKHriv9uVDpbtqx3YviQ4TRfuZgFsbM9Rak1UqeLfAtJszoeDkS6U3AcbKaMAVcoziL",
  "key2": "5icGEztbQSdK8JDYbCHQ9AZKVwgvYAjVA1oCJSxME7yKmYQN4TWmv2QYPCHxXXooWEhFizy4C7LYiS24FZdWf4dN",
  "key3": "yyCzx4GJbbNXghwND3e6DzKUntzh4ABxhqhZ3PXuqrDk9QCnVct9M3zEoXvFrzXiRJs34ccLSuthNaynz31vj9G",
  "key4": "sQxu4187r8n9v7263mZV5D8aSjMhh77HDAY9mccmTjk3Yrz4BWQ9pTdLfHExBdREAccCELqxSt21A5rVw583L1z",
  "key5": "5U2NGE5P1ioEMQDnqznaQYXk6rbViPG4hBBxdtqbd3T9mZhSjYTmpy39MFB7rAoHf1ukwSAxY63MD4axPLQheFqC",
  "key6": "63a17NHeTJzku9ph5j7Cwxbdwk5dqnZHzJwX7umtooXqcN4DF9c733U4y87ho7ivkD6ryi4dcs6jwLLbrm1zxsTk",
  "key7": "2ZHEeRKA72FJzb4YAH3a1QkWxTgQ3rhRU96f4DZbGupTzUWYCftfhGHCHZr4ct5Vz2ETV9Hx33ML8XiaBmSS16Q4",
  "key8": "3MgTjuUWjmK2Zaa55B9Z1joRJ1GxbpHeonreYGTWG4po77G2eaUf9fq8Fr5mzT7LspQVDcawQtKnjFXYsPryihAA",
  "key9": "5BQuGHp7y1ujbrRZXShwzu5xRJCnR2jQ2a8x6chXKU841iND9QNDdwEDLsNNProWGEXkJVSuuatCDoVAsYyGF8Vt",
  "key10": "3jdaXasbqYbGzeqpVwrQueJRQVJKrbkLmS3XAgw7SMHdBJxUt5qqV66TQg5hyzwAQv6EPpNtGjDtwkogQgrLCFn4",
  "key11": "3w73VLnAcXTDWKWSu6VBDTHGr23246Cu6SimkgMkUebe3wuJg6btRX3a15WoEttqQMNGH4e4bp3ohzT6vsQg6wGw",
  "key12": "2F5yeWMMg3F73jWJhLJmZRaJ5rDwS4LQnoMyS27zNS1qr61m24gfVevV31GpMFbST8NsJ5RsMEkkqkkx5ZqDNKiY",
  "key13": "QH81gsAJE6FcYipFPXpwqBnnpvPdUsCZzyr2kPLsXxMxU4yJgidtCcRCe3BYduvTa5zy2cP8QEfkGWQbWiMXtiC",
  "key14": "2YG81LRWCrWvkBW5LTnAZ4WY94QiUko3Yi6quQh32KpZHDRuYmqABKtBLbhXWhniF1WtBkZTuHAegbhCSinxf4g2",
  "key15": "6Abi9YZTR9hf4522eNvXiyp7WFbbGEb1g6kyV4yAgBP5AuKrNvBU8xtiV6qQxhVQvqsG6PwBgRY7zvWNYFqGS9x",
  "key16": "54mf2Kt3Pe78MsuxZvtgCePy4kT843CzzfMkshfiM3Ef2C3FNbtx9TSV96JSQSswsZRN8xGnSDW5Mr69bFQVAgui",
  "key17": "5tq699Tp52YDcxuQY9f2e8AvKw6iFAb8tWitrYH4Dsb8ucAAqPuHEa7BvuuUjP7ZYMLbWgoaWdgLZiZuQHZEmzSa",
  "key18": "5QFST4wctLhNgwEsdM7hPCRaj4iDx2QAp5tmXsZVLojFWq6mPuD91xsHArnrpwSaKTPZmEtAB82APb5xxFNL4dU6",
  "key19": "41vYB9PCAEHjN9jkKPzrQ3Tkw1nGftBBUBnJ9rTZ5iKYyCfQ8XLi5dyXMu6mnete1T5WQ8Qwb75LiDK3DfGJJdP2",
  "key20": "iAh2PMYqADXNefhvjMC235esCZC3AjtgJUaXa5eGNVxeazqXW4xhj7EyEE2UJTwYTeLVDjTcG3mnfwEJyS2ZxTM",
  "key21": "2RuyX1rijRvvX5PCLntRASDu8aibXM8fb3LvNyE25NUMBiYvRMcsZCbZ1cRtM8MuKXGfX9wLgTf5j3Q6RZaynBB1",
  "key22": "ET1PZih58yx1YrAWphxtht34RjQf1cRQjrf6qKfqvVDisZamzM3AMjhmmMQnBTpx2yX9F7p5mcrqNi9iomTrao4",
  "key23": "3mQpp6yT8mqEU9tfZgGeczCGiRfCUDtM94DqrhKymy9M1beSj7zktq18zC8HVJkety9ZBFzKU61KtRQfcVBXtP5m",
  "key24": "39AiurG2YXfa1zEyZxz4Q2awTdn4F5AQLSwu1Rt9NqxXtZd28XN1zA3jZpjVVbeU1p8KR49w1Z1jm3UMBLmtUvAx",
  "key25": "4RVn5n9f9B6ifaKCWMMBNNCSDkRcTn4jorToB1dV7GnKpGe2Fxi9Bf44KCbNGuYTK5Kvk8GS3ZomZzYdHCfTZHEX",
  "key26": "62L9KbFqQywH4FDZEXXexgW3SMEdC3KSd9DgBujfgPWSmSWqxjQDUhsDPG5R55wZvMSS94VmgQJaU4oefGd9zCne",
  "key27": "66Srtix3whyozxqhGdw2kZk7M6ycm4bGa2ANAzTaxkqjo5tB8f1sG1PnvWjVc5k5yYS67pQqBLT6vy89Z7wAxJWg",
  "key28": "4HkmvNd8uPFMmEv5226a9peXQ1cfCWfjhK8WrBRB6eCnU7R9swUVwkUgtzPCraWiXKkSgMZYRC2knmiQQD1wLMkY",
  "key29": "54X2q7pCp6JDWDP8siYseCYN4NA3cqWT8kSQLsvSbHkDmaqiBfhKWKTMfJWtbsoZX8R9T4bXbBkncKogizrkpSNQ",
  "key30": "4gUyJfFzaB4eHKB5XK7A6UQxefgesnGUczuDTcgEYaLoHKVVjvAEHanasinp1YAHwYfjVpGbuuBp6z94EGsqkXc7",
  "key31": "3fUVVWfB6PTv46R3yEXiMeBmSnirdEA4ofZVLFYQyKncjP8VBwYZsEU932HJgEMhwEoBD9juFpLy59uPizrjshVs",
  "key32": "VSppp13dXWPr7n76rV8bmViA31Xg5KsarSjwFJyE7fE8Er7Cp3dmqdKe3wMgZUfbAsoJJafohcAyU12xd8fZpJh",
  "key33": "3Gk6cT1Lh7TTarVmwpz5gDVtdW7gF4zZHaPKoS2t4ASAYDbKUSoSyGMq5SaUJcd21asGGTGzbTD3feRqMXCTpaxX",
  "key34": "FSe5L4iGhWYy1R1RwfJdDRy6jwtq6ZrL7mhkg4BM9E7k6VdgwxQHejH9QadSdbRAytSToJVWBXXmqrR6fEyNTGx",
  "key35": "5d7UyWnFYzwevV8PL3Y3yTCjKw8cJpmonucdwvJP96hbn1pLnCB77Q3FTq8zL4Y5fzDkdRM8HMZ91QG4e7AtSo4a",
  "key36": "Xfor9qr2bKy92HUp2VrNVgACuDqqZ1htBrwcU8zcieYuND6bd2VRLAfcNWB4GkfzNkJhmZq868WyBXknMy2TsXP",
  "key37": "4qqR6qDALURhA6KYJzTz4zG5DNxQtJFhNvX4SgNj5QxPXZqd7uvbpBmsJXSHCrrEW65eMrFUM5SoNMTwpbkCDG6k",
  "key38": "2xix1j2HMzNncBQxE1AMDMurMNJrFp9zjP4gYtMhP6w8qi8xqiDpKZTpQpP4tvEjtQ8ky3KGxaGzjDJ6xZx6JqpX",
  "key39": "2QtWAMq5wQqHBmVWMAHa3iWueBrAdnHKKVfEyD8hKZcXxSfPVvvq4m5F6KoUY6LWZQWw5FtgLoXj3amhGtBdxMki",
  "key40": "3RfbEoJ6MdXw6ZCd1yALvE5EPx7FkNr39c3p9nKrQpc2jrTDdTpNYyMoKWBwyuxqd8GR9yvxyda1GmsvZ9vBzvN1",
  "key41": "K1m3iK42P6angdoDn2NqAGu2cy7DE1NNj14JpNkjdteKuLhK2Tb3Y8qGeAUPmx4wAetoeS5URvUeUhqrzfUeeeT",
  "key42": "3EgPtCdf18nch3MdomWFf166yUraXa7fVy2ihyETitSZ5QXA8BMJkyB9dH4N2FzgF1YYWuzsoVt97WMBXquLzr7U",
  "key43": "3rMgDyXZRVyAMTep9tnUoyE3FRz3BCfoucg42JBHHSoVsvKhX36M6ur7ARSo4d8nDamaTXhBaA6zZgJQGrqZHwRd",
  "key44": "2R2KbJHe9NAWXiZAUm8ynKYsQExnij9xPoZTggLaTVdxS6Wp4WSLizbxdk38cwGHNDLMxR3TP5fCmYBZPKn65Kgg",
  "key45": "k7EF3eeZUbpPrDbo8joevA9ibbDEjK6idKNYfCdfcpqNPeC52F4bpSYhLApDL1jjm6mnemuQeSbd8wrxFyo9qmp",
  "key46": "4sTMBCPPCHGNcHeCK9Z2m3iYTbYUJkn2AAzxTbnQDtAWpW5QeVJw6LLxHuJzDSQfpadk2cfbV77NFsPQrJ2Y27pE",
  "key47": "52kAKRNhqZUEHdsD7ukJCDKJRAiYEeoqFA3CEK4c6ACus1cE6dZcNr3zG9wCkDtwjnofuqp9VwEeYTBQ9pWfgJqR",
  "key48": "3gChNzph9f2tzpDTFBYJMJY1M2kWacnvgzGwbQBt5CsSJjivSun6sHtH8oGNoYfshgJyuYwMrLy3PaP1SVCHbLgG"
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
