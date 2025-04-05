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
    "22nwqK4eKJAkBEWEUUM3pN2D1AvryqksRtu2pVq4NgWTG7aXgcqV5B5TUWUof14AwpRTnEYTTh7Bine6AMYfKtRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sSXx19GxUskDqEM8xf7vH5PCWfdVRQzUpR26yHUnVmdARTsLhFWdWaumcFLC3BvmRjRxtJyCfuzywBfKeJ8Kzt",
  "key1": "wQzhnX5AFaeUneTAGXtjxGtRBS3SNqYor24Kx5jMBka3hiu5R7AeH3PJJTTyHzsQTLoVnpzzm4F9zu9eM7ukNYu",
  "key2": "3Qxfw71JoDHoJhTNPfuBRK12VQD9FXbEpDNzV3UyE3GrQqHUQ1JUGyAJ9CiX2uU1mkEv9j333cwmgiSTGCR9ucSa",
  "key3": "44QoR6Zort1rHqAsnzY6fCcLmBeXDm44BXf5EiEiSSRt7SYnbgDGq4TCSxn5aBZfF2epa6yQngAwB4KUHyx143Ew",
  "key4": "5NL9d6nNmH27Xov3b5E5m8xYRq4iiHubYMRXcHvDezJVn2P8bq9VW31zwY3hErjyHQVidXVCZsxDpNRcP2MKS3yh",
  "key5": "4BRSyoDR6RHbRmDAK2k3DGEjZLBYkRXnKXiUHsQGgCzQJCJfnePitqfk2WTnDmEfDad7WWixEvktPNWz8nwzy7L8",
  "key6": "3f1AsxPncK8e64y9Xs2zFrDqdmJS5eVHybcm9t2ipBALnn9gJMdBHUjmDJ44RfJWHJcbJ1Xx3xcjG9AWWraQht2Z",
  "key7": "5yaiSFkC864cWhDhq7TsK8jt1wVmamL6Fp35Rmvnsw1HqATKfnePLF2LVaqBrbUrUZrg12jCro1c6StnbqMWs7xv",
  "key8": "4ExgA9d8cSuTPXAdr7m1328ftBYU4oJdijDDypPGqR7tSsgbV2t6NnPUy9wxn9ybqhQUCqTYZzBQVFYsYkpuXFd",
  "key9": "4x9a81aB4gLF8y2Nnkobm9vXfKTnozhXJQdwFdFv1pumrc4zk4cpQ7TtkNBCaBo42qEmJ3YryZXsniZeZqpuPw7r",
  "key10": "2xwRguZdURrmVfgufqCHmsfZYSwJsz2kYH9jSg7LBDA4a4KGmNn1otpHhRgcFWGnUWWhfkb1X7mmEUfjuFRwVMpZ",
  "key11": "3w6eq2tYLWpNb3i42kcJqJwdREkvSp6tkQAhTkNDijxdmS2mvZKVCUZ2BQdUoGKa84DgMAgw4HbKxvEuGgvzKzLX",
  "key12": "2V37tAtPhpuRRGk5LM1dFrjHmqy5WJd24jyPcKxWHjV2sNuME7Q8ZQhNLMFDStozkVoSNDJyxnYfJRwcW1sC53h4",
  "key13": "5T9fNz6Cr4Wm88tiSwMaXo1prj5Gs7vNh6xS7pfjFLQGx8oba31Fi8uaWsXgzFiisSJEufd1zhF8x5oSZ3NRPV1",
  "key14": "4pxwoS8ZJcw1J6GkL7ExwaS4XxGzXE8SVunEz5ey2s4GBGBEBjpwdfqc9kqwKorqNVvoBYzHADFnJTevEj1pY3Xm",
  "key15": "2RBWbngC5rcUkin2KPVYf9HjbNVjLFQo1rpVv1fSeyjYULtgH7YPoeh6karr1fvfsTbbsAsLtYy79Rq1u1rCfY3s",
  "key16": "gbEEtLffrLteqZMXivFtE8N9SjVSWiMJyqf1KmzuNzgQd8An9JTQWXJJVnKiCgDnZTTYf1hRc59sfhTe7vyzrAk",
  "key17": "2pSkTb1BWKNRy76UTw91tmQ84Rc2oSSaXxfTswrcLbp7di6zDiVLA99oALD3fAoSoUTChxHN949R2MpRpXTmpEF3",
  "key18": "4V73K2h9nhwQEh1e6r4qAXZiy5d9FbBto3d9jEZ6Y5ywLEEDeZcJKmxi4aqUR3T656WFDJ8CmN6XBhhUEGPiDPNi",
  "key19": "3WCwefvqEdrpk1Nt5QWmGaeAKm3gRRoBxm4zRHN9fbtSqpVpXfSrd2ET59SBoiD4XbVszZmp5qJUt2j2zJ9WTfkD",
  "key20": "2YNyf2fivvCEXmDBdxLSeWXfyHJekDDkuiomGs4CufPvUxdqRsdCMUyQmhxyYn9kQTXpbbPNffLA3CvX1UGct7TM",
  "key21": "R2xQhjm4ttnKJr8HXXbShjzwvuSGkfXkNqB3YiGaKLFs8oP9jDdTZcg1CgFuUq5izMJLW9UjGe1EYBaD3i3oMNH",
  "key22": "c2YKgYLdj1vx5QEBy9uqZKncDthncBcec7siSN7jbSXPkuaGVziK3pitZvRGhN8JrKN3VnB27MuBBux26Z2JhBT",
  "key23": "4vXwxFMjJ88W1fSf9SubwD3cWkW5rxFVwECPwNSGcGjJpSv8e7RYSMLyYK138tC94yB3jRwKLuZp61yXRSCHe8Ax",
  "key24": "4NyUTnz6b7f42pkYyAp4ii5tHhEyygHkq8sm3uENpiBKcWbxd2wB26udhkXDNpSdeosMpFY3AvJYQoVKQdjcDKqH",
  "key25": "XmLaip67NsY5DJsWxDHK7r7aVWCXocmMEV3NbZWpAJ2vYVu5sthsNiBhmLWP7iiQKTMjcCquFiaBDyg2XiMF5C6",
  "key26": "2WjyngmfYWKkbTW2ig7H1ngxyrXULGGeDZsCRAtWe7CaaiKbNRYjQMaB7hupsfRe54d36hyvevyagoiFnR2TvMC4",
  "key27": "rodhiR1Hu9U4qo4Qn7UahWjdTiNQjgZDdSgk37p74CA5tpnnZXxenx3BDWTop5JcSoBwToQAGNP1ftRFotKz1rk",
  "key28": "4bmf6Frrb8ntrHCq11Swt9mQKYWtG9LBKCgDP1r8Asie31ySgUnJDtJGmUTqy2ujtKwPagUoD7CPhNsFunvDMaxz",
  "key29": "Nwn6BQ92GR6j8faCkM3UQ891byJyVvuQKYFHTLaLC4UojLNPw8CKAE32N3RgNsaj5SHYHTpeibLoo6yfaZeNja3",
  "key30": "o8xTBem4EPncWwpcJ7Ko3yBHS5GEMvMktA5uwQp4SuG7rrtnW4shb4gUm1JThGJBHDirDst1mLWmDBqTF6rvcqR",
  "key31": "e7mkXXm31q2NvwPUWDrPNKTnmGY8Jx2pnmoz7wccMuENTWTYhyxFVrDZmTfoj9X3hdHhKigCoHtPHfmYT1K6jJj",
  "key32": "3Te14dMKfYCiYw1v2poGRCem9mrV8edZw6MQbx91piK9RgUP2k6euvRfp75teieGeYNvRGdDukqHmDi8QoMWsuVY",
  "key33": "2RSuUokXXNSmmDxHc2R6AtMz5MEHmThsh16p2hP8HeQmuMYiDiq3NctYZaTZHvsjnjUSkTBbcn9h9sYSSRc2DTqX",
  "key34": "eVrst6maV2mAtTy45vgT4F8zyT9gjZ6T4Kd57FUCaUNSJsbDVsMMLXTsmgaPhCE7Ue4ytxNv3bhCyfEiQCKe67k",
  "key35": "BgiG1zcuDEcPrKdoawCHUvJrjNJfP5yGA59EPMxY3wLkgP6DvURqEXDDZdVK26MxUew1v3UNY6Ufc1SPwFXvg4q",
  "key36": "2JhhMwbGBCYfkRmGQXX7dpfR4uWqG7Ngtqj3LQKprWGPYrx6CNzQpni3jnGVrt7t8c9REpYQHwr13bh96J6hXMUn",
  "key37": "62H8h5U9HGyQxcAPqDjnvwBunKTqG4zCd6NZ2JzD8hqX6gc2sKvAfhx6iudArUQStb9EfcZr6yPac4Me3Ei3WaYt",
  "key38": "JAwUxEPZzfxBvaNGByFze5YrrDccEjJ5XVP7Xp636wvBcGRBQThfyH4VCv5Ji4TRmhGxeK34sru6vsf9Apbkrhq",
  "key39": "2EZdDp5h4xM5JN5KdVrRDyGVvCPVScn9cKGc2AxV6dwH7hAHMx1YP1YvL8mCWYQKp5C3dTmXucYRwtZM8wuXPHPM",
  "key40": "3NV232U68oWK7D8MHqSha44gAgiy4AuTDM7NHyGbd4dpJybYq6rx2Bjjx6QUaDzN6uuqVhjYqsnm2yJBLpid17ay",
  "key41": "5qFDdqNyeVUzmgJLrFvXvBPs4cWfS9kBZ2cbmppD3KotTUrTx5KVdHqG8dtGnVMryNwgeUnKvrLxYnCSG8qbHS2M",
  "key42": "51ZQRPpn4LHP5A6bJ9sht2LkPE82PybujGNpYMaBJBZYYwA6C7fusw4NXg1xMjfUAybPFr3hjsesZg3cFSnwbYT4",
  "key43": "5s8PsWW3ZNMN7Sdbvj1ogpFt9tFxTmhBNwxwvjm16xwgmhu5X5ZVkhYaHj5uHqMFnLgUbbMqdt26hNJ32tXFky3R",
  "key44": "49i2k1Pa3wjVo9i5xLezHS6xv9YhjNNJ6rqkciQvYyZGEdByMq1npHPX5YqrrGpSn2bnzCt9KandPdyKuAQnTqCk",
  "key45": "2mPQ5tQc28cm5dYZLeSeD9gLiFCHYNpgCRKdqazREpJR2n6SDUcpvUxZwXwstRFsP9WTRPG31XMYgQQLsfWMkdSG",
  "key46": "3Qr2rHk9ih7jkxZ1UpQ7wZaNHBxaAaNTEZxTcrgs34cZcfncq8WED2p9EDzAhWTERcdaandpfCHUDWoFruwfK69W"
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
