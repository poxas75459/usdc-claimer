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
    "2LTjkemSQ8y99JCu1oH4P6b3yg5aXGHSGa9cheWPPo1J2MaogrsEUgmUevAA8R5A5xygCrZASa7XAtY6HwVgdBtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tL1m2BuKonEbPRbWU4fBADQEAeQtjZtyMcN6xV8osP9Tsh2xqzG9qECpe8GYMhzKqBds7GvT34o3S77ZFaRkkEc",
  "key1": "4vB2dihDTPc6SrMxezAwQtfAxvudhQ7tMKAer9834LeoMmUEs2sMMDRfcxX1RpHHwd7DokL9qR9BTttP4YfKs7VD",
  "key2": "4d2A2kLXCmfVvf9fpYi3s7Ubz2L6DRnjb2vKCzXtGc6mp2KTzMRsaRyMw91LELN5B9UReM8tejfLrmw7e4Y5Hq1P",
  "key3": "61kfQFZuHptD2qijeBvsWAadajpbw9fVKJyk1CknnXo4FzYQvyXvFz8GDXdjsmfJrfLSFumgvbK3TibUeWpKD59T",
  "key4": "3Qtg918bTgW5M72m27YmtsteD5eCidyGfWbi2YpRFNdjd2oPxn1Y6UaZ55i6aJ8M5GW89a9vmhBnXSkdu7GmAHNh",
  "key5": "5ststKDsjigS46xgHr12dM9HQp3KQPdAmqFsRFHa7RdrfYEzbgjpXLKVJerD6zMDKFZj4nunueX6kjqPrf71yjPE",
  "key6": "2bHqT2B7Hjy65nDA9AncAyFvbny466HKR5vxxrvGjTpR5EAmBZa9vra55923eZfshdJUXdc7Jo36AM9C75NHYwTk",
  "key7": "2nLym5tG2qQCrPhCpehzrBgxeRo8hNyKnaqMdkKQGbdnYqYS7cxg1XGg2cxtD1gerJ1SQqtzx65233UkZZb4zPHe",
  "key8": "4HGxEGHmHrwQkMzPCARPcbASnNci5BAHjjVB2BjMF4ENE9BEa2hVwaK1zM5ikzLfKzh5FZCXZYkEQifKnm3vBJDA",
  "key9": "bLVk8FxGeij4p8KsPgDVYFRcvqSuwLuwABaw3WoJy63z4SFaZvgvX9LRcdLRCdSWJjBNFGgoyWizkqKu1XuaagQ",
  "key10": "3twkzZ3kjjGLjEHMc53rDCRD6yPLyUNHV8n3nWRmeqDQT1k5mzVhYCpGxerZKwjjTRrX456tzQJw8eYsGbzKA77B",
  "key11": "44xwh8eJYuVDmAtNGznUb1SU5UFwNWAQr8GqPcuCFjxgSabaXyeTwvQq62GD7Fn1mBzZEMwq1xhh12WCUSBwgCjz",
  "key12": "425cHjksKXrybrJF3zcE1wNGya8XQerRu5GGVJQnzkVWqfskYuc7i6R2gcom3bQJtrcr2nL7sSwGimJsFm3HDkG3",
  "key13": "66z8xingvkQKM4oRbHph7kyad9jv4cT8w8SKstKcBHA7cmsGEWvhBrFmba74YrzhP8X5WBbbc4qXvpZ4j68cRkPK",
  "key14": "2ormGnbG5sQqrBTrAdZa3ug9EzkBgcUJV89SfY9dzY8QxBRuce28ArcxNvgJbzEv2F6CEphcSMuCvaRjg8YkruWm",
  "key15": "5GZK43eBSeSBv4Y8p1YWuN12an99eQqGQcmw6Vch7bELiLcXwMpS5pDE7W6kD7tzwB5czQGurC4bvTmVJzeKhfCH",
  "key16": "5pM4zX2698yVr6PNrXnFBBaHP7BxFpkwk3L6bTgLSd8zXEDXWUEAQZw7Y9eE17LPXwC2ne5au2uLfKiTw1fhtYRh",
  "key17": "NuFtYvz8zvYRHHhdJPx4WBDd2WuTENorKAPfBJsoyVa8sxcYocWHKXKdnZ5qzJ1mavyVAknPUkpBcN62SBgbbdv",
  "key18": "3fbbJcGxah1rxFQxrRjaTLe32Yvvs2tLzL2hW2t5fAwNKSkwLtLe4JeVNxCX48KATUdnQPfq8bdiRyZQ2vPnZHN3",
  "key19": "2wQoV8bQfvXXYmEExpry8dBcs5NarALe8Dsb78Vie3LarEnc9RTqJmsH6sLKaNCQr89gwcx63wRHuT4RtxypZySj",
  "key20": "5KFaxUtyhrgPrp7ozpukgxfF6HQorGwsDFbv4vvT3fTG9aqtxz74HkH4gMd3a3cMF5XJ1CeCfhQ4wJaX6DTNv9vz",
  "key21": "BZT22eq8bpuJ9aNWp4bTBTqNGpuqTL3o3bZ1iRYiLgfWRkVeDyobCBPihHvHHdP9g9M2o2tyi54vbuGE8NQYQmF",
  "key22": "4EJXFioFsQwcnfy419XG7jBpCA2AUGA1GBiDN8XAbKst8x6jv4PE939vCfxPWRTgPTG2XkWfqxEMjGaeV43kBWtx",
  "key23": "54c3fCN6rLM4LqLSFtLXgyqy72BGRJttZ6ri3vGY1DaAmmixURAn1QZqgri5t6fUSm9gNiacFSGbz4Lk66pjdMjA",
  "key24": "5Vwx8TfCoR9Ni7cH4KgZXCV5DotisLPB5DHWfM3QNQv6hZFcebSidjujX5D5sL3a2AyFS3ALhvT35bRAfaDJZka4",
  "key25": "Cx5HveDjttZMa1MUUU3afJn3qHLrarv7rkaHDQc4Et7LhY9LWaPmLDZuTXN9HAvj7z1NTaTNt9D7gqY9wuuCiFz",
  "key26": "hK83xH8L3JRPpkePAt2Hq4FBAUKgPvjH57ed1F9uv3FzM2wDPgV6eZmGqNFf6XmFpTgHEfNnj3b5gaPwGLNGcrV"
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
