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
    "W2Wd1HMT8tHNVMoZVHtCywpLZBkYQ4UcsScnY93m244atyxSt2SvqgzcsER51DE7DkS9fz8JSofsoGaE1KkBUvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HLN49Rs452uhYVSGkj62oejkYqzKX1zaH8nQZuJMUL8JzJB4cBWRzqJB4gsdf3w4DMSHcHH9YHgYWPtM2YroyaU",
  "key1": "gzBFPTKM4xShzEUeKcvRCAp5qZShg7KiAWreMDudXMtFUq7mhYNTePfELv8KQCbQgJ5HUpQFKtL2ZfscL2g6ryS",
  "key2": "3GGbUUqDnYf24GcSErmXfUCbN6fmcrXwFkoegmVhAEGfrRqwfhdtuxG9wLZtYkHZb8DBALU4LQHWYUSkudNaQESN",
  "key3": "5BRRFUhJzBdvWjqfBVRctKCMDMBS4kpxq45xvMLBPc59o5FXGZ3f3TWQk6K6syVAyJ5ScwrDwRT5AaQHrR2jnYSF",
  "key4": "2GuNyPA6GJrdKm5tynCLcarPZbJKq2SAK2hhP4Cbgn8tX1fV9ajmKbEHRwkxx3PgRTS8vrC7uBs3mntJ6RZr5A4P",
  "key5": "ViUMu6JDZR2mJ5rvMWuKUi1JoTX2AV3pkmMn7UbvTPiLmHtPqvFLMzjpq8ArLfEzox251QjAQ9WboxYDAk7dJS6",
  "key6": "jtJ2jNc8GJcMZqb7L9jUTfeqJmtR5tPzueuQghHXPoRBHhDVq5paFGEq4QD3uPrgfnBaoAZG1tEvLBECsqsUSB1",
  "key7": "27B7oBXECio6EQMak1zEK1qNDAwr2or4j26J9AY5odU9Q1x6fFZhUrDkeiMd9kxjZdxSj1obVMLFoE2191NGYPeq",
  "key8": "46PSWv2RiSk3PZC1mVHPr374UucxTz6ctEj5UJY92ngDSxAxaH24YtZe2kV4syC2FVqGwuUxkB7rTPHQwew7Hzta",
  "key9": "3sps239RFvaD8JzZfBMp5DDpR1ZPE9JKB1tvak2b46ud2HFYQGB6WuGQBAeYuYRAy91MYY6NRdaWYcXNvwDLzrgf",
  "key10": "J1RdmFWAGAi4WRwNgWU6pMQEYFc9EQ9pTGxUGCTDfu5y3sEarkCFfMxKSQt3NyR3J3v1D18HjJ8KMz4YqwCPfT8",
  "key11": "3onGN8fPciWjnh1qqUuGFsuTCeyfS4b3dkjAjNLdAbNg5aWkHtEnCtW2J8XQhk4oNW5xFnfTCY4oXRjTQMC874id",
  "key12": "Kd4tJ1wF4dYdKHFfjMCiypVWpLPopXWKi9QiwYviTsmbnR55GYZe4Qh5tLHornYUGhW1bsxqwU8PEpxuSYceS5L",
  "key13": "45WBcuBki4zxXAxkfb4JMoyJigRqQngFuWnutYdFEbp2WJebMYPsZj1bKbEq4nME1Ut2nYvbqYZqddpFh9aknGsW",
  "key14": "2PwwLJzD1LzjJS3NA9CsRxiXUBkQn1PfpD7pSRJjLSU3RxTStDMLGiemR3Q6YiNmT6bg7hHyMRVCWJuTpizPBNnZ",
  "key15": "2sjVnfP5iNaso2acn2KkcPj7wFiF7U6qPUdCBdyVNY3F6vHtPkXgGrWWQwT7Qeb3WSbLRBHj1UUYgBVTtszkEziJ",
  "key16": "ZjqSF63r7XkUwienXgujs2xD6XQz6rhwb2YnAhKzg52sUEr1kgBmexafi6Y3zoyvatkqueKbyZ2ZAZjmu4G7Thz",
  "key17": "WrHn2oAYiTpMcxc12udSVL8qMNYAXXoo1LszzRMLSoNfi4JqN5BS3Pn1wisRuD9bv5SFCK3reyNapEJDZtpNPU9",
  "key18": "392LC7VkV3eRThRdk9tUBirYdzJQUvfYP37QMdo6dyUgfMZXCTZCWVoynNMWz7ijZJdsn8mZSPQZtLUSjteiek4B",
  "key19": "5FBuef65XyMQcnApch6Fy3VzkMzAvc4NDwNqoQf7G7xwTepd2gwGZVzyaQ9tRcAcBzqGxCBc2bBmnR1PSL8NySyM",
  "key20": "316dzMQiuv2knQEFFjeyK5camAWUfyt1zuqCmgkL1LCcMhEQrrJm3S8pQYJm4rDwNuHFzW7pVXPiKGANP8ujAUqq",
  "key21": "2x6S6uP9bmAzwb5PZxw2hx4mVgcNaYTguqL9jLiMWm8BPz2gJfqBaRQBh2M2VB6Q8uqcvbYH3DjdVX1TuuY4TGMB",
  "key22": "3mMMDDe3mdU7ma5cCwiLbSdjhp61QScUDq6gXGQmPHWZRSKzo6A2j7dAmUSs6DoYWUa9c77tSECErD4JQdoDK6MW",
  "key23": "wdw5vg1g1tvH1Xv1Xe1ZSEveaobMNrCWFYVLaGsRNjDaR7gFY3EkcFCnj983hzvwjtG9ud2Su3JJXB8c8ByZBC8",
  "key24": "5pCwva5THnHvjEnoy26Ld6z5qJQqfmJGi12rEn3uqNTkwRpcSz5kbszi9LQCbNFptpUy5EmnUoNY8HpkyW6PhHQ9",
  "key25": "7fFRJLf83TxHdAX1XTYasT5Ru2G8DwqzcvfjtvJuyJMT51k9RuEZAF5mcjW4jkACPtSfv6HpSxVVMLTzyi9whUr",
  "key26": "DWwps21exRTYEdy6U1UJMiGdyxh3PpKBVdCuisqdSbunPVAjynuq2wN1iYa2YeQu64nFZUMBaF1g2jenyAutYB4",
  "key27": "22Tked3gmfYFsYU7LQwTxU8eDGELZa5p55RkNiGPcE3k1xiozbBvTBBFc9VDXDS259kfyTL6vjsMuAwCx3qArMEe",
  "key28": "3R36v1bu2ViqPmfWnv88Y7AAdvBW6FLFQQR3efEVNkfz48ZEZdWADzMPs3yFV7M9UAkLEeigT5qeixEpeJxg3ZfH",
  "key29": "57GkerjJQJfBGBKYxn9Zs6bqbwG3ysyBtWQgnBd5MvLghehQxKL3bALa77rEvaWfFiFNzpPLyUeQTkMQCzBNedMF",
  "key30": "3eP1GiXPaJqY8ZC1fKx6Xme3r3s542deKZ9sfajd4cBqKUhReYkK7wQfM6Uzj8M5AoFeBdAVd6YaETbvD92HBASd",
  "key31": "3AyBwG6hwPasQYAwZLj1yYTsPLJuWbSwnCak46ttQUSiZXLxDBJeMScXVYkxj8sSXf9uSJgPz1Fe9FHjtaygnHaG",
  "key32": "5AxY8JvcfvsGkp9HMegdBVEWfBqULgSPiLUZcWMDoRgr9FwNtopMQZ9rgt4EMUWToJpmEnMtpgvBJNHeqPaUvuAu",
  "key33": "3bXQZHRKZrwzZTcZRPFKYYVtLSpNVSL5H5jX1f2thhcmjzs4FuoyhoS8urQwP75yEjPNMdCCZwaMYqvbKSAy7R8C",
  "key34": "65m4R6ZayYFkfF8WV2Xy6ApBoFn9SYeUs3DBspjUqf8kwjxjzecqFGqMPrYNYdkFwXjRLVzSHQLwsmrfsSuv29yx"
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
