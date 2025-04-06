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
    "okyPyjMNgrJ4b53GALoXVrpZHsT9ZxkqRxzkxJVc1A7zSX2pSFAzJ98c6Sfer2VruQ8uuu2tqHmFAoxsz8HxpMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DTb8iovyjEx5WnSHznfar8xqVCwX8LaaPRyWiZh37H9gzpe6DtxNGRRihHYjg7d8nmP9hDUg6ctc678mf9qcY2a",
  "key1": "3GgCZ7MNpQn1BnBSsMbYVD1WUuKF2avNScEUvriYtYaaeGvLZusit61zRyLMChX4bAxiez96J5VfELKiRpBotY1j",
  "key2": "3NFEfC2TJ3CNqu5bfQCGgJnhSTXqSAZkRehAA788ky9vfJGQr4DzFvSUgF7C8bw1xvBG8PkMGbzUGJRaygGCECTy",
  "key3": "4u2XX6eh1g3QTsvMk3PjbuS5Suwam3fZMX7QBEus2aFt9CL29M8sWyq23Y8p18LFca7V7tpgsDGZ17s7Yq7ZQHUB",
  "key4": "24X4MBxzThMm9yeXs6mtszzpT8c4PfdesCfLzyjwMcPPKkgRHFW2DPYnPBYfjnds951uW4ytdjxU3t1rkJBh8Zb4",
  "key5": "4R3Y7Yzw98pBp9pbKXoEPDVvEhPGSYRTeHC4ZpGjGSYiz5wiSrEf4V4SgD5B4ygw8eFLJTfH6Bashk1Xy1J6KWL3",
  "key6": "2e8ZyKFUS2x7dNqYZS6z1rZqFSj5gXvBBMnpxLti8w6GXkGraQaxDg5iV1ehk8QKMC3V8RaLLgApYfrhKjcbDas8",
  "key7": "38RYAB9rUH5BRCxZeZCUfrpceZrM3ZaLTLpNVUCWNJRwBKLyEaxjtod3DDSSKJeaxrMXQ8Wj7PJLuqJKcmkUFkXZ",
  "key8": "4WzgpgMtSJQ6XQo1hCddGjKcpkWU2ktzMFpyhyr58yGqMYZhtRrsjV9D12ewfL5s8T76pBxaWMzTbyaBSRdZorrh",
  "key9": "2qhgWkj5zdaAUnQQLRfFazHZHMyt8E62tVkUqqLwdwRYnxNAuwHF27RotDFN39iMFdqhQXmC7rHqGEgChAs8VQWK",
  "key10": "2GH9K94CHVtXttFPh67CrAVFZELGKaBH8cE3PpFHZziTMLrFMyZxY6U6gNBiatFaUq6NxcNW98GsdsKVWdsBFhu9",
  "key11": "5HRRTzH6Gres9HbRb7bXZvg4B76WZ85ppzhN8qrB5Z2qMpNYjicKHTmYFEUGU5mctnWrQ95X6CP6o53Ro48duMuy",
  "key12": "2i287159n3iy1eSLqZmFarhcvTsUqMx1qRZBCLSBpqQyVxRTEzkwX24ZpETRehjVNZxaEmCd4kWLGfcV6TGpKgni",
  "key13": "4spKMsNJ7GLZiUg8rATvDcKRZtNzX1YJPRAczBorUjqfbqcv4UHyHdVzR9gBNBUAFYkoMFw15o7nNYbq9bhJZqM6",
  "key14": "2MVW7udk6zUL9a2cR7YbY6QMvxarZF2Hm8YUD4YvnKrBFHk8DP3b6WQp59PkZWs4MT67rrh8vVyEbcESoifeK9cJ",
  "key15": "Wef6LwrXpVYfujBp4e8kYeSxwTFvA2zSj5Frmma9CNbg6ZDVvVAmnawAXknYN8VYFgWPRbbN2hENdf4xPM1QKLv",
  "key16": "3Tq22Hio8NXhjfk6io7aQvMNMKo6rAxQbefeLENJ547WXo7HacDnp7NDmV4WtSFSQFsrQQ3t2KSEC22h1YeRFujx",
  "key17": "3YduG2TX8iUhkNPJvznZrhDttFgcgNsdsSurEcPZF116zoxq8SwwQYhwbEwjaiczm53jgs4af9WmtSTtTx5zcC9R",
  "key18": "2weQWzGeA3wCHnJcFynxE953fksarjRKV5KEYxxFJ4WzmpEcdhoPd1ycTSYvbSDXaSjDJwr9GQ6uMn7R3T66eGVf",
  "key19": "4LUVKoothJiNW4TTC1ar93C7vzHUvWU5BbisRCqN7728dqKMMFw3CQexJKo1gyHgdULZ7Zhd7V5dMLAzhQV5LzLq",
  "key20": "3uX3wiXruUyCg2Zpbf53a7zyjtXfVw6zkypXVNccdyE7s44bhH9SaKfYXBVr7kTCBRGqBVHwupdNQhQtVPuaRQWW",
  "key21": "64Zw4q8DX7K9uKdD2aXmV363i1k1u3sWkDj2sf8u6A95479w7WndemPi2a4vYQW4ZU6cT7SCFzYE5kQhaH4f6oRF",
  "key22": "ysp8RSaj17KfGkDL3HiXuECzJydnmBJB9DMpDG9QGu8N9Q6tmfa8RPht6jyjpno3chBjEikyWhkYy2drtmgQJEm",
  "key23": "2oNiRWXZ2fTBBAUeVxW9a3e4MGMWVTL4WLYWuRHwjhptXopMu44soS5TA8RFvFuwYcwSsdMJQCBDgsGMEqkH4sLV",
  "key24": "5mZJWk9vQLMGuRAnJrwmrGmChhYmvxr5Ad17JeMYWT9DcKYrHPDnRfkVYBwTXnHgNEXpXkgLca298LN1Emxp6SxB",
  "key25": "2kjYEJsvenA4S2Yis9ZM3PE6xYV89RPac2yB3oymUpaGJhaqUrbdxeXjHcEzG1i1aBXhg4kXhrKEHHJEgeMRipc",
  "key26": "5Y2Gj6NPLWEXCBeFysmcnHCjxUcDUGuLwUGJDoqx2Yv64ANW9wo5Nc57N9Vzn68nhanekxN6JAnEwWecVKb8Qvq2",
  "key27": "5GSt9Kit2wBcJkWBYiPk7Rzceo2MZTxmvUCJpEtJ2sN8gstR5iRftesBbLRNtnzxYUa9o8ZAR6jfxdoYfGuEeXcL",
  "key28": "B3Rcjm2BmGuQGCxgy5DUuonLgcA9oLcjzJvspsLRBVJEhsphpqD4u2ftmRF8sLx1Hnwn1diTkL2rnt1hbPM4yLH",
  "key29": "2pgB56MrcXruHPVR2pmyMhDPmdKoJB2cCPztLE2RkjrwBiPLXQFoBnSQxr2RHxZhCqtSvcUS4zZRagfivCMKsi4s",
  "key30": "3Zvpd2Zq8GZHqY52oVsAwJmsFZnRP9MgHWnniFrrGzaP9toJNNwzNNh8QJnDna4eD82BXYJ8qcYUCYxDECDBSu5T",
  "key31": "4WBEz3NXW48jmCamqGKPMNDfneQ6j27mPmU1bKWfY4YfYbPCU81xYrujrWHjzjzaRsdF18tfLpqRsiLagv5M8ksS",
  "key32": "Pqx7V35oMc6uFFf921ibubdCDJkaVTR4BNd3USkMeJYHLN4vHxbL5MY5kEunkwcHJEzaXwXqFzU2EuAYqX34DKX",
  "key33": "2MYfsRfUDeoQWi2xmti1crdJH3HCe41gwzxq4wZzguHCqPDnZEJsP4gCqquovj2gZnZKapmJ9BdQuo5bFdZ8sEAZ",
  "key34": "5rCwjcuGvkdrCZScZzrWS2CpjfZgwjLW44tLyXhHnzRDSgaWWChuXSrAZF5QzcMePifzAfioq3wFHMqnGefvn4sA",
  "key35": "4dVTywQNcfg9yF2E9e9ja3hskPefbmxW5jQomsQJMiMwphqBc4p5uyQQH7RNbvqLVNRiyxoa2QeTX8LxSqLojrRw",
  "key36": "oNWpaAifj76FbnoSe3gFn74adiNC7eJP88W6wiyyWA59do3RFazSNRgZ9tDdYZcnR38H3iHaBv4GtB4FtBNTsTY",
  "key37": "d6TVsczZcsFbDw9uCEwXtm7fdox5xchuLLqJLvp8gXHA6sEoJ6WNfMqxF5svGa2FNML3f3J1Y3uWxdAtD245Yd3",
  "key38": "2pVHEDgVMSEiXYe9kZx33isjWvYB4DZiGWLaH3c8k5soYTFd8iBodn9uSbcoHRyXkHNeqcEBeEMJDrRfiaU1Aji1",
  "key39": "t2WUQv4RLD2LA39rRqhBHyhzyU7Y5au89jAGpdmywDhoSMMfcKkkBFZZYbUK2x23298nwwzB5tchVALeN3x56pL",
  "key40": "2GsE1RViXgXnEtB1ndU5qum6qTGdqNX42uqVAwvxq3PiuSg9HVjEu9fDqnc6bCFXUWnB97k1qEC9bTuthZoB5koP",
  "key41": "16EFjN92vknstppXQJjzJGPUj4DpVmhyQ7hE7P2c1P699zcNAarcYAwwvMNFdcPr2dyGUyfrVKay2MDkdbEwyK1"
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
