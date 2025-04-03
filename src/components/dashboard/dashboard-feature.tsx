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
    "3G239vppwwLqv66yUrvkq1ao7uu24fzkXirWsfhktsHKcTXXMQ9aHYckQp1wScRTepoig4kXpcKuAh4uX522icdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FoUNemTYcP99HcEU8vVxpocwu5z1gx9AW5rM3XTtVVwqdvJQPzgaqjY7Rp8wGzFTAMeFBzoSth2hq4aCcf6311C",
  "key1": "3APQ9jp4cmybdgfenXjWxMzcemLgUtc5pKstKhcwqL5zKp3RYpfd1boiBtzboFebatVchPfUim3ErZrNEYkGjicg",
  "key2": "2niqr8nPN6xzM7sUG7283xUcJ1rrHqEwUJvYKy3RvYhySwemYsXDW7TqmnWv3Yp6MwTsT7AtsUKF84frNuRwi4hV",
  "key3": "3xxjyczB2rgYVDVHyRVweUPr6mq3YP2TC3bNeqLzVF5vynepzFYKp8XjLoiBqdzNZwxqeauPkMRbwMyaXYEYHVAm",
  "key4": "3J3uE3k1XoTwUR2TcBs4F7BAWtNFWnhwo1fRbocygFvmhMdLow3QAQWmhvMYdKkuSMdXzSybJDueA8KUYC4oA8XE",
  "key5": "4UnG4eicQZXiHqdaSfph4FceUh66Dyh4pL2DQD12er6NzcUigAJo4q2xoCAZWobcjQ1uLA3S9eRjTrX4fvLGrsAs",
  "key6": "2NpRCNLduLuNvEUw846nxZ4aF2TwyvTVawMNzUwTACXxim34Lg26PadZgS5HbTHCAmFdEaBJ7B8HAaMdhGv9QnEf",
  "key7": "UYZ42S6q9fcNzWzeHWstN9JNL6XsntmaVmY6aEwnqYMi9DJ8V3FYM95aow3XHCaSFXbWgQAWf2c4dpdwgQTzFeV",
  "key8": "63y9u6HE6uWJhyuruiioe2UYJ2EtLaCA3KtXCVkh65LTGa264CFqQ9PZ15b9PwdnkHn2LWWENun7XLAPNMWDStch",
  "key9": "5AjsPNURbTax4DRDMzKEBidNtXXsbHnvHGN3HjDp9y7QRkezsNdJ31be39pcMuxwBNMMgv98ki1i7JRvtvr2HFjD",
  "key10": "47cFLhRUvioqAcUamtQSYbDyrsmKm37uT7GFaWN9Fsi4S7qvUJbrh2f1M5NgZtaeUDnjVTbaVJ4AKuYG5B4kS4TB",
  "key11": "65dbmrR4taV9qYfmjrbbiD2SXwowNfivWUJNozjUy2ciqkiYUGaCH4N38SRn85Urv7KU5pz11uy4iKBGzGYBch6s",
  "key12": "4QYfM1GNnnnJYZuDZUh5okDHqdk8R9tsjJFh247BkbmNvSRb3fHRRNGmUtWARmHN2XYUqpjKWT47yXaDy5w8pkvj",
  "key13": "35u5n2VYVC3ismMAmLHxVpMQrwokXCqzUxAsskLc3qeKmLWKF8URXiWS4G5Ypv64YfLGdKmynwvvjm8EBs6YGRME",
  "key14": "tJUdSnkWjBJdKnCSPpoDVd4guifkpeptv8kxFqTmASU9gaRhQt4WuFEVCu5MiXBiZyxLQP73tBYXW1jqfQ4aanu",
  "key15": "2ADSgdPbcVgy6niiif9vacu3W8Zue9Xt1YQ2juKRn9Ys3TyRbnXdf1eybKCz3w6x4q92XY7YgJXMUYKgvJf1yDie",
  "key16": "5toQ836zKwfcmuRHWRUb67zPGCTZ6LA65Awhf9WVmr2wyNBS6YzSYtYNTH75JD29rdz7iu6SEsLSNYbbUwBVkjpK",
  "key17": "51bdgnLKE2iB83VKf1E6KXREyq6bFoYPHfQnXSzez6EBRFUWtNU4RcVLvYnmCKcxP88cMqkN3KYpWcSRinntmAtr",
  "key18": "32Ay2HufG4vxFGhBr8HrLupzrHEF6at4Ff2ttRhKMBcckQ3PCfpYX7QY78wCDnLMXjHsRGud4eKyXfvxJrTK1gsZ",
  "key19": "2WUm3CDTM566eUQSLPdJuPz6gTZHnXGAEZHUDHDjwNN3TFvGQgoEmC82b8mLQ871ieuNjdsorzEf5vJbmtP6zyAw",
  "key20": "3A4KmPywpQqYeU55uEkqKpnXQ5fzLPahHkronUR64wtS1x5ebeAmBGPLdZFKvmUJ8HHD2kiecXkKpNhbvcicWKnZ",
  "key21": "4H2y6gQd9iBDPB13nCM14rGpSqutcfewRPvChD8MzYNWEAStGD6fKV7wKo3zCgVGC87aqbFAeVbhPgbEdqMzeSon",
  "key22": "GVT5tQrvFMy8Xacrs5YFvC2VAiJBR6RC9gA7VQibpjFSKJTcrE7yHrNMAssuf7X8ZX3fhxXkUG2QiXkCdeqbJti",
  "key23": "hpMNp1bys9UwELcguPa89DaUpTYm3rW5Zbgo2MoiUUVnu6jHKN7akRQZeUckLFDTa9axx2R2NyuD6x9eBX4crv7",
  "key24": "4VnqgSHjpgTADk3Z4FBuZydZteMDe6eMy42MDUVaXsJAbRkrtiqoxfQZGgqCQnQszprcRcxMAnTdwBsRAqTHdsDH",
  "key25": "5oZR6x2nqPhEwKx53PiCUmETDwZ5h9vpQNUBTdDrH7iVyXkMjjbAHKdX9Ht4PteZFLqysJhkxhZS62VE5F136s9F",
  "key26": "2sf7n4N2b2UYMhqgezAAWMzZon9rG6v4rqrfMDNe9PLvt22BoYXEKYFHsBZQk3jjS8UeqsH7a8yrPSZ1GtYvhdNk",
  "key27": "2mAdyjUcJ66Rg4CtorCHU4p9DrKRgQWJPaZrBK8hXYQZ7UD3MnCFVhzZioQDxVHk22449LdWHUZgdw6Wg7Ky1kbj",
  "key28": "2AA59nJyxHVVDzYSVvbb4ywTKGPLHtGxf2jmaEpDhDyUkddGmjk8TRkr127ykWpR8EkX5kQBrkFkYPhoNXepNahC",
  "key29": "5HF1i7z3m9Du6f84zqNCph2tnwPPmnGmqDDxcxfXiape2iQu88k8Eo5k9r8ZNREHPg63qaAwivQCr7ickCMJvZqW",
  "key30": "4kFLZ87HGSWz8HPoMfekivHEqrTNvmCZEXQnkTfZvDyCVUwKD1GGdyfnu1wTAQSF5gX7vk2JTf2pPbM6AGeeYGrs",
  "key31": "2GP7Bz2bFDuykK4jFPSMucWcFkNkqo8oEscvXkdoqZoLcU2DXzjSSRLvubquTLKLQX1abDPAXFyijkqRuMFNaWhc",
  "key32": "3JZfJduFPd2kwjXZydcFzsHwLbb8sB3xhYxmWqwU9rL1EsU9apxvNc2PtDMJCTv6j6WKUfmCrC5tba99fwEokvHk",
  "key33": "5QZjPLFBgCGXd13GDWdqHRMzovHa8VA94SDT6y9ur7tbHA6X3G3tGEwEcMHGe4q3PePUWMG1kc5rQBqdMmgNe4b",
  "key34": "4qS5HWnqRusgJ3Ap9Uw5dzpxKaDqK6EBicgaVHjt1bFJeurrEouYnBYGZEwHNwwEuuNMtKJ8DrasTT1vYem9ytcD",
  "key35": "QrTDMS7mUCyBqPePinCVqse5Ri2icwgkcF6iVSywAyfNoZY4xy7fhY9WF8rDSLYnxo9AbcTygPk5hsfxBvcSSax",
  "key36": "5i1p1snUdpo5HUf7YAbKbLBvmigT7G3XCAM4SQwtqxfar42XDfvsBrmGtz4qntdxe4LZKrsFuyGYFPhKVBWnnj77",
  "key37": "2nmxd6MydetCRSPEYgHAYvXxdTkpV5RoUWaHouGu69L5QXMQDGK39raHszKCwoC1ia8BJcWQ5QWjiiFJTqZU7Zr5",
  "key38": "3MmWdRL91s18B6bPATYw2h8hwdioxKhh6pVtnPDeU6vanzTwjz6HX4aREnraMc6pgufCW869noQ4mD7o4w7RHp5b"
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
