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
    "3tZK65Q5hfUB2qWckyBYxvsrrvMwYGVZn67kgKwsRwfGEisqtt3EUVsS9QvEFBHtKJ3DtFAYyvLVazJZsbnLFoot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CkTbgh73XikiCwn4z38E4T2N74LGgHP8WufbLdQTy6EixzT7XYi26rTGCQfd3m2PuaUArfBArpxqYZ7T17hbiVz",
  "key1": "33U5sPe8pBtwY5MndDoeXq8gPxwgjc3axPqDftwyo1nAFC4btsJwhLNBsYf56kGsFbYaAjj4PrQWnRXKPQWhVbxL",
  "key2": "38SHGD5TZBDPCkp6NabzzjJcvGXRdTuDgeF1uzu9tp8dDRqNJocsfsN6S6kuiQUQbeVjSLnQKVCh1Bh4gKPY2aKD",
  "key3": "GqfdjRVt6RExhQQJUviPZEZJtjhz1ba8xH9EmXSVDbv9Eq6EdzaPx37fx685BH4MJAQERhy3P9spmiAeQ6oPMqe",
  "key4": "3yyYLkELkVg4M9VuLrczLtRWu3AJjNJYDBzE6u1VfLv1hP7eqH6i2HSWwdv9AKeErtGXjeBQBuY7MwHt6XwuShJX",
  "key5": "3ZFt3HB2eGcivCLXXs9f6rabutCFSSsEuqbaDhoa1i7DQ4LutKYUW4GZU2ARuR4KramXR7RcJ4sMusiMwwHPf2CU",
  "key6": "3V8zX2v4V4wVetCoy7cGP6rZaz15Vx9TdSpQL6dir5R8xKtZKJcV574kg26yjk2UyHAHQKx1tuBz7hjgSmQv5fRD",
  "key7": "4aTk4RUeVb5vWYGMWA2yYMVJPUY99UZ33ntPRCftZSQGwYD8LmdDLh6xS2GjWwyQXQp9WLGYmrYBMUoArNEqmuGD",
  "key8": "5xeGo6NUqrugtQkLyvMEEVRSBvj8pHwnUQ3fVPekuf432ygAYnW9bSrhhrJjDAcGbPNGV8NHELdzqN5HvPZ2ts3m",
  "key9": "PZ855CM6LsVRpJVXdsnzpkQdvCJfKY8BVmrcv4UBQk17b1jDiret5VJZSoxbdqTDgVvgZk3bzHSh1PScP2CZHDN",
  "key10": "5PvuZh7tM9QPrTBNUUzub2DKJReoMWRcPAHdRyYeAg9bjwirdWiupu94iBunmagU6yq3TKE4ZwuVzndYHwepirxH",
  "key11": "2Bg6m2GRjEuh1Mm2LKacE2tmmr1USPvLWkzRcRjK2SzudimhdmpMEUCsM7tYCEEBRomftqweukkfVWaDSmayeUwe",
  "key12": "5aGXERRFuL6JQetLb4PNyuyLjyjzGFdrd8ywQTcSDiZiZRkSmY2hn93dXWjjHfYuSMb2itVVR6PA7p7mxh7iHAwb",
  "key13": "2FrJqRnMjzny43zCS3MWsBwDVGsUxXBVLaRrN4CY6Ho3ysYF68KnBG3JD6qzQP8ZBun4MQ9Dt682SjhHfVRuhYMy",
  "key14": "51r8PG4eMJnTW28diAdZBeQTfkRk4KaaeEFZSuAavD4BNrJuXcMVibGvhR3UKS9i2bz7TzdutkfvcTo76Mm4wekT",
  "key15": "3ngF9B5NchJWVks2YhZUk1iPYcaQWTGB948pCcDK5YvEiqmcwNZo1Bf8ef1MmAYUSD9kHJKffM9H6nHnQq2CLgu6",
  "key16": "WWiACcxAYofKfWehFDxD6f4hdfvaF5rnQ8r7V3YQDRd3tNxc3arygUSCihyupp8bLAhnBHp4HZkaA9pwtQz2zvb",
  "key17": "28BviUuWWz24oyymjCJyqfzwCLDxxXJ6tKzU61wkmHj3U5KpyMNFwdAV92pXWJY5U8UfSJvTaTay3aBSLawUnd7A",
  "key18": "c7aga5rJzmUoxi5FxM4WEdNjkyq3t5z7gTXa3Fmsh3VSD41AMbNEauggAmcHxD46qYeEmVCoLeskVJMgU6v7FJv",
  "key19": "2VKHECaxgjQHvmrVt9UfnpVb52pXJZfsAQzpoYVe2Gg2EKFQ2XjVeMgrG1k9ku24MPrLqPfNz1QKgkJ5NRjf4Ykt",
  "key20": "ds9fVVPkeJH295aAQFmcgZ7AEZSXTysKTZcqxNfQ36T2a2BkmBSCKP7ueW3YVybcJfLtMhNNMnme1t3A6b8yK7Q",
  "key21": "6oxncsTv83zKHwnf6Yveh86VStBZREjtvDNj1Twygdmw7RXSm4Bz9CSTU1Psd7ESJCapKuN7VjqmAYRnJ7BFPCF",
  "key22": "3gnZdbos9s2RBFCZbPoSEhLAbeTpw91DFqu83p8ZTgB4GqWU7q4VVvnbKNThREe2EhShebL6QEtwDCmGPARjbqH4",
  "key23": "cyHHHaLpTokCbWfpBkSokTDLQc5BuSKg9SyE8FvM5QwJ8tVucN6mbwoRTZ3SC3fbZpDEfWGEbpb4tWXefTRKHAt",
  "key24": "21fKLnwoj2e7hgJNP8PUV3M4ceNvdcTrN1NjAHj2M5DjQy4B65ZTkCarbgN6x7nTzBYSt9zcVvBRg99MDhpYyo7i",
  "key25": "3tsdrNmRESv9b9jUTHEcw3qBs67rsLKJCTSmwo2BDciciYWzpCJcSACWySJY7rSYhEWep3FAtmUaZXuQgg58CqU1",
  "key26": "3s5tExXAFCJ6VsFfYoHYHrfBoXEBXgAkaudNzmqjd293dwuoHyHSkRhVrRgFrLsNHDe3JnZnvVjqKfCDmRWUZBw"
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
