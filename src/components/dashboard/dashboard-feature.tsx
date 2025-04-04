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
    "2Fb8jBYBQnb53eFE956LS5aF652da4in3mii7ipM5sQRvXwJK8Cms8Fm17XEXhRkusQM3v5cCGmQuCc946DXUJ9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52DTBn3M2z9hgw8EEZnsniU4NgGokV7P8u7hCmzZuQ3QW4HX6952tYwCCXysev4o7PvzvGRVz28PwueKq2MtT7yK",
  "key1": "5viWUKgDc1ukYoMrjgbwgZ6pj3QAwnKaHwqEpidTJV6DFQZCJgmxkEUtF5kmYWGBMKGBUh3SS6V2BmYmB7KAFsgD",
  "key2": "59oAoQNvhMNxJt1S5vVJ1pjXe137So6gerBsitsg4iv7LBq9A5EKHhdSMPoHnDG265spZw4oboo67GJAPxNRApQR",
  "key3": "BokxeeE2frwBKNRML7EfpfCqjrNGzKerDfoo98iQ2bKdiKoku1L3Y5TmoYPVBhi54CktMSHwoMRxgqheNsLqUci",
  "key4": "2twZR7cTtTw53wG5ks5KQ9N2vbAVNujVQGuhVtNeXPjJBpMspcUfQVHtQjdS4YkMtpb16FNsNdtwurgbqU5yj44t",
  "key5": "5w2WVpt4bednNqkyMn2kqmNtpya4barHTaPVagiSun2adb9yarUgyGYc49vQimPTTT3MjWJGLQpkkkaYhztBWThi",
  "key6": "2Q2HxfDWj5P8hMThfoKxrXKXAEXcHaVy2ZJe4XfRreA5sRYi5Q9iQXC459FGqArYiRVJMt468f6EBZ9CMWunoLkC",
  "key7": "2Zz5ccdrqp3H986aTwmhoSy9Cs2GMfxb3Fac7ZSZu8ChfH2Bq3LsNmxLSdhjdonq3UgLuscYSaLn2DCDkLdK24vg",
  "key8": "4wz4nr6LsndrC2GJiVnRoNiFvzxxcUWkcsdt8L95Ger8efhTud6Bh7eJxVLvaucXDRNJ5qdbt7CLFKwD1ECNbeYn",
  "key9": "64Z4eemx6NnAo9iry6VvGZPUXKUGWHyWKVmAXgFoVCwuXovVsfEUW6toxiMbuWHfuw455nPLCyB4BY1dH6oVJwxB",
  "key10": "nBsjeCRQmVNg4xZzbz6cdXvUi5bo3PBQ18bfiXVnavXKuAyzfjDuHasKTPeKqwBUMBrD6maAWsTDa2MGq1sSqNF",
  "key11": "2W2kzMSv9Dc8xfzhMA56vFypHbMeFvQzBv8Kk1QLvET6iuEVB69mVgXYfr7ktBdcGRynQu8FK1sHfLPdpEPZMfAz",
  "key12": "5nii3VCh99SoJWsE1YmjjvNAMN9S4V7ixFAEzo8UVbXK9GBbXtLqkUYQJskrteeE8xSxN4ZMAGPJMtAztR4KK4Ei",
  "key13": "623PBx5veMVP7tgni9rascakmmKJfoBN5KKHjY5sMt5M6SEe3reT1fVgyGj3c1k1ZTEmVK17L2vGF4jH79cyoek4",
  "key14": "2MzpsULTttTzeZz5UAkr4nFVyyYn2Wgzok3fDi5m3Z1GfTKb7EHbaJAugeQSpaUggb1VCHzjLHcrcPDyCDVtzEc2",
  "key15": "3FgTQotVGpPLxvuJ5RXnwxqGJwv98Spc6WsPcdRDenMdBHmdL7fA2hJaPoY1xio3scE635SGWtsYFBvaBNB7m8tv",
  "key16": "63dU8xgK6TsfU8j72vMnoLtFG7jb9jMzUjDioYACHke9Ss9ZRVmvZ5ggyH6apDAqhR5f5myS77Wx59KAaqBLQJj8",
  "key17": "2zbmEorPCbCvYxjG5D8mXnciGuozqjdmgZfM7FD8gNqphyaAsqgY7xe36x7GHQjuzo9A29AN4TaKvUx9UeHjCwz5",
  "key18": "5DAjNB5yMoZ2gsoWVqUHVRnKYq5UMuyCVDunxk4VgryzC1nr6WcGPWUi6YK5fdJ8tDmAdrZrinLWwKgPkfRErQ6W",
  "key19": "Le3dvmP9QNRRPFqsEHq73ZbefymRX7mBHMSJWFWWnAeFeEp3pmMfaMJs2aHVpTUrvxEn5wcPH9iKSHrgmbf9LFz",
  "key20": "5eW91XRHZA9QeiesBY3g1T8PF2RYo3tJ5BwoUwModnfCKhZn5MsDPocXgk57qSm3c1RSxXzVJuCjQrMDJkgsgqoe",
  "key21": "2u4U2N1TG6r9tobv3C8Ks7hPJPU57q3CQH4VaixJAkPrNNoufWE1rWAfo1B7dYSDsCc7w99JxwJuumFszKRSjWkG",
  "key22": "h3nGfEK61T3edx89wzr1oZH5FWmfsMkrTThjCzpA3dtphM3Re9QhUqJdf9QtjHtMnCcGe49e3AbcfCqeDpgGZ1A",
  "key23": "4kZ5XBKsDkfRammp7syPdRZ654fZU12o9maGNtwrnyqu7EK7JuRo84cKss5Ruo8VkbsbULBpo16Y2ZZwshfidhdF",
  "key24": "jZprSywD89f4AUNkMv9CLx91VLu5YYKBBSAuwtZUg4jWDKewErZzjEwMyL7Vxo5sFqqvhFrb3hSznUkzbfTDoAz",
  "key25": "AuCbQe3eq31XQGeqb9WVddtyrx3j5zBatxEGwx47mzUbppHWsn7jeUELcJ8SWyCm1zwz6p5NNST8iKy1K6VeBhS",
  "key26": "3BhDptoUwW7iHAUgytvsmGduCgp2pakvWEDN5jRDcosKBJZCGUjB5emD9bEGYx1TxW6NN4uT8Xvg9vXB1AvwBt4L",
  "key27": "2WJNzuE9GB7v9UPwHhqUGxcENerQRTgENkcHEXsYeTzbubkNn5Sx9FCEqyW9hPDXMvTWEvuACj5MaTW98yVuE5rg",
  "key28": "3wEwt9jtYg45FhYhJNUTkG8Yqk2frwzsLgsFovXZdT6cx6Dudidb4pv5ma91K8onG7JWe8TwPq1UztNizTUuq14g",
  "key29": "e9EJbjwLK79xUKuFnwFXAvncDVcSKvMsJ3tvbUKL2RYq2dzAV5Kka8AHJF3mhLEbCQDa8zwypCAySmVHy1Qzwfu",
  "key30": "3jvZxQ2LC5xNPZH2MiXiiUC4t1g187yJxJ5xqHfE49o1QweddLpWqSNi8kirHJNKXaGBtM8Nf3yFGs4AvWWuVYXM",
  "key31": "wF566xrVzFqs2YzHtDiRsUTub3yfkBC6mvotzSjF6rvTxg1XHHrEGNaP6ZFuDnPnC2E5ghmcaF6Z6fYuw2G5p1P",
  "key32": "2n3d1Aan8NjaYX2nqWF1xz4j9xiTtdhCECFV9KPs8osGNrcb7cmzw8BroAYEBPmmftTuawLqitnA1625YUZMSTMe",
  "key33": "4ecFT32faWvH1GUTRUgNWTdUqkUs6noZdGLKCPshLcRFhRvF9wMWfvCVtZSh73qUtGiYDUJzYfiS41bwwCrnShGL",
  "key34": "4JHYQMGyxAVruXTB4fYnTfqLhJohf8MiW1An9YDBqWBT9guTr2aPQqWJF4HjybAU8adXKbiy5wWW9dCqxRENCM5b",
  "key35": "291o5dQ9cYHPFjkcu7EztDAvHoceSMGEX6Dko7b7qucVZzwNWR3J719Hr6UGKP7ExjwUexSFRetJvGRs42Uxfr5y",
  "key36": "3vvcL7kemkBqBHLL3jBWjg8wcQkPhvcjCDKUQUku2ybGeisknsRThTxBhaTpBsekidLjkgh7ua2GSCbTwNumFcz4"
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
