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
    "58me6rnpZ3UhP1gjUb9Egf5T5TxzQCCa65dVwveDrcXreT4DiuncqGbYtyhy3KvVMtczayHQem4nGmyadmMzNmJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3upzNWauAqJYMXJbx7F5rm9uwQyPQjt17C53cQkkY1wwj2cM5EHXcXUsRx9eZ7GekJvnYUEaFtNuTj2HpNCf4zjg",
  "key1": "3sco4A2oe2nGVEfLjBTpVcQz4CoDsfqq8K5VELCF7k8Zt5idXzmweuvZK71nJpdoNNKZ9zqpqHSd2Rq5wz4TN2mg",
  "key2": "2jdTsDVKaA1mAQzzpggq6kTrDHyoZHfr7SLBSQ2SNiVVaUsdKeHWeBFwCLyjx2MQbJTUExpc2vanmGzJvgTspeFG",
  "key3": "25bYhrBZCJJSULwGEogHKauDU2hptxskUZoGiSG6VCuTdrL8YdN3aminGLXM7HNpAnmGRzH9xhAHW3PfAq1ydRDs",
  "key4": "2BYWYg9Fudg47qLdUmYkLnreob9n1iuuxYFm1ktMSc8g8MhmC8m5tfe8yxFzQ5mdX2XcqtgBGLMwRSdE2TrSb6eD",
  "key5": "3wEWhnp6RjQb3EL45nJbGYPoWcgzv2K49BN4tGdtK6pPD4eHTrYFeTbHiByuobfWNChQhz3eEcK1cV8TqXbTcir5",
  "key6": "2ehAJzhtgKT4oT77y9Zxto38NUPA2QVZWJbsDfAdk6j38xQGoYnzNto8mXKbbrhmwBYJq8xWXsj6UR7B4eH18DhD",
  "key7": "2mKgLLU7uG44KGBmF5VXcDkYBDAhn6HTfaYF3ePCECidw12d8gPrKjEVHDFbjwDN4x9mQaRZ3BDvZtxWer3DgQbL",
  "key8": "5JUYeuT4CYhs4JNXBLciwTHfwnNnsxgCuRJFu9Vtdnd5DZaMmUeE7RKcTVqLxi89QaaCxvMxwFxjsYoQiEmFcK4u",
  "key9": "3k4SWi9wx87aq82fW6RmbSkL6u4BokrkhQytXSvv9unt8GNS58QRn9E42yC1PjrcEmcMMt6DzvfiySPB4WehMMqx",
  "key10": "4uMVXvVMWrE2p4dAQJtF91kGKi4vFG2tzbi6cNM7mUL2kJ92DygoWDdG6Hz9fc27MbQbacgHrDR8vsFFAWZsE5E3",
  "key11": "328hy84ATrnZzSZUDvw15BYxS6mSdY6gTE523M5kgCVBkjH9SrxWv2p1ZknoawUurQnFmxdzR2Zz1wcihMrJ4gZ",
  "key12": "394qCm97RmHZsBVeqrNyPefPvhUV6EndH7GDto8nD9g7xkuyGkVL6WXxFRghmwLHvFsZB93JdiDxU38vGyxjsiUK",
  "key13": "3nWgusEbFy2Xwerbb44EWmHVJZGNf4QyczEBm8tXnLh92zTZKJwTfKjax7PLkhf4qJeTJRmWbe6GZMjxpbarjvoJ",
  "key14": "fU5JtYL6sUrUbcRv4KRobsZNfMGECh4HsfvEV5WsERcGDTuJV2DndAoidbaMsdCFRc1QCcb2C2y6hkiyjFzthX9",
  "key15": "3ejqgHvNedsL6Z498YW2edfMiM4exbG2kzQVahjAvzGdRbZ8s6muuuHNFxpyCggaYirRmTSTANz96DJeYVarcN9a",
  "key16": "2SL17VoCBWSgspK6sn1xQ339h9K4ZUnEeXEKfT4dDtS7hGPQYWpSMhezv54QoNGWgqK1LMQn31tXk33Syu71TQDz",
  "key17": "39QQnh8Qrm5iATVfLup8HqAcSnUtUFJdWkLMobic4hEKdrrwj3B8er8LADtrLUumfAYdHgBmEoaoSsyWjskEetCE",
  "key18": "BhL95zQuyqhM8ny4HibvbVsFFSL92vi9Hq6ugcW9VA3pAMo9KVUgfce1Gak2bdVTsWPbSKafhEiDZUPTeJA9S7k",
  "key19": "2vkUH3b6EnjRSrz5XWCpM46bHARUHQwaemQaB4Yikiuc1PK2oPT3PGEZrcGqBnzRiewr5KuD52GrFF7MXsVwC5HM",
  "key20": "2usdEvo7jMhEgQFLEvSBHZYZFdXsJMeW4JrSqZ9torZiPqTLXT23Unh8bdYuZzMeH3Vdm12Cp3tjV3gFp8X6cVxS",
  "key21": "4cp7dp5Dxq6wRrRbbysvsKvW1pVdm7ANzGVErySghJonXKjNgpeenXWMigFBSLwj1pho5HKPczRtJkEE3UAVmL35",
  "key22": "1U7UZXgoBMc9VdW8t2h8J254aodbmTPZZPQ6jqZLYe1RJczCyreKY8z5U12qcdmYD9zHJ5s9MVCxsotkAKz4wSk",
  "key23": "2K6SKqv2pEo1hZRZUhzh3hmVcw6dQfafZLAxK9CnzNbECEJnsmtAHPhbEEArcyNJyTFEtn2wa8W4DBUdwujXd2Ww",
  "key24": "4sxVTWCdjXf2pV7oWrsQxrnWtQjXZVQFEeTGqkuTndxySasKaNUa9WkDzNdaGpcd8CBGJTKdFU8CQH2meAcSW9UK",
  "key25": "2nHxqf6M3HVwMY7PJKEF4qPmy5NWNMTwdLjDJsG3UWHJcMXx6gHj93k4UjWJNoBv9QdSD2hsA3sjjMTrXh9KVnP4",
  "key26": "3SANGJj9cMtghuk4YVVADgM3c5KqfBQMCnpHCGcAGQDqyh2sBKSBCwogJhuN6E1kN7qj5U7yystmTSf1uLJ6gu4u",
  "key27": "zHAumxJbBz2KEizVYzy4C64cy8hDTFxi5NQEx6Rxm13VZj1LMKXAvGvHuNh4TYbnrfvR2XMuPNDi5tf2KRiHVXY",
  "key28": "4uTQiYpeX7Sf2YMDJUkfWB1QcxxyurpRc9biqiuLF3NjLtgX7yCg8VfTzFtAXqswcGw7Je5rMaxQzx9J1F4BHd6q",
  "key29": "3L7ibCttQGJ8wZ4HaeeYoaAoAp3B3GRYHGR9ap7hbrcychjGuFDYn1YqGdf5iq2fzgGP8nPLhm4GyW16N9XefbYf",
  "key30": "3FwbniKLPmTjzjG2BmXuNvXkdn7YkG6LUKmveNDtz9vgBfudgftfTHFhAUNkF3ZbxLV8xHW8cuMjXhW3GkoBxz2n",
  "key31": "2MfCZZtD5CDvVPXkuSKNA1w57x4yqBTCmEgg7gRtobsZwrofxYRdt3UJ9WVfXPDHYZf6NQaAFDW4vrxMGB13GhVF",
  "key32": "aVS6XdtgYPKq8oVLMPXCZZMJxZMztMzqy8UAS4U5Zi3JdjgCBMZP67dXFniBEy9Z1wkoD7ifyyfzjNXyKEEvkSL",
  "key33": "BdoUep3TTLunqrEpar457f6QoaKAt91Rk24TreQymhX2GqEWNriNEDCJsZev4H9cuawRqgWVAG3RTEvXxMiZNHr"
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
