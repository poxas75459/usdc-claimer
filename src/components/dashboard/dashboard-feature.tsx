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
    "2mJXxdBWUK7TXjuJMN7PPwQ4fCjJXQ3qCKpvE8hvPBmhYmhQLhBUt19cnAujGU8QyCaVNprnh66MRxGaCNyMZtNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPEr56YKGETFGWhjcbc6YAGt6RKTutrpzo5Hcx11x6ube2Pp9NzipuGtapsiQRraTpEmUUEwuz2hUauyzVexWjc",
  "key1": "2gyLGYYCdeQiZRcTXnS1iogdHFTuJ7mt36WdG8PsRR1Qb93g9f1rpfmuXidQZCBJetZNjQCB4AFZpo1xVhEc5q7g",
  "key2": "4RBzowyXd4361NYuD4KMWb3yh2ka3Kdow6fo5fkuEc2kzLLGMFB2Qfoh7qJpX7xVQo5sFXah4V21EqN58C6Zk4Ka",
  "key3": "5rwv9rPEvmeKFdmxK7zQrNqusJAo6hpjoGLRLYzCLjYvxMsPTYmmhY21wgpZp3C5uZ55piYb65aPhxiYS9T6FDwX",
  "key4": "5zP8uVHwY5LErv7xKZumSRCTrgznXsPAqjY4g2f7tmJckTC4CULn7ZmCJr29HJKxVJDnnCW7PD3Mn5icpRjBwkAw",
  "key5": "HaqUvGsKXSWYdTePw1riDX5SPRyNyQuAm29GReGDWjFTWioavz2HyPo8F6jPyLkmAxchgo4XUBxMyc3KtdskeCZ",
  "key6": "37PwkFtb47uoiMRuRByr6cyGjqSkJs5kZj7Ut6GZ67rZadP4UTK9RwDU9d74uYYyzb24NFRrv41zt6gSHHbVbNm1",
  "key7": "2Z5KChN2HAn42bPbfNWX5Vz9k4d8qU515Uyfu158BkqWWw6v96cBJmbyycMLvLWvicBJbFH13wwbqjnuo6X6bVeM",
  "key8": "431kMq8cEgQAw3W2NzDt19EBKurNakTMoGUFVe9h3m4SQDWYPmzgvfxXtnWvJS2hsnEgLtXePxQgvgcD2Q25XTQg",
  "key9": "27KHwQ9JmupcJjK1keSYtrU6Hs54DkcwFC5MZrQrUQ7XVYCPMCXuuwiE4N5vhn38C8UL33cS87qnAPHWCAHrdLtb",
  "key10": "3VXcDw3yzs9Yh39RbtYu6yDkx5cn2qyftnpVuvzezbGB1WKSXjzqTok6WJQqVJxhCYDyAzJXXCNjL2aXhbcfgGVH",
  "key11": "3df1gfPBjwgYckeGx9UyDJ5VwEn7ksamcw3LoJPdXdVmgYNhAsvYtFNq7MS7eyiieLGKydBt6ajqGTc7JZwC4PNw",
  "key12": "4vfZZEchJcL8fKUr5fvxf72672RzyzFZsVdvL4DC7wrPTi17aaMyoLqAzRNC6szq3NRLpLyZj4PmunChmaKaaRZG",
  "key13": "46dyhpCNLcTNsv9PrZdnMQQDRtiwFyfi14HRCU6TaSX4GmNrZc2N7wJ9u1QWU1iFQCzkv85V4vk61eM5gBWivXxD",
  "key14": "4BBSkWghrGJhkzoJRF2UB8CURgDRfrHeRWWyLvyYu93PcjoFmUsP5gB6sQSuiioVsWkBpmyPr5wbGJ3NdD2E5CJT",
  "key15": "3xuMCLwZAxzLLp9dnm15HHsfWGMPpRNqgXskHJ8NUHVziang9NmoFfGD2SprHqb6urLmnCGYoAj8ywd1Yo8qnq68",
  "key16": "3BKcutMqQEgFTGK3URF7zopuotwF2TLhqzq3jv9TGtrwDfeVjnJPM6YVLLmHBUgFswBnpUsApGY31yetJmezDsd5",
  "key17": "4UNy2wAskk3Yv1odX7nR2LTapFF7U28eHj4uqGDM9ZL6fRsHhBYukCBxPmhzG2gSQHPZmpjg2uhMnu24brNXqjcd",
  "key18": "5fuEZuDAhMBLzkQCwxBuvfahRK97A6Q28oP1fKKpQ2zvrqPsjmcqhzNZMPT1gkBHdfimST5LAWAdfeeqrQPTJHqT",
  "key19": "5hsj9QGUSwkXJvJfU9nntXWXjrRvE5TiQHLzy1Sx6hD6vYLCMZr7ffEij9Yhdq8PxUuEE9Jg8nmRC8654x4EJ1hu",
  "key20": "4ADEoGxKLftTVnvzdje3zNnGSsQghp5KMroQjn8PMufa3VRvmzggVFa3G3t47pDrRLsuQ6gHhVRSkkY4kHUDWczL",
  "key21": "4s1pdSKcNBNDMLGBVJhDH79gxg4cQzyN7fCH433S3b9YHebr866yGJqBsyGpdEJ7CtyrzdnY1c8MReXaesRbAzE",
  "key22": "cZGXTgM18vHM8GqB9sAX5vMmUasp2sPrqgTUvBvfx1yufUq2aWP6bkvnbQY8LzyQZcediYW99weq7U8Nv94bGSk",
  "key23": "22Eh4t9eHW9ruknvXfCeCMAXLGiPmqFBGXDmENjoiaJgoWatp7YysJNyVV7iC72ftocZrbwqYT4mA9NqVyUDqxKL",
  "key24": "5YuzgmWKgc55cfyzDp2uXrKSNPvxmk3tTYgGVR6PE5gFyAXaEUN9qiAMFt1hxVFEqQreSM8zyYEC44AuuaRHuSwQ",
  "key25": "5RjSQ1bxcjwqJWL4KnDfDxqLg6qAE9soWMJUSNykGwdtdHEz7CsRtpQwYd6XQkwxsSVDFELT56Rv7VBm488qZBk8",
  "key26": "5QnBKA91nQZdQgTy8qbJZ3BcprvdonUhJdF7qYjmd2p1HBCrDAckXSj9cb7pXMcEip9Zmt9QanYtmMxBrCBiFP66"
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
