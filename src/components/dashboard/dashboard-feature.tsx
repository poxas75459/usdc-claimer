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
    "591kpbQD7brUQZCvBuA9rpWSzNbGufG3XBusFbDV9W9jZ8qQZSVfGLDvcpPeN94GubHddSWHfcncC6yPHH8yiMrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nzndHPGjgonQeaUcyTf7mA4S2FAKWpktDB9TX4bC4Cr5Gk6CVSMfd5UtQADiuNqVcfKJtFQiKnrEoYtcnEchTL7",
  "key1": "49n22uVqxB6iib9bFyYu4jhDUuLLhWPbw4GKLy4ofd1DXru7k1HoW2URiRwtGhCUbNLza9QqTvq14HkMRdKwYsuY",
  "key2": "3e8z74Qvka99o3S81KGY4vqp67URia4dGATEY4gS5RuEoxkwjAHC8eDyh7NDhfn4V24DqWMmZvfZW5HU8ijRjnrt",
  "key3": "5UExw4BtE8ki6jXfjfiqBwWXrccL8yUeM9qAi6yfcHiTHzFTf5Z1ooTd29hBtr45mrtZSyxH2hgw6BDuqsyE6ouD",
  "key4": "3SQirxWwf6dVkvJrHGhK8nw1KB9gFTbcbyQ4w517vhZ8egMK1m65jsnStSBqxXkxoYxcCqEeLPUDHgYyP16NpqyC",
  "key5": "2a8qanwn6vesKhWCYL9BimtdovQ6EJa18i4Yqt1BnnvxFkRd7pWe2pehoWHgXeZhy2Ek22qYKvJzHSYSfV7whU8a",
  "key6": "5VCBaBhbMX2vrGu1qPRUmE83gRjKqmhfLdmxo5cwbN4TprK9tBXBe635hGXn1tiWMM5Aw9wLzGd6rkaCGo33df5G",
  "key7": "36feSMJQQJN1Xmee2xmoz4tKinYfhLfp6a13Abw9J374Uhm2Nq2k1GcQdufRAZCopb7PF2Ajwz6WC1b1yt2gq2HU",
  "key8": "3JHfqu4eWZSxZcXUA6D5smTAtxXqNBux2mqWCBvoeVgpvtkbEpY2KU4YyWqeq6wXLpEtyiaFUbypxtRBb2Qc9MGn",
  "key9": "hGS18jxFmGVTLCfUR4yMHVtmWPJZdbmkSeowvYzeJ3JMzhT3TfAhZ5NWFea3pUkESAWZVkEe6xofNweaCrhKPX6",
  "key10": "JUdzfxHbhyRCw8zfQZcsUnBoJfivF4FLajkiLJ1BhXhDnnWgVhcor25nisYEXFEUFL3numLVFRLzpP8hmqqF4f1",
  "key11": "54Kv885SLNwJT3fTB27BvgT3ntHdQhfpzopCiKtHDuHFYuGpZ59ChyZgkNmsnwfPjigxMtugnxXNQN4c6RA9xHHw",
  "key12": "2HWaP6hQpfZ83ZZrDjNVtVFipKCTYJQpTyCYtCBKQs4UtFTrSG9jQ4QCVUFf1gvhcXdy83iTV5rrGtFnxtLidCZc",
  "key13": "2EMZ2ZJMQTzpgDBeM459f94xF2tFrQd6T2Muk6urXZLMivvXVEw4cJRRwXfngrWTrJczPzMhNrwkscGxiXSxj6cb",
  "key14": "4xxwWG2ftoRrQHABUYbM3GXhtuXJZcq2LqSxWFD6VKPcBE2Hgxesyn9qGR8UCqQrdmXkmJeAL6UdYCZhQZpRQrmh",
  "key15": "4tL1Y6T2synyEbcDAJc8zHn5uG5LqgCBAvseK82vJ6niiqHvNB8kL6uwqiy5BmJHf3fzc1CCCanUx4ZDkPnEX8d8",
  "key16": "4TPaUwPKkJ9P45SKdNnjzFgR1WJACWaQZxtob4ovbshEyZyydtm3o3iEfQQKiSAZ2qv79D6qHoL9zcP2wMVUdJT1",
  "key17": "UzSDvgNVmkXah425sKBWrnByWtSpFLCpqREby67Te2tJ7trKhxVVHbTHsWJTE32TYHmqLFbPrVDxo769cCh3BLU",
  "key18": "3imGEHYppwVSuZkJk7i7iqWfRGEDW3RdG3M1AJKYDZ18A4F3byqeqmTfKDZ9xkgfmxRamLwpDZosB6a7rtVwqUs2",
  "key19": "374GZVfEZEaKUQwkxrEfjp7smAktrjk4V6ZWFTj7hb1K9LjWBPCFDDRUquQBZBJAtXLnGTTJ2aYLjM8LhEED8co8",
  "key20": "4XxkSFFeYrcrGfeaCU1MD74jGAJhYMaNWBuwhW82niYrhtPSgi6oRnzv6YrvBZxPo1my9A4BPW3UAMULwLH9m2dQ",
  "key21": "yUdTq2zqfL5yJfEwq7oATY4HLGCBTvWYs4ZdZPvVPeeXCuBiJJbuCUzuKAmByiiBM7KxndRfcy5az5WCMjo5G3M",
  "key22": "4QirWnYeXWL97mTuR4ntzY7HXSXgYq7cCy4uSYbnveC7kscBPfpycciLTsYcZHSRzhEkKdQ4ucc3phwbKcEFvYND",
  "key23": "5Yk8favQu4RWyY8hS1yMBiD6qa1Kp1kmmdLzoTPczJjM1iLWe1wYo113Ej2M7NHXh8iadXo4So1Ccapz7P7fHkdn",
  "key24": "5P2ju9GvXe1oBFEDAqypQNXmd7PRJnDvR681NBMDxGzpDa9C22ZCGK6mGzAEXaHeuMsPdwSSRP8Tsa1cBpVoovaL",
  "key25": "2i5dXH5kta1DnCxQfmoyWf6thS2Y8XSgMProiDeJp3qjXKznV87CH5LKY8hzoteWonxZ2j889ipCwBSYKRNLZPww",
  "key26": "51nVR4Ne5ArsmbuKjzw9dDu1jfdVaEb6cB8ujhFKnRSsp7buFdN5FWBME3LzWpBe3p5nVh8JiYayjLHAfLa2DbrA",
  "key27": "5Bqr7n4Zvj64i9pP8t97B7WMxjAPkfJ6iy4j6gPyeE73YNVwUDs51NVwgJ2gWL7JMcA8u6jm7XbG8yWEnvJmyLxB",
  "key28": "33esmSUd4NmxBsK3NugiKiGjS1gmYbBHjMUPyBRNAS9Hf1fRg86fBCKiCb9tCfqjdMD5cBF8i7asvG9W9bRce3fE",
  "key29": "4taaoFnKdREKK5QiNnsw3HMryRvCU3Gf27nyeKZkMXpYuEuByksFdu8dA4NxduBxt5ayh2CHfYi4ZoPsAMnCUFKH",
  "key30": "55PXsRjExUdqaP1knpqMi8MQhZQ2qeHjb2ruELeXeNo2JybswJ5JnbhrBQybVib9vtUd2NH8yy48Lp8KFKWKbtZr",
  "key31": "4eBq44x4venVyCbPN4HAkAUtCH9K4igmEQzJqp9s2MnUPG4ydsZsKFDt4fvDP994t1CZKYnRHS6inCp3nWTEchSn",
  "key32": "ruFAsVtAdVCSGYiftc1MfDsLXHXc8Wqv3y7UtfUaSG1aiRczJNYb2iZyfJdLtRHwidXm8nKFnKcDMdbJ8eK8Q59",
  "key33": "5fbrRccCgKLEPsvPAdNLwHcRaGoUnr66KyuFhrN8sFRRn4NckSH3Am7pZ75nFd7va1MVYggBdThRRtEJtAFiSW9w",
  "key34": "5c67KxcQ1Tp9hrwohtx8BiUVQ2jtk9GZChrQ6rUA9jMyAzQgZhGNvHD1hPm9Na1HPPYtjQPd7S1z1LyayS5EGd6m",
  "key35": "39cuW7hL5VZfme2oK5ajnogCdijWQYvJEENFDHcvBiUAksABCB62UXtiXHAeTMxJFJkJBDwjMz7cgQt8gxUhwrvR"
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
