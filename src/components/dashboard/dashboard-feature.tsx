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
    "4rrStNhmZR2HJnwJDmb3qNrfSMAPz8EBA1odq3oBqWSgGAT5FjkppCi2rVpTgNhoSNT6Wb16FGWpwU68m6vwzsBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pY7EevoYvF2xRNwFAKL1REdvNJJ3Cnn5MLSwm3nQfhDdSqhtTBUkvVM6A8VsQz3NfjBUh7BBomSNkaT8XFYaHPU",
  "key1": "3fJP5qjr5cec2ZEasJ6eQ8y1AhDdVmntWugxTN8M6Qv7isLZFtndwM813wmga6DEFFno4onuaU1mVu4pkeavGENG",
  "key2": "64cyvcb5gF6ofHB6jQXo7TicxJEWcJiJXY93LBUKCmeLYcm51mfp4vyEP6YFxLRkJ8dVAGj7i1mzb4g7T3vioipu",
  "key3": "3scxJrXWsU8BTjADCc1SfhqXtWULwvHxB25wBnoBjduuCAh3Pta4TqAgsLkoBUCPwyo5RpcSPmJAi8h4cjUhpwux",
  "key4": "4Hk6wAH6H8ogdp1gyzqswox97iHDHGHFX8X8uN2zWiR5UkEDBEfGMtVKB3uaovjU1Miizb6LR9tAgaz7sqHoWNrK",
  "key5": "66mZR9gfxc2DL8KzjBArfjvTfVaEQndHhNx5cqgvzBsGnshjQ6LKjRVFAzZppaLE1vVCCcxXt9pvYJJpdcRXrLND",
  "key6": "2L9p47A7hVe4XFb5nLZf1HqXcJvovqThdyK3z3X9y6yy2Twe5PkzApJzhhTnDLWnD353vBPVLHScYLXtEDaLfM4m",
  "key7": "ycv1V9aC4uHm4zRPdsDohQJg1Xb6zLMREYQkx2PHBvQUC5eibic235asAnoDXU2VZY8fmfhoXiahMHMPKjh3Y3P",
  "key8": "2qtSmWmC5D6e2vLFgoUb1a7CaDUnPcBWXykHh4WvQWYEHSj8uLQCwBFXMqFbGB5ZdZC32P8zvuC5MchK8nzUwyoK",
  "key9": "5njVu5YY76tYRQZ9uW8rhEpuFkJRaaxEmaYQLRJp2WRMmpPzUn9SaoTECB4sRoyfmU8DBircfhucDDqhazz5Ffg1",
  "key10": "4UZegvWsMLqHyNq9dXKebtwtJML5qPDqShxy7aTmrBk3om87kf6Yiv3QXwZYmNPRxX926WiiXDx39tksybbjgsZD",
  "key11": "cd9CQevRRMhYVUfSc8KspkMPBi73HwEKFxgfEpqfqDUVujYfAx3MTwxbc59bf7wYUy3NLwaoaVt3by7RWGVPiPg",
  "key12": "5mxhNENbAygvaaG8oCECR8s7ibU7RZSXDBLf6KuWSooNVdqHqbWnHRpLi6mT4ZTxtyK7hiqy9Pd9ZJ7PumH1fR5E",
  "key13": "3aX4iyZCEVgNiDjsG48rXtV4Nou99UHJ9KkNMZn9vy1mu2SPdpjAJsBbhewH35fLWeN8pAXGpdfQPyBrxQFCasnu",
  "key14": "EvbpcZuShHBLQgTjcvXdiqbKWgj384Zf8LyNfWkmYG1U2VYbB7XhKMefeySLjA2TpPpS51d4f8SXcZ4vwk7jYFh",
  "key15": "5JVJjR2RSmR5Y8qNFuaS8rMpA9dj77gmfkfRcsUJwKd5u75ZJgPtqCrNB4N2hwMb3QnyzR8oUcdB6YFTNBswGQ3H",
  "key16": "2vXNu6f1TjDjPyhx1QtathGhvHCniaxkXcuwh43MAx4frGR5255gEqsgUn27gw1EJXVLZzJbDJDDSdJr24pdKuUH",
  "key17": "3i2y8Vanz8TKyNukvYiUVtoJDNdx7BSJXwDUbqRi2kafYVZPpmTXNLcPRaDCU6TL6spk5fmFNBWuu8KjLnrfEzRE",
  "key18": "5ooucb7f13Kw9r5B6TXyRcu1Z9JtRceMu3HVdwRAxT8xQsrtyVgHpHJuGStf9Uz4qvjskrzYh7mUB76soaTE3UnN",
  "key19": "4ZurQdPaUpUToBMbrqqSkCT7wMbFnxGXDwrWuhzn4Z6gnEJFAcTW6JQocd8jrwUhgYwgSi1vLdAPiNJFEwP3afCZ",
  "key20": "33SGkR1JMVNNeutsjzLH1ryFArc7RLHnaBAbxQv9LyXrSKGF2PyCJVzVA3Vq9tQG1BDyHwKLEXhT2EG8sRdvLjEM",
  "key21": "3cKT84hu51dy2q2NKSWeYfUedriWbcaXCw63tpdwMd6yd49moDay5jzt28FMNccGvpwR5fKCP8AtXFPTgcCawA85",
  "key22": "3QPdzFTozDb3Xpmkkca9t3nr2z6P24Q6F14eU6eRkS2ubYgPR7d1u6kQoWdBfDzgrpUVz2BJAh3zcLBQqroyYCFB",
  "key23": "xVwMEqHLxV7YHyu3vANCGbBGLg7a4W7fPLfnrASFariuSrP6n8CrwMdQqViBchC8C6ypdCXNxH7WotuqGCKSCxB",
  "key24": "3Y1d2uDXdCFQg5VnvhiZXE6jV7FeDXQmUnV8C4Gk3SBE25xCcY1qdvT1yEHU6TQ75XwEgE54FGWHed6U3vjxUd2r",
  "key25": "2Q3i1c22uFrzL136m77jgEuChc7faufcKn9QM1QveBCkhza55REw3xmP9D5FAFxR6gvC99dJpyMj4pxmfvCSRfoC",
  "key26": "2dwCJHUrEvHSZPLMLxZ7uj3hRa9fhsHvE7cTVYRdGG7JxYiE6671AKxqAgKGmCN43TFcFMv4RcHDsUA3QhLrHfMY",
  "key27": "48S6NHTxz24gRbCLPbs1AvxHTxmHnDscZ1SVzbXjnb3P27jTLaRB7XrAJRTXJPYwH4N3BJgHtUdisiycioGqKYyZ",
  "key28": "51mhGXGN1JTC66BaueVSAqHothpbCb7GFVx8eXfwiqGYhdrVD7BiX5JCK51sqBhfztbvDGACrJewr9qKSPhhH5c9",
  "key29": "53vPVRzMYerDpuG7yAtevfAksj1Ev6A4xPFQymKddFb2V15cQ9qknbYuJv9qgFYjeH5588AB3K23krBZ2WHBmjCi",
  "key30": "56FBiSMHTGvxagnGiU5uz8rPLk17eJPt4ftnLTnPRM7ZHgcgJHgKyUheqrNv13us8h5N9CTn7N7qW4VanV9wR6Mb",
  "key31": "4aB81RRNFgiCj4NKPhE4vfwbSAAKSiDA9CjC8HKXWPGpV8k1dNwZbv8gyWqvU4n1y4ZsCEH93BnVYyzJy2mKMG2R",
  "key32": "v25t7HBHepkmEjWCggKJeBoZ79YGti6ACUVYa9xYZwvvH7C8pocq1qxAnhD5s5hHEWpNGeHZxbgt78XytvrgsuC",
  "key33": "sn8hsJJnnib8mJL9Up8dxPZ1vZ3qU6vNZgMjP7varF7uuGYwBf97wcrH6T45NKYZdZZASEpyqQT1FYQ1S4EUTrq",
  "key34": "3HvmwgiWzpicsEJAQWfipmdCmxKHDnDr6rDtosXD4ForMCWGmAbb36DxAFwzT91F1aPWvPHuN4S36TCiuVE76nY4",
  "key35": "4QhTYxpgjj3Hzp236R9iFckNw5uBQDZNjZ7eNrjoPHE1bfJk1sRU9ToKpJf7JNe59nq6tkWWnamM2aebrxyEbdhA",
  "key36": "2YzYQ4gEZRDtx4YoKYbPBZDK2yTLW4XqMsyGE5VUqxmDQpaXAovUDrV6n5MPx8rLU5kJ6c9ksKLKg9C8fUayT4Np",
  "key37": "4qUnT48ixQH37gM5pwy4Tfwc24SrG6o6TPoTACdqW7aqpvyK56xn6oiKZvvWSVgG76Bj28Y5cY3tzoz8jBaiyYx9",
  "key38": "uDyoyTFpUokLmg6WfA7xM6Gy67ak5tSuXqJXF9ocbvaArbMwXY6HfaE8eMTuUFRSRnkirRDwuJ7gXq43FkkG69H",
  "key39": "2cgdfwWV2iM3krkkRdMSfTwq9oDvWDS5GrjppVza9q91PAf8BV2h7b9REQ3qP2f5XZai2BJoGUMHeucgctEdqEkP",
  "key40": "4SbYH9QcphALrmYhrZu52DjKUiEXeM7oRWYEWBT3A8ztYP6pzmHbc8bTxHwPskSX7cu61B5QAeVaQWscQCz6o6wr",
  "key41": "2oSZCsfFTtdVDsp6Wkp4ctDaey9HTJxoQpqLmvqAG7aGjvNkDcezUDM2ycZJWvfxPtBknqbyi8Y7owKQpEJphhhm",
  "key42": "3bxFzAUsYT1mBXxsVEqpMtubSpv6CRD6moasM8MJkX2TZzwsRzTWuFwTGiqnVTnL5Yt2E6VG7iyWci5tX1kDZX8C",
  "key43": "2dVziBxGNJrizBGexY5E9LdkU8Y9TyWu6Z74VHiKx2VjBxouQceVrFbUFZyWHBzWwbePVdUvLvkd4bLgD55pNkDF",
  "key44": "8fPRok2Shb8qkidP6M93ik3q9npVpYmSHj9iA5gqqN1sohP6SEqMptUKveetn61UGtbab8BNppN8gaMeKmYd722"
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
