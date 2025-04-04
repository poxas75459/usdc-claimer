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
    "2BXqaDw1ihev7MKsL2qnZsrSLxXeTjP8eXRsR4n2529GKwmU9iXS6pH9Mm5PfxgAJoC82BiYMhMpsKCfSrMRJjAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uP49ev63S3H5YhgoiVAtMTtPMgGBL6tP9wFR23XpCGwU5q4YGNpiUvCHnwBjBwBB93uY7uCCYocvALK8L1YAEyt",
  "key1": "64MLAvwzPyTWbrC5gma92JT77Ziu9WxZJ2UXeawqso8FnoExtKznJ8f65efkNBakNVpe9Lj8Xjk7zehZj8wnbhHW",
  "key2": "VKDJahdqujK4ohWEicxY9t6vLgrSf1cBRZ26uoY5zm6oH6Zj4TLLuKW2u3f7ZT6deCeBMD2tDpXvdzcw5tnfxhg",
  "key3": "3PeN18La2CjRu4CDSmbk3iLiBWPaLupwJCbdLuThot8u4eKZPXXPcFcmpaJdpRCqe7WrJk4UbsS74rCGiYq3G1ji",
  "key4": "3yimRHsJLkZWBCvqfs3fynQ94hzSxjve99GYzKEP6A2hos8XFv5aWyyQAMFApgViJbrxpq4vn2Y4UU3jjFaekUsZ",
  "key5": "5fYy3Tksnw8vkAs5UeEwXaAxJmhWMHRDCUU2i5ujFUQC1CSh84zcc3EMtcN4EwNSpiKu1HocPCF43KeVK7nnk4RF",
  "key6": "7GLPJUosi2XTZnYjJfNN71MqDdNy1aNJjN2aBF6t6e8KQZ66Xx4gnRHrW3tqWPiMZnCEf7WSLtNN8BCjhD5zFMQ",
  "key7": "cfBXxoZKsp6KE5fZVwBu4TXK3oqGjKgFQDXiUM5Eke4pudq4tjZwv6pNai3bH6j3Bbu3rFcGUkFwKaPnhQHa4MC",
  "key8": "4wjL3yjHN85K5YH9Yeaj5yBBgU5qt96NsF2XMXxeLTNvHENJwNyCR7W8EPKLKH4NgveCr4tyUwuaG9vQvgzvQzoe",
  "key9": "5dcqMwX4wEpAFVKMn9ypp7b4U7HWft4tw7QNkJ3RhKC3ihY19sx3tbjvNguhPcojKDehQRN3WqdiUzUEyJ1UdNhX",
  "key10": "n8DE2nEzHjdYnyfAxgQYuCiPUCBDWKMBPFpkLaGyWHV12oQTHLJHDbqupzmyPPP3q6JgRxSpkx2RucuXV66qivm",
  "key11": "2syxqbLAcKaYhPJKsRhLLmv5y3ZouRbvY7LfYZgXi21aBY8UfmSPUK6Q8FG5F2Q6ZCJ1nDebFwJUdgDGyQbQaMG5",
  "key12": "5RyjQMGMiNcfNihXktvvZVXPts7bSBeRrevPRJ8wTEp6ELC7gE4TjtPiCREWDm7LZohcdbe5aRgcdLgFtEVx54VU",
  "key13": "ctMquBP3XRvbZaEZj2GS8XYnXmyiyxSdsUkdchh1hwsz7grKK5daaoX1kKs89mgUVVLadizoMDLx72mo1DKWbmk",
  "key14": "3AzeMrUZ1CYVuc9BEe6QFd4d1cwadogbPQF18GneLJeumJh9nDrPwd8x6idpkSpoLx9ddZaYdeKcwCahvyJyDgiK",
  "key15": "5CAsNRmu7r72AXxcuf4R1fRoD5wZLDmcbGXkHwQXzUBz5MVUcVJyH5sNvPuhqpw3ELJAyJe1ecjUhTCN3zAYS9gN",
  "key16": "33QFo3B1hh4Fb8CNRxfdj3vzb8kVPb7w3SuG1F4pzPcTJgWmqThJfnRXj5aFVvVgndms8qrL6FAAKZA2vGaJmKcp",
  "key17": "2VtdPYmhbbU4RJXAteJkTZqSn2owtPAnhaRTCefXw9XRWMbwzgVwxwMLdZ8qA7UBNp6qKngKunhqxGZmRswNW3GE",
  "key18": "yud7uSw1jW8ZTdhi9vxNGLmbPg7RQdYGmbtfwVNwtX6UjPiSFFp3w8bg46YgcPgBgvJWTjNsZ9hVjpD7heNacm1",
  "key19": "5Cx3YuLbibkV4mn6apAR9eopEEUgpr3q9pu1Aa42CF1DRoNZdR7pBueKm3ZuXYxpo8FPUVeoUtpegCEz47s4avxe",
  "key20": "2EykTMp2DEu44RhPMY9q5UWFf82vAy6yUKuqaZziX1dFMPaeb3sBf88k8qp2a6dEZCkoB7rAmEUjjRofVuatgBTf",
  "key21": "28nXiPnHs59KmfnBY1QoLzizY2AN2a9RohzZbuoq5fwgvdpi5ZzQRNVvM3JitX13mSKgZbNyERpz1iQVKuaPZn9k",
  "key22": "4gs25iY1Fk6HDoRggyehg7WfavBbRG82hLpdX92gGkrvWU4UdMkRymhhg7Weu5UvkYWhcqnUGy7yJGn9YJGBQKu4",
  "key23": "4Du2Dx258feS4jypD229iKFCtCny7wbvpvJLwNaPf4638TomdvqiziJMdvFaQTTvccEZz4rzdMYHQsJCXd24feFD",
  "key24": "3JoJjbKzECQ7twJEssSPn61PVst3eymbWSA95DZT9ttq4PaDc7CRLwPh6JoFYBXmLA9hdAtUiVRCMeeZdUqQ2tHk",
  "key25": "tMYu2KZLMj24J7kTPUvHCZ66phsJtJFNZ2bBAVK1e2qRbp6hmTYvjuzi1rajNkyzQcQ12JMsgWMqhtWv93rCtCE",
  "key26": "34q3uJFTjuEnwBMGNq9q8A3wYMNiwLVVJwkHrSDB55JBmrh29MHDMR1DyK9fgWFaFpS6v15CoeyQEX4JUT6doV2e",
  "key27": "3vBSfmH8if8xcFDwiSYmCVP1Dj9JQCs9PASF4gSbfeVn1mQyuUYTAKsUd2SGyDzudqtcHHsCW9mSYZAVNgNoQKat",
  "key28": "3shGypmWMCdpiq981GG2aDmgzvy6r9bb3YG9rYKJrb2nMiXHXHEUpjSi6ehu6nuzQXjP88HeoTv2L4cTmnUgzEW2",
  "key29": "sK4fp5SUoPyx4yvByLMsCZWoVnnyMBFC5Myin1vwQXPaqTi9qikHNw9pyPsecQUct1kzp1RM3BeLMV9EnBKExay",
  "key30": "37wncWTPc9KcCLtSd4pFdhNSGxu9NA6wWTr9ENsZ6fAmXauGmLaGaHMCtzzU1xPfWxwD67bNJW2cbxtqNUcKcFUy",
  "key31": "eD5VJ8pt1EvnEjeG1zsJ57eUGJdKjbr74bxqpxHxehqxf6eHUsqXvjzKo8mXNnB4WwhEe8pEC6Vtafggm1D1U26",
  "key32": "5ybKRsZdkpyUFzraxhFPVTuwzpYAwW8JsSWKLkGtHYfDqWczvpKNLFkEXuMEim7FyueWSebFciGRomiX4k47GHDu",
  "key33": "oaqB8ptD8ACZgU6DK47yN7mC615jPHTCuxv4Zt6ktK982paPkjajDMiTLxTFXnEAk4APwvJF72TA31XKR7KVx1r",
  "key34": "2pPWvX3RFbPkA7VsPuYoeSZC7h4NdDwpey8iDcrugQJSR8H1JfEsSc114MHghKdpxYyJHjGgGNiZQi8Bv1ETVhmQ"
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
