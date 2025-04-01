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
    "4dZri7Q9tTvU6qDbimPbkinmsaEYPYcQk4kuYCLqDFbH8Dgjr6gB7udYzj1oxXXfa3q6fUXS2MEwQrHouSszR1Dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34dbnytosTNwLgcjkDucW6kHmNGtxrmkvG3FxE1bvv1xjwN2TVKWu3ZUL9s7jDcJ3rrbCoGejxTvworsMSXLFCut",
  "key1": "5xJpppvQEQimVjGaYWozZoyBYAaHMMxJdUG5qLKCEy7A1whX5NsGWqN1Kz3NSBCL2ee8pWZCg2VuwMWYcZpSBVfi",
  "key2": "2mR2D8pQdDmnrEaAmo3GTC1QT7ZZj259cuDp6fVYGjyx3g3C2o4qPeGNn1rv7wvF7zLvyAHf6QbcRdamFPrcDo29",
  "key3": "wLBikjxmxZGjfZHjhYaGJeHtKdtmaroZkVGEJqv1hPEg8Doo4x8QTagUFZJRrZbRSCxRNvxehoaBHucAxbtgVJx",
  "key4": "2Edem9WfeNdSpgmpfdHc2moPxGJ6dYh6uBhaRbWHKhX1oirPYTv6UBXwkwWCdqYqJGBF8KzJe4eWpVWn1GsgKyek",
  "key5": "5SdPDRDj4tJEveAp4RMdGAwscDvxEHtqRUVYbsQ4zUCgVQSPVXi7sGAMRL4bux7EdNMVzVYsxr3EYAY1hVYmWZGq",
  "key6": "2e68tTrzqBNBv8Fd8V4mLKEtbaGXW3GdmFtG1d95R58cauVGjJaFZ16MXEeNbt5t48yCbtsCpY5BUXfpRHQSGnx5",
  "key7": "4DhZnLRRQ2thp3rc7EDpp3LKUYAjFCjjbkbU8uN2vrtHGm4uoZQsjiMSnd8hnmy7iShwiuzcEzgGk6PaKEb8XHQa",
  "key8": "5pBmL6UGM5M2iEw9KmkEqzKmJYsVCBkS38RWQ94trDZThRZoD7jrXQdtQRUJHPpu14kKa4DxC8xBiLjBCdUVxue6",
  "key9": "3KibJCDXJYssD2W21b1WcosbRQdVBjvQq6TZi7kzuBT6naQTzntPbnG3H2zrhX8LAbUMkQiTiSzBaqXnFXCRRMBi",
  "key10": "ehnfisewGYMbFkF3jJ5RT93HcFWTy25WC9cX2n2jAgqiEPECcLYsFqaQctVfeBRdUcxLiiTFyoEcWQaXKacdbNn",
  "key11": "3hzDwYBeTQmZ8XdcsE6MYGn6oRMzwWkj42UCZrPbSrPvytKMrwm6VUVcf83L1Vn5Gi8V3siyA7QoZqpbzWk4onHW",
  "key12": "7bKwCXpycPjX1cfjwzjZDeM7Vetfi7sYJPVsRi6bqABF4wBw34h9kLpX8HDxFMTYM2V1fJDF1tFsPzsutJHsWrT",
  "key13": "4d6prv3Hf4aEfAkHfduYPxpvtakw5juta7Ukk777QeY9gpcnye6mYDWMnYakTTqVQc6AJtNMetzCh1QDh86oYSYi",
  "key14": "45moc2ve3aQNqd32b418mnUYuh9VPWCTBcyvjjBPf6SnCn4TNkRc1BxCMzHfQE9qDYWS3yHdvdAY8KZHDn7N7i4P",
  "key15": "2uSLGavf5QCFQHAHwLqtRnbd9ytAouXSgmnQT9vhxhJB5FzbbRmp6QtJmMHhUoMu92xxoNwsmM6JnxZKfZsCrvSs",
  "key16": "4CK1U7dFc2SLQNo23G5fywuzYT1x9H57JMHiGQM11HuBvsWnWTN3Xq1Et9rLeUE3QcSPnfmHTT7mpQJnhVsgfFey",
  "key17": "52a1aApzuc7tLhpnfi253EpWBD7t3jeyuuTVGAwRyMXyUeek7ZYSewEQfB6TiFhxtoJETt28r9gj7KNxEFymy8YL",
  "key18": "ujFFM3rJfvyKaNy5DFFbiGSyWGDfNQpXcEYEFfmtT97vA7Neda7PGFRNf3ZydoJzUUg55LhPTz7hAGEbLYZBhEo",
  "key19": "4BJuvBrGpQuqQUYSPmru9J5NdyeWx9bjK1CuHM2RSN6Ntk1NsL8y6xgpGiGj6ePwF1ECQKyNyiWmZgRPEe7EFY7f",
  "key20": "2DDsBz3AYo4ydh4dc3SBAFBwPwF1V7rnEGatZtqWwkwQpHY8dnTNC1DagA8PUaegtGbVbaHHriR7L22xQcaJXp5q",
  "key21": "dxFRUT1wSXobRwUaQKniaan3h3wXnyn8iaSz3HteFogrZoovKR7U1uKrzCHy5MeZgYjUsidJn8g8PTioGzcnPUG",
  "key22": "3D6EsTPTm9mxqPsSszqjvXaEMdNLPq8WFFAn7YaU9wYTzEewULyTJDHPDSdi1jQYBDJS3XXk7Wct3DkSn1QWauTc",
  "key23": "PxLPNgmHeSrFtkkQmGLGgQqvTXxT1PTVwnedL1qy6MrrTHMyJNCyiAYaoYiGgaaKq1w8rupVxFrShmei7KSt5Bs",
  "key24": "5P4GGTpXvb1BFucjFUPUYbSbi2U4eg1NoRDNrVGfpKyYEHLYZdodQVpfw1phy3PfTtcrGsNLxUTbd5BNxcoG2cUy",
  "key25": "327xLK7Yh2CXqWGecv83BG3FzmTcwxpLKbaQUBEb3bnuquU6tLLZG7UsvGvERTPyF1RzU3wZam33KDhoHFK8V7qR",
  "key26": "4byh8hhS8AU4Y1G1MvVbzJ7qBX9bAHZxqvdGm42Z75yZKp49NcWBZ1r7UMoZKgmD4F1E5DDCNdKzpeVLx7eRNYYT",
  "key27": "zQkrV9nvBRpBujqRQPEXJMKbsEVRPqa1ZPcDLnxYMYLTj8XKDhya4MJG5xoUJ9r2e9cWiYeBWCkK3HYGrzk3Uzj",
  "key28": "4gkJjUJY2bUGUrpGfj7efobQ77iFPUmV6kvdPikChgwvUMkkqN3NQSvPJcMLKV2fsRLiJTHr2FXrwQQjge4wab8i",
  "key29": "4W4CmhmHSzfBXBGN5qQjShPiz5G3nuoMcJTndcdXihusrwrA2h1rqGzSrSM9YpyV1NLk3phsRWZv1M5yYARoskW8",
  "key30": "E3QMSNUpwbbQwQKQovviDSeeCTHimRY3PCmD8sXNSpqfzavopmF67PXekVaLQnbUMyVAyrAJiwG57wAtzSAuDdu",
  "key31": "2AxrBFskDaoqUraNeoetqUvNCPuX3LEPDUJTSFLCrXUdQeJLXBSHihfiEZk37R84GViNoj6gM9F9SPCGHfd2AX1t",
  "key32": "4ZAfr1f6RRGab1PPNqN7PzKUwnk2TMwGpMDjiMVAQYmrgb13PmQsTCX4aGCJLnKC3zREoUropVD2PWRWG6V8RVBD",
  "key33": "2GYNf7DSMMckApbt66EWFvYxK4NHiNnpZ6jk5xSHNnCwoJbnKMaR29CnUeaDEAgVGvguZygDD19mizwFLyH2LAK7",
  "key34": "5M3FzeVGSMZKKXLm7Nxgf4qw62g1mmZFWH2wgYv4V8qDVyXUAZceWNhSx6YLRnRTWVAJHiJG93thCXFTmZ9fohrD",
  "key35": "4WXeTfGcDgorYdutxnYiXBTg7qfCWMfuwqfud9ZFZYbaufuav9ntqNBHZjPjouVX4LQiPduJoqJkMSTedoHow6sR",
  "key36": "2ZBDhFL3QNLYz1fbBFUdokNfGGTk6czvhNkAqspvJt5snVegZdUjVRCjRveAosB7RxAh2nXRCpxygqHUcHBP9exB",
  "key37": "346J2vw89LXp6axtmSiNGbEiBxRGZPLjzgew35dFW3pPpZADa3AYqHW2gNhf88tYHxWm7aFUkGUPn3xbT3LC4ZVy",
  "key38": "59y1DHQE1PtLXDLbqYJxK5ZvJ8Y8p52TmHffCavXgNVEAHaUoZAM4uM1hE1MdxjP6yn8f4pFbeoYeSgWVkeqBXEi",
  "key39": "waCzgAD7NRtECT5voywZufwFsjrQmVdSnqezwFWtiu27hpFW1C7BRykS7avEbGkn5jRy4uvPJN9MCDywgFEhEjD",
  "key40": "2VcyQ1P7ZhDerjcUD4PqhG6i2TJzeKLEJNRyBcSUHke7THq58W77dVwLV37QGmE6Moq8BArRjJeGZErjs1jEYjrs"
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
