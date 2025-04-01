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
    "4fFTPnzqJP6Q5fdfAwhs2iyT3KPgpboG1yfqvA2utN2ckbr3YEJwiuDuz2rPDwyNuMXkCNRzuCLUxAto21LaLDCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cBrhsQ9yhJJsxXmRaLb9ddFs2zjUL2KVSqjQMdDcmU3FGj3cosLjp237ScHV6pZkwJUvU1dGF9goiwkMksS8CK",
  "key1": "3DvinTwwJCQ6csUEnTBmZSiAE236SjzwacQnV4jGEPDYgzT5GyLtMraejNKCL3arJN5a4FJTExSy67cKN3Am7NU1",
  "key2": "3GaAvXWSiJ4FbzwhZKyFch2RrvpRzgG1nVfQjcF3dz4s2bRdQfYmQjcxwdfdUTa67Cm59xfmkUdHqx51UCp9QUEq",
  "key3": "4DZqpJAZe5BkUGFJE5TMYM2MnjPmwbe7r3NDoBZ6VYyLYmzJGTmGrBb3nDzA17eZQQsF51SS99iWExFHNsP7iGsM",
  "key4": "3De9D5CNtnjLBYcgX7iJbSAkVCADiiokotyUR5bPtTVuSiFU9NnWLU3e2FRQBPjBrpUd9sihxP2PJhSuoXhRU2Se",
  "key5": "a4qTafDKcSWw1r8enB72J4xXQraFsSpf6z4w2We5r2EmJ6gQbkdcBpwzm72H9TzUB79UToTgyyJkxfp2s3foVZa",
  "key6": "5yfb4H4axP4tWdvxCrvmd8dzgXbtBzLa8mGk8Hwa5ZaKmGESapqwdLRc747m9bKydZg6WX7RVTC6KdZAtzVgcEPP",
  "key7": "2qcdRgRjTjCkEAvqvYvmTtZNXrdXzPs3pgj5aihdwSFiu1K6nMxCW7nDcyASun8QehQ177HEzxkYGYCd5gvFQ79n",
  "key8": "5eYNKoJFki6kFzKFFD7exKkt6KXnreCieaX8zMvgHziPgsw5n1UmMNfkurTa8f2DZkuAjSQsVJ6bK3YXd25mtjtj",
  "key9": "3Cjeh3Kxp56MScdCLm9StqwmCJoh1TtrnonUpGB3WhfEy41P8Rwo3t6zRr2BZ8s4ve2m4ByBBbD9oiWopc7Daz3d",
  "key10": "48WgjTFTRxzvAaXt4h2a6XRdHiXZYhZAgqsaYLnLky3uEXagzq8CQTD1U1hsuhDc2o11nooY1UBgizCMoQLqXgGb",
  "key11": "w3DVFH5VNy6PmWpafqMnSPB6ySNmn2RMEJMfZ6kcjt6XsmzJmDSwEVjboMUFsS5K4LFNM8mbndfgNGjE3Qv3AwR",
  "key12": "3XACncX8a2hCcT3RoPR9GpHPKuwvrn4ECh8srTwDw5pEWx4rNYSHUCQNi46RFNGdQbxnLDdvwbiFNSyLNM3SVtfZ",
  "key13": "2aUb5jXNKSFeijr64EofJ3UYAwTGZcUyZooG9Y95zXuE1PXemivst19ereBKNWTrTyQWD8CqRUfnGh8zG4scVCBn",
  "key14": "51hAfqHW62uvbRAxGFe7hPU2g4wboan8LbykYgv48x9rnwJNeTcsFVS3JNt8vtFHZwHa7vKDeaVfCFmXDiyWzscu",
  "key15": "n9K8HCLF1cMQL5RgWdqoiQYsZc9gmVEBg2XVudn3v8txUo4EcbWcb6APX6hx4A77VFG7EPn9TCnJbnRftzK1snu",
  "key16": "3ZVddaUQ2VYUoaXzuaXPruPybsDJ5foRRa71LMf5EVZ9pxSxqRJoimPT943kntA8zjQfLmeD8FbWRwAigDA6XB24",
  "key17": "3EdY1bs7UXT8ubNgUFoN2vSkvbKc5C6zN19BnEFaxh7VMU7deq28Jjiec9RRo9R6VsVrTfcVCtum4gDy9WbWo6gX",
  "key18": "5bqfqUvoYZmc4EFjVdttG4MxEjjJnUQhTqXeDiPz4UzoUzduutp1oC5WpsR3YxEDuGMsCouKs83HctzGaieDxux8",
  "key19": "5tzmEDousuud7DCrgi7RLy1j36M72KUuBoVnVzFmC2vJEQSV4vR7GSaYch3cMb6E7HczAQZT7GhSmC43VzjVRbhd",
  "key20": "2gKawy2QPi6rMU8mBDY8NRod8FafCwBU8QjtaPkPwQ9HXXyHgQtgShfMtcMtfq3nBXNpBrVLsGhacxjeuZ4AEz3C",
  "key21": "3UihUstUvPphpvBnuDRMAKqvJuXUyHTknjiYqD2MgGdtGdSuVPK9pzkNEN8CXj7QQPFAysUUJyqW1jZscvaPKRVy",
  "key22": "31JxkGgfibZ4DEkjNweUFX8CgPQ5EhiRh7Pj1N9WtWKHkETyHuD1kMHDgmYs37eetPrk9oEd5RMfmNRdPKbW1mRZ",
  "key23": "2nQHooUxAT4en6pdsqtfNzgG2JqqKkK3CiwLFVycowNj6GESEchcxUbRtX1NswNvW78Q2najqdVsuYBvykAV4gnV",
  "key24": "5X5K9qtwzR4KzE3tCWST4KQsvYHCkWrk4H94uPsH7sE3FdhMxtvUGPS2yDkdzntdiRZGcdyshMZsehrgqLUHx8ro",
  "key25": "3FK5SofL8K7whWeVUkxy3eZnJdk1dAncUvNnPnBgSWhKvT5gQrvvZ8SVkFsj5rekPfPdFN82kn3FAMyHHKLtmn4H",
  "key26": "8YWyCppV2JdYouapB1wXFgfkM8yGNabiJZCK9sBJvmDRmT3dor1fLmCQDg8NieQrQW85edCRSPG2iNE5pDvfhUb",
  "key27": "3FwczTVqpjPnWAb2kwkSi6s2uPtm4UPKkSo42crY8jdg214hnLuQMunxk53N6WJ9K5CKkNffyi9wKLb78UvPhubV",
  "key28": "5dYmhQrXmdGygJzgZLhpF2oVsN7sc3CKmkESu9YdP98RzG69htEWr9dpko9ZBKMAhbKGJBpj8K3PcSJbtGnuWeSQ",
  "key29": "5Ad5VS1uEKZBYSy4yby54DQchNEbh4jUF52rrcwb135nfkRJp57bTT6gdhLzJUfYym8C9tRWn2dA7aYaTDppAiw2",
  "key30": "3vUmBCaTmR4Q3zCfcGHuLbFsx3KetgYvGyARh7fBqkovuyqxiHvvT28KQYvBXKYoD4y1NuYXPEZYCz98MSNmV5L7",
  "key31": "4qJt86c4otQia7Q1RpAAhg7A3bYhY9drKDNFsVkLULqSPRnAaoMxwyLRmt8eQGNXucSvfRkWRSh9NpWEMvHAxXjE",
  "key32": "5FUL9RAapHuGyXk5adqvykFMc3uGC7WWzXPztjXWQaeXHwn11vb7xBxxzrGHLG4TgNs4FhTwSqT8SiVV892W5rk7",
  "key33": "SvpY9ANzdMz6Jx6CBqcdeZWoLtrmNJyVWYAaj6vdEABYwq2JDUJdVxqaZ86zZyCEPkPSvaV2yxNZiGJKsmZ5K64",
  "key34": "44bsAAYT2xEkfitTAPA8dWmTpvwxVkWuCkkYa8Bv2X7H8koXTJn75xRb4coeptbvcuyUrMkgMyUpxzeoNd4ByuF2",
  "key35": "KdN39BdZopHAh7hgWZKAedVn9j2NkRFSn7tDUJHevXNaiR1KohZaMWJCs3vqA65XFVLAYJ2x5K5P6s3EKY8GM5e",
  "key36": "4nmjKNvB61KKHhrZ7cD6tofxWmz5xryhyz8xhLz515U4nQKuUodNsKgC1VSn3q3u2bWosH53cQofpaN8pVSdvWda"
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
