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
    "62zhJdESMYLSVSuPnrGZ3qvqs7UA6xyd8pHVapeLutFLnjtexW9tpMqFPzZiDT5Hk2nKNV3Jk3k2c5aLwChvuimu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Se2wReBmmrSTzU61cpkYsZynMeYVvDhfuYADXPqBN5Yje81Dumo6B9btZgn9tUmGncHCpFzo9nkScPax72AyAeQ",
  "key1": "3j5KYEduNXi2ZUop4Ha5utWV1JUEZFwrudRaWUvoK3v6nXPcVohwcix14qpufGxUFruLJakA77tCdGmL6YuvzNhc",
  "key2": "3LQhptNF9rdx5dBDMUiJFiD5RmweCXATn9unCFLaEwnWmGdb2cmPzELf4EcGdb7bg6uAQGz7YyB4L5C8jzULPqK",
  "key3": "yEmxGxPyufZmBFK74BM9d6LYPArzb9dtYWn9YwaAPCxBudMd1DbdQbHgdZSa6qdtxpXjRHq7qi7VodZWer7YXwq",
  "key4": "dX4Wde8ZBgnvRuZvEhRBMYx59xvg3VppxXp3H56TcLdnrsbLoB9UYDyUAPHMBiQt8FFRubDc9UXyit85jZDKctd",
  "key5": "8ay3nzrgFKNV8pijUGKvH2N7fp7FJ8t3yRJv7HW457E8hju8aboSJwYvWf1AATXGnWauAsVa8HuAMYiARKr7W72",
  "key6": "2gfcuskC7RUUmw2WFedJzxe52SoDe16pnoua25oRjCBf1AFPxwAG4sqRCK46ufpQbftsFMj9KwVLmeAAw21vQo6V",
  "key7": "3Zaq6QoEgawcW16Vr5C1GXgkWRiGSuef9ewe5N6CRtWe2Q2mXngxxHexrv2PDPemvovbKjBrKnoeuYPxSnkgZmGT",
  "key8": "3PL4PBFZvtpG4qw7QFVNuHL15xK4dh8wXwgZbwgFUjiCke7sS6btrpmxdtZy65fxfNDTeTBdCvnYYKSnovP9CtSN",
  "key9": "28EnvNhTenhPkmsia3Gfg8xEX53nBUdznda6QJccsWw4346TBsSJb6ueN8yUyYY3UVRBHox63ZKRyb13kxXNY54s",
  "key10": "3MNgW37ZmNSvJn3d2CftHWdLMqqwo6r6A3CfnJMv2u5zYrBii1qt66fcnEabJwsr6dKkgxZ3HdJmYmGZQGBi5V4M",
  "key11": "5Arq2EgKT1hr3K4D6FVNXfC8scKLjpa1k3XarefpxMrYegdnUj7br3CYLuzDuioDdwF6AWCBooDAe2vDnUaxXhnZ",
  "key12": "3erXiwZ37RLHEV8sxrmZDHVWZgfNyMMnSv9CA8of6wxNVYBMvi2YSjeVbbqA17tmEtm5Ps9udErCYeWDngJdNdTV",
  "key13": "3ZxWTLpJ89F35gJjQA6zxaJgymSGYmanLQUxMFNekskAQGSyUxDaGPSXxyDAxr8uv4Dv9avbyxxXZi6XDXmZJgns",
  "key14": "3QpboGcWMehVXNUWzZXWwbDKV3Sv5uXXnad14S9LWoyi7j3d5HqyDJBEFD3b1BuCWmnskTEmeswAVxpgXeks7sD",
  "key15": "5WYC2dAxUPzudJyuokPZAB7ukJhmMsvRw1ZFAxVocNcGuSXxfwxWmvwXpoe4NAQbms7pRpCDQyPbQvtR65B3Q7Cq",
  "key16": "4Xjfca4d2quN6MnhvRPAGUWLxuwsyXKUEMAi6NwnfVfzMaW4WNfrt36PCqn78oqG6GcpYf38ruTdYKFHQB6HLpN9",
  "key17": "7RGyhtcTjqd8aFR4byWCsJoCfw8h3q6oLYJYuQ2fTEW4e6PFs5NbNSUDimLyg7CprQgW2Ja7z59CQ4tWntaJbco",
  "key18": "59mhDrL6rd2R1b1Nx32TtjLxJUHTD1xJ5tkgR1XWaTKFWLM8n5mrd7X2FTifjNkHJvvGockEhB5G9PJpLNTg1ozK",
  "key19": "5nFyBz8g1sNudzqfrhREDWUwoFAnY8BqjMpo1DVMyd8hSQaicrppWmiBWNV3KxpQs7EDyHUKk8w2qY5CNNPPH23",
  "key20": "kZM8ruAatCGNzPA19hywcSsaKnQDvUJ9jbcnve1PM6gYFbqWbcewAuqNVRc6iscWxvbA1qVmRgRWHz1thq8Eoas",
  "key21": "3ShidLDiEi8FQGyubeqK7TfdbVHHGnkteGJitQKRZQtEVuCqfLtrAEiNbpyFGwF6sVYakaAj5B7YkQheTkY6BEzk",
  "key22": "594a3rPwBFSaXCR73HiAsHKnhUMbDWUZ7wi5dBPz8zbcBsKecCcwHBQQJnnT67ofjm5WjZeMgzitXQSq7EkuKKt1",
  "key23": "2q2SBqnYhT36LgbzHbhm4MHJoU1qX8vgT7nkkCTSXTE4KvrYXniF3yFY99nFCiJtsEDCd9bgsrF1qJ8k1moj2QMh",
  "key24": "28w1ckHC3G5i6TfgnUgyjhCxqYtit3KvEPmCYn7sU8fTyYNaMV6uBZL5FcFKzCeAfefi7XrcpFd7Dk4cLBnMBX2A",
  "key25": "3Fk2MjRtarHsuSMKqeLucyzYJKtvQbnHvBUPaBd9T84BMZsnjVk1DkyF3HrpLVBdf9dtjbDFYmhGmzJusmqHUNoD",
  "key26": "5ULiaifXrKGhPFpFSME1taHYSLAqBsPpoNQaYzvRkFL4JmLfSD7jdEBB7YsYbWQ5w7LiZKU432y5wuR71qR45b2b",
  "key27": "4teTGoJwJEy88JVviYjwN4EXty3qxwc45UUwcsSd18SpZpZPpn6FUorbjSFdZAz5Hcbr8KGWXAqFLxZww1R7oYYZ",
  "key28": "5yzugrQUQcKDma2QQGepzngtbJVBySCQwKY33GWqXwQA5EExBygNeShrexCiFvRdDmiN1a8dUVxtXFEY5fWqJgCj",
  "key29": "5GXHzX2y8XPcBfeffjxUp2mb8R4DRrY3pbDud9PtN4LNxeJcSKYSfS1ureXLzSugbnEYyM2P5nx1LVnZ6pFk2N1y",
  "key30": "2wJYn9kDQrNvvG9Vjk1TpyN4DeMBCKGjy4STJBcSmYooLzxFbf94BBjaycdwQPpQdRwdvd43UmRBEZULUhUrYPsq",
  "key31": "2KfEwjySdNUgr5qb2z6T8RvhbDB9NCc2oWkgxqcjgFbEEPkwDE5J9GxizVDEV6k6VrmjdX3t1uWQY3skMi6YhfYN",
  "key32": "3hHJYqgY25GhcNxbW2TGGs2hKNKjoUYycoHTKAzvt6yYgxbcXNHPc9hpRrAcUecutPce8edmcbDoQQ99GHhErTAF",
  "key33": "k8KwSM7pHQHD7ChMWUPRuaCyccHq2T6wo5f4HhqbYwAkQAnNW6PLJS8VQK6KZgKA2gEAjCBZ62DFEWgbt2FN12T",
  "key34": "VaiUaKc9RZJAx1qNKAh64r8y8ry3b1WrtjnHudRint6GevY7hffoY8zWPgr4sC3iVDJ9FFAzYiyg8NnxoLnNHif"
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
