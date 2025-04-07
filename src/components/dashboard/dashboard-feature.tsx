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
    "4kUcHVYF7ugcKq3Mf6ABfpMf3VmpvcESWQ9v9hF7mKvhGENg6xDHvofdbDTaDHxKacFYeyV7NWqL61EZ83VAtTAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x3kPLw7oZxZEjhuKZ2hmrHaBp4ngcqSn4ww4Yg3cciUhYce15DAtv7RwwM8sN4Za316pteoBJAyb9GnK4qFGTrU",
  "key1": "5Q1xP4RtMhjd2B26VACdnbmTh2kzy1KN24ftkK1u9n5xTocHQQRmD1R6A4MbQD3zAzUMVJxmMDLZuxXmwA3P9K4L",
  "key2": "5YnYimZBtHW7Qyow48ieUW6P7xgUJkUtGgEDKjN6iDNrYz5Wi1J8CqhqgUJCkNQ5iSoAT4N2sSGC8AYYyyoPoPzg",
  "key3": "nYt4Bdz2oTrVx8xdMhe4ULt3rDcQJTr4pRrnj3JvXH4vYREcECuMigeyLTCUEZRikxibJGJmfUwyJ8ke1Re1XMs",
  "key4": "2LNke68JJ7xeUWYSzjSZHwdBfD5mJ2q6zkqqAw94Qp23b7LQ6jHU6F3nz2YRcizk6JDzTHAsEnnKdQkFo3zyMXuK",
  "key5": "5WrEL47qVLRfxNRze8eg7mBdJv9f4RH6gPhwCFk9quNeVRoPLonVr5orwxsvo2KGhDTZEgEXqCB4Hu2VLLA7EydK",
  "key6": "hhsRGcrDroFecHLjVMsuCEjLUsXnHSctqgvq9c6kG2Fo7T3KesXqPLBbMybvALAHZYzCpqeGTrZSXZZrHrE8BwG",
  "key7": "2EkKsT9V1Kv9UXXJ39bN5VTDstyY4wbbCTUhKTL7uiWT88VxyRfTKECWf5wRphZrqKYeTphuw63K738enVpb1sxp",
  "key8": "5dWabg5sKYatSczik7dntTweYaz7Bfjs9MFX74T4Yy6c1sXLXF3Vb56EuJHHNAGZDkfBhQREte3sjVoh8x88Pvk2",
  "key9": "5YqgtqEGgi7r3K9rpUdVuKMovaD4wAJQpzGG9K6JbHTV5AiQkx2cL8oCzC4tfTpwMQNjhkPXSxtjASYiqgx186Ks",
  "key10": "54XrySKJqMDCTVwy9y8Mf6NVj3ndxpz3BrhcuDUT51WsHxP3aLTHWMUYtHMqsZDVfySx7RSHvcGKXmXW5rPpmcPo",
  "key11": "46uvZUcHJqjpzXN8VzMC8sUSUzGruXCBodJAbFpE1u5b4fRiyZZFYJBdkdtrq6YDYqLKMazYe7srQM8QuCTvUVkz",
  "key12": "4j3zZCGbgKmNwfELavJrrJGCcvgnpzewPxm6GzkCXAkSuZYGCz9WAq64oaCifQU1gbwdxaFKZRiF1Bipuut4p1E4",
  "key13": "yy1cBGrN7YGjjuMW9ebRNq4FjKKuLxRWKJdhZHmur3BYqpZbtW3WhZUEnbm3GDdaiA3yFTD9XZQ4QAfsxBjcKpf",
  "key14": "3nb8ApTFDXqAAYCdgJ83XmLj8u26amj5EievFWnx5DZpirtg3feDNbT2zxPjAzFac1a8AEhGu1SD4x3GRndVfD6t",
  "key15": "2w4aBuGmgZ4GF9VUeQiJUePUPvpiKjsN6z1RhWP75DPHyNJKdbGvSXmeqYD6m56JkP2EWFpzZR3H6QGdNFXCRsdc",
  "key16": "285SCKjhepGgiTCjCDNBgnmfY2Z2NffwmCQZii7oE3MsebHySAk5pB6nsxtqWqUQ27mXdFFuHhu86sRvWPjzuR7C",
  "key17": "5waL9nitFkWiNCkUTHVLjExDbxbWaRoRNGWY8CC4UXvttrQULjYRgnYaoYz7L2cKGnhYx77v4Un3xGcUCZVoip3Z",
  "key18": "HcBjPYwpSxKHGAiGcsU5szwYzqF7o2NnFNkQBn4MZnTpv1YbmWzP2AyQV1QNYJPh5dWiXXRVq36J8PWnKmtAfho",
  "key19": "7D6vGDCbLtRnRdSPE67tZLUCmcodnuiTbdaSRTikDK5cUgRoqzJZtPMzAkjYHcxSm2Aq1rP1DgE38GdHy4AnvA3",
  "key20": "4DcqrBBcrf9pP5Yvae1uDcXYZRKKYMJ6uRCW9VmLGLoYRosU1oE1ukec8zCxa6BYRzg3Ckozk322oYvAPJYokzrX",
  "key21": "GEU1LdedWXDrZSKXq3ToZaLbmv1RJrPkMwpyHb9t6EiTMKjUrCEa8xvw9XNW1cWs46b9S1ktkmXTvMhCTB6E265",
  "key22": "4LXqW557tbPLCwQND6USskfqLHop3x2WTrMnSc3EzTEKRtEkNzNKaTyrAfFQqZM5fWfTPoSEVS9PFRuYDCdLkeco",
  "key23": "5AfjykfpG65fr4CxKY2pPj6NhHZ8zRMYnn3x8sXykRprM8Gch8PxDPAaNDt4HC6H1tDrt6msnNQ4zbZ546yS3MVQ",
  "key24": "5PBE4jP7CY8Xn6DAQgNGUaEbfCQYve6ikqefbK1ZkoCV6nBpZaCgUVng87MoMrNWn9FjsSu8VxSShVEgFe6SPcuQ",
  "key25": "PRWVxATtzS5HYkYUdo4pBhMRbDean1mCBL9tHJbCyGCwWCsrPWVg7V5PfUohFrFtPJi8G6HwnDpVTrYtTARQQ92",
  "key26": "XGgLswLgu3KMVHBL3rec8iVvEeMskVe6h6pBpaQ7DKghyYiDcjPKxw2WXJzGqks9qi3dPbUnh48eVgym3H38vg6",
  "key27": "3oAxvHRBmJDzTZo3NB7aMpKbPhTpk2bWb4DB92sLuqJqEvfz2xE9W8w8d38kGtGF64Ua9LztqJZRT6figgnvkGcm",
  "key28": "5RiRxNSevUtsNigQVf7h4k1vwFhtZrkyso6bDongmgghUrjCrcqAjNvLD8sAaVRvFNFKp18EXCJw7eZW5xxAifM1",
  "key29": "53E7UYX5rvYv3Yuf54S7vtZt9hCdnw8ULSfmcZdgZC6QSaRu4F1whsM9u1CJxQj9D8WrwWszbUdjgZT8H7csWKez",
  "key30": "Mf2QzCfs5rrWwUmdQJc3LAj1RtZhkKZ2SrgL6RedNH8PmVxgZWNbLzTPoi1Uv7aW3EeTPGQbyLAwsZ2UA6SeJ3B",
  "key31": "4p49Wxt62ZYvPLPMpjeRMJdkoHpqgCrAXh1utP5nN8L4Mk7pX6yGwAfNoVZPcAv79DDPN7Rs4rXP61u4W2yaRp2A",
  "key32": "2U6vjtyTFjFh8gqLUwFXLJfLn3J9cueVMRrfyQQ3LamKzAdFTn1bo4LixL6qSRen6wiYNr22xcut5vQAU6BEAct2",
  "key33": "4JUY4dCyRDFJrSXPWvDCUJDHcMxtMnuVQKEyTRQtbzcoT4A7zek42v2bNrKNSsRNzRh1JARz69SjGuHStso5dN6p",
  "key34": "61PMp2pTuXwTxiCFNkPwHX6Tp3ezLCtebCNQDvgQ9er12DgByZDUqYV9vCkp7JvR2hn2FQT58PJrXpGJAyBjTppP",
  "key35": "dSvsiQGPYieqhMfaXPo1KrohW72QJ6iss4zB4mh9xWgEzx2FjqxK44jYF9BJH1or5MRV3Q1ynJWYNqPnq6DyS5w",
  "key36": "Pbzeihp6rsa4qyASiTi2WbpzThWF98YvBxK7ECKEYKZXvLLSdwXUd5feoJgBXiyHycnsZoCsgPyD4Pj1JkdG7xQ",
  "key37": "r6i5ZbYP13gkX3uYx1mbAnnhXPB7EJPiFa99ApoWBddgmqaU1AYwHt2PRY7bpQSbNUuYuMHPuBa5HfQoXJtjKZP",
  "key38": "59QLjcQGX6YJnpGvstCFQyFvRuABvUBA63D6asM96VkGLVwUpeLymiqjwb6Hpfyg9Lfzgk95ndy3vtSaZVc3HJDr",
  "key39": "5uVDYuCFAvKNjy334171zrqiFEdk4NYqXWiPi2w4SP9nEiVRGCMafMKTiWNYyJSwribo3qMLBaLpnr9XtN9Bt4Yu",
  "key40": "4iAKQkH9pQoJrhuv4aCQBQAVrMxHPzDwPpbD3ioz6d26skAif8v9PC8nPSvyBaF95Y69GYFguf2EGwPPgemJyxwL",
  "key41": "3ii8XpdBu5Rzpe7RmeCZw242gMbVoAzCEJd6NYVFPtoWq3uag2FW6gW5KY51vKLXHgFjNBK3iHzVd2DgvD3UWC5P",
  "key42": "5qUyTuxZjtWFHuQAkyNGr8oJfCiJn6bzSuYoAgrMGkPYDDVuTX3nGgWBCi1HCT1Fiqt1LBKABiEsCNuAcyd5YiWr",
  "key43": "3yitYRr26UujyxjhVsrcQrNQMg15Bbywspzef49h2fR4W6Tf84GnwPDzpWztShL5jmc1HDWtBCspoEJBZLQdj751",
  "key44": "2nJkCEuqJ2pmsUeEaRB2WxeKvefe2BiJm2WfCaLYaAR4wbCQGbMmQiLkNj3mTQukxLz5sGxYP4CkRFN791bsLGGX",
  "key45": "55pFUMQ8FMPRuMik7AQ42WAhFLGRyhYWDqQ57eCv2gmTbK3veJrYmzrK5RJ3ez4d31tJ6c32xRtvB7JaxVJypjPF"
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
