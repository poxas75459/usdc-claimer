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
    "5rNyubZhGLe19Vp1145MYsqkfvRNYWHkgYc24LUVwhhx5Nd2EAvyK5PTc6nrvFFtk6ynDLe99LQZxs1cbCpGfknG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eqvj2kyoY3fBF17zvQmcLEEuVi2LAeLaEa8PKZRfBYE4TokeSzt2Ay8QNZEkQnY8GR6v565NVLoQfwJV5Uat378",
  "key1": "5jqUgNJa53oJn9WUKNpzQSfjT6uLWqpC6xZ7Ad8SLNuXQqxRJwq2j5LdDAsCXLvhZn9wdDHFdm3qjxMGfZ6Wva4S",
  "key2": "4LE3tcjjFuwDUVgNPvwLz1iPYWEVzzZmWWd82WagxUH6Zq7bQgVYkMTu8pZCxRD6jttkzRcoCSNWE1GCc9FKQjbt",
  "key3": "36VfZnjrGptULZDp8eTSFwS5NweEhbKxqxFdWSV61ZHiebLRbMPAefoaEuCRsuWeurkdx38q3pxhfRp3TPyZiF3T",
  "key4": "5oXa7Jo2JkfvWyQS8BfmxBTSq2WtxxSRKv1SSLwnwLqyAs5FUDNvPVKcu2s8A91HcCzdUqZS6EtxWqu139xxFVQr",
  "key5": "2xjJNbC73RD5cpov3d7pBvVbofxRk1pR4RPUDpjog5wpYyPzyUXGrkAVJwjkgM3oVWGzgc2EMcaDE6fVyUsDCiFk",
  "key6": "3H9XRbKde1s4Ch3YTFaXAbRsCqRRAxEYUaNsbhPT2uscvyj631ofpaNa7Yfghu2kVDrhis2ze9VRMXrFu6z5kjGT",
  "key7": "2aDeXr7rcugUokA4MtsmjbPs17aFDxJFWBAqFKdwYubzECUERUwgvWhVbHtJ6hB3bQsxnM6ZYUHTavWzyjgMheAT",
  "key8": "u2tibQLBmHbM7kEEpyfd4gk4ch2x79q3LrANy59F3k4bqBNuBS1Re9W5WxHAbWWnUKFEjKeobraWzQ4YcyS6aHP",
  "key9": "5szdWqXQR2SecxNDzsvRyffnaqbjXiy7DGrhxYhKVEvYAyDTRZfjeZFHcYhUAYhcN5yTrkgqfs1vJ28WigHkdiCa",
  "key10": "29qQZrneLpDswPpmDsVQphBnSCwKr5B2QPcT7ihNs2NNtdgX8KoDgQWDZMUoazkeMfNuNFYciaDsXHDsPRXcvF7S",
  "key11": "5qqjyA6CxDkQJRBAaRJC6HA9dSu71vi4HTPYvfrq4BiK9pUFqnhTMaJg8gX3AhUyG15vAvtiCYPKTfXpyFZmCmK4",
  "key12": "35XYJJm7nwY6xk4nQh3eFg49znqPSwScBLBTFzs4Kr7D7qvg7zMV6KX4pV7HQvd5EHUPSoqRz4T3DqKrD11DBpXq",
  "key13": "3xS12RxJmuQ4uoSGtxd7m1CsriXvmhnyJgbSWQpxah5GZTXWN2MzkRfvjdcnAWXspjCG5vXvsLTMMvTKapwCfNuz",
  "key14": "5B13cXFCS2Djzr2cyZ7MHK6nkKzsxmiCynRGkWvdVVCnzXFQ93J95nEjtbXaEbXyWSPT7SB6wbQyc7UkJxwCPi3p",
  "key15": "HgDB7MhYodjtuPQoTSd7GpxBWcex7vqVPsLeR6hF4w4JAzVZfSiuYdurKhbGupfVrSUab6xu5kCBTMLw8vv4qvj",
  "key16": "3jef6NXspanmGBPzDYWLGHJzWQuKC18QRst917nn5QRAZCtT97yN6w9N7UiFF5NUNYuSWDYZ67EBKkBoM5BLKk45",
  "key17": "65sGUrSg4jMH78kFkMgzFw6NB5AJDPoAVj41ubTt2Xf9b5SbQSVz8VTDW6aL98gsLsJ6dwJn5m4wqKBJ4psNg6je",
  "key18": "5U4uZQcRyMsPUJFF9rxfngEdawaDWbjY8SVBPHiHVhjpYiP7FgQm97FxAUt5VwA7ecnqHp9psGUWa6LtFEVxAfZc",
  "key19": "yYFtTYZUTByyccHNqHU4TVjLaiBfpjrQaMiqLHYtNRPFDdtNqs2woZoUCL4e1oeP2rxu8oG8g2VHVU8VELtQLim",
  "key20": "5yYDSb1o58ydtJzS9GqpHz1AbfUM2Xk9Q29P38PsQNoa2HEaUf8SVTB5z25bNMR2pVVYup1qoPPpBN9Zrvx7y93Z",
  "key21": "hcMUns5zFFHYE7pzTDEm4YsuovZe4hrHcgrSTNeDnTj3gaqu4HhHqoTZSoYCuupEFXxF7zrGTK8crrD8PFVUi4K",
  "key22": "2UZXJ5WUYWwb8WWef1MDGjrY2eRQoujWr3ZQFsVEP5hZkdAHTF8Ht18x68W6QJTbbfEt3CJyd41yNwPbowAgY9uH",
  "key23": "X4UdL3J71spK1gB3TDu3fse1HzivNgotqFixAgyG5jv1ifVQt9qyad8ZChg2pHuLxs4wKmyK3WohqnHNFdndUHs",
  "key24": "3W4ZBeu27zxTReh3TqXZguPkUotswoYh8613krNVQKGLVquKxrnpY8PZBJUX3R4ZbpRqtVmZ2TQAThLz9iXSd8e3",
  "key25": "5mnU58LV9EU8Q9L8wasYDWpPL5pizHhm2mjGDrut4KYGmhvXp1Ei6Jt5Ch3NBZAxf3oBJQR86yvJ4BbASw5rRaaH",
  "key26": "5fs2Y7DSRTFD56bNWAP1P22QAiQZBz2RfWkFRbHFDs6g97MDF31BPjGUAd3xHXcWiB5yiHmU3eNtnx1TNWZ5eFxM",
  "key27": "272S2fq9fidpwEMc7wxuhctTjqjqayYrrpoTt7dKBiYqiihqRRGi3CpCrCdwEMexmyimCkx48abY4gTPG7dDAh6q",
  "key28": "29GThyRviz3X8fJwwT6EhaamdpJ84y3aE17NKBc7BjUqG7guyDHQN5uPpnAameptS94KHC5aARGAsqKeFYzD75DG",
  "key29": "4rFrH8yAdUVCfsaD5TdVc2vRF2AkFGKzKp61PUEjUCFVvpA1hpxMUaXxSaM2Ye2eUxS7KbKFMQ75LsxbsxMXES5f",
  "key30": "ZmFaCgBKi48u2C8CU2mUhS1N8qiuyZXw79bdjEohGMvghqsmGRzsJFqzodyEWFr8V7ymfVR3Cv8oBQ1mHo49QTj",
  "key31": "4cnndxuuRt5P4UUB3BsWPXyw6w2Ms5eVu9m76ZVThjpKyav9SLcZZdtFYYJL4UTrPSpSPMi4cKGVcj9UmtUKdLeD",
  "key32": "2y83pipmzqqi1B6khSujZV26J2mxvGKgzYsQVuS3Pp9XNnRtFEAuknm2nc68dR8Ccp8LaM9SDabsrXDQZwJnzn3f",
  "key33": "35uT9DbYonHrGTdbit6PnBkMbkGBdEsVZeu6oQScYjzrkbjxvBAUp5iersrD73CGWCsVdH2wtmMGHSBQnmJdtAyD",
  "key34": "613sYBKDEHc9wRJsAuTVQiLbxBNcRHxCk4k4XMJVwvDzKpEQeC7qP6Upc6vPD8NrtcPVPMtNbJhkdUs37NPR4Zo7",
  "key35": "sy4qxdsDiCRLbrnZbD7vdqdjFuXxX3aWfeeowDQPhSNWDvGKBBuuV4KJvXa8PgZ5jAcmVxHGsLhPqoTQ79t2f7r",
  "key36": "41DFvSonwY82wg7FbMLWY5iDXPz8b6vmWLydJthtT93vmjrVXCmgK4dB27azAXKgVYuBWV9wScxLW275C4DRQ6mS"
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
