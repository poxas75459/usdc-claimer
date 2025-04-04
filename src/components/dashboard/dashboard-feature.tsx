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
    "d3Wo5cxjz1NB2DqFTmpaTegfyVMzoeJnZBFrkyvCjsa5dcek4iLJi7Xih9qyf5J5v5aqwuhQuJZxFkzGWGpUVMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WCMLJUQHDtCNW1Gv2peXCDE9wJum2GbJCAtnfsCQYkFSUuvHnisBi3b9tS9S1ULh3ehbuvgFYLH7UzeVBT42Prx",
  "key1": "5Bp9o21RuzUkwKkUdTf8VRJgnDJAyJBQj8wE2L3H4CrQnFY5TAvAwzqoAXebKXMDBjHPvB3qHwjMVsxqUdiqXTLf",
  "key2": "3rCRXbRZmUU1z8iDtusgEVmW3RSKZSVzFDkaqJBJoV7Xee6f2NL2jH9BJAvyfiPrKuSMWJ7jAAeauEcw2QqxGiJE",
  "key3": "4WFm7b7YmXXGiJDdmcQmxSNRuTpxYyG12u8RvMosBZLvBAdvyvXLcdvX6PkzzCzXtD3p81WkYE3UMPE6L9UuowM1",
  "key4": "5FC35fMx9rMsaXkvvZE9BJJxdyHpDUYybGkfduQWad9yaKQCkVdJAvUPJgtbMaR5hHqGoxfmXyJHvMxjzAZinoQ",
  "key5": "247c8ovhVEjWRMc995WXVgZ5J1qgb9zyK9szGaAstXtMqYV6YpxhruQ9zRs1GQDdtL7ogBRK8gNmqS5qWFRLDj1Y",
  "key6": "4osR6ww1pBQL7KZFo4TDPApUwcBJygNep1h9n7dK4B3xfsccL4FdsBPaEAs88N6H1Rf96VKkaLY5ETKR1a9xZAUt",
  "key7": "5hMMisNtdTXpChKVoDRXbb3CWjLsY6KwtsVBx4xPuyrbQ75Q8WhNbAEMCiQRQaKpLsk3TNN2CD4gG2bFQFC99zZS",
  "key8": "24tqm5zDmvuVnDUy54iABh6Qza83bwVV5JmzzKG6VLuqZpqXHe5vmc4JwxEcHus21TXP7TGWqJfndGSM8zhonAdr",
  "key9": "5j1vVRnZwJ7YpjoQQdmxQ2XaTUPNU9JNYcMUMYM3q3PZ2fqnqE8B54kzxYA36Eq121MNXGQ5YwsUQ5J4dyVnGQ3w",
  "key10": "2aYQmEYDtd4CUyXUJtLoyd3S2YnvR5x6LcpFcoerPbwNKAGAVcE4fn5FJA1gbH8CRfkYgQHVsw8KWLApFpz1fuJK",
  "key11": "aTQqAqz2KdR1XjLkMRCmRminAeuVn1FAqp7xhqYMt2YaJiNqPhWf58ZGZLLq5tiKpibA9tLPDB2PfHnguxXwoia",
  "key12": "2Jf4fqJmZxRrt31AMHjMDDrzAV2nLPx1vXeGxiz6sqSmWWrbCXvc6PeK2YVuAdu2A87mp5vZMj4X6SetdYa1p5JY",
  "key13": "VKFSYiiN36pJ9Cso8dzVewXZZjWRtaLcQhmWj2szAAtoxesuqD2eVaTCEFT6ADL4gagNdRc8fmsFRtHQZVWMYkX",
  "key14": "5AL63Y5GDQ3zTjGUKMPzLHi1YE2PGL3BdRCoBvShVVG4LgpfAevZBkTNnMykc27hn8kX3fJZ9CRmEQ2jgiCQ1rEV",
  "key15": "2FN3dMuAMSn1zUMJwAyULFBsfVagMKf1HqowXNncUHZgmsqMKvP1y51uw4LupNCm5mLrfDhRWXbr4MBMnYcAVmms",
  "key16": "6tbCRWbop6Vf268pAnob1yBR72g7fcnvQfRHH4nJ4rwDNDo5iyQdJ3nne5mA6nF72sSNqVGYHQEC5m94P7v5ZDL",
  "key17": "317Yv5DjWMrFMs6cN75Ckh1MgdqgraGuAWbcNs6sShXx2btMD9qyci4zrwVRRYiwCGwgfxtvGH5SZbBZy6B9VocD",
  "key18": "zStvLTdaesiZqR8C6wc9cBYygq9bbEvyE4ESAANF9qbY2wW831xbAHXRKcngsdYExFYwErnrKLxUnikX1JKd83Y",
  "key19": "8AnmyJJpGGN4a3z9y8spnmhktjspXGgCB2Jqo8DUNsQszUpDjfDZi1YMQwrusaAquKrXYJ7zeP17jK3hvoXt1Fo",
  "key20": "2V6fJM5LH32iU6vVpunuGsSBuvAao8CR9F2fG1UXQcnw8kLHH4UFcjCNNSqcRyYR4p5onWE626SvisqDDPCSi6AR",
  "key21": "3GC8saa5nZAgRhCfQPqRgfa49ZtSk2qDCYKNdVFiEyUqa63GKcZMWaTZKcSAM9rosQm2cF5tKbrEMQRxFmjTH1sV",
  "key22": "2yqo7qt3sqBrwoYYdJJ4p8zQrZJSXUgev6s8cK52DuxRWT71wffxct9H9QYg4jQgmM47LxCPmr1CVHS6EyNWcuKG",
  "key23": "2aM4Kh4Y8C7jEm2JhuNCXkpQTAEoyXaaWzHLmw9fgCJXGSN3QTRbADy3H5sAhqLocq5zdhe3tTTGwy8VgX9M1UHt",
  "key24": "5GbXKDVFvbn692pG6KuQ5D2iYrhpPT5GzACMcgVwG1jxpxsN2ZyBvVWiDkSUnNQ5g4PcKf2FX2WxirwkSB47oZU3",
  "key25": "4dGRzA2RFijDRb4R6peK8PZ6WVhoyh8CYoqbQ1SH6XumYbRmD87b758FXEMHjEPRJSwa7aELVKsYSr6mRCsUcKoE",
  "key26": "2zzB3JS9wKTJbsLxjryUsVinEf5LsPmZrPkERBpy3zyBraCtxSufZVF2rz64GrgcPq89yjUEKmxCGVZ7ZwL9vfeR",
  "key27": "5USvLN2PM2FJygg89NKDeQb9KbBYzqkUduwHEHDzUrCBc2mkYgx18wLMwTGYFhXjqjBnJzcB29hnixnbYsCtQRQp",
  "key28": "iFshbqY5iJpupp9Rt9zFgPCcxmbuvd8eM8yeZosK9fMD7LH2c6MWVmdS2438z2jSCrhDbcJdG67W4H8CnhRWDhe",
  "key29": "iXSVDYhkaN2y7P2HnmaXMm7cm7ofMcLNw82LRdeL6KsjXsRbPuNd9u1s5HXVpxZMxZKPfoTEFCrWghW6QYJRbFb",
  "key30": "45j9UAMWqaAqSyFp2jZ7GpFV6HmcpF83gNUNuuiXyc8BY4KxLnSNVXxt1Sd5Ebynmyz9ptfJ5EJsCDG4mqDebFwH",
  "key31": "2XgUcnEDwoocrQCth9Hjhxo2jYe3KagSxLuzpSbAXpb1v5yoGNfi6LXL6Y6y4bR76711nEU73ySLrCYK6SFo41MA",
  "key32": "5wBBUqqJu9Q9AxHrwThR9oSrZ9DWiQoN3PZ5xJpteiNb2RovTFwfpmaCVT9LbZhhxFAyqnMVhMJeZ7YvX6seTxZZ",
  "key33": "2isFYJffP3sHDetSo7ZYKMbYU5mvrCjWu9NuZqMZt9yD5werT4Jet1nG4N9oAVHeXSTwmgG8tvknBKkxkawM4sw9",
  "key34": "cBEDpnx21kEsxGpjG1hND5A4Be5qwfzs7YztxkY6bPCVidsUy4nKmSsX9gzMJKhRJfzCgrj54iCCDVr5yxymgG9",
  "key35": "2z1PR9ca77Bg8Mw68psXw43equTrVrjj3Uhbx8dagedSmokvCWVpwb4fR9oPv3B55HgvBithNXhASPudr3Qadv9w",
  "key36": "4s8qyWE18maqgyWANXX9i6VCWkzuMfRBWVnUQqvmRhtKjXopDkViNrEnn1arFcViHRkRCUND5xwHiXnVmTorsugT",
  "key37": "5KhGvTV5wHWjJLSfgTKvECMNcJXz6ekD7o8vWxnrcQ6uYetU13ckp5j1zFdeDjgWWBQRAXvVcHajd3Mu67Dy4969",
  "key38": "3TKNXvvC53q3Q2NHRmJrpehn3irSDk1EWuhro9B76m9B5nkonyd9yCeJiAaWc3WNuTE2xMfK6vkCYCCdqpk9U5zt",
  "key39": "5fg4u6zD3pk1nVzNthio2VrEWxMCEWUmAC8nUbQuZcKqohk6tdWoj2WC5MZ6FgYizJkrqtUWEN8yu4XH3ujjjpWv",
  "key40": "4g1Hm5VvN2vgZpvNrKyCpR5Y4nRweudh75a8TWw8f1NehdZ6Z3VxWcnA8MosaNRXRkPFAdyrY5ZPANaNtowkU57Z",
  "key41": "bHsFMhdF3KvMzUGXjije8Sw3F4b6gnGti3ZayCUfSL2pxBdJWuaMjofWvSpYeDMsYGvD1ngttHGdfiPuaYohYEe",
  "key42": "iTDfQG9uENKQtM9KxUpmiFk7fc5vL3TiNWggojxUxCJnnL22eCy3GtMkB8DoizhapnycKmjLe5CoRcJ4nUhbwde",
  "key43": "4xQy53RhNbDqspJJs1xBUdrFbnoMYrfWJJQoL4UkvzGmtYCoJajNWA1ZjXkeNWWzY1aVePo93JkPxheQNLiasJ69",
  "key44": "5KUMvQ4YxU5yPJwGtdZAJAmQ4p7PJubNdgA78RgfKLqGAYaAfGbp6xnskPR7UsJmL65e5jb8LRwi2xFpi85xDd3p",
  "key45": "2iaywBWLsZXLXWM6F1vkCXm3GG4TypqTXYBhBan4wwSKUGx7g5EepKJLYhX5mVyJ5Y9kWB3m1UgNB22Nbw9VBQyi",
  "key46": "42YVaYkkgXCWLm9wDqYHVk8F1BTUD6BCJQwEjGM9DxGrF2r4WrN9cpR4Q7zh9YSndYNvmSDETkWNr1t47uh6YxC1"
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
