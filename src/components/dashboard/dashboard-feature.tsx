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
    "4KJEVf9XakEAS4chQ71T3R7cZkk4oGpRDGUytUvVgko7WyNKQkwj6U31HU8FNTUPMp1SW1WSyQauiG3LywgzRzfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZTXbigJxzi2rLtviKdYg18VA4QtpPBaaH2BxhgF1L9WjuMV7HTyf8MuWqkCX5BaZZ6k7zNMWopBMetZLfGpY1Hg",
  "key1": "DqYze1xk8WqU5aomrD7piky9fBxA9HiRwBBjh8zttXhywNXd5tN3CGKTKz5fqtjUu1ftumT6iVkefDmVjEXphnG",
  "key2": "2affxKga4dzka2Un25zhE13WKSBuRzx4gpsf1bbJbpc5jGc8FTEoT9wNJcwQMJqSMuRLkqpCtkba36h4N2dKn9vh",
  "key3": "3AzjTp8xigfnY9jqK4gjGegESiDS7h3XZo4wp8js6RVS5qxpzmkSew2GogihX3rDW2pMz6Pxwo2naeiknFTtthtg",
  "key4": "3ETLF6gxq9WF2cVPRQrNfjAHieLYMpoFuBANT6W3N2UvkCAqFugAoMr1FiGNzAcXL8RCuqG8M37RY6yFfg5kMsFA",
  "key5": "2aVsfCSyFSW4KfEMqWfJhGPtbRZt4vwu3hTTgaS9FDUKL9LeaDmpYYdcDiHQkKFiyCHNcQpgYTo1dH3MMwRdn4Ss",
  "key6": "PiSyBeQgQEPfXvTYZ8XwR3vuJhAK6T75UWzMYQ1JFubNH9DMpAS2yxyny6XvdYtHMpeJzrqw6sinqZY6KSZ8Jr3",
  "key7": "3N4iuepAYWGuEULWaHJPgZ2K4VAAEJuKB2VgXBM15x1s9gyTTWvMfFkVgHhZu1QfNzUbwwVv76JX75ZXEX9fNLag",
  "key8": "QitcoF5qYmwCHJBd4u2iYX9U8UZpXNPjjY8pG6TDiV1Pebx752cDzFGSTa7Ss8RH26YBkdp7x5r9abVvsr8zUUj",
  "key9": "5vStzTutndkYaREp8sDyTQhH1ejY4RVNrCy69SJQsnr62gofg22PMRyib4y9U3qA7qMFXH4nPCcNq1t3GDi57VQf",
  "key10": "5aaPa2XjEFHZcRgk5cKtdsuYs2xgEUjaYUFb4VSXZhiTZSX9SXk3pQSfetfgvmnuw2v3GEXuEyAdH6wbQi1PbMgZ",
  "key11": "5zo3jTB7QLVwgTGSx1WCnHsBB61jzgs9DGsNETVHc36eFaodXzgyEASvaGUY9e5fthj4TY4YabjaiGecoRsTRKKe",
  "key12": "2kzgESfQE94uW4q5Udt7t6eQUBg3R8z8NhiFTzPspzfq8V4knoCq6GMtLYrWeKsbwVCfGedDaD5YkZz1DbzaGkEH",
  "key13": "34rzFtLVpgZcx4YwA4LuEgz6ofiE4yu12qQrrvCYeomSaCMEwV1gKLhiMa8WqfYNhzRFCebhrinUdsD7UZzffzES",
  "key14": "4Nt7vWyBDPWnVdkypamXjf3tUMpnejTa52xJhKsBbLRzVnA91MYbyTs7u2nrBQdzXLyhg9S5KqAYiKERgnnCFALc",
  "key15": "qVaFt5iYCK4VahP4FXPCA2qrZpkeyozDpiMotU1nmmuyZr1s9VyLL9xqgoHjbk3aYd1gSsarnHEX4w3NsKuBDHd",
  "key16": "paajjXoNpCYHFBNcyU343ygPFshZQmxvK6SDaQLeMrUBQCNnYNhK6qUTz6WRWpUogdWkCUzqHoRcwDynKJDVCRp",
  "key17": "djTaU5ao3GxQ9VhSj5KXp1tgDiMBE4TteqVC56vrDHeoBuALhAvZTgENjEtcaET4irsAjn6UwQcFpsEyT1LfpV2",
  "key18": "FAkVJptpbwh4pk1GUdt6WB6LMbGDUuUB4MWhXC5fUPkG9zjTZemPbToPYgeWGVrajq74TZPcUMA83ocxDEpBjd6",
  "key19": "5HP3edoY4VJRe2fsTE6P3hV3UaqgsEVyKwYQtF2TYaRbQLkikUQ4RQkkdXPEUvmuwZHBzETf993g7846saPPETcC",
  "key20": "5ezum4PLDKpiGBajaYnqmZwuSQLtpKjStxhLU8MzNa9SH5zFryntP4u7etLYeDATX3q4BvoT1MNhr7ErtKG5vq6v",
  "key21": "5bDA4N2BKJ4MfUZccoeTwWo6oV5XADRsd18hZMxFGPVSRq2A7YddK4QFLFMYBwuPadw9qXuWxZ8J9mLsrTmJbXDa",
  "key22": "5BVkG7hssS8uWxWu9h9unYiMQXBEtV1P2BCht1eUvURrtMHn41oQNk6HbAfWEPVCNJGRW1PHtb2QB5ryWDe9uCEh",
  "key23": "zt9T3MvbzeHHPyShhm8Fsg93jpJ16eUVwKaFCQpVprrLekUYNunoq7nDRAprVrhjUCnS8h9BmFPvgYvk2vD2Cbu",
  "key24": "64NS1eV8h8WT2FfPgYbxf2Y2p1NNwJfCHyUjWGy5ZbsrtfY82PB7YnrpisLdnbqLTa6RYWgFgPFm7aQwMGJZ7tkJ",
  "key25": "3hwMSVG5wxZYEDB6Ktm6uBhxqPE1NucJqL3Xpr4aykC4kWYcvMQXoYiwNwT4CSZ6Az7MqaVewFHxLVfuv9W1hiLh",
  "key26": "489acWDTz4FvwWQ4vW5ws9DDvohXQdsxkwn4VQdn6Uhutw3Zpgwx57yx1JDHaYz2DaqUVaEqAkkvVHE7pBdV2h1j",
  "key27": "3kiorwjee3CPkckmdz7ykz2EZq4Sj6PYthdrzqJwCUpbarViY3n41qpF1JW9EBnwdvZbrSWRne4iSakELv3ChDtR",
  "key28": "yzrZNmhC6wbc9K8hzPyApH881xXr1y8en1uW3ag9gBQW7vLmknFjurHxzRWxA2qtzcoNCqkt5kqVmR4ozzFNuH1",
  "key29": "3zKRa7tGrW1Dm2gqa3VgJnNBiGqq4LN2DNsoDqKZsw5zRJThMbVLydnGmc2hir8rz6ddhsMt9MGPWvUArqsTJ9rB"
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
