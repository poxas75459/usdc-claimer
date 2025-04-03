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
    "5vNjCqAZ6WFG3qgkbjYC4yUVspJTPwmKnmTHiwxUmCaeAWdk1PtHyFpDksMEtfjfrpcx4s3cPiTfjUmGsDrLGXoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Mq1q1eowaFgUf7pd6jJtoseS79U3KNUjRBGi2NXD8vREPZ99EDc9inaVgAiYs5x7Pv4J3NshoY7sRCimrUAPwM",
  "key1": "4PAjxXgzP2jCP3Yf6QhBCvmo5i1QqT6zeTHqbsb3EThpefzLkLYSU3Bxizawc95dXxzvqvSM62AhopmnmP5ZJLFt",
  "key2": "hak9aaQtty18q4BKto6nTNj5zra7RLbfbGWMRPZic41uT6n6VmcNbBvnivqddLXXBDqM5G45mApr1CNQSvWbJsE",
  "key3": "2MD1gmWv3K5q6Trzfcesajmv51qA6mmktBKBTHRp8LnH1z2GXZxdqZ3Wcc9DRAxd3zfSqPxv62GagetBZXYwUD3q",
  "key4": "5Fpm56B5KxhANnog7Qyqq88YwUzDv1tj6VqQRKKLtXJ15aMmyhHgkjFw5GRoNquXaJsPNfT7EDV9PNYTfzPrgeZJ",
  "key5": "3cFevUNJ2oiRtidB63fNcrK1rreKFEkY8wFSh659qiZ6nT71QD6ZRznP1EBsJFAGW9aWmc9z1bDgG4qdNYcoqfm1",
  "key6": "351vAWvGGK92yo4msw6gfVvsksxxFim16MvTJcvY8VvgF4FvzXQjH9YJwdxG2yJKFyFZAp1EXoQKHNPHxj1Nuy9H",
  "key7": "5mTqAAoypaVCKUNeax74wWfmUTparhPS9QaSLP797RC6rrnVZwTg7TVvSUi1XN1kfwRtMzWidSZiEmY871yLwnVC",
  "key8": "sv1Rd9D2LSZFxtPhvuWmMSp6vJKGrDZtq7S5ensqDjgqzvAdpz6o8NbbiychsQUDfU2XsKkUVCvmh3ktKHJ42k7",
  "key9": "SmcPVFwSGmGbu9zoKDrnnD9zU9Rtu8KrcmbDMdbN5koEMP76DgFTeGW4oC8fAgZtjewwSbYJy2T7AMcu4DMNiWD",
  "key10": "beHKJUkWZ3CAXqKJFqsEgjboSA932Rtrq4oYu4dS6RxBnt4juMd6BowkU72Cx2gCEmXxav6tetaneJKedh5shnh",
  "key11": "nbKacThiPBv5cj78FtJGJxD2H1hKywgpjRH8GrHfkWNSwh2aWgCvbmiskmnVPebBton4JKU4MyLhLsYFc3ehLgu",
  "key12": "3PynhPWvPCcbyvdgbe4o367V7X64nt9p7sXutxZ8m4ds9kyM2ErRXvqJpxFRCxronRDrabJcWGhGTzEur14CCsrH",
  "key13": "2aeMQYZNXpZjaTZptm3ZRHmedg3QB9Rj3rr6ZYWipTckzr9SgAzNPmdBHCJzF7SSu6mf1R7tMRzbYtZ82re5KHFV",
  "key14": "4CqvyLZuVA2r7Yafg6GM84VwARDDuSRr32Nhd2vdm3vZg2CdVTCVWsKoge9cvgZsCRRRoNZkfFhkkxqRmpcrpQmt",
  "key15": "3xTx9NXU8P6Ec6MBKyzGmRcRFaUTSM6PvQaPMkwe41HjptFtHBFAbqvN8Awz77kYz6fCyVx1xPFNFbfvo3gJuUtj",
  "key16": "5wmbUjjKEkjTWWpphQABQL4ApSiXWWc6PmVmfKXhp7gUGFbPq7BmCzh5KzDdz3xwmpBeDBkMFUT48Mm8aVRudhpg",
  "key17": "35DLtetTWF6gwn8b9VHcsR4qrtEUHmX1aYtKTtnkukofhrCjk1bMeAsLctdKaVrsUPNmh2nUhmzKwdLr2zuKbxRE",
  "key18": "34RMwsMgx536x67mTpd6hwJAdkDgjwMQDPYQb1jBpLksCJqrVyc53PoZxmRXNSRAwfLVWW7HhWSEZeZXjtqaUHVH",
  "key19": "4qBvvJNhvxwNMfSXV2M4DWS5EgcXBkDAMgxm4J1C6aXLoX6xAEZHtZGhTUPD4E6P68Mw7xzhSMeD12q4ibVbppaW",
  "key20": "2f2HDrNxcgBFeP25FJHPFtrcPPqU5LfRqmtT9DTtLeCRM8koHfFiVdSsY8X2KiGLZkDoF6JUyZETh7QAF9jxJh6M",
  "key21": "4mfpF4ktj6xpdT2gQ2K7DfSX7JfzanyoGWFG3Hf5uuktyRFY6QfSJDkaTVWZT5EXCywLrK9aP3AD7Dbrvkxf7BmS",
  "key22": "23FfmPqjgaBB12xG8c5gR78fWPntpxQduGAb3j8nPwJ8ubx5crxfLGSnXSR69D6RDrA8F9WQyvs98yhLLUnHb7ey",
  "key23": "4C7GzXiCGidgQ7xhVEwhD5emPgnPed2wCNNb5kRXBvAJtvQ9NDiusvFj9xmHTfxwpUwreTWjrZkf1LMrBjv8GLN7",
  "key24": "Ba9x984e8L5xtLkcxoPxMzpUkQUZMPFcDD1htJnFBNH6nFYNdQFtvoJNMHrxjdFgzKTNGKnHPDHSnXFT6wt3stH",
  "key25": "65ikEdFf4rzfCs9hdHfu56TxEm8wSwVFcZhsPDiCNyBCuWkmMwVEWoXzn1mYuSQyp3MJuVazKjmZBg1xgWS7H4pG",
  "key26": "3QFtosMKHMNyBxHDBqdJVUsc53VHC54efEbgpibG4GBJGh1LdLm4YAvoN6Xuvb8H7AnHenzNEyTjVGaiVAkSTTge",
  "key27": "5QGJJT18ghtRfQhg9JbiCPjbtyTfigovAc7An6sn97wh6Se9ZD128Y6q3gVQLaJdwa1xf6yW8cnoxPdcLkBwQfMj",
  "key28": "3XzAk4bZR1Ky6kBg21PRcdXp5isbsxuzSypKsHcCpdyGGwaqZpjCNaeDz3evszsUoBcXqU4a5ALTgWhDxhcr5wjJ",
  "key29": "9HYeaEhCrgM3JLgRYcdS37K7rc2aUCajdzXaDRGDV1bscgMKexUr4NBjKKkShSHuoG9UiFyhi198zjQTS7tPA1g",
  "key30": "53ySRsNyT3a4i6xBecMbbvPyQSBvRCgW9r6CLUNcDyZQjfikJEBJCeeSKpEGgr6TrCcazciLRCpumjNffMWAHNKS",
  "key31": "2uw5JTyNe33nwUUKCw4oZhY7mYDPCskRnEGXMLDNWWXRmvxUZFy3pLPanG16xqhvkV8yroYgCxi9urJ3Md2DJZ7w",
  "key32": "RupPCA4QtyhtkytKGMJmBFrLtnbu4Zk68aCYHacEGMTTNC5DpLbm2BV4qey1KsqtXtppnf1VU6qpEuYnQz2Rjng",
  "key33": "4n7XXYBmNyPDJoK2D6XEkTcCSWPESMwWuorpLh52uAaYpQ4fvhVLSdShQ3VgCnM1HGwNQpsaAouwhJ1oTajTQmvo",
  "key34": "Kaupy43CFrhzPCCd4SCavk6mveETKhPAvi1aa4stc6TXNMBgr2PRReea3CwQL25Qqz2khumYFm2yJnYuYQaSdbr",
  "key35": "2hM46HZoebbsXzypEqf6gfwHudCvLdVt3EDtSRHRuHsKhuZ5Q36WJPTLVQEACvduUStEu88qrtrgyFyZ5BUk83PM",
  "key36": "2bZeX77ABsykTvHVZixuo3cL6osLmyaS7E6QiPZD82qtA8dAnLMN8hgQo6WBMnqLQotJUHLvDgjw4i549iA2ZWJE",
  "key37": "3H6R5VGTumKqKaoY9vxqTVwSnqfAxk421Hb1Bam2o4JcshkwMqcyH4KRrKBUSH3gHaddGqXudB7SaunppPaAm8hu",
  "key38": "55syo5mQn5WHviobuzhT6H3YbenQMM9FJC8GEmvMCzfopNK56VuTYCqfgETcbhrbneRqkfFGigc88WDQWZMBm2ct",
  "key39": "3vzYAvZ8x4KNwQpYt1yEMudptcCTaYoDpFVvcDC4vhRSaoYs2VrZu7fQ3inECAVHqyoTEZJgMtkTMQE8gTj3PW48",
  "key40": "2e1vjwqxMynDuybpTZgi3zDewg9XoiSF41xuS2jGe6EhqbXv5niqtMEZkkUCfa3PW5vUe8Y6sNKwEAAcCbGmmTfp",
  "key41": "xVqvpKUQmmcSsjaeMpBuXdkHQfyikrP76JXhHvUUpdanPqT5wbbwgBxixjVeVfw9Xf8FubCVab5rUVrXRPLxXe4",
  "key42": "2C9jW1QyoThiwqvnKd46MjsXE1ehd3w55tp6GPYSiy4dwAvWZyDUf8XMQpvSwUm6G2rKp5mkUhSSBGypDWLuj77Q",
  "key43": "52QpY7KrSgRviGGEPfPkzX9xFeLBh8qwAZB3EsEJnExRLjFVWHHWGWd3RPMJRJ6fKTxBfUNwhebMoHRSCY6U1Wqb",
  "key44": "2tXD6XSa6NNJ2mYoEk8uSwHehmRfzKw1CKRY6TYy36h8xVhd9biQeYaJ77bzXxmJiZJYLPXhHcF3w8dNGKquyuSt",
  "key45": "62diUAegJExRf4PdZVMGQiYrSp4K1N3XWzv3DveshEuGfigjSYDKwTwW3zLbRubAXEd2DtQ5tD3zxa4fgFF3m2Ag"
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
