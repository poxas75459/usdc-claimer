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
    "3sY14BjL8LvqqsqZfQoTLgm3PbEeKXSDpcewfVQwC6SWgz9cfj8VGC73SDtiMabztjWKwA91P1ppMmWZ7zjXKgiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NZFtTtiSLoh4pDgRY4jesBymxu36qSyY1pxBUnZd8t9pPKifGWJXGRHkJTi4vSquGMeaBH9zPXGaUewind7yE5d",
  "key1": "23y12hVngaYSV5AkTxPhMSyQ8PPaJVnNTz2xw2XDJpg4LxmjNNt1UYALRVdjCTpjTFCAac7xTT7XJYpLLcRksscW",
  "key2": "4McnKEFqyrVdPHsVF5vbkg6beBGT6eHWVnYpztCXcYN3VaW6xADXWheknZkCScBFufJUUEe37nyKkcy8TaHJdJgr",
  "key3": "2bJoG26P2YGW1bup1Ty2h2PjExf2UEXYG9UicBg5w8a2irxmEWb816hTQDQNAVA3cBg9nqqC9vkE6XgKCY9sQQem",
  "key4": "aLXV7UuVjFzgptwTyaU2o281mmHuv7YLsaZ6djMAegbGFTWgctAYEUNR1SQYjhYEJHsxaCPRrjnAJBfunNkC4to",
  "key5": "5HdFVPVwzcawK8AeFYtJ82aadwcdNdEcnW4RBfzqRAU9Pmqhw3bgguJ4HWEuhdP4fRZTw3Ne6JiiBHuFHayqHgJj",
  "key6": "33vXo1tszsdRJRtGpYvm5FxfeWJwpJqG3sCdRHMACPEMDYU2FrLQMGxSFg3QiCXPgwnuRB4Mfuus13LCVn68WPrX",
  "key7": "5mxYzsHR2BsZoideEYjzEhmshsDyg4y1kwSTCTEUM8VaxwjdJe375MoV1LfrCfF1PCXxTX1kbMqLTKXJzCb1qWT8",
  "key8": "3rQ2czzQHxLDyeWN4VbcT9VYrqkyvHebtXhhFFrQBJprk8KdUwtbFNC4Jvq112GGxaHgVBiGZQoE9Yw1jQggTfRP",
  "key9": "4haYXJoMUzJxgev23Mdbtjvzpv3eAjPHFNrbgWoLGthMHAfiFEiy1i5sq2LbQKCfGz9UGWLjstZbih5uotXDGE5x",
  "key10": "4y3PaaCGXu6GvrQ5kimj6LBSVurP1sNrECghncfKBznqWsd2ovcsSqZ86fHDajGvTZ2PVWiVMHdfMQU2NzVcsLNa",
  "key11": "389vkNRmk1EKkHu8qg5KxLJhC5kk7bGzwsir6vRAaYnzgGB118tUxoEwZF9tV2HbZhE8amuSYVMoQ5sawGXi71hX",
  "key12": "4EgM9tZ6XUMa9sB7oA56hnKq6wd5p2jk1EgpKu2uqS4Xypj8aCM5nBsaWFZTbe3bijUr76iD7jbaD2an9MDBzN4V",
  "key13": "2oYVKWsoBnziGxZm5avPx2LRq32oGYXsQu3vF8J2sPbvmE2Y7mbEheu8tJ3Myvtzf8df5PqMvqpthyjuw4iUME1i",
  "key14": "aXWgBZie4RPYUce5aK4kGwR3SrqhndkWSiX52hT2sqAPnLYt9z1VCQfq6jMh7zMZAjE4JMX5cySQYbpCmW3jjzS",
  "key15": "3XgDUgajoid6WueNwDUtLjLyTqvhcLiVBBqB6VvUKSmN1psQNxksryFccut3GesRSmqGsoRTALZkERKL1CVE3QVK",
  "key16": "4cjucSA5n8uSAZ76tgGnG3GcKvJAi2uSxLMtjWH1Z7gifKiausgvMTwpb5aV8WCJECQnBZtVzeEWUUCu8eE7RxDs",
  "key17": "2cddj44e6AMyvb7EHAdskqc1GBYzoNnQGjmR2KWymXAr2wJs7UrJqu75JAjk6iAfZHwha8To3Ldvsh4DXZc12GRT",
  "key18": "58uMPD3zRzKpRN448jaCwcmzgRqUKtaSDiH6MzSZQrWs6AKXXRDenpdBgAvF6AfJaJH6RUHtd1Hv6trYSWvwktzH",
  "key19": "5c2Vnpo8Q1qQWjVaCN4noCixo9zYmLvrK2ygUJ3NN3Jv9satLvwGdFCBh8vhkd3QXZpQxu4SHuApaJHHUWCRc3gJ",
  "key20": "3kU6kHCdupVBrmMW3EkksR8tryug2DMXVjVdkJnicYrwMSMUpM68dcRceozwA9WFtLL9oFMXmPweNaXC3W2dTkMx",
  "key21": "2ChbgJSeY2KDuJTJUxKVDNPrtbE9zrwVoKXSM7QtTmGpp8pKVL84rzdGeuFxtWzjUzsqVXhkBhj7rLua1eJ556Nm",
  "key22": "2kmJeiChtsoqrSDq7rGsph9pgnbHd6vckeEiBHhuWa1krTgBQMH2jQjo9rdSSZJqQEqX6J3aa7wUUzuUJ1HRxtao",
  "key23": "2ftTSRF4RdjcCA5krLsAneYSMLqQLWyHpaaVeUBnhrH6xgfKPyEhfy53pvnyRKxnKN3nkTc1zaYwRpkSg8jbanSE",
  "key24": "8UNvqUDHpnLL5AbHzWXAyfgyaHf2PwPeVWK3PudBK16TBx3bxcDTDmYgbGrFabTCZ5sBArxpXyBkbUjsiMWnYkA",
  "key25": "4FUfvdkzPVbnN4kjqKRugSMpfXgx8pWp5baNuZebyRba3awXxXRaGiAxScTc7RNrFTq641BmSG2v1PDXNPtcf4ZX",
  "key26": "4U7QpSzxXnZSd197AxgLHXAjj9RyqhakC9uoAsmDwLKt6Lc3NBLpv9Hk614tHbgjyGoEFVp6kg5HpaxLQYFYp1JU",
  "key27": "3WZSsQJ7smppSiLd4tHxxRBWFvoSJv294M5WPLcyB11eZgqcFtACbzwiw81TvQtcSowMBYp31nHSzxp7eEJfh6uG",
  "key28": "4FvvoqiJbnYRXdsYgmjHvbn6s3xskdPAmSrXh1QVBDQykGUvJcCgneCrDVwF9FaCu3EegjXnXnfbqZgXc23mHLxL",
  "key29": "2JkZWu8wMDk2axqnYVW96MdSm8E8VtwP4xvrPJrm3wcE8QEWotposqs6DGR4WgZRYYJA5366S8PUyDR29GXp34PK",
  "key30": "DQ6J39TaLMSvfLf2wRm7wiANYE6VrXzcrJZjxoRAnWfWFH859YHTpsr7Sb6VguoMK2Xvy8DBaF279qvvkdKpfPa"
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
