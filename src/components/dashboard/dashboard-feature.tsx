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
    "2XgT3dfS3gKd1mrXyrYLpXSJs47Z8qwKCq2PEtVFc8g3ZgX8iWgiZKTMzwkLSPUs41hXugA5Rmh3gZXVFMN1ZKRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZewYPyr2reEPfxiUVXMWCjWbKuhBzSDH67wYr9QypknhsMP5xEXuXxa37dRQvwZ76362ADzUBH5beTbXZTLBu9",
  "key1": "5GkdfBNBpNU569bb1y37PHBgHwA7kZkReriWi8Q7QwQ636fGr3jTi73QpYmb4J1rp1e934iYyTjxXhgfnuXByhJr",
  "key2": "66xCWD7kofK3VK5EwhvV9Rg2QqUczGGcdTc1Jcif91Wary3PaPzn2CAkUQaLZdhXyvEMUmaUnFC2p6mP6dThHngG",
  "key3": "3eGBQauxx9Wc3oRhxkUgStFSBGkDnYzjc17mJ1JmtSDQMuGbdMhXk3tUGxHARCtBS6dw9ynPpNd7mn6dioc7eaX1",
  "key4": "WktefkumKJTwuABNZkh8wZZsoYPyU4h27eabyczKTnjEcuJpmJsWxH7Jsa2sRkM7sbxt5sLfG2uDSSRH7q6yqSU",
  "key5": "5ZyyDAq8ZbEVzRFStRHwqvcycfpFJQ4umm7Gzbn1BGKaK1w1MAJ3LSQnvX8qwChtUoEVGnsRgaLrqm3wakTbgGHB",
  "key6": "3srJmNDk1tqHpThPtUx6qvkj6qyHyD1VXsejjwJNf4gaRdMUFLgU5AynUR92Jezatfke5cwKFhew1kWxNJKU9gEY",
  "key7": "3HuuXSXHCvuuyg6a4cTuk8M44HeVvvEuJE7Dw9HRwM6M86qTLrM5yhBUmHoyj4Eh5ppnENsH98SCV56wkYoimeib",
  "key8": "2AaqYJPmWZCGekJjXMADaS8nNVizdfbBbg8Pes9EcrMYp8twpey65q27PyJBnfXHFhdQoHm6ZBnzEPzcta9dxW4Y",
  "key9": "52LsR787G2MVcXEExR6VwUdXWATunnjjkaCzRyUTQuDr1u99pBtqG79wFPcHSL9LfFsUtYxfj3LxCCGSFHTH7KcX",
  "key10": "3jonDwtHCfnAhJkCWfJGjGwkbUktJa4miJvJ8MHA7ffJEGLhhW4S2wodsJGdAYFR8fFQFFoadjiT4sRsqcQBWHt6",
  "key11": "4dzxrg46xuwBBznwWurdrCHouBzRJzmYicQb1PmxhQLxrTY5FYyxToMgUPd7w5KC1enihFwGQQqMHhaVFneH2EW3",
  "key12": "3aqytKLSYyiZvhArRyiKZgwR6Xx1QXcM3ieb7UbbtqcS9GodLnQsYgn1UtHBvnVqS7CSXwhd4QB8Xis91WuR6Jhh",
  "key13": "27Qa63pm9w3zWQxMok8VnHFuRdRi3jabiRGSdVsiDHfHJjoAFLWvqF8kEQVJsgN5n3GbaRgUXL7aV9yjE4kP13jC",
  "key14": "3fp6WJS8txvy1kAXfc6fSmuXnPdcXAeaupLn8W6Jh7wRxeuMCGEetHynXGSfNWqARwYentmu3RzGxzyvDMsDHWyw",
  "key15": "2SsgdygxAt1QRGULnBjhgYtrHddArDVx9TEy6JTivuV1on6vtmyWoPEJyW6cyoCUkJfJdbX6FS6ToKiPQM2JbgTu",
  "key16": "2oDEXrH8o291ccva5ebc5SCW9dKNnDpZjzvtpM1d8RCP7qQPdETA1oqSamctZPFXWXUWVEaVSMNqddBc7KHpEu2k",
  "key17": "58qmHQufs8yPvJmigqHw78BuKbmt3FifoYzEDHCYq6KV9hia7QX4vYkdgdzvp5aX3m6DgM5fyNuWTSKeufzPHw16",
  "key18": "3XjyxGXjC62eiBNAYUvf3y7gC9NCJDqwYyy7XTaZ1iXrgTo28HgUKcSfd7PdrhWgceKTifDNzR8h9kfu2jNAWadY",
  "key19": "3KR6ZBwoypb4VoDW2WcUxDxYBkcMjM2ksvjnFM1fkhqQ2GspMeLTEV7fAAnLP7Lyfs773P24N57cGHEw2NcyqJ1f",
  "key20": "3KqN3a7KtprbheAd7uoEhmVrL4s7SxDXih6HXohZj8smwdZmDipyi6X8Ust5J3tzX8ds88dG92RPiMfJJ6V56oVe",
  "key21": "2QnTaghWSYQF39yEsGB9FfkwTPpGkL7m6RSxoRf5o6W5JHn1zJ3G1Q8BqQEeHEjHB9pBsheauf4gWoKx6SsvBHaH",
  "key22": "5b6mMHckGasbhu1bb9H6VY9uN48fsghA8bMkmjuncLQC1iTVyX4WnM7yrawVciAvDzxVJUeXEP8FEJecAmV4e6Hj",
  "key23": "4TAPm2rr3jkhjH6mTiGAX6rsK28fvVdoTc6RTp8kPhi1teaJFTAebBMDSte1JkSnPspfEeLoRJwy7qMpd3fZWSeU",
  "key24": "3eBURPAJJ1JjVCSjrTRVqvB6B372srZTavLKZHo9AvRZJR9pjUbvNJaGouFikqpxGAQVMzSutERwU4QybkDgFFHr",
  "key25": "2MN9H8wEk5TRtvRmNfQX4bFP36acgJEgoFE5VGzWBnVuvc3HsRg7rvP9JCPvt9Zkzi82BzPH4LxAhkvFTaLRWWtG",
  "key26": "5ZhXjBUkzaTYLTKvnGbp7kjuyHipDFkf6eXjo85XFuTcaXaR8FnsjCpPrTnV6THPqkbCLrgudbuo9NceAy2qNU25",
  "key27": "tyskpyB7FD358WgTz5uigKLNyPufprwdYGLyYsb2tpLqjJHQYu3k1HFPCbUpdHLae64AimvAmxhr7G4jtzSWYk3",
  "key28": "5wAbmeJ5fApUsabEuXKqa2uVJwPRYD4JdZBCz6aXZsq2YMijpeVALEfAxesSRnfkFsmdEJTNPzdhvH2SB2g2Mpay",
  "key29": "4fTCVWyJYSKjs4cRMb9KxRx1ygK9REXDa9WbknwZshrGMLc45QJ88Xot8HFkGxvKhgjD8y5YEi6Ru7qqYfukuhv",
  "key30": "4VNWNV4LV8XjjvnoFAgiE3nwXtnPcsyGyGvzH3KZAsYKJzPsqbiVBVCLCXj8ciwGnehTkoj39mBNQfWJwqHeoGka",
  "key31": "4KyT9gW5sZWRBvNMC35hGSsi25V9C1mTg58vehtHycbnvgQFp931UF6VseBjmkyEM48WWhmTEp3AjsBbYN5uF5vE",
  "key32": "5Hk58DjU9gEVFx8iJ9ed76zABnqW9ATUmr5YZju6xSA9dm77tdoZa2pzWumUvMpy9ga15iiGZ52muX86Gy9kgeQU"
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
