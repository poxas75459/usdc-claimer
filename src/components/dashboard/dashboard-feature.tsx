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
    "cTU9B8SkJ9GZYNpo7pWjSHaEKr1jz5D13MjUE2bTbbu19u1mzmcuWr9tHCxF1h4gikaQYU5RFmhArMMmKVvxuKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fbYNssQztMMqiNZFSVuvwtwwafpwjHgvDXz9WX84N9o9FCvmHfCZacJPm2VayeMM5YQmvxs2guJZ3bKk2UGhsNJ",
  "key1": "3Yz4PSjSRf7nYQRHJNNF5UBJHs6x5kRYFVWfrYYwBx3gEL8ZTTA7JRwEYxtd3ppQyF6np4jsPbGhTA77QXR6bBuW",
  "key2": "47NF3RPw9LK1WiSgFgATRsDmPduRXgv4xk5NPjyR89GtTpFw8H8YuWBjMLcqM3CXMwL5b8f8EFZefaU3o1pHXRNF",
  "key3": "4v4W9EQAfPNzHcW1D2JsWysFH48ZgsQ2P3suLCv1PNkPHmfZf1hB73pdQutgfazjcbCqXHEVVEPQwDtnYaAmSkiv",
  "key4": "4vfTHemGGNarhtBb5tHzFKHwyMT1AuGF5qJYPxHD4wf7qfuKdSSwvnnmuABKg6Zq7NnCz1KJxQv8Vg3zLH4qatuJ",
  "key5": "5RNC4DHDTyxvgXzW8pF8Mtw1tMSBRqqPHM3EAvp3fMtLo9sLrzQVNywBM9A2qJukMc8Y1GMxRAdaVQ8xxuaKFZnt",
  "key6": "373qHCst6cP5o2rfrbAx1sE22YfBojZx38fsiKkXPdUWtWwhG8smtgEKZ5HL5TNkyF64aEsVQAFyPyDzbxCGyU5T",
  "key7": "62cxmR531Wg8gpcRsMcn2uYdDpJ1eM7YbyeYKrzstqxxFShBeXwwyukBNcDR5KS3x4XfzaSLz7Z43F2pFxJM2b7p",
  "key8": "3SAZPLUHnasNFDXE5g4hKQTzCX5v2wp1Zohfp9opgDjSs3PFsQWpdskgK73HmdmcbujW6kkPeLMzsYqbxoYUrmXQ",
  "key9": "37ZBtKfsCAxqJnkTY3m96e8ukRJkLZF3NnduzpAAxzdv6yDPJCrvrKNqHzV3DRtMZGKMi3eGxs53A7UxyWyEeCw4",
  "key10": "2aCy3U7ggxYknJVHdXiiNnSGGomXr2wnpzUmq3Hy5GiSErAEmTGryNmdsmUqKkbbMbxhQMcqEwqY4UndqrbEQr1d",
  "key11": "5qdVpraunPgo9UZaHoDdzpdcEGMnBymWaLFnFc7ACmHVi6rK4ZgJmNBkXddS7DoRykS8TQeBiZuB5GyU1KBPPSGV",
  "key12": "z4YY91pN8fD4LmN39KCGJ5vjaBSNKsnTegRKYQUPKQuij3AFWim2r1WEL8qQUBfTgi4iNvpeEo5Jora2YgEhLo5",
  "key13": "4cKwgVYd2PxYnK1hz54TQ9s525TumCw9EpPbwxjpBBTnXdJHm6tq1GmLKCacu2YHcEn5nUN4sTpzDhpyL7gwC1Fb",
  "key14": "QkfEve6Lr1xvCBzmr5DLSWLoaCaciKcoicxUkerDiymhTVQzaJcC1cj1b9gjeg9DgfByL4YdG9KrXtN6wMBZrNS",
  "key15": "2T5hxUQoQ14iHd2mDeETUCSDG3YfXThDUcDqNrCbL2ijbUzfhZXdWRX73WcQHdpqfGhoS4JvPHLa1viW8XjySiNy",
  "key16": "4d2fvu9gTaLpZfSTvdbegeLTyjPK6g7iY744mSs226cGNowM9pTCfMUsHq5mitRQRRPgho4xbTqhrnbF5bTMFeYD",
  "key17": "3Yvfs43J93DwgzajDqHYEUwzRdQG5gphdEU57tWREfL35vqQ42ZqBK1pcu9ExXE63FUrcdkPpKCu9yMAbuvg3yRy",
  "key18": "24YSj8AyG1Qscv3HJ55QKTCKg4asKswrZpQ3gtBeK64aNLbAqXzhyy9idnQ4Psg9SPdJJ4e9cCAP3RPrzA6TVova",
  "key19": "4qKz7AW6FyaNBURcPnb25URrpfRmuXcEkRf4MGTzLNTWWcgyyNPC8KiYSNAnyYw8nAohzjSJx73xHya9HJCBfd3h",
  "key20": "571WCwRnTTEVrsknzNCm4efrJhPZm1YJ9iYVCwoaS2xn4xy3pDP4xroHCFVFpu3LMb6nDvp4oTodjEc6rjLvBPGR",
  "key21": "2Kr6vkGmazUB54EdQVeZMVCevXCZhzCtGJEhdywTUF5VWZkz2PXHP4JkTQ3q2kY1Dvg7o7mf8ph86Y6JRZRoyEi1",
  "key22": "3CEnjPvKrRRuxLBZqV11Pbb9nsvgim1qFmSB4uPvL2mmYyf6bXHQDU4gHqBYJJV7nu8xfMPopypSqUB5m4tfrrvT",
  "key23": "3bkZkauqcMpPqfHYo1ApvLGgV6huTYTLoQViXRFTrRV9nkzSYJb5FbeCy3S62RR7PpFQMK4YKHhpxvFw7WEPkwyW",
  "key24": "4cyuj4SWEybutjf7K1cad4xo5zsCMBubM1WZ6KUwPMWoZ1EPJsWzajmnfyaiwX23YfZddy5H4CEnTKpBB789ooDY"
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
