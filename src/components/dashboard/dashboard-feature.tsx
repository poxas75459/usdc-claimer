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
    "2njegCobMQPpckRn1UeiaH8MHftjEXm1GET8GHor3sQMR9o2nVZrQy9DU5jJVhdCGVDEYpx1SAPYCWR2CuqUEthr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMWdA6p43KSqDgZvdbNXmuRVw7corXJ6kVtWY3JjAU7rpMhAMqxCK8JxfW8A4JTJT7Q7CyvNcj2RyXKThfBqCbG",
  "key1": "5wotuTXxPqfHHzqPsXwVumABEJtQj8kP1EGdUSFeeVcNx5ix75LaKH7gAj5EHZsYmTqEUoKapz8NdzQNuwmp5roB",
  "key2": "2BD8WxpubtWV5R28S8MgSn5dRrmmt24d4C59tmoMmUJj9VTmjBxZeJztFiFe7pBaiv1qTNoQnUYDrPDwV7Nzbg7L",
  "key3": "8F7f5of1qeFSiLTxEuU4SRHWHnZ8JUYHCANErSseWDiRt1kGZs5M5BKBXAvNa5FGA4s4bC1UeyCfUCec6ZbvSLW",
  "key4": "3XDWk4AZbVDMcVgFkjighDUrZa1XERahmGroTKDKEH2mpXFUexmniAEzzMcnNN7DvWbCJ8erzG9zEiWf37b1Etei",
  "key5": "TG6o6s4q5fUoEZT5f5L2qioHLbpmR6n4KhKiub4UoWyaQJPwCKooFc9JSNzsxiFf2rE7TT2f4YcrvW76wLwxSwu",
  "key6": "2Tc4ykqFQCQjek58khZBfmhiX4crhFRykX1HYmcaqMZBGmuDEiX7H6wdLFPuRaMArfP41UcZMJQUM2hRWVjeLxWA",
  "key7": "2E4zSjAYuxFHtLs5udgo1QtZyoYjcAK7Z6eut3mYx9k4i8eFtV3WVRu6aza1NfEQhRydM5HJVNt1dcFrLsywRQMC",
  "key8": "4MoqcSrj58Hy1WqAfHrWvZP1ZnjWPoMFgYFm6i136ghgTipB2SRJBEgMpH5SSXckgZQMnJoqctyDt3f32h8Qpfs8",
  "key9": "5oEg834FLvrx2aQTDA7UH8VvcTaq46aJbpCg9LPc4i6ErABqfAKPxvyCK6k8hujehWXEwX2vxio2KET6jNk8x17S",
  "key10": "5mpfMPmJKct7QYh6kBFo93D69fV6Y7L7as3tpHupdsX7vTXggJ4R1dxvPBjJupTZH3CcqNvoTW1seomjonWaghdM",
  "key11": "4LqqBnur4sJmruSozkH56WKjmCERYwNF82C8cotyeUsvCcmFXDMakrmSekxMHo1dR5FnDmWTJRDnAQ2wcSUvZSKz",
  "key12": "3Lj8hAW5R94vDdVh7gdWRRV9jB4dMGKYEXwmh7n3CEh8Mu6iz1mHZqr2hvpSTajyaYdDCFLdXcfUQfDRjva5siVZ",
  "key13": "4HbJTj3Q5AJUbzRHoweweq4EBsi9vffD8SPV33a7foMgSzoyh6bwj3kUeF2BgTmnfANUr6XzjfQQnpfqi3e52Wmv",
  "key14": "4EowENenqtbZide8LCD6at21rYCEdNDEUeR9jDUVMuacvXM9FVNU491LPHovd4QxDgBi7hpbFo6cy1aBNsxdZg1C",
  "key15": "mgFkVeySDLxGtEkkQCiZnAUKKap73Dzge7243ockwFmVDkFq7o4RGnrBTGigeQsEVhmNjmpTLKkHrGaWF9jXwiq",
  "key16": "KYgsy821QWsd6LwqqJoC4KDkrab6BUTFdCdtYMMSgc4GFXU6SV9nsbECwi5DJNgpU1ERgCw9WdE8UVUE3qE4kxa",
  "key17": "5Lf2KNWXnP44KTPHs7RjzzDwDPbRF9UEPnoDYXwKhN7rw6NmYk7tE9EawXCfKZ5j9wpra4wiVxgdGoa1hHCarAT",
  "key18": "HLDNr8iNnxNqZ65CnW62zWPUTDXjVJRs4NhFYxKNB88cUyN9gJDaztp1kZdHVXcj1uqECxxVEyNFywEKUoVNmZA",
  "key19": "5VUEag3ru7VPjA5MjPRQ8qrUdCCR98vX4JbAisUxdjHLQF2HLwXjNPkLeZcpy5zCLwwBaDfbXKqyu2Vj163P1TAA",
  "key20": "rZD6kVPnfQfgG5W1xpVhMFoHLY9jas5eEL9ord3gD36twSnhSzr8ZiRQwbpYoGuCdDSy4otzCcGcSpcS9FdCJZs",
  "key21": "58Lmdg7qBzS7ZZDsBUPKEGyMvJuus2PxRu34kABqbjyzbs7iT7CrX6QRJvt6jvzKf5SL1mW8SPmSqMcfyPpVvpwo",
  "key22": "2qTpnjhCsdp8FNp1wrYEu5cRUJL4z1mNxSVgagv9WrB6a2j8MdnhmziumAaKmNHCDL4mRG3oW1LFVHwMfS4YNUHr",
  "key23": "63iDabEmU6NmvdxRrxhyiPHptHA4qSv8cY29HiX8yFTL1rBmuu6AvNFbhEXE5f5wupGCduQ7z81kLHkf3iUx3bUX",
  "key24": "DmFmhtYjgjZNL6bLcBUrho2tkWVQXhELpV7UUgZND77rb3zfeubt9ftn2rDeg7ypUMaDuA573PjmnsXwePjRFZH",
  "key25": "tVkzJ3MsCmEnUGujfZZxVYnLuZPpRLrrmqb5vKhcBF4hwi8dgbTGdhN6EAQddcf9jC6apUSuxuqqs8gwzhUAgaz",
  "key26": "5q9pidpajEgKhYJDXd32qKjut2xNrTZn1rdrZ6LMweMakgzUTD9cFP7G5z4ARSQBwtWbTPMAKLWgWn4Ctvz5sBRM",
  "key27": "43VGRWkdZaYpqGafHYvPKtWrnTfcKEfvX4ZcAM1Txxqh4uyQi52EyZ2nrqBYySt77b564fa7tMiF8P8G6ZUzb2nR",
  "key28": "BZmKEgZJMCBxjWfc3ThZDyCp5V8VDS8kLzrPhhHyQ2ffqHrm2XQfaJVDBfGLdf8zbJm7B167sdfEE8aVcURKYhQ",
  "key29": "4mq3as8ntjHsPgm6Aw5RkbtUAKhKFbgmyK2XFDM482a2LzSt5T4WKSravEZFioEK6BaoCuVrwUGHE5qMLi3YVeWd",
  "key30": "4gT57hQ1x4ZfwvPZUnw7CoFrN5V85t7LWqiozSJzJKh9wcBuvrLbWxPVhfasKSnUk5r8N4bfD7oxkRJXSW5jwwrm",
  "key31": "5u298TbKMJ6QMnkwP35RpsaDiqki9DA77qwD3rbb8HRTfc9FDrL8dKVrC6Zo6eu6TN4xGDaC8X1c5HGtWqGV4xWt",
  "key32": "zFvUqJbSPwv6V7npxfvdj9vJzLrC2HX3Jv1YM8wwvHdF6b4kwV8PjF5KTzuob6ZvXoDTmSFKWigAieHGZ77SSDz",
  "key33": "5AENDrWcy96TzzveFuyqSKTSaqS6pNpoNQte7R9AbGP4ikmTjAaHyVPiVws1veCQExTtLgWx65eZREA7zTF2hvio",
  "key34": "36qJS7Cphtdx6FbMygpMMVdDZCchmjBdiFGyGuzYUgdCrSt1ttPof7cP7nroUnTzvFjXLmF4PF6ERzoTy8yb7Jue",
  "key35": "3fY2eHmT1s8Kxfo4wf6mvF7cXvK3G5mEm9Yht2Mi98Da3voTR9VEu1P3rG4rE7CRMhrJJzmr7PLQq5dGCeG9uE7g",
  "key36": "3ZRf7XDrmUjPkfxL75bd2WpFfmmMkJCoLL85DP5NHisLEqq3KLKHYJYozhWhWtVGzgr9YvGajgyvYv5cA4uRTehv",
  "key37": "5nAyKu1wnjpAZrXWnBm1FYo518NXuVfHC1hw2JPafgXr4reg9p77WmhJ7h2R8p1ZXLo7dLgK6P1xZx4cLypXXDp4",
  "key38": "55VEFQXprRaY1nHye3cAibshHCPL3RB55Tsv5MoMAvz7RpjLWyc9wmurUbtFy2covYgGMMstoFc58J34UPUyuLHU",
  "key39": "3HMnQtzDi7pjPGvmpGstSeVNLHPmZKZCVkmrgQPtzzLSZ23aiN8Qv11nJRB8UL8XpDT7eFKrAR53AWrLcntMGWfb",
  "key40": "JY79W6vb7dVN7auhvAeqVcB6h9G81ugYKT86gpASEVPwhHtb7NPqFUpAAopNS3MpAmMfnq9P1f4so6TqP1rPqfQ"
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
