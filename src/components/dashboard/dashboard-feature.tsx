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
    "2rXiL6wvHKuYZHDjftDoJgCdr8G34KDTrCxAZoXmu7ykERNSwweFQ5ppKH5ErGWwGA2NcBF3TxdZX8PfAN5dLfph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdtq3curQe1qYxx2ebMtTXxtXnC9zNikyxsKgjPde64QEGfhakjSBneFY8ehzG2XUJHD3gZEU7DuZzhNtvBtuy3",
  "key1": "2NecoD6sjB1UEReziPCmNXn61GZtRthtXw3XHMVzCKnzktLZypcD6hXcoVoWfMPb2YzhDPGVoyME7BibbUjjpvpz",
  "key2": "sZEKAXGUeVGFaTFFsMGiBSHMWNYXrvghcBAKZ45Mu5L96wbz7fswQ8Ea6QbCtXyWG2CqvxRsN8cdJ18wFUhh1wK",
  "key3": "3X5XX6j2UwrXgpCEVNGXY2au65TXcvnBwRtmSMKcLxo8CZCvAXJzGWX79CGddx9kZNGMLH5JiSJ3GcDbpV5vB5vG",
  "key4": "5eRsivUdefjFSdQVTHL9uJcgCMN6ouV16ppY3ojB4gXmFwvMdX5EULBUJbAaerroMAm2UJdHVdfvUJ1pSyDAw1Fi",
  "key5": "48co3J7R9Qtucz35XtjTAm5Te2QFmsMkB96ueanzL7WEV7NtwdjUhprY2qcFG6wPhegaqCzPkdM9WuoLUye1qY7V",
  "key6": "5gq8Ee7HA3dBfires6ekDmEu8dV5ZM8tZWjM2vG9gEdmAEP5FipNGVm5m6SbiaLDrjz5ZRtuW1UAf2ZFfzgRWCkZ",
  "key7": "2ahVnQTgdADhmcayc89vUT6miwmU938b7TE1PzS31MvZ7Rcj9V3f3wVzxLPvPmbtaZCAwz9SawWHEFuYTcFc2CWr",
  "key8": "5HGSk34KWiGgvBydLAjQvJ4KREEEhS9et2861qV78QPxh8B1yVJfX5CDJeKR4auY2FGQ87buB3swyHmKaor34EGr",
  "key9": "5yPbYzdvPNkAvBmyffRdtjNNV5adDUK3dD6x8f9WspVc71FdkngqDknYNTZ7orikyxmyQ3sH67V6dMB8vTJfxALE",
  "key10": "579caJNPWJgsBPXPygAsfoUqyMwJWGZ7x28iAivNbpefFkkgp91qJn3WeVKUhKxCdFJkzzJLUxcBCUpgVcHuQJt7",
  "key11": "3dLAyJucPaaARMHizCS3yaTR5oQ15RaKMxXxE2SPHzA7mVEuWk5uftmM2K2cd7RyovxvGNF8HQ1w94DQcfiGByUL",
  "key12": "45qwNWf5JfMN7yA1RHrFL61d6UKpLVm1UEGAeGRTkFeyqid8NHD2MSzvET9t2zg9UYJ675ReqxnSU26rXGnBYCsi",
  "key13": "2Go1NqNXYYrLXQdqN74bdFCBPK2FkkxeSNkWhYFDC7GsKmyZce9arowLFExF2B8pHwVxBV7vCZHvfN9yifMg1yoV",
  "key14": "51uPzRmRvX6EUGWF8idJeXvWAf8tR6Lsdj4cnBot1BxhLn5S7gwCqXEexMqEqcUMYVwTgscUTN5oXE3wwZe2R93x",
  "key15": "62aexH8TiqpKhmhw1XPYyynf3p9GodnBrwsntq9raiFvHCUnR7gXrx7PwqyMpXVbrX2sg8n9iLNuJKV6fMQQNYSR",
  "key16": "1XFtgyBz7YkdGzjmRDJytV7MxeM41NPmDLzW5nBqqbWb2UfBxetfzWSargMVm7RXRfUSj273yQhm5BGwjtJT6eC",
  "key17": "66dBQiHjtmRvS85sjTYfhUCKVtPxU1ZTGJEKZ91K7r3kpWGKhhfRdcRyuwJ47r6ZTxFQ8Zs2xdvCRdJB8sYBmf9c",
  "key18": "2Yni5im6KuYhAeCacMYNhrhPyiCNFiFvUj7jxZrf8CtWjFBhfNyfA8isUuBgnnTophtDFt56gFqf392XLWLSCdfC",
  "key19": "2bzyDe8DMceVa1d3XDu4qPu4Q5CTZyjDRKhprXWF9aoWCsUeHK9qwjmwxGhsCe3mVik1PMZZ2qGkLexLGgV8t9fK",
  "key20": "2xAjkRpZdPdDupakP7JRAvLZ6sLheuspgRCVhurXabFoYMvGtAuEyBS4Z9bfqJfPqHneU26wxWjaMjgFS8odnxED",
  "key21": "44Ni28ZPASL6rvJWbzUKSGZbg8hDMa5izgLGHY9MZFE1j69D7nf2TbuxAG79GpowZU1ebLttxdJq99kciyFLcWS1",
  "key22": "4xBvftHFAd2nYiKZ3JRvByfTHho7wanqJ5noBg6EjQghZk5D33w2rCygDmGpj9qzYxKVpdNMVFkzr3EuH7k8W9j",
  "key23": "5icmqrXXHLH3MApBP6gEYRigsyzDxNwyotLB6JdpEWRTi8KMFTEV5hLchf9VR18s8GFVocvd7wBGhZK84322ntBj",
  "key24": "5xYYPAvfGd2Jgb9QwzFpm1GcfbvnxmcUkn91M1Zg9apNXaZrXg48umZ5yShZLHQo3Qq4KjBRYVhV9R6rjUuVWw9n",
  "key25": "Smxo8ZW3YkdLJGE74hPaJa6WXYyuVKNrXsPCywWVei9ZsPrfYRBPzdCdBxVoD9vRJxDaas7iypkFe4BKaoTNf9Q",
  "key26": "2RhoJsx3JXmrLjzLiBeq7REPj6gQoLvHPzL83Edb5FnKLYp1Gmzz3RNCkBGfYtY2Zx9Sdops1YfBWstZqTojqsDe",
  "key27": "4Jbm8knksimek4X29YW1VAYicsDfNXmPJabgFqaG5tSDaDaMvnvnZxnpFc8Bj9757RujMnxC2iEzAuTx6dY24XyK",
  "key28": "3Liw8QdibeyFhhzuXMhJsp5M5P4q1VkwnmR8Kwg6RZMXeV3xvYezoyHEjqkWJ7qs5Yk2U6YrvYHcM6jC5dCBLiQ5",
  "key29": "4uodZkTn9mmTfX8ZjVdWvTff3jDN7v2MLDK5X7P2gMj3bb72rYEpHgkVTtR9x1oeeCjehdKPtwqFzbyg75VkhuoB",
  "key30": "3fUtN6kESi3xfqH53BA2t4rdbbmcxmMQ5k9cFrPiWF247pBnoLs2Zi55gck1eBg9iNat2wmWPyuqf9T5U8PdJGZc",
  "key31": "2RvtGqJaYEgSBojcdZFA1ndYsMLfG5YnGtRk9wVcfVpiJK7a2g6UV18iHnD977D9ywTVFb43EnGXX79Zr8NuLQrw",
  "key32": "2FiumG4q2TMTxSB1Ry9DdFiHqJpocGKRh3mvbR858C4BXqZE4foXqDxiWJ7ruwiEjCgL7x7Af9EYZBmQJSuxjnoz",
  "key33": "4ue2t9fxaKcRhmoi3DV8C1p1k5zqUzdVcg14aUHUwvfygLugbrtr6FyG73yEopJ1Pjeq9Ss3DzjUa5uvaBvhsqTF",
  "key34": "4HEKyTnvF8zeGaD5rhoeUnoUMeHBPRUdMd8KfZzofZjU4vxhDsXzYojB263imDfGtS2nNGk1hL4C6Jd7vdFAfDvm",
  "key35": "5jifcYHib31StHi9NzD5P69pSxbUxN2nAQ4fqH9HhhKS918FLfYMa7wM4xmoFso7LTUD2zCEeMC2yQoX26GWRFPr",
  "key36": "2FQME849GtDHFx6iXTgNM4WxZYhmLsUrDy6gxVN7z8edXLVofiX8dMZFAHherPzuwKUacJAkzTm6zug5Ths7ssPk"
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
