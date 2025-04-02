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
    "2nqeRnRqRcaxMtLGbUBUJu9faUiyx3VMCfrxuDg8bDnZJy3yJP6hTgMbaQ1YYwMKhSdqYZS26LJkkWMq96XpVscY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27rwfGtyqEpacibp99B2U63xCJGwznAVrUNPSAxTSWwjYZXTGbn1uYVgsdgKrM2ZXV6ispfeD4LGgBjXyE36eLmB",
  "key1": "4ogimkPd3mQ1WjJcs2MSv8XjjgvvBSrgFRvJEoeHLYaT6PTdBeA1gUY3ceaCQymmtHq4HWh3T2AFZNrJCPaGHtqT",
  "key2": "iKK9unGoxdE7e34H2Xg3zX6B61STZCQyVKwrELAdQkqkuFmnoEViaQHgVir9vrJyumWd1z2Eg9NmHCTWrwtim4c",
  "key3": "3dB9ECumn6EcCzaAVjCC2KC1i6SamRrJKojQPb1mUMz93SbU8urLBjuhseyxKcXBsLW9AVDS2QJKVCzrRhmZDJBf",
  "key4": "8sdUdKdXkHAfHYaa6Pck4jHDPh81qu3xdDDEfJPeAoapJ4TCJedP5V7gKgMzBmMxHk19BpzWxUfSV2kSgqCTVpS",
  "key5": "5VPA7WnAjBpN6Z1rek1TUeUW5wfQRvhbpKY7QbsAtY1Er5qw3UUBRoNThP7EQ6zdL4fcF7EGTdUzLFxoNDoTDQ1C",
  "key6": "5uoC25HxfVRPw4v9Azd4LAoAwdxu3S9p3nH3Wo8RgLSdKb6hQqxSbfQFNXmYMRoT8wXUgsWVrzrQs8f3pkdBeeWW",
  "key7": "2WB8Azx91AcDfqqNQt3eH7eeN1x2WhSm2mWrctt7pBg79vrJBsGWYWGHLGosD6fUGHJFiLY8AXnHgHKGqq3dzpnR",
  "key8": "3ZG57EpQvcibfvZGm855b57gvTTrh6ahdMoAhA3H24pYgeMGFUcZQZdvTrejzedpfNFDmpR27JtmaZSjNy6LRjiS",
  "key9": "4Zag9MQUsScncUXZkUy9k7YrcRXhmu2UYamcRWNZJDvKUZaGvoXzQhsju6FzgMHQpGKyh6cXsyT7rKrZxaoSWEbK",
  "key10": "2pHdB7b2Ls6s6iTJdPQT4GUcNQEJmnmpXVv8r91JkNBDdWUs6XnFyiVMwus9wUYkVWCiNA46gmhSscjgKzThxxNv",
  "key11": "3ndnHxNUKumB6UShZvzCbbYXf5qUV94furhvqMmFMjVyHmheC7dTrZV5JmFE3v9gcRWvzhKBA5jY4GnkBvJbpRJ3",
  "key12": "4dcsTVNGYc3Bx7ysGnNJF4cJ4TA79CwcvbHFAkiRysmVffiZzSVNjyuikWod75VbZyweQMTcibChChvW7vjjVMe7",
  "key13": "23Gm7vhZfusTjuXGGz7TgEGYAdVtEo54SevbqqircUKJpyoU43Z8WeFG9ZwQhTQUENUSAD1prHgU2sqp3Rw3AzuH",
  "key14": "31vr5vsg6SWvZvjau2wgd4XbwQVn3t7NH2BRDp1LSr4Mb1aqE5yUiJpLV9fWqr4NxNV5Sb4UoqBrbbbhEaWwUzGU",
  "key15": "48sSABVVMUX9jNzZDnvZUwbbZxaXZYb7Dwd7989wW4Bdpj2xgNPnLEJcHEJEJPoqekt9PRK85GiGWDhtcDNxPbud",
  "key16": "2FWagp6jLjx92tTV4vhe9TJoMyxH5hkeABYsg2KpZyoWZe4mYfQfmZZPY2tm3Hfvb848eDKRwKbj4G8UKvFMy5Yg",
  "key17": "3fT9jtCuq77cezBoHfPHffrPRKwPxuD2L78qZ6SPNaTxNpyusxhfph1ECnPU9F8GothEbhweVEyPmtDA2yfkMyMf",
  "key18": "5xgZXrVR8vjRVC7ZPZBnW77R1p4qDgnqgLid5tuGF3kENfWVZx1TpwRbFRVcyQ1g6fpDUm7xhPj3VjwCMQmJNX4i",
  "key19": "d2Q6wcssNN2q2Wwq4tXNEjuUavbrpwK6iekpSsnV3BCEWQwR62VoUby2eiiyTQJ1xwUbFgojQceM4X5CjQYqbAW",
  "key20": "4y62o1mTMJ7gEsx5PC6yViZWuPKwPq3XP8XbW1rwonqMa9BbYkA5tskf2kTJFeRajYfAk2cFFV3u9kZcXEGkdHyg",
  "key21": "4jinuy2PEYGXaJjvDGpatjTHgaSsRRxF9uTdUSYzQJhKXTU5CKixP9i19F2gKxNyVmJWNRF3hPcjDorWAtZYMLiU",
  "key22": "4aDdN1h6Xo6LGu7NWmMHu4rF1u9pEM5698o2ta2AzvDhU4bZdiabQ6rW6iixSeibKfM4mVjg1pKvgNYsBWDg4g5m",
  "key23": "3CepGqqrgKaFuRZpBY1Sh7tsD363M4yFmbGswFBXKfcddXwrG1AJkdaDChJqUcjYvzwn22Y8VQoaTwUjie2fdDes",
  "key24": "3ZH4tmCopUKeGxQbZ2ihGKCT7KGp3NaX5RRgztTGSEaAw1kuma7JgiuSBTQzRSgBLn7qpFGB5eQ5zu9KxyYqpDKD",
  "key25": "51YJUxmVUveduh25t4z8waYE2qcaW1giKQtvE5NN8T1zp9LdmbqYU4CGHkxhcxqqXXFyYkH8Y3sFt9taneB6RnrY",
  "key26": "23goj9yiwEeBHnBueDCgi7BPhTDSwqg7ExD4dZYctHmti8xWDsE2S8XopdxJawDtEnJhEgrqYnbTMMJYMTTn7VA8",
  "key27": "i7yQDYvVCK42vQdJ1Eoo8Cd2ZD9i3xfBRwrKZB7puLkgHxY8K9d21YQGwWqUiYFr23sNgDEJmstVFiFWUMxuwkr",
  "key28": "4mdUo9mGf61q361wbjqKFuYpXUVGbejWGGhpXToikU57sEFsmZyZ7RdN7uAX6zVGQFswjtx4Q2DL3d5cvJcG3Crc",
  "key29": "Up8Dgzw1b6JiXRu65xnLs463DSd23JoRHyELZW3fwbxSg9dob6zjaFGkM6JBa4tFPGHZJw9jSrWPC7znrpuVLat",
  "key30": "3wBUHYVR75d174QSLohtqMrnzdaXp9sWYFtGnvnVYfk1gJZKpxcBULbDtCeChTC1XDJYroaYfNg6YBYQr7oSw7qB"
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
