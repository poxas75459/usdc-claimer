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
    "41X2hEhK9ZChikaf2DgkVijSNGJgEMbna2AcGXu5o7mLRYDbLiHWbi9AuqKnU6BrkfnwjmghGEDZcxHmzKXywrrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aPmGS5xSTdm5JWPCiiYgX2f434ck1EYmqHBL5GGYFgJkYd1EoC6pr9VhLwWMsudv2H7wtYgeShfSF4XqGLjjB92",
  "key1": "2tKguxYvskjSEs2DiZtkoy3bAgAmRuvTUd5vWvvaUNFzXfRFQDCmZX378hk1DF69SkXDvf8df3XmVBsRtUaV3ybL",
  "key2": "23WvTWGS7y8dr3hKF5fdy7Ktk8iPP2JxXp6MDCjJuiz12C3a3mN4DRrEZ7rfZmRn5skSdu6ZaCDvXyzKotYP82em",
  "key3": "4onyFVASNxtAjJRLGC4GZMGU1cKRrgi2ZiWPi2L51bJyqxTSo7YcQQarbEvxwyPhPHqzJioGBe4YdNi3k6tYqsgC",
  "key4": "42rspisTBG3Te4cqE85ZgtT7xymapRBS9VkzfJGdQBVUAu7c8V5bApAtcMuPdDsy3RhwyvHhoWXoyv8wUho1bHmZ",
  "key5": "DSHSkUGyK7W896y8LqWF4LwBUsUUYKvzNdEoZozSfPMRW7kXghhaAqm8F1wdgwRtZm5gWRrPowB6masquc6dzt3",
  "key6": "5ydVf1ab49ady5n7kSfbeWsdTfNHceBeHdFsN1c4QdnFEjzJBywXeQTo2tD72RZcAdj1vGeRsTfTcZfAS5fjwr3z",
  "key7": "3g1eLHJuHfbnBU4bBSA6nvLVE9U52gw78MZd6aq77Juxzq73FEw1SRoVJdB22ce9x75byYqjoLt24FQYZPr8HHz2",
  "key8": "gf4kuNTrinzPohevvz99Zh7w9E8ob2HTvBFDcJVRBBg5Muc1Tue9fWkMmfejCHPKgh7wmG5feYN7N3PJfDsfQdG",
  "key9": "2pfGkrbbjerPUZbLJynG8cNzFMyM9eKANu2UtniqW1jB3Rggzz1wpAjUKJaGpWfjSnGqaudxdZaPCTdCwMRg5qP7",
  "key10": "3ZyAo5tajQ8aDszSb2b5pUhjkcnMTHgpwwegq9eY5TQgApxL4APvpP9ED1nCXrLuqct4rdKKxYdPoHzcPnqUZ5y8",
  "key11": "3xVMfxuQ3DodYL9uiSRjCbnGfKmx969z8ajKT27UrajzMq1MhgaNdiMrDrtovyK1HyNgBNVzPdBB9ZQQ8Fbjyfao",
  "key12": "63WpaCncmKR59iZaKUDjwNP4ZQu1Mt33PKWwurHzgJskLaf4o5FSviDEY9BLDaHYpcMCVkoebJ4Rz1yMaiEsevQB",
  "key13": "C6Dj2AtNvviDWZSnFaSdcbi2YKqQvyax9Pte4n9ToAetF7yVe8WYVrJ2YgmH1fEFL84JR8oSDGF5bY2mnAGCWGn",
  "key14": "pgMHS7AKZSmBADR8xLso3SebK3dWnJN5RbXS21hTte58nC1FytsJftGmh9x23XvFESDHSumT5zGvCNyTAQUaxuW",
  "key15": "qkegoyCf5zvvXoPzLXv9Qvq6iBXnnUifbi3x4YwAip4fYHPpJ8Sg1GTSvpmztzNw4RRcGoMG1aVRrBGEjUW3BKP",
  "key16": "4utboq4twNYybE2ZBewZumQ5mgKfiA35wgxTBGgCW91FneDf1y3THerNS51oYGqAnRyKbd7Guq198EZ9kbyMjmQQ",
  "key17": "4aNismtHxA3zQxpUTt9ZKv8tHGc5oPjzj4S4JNPrfjkqrzuoZCtqVQCSXisMrFDbuCEMSfTTxHHNKnvey3drwJ7o",
  "key18": "2FLDmtqx39wVPvX34vropQ3cC8gRtKuKWjeH4LrHatBm7aaKuLE2KcsZ3Rmsb5YFh5uMZxbxeAQQPibFn4VWbRTL",
  "key19": "4qsvhkbHBRqsaqZZ1LZfBsZQKiJjeR5iHgmPi8msrZH1UG3pXSBhZhvYy64RGqdGhoAhXahc7mWbgTVRWDyXkvaK",
  "key20": "4m8769fFGvW1g7Ga7iRTLFmsS18QibJqKfkTL8c2T3Kxobfuwvm6eyn16BFjR8D1UWodtq1W3m5XzYmjiyW2Q2Sh",
  "key21": "5JXMQvFfHjmH8A8CsshcwrbFg6L8c3XY9ZSUry9DVmoXYt75ALZepXGD9b2KpQMuBv3UFSKJWuGgiFekjgQhLA1n",
  "key22": "5mWjmgPNdxyYeTHY6E7YgXhDMr5UdXKw4HnLQTuUYk87cchr1Zzve8sqomNS3Xjva7qncLsRJbLRMc43hQ7DiqZt",
  "key23": "3FBGBy388T57P46U7YLr4Ex7i9kRoLS3zWhr3WXzrJPMzY3CfGcwoRHNfgbbPep7aCDUct2GAWpQLcuiTcncQNRt",
  "key24": "4SL8voBqZ8goQ6QHtBzzzoxCcykgznaaWq7fuX15KBMgYoqmJH5Hfg81y51EYr7r2mqa4HFW9JQsoyrGK7hVrkBh",
  "key25": "3uiyc7anQmBjtaZ8qyNV1vdHyERwa4YQmsAkk8v9y94sY2RozcoBocGovcpvCdoW2JDM8LukpLJWEUdPxvBJ5Mu6",
  "key26": "5Y3HgVhMMJzusYvQoqCVtRjNn5a5yHDteiznqtAax426RBKEKc7D68zC9Fy9HHMHncEPSeXvWLJtdfnhemQeho37",
  "key27": "3bioq4hnxTAATZaW77DKqDPBjNtjwjwy69FoByWpzqwzCPYrhaBqrvjDxSEn85BCGjjAUKwshCN5Qf64KEAD6hQf",
  "key28": "3GYuMmGBbJ1dsxSPoRDBQPc7XokdwwdWkRGHYSYRfqBWj79ZsKLfg9Z7oCAUpDK6PH7YahKhbrYcXuB9wpVvJxUk",
  "key29": "BUhtMWzJiU5eEuyYwBPWeHWKfzrz3r4XphNxQ6kzhQKE3deEmj12iCsuxbNhx7J9SGpNGkhyn1nDGMDYTRbnQbj",
  "key30": "5MefZr5WTD58TwgT3ESbh2a5eDwXd3GfkWqVn5JLhsLnJ5u9xYa5Ypr7f1gFh25CPt5bcxSCBnCfYURLjvxvy7ih",
  "key31": "3n5jR3kuVDv89AVB2BZCBW8skBZBVScuvseuehbXdchmgBVt5wAij3j9KMUR8ECSpm7nP1eXxv2QyBUYcWRZRdig"
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
