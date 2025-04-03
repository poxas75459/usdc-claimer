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
    "2PLxddXKUd9PheW6qrpKujhJ7ytrR2yv6nZiY5L9LxykfpfJLiDN29Vi5CcpuQ2gthoyodTuHSZ8uHUNRpfo4hzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1qs13tyPjeJpWrXvmvu1UH9b4Vh8HigndjzhZuyWPhgD7EEFYnVhRiQphZ8LLU5VE1C2cMAS3CxbhB7U6tGUnp",
  "key1": "24QCUhK9Yrm6EhZxtE31tJww3fcZ3Tt6owXbwVARALzCswrpKj6kzTGu2552UCWyFKFqMSAwLmuQarZzNb8iz1MZ",
  "key2": "5p17MMjp5gpxBWhAPueApJWsvAQxaMQo4eeXMAiag93S28VdoDMR64kg22FrpsGDV37gXYHCpvZLwdtgkKdk5sqC",
  "key3": "2Hhqxw2uT8uc9sbcsBZFSktGzsbrbQpaR9XVG7fxZXK45xzrHJoYUvZ3S4MGAZPFHzzuhNyEVUHDY1yyP5q78H4N",
  "key4": "3BUsxcN6Sv55nRyiCbVaoM1YLZV2NjEtBApX5i2PcNJkdZZ2VySakGm2QW2jLVmWt3YY2EiABpgqfoQrWoQVZF4s",
  "key5": "3LM2oBKHFXCJrKeNUxzpu6bh6Jn77KasGUYLSeHoQPdcHUVbaR8mWg4i4YQ6Upkx1cuYajSe9KJHZDYj3EBfdCaP",
  "key6": "2JbQSt6NzGqSuKtPkVY5R5N4mcXqH9nLT1fPruLQDgmZT2htLDjB6cZcUMy73hSmgbj22DhhM55KRpS5zzpKe3Bd",
  "key7": "3FH1Cd6kDXmq2dfeqXmTMSw58vPKDcezRLVGFGUf4UPa4fpongJ5NrScbQ7jQzXU9GmUnV1xcpFCdj1r1UT7W3Ji",
  "key8": "5VKRG4E7jraHTsT7h8TMGoyUVPLpZdhdNympny5zUZafy8bwTB1PX5dSwUJKdjtiqrqsAersmVDMXNtQPUXrzMSR",
  "key9": "5moaNnwsamsXk8FQJWypDQf7TLQLUyJaasvhdxEVU6rfjurXfSvX8Au56Kkxndz6sZ5fCRKqixu43usrxGWdbQJb",
  "key10": "2FsDAmg2WruQqXREbo3ryjkicuXK3dD2XqjJzNY6Q679bBog8HRWsh1incbVdNBUBGhQvchwgZdPS5HWrf6nYzDQ",
  "key11": "RTg8sDVagr1HqWJsEW57ZEBdtjT3cpHMVL7biqNSn79krjx3tbzSvFHohCYuQP4tqhQWjdkkmLkCJXeMATaPcwF",
  "key12": "GAt9RbpcweaM4pUCusVpk6dggxTRSZL2snmdctX9jkYALjmWHfC34GC6exmphGa2DMYsS3rk4AV9b5mMSfrp6uJ",
  "key13": "2LAXMV5ejs7d2tJL1dDSaCtDw9Uz9sau2BaETdARWvDHK1MEyQ7N55husxdpzWqf1FEDj14PBpJjNoqY1oQQpqHx",
  "key14": "4NTGJ9KZpNdNkiKX7K1tasoYdsmDpRFx6B3Nzyhiv1VnzXtU8NWkoYfmHWWMASyBtPrijZKr5G8tUtWcZ5rELjjX",
  "key15": "66e3D32UZVwPMZuKN8P2XUECBjfEXGiPEp56KkWJArqhPUGGDYpJau55zvsXnc3fUU8gu5hYwZnjipHKmp9s5q3F",
  "key16": "4Vhg9yjCrtCe34txEFHNx5UNT5aWHXAd2qd2yhc8WEVkNAVaNBiNGR1nQxQxnbeqhHUSsYthcRMC3RiZ5FHDATGS",
  "key17": "3Kpbqk7HxH6JF15sJPwpWqeSxpaqLiTjz9DMPuJB7UDvBLUKWyfnvPwtKrHSkfLPSh3FNeqz4KpWfh28QDAG6Ran",
  "key18": "56srSh4B6PQgNuGp4xRepU5c39LnMFDXitnowvAHuWWQYCVURRb3GiSeAjQZ9AH36MxANyEqwUh5TTxN4pzaF1vr",
  "key19": "2NqvX9anCCwVbAzzUzRsLMsFvfjkP7o5qVgurVRq7hr8h1rdgEcQwYez55kruPjhEF3doWDd5wD2erNiAWW9ekyf",
  "key20": "4PxEdo2EesiZsoGABrU1sbe9DXB9Ya8GKbnbRinqQLHoxe4oVKjt8rMxM7ZmGXvjjo2kYE6sVfQn5ZPgLuzrYvR9",
  "key21": "2FmHNC4bs45NTHE5oQCcaogdwzFu4kUhXAVgcvE6rax1oRmWPjvqxM5qNXDrSpYJTKTSkcCazAqDHpedv7kkRPe4",
  "key22": "5tjcNq6x7KB8XhjTDJhsLF7TpRcEfSNiSMz9VCfeFrDs4hZBFMJs5qHDCWgjVJvtxn7bVi7q8iW1BVUv5Aq5RHFG",
  "key23": "Ud6d1Yg1azELKTvn3mRYec5kLD2PyT3CukmERE3WxsbBAoPxdm3vZXRLyLTQ7GN3VyGyLfBU4nNUxFLR4j9Uw91",
  "key24": "4RaaCYGNgRb6365jBhwDGcBCbiB2Hutn6QgCW9PTCeB3w2db6fYv7Sh3eLS1BJWAQ2pkgmUVPCJPEpgHWpbfkSbx",
  "key25": "3Pud9wkV97StBUeoY1w2vNirzK2WLD1M99LM12oYsX6sC89tXBAKcSr8MAmmCr4uQPt9d257qTjkXmWdhsezqfjC",
  "key26": "q4R51aSXdZ1aENZxZp8Fce5fdvLNBVHFpvyKdz4HbE1xWGBe3AuUj69Fv4XWuiejdb36Cwezx2PnsyNBPuaUotS",
  "key27": "hPY4cFHTTBfq8kNgrAEZFAE2ixAjWLPC9uFazF6rzcWpoaS9ZaLnqyEQNkybYsL4W8w7ZPcNwGiPDzXyeoGTQsz",
  "key28": "5FWDJLiBf2r8y854Wz8fjF4HRGnuw4vGGGpWH4e69b2nKft3AdvfBVYnatWxJ5hfPqgsaiHkaPWFeWYxtsfP42wR",
  "key29": "v1dfvbFj7bWGdCTr6yoWcbnrRDxmGuvMpM9GSGdEhVvmBE6N884uB2pTBrSW2LsDfiSSCgmuq1sDoHTzFXyS6cA",
  "key30": "2WZhheCzvc9RCnsusG7VvEsvXwzWHtYPaU5HJrWmm2nEgmdU6dP6FGmWhnhNPuTiBzMCarksAGJvoqek3Gxh5Lzv",
  "key31": "2HpipLmHmm9jsHn5SLcVVQ4YYKgQk7TULZj8nEysGGQZXehAayAj4mXkEpMoa9GmgFqJCXaR6qmBqTcP3ir4vJfj",
  "key32": "47Wec9qj1sjZzy1w9vGVoncst1KtsEEqUnWD24qYxiaC1Rv3HVC1yXSGT14McX8zKWKQZmnhwb3m8caLSXCatT45",
  "key33": "3Yd3g895mkBoqXvV85ZnBiAzY8v12a93exBsnAkF4dd97wr9imW4U3uL1becBatFxnWdgLJ7SvzS2WhrN5gaH6T7",
  "key34": "28GnpM3x67BFF1yhAMBsnCZeZN6TvcpumassuFHf8VHK2VPtuKpSKGzHzKtaamj4YVg3KKMQvYGHg3BTxfuLUD2K",
  "key35": "t85ovtyi7j6gqSP3cMx5SLEGi2dYugyDSfWyKLgdTeBgQcncYyL9CcytpPVz5kHJBWukBmZFbksSbLuKRkvWBV7",
  "key36": "3KLyQSrjK4j7C6CMa1jK1RY9fEU3c9KLwc5GJ1NZoNFGJmAbVMPpJtbDcdtV3wLhCnHsBH3dUMxnyokR3Gz6DJXL",
  "key37": "unpXhtkWxw2f8pXyF3U9ZoPKYn5bPW2p8GBpqGdctQENNPofP47xeLznLQS3eBgbrEa2vSAvd9KZUv2gMGxzLcQ"
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
