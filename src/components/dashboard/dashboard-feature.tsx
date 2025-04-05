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
    "2xieSsWjeEABQLAHo34bBoTF6c5MpeZmKmN5UJUb5rYtdbaEzD8izUEkavhTdTm1j8nsLBLLVGEPi6u9Tj1LS6QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TV8m4Nd9LWW6Nzi7SCfUViL5WdFKjDYobRvVTtiXoxwj7xY6zoZCLHvD9DaTA6AN7CXejqVmNYSQEogN9weyXtC",
  "key1": "4PviyygzcVtdwvypTo7nifSLVYqdshiteYNVLvJ1RnpsAvTDQD5CCtgHRsSSXMgF12JeqXnuBfEBgvfzdwcVjj2e",
  "key2": "3LJDpCK9tYb4UNPnydgnptT2bXmbFz9pZHvWFaWoVtTEhVJ11bihRSjDN8tD7dyc3RJia8exK9VisLyaQWCtkFwy",
  "key3": "2s9ChJ1NbkqzYbx8rce6mUTKZ6DaYBawyTcso5LYkxPto8yvu6ptLWozBjN9zyMmRhGSdF7uCAD5Ab6153wakGHg",
  "key4": "29zui9cHtSbptbFZuavDrHi1KvQq8nounuFEMBYuBrXD9fpiVYHUvyaYKbcNDFSabJBQNUbbCtTrg1EQC84xMx24",
  "key5": "2uDxdAcdsf9o3NHhZQwiR2a2uhnnkeqBqo9mBRHUDv6N5zq7qPWmBS2AckoMzfiquwzjDmveSEdGciY5LEjotgcL",
  "key6": "JLfrg7eVm1BTF5ATXcYNPSmdgXa1jt6tkNxeoVBkkc3baJrazXH5XDb8hjXXu1XcaSj1QMEUPXFPaaBAwSfn7Cy",
  "key7": "5QWS7pPPAiNS5q87M1mNCSxgHmACQZP1d5n8jungQmJpcTAm3YnJFkYPciofN4rX5HB5DDea5614eYnkEvYkA9Db",
  "key8": "hjsBZuwMbPFAnoPUdijchMwPnN4oVr3rLczqh82hDKKh2kd5XCYKGZo62v5vGgpdAYJh3SZ9FafQkGeNXctbLkZ",
  "key9": "5Ek9HjD9yw3AphTm7pR5rvuEXRsxq7jUZVK9xtbthBQsgKrTDRzFJFoMVo62DWevn3AFvFUfj1VaG6RUPyWUcWvc",
  "key10": "3nroDZXsQc8WWk1q38qucRK37LKCBEY3TL5tbX2jqhG4reitD6hp6qwxoKeTHdVJFDrQ2U51bW2a5Yrtfu42AC6F",
  "key11": "3c3UT1nr3Zo5azxMya1HRYYeyTZ2YNyMPDN214CdpM66iuECQACy9RnucKGwkjv7VUz1brGRHmipig28eVjR32B6",
  "key12": "38tWKmhE2z2otUSVzaUUKA5vKUZeCypfRx3TqP4QDymvwM9dtRxcjFWa51G88wzjUPpMai4vMd5TDgHLEgthrBav",
  "key13": "4WEHxQt9GuoyFNXSy7u8LCRLekbNU9z3D42WQXmqv5Hiv3x1zCEvCy6EYJfC3snao9j64WU8Lkc9FbUKeDe3B5UR",
  "key14": "3MPZV7Qr4VFhV6dTGvBN2c5nSv9gtqWSknzByG4q1XbdeG7a5qH2E95eTdNBnSunrKE9sJUa3Ski3oKqbJUEhZxc",
  "key15": "126qEKzAAdiEgqWKjjmrNrAy6Y4kkjZAudwFUR7oY6dUdLtt5DM9CAU5zS6MKXYpipwCWXzhtsu6JktbmvaGGGXn",
  "key16": "SDbpkP1932BzCD5CKyjimDRohYyBGmQrUCp1rR5KjPMpTw4VvRbcZatGfb19SLp6J7cSsNoDZgRAsuGKcsrykgd",
  "key17": "5GVYyuhqFbmsZt8Z9KwpdBzi3jceo7aWB3D24Bivd9Xse1wJzm619NGgMHwTDhhnKTs2fGtvEhWs14fdJHSTdiT6",
  "key18": "4zpmZ7YxN1z1YhHWzQfDsC7mCRxUQLramFkcMDerrm7FZ3M5Qkh3nZqwVhKE8iHdgBfpjcxwm2PWEkH4gDhN3Yg6",
  "key19": "5fYpEn9y92DzksEcQTdCamitoYvt5FMgKy1f6GFVVYh8BUvXxKZmb49VErDdfe9rQMuVe7tG9kQcmwYQygtJSjLE",
  "key20": "5SKPcRP8r73d9oERVLvTgnqBNCrDvVGoobYu32vkqh8THv85G7pihwVT93t3EHXURD4aSPuQAvLPCmgtGPfjg3p4",
  "key21": "tbyP9XJtpGsiHxqipw9NFkoyRdCHPWHrZmp9maCTZWnmBdhfKjh8FKzjNXuQPBvwHZENPcNmpfxhZBQN6RVMRsc",
  "key22": "2Pzfct2L29YZuYXac1xFgBHMCEQKMA4gwjfttPs5AdKqVvnH6BtDPGoFEM5EUykXLXzZt1cX7371LLx4yGB2fHhc",
  "key23": "3YaTBzvpWfMUodBcvfpoky2RpBLXXMYT7F72tUHRLYzHuYpJwet8HEH58ByKEf1EmgbLprRc1zY2JH3ur3jpJT9a",
  "key24": "5pxVV3dpnAXP4B3uDTxSKPBMnvCzQDwR6wT8WxuGiM7dRFxSqgfn4HPaU1QEhpGKNGviLpVQUGFjNGsMbtRK1Sq",
  "key25": "4BnQk23E6jedbCTQ8coPHLACwiJdsLFSextPuuNPAgJ565Q7Taj96kavdq3pyJpvtgakd5kjSxiVmeridhjKVECH",
  "key26": "gmrwTk2koDkQekhVT8Lc6xzKvQdk6nvuVoxe11mARZY2k1Y2NpZhn1rHYDD1PC9nqgnoHxUXqCECTENoWTzYRLS",
  "key27": "5r3oyjK86zUCsLnp9qAGAjB6zdWaMHAQ2P9h9jnsXmRdNjf3tPwGsXedHWbG7S1FhXWzLHQ6LW52ukcnQsohhK77",
  "key28": "3eFoPnQwWfvGboi9mMzKriBrTU6gcPEBfSyedAJisGhis6VPAaGJPjqbqbfreWm3X2AstPDwfT7X7NH8kDFXKsB1",
  "key29": "4j1QjQaDxg2sY4MWgzomjQnANU81VSvgaua1MnXmeXgmwBKDxQCJCnsMmubjoSNNmMCWjCpbdRztAx881nGxE2yk",
  "key30": "a4CQSqXBi7LhHMTdkfCtgobjBgtBRT6hrxPsUpVZU5th8X2V23G3gh1yaUmyZVbeMe5bNYaMN3H6wcMughzUTcp",
  "key31": "3SsEGVYH4tGxnUrtFatAK4rMkrnMbcrS5aGwys7ooaEwbym9WhRPy8Tba5yXTnL3FyDHaagkAVAhxCvtJVVVDAR5",
  "key32": "2j4gXFiEko6pNrBcsS3SyBLJ9k7h5TrKSxs6Xx7FuKgAT7Td8HBCN4MTngqj5MTumb89fy1SsrCC1nMdDYew6sXw",
  "key33": "3WLX7usPnfYHTK98NJNaL5cCGbh31ufj2pF3oubd5EA7PoZpYixybzVX47xXhQUdXisSz6bYn3gG5W3aZc9xzLyi",
  "key34": "3wz7LhADQcEdRHmC4SdFu1aabfdnWNu8Nn8ZaijoLGEnpfgwJ9aMFJLPmfEJMutBppAjWGFCQrvknazaaRpxa8s8",
  "key35": "4VnmKLpx1ZqEfoGKYsLEiKPLTU4ucPP8tQAxPPE9bvNrC4WWnxDGTUAu6mYDESTciKsLY7y4sgLidQFds8J1ukMu",
  "key36": "3ErYfTUQUVmWK394r7KVy3WZmGs8FvSSwQefA23f5ZwfThvYHAKmNDz6WLzzwEADMNC1sGa35wm9nGKJhdfir8eM",
  "key37": "33tFFwnaHeYtWnmuaKkwbYnfHJdKFSnsc2EBH1aKa8yDZqfNkHmDoLxo96FwVhGBUH8bM1CnWeKhTnArcjjEe2G3",
  "key38": "3yDhWsib2ThidTgSb17fcVCTG8zPTUYrvPu8CyjzpTkkkYRbA644JCEekUgSLJaz9pu4YRs5WpYTw4eUzidoMwEB",
  "key39": "745pLm7qiP8QyQDLShADPGBeotfAc4qTq2a3oSujfFPhyEA8mNAHWwtQTbbCTpRKVkuHpuQvTPPxwop91NJDPef",
  "key40": "5D3svqvpjkRAiLTd7wiFDb9WRdPVCLtHVwvehT15t4Uov3UyGM1PPQtS1G5FmeAV1BVXCHDRZLNxc85qV7KHnfqj",
  "key41": "44TXi3MBwRj5XViA1Loohd4SPZVV7aZ1LoB8gEawbGHbkCcWmrs55DpR71Wtn8ikdbUqw1GnGsSCwU2vQ9E55qfC",
  "key42": "3eFtXXVnfLCrnBPpfboMy1nmwv1vda9XUhQoMjvNg54j1CmXcBPFszGb3rJSEdmsJxGJrGpDWaEVGdHxMkhS4XoG",
  "key43": "hGd8sXhAd9TH81JcTe3kaQsQEHGwzTw1Diy5jBB9gn7NTSM4X9SAxiZULVtyRuHSndQV9cEukUQcMLQhfrGxJwu"
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
