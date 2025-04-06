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
    "2xZzTdx4vcP6nvW2MEeL4ptffFvxi9s4Ut1wwswSP9VARgNcBMhRZcVVMR6acdbNkszH2UwRf8DSn7Ebt6Cb8R2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sLGfKLXEugtbZQfC2ekCutmFY174TKcDKQnSwD1gPX6yukBiPkKM5i6mfi4H95F9mrrHztVwX42vc9YNDcnbGow",
  "key1": "3M18tVL4BDry9gHszjkbVgncCiDB6gcUtt8sFmPQWEo5H6r75ZAUsvKQtnTt3eZ2oiyrhjheXZzYB2Y8cCpnDQuG",
  "key2": "63zyCLg8GhiYB9GRhiXYV8kVjwiyLigZfujLpGV5KZuBosZzMzjSFJPb7N3tMx2Hk1x5AQVLAP3Fk1AZLz3YwfF6",
  "key3": "5HMPjwAQtX3KTqAnAhMnpnoQnAPisSK7znYzgT5k88X5LDfyW3Ln9t3oa9ahbwsRUfLVTzUwWvw8JfycUCvepqN8",
  "key4": "ZpaVGhs4v9Znbe6wifgzrM2goS4eUZjxffKNAj8nouXGE9BUokGGGAeXsmopEyQx7kyTdX2KaL79xFFR1qY6Pmt",
  "key5": "2L8SsJrmVA7kB6GoG8pYMEiYLvpsLiDXrvc8UcM2DHrJ4Jy1HxP4RLpPHmX51WgB52uyi8NA8WEYMGMKV3qDwSnZ",
  "key6": "3fKapHT7Mwdopj8fNNLRzSjxNLG4xQxCm9zKzEdYHLNjXin7QFXSG4dyPPJAvaYqgL7wEKYQaGe1aE4E7VTMar2d",
  "key7": "y2jwHia6AgLc8nUaQnVV4cRFucURHfWLXpgxXdfpnGXAuxk8ZPzj4V5KqRMreAfzgwHhoWQEDXeunMCYC7DhfPb",
  "key8": "Eu8sHCBHZDrdRNFJKr9PZXuw3dTbS9pBxFapFgw2j8tHJCVEVtHV4APeSWjomgpqDV4gdiPyvzCkZCorLtR8zFE",
  "key9": "2s4EM8fuMgvmCwCqmBhsyZ2sCbuHj4VJEHMEPb3VDmakfnzd8Gf1n2CrpYDJfJVC7sqFoW6RkU6gADpG1QvRyQuY",
  "key10": "2pmfHSLMPVqpXjSZRJEHPe2Gq6i7b3Yx8okBEz37MJaL5cqchuPtKUxYAot4uU1uJuDUf9yL4esyyVGb21zQoSv9",
  "key11": "2sKwFYZQAzNUiAvYYQyZsqWcAudpMSMt8hvvjXkoPikGSm9ajUX1XFbx6UJJSP9Kprw9Ez4SS2oBPstP6WcTZ5f8",
  "key12": "xLPWKWRLv1dyyJpMS41vMsrpVmv2KBWLTaNbhznaC6ZiBrD1a7SbLjvfCioZfFfWg7Hu6aKfTpBws3ThfyMyQ3T",
  "key13": "evf9gfGuGQiBre9zUc3Tu4vJpAViHNZt5CHBfQQyCNdVE1zzjcGSH8xG9y9evtSvgSDuXjRDn5gPngZFEWw1u4Y",
  "key14": "4sUMCkz4e4oWvb41xLrJyA1kvHp13Y1qGc6bitC4ZKZ4jYvajw2PVhbMvnEsPHUot6XRjBxes32LQg2k4LHXiPFF",
  "key15": "5AjFcQGz9uT8N5J9ee3H2eGPXZQVFBHh2dC8rKG2Ud1wPBzCwUz774hhCcx7cAVW4gScee3G6U14pXGJN1nL5kxY",
  "key16": "yAkMFDU6MUsCtBQjhn1Le6yksqBrqZYt2NmTUCGZCUx4ejWRPTPcWZQ2e4agJK7f5Uujm6b75Xjca321ZY19ZLb",
  "key17": "54CKEECHP3gUtkK1wZBmTZiV5HehxXsLdYicB6QKPvzidy2GGTmBaS8AmPtRav3YoWi7o8ZNYEeBPojRVuuaM42X",
  "key18": "3fAsK8ViwS3ZY6yf4FAJqLKeVmaEBoeAsWdE8CDBqCXa1PLNETqYj9XB3cCxkfLrcasPqLhSeXXGCZGKRNvDW21f",
  "key19": "QFCRGALMTgkbbLpbVGCNaVnjffAdxXvET5crQF1mBwDgqeuggDJALA4TPerKUJwPdShM2NUrXCbwbmvpS8QQVW4",
  "key20": "28mwp1GshN1b4VA3ptecXSfYuCnsURHsZ91fFommtNcsh5S6VBdGQsfiyCpHTa2QBvhmnHkwJv4S22stS2StWK98",
  "key21": "5hUEs2qZ1xZKANFNDx5wfnroruE4EnPvkox2gyBCLbMX9HsMDTKSEwiJzw3XNuZ6SspUCH72a1FjptznTv3zrgcU",
  "key22": "47S7iJc7FnQJgCiX9jnzE2GEmAZkqCdXXv9nBZKRjQGDPqCtWufAzjKkC8kjeSBx3MNY2h91odzBJEUFMD1bbfmU",
  "key23": "5CndX55dmAVesewqC7xvg5cMfK8YyqULvLDxTQdmzS2wy7p5s3DAG4dDQzJFSWVf3JcGNrpdjeXuwfAJr669KnS4",
  "key24": "4vq9sQsBo933hrjBFQt4FvmcCozRtdXsNgnTdqymayMMvyd4N36o6osyXP1vbikASYXu6a3nhkthmm9g5xKBE7Xx",
  "key25": "2hKwpMhGWMpB6mccq5LPpWocwhsR4UyQYdEDDgw1gAnGEZ25FSS6qGMfeU6jNSq5g5XK7vQbUiCH4HVrBSW56VLu",
  "key26": "3eTFZYbBtjgWZ8qc6TAKkYgXayuqWsnACVcFp8Xt6UoAfBAKZdR8574xnywhW1Dnta3P64w5kkU8pvMc3bEj1nwu",
  "key27": "5nhZ2gkvYCkH93nLPZ5g4pA2EStfDakYPasQLshU4mNrRHT1G91CVhhy1GGeLfi8rAB7hyBpz9codeGLSqvC8NMj",
  "key28": "2TfJ9TMRUnsZHmiae81iDQSDefjqerGZ9NgY4aDokkiQmsgR9qRFnRLLEkuAGHv6RGehTvCEKjGSZ3uujB4HDhrh",
  "key29": "499N28pTT2nUsFzC7bHoQP4ZRA18UZSS7rvcBYezTtsAUKMaJhe2bfvwSSAh39qqTH6vBoE6GbJyD7tJa6nrYDnU",
  "key30": "3mgkyyEjs6KJ8FAJ6BU5UcbHWsAeL5tF5dRBE57jUvkXmHduRQpBx4VqsnW2pXkfCoXLQitBg2dc96GWpTfNkNzw",
  "key31": "5ysavrT4DyNva3Y4bi4npDuhfa5vwfXTNy36ELujTHyRYQBTCCCKJerQgvogqfhEX1HSZ4qFeB73XBu8fxAtKuNj",
  "key32": "3nKi94P4jzTX3hp891vzEzbepw5sS5fQGJSgfcJSLwKMB8a1fXg9ZjrSBuNiFA8L62KB6PU6yFE5z8t9YCwaZs2d",
  "key33": "3QuXCVUkK6qDW23AqRKkE53sAf4GZfvU6XrmjArQDi41PQq1tLV4sAbsqhojN4Z1toRmCK9LxWAsTDeX6Kqd5RJG",
  "key34": "1rdyjMyzR4hJYCtScdhbxPRpxpSYsDWMBZpbATHtx2pdJxcP7WQCQfsa6fA9hgHDiv7oUxq7i6SW4RXxsbVuSmY",
  "key35": "3Q8csq4hJt4J2beLfMmbBDGVQwAUXnqGdaiJ8u7LoZgd8XXK3iRYMpzR7T36LH1UigUL68jqnNaYBgM39USCkbqU",
  "key36": "2LVZJ3MEDre8N5KP746jbhMCpQZDwecYD7AdATDqc2NaH325GNJcJFsP8Sp3gVtkL2HtsCyAqpRVRoctSyNPqDAZ",
  "key37": "3kzpK28BbnQFdrHaBd2JrXqLJbrB3UCHTzjHNixwdW7ooisxv2tA91VLbt2XjvMdPB3DtibY3CtP734s8CvyQkVe",
  "key38": "4HwZLW3WftsdySEvXUxCSbbFoNdwf1UavT3xrtjBxDyFpq4n8chFbs2nkjVDUbkULLCZugkCzek17yjopazBkGwq",
  "key39": "3wthpBcHTmxU8ZaVYtBMF8HMBtQXjc7vvZbCXjhwg51equDgcxSHoWucTR3S5X5QHfskni55w5gBas94AfzADFQj",
  "key40": "JQwxBJEhaMaSsR6obTv9BbBgBwejkjex2hEqULW4hBGwsPXdjogbXanhbL92ueXXFvJs7JKnjc7fkRhJzoRfQSW",
  "key41": "5skYk7XBJizvyfEwXzvCB3S4sKb7TanJtB6WNpoMYtdYSW3GtX7kkYYfyZkqYYzcTjKGR7xp1jPochtNd1dBGYUM",
  "key42": "4C4GaHPpJn3EFbFhz72fWrXn52CDWMZ4kqGaiX9Ufe5JEFe1nisfQZiFzFyrHWLj3tt4HgXK7ok4wDieZXq4Vqvk",
  "key43": "5qgvyd36mBARQY4FEwaemdaVQBKgMYHZbSbDQnXRksY7wxmFuB4ietZ6q4Joz1Jsq6cbcuRTcFMfJ6unQFVuX1K2"
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
