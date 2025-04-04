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
    "5E1STYtx5FnjpG7EQZcfRygWGD7P8DGxfVjtd57U1VPJMmjvQFwV2DpiUodPYJWgTeEeRzmsf3MFJr4y39VGqEJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ByPn9nwh7uKued3SyvJqU1fzBDdYTwnbKJToFR8WHxMukqdhxJYmLsVEjxjN1mEUEoFJ5QFr3uF7e58U7tkS5rV",
  "key1": "4hbHAsn5GDPfw99HyDtp1MyjVP4pxBxfLzKnGv85Mmrs4Jktpf4Hfhw4YMHoJpyKR8jV5jNC6w2SYoEbvrkyww3F",
  "key2": "MpUPiJX6Rqu3zfn6a9hw8Drb6dSgNoLKcfezLKZ43JLQWum8tKTKsrdYgHhijeG6sKomsCbih82EZKaRUTw4YZt",
  "key3": "23UK3hxUdxwEggg4Q6hiQ8yuhsxKNWHktppQACXAMZVNT7xYMt3xNmqZf25z61fAwMhaQkWcyBNJCFdFfF7R9nB6",
  "key4": "34GaSwYDErKcfYdcUyCT9TRFRP1RabzX4T6rMmLY9gqshHE16cwJc8wTGvEHu3dRTajSFGiheTXBjcgkDPmmuVw2",
  "key5": "4U5vwqGuRiytpKchyrMpqHaBkdyjACvgrvGmECD1cUK2mmuv6t7WLdgoJhWs3aPzujKaTHrLRzJRz3jYFyfsTNPp",
  "key6": "2dGsg9mf1nU5GNdJ5vsfZiAXpZTVUPXgniaXdP2o3pb8B2Gc4MteWjXLi2kk5UiTomM2P2cP19ShqDb4LT7gccBH",
  "key7": "5769yK5t1eGhwbSshu6tvArUDEER7sQV2gNJNRu9bTXbFazvm46rzgwAjANbaTewqKnM3BWcTt7em1zaxpgPxfM6",
  "key8": "2oX6Hk53tek4x8P99aBeF5GHW1trvsHtvBw9yokpAHud6PE5JAjRqFghE1J2dWu8HdHSvS4FzamjKFqTv7mCa9ds",
  "key9": "3UwQBV38AhDTiWzDwN2z9KdTtw38YKw37PfRtmDky24zMT7eJGRSyjkRxyfx76jnrrAQHPfFDNocWUHJ2E4fWcLb",
  "key10": "51UFqSNLuiZe6zgGdmhfe22whHcTmyGXqqNzopVf2i8uNXy3DNmK6jEoPga9hG3Dm91iiXf4hbhwPznmh6wcLcfB",
  "key11": "5vtGEoVmUrQ4LkesfCCe1iiVXPQPYMqefGhjBCfXPH5VC4rPs6m7a1RQoQZbyymyEPjKHwUkkBEkmQKGFvN3ZyDB",
  "key12": "375LTUW1iVnF8w4XFn59JXGStbkLMMPMy2s4y3rS3uXkGQ3vHEsaDikN5q1a37hA92Ec8Yk954CPYxCXMjfpbNeo",
  "key13": "2TdfJkGnoaoFMc5nQWs8izKURcUqBsAtfwe8GF16ZFRno8j84JXvHU7Qd8Ate6ZgSzaMNjjsyeE2uHAHVH7beaQk",
  "key14": "4TFGkmXB2RiNvK5RNLD9Jdf1kwEmkULKu2xQoRak3wfrsxFGA8ZwSdeh5xfnk3BWcLPh3GLEC6vZWHiytXB3TVAH",
  "key15": "GtN74ZZh1XvKHFpw6BPEi8SQBDuJAoUeUyXjr5mP16HoedBGgXyuGjxqXk18eejrvBsZnR1Yv6gzKmgsiCkBZHS",
  "key16": "23wsQAjF4tzn31u3c4uftC2CUXhAcTJKok8C51HBeKtN5KGmqRmZHeo9Gf41Q24KbTVrEaRvowRfX4Hdt6n2jN6V",
  "key17": "pCTsHJNP2nsSiCLekqXRcsHxQZZQJmdyyDZHhU9FnyCRwFTojH1LfCNMLGD7cKFyokGBkfFjwQvtZW6ZeJT9zty",
  "key18": "b5sJGhCqSbuFN7aANrvtvmRNS7vkFwgR6Qg7yAqinnYn3NA2Hut8LShjJibTjt8NZqz6JQTevYocdwiBC6amhtC",
  "key19": "4iyc2yE9H3homQzNfEBq5TgyPW4i21u1L4gMKYrLTwxERy9zHYWQn5bFdi7JXeF56auZo6DgB9SqFoD5X1MYx6BN",
  "key20": "4BwG4a1LNzqNqW5FDDRHDRu724uKp197Z7fZbDkGDiBrE1hZsCzLtjbLvdMXVrWAZ38qgyRMSET1btKAHGY9N7zd",
  "key21": "5exXZS9A4T4xComXvxN6KbEkjFKn8jA3mjvgKKPJe3uZBpS2rG28gpUwRTPPXx66FvsBm6CrZNYFRrrx7GoKSamK",
  "key22": "DoAQM2FBjjq2oJXgssTtE9P1XvyLaVeq8Z9WvesPDvh7RngeGUm8R8SBYmqTBRbKwfNpS2RdksnhHzCWRDtLKoc",
  "key23": "365EB4Ra2tqfnbAZqwZoPMy1dDFvGrwFLv48gfRJeqjLs172NwY8NtHFH9duF68afAUyDsVBQBfURGVXB4hQBV6b",
  "key24": "3mg9Tiqiz2HvL8SVSFLp7wZaDPt5CQVCwUkEoVgszG4YxUrJ5eED9Rhs4dKqekPvSGHVdQg5t2GxEiW81xpjsRbG",
  "key25": "5Rnz7RjA1HiC1f7GcddZngVAzipfbBHg4LQ2oTattmeWcH8RRBrLqtP9fGmKWtN1D6zUb4C98ahmVEHiEk2zkR7a",
  "key26": "3uAXctMwTCjhhta6ki9Myd5DZ9B3gVdhEzVVbpbZnVi94Dk3XfiVW1AbLpFLXptd7ZQCBQoPeruNETNd8RmJc68C",
  "key27": "3fiWE8Mgje33tgwcfq8d2ReyKKgNuu1BbvSX2Cnj3MigVAqDmwkQiBDbSNwWP7QZxn7GEzYHcbx5JKawt3ncJoqY",
  "key28": "4pipedgUZ4x1KLAsX2wKi9AhmMgnoEqA3cPBL8DJ9KNkjpJNvhjykQ8oKSSkWkwDEniPQ39BTZMxGRbb4jtnKFZa",
  "key29": "41TAG61JbykJdxrSBjUZ9HT5Y8pT3TpgCfpZyw7ntwzAwNo3MdcCiKUQAmTe88Vpv3JsKC5Ks1tbdodVGvdV3Uw4",
  "key30": "b6adjmio7bM28B13kR3PT7tuFgyB3CrEmUvAdWr1BNPfcc4szp5xgs2i8MicX1d26ARVMQXJWno95xqGvmBdnN2",
  "key31": "2ay9cadRsWXSHGmf7h5553M6HLJ71MjrHZbFVeZ7ys2x4WeSSuRgFDrETevBPQFyx9vLpaU3R7EAQq7e1Gye8N8g",
  "key32": "cmXhdAu4xeFdnKWGqvmqAbAwZy67jEiNyGW422qy6DsYYZppbsWEWrLYiBPNFF2ojFJTF9eEV3xxU71KfsBAGpf",
  "key33": "5oTT6vW1oeaa79N1YssYcxENm25N5cWbUo1CGHiHpS7DZVEZmB738t1aDpgwZZY4VvjUHrcSV9tssMuyo9zqeN3N",
  "key34": "4yCQoCSQe1vA4wkxQ8ecvTEeR8npRtibrhL9Wq8Zn5VrctJiCZR9enAKGWn5N2oixKiEYQV45qU987AnEDeJkodf",
  "key35": "5DzgeYufMPxVf2fA6aLvjmJwfmFMMMYDNGnrgc6oAZEUHFxGQVboSsKdDzCYhvxuk1dR452xKnd2RBvMCGMen4Z7",
  "key36": "JLdtRf37tKHPJ7eKPfpyqwRN68DQKXmuJRt8Kqg7r9gt5PaNynZzS1sVcTP1ZuEMPfb3LQjM5jST5JgChzXTd8Q",
  "key37": "r1Qw6ob12qWMppfieCmRnPqA22u2XWxXQBizh3XdYx4NJA9cV7ZDppFqkG2UHg3MECmzLDfQpu9rhdwCMNedREF",
  "key38": "46btf2Zh9VFdFzTJ78M2xqryD28Eee7Aig9g5uBxYqWtdNsjU3GxGjh4CdJtzjnBVwWrz9tjnWHYzJwDS3pqJ75s",
  "key39": "4Rj9xQKWeQDqrSyc3ULGupjAhfYqLtm3uEKLeDPWkb5JY7kuCSV9wdE9NqfM6vHxHfdwpkv2E8qEYGBTsySz3VfU",
  "key40": "2fj2wErPtD8cC5fSvzTXXzV9nV3QPjJWeRActKWQ1Gu4gFs97GE4iuaM8vMb2C1QUf9wptbFx6oeSmnGUrqCigrB",
  "key41": "6kH8k3BebBvkC8JKoLDAY2mpRcwbfdQevpCjvT1fDsCW8S91JRxMsUaJNMbsHARJGtzEvZpxonKMLrJUHXT1nfY",
  "key42": "2tTxTX6nKg1f5CFmaDLTNSgfGxWpyE4SNYv3gTpnW6NJPKf4xHgmjerb1kHpwd6hLFZeurjCB2EhrZupConTwfFR",
  "key43": "5pLFEF8maX1iSm5Y9Wz5NvcZXQzfi3i2yzafvnA1b7hsqfB8P2azVm6j6MmPjKju9t3LNiSUyv1nFjrER1VxipX8",
  "key44": "4qkRDmBXM2z9sp5ydJ2U52KNv1Hi4ERhTDHRSLFy9ioeqPn6VJGF1xFb12pcN9fk3i1KTtoaTnSFP62zbXEVMj98",
  "key45": "4sbTWBrgJrQy4W37jHepB9M7TYENUMBqHVgrwqGybJ2jgwgyKYwVt3pWtsBD2V42RvPPT754nWhsx4vmcuNJTob1",
  "key46": "4CsmmkeJsRygmDcqGqT1snFKNUSkN7pZA2B7zwJfAQ3choRiZ67SSn5tc5t7aCi8saxPnqyiXCtFowJZyXHGyYJ3",
  "key47": "awrSKdYzDXKWgmfqQa1yMWD24hLLwX8hCm9jpw2pX8d7NqmQjxjgMyJi5af8hv3FfDajUBs271c6AirRrKawq9V",
  "key48": "4XugM7Y1qsgV4nC2PjLjPZ5aAhwMABX4svEAXbFrvT5AxQhQsnuLgXJhw1ZCrwugRbYDmxwoWobvmAgAcqqbLwJe"
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
