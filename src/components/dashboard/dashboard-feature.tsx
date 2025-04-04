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
    "5TsMTry3Bw2xgHzctSQNhN2gpoKzeChtLWnqBdNkC1s2UJk7t1dxWbjKdjG3bWDF4rUnpWYRyEwpwqcQwqboC6PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nQomtiYfPiJarYg2Up6PV9xhYBmz61eMARsfZ9xVz7qLwkrSknQkGwNnP2Mn9xBM5sV9Cv5A6Q15JfEDTs3PwJn",
  "key1": "2jo3184XdprqPdnjuDd4NCmqpGuP5FjbXQxz1UxCzjEkPtLcaC2iga9EfUzAnSdCqVXXAxa5MMGBxZZiLN6BpHP6",
  "key2": "2nZhBZ162kD68Gnvs87TLnrLFYAPkNL9R46WX4sfuypNQGQb7snEMDvCU8WHoBCT1TsvKoaK5HsbGM9JuHoPQAsY",
  "key3": "4GBvwac7FQjcBtb32Bh1BdvfUPrDCppzaVduMvPnFVaaxZke2pwFiYJ7zY6qVNdL8tPZjQLGSZNPrcFxVn3Pn7ZE",
  "key4": "2315UdyuXHix89UigEMzrXXfaDxXmGbzMWB37BGd49t4zZSrL4a8eSuqxaQouDootgKT1xGezZjC6MYjMqsya1FB",
  "key5": "4YVxCevKRPAS3rX8AMzPsGZKbRuFpnQHUS4MHkz331QQ9tUn87JuLcdrQuULWnBKKjD8nsHRmxEgj66CkNJ8aqem",
  "key6": "2DGcoFQrDPG8cCAS5smC76X7W6UhfoWDL7zy5LXTt8ehm8QGLuukfYouCJTzGqKKwdVNyHdtwKqiFF4Q3Rjxdijd",
  "key7": "62MwXj46YLAixpi754C714w23RvTz1zZQRk6aAtP3yUGC6tVVLMM97w4Ff3gH65oPr5C62VJS4J1Afqa7NZZnsJP",
  "key8": "HyZaSoSsbQfirweVGMQjmy8mBRMBJAEKVfd5i2zysrnGkUwbBTGm4KX63cyAqxH6rNjEjb6Eu5epEw1GcZ8yws5",
  "key9": "AYyUTZhkmxvAcUApyedVmwn4yzhQJ6tMWMvDSdEXFjN5QjSK1TZWjzetvXcieQzq1g3tug6LBpQrYnfL77Rs1vb",
  "key10": "4qe6dZ32ZHYchNguSqXXSGnRh3c4GJH1BAtxBo175Jx7bYu1Y762pskiWAfJ468tz1xcPuwTJUkCfyKQgqiiSWYT",
  "key11": "5RJARQJjNbWBpFtkjS29uHfX5C7ACiZCg8v3NbCPGMcFQFRVvRibhfzG7R3zkFAs1GUopWU2YKj9r1YScL3k1hDN",
  "key12": "2F22XJYaw9TAunqAZfPGD45xohudUz87HWo5cqQKM19bfpfUkFfU5nhknz49H8jVBUWnX5ni8Edgac5BptPpui2n",
  "key13": "4LUgBCenW4r1cvDNwyJVK9wuQq2LucrUJ3wEXtF2eqB5WqaCHJRpXamy8TVjZM2FxKzjgVhUbXVBvLSsDnT8AsZG",
  "key14": "62bB8my5JuHzi1dMogxHJ9TUA185mFg8vQ1ApkRSXUnWCkkQckGEawX5KhALoY78EfmrSk4h8BYVVHJRuGtmEH5N",
  "key15": "4Y5SeUSCb8SDePkeBQg4ZAQHY4DXvFUuuEPmYPFbGFAoKfnjCEASSBKkqFGrpkQRTo4wcgYTe4jdAJiECgijaqZU",
  "key16": "5oRP2rvLBZ9DdYv9o1g8c6ajNa5x6PnWewvr5akftB6R2FMMGVuBCkc5xAfJRZb2chNk9c1XqG9PWgeqpwVGw9GF",
  "key17": "4KTJpKcx5iVPbVUfnKfnrxao74gdPfBQY21K6gSu75oRFPVWjUYz8JyhWemhsEtmxTzf4NHTNKnV3X4r3eMQeVLp",
  "key18": "4UKk51tckZrsRDDPZ37JdRqFvudd6oPkZZP9ePhULjmLbsGVFokw2EfS6wmYbgPPTcGEufgmtcDEEEg9MmYfhUby",
  "key19": "52v8SJ2sezcF47LiZXLXMYjt6cUKXEH9dk5iJQfvUHidFMnurnh7EwSGfeRZrfSGHrR2XwS5yx5saS1H1X31otx5",
  "key20": "4dhhDtHKY1gufjR7UT5Dwc7BtYDtKATQGMdgnAjr637DkVvw2uKCTDirhM8BXSDPkYJCUy5N8u2XMqcVP441XssR",
  "key21": "3jVaqBYiXSUtwDfRUU7sSJ1w1HTKqjnPey5T51en9i3kfBJMis4iUNES6ACQW1mfxrCMEZFSkSS7EQCvDJuusZkg",
  "key22": "4n8xPeTikksWtYSpHqA74cZ1pYXZFogW3yWpRiFvJXdVp1v6zARLfgGGSUTteWBPy7Y9Q1uhARUf4615idcKxSz2",
  "key23": "51s4gVSnXC6QddLQ3zLJmzcPMY6HZirjycisp2bD9ykewLdEg8abSLg3HXvVKNkNcCNDzFYDRMZ65CWPiCkQqvg9",
  "key24": "4goCx6sd5W9Aqb6VY36Fgdx66vDeizk5gHkW7393VLGwBairWNiRfFNpR6n4BfmReXTePxpbgFHXt4Y3e7SoHdiF",
  "key25": "M8jyRAMB6N1CaFRv8z5QAD5PG7KNokhv24yoFogygXqLpru9FRfnAabwkGfonbvjMCep4T4NYJWuxRsBXhvFrZq",
  "key26": "5kWXUirnTTvGjW14mAZBn3AYz8j73ouHbqjbbGFQb5uLqfU29mZYGaU2qYdXCzpSrXf3PLV9zTf2SDCXKwSC5WeY",
  "key27": "3N5Gqnz5huB59dq9fD4wNRuB4w5ENVsu8cbiLLcdS7r2Cx2nmtdSC1J2WpgNyr1otcgZEABx3LWKjhbgXac5sbEB",
  "key28": "29UH2hX3AZ7hKp6UgXR5yTpTAq2rse8mDt1v8KQx37849EhDJ4M1RAikYkt8vfoPgzAaqoY61CzfYvthwmLKYZCA",
  "key29": "4a7yMTaGYLj4awh3XT2UwEDNg6A3596xABfD1zK1qJsSDb4dkZeyDLn88Krz4K4KGfDdkV7G9co8atCAeWvwdZqP",
  "key30": "5KJaChKsuwZ4JKcSoS5ViMVm7fU6Q1KWpLp5N9BpYPuW5zFkgHme972Myf1EP1j6813C1QG5LZwmABYa4o45u7Wo",
  "key31": "uxhUej7VvHxib8PEcYLcRs5H8gbbqLUPCHay5FsZUmWEtoypm5aBvBXRVtDFfMUbaAb4VZrKYwM5uJ2hB7yV677",
  "key32": "3BuY8GsxLc2AJ3EKG5UDHYJ1iERKmVZcU9pm1qdeNHZMKJtxU4VvFZ2riueTunpLxjVZqUnGY8DyTUKRJwrc5pMy",
  "key33": "3xH2R8Kp1amW8Pn33RcbeurfooEbc9TV5JqvX3uzmXbARg7igtf1hNkSuuvku9mjyknawmzXsWErS4jKTkRkA3GY",
  "key34": "2RZWnPo9CjQkHHTV56M2azEUDpeuutHHkTsGoz1jknsH35fVa6tm2pfsMNny7rZJD7fTf8KXbpH1gRg916zN7iS3",
  "key35": "3XcWoijPufDjctgGeeeZyg9fuLxHCVYQdzss2vWPxYoyTKHyh9CPseckPCMNRQeyPHkEX6vtgYVj8TfaDdEHscsd",
  "key36": "2n616F4qDd9xeyDc2mHuFoBcKzTg8kQoFwSrYgWSS3oigXUVhdEDnuxewWqa5HPDKj8mx1zbM7t12HeQ2FXjMpmY",
  "key37": "HG2S58dgSx9egum7EPnsGm4PjpN7wau52y6QMq7KC4ekRDBxVBpmbFMDmKfPpxoyXRmdCkYb5rKE6FiFvr9CSdu",
  "key38": "2GaqJ7KNZPA4hoiVZVqmY5bfq2Xe3LQ1C6QdX5M2FBXhRfuAfgFSKbbcpQQetg5UzausmVctUEXJdGD5eZjii7x3",
  "key39": "3WxStDSZtdUPyxDLzHZxjZXK8SADEZWSfYxNYum5xkucRoWNFccHMdN1ZahhUuJdL6G6Q6Jj7cCU4PkeZJE74fAm",
  "key40": "5C8BSpWevxgeiaQjyqWdzsEcgiQ5iuCNYbGUHEkGrcZkeLLvHVCx5hkDuC7BFfuV46sz1fwe59ViaaBUVxo9Chd",
  "key41": "4M5M3Akp7ns6869e6tfFLarutpYt5PTofj7Unegbw6rZQknUcZTwCk9hTiKviTymHiHJkebmzaBpMiQENVXwFmj3",
  "key42": "3emXHc4xfwAg4abr9RbmD2FaciGemgK5gbq6ygnZoaMFPYQt7zQKMiVt95s9VNz7o4h8NxFvGDNEAL7dQw5JzYcT",
  "key43": "2hxawrdyAEaf31rxSpmJdAeV5ej7Y6YhTdKZPTUEvUM3ksp3X6Q3pj6bFpukhQA69XFYBvN6REVSbQNQAMzymTMv",
  "key44": "3tbZtcYAKM7njJ9GtE6faBNJtLBqsE3aBFUKkxhMWqFBg61sNYyPJt4T4AQKPHphiDqMfU3F1ZyZYLjiCH9JQVCa"
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
