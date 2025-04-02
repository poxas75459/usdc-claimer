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
    "214npvpoQ1cAXzMnHotwWaYhRiwkUFCnhPe4KeHBk5p2LSLnZ1csfAig2koVkwVYJfrPSYitgCAjLPoxx5gz6BEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Muu8drsgtcqo5NunEtD2VMBREbDsLMxh5puqNvYAqyhomzwLd2p8EeJK62WbaaqmZKF7ovBRMF4vU3yG11i133M",
  "key1": "36v1yZFJabsbE6o3btvBEakyfFYRU4i28cCAwUyyGPVe9SB2WJkG9QMxbHR8JW7sW11xn121yKDpdbCeXnz7bx6h",
  "key2": "N5PjwKXrH7ZE4e6ZsacM66qVKw8Xq7RqYh7czDoLGjxK52znmccNWDLSpRzpZbP9CwzH77g7LHEcjxWnrSgci7u",
  "key3": "5wuwaRkQFRYKPPYZuCQUuukEThnrCEgzFw3F7nz34KmEAuqkhDMXbmYsqSoppWWUAuutxKRVDdmSTHJtCf652U66",
  "key4": "39GGTmH5Wwv8unhwNY2Bm8FyBehJC757fBZt7Pj6PYanzzSbejM3oFpcJw3RfwG2kbf8fRL7LhSkcygQYsnyEhna",
  "key5": "5EBjpM9kP9ovrbqzWydvu65Gu1f6S2GPCfndgvU71uadtAzcEBTArL3RJcQEwiEKKdBno6gFEzd5x8m63dXkvob4",
  "key6": "9CA2C2otoRjC7JGDg4h8uarXAieTv32UsVb7XGkeK3z74N5BinFDPiSq83jBxye97DMpqVSnTL82LNQv3TcgKUY",
  "key7": "pbGbjfRzj6xzrBKE7FRwHBLCACHbNAszqmwqqiE416nKY8eZm9Mx3YWuYoTEnkUWEQJ5Z4xyxZ8bhAsewV3NHpx",
  "key8": "2o6UjETcdzoNetAfhfinghov5qFPgqJ68jTjnTavV7NpnFBprQZiAinPJM53qaFw84xV7EqjurgNxcWW7SFXNXWx",
  "key9": "4z6DB7LGCveQ2NUMizrhMg9crwbz1cAtmBazgbVBV9zwi9BMsmvtvonYZrEJHuHvUXfDiSpyoPbVCqsC34F9mVyK",
  "key10": "XUL6xsftRNDNTG6ucAAxZQcfjukQ51s8JHzb3YxcDPia5RriYHvDz1MAQg5vDQMwKQqZEmxgFCuFJMRhWktK5pB",
  "key11": "AW37m5Nz223BiRUiWVZyk8JgkaEa1UgdPrpK4r4XBbjEFPg5FXX8cXJ4FYVAAK53BwWxXUbUTnB7TzBaVLwe7d9",
  "key12": "WaqiTRchxGoFdp2sBLmTLKqYMhccBhnXZWptpVWWbcB96bqcCZrDs89SuieMQLEwaW1HAB2XJcb7b9dVhJE4Rw9",
  "key13": "3HNdN7J1tAeJ62r3Mm83WHddsJCL29sba6EKibCLEftAHUJt19X61KjpmPpfdjqgaHUmwgHeXNSaA3jbw34GAxyr",
  "key14": "339eCp6PcegqmkUbg1mmTpoLCdKv7RQYbuVxdKARfnC8BRdmGPsuf1Zn1mqKUaeJPnHnsLL9sVgabVbTwfS6w47A",
  "key15": "42NctrBhaDts65DuDRP4VyuHDhBdBP3saWmfCZhr2howDfTeyEc4TpyN4y8s8UN2ypFXR56T1yoAqg6ghQMGXhRA",
  "key16": "4WEvwzjezZiCxwnsmtxEZq16xYJ39rjBUiRazKf7sEv61sVWXyo9xz9WgJQiSXrcWKTCMiRGj6Hw91GpKBD2TtY8",
  "key17": "2FR5u9Yzvw5HcLDsVyUaCFd9M5YFHEiqxq48YBDvweR1ykh4PddeqgPmePaFkxW4T3PEEWqseDurGpu16sy6opib",
  "key18": "5NKjBAMyfK1tX8im1rNyebmVTkUwZyFnd5MiZz91eRFcSfrbi9SZCr8NV3xpcmm6Yq4XS44ivfpDubgg2vN1oWwJ",
  "key19": "nQJyEuWW3ve7aF8qQ2F3wH7BnB6v7pSkHhVhguY3K3L9bf3714ek5rsEhntUNjEhFko8HTDfFJEmr4DanSNkgxV",
  "key20": "3huKpQQptto6ctrYqvDonsWZKLNXsRU9SEwmKUjpy5fqu8dnQxrH98Sudia9TGgLwPsspU8P9oPLZQd12TzF1RGF",
  "key21": "2UW4trVPrhTus52zUdDgLt8RedwrEHPEQHidBaHSo6L6HZZeX1ikU75zjykXwouFk5ddPG144B9t2rSyExxzztb8",
  "key22": "2Jy1AbDKYAjE6oDCdMEkH5W82wZRfo3zLikQB8fufjiJB629g4BN8twY44xrkyt71Z5DYRNf7tU1XRoyPs6RGuug",
  "key23": "4F81NH4EqNsRajixWeUeLZzfjvkZSxZn8R73DFRZdKjXoJNERqVjAvnwA1fUx9y3xRfatDRWuGjY1uzmE8UvV5xt",
  "key24": "2Bivs7rqje6wtjU66g4r7j52xbkU9vY7RFNDbf4EEcLx3cxe7kLxUisntaFkCLSCKEvohJieMVa4MgADSdheXAaM",
  "key25": "4gRoR3573TMDr6FDDcJcgrmkZYUcjBQhrtRGDs1nymUnPfYFJXwFToT3bSbjk6SJBaNWS8zKXAqFotA4ZVBxQdM2",
  "key26": "VQhwciYXgDoM6HFebhnaNxhKhb1Jj4Ss4R5izerucK5CyarpZ3M18PEKXKvD8vkiP6qsPe98PNrP8hgR375K68s",
  "key27": "55ey35HsRsrjEaSq9hZjVchnnsnkdfGrCq4vWUs8M5ACYvNoN1whsmnLepQi8ZazdFxHeiWHdTSBF7oULwNt6ffc",
  "key28": "2ZUiWnT1M6KcKpnpC3kmv4fxSgMruwQ4RpyfyatNJ7qK1eBwHs2W6kP5mm8MEZMxGUEw1WvyMKizgtSbmLZZjH9p",
  "key29": "p7oAVnhVdrwHZxdTuePUjS4Y26ncwNNEr8ffdF9jvw3rL1muhWJbg7jmFAjijnFXr5p89GktaV2X8U9J14HiJeV",
  "key30": "46ebDFzo4EexxCd8hjeYd3DGdGVPZ2hkg4thAj1YrWLjb3pUztKfuuhKNtX2WNH7RvA2sH3ijgox62JyZW5qJzeA",
  "key31": "4mxHcGTKBn4LyZ4uL2LBEYck4xnGDCo9nrynhZNj6FNHHYptgWawJTVF6k83XfpkfviLu5LMcRhU4GD3vgdBxqv1"
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
