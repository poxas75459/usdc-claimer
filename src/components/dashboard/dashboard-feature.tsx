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
    "3viRHC5GXzBsDHzCqdV5an4DZLSbdY742MDTLFauHphDfoyYVrpzJekDvwtiHR7feTgNn9zwKUsr4sRpu6pow2Ar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqT9PK35xB3xt5qbY1piLyz8Zm5hFWPdzCpa5XKUEPjXFMWJZCSs3nVjoEcGsnnhbpSE5p6YvcqcS7Y8MTjyXRt",
  "key1": "bYUZHaLHABbJKvR3pryHiTArazGknG4D9RAMgCWyCT6YFPNNC8xQt57w2g2iGQQyLiNrqHXJZVUg5xDur7aGiRQ",
  "key2": "3UuufS7vUfXYkLQFTEESuUacdU5nBpmE1vfHVRMSXeiove65v4EegeWmwrq3QrewUDh7yg1sciT7FWF1nRW2aSLw",
  "key3": "5qRrttAC6LUBKEEdan7SSmuAQADsfFJ7RfJ3BqU5F4L6WLU5hBTTkjUwB87kt1akRhRQtwCkQTDZwyJAMBAoWnMM",
  "key4": "2SaApJrb5B5HBsrbSwr3B6ByFkcrZJW8VBkUpMaWy8yVwsXG9xQLmbs6FPstaEjbj8gfsxYGMuYkRnUXrb9xToc7",
  "key5": "26MqQjAHYuBoAVEcWU1njffV9jUsTqgv7wPpSFUGzSWdkycxnkWEJhraZXaWnVRa7k4BmvLEmArKGykRkEaccTPN",
  "key6": "2fpY3FGD9fVmL8gqeZ2eyg9k66UYJkZRAfdC4TnZYuE8qMWUZsxpQtGm8G7hzg2858J9TpwGKtVU2qyoGR9t8rqy",
  "key7": "4cFbwV8n6scBLifpw3nxxEMGTibnYUhCW284Y6d2kK7FY5QHLkvVZ29ewK9mRtzs8FvpFp2RmkYrR7nRmhxxyXUj",
  "key8": "5RHq2cxjkjvsbaUjoXcLoY2c3JoU3P2GnX3Fz2orkY94uvcrCzTPx2eSCqJgRUNXqNWvA9k7zYdX9dbpqTwQ2wBz",
  "key9": "3vMnSCV24yaXH17aj1T2vpfnK3j77n8eLoEgfQA1kpp7N7C1yaxCjYkePY2cxRFDkC1SdmoXXpJKEJWeuxBoFfoo",
  "key10": "5gY6RZ2AzZgviVAmiqSmVLtibJSqU8bX8rZVjh6wzaXr96t7uP8phiST6dgjPhzQCCKeB163e3HDyZqJVVBdgSR",
  "key11": "4qp68h73cUZcAMBzB7WMZthWcUDWsmDMmq1zfGyLsWYk3ZiqfYBBGWYYMfU2oeoeRkB5kwHmssKsfZyRoym32zQU",
  "key12": "3PzmFuNywT3yJyzorWE55X88XfghdtJ64F2eDtPgd7KcRAFE9PZafeM7Yz9k4rEZSc559mR5rfBxBjwyYXAQJiqQ",
  "key13": "2fuKLxTa8SGHD5WMyeMVKWiQ2thH1A3ej5EdW2hDYn1zkjpJTXtmKN2ukb9jA1bTb57gQqUe2EytzyqTsU4paTCg",
  "key14": "3iPncEDM2RCrtBXZp3K78o7JtRfxFRuGZgVsEFVVo4td67YCsjQg7pd4FLgZbpap6Qukggqj9zkQ2LLrKNCEBv13",
  "key15": "BY3yZcdaLrYEr262yA6UhV5uZKugQ38BX43shfousZxbkCcxBVP6MQFaHjPvgtGJn85qWxhZR1SkAWkmNoAQu76",
  "key16": "5CzyFLEFPDruztsW212qqJkRJAu24quwqjDX2mab2zzktMC1Cyyd7J7xKDitWHbJXNnhzvMzaMQUahLkky2sCnKn",
  "key17": "jUxP5Bs4Hgt55NcWYiWPQoiQ4pRMgZpAkRYcHvZdL1CVzHw3k1mtLEwYdtc3EGYZfJwqYCghzwVyboaX8R3NMuT",
  "key18": "64drdrvhSkFCz3D62uEAUYy9ubrA98PhdJLupNXGeuJUGALQFubpqjPM5psr3D2n1eJUxH26Pcx8DgbZeWdtTmUr",
  "key19": "5Ua4dkATbEcmFmMHzwyCda2UXSk7nUuwxEentcvXjn5tpEVq1EP5drgueckUHpMjg5YMA3QRNKNnxFduEn7dBTLe",
  "key20": "2yonrBNgBR3jfS3BwMwPpaHrYLxaUN2xoFiDJp8kzmBsygaXprGiMeXizmSGrWYNxTLMs15aSTLzVuGfPZpFyCwG",
  "key21": "2CepShnJKKbo8Qp4m7wCrneL9okX9acAQ811nrNNUBW3YGeZdWeP9J2nGNtdZL6i8NK1Royo9QWDebyEARYUygrt",
  "key22": "8ufLMUCkzNpdDWhTiv8qkiaUjLmXRAQW9RskG4fPtLTQA5tjFkhxnXhNfUD1LCTjmpFwJD6B316m5kYx2d7qo9F",
  "key23": "5QxBvaJH5LsAHZjumAauRh86yMDio24hfcNvnBKAX22yTTMBX37ccRf1op3mcR14u79Frs67Ydvp2TG52ZnBT9Z9",
  "key24": "2yKrK2w4j8pz8KLHSjLBd1MRz6xuUYAbVgAiV1WR7QmPskJvrbW8U9atw7CsfE1oNkNS5q1YEo1Pfkkwf5nUKxuu",
  "key25": "3i9PEHcVMhDPnLa4U3dNZB5EgLaEwzWACaV6G9myg8jgAVLgg8ozkNWPGb6ypXF7mLbfS68MeTARiGpVDNFY5WVn"
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
