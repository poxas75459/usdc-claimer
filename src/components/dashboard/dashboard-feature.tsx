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
    "5GiCDDfHFSjDedNNndGHyVqLmzHQB1PuimHgU15wGnvA8og5SDvNmB5xHncxXdEHUK77gKSzhNEw6S85WXvbB2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q4gFdYYeGt8wJW33qGEa2aUaLvXSdk4vwpfytBcabG1sUMwNwR4bBa4BR1sh75ZM1X7Ks7USzW3fij5MmzKMyB8",
  "key1": "3KMFXGpYLjdbf8S5jBpEqW9nwp7DXvSmTAip2uPSu4HXLTD7Qp3Vh9pyTsiFaeGYXABUp7UGU5yJyDuuTc3gLmXa",
  "key2": "469qYKidayi7D8BaTErXgfewSDPeNZ1P7QwLnbHBEVQW4xdADico2LwH7fviScu24aJW1LP3zmobHi6CZbSrJaX1",
  "key3": "2tQL7hgiy2tmgQfg5KCLDzCvb7Y74MRDLDZc4j3SXPrwg1AjaGPKLjWYFcqC25MveATjVGREmSiCptekkxevAi15",
  "key4": "KT7x4Gbemgp51SiH5cbDXHyKT2TFXPW6yGo7kygfAciNSEMpmnQnAVPdCNHXhfQq1aDnHfbfDA6EuESNNuMmKgo",
  "key5": "3B3AacmXwWUXKAytL6QpD1nVFkJ4m8Rh4rbrGGdgv8dAFvb4qqRsPVQ9QdNyHpQZcbCRDWxyZCfXFxuNQGvrLLsh",
  "key6": "5pGp7CegUt1brCAxpCVsyHo3xhayg8oWDp4Q6ifEiKwh1RixUoG9dajTnU7YwgR84s8f1aLk8By9Ys54uHHc3obQ",
  "key7": "2aTSViCsFZ124TR33gpfeVNVY3wWN9stjagTYJpCViRZS2xD9nQtXtg5LJsnj3TVNSaNVBsAT3BoqvTzx5i2NTKQ",
  "key8": "dV9Qi7DyhdWFfMzkNxh54iuL6nuEPhTzWGGoB9VHDvkZdpVQgaHFywcXNoWnZmkC19h3qi6AH7BDqGUgsSkfyzt",
  "key9": "UVEbJ97yVDfM56poPR5EM1YApM7k5UUqR3AfAyYMbj1xVaWepSz1s5BXt5B2Yh3Q33Q11Y6RQ5iVyPtWCcSNyEq",
  "key10": "28rHx2XWtNQdE9JyQ66A3jjHRmZxwgKmLQ7AKXuHRgCR2wjXLvNkHi4kjmtZvZMLV9GwC9kYDeJWmmFXySfE2eiH",
  "key11": "5k2mBhzRP2xJQg99juwYKJJ4Da3GjabP6qg1iGTmVQv44UDzjxFsV7Zz11aXdRaTJx6m1mTVdFzr2aMVgEwUZGPD",
  "key12": "3S3Q9zNhie23YS7w5b5uhzdzBs6JrS2mQedvVLKzeTcQoFXhUivJij6dnwRZTpfpR7aWNKZCbAiXSeNZK5dWfHat",
  "key13": "4rpC8eL64rhxC9CiToKAwys23mc6uuHMut3gn6QPVnSHeyJ4UxyfgPhGmbJNKYoKMMC25EuS2BUECBozUdEDbRRj",
  "key14": "5QCqyi7ztDsgUdQuy7F8D4YRx2WWumwQBhq9xmNo1KyzopRxhP4KsDEGKepPEJa1ygx1yfEck54SSQ16RfgNnsYW",
  "key15": "31MoezdHWzxGfRbBxxqa4UFNBGBNQj2PvdUVn5RuzLJwNv7HD2DmD56jeqg2FQVSDvLKJmc6KHDnPVH1fHQud4HJ",
  "key16": "41vFhBPjkeW62n6YSCmdpmjEw16LaycXsVL9zEo6VGiktrUDCGmdsULth5jPzuTRq2ybUiqmFYdPsQs4zcN2dMtC",
  "key17": "34CcLf5iSRwtwjJumGGTTex9HWLDkRihCdw79wdZwwECxZ9seZTa8GzeuNx6FJGamAsrf4pDckQVm3RBQbAFQ28c",
  "key18": "3KBbg4QnZMvzJa82CvDw6WLPbZ3C3eav4iRJVjamQjDcH1PW3nU7RQYgEwggDqgeX4ymUsN6kZWHUkLtvGt9iuyh",
  "key19": "5wNFZm3qX8n77VXwHK1gnNuUKxG6R7GwCsUKD2mpdUGR1VooiKs8LEHkrNu1g5m5NoSEjcZT5WisFDLPUWcgtLzZ",
  "key20": "2xJdzgphMeeY6ftckURd6dpfzQZVjqB9zRRms5ruCwZzq2cgf5VtXinufpVZz3N6c5q1tRJeFMUeq18hwUcXGNNt",
  "key21": "4a5gWk5vqkSTKFWmQ7SxrrVk8aYZuTBz45yodf6UA8gzfWeEtmD37cfY7vEDARSZv19EfvDrtfSb2D3Rh4ARKKhC",
  "key22": "32Ttqgok8YAfT3HydJfDcwbn36rnA5rcgxqvrwBKG2YxQdbyMXHynTTu4ZQTsouC13UGaa2oafQKfmv7Tm8sapWv",
  "key23": "2fc1QM1QoVXvCYtZa2Ara2GdoEu4ekPjaqnNtjqwvePrZkrhZkoKkK7FhkGzRVqFZe6Xxc4YJxn27cunkMMKU8rw",
  "key24": "1ieymX7ChrLSzWdKms6qtZSGymNgAnC23697RSbCr3gV9oFedxsiHVSxesfTJ4kFCjZ4x24yohsVSML5qbRsVVH",
  "key25": "3SyTostVvGhXDwkpVAFAf8UaYgWxn3aWSkRJvhB9H3EVfVKWreLHB8W2KmZ1ReNXnpAr6VAw2SZogWwHzZUUQBWR",
  "key26": "tbJzChyUSGMCZJ76sFX2cY4HSEgY6XPbZYeugtqxCgPCDCnbk4Sh4NTucs5J5x6tumEj5LJ8drpk6yYb926Pg2c",
  "key27": "5oocLmu7U6DSqQ9yk3Km9ctNACQErX3hjLahi9kY5tMEVR4tcjwhZuiy4bhCNyyRN8zhb8ANfD7eM7Z3AWZV8UDe",
  "key28": "3NBBPUfHvbMJmWBfZNGdDYCCqXgzUXJRvsny7D6X8dyxTuQnd8aRJkuj9QfWXBa2WCGhBMX428QQauE63wVJpELe",
  "key29": "KsCNSpyrDVQ2oh6xsmQQTHr57SxamUJ5RH2jAs1dMYmtTxHvdpkYgEmLYLipD75PwWpfvnCejV2TudfwGGaLS5Z",
  "key30": "3wNFuMXff9spre1u8XTn9b6XqWvZZoSNiXoSThkxMQHv629hfmnkEAdQCevRh4ijxXdLwTmKHdybZvjkuQmXuCuF",
  "key31": "asFKF1jQhG6onJVSSHMeYt4ursZsnPDLLkjK19Dokr8JeBCDKhnx8poqw4wb5StqEuTCKTtcU5ZTuyUvUDwxfTy",
  "key32": "HxbmtVwpDfxY9qWNoia96dDba93yz3rLzQ2hbGhZuukxDcVNGfH2wpCfo37MhzsEiwQcaWg5Z7KPbAmYMYwA9g4",
  "key33": "4p7A5LKQp3bBXc7kR63gogjhLExDbk6PkEHHy4ctgVyWWCnAWjUNZZCxHFy7c6KV9X1PAgSnfeb2TtZz5CqrzQPG",
  "key34": "mA9BGLSgjodqFtQRSNbgqFdvwDhgWhTXsRx4rvKfSjYiuTAuRo7uMtNjfdLkQuWmALHMjFCMSJikgLwwh4TN6Vm",
  "key35": "3dAHiVosWmVh5CPMvUPn41YrBm1nVDEUsJvjpG3XHCuJ1uAKMLvseG7PVuaD2dcRdsDMXyo9ak5kNJGzrPXfHHeh",
  "key36": "2Wh8qUwvJt4cJrM2y5uuBfM2Ea35MiCCKmi5hRvPFa21Hywr9r6VNhPEUMVVqsx7riAgQr81Txhvdat4GGNCZdXa"
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
