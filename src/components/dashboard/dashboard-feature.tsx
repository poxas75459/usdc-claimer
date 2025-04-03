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
    "4BZZytKH6UqDi5SqjHa2fmh2NnNLToS6LUxTbGJFbGA3VXHWmYaTaPhDroypEnf5wq7kjCbWe5oDbD8fFyCgA7cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uHE5qe7JqcuJsYh4HHLzzeVY6koe8gPPnc3qjR7mY8ZMKCe9778YQ6FkVtzfKMh1snLzRb42jd7kisNJ6GbK4oH",
  "key1": "4tsFyDm5aotT6Wt3d3D3JnnZwFdM3Bf2nEqwgBsYZ1gx4KTRvsxVnXp18qgcvwjrzsuRYySJwN2LZTQgF8d9rf3s",
  "key2": "5n4st9cqu731AWuFSv4msR1ggNjz8G2pV4ex2CiyXw5tRQD45XKZVChsWNEPhgms1Hn1RhwiQbMrn92QdZPzXQsk",
  "key3": "4kHC78oGexmAL7wjvH9DtoNkB7KnWrvNhmMWe3gMS6yndERPvENXgTzkSQ58pxLZ5S7FGxgPdpnGWKx3g1dC4wAX",
  "key4": "4F6mL2DLrtMffy6NxwQuj4TqMWkpBFHt2JDAkoC4Jqp6r6dMPof4DfVJiEJPjKtaj8S2wDwF9tGsVz72CwbNAFDn",
  "key5": "58KKtmwXCqMZLvtzRQpwAFLF2w3jv8ioFFaaQY7mqdKQwq2UUFGyAb4S4aSWy8KrLnJB95a7RiMFgLfC9DMECY7A",
  "key6": "2UeYRZFxX1KQ9eoFE4S4RYtXR2L6hByQzvucF8Mywd65896qBpmwk6Y3ukHWsnSTszUuyjJy9xrcJVYo769fJzFf",
  "key7": "3JyTjBEZZd1Dj5tYN9pmMbhqG7BLeeTGsoG9ifnRwkZ2ZrAzZs6usiLqSvFZWxGfVyZc9iFQ2JhdtL1uAxdJrCmC",
  "key8": "3R1vn9RCUZExrtReayp7YzR1cC4B8phMjKoSQ3wKZwMUt1Y2UeXqYEaZ1aVvDYHqSYChQaeJP4FTx8r8SwnAN5Tr",
  "key9": "6c2dQNjN7wb6DXwfPjDsEbs4RNHG8KG38SZLutrySzsH9LR5pmizxaW5DYPW8wmH4Repgte4dG82PC9sPgJ2wX2",
  "key10": "5c5x8nm7BLuULNegJPZLbPZkBeSNdhdpxbMdcp8tQXitsyJhfeRwhhVmKV6V2QzFDWKLJoLrZ7gowh25uXBMA267",
  "key11": "4ipUiQYLTRVZcVGsBRG1b386ijCv85khB3xvvrpWFehBt9NqKGDib7JFjeRArg9PZoJMFZ1Udp6kUY3DWbR2aS2c",
  "key12": "5ZVSBFR39VnzBs8QMj9brbPGRQWs4ek8RRzKoiq2p4xeo83ozNhv3T476Xj1jzANdAUX8Rcf18ZBmxmmkG9J9Rny",
  "key13": "5ziT7C5FbJYmAea2w8mB4AVDNrZs9oyGM3Y1BQue69dULQRp8rfwGuPkiBNG3uJTihrb7PT29wojdyPmsFpE4CtW",
  "key14": "4avhmESF2hdHGE12wq3m5xRK1F1nEshCi6mLoY5B98i83KC6sSaVAjT9UZbyBtyw26r8uZEQT5wnnRz8FjonthSw",
  "key15": "34zuSqMU8TdKJN6zDW2uyAZNYxjou7U2a788CbLTAuXQcHuJXfWL1NQdECKB87e4h5wf3rNF55w7MWVAs5NJBqKM",
  "key16": "4e9poMsNBMCKd8iasXjwrEiHtmruJhmFwmAYCYdC5eRTFmUGUXMLuu2jmirTUJC1ropWj2AC6Vkh8PNs2u5GEJPH",
  "key17": "4Zuq58kwRRigLfSjXcJxRuhjXc4v5oBG7wRB99frPJ8wT1oqPqmVzkh62vMU26EgtntPGjUFtshRBsktPb2PN4XD",
  "key18": "5u2LXQSWnhzx3HxKgsY8jA8Xh82XEzxwzdCtuoHU6mfXXMYC45AyX5VAYRnSfzKuCU3mFWf1vu1XDx22inzD1PZM",
  "key19": "5NKjVaA2iKXsz3VikQfZTHdt17wCkQQXXJdrjq99TKMmATAvmx9EFBaLr4h9rJXD71phir5v9WQ14Vuu5kkRkj14",
  "key20": "3dCTGCwa9cv6ifLgQyrkjGkuieABwUHBiRxHyv6iT3HBPcTn2xvA2Wwtrv3n4cYxKiD3pcXar7jfRhUfB5TfQxP8",
  "key21": "3YL4C2t6iQLf5pE6HVZwAE3A2imNFyaMwiY3pYTkq33HY6vDmZQoMFpFBnE8TLmxTG5wHYKREAsmyTZ9cmHwFF52",
  "key22": "kYrCxpKiE1fiHB9tU8Rc7YEjVb3DfynReuEPZHHnvE8jugWh38ANhgpKUvqaCdtqpE4Tr7fJthR4XtK3JyTwhoN",
  "key23": "QVmJzgGYJL2inYBNkZHj3EwWdm5cyRUeu4mHpnoa2oHEHhQmhnPfrdvKt4yw1Cq2PipWxEmBKABAa33E5K8iAZP",
  "key24": "4bVCy1jXtZf35bBDEEiZAndxnR3Y59GHnLXXUY7oZfxH9rsvBso3fu8dfJwiBGsk7jmboJfhLGZuwYtcC7iJBxi6",
  "key25": "4SLxdfHwM1nNZXwwBJqeZqJRDMn39XV1ywmwP4nBjn6tXBajifM7a6WmM1nfsb1cZdmGPjVZeVcU2qZ9X75Eeqs9",
  "key26": "2kGzjq2g2F5XribJaVJQKsR7J27ehqaFctkUGQVT9U77J2ncixScsfkVVtS34SQ4nLNBwaPRGaoTVN3KpC7k9oxL",
  "key27": "2E627TnoEEw34xBcte6ETv6ZFf2JGLkkcszTAaAqoH3kccpu48sAYVoRxHGpMfGCCg37a4g5D6BD5VddpZPB7biM",
  "key28": "t2bfwWycRgPKAR52Uwn93X2bpmsUw8jsTzeNHSEAouCmdoGEsACwCdpRyC6LdPz4uaqK4yWvYbDgtPdcxNk4Biw",
  "key29": "2pkJRQS1bdCCz1P1q3dhHtwrHKyokexSpPk6ZUVtCeqXUSC8vrWum5PXwe5VyTvm98TcaRbukEdBezNaycPSbuUA",
  "key30": "2Y5fKcupXhMsvGRFJhoebmkHJt1qrL7wndEL1FiL8JrqWRpX7Bf4i7ecL4hHEamem9FEcX64VDHbFxDc8zaYKn7C",
  "key31": "6bCo45FFmZKHvUhEtvR1uDehogKbpfLfD4WhVDa2157HFdZY1YbqqAqK5GAt5kEGcT1vhXUtt3JN9Uqz6g5YXcZ",
  "key32": "2KxaX5vjtw2nLK2YcnQg7ZKyWVriepuZCtM5Y2WbFpzcMdC6ugU4mYZtbzHTr7R2yxTDB178iFmURSqTNQdurVHs",
  "key33": "4vZSAFNHbuCmc6XDTSL4Fgf8oWqX3NSSYWNVpBkyogeqLuydTDV6X9LpT21txsDcSEezSaHMQ8AsHJxy6xc4r2sx",
  "key34": "5RcFqKLJv1X66vCtvK9W47Je6c1JYeQSC1v8xT9m2mhpYDPQ8FViTSNk6eUm43dyGJThzKFpe2hwJdp5pTLRE2wj",
  "key35": "3K3FCAgD7LjwR25y1eZDbT8KmFMC76KtRod1jVH4KFfPQK1EeAjLhWzREskPQhcFa9YaozZF72iB6HE1PerwoFNy",
  "key36": "4gRSeqsdJAjChhgusqs2iCqbYNHE3mxovtJg9HJawpdxyxNP3YihTwdH7xbpevUf2Mo3Rhteps26vG1PUfB8XJRy",
  "key37": "sf3tPLiqgZ4483YwHtB3j4LKPuMMQfS7XJEouDzMqyxUKcANNJrWAY4nK2o8zuM7yj9eAJZhRmsxMPW4jXEmyhz",
  "key38": "5tSGCUGCgeD2UGqaPf4eNteEpnQEabAVTGuAH7eJtkXQKX5bh1Mqpavor8ApzrJCTBhZwPm3Ah32ZvwSfbR6rUTQ",
  "key39": "5p7AkyNrDs5E7416CFjDReiwvxDpFFD5wd9SWuxoPXPz75ACqZH2PrCk2Uin4NGvNJDjNnRFJnPbFeZyiHDsrpfL",
  "key40": "57oNrP5Hwb27U7p3sfZK69qAooiM3yzesrLqmXEz6y8dSs3QiwxepX6ELXEV4tbyMtPFRzYtwgLpJHYk3N62XBAX",
  "key41": "3QmnYT7jt1WxtVbxLLCFL5HH693558wPEahtJc4GtaCBHPXu1yguLrdLhBfGbTWhzcs5uRU3afxDbJr734yg3NYS",
  "key42": "5kaVw89iNuBcc4hZBRqoWmoZ2pjmw5CVysZ2DD33JeiDppZpGjVkAFNfvWZwjhwBypnzNW5m6DWqvZ9ErjRdTQb1",
  "key43": "qh7C8k3ddDSxwZ7BWH71YbStcyb9BNCEr8XBu97M9Zh9q6x3H24ynp2HhtxLU7n3kFNf7Ucx2pRVgH3ws4YD6Xu",
  "key44": "8kF5QRZYPqBdLhs79ET65E95vkvHvnUJhqrMSr5Z1gUgFUFyHbFDkrA4L4K1qXWVg1eSGwn7kYrMyKGkz4fAF3o",
  "key45": "5UEFzSRHKGRteRHQtaowou5PSHTNCBRBkXCNR6HPQKhbgDKoNZcYwKB67oaHrMvUqkwednEkdDnxJNbNshgF8Fxs",
  "key46": "5yoCWhrF1J5mTr7J8XWCqqnHKakcs2Gt23yuFYByAtDm5MLKCE9RYuo7Qx5ukSwAntSmTJMVbF6mUADrtKC5NMEU",
  "key47": "3Qagefgt4mp2sPtwFDCBaCwZvFBbPqTdJRtjC47Eia9qM3L1NqjKmg1KmiJMkJf6v9NUkE5fUhb2WeuGAHp55JqT",
  "key48": "NxHXkrdF6MRD8S98nLRhb4YFLEJB4Toa6Ggr8bfFW8FR2e1SwXt65pnC523MXpaZKTvsHAyasNEhmE5XhLcTDsY"
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
