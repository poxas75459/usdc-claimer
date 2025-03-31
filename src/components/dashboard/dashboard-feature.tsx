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
    "2iZv2dtcpFzHzGERCCKkDKuSjX2dFxUmE7uJoH9p4NdDhNayWfH6zNEkXQer3AW3cwjb21j6EkuMSsWUe2WpsUA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KMZU4MCLm9iBoc7yHjBLD4aQww2A6FXnt15W6AVwUhk3rWhznRmED4dw3hM2nX7uxjJFufgjWenjf5qG1JveHsm",
  "key1": "QGfwmyMT3N2mj6bx4oiYWCFjpMtCk3KQf3iQHztgBkE8o51iJbuuYv18GdeR5fbnMYbQRw39Zyixc59SGmix3P1",
  "key2": "5xDk7W5tNcUgBNJv8DdjDNM4aBorLVYqVHhzybwWTwBvyyYsfH9TNSBrdThkB7mFGaj29ozZeiZLkhDwuJ9KdYKV",
  "key3": "y2d1nsEurzxk1bt8Zt6Ev5JfueEKWaVPUzXNAS3Vqpf2eQNmDsbFDyt1bJZ42ZpRpSujDx4P7tdpChAM1io3t4C",
  "key4": "3pMxrEBy2qHeZKzYaEJryCoYddwmLwpo5qsFNZNT6VdtjR3cYywxVN5sHwHQ6gaAqqKse1a3QWEJpcVPGrbE3tJS",
  "key5": "2huSBpT5oNYme34aHFjg3BtUQUWrtkLRvhEK6VH6cM1gWsJEQPrHMNKWz5Qs4gNST4Gigx6Trej7bZdDQYbazd9h",
  "key6": "sM2VmuuDtCwMjUA6CrnJPJuFK2HCeHwL52Vz5Wc2nqcMCTj82EHa2dLACF9yN34Z3GAicttviqBcfuu6oHrUuBq",
  "key7": "5e3rgmU5UKYUtnndVAci2rspArSQfd7ND5Bbe6j6Yugvt3ad5LdRW3MgFGALZBiEgnHkn8f2TZYMcUZpAfEz1vLG",
  "key8": "2GAXM6tvLVytpfjsuRMjCfhRU4FY16PdfiRDws3dMoVEvEZmwBZEHh1MDChbNJvN2EU85WEjCfvKzXPLzD3iUzrG",
  "key9": "5kjXZoorPQfVMc6j3GWunWUxoDXAJxZh2CGRYL91mKttzBjcdGw7SGRKsT3kVfBbxXRtVTVvfyMtrR2zpCUuvJxq",
  "key10": "533r7zC7BhV4z1QFcAfN78iKCtCd6RhYU6NvrFhhwYiiy7DuXvKbF6GEghNy9PuoQNoCMLuwPwfvYNobKDozpmJ",
  "key11": "3it7msjSQJqFHRXAiLcE4zBvvaHsRWXC5rTsJdmKXyxwAKVRft7g47SWHx3DbGkRpa2ronYPikiFi9eVAwj8vrdT",
  "key12": "3ACfxQRcRzLUNoHsffb6gT6rJtwtLNagZV1r1bdSe93w78PoGXUir1eqPvwFVbrfBni2ixxbN4JTe29E8tEhQKmN",
  "key13": "38GKQoMm1Agjyp663yVMd61jaz7aHwWMAbMTcnwMbRS9cB9HyxwtCLE31hFedQgu7B5igFpzcYy1df7UnpNwTrr1",
  "key14": "4jZuQ13PeLvY9yGdwsgtrjzosbTR3GUq77KFi34S3pesSLasiW5zKTRJGoNkmnU86fCE9c1mmFxvMBTTpRLc1rhV",
  "key15": "3W3qXnJAD2q1oYeFLkra4FuPsh89pd79YmDpRuKQVbPzSmiCvAq3wmB8up22fvxFEFjzKS4q88ihpfAu3v24B6g",
  "key16": "4RHZoBkcgCUX78toq2BxCJyZHv3EtEoU5g7YfxuxVvbwHWCdHnHRnFh9UdESt5Mv7i8tnbMTDs4Qxe8h1pyAwgM",
  "key17": "GjirkeZuUtDJJrTNcjyq3GWKqhRkGooE5Em5bQQt5QHTQstTk8WDPbptdfgY7e1RAbyXSyrcZVsLnCGKTL3QKEC",
  "key18": "8waSr6rZTB3wTUmiSuiDEWQzEnadoKgaqbJFbqnUZx1yBV7vftM8D1pNhM7V8PLESZ8UDFC8mVNrNx5eFSJnvDk",
  "key19": "35gWWoUUJpBmxQY4FPRhHEeWyRQaUp5wBJWo2LqN5bXfFrgdxUyPByajti6YiHK39svViHejAuy57UBHLbqTDdLX",
  "key20": "3L6TD9RZnx69W8iHBBuSEZsb8bFuRMBuyLSM3mQnJaoZcEfuBmZAofMfFQAzvApuSLH2XUKXfWR2Mm3dm6cmEFCg",
  "key21": "vCTU9pmWNgNJT8VigfRcShVzJYVB7tVxdKxxKpsNEjCFYpzZ5M7X1DBhbCCWitzKDemVUr3z6mtCd1M3gF1bC6a",
  "key22": "5fqsD2cW4Zuos6Z9canqMenN5AwqBZwZVcZzgAZk5AU15DcP9T4ZLubrnatM6m3chnjB7M5QKP5diuGbkFrxTX19",
  "key23": "2mp2qX9jZjMdprJu5rSQyA9maT4WmepiruEZnCXnc86bsd82fUtXdp5WaVsQaNfdBXUTfojQFV4Kb8Zjk2JPzpyN",
  "key24": "2jB35P5XYswKuazniPdWewZReKEK2R4hWS7GHyfGKo8YEzNYKhHafgVWNiVcJVNdjvqpVDMGhn6UcxYr26XfJaTU",
  "key25": "363UikLgKaryc5eSKfCb2Z548ohJGnQBAyBgA8bceDim69JLJ9WUv7y863u91AMbqqS7MKH5EvkDDPDNKMJB2Pqz",
  "key26": "27B6xiqdAVAo5iMTte874cnd4aCBCX1SyxEkHr38wo15m44dbtyPUvnfKti5pSYTJJTLCUHRfLS51vgpNu55qntS",
  "key27": "2PsxwiTHrhx8o9AWuVdQjF1YNPS4s4RiqdfFhR3ZEA5pbJmQNWqGx8W9uKhHMfd3kcridprGWiFypG8KBBb8RN2K",
  "key28": "t7VkQvAcgs2NX38jouLKQRBs8U57kgnA1v9qpWJKiPFeYnNkZqpNNupCwH3PbQofJzJG9o9Ng3VQVixFCHSADj2",
  "key29": "5skX8sDRBYhcKv8HbdnnHk6RP7cp1gi3C87WAFtp8VX7zBia1tYz9g6fP6SQ5j5V1YmnKKqLvNtkraJkJomenkL6",
  "key30": "3VWsK4Uh9BtYNPkPmzKCNCK5x2pmorEqJrqxyu3oCTnu5HRSDiae1spJQxGfCAmNeRKsrsQhQqekPAa499n3UNaR",
  "key31": "shaLJCvHkbmg9oTC1Ph5CibfLVoKfLFuvXdTdtjd2KN1iNk1GK3ToyX3aH3vXZ1QNMwVbTkgoG16XwdoxCjVTHT"
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
