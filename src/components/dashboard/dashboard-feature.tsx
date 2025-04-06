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
    "2VzJro5RgUXAkuzrxggsJgtXXKRKy9fSWv7xFqGuqWuAsYhFiuNhLFqMpQF9J14k5bHHFRToc2X3WhrJforoWuE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gv2fetVtZmQyQP9UqPH9d2v2rN6jhaqczD8bpUVw4XDfx7bTaBEYu44M1oFtF3P6BDSNMDi3kK74r7TCcZ7uNNc",
  "key1": "2MKXDRGkHbWDqiT4A9CiV7SoswjEThy2qvuwdJnGCT4zdKyP3fy5se7kjVxpWptqgSMiiuoUsF9qnnjAyp9S27Yu",
  "key2": "54jk3kxgfwS25A18kpN8SdjA2Yhgz2QKxv6W6yp7uRNT6WkzhiMD2BYSdLucfJFYxrvwn2GzbBdSDQR2LoJortj4",
  "key3": "4EhZdhKFRCFE5komakme29BEWJr6CAGCtrmv1DsMjyykWzeBRP38bu4Sk7RUNS6KzDozf2xCX1KSTxQoJnTREKw7",
  "key4": "5UESjKp9eUVad4MvSBxcC1ffPPPLK5mbxm3v6vzBBtkmHDUGiR2feoCnQPQBvLMhpqDZSmCJE77F7Z4gmLWkozr5",
  "key5": "2DvSXdx3wwYTszgRqvqX4Q2xk8ZUJjLA3v4EntzCUQQhoDGejGd3meHtQBEuwVU57po8qeidNqdiaPcj21GaJLyU",
  "key6": "24xmCoKCJhRHAtMgTvjHxE4rg4iSuGXSoDzoWpX2daE7DrDB1zqrq2AXM6mrh5YRQ3WfxG5PXQkkUFUhntvn9GWb",
  "key7": "3fbKVgFdqXnCQSL1zoqkXTUMztPsoGjGvujC42A64HXLDA9NqCpXLNfVjuJRQPsp6KTAaKWTyGHe7AbANP9kFXw",
  "key8": "2CAc72zEaFF3hsaBxtAHk4PByakzaVaAMZShUUAVWgGhGfJ4YpdT63ZwKA2fptdpCgpCPugkxcRwtMdDXLYi79q5",
  "key9": "4Q7nnvpGMCGtCCXP1YgFyEmLC446gQ7wX6GzqDo2iALT8jw6uAHqKqmXTVyZipEz5fARxZxeXvBvp86LBVJv9iYU",
  "key10": "4XaVteKFAUyX7YJkK8zrLwEZx2fQiZdp8mknzYW8mJhb2a7BvpA9VKz3QDbikAQgu5jXZSzMSiz75EFhUettW7k6",
  "key11": "22YS9m5vT8ZgffEpE8TkYF2j3h4pYQMAN16HNzkQShXwiBg7gVCx3hsxHHBrqz2RjeuLY5HJE2Zwqb6rkqjbqdFF",
  "key12": "4cDCaF18aRdXb9h3BFvtAy8FV2LQyi8fiMq5ZYhQokpUHufjgHW3zJenmjXg9rZFv65epoF2DbGowG7J7L6jY8r7",
  "key13": "2LrvcfoaYBKdBwMUtkYy2QjBnmKsSEbJLrX54pfRhX9boTFbNGkaHi2DdwLAkEQYTu68hQqMPH6RSR9BPUky4zD8",
  "key14": "56Exx5CMjh1CMCBmN9enfPod5a3NU7Fi1E17ib7w5Fsp9yEVpc9kJ4LPNhA3tdpp6VS3qEk1299bDXcqA8rJaeqa",
  "key15": "5zVvCn2mD4zM8uVnoTfyGyfKDJCqqCnTGKQeMBiUVGBrijWJfhub1cUq9rBpG3ghJ5mUuwtFeaHugzqqziap6R1n",
  "key16": "545kPqHpKoLCHtdftydgGs5yT82ehfD8AkQrv7jbqEu9Mayh5YxqMDYK4niY22nBiTYWr2EMPcZVFK3BAyeF1wqo",
  "key17": "4XxF8MxTHGmwnsLxaLZhBxWKs8tridMgG1MeSRoCL65htjxQKU5DPiBR6Xwnt3QUVmRcUQMxnuJzhFy4mqaNokNa",
  "key18": "44x9ojGKd6oXUvDE9jtiJqDJsiGXaHpTsdAxxtaWPBn8tEpUbwtB8bGwWmGoC1ARCfKEHyYdsVd5duwLTKd7Yt9K",
  "key19": "43XkWLiGfEWJ3BBmFDcXdQ2pspNGrwTD3QHL54ExjyCHGLBuhTjKPQeiCfNkcun9FE4f8pECzyrDzcjwXsCiEGRu",
  "key20": "5XHFqanipa5Qjd77Vnb27jWJGhtgsYWj9vJmJpyUGVkv1KMpkCAq1hfXAYBpZWGm8ivjQXcgUTEKD7oYKUJHuwzS",
  "key21": "2GPHQHpBjhL9o7kwCbgZcaFJZKs2de8NYnVRVuR8FGvr1v6xcwK17Qte6dfNKwRfvKAU41CEMV3Up9GJEaTNZY2b",
  "key22": "5SZgD2GevQaPCgDQh29uQT9YdBoWtd4rsYqHAXUDPD2HvC1r5yZaaDM3hDo13tYeqaXFAXUGkgumhEPuuStWMpWh",
  "key23": "4bXQqhS9DP5RBN13YxtnK7jZmxrjnfpKGu6VsCnj2eaNJusfSBaMxPwpn3XRFEBy5DZsWECov1FmPyGbZ6a1QzL5",
  "key24": "5KNVDx3HpEFoncZhnbzkRjGMuoUk8QjtXPdgY7MRchVdcQDFdBBiAr318UCT1rsdBusDcvm86hUcziUGiW5zYnZG",
  "key25": "5Y8KU8wn2DY1PuCaPGVjoTmKDp65MHR5xYbqzpJazypTfXKSFvkUNhZqnAWhpPQcbufnbsS2pAPa6EXC528KqVGN",
  "key26": "2zZZZ8Z6qagpc652KxFY5tVqXamGG5TGFJV47gqVCP1HGjjAb5G4NDeLuTiixKCfnkcdRVaAG7kPEDuaD3U7Lpg",
  "key27": "2GvJc7Ge31GHAcHXSPt3BSbdohuKqq51jWJpNdX2K7v6uDhx2ixa1ak3ZjVCZWBTjDC786FxRn19pCrPTRTzjCou",
  "key28": "36PSh5aVgRUFnN564wWWVxtzm5J1YNskVfuNimN8dZeyvdZBpgx1ZQapM9mYt12JXnvXrjUFVogq8G6gxLfbtcQd",
  "key29": "4dcaezy1kmDbMXWsRXXHAXjbTNB3NoR8Y5acrLmTKJNXVippnxDcbSPC1xQWM9YUw7yL51uikwLVA4g2bmU7La1h",
  "key30": "2gwrkRCfpBcauKwSa7X8z3msUKsQtq7xagSLKoeEEsHMon6NSNTNJC9xp26AoJqBBMTSDMG5KK4f8R14z42vBgqC",
  "key31": "3Esau3L17EBWYU6gJj5WDE9viYNKoNLJ1oaHNGW9hnr1zVSqvdNutf3bfSjzd47aojpbZLH75kcfZikMv3ZiPeiq",
  "key32": "42QFcaKY1597KAutdhYtD7ByP2LoK2MsqSuzCDtGAnkmA6aFRisda5257ALcideRoknc6bVhz3nwjf2SG4W1yFjZ",
  "key33": "55o55VtEu8U4tdoNHjBLYN4xRcq7JjXtTitVKp56rz2Wg6GSjkzm4SCisWWqLtxxXRo8jzGdeKfFdgJKLpRLJFBc",
  "key34": "4ywSnss3Na77ozan9PpXSHsaR5DoQy4siTKhWrxxmKCEWm93DBRNAH6on8v86eC6BcZjpGZXkJL9N1yXEths27ia",
  "key35": "HbheWBkb2mb44bp23FG9g8YfPsHHM6bvnpmwVPAyoALJnXB3cEctXkSL7pGShKXkCbARW4919bHsabusYUqBppu",
  "key36": "4HGSzn49JGeMGvFaJ18JoJ2Z7bdrocVUjsrMu1JmGiiWxf9ut5GwxVJBcBm1kTwaeRnphPe43XiKurZ5Nx7cS2xu",
  "key37": "2d3pkuw6uft3rJNPCFrCMVQ2L71ZkMvHGzjTx61WwfB2E1PBv9gxYa11kHQDheWAoW6mjKS5dAC6xJkk8PeAeaBX",
  "key38": "27HjYRczGbD233RbNYKKta2j4nAM1AvrhdeQzqFWRCnrKYjP2Vxj8qDQCJkCNHdyJe4HaNbdyZgncxBgtLwum9yR",
  "key39": "JkiVSyWqWhYEta8wyUFSpJMkhGS59DPPNW2JUa9pYNDSX1uzhEgcSx7wWvo48sAQTEBLUDQs1aZmjYuepaPcGw9",
  "key40": "4AeCSdgUuDz3UMMtuDbFP6w85xketgGQojmbaK7X4nsw485oYWPoVYEqNfCDT4ErcP6acL7E2N1EueiGEvADLzvh",
  "key41": "3mbeneJfchEth9s921qbrbCpN1tPUy6nY4gVVQaz6SjmvModC3F4FULYghX3XZRYxV2r7uvLVDQkuspAdNTGpn1N",
  "key42": "2rNKqggV5LJ5HSFE4KmizCWhJoHsHmjyF9NgZaxkovk2UkJANj2m1g1eQzf6LUsQvUzucuTLXWHd7tBuAPuJwC21",
  "key43": "4s4zT5dMUKvraEDN8WuEEf1wgJrksHnMe6MWC9QFTupJvPn3Ad1M3rcXTZvqD98mFWexbkKFjLjRjksctDGCs9YH"
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
