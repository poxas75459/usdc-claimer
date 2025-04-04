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
    "kWL2DLTnQuXpkK3ZW2WURNyW1JgXg52rCUSwKmHyQswhunZiebT1ooRFfroUNL7a1wmAFVtd6GuRjFCksfhLQX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oXCE27PwU8w2ens6fAM8jC8S3CQavJd2MebjvBVuPNCJby6UEeStuWH2CB9wgQDi5VK7QwHmYST55DdaLwR6u8U",
  "key1": "ozec54cDgYt2zgmHHFesCoWu5xiq3SdS7XN2ZweyvjsQampSFtAhvEeSLvnuRE9iarqoGVua9YtJAgCECzBP2Yg",
  "key2": "5t1G4UvJ9Vz5uXfPtxmNqGiGqiay8RC6r8Zd1gQYrndQf7uQ2FLRLXQdpn22kTg9R9qvQRyY1bM3sXFRvtcFWevA",
  "key3": "5GdHhRkdS8vczACprh7DgCrNMinbtLevL3e1L4shxyWpHJ1XvXHeYffBUDAhg5g7RadMcCLiqU6SzwY24MHS3hv8",
  "key4": "5CsoQjjxwc8NS94KUjnPaRegbYsCdGyJ5Kba6VBYzQbBcy7fNrHyKv3wk7epUaS83jbCKJafUnYaNcqMtHrEoGpU",
  "key5": "3nn4yEMFtL4aaX8xRbhELbMSKaqwoui2NwdfAWfBSVkxgomPPog3qwyr31tadnzffYS4v6SbY9JEANYiLf9WupSp",
  "key6": "3yA8hwBjgSr3UwuYdxeNrdHcP2SfEsbUT6k3FGoNGjyjK2bXR5sHkEAcTW4ebBdhjCtTNSEhLvwGk9drk5uHtPqT",
  "key7": "21HGQKuJXaSV2Y8aEcXyrWqH2XDZBB3atZf5VYSU535wnGSgsgExa4M2PLJvUqLnVgMjWGx57c13AEsqVd8irv5t",
  "key8": "5CSCMvAfYWbYTBkj1iohoHX4CznqBRraUJ4Cz9EnqpJz6hVrV9wN4F9ZYCe26EKu8moWbgUEEkBRvrjpippWW852",
  "key9": "h4syMrTr7q4u8um1Ld7xLRjwcGBX4FZwLPMJLchnrEyGxvtwwLzbgbLq9ZKxpgXaXr6AcADZbZBAVcpqMrFgGZa",
  "key10": "2bRGt7SxHYcxd7WEMfbeh9QUwYZgVxZawzUfb4ZpPYn5e8zJNhJaCGPDD5sw7mJYVXUbvvRAycmTX8QTTVDfhN2r",
  "key11": "JT1PptDEvmaFZqiNznTURraPQh3ruSb8SPcMmTmstEPX8uUbrdT6M6JVJmohva3PCB5nm1gV1T1QvWPWrnDyNyH",
  "key12": "2i5vjJghqa792fDTXbqBGiZb16rWRFM6ePsgJ1V4QCngM3LC7RW3766sbjMTA1uwrmgSTzmGuWaDTeiRureuMr7u",
  "key13": "3cPcMfjfJnXjPMJHAd38D8Btwoc2uT53qSAjEg3nif3E6NgN3DsauVcn6r6buTBEvu49HyAkj1vmJVkx6nuGQpbH",
  "key14": "329ayuftLm6eXoK7c8scgChW41LQNiTBRbkEMcm2zDrbZuyytAUQYScmhpYjrwiUWxoCkAXnZzXvUsoQHar6Ex9w",
  "key15": "4vi8BuG2wfGYaQhJVpecjPTfYmyAv6NSyb8JFqduauCHRsP7yuGSUCgirL4zQCFVNjRmrQoVWV5haDir5fmcPCbR",
  "key16": "pwaL4UTgoEbfMhXyGXNLHmbuEBZBEg7fd3Fe3N2buVcgtgqvSadhjBNLF5M3UxmwiDDCbYWBrY5EFdUFd9F8Anr",
  "key17": "9MJNyagk5sKbN6MZA99eqdDEpwUp7bQKeh2JCEMc1TnfHqtiSbkV1hGH82oifWiYiw8ApXJGX4LqLCPPmwT6zg1",
  "key18": "UyQgGKYJ8KqHotfdm8WBhSak4AQJD3csqXYhaPuY3JJ7EaSXektbVtN8wD2KmSJEJc2uLNTErHgwdof1G6Yky2J",
  "key19": "3C283X1DEjwMfZPmVEw9K2JjEDEqJj1mwft29sTRR4s2ocQTFzJ6nWRGe7HvKLFyC343MueWXGGB6y3ydWatc3ME",
  "key20": "5bfhK5TTZ7aEdJhmJo3M1Jyii4q4nMuoLDfWPLAQRbF9jNkNSYY6erdwnuEKL2w1YVrJ9LASvtpKwqz3PjZMVEGw",
  "key21": "287wvkyBSSfwGMnrRbQFu7fFRANY6ud2heHW2TUQUtMLCmK9qwF7BE8WXxrGimQnH6VuewtxdvfpnzEZhxFeEJwA",
  "key22": "4bJzfa5f6q4cgDkoAe4hGUeCPRdP87uRGDPjfVr3yuWtuBieDvZukrs6jHVADMapQD77VLTbXSx1c4zszoPszjJo",
  "key23": "431HDehFS6cUKV7C2pRFpYLbmqoCwndMW8xqjUZMrhwqB1joR9RXrEpzUxHBMGMEcPLECMxCFE3ZhCMJmvaucK64",
  "key24": "3iLj6RD4LFGmQhUZ7VjFznU4qPskPPjL6Khsa5bge3njQbBH89CxXfiRDjnWPKDXc1ZDF4D3oCNLponYmtd5r2aN",
  "key25": "2LtxhLuCEGmERBrz8bVPxzwBB1jrXVAdzM6tN6r4wN4ouCu78rdaMHCdrRRZE2VPqmr7UrCzcuSaJp4g6y6cP1pn",
  "key26": "3B6fGT2aZhaLYoLoggHJZDorG8jmfacq1z8rk28bxTr79omHDuBH2NtUvWq6b6Y94sdfLrCaCau6o4AinDc7QkAt",
  "key27": "XGezua2t8Qbg2aavEU87ZxsG1fTdmMHjWWTjsgTfBXtfbj55bgyJgsZg9bqVt8pyuZjdYxGrrJTy353jKsbgQ4Z"
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
