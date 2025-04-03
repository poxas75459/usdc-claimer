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
    "S3nUhdLPH3PBD3Wj6SRgNR5QV5rzYi9ZafcDWm9kuXWK4nGH5dMSJx1U1YTb5LUJCBnxMQFQKamB1vhPEBFX63P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tRa8SNnxDZZSB6aQA5Z6xaYomLpdXj6v8Yj48j6qfkTn3mp1BXpX75GviEd1CRHCpdMcLXfj8mQbAJD4itd48Y7",
  "key1": "G8RBt5VbRhnCpK3kqUT8bc2JnRmnKjABMCBubR1RmEeSEazbd8D1AVPX4MN6HCYqC47jYFL2nVuMtdveaj3Gf7L",
  "key2": "4RpSY3tc2hqYugumtH13KYpPHLnKeaMwr87eyj2fyfu1jbLYzRhEnuZHWgbaWconzyVuGFgut15hbqBLnYqmu9w1",
  "key3": "3mAYKTmTcahsMMfRFHQ7Sd1UCC6oBUTg95fBzrEbmCfrZdzYBQE49TNxLSSMMEscSskrrcT9mYZhdYZi8GYfLpGv",
  "key4": "3AqWGMswW5hncbeFme6Vm6PdkoFpqjmgxFzb8xX9vmNpeFKh16jrwQtgH5oqLENbjw8Fn8Zojhqc3YbJTQSwyC9S",
  "key5": "5Po7ZW6sNXM9ejzae5W612ZxnmZWz5mcu69sktX3DJJeP9pw4s49jDcHt6DcmacxiZn3HjXa33w116wBtv4WBTt9",
  "key6": "3yU5tp9n3mVD9wRM1NZxrNRhprQ1N9LypKi273VuaSHdQutePHNDUxCpa2xubp3oWyqsyTmfJWmbPwVQcsWhfzfp",
  "key7": "4KeKLQ9EpaKTQxNX3ngsj2nQ7dRGfunQoLxZ1JpAUY1EBeM9J9wWPgiowW13wgUSp5h6fRafdRE6EEX3BbS7j31C",
  "key8": "5rxhWaowZ31GmgUZuoptK39QBG55Uz7zrTjPVBMUwG67BY1WWiQzppgfUANvA34oxfVk4ssifHHFz6o967uuEv4W",
  "key9": "4bL7XXh7jhbUE1FoKX1c4JXJpi3TfqjbqXyz5mSg93oNgmHgCwKji5tKgiqfVdj4L488FGnrLXxf8Wox5ncFvkbq",
  "key10": "5RsbwPz3wm7wDpyBCLzuTjDRLBBAQ3PkQrrLtn9ELpKs5d5fTU8QXYJdZ6Dson48PmYxHeEAUid6WKYTZwb75D2a",
  "key11": "4yuUEGNbH8xMUDCNh2GJJLg9hrc4MhmkDctxUSFs1uQG9hVj7b3sPyQzKHNBLRtcsxzb68uq8WGtMEFUsTvXouey",
  "key12": "4PM6zWZASLno5JBVjgeoqotDW5PFPQboGPwynVwCvqieTKND7FnQQSwBrXJH6bTokFamXYRJkDA1mErFgB7gAZgb",
  "key13": "4BH8J9cb9RYXBihUYsiSLMN5hPJv9sonvTKuwj9Tcb8LEKYThuJusHeSCWSi92Y5M3N9codN72odJbg625DrutzH",
  "key14": "4Uxk64985jFL4aRgbhuLomEzuJpfH717uK3YmLJpMxKWosW3dw5m2yJNYisGeHByzQ55Ei111Ksse7KaQzKyUQTU",
  "key15": "4Ez635E4wDpQCQXomSLaxfrQMtvtDY2kA1XZEt66U7RHcAR1wUFbYDhXdeKVMWUysuSsXXCTtnY16MEaVvjUqrr1",
  "key16": "rdbne6stYoV69VeodsgqswjNhbKWwErdUPb7SkQzgSiKj9gkKebQrbv1Hcn6XNwNe6WksL595UxsibCEyo63Vb5",
  "key17": "2zHVF3oosu8odyGesvNcEUcuiy4GCdxWpXT4YxqkTbsYnqtGHpZCZ6BruLKtytDJ3ett6uPHAUUBAggiTSbYnxDq",
  "key18": "yGYUewyUx7vWLtKyBqgZWAWe2DKdmmWQhRtE2ULUe8jUwrqYNkXTMyhyKXvTWri8NJuiDWVyYQrfDk8S8BAbgZD",
  "key19": "cg7JwzvXQ1PqHmk1i3YvtFZs11WkJX1dwxqPovLHd8v9kZkUY1Q52MLdjLgFWUTGfMVQJ6p6gbYJgrbvSJCPuMo",
  "key20": "2AXzKBGtUQFiqh3tuGfQ3ThWbvijHhu6fiViqrEsd8fpit43gZiFN2fghSLjE2PqJyJW5sV528wpGQM4M4tCw83z",
  "key21": "2pm1mRj5Xw86y77TdtXuEm6AwPo2UHEEkSLckuMd43frbqr8FtcRveBiA5ZL5s7kZrtr1W9PnXQvMFLa48axnATW",
  "key22": "2VMLVrbKe4sppogXsu7hdAbg772xA2SKWMWo6K3uMYq83rZkmQr5URi5Rm5VnwnRzCp9S8GLrTbfFiaLftvXFEg7",
  "key23": "5piFtEbLeHTj1U9JVAbQ6YaR83sJxJ5zn77yFfnCM7fMDFUxj3Qiv89sZvbwwVoauka4fhL6PthrxkC5KkVzu1Xd",
  "key24": "2d3QW8vtDnWoHDZJGMzHC1YpuCHpyE6HuK92jbviUTvPZp6yxsWroJ7KWLkcdy7h6oWtyTg9okZUk6yYrH8Ms5CS",
  "key25": "Zq9YnPRDRbzUxtmmeg5AYbGEPDYXR4w2Y9W97xhFjnAH4gru6PpceK8JoBtM8btaJbrUGJ58c9ntt76Wnm57dLS",
  "key26": "5pGoiiFHDFfqaHV17uxf5gXCrUqXyanzrdfewWDtsKmrnrEqmHV4JWa1QQXh18GfUcfmBDcZLu1Dbj6zZzn7QtEu",
  "key27": "4qSqAvikGvfLr5TWRe5Nkjn752qWrXyxJqqG4rXa8XVrA9dSJDcwnoAyUoGADwDJVUWhUyLdmXMc1Q7DMktQmG6N",
  "key28": "53mBrrD7kLqGcTaKUDUQQPEK9e6dgxE6kcV4L3Tqi541S1DWp2We1MbWpriqRkebF31egKFtA1cwxKPziSLSrxRw"
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
