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
    "2UzgKUbSSALjCPT7pFCtKrei9DZm54vCKCuBwhpVfnpu9qCofNoQJcZS7eKC8DL6DwJf6gbf3iyX7a146js8ZvPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wZuQi92poUVVqsZFGL9jUy5U2u8HaXqbGYgRx4Yjk1rNAtMf4B2FpkkSi1uXWNb6YchVPhXBB8JUscUHnCo9EsG",
  "key1": "GsHJ5rHN6QiTUzvuXBKBmsZqXth73qS1t79X6WCwyUozcGGxY2BLcNP7pUqWUwVt1ypg1Dd94yY3dyjCHPZgDoD",
  "key2": "4TC1S71Af6sdrK2riVPvF4SRMTDQYFoGcYYA7X7qacbiZrjJRX2hoZU3BF96YZpEvAQc9Cy12Rkp9BtbwWye3njc",
  "key3": "4Z9GCGVM6WuAqirRTg6SARqTsKoTeCFMZhEVFE6kZRUm4EzXfGpimCMAuVmbtJdnt1oCRYV39BC7hK3HWCSHwkXi",
  "key4": "5aioebCjvtu47EjRJ7Nx4Wfev1EJYZAN5tLw5q6MUTbXhBWTjBixDnY7UfLNKJisv59UJfpsg7srhqYiTvFtAGF6",
  "key5": "27nyxKGXNKZgZeyNS3yYUTtwEVqWSj3o4EqiyrQhpVXJPgMRQAA8Ht2mSPEbmzF611cEFxZTmaDrWXffo5QkKtpt",
  "key6": "4zQE3neao773Zdpz2zXBcmeqraPomTA3qVw4ibsT8AZNRaa85rvFhrTUnrsM7pPQrUwfJNif2n7j3q3EhxiRXzGu",
  "key7": "4Skze5oArTgdsTzKpQoZJSMEJnXpRHB1b7QG5zarnEZaDmUpU2sukgoeiJfZpSJnW1rFPmq3SfUDT1S9zPPSLXdk",
  "key8": "5ujteNwjbKC9u9NVFFxdWZcU4GsBsqAj3d9jRnz5Ff249ZXH3trGUhFvckbHH93wsemkx8ftYSAU1HacaS742uyB",
  "key9": "5B2fFy4rSF7xvmfKNoYEQTRBcb2jpv9LrkCEozyenwqTeW8QpYLQzzk5SaeGpzzLEMGtJuXHVYT17SLmjMoBb7EG",
  "key10": "tXaM1RVzHzMWbnEGCwFnpvnbNWHijdJTwa9PsgNpD3gsjdurdYYB8JufPSWfdBErR3HSn4wgpPFDPZ4XjYnpn5Y",
  "key11": "5qpLLp7Qvbt4JHSAxu8QCfhSDtFMB5tDjye1tyefVnMsrk8dwgQTirU9HZW29dvABKeiXd2VT7LBAFNsBrKYHpvg",
  "key12": "ugiPa8a8g9tszy59L1ik4aKV5FuK2NsC4G9SP3Vmw8oeNs2qStVmc7BVwgqdU4rbC6pDWRKs7ZqU8dzBsmFs9UZ",
  "key13": "324cGvGPe6uLKHmepsuX7zXiRTHXU63T3bYRNrs4yFBwLenByXdNQEiYQXXv25okiEwjgUktqsuu33CsyNZgpjmk",
  "key14": "2Rjm2YNviN12YCp3QkVCXdfiH1u25R177wGHUZhaiV1MzT8wvqrafJdNsDYwxd64SPPLPX1HZC7ffGAfaS5zPaoi",
  "key15": "5zoYVNbDTXArubNM6Jsgbk7cknUVbPoYg26W4YnmV5K6u666Uz3fgrq4SFwuMFvp23afaewvvK1nNRNvqn9YnX1R",
  "key16": "5ipFGpJB7Uvv3uAoySMeuHFMpoK2oiHEA6HtWA2GTxfdxDnEERMJWg4GSHbcmu8TZLdtiqLwmqhjE1koNDrFjqHt",
  "key17": "5mpDFsXSMCCxgv4qvxYQHq8y4Hx7C531Kyp4Hn8vo3QL9HKHzqv8UrHWnBKRMqeWC43z993NivwCuUTkmurJts5Z",
  "key18": "5Nq7KSeZWJCBiLTGNpMuu4WNqZsDdUWnzb1K2kFCt5ZeHC2JQNicjQkfg5pUemMNhZpef6eA53bKF4UcEQt4XLdi",
  "key19": "2cubHLu6X4jRF7gcbdfbSgg6GAP6WMx9p4c1Uq4ABzjQHZzGVush3QQXCXfgmRcVfzufZRGAe52TxPLaeqBZuStF",
  "key20": "51EZNXQQGX9iM5JKQ3GR159jZ5FTeChqLhnvDJxifA551SGmofrWur8hZWdWas4J8XPbx9qRwDowWgLgdm1VsafK",
  "key21": "4XLhu2RmugSSHVTkbxjxKcDLsDz9BDms1mRkRRYpEBfhjUDCdu2kpuuY99K3T4YPW1omxzyAV8BjtfYvZQNxw6kQ",
  "key22": "397455nVpRhkiKdhFnqYJvsxJk63QnBJdRBkR28KjtgJbP6t3xE59YGEeV5mQwVm86cESaAPD9gjgGeuNweoHmvF",
  "key23": "5H3p84LVPnRHHX4fC1nvZ2PBhyyHMUMFsbDaDBJxYfHn4P5wGFip9Tq92V9DAMXTDTjCnqGgUHEzuPe8f8kZnjx4",
  "key24": "64qQS74gnSVvj3sEYvKMdQzAWF2UDpntG6YGD4e8PkN2eef8v1pgzT4c2rpH2WkmfnkJvVdZ3RGpJnF6xbFG8SvP",
  "key25": "4M6Bkx4YuQd3DDTiZjkExxrRuVSBJneofS9ZRmF2ZRXG29tHu9g82mVjJc1dFrLqrAo17TLQMgLwgussV4PbpdGD",
  "key26": "4qGDWNNDwm1b9qYSs6TKC45ofvY6Za1pxti2X2Cca8HRYyRTqNybk5knSzpQN5nB2FTwGrE5VsWo1fHLm7DAnRML",
  "key27": "258FncBNv6UufXNytcSGUi9FdqhHevztsaaoAgWGScecauCkXzVVfLf5QMiG3fRSZu4zgZkbRSmvqQiDmnb9yjAb",
  "key28": "2JDqjLFqMbMuHMSXcVHYNHzkMkKgSDHW179KZD6BsJKCzcYqRidGoBUfKn6ercB7zAg4WrCcTy6Kuz1JohEkmNKt",
  "key29": "mB9HNG4fPGMtjwTz2ztTdbKqXcUxcv29XnXYEMKym2NwfZMoJKTLRYo4xEFHCvYJaSK8kFBDnXsPuidUE5hEb1W",
  "key30": "2z5hRCHMHeb4uw69JDMCrXXLRCWdYfuTx5szU6Yosi5n2HADnVXGzypi9KutNGHuvrVRhcEyLuDAK68p6qqJzBxS",
  "key31": "4o2jM9kg7CztGVDL2eCmGLUwEyV2M5BmNrxajM59HcYLdkMfvNdwP43jZuzCWqso6P14gyw81kTQKc36D2S6Vvod"
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
