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
    "4tvrHpEUcmbZyHZsKXU6uLtmRusP3peFFKGiVT4iXtBmhaccw1pGDSmLnS16qgm9ixMEez3Cp6aL9b59mzwRJzCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33eGecdDNz6YTVmSPK3HyRSzQYMWHiQ7wRvrXpR8RAyFNJkQ8kFdWFb4zauXFmYN6ZsWZP12MBpbAdErbBvz5CXR",
  "key1": "2R9DHKkg4Hki2Y3mmjExKUzwkFs17Cz13DdsKJ77hWE7p6JaHD1yLw9SRrZ28c2ZoSnYJm1jQc6cV4eW8vDk2x3m",
  "key2": "N3cuAz4X53PMt4bhUntExK9eaAaQSE6RcsbC3R8XU4BaroqvpZEdQrsKaCjqWn8MZGCWPXic2RjWmjzNkGbSMYH",
  "key3": "RiiRNpJgjAk1RHmtcaBPU3vusLRTZKEUd3ngsg5DAjjg7yzFmA2b4KY5tteQviXgSCAeP9pVmebQH6Q2qNV3TJS",
  "key4": "4f6insswCHN8epgLStWVCNuQPxsqwZNnKgWfpbod5WFRPh4CJ4tL4uJcyzNqv8kbjTDiZaiW53L98otuvz7R6N8f",
  "key5": "2TGT11uGudrbZ71dR49DUG2DRUm4QXxbU6r3mzTbySZ3HWrYhwFRrVFrkRPPsyHvVeubg4ictvMv2Xxwg9iS47Zm",
  "key6": "3svHCbHmCgBWMy5e7cDHZJymUGVFPyVeftdYoH9o9FgJdq1v1whaeo5HAGVHqvZ19WDrEJz8AbfLyhFVWswYKicJ",
  "key7": "41ccQQwFF8abHpMW3BVpAToNYrCrTyPDKpffzjC2pb5XxBB3qVK1fMxJuGhrKwp4mG53nmJwHCYVo9B6vGDXyZ2M",
  "key8": "2wdnbgqmmPTzVez5SYVv2eQXD5KB2ZoMJkNTbapSfzYyoBDCe5invU1hfnVjiwzfwwcW2GCDhcqJ63aWEwKqnb2b",
  "key9": "4gDT3HWgvPt4NkYmonxpSc1ToEdGLHyYdnj6ajCkb2QJo7ZmgGK555YrRPp7qveFXeKd9E4VQhTpNUG3XEkAaRjn",
  "key10": "3uynQ6Vyr2d6VHCBqQw9kP4KgHQcvE1BKzT5z8PrMzXskZ8EAXxHQpo7zroNa4VRXLismjeZ4i9UYiCoaJmkWgeY",
  "key11": "2yX9JAVmZViJ1mtg8AbQUzbZaVYojqiKt8JDhD44mGganWKn2JtjWG3crrMqwMokkTCQcZq9RZRz39YPHwzuLRz5",
  "key12": "2hoVhamvb91TsvzHCPqi84GriUQipfydnBXcNydhS5vpFuXMXHfTgGpmjmrbC7UExK631tgD3zu78JQ3ZHGxnDy4",
  "key13": "3ACcijZ3bx8nHWBoNtPdav7617g8GkDWULHp7qYyVxkftdD2CyUDUdz7bWqZD6WGBbr6tuzqApY5oD5t3PYw5CEa",
  "key14": "4emYFSHetYvzjVUuRyYRXAFTS7AV9ZbFBMhqUGryQkYzNACcFHmTuib5q4LDekwTXtV8mT1kLxPkeoiRqQ1vtrvm",
  "key15": "2dNKnDuvjo2WySKpXmViTabfKgX4z4EUgxdDrU7kHgmXzQTUz7KgLv4djsTAaJPiANPBEwUfpWcsJPAskrFxELkF",
  "key16": "55SGjYHArwmdCSxrDeV6NbSAk92spQmEW31zo47rKVgCLt5pqGetGfPfD9eeZpvXGXpgE4YhvSRFJisPYgYuN2M",
  "key17": "pL4TrgsHecrrYPp3urLPgDx9ZtCDVQkSTiHQQnf5HPhUsW38WqwHY5LDXQFpKx9qwukbRv7fWPRtYpwSBsz1z4z",
  "key18": "2TQ2YKWUUqV2gCDLgqD2q2HLMTEE5iSgwFKMmqpUZxtxKVSkmPcs5AnaGviLLoveGboQx3En73DUtZe9ArfxrrPy",
  "key19": "5ZRfy8Yxko9akUdZCUSJm4M5CrLDS9srP7PwfiiRJmhvyMwurj7niau4yjgk3ayuo4zAGLDa5NVSQ9kmnzec5dvx",
  "key20": "2JT41Qy3DU6DBkQWfZp6dpVQTcF6LM4ZLYbMXtZRfACL8yKwry3ppcqRZ6tYpSzYTRbvPdWJF3GSQoRL3YcjCuFM",
  "key21": "3EKp5piwzDfdpAFCdeTucgmL5YDzG19MRBAxW9bggdvaX3A6MWbAWFN8Sh5aBLW8v6KDS2r44YCzY2pCdJckD7R5",
  "key22": "5Z3J4AvMYqWyvT1pv5EbiFRw7f2T56D7RqxY4guLvfnb6CsmcmjoBQ3xtq8MwXYTr4ak4w9zxjySEGLQrPo2Wd7y",
  "key23": "cBNguJYnfajUZLWVdvX2SnwiiQ1qeLd4KjkMQLebxzezr98zZb9StZ1ZGLnj1cUagMbVMNkLzL5vggsPxsnULx7",
  "key24": "64fTsBZLZ9ZVyyPdBqHCR53JaQL1NCVXEdNXwduQFtdYnCdz363wpehrqd6JP6zobEAqAbitpuRgYoj9kUvUBh92",
  "key25": "2Ki3jkg9FJKEv3UWepcKyTfryhWSfb4aeimo2axnCddk62Vdy5VEdsjXfBBFv3VncbUQtssFbayoaj54M3pskCar",
  "key26": "5ZwsEpXKfuYWM1oKxVVqELJANaic8wNuDT5vdu3iT1ZiWnW4bv4182LBLPymymd87oy2CFEE8kK2VvtmKS9JHbSy",
  "key27": "3PMyFSRdY7iNhZ7AB5gtu16pwz9feUM43BtYoRZPPdwgsLDg9SaGpe4c7K2c9ym8F7PAHcNonpgL25AjpqjHA1DD",
  "key28": "2eRWjgxB1DXDUJeNtt1tdauutSfCgGGUgy6fStv92pVGvCBJ1fJGMDZf39Q68RYcP871hWazk6Rz4k2TjMhtK29S",
  "key29": "VVjY5igwPqZeiav6QW2PTyENFG4PKUFDsSMoDhiskt6DTU6WdbfmKn1TPQe1LWXvpx5BFU6Yykout1thbqqbQrm"
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
