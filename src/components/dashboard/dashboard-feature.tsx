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
    "4EW1Uz2XjGc9B3gauuWvQzKX79sFiPC36pPMY4moRofNST87jBVspoeVZqSkXk4SJDst24kznVnzMh9EGQo2UZLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bY3eQtrbKWU2q8QRoeocB6FnqwJcHWHtiHVdEGADxEm8B7rtVSsHJwAL8fGWiDCS1zs63LNihf97UE48ngcBg57",
  "key1": "3Ho1W5afvLrzWWv8aMqKCaFRxjhuZSsJicD2SaXUikMfmpn4JtbQnkZf7NPyKdAmjve8enE1MaeCVVKgUTktkkM6",
  "key2": "3L3sPeCUQEbGSg5LVGA1zcf3LHqk4wzQsS6zx57u7w1N3YyPxW3SXYPosmKFxbvUMDNQhtoBL9ZZNzP4kUAjLVNx",
  "key3": "4BYH7k8uwdGLrETPZyKx3b588ovcor2KhVpxMrAt8VU5Fs9nCuLShzebp8RQ2XwtmiKJZNgJgfXqxYhnjHMfT86X",
  "key4": "3wqPDMwseP7A3Bb6RZTo3J9goR7Dh5tepf7KVX3hB5jyaGd3dDwJEdyvNUQSoSZ3qCyEadA6Xj2dji5f6C8yxTb4",
  "key5": "4KGWz6b7FEAyhmdDpVBHGsUF8wqtN7hNSboA9euLGHVk5VCVi1zHYMWrQQgqM4J6spgq89owJ1w2gFEHibu4bTGA",
  "key6": "4bdDG7vWq4FKdvkoyAU2CWikrXNbxBGCky66m7xHr5GUU6fM5QG7GbxQ6HmgjVFCZwr8TFsr5J4SPrDhCXFRjDkX",
  "key7": "mNEgA5H61Fy23a3eLMUxZXRh6G3w8ijpVCtyzt643xmoTPuwo6jVXiskEZLmZoMGxbPQgbvRPAwdvMSi6Mzq7qC",
  "key8": "2Ncp5cP3zQz2Q4KaQzRrAUhCKN5a3iZdqPm8Rs7RBfdvpiTCbEkFFcyw2EoZc9Ey9EL86526wtJ32BCSQ2iNowBx",
  "key9": "3Aw9aGA4UQjb1QHDvhKfqS7QL46ZTtdAjh9CumJHLJVMm28VVxXZiFXBHgSPrc53KQQ5Cd44enW89qTcM7NAFYcF",
  "key10": "62gLuKh73B65Ko2UZVB22yPNc6wXUNuxE2DUuU9aRhrKjGbRHWUT9bgXn2ydFccgrBYSEMuGbk8JXQdiR4q6W4Pf",
  "key11": "2cWBTfsPPt5ZiDxRwtscFJTb97qVCuri16djN8uXyyvbbS4UH7rDmhYQS2L6iwfRQJBUfYno8rXoFNiBSRDbKJVF",
  "key12": "4DFbvEN88HToHBiHvmVqFCQKXEQYMURii4vhByCAFRnH2SkKJ3d2tV61CpofuZVkTmhE5Hy5G5fixwVfJhW8NfyR",
  "key13": "2tXtaw5aL9FaVZfe7bro4XreVF4t5yh8hJdujyeKanhKvb32sPSNZAFrHuAqnty5E5HePC7SdbzY88nKB8BS6L1V",
  "key14": "wWGpntThPjqfUuN9qBd6i59XaJKh89zts8d31Qdiw1t94wJ6YakWi9ht7VzzyWGttamPovumq65HL1PKvBXcqXA",
  "key15": "43BY6Y8vxTT1KECipvcbNJGeq5pC9jtRpEmCWUWpFTdHdAxTTUQc8WdvMeFhBp9ya5EXXdxALtdzGXkFpaT3jZSY",
  "key16": "67aU4MsvxmjjEEJ6wPwMMKBKomeRWsURC2qKK7R8SPgrVZbj8W5E4A51QyEaznS4nDHpZ4Zy1tiRiuXjo82qC8ww",
  "key17": "3yNqGXi3fejJGKu4tMKBjidBppmR3xsk2FUfD8CtxbeKHaMXdmZRyv5CBdiNz5HgbsMTtHVAf5CSgAd7S9AdzGmK",
  "key18": "B3t2rjkaFQQWQosJkpdhJDFWfr3kHJ4dfUQnV7csh8L79oXfpt8gmDHXDSfaBjnqrNs19VDGDAvtURWXQDKnyrF",
  "key19": "2iSBkj36dXUvwQEYQ7dSyfypYTvJCRSaQve1HmMkteUY8QHBNVx9ubAJWwAy7ETsbpaZyyfvsVTRkh737TFdA5gv",
  "key20": "4dz2KXx4myKj1sGGcAzW1AEFUmqgkJH6RJxz9U9Xryb4ZAiHga1BawfBYu2XRh3ERU8RmrfxXwPGMuoWyt5MRZ82",
  "key21": "2qzLXgf9QG8GpxoRXiVrTkCaCgZF8fz259E6ZDvFQ7fYLtCaxT5L9kn2Uv77xChvMZu9nZh9o3AqYPR412Dtzyn2",
  "key22": "3GEkhcGkFzwoZpW736MQTwnRVpUaVvUm5Nf6JxMpgAgX73WukFjrmnFijkuAnDYDu2wK1QnLyAsFAHGomzHF2bDq",
  "key23": "278qraiSgme1pkRFbnuKEQEe7hNrXhpGMu9KczESLi8mQsw9JE3PVhQvF9nVrnH7fY8q5gDpiPH9MvGErBBCPa1Z",
  "key24": "4QEz5UzFsFV9GK6G5bzKJgUtpvcQxFAmgz7r11hyWMyg1DeZ4uQR8sru4QgkHjhPdqshmj8DnNLx4qXMzcakkE7w",
  "key25": "TgGRvvxvJPjG3rvJWcmHrhpqDNonkQktNH7RfodaRbgGv9NFJ1LrMyMEbjyzxGfwy9imvk3Ge4M5p5hXhP9MRVT",
  "key26": "qPeaWyhwvcMoYUjY6paEX451cVzq7HavRfbbPdJCKtz2XnURGS6sFsavYuacuznjE5tg56rU2KB4mTvpxtW3A11",
  "key27": "5S5Rpfm4b2tAmSiQySFWyYixrVsCESM6uaiYB7AfrLPgdCXPdgGBbo3L1rzVaJwYfp8A8ye4vw6i3YUKZJZA2JmR",
  "key28": "3oce3bKPzDYCGLCzC2PTxyPZH9WgdRAwBEJzXeGj9GQXJYPbgVSE2fLpyLBNuSFCuv5TFZwGqMsSSwt8jEhLC72",
  "key29": "4tnZ1aS8wdqK5D7N1MQ8ZeGz5yH743ZuZ77kTpB2Hh3vxTgAqEF4m82NYYiJuno5jjtEYtikqB6PKitk4xDtVRJ8",
  "key30": "adQhtVtWUt1Jpw8CLkgPZrsyugBuJtvpUL2jfd9mCSwRx9o39gSRm3nLUvL2WwVivPHmtUVdQkQhcT2DuSkVYNi",
  "key31": "3XxsnoGqTG6d2DRBZzgjVDM77KX2iGJwdgfKukzMkXFAN3Ppg9Cc9h7QipMsBCJMf7wk9bqPKC8dvJECuEEWMoiq",
  "key32": "2BaXd53erFHKxKwuVjwPKQLgUuhnZG2xgxDD8esoJi5ZS4AmP8ft1K4E5WfandTMSQ6ygXJNwJqrtgG5CsTtQLkC",
  "key33": "53EisKm923SSk6LZJLx2y9VwxsU9Lv25rDbPhQ7UC1Te6Yyn9WUaV6GsrQSRC89nW8xUm4vvcQ3zYkWbpjke2sst",
  "key34": "43Y4ntg7JsDzUAm88SasxeEQ15ZiusjwkfFgN4thSmqVX3FKngz5ELkA9Cb7B6wkzPAAEUiTPmiN2nz6xhccdkA8",
  "key35": "3qxMFvp7T5CPRv2SdGJnmZhiFawi6poAEgd6opynQFiSBPiUFL7wgk7M6LTbUGQXByssHzgpz7XfMkV2bWZNQS68",
  "key36": "39pbWvt7TJ5Qwv5Jfz8Jzvk8u1DboAWu3PBSWjQxSjKg1NGwMmSKovd1MA34w6k7q7pHDtD82H21vuyXmr6yWptq",
  "key37": "xoMKRuSkZc1oWo5xaupeFZ26UXDqAsaVWoNZ6Ms5J9n761wDT5pGzHeDKsaVV7G1nxwqpojbP4uo5vY11x2JMGg",
  "key38": "HNS3zkj8tNLtSorXQhJe4jta9pWt99eKsnngkNrG1RMwBjW3T9N6Q8QheNqyhqaXY7wy43DurY61myisUVxhKYX",
  "key39": "MQMg7vecpEPUibmovDboLjncLc8BatNienm8sTgaUdpKTaeQbq5UQrqevMdNFuHqq61EWTLkzAMSjy4Nbos7KKC",
  "key40": "2vpRytbFEMQXSZVd76eV9TcxrMQqB3oytZR6QCtgHpxZSLXyArdQsUE7CcP95WNJq8gbXiNpGCj4r2rXbAwMWLU9",
  "key41": "4HpV7jumcssMMJ4GW6cM42Fvk8wr5cmctaSVmwwjTXnptX2RnUcrAUJ2rA7UgyZcThiPVk2kyicq1rrrswMSRhUo",
  "key42": "2Nh44J6aGcnZUYruexeSrwnAPFCthAVoV7EWWU5gQSoTPnke8wCiMawRkUZexhfHTCaVaef4bpwDgp1xEVhn8A88"
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
