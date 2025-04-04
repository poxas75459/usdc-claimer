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
    "4Gkv4syLP5aAvz83M3aBTqhhqyhYCUyPC47kQy49TBnd1WAQzbeZFt6RgGiCyJLCuAHc22BQdNx6yeV7Tn8WF6Mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12xcdbPbQYEuHzmpaswHbDzXZ5ZxRHcgUSxedNVGrc8rqj5GrrJ2HENQVgdeWjj4riYsx2iZTDgjjiHRzfXbStR",
  "key1": "3rF9p72JrcTBVcFc8iGcY621etH2yDpsEMvHaJXtADqggpDncbbdSJwpfqpF9yLbHnp9UBF8gGUFPfy4swEnLtGa",
  "key2": "3kPi364r51dGKcRZoiWgru4ubnpumjWDHywXULZvbNBK68CfWovWkPJfrY6T5gfB3MqHatBxmUD6oF6WdCpd7rph",
  "key3": "BEJnsC9iNJNHxrX8msmXQEDiLP1zKkaZeP3grw7rZ2pWtCNsGhaQgw3uU4TD18ww9BN89M8QgqDR65FA9j19CYo",
  "key4": "5UtJzMw4fi5YaVaYbkthwZepeHKUbH1KcTh6VxTScekTrugm44qxCKZ468sNj9ZEeEiVu3ew1ZjekH9ZcNteFBbW",
  "key5": "4TL74BerxoRESCfXdPnGjDwnmjpRBhChfph4FLAUUHuez9UBcWR799j2VbRXSb8nJ6fnjgk7L1RPKsYf5aTYokRg",
  "key6": "pYbiQHduNXkPvkkqfD2wTyHfJhJpAJBvTGbY1LpFC5zkLEDQM3ttMZT14nNj1VdzW11cnWyiB5UVWYT5WguZjGU",
  "key7": "3fmgmxauk2j5CaFQf6HpjY3SAtLKTJmaswnRpKVjJubeewNt9zhL6wNiwB3rXtu1QV1FvduoW4PFkKKKmR5Rtxwi",
  "key8": "3modnVttpEFpaiozZsYjAgkJKMLFuWUNdEDJtoqKrSQH42Z6RaNTK3PLKJzdr7WpXSARXyhgmrJcLWss9fxXikU7",
  "key9": "2uvB48mHFecAZCvb24tz1cXQ9fVn6VoSwoJxt6rybRdCxoLzxekD7MMRD2f564AKyLbLXpL7XFbKtfyeLkcaEqC8",
  "key10": "4fMtkzyCH24FctcxvzWuLCEzDPKoJ8jP3UF1iaPKSGtx1MU33VmU96xzpaLcSgTNGKL2jG1A411mTKoFecCkK3Gj",
  "key11": "3ZhArZuXNwqK4yJhxDu4NA5Vh1EyjJvbr5VGCW6dj8q9pJMKbvyLGmGVx4omVHgVGdiNWzSn6okEayNbiF6jBZt2",
  "key12": "5aWvxXyZQSYbJP9jpGF3GWhMuU52Ct6TsNy5Fv6qUJ1XdwA6tc3j6mDaHHRL1ht46iGG4MxKgQJBbqAfaVFDsQ9k",
  "key13": "5wcwbmRyAuNeYPh8g5r5vdrvnwcewVWETAXUzrxdgdggX2ySMUFYUqK2LZFxZnb9s3fgKmpUuTUshb16qrq5fHNv",
  "key14": "3jCtdGNMJWpXev8fAxadoJuvYepcCygoTRrYsZKZBZViy7VrbyFmKTBagzswJUxeGNmM5iYVMHghNLk1kkpiGePK",
  "key15": "2G9iuxk6inwKiZQt3Tt4PTgqfro6Ftf6PwbgN212mzmxDzsxuxkWi4zWLAqBJbazxzXS78SxgD9Hu9isratFKCZN",
  "key16": "3HRXN4jwWJFVm98cDRhpsy7FjmAnayWe4YqV6ys3LTMukXkiQjRRVzwRy5DksgvVdXeeEK4iKouGmoQUMwRPKXWs",
  "key17": "2bKNyaH6ayzJ8Ti4oc47Aaj4iHSG878cR1N7mfnbqmuWtUjwKSnyypWeoKw6mJe6Q3BQbi8RCk8JmRqpVNoQbiPc",
  "key18": "2j7ksQxQEwdJnvs8imvFGyKD3eVDdN29V9puT1cafUMp5qyYbj5zZPrrqTwbmct2hi5YiUiWSURbKJGkLW2AUrpg",
  "key19": "jYhaeWy8eu7R1SbFVDsqixHkZsLX516BwpDWj3yepcXH6L9ENj6vxy6QUb54a3JnAveysiQAwvXQr7sBETTJ3T7",
  "key20": "4J4w1RbRm74w9wPB79rmMWBUqCyvCZhuox89TZ6myq9G6TYh6vA6dVoCPKqVQmSmiAjeWU61PfzarH7jtLH8emGx",
  "key21": "3m8xWVddbMvUY7aALexGeb4evDpszXRd84ENARtLimDkCwCsH6vWALagkNFyai9m7vMAEzjaJKeiswMJ6UJNePno",
  "key22": "tpqBTMeJp9xAQZrPaSH1H29XAa3nPDSyZGuUJACEUwcPRZCo3MbGZY7ruUvmEQ4nnYxghnTwg3dVkKL7ksA5USQ",
  "key23": "2PsVUvoBniChR4e6dyWS5cgUG526jiqYGXJz6cPa3oVdE2sHrqDS6Rj1zV17YcrH7Mtoon8Vq5HZ2JETyoxMdiuV",
  "key24": "tYtVHj44aPDtNntEveUB4Mqw1LyJQyAwzQPZ2xcgm4Dry9Jqgvg4XWsXDw7yqxM7w5Pdt6sVYRzAX3eZEY3ndtA",
  "key25": "2ZuNhEYsfLJL7mPBttHr7Gqyufr3einAaxCZMSqSMPhZj7G5MQiFudemhN1dzhqVHqs5sGmJX5g9T3W2pERHSb94",
  "key26": "2WdTRtmnnyfRYmrRD4J9HUtS3C2oWczLtPH84Hpi4q6zGbEhG7F8zigHtTK6B5BV74NXR3qBMPkLD2GkhMUykpZ6",
  "key27": "3bQMSiEovUczYmFsy9oKcPNH75Wkr1Ncp9Vp5hxY8fxmtKh5B5DFZUA8x7zUvfcrKPFgNezmBtmU86D9UJixNU1n",
  "key28": "3V94raDRuJKekUjDSxkjgEU3fuprMB6jr62ZQv7fdy4GP7eVR8iPwQQpEiiY8bksyL1AdwPusLKsrk865o1bsuD4",
  "key29": "3CeCCFdGPXnTXHHqyvhYSjM9dZvduEFV9X3mMv5AY2qQ3cd89Wj29nq45fd4dnUsZqwE87uvfLm3BWTTh5DQwboP",
  "key30": "3Y1Za3juiyeWt9hkAJv1tC1syC7gGJhWt3EJ5qhoFtrbb5GumpMmqjdesN3UjWtEm4rQUErEANJbVVhr6usb93Yr",
  "key31": "X9SZth1AWoq8SEEMbApquwJVv76zeGirnayYLR84qm1Ga4TU9QCJMwHGuxeg4xiy8KK4WMvXqFUXBQgNxGNNWz9",
  "key32": "53PFbvA7FNsWXT9hgHABP2awfVQyW241n6FyTLdwuXeFGcWwNQDYRVAcd1kKSWRjV4gXmSdSsfc6o3YZP4ox8qCd",
  "key33": "3RAA8GhWrW7uDmaLd6J1zmG5byX3K7xvYvkSF2D5erMm6SXtsquyEHtP4ifNZSB9e3o3RHY1P7eL8mt4tQq3Sib9",
  "key34": "hg8VV5jW4RKmek56um5HP2rPyenAfetFpnKeFKhRKvHgn1mFcUhTJ3x92V2AN2dB7voAWuZD8VCvrhoxHJ6EV96",
  "key35": "4AEMC73oxgxegiWR9ByB7spCJsEsGvipu6wBkkqkEGtouSSCkr7MnMRD5LAzZ8U8iYZLo31qm5UpAras7kiyGSHM",
  "key36": "5acQifPX1f8ZWUG5DY4d7uzvBcvoNWALJQUedodHJumk5imCyq7a1KXxCJYGZWKk4NvmNnAeZGAw9dzh9C4833HE",
  "key37": "k5RVfmbhZBeXVhjxTAYdub1CjUfM9sLysFPwABThiRn4Bc5NmE7Jd2nZjQKUnHSt6STZSCFDQGTRnotKha5Wmat"
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
