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
    "y5PGMCXfynTgY8nH2tZZYg4wXJvvfEwuUeaxKSRmP5cHQngTLJHvTXX8VEQZMYmWDrE54AZWD3hMJjohvPXN9wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sdz4WbrAYUotQzoVTCw2w3durbbJRnkJN1nYCwyu75Lh8nqVM9AeQ7YWF7fXPTZS4LYDVKnkGnR9kWZ6Y1fuyax",
  "key1": "4Wi73keaYK1AaSP7dAct9Qu8tNGL7nimwKmtoMgh7VzRZeDMBdXRTsACKwPGyFseP6PVVVcB3JdSSMtKr9nkJi65",
  "key2": "5vbCRoDv96batt9CmqFM1PyRNeN19LfoACugbjsrnwT9dpT1S2cahG8Bnx2MUFqsTgy9C97AdKuzUEsJjfVodReN",
  "key3": "5meuzHJEJSowjrTXd4AyqgkXLdquAx4NGCS6sg8Ujiq4BtcNi5fBhZ4zgu3tReVG2YKWdPWFYkKJdq2zdv5nEqgB",
  "key4": "46HBSUUj11XsD9tUM6zuaxASAo9b2QPQdcFzmKrV1mQUDGLGknZr917XZtmfZv1fzDqdjCG1CcMwABiyFvjXqbLN",
  "key5": "5TkCi9BByjWH9skBNosL7KabtRgaAoFEEosdmDReZY76bRzLBoG7CemZAk1STrDSuqtNFHaPtPqxssQBpL8pVtDp",
  "key6": "2fmsyhYTUX6BDnp2HvnYh6YzFHo2WmogD6463fgRsvbHaLtsXveNSUWSPJF9wqztbcAccaQ7CLWBE2bfyMUpWUre",
  "key7": "3Y8qjL6kZjVk8FYNFSZyTvGoE4oW92cmw2XvvnasyfS27SBKjvT9QRMQBdbax2mkctHZr9HQbCHuKomSaUWoQFCM",
  "key8": "3EQQEwYExvJEeJRuuHj5JLJqfQLBWHB3ZZHzX1QVTuFwp9PeDTxdSxYy6XZ2Hm8F5gfwxAwN4u8bugU1MGehsEnM",
  "key9": "535T6wx5s4P9MmYmpLUo33zd2BSjsNPe5ApNBJXgQLyUrGFSzx2CP5dSgDdJ4ozETrZCCMobU53kRaxDd7uoYe7v",
  "key10": "hzfzMunNakXwcWycGHDTbXTnqwdQbL3Putonn4qggznc9mcrT7xxoZ2DfrDGjr3oq27tSKsEJ3i5YRrSjU89ufc",
  "key11": "2hENz8HQ186xy3fhUtC4yTgXgGRpVeKavNNvLKtVzL4TpQCB52icZXaJYPN8qx3mvqhUqLAnvphPmkEz8jwvMb1n",
  "key12": "2Nyy6fbkdk1RrExFBNCfh5diTEX7eR7LvEpr8u3Mm4durPfM1wv2SgN5Bmkj64fwEeofvpFNMgRYPTyUyceQvc2C",
  "key13": "yLL68xsory5soaPDgeK4s4y5EZzEQwpG882S7XQhdhg4L4vWEtZsAKeTMRi5Tg2ULL1Xsw1CH33JUKRHGuaFiD6",
  "key14": "4WTUUAuDeVjSxdiJ82KZgysgmq5RTdN4e3k8KL3zqMVVRJLzr83c6VL8oApLgwZN7J8s3v9FFhrhr7nF3F7rw4WU",
  "key15": "5c28RdZEFPLUVsBhoZmBNwhBwqzEH1aag673vWp9mfoX3kCqgVdQUA1pu1qfRPJSzkgFd3LXgSrj4DPHpKpWTg2a",
  "key16": "3n9dyDUR2z7ZSyq1M3eRyBBtHaDZpKxh8q1uHphfiWEsvsJhBZnrqnkGRvGHz9r1XYWRLwL1EEcYJQTZtnWFKC9U",
  "key17": "3DjgogRBQSwsq5rhbMFKMUwXVjW7AtbyFAU1WgqFy561MKxkfryc5No1vrqcSuH8nj4r7VdxMT5RmbkBNnPXA61W",
  "key18": "53Aj1A4Ek5wdWXQTYTKVjeUpgBgkw9wHJtqKwiFEXmDLHHMgy52AezRBXmcZBA7aLhF4YTSBmPQEUaZWpdfARN3a",
  "key19": "4drX5PusoJ6nzovwdaeDuHFWbE73dz5dtfxpq4BnJsSkTqvmaqAnBmA4KULptpr6CX3Xd7KdzpU9HvgVDvpfL35w",
  "key20": "5qiuNkQXBHnFJwSv6azormQv4cpXghxCaKAxhAbx8PioY34ptqgfV8ctKxsBWhBRfT5cxoJrK1jboGqHKfstA9fr",
  "key21": "5mEg7SafTx5D5nrwiQbKoRdNzSgfGmH3nzDNCizUGnE62sGQ58bm5TQmkCGEBSahgLtTs9KT1c74HAhJbcdRhWk5",
  "key22": "2a3hxWtvdTBZGEwgNpCYhPC48yfi9o3eUQmXvZss71G6RMTSn2KRyGMt8TR8aXxkYdQbWH9MBskwozG3V9EEvtYz",
  "key23": "4wJ4WuHZM8WNrkdzWXP42agodmQryMTS6uT13QWzYY3JLQSiEPkHn7Fhi2yNEWzANAwN4GbNbGjHAXsWvDtSgqDr",
  "key24": "5g3svLekENiSPBEQjBHG6hjqAC6tbvZjg5ZXZQYhR1NNYr9t3zSgGKwtPkRLzddoFEJq7gon1NYBLGCfmXR1S711",
  "key25": "Gt8wCgX4moqiBSir2PczLV625Kad6njegrEbeeyLUgPpRXeeRM7pyrJvNazRiCPMyjCnJVuSwkB84vCjmMBCHjf",
  "key26": "3kNjpQwyLbVCCSmoS4R3kGThuSKV7c1sHtKzXTbATh4teEazM9J8jNovpYirR6jx4dNVUW7iK51vGmKHY9A1FMb1",
  "key27": "5MAVyagtw86wQ3eLuUYFuzs8bGL6UjLWTsvFu2odu3UVXcwA85PpKiWxAkyTtxbonBESXQJjtpsZZm9wgXTaBqm7",
  "key28": "3WemUN9JKNgWx9eD7DwpNmv1nEtiXs4nDf2HSMvN3SYh99RkGDXmLZ18HvLmYYASbZWXUwtnRN5wbNJNpALgR2wK",
  "key29": "3W5adxE6dyp8J4oiyMtSRFoc3wc5qTb3dJpbx4FYW7cwtUZpYXwwC5bF6bbZEoAuKJReXTq3nUmjbAn5zp43aAxu",
  "key30": "3iNRN5DpvBYQ1oTP5aGX6V7a17Gysa7J4CDgSfCAfmwR9KnMY9fdTFPCcpc717vQKKvH3objh2e5U7VaPwMEF8J",
  "key31": "7eoxaQREBLDYeN1EcnMWrFX87NPHfVq137LBTnp4evh6p5YwEGPnawQHg9xzcp8nKbq5JLHprZJnERqQAGpvjX2",
  "key32": "3NEW9m3zptSDcm7G4V962XCYgcuEUygCcmakAjQawTap8ssEc7xF17PEj8EGSvwRAH4uSGQtbjUNv6ABL5FnSLug",
  "key33": "a666DmVLX8DgXmpBfMAsN55fsvPVSiPNEW5Q7T4ETTPDtpTxzTepQhd3wpApTcEeUYPJrkvHJd1fKXvBWjsETwr",
  "key34": "4WR6iPC7YtwEiDtoKKuDjeUV78JYRfUR1toKAHnX6F4Cu1zPoUQsWhuM2Et7GFuK38TjkLmD2qS3AbAL75zJh13c",
  "key35": "tub1ZiCaCGLkaGhykfDyuFH1YiK1ngtQcwAgKRJQKksgeHxWxXDPQK6ijusitzAagTkDxdUXnNKYB7pB2zMYvac",
  "key36": "3nYpWbcsRhxhgytqzQxQEzNhUXxejtGqivBUcCTxS8cPZzCCkvcWEt8hYCTCNoy7sZt5D1uVL2ioKNdndjxyyBfC"
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
