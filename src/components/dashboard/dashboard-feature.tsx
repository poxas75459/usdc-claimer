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
    "5g5vMFrE9RpeoRmq1Wxc5UbnKDX4j4NfVqFNRTw71i2sriSN5nhUSKH3fA7qxucaHFzd6joJrv15YZDKGe3KPimn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SpHbrfj788QAeqdMkJfXB7rcAQukaHtpSGUuEGDATycMcAgXT2sn8V3wQqiSuhVe7oU4vuTXNepBUHnvEba1GzD",
  "key1": "5vnm4NNA6N6GSTtBEUzLxqVrnFvnvkdjFiR5ujTFvqWFWquPDqPphGafj9MiKyx6z4MUHrYcRXYNBE6W7iHbPSQW",
  "key2": "5MVjhXvi2bFF1AXSfoPBZsmGGCUNP7HCagifvLnwYK2N68RciCY6VoCeSLD9DPcHVu62fUMg4jrZBFvoBpN8BeV1",
  "key3": "3cwdUKWamDkjZG4JQd677xUS73CoTA4evRvKgJ7Ef9nRAUiPM5HRdeiVbQemJxx8vgNo4mFn46XZdcm8rK3nwK8d",
  "key4": "46yG6axz53DLSqpgjHJ6NysxAvNTihbN7UUgcPBDGMVgS8xWZG5mrisWQ8UAaTDNz92UbsqYpaTZcDxDo9Vtd27f",
  "key5": "5a4cEKi9AuSfsUvR4zfFXq9CW72iCXjDsoa4PuBfhhq2ghUFpCvavT8UShsGHJasnsMEtFPDV4T1mxiiaFWCm87n",
  "key6": "5GpMoYoFSSn6F7iSSC4vG9aBskdBCqSNB9DsiivD2iBt5LkQTptrrA7igKk9L1R2ciwrH8zKuwXkxvrWfhtqskwD",
  "key7": "uNCZWYXtvpmZjYiLWnfNcgaqa5Zk1esVv9jctPuZ1AqgCT7N5W37nukj9Xcud43hypG2maa6GsWZdsGjQn4vKcF",
  "key8": "5YFmyKeTDZhWs4NJ4Mm59p1wMuGChNAcrd4ggWawoo7fE7JohVnFK31ymAHH9wZfQ6zbjrW7PCK6inp6qkCHvHHW",
  "key9": "ZXgvdwYpKubS4vYehqQPMSoQWtY4Gd8xjAWBZKDuThLJ9ZGRXGL63C8mytrj3Xu3bN5aNuLPEFNubURFJkgpuqi",
  "key10": "4mooQSHFdczjpGvJBuooSVhd37MtgaNEnHKFYYuYn55p6nJfLLXw53S1gnPpR8mXYCEdDwgPmn3vLs3zv9b9KiKh",
  "key11": "3q1c2zUZXG22c27oj4VHBbzGBHG4LoCWgNz5dryigHX4H5x8HJS3eQaVADP48Hafm4TCQMjzpxRC7jGgKFPD5oeJ",
  "key12": "46xjL6KRLJqKnmdUs4nY4HyrgNFx9xkJtmLS2n4AvEDvbs2tiS98sakiJdZ6Mq34rY5xe7AB2TrwmWSyuKuGsckT",
  "key13": "44URJr6UqvTVDNPjewur6gnXuHef7ogg846HA2dpn3U5VGNH3yHLshs6FjH7DJVqBiYzAMZMxbQoyGb3tT5qZnzF",
  "key14": "5yXt38KYnkTUDFYP9qHrKBMtwtknkBFSVeo8oT7KktJ2PLWsKsh1MsUcYLn7fwq3Bx8dv2HRupM1CLtRQUsibgQy",
  "key15": "5EiYQC87X3y2ceMUeG8mUjqVwb1TSxgu1psuJoUdvCofnBU3giqsoAF7CjfFcf4sdNGMJavSy4rCtbnBcBWKa8ip",
  "key16": "2DDXzWCQPycRxJpivEMGnVwQW1sPGWF8KTLgXRx7ytUo5uGhJs7zaYYagtjMCFU1knAkA9zbd5qY8jvaXj5ps7iW",
  "key17": "nhzrBHMcqUTBp1QQEe3gx2CooF18RA1hRjeJ1pSGfp2CBoKwp2CAnKuVX5bBnpM5Rw9AHsY8ATnRoqCRqrEWzPH",
  "key18": "47rindMz5PmeDTeBh5qohw4wjy66GSYvL23kpYuV28N3A1s6pphze2e7EYC7RvnqExVfhKJEZPnhMt4eTrFW8u6D",
  "key19": "4RrsBZqcFK8JGiK6ty6NEezq5CSrkopv1poRvi8foVkF9H9q123eCvdJexuCCfp9css8NmLojBA4naDw9E4X97Pn",
  "key20": "3GPNPPKE5vtWNzDiWSxKtvHpfpMQMS6sH7Zoi2FSYJe5Mi9XmvEVeYbd1psnQpAr5FuhDcCezhYyAnUVxFT13wzs",
  "key21": "2VuD9sMXNJCzHJThHPwMoYEeJ1hxXPhUAteRXTNauHpHxRiNygFw99TCEFjVDqSHBpuHGpTz9wV6XBVeB4ZHvnt3",
  "key22": "P3a41emnLwYr4Jnfw9iNzUzmrbRm9t4PQGxATFjREwiayAeyZjT1LifZw6sWaFDZfg4M9Ls1HRvALLTFVEDdqGU",
  "key23": "33h59VbLbnE4vq4zacpZjMURh1gh349eJSv2B2CuQVx6MJDey4fWW1L7Z4nkfYNz4NrM4Fbabq7R2zfbxKijLxJE",
  "key24": "3fBZC83MGwkdVvwBKAHRP4ujV8WEjRDsyP7w6AMhu52BEKtbsmDWSEpp5sLXjatmNpG15MWkppEkuzDh8UWJ9qsa",
  "key25": "53cLu9qjhqKDvJLur8UcTxFJE4dFqobEjYqWT3126eU4vdEmMjhVkasRKJWjiWqt3TDrT6gX2ciGrCoqGzWxQ8Eb"
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
