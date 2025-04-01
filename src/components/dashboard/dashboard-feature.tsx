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
    "3JUPQUTKuL6w1SYRLc8Y1JYe1v9U8MCthzi4sQyoQd99jc2HFFgJ1NcrESTsrb2ryrEvjgGRfmfdvKEq5A8XdQXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ckyFxB2CamKCYESCvgca1khvZFZvi63cgg3GNPGbWLzyVzhDHRpVWdJKxwxsRrBPhLWiS6RZDcafrqtBfz6TfUw",
  "key1": "3h4guQK9Kkq7BrAweje5DGT61eVkfNCbiCdTUUHxdQZRLNftpNwHvACu8Wa1cr1vizbALva6hmaBEWQcFqKn6ddo",
  "key2": "5ExTQAbXxBSADFQKXGVQr6KPu9kr4VakHWGsowFvxqjLniHCscLS6ZxzYubVR9mNLTa2Wm593xWqfCu551HwiMZ4",
  "key3": "2BNfXDqxeHrh9rEZwnjeptKb5ikUz2nGpbqRR2yQfh8Qp12nuXMvNRwhq1VWuwUYTwkoFSJc3xezpiumrfaFt39q",
  "key4": "2SPP7HABPPHNJi8mWvjKKTH3yNkUz81P2bCuMcCLgAX1oGWooxhqzxK1vS4pYKGvjgdj7675FDZi6pUWB5FAgLdc",
  "key5": "vPp4szECawtwBeZ6tDjQcz822nKGe6GnDMaUUkWJJ4XqKAWPPgF8UenRkSDWtWikhDBPsYbZqLEHetsiGReBNM6",
  "key6": "D1B6Cj6W2BgxBYc8aP6KzxWNaWwtrZP5XuZqWxifwAV2zJ3GMbjxRcEyCYW6TmUYGLqRHR7vh9ZNvbYJwG9z3mM",
  "key7": "2C6CvnwzvJk7BeWJ9u2XpTHJ1FoYZ9SRwJZnuG9TuMjeJRNfv9oD8K6w1XA4BmKGuTH1N4DnyEXXDa6MYeSq8HDc",
  "key8": "2sVm2cH4tLpLNnKVj3jHnsxYBLxRW12Ci5w5hqjGc5cr4SzEsmLPHTx7symNgDpJ7P4sGZ9QQaRdHpMzU2Z6PQgw",
  "key9": "EEXEq3667YtUy2K3BPXXeQ256eLeLAcr2WUhCdzuyciiYshLJQwtrUTbbBSs1XUTs8G71D5rV1kix22bAR41j22",
  "key10": "53WDNhGvucnxQkTspoa7kY4MSwsD8CT9PqMuh5wj8E2jdxQBLEun4PzYMMA39N6ariUC2z22RMpGS4tKR66t78Xk",
  "key11": "5pL9HigAW8dVa4Ug6MvUF2fxoF5HEgJ5FunzG7bW5mFDbWpWr2CLfpojiwrtv7zUV1q58VVFS4YQxyUqGXjFmunT",
  "key12": "fFRavXJSfvipW4kG6ATUhduaB4kJ4nqJwnS5ZcbvJtopX8viFfrZBtbXhDMzxPRSGS64oEHGETnz9jBiUu4wCR1",
  "key13": "2gKcR65qFms7EtaCsjG3M1ZyH75ZahNVHTXCQQRtJBx9EtDjRamekJVW7683QRp6MubjyBggp43pxdc894HnrCm2",
  "key14": "5Evno7sDASiLzmuQ8SUHt2VfuE1gPtVZ8JMKEBUhDCL2Qj4Ev7GMs24CCZxyqze1XTwqv1HcMxdEc9smpQrovX1q",
  "key15": "5E7RSS7pt4NhzSAPG1NF6VbJvtek6My5GV9wo32c8ujnyj4F6CWCRTxgCZnCoHQ116S7daBToXrwrRvpeZa9Z4Jw",
  "key16": "4xyHKwEegu14SyYxbbMpqe7Y9nUdCc5Nu6pnQdcwEgdzp7DTtbngTju3n7CMacNvKeNufWkHzygiYgToK5qzZPDT",
  "key17": "LFoRFHYjEJbaFadmLmWAEYPnPdMJzfk173jUsimTi3MqAGYN3C22Ys32U2Xc6x4P529e7zrFqQy4PXQabx3vGVt",
  "key18": "3ioHthyPvzCxs8WaEaapH5roW3DBxc8BuGfVKvpdG1V5xNeT7J7choGciRTKYFEiux5cqQ4zmvZTTrR5LzaJ6mBR",
  "key19": "36vLMihDVTtxDfGzixZU7jajVGPPRRJnY9m2PWpnmCx9CH54zk5HLv3W9x5bwdnVpFQKMtsL51Fw6tqS3VYt4bj8",
  "key20": "51jY1wo6BJrDQRcaQkuSHKDtrcjCQUnavERePik3HYy7JqjdcEFeYm7mFjrUKpeX46hpATaEm1cHRB16NGrWFuNJ",
  "key21": "5YRpm9soixqLx9KEvBrau1Fw97tSuQ2uzdPfzqKw6RMPXDLgAQ4VD58csznfHZDEA6ELhKB66aQVMzuujXVRXhs4",
  "key22": "8SSJPxoJapMncA9epXmvPkTVqkJ3Bn55uc7k8ycpWZFn5vgcaPqSXzCJ4ogsGregHnarG7DuV5mCPUvuSNkeKpX",
  "key23": "5MAQheUQKhWjGAqXDtDLK1owPWvGJ3APpAaL3naH7bgGPYjJfN18ByvSkD9Xt4FoQ9MeJPKsJhjuBFdGHzRaA72w",
  "key24": "4vHsydK4BxJxYf63J5NxyfhT7D2cteDtfsAaCuj5PbLpCy9hYyTwJYBzV83vhsPHhLMSCEYCEXf3ku3SfgLe8x3N",
  "key25": "2CnCwF1vZFE8WiWKaAyxxRomPVFGP3hkNxP6HG1rQHWGX6TKaxCMFqNcXRtC3phUcLRtBemRg5hkiVYpnQjqRvLP",
  "key26": "26BeGZay4833JgifsBhN81dVcP5uz2LZ4pnp3pALteHGX5fsdq7Sbqbuz7r6EpLbkjpHMjwuapy14x5mTU32z9as",
  "key27": "4nEAh3ALHinSvih4Pz1y1DJbtsWbG3S5vG4rMeheAFh2h1TnDYrXGrq6b7HREzhZ7nbRLvuzzTy27wTg3d9YjWeT",
  "key28": "4CywQAYePisuhuNoqkGgiMzmhxyCPtheMWQ62wsJFva8upLJeSbmnGiigcTx9MpkJX5VZF13C6zRkS9MMNyPvsNk",
  "key29": "2paekATRpDiACBWwSQ6nn2XZZgkgcu5gWeNTDj5z2hkFM5nEbR5ikY6WkBcWUnarwtMBXAav8Gbe72NUZe2if7Rc",
  "key30": "35vm42aoS2Zy2gg4NteRtTbMkWyF5WrqoA1Hfyvshh69PpzULRQW64WXdtNc7M3cBvVesWS9U8y59oaMAxbckA25",
  "key31": "4mSiNXi1VPBkihbwQ7Vmzukmg9XRMgWJbDwdCuGaf7oGHaXcq5jQiStpPbshVJXAke7vtrzQZbKWbyhDCWrPBaxB",
  "key32": "28mRMvszVSmuW2P5k5r3Nb7GGVyRCvCzYQSH2QeDjsvKMUKNC6ETZwKA2185iVug375MYUgVRFwix1PS8WxKv5iH",
  "key33": "2N64nwxiUTXdNjTaAncYttMT62jRJhwiJ6Fi5VFkrpdvYJXMnRPRk6bnfF93L6NT7vvjETSmyWBcM2Ps7iTZPVPy",
  "key34": "5ncRSVqU7GXUE9Dcsuf3ESYm7hKwSLruV4UWNysi3FZft2Yzg63JSAbwAcdzJvcbuYVjAi1S8yAaS2rcb5cJQbR1",
  "key35": "2cwBrfiZu9xqA5rxCQ6FkuSjKX4yaZWtTJmHxSA3QxFBRaZNfusvaAuyEuUhXknt5aphM3RB4U2GmqUL2Ss53EG9",
  "key36": "29AoVqNir1WRV4xLqSgpgjSBJW1ybx5ebvAin35b33d4XKiUQxCTToxdmfZsxrEFrABY5WJJgJvb8FQZmUy7EcwU",
  "key37": "47Zt8yvKD9sm6FspCWA8PUHApzsMdhdzTZy27ZWWCThQSQd56R7HidZ8ftBhrJiSmNgjzTooa6CKRqYUXaHF3ant",
  "key38": "3MjQPsurqrowzGkkeB27aJPKsq6U18d9f2TzsA7rNKb8JNK2K7wCj8eKwmfXYVjxZmAn9Ddv4GWgd4o2UEc3kiKi",
  "key39": "3VrbUMFY5uJRYbjHJsVTqHtwu187DqwjFvwuMGAxvUXYpoTEjCVZvR7cCSXcNDXPK6gjww2kXc6R1StNmv5o7FrP",
  "key40": "3Exr4PQesFqKVpv5ziAxt5Y5fJJnzj5ckL43sk3LH3b2LyxNGoKYa3ziyDviiqgwpdUCqmvuxyDuoLcg34JW132X",
  "key41": "2j5BLutFkcxFYXQ6PpewMFE9v6oTZt5rCeXg2YFBg8AEKgBA5kfvPFWDDrGq9ByWcmGsivfh53namra2H6ZmJATx",
  "key42": "2BQGdFwrLTYrtNgB8ShLpqcNkWoAWTDqbF1CdArN6Lr9XyvjJjNTJf6DGZVdiNJp9trvCfkgo4juTGj4qbRTPN9G",
  "key43": "5G1nvucnHLbqYCCV9joT5dKWEmtYhCE6GhrvErYcsfRQT83XBho8zXhEPVizcLNWnyTJpePRMbTkDGc7BzcNh1N5",
  "key44": "4xZVzYDW3w8LTyeiFeTqQniPTr9WYKTpQuAdxVEeQ6hUZChEKoYu5bvGtWha5iXtNXJ7gUU9zMtGbhyvfRuZ5o2a",
  "key45": "5jxQr2tLaV7FowXweWSXKkuKbUKWRhSe8HNQnwYgE9nfew5NHPHn1XGrUV9dRhiMxDHxrQTC3XcribpD4SULUN7A",
  "key46": "4FJp2ivAdGeQAzEwCjTiimqcx6Pt8WE3vRXatq77QNrBmEfMk7RmCGQhnydZvPZCgku9LjiQYAfgEmMhhHK6sE7k",
  "key47": "2sXGnJtPBCBSaPZt3qnVuh8DGPcudoAjodKx8Wp9nVRCs9fJGGLkMfxGqpsQJzSpY4djx1ugMrUApZHKZwYrhzkC",
  "key48": "6DnrSfMRThLxpQAAHg2SXTTU65YxLfzyEiq5M884EWuygXzZemmXxAAHFaDbHKnXRwjBqsLpmgZkDxw6Wz2pp7s"
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
