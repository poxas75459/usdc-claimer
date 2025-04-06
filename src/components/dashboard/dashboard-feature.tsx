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
    "5nBYwsosGZ84zxG46wG7VEsWReFSj9hY1P3pFPSRwSCad3xVS3vTiszjRyNS7m8eFo4tkEYjpEaaW97zQijqEaiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yHAFnWtPmbWEdj9vXtCUpnM4KTZJbkn1d3mphrDVTuEWfkXkw2J6wuQefMewjP1JQzFq5m2FYSJfNFR4oEPSurX",
  "key1": "5TJa5EXZg5enHNxzqjp7B2yjTE8U451z5BfRMsmQDw6NEWHg4qNJ43fu7U2iuUTaVC8wyXoGFZqgdPpmsnGeQRAt",
  "key2": "2yuUpHhKaqU3GsC8AKPMakDCZYG55Weh5TcB1MtRHWkSMH8E9fQQviqG717uRga8u9oDZGotZp3MH9JCX56DYwk6",
  "key3": "3Rzu6oRifctnmbNkZXoVZ3CX54BL2ofxq1pv61m9tDsL1Z5h8p3nnkEAQqwxqBWmjpuRXhENeeYyFNAL2as8Bfi3",
  "key4": "pLd61ryDzCNJAb72SQqyJLkqpHpbeU44zPTCZ8MVvXYa9q8p2nvnHeS498VxtYw8iWJo1nv6PBwyT4t1nbtskJV",
  "key5": "61QBsEND3gGfStxTPjpKoQp6XSYLi8QdbBbAM6aAQFWkRrWdvfAgEkrKp3Y2rLS6fyUJbXLt7VWWQucRkJqgoeTj",
  "key6": "2q8qwjLvb6m4Lp65Ku6qwTLwjoybbrsBRXEdH8SD2LwCuYj1QXPz8RJQsVA1GEuy6pPTMSnWNUWB451FEw8HLrK6",
  "key7": "2bEhq57iuKxqkPF3B4eCfzBPjRydoTH4odr3hXdu1swBMRjZmakCxtbU6Yf1vpfKcWS7f4C8ZjLXVhczTqpDwiZn",
  "key8": "3Jq7kELtihBPmaSo3MPFpYUqnzFFXTMR1E9nw4BCHbtHoe7LF81KE69Y5unsa1M3TJjYEiP3s782cSEXA3izRiTJ",
  "key9": "314TgJEvarocP2CwRZWmEYtAERgEcfrLSMHEC76QZ6zpi9mgFq9eUEfhHfaYtoz6AJWrGrJtbxGzbgEuo2zt9DiG",
  "key10": "2nRJU54Lm8fUuZ2YjFtmSPSucvbW2bc4ggTHGWitoiBUqbQ69h8YuBvyvPfeDCZ1Ts4auHhVHW4c3vpuXrE4jz8Y",
  "key11": "3TfhBFAKMFQx2qWEmsfLDdNbHDwronFRiWeD7CxY16n5K3Ji4PmPDD2mz5ZLLmkuYJq75MFd2Zcn2PkrqcrgxuAr",
  "key12": "67eRh5tzxB6hVQn86ZA5cmZthXyKEEmRArfydMAhquL5Tp2Y2wND8iUFAfxYeZNU2Z7NouTcg2efsRi3YMSWUbQF",
  "key13": "61T8QTHqRjWuasDEXaDfNkVoaWg2DTuXsRnMgSiNBZQ9FMXKvbiEEJrdSqQHZMN1xtC3ca6715mnMQ7hiq4tjiHr",
  "key14": "2hJbaqZJg3GVh45douZV21e8ibYoq3vHWav4yttivf8N9Y1dtVyrjjwL3u1o4naANp1V9RvqTKFW4tMRTCJRdcuj",
  "key15": "2UHv2GDMPJ532dwMLLoDwCwEGrgBTf272XPPkwxsBoJ4cZwFvzHqvf8Lpms4GXMXZHVxgyrTAbgA6YnF2WzJwjWv",
  "key16": "3BqUn1Va48h4RbnZzX5n3BRXJVdT9eA8LAGuKepCREnsddLzinb1cdQxbvjc8idsNcrA7cAwfZ9erFJqPu3MyFkx",
  "key17": "2JSynvHvPHRJM9UBNMxdubw9LukVxF1zQxhuk1879hDAi6b99yLyR7DCtoY3srKBZZzx2ZfY7acxw6rspVew24oC",
  "key18": "5j5HBTX9ptvLNdf7G2pbmxbsepcSg8UQBM5JTDbcUJ6pNLD3v57SdUhJa5m49gGQkNXckF7pBdBvTMekHXv4eKTN",
  "key19": "66DBjPJbSsMcwoBfM6z8JkKNpJ9fH2GDjM6MkPMsx2wVcahotnNfgfpVtnzsyUqmNNx8tH5kLkECtHctbRSz8EYe",
  "key20": "5RJaKprp4G8pkrp5tiSGFTWq4KP4SifDedzK1eHLUbh1MqnynWKKtSyrgJCNxnw1D6PHVAj5qxW2Y56AEjkxo1et",
  "key21": "TvsHWCLz27HaUdcF6KyPndVSWxJwQHWZT8HaK5WPTZ4Nr5g5gzrjiyJAYQMnTV6TrKFJ2c64hoHrqbhgKat8HEG",
  "key22": "2MPiqSTStcaNrTRXGQmjMxai1XxmsUP5oygpjcK9km1mNe7ubm3LcU1v8rXhgMpW8ydj3BjNzi5Wvqca38pY6axY",
  "key23": "3sLRRtQaoK25ihtXvAwCGSC3agjdnWkFPC72RnUkB4LfNVxfzAS4bK9iV6AJU9PBkCZtK92CGRxRfA32naeyVXKa",
  "key24": "3Hf5gvGHq6h8THWyVuuPPtFGfUTATntEvLd4kXDHQMAjuvEztPo96ijMuq52BW5ndCoWNujg481HrnY9tmpGD787",
  "key25": "4ayfUudbSJChFwgzinSYfke88Q9Y3JGu2FpcAU1nza7K8Vu1Mo4Mh8Mfz7rnfRguypdU5YZ1PBEtxBihVaWX2X9W",
  "key26": "4pXsg1j4xKF9cehhJXG7T6sGUgvRtQSyfC5qsT7cCGspj7xey2mvRsJDCFp5GR1niEL4Kh8hWwp14SeKsCY9cmL2",
  "key27": "5aYeAhrFCwCvYHbfujXbyTxYrLkBe9Pj6q6LGYYyGGe8jkTfR5o4motDJkzgkskrEnbbNNCjFryp61BF4TX3mPDW",
  "key28": "2FtB8R5LBXmuhVPFaKr5oVcJebxwwbS5Y165xAZriwcVjWK3Guw37X8knx9x9A5eAKaUUntsGrzVAmCJ5zeV6Chb",
  "key29": "5YqhRoDjuzxJKKBrn6tEgnAi4AbdXAo3Hhcko8rysxPJHdaaofE7jcRuZtUo4USQXgfwZXL52tHqgbSYKkeC7QTe",
  "key30": "4csHw9bLjFsM5GoF5iTTDQgSabRuPAAYWqkwimpDMNvcL2ceLRULhjHYvGrpB1ssv93bHA3aBa4HY6spYyztbsoy",
  "key31": "5KjyBu5cN6gYYb1yGAuV4pN5imDuFJBpGKvKdhf4oDjRjVYFhBvW1FWZ57FYAi9rfhAVbWwkHwWU4wZVi71b9FS9",
  "key32": "5Xeiza4GNzTMoTwrP4V3AJkHTshfnwcEmyQeAW4BV1cKrg2EP99LeTksM3vnzqQg8gU4jc6sFT8ALRf7Sj9WQz9x",
  "key33": "61fWC3DKFgeuSnVP1n2is2A7LHToy65bFFBv2qFiPRpDDHj9quHqdFjyPF3q8CTTyc8ohxdAXPXnPW1HGFSKi6Dd"
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
