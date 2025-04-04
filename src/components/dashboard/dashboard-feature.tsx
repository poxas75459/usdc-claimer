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
    "nyoC6VvWcb84fWVJVgj8MY6LfntiNU1Y1dSZzP6Ceuwdsvi8wBuF9QQ9r6NiHki85C2H918ft5G7zJceUMtPSvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKvaaT2rpBzwog5V3J1EGEUZfiDXSpNQCxv4oQFuQJohkru6yQFN5Wn9MmmzEXueFKeHFZ2dF8YndD4bdSwEQRo",
  "key1": "5eqA9dHGKa9hSoDbACV3TYouTdeiCcD8SzvfjdbLuLMD7Fope6TZ6Xtsr5kckrsNNdtsxQLeFGpHWTeL8gzpHSxv",
  "key2": "452iyyyEW8xs6Pshnzri9HFEMAZ22F5kaRHLEW4iNHhCr8uYz4u5rqEDGBhCxmHAsq8GVmQU8WzN67jJNQJ3bcKP",
  "key3": "5RtGWrJLDj8hWdh9dkfXvn1sHz1ZyFY2Kp7WSgXGptdhcBGonFt2EVT9dKev8RUY7Kz5jzXiW757Yr1xMDh6jLfk",
  "key4": "4h8DExBHNSvTBvyz9JoQqSJdvK8mcZ4Bco1T4pxm4bsK6fXGze4YdNCSbhYY9P9xn1wEXU2u5k4a3ZsGmjrNce77",
  "key5": "sF3DThS3ceYtbGeW6KofbjwzFWHV8F6m7hVSNFZKZk3jwV4Nu7aKMp4hRAvT3geDy7CZybuA6mjNRGueMjPf21G",
  "key6": "4KE7g1aoMoZagkegdwiTrYRetMqKqJs42E77pEPsnZRU3FSPav4yKz4E8h9szDWHKnReAYimtu8fRYmPYPrYKSWK",
  "key7": "2SEvSeEH1cHPpnr6im3k3NXrY27fPKxnPUbrZHf35ebkriqSpd1pFHXQpe2rFxy1pCjG8roJb7UvdBGAvMPi8U44",
  "key8": "5mb4NcXVLMhejhghSd3QnoYS523Yt7bz2SbLBu8TvD4msShiLNsM6p1S5voeNMSnFCXrHaEsPLzNkBZx58GDGnBQ",
  "key9": "3NgFEjwAoE49Z8Xi9fPuKgVRfQK6Yov4ieE7WJUBUpVN5CJ5RF7GyYJaDyxAPK94GfPadT4dNMAVfCdDKSJzDaTU",
  "key10": "4jH32fLZB9hXwMFWEXRCP3MbJZTzYhSGcn1RhMTqtQWqKKrSXqUi6WdFqs5LAGmkvRkLXEdyLNNfFquyPYwevM68",
  "key11": "C91qALSgsbV4fktzAFjj4XJwZV1Bjtdtyx4jn1PaaYkdvTa4AvBRmHLhKJYJ5RT53njzRXvrAowbeSHuDduoc5P",
  "key12": "64mPQ1E9ff76pe7WT6sjK798cY8pHpR6gt7RRAdFp25Au4jGbJy1FTd1rYirxck2qnVYpNRHNGVxdB58rXWLXcTa",
  "key13": "nF5FTbSuEEo2F91FaWThbLmTAQcUbm4SZ8gbhGvRC9QmEqdA1Nc5RqyTF1o7rAHfQsQhV8vP84B8r7fAABFxhEx",
  "key14": "4ubuDRuWZVnm3Wr2aQXuvCpSfLsWm7YGEyteAx3pTJhFBKgHv4upu735xmbZ7gSP26DncDCtBZkHw65C6DEMScuz",
  "key15": "4pYaFfZyHatUA8egYw5YG1xAbHewKJUdc8zvtkphLtYPn8ppvc9CQU5o33w28n61HVP83ALoTRKmfxt6zedYPdEP",
  "key16": "mi7CccgGmGYpb55eov24Y74baRjAD6RiPVncgdhBvaVFa4A18DxmFQ7162T5JELjL9K1exBsFuGhyqc3LJufBBC",
  "key17": "2PowZyxHVpar2VMhNvfXaWoSHhZNDP4ERDNt4AszVoNT5zaUTXRngEaMA2zhYewwKe9Tk5KqC1Hhy8wuLZRd8tiq",
  "key18": "5PNXFd93mAXbcKqmPGotU7BLWghsPv3vxqsrw23UnLWXNqAoJeZFA4Qwzu9miibcmBAM1Tp8e1dwkAcZgraBBpxH",
  "key19": "Y7EkUE73RRvpmUK26229FYVCZhGGajX6mgwXqdeu67v4q3M9g3KPVeokRtf35Tt4G7DJFNYKio9gPa9inndniQV",
  "key20": "4ENZu5qzaYWHfPprmGi1L99uS2vM8eXuATwAQnZsv7pF5sygdKzEGQi1s7Y9FhHJZVDWcb3tC247eXtkCb3w2EvA",
  "key21": "doe69pUa5FJWqLvvZzSKGexSMUYmHTWyrDEfFfS1Vg1iQtNxwzELKmgyEDQ53eXjNHBgzGDUzZ79Xvd6kQNtNh5",
  "key22": "MdbSrtSGE23vYBkgrWGgGSTkoQB5RoQHu91YZHEQSnvxnqc49FWwJ5N1imJos1e1tiXTxECgynb9gAGcuxq9PRN",
  "key23": "39dxrUCXfGDzZJgH7QNJH9fxXqAj6R1DL9YkpgPmYaY6FFC5j4xCDbcpW6V3CZAGsNbL6z39G72cg6ku41FoekvK",
  "key24": "4MX4goqRpNncrF7y8QcpP4GQZdVh2LxXNgiB5Tbrm3Jb9BD4ne4cjjFgAnjhTJ2BooV5Uv7buXYKts1nXage8bpB",
  "key25": "wBhTmW77P8eFKLjGvAZRBME1ukbTLjnJZj46KAsfy4Vc8u2pS8RJRRmvgvLmEFDh6c9sCkuPMiQLueT81foPkEV"
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
