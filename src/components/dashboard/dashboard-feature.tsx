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
    "5qU4ZJ2MrA5NvHz9rZibnpHcdbWE3n9NHdhH1Rq75jwXp8ufWwfFvduArY6xeEpC1CPXqA4Syha3DBdSjfJJ4jWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "612b87hGZBoEVDzAs76RkpGqG3ZVnmhd7FUcxH918ZynKd15ciXk8TYZYX1ia44cEyAR37CowMB5xaJhMyLa4r6q",
  "key1": "4XEKkdGa28vkc2PsYcENQGWw54X7Hq33VhxAQNvZRYTpjRCx72bs5esMsFXa1u3KwCASHaCq4ATLLwQ5JKoKNoKp",
  "key2": "5WMQ6mCQcLSpHgTvUsZ6w11zzT9UMdRB8Y95f6bwmHYiNZa7G9jztRyo2EUqThQfYU3GrXLPU3YHXTcu8HL6epGH",
  "key3": "DoM92QAq9VXT2dHmFneuTgEVw6Gh41r9W85DFH82A6382t5wzRt5vpJF1cLNAarv52JvQqwjVNRrMkz3y7Tzuxy",
  "key4": "2ki9nXgvaR5TUDUpyddf9Bwar55gwpcxRb2qnevqL8WvZEtcXmDzzBEaFMX1G3VspaUwXsijwZobW6YXJsQ1AhsD",
  "key5": "3qMRK5HSiqAoafdvmphtaf1gFvANML86aDN99Kwd1cowhJiG9LukGJDaG5r84bajmEKAs77VPtofxkDXEqTvN6Yw",
  "key6": "4AEwwUP7XXAnNEcb82SMeSa9WjonYjxJTh6C4GJDM9HtjbggTqCg4gX8jJ39FLc6kDRZPdA9TnRtsy2rbXjb6HZS",
  "key7": "CsaMC3vc5CCJTrmwZgz4KctqFLMpRZzihmvwwkvsTzMea25vw5cWTQAd7rxLqBbyujmWpky342gqjr6p9cAseE8",
  "key8": "7V3L4yPv35PH9AaLrj4Jt4zXWVV86T2xHpJzFTGKx4v5vgDcHGBX9wBp6mvDTMwCEVuuF65yVNqWrtJLe1Z82LP",
  "key9": "4BSBjbKzJkQ6if9hBkRmSdKamefo9arLwdaRTFdGy1tK3cogGvCihKPHwfwJk3CmCquVQhFjE2xYqeKcVQSg3Rmc",
  "key10": "SwLxwGJj8y74XFRmDTZzaxxkhyVwSUsdKUXFTzp5Bfi382JF7mYf5YaSFTbptUQ6gKMH9KYEJVzAcwjRcfACtjY",
  "key11": "56ehJbznmTcx63iFUpaEEvTUwTNJgKBtMemBgKbx3XwEgVw6Hq3vvaBeaanMtdZzbN6Fk1HZHB7BNoKV55QyovMC",
  "key12": "9ERNrpKEM8SLm5ixL7cbEUmrQFdHuLgexR6RC9u3uwcf31fyh3zzTibhxui3BuH8nuGMQA5kgJjdJhf1b7bb6iW",
  "key13": "2QnysV9HYrFNCAmkZJJEpVQbj6q8Jg3jZkzUpC1th5VG7THUEpBfY5RiD8ACnK25mXDnmK3BtyqjruukCBzKewzS",
  "key14": "4kmRdW89jc5wCtoGNHgdvJd6zfVVXUYksdYRCNE8xWazDWqU1phfi7JRQvyrfkx9MJw752D2bH5uKjdmcoUH9cPv",
  "key15": "47bBraXNj6husYsuRnwKTT3Es5BNEw6hw1hdUwb6F185KrKEN3xDRdYxDAThy83epyxYPx5q8ZFgjbWWWyqmxwab",
  "key16": "5HsAjdkcTj1sknZSoKAXsFUzVpuUGkyU6CuV4i8h9EvbkMWrGoH5HZL1qu2UJt2EV53Fcmuco9zmT4XmxNNCVe62",
  "key17": "4LCxQuGDrh1uSVcXcGSsvz3GzhKsf8z4cu1ATR8CmXphmakFjNw8W5gJ7M8R4an27M94aiYshiQcNXcr9yZuzobo",
  "key18": "3u82jr7mp2EKLUv3AqJAbXcirZeUMX2vjac9wmsdkDytviYhL5pZ9nkoh4ZTixBovhHWcz51JGUWDMmWLsUFbxQt",
  "key19": "4PazzEohrdzH46aSA5pTEKo3f191yseP6aFevWfND4LZNp5EadCSx1wMhRq34TMd1CinUAQXhyxPgHdWz1Y1Tf4i",
  "key20": "2JPYNwGQwTfmfJm7UH6YdPnew7GA39eavkiihhY6pg2gEvXtWJypgb4VyeqrXU7rMrpwC6xPTwRkpjPTvKMT9532",
  "key21": "4sYftV9jD2jFwrFZW7xf57fe7KXqRdgvjNFFaruZqDrdyn49RrNQcZMh4cfwNRfJ67fqS784wseJ16zcunCQnZL7",
  "key22": "3Brk6HCE1obHYBSNZ7Hx1mKiU6zmf1ziYwESBHJqkPv9CEhGyiVpKi58CQtEPLRKAExDGuDo4wDvZfE1z6nihK4Y",
  "key23": "5RXueiqJ7tnB2s1UPhePYoesASLXqhsnbuPy9Ma9WeNMdSr1wzfWNZuDptAC2urDrnRTqT5BWyT4C2KYkwS5Hrga",
  "key24": "3CFJAMsjf4wNyaKta66XEdfxTo2zjoDzbmvzEMM2m9iKRhTGuPCa9QtGZGBX2CuRiSaZ2p3r1bEPcdPHrWTnMZL6",
  "key25": "3BjJhiyhv6xdtAqhhqM3tquovoK6nM6W23YQxMVsNfEEvnyh7KcPA4HpaCfrrVLipGwTNQsvHkiCUKnJyen3B85a",
  "key26": "UD4Gqsyg2x2Le7wrMA119yWfPQ442dy59nXHNiFanCzUeDJtRXWH8Q4EVQ6SNMugGT3aV8rVrQope3DdGvX1Myb",
  "key27": "4eSvBgFTNYgZn8vRfGJHwprsXjGxWRR8L2nnQ4B5dqLbpbsR5aBw7AxuakN2eUo33xfB4CtHDGLN3q89NNTYNm7X",
  "key28": "4pRFZjsjgDvLw6MStHJdPjv4BAbUhwKRXVK8S3uoNk1kG13aWYPaFSUA5psbSFM3jQUW4Fsnien5WuvfHfWyVVDM",
  "key29": "4mR5EXd66debqzmFbtjxF7NR5ecfJSxpt4e6W5fqSmceMPxTGKNr8AeMxVvTK93RumRiizoYEKSwwKaicht3pQKr",
  "key30": "2SCAFosrubF3JWvm45xwj9RJGZrABKos4irtGMpBhgr1rMVCfX7DjTczzmpr7dJBvCCBCgQKBqK1KjKPpaBS1a8F",
  "key31": "2SJYnJqjrE2LikvKXQpXfbrFeUhi6V6XUVwJeJr4eQYngqZqoPjSXcmTRn6yZF1EXFBynUSCabhaMzm3XcMxtJai"
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
