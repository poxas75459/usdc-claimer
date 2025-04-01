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
    "5YhLaLGVTKcqXy7XLv7BCjZYqqtSQTPcZA6Yx9nMF6zKad5yKWJFKNj1eGJBUVpExf8Wp9Yy39uLdf6CJA5bxSaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXzA9vhUbKXT615aHKKULuWKnrfHFMQ4thbPAppeMYs3e3NSZrh6C3QymwnAVPJyAhsTXg5mUJAwraDfGeU7p3G",
  "key1": "59P5PhYfDXPKu6qgg5tTBfvexEuSKC64FaFjeXn9dD5VFWB9mKdrwfajubkMESFKZywtCJABoNEQLueLh7j2aKmq",
  "key2": "45KNGhxCb9vrRaZYSaXrMwvD26vbTw7Vk9nydYdZ3WSPC73ksb4eDYB3iJcioDxJwEPUZst8hKQ5ksF5TivFD75i",
  "key3": "5iJHtXvhNjsA8r2obsaJpmj4dmH9Sfnqetv5BTWmGBeGR9wZhPRU1zM2mDZNsyXybBwGGqTTtzMX743LKmukhSiD",
  "key4": "2KzZtoKpqkTUW4VJjhBkoWEgKyisbeK5Mcy8zomF4QQYVQ7K4PAU5vXAJLsMyhwJUu8WGTtoJAbQonxQnExU8q6v",
  "key5": "46verdkP7Xte9qTFaWzL9cd5BW5SsQ6rebPPG3iLJoaRDcmY2oWVA3zkEVvKH6PJVoz6aeqHg79MaVKF6GrdRKmK",
  "key6": "PtYcKYB5rBJmdwf1YXVnfzZSGess4kZQN3F51n6TCmntbNosjg7NXvhVDHY2YAP9JKckH4AMWTQ6he5po34uwTv",
  "key7": "3qsbfXbT9kGc2zCJKePiAnj2myCm4Pvqws7RD3Eqnf6fnGPsXYys8UKyJmjCtTqx6RnxPZxKA8mNBGRzCfEdgeSA",
  "key8": "38sLJ3SGLsdGtbJF6kZHEoJz1bk3ZXRDSA4mSFnfMf9HhnNVaokhsWjo65ojNxzZ3QL6DtLDEKgFf8bTr3uWYvCQ",
  "key9": "635GptWChuFPr4stUNqprZ9murCY8AN8hZMbGCZGjyuQ3a5csu4AahDCQ2wPJ37JGU9cfmXVmVnq4AwYQyjLWEcS",
  "key10": "5QUyxgmgULpRnvtu1aATNiNKAWHxCTY7VRd1H6XZiyne3dAehtjfeWymnR4MnsVpVJFhbs98Zcz63Q25cJ2jT5HL",
  "key11": "348nbKBptfdAEBxaxXv54wPHJ6Vv2k1eKdA1droTsKXiWUdTt5Tbs11evdTQZySQcYu63hL22dkkmFkJukTRpHpy",
  "key12": "4eyREPn7Nm7VACh63Hn1gyXsmLXXgVfHjCppqirhWjDLbg8vKDhhzK5CTHjKUKhdQ9rSwpGBGY1B76MUG8ybhxYc",
  "key13": "pvgnoRcbPj1kK5wwQ4sN2nkXuPEbcPRLyq3ZXJcZBVVhideCQjWeNmfPA3C8YHXdK5cvCr8Xc2g6iKn5d3MKRga",
  "key14": "4zd3JqqJwmMSckqSe8HeifrGgfyKGV6SmzQFxwtNhwrvkX1D5UsQCmnoqwHx4y7vCjkG99vNagxVSFW9yDhDb2tp",
  "key15": "5Tz4rvdH7choqYWYRBzXLYa4v7EDF2h3T25ihphrs5zBRSjxX3ZvD8RUPj8isV4mwnfRkNfHQgbNgdGffk2qjXd6",
  "key16": "5U2sDAqUxeSFwUqdgYVcoiHFa6ddRFHdQLxWZZfD1QCHsUhBoo7mckq5xk5zpHgLrvCW2jaff3NLxCXk6VXbu9aN",
  "key17": "4emnVMn48uYuJaEkCf4SAmiTrGkX9WmZEJ9Mya7Rvy61V1CkKgwbG6H4GkRcGpMioVtX2F7LyPhYSVjmnbG8Xcxy",
  "key18": "2MgTBNRGvto3gS6FyhRznKrpyBVYuUPJoKkoqLsGdQocfppQDgrYqqxtXSXuNySfCNYZufhqma3a24Qx98D3pmsf",
  "key19": "3wjEnkw2stmNHioiLk3p18KwV3ponTc7rhmtA4UUHS1ujZEBqkDVaZsZwe7PjUPTNae6aqKVHqMsroNGDYQk7Yco",
  "key20": "2ymDB8fQ6skAoDhNPfeWELmVCuKkrWcotHJ5MBd4UbqSG5mQwi7jFLWxLnxNggsRFR1MBHtqhKqYJkXZEBKZe7A5",
  "key21": "46W7pti6xx4kxFCQ8uX3mSrKadMRVi93hDbntntxuSpKPmuRZWryonr5sYzX8WJt1MthNmx41SHFM6hPN6ZmTi8W",
  "key22": "4vYKdorSSn8P2VQcCSFkhaLsBPXumvSks7JL9LxmM1znVjBVzpytd8KJxXmGTdDSea224L7Ce7FAypBtvZigwwtk",
  "key23": "3P9eFc6Hi2mibETgebi9Hqz7MmiRfh7iEopqbH56iZMhxPu1MhYwK2Yf6mVQAEUkUwzJzJ8fSRLpNyabQwmavLaj",
  "key24": "JjbMoqxnxLxXtg1wzs4ZJqt73Lo8cWjTNZsWjMgwckDLoQ197MngF1Qn2tVRB78Eiwwyhyuap89wxh9KjPJwm8M",
  "key25": "4cL57Gao9TetzHY2nWFZUFEvkJexU2efcmsQ12iXpoq9Y4qhHMgT5M97UXeRErKMmKmoVncQLNX3mpHuBoTwq85w",
  "key26": "4GH4fWkgdkATsg8JPCWeH8srR5Lqo9266H9DGrGeXySi7kEmXdnZ8rEKZTSwHdBmKV1i3CxuEPaifq7sabekwxMx",
  "key27": "4CH2V78HuVxNWapo3PhTfXwX5QZfhEJy2EZEcwdZ32RAEnyvYg91fPazkNXGtDM36CFs3cNXSQxa3KnVLEfeGMbF",
  "key28": "XP8YoGJk8CuUGn2EN2BXDFepdm6ygiXq78Hgtij7CdwQz4kwCxpLHb6MwGKFC63jjYZH9JitZoxBTxgbxg4sM2f",
  "key29": "57in1BF6ZrqRue9NXaG7H5zxS6T8JMuWY4LN41mgWb2g88oAZKWHXwn619ud55L1fUF5J4ct2uS9an5uqLJrqgx1",
  "key30": "NmPdm6eW9coZEBChtvBNnHovn4oeypoAGZ1Df4zNqRaq59yqaw9m9jLyGCSPMFqHqV27B9AAxhQj6DaBbez1w1C",
  "key31": "2Y3ieRCWjXHh6DQat6ErojZAcyCAhTueTAaPaDr6sB5LTBAj6kTjHDwL3gYfJCLeMETh64cQ7jGKnAEe4Vahq9GL"
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
