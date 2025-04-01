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
    "3SnvR3BWszeWHVZ5afE3J92vPvJJsY13Ky1cqE1WwBv6DfsC7H92sxdWVfVnUqXKfUQuDGu2Z6sq8KAc36seJ14L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPH5y4qBZnw3qxkwrkBz8iTf6EhtNUyHxTHD4bqcExZxLmvenpnnhVLvZEeyz9cAK3cZzuiKdGqJ367nVJwbneN",
  "key1": "4UMyMGXcfn6nGNZ6HUcQ8JL4oTa2u1wqGBU1ZpgkauPo6CwtBEF8VeM2cMTnip4FEmr8PhHhdGTMRk3DsTxxdj1B",
  "key2": "uT8yuuhMshf4qVZ9g93iRQMUiz4GVGrHva2su2VMRQrLHdTyCrXMz9y87eh42XK8Fxcu7kbCrZjVYpDbY2p3UrV",
  "key3": "4XdqnpwyrNiJjV6UN36GAHG4j4kGZ68xjg4sZTRz4hS7cXDBNwQPnqBg5spynjDmKdMkSCDMSb52KCYZyq3uSvLu",
  "key4": "2ghgbM4SBy5rc8exxybGwfuo4WkTULF2Py4moYfEtQM4mzXoaFy1Pbm9mqQB7WsP9mA5EtmmTYGBfLKFHty64292",
  "key5": "5qkvvAVg17qk1JuyQ9RY5wVpiUMDLT2GUSWsjuidpTQEuii84iGxd8Q3KU6fDCkbPy4yX3Hz4JXYGpTxSHUEpN9g",
  "key6": "5QS6R2oVf4XU2YSugSW2xEde43BdrbUydzPzCMz1qyCd2Yc1GBDmPRA4ScYCfCRSn5hBw7TGedPbqbp1SGrUG7gR",
  "key7": "2Y8xehPuVvfn1kv3PDXhX2xjsYPHxFkJArP8p1RR9aPkwFbm3Y8iwz9rBTpeQeJGYXmhT4ti1WDEMmPxY6ugXU6r",
  "key8": "5R82Zbnpbxv53eWfpW7zdtvsJcaq7bPMKWHcCKLNSZkru51f5E5WUse8vom3vQ2rpfAu6LyL5aW17vBstRLgG7DL",
  "key9": "51vFYRvgiQjHCbwXJwym6Z44tZ1va14BykrRexbUhKuJef6YLd5NgSSSSmW1G84tHCLJrNLQsen7rDmesesGfQND",
  "key10": "5qzhgkj3yyhqxwoSBeYMLUm2KuzVCKgMoafUxHKZR5YaDCpV4wF2AtmGWwLJU7bzKRxcQhW64bJsrQ9MxrnfeTku",
  "key11": "2ACJcnyo29oEBvndiXQbiYNpcg6GgZvDFvCsu7uQXj1Tg6JjYg9BY242S3WvD1x1MFQCBSnDq5XzK7iVCZjYUM8p",
  "key12": "3MwC7UHhHx3LB3BL56xNf5NTLNDMH2orzaLpfYd2F4TYcnkAc5V8sExBEmwiNVDXZ9EC9VEDqqGpmM7tpH6Laxfc",
  "key13": "3LQAU3Svg1qjmZY8MVJntWZcmM93Hwq9nwuK5mm5XfX8BjDU79uJCuqHg3shBVquwgDuYTxn4eWswaX4uX4va7qC",
  "key14": "32SgNJMStGptuE8SHBfw5dErVgukhg9HHE7CbAA2JhePY2dTKrux4PVZfFo2XNycArV2ZCdMEPHHPTw4Xj2DBF2p",
  "key15": "F1STR3QX4nWgKa4Z14USYnBt7BrN7BBt6qLzdDtt7wDdcJx7S9EqxAi1Uq6UYP93VWQassqdRirCPP75Xb9A9DZ",
  "key16": "qrNvm4fvD1R8yEFuyiaTHTrh7fds5XsGPdKoALfXWttXHV9q8udFvEtYk4jVPdcFgER4hoq8JmAsT6sd9SJ6HFr",
  "key17": "5wAzPQBoGPcTMChxPrAReePUsmnv4a8AQxZuWGbwTWoQQrhDMGc2ESCTrc7N8aBm5o6rZUf5kocVqunrmbK4cXMz",
  "key18": "MN92vrPedygB9L9rvMEgpxZfv4ecQFBeE6FGDqnumNCuw9EvvJXgvBG1A5S9rh51dLEPqBweepX9SzCiRiV81xV",
  "key19": "5kaenvBUNb4FpM5ocvY741mHdSPZ9VHpvRW2EUqjmZtbGBCcp6QVr7fNo5GE9DTzx4w1zoLRJ5hx3wmRn14fDY35",
  "key20": "2Z8eeD1dA8q3hEbXkEiuGY16cFmBVSUU1Lb2GvhxJBunakUr2Bxdc5WgZs2oBczRL2AJMtNiYRdwwo1nu2sWzQrr",
  "key21": "2jdRjtZEWksAxZs3Qz1tvngdvNitJq3xb1feSq6zwyQ7R8Z2GGqruvKeXu9wiiBVwj2ZTv96WEXkCVEhYWnGusMv",
  "key22": "4Y1vdFsWrMmfzgcffVs25FTzVh7SQsf6BxXTZjVhrgpCk9fssTpio7XPN9KGoo9Ss5oUM2xaHqkBxQYBF7EntSch",
  "key23": "owJ92JFr24ET1vjJv3vPoDedRcDqQKRTyF2Hr1SRWTzMkpGV3YgX7eH5NC9RUhyt9KVa7dXGSVUQiZRJujNmQtK",
  "key24": "4qnmR211U9SFo8NBRVjh49wvqbe21ipxoLoLHPq2xPMuqz4Fgqitm1X1HyvsnEjpEPzhi2Q2jNXjeMC378tJSCaa",
  "key25": "58qeDwg2DDzuTeZapp4gPaXErfZrADv27PY7HSsEZsxLuddosBXw5gj3FV8j2kXYUtTyWUSsZygAPENjoGD8abFy",
  "key26": "4e7XV1kc7fNE9sgNTNkQAPUB6EiusoEBvXTPe9qBLxUx3Yp9oLZTT7Ez8zsfSVixwHypmiycKn1uBzHLwttf5KRw",
  "key27": "4qgyr9PZCmoevXnCMHzbpvfbjCLCVEkZ9L4s5aQb4jBLUph8BJrq46kiEdnH4e3Q4U3DtS2TFBK3aqRgYY1dw5dz",
  "key28": "2GZcj1nGS2DxsydB7c4sERQeki65UwwhasjZ9nhft5gwMXJUQpf8yWY3jYowA65zz86hkSAcW3oSM45vfVCthMMC",
  "key29": "2tDhLPQerGo8zGrds4w2Fmtc8jcXWeWAqr1ZPg9HuFfXkSk7VkjFZYb3dVbbQhRiLak2JJqcEGBHUpa1914aarDk",
  "key30": "4yEecPkLVbPbPLF1ZX1gGXXQzY6EyL53CVbmqeaqXXMCkXPmUWDKwCvcasJqsttViC3sKG2im6F6q22UpbY8v43r",
  "key31": "4mM1WiPLebQL7EAUKkbpM7uQ5LbcDm9i3G5Z6g78xsWqpcWfQ8GmbtEZTsfZKMic4hnnKYNzxvvSFKhhsxJT4mAT",
  "key32": "3Ks3NEbSM4H9LGW5tWNExU5TGEMoYWG4EWc1xm35YQZZ9nfmcmkv2z2SrQoFjGoyxQURQMnYD4Ej6pmevH4DEdPS",
  "key33": "J1ixXojxEPj3FEiBuYjF7hhLVk8rLKdjdznWm4gsMaE9UJdagTPpLukDYT3E6UgCEEe3L2Ckb6TCMfWcZKbRnH8",
  "key34": "2DijAiRRyMejeZ9wu4zBrXby7cXWBktHVxtaCJNuxnCoeFmpSmiviFMhTrNbBsDpaPuaB2pFiTZmpnrtmhWMCG6y",
  "key35": "5yT6tfve8P9YBcRyxiqU35BFC2yozc4WeZbgfdn6c273a7XvsaLax82WsVtyaJ1pWeGs11LfnE9Khm6eeEXsmbFD",
  "key36": "5QadhhjZYGBEoQmGnRpBRjn6YNBNvHjqfnTEGnYHvK2ihRKNZ1TosAwhjoXWndG7t4j2r2iTDR9LBKsXuUhQKG5b",
  "key37": "3bg5dMruKejRdSuA1yHFyjLwGM5F24pbC62meRvie2pqa62vrZ4odJDdJ7acY5DF4Ry7MjUBL9VRarX3dEoAwteF",
  "key38": "2X9qMoM5zDmnpg2PgeYhkv1HDuduj3GprjAtHiuCydzWziXDyVJkFud1oZZUxWqbaPpkhDDKpMiPP5e3cn22kF6t",
  "key39": "3jaNXpLrNJwyjZbp6sxfZHdbrbyHsoC5KaVi2ozz2wQPunBWYNXdAYZirNMnREsTtfQeeqtUzEJAUUVTqfdo4eB3",
  "key40": "3F1u9nTaxoPrYgaY3DngPW9q2tUjvjHNzQK64MH3gKaHDd5awYpu3yEuYLqaM6kjnKL6PFVhLJYgy7nD3yKBmbVy",
  "key41": "2iHDCkPvdLoNBv3iZ1khGpMG7oLuHcTYvW6u1EWZrMMkViFH3QoeGGJPjTfaYyjBj6uERHPn2xt99eX9UWsj2WWR",
  "key42": "3aFwyaG9g93zDr19vdVn1JhetWZnAbY3UzaennTHZvKA4hjRSjEjF2W5WiqAwi9PwvRbzcFYNJ9Y1yovp8oZhoed",
  "key43": "5FPDpPJza3RshsHhAuiEqPMxkeDxa3XB3bjHHRPmAogAhs9DHfanJjYPkdurzNKoYcwYWoyyKG3TUKBdqUduExKA",
  "key44": "4khyh4o9QcpfGkJgJN2g38ETEWKfT9VTJxNu1kRjNnh36hQiVMpoCEy1xumty4ijohHzGoDSKsmNH9Z7C175J1Mi",
  "key45": "5wtbFM8SQ8dHum4MR1pxBUh7CFdL4xFmiDGZk22Sp9Agg6qSMuukeMJCpkf31M8aNZSyoZrKAwSwU8JDUx1yGQiL",
  "key46": "dizttwUcSDbTTAU1JgxNHTDiUYKPDsCBbPkj6FQPa6EvgGBFZ3CPZQfcDYHm2GHCTawgfG8SQTPw7VaeRxWrcZz",
  "key47": "3S68Z7DYzjWfwhTKNvFUuiQnjzWHSpRPALB7o1qCuuvaMDiadPfGu2mygky2HDV2FhwvfzBzHpCdMsG3HxvfGGaT"
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
