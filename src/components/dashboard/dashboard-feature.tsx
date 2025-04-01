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
    "636Xfrj9TGM2Dtr9V3Wdzyv91qPu7qCrNNAWF4FxVxU2r7Hw9qAnkMFePYmYS2TuKs5X2baUrgqnarKyRQ25KTvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66cbzD2di7PaiWBYQ2ybCZLsErGdkPgzMT5fHHJpyyBuA8oHJVjEhHfhi43AUDfaAyu4PTukWtZRoQLtVLLZmcUt",
  "key1": "4guhP6qbeR6wCLLTY3ak81WU3VjbvEdbs4Lx2dZGC5rHY7DVgWgmk7h3Kx7QGKbiwVMnfxtLsz889bpYZyqoQ9PC",
  "key2": "1CDQWtT4HKsNe491WfQUEaxEzjZUtLsJtVmji3Bsti7oS6wfgLt91T8ArufAbJXYnf1a6RCRPs95rRgLSYa2iYs",
  "key3": "3nfuDVY2TCRN3WmZwmu528tbU75NTz1aJFCWfubkQe8WSwwuwMVZJUFo8kujmA9GGsHpFpcZDCvhJvgDGmYCBTtj",
  "key4": "5jkuWbDUSbszbeTX9sLrRTcNrsABhsiudP5yMHFKCEZrojJTXNbXzJMgcg4Bva2dik839HvRX9DSgrxxJENxQ3om",
  "key5": "4Wt2rsupkP51gf1JHixyAz3FyNPpQGpFQ1AHHe759Uc3MJ2viPyS2Sc4ns5dnpVkSLCS5fjqfLV1QuhTmNyXfKhT",
  "key6": "3VYWHijWQiufrpy7MDQJGjm4qn2VE4BNpmtUwTwhJzb2tgR69dioS8CQN5PR1d7DHWUK8nnnwTE5Rm1dLX5izLis",
  "key7": "4bkHpUWoeNfH1sBSHDR9C3ifC13q7C6i77YHav7FP26Jn7oZ6ZGHb3MNTZnbiUKjdjM2DXQvdDQz917ebvT35Wnq",
  "key8": "4k5z9nBqVy9TVEXwahRfacuLqbyLvFKHv986xK5mue5oy4HGkRJSc2XxzLWjgq6ZFU5c6v2FtsAd4UTqiZoeihz",
  "key9": "3CEd3cPuYoJgca1KmApHByGkxfWydaywTgR8HsAXqJP2N1G1cG8vTQmztNeme9AJ1wNojVCKAJBTjryh1JVgdW1A",
  "key10": "32CGrfA6VQkvUWg9zmocxG9jSyXNyUoHH2aw2qksqoo794WPsJREof4wa5FuFiN3N9ASE2hinkhrABvgPhrrLRJs",
  "key11": "HxRPiuGx3n1jEytRF7ummqejritWryjW6XDy28x3LebgaUPj3DjQnxSC47CohBoghpioH9Z8X3PxU1Lzu8bfkbB",
  "key12": "3MJmoic8dm6mU5qyLUrpqK5v9GyNMVt6uQfaaoFBugsxxwkupG9J573e3NjEf2jmLquTYAfFx9BsUwjumMXB5ub8",
  "key13": "5uSYbAGQft4VwyFFoK7TBs8gSgRLjgV5A2xWkMvSRy1hfdh68qh9GMNP5zYZGYT6LCrVnMPamzk7MuiezXxiVV51",
  "key14": "54b3A5JJKK9CyJctUwtTNyra5mcaXDRM1XLUsWKKwhk1EKjtuAzBWnCjqw7bdEkmnfVGXe7S9ByxnH873f7wKPrs",
  "key15": "22BCYn72EKyATc7pnW6eedCMuXeisj7ggMTFDXDA5ort8qaZi13Ryp1tWtVLDr3pChkx8MWNh1HEp4igmuVnZBhE",
  "key16": "3eqdK4mSiQ9bsZxYsmXvkFQ5HjUzmzYHAXFn9hD6Do8EL1K6iUaLrWMNC1CV5hPUCbWyEZB3315rqL9sued8NGEP",
  "key17": "9CcUH924fN5BVq6CFmxmeKCXxW5gP9AkLdThsPPXWjomR59tK6X5V4Y58EFEBTY3JgNWhtt26yq1HYfjukMNrkc",
  "key18": "H86buz45BZ4J3JR3VcaQRdgP5SLd2StSqVsMKNf5shTZ9RDhzvt2ciUwKDB12ukCQafpUPJm8V9gEvmPb7Y15ZA",
  "key19": "33YHGUrigvDb5z3t3d8NjLHNuVCNUZdope7s6hFEEJNiRpkpNLmTYFACLcELwPwznGWHvSJ8NBZNprutSFxeCBgx",
  "key20": "Pxk7MmtCfVGA2gAuLzhoLjmC2aTWYw7kfpc8gakFdJpUXSycCuEMorVByEXCLmgSWQc3CKxnBkqT7RFsoof6WNg",
  "key21": "rfcEkbXUnLqt6wUn6g5drVTDPasZ9VNWA9LgDkdMDQcQzP5SYwiyzcTHbUZAsJsSiz8svsHabyUenDjTG1JcnGS",
  "key22": "2nkMqD4LAxc4DqTpDKJxt6Zav2Q1eDFuxdWkKVFhsLUDv8XbGAvmQF1KZAALvCSci3Sr24yXFavxdLqNAXDGmHZg",
  "key23": "3PbrvAAmuMX4ST9MkT4xor4qdoP6eReRvSUaiMXAmXTEdNgiabQWASf35LkKqQChdj34fQRa78E9X1qv4VAnKa6K",
  "key24": "29rXba4d8WXWve8mgcCe8QJpQ7VdbfPD138iFDZ8C7ZmEd9NLZRv2ogXhiKudtPQMphiyC3gbRHpsU9JTEviFR4P",
  "key25": "4KMc6j9GPBpAvsdgQBU58hyr8JSkjYwiY4ZRNbJchqHay7HXJBvtWRKuNiMLwPsUhWi6xsYcRpkNrpLehSW43wqt",
  "key26": "2qA7LVV3puNA4NAxPsk5uuvTswHbPd66qK6jhiTUB6P9bcYbLwJFu5qFbuguHEJmWKK4p2cwAdxaTmCSfehVxLRu",
  "key27": "4gLefoeujXcyNs85tCpGLsmxPVqL76s2Fo4XhKkWzb3ETi1FQgYgb5wpZ9UUJYQpM6fibCr5GC9U9sLxVQZF8DAT",
  "key28": "55nXUMg4NCNLxmPMX1pwWrZ6eg3MUgdAw8bSJ6tnkDQLfgaxBnd2zSzd2xa5GfJqcaUAzrevtn1ziBTdVWrJGJvr",
  "key29": "3S36DbSzcg29r8qTNLPwvTouCeocNnjbzEANtVTyAxBS5t2WxskT9ukj9nQvD565Eo3jaLAQ1R1pCdeb1pF7U672",
  "key30": "3Y3FizMhBWqGv9T8B5jw7tVnJphdkqaKHpm4URPce2HZ7LRqSHcmfi2S4E1EeB3kvSPupeSr4eAE76ssgch2CyjA",
  "key31": "24Z2J7EoRrS8eetsf6zK66fZW1GBrrDwr96WMmknvQeq1wkW6FWrvhpc8sn5nF1hnonodxevJXoHq9PunULg7Q2H",
  "key32": "5M6NecBix7vefvPeDpuXuwksqvHSVeCXZxrVRp9JnnZxUPug5MagNo8c6fDQsc4axup6gLAsTKWChmgwETbyRGz4",
  "key33": "26JFHFKnL3XS8D3egEK3uCuN9qAxJ6pFVWU7jk2DNy2YJNsWuLZ75SHBGgkfH4xE7MB2icwFwuDig14Ypm78tgsc",
  "key34": "3psVzq4XoM8XdodsrasDk5VqzdN4mTDmu3KPMnpjqnrAP4Wp5fXciz5dbJRjD56AnZRNXaNtYTdQ8r278W3T8XfG",
  "key35": "22cW2ad3Ttce5H6cCja5h9sDxuzzvBxJeADn8Kd3wMZAFGNYxDN7fJsWc5HBFQ7CbQKzBCLDEZi2XEvT5p4w1aRa",
  "key36": "9BHCthGKgqwsMs5hLds93QGsTDaGKXJq1UEEaisn8KEykRtqnCW2WCKnTG8BBeRo9a1pUpBnNRRr1eQDJDZ1hXu",
  "key37": "3PvBQsL5S8mUZXsBexUEEx7cjkUHcYLmiMrAPiJciwhZZMaio1j7G5TS4WjJb6pMCa8184pgwwVapHaxitQ2JRfz",
  "key38": "yQkA4wuZjYKAi5a8FsEDgqD4ZGEZzQ9Um5Gv2sBuDgPfrVLTNhN6NPAtHnPpx9EGCH6khDsFL9TjGpGABQqLo2P",
  "key39": "2C4F7PrjqwK71hDHyyy36eyyFebU6tzAzw23X7Ha3DDedwoKhqNSuy1G2TF8dXZKjmxrho2dc3F4tzAW4xXrMNo8"
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
