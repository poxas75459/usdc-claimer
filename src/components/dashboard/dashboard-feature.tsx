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
    "56fWqUMtygkyzFoZHJP8KzpfYJ3w1YHNdEkVLVPZwbevhztKWcU6AnFwViZDAV3eL1G9sx6Szgr1f5Z6rnwojWZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZoQvLS4esek6R5Nty1YDpuFjqu5EBZEQb4naZJwWdJ1BTtQBA4WCi1QUD1pu55kAVnFk5sZ1PpKNTeZkjbr4j1x",
  "key1": "5sa7Wg9TzkQfPQFZHRWrVEKhMMTz2HN9jywVXxYsLn2pPRTmsxSm4hSLFzxcijsnCDsd4jnjmsEhNfG8eo3BAuD8",
  "key2": "61NHxtvStbfGCWYNyT1ZLh41CxEv3ruUKnQEoQrCHvyVRjv6xkoM8pbNNGmBUU6pFRcv33rRxDj4qvB9dz5iE7Cr",
  "key3": "2DA6rePuT9DqwXZbNHTTayEgp7Z8yA42F7sC3yqxtNJBRa8kvZri4hoZCg39VmxKATpnjKDnSnJVRvPxxuji7hts",
  "key4": "3k4Vma5suvZpyCUkg2kiZtE7kBhoAQeKyTWwjqCq6TQUvJzPdKEujpjvvAxzc3WUkk2yqAwGwVSFUBJL6j4Vx9Gz",
  "key5": "2XvGNvdQeiVx39DGQENvB79iCjRwKj2bSLG2YpoKJGyY3eRdWfNrukRmn6RP4DGTYUKWyHDdexRFFnwed9prhpHg",
  "key6": "3tWUFtR9D6DFD9DsgjXg6FSPBT6vJbPq4J5ahAmgxjFb3PBqhreCTeAAhhbwVcQyoVVjCVRu7AX2a9fH2cNDDgrg",
  "key7": "6419yRfzgQZv56zo7We4NEPLPjFx2gBtWGCtHj1R7zSxS7xiKxp66Gtv7szLT2UThFuUFapxkW5jei67HqmmFDEk",
  "key8": "2Fet5RPhVtm67mUL3xx32PwH1XNY164c6V1aBNuD1r1HmtsLJg3ahKDf23f9v4PrYX81Q5KBFqVSX12iU7hpYMy8",
  "key9": "uLGyzwG7nwkVMXB8xh44Y79CCfab4thJ7o1Ex1SGnaMmv95NJ8QaMCm7uzroMMrZ4s2Vf7WGJxguNa9bBanjzto",
  "key10": "2CD9NoXmCoZPRuUdDn8d9TaEBj7Fg2EJjnoAujR5WAZVJDo6dNCHuoTr6aqkEhvym1LWYaTMk6CavBeQ6EphgDxn",
  "key11": "XDKWe8RwNi9ii2WTc8LJNDuPRLY2G9goB96b7VjGVa1PG9iikYBkdm6ERELe2dYgAMPHjSaaDYiT7TbVoS5oXyU",
  "key12": "2ZXuwYaeazKu3oRu9WYfh2tpCbLj3GdEDnnarnXrXSJKKifYvkqb1oxJb3JkQL99DEAqGgrZHBDxEVrs4pxinzvZ",
  "key13": "4RKEBaBUBFxj3tA6CmC5ybzh4zwj6Xpwj7A8jneGtKHb4YFTPQFAGydapjabAZyXQKPgd7sg79FKU9YsZQNwZnyo",
  "key14": "2TCMF8mkitJ1VJ2kMFois9cSCw7dJuXnp4pkfdBbx6Qf3c3XatcnrCjiKyZ5zyp6v65bTsUz34HohqsF3E8ZSyhy",
  "key15": "29xsvHpKqC12rsMrnpf2UtLGvMTJLT8F6fDB5ErC2itVouMwEo6WzTFjDUeNnAXCyTVX3XNLNvVtf5CpNCfjpZH4",
  "key16": "8xhDzYLzMEc8pVGoCJ5mo9PxksWNWbhZEFcdNdjghHx7QHRzbduct877sJ5uKaZ96qW2nBPv8AnJdNYTQEPGehr",
  "key17": "5rA5jwfjmLKKCzeZ7gn1mqu6EJhFQTBAc8srFwLzqihap5kJyFv8QDn2n3PcGGbg1cowAdm5nN6TpJdcV4PPxjcD",
  "key18": "2aNMxX5Rq9d6JeYETaGr3TWb1mNtXwV2ieJ62rAMga478c49ZHZXuf6f4TAm8ybtruhD97JSid1aNQRPY7mo8hdU",
  "key19": "N2UwgPHUHphdP5iiYbfDHUDkNC98o9AsfNkRYCJ75uKJGd4cPa2J89YriGcCSHf6LzqxwLdnUL3uRxf7DKfX52q",
  "key20": "aNcK3zMjHN5qUKsWyooGgDmUdxUunEwhLAjqetNsZ23ycYoRJJ93tdDB19uDJzo2mz8ifuikEx7fk336F7UyZWL",
  "key21": "pCLRCumPFHX3AAnrEBGJkEXS9XzksSTj9ct3YeoYeabCuU6PQnkfrznED9VadpLJDet732BoJ1jF8nYXq4ZGtEF",
  "key22": "4MWRY3CmGAzcQXWSRXsyrQrDCmKWoh71483zsHmv2bhyL2hbrv6MtAD8Kz44ptgqqaVLxsjenhjwrBA85kZothJG",
  "key23": "4XuVwKTwKUvrUkRj7S1K2RFqs8MmYhdJ5NxYLfb3UuvPPjqvtTCmYGCmdF8zq4KLHFJ9eTvZ3DvSaXPnnXyUDpCj",
  "key24": "i5F597Md4a4HoJjzjac9t2JSAYsmcwbAaquzr6Qy352hoKpKjS5gxj91EuzPGVpcmWmrdZVRyu4599ah4L2eWha",
  "key25": "2gePVR2sSWNoVbRf57hs113twHgC5PLCDqUZJ1NBN69wACb4Udz6Q3xjXi5vsuDpdAesrkugbfAXBbuQiXVEjANK",
  "key26": "4n7FfCJctgGkGfsCFGAgDheAFZWAkG2gxFia2VFJtFKQ1oAtgH2geEs1aH83kBCFqQiFNr5U4P4AMd2g3Ejm5PjA",
  "key27": "FeLmhGCU4zt3wnqafVcwpyjK6D6LugYzLkiT7Fri7K7fW1x9t92yh5Anch5sj2YBS5Gqua5AXkHPqmkrTqaVyKP",
  "key28": "4iUdnPibJFwpLoU5fWq8AT7c7wWtpQmx1iBuHqYuQYbRKu4uqgTh4HTu8PqVNbP1iPTDBX31jfFALp9ix1wcnbNy",
  "key29": "2yJw3daxUULQ1PHiVBUkyx2JVF22X5w68yuPJk4J8zN25H9ju6cmQ17EALRQWsStMXaXrhDEjW5kDj82o78wxuPB",
  "key30": "5dMH8ztQGKwrfRwsb1hz5BgxuSyEGdb4QHnHHQUKJyFDsP8g2eCYX2ipZFakVvUbo3yuJeQc6AtghGWaTxCgT2ka",
  "key31": "4c5rqDUwDbbbp3jMXZiUDozE2oajoT4qk3dbgjWbXJyBUkoxt31WAWUTpZ9bg5SRfASTBXpUPyyZNRVMZpbVJpwW",
  "key32": "iaG2xAEo4u8WnZBRDJtSLcqB5ZfecUqZzDiPzLBvq6mtTLDU27CvZTtEDRexc7EvS8Gt8UB8o68C8ijSGDntvnF",
  "key33": "56RFkUsbcCjE1Wdo4BKeqi65dmJen2YqhnX9aH3EUXVsediK9YCquD5nGe7kdeK5AEzBGUwMq8BUcW5R8UbZYGKn"
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
