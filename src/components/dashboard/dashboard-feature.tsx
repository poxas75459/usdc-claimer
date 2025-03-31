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
    "WemgXMimweNN5SK6yQXHY6hjLRnSTqTmt4dCQgJiqPF71npQ2JgJvb1ubYGX38KjcCm5aCJi7URdQsQgaJZUGni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NmCCPNEtmCnew9zTJBms4K4rZDtV7z9ZVshQgNBr4kbqdVJh7hqmsGjuYtrL6AjVRfYESHFbMqzwGXc2QGjRqJF",
  "key1": "2jnyg6feZdCsMeCe2k3oKbH3X34HD8H6eBL5hj7vzC7Ah5r2sBrnw2iLMh9tU3G6AnnHSFMXVjaNPEQrtg1hrsGS",
  "key2": "FbpEsWdHJcy6XvAAYtbWr7ksqtGtqVMvwcWRizqJAC9ZYWw7h2zAk8WBGVJ3k7UojXm5FULFGX9AzGt6T8YCjRU",
  "key3": "3nfPKB8mgQmNE5bkW8NjsGd5QF2xgTgjJfLMXdpH8uFW8HXDaL9vZmmLW8sMFtFJQ8Aek2vEMd9ubTeC1ngV4vHF",
  "key4": "2cNwKNTGUPW1V4cDWcxqfUMM2Z3rGuhv93yp3yvZydQQ4CJ8T1nPUftdGodWdKDZXvZXaDSjYfF38jiWLMMfvh9B",
  "key5": "3aduWEEGK6oKyrH1Jp5h5hDarNySVQZbkrfAgt6znqHJfQt3dpUdJ3UV3KhajEYRnGn38BRsZovpWFF35XoM7iU4",
  "key6": "K7Ej5Zgq9mEmvvDULcPR9HTMz1d65PQ8xNkPC6s4tuxSSTGsWycnjyJuDTZ3aDre1tHpKTHoDLCDZrEBAwBwGRE",
  "key7": "JGs3wLpkqHWstbfVkLyYsNC5WtdYPuEDDVbxL4QZCan4WhVTvhGNzi4PYqBSPqDtHB16i52KnyWiGVvKSHKbwoi",
  "key8": "3QpD7M8b6q67KLNreUSFbbFETw7Yh5Be3Rfn22bcXouEDZv6LedDzSWht2DurjaAABsMYKKCYqgCEGHw72Q6BBVg",
  "key9": "3U68K9oAukWBtSH4HaADSa4rPdsCKFVVEpEDVPnzLdELXiEJVwmLEXPjkwqsuitFsw8fs96Ur7C6G6NBSbVM9oYf",
  "key10": "4rU2yUweNMXUR8pCpTmpfLZx8Tj5FLZhjcwgELUQWTdhaptEsmTqLCEHWsLdT354RhtpYthibQbvqid2GYv3N4nr",
  "key11": "2so9KkJxCQ9HJ2DkJKp3hemUBauJ98HwJBqTny6o4cSNWKFofUC58pjifxtVjK9QXAbJze3b1SdD5PctrNZJR8TB",
  "key12": "3yMfdWVcXuDFws5JF61BpDapwFE1t6AmemkWLA2fVdsb8fLed4kYg843YUbHqD9wkkgVtEs82XAVAxWwieoJGV5k",
  "key13": "2fdHr3atFGJ7toa6UNEDco4vgZMSF2kYA7VBpZNp2CfiBHng5eNZiTnZkmcTrFkHZtP6YaeCXAVW5UaP8z9ezEvp",
  "key14": "XNRvJpWmZh2gAGVcs3M61bCFW3Pav1XZiXWwWz2tpALnXzgkQQhAugLJSbqZEyCHN6Cxv6DWCF2YTornKy1aUFo",
  "key15": "4YyEwhu1kWBCHxs8ceKfiZ4FEMJ3GQxUazxmj1c8Sboeyanv4Qm733dnYJ1fANbBhBehazo9mjCYZHmaJUYVu3WN",
  "key16": "44PwZzxSySdo9nGVsrU8XdK4AMvtUMbxUJ1gRfpjstyYcdryiNqF48M8JBFHVrxi5DzUEdkaGXoVDzsTKvj6Zr4n",
  "key17": "2SfHcsf6sv33poRqq8bfy5JCH8g2DfaZk91vT77KvEGnhLzhfZh8xrktwD6hgtMQkr8K6pmDVrSr3VtTGpGTkHjh",
  "key18": "2kkeVVcTJW1qnhFk5tvanw1D7Kac9ghE1hQavsBsyqRCkkcFQJBnzjeZXEcpbu6gL7AKYeoUC9T5yWRRQTUuhRHE",
  "key19": "3XP4LBfdK4EXF1d1LfP1FC2wE7GU348zh1BgEjM742xe2uf9o42MVYBHjEhKYCSSDUDhdBJdaf4GGS3eZuQtQbR7",
  "key20": "27frfaJuDCieeStxgDfXNLG7ivqoCr2RMKvFswtsm696P87W2EeocXD3zu67JgYJDekLtRozuKRQaEGfQW6CgRuZ",
  "key21": "4WNDNV1sKzeKjg4ob9Ntyv3AvA9kHv5ebyoDW7hKFtQhHKwbdkkfr5LgJZrZWGrHd9gWo4LPdJjRTGjxmBWsEknf",
  "key22": "pbhZFPLthxVE67bchTMH7WruotJccUdW6jg2mkTGAezuWDShELWmvHk139FrBoiYvdxqq4pXjXoP3g4f1KvFuax",
  "key23": "X24r7LUEC4yFByGmC45iSSgKUSoW3iFWsmsgrhoNNy2SAcsAdFGZM1nhRKUN3FoggmjDXwDaTwwU9fWwJH4CUpN",
  "key24": "2FtKUjv9nWXKo2QhEsi9yaQdDtAYLLMeti5JwBo4MQrE5aAB1XfgNwib4HZCphY9dLbZ7QNHVkKYsBQqhUpxWjYr",
  "key25": "28p4c9jYxpY49HQzaeBGFHLLgAv7tGg4FCfA7sY4srKWupxEbzpVmNV4iPnQ9jqN1HCSysk3F1X6Vmb1ZFufM4NP",
  "key26": "2vMoLoBzzvGanzqM9SSeorcxLVxRmCxaHHP1Cpigc6TjbkfuXGTFAjaLLyaHAyNAkeJ735G7erkVfJeisZQZj59",
  "key27": "4J4osBWvQGRbkig9iuneXPXyf2eisfBwsdDGFYxtqAHY4RnatrWknQ2RzY7dqDtQK2nJ8oNb3xFVAiiJTTeEb8NK",
  "key28": "3TbV7N1F8DmH7FcHqkeX7YTnKmDtXPHxmEFFAraHeuVy1YHHKzPPnQ4MzbpLhZf63YyzgJSc2uEbUsvNYTZjkFsA",
  "key29": "rzC8K7kFTEWbZR7N4BwEp7tT5m1SuB7azgSWwk7BJApZsdmfYqCrYEcVmzD8bptAiYBocYkGnDDUcdWSfc61GjZ",
  "key30": "2Z1xaKiRvedHzWrhZX4MqosRA63tWuu4aXfKSK8wjPfDfgC8Y9tZ4hPPMswghMhF3xTXf9dygiybrQr18CocYpfZ",
  "key31": "4PLAws3QaRF3bx15sqcWJFen9Gu7n5NzcimHxENoUCu2i1JQuQrieWabJb4Kdrva8M5sS3ogwMpsRmPziMa47Vzx",
  "key32": "FFArwTKLrXVDqBqV12qpvCoXxUh95SgNBB1TNyZawf8rGSJ4QQRfvB3e1FEBswhLh5KGEGXRrtz2X5PBBJiw6R5",
  "key33": "4ScUQ54XrvL2mPCRRdqBkZLGHQd71NqvZDjWYUBemik1iMDVGDeiqK7Qr47ZMejeKLAvf78Ms4iQrDQdF6wgQgBc",
  "key34": "s8WUGCq2rfcsu4uADgDbwMxTSLcU97C1N9pvii8GaifcNfg26wdZqGmvm2arB1W9JJkeb8BAtNNLv6tsueGXbNq",
  "key35": "5dmTTK2yGiuRZdZtpTzHc1kM4mmkRR6LvyH47iZ4qy8m6r9u9VEWJMagQvfHNp4z3Kmwrgo7mJYubqZPogUXvJRK",
  "key36": "5NkxUGrHvwhcnbvbGELECXko2WXV2WPtSRWu2xMVnDaQMJobKuyakkfV8JAbq8AbC3YbFgGVcmQ9fxM5tUDY5Vdi",
  "key37": "4RHuCyjGoTGV3j129ymq9uN2v3dY4vq3nzGfaFGGtSfakkUnLZXS1UL24kxKy6kJxVXDtqSTfxdZ81NwhEAdmrMr",
  "key38": "4iTfisrGuCss1TzSLFz9Z4JesHVuTj6X8A7sXzUsF9kR2Axw4b9Tm1SUfjYGBCVgHPmYBNjYzLKuWjZU6XdF5Koc",
  "key39": "5C4U2PSwJi3CndUr4kVK9DGX2Rr6qCX8HMnUwbvg54PCxanPaiG335YnqPDF5D8Uv1buGS8gju4iFHgjbVe27ni7"
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
