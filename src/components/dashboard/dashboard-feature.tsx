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
    "4mjW998DiBxJPnHN19TQzvTRSZumJ8FY5vekBxk4dDkPz8K4qrJVguZRrWjFvEeQzBMFN6Lp6CYnxD31Gq4cuMcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42JAGyUVXzMmXAR5KCmfu9vbcNftqaXLBHdas7gaRmZmiHM7HF7DRG9jPvLdxKRf5dWcAbg4w2pGDwAqdQ38T52v",
  "key1": "61wxhY5z14aAnRGB7XA4awH1Y99J5gLshvHCSiWnAXoFQUGysVSe3muLsJuPjY1MNHuDRs6QHugKGMUcN1v78Ey8",
  "key2": "8yB9EA3ynKEDt9BAdcqfrqE5MYvTGni1psJt4tc9ahdTZ2HdL8AtiPXvqbfd9oemi4sBvFkFzviVpVoAJEXqKXT",
  "key3": "3FfGCAdwaA9RkZhQJRW8o5CDZoRm789wqNnVUpjTH4UDiWBsfgn5kZMfg4WFL7yyV4twEjwDUcezWNE2vYmdi6KF",
  "key4": "4kqJEmFgwcFtCgjbahQ2FMASnSdEMi536No4bCiHDQKRz8DRjoZAs1FSLFx3QJFzrNn8uZqD2ianUv8WH1a4NxU7",
  "key5": "4pSpQFo8fgoQQ6Jnq8XAqKngwZesYvPdB4qSoN74i6m25unqKxKkZFMkwUfageymFmqQQrjvdP1XXLY8WjpeaHg6",
  "key6": "4DQDdwYUAhV4PisFkBDwX8V8Lx1kD2LxfsZ1fNHEDNmFP9ZXYJsjDzbeG3TPYRujcxmjt7KsGFmJxxbvYnTYuXum",
  "key7": "3XcRdD1kryFHhaN9cZdFmLbNJ9ZfP8qntDq1msWfAH3dcELWLXbtT8bvkxCRzRH8Gh2nTHeRFvnxGbwpxQUVtFg6",
  "key8": "2JbbCRSQQfp531g4Yq4KMi1zdLWP3DTGUUWrgYdZxs7xmrFFoqB9bgVtnYfbg62Wdxxzvt767QFFZkapATzg6mtu",
  "key9": "4rj8gxDcZfUgcrYUCS5EFpTBJW3jsvut6WfQTuGXPcGdfpyEXBZWruKm4anATQW5VJDj4fnwb6526sUJBHFmGwjw",
  "key10": "2YoJMQYBx5GyzYwmxYVdeBYwnhsiNvcPic994Rtq4wjrhqRLXFRHPYBzpXWJALTL7uW1f1DbBQF2yLCNDWFRzfdK",
  "key11": "3ATAWbPVgYx2sAuyWomV3dLj1XhEXirHNxNV9x5HmFNtnBH6BSTHPfQjvvRAiAJatdvvcv3eCGBWKmgteN6SakTi",
  "key12": "pHE1BkjSy1kppHejf26VA2btwjgmqdQAbBSGssUx6bA7YLCCyBRTjohJa9V5CHjuJRqPT4atwa2ZAsJdPcKjioo",
  "key13": "2ocXKHRHdQdke5DwyPkNHNabRJcATmLqT9a59DTPXeYqHM8Q3RGztERxXTyfA4NKB3CpCN6L4zSYjVLrDL8BXqwD",
  "key14": "5c5FyhdqYnhzLAdYYp27AvSK7cEjeBux1mHhj8yot596aRFgxTP5A7sTQiYioTok3p6kAcFmxJAv15TxQCbb5nr",
  "key15": "GZLasmEt1qZKDLvyTHvvNi5kDDRCV9G9tT92WkFxYf3zCRUSvh98G3s2n4CAQpA4gymYmFjJzLJsWX8TR7ZLYQ1",
  "key16": "bGTHtMG5kJEE9v9GQ7qPGLiiSfHmytuu4cYyEMgoPZQbuJGD5v8NUCrHnf8FPhjQzA8yvHNhPoFByjM25EpRbcn",
  "key17": "KkUDEm7GBtZT3YBo9DHMGeSzioUwXqA64MAXgm7EQvFmY9hFehsSJ9g3ihYj7wkhAFFFTAJB2CAqT17LkoZZCmo",
  "key18": "3NkhyvEBWj17CfdSxDksebZvj8nGYQXhbUAazMURmWik2vSKou5E5xygjhLGzsQAsRv8NfRhh5WcKuWetY9i9YKh",
  "key19": "3a9KpqWZD7Y1Rt5iJPMrAMji7xTPTzuY162wsmqrmYwtgevGJiyYsjSoWpcFnTkoZCx1XcNA8dGVq9xuNrAjExvz",
  "key20": "5uRHZWgQ1xfkSh8D5vJU3iZezNi3K9Fd7ccoKy4ATJgoJ1wUuYooJUn7xtLdiueYDKKmeWqwtwwtHFbjSc9jW9rq",
  "key21": "3mieDpKu9pw7GMAinuUeRz7U1ampZrK3AcW7SrrxMWtkDLdwdUS6ht254ct2kEV1LEjLMJi9bzvVNamTYvRn8WTV",
  "key22": "2PDs4g6UPF5HEvXJhgAVdJWjrDq9fa1g42xt8njX6n4CQ539qFC3fy8XPFGRb4hp2kJhUMkFCw9WnjqNMNrVQ8SP",
  "key23": "49ZFXH1SnvAE2MhLBsMkiuVSXH3m31MJuiRTAR9DiDBREYYSxrvJi4VfhqHRe9jCVkebsb6kzoJ9EXoTuhGduBTu",
  "key24": "3qoigoYS1mdAjgbv6nVhL88Fw6ZTuM7JuqqdtppTvVuvrmVL5UxmdwfKeZw4G97ZwZCyEm4jTxGvkWZvuhJ34dDy",
  "key25": "2tB5xyx9SN1weQZZrY2wU2hhMP54NRGTGQdj3RhiV1ji6dSAyr8jADUi7uGhoXKDCNf3Q6PNHsa8DDAZh7sakQEH",
  "key26": "5XV8QygeGN5uKTbzapudfgAJxjwRvveVGFj6FZNxig4UHHYm1xjrG1wrBfzz8CVAn8WfiTTRbntf3kY8o2uWZiiR",
  "key27": "4YNVqnTRD8z6w8jxDQxcwKvWHufEo59Zs3gnfoG1dywhdWZGfBMAnjNJZ8faBT3jLZHgED155Ca4burWTmWyGRhN",
  "key28": "4NJzv7fQnmtp8R3xoiPtUYJPKf7nuAhZJMKJahrSdpm8AD2f2XAWyVLk9y5uacFyhMK8Q547giWTCXco2a24rvpx",
  "key29": "4rCm6Q342dDznY1ZQ5VdQusdbbrHVkTzN3iJoU5gqCBMRC3NvQzgxNiVTNFnwScgGmxWShoQPrHAzh8Wk8UnRVwB",
  "key30": "34a1jsCkteuJBVQWnDrpmKDHAtCeFTVp48acsJ3D5U7azEphs2G7RRCyY7sAZMWFhfhKdtVDarMu148Mdj2zyY5C",
  "key31": "vkMnypr3QK72F1njgWw4peyNYipVgJgZbTX3SC2Ygwi4sU2Qt1kU8sqdwfmZf6pe6DrcYVMVuTsyPNFkRnGECU1",
  "key32": "5n4v3cCFQVsY9KTCx33RMCw6PbmXKwYDZkFPJBV3HxNdKpwD8QshfaidGWtGN41d97Yn1dGyUombeREHhLRXHNn5",
  "key33": "2ay7RDs7HyJcMoFG9ncHiooFM1WAY96XLQNnwPgLCdgZvcgp42Xb8z1sPmmrLcbtvnkjzmMwc8x26FR1SNNHAQ6P",
  "key34": "pxrFiTe2WrJZzZhekiHfD8Z3t3HjdhXE9qWnQnqXg5ydxrqPEqs1FFcBmKC3vwgvPejtn6tEiJ6Quf9teYv8cop",
  "key35": "3JQ9FykFA6X5xw8Jz2hMdfSkAxTjaGWqYtg8ZSbGaTDefFDoP8pRZeU8LhMBdpAosKYXXE2wakjYcLbMBfwXs5zw",
  "key36": "2h8hLCKCLuU32SeFBFFjZzNLJsPRn7NVveVPzHXMSBKjUmax3wHjWgBXWjiKW8tpo88zRYA7RhMWu2cc1ezJRYLz",
  "key37": "3PHYMzAFx1h1e5hW8oYZjWCdg4wPrzkw9fBNQ1mPUSjs9N8WjQWzuAGaojk6uiRhqsMJaAZmydaRhc17S31vhbue",
  "key38": "TwEyEhksNocwGdnoRogEy2GAgs8m2Tj5WfhenzcWwJegjfcbx5ebPYqBZHgbQhXX9zNASgPUaigG9khWTwMLC1B",
  "key39": "4TgfqGnLrgz37P6nZezfqMcSoJS99zL6JE67uqnA2DPT1ydpMKoaTCJieAVrEF4bmXNQvfm6KPzaFeBfBjbCWZuR",
  "key40": "2TasYQZrFQNyJDLWMt7qgBFd2djBhG3otH5XevAxX4kxVZuTDTrPyJ6QiDULJLKiWVUQEYUTgsowDCTFkEeMkcYc",
  "key41": "3SS6BeiueGKsxJes1zHq1JPJ2YoJ4XoYS1rQicX7SbZoPNdW8UJzbkCguuSmEhedoZB2y6Sk9Dk3m5xdMeyXnB9C",
  "key42": "3G9SX5hnUykLUWCFTQpt8YNMur6gj62guxTj1v1dSmXLPFCodUdBy3dDZqdvcGx4wW62yYAgodK1FxGcnV41huAQ",
  "key43": "8zVNB53FZHdZWsAB5jgDBJ2Jr8HccmigsQqwUjfhwAGvqQb2k53BGiGmtvTDNzQeg4UNsWb7jQu8GRRburTfFLp",
  "key44": "2iCiyvk1DDA9LFvSwfZS6M7ijhBtPqvRUTVBhM6uSDmc6eppgBwcwJAqUzbbEMg3y69dBCCscxSfrZa97Q3Sgnjh",
  "key45": "66nad6frhRxeCgM3tqUXcbjyg39kvJfBxGbP3MCxMgiMEiT5ekAmuPRBsdfhjFFXArxi2bFqJoSSsz9e1AD4Fakr",
  "key46": "26cgYwWTyDPz71npGBnfVo9BYABB9qwhfVqswTg34BAaYSfeN6Zb8SbZRBwNzzVcmU5bPymJxJzfqRSjD8wJQSrk",
  "key47": "65Zbvs7MeB9qzRfwV62xFWK2u5oELoFuP7XxfTn7TYPe6aBSkTALuyiWL3psQg5GxCfV7qTs3GC6GwqHTcLxdA1T",
  "key48": "3osr2HZzvS8V5NrD4HTdhGJqpHxk9Yyiqs517w4uCMGyweG89KdBddJQgzeXjRricbahjgYpqUASnfjch3pSieFQ"
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
