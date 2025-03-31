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
    "5wtJrQ8Cd7eKHqcqKyaCHUpVQQZKzhd6kTU9x9i9eXaUGPftNi6ikGmK9AhtDHaCHG349yqJXJw7wgUDUAgQVCpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51MXkZN7oYUZhVxzSrCCzKpg9YB9u9WBLxTWTpFtv9EjpBL29Jwi9fKVxfB5XccDnMKtJZ9M61Fz37hhvYY9YY2h",
  "key1": "4o9oNfY5xpBmfzfsuj69YZtfJVzrzsi2LeQX5Hvxt3uQzMpfoNVSBJnBGi9L71WtQNB4iseJS5PHHNkxpjk5DvpV",
  "key2": "cU1mESu1qdiiRndYzEcNmoJeN97uLY8SVfh8WDBPjWmYZSVuqiRXQzCpuyHZCNamgoXuBivn7ew6koKd2Tk9eus",
  "key3": "3WokLxzHJzvWSaV3WX2RZnQwhraeGY8dwzBChxwbbfp4EVsW4BfdxZvVJ9WzLsXrPpGAE1pcSud8PGmei6eNSDjS",
  "key4": "4zJjzxKYXFdvWd6WU1n9e4Aa3eaKVRcYNKJofZEjvnqBNiunFnETTYXZ6ukZhH6mt5CMDwm9rZXiY2qP62CxsCMC",
  "key5": "3A33Lbi3TspZ1svDpuVmQadXWA7iLViENPiTyQrCEeaarLn9AHcBGPL98GQQYy8PsPQ5vcoHqznAqjmyehm16ady",
  "key6": "4kAGKSjikc28pu3z4MohApLJEkr3JKNdFyuLQBRTzYhLqeuDtbgBjWvFwczzhYzX7iutdiThNnEJzDNZsuwZWycV",
  "key7": "2MdontFKQbVzjwG9wUmRHFyecSCf6bEYzRCcz8nGZq689qRip4XHB8GXLzk3wWNhEmbFg1pskuqTyYP55y11PFDh",
  "key8": "43cHn5TDAFQpW4yT34CLb5VLVPgriM5wCTVnP7pmKKhUsZrZxFbq9ABNHtF5XrjmHoBUjFZt9TvLTzVmj3nAamum",
  "key9": "4ecxatYs17d2uQ1wFaxeSj23GfzQTtTsZ8mAAFZyY5YGXLydDiiuWNbVqwGSPwDQ2KjF1wnnnB2c7FpPsKKLFT42",
  "key10": "8wMdxCKRELQy9QguwZ5EVxzixd3n9RE5jySNWBZDYK8HJSw8GvnishhQrjm6u9zNmCGjmdGmY9zF8FupbqQoKAH",
  "key11": "5PGnBa1SfeC1ey5HAi3rBvVwMoG3X5ums1JcywDgfixELvhxpDDnDHxr8amxhuwHvNCnLo7kmnRzQiLB8JkD5UBZ",
  "key12": "47NZFxaKS6jqF8jRLHx8CXVeMfLyiZZsgboVpj6H5dtCXfesYghdJ1dAkw8JeRhJ3stcdjLZeX7Rr49zWE9my35F",
  "key13": "39jQdUKSFf2NkUXkyfjQUCj4UqYBT1xDLkhZRwVZ1jbYQZE6L6TehFZ7eQ8Av7AzYbRxoQPfNcTbwBopRbrM7CWR",
  "key14": "4q4tdh4oV5CojmRhg7LoBja8zCYRdhWT4aY8MSLcwnWVp9MstaMRTshqUmKWzCvpEe33LX3N8qhJixxziS2Rswoa",
  "key15": "3zdSNSe2DuUtMqhFbJcC8YrWxayGcxEtNqQiLSX8Xand6V8HAhdc5n3HGUmUCXxoVAufpg74DAGcfvgYjwFF8yph",
  "key16": "2xGBGDewMKyfCWVEUEoqaH9djnG4uDcrYQSt6gzptgxJwwnEnGXsRG1eNjSSdBaEngDCURM9JGjcTYFguyGyFBVK",
  "key17": "5PbCfUsXEYFaSe48xTNgy5Uip12MpRmRbnq6Sq1fsc3nadHpEwABtPca2qQm5K35xBcZCkGS8D7NwU49wEcJsLp5",
  "key18": "htdVXNF7TBw7CJCbCAiBp9uqMZ1izMEBcZQc66P2Zw5F7aCZu4ZhxCG4rNrKFgfGyuBa1VaruyVMQPnJszze4za",
  "key19": "239cW696QsMkwNnnBdaXChZfKjmSCKokiqiEFcDJbLMiGiYuunBqayP6naQqcHTqRXj3tQiHYbJTaxewUBVco95o",
  "key20": "3bYfyAeXAQkwAYDrBqfrSgGShasYj3h9Ex5TLfyZKYbSTsyGVJmMZvj4nwFoU6L6cVPXLU4LkhEMAGBLV9g2egTv",
  "key21": "4mFAoGv2sLgU272mKGDt4ESYNuWwzTREgTYJWqP3jf4STMyP3oS7B51i3ZQ14r4kdXFRYq8394BYJiwwb62dUXwh",
  "key22": "3GahgD5fRajJ8TGxfYNVjwh4kJapQBiCVjVfTTZnoFBkQmh5FX3oobjxLtesSuZ2xsDtpRYrGtD76p1pgqQpSUjn",
  "key23": "2SJwWMo4GPxAL9UFWv9QsCtLXhc78MUs3THwp6Xh5VFWeHzbuuoEfJWMK75cBir5ytiWYte5BsV89bL2QAp4vPPH",
  "key24": "2YzMUbMgxEMksvMMewrcanMkeujBTjjeusPtdikRNLZTMmtpTV69YJAmAcDcMmHmqvzAWkxotXQqRS4zRPWCr5qf",
  "key25": "66MRcy9tHHaZjn6XpdjDoAMTanZSqPeMxqdXTyMwcTG2D6KS6baUTpfFhGDButbUGevBsxaMkUja1AiHEXTchd6q",
  "key26": "xSDk8gfLK2BuSqd8Lmvz6DexSoRwc1mV4ZAi7WQrGinTCH3XzBhex6ZqbdDp1X5tDHWpLkUeSL58LevviYz95EZ",
  "key27": "w1AeYQbaZZStxgQ63Lr3UMJgudAaBBRbFDXZFMFoLqp9AHDTqKtjarbaDKX3wVDw1mtjftxL2YJtJQGJyhJHCpL",
  "key28": "3my6u1nmkGMmuUEdbd1Wi5ogSxkEc66qwqa9uzAzR86VTuyHTrfGpxX2efjmgDogygLAEa5RRdmjCTH5qLYjcuN3",
  "key29": "9QGhUKmuZe9kzBoebiAMzuD2vyeh5gBNB9sHi4Dk4LZ2huH4kjm4Vbay1Ryqt7xtymFxg5MC3UvntRX5iikVMWU",
  "key30": "3g9wyzdiXaJp5VjMyLpMpXucqxFgx2QTP8iDrbqq5c3dgW9QvD9t3TBXn3CJowhFJTAx9X6K6Cg4RYdVkycogo2n",
  "key31": "25oGj6gQ2oNPZqE6Gz4JE4Se38XeiVKfAk1ZHPyA6ynxKKG2xvo9kGqBDE49dPuf1SEtzEhqXH1EbBTuUCMds4u2",
  "key32": "4j625WqNz9SEokJ1uV2ssVg2c5J16MEiBMndWMZNowZfNLjWwsXE46mxbLV5CJvPBKUYJTw3wX79fNqkHNVRsS81",
  "key33": "2G3shmYndyagsziyvf7G31ckp1oSefhc42HhNpr8FPHXezhhEKsW78S5uHsay2ivuoVGij7sC7KfPrAgKrhPhZyK",
  "key34": "318foCy6iMUtY79BMBU8Aa8WWjspTy3MwMWPbdyrHjoeabZRenm7U5vUgtXnU5wMRmErWHxgLJQVs7gkYGvLxHbE"
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
