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
    "5jkkd7WLAo3KFw7xujJGRbmzMKNJSea4bRn1uW9ynmvXdhKLVBrVYR7Krv4qPcNFG7zfQZdyJT5nXBGdjzvTZiQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "njKrqwNSpyUNKnR3GHPkimqScAeZ23yXYDJRpY4tW6iyFQJaLGYtbxWVLmk7rwvyHRSnd57q1FhUgrFpSea5CfN",
  "key1": "5QJdbGG2GTTFqj3yuU8HuNgwfnzwBBNHaLsoNi5aBSkF8Th8hmXyMJxRnLwzcJziW2Q3xpRpf4vone6UBxiuwRhm",
  "key2": "2yjZpU9TXedbwypwok46CWxY3XXrtacema3ambmHMBg1iD3eeavYnXqJeVhmagfNrPR6WZxtoE1VVLvf4RtD5jSV",
  "key3": "3RgEbK5ZwqPKBPKScZHMPnWLUPx1hdSnwg19pHsfB3mA1PWJGabHgarpdwGhDim5Qg6EvwnKwBrZyUC9cqHGTzqT",
  "key4": "39rHGsx6VoyALFASHnsCrmAKwRQ8sQYzNrQZFBJTQk4ken8U1f8Nc8tvL9beMM3S7Pbk7qKotDynaPZKeJBQxPt7",
  "key5": "5v3ri4M6fDXmZyHPEgeMPVC2pMLUU5ThCqbWgtJwfPKeGqnnajXnYjXBEPuxDCmDPNJKNQmEgH4BW7poyQxDQeeZ",
  "key6": "5WQAG5mK4mpiZuTyigNTAeXAJuYsykYEwZgAxMKnPfNMtccRcRoknusfLco5ZEnwTo3HmAfPC3zEXJh7MqYYGF9Q",
  "key7": "5BBovtttM987yviRpRAfLxB3QPWb6Z3uAdD6Yq8a16gpBK1PJPnUPJGcrEbGFhpdvb3LZ5267FJhbuwkZWnBsGXW",
  "key8": "4DHtbkWmRWsBzzE3S7v8AVVhNhgtiAcHa2MC4vuGZrQLFRcu7Uda7qsCR5Br9UT5vC5jWxyZcG6c5E1LpS1Hevub",
  "key9": "3KtDG8mdoJczw3xNmcjfXm4v6LC592VJZmBwtZPVEHiNbCi4T4qcXAQXTPoxaVAXqbrPzcvRp4Lcy2QZUDEpk5u2",
  "key10": "5nAbV8jCQa2cyzTaDTUdmdqHqwxSTmnG6EWPDJKz7drRtZReT2gWkpqBWWDYJ3todivswhuPowGfNC41CcTmu6sM",
  "key11": "45b31san7Aeo5igH1BepwrsKUed2PRAoNT6NXPb31fspRhEk9Krt6KQ96uTY2Kreyv65ukqyUnkKEGMVDTjHNgGt",
  "key12": "ru3S8CRiU7AcwKzRRzPRwuJCmQyzFNj8RTe3jebSfHFgdLQy4dL1v3UPiycZvh2D8Hsg8Uz7okFiceudjpNRBL1",
  "key13": "5bMSnkHje8EhuEkGnfscXoQkXfE9QCmrPvuLbCsPcyzeGYMskeD2AweS7U6Wwodx9iyECusdj5XbLNMvUiocQLRe",
  "key14": "5JEdQWBPjgpVw34AoMWbAccDCBXZdyoJSBiCu4Vh5yfJadKYAEGJ21sGXhLUTJCQyWefCZ4HuB4vFKqobtmnTb49",
  "key15": "5JjWv1doogeuweTET54hBzrnLr7b2voTWLjeg1Az3gk2k5dhsx8w75R5xMj8bvsHXYH15YVC3sSmVTuhpRBr8ysF",
  "key16": "2oaHaYu52s2wBTUoE2PyPaKVd3dJ211PzvT4zFjPjR5yoMdvtWTnTmPBXpz4UXrFy3gbLpjANNadqAQcjrk9vT4r",
  "key17": "5rrXnXTChqZ5hpPBJbk7Q8q1kQ8PaYgKZA9CZzCaPThbijtHPvPnFyYFAKZmyHmQ38pi473DaSisJzpURV4rqDRu",
  "key18": "61CWs9Pvbk38E1tUjXceA91SxJqsBJxZXvXMREz4ZdwfizCnQxCY1EwDBsFNTRGBSjEVaEFKjEqkbU5zgyt75DZU",
  "key19": "5f4m6RchuP7t9KSL95JgYdVhqY6knqbF3wtPqjfdvNDnTCd9dg8N1vV2zqSRBQQm9ejrqQBHykyqj96r2MT6vTGN",
  "key20": "2hKDE4fydzE6Ucrue87H55NcEjDqL8cm814HBXYuZYe8mXf3AjWufPd9yH79o2Z6tDZVPWVUfvtkL3jyvyyvZ1HK",
  "key21": "4R2dsz5cJw4KNCH1nencWSDSEFgA61MtC5wWmgoFDkjdTAPzQnYCzSPEsZx5zEYFsPMh92zAVhw7fc87mrNMqgTh",
  "key22": "2RQmzuSvBQReaVJ54SYeDZUDVGLtRriT1p6nCfa6kYnb32YixRT8eTth8TJhyP5f2CqxfMmVhAdH7F8VEhSdsscE",
  "key23": "3oEKpS4ykiGgj7iLonPNdvqghb1nNDyTGvbPPS5nucufG8EgFcYJsXmVoG2agrAiQgrZMkFPzc7da1B9Z583TL5n",
  "key24": "2terx6b8QunWRgMhyhoqYcgvX3yhCg7354tF8EWqgkotyFwswFcJTa9WbHhcEZF8kJbM5VR3T2Ps8L8UEZeJnTN3",
  "key25": "4SUDCdaVsrZhaj4WGqcTxXgd9jQ9JP1an5YfBHw7newQ9uiJ3HEoxYGazdYTA9k4QZcZqfwmwRPwf7Wvo9X5TosT",
  "key26": "3MVG7PCW1U6tcwH1YrbcNrXa6DHdVyvNyXQD4CD4DVWYTpMo3mpPDKxqFrKKnngag3fUz7dUWuHjLcoxg18nx8DJ",
  "key27": "UXURWHZNiW5o2f3ieKZtsqMMwRv2ZKuGwyKMboxoNLVBdszx5BieuiNNho8Bt5Hfohb5kfhZEwTXGvmMe1ttzSs",
  "key28": "3eAwcghL88WcWRLKb7mmWextUYCsCFfD8cfhqHY2eHii1PEMuuiX8B9faUMbmebaiK3m1nPn3qT4ka9owvfpwzap",
  "key29": "4x9h296xrsSUSaFwsRgEh6fUKvcMwZgfjsp2N1iUSeEhpis1DURQbvzriLxkRJq7p2e8zVC3zrXpctF2tawcXc79",
  "key30": "5hwGrss4HvU9wkQ35ZsEftoMQMGY5A8Y7rg1fomn8SuRVeh53wRuk2AGWL8kRpDySNA9ak3aXKzKUU7zDjFFui8y",
  "key31": "2MKz8FeiUQKvo18W9wzRUiJzh3YX29yH3FgLfzwigvXULLDLUcqZxR2XgGSrD9ejexgYuZUJPs2TR8W8FS5DoP1r",
  "key32": "4bdmuciprdZmFNkaS22tqJG9zezP7GYSNiXguCcuDQG9B6GVp8dPkujq5mu6zVygjv6vPjCK5SCJQRzqW4TGbfH5",
  "key33": "4LxsFErJtnUmjtS9SmMiFsdUssLunSmB1CUmsB8G44oZsvWpP3EqK4DJFm7ua6oYgroJWLi7WzgY86fijgbRpUi4",
  "key34": "JzVvqcqU4aAtG6K6MpjXg3MRsp4VigM6HZLHZbEB4h2HV7PmB3XknPaAUtzcJ2Qd1NTx7yKD8CZTGk4GgiGQqYk",
  "key35": "5aKYFaksPuaYovsWwd4Pbocer7pWE3sYHz7r6stWQsmDvLajhBpNo1MsdJAAEtevj1jcdcvJffLgogCGGCiTioUz",
  "key36": "29s22KaU82CmKjyYuCwntTcCRcPBLZbjkSxRTEhHKrSVKmj6AxcyW4YCNmEWouidTSsDQGUVF2HLJgHsr4A5XS9e",
  "key37": "3175pmTArjD52DsA32YfCdsYfeZCkrJDArYTiiDUgbH9uZ9phYbjsJoWZ5vQQGDVFHGuhiEmj91fvhdw846Trjhv",
  "key38": "gtrK4sJgBzJ2iHPWUrncmgxuMnV6kJ4S9gqYVkwoZKV8q8mj6vVMCoQhJ3RNtNVaWfZwv94uNSmVZTxR4ER7Z3c",
  "key39": "4r31YcjDM8XXtU1TZyAbnQQ1hvkufmVjuRa3AjRpE5ku1eFzDXFqxGypYRup2X5x3pE9Lgg8f1M1h5UkSahQdxt1",
  "key40": "3vc3udsWyBS9iwdY4BJaq5eKzAZX4maw34xpY18Auw5y93MYde6sSPKfQVvRcg2JDU6zuHMw3HDSv2MJ4cgGwbTG",
  "key41": "5w2GNhspSpsFFzWmm1xRx9Efkegj5QKAMKaqDxS98ouRXteZtkw7a75AgL6PiHJr7spvCtcfWtS4iRVD1AWD472p",
  "key42": "37KRERdYQDSc8Pv4JRWTzqDaR7p7DFhwofYBAR2ytmUMVtadHH4FMLjy9LmExtEwVrTMF6Epq8L4t5azHFz9mBjY",
  "key43": "6hiRhyMwWSra58z4Dr9rLK9MP4Qy5fKB6R3mCPwVdwa1wytX3hpv4Ga9ajXczbZDHKcHKDyEnGtBDNP46ye5Vbw",
  "key44": "3vX2TceEEyV8JhmwEv6bv4TJYDinWfeMHM8xtb7p8C4GiceYrZYcFdATedGi1Kjwzkva1YtTMmyYovcDRrqt3zC7",
  "key45": "nZwsGq7xYq65UTcDYYgZ6gmJoXbEQ44Ye9chkYQ7NiWhpPP1T9i7L5Xa4VqvWpach9Jyw7G4e9Av8UEnivkYV22",
  "key46": "26nPK3sZzNGAwR9BwfGDCkhVCNqopeakpj5PeWumasv2dYthCCPGr1U62XNUecjknQBwE65vQEF4EiKdALYjyBpz",
  "key47": "AuAhMbXbeuX2pai3497wyBxS2ttLd5KrA5rBtzwSP8nE7DQPuqqtKJqX9mhoZhDgb5UaGrsxQTLsB5H8BoPSt6e"
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
