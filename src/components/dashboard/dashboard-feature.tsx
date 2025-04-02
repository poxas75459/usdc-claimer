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
    "5vFgU7V8NeSSv6o5rXhhyGi9vVNmWpBijqfwodK2C7qu5NpXPc3ksLQ6qD8uD9XSg61xYGc99PEziiJg9y7YhhAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hkAie4iVhgo3iYpaTtjJrB5HaB8mbFipmR49meHCQT3mETGHgqdcLRntPpzq2NbxeStn1uqG2TkZudwv64J8W9T",
  "key1": "kvRb6dao7yoKzDvnM4DBTzQnBPzFGfLxQxdY9Zvb7iitX3EBaeFGtQXfrdT4a9XdhYkoSPU6L3gjic9oBPJfDt1",
  "key2": "5iw8yo8N7FCyLXB68TU1HFd9YDaFucPWHu1MRU2ZSveb1jLFkzvhBeBFGJB5VqvWoNQQYRiQqJ8UtdarunJquUpn",
  "key3": "26EukVfieZ8oVJi1vUChfDq1dDhji6dM5VhmEesNU7TVpge4KPy2keVSC17y8175XNaq3CGt1cCojvvSMBBb3RzT",
  "key4": "2AcZ7oGh18ubFU98g73BHS7jDECGLphkwDqtmz1zF4Vhz2u84eV6EmZ8nF523HjEH1zyuHPrBBH1vooHgWBUoGt5",
  "key5": "FQCy81gV6tXtz6f7H2hHpLErLY89vb9Sn4zjh8u7rHHk1mXFrSPVGxgxZn25uLUKAipgNbFS426JtECJdYFrpor",
  "key6": "549AqeSadmdgwy8Ro9WKEmkwG4pACKhVBvUdnQDKCi5DhFQHbhMGiGCb28RQjqy5soh4N5Hekit7ojgSD5Nk364V",
  "key7": "4fbvxVf71mJvuKRGHR52W39P6PMNqdDwSHNHU16YiU92m4AeexTdGCjzVCerYpTDoUuN1qDUBPmXrSEfSHD23UUm",
  "key8": "52rxJLPom5QFZteDjmwoBmVefuKND5Suu5tSN6emD3yPDjdjh9TnmQF2P7wLbYezMyX1Mg535RvXMbPyCL7fupkk",
  "key9": "92w3H1Lxu1whMfLfUH8oMDjQ1x8KdXBeA4ojrFtnrTwgqUS8dvJUWfZooWkCzhF9n9DH9MyoTGYy1HXNEU8mVWh",
  "key10": "CqXoqNGznxHJGLw8MKbXFr2FzoMKoxXQueCJixD7oqtZy88VjZHZpYBHhJksFmZ4H3GGfkiZpeeLTaK8sRRLf28",
  "key11": "29FQrWMjy38vuckSHVZASgHkxaJCaYtTGmrJBz4cgW1b9GwcaTTeCH6rTDBpc79GDBGSeZsWHgw3Yrs8znopmz2Y",
  "key12": "2if2rzktkUmmHk1wLhb8ezF9oNBoaPvaUDWtTQttvXzMU5TZhChJ7BijAPDzAsMWjAJgJ5S8KEKdGPFufjhV4ZpT",
  "key13": "3Pb2hqYyCbVNTuYXDAJNnm5Y3dvArKkDstrAbMc3u63jiepcVpGk5Z8YsiSCCm8LX2FEiJoF8v5ozj5Usa964KFA",
  "key14": "445MWcz2SRJL195amAt49WQEzKQW1dBDi1BLsgLdQmfdPKSdQwXMGLK79A2n5gpqJ4SuCEMZUmvXshsSvUw6BLJL",
  "key15": "3UvyM5iLUmTfmgyk2o9dTh83GFBupBYm9dcXE5YZ5MYnTLZvbqb5XPrjpyVYfwwdZYbVPbxQxYqRbNNdLgxHeLhz",
  "key16": "63eX1Ua7SvNpEyBBPRPiBFh5fJpbkz3hsvcGeHZ3rpSrUP6nX8nEfoifqYrDRaJNLxZxbpvsAz2uodT9QBqXvrCJ",
  "key17": "3Jah2Cp8JTHbAyc5Mv4kCgmwYRi26epqGzQa1GxLEj2TLwWDQuvaVXUZ1pHfKYcWckszi4QSdiPKqSefM7UyHo6q",
  "key18": "66UwwddMXBoGfRAzekx8j9Trw5ohMaoi2qq835X9qr5pDQZskeyrBGCQZNNHUqXRhhdhJKwrBBCvpqC3qfPsisfk",
  "key19": "3RK5kmBCbLNaBzngxvgCBRTsWqf5NvDc67nV9uMAz9cZVmCh9LwXahrYFCKeZiMM9h6WNph48jDQUEPvNzrhyfbx",
  "key20": "4e1a2bcQbA2KwQuJQsD48yu9rPDixJufdTsZLkUYeDFABGwQyL8SJ49g2dAYDVhJ4KVbDtSsNvoGcCduEofe8fnu",
  "key21": "23mneDHrkhcZcoF3WC7dUA67evrwFTyNPW2PzpwSsVMJQsFZwqFF9nb7t74CgisJufaCAPdmweD1jjuhUtjo963R",
  "key22": "3v3fFUovza3VXgHWhEiEvdSGhCQto8VYTGsgHB8Jk7uEDFaGRXLDiP6EU7rieMaPdVtgCmGjiAn2BSiRHaKarYwj",
  "key23": "3nyuUkQ8JGC87n5L2fTV2WJQosz3d1MR22fzwv4Dx379rjqjss9bjAdzHzJBSTVfh84VM4C8xndgyuRj1Qp7dWcF",
  "key24": "sgzxUb8TveY7ZhUdQzQHM6EDijsPcvZZC9yJGyCU7kQGCz4QoCDpsEmMbK8yGjCcNzEvs2Y5pxSV3qUAi7Fkkuy",
  "key25": "2kPkoY3uDzzx7uD6NSRSjT6BsJpnimprJ9Bjwmw7SSN9m6WGy8McrZMBbtrWpi2YhuyTwHowB6bjtdDdqQntzcC3",
  "key26": "59VALgCyKAk3JBe6cuJe6cijwbhUGKGRpioqsTJFNej4qNDf5muzR4u4x7f1S9oWUo1EVKAHPbVzgiZr83xLcEmg",
  "key27": "3UTiFTwtkFZBd4kmTW6q6W4sbW98sKvaHCNpQMiunmGEDqXjQ7KiQ8gMkhvk5bMdKQRvN2SsV2aoEMesY1MJba3H",
  "key28": "gEJrMLxGqwtmrv8vcXjaTenxuF9pYsmwucLrcGVrwjqJQ8RUFE6p2FYLjcJ7FgxqALfRagz5KyUBpEDJ8gAgSWL",
  "key29": "JyCjML7GUoRyhW8UQ2n4zp5r5RWYLYUTZ9XJuw4CTt9nm7XpkDsimDwHM55FWPB8NCV5fufw8DSeACHCexNHNgw",
  "key30": "3Z9V6Vatr345FXP9TPuHZuLGAjw41X4yjEoxLEZAqBbWuPJ9CFBP458NpsfyGuGsGkX9AAKiLQdvBeyojRkfodUQ",
  "key31": "5DgMQG3MpX3jafzP6zdJ3Qhyc6q6tyNABaC1N6XpcsMyxUEQ6zZEpi4mcuHDujvcYGZsUE2LEmgAy2tRXVHh2ezv",
  "key32": "2xnRCupanJLPoMdavpVhZT9LRTBJ72AjosFQFNHBshAFJDHZVkAENkzgD7zToab75AoJtuJWCcvG6rx2GE84sfLn",
  "key33": "5Xz7hYjuftSk341rzUSiDBZ9woPVMtkrfSKBtrg3q3sqovmTy5pTunm9ieWLkNRAwyg1tWzg7EJafurWAsnAt6VP",
  "key34": "6TZ44ZcgWpXFxFpDMyHdyqKD8cCbqAysZ2WakZ7CfYvXaHFSRTnbTt1fSn2Rrkdpmjuz1wxE4xLpUrJ7t2cV1Ji",
  "key35": "RrRACEqz2duVBTtzyBLZnLt9JEsgEaYPmoJUyt6XemGTnVYYSQ2YTvTbzRHWxBaH6L2q326gsES5LX7vv6ZQMjP",
  "key36": "3caRXz2hP3WqsBuecYr2LMrWw44FZRax3r9eFefpt3zFM67LDs8narMUQVMvqj3mEWRC24a9HwEjv2TAPBAFbi2Y",
  "key37": "2PgUjefY1sigPJnYArent5jcffNe5gbuZVBKxfmdRezaYqAKz7bEf1f8Gqy8w1V5jiUpkAmkyCDH9ZqtCkDugGZt",
  "key38": "5CHAD6Nrtbxfuk6bab44s2jQGYpUZYhH1A5m2dv7TY9BzmGftMgHCjALhnzs29Ui6ejG9fv41UxH4Pu2Mt47y3f7",
  "key39": "55NtFbeAPu3d3ZVT2WCq7yPzTuPvpuHTbuWdgP68L84NVSSk4mWWSdWAAnPxpDUdEvg8fJJj7ndxnzdg4khc38VN",
  "key40": "5PR96HwjNwgTjfScNBbpwjAwGKFWub4ZF3eq25KkZTNS6KHBDGGZKkRXkf7qERXPVvyRBUBPKjSE3MbWP2JziQnf",
  "key41": "2pPxAKSPenFRtNBifFmq7v2JABRibMg1nhhW8UTgNXtMx1SoEHFzpcFz5dJnvP78qpsnh9AD1e6zDGhBSVpv3wPD",
  "key42": "2aoxevR2cUJPNLUcnFdoQyPTJaTH2biG78Ba3zxbJjK1Lqh7BobKtii83usV9YMVwqJhZ9KPUeT2Sc4tvPHNu5uV",
  "key43": "3aKgMcQxvEjH5TT4bDCLUPKV1a5kLYUcx3eEHyxP2dzQLha6M1uAU13ANhxE4RC7nkonsZrTXkC2Gx88YEoKa2QD",
  "key44": "2Er1pWTeuqEgzmq8Z35uoqa7m38UDww7NLSE2PhAxjrDim6pPNd8qL6EbtzK7Kz4WcAvJfLYHJe8UFvvHw3X9bny",
  "key45": "2Kd2GdW55xsk2cRTGDVwaTxLbsNuueGKfVqPPs2pkUKMC7xmMjfg6GeWqs1zVTEDQfe8ZNLrB29HX7Yi67DNNta7",
  "key46": "5Byr2jAwDCkpuKJFD44Xn7u8KEqgTHRVwH6yrdeBgY7EBu9N8hKFDGMbtT5m5VM1MRKoqjTdRuHboofrCfWoSNMQ",
  "key47": "5XjkD23aHrx6fdFHF44BdRnqDmoCiVp4CXaRoGT1WsUzhAeyT7oWVn3xX6vYBFauJzWhyPZdSo7p7Vj97xr9Jb1W"
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
