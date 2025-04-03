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
    "5NxCYe3CZFxnfxfYfHqhSUCbZKkrhQURTzUx76ACaaFf1dCpe2PxDtvX7RZgKVJxWw9aYKgXhEgfjz5yJ5vbowd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNrJgZxJJsoZ6ufNC81re9DjM39jhaXE78Mj38t79KxtKJycFFKWpYNmQSF6UeCXjgMX72DxWB359VLUB1NFkVf",
  "key1": "26DTjy8ytPrZq3t4R7g7HQqbxAnmx4h7Ty9mFTn9DvRtGTekacFFZCVCLHFpQawijngkYqK9iPYBigY8TFU2ib6L",
  "key2": "23fYCVxSM438i1UnueQZjgi8pGjCX5sBLYgg91PWm91Z4pycBKZiZpFeB6Vx9kQs3gjcrhpR4QVSHD4YT7WeJu7i",
  "key3": "zmsn1KX6UgdKWpoETwvE6z2ZrcPoGTEtzR8SZVmQrUyMFqL1qp9vQWRfuUfbVwHygWeEFMPtoyhQ8wBE84tkoxa",
  "key4": "4XJr8oM8UjWAL1Zxy5hxt4F8aVc4riG7x5bqzbPyqCvp6B1eT5hgAjsKaJQnuvuTbbjSCzvVuRh8TE4RvkjZGNsL",
  "key5": "4QkT25UPyV1trDY1fnPnFYe8W2ijnuXzYa3Ga7VMDJvAAXHqq5Hv2CgpYintACMMfDso1M85Aoj2S5keAjbgzami",
  "key6": "DEfoXdFqeY5pTHNgfbKgAksXZTy42zBCsDF7aW7nmdVA725if3nExZNr55r5fvKTs9j5KUh6yitJqFF47Ci2TNe",
  "key7": "2uCSnwMsTsBTn31xdYQd1Gxd4Zr3ehwVti5fJwnij75iXoaj1siDWkPjfRP4UpAx9CMSC8jKNe5Y1MJqsJx7ge5o",
  "key8": "5DFrhf7AXt6hSF2KP6Mpf3573p3Kzn4EDVgazsHfhBSFXqfYwpQgDcQFvr6h4sELHJ3XEEqEQtCa689PCKgyFBqr",
  "key9": "7Mmz9FRRkRMT2MBogdyCrBbRPBGx4UuTPsVPhcZtotSxFQsQuQEUW3edseWWxxTA11Y2JFfSNpUrwHsGvURrE7X",
  "key10": "4R1crtL3gNhLaPSUSNKTM6Qov2xAetSibLFLPGfPwys7wuSJCzEVaqGMANGxJJcDtqhMngqnDxwK4X9XSctFT2ab",
  "key11": "5f4M7oXKhVbfdWXaCNq5KtEvJHf5uv8X6jmVxGKWEr5qsHTwjbrj3wZcHH9UHzyh3eGw7fzKvyyKcSzRY7eSbFxz",
  "key12": "55SA2S5AkukvRPvKTRfQv4ZPoSzzJdWPTpCSrZALZD3FnpBofZhSeLnNtzfnMzVki76vKrKb6KRjqUzyVtq9Wfmp",
  "key13": "LiLNiqCQpfGr96r1gZFvqyUv1wbz9Uyk9nkUDbmMC4igqaKgFy2z4FXD5QC58xntXmumRCYvH9JgANu8CHWSqMu",
  "key14": "4Lv9eeaiKJ1gd6cpJhPUTernB7tJoSLKx52T96TmWw37HQcYewvMbf4UPWeU4tfupmoZvHTygMF3pXTf8ekQawzd",
  "key15": "35du51rm6v7REiD1VRBJQ6EaHc1v3bMKFKt78kkbV3PppjxvcSoFsA9yTRWzpkqHyZrYqjLSr9V4K6ENNVZUVLRy",
  "key16": "2yAv9SKcTg9ux8xaSPwHJxTJTQ4MxzxM2dwG1JWjgW6sFDAdoP1GGNU1B8AD9xUZ3qw3Zg9muNYfTac5TjG4p3sP",
  "key17": "3aCJeKDey6D6P6Zc4n6X6oi3evv2y1zxu5z4NSuAHEUPCK8p6vsNBaRMmytYRf8zudYEQKdHfDghUGPtoJNGBx5f",
  "key18": "2iNYQoHjHy8UCTLvG3cGbixnWFmUbqrFvna76QxnvzVsZ7mBQ3jxsx3NPG4zAdYAJUpKNyQwArsLmmcELSNrvKHL",
  "key19": "5ccU9gFRyqkiG861MFiAxvLq53WfS9M5nBQGEabsxrLbwUZEGbvLuCcbF9HB9ZraoqS4uyqxtEfoXm7yU8rJsH2w",
  "key20": "5bDLYRsyW4QAaCCx4djAFFrthqfUpGZ2nQ4P4QiJnyW1h41uZC9F3ApKuSNJ6FebJbQjQEMZF5RTVLJUkqi9S89d",
  "key21": "5GMRhXbKaZEEFP7S3KR7KH1fpyWBA6PUd5MZkRmF3EGpybH5nTmLUKu8XW6xLCwPP3WL3WAzsjTzo6nSDLgSjJeh",
  "key22": "5QmWJcyyzM9R7AaTuERzC7QrJh6c6chCFo8pwGDb7bkGB6hCE2BV5UVv2PwdYMFLHzXvXwiLLyAyighdpaty4G4U",
  "key23": "4YfrdPBtYgWUtE8z3AfCWRA8Gqu7HkWpE5riUFNXGVWycJaSpWvYHpa8jQwQm7FDDBfd3ht8Qpo585hjhEjWfxJt",
  "key24": "i7JukM4iqtFtHaWhpv3EbeXx5c3yhJE4JRTNur2HUBXrtk9CqiRfZCs7LhAF39hXDUwHeFMSF3eNpFRCqnfwoBa",
  "key25": "45eH4MccDGSbcDyYRcmMUvUdGasxFSHajDz39Us1estw2PYTxamYdXxzjno9A8Drigzj5pAeABFfvn3gxMtj7ZRX",
  "key26": "5h198zuCqxdd2iFPi4QSgzUZYVWwXfmVrf6T3hET59uSXM4wbTtoLN9QwtCizPbsvXynUSEDReepUHVGa1TuQ922",
  "key27": "5rZk2qmNLAd3yVKuS2FfZr4SyYco9uPaTbyBbtEZAQNGUVhdXgbarh7abCbypjcTfuq55emXE3mxdbLa6SyxcT3P",
  "key28": "5MKjcbZ3csCszekRVZXAqehVfqN6KFnkDjrNmwLkbzzzFo8VicXmeermsCWSDoDUZTyKDzRoFL1k6UbD7CMyk5wU",
  "key29": "4HFrA6UdJsWMf3haepFCbYkEcMkm5eRsJFovYXRykkon45X1ZdgPqxVXdFp1qB58AJcvppkgRfhqQN59uMD6nMPn",
  "key30": "4ACcrdqhARrawUt7wrgm9AkP3eFoHTocbntc7i4bwirtTt7pxWyw73g4VTH3HUsuCLNxykf7YS1jY2yavTnHbGkQ",
  "key31": "4WYPsRTDWXLXKXBmoPQEKqNgY5gFtLL4m9cpPhpV2SgSTwpgzdpxi8JMA7psp28WikYLZ52QoTu5atfpkW9faDSu",
  "key32": "4GkZNTENveoTwk1dP9yahgusHSYgvH5oWBRuSrBdRhGnAS1y9GuRwq1b8dNfvbTvzHWbUueAL7xbdgbYTC4P8hwS"
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
