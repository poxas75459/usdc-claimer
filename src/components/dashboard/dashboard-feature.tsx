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
    "3QagCABrErQGfPx7d2Mca7pq32uM3et7c5EXufVKfXki4ohGqDy9sQBJPu5Y3BxA79uJ8GWd8yaGXKP5XKV1MaWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lq7BuejYJncGq59t8erhYwLopFyXY2tZ977wNkynoEent7zhSpJ6cUH4xvF2C1E9KcrxrrHCZ7Hu43cjkrQr4ZR",
  "key1": "J2j8x8RNVccEJHtvYWUtPptm6KyVDofHsxTCung1CC9KL1BgRjE9UstoCNkbcgK8NYzE7gc7WYpoiF3GM7qxVLo",
  "key2": "32NTkjDLNaxN4Msq9ubdr5uycbuRtNQtNhaGdVBYLGzASoMsUkNjz2LMSLYUtGR76ET1Ksg2YhvDM2pU4s1m3qVM",
  "key3": "4NEYLe9MYmgXch2hQ1BmQhgnTsVxtfsY64r6zn7f7LULP7x3f74jQSMTvx8fTSiuGcvPZQ8ViNyM78JVvFtmMAfv",
  "key4": "3aFcp5FNTBaizKbhmdDrpRg3NCpXeUESbGfD6MZjucdNnhPgRcfcHMvWiaAqQpqATbt5FFUFE9aGD9yW2mLedtfc",
  "key5": "4CPe1KeSoEXLBbvXiZeNLK4KxbR5Tdxk9U4zAhRksnMT5Rsk7RrEs6BevQq2EUqNDmccJPjkssZCUwnoGawaGXx4",
  "key6": "37itcSBEGqqH44pdjEjqG5VV3UtMxDmBPbBThEoXTr2EdqXxFbP1qmyUDZJfXMUYo8wyRwaMQwsbqzFbSHKZr9sQ",
  "key7": "64B6ssHkk8umpFGroESEvL5mZ5LdzzfcAXVhevnu6gv526pyaYC4Jd4uw2DAkixoVKmoon3SBTzM7L641GjDcoHL",
  "key8": "FeE8NqW36dNVLNiP6YW8SXbutYhYeoiSGZeK7Su5SjEcZQVMkMN1MrtSRx4aAdPq9X3fETBLRAsQRgRAbQEUFCD",
  "key9": "2ojoNyJDgyELeeATTgPxwUQA2BM5kaeo7BckRvyP3NAed7U9rd8mtk7G59kwvCbAzPKFavdsGLx4ywdtvQAzzToa",
  "key10": "61tjcayCXyvqcVqBRzGJJBE6fG9kzZVKsjfCH1t7UAjCx7piqroRNYqqm2qrxYVUiBMZcazaR841MnseupqSw9dP",
  "key11": "3egxMaxnQ57gcGnFkHjXwT1HyyezmgEbFW1fiQKoWbCGgekTn6pH1AbgsJkccwwcsBfEoLJdAjhzhiZF26cntenJ",
  "key12": "5EDg5WZyQfW9GqW8cBCdVcWNMP6eAuhd2urVnsven14ixbY1n6E6kXVYntZ3uBqaKLpAEunkakeADHPYg8KJyz5D",
  "key13": "2nDSY6BhiYzdLz67TFftAavoePXt4iE9NUnfmpEfGxqh2A9cdz62QXXJR79QaFqdgNXB4e2gsiXR8F7D3eYrUVZQ",
  "key14": "3RsmGCgPoUqjpREcrbvCdkaBNe1oAb39LKWeexKRDumXVkKwbZfL1xS4YaQqeTNDeUSg1zK59gpC9EeufE29oay4",
  "key15": "3zWUxQtTjoXbfSgjqwB81jxCf2xRKxh3CfyuJ91Ca3eM84XDGuPZAMwVLQ1PGZ9LDNm4eHYXJC5diqtHNU3Yi16s",
  "key16": "24k4dFZrhXMYB6BXp6A5UxVU4tKjCh27FjboB39T2HnKuHP5gUFa1DqTLaff6JXNPCYHwonbPvAZGnbd6dVEzbXk",
  "key17": "JFeoChp7srzHje6VvwJSHUYjbkGnjQEQ5VAxkJkw5JXD97eQVHS9VwsDaRr1QHrHfiwTgh5yGEy4fS6M2Cx4GjB",
  "key18": "4m9oaeVZmhEM6dYsMBAN1JL7xg56vDFohEgjNdDp8jWXuE4xM3j88TkTiWTKa6jLTyZouYYvcjWEA9eBqQ6GzrU7",
  "key19": "WD1dxR76bnXnz4XaEVSRPE9B9AXzqbnujxUPwvBWfzc2Kw3iKtK97kCLBuiu6CjgixNhsxMUQPZ95EXHVXxA2T4",
  "key20": "5KhYYagLNj1VXiMqozRr2bSby4Kd6LxFtF9GpUxCQPSxwrsECvqjdjuSuTs6LwnYgiMJo33AsKyALftTNAXvHX1M",
  "key21": "2aU9kKQGHZe7JhEujqeYe3ZncFcU2Y8tKiPWuT8sVQZRTfyhhmUkRMaDSMozCVAB8wUkiyjEg1j31riXfTYUbPHz",
  "key22": "55VtBtfQ1rfdVk4AgLfxZStk8WZmGTtKBJiiJghQ9AzziWJHFTwniakww1BvDqu81F8kfaDHJfPpRieoz4E2DpPw",
  "key23": "5h5kbVR2oxCLkK1wx412P5bqXcm8BgZEPtHmU8GKyxA27zGjLHSot4MtSAucurSQrjzdjCkHMTnu5uTZsFuX4Sx1",
  "key24": "5NERoyKPEM1MfFEjib21s17TgEzUjoWuGumsUg2RDEbcf5E6CgmaJSV4qXxEWy63gbp7i9yPB4cro7AHrcA7Vnta",
  "key25": "2msA1oS11z36NuMnscWLJqegPc87d5JydY7dPumThT2ksfc5wAfmPZCdgLRXfXQFWajbvwfnZFzMwXoFEGXX233Q",
  "key26": "5nk8CxyqaZGhzVNjWa4rEBG38cJgc9fzP5WULy8nH5HMsjGUNa24HztgYrdsD9qm4neNDPNuuoQKxBL2L9TmyAYf",
  "key27": "suujahPaEtg7gsxmN3vbvWZ48JjeqwkSe7xPe9uABmQ2sA6TnX9YQPcfb1418j3BibJ1KExTaYa4E7yNQRRqAEE",
  "key28": "4xYSR5Z2SCQPTn2tnE5c64kANNoiVLfWXtsKBzTr9ShMUeKjHESS2kKvWaa3ZPuG6jQNCG9nzWu1kfvKrTNUZCiR",
  "key29": "2QJ14n6FtYPRjc2sC1akZv5LrQspKtcxov8KFoFgtZkEABJ7xR9JSxwQ53nWsKfz7KWJ1dSR7u99Wofc7a23Ri2b",
  "key30": "4PgWJf2sNsNLhDEcCx9JxZBEbamJ9LzJjwfaUvdA7gvKpJyurdXiNhswBvjMasDv7gZ5NiMqNPT7BtRNPMBfqvf9",
  "key31": "5uWN8THfU9X53uYN8dma5gUkEifguaMJ1nA9pLoThPPQPH74P8ctnZNEV6kq9XGM9HkSHgp288PP3ArJRdr5wfJg",
  "key32": "enR9EQgzhK8UT9fpVxDjPjJffQtUJzjt5q1KSmvGBXMeJDJTiVinTBUdxWg9wpawe8x6Sx7TE5q8rTiFpvCWWXi",
  "key33": "AeW4hBNFy5nWR1x6BEwUfjvGF8Gg1C3g1ht9BwNRibZ2MJGuzmjCKdAgcWS986ab82HUT3kffizm4MRKibqCj1f",
  "key34": "2y43FEaGdLJj8ZqLqw8as9qC5SwAsTTzvBqAiJ52u2GFQv75kor8GZAqdSw6LUjxfZ3A89VXykzgj7EVy4L2efdC",
  "key35": "4ChDYavPiMH2rFJeU6ruU5BBATSJm8KWkWwCGyoJ2ZapUSQK5MdR5tY3TmzNWHvnGPbAkNvnbr11evXeTbCvqF6y",
  "key36": "Bzsj3V4txdu83JPuZgfHCB8vHhfyoSgtqn2fHsjm9kPQJV7ftB7VMDkDbvkVvGgx5ysT6AYLfpWaj9LVnn4z8AX",
  "key37": "HQmvfEmkF3HKXaQ2mPPfHKV7KjcvxS1rrziDhtPAXPaUWFkfd54cErFUa6M7w4ki7JNZFQ19QcmtUeXsTFTBQge",
  "key38": "4JmC5m2YzztsT5sDMj2PgHkXxgiAGuLUnYHbpf9Leb67b2t4K4cn5fZXSBSAWB7UHDpP2cfuvmkysiSiuJitZbuz",
  "key39": "2h8PxYSZ3eRe3YbBZ1vyUFhiY2DHXwHH3qvJ1FRsjeEvKhpr42LWyVZ6vzo27p4sYgE45bPCTGS1qoU1Skpex98X",
  "key40": "mEzmGDMZVkM8xTAG1Pr5PW2HnGcfZsTnj2Ve3cTdpGDZPQdnUE4e1fXAStQS7cRpC5fGK5duRPH2QSqzLfpCHU8",
  "key41": "RpCLU5QM88AZPCinGQMXaromRHq7tQSTphYv7mg5iA9cAS5tWFqCNs4E9x95fbTJD7fTKSdY5HrpF48fzv2FMNG",
  "key42": "BNGvcCn9Sjxu1wYqJYwct7TRD5NiUGziHyKM6kaXR9EnvNPFbUycgrSQDEeim5VywXQdSYwhsTtG3HMUHhUw9Xq",
  "key43": "2qfJaPNK8WXfUy2NLNmSbULdc6tgMWgg2sN1wjpFUNTaqduPdyu6nmJsB8r6chjAP2dsbUWGRmmtznEnzaUmjHFm",
  "key44": "3bYrcEoRvNZhqzCEfY8ZRBRbNSeWRqLUSyR8eGbonJZVnufLpzxNZ3WMyjCHuvCVgc6ULJgMH2AuMbiTV8tWmXcd",
  "key45": "5DoiaaojQjyZ1PEydskABL1xU5xugoLfcjySgagqySTt5v2YDDf3WdAPHvZnULbMJBw8mAkmASDDzWfN3gvYKgyN",
  "key46": "25F17f5sozbbhfW6sp3V5Ct4CGivQkV4KUSurnC5PDcrJg2cXgHoWQq8UT9K9w6yBX6rMAx5r4c2okg74XY27QvZ",
  "key47": "4kp5FqLHWK6d42MJxu6GUdHyH7YcHpXQrLsx31P8D5t458oqiyLoUXoXkZUjHpMi91iHjywRvcUdYZ6txUMFsP1Q"
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
