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
    "dt2wxNiekKodA7ShDoYhxFTzmCfi2mwoNnbqA5FpFoVLKtQENm9FqNjqQDAvL8nLBE5spFAL39iwF7ycFDAiTcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55FFuSEVsLoXh5LrRNcG5H97kCtus2WLJrSqcMPDMZ6fb7sQSEmcg6cckndqap7bHTcWuNdSF5kbJRjdWH4vThQp",
  "key1": "3hgJYRp9tEo7NizVqUpxZ8oFaXJCwha7Fg88yJ4XshLuPJ2rh5t1FJSaJbcgxS1RJ7fRZSDV8zdbGdyD6LkDv2tK",
  "key2": "4WHKNv6qqehaevhdHMahXysuSN7XNGkTwCs9NsGDKaTDJZHNktrjGbMXw2R719v9kri5uumkUCdeWLwLWXZjZdU6",
  "key3": "4EGZvc4hPuQXuYRY5qaitBDPGwuAvC3Kc9j2F17xP5ipXdP6LWd2gCUZFkXsJK43hWA7xJiX6D4Lmmyz5STDHdxQ",
  "key4": "2XzAeFMe61zeiqzuFzLtJxJA6U3LZcXiWYH89THrGmfDsE3k5ggiRfo2iQJeZ9ns5sVtgvk7fZn9gXmfaARFMy7H",
  "key5": "285MxeKaarjq1kG3Mba5jxh7pMhtajAnazhmqqky4Yp8GRqpXoEp3RQtBNUhYjKAekXS94g6SwwJhPyV7yxBsghS",
  "key6": "uzhnNM8onkPcic2tErpSC6KtHyazWyUjf1wYpFZ4au395c68sXLzXPYE7SoGx7AETVMWZejiXxqUuEaTUyNXVEt",
  "key7": "Xg8reBr1zLv6h2ESP8ctphD7bi6qqqNRudRWqrsXVQ3jsmUUnEnpZUw8qtmsAXi2XWXXn1nDAak4h9f1ypqu5Ms",
  "key8": "4EXT1zTGbDYF8oUg2fXjxsAD7RmuKkav2JsRBDXYSJ59iZeqJmT8zpyBFQ5KFmr5MTLkn1EEzd7jdeDwBF9zoxGv",
  "key9": "5GwfoH6xWYdoQDDSFCwrHDCF7rrhzn83GkoGkeeyJPnhgLaBUjhznQGTiexAYbgiJEdYPg99NSbDCj6euqPcBZoB",
  "key10": "489g7kdjbTs8BvGhvKwR1EqAEiiwFzQCoCBqLShJn3v81aWfUagQD9XRV9V89n27cCXABEV2xb33Grb4saQhLeES",
  "key11": "2oPQdTAAUzfHvek1qE6tGxQv3FJigvvwzhYUEmsk8jsgMNZ27nmN5rurB2j94spbqT73ZXgjVczqiLo4MbGpuKWX",
  "key12": "2x8bkg6vFrV56T8ktafVWznqgUH99pBUfuRFRzLYUHyBeqZzBGTm7WzJLHdKaHcy2nnqsjHqcUrnULBLDRY1tzmQ",
  "key13": "4j3fw7EL5mRiR4B2uDe26BPSNK8pNmzJ9bYLPaoVopbWWFQYKgWan9D4RSyP7XhUKiD1jY3xSB4kLaQi23LRMwn5",
  "key14": "5Pa4kbnx1D6WLFU5ZFPnvfkkZz4KsmwL7uxhCvjXvPeoiW8mgeKqcpFa2nNcNDUP17m6uPmyJ6WkampCMgxJPbcx",
  "key15": "5vPTbsDLwjLguMoEbzyBCg1oU5AoiBnv5b624wdJBT8NJMEcCCULa1teG5teadFmNfNrREe2gRZ3oSUhzUG4Nz3w",
  "key16": "35rbqquqKYm3uJCqK7BEXx4zf3tcCbG6duESgQ4WiPtNCG4y63CgSf86mozNXz4M3yQuNAbUfRe3a12Hebgw6dbW",
  "key17": "2SVLGPPQLhpP491bGKqxtdvDW8cqoFFWeHnB89umtaYAJqtjmiRrB9diF3cdTsRwHhtG9YeCCUFHSXAiPRVXWF9H",
  "key18": "1Z9qRLBRjPHieRHpWtZsvUY67zxH6cotBjryWXRZuihzvUUHBMvYQJrJPxaTXpHwFPZ5FDAmx1MHFYx8UrLf4P8",
  "key19": "4MJ4b5gEuUe7frLPt9BAAETnzMy6xhWKFZKMx9EmHTtQev8LBr2vdy2KGZNPuha4cmPJToAKeFBLrymvgeDe8cDw",
  "key20": "3BaknZmmuMU9W9Z25ozt8ywmDhPrn6LhDNobVnGBJKu3RPM8v5apemtAYHLHQzNTDEXzVPtpJoU4qqQkByJjiHHn",
  "key21": "CuquwZno3ba9up1Dv8gF9XbTKy8YqbYyENEsPUYuKRZJzwoPEJUPScmk3QwctMbgEX5fKLZbmfKD4dZtpcZDBdN",
  "key22": "37tePmu26t843vbF5sBdiQUgesncWyLb5NAq4yxoAnr4ZqQGLF1xKn8fmkGKoHVJg9TXQNx9GTNrSTsZv5JZDhMz",
  "key23": "49KwFw5sUDfa8pPWgyuHKBGNQkFnMvMFZmYMqWzVJrqVAeH488NxAKzTirL5nR2Y4PBXWAmqSTPGqsFG8z3uYNHD",
  "key24": "4TWWVs115bjKpXBdxfT8kquP3oz94A81uRoSyMWdRmuz5x3FeGwHiAcqSUWujGPQPJaUGr2Jnu8RZHFAHqkV7rET",
  "key25": "2LNzGFrLQLibc1yFMudkJKgo1tQWz1c7kRGJYycPqipRNBEGJ4fJ5mczaiYupomtcyQxfwtW1KvJLDGCaPxxTgDA",
  "key26": "5FzSmPY87D1UADwALW5pMDDmkxms7kaihvh7MNGGRoEgnWwW2kLNYtEs3FTn36W7GkAEgzUVnSGQjKrB7udRSMxN",
  "key27": "kVy8PX4RP5WzVqXdjBMckifLbYLSPX6KDahKhTPz463GyttNMntvqrn1jczHAqGyoGwCT5YMgum8TmXDSjam1yy",
  "key28": "52Wdng5j5v1FY43xoPQB9Ef97V17qBWfpQV8nzmtKCpdeZvsDTPFsLbzh7Fim4dKZ4GwYkQ8FiSLv6y2AXXaiwSc",
  "key29": "2wDG1X1iD4c4vP1tvwP7Uf6rbzVFBRPdMncCamn4CUbH58KGpfE4cSYKjAikhhGmk5PL6RdHkXvdXEd3qQUTp4gV",
  "key30": "3Cuv5qu9tK2wCo6UBq2QrS8UbbMGr5ghQj3EerWdCBM2E1tcDYPJQwToWj5t1r5jWvcEDTi1qYoFau3rTNviQLNy",
  "key31": "5RgS2H7chzD1oUd6arf9VC24JbPexws7JG35x1RaA3KqirQFL3D6mH62pRAMs6tiVP9cZze8DdweuxcSte6E9vfw",
  "key32": "3YVwUMqPm8PEFNKdPDzt7aXCUxQY6PQpTVBhnuuzGYHCvaTLp4hUzuBvmhfbP4sYjzZyK4EBruMdxdxPi93w99Jw",
  "key33": "4ZTRnQYvsrgz1VG4RqS5sphN17Sd16b9uPHKL47npAEdY6Mh8zNd3iztNkZmnvLaLLWkvVxvScygAfD4bx4vrrW5",
  "key34": "3DcCM4j8pzizbXP137oTRtpqCodoGDXbycy6vFGnDNkhmj9xC6MroufA2GeRd8nZMPgw91i5HbjSTSGppM9MSfg9",
  "key35": "4wgn85itKZuESugkegnL6KxGdPvJbuBsvAeYjiYodrr2evVziKWrLFmqXJgwELaBatEvFeZhk6vQwqTfSvNLmf5U",
  "key36": "rPzVWdwC5pE1CcPnyD2KzEg7bJLUjqDuzTPANe7BjaPDqJVN9b47xU4hWqXPLN5jCEQpxovTCcfD48y7kwy4CxQ",
  "key37": "4c8wgvV7uQbC6QpwnBMDYCfFmSM3EtTGfGAWoBm3ExCTJ1ZSSvcB9VTAJRaQwjJWRDe1TUik5YSzXVrg5TmysdZ9",
  "key38": "5WFJdRHxTLFg83WztN1kybekyab4Q3JKYHVzD8BnPJG5qFRjmmu4uKgfxcnY9FwVKuiptLvguuVSqJJAAJGyMm9h",
  "key39": "35Uymx39WDaSoWWajhPNMwp8ZEJZhZBnGjrX4NKH4tKiGsVioF2Tt7Bf8zFhVKAdRxUuAAJGMknZrSEmMzV8Y3gp"
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
