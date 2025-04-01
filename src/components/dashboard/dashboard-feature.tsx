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
    "cLyderrt5xe1xR9tKtvXQ3hr2hwVMgRqAbMDPFz2412qTnbaY2qKJyedvtYpjVL945M4Pi9sufMdVzmmb1pf3sT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MGzyan2sURciriDhqvW2fGBAVM56DYTaQ5jqrGQUtPsxHdAks592bZxTkPnzP3hMyxXKMJkkryWfaDizbnTSFVV",
  "key1": "5zBn2JRK4RZgS58Aif4UHpiz4T2BFintjs11cUHLzSFpmLVMFyfBei5a8otwDBfGwy9ZzjGx2LVztLbLQJf3d5L9",
  "key2": "2Hi13zVG11iKAxsjMS536n19SSGmoUsFJJ9q1HHNt3BSiyjzoUcjinrgPw3Jc873HNZuH3YkKJtdZKUnwFDRWo5P",
  "key3": "4oSX9ovidUtC1ERZWvesuqUuZnw9xNdoPfdL5gNDVxhVEAgNhKBBEe9YqdghrGeriDzqccXbsRV6pBfxBDGij82",
  "key4": "3S4RSGDDbtqDmzR5ugATSvDGbRapQbG13BC6HURimbL8LGDAHU1hHo1ARbNZPbrJhjENsUhHcfafigx1nQMyBzBg",
  "key5": "5vjrqvDCF9jHKDEVcAaaAtGXB7Kde39P7uxwW37G82LDZ75LRVKsbgcsd7h9A7bYbUnQ3trHv7mSDkAkyoQH2YS5",
  "key6": "4oUJqBJsmdbfpFYc3gKtwfqLXYdQSr1CzdNcm9izbbbRxiLywBKpRMfLP5ULm34rWdMA21vh1SSmuvZyNRJLw1gM",
  "key7": "v4NGkH8j25ZVnUA6yMmAaiGu42D5ruibg3F7dm1XLxyXVsuG8KbwYrpEMEyZKJPbtTrtQmeiNYejLriJC8jjsu5",
  "key8": "4zgRQyo3vYTbB8zT91cAfNTiyoo7Hu87hC9QqUguU7cmT18r97Ne29efyF7qyWvBSnYFPPKTy6A3zfEeKyRtL2tB",
  "key9": "2wVxMjxpNCpZPebZV2k2ZB5wFfsQzLDmA9ZEkeP9kVR8vs6JC9WLtiRfyXnBZfWGBRB39YKuV43kt9q4vKe7kT98",
  "key10": "3L3uHt9XQB8wuof4aaqKsdTnJxb3ikdLSYaz5LFNuKNTX6e525PJDTxiJTqMYkHYL4nLFEfqptqg7MQmuxWVxzp2",
  "key11": "48MzXaRmQDuFFY8MwyYg8p9ABwCtU8c8cCzfqUysPnuESqY1sKWcsMuocwoxQ7wvRgKYnPxuUEN8gRknuLUceabT",
  "key12": "EHhKLGyp6oNvEfNRLRkitF44roT1LsMkDzTqWpHTJfcEygut9V3jrdhuuZA7sSyS7GhrQSpNzxRzyrnKjnF7Gzj",
  "key13": "2KzFYJZiWEBtbfrBvPXKvsFZtuiVmDKuc93Ds5MCLXpoHE4yn8yWZteont7MefcLPYVBu4LTJe8eJb2JLACa925X",
  "key14": "2GEzY3ihYChnqcAhcrifjZ382xTubpbykue24Jk1zoTfGsFU7VSv3msVdnvxcVKS2QgCfArb92uLi8bHuERZGGqa",
  "key15": "5uq4eB17Vapbjo37BHqN615KwCwo5K3sqVX4ar6gqnhsi4PfwmRLPaCB4tVeYHQh79Y4p97hAm7NdrKgFmFmagLZ",
  "key16": "vJCzrGGfik6ciXFASNYyqum6wZTGByPxZhWQStQbGwGFsMUzT1zYSRiYSDix7dQEG1WaUymvhmr7R2T1nQ2J6aZ",
  "key17": "5Nixh2t1pBWRHDziMUPjFDo2ikFQApAD7aSecZNX33VXxUQALAgPVRbMQyrPQPwbKS7qqdfXWWVq1C5wen24WbBL",
  "key18": "3NANXpDXFstWxGzEWEATh8mc5ZcfNAYyzG7TkDzA524zoQk9WgicSh5Y28czUZKUHZCxQ9mFLMKE7eCLDgZZiUDj",
  "key19": "2scEgUkNoKQ1oYadfvWu4rnUNdBi54afnmTfbN2Re5WA6tLNtFVg6Fhx8MkRnhjgdUVKvB8ZLEdbiiPhHzysEx3S",
  "key20": "43xSKEccpQ54m3cHJkws81G2S4yCo3h8T8PYaf3XKbymQJFRFekxgRXCED9YVuYx31FTG65Ydgp2AbYVpcgHsg2j",
  "key21": "5rdEcxpBv6KTA6H5q37s8Udo8wnYSX4RdhUK617ohjf1ymDFx4vhSeBTCq4woxfyA2u24BMRXQJrrztGp1eeqxta",
  "key22": "3BFi7xmBTinGRSu4WAyprwb5MvkSs8CyMgcSTKkPLPEo47Gwy25WcqYXZRS8DKvkDPJ2zR97FqJ95AS4TT6G1KZX",
  "key23": "rgAbFhTWZkUYGQgHUozUUgxZAd7Sz7R5W5Syq83xLVZWysdt7VPHSwRUTt4LfnjiQRKmb1NHqGLRWwKUMUhSCnb",
  "key24": "3CdUpEC8v6P5TVHWnp8Vaop8zLw4qukVCdQ9fW6pcnp1F2LuxpoBBaNK1BH8tG2VX3XwX8NrDxA1zAD8a2Gd6mvh",
  "key25": "56vZQyDMQzBJHZdfW8HwcLvNZEkPVDMTba4A2QTChKgp4xQhDXagXJ7SY6xo24iCPa5k8C5KonKGX9y8o35EokAW",
  "key26": "5RFNyeJSKJDzZdc1AZ5mq9ojPooGnmKbgapBpoFxAbZ5ACAtdn21uMmJ9TtVzsWE8XR2SUCnH1oSE2ErjNPnKWKf",
  "key27": "4UeHxQTtsQa8oUphqo2aCVjtvdpq1UiQMzXkWsfvBhb7EW2gunSeAHMP3eg9rNmRuPCERyBazoc9Znx7RhiKagjX",
  "key28": "5uPXCgiVZQr39TnnVK37LWjkzjkbs3o5eqGPv2wu3m57awpwFJuMpi9EmdkSKonMxRe4APfyrS7YVx4AHPswRBgu",
  "key29": "EmxmXvJoMhtXUYj41bqqkihVwKGfoBX5YDGjRggaPWXaDctrZx5tBwHie44gQC7TohEH8vtV7fikR3x37bJdBvi",
  "key30": "4eErLihVageqPcN2fmNmrzCmXjFAUmXNKLDUtEUh731xd5Ym1NfheDLCfMVv3AWso9cFZf8c1qs92XExNJwTh2W5",
  "key31": "4FaQ3Gk1nfwGD9vfiLBoWWNs8Tb95ao1aqN7Xw75iEiFjWWFZ5afx43uqMxWMCowz4aDRxZkKPYQ4HRUDAZWtQYe",
  "key32": "2dFVRY247XvsjY8Cn2Fmkq99FSER2mvBvc6d6JofExzFFUKBpty33bubGojm2fLnrGniMk1HSZR9vLU1pjYPYRTu",
  "key33": "2uhzMvUsTqYBpHLvXivAgp9eYzzZVKcAXYKDsWHB4zwhLHMVwYkQCNLeAgne3mTxJkfUrQMBajPw8FY3pY6unLjk",
  "key34": "56k7qmvCaF9MPTh2Tk14UKy6HikztWBWZEBxWKMsWJN6hmeoixj3omEL9qAsczZqrgVGwzRcfdqMFYKKx7r8FC8v",
  "key35": "2dZLhPdh6CStKbfp7ZSXqzBE9kPfarSKvz9eNhcwGcHNSUf2pZMSuSnMnwdXdkmotSMCN1of2Af13V39N5cmnjBM",
  "key36": "5PMHQDWJ3DYxqJXH2PsGZmJfNwBqXgYdZsjNUH42cqv8q9Vo76rz4o8RkbvQDyeFozDhpRoxG7aoxa4FwkbHaDw9",
  "key37": "3DQrJuFgeA9C74kd29573VoMbq9a8VrdPW4yFCw5EcxStoNAcC223mdH7Pwq335SnWciDUvWdY8EiaHiGikrA23a",
  "key38": "5hazXQQpeRvBrmeXmcZNV7nFBFskGaS7t8Tu6HaFuCVfwUXGPTrNk9suj8hHKEpzY3XQ6ai3EkMaJ9g1yWffDhvD",
  "key39": "3Rt5uSnoNtXRcHyNbJedyiRW1E1uU2Kzvy6Cd7CAtBWAf6buegisxiaBgwEPozdE4x4ycHiBMvzz1R2ecZyZXQmg",
  "key40": "2Fq8A2uWe72sLDvo7g6QDWW7MTJjhpKh4146rkRAWuZeAeYkEeWstNaaxVefNaHfM1HVL3s5ffA4NEhdWUg2ufNc",
  "key41": "2VDuUGsGS1VXx5ph1harwTNqeM5C1QxJcghF3yH8tZ3wx83HsVPnQoaQX4k51GknHWwq3xqG7Mb58L869oQFHAaw",
  "key42": "GQfM3zDDkEChcCvY8azTmBHrBHfu3yMZF8U5D6JbZFNGTf478kG7VvRJB3BWaUHSDiaGJ8KBp25CJNtTKU2c4fS"
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
