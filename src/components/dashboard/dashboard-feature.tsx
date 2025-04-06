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
    "2dpzgvpJEXQT8BBBCMbdsAKKXYUNyeHd5myyDCyEfKwSUDd4XyPuaYiiFnaXcrFYkD5uwS578tQ7dyXq56ZLc4ii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X1mtsaW7LujkaED3LCpCbxNzzrYWpC5oQZNgRcoZ2jGwrDsB2b6GnkNbwXA7zdhB9LnyLiFroVPSMMDPjhGj6Tn",
  "key1": "3Vh6DfPbmEBucaVZYXkJdbqmAkLWSSB3Hs82N7nNo56XSWQvqVkm1w7ApZapENijFoMzSzcMHEmaLP4tJWZLr1v",
  "key2": "kPZCW2kCA8jgPZc5vg6CMpD3tQgZGLis6NoUGMAGf5BmAEsfTKFi8HJhRqdTHdd1UZ8nwQVNhFvLysE1XsfZMX7",
  "key3": "5KwFFhvebhdz9qR1hubUhXvCTDxdibtYj7uvNGtN2cZTcsKpWcu9kFy1yoV2B8s42ppkbTwvhyVkSLuH52WRJPQL",
  "key4": "5tRxHo5MWZHPBuk7YVTxuT3pQ23dijC3atYFTJQeMNvkFfGkcD87YCp1HXX1CCjHHciMxn2tWjpvfaWmtYB41jkN",
  "key5": "5EKoPXRBuydqqzur4FPP8mYW9hhGizJHLam9Ky1bhcpiiq697Hj4mZrmJivL88HSaCrkFpMKys8nNgE4GEsgbcYh",
  "key6": "iiSDka77JyCPSrbHhXU3tSt8qGm75qDA11AsqH6hsXiH3p6SzJj5J6SQNJi1Tfyb2FQRCU1VcpwZCe7ihCFcFag",
  "key7": "22qfAavGHj8cT8xSdniAzqr6FFQdk91u3dVmFcLmjr2d39wxYu6w8JABxA6tHPzT7B8JeWyuXCSzX2wriEcVoDSK",
  "key8": "4r6MdfuhRUQec6ZpfqLgrBCxmeBBp9goczTAUz5pqaCyXvrVYnHfkHUpwbWxkFubB1S2qVxjcRgWEhEA6BifcsQW",
  "key9": "iMXCsxizC85vKYuyJnTz4mybW8XY87Em8HMLdmxspASEqQTpqxeQxPQ47Dr6xh2yexqyR8vKwWy4AUWpHmaW99Q",
  "key10": "5QFRwq7qMzaEk81NzMnh4C2HtEUpH8cknMgp2t9kDd7HFgu5Ff4Geqkxrw6biTjcFMaz8rCPadFf9SdAar97mKF8",
  "key11": "5a2eW1NFZFh3JQw6ydwwfDTmMruXSsrKcMiY5WQ9wLzx7J2XJ8pyAg12sx6NLvq68i78CD9M5Qp7rXsz6tUtFL4m",
  "key12": "46kG6c8zpZrGkXdH6x5DjR1ercNbvBg79FgyGH8cKiJsDyEEC6RBZbbteEnCRnphuEnxpfRTY1WrKiGTDj5PwkEb",
  "key13": "4kdX2nWnz7L3qLm62sgNBBDLVtHtoTtv6LRnJhZ47GoAmqLs12zH44QryTYsEPC17ohGM7ojJ11sC4vrB7S7kNYu",
  "key14": "3d5LjJUXAdcfrDHX7TvLipD3Ng7dPgfgnHU45cVPYNFcjsiY1ajd4UvWR94X53s6vG3GaotFxgKwrrGKy2oiQiw9",
  "key15": "2hWx8oDebHfxwgtfTAwYPcxUaY1oEaZNrhoqQvrNSCdQ51osWh6yQWjnYeEycALLQwTQDECo3Le4pUQ8322C3PZU",
  "key16": "3KvRrKgxbJ6cS5MkSXBfTZ6uCQL9K9jWGrtfXmViBxMJy3YnHdSHP6AuaHDQ6dQ2JiAkphq2YUUTD82qVHAcPpgW",
  "key17": "3Ng1DEqABGwpqYyehKHR2vgXqKnx1TKVb5Sm7Zm5JZDtKZSde11fYB5RgCyJL1f6YETMrkZUXC8EF2mA7BXLWUWZ",
  "key18": "5UUb4TpfVqMhGnG8JGWsdgCRScoTEcMj38QmA4k8DJ2Y8FDtmCtXBEb9S3v2x4rs73Jubypo7rmiUSbJjTrpBdnX",
  "key19": "vsFvTxNfotLUhdCCjCj3uxiTidmmBVjDrGEE4w3puNG54opkhk38C8vQMVj299zgk92CJsoZLeWoM7qz5J3Wiio",
  "key20": "2zc1GkeJuhh84H9M9eU4CUJxwo4NeMVbdT8CW8xEBzYyUHqCj8psFpuKgVizdaU5HuBNFJVLbFNJj37kdLYaakes",
  "key21": "3rrZrzSNDeXrhYS3bZ3oorpqqVPaEEvnwDaENyAHbh2RDU6Pr8nFSZFAB8NDmkibbMHPMkSLbbptewCQkF9dD8Cw",
  "key22": "2FPJFAgyt8Wx5MEV7n2uTFZtJctX6JHni5Ai25cZLfmGWrhTw5EAkAmYxsv4wUnDrn9bMoFrQpoHtwZ9Nu8ekwEW",
  "key23": "2TygyXwrDAZVyFbT4urWyUhbSnUwHZfSFkMF3JLLGnrYicwvnc4mhaUxzi6z3MbXiqSsDeV8gdWC1v5TBrp1J86H",
  "key24": "5Jb2QfnhE7apE8ayXNoJ18pXVFFwsWJABkWoAFngv7LSqdvSaaXz7XvghoYuudFexFHrWyhGmeqkETotSitsQpU6",
  "key25": "3zwoQpFbjxQMDwm7N8z5DiXk3qGTQP5CJpR9PUQeezQgVno4dkeg2qF7pedLFd2HoYWN3YLWtsdLSDVaRxnEV6X9",
  "key26": "5MXe8vT2dWGagSTgpNh28Z5bGa4WUib576kNq2AFnKbZNumMF96s7CewzhkKVNkEABkUTNSn3iz3THXC8ioVm3hm",
  "key27": "LhPmq1vn41STSG42aMXtqNxajnmda94mDPX8SwshFrTAcJTW9PWc37HHBP1nnDnv692dqHhLMEM31rHuSS9zXZw",
  "key28": "4gRwXxy7d9MYkmhHQaxmFmLwb6Vgr9zNYYfLHTgDSUafZGHaRRRYVYaUJBKNegFguuS4FTwuaxXh4unvoxKMdRKs",
  "key29": "a2dCqaZo2FXSAfWEKgC9U8BLc4b6g16vcWkgUZVzeyreBSa8wgarpxvAWD7nPoLGnkuWYB6rpUMdEu6Ex6Hu7fL",
  "key30": "3iUeyQzFcHtE1CGEvBPqQ9j1aYk4BYmTmJFUvWoUD2QSNMfEKF9ncAT3SEGiUrd4XWYyJqLvWbpPdWeVsxnQckg9",
  "key31": "3sh4U3gMKWBbsW83HFfNSDLLLfoRWPwVt5CyNMB9yqfV3XzdJB4hwLWjQSBcskup2E4P2f1yuQz7PR98tH1g9nvZ",
  "key32": "3LMs4ZEwcTxRnr9kpWkUvtFXsCXH25cbmwaGYAtWkVKik3j93hV6VdDMk2eH3d9dTbz4S6Qta2nn7vKUtXcQayqg",
  "key33": "LQza8t6MgTJC1jpDKmwaowHYwgMMnHMw26TUCK31Hfodzy1vwnkvEs2Qkri4Xp9oarxeJMYat2iZ3RTUzknfqUW",
  "key34": "4yKuiBVEKvwRdUbrW5rQGySy7QxgYHqEmETazDj38Dm1WsEZP9CwNh8yPz7VjfZ4qqczwAkqMKUbja56JGzb38oF",
  "key35": "3m9iNkQrwoFYnyt41c3jMXLw9JqEqFFF142SFDJfEs7x5CLVBx9dhoCvETHxiUf6M8H8GT5SyiK3TTq1TtaX7eqY",
  "key36": "4NDP4eEyMC7s3WJVHXUXE8EwEwz4mBuU4sxC6or32Z94VaCEVsW6isV2E9jV2ggP5abnxiLfUarw3m48xzmvCFB5"
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
