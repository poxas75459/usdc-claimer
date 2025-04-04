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
    "35pgbHpngwXhQvkPb8HVaUCYfwS7oX6yx5nT9WMLB8cmQKpgndVogrV8yNEJpoKdfhCTNZVaLvYeeusdr3gKWhUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ASwvw1UhHQ2w5fNyphkaJry4F8GPJeSYTVYqUZxXC9b3rQ5jmxsBuSCa7kG5aDH34M7ajNriDUhHdhfAiACgwhA",
  "key1": "5ZvWYnqgFQvkwXK9vvN5m2PMNGDo7n4BfbQg8pJ8Wtronj8AfkGaEiviGMekwFNU4DfoMieksnEwTZbDbbXrjqAJ",
  "key2": "4MNRraMfLAnWtFA9ekXrzQ923cbnm5AAMa9x238qmwWQnXTTphxGGnCErHDUF14R5yqtbTogxYeXQ4jY899Z2oB1",
  "key3": "8i2gMFf21wFRjmxzBnzC1xKkZmkhhTffwRRGNSxrkEbiu1c7k2V6up7Yc3xChrKUBYZSPXQFgCJCgXMCtA4Vdu2",
  "key4": "qQALwKbUbJDjTMjok36Gt6nqpsCakJLAGu3zRfGtgCtz8bZBUohkrPScm3guqkR1HLGfZQePnvdbB8wxu2Mauy2",
  "key5": "3tLvbjCky8Wk6XxPtaqXWBQgNKsEsjHsGEP9hy7bLbuKE864b56FjoPvNo9AfaZxLhBCYMppsVSg416raHp1qFvQ",
  "key6": "5ouNM74NQvTzqyJ7NKFaURHajgUjUTeRm4WPEpB2fEQ2Yt7KaJbvJ8KnEtYY3Ldak7yj8EypNGYY6P9j15tGTcbN",
  "key7": "61SdT2L4q7z9vqgyFjWjnebWnQQiKLe1bb2hFqfA4b3H3KSmH9P5vmhFRspgjFJCyjh3MLgVScFfyWiwCxsqaL8A",
  "key8": "4BFdPW6Xw6wf9QR8KnxdUgDcKzqh7Fmng7MPhFSEJbUx3JKGDUVbjMbwib6YRJhtJEL3xnjsx5f6Nc9sCwjmLPYr",
  "key9": "zeQsnzzujDFVBcNd7MSvtxmBACrqUG3VEXgjDHrjRoeFygk3K1NtZn9bV7MjeNtfqh7kYhSGE3ur5gnjWG2f1AS",
  "key10": "2MspkoGh5yBaKNCV3Y8rtx3WUUiebzeYhoFK7xUM4tKs77Q4JqzezDb5cvz29EhhqiUvVZLQgN8YUKaZNjwJ1MP7",
  "key11": "4AxCVvG7gyDmV4WWYoJd6AGAvqNwN9w7dehXJL5y86tRC7K4RFW1TkHgZ4erxfebReFsM23yUN6SP8jp2Ar6SSU6",
  "key12": "2DA7ZXcs12CsMYDGeCfyVr7SmiF386W55YqhqDiDrUao1YB8iN6AcSNyNwxbSuk8L9oqCgn1TcFBpN2fncCg7b6h",
  "key13": "43T6unnPjyZnHqfWivuv3etGwXk8vKaKzfWTmrkVPuva8vruh4Msodiaz3pdp61MsuSrR6AvtxSXBkbFhgQWr5nh",
  "key14": "uxX64BxLfkYTBkCg5MmXBQ6w57hFm2AZ3WS8LibUQbxuqwLHDL545xvXD3ricsR5fMoc2oZoWryZ17HEWRFccQo",
  "key15": "3Hn94JL4x5ZyWhPWBiDPmv9X9nFUWmxxEqS3an4MqLphLyAmpbgAygqZqzdFqe4reFmDUY9sHgZnQucbZQxpw3cn",
  "key16": "2NaZ3E26hGD2UJMzTwdxYfwCGYiUnaZX7J4MBECpm1KAAifb34mEHMZ2RmqBjSqzuT8HBkTDoVjMkArumcnh7yjF",
  "key17": "4KqXktTM49Rav4vfi6UC9HkTfQbPBzRkt4N8DPy6ksMwnCGwCMEydvsYWYv3y5VRcQKm698KcVJqcrxNSDpHSfNX",
  "key18": "3q34CEPids8S21QUoEHPcMFMtncT2MxcZaWTLyyBPyuunJYTkJppa8MmDWxxAd5XdSbwqQpMdZ62Z3WcpbTUd45K",
  "key19": "5Q3EhCfNVwn5KK1uR2cxM2rBmSrbvZZnvtCowpEnYXRXNYG3ymQBam46udBkxeWMb34MXCYGked5HLovxpq74Uu9",
  "key20": "3jjX4oMnH39Gz5zabGkjQwkryRkJKCthNzBWzh12B1NnXdUsum7jKtXMo9hnfhEha8LxQEJ4YL8xMNEhESXZoMqm",
  "key21": "3pQc4wHxyoNbyioM1VjaJujRpaHQ57oYAVhrzkZMMdr5zS6VPxsjYUATFZQXMY4Yxar8DJFQ2gF5ccTRBfXAsqDJ",
  "key22": "2938jm6qLNrG27s8ESkfJQXBR6uCb7zz3xeU1LaUSWPouuBEWd5pXYzjRxa1KTY8PLgiHPJH168Vs6UdvM81y6SB",
  "key23": "4dkRXfBZ5k5Had5KxPjo8d8m9BZ953BFJ8WEfWJ3UXwyJB24jQwcdrARBBjzVug62NiNeSG3xkiRepiiWUwoi6io",
  "key24": "35ZmtUNzn1gPKrZPfaRxaEftPgvf5xC5AJAjfujAcSwA9yUhhLaW3eAgDDmz741otM3aQK3qYfnyidtuuZfMjrf9",
  "key25": "28XbmD6YyLksYW78CKqpGWqrpRuGaY1W5ehuf9QYqVuans6VSh9iZCvu6dFjKm3Gk7oHqSfYYmZUN334tiR72Ukr",
  "key26": "2ZNsTfr18C6Riwp9Gqg92Mbq7HUDDBJZ4aRKBPyYUgYHqVkN1r7RwvfxKrYFcHWTk4Lkk11qPnfG5b5iZ9Bzn5U6",
  "key27": "2T1s89CPKRvvTWr2sHEQhpZMzVwJgCKFfVDSnpd1sKHb9fVjxczXt8Xh1qDEpB3aSMVwmBfuP65tt9nnuYFCZuWR",
  "key28": "edRHczX8M3cVkkDs6mMTjhi55pbNGnNSMgGTnvgQfWwk2bgEYzHc88ws6DoN53G8awnL6xwDjYrAR26FPEDpJb8",
  "key29": "5CXBFehAEkecKGPDC8AttTFsX7M3R3RA3v6EqNDskX4rckTrnW1STpxq43sq6YuqnkUk4yojJRzHHDrSNq7Zzgem"
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
