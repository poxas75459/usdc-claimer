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
    "6GWbrQvjyhGj5amxdgq17m2ty6QSnotakcmVVFPdAqtkDJGtjLwy9FCTW2SmUHFeij6315Yx4ifSv92WsJWL7jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ZVkHCvV6nxae3ApiMm2q7b3CW1S7CoskzXtdGgkcUBGznYrw4vbYmDjvCiXzBtCHtFLMeGT8pmbyCuy9fJPugc",
  "key1": "3bYKY4GWV8K4fCWMYgAVG7kajH7rNpCXffYumFpgJNTaUYqUYa8jKtQTaBA67Thb5DcuM42AyVAXV2NADgnzNKcS",
  "key2": "2gXHAxeUxitqEW7b6LZp5ozYDjL81Nwiij5zKqTjyextVeraU4v7L1EHjESCHDZz8NTbQwFtbQDHHEkGW15JEkRD",
  "key3": "498Ad4BYNnh44ZBvV8eVhxMCcJchrRrij6MMSLXCDp5Myg2ULtmobdHaHQcbQRey3dNBj5vAwXuCquVVHmKcj4cw",
  "key4": "qBUEYJpeoC9gLJaSTZe7kJQm6cSr2y7eB7mw6hE2K6kUZADq2Ne9aAsQJLfFJ4mBw6evisoJqtM1REdYCMPY7V7",
  "key5": "kkt4TzRpwRLVxR9E7tw4bxEBPN9poHrSUW59zbq5DQh4dnCJKzpiD9UoJTPsUrKjxUYkPy8qXgBYLjJKg3fHhsA",
  "key6": "2VNvwWJySV4qAzwnxCwagw6R56RuZiJvCCVwfQgKjyW7f3xLVPTjCxgLrkFBHdSHvw9YxDaF2eratfDsxtDgd3Nz",
  "key7": "3pAJNG2EiQBaxdGgRo1CvgR6foSgCKGfToVPcQSFzrVq1aCdc8ZkegmfCgGFY1WFnUc9ygQM436b6h7eCnuPrQT2",
  "key8": "5GJh6196tEZuCJF9BKbb7KXFDiEXZPmGDn88BX8eLmLpGPP27bPSxXcEeqJu7pUYzsQiwLrU419FJxf13Lqn3M4m",
  "key9": "5NM3NswGKuyVKnUw4yh9feo7AKepcbRYJS3rrJNg4FdjEeEEZTMNjjsq5pt8XJpF8YHjZWCF7FY92ZmrmwhqNavk",
  "key10": "YaH1EjMJervawbNDg6poYnC6fb9gFywawpeojDEuvrmrsjW59rqt2trdkxEE5PgzScPmHi6dqorqqYSQFNJqRzk",
  "key11": "3vXHz2Dram6gjT5BiArnGYKa87WVk9zWhM3dY7d625cG8ZeXHQgwVmowYZG8VpQm7S4FXXj8jkGD5nikWydrQuXL",
  "key12": "3yUjmRaj4dSrVHdzhxudHkGdj9xHChwG7Nok1jqYjbMo4iA7CTTLwEwDVdDRQNgKynq8Gtxcc92njCRBPaZC1aJ1",
  "key13": "HVKr1iT3izABu8vZatQ1ncwv4gBvEsoxnRmzfent88ZZrfbykAu1QpYu3gztVHnSq76LzbrGFFe1YqYHcfNVBRm",
  "key14": "5RCNAY7DhNbW5QzmfyGEgd6yn9mqrxEtseM4i2MGuYWeZrXAiJZ2u8Cmp4MohhwNNcfcahDf3aPSkVWTbQXNJMHP",
  "key15": "4N23LN23bZwtLB1fj6RUcTfEgKSjoihp9ctrR2BZJNrFE3LG1o1UaLbiAYhTkvPd4BaUtxmgButReLGjGYvJ1Aao",
  "key16": "2McgmmdYrg7u8f2bhQd1ZuEMEdqhVQrtafuee4kpbUaFcrbgDVLRvpkjqBNo4T7ujRusC7r5skV5YcEbJjeyxgRF",
  "key17": "38eGvXVTD5gtXp5tF4ERAkkwpNEKVs72CbRHg7QoZnuWMV9YrFVC4wuUtmfnXxmz3NFT2AbPqUaC8PCkYwuyy9Eb",
  "key18": "3Zk68GtYe4VQQ3Sc7Vm4unsvNUMAUZu83Yd7DSXjd6GFHMmhz8XikX2R3AA5TMRQrFekYzDPVZcE5MdH6sT4T92U",
  "key19": "3gA81KXv7zRDYW8cdH7Kkr2feXmy14iWBupcW7iNB68L66QpzNxmuLb85o1YXznHYV7f7QvinMcR8bT3d29mCCrj",
  "key20": "45T5RxryRCbjmwGTHHiQ9AsLERRvjv5Mzy5R9MXjTnG4JFBMS2XVimp4UfZ3pXCeYqjzv5FjRMd6y9EUUiWxw1as",
  "key21": "4fp7EuRUfPpwT8ecBERumUESTrNwaati72muaxT8Z7CHvPfUwjpvDpRMsYrywCAgUgx1ejyLn5G3vs9HWDW26s8S",
  "key22": "4ydDko7Bdswso16W4NYBd1bLSQSvjAc2oFFuT8tKNhWKxrMPqMaKsW82CDoW98NRtzyH8nssmojCtFUbBd2a74pC",
  "key23": "4jnYP5zJsZyur7vePPen5UX2NkgE3WTWJf627XkEha126jqiHD5wrsyzgCa18Q1JaPbCD1RiECgFHUrHPJTQHtfE",
  "key24": "2yuywYHazy9EvYz2RQ7FcEWU2xjbErskkMJ2ixvx4aN9v7YE4c3ZhfekmRUDYDbrAF6E44Jwfp54cEn6DUkCYmSo"
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
