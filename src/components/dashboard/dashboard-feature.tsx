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
    "2yh1g46EsHHs1X9hpin6Zp8ApwFjZ69ciu2bDVPbR6wzqnZHWg3327KeLgxJxZk359aSM3f3DBYmYPEbitDLarna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a9xudsfueFk5AxUt3gujFRWG2odJZDeVaBTgdGNfAn3g2tnngyHbnRTpS2jdPXdRPCkS12Yxt594zMHGbSSwQu9",
  "key1": "29xwNJ8nc4SJD62MtekWJFdoe9s6f2TKqhtV9R93PaD1hc9dGKe915vnum3tKpJM7D4WgUJcPFyBGkhsNjLtNbay",
  "key2": "67eh86qdhzyS71KGqR1Qkm14JM94MjK1D2768ymvhKstcAEA5Btrsc8euvK2HHu7G9czWT4yqeism6UwE3eoby2e",
  "key3": "4qfR2oakF64K9BwP4trQiSBXUWbDVq6XMnGzs7AUp1m2HtmgVh8eLBHuPg5Lmyg7jmNtnF8gE4j5NMjRVtajTn8w",
  "key4": "3qeonCBBgnGW1osNkypTj3qkAK3ahYes6d8riAgaieEC7Eu6JnQKVjZcAgdkirxBtoLRcwBb1Jtf1YGa6P97yUoG",
  "key5": "36pbEK5pt8Aa5WgH829kZxvaPaeQGHmNNcR9bVS5Hq6qGG1dh9TVovq34fXU4pdu6VCYhfKdiYVdsQnA2vaNSkuU",
  "key6": "tNAvxL8KJFsEuqtvwhVEbJfK4c8Fx5EecXrsMMtjE86WiydDuPmK6qzuEFggBdGsMENXFLMUdSiQLMQDgsqJFma",
  "key7": "4euuUmRWq5q9PWoGbjviNwPDcC57Qjv3i521DaqrYG2dTWQu2KEgou2ZzpQUjxcqCzQ7Mdcdcavhwei4hfyCCfSU",
  "key8": "2qQCu1LuxjgbAkF9VFs3Xu8i4jwRxs8DeZDQEoc2rpwudxm4wr9PMgF7ooyBZXvd1GFaVAkbEFFJccsuBaFz2hV4",
  "key9": "mngQVZWGvhiJXarXBZXxV7dsum3RNLhrSv37XQU1e9UGw7Pzy2nzyMgYMavNjzhNe7wE1z93hA6Ddo2mznmVQY1",
  "key10": "5mY8CAoqX3zWGoMw64tsu9LzeHKAvbAwaLEg2Cs9UR999yo9kNiM8biEx1qfuWhfzeE4iDAeJXv3UyPjyunfkdQm",
  "key11": "YHFuW7MUgTNvKa9UEctGRY6y4jGEtHTpKRLXtjhMYwDRpnvykqr6d1a9NS7EJ92KVtbwPeotF5ULWv2D8vWsQUv",
  "key12": "3GUQyjWLSx8bErzB8K66HdeFFVKK9n9SBsXM1xjWCfS1RRgdobhNGEpCVij46NoGYqqZo4vg9Q3CV1FcsNbGuX3y",
  "key13": "2d37YgtATieN3AkdRnvJZxPzbkptN3ZCUznSTF5VcTcMCqqM5rQdP3HbxGfsw8vxbLEAb8i4A5zV7YDhA8RWgMUy",
  "key14": "4zhhsrTEEjNTE97d4sF4o8zS8uZ8LgQFWrjUUEUgTvUsDEm8euSyjPEtyLZXe9pKuosvhQPHtNuzVqkkEc5dWECm",
  "key15": "4t7ZQuGDGrgiKoKrfoXFhbCW2CeWhxBNdskeFRj9mHP5dRQfspPjRTLPkBKAZP8t9euM7mTFz24ExzJR9MxgSz3C",
  "key16": "2dcAsfVYyMhbNP14DkjEwxKYCYFM8GToHHVrGx21g6d8VN7Ac77BkH3oPdhzgP8LEguNnr7t46shjMQokRJ3qq1D",
  "key17": "5ATpoV9uTRFFkHpu4riCZJxJ9X13taeAnqqA5ktjZqgDJZoyZSJkvX98qRXtuhY7MWRDer38ohAbjoJRctLRuAgS",
  "key18": "8PWAR8kLsWbKmTYkcdkU44iNDUDdDUoJu686fKqB6C51X2UDmicJExFLbQdXLgyQ8fN5x4aTg9h1CJ4N5h2wqp3",
  "key19": "7XWUpUkc75NNfE4JZSdyQMUnEMqGRvDHpkYbGTLn2BMnidFxRB4QSDHkMGBYhak8gjPpFs6Br3e4i4oAEUtzvVp",
  "key20": "crExoFSLisHjhiuoAfStiMMb1fnUTjBBv6RqTULVEuwxwhus2v5KTJ4xBvKsaLgfwmACYKwmcjSY1RTrPepYsz4",
  "key21": "2CHKgzy8BARFVhGjVqrsCTiyePWNeB2Bg3zb1oQAworGT2Wf6cv1CMwVmFHihzFZJtcvPDh6CqJccyPxBisVHqgL",
  "key22": "VutGYnLp2jvB5pdyxP5auDtK2iAGu6vAAnH4VArMSiNygvYhHqeyUTyn6zWMG2fZDhGdYDRZekUKTVvNSQLLn3G",
  "key23": "3aJ4RN2F9AXp6RK1aguG3rpnsowXjA8uYe2TbxWDEARN7KquU3tKJ6tECMBcFudfTkTbuUu4A76JDegfJYLPJZ1T",
  "key24": "4MxEFiMhoQXaVdn7qN81R5thsx9T3M1hMvGQWB1KAoyZiSuafRgV797ga8ebX3CwGh8xMggCsDjqBbG3gJPpta7f",
  "key25": "z7gnQvANqEHyNrVkQPDBMZEVY41eg1RAtfLRcEait4uNVxyNjvkPHncWELXg8AQtR6Q1uoktDEZTG9vD9U3VM82",
  "key26": "3ASifs9pA24WgFMWHqgFQQ9VGE2WSfptxShAYHPaSehQB3QXE6NdL3MMgwqhdLVeFPdyviTLAeaUmQtS5vvAU2pp"
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
