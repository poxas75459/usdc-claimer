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
    "3TFYLAC8HrysVPw8KCdpmtmA7RKEYpTrqcpwxo5gffPUVWeYxARHfiEGRpkWebBdg6N2BGLn5hTH1x4w4FyoPUor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25VqMG4kAqjt6beb2Wct7b86DdCuJd37otVVfdh5ch6pm23SiDkNkF26bhU8zQ93SB6yrLxD672uVVk7HArTdmQH",
  "key1": "4GPerLTWwssv1cEDnX1uHmN49oqrqBKy35BhzSNozQwHWqzqWapEedBvMahJXWbh55QS9cWQqYk4bCmU6WCAQWM3",
  "key2": "5iuCvr3UauQymWMSQm753KhswrsNdbTU5Jo1RzJ2yhuQaJ3sUtjLVDn4vR1gUMypzuWZBST3ETBLvGZGiCtzRkAW",
  "key3": "2kcLDfomb8bKvKDb9LBAUqaGVL3aQTKvGXhmCAJM8rV2AWz4P91mJaGegqz1BU2DDx4K7U2eYxtH1MfMEXpcCs5w",
  "key4": "Cp6Mt9eZpa7Ac2tcEgre6JiYvk54RyFGLaQkg237Uo8YKUGvDE9YdYJAZEjs5e3DNWpkT1ba59Ng44yRHQ7qrM8",
  "key5": "4mogE8vXsRSYe2kitvJJyy7LD7n7KVn3XoxiAyCz9nVpCfUd8dqQdd9SauwVdoKEJ8wSXseSsuoCwvjz7Hy9Ci5E",
  "key6": "2ztpDMVtwPJHrQnMmAGeB47EkzCecqn1LV3bRwon3duMnn71ks8sspLtXpdPB2LVdtxA9tb7rzZJ9rk91ap7Pevx",
  "key7": "32yxFFYmA71V1EADkGqQA3VaVPeLHCZgz27q3CEZNjJhWSLSAogiwSBZobcBDXjaZpJBtEProaoZaAfQTN5ubxFr",
  "key8": "3jjtSPiVi6LHwoieBss7aBj6i8FPwfpjxmAYrguJ3hy72hwwWL91iZtmcKmzmtrFLPqDSJRA6WDXm7uVpxUuxaYb",
  "key9": "u7AM6FGHsehikWocyJBEe13EFXUfoUpBKdr5aFauthx4TeH8esqLWSKiA5jMku4iANAQXTRkTfzn7rCCHYxhxpQ",
  "key10": "3fcRE682vNWvdkz5CEKQqqPk5JQnCKAE6WMdvwKc5BbzsUG4eAoiQreFBjeWVkJGG9v1iiHU4NPKenGqZwZ2Siz1",
  "key11": "2tZqdqHAH3gH7T6dWPoVyh7TPTUAqbwpxKuJENLmRps5faaCX3c88xsh8V9AqUcPrUxNCWe2G45wWrWXRxHY18uq",
  "key12": "5wjcyTW5Q4s8V9SU5gd3S9EAcFSW7GMA16gfRnpttXbFRKgJmgPw6hXoABpMJ9t4fQ5sqkpJQ6LtrEKn521Nq2TG",
  "key13": "2LZFyE9zWKDfarHUtKVdoBVVmLfTXCP7HbCtRFarvB3KVCqVnuVZJgM26UGy9f9muGsus9gXuoJAzou4S96xXvaQ",
  "key14": "dcKvfdqqhBDRpSLjJkWsQUgEBWNHaNytZ9ZWeYXAWdcb4nF3XZi1n7RNtQ7eSr3s3C3zRhXA9tNo1iLe6AW8q9b",
  "key15": "5At6r2dArKSkA3nK6cmPC9mx8MahYmFq1uy5ZsRTADWqQEUTxE4pfUntRC5fXbRNLnQ2xeK6xMC9dZNtt5CL3n7g",
  "key16": "2nYkymgrKKgSZyjHtxSXLDqk74ommy5nijjzpiPJCjtR8zDLWNpspYkKgoxN3TdqNrBAgSU6XWti9AmREvd61Qae",
  "key17": "4cR5ubiQtdUWA667mygZsGxxL11iB8kbbkmmiretpbnCtdQguoqs9qges7Z2YVSB1knu5w1FuZ4ds9pAn2eyofiw",
  "key18": "4VdFrKVGqN5ZcLbSk5YQXKn5bocEgjtt1uSGMEWf7BP3Up7YWGRMb6CoSYEJwBajkdCbrqxrpmJr4KfiJaEjVf5v",
  "key19": "5QazzJiLxcJy2B3cbieJV3rv5oUN6fnQjLLa5LwWnCTH84B3aFXKm9cfaeq1XG2swP3CddexK5iQRwRtmfAmkPkK",
  "key20": "5AceAwfnoSqDy3V491kpgsdMJJpzzR9XLDBHBAioyKKm2ahwSrD9hhbmetZMjNaE6h6EFSg3UZTd3a6jUDMkpjX8",
  "key21": "23qwTHUGoGaxGtuTSQVWVhHY6aAXSUUChoEJcFcZ17WpdnpMFunNoNhgoyHeNUgVmuqMPXT2JXqgGQ2b6DUr4PR3",
  "key22": "5yWfTUFwHLAsxV1n8wVyMdjtr6qEujpjR7c6kmEgCnhzEaBxfrW9bTus4WfRiU4jkDZbk2E7m26xUxiG2o1dr3ux",
  "key23": "3JDaDHcYtn1QpBUkucQ2BPDEXvsKeiH7VUojsJoqj2Vxh8LrB2owXC9deAz5UPuEx4yrLH4oJAaCgvLGmeAmoj5V",
  "key24": "XmiorSa6nCgH1kQCfaajmvxBbKBx7d5udKHoeFM57dCzEF1r3wWf7gg6oNCE3PNCNHBW79NNqzRcbYfDER6x8cz",
  "key25": "4X1Fcrg6rcXYULfYzjKzowCn3rZDR4o1ztqqioD8E2o8kNRvcGNgH8hjepCxawJFQvRwSAZeaEZj21MZnFPuUAX9",
  "key26": "5a1hK6MEt7F9nk7BPr6bNAbCcRDJtWRs2DqzjqcmGSFN8MRdGKWvrtKayFN3yi6sYXtiZ9DAiiytanxS7nZdxaqe",
  "key27": "hSo6Jd8KewKQ3exVp8EQMemqCbvbzeHwgsvmTyFRhWjj8i6QZztiipGsCKuJ8UtJXrvanbB2oAYWPG7bEbbTKhZ",
  "key28": "2RRkeMdXaaMHZizUyo5jBpwqYYEJ9daYnmswTD9Neg99Y9FEXkKYRvXt5K8NwzQrqpoSgwyeTPAHxVR5Fdnwu1ku",
  "key29": "2bCsqfJ6pTg6V75xMhAqZLQkN8cGBaJVHausysPYr5AKCB72aJNQkwQLn1RRmma8aVveFeipkERcigjX8C6HDbJG",
  "key30": "3GpgFx9umDu5pshgJVPAYcBeMc1QqoPohTuQwod8vjoyPWrgFZQ3T5aK8BuxpwH6gWCp2NBkUvsd4xnKErGn9NTd",
  "key31": "DAsq33BQCyRMjDzc3W5ghuidTfZWnGQbizdezo45yDwSNUAFU4QKPm76A7QvL8o7YBL9usGTHWM6tTESH6bUWVc",
  "key32": "2DjzenM7SMum7qxtUe5jj1Yuh2A5pmAYNypAXMcbuvtDy6Kb94ND474DRoyJAUMtFmFaLyqwE6E77y1gZrmVRYGC",
  "key33": "4cY1Dnfg6n8C3bFj4UmLsi16xgc3oV5fS2VkWmAx4etnJ3Fevs3WTtZQGAiVTUrV6s7JRWcz7k9asMRK2atpRNjc",
  "key34": "5Wr8KrEqqN2ES9JzB1n1pp7HjtcE1M6W2PsQE8zb2hK4EstswFJQstKevf4r2KWrmvG2qG7DjpUycfz9b12aD5pZ",
  "key35": "4RFiX8sKyCEaBRQshs2G5iSPzPNrh4eLTo6AxtVutbJnckqJNTw2vhgzxmNWLGKfbeFxgx2bGR8eMiY1mK9Nv383",
  "key36": "2Nz8zpZarC9kRnEEERn6hVAydEuM9jnZTZqXCm7LaY9QfqMJghcpv81AXr1u2GtrxN8ki4RjTbAt4qNS9fmsWQyi",
  "key37": "4MnGCXqL4djcbxRVMpmUfzJw3rfxFZjcCTn1oFqJe2MaiTi9dx42f3X33aXpVLmwB3ajWDyArE7cD6QK1SBTWDXb",
  "key38": "5sjiskEJwuFxqY3bBXz3pVP4J56mDjo83qsvVo5Pj1jY6tnZQXrdcG1D5c1mcDJzrs6QQRXwixJXUnvTocwWStSg",
  "key39": "3faC18p3CDWF5z1EsYrX5HL1BqRP1NnHAqToDeKGQ5uwaMzWJUtRnyKDw9ZVh1vQHZ2y6JToy3NhYd47yMe2DAKa",
  "key40": "67GhSvsxL5jXyoX5maanU2NfZPSjBw6riDpSBBE4MEF4Ebiza7W5ZZx7b3ntGWNTucehPeQUPR8nTCs8ym9Pby1s",
  "key41": "5jjpFb5c2qWsWTfmGnMyFehfirJBiHDeTircnVhJXkJ842Mvgs1VgdVtLSn9kELfSMMpQruZ8aqQKJzGYtEPMNn7"
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
