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
    "2VzhUPdy5n9fDezEcBVk5yiNXypcWsw1fDAToxgojyEvxAiDZGTavQwfM5HM6sGfhyZCHV82rzhWLjL2pT7hY4Ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uk8QLDC93tjTkrryKjd9JzbmgU4iFxXqJgGc5eG4jLnJAz1KJZsscqQZYMkMMig61B8n8HxyzpgPW8WjgAV5SJz",
  "key1": "2Dijnh8mrF8mQtFiU7TvARmPXUk96qp4i2nJXo15LBeHD8kfwjmYPxcqA3nUbMAJaWdjYVPJnfrF8K1zUeVu1Jth",
  "key2": "M9ht34aNHWvdSnTW9FJKCnSU29oy7tVYHV5miDZakYY8hN9kphFKrMygjp5wBvjvpegp5e3W7CQyyyQg45ajtUh",
  "key3": "3RZCNjYgdZdDJAibwUZgLxQwhqde8QCeaPf5PHPW295Gzz9tFQP8wEoSrU8gVP6Ujs34gw53EAEKCweEu8HqkMCw",
  "key4": "5Rg4g1feCUwf71ZNKx11yaxo3qS6qGWZxsdG1bjcUJJWkHmBd2SR4qcCxFon4xvaByc1L7dP7F4bdMpEbxEiHUzd",
  "key5": "DdfBP3gmCCnjdfTF4aCzD8ALnVqK3X5nBCRp8ipFx1wtVuGZJh1J7SWPAXdmU2arFdaaUWAQvnCxCGnUZSyrR2h",
  "key6": "4w5mcu7SRix4TB5oWboFEpjWhNJAC6KJyC11qxYZ3msxuFsEcx29QY4HZbXEbtncK51djBzxuzD69xKRGTv52LE6",
  "key7": "5VcD3kqmHDjY5bS9FH1rwDYwonMERKtRAD86yToj5EQkDXSkV5BqDmawFXNA28BrJFQocSeQ9gQeAoWawPYEEWk1",
  "key8": "5DSgD2d1YGjHbn6G2dHY4qVfGd5bqC1RAdvGVhHuS4S4s8avi9Zq7v3aPwNDXZg7kJgEaZZ1cwq2AaHTjdfBQ9Gs",
  "key9": "4Dr4gZsoy2nvmBTNXSYbawk4j7rG6rwCmC6Q1GYjj3urnHG42J8wVymucFwe4v8RATdFr2h94HbpYxR7wXEGUD9D",
  "key10": "4VPpGLtbtYRVvMPaTKve5WwJkbXVre5fVMhqSC1GCw7n9Gat6PBGVw1gZPwpFEvw8Tbw8evuUtfeijfLTSgDNqsT",
  "key11": "27i1D2JysVuEbhpRH6PNijpitofDD7oreMCh44NG9QDsERQFxHSty4x48VAcRDbWsRbqJwQhF46mX63hXGf8NpHq",
  "key12": "45L1A9KHxboVfFMPwQjgayGMhtfXZXSWa2eKFK2geXAaogmfXQNL9SAKRSgDXPc1hUS2m2J319kZH3hMu5gddzp3",
  "key13": "5zdKnzUvkwEc4wBRft2cZZMrVvVqGkSohTpY4zCLkUGdu7pNXhFoybMeHHpqS4RaSPGxHnMo8yxNFDxQwWTuMCWJ",
  "key14": "5hA3XdsWFJofNrCriuK2uo41uNYcwF86yfWeQ5B75Bihb7pXaKrQQb6LzKXpP1zfJWqfL8VyPGLhRUxY4Xa1nDQT",
  "key15": "354YKjdk1mVXyBfGNh6AB2fEwwGQSqGRCEQSXt1UNPBViS52En461dz1ZC1fVwoLGXJtYdKPSFjoD95vDgDYvDC8",
  "key16": "th7LRrEe3dc1tGszQwYQp1XqTHHraNgGhKTskaUAaEH8sCBwK7Kuvcbp9MkugwjxXb3TQQTb9fZrCjcjMhbQKiV",
  "key17": "4CvnfT9YNbRMh1UMjSzCRxqSDmpJWCNMLEzx4FAmgYQuD58o67Hr5dFxBeqZQni6bvVvGauCw5xWyaupM1grufax",
  "key18": "64Uhis8vQsjQRmmMmfxs8aCrdMqzp1d6YFPEnJ2jpwAguPqHQJgteH35aB1qj7FCXN3A7CkZrj2tz2bMhv9RmeYB",
  "key19": "2UovSDKbF4GtA5apLw3nPBotV9PFhdwAkSSfNWdS4jV6CzxiJP5NJM9DTRrAUmx1ZRm7UXu1Ni1s7fmNyF3cZK8h",
  "key20": "3ezWRtbkH7FT12p38ZAP6N5zZNMpJLko8UGdzqGBwUr2wRumZzBesNY8rj4vC98qeChdYT5uEpjjGfDJESjxL6E1",
  "key21": "5oBkAp4qqBkkM6a7nWZQAmbuMhgr9nDvjRgo5fhqatsP6GRoeCjzTz7hAA4XzyUGkSPPc5i2KNwpmFdoNSJkgBVk",
  "key22": "3b6zKcN6bGG7iKBNcMVEaty42iAkVGp7SPC8zY3KEyEAaprTNoFncZnqGr1omkt5n47Kxf8sx9vifLZvjfRd9vjy",
  "key23": "4aFrFVc7Ju7zjSzTveUxLZ6mLPXP87X6coKyqUudYQbxmWegists4mSGtwVux9uvBt5wAPxyj24eP9HhMJkxEXyt",
  "key24": "4F29roAa15vtt5nNvXS3Wec9HYn7ggXsKsu51iAorfSNA2mFq3dmn9PrRoJAdvWYSHaTT8HFu1LAdb8PfXmHNKdy",
  "key25": "3Xxdcc2JtwgDzCTtqxS3oDpmJByJGUWL7xCMxAewYCE5HFoveZtVTjcaQshas2pXpaxuvZASH2Xr5rKCMQuWMHPu",
  "key26": "s12s49r3m5w4mQkaCj9ikNNrPRkaajgatrhMpTwBiuZBjhBKMfXkPp4Dmuuhd7cTE6Ubxz27x7yZjC3XRsyYsRh",
  "key27": "5rGhtjmsjbgiDX2aVxVhzvypwVZydKVsdUeKXcjrfwcWVyX8NLYaQuSo1zgsjuVfroTXG5Y827P7SvSLA2YrbwRW",
  "key28": "647jBXX5ZwDbBM72rAy6xtHGS97RfCkXHX86fA1CfHcCHzsWvbfoRNnrjFwyHUderjTLvJE6rMC7gCmpMwfQ3NZL",
  "key29": "5rjN4odbLtfCrfGzoWvwmqVivk2Lzi9c1qtv3DhMgxW1LS33caq1NzvvfvCoEhYBJrSoVeT25FisPwxSGraLv2eM",
  "key30": "nGtrRNDoCahPQECFnbm1WymtwKxQVYC37Zm7Hp1pBcPZbXUSEM7szqEbsBCJsk1BYmcVt1ecvn6jRviWhpqwq6d",
  "key31": "4hhhhQKVSuBZYYweWphFEKP5HKUXSmLWWzBJcuL1G8aSWhJwKfhiW18ZcERBewno5tJ4ipvgfps3LYY2194VzLYt",
  "key32": "2meyvRMYeKHEbh6VfeJUVTFt9CKn1mMwc1qFGJ7ayqBzSvrQcnVWgeXuUdzK4uJNnaYKpUQM6hD1UEYe9oHvJQUF",
  "key33": "3aYJeXb9Tcsn3yQMDPPxFaPwV9rtzQP8DAVBGTdiJCgrHjWPbGJnCA1mmDLTviFATQQYzjBTSybVri4s8MKVuxue",
  "key34": "5KQcibDQqCQB8grLF5pfB7VFmaqwFeFtKY7Lf7zZZfG6aabR4cCU9PhMCFARcpfDkTawbXFZP2Rq5G6BBmznEUJQ",
  "key35": "5pDJwDqsYEA9fsqEeSSKupyh2M1iAguLXnSw5ZF9fTTStsKF1R2MZJFb4QVp4B2oAeEzoasUmygQKXNWvWbvAXcm",
  "key36": "5STaevKBhFaUaWFH85CRZZxvgYfrEYqQLEesyCGNbCxUkrQ7pqHe3r1jf5JqBod2iyuujCaUEXHw9i6p2BJN6v1L",
  "key37": "5e9XZ6ZEbZtuY73J986RiRUTD2HoiqpgY2aTgMU1NxKKGbJPbVavuduE6vTaWaXpvtB8XKeUrhFj9DKEvWwTawTz",
  "key38": "5FBHuckbRGPyf7b8XvC5o7LPrxpthYTbpXu4M6JKKTE2TQSzqn7w7Gjgz3GpPEgVtT7EKeHLuqDe9U665PSJ8pcK",
  "key39": "5Bzm9MCprMYNsdgrK4movJzDXVJfKKAeFvMQYdCH6J4662szGW7DNTCH8j1ez3mofw9WSShbsPpEugX5Q59MSAUJ",
  "key40": "2Zae3Aa7L6zNEmyjMcWn5cznHK2Te5hwMJWksmPpN34X27HSc6eZLvn7zG3S6XRR4bdpegE3afk8DSHz1A1i2zqK",
  "key41": "52xRG2Q43VLXJ62AvhALxQGorbzyFGK6sHu9xwaqVutuQwEHAEqYo5RF1oViAi8zWJQLVzkUeyFGQJ8RJeTH1jmz",
  "key42": "5bThDBLk6TagkcSiXGSQNMduUzLCuN3ueXYUET5eWMtkEHSCVJVHJKsrPnXDydfHnrdETgymkmy4AKX99Ud959sn",
  "key43": "4pCZZ41itMyspsBE8MKbLVAndhpG6veYRSQek9AeXoMJ9hQ1Z3svMEN19eLphzQdsP3Z7auxkozaUFpLbmqCcrZR",
  "key44": "2WgNQ4TDnNFucyUeKGcvnQbRAcbaDvbxXnDg1TibCaTuFLmiBL4SVLZ9XCakVQManBUJVSPgaKoDPMEJNNL58gaa",
  "key45": "57WWGxtLEMdHgmkwFW1nD2jq1pfLnBZkspF79vxC18Thig4y9Uztse6xzgezqQSJbv8Ph78NhZkZ35vSsXexC4uA"
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
