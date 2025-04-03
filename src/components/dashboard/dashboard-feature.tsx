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
    "4yFAcpGXis3A3nE8VfaJrEBJW5o4cE5ZjKH25A2WLja4mQuqtXyquWqeQXv8p21tZNKVdYE2wbpke8uUtgisJJoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39t7iXqbZeof2ABDFoZWcFgRjua9dfmC1yF5vztYRQjvRdrBkZSZJkVtjnjp7AXiPUR2u9EZLZpyBrq7XNZjewz1",
  "key1": "3zJSuPUoK7yBah3j1LGfV3jR18Rf1UV8W5R3awwKBCQwDLLTh14uDH7DbzGsBf1WGFJmzPhpRGJ2JQAsbB7Vz6bp",
  "key2": "4JwYo1ZcXVRTqDieiRd357nf9YV2vpi1jtESWTNZ7NCyrBmAEiff6Rx8qukGHnjsv1R6hde3FnSvCBX86AHUw6U3",
  "key3": "2mEtLVDtmibd9sQ2C25UmZVyRDmjNcMU52M3BL7rtSNDr5oo29sgyEg1FdbnkhSpjiZ7dyUTXdwAwjAR21Nkzc7n",
  "key4": "hCzY7REGunShzmy9FqcnMpUyLaDK4Y8n4HcKWQ4ErMu3qmvnERooYmxSyPk2JMsgXqVGTNSo36UasVPEe22696T",
  "key5": "3PSM33NEdYBeNALGWj1fCLk4RNav856YyEmVj6xWPPuDPVAHPytLU4HmsQHW44yTQ8jxmrBWMWjC23r77NkNg5Wc",
  "key6": "2iVPdpiKMtiCfAe2T25KRCsb6jKRtGYo61jDvtBFs5Hf7CtrCsajMdNQcXWpwHhA61pW1NgJQ6tHM2bZWGCvcHdB",
  "key7": "5W7HCiCFvrPxTWdfHvVPVpP7NxTdivJknrW9oKwrNdi95YojJ3DswUZaY9EuHnrBVMDZsmemeAHUzQAd5d4iDFfj",
  "key8": "5qD91yiXu1VuEAuY5X7goDa98zMYjxKYWzNfMG4Hp39XCjbAEdaRCzXAn5vmhx2n1QG6BSv1nzS4ePWv72qTwdiJ",
  "key9": "W7cf9PKRCcD8EsmMLXDLxyo62h8rP2cQg2MSrYL3qP8HfJVFrTaRqPWz4ZMMRZXD8DojfUs8XoAyQCbd7UGsck3",
  "key10": "3CMXiCpWZ5jGrCt4iR1bbQLfT7gH4Mdq3krSJvdg7AdK4tZ52hxZXszLFuU7tD4ZsPPAvLNDHx5CJZec1Aatso7j",
  "key11": "38CtTwAZnMnbJhmCSVKcowZs6KWKkXeAqNB86MVESSJauikkQCpGb5zQsvjZzvAHqMnAvXygBTe649kfPP3NJcJM",
  "key12": "ynVhycFAiZxkDc69B6aSGrr8KadwBSHFPm9sLV4F6dJhkLR5uUxY6NcQK5ABHqHoEoRZuRgdC3mknuezvZEmnxa",
  "key13": "sJRDv1PaPuAxQ7rBEMMRqpsqFchhXpcswfaKEEiLXerdBG4pKgeU23qNWpP7QxcYQo7Z7hVVsva7BrzcdpYHxFJ",
  "key14": "4DgEMWvw5aZ3xe56qsZ1LuGqEDHqFr4mGSV3YC2xD7onhT9KRVV5GVGqmpffy9NGV58W7j7iqxxNufWMhZttDTaV",
  "key15": "56b9CstYXpZMngsqZAjsH3A7EZRRmiffVgQz18SjUBJfKBnZNtepruwMWHdsmWyGYu1GUAE3qiKAadUYfswQ3eRj",
  "key16": "2nmuM49EHpCGeuKsS9c4hLEGk4kj1YBQFCNZWzGgytqDVdkAQnKW48ADvYYNuKVJ7Nu645NJLb9JCKNUXzLi6HUg",
  "key17": "3Kz4vQw2CKdJtgFsNcQDk1F2vFTAo7LhM7zA2yf462WGq4Z9zSiVkWx3fNeiAXEJYKhZ7go4i4mFJQpby3hbFaYQ",
  "key18": "4Xho4LLgb9qhZwnvQNTdbBEkQVQZMawosEqXRq29xVARqLiYuSuyZggkRbNjxR9WYRskobESZixyDbvzPaiKJ4Bh",
  "key19": "2HxVZgLAXBdw7pCUCzAoRAEYY6XMV8wyhsnWY9wADqiFrsA13X9MgqFTZmG6DM7figqxsT7HEebUprUqqC73ApFC",
  "key20": "2nAofWdiKh88YXqrPYNKmTrViKFftb27GL9XrX8JYSMGxDZ9Xw7c9a4itJnUWNb5RVJMyXSJ4s749pTAzb7ZVFua",
  "key21": "67N6dSd1ds8XtsBCcHkhAvm6bJTaUWUDgGdYUMWNK9ATgWq2Lfk4U5ihEzeoRYPTfdmcgzKifKtgAtwAC54n1fVP",
  "key22": "QDHVVYee61W5mx4d83cpekZH3NUTjFjJZ6m3S74z5MMhVb85nDuwZcbkVVQSPsxLG1FkeNYG2H7VKXuP5nANeZc",
  "key23": "HJ3WqCyRCDhjW9AxVSuDictb9G9RNbEKRxkyfMRe2b8hQy3hh33DzuZKgyS5GgrhbyjhoTvsmpzRnVt7gUzb2oG",
  "key24": "63MtU73AmpAMzvAMMMRoBe5pnMFJfznsTFrHAdgDZFP8b3p7UmJyBn7hixyGATVH7vkwEd3X1XkU6LZFvkzomebi",
  "key25": "2Y12WhkP1XYSGugpp7kM7u1bZRtcPBAnRi6myrqdGxwSSa48egvFraHmpCfzfM835RzxbCPo9hmMGz1CAdEbnAfn",
  "key26": "5omWT82eoa47kBiRCsazbaFeK7BsbEWLsKt3MA6BbP1kRyo2y64QxJw7AZv4E86gyMvS7uSNRZ6WtjBtieGoFexq",
  "key27": "4L1ivbXufry3xvyEzGTVbyPhpYhav7xu3qQgBjxp27cnPeuaNbtQaPR8xjcyz33LRBB6Cggi5qsHZ36BgEvSmqYn",
  "key28": "25oPEAtX6inTFawAMUvMC4KBZFzQjjwgoAXfXajvi6na15kUJyfEL82Qv1bxaiQYn3Xw2JdS8tpjcEP6d7VSmqZ6",
  "key29": "2cLiuFsetnyADWoAxJEgZy3bEH9n69SUNYtvqoqFAhqGDphhmAvBi7FVi7axsWsvSrfMd9Zbgsg9m9xMcBYNTo1D",
  "key30": "Ubtv1QEhYZcVu6o1raP4FFmfMqnAxJmSMDB4MN9qFGoaqwEVMt5LcYMPtR88kgo9YzzBkP9giyqB7vVhZZJJa8p",
  "key31": "2fg1CNdjagP32J3jhBXFsCVd34c3CAbXV5pADcnWktbtWSzqEQXvzTbH4E11cLRKN2vTpR3pd96UzgGHEMRZ15SA",
  "key32": "5BMJ4KMT2FWnY5xmo8Ls7gD4Vb6YHquLL87CYJhvh6tjdj3Hfjrk9FVmmQo8c9Pfr74wwS6GZfvBertyMsRtRuwD",
  "key33": "5aVRuU8SEg2STd3kUgkmK5uGwR3wTg639Bfs6AJKcREwCUsryM7A8VsB2tEZGL4xFwDmuSGdEsWJ8Z1MxgQKAGFZ",
  "key34": "4CtxRPJWNheS1rfSS9M1SQUFZjKvVbutbgN7nD9gNgiRNNzMkuPGY7sgG6wY5YMFUgL2Y8jz92R22xcgH9XEwhBP",
  "key35": "5ECorDcAJtqQLixhYkBQ8jedZ6iFBc9Z9pN1atbFgwnRP7WTAdptdxBkszPkwXkvhRe2nc8CkWQw8xz7XAJQPvgk",
  "key36": "pk6qH5Zdc3VoNsHZW6JSVH3rsJt7ktUxwt7u6fjMrS3NfhQrXkZyLvQSJUS3o9m6Hv4CpXWjwVvnwpa5oTCposA"
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
