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
    "5PCcEz1SahqvzbQsnwXYe7SR1RziymtTtn77SfmF3YD8TjHDpwV58KvRyAr66qbYS6MYzHPUcxwMyPBzm7kjx2zx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jZH7JtuM6h5M9PjCEMk45JNwHBXrmjcwB6QxUDk62sQKfHhvvFEgSYcDqcNsimybveqnenWPqUYCvCBhGX6pre",
  "key1": "5auaLqZBijSj3PeRCEaUFdKyZpe71iTbN3RvtWVHWZWPMxrTXBc7VQAiiT8dvbY8yvPcM8jZa4TNeNE8v7XZfbST",
  "key2": "RAtUnThm5wxADqVUU4WSFZhe4k1Ny876PNV4pkjF6XMJenoEnppnranR8eXpnZUmdPJkVLh5R5psRbosyPsWqfh",
  "key3": "5ooqg5wV8PfcaGqLTuaRhY1zp8JvvKdvxaMdWMaN7DJ2ntiQWHUMina5Rx96dE45CEscKRwJZk5nxUaQsPKqDo4f",
  "key4": "3kzDepA2ZUxuUh4mtvPZq89rNGFTtU5Lyk8BFiVTkSkubUoTXWFXX7Ftj4gKbvX9A1aBnELxwRjAvnkbmTcH4MTA",
  "key5": "5ndTutZam2ixL1cxToYuKb6DGfGkJw65KcK2awJPpeAoVRAG5z5LEW9RWPy7HdQwbwqQieAeYMSNnbhFiKMKmj13",
  "key6": "4cuXX52WbGJd6T4MU3o1kEr7biSWXTcnJKgTWYuamnRxoFabq2CjFjErESjFdjpjYcE6zLZErvinPqUbPgfuDKJi",
  "key7": "4U8FGruoqrXaQzK4Zy9uo7JZfXzSoawfFGKpZMsMCbv3BFoAdzDAFW4ognongndmHk5tXSNkQ3XHyecay5oQHBv6",
  "key8": "5f9z63iyTtHLwxE4UvyYMvpX1GHAYKX9d6eLzxRscbw4GRZM46UzLHZiLWumUYdLGcGy2Lb6i1TEnr442yUXYZaN",
  "key9": "3Z8ZLnWt6frQj3TuutUZmADfu545DsecqzZ1Jr1Q4nQ2gvrDpSwcTz23HQvoVGQXDYcVVnrBeuLGYYrhUGgUhnrK",
  "key10": "2oPGBS6cDreuEVRyetRTt9jEmyVHk2GcN8BpqJyLUN7Rex7VkSyhNdHXT8y68mDQcJhW7ASJRWLZFKGJ75VX5gJG",
  "key11": "5u9NGexCxxFVVVhERuPAVYvetTyDuWyR7NFsCJdTZ4XWhTkUGoTWJiTDtSdfTUiPNsGPPwSnpvnD6CnDMcZVDH2E",
  "key12": "W7wb6b9xmWRLXdNzdxMwPBAEAFbbCKf2LoT9DA1j7B3S9sfNf6Xgv8hpdphTZmyFHqKPPzceBeNVSBWJmgYbyn7",
  "key13": "2nhwAKu7yr3GqfcCATvcxrNeVzS4TkuDNCCXZ4JFN9eVP3FJjfwq9wVQBSVa5dAz4EK9AW8brQBY8ZmLf79bxjtR",
  "key14": "5kM9CiwWV1LoFVt2r1QaVgfoQKSsrhFU6o2NA2WX6FzDb32QGVpsn9pBqx8imnMihHCeHzVAdhZnKahZxWTtPFu2",
  "key15": "v7JxTbCsFc4iGRJbHcX3rWq2esvsuzq9S6TxDpd2EmE28AXm3uWGEXJ56fjTtourD9WFq6J69PvnHHyxzx5GUrZ",
  "key16": "4UuHrQppNGvovGPAf1Mijefx1DmmzYt28Bj3Rj8zYYGcKN4GyBCZpcSUWPPecuMtkjXjq5sJFXY4ctvfSURRbWen",
  "key17": "37WXggFnNiTtwVV14mhmdYpyptA3QCuLA3z7dtDPCmBMME2PrcwP1wuD5mZcrqmBvhiTsA1BMuwKNznxCnL9tcGz",
  "key18": "wyD99gXtqAYGVJ5EJjNrjZhGLXyXj5zSrD4gFc96Q3kUkLevXcBeumi4W4VX6bJqEiXeYAZ6RovPEYas7J7Suvs",
  "key19": "34ePmiNPxXi5JPNxut6XWppmCFPTf23uSHg6vnVPv89YHG2dAKuHMHHYHqRCjKPfCLo45WSgWLJFLg73QBvBwDuZ",
  "key20": "JfC8CLgj9qjDrorEesWmuGKM2X8WxBE5i2ohH46auCKPhT3NBRk78EMW7C8bKfKgFATsSd9QYHEHYwFVQCmNF9P",
  "key21": "QDDBsuCVD5BvrRUPb9duKZqpXX5YBZoqbA87ND5dn8RtmHrkWB8CiZTe6hVzgZr6DqdWavxMQGvduAYtT4bJ43h",
  "key22": "3zdtdRrD2ha7bCqTkrfiNgh4RXbZUt22xDGRBDrnuNzURu5sWW34wgRQRvxWTxNxFHNTBQ4nt1U1hrPv5hYAkQ6Y",
  "key23": "4anTNEannej4hUKGsSxuX5SF8AERB4JKHTTNeyhyvGigj8wmuSjPQ7piqQknrWmMntbEuxmUEEwG4nvS9wmsrKmB",
  "key24": "5H4xp9uJKB188Uq7F9YdL8vBte2Mo96ucnabbq9nZ89GzCVuuDjmEcWf1vyaB3Dmo5kTpEsLe8iCaPWDaQJ2u1ZS",
  "key25": "5FLgfhGbMgTLhcRs2gzm5oZr2taJjAV6bEKGPAY4JB5mPqqBS6pUH7jMFX8e1bkRzLuWgTiBDfmKPr9PEdMMhTBv",
  "key26": "B7PERNsRkk2bZbESucAmADSrtRRqVQB25F6D3b8LELZZNSk9WXrmsoErdzVqmkjiuazqvupjXB6uUkZFxKd3taU",
  "key27": "56PKsRpXNyE2Si82eSDUvmsY23iVoKgBaaoSd9Lrqn7bmwVK2EXApJBf3WSzDu4P776R9jJyHuvZRLV9FcT88Tow",
  "key28": "3NiBXgtz2ZJAkBH34fH7oH6y37RwPBbcx6jqYjZxmpur5juvvmUhenYLMpGZZ1L4MGxgtaBqVH1PtmkzLqz84Z3x",
  "key29": "618SxUeoANmb6J43Fn5z5zw68ueku4JmdsUfiPrMgiX48pNUsD9UM5P3TZFmhzL3orehVnZCUs2nGEPz5857XSc2",
  "key30": "NEYqPFBUHgevpJmnZcfbYQ6euACqjqWUCw5cL9bPMrZcEWJ8bPgR5XDNrWnyTQwvhomrN2wwreDHPERWx8eq75P",
  "key31": "5B8Fw1qi59eV9zRkVw1CJeAntzMSjocLfinAzxAC3my9Nh8vhnta9ecQQkXiFHapqJfHSiDfd8PNPqQ8H7JLVWPZ",
  "key32": "4xUsVbjiBE637VXdhernYzt1o1cA5XYQmZsnCdHbXoM9X6vo9QzQihEfd3CA8dCWnjLxTLAqLViCmUTJPEimmpGT",
  "key33": "61JHknuJ1EjA1gc4nPYPvxpui7KwqZCdBS6Qt3Qyi7itDHRa4mc7Ra3LDoWVHqguWQYqCiMF8BKpXE8952s4jaM",
  "key34": "4bmKWtLFxNAaCWT4WZZCSpn34p8c4LMKv5uvQanvNvLsJYDXJDvS1SoqtXo3uSnZ1csGRDbvnwmkpARdiZ3XWs8F",
  "key35": "3gM6i7RUGd8jy6wn3zzY1fzqMdVWcW7p8LDww7CDztfMpNsNvkz4BVbh7aGS7GR1CackqUTLYpzGCMttzMrBBYk9",
  "key36": "2J2BQLAqqDQnY3aLKa48rPfh899qGuRjeRbhSamBr5UjXsdnzLEuWiLTWg5PAcx4QVJyF1dSEspTUTcdxycmoNQs",
  "key37": "2xAyQCsQsPKuDkCNxMnt7DzQdhSc7utQrNDpPMKKGRPmzyDJbDMHM7CeUACxHJ2jX2FHqVKWVwsrP1jwkG8BGi2S",
  "key38": "3JgL3uJ7W1jW5YQ5GpwcMe9YG2dtbx8jofjaD77J1GZv3LPagw783nucn6DgRH7a6qeQsknbj8j6afPY59nmbWPR"
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
