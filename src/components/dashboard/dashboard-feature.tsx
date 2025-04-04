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
    "67VPLVmHSES3GZ8HmYktdeLCL7JwmJA5eTGVGhSzEMpaAmE9poFoWGV8Qo5PAZZ7m7Yw9uoJvyVPSJE2iECCBY19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HoADB5GJuAmScXhW82y9vimaSUf3uYfrUnSHbEXx6BD39RZsixZBNZE6CJPZNQrsYnEphzjtm1Eyw4YD6aMxLAW",
  "key1": "DbBC4yjt2qQLmKhftuS3UJx5bPwMWN3rpJpY1FwAkH6WopthqQJhhuHCigAUiRjcGZPF1owKWz74b5vTcFPuy1b",
  "key2": "4PduyXhA6zEZezUH8k9MVKf8fbCwtzyFGJXaC2PNgH4wDrPieS2zLA2cUWSn9vE8GH9ptCsuBe5SfLy5YtgsnLdH",
  "key3": "45uJu34Pkyx6r143Df3bSwG56hRNM2ZJ7U3W4qQjpwS2uG5EmhbeUW8gs4ybEkZnWevb31sk266hCuKFhm5xTCeL",
  "key4": "65cJzM7r7tvXE4J1Q9VgbAjfezvRakXoASAjidSfwZmvy5BfuE1S5oiqL5wJAjwv3gtCAhuLP1AasMhgmF1y5nwu",
  "key5": "StrKJ9GGyux9FbWnvvKHpxHk1Eo7xhcTLADypkDwNiCn7jHDToHAfW2kBhPozwfxnGxn3ZEfGiCUf6BYMkDRpD5",
  "key6": "2yGDEoavs3d89NMEqEjCjVH88zLyzrEsak5qnUarQkWDRmnfnKTjvWZTcTfZtWPeDCnDYgwvuuf9VgkC9XptbtbA",
  "key7": "2bMs3n8VGhNSh6t8XtpecKkEtpz4zdeUhsZYBEvtMdtDAZ3xbgrHR3f2AJJ4XiB1MS6zBEfwNbHQ9URHriXDj1ME",
  "key8": "xcbrBfCANry7XVgphii4QTpWPxLffFPDjao3UBBscmyjJMcMAq2e3NZtp9ixYm4CkU4auhvo2SapvrfcioyKpA5",
  "key9": "2aiFTCb1z1vaph4hRmioSDinrTcBbBacjntKw9yh32bCjatP46w8Hnc3UWzWean6EXjzohnZeWrBFQCxv3enKTgz",
  "key10": "4U6cCwKkkSLs8ujrKrP6hmppvaed5bZrzUbjkay3wsyyjghVkm7HZj8gnMeFbhro1rhXyKq65xCzVr3YfyATu9kj",
  "key11": "uFCSYCCXd5CG2qoSmDqHAFdgtzxmCWZDTav9qgptCNUHqCEeu4zSzNCVeapfA92YxZQuiuiqfPATWqBAzEDVsbv",
  "key12": "365JmRzNQFbJDLHkgaZgCoshcpFoNkJMc3QY8cLkx6uA8J3wdyiNXtWrxyoNNRVcKZfTKiaV8FryLnHam5NR4hMc",
  "key13": "2sGEpH3HjD7GaHezDJCqYDph6PzFFU5mAhyXqnLTWXRqUeftkRJerxkJ8FABpniHUfWcsrKkM1evGXopJn7FZS59",
  "key14": "4aTkHg3RXVtbSBcHEvNKPxbf67beVRBiasMqJBGZqE51HNv1a6kambb3dtr9qUaZsn29RaCMpHL8amkUnJxQS8Rt",
  "key15": "5TgV2MdBpZ7u2QXu8im6exNJqgS7YCexPkzomRZU8jGyWnoGupK6ahByrqZqgTHvwjpuaoQBwZaSyL9JoaruLLmG",
  "key16": "5XhCoG3FNejVLvpZZG4gcWq69SqDNvfdqxntQqC3Kee2mMhqPdVNTHLSEMMAcMy6bdgvfWWWJ1jV7TwD8kMcL9ga",
  "key17": "2dSwRRVSQwuyjsCTVQPDEquNfb2ndJDjsX4rpCKiZFU7BXp6yk54Yk6BNHxNfVxkTmReY81FUwGvQnWYEfBzeXeA",
  "key18": "3etM5tDYtExAGhnrKSgD5Gtgaz9uFKtTk3b6H185W9GSYgTyWjFJgsqQeys4JPtDSdn8NDdD8n4JLRLSkgy1Gu8K",
  "key19": "5sSausDBVwRMPYriUoC9cmC5wGSfV5HBaXM5QpztQ689oxBTzmFU2hHd4APywkSxGyNk3d6PkGt3jQVB9s2ZXmR9",
  "key20": "54P5mfuRFM2jBqGtNWK9yEAiihNgh9yNSrNdLhG9JhvB8DafEHXXWK6tBmZ1HKaCuDT9BJThF6v1GG8s5BREVP6U",
  "key21": "59B9GrxjJy5XNv893PNMhzyhQUhGCR2t4cqQUxD5AwDZG1PB2qakU1uuC2AWBRVvceQvh8A14TRPFd4RnNcdfnum",
  "key22": "39LwFk7d53gnAb6sfbCpcjP9Dqvry6FJoL1C2nUBv2twRiqRegDnV1r4iZ3D74CdChGxycDLvEzqGrreHCbqYxF8",
  "key23": "2Nxd7Q1k3moxipHiDz1aGuvw2usNGm982PzSS4HH4fkjyxkJvciVLFrZ7UKeVa9nhbVgyuPLspzKFrGroSSChEuB",
  "key24": "FuUijMShn6aZzGuCEpqrsJqE8MyxGzqdQNXYnKARnVRBDKDfFT1Bj9sBAZh4f4kSosDXKE8xeyCCxQ8uXj6bNzV",
  "key25": "4a371i3Gv1YSRkTkhjJh5p5dYS5xTMqT4fJWVPME2oQ5YWr2yd8pcLeRKKRoW92dbqTyQeCcZJANgpA2uBT2osQa",
  "key26": "3Kto1ENWBn673TRCnC5vFLza8ZCAc2ALP8UXSCeztMWD978zdHTyDwGGf2SV5xs5CNdPSpUuyTwbDkZ2hU8PRRFQ",
  "key27": "VeW6tiHhUBVaEMxUu1sVy8hQDUFbZY3Z9CDxdHDPwRCTEhonKxmN3omFffkETQHxLP5F62sKFgzNn9RnM6S24bV",
  "key28": "2faLX9d6VoMxwZBHjsjdUBG5WwqNsFQjkywou1qdz5YyeBGaY2bh96sc5FboMauSmBHaVpsdLRtKJqVZfSJJAXNY",
  "key29": "4cEpxKqhye9CyHJCaTrQ3mfnVPevCrcQTgwuoT13KN8aVk58CWJiCp4yjuQ6d7bZNGiYjGNoYvSrZdJ2urdur6Cp",
  "key30": "2mqfzEpja5DMEwrCzd4658cprypzFZziMf8rfWRCUeYU8CcExU3ATZYAzAgHp8V6BAkDn8ay9aE9ESbjmt8T21Eu",
  "key31": "3YWas5mT9VdRDFcG6gMe39pVP6Hpkb51k31TYfpagUtJCZ9jKZDrSG6JQk5hXAVVJPmjMQ4ozfxxXPHN6Gk9b7Rw",
  "key32": "3ujSHWJLhN9KGPQUfh8BDaAGa1VDFhppE87qFxwohvxdJZzpyjgGWuAqCc4JJYvUn9sYUM3CbPjJ2VxWJEwGpGEi",
  "key33": "4LfnvjZpqkFt2rQBPDZpuxcFr4wwmqC2ESxnVw4tkz8kLAey9cmg5ajHb1LkwEV8cBRV8D6YN9ojvDCr9bMRx96c",
  "key34": "3DwhVEC3ymJHmjUx5YFrJAKkRBnEqvxYuzJHSLTR6YisAjJznuDoHawVprv7zj7hGwjz9k4qZXpFsjiPBoY393KU",
  "key35": "3Hn3f9ghWdFzMf8Huua6T5aCBUVGivefamcbvEHVY1oybmXmj46Sds7y18riKWCdhsLA4bQB1R7Rv3zErpH9D4WB",
  "key36": "3TvGEmC7XqXa4rArNbARBQu4LS5E9d24GfokNcRvDz5LnJd8U3tfKiwrGv3xw7ptAAi1rU37wY9VB35vnC2vNsgu",
  "key37": "5CyPy3yGHvppXPLjTx3oszyf1BbfVch4GyJdkfnDMNUhEeYB9bNuVEznSo71EDdCmSjj1uhaw7nfaor3fJfDGi78",
  "key38": "4CYooMvy3xRgHvWu7tn4KnXnRZq7aQBVJrfYBGZReDESADprLuqMURKDMsYwvSAL5fTDAnHJTk3ocEhk6wWE8hx6",
  "key39": "HsXqGo2MrrJvpVBc9eHVNxFXpcu37DHd7JwaJBFwD7uC7EKK7ANh5KWE6DAEptJdAET2w4M5jjePU5YuME51Dww",
  "key40": "4CDwkQoyTWPaKsRbcF3yysnyHr8nwUVrZ6PffMeSeoEEFkKyHZRV3a1Gkx13FzpmHEdrnxzm4cMjuE7N9wMbXqGN",
  "key41": "4ko1MtA8nsCJugUSMMnbYMzK824kbs5euSSXptvzJwxVzRkMsbXkymrVMxb4Qj3C24DE4YqxusJQJdWn6tok7to5"
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
