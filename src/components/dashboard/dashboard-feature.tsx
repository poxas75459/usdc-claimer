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
    "6KFZw4eMgHq4UrDXYh6i5Za34mVgRTBvh2PPVR1cymivNHwMufZfzLeUjMRtxnJsc43FasnpFLRzJKupGiWYNQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cy5wgEmAaduRakqFWWsjuzwssmiHhkaT2k8ZXFSSj6o22g6AfWJKb86PDL6Ks26ony9Q4Qp15bCakhMYaXXg54m",
  "key1": "59i2bPmnFyQz3okEXMJrDimEQEhEKHU4XfYNda2mPzQD3MGP3RqjtnTEAFbpDqcgooV6GdQLcZwY3YnSYiuyGKhW",
  "key2": "3ZyYCF9Q3Gq7smz3yxAKENL45EN6C7EEVjdTF5mb4ZjDdrsBhCyrmwGyU4U4rc1RA4W1m9JDsa29PRnenvEqU8SZ",
  "key3": "4FYHpfV1QqCsvRa4ZYzvCghxkAFZBBprY2fgjcqXhboQSzrHddzi4a8sDdpZaRLkj6prRyfBr3t5ZEYEzuw8QTPS",
  "key4": "39jVxWBnvLLu3JAET35o3EPDQLqV4FZ5xK2om5A4EH16V9ps97aZehcb3bwPgc4EFs64RjU1eeDL7QLFptRBerd6",
  "key5": "xEk9gAGQKsm7tHmhcNnW88d1K74KY7jEJzkKFoDsg6SieKLYqY9it8Rwnd62JsFwFDzLThW4ntxwKUTaDYro9CU",
  "key6": "3qkTjD2bxoKp5x5JtQajtp1PJ7ApPS5bcBLBKrBZZNMvMNNExtgvRn9BwyoMpz2b4LVQEKmznUxcHLc6rkXT3ttw",
  "key7": "47EDtrXZd8vowS4xsBy1EbUevErV1Z5pQQXRgFikwcP3wxt3g2rsXmoVZ7bzyq6gtYB6usxpiJMGXJyyhUtqaBHG",
  "key8": "2Mb1pa5Bhb5kBpQPFtzqUkrE72CBmvRvrge4CjYzqXE7pzJ8SZqvTnn9kqejjKbMjaf4dbLdNj5x1tgHEcMcXoPj",
  "key9": "ReMP9CxqBDgPMnif9qyWkJwmmGw23cmmEtZXaf192PphEjheCtuje1A3PhA2v31kFQjtFt94XYrvoQgSHjvj6Dc",
  "key10": "2XDYdugdtBwZXqNMRFymao3xs3iwmiSNKJkRvrpBirhJhkSn1v7YbrcN5Pnjsophd8JEUrYVfXfzt49kMrSzpZrT",
  "key11": "2EGdcNA4U2MFG2Sj2y5L5EePyvW7WLct3E7oys71YZHjLAisj1vRbtkGDtTiUg3A2eptQqrNPRNZSFGnskYa9XoQ",
  "key12": "497xTvVxUTQt2ZAqQv8uYpTrJtjTGnYmFmZ8of35vw9Dmfy5sHM26ubqhu443U34xbcSkwy8av6XJSBzcbcZtKJA",
  "key13": "4ZTaK31XjhmLvQEjgKYznd4wSXgDCCukSaM2Q53EyuEVWuRiQXuKXiahz4JmTwV8kQykRXFaDbfyHNg7X75S1j5r",
  "key14": "5kVoR3c7GpYpjGGg21ZyaqoT4tii6AWeyPCC6RvfcfgsuSR1B2kYThHNs5eoiRFbKsDEmhD8xxpfbytzQQwPFqkV",
  "key15": "5qQ12ADpBigMLmaJ3xCwogqVVntpkc3cpogEaA9mAHsGX1NsB3eFCSzzaNehY51VrPt2vZ2Wgq6thuF2mAjUuWEr",
  "key16": "65JPKbWGbJHeee1XRdSCbsinVFgHDRdzRcbe72YZK3aeuJZ95Zv48yrN2s3hsRb445GKZReaBz6ho4oUkXUwA4ZT",
  "key17": "4FkBfPVeRF6SYiREujdPnepSoGbjJ5U9cozpXrRgmjyM2yea8q1gq1N29FVjePaPkxE2jY4R2mPqWrhg1h2Dh8Gz",
  "key18": "48VxEDKpo4UELWZdJffMA6MyG5LP6wu914RR616QxPTNSLmFKLiq9hfC32S3cKCf5WYxyvZVoZ5pLwY6fWdLfzVW",
  "key19": "5NzYUV4e1kbJ7iTnfW2FN3yu1tVtGuqJ9CVHJYt892yLSAcXLtyQCXfDpDbXN9uKdQYHZTX9cS4LW9PBiMwhAq2E",
  "key20": "2XgTSr4vzxxVNijmJL7QzCji2xMfzyz6cVMSr2PHZmFpPW3vjanPk1buqsM54CjK1WVZnHBEUq4LHiBWwPygfRuj",
  "key21": "GzknQrazCzuACSwt8BqfdpefR6FHpqdw2582QHVDQUuqL5aZG3FgP5KmuzsHTBuaF3qrWL7UsLWgs3oqTSU6Y2X",
  "key22": "5KNir2u4o1mMmJuWSTKG6w7MzQp4eY3YoppijT2PdvpCk6RWedAQ9cPZDckXV2YNebqz6paQCUjSCq5D7JVchyot",
  "key23": "3WTeYNVRhYdagJoRaUW6pzPF82qFXuGvLDdfTc6EGYKpV3hpExR8WcH1rCwhZCT38m9xjNKjMDHHLxXXTafdw9DM",
  "key24": "7gvxQLxx5GoXm1QQ6yXVzimDonCPSXVR4ddociQdW15sUZEGNqE5pF8tZezvmZD8S4wDzviWkFrNLeWvCQZ3iMj",
  "key25": "5QcynUCzPq7xBmE9RSN2SEhYqjPSctDHT61Uk8tw7cyWt4E1gAALqUztUY9KF6g56aKjqwRsZpRD6QfUUqfKyWtY",
  "key26": "5yEi9XdvucVLrfWYxo62wf5ubczJbp1h8QD5hnGYREmJPMUYHUzZFQbJcEsG6qNpXGoNKCpdg2W39JfPwFASfYj5",
  "key27": "zQuhKaGUXu7T5pJjQSzsfDvYtM7AUzxe3muGwtD9mPqVKknVNQZFhpkBeuHb5VUDCZkmVyXBAfnqvzvQDdc3r7c",
  "key28": "5Fx3YxgsEmXoU3jk1DzPwYu8rTxVxMFq4TTpyoh1SGSYXUymTxu56A9HVM6m6hq7EK7YRbmHpmkLfmBwTj7TKsFK",
  "key29": "2sUb6xjGWZiRDNCKmWZHh6NUVVxtzaMF2soHqkK7auQaERYgTBDwtuLLzwecBqnEYd93obf7vrFeAMBFaUtJJAMA",
  "key30": "2PUPGNEqSyqo23NeJaZ1eSovj6Ye8KCapcQfFqL62RUys7jhvMa5GKnaXiAcq8xdiBnToTqeXwPuv5ZXspfv4JRm"
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
