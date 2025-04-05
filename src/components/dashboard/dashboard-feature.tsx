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
    "2pP4VkCpC7aoj8wH8NazcU3G1ADhVVdp84V3JWhKgnAbDZ2uiDuP5QnvUgNFsunGNNeLWXMtia88Z6ajxZo6wy5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FVt6uLJANCh5bhJE1amLUrShLFKUkxYfedXXEqy19A9uV33Mdy8brVzCZfRUQicPgZcMXtAZKzgPFPN8PBD7BAa",
  "key1": "9hgd6EpFkuno6WBGx5o1q471nJckLsbwBpWw8uWbUTFkv7Ki9SZiyRJqsdLCTsuoeKhjcsnBikVdK6MxpnbNher",
  "key2": "61oR8izPf4R64vVwmfvUrtL1KVXryijA8f9amkfRdgMnAtAsng4uizmCkWhL5W5MtzPvC5gQSJUcVvUC4MmL7Kjt",
  "key3": "4hoWHo8oYAWEQruoc1dXWzH99tyd6P6gtwFsycuDYYSt52Apdh9oWb86f9wYSQwTv3ZbrrXUmeYxKTSkrHvd1xKn",
  "key4": "wj8fMw3xDUQ625Uk7AxDsrthhKkZ1vFKeAnXpwPVXSFoZzSM8Z4oJ87wH4sfupM8gXqwPRNRn8pejaCk6GxsdVh",
  "key5": "tp1rohME6cWLUxDVw1tnyC8vuLC9VfWF42g2BtdbDPcgZr73U6t9eYqyc1Cf8ULdNBrms1CUwZvzfM5x65iiWNU",
  "key6": "5jUQwzLNcjqvJS7xfmL14wpbahATVi8KyFEsoPavk1qFGxp3Mg79LbsGUmcEgarV4khb5iRnv45ZZxKfw6pVH8KR",
  "key7": "5RhDgqo79DspShJQv43FETqdB3XHeC1Yh5Phmdp2ChrN6jU22xNypPnkbezc7sytquCMDs1gcuczSRKwDEDgrkPE",
  "key8": "4PctT1ADcr5cqMpcbZuZhVMCsmCGpByTJmCy14n23sjEfzMeCeV4pfJsVsvni68KnREpgetWoh65DjteGUtZDs87",
  "key9": "3bhAmousJ1MtWuTBDdbJWEoreAqyo86exNwHLirS3ma1SkPsHKfTRwtDmwSUyWqnhEENbW4ugJJH3zmupFQpGgDU",
  "key10": "5XZoLufHYYaNBT4J9zWUacHDvfn9UjXYLktLvgSL72LEy2rFKyBWpAgN5pb6ydKpYHHUdzTbk7k2EtafLWFirPeG",
  "key11": "5MXeuBB2LrcSCZCPEeqde6vkUyVEvdqNwQZKGznQbVRCaLCmZRWi8RvNo8aHoCgXcXnJMBn7X5kQznQNYuSB5Bbq",
  "key12": "4ayTuSy6HqWjL75HB5RcQYKuNF8oNwZwocMDYdD4wTq9d8u918yVrFQQZvoKfpCh3uDQsPMdudXzz2Tfw94vSodg",
  "key13": "5HRqCtNVzyortTqDpQ6yB2YBuJEqVhtjGkry6jypxk5PWaj7Lnu13FrUih3eFY9FH9StsjAfeDdkhLanih5iw6Lm",
  "key14": "2ujiCLpygLaiUBNknqEBfdXxa28WC7GKNBVj56GAgLtuLuQdTA9zTKbCEMLrFxU9guhPbR4BuQnsuqmdhzXdDVQN",
  "key15": "2rUHCC1s1G18ytk9yMnPXVVA9FDfgBp6ChipF6p8uykazas1Qn13XpZfL4Kdd7YKNSahiQqmDWNarH3KruWYynwb",
  "key16": "2MdUyChoHWLdGmUWUVBuj3KjNByqhcGfbfLndN9tRFS2PsN8WceJsZLVXpeirtbushFFMEwLw2jqhTXovcMMuRzR",
  "key17": "4y1PHj2uFxCev8ZcWcvbbNzRPqDEbhRCcfLXmYzh7siGbPQcCCPPHv1N6Tfhz3Am2RkXosb1izjox6ggoy9bJtmq",
  "key18": "5LZGmssmdUbLipHKzPfjdHRyBPK7HfoMhxt3UBayXjjFZV9nbV3JDLRPWF5tcYaqYBW9AJubmQL2Q7qFmvtVdZEC",
  "key19": "5vonAijEegwrgia9gRGNvSLFAediYDPdLMZyoAixMet5tPSRrxL9mwgmL8iGrspxonZoMPZQJzCgq8V3D3fTZhMC",
  "key20": "3YzyA8ngjz7YuvejKe5Tpt5jXKZYtNK4kiFzmf1CfrkczXJ312fPRupndXJSEqxBaXAYgbnA74jHtDzPJ3rqWFh",
  "key21": "2YHoL9C5gUhSeTBF51VBWhKebtQtRreqJYo9zkevSFXxhLrWQjo3ZjZGsuzet38R2E8zaELj9nR4ZhjP1gcvhmKj",
  "key22": "37H6DFGa38ovtYRv6uWnV1fV6JtbLWBjntNGCZq4sJqCmmiCiYGDhKMhuyf7mriXV6ZZ6mipToC2MUH1JXdvcein",
  "key23": "61NCFzLfd8r3W3Cst4NgetMFbdxSagCWDPPYHGUA3iA7iYhwzdZe3akVZGX4wWwM6WTkWT5VuLveKkr62yEjxzcb",
  "key24": "58JBKvvXNFQSVi8RfiD97qputJdADYHXQnUi7de4j8dgBQFZhD2DeSGfJ4eL3nvZi6jDD7xDuhPzPeXRxbiNQDCa",
  "key25": "RMEda3UF4HqzHvPqR8wReX17M3tFgQepyVg2RuojQLk7NF19LRwgRH3hZaEMQUd3MzoN5UTVcdDvfVZ9zXbhu26",
  "key26": "Q3oEwwSABLs1vXHYfqUugNtGyp6VZuo19vZh3dJkeL4bbhtV8ZF9QJePiF1nGazdoxCqMmdy5WUSzFPCoQiSf3C",
  "key27": "tsFMjERhXv5MTLQcEWkDmZ8B1ek9iRqyLw39B8WrfH8eZqeyDrsP793dynktMcjx258PTpGnBQ53u1kMNZWH3qo",
  "key28": "21b98YGhjEfCTRMVpseaYoX5Fw124FoPfKD1EE7oZyk3ahecwtqH4tywPXpE8FkDQsvr44T2tS7DwC5aT6XZZiri",
  "key29": "2ECNPbLKatBMMrwAoaN3rgAa5764hfDwD7jE3v9SE9DiCpqXm3WfUy8zKsa581TDfVSf8qz1e7B5nz315zHCXxBt",
  "key30": "4sszRiiFhRhKjsB1J5gyRWNjhiYq7d5uTNDFC521TejcULwCMhKZQeSyCtX48vnSdFkwATUT4tcj8AjhGbXeXHVN",
  "key31": "5D31y3iTCBDuCfwWUKKMGtanLLMX3f1JJdPyihJtzxvGnSm57d1Bh8uZN6jLTUi8LTfXD9hu11zbWBy4aPutgAPr",
  "key32": "2BQgTyHYW53QPH2LiibowhPTSewbaaqEWiHxKrxvvuSwFmSNBAk9Y63GQD5ymNAosQVdKVFv7Vw1m7kVbSPKRjnH",
  "key33": "3qwTMwSNStUYwG8qmSuNXubBHpicUGz4hmpFj9GgtmKraqH6ZqEfKya2ZkVcAZaqy2VbqqH94U2dXUppi2HbPM4x",
  "key34": "6X76YtVZ3684kYQasxPyhC9yRZWRDnENowwmm88cPg1sxuzK7rfU1DEsQvC8dE7qvZ166ZzP1JbhmnGFcowHhU2",
  "key35": "35Z6chRr39w7dSh9rmPcNc9bDkA7JycYb4qRZwEpWgq3SwiAG1TY3k5iFQohZTYzU9gSybEoRafMEdDEX8RXTQL2",
  "key36": "2m256Dnn465p3ax5b4RzCWiXwpc3QYPYFQwXnynNYQT4Do1QuWKb3trDTimQEWnWHbWEzgRYXJRGepsJ1xPH3RCZ",
  "key37": "4AqkVBXBNyrFUeeHoHEEaXnK42Ry9aPVzBp1zPs3xvJG1eMTGA3TB8v69tuYBY83Vf7bfSDU5ibg6Sjk69dm4FhF",
  "key38": "51mzjrqNamB6XoL52wyM4PLK9bg3mmAS8XUW9X4rUd8LAbMxg7r4FWu93fkZCYJpmXUMtn4KUiPB3wTC4vuSkJ2Z",
  "key39": "5HEkEXJsSyPB1kUNnh1vr4KSw7LPjqDqZYmg1mdXPtYzuaDwkeLfZq7KHwf8xMZid8QU4kSyF3DdVtrbK4TZ6Sw6",
  "key40": "58Tw71bvLar7C1UPGAA7W4BDWp5yLcZreriRygbdzgQmmXRTQKJ43sk9Cy6byXsTxdB9hG1gvroGZNXfnEyZdgyf",
  "key41": "5BnGU7ttEiadcGksH9eZAq628fpMHk52hRrRBfDxquqPPdN69ToctEajkZuSSQsnw6kkNe67HddyUEqEbxTccoeK"
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
