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
    "3g9NxEfGbMq5pBrrv39D2vTXfb8UhpmFMETToT1BKERXVLYC6pSoKAH32kHKcTK334WoJAw1huZAc2JUEhpYZ98W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h2HCTFtg1Vh1z1o59La877Abu1v7eUrZFBEKoiwS22cVvTupwYDWy39mWxDHraE6zhKoPxcVAyd62BDUA8kQRyL",
  "key1": "3t5RAcYzb6KYLsSz46rbPVTDya2ToiC5zhoXGHZBUcZKjpNTtfq9CQBR1bWzPAsES38HShb5kSSc8LYQ8RxpzMhu",
  "key2": "467yCHPENQzzWu3G9djJcSdqjp8EaAR6tJ9Y4nsobBYCdizaM24X8bLTdgE8ZuCuNGsTsDdpqQcrBfFfikp7gLCt",
  "key3": "5V6MbefzfvBjPzVQ2QtDH5qRiBdyDdnTnZDwxBHxMzzWfrmEH6t7t9hfGJbKAar9tgx4yxxRtLoXVQft8MtADBzy",
  "key4": "4FmDL7GngYW992M7ZyaXu174fPMD5gLm1yKqTKhKwgHGSXS4uVxk6URg2X5dobTUVyai7gbz9fBFQhddKxL4esJk",
  "key5": "4MPZsGLarSp9YHGZxG516sTHx5gVTJpVhXxAm7Nzz4xnDD1rjf3uDLCr9sQ4A45xsKU35yZbWADezJQbSgiwiaFd",
  "key6": "4iuLPYufDyUQbAuwGfsz1CSqZKW29sQQoD1Fi1c2wpLt5K7aT5uWGihULscLaJe1rR5WRdURYdsAwTutTZ1DEsnL",
  "key7": "5QA84soFbn8ESrbYmLuqiaJm7y5oyXcafD9EDW6myJeeKV3EMvk2PzSoHi28Su5P6u2j7DA37srB8gtnQL5KQdyv",
  "key8": "2eVhg7LKjDtDKkoMTEpoZgkN3xVDiMePQcz5tENmuVMjGLmKfoeDnbUMQ74mHc1f7a6kSVhENmbXeJZamSVdAFiV",
  "key9": "5tU4S1AJfz4SMn6pgA78Md6BT965kBmTLfGYy57cYxg6cZuSDVMkeqVaSKJ3CrnGpRxC8B44qoSUnEVXaLjnWEJa",
  "key10": "4USH4rYp8yiZHkW6UCTLPujNhim3SXxgf8gZLXr6kRRR73LidPev78FcwW5kab4okGoLpdo5bic2i7qJgeju6uR7",
  "key11": "xGWJwsarMuWWF8h8yJAbpW6Qp9VnCg8umr282oBdFHYghGiqhfhLk7EX3G3HDUCDzydNuXdpcxEoejSWgvZarRz",
  "key12": "4THbzdfVai5r1bWxYZzwtQJ6774S9G7hMpevkBZbUcinFAiy1nTTmNjZNcw57JzNCCrqQS1kHtFSzHgRzCFcEFFw",
  "key13": "kyZkcUySw84RTNnHR9Ti9q3VDDXmMyFmnZHLU299noG6KRCrNyopyR8J4mg3vShf5GX6jHXtYcquyTFYz8WkozG",
  "key14": "4ZFefrq7ByeTHijX5BcCwX2ZkGqWiWEAKcfnJETEwnR2smZbcueXrypRp1MS5bvNSHU6vjZdPM3oGCjySzZ9pi8E",
  "key15": "5Y9KupErAtsjheAP6hxXX4Nf8EjTBkyMbJ6StyuLVsDToWGeLpYzNWShc9DNL5a7bVPMHaWSW9bT5EKBRnia9Yqu",
  "key16": "2jwekmipJc6chKXS66oF624Rp5mMzZfEiu8SX4Uen5My9iUi721H1MXa2HRBj4gXgMg9H7NqwmdeKiutPhaJ7cbi",
  "key17": "2j1AcaJ4wxLeNPrVwz7grmNsHDwVgy3bJmkPh8Kw2NGaFZAaqwAEJmgZpNhhro1ozv1D5mdkNSLwMEv3ARrFyw5",
  "key18": "42vq4yWHFY8xghg9fRWiKWDNDqjgk35HDNzyzrUVtJ6QDMLLgaEPAVQdcZkfozrarFuPnzrRUs8h1gJMzrtkVBDw",
  "key19": "4sawDwsP9sfX4eW9gW3znE384pTsiWBbW1XRE7mzPmu7bZV2AgFzZTKL1eVX6UHATidfEddHzkEJZiNBZowQKwJS",
  "key20": "4xpzpjt9cXxXEQ6hvNih6igW829AFgkwR35KrM1LV4DKWZAHH4h9iUpoygpXokyfJ8aeL9BgTQBUALtB4KM6McAp",
  "key21": "3SZikYaFeJJ5DtjTBr23Kw8FWe1wVBsuBE4YqP2yK5PLjQMcyZWSSKfknyDhJjdq5FBLv1nCCAZnBXUXcY8f3Z3P",
  "key22": "2yuxDGAhrbtr1HcaL8E42B8vrpTja6wjWBxebnnFskYvPfVdCCncXoTugok5DkPyrCFQC9VuQSGJ7xAoo8WRmLnk",
  "key23": "494CPtvF12qx8PF3i5CebNdazifNx1nQcXdLhWbAC9snnwRZUWSvJmyqVcNzMDg2oDybHavCRRzEY91sNDefxpFf",
  "key24": "4SKrCaEksUD9ci7Bbgmpy3e3Surd53UzoSfY7Uz6AAQkWr6BrYUXvKrz261Qt3N6jCJSdanXdKRWNnXriJu3mDcz",
  "key25": "2vPKHSWf9KSXqbTKTvsRQzDFCtsVEHRnjMvNRLZUv7mao82Rhk5NMc31sg5yhumhLPwFWPJQnbPtk8Lp6cZ6A9pp",
  "key26": "2sHEt7p3ScUhbX8JqrHG2SBE1NK77SaSvBmGBpedeE1K3rs5N4pxaZXT22smNKLVkaSskzaUDWUrnDb4u2KcgpzU",
  "key27": "4oBBxXJ5uehhpfmRjodayNvBQWtNV3t6fE4YHPtvAXRmXtpkt12wMjL2JKaHykkr272rEWmPZDmPzCWHa4w2xfag",
  "key28": "3orkc8oLg64UKhvdxit2YH3T8YijPgwrPqX9kUWtu6UPjTZWqVZiFwHcmHBWUdwspiJQx5bnH4XfxnCR3jjrf8Yr",
  "key29": "3Cr97xZ1zqnhWhT5AZxsJeSxbfFsKFUZKJbeELFkcQfSmkuN9kLbnRfeVASuuueL8K8G2hWya27jBzYeQsCRinBi",
  "key30": "2VVJ3mPAMWjrNNqAx6qnpdoShpyYvVLcy5TXSyNkAQj3umH3qXKuDM7WtvE1mka7cRXgkbZB4FgWW7wdn6MXP2Ag",
  "key31": "iWAVbpKsaEh4o1vurinDTCstFwpxYvUjDjFGchyqHih1j1XhSQBaPW1D94DaEig3Fpg85czcy6YG2mn6cpNwYPj",
  "key32": "2p4HdcMT7id37bv3fRUGHCU8zaMgnSiVXfLooEXNU5pdHkH7HCfwyWQdjyfNdqNCWfYMrCT6tU8HCuFXr3Lpf5RQ"
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
