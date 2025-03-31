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
    "o3hCKe3cEN8HWG5iPWfU1VPMvDoLeWFXrurJ8uQzz8ABBw6TCCMjPNgmBBC9dQq4w23H1hFEF1HeU2fA5AKFT6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFo3BrECSynYmF3NL6CwFC5CXS8un47Bdi17BtgES2rH7uAZ3wxHHJWeRAsYoyXiLmSn3A8iWdQqaA9n15Zodmi",
  "key1": "4d1bej86QLjmCVt6vs9DPtx9JWVGCqHp2Er8B2uwpkYRjbSwKCGPvcKEEWur45U3CUQdjXCNd9GorWoRuPwLmdfV",
  "key2": "5WkW6ApxDxqhpXqtErXg2foxynmCV5q3q2iaEJFZFmJAtyML1sXWR4EjE6ZA7Esn2yJqSBJw3Xx6V1P5t27GT4T",
  "key3": "4MZPJRGaEhNx4dXzN7bn5vsr6iZRgWg8MsuTnaojCG3qaUARnhAhPdYo4JRsbPfYjtzdypwQrTscUWrYzatpB8K3",
  "key4": "4vEwFLKWGVPYDwvsJcHvZ6SjEngZtuk63sn4rwgByB92CDkzx6jJU3kh43ofPbHV8mVYKXbtcNoFn9J3AmrDcv1U",
  "key5": "5KNrzFSpMvihUkAvCnDfMtTrTSTozbkzVYgGEHDRhXAqDmV5a8pu4gLcGzRxMNyuPQ7kg2cecjHnirEYzwHquhrX",
  "key6": "4EGwgk9BbHPB9NEnh7qtS3ULHPJVvr57CjVoTChEVhdxZttZn1k1bw8oWbbU99R9jBhhMk6eybEhABX5dceWLgry",
  "key7": "3tr6smcgFohRFtfpZMBirDdzN67JkTn8ysdYT6kAJWKGgS3iMPtXB3DFLCrb2RALPAdhGmZiQWAspp3DTMv9hada",
  "key8": "YXXV5XFjdLha1qrYxy54UGsEihrTfJdeYAucjZMrXgodikLv38CcGS8CuuW8Eqdhie8vt5JgWY2F5QoDubb5xVd",
  "key9": "5MpvUZCtZyPnULfjxgvstFsKiCFGYmq9fKv8qkDfxQtZdJL3cJFVJeTC12ziyjzQ7qmrUjskiNSMNL1tXtPxQBjr",
  "key10": "45Guf8sGq2pi3UJYJX1yLNHoVxvTDZXhbdWrcdeQueCmiyAJcfPpZY2KiKrGwhxP2sJPi6SxuGLKQj2dqqy5amN7",
  "key11": "5rnnnG13ezBoMvUus28CeF4tNqS4AUAdAYCKjrqVaQGinUsGrgtQVHT3SwSsu78vhxmzstaDDBWxv83pA3rD9PBQ",
  "key12": "3P1kGB2S2wxYDkv6tP3jfDuLfd2HLTEwBy5NMkQDwhRL59jc8ZJbtVk6q3Y76Uxm1c6q7ugwomtss1Ld9AD98azC",
  "key13": "sbiBA5vy9bB8231Es8wQRzn6KopzuLkk2oeaDKppYiuscuWiF9sE7Wk9kVMFME77doGogW9yujZejQVwU8uJCYf",
  "key14": "4WMntvD9VZ4GEmre77RVobyUkbwyr8WfvS6EC1VEAmuLtjPHSeriDKXX3QTEWN979MNp3ZGxvNDeSkAypy35doP5",
  "key15": "EKhBzihs9kt4nKfVozUbjy43EDE3kmWxhL8wrpEapGspbXvxCi4C6mxUqxJNphWGs9qNPENTxFZiYguAShUj4C4",
  "key16": "i35HnZUFYZzRjTGWmoGvQUDd25csCC2yBSa4LEfXbviH3urkYfig3NffXWsH58Jphtv9kimtSjod6qxVLAjTSFx",
  "key17": "3L6mqsebTwiRFri3tVFR41yJebv45E9mfGHqB95suZooyfiVNmnEfb5scZXikKe3AoKcBERktQPeARmW8fLhkibM",
  "key18": "4GsShQBJzgmitYKjn9jvivmMykyigScdptUTgG4TajqTjE51xi73cimGdZReQ3pjcW9M4RVZrmCpsYyhXYT178Vj",
  "key19": "5Rcz2rbq5NNisjUEeWkykXJoPEokrQgDarUM7ogZkneQ93nZXFDZRLbHVs9Pq75eZmpTCXzsCpKXF15uaowjAA26",
  "key20": "4aLM56QepCMDD4jFhsPLoBWzGpVuohVuMMo8NtUhfjivKY2oBibuALhaPcZtzaVARnER3ph3aTMHYSjQ9qRWvYXt",
  "key21": "2QGCJcU35krsTZ8QQk1rtaEsMrAWf33U9FGGYmu2eoVLrUGRmtXtw3Gd82wsXXyHQtqXVNsZ4v5vZ1fLNMLYFmBu",
  "key22": "3UwLSAXZZgr2vCixsJTcrQyLDTf3XtF1CF7eZSr1hxy4cuTJQ64qJ5DsHLTdKNGvx9taiZzKsHwGLdnhXwTTc8gm",
  "key23": "2BkFYGQEdYZAvKQMoTnT5b8aGZj7V4yfkA6AwiQQkqV9696T6y1ZBwW3SbkNYvRHUzvD8ae4N6x16oVnqYiAAsBy",
  "key24": "65wFzE78jdutfzZbzVCDSGzYCdvv9CtfKwjeLTHSdmpX74HTeCJbmcQvBjoeJmSYZfXuDSjt9aRSzFLF8zuGQ85D",
  "key25": "5HQqc8LnSWKderXJ1kcwRBvyUmcbJRyxUfRREc27BEPVB6jR8XJqsg7U4iJG4nknDuL7Y78uv81APb9qTTkG3L54",
  "key26": "3QBDETzAkvAFFk8boa2uJHAMhub2dTJQpmLJ9mLtYQWRXQ3Zeur6nWkPCrVx2NcALr674ZyhQ23HwLXKq9wyDnrd",
  "key27": "cohWBcLguxUcVJPjHLSnxJmEWoBdjUUmTQuZds6jGrqdxHvMWq66JtYuEqxmsFf4ujxdRxrDDRAZg1CRM8UKoY6",
  "key28": "5MpVAdYvVtVrpvhcSnL3JG8s9NopfLtPSrVSt7rN242T6cHmuRiPRaTk42fmyLAkvCu3xb7PCFmgy2J68kd6fzDB",
  "key29": "5Qfv4fURjC9gxm4EQZu5nnexZR32KqwvjdkQ9HJMY16m1cT2Neh6mx4sRuR2RDgYN2yH4dVwyCUYP155BumWMuEd",
  "key30": "BxqAAUgmf8pKFN3QvhJkRRt3FrhCSc9VWyF1c1DJDhxZbbcudR8kAHTfGcuGhsPQ83zCwEcUiKaVRcGAQqaw79m",
  "key31": "2MDjo9ZPcjktTg3FycyvwkfAA6Sn8FAKu6UzvHp7SaQoftVS6gykRitVZg4WEuyqvq2t7bMpjMekCs294aPCXMHX",
  "key32": "21gc6fdMiZhtz8q5DWWHoGnifhVqawCuTSjFSV6b863Fd5k5pteq2VT2bVWX1MQAf1nmf79Y5BLgJh47sjmJEn38",
  "key33": "3kkCkQXVsJKzsx4j1pVUzEdtNXXvmfN49dTPxtJHyVZ3fH6ttJtGkQaS7xS5iJX1y3ouTEivLbQcf33bmmDnBse1",
  "key34": "3QEdw7fo2kezjAYc4VGtLKgEGqrgdNLQXTbjkzakS8VqWqQpPGkzuMEdVCwQGBUXELuDq3zgFjfBBfsQjjAUEb7U",
  "key35": "32hhCghkTiRAeb5rqHRJSPDZiRmDSvmyFUJwVuqSoHFZjKa9EJ9XRALZaVsi5mA4hrq91wQuZdPLSj5ZH3TiCz3",
  "key36": "Gd76zNAK2tBvawCxBqD95ujdqWCimHXcD2B74aW8a8NCQ9ZvbsFnpGY4kuNmPjTfnAT6ECd68Eb86XUjxn31NqK",
  "key37": "YYBX9ZNT4WbVE6czqYrCKbwpT95GLjCMin82wBGQJn9soFu4cpvoEeUyk7hQag6NHU5wuRqF8PF5t4cdAXzn95w",
  "key38": "2TAM2bqKHyNjTaLa5LphTb753E5vcY9pSs8Cr9FxQsuGUGzhHJPTx1LXx3xZtF1t1nXAP6D7JMxUewnR4BjRMxVt",
  "key39": "5dsq3k52nWiesm1eDyKSFu8Gzum1Aa1H2dr2ZT4Q9Ui7P65AWnjYrQ4g5MmhdfNoJnHHcyB4fY7ABpKbmZ5Ngw4a",
  "key40": "WGmHzQLMrBaCxepn3mVoyRRzHkYqf3iVVDELiEmuH8wBQBvUPrWahrhJPS3nPyLxasJmKbsuRg4wy1Ut4BXfFHF",
  "key41": "359bg3DsjBp3KGtVHshwdvg1Pe3AexSZm7MBSvfKGCVLcgJzzmxLZsssLiqRWZtX3V5onYxbnbYwhN8eC5PiPqKK",
  "key42": "4SLTjsQQxBDDc3FGvptLdKy45XP7mpaP8gvEPYMzFZLRijk3daXUmArztT3GgdXxK4iBwXJP6eXSvcVb5ANizGCb",
  "key43": "3mGWBg3pJqb88Gv3Sef8b4rXoX4P8pvvCYP33kQ1JdxVvMChQrorgeU8C7PJvtibWDxSaYuKBD8aMcnzQNdwrEW3"
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
