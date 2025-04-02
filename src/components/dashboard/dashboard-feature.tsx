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
    "5T8ntdgMyGpWPBgBZKuBrrmwx6GWd3pSt5X6WDtxh132tzdqRZKcTzc7mog9vxxRsWBqnvKWn3V8XQApnn4b4hMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5toJKUeaQLWzEGUXps92J8iqXp1DRvhd541tLbFQWsKXVoj1WNBJzPkCpJVbwgALhjTbsm5SCgK8XA2RVFcfHari",
  "key1": "57YaMu6KHssgL3A9QDYuaJBXmdomV1pzEjRVkZPLYXA1WTkxQm3vcaP978oxT6MkLwCB4p1mbvtmZ5Z8U769sJzE",
  "key2": "qo9zGBmbcEscccm2HLakctPZUrSn9Xr5exNDiG7G1eor67fDkMqgXz4JVD2fbcdmEADaMJkwhmkPDz6omNDEnLG",
  "key3": "5W6HpodhZXGnLSR2EHNb3RVsUVjEnLAX6be4t9kxLMDjueisZAgKxJwP3A3QekpJGaaBedBX6Rn3qq511g62qPiM",
  "key4": "2Rf2eWPUcmPvVb9DKp5nH1KJvMx18nMR7XQa5qMWVUu589mD9ZXcizPrhCR1cKo7BUCAR1EwYsgupkvPZQwkeyy3",
  "key5": "5MNyhjk2xBBGZF2MgqQSiYW8yWqxmnomKDR3EsVPmZnpPp6ZjsWzX8bA3ReJx1aXeD5eTc2zyRymNoEcdEzNfx9E",
  "key6": "4gPjmDP3WZGwRqndNgJFqU5kUuRvWM9wZsHxtuRAxrcbCLvZ9HnW1GTLmenhd1CF4qvvu9hxyaHmT9cZc3aDbbYX",
  "key7": "38rzNDgUM7iUEL86bNLQZ9zuxqSLMW5aymzhFChHnH5Pe46u5i5GjUsng3eiPvhaamq7vQHdWxvUvPBVKzLvBYe1",
  "key8": "3yg6wCkjpQCboc3TEzQDscX2nTDPNLkhZbLoyR6WmxaNNPVK5i1RtpnKwZwxS5gyVE5PPvBbGadccdCv4AcQeeUA",
  "key9": "3EgJ3Q8Sf8wMHBmBA4Neud2Csz7XuVs2CjS7JaLVgoTmnryvTsjWqM2riuCfH7cLooxPL3LrjboKeC6CpW7qpaMs",
  "key10": "279pZiosA1fjm87jzCsEDK9b9QjxJtgAi7jFgWMMT2nTgmZ6dZoYrcQvDPN97NXiokrLWo4dbMEXdamXdLrK957C",
  "key11": "46cXg4WJrnvWC6FYeQ1d8QtEqJ3pcy56YxEGZJFxT7AdtA47JtXJxAkeasz4PjAWHgqFo7BBFvWUXY7i5e6K59BA",
  "key12": "2GZ7NBJPJB21so88Ti4wuwPEV8tFRyNNQ2VarSbn3y1JEKeXYD3GXminpbrEFi2EbXQzQsTKKsum2UzhG9QAKMUb",
  "key13": "4nWESQj5dEof7eBvbsDoY8XjjsggxscLnZivg9X6b79F3N5dXtNPev8zZUh8c7ffDxAqM64RbETtQLVPdjm2Q8JE",
  "key14": "3gqcPoiMQW9ptF7SAByqUj8RnyEgxQ9SQbNvJEz9KYs8cN2eHX6rhZySf2PStY9gcUHZerhPGDm6rYDG5Ly5xqdq",
  "key15": "2XD4BEuvZVbqc21pi3Qr51vE9Z7pXEuhBJJ1RTRZ9JmVGFXBUgdsakvKGdJZDRdVTcz9iTcAcpVMUxrXHSvHwJpk",
  "key16": "2Yjy2izAKMVeuRWn46DwAHiE9Av1QQ2dJEHrhL7LE1FxCpEYPBEqhSFi8teHf1hGmYrdCHkUQQAd87JgsnBFJ1Sw",
  "key17": "5fxpVeEW2pJgfEZsQ8gtmbNqc1MFPxqwUCZ5jxsQjoWjQshFyvkj3dEmcHBanh6nA9Yrb5qWrDFC8NfVhUb9pqfQ",
  "key18": "3nLqZwKAMajNeBEv3tf1EDyspsu3JKa3yaVrW1Ryo61XcbqYJcbaTQm4Swm8mhq6oaUhwXGbPmSsE5tp15EeEJGa",
  "key19": "4MBFzwYDfJi3derqbtLUCofLZthoA7C67p9LSEQ5hRxsW94A1q9ahkeUwPaxhwA3DKA2LVQgBia7DrU9aRFQFcRX",
  "key20": "5y4CxHPZYPAq7H8VeYSCRjdnkTbQBLdp7HiXNRa1ow4hkuFLAJbPmh6VkuRJiVVVH5jpfLLrvB2mChY6zzT4KRrC",
  "key21": "2gg16EGeDQtmKASU3FrR29SU7ggZEU22eyqiv9rBN18tTfRxTsajpK57fNZrey2V7QupF9cxm3MrcmH1viLCFDCS",
  "key22": "4Kk4fpQdUCYwoFciopoW5VQ2i9uUBHVKLUPURkRz8JqnqjHUgKZxcNovSktQxRtPrPxSfHfkFz3sGk1xyXuQdFzM",
  "key23": "2T6XDewJBmfAbWkEdP3xghmndi4uAvZnBUUJFmoAHm6smAf9S8jb5xzzqbJbJhX3K2XNP8hkPKJiosVonSdk8joK",
  "key24": "3aHetcoBSu2e7gKWg5kb2f6kcDH5ruabpuFA7sdjKDZnYCu7ojA97wCpiU8iQhukx9nrRvzuuWZzxhPfv8R5upSq",
  "key25": "3Yx57Usa2oZzSPjHLe7WHgnn4hcS6UE2U1d4usJ6J8jgxFYp97gPYmUpcqD2g2RXmGXhg3ESJR4rUegKAtiszE6t",
  "key26": "2X8W4mzvfXGG5M7vmAc4w8HDgHn9S3vX3ABxiEsieXRaLeDtH3h8z1fqmu5V3As7VuXK7aNQkBs87WRCpDxiuZU",
  "key27": "3FLbfmAnct3vpVX2mP2sMJSRsK7poaAMo14yXPUZ5snQ1i81GiVCfGNuVt4TojofW5aBSEZKJDLYCYF1yM6YPdoS",
  "key28": "4RbPbeqXdrdzj35dWAscgxVnzdm3LEfjiE5aKJiXxJYVtbHocT1s7oC1nNfDBuL3FCY4RCGHk2Q5wwoNyAU56fum",
  "key29": "2wMMArTKvf5uHChqPyj8nufYgugJTNRQtiLdsfsLmU52NNXY7dWJurifxF8dK4NHyD5tjFmD4zVX8FGrBQA3mkUu",
  "key30": "64fnYe5k3SdmvkiiDb2GW9byecPx5ywne1vM2u14QkJy91xUDv8EfoTNGVByLR4LqFnUxtivPsHP4TbTF9Mnuojy",
  "key31": "4SuhbofEfWSo5gHwCR1zpfJyHovH6sbrTei7KhKVkFXUfCqQM3psHTijbVsWEtJjsA8XBE2d63zqyP3hQuRyxGrr",
  "key32": "4rHuZeGTEZRBWSzutQb9CHEkknvWz3HbWJw1SZYcXbuLCZEZgo5YGFSMahA82EK3xAXmefU5J99grC5JbeuRqw3k",
  "key33": "Awn5Nb3hhMwmbKy5U873nnKLYXq6eHFnsvmxmjYQwdTmfEPx9VgK4cEMbXW82EHrfRVosFwniUw6eSqvPBpTULY",
  "key34": "35FZdZ9QaN5ydeytS7zM1LeaJ9LMWygeXBtRjrCQSinHZFFJQjmbfDL6fzfe7TDG4cTBzoHzdGSRkkUvWGDutYfu",
  "key35": "46LsK9gn8FDeSzXWqaQwcDL8tR1K1hSiSazFsnFGEE2JSESU1wTq2MnpbvoRKnt5KHu5rfZAeFvvHrp1Gy5BpnXz",
  "key36": "2y5LP6CxoZge9tDzXXA3tSsR8NvMpBpuyCbsZAsDDx4khXi24cpzxEfKZpTehq1rF6Jr9PiWchpzozQt2LFVxDSm",
  "key37": "z8Haes8hQzTKiUof5ecjHzWSjNT5wV2vtQzAq2ytkvDo4tYaYdEsgcEsU7aQiciSZFGGmXAYSuAWzGp1ZD8daL2",
  "key38": "5Q5AFct8niQ2cn3apC2Zj94htUQcaDr5h87kkVsQV9uUzaCChJWqfwRrjwbAG3jDmbE4d2D4vMXxKWxSNAC6yhQP",
  "key39": "63mtoQjpFmXFaMNW9f8YXQn87JcatQyts6m4owdH9Aiio6UiBBgKiaLBsy3yrbyXG5mNe1TJYkxEXoLfLxvmnE4S",
  "key40": "3n8BJfYqREini2k1FAN5q91qE9MbKVjmMru63MXDR8kqoJmwinL9ZKnqy3Wsa9LMpKvp13yP7J8p9DAcVt8cvFWm",
  "key41": "3ESnmTC2b9mBt7AhMeQGr9k9qrSFsvV5fHnH3hk8mMuZ5JLBBkAHQHPFQ2iTL34PpJYY6BUa81PxCYU1g4DkZTov"
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
