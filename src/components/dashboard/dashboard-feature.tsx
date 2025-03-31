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
    "397TAt536WjN3c3UNxHJkayQMpfKi68wRJaQRbCqBJ2pvvZQGf5qdrC2B4K9UbMNQShUKGVKqpu7aH6mutbfHHr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MqKphvgims5HBhZALMATATxSvPPJRS3CGUZTBW3go51GgXvhUams5Gz3iT5H11J2zxzLme7BXk8tuWvy4ZqzsQp",
  "key1": "5GYzzLFbp9sh2S44NvZHQmNtKAVNcjckDywHZ57DKv5eWmgmraAmGzBTn15RGHgAYmumZ2MtJh7t2ZnUPGLBKxaR",
  "key2": "2bWrcWSzULkgWgNWsKLmxGBs1Y8xmc9kdL2k9RNtCYNartKh3jRP7vaQRjCGujGRqVb1RgsJuV59khWhYU1kmami",
  "key3": "2WHf7nMRYv1jwRv8vz1wpZrv53MG3JkYMzasLSXJCtJy1MPh7uQUt8yhwdvMBNeQZQHw5RAuik5ppWYkdpteS499",
  "key4": "323BH3vvhoeJ6qXcLJ5AbFmdRjbTVwaidCoJpax4t8PUmyYcaPpfMvQjYXjxHQbF4h9rksTURWqtqTUevDHPnGFW",
  "key5": "3LCPAG2HXEWjDSsvJFXadV7CjtUr67Sai2GWcWBn6T8Wq2eWguVdJdeJcXwwhdHGVJFyiWYDzNt3J3BGMNR7Mb2B",
  "key6": "4Ui4eL48StYaMKgdHP9tW8rQuSNocwncDgjqaWPvRB9LJ4fSzxhiHeGXVvWN8DWHBSuK12gZ7zeZKLy1pk59LVnQ",
  "key7": "2v9kF5NX4MHFJoSA7iSW4Ux8gfUWhPqiCJgzBZHBBPpPK2ZjRwbCeDS2Gp523AiK2ddvY8LdUskJNyhsDpbCyatp",
  "key8": "5NsrhrrzVYnA3DZj19yN77wFhNswSFkuvZnvsVQUGR55TddwrdXKwbWfiqMj8yij2RJFSzQcWU81nCmY3iqj1nAz",
  "key9": "2knzbZCWAXBavyFkB8nkFxe3wwSVPBZRH3FKp8X5DFJsnEbqredWVh18yuTabYoWhYFW4zUEanAHzDqaWQe93j1V",
  "key10": "9ieq2fc3XL5gtgtsryBeF62FcVU4gsZW1EVXppmJW4pw3K7BK5p6PqwMqVTTqr4hZuQhzCQiL5tyGAXQuDS9Pks",
  "key11": "3ntBmqYK8nfATC4HLpLxfaie8p3RM9JWKZgvpX3LP2PeGTe9MrcoHQDqxFf3Tc8xRbTAV5wBgW8JarKfZ8xt2TRm",
  "key12": "46ZMUHohbqrmc9GxUcs5sVUTDmL19V9xyp3FwHMYrkbDjcSZZz1WPDdbSvzrX86nTBytjZ3EVe3qYmMCcUFNkCH9",
  "key13": "3B74wrRauXpcppeJWmKqH6fsGKwiMh3JAEawe6VWYeh5Lg44pSnaZKmFWNEiJYvzRJDDDa5FrcntTbsnhn7vcBa8",
  "key14": "37ST3kbKFgqHKTNf6CjTQCp3tjopzp5fPVLkhebbDQTBnJrqQm6BoJ1DbFhtXmbrVVEE9qJWUSL1hicWrVkP36vb",
  "key15": "2QabEYHU8ZLFryjj8vM86iZo6Y8ngncUbAjoBJpntW2hzY2ozbKLchz2LKUqT6hYVUMfZwaF7Y21YpCAGV9uihY",
  "key16": "4MrzU8WrG3smXRfTTjDTLAuSnccWUGnurq1WpbwxMvd74D8fM8WSHHD2GpHEQ4PENak5jCPqMrdCYWxq7ghBhVRV",
  "key17": "UwCLUxL7GBLytAra92Ad2zYN5N5aXHAK41751o3CwwQg35yxXu4ogsNsh7MJDPjUbxvopVvXr8cxk5qeiHopZnu",
  "key18": "4zX3kDd86ZCPSzqF32EjFSprDN1e5Cvgc4bX7188W5FGh11xLJnggRreSMApJrpUTpqEowfd9dxRn8ipWw2TsfiC",
  "key19": "2bLHXCmq5WvnbpPqMDz1mJe33njhCQQP4Z2fjCmMMZQVArhFyY7BABHQVDKDCu2mF7W9TaX2m5k4Q4qLcuSFibRs",
  "key20": "2UehsKriLVN1HgLEhdMBpeS3j1cPNZy5n9RoNxPE6m7hqLE1UnAMm1havnpkb3SrEX1aFdVPTTUVE9haJCmWoDnP",
  "key21": "26SJGAmmNPvSCakoheDadYLRcbJKMLZ92vWACfh8r8fPvJuALB591PmATeyb9woiE3QwcCThWMHaATRxDtE1A8tZ",
  "key22": "4TKN41U141DEQwceX1SDkNCAuiuVY96qPjhNBBtrf4M2wEfhuuoF6qjJkCSrv3VTEL6XMrvcG5JcABuk3f5WbATG",
  "key23": "4gNEGdqJ7eWWGjthGwEu4ZJjfYWeD13enfPbcmNtyHVkBFJQK4ci4VGsmbhiYDJZdsvPbVToYoG94L9RQH7rpkGf",
  "key24": "3a6jcpcwAYLUa4PKb4BYbNEZJRDoYXBdFMnkxDjquKsDvP4DFW9Ztouzai9mVZYkjSmPFwLM15Wn3QmXbekXJUxc",
  "key25": "3R8k2sPgHAf8aS4UG83sdioCBnTqNri5CqrGg8dbD7vZSKBAKD3mteaU1X3aawZCq6g7BHyP4BwmAGnEPpSscohk",
  "key26": "3LpPqBCjisvqxqaStxRX98VjxJAVGs8fs95XkkeJvrX24kzkJcGcvythwVhqQcvh65tAWPzSTjYMVYWEetgWEdbi",
  "key27": "4ps4NUsoyzE4NXkJnzbz9v6NqAcYTaiY4iqNhmPR1kmxH6tJKJm9JQ8yiGC4W7JMVNmDUzMcMqginAN36sJ4QUYh",
  "key28": "4EWmY2Bt96kvuZwGn9CfCu4Kh9PG48FFSC5u8tpkoWmJUqHrceyYiqKxPDakd7KgJy4uhJM14fdpWbq2JeujZbxA",
  "key29": "2XUmNxLgUGUYxUZnvJUYb7FKouQ4HXDoL2GGAY8NapMFa8PhvEGbs8wW4BFPrgS26FrEj3DLkmG76aZiXVe9MezC",
  "key30": "4gsqGjkUPH9uN8zK1LVKdrhF28cSfht1hUjBqNUJ921rS7qgpG3k76eKVKTxSj8grwPwqawWhPmdcBfgPoHV8dyx",
  "key31": "5njDDFqGyzyZWhxWp1bBCqocmDBnhdotUoywT6cyCyqDp9FttgsN2dRSV8bcSHB34jJfs7CJ6AN3yxUFuNiEGAts",
  "key32": "bE5FbV43YFjEEwNABxJzhJMoRfvBndwG9ukxdJ18VrzVQQyVi3n1chkrUTiGEJqf7iL7UG3nvrqiGLTmmnbZ9mc",
  "key33": "49uR2yY3kFELbnVKMXweFRAgUkQrnXdmDjSqCSc6KQbGgYtVaq2NLsXdP1QQAjA3yFG3VXN7kMszNFrc5ZKB1yEH",
  "key34": "4kpudWrNfoo2B9FVqbQ1AtXecJi5V5u3oBss4M5M2bTby8nQbjnttjf8qsBzvCDHj3qg4qHSyuebCRfFUHxYbm6G"
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
