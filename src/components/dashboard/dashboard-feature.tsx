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
    "3Noy7LfQjyPpdXxVMyXJxPCb2R8Wmk1GXS5bvCBshKpq6ykNrpAgNy6vRUm69PrGXixbjAkTZriKDNmhqToukmxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wEGLxG6LCbTKzBRV9ucYms4ddv9khjCkRCoj44d1QpF8vpprzYft77KggQcVcQw1WkwvP48Kc4fYVBzWrSL9ZR4",
  "key1": "2SyJgLjp6nySFAv9ecbpuMPK4RNQP61BRuQVUL1pe2WETA2guAExohaW5wG1B6b8MukbWkic2EG14JdVJbCXSc5k",
  "key2": "wpTJNmxAzvx7heamuZJoybRwUTpvMy9jWRkSbFS6rqYxuArxovFHmZkf5EHGELKDz1bqR8bZ2WDWu7xTQgSGN6o",
  "key3": "3HThsFFLgtqzC9kwC8qaRwXJ7xHXXE88ucxE7QWQrDNGqz3qt3qH6mBpfuF5fRBbHshFCwEuf77Uk1zpeUUUB3L7",
  "key4": "Gef66Vmgo8Keaaxr9j236YRQFx1iboLtT3xjGR5q6ZWM99vguWBUpCJQyaiH8dBayZWEcGw5z8CdLS8tXg9bFFW",
  "key5": "2xfZmeg9J7rR9fAEJxWFDDLmMxGBJZ3ZQggtkz7scoDgN3kgD8LReWMpAKv5u3xts5ftxT1VWPVoW5MdmvGmNpBX",
  "key6": "Ue68GpAB9dV9Z5KYKDCWWQRCchK8dT5Ek7nkz3TpWy4z1DGMjhNEzNZBivFpg6KsAz8kKs7p6mY1wGjrkHMkLMx",
  "key7": "5MVJYwTzcmq86FiBGA3khqfqy2GXMj6iYNFW77G9LTL4tqggXudWnpfyqJZRLXmHegHTvCspPsJzFRWuv1K9KgDx",
  "key8": "2CJSrX3qudtSQv33gbbWX1mEvJ6TYtHyqGYWbYQA72bCbUvMDJnNBvhQNdhGGv5eanCqUqaEf4ABBeT2epi4dzLH",
  "key9": "v8FcaAEqRSk5VTTXpTmMQe6G4P8dPZeVBUMfaosoDWSZXak9nHhxihxQGVPpHe1Gd6n2b2PSt7qu9PjdtBRDypF",
  "key10": "2YtCcMkcyQFx6jRriYUQx5VGKo3MkgTsUfLa8k6FZiUh33VwdnNkzFNtxdzDVgQNGKXYXVDahfwLjGZRkHi2f6ht",
  "key11": "5mJfJ5JDQJms5mqvaJr27P3xKMrMxVyv3btxVxJvyXqEfwveGjJoMfmeCjqFUqqzzQ8uAxqWYMdJeNpaiMG2SWtK",
  "key12": "2x4BJPvJk8GoMu5iHVBKiox5TSmKVNMgPoWefphtyxv761KjY9BLtAzdvMm75qqYYtUUJunMXyEVexxwMnJDvquk",
  "key13": "48Myxa6VjWHWvotdo6ptrgids9NPHuT3TWy1vCXvQNTFy5AscmiwaMgGxNAnVaNPyeCKF4ieDtYri2YzyP87YBai",
  "key14": "2uYgXFBM6bPySuAyk7uJ4s515HnHmPRPbEj8AoQpnq9tWJnwYhNRq33c4mRtHagAV5dXWKqTifZ3Ex3GPKnAj7KX",
  "key15": "K1vsHwmSR4HVGubRDhcRAezNMYz7iRwhhVkQnMBhkVU4E1je6m6vqSPXyJZHfiEkpUTCfWWTZG9Us5kaGeRF2tH",
  "key16": "2mYcSfw4xHJhv1NCwpVeRZcQzqS9GGR4K3tD79o79j5DrvkmaRkRzJdpocxYZgwfNxv4oLEhYArn1x5Jjnf2icSC",
  "key17": "4Ztg9uXxShhiLRjA47qZdiAcDziCh4XdqjpaApBQUkAuZdvHKXvTwjtciizXaKvKFRnsCxbCuJVM3FNGa19KFmH7",
  "key18": "C8FJL32uqLkDFtKoHJVfxjCSBErL2YzMcMVLTHR6VPUd3nu6SRnfKnDkobpNvw78zkyRizrgeVvBMDq2jWj1kak",
  "key19": "2eLTfvBd3fcxVbHKRnPgVnJmAigkvYTZADfEesLMmj4CvLYSpJKUNoGxA1trNh2hdgRoawWcpLo3M8RySLAxNrkZ",
  "key20": "5KB2Czs912LwmE8brwrLP58F3XZ1R7hT1oJejsrp6uJQYWj8jsi78yFTPYrPVDyVmGBLDBwpFYjESTj5ZxH8PjyZ",
  "key21": "4DwHeBayTBshihvwjPoXKvNUJMXz4HcfjxBS69TXn7DNq6KBWvQS4NRJtGEkSh1x7BsVjywwE2cxvpksEGFruznd",
  "key22": "4oqETfNCNQSwtf8NXQRk7C8MLSW6Lm8nqa1z29i3YgyaVT3Q4tGoDMB89PkodCYJyEk6qdUkxmrn4P7gqoVacHtm",
  "key23": "4U8FSPyLUiTTaYRMiQULPHLZ4i7fBYMDEBJpWzbfipdxtAt5gmge4ddFgC6TDUWeMd1e8NFEEUFT6Xm1yZ8aPWVx",
  "key24": "2unuzs2BpqxB4KsKeDpcoXUKuMte4g5jdRKzxboaw1gXWT7zzBJiZwjDeakNMqVnxnRaT13zAT6NBUGq77Y5M4E5",
  "key25": "2a4jnF3D8QCx1R9QV2F144R63kTWLtYC7GZmnJbNkEnTCGe7PLcj8u3GS2evkT7iMSKBS8bmBUwvaGh2vYX61Yjr",
  "key26": "3v85WzUDLTV9jNUH7XhK5GhQRFcTWp6hb9HFwGgTAE9rDQYTyVeECKmK1GDSm2xpSLrsVqokVFtojFm4d1xbtWXb",
  "key27": "36hhfVmUJGpG19UnW2fobBQWgEKmFSnfyaUEKZxHUL3EnuD9JNuwzFQdY55BipsNaddS52X5JMYPWNNUH5EtL3yX",
  "key28": "msYrc4NzB3sPFruczKw3dR2Wq576JgCrT7jLxQmjgCsVYnMjpStCowBqhmyhqW7M5xLhCEovyj8Cy6g77P1r63a",
  "key29": "5Uoap1LMRwSrSrHTDe8WgQdKYUsDmyBug1Jkdwv2exwVaj9XWHJf9VxuCbHeJGeoEHViysVUCJxNtVTf3ZZP6gYS",
  "key30": "2LbNgSoZT5KY2j36FhB2mCaiTTASWdbiw3tz6yWFckDyxprMyt8E47Hpdpdy3r8GCFbmAPg17qzc8cvY9cY7CdGD",
  "key31": "2fV5RijpfvU6RJRsTHinqppGdJwuU31ykjKUbNWUUDppktubadua9atyx6hEvKwvWMhzzXEQd37YbEMPuhHVvfUB",
  "key32": "3Y3JojZrkk41zEicktEZCkvwmdjLsbT9kxx6HM94bxL759ae9q1ed2m1BZMbkqELxgMDVaByR4MbmiMymsRj9v1b",
  "key33": "3ksMoV3Z63sg1B5nBk7UA9Uk5JddHkhAHD9FGWNbtqc4v7pz5pMQFuzqoxV398NNqkDNxMyUB5BxWFWULSCp2zCh",
  "key34": "5a5tRwzSrTMLcEnymngTg5jR7crVRti1Av9hhVpSFWXzHHbYZCUPkfsm3FyWPuBBbzBt5bMKwgjRG91MD1D4Arb6",
  "key35": "3MJ775Pb8kxumM5oZMm6RkC4BFZQcJuKkMsZSFRHNaWs3AyEuENKtzBFWgYoreahMQd2cM9AoHTLqHykayNKCJyd",
  "key36": "3xgDCGG833iPzAFkskxePVYritd9sTCQS19erGRyJa9YGveVmLQrWK2sfwctUakm6NNHNzkPm91mVFFpLi4quhgB",
  "key37": "64iXbpUnh6EXmMFUGDUVhxYxKkP1v8yTLtcrBqKiFMcSmuSGRvCfn4pzzXwKopeJcCSrkv1ayXwJ2fBfs3czQtTA"
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
