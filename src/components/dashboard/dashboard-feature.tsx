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
    "3h9sFUuNgKkZ5Rst9XnDbeMMx1hmwKbk9c6HJyXYnM6KNVvK5AtpBGwYfnerUvEX7tpn623XQVUTNodzAXjj3kYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kh5HarX1i74D1oLqPm1X1Mz5xNajuhHrKDiCd5xwK4iFePJedFaK5C3NmXaq5iXEJF3uFjAeLc8vuVBHdCnFJi1",
  "key1": "45wEDWkBHNriHrGEdCcPaQoYszVXM4x6gUDPURScznkWhpy9eQuTaPPbk6wf8Wt78jqY5mzfVdBES1WeCDHH7RuH",
  "key2": "3skZpSRpMokJUovoyxcVGSerpk9LCHP3NkvZ7MbFphPw7SUpciPEyWEw656NjAgnHA89mVfMgcpJpeWeQhZrMW2E",
  "key3": "3bEKy4EmUnjsKjfDEqpz8x7ArKMPpuM3RtXdFzKC6FvcZ4xXyJr3fbFfhu9spsB49eDKYV2xZC1AfUshKKsXefDw",
  "key4": "8rr7wDZvQSB9KZx7cpN8TnK8g2G18ykmAGvUu2xdQbqsWoejASn1cPFkAYRhd5fk8RBebmy6spc9eJqPiy3rjfa",
  "key5": "3FFbmN9d2WcWNULFzyBz2LSzpPwGRGFoBDCF7j1BYrweLxGNZPN13Fp4ALU71VYKTQRc7CFJBH7dmnPM9g2W6Cwq",
  "key6": "3PMaUkktNHrZvzht5XP5FZn8LaDujkLG6vCdUaNcyRgRKeWC1MxvJorWEwjQvMztdkYknaY1cygSfiPQCmKSGVQx",
  "key7": "3QQCQk1zn3eMdrW2RzcxBnQv7yLRRysf5wHmdCNn8XxxqDMMPAD3rMqNozJt7F2y3285LhC2SRRe7C81Rt3cNEDD",
  "key8": "5bdsxzuzgQxyqtZVcQtsLiC7YnKvso31Nnz6YNjjTnr4BmeyRFAzopGLgwrRj71mWv1DiCpgX7mAyDQNHaC39zK2",
  "key9": "4wM72aPea1cB5YXcKPYRT8SG7Kv68jn9E1qFBYWmTWGC8i35xRtzpChso1Fnx9phqVEJTHJc8PQgfPYE1VRmg7sJ",
  "key10": "4EvAzhJHfkiQTi4pS4W4tSLLVAhRRSgpAzUpsar2njQaoj2oDrLg96oAaymgWYyqbSNDLFzX94m7uMQV9DcMukSn",
  "key11": "5Q3yQkdqSMcSwsaPuyTprqAT31ha1kJ66ncaaw8JjGKqnQ54BuudVV8QAJBk4NwhAcERBTjzgKSrAVc9UatEyAUy",
  "key12": "3XpkQTQBbvthUafFrBHF9HzjGEoCzw6kqT9Ni15Lnj6MwMqLpd3ogpgDxcHpxqiQHaTiXZvw1vRyoL8qgVqkWeB7",
  "key13": "4e6RhjCBjXQCr9vYYAcNbDB6jK7kHniRXxib6LyG77rSYr9DWMpuguyNh8gq6hvzRS3FePAnCZ1cxk4R7Fqh1ZGc",
  "key14": "23X7xYCQrk2RYCVPXYaaQnfjRSsVyQZUNKqVMUZv7vzrLacd9q5s5Vjeonb4a2ip4TnWf5AMnAuunj8t6KXCW8wq",
  "key15": "4hJDyHNjHqBmyr5d7Zf3ExKvVPGJunD6LTRPHRBGwAUuhREfgzN2J4ozAhwfTnjDUgE9Nwa8NguKcJG9tWs3DVm3",
  "key16": "728i9YsWE596ENqbhqSFJin7wHwmZ8U6dNmyCcqhDAhEM8ZEha81ReBK9cJnXEav2RWCg5sn82EKy4MQUnVHvS3",
  "key17": "3UNJHqSRqdJwJmtrWLW87xjg3QY62c7iP7jS1gs71UbubCK8CB9BCdmLLuXPz8yeBQFxnLwkZeg6Tp3KFjeh4yZJ",
  "key18": "52Waxmbb4DAojdvDTTKmDawGufQHZNsuEKa2GGRWi2FsvuS1Qes2HaTjLw78WcjgL1b5Nfva3pE7rXDpfcdHy53z",
  "key19": "2mGnL9aGo1NecbFew7qGCPXniXtmaKG7PrwdZdHWZpjkPtD72GCfk4EPo7HLFHnKYrUoPEUxiT9pjVMsQgfeStf3",
  "key20": "3BWNKazVModoFJ3JNBsisx3Jt8j24aSF2fn1NafPGBwZySA59JTDtRJaGGQr8DFEURG8hzTA22jHMiyi6oUkE59G",
  "key21": "5r74dQenngNkyyo2diSqDc614GA7CRa8z4vC6DG4xpdPH4Z1HWdeMDFxVtnGnDuzx6MfCZJcTqhTcQu8vikKbMmR",
  "key22": "3bQqjWWqJGpfcnhG2ENVsCPj1PCJpKJGxKHuFr7Fqh2f122izEUB8VMg3DRP9FmLtbA2dc8xcwyjHg6U9wCGPNDb",
  "key23": "2UrXbYRYAZJQfsA98VWxBCGCdjFGbzAZbK5qbGDUuzRUR2YVpb4cFannfur17zv8LU5ibFBGuqPjmVsY8bUdEqon",
  "key24": "4uzW2S5mLH4ZgnQimdQnihn9XqSYpVo9p4LqBVAekGoCGCUo4TtLBc3MjuRTiWX8JqxvMTjAtmqSXwpkvXAcnEgd",
  "key25": "4uEruQRV2rtU8rHNtMiTAyiUyEY2RQftGXXBTbCF43CNaameEUd4uc4q6gTMLLYacfSsDwzjA2yS1oVQqkfvGA7G",
  "key26": "2MBu5JpkpWATFURJfxjBYLYepUiEsmK72swhKe56uGHXcdXCnmny8xsVPLjiWK4Fzb4yZurApeJJ7CFKRgzgrXcq",
  "key27": "3rNcLF56G5LKPMDgkdtrbfK1jjJtfcN7d1GKdc4pKnTxYcYb5xWQZjR6Nh7vtM4zQSZjA1AxZr2Np39dza9yHaQi",
  "key28": "4nunhutiMks93aBD3Fh1R1VsgSZXMs314R7cvYGYJ72sgkHGGpz5mLmy5nG2Qu47u5Hx7cYzTBHWRjqkPhSQJK1p",
  "key29": "5FjeD7BjJaqzjWWidDJvyp2Wg4UJ7BUsTzMP9L11nL1D6drS71K1xKttAtc6gxvpUzXfhT7kNr4rCY9z8RtpKAnN",
  "key30": "5txgUiuiPg6m8D7StqBmcNuCX8QENUDGDwfJyVVJvyTVp4KFY8Hm4GHY6TnE3huHfzpaJpqFz86jRVo3oGfXPLey",
  "key31": "2x5rGWPL5UViDC2RRfGBvXV6zLtyBUodNyEQ3NB2z4VS4SMi7iaw4oz46jrCNSA49TPKtQ8BQ6Wqku4mAETN536u",
  "key32": "5W9W99AYs4sE7KRatpHAB5cKTbincPLrX4LjedxhxGgxzCTsrtt1urDvUsDG1jV1x8vDoLrDuRn6sUdBA6CX39hH",
  "key33": "HBuxFqSV9J79ruZRjycMu1d4QZCEQzKWas5EGcFHSy4EBY4m62W7frTL8jFeM75aqx3i5ejJZ8jAx1RY1spNePi",
  "key34": "5jEEXtexqD3sU4ycJUH8Nfc2aNVZnwvkdedGPNW7bjTtWNarzVwnkTKXS5WmWK3EMTZgr9ZdvSuwZcjzQpuJBFX9",
  "key35": "531RPHfiBYTgZQMGZfhW55uAzwTPWzG4KcbpgKiyutWftBMoft53qpgnbGqkPdvzioYFmox7zMWekJNuomAwEDN7",
  "key36": "5v3cHhgEhSL4imY22ZzwM2jnLCMYWTyp7UnmsuDBsT6TGPprrTg7QfDCYwyfnTuW6QFHaAREfFWv7eq6YBydRoXP",
  "key37": "3uJRMqKdEmtBts436YhxR6H5Ne7FtqF57kuWu4MuyAzmPcVMHBcfQMZLcEDSX4yWNTG31LVnzFxjfcQEuFkG9RE5",
  "key38": "5oxqcu4jegupT3oqeNyt5z1rw4bvecCkYueACBRj8Gey2UqszfGRikcYJqb7bHTZbmhsWzSoRcCjFaacvNAaR4Zx",
  "key39": "2Qohc7MPjDfKXreUDckEdRq4y5tHU1uqf2DsEh9x4fH3GqxmaBQV63gLKE6Pwxbu9x5ukP451qwQTh18685rbgX1",
  "key40": "q1AWuRJDtcqPinaPH8W34sEW9BUMvntx29Fjga1aU6ZWVj7HJXHouh9tqPQX7Ju1FKZccLWuufqo9RibwAy8EV7",
  "key41": "2gGNo1uebTrWj51CVKcaiidQHX3qjbrxSpwhbKkU6rdZb3pjyR5CfhREbr4DKKWz3kJdeKHZVVuGJ1ZbA5UNw7gS",
  "key42": "ecHuSggW1arqr9ibMmsfW7jcsNqRf6J66r8W8avXDA8an5gGuaU4JDJTgX34iSzCGKpc15ZqUe6Qds7iMoqqtsz",
  "key43": "2X14utkfVh64339S3k16kf5CZGncwnePKZxbXTe3dVaCJZPBb4USnccZBe2JqAj8AJNfcC218WXB9cNT11q1kjs",
  "key44": "36Z6J9223qkWhpYY76XkR8cUwxgCog2EqEzm6r79FDXrp7KfGDwettd8AJgJiicNVETHpbANGRb3UAXkMvaGzU7U",
  "key45": "4oTyVNMAu4WE27gXnW4djf2P4RZcrMxFkMCf8mUQwsCwerXbniYJAafvsge7PXwr3LYLegrSgDzYhHJqYhk2xuhe",
  "key46": "8ZV9KHY15nyd3JEodFhnGyLs7ugg8hnqvdxgDuSJ2n7yzxfRLnSg5365QM8MhTmpzb9cxA7HwT86MvZLFbYaQeF",
  "key47": "53gmym3LG2pUs6YBjckj7xU47gPkQ62PHTSCyArPKqFRgeoku4widKBBm2hTwrWLRyTA24P2eWqBQA9amBR4uLbz",
  "key48": "2ibL7K85zQZu7Tde5MXAJRx2nm7DEpdvmk9SPo9GEiU4ZGJi7CGYR2VF33MzWbgz7c2UmeRuFSd9J4tQ2xzdXRuh",
  "key49": "3roEjbijac48BhPFVrxmLSN69gd8umqmfvNxcFgCM4dDtbXdwsqWVcmNMTxMjyXWxESJRLsGpaVCF6xffSnwrtGu"
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
