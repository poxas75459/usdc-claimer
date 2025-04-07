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
    "4iRbWNt8nd3AyUFDPpcrWmPVZ6C9hHWyMNePoZ15H8fPY4tJ4qgctLoqx8REF8LoGDrL27sD5UAY7qy7W7Hyf4ZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eCDeuNxsihZB1gPEQj1cVg3Eypk3k41dVWoKoD9YWmSJmEPfo7Y8yazjyjiZeSVv2PcqB9RSFop368y1jkxoECZ",
  "key1": "5NGZgNMDEbdBRFnAawZRGt9QmFBUpWZhWQLEGohqisfzCfB3xQRR9BYkFssRUbpd3rFouB4961uE3tzqPQbbj5gJ",
  "key2": "2sP7QjSgUTJZXLnWcAxoGmfXR4crCq1U4sgZteMquSR4wcU6awYS5PTfeAUvtDMjgAvZAYNnmgpqB9874WnTfvNa",
  "key3": "sjHTaohLo5N93prDyipQCCziW1LnhPSR2ZyvwcSiz9JxQY9F5Wrq8G187BYUdQKC7WPJxs56Tj5HLk7Wq9jXGup",
  "key4": "5hjFe534me3gbEeBDhBPUfms6hWX9NWV4JeExABsikocoM8u7SCfH8kmc8xQkQ5EjFirz68HuXKqLdcuxjP9udUn",
  "key5": "4tYYY6fT64fXKivXZ47yTe37oETSgKgPF1qrNANxrgmmnEdjJRFPFDRqZjZp4VeaaYuhZCKVZATmCNGgGcj2dFw8",
  "key6": "2fuSAGXKZ6odSRa4RhCrP2KGkCHt1kkdsZfZxWfzZbRmHUK7E5QzcLReZDXHw2kcbrHJMzHG2V4k7t8EggJu4ZXh",
  "key7": "54JShPgykTVVrYK2UjoFB8qa9n6NWirPe1TJQsNrJPZu31YeyeLCKtmUfkmZDTpdbmd8WMsYj4ksBZK1iTtdrjJn",
  "key8": "3kDCA4YDzhxiZnJJVMzgSM8kmxFW2wN1QcUBvpr4Rwuv7wdWLCgjHUncYQXCXhrdZjyBo4GRuo9Y7UYSJkoRRrh5",
  "key9": "2ddhAefxWZ2WWJbMvrS9PLhygH9T9w7Rf5e4YdnWkNHeWsJnXt3JouvkCGP65uTMZUV5BtHW6SjqQmxfeUTDfX1b",
  "key10": "FtidEdNS9z9PL3vnNgEjyDkWbzroCJq2BXdGt1z2MxvJYqVdGwCaUiDJKex6edoDefWt7brKvghH4korvzn8Xy9",
  "key11": "61gJh46M7xGu5o3QgJygu1xUK8qeawwkSQ68wE3wKysC49UqKTNoXjJBhMF7MwjsYJF1BtHQYHAxaDoYv5F28fGm",
  "key12": "5b9YaHwkb3iJqGVW55AoaFvjcLhZwPKJR5i5WmuSeiNGeiubuuR8g8gTzoWnM98RfyYzGTzNwBoAUBTsdGYGi1dr",
  "key13": "24pmKRwarKXXSF81v284iWKAwWKYvReAQFnw86Nf9Kv2U6vMee333KaGfCWXHefqHvKUzYSmjAKzYg247raay34R",
  "key14": "3EjgcZ6E3heMNVbvY7QmUAgGW8jFSgtEjozj4yVQ9nyJ8XKULpKWUKLYT7Z3euYpcRaSWtymg2hfE11UjJWRmwdF",
  "key15": "23k11EvXGpgb8GqMBi3g9WbYjXFHp6V5zQb8eYRkaTKAQkrTKCg6vLu1QBUJxhoy6ERAQ9GqZ1XsP9wnYsXvoqh8",
  "key16": "3K5e6raorSDKKbcCUMEVuoFMHdAJbj3idak6rzwXEksixFAGhTFR3JQFEzgS4iRCAGN5uqGF9M1MVWeSb68NdsCr",
  "key17": "3PGpmp9aeKHpVq2Q7rSR2Hfye5rHxQu8MP9eigazQAjmWjUrzwHN37szVq2AA9zcxt6FGgDVSiybhRacvB58nrc4",
  "key18": "2gEjka4pV6Xjn3ftNnwaYZhZq6seHxa49Mqmbz47QVsaS8dBNg8nNMfCC6WvjzCUTtg3vfNc984cum9B7tXyJFE7",
  "key19": "5MfB3yGi7Dwx9FqUTUv13sBWeqaXRusHrdMv168FDEAWpaarH744xGKejQpsQPXjhTVR6LogrmBCcYrEyzd4uGSL",
  "key20": "kuWYE8G6njEFJ5qJuxZYLUrjaT3sPsfPGv6Vthj1JNqSY7AcjFevJq36AKT5LB7sqLy1EKCnDSJ9XqxYqPzDvVD",
  "key21": "65A1TBg3UQEf325mTAqWfnHgwMQYRDmRxiKQFTzxMtCKz2nk6HPRofwv9FNRJznARaPSiTzx1CmZNrZn85avuPCN",
  "key22": "5XTwCox5vNjipVxVoZVq7sXopgWiZjf6bdgRMbUFksuBmH29WKe8mNjNaXEUtYfT4cySNCGp1czKe4vwpNTi86ZA",
  "key23": "3Srgp94Jz1oq5AsTrXsq98FCserLDFdKrvBxDA3GdpyZwjFtaMJuZCGvvjF82HQUZPKjE8ZuwuWPBFHqXQTUMUc5",
  "key24": "fx94EAPvU3Qesth8H2cgdD9SSaYTe4DW1dWDP6LxQqHajxgYCpit9q11zck45g7Z3EmeAc1xRPGi3upWrX8zyG8",
  "key25": "4BH5uaqHrh8RZdKBHzmgHyEX9ac1DXbU1PvSH4P2MRg9vHLcnRMUCCreFA5RVHEkSQUBQejyQPc4VvUCWtqbHiTC",
  "key26": "jUrzaAk96YRBQ1LCvbZVMKMxYc5SnYKfwF5WBESjkH19VGKNV6FjKP3UAUwYAipMp1fYLPKifxrXqQtJATdfye3",
  "key27": "3yLgkkd47yUyTnmNaM4RbCuM9Cc5UWLAHMZrcM2rEhK81rhqaGsq6d9s2ZsteGRS7URQkczudmtX1MJnqo54pyQ4",
  "key28": "5cW8iUrYQWanBdbCgziyhJbxRvtSdmap5zoAViedktsWjG86uz47brzXq5sRzh5Un6KtkQ2n9YhctfufQuJvPjrD",
  "key29": "5pgvqRcWA3ZR1ePY29irN1KdegNJUPEN7s4ddYb1JCCX5osibbyzC8XSujyu7uoGuRpnNYcLCoR7zMNYpZ2VS4Ht",
  "key30": "4frq37KiwwsrgJW6hqw5PGxwZuMZ4FiSfQHNViFdUy73t6VKv7ftS8P4aynV81cT7WoS5Qn5rZVJwVWo9FscrNfJ",
  "key31": "2Kjsmbh8U4kRHJ2DRcuhuwfsqYqFW5sVikd75KUeoXVT7gRkJigzi1fa4gst86uLCLpGMy4RNNXY3bDFZ55auJDC",
  "key32": "3ebdsaoxmSmyP6mCJhqyyvRy1fDK2nsFSYnH8PEH76Naj6gg9ftrF7FiMNeWW9oxSCewmwxvtS61nbo7tKQn7RWj",
  "key33": "2HVLpXZN53HoJqteF83HeqPLTyLJsaEPkXQAbkyJPCvTVDULThhaXgLp2YYFGx2WBwmcCqnHh4hDT5vg2y41wpht",
  "key34": "3FnDsyuF7iponxvUGXYQxYDNNDtkvBwgc6cadyCqzaYVw4gpgPtatG4MhpyL1YXCdQYLUcA2K1pELTxY4woGA66D",
  "key35": "5Btgctp232macCvdiJS232zfXk2qvQy9eu2n9d3YLYyhVxWSTD12hNsr7TAXNyfdSza9QJ5Xs9HY9YAMDojqdpTu",
  "key36": "2ZzjjznnhhNFa2PXirMBwFieFWGR5wftnB31Bd7Ri5MeXkUkRGku6UnAMLRrrCgXYGDYHwusQDx6aRf8rtQFLgTe",
  "key37": "dyJSX4zrZQwYmTKTwaspq5YxuzcyMNzwhmweJFF1vYiyArthm8SMvuZkrnHk4T7mFcE9T2JKb18FaiD7spDEJYy",
  "key38": "4a9igWi2STk9QZkRuWjPv9MLef5cjvW1TNcUAaVrYYhi7gfBP5aNrPqK3cyw68SoK3Dy27nc1haU78DPGDXzQALK",
  "key39": "5ur1x5w2x2JxEpheDKXE2rAYuBfQcorK7WEoXgnFQyU69ogHCohvsvBdqarSa6ALHzTHTjX8JVk7hptxFYLVhgFm",
  "key40": "Tb92QC31CQFGpo48krEdD9h5hVfTb1KR4Su1uz2iuHiXCX2GkuH8obvhKDn3VRermXiMRezQXqKt4uP9AikN5Kq",
  "key41": "5aBTRLLrB7B6vcAGREx15YwudgEPPAF9StkSYnCePYPJcezkHe8AcEzNjDMzLaWqqPBGJSXB2qAAugvrDDyaJvfP",
  "key42": "3sNaJvRVFNotpYnE12Euo8uwmj2CAwfqXmxRWxwkmrCaRqgHhUZisc9XJ6kX318BmR6wLQ3Ps7fJR8hy7bnCauHX",
  "key43": "B61r6tNKkC5q3E4Kxhg7jo5CqddFJgEBpYziA259cND9t2RCdixFqxzgeMzQAw1xpzkoCcXBtM4CFvJ6wpdtRQK",
  "key44": "5dbfPzLozNfgmtqXV6s6g4xPpfnAeMwFMpSdQzhYgoET5jzoSipaGEcBrLSV36oaHyzC6g3jpreYYxgcmtrZyFLc",
  "key45": "3ya8iJLt6oNqTY9dtgg42vf95ZvdHS6cjb9RBCwWcb6PZBQvuRC2LrrKYQ4DxEfNa2vy2t1Qz9crR4ub1y3eJbU1",
  "key46": "3DPEtTrb27sPboGK8NTyF7jL8BVzpcATxjwuFgcV476JB3j715HdwwSL23aMBYwy2bUFywZoqQfwW74HYXsJAGef"
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
