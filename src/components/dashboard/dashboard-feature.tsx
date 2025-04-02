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
    "2TqyxTV8yBPbYFQA3ZS3g9uGFQAVYCK1ZxJMDfhhRd4QtFVzNHCxRP9pbFLnr4zpGkCyeJw3Ub9z4rP5sCgbxi8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54HEK1aPYDAtNaVj4nJixD6A6RFseAUaAPf2QronyckCSuPcvHT8CcjQFBYfzQW4jRZarTV87omKHT9ikEeicV6e",
  "key1": "2QAZ9YA8aPrqv289VQQh55moexm6wdUWWVgSZDnowuGa9t5it4BX12yzc2v4soH3mnGVQoYheEHyrc3dDygXJP4H",
  "key2": "3ZXQC7x5wwjQ8uhxeB2r9Fg4qspokuqm9BvX5mPeaxWoKkv74WtjfYRv6MqauWvDBJ4Rs2SHTXfdiqrTeVrHGt1Z",
  "key3": "3ffzwMa1uVCWomEov9NDp2w557MHXYHpJXBHdiumSMU1VysAN26GxEafo8y9fTTQVkDfzVVAy5SuLJoMhpQcdmu",
  "key4": "5QXQQ5jT9DpNGAzQSwjgBLsZKpttJ6itBr7PD1f22joo5RcHaYNm2PP3mvHtPdXWt5hoEta8CjPz6t9sDsDS4Zq9",
  "key5": "5BE3L656NDYr3xBrZR79JZrHZPfB7R28GpBYevqVtxjErna9RMXZWLCoMyUJdLesYgLCds7DsZhfdpR7GSFdRbdJ",
  "key6": "2t8sftyQeXC2PyYVLyGsRXEii6z3EHFepSNZG3QDDP3vEoDnsXZayugARjRdBUkCfXc4W1cWZCgcXF1daARwTTCY",
  "key7": "4R7o5Kte41yNSfiy9SD3HJsdLDTyU78iX3ahnaDDexvuwQz8EfsZ2g8JtxZ1P5GA8jqj9y48PfDZ3t7nFs2f8yKA",
  "key8": "2b6Bnd9g27ZoXB75dKshxjgE6u6kDJ4SvUq6hKQtKRxTFKA3RHJcyWSDJSqtywcWfBSkyakVwF6M2B4QcXx5FvvQ",
  "key9": "KPYZ5y7QYoGs2oRskWdGJPdsYMUa5xkxQFpL7MbmPibcjePe3cVSU8JGoM9wWLZVXmEwEYtB4z49wJqsAbn23HH",
  "key10": "3q3bQaT8cbDLPx81EcVMBcKqwXumiXwMQd8nQVeTU6WSP7FoWAnKiXF4BjavNLuAFS33moqSqbVqjJau6L5CqwoV",
  "key11": "Jtg97gx2HQhXenvHSv89GQbDpH5jgMdh1PqNQLm7b2i9ALM9p2ciHXrLng8g1jsXoAZWMLbsktUbvLfGKYiLXDJ",
  "key12": "23QEUbh17GZfQjsjxqQ6m6C3tdJKdxKeXzpfkcPbLdbXhenpCGcindJJHu5oLTsDSiZW3BLwo8Bh5H8K6XBw4idF",
  "key13": "3oRjWsV3qG9cQNWBhb7zFoZb4EqFgUSstjyJCcvJ6LBmqxUyETxvGfZLBcuiJZPM6xe3Yc2visRMtCzvzC93Uar3",
  "key14": "2noXahH33uCF1qjyL9v1kp61247ACtMkXkfVKzWvMSvG9D8xE5dfkk1J1DDp55d5EQZoDtWybR36YkiYjPq377Fq",
  "key15": "31zogANwo5A5QDqr3ABEqqVgNLAmFXHUyHqo49B1vArk59YmS8RB1i1w9sMCtjZm5hyvJrVjBN5PqrRgfc86y5tY",
  "key16": "ZKURMVqfNwtXuA3FaY3GZ4eU4Utp3hkQtWke7Vddw9NVtjqUGuwA9AtHwxunNmXZKAPB9pKNxpCtQcFr5M1LKAc",
  "key17": "2QKhfzKLAu589asrhyLeyz8MNt5b4EmFABoZL5fF5K76hTfnppFnzK94gWEwqXvSdm4ChQU4iyV5Xfyy8XnA9qt",
  "key18": "FrNEMYtW3ZcCvjcMPRiuboQ5rF1V2CKCbMp7AQFuzcj4UbRxSLDLNHPvMSbd6UrUV5c8hi2LocShgsiDqaxatUN",
  "key19": "7pX29vrraVB5qoLWUq8LEah16AYJTb7dtxxpdTMcAGWGqMH5XbGC51oe215YbpK8DVdAW7NW5CKK23tccav7Ynd",
  "key20": "3mNW73yUZtfYMnFyA7cr2epFrVbvMJafuFmP1Ag4k56BrBpj3ogptdnY6MpcZ7niZS6hsu8vwBaF9EA44YroxMyh",
  "key21": "3NR15gykssoi6Qy7VFcjBcAjFvZeiYcnFeKpyS4KGsP2arDXCLGvBvPjxUzZSdjxksaDFvyc1S3jk7Gdy7ayZAPr",
  "key22": "2CBtcSEfEn9CVreuJocyPvgyQzkRfAWtLR3t8bRR5FzKmBwKv5CMfeDmEVxyvmsZ7NAzq2NddpQux1p92xdYjhmj",
  "key23": "27wirfNkpHbR2EdwS1cg6pJmCsEJ6mWG5uNq6HXDtfYMiaoavVtL23pU6v6vRAQBQcZ1TDgjyscLnVm7nyagFpYg",
  "key24": "smBUXYEXCh6HYui1xeCqsU14ZbKCV2m9bRZNMLpHyuk2TffqQRkpmTPYfVjokrtiEkVKoB1BxzMNWTGy4MRSDqN",
  "key25": "5xcCgkGWP6Pxg898YNto3LqZBW2Jj6kTqWGT11jyxKgNfvKxsMF7hXvhoqQ3ZiXUrJGYDDNuSEts7Leex1FvebVd",
  "key26": "Qhv9yXMad2HiLELgfwtToHzU83GDLKh19SdJSjD77kPqMoeF85U9jDufE16Z7v5fJVq7yX9TgE9B7LM3RNhWcXq",
  "key27": "2BNUgg9WLpTpPKBHmLYKqcZB42zeDu96Q6ieU6nkfYE8TT9Lhry2663R2HUgJCQAymqKAqRb4mwwdBJLJyYjz4WW",
  "key28": "vjqjstxkRpaXCAfFrGhXPRETHtPKfq6ai137RKXRvXRgJbyZjgnCojo1YAwWCGRpBf7KrnxkdNvj3cpaoD11JrT",
  "key29": "3r3ULFGhG4SZhwQu3i6b7P2xeCZr8E6sripjcRnijYDYK6TVVCtjiMMXBEXEbo8SDVnz2DqCD79D5cDnWmYT5YZx"
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
