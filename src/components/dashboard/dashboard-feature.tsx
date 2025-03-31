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
    "4HNDX769P5mAEJAofyTY4v1tfT76a9JMdrGDkRSQCCTHiULG1Ek8Q4fT2CUu1U5YhNpahQhZuuQPCcA463Unz1a4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9HKKjMjw8nk98cRj8Twz2mFXTsrRZmVHALwg8hKgqBYrGEBmDtwkzFSCEVRgXLnsQBrx9rXkEoUAbP13VqEhgT",
  "key1": "2a7LysPwmvzc6SageQavERUQh3L71EctabKyBF2m6eseR2MbeNaZRxVLfAt7soB9ZmNZXJkzbD8pPB5wnqyFNxvt",
  "key2": "2xrhPA3J3ygMrT5vWvXHYCP5GdTVSrCWpR9DxMdSG4v22QuM9iDSPirWJwP5BkWNfS4eeKu6qN9KHdccfK5ndarq",
  "key3": "551FPdurqcVwDnDZ2J4nFJdSd1qT9Yhp2Ns2Z528pYZZRifgugLSp59Ugc8kC8ayrX7we8SPWua56oQZtKyUtCJJ",
  "key4": "2pZx8oiDkQc7NE1FS32GHDmzKtr2kNMnEskLnc2mgjBurGZjms4ozG3qGwKN8VRSGfoR37UWHHRFZiVUguqV6PsP",
  "key5": "3Dq5TDQ9a3qy2hjvr9gWDKxrxe2nVWoM8rsoLkas4Phwi4ZrjVFaBLdfYk7EvJkLWC27kYfhkzdHy6CiVPNnPPgy",
  "key6": "2EeM2CnztoHj8Z8rvnde2uK15QTwsrJjR2MNccTdxBTvuvLWCX9r4MK35EPE1eQAvac85G7i4wmBo5pXeW8vqVPe",
  "key7": "4UtqHMCJoUKe3FVDFHCenqGo9NatozYu3pbRneWD4HbLGTRC2vSsPeMZJ41GEodY3jAmCYwUxPeV33eugmf423jV",
  "key8": "3EwoFWTV91ZzYbp9iQucHWPjFENBHwsRck1LsepQLdMz4jbeeYUAQinHZwwurUymd7pmL8aBkFgpNyZbuAQFNFQH",
  "key9": "49yAPgU7xKsZLhCwNYmUkZYr1ZLSryPirfsQpCjcxwaP6zdQxcHa9RtaJxfHorzSrgLq5SwaNHM8fWLAWbUyT9Z",
  "key10": "2vZUow7Ygmq63449bWdCNGsAwxQ4rkG4HrcvVZZjBb6EP1qm3A11qnioWbpQEJJRVeaquB2zHbjwrvw2qYMt4piQ",
  "key11": "5YH7DRihh8FSJn6FKg265WzxQxEzsg53vDvrdCQDCvfSCraZ7uQmY6nBby6aZ6Liggz9vsNRKP7L53iDfe3oBtmz",
  "key12": "rorAqbWeh8DHpj2vDgYozk7WjcZoHUCtHv2LSYmmsMR6rWTwSif6aikyPWHmJ5oUbMDKtXiziwHTX8SP8iAx1D8",
  "key13": "38KH6mLG9YsZ72kU1oeEXH8Lf6dqhLMvThTBMKubgGF6LptYZWPqgeDDJ4QXeMSLixKwmxefKUZN7dezFjZkAq9i",
  "key14": "2FeFRfrebBMjLsf8AU5YhvC4miPo6ydf51RNfcTZrKAiPitni2rbAVpu7iyFfJS523QzvrwghfyiahXuhHHjYuF9",
  "key15": "5zcFskuAz13oG1GDaSxJVqfBcGiVXcBbRJmcwuTxn6Ukz1d5gHtbrcFcNnsVrcSLVmgRCrfq5yjKGgYWKhLKzcFh",
  "key16": "4qSnjyJZLXHpahF1RyRvZ7NP2iBRZ2vUMgCzNCCzyEwuf4RS4mY9asv5rRFKHVEKaV5mYxEKyVZ77tGo4dFETHnd",
  "key17": "3ibqkqkEDwVyyQgXZe31vWBBuHZaVudKcnpS83KRGTcNRMC92ueP6bttgLZsyX72JoyambNeEDQRxwomgs1diyV1",
  "key18": "8TwGxSwKxGuLx59GWQDDfAZT8qHwT874FvtQ8HFTFCh1taFCmNAznKbuaEVxyiux2x4HVxg1YStEXWt5fNLefv7",
  "key19": "4KQU3tHy4jPSab6dLJR6Cd15nBfMYPsiuS9akpmqaZ4zPu27fuKT8DhBhbRT8BchuT7vUuqchQEoiBJj2yEajXuu",
  "key20": "3epKvaTWhnzyKCHyUDG9FQ3kVy4UuUcLU6fJfCMAggbKiujb3j1pUazVMy5tSNyJUUDQMoNFgNMMBWujJVTiSeUc",
  "key21": "29iP1xtH6yoEC2N4KAHXK7qrqrGsxFERDMY28AxdSNQqeeZ8LUuof8zwqC6R4Jy95rpogJ7SrP2JCZxFTUU8MRpJ",
  "key22": "2TSfuPJP6xzktJqPDKaCTWXn3c4rVXcuhyJ47m6yLMJr4c2Pyrm2gL16ecfZTF2vg2n6WVEChJxvnhMRU2ksdHmj",
  "key23": "2VqPWemzdGm89higMGT9eE6EzsLt5C4w4g8Y6KpmszJ1r8MSgu4X6zaamPHGh63HUppaTJ8jXyNJZAajmTYWEb9o",
  "key24": "56Jdzuusx3YmQmnNZcuTMEXuPyKvmSE6kkoKcbE8QuHdFF6X1bWG1yWQexV5wW3vvb5TwqkHvvJ5Jbw9vNF4BgaY",
  "key25": "hAzA4cAik4z5RqDcJrfqio2TbKWkpxsESTnemCYzUmxV6s8hNoMtgJcfhT6KoaeeixeeiUNmuX99GZ5RHjFSy7B",
  "key26": "2U9MFTBfFy8167FU4YHpDdDkPBwHbE6bGeH6ii9KNQGsVUraSTvyjTVZvqEbL2TBExFpDiyXBMDvWKBFJi1syHy5",
  "key27": "Biz6dxJLbe2c8ctp3qdhxs6oknk92GJAcwrMtNoT7hcJGebL2zCxYNWD7LsrECZasbitRpK69dZF3rocQS4TZHq",
  "key28": "56SFbgo3UoF5Bfo8fhNy2pLWnhacRfYsL4qLvNEU3JERjhj2D6mAovEWXLZfa2trY38o5S3sE6iggKG9L9NAQ8MS",
  "key29": "33xCrZBUmVzoiGynmSY5DS7RKdDsvDzKJL3Jm6oWUkjCqjuFrjdtUKJBkieCktP44nAVCoNTCjc8qCRBbVRWuVwS",
  "key30": "16A5ecS3ZH5ZT9T3qcGg36ho8jLHtWKK8s64hEeNpUH6DspKwp9qHBwzvXpmVhaPP6iYNnKYWQY2TUZQ3qf2C7d",
  "key31": "3ApANf2T5nwDKRsP7vmrZA2KTAUtgSGoT4R5JUSPaQYEx5juP92oik7QJ5FLHVNLK5Njok1xVHYRkiYJT2Td26Tz",
  "key32": "2DMouV3GdAdShWSA7RK9jmqSKrY7oCCavGwUoWmKtmZG9pTuguVu9WPi9T8RZtwCu4DTW8iHneEpNDtM3W491d3n",
  "key33": "3icNhehqABb7mZ84jAwBtzAYQPN8EHT9GRNwp9zePb6bEVRTh1UWWyiJd675MU2sbjpWUcTGN8bfCbHMyyhAPCf8",
  "key34": "2LRDKeFWV1aNnrdLxnJoaMt29W8PB62KNE7V6r6RizvUpFvi3BtDSdNjcpZs2PfJe54SVXy5ANmKDbMdjQ33MZvF",
  "key35": "3JzVMYAjuwkN6UP4hMDoJHTkqq3UoCjLSQarkf1KPCuz1723MbuAex6tVg2f2eqZ8CEkG7QeyU5HxzcE1Mbm7km9",
  "key36": "5R7nPbRYXdWSc3yvBfC5oLFYXv8jgzJf7cJEf95ACPTGZS5wGyQf6HYhN77MRQu1qoo5L6ScpPi7PkiWj1aW99ee",
  "key37": "1X5ZcUUdUfhvFLQkY1D9isob8tcLPzztp6HTv7pEppcWd3xnR71NsnMnUqvAC2Bjf3b9mXCC6xA3EdbU4nJcghH",
  "key38": "4b8o94ttm14gsbewPPLFjNfJzEXzoHgHtSNZYDCcmJ3UgewAz4iUecxiwF9QN5FZSM5VExSinZ2bWZ698WpB6sYd",
  "key39": "2GgMFfLwPBc2kSrHQD5rHxxjnYTkiAQRNPopPm7CurKZDRa6wvKgfv6Ss8aUmo4BpDSPA72wgFLXYwsqyeBKpn5A",
  "key40": "2sMdCJxHhQAYjVmSELfdTFyj2F5iFq4wnnG8Mvc8QYXyYbNfrs3LJ8GeyuTnLP9NQb7RB6vq13jxLkkCEak7sVSf",
  "key41": "9DtbjqZYT9NdbYWn9DLN8Zaj1kpofsvL9LbdcC9LoVVL3Fe1aYsYeDb35jW9PqMvCTBePHPgtX7KBGvtRub1F1E",
  "key42": "2QxgyUcHY8EUD5aXfNFHdG4qyNtJey3HZE3JjJWazQUjoqFhxY3g2eWsfCz3NX7nvtkrYjYLt3vYmx9Qh9BYjBL2"
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
