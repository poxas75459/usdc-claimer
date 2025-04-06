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
    "4dtGmk7T5dtmAChmJFwJH4tdoLx2n2vCYuHj3hZ7s3tdmFVuXhPWUqhrtfmNcTY7XdTpEMtfLarsSL8k1TFS1w7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48BSTBnxzoRGNWSbBmvHDVvw1tbUmu7t32m5zCYSmMHKikE1kWk4c4JE9ZAMjSUWXPc8oq8EHccYDFNZzmorVmeS",
  "key1": "3fu6x3fNeqiLHmdcdnyq45N5otKAydyPN7fzXR1e4Y61sdBJcMhRA81RB9BtJ7j5f5YPhRighKfm2kao3tSUC1HM",
  "key2": "3JVnXf5SgCiACy1x7xAK3s3Tssj5XVsH95iaVRT3gye1rvi7ejEJPv3ADF1Dgg9AhMxB5icSJv9AXx2N9VFUYPsD",
  "key3": "36HAVEU8TSoo7rtF71wDMxSsZzxViYdd5mC1w2BoJyZ3mZ4xbxLVRjvvGkdcYjPyWbymz8d13W1U45EuvWgC4BF6",
  "key4": "3VXxyLhvxzv47duEc9b1QhLyUy3gwQvhCaqKaSD1uH8XcdfQNstVV4XWHXUvWeVNGiHis6imJRfMwaUAcibv326E",
  "key5": "2122jSN5z3M5FTnZRX2z6yaJZdvTfaQayMALJ51BM88nNMKXkRAXzCp5vSiiJpt9fuH52wUu79chVFxooPo9DkjC",
  "key6": "ALpDwxtGz9P4zC7sWDzAW7RmQaMHKXDAjbH7mMTqbGWm3yFqibRY2jhgzsBXoxqM3bf8MTZzwdByGB9vsdmFP2n",
  "key7": "EQRQxnCvffic5r9A59t5AABdv1F8UDDqsc8xhmRA3xgGYqxoY3frqYwa3xPyJmjJD6fjBRVpzLtjnYvMhX4gFRb",
  "key8": "2Z4thwV96MfXbrUQcoQGVoCYtTR6aS3g7sXVh1MJaCoB5dUT3d6dvi2iHqojVMUCkfh3kpnMzWFfMKPHomTgH1gS",
  "key9": "3EWjBoWbRh6uVi5JifaWw3xT6qMbJUkzf4inHjoZK4dwoJ3CDyftqzhik7xmYfYyWynWKHLUm4BKeK1VW1SWjdkm",
  "key10": "hYgHqMexJHczNP5qJyUVxefp7nPPZKeKd6f6g1V2HeyT62gEtm2XNn43FagiToodDeeN5LJ9GqPo7hMc54CA8Ry",
  "key11": "28DcFXWViAVbvqYvNn13kQ4afbQ472htxT5iAPi3G4oYmkBdCvG6B2n4rVG1jbz4X9A5Q16nAA61xU98zqJdsCYK",
  "key12": "4bt93q3qqE6ADxaBeJ9qyYPBNGPFTryD5UGj76ExDyXuuMygwBQ66fkqHD4psrqkxGWXKLvXcSFruhQe4uv2292n",
  "key13": "2MTUcSnUmUW2bxuskdkwn8dzdk72VN7daBfBwjyh6841nS15Pmn9eRgFnEZJUppi1WE3rJwFPzfXwyhUSVoykUfP",
  "key14": "iMb7fre7SC9aqWd7rnTNzowzgBs9oieaiQuXZhfLfV5JUyfQUZtzgU3fozn3oiosNAAx3uzK33zqBaD6sixcRYe",
  "key15": "3p8izAT5JQdhBWFwGXZGdbyZdBaWSdhTzVvMemhauQJzY52oEP9wQj6NV6Ywi2aC9aQnoCJNShrRQk9rq1xt8cYX",
  "key16": "5QghjcYHou6wiA5VzhG5zPYZurMXdrS9EGzJBvhujB5zwkkqARRZmefzjeBuFjryBv4HEXttmjAdxP7jokrHNfm3",
  "key17": "5vbgvbYkwJ4mGANh2Ak2BELEBYiWaFhR2ejp7frFmMePraMEhsHJVBmC7qZmwhkyfaAzgC5kNrPQVTj5ooKY3r2S",
  "key18": "32JzUxSafRtSVB2Xp5aab6Vrwxcch1rWWn5S7jg17BZ1fKZZ5e29nPHuzjtcCp2oFR4Mzcecri5YsBDmHyBSfzgV",
  "key19": "5YDufF48ivGiH3vPvACUjvSSqYWkeog6cTLxcLbVWzTbVJ97UNz52BsEeK64T7q33bayxgF3vG9FZFicY4JqktJp",
  "key20": "45Ts9iHgMyNtetuYVkjjEyoRMmpxjgHPnCYvafPHg8hNc6ZbeCiphBdUaFRv4yKmRcYJW7qEwS3n1sLYrgf71LCv",
  "key21": "2AZyf33rgixkZZ643EpAfeRTEvUjVBsphj8VuhkbABVcXtWvck1J4qNRJyYP1HozC7cdQWYYEgCNXHjhFiVSFuaa",
  "key22": "2KdaegYQ6ucqXE8WhcvFvzVCFVis6qASSuuhmSGvzxCgLFQv26NtRuVt7x7ULEtyVQWMPEd3ckR8oL7tJE1xXvz9",
  "key23": "4XcJvBaKf7yS3cMHcX6v8zACR4exdCSoqfoSbviMM79n6E7TbWYLUH1i6AuaCEvqmgPkxLxWKJhAdZPXyw5q48ak",
  "key24": "c8biSZqjGGob5AUH9MbD2wJsuTgkap9Ugr7sHtNCt88EZwbfSPaUvbehupLKmb9TVoKjLWKxA6sf71wQ6NaPN4f",
  "key25": "3DCCogFMWHskLi6XcCxCmg1HttM7tgJkE58koSQaZGHQUwXHrNJbZ3BCJSWjXERKyqfsuHSXHeVxkcavTggXbVvU",
  "key26": "5hActUkxP2Vf2DjPeDNRhFfUBLGzGZp5zpHEUHzsUW6xpbAPmpUWwn93CVC3JygFUDziP739Cuz45ghrPzPtzwKD",
  "key27": "4FMPgvxf8RMYZAtPcPRGybuWT8hz2T2z3zHr883PPaxmTQYpL8KLz2jcvPE54WLQX1XQjP7q9PR7pjzqjEHSTKtH",
  "key28": "nrZqpCEepFNG7yGzGmzkDre5NZzcgChFWNNk4Ebow34yeG6VFnmzZ5V1Zpnyp45b7BBdQQkzYRoi6BgnkBsHuX8",
  "key29": "V5uPbwJ5b35nVByxsW1ucF2AVHSA1F13w954jnCJvENXvLaV76WFSm1YbhdCNaD6grukFHzHFAr3fcnmFLpr14r",
  "key30": "5bfQVbhvdPZuWMpyBRrHMLzkGs9a8Ve3QdbVVKzHNUNFTSrba2vjoXeL5y1LRd52fbh1f5Upmh8v5KVdBcVmA7ch",
  "key31": "3npkqGsQXGPKbsM8z2MbSrQGWU3rgoPLvd1ywce686jSZHLQSajeEXjqQNGeKriT3ryZR5t737pLGf82UBSVcVWq",
  "key32": "2csDhpMcGALMXP1EVtxWKHEU2DN57Tqh37vd3piTKA5bC2DuSm5TynX1gauFkfPWP9VpWSLiGy87vCstvaoZVvmR",
  "key33": "4TsHD7UmgCFdsRQBEbZS5kVcRxEqqkYwQw4gAb6av5PjvHXJLwfMSvyHrZVD9QTXtSqdan91p7UtoH2rvB8Joq9M",
  "key34": "5zpZA2rHyGaCFyp9vFPaaq6cP2JveWrdyjzoQeqV44ZVKLwzxU8KjPoxyDeMQhrFjibZLqAxRsXpjve96MeeiTYh",
  "key35": "27uYgd5YZGwMxNrsds4Ueod6DH3erdsXwh6hjYK5XQjTMcLevhVMJkBn5yK2n8L6Cq6hRtNWLza7gDStxHhqK88c",
  "key36": "4t1HTtibbwGAucVfUFz5d53iKKoAT2ys7jL5Vp1uL2AR6S3apzzTdPYJQqcMAoTwoTq43sMSz1K5fSkXf3k7G4pM",
  "key37": "3ju6yQbwboY5VkG2qK3QG8d1WtnEHPZXgGrfWsPiPzAoUj2B2bZvHfdABUADUUF2915e8KNTpmcJPSvWdihTtLV6",
  "key38": "5UN2uZzPBtev2vX3tpbLq27Ke6mgpe9w7DYBxAu9jw1rqbm3ymFyYTFX5rTuyWeqJeb7KejhhAPiSxth2ZfeTcas",
  "key39": "4ZUwD3vqX35XPPWGp5R1bwumqFa3teVXzYge4A9zyJQiCBnNShLknfpUX2QcnxaZ7ttfV3QjXt9nCVXZx42T1MwA"
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
