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
    "3491Rcz6rSPoMu6zH6BMhXp7AzucESf8mkttaZ6mhHNLkR72NR8RUdnZMxTxQjKJoHG1Y9a2d5fomyyYp1iCrhrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CX1DJanmrTB5HnHgKSL8jYAFbgAFDc9oLNNNhA46aqdxnRMPFruk98StT6p13XLojzCRaaUQRH7mJi25CFLXQKB",
  "key1": "2w51rq6Tk5yGGedU721KKccdUJg29V5VS8t2zP6gpFPgCbfz2jv5tcfAsj5QYwKtwN7Gg4J65UUQoT2xfN1JWpGD",
  "key2": "33neBpzghcu7xvu4YXL6y4v4Xx9zzuhJwYVyBVYW3h8bMwxAgsAGqb8R9Fn2widWV1nuoUCjLcsnhKcxBb7G24Xq",
  "key3": "5x58cyHYf1nxYGkQ8uMKMVWXHN6xxH5oi6oB6eJq7hFXqhEFhtnjFw8zD5TS14VdpRisyiTzDjsUaS2iFAV7898Y",
  "key4": "gEVfaaZnY5o6pWhY2jsYsw4MfDvpFA8BTvv5GxkczUFjgbWSe6wBefs2aLbM3zigTnyKKmAVsAPCdELaX5kYnDJ",
  "key5": "2RAseCpYf5JAoA6WXm9qtSLzVg7ZDNDh4h4azw7cgmneQs4VUCLksxjSUq8H23GCfaNvpgbf7Dr5J4JALSW9tCje",
  "key6": "P6QYkSEXkUZVHJy98asYbYgdUMq1MJ7TNQmMKMECCFJhUigAt3radqn4m585cJZ5yogGCo2UTJsdmd8dQwU9Kjr",
  "key7": "5epjnR3Monj9KZ6hZFAYi6ubnL3766KCxipeeV9DgLyUc58a39zAR1JAUew36XKn6YPjs5BnMyAgjHtv5ZFAEn2M",
  "key8": "2q5tbQ5xKGmfotHCHgu6cnbcvPMgpkkVbnDqLEsufd8Z72VaD9UuJoMh6USHKaFoNd9REm8AtQKe7Qxqhn3EmPVP",
  "key9": "3pgUJMJ1KAyuprWEDQBhAMJ3LrdxQ7uy38pJuqb1HbrG7FNFGAXrGjVywnc2i33fhXshjuigPW9WpdNPb3RVy8Te",
  "key10": "5ZWgW5iU6CvJET6jpNHYkpFTemJcqzUdPdNU874hR6GCxQZScvWJxjWBjuAwbekTSfw56AwwtX35w6PeoLngEinJ",
  "key11": "KzodRK2zXfzEaA732TRotfuxz2xgoQWLDTrUbA8ML7zAodrJCBijQ3rq8aSEW96PU6MXu82nCg9ZeV4ET1NkJ55",
  "key12": "3QuyxifCmAzdEfVFn1JmGeWvwucNRqUCPtnyzezm2Ntr15pprBCGjvn3mNELWPGsijwretQFMKz7MACxDU4Hk3QB",
  "key13": "GdVtuXzJz8Yv4UYVnYfSkvrvkbtUeCeJ9az1fXiMwbVQTKwciFzazmsWmftqkdyf1Gy64AFVDkp31p8Ubracr5w",
  "key14": "2Qp8AiZq7MpESHHRzSjBHDogG6GcdSnLAHRyw1hebp9P6uHa5odAWffqbcGzuP35LR2ywFmNHEkvr3wxzJjZQxz",
  "key15": "4wbSKYyJc2hS7E5M52uxNs9zv2DfSuZ5q9ELgVvjEywHwTaR25P4PX2ojZ1gJwXP3sqNqDTzL3quR7JovxzwrCR7",
  "key16": "3Bk8qgq128ghfZzwbn7fVa2tuU3WMayFSWLcqoT5EBHxfaNUB3pQijFwDZeXB3mntSEPRXtYXBbC2A8rMEXe8APU",
  "key17": "3m2gcock9BLxnBTc1aUxCK6KUNbdSy6Qgi6W63SXhhcPftD87W3d4mwjFB3LHRTRJgQN895UjPU6JkTB4ACGL1dB",
  "key18": "kVW9xgbPZpmMK3DYuAs5zVJkyUpXYkdTdPkzyVVuA9N7SSebkk52DfoVPb4p8MZLoCUdEfXLUmVt5ndQQCPT8zy",
  "key19": "4dN5evMGgX64W2X8fJzWVMBSHzK8BgMFwFyhsZAchnuPHBHfphouHW6penfEDuULJhvyLoisWGeA2Mi4y8NKxRya",
  "key20": "HYsPJVE1xgNmHPLvNA55HqjW9c9uk63w8u3AEAEf1RtnverFKsibcAWqdSE3RrqrzKxAiPeZdEdDtN5FTRcEjWJ",
  "key21": "4o4iYbEmm3omrCgY9AP5HDk2pRaS41bYDWafq7ZqXH1KADyM9o1scLEJ5GroFcTynVSVbZdjN5E9Q38x6cFeDS6y",
  "key22": "5R4yhaNXmYvD2W9AH2SEWfC4ENndnZmiyRbzR2tRnd5ynvvw72hF43z46AA5LN8z38os2QGg4z8unkAjhUngZNsy",
  "key23": "3EQzukNxQN3o1WBguz51U2qV7oHwNXorZmZvTvBuDKheXeNWnkbw2DhzvffkeQpJcf63yGhm3GshX8nhsfCyZKeD",
  "key24": "4y2Qcy1sj22chb8g7ic4qyNFDrq21aSe7UUcvi5u7DnhFBBzFQ2vRXRHxk6sP1kLfeSSaTb2A6dWFvqQr23i5hj8",
  "key25": "5pa6X6ojbd8ZgFztdSfdeq93XzFY6Nto22y7epXquDJ8UUHr6WSfeV6C7aZawEbXvbQwoLSEPS9LeqFU1hgjBuh7",
  "key26": "4nNpTDkaj9tMuCSxAS9TyKGKio2dm3xmwEbdez4Ya7P5c57ETuYEYivQU2vhnPDXWKcPALcaQL9CJUofKLTStPPv",
  "key27": "2jexJc3TU9vTFyc1FfXouzhyLJPwRFFsFHjZcKM5TwEsmu1Mpy7qyp1AUvkaSH5jZx6KwSCVkBs4dTY6yUyBNeUS",
  "key28": "ffxfheP7XpQmyD2RJVvnJJDmPGnhn1rDkVterfCD4gEsNBHPj7or1ochUsr8q94TaYw5dvVX1PmYFASuwNKM7sR",
  "key29": "5svPPYG6qoKHqqypqBZwBM2xyukKMeGinnhrQjDjRceGNBP4urtiNu1CaWjomGwNSsfQNZPUbuzsxXmZ4593CjqR",
  "key30": "4fh2wWSMsEUBHXtjz7yErSMsAecTn4swSCArQuV3EMd87z4bitfoQNFRcxHNZWvPyDQmqatJyFwW3nUq5t7nJZ5p",
  "key31": "4nSqGaJDCnYSvv7c9pspv2djzeMmGmTtjS2BWDvxrnL9AJpv2QD4sHVpFrYjRUF9atRRrymGgjD9bmFBia9szfEq",
  "key32": "475MZFd8r8kqb2f9CMNpobn7HMTQFxe2Qghi82sRbui7dU6TLoWsksbnJo53ArHUSbNHJvGD7tfCQTMmEhUCHJBS",
  "key33": "3VVjTJkV6AQbYon65TetgUZ4jcxSo3aQNN8TE9a4qX2F9nSwR5worYvtN9Gckrvb3FS6bexFi1vvUdLhRRK2zzEs",
  "key34": "5jWDgqv7vSUyyrha9ahS9nQ1PKQAXemC3GPJafXsa9Pp82eVAD3biePSf3QQuBKfN9JB4eAM8nNpa1fJ7719rGkh",
  "key35": "5GLzMz3GumSzYHhyqesPj9iT3Jf5BDwvmaroQnt6YkeXdtpgc1Rn8taFQ7XAx9PNoZPCxWoAVxnRPEkqvHEaEAx6",
  "key36": "4VGdBJe1AStWQQDt6qsqdPwsrb7LeQeudtsxR3TfbmTrPFRPpxBeT1otRKPN3ZX4nn2DawsbtcKEHg2ooY2Fkhby",
  "key37": "3zthTucqw1JzvjQKxNcKrxo6HsedsZGWk5sQBUdnCBVnJSx5Px2qSGGSvc69wGTpiMKSvRWgxFQB5PxMdGd3Y2XG"
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
