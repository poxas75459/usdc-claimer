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
    "4CPULL5q6HgEcwmbyjKg4KPtokBF1jk722Qe4DCxB2JoG7php43anm8HuNhdR6gpX37nNgE4twVSm4Peff1aEkrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cdTHvLFKAn9gGCoUjBvis5WVJrN4tW1GJDJ3c4muNztjSUKyREfi4NjyT3EkdjWS17SzZ2fDWNWPFoVmbSWR4ir",
  "key1": "3gCozmydodBQc7bcUJX4jveuj7YBAqCqFgo2dDagvoecPHrQYJSyTt1G4witNfuYvvo33gR5eD3u1Wf9D5pAzcSR",
  "key2": "2povXEP6nRxGRa4AY66X3g36BHQU3cr4aTi4o4x9m1K6mreBnrYQnSikn8Na5irKxF5xKVcb24VZUmj5oB7fWEZZ",
  "key3": "K4xeQ1wNm9SC82mJT9HRmgeCBoCkXQxd2UTpixeyjaNr1BWgfHWP95vZYvnSVkBKAJauV1ome3DHwmoEWQw2L5C",
  "key4": "2iqQ9ni66DJgsXK2VUn8pV5jY5hgk4e52XegmCc1WuVzgrTn4oD1y3Fp9nDtYDK1krjkFWjgaRtkaf86rpcKhywY",
  "key5": "3AE222soDiweQvjSgibU49cRGFZctscQzTGJb74B2pBq4jt7xz8kWR1oQJZsqBKoU96CYgAGDfdToPHT98zQJN6e",
  "key6": "4qJW85m2oB5kXTYsaXWVto5BzVx6jXWtabwsqfmRq6gyu29iaMftFt8nypL9xvHqGPyfB4YZHebo2poY8LTo9VfP",
  "key7": "4F8GeQVAgQXG6PVTbi7PiLQzv2B6XGQ9TfTk2WsVH4rf3TBc6iyYFSFR3R6AzNoMstBvaASxw1ztfSsiT2pwTQxC",
  "key8": "2DAsLYcMTM2vojbyZFRjZS2Msf9aXdn6A5RX9wNMgo3x6HSz4PRCuRapc5Gn9UFTKBu52zFiWdY2AC4eFVYEjcau",
  "key9": "3YpFPbWHgjHnbiyHWcuhCZyFZdYrnxbGGPCFQq5sXhFtBbZnBHhwHevju9CkMeNMqNHbryddw3cCiZD59Wb1BUGK",
  "key10": "5NT544eF7nwffpEevMvjvCyzJATYX4dYUB2vwGfen8FTjbJV91zNqYXYSd6uVVDcaNqxU4xjaTkXBBUp2BmsytDc",
  "key11": "tFBrM7zdeZkdS86QDeZ7e79Lri5WpNmqXG7uEGmKnD7iBMecDyVDWrGm4oqrSJYDtTrN9d2Sght2HMpARPyCdm8",
  "key12": "5ngHHogMFyEeAT2y5YQm1zATHAPh2cqRTBRZFUFEPjMYmokkmWrs9DvMxPzKduR7KPtpKJkfyKjLi4eYbYk2Tha",
  "key13": "3w5DKWt9tWrbAiVAMuvKF38YFzDNBRjFgrSQ5X2Zvx7ppmWbeH5HD9TyT75uCqk9KDok8PPd89Wo5tCGJPnKdAgz",
  "key14": "QA76CEmsDgninN7B3svqjwxdNRRHTnaLKZDszVaAy5KmQpoRkcoS7LkH3L7qJEGJhDEitw4xVjZ8b3RW43SVVtG",
  "key15": "sTrAcXaCGY8RLqR8soHThR547N8hgqrBdKDfeeGadTH3ipNBiMbShBFnnDHTihYrVNRSCeVA5u9YFjPeBAFUfNj",
  "key16": "3sqzoaQb9b5RiLcfiWdGmohkJemi7AqFFsB7Jg9hrY2V2LvgkMY2jPCPVvRA7rJ3PCwxJ7unsRpZGcD2p48LyNQP",
  "key17": "4uv3KCz3PFqA9pMmQ977f9NsDaHTaoZvEnqcqxTCxAjzQen5QtPG2oizSmA2JiFdTV6xGGNXw6sDZUtVweZVwLzA",
  "key18": "4sd2z374p9jc3vsRbujMeb8RMiVvnxHgtdjS7XCieMTYYjTjsG8EXqEXpuSMDg3mXEwcgqMNwY9a54fuGSnhVRhv",
  "key19": "2Xv4vLAdUfwCxVtW1qY4vkZQVLuBM5jr31UKQPxRfyJd9XiwKPgTnqei5s2N7bzUaNyBZopium2bjxTmxzJ4oo2E",
  "key20": "2RUevD7MWCQeTo8xuWqadQiRdYZ27GdbEh8fa3jHbU2vSPLuq4XGKsRSE2YXhywZx9axV7htyXutTyHy7SBXy7Yc",
  "key21": "2sGWUx6PZ5QX9r9uZB9whWA4akYcB9SPp2cxm8WBVwz87HUYbnu3GE4GPsr1DFUnxub6tJCwWU9ZprP1JLD3fiup",
  "key22": "4k7hVyXhnP48VZc5NYth4mdEW459iwrm8ifzGyZFppkxipfAwgZu5mqs8nXnj8L9VLQ7854kBHc1Jb14fuYJp1uT",
  "key23": "3u4TXLYbP9MpzkX5a5aeG43Yw25aAoH9EpgEDgYoLwr6jEzfVqTF9AsoqRNLhfZwoAAxsuNQjPPhuk1CCMDBombN",
  "key24": "5hAy2ZhcsyGTGTbxVmPHBDeq2bKTjraLaPyo2L8fq39q43XBM8vuEHkqfYvVYxfbJyLxxTfi82c9vy52oGmo5yB2",
  "key25": "mfSkdtqTb2Ct1T65o3DaxdaDJHDXDwvAYQgTmMhcLzhDdPZ5nMhoNKaDYaM1UxfzRGftSALjpxdB86dC5p5hArd",
  "key26": "EReh84opc8sLYDHH79W9JZPwc1Hf5mBDJsW7XG5pG5Mh4keLaHxXbvammzPm9JdY2KwrwvB2kT4nzHYHcHaX1KX",
  "key27": "5FYxGjXezDR8AetdJNTXuaQ4oaL6dMq8XntFdnuVterknLGbt8Dtb8kmHUkf1u6tqy7ivpx6RHVckGq4vJcBhZdJ",
  "key28": "5fqqk2aJA9G2k9TTBz8irUKVx92b2te5FwAbhfRd6PFWab8FMkM45RRzeoUt9cFXcpvYkgTbgq6TwcLfT1qaPPNC",
  "key29": "2uey9rryrFVzaNXmm1BRrCG33XF8hqvbfNCvcM1rwk2xnPLauag9qjU4tXLh5TpcW2QgfHxGnuikTX4sSqt4Pfqm",
  "key30": "GmUkjfx5T75nFzPCm7g6hgjLL1ojpvoavMyz5K94tn9cc2ybLPnsFUgweMmLKikbQ6xXC5EsDF7DnZV7ncnv4Na",
  "key31": "4giLMJU2pBvD1Rgs4QUFbsNYk8nGwFgvfprSSL9egVrJXvyCxuBHRYr2pvgdZe3YqYTtJoTcfF42Wx37eDp1zKdg",
  "key32": "3pFpqSysnTBs2fSiUYvwu4o5MP3T2oimUtiHr3caXdxVW2inLvKZQpPGpU9Wjg9gMJZ6PLbRx7uriZ6cTS7SVAWe",
  "key33": "4b2Mbs4jjkHX598853wU6BSd6JSmajcuSmnLpBpfhYzj4jFxRZWvkfodJgDYPgd8EYRLe5ivF8MDWUV1kaF6x52W",
  "key34": "5U3xTVADmJToHL2xXWCbRrZGxAkzzGHyVhN3urRJyf1Wec3bTaLqj43fmzbqABp1ucnxDh18PQH5XJnPB4uek5fp",
  "key35": "3xpXdRugY9jk66tRmvxFHGoszvSHoJTUvdK3JtomNw7RN9Qe5CnkSb3mfVCqSWpfWVr9HKGhpWWMEF4MnaW71mwg",
  "key36": "3f2JVgdH8DaaJZRCd5TGcz4KHacxp4bySkkQAaDZL7sWnrjc81cucMfnEDwKRBeB83QN1fe8K488buNKKMxTgDas",
  "key37": "2A4s1nGKr2NV3UcNuecfQgC76Psfn3QdpEZNSJ6kB6PxXauTyGdZrGdqcZNxgFBXma2TxYYA5B5RsjV7YTwsi8uz",
  "key38": "36FpGGS9s27hehUSkXuyduuAzjGedFqxEYjfeLVC1mZTn8HDBmSXEDXnbkwYXLTRnUBhkAFGBb1GArH1pWjDbuF8",
  "key39": "HWYbBrXhjnDFZ1CG8hkWQeWcA46F3W43KBnyyNoAG9B3yLpwjEpmQUroyS43WjEH7gF79YFYSUHXAv9s8fui4ax",
  "key40": "4McTri7xGowDGWpmP8M3QWyqBCD49WH8zhe8u7CfNTF7GwKz3x26fmux6CUx4xFPzzmdohRTDmmhpzwffGdo3oav",
  "key41": "4LUt9CgRFnpgTXHiXECv2DWpVhfWdXpDC3wF2Rb43kiZtAqXvh3SQkqoHjh63sp6CERmakNgXHfAbs6xCANR8xLe",
  "key42": "5BLWk16kLugFW7AvV25D88cZyaiTR4X7F3NLNc7qsnNYqe5ozqdydo8vaQVgZZmhq722yGsJUJNVn1rkE5Wix4os",
  "key43": "Dx3YCYqdge8J4uuRD9PCFBp69zdTZgf7qwag4qXByvdYHQzqHYzAAQhDTcW7n3yAkqoR3keKoaWy8aa6tZq26DX",
  "key44": "4ZnguUYefd3KgdLoMuojttiBLCA8GcYCAccQ72ZL7j3ovgPNX9RyEi6Zc6Kb34jyjfbuJ3rMa9KFDNDjWLGT96LY",
  "key45": "5izf3y7Tb2YTf6vxnAwcJgHhEkgb4M3ZRvK3hP64DmFTsPzGDpv11udgfakmJqgCkwjiEZGEnYXMkbPsCTpju63r",
  "key46": "3xtzrPo56Agu8sJEZn3NiHv5u9nvgsCyprzwaNCE2ifSsAFdp6vazoBaQNpmRkid4gLm8wZLjNx6DbHwB8Mwfrtz",
  "key47": "4QshTcyydfb4odpBbLbLqxcW3jGAynVfJyVz7TcmmnHNssip6bAW1BC1vWg2gqKbeCAE9xYZXXEN7KhoHzxrKjj4"
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
