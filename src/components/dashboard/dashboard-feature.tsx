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
    "4RMTp3vSazq5f5bTQR6j67dpVVWoYoPkqqLTaRQ1iELCYj49dMXLf4Tri3VPaobGrvECFQECMoBvoaq19M1mSqzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q5u9xugYx3opjqvfUGBAR3ysHNmQ92qFUZUwivuKvCtJ7qcnJz3xuegtAmbaQ7vfDnvmLCvir4EQqHUgejPYbmg",
  "key1": "3w13Zo8GDskWPbmCR2y5Hr5y47GpAh92T7HfYijaYFxGaCTFAMwjiRRJDxRffzdsd3So9XFXJvwKfNAG298CY462",
  "key2": "2rrzcu62nayDkVQT7ULtbMZuthjrouAjgUbVmH2L6hTyBsseLuBW3ETgmYh4bG5aYAU9SXBqE7ntWxkJThTeJk4z",
  "key3": "43huRWcsA4CcfasSe5wRNNxCt1WDxGnzSboHnwKEJb28cryhFM2r4bQrs1BJ8uBrTmqYdYX7tBUxT7mTcrFLz6B3",
  "key4": "33ZQVHVR9sUGPVu53SisnYwHbg4bBS9YF1qDs1uH8C6QvSVzd1Ts4SkfyxiPAuMrUMMe1Rh7LBqtoQ91D2bGHQCi",
  "key5": "5yWwSHQzQFVsZS6svkuDz4eRVxjv6XYbz8iBrFhWgvCVTMqggcD1mqYkY8eW1dTkfGQ9raRy48BU7FV3jtuQLHoz",
  "key6": "48aJi5kDZUjDiAt8pRCZMcjzV4irjouPV9CBVGCCpgu5r8yzoJa9AqPLQh1jWGTVLbmQfrxNkkN6acWkev7Q9Bv7",
  "key7": "YJzByZ4nX39p3dHg4LJPLaCXTFU8YF5qPcj7bPyLUj1G6hrFMk1ZLkXFsaBszS43hs8vbndGet2vn7TzBDXoZuU",
  "key8": "29xsSKsFg2BZ7wpbm2PCLT4Z8V3Hac4DBxeoSkbbiAojKNfMoKXhjfYmsmvxmLDJmUn74Xbh8pWB9ok6xogYah8S",
  "key9": "4Rb4NZJwyuXQPEKg9zQTrBRo48jxf1NHpdEtXSaTuiybkNZZcFbbGc2ijMLB55ZdD2fXH7PnwmK49EQLWM85scU1",
  "key10": "4egKPRtxqpxeamVXCkJZho9tx3nsiSFj9KZyn8tAnnKfbHpj9kmMhKkx386Uwzbqeer43BPqLScWjYWRxqH7bhZN",
  "key11": "5NLN6firQUvPZDeDNJrV8JZA5oWukGHBBw7dj5LZXygc4GosQkkPo42auY1p5pACRMqNMJZXJ4ip8zjBxB98QCT2",
  "key12": "3HaKDh8JZtdcXtjRR1CdCxCHwBTWYfN32VmsNHZ8UNVympCtEUQ9o1uDHAZfmSJZ89NsGpQs4ZL8g2wpNm2fwjNT",
  "key13": "2p7WVzZmNrgHTesBEiV1yU5GqvfsHMe2njQBuTU3m9JUCfywYn9kBW6TctnqP9oZWzXcakUZHGwqfK1VLxquivBM",
  "key14": "4kgtixajP389NGwiydjoeVnRdUooJHwEZHopUMeVDXccQhc4m6ghzfXzTj13dW5dZ4yXTb88TD8Atz6DwMYfJxvT",
  "key15": "xVFhYP1utDG7CWsADgRWtZFLhscEXyEpvNv9UDBEtwKuxjf9sai5vTKADZUP11qDGfKnJGKupLnodoZSaDr2Vyr",
  "key16": "5Uc6tdWJKS1mTV64HgxE1Q2ZGhFxwE2ydiZzVymd13Y2GUeeuxkYXG1Avw1NEJ95Zi1vgNQvzBM3QS6iPNab266P",
  "key17": "5pwknmjyQdT54d31esP7PJxtiaKHLPGohFLrAfFomJEyvMmtNoiCjvyxpswFeghsHysBkiXvcy4khZ1zRchRjcjM",
  "key18": "41ipu36NiHVAptWQRAM9QtTkdgGh2EFD46xG8M2Z8WPNpymNbFDCv8MqZoUNDtZCqgB2VsRjUMAsS7Tyw8NeRVDr",
  "key19": "59pEYnEgugkhvpX9o9FtukR9vQhnCmvA42EMgzUdJUKe6oyFa8ipD4EUpJHmniFSsREXbE6FDN9LeZQPbYtQr5Ff",
  "key20": "2BCop96nFuZFYcQqB2AMtd6MWGk5pSutrjm92aoj3iF8jdcgUsoyfWVuwSwqVsRZm4Em5i7AXXyiXQFYz2h5JqF6",
  "key21": "37cYvBcEzPNCyZrZH3bJ4HL23YibmD1ph3ounmxYr94qSESsiMtpfNNizFpWWMR5dqVndYfxjGd9YasHDsWd9Vf8",
  "key22": "39GXFo3J9CE1e1DTos8HuVNkfFf5yBAtHJQtuBpt27W3yjU46NATTNSxbCv14wbP1JM6XD2mtbnJHhPoGqp6Pprh",
  "key23": "cxitbJKBGeGTu66KRiScDfgant3PgPyHwVhqxShZu1Jj6a2ijGg9NFW1vcTeP2kYt9XzGA2HVGEhjKHtyWsJpyv",
  "key24": "Zbx4xAiYcGK9EyU9qLgwM9UEz3HgB9rJPJDCHPG2sv7iZRVgVd3Nb6crnqocnMJvjGUKAhvatxp4PFnEM5HWeLQ",
  "key25": "4Aos32wU6ubyPk8TAU2Yx2EnCJYfWuPFqPhijCPYNM68eu67rcoGy8VsTtYJ6o9RFqUf9X5vLwQX65F4jnPL77S4",
  "key26": "5z92ZRkqzg3xDiiGd8Y64E7pMWMBzLnTjAwQCj3CDMUfUdsEtTqmQ9BRFy3X8mbC2tASpY9wrtCNtUSizDPmHn1r",
  "key27": "4h79FguwjkybJCqpTd5xCWwhXcep9QYFy5SqZzWxMqHvKkMDkhhRzme8sR4Uoy2JkAUdrfFu7fx6QGgJQY19R1r2",
  "key28": "7mN5XLQ27tKkbRTRzfVw4kNLXoJhNQUCo67rG1JpqjBT2uJVb2MMDPnaWWt4yZCbWmbRfT5HWRoyuCtgkueryoc",
  "key29": "5NLfoCqQyZhtzxhSEdvqErW5myU3x4mLnkcYzBHu41r31qs6w7awZpd7dznHXwmJiv2U3ip5jb2sXKZ11xYLGS77",
  "key30": "5Cf5bQAQNTsgZLhsPfoHd7uSUzTChwMfa7fSmkkjHorzTkLoqBDFwuKFL8ivq26HcsZoYqwqpSWTRzJY1DbQuHw1",
  "key31": "3aNmq4k7T1P1s7J3zTGo86ECSJXHDEXFp7NrJ7Ta9bFvdNavTAkLKD99xdRcvK2GG9cwc17b6otcmfZMmwACUjV7",
  "key32": "22FnVvtttHoQLBNsFyxtu2gAGUgSntfKvsiUhQafZM2FwcUax5MDAJrjTLTxksDkDinEi3DcMT9vRygGFu3Xigbb",
  "key33": "4aotQp7T3WTaxRZ1kz8eHepDzHujECMxYbPPf5i3vnraa2Wbi1k8NoCJ26mCijFWRyzRHa4pZh731XDScuR3HNzp",
  "key34": "4fjiKcHi9jZF3sDgzhntWqbHzsXAieU9H6husMroxw7UGVqfKT86KehuYtbQJ93AXsQ7mG4bZFs4geESjsCg4RJf",
  "key35": "5EgBsk9Hexx52yNVuU2MDkXeQ8qV4fHHexNnkBAjjZCHtmf2aMeo8Z6EeJ8HZpi4eWzB8YPTRDwuY348DqZsMyEr",
  "key36": "uqfWJHJ1rDScm7pe3mmkurQiHgYEDzzcofWZcuMwTjqs6Anb8vMtJo1eQmrKfRo9cdZ4p61Y3oXNMf1bWKNYMeL",
  "key37": "5KPZchDaxjTTKdXoWCXHRfiqMRMsYkuM7HRNbAvAGPri15aLnaipKdXCHcoPJ3tThEHCXTUbQB1eE27ri6N2pDh1",
  "key38": "5KjDTDf2Aikdq5mPa8Ue2gHaChVRgTiH3GmiCxAobW8gsGMBk4gZtKYFPtSDgRxiVU8LJHuz6RBHPVhbJBu1g1FA",
  "key39": "uaxSaxDfPooTfEYceHVATep6yvnQ8JVWDhUL4zVRtkeQfG84a94AvkJnTaJgYa6o81aWf6F2inQXHEG3R7ab4ga",
  "key40": "4u6C7eWBXUXKQuVLExAbjtBLyHSTHbetsnjUx8poAwm1YvLS8gR6tRkzKVzxqNAET6fGnhVG7hLMHUk1pZPca9pc"
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
