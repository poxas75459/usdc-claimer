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
    "5fzoe2aJtjxESDqxHuUaazgYwZt3K3UoYfvdKLNaoyePJrDeRPUkdz1fKiqjbXMq7LGKNEwDampR1ogvNFcLRbnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XnqVbHHkRj9nTSrWj3jBjJfsih3nubunkxhWjF4V7jGuFHStMUDQTSkSgECgRnDNsQpJEDCt1QtBCUiSqQ6caP7",
  "key1": "2cKn7nySZzmWRpX6hjqDzJaTAGAVzLmLRj4YpHGGNEb7SFUjkJfqYucZxSvfB74pcJt6qG8YJ1GqLrTEX44aqiTy",
  "key2": "4EK2YPYnKtLsnmjboLS8bfK5VmD5SxyqGMvs5Qners9tigX1SSsm2nhsfKY5bM71S6tDkpdLeDUByZFFf2p3F6ok",
  "key3": "2A4jtZtxPhqg8BLPMNY4KtT5jhBevmDKvZekCYfGHvtdo6PTgbERfzMqQNTRPvNiERKBKvk2EauMUZ6bp799xkuc",
  "key4": "46KQCufFxMXKmrdDSg7am6AFaS1U1WoHBAs5WyqjGNWuUa97Tzqf6qCp4aqPju2kbPkqbyZzmfUHVmgkMrwFqYSf",
  "key5": "4LvXnjSdm3bVvqVfbk44t4PRcdxdhc6YgUmGwKwDXLxHsLhEoKkiY4eL4HLWUEz2e7VsNeM5N7D5i2ot4Q2vpw5G",
  "key6": "5AuFSVMeD1ZK8cLHYwj8fU3N3YJLVT3H7EDHEhDc9hV1MkD4tzy94HzFBbLfhCx8ahsKExuPEpTH9Yo7A9ywRqu7",
  "key7": "2mCpobwzP8uY5t9AxFLS6EPkqF7FWSfiQLNFGnCARsKze1aqrtz4KKaypzNWq2hsZBCDugcArVPyqjH3g1gH3qWv",
  "key8": "4RyEF6wAZSDDBTHca9rE5cBsXT6eJZzbR3yYsJ73Lp9YzNcrCoPhCuJsSc6AiWTKLm58PRJAt4v38p67ktrHvvCx",
  "key9": "ax9MwSNKv7LiNWoPp83UAri96T3tZhDpan4po6qkekQZimiQEdacFrz9FT4Kde1Pmhb2fiqVqkeJz11fKJE2pXu",
  "key10": "5aTJdiW3RGF5GTQhAe5qWhhoNAdfaJRB7xHLmuZJd7pXaa3gczoZwYwiYy26DCNiF1ckGf8rnkz88JhEqLK7cH4r",
  "key11": "4R2m15iEPV27cxtzz4ou4B2nH7dre8YJok2eawQNUKLtRhq4eEFNJhP7tE3YNzf6yXotYRVapx5Jcj4DNmTodetR",
  "key12": "5uhRk8paLaQ2KESAMJBiEKuVsNWorBsAEcUP1idVE6jPjWTGDGXt2J8QTcHP9KunnbGYq6ydp5z5uZy9hPJkRkr1",
  "key13": "2u1Dq6UK19sAyg46eLSrRFfkNx11Kec5dbxZMhp4ycbPoeN9Xt5qLenqch2s1A6iLCTR4DH9sE9HnMoQhsRyR8EB",
  "key14": "JvGJtsxfphNoshV5bwxqgDXQvuCexnku8gkzQZFhxE9H6LcYWRMFgPhgqrVPrGLwb7dzuMGL8k8WW8KQ6kQZH4H",
  "key15": "4bt58ZmiyuRDakdnKgQybP3ko3HuUZ8cLr6EfgauvbE3wHKKu9FX4dG1drACaufaUz3ZLoqaygTbFhp9Zxv6HVBr",
  "key16": "2h3mh2vJLHMnQ3uT16E1kyn3wE2QVvpy4dKncweqirDQvVPdaPSNjvpRuZxMHfULcJFKnFjirYgqxaurKeR3Rzaq",
  "key17": "4DTNg7KQto6di27EK92ybbvhtnZvZV3EQhkkUcXEKk9pU3rMe9RXKxatDbFPU8LGyKG899QjmJTrhX1JEC6NQE9a",
  "key18": "LxWnChHzyb3g5zWnS5jag3Es2xnR82SGQBPYi1uYBkX3NH4b33RK2xCtrGcGDrcBqdPHdkzzNY46wPxifxjutiD",
  "key19": "45mFf684b2fyXPfGbqV53zfskQq9UWSduM9xZnZ9JvXaUaZybxumUkWgVh2eG23TwN9qtYyJkZCEpzEHCjLkYFSG",
  "key20": "2zDAvnu1hxrheCkoGZCKXdJXwmjAxgNSGkw6d9DnFfST48K1FpjQhrzFtCSs3fCgd4gmwwmD8NQUSjqXs9XpbjHZ",
  "key21": "3d8p7GjjwosPCWeMNoSa1DuPatpahJaGQfTn7AokoRXVscFYNm77ar32kYyUpt28BiqPSPKkfmPLSJYpMYckgEZi",
  "key22": "5pnn5L3CwvsGs7HybuZMzKY9jughZhutHLoTsJe7NSUpFLvxRzDjnFjy1TYXsMMouNQacGS3A7mDcNgQS1ctnqf",
  "key23": "227iPViFaRay4kFAiHJvnxNghYXrgVvRWMRjjKSHgktytZV6jidntRMh6MHfrDDEexLqcQ9Bghh6rBs9YqobQhSJ",
  "key24": "5wD8vCbqVDiznBk9iWLrJ935LBb5q2RAfuS7BazZ46CfTgbEPJc15jbm2BFWx1YUptun9oeCHoZm9Ls8BYivQrFL",
  "key25": "6HF6BTagfoYBWnWDCNxTRBpe4K5FQi7rnBYaxr5ds2zyjgKqYDAMmH9XyjsqWe23UjRzZqddwiRmLJYs9sRaBTY",
  "key26": "5wAZwkiMNGgDpdq3SNuAfLtcPTyV8RYcVZFrc4RxHQCSsdnDXXrMyhsqVeJB7sneWQEegQwVk7GhCvAuTpFUWu5F",
  "key27": "3BDawQxmDqsRnamaJqY7xnn4exjQXVTGRENiiRffZXbbLNw7jyfUCDnuN1EUTcgTbGDxhVnnL1y4HYk3g12oRKM8",
  "key28": "3Ev1vb1vpWruvG12QAdtsaZpgt6Q42pcog3t4v1hGPV94iadiCRdeBD39fVGc49WpUTgjsbAoi6bPUvrs7y4QqtG",
  "key29": "pbsLtZR84neb6WkgH8KdFrhqx4KXfq6XQmp7vrsPGturSJgBVwFWs1jj4CgPSHd8FsdaAKVKZf9ng689hqDVmD5",
  "key30": "29CDZCckqmR69LKaRCydKNWViLeVKoCAcrDLDy7ykG8k9VPoGkusvqmCi4zzHxDAUsVAiFgzvZULzCv5xh9dEqEZ",
  "key31": "xhH4fwLvMyFqM9Aoy67NTvvY8ot7nhwWYx6V6uC1Qi5DeKuqPTXYYMxQp95bS7Baef99weKznKw3vCz82eLWnY8",
  "key32": "3VumXMj4SHLQSKjXFpZgBYQi6SKCY1jHMYquexQNXHr8G1i6ZQMkVckiyi6KJuJJ2rUeoihm8EMgkfWc9KYg5tbg",
  "key33": "3YXPsh2J5qAPc2MRGp1UBBGAFUakFNwgwzACyraP1dJRhiujtU9TDeNPfhJyoShat8EqxynRQfxZpedAUcND5eio",
  "key34": "4YxbyyXdCP5sCRaQJf8QUcAsv2ZBG9oSU9NNkghR4HAv1Agm5GYMTkWcDLpkaeT6NvDLqA3TC5dLo9BhmrjAFVTW",
  "key35": "2N9m5Sj5girm6ZJZ7kCv6aSq2ap7fMgJbxrpEnSVmpu3zRTRsSCJcRG9avfaPsKCxFLCzxcx8CTsUobvx27vLMUU",
  "key36": "5H5kakZncD5ff9pJrNH84WxSXxovdRRX3WpcMSHuJLSwfZjktL8SSCcEdQq4S5CK11MwYrKFQPEcjuhKQpeFzfRy",
  "key37": "4pY7qBLTRqP4PjnsJyyhB1UJ41hFEN14BcCs9Eoi2AgsLu2Ek7NViBfhjknFi7TceM44apWU8ufaNbKve976QptR",
  "key38": "5BVKLxPa1QRe9yekeBSNsxF1ECCQxD3dNr76qFTtRJwZkyiAUwiq9nbGVgptd7wDgnvoibAs28BmnJPQsaDw2woh",
  "key39": "624PHanc2HbSYMhBkoxF2akeXpuvU9bwkfxyKkdSFYKJVToZTozRVNNpZFTwJYdBgsofLfTUJ4njbt5zngpPnf9W",
  "key40": "4fjAcEqq4nujfo6vKBXC4zWRDjbSdgb9oeLsL8xWaoYdoTcXHwxp4mj6tYG5PjfNi9JuK17zRapeCHT8Eg8wUqJj",
  "key41": "Vj3FfxEHJBEwgGanBcGevMpoDtnbYVGynk7ahYV7BS9RPXW8JbJyp5hJUfZ15yqJZAN7Za51H41U6rLcNQDXxWc",
  "key42": "4SHgZ1g2yAToRhhQneFyYxkF3PLn5uRa8d3hw2KG7vsfU6e8cXFFgMjp8ckE5oDDe48Ykf4PxhbcntEBzjts71Gz",
  "key43": "5oe2FUGkmf8iy3tDeVFPvRaQyF5QzMNiSqfXe8kC6GiTsvqaRtMFyKbHqdXLVM1JyWi4PtUXoj6QLXtNzaokq11y",
  "key44": "LjE7uJncXJe4RvzXH4NGUFQhQGRJeY9NHUrwBK9W61EfDjkzkRwn8LSDNzXgx6xg1Hd5rvCTKNzBrrrzFLae4jD"
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
