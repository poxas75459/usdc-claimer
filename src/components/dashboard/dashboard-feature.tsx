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
    "3rsCF8F2gJBCx1UUoo114uJ6MFJCrCJhKoo1rqyKjgwg79paGf7ZjZEYyfYAmZ6FcXiYKyMYHY61LCr2pKkft3pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "451FQrkmNupiAR98YH8g5UfibL8CxD9X3Jz8w3dtrt81o5oezToEuzLSwURkTdauFdm6Yc155kZYhCnNChQURM5J",
  "key1": "SD41ZZ96EXE93jfGrTqeDDJeXzwM7K2zR1yN7RNaLsAhXuCsTnuid2Xuregj9KBZkQw89wwkkKXovvCssZKBUc5",
  "key2": "2WiGkWc74mwGTKKz8yKut3NV83M6vrdffkn4vnaqGpxcf4ui6zepdErRAsT7uSNLDqhbSpygB9NTwRSoJAjwU1s1",
  "key3": "2XzzYSBtpzefDWEz7B9nMxhu2FkVjC2R7saeQPnJ4hybCTchcdBy5Tf8oZzJNEDWCb5Hw4pUteYAGqUSPL6g41qc",
  "key4": "3U8voepnD188SXewkmgEJBjVPQVuJPX1AbCGXiAEWPvGnjMJP8MWQDAW8ap8L6ELaHKLXAXVddHb2iFHBptTbzpU",
  "key5": "24g58uXsBZMgPi6VpD1VqhF7Hi9DQECgE3tEgKM7LApgYAsDmFw1nrw6nxWYfLuBVjdxTWffjxcNvS1eU7gTmnhY",
  "key6": "esSKJuhLiy587D1Wws3iybp4j1oUXTUkvvjrB2FmUULRn35MkdhB94mcX8WEYumsAaUcLayDVtuMS78xMDa74E7",
  "key7": "2guvsQEzsdKXAWod7ozkQyXDn7pvFGVjGrcwaYu8sPAPX6d6wmJhygQctrLvfDMsPgKz9ZyUKJt49K9swATzyVo6",
  "key8": "5dqoLC8p7e9N7mnt3jgkkEWhh9qVj7x6Xh85vLu2rb248iAMEgfmr2r2Hs1nx161sc88NNr2t7LtBF4kRejdYdw9",
  "key9": "BmGr7TCFmDu3HzAWsiJgS9jgEEt57EeYcTEyK9JEvT42M4w85sAKoCfyGFqMjDEoMsqUUDLxfgVRRxYBEUmFuyP",
  "key10": "soHkLg4JMSf3bfqKPd3vNv7nyJXyQfttvyyg8JZy7BhWzPCkM6KWUPEF88QKat71ptooA8qPfcevcMohSjzYVsy",
  "key11": "5BTn1Fief6jjNDHTzXUEEmay6oYUVcBXm4VNYBdK37PoVz1TPFzQcJFVGXgeo4isQjL1pXisZmqZrmWoZgX6Pytw",
  "key12": "5gDcnFMDC46G628x8j3qzePKqzMHWEX956MpCXtohaAUtsLKvoh68mVkyU8rY2jLs4dma1Qwy9AjUb14VdrT92Sv",
  "key13": "5iqcw3T5iZ1wWv2MZVF3hLxtk2coDiHaudeKFBNSiy3aQxYW8aM5btjbcjKhEnZq33zaQTpn5yth75B9kZngQyvh",
  "key14": "4FxPjYryFJZPrK1pMwe7iJMpzZBr5ddsbxKzctduyT1WHLoDvPmBAAs3BAPB6SHqzJLQ59TRZfjXZSxucx9MsBsq",
  "key15": "LETjmo8zgZhbnJ3FgCc5rEQwPEfyMGfSbdi4oLhZpJe24FheBRTfouQBLh55o4eknYMJH5SNJp5d8N3Fzw6DwCm",
  "key16": "2YyNBgYBQ1v23Prkyc7PoFkFb1E7AwU4d76XAPtBhLcncLwwNzsvKSuyerDwonAwBusunJp1zXavarA1E8atQXkR",
  "key17": "e26Ch3oRLUZfAUF5yShWeHT4ZMPL9yh1jVnMmjVv1GkwGuGwDTkFioXJNAoAYNSoMb6FAmpcwKDRAkBjAyLnzC1",
  "key18": "64mLPGJVUkK8ssUJk2ctAw3fbRKr8iaU8SpvMfiK2W5D7V5X3tAb4EisCrBnL1E743nHBshZBi3ukytohLgu7iY1",
  "key19": "5Xgbo1B2YB57xzJEWM4UruGYVZHw2F8kJ8Zmht11hP56YvsNdB8BD4ByxcoFTwcyr1gGyUbqYnKrhtoYNyvNGT7m",
  "key20": "2bejd1ZjdLgbtp9VK1wuMgTnTX9Swx2qCGZit2kVrH3wWgz4DGdgJS7f3QgjDa1XnhTTjxJkuZ6hy7U2wXJwAZcT",
  "key21": "51zA5asorKeUAYCuMnhsUshnAc7qbS1WDvoraxVRtkNYy7rGajxUxn1jk81PSTSiRmRQngaqb91ogP6Q9RC46PFm",
  "key22": "5kijReAn7pBKty97GKpGRQXzMMqMJVV2hJuuN5Hqka3awXYf2PGKdSrBfR6f3pu1sVhuqAG3wWTrTR87wKgPrfVM",
  "key23": "2Ba9a3Hd1rjgoygrqVG88hJgc8p5EyHNzT6LaXHR4w9cbCQ6PfWoQhrtsGb3W4oDwhKTQM7WEmb3eWrUJ1wuJx1f",
  "key24": "4swquhKHxoSFnKZLuQstCuiLqwo7B3GGTZ8ggRzhsRyMwggb5P6KYQaBXCrp4e5o53fHH3bVDayZiYVJTrrBhPxn",
  "key25": "4LFLBnGLP6bf1NA7j4tHwZVL3wUzt2htRXYWZPFrmGPw2Ly3cLNMpFDA6UMSULHX9fyriN1f8R4ge2ADaVV1RAr",
  "key26": "32Md55eKz98DzSAUmTvwS2yrMJZqoEoddviLRvRU4t7dDpUzXygvKccWTSXMY2ZGYQwpFYM75mepP7ukT9KgZ991",
  "key27": "3EMpFVqXDuXM9kFtrvvNJoDgKs3dAGh9PqLUTdDJEJGCytfoGQZHDeBx2hVTZjRCmpPPzSjCTfD7x8x2pFQ1ThbL",
  "key28": "3NpkwmF8CSBv2XsQ8jQfEcBJSF9bW3GHXky3QbZmu86BKebH7f4KqEgoqJyqnhFWqirfdjs799fLywGhKj7YYohp",
  "key29": "2MpkcwaKiSUN7gx1Ymcp2cFL77mE1dph7R5FUmsFvhtFgoPw4NDaxjNJ6C9B1uGHMTadtHsjG8FzeWY85zGxP4n4",
  "key30": "KYzHWcmjRtTEkFguRbw95Rc7r2Wr6nyQeFkQ7rpyYXU9gfKZA48fga7Emub1pk2csWCPG7CBY3Nxuf7zyDJFADJ",
  "key31": "gU92xxxEPoCA31H2rpZJjsrjdL97sPGi7TTDY1CKZLEho8nxiafjszS1P5nbrZBFLz3Lv6AQNdBBRnPv9D7tMCc",
  "key32": "67AqFduUaRU4cm2WuodDvbrdNQQrzfpZA3Ut1Z8Tgs7sjgE43yhFwuvqsMJF9iHwy9X7xNv3WUhSgxjNLwtUQm13",
  "key33": "23oYbxg97BKBmAB85i3QZaFv8fLC3aKupurE5bJhNPnKD7vVf76fXmrghPX1Km5DNV9LGn6A96RL7cjbWsEoeBV6",
  "key34": "3z2KNJsAMeaagxGbRCRETciDnCfRiLW4GJsUhLwLGABRPRG6ahqpUboZTBgaftiC3KPERyjxb5UjZxf6vtmasUSS",
  "key35": "5svBKrymZZiXDgfRFdnnXy88gf7AyQNLMHUVc1RaKaG65RLRSvzWgrc1mpPCitEZueg3UKX7Lri7ba2wN5uhDuPz",
  "key36": "4CY3dqR24fouLGSj5NMdhewhefYu61Gh4as6VCL13zubjVhzz2rRWXYAp5zTGzD78wbP3bA1hvmo6Z2wZbrPshqN",
  "key37": "fE8gj3TTN4HKFa5jnCkbvgHJzBfrq5aqgmJbPimUXAytcTftzs2FzZUZnw7bWRrvkTGtVMPEvm5MWEKiDRmYNdP",
  "key38": "36sVyzdAWf9ntHPBpF611ttkVWhEEa5kthnUaBX3wntoXogQWvW7o4jbptJzF7z7tZ7hi3wg9yDEVwtFGENhysZP",
  "key39": "5G9sMPvfXuWWTVaGdjnig7Gd3XjiZUwGRBDVNxNaMwVz7paFUwXuJZEqNU7NoP7bfPNRfeEX4ERgMiy2jHSHYwGE",
  "key40": "3QAeN34dbb9oGiw6R15hUMtHMMEMxmuHPhBnYTEz3AbRF5NkVPFbMcFEqMXqE433H2PuxuqcjERSrpA53vboLRTq",
  "key41": "41kKc7GxPhXngznusBGXd6speoL8eRBa43hFu7JJb6gDeAvLgSXayMt16XdY31nFbrZ8yiGbP6ZQTbg4LBGqBGu9",
  "key42": "2oS8FNj65oLKcFaaz7gLSyxuD2Ue1jBrVUdo7wx6DtLfMEF9qULQsWasncQx5CvuPt8DEqHQ4mMECj2ZvhKc88jL",
  "key43": "45tJrjrdu8WbKUaY3MVnXpTeaoYbUYzgBxz75hiJt2gJy6ApZNxRgsvxXekhJA7VUJCdVcYQCfPjRFb2xBRTCBeU",
  "key44": "4kaQGLXqXH19ireboePjTzGpZ8JDrzoB6BmTSv5jRqkiyPB9yybs3yApZMEoPKyLJshFXGxT63rTzUwtVRDGpx1U",
  "key45": "2ugxaJKjEmNL5EdhiNqhoGFuS15dpPdr62Te3RChhNBNZFZoXph9gUwxArqi261oAETkJfsh7YoC1VvA6Lbbb4p2"
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
