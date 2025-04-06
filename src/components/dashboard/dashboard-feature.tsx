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
    "NDwtG84WihAAvasndwtFBWcKRePDosPHLjg1RHvTGE6tSz8W6pSQqJWah5fcDAzMCyFDLXb6DU7PPf6PaER2kva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y92ruhWo6zYFtY6safAYF14NBLaBBix9yYDYUxB9pLVkPDQb9V2jiuwx9WNAzD5t57uZmnoXzJRhorSxnMcqFd",
  "key1": "3pc92WFKaHCfQ9jJQxCVekHc3VQp8YGHjdsdCdn5FD8NTJUJxh91EC1VyE1pg2SWA7LXLGBFVThVUvLsn9BnFGKX",
  "key2": "XuDKf3avTJa56rhcJ5tD33W4Kjuf44NAjYqRNURheZNY8viAJeGu2Kt7Hk6NLZCVZztB41zcyNMS2j2dtqAsyfY",
  "key3": "3CrUN1RkrsmsfS4GseJoArCdd2CnhpLRCsjr2YYcpFKmZ7H3baNY7CVzyuy8MYdir1bFEMSfz4sn9jsmW876BhsV",
  "key4": "pEnjAB4XT34h5GJxatpaktao69b37wYF3SpZjcH3tDTYv4nbjf3hsgVJdTBm1FumzsX4KVoMGC9Y5w3niDx31sJ",
  "key5": "hM8ewehohoXJwucZwvwYxSwoWdzgPHvn2NGT1dgCtehsTrUyp5MFojJFr8ZB5VeWAJPvHjYmS6EK1V15vpmcbDu",
  "key6": "5ZtDfSNioRCPr1NJm86DdkvgMdKH7FzFFi3LayRWJWUpdvLnNRWg3vom1ZwU8CgsuREmeinG5qCYCEJ92bNqjyti",
  "key7": "4ag2fTF7C6VUG2P8PPNTJth6h9qVYx2eUDt8Rapy9t1Eo8AB89HxrVaDSpJw8wFbsqvnJ3F6YPTWYREPxv2um8qf",
  "key8": "2uLLUGyZ4LR57M6ncohtggC728drCa5erPpzp3xjzWcXkfdZ11wz149zi5aPBW8JNde8QQKEpQFJLzjgkxzckBVB",
  "key9": "2jsRJXo59YKecXa18AyJN7cnrCMAxRbFAjnLWnuaFSbKaJzNoN2advfyYp4L28r76dKHp5HkAkeGR81mq3cyipFf",
  "key10": "3vJQgoDbToRXnATdfgebZpP82tCReX4NE2ATDFtJeMENikzStxKewefCvUvnNhGQuHFYkQdCLQcUi6ieNSrwYADy",
  "key11": "2GEFcEHzaZjVAcqCQnCvJXEw7B2nMjSqRSJvAR45jfbn6JCj8aPkvZqmFBwkcgLbB5XXrudzDHvRKPiz11Emsdvi",
  "key12": "3M6WggSioDAs3q57ySk6BAT9ruaQundNEynfH52E5pea1PQq4fqa9Gdwy82SPDRgCQhgWNRXYf2QQeNmoiRQ8589",
  "key13": "2r9mpXHRav3eiewmhamkKtoSqea5J62Yjpc4x4vTFmBAdi7jekYweQBfJnvfEF8Lv4iRgXYzsVBCQPoH6ewbQPGk",
  "key14": "2r6c16hvp2jvM8XP95MKZ8cKK5555CtR8raS8F6xSaCkehKuMXwFjoLYDNAnn6W6giEaaFtoDBjLzs5uwPJ6H261",
  "key15": "Tw9injhKH7JXgcoEMgE5tk4acE7VGoe94nbMc4MUNv9MWvMRaT2zK27ifjHEqtAmMStSy87pn2VaspSUHGUxWGW",
  "key16": "5B9DN7cnN9oviFenoMrQ7chqvqyjirzpoS8qeeu97n1Mpm7CEZgFN9vctxwPbmkndmCPQBJmfXVGy1HVZ72vYitG",
  "key17": "yPSabGR1jnsUkseynYyMWDrzEP7Zxgb3jH14MwQcgAwHdEJcQc4esnwe5WJoStdathKy3f27uFX6MELi8MaLWAt",
  "key18": "4EjSGgPbdaKTUJNuMVPuEz7v36uBUULxMJaDUwGqm3hSAnqt2kTNuiRBpX27BZiS9JoP252ztTwxc6YsnHTjtBYs",
  "key19": "4Tz8sje6fACuC2SWWUfBAm48RWtoHkVxXE3hnpim1GErjGYLuoUfLCfr2pqUQp2cB7cUc1gJEhdvgvhN1ohcaqk6",
  "key20": "2Ye2Pq3R2766b1KtMSmQQWiYE4oESCGmiKuofiSujxDGrGgxqzACwzhxsN3WVNnR4X3BRK7ZL8EKmZ71caCZaTaY",
  "key21": "63fdWR7eNKSgHptJf12t7tWa2G3urBdzXiaLjbQfADng57e7QjQ8nP8ubGMYVcgtc95Yt4ZaqHc5envhMRZD6CtW",
  "key22": "2L9sA2kRMh8Y8CKuE8sWfH8PxKfqzJVtBeRH1X5eME9LLeY2NpKjiVHFu2o9H6DJzXvrFKQyUny9BcAQZf2HZira",
  "key23": "2NeHeyrLbKRHFLo3NBxM9T8XQSRhzxvr3u7TKBAXSsCaPfpswvNpcufqt9J4DefSZXVezazQVexL7fHNihnGPair",
  "key24": "5qf6AqsFiQCUNyPvWe8o6pKnNkMFhjU5Yp8iPt2tu99k2rtk6xBBgX293QDNnCvR8u6Yi2Qqt59zkaMob4CqBXqS",
  "key25": "5LcvbYFnrVdP2SfSVtknHdQD1PqUgtFmjuf3FfYPmRDCB1noyfTdKiPxEN3aM3ykbqTi8c6hePZNAbkniSdzJ8ZC",
  "key26": "24jUPFnYChe9ByDXrsF4TwP5PVx17KitJNLE1PpdaViK889iVUFyhGhoxPVo4k5bBv7imFigXWohK5yYMRdZysva",
  "key27": "3KW6pfPRVxPtJmw4ixZDrmQHEeYX65xfAAirzw8rW4c1fBrNr5YFsN2De7yUNnhtoRFLRivCt7dGgZiBkQb9Vdvs",
  "key28": "5FuqZcjvZi23mCWC4p2sn1G4wmo2Zpn9L5AWQhG5SFhzvx5J4KjQqZgjST8PTTfHJqQbVtxhhRyANRb5uxvYBz43",
  "key29": "2EdUCGsbdkg6u4S8XRdHL3FC1eKwtCTfFoXdTMmsVETQ9fuYNXFniE3b8xdiiwFTfMPJN4dqigZ1AdHBkVKGmny4",
  "key30": "2kANA7nQ3UGqSiB6G31BtMURQ47gKnpgHQHutvgGJ1nsT7H8zpaMcs3MxfEZnKqtPs1NLNauZv83KA8uuUyT4yWe",
  "key31": "21g3LRDRWkPNv7LSpA8FjDSTmPW5Cqg4Q6Zk7h4rcB7jnP4zBTuL7Tzo6pRNPWMhpcESeoFBV9iSypkzAMCyFpQ2",
  "key32": "zuTN5FUfFrjjoiJbKXJ32fCA1ySYHBWTqPVsESDAJUWgvMghk2T7TgPqfvozbYNAAquLYFQ8HZr6r3QC7e6LPcb",
  "key33": "43t8ajHT5Dqek3XF84LcKEa7qJWgSRddFDx5uQ6LDsNav2vp6iGMyGRFFvQdoGJw17qdpRixJuHzBwNyvXZ9GyT7",
  "key34": "3b6TYJBe2aCh1B5weDdmaPqMVpuMi4BVrSKR459MLYqcXWHXFKceGj111v9rSiqwC6eNdtZ7XkAx64f5JqzQhG1P",
  "key35": "3tzJAtHKm5LJvJ5nuW8Ts2Gg9wHK9trupFukxPe9Yzc7D2UHo3W4KX5HwVFdfxxrH8KrFLZjRTXEVRi469zUxL3N",
  "key36": "MZ7ScCyGzTRrMksMNd4rhyfbW11WE73LxKX6KNoArsxRAmZ8f3xdfY7mYupeHPtQ5tqJCQsFrkJr1y4WBPYiSZV",
  "key37": "eNMQ7Nyw5pZ8HzXkKsvLBg8c2Jx5x1bAisvCKcDWuL38q3A4BgHNAAxFkUS2Q2mMDzTBp6RUhBou5onFpRRmUxg"
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
