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
    "5a6bkfCbyJFMFxMWrkgFGKXfgPUG623RGVaedE7GADETBbcmU9u8jbc5wR4cK9W13Q5zD4ycaSU6uR5dW3fSRNtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmt31pdMua2SwqVBJAkq8D2xafTm1f3hhkGemJSvwgHpDqCbRZC51LwriDiP8aTpG5LRGs7JSw5zHaoTMrX2wQH",
  "key1": "4AGJ8QV1Fwo5T7ZtCsbePgSgUYMFaVbZv67qaqGn3FWBLBqMY3TL6yb1BhK2za2c9fisiX1sxvLSHrTQCfujSoXq",
  "key2": "2Suh9kaVRrw9AnCT5A1y3meW6YhahrRk4SBQJt6NSizxM2KScSrM4BPVudXKD7fCbeKCzmpQpNSZxfQYZnJkJzbj",
  "key3": "2iCzpJyLy4v5pA8UKrsZCWzABDNLniLjy7x3TZXYa3x3WytGUYcXa6atJKvzxVTdF5TwjSU1f3JFLdV46YuRjJZm",
  "key4": "Bo5L2kWR2F6EzUUcG4K1x562iv6DqhK7LPiCAiLAyzDfCnR45s6fjHHT6Ek5izG3zqHfNpqdkycRoCbJZFDBYxN",
  "key5": "4y48J5F5pw2pjPJub8D71qqqY1PQsjx8srzQ1AhHmdxcWRiyiEeNWDRQmh26CM6BB3ms88he4TmPvnWuKM4uF78D",
  "key6": "2Kqkyxgv84kFAN1YuhkAEqtSZMXaESscAGAkhWzmXiYhzB1s5z6fvVY6p53FzouPpmkTWunDc345pCQgRQGW56t3",
  "key7": "45vRDbR2A6Z1MEYqxSELN7dNXigkJzL4zLSfZDDRNz87Mko55J7iMBjyb9dbawN2sojBU8dQ14PqgNsa7ucVsjCn",
  "key8": "5qekphmHVihZbj5fxn59KZtqdLndVtGsuTnNPPCu9LST6KmVfz8eaFPsSQxztQRVNGScEX7Z5kghTWCEWUbnbkaW",
  "key9": "54roZKNLwT4qfP4nWkyZRqdh4gnpDWuZUGbwGfZ9gd2BCnfATEj621ygwsJ21qACR3UBNYxvDkrgAYcCT3NM6Kk3",
  "key10": "g1NzKethPVE6MbPDh2AvE9kFbTLTYMJGDQMCe5GduEaKgkoFxvwMiMKPrTFYF85C5CSzoXoYktnzMzTUYrDEUf7",
  "key11": "3bj1spxoCUdHDxQZ7nDSZ6KhXnB5oW8qrz71yVgh6sNkZi5XgoZZeCwBfaD58rBvDvt96iELqN3JuwPRXe21j8a7",
  "key12": "3hv95DMGavQKpTdTk9YRszx7SG1ydRdn8gAtzL4RLn1Xzk9JDDFCuC5hQcaJUP56a4QVNo3k7MygPRG5JKDXhN8X",
  "key13": "5XE6CmbYMofU4aQSYkiqx12dE6iRgrQcrK8fFYbgX7m6c2ip7jqJxydn4hS3QYwtZY3DeFpxp1hDdywMpiywC9Yh",
  "key14": "3FFL75Ek3njhDebC5BiEr9jLs5F3sbdbbrxBfCxHRe1LUZWLAdA9ZhsjUgH7V9bBxKbbJxk5aCG6QNLBNK1APyFC",
  "key15": "5yqzVPLpgtSsWuZHuQSXxxYVBooqZqpHwEW7Wqzh9YeqyqwLHB7rjbNdTZhx4jtD5fhkBRkUyeWR7CsC4Wef64mE",
  "key16": "4fu97JGuvsv6hHtnbXHkwMVLyM4AmbidTdNBUaXk9K1EiG3kvyH4MFhYsXJdK8314Haofjzia2AuEH65F2MRPaqX",
  "key17": "3b3ivo4AjpXPRL6TTxFJ71tv8Bjukm75M5tTNvhvAnMvEVzh4zQHL9ga9ZsqSKzCrs24AWWJ9JKnFFBjYYXSdRuR",
  "key18": "4jCSPpKzL76s4FZYHxQhpYpj21gWkkX83sY6bU8VovjjRYePx8WQEtCuz1nakZoXAWuacsyDH6j3Rmw8PT3ywtSM",
  "key19": "3ufCBtjTgs6RN8Si82ypNjSu1jNiam7xpRaWyzYsTH6Q3BPfMsfnnrB6atzkum8zVpShF8tevFRmMb3f4HDSJm8V",
  "key20": "3pWXXmo6UyUAtgnn5Csmn7Cr53DRfz2xL7D2DpZ1MeTk8gavNZ4gmWSM6eXQXhArXsGaW2qhVGaXtq5GyBsceCwp",
  "key21": "2tdRqSm2pDkzHynv9Psd44EF5tu8UhkFvGXb4dVtat4xJnc6EVMuK6tt21TsyeEVix2AzR5PwUNUYawbrPzqvzTX",
  "key22": "3D6qUyVEUWkJU1yjVAo67uuu3fSBN1JwgD5md9TtbsTt19nNohtG4cSNhcemtYzLycuXQytK6Qw5qJ5CN4uvAg2G",
  "key23": "5YW1wvnsv92Gz4MAMFetwdLNUN7YQPMgdwFWy6Y7H6YSCyYcRJxMuLeBwN8pzKb3HFXAVX5UPguy1z9jfWKCXmC5",
  "key24": "2owbnBnrXAhBvoZajacbto5rg1H1P58hUzUX4Hw4rSwiYLcYKdwNHmKHj6bQDH2tGeXTqKY3w7XxqvZ6zGFJTS1d",
  "key25": "2wdqi5d9CLCBEM522Fx7r3zYnorMm6CLzCDim7NyTyxRzoqFiwbaZbZmwW9amBfGeyGDxaiTYkJRV19dcrn8bzVL",
  "key26": "5v7VbSRf1i2TyNGL6jenshqp2iM2x2Jxn9Q9zyfcrGxEEy8vRhVwdDYaQEUNG6oaFs4upYet8Zf7tdCjh36UdqXW",
  "key27": "4yfSvmx8itMg4M1MkYAhgBqRnManVY7FdYq54F1D3WA2usLSbquWtHJkr8HDMC4tdrAtyTG4dyzpoCGYGYMsS9fw",
  "key28": "3baHm84ZqaV88fYzc2jEQhuqb5KKULW9ioJrZcNV5RPpSknEyUmoYkvZi5Qd23vVTNSuXFhi7iCwm71wKBR9Np35",
  "key29": "5YJouhvM8qcajWkLXD94rYGGgGGeZDtF6WJKUsKJfat4LSCDxVkLLAgB2i2YVj5acQFam2KjmvUWN9zeR6Y6RNZV",
  "key30": "3j5viyBGF3YB8FmqHqVKywg92Md6EVUZrr77VhRxT2vS2SnXFVsL9BKmzujqXyYMmF4zWcHvNcV6zpwjNazbbqpU",
  "key31": "h8GSJC4kcXwvo1YEohQdRPoJcDWb4kHCqHdLy6363MGMgecF8pMy4w8FKUf61KsneXgYyahkQd2KxRzS66rKKsn",
  "key32": "2CUWMvEhGHzAiJnKvBHWLkr8KD4fWbwoxYKzELADGEALRPRwJxLtKWSG7Vg2jkk32M8H1TCZ6KVYxi4ABy71QRCN",
  "key33": "2GVtgKzx6YNafS1Ngpjeun4H8jZP4VRvJViPAHReDUwdfjS7L5H7u5cbWEFoJciGGKyQmRBzvKABzdFpTPWdKpLe",
  "key34": "5qTbZsdY5xbkGkeneTxTS1PwTx85utya32xeBL8hrcviBSpeaf5bs4tjSTKeakUUsRMaUu12SP87GQ29gtuL19Ly",
  "key35": "4Ysg3GAQgyRKxWagejgqfNLLv72YGhUVrPdrjR3zkGPis3GtSq3Wpx156i1ANkLh8y8xNp2sK2xStJKVLCtAoxn5",
  "key36": "5bMYAUoCkgXN8yWJc5wn3vcqByGAZdDAyVoAr6bAc9jurVa8E1kQ7jzrZjPqdniTigVWipU1weHw5usq6TUt8Tmq",
  "key37": "4xGsQsfTMMP7rGBdWCEx634t9eBcwcDcxgPb7AjBmqmtPni2KbiGzG3Zr53P2GVuzFrVpS4gsH8DQMvDTrZRMcyB",
  "key38": "3VEjrUZYavjcM1gLKwCZi3LbxEUf2NH7EWbaMTcggrCv1dMshfMFrq72gbqC7s2tEUprFqGkQxgjMFVWcgD1vgKR",
  "key39": "5nycLNEGPy3GoiYoZWYrc3LLUZwsU2joeBC9G2ioY5iuCviefBSMnb4dG1nkh2EeEBosmfQUo8xn1NfFDkn5B7at",
  "key40": "5Wxg7oFoc9Rn47Z2g9YDBGbycJ55Eth9rLXGqFSvqEKYihP2HDMZHQkkSm1VB6ohYEY3GQ1hK7AaW8Z9n4Q4PLMx",
  "key41": "4nAQAjKJRysAvcPhD4uSFHZ8kWEwaQbAFEbbWgGehxHtT5GzTfuYCb3tyq7umeswpkeXdzkFazoPeLNA1Ce2scqB",
  "key42": "2h5vNvGrcNEs59awd5XgxosCFZaTPbZ8fBo37iS93zXHNbsbnTFQciv5gz5pzstbiMXi3UqqywkiDfTXtQEjjFQD",
  "key43": "351HSdG8Z9a8aTfU8spLRVfL6Gg2VVpURGpc8vBduCWiKTmTi91LgXHWexH6iESZi9qHJXRkifNrsKa3jt5yStVB",
  "key44": "2CiLqqPp51ff3nYYhDKaafoeS6VJDb91znaF7K4CEyi2UUCh4Cd3w5Jkoek53hntPU264dQkkTDumngzqHoVxBvq",
  "key45": "3oWJqipjjKKsxoiQqmrqen3tBpWM72UsYprBoFkNLioNoXutJLVGpDntDK8pLQV4ExmqtXHDDkqPmRZ7otmVd7ff"
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
