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
    "2vFKP86SmV9FBnRjtg32Cinb4cUtsMGt7AxcWyVTQx8HWqSreaBfju3KaeDQbDpHo59kLwqrjhJgxCzybw1TD2qB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bxr1fvuGDfwHmRSPtvuXCCVKfVzTrRSQPNn9XmbrGD9LopViYBefCAR5d1KwCEUaySW1Tk49cgGcBDALKEqt7sc",
  "key1": "jjVamh5pRAS3wax5nw27Y87XHKvQmVrnUo3UzTmsAi736htJqCN8LJH9amLy6dw5PvVKt2LAotD4oUb5rbUVDAg",
  "key2": "6468Sjt39zv9mD9kzSA1KW3QzUCUQ1UwFoVmakBcjYdUUJEGxCZn8PXi2TEU31h3jBF6H5eTQUzEtsf5qJDRdSAL",
  "key3": "2WhkSdSxwvRx68YMqvTieL4t7Dq3f6UFqtUVZY3w9WuXZ4Q1awCX6o8MoEKDR5akQEv5e1yaEJ1ZofRgp97K1pSg",
  "key4": "3DNBm7aDUiYdewcLLWQSnLJvsynUJWA2XtqfWQytiB3FGrgnUfirYhaGna6PAhtzVUpsPyTsQY2SrHWfo1SY8Mci",
  "key5": "V9hssAxk3Lj8fXUYb1PXiSCSR3PDw8yyTYMn2tXe4a7eX24Dx6UXrVMCF1EGEqvFa7Uf3kkRZauRmeciPLwCR17",
  "key6": "4PzTZoHQiS6FaSpd8ACdP7FsFvUHxEU5iEfNUV7ECwQM2HFLTztNjGoXkwqUMd1L8x4XoTHqendYixNJiPa1jd9y",
  "key7": "32ncQ6PX9E7m2B2AqYCP9bkLripWfuXWRECvd5hscJj3J8fBmCYSS49YUPieZgmcH345oxWgNz13ZfBuhuvMMJPT",
  "key8": "4ozbD11piSjedcdi1jAi3gyFmBh7vnjopiUmgBiociWvpK9FgdJbnjTrUAWVaRiveEwQLahQWPqsCk4dde4tPSCW",
  "key9": "5FPZwdY4kzJHApYhr1SdhzdrncVD2t9YQZA1oD8XzytwNmiWY475xj813nn5S7RPwYfebufdNLAL6TkyVqvd9ACL",
  "key10": "4UerYAX56pbC1cYsxDtMRnFu1j5c31QnHLJ3PEoPwbwhvvSXVAPTYydetSNRZJ86EPFE3Ykd9UnRTbNZEEajj1vN",
  "key11": "3K2GPtauD1Kf1dvP9JWNNYUK75vavnhXZmfcoAH73TasxCKv1wBYAcvdGRCiKihbTChdV6UCZYKHkiFJi2872GR9",
  "key12": "trRaWrCBUi1sZ7rLDX9ujHYKPombtoDUhwjfKfWkL5QUHCwa74Eu1kaskGnyvqbr84HC7zAa5djDoK34hYC6xSf",
  "key13": "4G2YaXxsxwmJg7gxjZ79tdJ1TeZK3ziA7crtNQkW18mvZ5Y4Wbrq9LjcxL7SF7mR59kBu53tqKcC8oKMNi8nVjGb",
  "key14": "CfbgqHksi2HjP6QFrEaGdbYQ16ZAQWkznCiG3TaMVQFpG7qCjXBSKCcfwj5YCsD52E6vAyJLn1QEXcKoAaF4x7r",
  "key15": "4ziFp9HZNeDTejMDLpa25yxRRASEjSk1mudv2Zr4eQ5qiUQAYhQS3oaLr2qq3z2U8TB2EAgYxqhtB4gKK2UwE5k3",
  "key16": "3RbbJW4cPT6Jq3EwKCqwzNRHE7VTRBvUNyHNXpM2pBvP7WFf4YC3aa26dLQnv6mwSq5BW5U8dTTy7r1cwqVscBKn",
  "key17": "2DWfVThfrtg7mCkY7PEPnXphp7VeG3DyJSvqShusqxHrk29SAe32xVkLDnW2GgemqL2We7YFmDFCWowGPdAvvr9Q",
  "key18": "6YBwserzW6vTs2BdExuKCGpPaFcR7vsN4gxe1ACkw7bh3mjSGADxYXH9KCjg9eGcpPN4rsUmm2ZdnfX9qb6oZDo",
  "key19": "4uS7mR6gQnzJ2XrEFFP7vM2LjGCyxGMTeWE4RFQdcNaEBK6DuNtCm9cZQMmTpo4uK32yZ3S7AGZWDPuy4raZdT62",
  "key20": "4mErsi6woZtMvr2NqrbyZi1HLVbPeZ8hezrMBAd6RZubK6dfLkwEHBt94875ETQX16KapNV31RxC6hbV2KDEBZ5j",
  "key21": "4RX9fyUSk8zSjwfEz2cUKXa2t3LUB8R3ZyKy8b6hdtBXh4588yeLju63Ny5xfcn6t8n1MNQb622bystmrEdgebnQ",
  "key22": "59EQQkNNB4hgzdaGn7uuzszXVipikM7MPQ2UsQ3yovSRv5WS6QEWEaAtcf2a4LT1Y46mFc9p8PFr4e1v2D3QJmvS",
  "key23": "2jmomwhEgHpWaA8jHW8iBE8AwZsvhhp6T1wYiEGFPLLSq74XdD3jJEnMnPs9UYidF5htoWRMg5sJUAzK9KFY4emV",
  "key24": "3DpmjjxF2ggvPb38RgfxM6rjjEVk9cRVQEN1StDhJhHdz9QQgJiYeNEnsyhBE2GNEHkRxJ63psrs9gXxfbg6y1dW",
  "key25": "5NpMcpAYVCxqURPfYF8TYEj7dhcMV7VHBnFTgYQLum91x7twWK7KHN1Pk798jZ9BB6uxUoq5PZAynjTaq2ZcLfih",
  "key26": "2NZrYeSn3knx1qjT4tR3PKXomNEMF9n9XvwdzHNK6FJjf3FLLwETo9oq1CuydLCgEuYYdCoDHKiDJw7P4ZfnCsjK",
  "key27": "4WHVd8tV77oKEkWstKRDLxtKKFpfyoezvCCYz6JMo9yswpJ1pgn4poHyW69am3Cr9aTs7Ta18aHfyamwEgT3r8tR",
  "key28": "58uwr8zEonhWcJawK4a8stZpmfPFYm3s4fQo7s5qkic7o21VhLA6w86sgdVd3QoX4mjGGkndbv9pdqKzh7v7xUyf",
  "key29": "vbvY7tm9KyrukTQmL1AsskC9iPjkLMwLzNfdPwhVEupq793qTUzWtX9k1DEDi5UzrrNAFdA4ptu9QEiB2u5insu",
  "key30": "5sCbZz89P6aZ6joqPDXYijzHDcEnKM7BvGmpruXuhcu9EJUqpUATUgKi5pis1hSTWnLn12odZxRmW88g41Nab1ws",
  "key31": "3mX1p6gX8ixVkj4j2qxdEM41ByuvrcTk8qLkMVQpLiz31oem8Bh3JcgsXUg2Ez88P2PHwxmNMTQ78KCjkWRVyNqb",
  "key32": "2sNUFZEZ9WUkNXufzrxSEgoaE1SxNWigkXmrbG8YE7Gf8RnJF1q5iRnha5cT14ojSEC2MtmpDK6vLK6drYzfz9VX",
  "key33": "4ZFzAz47j7QeeNgWbFrGZX87HFXEKBN29jUgSwvNszM9JXSj8x62v1SgqSB9uKqioC9jTHK5SPfPH1TFLiHCeFRG",
  "key34": "2M3UYyoA5b34341MhSzrLeNSRmMxxiLHhapeVNn3kcBYKMN7oQrEm3u9iV4x8yznKkDGPNbjCMMzJ2uhZfZfUPsL"
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
