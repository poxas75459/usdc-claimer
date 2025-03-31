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
    "2kR6xDTkxLN5DUF2PyEd9GSw9a2nBSvMaTgS2bs7mCQAKosYxoyAPngxee4n6vJ88Lfv4LX2s7kXQqg2F7B9Tstp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aErLNhuu4BvWPjgVCZoUZjGFZwhiXWDF7fdPdoditA4YpLFXPowrjPizM9vkjHbC4LT1yKQzuiFpgXRsPrwv4SE",
  "key1": "4hmQqeSzGUjbGZK3aq7LuRPePiZcrzSmjqs3Xnw4t8wkFTDZ9a86Nw52WoTnTJa6sU3x2WyZLDjZv6RUHLdfbS2E",
  "key2": "jNkY3u7JUJcYbTsS8SL9J7W9zv5eCNB8BeQjPyk6btQoG1PYPVbAD7LCVyymLFUnR62RKLczDcNk8pvKNdkgTBz",
  "key3": "3KRNvzqphKGscafonA4KavbU7EYi5cPukXvDujSVmMmNrUPV32sox8vbwjNyS8zeTnck6URy6eNnHAbkacFbz6ib",
  "key4": "496DZudRAFwJPeWuxkpmaVEFxjEQiZ9p3nPwTSZtGKP5pzkmqFQdcRFSzKRruB3rKzoGxMv36cvVLCFUGrEvtLAp",
  "key5": "5hVckHcBEsUVaHD7UaHEru3uwAQsS9Y5wh54bmqc4LUUuMszcEv6EnHtdnTbfRqkrjD5T3hvE2oSiWyiqviq7vma",
  "key6": "2AiksGzUzDKnLXe4nHFWKzPZvxgGpMaaZiFDfhSg4uzqBhGJ2YTL8uSXmyySNJVGYvpcEg6gd8nnqqahyJW8PGMN",
  "key7": "26Wrxb1G13LvUCLm9u7hcPybpgYG7kZQMkgum6ANHLLzeXrFwYrcANvEP3N5J8zUofLH1apV2BStUTfrJHnDAHff",
  "key8": "2tvjWyMaqQ9EAQQhAYpLXJV2gnmipyX9Cxr4RyzJEFSGFvY9B7NPuCDHwgw2nv1wrnEUzMUKwsqmBVKBggY2q3rK",
  "key9": "2QeiXF6k1SmV3fPrJYQ3nrRrEfUeyXLERGQTtH45D7pqV7jiERBnoFWDqdzGpDqczzNRXhH5zojNZpfRuPQK4GiF",
  "key10": "5q1tt14ibLo8AMkXic6oNVUNXdh9NJFrLPqLGYoksS5zQ8o2VPv3YrbASbQ7Q2oep5rwwGAJZWJc6kNBdyctuxao",
  "key11": "5aHf18oiDBWk8S2j4JxURYDELYtbbuspu86tmvG2zgJK2xNEkFLTcAs6CRKN2ZAJfzDbPhr9zSM6w6Q4ZVj1puo",
  "key12": "PNsqmfsmaXo6oyKtGVcCm98FPRddHZwAUZEwojiCJZEvac22G2MKedrsZH7KKKgeA1BSSpU4cdpEATsZoACP1ok",
  "key13": "4ciDMfkuKJtZYsy5TycEbfepfTUmfiKfE9GVG9ttLtH4fubXjenG2gsQHStm6wEGqhZFwPQocrjbniqrguXzn2QN",
  "key14": "2BAB3vDW3bfFqmJNm2v4AFKHsXZN3HX98swC7qu94zag3buEyz1oM18ZR96VUevsL54jU3EsGj1HgTQVBzLzyWKg",
  "key15": "2p4w31P7ym2eaU1NfG8UAaQUzq8zn8VanKd6QzeC35zfRVCNmFvcjFwkA7DAmzyjZDnFdVprC2zTHnfezzbzA7Ri",
  "key16": "5jXTHnZySVsTL83fZzq7NuC6wkFEX74tvzymKhgTZ62SnHw4Vh8y3j4RiA3pW74RizY5REQYH6B9fSQZhjUVn1XH",
  "key17": "4WemZWuhjXhULQFDuLsBWDNfW9UC3c5nJWxgCH6Z7uMqXXCMUbDRkDcseCod7bZM7fPUS8JDfhLebxWzQ5CtzKtd",
  "key18": "2dd3yztVqZK2rm9XWxhRtpxVbC1RwUyUP9aaquevz3h2tavChiu3TRDisihHjHW8D4UmMk65qVDb9EQkNJEk1Whx",
  "key19": "QpCK4yq2fxRNpn4Jd4jbs5XWPxXUi2AcMbcHphhNpb6hJqPySFxyeTrCEzZCyNmq6H6NmcWbVuFf95zg39Adi6G",
  "key20": "2D2pV1r2WS26hKyCS3gQ72vptk7cKbRK5Q37mDjgDRYCYdBYD1JeaN33ieWN4QP3xgaxDVnAnhwEFKRfMi5ywkR5",
  "key21": "1iLFSwPbKsKwjc2dmprWXaBDLCVQr9hrQ1BEPGHLuetUGk5sgSspRKAre2Hp3KzTtUR6ycMDbLw9tJQrqDdPXa",
  "key22": "2jucfdnM2sif86acmFVQBrnCrypv4Z8K662WXkspYSgoVsnSi3pL4m4otVz42t6E6AAUAHfK6LB6WDmXbxti7V7H",
  "key23": "4GTFf3drwApj5irxE8s6j2tFi81Z4Tpn92ogYxZzVmAd5enYBUq5uME4hDuyRcd426tBWBnuLHjtAbAE1LhbKo8J",
  "key24": "2yYgFFzT3Z6z9VNXYcbCfpLFn3Sv16ohTeJqU3PMqyQYRbqzSEmvmMpzx8kRGG4LCnRMyVa5LZbC5EZ4yr4Me5n6",
  "key25": "5JmmZvrHLMAKAjvsuQbz4YSGv8xiRP8WqnrbrW6KykYJVMx3J3shuJ82LSMsKxjhWEs5p8wPa6Rxyw9kpm6zzdn1",
  "key26": "4ik7xwrdPULrsEt39qDNdjy6hoWfzc1BetazbajBoT5kibrNrYYenufLte6AD45LfyjBzsvVSWCyYx9spJrfXfW9",
  "key27": "cDpp5RPidZzG8TJXxFCNscqucfRNgxWx5HZM4iP54DKtUTj1m8U36Sh2LEQx1yggoTTYWQpY8mBWDCqY6zB7FMn",
  "key28": "4ARKLRVdtnp6djVpJhMsTYKVJgGdkQb6ndYdZZ3UxTp5nddGf7TF6Dh9beQYSZMtWLRdWUG7YhhbyHkF6BxRmzw3",
  "key29": "5P1s4K1z1CUAu4g25c65nzP6sMHDLK1JQs43XzCncBgJe7Bg2KoaTV2z2z2UK2LafdavaaquyCG6czg7WmePkkLB",
  "key30": "3aQxGg9WukT8P1AULAEerEbZEoBZSWxtUGJmVtx7kwZzLBbqRWfG4BfC2NDHV62rYjoWfiUdWG1QbZ6CwTpQj744",
  "key31": "5aNpCE1PtxE9PFFgAkcD7wTufkkGLRMsRPZaNpYZmPmBgPMyBeiGANnReZddAFFCJPb7YJ16UQyUSWD856hLw4g1",
  "key32": "4xj4NMcvAYjUNeKBhX29Ec4EapbZ7719LDFexwCiKBQdQdY89t3ZfxhT5sb9EgSutpYvW7T6w253ppGxH8GQP3F7",
  "key33": "4oZBTMvBhFfCySTLQF2BjVM7fMv9iXCE9vWpfapXgd69wrGcF3EmXwivU2qtNAGUfK1fLmJ6vTj3mjCqkdMas5rk",
  "key34": "5b4dWq2ToLWG2VmorrswCLsRvGyh7iDNtV1KbSv7xXburk3nxRbEbfHXaqh8Azkgpiq7pAwDVKiu9DHvekBFvrCY",
  "key35": "5FzDm2LGfrx6kGWrx66bYZD7jX5mZtwweU6NxbchLiReekFjnK2r2iv2uEq5F3XiRDK2aCacA631LLmW8e88BFV6",
  "key36": "4j9gzt5uor648uDguCk3Z4xPcmd7M94R7TMmx4VWkVKNMkq6xScpYs69apTyW6gvC3GP4EbjUE9FLKqx9Fxqk6do",
  "key37": "2S5LsaSXnnKvPXWjUYB5rxemM2KFGKWncct5LUidrJLDcwzhEicH3uUGfcfKkKyuSz5rEmP7Xdf55LhCSb9E3WvR",
  "key38": "55N8DShdYeTVR8ctp9uias9Hsya7TzRVQMBRBnDhHuETmQrpXeU2v5xdp4T89LF6SYfcxgV2T44wozrgFHv5vQUX",
  "key39": "42Ly23zk7jmDdzkgjb6Uy5m8sCkrnGK97C5CvGHcKrRfqkHecJ8S9ZQVkZnBMpsu55SAtqkrMUvudGdsXAwYBys9"
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
