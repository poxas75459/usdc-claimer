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
    "2t1jCiEW6iiHxLrSYnJdESsj9xLkqLzvwm4uHgrCBuPTveXGQNJTGtjTmVbVeDcvbddD2mf2pgBA64pfSmiv5KDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h6ASWqommFiCRKCpyqid6ESiLqSTLTTuzpW8xgyyzCVLaK3H4NVfBB9C8aLQgVHYVUoqAGKLFmZhFS4m1ZmD7yx",
  "key1": "25HLgW93vkUzkGa5PeJ3v8VTKVAKCkr6AgPrycJKtBdQSAaHUmet2UvdyFAD8LRQex3imafotQMuLQiWM1ppaz6E",
  "key2": "3R2dCYZoNhhZyjpG12GdnS1vGo4r7eyFY9A9Az8Ljci6DRgcPBYX3mU7XdpjLrfb5jJvhczUSPkSBrmQWXaDhtXZ",
  "key3": "2dn9kMczLeX2rdfgGJ3EMboHeVNabHSFRaSZBMcBW2zypEdfawjNHenvi6KtyaZMPFS51hDNyhQqZhK2bHcr8WTM",
  "key4": "5M4bw89h86V5W1HWRRsY5UKVmm9gNXX3KYCz7u1jDW5F4fqDeh3CAvrXSTNitFtr9rL7H8XLanbAqjYjP2v1h3Uw",
  "key5": "5tGbS6onVLG9t33jxKmVRVrBubqHEcGuxacsrPtJerBFnTLNRnLPV9FUG1mAmgZEhFr9xpa8a7VVaR5xa6WfJzV8",
  "key6": "3MYVjJuzi42yW7JkfAFAdm7KsMikgAZatyQzwCT2qEGVeB7oC363XG1SkznshrUz4wGy6ZjeyQqHfWDsoDMD161E",
  "key7": "2mpvARynuoBevGrjwEJb3d4z3MhB42ues2LwcVnmSpBvdTmLcULuBG521WX41o996pVSzCn2iyPpTKWbmcheornr",
  "key8": "342GJNuM7V7EktJ2dch5dRqxgUneNjfGqRQCjBBzwJ6ddZQSSKgURobhnjuNgnuPrd6Af3NbPUk5KiRgRffQy42Z",
  "key9": "1jaTtUFmSaZTek9k5ePey15oyj2DYvdLPJRqGDhRaKPEbuP4Sy9DTHRWDj32WXAed2V7MJAVvh6wsYqu8k47dno",
  "key10": "ZjpUtgvwbN8jUg4CmLiKDYdXsUDvn4VL1JPHDMQoiHQzLnyqNnVSLhFn8jFDuVzuJNgvewfmTqE8vcUWegzvwdN",
  "key11": "365PcwouugnVx3qMnJCox3QQxaqhWrpVxCo5yMTatA2zY31CLzg5xq5NFWQj771E2PuhUqs9eE1JsQXVZpLP7FDF",
  "key12": "5uBM3Rf3rbUiKJLtvWMSTR731EyqFbEnvszs65okYaQp4ViTB8EZaBAsgHqokxisQbYZi2eYJpWk3KjmUGBcYgHL",
  "key13": "2Goox3WEhsDNck4M7n5cactcaM4HWTzWGYxdnWbe4nCYQaCenERvScxu5oDM6EinzC8SFJey7duw6ZuX8KdKUqRF",
  "key14": "3kVmiS1ivsidqSKnBeXj3nHMvoeuCWd59fYEeYbVqwsECWRcjank419axp7zG67Gmggj59uj4uE22uLpRqQGMdBT",
  "key15": "2X84X6TGp4x3juyPDpMFTgMnJ2rVJ9cThd6HETCfCax7mnDSmd5rsQdv6an3VsnfS6drADmKocdv7d3SnEEaoNcC",
  "key16": "Lfw3W21p9vHe3tEdVxS78TNRo7wcBBnJJtDzkek5fSPBBdJs9FykUstNZ1NArHwniQaFCyoewK3gzG78XbEwjsR",
  "key17": "29G2uhW7ENUsFWUvjCmo5JunokXCHPoC6tvSZGWWGgmkN4SpW4M2LJZ1qKzZBBPutzmnauWY2UYskuKwzG41YAiC",
  "key18": "8zXCS3XUKTY8F9MLMzhaNKkKZziNRtJf8vbehzEzJYzMqLPKsH72sTrkA28jyEKDr3wJGPpJ5igbw1nsKj4SwTc",
  "key19": "27PwMvB9tAKqVLZfbNd7nZ2pZnUCaQ3v918vhCsZJy8Zi9r2M8rW8ta2iXtCNgJrSkGnN8gNji9KkHkM86tefF8y",
  "key20": "42ptL6ZoG17ywV4ToinTHXumTZN9T6gprM7Rr2nzeiKDdaRrmwzsszpup4r2ViyeuN8NGRjgpFDpR8eD8hNdATDz",
  "key21": "2zM6dFK5R9ua8pV5tTzHWu94HC455vxxecmrs2Q6pBt3beHFaGc8Fz443Zm5Gwm5WdMcJfaQAt9Q6dqt1GxbfCQi",
  "key22": "2Vv3YpbmEkvL68BXxnyeerwe6SqWJxkmWA9qV3WjLtAHBHhx8CFVsbeTTceZ2LXxQUnGrREDrrByh53rHkiVHYvx",
  "key23": "3HSYvHFCh8ghCFpNs9HjDZ44MFyiguYqp8C1E1AWuQ4EX6TBKDNJh4Rcj7g9jsdABae3kL3pYuTy7ZwaF714zboH",
  "key24": "3cqhV8hKNqFHGqLwCAYDdYfcAxBtSkhzos3G5hxp28ZNy4aWetSiHuBy8Q8wNxUUzLW6sgKtwec4iHGgUFWYFWL5",
  "key25": "5t58ZEo41Jnkm1moJGQ1SomqyaYUTtYrv78G4BcuFEhHEzNZmawhEmMbav6upVdoCzScQGiUeKPufF6N9MBHVkmJ",
  "key26": "4Q8vf4cPiab6AXXZMS38z59A835sFiNk9eid3yFUqotNtE8EL4qhMq6QSKWBmnT1oVtoMs8WugXViCv66eL8H9sD",
  "key27": "3M1juFnRQ5fmwZcFb9FShNTSd4JKJ8kFUESm9GT6M4gc83z5hkWUDhFqKxAvZyxSezzNrdJKHipDDu3fpdFtGCKU",
  "key28": "dUFhBjCMbxpVk3UJEpmjBFyftFmqCX7vvhwhEgpnvaaEpXwbBUrrFXWL2QgtbDjyC5gHk3nSqYZZHWXB4MXu9gL",
  "key29": "3EycNHsDVSU4WoZMaGQEFqDcWXoRWFsjqjLKs1Jb7PJgYLjLP2Ns3oUv7FzfBfT6mmkZPVgXmVeGrGXdiLYCwbXn"
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
