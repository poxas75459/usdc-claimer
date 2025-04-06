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
    "67FJa6Nr9fVaZr8EhFXchsbVgfW7EWiWLaAji1EMuZJemRrUoRPVCy4JDvYbPmAyt2eXpwUbXQ7op23QbmC4npHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BuH6bQet9bKhxokt7vZkcv1G4eFzEWq5NVGL6a8RppRkGgNv4Z6F349HdV43aCbUMu6LvUJVTdaEsRLrtgdR1TL",
  "key1": "dyD5zBcRdDxJknMGiWNdk9rix2wbVg3WQCZSPb87L38TuG6M6Jkio5YVAT4FzBbFjriMejhRYvGdb4rDo4UZ79Q",
  "key2": "5xJVr7sKiN7KfgSBvFEtAiwfyKNxMztLSGSrzaSHwrQRewgt6EAhLD1uB5qo1q4nK5A7was9dazYKVoNWLK7hBQz",
  "key3": "49xFUFLTC9PqE9gnUFuMYrjAwVuNLqSE2DqcwDUZ5YXDQkngP9Wtm3c5vTF8RJcF4M8zJCJxmmoTSyACpiTdFQAG",
  "key4": "NFmF2iKpR6sKpKCCnMVhLBvkSZBNjpCFgP8Cmb2AssDruzE8AKxjJ6qU6Kdvq5LEUugumMpPqUemibfDxgEwTvD",
  "key5": "3RHLE7pmSn7fw4kyp4mSUjMAyH4hpMU5YkpWJG66rvdbSbPWiuCAWsJeQVeWhQsVvCnTqeEQi8WdRc95pUCeq8kX",
  "key6": "4Y9X8iSy7PeKh9wozNteMZX5CYvxnpvdCAPESwJXxmiSYD88SoCumVLEFQn1s1454t1TRomyHXrVzbDHYVtw7B9w",
  "key7": "FsN9b8M6eL9zazRp7wnsQ16oPCs3aJJ6Y6UZSaciL25TKCivLKUjjp7AAhFG1d9wgvauiyFwsVrE3uQMMZ6wY6f",
  "key8": "5zBcR1xLJy4DyNdazvwvn7oHZ3fLBFpHpfE63kxaTpKpbvZWqKpE1CwzzDKR8x1JAFJ9kjx1syxd6VezS3XjC8R9",
  "key9": "xuC72SUn7b9Bhn3VgopGTPKh3e9exqwBwkLovUuwPoR8WhLfpRv9ZDvLA9ga7TEXbnKNvyZPzF5ULjWWdiVutax",
  "key10": "2tpAxec3UsC1M7CBTrGuoZqHaFKk8HFomhWJzXaDUZQwRd4TfkBJWkXCkm8g5TuvAut7xALRtkFuPnhzBzEhZbhj",
  "key11": "5aKQDYcaJ5SLmrhLdv4YcHiX4qWKjc6V8d3T61KRhfESyHVFJQqx6FfDsqB94yf4kH7WzgdTBJHcgvNp6jdNwqQp",
  "key12": "4iTEChMwJ3KBEFoGiTHLpKERSNDGDQjEn1b1Pvg7dYXjjTVZiiDm4jtUiCkF2nrTexWgKRiqSXESEsMhZdPZJJ4U",
  "key13": "22kbktbPuqpR2HQkNiJpEMqaaPbDD8ZUaERSmbk7yoSjpgRRBWLbh54hCaVYRG8PEwjR4TFvcoDv6K3yhvpG6Jkh",
  "key14": "2MJ8zNzrP7GM5x4BhaHYufZK4BqWFbPHMmmLYbNsgdn5xvEpFhSrogL7ZpxsLD9pCMwFxDWmjo7MoWXV72RXggmM",
  "key15": "5MsaBv6AprgVzLWPV4dbJbdYRs6z1hSac5ykXiYB46v5meDhv3EFf6RvkXv7g5hEkUnPinRfFtqBKrLpk66dTo1W",
  "key16": "2gxQtkym43DTqRfchFJKgzJqi9UZLNn3EwErUcCe3srTzdott8HfBvxCU57cxw4HGp5a1bNQF9D1o9n9cuUdJyZi",
  "key17": "2HWoxgZw3w87mGNAMwV4X9dH3DLNi9LoxC1pstLb4TRBMMHzQk24wyrJ4aDoMCKGkhehM65kT1yPW7ZQ2J7jbJNQ",
  "key18": "4vv4FvxuHGLckBczTQufm36gTbKKHYPd7SLmqTV1GFmvA6Ckg6Lczq4qUyL54VBQaYXXdNbGRPX1HJJ43adGxohu",
  "key19": "5XLwzzrAzpNDKbjTdEJ46QsmYv34zKLBN9KwetM4VMDHUoAtaph1CGgcc99MnXAp36qDwjgcuGWtLExGv4vLDdVQ",
  "key20": "4b3LJbZscpMEDRKgmr8TnFwEwzBUSy7UEcveHkwaqF5ywjtcGJemkNJ4d2FBwNEYwe4CHkRLCkGygaQGJ86PLEpR",
  "key21": "5v59MWb74mqHWJBVzocze9naF5AwJcTRqqpNdYhyhYWFUrpqHEJ4LnY6x1qZJN5ao2FZWzAuWtSGQxFaCEWZcxuS",
  "key22": "3acDz6bm5X3oaHn6QHeeGAoP85hJvycFadY5LgpQ8ezJLQhiC2Fxyk22X6kUACXPKWsxWVgB4zsyfP6ZSsFdF1MG",
  "key23": "4Xt6HAofwUok2pD7jqzwZny2Uw1nmkeghR5Y3MBaxJeQw8M1XKfP1dcSvczmHCZnveP4HV8VD9m2QCa1AWirTtLd",
  "key24": "4kg7jp67tEag2tbSJRkekzVMUTZ3NpRECXAE3DZWVrByF5UEzeycWPRBfcQ5aHBVfhw4ZV3Qvcbmuq57NDPtpN1j",
  "key25": "5a4FBmmXfqKZvSWDoF56DzrNw47YnqoMz8pHEt11Nu7DpThgaSss7brw832j8kfrVrsv4vdSAAeYwc6ytGquhSSA"
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
