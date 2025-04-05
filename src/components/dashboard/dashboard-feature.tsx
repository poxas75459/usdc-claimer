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
    "5t2PC3Yppy3Ehq247VBBJmu3G8jJNxG7FvJoQs3QQ9sF3HA1UCrCfDhzXMQPU1wp3p9jUx8MyseXFzRrzmzCqSv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cV3jS6DjfbnA2nnWMoxWcGjSSKxwQqhNtBGw8xdCKp4tSd2CTBbk7P5HvojceiVLnDFodLqMrcPUjgYWEVnT94R",
  "key1": "T1GtKEqe6sRBoBHmEjs1YitjrRzpqV5ZepQocLcErX7fHQCuZJZSpRhPwJLFigZMS1cioATTUTKdsL1xg8UdQJu",
  "key2": "474Uf5NvemiQzcoJBB3zfhbRSSni2KmKUZQt1MrQupsZEoLBYvS6Lix8ddGb2QN9hGvrURaT1ruhsJABeuEB35yE",
  "key3": "2VUwM81zdQLJnEqHXGjUaUoAFyYUCUfu59reqKPoEgzoChiRAG3GUZ6Ukw45RyYuLw8ZXCtm9PNtVJEh5t54E9jv",
  "key4": "oixmsZFnJHxEQ5xFqZ4nBNSkAR7UouY3wWMiub1L6BEiDneppzuHNfvFWFRNP8hh2JrLWPQR1CgUCyXm17SgUDG",
  "key5": "5QX4jHgZZrFUYxCyks1XYtrwGbeD7g4M1H8ckWixXABEu3HqwJy2RCQEQtBZPgnhXKxnBGcRtjo9K75HJsDPEq8Z",
  "key6": "3SV5bPXoYSFRGk9atackq7SfcqBQn9oHEN8QJjpkfYtkM1aWSjejPDLE5JDF1v9TQS8wY3ebgv92MB3eZjHLNqgZ",
  "key7": "RbFxCiv8uCVn36UvMs3RLYeuA11B6TdR4aX6PMgHvRVYXida93zLvkSj2WYPeq1fMJ9q3Ek1AMCsW5r9RToXUsh",
  "key8": "3MHPYsj8U8rhZujsvpwEaSzdFjv8aDbeXhC9Vw9P283mb3PoDGccBy4AdqNST5KZo6voZ4wEvRfeMan7VbKy8xjm",
  "key9": "31XS4iMAiZtJY1fnvifEGzNpgooQ8z7ftrcb1SmQUAQzY5JgdzeJ7MQ5ZdfRMgfw9JSaAjtE6wrRzstqzgrpNtkV",
  "key10": "41bVsgwCsTpadCB9Wqcj6rfDNffrTC3mEhJwhNVdQNELBV9H4oiEeW2BW5ukTynjum4vGXX5LCP7ZStgZr1PNErf",
  "key11": "4Ld1ADkBPEJG7PiKFtLpSY5a3WrSRLjyfPZDnZkboPeXQrnjgKwh4Be39rXthm6BDbhnEqivGd97qDtXDFEH3nkQ",
  "key12": "3Die9AS4Fxcuw1VSZn8bsHWJZ4AG4FunbEQpmzpwZf8HCRJhh5q4LrvubA1vkSfW5V281tN6bPcpP7RnfdUWivUk",
  "key13": "51VpBh24EhuAi21VgeC8gGHXYKyPzRDpV52kYHEpB2yBcSYKcRnhNGrfnbcRd6uQXZLPEVg3C92xq2xTcEnjWNah",
  "key14": "44VcAJCF4UGSYan5RFNwDk8pnqg4pcjwH9EvUPSfHuzPzPnQdnqcDCz3NMGhrceEiCbtQbdyRtc5gTGbjr93zhDV",
  "key15": "55AwVXom1w2zimL6xojGxF7qkNUX5327mrHJ4vPrTRzbkdiX7vHGJSG5YZVGQLxsdnaYpnPLXyHfRUhn1pF3kZbg",
  "key16": "2jVvGLYGG7MdbWQYzjYwwdBevHbv2QV7VEpwZqGAzNnofC41mnWKFEkuSKCdjg9iSSWixcqQrsqMbgaUwHjYauk",
  "key17": "eSWdMGjxG8kAyL4EuYgzeTpo2VhX1U2evD9LW1xvR7em7nY14PCYQQo7iNwHHoh2apubKWtXPE8v4HnNsbCaob3",
  "key18": "2e7v2oXu5Z8RM78MPP6ZFwuckoT19SNxRa2ukrjiA21pa9BjsV4hemydrDB4MgNvzuAV36jA5BGWq8aEb8ckhgAk",
  "key19": "2C8KGboS685q8aezxdREktQTqiNpQm5Mc8guXc1mWjLzsCkbxJbkj1nDieEo6rZN2LXN85ssSosKR4ToD1SUASve",
  "key20": "4iYFPvv7yH6coqLJTnkkTpen1s4AKfkMt7qXC24usiqVohMiaeJ4bCqgn3bRq7qt6Khh6mst2YAzF9bbjE3xKTXe",
  "key21": "4UrTmSy7HNVjm7bgKinb1NRDzAsxN7GsqamXRuQGoZadK9LtKSCUv1ZAWNNJCV34yiy9m4DoY7ge4k6oB876MHvt",
  "key22": "4f9v3QSNiKVwRiaUEpPzM5r1aQ43zDgkGsdTBsfDVkxCQKvQ82qu4mkkuwK6M8Q7FvQ2qWjuxtguw4Qz5m7eQxBu",
  "key23": "4qNkz8SSDCQt9V1pucHmuC9tk6pdMMWwo4PvWUbg1EctrbyS2DHenBxnCZ58DHFZWffob5KfU4AjMBPpY3DCmkv9",
  "key24": "4AaRsLVi5U2GiRJJYvPqYV9SamwUPmiHMuM2AFVqsnmeLwF39hgRTZriz52sWiMSg9opvFBTTBF1hx7ryozV4gHd",
  "key25": "61kCct2zF3P1rcpxiHdrNicLy5xt1BXQUwCmaRv9vW4jZwYdS2Xn1ZdUsaAtqq6oTPgrbqrAxu7r6APGLrrFiH6g",
  "key26": "3hhxS35WnMzFPGDsqD9jjM1XxjknpaS2sCKz77GX8fVvMRAXZkVvfYeR2ttcc6ECJYKGeXWjj91D62hxm8Emnsa2",
  "key27": "2xVKhNJdEoUCqukGsgTvdF4rG5Jo1gqtE52vFUxyphWZeeS7RK8jZLnCFAJcoMfSRN5psK9fNcRZjqoDLYUEKNKL",
  "key28": "pZJJVsV2x8vMTMeLP6YUS1EK32Xt5BbkdPBzJf3vWJS37vdDjX4DJR59D82WkzJj8xZVdWfdQWoqKk7SsqBDGpU",
  "key29": "3rQqVF3SKcFDEogoeZaYcdzwLutrQ74LcwPfxi3pvrK63UcNqhoqszVN2i3iXzufMnpwDGVEnMjdRHG2RkNevySn",
  "key30": "3D9veM8GeK2SbGxvGdABE9wqdfkpUFkD8JuT9KZ4h26GGTbEwK45mKzBpUzkBxvdfAt6GjWe5PDMVsLpGiVLbGo9",
  "key31": "2aJTv3qtFX5pUo5zdHT2jbLJC4H9eqv8VwFehWzdJTbNYEhd2de61LZ2aaDmQh4voJewAygJs4cBtvynJeWeDzsQ",
  "key32": "4iC8M3h6JHKF6ayCheHfapzocvyM1UpXfKveNfoiZuMLzbkhuh3n5E1BS8gsFCz49snYytaxUBMvF3YD9y8TbYyM",
  "key33": "w7mSMk5H98WAF7anPg4zvT8Xa5yDtytxkbXj9RQQdqHf9L4wrrWNjKLwEy6yc3UtPGRPy8jZV2BShi2PkrPE5jA",
  "key34": "2jUwwcscL2XGYeQ25N3ULrKsWk4dV6SFNxJbb9DhPNcKbRXk8iBS8uQMsEhLcuLfCV1Jf7bkG4S8Ln4N6rq4BZt1",
  "key35": "36q3ctkTNVzzosM32nsikWcjK4FuvYbJB3MiqAfSxJL5CVWCYqXfr7ua7hn4UueptfBdRDBhCjtVjYZ4fPxMD6R7",
  "key36": "5mK6jYb2dhcM7Ms7F9BgTp7Und3DKugEiHt6UfrD5wMsS7GwbYVWfdKxMziYkv9kFkoK2Yr9gQMXeXhjr56WfVzz",
  "key37": "4WMUgEsyAzMLHi4tZDj8iwTQVGtvhiz1vWdbrrUvGGnaNGPCTpo4j3oaWaPN6PgyaCP13VcKKF6o2i8o7Vhn7gdR",
  "key38": "4YHMMf4wDHguYR2LwhPizm56BVskBXuZtx7HXbFVDTAWt2QmCeNm36AR7CLVGgNYPH19n4qrvfq3uN9V2PUpv6XT",
  "key39": "2aHdB6aVBp2grtwxmVfgDcooYsL6TTzY81nLG56LH6zEG3ow9MSsVdCoZjPJjPZrposuQj1ASitZQWJo7jfvaKLp",
  "key40": "6775jce6PqyvQe4fovDy22hm3BZuDjQ9e8T4o1g8RQLoKLN91Vx3KArCUB8w7BzisUJ6ZwoArX952MhrUR6WkAsy",
  "key41": "GekyZRSDtsY7phsC8q7TZU6zWJRfb16E4xr3gnnc56k17qEjc8wZb2hH99fUJaeKFJAeCPS2KQyPYWqVDVh6neg",
  "key42": "2ZM8nj3o5Z6wMxxWYKPG1PQEey44VDSRhdhGJhdwQvv2em3F2PbPoaeur8vrMt2Ysj1h5vxES8zQuRoJK2j8FtGj",
  "key43": "5Fr8yufirMUzEa9ehQ1qgKEKFssm944hHRkpU8Yx5L4LVPvgR6CA1Y4rJ8QgdSYMA6WseaaYgrL18Xhe2D9Wz74A",
  "key44": "634xSmZkmqR28N86WgfXnKE627K1NvCEC4AuV8Ay8UKeDYQ2VnTQhnaatm37Zipbz1jkYBAxxtv6ZYMqAwJYQWrM",
  "key45": "4dJuYSmuU57HtZ1YRXKYiPaBwx6fWD5cuyo81CwuzrwENSjtvLKKpY1inEqGgNFvb4pV2PsQAxAqYPoRA6n1Pprp",
  "key46": "5cJSieC7YidCf9457gCD31wYNgYRKK3BNkf9zbqoGXnuEZ1sCcwMdwViY5Kn5f8A6AsZ3aotJ8gVbvbcYQXLBBZu",
  "key47": "3yxCGpd4JA6WFjn6zUWzaRHR4vUw63vqMa44d2imLbqw4ERdKpZWhweTXxStTHFCCcv7y392W4G3RGBxdkhA7VDx"
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
