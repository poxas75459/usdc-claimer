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
    "5ifTwKM3KUnEgyZXiWnw52DuZS4ZcG39sJCxBzr6V3UJzwguMyB8uWHzHhjQFirVAuFsyeHgfxoRWzbGXSq8YNP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fuGRBNxdhA99KqvX3LaejU9DrfyWMNQdzHKHYZTLkN9cF4g1HKKVw6H91Lr2SgCDrEw9vDU4U5D3KCeYbsFKjKJ",
  "key1": "25aGqqe7SCXwgQ33KoUHXMaB8nHz4hagY8oCas4SMGbJAuGKtQRNWCKRkggt2JPQ5bn43Xp1nCmAERX5SWAAgvi3",
  "key2": "2HGgtfB7cJHs5NaukWafkKa8J4swzZVkVSGBvXB7PzLwZbfSqhqSwNJ8dY4CZtzwbVhNn7AzZ7RQiYSksFa6AdBZ",
  "key3": "4orarEECFdrWyVkwQRyPVLRLcbqKmJCrapy5qJ6hR3VekxCrdXuuiC9SZhiczjcHdmavgeNF3eoYk6G6DVFAwgS4",
  "key4": "4wUFEqDNp1Hky5xFAZhSJr51JYGV7xtz5ChSjLXJ1NEgZ3xXwjfVHCftE3GLVvWWRzN8WjNMv14zhpRkXaHZ7NAe",
  "key5": "RHrG3dJVgxFgp96NEucvrSKrmPetSBbmPN8wywJdawnLhS82a28x631kwmZfQwCbp1SzQrgFJ9NHWDEuLuLGfuD",
  "key6": "363f1ZPytPCrt2tLnmybk6gbNWpw5UjpUBwNW5Diy5eMxZHNuqkEM6H8p4zxypKdJUNxVLy6zH7ETuUA59eCyqrJ",
  "key7": "4eYbDLHnUguJFpCsiihwAQQS6phAXg6fprMUrJvqbzJmn36PnZu964ARvJ1wciVxmKGsyZr8AhR1Z8GwcWhed1yK",
  "key8": "2jYDn8V8fJ89Ug9Xua3oqS5QmaqitrbpAbmMtucWLnDNKPCdvW2dLiuKTNT14LcAZAZ9ytjGh1xMy3euwiyM6C9f",
  "key9": "4uyfm8RxnsYS64oGxnDEGeDXtgBErj8wcBqM3tD5pTZG8nHA66BxLCijsDaYNLJsfxnD6uS4rJU4rw4pRmgy3x7n",
  "key10": "5VXxxhxjbTx9Y5EuRjPAmVjkJ9GEwZzCC3wsGiLhxDuNArZkB1XKfGDdZC69SU7aYa7NkbETErXjQdfQDaYpLFb2",
  "key11": "63i5coZqLZUByZcgdohwsfLieNkrSSW6ZgRi1LFgRv5qyLfXcWh3LcrsRnQ9vK7TzSJHFXdzuEdgNvK2n5QkbD4v",
  "key12": "49XJajVXsCMm2tHpJi52tK2gYBTjFb6syEtuGX7s52g6R4kvy3CHwB2VpYKtEyjQnH8fBmWevn3RNczRCTmNnvw",
  "key13": "3XCdhDCovegr45zaZDRs885oS3SrVq7QYMmbrExybSSC8xcQhiondQsw5V3z8CuvnXPqokFrMKULqUbpyP3UCMbS",
  "key14": "4hjaTk9XPgdV5EqdCZ4Dqc5T4HAiuVaPcwCmbL9GsW5A7Am1848UTcYhb1B7FdAAmo1PkfqHqbsiBNMafSSEf3bP",
  "key15": "34hfDG1aDUtS4oRuV95H7VVUu2LqoVcjgLBpUCrTbTSiqoy4Prfjuskfnf8GVo1w46LAZ8s9PhUP8oaDUFqJn4vb",
  "key16": "3cDYoQBEYCjRNEDqKB3bJrUFCedLLyrN5zvCoawhkWtNMW7w3yYzeBJRXEZkZZe1eWeyBtph8EyVZE8a4xXdeAMD",
  "key17": "2nNC3B2FxLfBfJC7LVgUMkSFrXcytfQxQZHCyuWsYMm2V6XMYnJADZaYTbYabb7ckmDsx2LxGi8VSfzCohpqbcAe",
  "key18": "5itbhXybn6h92GeQygpN39e8ZdnMqY4aVcP9rQszbfB2UDYmbaKcG51i9ZuVMj8Uov6hiizPdQuqRin6fNgtWBoT",
  "key19": "36xECt2Bw7oq1iXj4LErYVa2zSD2d3VJCZAT8wekf6FvfcbxfqsAHy8rMcZuwneSy4XG3o5hvf1m4k9wQMDhYt7C",
  "key20": "23jj61UTvE2epdcm9kTFytxNqGihJ8GgEsfT6xQBpTZBcCnEAGgxWRoRhLoK1xhkNZrMjvMnUqBPsP4WuZ4KU574",
  "key21": "3RJDkbmn6VaAwQJ1Kedf85n8r7kaEJJec1kTk1sEmfM62n8EB6KNa5xjHvB2WXgmXT7rg7H7bU8o59T8bcRNEzgF",
  "key22": "4Q9MeUVmCUCERkCiTZTnneyXfMJLtNknT4TbwYTwygXh5UZFo9uCJjksmMHEBrLyHGCfyfyyr8q6bF4uc2tHoftm",
  "key23": "2bT56F5wsdjDAXW98iN9KGusFnN3J8USxonyKcrdc1oBybrxmEGDXab5YptkihnAgmiT5cfVuR6bvx49aT4LQY4i",
  "key24": "45dDoS4BgvVwbA87KDUE1trDJrZHUAeVQMCxpXXHff4DDhVpkQRYnXuSWPjpaouGFebMwKGhJfsMq2sfrLJxhe7Q",
  "key25": "28JPgQqWCESECyv7kLQyrLf9HfXp7rucu6MEChzKpYTDQDHR577FopMmAH2APA3TfBGrtGy3sgCD399THAF5zN19",
  "key26": "d8NpYnekjL1UNrpQtgNKKM2x1WNBYjhjuMF5h6GJ8N6KWXGm5ekrZfC64nB7Z9NDrAfHtj9ibYLRDjFwx3DbcBs",
  "key27": "54jePkSrYv1mLnMeh84SdrJVhBtLpuN1yCsNCs9gnx8N3fFRyJGF9RSDsLF9dBukitJngqqBQRZCFR1D4p5FNazs",
  "key28": "2of2pryMWdEcNMPjX92cVNhmv7raddP8snoNEPVAwBw8ij6uKGgdtCc5Pv4J9QVLzseNybTMMkB1HcePrGoXC9CU",
  "key29": "oeFgb6up2tJMxJdTtxdopixmgZBzh1FeK83P9r5eShJ4KzC5KCzY9tF3u5Hq3HnTCC4JHJPS5V4i5fNo5hJsdxb",
  "key30": "3wV2wHDhZmLajeSjrKNwpnCZqnFBEPYkfizuKpue2e9xSGfqbNoWb63TmZc2tJ3HmpfeAZ99nvwgR7kw7uusqkgx",
  "key31": "3ainPddGD581QwpTGwLUELiB9SLvKCEKWXN2tZmcexSzZbFXEKBhbn6XoMr9TJyoiED9LemwyWwmV5p85cCgGVZM",
  "key32": "2tDrQw3TmrTcFeymjxFs3Qb2hnmpUrRr2Xw5mSgPVzsz2DapzFr6BN7SmwUjgYTem888Xx9ugq6mwhkh5gBntNRb",
  "key33": "4RcNaYjMBnuBRwLFGZxEMNfVCmJ8CbuSFB9hf8bUseeygne4DVLK2aNAzs4kV52dGzvY2o9vBqwjWcURJPVoYEFY",
  "key34": "z7oCt1n2b8XAnUcUw6xoKi3mVVLbjQq2X5HxNZkrk4io8gMiZ4cCDvpHebhyQqYuU4WJJwmNugpiEZ8T56zg188",
  "key35": "Bz7YZC9hZXWVn43aCdPEFH8bNPvCA2sgdePFRyamuzH3DP3nimrniajNoLZYasYfLQpPBoXoxvCjDBLEhb2yfhQ",
  "key36": "pSRvE1nmED7yzRXiZ3t38UTfiWu585hxUD5XQrzw2M924oWsXUVPYR7nzhN79hJhbcc4quzkGpvfP294CuQC2dD"
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
