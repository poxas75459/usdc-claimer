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
    "DszaoCvC5FvT3X191kNzh6NzhjGXXpUPNxJdkP7qHMmusp3bEK358tP1bq8Hwj7SqShbMhf1mRgAxULtASyDJFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M8KcvumeFfA9APsnk4KmwyCB7FpQvMS39SYvXKAETnU325TCgtw1eJDr8iuvpcZNJ96UTiTwMmrVeL5C3TKfJxG",
  "key1": "b9quhVgfA3AeE2bnJYCaJcPsCfhDrDARUL8PWXaqjMNQQJkucjr6qGPahpeop9Jyek6cJH5JqcWpAoNnXBbNXKf",
  "key2": "3vrEEzC5zJyYUQqAzScssj5NmhPYZ3YRR4UgYkv14vrKStQiyaNHpvkNdCDZr1nb62Ay8XCTnFzbgX4eDMCkLxSf",
  "key3": "4Nphsox2YPKxBUGE7sgaKTw1JRr5SjxMmUyxygtHMD1ieR7DkXYD6Mb7NkVUC5GTZANyV8GK8woMs2zWJTTPUYu9",
  "key4": "4FW2Z859rtpQK4WiN3hJ4VBrMBH79TGrGrq79aRL96QByzhhgiy5qLFogY1xBHWLfjaRddu3aDBYocfks2UPLgkL",
  "key5": "28Wu3trELeDwtEcmBJFPaRj4sfac8G3aQ7iutWc6i9EZVTCLVP8nfps5yMheJ8Ycn74i2sVWhJRZ4H416kC9MHwM",
  "key6": "CT9DNr8jmkTZdnHXLmUuXQFQZGVHaQSxLRjnmZY2J8xt8v6pfAwB9ikZBLuu2jmPkNZH8buMe3aa5VxkXBbbjUJ",
  "key7": "3TYA2dviMgifvDo3hFy8dicxrtCbTNCJum5zmT78ryoEB37N5jckuQZwYvBkhwT9FwKHo3XqB4HYqQdrLH42ya2e",
  "key8": "2e9t8EKNnqdrDmJyX2W24KhR5d6AbHSPnLHoTbDTym68nEarHsV6eyY1RKK6YRR7U85rTyRVwCNhVDYBbhPFb4xT",
  "key9": "3UwWWfAKWZ3Vvq52eBqCE8nQNwzzRz46QMyYSNpfhUoBGJ2YLVhyCsg62xUVpwXuqahAgzC54LEFuap357uKQv6Y",
  "key10": "5fgM5GXH54BF9SDPQANdHsi9hmosxDv1Ym6yF2fu9bgrATLzax1kM19bV13HNQM8kfU6tvUdUxiJ2ap7xcd79SV9",
  "key11": "3dmAY3QJug78vQ6uQ2d3pnBWwXtj9kei29iFTeXmE1tQPHcPFnJcBAYVD8gbNa5dSKfAkMJL8fyxykqeRy5bXntz",
  "key12": "4LYbqTBbsahoA3ftSAKZNuhK9KbrezE2f3GakH7zMoCtZne53pW13RtVcygnfdCkvrjxqntGA2THH6A2LRgn1QnQ",
  "key13": "3PKVZU9em2mh9mqesTE2vqiupETSd9yDPLAwBSXiJXRxAPpiCBxErbTdwdc2v1EqFify3gGwhNHVSAUFb5BXXKnj",
  "key14": "3egCHMXdVyu1WpQsyNBsTcYDMoQ6vUQBakvK4Q7Acr7Jdq1eDBpKRVX4FAeeM8sT2De9jac3u11iGZjfDjTLT8t6",
  "key15": "2wSvsrBGDWq2AsCu3GfKGrT7wUphAXP8tpUtd16XnhyLpReQWU4YZdqjZjZwiGPZ8LmXNeSNyfHzp5Ub9rHZhZ3n",
  "key16": "2yRc6esUeRiJoAeCjkzDNCXzUvau338taHb81G5AhXSSb28nmwfrEfS7T2qe48MaoMrszo2E2hvYp3b6kyqYAXc3",
  "key17": "4iR54WtpZeZ6EwuvykbV3gxK6wsxGvFLvvJyFRw9YX1zdJ4HbzCx3UTroh3oTSWAhYcfTC7vAXg7gshCzWsbrbti",
  "key18": "23phULtFaWES5rzdn6MvYzZZc3jNHR2QB1BFAoix6E85LPUzhmUL68irG3SDJdyD2n1xRauFkx2fkj4Cp7HHLVUN",
  "key19": "3iaNGW66tyvSbjfesubCFQ1g5VWKX3va38BDJnY4BgEu5sG8NhMDmDE9M6onYczmTThNLs4kr4sWzfDMdNTknroB",
  "key20": "31HsUDdARApY7XfemrzNx4aTZHe9f1KiiCb64iHwtY2uMuykX4Q53GUj6mbv4wJfuTaED7CxyEoM9f8x1y1CsQ2h",
  "key21": "4sLCfY6ohLNuqmJq3vq5nePnu9Hg4Sq2KSBoG3c4Yn7HqvEm2ejhe3DV3BbJ2AeBN3gdgmDCnbbPEQ9kbtATsPvw",
  "key22": "29Zjwxmc6bChVdqX8qW3wrRz5Gi1jD9mMzVuzdPVZUyeyXuE3y8VdJQemLWhhDW5CTVQR3UrtjuPDnjLZXDKFRBw",
  "key23": "5mD3A6PoQubGhVgiGLCmJPHKcQXZbRjxkt7xS7H8w2z849RAffR5TrG5gqcpd8zAz9mQRj7sheXtXUK8zdf2Z8Nr",
  "key24": "WHZbUeCFtv5KWeenpej7RC8nyRzpuerEamiVkCbHKiin4bdDZjxznwWZTgSFdWAdPnrw6bjkqSoWWN33BtzN58V",
  "key25": "3ChT6TbbBVz9B8UZB2zNpY6cj7sZsYLh5tpXRgzpwwwTrzYRLn1H6CUMhKV4UoGxb6KQwpS3Xx18qriLqmWpXjwp",
  "key26": "Jxze9UDjfSu6sCdQNzNqXrazemhtPZeGJRekcEpx69Z73LChWTTXi8hZyyCSE6fi9fEmRTModGwoE8vESBjbvX6",
  "key27": "5NSZwKW2oVFLJqkaVJxbpx1iXCddwMdxRL3MV28ZrsjhV2yz4fECtJ3cNyb1nLAa8vonADN4UBb2eURXfanPdbez",
  "key28": "2zVgYr3A6JTNWufWxSyxnA83hwikEvCWLiL2vk5itxBawETij1SrE1VorgQXA4gW6DHtfZezhoYFuKrAG4iWE9LA",
  "key29": "3rxFbBW418vu3KnQfnarEMQT6ggVXvcVn8bnQ2U2ATq3ndaAbvvmyw4NyFfwVM9gtqvihbTH2Cnw8pCTVEof9dUS",
  "key30": "5z7mPE4xpXThjxK2GVRjW6uvFtY7VoqhUzUKyZ47z5pitT6ZTSX4vp1ioc3M22f5nDu1z78HdzwaD5arrFsqUC2s",
  "key31": "DysQnhLHkwi6Ccdb1ytL2RN35cD8LgJrWTQ647ni1WtVgfSXc5AysyrckD4s2X2VNaHj2HpLsSL82uAyZc2RgNN",
  "key32": "2763pRE6okHQTHaEQo9tSwVR2wArQFRejhMcS5qqBcaDRJ3KnL73HPVzt49ZJZYCV5RZXJTWP7mmkJxhMqemqNWk"
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
