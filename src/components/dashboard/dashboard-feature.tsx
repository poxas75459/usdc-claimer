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
    "3hfd3vXeifGZUQ49E1w9cTVfzLmZqeShdkWRDAskSqJJzqpfNzKh8qJnyto9qem4ds4UgY7Pzo8az8iymEP34vXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eor5pi7KEJ8QjqQuaeqxx8yLhgEii1pQqyK8uuhEJeiV6gNZ4AaxhXseJWBNNrHeCe4HKjsGs6xWmm97x2HjHPm",
  "key1": "2M9hHhCFk2tUyT6cHh6Gv2AzM2SW2wHDFjZ5voScyQGfR9FfaDgVmD3ZYdYiGkXQRXBrPRMvY5ctKRGRNLB9XE29",
  "key2": "2aCqfMGF4Eza3fMAzufs27uUPu1NyaifnbATvp7D3qcmkdUk3qCrZwXRMPzUXUyhzs7zRTdbHq2G5wV7dKW7UtZm",
  "key3": "4sMLTBCuPiWutAkACKP4w2cJoLVwrWNZ5Wof11DeuVQmfZgwUKdZzzSZQ2MFCQMDeEpc2EK8enKyyPUdvDEh7KDr",
  "key4": "2m2U9Wa6384k6Xi8t3WfcxYz1AyHigSeKuAhx8Ds5CaXsBZRZcotZ42imPybPx3AyJCuiJctVHBP5yV1K5VfmP5X",
  "key5": "2W5TwbWvneZob6diHESVvyEzKR9WmVj7zVoM7ZrfviftwKxGyPw9DDaGxEWpg72nhoZpzE6zqv6Xm1cvNjdHq6F9",
  "key6": "2kvcUj3sDR1VzgAxQEsDF1q32KTyj5tMBU9hME9VhD6EpU8KfRRWsdVo7M81FDNw4PHNGitLS3CfaYaD8XdTfjds",
  "key7": "4Ur2ZY9x3qgAeRN9SsxMufg1wBWXjqbyiHKkrXcMLcchJnEaGeNADybJQFPXLVgQQvWCanCJKjRFKTBRf6yTCvMu",
  "key8": "54GwKCUFxyzxbQzBzzXGs1gBdMphWzUztyaDV3yuGHFZsoMpfNjGqxrBFkFNvAr7Phr5uR6crczFrzMwWWdxiXXH",
  "key9": "54iM4iwF8w5sYYTefUQwF8sfsstRdyGk3dB9ypFac4HkCCC9Mm35Qz6xKteJ2JuW5oDCpYHrJFymDLMWYT55D5GS",
  "key10": "38rkfTT9fFoLBezbZq7MiDMdXwxa8efSt9VrrfAhd9AyLFtY3mvzLtSZEZ495oemhF152nC19QhLBcZax8dFiUQu",
  "key11": "3NgpsYe8ANu6eBmknJgjzQbY6iH94rG4VQYuCp2WzNQNvpNqD8nopMGK2yKRpwVVbZMeMqtngfu4UEfAaciPhyXP",
  "key12": "i5GwhzaNwfGJUcMSi39xSTmCW6STuWHVTJ48JRa6RNjnuiuhNNT5C7obstAgThbAKYJbith8qPAJYwp1mun2zwJ",
  "key13": "3difeLxXuXX8ZRTmKtuQ3WzVQDdy8jEpD2gYWDUNwgq6nWBkcV2JvSAZiBiVMJoSF5h1kqKKRBmwutrY5nNHXquy",
  "key14": "2gTG1eRFef1kLmQ4FNnUK9rQgVgsR72CnaHywcbJMoS24qb1hZKfGuWR4gdxnCARmj8BtcdzwHjFivCSy38jpV6d",
  "key15": "4bybQYwG98CHqSEovsV1eafy2cEN9521RAwnEoeZqQe6G2MkY8sfZQiQzUxfRwNvsgfaftUaCAmkPianNudWr9iM",
  "key16": "4LZ7VdRR7PbzVkS7pypYAQLRfez1SLJD26GW3JrSbfHCJKXSGdQiFJp72T8m8witrKELEQEXjusBtDCn6X5PH5cF",
  "key17": "fXaqq8jrtE2GKuHLMcY2Lgc6GVCErjKDMKZpS8nKvtQGq2f6eVsjGjQy48FRq2qu9o8DZo91gPsVJknx6vpsw1j",
  "key18": "RnzvJHK8U1wKEHyuxoaD6SNayeEq8icwLJ9rZqUaFMeFGjNnZ9ZeUMDg7CZmYexuHPxEVW5Cw8Nz57XiXf5XsF5",
  "key19": "fN6BfuES2cWE9zTCW1WTojih1JeYS8X4HdHw4AaDXwsZgiVSpVnVQ3eQyB7wHoKDvwzgNGHPdssszG1uzWSBtYN",
  "key20": "551E7KfPcRzE87zfwMexUCyP8vWvLDGQnc4kMuXimAyQbEgfxRuxPi7QFPrhXf56xZQG9agBCNXKaf9J4VN4Vffo",
  "key21": "GnoQenwNQoqE2CkCnvX8sPGCNbnkPdqPGiX3wjRMtBMN2w25JfJ9KFHsoMWyvBgoNfushBf9F9tYy7Z1PtUqu2W",
  "key22": "4fa86srxdFjbyd8ouYxrS4sSrr981aCsj7eFxULRqbVw6dPBoEmAxhNex9yVZ3qZ4UgUjcEqcxTwLUT8sTRtKFfd",
  "key23": "26w16iYxCXH9KjgQN9LxBXFtpS5q6Do9EeMVjBrTvzfYo6u6z2B7saphSk2K2rLFqcjfNSwNHedMAKTSJFwxkbA3",
  "key24": "3pE3ehW57SEji8KJz9v9AwetenaYkhMb3wRJi4MaFbbewveAmuPjcUYF7rJadGgLz24C3pwYVHRKxFEjd3m3azjN",
  "key25": "55ULmhmoHoanrs9Kfr1TL5uTF7vx2TNGbAwpCS8DqhxPcABo6hYSmH8zpmLDpC6Ud9Ai999aQGZWsUk2MmGLyqGm",
  "key26": "4XK4Hu8HJWiuzp1Q1LfSSTrvsf79r3ZmEupan24xpzcUPCB9KU29qWZY9ewsu5zfh1WA39hWNdqFsfsoaeHCdcRd",
  "key27": "2xTf4GDaSeoGstckZwVtJhGXZmkN6UqEsz83x6rRrcBgbLerWNk1tgssgY93fYZSDP2TauFExdUpFme1CxYXsWqV",
  "key28": "3Ybz2quuCtvNhEzKw41FB8UPV8n4wpNTTN1C5K9YSthw3aUS4oGiWPMG7icmJgP9SS3jgvtGbY8QfhxM6SqQKWy3",
  "key29": "3eW1SJCp4bm1jRa3VYFxaPZ98gGgFjTLNc8f2mjJ1YF5KmcDkFN8vrJ51d1X4BARvEimoNnE9eMQurXHNwYDsgMT",
  "key30": "3rhtC4ft2qhEGto2cyt798q7HTKTFVgDvAonD23V45Y65FSHw8Bj5irTRXpRRNCmPtfbfzXMhkBouc1FEvHNHeDF",
  "key31": "2jHnWJxmNsv5P9d5VbjJgAc8os4trd2q17Sh3fcygW5avAiCF1vaMtWBm31u43ExSgVsrFGRQ1HyYmuuuY16RtrL"
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
