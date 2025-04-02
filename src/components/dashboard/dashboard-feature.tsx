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
    "2GHki1K6hsRtrTwYMyHGsUPtXD3HV8Hbdi7yS9rVosWEyXkF3CQTx8sLyAkZm7Wi32htUDPguPqfMNeE3grgYEYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CMzmBHv1mGk91Yu6iA2H2kfTXoc7WNBk9qUwjN6vtTCRMjPN3vTQhE67YLpJw7oDVvNNgVDWDdRQyaUGY15hhw4",
  "key1": "3avj1PkSZLmuYSry9R1njEfpy6maNeET61Fys5RcQrDsedtXHJhyce26x2FpW29CFQ1LcNuP25MVgeL7o4NexLbj",
  "key2": "37GtK6W9gQsJbSgWkrCAPs1uVGcAEdpZhgj7QHiyGkRBiz2Lr5ANAobtApLfiyTk48HSHEjemV4HYAkwbufJbrug",
  "key3": "2Ckwsid8xXGLjtf3Bs3CYcLd9rR3fTDoYNz4Dk8hdxZ5sjMvB58h89BfzfLaohTWfrktaBFTie5vWjgE9jJa2WCA",
  "key4": "55Krmq3QZ9dhipwfFRvxhM5eKsjrDxCXdkHLMViPWZo4gsZnVbdDFHevgXxKmCEwN1od1fbGgiS7o71Kjp8VkXBM",
  "key5": "2ELTWLN9KgYabdUMfETD5aWruqPrDdL2tASWuedhx1fcjdenjjUFeJASqxcDoo8eB1ApWjZ6Wcyq5R1hiM7NsE6w",
  "key6": "MAGLVF8PmkTecHuqqnT95QPzrUmiZ2YW5xhmiTejcHjgpD1uPEtoSiruZaskrEX9ipvHhDBctjXeux6hBFVERSQ",
  "key7": "5FfujtLEsCgrphtCVB7cRjGgCgFMsv7YGwKBYbu7Vk24Gjq6XQkcWaTZE8a38XxBJkJx5g2eyPbn4aEZU137EEtf",
  "key8": "5MBrH8jhu4JAnnsmGf9KdygGTaMK3mGVWbjV5bGodzSDDtBBmPu8ynXvEuB98zG7Qvn1r5R9gtLD6FyGuBMP6pS4",
  "key9": "4fqRqDho2ztojQMwmetb3KgAu22GphpxhZKdZsnsoRpUdf4PPA2yHTa9ZVsjyE8h2ZugLs7o6YF6ofK2iyB4B6vU",
  "key10": "35BKRYLWXYpZFmnQPMgh41b9np2BtSZh3ewUYoNHZkVtjkNM4moWUYQ9EMRZcYcftUAKBP3R63tHdyMM1HejhcyR",
  "key11": "3FHRtuPpBvY7pk6uUSn6S6iJE85RXAnNR349qymqAFL1RVpJmLKhsJ6XmE1wxhEidRTVxyuyWXX4TRyunS9txwhG",
  "key12": "59QSVsLmrHFx4qJc1wmBbMGFQhMmdRbBMNBuVtxiMGs6A4jUs2RYBNBPqWxjcM6v2mNhxG4VJrtfmzrt1yQfZMBc",
  "key13": "61w1LZcmT5dVzEviSgWpWBMywE5kLKfo8yGvC11zq1gQ65rfUnDPju2ScKNJZNnHfsGvE3d6oeSsMVtUX1fpuEmV",
  "key14": "2TASriZeYwKbkiWmMWPC3YEiuaXx139H67MEbPJeMphodogAJXRaDSRCMV65oBpj3gF67PmEZQ5eRDAwX4T68H4v",
  "key15": "3LZaUuhjngtaNL9eyvUyQXar1kTALGrKqPYePXD9JJbrTFHRujGywgkMikVUZw9EhseoUVq6SUJEkWKaEs8aEkC6",
  "key16": "5i1tsofB6Xo3dEUmNRGHWtc5Dxa3z6bs8zD8aWbSooK6abLfefoY4KiF5r9qjtzLwXE38SS86bngwnGs8Q8UdkQ6",
  "key17": "2p2T8wn4CRqcxcehxEbPsh5tnntAgqWHUQz7ZrB6bomSJdYrjHiVKaen2XcXdMTYH7LMmJBwscqozsV1YLieHbPy",
  "key18": "4gMPcCbSh7Eqw9gdTAdmR9VbdmEDGHtvHNqxPgTN7qczsqCWA6oDe4QDHgBJZikVs1RPbHBKq8QzwHmq8J91EJ73",
  "key19": "5pUdN5rUeWFtZZermuunwG6DcrBx5VZJy6NRBnHHYiJW294Eo5ToSwi6nnjkob8bEAk7hZZWAcXfoXBH6dS9qGHd",
  "key20": "2QkA1fx2h4JVJsERqmedqnY98tHiNWHirH2Y8Tt7C2Cztpp87t3JWXkNvZwG6rcc5VkhcehAtYRzr5gFWyfrEYzp",
  "key21": "5b3QZ8yFfpAFVtytx12xLDg1hopy59TaecgLvAPawvz5HxQ61Ufju6HHNJtqeFrjKvwqGW5kbtepBySq6TvsEH5e",
  "key22": "5NuDcP4zATZ9aEUCH5hf4mYgNUXvEJfHQ1RT5Up2bgUEx8nLivKrJpYgrKXUjChtRwmvohcUqAf2ti2c2F2zCDtD",
  "key23": "3PkFm7ukWLAfJjjdZAp9L6yiJYzuQiqG2hd6Dwb3rsynmyzZR4m3Yhyx6z63jzSiiGtXsxJJsyDSHbEi9b5pzb76",
  "key24": "4WM9FqPSqLPo8weHdxJxH6kSMnwaPPsotjZGYZZiQYqm2C1GGWAajmkYrGSVU95VmrnDycz1JbUy3cCK52ZYgvg",
  "key25": "3ykiDdxAv58xc3uM4PMcNHVtpSHZJoEmU7V8oYmbZMGfTTTYuNun67ytJRSitQDHV7ZhbMztojgsaDumboMgD4nk",
  "key26": "5Qj6WkDQ88o8AfQqTMhwyaJizrhwjiF5Wu9dHCYPtuWixfRCmn7QhcAQ3dpDWjVHSFLvTkCRuH1YNkZbEtK7myw3",
  "key27": "2mPD44TRaXzi8ymB72kqZYLChXRjLqDGh3hdwAUDWmUEUn5mtHoo8fySTF97Mat75wAibofhUtbqMSb54qeULJTJ",
  "key28": "5wMVEVYtajyJAZBc7wTRH4BpeYBiHVDjuvJKRQpZv44inByz54TbsusXTJzKs1dfMrBNp1jzsCGAM5xJw1YdWw5D",
  "key29": "3o27Ni3g2mNqYtx6BnFhe6T8kb4rL1yfHiYGobMnA9cmZjpT2Z9vxSjKNkFxwHsaY2c8aoxRLAM5Sc8rVmWPtMUz",
  "key30": "Y8AVSV5fBCzMicHPVdG5eweigxaj3dwWa9wDc5kWPp4fTCuLY3zsNET9yKEaNMYUaiugjWyRUXFDh85mnV5VbbU",
  "key31": "2F2aQMV6i8Zoueg2x1nAuedD87pyZPJJXq5ftK6KmTdYah3ninPgMTD5DLUWxzQZSHRnX8ihzfmnKrCEsQ5YMhZJ"
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
