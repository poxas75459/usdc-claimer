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
    "5UWddVaGY2shiww9KAF1TrJxQLMVZQxYToS5EsFipXyhnEdjTZVrNHztNeweL8vbtesDky1CxrsQwJcZQ5JjHN7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hnniiHfz2syo59nZmErBJEr83MX7SkB8vRAMtNcn1d94hjik5ZXw8RTFhyA9inXV1dGMAnDzB8p9NvDQoqRHDj9",
  "key1": "5RRdGcSbsa11a5UDCrq91d22xx18MuRRV4NJz9sjivc6z8sX83DGGuY7xgS9xBHY5NKrfXAZsofGenfiFMaQwSDL",
  "key2": "47Bb8QUi39VWHnnatQVLLkKu2qdhdeBAQ92xLdA1A6kDDXy415KiAq38LwnAUVcwJCgNQHaxTA5KWXGUKdkrQHXZ",
  "key3": "4n8fzP3ekQ2qoyKSrXisaLeiQPtDwQBXgMwf7shuX3G7g9apJQzNTZ1c8AQiHeYTxo9P1Xv4iVYZutmpSUyHmoVE",
  "key4": "56EmhTPfagSHifBNSR8BAfw7kQKVfqKdk4RKmmmoCMsuTDEpEW8n6qqCabDsB8TAazQpKsVBe7kFKxVLCrr5652y",
  "key5": "2NeMN8bsDm6bPyYkWcFQ88m3WcDSN55dhSSH8YBHWWFStFonei8YXvhDwkWcp71y4T3W2N9TTgETrTLYEPGzKUoc",
  "key6": "36SAPZSp5UjCcaLgK51YUMkyXFot71kuHWjewhEoBFYaDhmnhqMA6hsUPR2dgU5cB3Lb1Kc6ajknSghKX6pUsLaR",
  "key7": "3kXKmdEZCzSkv3JLE9zdEgEb4LNbfwydxFavkdFs2mwLPfyg5yu3EfvshxchY6j7XD3PrvFozFzRRHzaYKG36WcC",
  "key8": "35GV46nR98r2QYtBNEQicsBUpsFn3QXF8t7Z7mcSpmms51QidBU3miMFWHWn7j7X7RY52cwcVvr34WZeQVxFFzv5",
  "key9": "LMXLXReypchxGjn2Hq8rFrgnbxSeRJECzGuY4sHp5n5cpftVaJwUKTzReivFkz7mKV3C6EPSP88ZUVhqi2erefu",
  "key10": "4x5vVoEQub2CAy2oGdSQefJwe5C1BePj1419pny6QtEtyUnMUtJ154nZ9LrpAdxBXpe94yVeqZJsrB8X3WT7Ts73",
  "key11": "CeWQtDparx3jpmyvpdSYHTZJBvhSX2qD2EDJXVCFttm4qnbdBr9eKkShgvteGoER5h3Vyuuk3YY2AcC2Z8rdwC2",
  "key12": "3uYfEYcCE7rYsovDiqu474nMDdYDNAkF8meqMXQd3Cv4gjqaDfaUKaqxSy9QHDao9rSAmBpqrbA4sqfHe2WZUu99",
  "key13": "4BhJcFPmBscabHsAQYo1SeotNJWfpXa1jdep1txUK8d7ZZxvw9WNHw8eMvCVUrM3PnNd5vxyhrjvLRy83SjHbxAX",
  "key14": "4Bdvqs7CA9A2QR9LnKiQwuUXUCUoVX3vQ185V5Tbh3sRV3eJT9e82HCHiV3GaGsH5knbDGsBqfXY5q2y9NPyxf7R",
  "key15": "21CREZKD5aLb8aqSuYT6kdV6QdhDHRvJTeoxqvn4MUP3vHfyAiH4z2Da7xvBSYCvkJHq8muP3E5yo2GkzFQ7m5gg",
  "key16": "2EeHhMGdwvbsGr7qHiA4ymHLkntWMYChHnkjGMpZ8tCr6vPhtNsiojCnyRsR9RerxukgGPEhgzXeVgn4n1VRqK4i",
  "key17": "3YUcyqbUed2pDUY9ckwH6RW364U6jZVHCAUkbx23vZCQR4u6afPTw8Phid68VN64U7syGbauURjSijpXdMRzkdzF",
  "key18": "QCELWYCZgkPj4JEK4mGeuoUrgmxtAK5KSebiHrjUaw3rYkdrFQFUzcHrFRBbAL4xjLHX528mE7Fvs5idBAV2YkB",
  "key19": "4Au8gNsJHon83jGVaWeKcCopXsjUpkSBiw6ikR4BWcxAm2ZfqH77EFAt84iBnwuXePnxbqm9RKwzwtdog6AueJCC",
  "key20": "5PZZCfeXkt1xFA7dAfiuCazocHXdnF7tTiQhEeLXuy6yYLJG9QYjbxHeVvKMDKMZCNkytZTK7FDGm71HdGdYtR14",
  "key21": "2qUXV9Am9Kp6rqptK6xJRJdNnmmjamoMEsChFN3T26teDWbT1uJuTxTrieLzvgyAMJcTMKJBGozJw1Pcy2EVAcff",
  "key22": "5zmJfkeqb1XBMdxMR5Ha1X59McLriUqyBFEfyJMYaxrssL9izPimpyydVy9YzF2z9Ty6cAJqJDWfZb9YqRLB2UPd",
  "key23": "3ek6GBNmDfJpJ3xwoybNBzS393iWmwEYYBqQJaZf1UAEeABFL8YKsAnfkdSahVQgRQraE6wET43Eh3NPj7jgikVs",
  "key24": "3NsBuf14qK7izRzgKQQy174tKEtK4hV1GJVnKTDauARozh5kJnTJuhMkQHTHE11GKjyDawEKQj4oECDxog5oa8rN",
  "key25": "5hUQWXhs4hrA8jfcQLA466VkGeXYqftXf3hfwED5Jffp52NiGL96sbsSVpn13KAiF6SMyEDSTrgiPSF2A8Axr5eH",
  "key26": "42bnigGgPxsivFRuGLCRWNkAmrRkrV3xZTfkbA5VzAkCEHMro4FKvQYg2bjzoXSePbsEzLa8S48YeVNfvau7UrLT",
  "key27": "5J9u7g4WRp5qxnP1HU8UmRb3Uak2JN3Uff28oxLXKcXmFVKcVBaFw36EVSbWzoqWpECVH8RfScQNiZzVpeYdGy5y",
  "key28": "5Ugavq1MT4Nmn5Ph1sGMKc7yQ9esuYNWYpb6X9Htx3CnuL3skCVQ2JGRx2L5Yu2n1ToJdHDKv8ZNngYCJgievxme",
  "key29": "2PfPd2N3A8VMDzTx7thrbHseLRR4zcYrCYjo8k52VhGWBKNJvwS4VTJwzSmp5TjWVY7oSzHzB4j4U1RKTDYZWYMx",
  "key30": "2bDeNWUvoD7o2yLXokPbKHn4TQkS6T48NbBF6beecdYpBxZLGDKrjvPH9NqGkBjB59Fq6FGF1bhge1K5jYPh1QKG",
  "key31": "5YhQmk4zL3L1WhTY8kQvxCY91mZeW3QxwM39HBbBcMMZqNA8FMSwnWTNvgqAeQT4PVseYgmKViyWEs3QDXPDux4z",
  "key32": "2fPCZGY6WRpt9Vep6vAmjaxamno2B2BqRyc57cDtsEirnr5VzQPja3B9Q6WFATvUFXjzpkSemUn72HmMfstuA375",
  "key33": "3bx1G3A2EGYjDuQoPQu9mFcB8D7ZUD4kxFzCvKHV4bjc2eacY6nHFXNqydusfm4ZvPyRPsvVxBQDkG33DLddQrbr",
  "key34": "3Whr57NS3TZtWS6r5Zn6cgepGsd8Bsd2Q3k8tsDD8EzKz7rF54Nyhp84h6e8mwVDEcoKuZ7UZ6Bh9RhW3QLN1qri",
  "key35": "yQWwLqASbe5CgYKQQB7Q7MNcM3f1gDJdJemq5FENNd6XDvJZdXSd7MQVeiQ3DEbAHbqoDreLUwtqRU6ddw4JD6d",
  "key36": "23AFMnQgVSJAXXuZ3aWSAH7yUvY6yU6NYyVoadSDxCK5AF3LVFqrALeSnxsNwDzMw5AsA44vyipepmNEKyTe9V7J",
  "key37": "4XoCQJTqUG9rCuE43Nw1rPg5MxnTZULzQEHdDMMj9fhYz7gurzvNBnBbW6tWXQmyHu3dCVrJCZn2Rdn5trDED4ty",
  "key38": "3uNynmoaT7qGGPspzHAjWjSFe7KXGrBTFX33okHZyuKpEVAsMPAw7R1VNepjp676mCo7rUofLGSkkEJgGJNYo3yH",
  "key39": "2xP1JLwdPsFeSP1RpDZEP3nMhpopUC8VQCPz3VMqWmZVHyvzUCS3j5MXMdzWDjs8jJYa3fvCwVn9b1LMDfC4EZ9q",
  "key40": "4EvMU18v9CVqUuNhigkCpQAAWJSZpty6kHczEMJpuq7uzN294Ew4CYnAL83uStjCfkdKSW6McdK3Nmz5AgsS2Svp",
  "key41": "5G3hJeTRunqdqBoingjoPGrrXmFfjzYNK965aXaTmHdYACmMFQMSBNHpEpzhcqEVo9SbEoSQnxCkV9ghhUagXKHM",
  "key42": "3qnZEuULA7ae9q5qBRYSvuEpP8JcHy1oACRaeguhHJDhqHHqjtwmBzwXxrmpyWkUi3CwyRrAfF1GLHZuiH9FVv4y",
  "key43": "252QGimcm9QLNjZ7i91qHKQADPm4ZgW6UkLKbbpJToHMmMhcsV3ZZ366yobcSmPyAHsxJ7dHgvcgwmoPcKiVMkuC",
  "key44": "35FGCCsiR8f58qVdCKyp38DVNgmAneh3DVoBjdPty5ENVcfZuojtHhemDsYjzQJZ6h6NaeJ9dqbU4bzdsav91Wxj",
  "key45": "5CJrNH7vDcZZG6FfuLGkNFGQDpNafwWrafQFYXnyZV6edqigh1iKoRrBdn2a4EtkrFw2FiCbGa1Mf6BFjrd7qCcT",
  "key46": "38Pbzk9tuaiwFziN8rbWJrM9FGAo4rsNJkKuNNKq4UoTFi2EbDbhudSVxe9oD48YfSo2dBTjEuXGs8844vgD8BVs",
  "key47": "3d7SxyS74eajgJXwfRU2DSq4EuGGUG5dAjnPP1mewD4kkeBjYZ9fCCFpSZwuZLqs2UeABcrDEtrThdKWM3tSTrTy",
  "key48": "k7487LvLtgQjG9D34e3TvvgDMQcSDYqSHjAbjRFrzM25SxUtxPXbBYMyE9RDJnVSv6qiL74xRYGHxDpsHZJH9a7"
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
