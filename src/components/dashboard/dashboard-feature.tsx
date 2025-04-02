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
    "4MwrUDWPK1zeaY3tymvArLrqvNWN5sTwtaztoTKWh8L5qkDRgLaf1Gu4vRVJqqvcuKHKbiPuHuKKE5pTmHfPBVyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLvgKLNfHeCZFo4siTJLJnmdh9vQsG2P65sm95KPucNXAyf2GZuXfiEecCUkdv7ZJFqRRsg6s8LUXLegfkgXmMa",
  "key1": "3Cg7cA6UM2YAoCn7oRP7rptGaGnt5rtr7iQnBYE7dF1mwmQrrTGEDf9XR8ZTB7oq4FAy5t1Wx72NU9xCp9kjdaUJ",
  "key2": "3wheA1aFmTY58cLR8Ysy16iGfV6KtmdoQ5GjptVZuGPap5Kdgt4g5gewYbNb85E3iFdZmD4HbD5q2EXGXav7cpby",
  "key3": "T51nUgT9NeJUdzpcgsZFXLm7qtmaDGsQRcDhJa6dAKMHVRkexuTXstzJgtHBVZA3N2mUBe1oq91Ls9oKWXSCQHT",
  "key4": "4CNiBxAWLknnqSjnQ7XG7t8t5k3pEwDNm33qyEvBwD5d9QzDvRy1L88futtMUMnqGVHgHPsCUGxECpdCQu316wEv",
  "key5": "2av9QcRBHvnYfF6eySxGzgvMJ99JaREoaJ8TDJMe5cV8g7Sk1YKyf1dBLqcvBeCVWi7fm9MQQNvZBVxh1EAEWeLs",
  "key6": "4nKx3VXWETMkniW2eda4mBupVXG1EhwUUnr7mWdns2Hzrmbshhb4i8TnEXgi6g4Wzcn2o3J3PGkdrqsScsnGbWxV",
  "key7": "5H7aLagfbDCY2N39kj2K2HpuCxRzxgxRW1UX6uKm57w5qA5JZzZoGMhFENP8nvSjbSNZiQG2SUXJXU2DAuC1DjhW",
  "key8": "4mo1Mm3Wk3miwHeVY9TUwz2syob3EFcr7PXdfLC7A7phwcZc5eYvqzSf32G7SEj5nMYDpYYoEyXSyedwvz2dWWqC",
  "key9": "4ozJLadTWr4NGU5Jh565gehwHNVhghD38gCZdgLr6tNF9SoL6FhrS87uES3eTBuZ6HhqU42EXZKkYeRasbhBaXyK",
  "key10": "B7qRG8G6SY6KUfm1dBKjJkqKahTRkNowUNFXzjxfrqRB7BvAmCd7yzZ317XWVregHZkYEnW35kKKCAsrMPbWKxn",
  "key11": "5nBzKEc15eSDeo2xY1B7RpuhBhxTjka1NaBKmVTy6Pk4P5PWGxE3VZFPPkH3igB31fQ6ksv7TyrYzQXsQJySgA7M",
  "key12": "5qrJsajuPJmhdFhrCX8q46FuGPC1GUKjhiWPjrpViTFPqF1JjpcqKchhu7UowCdyyiMPxNCfJhfXJNWg44heHYo",
  "key13": "2Yj55doDABMSJskpCUsxqTZ3gxmCfA5QsqDqneADW3xRLUGRNQxqjY2WivJkAf8pLNGHh1tCJxSHa8ogQNHrjFpZ",
  "key14": "4rNQbk4KjY3ghRR7DrYxMnWbxnoyfmWX3QqMyBMpHHouJ54omCKuaSNwjZWLmSdUTeoEoQ5dq6TU3dJNc9G42WAH",
  "key15": "5USPsiFt6bA4MAYUZhuMcQdgnA1rvZxXzEzBQRyozjXB3zAVGSUW8jagcq45nfjTwYWK9ddZLkYVR4fkDAWBMaLx",
  "key16": "okrK42cHd9HTiBoqrHEJEJ5PTyqnZwK1TtQyMj4usUL5Tu6Z8zT7x7rnZwFYk4ULMWQhdqFKZgaeGaaa1u3yfRf",
  "key17": "UuJ69f2RY75pxdWyjVWzK8bt4KmHvJ4SHk3sTTauRmq9KZQcb1g55GkxNp2amFapYpxVzyZuveCdoBk3YVSCscG",
  "key18": "25cgbBPe7q5YGJo79sQUq5ae2WkFQfMCU1ezEwasBGd9VGUG1YZCrjWxAmkCYbF4FzSY7bVzUyNdcYK1B8xwQoi5",
  "key19": "5LKZVZikpPAV15Sysadfk5HieFUfSDEt6LPmFjBCjdYcztReLggVfGNVAQ1h74pWkVszYoJyxnH5BrLWVsXuNRsb",
  "key20": "jFRFsS2ddMMmBNNPWRuwRbDSHWjTNyyY9c1t4cMdTG12PTjgjUXn9pDjkoBg8s9h7wXQucbiLWvW23DWup5DNFX",
  "key21": "Mac48khVHyhehL7nCjWjr3AtPPJoW3RkTyeQ5RMFmSgk44bsTWvpsnFVWeh8erztWwf3rpw9DGr5bB74dUdeHL3",
  "key22": "32iocXaN9S2G4bApk97VGzcZmGcvDhYi83tdEcmrcvr38dUeXdhMmWvnTV4iHdwWkYSVgJ8kTvbTizyRsNczP1Ye",
  "key23": "2AcrxMKzmgSVTtJdhns2yi7DgRSu3jjW7jUSrwR16FiSWFn8nyQPvP3W18NJehNrgHWpJsd3arJUyUq5MVXhikkf",
  "key24": "3A2qR9rcNfTEL4DUzt7kMXefH6AWJahm8qdn5D5JPLczAZCybMKdYongAM3F6aWPAMYm43K5xr8DCs3RocT1iqwb",
  "key25": "2uJoffS6Zq6GGe4epKESbt1dvSUJyujWpbHR3XpBPdYqD9zYVqR3cs66YNRi1mGxdEtY8vYh5Ue6vxD41sWryJPz",
  "key26": "55ZgyZyJVMUVoFSDeNAgMAAcn2FoQWi8Dtdi44DidEpi7x7Tg4Vdm53s7xa4XkHqXoPLRUVHcaYdjTqd5pBUrVcu",
  "key27": "5mBDv55aN49WzM5bPBrYAF47RxgKCMYFzRFjTkW6dNDX3vpmFHgHPsEPCu2qTRsu8RGhwh6wmd4yHXVAdtooLxta",
  "key28": "4LiLjBeMSWSXvt5KRVEPqNWudCeGNiM8VkjEkVs2ingi6F2YGuuYRrYTQX7j2ckmi6QhWk2KnKpocHgbW1sbzw3a",
  "key29": "5xBkmRZw7XARLSkoUUxFxz1eJYkwe1kf7U8tc5cybj1NEvxgP7LVe4V9wF6FEHG2qtX7SMFJaWkD6Sjq2tPkscXP",
  "key30": "5Wz7zK81df513DbaRQzkYeCmYmCu5S5kWXtTipkfZFivFgwmBMem2fVGBwFxRZggu5YXZE74Geq5h76Y3CjM6qVu",
  "key31": "FTTkPz5pjgGXZDyKq3bngpVDpmnx653rgeAEnTgBa7QTotoAvzS7qpcfvdRyjckdifteDNQPY3oe22LBuy8uyBJ",
  "key32": "34NMLKeASiWyhcdDLgWAo5QN2zk5bu1Emtt1JdVbLNoRaCch8w6Zh7wyFeHLDruxHfUBWT2X6ET7zFS5WQCVUCSj",
  "key33": "VFqupsDnFqnG2xueuvaMLseihVWQG8wWrpYTosBdM8WhDYFdivMN63ef2icqSjUMUHN8hGPL2fsHU1pQnYYJpSv",
  "key34": "2EFq8f9y1jNNrqXQRJSBRyEm7BbPntQXNd1qvXvnFD4w8xeo6kzqSVmTmY4foR55aAKcsEJobhsyF5nqLXgZC9BF",
  "key35": "5qMNsNrYxKrUsxKnosgwcDGWGupCRk3peTwWG8FKE9ct7BjSPziq1wJmcWE9yHhosnL5HmchYcHRJ29dY2s7STXW",
  "key36": "43cysXBnZtVpVZjNiAqqXf8ZzbNWsYdYvUKqeepQiNfy3qpLHL8D6LZRRWcYpyXrJ2HMa34FWKZ8zfPJWw2XRmDe",
  "key37": "5dHrLcLFnVYozkLmiULvfCwa9GHHhmBBFNUQEcFGaaRwiBFvqtb6Zt7zzE2SxDnmcA2n51eqsNQ4SPdHUrCpddjS",
  "key38": "5zGF9mfghfaJjcM86TCMXqcf3xM7AgnMQngaGinudPAqBWEU1gWZjfytGo86N4rSCxRNfcBA4q6666Fo8MJxy2D2",
  "key39": "3uaRdmxZWvh96aDH93yRKciHsVnjB92Vc9bcwDPzemdJukZYLPXetexszPoFjZdBpery6B8otjJYb57XFrggybik",
  "key40": "4ncXcNoQTwsoHXWJwgBZa1gv71UCuMVDfwvYcAus3MdqxeSzbq4EgK7Mn6oQUube2PSgVz57QdzCnrKGqamTM2qT",
  "key41": "4vFsqBnALbjDrPgbcZdtDguHQKYgKPC23S6Z1PRBanULToYHwmYEMGjXWPk431Nw9FL8imNQZJXixmNVQK9AjV13",
  "key42": "3z6L7mEutg9iuoVbTW3BYj8QvaTWFHwxyALJJycTY9UNf15CnahP532JoPwys9CDJ7xfnNy6PK7XbDSiPfWN2UVs"
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
