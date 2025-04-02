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
    "64as4zuHtesFL9t4ew6jQ7nRDU8FxrN5JwSxizbK3ZiuthbzYhTkjbLrozRUnspaq5HWnpXCFu2Pcbjto1dDDnco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CozarWKf2TsVjWUchgKzVwPycHtaNUWnft6DkJAfAs4fqgRY8K71M9mettbtwTTh5vbRh1N2tzV7vHGAByzP4wk",
  "key1": "4xA1JDPhaS6sBDgiV9FH7nNkFqTu5s3JLkh88neAxFrZV9hJbV84Jp7isUqJP2KAjg5Ecgb22TE19MyA1yR4jJEE",
  "key2": "4xdmKQSRo24BUEyPZcQfCgHFFDUQhziaBSAgnP3WHVQnbhJibXkGoodjvKUmL9T3dUy9ydGbJXDPHaaK9vnjXdUq",
  "key3": "zHSYbFegDqVCqYXHhJD8AHRRpAPar9SPL7eqnVmW49JbnErhL1i19vtMnHwnqhVyMrLRZRYPHpHqBT2ZtuyCHgP",
  "key4": "9v7m2v3KMQRvPDBeVUt2BaWQqu1g75f1wj4jVYULGX5MW6SasE5x9e11Wnurkw89U3xKQe8qacBxvtBowbmqtJh",
  "key5": "oJGoqZ1JdpDAtYQySjaCoTr2XGGCscr9QT9oQzhSfhBBACERQGSZSwoSwAa7uNhLN4xZcYLFRRGVk4aCgD6koVw",
  "key6": "5m4dypDNqEmfSarMr2Pk8Uv2ebU9DQSNWnMF1AJYvanRkUbiTqsSpWs4aZtVfqXLRg7YWMH8eKC3ehRqVPnP6M3B",
  "key7": "7XeVRpHXjawYQSTKu9DbCGm8SEmNn7WdaCrr87oWkk154BXH2EQRefBgdTherxeiD8CzBQS9KxXCPTbZfE89eN3",
  "key8": "4NkTq4MB7vsXkaTTxAYJrhpQR79mdQHWgDPjiHFEPociso5EZVyuUw7cGARDFCnox4wDty3YUiZXYfJNb6h2iPZo",
  "key9": "4odnAezMLDjs1T4v4h1jPveUfz5Xm1NKoDbQ5ch4tAHwmyghzSAawsruBFBMcfR84BBSVw7QHHsDjQeccxChusX9",
  "key10": "4NwiSQiriNNkXtxcy3VKkBp2epT1gxVEyj7tn4pYyf2GrXJCgf4HSSWssn69VmZhpP4sL9eJoAtr4271CL1b3HLi",
  "key11": "5S5sEwnhkjMZmBXGSkosi9fcfb82bjoCidNykeCQKfrxwSRQHiaJnynfiFGELMGpGr6bfQD6aQaycH35XFp36FpH",
  "key12": "63Dn6HgnHERx53mPyTHoiCamLTB83Bd6wDsjhf8JqVf3E161Zf1WuqoaTryLU3mWdoDMZry9S6aXjnWEFrgTwRyM",
  "key13": "2mSzs1cpsUoNwQA4ZppDso25hRdbHcKHRVf3UxgJX2VdK9hASJYhLNGyW2hRuuWgEsKQ2pLbafYeanZdMVoKqcqX",
  "key14": "4D1cAb6gywbs6c9eyo8qeEkkhmrBWLofYeRmzavzNNKSf6A9Xq4wPFXFe8DTNhe1PWCdc8M1pyYfZKqsoAkCjHoZ",
  "key15": "5tDu9sLpnbT1fJjWp7HELMeoavGKaGDunDyQrrveyM7o5jYWL2XwJufHogtcP94YLLbwfkoAJCcdNvJvpTjBoCJC",
  "key16": "5ebVgqwrwrARgG9Wkpf3LiXjs4hNJQYNFo7pXE7YeLsktWG3W6wJwAsnxTyd3ggfkKN8thXeLC1pb4qrkiNtWMFM",
  "key17": "4RiE25QzgJ2dRZjvv4CNYjd8oZYt8qXHo5ySzRkQNpX9R29TFxdAAMvH2yiNjnzj4uurVYPXKYQVfQ2KKop8LHNA",
  "key18": "37T6atDM6ZAmDiYhNeq7aQ3iUDpsATB1cA8uSG6LdLBD31BTyjz7LvTDtqR2mE7Hp7cHPXsL6CNQpJFczFBdkq45",
  "key19": "57JbuMx5SXDijwtiio7NKgiu93Es6Gv4KpqGdjry6f9jHNMHBK8TwD41mYGbEqSHL3hhV5Dfvp6aZMJE13v2AQ8V",
  "key20": "PpDkKtprDQ1NPp8nVz65XNifMk8Wo5Q7TkU63UATNuCD4oe49Zrurfch6obNnTvmdNqnXh9fpnTfnYy28CuuWxU",
  "key21": "4XPoMD61nSfVqatfA8mgRaaPw2Pgxea9tTPG3JoxM37QrUPgaB2EE28DHq3HvdMp92dDih8pmpW2FTXN8zFpjyBA",
  "key22": "4CPXBGnMqhxqfMNtLwNDZ3LKGTaXQvVLVRqswrLDYv7uoYR7Sbp8jprnNUPduwFHy6edJNWEpC7f5eTUADJMCXK7",
  "key23": "JoMjCjZjFF61eXrAxsMng18JPHr3UxtG22ZafpLSxaV2nUum5mqfqA6SRv13rJJnXiNhBTQgLv7kRepLb1RodCf",
  "key24": "4k4EHi3PvbxpPwZA6VBpp5ydeQyAqiMdhSXSXY2Re49PSw24gsBKX8fMzBLftKrVd9QqAwTjCLdLjL2hoSvKQ6gv",
  "key25": "4TwvYx18VJqnEWFzJpLRXWdYRuwZhjtauTkH4WV91fhJNxfXboCGdVXxz4LR5Yr8zZory6HKdHGXtY2tVEdn6Kpw",
  "key26": "2g9wqH8CeRerE1LfnoZad5bosdHNwVNd2FUXYYjKddhRxAJNS5xwcZq5p8q6AUnac9ZxtFg4bsZJN7NMDVTL8tdz",
  "key27": "2mossPiA7LoDrbE1DSE4YTH6XCqj4CCSdMTWEpZ4y5povEdcyqBdFyZqVmcTS6k1SQ8kfVFcSXpiqxt8iuXto9YR",
  "key28": "5nURntuh81yTiGA4tTJaPGoaNRYJX5HLVXJn1KJYxyC4er9ubFYuM5NTrR8YA6GGoiQptjyggnFXwGRiUrmJgPx7",
  "key29": "32drj67CCm731CLZJH12QUeBLsNpMvCzykHbbhch75TpCSNNd9cr29RVkBJkjAmrvt2ffWLatyDKfMx2dSz4b9tG",
  "key30": "xUpnELV13iqf16EMy7h29wwZZxEXq4g9yDN7E8AWPRXir2obUuSdcyz3CGppxYuuURZT6XvTWLXTYpABSGRGxtF",
  "key31": "2S53A81RqPb4Hi8Z2CvvcoCLqRwbhFqNpo9ZA8iShrDvGcdAAjFuDHnLN9a4zxUxVgJtp4PtiLZF3XYzcoYRrrnQ",
  "key32": "5saEEEtkTdnsR7Pe5JieZsWsUWdPeCtzbczLGi6745i6MGqf4WWCT3mG5XyMuXjVxNKinMbnxyidixsMiFxeUAcn",
  "key33": "2fAaPGSGsRMrnkeKNLW9e81YEMgfCh39gZj3e4SxXeLanakaRCe9ZbbqDRWX2sWwLnVRR1wC7kUUBVNnBK1jQawQ",
  "key34": "918XoqBafU3mzxDquTUKFPeNTa73kVKP8XudiEaofQpc7DhbVipMz9XYLjusSWJ2gKnRQ6Y3HUZ1dKRmBYa7b3k",
  "key35": "2j3p5RC1qsgRm6GzJMuCBUU57mDbsBs749fBsFnVdSMsYv9SZCvBXdLXL5H1bvf5eNSWN8DHcpiyTKANy1MQLbr1",
  "key36": "5rWCpLkNFsPjD3hb7gC36tYrBKt7tYy5baAAa8HnggKgjzvLg8a8KNuSNiEqBtQkiiNK1URaCZUHXvYd67wDMpym",
  "key37": "4UM4BdE7q18UBr7jgPtgfBWshF8fzbvXfu1muVbStuMXh2ewBdiEG9mcBbfNbf5ZgZ4tRnaoyykEkoNGn9p7TtJr",
  "key38": "4eH8LZPqYmCzKG78JMd9WnbfP4B8eCHPQ5eoaGAWYLYfDZHjEUKRLmbo24Q6xS1aGVipqBMBGdLQT7R2U1Wv64zJ",
  "key39": "5q7oZppg1dHxooVbxKDydw5pcCRh8H67qQ1Fp9HWhtaqmPiKGjCpAvByzwyHprbPZDMvT3YwzFy2pBbcgugBqnyn",
  "key40": "3DHvUQAwf7RNTLC5RvMcTGi1Ud3nSexvuPML463kJebMZ7VVWLm8QVFup5nnCKTWMgKuKQnug7njSdAdsKiKzoNH",
  "key41": "5dLCbeXFtSWAMWNZ9FGutkTCj6iTv2giUfBqaYvusdsf46LDhpW9MHccLN1xdq9qn4g3BDwG2c4CRtqoMFUhns2x",
  "key42": "64AgQMhG1tceCCLhmKoBsQ7NS4CJtut2rmPDanWfY7XSyWgzNqQ7cCH5Eb7BF4gTQqg4Qr6KJcudMwV5jJGLP2Tw"
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
