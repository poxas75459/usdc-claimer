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
    "3S1TRFupBB9L2quyZTTRdbxAbyY8s6jMZdPnXnt9bmgdht9rJruPcvHLiuDVX9Q2ZUKZfNhVCQAMLvoMfRytcvuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655iCADrgUWAVMziqbrEEnshsTQbzuL6J8pV51vdGoYfHDMDuFGvgk9apBEgbZ6wnBuC9fWjmb8r5Eo7mKQAPk5P",
  "key1": "5zYbF1ERojdotKkJcgtEEyLVZERq7kfgXYQZD8mxcSxcdb5K3EAXRnpan1jyYNryNmWxQqexZSHN3zx8drhDYA6T",
  "key2": "2Sk15FFXNXrEeQNfTa5aucTKSBpFKDaz4jjeu1DC5JHws9Mzs7wPvzMC3d44dFBe9JbG5d4BsSMqx4hNtNLh7u9C",
  "key3": "41MZkPXNukcUfoMVkSWaxxZKT3f9VBWCy3XdFrzk74Ps5kzAizJk7PfZe6jX9cUQdoT8AVYtYJYqjZ7CjxJMb6PA",
  "key4": "4b1YLroyn3pn9Maj4LyDjGGC8wbtdaAz4YAqwrGk8E9s2WNaameu32t4j7rJQpV3W5VQo7g5f7ZSPdeyjCuVCFv9",
  "key5": "58wdnXDpfWMfLJ2cfYALwKUfZFhJsG31h2PofRYpmbt75bPGhbvdSDZuyoqm2fGee1M8kY6aqhm1G5okZPwFny3Y",
  "key6": "Jd4QJgKdkiMwewfviXdwGKAnZK9j2fjoGCyDeC5ddhBQAsAeYUy4Q9o8FiSLojBdvX3temDv6qapprWHnfueLBQ",
  "key7": "2X5MKn9XyMQCoRZQGGDQ5wq1c9XDyMhgUhvGyZw2Y28Jct1DTvEuZ9wos9nAwVzaa1XEGsThiArP5GR3Xv9sj4ga",
  "key8": "2rbUKhWV8XNvSkXPGjmcNxd2hSoyaHtLUw1wQE1Q6Bi9v25FB4ffrhWabq3fNCwctiXn1ynJVKTUYTWvEjm1c1Ga",
  "key9": "36mqbSxKgWeADLVE3pKJFP8cWAfc7RrvzPHKr5NtnpEqZbsEjMjkBATFVtcmEboYxfYTUywLmwys8BGkNKPHt1qM",
  "key10": "3VXKDa26dNe8hRJVVafDWNdXuM5qinXYo5o2LwyqH5ravSKCfqX7Z6N5UwnoEL8vykWx9fSchTHcxq5nMpdUB79W",
  "key11": "2jB77UV8KnF98r5ZUprBSSE2KPacPa5CfnYu8zuYYJbgWSupQaTdT31mJwzmurqARtmQbJyFrm2shZgNEGVaMc8r",
  "key12": "5GZXU9WXJG1yQp4qLhmTtf9SDVCa29iSrejcCAz5nBUPfeaQSuRXv116yiovp5Kstf9EDZeNzVDJ7Wv44ZfdyX7j",
  "key13": "5vDxtbBptfGkUJPFRLzkv3fTDenvAn6bG2A5Zuxeb8mdsYQ62m7u2TfSq298B9zGp1ed28i3kkzrW9MDvjX7aGnT",
  "key14": "5YzkKy6TzTqX1RNXo2psw2dX1Xe4Wq2yi1ccNKiUmE7X13QdGNzqvWpGefmY37tXVXy1ySvVcdNj7CVXtzz3sXWo",
  "key15": "2Y22eECgrTwtix8hYqqMjYJ3vjowNRSfxcV9fNJpew8SRMcpQrTR4b9ZpWF35M3tgkAi6r8JysAySbCiSPVkueu3",
  "key16": "j2ViwwTPZRZqFpkQpjPNZwpFECSg5wSb6Puu7uThdyfYJvR2iEyRsoZmunn7zHZQKpTXLWqxGLWPyseEpkiypTV",
  "key17": "4RJhnrCJqUsePkdMFwf4jGbry8f1tgPXdviH317LQtQBZZJb2tDyuJ9GRBthkYwxFxcGpL8CMZBxPrEak6FiSFYq",
  "key18": "QsFuAesxy4qt4het1LpSHDfkUYiPMW6fN21STSL11RwGZ6p7ttthssi8ks4PDi4Dxg31fQhqQL3aKjUBPDv78cv",
  "key19": "5Uh5k8ryhaivEhJ6dH5WWsjo9ufb7SmBPZCcXTEkYEcxkszzL59TmMrzhZmH6Q4qFFkBD8qypDDY3jkGWqRR1pvQ",
  "key20": "7PNhq8wkr8MX4QyE2ao2GD1nRucpBEYe42kA1oxApmuDTFeRUBvhKPxLxHDBYrMbb2TwC7WMoN8Ta2D2GLzY6ZW",
  "key21": "4SfsoTX9wdmz92YzJ93mh6jGvXnUUX8FLdsqTuqK6fB5jhyUxztBsT4yEcCH5VoHAdzyWURcTwYoWDuPWiibe4YD",
  "key22": "3rooLu6JSUd8cCCJ9JGtVoUarVBxZAjhdUXew7u5Lg6pgm3RgoZ99tnuEfYh6SZMGtQzLssd9gRFxvGKYKHix1ij",
  "key23": "28LLnDe4FUaMAoc2qSJyAA1SDkr6KiDq8zG8iABDDcwCqQDYWFtPxPeyUQyW4NW4q9pfWZB8Vz314HRy8LsdE7yS",
  "key24": "56hVNXWcQsGnvmBhpq3tTW9d1i8UbmS3PpsC1TUTNQivQFkz12Jr8eF2emMmf5MnTogbepg9YZcheZJcKkjYPM73",
  "key25": "5b1nuaN7P7FJLWLdCqXthBrTDSznVgUBPciRXMvzWLszqzb14jBbWMGWt9KBaBhnRKtHTwP2YM7unBJtDqkdNpNf",
  "key26": "3LZwtWyAZJo3rdkDEGbFMdJHwAe47Ts9WDipqGmzPPAes6foSP6RrFYwnaX2sQB1kX7DQSsLNyoqtjY2sqHyX37W",
  "key27": "2rGqMWPniRDynQL9wUsxj3uHY9DibFvKyn74dpAFWLnjfNGc4Z2qyuaLn3RGJeMpZa8uandWGcQTGaETWxmZqvgB",
  "key28": "47MMf4qcJ3aiLzMsiQwiaqzXApbsvdNnitsRcKFn3W8NGLZz48yzHK5jjRamQ2YGQFpv6PQAhKsWQeGSUfB47xZX",
  "key29": "5gZ8A2LYy1dGdsf6jZf9YbfQ7SUdWkgv1rJ6yGB9AbPkCYCL1vZh14v2SFM6YB3zuNqgAJuHn19fE886DpqYjQdR",
  "key30": "jzh9PjRFeBRHsx9tfkxVcX9ghVsAdEsr5mEXx9uNaghGpGZ2aaomVawGuTzuihZ8TR8EzT6JtidZLTfrZ8KZWZ6",
  "key31": "4iFkbJQ3cZs11mcvXTifvgaCvMiMSbRZrXqWDjfpiScxu4p1LNSDA3LcjaJppYsJd7jz6rKXnrSCfDL7fdoYBp2L",
  "key32": "55Rqr52qekmpCAtfB8QhQUpQq2hXDzyHMbCvjwj1i58pf6dmaW1a1Eyao3pn3u36aE3WX2Z9BSjmbnihTeBPmLq8",
  "key33": "fRj8eTEh1UuHiTK9YznGHrSsbVuP4ijAt1XkoMzMoKUUnYHRkLatNjnZLYgpn6bAnjqBRZ1tY2YQfms7QDKPtiD",
  "key34": "5svkuxErYfavLcMCL7X6viN9HVPHQa6CP4EWB2LPySiCLjC8jr5prfTnTqiw6LpNoea2PihYXzYD9TDTFGo6dAbF",
  "key35": "PBM7R6Qf2ChWSvYqQiw1gWZRtisHmDxxCZLFSyNtmDN8uzYTvBHjpomeQHKGWgVzrQ7JvKPJj179rCwpdeBxHmX",
  "key36": "vk28WraUCvqALaL12xQLgKytV6yuXBRsQDCLLhXDaTEK2HhiCSRXpWrE3SLUtyRg5BDWoK4GNqz5Ctgpbox7esY",
  "key37": "t7Uxa74R74QfMocnhMkf4SsuAHpetodQUFxnBFkk9qcXThKGLY8aZLpZw758DZU8GhH6DaFWJQ92NKxpmRrzYWr"
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
