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
    "4psjinVKYcQTtr4sFzRnqyZJK7qgrwQg5Y2Uk7gSsWYeyN4CZ9rVksLJWAnZjQqbvPGH3ThzQK3bV4LuhE5utXFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sj5ebBfEDaztDAKAERR5GPWrPbN4SdBgaNQ9kXsPHEwqT7ed1hxMiUYfygFEtA27yAyc3yCN4LAR9cmxeUmZJWq",
  "key1": "4SKpenvnfoEKmhqXuTKHbALWJr8VDnTWFBCW84xdMiUjnbpfthQeVnLhB5RsxaiK72gV6zgSsh9EbkuCf33iV3ZQ",
  "key2": "4DSD6dHjfiBde68JyLMVqysyZEHCo3S9h3e76RVXgNbdhpmFJp31vQPGX9kUa2cAHXYLhR79fRXKa6KuR6rAoYq7",
  "key3": "62FRSkYqyFhcYKSAme1MrUZMUrG3aqA9GD2Ru5ZYdtAYYX4n2fYQdScZNgo1FSBMNP1BsPhjKn675rswxqgqGT5G",
  "key4": "21RNNuYDwZ6Dmt3bzwiiKRvYFf8A4QYbb7o1aJ4bjyyCcWvnUr2F1tp9kihG7fun92thtcLCSGqwxShYguukBbd4",
  "key5": "DG8DXYYuFsGRMSoCqyEtyv68iumNRb2u5G4fkCE7N9eXvUeg1b2HUmjScPKGV7U7JMHKw8vpRBnsqPB5fjBzaS6",
  "key6": "4W9HtUm6wuP1iFEkEbvqHevFPV1Fo5Y89hn6FdqoovxuWfAGb1Hn84GaEjYQdtNQVGkYsVr1E3CiFW7hayeV7Mvp",
  "key7": "gb5yKZi5dahkcVTfRF7Fg2arjmQr4agaayjm3UQ3rAkJpTVe3bFpsbkE17eUzLfUXtcxKKFimyPiPoMoV97knnF",
  "key8": "5HdyAHXuxXLHqdJ8jfMAA7UQewHvumcjysMkbvASKmzAX2f7inHf7hXVCMbuxHhN5pbaE5i6Zy4whpmyr2pWQjFL",
  "key9": "5BLgvLa7o2zW1mJvcBB5yx4z2XmBi3qhe5sYpf4QnsXNbFZXcSQJ6PLHWcY8XGEnfppV8nXEorhY1Aeeh5Y3cvUs",
  "key10": "KgRk8bk12LK4siqs6hNFtcCH2NWKNDfHCFrXFZu1L9BvEu6zhgaKAkw2FhDJShcRDwrVnzCKb3118Ayac1K6WeX",
  "key11": "34DyvKsbSjoje8vYdFth8qVyN6wy6Yc1mjQRzTgnT7WZNphiQU8wTRXnktLN27kBZn6khKkcNnd7WqPXUmQqaqZc",
  "key12": "63LvFfukLMCjTVbefb3RVVhUATm3mVh7Vh1SgLg7Ri9xHVYi8UzNTQ82R5VDQrfHnJBiUVVmQPSy4bwPJ2LYVfWC",
  "key13": "2qQWK35xYEA61jhe9dWVcg6iLHh9NrVNGWcQvh6XhxVVAiVQjvwpkp4R6KGEZDPVYHfvhBAXcHAU5huQVaHpuGgz",
  "key14": "4TEvmbMC9g9NH1vifg86PYUvXJ9wBNm7G1jTEiqQeHPfVbHXYE4YdHpzE8tykSNtj6b9JmUMNKRCcgJhaDukkbA2",
  "key15": "3By3xYqMji2geRXAUvibMmjy4jX5fyhzbArkTozfBXYZVsShR3zahkeVVRRF1kygkR9cqcnhSA3e5qxPemQwPQ1c",
  "key16": "2pFVph4PMGiffzUyG9oDFeTiKicGXLkGomAHhXeA3rXXkSPdonzCkrjJwFiVsPSREaWrmgpLNYEZh9a6TKdEte7c",
  "key17": "5EqwJnQUsGpqN9iszkGKJs4wWXnkUJtjboRwsWJjXYJNt7n9wfVEydpUboaSPrXsXaGKTd6qiU1CVf2BpohmYfor",
  "key18": "2gxo4jeAUY8C8tGTrmQuUgzg88FUDWpdnVMhysgF6RRbjwsEZmRT2KNjsoXSirL7Gpenvck2EFKr82DpEf5sQfYW",
  "key19": "2LK9vpnLmXahTkXNobYsbmXjwbeqZmad3bX7irZdSKEv92JK9Updr9r3H5YTe5tJ85MqsYA8H4usDs6AXuUYsvAv",
  "key20": "2FACsakM8WWzd56a6QVHrfNcDPSKtQaFv4tLWPxvG7hg7uCyb2zrq8Gy5V9QKW6w5hucZDDysSrf2Hz79XnosJkv",
  "key21": "4zuZ28Txr9TXgBoa5k2nCKtQPqzuFg5vdGU255Xx7Y4JXWgqjuqXrXF5rhq3jhi7jM4KKaGnaUcV4wbf2En5AuLs",
  "key22": "2LF6iR64Ve4iW4kuSH5kav3qyYqWsNKwJgaU2Ws3wrwiNMWT6Gh5bkcqfw8rnBN9HeqRLw9tXcsRqMYbCJAQMNYx",
  "key23": "EeHWdXyCihXnEUzo2QqxZYwSWy3mRwmYspRssQLksJnM9rpiNzr7hnxR7q4KUaJHDK7pv7Lgv3SQzYfX2an5UQ7",
  "key24": "3dF5AcE4pmMwJm53ZaVNnsN5sqDDfiKt4bfENHUEf5VUwRHU1bYJn16GBJ1zRJs3HWnW2Hy3RmiMcsp3kbpQhKMb",
  "key25": "3fCf3uDeTGXZ3PjKWQtJmYh7Xy5q1TT3tizvGN434MYWEbFDnvenuLoacgs5HoUqmUR7WWjppQeCMWr9U3xBZT7w",
  "key26": "7576G6YYZEEJE69LnBs3ViDDfvZZKXKiKuaTnTvBgRkWMSANnfoteBqLLqBLq2yR9fzP8EVJ7uUqtp9SktLUWet",
  "key27": "g2f5KrqES3oQfKZWWuFb7hCpJR3WH7d8anH4H696U28ZJ8xxHwF1F4LTzWhEpERYkAoob231zaSjePcDL27uMHd",
  "key28": "tn6j9mJ1w4hXT6wutxeZCobz8wugzoGY3YnV24Lp2fEsr5AbsSQgTHYTCGzz3HiY4YHULR2C6LudcFvm5QPQ62C",
  "key29": "279pERMdaoBnftnj26N6Sjm1RAuysFfkjU3sVn8ZnJmgX5RfTB2SBqaXCFRADL4Sc6cYFs566EwB67tgSxpQVEXH",
  "key30": "3Lhxu3LeiiBEoB8yTqk2cVTyEPAxBYoU2mResXaBBtafQw29j9P1gxgMYDXKPwqCerVtsFtSMPaGFhTvC62MgZDi",
  "key31": "5f8kJxuNgkEx4KPR7zf2Ux2dreQxWjYjhZq9JcQqwojQZ3Pw7Fo9kFifhCKgNKn4QaFbQcULP4eS2341cMuVRk7",
  "key32": "Jno3MfvGdvmFbW5HgHdFWvzvUV1nvYTESDSYYhBEcQGBAGQBo7npBp3sQ74iNaUeN7RPBstuX1gmu8wVcJCwGp4",
  "key33": "2Src74nGYYrggGKGhMM5yx13A4dn12MTVMdx4GkFNySmmBViiVJXRgWQ8TfWDiTqRf2AH8BtBZrXtKbeCXgHpRt4",
  "key34": "47n7e3RJNDZEETsVW7XuYT4yLyN2Xso29sHgViiYmuHJBwdiEFgVDa2iWRrHpLvwXJ5amW8cS62CWLRHjXtEnh1n",
  "key35": "3zs2QL97x5jxNA114HE8j3m53M4HTKLzUVkxRs5CYCbLNPRVYqLDNMDg4vs2gjpmjrLDCyeugmByoCBTJjUNTUgn",
  "key36": "3ZtRn79GYWeP7TsX3aqyyFqQTC7amD5pPyJ8q4nAx64QEBWBReMvJnU7DcLso6WKppKBa3YksEuoDGbfFiTdU1sB",
  "key37": "JZMcpivxEKPEqx9Ai2nSHDx1py4k31VaEosgVSNoQKRXaRxEW2CagKrFkAS5cecdXcAQWGN74ArKvt9d41LAvQw",
  "key38": "5FXbBry498dP89Zy2RgAkDP1bpqCjXuLG6xGhudbXrqg6DGmtjUQd1y8U81GsbHHpZQRWxc5RXYLdUjxT3fR86sm",
  "key39": "ozqmUTdCTftKcpRjPsDAhFE6sukxVy95SMAcoGUVH8UW41JCPFNVEWX35CPZr7pLMZQ7v3zXC6vASnBmpLZy3c8",
  "key40": "7Z8gqxH9U4k56aRUKAPFzwHbqckExQU4MHyvvx8AfP9KGLiQcNTscCNq3CwtRZ891affyKWqWCWYqsvPjpe3W8A",
  "key41": "zf25LtKFLk7KEcnN1Z1qANqDrmeeKcsghZKnV9PZ6ixySj4EKPewXNfih98nhzfgkbUny8uZRUAR9jvJcNHqGvF",
  "key42": "5PfgzHr11iC4XCH4Ekkc5KwYSrdG74d9u5dGB37Wzq8rt5ZtBcmLeSSKkFyRo1ptbwz3To2JB7XkYuTogV1VBgTf",
  "key43": "3mKY3Wf2QwXiH4S3zgL3bTCWkRpdwbFptJ4522bsnzXL3d5ycCnaTfpEotRXGtv6YRdmZzqnj1Fm6nygtGZfBfRo",
  "key44": "67fhMfsXHhzfGz3hTUEuMKPPxz8Cdh4uctqzabCk55QPstG9awkySrJsfRDVWYMxgRqL19X43tmNbLNsh3FqWfMH",
  "key45": "39hrBxheEkB6prPWRFCPqwkui83mnPeY3nGUZ5fCJStcxTEKHURUKPDBTayRiUMzcHUejRgydxBU7ChYVpExE6zZ",
  "key46": "gHGmDHSkxkDPocw1ytP6UamNBY8SXSREyFbfgvfMvokWJ7Wg4KajxpP9hDtay6S4yktyUrNJWmAXDy9yimmRK43"
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
