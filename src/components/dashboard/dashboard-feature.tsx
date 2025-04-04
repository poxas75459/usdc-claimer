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
    "4jkxYVAQnUk9pgXQ1YLKuBCnPxcn6sRsLAGE2ByyP7gAJu8BHxvJ1F2NcEeqYNZ9h8dQdD5aJHQau1eRPbB4ssWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43iwYvZkzVDYQNgCFD112EebCuWdLZ5XETKA8VQAaCtyxoSrC4DPeaCtjFCWrqVtLE84u3VbuDScdMf62Z7LzzaD",
  "key1": "64jmFGfDV1uJNMpWcjykJnV8rMuWi5ghrG4YYQai23obQjNDw1kgAuFKGWgzVoAZRrtz6gsMgYRQeoCWDUaNjY2",
  "key2": "5kxctf9RBZETJsmxoUrXGJN4ziYWbXS6zh9JgpUri7MJ6zRxGpYqVnH8J9dLy6yejVCAi1rPgbQnjSKDAsFUvgv7",
  "key3": "58i8HR8agFBWEzLuE2CsmaS1pxaZSpN4RVhk5F5o6bCZJuazqNqNLwAAcdfEPiXxdpFf5Lk9xH28nLQS7Bc9K75f",
  "key4": "WTd3q4gZgTTp9K6vMt1FrPvGhfEv2Jzv1wExpgUpqRt5a3duEyZnA19ydkfXFf3DtRhJqqSN5EUyDVZTfRxNK7S",
  "key5": "5HTVajjUqaVNL6SrwnT9eXJuePSUygYcvVJhuQz3WRrPMSzMDHzqe8Lj7E2EnuhxxFpdt6Rw7mdNwaRH2Y4xkG6e",
  "key6": "2KA4QsExpe2cFCWmbaDcJ3ajR4jvwgTBzwEofkWJoBmwnfwfchUBx9ad5zJ8FhbX6MZKDbGtt5sxuKFrY3v7iys8",
  "key7": "2ZFmp2koGcAXjxYDkM4nhStZGaMt4GRv4c6eTq1byGoYWHrtWeDaWNk2Wg4T8nNNRmdLyWLeZF7TpzdNwtJtDYgK",
  "key8": "4c6G46eonbDedM3WZ8nwA1iHG3JmsywT2NwktKJDTuvpRVDBrktRYpPsBSnKY7shKRdCw5staivEarFLRTVJQMMg",
  "key9": "4yzX8q3QKFtYFBN1SyA6gUrVLtcPLabu8qdqFsdpnJWogTcow9ijVpKJxHFhELeBFAqRDtqmKPJzrcxWbUQi7zWo",
  "key10": "5posWrUMEhxm46Um8vVUYv86371HxXiDx5rFqLRb92a4cAAArUQg9DHaUtaMPrHZrZSequAGJCf3Zz8wDXrCggfN",
  "key11": "54Ke5y3nq1ujD6qv77e9a9Et92LuCJq8VmdQwmUGSsM6cZ7uRKnixGcPQ2TTXp26S8FkqnYRzUeoAJqoEFSmUeNn",
  "key12": "4fhQhYdXb5KHty6w8sU39CS41LBQZB4YJPutdeBsdJCKZhKmnsi4JJ4BifyiSYg7kuUFPxrWkmNMKUX8HWfWBKdT",
  "key13": "4wH8YaD4ksxqnAiBX1sbgtPgbrUfWSnAarDAkpPqtBPAJdX2ZaWvy2vNMj2SShxPtXJZG3K8J3GSKXL5QN18oiCM",
  "key14": "su1CHEz8ojU5L3FBeT4pr5SyzPLLL3kK5gQQPYoyn9ZYXLsUWNhdmztjKNo4xFyfmusajotHWWNcW98bVay1Rod",
  "key15": "wCefvfUgiqxfSJhkoGS643qf7NQfdtMLWov7684Pt7SqsA8HAGAdae8dnATxxe4bwFV1hzqSBMEvYZUhuvkwpAc",
  "key16": "55SwwNcyZWAfZpbaodcnAVtBQN1XR3b2HEVtK8HsMyFVwAygH4MRZ2MuucAiPyCHfEFAxLQh8HCEM66hvkuLg9Qx",
  "key17": "PBZyt4b4P6fiziYh5nQUgz6QvC89M5R4u2Yv12VtUBsHnBXCViWKzuCRfbW72un4Lj1brvggHrwJWknDEDciyg3",
  "key18": "2pdfAVpZHw7sc3EMiknF5w2izsbfs2CPnVrhfcFzHkXnrhr6vkmTonL56mzxAn1jEYt3WPmraWtKS2vdiGBjEUjN",
  "key19": "4fkxxro4LyLMzNg7rmJkxgXB613EcvqVhuuopS9QDmSA4cFb1q9gnwpmDWezufW5k6Kcf6SrmfNXTzoevF3233Ts",
  "key20": "35QUsgMVhHvTRmrHJMfpDiqCpZ1b4jAdxJJUqR51WkwV9qvnUPHQPBvHGakPGfsB2Yz1Fdmd1HLFyZjHJNdfNSTF",
  "key21": "2E1v8g8nPEA2W1VEJ8itsgmGVi4k3SgVVacL7j4ywEmevcaetfjZzeRwkD1LAFhy1VQJ8DQjEnpCgEUYWfr2Uo5N",
  "key22": "3RhHtJ5M9d4hoByHuQyzUEky2JhEbHiq7jZQF8oicucamyzsqFUAjhnPEMP7j99ZsUkmYhBvDpH4QrC7Z1moYSf",
  "key23": "36AzqhGwE1trrUdXZNWihazByTt7mGNxjujzkZp1ZgsK5SZLXLwZvxFZK47EDgwpvis1BdmMCCad2BDis5CtxEoV",
  "key24": "3XZy1UUpoXwtFZ2tXiGCENxtPoYZpJYXgPkteWpHbVXYzGsGCNg6VzK1CeizhnrFJmGP2rSHYGXvQkUVepfGZvum",
  "key25": "64tqpNX96udPQwtTintF5iftfEL5Wnufv97ciGcB3wcJKfe8G997WkAFQYLH8dhwjaRnSEGjCaYshVtYHdu7a5fm",
  "key26": "25wfapZZNvURHwr8eTq3xgzLDgTUe3gJsHQJDbwfwwsNwb8pBAyeyuZpZP3Vx2JPHu9c5c1eR1c8ntSRtWAcxpZa",
  "key27": "3J4X2ks1f7rfkxvVA47mQXfcQVB4Qo948jyeTBufToK8G5eNUV4f3KLF38oRR2o7WyLyiiVWgJrEW5x2N9gVcKRp",
  "key28": "2skrFh9oMMXbJnXLtahcUafFMUorHvn2R4FEnNK47UTyNuwK2kxcSEsJCkVkXfWf1ojhKgV3EX5SpwvT6P11HAn",
  "key29": "5nVWsNhqW6rz15hw5ECrM7PfxFuTFdfL6hnZyQvKmiGrUcYgYuUSCcg1KM9XBHLt2JmTvQiv4pRhGEcJnM4xEBj8",
  "key30": "3baRdpEcwApCYBGg11f8ncrSNP8W9mE3tgbjH38bY9Er1PmaGRng2nc3SHvUV3192BtN8DmUeY9PVCNao26hzptA",
  "key31": "3a8Fk9NMNeiF2pUmYkBjuGwGXiaKTUNZ732U7NUFTut4ZBVotGUNgEx2tYW9qs4VWbEqhfKxVF7ezkcpvmUpmvAZ",
  "key32": "3xnEP3Qik8CU4EKMMyvABw8zFJmCf1fqe1YSY4cfLF83TgfFtxqDgDxF3mqqbcV33RfmN3qB8WJSze7WaTuQ1KQx",
  "key33": "5ZKRMnEB2SaNRZEXQ1LvdundTjjXHv3Sep23WAK3KoDU4vq1MpQcZFLYaTRtDR2csC35hZix3UdPLX5aa674FBZ4",
  "key34": "5FkncrUK9DahsJfzHT3VjoNpJJqk5fdK1wqE9nLNjbvHbdJx6DEPTysJMJaXriiMEoo7Vj2c1Ad5SWmVgBeXzzhD",
  "key35": "QPqnEAj7LnRm5C3Gv7LzHy8kzsk3VrFteje42hX87JDX8k4kpzsVFTS2RmuraxYLXnmDRabaoH89oGConoNQSF4",
  "key36": "597DTx1CRKnEi6AgnDZwThf8hTao6kfvY8cYERydgchxe528V2Zf3jJaTMaWPFU3kmA7PjNBrtz9nTMRWgpm2FPY",
  "key37": "5kamqT1BUn9jTbN2JDN8wG1PtTN4qNBEfNejvRtSTXPyLLs8ePmmLEbdgjuo3pHkBdAQcd6TzgFVwL5jPdBPhtcP",
  "key38": "2gPQPMFqbefGpshGVa5EEsXFjSZ6TDfZJhLaXpKn17P67pp6kZj9Pz8uPkmrtuwGrSe6LvJzgqEDMp92ksXThhmS",
  "key39": "4GcsRRba7ArsFTsLZxBazN55LkLvebxccgaBChioRSV6RRFx2jM8BDLBPxJJjCoBLyHcwSWZehcRGJKEpWKyPJYT",
  "key40": "3eZmq6RME8uN83wpXybuYF7o4mVwApqFdNUzn6icicN4x6WRjVMJ1F12njB6Xj693VB7LwmwZbrwUd5AALPwpLuj",
  "key41": "5n4Tt8MLuWjn9CmVZPmcy2tLpbFcxEsDToP1jJAccPU6p98r1FKJpJwGsrz91fhdey1iKvi3b3tpPPVJCHuuRWMh",
  "key42": "5LvSWB6e3EaJ2zVGgjKAiepLragPCXcvY37Z48RbUud8XfsgBZLVhaoSFawzLvvB7mowevDvnXue6WgoXWtVN6be"
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
