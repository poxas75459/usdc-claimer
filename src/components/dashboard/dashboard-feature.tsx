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
    "5QeKkn8Drof55GGHXRY1WXo4LiJHeUVw55FMmmkdS9jwPKNU8zc6qXj6R2VLq4LR2fzv4wsedfDANdY7KBy2ZUkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VuoEfmTiPgVxrj4gzLyYcpyvtehjng3LXuDjNNSdki6Rc5jLyvBeHsLZ1RsrfYKVfJPKCQeVbCZMeY1brtoWMd8",
  "key1": "4ti4d1p6acgiFDPNZzjxRUKeXiKhYGyXy9236YYKUAcrjUcW6tC4THG6p4T4snxUvHT6GRTPx3WBWBxFMbcMxsNx",
  "key2": "3kzRMK9hSFdSbCQAuEVgCjfaoRpu3nKJZysStq7rsLe2J5rZ7PSt97hHyrYi5Frs7TBmZFGSwEehCUHUw7wT6hD3",
  "key3": "3STQqBGQgDDGXrvPRjwox1t7JFW43FFheQx657ZqoNzVv32XwqGZDJVioVAAXrAhWKc2Sxyc6LuG2eid5dLkd27E",
  "key4": "3Lcbq6Jwb7TWPdgzD8NJY1mvaAeN1d9dS1Fg7FkhPwYRuaTJGsogshCZCxr9sYpeFAYVbfxBRQSTvt5Tt4RUwU6k",
  "key5": "3x2JE1p35KdTajFS5Lqd434xt4xq2NFyjFpcdMgJxXU8R3ET3cdcPGqGf4A6GHaDyRM8rJE7xg8P8TZY1E9moxL",
  "key6": "2JZbjrZZeeE11H2HDGH2opmxuKeQvbL6ZxSb696hpbGFCTFxjVJwHZiN3fJkoeBbiKS6oxCkAu23RMxp1WXy7xj7",
  "key7": "ccyeGcswhUdTq3Yqi6Wh6oysswvP7wPnQWFxXqpbvcCQtSJ2kXGrUmEb6QhRS5gZqcRVpe7KG6L8wChbH8ZFPUV",
  "key8": "4ewxsvswVfdTgT8zLsaEjn4bHUSRid83mDeGUFMQYuQHkZ9DDNub5oQ5Jb8zXs2kq5vbTVTLp6hiZC4hECXDRGzf",
  "key9": "3sAceCbgDMR4E2ERTwzNKjNzeBAdbYws3jPUwcVyfxrVwvqpLhVqpD4hq7kXQZxRN954T9gEUm79VGCvSF24ojrc",
  "key10": "m4ZYnC4NhLmo9djHesRhQC55jVX9fDbYs3FHmPXSNGjidUKvYBh9ScE9XoLB4R6UCFHRpFDD3tQXq2YumCzsjrM",
  "key11": "5bSv9Eig9esQuAuueVBpQgzFZVjiqQ1iuhmgfK7kE8Yf4w4oRWm183QUB6Z2JKJJE1AKPELkDWYt3Lh4R3oQK2ZA",
  "key12": "3dCEQU5mP762sMXNhnjTEQWtqH98v2Wd81R7cXCR1dKBcjk4imX9PtRT7D27w236MPwr6877SpF2YJz8HgowAtCh",
  "key13": "4onDYtHSUv4bAg23i6mPi7zvjXcAJHvd6YFLRx8NsATyjzmfqKd3dR5GCZonuZqwkMgYVwsNydFHw8m2ieLAZjhf",
  "key14": "5MgWscqUhYcC4vVYUw33Ac1hbJ3zW4Vcx4c9inn9PmMwhtMee7N4x1mFi17CQUWPdw3BCFS9Junvkt1KZwRqH18j",
  "key15": "3BjydNw9myvL6Kxc9J9ToQFKnLfqMZWttuiqaaRpAvNQvuP1uZCuc4Jj1BHvGaneMKkb3dyqEUzcs5C1pe9TV3SS",
  "key16": "5uXEgPgkQCcjfqUQiP34j27GVS6MAw6AQeYV3gg6XMNMrxhK4u8N1TNkesWgDX5HnLQuDx3rz7RfBx94RA2wi3sS",
  "key17": "599SbynpF49inqcXPz3JocdsY45fZgepjS8sxDrWNfxENXAkgWqVdRB3MjQWdKcHNYN9sKuv8nF8up3gVWWPtpB5",
  "key18": "29zkMX6gCYdWsb1JuJznKVSeGafBwN8Hsmk4uRNUymBSD9L2uu9zVVmjRAqBm2RtyXbvCgsox9Krtv1vbj1XKnnR",
  "key19": "fBe1SwyiZeS7gEFEVpnkeZukzaDK6gYbTwHLBhjGDDq8twVgZacZkkrd6Pg2ZCdDaMAVfYNrEb2FzWqT7gxtvkN",
  "key20": "5QaXghQmcjSbyTvtDMfJXfLvZ8NPhUDtGQEiWe7x9HGuq6gzSiq7oGwzKW8aDdzoKCSaEbGS8wiZnAgE4GLoKjEY",
  "key21": "pZnnJ5ubu6oAfkBTvs6NvK8Wh2bSyyBE8MrnHjuadiukgR34zGQefBET3yZ9CQ9kvr6FCrRJ4tHn6NvpHdPPTFe",
  "key22": "9NuZwot9LN6Vx1Yo3BN3NKj4vFWV7sKpM2KN9ecA2hBGTZqTELF1djzMWc9PJufeRbkVoXtHVQTTNPc6qFy39FB",
  "key23": "2KF22s3RwoumSqEZugTfV9ohdizp3nM9eHX7jeRVim615DQ8j3sX5iZ4wFJxZ7SNuwVTQZwozBBj2cn4KFbQicvR",
  "key24": "3wdCsKEeNHeGavhX9JJfsKUa9WSdmZJp9obgJ21oVbGjDN6u5jDbqthZtKUTXoz2Fit7U5SQesE1nPWfi2YRCWJg",
  "key25": "5XfJzYMSvnbo33nSYSAyJMqw4UgtpBwb1faBx7Xfqj8gRdeNNtDToCzHiroQKyPjzVUxsKLn6CS2U8qgCoi5BffX",
  "key26": "gFpNpnXwbr52NoTP7XHbiVgVk5ZE1BUhJXBXXpGQR3u8E5oftfKzZ3EnrXTVysuJvjz4yrStifXZsRA9642KaUy",
  "key27": "T8mHUm4s9xJTTtDuX48cWzdsJnabpBwDxPbddJTwtfDx3QVw7vwiQhAjFPSXbmgNfKNoLF26rXybrsNzj7jn8Wq",
  "key28": "fbQnntEpZTAp4vuxtgKVk11VvWkBCjYx8SEoo3T9qECZRp4a3YjEQz4qJMQZ2EkEQbgNKStoGKAD1V2pz4x8w5o",
  "key29": "rPVNwhyCPmNQYhYABWFWYa9QQq6mNn3sVbm9kVDJ49RaW2eDByfKsfEcFBHqjeFSDRYm23b2ZDQDSaeJhh1VVXS",
  "key30": "3Vq4UkQTbw4bGCXcj5Tf5fUZSZoy3EWPMDt23hQ9RtHwncSvDEmXsEdudBmT8WVJkvomzZyyrW6zrxHV4hQ9wee2",
  "key31": "gjuvddYaRNYsp43wbhpYokwPhF7JZjddkjz5LA8k1jqSp755adRc7bdYHZpUqwbejAyf71kN4Sbi8Hno3f2xFAi",
  "key32": "3vAJuKxu2gvfgKtKmPENVnbnNHnxXZKQxjpqvEPrrZ98EivovsfscpL5nPQZ1UNYRCHfExooc8fHuUnhpAM7xcN1",
  "key33": "J7vfLuMPN7kwVdWDWy2AGZbwY3DxtqASgKtjkegboqjYhZJKiRSfD9SV19dh26UShyBNNUb47pt76taGoXS9cSc",
  "key34": "62Xh2NcHgKF6TDB7whyvax3ktqj2bL4aSnEbXXvV4dV13vkBJh9FJscYAPFFXxhcRwKCYJs3E8rXduonhMNrNDCH",
  "key35": "5wLmf8kWiYTUgDX5Yw9nfLtruDEKwq2QW4idXBtVp37JMebE5tMhSaixyBFDkPUVaUdCcyK5rF7FwNG2JY5D52Ak",
  "key36": "3EPKDhgC1TQNdDoCNLL495NyBGqfESHXyeyVaae3f2YrzE2iJMQMJpzX7Sup1bfBLRY3UgSaibamvhpLMErGuNrb",
  "key37": "2vLu3N3bqUFMxaFLpUuDx69kYyeLrdhtSvAadnnDAERbt7qbwd37RbTDob7FzkygjLQgPszEFKcKHvdMC3LPvH4a",
  "key38": "3EKRHzywofMpPifxiNpncJAVhLwxTW5gZWda53XsFQWAb2C2kQWYNy4oLAHrQqdB5PW4Frj91CZ1GzrURd7ojG5Z",
  "key39": "5k3as5VWDSWnw5zb5oU3mXwpG9SB9EUpLxgmp9QQFiNNGam4tgVzbeX1N7nHiWKafhYW2AaLpEfwdjJyXEbY8WoV",
  "key40": "4yDtuWYrTeBUGEke1R9yBaTXxXeL8qM8HAeFXdyzB8hwjbfMw4WdqXRjwZLy8nXFJ5ctQqWp7Vvm7L64RRNwYdwB",
  "key41": "46j3CJrEoadVBPttedWTnLZFDsq5EZDTmCWCShhHNaHCBgZvVAP5hyBi3WAQBqFGXapZadxfxfJBLb6whTz967sf",
  "key42": "5L4r4EM7Mwoy565GoozqisWJ67nwh7SQs3VhPnzUihKDB6mcMf3EoYXjyw7PAXUKyqf5MpDQiAkQByHHLLYP2vsF"
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
