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
    "2oSdrRLhRfDKeRxoeQjctXcPcm8imFaBBdh3RgPq92Vcjgv6fXnVnB6QmWEQMpLLHXgBtevH6JQ8VkqeVVq8LbbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DjoVCXKwBCNCn6XK1rvhPnYGZ91B23m9ZKArjPWTfTcJzy5ufRspADbGHZzFjFW71vQUtzX6XYVZL8qzKxkwt2g",
  "key1": "5FZnHu7XaUEe4grfKyg3aXSYc4sT9yb14XKkuCQeT7oyuwh9LB9DgFVrrRs4vfaJuDpEGZikZvypg9gGP5sXd7Wd",
  "key2": "d51orpPH1EsLWDUyiNijgJjXtpbMKQQiXPLVo18h1WdwixQhPnz9GZUKQWoxXo8oiXXA8CuAiJD8MvY9M9jdz5Z",
  "key3": "39wGSFvz5JqTHxCTdoWjzJ8TfhPrrk11JAkAbXruPJimfPuegsX6dxowZ1c3VW9nWmohmjujHRv73rhEkZpbrA3S",
  "key4": "4W1fUdh9HsruX4Uz76cUwBN4TCZkrstGDpWEt5xGhvdq5zSjDhXYE1ceDx5NnbQcXbmPRckQECZdeF66uewZw35K",
  "key5": "T6rAS6NaCgLbEdbg5UrybafkkAmwMpWEW1NcJyHy94tBinwGRxeCXW2uZCDPPFnznE83pNZWPVwp9cKBNHdu6cN",
  "key6": "32Urvc2cu68vBPYwmLKMgSmCQs7AJoKLxFxrs9xiHgMYPrZpgZu4WmcqrrcLFd91Enge2Adip92MX6QKdex5K2xh",
  "key7": "gN2Yzu4ypqxPGnXNhkwbjgdJFStttAo3PsfsZ5FXSPx43412jTnWoG4x6s4JVYDkwtwufJp9yLpBU51xgMpSqj5",
  "key8": "5xjgGtjGhjaRUC5DvRLRZyzLiUFiXysbPpschNV77XiKxS1CpxUqibKvK6gmt69Ly6LyZW896g2b5x3DsQZ7tHfp",
  "key9": "4YrWRGpstqsLEMnmniKyLt5DS94WsjbUFVzjbpLoYeR2cEqta1UuyvBfvnebsvmHBjVT5SmiNRicFUSWYpCQL8f6",
  "key10": "3YB7NesvDcEghnF3f7TWqaqABg4G6A38BD2EbCiTkaU1tTxpn1ofV3zYpTQtzC8dEL5AWvkmReASkSjRLL5imarD",
  "key11": "5ZhKqrqzUwwXHnYFtBVSTj6otJ32BTkgEtb7m3ViQmbh3o8TENbNW3WZoxae5njSLr6QZMJGTa62jcXkrnn8eDhQ",
  "key12": "5VLCy5JJqezFNJyxADWAHc1hXPviZ4x5ko5FHKNZie2aCa8M8crducRYs5kbD7v8DZJmBWD9aSS5RRArp69aUw4i",
  "key13": "479JbMqvD1EEBsVLuSpcFEpvmBqv9ctPsDigZ4NEfvBwLphm93aEKCjSX5YLsg9V6LvqNMzx8pwBQ1CYB6o8owGT",
  "key14": "2ER9VL2sWYzhWYCCAm29i8RWRNmP3xK5xXDynENfAvsAtcnm6gxppuq9XKf8Whb6ZwZ6BepsM288iDcksamedi2r",
  "key15": "8W5bCFP43C9U5hJqnm1NNJmjq6uTm32W5XC18WJ8cw98pBeaB3nzQhj9xdRJ1khtCBxsS6M5UvUM8wJM5zijudR",
  "key16": "5QRXZdpF3hQYx8Ubf8AKs9SeYZ5KBpoq943pBRuqnoJPhT2v237DYYPkjXKjRWuyxq516rabY8MLNK6gxFRPPCa",
  "key17": "23jB97wSZMFRvk5zpDRnakWpVmTNEtVL9qP8SLpcd4wUgjrsySeDGoYkXg6KfiNjQzsxkNS2tSEB6UTCYgpgEC6y",
  "key18": "5wjH6rB5xrPWJLhp5PTNyw4b3cqJbh9YmJML9PjfkN9TyAd5x27De1uRyY9BZYZgJTh9BwAdPxQ9VRx7MgyDL1vs",
  "key19": "4DZbveZ18Mr1gtpUQCuzPmRvHcC5qrHHio9HfNCpQMe7NhJS7MJbG86Q4Cn3tURFVNuJH2wNqQPCEqVkYdX2Gqaj",
  "key20": "6Q4NoSKJ2xbnhXY6JNnehK3KR1rgqfpyVEx4SRHMmS1cGVXA1hNXti9uyPY4qJtZJqJNngHFWw1nepDccZmy6jP",
  "key21": "4S5j4RU8Q1AMF53Vfwq8AAWdGL7yXNg2rYdH5HUemZ457ToyfGzsH3TufgVWYfqoQerum8vpsHLAUXbsJCLJybQ4",
  "key22": "4DiJmeYBDWAMbj8bFxaZxkKaGvTerdTZqnFadf2iC7QCahHzFQnmVeqUWxdjFAHHbSYyW4DNiZczgw3RiBMpaVxR",
  "key23": "jJvpnLq4RKKkvgCw3Lq4B42B2Wzxpnn5KeZJatJPP2NK6BBi4KiHCtmLqN6ExPacNCZqBQsPNFs8Sv29wmhrQ23",
  "key24": "24SRhazRY8dzuuuWze1Azs1ZFbwKaDnLJ5r4bTCnCnKGDzJuPtNngtED4RFiwZ8gkgPd7kCZWaq8TYy6nyWgX57M",
  "key25": "2t1u4krmHNwvbMHEWX6vagAzzNcaxg9dgPTzN5tSMxvBWSjP75ByNMwBdJteW74ZBuFmtE2tFiFrvJDiBHEnGx69",
  "key26": "27gZy7DocnZqq6V6xqJDpjgr4eNbspojPLU6n1b4YHMunXmDc4Hbd67Ty4rA2PXGeaNdA9AWvLbnagkmy1ZBXjFD",
  "key27": "52bATZUL4uUvyjF7vSuCMXcrLPRBFBr6FznGUbKE4LzG96ev73W8vBs11n6s9yR3grngaehJcBvWi4UYRxXf57Vh",
  "key28": "4UuxxwfxvKFYxtiLaD3VomZMfx62c3fT1qnMA157cbe2vZsabzwXeS8JsL4aakqTcEEUjEWASowuAGYdb4EgTGM8",
  "key29": "3jWnQnh3X9Sn89sGAi6iVVJZGL9qRQ5ypaYupkMiE4cx8hwLW1r1gWkatTVTev1d3xY8aaZ85YtV2YNPFr6Rtbe2",
  "key30": "5YeLysSgjctAbiup62uhnCivmZ5LrPMxAHxNRXNai9jvwQKLp4tqK94dFuDWJzGE1gLLioeG51e8rNxd8cmuaf7c",
  "key31": "4qdvVKU62mS3rDw5bHRvJqYrynTYVJAHhXZFnR5FDE68MoUxepZvmLTPfaZHygnHjPuajCcHtoKS5zKGksoL4bew",
  "key32": "3gpSk9TVy5QGDaK8wfuAYDBh5svQyEYfM3d5GoZtjQV17CE6EEMVi4XJqLR9nubaJNVsXBN7XgVxeSim7WxaJ5Tp",
  "key33": "Y5fYKnTxtBoiAULrw8AmAkbaMLWzb5HchpBvgtJH7PRzX83SiAPTDMByB6t5Wscjyd8rbLd52NYRLfB9ZxC7gaR",
  "key34": "22QFirDTAhbDgkg6UUUvnc1v69uHDkZRDF5qrH6SmfnPSQN31YMUPP5tLNXY3suRsj88EzN8PzuH6KMt7EXx1AXf"
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
