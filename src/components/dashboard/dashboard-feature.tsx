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
    "8YKvJiRSvHEANRf4P6cHeu5iKz5Q2mmkEYakb4knvum57rTKak9MXmbi2wqsgn2Gtrd3edxtHoBKZ4yZyFFPUoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VdfBVPjVoz2nSehi3SoHbQSnGc7EGmkd3xo4aq7zc6Gq7AcLckrEohMGqBf7D1x1iUpqJ92LHPqPs1vBz1p3Qb8",
  "key1": "43QyNY2PgyFvgVAt6X4nmrMabXTXEmUQ6766sbBjptDMT1TzZwUb5Y4vexZpNCBarhJX9aQUuKZ22Vs97Zh9Ekoc",
  "key2": "3p2dEEs5o4Bak5nBgDGVced6wgMaDJTy9tpyeMTKDRrUaPNVhqbPWXQyXv9SqcSdQQKJB3iBZAkmhmZyvuBLuD19",
  "key3": "JcQxAkDTKK8RHfxQzCZzTTH58eXEbsfr1FBZ8QfiV6y6SoypDkvzH246bNLdU5QRUMfyH1BHfHVTscJDUqXw1LG",
  "key4": "R4qL1c28abBQTfBMKHivABPczw7jPkC1jbHbZ9ij9yCnpepPLVnkjwpheTFPN5wxrnmix9cgbSWbezqVN8B4pPA",
  "key5": "5HTnpaAC41MivFJ9vgzvEPXJRifGLXuk4YR8XxvsMyUEb2j9VpzThocAZcooqnLtSHNoJ55dQYKJgiMaoBUnCeWy",
  "key6": "29Sg9GUuL4VzSoENpEtmh2avSyJgCs3DFjX4zNqJv7sZv2KC3sWjp264ypvuSzadBGzQNjmKxgdKT6CNasB6v2B9",
  "key7": "5o5i1S8eMVdQSiBGwg3bCnPAdDFjjX4mmbJeVfXbiWJKFJQwPj4smhNmP9oHm3gQRWcb3yYnGcdxfz5Y9UC3mqsd",
  "key8": "3BucK5QGdvJrAnBDsHNiZJaq4tZdoWKmWEU1aKxVjsAwsehQdpvpnLd6bDFd6i1tSbKPmG5zSegkPvn3tX7rDsAN",
  "key9": "2AA4e6hirz9LvTfjAC2uGURQ9yPDAHu8iLbP4cHCcsJ48yyDNcYn2Yhmcww7VJKMY8p4yELZyJfWMFW2qxm5KndC",
  "key10": "5NaFNY2sVtbsR8rE3aKrZ1ZtZuxoGnypRJsRXY4KoGHH9g6gyCon8Y9cPL8Dfyz3uiVEy1mP41Y7rNskKAZiMxcG",
  "key11": "46RJuSczPFeZU3ggxxp8C6FxCAhT15KmXtmWFbxFtxSEooFDenQ2j6YE4tVDar91uyaqfYrDHACiS7sQMnVthQBz",
  "key12": "5NjHsFrQoXgy7WNzsmdCBGe7zTjBCwN5ZA3BAnaUH53AFWw966tcndUjj2EL9kdAKeKAnfVrcUDWeh5hjFA9PF4J",
  "key13": "3XjLMFPC3L1689xuM2Morxv9nxjBqXXd2cTkxxZy4m9dVfLjKrxTy3USnCN2dhMn22zMUJE3YzQZPSDhFzoH7cJv",
  "key14": "4FzFmdkTDCsYuoySc9ChVnvHdH4yHdyYWpKPWP7SuHwJXFeSLMQBC1yZg5iy67rkQ6sr7qKn5HMEobPG33z2Ug1T",
  "key15": "eNca2Wz6j8aNbTYthmn2crodXGfsHkRk1PpwX27Myxno2dho9QVE2rEYNDgb8mcqRHzHPHNpBTtJnAz6pdrmGhf",
  "key16": "4Fz5R5f1oozpif8LC1MR6UJuVZ9S4gQfjbmHaVoh8DNG61itF742q83jkiEBKCPyyAWtkWK2E2Ng1N2tQsyi8ct3",
  "key17": "4jHPA2Y2QB4DX8xVSfE5aEwncJndboPEdowXqfHRCGoN8TPNFc8AJ2bpicdRrdMg4sJoca1Xw5KZycneXWH4R7xg",
  "key18": "26x11tisQedwJWNwVVoh7SZNR9Sp69DQ2wGKVKgBk2JssuQHfQ6TXxkvHgdERWXBByfoAePzrUYeGAnw8nn8G2Ks",
  "key19": "56gfFJY5kZYx82npf7Rjk3cdA2QTKAJn1YDQNVsRXbHRcrr5aAbg8V4sDW9Giu8CwgqWqk36ct6NvvXzsJFLcWrp",
  "key20": "5KpWWYtmBtqBX8Xv7mMMgFF7rSZh39FuvVpGjT9HQV6VtC2mRwHzgrfMmrbsMYfDVo7aj5LVtonuNCELr9Sz6hWn",
  "key21": "ry3eAVVWdknscLC2RLUX1XX4DsnRubS75enRxDqtUHTnu3YC1Z65sy3RLMZfoLCNx5vc4RMryz3uhoBH52v8wU6",
  "key22": "45rx8mDYAAY7izWs7MxtHimniZ761dhYCNHKZuyLMxYSZrHjYLKDQ26sEiuZnspQY2WfanGaugLiEyTSEUNe5XVJ",
  "key23": "2SoyTHkoeoS2aQr8RxNDwXWNVNR8kWa1oFEwdcHBzArZw5nsQZDwikVzJw6HZsq69PM9BLo979kp2MQ92kkatkNA",
  "key24": "5nP8CqvfT5Yqj984SyLp1XozoJG4zq6CUC6LiNkTn7MDJQ8VgnuxwduTJsQgySWsazLsemLLzU1tdzurqYaY8kGx",
  "key25": "2aHsuDswKQynYStGamT2Cj48xQcr1rgWgzQwCingmzWtsNGvjq8TAAdcBnGCyKLhRT5Ccnw83CmpynKvNESuj4J4",
  "key26": "4CfLj5EiWo3AS2zWHgqrEFCXD3U5aSw6udNV4RyEsZ2v987z1dgcQAxFeWNEpvPTuCMdCqB8yfbmetftwGRLHn83",
  "key27": "2m62rFp6L5SfAzkPtidY4FVySZHrTbJeKwb3V8BonBMwfU6t9d1chp8PdpzGVTvYE6azL7hK7bp1srZZKevFzsJv",
  "key28": "5ftdQ8KuuE6vvvC667kvHMsnv7aXxGyjtwNy2RLms2bTuxfabo7Bi9hPtSeAAmzffhpT7Y8mwESKrEEqFVuQ6X6r"
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
