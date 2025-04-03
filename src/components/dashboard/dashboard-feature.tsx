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
    "S1iMJuBqc6wTrFFu6UE1gUeX5c3D4yQre9Pnz1Mzg2EoZ3XhEHx4crtdnrGMcxZAfAEUt8PS6F49oZj2FJNbaqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WLk94kpSrZD1XTFU8CLY9BTcqCX9yxERRwf2QRioVSPczk8DCQ8rirGczgumTa8H4eJKf1GBZbHEoB6waTjtZoo",
  "key1": "4p7eXdGKBjV9uGFTMhLeL2F5kDRws7myShyu6TCAAZm52JySpZKWtt1G7nNSFyExFtmJ93zkwNGjNyKcnnaEKgfP",
  "key2": "zcgZg5N3ECTqe3fZ8SQk9qTHUSUka2Ze4dgaZDY8HyE4Y4LnoU411ntLUqocJLe6jMoViST7PUJzjwNRkaRk5R2",
  "key3": "3fjrwezBURU3zUe5nB9eCRrbRtLbtX3hgUvRCXmBPyD3oknEFMyJDCSVJKfC3BLAMQWyRB4xYQcXDBcvrruDoLzR",
  "key4": "25JMBMN1Ymf3gy9ai8pP7icH3t5s4zGwj52am2JZhcKbucFtSMkGEwvvecwvJVP8WsuduTrXuJ7MZMsEYexZzztt",
  "key5": "5ZaftZQAnovRTz3NUMLFzmddwuy3XT6FKunjP37PV7gt2L8hqLmzVHK1wsoP7rDQzmc4KB8R8Mne9n3kyjqge1Rx",
  "key6": "5TJjMRobmGeubcyHJKwRU5jJo52z3H5ozpQHHhiGDEZrssUWDuRyLL3LZBKqU1xNfxnvj2MKAnSjPxACxq8phH5",
  "key7": "mUbLjBdJDPpB9R2bdWiFS5ecfPf1vAT6Pi5GzAwe8s5EUqd1DfHgoikEdrWdUNsu1hNGKq321CD81tY7Agft7qP",
  "key8": "2DQV5PVDK9TnfAvpMQZtLtiq4Gfw2FsSQUJpQTCqDtht2g1dQfV7LEQUCNnxjf8m2zjbg27zVT9ubfJpVpPReXDy",
  "key9": "rF3wUBy8WVXv71bANcinrfnyuFpQXD8ErX5iJ2JM5dK2DQS9Vz7aaNBefrh5sRfgS8Nhe7fnEeUYxaZbAAnDG4G",
  "key10": "43fgPYWEHw2VCAGQ6h42W9XdV8K6e8uMNnZPArwcYFSy6qNxJLTKawANmaZGRFjSSA2pAkFq4Y2UrzJ7iAEVoqbL",
  "key11": "2jdiEYLq7iUvHP2A9j4u1L9wrQpvWxsMHHNTdbzFccfLvjqXkCnfsJUbVMkKmQY2fww9XiXPwzzqnkHuNAWTk8pp",
  "key12": "42dHyCBovc2VL82ExA9snveBMvPQinkh44cQ4gkmox8BY7FsGy8J5AFSkkA5kHBB7w67Mp18brtJEoe4uaSD76fn",
  "key13": "4Buy9mQh5RRGoEZLWBc1EYP3G5dbfao69pshZGS2FoeXfPtU7DK9p1biUs5JZtKkLvXrZjRXfey3d6yxVRcVKLB2",
  "key14": "5z97uKacQHSs4pAcWuYuuGc957G4j5n7TXqupu8eXdRpLvFJKfpdJgtUanRXoAA17JiDvRkCgTfrFC44EKnEqGyX",
  "key15": "3AcRMKumB5iii8XgLyJ9YrbFhgbWM86XpwWFYnQak8VqUEhCBC11CRCmgwxSAa7ZbcyyFMirDxVfCL8nvom9hiuq",
  "key16": "4UCTUrzG23SXez36XvgozKzHaja1xGFfYVBQC7kpwAPayN4qeadwXRJmDoe9NyZKSQup7AYuGBUKPBYYkcwLkMSw",
  "key17": "4WEDWBW8ovsTkUhyhmdK7NZu3Z25uZxZTqhPHEB4gb7y5i3jRWbn9HZxv52857YGbsuTmVZWnDCwZMmsKHhuJFZ5",
  "key18": "428uRDLB8eScpUUG6PFJBo6ymGzsfvFfEaGtYMKy1Eu1QtPJs3V1iXqgSE3uEz1F2WABCTvTFBwJLR37VYfcju75",
  "key19": "4SxfGTY19QjvfrM7aGg5Aam18C5XoJSUvfeVKGb8Lg73vEodQkTV588mAvdbgkezoQXXSMwgLnf6mUFZAzRYd2Vk",
  "key20": "5GDxW9vHBZ5qS6QLfnyPtabPapw8FirN62v18YJcaMAC2KHJ5JkC14tzn8zEFboy1byFcsQH47zBUAhAPbX3hCgD",
  "key21": "4QpVxkenYMuJjwvFHuwF1d5yHPkyvU4Awk49EuUHo75N5nyBq61hrj2xPnTpJg7ugKRSoSVVR6rRVzCdj2xkMAwB",
  "key22": "5z9n4Ck2PqhNTavDrCv9hdPkpMTWwNPdxmDTAi7UzkdeCWa1i2JR4gDHnnrMwx9CVfuHVDJjHKGfZN67FC4pimVR",
  "key23": "55hyWRtyzNaCNxTY3VFAXwbtMXrL3YKHKTnUg5gYz9fxhpkuehMUcuDRNg9YbXsBB5ikNoqKYHqQJGEF5YFydtgd",
  "key24": "4mFDCn8sFqbDEkzQeBBkNkQ4pmeaGTpQxcPSWKGXTapvwhJrsQCtiDkpLgzAUHzTBcmrTnfRPt2ipw7pNjp5WmYd",
  "key25": "3MYxrXupswM7DVuszxaXd25JmGgYXyN7ShDvMJzLbf4ctrshCGYcYPtBrRvm6TnN7U4WHwnwq2ZCT3TiuK2iJhRU",
  "key26": "57Ev3LhKRDLTvdbJKPx49AdPpJhd5KYd9LKe171riA7besn811BHR6w7Dwjfg185wH6QJimegBQvFRyFNLe7BgmJ",
  "key27": "5JiiCRZd6gVKLtioB3JY8WRsQB1zzyBKDKYQ2RpEEST2QJxNEhaXzMwkk8c34Nzai1MdqvLz9buLo59ZqoJSVii6",
  "key28": "5duTaBASdG7DuAdhLZNa71ZeFxEEFH9K2e5Yc5fN94gjffaz1gDVmAev2wAHooTtPo58Bc6AZ1uyP3C9L13YpLUy",
  "key29": "5zaq1Mcr3Vqjaf3dd2WY3AtqQdmq9muW8HhA2YT4KJ6UGQrs4uv5HyxXSTpeMZtQH5JfJSDKdJdmsttgMviVHdsY",
  "key30": "2z96xJErA2rCCZgRXYKwVk79uxcLJqdvabf4QiBfkiNes6DyPhgpaiJXH8oMX4KNPdpPgadDAnVmHEh2WnGM5UVp",
  "key31": "4zCPf51Tm5edyuZQSffnYur9qUwQ3KZ81WHasWYrtLFiaw6RBzR2jCGHzDL95pwSBJWZXxJSrdcAfZpazcWPRTEr",
  "key32": "3eiNBfW8J42fdQbhSizVHNt89Uf4Fhw5UNq9FLYE5gij7BzrMeJUTyrmZzz6iNPXAaKEkH1RUrKCKfahWtwWeeBa",
  "key33": "5HACrDpXcNefS86CaFz5RKBzEu97YUYaqDWaKsQDYgxAuB32mdAL6EsPZYSYNrk584SxDuocs5soTeCvgiatx84T",
  "key34": "587u5SjyDDnksdvQS8TMj2r3NCutUEJQBTsgza3VDqDPo7Zvwvm99S89HGepHRaf1R7HQR4H8ohJZ6J6QxeT71Qt",
  "key35": "3GpMmZrymY51Nj8RsWxFZXtBu6d6JH7X9gBsDsZ7os99WQw7YqzBkgzVYygL64ukeHRABKPUC1N7L15dECniGQb5",
  "key36": "4NHYQYtwSM6ZetXo9ofeAoDWA1jZoJFT8WeXGbLsTRaxCSPQzKymYkCqzKFsY7nLWiR5NScK2NV1xz2y5VZg6pqR",
  "key37": "s8oSMoaCj4A5beUwHmYrcThaTq37a8rkhvAv6nLyB7nkKFN4vKJzjBjz7gH6KfjzW7zz2PBwqNRncuu3Q1onuLp",
  "key38": "3g3L8XETLjFLpgirju1AqfSEG61ejT5MjGrKkkM2Ldp3Zpg7A7aJ6CPMyn42fjogGh4BdQTehbBCg8qwz2PaKRg3",
  "key39": "3TRsNQPQSvRsBkp12bajb5WKF1wGpF7WzccbS4EmwHKRaWZLLxYr8jbFM5Q7hCEV5C4N4k1BpXLymXQLAV7qCPes",
  "key40": "5YocFHJNKeHJRCyHL137HEf5AXVrEBod5EfY9eW2Z95wo5odVR19jQQRJyaNo3hEE2J1yDTQHXzx3KW6qpLhSEQW",
  "key41": "2kk4qxS3NfF9wq9Xx6iiJgKgvxBKX1dNiEnDKubQjmk8EvB4JS1ahthzLrBrGmMYfKKwAfrXhfiHJgCAwpd2ZuDD",
  "key42": "5jCuLipq8wZuqQQNYo1rdYdKC8fGr6q12WuD6uyrYJxbt9771HUaTHJG6MMKUG17fVB47ZqhhfWEX9eZ7z4g6yPy",
  "key43": "6212YxgSJZ4xaitmwBtFQq7umQfBpn9VUPrvRnXH7nXd5YEUVdjp8WEue9st4LDYhs36hZsyQs6zoWPvZVbbfBmx",
  "key44": "5ibeShW5BLLrf4KG5E9rQ3bh7bo9PwJktPkZySZNG4yuKVq36ir71edJT75KKkw8vmLmt6RD4vgarA2qfR12EE2m",
  "key45": "3NtkSPYRTngq8jbZtiND5YVKPssRTpYbdxsPzcbKMPBVX7MyaT9nm3PaxctWcgp4fCN4DcMm1oVkffWhyqzmo66N",
  "key46": "24ZqGstXAXSF4cDYpaUTwyd9AW8qS8zSvg5kWa6u916SKqCuAquwRuTCL1dst9obrgeyqLgCw3hgk2mpgWDoAoZk"
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
