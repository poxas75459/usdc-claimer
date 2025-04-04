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
    "MR11tPc2dM2YkRVRhyBnopSihPeLk4AtnADsxhwn8iftA8Sx9UqKAfw9PA6RiYENPgL79ypVxaYd7mRe9HE3LYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WPTU3UXCvfoEbHE4ujog16b6hgckCcuxFf15xY68QGM3tdz7VF8WxpdwJmVothBw34g2JHqibnBCEkBLRmRGUt8",
  "key1": "4XHSsLF1mFFcR8XfdvrjEjjToageqekrGqPGCafeovKZKd4uMZoSJmAJsFhAZCLjbJBpANqkuLrLjxdChod7A7ct",
  "key2": "2RxVXaVQfmsqWJ7bbsZYbPNYwJfsjLQtmkdFFDbGWANnkP4zyU2tH93ZLMca6HhuYBT37PiHUAKSqawQRXTSo3EE",
  "key3": "mdqyNmBuySxQ8MsNYbAahAbjXYF3fE7CSYzZkrgKAgCWHChFXCy54hpjmUE8Q8CXcD2iSEwRWbGzvih5X8zcBBM",
  "key4": "33bwKyPUb1dgWebb7XFsaigKYFfcySHdXopeopGpvqRSsPfcD6m4HWaDkePp6cQzuxBHdWDAT8XcML6imkLhERz",
  "key5": "4pcPqDCqVezVwGaDCnuvWPYWSyGqLkDR5qMzetfkZMFbnjXBfNeu9Pfe9wxstWQEGQRkKg1Yx5xdcgDig1qrs8AK",
  "key6": "473ACzcFgoheyFZnjaTfGXUpnbNZLnDyF7n5U6NjHxZSVWgxhsTzyWhzrdcjNvjn5DrZuaT4mWaSS1jFQRFmMFcA",
  "key7": "5xs3Q9kMW92hrBAwnGQdkF56wVVnzPpGWRshzsMWMwnth8Fb1PEos2dXS4RSzXkwL6U8wgtyyWEmiCwaWzjzVnCm",
  "key8": "ZHf9mWyUMXgJDP5LqHoSMQHvhMMtLt3ugTenSFDSGaqDrJeZcfMT9DRxA4CCbKsnaCr32v9Uskukm3kmRgZ8KwN",
  "key9": "3P7hTT7i8fQYho9tRqVFbQF262cnED16uY3TcmQH8Ue9xJEt3mCPb9kPRjgkvXCCdWcE9r4WcWhvUtRAp1FSnD3d",
  "key10": "3FVrJd7PFHLhLsSQzCKTFYD6QW8nT1GKUfXtjZueDMA7ybGMiKDRdXheMcFEea6QmvPjKtwKhuFwQQsKydfdGDLK",
  "key11": "2G6WRkerDiZHMWKSmJbNoUHAoiMB53Nq9EjfFu9oyqvVWWTm3yV6uS57Zf9e4jBREZbnrssUryxb1znJKz7XoPMB",
  "key12": "2dg78iwpj26hWpB5Kzd1Kb1pjdSb5wFt9uDcgjDHzQ5dUo57Q81kT24S1zBTmC1jQmZeJKP1EKPrxuTgkg2VZHnP",
  "key13": "5dwozBESC9q5MjmxvujVWsXcwuEyfZCN5UexvQEkPCdvFNt6gHAgDrvzETrzv5jB6JLjRbsHX1c5Kq8pkACR5PAD",
  "key14": "5cTGK85YiEMdQFuKk1v4bKYV8qLLdnW7RorKqiRqppJr7AKP8VUgYCW3hDVHDf3r6Kc8C9P6xMtErDQfydhUSfn4",
  "key15": "33WTyK5ZLGiwCQuPDH6UoiB7QVZyW796nWGdb4wFRDmsRZ8xCovu6FCRJUvuQeTbfb2gUoPUnhNuPEsPNwJYga7u",
  "key16": "5Pg2NTdgm4KCHWKZ7N49nJRVbsybdvDprtE6NJdZRta1rJqA55T4RzLS6tkM2csZ4djke9s28J8RDrdU58nMk8Wa",
  "key17": "5Lr2cQjbF8sjeMUor98REvzKeyxas1oTfKc23nnuyZmJ4Bb4U7c48bfszseTuQVXhp5J7LCR4ws2GrcChAiRwphr",
  "key18": "2fphoEcK9j3fbaTFB8h8eJ4KC3r7iqkpBWhFMAyDf9Ljv6tB7DQ8ku9bgWpBgB4dsRs2oYuQC7SnkH3FWfec3hvp",
  "key19": "3FXVNyFkAggVjw5jTbjcdgukU2RixthPdYk6uHcJFhxUKnEyxw8N1QztLK15UEqV87J65MfYHxJQJUCvCg5TQCWW",
  "key20": "kB2NFuTNt5L1V5RBRf8SV6LZ8JpLXdBnBvHWPtEp3523n7YfQfxHHdsCHs9i1tFm7j9ZxtyJ5Kxnim6awW45LhX",
  "key21": "3fAPm2BREji7fNY1xJ76upyovTVrhTSZXi22RGNQRxBtxsDv7k6Xbj7PPo1GpRdGqBLyuDQKeDgLLYa2614yXga5",
  "key22": "2bha5kdzd8zU3kgM2wYk7X5mft3pvv2b9GbKGjYRGEXfrWRmPBfvNJoQChCWYNGrM3MeR34qeyuFpMsmBFRT5pGd",
  "key23": "Nj8x1x5XqqQqWF62kUoFwXXsm24MiEirx9M5fqpxqT4jTN8NVXdok1MwLmvvyQKJERqKJXdtaAemQuuUuhv8ZaN",
  "key24": "5E6RDBwKhjQHe7QrgCA9HGhM3zVrcY9AXa1YVjkMmLFpSHFHyMWiFoHADJuTfiGBUe49a1cMDgQcfhtYcx77em6E",
  "key25": "5ZrUHYGRuDGxqnAz7mwMToqWqoC5Br3JcyPN1nMJ3dVwMNRCXATaM6uPhfsrZQjZ4pTxQdbMjnjR9FhkvosLMe6B",
  "key26": "5PTnY32KeLxiYuzHwBKy1d4RGcK9bmtvY7HEsNPBF5acAhjxpjMi8xNHAosBMR9vWU2Jk9WNQd2thBmdrZkdaKi3",
  "key27": "3u8jF3PjV4UNsXxFaG6U8W749ahS7MWQUaAzULrtniNgfrzBZ9mf6RRaQeWsQR4S27DKgE5PTFzYpCtr6ZqNWq8T",
  "key28": "4Bn9GCBA5aEAyCqTjyjUNBEdq5xrrN98ifCr5AR1XTobuUcj9QLstbcwFUXFMAZYKgM4kCYxtB6mccAbrFo65V6r",
  "key29": "5HxBUteCDXgoRb6u3daKKacS1oSgiL5P5jPB7EyhUyt3Xs9QovovPGQZmdTc4Sw3dAKRP1iLroeSNQNyHCJvjxv3",
  "key30": "5YWwN16oFRVHHZnYsF3FjxvFGmqHtLvaxDwX59bhPYze66YjkGUxDFYQKfERJdW2HHtcCQQTujp54xSTvJHnhJhR"
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
