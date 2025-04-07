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
    "3MkasG4dtDcTyHi8BjacvmNQvP4eDotkkmE32mVyXuH74bDecdbQZKGEA35vMtmJrcZb1EaTxr9fzZVHoDTBK264"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y58cshoQJCpXyuZiwhEA7zACK4PTc8mDr1QbybGCTqRMyPrTQa5AEu78SWPi9LKG31dnpwvsC7VVA2bqDFHof4A",
  "key1": "23wzvJLhyzkHFHyfgiteBJfF4E1VMrK4qSQUrj5rxLkMERZmBQVBW9uQeNAPLZpZWSKszCZasYRTBmNhzoEbNsxx",
  "key2": "naLdt8ioVZLhhLw17zyYuDWFd4F1bmzieAD7B6Azq4Bm68FUXmMUVYhmoFVdcXZpafbLoki8qsNnHZrxUNHt7HX",
  "key3": "5U8NN6recjnnDwMSgL8pfeVsWqLpf5s71QPVPo65bDaEckBJ216feiHr6fY8omhCiaYZL2CskRsJ1x85mHf3jYv5",
  "key4": "3Ghe6616ZqJxgavc3zAp61R4PvnjRVvUe3AmkaFTujxZur5RXWEEXsXcsBuLzDjpQBSehXoVfzz3FezNATvzJFYd",
  "key5": "63cgJWiBZx8GP1n9RTEs5fBqYJHAg3jfNFQCkBfwZwZsuVB8nAckLG6y3fhyurU4YKMvQUMoenF5p9ifSFoLfFZr",
  "key6": "4C3bgfbD787uB8dbdseRrSUcFGUHSMdrqpqtUMWutAKwiFVYigt75a11rLpSsqBQ2LXtakmMzP9n7qd4SzCXPUBD",
  "key7": "4bryWQqjd59NProLV2L3RpAwhXD4WW3LQfpph4tbPFAvScU91yBiavmiRgAQsxmeChgrzNt9EnKpcuNwaLafEF7g",
  "key8": "22YFUriZK43nWAGPygF49Ldx4ShJgznaLHa1TvLcat4N6vLub6pAqDUZJhDYM22vHi3Tf8wnJd5hnDswauDiw9i9",
  "key9": "29s4N2JCYgMdZvXts6gs4AaSudiVtfAtRGLbmMppwA2f3wY7jtkrWK4XvrbRMmPGdDM14DZrtcdjhKXFvGs3juhA",
  "key10": "393jShj7LxQEopbFy7jd4bHjPRqnUuemaS5UnpihhCc3PP19rSjFM6Ai6r3FHYvNJHeJpa3NYM7eGu5hEUrqL24M",
  "key11": "3uNpcBzGKdHLzjMhAozH2w5PCKLoZmwTYYL97ABk3Nm5Kco9FE8sSPXW7pm23k1icx3ik1TFVFGk5ZyKGwC8KYFp",
  "key12": "2QNQGJSSwDCq2GA2euvEZgbrxN8XNLovvz8KVQd124DrLwyqDAC6RhM8RNWtMuU2rWGLjyKmhCVNMAcEtytUERTc",
  "key13": "4vp2ZZxiEEcEbDcd8CzdaeUqQ6vYcFiW8GhZobrpMsD2JVv3Bf9EnH19J2cmoRJLd9rtUdZVKZCYkzWGTr5D5hx7",
  "key14": "3CXAooaCsnBewFM4vqjfigT46h4QimS3gYKKJF6C5xSz7YeGwjSmiw1JAJjTZfHyNdJm8QWzVfWfbmFeGDZh9E6L",
  "key15": "5yT87L3yqNCDLU9c4cd2NpbYK5zjFxkbnKsPYqsWEDLZj92Gqh3q42FHGE1L4ycwB8RyNjxdtiUvoRfrRtedzYF2",
  "key16": "RjzD3Zk59Drtu7oJMwDxM8u8nV8CbMcKq6fhvZuqVSihcFUGQ7NG5aiETuiwG5P7VmLX4VYjjwbvFHCYgGECL1H",
  "key17": "2GdrWuCaDYJi3Bmb4i8sN7bN7V11gaBQeVX1u2VxPmjyVtC3JXbaTg54uSHcLQy9a9ZykhcytpqU9SaeVxkQxHPN",
  "key18": "5Xo9VaK4sva57i2gH4j72TAC3j5eqrXepyLSeYhz11775AbFKtZGhzsbfVfDcLryny4L83XVSZQc9gRwxrcdpAhv",
  "key19": "5YttJAFfer2hwegZqdmbFn26yACdTp3HPTAvBE1wX74V9bXGbQcF2yxo37YEbkuKsXges26xHt4MmBy8ByGEPd7C",
  "key20": "VY9yYDiQfYXUvY9FDSngiG1UH1zfbxa1unbHuNRM2Mcgm5d5SQNpwXgznbE8beewN6iYveAfXyVFDYVScXFYTbg",
  "key21": "2FWREPQ2UN1vbBRpveVjdCxLKGUAEUwJ5Vceo1AG6TLmxSSTvszrQ5ydC7TYtiaSF1Wn1BHFZGTjMhYagM6M8WHr",
  "key22": "SkCw162Wgh4GrfJx5bzCRihe8U9zmJ2nNaM5K1K6c8JQEZVuRn4fQPUdLvrLeMNKPCHZvL17iaqrhsbifwXMPLF",
  "key23": "2dYgy3DdW1AyhUbyBD7YXXohpaGWyFS2TNdhoMq4RToZiGvjWJRH4xvpeMAoFFhXLNUGT3sR8yxZZf2pntxTyvk2",
  "key24": "33p16ySPNsi9HPijtTqacfy8ZarfLcJcB7by5j4V9GG5e6JprB3mXjtS1BEcSm6VpRZwBxGRtaLWBCReEmC8LjxF",
  "key25": "265bQh3bUpCfCcWpWJ763PgKhFoV8ZRZ3MzBZfDqRVeTcCkmd35wf9GGViUbqnpcvKfG3AZMXwq6dSEnHu9SsyPK",
  "key26": "2e35eLTjBuyh83xqReSRZee8WmXwsTHBBSHbyq8WE3YKY48eJaebWxMwBbwAtAZe5qJ26X4PgfWZsfTXGz2Wy4DS",
  "key27": "3mdj7ddgntZVjPZNAr5WqsvKthUS3mnYLS5VTybigkxVER2dDAJUR9YKTohdMk7gY14Den7fjKw1osamQvhpKTmn",
  "key28": "EAy51SWK7tJtLDUwCmGoRoEJgLHUcUs5LfRFib5SKtvJYYHLqrLpjcGgjBSQJwrSPya1DH59wCywBE4iR1FZVE4",
  "key29": "Q2vpzRsNX3x6xj2uE53Bo1DNNfXQDo1FpsGpTCcpAc7CGrU31gfFYTESffpArwou48Vt3RaKY9wQveecH9PDFUe",
  "key30": "3P936jV7g42TnJ3V3ttbxq7PshFyjj3MH2E14Xuur5nBJiDZVfPVimrHBDWFNsWc3vtPQAuPMZuRytAFTd44YzVf",
  "key31": "4DqiYmwtdTQhwgDQaN79DqR32781FdZa5Aj7FU8XDiv4MWdUugUraaaUaujTeCgE4X7t2QveaFczZQNP1haJZBJ9",
  "key32": "4uQ8SgR6uYJaLbKj63nxcXHGDd3Xb9TF8AWWh3Jx1pTuK6jzzpdPhGHQsdmmVgzi6ADShEd6J6sRWMkgFjpSMCJy",
  "key33": "5GuN6ySJbYn3272epeqwiXePA2e5xQ9r9uHfT3FyUsGZt9c1reF2oZzAGDHA2tM68nxd6dXboZ7jZTHyixmfRj7q",
  "key34": "5jk3VxDbcGEUrKnHfAuRNpEFF4tdiANrGsU3PwDVzR8J5ZvAHb8oDQsGrFBCnBb33p3BV8qoDKJm629AEZzdHGKc",
  "key35": "58ZPN2EJgu1fQn2wF64WMyBvoEPiS73ySA1DsZkTaa5sVem7FgVZVFw62TeQQqZ1RYTchARJe1v7p2kDVCDYHU64",
  "key36": "hWX9VEGFyxy18WvbhDm8XW8BqHScVnyU4t6bvGPwcLbrYe7c5KVjbCuqxXUWeFF3Krj8YY1p87gzc25de3TzwWb",
  "key37": "57j3ob1JdVvmSG4ygp5BC5Fx7WQbounA9ukCimL2A4soewwhkxxLNiBVS5hif3cSZcNwfbmBQT5gRyTK2zaZUn86",
  "key38": "2mXidf3pHSpMghwXwWqe2ebMjznTZqsBunPbKfakSYGZkKzwhjw5i8n4UMHkbsjP7WB3eZq4D8UBsqMa7mG7cZAc",
  "key39": "3XeQ72974EFdwoVUMftAyNPoVceeEiG3PWm8xRekiDPm1ZfYBQpXVNSBp3KJ2C9ig5sWJYFkGEbCV2fuKz1R4pcw",
  "key40": "3wHY35MTNiUFAcbdsXke7Y22g4v7sd5EHKwurR3d1Y4EqY7vt7FxkYNid58sKsYenK9nEEPK6aDowBeCzLhLC6yS",
  "key41": "2rWsSHanui8ypoHKwNXyZ27PtR4FKFFZ3ASdYGZpYwoAg4KtMabFy68Hf6Ei7fVwuZvQ1WbUe24K8UBv5kxHgd6a",
  "key42": "3nUS3wLEnoVoqPwGHRh9CZw7XNWrS4vNLbK7HLE9XBVVHDLKygNoxLdHEbgvW6Tw7hKowvowwXbV51uJhaLSrGnN",
  "key43": "4Fw9kcXY8ULu2Zitm9n2BvEkdyEmijbnM2ZjpuMDsJpC9Rkotsf2Mu4tNmi2ob4Jyx3zErMN8ktgRcHHcAS5zX4F",
  "key44": "46KCE8uy7RQgnm1Uo3te8ADk3Rd9isLDnAXms8G1YF7zWrdaoay151uLSv6aC5aG8UBmQDi8NCLaPfq9E5Cjov8z",
  "key45": "3BVMUDES71JzK7frDq25PWvRe9cstSRKs5igCVoa2B6SaP61keDScbha7ThUZEgEhwVGAGSyqKK44A7Dfw1qVfRc",
  "key46": "4exvqz8T4xkFec9QEgWpJ6Ak6rwnmQWdR6q5NRzyWi1AaRwzv3WH7psK3icFuqQy7J5nkzo2i4b2zY9y5azdNrum",
  "key47": "4pBxdSz6qDvmVuoxVaBX5M6NbG7vtVMf11dvX2223NRP7BvEuvjxV5zALGv4gtdHAJF5UKCKLiuGjQbJdj1MnRDz",
  "key48": "4dijpoxEsoLiX8N4ANQyBFtCfnyM1J4vPnMJxJJ3FFv8vvyuJN3vHAZYyLvAFBKKZBamNKBDRiBpr25kzyNVPgys",
  "key49": "5mLKkdRc4yMXsRJTqEKDqU57Xma8K9mRNLzqdYV3sDKktU1UmaFCxrFkM3Sdd1h5X72CT9GHSmbMBMnpxw75pU1g"
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
