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
    "3h3voBqWreRAP9ZDvLRa6PoxnGBvEoEQjiUabj5u5SgEouXJqepmSjv4VcTZivAAHukoEeA3mD7Ny5UjADrnsfnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SpjiRmZTV1hUSoWZs61dgXjzuSzZawzMm4NNyecZBopkGbPgETk8BaUHzimvPfZJYs51uZsMM9x1LRz7VqewyMG",
  "key1": "22ZMFpCgnsLkGBPuYdb5weDHpeEajnaP1bYFBUpcVMpTQLGqP9sGjkpUefPpWfJ42zdbxN6kXL9oSLPtwdgSzrpA",
  "key2": "5XKhncmRqec6nRU7KAjwkLf3JgJH37Fzjq5S5SXJzjobfEu6BtvNXFnApXmEsZwB5QJPcbVpqDj7zL7pi7dCPUax",
  "key3": "58FUEH5mAyUmVFGsyBXKs8Mxd4eoAXFYsqgz8WZMmi3F4ycxeMLzQAcPDsjGx5399XCxJ99PrBpK5nEso1hPyoJZ",
  "key4": "5UuNeiB3YiLs3Zt328ptfV3HoVp8hemkPo2zLPUzGLQoLZY17GFpb3CRrzEBxZfhfWXz9z9XAUTVURk6MQbaBiMQ",
  "key5": "4bBLoN5fmyJLGJYng2aazMsjH6MYyPUidDjfMfXZeaqe2EsRkHVuxqKXxXhNs6zroSVAsKZZgHHLBk2Pq4RbJTDA",
  "key6": "4khMXbkgwHhNZ4MQwRPArJvnVf337jTHYFqNYz7K3vQoTQ2dfxSL29cH2HTQKRxfh2gSkt1BoE4hHjqyH6pAStfc",
  "key7": "3wdR26isqKmpm1PaazkoSm7Wz7bjGEjEoQfgMaKfp8gEa5woLDDvGruzcQWVegm25JzmXSmskVzotuik4B1YA6mJ",
  "key8": "5HTQxW2cHj1VbMEXV3cuM4WbwpqmYTdsx755aTwHAHqAAa7oSCyZMcHZsNnqfaQfKkXCemhuv8KVW8kSpU9pifJ2",
  "key9": "4MW2kUhWFReuhKm7QZG9Ggk4TrV6mEjJ6zduNXZbvVtkVPXQMFdSihv1t7wxUAtTGXwzo2i9aZGDLfEMwKq9Ljn5",
  "key10": "5FvWVaPqgX1AQY2XmWzRqydRjoNN2qtxmnBN6zvFfJLFM4dHF96azqTK4A2iG2P8YEZAMhWZ8zvkQSit3iAKATGf",
  "key11": "283qx5gP5dviAguJ5jQh1zeEzwyRZgMMLeA1yTEmBGyYS2cuGYFsL37U5jL47rbcA1ZM5RDV2pCT3TM438NtwnfL",
  "key12": "5NHdpGRFbSNwXUzouu43QHCMew2qCYC93G5kk8ShHcQTsMhXDBrRFwD6tSJtDxBATumofHf6ikBtGetn1eBJ2aa4",
  "key13": "gnheJNR87cfhtTeCQRzGw34c752kGGj8B5XCkjNzhimhHu6TPUfe5gaRmXAs7DZ9bFjb9Z3CWutyp3fy2EFuLre",
  "key14": "38WKix8UF8eL3UvnatKELgebj2QFa6HikSMoh3S6qXnQJyQLd34nCHa5XQMzAFRZzqH3rY8ryVGCkPziX5ijexJJ",
  "key15": "45UMujcLZtyzZmnVmktQh9yKEponWZSAkp9FU7b8kt1LL6pe5VEYXZaAPiSReVdV8vhyowuCBRMXu4aKezExcrPb",
  "key16": "667gvHVJm5qJ5KkBbbhtjX9HNS2MD2YSWtFRUTTaJqnGF3qnwS17FJe3ABzLueMJ73JUnBAzT3QDZsitSf54sLBX",
  "key17": "d82FdR3Kqiik79ZXcWGJpPTrfZhdEM3QztVggvTCXjQ75VSf1YXm1u7QasHMEuqJT2cQD7o89q3jm4L4qk61gk5",
  "key18": "Hpa1e5j5X3yq76TKWcFMn7E47oqhyv7UfFaUWUCvLSVhMbybcXmf8ajFd3V9BurrkNMwEwYRmUPRpY25CxsX2n8",
  "key19": "3Y1qwao4CwmNDSQUuVULPNuVfnNVzUZe1XVk6j6VNBe9hLkM7y5ZNy6Lz96LkGXi9D11JJLxBm4gzJpfqsvsEsXc",
  "key20": "4aK7zaPSwLUK7m51Ky4Vp5s8Y3ccY9TrZKyvzBxJZnPnz4KHBsYSL1JjSFTgC5j5VRC3cuw7LbzCvtoFExEdWuCW",
  "key21": "3igC6uH23jqTR2haMwbYrdPaBhfYff7Ws16Vy1AoHCfSKGKXLDG6NpA5daspkkdB2NZ73iciPM4ym9Vu9CWkUpaJ",
  "key22": "4w9PPrZjCVQdxiXEAFWnBcUV5vAq8tgrzrda6pJxC3ZHfxgNNFT5n52sByBNF8EaKoUnQf8W3vJzdjXaUbLm98yh",
  "key23": "33G1ZZQfEDjriRdC9MUQUXsArUWbR6YYNA877g9THPFq2tWJ6UHEeR9jwciHiWTNanXoW7eyWCgnGTJPwdh2J9ra",
  "key24": "HLA5ZQeMuuBTe9YKGLfgyGobZS5qHworhUrhf6JXTKjJcyKvs2yNrF5vitFipZuTG2yjkDj9YRdeUWFsK7jUaKS",
  "key25": "3yzVhoPw5NEdGAV1hrTFD3napD3BF2e8joUY5EtWCM1QKKpC7kP7w8LzvSUeDGzFGJpGWXMK96Fgank3CkYDuuBJ",
  "key26": "4MKXh8A5ZRCLgRnnE4KMBsxpwq8RpQ6GY2evakQFPa6eWDXaagWf8RtH9ftRinpSXeX35BgonpgRt2opiiHCuvN",
  "key27": "VDXwGWsTMiaPBR6RGCAPHNrtDSjFY6Gmiiaks4mkfWSLYcjWF3vSWtHjpPKiPBF69THp3T9g7x8pzx9tHCPwz17",
  "key28": "2amZEKirxuEmkVYb8q2RnXVx83pPMk3ucqSkog5Vi9bA3V4c24KdwjSKVVsoscbzq3Xcb5n5g7kQdL54ckWxMC5P",
  "key29": "5qNvx4HXDychyBdoaJPbd1eHFaxoqgs96PvU2ioCpjByKmWQKSFHig4tjW122TJ3SBhRZFLJdqTTJ1ux7sAEXhvC",
  "key30": "KFaUi6tpBPsNCqsXKvp3mzRd5615NYkTjy8t2M6oLwpyS2DfrxJhnCjx3zmbUuP9KTvTdzG22Wz5ubxb7KSMFDV",
  "key31": "5Rf3V5mBfav14i98X5D3BuxaVfNa9D8DythWo171dyNtX6i4xyNYza8WT65KJPbPWrTWq6bsFd5JSALaqWtPtcLb",
  "key32": "3nt3uTDpJYP833Udw1ihfDMqUss5u5M3wy8XCAdySmLYGHujr6Kaz6YJgASuVuPKxfgfs6aw74JoGegngdZHoi6H",
  "key33": "54WUqywkqBH4rmVgWxgF7UrZMRbJoZhxjPqa17e4RQ6Fqc8MSQZ7dbP3jJP9WqFqhpyna5JrpTzNDgSYDBrkY2ou",
  "key34": "T5JSPiQYsapzKgV5pyWLpnNcgn37AFvs692hMtjdBrVEyDyEfYH7SghyTuDQgwQMGnz3Ly4aosJEanZk6keM8Me",
  "key35": "57kJpv3gHxJYUbgDw9tdK44js2Qdcmtriu7Sf6HcLbnfY5Kx3VzhuBvw2HJQBanV2oXRJRtJpw1TeabEkVKrA7uk",
  "key36": "5qeTffWi4UamAcymiLL3ep1hs7BXHXvxqBG9yxnEYESbH51L1N4oyBfUTEYMtBhKYuadnqqWMUkK43H3X31nxvPJ",
  "key37": "5TBtmLe3yY7FdePUHYtg55QBR9PrzPVZ5oftJUxN2fitaM5fq5nXj8zer945uxDrXPjrUW4VJD2j4ZSwDzMfmJam",
  "key38": "3i1sz3ztxJpHzrYM9YZ8QggYZn2vMwGhL9hX4j3XtehvMDhevgpBUD6JDtcB1vp3KnPT8JUQ4JgEYZJ23g5iyUcH",
  "key39": "4A5YJBqgzZpkN21oZJHGx7Q5nYQff8kLAVZnF2vTAUpaABcKE4TfZaNPcUGi8xLZBH1zrBGVyR7g48yEQi2AXNis",
  "key40": "65yyHampmqntsjMLTJE4USZXsExh58jV2xGeww5ZTCK3piuGw3gatzqNeyvbsxu1ngFFzVVWVTZ5h5XKJW9oGEPS",
  "key41": "o9JXZboBjJzbq8e6PDZJaBUoGcGLExa2qGgoRMcMonGF3g2HuBQ7Gvsmfyp89g5qecCVRqoQ4UcHsuQrWm3DLqB",
  "key42": "qom6UeATdNvf7YnBpuziksVZmiEKpa7DiW6aZV1ps62qNU7k4MB8ZYKQtqky8ARQfFDKVVcLbAjZyZMG8ZCnYcd",
  "key43": "4U4jkc2WQE4P7C21tZgdNhdJmWD1P15fqt17HvBMKwKDFBL4wYCTjLwXDPo5156tQ9dp3UkgmoGcFmcQZuWwznx5",
  "key44": "yZ4DZhMmWBi94c76n7LygJUteKuSdHPMzVvuH3CPfdhR8UNb83EgcMFpXNnAvvEXFsnauqBTC18p8TqTNGKU8tb",
  "key45": "4ycWuzEnj93wYNk52QZjVn4m2jTzJn6W5qqubcUUW7oa93LfPQ3UT2VyV9mQXJf74FvevvRMDfYAr72Bdeu8Wo2N",
  "key46": "2qT7MZCiCUuwYW3KUuqQmFREkUvb5tkvnLdV3R43eGfGRKkZz2oazroeaaomtdp7vvQ5SFQTmz9SjUhS93AmGsAT"
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
