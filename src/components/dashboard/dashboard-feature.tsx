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
    "3UWbxShdh9KsyxmwxD5nTpuQbaaAdYAsrbBN7vHLRiZbDkzgCVEncpNHj8QdVy1Hy7DWU5YdMfKW6he3sHYysbCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2whPkxioxVQsXvyPbGRubh7ppfCm9qGTWqUsHGqRfkTJEFwBYR58wcr9bRvynYDZog94hjeKtuPjeq4CmZsRNvB1",
  "key1": "5mEeRv9LGRrR6Qr3hJJcDjXckELdCyYMYpqEGCBGBGSR67mCvdANeLB4mU4p488iihxCyrwuhhBnp6NHtGkTNSym",
  "key2": "sBqXVJRCc7CKwy3oYmQp3mCCE1T4TN8qPXr3zzed6j7nwdCsbe9yxvsBif7CUkv7z1BVFxxmwm9VzSWY9K1mUWF",
  "key3": "4ub32ySGfobwE1xCTXRnbqbMRCCf3VcYp74LrqQdJPgrcS4JA94NV1ZREWYx63fCs3JoN5HEuN8yqMEDQDeE1SWF",
  "key4": "5YuJirVLN6d6RmczrUnskyDjmF81x4dHELAc7rgripcyvtRaJnLaRzy5Ei4gXtA91FnrAydLytLmuYWxj8gFz4Lh",
  "key5": "2L8uTFwD4bJuC7P4y2KP33Lg9s89rhiX7AShSvFg87SZRkUuZCYKBL1KbNissoKCnXeRkYouxL7k7cnwBeQWRobd",
  "key6": "2gunRPutvhyHwCm6nRwWa4HskqUFJE8opsmvgBbionk3ZN5rmb5uLGYnLNgimovP64o6ihCZn2zxb7nHBkBXkmXy",
  "key7": "3YptqPR6pF9dLbSsdHkZ2JRsDx9k9VBnCbJUZ5mjWgcwTwnFYSufgnxuZazGSdxRS8H75GPjaaW345STg4NqyrWD",
  "key8": "3E9ymoavoLpXYXjaDDTrm6GcqcMN6d1NrtbxydvNCxuJqZw6ciYKVwNggDP8vx5JNLshfsTRZvU3eptADn8zSvgp",
  "key9": "4p7CZaGbnPMi41eLd2XoLtYjhHtKuU2653km9VdRibsWWoG5DVJY498R6YR8Y1rfiCUbGekVEuWdbouSkKDi6GKn",
  "key10": "5y6NNQQSMvYapXbz1SHF9eB9sj3A9mrrsSNwcwkMcURjLAywNxrazKLJ46cPBRdqH6K4zmMEFiVyojVyoRusvD91",
  "key11": "3JLkQwTwVP3Jg6KqGxysaPhxwPXQs2S8foi7EqAUVVFGQX1J2bBZXa7uBu8uAgpdVcu8PFvQBJoP26NoedL9289k",
  "key12": "4Pe6eWsAWRGoTey7kMPyjP3EW1QRrDt6RmdcTK2k1kas2Ay4tSVU8GJ6Qd7NstYUcZVb2765mFuyqXfJTyd9NZxw",
  "key13": "4XbVvZkhzByiTJWTFiF5wbQg87LiuCT9WdY1dhAZ7iyPT1owiSnbda3QUdH12JjWxbj3xUD2txAcqwXMXpdpCKKw",
  "key14": "5XkAWwkTdn4eMTPfX6g7YR4MWSfeRdMNZZTG6Mge9tE5rvdKPDbQxNTKv2Pciz4AxjmyEEns6wgWJHfwdGYCau93",
  "key15": "3ygTJqNdf3RHy6StUrpc3deqMoovE8kw3j6DasfqC8qyRhJn8LFDf53m7LELT91uvzr6wJaMHmE88Vmy7RTci7Xt",
  "key16": "4bw7Nb3AXeHQ12b3JcuLc4NXEymyovujXzkJGDbP2hQ46hCzEsxyUgwVEYsDgvKoSsvXvpbmxQo9hpYRstwNV9Zk",
  "key17": "hKzJuEdRZszN395K25LKSKLsCT5CQbKpgsfdB9QgvHGepyBfs8TDbL6bXRrb9rCxh1mYeitCUjpjXsc91y9cz4C",
  "key18": "2sjufpk3ALatE2P774HLoCEQjoXbhoY7NMWo3qvrFdzSKmMcjqqwYx2Jx29C9qyn6WoVRTUKSVqsWc2GEheCh7H3",
  "key19": "7W92XcwA8oxfu2xfQrM5jX7VKAqSmPkARed2pRZiUWuSAPzWkf8dzqLJNn7KZzWEM2xSfsW5UvvUvFPX6tV8ZQ9",
  "key20": "N1rFJbhL3dsCZgziTu4feRcUV8SVgBNUWuMFvUsrQHgcnUSFLwyNdyytN2C8HcqjZCp9eoCCip37UFG2KdmmL4n",
  "key21": "56TDyMMYaAjXkGGmDdNwQ7zea5DSZPAbLgwZ2dBPEbGPNsmc1CbKbpLkGqDWduZwUCKw1Qqk8KY3VwpVkW3Pru8e",
  "key22": "4SrErRgGVk3QCYZDPgXGzpG7j2vmfccMSNspMTh8mtaze88tVDF5BQ6ZtbFizTUiWQr4kZ2VwfH5RKpVaRwTTx3s",
  "key23": "2rY1dVZo8JgKoYEHHXAg5GT9zjfB5hXEWMGYNaDQQSb7E1VD8BNKvSZ69A4XFsP8E1cqwfQLKtvkzXFUjq9yR1dD",
  "key24": "4farB5dN5b8mcaTgDARG5y15NFbfEJqLkGDsr7yu6ebo9V83XJHaogM27yVu2sg7ML3EvsDXGqVy9FvuHGQe8Mu8",
  "key25": "uYjdmsdNRgF3QnvNiU124xxs6GndQxSTm7JywMEm1N1CKMxmWpc3RQThJ5QbYj6ncwaL57QXRLwUfR5wizZRZMJ",
  "key26": "62DhwwR7izXsQrFnVPyNBnDuqsL87BJMgR59txrNnbFdezLoThvAXpFM5a3Hqjix4ajQGJ1UAiZa4gY2tS8HEeEV",
  "key27": "4n8tji1mD2uzKxg55b6JkrZeWbpBkgd6Cq9vnFXo24DF3U96KU4fbnAuJyEKNXP7ENpWvj28SPRioo7UjbxzziPw",
  "key28": "WbUA2F9vwZHNsqoumbLzY8VZF5Knsb1r7UQfaYjeDMy8NS1yiz9o39sTcioY7ogCxoTgmzhETx8KKKKZwqZX7rD",
  "key29": "4Bid6gkQDZRpcE1gikFmvh83gMfT8FGBKtzPU5WUFn74xDZY93yTudtviBdKm7nXeuvTjKs8eptYvncG2mL6Cdz8",
  "key30": "5XJZYfR4oZ7dLwcfav1zJjUhVhFBCqH9bZzX7xAkYHDMD3PKQScdF3Za6CiS5J3cTT3iiGMrXRApiYRAKEDDnZSy",
  "key31": "41RAu6FJgKepWLgJ2Jq7JLxHXggJboi1AbSkksF4i1HiJa1uJdQRtvcCcsZ5CSDUGi7UKznrVyX55uY4AqCYX36F",
  "key32": "A5VJmdqUMtDJwZhRqAiubePY9BScXQ7c5V2v6H3KLA86SS2anA2fViBymxrWsWsPi9E3AbHqdvum9BXMNto6AYA",
  "key33": "2Ee28RiqFnZ42vBTPgK6CSuCtfmhFpMLKMYn1yX35frR4y6R4BhtGdTfczw8uKCdZoa7pVLX5HSWj4dubENSBpFV",
  "key34": "2A5EbW1BFGLL31FwXkcr7AYThfQmDPn6kCYKNd9x6WdbPUFq5pNcYqknoVB6TrApEPMryErgok5EmVfwEKPR81RS",
  "key35": "2WiWBuDNtLcPbi37oczcwNTfivjcqEbAh8bdark2DDj5ss8WYwfpPBtjdjD78RfkXzeRhWAEybPj7F3Q8yhVUk7W",
  "key36": "2DTjcFQcqnTwJd49VmY4oxuTMGiQp1RJZBEE9SVmM1AvDCeDgJiCSCNUdwcyrUHzMbwPHojyRYBCorCxj842RtGd",
  "key37": "47MjPLSBhY7WvWPY4XS2ZWnSdLEZQwFDp9SCvrtn93C5zhyVbk8QgDtSm8imZBM9Yaf3qJyR6byHddb8Z5kHMPks",
  "key38": "2j1MtmQg5rzk95nXq6VdtDPJmessUehgptCMr9VGMsxrguMeWKWkaRnJMgXWTzzLXQnPwaWvdgF7gUZzh2x7eL3X",
  "key39": "Q8Drxwa4bpCSbFpLvid3dMCYFYdfa4mpK1CmxyLfj2LiHpivCH2nPQ7yCMYC4HRNwf2t7iu6ooVSxJLABGhdKSe",
  "key40": "573nUJtGtfBgFape3rK3jGvskGsP2GVDJUM6hLy417RjaA7U4dZckXRHqkQafAxqjimDX8XFgPPqY6Tg1vP2mbti",
  "key41": "485iqj4mEAoCSP2StwWGSuPefBE4Wk3T8La34RF581YgCZHffoe9sNqSDWPpYpVsAgvbCj9Yn9y59CksWJ1DWnp3",
  "key42": "2LeTTwyPChH4JWL8q4qPPZFPFSTY2tU89FRARqsPMXV6uHV56V5Ku7RnEDwZceZvfY8n3oRBszCFJ7gEfnxyaGJE",
  "key43": "4wb6CiAC7DrerqPkiiuwMse56Q3zTfv2An9q6QHWZrLQxzfXqey8Ts13mXkUDfHZ1UdstdTWVA1aQ5c4W3pG57KG",
  "key44": "296TyhgkytqJAg9qM1zHpWEVoJF8dPv5SaVhV2cRmgv6dC4K74kFSY5WaXS1p5nWjP7T5duC8hTqKp54ueoUZUHZ",
  "key45": "2TjQnmyBw8rUXhngLpYiKwvYVGvbYGLvHuoLnE3M465bWJvbx1GXFT8daSkqXVjMXT58HVE38Di8PKQKkLoJpX1W",
  "key46": "nPWW539yhEcJzafECypbR1JjLq6wk2hbumv6mQ7pKrBjRxCnpaSQgDYmxgKMBBThJ6GvqYR85EnPnZhb48aPjV2"
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
