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
    "Lcf3hKFLo35gzDVKJk78jAD1eMfJhc9AkPve1d8G4g1psyr2pzYnjJDyE2X9kJ27bdZTYRX21SXGCSX8BEwbSw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ct6EiwxJgWqTns3E88rbZ8yBaEFg5RDajPqNdi9TPCtaeEv8kU1L7UxKMmrds94fG5VGm3yrAAF3Z2zzL6MbMfi",
  "key1": "2UrjiGMTbmNU54tw9ZFZ9Nt5AnK2auUa9FE76kgiULyeKm1XopciduBSGTWS7CSbUuCiMs5LqUC3tECG9b9sb8Za",
  "key2": "63dzzipF6ujqyYkw8T79XbPdHGqZs245WjGFX4MCgmpfuTQR5keB1FnwE3MmvjvQ1hLB75rsMVMKgwNdYrqKcM9W",
  "key3": "4MgDk6ku1PXdZtuA2UfrBpNpbGx8B2GAuciMNZq9PmMs1RTFuV2ehfQfGdgKscVSFhisDQMJbJqpLwSKRcTWd9N6",
  "key4": "66ptsskdV6Y2zdFG1uV5bWa9gbjVLAUCc5BRr4UMmqrYezFz1qtNJ1YRtJJKvgGp5rSH1nj74nRGrTsUCPNm6iQi",
  "key5": "21QykLF3edKNYmf9BCWorhEAYFvzhB62jn6xSPxCLALs24eaZBmUmjWq86Pei4SkXHfmXvaHQ1nZ5mZk7UUkycfT",
  "key6": "2RDSk1XLf2sVVFqFRggSgDjdwcbvWVDBp6oTosEXsHFeqgMK7fsPNib7U6YdEoEo3xk2MDCPoX5fvu5GyzFgiTax",
  "key7": "4eagxiY8C39aquZMyGgTf9Z8P3enqgocP2ExGn7iCLnLDpJa7TcwVbkoc58Kv6eMtX3SW6EmP1CgrZekLH1EuFyQ",
  "key8": "4C6Qdvgui9xPtMcxXCWCb8RTrdVhpnQcMGuVTA43YyhsCGM9Q9GWNZSK2kJKzCXi7xadztMzUAu3ip15o1VEeB8L",
  "key9": "2Mh3Fv5x2JcGRWed6ChihBV8b6vaNVNniqRigg1RDVcwxDsiYEQxNWtyLPhPo5tg4XWc3U3LdY3uLsRGHrk8hZyZ",
  "key10": "3njR9qWT2UkFbmwVhXcbuEjgaqkjMzK3X99Eza9WRiq8ctDFaiZ2zqBr5UBtsUrAdBtaSVmsrrUEUQVDLpiESVGH",
  "key11": "5c7CDQrSafxvGM53VDkvjkV9tqq6azPvydpeHtx38geJmVt1YZtpx2wG1CcA9hsY3CDyde6CQdofgQr2wkQF2GYc",
  "key12": "2uHCM1JRiTvv3U8dxDceytSDy1pri2xbVBgpe5Y5GoeuLoMoDhyKC8SpAG4w1P39VEzHxKtpZKLLr47FqqPLGFhh",
  "key13": "28tNJQ9s4ThgFuwXWw9Mw4WCFkPYWvsXjnNc6XcQkWX8a7ZweKfAqRmToL65MSr5iqEeTyAVbJdPNa53cjBSsTEP",
  "key14": "43TkvJ6bY3sf5WEKmiZUVEctS9HQq3EGu1Q1rqYwBThTkDQGzVEV9vyXnDZMJpBTvssFywfDbYtri1Hj4cke351r",
  "key15": "5fRm8A7KUJutFZ7gTekvxepHhwuFErfM3zN6h6agqhMSHsLA5UJeLJsqcoBVKQjpqy4DY3JzMV1vhv3RmtsXKuVX",
  "key16": "4suBpHee8YjzFGBjabhe8yKWmRc75xvqyaRSFbZTGgYEKXh571aTuoR9cVJeU4h2BTmdRhjjXeCzJUyRF8J1FKqY",
  "key17": "27MvJSX6ry97f2Q7Dkrb4QGFZVqHJnemaHtS3hhjs52JfdjHxq8HN7tEPWCGDyQmRRM7oxDtFLq9LCkWgCjdNwxr",
  "key18": "54jZqSNARXvKEwuopH2RiHNxQ1yQkejAp6btyjVZBDN88cyjQDpeJFXF3WdqmJBydLCMBRZMudqYjMzzActW3Yto",
  "key19": "6gGpmMpczgQw5dxovVryGoax8irS5khrkpm2sWAbgErwgqLorjAgdjR4kWfLZMpemX4r7Kc7kXFgdYrJx3GN9yv",
  "key20": "4YRikFUeZTaWQdHjUv8Ygc8DRUpcD2PLvmfv7Az2KiYFTNJc7fsp9qaYAkEWSEFsGUvMM9ywMiA62k886ntRPTHz",
  "key21": "5GouGi4e6FYrnDY5Mfd2dAz3LSWPxTf9ez2BvTzPcDEJ2SoRkVrih1CZymdF16hXj3vVZ1dDdW6iKTpnvgmy2d12",
  "key22": "63XKwziQcRHudyhyCNWrwFw2ZDZq7twzuecDimuB1Ym7rzpX7CY9zqAHRuexBmeVwKPs4KgCTgLWDcjSAebD7yt3",
  "key23": "Wv5Y7rKV2yb6UFdvzMm8k7RBwHXsq6JZM8vFBevbbQQkM69mRGyS74rc8SEF1ahPc4beMDLGaj7irvPQqCWoRQZ",
  "key24": "57EvGBxhLzws5yKx4Pb3ak8oQx5PNfXm8STMzn1Qq66x99ShBJCStoKSxBbojNi2fRsEnMk6bd4KQcFH9EMwTByg",
  "key25": "34qfVQtPS9R2174nx7rxCmpoVNdx6x1caUg3GWUCpBYKWYzgWy6M4PJsLmJ4hhzh5RJXu4J7vHea61q1geJ4NfqW",
  "key26": "2p5dVNDRXAJh9LyPrk3R7QKRu72dPLBkQ5v8VX5RSEmfarAFpNr2zvk97NvUjQWHCtpYTkpSpjmUB5putWrwZKic",
  "key27": "51vJR9ZUxvzbPLWvSJcwzp2okanSW7x4zGP45gS9XNVt3mznGPY24QenVTc4HyFdymf86MPxBDgNNvLV7jW4dz1z",
  "key28": "3deyrjciPFPGEs54qmpHoXQzhYRHhKMgAmP9Svij1wKA7n1Xue6HqgTE2Rbbhijc4i5WUrm2d5cJ3QJdjtyPaxM8",
  "key29": "4k7MC2kQMJykRheXozyS7LgzJW3onDHC9UrbLgfHCJrNqg4w68Y6cDwgrMp1q4vCDoPGhQzkxwQsmZA4u9aVxcjt",
  "key30": "4WmXzxCRzMKXh7q7mDoZ4tKBpTqxc5H9cXNstHKgKcQPxWudogsaFR9diSPPxvPUWFq8oN2pvT3bhZ82vivRqioX",
  "key31": "FvdR4jGKq8wJ7VHMitkokSS7TTR8HiDZxDxU6J7vqj7iHjbsBUt5nu2vCvgWEStM1bEEvvXVB1TNhvcidkQCi23",
  "key32": "5gZ3A2x4SuiCjvyTMFou2UjXSdBFKUfVAUMEi8nfDPKzb8G5UiJkBV4CbcHPatA8V5Tz9MFzFpMFZ8aqw72KUpkB"
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
