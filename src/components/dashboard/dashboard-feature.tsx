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
    "47xkFmrHjHg9RAontjUAVuJm6fbhvA4JG2SvfsqqUpyqXhU9C1Uc4vMMXFUcjM5k2nuYGPfRbuv77vCC5RDrkT1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fcLe5pSTSES4jyUQxf2hr35Tf9YqKsWhnLgSJhk7CXnufSgLpvGKF45tTGWBX7HKcK4HyUWLayNemVLQPoaYSn8",
  "key1": "4WQwnA4JUsi8YMaZ3CzPU6zUZo7PxDk9fy7VCHnZVGcFqH8KDEfUGqqjnqULJTKtzKtdRUvuKWLdEeUHMAwYNMr5",
  "key2": "5xoUGTjqk1BHnJRENTs7hRBy5uvTNmG6EV4VNL2QpoqQ77TKebvBfio91JtD4B8Y7SDBu9YorRS3G7y9Rn81WqUv",
  "key3": "2GcamYLUx6zsZa6ZzxxA6pTXsYihJZ6ceiTscT68sEG3pnRQWPcT6xfgq9BbJjpZw6DaGVoPKXMJvkjPo8W21rjs",
  "key4": "3heEQ9vwo9QYBR5DKh6BfH6HwBo8b2uRcnaRdRU3ps7cgEu5wNoLxzDH91EmjMnQTit6iEQjgias8g64btLYZTWp",
  "key5": "4jNb6xyjp6YxZBkwTpnefXcpng6ZZranuwCiafEamRZCdCxM17R5zzZneL5NVjwKCaLVLenk4RXGnUC3X7N4CaDb",
  "key6": "2MqK5RiRwAUojSvBszL21jyCnu8T9mRRG4SJL7F5JcFWmF8ZnMpXLv8k5EYysFipiGGdZ4ML9wjb6vRuJPY11jBP",
  "key7": "QgYpqDCXE9rbiZDLdAJKRcKy3izfbcMK1ifZ2kS5h7Fz9feWJ7nce7Se7DQfG7sWAwb3iNXxc2W7FdRuvmyuCRk",
  "key8": "58PZzRZiKtWPHH1fLezVAYecRS7RmEsPz8NCxFU8Gr1Sorv9wKxjDNr9cHgAC31JoDGMEcf8XcsGHhLAVE5sD9yf",
  "key9": "MAR1cSytsTx84CeQ8e8LTBzLnSoBDF8es8aZ2wD61bbQNPkjxGY7Tt6c39oXStJJrU9NXMsaFTGirQVTpDRxmRL",
  "key10": "3XUMmQSyHevuzSvRHt3U88Pq1HZydJ1mdMiDnLjb1iopQF4nAt3sZbHKqnquvwzgMFLyW8Dp86g1Rcu2W9CzX1R",
  "key11": "2sXMHs6Y63Nj62NyacvpPaLwwx1nsGRxUmhhwrCkwXczvKQwcUUxs2w7AkxGLqnQHHxwemtQUQvcvXDXv2yQV15x",
  "key12": "2okC5RSWkgdEnfqPoHWvcY7uPTTXonYnn7zNA2497a1zkDhK8McLiUX9r5BagroEowMQEn3XCyhAxh7Q7b21yKAL",
  "key13": "33w5MgxoiFGSw44K3mTzWcDHSLugQpAdTxpA9YnMFFyfXH56wvZn9LErnvVKTFsjArBtqh163tSsz4gfXJenoe3d",
  "key14": "1Fxqgv8G1vC2mw2dHG4Jcdv6paj5CcqE2JQr59qj5KMh6BWUUBwPipEYs7LordaLnBoWGHW1tQGJpy8sstdBdFj",
  "key15": "266S2bfjUzk3QMDv6JdGPqcbn47ayNApqMThtZiFueewu4JNta2iA83PQL8YuVjxq6LcMQJK4H9WHZWs56Nc23cE",
  "key16": "32uHSSmJ1j4519JUiPEDx9wo9iafhHjoGipvjXL9gSfMrvceyBfu2J48EM2Zsn9zfY83oVtA8UF6WWHWPJotEqs8",
  "key17": "5DsEJ8GKNKxFLiqYopW7CqePvhRAo8LxJ2ZVkceUUtEwSNqcVzF4k8YKV9aCszdGx8gBHVjaVKDDYRkbLhPNoHPJ",
  "key18": "NYeafm5BFQXiqgEf9zVzg4CgycrSNyeXGBX1FVbX1m3QewNN5tbEURuRiErQ8FraSzyJDoLtvuFSQzWK9odG8yz",
  "key19": "2XGSA2o3ZwaJd3NSzKsRWVcsNLATaSKWJhn1wfyHwKteyKJK7fpZVQufuiLqNCRX9SNewzWYhi2KGwQCDHbwqAfA",
  "key20": "2BSw2Ru2f3ERWYwmTL44TMjY88DDwzEwD8dLDB1BDMkUR4THpgiwakinDwkrq8xhQBbPPMxyvvA5AHAvXbdS1Rjr",
  "key21": "5bRniH8E4WYj1m3Grnjs8WTdTU7QJnUETzQHoDSGmFALbekD37NkduHAxBTYJvPHRm1aJ14vZWrPVws9LPtNHcqn",
  "key22": "4xruW7TpXXBmFTyEqRmr3VJXi3FRBaPqxuUzAamv4pVak1qaNQu8h8LEsZc8nLw18ZZuiMZBCRqrd5aWJmYvJGE3",
  "key23": "8SnKS1Q9zTfxFqKPw3mxgWUe7MgT4D65XGodyBc7anGimjgdwCtseeahDJuriF1XmGNAPRVegHsQBUWajs5JxEP",
  "key24": "2jW8m7zyR4RT1LUGmj7QVP2TsiB4kAEPv4i4PbosA4vJsPd8MAtAnSoZEP9yH5kqzj9avMYRuiNvR8whi6JBw9Qq",
  "key25": "4ZvUShHV42sy1wXgd7PCULvGU3yYrtvo8hprmE4z9aTqnSGN98wquyswwRmFNFiJK5CUstScEZ3ehzwM2x2V8oLf",
  "key26": "4iaQ96hi2nX54n2QCFTGZCU6hu7YxeUcyovVVd5w8yM51kkZZXywvcJ4aHKvEqai4AbpHZnuAbyrKXm1sU8bDxXo",
  "key27": "3WJyTCDRSbig2WKqB2HBZFh9pTLmJsXZA5N7RPyMUZiUY1MURNa1JXJs8EGe8A6NpTUF2RkASB8nygCrJ2WyZ5ES",
  "key28": "5btwTjAjj4rdGDnMvxviSJRWNN43e96v6H68WDnTij4fyRsYTFA7wEMynay1DxcKA1rPScQrNnrJZu657yGVfHvj",
  "key29": "52kNTKpE4g948VNyvJ77x64pYtu46vgjioH5b3m15EmUES3zfC8pqr5wPsB7P3NWBoT4sGEeJtAupWtmsWYBaJuJ",
  "key30": "2xe5ztiaadkNWBmwHnaqMuE2PUtTuW9UYqDUZSefw1GfdRZYyPTxMHGrFjPWb37SM519BCSe39vRkiR9JsK2Cnny",
  "key31": "ZLr6rv2YX9BfvUnqctmrC1brRgYD5VEM6P4xYjqy6ELkJQL9crW9MphS7abteto3L16N1Hm3Z43uqzPqvWEQpsq",
  "key32": "5v7QnN11k1SEQFppaQvST1BAm5c2DVm1zrd3QLcA9DeevcU4F94yCLo29stjowLWy6uW6X6x9QFcMZAKaZZE45eh",
  "key33": "UBoA77CkEej2guS7U1GpuQegrH7PEvmffo5Ub2dXdAWBdpANHhSjUTS9E6WjakKcEnzneqdCHQmgzJsRDCT5Ghi",
  "key34": "2ro8obvQ4MWkhdoUwVrYiYGn48n6oizqnnhjAw4nELBbY4TTmobBtjTg8Km989GxHhcEDyYesUvKatotjSbSrmiE",
  "key35": "SQMXoHu8dzDnWAEFjk5hF2sxd8cGHtVkajxtCNy5pPsaH9Kbza2WSogNDdWmffn3sMCfoNnkTXzJEPbekAP5K8K",
  "key36": "u83mJpZqjkYpXg9MNHWTuZCK8AgCkUuSYtM8w6UCVKQo4XFxgejGyYACSZZBhZkUCWX2AKPRJtdUEuRfTwBLH1F",
  "key37": "3aPVLKE8CG9rbnne1fDqfgxDA96wfeWrEzQ5XMoPaRhYr1i1LpfD3VdaiTURPm9ANM64iFhZvGZjhiw4sKojo75V",
  "key38": "2BqUVPj7atLNgxPA1YhQDbFBY4aBzmQJv2B3yXx1ob1DPQsHuxAFhGP41P8PRkf8zUehpeqzdrfgSraJqD9Wh5Ri",
  "key39": "65GAGPmg8881txehRQGDML556GKc7uywAeHmGeQG2ab8kJmeXEZBk1cHiZqxjP5EUU1PNX9KitH8BpaknLp5is9U",
  "key40": "4asYjtpP29cd1Yp48PqPTdVvVoWxTjRr5rA99TrPbaK1aLmKKY1j289KETxg6zFYiPgecHTQgoLXExRbT6Q8Gy2h",
  "key41": "2HXdyGSkPKuqocxk8EnuRjQRLXSn8bXctpWDNME6ddHS5XUpFAmbjPVmUHTWqrAcc7Z2gDgrPwjAxDqq2n4KKmwc",
  "key42": "54tJ2njbSuD3EMLi9D6QbrMMVAbjNuUeNpWsUx5kxU5zwTSFUKanRmtVH761UJdiaGEVuDjhVmSVwbiqrK1VAKCa",
  "key43": "3FM9PijyPbv5UmbWaKZJuvCCvDyDfsjDYPuQuddh9AZBYkTNFB8UrBg6R5Sta4KDzbfte2H9i8UTPgEauPZ9AWuL",
  "key44": "5gnPGPeLhKLkGUn2PGFAB6aPisBCU6RQcSYh3GrAHkhC7sb8ryHRbBXfSwkHSy49z56WBfuiTb4JNZhrXbmSnbB4",
  "key45": "5sfUhYFJFnJ89EuRnbGbPCz5x6o9o2eQuFvkSAj8kekau68Md5T51FWMkyYA2TJzfZj6mQQPyvJdxoPbugdnd3h8"
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
