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
    "5W9j9c1nSyT6b9mRcUpym7FBZHkxPb16ZrnP6XpLCMwy7ESXfrdPj9k6HBUNct8oxiq5YPGcWrD59b2kyQuLRyih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iHpcFUd6iyeVJsYGPevVCxk7gUR63zmsbNycJnze9HmizhUU9LoxnR6JnVpFUWHrdHc6fQVeZRAn8PD4zY8Koo8",
  "key1": "6XGqryfKetU7KgmDehUyerd3YmhVf4xKeAAgvuXwV8sMzhN9emRbwsvpnyE6qwquJfHjANse6HMaLFEvEbzDYp1",
  "key2": "33h2eMdQCiBRQYpP4WgNSfjEgutQmnrLVVAYYcJu8kGhUxrfCPEpeNefjUBorDbsJLfjkX3kMPzuXxstrfYgAAua",
  "key3": "5i3o6oCvPpibDbhJmfv8MQro7CHaJ3YPqq6jFPEJDgJsFLHTx459SpdmVYGQ6EDBowAuwt4WMWrWKbsGc76Vyjyj",
  "key4": "FyAoj5dQToSAaCdDK3GcrDrDyYjRfPX1ue88UTcCKsx8zcMbPxC11DaZkJ6BP5YR3GJpykkBvCfKc6B7iyCnvUD",
  "key5": "358vEjow1Umt8YW9LV3VwhQ7H7S4ufggk3bJwJpg1tjK1VhDemiAFNidyKTqFp9HFNY2aVsd5GeMNgvfwdTrTBsi",
  "key6": "5kaJFeJ95cKRcq2XxjGuins9t3oFY5brcXJyoxykUMo2x8T4h4tPF8k99mhF7TDaJbb89ohfejiP7Ae2t7RGMPtB",
  "key7": "4bKUy1t2vC3Ro24Cv4xRPQZ3yr4qCJGjUoTpQTEvwYeu5fa12VErPthKAL7yXZgixBFWvEEX3VbaoXZ6SpspwybC",
  "key8": "4eghLqPSwwK289fD433kRSGPZCcpCpWtU1Cco71zkafQbUBK5eWHtV2yhcCryUCmmqa4idkghNNoLd3ELkKtrT3Z",
  "key9": "3LShwjsFtr4Yh3ao7vDqbhm4YA55FBNWA7Gmevu96afpvDUgr1fy6mZXJQFwZVoVjs2uamYQmYP2M6Lu1n7gSS9f",
  "key10": "4NPTJyibkmH5azzppKveREwEs5z7QrPJFpSTCwMM49QUsFUqTjGbQPkvLbw1HXRkDnzqP3rVCZNd3EJKggSCaixm",
  "key11": "3zjuQ5qo7c3iot9D98mmkyGR5bDf3ov9vk4fyEJZnTtjh66JXtrKxNa373piNMUVp9uSu9TLB4X1JPJPEUXuwDiG",
  "key12": "4o27tjZqWg9ALFNRmrnjBx4rLnxsyd8vZPWiC3V7AnhucqkjuG8YoDWzVEnirbsC2keHiYjTNd7rkUUhaqfVETYU",
  "key13": "2Zrw5StgnHmMfQ5hVPC82m5xHpjUJRtpzDkH8b6tteWXkEc3RDxgxqVWEay2HJjwY2jmNJDbvT5f6weZ25oZYRjT",
  "key14": "5KGEMogGLMLYBa6S2HH7ZGPBiqEmVTSeVKyussJYWjT6rcJyCToH4xSxJL4J87GACfRN1Pk1C8kDEyqaEKuocVT1",
  "key15": "2F4dfnW8ZiLznNLUQp7EY4DA96zs2trnJ6NQXXpZvekvMBX6cykQ4GUVZ6zYyH3fekP9uSypSHjaSS9PT3jY9TW7",
  "key16": "5LyaNcGeib2NK55xZQTHz5nqSs6Ci7sdxTM73hN87zBGWh1BJVEzGZWebt9naVN5xpHUmLp7Rbtzbd1ES2FUwfp2",
  "key17": "yNpBGWZtCL8JPNkFg8TzaXV4wGMUubxxPCq1jL9j3BE3KCfpMQaiQJAEf83HumUFLrNDNnPPaZx1B7LKp3kt9XR",
  "key18": "4q9TMTzyoajRY13XvSKpZfFcLe6PkQsoGbspDEGdCqUC32yVjz3JtpoL6A6VDaacFJr83ykY8bgg3ES3BLiHEQ2W",
  "key19": "3bfS8LooUqSLhgfjnDQ6SnhEeU4Pkae2WiLD8fav4CRrbLdLw7BLiCwVFFgsYzDXsKc9Eh7diCdd4oK8qU34XFdm",
  "key20": "PjN2eY8DXDA4UjxMtNsTHWt685Dr8J7c3RudktWfygGD4RFTTGJe8SgV5Et7reptpaneEG7aEY8xVzTQLrBvM8H",
  "key21": "3UV2Twe3r1vUgVJ2XZst78X57ADDwxcUgtMF1LY1Y4fAF5p7CzPLjwGvhNUZzLixZAZ43nhGUHm2JtZi4wEHABB6",
  "key22": "2FpeeYKMdyTWhd2RHMbeoySD7trAn8pJ6FUVMtGqBy2EjyvpEJZSbhkEHkn7HHxveUdxDcYXqttFoWvnKt98hqeU",
  "key23": "3gypRvUGyoNCtyFckZP2Gm8vF6KafqBqtNFMG3ZWwgj1Q1Z2TCWzk2WDAxVd3TVZRXaK2hScQqdSbypTnEgQxLz5",
  "key24": "v8SnfBS6TCyLpduqMx6bav6KummsiAymXU7nYjzjoQ4wDZVcBV1LsFgegro8nockoxR96W2PAfq3T6ikMao8n8Y",
  "key25": "rCckg17ypN1cSa7Lxrb3tXhpqPppf9axigEW8rZnnGjznwNaT9uRbSyepMaR1NvZtZbjZJUobyEbozvV2ZZzkU4",
  "key26": "4gTkbvYmsNf8u1iB7koJsp21895tytJL1qa7EFJfPjuQ37AWHGGCSuAeTtp5GPGNiLsMwjsDvV3WqzQ84MfLXVmU",
  "key27": "4RNJVt6QuBvn4VnXx8nRXFQhtbCq8a1FHKfyy8UrNQiP6pzqZdoXU4WAqAdScKAGCZFHK7si5xBcF79GUJrcuvs1"
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
