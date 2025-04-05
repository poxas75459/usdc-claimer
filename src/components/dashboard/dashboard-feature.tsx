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
    "23WHfPNw44FQKuRLY9wqfqF4yNrWDdiSEaaaBn8sChY1MyGaVBpLEAZJ1qJedYmQWbsDAUcCoXQYYFVZ4J85VpT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wmSdnhA3SzAM1V3rA8Wjx3gA4jPc2qa6LNHKz5ZWLiBBPmMQR3qo1ozxP7byU6D9dQ2U1rKW7Lty7wzFPib8Xmb",
  "key1": "4UW4fz5KTgk8ckwoF4ThxNkPhozuN5sYZQRKbmfRCzym7Bb5Zx4YHR3KqPW6xBTCdQTrESiEARoA88o8WWg3G95A",
  "key2": "5zKwjvVSgb7yceyfehFbfiq2wwYQifRtFvqFuh1D2HmTxBzdSHnn5HhezhLTgtMeFZ1G9yNpQoFCmQHBWEYnx93K",
  "key3": "58HVpU84EV859SVaYShPxt5yGD4Hiwwwj3Ykq3i3JCyxULR6t7mXmSHPo5fB9YyvN2GfEtpFoz57SUuRAwPLAnq3",
  "key4": "5Gnz81AVjxtd65F4z4QR7QAnDeK6McEr7iCFfbTVkap8pVf52k3m3gyiXX7GNSGhQ1FsmkumvWJCF7fd8hv5qr6B",
  "key5": "5fJLB7Q33PtnEcm9ZNHf1trpxFTWSUyXVipSHZvh9oTx7R7SQYPYDMPk4289Gq9dnDAhCPmMxtB35Vag2ZFe9Wka",
  "key6": "5P137jSnkpqtHXFBhpmov1exAG7gmXCK5APP9qxKNxUzTMikJ6QAx4iwXYLY8C54YBwEhDGeNLjb2sftyAzBx1mY",
  "key7": "47ZXwerrbRtr3JBUSKoDUxdzkAPGUDEQ2moCTvfiGa3EQYneL8TWFDRwsR8S1icpvLm2X5gdHWT66HEp3cFwLMrb",
  "key8": "4coVW6ueCDkB9XeSwyfYT1Upcv3py6oEyJ6ReZiiFFthdBjUexQDqJJSS6DuLjkonMmBRtYkYx1PPQLjjEraYUZn",
  "key9": "oBv8JD28b2Vjgg1mzxrvTxDzpKSgFxRYQrGi21vKANtq9gzsvLWU6cZS21CD38zrvBdMsHoBt3VkCHiFtm65f2s",
  "key10": "2S3miLjWz2jdUM7nKNvTAaUbVoWjmpEVzB1iL56smr3jSFpVH7Kb29HUj1iZtVuPTiBonYyx5Dp2kmtWqDVzghcJ",
  "key11": "5MGF57icMbdKjjDBEcQisMBJ14Pr2n5Tssmykz9t7QoYcvcnxxRrkX6Z7fNcEtmoUKJebUJBWZxPJ16RpPwwpkxc",
  "key12": "5kdSsCkPYhszsAW6Yw9sir9c753VCvYsPZkMRPTcK84WN4JyC7AJKJWArLiUfAW33hQt4f6z8vttHAFaTf6qMJo4",
  "key13": "5wDunECChX9kvhLGE75c7EFZdwjPCHHrHayRVkNWkYPXDqa1DEMp9igpkUfW83STuhaBk9ztdapCWQbbEfZq6poE",
  "key14": "5qm3GqhqiB7u2DyosM9ccHKNnQT7gRvPqA7D5mMwUkZGsxSvTnzjQZhspHdoUr52c9gscUrkUueeQavcUkKmkGvY",
  "key15": "4BwAG8HHpHYEBefWWMZq5TQcNYqz2xecKbNW1UTbv4TD3NuSTQK9G1wyvWq3tkjR9xsYQ6JMBzCMM5teW9nD3gCM",
  "key16": "2DZGUeg7yzcgQBtfYuvLK3uAquRk3Yd4Jh3Bem9f4dH31JTCX2ravHCqKj8VJduy14dWXnp2rfCne5vZud5FJDvu",
  "key17": "4omMGMk8hGsPWcCWWJUkXDcEcMTF9PPrvdH2kGPxkGMwSbRJQSAYxCWQJSZJXdKBrfpFfXKGjFpfYWbWofHxPT2q",
  "key18": "484CHGbZ8Prfr2eaRWqSrDy8zs59fJTSdQwvxWzKbVoucgUN71SBztq3d7ZJJBRhyoNZ5BkpF61HtW9PZZ24A6Zi",
  "key19": "5GkxP9eAZFiuySPmty71RHFee4JaeiY9Rx6Exo7UsooCE6MxBdfPkd4Fvn41vBeR3D7SsLAmtEn4Q2J1hH2m9c1A",
  "key20": "5Nndk9o9sfByiCukuFvRnxXdyHLgBNRneL6RCFkxhpNWuepAwXjujEcvCDkZfF1MYahnreyNej8VunkAwRZx3auZ",
  "key21": "5ZfSzoXu5Vwe2LA4cog5cmsDHhmguSoPR7fXVgjjRnP2gx6Zd7viDL3aSYQDBtgXQxrCLbbXLxQ1bB8QL7uozcKn",
  "key22": "48Y9ndJbuULTiWYiGaySX6yMRdiixm6RT5iEXTdBPcVgwQ7J1J46a8jgnp8sL5YgcHtwtNTm1zyWcNgu1Vw6iskT",
  "key23": "2YLeGoB3uHCcuuwfsJve7m51cbzGW6KhHi6cxaeHVn4t9Hz8vUaHgq86zd3wQXCQGjjujTY7mMFeNUyQhptcUmZh",
  "key24": "41vEZWJNXDCgG1H4eEfSVPh6XzoWeSrRcgDzttoERxY47xijh8MSJetVsLSC5HkuCR9KmRbVv5wKhUJRWxBVcAfe",
  "key25": "4YXkRd1iWVmuFfRQGvHzb2KsDKgVtukzkwHXDYtqEPMSBkQh9ejtFJ5uYZopapU2NLnseqAha24XxSKP3YiPk2B6",
  "key26": "2ExFsCt8kuXAkAytUcgxT5R3S2iAfzG9ksz42a1eLMYpr2M2G38EgceiTmHALnenP3Aiauo7t1NHH8aFuByLYKTy",
  "key27": "3chUe2u8Fg4jeEabQw2kbq4PgmKQskNQ9yCXaKe4WtdZfGGQW6VAWNAX427NPMTokoi1akYQFSvnSnSpw7wyu7id",
  "key28": "4fK7FTobSEsk1fHHXd6LLDxn1jFpkWp9RdL6L7ztByRGkUy6QfNxEUwNGHfkVHX9L1b9ZRGsoUz9YxuSgCo1XKs5",
  "key29": "2st6hUUqRVSAKozHhEVnre123vbRsyb2o41FUFpAxtFdtgckcbMXcHavf5b96Mpv5v4fkhwoDoysJHANGL51G5rV",
  "key30": "3pNXopmCdcuDhFfMh8brE3FLsAJrMR8MxhX7LhiAvQfxWwLLLmoiGVF1ByzNxYupdNJKSstQ2xDNQw4Wx1vHJVB6",
  "key31": "3JnvrGTEtYm2dQtqvXXD7aUsLoVfepqfphMDJLkPfzdnXZgmT4ZHGm8hUWrpi7qk7C31YMgbqNv6U5H5ADYfgzCY",
  "key32": "5fibMxPUU3w8AKJ1UG2YxV3qvro9McD6ZKQyBcQnzTfu5LE4rWth6fPtoK9s5fhW67hns4Y7hyY7nxjeLrmuzXmi",
  "key33": "EoTne6uYWEfHjDQZhukTJciotx6uC5dC5BJYRq8c8jv99vcR77eHMrT1mZuXMDJWHURFTtLFwXZRwX9rGg7xECL",
  "key34": "2i9oas2366fQZ24KAM2WTNMERXnp242N99azYmPyENDuvu14Cwx7wqbNgYgF11sRBdFGWqXfhEW7FL7ik4v9ZgjL"
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
